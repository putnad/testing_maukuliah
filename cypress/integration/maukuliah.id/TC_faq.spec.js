describe('Halaman FAQ', () => {

it("akses halaman FAQ dari dashboard", () => {

    cy.visit('https://maukuliah.id/')
    cy.scrollTo("bottom")
    cy.get(':nth-child(2) > .footer-menu > :nth-child(3) > a')
    .click()
    
  })
it("masuk halaman FAQ", () => {

    cy.visit('https://maukuliah.id/faq')
    cy.get(':nth-child(2) > .collapse-header')
    .click()

    //lakukan pencarian di halaman FAQ
    cy.get('.form-control').type('')
    
  })


 
})