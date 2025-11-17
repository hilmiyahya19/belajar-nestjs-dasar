import {
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
} from '@nestjs/common';
import type { HttpRedirectResponse } from '@nestjs/common';

@Controller('/api/users')
export class UserController {
  // Http Response menggunakan decorator @header untuk menambahkan header, @HttpCode untuk menambahkan http status code
  @Get('/sample-response')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  sampleResponse(): Record<string, string> {
    return {
      data: 'Hello JSON',
    };
  }

  // Http Response menggunakan decorator @Redirect (static)
  @Get('/redirect-static')
  @Redirect('/api/users/sample-response', 301)
  redirectStatic() {}

  // Http Response menggunakan decorator @Redirect (dynamic)
  @Get('/redirect-dynamic')
  @Redirect()
  redirectDynamic(): HttpRedirectResponse {
    const shouldGoToSample = true; // contoh kondisi dinamis

    return {
      url: shouldGoToSample ? '/api/users/sample-response' : '/api/users/hello',
      statusCode: 302,
    };
  }

  // Http Request Query menggunakan decorator @Query
  @Get('/hello')
  sayHello(
    @Query('first_name') firstName: string,
    @Query('last_name') lastName: string,
  ): string {
    return `Hello ${firstName} ${lastName}`;
  }

  // Http Request Param mennggunakan decorator @Param
  @Get('/:id')
  getById(@Param('id') id: string): string {
    return `GET ${id}`;
  }

  @Post()
  post(): string {
    return 'POST';
  }

  @Get('/sample')
  get(): string {
    return 'Hello NestJS';
  }
}
