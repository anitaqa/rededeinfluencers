# Guia de Acesso aos Mockups - Rede de Influencers

## Links Diretos para Acesso

### 1. Página Principal (Home)
**URL:** https://anitaqa.github.io/rededeinfluencers/

**O que tem:**
- Vitrine de influencers
- Busca e filtros
- Estatísticas da plataforma
- Seção de sustentabilidade
- Como funciona

---

### 2. Página de Login
**URL:** https://anitaqa.github.io/rededeinfluencers/login.html

**O que tem:**
- Formulário de login (email + senha)
- Opção "Lembrar de mim"
- Recuperação de senha
- Login social (Google, Facebook, Instagram)
- Link para cadastro
- Tema escuro
- Responsivo iOS

**Como testar:**
- Digite qualquer email válido
- Digite uma senha com 6+ caracteres
- Clique em "Entrar"
- Verá mensagem de sucesso simulada

---

### 3. Página de Cadastro de Influencer
**URL:** https://anitaqa.github.io/rededeinfluencers/cadastro-influencer.html

**O que tem:**
- Formulário completo de cadastro
- Dados pessoais (nome, email, telefone, CPF, estado, cidade)
- Redes sociais (Instagram, TikTok, YouTube, Twitter)
- Informações profissionais (categoria, bio, seguidores, engajamento)
- Compromisso com sustentabilidade
- Valores de trabalho
- Máscaras automáticas (telefone, CPF, dinheiro)
- Validações em tempo real
- Tema escuro
- Responsivo iOS

**Como testar:**
- Preencha todos os campos obrigatórios (marcados com *)
- Adicione pelo menos 1 rede social
- Escreva uma bio com 100+ caracteres
- Aceite os termos
- Clique em "Finalizar Cadastro"

---

## Passo a Passo para Acessar no Celular iOS

### Opção 1: Acesso Direto (Mais Rápido)

1. **Abra o Safari** no seu iPhone/iPad

2. **Digite ou cole a URL** que deseja acessar:
   - Home: `https://anitaqa.github.io/rededeinfluencers/`
   - Login: `https://anitaqa.github.io/rededeinfluencers/login.html`
   - Cadastro: `https://anitaqa.github.io/rededeinfluencers/cadastro-influencer.html`

3. **Aguarde carregar** (2-5 segundos)

4. **Teste a responsividade:**
   - Gire o celular (portrait/landscape)
   - Teste os formulários
   - Verifique se está tudo legível

---

### Opção 2: Criar Atalho na Tela Inicial (Recomendado)

1. **Abra o Safari** e acesse uma das URLs acima

2. **Toque no ícone de compartilhar** (quadrado com seta para cima) na parte inferior

3. **Role para baixo** e toque em **"Adicionar à Tela de Início"**

4. **Edite o nome** (ex: "Rede Influencers")

5. **Toque em "Adicionar"**

6. **Pronto!** Agora você tem um atalho na tela inicial como se fosse um app

---

### Opção 3: Enviar por WhatsApp/Email

1. **Copie o link** que deseja compartilhar

2. **Envie para você mesmo** via WhatsApp ou Email

3. **Abra no celular** e clique no link

4. **O Safari abrirá automaticamente**

---

## Solução de Problemas

### Se a página não carregar:

**1. Limpe o cache do Safari:**
   - Vá em Ajustes > Safari
   - Role para baixo
   - Toque em "Limpar Histórico e Dados de Sites"
   - Confirme

**2. Tente no modo privado:**
   - Abra o Safari
   - Toque no ícone de abas (canto inferior direito)
   - Toque em "Privado"
   - Toque em "+"
   - Digite a URL

**3. Adicione versão na URL:**
   - Adicione `?v=1` no final da URL
   - Exemplo: `https://anitaqa.github.io/rededeinfluencers/login.html?v=1`
   - Isso força o navegador a buscar a versão mais recente

**4. Aguarde alguns minutos:**
   - O GitHub Pages pode levar 2-5 minutos para atualizar
   - Tente novamente em 5 minutos

**5. Verifique sua conexão:**
   - Certifique-se de estar conectado à internet
   - Tente alternar entre Wi-Fi e 4G/5G

---

## Características do Tema Escuro

**Cores principais:**
- Fundo: #1a2332 (azul escuro da logo)
- Cards: #273142 (azul médio)
- Primary: #00D4AA (verde turquesa)
- Secondary: #0EA5E9 (azul)
- Textos: #F8FAFC (branco suave)

**Vantagens:**
- Menos cansativo para os olhos
- Economiza bateria (telas OLED)
- Aparência moderna e profissional
- Alto contraste para melhor legibilidade

---

## Características da Responsividade iOS

**Otimizações específicas:**
- Viewport configurado para evitar zoom
- Font-size 16px nos inputs (evita zoom automático)
- Suporte para -webkit-fill-available
- Touch targets mínimos de 44x44px
- Botões com feedback visual ao toque
- Máscaras de input funcionando perfeitamente
- Teclado numérico para campos de número/telefone

**Testado em:**
- iPhone 14 Pro Max
- iPhone 13
- iPhone SE
- iPad Pro
- iPad Air

---

## Funcionalidades Implementadas

### Página de Login:
- ✅ Formulário de login funcional
- ✅ Toggle para mostrar/ocultar senha
- ✅ Checkbox "Lembrar de mim"
- ✅ Link "Esqueci a senha"
- ✅ Login social (Google, Facebook, Instagram)
- ✅ Validação de campos
- ✅ Mensagens de erro/sucesso
- ✅ Link para cadastro
- ✅ Link para voltar à home

### Página de Cadastro:
- ✅ Formulário completo (30+ campos)
- ✅ Máscaras automáticas (telefone, CPF, dinheiro)
- ✅ Validação em tempo real
- ✅ Pelo menos 1 rede social obrigatória
- ✅ Bio mínima de 100 caracteres
- ✅ Seleção de categoria
- ✅ Níveis de sustentabilidade
- ✅ Valores de trabalho
- ✅ Termos e condições
- ✅ Newsletter opt-in
- ✅ Mensagens de sucesso/erro

---

## Próximos Passos

**Para testar completamente:**

1. ✅ Acesse a home no celular
2. ✅ Clique em "Entrar" ou "Cadastrar"
3. ✅ Teste o formulário de login
4. ✅ Teste o formulário de cadastro
5. ✅ Gire o celular para testar landscape
6. ✅ Teste todos os campos e validações
7. ✅ Verifique se as máscaras funcionam
8. ✅ Teste os botões de redes sociais

**Para desenvolvimento futuro:**

- [ ] Integrar com backend real
- [ ] Implementar autenticação OAuth
- [ ] Conectar com banco de dados
- [ ] Adicionar dashboard do influencer
- [ ] Criar página de propostas
- [ ] Implementar sistema de pagamento
- [ ] Adicionar chat entre empresa e influencer

---

## Suporte

**Problemas ou dúvidas?**

1. Verifique se seguiu todos os passos acima
2. Tente limpar o cache do navegador
3. Aguarde 5 minutos e tente novamente
4. Teste em outro navegador (Chrome, Firefox)
5. Teste em outro dispositivo

**Repositório GitHub:**
https://github.com/anitaqa/rededeinfluencers

**Todas as páginas estão na pasta `docs/`:**
- index.html (home)
- login.html (login)
- cadastro-influencer.html (cadastro)

---

## Resumo dos Links

| Página | URL | Status |
|--------|-----|--------|
| Home | https://anitaqa.github.io/rededeinfluencers/ | ✅ Online |
| Login | https://anitaqa.github.io/rededeinfluencers/login.html | ✅ Online |
| Cadastro | https://anitaqa.github.io/rededeinfluencers/cadastro-influencer.html | ✅ Online |

**Última atualização:** Novembro 2025

---

**Aproveite os mockups!** 🚀
