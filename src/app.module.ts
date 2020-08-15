import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ApiModule } from './api/api.module';
import { UsersModule } from './users/users.module';

import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ApiModule,
    UsersModule,
    MongooseModule.forRoot('mongodb+srv://dbUser:dbUserPassword@cluster0-tzov9.gcp.mongodb.net/trello?retryWrites=true&w=majority'),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
