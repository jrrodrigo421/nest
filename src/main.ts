import { NestFactory } from '@nestjs/core';
import { CatsModule } from './resources/cat/cats.module';
// import { NestFastifyApplication } from '@nestjs/platform-fastify';

async function bootstrap() {
  // const app = await NestFactory.create<NestFastifyApplication>(CatsModule, {
  const app = await NestFactory.create(CatsModule, {
    abortOnError: false,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
