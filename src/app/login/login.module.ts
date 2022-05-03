import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrincipalLoginComponent } from './principal-login/principal-login.component';




@NgModule({
  declarations: [
    PrincipalLoginComponent
  ],
  exports: [
    PrincipalLoginComponent 

  ],

  imports: [
    CommonModule,
    FormsModule
  ]
 
})
export class LoginModule { }


