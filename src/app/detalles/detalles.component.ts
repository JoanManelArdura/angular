import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {


    llibres:Array<Object>;
    llibreId:Number;
    llibreSeleccionat:any;

  constructor( private ruta:ActivatedRoute ){
    this.llibres = [
      { id:'1', titulo:'El senyor dels anells', autor:'JRR Tolkien', sinopsis:'un senyor baixet va amb uns amics a tirar una petita peça de joiería al monte'},
      { id:'2', titulo:'harry el sucio', autor:'marible redista', sinopsis:'en harri descobreix que la higiene es important cuant coneix un simpàtic marsupial'},
      { id:'3', titulo:'another book in the wall', autor:'la abuela de la fabada', sinopsis:'una escalopendra té el somni de ballar a bollywood'}
    ]
  }


  ngOnInit(): void {
    this.ruta.params.subscribe( params =>{
        this.llibreId = params['llibreId'];
        this.llibreSeleccionat = this.trobarLlibre();
    } )
  }
  
filtrePerId(llibre){
  return llibre.id == this;
}

  trobarLlibre() {
    return this.llibres.filter( this.filtrePerId , this.llibreId )[0];
  }

}
