import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ApiModule } from './api/api.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // SWAGGER
  const options = new DocumentBuilder()
    .setTitle('SWAGGER TrelloAPI - NestJS')
    .setDescription('SWAGGER TrelloAPI - NestJS')
    .setVersion('v1.3')
    //.addTag('ApiController')
    .build();

  const apiDocument = SwaggerModule.createDocument(app, options, {
    include: [UsersModule, AuthModule, ApiModule]
  });

  SwaggerModule.setup('api/swagger', app, apiDocument);

  app.enableCors({ origin: '*' });
  await app.listen(3000);
}
bootstrap();
