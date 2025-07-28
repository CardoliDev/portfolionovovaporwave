# 🎯 Portfólio Cyberpunk - Front-End Developer

Um portfólio pessoal moderno e performático com temática cyberpunk, desenvolvido com as melhores práticas de front-end.

## ✨ Características

- 🎨 **Design Cyberpunk**: Cores neon, efeitos de luz e gradientes modernos
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em todos os dispositivos
- ⚡ **Performance Otimizada**: Lazy loading, compressão e otimizações
- 🎭 **Animações Fluidas**: GSAP, ScrollReveal, AOS e Typed.js
- 🌙 **Modo Claro/Escuro**: Toggle de tema com persistência
- 📧 **Formulário Funcional**: Validação e notificações
- ♿ **Acessível**: Atributos ARIA e navegação por teclado

## 🛠️ Tecnologias Utilizadas

### Front-End
- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com CSS Variables
- **JavaScript ES6+** - Funcionalidades interativas
- **Bootstrap 5** - Framework responsivo

### Bibliotecas de Animação
- **GSAP** - Animações complexas e suaves
- **ScrollReveal** - Efeitos ao rolar
- **Typed.js** - Texto digitado animado
- **AOS** - Animate On Scroll

### Ícones e Fontes
- **Font Awesome** - Ícones vetoriais
- **Google Fonts** - Orbitron, Share Tech Mono, Rajdhani

## 🚀 Instalação e Uso

### 1. Clone o Repositório
```bash
git clone https://github.com/seu-usuario/portfolio-cyberpunk.git
cd portfolio-cyberpunk
```

### 2. Personalização

#### Editar Informações Pessoais
Abra o arquivo `index.html` e edite:

```html
<!-- Seção Hero -->
<h1 class="hero-title">
    <span class="glitch-text" data-text="SEU NOME">SEU NOME</span>
</h1>

<!-- Seção Sobre -->
<p class="about-text">
    Sua bio personalizada aqui...
</p>

<!-- Estatísticas -->
<div class="stat-number">50+</div>
<div class="stat-label">Projetos Concluídos</div>
```

#### Editar Projetos
Na seção de projetos, atualize:

```html
<div class="project-card">
    <div class="project-image">
        <img src="assets/seu-projeto.jpg" alt="Nome do Projeto">
    </div>
    <div class="project-content">
        <h3 class="project-title">Nome do Projeto</h3>
        <p class="project-description">Descrição do projeto...</p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
        </div>
    </div>
</div>
```

#### Editar Habilidades
Na seção de habilidades, ajuste as porcentagens:

```html
<div class="skill-item">
    <div class="skill-info">
        <span class="skill-name">HTML5 & CSS3</span>
        <span class="skill-percentage">95%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-width="95"></div>
    </div>
</div>
```

#### Editar Contato
Atualize as informações de contato:

```html
<div class="contact-item">
    <div class="contact-icon">
        <i class="fas fa-envelope"></i>
    </div>
    <div class="contact-details">
        <h4>Email</h4>
        <p>seu.email@exemplo.com</p>
    </div>
</div>
```

### 3. Adicionar Imagens

1. Coloque sua foto de perfil em `assets/profile.jpg`
2. Adicione screenshots dos projetos em `assets/project1.jpg`, `assets/project2.jpg`, etc.
3. Crie um favicon personalizado em `assets/favicon.ico`

### 4. Configurar Links Sociais

Edite os links das redes sociais no HTML:

```html
<div class="social-links">
    <a href="https://github.com/seu-usuario" class="social-link" target="_blank">
        <i class="fab fa-github"></i>
    </a>
    <a href="https://linkedin.com/in/seu-usuario" class="social-link" target="_blank">
        <i class="fab fa-linkedin"></i>
    </a>
</div>
```

### 5. Configurar Formulário de Contato

Para integrar o formulário com serviços reais, edite o arquivo `js/main.js`:

```javascript
// Exemplo com EmailJS
emailjs.send('service_id', 'template_id', {
    name: data.name,
    email: data.email,
    subject: data.subject,
    message: data.message
});

// Exemplo com Formspree
fetch('https://formspree.io/f/seu-form-id', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

## 🎨 Personalização Avançada

### Cores Cyberpunk
Edite as variáveis CSS em `css/style.css`:

```css
:root {
    --primary-color: #00ffff;    /* Ciano */
    --secondary-color: #ff00ff;  /* Magenta */
    --accent-color: #00ff00;     /* Verde */
    --bg-primary: #0a0a0a;       /* Preto */
    --bg-secondary: #1a1a1a;     /* Cinza escuro */
}
```

### Animações
Ajuste as animações GSAP em `js/main.js`:

```javascript
// Velocidade das animações
gsap.from('.hero-title', {
    duration: 2,        // Duração em segundos
    y: 100,            // Movimento vertical
    opacity: 0,        // Transparência inicial
    ease: 'power3.out' // Tipo de easing
});
```

### Efeitos de Glitch
Personalize o efeito glitch no título:

```css
.glitch-text::before {
    animation: glitch-1 2s infinite; /* Frequência do glitch */
    color: var(--secondary-color);
}
```

## 📱 Responsividade

O portfólio é totalmente responsivo com breakpoints:

- **Desktop**: > 992px
- **Tablet**: 768px - 991px
- **Mobile**: < 767px

## ⚡ Otimizações de Performance

### Implementadas
- Lazy loading de imagens
- Minificação de CSS/JS (recomendado)
- Preload de recursos críticos
- Debounce e throttle em eventos
- Intersection Observer para animações

### Recomendadas
```bash
# Minificar CSS
npm install -g clean-css-cli
cleancss -o css/style.min.css css/style.css

# Minificar JS
npm install -g uglify-js
uglifyjs js/main.js -o js/main.min.js
```

## 🌐 Deploy

### GitHub Pages
1. Faça push para o repositório
2. Vá em Settings > Pages
3. Selecione a branch main
4. Acesse o link gerado

### Netlify
1. Conecte seu repositório GitHub
2. Configure o build (não necessário para sites estáticos)
3. Deploy automático

### Vercel
1. Importe o projeto do GitHub
2. Deploy automático
3. Domínio personalizado opcional

## 🔧 Configurações Adicionais

### SEO
Edite as meta tags no `<head>`:

```html
<meta name="description" content="Portfólio de desenvolvedor front-end com foco em experiências digitais únicas">
<meta name="keywords" content="front-end, developer, cyberpunk, portfolio">
<meta name="author" content="Seu Nome">
```

### Analytics
Adicione Google Analytics:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Solução de Problemas

### Animações não funcionam
- Verifique se todas as bibliotecas estão carregadas
- Confirme se o JavaScript não tem erros no console

### Imagens não carregam
- Verifique os caminhos das imagens
- Confirme se os arquivos existem na pasta `assets/`

### Formulário não envia
- Configure corretamente o serviço de email
- Verifique a validação JavaScript

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se livre para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abrir um Pull Request

## 📞 Suporte

Se você tiver dúvidas ou problemas:

- Abra uma issue no GitHub
- Entre em contato através do formulário do site
- Consulte a documentação das bibliotecas utilizadas

---

**Desenvolvido com ❤️ e muito café ☕** 