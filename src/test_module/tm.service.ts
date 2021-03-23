import { Injectable } from '@nestjs/common';
import { testResultDto } from './tm.dto';

@Injectable()
export class TestModuleService {
  getTest(): testResultDto {
    return { test: 'Ok' };
  }
}