
import DemoQAHomePage from "../support/pages/DemoQAHomePage";


describe('Demo QA Website  ElementTests-check', () => {
    const homePage = new DemoQAHomePage()
    it('should open the Demo QA homepage element radio', () => {
      homePage.visitHome()  ;
      homePage.verifyUrl();
      cy.contains('.card-body h5', 'Elements').click();
      cy.url().should('include', 'elements');
      cy.xpath('//div[@id="app"]/div/div/div/div/div/div/div/div/ul//li/span[@class="text" and text()="Web Tables"]').click();
      cy.xpath('//div[@class="web-tables-wrapper"]//button[@id="addNewRecordButton"]').click();
      cy.xpath('//form[@id="userForm"]/div[@id="firstName-wrapper"]//input').type('John');
      cy.xpath('//form[@id="userForm"]/div[@id="lastName-wrapper"]//input').type('Doe');
      cy.xpath('//form[@id="userForm"]/div[@id="userEmail-wrapper"]//input').type('abc@gmail.com')
      cy.xpath('//form[@id="userForm"]/div[@id="age-wrapper"]//input').type('30');
      cy.xpath('//form[@id="userForm"]/div[@id="salary-wrapper"]//input').type('50000');
        cy.xpath('//form[@id="userForm"]/div[@id="department-wrapper"]//input').type('Engineering');

      cy.xpath('//button[@id="submit"]').click().wait(2000);  
   
      });
    }
    )

