import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDTO } from './dto/users.dto';
import { Users } from './interfaces/users.interface';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {
    console.log(`User Vaccination`);
  }
  @Get()
  async getUsers() : Promise<Users[]> {
    try{
      const user = await this.userService.getUsers();
      return user;
    }
    catch(e) {
      return e;
    }
  }


  @Get(':id')
  async getUserById(@Param('id') id:String) : Promise<Users> {
    try{
      const user = await this.userService.getUserById(id);
      return user;
    }
    catch(e) {
      return e;
    }
  }

  // Another approach
  // @Get(':id')
  // async getUserById(@Param() params: any) : Promise<Users> {
  //   try{
  //     const user = await this.userService.getUserById(params.id);
  //     return user;
  //   }
  //   catch(e) {
  //     return e;
  //   }
  // }

  @Post()
  async createUser(@Body() createUserDTO: CreateUsersDTO): Promise<Users> {
    try{
      const user = await this.userService.createUser(createUserDTO);
      return user;
    }
    catch(e) {
      return e;
    }
  }


  @Put(':id')
  async updateUserById(@Param('id') id: String, @Body() createUserDTO: CreateUsersDTO) {
    try{
      const user = await this.userService.updateUserById(id, createUserDTO);
      return user;
    }
    catch(e) {
      return e;
    }
  }

  // Another Approach
  // @Put(':id')
  // async updateUserById(@Param() params: any, @Body() createUserDTO: CreateUsersDTO) {
  //   try{
  //     const user = await this.userService.updateUserById(params.id, createUserDTO);
  //     return user;
  //   }
  //   catch(e) {
  //     return e;
  //   }
  // }


  @Delete(':id')
  async deleteUserById(@Param('id') id: String) : Promise<Object> {
    try{
      const user = await this.userService.deleteUserById(id);
      return user;
    }
    catch(e) {
      return e;
    }
  }

  // Another Approach 
  // @Delete(':id')
  // async deleteUserById(@Param() params: any) : Promise<Users> {
  //   try{
  //     const user = await this.userService.deleteUserById(params.id);
  //     return user;
  //   }
  //   catch(e) {
  //     return e;
  //   }
  // }
}
