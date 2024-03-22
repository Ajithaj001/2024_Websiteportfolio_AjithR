import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private staticData: any[] = [
    {  name: 'Ajith', description: 'a passionate frontend developer dedicated to creating engaging and user-friendly web experience' },
   
    // Add more items as needed
  ];

  constructor() { }

  getStaticData(): Observable<any[]> {
    // Return an Observable of static data
    return of(this.staticData);
  }

  
}
