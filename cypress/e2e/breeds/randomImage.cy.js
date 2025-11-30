import { api } from "../helpers/api";

describe("📸 GET /breeds/image/random", () => {

  it("Deve retornar uma imagem aleatória válida", () => {

    api.randomImage().then((response) => {

      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq("success");
      expect(response.body.message).to.match(/^https?:\/\/.+/);

    });

  });

});
