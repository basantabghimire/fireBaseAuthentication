import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'copyright',component:CopyrightComponent},
  {path:'header',component:HeaderComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
