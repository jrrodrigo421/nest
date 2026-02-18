import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { CatsModule } from './resources/cat/cats.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(CatsModule, {
    abortOnError: false,
  });

  // Ativa o parser de query estendido (suporta objetos e matrizes)
  app.set('query parser', 'extended');

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
