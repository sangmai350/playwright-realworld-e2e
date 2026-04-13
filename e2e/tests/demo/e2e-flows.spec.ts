import { test } from "../../../fixtures";
import { expect } from "@playwright/test";
import { USER } from "../../constants/credential";

const log = (msg: string, data?: any) => {
  if (data) console.log(`[E2E] ${msg}`, data);
  else console.log(`[E2E] ${msg}`);
};

test.describe("E2E flows", () => {
  test("User can login successfully", async ({ loginPage, homePage }) => {
    log("Start login test");

    await test.step("Go to login page", async () => {
      await loginPage.goto();
      log("Navigated to login page");
    });

    await test.step("Login with valid user", async () => {
      log("Logging in", USER.email);
      await loginPage.login(USER.email, USER.password);
    });

    await test.step("Verify user is logged in", async () => {
      await homePage.verifyUserLoggedIn();
      log("User logged in successfully");
    });
  });

  test("User can create article", async ({ page, editorPage, loggedInHomePage }) => {
    log("Start create article test");

    const title = `E2E ${Date.now()}`;

    await test.step("Go to editor page", async () => {
      await editorPage.goto();
      log("Navigated to editor page");
    });

    await test.step("Create new article", async () => {
      log("Creating article", title);

      await editorPage.createArticle(
        title,
        "Test description",
        "Test body",
        "test"
      );
    });

    await test.step("Verify article created", async () => {
      await expect(page.locator("h1")).toHaveText(title);
      log("Article created successfully");
    });
  });

  test("User can like article flow", async ({ page, loggedInHomePage }) => {
    log("Start like article test");

    const likeButton = page.locator("app-favorite-button").first();

    let countBefore: number;

    await test.step("Get current like count", async () => {
      const before = await likeButton.innerText();
      countBefore = parseInt(before.replace(/\D/g, "")) || 0;

      log("Like count before", countBefore);
    });

    await test.step("Click like button", async () => {
      await likeButton.click();
      log("Clicked like button");
    });

    await test.step("Verify like count increased", async () => {
      await expect(likeButton).toHaveText(new RegExp(`${countBefore + 1}`));
      log("Like count after", countBefore + 1);
    });
  });

  test("User can comment on article", async ({ page, loggedInHomePage }) => {
    log("Start comment test");

    const comment = `Test comment ${Date.now()}`;

    await test.step("Open first article", async () => {
      await page.locator("app-article-preview h1").first().click();
      log("Opened article");
    });

    await test.step("Submit comment", async () => {
      log("Comment content", comment);

      await page.locator("textarea").fill(comment);
      await page.locator("form button").click();
    });

    await test.step("Verify comment added", async () => {
      await expect(page.locator(".card-text").last()).toHaveText(comment);
      log("Comment posted successfully");
    });
  });

  test("User can Login fail (negative)", async ({ loginPage, page }) => {
    log("Start negative login test");

    await test.step("Go to login page", async () => {
      await loginPage.goto();
    });

    await test.step("Login with invalid credentials", async () => {
      log("Using invalid credentials");

      await loginPage.login("wrong@email.com", "wrongpass");
    });

    await test.step("Verify error message displayed", async () => {
      await expect(page.locator("app-list-errors")).toBeVisible();
      log("Error message displayed as expected");
    });
  });
});
