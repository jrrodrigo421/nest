import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { CatsModule } from './resources/cat/cats.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import * as qs from 'qs';

async function bootstrap() {
  // const app = await NestFactory.create<NestExpressApplication>(CatsModule, {
  const app = await NestFactory.create<NestFastifyApplication>(CatsModule,
    //    {
    //   abortOnError: false,

    // },
    new FastifyAdapter({
      querystringParser: (str) => qs.parse(str),
    }),);

  // Ativa o parser de query estendido (suporta objetos e matrizes) -> ISSO PRA EXPRESS
  // app.set('query parser', 'extended');



  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
