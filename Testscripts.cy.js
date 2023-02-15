//A JavaScript callback (Pass as an argument to another function)is a function which is to be executed after another function has finished execution.
//Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

// Log in to web page
describe("home page", () => {
  it("Login", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',{setTimeout:70000}).type('Admin').click();
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input',{setTimeout:70000}).type('admin123').click();
    cy.get('.oxd-button').click();

// Url text validation    
    cy.url().should("include","dashboard");
    
//select an element from Dropdown list
    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
    cy.get(':nth-child(1) > .oxd-userdropdown-link').click();

// Redirects to New Tab
   // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7")
    //cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').should($heading =>{
    //console.log($heading.text());
    //expect($heading.text().to.eq("Personal Details"),{setTimeout:60000}).should($heading =>{
    //console.log($heading.text());
    //expect($heading.text().to.eq("Personal Details"));  
    
    //search an element from search bar        
    var click=cy.get('.oxd-input').eq('0').click();
    var store=click.type('Time').click();
    })
    })     
//})
//})
