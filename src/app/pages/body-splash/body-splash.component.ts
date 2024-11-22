import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-body-splash',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,CommonModule],
  templateUrl: './body-splash.component.html',
  styleUrl: './body-splash.component.css'
})
export class BodySplashComponent {
  constructor(public serviceBodySplash:ProductosService){

  }
  ngOnInit(){
    this.serviceBodySplash.obtenerBodySplash();
    console.log(this.serviceBodySplash.bodySplash)
  }
}
