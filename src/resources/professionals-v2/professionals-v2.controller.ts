import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfessionalsV2Service } from './professionals-v2.service';
import { CreateProfessionalsV2Dto } from './dto/create-professionals-v2.dto';
import { UpdateProfessionalsV2Dto } from './dto/update-professionals-v2.dto';

@Controller('professionals-v2')
export class ProfessionalsV2Controller {
  constructor(private readonly professionalsV2Service: ProfessionalsV2Service) {}

  @Post()
  create(@Body() createProfessionalsV2Dto: CreateProfessionalsV2Dto) {
    return this.professionalsV2Service.create(createProfessionalsV2Dto);
  }

  @Get()
  findAll() {
    return this.professionalsV2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.professionalsV2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfessionalsV2Dto: UpdateProfessionalsV2Dto) {
    return this.professionalsV2Service.update(+id, updateProfessionalsV2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.professionalsV2Service.remove(+id);
  }
}
