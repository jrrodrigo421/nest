import { NestFactory } from '@nestjs/core';
import { HelloworldModule } from './resources/helloworld/helloworld.module';

async function bootstrap() {
  const app = await NestFactory.create(HelloworldModule, { abortOnError: false })
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
