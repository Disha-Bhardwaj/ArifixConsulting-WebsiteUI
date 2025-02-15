import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor() { }
  showMap = false
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
