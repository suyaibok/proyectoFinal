import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BodySplashComponent } from './pages/body-splash/body-splash.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NewComponent } from './pages/new/new.component';
import { SleepComponent } from './pages/sleep/sleep.component';
import { SportComponent } from './pages/sport/sport.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BodySplashComponent,ContactComponent,HomeComponent,NewComponent,SleepComponent,SportComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectoFinalBeccaria';
}
