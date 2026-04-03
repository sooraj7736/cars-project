import { ChangeDetectorRef, Component } from '@angular/core';
import { Corousel } from "../corousel/corousel";
import { Accordion } from "../accordion/accordion";
import { Cars } from '../cars/cars';
import { Testimonial } from '../testimonial/testimonial';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [Corousel, Accordion, Cars, Testimonial,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
}
