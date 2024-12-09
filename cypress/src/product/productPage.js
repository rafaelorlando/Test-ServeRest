
beforeEach(() => {
    cy.login(); 
});

export class ProductPage {
    productServerest() {
        cy.get('[data-testid="listarProdutos"]').click()
        cy.get('h1').should('have.text', 'Lista dos Produtos');
    }

}


