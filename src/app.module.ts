import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ UserModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'CYF@12345',
    database: 'ry_nest',
    synchronize: true,
    retryDelay: 500,
    retryAttempts: 10,
    autoLoadEntities: true,
  }),],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
