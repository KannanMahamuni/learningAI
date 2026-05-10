import { Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

export class AuthKeywords {
  constructor(private readonly page: Page) {}

  async loginAs(username: string, password: string): Promise<LoginPage> {
    const loginPage = new LoginPage(this.page);
    await loginPage.navigate();
    await loginPage.login(username, password);
    return loginPage;
  }
}
