import { Component, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  variable :any;
  switchid:any
  displaymessage:any
  constructor( public dialog: MatDialog){


  }

  rating =[
    {id:1, message:"will work on the remarks thank you for the responce"},
    {id:2, message:"will improve more thank you for the responce"},
    {id:3,message:"thank you for the rating "},
    {id:4, message:"thank you for the good review"},
    {id:5,message:"thank you for the great review"}

  ]
  popupmessage(template: TemplateRef<any>,event: MouseEvent):void{
    // console.log(message);
    // this.displaymessage = message;
    // this.nameSkill= name
  
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '400px';
    dialogConfig.height = '300px';
    dialogConfig.maxWidth='400px';
   
    // dialogConfig.position = { top: '15%', left: '40%' };
    dialogConfig.hasBackdrop = true;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    dialogConfig.panelClass = 'my-dialog';
    const dialogWidth = 500; 
    const dialogHeight = 300; 

    let top = (viewportHeight - dialogHeight) /2 ;
    let left = (viewportWidth - dialogWidth) / 2;
    if (top < 0) {
      top = 0;
    }
    if (left < 0) {
      left = 0;
    }

    dialogConfig.position = { top: top + 'px', left: left + 'px' };


   
  
    // Adjust width as per your requirement
    dialogConfig.panelClass = 'custom-dialog-container';
    dialogConfig.backdropClass = 'custom-dialog-backdrop'; // Add custom CSS class for the dialog
  
    const dialogRef = this.dialog.open(template, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Perform actions after the dialog is closed
    });
  // }
  }
  ratemessage(id:any,msg:any){
    this.switchid = id
    this.variable = this.switchid
    this.displaymessage = msg
    console.log(id);
    console.log(msg);
    
    
  }
  close(){
    this.dialog.closeAll()
  }

}
