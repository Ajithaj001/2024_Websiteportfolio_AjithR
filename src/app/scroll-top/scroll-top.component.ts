import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css']
})
export class ScrollTopComponent {
  showButton: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show the button when scrolling down
    this.showButton = window.scrollY > 30;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
