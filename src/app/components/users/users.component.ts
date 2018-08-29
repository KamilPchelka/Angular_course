import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  };
  users: User[];
  showExtended = true;
  showUserForm = false;


  constructor() {
  }

  ngOnInit() {
    console.log('init...');
    this.showExtended = true;
    setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@john.john',
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true

        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          email: 'kevin@kevin.kevin',
          isActive: false,
          registered: new Date('01/02/2016 08:30:00'),
          hide: true

        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          email: 'karen@karen.karen',
          isActive: true,
          hide: true
        }


      ];
    }, 2000);
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
    };
  }

  onSubmit(e: Event) {
    console.log(123);

    e.preventDefault();
  }
}
