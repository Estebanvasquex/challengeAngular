import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavComponent } from './nav/nav.component';





@NgModule({
  declarations: [
    SidebarComponent,
    NavComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,
    NavComponent
  ]

})
export class SharedModule { }
