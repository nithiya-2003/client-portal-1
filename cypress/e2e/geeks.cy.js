describe('GeeksforGeeks Website Test', () => {
  it('should open the GeeksforGeeks homepage', () => {
    // Visit GeeksforGeeks homepage
    cy.visit('https://www.geeksforgeeks.org/');

    // Check if the page title contains "GeeksforGeeks"
    cy.title().should('include', 'GeeksforGeeks');

    // Verify that the GeeksforGeeks logo is visible
    cy.get('img[alt="GeeksforGeeks"]').should('be.visible');
  });
});
