# 🐶 Desafio QA — Testes de API com Cypress

Automação de testes para a API pública **Dog CEO** ( `https://dog.ceo/api` ) utilizando **Cypress**, **Docker** e **GitHub Actions**.

Os testes validam os principais endpoints da API, garantindo estrutura, retorno e integridade dos dados.

---

## 📂 Estrutura do Projeto

cypress/
├── e2e/
│ └── breeds/
│ ├── breedsImages.cy.js
│ ├── breedsInvalid.cy.js
│ ├── breedsList.cy.js
│ └── randomImage.cy.js
├── helpers/
│ └── api.js
├── fixtures/
│ └── breeds.json
└── support/
├── commands.js
└── e2e.js

docker-compose.yml
Dockerfile
cypress.config.js
package.json

yaml
Copiar código

---

## 🚀 Como executar localmente

### **1. Instalar dependências**

```bash
npm install
2. Executar os testes
bash
Copiar código
npx cypress run
3. Executar com Docker
bash
Copiar código
docker compose build --no-cache
docker compose up -d
docker exec -it desafioqa_api bash
npx cypress run
📊 Relatórios
O projeto utiliza Mochawesome para gerar relatórios automáticos em:

bash
Copiar código
cypress/results/
🔄 CI/CD — GitHub Actions
A pipeline executa automaticamente:

Instalação do Node

Instalação das dependências

Execução dos testes

Geração do relatório Mochawesome

Upload dos artefatos

Arquivo:

bash
Copiar código
.github/workflows/api-tests.yml
📌 Tecnologias
Cypress

Node.js

Docker

Mochawesome Reports

GitHub Actions
