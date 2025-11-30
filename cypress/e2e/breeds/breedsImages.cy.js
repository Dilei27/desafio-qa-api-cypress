import { api } from "../helpers/api";

describe("🐕 GET /breed/{breed}/images", () => {

  const breed = "hound";

  it(`Deve retornar imagens da raça ${breed}`, () => {

    api.breedImages(breed).then((response) => {

      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq("success");
      expect(response.body.message).to.be.an("array");

      // Toda imagem deve ser URL válida
      response.body.message.forEach((img) => {
        expect(img).to.match(/^https?:\/\/.+/);
      });

    });

  });

});
