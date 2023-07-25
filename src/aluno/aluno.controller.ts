/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';

@Controller()
export class AlunoController {

    @Get('/aluno')
    aluno(): string {
        return 'Bom dia, aluno José'
    }


}
