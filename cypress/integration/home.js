describe('On the home page', () => {

    it('Can load the page', () => {
      cy.visit('/')
      cy.title().should('eq', 'Our Fake Restaurant')
    })
  
    it('Can view a menu item', () => {
  
      // Help! This worked before, but then the page changed, and now it's failing!
      cy.get('#button_container > div:nth-child(1)').click()
  
      cy.get('h5').first().should('be.visible').should('contain', 'Tomato Soup')
    })
  
    it('Can enter contact details', () => {  

      cy.contains('show contact').click({force: true})
       
      // the 'name' field is focused by default, so we can type into it right away
      cy.focused().type('John Smith')
    })
  
    it('Can toggle the contact form', () => {
  
      cy.contains('show contact').click({force: true})
      cy.contains('Reserve a table').should('be.visible')
      cy.get('#_541jkl_modal > div > div.w3-container.w3-black > span').click()
  
      cy.contains('div', 'hide contact').click({force: true})
      cy.contains('Reserve a table').should('not.be.visible')
    })
  })
