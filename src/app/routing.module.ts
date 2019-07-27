import { UserAcountComponent } from './dashboard/acounts/user.acount/user.acount.component';
import { AcountsComponent } from './dashboard/acounts/acounts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const router = [
    {path:"", component:LoginComponent, redirect:"login"},
    {path:"login", component:LoginComponent},
    {path:"dashboard/:name", component:DashboardComponent, children:[
        {path:"acount", component:AcountsComponent},
        {path:"acount/:id", component:UserAcountComponent}
    ]}
]

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}