import { APIRequestContext, APIResponse, expect } from '@playwright/test';
import { environment } from '../config/environment';

export class ApiClient {
  constructor(private readonly request: APIRequestContext) {}

  async get<T = unknown>(path: string, headers: Record<string, string> = {}): Promise<{ response: APIResponse; data: T }> {
    const response = await this.request.get(`${environment.apiBaseUrl}${path}`, { headers });
    await expect(response.ok()).toBeTruthy();
    const data = (await response.json()) as T;
    return { response, data };
  }

  async post<T = unknown>(path: string, body: unknown, headers: Record<string, string> = {}): Promise<{ response: APIResponse; data: T }> {
    const response = await this.request.post(`${environment.apiBaseUrl}${path}`, {
      data: body,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    });
    await expect(response.ok()).toBeTruthy();
    const data = (await response.json()) as T;
    return { response, data };
  }

  async validateStatus(path: string, expectedStatus: number): Promise<void> {
    const response = await this.request.get(`${environment.apiBaseUrl}${path}`);
    expect(response.status()).toBe(expectedStatus);
  }
}
