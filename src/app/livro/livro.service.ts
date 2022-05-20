import { Injectable } from "@angular/core";
import { Livro } from "./livro.model"

@Injectable({ providedIn: 'root' })

export class LivroService{
  private livros:Livro[];

  getLivros(): Livro[]{
    return [...this.livros];
  }

  adicionarLivro(id: number, titulo: string, autor: string, paginas: number) {
    const livro: Livro = {
      id, titulo, autor, paginas
    };
    this.livros.push(livro);
    }

}
