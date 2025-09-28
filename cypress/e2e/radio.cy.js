import DemoQAHomePage from "../support/pages/DemoQAHomePage";

describe('Demo QA Website  ElementTests', () => {
    const homePage = new DemoQAHomePage()
    it('should open the Demo QA homepage element textbox', () => {
      homePage.visitHome()  ;
      homePage.verifyUrl();
      cy.contains('.card-body h5', 'Elements').click();
      cy.url().should('include', 'elements');
      cy.xpath('//div[@id="app"]/div/div/div/div/div/div/div/div/ul//li/span[@class="text" and text()="Text Box"]').click();
     
    }

    )
})



describe('Demo QA Website  ElementTests-check', () => {
    const homePage = new DemoQAHomePage()
    it('should open the Demo QA homepage element radio', () => {
      homePage.visitHome()  ;
      homePage.verifyUrl();
      cy.contains('.card-body h5', 'Elements').click();
      cy.url().should('include', 'elements');
      cy.xpath('//div[@id="app"]/div/div/div/div/div/div/div/div/ul//li/span[@class="text" and text()="Radio Button"]').click();
      cy.xpath('//input[@id="yesRadio"]').check({ force: true }).should('be.checked');
      cy.xpath('//input[@id="impressiveRadio"]').check({ force: true }).should('be.checked');
      
   
    }
    )
})

//label[normalize-space()='Impressive']