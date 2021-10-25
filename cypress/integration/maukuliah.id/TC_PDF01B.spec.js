describe('test cari kampus sampai pendaftaran', () => {
    beforeEach(() => {
      cy.visit('https://dev.maukuliah.id/')
    })

it("Cari Nama Kampus", () => {

    cy.contains('Cari Kampus / Prodi').click()
    cy.get('#rc-tabs-0-tab-2').click()
    cy.get('#rc-tabs-0-panel-2 > :nth-child(1) > .ant-input-affix-wrapper > .ant-input').type('Teknik Informatika')
    cy.get('[href="/university/universitas-matana/s1-teknik-informatika"] > .row-kampus').click()

    cy.get(['name'='id'])
    
   
    
    //cy.get('.row-kampus').click()
    //cy.scrollTo('bottom')
    //cy.contains('Tertarik Mendaftar').click({force: true})
   
  })
 
})