import { IncidentInsertDTO } from "src/app/dto/IncidentInsertDTO";
import { Employee } from "src/models/Employee";
import { IncidentStatus } from "src/models/enum/IncidentStatus";
import { Incident } from "src/models/Incident";
import { Team } from "src/models/Team";

export class MockService{
    constructor()
    {

    }

    
  getEmployeeMock():Employee
  {
    return {
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
      team: this.getTeamMock()
    }
  }

  getIncidentMock(id:number):Incident
  {
    return {
      id:id,
      attachments: [],
      approved: true,
      status: IncidentStatus.Opened,
      create_date: new Date(),
      description: "Incident 1",
      finish_date: null,
      service: {
        id:1,
        description:"Serviço do incident 1",
        name:"Coleta de mock"
      },
      request_employee: this.getEmployeeMock(),
      resolve_employee: this.getEmployeeMock(),
    };
  }

  createIncidentMock(id:number, incident:IncidentInsertDTO):Incident
  {
    return {
      id:id,
      attachments: incident.attachments,
      approved: true,
      status: IncidentStatus.Opened,
      create_date: new Date(),
      description: incident.description,
      finish_date: null,
      service: incident.service,
      request_employee: incident.request_employee,
      resolve_employee: this.getEmployeeMock(),
    };
  }

  getTeamMock():Team
  {
    return {
      id:1,
      name:"Tecnologia",
      services:[{
        id:1,
        name:"Troca de pc",
        description: "Troca de pc para trabalho, em caso de má performance.",
      },
      {
        id:2,
        name:"Manutenção de periféricos",
        description: "Limpeza de periféricos utilizados.",
      },
      {
        id:3,
        name:"Desbloqueio de acesso",
        description: "Desbloquear acesso ao usuário administrador.",
      }]
    };
  }
}