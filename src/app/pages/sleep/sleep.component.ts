import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sleep',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,CommonModule],
  templateUrl: './sleep.component.html',
  styleUrl: './sleep.component.css'
})
export class SleepComponent {
  constructor(public serviceSleep:ProductosService){

  }
  ngOnInit(){
    this.serviceSleep.obtenerSleep();
    console.log(this.serviceSleep.sleep)
  }
}
