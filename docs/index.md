# Testes de API – Cypress

## Objetivo do projeto
Automatizar a validação da API pública Dog CEO (`https://dog.ceo/api`), garantindo que os endpoints principais respondam com status, formatos e dados esperados. A suíte roda localmente, em Docker e em pipeline GitHub Actions, gerando relatórios Mochawesome.

## O que é validado na API Dog CEO
- Lista completa de raças em `/breeds/list/all` com código 200 e corpo no formato esperado.
- Retorno de uma imagem aleatória em `/breeds/image/random`, assegurando URL válida.
- Lista de imagens de uma raça específica em `/breed/{breed}/images`, garantindo array de URLs.
- Tratamento para raça inexistente, retornando 404 e mensagem de erro adequada.

## Arquitetura da automação
- **Cypress e2e**: specs em `cypress/e2e/breeds/*.cy.js` organizadas por endpoint.
- **Helper de API**: `cypress/e2e/helpers/api.js` centraliza URLs e chamadas `cy.request`.
- **Fixtures**: `cypress/fixtures/breeds.json` com exemplos de raças válidas e inválidas.
- **Support**: `cypress/support/e2e.js` registra comandos futuros (mantido enxuto).
- **Configuração**: `cypress.config.js` define reporter Mochawesome, padrões de spec e suporte.
- **Infra**: Dockerfile + docker-compose para execução containerizada; GitHub Actions para CI.

## Tecnologias utilizadas
- Cypress 15.7.0 (modo headless via `cypress/included` no container).
- Node.js (pipeline usa Node 20).
- Mochawesome + mochawesome-merge + mochawesome-report-generator para relatórios.
- Docker e Docker Compose.
- GitHub Actions para execução contínua e upload de artefatos.
