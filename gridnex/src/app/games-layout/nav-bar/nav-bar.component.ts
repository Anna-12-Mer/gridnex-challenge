import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public loginForm: FormGroup;
  public username: string;
  public password: string;
  public isLoggedin : boolean = true;
  public invaliduserName = false;
  public userNameErrorMessage = "";
  invalid: boolean = false;
  public submitted = false;
  showModal: boolean;

  constructor(private auth: AuthService,
              private formBuilder: FormBuilder,
              public router: Router,) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get a() { return this.loginForm.controls; }

  show() {
    this.showModal = true;
  }
  hide() {
    this.showModal = false;
  }
  login() {
    if (this.loginForm.valid) {
    this.auth.login(this.loginForm.value.username, this.loginForm.value.password).subscribe((data: any) => {
      this.submitted = true;
      this.invaliduserName = false;
      localStorage.setItem('isLoggedin', 'true');
      localStorage.setItem('token', data.access_token);
      const today = new Date();
      const currentUser = {
        username: this.username,
        password: this.password,
        token: data.access_token,
        token_type: data.token_type,
        expire_in: today.setHours(today.getHours() + data.expires_in / 3600)
      };
      localStorage.setItem('currentToken', JSON.stringify(currentUser));
      this.isLoggedin = false;
      this.showModal = false;
      this.router.navigate(['/game/home']);
    }, (error: any) => {
      console.log(error);
        console.log(error);
        this.invalid = true;
        this.invaliduserName = true;
        this.userNameErrorMessage = "The Username you tried to reach does not exist in our system";
    });
    localStorage.setItem('isLoggedin', 'true');
  }
}

}
