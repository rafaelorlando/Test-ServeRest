
const filePath = 'cypress/fixtures/usuario.json';

export class LoginPage {
    loginServerest() {
        cy.readFile(filePath).then((usuario) => {
        cy.visit('https://front.serverest.dev/login');
        cy.get('#email').type(usuario.email);
        cy.get('#password').type(usuario.password);
        cy.get('button[type="submit"]').click();
        });
    }
}





