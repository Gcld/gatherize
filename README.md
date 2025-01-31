# Gatherize - Plataforma de Gerenciamento de Eventos

Gatherize é uma sofisticada plataforma de gerenciamento de eventos que permite aos usuários criar, gerenciar e participar de diversos eventos. Construída com tecnologias web modernas, oferece uma experiência perfeita tanto para organizadores de eventos quanto para participantes.

## Índice

- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Começar](#como-começar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Rotas da API](#rotas-da-api)
- [Autenticação](#autenticação)
- [Funcionalidades Adicionais](#funcionalidades-adicionais)
- [Usuários pré-definidos](#usuários-pré-definidos)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Funcionalidades

### Gerenciamento de Eventos
- Listar eventos com paginação (8 itens por página no máximo)
- Filtrar eventos por nome, data ou localização
- Visualizar eventos inscritos
- Compartilhar eventos em redes sociais ou convidar via e-mail
- Criar novos eventos (para administradores)
- Visualizar detalhes do evento
- Inscrever-se/cancelar inscrição em eventos
- Editar e excluir eventos (para administradores)

### Gerenciamento de Usuários
- Registro de usuário com seleção de função (Criador de Eventos ou Usuário Comum)
- Login de usuário
- Visualizar perfil de usuário

### Painel do Criador de Eventos
- Visualizar lista de participantes do evento
- Baixar lista de participantes em formato CSV ou PDF
- Visualizar métricas do evento (participantes, compartilhamentos, pontuação de engajamento, etc.)

## Tecnologias Utilizadas

- Next.js
- TypeScript
- Styled Components
- React Icons
- NextAuth.js para autenticação
- Implementação de API local
- Axios para requisições HTTP

## Como Começar

1. Clone o repositório

2. Instale as dependências:
npm install


3. Configure as variáveis de ambiente:
- Crie um arquivo `.env` na raiz do projeto
- Adicione a seguinte linha ao arquivo:
NEXTAUTH_SECRET=[string aleatória]


4. Execute o servidor de desenvolvimento:
npm run dev


5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador


## Estrutura do Projeto

- `/app`: Páginas do roteador de aplicativos Next.js
- `/components`: Componentes React reutilizáveis
- `/contexts`: Provedores de contexto React
- `/data`: Dados simulados para eventos e usuários
- `/hooks`: Hooks personalizados do React
- `/lib`: Configuração de autenticação
- `/providers`: Provedores React para gerenciamento de estado global
- `/service`: Configuração de serviços, como instância do Axios
- `/types`: Definições de tipos TypeScript
- `/utils`: Funções utilitárias e chamadas de API

## Rotas da API

- `/api/auth`: Endpoints de autenticação
- `/api/event`: Operações CRUD de eventos
- `/api/event/[id]/share`: Compartilhar evento
- `/api/event/[id]/subscribe`: Inscrever-se/cancelar inscrição em evento
- `/api/participants`: Buscar participantes do evento

## Autenticação

Este projeto usa NextAuth.js para autenticação. Os usuários podem se cadastrar, fazer login e ter diferentes funções (admin/usuário).

## Funcionalidades Adicionais

Além dos requisitos básicos, o Gatherize implementa as seguintes funcionalidades avançadas:

### Infraestrutura e Performance

1. API Local Personalizada
 - Sistema completo de CRUD para eventos
 - Endpoints otimizados para autenticação
 - Rotas específicas para gerenciamento de inscrições
 - Simulação de banco de dados em memória

2. Integração com Serviços Externos
 - API ViaCEP para autopreenchimento inteligente de endereços
 - Sistema de compartilhamento em redes sociais

3. Otimização de Performance
 - Hook personalizado `useWindowSize` para responsividade dinâmica
 - Sistema de paginação eficiente (8 itens por página)
 - Lazy loading de componentes pesados
 - Caching de dados de eventos

### Experiência do Usuário

4. Sistema de Notificações
 - Toasts informativos para ações do usuário
 - Feedback visual para operações de CRUD
 - Mensagens de erro personalizadas
 - Confirmações de ações importantes

5. Interface Responsiva
 - Menu burger adaptativo para mobile
 - Layout fluido para diferentes tamanhos de tela
 - Modais responsivos para criação/edição
 - Componentes adaptáveis para desktop/mobile

6. Gerenciamento de Eventos
 - Sistema avançado de ordenação
 - Filtros múltiplos e combináveis
 - Opção de limpar filtros
 - Tratamento especial para eventos passados/lotados

### Analytics e Métricas

7. Dashboard Detalhado
 - Taxa de Inscrição Diária
   * Cálculo baseado em períodos ativos
   * Tendências de crescimento
   * Previsões de lotação

 - Métricas de Ocupação
   * Porcentagem atual de ocupação
   * Alertas de lotação próxima
   * Histórico de inscrições

 - Engajamento
   * Score calculado por algoritmo próprio
   * Fatores: compartilhamentos, inscrições, tempo
   * Níveis: baixo, médio, alto
   * Indicadores visuais de performance

 - Temporização
   * Contagem regressiva para o evento
   * Status de proximidade
   * Alertas de eventos próximos

### Segurança e Autenticação

8. Sistema Robusto de Autenticação
 - Persistência de sessão via NextAuth.js
 - Proteção de rotas administrativas
 - Validação de permissões por função
 - Tokens JWT seguros

9. Controle de Acesso
 - Diferentes níveis de permissão
 - Validação de proprietário de evento
 - Proteção contra acessos não autorizados
 - Middleware de autenticação

### Funcionalidades Específicas

10. Gerenciamento de Capacidade
  - Controle automático de lotação
  - Lista de espera (quando aplicável)
  - Notificações de vagas disponíveis
  - Status visual de disponibilidade

11. Sistema de Compartilhamento
  - Contagem de compartilhamentos
  - Links personalizados
  - Integração com redes sociais
  - Métricas de alcance

12. Exportação de Dados
  - Relatórios em PDF personalizados
  - Exportação CSV com dados completos
  - Filtros de exportação
  - Formatação automática de dados

### Melhorias Técnicas

13. Tratamento de Erros
  - Sistema robusto de fallbacks
  - Mensagens de erro amigáveis
  - Recuperação automática de falhas
  - Logs detalhados

14. Otimização de Código
  - Componentização eficiente
  - Reutilização de estilos
  - Context API para estado global
  - Tipagem forte com TypeScript

15. UX/UI Aprimorada
  - Feedback visual imediato
  - Animações suaves
  - Estados de loading
  - Indicadores de progresso

Estas funcionalidades adicionais transformam o Gatherize em uma plataforma robusta e profissional para gerenciamento de eventos, oferecendo uma experiência completa tanto para organizadores quanto para participantes.

## Usuários pré-definidos

Usuário 1:

- Email: user@email.com
- Senha: 123

Usuário 2: 

- Email: kingofthepiratesmeat123@email.com
- Senha: 123 

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.