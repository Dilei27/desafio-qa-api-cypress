import { api } from "../helpers/api";

describe("❌ GET /breed/{breed}/images com raça inválida", () => {

  const invalidBreed = "xpto123";

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
