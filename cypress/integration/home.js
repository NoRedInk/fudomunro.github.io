describe('On the home page', () => {

    it('Can load the page', () => {
      cy.visit('/')
      cy.title().should('eq', 'Our Fake Restaurant')
    })
  
    it('Can view a menu item', () => {
      cy.visit('/')
      cy.contains('div', 'open menu').click()
      cy.get('h5').first().should('be.visible').should('contain', 'Tomato Soup')
    })
  
    it('Can enter contact details', () => {
      cy.visit('/')
  
      cy.contains('div', 'show contact').click()
      cy.contains('contact').should('be.visible')
  
      // the 'name' field is focused by default, so we can type into it right away
      cy.focused().type('John Smith')
    })
  
    it('Can toggle the contact form', () => {
      cy.visit('')
  
      cy.contains('div', 'show contact').click()
      cy.contains('Reserve a table').should('be.visible')
  
      cy.contains('div', 'hide contact').click()
      cy.contains('Reserve a table').should('not.be.visible')
    })
  })
