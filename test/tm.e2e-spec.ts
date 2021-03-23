import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TestModule } from '../src/test_module/tm.module';
import * as request from 'supertest';


describe('TestModuleController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TestModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/v1/test (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/v1/test')
      .expect(200)
      .expect({ test: 'Ok' });
  })
})