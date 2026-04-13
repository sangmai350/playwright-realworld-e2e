import { test } from "../../../fixtures";
import { expect } from "@playwright/test";
import { USER } from "../../constants/credential";

test.describe("E2E flows", () => {
  test("User can login successfully", async ({ loginPage, homePage }) => {
    await loginPage.goto();
    await loginPage.login(USER.email, USER.password);
    await homePage.verifyUserLoggedIn();
  });

  test("User can create article", async ({ page, editorPage, loggedInHomePage }) => {
    await editorPage.goto();

    const title = `E2E ${Date.now()}`;

    await editorPage.createArticle(
      title,
      "Test description",
      "Test body",
      "test",
    );

    await expect(page.locator("h1")).toHaveText(title);
  });

  test("User can like article flow", async ({ page, loggedInHomePage }) => {

    const likeButton = page.locator("app-favorite-button").first();
    const before = await likeButton.innerText();
    const countBefore = parseInt(before.replace(/\D/g, "")) || 0;

    await likeButton.click();
    await expect(likeButton).toHaveText(new RegExp(`${countBefore + 1}`));
  });

  test("User can comment on article", async ({ page, loggedInHomePage }) => {
    await page.locator("app-article-preview h1").first().click();

    const comment = `Test comment ${Date.now()}`;

    await page.locator("textarea").fill(comment);
    await page.locator("form button").click();

    await expect(page.locator(".card-text").last()).toHaveText(comment);
  });

  test("User can Login fail (negative)", async ({ loginPage, page }) => {
    await loginPage.goto();
    await loginPage.login("wrong@email.com", "wrongpass");

    await expect(page.locator("app-list-errors")).toBeVisible();
  });
});
