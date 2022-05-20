import { Component } from '@angular/core';
import {Livro} from './livro/livro.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sistema-livros';
  livros2: Livro [] = []
  onLivroAdicionado(livro){
    this.livros2 = [...this.livros2,livro];
  }
}
