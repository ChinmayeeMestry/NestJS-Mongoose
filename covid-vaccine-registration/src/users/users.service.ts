import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './interfaces/users.interface';
import { CreateUsersDTO } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(`Users`) private readonly userModel: Model<Users>) {}

  async getUsers() : Promise<Users[]> {
    try {
      const user = await this.userModel.find().exec();
      return user;
    }
    catch(e) {
      return e;
    }
  }

  async getUserById(id: String) : Promise<Users> {
    try {
    // const user = await this.userModel.find({_id: id}).exec();       // using find(query) method
    // const user = await this.userModel.findById(id).exec();             // using findById(id) method
    const user = await this.userModel.findOne({_id: id}).exec();
    return user;
    }
    catch(e) {
      return e;
    }
  }

  async createUser(createUserDTO: CreateUsersDTO): Promise<Users> {
    try {
      const user = await new this.userModel(createUserDTO).save();
      return user;
    }
    catch(e) {
      return e;
    }
  }

  async updateUserById(id: String, createUserDTO: CreateUsersDTO): Promise<Users> {
    try {
      const user = await this.userModel.findOneAndUpdate(
        id,
        createUserDTO,
        {
          new : true
        }
      ).exec()
      return user;
    }
    catch(e) {
      return e;
    }
  }

  async deleteUserById(id: String): Promise<Object> {
    // const user = await this.userModel.findOneAndRemove({_id: id}).exec();
    // const user = await this.userModel.findOneAndDelete({_id: id}).exec();
    // const user = await this.userModel.findByIdAndRemove(id).exec();
    try{
      const user = await this.userModel.findByIdAndDelete(id).exec();
      if(user){
        let response = {
          result  : user,
          message : `User Deleted Successfully`
        }
        return response;
      }
    }
    catch(e) {
      return e;
    }
  }
}
