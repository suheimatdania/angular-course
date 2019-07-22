import {Component, ContentChild, ElementRef, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string; content: string};
  @ContentChild('header', {static : true }) header: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
