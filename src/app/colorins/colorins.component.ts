import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorins',
  templateUrl: './colorins.component.html',
  styleUrls: ['./colorins.component.css']
})
export class ColorinsComponent implements OnInit {

  colorLocal:String;
  constructor() { }

  ngOnInit(): void {
  }

  generarRandom():String{
    return Math.floor( Math.random() * 255).toString(16); 
  }

  colorHex():String{
    this.colorLocal = "#" + this.generarRandom()+ this.generarRandom()+ this.generarRandom();
    return this.colorLocal;
  }

}
