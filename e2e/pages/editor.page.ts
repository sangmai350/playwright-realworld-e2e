import { Page, Locator, expect } from "@playwright/test";

export class EditorPage {
  readonly page: Page;
  readonly titleInput: Locator;
  readonly descriptionInput: Locator;
  readonly bodyInput: Locator;
  readonly tagsInput: Locator;
  readonly publishButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.titleInput = page.locator('input[placeholder="Article Title"]');
    this.descriptionInput = page.locator('input[placeholder="What\'s this article about?"]');
    this.bodyInput = page.locator('textarea[placeholder="Write your article (in markdown)"]');
    this.tagsInput = page.locator('input[placeholder="Enter tags"]');
    this.publishButton = page.locator('button:has-text("Publish Article")');
  }

  async goto(): Promise<void> {
    await this.page.goto('/editor');
  }

  async createArticle(
    title: string,
    description: string,
    body: string,
    tag: string
  ): Promise<void> {
    await this.titleInput.fill(title);
    await this.descriptionInput.fill(description);
    await this.bodyInput.fill(body);
    await this.tagsInput.fill(tag);

    await this.publishButton.click();
  }

  async verifyArticleCreated(title: string): Promise<void> {
    await expect(this.page.locator('h1')).toHaveText(title);
  }
}