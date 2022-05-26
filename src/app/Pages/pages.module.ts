import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { NewProductComponent } from './new-product/new-product.component';
import { AuthComponent } from './auth/auth.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { FormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    ResumeComponent,
    NewProductComponent,
    AuthComponent,
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ResumeComponent,
    NewProductComponent,
    AuthComponent,
    TransactionsComponent
  ]
})
export class PagesModule { }
