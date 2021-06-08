import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/classes/MenuItem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  menuItens:MenuItem[] = [
    new MenuItem("incidents", "Incidentes")
  ];

  ngOnInit(): void {
  }

}
