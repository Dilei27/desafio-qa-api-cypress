# Estrutura do Projeto

## Visão geral
```
cypress/
├─ e2e/
│  └─ breeds/
│     ├─ breedsImages.cy.js
│     ├─ breedsInvalid.cy.js
│     ├─ breedsList.cy.js
│     └─ randomImage.cy.js
├─ fixtures/
│  └─ breeds.json
├─ support/
│  ├─ commands.js
│  └─ e2e.js
├─ e2e/helpers/
│  └─ api.js
Dockerfile
docker-compose.yml
cypress.config.js
package.json
.github/workflows/api-tests.yml
```

## Pastas e arquivos
- `cypress/e2e/breeds/*.cy.js`: specs organizadas por endpoint da Dog CEO API.
- `cypress/e2e/helpers/api.js`: encapsula URLs base e funções `cy.request` (`listBreeds`, `breedImages`, `randomImage`).
- `cypress/fixtures/breeds.json`: exemplos de raças válidas e inválidas usados como dados de apoio.
- `cypress/support/e2e.js`: ponto de entrada para comandos customizados (importa `commands.js`, atualmente vazio para futuras extensões).
- `cypress.config.js`: configura reporter Mochawesome, diretório de resultados (`cypress/results`), spec pattern e arquivo de suporte.
- `Dockerfile` e `docker-compose.yml`: ambiente containerizado baseado em `cypress/included`.
- `.github/workflows/api-tests.yml`: pipeline GitHub Actions para execução e publicação dos relatórios.

## Função do `api.js`
Centraliza chamadas HTTP para a Dog CEO API com `cy.request`, evitando repetição de URLs e endpoints nas specs:
- `listBreeds()`: GET `/breeds/list/all`.
- `breedImages(breed)`: GET `/breed/{breed}/images`.
- `randomImage()`: GET `/breeds/image/random`.

## Relatórios
- Saída configurada em `cypress/results` (HTML e JSON) via Mochawesome.
