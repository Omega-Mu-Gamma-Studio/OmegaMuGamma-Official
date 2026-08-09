import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent {
  private readonly projectService = inject(ProjectService);

  /** Bound from `:categoryId` / `:projectId` route params via withComponentInputBinding(). */
  readonly categoryId = input.required<string>();
  readonly projectId = input.required<string>();

  readonly category = computed(() => this.projectService.getCategoryById(this.categoryId()));
  readonly project = computed(() =>
    this.projectService.getProject(this.categoryId(), this.projectId())
  );
}
