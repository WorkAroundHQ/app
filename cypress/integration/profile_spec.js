import getRandomString from '../../src/tests/helper/get-random-string'

describe('profile', () => {
	it('user can update profile', () => {
		cy.visit('/')
		// login
		cy.get('[type="email"]').type(Cypress.env('CYPRESS_TEST_EMAIL'))
		cy.get('[type="password"]').type(Cypress.env('CYPRESS_TEST_PW'))
		cy.get('.button').click()
		// // click on profile
		cy.get('a[href="#/profile"]').click()
		// // click on edit button
		cy.get('.primary').click()
		// // update fields
		const name = `Cypress-${getRandomString()}`
		const job = getRandomString(10)
		const github = getRandomString(6)
		const bio = getRandomString(24)
		cy.get('#name').clear().type(name)
		cy.get('#job').clear().type(job)
		cy.get('#github').clear().type(github)
		cy.get('.slider').click()
		cy.get('#bio').clear().type(bio)
		// save changes
		cy.get('.primary').click()
		// click to different page
		cy.get('[href="#/articles"]').click()
		// go back to profile
		cy.get('a[href="#/profile"]').click()
		// check values
		cy.get('#name').should('have.value', name)
		cy.get('#job').should('have.value', job)
		cy.get('#github').should('have.value', github)
		cy.get('#bio').should('have.value', bio)
	})
})
