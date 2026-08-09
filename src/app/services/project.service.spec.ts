import { TestBed } from '@angular/core/testing';
import { ProjectService } from './project.service';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load categories from the bundled catalog', () => {
    expect(service.getCategories().length).toBeGreaterThan(0);
  });

  it('should find a known category by id', () => {
    expect(service.getCategoryById('chan-series')?.name).toBe('Chan Series');
  });

  it('should return undefined for an unknown category', () => {
    expect(service.getCategoryById('does-not-exist')).toBeUndefined();
  });

  it('should search across name, description, and tech', () => {
    const results = service.search('recursion');
    expect(results.some((hit) => hit.project.id === 'recur-chan')).toBe(true);
  });

  it('should return no results for a blank query', () => {
    expect(service.search('   ')).toEqual([]);
  });
});
