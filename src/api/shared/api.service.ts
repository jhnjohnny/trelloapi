import { Injectable } from '@nestjs/common';
import { ApiModel } from './api.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ApiService {

  constructor(@InjectModel('Api') private readonly apiModel: Model<ApiModel>) { }

  async getAll() {
    return await this.apiModel.find().exec();
  }

    async getById(id: string) {
      return await this.apiModel.findById(id).exec();
    }

    async create(api: ApiModel) {
      const created = new this.apiModel(api);
      return await created.save();
    }
  
    async update(id: string, api: ApiModel) {
      await this.apiModel.updateOne({ _id: id }, api).exec();
      return this.getById(id);
    }
  
    async delete(id: string) {
      return await this.apiModel.deleteOne({ _id: id}).exec();
    }

}
