import DemoQAHomePage from '../support/pages/DemoQAHomePage'

describe('Demo QA Website Tests', () => {
  const homePage = new DemoQAHomePage()

  it('should open the Demo QA homepage', () => {
    homePage.visitHome()
  })

  it('should have the correct url', () => {
    homePage.visitHome()
    homePage.verifyUrl()
  })
})


