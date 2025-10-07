import DemoQAHomePage from "../support/pages/DemoQAHomePage";


describe('Demo QA Website  ElementTests-check', () => {
  const homePage = new DemoQAHomePage();

  it('should open the Demo QA homepage element radio', () => {
    homePage.visitHome();
    homePage.verifyUrl();
    cy.contains('.card-body h5', 'Elements').click();
    cy.url().should('include', 'elements');
    cy.xpath('//div[@id="app"]/div/div/div/div/div/div/div/div/ul//li/span[@class="text" and text()="Check Box"]').click();
    cy.xpath('//div[@class="check-box-tree-wrapper"]//ol/li[1]/span/button[1]').click();

    //inside the tree three options should be visible
    cy.xpath('//div[@class="check-box-tree-wrapper"]//ol//ol').should('be.visible');

    //checking the home checkbox should check all the options below it
    cy.xpath('//div[@class="check-box-tree-wrapper"]//ol/li//input[@id="tree-node-home"]').check({ force: true }).should('be.checked');
    const expectedOptions = [
      '//div[@class="check-box-tree-wrapper"]//ol/li//input[@id="tree-node-documents"]',
      '//div[@class="check-box-tree-wrapper"]//ol/li//input[@id="tree-node-downloads"]',
      '//div[@class="check-box-tree-wrapper"]//ol/li//input[@id="tree-node-desktop"]'
    ];
    expectedOptions.forEach((option) => {
      cy.xpath(option).should('be.checked');
    });

    //unchecking the home checkbox should uncheck all the options below it
    cy.xpath('//div[@class="check-box-tree-wrapper"]//ol/li//input[@id="tree-node-home"]').uncheck({ force: true }).should('not.be.checked');
    expectedOptions.forEach((option) => {
      cy.xpath(option).should('not.be.checked');
    });
  });

  it('should Expand the Check Box', () => {
    homePage.visitHome();
    homePage.verifyUrl();
    cy.contains('.card-body h5', 'Elements').click();
    cy.url().should('include', 'elements');
    cy.xpath('//div[@id="app"]/div/div/div/div/div/div/div/div/ul//li/span[@class="text" and text()="Check Box"]').click();

    // Click all expand/caret buttons to reveal all checkboxes
    cy.get('button[title="Expand all"], button[aria-label="Expand all"], button.rct-collapse').each($btn => {
      cy.wrap($btn).click({ force: true });
    });
    cy.wait(500); // Wait for the tree to fully expand

    // Wait for the tree to expand
    cy.xpath('//div[@class="react-checkbox-tree rct-icons-fa4"]/ol/li/ol').should('be.visible');

    // All child checkboxes should be visible
    const expectedOptions = [
      '//div[@class="check-box-tree-wrapper"]//ol//li//input[@id="tree-node-desktop"]',
      '//div[@class="check-box-tree-wrapper"]//ol//li//input[@id="tree-node-documents"]',
      '//div[@class="check-box-tree-wrapper"]//ol//li//input[@id="tree-node-downloads"]'
    ];
    expectedOptions.forEach((option) => {
      cy.xpath(option).should('be.visible');
    });

    // the inner child should be visible
    const innerchild = [
      '//div[@class="check-box-tree-wrapper"]//ol//li//input[@id="tree-node-workspace"]',
      '//div[@class="check-box-tree-wrapper"]//ol//li//input[@id="tree-node-office"]',
      '//div[@class="check-box-tree-wrapper"]//ol//li//input[@id="tree-node-notes"]',
      '//div[@class="check-box-tree-wrapper"]//ol//li//input[@id="tree-node-commands"]',
      '//div[@class="check-box-tree-wrapper"]//ol//li//input[@id="tree-node-react"]',
      '//div[@class="check-box-tree-wrapper"]//ol//li//input[@id="tree-node-angular"]',
      '//div[@class="check-box-tree-wrapper"]//ol//li//input[@id="tree-node-veiw"]',
      '//div[@class="check-box-tree-wrapper"]//ol//li//input[@id="tree-node-public"]',
      '//div[@class="check-box-tree-wrapper"]//ol//li//input[@id="tree-node-private"]',
      '//div[@class="check-box-tree-wrapper"]//ol//li//input[@id="tree-node-classified"]',
      '//div[@class="check-box-tree-wrapper"]//ol//li//input[@id="tree-node-general"]',
      '//div[@class="check-box-tree-wrapper"]//ol//li//input[@id="tree-node-wordFile"]',
      '//div[@class="check-box-tree-wrapper"]//ol//li//input[@id="tree-node-excelFile"]'
    ];
    innerchild.forEach((option) => {
      cy.xpath(option).should('be.visible');
    });
  });
});

