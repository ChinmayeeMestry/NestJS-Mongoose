import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDTO } from './dto/users.dto';

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
  async createUser(@Body() createUserDTO: CreateUsersDTO) {
    const user = await this.userService.createUser(createUserDTO);
    return user;
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
