import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModuleController } from './test_module/tm.controller';
import { TestModuleService } from './test_module/tm.service';

@Module({
  imports: [],
  controllers: [AppController, TestModuleController],
  providers: [AppService, TestModuleService],
})
export class AppModule {}
