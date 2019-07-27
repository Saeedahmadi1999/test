import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acounts',
  templateUrl: './acounts.component.html',
  styleUrls: ['./acounts.component.css']
})
export class AcountsComponent implements OnInit {
  array = []
  dataSource = []
  column = ['id', 'login', 'type', 'node_id'];


  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.acounts().subscribe(data => {
      this.array = data;
    })
  }

}
