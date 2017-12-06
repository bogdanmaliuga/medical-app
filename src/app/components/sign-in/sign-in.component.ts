import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  user:any={};

  constructor(private api : ApiService) { }

  signIn(){
    console.log(this.user)
    this.api.signup(this.user).subscribe(
      res => {
          console.log(res);
      },
      error => {
         
      }
      );
  }
  ngOnInit() {
  }

}
