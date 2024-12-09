/// <reference types="cypress" />

describe('API - Teste de Listagem de Produtos', () => {
    it('Deve retornar a lista de produtos disponíveis', () => {
      cy.request('GET', 'https://serverest.dev/produtos').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('quantidade');
        expect(response.body.quantidade).to.be.greaterThan(0);
      });
    });
  });