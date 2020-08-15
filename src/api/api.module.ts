import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiController } from './api.controller';
import { ApiService } from './shared/api.service';
import { ApiSchema } from './schemas/api.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Api', schema: ApiSchema }]),
  ],  
    controllers : [ApiController],
    providers : [ApiService],
    exports: [ApiService],
})
export class ApiModule {}
