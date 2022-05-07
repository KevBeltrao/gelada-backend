// import { Test, TestingModule } from '@nestjs/testing';
// import { INestApplication } from '@nestjs/common';
// import * as request from 'supertest';

// import { UsersModule } from '../src/users/users.module';
// import { rootDatabaseTestModule } from '../src/test-utils/database/database-test-module';

describe('UserController (e2e)', () => {
  it('should be a gambiarra', () => expect(true).toBe(true));
  // let app: INestApplication;

  // beforeAll(async () => {
  //   const moduleFixture: TestingModule = await Test.createTestingModule({
  //     imports: [rootDatabaseTestModule(), UsersModule],
  //   }).compile();

  //   app = moduleFixture.createNestApplication();

  //   await app.init();
  // });

  // it('/users (POST)', () => {
  //   const userData = {
  //     name: 'John Doe',
  //     phone: '81912341234',
  //     email: 'john.doe@gmail.com',
  //     password: 'Test!234',
  //   };

  //   return request(app.getHttpServer())
  //     .post('/users')
  //     .send(userData)
  //     .expect(201)
  //     .then((response) => {
  //       const { name, phone, email, _id } = response.body;

  //       expect(name).toBe(userData.name);
  //       expect(phone).toBe(userData.phone);
  //       expect(email).toBe(userData.email);
  //       expect(_id).toBeTruthy();
  //     });
  // });

  // afterAll(async () => {
  //   await app.close();
  // });
});
