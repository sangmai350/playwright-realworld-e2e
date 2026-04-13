import { expect, Page, Locator } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly yourFeedTab: Locator;
  readonly globalFeedTab: Locator;

  constructor(page: Page) {
    this.page = page;

    this.yourFeedTab = page.locator('text=Your Feed');
    this.globalFeedTab = page.locator('text=Global Feed');
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async verifyUserLoggedIn(): Promise<void> {
    await expect(this.yourFeedTab).toBeVisible();
  }
}