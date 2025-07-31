# 🚀 Guia de Deploy na Vercel

## Pré-requisitos
- Conta na [Vercel](https://vercel.com)
- Projeto no GitHub/GitLab/Bitbucket

## Passos para Deploy

### 1. Preparação do Projeto
✅ Todos os arquivos estão configurados corretamente:
- `vercel.json` - Configuração otimizada
- `.vercelignore` - Arquivos ignorados
- `package.json` - Dependências e scripts

### 2. Deploy via Dashboard da Vercel

1. **Acesse [vercel.com](https://vercel.com)**
2. **Faça login** com sua conta
3. **Clique em "New Project"**
4. **Importe seu repositório** do GitHub/GitLab/Bitbucket
5. **Configure o projeto:**
   - **Framework Preset**: `Other`
   - **Root Directory**: `./` (deixe vazio)
   - **Build Command**: `npm run build` (ou deixe vazio)
   - **Output Directory**: `.` (deixe vazio)
   - **Install Command**: `npm install` (ou deixe vazio)

### 3. Deploy via CLI (Alternativo)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Para produção
vercel --prod
```

## Configurações Específicas

### Estrutura de Arquivos
```
/
├── index.html          # Página principal
├── css/               # Estilos
├── js/                # Scripts
├── assets/            # Recursos
├── vercel.json        # Configuração Vercel
├── .vercelignore      # Arquivos ignorados
└── package.json       # Dependências
```

### Problemas Comuns e Soluções

#### ❌ Erro 404 em rotas
**Solução**: O `vercel.json` já está configurado para redirecionar todas as rotas para `index.html`

#### ❌ Arquivos CSS/JS não carregam
**Solução**: Verifique se os caminhos estão corretos e se os arquivos existem

#### ❌ Imagens não aparecem
**Solução**: Substituímos as imagens por placeholders CSS para evitar erros 404

#### ❌ Erro de build
**Solução**: Este é um projeto estático, não precisa de build. Use preset "Other"

## Verificação Pós-Deploy

1. **Teste todas as seções** do portfólio
2. **Verifique responsividade** em diferentes dispositivos
3. **Teste navegação** e links
4. **Verifique animações** e interações
5. **Teste formulário de contato** (WhatsApp)

## Otimizações Implementadas

✅ **Configuração Vercel otimizada**
✅ **Headers de segurança**
✅ **Cache para assets estáticos**
✅ **Fallbacks para arquivos não encontrados**
✅ **Placeholders para imagens**
✅ **Arquivos desnecessários ignorados**

## Suporte

Se ainda houver problemas:
1. Verifique os logs no dashboard da Vercel
2. Teste localmente com `npm run dev`
3. Verifique se todos os arquivos estão no repositório
4. Consulte a [documentação da Vercel](https://vercel.com/docs) 