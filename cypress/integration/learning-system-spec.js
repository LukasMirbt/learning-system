/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect-in-promise */

describe("Learning system", function () {
  /* 
    Some assertions in this file are extremely flaky without using "cy.wait()".
    Improvement suggestion: find a more optimal solution than using "cy.wait()" 
  */

  beforeEach(function () {
    cy.visit("/");
  });

  it("Front page can be opened", function () {
    cy.contains("Learning system");
  });

  it("Menu button opens navigation drawer on smaller screens and it can be used to navigate between video sections", function () {
    /* 
      cy.get("video") returns a jQuery object rather than the actual video DOM node 
      which makes it neccessary to access "0.paused" to check paused state. 
    */

    cy.get("h1").then(($title1) => {
      const firstVideoTitle = $title1.text();

      cy.get("video").its("0.paused").should("be.true");

      cy.get("[data-cy=drawerButton]").click();
      cy.get("nav").should("exist");

      cy.get("nav")
        .find('[aria-expanded="false"]')
        .last()
        .click()
        .next('[role="region"]')
        .find('[aria-expanded="false"]')
        .first()
        .click()
        .next('[role="region"]')
        .find('[role="button"]')
        .first()
        .click();

      cy.get("video").its("0.paused").should("be.false");

      cy.get("h1").then(($title2) => {
        const secondVideoTitle = $title2.text();
        expect(firstVideoTitle).not.to.eq(secondVideoTitle);

        cy.wait(5000);

        cy.get("video")
          .click({ force: true })
          .its("0.paused")
          .should("be.true");

        cy.get("nav").should("not.exist");
        cy.get("[data-cy=drawerButton]").click();
        cy.get("nav").should("exist");

        cy.get("nav")
          .find('[aria-expanded="false"]')
          .first()
          .click()
          .next('[role="region"]')
          .find('[role="button"]')
          .first()
          .click();

        cy.wait(5000);

        cy.get("video").its("0.paused").should("be.false");

        cy.wait(5000);

        cy.get("h1").then(($title3) => {
          const thirdVideoTitle = $title3.text();
          expect(firstVideoTitle).to.eq(thirdVideoTitle);

          cy.get("#videoPlayButton").click({ force: true });
          cy.get("video").its("0.paused").should("be.true");
        });
      });
    });
  });

  it("Transcript can be used to navigate to different times in a video", function () {
    cy.get("video").its("0.paused").should("be.true");
    cy.get("video").its("0.currentTime").should("equal", 0);

    cy.get("#transcriptContainer").find('[role="button"]').eq(4).click();

    cy.get("video").its("0.paused").should("be.false");
    cy.get("video").its("0.currentTime").should("not.equal", 0);
  });

  it("Search can be used to find results and to navigate in videos and to find a searchable list of all video subtitles and sections", function () {
    cy.get("video").its("0.paused").should("be.true");
    cy.get("video").its("0.currentTime").should("equal", 0);

    cy.get('[data-cy="searchButton"]').click();

    cy.get('[aria-label="Search"]').find("input").type("a");

    cy.get('[aria-label="Search"]').find('[role="option"]').eq(2).click();

    cy.get('[data-cy="searchButton"]').click();
    cy.get('[aria-label="Search"]').find("input").type("a");

    cy.get('[aria-label="Search"]')
      .find('[data-cy="viewAllResultsLink"]')
      .click();

    cy.wait(5000);

    cy.get("h1").then(($title1) => {
      expect($title1.text()).to.match(/search results/);

      cy.get("a").eq(2).click();

      cy.wait(5000);
      cy.get("video").its("0.paused").should("be.false");

      cy.get("h1").then(($title2) => {
        expect($title1.text()).not.to.equal($title2.text());
      });
    });
  });

  it("Transcript toggle button can hide and show transcript", function () {
    cy.get("#transcriptContainer").should("exist");

    cy.get('[data-cy="toggleTranscriptButton"]').click();

    cy.get("#transcriptContainer").should("not.exist");

    cy.get('[data-cy="toggleTranscriptButton"]').click();

    cy.get("#transcriptContainer").should("exist");
  });
});
