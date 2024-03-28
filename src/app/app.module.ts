import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillsetComponent } from './skillset/skillset.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { EducationComponent } from './education/education.component';
import { ServiceprovidedComponent } from './serviceprovided/serviceprovided.component';
import { ProjectsComponent } from './projects/projects.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { RatingComponent } from './rating/rating.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';


// import { NgxParticlesModule } from '@tsparticles/angular';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsetComponent,
    EducationComponent,
    ServiceprovidedComponent,
    ProjectsComponent,
    ScrollTopComponent,
    RatingComponent
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatButtonModule,
   
    
   
    // NgxParticlesModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
