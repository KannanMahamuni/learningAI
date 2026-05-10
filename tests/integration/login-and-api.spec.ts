import { test, expect } from '@playwright/test';
import { AuthKeywords } from '../../src/keywords/authKeywords';
import { ApiKeywords } from '../../src/keywords/apiKeywords';
import { testData } from '../../src/data/testData';

test.describe('Integration: UI + API', () => {
  test('should log in through UI and validate API data', async ({ page, request }) => {
    const auth = new AuthKeywords(page);
    const api = new ApiKeywords(request);

    const loginPage = await auth.loginAs(testData.users.standard.username, testData.users.standard.password);
    await loginPage.expectLoggedIn();

    const { data } = await api.fetchUser(testData.api.userId);
    expect(data.id).toBe(testData.api.userId);
    expect(data.email.length).toBeGreaterThan(0);
  });
});
