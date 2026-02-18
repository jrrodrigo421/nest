import { Controller, Get, Post, Req } from '@nestjs/common';
import type { Request } from 'express';
// import type { FastifyRequest } from 'fastify';
@Controller('cats')
export class CatsController {

  @Post('/create')
  createGat(): string {
    return 'this action adds a new cat'
  }


  @Get()
  // findAll(@Req() request: FastifyRequest): string {
  findAll(@Req() request: Request): string {
    // console.log(request.hostname);  // fastify
    console.log(request.get('host'));  // express
    console.log(request.body);  // Node
    return 'teste gats module';
  }

  // Rota curinga:

  @Get('abcd/*')
  findAllAbcd() {
    return 'this route uses a wildcard'
  }

}
