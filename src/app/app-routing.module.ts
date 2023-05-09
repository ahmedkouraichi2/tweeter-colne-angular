import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SignInComponent } from './pages/landing-page/sign-in/sign-in.component';
import { SignUpComponent } from './pages/landing-page/sign-up/sign-up.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
   // {path : "" , component: LandingPageComponent},
    {path : "sign-in" , component: SignInComponent},
    {path : "sign-up" , component: SignUpComponent},
    {path:"",component:HomePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
