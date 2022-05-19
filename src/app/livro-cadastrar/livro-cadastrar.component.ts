import { Component,  EventEmitter ,Output} from '@angular/core';
import {Livro} from '../livro.model';

@Component({
  selector: 'app-livro-cadastrar',
  templateUrl: './livro-cadastrar.component.html',
  styleUrls: ['./livro-cadastrar.component.css']
})
export class LivroCadastrarComponent {

  @Output() livroAdicionado = new EventEmitter<Livro>();

  id: number;
  titulo: string;
  autor: string;
  paginas: number;

  onAdicionarLivro() {
    const livro: Livro = {
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
      paginas: this.paginas,

    }
    this.livroAdicionado.emit(livro)
  }
}
