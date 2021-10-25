/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://dev.maukuliah.id/daftar/student')
  })

  it('displays two todo items by default', () => {
   
  cy.get(':nth-child(1) > .form-control').type('Putri Nadiyah')

  cy.get(':nth-child(2) > .form-control').type('putrinadiyah@gmail.com')

  cy.get(':nth-child(3) > .form-control').type('password')

  cy.get(':nth-child(4) > .form-control').type('password')

  cy.get('.btn-masuk').click()

 }) 
})
