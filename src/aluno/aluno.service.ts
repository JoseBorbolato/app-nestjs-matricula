import { Injectable } from "@nestjs/common";


@Injectable()
export class AlunoService{

    viewName(id:string){
        return `Olá José. O parâmetro passado é: ${id}`
    }
}