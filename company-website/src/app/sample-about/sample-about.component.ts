import { Component, OnInit } from '@angular/core';

declare function openTab(name): string;
// declare function myMethod(): any;
@Component({
  selector: 'app-sample-about',
  templateUrl: './sample-about.component.html',
  styleUrls: ['./sample-about.component.css']
})
export class SampleAboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // myMethod();
  }

  openTab1(name: string){
    openTab(name);
    // alert('opened');
    // console.log('clicked');
  }


}
