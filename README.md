# Playwright E2E – RealWorld Demo

## Overview

Small E2E test suite using **Playwright + TypeScript** for:
https://demo.realworld.show

---

## Prerequisites

* Node.js >= 18.x
* npm >= 9.x

---

## Setup

```bash
npm install
npx playwright install
```

---

## Environment

Create a `.env` file:

```env
E2E_USERNAME=your_email
E2E_PASSWORD=your_password
```

> Tests will be skipped if credentials are missing.

---

## Run Tests

```bash
npm test
```

---

## Covered Flows

* Login
* Create article
* Like article
* Comment on article

---

## Structure

```
e2e/
  pages/
  tests/

fixtures/
playwright.config.ts
```

---

## Notes

* Uses Page Object Model (POM)
* Uses custom fixtures
* Tests run independently and in parallel
