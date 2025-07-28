# Migração para Bootstrap 5 - Documentação

## 📋 Resumo das Mudanças

Este projeto foi migrado para usar **Bootstrap 5** como framework principal para responsividade e layout, mantendo o CSS personalizado apenas para cores, efeitos visuais e animações.

## 🔄 O que foi alterado

### 1. CSS Personalizado (`css/style.css`)

#### Removido:
- **Sistemas de grid customizados**: Substituídos pelo sistema de grid do Bootstrap
- **Media queries complexas**: Simplificadas usando classes do Bootstrap
- **Layout responsivo customizado**: Agora usa classes como `container`, `row`, `col-*`
- **Flexbox customizado**: Substituído pelas classes utilitárias do Bootstrap

#### Mantido:
- **Cores e variáveis CSS**: Sistema de cores cyberpunk
- **Efeitos hover**: Animações e transições
- **Efeitos visuais**: Glitch, neon glow, sombras
- **Animações**: Keyframes e transições personalizadas
- **Tipografia**: Fontes e estilos de texto

### 2. HTML (`index.html`)

#### Adicionado:
- **Classes Bootstrap**: `container`, `row`, `col-*`, `btn`, `form-control`, etc.
- **Componentes Bootstrap**: Navbar, carousel, forms
- **Utilitários Bootstrap**: `text-center`, `align-items-center`, `g-4`, etc.

#### Mantido:
- **Estrutura semântica**: Seções e elementos HTML
- **IDs e classes personalizadas**: Para seletores CSS
- **Atributos data-***: Para funcionalidades JavaScript

## 🎯 Benefícios da Migração

### 1. **Responsividade Melhorada**
- Sistema de grid robusto e testado
- Breakpoints consistentes
- Componentes responsivos nativos

### 2. **Manutenibilidade**
- Menos código CSS customizado
- Padrões estabelecidos
- Documentação extensa

### 3. **Performance**
- CSS otimizado pelo Bootstrap
- Menos regras CSS customizadas
- Carregamento mais eficiente

### 4. **Consistência**
- Padrões de design uniformes
- Componentes padronizados
- Comportamento previsível

## 📱 Sistema de Grid Bootstrap

### Breakpoints
```css
/* Extra small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { ... }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { ... }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { ... }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { ... }

/* Extra extra large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) { ... }
```

### Classes de Grid
```html
<!-- Container -->
<div class="container">     <!-- Largura fixa com margens -->
<div class="container-fluid"> <!-- Largura total -->

<!-- Linhas -->
<div class="row">

<!-- Colunas -->
<div class="col">           <!-- Coluna automática -->
<div class="col-12">        <!-- 12 colunas (largura total) -->
<div class="col-md-6">      <!-- 6 colunas em telas médias+ -->
<div class="col-lg-4">      <!-- 4 colunas em telas grandes+ -->
<div class="col-xl-3">      <!-- 3 colunas em telas extra grandes+ -->
```

## 🎨 Classes Utilitárias Utilizadas

### Layout
- `container`, `container-fluid`
- `row`, `col-*`
- `d-flex`, `d-block`, `d-none`
- `justify-content-*`, `align-items-*`

### Espaçamento
- `p-*`, `m-*` (padding e margin)
- `g-*` (gap entre colunas)
- `py-*`, `px-*`, `my-*`, `mx-*`

### Texto
- `text-center`, `text-start`, `text-end`
- `text-primary`, `text-secondary`
- `fw-*` (font-weight)

### Posicionamento
- `position-relative`, `position-absolute`
- `top-0`, `bottom-0`, `start-0`, `end-0`

## 🔧 Componentes Bootstrap Utilizados

### 1. **Navbar**
```html
<nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
        <a class="navbar-brand">...</a>
        <button class="navbar-toggler">...</button>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">...</ul>
        </div>
    </div>
</nav>
```

### 2. **Carousel**
```html
<div id="projectsCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">...</div>
    <div class="carousel-inner">...</div>
    <button class="carousel-control-prev">...</button>
    <button class="carousel-control-next">...</button>
</div>
```

### 3. **Forms**
```html
<form>
    <div class="row g-3">
        <div class="col-md-6">
            <input type="text" class="form-control" placeholder="...">
        </div>
    </div>
</form>
```

### 4. **Buttons**
```html
<a href="#" class="btn btn-primary btn-lg">Botão Primário</a>
<a href="#" class="btn btn-outline-primary btn-lg">Botão Outline</a>
```

## 🎨 Personalização de Cores

### Sobrescrevendo Cores Bootstrap
```css
/* Sobrescrever cores do Bootstrap com as cores cyberpunk */
.bg-primary {
    background-color: var(--primary-color) !important;
}

.bg-secondary {
    background-color: var(--bg-secondary) !important;
}

.text-primary {
    color: var(--primary-color) !important;
}

.text-secondary {
    color: var(--text-secondary) !important;
}

.border-primary {
    border-color: var(--primary-color) !important;
}
```

## 📱 Responsividade Mantida

### Mobile First
- Design otimizado para dispositivos móveis
- Classes responsivas (`col-md-*`, `col-lg-*`)
- Componentes que se adaptam automaticamente

### Breakpoints Consistentes
- `sm`: ≥576px (phones landscape)
- `md`: ≥768px (tablets)
- `lg`: ≥992px (desktops)
- `xl`: ≥1200px (large desktops)
- `xxl`: ≥1400px (extra large desktops)

## 🚀 Como Usar

### 1. **Estrutura Básica**
```html
<div class="container">
    <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
            <!-- Conteúdo -->
        </div>
    </div>
</div>
```

### 2. **Responsividade**
```html
<!-- 1 coluna em mobile, 2 em tablet, 3 em desktop -->
<div class="col-12 col-md-6 col-lg-4">
```

### 3. **Espaçamento**
```html
<!-- Gap de 4 unidades entre colunas -->
<div class="row g-4">
    <div class="col-md-6">...</div>
    <div class="col-md-6">...</div>
</div>
```

### 4. **Alinhamento**
```html
<!-- Centralizar verticalmente e horizontalmente -->
<div class="row align-items-center justify-content-center">
    <div class="col-md-8 text-center">
        <!-- Conteúdo centralizado -->
    </div>
</div>
```

## 🔍 Verificação da Migração

### Checklist
- [x] Bootstrap 5 incluído no HTML
- [x] Classes Bootstrap aplicadas corretamente
- [x] CSS customizado removido (layout/responsividade)
- [x] Cores e efeitos mantidos
- [x] Responsividade testada
- [x] Componentes funcionando

### Testes Recomendados
1. **Mobile**: < 576px
2. **Tablet**: 768px - 991px
3. **Desktop**: > 992px
4. **Navegação**: Menu hambúrguer
5. **Carrossel**: Controles e indicadores
6. **Formulário**: Validação e responsividade

## 📚 Recursos Adicionais

### Documentação Bootstrap
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [Grid System](https://getbootstrap.com/docs/5.3/layout/grid/)
- [Components](https://getbootstrap.com/docs/5.3/components/)
- [Utilities](https://getbootstrap.com/docs/5.3/utilities/)

### Ferramentas Úteis
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Bootstrap Themes](https://themes.getbootstrap.com/)
- [Bootstrap Examples](https://getbootstrap.com/docs/5.3/examples/)

---

**Migração concluída com sucesso!** 🎉

O projeto agora usa Bootstrap 5 para responsividade e layout, mantendo a identidade visual cyberpunk através do CSS personalizado. 