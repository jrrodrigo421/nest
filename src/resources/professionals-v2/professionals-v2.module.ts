import { Module } from '@nestjs/common';
import { ProfessionalsV2Service } from './professionals-v2.service';
import { ProfessionalsV2Controller } from './professionals-v2.controller';

@Module({
  controllers: [ProfessionalsV2Controller],
  providers: [ProfessionalsV2Service],
})
export class ProfessionalsV2Module {}
