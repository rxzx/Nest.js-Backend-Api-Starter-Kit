import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { SwaggerApiConfig } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle(SwaggerApiConfig.Title)
    .setDescription(SwaggerApiConfig.Description)
    .setVersion(SwaggerApiConfig.Version)
    .addTag(SwaggerApiConfig.Tags.Posts)
    .addTag(SwaggerApiConfig.Tags.Users)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(SwaggerApiConfig.DocumentPath, app, document);

  await app.listen(3000);
}
bootstrap();
