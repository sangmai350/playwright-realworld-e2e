# Playwright E2E – RealWorld Demo

## 📌 Overview

Small E2E test suite using **Playwright + TypeScript** for https://demo.realworld.show

## ✅ Covered Flows

* Login (success & fail)
* Create article
* Like article
* Comment on article

## 🏗️ Structure

```
e2e/
  constants/
  pages/
  tests/

fixtures/
playwright.config.ts
```

## ⚙️ Setup

```
npm install
npx playwright install
```

## ▶️ Run

```
npm test
```

## 🔐 Test Account

Update credentials in:

```
e2e/constants/credential.ts
```

## 🧪 Notes

* Uses Page Object Model + custom fixtures
* Tests are independent and runnable in parallel
