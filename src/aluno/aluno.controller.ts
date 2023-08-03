/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';

@Controller('aluno')
export class AlunoController {

    @Get('api/v1/listar')
    aluno(): string {
        return 'Bom dia, aluno José Luiz Borbolato' 
    }


}
