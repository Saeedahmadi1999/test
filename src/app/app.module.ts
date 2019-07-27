import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule,NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcountsComponent } from './dashboard/acounts/acounts.component';
import { HttpClientModule } from '@angular/common/http';
import { UserAcountComponent } from './dashboard/acounts/user.acount/user.acount.component';
import { CommonModule, APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AcountsComponent,
    UserAcountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
