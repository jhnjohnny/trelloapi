import { UserModel } from './user.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private readonly userModel: Model<UserModel>) { }

  async getAll() {
    return await this.userModel.find().exec();
  }

  async getById(id: string) {
    return await this.userModel.findById(id).exec();
  }

  async getByEmail(email: string) {
    return await this.userModel.findOne({ email }).exec();
  }

  async create(user: UserModel) {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }

  async update(id: string, user: UserModel) {
    await this.userModel.updateOne({ _id: id }, user).exec();
    return this.getById(id);
  }

  // async delete(id: string) {
  //   return await this.userModel.deleteOne({ _id: id}).exec();
  // }

}