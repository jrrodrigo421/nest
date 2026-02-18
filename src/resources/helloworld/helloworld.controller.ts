import { Controller, Get } from '@nestjs/common';
import { HelloworldService } from './helloworld.service';

@Controller()
export class HelloworldController {
  constructor(private readonly appService: HelloworldService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
