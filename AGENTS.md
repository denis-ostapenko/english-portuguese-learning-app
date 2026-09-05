# Project Instructions

This is a static bilingual learning application created by Denis Ostapenko.

## Product rules

- The only interface languages are English and Brazilian Portuguese.
- Keep English and Brazilian Portuguese as the only project languages.
- Preserve stable learning item IDs and the local storage key `denis-en-pt-learning-v1`.
- The course must work without an API key.
- Never add a personal provider key or a reference to a local key file.
- Keep bundled audio paths stable.
- Use IPA, not transliteration based on another writing system.

## Development

Run locally with:

```bash
python3 -m http.server 4177 --bind 127.0.0.1
```

The application uses plain HTML, CSS and JavaScript so GitHub Pages can serve it without a build step.

## Required checks

Before publishing:

1. Search the whole repository for Cyrillic characters.
2. Search for credential patterns and local key-file references.
3. Open both learning directions in a real browser.
4. Test Learn, Review, Words, Situations, Grammar, Tutor and Settings.
5. Confirm unavailable audio is reported explicitly and predefined course content never falls back to browser or operating-system speech.
6. Confirm progress export contains no API key.

## License

Preserve the MIT copyright notice for Denis Ostapenko in copies and substantial modifications.
