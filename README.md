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
  ```
  NEXTAUTH_SECRET=[string aleatória]
  ```

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

- Implementação de API local para desenvolvimento e testes contínuos
- Atualizações em tempo real da contagem de participantes quando os usuários se inscrevem/cancelam inscrição
- Gerenciamento de capacidade de eventos (eventos lotados)
- Cálculo de pontuação de engajamento para eventos
- Design responsivo para vários tamanhos de tela
- Notificações toast para ações do usuário
- Opções de classificação e filtragem para eventos
- Rastreamento de contagem de compartilhamentos para eventos
- Hook personalizado `useWindowSize` para responsividade
- Provedor de autenticação para gerenciamento de sessão


## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.