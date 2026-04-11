# EPAM Playwright Tests

This branch adds Playwright test cases that:

- Navigate to https://www.epam.com/
- Select the "Services" header menu item
- Click the "Explore Our Client Work" link
- Verify that the "Client Work" text is visible

Files added:
- tests/epam.spec.ts - Playwright tests
- package.json - scripts and devDependencies

Run locally:

1. npm install
2. npx playwright test

Notes:
- Tests use case-insensitive role/text matching to be resilient across site variations.
