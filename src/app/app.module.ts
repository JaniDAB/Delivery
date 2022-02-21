import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AddClientFormComponent} from "./Forms/add-client-form/add-client-form.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatInputModule} from "@angular/material/input";
import { AddCustomerFormComponent } from './Forms/add-customer-form/add-customer-form.component';
import { AddOrdersFormComponent } from './Forms/add-orders-form/add-orders-form.component';
import { ViewAllClientsComponent } from './Views/Clients/view-all-clients/view-all-clients.component';
import {ViewAllCustomersComponent} from "./Views/Customers/view-all-customers/view-all-customers.component";
import {ViewAllOrdersComponent} from "./Views/Orders/view-all-orders/view-all-orders.component";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
      AddClientFormComponent,
      AddCustomerFormComponent,
      AddOrdersFormComponent,
      ViewAllClientsComponent,
      ViewAllCustomersComponent,
      ViewAllOrdersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatTooltipModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
