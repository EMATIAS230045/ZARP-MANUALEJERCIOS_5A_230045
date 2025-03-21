import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { ContentComponent } from './components/content/content.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: ContentComponent },
      { path: 'dashboard', component: ContentComponent },
      { path: 'config', component: ContentComponent },
    ],
  },
];
