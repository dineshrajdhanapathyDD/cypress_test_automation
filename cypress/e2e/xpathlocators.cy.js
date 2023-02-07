describe('Xpathlocators', () =>{ 
it('find no of products', () => {


cy.visit("https://www.amazon.in/s?k=ipad&crid=1BHHH7DWVHAPZ&sprefix=ipad%2Caps%2C962&ref=nb_sb_noss_1")
cy.xpath("//ol[@class='sl-sobe-carousel-viewport-row-inner']/li").should('have.length',36)


})





})