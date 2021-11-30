describe('Create remove update halaman tab alumni', () => {
    beforeEach(() => {
        cy.login('admin', { cacheSession: false })
    })
    it('tambah data alumni', () => {
        //assertion make sure dah login admin kampus
        cy.get('.profile-notif > .ant-dropdown-trigger')
        .contains('Admin Kampus')
        .should('be.visible')
        
        //klik tab alumni
        cy.get('.sidebar-menu > :nth-child(8)').click()
        
        //klik tambah alumni
        cy.get('.btn-block-warning').click()
        
        //pengisian biodata alumni
        const filepath = 'picture.jpg'
        cy.get('input[type="file"]').attachFile(filepath)
        cy.get('.ant-upload-select > .ant-upload').click()

        cy.get('#nama-alumni').type('Dummy Test')
        cy.get(':nth-child(2) > .form-group > #nama-perusahaan')
        .type('Sevima24/7')
        cy.get('#nama-jabatan').type('QA')
        cy.get('.ant-select-selection-item').click()
        cy.get('div.ant-select-item:nth-child(1) > div:nth-child(1)')
        .contains('S1 Arsitektur')
        .and('have.class', 'ant-select-item-option-content')
        .click()
        cy.get(':nth-child(5) > .form-group > #nama-perusahaan').type('2015')
        cy.get(':nth-child(6) > .form-group > #nama-perusahaan').type('Menggambar')
        cy.get('#caption').type('Ini caption untuk testing automation')
        
        //klik button simpan
        cy.get('.btn-block-primary').click()  
         
        //notifikasi berhasil tambah data 
        cy.get('.ant-notification-notice').should('be.visible')
    })

    it('ubah data alumni', () => {
        //assertion make sure dah login admin kampus
        cy.get('.profile-notif > .ant-dropdown-trigger')
        .contains('Admin Kampus')
        .should('be.visible')

        //klik tab alumni
        cy.get('.sidebar-menu > :nth-child(8)').click()
        
        //klik ubah data
        cy.get(':nth-child(1) > .card-admin-alumni > .ellipsis > .ant-dropdown-trigger')
        .click()
        cy.get(':nth-child(1) > .link-popover')
        .click()

        //ganti nama alumni
        cy.get('#nama-alumni')
        .click()
        .clear()
        .type('Sudah Ganti Nama')

        //klik button simpan
        cy.get('.btn-block-primary').click() 
        
        //notifikasi berhasil update data
        cy.get('.ant-notification-notice')
        .contains('Data Berhasil Diubah')
        .should('be.visible')       
    })

    it('hapus data alumni', () => {
        //assertion make sure dah login admin kampus
        cy.get('.profile-notif > .ant-dropdown-trigger')
        .contains('Admin Kampus')
        .should('be.visible')

        //klik tab alumni
        cy.get('.sidebar-menu > :nth-child(8)').click()

        //klik hapus data
        cy.get(':nth-child(1) > .card-admin-alumni > .ellipsis > .ant-dropdown-trigger')
        .click()
        cy.get('[href="#/"] > .link-popover')
        .click()

        //pop up validasi hapus data
        cy.get('.ant-popover-inner-content')
        .contains('Apakah Anda yakin ingin menghapus testimoni ini?')
        .should('be.visible')

        //klik yakin menghapus 
        cy.get('.ant-btn-primary').click()

        //notifikasi berhasil hapus data
        cy.get('.ant-notification-notice')
        .contains('Testimoni berhasil dihapus')
        .should('be.visible')       
        
    })
})