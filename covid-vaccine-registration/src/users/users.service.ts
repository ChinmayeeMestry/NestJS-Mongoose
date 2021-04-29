import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './interfaces/users.interface';
import { CreateUsersDTO } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(`Users`) private readonly userModel: Model<Users>) {}

  public getUsers() {
    return `Get User Service`;
  }
  public getUserById() {
    return `Get User Service By Id`;
  }
  async createUser(createUserDTO: CreateUsersDTO): Promise<Users> {
    const user = await new this.userModel(createUserDTO);
    return user.save();
  }
  public updateUserById() {
    return `Updated User By Id`;
  }
  public deleteUserById() {
    return `Delete User By Id`;
  }
}
