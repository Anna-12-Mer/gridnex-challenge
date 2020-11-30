import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  public basedUrl = "https://backendcoreservice.azurewebsites.net/";

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  //*** LOGIN  ***//
  login(username, password) {
    console.log('username:', username);
    console.log('password:', password);
    return this.http.post(this.basedUrl + '/api/Login/Login', { username, password });
  }
}
