import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sport',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,CommonModule],
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.css'
})
export class SportComponent {
  constructor(public serviceSport:ProductosService){

  }
  ngOnInit(){
    this.serviceSport.obtenerSports();
    console.log(this.serviceSport.sports)
  }

}
