# Portfólio Cyberpunk - Desenvolvedor Front-End

Um portfólio pessoal com temática cyberpunk, desenvolvido com **Bootstrap 5** para responsividade e CSS personalizado para cores e efeitos visuais.

## 🚀 Características

- **Design Cyberpunk**: Interface futurista com cores neon e efeitos visuais
- **Totalmente Responsivo**: Utiliza Bootstrap 5 para adaptação em todos os dispositivos
- **Animações Fluidas**: Efeitos de hover e transições suaves
- **Carrossel de Projetos**: Apresentação interativa dos trabalhos
- **Barras de Progresso**: Visualização das habilidades técnicas
- **Formulário de Contato**: Integração completa
- **Tema Escuro/Claro**: Alternância entre modos de visualização
- **Internacionalização**: Suporte a múltiplos idiomas

## 🛠️ Tecnologias Utilizadas

### Framework CSS
- **Bootstrap 5.3.2**: Sistema de grid responsivo e componentes
- **CSS Custom Properties**: Variáveis CSS para cores e efeitos
- **CSS Grid & Flexbox**: Layouts modernos

### JavaScript
- **GSAP**: Animações avançadas
- **ScrollTrigger**: Animações baseadas em scroll
- **Typed.js**: Efeito de digitação
- **AOS**: Animações on scroll
- **ScrollReveal**: Revelação de elementos

### Bibliotecas
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia (Orbitron, Share Tech Mono, Rajdhani)

## 📁 Estrutura do Projeto

```
portfolionovovaporwave/
├── assets/
│   ├── cv-example.md
│   └── README.md
├── css/
│   └── style.css          # CSS personalizado (cores e efeitos)
├── js/
│   ├── i18n.js           # Internacionalização
│   ├── main.js           # JavaScript principal
│   └── scrolltrigger-config.js
├── index.html            # Página principal
├── package.json
├── README.md
└── TRANSLATIONS.md
```

## 🎨 Sistema de Cores

### Cores Principais (Cyberpunk)
- **Primary**: `#00ffff` (Ciano neon)
- **Secondary**: `#ff00ff` (Magenta neon)
- **Accent**: `#00ff00` (Verde neon)
- **Warning**: `#ffff00` (Amarelo neon)
- **Danger**: `#ff0000` (Vermelho neon)

### Cores de Fundo
- **Primary**: `#0a0a0a` (Preto profundo)
- **Secondary**: `#1a1a1a` (Cinza escuro)
- **Tertiary**: `#2a2a2a` (Cinza médio)

## 🔧 Instalação e Uso

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/portfolionovovaporwave.git
   cd portfolionovovaporwave
   ```

2. **Abra o arquivo HTML**
   - Abra `index.html` em qualquer navegador moderno
   - Ou use um servidor local:
   ```bash
   python -m http.server 8000
   # ou
   npx serve .
   ```

## 📱 Responsividade

O projeto utiliza **Bootstrap 5** para responsividade, garantindo:

- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: 
  - `sm`: ≥576px
  - `md`: ≥768px
  - `lg`: ≥992px
  - `xl`: ≥1200px
  - `xxl`: ≥1400px
- **Grid System**: Sistema de 12 colunas flexível
- **Componentes Responsivos**: Navegação, carrossel, formulários

## 🎯 Funcionalidades

### Seções Principais
1. **Hero Section**: Apresentação com efeitos de glitch
2. **Sobre**: Informações pessoais e estatísticas
3. **Projetos**: Carrossel interativo de trabalhos
4. **Habilidades**: Barras de progresso animadas
5. **Contato**: Formulário e informações de contato

### Efeitos Visuais
- **Glitch Effect**: Texto com efeito de distorção
- **Neon Glow**: Sombras luminosas
- **Hover Animations**: Transições suaves
- **Scroll Animations**: Animações baseadas em scroll
- **Typing Effect**: Efeito de digitação

## 🎨 Personalização

### Cores
Edite as variáveis CSS em `css/style.css`:

```css
:root {
    --primary-color: #00ffff;
    --secondary-color: #ff00ff;
    --accent-color: #00ff00;
    /* ... outras cores */
}
```

### Conteúdo
- **Informações pessoais**: Edite o HTML diretamente
- **Projetos**: Adicione/remova itens no carrossel
- **Habilidades**: Ajuste as porcentagens nas barras de progresso
- **Contato**: Atualize links e informações

## 🌐 Internacionalização

O projeto suporta múltiplos idiomas através do arquivo `js/i18n.js`. Para adicionar um novo idioma:

1. Adicione as traduções no objeto `translations`
2. Crie o botão de idioma no HTML
3. Implemente a lógica de troca

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Contato

- **Email**: matcardolidev@gmail.com
- **WhatsApp**: (83) 98608-7039
- **Localização**: João Pessoa, Brasil

---

**Desenvolvido com ❤️ e muito café ☕** 