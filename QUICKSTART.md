# 🚀 Guia de Início Rápido - Portfólio Cyberpunk

## ⚡ Começando em 5 minutos

### 1. 📁 Estrutura do Projeto
```
portfolio2/
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos cyberpunk
├── js/
│   ├── main.js            # Funcionalidades principais
│   ├── scrolltrigger-config.js # Animações GSAP
│   └── i18n.js            # Sistema de idiomas
├── assets/
│   ├── README.md          # Instruções de imagens
│   └── cv-example.md      # Exemplo de CV
├── README.md              # Documentação completa
├── TRANSLATIONS.md        # Guia de traduções
├── package.json           # Dependências (opcional)
└── .gitignore            # Arquivos ignorados
```

### 2. 🎨 Personalização Rápida

#### 🌍 Sistema de Idiomas
O portfólio agora suporta **3 idiomas**: Português, Inglês e Francês!

- **Botão de idioma**: Localizado na barra de navegação
- **Persistência**: Sua escolha é salva automaticamente
- **Tradução completa**: Todo o conteúdo é traduzido

Para personalizar traduções, edite o arquivo `js/i18n.js`:

```javascript
// Seu nome em cada idioma
pt: { hero: { title: 'SEU NOME' } },
en: { hero: { title: 'YOUR NAME' } },
fr: { hero: { title: 'VOTRE NOM' } }
```

#### Editar Informações Pessoais
Abra `js/i18n.js` e altere as traduções:

```javascript
// Português
pt: {
    hero: {
        title: 'SEU NOME',
        description: 'Sua descrição personalizada...',
        subtitle: [
            'Desenvolvedor Front-End',
            'Designer UI/UX',
            'Entusiasta de Tecnologia'
        ]
    }
}

// Inglês
en: {
    hero: {
        title: 'YOUR NAME',
        description: 'Your personalized description...',
        subtitle: [
            'Front-End Developer',
            'UI/UX Designer',
            'Technology Enthusiast'
        ]
    }
}

// Francês
fr: {
    hero: {
        title: 'VOTRE NOM',
        description: 'Votre description personnalisée...',
        subtitle: [
            'Développeur Front-End',
            'Designer UI/UX',
            'Passionné de Technologie'
        ]
    }
}
```

#### Editar Contato
Edite no arquivo `js/i18n.js`:

```javascript
// Português
pt: {
    contact: {
        info: {
            locationValue: 'Sua Cidade, Brasil'
        }
    }
}

// Inglês
en: {
    contact: {
        info: {
            locationValue: 'Your City, Brazil'
        }
    }
}

// Francês
fr: {
    contact: {
        info: {
            locationValue: 'Votre Ville, Brésil'
        }
    }
}
```

#### Editar Redes Sociais
Edite no arquivo `index.html` (os links sociais não mudam com o idioma):

```html
<!-- Links sociais -->
<a href="https://github.com/seu-usuario" class="social-link" target="_blank">
    <i class="fab fa-github"></i>
</a>
<a href="https://linkedin.com/in/seu-usuario" class="social-link" target="_blank">
    <i class="fab fa-linkedin"></i>
</a>
```

### 3. 🖼️ Adicionar Imagens

#### Opção 1: Usar Placeholders (Rápido)
Edite `index.html` e substitua os caminhos das imagens:

```html
<!-- Foto de perfil -->
<img src="https://picsum.photos/300/300" alt="Foto do desenvolvedor" class="profile-img">

<!-- Screenshots dos projetos -->
<img src="https://picsum.photos/800/600" alt="Projeto 1" loading="lazy">
<img src="https://picsum.photos/800/600" alt="Projeto 2" loading="lazy">
<img src="https://picsum.photos/800/600" alt="Projeto 3" loading="lazy">
```

#### Opção 2: Suas Próprias Imagens
1. Coloque sua foto em `assets/profile.jpg`
2. Coloque screenshots dos projetos em `assets/project1.jpg`, `assets/project2.jpg`, etc.
3. Crie um favicon em `assets/favicon.ico`

### 4. 🎯 Editar Projetos

Edite no arquivo `js/i18n.js` para cada idioma:

```javascript
// Português
pt: {
    projects: {
        project1: {
            title: 'Nome do Seu Projeto',
            description: 'Descrição detalhada do seu projeto...',
            tech: ['React', 'Node.js', 'MongoDB']
        }
    }
}

// Inglês
en: {
    projects: {
        project1: {
            title: 'Your Project Name',
            description: 'Detailed description of your project...',
            tech: ['React', 'Node.js', 'MongoDB']
        }
    }
}

// Francês
fr: {
    projects: {
        project1: {
            title: 'Nom de Votre Projet',
            description: 'Description détaillée de votre projet...',
            tech: ['React', 'Node.js', 'MongoDB']
        }
    }
}
```

### 5. 📊 Editar Habilidades

As habilidades são editadas no arquivo `index.html` (não mudam com o idioma):

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

### 6. 🌐 Testar Localmente

#### Método 1: Abrir Direto
1. Clique duas vezes no arquivo `index.html`
2. Abrirá no seu navegador padrão

#### Método 2: Servidor Local (Recomendado)
```bash
# Se você tem Python instalado
python -m http.server 8000

# Se você tem Node.js instalado
npx http-server -p 8000

# Se você tem PHP instalado
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

### 7. 🚀 Deploy Rápido

#### GitHub Pages (Gratuito)
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings > Pages
4. Selecione a branch main
5. Acesse o link gerado

#### Netlify (Gratuito)
1. Vá para netlify.com
2. Arraste a pasta do projeto
3. Deploy automático

### 8. 🎨 Personalização Avançada

#### Mudar Cores
Edite `css/style.css`:

```css
:root {
    --primary-color: #00ffff;    /* Ciano */
    --secondary-color: #ff00ff;  /* Magenta */
    --accent-color: #00ff00;     /* Verde */
}
```

#### Mudar Animações
Edite `js/main.js`:

```javascript
// Velocidade do texto digitado
typeSpeed: 50,        // Mais rápido
backSpeed: 30,        // Mais rápido
backDelay: 2000,      // Mais tempo entre frases
```

### 9. 📧 Configurar Formulário

Para o formulário funcionar, você precisa de um serviço de email:

#### EmailJS (Gratuito)
1. Crie conta em emailjs.com
2. Configure o serviço
3. Adicione o código no `js/main.js`

#### Formspree (Gratuito)
1. Crie conta em formspree.io
2. Obtenha o endpoint
3. Substitua no `js/main.js`

### 10. ✅ Checklist Final

- [ ] Nome e informações pessoais atualizadas em todos os idiomas
- [ ] Traduções personalizadas no arquivo `js/i18n.js`
- [ ] Links das redes sociais funcionando
- [ ] Imagens dos projetos adicionadas
- [ ] Habilidades com porcentagens corretas
- [ ] Informações de contato atualizadas
- [ ] Formulário de contato configurado
- [ ] Sistema de idiomas testado
- [ ] Testado em diferentes dispositivos
- [ ] Deploy realizado

---

## 🆘 Precisa de Ajuda?

- 📖 **Documentação Completa**: Veja o `README.md`
- 🐛 **Problemas**: Verifique o console do navegador (F12)
- 💡 **Dicas**: Use o modo desenvolvedor do navegador para testar

---

**🎉 Parabéns! Seu portfólio cyberpunk está pronto!** 