

describe('My First Test', () => {
  
  
  it('verif-title-positive', () => {

cy.visit("https://opensource-demo.orangehrmlive.com/")
cy.title().should('eq', 'OrangeHRM')

   
  })

 it('verify-title-negative', () => {

cy.visit("https://opensource-demo.orangehrmlive.com/")
cy.title().should('eq', 'OrangeHRM123')

 })

})