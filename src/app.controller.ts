import {  Get,Req,Post,HttpCode, Param, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { callbackify } from 'util';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('h*o')
  getHello(@Req() request:Request): string {
    return this.appService.getHello();
  }
  @Get(':id')
  findOne(@Param('id') id): string {
    // console.log(params.id);
    return `This action returns a #${id} cat`;
  }
  @Get('add')
  getHello1(@Req() request:Request): string {
    return this.appService.getHello();
  }
  @Post('add')
  @HttpCode(200)
  create(): string {
    return 'This action adds a new cat';
  }

}
@Controller({host:'debug'})
export class AdminController {
@Get()
index():string{
return 'this is admin page'
}
}
