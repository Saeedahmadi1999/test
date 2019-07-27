import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  acounts() {
    return this.http.get <Array<object>>("https://api.github.com/users?since=135");
  }
}
