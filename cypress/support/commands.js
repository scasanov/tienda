// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("Login", (productos) => {
  cy.request({
    method: "POST",
    url: "https://api.demoblaze.com/login",
    body:{username: 1}
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});

  Cypress.Commands.add("postCheckLogin", (productos) => {
    cy.request({
      method: "POST",
      url: "https://api.demoblaze.com/check",
      body:{username: 1}
    }).then((response) => {
      expect(response.status).to.eq(200);
    });

    Cypress.Commands.add("postSignup", (productos) => {
      cy.request({
        method: "POST",
        url: "https://api.demoblaze.com/signup",
        body:{username: 1}
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
  });
