import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:LoginService) { }

  ngOnInit() {
  }

  save(form: NgForm) {
    this.auth.auth(form.value.username,form.value.pass);
  }

}
