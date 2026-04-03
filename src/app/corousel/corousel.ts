import { ChangeDetectorRef, Component } from '@angular/core';
import { Apiservice } from '../apiservice';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-corousel',
  imports: [RouterLink],
  templateUrl: './corousel.html',
  styleUrl: './corousel.css',
})
export class Corousel {
  cars: any[] = [];
  constructor(private apiservice: Apiservice,private cdr : ChangeDetectorRef) { }
  ngOnInit() {
    this.apiservice.getproducts().subscribe((data : any) => {
      this.cars = data;
      this.cars = this.cars.slice(0,10);
      this.cdr.detectChanges();
    });
  }
}
