🛒 Lista de Compras

Um pequeno projeto desenvolvido com Angular 19, criado para praticar os conceitos fundamentais do framework, como componentes standalone, data binding, event binding e os novos loops com @for.

O objetivo é permitir que o usuário adicione itens a uma lista de compras, marque os itens já comprados e gerencie tudo de forma simples, intuitiva e responsiva.

🚀 Tecnologias utilizadas

- [Angular 19](https://angular.dev)

- TypeScript

- HTML5 / SCSS

💡 Funcionalidades

✅ Adicionar novos itens à lista

✅ Definir quantidade (ex: 2kg, 500g, 1 unid)

✅ Marcar itens como comprados (com efeito de riscado)

✅ Excluir itens individualmente

✅ Excluir todos os itens

✅ IDs atualizados dinamicamente após exclusões

✅ Armazenamento local com localStorage, mantendo a lista ao atualizar a página

✅ Cada usuário possui sua própria lista exclusiva

✅ Layout responsivo para celulares e desktops



🧩 Estrutura principal

| Arquivo | Função |
|----------|--------|
| **lista-compras.component.ts** | Contém a lógica do componente e o gerenciamento da lista |
| **lista-compras.component.html** | Estrutura visual (formulário e tabela) |
| **lista-compras.component.scss** | Estilos e layout responsivo |
| **itemLista.ts** | Classe modelo que representa cada item (id, nome, quantidade, comprado) |


🌐 Deploy

🔗 Acesse o projeto online:
[Lista de compras](https://compras-angular.vercel.app/)

✨ Aprendizados

Durante o desenvolvimento, foram aplicados conceitos importantes do Angular:

- Uso de componentes standalone (sem necessidade de módulo)

- Aplicação de data binding e two-way binding com [(ngModel)]

- Estruturas de repetição modernas com @for

- Persistência de dados com localStorage

- Boas práticas de organização de código e responsividade com SCSS