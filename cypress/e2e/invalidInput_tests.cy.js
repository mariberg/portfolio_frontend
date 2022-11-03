/// <reference types="cypress" />

context('Handles invalid input', () => {

  it('Redirect to homepage if path invalid', () => {
    cy.request({
      url: 'https://marikabergman.com/invalidPath'
    }).then((resp) => {
      expect(resp.status).to.eq(200)
    })
  })


  it('Additional request parameters are ignored', () => {
    cy.request({
      method: 'POST',
      url: '/',
      body: { username: 'test_username' }
    })
      .then((resp) => {
        expect(resp.status).to.eq(200)
      })
  })

  it('Incorrect request method returns 403 error', () => {
    cy.request({
      method: 'GET',
      url: '/',
      failOnStatusCode: false
    })
      .then((resp) => {
        expect(resp.status).to.eq(403)
      })
  })

})