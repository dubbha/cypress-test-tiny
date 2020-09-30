describe('page', () => {
  it('works', () => {
    cy.visit('https://docs.cypress.io/')
    cy.get('[class^="main-nav-link active"]').should('contain', 'ZZZ')
  })
})
