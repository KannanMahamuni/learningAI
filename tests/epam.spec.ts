import { test, expect } from '@playwright/test';

test.describe('EPAM site - Client Work navigation', () => {
  test('Navigate from homepage header -> Services -> Explore Our Client Work', async ({ page }) => {
    // Navigate to EPAM homepage
    await page.goto('https://www.epam.com/', { waitUntil: 'domcontentloaded' });

    // Click the "Services" item in the header
    const servicesLink = page.getByRole('link', { name: /Services/i });
    await expect(servicesLink).toBeVisible({ timeout: 5000 });
    await servicesLink.click();

    // Wait for any navigation or menu expansion to settle
    await page.waitForLoadState('networkidle');

    // Click the "Explore Our Client Work" link (case-insensitive match)
    const exploreLink = page.getByRole('link', { name: /Explore our client work/i });
    await expect(exploreLink).toBeVisible({ timeout: 7000 });
    await exploreLink.click();

    // Verify that the "Client Work" text is visible on the resulting page
    await expect(page.getByText(/Client Work/i)).toBeVisible({ timeout: 10000 });
  });

  test('Fallback: open client work directly and verify heading', async ({ page }) => {
    // Some site variants may not expose the exact link text in the header menu.
    // This test demonstrates a robust fallback path.
    await page.goto('https://www.epam.com/client-work', { waitUntil: 'domcontentloaded' });

    // Verify that the "Client Work" text is visible on the page
    await expect(page.getByText(/Client Work/i)).toBeVisible({ timeout: 10000 });
  });
});
