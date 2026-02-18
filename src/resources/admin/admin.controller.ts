import { Controller, Get } from '@nestjs/common';

@Controller({ host: 'localhost' })
export class AdminController {
  @Get('admin')
  index(): Object {
    console.log('bateu auqi?? ')
    return { 'admin': 'admin page' }
  }
}
