import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {AddClientFormComponent} from "./Forms/add-client-form/add-client-form.component";
import {AddCustomerFormComponent} from "./Forms/add-customer-form/add-customer-form.component";
import {AddOrdersFormComponent} from "./Forms/add-orders-form/add-orders-form.component";
import {ViewAllClientsComponent} from "./Views/Clients/view-all-clients/view-all-clients.component";
import {ViewAllCustomersComponent} from "./Views/Customers/view-all-customers/view-all-customers.component";
import {ViewAllOrdersComponent} from "./Views/Orders/view-all-orders/view-all-orders.component";

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path:'dashboard', component:DashboardComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'addClient', component:AddClientFormComponent
  },
  {
    path:'addCustomer', component:AddCustomerFormComponent
  },
  {
    path:'addOrder', component:AddOrdersFormComponent
  },
  {
    path:'viewAllClients', component:ViewAllClientsComponent
  },
  {
    path:'viewAllCustomers', component:ViewAllCustomersComponent
  }, {
    path:'viewAllOrders', component:ViewAllOrdersComponent
  },

  {
    path:'', redirectTo:'home',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
