# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.ts >> E2E flows >> like article
- Location: e2e/tests/auth/login.spec.ts:31:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.innerText: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('button:has-text("♥")').first()

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
  - generic [ref=e23]:
    - generic [ref=e24]:
      - list [ref=e26]:
        - listitem [ref=e27]:
          - link "Your Feed" [ref=e28] [cursor=pointer]:
            - /url: /?feed=following
        - listitem [ref=e29]:
          - link "Global Feed" [ref=e30]:
            - /url: /
        - text: 
      - generic [ref=e31]:
        - generic [ref=e33]:
          - generic [ref=e35]:
            - link [ref=e36] [cursor=pointer]:
              - /url: /profile/Sang%20Mai
              - img [ref=e37]
            - generic [ref=e38]:
              - link "Sang Mai" [ref=e39] [cursor=pointer]:
                - /url: /profile/Sang%20Mai
              - generic [ref=e40]: April 13, 2026
            - button " 0" [ref=e42] [cursor=pointer]:
              - generic [ref=e43]: 
              - text: "0"
          - link "E2E 1776084265925 Test description Read more... test" [ref=e44] [cursor=pointer]:
            - /url: /article/e2e-1776084265925
            - heading "E2E 1776084265925" [level=1] [ref=e45]
            - paragraph [ref=e46]: Test description
            - text: Read more...
            - list [ref=e47]:
              - listitem [ref=e48]: test
        - generic [ref=e50]:
          - generic [ref=e52]:
            - link [ref=e53] [cursor=pointer]:
              - /url: /profile/Sang%20Mai
              - img [ref=e54]
            - generic [ref=e55]:
              - link "Sang Mai" [ref=e56] [cursor=pointer]:
                - /url: /profile/Sang%20Mai
              - generic [ref=e57]: April 13, 2026
            - button " 0" [ref=e59] [cursor=pointer]:
              - generic [ref=e60]: 
              - text: "0"
          - link "E2E 1776084205909 Test description Read more... test" [ref=e61] [cursor=pointer]:
            - /url: /article/e2e-1776084205909
            - heading "E2E 1776084205909" [level=1] [ref=e62]
            - paragraph [ref=e63]: Test description
            - text: Read more...
            - list [ref=e64]:
              - listitem [ref=e65]: test
        - generic [ref=e67]:
          - generic [ref=e69]:
            - link [ref=e70] [cursor=pointer]:
              - /url: /profile/Sang%20Mai
              - img [ref=e71]
            - generic [ref=e72]:
              - link "Sang Mai" [ref=e73] [cursor=pointer]:
                - /url: /profile/Sang%20Mai
              - generic [ref=e74]: April 13, 2026
            - button " 1" [ref=e76] [cursor=pointer]:
              - generic [ref=e77]: 
              - text: "1"
          - link "Test Article 1776083609174 Test description Read more... test" [ref=e78] [cursor=pointer]:
            - /url: /article/test-article-1776083609174
            - heading "Test Article 1776083609174" [level=1] [ref=e79]
            - paragraph [ref=e80]: Test description
            - text: Read more...
            - list [ref=e81]:
              - listitem [ref=e82]: test
        - generic [ref=e84]:
          - generic [ref=e86]:
            - link [ref=e87] [cursor=pointer]:
              - /url: /profile/Sang%20Mai
              - img [ref=e88]
            - generic [ref=e89]:
              - link "Sang Mai" [ref=e90] [cursor=pointer]:
                - /url: /profile/Sang%20Mai
              - generic [ref=e91]: April 13, 2026
            - button " 1" [ref=e93] [cursor=pointer]:
              - generic [ref=e94]: 
              - text: "1"
          - link "Test Article 1776082487661 Test description Read more... test" [ref=e95] [cursor=pointer]:
            - /url: /article/test-article-1776082487661
            - heading "Test Article 1776082487661" [level=1] [ref=e96]
            - paragraph [ref=e97]: Test description
            - text: Read more...
            - list [ref=e98]:
              - listitem [ref=e99]: test
        - generic [ref=e101]:
          - generic [ref=e103]:
            - link [ref=e104] [cursor=pointer]:
              - /url: /profile/johndoe
              - img [ref=e105]
            - generic [ref=e106]:
              - link "johndoe" [ref=e107] [cursor=pointer]:
                - /url: /profile/johndoe
              - generic [ref=e108]: April 13, 2026
            - button " 2" [ref=e110] [cursor=pointer]:
              - generic [ref=e111]: 
              - text: "2"
          - link "How to Learn JavaScript Efficiently A comprehensive guide to mastering JavaScript from beginner to advanced level Read more... beginners javascript programming webdev" [ref=e112] [cursor=pointer]:
            - /url: /article/how-to-learn-javascript-efficiently
            - heading "How to Learn JavaScript Efficiently" [level=1] [ref=e113]
            - paragraph [ref=e114]: A comprehensive guide to mastering JavaScript from beginner to advanced level
            - text: Read more...
            - list [ref=e115]:
              - listitem [ref=e116]: beginners
              - listitem [ref=e117]: javascript
              - listitem [ref=e118]: programming
              - listitem [ref=e119]: webdev
        - generic [ref=e121]:
          - generic [ref=e123]:
            - link [ref=e124] [cursor=pointer]:
              - /url: /profile/janesmith
              - img [ref=e125]
            - generic [ref=e126]:
              - link "janesmith" [ref=e127] [cursor=pointer]:
                - /url: /profile/janesmith
              - generic [ref=e128]: April 13, 2026
            - button " 2" [ref=e130] [cursor=pointer]:
              - generic [ref=e131]: 
              - text: "2"
          - 'link "React Hooks: Best Practices and Common Pitfalls Essential patterns and anti-patterns when working with React Hooks Read more... frontend hooks javascript react" [ref=e132] [cursor=pointer]':
            - /url: /article/react-hooks-best-practices
            - 'heading "React Hooks: Best Practices and Common Pitfalls" [level=1] [ref=e133]'
            - paragraph [ref=e134]: Essential patterns and anti-patterns when working with React Hooks
            - text: Read more...
            - list [ref=e135]:
              - listitem [ref=e136]: frontend
              - listitem [ref=e137]: hooks
              - listitem [ref=e138]: javascript
              - listitem [ref=e139]: react
        - generic [ref=e141]:
          - generic [ref=e143]:
            - link [ref=e144] [cursor=pointer]:
              - /url: /profile/mikewilson
              - img [ref=e145]
            - generic [ref=e146]:
              - link "mikewilson" [ref=e147] [cursor=pointer]:
                - /url: /profile/mikewilson
              - generic [ref=e148]: April 13, 2026
            - button " 1" [ref=e150] [cursor=pointer]:
              - generic [ref=e151]: 
              - text: "1"
          - link "Building Scalable APIs with Node.js Architectural patterns and best practices for creating robust backend services Read more... api architecture backend nodejs" [ref=e152] [cursor=pointer]:
            - /url: /article/building-scalable-apis-with-node-js
            - heading "Building Scalable APIs with Node.js" [level=1] [ref=e153]
            - paragraph [ref=e154]: Architectural patterns and best practices for creating robust backend services
            - text: Read more...
            - list [ref=e155]:
              - listitem [ref=e156]: api
              - listitem [ref=e157]: architecture
              - listitem [ref=e158]: backend
              - listitem [ref=e159]: nodejs
        - generic [ref=e161]:
          - generic [ref=e163]:
            - link [ref=e164] [cursor=pointer]:
              - /url: /profile/sarahchen
              - img [ref=e165]
            - generic [ref=e166]:
              - link "sarahchen" [ref=e167] [cursor=pointer]:
                - /url: /profile/sarahchen
              - generic [ref=e168]: April 13, 2026
            - button " 1" [ref=e170] [cursor=pointer]:
              - generic [ref=e171]: 
              - text: "1"
          - link "Introduction to Machine Learning for Developers Getting started with ML concepts and practical applications for software developers Read more... ai datascience machinelearning python" [ref=e172] [cursor=pointer]:
            - /url: /article/introduction-to-machine-learning-for-developers
            - heading "Introduction to Machine Learning for Developers" [level=1] [ref=e173]
            - paragraph [ref=e174]: Getting started with ML concepts and practical applications for software developers
            - text: Read more...
            - list [ref=e175]:
              - listitem [ref=e176]: ai
              - listitem [ref=e177]: datascience
              - listitem [ref=e178]: machinelearning
              - listitem [ref=e179]: python
        - navigation [ref=e180]:
          - list [ref=e181]:
            - listitem:
              - button "1" [ref=e182]
    - generic [ref=e184]:
      - paragraph [ref=e185]: Popular Tags
      - generic [ref=e186]:
        - link "ai" [ref=e187] [cursor=pointer]:
          - /url: /tag/ai
        - link "api" [ref=e188] [cursor=pointer]:
          - /url: /tag/api
        - link "architecture" [ref=e189] [cursor=pointer]:
          - /url: /tag/architecture
        - link "backend" [ref=e190] [cursor=pointer]:
          - /url: /tag/backend
        - link "beginners" [ref=e191] [cursor=pointer]:
          - /url: /tag/beginners
        - link "datascience" [ref=e192] [cursor=pointer]:
          - /url: /tag/datascience
        - link "frontend" [ref=e193] [cursor=pointer]:
          - /url: /tag/frontend
        - link "hooks" [ref=e194] [cursor=pointer]:
          - /url: /tag/hooks
        - link "javascript" [ref=e195] [cursor=pointer]:
          - /url: /tag/javascript
        - link "machinelearning" [ref=e196] [cursor=pointer]:
          - /url: /tag/machinelearning
        - link "nodejs" [ref=e197] [cursor=pointer]:
          - /url: /tag/nodejs
        - link "programming" [ref=e198] [cursor=pointer]:
          - /url: /tag/programming
        - link "python" [ref=e199] [cursor=pointer]:
          - /url: /tag/python
        - link "react" [ref=e200] [cursor=pointer]:
          - /url: /tag/react
        - link "test" [ref=e201] [cursor=pointer]:
          - /url: /tag/test
        - link "webdev" [ref=e202] [cursor=pointer]:
          - /url: /tag/webdev
  - contentinfo [ref=e204]:
    - generic [ref=e205]:
      - link "Conduit" [ref=e206] [cursor=pointer]:
        - /url: /
        - img "Conduit" [ref=e207]
      - generic [ref=e208]:
        - text: © 2026. An interactive learning project from
        - link "RealWorld OSS Project" [ref=e209] [cursor=pointer]:
          - /url: https://github.com/gothinkster/realworld
        - text: . Code licensed under MIT.
```

# Test source

```ts
  1  | import { test } from "../../../fixtures";
  2  | import { expect } from "@playwright/test";
  3  | 
  4  | test.describe("E2E flows", () => {
  5  |   test("login", async ({ loginPage, homePage }) => {
  6  |     await loginPage.goto();
  7  |     await loginPage.login("sangmai350@gmail.com", "Abcd123!@#");
  8  | 
  9  |     await homePage.verifyUserLoggedIn();
  10 |   });
  11 | 
  12 |   test("create article", async ({ loginPage, page, homePage, editorPage }) => {
  13 |     await loginPage.goto();
  14 |     await loginPage.login("sangmai350@gmail.com", "Abcd123!@#");
  15 |     await homePage.verifyUserLoggedIn();
  16 | 
  17 |     await editorPage.goto();
  18 | 
  19 |     const title = `E2E ${Date.now()}`;
  20 | 
  21 |     await editorPage.createArticle(
  22 |       title,
  23 |       "Test description",
  24 |       "Test body",
  25 |       "test",
  26 |     );
  27 | 
  28 |     await expect(page.locator("h1")).toHaveText(title);
  29 |   });
  30 | 
  31 |   test("like article", async ({ loginPage, page, homePage }) => {
  32 |     await loginPage.goto();
  33 |     await loginPage.login("sangmai350@gmail.com", "Abcd123!@#");
  34 |     await homePage.verifyUserLoggedIn();
  35 | 
  36 |     const likeButton = page.locator('button:has-text("♥")').first();
> 37 |     const before = await likeButton.innerText();
     |                                     ^ Error: locator.innerText: Test timeout of 60000ms exceeded.
  38 | 
  39 |     await likeButton.click();
  40 | 
  41 |     await expect(likeButton).not.toHaveText(before);
  42 |   });
  43 | 
  44 |   test("comment on article", async ({ loginPage, page, homePage }) => {
  45 |     await loginPage.goto();
  46 |     await loginPage.login("sangmai350@gmail.com", "Abcd123!@#");
  47 |     await homePage.verifyUserLoggedIn();
  48 | 
  49 |     await page.locator(".preview-link").first().click();
  50 | 
  51 |     const comment = `Test comment ${Date.now()}`;
  52 | 
  53 |     await page
  54 |       .locator('textarea[placeholder="Write a comment..."]')
  55 |       .fill(comment);
  56 |     await page.locator('button:has-text("Post Comment")').click();
  57 | 
  58 |     await expect(page.locator(".card-text").last()).toHaveText(comment);
  59 |   });
  60 | 
  61 |   test("login fail (negative)", async ({ loginPage, page }) => {
  62 |     await loginPage.goto();
  63 |     await loginPage.login("wrong@email.com", "wrongpass");
  64 | 
  65 |     await expect(page.locator(".error-messages")).toBeVisible();
  66 |   });
  67 | });
  68 | 
```