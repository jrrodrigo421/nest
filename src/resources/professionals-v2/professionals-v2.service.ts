import { Injectable } from '@nestjs/common';
import { CreateProfessionalsV2Dto } from './dto/create-professionals-v2.dto';
import { UpdateProfessionalsV2Dto } from './dto/update-professionals-v2.dto';

@Injectable()
export class ProfessionalsV2Service {
  create(createProfessionalsV2Dto: CreateProfessionalsV2Dto) {
    return 'This action adds a new professionalsV2';
  }

  findAll() {
    return `This action returns all professionalsV2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} professionalsV2`;
  }

  update(id: number, updateProfessionalsV2Dto: UpdateProfessionalsV2Dto) {
    return `This action updates a #${id} professionalsV2`;
  }

  remove(id: number) {
    return `This action removes a #${id} professionalsV2`;
  }
}
