/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';

@Controller()
export class ProfessorController {

    @Get('professor')
    professor(): string {
        return 'Olá professor Johnny' 
    }
}
