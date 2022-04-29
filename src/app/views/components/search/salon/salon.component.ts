import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.scss']
})
export class SalonComponent implements OnInit {
  showDetails: boolean = false;
  showCalender: boolean = false;
  showBookingList: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
