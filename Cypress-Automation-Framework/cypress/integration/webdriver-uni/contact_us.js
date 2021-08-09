/// <reference types="Cypress" />

describe("Test Contacs Us form via Webdriver Uni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        // cypress code
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("Bowey")
        cy.get('[name="email"]').type("joebowey@ya.hoo")
        cy.get('textarea.feedback-input').type("Comment for this field")
        cy.get('[type="submit"]').click()
    })

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        // cypress code
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("Bowey")
        cy.get('textarea.feedback-input').type("Comment for this field")
        cy.get('[type="submit"]').click()
    })
})