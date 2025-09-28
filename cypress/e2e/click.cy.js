
import DemoQAHomePage from "../support/pages/DemoQAHomePage";

describe('Demo QA Website  ElementTests', () => {
    const homePage = new DemoQAHomePage()
    it('should open the Demo QA homepage element textbox', () => {
      homePage.visitHome()  ;
      homePage.verifyUrl();
      cy.contains('.card-body h5', 'Elements').click();
      cy.url().should('include', 'elements');
      cy.xpath('//div[@id="app"]/div/div/div/div/div/div/div/div/ul//li/span[@class="text" and text()="Buttons"]').click();
        cy.xpath('//button[@id="doubleClickBtn"]').dblclick();
        cy.get('#doubleClickMessage').should('be.visible').and('have.text', 'You have done a double click');
        cy.xpath('//button[@id="rightClickBtn"]').rightclick();
        cy.get('#rightClickMessage').should('be.visible').and('have.text', 'You have done a right click');
        cy.xpath('//button[normalize-space()="Click Me"]').click();
        
        cy.get('#dynamicClickMessage').should('be.visible').and('have.text', 'You have done a dynamic click');
        
     
    }

    )
})
