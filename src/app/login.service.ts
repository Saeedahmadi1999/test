import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user = '';
  pass = '';
  constructor(private router:Router) { }

  auth(username:string, pass:string) {
    //send username and pass to endpoint
    //get respond and show on the dashboard
    this.router.navigate(['dashboard/', username]);
    this.user = username;
    this.pass = pass;
  }
}
