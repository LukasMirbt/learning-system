/* eslint-disable jest/expect-expect, jest/valid-expect-in-promise, jest/valid-expect */

describe("Learning system", function () {
  beforeEach(function () {
    cy.visit("/");
    cy.get('[data-plyr="mute"]').click({ force: true });
  });

  it("Front page can be opened", function () {
    cy.contains("Learning system");
  });

  it("Video controls work correctly", function () {
    cy.get("video").its("0.paused").should("be.true");

    cy.get('[data-plyr="play"]').eq(1).as("playButton");

    cy.get("@playButton").click({ force: true });
    cy.get("video").its("0.paused").should("be.false");

    cy.get("@playButton").click({ force: true });
    cy.get("video").its("0.paused").should("be.true");

    cy.get('[data-plyr="seek"]').as("videoProgressBar").type("{rightarrow}");
    cy.get("video")
      .its("0.currentTime")
      .then((val) => {
        expect(Math.round(val)).to.equal(10);
      });

    cy.get("@videoProgressBar").focus().type("{leftarrow}");
    cy.get("video")
      .its("0.currentTime")
      .then((val) => {
        expect(Math.round(val)).to.equal(0);
      });

    cy.get('[data-plyr="volume"]')
      .as("volume")
      .invoke("attr", "aria-valuenow")
      .should("equal", "0");

    cy.get('[data-plyr="mute"]').as("mute").click({ force: true });
    cy.get("@volume").invoke("attr", "aria-valuenow").should("equal", "100");

    cy.get("@mute").click({ force: true });
    cy.get("@volume").invoke("attr", "aria-valuenow").should("equal", "0");

    cy.get("#transcriptContainer").should("exist");
    cy.get('[data-cy="toggleTranscriptButton"]').click();
    cy.get("#transcriptContainer").should("not.exist");
    cy.get('[data-cy="toggleTranscriptButton"]').click();
    cy.get("#transcriptContainer").should("exist");
  });

  it("Menu button opens navigation drawer on smaller screens and it can be used to navigate between video sections", function () {
    cy.contains("Elephants dream");
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

    cy.contains("View from a blue moon");
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

    cy.get("video").its("0.paused").should("be.false");

    cy.contains("Elephants dream");
  });

  it("Transcript can be used to navigate to different times in a video", function () {
    cy.get("video").its("0.currentTime").should("equal", 0);

    cy.get("#transcriptContainer").find('[role="button"]').eq(4).click();

    cy.get("video").its("0.currentTime").should("not.equal", 0);
  });

  it("Search can be used to find results and to navigate in videos and to find a searchable list of all video subtitles and sections", function () {
    cy.contains("Elephants dream");

    cy.get('[data-cy="searchButton"]').as("searchButton").click();
    cy.get('[aria-label="Search"]').as("searchInput").find("input").type("a");

    cy.get("@searchInput").find('[role="option"]').eq(2).click();

    cy.contains("View from a blue moon");

    cy.get("@searchButton").click();
    cy.get("@searchInput").find("input").type("a");
    cy.get("@searchInput").find('[data-cy="viewAllResultsLink"]').click();

    cy.get("#virtualizedListLabel").contains("search results");

    cy.get("a").eq(4).click();

    cy.contains("Elephants dream");
  });
});
