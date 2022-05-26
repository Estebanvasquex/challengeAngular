import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { SidebarComponent } from './sidebar/sidebar.component';
import { NavComponent } from './nav/nav.component';






@NgModule({
  declarations: [
    SidebarComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    SidebarComponent,
    NavComponent
  ]

})
export class SharedModule { }
