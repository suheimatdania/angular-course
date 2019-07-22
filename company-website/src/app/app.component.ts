import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'company-website';
  navLinks = [
    { path: '', label: 'Home'},
    { path: 'about-us', label: 'About'},
    { path: 'contact-us', label: 'Contact Us'}
  ];
}
