import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './view/register/register.component';
import { LoginComponent } from './view/login/login.component';
import { BooksComponent } from './view/books/books.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { StoreComponent } from './view/store/store.component';
import { OrdersComponent } from './view/orders/orders.component';



const routes: Routes = [
  { path:'', redirectTo:'login' , pathMatch:'full'},
  { path:'register', component:RegisterComponent},
  { path:'login' , component:LoginComponent},
  { path:'books', component:BooksComponent},
  { path:'dashboard', component:DashboardComponent},
  { path:'store', component:StoreComponent},
  { path:'orders', component:OrdersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [RegisterComponent, LoginComponent, BooksComponent, DashboardComponent, StoreComponent, OrdersComponent]
