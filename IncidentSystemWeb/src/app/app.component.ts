import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/main';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IncidentSystemWeb';
  menuOn:boolean = false;
  loginService:LoginService;

  constructor(private router: Router)
  {
    this.loginService = LoginService.getInstance();
  }

  getMenuBody()
  {
    return document.querySelector("app-menu") as HTMLElement;
  }

  setMenuOutAnimation()
  {
    let menuBody = this.getMenuBody().children[0];
    menuBody.classList.add("menuOut");
  }

  toggleMenu()
  {
    if(this.menuOn)
    {
      this.setMenuOutAnimation();
      setTimeout(() =>
      {
        this.menuOn = false;
      }, 30);
    }
    else
    {
      this.menuOn = true;
    }
  }

  logout()
  {
    this.loginService.logout();
    this.router.navigate(["/login"]);
  }
}
