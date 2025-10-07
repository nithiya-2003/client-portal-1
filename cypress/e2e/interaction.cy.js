

import DemoQAHomePage from "../support/pages/DemoQAHomePage";

describe('Interaction Tests', () => {
    const homePage = new DemoQAHomePage();

  // ✅ Helper: Navigate to Widgets page (stable navigation)
  const openInteraction = () => {
    homePage.visitHome();
    homePage.verifyUrl();

    cy.contains('.card-body h5', 'Interactions')
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });

 
    cy.wait(500);
  };


  it('should navigate through nested menu items', () => {
    openInteraction();
    cy.xpath('//span[text()="Sortable"]').click({ force: true });
    cy.url().should('include', 'sortable');

    // Verify main menu is visible
cy.xpath('//div[@class="list-group-item list-group-item-action" and text()="One"]')
    .should('be.visible');


});


});


describe('Demo QA Website  selectable', () => {
    const homePage = new DemoQAHomePage()

    const openselect= () => {
    homePage.visitHome();
    homePage.verifyUrl();

    cy.contains('.card-body h5', 'Interactions')
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });

 
    cy.wait(500);
  };

    it('should open the selectable if we select it should changesd into blue', () => {

        openselect()  ;

        cy.contains('span', 'Selectable').click();

        cy.xpath('//li[normalize-space()="Cras justo odio"]').click();
        cy.xpath('//li[normalize-space()="Cras justo odio"]').should('have.class', 'active');


    }   );
    it('should select multiple items and verify they are active', () => {

        openselect();

        cy.contains('span', 'Selectable').click();

        // Select multiple items
        cy.xpath('//li[normalize-space()="Cras justo odio"]').click().should('have.class', 'active');
        cy.xpath('//li[normalize-space()="Dapibus ac facilisis in"]').click().should('have.class', 'active');
        cy.xpath('//li[normalize-space()="Morbi leo risus"]').click().should('have.class', 'active');
        
        // Verify all selected items are active     
        
});





});
/// <reference types="cypress" />

import 'cypress-drag-drop';

describe.only('Demo QA Website Dragabble', () => {
    const homePage = new DemoQAHomePage();

    // Helper function to open Interactions page
    const openInteractions = () => {
        homePage.visitHome();
        homePage.verifyUrl();

        cy.contains('.card-body h5', 'Interactions')
            .scrollIntoView()
            .should('be.visible')
            .click({ force: true });

        cy.wait(500);
    };

    it('should open Dragabble and move the element', () => {
        // Open Interactions page
        openInteractions();

        // Click on Dragabble tab (force in case it's hidden)
        cy.contains('span', 'Dragabble').click({ force: true });



        // Store initial position
       
    });
});