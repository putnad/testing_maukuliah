describe('alur daftar melalui button info prodi', () => {
    beforeEach(() => {
      cy.visit('https://maukuliah.id/')
    })

it("cari info prodi", () => {

    cy.contains('Info Prodi').click()
    cy.get('.ant-input').type('Teknik Komputer')
    cy.get('[href="/university/politeknik-pratama-mulia/10126"] > .card-prodi > .bottom > .justify-content-between > .btn-mendaftar').click()
    cy.get('.btn-interested').click()
   
    cy.isiFormulir()

    
  })
 
})