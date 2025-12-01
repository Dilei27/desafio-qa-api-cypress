# Docker

## Dockerfile
- Base `cypress/included:15.7.0` já contém browsers e binário do Cypress.
- `WORKDIR /app` define diretório de trabalho.
- Copia `package.json` e `package-lock.json` e roda `npm install` para dependências.
- Copia todo o projeto para o container.
- `CMD ["tail", "-f", "/dev/null"]` mantém o container ativo para execução manual dos testes.

## docker-compose.yml
- Serviço `api-tests` com `container_name: desafioqa_api`.
- Build a partir do contexto atual.
- `working_dir: /app` e volume bind `.:/app` para refletir mudanças locais.
- `entrypoint: ["tail", "-f", "/dev/null"]` igual ao Dockerfile para permitir `docker exec`.

## Rodando o Cypress no container
```bash
docker compose up -d
docker exec -it desafioqa_api bash
npx cypress run
```
Os relatórios são gravados em `cypress/results` dentro do volume montado.
