import { test as base } from "@playwright/test";
import { LoginPage } from "../e2e/pages/login.page";
import { HomePage } from "../e2e/pages/home.page";
import { EditorPage } from "../e2e/pages/editor.page";
import { USER } from "../e2e/constants/credential";
type Fixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  editorPage: EditorPage;
  loggedInHomePage: HomePage;
};

export const pageFixtures = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  loggedInHomePage: async ({ loginPage, homePage }, use) => {
    await loginPage.goto();
    await loginPage.login(USER.email, USER.password);
    await homePage.verifyUserLoggedIn();

    await use(homePage);
  },

  editorPage: async ({ page }, use) => {
    await use(new EditorPage(page));
  },
});
