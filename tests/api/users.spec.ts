import { test, expect, APIRequestContext } from '@playwright/test';
import { ApiClient } from '../../src/api/apiClient';
import { testData } from '../../src/data/testData';

let apiClient: ApiClient;

test.beforeEach(async ({ request }) => {
  apiClient = new ApiClient(request as APIRequestContext);
});

test.describe('Public API validation', () => {
  test('should fetch user data from jsonplaceholder', async () => {
    const { response, data } = await apiClient.get<{ id: number; name: string; email: string }>(`/users/${testData.api.userId}`);

    expect(response.status()).toBe(200);
    expect(data.id).toBe(testData.api.userId);
    expect(data.name.length).toBeGreaterThan(0);
    expect(data.email).toContain(testData.api.expectedEmailDomain);
  });
});
