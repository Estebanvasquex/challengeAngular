import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-login',
  templateUrl: './principal-login.component.html',
  styleUrls: ['./principal-login.component.css']
})
export class PrincipalLoginComponent  {

  usuario = {
    correo:'',
    nombre: '',
    contrasena: ''
  }

  datosLogin = {
    correo:'estebanvasquex@gmail.com',
    contrasena: '123456'
  }




  consulta(){
  /*   let datoCorreo = this.usuario.correo;
    let datoContrasena = this.usuario.contrasena; */

    if(this.usuario.correo == this.datosLogin.correo && this.usuario.contrasena == this.datosLogin.contrasena ){
      console.log('EL USURIO PUEDE INICIAR EN DASBOARD')
    }
  /*   else{
      console.log('ERROR DE USUARIO O CONTRASEÑA')
    } */

    this.usuario.correo = '';
    this.usuario.contrasena = '';
  }



}
