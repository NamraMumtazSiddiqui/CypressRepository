// A design principle which says we should keep separate methods and objects from test script

import  {LoginPage} from "../Pages/Newfile.cy.js";
const lp=new LoginPage()

it('Simplelogin',function ()
{
    lp.navigate("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    lp.username();
    lp.password();
    lp.Loginbutton();

    //cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',{setTimeout:70000}).type('Admin').click();
    //cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input',{setTimeout:70000}).type('admin123').click();
    //cy.get('.oxd-button').click();

}
)