import { Injectable } from "@angular/core";

export interface IUser {
  id: number,
  name: string,
}

@Injectable()
export class UserModel {
  name: string;
  id: number;

  constructor(obj: IUser) {
    Object.assign(this, obj);
  }
}