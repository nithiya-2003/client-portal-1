



import DemoQAHomePage from "../support/pages/DemoQAHomePage";

describe('Demo QA Website AccordianTests', () => {
  const homePage = new DemoQAHomePage();

  // ✅ Helper: Navigate to Widgets page (stable navigation)
  const openWidgets = () => {
    homePage.visitHome();
    homePage.verifyUrl();

    cy.contains('.card-body h5', 'Widgets')
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });

    // Wait for Widgets page to load properly
    cy.url().should('include', '/widgets');
    cy.wait(500);
  };
it('should fill out and submit the practice form', () => {
  openWidgets();

  // Click "Accordian"
  cy.xpath('//span[text()="Accordian"]').click({ force: true });

  // Section 1
  cy.xpath('//div[@id="section1Heading"]').click({ force: true });
  
  cy.xpath('//div[@id="section1Content"]')
    .should('be.visible');

  // Section 2
  cy.xpath('//div[@id="section2Heading"]').click({ force: true });
  cy.xpath('//div[@id="section2Content"]')
    .should('be.visible');

  // Section 3
  cy.xpath('//div[@id="section3Heading"]').click({ force: true });
  cy.xpath('//div[@id="section3Content"]')
    .should('be.visible');
});

  // Test 2
  it('should interact with one section, others should not be visible', () => {
    openWidgets();
      cy.xpath('//span[text()="Accordian"]').click({ force: true });


    cy.xpath('//span[text()="Accordian"]')
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });

    cy.xpath('//div[@id="section2Heading"]').click();
    cy.xpath('//div[@id="section2Content"]//p').should('be.visible');
    cy.xpath('//div[@id="section1Content"]//p').should('not.be.visible');
    cy.xpath('//div[@id="section3Content"]//p').should('not.be.visible');
  });

  // Test 3
  it('should verify all accordion section headers are present and clickable', () => {
    openWidgets();
  cy.xpath('//span[text()="Accordian"]').click({ force: true });

    cy.xpath('//span[text()="Accordian"]')
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });

    const sections = ['section1Heading', 'section2Heading', 'section3Heading'];

    sections.forEach(id => {
      cy.xpath(`//div[@id="${id}"]`)
        .scrollIntoView()
        .should('exist')
        .and('be.visible')
        .click();
    });
  });
});



describe('Demo QA Website Auto Complete Tests', () => {
    const homePage = new DemoQAHomePage();
    // ✅ Helper: Navigate to Widgets page (stable navigation)
    const openWidgets = () => {
      homePage.visitHome();
      homePage.verifyUrl();     
        cy.contains('.card-body h5', 'Widgets')
        .scrollIntoView()
        .should('be.visible')
        .click({ force: true });
            
        // Wait for Widgets page to load properly
        cy.url().should('include', '/widgets');
        cy.wait(500);
        };

    
    it('auto complete multiple colors', () => {

            openWidgets();  
            cy.xpath('//span[text()="Auto Complete"]').click({ force: true });
            const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
            colors.forEach(color => {
                cy.get('#autoCompleteMultipleInput')
                  .type(color)
                  .type('{enter}');
                cy.get('.css-12jo7m5').should('contain.text', color);
              });
                // Verify all colors are present
                colors.forEach(color => {
                    cy.xpath(`//div[contains(@class, 'css-12jo7m5') and text()='${color}']`)
                      .should('exist')
                      .and('be.visible');
                  })
                });

            it('remove one color in the multiple color textbox', () => {
    openWidgets();
    cy.xpath('//span[text()="Auto Complete"]').click({ force: true });

    const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
    colors.forEach(color => {
        cy.get('#autoCompleteMultipleInput').type(color).type('{enter}');
    });

   cy.xpath("//div[contains(@class, 'css-12jo7m5') and text()='Green']/following-sibling::div[contains(@class, 'auto-complete__multi-value__remove')]")
  .click({ force: true });

    
});
it('single auto',()=>{
    openWidgets();
    cy.xpath('//span[text()="Auto Complete"]').click({ force: true });
    const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
    colors.forEach(color => {
        cy.get('#autoCompleteSingleInput')
          .clear()
          .type(color)
          .type('{enter}');
        cy.get('#autoCompleteSingleContainer').should('contain.text', color);
      });
       

      cy.xpath('//div[@class="auto-complete__single-value css-1uccc91-singleValue"]').should('have.text','Purple')//div[@id="autoCompleteSingleContainer"]')
});

        });



        describe('Demo QA Website Date Picker Tests', () => {
            const homePage = new DemoQAHomePage();
            // ✅ Helper: Navigate to Widgets page (stable navigation)
            const openWidgets = () => {
              homePage.visitHome();
              homePage.verifyUrl();
                cy.contains('.card-body h5', 'Widgets')
                .scrollIntoView()
                .should('be.visible')
                .click({ force: true });
                    
                // Wait for Widgets page to load properly
                cy.url().should('include', '/widgets');
                cy.wait(500);
                };
    
            
            it('select date from date picker', () => {
    
                    openWidgets();  
                    cy.xpath('//span[text()="Date Picker"]').click({ force: true });
                    cy.xpath('//input[@id="datePickerMonthYearInput"]').click();
                    cy.xpath('//select[@class="react-datepicker__month-select"]').select('5');
                    cy.xpath('//select[@class="react-datepicker__year-select"]').select('1990');
                    cy.xpath('//div[@class="react-datepicker__day react-datepicker__day--015"]').click();
                    cy.xpath('//input[@id="datePickerMonthYearInput"]').should('have.value','06/15/1990');
                    
                  });

                    });



      describe('Demo QA Website Tooltip', () => {
        const homePage = new DemoQAHomePage();
        // ✅ Helper: Navigate to Widgets page (stable navigation)
        const openWidgets = () => {
          homePage.visitHome();
          homePage.verifyUrl();
            cy.contains('.card-body h5', 'Widgets')
            .scrollIntoView()
            .should('be.visible')
            .click({ force: true });
                
            // Wait for Widgets page to load properly
            cy.url().should('include', '/widgets');
            cy.wait(500);
            };
  
        
        it('hover over the button to see tooltip', () => {
  
                openWidgets();  
                cy.xpath('//span[text()="Tool Tips"]').click({ force: true });
                cy.xpath('//button[@id="toolTipButton"]').trigger('mouseover');
                cy.xpath('//div[@class="tooltip-inner"]').should('have.text','You hovered over the Button');
                
              });

              it('hover over the text field to see tooltip', () => {
  
                openWidgets();  
                cy.xpath('//span[text()="Tool Tips"]').click({ force: true });
                cy.xpath('//div[@id="texToolTopContainer"]/a[1]').trigger('mouseover');
                cy.xpath('//div[@class="tooltip-inner"]')
    .should('be.visible')
    .and('have.text', 'You hovered over the Contrary');                
         
                
              });

              it('hover over the contrary link to see tooltip', () => {
  
                openWidgets();  
                cy.xpath('//span[text()="Tool Tips"]').click({ force: true });
                cy.xpath("//div[@id='texToolTopContainer']/a[2]").trigger('mouseover');
                cy.xpath('//div[@class="tooltip-inner"]')
    .should('be.visible')
    .and('have.text', 'You hovered over the 1.10.32');
     });

                });
describe('Demo QA Website Menu', () => {
  const homePage = new DemoQAHomePage();

  const openWidgets = () => {
    homePage.visitHome();
    homePage.verifyUrl();

    cy.contains('.card-body h5', 'Widgets')
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });

    cy.url().should('include', '/widgets');
    cy.wait(1000);
  };

  it('navigate through the menu items', () => {
    openWidgets();
    cy.xpath('//span[text()="Menu"]').click({ force: true });
    cy.wait(1000);

    // ✅ Force submenu to be visible (simulate hover)
    cy.xpath('//ul[@id="nav"]/li[2]/ul').invoke('show');
    cy.xpath('//ul[@id="nav"]/li[2]/ul/li[3]/ul').invoke('show');

    // ✅ Verify visibility now
    cy.xpath('//ul[@id="nav"]/li[2]/ul').should('be.visible');
    cy.xpath('//ul[@id="nav"]/li[2]/ul/li[3]/ul').should('be.visible');

    // Click a nested item to confirm interaction
    cy.xpath('//ul[@id="nav"]/li[2]/ul/li[3]/ul/li[2]').click({ force: true });
  });
});


describe.only('Demo QA Website Menu', () => {


  const homePage = new DemoQAHomePage();

  const openWidgets = () => {
    homePage.visitHome();
    homePage.verifyUrl();

    cy.contains('.card-body h5', 'Widgets')
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });    
    cy.url().should('include', '/widgets');
    cy.wait(1000);
  };

  it('navigate through the menu items', () => {
    openWidgets();
    cy.xpath('//span[text()="Select Menu"]').click({ force: true });
    cy.wait(1000);
    cy.xpath('//div[@id="withOptGroup"]').click();
    cy.xpath('//div[contains(@class,"option") and text()="Group 2, option 1"]').click();
    cy.xpath('//div[@id="withOptGroup"]').should('contain.text','Group 2, option 1');
    cy.xpath('//div[@id="selectOne"]').click();
    cy.xpath('//div[contains(@class,"option") and text()="Dr."]').click();
    cy.xpath('//div[@id="selectOne"]').should('contain.text','Dr.');


  })

});

