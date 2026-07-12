# English ↔ Português

A free two-way learning application for American English and Brazilian Portuguese.

Version 0.91.

[Open the live application](https://denis-ostapenko.github.io/english-portuguese-learning-app/).

Created by [Denis Ostapenko](https://denisostapenko.com).

## What it does

At first launch, the learner chooses a language they already know:

- English speakers learn Brazilian Portuguese.
- Portuguese speakers learn American English.

The interface, explanations and translations use the learner's known language. The only course languages are English and Brazilian Portuguese.

The course includes:

- 1,307 Brazilian Portuguese learning items;
- 1,467 American English learning items, including an optional professional track;
- IPA transcription;
- 5,954 locally bundled high-quality audio clips;
- spaced repetition at 1, 3, 7, 14 and 30 days;
- recognition, production and listening review modes;
- 1,100 visual vocabulary concepts across both learning directions;
- adult foundations for sounds, syllables, reading, natural speech, sentence building and practical tense timelines;
- everyday dialogue situations;
- compact speaking-oriented grammar;
- local progress export and import;
- visible audio-unavailable handling when an approved recording is missing or cannot play;
- optional connection to a user-supplied OpenAI-compatible AI service.

The course shell and course text work without an account, API key or internet connection after their first successful load. Audio and images are cached after use. Media that has not been cached remains unavailable offline until the learner reconnects. Predefined course content never switches silently to browser or operating-system speech.

## Run locally

The application is static. Start any local web server in this directory:

```bash
python3 -m http.server 4177 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4177`.

Opening `index.html` directly is not recommended because browsers restrict local JSON loading and service workers on `file://` pages.

## Privacy and optional AI

No private API key is included in the repository. The course, audio, SRS, grammar and situations work without AI.

An advanced user may enter an OpenAI-compatible chat completions endpoint, model name and personal API key. The key is kept in `sessionStorage`, not committed, exported or preserved after the browser session ends. A direct browser connection also depends on the selected service allowing CORS requests.

The application supplies the tutor prompt automatically. The learner can choose conversation, role-play, vocabulary review, explanation or correction practice and select a neutral, casual or polite register.

For a public or shared deployment, a user-owned server-side proxy is safer than a long-lived provider key in the browser.

## Documentation

- [User guide](USER_GUIDE.md)
- [Guia do usuário](USER_GUIDE.pt-BR.md)
- [Learning recommendations](RECOMMENDATIONS.md)
- [Recomendações de estudo](RECOMMENDATIONS.pt-BR.md)
- [Introduction](content/INTRODUCTION.md)
- [Security policy](SECURITY.md)
- [Asset provenance](ASSET_PROVENANCE.md)

## License

Code, course data, bundled audio and project-created images are released under the MIT License unless a file explicitly states otherwise. You may use, copy, publish and modify the project while preserving the copyright and license notice.

Copyright 2026 [Denis Ostapenko](https://denisostapenko.com).
