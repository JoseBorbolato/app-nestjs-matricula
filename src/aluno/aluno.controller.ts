/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param } from '@nestjs/common';
import { AlunoService } from './aluno.service';

@Controller('api/v1/aluno')
export class AlunoController {

    constructor(
        private funcoesAluno: AlunoService
    ) { }

    @Get(':id')
    aluno(@Param() parametros: any): string {
        return this.funcoesAluno.viewName(parametros.id)
    }


}
