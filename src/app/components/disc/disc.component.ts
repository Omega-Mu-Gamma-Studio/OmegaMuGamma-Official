import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { ProjectCategory } from '../../models/project.model';

interface DiscItem {
  category: ProjectCategory;
  left: string;
  top: string;
}

/**
 * Interactive spinning disc used on the homepage to browse project categories.
 * Categories are laid out radially around a central hub; the ring rotates
 * slowly and pauses on hover so labels stay readable while browsing.
 */
@Component({
  selector: 'app-disc',
  imports: [RouterLink],
  templateUrl: './disc.component.html',
  styleUrl: './disc.component.scss',
})
export class DiscComponent {
  private readonly projectService = inject(ProjectService);

  private readonly radius = 42; // percentage of the disc's own box

  readonly items = computed<DiscItem[]>(() => {
    const categories = this.projectService.getCategories();
    const count = categories.length || 1;

    return categories.map((category, index) => {
      const angleDeg = (360 / count) * index - 90;
      const angleRad = (angleDeg * Math.PI) / 180;
      const x = 50 + this.radius * Math.cos(angleRad);
      const y = 50 + this.radius * Math.sin(angleRad);

      return {
        category,
        left: `${x}%`,
        top: `${y}%`,
      };
    });
  });
}
