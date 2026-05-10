export const environment = {
  uiBaseUrl: process.env.UI_BASE_URL ?? 'https://www.saucedemo.com',
  apiBaseUrl: process.env.API_BASE_URL ?? 'https://jsonplaceholder.typicode.com',
  apiHealthUrl: process.env.API_HEALTH_URL ?? 'https://jsonplaceholder.typicode.com'
} as const;
