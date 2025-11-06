import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ItemLista} from './itemLista';

@Component({
  selector: 'app-lista-compras',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {
  item: string = '';
  quantidade: number | null = null;
  lista: ItemLista[] = [];

 ngOnInit() {
    let userId = localStorage.getItem('userId');
    if (!userId) {
      userId = 'user-' + Math.random().toString(36).substring(2, 10);
      localStorage.setItem('userId', userId);
    }

    const dados = localStorage.getItem(`listaCompras-${userId}`);
    if (dados) {
      this.lista = JSON.parse(dados);
    }
  }

  salvarLista() {
    const userId = localStorage.getItem('userId');
    localStorage.setItem(`listaCompras-${userId}`, JSON.stringify(this.lista));
  }

  adicionarItem() {
    if (!this.item.trim()) return;

    const novoItem = new ItemLista();
    novoItem.id = this.lista.length + 1;
    novoItem.nome = this.item;
    novoItem.quantidade = this.quantidade || 1;
    this.lista.push(novoItem);
    this.salvarLista();

    this.item = '';
    this.quantidade = null;
  }

  marcarComoComprado(item: ItemLista) {
    item.comprado = !item.comprado;
    this.salvarLista();
  }

  removerItem(id: number | undefined) {
  this.lista = this.lista.filter(i => i.id !== id);
  this.lista.forEach((item, index) => {
    item.id = index + 1;
  });

  this.salvarLista();
}


}
