import { Component, OnInit } from '@angular/core';
import { LlibresSeleccionatsService } from '../llibres-seleccionats.service';


@Component({
  selector: 'app-capcalera',
  templateUrl: './capcalera.component.html',
  styleUrls: ['./capcalera.component.css']
})
export class CapcaleraComponent implements OnInit {

  mostrarLlista:boolean;
  constructor(public llibresSeleccionats:LlibresSeleccionatsService) { }

  ngOnInit(): void {
  }

}
