import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,CommonModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {
  constructor(public servicioEnNew:ProductosService){

  }
  ngOnInit(){
    this.servicioEnNew.obtenerNew();
    console.log(this.servicioEnNew.new)
  }
}
