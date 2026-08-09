import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DiscComponent } from '../../components/disc/disc.component';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-home',
  imports: [DiscComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly projectService = inject(ProjectService);

  readonly categories = computed(() => this.projectService.getCategories());
  readonly projectCount = computed(() =>
    this.categories().reduce((total, category) => total + category.projects.length, 0)
  );
}
