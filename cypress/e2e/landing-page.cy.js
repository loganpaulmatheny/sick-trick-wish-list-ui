describe("Testing the initial load of the page", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/tricks", {
      statusCode: 200,
      fixture: "trick-start-data.json",
    }).visit("http://localhost:3000");
  });

  it("Should display the correct things on load", () => {
    cy.get("h1")
      .should("contain", "Sick Trick Wish List")
      .get(".card:first")
      .get("p:first")
      .should("contain", "regular")
      .get(".card:first")
      .contains("treflip")
      .get(".card:first")
      .contains("flat ground")
      .get(".card:first")
      .contains("https://www.youtube.com/watch?v=XGw3YkQmNig")
      .get(".tricks-container")
      .as("parent")
      .get("@parent")
      .find(".card")
      .as("child")
      .get("@child")
      .should("have.length", 3);
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
  it.only("Should allow the user to add a new trick", () => {
    cy.get("select[name='stance']")
      .select("Switch")
      .get("select[name='obstacle']")
      .select("Ledge")
      .get("input[name='name']")
      .type("Kickflip")
      .get("input[name='tutorial']")
      .type("testURL")
      .get("button")
      .click()
      .get(".tricks-container")
      .as("container")
      .get("@container")
      .find(".card")
      .eq(3)
      .as("new-card")
      .get("@new-card")
      .find("p:first")
      .should("contain", "Switch")
      .next("p")
      .contains("Kickflip")
      .next("p")
      .contains("Ledge")
      .next("a")
      .contains("testURL");
  });
});
