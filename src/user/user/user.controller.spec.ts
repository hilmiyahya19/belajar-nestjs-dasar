import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import httpMock from 'node-mocks-http'
import { title } from 'process';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      imports: [],
      providers: [],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should can say hello', async () => {
    const response = await controller.sayHello('Hilmi', 'Yahya');
    expect(response).toBe('Hello Hilmi Yahya');
  });

  it('should can view template', async () => {
    const result = httpMock.createResponse();
    controller.viewHello('Hilmi', result);

    expect(result._getRenderView()).toBe('index.html');
    expect(result._getRenderData()).toEqual({
      title: 'Template Engine',
      name: 'Hilmi',
    })
  });
});
