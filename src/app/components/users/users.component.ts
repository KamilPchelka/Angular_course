import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service';

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
  @ViewChild('userForm') form: any;
  private loaded: boolean;
  private data: any;


  constructor(private userService: UserService) {
    this.loaded = true;
  }

  ngOnInit() {
    console.log('init...');
    this.showExtended = true;
    this.userService.getData().subscribe(value => {

      console.log(value);

    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });

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

  onSubmit({value, valid}: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {

      value.isActive = true;
      value.registered = new Date();
      this.userService.addUser(value);

      this.form.reset();
    }
  }

}
