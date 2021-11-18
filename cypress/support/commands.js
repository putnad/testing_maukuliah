// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --Cypress.Commands.add('LoginAdminPT', fu)
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
import './commands';

Cypress.Commands.add('login', (name, { cacheSession = true } = {}) => {
  const login = () => {
    cy.visit('https://maukuliah.id/login')
    cy.get(':nth-child(1) > .form-control').type('putnadiyah@gmail.com')
    cy.get(':nth-child(2) > .form-control').type('password')
    cy.get('.btn-masuk').click()
  }
  if (cacheSession) {
    cy.session(name, login)
  } else {
    login()
  }
})

Cypress.Commands.add('confirmCaptcha', function () {
    cy.get('iframe')
      .first()
      .then((recaptchaIframe) => {
        const body = recaptchaIframe.contents()
        cy.wrap(body).find('.recaptcha-checkbox-border').should('be.visible').click()
      })
  })

  Cypress.Commands.add('isiFormulir', function () {
    cy.get(':nth-child(1) > .form-group > .form-control').type('testing')
    cy.get(':nth-child(2) > .form-group > .form-control').type('putnadiyah@gmail.com')
    cy.get(':nth-child(3) > .form-group > .form-control').type('08111111111')
    cy.get(':nth-child(4) > .form-group > .form-control').type('SMA')
      
    .and('have.class', 'ant-select-item-option-content')
    .click()
    
  })

  Cypress.Commands.add('any', { prevSubject: 'element' }, (subject, size = 1) => {
    cy.wrap(subject).then(elementList => {
      elementList = (elementList.jquery) ? elementList.get() : elementList;
      elementList = Cypress._.sampleSize(elementList, size);
      elementList = (elementList.length > 1) ? elementList : elementList[0];
      cy.wrap(elementList);
    });
  });

