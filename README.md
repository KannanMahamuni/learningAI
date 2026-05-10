# Playwright TAF

A scalable Playwright TypeScript Test Automation Framework supporting UI, API, and integration tests.

## Features
- Playwright Test Runner with TypeScript
- Page Object Model with reusable base abstractions
- Keyword-driven actions for UI and API flows
- UI tests for SauceDemo
- API tests against a public REST API
- Integration tests combining UI and API validations
- HTML report and Allure reporting
- GitHub Actions CI/CD pipeline

## Prerequisites
- Node.js 20+
- npm

## Installation
```bash
npm install
```

## Project Structure
- `src/pages` - Page Objects
- `src/api` - API client abstraction
- `src/keywords` - Reusable keyword layer
- `tests/ui` - UI tests
- `tests/api` - API tests
- `tests/integration` - Integration tests

## Running Tests
```bash
npm test
npm run test:ui
npm run test:api
npm run test:integration
```

## Reports
### HTML report
```bash
npm run report:html
```

### Allure report
```bash
npm run report:allure
npm run allure:open
```

## CI/CD
The workflow at `.github/workflows/playwright-tests.yml` runs on every push and pull request. It installs dependencies, installs Playwright browsers, runs tests, and uploads the HTML/Allure artifacts.

## Environment Variables
- `UI_BASE_URL` - Base URL for UI tests
- `API_BASE_URL` - Base URL for API tests
- `API_HEALTH_URL` - Optional API health endpoint

## Notes
- The framework uses only Playwright Test Runner and Playwright assertions for test execution.
- All test code is organized for maintainability and scalability.
