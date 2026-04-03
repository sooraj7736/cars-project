import { ChangeDetectorRef, Component, Input } from '@angular/core';
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
   @Input() limit: number | null = null;
  constructor(private apiservice: Apiservice,private cdr : ChangeDetectorRef) { }
  ngOnInit() {
    
    this.apiservice.getproducts().subscribe((data : any) => {
      if (this.limit) {
        this.cars = data.slice(0, this.limit);
        this.cdr.detectChanges();
      } else {
        this.cars = data;
        this.cdr.detectChanges();
      }
      
    });
  }
}
