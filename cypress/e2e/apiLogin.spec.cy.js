/// <reference types="cypress" />

const filePath = 'cypress/fixtures/usuario.json';

describe('API - Teste de Login', () => {
    it('Deve autenticar o usuário com credenciais válidas', () => {
      cy.readFile(filePath).then((usuario) => {
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: {
          email: usuario.email,
          password: usuario.password,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('message', 'Login realizado com sucesso');
      });
    });
  });
});


