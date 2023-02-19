import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsHomeeComponent } from './projects-homee/projects-homee.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsHomeeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
