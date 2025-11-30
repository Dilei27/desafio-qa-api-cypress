import { api } from "../helpers/api";

describe("🐶 GET /breeds/list/all", () => {

  it("Deve retornar todas as raças com status 200 e no formato correto", () => {

    api.listBreeds().then((response) => {

      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq("success");
      expect(response.body.message).to.be.an("object");

      // Deve conter várias raças populares
      expect(response.body.message).to.have.property("hound");
      expect(response.body.message).to.have.property("akita");
      expect(response.body.message).to.have.property("retriever");
    });

  });

});
