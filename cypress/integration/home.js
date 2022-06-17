describe('On the home page', () => {

    it('Can load the page', () => {
      cy.visit('/')
      cy.title().should('eq', 'Our Fake Restaurant')
    })
  
    it('Can view a menu item', () => {
      cy.visit('/')
  
      // Help! This worked before, but then the page changed, and now it's failing!
      //cy.get('html body div div button').click()
  
      cy.get('h5').first().should('be.visible').should('contain', 'Tomato Soup')
    })
  
    it('Can enter contact details', () => {
      cy.visit('/')
  
      cy.contains('div', 'show contact').click()
      cy.contains('contact').should('be.visible')
  
      cy.get('#_541jkl_modal h1').then((heading) => {
        cy.log(heading.text())
      })
  
      // the 'name' field is focused by default, so we can type into it right away
      cy.focused().type('John Smith')
    })
  
    it('Can toggle the contact form', () => {
      cy.visit('/')
  
      cy.contains('div', 'show contact').click()
      cy.contains('Reserve a table').should('be.visible')
  
      cy.contains('div', 'hide contact').click()
      cy.contains('Reserve a table').should('not.be.visible')
    })
  })
