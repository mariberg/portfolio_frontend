/// <reference types="cypress" />



context('Navigation tests', () => {


  it('Navi contains correct titles and is visible', () => {
    cy.visit('https://marikabergman.com')

    cy.get(':nth-child(2) > .nav-link').should('contain', 'About').and('have.class', 'nav-link').and('be.visible')
    cy.get(':nth-child(3) > .nav-link').should('contain', 'Projects').and('have.class', 'nav-link').and('be.visible')
    cy.get(':nth-child(4) > .nav-link').should('contain', 'Education & Experience').and('have.class', 'nav-link').and('be.visible')
    cy.get(':nth-child(5) > .nav-link').should('contain', 'Skills').and('have.class', 'nav-link').and('be.visible')
    cy.get(':nth-child(6) > .nav-link').should('contain', 'Contact').and('have.class', 'nav-link').and('be.visible')

  })

  it('Mobile navi displayed on smaller screen', () => {
    cy.viewport(320, 480)

    // the navbar should have collapse since our screen is smaller
    cy.get(':nth-child(2) > .nav-link').should('contain', 'About').and('not.be.visible')
    cy.get(':nth-child(3) > .nav-link').should('contain', 'Projects').and('not.be.visible')
    cy.get(':nth-child(4) > .nav-link').should('contain', 'Education & Experience').and('not.be.visible')
    cy.get(':nth-child(5) > .nav-link').should('contain', 'Skills').and('have.class', 'nav-link').and('not.be.visible')
    cy.get(':nth-child(6) > .nav-link').should('contain', 'Contact').and('have.class', 'nav-link').and('not.be.visible')

    cy.get('.slicknav_btn').should('be.visible').click()
    cy.get('.slicknav_nav').should('be.visible')
  })


})