# Public Release Manifest

Version: 0.91

This manifest describes the GitHub release tree. Development reports, generation inputs, raw media, contact sheets, remediation records and unused assets are kept outside the public repository.

## Application

- `index.html`
- `styles.css`
- `app.js`
- `media-controller.js`
- `tutor-prompts.js`
- `tutor-runtime.js`
- `sw.js`
- `manifest.webmanifest`
- `icon.svg`
- `icon-192.png`
- `icon-512.png`

## Course

- `data/en.json`
- `data/pt.json`
- `audio/`: 5,954 referenced MP3 files.
- `images/`: 1,110 referenced WebP files, including 1,100 vocabulary concepts and shared course illustrations.

## Documentation

- `README.md`
- `README.pt-BR.md`
- `USER_GUIDE.md`
- `USER_GUIDE.pt-BR.md`
- `RECOMMENDATIONS.md`
- `RECOMMENDATIONS.pt-BR.md`
- `content/INTRODUCTION.md`
- `SECURITY.md`
- `ASSET_PROVENANCE.md`
- `LICENSE`
- `AGENTS.md`

## Local verification

- `scripts/verify_project.py`
- `scripts/test_media_controller.js`
- `scripts/test_service_worker.js`
- `scripts/test_state_runtime.js`
- `scripts/test_tutor_runtime.js`
- `start_local.command`

`python3 scripts/verify_project.py` verifies the public tree, version, author link, course references, media signatures, file-size limits, unused assets, credentials and language policy.
