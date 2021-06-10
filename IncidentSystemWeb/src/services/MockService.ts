import { IncidentInsertDTO } from "src/app/dto/IncidentInsertDTO";
import { Employee } from "src/models/Employee";
import { IncidentStatus } from "src/models/enum/IncidentStatus";
import { Priority } from "src/models/enum/Priority";
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
      team: this.getTeamMock()[0]
    }
  }

  getIncidentMock(id:number):Incident
  {
    return {
      id:id,
      attachments: [],
      approved: true,
      status: IncidentStatus.Opened,
      create_date: new Date('2021-06-08 02:31'),
      description: "Incident 1",
      finish_date: null,
      service: {
        id:1,
        description:"Serviço do incident 1",
        name:"Coleta de mock",
        priority: Priority.CRITICAL,
        serviceLevelAgreement: 1440
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
      resolve_employee: null,
    };
  }

  getTeamMock():Team[]
  {
    return [{
      id:1,
      name:"Tecnologia",
      services:[{
        id:1,
        name:"Troca de pc",
        description: "Troca de pc para trabalho, em caso de má performance.",
        priority: Priority.MEDIUM,
        serviceLevelAgreement: 3600
      },
      {
        id:2,
        name:"Manutenção de periféricos",
        description: "Limpeza de periféricos utilizados.",
        priority: Priority.LOW,
        serviceLevelAgreement: 7200
      },
      {
        id:3,
        name:"Desbloqueio de acesso",
        description: "Desbloquear acesso ao usuário administrador.",
        priority: Priority.HIGH,
        serviceLevelAgreement: 120
      }]
    },
    {
      id:2,
      name:"Desenvolvimento",
      services:[{
        id:1,
        name:"Correção de Erros",
        description: "Relatar um bug no sistema para o time de desenvolvimento",
        priority: Priority.MEDIUM,
        serviceLevelAgreement: 3600
      },
      {
        id:2,
        name:"Solicitar auxilio na resolução do chamado",
        description: "Chamar o time de desenvolvimento para ajudar na resolução do chamado.",
        priority: Priority.HIGH,
        serviceLevelAgreement: 120
      },
      {
        id:3,
        name:"Implementar sistema",
        description: "Chamar o time de desenvolviemnto para implementar um sistema",
        priority: Priority.HIGH,
        serviceLevelAgreement: 7200
      }]
    },
    {
      id:3,
      name:"Suporte",
      services:[{
        id:1,
        name:"Ambiente caiu",
        description: "Solicitar ajuda com ambiente que parou de funcionar em produção.",
        priority: Priority.CRITICAL,
        serviceLevelAgreement: 120
      },
      {
        id:2,
        name:"Relatar erros no sistema",
        description: "Relate os erros do sistema encontrado para o suporte.",
        priority: Priority.MEDIUM,
        serviceLevelAgreement: 7200
      },
      {
        id:3,
        name:"Solicitar base de teste",
        description: "Pedir base de teste para o time do suporte.",
        priority: Priority.LOW,
        serviceLevelAgreement: 7200
      }, {
        id:4,
        name:"Teste para mostrar o sla",
        description: "Pedir base de teste para o time do suporte.",
        priority: Priority.LOW,
        serviceLevelAgreement: 0
      }],
    }];
  }
}