import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectGridComponent } from '../../components/project-grid/project-grid.component';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-category',
  imports: [ProjectGridComponent, RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  private readonly projectService = inject(ProjectService);

  /** Bound from the `:id` route param via withComponentInputBinding(). */
  readonly id = input.required<string>();

  readonly category = computed(() => this.projectService.getCategoryById(this.id()));
  readonly otherCategories = computed(() =>
    this.projectService.getCategories().filter((category) => category.id !== this.id())
  );
}
