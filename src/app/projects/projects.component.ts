import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects=[
    {id:1, name:"traditional yoga",description:"worked with the team in designing and developing a dynamic web application for an online yoga teaching platform, enhancing user engagement and accessibility. Leveraged HTML, CSS, JavaScript, AngularJS, Bootstrap, and Material UI to create an intuitive and responsive user interface"},
    {id:2, name:"gym portfolio", description:"Designed and developed a dynamic web application showcasing gym details using HTML, CSS, and JavaScript. Created an interactive platform that effectively communicated gym offerings, class schedules, trainers' profiles, and membership information to potential clients."}
  ]
  panelOpenState = false;

}
