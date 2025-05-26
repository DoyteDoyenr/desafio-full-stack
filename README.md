⚠️ **Disclaimer:** As variáveis de ambiente foram deixadas aqui apenas para facilitar os testes. Em um caso real, **não** deve-se deixar as envs expostas assim! 🔒

# Como Rodar a Aplicação

## Como Baixar

1. Clone o repositório e instale o pnpm na sua última versão, se ainda não o fez:
   ```bash
   git clone https://github.com/DoyteDoyenr/desafio-full-stack.git
   cd desafio-full-stack
   npm install -g pnpm
   pnpm install
   ```

## Com Node.js

1. Certifique-se de rodar `pnpm install` na raiz do projeto:
   ```bash
   pnpm install
   ```

2. Suba os bancos de dados utilizando o Docker Compose:
   ```bash
   docker-compose -f docker-compose-database.yaml up -d
   ```

3. Construa a aplicação:
   ```bash
   pnpm build
   ```

4. Gere as tabelas para a aplicação:
   ```bash
   pnpm generate
   ```

5. Inicie o back-end:
   ```bash
   pnpm start:back
   ```

6. Inicie o front-end:
   ```bash
   pnpm start:front
   ```

## Com Docker

1. Certifique-se de ter o Docker e o Docker Compose instalados.

2. Crie a imagem Docker:
   ```bash
   pnpm docker:build:all
   ```

3. Inicie os serviços com Docker Compose:
   ```bash
   docker-compose up -d
   ```

## Com Kubernetes

1. Certifique-se de ter o Kubernetes e o kubectl instalados.

2. Crie a imagem Docker:
   ```bash
   pnpm docker:build:all
   ```

3. Aplique as configurações do Kubernetes:
   ```bash
   kubectl apply -f k8s-local/
   ```

4. Para remover os recursos do Kubernetes, execute:
   ```bash
   kubectl delete -f k8s-local/
   ```
