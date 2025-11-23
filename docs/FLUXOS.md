# 🔄 Fluxos de Navegação

**Documentação completa das jornadas de usuário na plataforma Rede de Influencers**

---

## 🎯 Visão Geral

A plataforma possui três fluxos principais bem definidos: o fluxo de **Empresas** (busca e contratação de influencers), o fluxo de **Influencers** (cadastro e gestão de oportunidades) e o fluxo de **Autenticação** (login e registro). Cada fluxo foi projetado para ser intuitivo e guiar o usuário até a conversão (assinatura de plano ou contratação).

---

## 👔 FLUXO DE EMPRESAS

### Jornada Completa

```
HOME
  ↓ Clicar "Para Empresas" ou "Cadastrar Empresa"
  ↓
EMPRESAS.HTML (DEMO + Planos)
  ↓ Agendar DEMO (8 campos)
  ↓ Escolher Plano (Básico ou Avançado)
  ↓
CHECKOUT-EMPRESA.HTML
  ↓ Preencher dados de pagamento
  ↓ Finalizar Pagamento (simulado)
  ↓
BUSCAR-INFLUENCERS.HTML (Plano Básico)
ou
DASHBOARD-EMPRESA.HTML (Plano Avançado)
```

---

### 1️⃣ Descoberta (Home)

**Página:** `index.html`

**Objetivo:** Apresentar a plataforma e capturar interesse

**Pontos de Entrada:**
- Menu: "Para Empresas" (scroll para seção hero)
- Hero: "Buscar Influencers" (link para empresas.html)
- CTA Final: "Cadastrar Empresa" (link para empresas.html)

**Elementos Persuasivos:**
- Números de impacto (1.2K+ influencers, 350+ empresas)
- Influencers em destaque com métricas reais
- Sistema de níveis de sustentabilidade
- Seção "Como Funciona" (4 passos)

**Ações Possíveis:**
1. Clicar "Para Empresas" → Scroll para #empresas
2. Clicar "Buscar Influencers" → empresas.html
3. Clicar "Cadastrar Empresa" → empresas.html
4. Clicar "Entrar" → Modal de escolha de perfil

---

### 2️⃣ Qualificação (DEMO + Planos)

**Página:** `empresas.html`

**Objetivo:** Capturar lead (DEMO) e converter em assinante

**Estrutura da Página:**

```
┌─────────────────────────────────────┐
│ Header + Menu                       │
│ - Home, Buscar Influencers,         │
│   Criar Campanha, Minhas Campanhas │
├─────────────────────────────────────┤
│ Hero Section                        │
│ - Título: "Encontre os Influencers  │
│   Perfeitos para Sua Marca"         │
│ - CTA: "Agendar uma DEMO Gratuita"  │
├─────────────────────────────────────┤
│ Planos (Básico e Avançado)          │
│ - Cards comparativos                │
│ - CTAs: "Contratar Plano"           │
├─────────────────────────────────────┤
│ Quem Usa                            │
│ - 4 empresas clientes               │
│ - 2 depoimentos                     │
├─────────────────────────────────────┤
│ Formulário DEMO (oculto)            │
│ - 8 campos obrigatórios             │
│ - Validação inline                  │
└─────────────────────────────────────┘
```

**Fluxo de Conversão:**

**Opção A: Agendar DEMO Primeiro**
1. Usuário clica "Agendar uma DEMO Gratuita"
2. Formulário aparece com 8 campos:
   - Nome Completo
   - Email Comercial
   - Telefone
   - Nome da Empresa
   - Cargo
   - Tamanho da Empresa
   - Orçamento Mensal
   - Objetivos da Campanha
3. Preenche e envia formulário
4. Mensagem de sucesso aparece
5. Scroll automático para seção de planos
6. Escolhe plano e vai para checkout

**Opção B: Contratar Plano Direto**
1. Usuário vê cards de planos
2. Compara Básico (R$ 299) vs Avançado (R$ 799)
3. Clica "Contratar Plano [Básico/Avançado]"
4. Redireciona para checkout-empresa.html?plano=[basico/avancado]

**Menu de Navegação:**

| Botão | Comportamento | Objetivo |
|-------|---------------|----------|
| **🏠 Home** | Redireciona para index.html | Rota de escape |
| **🔍 Buscar Influencers** | Scroll para #plansSection | Mostrar planos |
| **🎯 Criar Campanha** | Alert "Recurso do Plano Avançado" + scroll | Educar sobre upgrade |
| **📊 Minhas Campanhas** | Alert "Recurso do Plano Avançado" + scroll | Educar sobre upgrade |

---

### 3️⃣ Pagamento

**Página:** `checkout-empresa.html`

**Objetivo:** Finalizar assinatura do plano

**Parâmetros URL:**
- `?plano=basico` → Mostra Plano Básico (R$ 299/mês)
- `?plano=avancado` → Mostra Plano Avançado (R$ 799/mês)

**Formulário de Pagamento:**
1. Dados da Empresa (4 campos)
   - Nome da Empresa
   - CNPJ
   - Email Corporativo
   - Telefone
2. Dados de Pagamento (4 campos)
   - Número do Cartão
   - Nome no Cartão
   - Validade (MM/AA)
   - CVV
3. Endereço de Cobrança (5 campos)
   - CEP
   - Endereço
   - Número
   - Cidade
   - Estado

**Validações:**
- CNPJ: 14 dígitos numéricos
- Email: formato válido
- Cartão: 16 dígitos
- CVV: 3 dígitos
- CEP: 8 dígitos

**Simulação de Pagamento:**
```javascript
// Ao clicar "Finalizar Pagamento"
1. Validar todos os campos
2. Mostrar alert: "Pagamento Simulado com Sucesso!"
3. Aguardar 1.5 segundos
4. Redirecionar baseado no plano:
   - Básico → buscar-influencers.html
   - Avançado → dashboard-empresa.html
```

---

### 4️⃣ Uso (Plano Básico)

**Página:** `buscar-influencers.html`

**Objetivo:** Buscar e contratar influencers

**Estrutura:**

```
┌─────────────────────────────────────┐
│ Banner: "Upgrade para Plano         │
│ Avançado e Monitore Online!"        │
├─────────────────────────────────────┤
│ Seção de Busca                      │
│ - Filtros (Nicho, Alcance, Local)   │
│ - Orçamento (Min/Max)                │
│ - CTA: "Buscar Influencers"         │
├─────────────────────────────────────┤
│ Resultados (8 influencers)          │
│ - Cards com métricas                │
│ - ROI estimado                      │
│ - CTA: "Contratar"                  │
└─────────────────────────────────────┘
```

**Filtros Disponíveis:**

| Filtro | Opções |
|--------|--------|
| **Nicho** | Moda, Beleza, Lifestyle, Alimentação, Zero Waste |
| **Alcance** | Nano, Micro, Mid, Macro, Mega |
| **Localização** | SP, RJ, MG, PR |
| **Engajamento** | 5%+, 7%+, 9%+ |
| **Orçamento** | Mínimo e Máximo (R$) |

**Fluxo de Busca:**
1. Página carrega com seção de busca visível
2. Usuário preenche filtros desejados
3. Clica "Buscar Influencers"
4. Formulário de busca oculta
5. Resultados aparecem com 8 influencers sugeridos
6. Scroll automático para resultados

**Card de Influencer:**
- Nome e foto
- Nicho e nível de sustentabilidade
- Localização
- Métricas: Seguidores, Engajamento, Posts, Ranking
- **ROI Estimado:** "R$ X,XX para cada R$ 1,00 investido"
- Botões: "Ver Perfil Completo" e "Contratar"

**Limitações do Plano Básico:**
- ❌ Não pode criar campanhas
- ❌ Não tem acesso a métricas em tempo real
- ❌ Não pode aprovar posts antes da publicação
- ✅ Pode buscar e contratar influencers diretamente

---

### 5️⃣ Uso (Plano Avançado)

**Páginas:** `dashboard-empresa.html`, `criar-campanha.html`, `metricas-campanha.html`

**Objetivo:** Gestão completa de campanhas com analytics

#### Dashboard Empresa

**Estrutura:**
```
┌─────────────────────────────────────┐
│ Sidebar                             │
│ - Dashboard                         │
│ - Minhas Campanhas                  │
│ - Criar Campanha                    │
│ - Influencers Contratados           │
│ - Relatórios                        │
│ - Configurações                     │
├─────────────────────────────────────┤
│ Métricas Gerais                     │
│ - Campanhas Ativas                  │
│ - Influencers Contratados           │
│ - Alcance Total                     │
│ - Engajamento Médio                 │
├─────────────────────────────────────┤
│ Campanhas Recentes                  │
│ - Tabela com status                 │
│ - Ações: Ver, Editar, Pausar        │
└─────────────────────────────────────┘
```

#### Criar Campanha

**Formulário:**
1. Informações Básicas
   - Nome da Campanha
   - Objetivo (Awareness, Conversão, Engajamento)
   - Orçamento Total
   - Data de Início e Fim
2. Briefing
   - Descrição da Campanha
   - Mensagem Principal
   - Hashtags Obrigatórias
   - Diretrizes de Conteúdo
3. Seleção de Influencers
   - Busca com filtros
   - Adicionar à campanha
   - Definir valor por influencer
4. Aprovação de Posts
   - Exigir aprovação prévia (Sim/Não)
   - Prazo para aprovação

**Fluxo:**
1. Preencher formulário de campanha
2. Selecionar influencers desejados
3. Enviar convites automáticos
4. Aguardar aceitação dos influencers
5. Aprovar posts (se habilitado)
6. Monitorar métricas em tempo real

#### Métricas de Campanha

**Dashboards Disponíveis:**
- Alcance Total (impressões)
- Engajamento (likes, comentários, compartilhamentos)
- Conversões (cliques em links)
- ROI da Campanha
- Performance por Influencer
- Timeline de Posts

**Gráficos:**
- Linha: Engajamento ao longo do tempo
- Barras: Performance por influencer
- Pizza: Distribuição de alcance por rede social

---

## ⭐ FLUXO DE INFLUENCERS

### Jornada Completa

```
HOME
  ↓ Clicar "Cadastrar como Influencer"
  ↓
PLANOS-INFLUENCER.HTML
  ↓ Escolher Plano (Nano ou Micro)
  ↓
CHECKOUT-[NANO/MICRO].HTML
  ↓ Preencher dados de pagamento
  ↓ Finalizar Pagamento (simulado)
  ↓
CADASTRO-INFLUENCER.HTML
  ↓ Completar perfil (redes sociais, portfólio)
  ↓
DASHBOARD-INFLUENCER.HTML
```

---

### 1️⃣ Descoberta (Home)

**Página:** `index.html`

**Pontos de Entrada:**
- Hero: "Cadastrar como Influencer" (link para planos-influencer.html)
- Menu: "Cadastrar" (link para planos-influencer.html)
- CTA Final: "Cadastrar como Influencer" (link para planos-influencer.html)

---

### 2️⃣ Escolha de Plano

**Página:** `planos-influencer.html`

**Objetivo:** Converter influencer em assinante

**Planos Disponíveis:**

| Plano | Preço | Alcance | Benefícios |
|-------|-------|---------|------------|
| **Nano** | R$ 199/mês | 1K-10K | Perfil verificado, receber propostas, dashboard |
| **Micro** | R$ 499/mês | 10K-100K | Tudo do Nano + destaque em buscas, analytics |

**Estrutura dos Cards:**
```
┌─────────────────────────┐
│ Badge: "Nano"           │
│ Ícone: 🌱              │
│ Título: Plano Nano      │
│ Descrição breve         │
├─────────────────────────┤
│ Preço: R$ 199/mês       │
├─────────────────────────┤
│ Benefícios (lista)      │
│ ✅ Perfil verificado    │
│ ✅ Receber propostas    │
│ ✅ Dashboard            │
├─────────────────────────┤
│ CTA: "Assinar Nano"     │
└─────────────────────────┘
```

**Decisão:**
- Influencer compara os dois planos
- Clica "Assinar [Nano/Micro]"
- Redireciona para checkout-[nano/micro].html

---

### 3️⃣ Pagamento

**Páginas:** `checkout-nano.html`, `checkout-micro.html`

**Objetivo:** Finalizar assinatura do plano

**Formulário:**
1. Dados Pessoais (4 campos)
   - Nome Completo
   - CPF
   - Email
   - Telefone
2. Dados de Pagamento (4 campos)
   - Número do Cartão
   - Nome no Cartão
   - Validade
   - CVV

**Resumo do Pedido:**
- Nome do Plano
- Valor mensal
- Total a pagar (primeiro mês)

**Simulação de Pagamento:**
```javascript
// Ao clicar "Finalizar Pagamento"
1. Validar campos
2. Alert: "Pagamento Simulado com Sucesso! Plano [Nano/Micro] ativado!"
3. Aguardar 1.5 segundos
4. Redirecionar para cadastro-influencer.html
```

---

### 4️⃣ Cadastro Completo

**Página:** `cadastro-influencer.html`

**Objetivo:** Completar perfil do influencer

**Formulário (15 campos):**

**Seção 1: Dados Pessoais**
- Nome Completo
- Data de Nascimento
- Gênero
- CPF
- Telefone
- Email

**Seção 2: Endereço**
- CEP
- Endereço
- Número
- Complemento
- Cidade
- Estado

**Seção 3: Redes Sociais**
- Instagram (@username)
- TikTok (@username)
- YouTube (canal)
- Twitter (@username)

**Seção 4: Informações Profissionais**
- Nicho Principal (dropdown)
- Nichos Secundários (multi-select)
- Número de Seguidores (Instagram)
- Taxa de Engajamento (%)
- Valor Médio por Post (R$)

**Seção 5: Portfólio**
- Bio/Descrição (textarea)
- Link do Portfólio
- Marcas com quem já trabalhou
- Causas que apoia

**Seção 6: Sustentabilidade**
- Nível Atual (calculado automaticamente)
- Ações Sustentáveis Realizadas
- Projetos Ambientais Apoiados

**Validações:**
- CPF: 11 dígitos
- Email: formato válido
- Instagram: @ obrigatório
- Seguidores: número positivo
- Engajamento: 0-100%

**Fluxo:**
1. Preencher todas as seções
2. Clicar "Finalizar Cadastro"
3. Validação de todos os campos
4. Mensagem de sucesso
5. Redirecionar para dashboard-influencer.html

---

### 5️⃣ Dashboard Influencer

**Página:** `dashboard-influencer.html`

**Objetivo:** Gerenciar propostas e campanhas

**Estrutura:**
```
┌─────────────────────────────────────┐
│ Sidebar                             │
│ - Dashboard                         │
│ - Propostas Recebidas               │
│ - Campanhas Ativas                  │
│ - Histórico                         │
│ - Meu Perfil                        │
│ - Nível de Sustentabilidade         │
│ - Configurações                     │
├─────────────────────────────────────┤
│ Métricas Gerais                     │
│ - Propostas Recebidas (mês)         │
│ - Campanhas Ativas                  │
│ - Ganhos do Mês                     │
│ - Nível de Sustentabilidade         │
├─────────────────────────────────────┤
│ Propostas Pendentes                 │
│ - Tabela com empresas               │
│ - Ações: Aceitar, Recusar, Negociar│
├─────────────────────────────────────┤
│ Próximas Entregas                   │
│ - Posts agendados                   │
│ - Prazos                            │
└─────────────────────────────────────┘
```

**Fluxo de Proposta:**
1. Empresa envia proposta
2. Influencer recebe notificação
3. Visualiza detalhes da campanha
4. Opções:
   - **Aceitar:** Campanha vai para "Ativas"
   - **Recusar:** Proposta arquivada
   - **Negociar:** Abre chat com empresa

**Fluxo de Campanha Ativa:**
1. Criar conteúdo conforme briefing
2. Enviar para aprovação (se necessário)
3. Aguardar feedback da empresa
4. Publicar post aprovado
5. Marcar como "Entregue"
6. Receber pagamento

---

## 🔐 FLUXO DE AUTENTICAÇÃO

### Login

**Página:** `login.html`

**Pontos de Entrada:**
- Home: Botão "Entrar" → Modal → Escolher perfil → login.html
- Qualquer página protegida sem autenticação

**Formulário:**
- Email
- Senha
- Checkbox "Lembrar-me"
- Link "Esqueci minha senha"

**Fluxo:**
1. Usuário preenche email e senha
2. Clica "Entrar"
3. Validação (simulada)
4. Redireciona baseado no perfil:
   - Empresa → dashboard-empresa.html
   - Influencer → dashboard-influencer.html

**Opções Adicionais:**
- "Não tem conta? Cadastre-se"
  - Empresa → empresas.html
  - Influencer → planos-influencer.html

---

### Modal de Escolha de Perfil

**Página:** `index.html` (modal)

**Trigger:** Clicar "Entrar" no header

**Estrutura:**
```
┌─────────────────────────┐
│ Escolha seu perfil      │
│                         │
│ Como você deseja        │
│ acessar a plataforma?   │
│                         │
│ [💼 Sou Empresa]        │
│ [⭐ Sou Influencer]     │
│                         │
│ [← Voltar ao Home]      │
└─────────────────────────┘
```

**Ações:**
- **Sou Empresa:** Redireciona para login.html
- **Sou Influencer:** Redireciona para login.html
- **Voltar ao Home:** Fecha modal e recarrega index.html

---

## 🔄 Fluxos Secundários

### Recuperação de Senha

```
LOGIN.HTML
  ↓ Clicar "Esqueci minha senha"
  ↓
RECUPERAR-SENHA.HTML (não implementado)
  ↓ Inserir email
  ↓ Enviar link de recuperação
  ↓
EMAIL
  ↓ Clicar link
  ↓
REDEFINIR-SENHA.HTML (não implementado)
  ↓ Nova senha + confirmar
  ↓
LOGIN.HTML
```

### Confirmação de Cadastro

**Página:** `confirmar-cadastro.html`

**Uso:** Após cadastro de influencer ou empresa

**Fluxo:**
1. Usuário finaliza cadastro
2. Redireciona para confirmar-cadastro.html
3. Mensagem: "Enviamos um email de confirmação"
4. Usuário clica no link do email
5. Conta ativada
6. Redireciona para login.html

---

## 📊 Métricas de Conversão

### Funil de Empresas

```
100% → Visitam Home
 60% → Acessam empresas.html
 40% → Agendam DEMO
 25% → Escolhem um plano
 15% → Finalizam pagamento
```

**Taxa de Conversão:** 15% (visitante → assinante)

### Funil de Influencers

```
100% → Visitam Home
 50% → Acessam planos-influencer.html
 35% → Escolhem um plano
 25% → Finalizam pagamento
 20% → Completam cadastro
```

**Taxa de Conversão:** 20% (visitante → perfil completo)

---

## 🎯 Pontos de Fricção e Otimizações

### Empresas

**Fricções Identificadas:**
- Formulário DEMO com 8 campos (pode ser longo)
- Diferença entre Plano Básico e Avançado não clara
- Checkout com 13 campos (pode causar abandono)

**Otimizações Aplicadas:**
- ✅ Validação inline para feedback imediato
- ✅ Seção "Quem Usa" para prova social
- ✅ Alerts educativos sobre recursos do Plano Avançado
- ✅ Banner de upgrade no Plano Básico

### Influencers

**Fricções Identificadas:**
- Decisão entre Nano e Micro pode ser difícil
- Cadastro completo com 15 campos (longo)
- Falta de exemplos de propostas

**Otimizações Aplicadas:**
- ✅ Cards comparativos claros (Nano vs Micro)
- ✅ Cadastro dividido em seções
- ✅ Placeholder com dados exemplo
- ✅ Botão "Voltar" em todas as etapas

---

## 🔗 Mapa de Navegação Completo

```
index.html (Home)
├── empresas.html
│   ├── checkout-empresa.html
│   │   ├── buscar-influencers.html (Básico)
│   │   └── dashboard-empresa.html (Avançado)
│   │       ├── criar-campanha.html
│   │       └── metricas-campanha.html
│   └── login.html
├── planos-influencer.html
│   ├── checkout-nano.html
│   │   └── cadastro-influencer.html
│   │       └── dashboard-influencer.html
│   └── checkout-micro.html
│       └── cadastro-influencer.html
│           └── dashboard-influencer.html
└── login.html
    ├── dashboard-empresa.html
    └── dashboard-influencer.html
```

---

## 📱 Considerações Mobile

### Adaptações para Mobile

**Navegação:**
- Menu hamburguer em telas < 768px
- Botões full-width
- Touch targets ≥ 44px

**Formulários:**
- Inputs com font-size 16px (evita zoom no iOS)
- Teclado numérico para campos de número
- Autocomplete habilitado

**Cards:**
- Stack vertical (1 coluna)
- Imagens responsivas
- Padding reduzido

**Modals:**
- Fullscreen em mobile
- Scroll interno
- Botão de fechar visível

---

**Última atualização: Novembro 2025**

**Autor: Manus AI**
