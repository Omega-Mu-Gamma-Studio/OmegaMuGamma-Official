import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProjectDetailComponent } from './pages/project-details/project-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Omega Mu Gamma Studio' },
  {
    path: 'category/:id',
    component: CategoryComponent,
    title: 'Category · Omega Mu Gamma Studio',
  },
  {
    path: 'category/:categoryId/project/:projectId',
    component: ProjectDetailComponent,
    title: 'Project · Omega Mu Gamma Studio',
  },
  { path: '**', redirectTo: '' },
];
