# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: artical/comment.spec.ts >> Article >> comment on article
- Location: e2e/tests/artical/comment.spec.ts:5:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.card-text').last()
Expected: "Test comment 1776083609773"
Received: " Test comment 1776083445356 "
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.card-text').last()
    9 × locator resolved to <p class="card-text"> Test comment 1776083445356 </p>
      - unexpected value " Test comment 1776083445356 "

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e4]:
    - generic [ref=e5]:
      - link "Conduit" [ref=e6] [cursor=pointer]:
        - /url: /
        - img "Conduit" [ref=e7]
      - list [ref=e8]:
        - listitem [ref=e9]:
          - link "Home" [ref=e10] [cursor=pointer]:
            - /url: /
        - listitem [ref=e11]:
          - link " New Article" [ref=e12] [cursor=pointer]:
            - /url: /editor
            - generic [ref=e13]: 
            - text: New Article
        - listitem [ref=e14]:
          - link " Settings" [ref=e15] [cursor=pointer]:
            - /url: /settings
            - generic [ref=e16]: 
            - text: Settings
        - listitem [ref=e17]:
          - link "Sang Mai" [ref=e18] [cursor=pointer]:
            - /url: /profile/Sang%20Mai
            - img [ref=e19]
            - text: Sang Mai
  - generic [ref=e21]:
    - generic [ref=e23]:
      - heading "Test Article 1776082487661" [level=1] [ref=e24]
      - generic [ref=e26]:
        - link [ref=e27] [cursor=pointer]:
          - /url: /profile/Sang%20Mai
          - img [ref=e28]
        - generic [ref=e29]:
          - link "Sang Mai" [ref=e30] [cursor=pointer]:
            - /url: /profile/Sang%20Mai
          - generic [ref=e31]: April 13, 2026
        - generic [ref=e32]:
          - link " Edit Article" [ref=e33] [cursor=pointer]:
            - /url: /editor/test-article-1776082487661
            - generic [ref=e34]: 
            - text: Edit Article
          - button " Delete Article" [ref=e35] [cursor=pointer]:
            - generic [ref=e36]: 
            - text: Delete Article
    - generic [ref=e37]:
      - generic [ref=e39]:
        - paragraph [ref=e41]: Hello world
        - list [ref=e42]:
          - listitem [ref=e43]: test
      - separator [ref=e44]
      - generic [ref=e47]:
        - link [ref=e48] [cursor=pointer]:
          - /url: /profile/Sang%20Mai
          - img [ref=e49]
        - generic [ref=e50]:
          - link "Sang Mai" [ref=e51] [cursor=pointer]:
            - /url: /profile/Sang%20Mai
          - generic [ref=e52]: April 13, 2026
        - generic [ref=e53]:
          - link " Edit Article" [ref=e54] [cursor=pointer]:
            - /url: /editor/test-article-1776082487661
            - generic [ref=e55]: 
            - text: Edit Article
          - button " Delete Article" [ref=e56] [cursor=pointer]:
            - generic [ref=e57]: 
            - text: Delete Article
      - generic [ref=e59]:
        - generic [ref=e60]:
          - generic:
            - list
          - group [ref=e62]:
            - textbox "Write a comment..." [ref=e64]
            - generic [ref=e65]:
              - img [ref=e66]
              - button "Post Comment" [ref=e67] [cursor=pointer]
        - generic:
          - list
        - generic [ref=e69]:
          - paragraph [ref=e71]: Test comment 1776083609773
          - generic [ref=e72]:
            - link [ref=e73] [cursor=pointer]:
              - /url: /profile/Sang%20Mai
              - img [ref=e74]
            - link "Sang Mai" [ref=e75] [cursor=pointer]:
              - /url: /profile/Sang%20Mai
            - generic [ref=e76]: April 13, 2026
            - generic [ref=e78] [cursor=pointer]: 
        - generic [ref=e80]:
          - paragraph [ref=e82]: Test comment 1776083445356
          - generic [ref=e83]:
            - link [ref=e84] [cursor=pointer]:
              - /url: /profile/Sang%20Mai
              - img [ref=e85]
            - link "Sang Mai" [ref=e86] [cursor=pointer]:
              - /url: /profile/Sang%20Mai
            - generic [ref=e87]: April 13, 2026
            - generic [ref=e89] [cursor=pointer]: 
  - contentinfo [ref=e91]:
    - generic [ref=e92]:
      - link "Conduit" [ref=e93] [cursor=pointer]:
        - /url: /
        - img "Conduit" [ref=e94]
      - generic [ref=e95]:
        - text: © 2026. An interactive learning project from
        - link "RealWorld OSS Project" [ref=e96] [cursor=pointer]:
          - /url: https://github.com/gothinkster/realworld
        - text: . Code licensed under MIT.
```

# Test source

```ts
  1  | import { test } from "../../../fixtures";
  2  | import { expect } from "@playwright/test";
  3  | 
  4  | test.describe("Article", () => {
  5  |   test("comment on article", async ({ loginPage, page, homePage }) => {
  6  |     await loginPage.goto();
  7  |     await loginPage.login("sangmai350@gmail.com", "Abcd123!@#");
  8  | 
  9  |     await homePage.verifyUserLoggedIn();
  10 | 
  11 |     const firstArticle = page.locator(".preview-link").first();
  12 |     await firstArticle.click();
  13 | 
  14 |     const commentText = `Test comment ${Date.now()}`;
  15 | 
  16 |     const commentInput = page.locator('textarea[placeholder="Write a comment..."]');
  17 |     const postButton = page.locator('button:has-text("Post Comment")');
  18 | 
  19 |     await commentInput.fill(commentText);
  20 |     await postButton.click();
  21 | 
> 22 |     await expect(page.locator(".card-text").last()).toHaveText(commentText);
     |                                                     ^ Error: expect(locator).toHaveText(expected) failed
  23 |   });
  24 | });
```