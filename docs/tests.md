# Testes

## Lista de raças – `breedsList.cy.js`
Valida `/breeds/list/all` retornando status 200, status `success` e objeto com raças conhecidas.

```js
import { api } from "../helpers/api";

describe("🐶 GET /breeds/list/all", () => {
  it("Deve retornar todas as raças com status 200 e no formato correto", () => {
    api.listBreeds().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq("success");
      expect(response.body.message).to.be.an("object");
      expect(response.body.message).to.have.property("hound");
      expect(response.body.message).to.have.property("akita");
      expect(response.body.message).to.have.property("retriever");
    });
  });
});
```
**Validações:** status HTTP, chave `status`, tipo do `message` como objeto e presença de raças populares.

## Imagem aleatória – `randomImage.cy.js`
Garante que `/breeds/image/random` retorna status 200, status `success` e uma URL válida.

```js
describe("📸 GET /breeds/image/random", () => {
  it("Deve retornar uma imagem aleatória válida", () => {
    api.randomImage().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq("success");
      expect(response.body.message).to.match(/^https?:\/\/.+/);
    });
  });
});
```
**Validações:** código de resposta e regex para garantir que o `message` é uma URL http/https.

## Imagens de uma raça específica – `breedsImages.cy.js`
Verifica `/breed/{breed}/images` para a raça `hound`, esperando array de URLs válidas.

```js
const breed = "hound";

describe("🐕 GET /breed/{breed}/images", () => {
  it(`Deve retornar imagens da raça ${breed}`, () => {
    api.breedImages(breed).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq("success");
      expect(response.body.message).to.be.an("array");
      response.body.message.forEach((img) => {
        expect(img).to.match(/^https?:\/\/.+/);
      });
    });
  });
});
```
**Validações:** status HTTP, chave `status`, tipo do `message` como array e verificação de URL para cada item.

## Cenário inválido – `breedsInvalid.cy.js`
Confirma tratamento de erro quando a raça não existe (`xpto123`), sem usar helper para explicitar a URL inválida.

```js
const invalidBreed = "xpto123";

describe("❌ GET /breed/{breed}/images com raça inválida", () => {
  it("Deve retornar mensagem de erro para raça inexistente", () => {
    cy.request({
      url: `https://dog.ceo/api/breed/${invalidBreed}/images`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.status).to.eq("error");
      expect(response.body.message).to.contain("Breed not found");
    });
  });
});
```
**Validações:** status 404, status de payload `error` e mensagem contendo `Breed not found`.

## Uso dos endpoints
- `/breeds/list/all`: lista completa para garantir disponibilidade da taxonomia.
- `/breeds/image/random`: fluxo principal de imagem aleatória.
- `/breed/{breed}/images`: consulta parametrizada; usado tanto para raça válida (`hound`) quanto para inválida (`xpto123`).
