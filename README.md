# 🐶 Desafio QA — Testes de API com Cypress

Automação de testes para a API pública **Dog CEO** (`https://dog.ceo/api`) utilizando **Cypress**, **Docker** e **GitHub Actions**.

Link da Documentação : https://Dilei27.github.io/desafio-qa-api-cypress/

Os testes validam os principais endpoints da API, garantindo retorno correto, estrutura adequada e integridade dos dados.

---

## 📂 Estrutura do Projeto

```
cypress/
  ├── e2e/
  │   └── breeds/
  │       ├── breedsImages.cy.js
  │       ├── breedsInvalid.cy.js
  │       ├── breedsList.cy.js
  │       └── randomImage.cy.js
  ├── helpers/
  │   └── api.js
  ├── fixtures/
  │   └── breeds.json
  └── support/
      ├── commands.js
      └── e2e.js

docker-compose.yml
Dockerfile
cypress.config.js
package.json
```

---

## 🚀 Como executar localmente

### **1. Instalar dependências**
```bash
npm install
```

### **2. Rodar os testes**
```bash
npx cypress run
```

---

## 🐳 Executar com Docker

```bash
docker compose build --no-cache
docker compose up -d
docker exec -it desafioqa_api bash
npx cypress run
```

---

## 📊 Relatórios (Mochawesome)

Após a execução, os relatórios serão gerados em:

```
cypress/results/
```

---

## 🔄 CI/CD — GitHub Actions

A pipeline executa automaticamente:

- Instalação do Node.js  
- Instalação das dependências  
- Execução dos testes  
- Geração do relatório Mochawesome  
- Upload dos artefatos  

Arquivo do workflow:

```
.github/workflows/api-tests.yml
```

---

## 📌 Tecnologias Utilizadas

- Cypress  
- Node.js  
- Docker  
- Mochawesome Reports  
- GitHub Actions

