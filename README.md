# Portfólio — Fernando Coelho

Site de portfólio construído apenas com HTML5, CSS3 e JavaScript puro. Não exige instalação nem servidor: abra `index.html` em qualquer navegador moderno.

## Estrutura

- `index.html`: estrutura e conteúdo semântico da página.
- `css/style.css`: identidade visual, responsividade e animações.
- `js/script.js`: idioma, tema, menu mobile, filtros, formulário e cards.

## Personalização

### Informações e contato

No `index.html`, substitua `seu-email@exemplo.com` pelo email real. Atualize também os dois links com `href="#"` para os endereços de GitHub e LinkedIn.

### Projetos

Em `js/script.js`, edite a constante `projects`. Cada item possui uma `category` (`frontend`, `backend` ou `systems`) e uma lista de `tags`. Quando houver projetos reais, substitua o conteúdo de `renderCards()` pelos seus nomes, descrição e links.

### Tecnologias

Edite a constante `skills` no mesmo arquivo. A interface cria os cards automaticamente a partir dessa lista.

### Foto

O design atual usa uma ilustração leve de terminal, sem imagem. Para acrescentar uma foto, salve-a em `assets/images/`, inclua uma tag `<img>` com texto `alt` descritivo e defina `loading="lazy"` se ela estiver fora da primeira tela.

### Idiomas

As traduções estão centralizadas no objeto `content` em `js/script.js`. Para mudar qualquer texto, edite as versões `pt` e `en`. A escolha do visitante é salva no navegador por meio de `localStorage`.

### Tema

O botão de tema alterna entre o modo escuro e claro; essa preferência também fica salva localmente.
