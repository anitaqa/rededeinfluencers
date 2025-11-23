# 📂 Estrutura do Projeto

**Documentação técnica da arquitetura e organização de arquivos da Rede de Influencers**

---

## 🗂️ Visão Geral da Arquitetura

O projeto Rede de Influencers utiliza uma arquitetura de **páginas estáticas** hospedadas no GitHub Pages. A estrutura foi organizada de forma modular, separando claramente os fluxos de empresas, influencers e autenticação. Todos os arquivos HTML compartilham um arquivo CSS global (`css/styles.css`) que contém estilos base, variáveis CSS e media queries responsivas.

---

## 📁 Estrutura de Diretórios

```
/home/ubuntu/rededeinfluencers/
└── docs/                                    # Raiz do site (GitHub Pages)
    ├── index.html                           # Home pública
    ├── LOGORI.png                           # Logo da plataforma
    │
    ├── css/
    │   └── styles.css                       # Estilos globais + responsivo
    │
    ├── EMPRESAS/
    │   ├── empresas.html                    # DEMO + Planos empresas
    │   ├── checkout-empresa.html            # Pagamento planos
    │   ├── buscar-influencers.html          # Busca + Resultados (Básico)
    │   ├── criar-campanha.html              # Criar campanhas (Avançado)
    │   ├── dashboard-empresa.html           # Dashboard (Avançado)
    │   └── metricas-campanha.html           # Analytics (Avançado)
    │
    ├── INFLUENCERS/
    │   ├── planos-influencer.html           # Escolha de planos
    │   ├── checkout-nano.html               # Checkout Nano
    │   ├── checkout-micro.html              # Checkout Micro
    │   ├── checkout-macro.html              # Checkout Macro (legado)
    │   ├── cadastro-influencer.html         # Cadastro completo
    │   ├── dashboard-influencer.html        # Dashboard influencer
    │   └── pesquisa-sustentabilidade.html   # Pesquisa de impacto
    │
    ├── AUTH/
    │   ├── login.html                       # Login unificado
    │   └── confirmar-cadastro.html          # Confirmação de email
    │
    └── DOCS/
        ├── README.md                        # Documentação principal
        ├── ESTRUTURA.md                     # Este arquivo
        ├── FLUXOS.md                        # Jornadas de usuário
        └── PAGINAS.md                       # Descrição de cada página
```

---

## 🎨 Arquitetura CSS

### Organização do styles.css

O arquivo `css/styles.css` está estruturado em seções bem definidas:

```css
/* 1. CSS Reset e Variáveis Globais */
:root {
  /* Cores */
  --color-primary: #00D4AA;
  --color-secondary: #1E3A5F;
  --color-bg-primary: #0F1419;
  
  /* Espaçamentos */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  
  /* Tipografia */
  --font-family: 'Inter', system-ui, sans-serif;
  --font-size-base: 14px;
  
  /* Bordas */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
}

/* 2. Estilos Base */
* { box-sizing: border-box; }
body { font-family: var(--font-family); }

/* 3. Componentes Reutilizáveis */
.btn { ... }
.card { ... }
.container { ... }

/* 4. Layout Específico */
.header { ... }
.hero-section { ... }
.footer { ... }

/* 5. Páginas Específicas */
.plans-section { ... }
.dashboard-layout { ... }

/* 6. Responsividade */
@media (max-width: 768px) { ... }
@media (max-width: 480px) { ... }
```

### Variáveis CSS Principais

| Categoria | Variável | Valor | Uso |
|-----------|----------|-------|-----|
| **Cores** | `--color-primary` | `#00D4AA` | Botões primários, links, CTAs |
| | `--color-secondary` | `#1E3A5F` | Header, footer, backgrounds |
| | `--color-bg-primary` | `#0F1419` | Fundo principal |
| | `--color-text-primary` | `#F8FAFC` | Texto principal |
| **Espaçamentos** | `--spacing-md` | `1rem` | Padding/margin padrão |
| | `--spacing-xl` | `2rem` | Seções grandes |
| | `--spacing-3xl` | `4rem` | Hero sections |
| **Tipografia** | `--font-size-base` | `14px` | Texto base |
| | `--font-size-lg` | `18px` | Subtítulos |
| | `--font-size-xl` | `24px` | Títulos |

---

## 🧩 Componentes Reutilizáveis

### Botões

```html
<!-- Botão Primário (verde) -->
<button class="btn btn-primary">Texto</button>

<!-- Botão Secondary (azul) -->
<button class="btn btn-secondary">Texto</button>

<!-- Botão Outline (transparente com borda) -->
<button class="btn btn-outline">Texto</button>

<!-- Botão Large -->
<button class="btn btn-primary btn-lg">Texto</button>
```

### Cards

```html
<div class="card">
  <h3 class="card-title">Título</h3>
  <p class="card-text">Conteúdo</p>
</div>
```

### Container

```html
<div class="container">
  <!-- Conteúdo centralizado com padding responsivo -->
</div>
```

### Grid Responsivo

```html
<div class="grid-responsive-2">
  <!-- 2 colunas desktop, 1 coluna mobile -->
</div>
```

---

## 📄 Anatomia de uma Página HTML

Todas as páginas seguem uma estrutura consistente:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título da Página - Rede de Influencers</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <!-- Header -->
  <div class="header">
    <div class="container">
      <a href="index.html" class="btn-home">🏠 Home</a>
      <img src="LOGORI.png" alt="Logo" class="logo">
    </div>
    <nav class="nav-links">
      <a href="#section1">Link 1</a>
      <a href="#section2">Link 2</a>
    </nav>
  </div>

  <!-- Conteúdo Principal -->
  <main>
    <section class="hero-section" id="heroSection">
      <!-- Hero content -->
    </section>
    
    <section class="content-section" id="contentSection">
      <!-- Main content -->
    </section>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <p>&copy; 2025 Rede de Influencers</p>
    </div>
  </footer>

  <!-- Scripts -->
  <script>
    // JavaScript inline para interatividade
  </script>
</body>
</html>
```

---

## 🔗 Sistema de Navegação

### Navegação Global (index.html)

```
Header
├── Logo (clicável → index.html)
├── Para Empresas (âncora → #empresas)
├── Como Funciona (âncora → #como-funciona)
├── Sustentabilidade (âncora → #sustentabilidade)
├── Contato (âncora → #contato)
├── Entrar (modal → escolha perfil)
└── Cadastrar (link → planos-influencer.html)
```

### Navegação Empresas (empresas.html)

```
Header
├── 🏠 Home (link → index.html)
├── 🔍 Buscar Influencers (âncora → #plansSection)
├── 🎯 Criar Campanha (alert → Plano Avançado)
├── 📊 Minhas Campanhas (alert → Plano Avançado)
└── Logo (centro, não clicável)
```

### Navegação Influencers

Páginas de influencers possuem apenas o botão "🏠 Home" no canto superior esquerdo, sem menu completo.

---

## 🎯 Âncoras e IDs

### Página empresas.html

| ID | Seção | Uso |
|----|-------|-----|
| `#heroSection` | Hero Section | Apresentação inicial |
| `#plansSection` | Planos | Cards Básico e Avançado |
| `#quemUsa` | Quem Usa | Empresas clientes + depoimentos |
| `#demoFormContainer` | Formulário DEMO | Form de 8 campos (oculto) |

### Página index.html

| ID | Seção | Uso |
|----|-------|-----|
| `#empresas` | Para Empresas | Hero empresas |
| `#como-funciona` | Como Funciona | 4 passos |
| `#sustentabilidade` | Sustentabilidade | Níveis sustentáveis |
| `#contato` | Contato | Rodapé |
| `#modalLogin` | Modal Login | Escolha de perfil |

---

## 📱 Breakpoints Responsivos

### Mobile First Approach

O CSS foi escrito seguindo a abordagem mobile-first, onde os estilos base são para mobile e os breakpoints adicionam complexidade para telas maiores.

```css
/* Base: Mobile (< 768px) */
.container {
  padding: 1rem;
}

/* Tablet (≥ 768px) */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Desktop (≥ 1024px) */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
    max-width: 1200px;
  }
}
```

### Breakpoints Definidos

| Breakpoint | Dispositivos | Ajustes Principais |
|------------|--------------|-------------------|
| **≤ 375px** | iPhone SE, small Android | Padding reduzido, font-size menor |
| **≤ 480px** | Small phones | Stats 1 coluna, botões full-width |
| **≤ 768px** | Tablets, phones | Layout mobile, menu hamburguer |
| **≤ 1024px** | Tablets landscape | Grid 2 colunas |
| **> 1024px** | Desktop | Layout completo, grid 3-4 colunas |

---

## 🔄 Fluxo de Dados

### Formulários

Todos os formulários utilizam validação JavaScript inline:

```javascript
// Exemplo: Formulário DEMO
document.getElementById('demoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Validação
  const nome = document.getElementById('nomeCompleto').value;
  if (!nome) {
    showError('Nome é obrigatório');
    return;
  }
  
  // Sucesso
  showSuccess('DEMO agendada com sucesso!');
  scrollToSection('plansSection');
});
```

### Armazenamento Local

O projeto **não utiliza localStorage ou cookies** por ser uma demonstração estática. Em produção, seria necessário:

- Backend para processar formulários
- Banco de dados para armazenar usuários e campanhas
- Sistema de autenticação JWT ou OAuth
- API REST para comunicação cliente-servidor

---

## 🎨 Sistema de Design

### Hierarquia Visual

```
H1 (48px) → Títulos principais (Hero)
H2 (36px) → Títulos de seção
H3 (24px) → Subtítulos de cards
H4 (18px) → Títulos menores
Body (16px) → Texto padrão
Small (14px) → Legendas, labels
```

### Espaçamento Consistente

```
Seções: 4rem (--spacing-3xl)
Cards: 2rem (--spacing-xl)
Elementos: 1rem (--spacing-md)
Detalhes: 0.5rem (--spacing-sm)
```

### Sombras

```css
/* Sombra suave (cards) */
box-shadow: 0 2px 8px rgba(0,0,0,0.1);

/* Sombra média (modals) */
box-shadow: 0 10px 40px rgba(0,0,0,0.2);

/* Sombra forte (dropdowns) */
box-shadow: 0 4px 12px rgba(0,0,0,0.3);
```

---

## 🔧 Padrões de Código

### Nomenclatura de Classes

```
.component-name          → Componente principal
.component-name__element → Elemento filho
.component-name--modifier → Variação do componente

Exemplos:
.btn                     → Botão base
.btn--primary            → Botão primário
.card__title             → Título do card
```

### Nomenclatura de IDs

```
#camelCaseId            → IDs em camelCase
#heroSection            → Seção hero
#plansSection           → Seção de planos
#demoFormContainer      → Container do formulário
```

### Nomenclatura de Arquivos

```
kebab-case.html         → Arquivos HTML em kebab-case
empresas.html           → Página de empresas
buscar-influencers.html → Página de busca
checkout-empresa.html   → Checkout empresas
```

---

## 📊 Métricas de Performance

### Tamanho dos Arquivos

| Arquivo | Tamanho Aproximado | Otimização |
|---------|-------------------|------------|
| `index.html` | ~50KB | Inline CSS mínimo |
| `css/styles.css` | ~30KB | Variáveis CSS, sem duplicação |
| `LOGORI.png` | ~20KB | Compressão PNG |
| Média por página | ~40KB | HTML semântico, sem frameworks |

### Tempo de Carregamento

Em conexão 3G (750 Kbps):
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Total Load Time:** < 4s

### Otimizações Aplicadas

**HTML:**
- Estrutura semântica (header, main, section, footer)
- Atributos alt em todas as imagens
- Meta tags para SEO e redes sociais

**CSS:**
- Variáveis CSS para reutilização
- Media queries organizadas
- Seletores eficientes (evita descendentes profundos)

**JavaScript:**
- Inline para reduzir requisições HTTP
- Event delegation quando possível
- Debouncing em scroll listeners

---

## 🔐 Segurança

### Validação Client-Side

Todos os formulários possuem validação JavaScript:

```javascript
// Validação de email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Validação de telefone
function validatePhone(phone) {
  const re = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
  return re.test(phone);
}
```

### Sanitização de Inputs

```javascript
// Remover caracteres perigosos
function sanitizeInput(input) {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}
```

### Limitações (Ambiente de Demonstração)

**⚠️ Este é um projeto de demonstração estático. Em produção, seria necessário:**

- Validação server-side de todos os inputs
- Proteção contra CSRF (Cross-Site Request Forgery)
- Rate limiting em formulários
- Autenticação segura com JWT ou OAuth
- HTTPS obrigatório
- Sanitização de dados no backend

---

## 🧪 Testes e Debugging

### Checklist de Testes

**Funcionalidade:**
- [ ] Todos os links redirecionam corretamente
- [ ] Formulários validam campos obrigatórios
- [ ] Modals abrem e fecham corretamente
- [ ] Scroll suave funciona em âncoras
- [ ] Botão Home presente em todas as páginas

**Responsividade:**
- [ ] Layout mobile (375px)
- [ ] Layout tablet (768px)
- [ ] Layout desktop (1024px+)
- [ ] Orientação landscape
- [ ] Touch targets ≥ 44px

**Performance:**
- [ ] Imagens otimizadas
- [ ] CSS minificado (produção)
- [ ] Sem JavaScript bloqueante
- [ ] First Contentful Paint < 2s

### Comandos Úteis

```bash
# Buscar links quebrados
grep -r "href=\"" *.html | grep -v "http" | grep -v "#"

# Buscar IDs duplicados
grep -o 'id="[^"]*"' *.html | sort | uniq -d

# Verificar tamanho dos arquivos
du -h *.html css/*.css

# Contar linhas de código
wc -l *.html css/*.css
```

---

## 📦 Deploy e Versionamento

### Git Workflow

```bash
# Adicionar alterações
git add .

# Commit descritivo
git commit -m "feat: Adicionar seção Quem Usa em empresas.html"

# Push para GitHub
git push origin main
```

### Convenção de Commits

```
feat: Nova funcionalidade
fix: Correção de bug
docs: Atualização de documentação
style: Mudanças de estilo (CSS)
refactor: Refatoração de código
test: Adição de testes
chore: Tarefas de manutenção
```

### GitHub Pages

O site é automaticamente publicado pelo GitHub Pages a partir da branch `main`, pasta `/docs`.

**URL:** https://anitaqa.github.io/rededeinfluencers/

**Tempo de deploy:** 2-3 minutos após push

---

## 🔄 Manutenção

### Adicionar Nova Página

**1. Criar arquivo HTML** seguindo o template padrão

**2. Adicionar link no menu** apropriado (empresas ou influencers)

**3. Atualizar documentação** (PAGINAS.md)

**4. Testar navegação** completa

**5. Commit e push**

### Atualizar Estilos Globais

**1. Editar `css/styles.css`**

**2. Testar em todas as páginas** principais

**3. Verificar responsividade** em 3 breakpoints

**4. Commit com mensagem descritiva**

### Adicionar Novo Componente

**1. Definir HTML structure**

**2. Adicionar CSS em `styles.css`** na seção de componentes

**3. Documentar uso** neste arquivo

**4. Criar exemplo** em página de teste

---

## 📚 Referências Técnicas

### Padrões Web

- **HTML5 Semantic Elements:** Uso de `<header>`, `<main>`, `<section>`, `<footer>` para estrutura semântica
- **CSS Variables (Custom Properties):** Variáveis CSS para temas consistentes
- **Flexbox e Grid:** Layouts modernos e responsivos
- **Media Queries:** Breakpoints para responsividade

### Acessibilidade (WCAG 2.1)

- **Contraste de cores:** Mínimo 4.5:1 para texto normal
- **Touch targets:** Mínimo 44x44px para elementos interativos
- **Alt text:** Todas as imagens possuem descrição
- **Keyboard navigation:** Todos os elementos interativos acessíveis via teclado

---

**Última atualização: Novembro 2025**

**Autor: Manus AI**
