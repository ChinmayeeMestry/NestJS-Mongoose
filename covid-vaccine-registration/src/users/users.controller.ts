import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {
    console.log(`User Vaccination`);
  }
  @Get()
  public getUsers() {
    return this.userService.getUsers();
  }
  @Get(':id')
  public getUserById() {
    return this.userService.getUserById();
  }
  @Post()
  public createUser() {
    return this.userService.createUser();
  }
  @Put(':id')
  public updateUserById() {
    return this.userService.updateUserById();
  }
  @Delete(':id')
  public deleteUserById() {
    return this.userService.deleteUserById();
  }
}
