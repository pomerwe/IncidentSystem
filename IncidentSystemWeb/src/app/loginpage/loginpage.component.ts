import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from 'src/main';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
})
export class LoginpageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(LoginService.getInstance().isUserLoggedIn())
    {
      this.router.navigate(["/incidents"]);
    }
  }

  login(username:string, password:string)
  {
    LoginService.getInstance().login(username, password);
    if(LoginService.getInstance().isUserLoggedIn())
    {
      this.router.navigate(["/incidents"]);
    }
  }

}
