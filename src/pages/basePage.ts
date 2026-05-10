import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  constructor(protected readonly page: Page) {}

  async goto(path: string): Promise<void> {
    await this.page.goto(path);
  }

  async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  async fill(locator: Locator, value: string): Promise<void> {
    await locator.fill(value);
  }

  async type(locator: Locator, value: string): Promise<void> {
    await locator.type(value);
  }

  async getText(locator: Locator): Promise<string> {
    return locator.textContent().then((text) => (text ?? '').trim());
  }

  async isVisible(locator: Locator): Promise<boolean> {
    return locator.isVisible();
  }

  async expectVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  async expectHasText(locator: Locator, text: string): Promise<void> {
    await expect(locator).toHaveText(text);
  }
}
