import { Component, OnInit } from '@angular/core';
import { LlibresSeleccionatsService } from '../llibres-seleccionats.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-llista-llibres',
  templateUrl: './llista-llibres.component.html',
  styleUrls: ['./llista-llibres.component.css']
})
export class LlistaLlibresComponent implements OnInit {

  llibres:Array<Object>;
  resposta;

  constructor(private http:HttpClient ,public llibresSeleccionats:LlibresSeleccionatsService){
  }


  ngOnInit(): void {
  }

  carregarLlista(){
    this.http.get('assets/json/llista-de-llibres.json').subscribe(
      this.resposta:Response) => {
        this.llibres = this.resposta.json();
    }
  }
}
