import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.css'],
})
export class ServicesHomeComponent implements OnInit {
  ngOnInit(): void {
      
  }
  myServices = ['Consulting', 'Business Analysis', 'Customer service', 'Design Database'];
}
