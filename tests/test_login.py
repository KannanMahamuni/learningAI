"""
Playwright test for login page that captures a screenshot after successful login.

This file will be populated incrementally.
"""

from playwright.sync_api import Page, expect


def test_login_and_screenshot(page: Page):
    """Navigate to the login page, perform login, and capture a screenshot after login.

    Configuration:
    - Set the base URL for the application using the PLAYWRIGHT_TEST_BASE_URL environment variable
      or in your pytest/playwright config so `page.goto("/")` points to the app under test.
    - Provide valid credentials via environment variables:
        LOGIN_USERNAME, LOGIN_PASSWORD

    The test will:
    1. Navigate to '/login'
    2. Fill username and password
    3. Click the login/submit button
    4. Wait for a post-login element to appear
    5. Take a full-page screenshot and save it to 'artifacts/login-success.png'
    """
    base = page.context.request._initializer.get("baseURL") if hasattr(page.context.request, "_initializer") else None
    if base:
        login_url = base + "/login"
    else:
        login_url = "/login"

    page.goto(login_url)

    username = (page.locator("input[name=\"username\"]"))
    password = (page.locator("input[name=\"password\"]"))
    submit = (page.locator("button[type=submit], input[type=submit]"))

    # Use environment variables for credentials when running tests
    import os
    user = os.getenv("LOGIN_USERNAME", "testuser")
    pwd = os.getenv("LOGIN_PASSWORD", "password")

    username.fill(user)
    password.fill(pwd)
    submit.click()

    # Adjust the selector below to match an element visible after login (e.g., profile avatar or dashboard header)
    post_login_selector = "text=Welcome,"
    expect(page.locator(post_login_selector)).to_be_visible(timeout=10000)

    # Ensure artifacts directory exists and take a screenshot
    import pathlib
    artifacts = pathlib.Path("artifacts")
    artifacts.mkdir(exist_ok=True)
    page.screenshot(path=str(artifacts / "login-success.png"), full_page=True)
