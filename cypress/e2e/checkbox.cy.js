
import DemoQAHomePage from "../support/pages/DemoQAHomePage";


describe('Demo QA Website  ElementTests-check', () => {
    const homePage = new DemoQAHomePage()
    it('should open the Demo QA homepage element radio', () => {
      homePage.visitHome()  ;
      homePage.verifyUrl();
      cy.contains('.card-body h5', 'Elements').click();
      cy.url().should('include', 'elements');
      cy.xpath('//div[@id="app"]/div/div/div/div/div/div/div/div/ul//li/span[@class="text" and text()="Check Box"]').click();
      cy.xpath('//div[@class="check-box-tree-wrapper"]//ol/li[1]/span/button[1]').click();

      //inside the tree three options should be visible


      cy.xpath('//div[@class="check-box-tree-wrapper"]//ol//ol').should('be.visible');

      //checking the home checkbox should check all the options below it
      cy.xpath('//div[@class="check-box-tree-wrapper"]//ol/li//input[@ID="tree-node-home"]').check().should('be.checked');
      const expectedOptions = ['//div[@class="check-box-tree-wrapper"]//ol/li//input[@ID="tree-node-documents','//div[@class="check-box-tree-wrapper"]//ol/li//input[@ID="tree-node-downloads',
      '//div[@class="check-box-tree-wrapper"]//ol/li//input[@ID="tree-node-desktop'
      ];
      expectedOptions.forEach((option) => {

          cy.xpath(option).should('be.checked');
      });
      //unchecking the home checkbox should uncheck all the options below it  
      cy.xpath('//div[@class="check-box-tree-wrapper"]//ol/li//input[@ID="tree-node-home"]').uncheck().should('not.be.checked');
      expectedOptions.forEach((option) => {

          cy.xpath(option).should('not.be.checked');

      });
    });



      it('should Expand the Check Box', () => {
      homePage.visitHome()  ;
      homePage.verifyUrl();
      cy.contains('.card-body h5', 'Elements').click();
      cy.url().should('include', 'elements');
      cy.xpath('//div[@id="app"]/div/div/div/div/div/div/div/div/ul//li/span[@class="text" and text()="Check Box"]').click();
 
        cy.xpath('//div[@class="rct-options"]//button[1]').check({ force: true });
        cy.xpath('//div[@class="react-checkbox-tree rct-icons-fa4"]/ol/li/ol').should('be.visible');
        //have all the chile elements visible
        const expectedOptions = ['//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-desktop"]',
          '//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-documents"]',
          '//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-downloads"]'
        ];
        expectedOptions.forEach((option) => {
          


            cy.xpath(option).should('be.visible');
        }); 

        //the inner child should be visible
        cy.xpath('//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-workspace"]').should('be.visible');
        cy.xpath('//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-office"]').should('be.visible'); 

        //inner child of  desktop should be visible
        cy.xpath('//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-notes"]').should('be.visible');
        cy.xpath('//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-commands"]').should('be.visible'); 

        //similarly fro documents
        cy.xpath('//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-react"]').should('be.visible');
        cy.xpath('//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-angular"]').should('be.visible'); 
        cy.xpath('//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-veiw"]').should('be.visible'); 

       // office chils
        cy.xpath('//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-public"]').should('be.visible');
        cy.xpath('//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-private"]').should('be.visible'); 
        cy.xpath('//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-classified"]').should('be.visible'); 
        cy.xpath('//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-general"]').should('be.visible');

        //inner child of  downloads should be visible
        cy.xpath('//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-wordFile"]').should('be.visible');
        cy.xpath('//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-excelFile"]').should('be.visible');  


     const innerchild = ['//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-workspace"]',
          '//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-office"]',
          '//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-notes"]',
          '//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-commands"]',
          '//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-react"]',
          '//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-angular"]',
          '//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-veiw"]',
          '//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-public"]',
          '//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-private"]',
          '//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-classified"]',
          '//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-general"]',
          '//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-wordFile"]',
          '//div[@class="check-box-tree-wrapper"]//ol//li//input[@ID="tree-node-excelFile"]'
        ];
        innerchild.forEach((option) => {     
            cy.xpath(option).should('be.visible');
        })
      
    });
  })

