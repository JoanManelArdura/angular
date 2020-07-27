import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exemple2';
  valor1 = false;
  valor2 = false;
  diasSemana;
  color;
  llibres:Array<Object>;

  constructor(){
    this.llibres = [
      { id:'1', titulo:'El senyor dels anells', autor:'JRR Tolkien'},
      { id:'2', titulo:'harry el sucio', autor:'marible redista'},
      { id:'3', titulo:'another book in the wall', autor:'la abuela de la fabada'}
    ]
  }

  mostrarAutor(_llibre){
    alert( `${_llibre.titulo} fou escrit per ${_llibre.autor}`  )
  }
  
}
