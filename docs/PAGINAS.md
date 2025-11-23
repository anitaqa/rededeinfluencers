# 📄 Descrição das Páginas

**Documentação detalhada de cada página HTML do projeto Rede de Influencers**

---

## 📑 Índice de Páginas

### 🏠 Pública
1. [index.html](#indexhtml) - Home pública

### 👔 Empresas
2. [empresas.html](#empresashtml) - DEMO + Planos
3. [checkout-empresa.html](#checkout-empresahtml) - Pagamento empresas
4. [buscar-influencers.html](#buscar-influencershtml) - Busca + Resultados (Plano Básico)
5. [criar-campanha.html](#criar-campanhahtml) - Criar campanhas (Plano Avançado)
6. [dashboard-empresa.html](#dashboard-empresahtml) - Dashboard empresas
7. [metricas-campanha.html](#metricas-campanhahtml) - Analytics

### ⭐ Influencers
8. [planos-influencer.html](#planos-influencerhtml) - Escolha de planos
9. [checkout-nano.html](#checkout-nanohtml) - Pagamento Nano
10. [checkout-micro.html](#checkout-microhtml) - Pagamento Micro
11. [checkout-macro.html](#checkout-macrohtml) - Pagamento Macro (legado)
12. [cadastro-influencer.html](#cadastro-influencerhtml) - Cadastro completo
13. [dashboard-influencer.html](#dashboard-influencerhtml) - Dashboard influencers
14. [pesquisa-sustentabilidade.html](#pesquisa-sustentabilidadehtml) - Pesquisa de impacto

### 🔐 Autenticação
15. [login.html](#loginhtml) - Login unificado
16. [confirmar-cadastro.html](#confirmar-cadastrohtml) - Confirmação de email

---

## 🏠 PÁGINAS PÚBLICAS

### index.html

**Tipo:** Landing Page Pública

**URL:** https://anitaqa.github.io/rededeinfluencers/

**Objetivo:** Apresentar a plataforma e converter visitantes em leads (DEMO) ou assinantes

#### Estrutura

```
┌─────────────────────────────────────┐
│ Header (sticky)                     │
│ - Logo                              │
│ - Menu: Para Empresas, Como         │
│   Funciona, Sustentabilidade,       │
│   Contato                           │
│ - CTAs: Entrar, Cadastrar           │
├─────────────────────────────────────┤
│ Hero Section                        │
│ - Título: "Conecte sua Marca aos    │
│   Melhores Influencers"             │
│ - Subtítulo explicativo             │
│ - CTAs: Buscar Influencers,         │
│   Cadastrar como Influencer         │
├─────────────────────────────────────┤
│ Stats Section                       │
│ - 1.2K+ Influencers                 │
│ - 350+ Empresas                     │
│ - 5.8M+ Alcance                     │
│ - 98% Satisfação                    │
├─────────────────────────────────────┤
│ Influencers em Destaque             │
│ - Filtros laterais (dropdowns)      │
│ - 3 cards de influencers            │
│ - Botão: Carregar Mais              │
├─────────────────────────────────────┤
│ Como Funciona (4 passos)            │
│ - Buscar, Negociar, Pagar, Avaliar  │
├─────────────────────────────────────┤
│ Sistema de Sustentabilidade         │
│ - 4 níveis com benefícios           │
│ - Impacto real (R$ 2.5M doados)     │
├─────────────────────────────────────┤
│ Pronto para Começar?                │
│ - CTAs: Cadastrar Empresa,          │
│   Cadastrar como Influencer         │
├─────────────────────────────────────┤
│ Footer                              │
│ - Copyright                         │
│ - Links de download (HTML/PDF)      │
└─────────────────────────────────────┘
```

#### Elementos Interativos

**1. Modal de Login**
- Trigger: Clicar "Entrar" no header
- Conteúdo: Escolha de perfil (Empresa ou Influencer)
- Ações:
  - "💼 Sou Empresa" → login.html
  - "⭐ Sou Influencer" → login.html
  - "← Voltar ao Home" → Fecha modal e recarrega página

**2. Filtros de Influencers**
- Categoria (dropdown): Moda, Beleza, Lifestyle, Alimentação, Zero Waste
- Porte (dropdown): Nano, Micro, Mid, Macro, Mega
- Avaliação (dropdown): 5★, 4+★, 3+★
- Sustentabilidade (dropdown): Embaixador, Ativista, Engajado, Consciente
- Localização (dropdown): SP, RJ, MG, PR

**3. Cards de Influencers**
- Nome, foto, nicho, localização
- Métricas: Seguidores, Engajamento, Posts, Ranking
- Botão: "Contratar Influencer" (redireciona para empresas.html)

#### Navegação

| Elemento | Destino | Tipo |
|----------|---------|------|
| Logo | Topo da página | Âncora |
| Para Empresas | empresas.html | Link |
| Como Funciona | #como-funciona | Âncora |
| Sustentabilidade | #sustentabilidade | Âncora |
| Contato | #contato | Âncora |
| Entrar | Modal de escolha | Modal |
| Cadastrar | planos-influencer.html | Link |
| Buscar Influencers | empresas.html | Link |
| Cadastrar como Influencer | planos-influencer.html | Link |
| Cadastrar Empresa | empresas.html | Link |

#### Responsividade

- **Mobile (< 768px):**
  - Menu hamburguer
  - Stats em 2 colunas
  - Cards de influencers em 1 coluna
  - Filtros em accordion

- **Tablet (768px - 1024px):**
  - Menu completo
  - Stats em 4 colunas
  - Cards em 2 colunas

- **Desktop (> 1024px):**
  - Layout completo
  - Filtros laterais fixos
  - Cards em 3 colunas

---

## 👔 PÁGINAS DE EMPRESAS

### empresas.html

**Tipo:** Landing Page + Formulário DEMO + Planos

**URL:** https://anitaqa.github.io/rededeinfluencers/empresas.html

**Objetivo:** Capturar lead (DEMO) e converter em assinante de plano

#### Estrutura

```
┌─────────────────────────────────────┐
│ Header + Menu                       │
│ - Botão Home (esquerda)             │
│ - Logo (centro)                     │
│ - Menu: Buscar Influencers, Criar   │
│   Campanha, Minhas Campanhas        │
├─────────────────────────────────────┤
│ Hero Section (#heroSection)         │
│ - Título: "Encontre os Influencers  │
│   Perfeitos para Sua Marca"         │
│ - Subtítulo                         │
│ - CTA: "Agendar uma DEMO Gratuita"  │
├─────────────────────────────────────┤
│ Planos (#plansSection)              │
│ - Card Plano Básico (R$ 299/mês)    │
│ - Card Plano Avançado (R$ 799/mês)  │
├─────────────────────────────────────┤
│ Quem Usa (#quemUsa)                 │
│ - 4 empresas clientes               │
│ - 2 depoimentos                     │
├─────────────────────────────────────┤
│ Influencers Sugeridos               │
│ - 8 cards de influencers            │
├─────────────────────────────────────┤
│ Formulário DEMO (oculto)            │
│ - 8 campos obrigatórios             │
│ - Validação inline                  │
└─────────────────────────────────────┘
```

#### Formulário DEMO

**Campos (8):**
1. Nome Completo
2. Email Comercial
3. Telefone
4. Nome da Empresa
5. Cargo
6. Tamanho da Empresa (dropdown)
   - 1-10 funcionários
   - 11-50 funcionários
   - 51-200 funcionários
   - 201-1000 funcionários
   - 1000+ funcionários
7. Orçamento Mensal para Influencers (dropdown)
   - Até R$ 5.000
   - R$ 5.000 - R$ 20.000
   - R$ 20.000 - R$ 50.000
   - R$ 50.000 - R$ 100.000
   - Acima de R$ 100.000
8. Objetivos da Campanha (textarea)

**Validações:**
- Nome: mínimo 3 caracteres
- Email: formato válido
- Telefone: formato (XX) XXXXX-XXXX
- Empresa: mínimo 2 caracteres
- Cargo: mínimo 2 caracteres
- Objetivos: mínimo 20 caracteres

**Fluxo:**
1. Usuário clica "Agendar uma DEMO Gratuita"
2. Formulário aparece (display: block)
3. Preenche 8 campos
4. Clica "Agendar DEMO"
5. Validação inline
6. Mensagem de sucesso
7. Formulário oculta
8. Scroll automático para #plansSection

#### Planos

**Plano Básico (R$ 299/mês):**
- Busca de influencers por nicho
- Filtros por alcance e orçamento
- ROI estimado por influencer
- Contratação direta
- Suporte por email

**Plano Avançado (R$ 799/mês):**
- Tudo do Plano Básico +
- Criar campanhas com briefing
- Convites automáticos
- Aprovação prévia de posts
- Monitoramento em tempo real
- Métricas e analytics
- Relatórios de performance
- Suporte 24/7

**CTAs:**
- "Contratar Plano Básico" → checkout-empresa.html?plano=basico
- "Contratar Plano Avançado" → checkout-empresa.html?plano=avancado

#### Seção Quem Usa

**Empresas:**
1. 🌿 EcoFashion Brasil
2. ♻️ GreenLife Cosméticos
3. 🌱 Sustenta Alimentos
4. 🌍 Planeta Consciente

**Depoimentos:**
1. **Maria Silva, CMO EcoFashion**
   > "Aumentamos nosso engajamento em 300% conectando-se com influencers realmente alinhados com nossos valores sustentáveis."

2. **João Santos, Diretor GreenLife**
   > "A plataforma nos ajudou a encontrar influencers autênticos que realmente fazem diferença nas nossas campanhas."

#### Menu de Navegação

| Botão | Comportamento |
|-------|---------------|
| **🏠 Home** | Redireciona para index.html |
| **🔍 Buscar Influencers** | Scroll suave para #plansSection |
| **🎯 Criar Campanha** | Alert "Recurso do Plano Avançado" + scroll para planos |
| **📊 Minhas Campanhas** | Alert "Recurso do Plano Avançado" + scroll para planos |

---

### checkout-empresa.html

**Tipo:** Formulário de Pagamento

**URL:** https://anitaqa.github.io/rededeinfluencers/checkout-empresa.html?plano=[basico|avancado]

**Objetivo:** Finalizar assinatura do plano escolhido

#### Parâmetros URL

- `?plano=basico` → Mostra Plano Básico (R$ 299/mês)
- `?plano=avancado` → Mostra Plano Avançado (R$ 799/mês)

#### Estrutura

```
┌─────────────────────────────────────┐
│ Header                              │
│ - Botão Home                        │
│ - Logo                              │
├─────────────────────────────────────┤
│ Resumo do Pedido (sidebar direita)  │
│ - Nome do Plano                     │
│ - Valor mensal                      │
│ - Total a pagar                     │
├─────────────────────────────────────┤
│ Formulário de Pagamento             │
│ - Seção 1: Dados da Empresa (4)     │
│ - Seção 2: Dados de Pagamento (4)   │
│ - Seção 3: Endereço (5)             │
│ - CTA: "Finalizar Pagamento"        │
└─────────────────────────────────────┘
```

#### Formulário (13 campos)

**Seção 1: Dados da Empresa**
1. Nome da Empresa
2. CNPJ (XX.XXX.XXX/XXXX-XX)
3. Email Corporativo
4. Telefone

**Seção 2: Dados de Pagamento**
5. Número do Cartão (XXXX XXXX XXXX XXXX)
6. Nome no Cartão
7. Validade (MM/AA)
8. CVV (XXX)

**Seção 3: Endereço de Cobrança**
9. CEP (XXXXX-XXX)
10. Endereço
11. Número
12. Cidade
13. Estado (dropdown com 27 UFs)

#### Validações

```javascript
// CNPJ: 14 dígitos
/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/

// Email: formato válido
/^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Cartão: 16 dígitos
/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/

// CVV: 3 dígitos
/^\d{3}$/

// CEP: 8 dígitos
/^\d{5}-\d{3}$/
```

#### Simulação de Pagamento

```javascript
// Ao clicar "Finalizar Pagamento"
function finalizarPagamento() {
  // 1. Validar todos os campos
  if (!validarFormulario()) {
    return;
  }
  
  // 2. Mostrar alert de sucesso
  alert('Pagamento Simulado com Sucesso!\nPlano [Básico/Avançado] ativado!');
  
  // 3. Aguardar 1.5 segundos
  setTimeout(() => {
    // 4. Redirecionar baseado no plano
    const plano = new URLSearchParams(window.location.search).get('plano');
    if (plano === 'basico') {
      window.location.href = 'buscar-influencers.html';
    } else {
      window.location.href = 'dashboard-empresa.html';
    }
  }, 1500);
}
```

---

### buscar-influencers.html

**Tipo:** Ferramenta de Busca + Resultados (Plano Básico)

**URL:** https://anitaqa.github.io/rededeinfluencers/buscar-influencers.html

**Objetivo:** Permitir busca e contratação direta de influencers

#### Estrutura

```
┌─────────────────────────────────────┐
│ Header + Menu                       │
├─────────────────────────────────────┤
│ Banner de Upgrade                   │
│ "Upgrade para Plano Avançado e      │
│ Monitore Online!"                   │
│ CTA: "Ver Plano Avançado"           │
├─────────────────────────────────────┤
│ Seção de Busca (#searchSection)     │
│ - Filtros (esquerda)                │
│   • Nicho                           │
│   • Alcance                         │
│   • Localização                     │
│   • Engajamento Mínimo              │
│ - Orçamento (direita)               │
│   • Orçamento Mínimo                │
│   • Orçamento Máximo                │
│   • Dica sobre ROI                  │
│ - CTAs:                             │
│   • Buscar Influencers (verde)      │
│   • Limpar Filtros (branco)         │
├─────────────────────────────────────┤
│ Resultados (#resultsSection)        │
│ - Resumo: "X influencers encontrados"│
│ - Filtros aplicados                 │
│ - 8 cards de influencers            │
│ - Botão: "Carregar Mais"            │
└─────────────────────────────────────┘
```

#### Filtros

| Filtro | Tipo | Opções |
|--------|------|--------|
| **Nicho** | Dropdown | Todos, Moda, Beleza, Lifestyle, Alimentação, Zero Waste |
| **Alcance** | Dropdown | Todos, Nano, Micro, Mid, Macro, Mega |
| **Localização** | Dropdown | Todos, SP, RJ, MG, PR |
| **Engajamento** | Dropdown | Todos, 5%+, 7%+, 9%+ |
| **Orçamento Mín** | Input | R$ (número) |
| **Orçamento Máx** | Input | R$ (número) |

#### Card de Influencer

```
┌─────────────────────────┐
│ [Foto]  Giovanna N.     │
│         📍 São Paulo    │
│                         │
│ Moda Sustentável        │
│ 🌟 Embaixador           │
│                         │
│ 146K    9.1%    987     │
│ Seguid. Engaj.  Posts   │
│                         │
│ ⭐⭐⭐⭐⭐ 100.0        │
│                         │
│ ROI Estimado:           │
│ R$ 4,50 para cada       │
│ R$ 1,00 investido       │
│                         │
│ Bio: Especialista em... │
│                         │
│ [Ver Perfil] [Contratar]│
└─────────────────────────┘
```

#### Fluxo de Busca

```javascript
// 1. Página carrega com busca visível, resultados ocultos
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('searchSection').style.display = 'block';
  document.getElementById('resultsSection').style.display = 'none';
});

// 2. Usuário preenche filtros e clica "Buscar"
document.getElementById('btnBuscar').addEventListener('click', () => {
  // Ocultar busca
  document.getElementById('searchSection').style.display = 'none';
  
  // Mostrar resultados
  document.getElementById('resultsSection').style.display = 'block';
  
  // Scroll para resultados
  document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth' });
});

// 3. Limpar filtros volta para busca
document.getElementById('btnLimpar').addEventListener('click', () => {
  // Resetar formulário
  document.getElementById('searchForm').reset();
  
  // Mostrar busca novamente
  document.getElementById('searchSection').style.display = 'block';
  document.getElementById('resultsSection').style.display = 'none';
});
```

#### Limitações do Plano Básico

**✅ Pode fazer:**
- Buscar influencers com filtros
- Ver métricas completas
- Ver ROI estimado
- Contratar diretamente

**❌ Não pode fazer:**
- Criar campanhas
- Aprovar posts antes da publicação
- Ver métricas em tempo real
- Gerar relatórios

---

### criar-campanha.html

**Tipo:** Formulário de Criação de Campanha (Plano Avançado)

**URL:** https://anitaqa.github.io/rededeinfluencers/criar-campanha.html

**Objetivo:** Criar campanha completa com briefing e seleção de influencers

#### Estrutura

```
┌─────────────────────────────────────┐
│ Header + Sidebar                    │
├─────────────────────────────────────┤
│ Título: "Criar Nova Campanha"       │
├─────────────────────────────────────┤
│ Seção 1: Informações Básicas        │
│ - Nome da Campanha                  │
│ - Objetivo                          │
│ - Orçamento Total                   │
│ - Data Início/Fim                   │
├─────────────────────────────────────┤
│ Seção 2: Briefing                   │
│ - Descrição                         │
│ - Mensagem Principal                │
│ - Hashtags Obrigatórias             │
│ - Diretrizes de Conteúdo            │
├─────────────────────────────────────┤
│ Seção 3: Seleção de Influencers     │
│ - Busca com filtros                 │
│ - Lista de influencers selecionados │
│ - Valor por influencer              │
├─────────────────────────────────────┤
│ Seção 4: Aprovação de Posts         │
│ - Exigir aprovação prévia (Sim/Não) │
│ - Prazo para aprovação (dias)       │
├─────────────────────────────────────┤
│ CTAs:                               │
│ - Salvar Rascunho                   │
│ - Enviar Convites                   │
└─────────────────────────────────────┘
```

#### Formulário (14 campos)

**Seção 1: Informações Básicas (4)**
1. Nome da Campanha
2. Objetivo (dropdown)
   - Awareness (Reconhecimento de Marca)
   - Conversão (Vendas)
   - Engajamento (Interação)
   - Lançamento de Produto
3. Orçamento Total (R$)
4. Período
   - Data de Início
   - Data de Fim

**Seção 2: Briefing (4)**
5. Descrição da Campanha (textarea, 500 caracteres)
6. Mensagem Principal (textarea, 200 caracteres)
7. Hashtags Obrigatórias (input, separadas por vírgula)
8. Diretrizes de Conteúdo (textarea)
   - Tom de voz
   - Elementos visuais
   - Restrições

**Seção 3: Seleção de Influencers (3)**
9. Buscar Influencers (campo de busca + filtros)
10. Influencers Selecionados (lista dinâmica)
11. Valor por Influencer (input por cada selecionado)

**Seção 4: Aprovação de Posts (2)**
12. Exigir Aprovação Prévia (radio: Sim/Não)
13. Prazo para Aprovação (number, em dias)

#### Validações

- Nome: mínimo 5 caracteres
- Orçamento: > 0
- Data Fim > Data Início
- Descrição: mínimo 50 caracteres
- Hashtags: pelo menos 1
- Influencers: pelo menos 1 selecionado
- Valor por influencer: > 0

#### Fluxo de Criação

```javascript
// 1. Preencher informações básicas
// 2. Escrever briefing completo
// 3. Buscar e selecionar influencers
//    - Clicar "Adicionar à Campanha"
//    - Definir valor para cada um
// 4. Configurar aprovação de posts
// 5. Opções:
//    - "Salvar Rascunho" → Salva sem enviar
//    - "Enviar Convites" → Envia para influencers

// Ao enviar convites
function enviarConvites() {
  // Validar formulário
  if (!validarCampanha()) return;
  
  // Confirmar envio
  if (confirm('Enviar convites para X influencers?')) {
    // Simular envio
    alert('Convites enviados com sucesso!');
    
    // Redirecionar para dashboard
    window.location.href = 'dashboard-empresa.html';
  }
}
```

---

### dashboard-empresa.html

**Tipo:** Dashboard Gerencial (Plano Avançado)

**URL:** https://anitaqa.github.io/rededeinfluencers/dashboard-empresa.html

**Objetivo:** Gerenciar campanhas, influencers e métricas

#### Estrutura

```
┌──────────┬──────────────────────────┐
│ Sidebar  │ Conteúdo Principal       │
│          │                          │
│ Logo     │ Título: "Dashboard"      │
│          │                          │
│ Menu:    │ Métricas Gerais (4 cards)│
│ • Dash   │ - Campanhas Ativas       │
│ • Camp.  │ - Influencers Contratados│
│ • Criar  │ - Alcance Total          │
│ • Influe.│ - Engajamento Médio      │
│ • Relat. │                          │
│ • Config │ Campanhas Recentes       │
│          │ - Tabela com 5 colunas   │
│ Perfil   │ - Ações: Ver, Editar,    │
│ Sair     │   Pausar, Excluir        │
│          │                          │
│          │ Gráfico: Engajamento     │
│          │ ao longo do tempo        │
└──────────┴──────────────────────────┘
```

#### Sidebar Menu

| Item | Ícone | Destino |
|------|-------|---------|
| Dashboard | 📊 | dashboard-empresa.html |
| Minhas Campanhas | 🎯 | #campanhas |
| Criar Campanha | ➕ | criar-campanha.html |
| Influencers | ⭐ | buscar-influencers.html |
| Relatórios | 📈 | #relatorios |
| Configurações | ⚙️ | #configuracoes |
| **Perfil** | 👤 | #perfil |
| **Sair** | 🚪 | index.html |

#### Métricas Gerais

```
┌──────────────────┬──────────────────┐
│ Campanhas Ativas │ Influencers      │
│                  │ Contratados      │
│      12          │      45          │
│                  │                  │
│ ↑ 3 este mês     │ ↑ 8 este mês     │
└──────────────────┴──────────────────┘
┌──────────────────┬──────────────────┐
│ Alcance Total    │ Engajamento      │
│                  │ Médio            │
│    2.8M          │     8.5%         │
│                  │                  │
│ ↑ 15% vs mês ant │ ↑ 1.2% vs mês ant│
└──────────────────┴──────────────────┘
```

#### Tabela de Campanhas

| Nome | Status | Influencers | Alcance | Engajamento | Ações |
|------|--------|-------------|---------|-------------|-------|
| Lançamento Primavera | 🟢 Ativa | 12 | 850K | 9.2% | Ver, Editar, Pausar |
| Black Friday 2025 | 🟡 Rascunho | 8 | - | - | Editar, Excluir |
| Natal Sustentável | 🔵 Agendada | 15 | - | - | Ver, Editar |
| Dia das Mães | 🔴 Finalizada | 10 | 1.2M | 8.7% | Ver Relatório |

**Status:**
- 🟢 Ativa: Campanha em execução
- 🟡 Rascunho: Não enviada ainda
- 🔵 Agendada: Aguardando data de início
- 🔴 Finalizada: Campanha encerrada

**Ações:**
- **Ver:** Abre metricas-campanha.html?id=X
- **Editar:** Abre criar-campanha.html?id=X (modo edição)
- **Pausar:** Pausa campanha ativa
- **Excluir:** Remove rascunho (confirmação obrigatória)

---

### metricas-campanha.html

**Tipo:** Analytics de Campanha (Plano Avançado)

**URL:** https://anitaqa.github.io/rededeinfluencers/metricas-campanha.html?id=X

**Objetivo:** Visualizar métricas detalhadas de uma campanha específica

#### Estrutura

```
┌──────────┬──────────────────────────┐
│ Sidebar  │ Título: "Lançamento      │
│          │ Primavera"               │
│          │ Status: 🟢 Ativa         │
│          │                          │
│          │ KPIs Principais (4)      │
│          │ - Alcance                │
│          │ - Engajamento            │
│          │ - Conversões             │
│          │ - ROI                    │
│          │                          │
│          │ Gráfico: Engajamento     │
│          │ ao longo do tempo        │
│          │                          │
│          │ Performance por          │
│          │ Influencer (tabela)      │
│          │                          │
│          │ Timeline de Posts        │
│          │ (cards cronológicos)     │
│          │                          │
│          │ CTAs:                    │
│          │ - Exportar Relatório     │
│          │ - Pausar Campanha        │
└──────────┴──────────────────────────┘
```

#### KPIs Principais

```
┌──────────────┬──────────────┬──────────────┬──────────────┐
│ Alcance      │ Engajamento  │ Conversões   │ ROI          │
│              │              │              │              │
│   850K       │    9.2%      │    1.2K      │   4.5x       │
│              │              │              │              │
│ 📈 +15%      │ 📈 +1.2%     │ 📈 +8%       │ 📈 +0.5x     │
│ vs objetivo  │ vs objetivo  │ vs objetivo  │ vs objetivo  │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

#### Gráfico de Engajamento

```
Engajamento ao Longo do Tempo
│
│     ╱╲
│    ╱  ╲    ╱╲
│   ╱    ╲  ╱  ╲
│  ╱      ╲╱    ╲___
│ ╱
└────────────────────────
  Sem1 Sem2 Sem3 Sem4
```

**Tipo:** Gráfico de linha

**Eixo X:** Semanas da campanha

**Eixo Y:** Taxa de engajamento (%)

**Dados:** Calculados a partir dos posts dos influencers

#### Performance por Influencer

| Influencer | Alcance | Engajamento | Posts | Conversões | ROI |
|------------|---------|-------------|-------|------------|-----|
| Giovanna N. | 146K | 9.1% | 3 | 180 | 5.2x |
| Cristal M. | 260K | 8.9% | 4 | 320 | 4.8x |
| Aline M. | 143K | 10.5% | 2 | 220 | 5.5x |
| **Total** | **850K** | **9.2%** | **12** | **1.2K** | **4.5x** |

**Ações por Influencer:**
- Ver perfil completo
- Ver posts da campanha
- Enviar mensagem

#### Timeline de Posts

```
┌─────────────────────────────────────┐
│ 📅 15/11/2025 - 14:30               │
│ Giovanna N.                         │
│ Instagram                           │
│                                     │
│ [Imagem do post]                    │
│                                     │
│ Caption: "Amando a nova coleção..." │
│                                     │
│ 👁️ 12.5K  ❤️ 1.2K  💬 89  ↗️ 45   │
│                                     │
│ Status: ✅ Aprovado                 │
└─────────────────────────────────────┘
```

**Informações por Post:**
- Data e hora da publicação
- Nome do influencer
- Rede social
- Imagem/vídeo
- Caption completa
- Métricas: Visualizações, Likes, Comentários, Compartilhamentos
- Status de aprovação

---

## ⭐ PÁGINAS DE INFLUENCERS

### planos-influencer.html

**Tipo:** Landing Page de Planos

**URL:** https://anitaqa.github.io/rededeinfluencers/planos-influencer.html

**Objetivo:** Converter influencer em assinante

#### Estrutura

```
┌─────────────────────────────────────┐
│ Header                              │
│ - Botão Home                        │
│ - Logo                              │
├─────────────────────────────────────┤
│ Hero Section                        │
│ - Título: "Escolha o Plano Ideal"   │
│ - Subtítulo                         │
├─────────────────────────────────────┤
│ Comparação de Planos (2 cards)      │
│ - Plano Nano (R$ 199/mês)           │
│ - Plano Micro (R$ 499/mês)          │
├─────────────────────────────────────┤
│ FAQ                                 │
│ - Perguntas frequentes              │
└─────────────────────────────────────┘
```

#### Planos

**Plano Nano - R$ 199/mês**

**Para quem:** Influencers de 1K a 10K seguidores

**Benefícios:**
- ✅ Perfil verificado na plataforma
- ✅ Receber propostas de empresas
- ✅ Dashboard de oportunidades
- ✅ Suporte por email

**CTA:** "Assinar Nano" → checkout-nano.html

---

**Plano Micro - R$ 499/mês**

**Para quem:** Influencers de 10K a 100K seguidores

**Badge:** "Mais Popular"

**Benefícios:**
- ✅ Tudo do Plano Nano +
- ✅ Destaque nos resultados de busca
- ✅ Analytics de performance
- ✅ Suporte prioritário
- ✅ Acesso antecipado a novas funcionalidades

**CTA:** "Assinar Micro" → checkout-micro.html

---

#### FAQ

**1. Como funciona o pagamento?**
> O pagamento é mensal e recorrente. Você pode cancelar a qualquer momento.

**2. Posso mudar de plano depois?**
> Sim! Você pode fazer upgrade ou downgrade a qualquer momento.

**3. Quanto tempo leva para aprovar meu perfil?**
> Após completar o cadastro, seu perfil é aprovado em até 24 horas.

**4. Como recebo os pagamentos das campanhas?**
> Os pagamentos são feitos diretamente pela plataforma via PIX ou transferência bancária.

---

### checkout-nano.html

**Tipo:** Formulário de Pagamento (Plano Nano)

**URL:** https://anitaqa.github.io/rededeinfluencers/checkout-nano.html

**Objetivo:** Finalizar assinatura do Plano Nano

#### Estrutura

```
┌─────────────────────────────────────┐
│ Header                              │
├─────────────────────────────────────┤
│ Resumo do Pedido (sidebar)          │
│ - Plano Nano                        │
│ - R$ 199/mês                        │
│ - Total: R$ 199                     │
├─────────────────────────────────────┤
│ Formulário (8 campos)               │
│ - Seção 1: Dados Pessoais (4)       │
│ - Seção 2: Dados de Pagamento (4)   │
│ - CTA: "Finalizar Pagamento"        │
└─────────────────────────────────────┘
```

#### Formulário (8 campos)

**Seção 1: Dados Pessoais**
1. Nome Completo
2. CPF (XXX.XXX.XXX-XX)
3. Email
4. Telefone

**Seção 2: Dados de Pagamento**
5. Número do Cartão
6. Nome no Cartão
7. Validade (MM/AA)
8. CVV

#### Simulação de Pagamento

```javascript
function finalizarPagamento() {
  // Validar campos
  if (!validar()) return;
  
  // Alert de sucesso
  alert('Pagamento Simulado com Sucesso!\nPlano Nano ativado!\nRedirecionando para completar seu cadastro...');
  
  // Aguardar 1.5s
  setTimeout(() => {
    window.location.href = 'cadastro-influencer.html';
  }, 1500);
}
```

---

### checkout-micro.html

**Tipo:** Formulário de Pagamento (Plano Micro)

**URL:** https://anitaqa.github.io/rededeinfluencers/checkout-micro.html

**Objetivo:** Finalizar assinatura do Plano Micro

**Estrutura:** Idêntica a checkout-nano.html

**Diferença:** Resumo do Pedido mostra "Plano Micro - R$ 499/mês"

---

### checkout-macro.html

**Tipo:** Formulário de Pagamento (Plano Macro) - **LEGADO**

**URL:** https://anitaqa.github.io/rededeinfluencers/checkout-macro.html

**Status:** Página legada, não mais utilizada

**Nota:** Este plano foi removido do gateway-pagamento.html. A página existe apenas para compatibilidade com links antigos.

---

### cadastro-influencer.html

**Tipo:** Formulário de Cadastro Completo

**URL:** https://anitaqa.github.io/rededeinfluencers/cadastro-influencer.html

**Objetivo:** Completar perfil do influencer após pagamento

#### Estrutura

```
┌─────────────────────────────────────┐
│ Header                              │
│ - Botão Home                        │
│ - Logo                              │
├─────────────────────────────────────┤
│ Progresso: ████░░░░ 50%             │
├─────────────────────────────────────┤
│ Título: "Complete Seu Perfil"       │
│ Subtítulo: "Passo 1 de 6"           │
├─────────────────────────────────────┤
│ Seção 1: Dados Pessoais (6)         │
│ Seção 2: Endereço (6)               │
│ Seção 3: Redes Sociais (4)          │
│ Seção 4: Info Profissionais (5)     │
│ Seção 5: Portfólio (4)              │
│ Seção 6: Sustentabilidade (3)       │
├─────────────────────────────────────┤
│ CTAs:                               │
│ - Voltar                            │
│ - Salvar Rascunho                   │
│ - Finalizar Cadastro                │
└─────────────────────────────────────┘
```

#### Formulário (28 campos)

**Seção 1: Dados Pessoais (6)**
1. Nome Completo
2. Data de Nascimento
3. Gênero (dropdown)
4. CPF
5. Telefone
6. Email

**Seção 2: Endereço (6)**
7. CEP
8. Endereço
9. Número
10. Complemento
11. Cidade
12. Estado (dropdown)

**Seção 3: Redes Sociais (4)**
13. Instagram (@username)
14. TikTok (@username)
15. YouTube (canal)
16. Twitter (@username)

**Seção 4: Informações Profissionais (5)**
17. Nicho Principal (dropdown)
    - Moda Sustentável
    - Beleza Natural
    - Lifestyle
    - Alimentação Saudável
    - Zero Waste
18. Nichos Secundários (multi-select)
19. Número de Seguidores (Instagram)
20. Taxa de Engajamento (%)
21. Valor Médio por Post (R$)

**Seção 5: Portfólio (4)**
22. Bio/Descrição (textarea, 500 caracteres)
23. Link do Portfólio
24. Marcas com quem já trabalhou (textarea)
25. Causas que apoia (textarea)

**Seção 6: Sustentabilidade (3)**
26. Ações Sustentáveis Realizadas (textarea)
27. Projetos Ambientais Apoiados (textarea)
28. Aceito participar de campanhas sustentáveis (checkbox)

#### Validações

- Nome: mínimo 3 caracteres
- CPF: 11 dígitos, válido
- Email: formato válido
- Instagram: @ obrigatório
- Seguidores: número positivo
- Engajamento: 0-100%
- Bio: mínimo 50 caracteres

#### Fluxo

```javascript
// 1. Preencher todas as seções
// 2. Validação em tempo real
// 3. Opções:
//    - "Salvar Rascunho" → Salva e permite continuar depois
//    - "Finalizar Cadastro" → Valida tudo e envia

function finalizarCadastro() {
  // Validar todos os campos
  if (!validarFormulario()) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }
  
  // Calcular nível de sustentabilidade
  const nivel = calcularNivelSustentabilidade();
  
  // Mensagem de sucesso
  alert(`Cadastro concluído com sucesso!\nSeu nível de sustentabilidade: ${nivel}\nRedirecionando para seu dashboard...`);
  
  // Redirecionar
  setTimeout(() => {
    window.location.href = 'dashboard-influencer.html';
  }, 2000);
}
```

---

### dashboard-influencer.html

**Tipo:** Dashboard Gerencial (Influencer)

**URL:** https://anitaqa.github.io/rededeinfluencers/dashboard-influencer.html

**Objetivo:** Gerenciar propostas, campanhas e perfil

#### Estrutura

```
┌──────────┬──────────────────────────┐
│ Sidebar  │ Conteúdo Principal       │
│          │                          │
│ Logo     │ Título: "Dashboard"      │
│          │                          │
│ Menu:    │ Métricas Gerais (4 cards)│
│ • Dash   │ - Propostas Recebidas    │
│ • Propos.│ - Campanhas Ativas       │
│ • Camp.  │ - Ganhos do Mês          │
│ • Histór.│ - Nível Sustentabilidade │
│ • Perfil │                          │
│ • Nível  │ Propostas Pendentes      │
│ • Config │ - Tabela com ações       │
│          │                          │
│ Perfil   │ Próximas Entregas        │
│ Sair     │ - Timeline de posts      │
└──────────┴──────────────────────────┘
```

#### Sidebar Menu

| Item | Ícone | Destino |
|------|-------|---------|
| Dashboard | 📊 | dashboard-influencer.html |
| Propostas Recebidas | 📨 | #propostas |
| Campanhas Ativas | 🎯 | #campanhas |
| Histórico | 📜 | #historico |
| Meu Perfil | 👤 | #perfil |
| Nível de Sustentabilidade | 🌱 | pesquisa-sustentabilidade.html |
| Configurações | ⚙️ | #configuracoes |
| **Sair** | 🚪 | index.html |

#### Métricas Gerais

```
┌──────────────────┬──────────────────┐
│ Propostas        │ Campanhas        │
│ Recebidas (mês)  │ Ativas           │
│                  │                  │
│       8          │       3          │
│                  │                  │
│ ↑ 2 vs mês ant   │ ↑ 1 vs mês ant   │
└──────────────────┴──────────────────┘
┌──────────────────┬──────────────────┐
│ Ganhos do Mês    │ Nível de         │
│                  │ Sustentabilidade │
│                  │                  │
│   R$ 3.500       │ 🌳 Ativista (68) │
│                  │                  │
│ ↑ R$ 500         │ +3 pontos        │
└──────────────────┴──────────────────┘
```

#### Tabela de Propostas

| Empresa | Campanha | Valor | Prazo | Status | Ações |
|---------|----------|-------|-------|--------|-------|
| EcoFashion | Lançamento Primavera | R$ 800 | 5 dias | ⏳ Pendente | Aceitar, Recusar, Negociar |
| GreenLife | Natal Sustentável | R$ 1.200 | 3 dias | ⏳ Pendente | Aceitar, Recusar, Negociar |
| Sustenta | Black Friday | R$ 600 | 7 dias | ⏳ Pendente | Aceitar, Recusar, Negociar |

**Ações:**
- **Aceitar:** Proposta vai para "Campanhas Ativas"
- **Recusar:** Proposta arquivada
- **Negociar:** Abre chat com empresa

#### Próximas Entregas

```
┌─────────────────────────────────────┐
│ 📅 20/11/2025                       │
│ Campanha: Lançamento Primavera      │
│ Empresa: EcoFashion                 │
│                                     │
│ Entrega: 1 post no Instagram        │
│ Hashtags: #EcoFashion #Primavera    │
│                                     │
│ Status: 🟡 Aguardando aprovação     │
│                                     │
│ [Enviar Post] [Ver Briefing]        │
└─────────────────────────────────────┘
```

---

### pesquisa-sustentabilidade.html

**Tipo:** Formulário de Pesquisa

**URL:** https://anitaqa.github.io/rededeinfluencers/pesquisa-sustentabilidade.html

**Objetivo:** Avaliar e atualizar nível de sustentabilidade do influencer

#### Estrutura

```
┌─────────────────────────────────────┐
│ Header + Sidebar                    │
├─────────────────────────────────────┤
│ Título: "Pesquisa de                │
│ Sustentabilidade"                   │
│                                     │
│ Seu Nível Atual: 🌳 Ativista (68)   │
├─────────────────────────────────────┤
│ Seção 1: Ações Sustentáveis (10)    │
│ - Checkboxes com pontuação          │
├─────────────────────────────────────┤
│ Seção 2: Conteúdo Educativo (5)     │
│ - Checkboxes com pontuação          │
├─────────────────────────────────────┤
│ Seção 3: Doações e Projetos (5)     │
│ - Checkboxes com pontuação          │
├─────────────────────────────────────┤
│ Total de Pontos: 68 / 100           │
│ Novo Nível: 🌳 Ativista             │
│                                     │
│ CTA: "Atualizar Nível"              │
└─────────────────────────────────────┘
```

#### Perguntas (20 itens)

**Seção 1: Ações Sustentáveis (10 pontos cada)**
- [ ] Uso produtos de beleza naturais/orgânicos
- [ ] Compro roupas de brechós ou marcas sustentáveis
- [ ] Pratico compostagem em casa
- [ ] Reduzi uso de plástico descartável
- [ ] Uso transporte sustentável (bike, transporte público)
- [ ] Tenho horta em casa
- [ ] Faço reciclagem correta
- [ ] Consumo produtos locais
- [ ] Evito fast fashion
- [ ] Uso energia renovável

**Seção 2: Conteúdo Educativo (5 pontos cada)**
- [ ] Publico sobre sustentabilidade semanalmente
- [ ] Compartilho dicas de consumo consciente
- [ ] Ensino sobre reciclagem
- [ ] Falo sobre mudanças climáticas
- [ ] Divulgo marcas sustentáveis

**Seção 3: Doações e Projetos (10 pontos cada)**
- [ ] Doei para projetos ambientais (últimos 6 meses)
- [ ] Participo de mutirões de limpeza
- [ ] Apoio ONGs ambientais
- [ ] Planto árvores regularmente
- [ ] Voluntário em projetos ecológicos

#### Cálculo de Pontos

```javascript
function calcularNivel(pontos) {
  if (pontos >= 76) return { nivel: '🌍 Embaixador', bonus: 25 };
  if (pontos >= 51) return { nivel: '🌳 Ativista', bonus: 15 };
  if (pontos >= 26) return { nivel: '🌿 Engajado', bonus: 10 };
  if (pontos >= 10) return { nivel: '🌱 Consciente', bonus: 5 };
  return { nivel: 'Sem Nível', bonus: 0 };
}
```

#### Fluxo

```javascript
// 1. Usuário marca checkboxes
// 2. Pontuação atualiza em tempo real
// 3. Nível é recalculado automaticamente
// 4. Clicar "Atualizar Nível"
// 5. Salvar no perfil
// 6. Mensagem de sucesso
// 7. Voltar para dashboard

function atualizarNivel() {
  const pontos = calcularPontos();
  const { nivel, bonus } = calcularNivel(pontos);
  
  alert(`Nível atualizado!\n${nivel}\n+${bonus} pontos no ranking`);
  
  // Salvar e voltar
  window.location.href = 'dashboard-influencer.html';
}
```

---

## 🔐 PÁGINAS DE AUTENTICAÇÃO

### login.html

**Tipo:** Formulário de Login

**URL:** https://anitaqa.github.io/rededeinfluencers/login.html

**Objetivo:** Autenticar usuário (empresa ou influencer)

#### Estrutura

```
┌─────────────────────────────────────┐
│ Logo (centro)                       │
├─────────────────────────────────────┤
│ Título: "Entrar"                    │
│ Subtítulo: "Acesse sua conta"       │
├─────────────────────────────────────┤
│ Formulário (2 campos)               │
│ - Email                             │
│ - Senha                             │
│ - Checkbox: "Lembrar-me"            │
│ - Link: "Esqueci minha senha"       │
├─────────────────────────────────────┤
│ CTA: "Entrar"                       │
├─────────────────────────────────────┤
│ Separador: "ou"                     │
├─────────────────────────────────────┤
│ Links:                              │
│ - "Não tem conta? Cadastre-se"      │
│   • Empresa → empresas.html         │
│   • Influencer → planos-influencer  │
└─────────────────────────────────────┘
```

#### Formulário (2 campos)

1. Email
2. Senha (type="password")

**Checkbox:** "Lembrar-me" (salva sessão)

**Link:** "Esqueci minha senha" (não implementado)

#### Simulação de Login

```javascript
function fazerLogin() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  
  // Validar campos
  if (!email || !senha) {
    alert('Preencha todos os campos');
    return;
  }
  
  // Simular autenticação
  // Em produção, faria requisição ao backend
  
  // Determinar tipo de usuário (simulado)
  const isEmpresa = email.includes('empresa') || email.includes('@');
  
  // Redirecionar
  if (isEmpresa) {
    window.location.href = 'dashboard-empresa.html';
  } else {
    window.location.href = 'dashboard-influencer.html';
  }
}
```

---

### confirmar-cadastro.html

**Tipo:** Página de Confirmação

**URL:** https://anitaqa.github.io/rededeinfluencers/confirmar-cadastro.html

**Objetivo:** Informar que email de confirmação foi enviado

#### Estrutura

```
┌─────────────────────────────────────┐
│ Logo (centro)                       │
├─────────────────────────────────────┤
│ Ícone: ✉️ (grande)                  │
├─────────────────────────────────────┤
│ Título: "Confirme seu Email"        │
│                                     │
│ Mensagem:                           │
│ "Enviamos um email de confirmação   │
│ para seu endereço. Clique no link   │
│ para ativar sua conta."             │
├─────────────────────────────────────┤
│ Dica:                               │
│ "Não recebeu? Verifique sua caixa   │
│ de spam ou solicite um novo email." │
├─────────────────────────────────────┤
│ CTAs:                               │
│ - "Reenviar Email"                  │
│ - "Voltar para Login"               │
└─────────────────────────────────────┘
```

#### Ações

**Reenviar Email:**
```javascript
function reenviarEmail() {
  // Simular reenvio
  alert('Email reenviado com sucesso!');
}
```

**Voltar para Login:**
```javascript
// Redireciona para login.html
window.location.href = 'login.html';
```

---

## 📊 Resumo de Páginas

### Por Categoria

| Categoria | Quantidade | Páginas |
|-----------|------------|---------|
| **Pública** | 1 | index.html |
| **Empresas** | 6 | empresas, checkout-empresa, buscar-influencers, criar-campanha, dashboard-empresa, metricas-campanha |
| **Influencers** | 8 | planos-influencer, checkout-nano/micro/macro, cadastro-influencer, dashboard-influencer, pesquisa-sustentabilidade |
| **Autenticação** | 2 | login, confirmar-cadastro |
| **TOTAL** | **17** | |

### Por Tipo

| Tipo | Quantidade | Exemplos |
|------|------------|----------|
| **Landing Page** | 3 | index, empresas, planos-influencer |
| **Formulário** | 6 | checkout-*, cadastro-influencer, criar-campanha |
| **Dashboard** | 2 | dashboard-empresa, dashboard-influencer |
| **Busca/Filtros** | 1 | buscar-influencers |
| **Analytics** | 1 | metricas-campanha |
| **Autenticação** | 2 | login, confirmar-cadastro |
| **Pesquisa** | 1 | pesquisa-sustentabilidade |

---

**Última atualização: Novembro 2025**

**Autor: Manus AI**
