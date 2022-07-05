describe('On the home page', () => {

    it('Can load the page', () => {
      cy.visit('https://noredink.github.io/qa-fake-restaurant')
      cy.title().should('eq', 'Our Fake Restaurant')
    })
  
    it('Can view a menu item', () => {
      cy.visit('https://noredink.github.io/qa-fake-restaurant')
  
      // Help! This worked before, but then the page changed, and now it's failing!
      cy.get('div#_543jkl_block').click()
  
      cy.get('h5').first().should('be.visible').should('contain', 'Tomato Soup')
    })
  
    it('Can enter contact details', () => {
      cy.visit('https://noredink.github.io/qa-fake-restaurant')
  
      cy.contains('div', 'show contact').click()
      cy.contains('contact').should('be.visible')
  
      cy.get('[placeholder=Name]')
  
      // the 'name' field is focused by default, so we can type into it right away
      cy.focused().type('John Smith')
    })
  
    it('Can toggle the contact form', () => {
      cy.visit('https://noredink.github.io/qa-fake-restaurant')
  
      cy.contains('div', 'show contact').click()
      cy.contains('Reserve a table').should('be.visible')
  
      cy.contains('div', 'hide contact').click()
      cy.contains('Reserve a table').should('not.be.visible')
    })
  })
