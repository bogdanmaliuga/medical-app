import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/Rx';
@Injectable()
export class ApiService {
  API_ROUTE = "http://localhost:3001/api/";
  constructor(private _http: Http) {}
  // User login
  signin(email: string, password: string) {
    return this._http
      .post(this.API_ROUTE + "login", { email: email, password: password })
      .map(response => {
        {
          if (response.status === 200) {
            console.log(response.json());
            return response.json();
          }
        }
      })
      .catch(error => Observable.throw(error.json()));
  }
  signup(body) {
    return this._http.post(this.API_ROUTE + 'signup', body)
      .map(response => {
        {
            console.log(response.json());
            return response.json();
          
        }
      })
      .catch(error => Observable.throw(error.json()));
  }
}
