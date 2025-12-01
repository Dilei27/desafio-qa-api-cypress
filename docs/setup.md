# Setup

## Requisitos
- Node.js (pipeline referencia Node 20; versões atuais do LTS funcionam).
- npm.
- Docker e Docker Compose para execução containerizada.

## Instalar dependências
```bash
npm install
```

## Executar testes localmente
```bash
npx cypress run
```
Relatórios são gravados em `cypress/results` conforme `cypress.config.js`.

## Executar via Docker
1. Build da imagem:
   ```bash
   docker compose build --no-cache
   ```
2. Subir o container em background:
   ```bash
   docker compose up -d
   ```
3. Entrar no container e rodar os testes:
   ```bash
   docker exec -it desafioqa_api bash
   npx cypress run
   ```

## Relatórios Mochawesome
- Diretório de saída: `cypress/results`.
- Configurado em `cypress.config.js` com geração de `.html` e `.json`.
