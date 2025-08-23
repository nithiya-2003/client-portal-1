describe('Open YouTube', () => {
  it('Visits YouTube homepage', () => {
    // Visit YouTube
    cy.visit('https://www.youtube.com')

    // Check that the title contains "YouTube"
    cy.title().should('include', 'YouTube')
  })
})
