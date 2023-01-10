import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable()
export class UserService {

  constructor() { }

  getUsers(): Observable<UserModel[]> {
    const res = [{id: 1, name: 'Alex'}, {id: 2, name: 'Valera'}, {id: 3, name: 'Lexus'}];
    return of(res.map(i => new UserModel(i)))
  }

}