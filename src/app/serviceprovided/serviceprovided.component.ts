import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-serviceprovided',
  templateUrl: './serviceprovided.component.html',
  styleUrls: ['./serviceprovided.component.css']
 
})
export class ServiceprovidedComponent {
  images: string[] = ['assets/coding.jpg', 'assets/website.jpg', 'assets/service3.jpg','assets/service4.jpg'];
  currentImage!: string;
  currentIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.loadImage();
    setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.loadImage();
  }

  loadImage() {
    this.currentImage = this.images[this.currentIndex];
  }
}
