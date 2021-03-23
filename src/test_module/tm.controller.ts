import { Controller, Get } from '@nestjs/common';
import { testResultDto } from './tm.dto';
import { TestModuleService } from './tm.service';


@Controller('api')
export class TestModuleController {
  constructor(private readonly testModuleService: TestModuleService) {}

  @Get('/v1/test')
  getTest(): testResultDto {
    return this.testModuleService.getTest();
  }
}