//const cypress = require('cypress')

describe('My First Test', () => {

    it('Can load the page', () => {
      cy.visit('/home.html')
      cy.title().should('eq', 'QA Web Automation Activity')
    })
  
    it('Can view a menu item', () => {
      cy.visit('/home.html')
  
      // Help! This worked before, but then the page changed, and now it's failing!
      cy.get('html body div div button').click()
  
      cy.get('h5').first().should('contain', 'Tomato Soup')
    })
  
    it('Can have a timing issue', () => {
      cy.visit('/home.html')
  
      cy.contains('div', 'show contact').click()
      cy.contains('contact').should('be.visible')
  
      cy.get('#_541jkl_modal h1').then((heading) => {
        cy.log(heading.text())
      })
  
      // the 'name' field is focused by default, so we can type into it right away
      cy.focused().type('John Smith')
    })
  
    it('Can toggle the contact form', () => {
      cy.visit('/home.html')
  
      cy.contains('div', 'show contact').click()
      cy.contains('Reserve a table').should('be.visible')
  
      cy.contains('div', 'hide contact').click()
      cy.contains('Reserve a table').should('not.be.visible')
    })
  
  
  
  })
  
