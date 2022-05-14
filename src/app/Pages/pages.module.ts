import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { NewProductComponent } from './new-product/new-product.component';
import { AuthComponent } from './auth/auth.component';
import { TransactionsComponent } from './transactions/transactions.component';







@NgModule({
  declarations: [
    ResumeComponent,
    NewProductComponent,
    AuthComponent,
    TransactionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResumeComponent,
    NewProductComponent,
    AuthComponent,
    TransactionsComponent
  ]
})
export class PagesModule { }
