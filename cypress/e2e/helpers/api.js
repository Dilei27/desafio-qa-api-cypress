const BASE_URL = "https://dog.ceo/api";

const endpoints = {
  list: "/breeds/list/all",
  breedImages: (breed) => `/breed/${breed}/images`,
  random: "/breeds/image/random"
};

export const api = {
  listBreeds() {
    return cy.request(BASE_URL + endpoints.list);
  },

  breedImages(breed) {
    return cy.request(BASE_URL + endpoints.breedImages(breed));
  },

  randomImage() {
    return cy.request(BASE_URL + endpoints.random);
  }
};
