import { ChangeDetectorRef, Component } from '@angular/core';
import { Apiservice } from '../apiservice';
import { Card } from '../card/card';



@Component({
  standalone: true,
  selector: 'app-cars',
  imports: [Card],
  templateUrl: './cars.html',
  styleUrl: './cars.css',
})
export class Cars {
  cars: any[] = [];
  constructor(private apiservice: Apiservice,private cdr : ChangeDetectorRef) { }
  ngOnInit() {
    this.apiservice.getproducts().subscribe((data : any) => {
      this.cars = data;
      this.cdr.detectChanges();
    });
  }
}
