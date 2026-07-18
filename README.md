# 🎨 Pixel Arte - Portfólio Pessoal

Bem-vindo ao repositório do meu portfólio! Este é um site moderno e responsivo criado para showcasear meu trabalho em pixel art e design digital.

## 📋 Conteúdo do Repositório

```
📁 pixelarteofc2027.github.io/
├── 📄 index.html          # Página principal do portfólio
├── 🎨 style.css           # Estilos e design responsivo
├── ⚙️  script.js          # Funcionalidades interativas
└── 📚 README.md           # Esta documentação
```

## ✨ Principais Características

✅ Design moderno e responsivo  
✅ Navegação suave e intuitiva  
✅ Seção de portfólio com 6 projetos  
✅ Formulário de contato funcional  
✅ Animações suaves e interativas  
✅ Contador de estatísticas animado  
✅ Efeito de digitação no título  
✅ Otimizado para mobile, tablet e desktop  
✅ Links sociais integrados  

## 🚀 Como Usar

### Opção 1: Ver Online
Acesse diretamente em: **https://pixelarteofc2027.github.io/**

### Opção 2: Clonar Localmente
```bash
# Clone o repositório
git clone https://github.com/pixelarteofc2027/pixelarteofc2027.github.io.git

# Entre no diretório
cd pixelarteofc2027.github.io

# Abra o arquivo index.html no navegador
# Você pode usar um servidor local ou simplesmente abrir o arquivo
```

### Opção 3: Usar um Servidor Local
```bash
# Com Python 3
python -m http.server 8000

# Com Python 2
python -m SimpleHTTPServer 8000

# Acesse: http://localhost:8000
```

## 📑 Estrutura do Site

### 1. **Navegação (Navbar)**
- Logo do portfólio
- Links para as principais seções
- Menu fixo no topo
- Efeito hover com underline animado

### 2. **Seção Hero**
- Título com efeito de digitação
- Descrição profissional
- Botão de chamada para ação
- Fundo com gradiente e elementos decorativos

### 3. **Seção Sobre Mim**
- Descrição profissional
- 4 cards de habilidades:
  - Pixel Art
  - Design Gráfico
  - Ilustração Digital
  - Animação

### 4. **Seção Portfólio**
- Grid responsivo com 6 projetos
- Cards com imagens e descrições
- Efeitos hover com zoom de imagem
- Projetos inclusos:
  - Jogo Pixel Art
  - Character Design
  - UI Design
  - Ilustração
  - Logo Design
  - Animação

### 5. **Seção Estatísticas**
- Contador animado de números
- 4 estatísticas principais:
  - 50+ Projetos Completos
  - 30+ Clientes Satisfeitos
  - 5+ Anos de Experiência
  - 100% Dedicação

### 6. **Seção Contato**
- Formulário interativo
- Validação de email em tempo real
- Feedback ao usuário após envio
- 3 campos: Nome, Email, Mensagem

### 7. **Rodapé (Footer)**
- Copyright e informações legais
- Links para redes sociais:
  - Twitter
  - Instagram
  - LinkedIn
  - GitHub

## 🎨 Paleta de Cores

```css
--cor-primaria: #6c5ce7    /* Roxo Principal */
--cor-secundaria: #a29bfe  /* Roxo Claro */
--cor-texto: #2d3436       /* Cinza Escuro */
--cor-fundo: #f5f6fa       /* Cinza Muito Claro */
--cor-branco: #ffffff      /* Branco */
--cor-cinza: #b2bec3       /* Cinza Médio */
--cor-sucesso: #00b894     /* Verde Sucesso */
```

## 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos avançados com Grid e Flexbox
- **JavaScript Vanilla** - Sem dependências externas
- **Responsive Design** - Mobile First
- **Animações CSS** - Transições suaves
- **Intersection Observer API** - Animações ao scroll

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:

- 📱 **Mobile** (320px - 480px)
- 📱 **Tablet** (481px - 768px)
- 💻 **Desktop** (769px+)
- 🖥️ **Telas Largas** (1200px+)

## ⚙️ Funcionalidades JavaScript

### 1. **Scroll Suave**
- Navegação com scroll suave para as seções

### 2. **Animações ao Scroll**
- Cards de habilidades e portfólio aparecem com animação
- Usando Intersection Observer API

### 3. **Efeito de Digitação**
- Título principal digita automaticamente ao carregar

### 4. **Contador Animado**
- Números na seção de estatísticas contam até o valor final

### 5. **Validação de Email**
- Valida email em tempo real
- Muda cor de borda se inválido

### 6. **Formulário de Contato**
- Captura dados do formulário
- Mostra mensagem personalizada
- Limpa o formulário após envio

### 7. **Efeito Navbar**
- Aumenta sombra ao fazer scroll

## 🎯 Sugestões de Personalização

Para adaptar o site ao seu trabalho:

1. **Altere as cores** em `style.css` na seção `:root`
2. **Atualize o nome e logo** no `index.html`
3. **Substitua as imagens de portfólio** pelos seus projetos reais
4. **Atualize as redes sociais** nos links do footer
5. **Modifique o conteúdo** de habilidades e descrições
6. **Adicione mais projetos** duplicando os cards

## 📞 Assistência Técnica

### Como Alterar Cores

No arquivo `style.css`, procure pela seção `:root` e altere as variáveis:

```css
:root {
    --cor-primaria: #6c5ce7;      /* Altere esta cor */
    --cor-secundaria: #a29bfe;    /* E esta */
    /* ... outras cores */
}
```

### Como Adicionar Mais Projetos

1. Abra `index.html`
2. Encontre a seção `.portfolio-grid`
3. Copie um `div.portfolio-item` completo
4. Cole após o último item
5. Altere a imagem, título e descrição

Exemplo:
```html
<div class="portfolio-item">
    <div class="portfolio-image">
        <img src="sua-imagem.jpg" alt="Seu Projeto">
    </div>
    <h3>Seu Projeto</h3>
    <p>Descrição do seu projeto</p>
</div>
```

### Como Mudar as Redes Sociais

No footer, altere os links em:
```html
<a href="https://twitter.com/seu-usuario" target="_blank">Twitter</a>
<a href="https://instagram.com/seu-usuario" target="_blank">Instagram</a>
<a href="https://linkedin.com/in/seu-usuario" target="_blank">LinkedIn</a>
<a href="https://github.com/seu-usuario" target="_blank">GitHub</a>
```

### Como Integrar Formulário Real

O formulário atual apenas mostra uma mensagem. Para receber emails:

**Opção 1: Formspree** (Recomendado - Gratuito)
1. Vá em https://formspree.io
2. Crie uma conta
3. Configure seu email
4. Altere o atributo `action` do formulário:
```html
<form class="contact-form" action="https://formspree.io/f/SEU_ID" method="POST">
```

**Opção 2: EmailJS** (JavaScript)
1. Configure em https://www.emailjs.com
2. Adicione o script deles no `index.html`
3. Configure no seu `script.js`

**Opção 3: Backend Próprio**
- Configure um servidor Node.js, Python, ou PHP
- Use ferramentas como Express, Flask, ou Laravel

### Como Alterar Conteúdo

#### Título Principal
```html
<h2>Seu Novo Título</h2>
```

#### Descrição
```html
<p>Sua nova descrição aqui</p>
```

#### Logo
```html
<h1>🎨 Seu Nome</h1>
```

## 🐛 Troubleshooting - Soluções para Problemas

### Problema 1: Site não está responsivo
**Causa:** Viewport não configurado  
**Solução:** Verifique se o meta viewport está no `<head>` do `index.html`:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Problema 2: Animações não funcionam
**Causa:** Script não está sendo carregado  
**Solução:** Verifique se o `script.js` está sendo chamado antes do fechamento da tag `</body>`:
```html
<script src="script.js"></script>
</body>
```

### Problema 3: Formulário não funciona
**Causa:** Nenhum backend configurado  
**Solução:** Use Formspree ou outra solução de backend para receber os dados (veja acima)

### Problema 4: Imagens não carregam
**Causa:** URLs incorretas  
**Solução:** 
- Certifique-se de que as URLs estão corretas
- Se usando imagens locais, coloque-as na mesma pasta
- Use caminhos relativos: `<img src="imagens/minha-imagem.jpg">`

### Problema 5: Cores não mudam
**Causa:** Cache do navegador  
**Solução:** 
- Limpe o cache: `Ctrl + Shift + Del` (ou `Cmd + Shift + Delete` no Mac)
- Use `Ctrl + F5` para recarregar completamente

### Problema 6: Links não funcionam
**Causa:** IDs não correspondem  
**Solução:** Verifique se o `id` da seção corresponde ao `href` do link:
```html
<!-- No link -->
<a href="#sobre">Sobre</a>

<!-- Na seção -->
<section id="sobre">...</section>
```

## 📚 Recursos Úteis

- [MDN Web Docs](https://developer.mozilla.org/) - Documentação HTML/CSS/JS
- [Can I Use](https://caniuse.com/) - Compatibilidade de features
- [CSS Tricks](https://css-tricks.com/) - Dicas e tutoriais CSS
- [JavaScript Info](https://javascript.info/) - Tutoriais detalhados JavaScript
- [W3Schools](https://www.w3schools.com/) - Referências rápidas

## 🎓 Como Customizar Aún Mais

### Adicionar Google Fonts
1. Vá em https://fonts.google.com/
2. Escolha uma fonte
3. Adicione ao `<head>` do `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```
4. Use no CSS:
```css
body {
    font-family: 'Poppins', sans-serif;
}
```

### Adicionar Ícones (Font Awesome)
1. Adicione ao `<head>`:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
```
2. Use os ícones:
```html
<i class="fas fa-twitter"></i>
```

### Adicionar Animações Extras
Use a biblioteca Animate.css:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
```

## 📄 Licença

Este projeto está sob a licença **MIT**. Você é livre para usar, modificar e distribuir, desde que mantenha a atribuição original.

```
MIT License

Copyright (c) 2026 Pixel Arte

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 🙏 Agradecimentos

Obrigado por visitar meu portfólio! Se você achou este projeto útil, considere dar uma ⭐ no repositório!

---

**Desenvolvido com ❤️ por Pixel Arte** 🎨  
**Última atualização:** 2026-07-18  
**Versão:** 1.0.0

**Links Rápidos:**
- 🌐 [Visitar Site](https://pixelarteofc2027.github.io/)
- 📧 [Email](mailto:pixelarteofc2025@gmail.com)
- 🐙 [GitHub](https://github.com/pixelarteofc2027)

---

## 📧 Suporte

Tem dúvidas ou encontrou um problema? Entre em contato:
- **Email:** pixelarteofc2025@gmail.com
- **GitHub Issues:** [Abrir Issue](https://github.com/pixelarteofc2027/pixelarteofc2027.github.io/issues)
