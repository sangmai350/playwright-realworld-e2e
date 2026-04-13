import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.emailField = page.locator('input[placeholder="Email"]');
    this.passwordField = page.locator('input[placeholder="Password"]');
    this.loginButton = page.locator('button:has-text("Sign in")');
  }

  async goto(): Promise<void> {
    await this.page.goto('/login');
  }

  async login(email: string, password: string): Promise<void> {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}