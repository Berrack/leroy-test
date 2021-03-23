import { TestModuleService } from "./tm.service"

describe('TestModuleService', () => {
  let tmService: TestModuleService;

  beforeEach(() => {
    tmService = new TestModuleService();
  });

  it('should test test method', () => {
    expect(tmService.getTest()).toEqual({ test: 'Ok' });
  })
})