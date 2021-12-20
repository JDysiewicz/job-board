/// <reference types="cypress" />
describe("Index page", () => {
	it("loading spinner appears", () => {
		cy.visit("/");
		cy.get('[role="progressbar"]').should("exist");
	});

	it("table appears after loading spinner", () => {
		cy.visit("/");
		cy.get('[role="progressbar"]').should("exist");
		cy.get('[role="table"]', { timeout: 5000 }).should("exist");
	});

	it("table contains some data", () => {
		cy.visit("/");
		cy.get('[role="table"]', { timeout: 5000 }).should("exist");

		// would look for test API data here instead of length of data
		cy.get("tr").should("have.length.above", 2);

		// checkmarks/cross
		cy.get('[role="img"]').should("exist");
	});
});
