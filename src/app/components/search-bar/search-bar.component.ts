import { Component, HostListener, ElementRef, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  private readonly projectService = inject(ProjectService);
  private readonly router = inject(Router);
  private readonly host = inject(ElementRef<HTMLElement>);

  readonly query = signal('');
  readonly isFocused = signal(false);

  readonly results = computed(() => this.projectService.search(this.query()).slice(0, 6));
  readonly showResults = computed(() => this.isFocused() && this.query().trim().length > 0);

  select(categoryId: string, projectId: string): void {
    this.query.set('');
    this.isFocused.set(false);
    this.router.navigate(['/category', categoryId, 'project', projectId]);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.isFocused.set(false);
    }
  }
}
