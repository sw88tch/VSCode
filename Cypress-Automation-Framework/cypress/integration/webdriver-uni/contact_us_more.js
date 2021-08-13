/// <reference types="Cypress" />

describe("Test Contacs Us form via Webdriver Uni", () => {
    before(function() {
        cy.fixture('example').then(function(data) {
           // this.data = data
           globalThis.data = data
        })
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        // cypress code
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        // cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("Bowey")
        cy.get('[name="email"]').type("joebowey@ya.hoo")
        cy.get('textarea.feedback-input').type("Comment for this field")
        cy.get('[type="submit"]').click()
    })

    it.only("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        // cypress code
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("Bowey")
        cy.get('textarea.feedback-input').type("Comment for this field")
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
    })
})