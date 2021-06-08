import { Component, OnInit } from '@angular/core';
import { MenuPositionX, MenuPositionY } from '@angular/material/menu';
import { EnumMapper } from 'src/classes/EnumUtils';
import { IncidentStatus } from 'src/models/enum/IncidentStatus';
import { Incident } from 'src/models/Incident';
@Component({
  selector: 'app-open-incident-page',
  templateUrl: './open-incident-page.component.html',
  styleUrls: ['./open-incident-page.component.scss'],
})
export class OpenIncidentPageComponent implements OnInit {

  incidentStatusEnumMapper:any = new EnumMapper(IncidentStatus);
  
  isAdding:boolean = false;
  isEditing:boolean = false;

  xPosition:MenuPositionX = 'before';
  yPosition:MenuPositionY = 'below';

  incidentList:Incident[] = [
    this.getIncidentMock(),
    this.getIncidentMock(),
    this.getIncidentMock()
  ];

  constructor() { }

  getIncidentMock()
  {
    return {
      id:1,
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
      }
    };
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
  }

  openIncidentAddPanel()
  {
    this.isAdding = true;
  }
}
