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
@Component({
  selector: 'app-open-incident-page',
  templateUrl: './open-incident-page.component.html',
  styleUrls: ['./open-incident-page.component.scss'],
  providers: [
    MockService
  ]
})
export class OpenIncidentPageComponent implements OnInit {
  mockService:MockService;
  currentTab:number = 1;

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

  incidentList:Incident[];
  
  teamList: Team[];

  constructor(mockService:MockService, public dialog: MatDialog) 
  { 
    this.mockService = mockService;

    this.teamList = [
      this.mockService.getTeamMock(),
      this.mockService.getTeamMock(),
      this.mockService.getTeamMock()
    ]

    this.incidentList = [
      this.mockService.getIncidentMock(1),
      this.mockService.getIncidentMock(2),
      this.mockService.getIncidentMock(3)
    ];

    this.selectedIncident = this.incidentList[2];
  }

  
  ngOnInit(): void {

  }


  unselectAllTabs()
  {
    let myIncidentsTab = document.getElementById("myIncidentsTab") as HTMLElement;
    let openedIncidentsTab = document.getElementById("openedIncidentsTab") as HTMLElement;
    let myOpenedIncidentsTab = document.getElementById("myOpenedIncidentsTab") as HTMLElement;

    myIncidentsTab.classList.remove("selected");
    openedIncidentsTab.classList.remove("selected");
    myOpenedIncidentsTab.classList.remove("selected");
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
      request_employee: employeeMock
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

  limitCharacters(string:string)
  {
    return string.substring(0, 23)+ "...";
  }
}
