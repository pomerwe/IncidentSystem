import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Incident } from './models/Incident';
import { SystemUser } from './models/SystemUser';
import { MockService } from './services/MockService';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

declare global {
  interface Array<T> {
    remove(elem: T): Array<T>;
  }
}

if (!Array.prototype.remove) {
  Array.prototype.remove = function<T>(this: T[], elem: T) {
    return this.filter(e => e !== elem);
  }
}

export class LoginService{
    users:SystemUser[] = [{
      login:"estevao.alves",
      password:"12345",
      employee:{
        id:1,
        name:"Estevão",
        attributed_incidents: [],
        business_role: {
          id:1,
          description:"Coordena os times de ti",
          name:"Gerente de Ti",
          services: []
        },
        requests:[],
        system_role:{
          id:1,
          description:"administrador",
          name:"ADMIN",
          permissions:[]
        },
        team: this.mockService.getTeamMock()[0]
      }},
      {
        login:"lucas.vinicius",
        password:"12345",
        employee:{
          id:1,
          name:"Lucas Vinicius",
          attributed_incidents: [],
          business_role: {
            id:1,
            description:"Coordena os times de ti",
            name:"Gerente de Ti",
            services: []
          },
          requests:[],
          system_role:{
            id:1,
            description:"administrador",
            name:"ADMIN",
            permissions:[]
          },
          team: this.mockService.getTeamMock()[2]
        }}];
    
    currentUser:SystemUser | null = null;

    private static instance:LoginService;

    private constructor(private mockService:MockService){}

    public static getInstance():LoginService
    {
      if (!LoginService.instance) {
        LoginService.instance = new LoginService(new MockService());
      }

      return LoginService.instance;
    }

    public login(username:string, password:string)
    {
      for(let i = 0; i < this.users.length; i++){
        let user = this.users[i];

        if(user.login == username && user.password == password)
        {
          this.currentUser = user;
          alert(`Usuário: ${this.currentUser.employee.name} entrou no sistema!` );
          break;
        }
      }
      if(this.currentUser == null){
        alert(`Credenciais não batem com usuário do sistema!` );
      }
    }

    public logout()
    {
      this.currentUser = null;
    }

    public isUserLoggedIn():boolean{
      return this.currentUser != null;
    }

    public getCurrentUser():SystemUser | null{
      return this.currentUser;
    }
}

export class MockRealTimeService{
  private static instance:MockRealTimeService;
  incidentList:Incident[];
  
  private constructor(private mockService:MockService)
  {
    this.incidentList = []
  }

  public static getInstance():MockRealTimeService
  {
    if (!MockRealTimeService.instance) {
      MockRealTimeService.instance = new MockRealTimeService(new MockService());
    }

    return MockRealTimeService.instance;
  }
}