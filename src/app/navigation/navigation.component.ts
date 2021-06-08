import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
   Navigation :any=[];
  constructor() { }

  ngOnInit(): void {
    this.Navigation=["HOME","BAND","TOUR","CONTACT"];
  }

}
