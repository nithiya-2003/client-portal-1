import DemoQAHomePage from "../support/pages/DemoQAHomePage";

describe('Interaction Tests', () => {
    const homePage = new DemoQAHomePage();

  // ✅ Helper: Navigate to Widgets page (stable navigation)
  const openInteraction = () => {
    homePage.visitHome();
    homePage.verifyUrl();

    cy.contains('.card-body h5', 'Book Store Application')
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });

 
    cy.wait(500);
  };
    it('Log initems', () => {
        openInteraction()  ;
        cy.contains('span', 'Login').click();
        cy.xpath('//input[@id="userName"]').type('testuser1');
        cy.xpath('//input[@id="password"]').type('Test@1234');
        cy.xpath('//button[@id="login"]').click();  
        cy.url().should('include', 'profile');
        cy.xpath('//div[@class="rt-tbody"]/div[1]/div/div[2]').should('have.text','Git Pocket Guide');
        cy.xpath('//div[@class="rt-tbody"]/div[2]/div/div[2]').should('have.text','Learning JavaScript Design Patterns');
        cy.xpath('//div[@class="rt-tbody"]/div[3]/div/div[2]').should('have.text','Designing Evolvable Web APIs with ASP.NET');
        cy.xpath('//div[@class="rt-tbody"]/div[4]/div/div[2]').should('have.text','Speaking JavaScript');
        cy.xpath('//div[@class="rt-tbody"]/div[5]/div/div[2]').should('have.text','You Don\'t Know JS');
        cy.xpath('//div[@class="rt-tbody"]/div[6]/div/div[2]').should('have.text','Programming JavaScript Applications');
        cy.xpath('//button[@    id="gotoStore"]').click();
        cy.url().should('include', 'books');
        cy.xpath('//input[@id="searchBox"]').type('JavaScript');
        cy.xpath('//div[@class="rt-tbody"]/div[1]/div/div[2]').should('have.text','Learning JavaScript Design Patterns');
        cy.xpath('//div[@class="rt-tbody"]/div[2]/div/div[2]').should('have.text','Speaking JavaScript');
        cy.xpath('//div[@class="rt-tbody"]/div[3]/div/div[2]').should('have.text','You Don\'t Know JS');
        cy.xpath('//div[@class="rt-tbody"]/div[4]/div/div[2]').should('have.text','Programming JavaScript Applications');
        cy.xpath('//a[text()="Learning JavaScript Design Patterns"]').click();
        cy.url().should('include', '9781449331818');
        cy.xpath('//button[@id="addNewRecordButton"]').click();       



});
it('Log in with incredential   items', () => {
    openInteraction()  ;
    cy.contains('span', 'Login').click();
    cy.xpath('//input[@id="userName"]').type('testuser12');
    cy.xpath('//input[@id="password"]').type('Test@1234');
    cy.xpath('//button[@id="login"]').click();  
    cy.url().should('include', 'profile');
    cy.xpath('//div[@class="rt-tbody"]/div[1]/div/div[2]').should('not.exist');
    cy.xpath('//div[@class="rt-tbody"]/div[2]/div/div[2]').should('not.exist');
    cy.xpath('//div[@class="rt-tbody"]/div[3]/div/div[2]').should('not.exist');
    cy.xpath('//div[@class="rt-tbody"]/div[4]/div/div[2]').should('not.exist');
    cy.xpath('//div[@class="rt-tbody"]/div[5]/div/div[2]').should('not.exist');
    cy.xpath('//div[@class="rt-tbody"]/div[6]/div/div[2]').should('not.exist');
    cy.xpath('//button[@    id="gotoStore"]').click();
    cy.url().should('include', 'books');
    cy.xpath('//input[@id="searchBox"]').type('JavaScript');
    cy.xpath('//div[@class="rt-tbody"]/div[1]/div/div[2]').should('not.exist');
    cy.xpath('//div[@class="rt-tbody"]/div[2]/div/div[2]').should('not.exist');
    cy.xpath('//div[@class="rt-tbody"]/div[3]/div/div[2]').should('not.exist');
    cy.xpath('//div[@class="rt-tbody"]/div[4]/div/div[2]').should('not.exist');
    cy.xpath('//a[text()="Learning JavaScript Design Patterns"]').should('not.exist');
});


});