import { test as base, APIRequestContext } from '@playwright/test';
import { ApiClient } from '../../src/api/apiClient';
import { AuthKeywords } from '../../src/keywords/authKeywords';
import { ApiKeywords } from '../../src/keywords/apiKeywords';

export const test = base.extend<{
  apiClient: ApiClient;
  authKeywords: AuthKeywords;
  apiKeywords: ApiKeywords;
}>({
  apiClient: async ({ request }, use) => {
    await use(new ApiClient(request as APIRequestContext));
  },
  authKeywords: async ({ page }, use) => {
    await use(new AuthKeywords(page));
  },
  apiKeywords: async ({ request }, use) => {
    await use(new ApiKeywords(request));
  }
});

export { expect } from '@playwright/test';
