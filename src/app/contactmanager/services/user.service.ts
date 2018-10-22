import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users: BehaviorSubject<User[]>;

  private dataStore: {
    users: User[]
  }

  constructor(private _httpClient: HttpClient) {
    this.dataStore = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
  }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  loadAll() {
    const usersURL = 'https://angular-material-api.azurewebsites.net/users';

    this._httpClient.get<User[]>(usersURL).subscribe(data => {
      this.dataStore.users = data;
      this._users.next(Object.assign({}, this.dataStore).users);
    },
    err => {
      console.log('Failed to fetch users', err);
    });
  }
}
