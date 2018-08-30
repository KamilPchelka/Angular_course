import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class UserService {

  users: User[];
  data: Observable<number>;

  constructor() {

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

  }

  public getUsers() {
    return of(this.users);
  }

  public addUser(user: User) {
    this.users.unshift(user);
  }

  public getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });

    return this.data;
  }
}
