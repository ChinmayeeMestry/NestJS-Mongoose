import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  public getUsers() {
    return `Get User Service`;
  }
  public getUserById() {
    return `Get User Service By Id`;
  }
  public createUser() {
    return `User Created`;
  }
  public updateUserById() {
    return `Updated User By Id`;
  }
  public deleteUserById() {
    return `Delete User By Id`;
  }
}
