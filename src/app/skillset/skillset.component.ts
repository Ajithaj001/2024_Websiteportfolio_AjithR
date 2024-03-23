import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, TemplateRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent {


  constructor( public dialog: MatDialog){


  }
  displaymessage:any
  nameSkill:any
  images = [
    { id: 1,name:"Angular", message: "Embarking on a journey through the realms of technology, I've honed my skills over 1.4 years in Angular, crafting intricate solutions and breathing life into dynamic web applications. With a seasoned hand in the art of Angular, I'd confidently rate myself 4 out of 5 stars.", url: 'assets/logo-angular.png' },
    { id: 2,name:"JavaScript", message: "Javascript, the language that orchestrates the symphony of interactivity, has been my steadfast companion, with a proficiency that I'd confidently rate at 3 out of 5 stars.", url: 'assets/javascript.png' },
    { id: 3,name:"HTML",  message: "As a web developer, HTML is the cornerstone of my craft, providing the structure and framework upon which every digital masterpiece is built. With precision and care, I sculpt each element, weaving them into cohesive narratives that captivate and engage users. My proficiency in HTML is a testament to countless hours spent refining my skills, earning a solid rating of 4 out of 5 stars", url: 'assets/HTML.png' },
    { id: 4,name:"CSS",  message: "In the realm of web design, CSS is my palette and paintbrush, allowing me to breathe life into static pages and transform them into dynamic works of art. With an eye for aesthetics and a flair for creativity, I craft stunning visuals that seamlessly blend form and function. My expertise in CSS shines through in every pixel-perfect layout, earning a commendable rating of 4 out of 5 stars.", url: 'assets/CSS.png' },
    { id: 5,name:"BootStrap",  message: "Bootstrap, the versatile framework that shapes user interfaces with elegance and ease, finds a welcome home in my toolkit, earning a commendable 3 out of 5 stars.", url: 'assets/bootstrap.png' },
    { id: 6,name:"Sql",  message: "As for SQL, while my journey has only just begun in this realm of data manipulation and query crafting, I'm eager to delve deeper, armed with a solid foundation of basic knowledge", url: 'assets/sql.png' },
    { id: 6,name:"Material UI",  message: "Angular Material UI, the sophisticated framework that streamlines UI development with Angular, has been an integral part of my projects, elevating user experience with its sleek components and seamless integration. My proficiency in Angular Material UI is steadily growing, and I'd rate myself at an evolving 3 out of 5 stars.", url: 'assets/material.png' },
    { id: 7,name:"Python",  message: "Python, the versatile language renowned for its simplicity and readability, has captured my interest with its broad applications in web development, data analysis, and more. While I'm still exploring its depths, I have a basic level of knowledge and a growing enthusiasm to delve deeper into its capabilities.", url: 'assets/python.png' }

    // Add more objects as needed
  ];

  popupmessage(message:any,template: TemplateRef<any>,event: MouseEvent,name:any ,):void{
    console.log(message);
    this.displaymessage = message;
    this.nameSkill= name
  
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.maxWidth = '500px'; // Set the maximum width to 400px
    dialogConfig.height = '300px'; // Auto height
    dialogConfig.panelClass = 'custom-dialog-container'; // Apply custom styling to the dialog container

    // dialogConfig.position = { top: '15%', left: '40%' };
    dialogConfig.hasBackdrop = true;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    dialogConfig.panelClass = 'my-dialog';
    const dialogWidth = 400; // Width of the dialog
    const dialogHeight = 400; // Height of the dialog

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
  closebox(){
    
    this.dialog.closeAll()
  }

}
