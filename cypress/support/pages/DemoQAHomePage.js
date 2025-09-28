class DemoQAHomePage {
  visitHome() {
    cy.visit('https://demoqa.com/')
  }

  verifyUrl() {
    cy.url().should('eq', 'https://demoqa.com/')
  }
}

export default DemoQAHomePage
