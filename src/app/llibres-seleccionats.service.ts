import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LlibresSeleccionatsService {

  llibres: Array<Object>
  constructor() { 
    this.llibres = [];
  }

  agregarLlibres(_nouLlibre){
    this.llibres.push(_nouLlibre);
  }

  mostrarLlibres(){
if (this.llibres.length > 0){
  return this.llibres;
} else {
  return false;
}

  }
}
