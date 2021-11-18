describe('alur daftar melalui rekomendasi prodi', () => {
    beforeEach(() => {
      cy.visit('https://maukuliah.id/')
    })

it("Testing button cari jurusan dashboard", () => {

    cy.scrollTo(0, 500)
    cy.contains('Cari Jurusan Sekarang').click()
    
    cy.get('.container-choise')
    .trigger('mouseover', 170, 75)
    .click(170, 75)
    .trigger('mouseover', 340, 75)
    .click(340, 75)
    .trigger('mouseover', 510, 75)
    .click(510, 75)
    cy.get('.btn-link').click()

    cy.get(':nth-child(1) > .flex-wrap').click()

    cy.get('.btn-save').click()

  })






 })