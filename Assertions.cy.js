//Implicit commands are built in assertions which include should() and  and();
//Explicit commands are not built in assertions which include expect() and assert();

describe("Assertions Practice", () => {
    it("Simple Assertion Test", () => {
      cy.visit("https://www.lonestar.edu/testing-cypress.htm");
      cy.contains('Schedule An Appointment').click()
      cy.get('.nav-mobile-sm-hide > .cta-tracker')
      .should('contain','Apply')
      .should('have.class','cta-tracker btn btn-xs btn-nav-promo',{setTimeout:70000})
      .should('be.visible')
      //.should('be.enabled',{setTimeout:7000})
      cy.get('#cta-primary-about').invoke('attr','id').should('equal','cta-primary-about')
      cy.get('.nav-mobile-sm-hide > .cta-tracker').should('contain','Apply').and('be.visible')

      //Explicit
      let name='Cypress'
      expect(name).to.be.equal(name)

      assert.equal(4,4,'Actual and Expected is fine')
      assert.strictEqual(6,46,'Not strickly equal')
})
})