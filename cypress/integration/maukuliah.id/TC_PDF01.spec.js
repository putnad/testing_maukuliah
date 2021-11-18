describe('test cari kampus sampai pendaftaran', () => {
    beforeEach(() => {
      cy.visit('baseURL')
    })

it("Cari Nama Kampus", () => {

    cy.contains('Cari Kampus / Prodi').click()
    cy.get('.ant-input-affix-wrapper > .ant-input').type('Politeknik Elektronika Negeri Surabaya')
    cy.get('.row-kampus')
      .should('be.contain', 'Politeknik Elektronika Negeri Surabaya')
    cy.get('.row-kampus').click()
    //cy.scrollTo('bottom')
    cy.contains('Tertarik Mendaftar').click({force: true})
  
    cy.get(':nth-child(1) > .form-group > .form-control').type('Putri')
    cy.get(':nth-child(2) > .form-group > .form-control').type('putnadiyah@gmail.com')
    cy.get(':nth-child(3) > .form-group > .form-control').type('08111111111')
    cy.get(':nth-child(4) > .form-group > .form-control').type('SMA')
    
    cy.get('.ant-select-selector').type('Teknik Komputer')
    cy.get('#rc_select_0_list')
    .get('div')
    .should('have.class', 'ant-select-item ant-select-item-option')
    .contains('D4 - Teknik Komputer')
    .and('have.class', 'ant-select-item-option-content')
    .click()

    cy.get('.btn-peminat').click() 
    
  })
 
})