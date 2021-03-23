import { Module } from '@nestjs/common';
import { TestModuleController } from './tm.controller';
import { TestModuleService } from './tm.service';


@Module({
  imports: [],
  controllers: [TestModuleController],
  providers: [TestModuleService],
})
export class TestModule {}
