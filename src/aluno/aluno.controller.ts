/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';

@Controller('api/v1/aluno')
export class AlunoController {

    @Get()
    aluno(): string {
        return 'Bom dia, aluno José Luiz Borbolato' 
    }


}
