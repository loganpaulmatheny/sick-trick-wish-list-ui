describe("Testing the initial load of the page", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/tricks", {
      statusCode: 200,
      fixture: "trick-start-data.json",
    }).visit("http://localhost:3000");
  });

  it("Should display the correct things on load", () => {
    cy.get("h1").should("contain", "Sick Trick Wish List");
  });
  it("Should allow me to provide inputs to the form", () => {
    cy.get("select[name='stance']")
      .select("Switch")
      .get("select[name='stance']")
      .invoke("val")
      .should("equal", "Switch")
      .get("select[name='obstacle']")
      .select("Ledge")
      .get("select[name='obstacle']")
      .invoke("val")
      .should("equal", "Ledge")
      .get("input[name='name']")
      .type("Kickflip")
      .get("input[name='name']")
      .invoke("val")
      .should("equal", "Kickflip")
      .get("input[name='tutorial']")
      .type("testing")
      .get("input[name='tutorial']")
      .invoke("val")
      .should("equal", "testing");
  });
  it("Should display the correct things on load", () => {
    cy.get("h1")
      .should("contain", "Sick Trick Wish List")
      .get("select[name='stance']")
      .select("Switch")
      .get("select[name='stance']")
      .invoke("val")
      .should("equal", "Switch")
      .get("select[name='obstacle']")
      .select("Ledge")
      .get("select[name='obstacle']")
      .invoke("val")
      .should("equal", "Ledge")
      .get("input[name='name']")
      .type("Kickflip")
      .get("input[name='name']")
      .invoke("val")
      .should("equal", "Kickflip")
      .get("input[name='tutorial']")
      .type("testing")
      .get("input[name='tutorial']")
      .invoke("val")
      .should("equal", "testing");
  });
});
