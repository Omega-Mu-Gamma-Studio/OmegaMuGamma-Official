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
    this.categories().reduce((total, cat) => total + cat.projects.length, 0)
  );

  // Pick one standout project from 4 different categories
  readonly featured = computed(() => {
    const cats = this.categories();
    const picks = [
      { catId: 'chan', projId: 'python-chan', icon: '🧑‍🏫' },
      { catId: 'cs', projId: 'seeds', icon: '🌱' },
      { catId: 'engineering', projId: 'gatelab', icon: '⚡' },
      { catId: 'creative', projId: 'blockbeats', icon: '🎵' },
    ];

    return picks.flatMap(({ catId, projId, icon }) => {
      const cat = cats.find(c => c.id === catId);
      const proj = cat?.projects.find(p => p.id === projId) ?? cat?.projects[0];
      if (!cat || !proj) return [];
      return [{ project: proj, categoryId: cat.id, categoryName: cat.name, icon }];
    });
  });
}
