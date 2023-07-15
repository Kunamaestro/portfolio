import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { InfoComponent } from './info/info.component';
import { ProjectComponent } from './project/project.component';
import { FormComponent } from './form/form.component';


// Ajuster routes avec le tableau des pages de app component
const routes: Routes = [
  {path:"home",component:HomeComponent,data: { animation: 'enterLeavePage' }},
  {path:"about_me",component:AboutMeComponent,data: { animation: 'enterLeavePage' }},
  {path:"form",component:FormComponent,data: { animation: 'enterLeavePage' }},
  {path:"projects",component:ProjectComponent,data: { animation: 'enterLeavePage' }},
  {path:"info",component:InfoComponent,data: { animation: 'enterLeavePage' }},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
