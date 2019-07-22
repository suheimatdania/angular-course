import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  currentlyOn = '';

  constructor(private router: Router, private currentRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onMouseEnter(elementOn: string){
    this.currentlyOn = elementOn;
  }

  onMouseLeave() {
    this.currentlyOn = '';
  }

  onChoosePage() {
    this.router.navigate( [this.currentlyOn],{relativeTo: this.currentRoute} );
  }


}
