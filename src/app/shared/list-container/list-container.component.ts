import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {
   @Input() private list;
   @Input() private type;

  constructor() { }

  ngOnInit() {
  }

}
