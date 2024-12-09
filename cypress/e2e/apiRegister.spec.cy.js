/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

const filePath = 'cypress/fixtures/usuario.json';

const usuario = {
    nome: faker.name.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };

describe('API - Teste de cadastro de usuários', () => {
  it('Deve criar um novo usuário', () => {
    cy.request({
    method: 'POST',
    url: 'https://serverest.dev/usuarios',
    body: {
        nome: usuario.nome,
        email: usuario.email,
        password: usuario.password,
        administrador: 'true'
    },
}).then((response) => {
    expect(response.status).to.eq(201);
    expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
    cy.writeFile(filePath, usuario);
    })
    });
});
    

