import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewComponent } from './pages/new/new.component';
import { BodySplashComponent } from './pages/body-splash/body-splash.component';
import { SleepComponent } from './pages/sleep/sleep.component';
import { SportComponent } from './pages/sport/sport.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'new',component:NewComponent},
    {path:'body-splash',component:BodySplashComponent},
    {path:'sleep',component:SleepComponent},
    {path:'sports',component:SportComponent},
    {path:'contact',component:ContactComponent}

];
