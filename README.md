# Godzilla – A Guerra do Meio Século

Este é um projeto Next.js dedicado para a disciplina de Programação para Web I. O site fornece informações sobre a HQ, a editora e recursos adicionais sobre o projeto.

## Estrutura do Projeto

### Páginas

O site possui três páginas principais:

1. **Home (`pages/index.js`)**
   - Exibe uma visão geral da HQ e uma introdução ao projeto.
   - Inclui uma seção com a capa da HQ e uma breve descrição.

2. **Sobre a HQ (`pages/sobre.js`)**
   - Fornece detalhes sobre a publicação original da HQ, incluindo a trama e referências à franquia Godzilla.
   - Apresenta informações adicionais e imagens relacionadas à HQ.

3. **Sobre a Conrad Editora (`pages/conrad.js`)**
   - Oferece informações sobre a Conrad Editora, a editora responsável pela publicação da HQ no Brasil.
   - Inclui uma breve história da editora e seus marcos.

### Componentes

O projeto utiliza os seguintes componentes principais:

- **Header (`components/Header.js`)**
  - Exibe o logo da Conrad Editora e um menu de navegação.
  - Permite a navegação entre as páginas do site.

- **Footer (`components/Footer.js`)**
  - Apresenta informações de rodapé, como direitos autorais e créditos.

- **HomeSection (`components/HomeSection.js`)**
  - Seção específica para a página inicial, incluindo a introdução à HQ.

- **SobreSection (`components/SobreSection.js`)**
  - Seção específica para a página sobre, com detalhes sobre a publicação da HQ.

- **ConradSection (`components/ConradSection.js`)**
  - Seção específica para a página da Conrad Editora.

### APIs

O projeto inclui três rotas de API para fornecer metadados e informações úteis:

1. **/api/page-metadata**
   - Fornece metadados sobre cada página, como título e descrição.
   - Exemplo de resposta:
     ```json
     {
       "title": "Godzilla – A Guerra do Meio Século",
       "description": "Página inicial do projeto sobre a HQ Godzilla – A Guerra de Meio Século."
     }
     ```

2. **/api/site-config**
   - Oferece informações gerais sobre o site, como nome e versão.
   - Exemplo de resposta:
     ```json
     {
       "name": "Godzilla – A Guerra do Meio Século",
       "version": "1.0.0",
       "developer": "Matheus da Silva"
     }
     ```

3. **/api/contact-info**
   - Fornece informações de contato, nesse caso o Github.
   - Exemplo de resposta:
     ```json
     {
       github: 'https://github.com/MatheusGODZILLA'
     }
     ```
## Clonando e usando o repositório

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

Você pode começar a editar a página modificando `pages/index.js`. A página será atualizada automaticamente conforme você edita o arquivo.

As [rotas da API](https://nextjs.org/docs/api-routes/introduction) podem ser acessadas em [http://localhost:3000/api/page-metadata](http://localhost:3000/api/page-metadata), [http://localhost:3000/api/site-config](http://localhost:3000/api/site-config), e [http://localhost:3000/api/contact-info](http://localhost:3000/api/contact-info). Esses endpoints podem ser editados em `pages/api/page-metadata.js`, `pages/api/site-config.js` e `pages/api/contact-info.js`.

O projeto utiliza [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para otimizar e carregar automaticamente a fonte Inter, uma fonte personalizada do Google.

---

Esse README fornece uma visão geral completa do projeto, explica como navegar pelas páginas e usar as APIs, e inclui instruções para iniciar o servidor de desenvolvimento. Se precisar de mais alguma coisa ou ajustes, é só avisar!
