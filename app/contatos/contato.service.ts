import { Injectable } from "@angular/core";
import { Contato } from "./contato.model";
import { CONTATOS } from "./contatos.mock";
import { resolve } from "dns";

@Injectable()

export class ContatoService {
    getContatos(): Promise<Contato[]> {
        return Promise.resolve(CONTATOS);
    }
    getContatosSlowly(): Promise<Contato[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000);
        })
    }
}