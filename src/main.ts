import { NestFactory } from '@nestjs/core';
// import { HelloWorldModule } from './resources/helloworld/helloworld.module';
import { CatsModule } from './resources/cat/cats.module';

async function bootstrap() {
  const app = await NestFactory.create(CatsModule, { abortOnError: false })
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
