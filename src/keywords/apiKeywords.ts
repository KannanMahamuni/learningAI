import { APIRequestContext } from '@playwright/test';
import { ApiClient } from '../api/apiClient';

export class ApiKeywords {
  constructor(private readonly request: APIRequestContext) {}

  get client(): ApiClient {
    return new ApiClient(this.request);
  }

  async fetchUser(userId: number) {
    return this.client.get(`/users/${userId}`);
  }

  async fetchPost(postId: number) {
    return this.client.get(`/posts/${postId}`);
  }
}
