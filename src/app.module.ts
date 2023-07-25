import { AlunoController } from './aluno/aluno.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    AlunoController, AppController],
  providers: [AppService],
})
export class AppModule { }
