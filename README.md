# Curso de Automação Básico com Cypress

Este repositório contém os exercícios e projetos desenvolvidos durante meu primeiro curso de **automação de testes com Cypress**. O objetivo foi aprender os fundamentos do Cypress, explorando desde a instalação até a execução de testes automatizados para aplicações web.

## 🚀 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de testes end-to-end
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem utilizada nos testes
- [Node.js](https://nodejs.org/) - Ambiente de execução para o Cypress

## 📂 Estrutura do Projeto

```
curso-automacao-basico/
├── cypress/
│   ├── e2e/
│   │   ├── login.spec.js
│   │   ├── cadastro.spec.js
│   │   ├── compra.spec.js
│   ├── support/
│   ├── fixtures/
├── cypress.config.js
├── package.json
├── README.md
```

- `cypress/e2e/`: Contém os arquivos de teste.
- `cypress/support/`: Arquivos de suporte para os testes.
- `cypress/fixtures/`: Dados utilizados nos testes.

## 🛠️ Configuração do Ambiente

### Pré-requisitos

Antes de executar os testes, instale:

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/JardelQuaresma7/curso-automacao-basico.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd curso-automacao-basico
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

## ▶️ Executando os Testes

### Abrindo a interface do Cypress

```bash
npx cypress open
```

ou

```bash
yarn run cypress open
```

### Rodando testes em modo headless

```bash
npx cypress run
```

ou

```bash
yarn run cypress run
```

## 📌 Exemplo de Teste

Exemplo de um teste básico de login:

```javascript
describe('Teste de Login', () => {
  it('Deve fazer login com sucesso', () => {
    cy.visit('/login');
    cy.get('#user').type('usuario_teste');
    cy.get('#password').type('senha123');
    cy.get('#login-button').click();
    cy.url().should('include', '/dashboard');
  });
});
```

## 🤝 Contribuição

Caso queira contribuir, siga os passos:

1. Faça um fork do repositório.
2. Crie uma branch (`git checkout -b feature/nova-feature`).
3. Faça commit das mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## 📜 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.
