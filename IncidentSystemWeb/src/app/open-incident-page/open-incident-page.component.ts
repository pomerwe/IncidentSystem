import { Component, OnInit } from '@angular/core';
import { MenuPositionX, MenuPositionY } from '@angular/material/menu';
import { EnumMapper } from 'src/classes/EnumUtils';
import { MaterialSelectItem } from 'src/classes/MaterialSelectItem';
import { Employee } from 'src/models/Employee';
import { IncidentStatus } from 'src/models/enum/IncidentStatus';
import { Incident } from 'src/models/Incident';
import { Service } from 'src/models/Service';
import { Team } from 'src/models/Team';
import { MockService } from 'src/services/MockService';
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

  incidentStatusEnumMapper:any = new EnumMapper(IncidentStatus);
  
  isAdding:boolean = false;
  isEditing:boolean = false;
  incidentAttachments:any;

  xPosition:MenuPositionX = 'before';
  yPosition:MenuPositionY = 'below';

  selectedIncident:Incident | undefined = undefined;

  selectedTeam:Team | undefined = undefined;
  selectedService:Service | undefined = undefined;
  incidentDescription:any = "";

  incidentList:Incident[];
  
  teamList: Team[];

  constructor(mockService:MockService) 
  { 
    this.mockService = mockService;

    this.teamList = [
      this.mockService.getTeamMock(),
      this.mockService.getTeamMock(),
      this.mockService.getTeamMock()
    ]

    this.incidentList = [
      this.mockService.getIncidentMock(),
      this.mockService.getIncidentMock(),
      this.mockService.getIncidentMock()
    ];
  }

  
  ngOnInit(): void {
  }

  toggleEdit()
  {
    this.isEditing = !this.isEditing;
  }

  closeIncidentAddPanel()
  {
    this.isAdding = false;
    this.selectedTeam = undefined;
    this.selectedIncident = undefined;
    this.selectedService = undefined;
    this.incidentDescription = "";
  }

  openIncidentAddPanel()
  {
    this.isAdding = true;
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
    console.log(newIncident);
  }

  handleFileInput(event:any)
  {
    this.incidentAttachments = event.target.files;
  }
}
