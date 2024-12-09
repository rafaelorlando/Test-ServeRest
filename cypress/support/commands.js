// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const filePath = 'cypress/fixtures/usuario.json';

Cypress.Commands.add('login', (email, password) => {
    cy.readFile(filePath).then((usuario) => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('#email').type(usuario.email);
    cy.get('#password').type(usuario.password);
    cy.get('button[type="submit"]').click();
    });
})
  