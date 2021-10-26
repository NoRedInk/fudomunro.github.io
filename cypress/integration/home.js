describe('My First Test', () => {

    it('Can load the page', () => {
      cy.visit('/test.html')
      cy.title().should('eq', 'QA Web Automation Activity')
    })
  
    it('Can enter contact details', () => {
      cy.visit('/test.html')
  
      cy.contains('div', 'show contact').click()
      cy.contains('contact').should('be.visible')
  
      cy.get('#_541jkl_modal h1').then((heading) => {
        cy.log(heading.text())
      })
  
      // the 'name' field is focused by default, so we can type into it right away
      cy.focused().type('John Smith')
    })
  })
