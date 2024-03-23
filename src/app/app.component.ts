import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  myForm: FormGroup;
  successmessage:any
  name =""
  isdisplay:boolean = false;
  @ViewChild('homeSection')
  homeSectionRef!: ElementRef;
  @ViewChild('aboutSection')
  aboutSectionRef!: ElementRef;
  @ViewChild('serviceSection')
  serviceSectionRef!: ElementRef;
  @ViewChild('contactSection')
  contactSectionRef!: ElementRef;
  showScrollButton = false;
  loading: boolean = true;


  constructor(private fb: FormBuilder,private router: Router) {
    this.myForm = this.fb.group({
      // Define form controls and their initial values and validators
      firstName: ['', Validators.required],
      comments: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Add more form controls as needed
    });
    setTimeout(() => {
      this.loading = false; // Set loading to false when content is loaded
    }, 2000);
  
    
  }
  

  
  @HostListener('window:scroll', ['$event'])

onWindowScroll(event: any) {
  const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  // Get the offsetTop and height of each section after checking for null
  const homeOffsetTop = this.homeSectionRef.nativeElement.offsetTop;
  const homeHeight = this.homeSectionRef.nativeElement.offsetHeight;
  
  const aboutOffsetTop = this.aboutSectionRef.nativeElement.offsetTop;
  const aboutHeight = this.aboutSectionRef.nativeElement.offsetHeight;
  
  const serviceOffsetTop = this.serviceSectionRef.nativeElement.offsetTop;
  const serviceHeight = this.serviceSectionRef.nativeElement.offsetHeight;
  
  const contactOffsetTop = this.contactSectionRef.nativeElement.offsetTop;
  const contactHeight = this.contactSectionRef.nativeElement.offsetHeight;

  // Update active state based on scroll position
  if (scrollOffset >= homeOffsetTop && scrollOffset < homeOffsetTop + homeHeight) {
    this.router.navigate(['/home']);
    this.activateLink('active-home');
  } else if (scrollOffset >= aboutOffsetTop && scrollOffset < aboutOffsetTop + aboutHeight) {
    this.router.navigate(['/about']);
    this.activateLink('active-about');
  } else if (scrollOffset >= serviceOffsetTop && scrollOffset < serviceOffsetTop + serviceHeight) {
    this.router.navigate(['/service']);
    this.activateLink('active-service');
  } else if (scrollOffset >= contactOffsetTop && scrollOffset < contactOffsetTop + contactHeight) {
    this.router.navigate(['/contact']);
    this.activateLink('active-contact');
  } else {
    this.deactivateAllLinks();
  }
 
}

  
  activateLink(linkId: string) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link: Element, index: number, array: NodeListOf<Element>) => {
      if ((link as HTMLElement).id === linkId) {
        (link as HTMLElement).classList.add('active');
      } else {
        (link as HTMLElement).classList.remove('active');
      }
    });
  }
  deactivateAllLinks() {
    const links = document.querySelectorAll('.nav-link');
    
    links.forEach((link: Element, index: number, array: NodeListOf<Element>) => {
      link.classList.remove('active');
    });
  }
 
  
 
 
  onSubmit(){

    console.log(this.myForm.value.firstName);
    this.name = this.myForm.value.firstName
    
    if(this.myForm.valid){
      this.isdisplay = true
      
    }
    
}



   
   
    
  
  
  
}
