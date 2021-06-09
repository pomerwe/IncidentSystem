import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.data.response = false;
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.data.response = true;
    this.dialogRef.close();
  }
}

export class DialogData {
  title:string;
  description: string;
  response:boolean = false;

  constructor(title:string, description: string)
  {
    this.title = title;
    this.description = description;
  }
}
