import { Component } from '@angular/core';
import { DatosService } from 'src/app/Pages/services/datos.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [
  ]
})
export class NavComponent  {

  termino:string =""

  constructor(private buscarUsuarios: DatosService) { }

  buscar(){
    this.buscarUsuarios.buscarUsuarios().subscribe(resp => {
      console.log(resp)
    })
    console.log(this.termino)
  }


}
