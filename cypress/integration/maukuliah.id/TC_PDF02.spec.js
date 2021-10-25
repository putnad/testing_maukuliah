describe('daftar kampus lewat form depan', () => {
    beforeEach(() => {
      cy.visit('https://dev.maukuliah.id/')
    })

it("Cari Nama Kampus", () => {

    cy.get(':nth-child(1) > .form-side-right > .ant-input').type('Pendaftar')
    cy.get(':nth-child(2) > .form-side-right > .ant-input').type('email@gmail.com')
    cy.get(':nth-child(3) > .form-side-right > .ant-input').type('081111111')
    cy.get(':nth-child(4) > .form-side-right > .ant-input').type('SMA')
    cy.get(':nth-child(1) > :nth-child(2) > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
    cy.get('#rc_select_0_list')
    .get('div')
    .should('have.class', 'ant-select-item ant-select-item-option')
    .contains('London School of Accountancy & Finance')
    .and('have.class', 'ant-select-item-option-content')
    .click()
    cy.get(':nth-child(1) > :nth-child(3) > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
    cy.get('#rc_select_1_list_0')
    .get('div')
    .should('have.class', 'ant-select-item ant-select-item-option')
    .contains('Accounting and Business - S1')
    .and('have.class', 'ant-select-item-option-content')
    .click()
    
    cy.confirmCaptcha()

    cy.get('.btn-daftar').click()
   
  })
 
})