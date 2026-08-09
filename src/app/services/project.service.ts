import { Injectable, computed, signal } from '@angular/core';
import projectsJson from '../data/projects.json';
import {
  Project,
  ProjectCategory,
  ProjectSearchResult,
  ProjectsData,
} from '../models/project.model';

/**
 * Central data-access point for the studio's project catalog.
 *
 * The catalog currently ships as a static JSON file bundled with the app
 * (see `src/app/data/projects.json`), but every consumer of this service
 * only talks to the signals/methods below - so swapping the static import
 * for an HTTP call later won't ripple out to components.
 */
@Injectable({ providedIn: 'root' })
export class ProjectService {
  private readonly data = projectsJson as ProjectsData;

  /** All categories, in catalog order. */
  readonly categories = signal<ProjectCategory[]>(this.data.categories);

  /** Every project across every category, flattened for quick lookups. */
  readonly allProjects = computed<ProjectSearchResult[]>(() =>
    this.categories().flatMap((category) =>
      category.projects.map((project) => ({ project, category }))
    )
  );

  getCategories(): ProjectCategory[] {
    return this.categories();
  }

  getCategoryById(categoryId: string): ProjectCategory | undefined {
    return this.categories().find((category) => category.id === categoryId);
  }

  getProject(categoryId: string, projectId: string): Project | undefined {
    return this.getCategoryById(categoryId)?.projects.find(
      (project) => project.id === projectId
    );
  }

  /**
   * Searches by project name, description, or tech stack entry.
   * Case-insensitive substring match; returns an empty array for a blank query.
   */
  search(query: string): ProjectSearchResult[] {
    const term = query.trim().toLowerCase();
    if (!term) {
      return [];
    }

    return this.allProjects().filter(({ project }) => {
      const haystack = [
        project.name,
        project.description,
        ...project.tech,
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(term);
    });
  }
}
