
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { NewProductComponent } from "./Pages/new-product/new-product.component";
import { ResumeComponent } from "./Pages/resume/resume.component";
import { TransactionsComponent } from "./Pages/transactions/transactions.component";


const routes: Routes = [
    {
    path: '',
    component: TransactionsComponent,
    pathMatch:'full'
    },

    {
        path: 'transactions',
        component: TransactionsComponent 
    },
    {
        path: 'resume',
        component: ResumeComponent
    },
    {
        path: 'new-product',
        component: NewProductComponent 
    },
    {
        path: '**',
        component:TransactionsComponent,
        redirectTo: ''
    }

    
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)

    ],
    exports: [
        RouterModule

    ]

})

export class AppRoutingModule {}