# Estrutura do Projeto

## Objetivo

Desenvolver uma aplicação fullstack utilizando Node.js com Express e TypeScript no back-end e React no front-end. A aplicação deve ter autenticação, persistência de dados em um banco de dados real, ser testada com Cypress, e ser containerizada com Docker e Kubernetes.

**Disclaimer**: Em caso de algum erro, verifique se as portas estão disponíveis.

## Visão Geral do Diretório

- **src/**: Este diretório contém o código principal da aplicação. É onde a lógica de negócios e a interação com o banco de dados são implementadas.
  - **@types/**: Contém definições de tipos TypeScript para facilitar a tipagem em toda a aplicação.
  - **actions/**: Abriga as ações que podem ser executadas na aplicação, como chamadas de API e manipulação de estado.
  - **app/**: Contém a configuração principal da aplicação, incluindo a inicialização do servidor e middleware.
    - **auth/**: Contém a lógica relacionada à autenticação de usuários, incluindo as rotas de sign-in e sign-up.
    - **protected/**: Abriga as rotas e middleware que protegem as áreas da aplicação que requerem autenticação, incluindo a rota paralela **@showcase** e a rota **product**.
  - **components/**: Este diretório contém componentes reutilizáveis do front-end, que podem ser utilizados em diferentes partes da aplicação.
  - **http/**: Abriga a camada HTTP, que é responsável por lidar com as requisições e respostas da aplicação. Aqui, você encontrará rotas e middleware.
  - **lib/**: Contém bibliotecas e utilitários que podem ser utilizados em toda a aplicação.
- **cypress/**: Este diretório contém os testes automatizados da aplicação, utilizando Cypress para garantir a qualidade e funcionalidade do front-end e back-end.

## Por que Cypress?

Cypress é uma ferramenta de teste de ponta a ponta que permite a automação de testes de aplicações web. Sua popularidade se deve à sua facilidade de uso, velocidade e capacidade de fornecer feedback instantâneo. Com Cypress, é possível escrever testes que simulam a interação do usuário com a aplicação, garantindo que todas as funcionalidades estejam funcionando conforme o esperado. Além disso, a ferramenta oferece uma interface visual que facilita a depuração e a análise dos testes.

## Por que usar Ky?

Ky é uma biblioteca leve e moderna para fazer requisições HTTP. Ela é baseada na API Fetch e oferece uma sintaxe simples e intuitiva, além de suporte a promessas. A utilização do Ky permite que as chamadas de API sejam feitas de forma mais eficiente e com menos código, melhorando a legibilidade e a manutenção do código. Com recursos como interceptação de requisições e suporte a cancelamento, Ky se torna uma escolha ideal para aplicações que necessitam de comunicação assíncrona com servidores.

## Por que usar @t3-oss/env-nextjs?

O @t3-oss/env-nextjs é uma biblioteca que facilita a gestão de variáveis de ambiente em aplicações Next.js. Ele permite a validação e tipagem das variáveis de ambiente, garantindo que todas as configurações necessárias estejam presentes e corretas. Isso não apenas melhora a segurança da aplicação, mas também simplifica o processo de configuração, tornando-o mais intuitivo e menos propenso a erros. Com o uso do @t3-oss/env-nextjs, os desenvolvedores podem ter certeza de que suas variáveis de ambiente estão sendo gerenciadas de forma eficaz e segura.

## Por que usar Parallel Router do Next.js?

O Parallel Router do Next.js permite a renderização simultânea de diferentes rotas, melhorando a experiência do usuário ao permitir que múltiplas partes da interface sejam carregadas de forma independente. Isso é especialmente útil em aplicações complexas, onde diferentes seções da página podem ser atualizadas sem a necessidade de recarregar toda a aplicação. Com o uso do Parallel Router, é possível otimizar o desempenho e a responsividade da aplicação, proporcionando uma navegação mais fluida e eficiente para os usuários.
