# Security and Privacy

## No bundled credentials

The repository must never contain provider API keys, personal tokens, local key files or hard-coded authorization headers.

## Optional AI connection

The application can connect to a user-supplied OpenAI-compatible chat completions endpoint. The endpoint and model name may be stored locally. The API key is kept only in browser `sessionStorage` and is excluded from progress exports.

Users should prefer a short-lived key or a user-controlled server-side proxy. Direct browser calls require the provider to allow CORS and expose the credential to the current browser session.

## Local progress

Learning progress stays in browser local storage unless the user exports it. Exported progress files contain learning records but no API key.

## Reporting a problem

Do not include a real credential in an issue, screenshot, log or example. Revoke any credential that may have been exposed.
