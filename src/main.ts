import { NestFactory } from '@nestjs/core';
import { HelloWorldModule } from './resources/helloworld/helloworld.module';

async function bootstrap() {
  const app = await NestFactory.create(HelloWorldModule, { abortOnError: false })
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
