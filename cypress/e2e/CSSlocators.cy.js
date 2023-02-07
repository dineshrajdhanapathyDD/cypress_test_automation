

describe('csslocators', () =>{
    it('csslocators', () =>{
        cy.visit("https://www.amazon.in/?&ext_vrnc=hi&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=58075519359&hvpone=&hvptwo=&hvadid=486462756371&hvpos=&hvnetw=g&hvrand=9900193472833889883&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007815&hvtargid=kwd-64107830&hydadcr=14452_2154371&gclid=CjwKCAiAioifBhAXEiwApzCztuXC2dJsQuUUCf7wZCP1SWhRE4R71QKqFWIbmdxI3tUs6DH4m3iR0hoCHosQAvD_BwE")
        //cy.get("#twotabsearchtextbox").type("watches")    //id tag optional
       // cy.get(".nav-search-field ").type("watches")    //class tag optional
        //cy.get("[name='field-keywords']").type("watches") //attribute tag optional
         cy.get("input.nav-input.nav-progressive-attribute[name='field-keywords']").type("watches")  //tag class attribute
        cy.get("#nav-search-submit-button").click()
        cy.get(".a-color-state.a-text-bold").contains("watches") //assertion
    })
})