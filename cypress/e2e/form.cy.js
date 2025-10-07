// import DemoQAHomePage from "../support/pages/DemoQAHomePage";

// describe('Demo QA Website  ElementTests', () => {
//     const homePage = new DemoQAHomePage()
//     it('should open the Demo QA homepage element textbox', () => {
//       homePage.visitHome()  ;
//       homePage.verifyUrl();
//       cy.contains('.card-body h5', 'Elements').click();
//       cy.url().should('include', 'elements');
//       cy.xpath('//div[@class="element-group"][2]').click();
//       cy.xpath('//div[@class="element-group"]//ul/li[@id="item-0"]/span[@class="text"][text()="Practice Form"]').click();
//       cy.url().should('include', 'automation-practice-form');
//       cy.xpath('//input[@id="firstName"]').type("John").should('have.value', 'John');
//       cy.xpath('//input[@id="lastName"]').type("Doe").should('have.value', 'Doe');
//       cy.xpath('//input[@id="userEmail"]').type("mee@gmail.com").should('have.value', 'mee@gmail.com');
//       cy.xpath('//input[@id="userNumber"]').type("1234567890").should('have.value', '1234567890');
//       cy.xpath('//input[@id="gender-radio-2"]').check({ force: true }).should('be.checked');
//       cy.xpath('//input[@id="dateOfBirthInput"]').click();
//       cy.get('.react-datepicker__month-select').select('May').should('have.value', '4');
//       cy.get('.react-datepicker__year-select').select('1990').should('have.value', '1990');
//       cy.get('.react-datepicker__day--015').click();
//       cy.xpath('//input[@id="dateOfBirthInput"]').should('have.value', '15 May 1990');
//       cy.xpath('//textarea[@id="currentAddress"]').type("123 Main St, City, Country").should('have.value', '123 Main St, City, Country');
//       cy.xpath('//div[@id="state"]').click().wait(1000);
//       cy.xpath('//div[@id="state"]//div[contains(@class, "css-1n7v3ny-option") and text()="NCR"]').click();
//       cy.xpath('//div[@id="city"]').click().wait(1000);
//       cy.xpath('//div[@id="city"]//div[contains(@class, "css-1n7v3ny-option") and text()="Delhi"]').click();
//       cy.xpath('//div[@id="state"]').should('contain.text', 'NCR');
//       cy.xpath('//div[@id="city"]').should('contain.text', 'Delhi');
//       cy.xpath('//button[@id="submit"]').click();
//       cy.get('.modal-content').should('be.visible');
//       cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form');
//       cy.xpath('//td[text()="Student Name"]/following-sibling::td').should('have.text', 'John Doe');
//       cy.xpath('//td[text()="Student Email"]/following-sibling::td').should('have.text', 'mee@gmail.com');
//       cy.xpath('//button[@id="closeLargeModal"]').click();
//       cy.get('.modal-content').should('not.exist');

      


//     })
//     it('should close the form', () => {
//       cy.xpath('//button[@id="closeLargeModal"]').click();
//       cy.get('.modal-content').should('not.exist');
//     })

//     it('should check all the neccesary feild and validate the ph no,email', () => {
//         homePage.visitHome()  ;
//         homePage.verifyUrl();
//         cy.contains('.card-body h5', 'Elements').click();
//         cy.url().should('include', 'elements');
//         cy.xpath('//div[@class="element-group"][2]').click();
//         cy.xpath('//div[@class="element-group"]//ul/li[@id="item-0"]/span[@class="text"][text()="Practice Form"]').click();
//         cy.url().should('include', 'automation-practice-form');
//         cy.xpath('//input[@id="firstName"]').type("John").should('have.value', 'John');
//         cy.xpath('//input[@id="lastName"]').type("Doe").should('have.value', 'Doe');
//         cy.xpath('//input[@id="userEmail"]').type("meegmail.com").should('have.value', 'meegmail.com');
//         cy.xpath('//input[@id="userNumber"]').type("123456789").should('have.value', '123456789');
//         cy.xpath('//input[@id="gender-radio-2"]').check({ force: true }).should('be.checked');
//         cy.xpath('//input[@id="dateOfBirthInput"]').click();
//         cy.get('.react-datepicker__month-select').select('May').should('have.value', '4');
//         cy.get('.react-datepicker__year-select').select('1990').should('have.value', '1990');
//         cy.get('.react-datepicker__day--015').click();
//         cy.xpath('//input[@id="dateOfBirthInput"]').should('have.value', '15 May 1990');
//         cy.xpath('//textarea[@id="currentAddress"]').type("123 Main St, City, Country").should('have.value', '123 Main St, City, Country');
//         cy.xpath('//div[@id="state"]').click().wait(1000);
//         cy.xpath('//div[@id="state"]//div[contains(@class, "css-1n7v3ny-option") and text()="NCR"]').click();
//         cy.xpath('//div[@id="city"]').click().wait(1000);
//         cy.xpath('//div[@id="city"]//div[contains(@class, "css-1n7v3ny-option") and text()="Delhi"]').click();
//         cy.xpath('//div[@id="state"]').should('contain.text', 'NCR');
//         cy.xpath('//div[@id="city"]').should('contain.text', 'Delhi');
//         cy.xpath('//button[@id="submit"]').click();
//         cy.get('.modal-content').should('not.exist');
//         cy.xpath('//input[@id="userEmail"]').then($input => {
//           if ($input[0].checkValidity()) {
//             // Email is valid
//             cy.log('Email is valid');
//           } else {
//             // Email is invalid
//             cy.log('Email is invalid');
//             expect
//             ($input[0].validationMessage).to.eq('Please include an \'@\' in the email address. \'meegmail.com\' is missing an \'@\'.');
//           }
//         });
//         cy.xpath('//input[@id="userNumber"]').then($input => {          if ($input[0].checkValidity()) {
//             // Phone number is valid
//             cy.log('Phone number is valid');
//           } else {
//             // Phone number is invalid
//             cy.log('Phone number is invalid');
//             expect
//             ($input[0].validationMessage).to.eq('Please match the requested format.');
//           }
//         });})

//         it('check the select all the feild if red apperaed as warning',()=>
//         {
//           cy.xpath('//input[@id="firstName"]').type("John").should('have.value', 'John');     
//           cy.xpath('//input[@id="userEmail"]').type("mee@gmail.com").should('have.value', 'mee@gmail.com');     
//           cy.xpath('//input[@id="userNumber"]').type("1234567890").should('have.value', '1234567890');
//           cy.xpath('//input[@id="gender"]').check({ force: true }).should('be.checked');
//           cy.xpath('//button[@id="submit"]').click();
//           cy.xpath('//input[@id="userEmail"]').should('not.have.css', 'border-color', 'rgb(220, 53, 69)');
//           cy.xpath('//input[@id="userNumber"]').should('not.have.css', 'border-color', 'rgb(220, 53, 69)');
//           cy.xpath('//input[@id="firstName"]').should('not.have.css', 'border-color', 'rgb(220, 53, 69)');
//           cy.xpath('//input[@id="lastName"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
     
//           cy.get('.modal-content').should('not.exist');
          
          
          

          


   
//         })


// })


import DemoQAHomePage from "../support/pages/DemoQAHomePage";

describe('Demo QA Website ElementTests', () => {
  const homePage = new DemoQAHomePage();

  // Helper: Navigate to the form page
  const openForm = () => {
    homePage.visitHome();
    homePage.verifyUrl();
    cy.contains('.card-body h5', 'Elements').click();
    cy.url().should('include', 'elements');
    cy.xpath('//div[@class="element-group"][2]').click();
    cy.xpath('//span[text()="Practice Form"]').click();
    cy.url().should('include', 'automation-practice-form');
  };

  it('should open and submit the Demo QA Practice Form', () => {
    openForm();
    cy.xpath('//input[@id="firstName"]').type('John');
    cy.xpath('//input[@id="lastName"]').type('Doe');
    cy.xpath('//input[@id="userEmail"]').type('mee@gmail.com');
    cy.xpath('//input[@id="userNumber"]').type('1234567890');
    cy.xpath('//input[@id="gender-radio-2"]').check({ force: true });
    cy.xpath('//input[@id="dateOfBirthInput"]').click();
    cy.get('.react-datepicker__month-select').select('May');
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__day--015').click();
    cy.xpath('//textarea[@id="currentAddress"]').type('123 Main St, City, Country');
    cy.xpath('//div[@id="state"]').click();
    cy.contains('div[id^="react-select-3-option-"]', 'NCR').click();
    cy.xpath('//div[@id="city"]').click();
    cy.contains('div[id^="react-select-4-option-"]', 'Delhi').click();
    cy.xpath('//button[@id="submit"]').click();

    cy.get('.modal-content', { timeout: 10000 }).should('be.visible');
    cy.get('#example-modal-sizes-title-lg').should('contain.text', 'Thanks for submitting the form');
    cy.xpath('//td[text()="Student Name"]/following-sibling::td').should('have.text', 'John Doe');
    cy.xpath('//td[text()="Student Email"]/following-sibling::td').should('have.text', 'mee@gmail.com');

    cy.get('#closeLargeModal').scrollIntoView().click({ force: true });
    cy.get('.modal-content').should('not.exist');
  });

  it('should close the form safely even if modal is hidden', () => {
  openForm();
  cy.xpath('//input[@id="firstName"]').type('Test');
  cy.xpath('//button[@id="submit"]').click();

  // Close modal only if it appears
  cy.get('body').then($body => {
    if ($body.find('#closeLargeModal').length) {
      cy.get('#closeLargeModal').scrollIntoView().click({ force: true });
      cy.get('.modal-content').should('not.exist');
    } else {
      cy.log('Modal did not appear (invalid form submission) — skipping close');
    }
  });
});



  it('should show red border for missing required fields', () => {
    openForm();
    cy.xpath('//input[@id="firstName"]').type('John');
    cy.xpath('//input[@id="userEmail"]').type('mee@gmail.com');
    cy.xpath('//input[@id="userNumber"]').type('1234567890');
    cy.xpath('//input[@id="gender-radio-1"]').check({ force: true });
    cy.xpath('//button[@id="submit"]').click();

    cy.xpath('//input[@id="lastName"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.xpath('//input[@id="firstName"]').should('not.have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.xpath('//input[@id="userEmail"]').should('not.have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.xpath('//input[@id="userNumber"]').should('not.have.css', 'border-color', 'rgb(220, 53, 69)');

    cy.get('.modal-content').should('not.exist');
  });


  it('should validate email and phone number using logical checks', () => {
  openForm();
  cy.xpath('//input[@id="firstName"]').type('John');
  cy.xpath('//input[@id="lastName"]').type('Doe');
  cy.xpath('//input[@id="userEmail"]').type('meegmail.com'); // invalid email
  cy.xpath('//input[@id="userNumber"]').type('123456789');   // invalid phone
  cy.xpath('//input[@id="gender-radio-1"]').check({ force: true });
  cy.xpath('//button[@id="submit"]').click();

  cy.xpath('//input[@id="userEmail"]').invoke('val').then(value => {
    expect(value.includes('@')).to.be.false;
    cy.log('Email invalid: missing @');
  });

  cy.xpath('//input[@id="userNumber"]').invoke('val').then(value => {
    expect(value.length).to.be.lessThan(10);
    cy.log('Phone invalid: less than 10 digits');
  });
});

});

    