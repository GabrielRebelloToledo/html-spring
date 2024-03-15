import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) {}


  loginObj: any = {
    username: '',
    password: ''
  }


  onLogin() {

    console.log(this.loginObj)
    if (this.loginObj.username == "admin" && this.loginObj.password == "admin") {
      this.router.navigateByUrl('/products')
    } else {
      alert('Wrong Credentials!')
    }
  }
}
