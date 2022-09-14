import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salon-page',
  templateUrl: './salon-page.component.html',
  styleUrls: ['./salon-page.component.css'],
  animations: [
    trigger('slidein', [
      transition(':enter', [
        // when ngif has true
        style({ transform: 'translateX(-100%)' }),
        animate(250, style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        // when ngIf has false
        animate(250, style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class SalonPageComponent implements OnInit {
  expanded: boolean = false;
  showServiceDetail = false
  viewMode = 'service';
  showMap = false
  constructor() { }

  ngOnInit(): void {
  }
  showMapUI(event: any){
    if (event.target.checked) {
      this.showMap = true
    } else {
      this.showMap = false
    }
  }

}
