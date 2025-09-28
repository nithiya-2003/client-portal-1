
import DemoQAHomePage from "../support/pages/DemoQAHomePage";



describe('Demo QA Website  ElementTests', () => {
    const homePage = new DemoQAHomePage()
    it('should open the Demo QA homepage element textbox', () => {
      homePage.visitHome()  ;
      homePage.verifyUrl();
      cy.contains('.card-body h5', 'Elements').click();
      cy.url().should('include', 'elements');
      cy.xpath('//div[@id="app"]/div/div/div/div/div/div/div/div/ul//li/span[@class="text" and text()="Text Box"]').click();
      cy.xpath('//div[@id="app"]/div/div/div/div[2]/div[2]/form[@id="userForm"]/div[1]/div[2]/input[@id="userName"]').type("hello").wait(2000).should('not.have.value', 'hellos');
      cy.xpath('//div[@id="app"]/div/div/div/div[2]/div[2]/form[@id="userForm"]/div[1]/div[2]/input[@id="userName"]').should('have.attr', 'placeholder', 'Full Name');
      cy.xpath('//div[@id="app"]/div/div/div/div[2]/div[2]/form[@id="userForm"]/div[2]/div[2]/input[@id = "userEmail"]').type("abc@gmail.com").wait(2000).should('have.value','abc@gmail.com')
      cy.xpath('//div[@class="body-height"]/div/div//button[@id="submit"]').click();
      cy.xpath('//div[@class="body-height"]/div/div//p[@id="name"]').should('have.text', 'Name:hello');
      cy.xpath('//div[@class="body-height"]/div/div//p[@id="email"]').should('have.text', 'Email:abc@gmail.com');
    }

    )
})














//     cy.get('body > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > h5:nth-child(1)')
  // .should('have.text', 'Element')  
    // cy.get('body >div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)> h5:nth-Children(1)').click()

 

 //cy.xpath('/html/body/div[2]/div/div/div[2]/div/div[1]/div/div[1]/h5').click()
    //cy.contains('.card- ̰body h5', 'Elements').click()
   // cy.url().should('include', 'elements')

       // cy.contains('.element-list.collapse.show li', 'Text Box').click()
    //cy.contains('#item-0', 'Text Box').click()
    //cy.xpath('//*[@id="item-0"]').click()
    //*[@id="item-0"]
   // cy.xpath('//div[@id="app"]/div/div/div/div/div/div/div/div/ul//li/span[@class= "text"]').click()
 