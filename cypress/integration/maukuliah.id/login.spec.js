/// <reference types="cypress" />

describe('login', () => {
  it('should redirect to the correct page after logging in', () => {
    cy.login('name', { cacheSession: false })
    
  })
})