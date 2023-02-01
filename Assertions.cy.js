//Implicit commands are built in assertions which include should() and  and();
//Explicit commands are not built in assertions which include expect() and assert();

describe("Assertions Practice", () => {
    it("Simple Assertion", () => {
      cy.visit("https://www.lonestar.edu/testing-cypress.htm");
      cy.contains('Schedule An Appointment').click()


})
})