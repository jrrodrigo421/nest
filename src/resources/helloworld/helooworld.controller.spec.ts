import { Test, TestingModule } from '@nestjs/testing';
import { HelloworldController } from './helloworld.controller';
import { HelloworldService } from './helloworld.service';

describe('AppController', () => {
  let appController: HelloworldController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HelloworldController],
      providers: [HelloworldService],
    }).compile();

    appController = app.get<HelloworldController>(HelloworldController);
  });

  describe('root', () => {
    it('should return "Hello World JrRodrigo!"', () => {
      // expect(appController.getHello()).toBe('Hello World JrRodrigoX!');
      expect(appController.getHello()).toBe('Hello World JrRodrigo!');
    });
  });
});
