import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MenuPositionX, MenuPositionY } from '@angular/material/menu';
import { EnumMapper } from 'src/classes/EnumUtils';
import { MaterialSelectItem } from 'src/classes/MaterialSelectItem';
import { Employee } from 'src/models/Employee';
import { IncidentStatus } from 'src/models/enum/IncidentStatus';
import { Incident } from 'src/models/Incident';
import { Service } from 'src/models/Service';
import { Team } from 'src/models/Team';
import { MockService } from 'src/services/MockService';
import { DialogComponent, DialogData } from '../dialog/dialog.component';
import { IncidentInsertDTO } from '../dto/IncidentInsertDTO';
import * as _ from 'underscore';

import Holidays from "date-holidays"
import { LoginService, MockRealTimeService } from 'src/main';
import { Router } from '@angular/router';
const holidayService = new Holidays("BR")

@Component({
  selector: 'app-open-incident-page',
  templateUrl: './open-incident-page.component.html',
  styleUrls: ['./open-incident-page.component.scss'],
  providers: [
    MockService
  ]
})
export class OpenIncidentPageComponent implements OnInit {

  currentUser:Employee;

  mockService:MockService;
  currentTab:number = 1;
  incidentList:Incident[];
  incidentStatusEnumMapper:any = new EnumMapper(IncidentStatus);
  
  isAdding:boolean = false;
  isDetailOpened:boolean = false;
  incidentAttachments:any;

  test:Blob[] = [] ;

  xPosition:MenuPositionX = 'before';
  yPosition:MenuPositionY = 'below';

  selectedIncident:Incident;
  originalIncident:Incident | undefined = undefined;

  selectedTeam:Team | undefined = undefined;
  selectedService:Service | undefined = undefined;
  incidentDescription:any = "";
  
  teamList: Team[];

  constructor(mockService:MockService, public dialog: MatDialog, private router: Router) 
  { 
    this.mockService = mockService;
    this.currentUser = LoginService.getInstance().getCurrentUser()?.employee as Employee;

    this.teamList = this.mockService.getTeamMock();

    this.incidentList = MockRealTimeService.getInstance().incidentList;

    this.selectedIncident = this.incidentList[2];
  }

  
  ngOnInit(): void {
    if(!LoginService.getInstance().isUserLoggedIn()){
      this.router.navigate(["/login"]);
    }
  }


  unselectAllTabs()
  {
    var tabs = document.getElementsByClassName("tab");
    
    for(let i =0; i < tabs.length; i++)
    {
      let tab = tabs[i] as HTMLElement;
      tab.classList.remove("selected");
    }
  }

  selectTab(tab:any)
  {
    this.unselectAllTabs();
    tab.target.classList.add("selected");
  }

  openIncidentAddPanel()
  {
    this.isAdding = true;
  }

  closeIncidentAddPanel()
  {
    this.isAdding = false;
    this.selectedTeam = undefined;
    this.selectedService = undefined;
    this.incidentDescription = "";
  }

  openIncidentDetailPanel(incident:Incident)
  {
    this.isDetailOpened = true;
    this.selectedIncident = incident;
    this.originalIncident = {...this.selectedIncident};
  }

  saveEdit()
  {
    this.closeIncidentDetailPanel();
  }

  cancelEdit()
  {
    let original =this.originalIncident as Incident;
    this.selectedIncident.description = original.description;
    this.closeIncidentDetailPanel();
  }

  closeIncidentDetailPanel()
  {
    this.isDetailOpened = false;
    this.selectedIncident = this.mockService.getIncidentMock(1);
    this.originalIncident = undefined;
  }

  canSendIncident():boolean{
    return this.selectedTeam != undefined &&
           this.selectedService != undefined &&
           this.incidentDescription != "";
  }

  sendIncident()
  {
    let employeeMock = this.mockService.getEmployeeMock();
    let newIncident:IncidentInsertDTO ={
      service: this.selectedService as Service,
      description: this.incidentDescription,
      attachments: this.incidentAttachments,
      request_employee: this.currentUser
    }
    this.incidentList.push(this.mockService.createIncidentMock(this.getNextId(), newIncident));
    this.closeIncidentAddPanel();
  }

  getNextId()
  {
    let nextId = 1;
    
    this.incidentList.forEach(i =>{
      if(nextId <= i.id)
      {
        nextId = i.id + 1;
      }
    }); 

    return nextId;
  }

  handleFileInput(event:any)
  {
    this.incidentAttachments = event.target.files;
  }

  cancelIncident(incident:Incident)
  {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: this.getCancelDialog()
    });

    dialogRef.afterClosed().subscribe(response => {
      if(response)
      {
        this.incidentList = this.incidentList.remove(incident);
      }
    });
  }

  getCancelDialog():DialogData
  {
    return new DialogData("Cancelar Incidente", "Deseja realmente cancelar o incidente?");
  }

  getAssignDialog():DialogData
  {
    return new DialogData("Atribuir incidente", "Atribuir o incidente para mim?");
  }

  getResolveDialog():DialogData
  {
    return new DialogData("Resolver Incidente", "Deseja finalizar o incidente?");
  }

  limitCharacters(string:string)
  {
    let len = string.length
    return string.substring(0, 23)+ (len > 23 ? "..." : "");
  }

  assignRequest(incident:Incident)
  {
      const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: this.getAssignDialog()
    });

    dialogRef.afterClosed().subscribe(response => {
      if(response)
      {
        incident.resolve_employee = this.currentUser;
        incident.status = IncidentStatus.In_Progress;
      }
    });
  }

  getAssignedIncidents()
  {
    return _.where(this.incidentList, {resolve_employee: this.currentUser, status: IncidentStatus.In_Progress});
  }

  getMyOpenedIncidents()
  {
    return _.where(this.incidentList, {request_employee: this.currentUser});
  }

  getOpenedIncidents()
  {
    return _.where(this.incidentList, {status: IncidentStatus.Opened});
  }

  getIncidentLog()
  {
    return _.where(this.incidentList, {status: IncidentStatus.Finished || IncidentStatus.Rejected});
  }

  resolveRequest(incident:Incident)
  {
      const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: this.getResolveDialog()
    });

    dialogRef.afterClosed().subscribe(response => {
      if(response)
      {
        incident.status = IncidentStatus.Finished;
        incident.finish_date = new Date();
      }
    });
  }

  isSlaDeadlinePassed(incident:Incident)
  {
    let incidentService = incident.service;
    let create_date = new Date(incident.create_date);
    let slaDeadLine = new Date(create_date.getTime() + (incidentService.serviceLevelAgreement * 60 * 1000));
    let now = new Date();

    return now.getTime() > slaDeadLine.getTime();
  }

  wasSlaDeadlinePassed(incident:Incident)
  {
    let incidentService = incident.service;
    let create_date = new Date(incident.create_date);
    let slaDeadLine = new Date(create_date.getTime() + (incidentService.serviceLevelAgreement * 60 * 1000));

    return (incident.finish_date as Date).getTime() > slaDeadLine.getTime();
  }

  isIncidentFinished(incident:Incident)
  {
    return incident.status == "Aberto";
  }

  isIncidentEditable(incident:Incident)
  {
    console.log(incident.status, incident.status == IncidentStatus.Opened)
    return incident.status == IncidentStatus.Opened;
  }
}
