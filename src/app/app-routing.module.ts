import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CurruculumComponent } from './curruculum/curruculum.component';
import { InfoComponent } from './info/info.component';
import { ProjectComponent } from './project/project.component';
import { FormComponent } from './form/form.component';


// Ajuster routes avec le tableau des pages de app component
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about_me",component:AboutMeComponent},
  {path:"curriculum",component:CurruculumComponent},
  {path:"form",component:FormComponent},
  {path:"projects",component:ProjectComponent},
  {path:"info",component:InfoComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
