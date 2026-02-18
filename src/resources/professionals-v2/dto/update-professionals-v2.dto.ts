import { PartialType } from '@nestjs/mapped-types';
import { CreateProfessionalsV2Dto } from './create-professionals-v2.dto';

export class UpdateProfessionalsV2Dto extends PartialType(CreateProfessionalsV2Dto) {}
