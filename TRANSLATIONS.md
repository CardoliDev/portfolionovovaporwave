# 🌍 Guia de Traduções - Sistema de Internacionalização

## 📋 Visão Geral

O portfólio agora inclui um sistema completo de internacionalização (i18n) que permite alternar entre **Português**, **Inglês** e **Francês** com um simples clique no botão de idioma.

## 🎯 Como Funciona

### Botão de Idioma
- Localizado na barra de navegação, ao lado do botão de tema
- Dropdown com bandeiras e nomes dos idiomas
- Persiste a escolha do usuário no localStorage
- Atualiza todo o conteúdo dinamicamente

### Idiomas Suportados
- 🇧🇷 **Português (PT)** - Idioma padrão
- 🇺🇸 **Inglês (EN)** - Tradução completa
- 🇫🇷 **Francês (FR)** - Tradução completa

## 🔧 Personalização de Traduções

### 1. Editar Traduções Existentes

Abra o arquivo `js/i18n.js` e localize a seção `translations`:

```javascript
translations: {
    pt: {
        // Traduções em português
    },
    en: {
        // Traduções em inglês
    },
    fr: {
        // Traduções em francês
    }
}
```

### 2. Personalizar Seu Nome

Para cada idioma, edite o campo `hero.title`:

```javascript
pt: {
    hero: {
        title: 'SEU NOME', // Seu nome em português
        // ...
    }
},
en: {
    hero: {
        title: 'YOUR NAME', // Seu nome em inglês
        // ...
    }
},
fr: {
    hero: {
        title: 'VOTRE NOM', // Seu nome em francês
        // ...
    }
}
```

### 3. Personalizar Descrições

Edite as descrições em cada idioma:

```javascript
pt: {
    hero: {
        description: 'Sua descrição personalizada em português...',
        // ...
    }
},
en: {
    hero: {
        description: 'Your personalized description in English...',
        // ...
    }
},
fr: {
    hero: {
        description: 'Votre description personnalisée en français...',
        // ...
    }
}
```

### 4. Personalizar Projetos

Para cada projeto, edite título, descrição e tecnologias:

```javascript
pt: {
    projects: {
        project1: {
            title: 'Nome do Seu Projeto',
            description: 'Descrição detalhada do seu projeto...',
            tech: ['React', 'Node.js', 'MongoDB']
        }
    }
},
en: {
    projects: {
        project1: {
            title: 'Your Project Name',
            description: 'Detailed description of your project...',
            tech: ['React', 'Node.js', 'MongoDB']
        }
    }
},
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

### 5. Personalizar Informações de Contato

```javascript
pt: {
    contact: {
        info: {
            locationValue: 'Sua Cidade, Brasil'
        }
    }
},
en: {
    contact: {
        info: {
            locationValue: 'Your City, Brazil'
        }
    }
},
fr: {
    contact: {
        info: {
            locationValue: 'Votre Ville, Brésil'
        }
    }
}
```

## ➕ Adicionando Novos Idiomas

### 1. Criar Nova Tradução

Adicione um novo objeto de tradução no arquivo `js/i18n.js`:

```javascript
translations: {
    pt: { /* português */ },
    en: { /* inglês */ },
    fr: { /* francês */ },
    es: { // Novo idioma: Espanhol
        meta: {
            title: 'Portfolio Cyberpunk - Desarrollador Front-End',
            description: 'Portfolio personal de desarrollador front-end con tema cyberpunk',
            keywords: 'front-end, desarrollador, cyberpunk, portfolio, desarrollo web'
        },
        nav: {
            home: 'Inicio',
            about: 'Acerca de',
            projects: 'Proyectos',
            skills: 'Habilidades',
            contact: 'Contacto'
        },
        hero: {
            title: 'TU NOMBRE',
            subtitle: [
                'Desarrollador Front-End',
                'Diseñador UI/UX',
                'Entusiasta de la Tecnología',
                'Creador de Experiencias Digitales'
            ],
            description: 'Transformando ideas en experiencias digitales inmersivas',
            buttons: {
                contact: 'Hablemos',
                download: 'Descargar CV'
            }
        },
        // ... continuar com todas as outras seções
    }
}
```

### 2. Adicionar ao Dropdown

No método `addLanguageToggle()`, adicione a nova opção:

```javascript
// No HTML do dropdown
<li><a class="dropdown-item" href="#" data-lang="es">
    <span class="flag-icon">🇪🇸</span> Español
</a></li>
```

### 3. Adicionar Nome do Idioma

No método `getLanguageName()`:

```javascript
getLanguageName(lang) {
    const names = {
        pt: 'PT',
        en: 'EN',
        fr: 'FR',
        es: 'ES' // Novo idioma
    };
    return names[lang] || 'PT';
}
```

## 🎨 Personalização Visual

### 1. Mudar Bandeiras

Substitua os emojis das bandeiras por ícones personalizados:

```html
<!-- Em vez de emoji -->
<span class="flag-icon">🇧🇷</span>

<!-- Use ícones FontAwesome -->
<i class="fas fa-flag"></i>
```

### 2. Estilizar Dropdown

Edite os estilos no arquivo `css/style.css`:

```css
.language-toggle .dropdown-menu {
    background: var(--bg-secondary);
    border: 1px solid var(--primary-color);
    box-shadow: var(--shadow-neon);
    min-width: 150px;
    /* Adicione mais estilos personalizados */
}

.language-toggle .dropdown-item {
    color: var(--text-secondary);
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: var(--transition-fast);
    /* Adicione mais estilos personalizados */
}
```

## 🔧 Configurações Avançadas

### 1. Idioma Padrão

Para mudar o idioma padrão, edite no arquivo `js/i18n.js`:

```javascript
init() {
    // Verificar idioma salvo
    const savedLang = localStorage.getItem('language') || 'en'; // Mudar de 'pt' para 'en'
    this.setLanguage(savedLang);
    // ...
}
```

### 2. Detectar Idioma do Navegador

Para detectar automaticamente o idioma do navegador:

```javascript
init() {
    // Detectar idioma do navegador
    const browserLang = navigator.language.split('-')[0];
    const supportedLangs = ['pt', 'en', 'fr'];
    const defaultLang = supportedLangs.includes(browserLang) ? browserLang : 'pt';
    
    // Verificar idioma salvo ou usar padrão
    const savedLang = localStorage.getItem('language') || defaultLang;
    this.setLanguage(savedLang);
    // ...
}
```

### 3. Animações de Transição

Para adicionar animações suaves na troca de idioma:

```javascript
setLanguage(lang) {
    // Adicionar classe de transição
    document.body.classList.add('changing');
    
    this.currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Atualizar conteúdo
    this.updateContent();
    
    // Remover classe após animação
    setTimeout(() => {
        document.body.classList.remove('changing');
    }, 300);
}
```

## 📱 Responsividade

O botão de idioma é totalmente responsivo:

- **Desktop**: Dropdown completo com bandeiras e nomes
- **Tablet**: Dropdown compacto
- **Mobile**: Dropdown otimizado para toque

## 🐛 Solução de Problemas

### Problema: Traduções não aparecem
**Solução**: Verifique se o arquivo `js/i18n.js` está sendo carregado corretamente

### Problema: Botão não funciona
**Solução**: Verifique se o Bootstrap está carregado para o dropdown

### Problema: Typed.js não atualiza
**Solução**: O sistema automaticamente recria a instância do Typed.js

### Problema: Conteúdo não persiste
**Solução**: Verifique se o localStorage está funcionando no navegador

## 📝 Exemplo Completo de Tradução

Aqui está um exemplo de como estruturar uma nova tradução:

```javascript
de: { // Alemão
    meta: {
        title: 'Cyberpunk Portfolio - Front-End Entwickler',
        description: 'Persönliches Portfolio eines Front-End Entwicklers mit Cyberpunk-Theme',
        keywords: 'front-end, entwickler, cyberpunk, portfolio, webentwicklung'
    },
    nav: {
        home: 'Startseite',
        about: 'Über mich',
        projects: 'Projekte',
        skills: 'Fähigkeiten',
        contact: 'Kontakt'
    },
    hero: {
        title: 'IHRE NAME',
        subtitle: [
            'Front-End Entwickler',
            'UI/UX Designer',
            'Technologie-Enthusiast',
            'Digitaler Erlebnisgestalter'
        ],
        description: 'Ideen in immersive digitale Erlebnisse verwandeln',
        buttons: {
            contact: 'Lass uns reden',
            download: 'CV herunterladen'
        }
    },
    // ... continuar com todas as seções
}
```

---

**🎉 Agora seu portfólio é verdadeiramente internacional!** 