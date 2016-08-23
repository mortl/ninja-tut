import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  welcome:string = "Welcome to the Home Page!";

  textboxMsg:string ="Please enter your name";

  constructor() { }

  ngOnInit() {
  }

}
