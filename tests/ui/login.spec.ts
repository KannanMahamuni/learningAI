import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/loginPage';
import { testData } from '../../src/data/testData';

test.describe('SauceDemo Login UI', () => {
  test('should log in successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(testData.users.standard.username, testData.users.standard.password);

    await loginPage.expectLoggedIn();
    await expect(page).toHaveURL(/inventory.html/);
  });

  test('should show an error for locked out user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(testData.users.lockedOut.username, testData.users.lockedOut.password);

    await loginPage.expectLoginError('locked out');
  });
});
