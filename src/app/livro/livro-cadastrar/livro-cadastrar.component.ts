import { Component,  EventEmitter ,Output} from '@angular/core';
import { NgForm } from '@angular/forms';
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

  onAdicionarLivro(form:NgForm) {
    if(form.invalid){
      return;
    }
    const livro: Livro = {
      id: form.value.id,
      titulo: form.value.titulo,
      autor: form.value.autor,
      paginas: form.value.paginas,

    }
    this.livroAdicionado.emit(livro)
  }
}
