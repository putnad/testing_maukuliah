context('Halaman blog', () => {
    beforeEach(() => {
      cy.visit('https://maukuliah.id/')
    })
  
    it('akses halaman blog dari dashboard', () => {
      cy.get(':nth-child(1) > .ant-dropdown-trigger').click()
      cy.get('a > .link-dropdown').click()
        })

        





        
})
  

  