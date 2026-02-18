import { Body, Controller, Get, Header, HostParam, HttpCode, Param, Post, Query, Redirect, Req } from '@nestjs/common';
// import type { Request } from 'express';
import type { FastifyRequest } from 'fastify';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './create-cat.dto';


// @Controller({ host: 'localhostaaaaa' }) // permissao de host especifico
// @Controller({ host: ':account.localhost' }) // permissao de host especifico
@Controller('cats')
export class CatsController {

  // @Get()
  // findAll(@Req() request: FastifyRequest): string {
  //   // findAll(@Req() request: Request): string {
  //   // getInfo(@HostParam('account') account: string) {
  //   console.log(request.hostname);  // fastify
  //   // console.log(request.get('host'));  // express
  //   // console.log(request.body);  // Node
  //   return 'get fastify';
  // }


  // @Get()
  // async findAll(): Promise<any[]> {
  //   return ['sidjisd', 'suhudhsdhushdsdhsudhushd'];
  // }


  @Get()
  findAll(): Observable<any[]> {
    return of(['dssdsd']);
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto, '<<<<<<<<<<<<<<<<<<<<<<<,,')
    return 'dsdhushdushdushduhsudhsudhsuhdushdus'
  }

  @Post('/create')
  // @HttpCode(204)
  @Header('Cache-Control', 'no-store')
  // @Redirect('https://rjrsolucoes.vercel.app/', 302)
  createGat(): string {
    return '>>>>>>>>>>>>>>>   GATO CRIADO    <<<<<<<<<<<<<<<<'
  }


  // Rota curinga:
  @Get('abcd/*')
  findAllAbcd() {
    return 'this route uses a wildcard'
  }

  @Get('docs')
  @Redirect('https://rjrsolucoes.vercel.app', 303)
  getDocs(@Query('version') version) {
    if (version && version === '5')
      return { url: 'https://rjrsolucoes.vercel.app/projects' }
  }

  @Get('admin')
  @Redirect('https://rjrsolucoes.vercel.app', 303)
  getDocsAdmin(@Query('version') version) {
    if (version && version === '5')
      return { url: 'http://localhost:3000/cats/admin/admin' }
  }

  // @Get(':aa')
  // findOne(@Param() params: any): string {
  //   console.log(params.aa)
  //   console.log(params.id)
  //   return `o parametro id é : ####### ${params.id} <<<<<<<<<<<<<<<<<<<<<<<`
  // }

  // @Get('/test/:id')
  // findOneId(@Param('id') id: string): string {
  //   // console.log(params.aa)
  //   console.log(id)
  //   return `o parametro id é : ####### ${id} <<<<<<<<<<<<<<<<<<<<<<<`
  // }

}
