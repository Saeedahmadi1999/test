import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  collapse = false;
  user = '';

  constructor(private rout:ActivatedRoute) { }

  ngOnInit() {
    this.user = this.rout.snapshot.paramMap.get('name');
  }

  toggle(type:string) {
    if(type === "list") {
      this.collapse =! this.collapse;
    }
  }
}
