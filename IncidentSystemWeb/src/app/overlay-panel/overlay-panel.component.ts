import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-overlay-panel',
  templateUrl: './overlay-panel.component.html',
  styleUrls: ['./overlay-panel.component.scss']
})
export class OverlayPanelComponent implements OnInit {

  constructor() { }

  @Input() title:string = "";
  @Output() close = new EventEmitter<string>();

  ngOnInit(): void {
  }

  closePanel()
  {
    this.close.emit();
  }
}
