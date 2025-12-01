# CI/CD

## Pipeline GitHub Actions
Workflow: `.github/workflows/api-tests.yml`.

- **Checkout**: `actions/checkout@v3`.
- **Setup Node**: `actions/setup-node@v3` com `node-version: 20`.
- **Instalação**: `npm install`.
- **Testes**: `npx cypress run`.
- **Upload de artefatos**: `actions/upload-artifact@v4` publica `cypress/results` com retenção de 5 dias.

## Relatórios Mochawesome no CI
- Configuração no `cypress.config.js` gera HTML e JSON em `cypress/results`.
- O passo de upload leva esses arquivos como artefato `api-report` para consulta pós-execução.
