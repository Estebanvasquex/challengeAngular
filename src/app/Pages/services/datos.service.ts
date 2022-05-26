import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuentas, Products, Transacciones, Users } from '../interfaces/challenge.interfaces';

@Injectable({
  providedIn: 'root'
})



export class DatosService {

  private apiUrl: string = 'https://627d1bb6bf2deb7174e7a24c.mockapi.io/id/users';

  constructor(private http:HttpClient) { }

  buscarUsuarios():Observable<any>{
    
    return this.http.get(this.apiUrl)
  }
}


