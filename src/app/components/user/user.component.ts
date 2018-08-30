import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['user.component.css'],
  styles: [
      `h2 {
      color: blue
    }`
  ]
})

export class UserComponent implements OnInit {

  user: User;

  constructor() {
    console.log('xd');
  }

  ngOnInit(): void {

    /*    this.user = {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '50 main st',
            city: 'Boston',
            state: 'Ma'
          }*/

  }

}






