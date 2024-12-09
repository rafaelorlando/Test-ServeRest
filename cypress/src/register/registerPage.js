//https://front.serverest.dev/login
import { faker } from '@faker-js/faker';

const filePath = 'cypress/fixtures/usuario.json';

const usuario = {
    nome: faker.name.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };

export class RegisterPage {
    registerServerest() {
        cy.visit('https://front.serverest.dev/login');
        cy.get('[data-testid="cadastrar"]').click()
        cy.get('[data-testid="nome"]').type(usuario.nome)
        cy.get('[data-testid="email"]').type(usuario.email)
        cy.get('[data-testid="password"]').type(usuario.password)
        cy.get('[data-testid="cadastrar"]').click()
        cy.get('.alert-link').should('contain', 'Cadastro realizado com sucesso')
        cy.writeFile(filePath, usuario);
        cy.wait(5000);
    }
}





