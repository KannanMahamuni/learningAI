Instructions for running the Playwright login test

Prerequisites:
- Python 3.8+
- playwright installed and browsers installed: `pip install playwright` then `playwright install`

Running the test:
- Set the application's base URL if needed via Playwright config or use environment variable when launching pytest.
- Optionally set LOGIN_USERNAME and LOGIN_PASSWORD environment variables.
- Run with: `pytest -q --disable-warnings --maxfail=1`

Artifacts:
- Screenshots will be saved to the artifacts/ directory as `login-success.png`.
