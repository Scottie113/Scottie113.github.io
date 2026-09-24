import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    title: 'Scottie Murrell — Software Engineer',
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about').then((m) => m.About),
    title: 'About — Scottie Murrell',
  },
  {
    path: 'experience',
    loadComponent: () => import('./features/experience/experience').then((m) => m.Experience),
    title: 'Experience — Scottie Murrell',
  },
  {
    path: 'projects',
    loadComponent: () => import('./features/projects/projects').then((m) => m.Projects),
    title: 'Projects — Scottie Murrell',
  },
  {
    path: 'projects/:slug',
    loadComponent: () =>
      import('./features/projects/project-detail/project-detail').then((m) => m.ProjectDetail),
    title: 'Project — Scottie Murrell',
  },
  {
    path: 'research',
    loadComponent: () => import('./features/research/research').then((m) => m.Research),
    title: 'Research — Scottie Murrell',
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact').then((m) => m.Contact),
    title: 'Contact — Scottie Murrell',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
