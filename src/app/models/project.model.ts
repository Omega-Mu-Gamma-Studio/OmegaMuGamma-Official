/**
 * Domain models for Omega Mu Gamma Studio's project catalog.
 * Mirrors the schema documented in README.md -> "Project Data".
 */

export type ProjectStatus =
  | 'Live'
  | 'Complete'
  | 'Content-Complete'
  | 'In Development';

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  statusColor: string;
  description: string;
  url?: string;
  repo?: string;
  tech: string[];
  image?: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  projects: Project[];
}

export interface ProjectsData {
  categories: ProjectCategory[];
}

/** A flattened search hit combining a project with the category it lives in. */
export interface ProjectSearchResult {
  project: Project;
  category: ProjectCategory;
}
