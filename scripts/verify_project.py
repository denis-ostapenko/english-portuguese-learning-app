#!/usr/bin/env python3
import json
import re
import struct
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
VERSION = "0.91"
AUTHOR_URL = "https://denisostapenko.com"
MAX_GITHUB_FILE_BYTES = 100 * 1024 * 1024
MAX_RELEASE_BYTES = 1024 * 1024 * 1024
CYRILLIC = re.compile(r"[\u0400-\u04ff]")
SECRET_PATTERNS = [
    re.compile(r"sk-ant-[A-Za-z0-9_-]+"),
    re.compile(r"sk-proj-[A-Za-z0-9_-]+"),
    re.compile(r"\.api-keys"),
    re.compile(r"ANTHROPIC_API_KEY"),
    re.compile(r"OPENAI_API_KEY"),
    re.compile(r"/Users/[^/]+/"),
]
REQUIRED_FILES = {
    ".gitignore", "AGENTS.md", "ASSET_PROVENANCE.md", "FILE_MANIFEST.md",
    "LICENSE", "README.md", "README.pt-BR.md", "RECOMMENDATIONS.md",
    "RECOMMENDATIONS.pt-BR.md", "SECURITY.md", "USER_GUIDE.md",
    "USER_GUIDE.pt-BR.md", "app.js", "content/INTRODUCTION.md",
    "data/en.json", "data/pt.json", "icon.svg", "icon-192.png",
    "icon-512.png", "index.html", "manifest.webmanifest",
    "media-controller.js", "scripts/test_media_controller.js",
    "scripts/test_service_worker.js", "scripts/test_state_runtime.js",
    "scripts/test_tutor_runtime.js", "scripts/verify_project.py",
    "start_local.command", "styles.css", "sw.js", "tutor-prompts.js",
    "tutor-runtime.js",
}
ALLOWED_PREFIXES = ("audio/", "images/")
FORBIDDEN_PUBLIC_NAMES = {
    "artifacts", "reports", "review-prompts", "tmp", "NEXT_CHAT_PROMPT.md",
    "PROJECT_STATE.md", "QA_CHECKLIST.md", "REMEDIATION_PLAN.md",
    "TECHNICAL_HANDOFF.md", "TUTOR_PROMPT_PACKAGE.md",
    "IMAGE_QA_HANDOFF_PROMPT.md", "IMAGE_QA_HANDOFF_PROMPT 2.md",
}


def fail(message, failures):
    failures.append(message)
    print(f"FAIL: {message}")


def passed(message):
    print(f"PASS: {message}")


def relative_files():
    return {
        path.relative_to(ROOT).as_posix()
        for path in ROOT.rglob("*")
        if path.is_file() and ".git" not in path.parts
    }


def load_json(relative, failures):
    try:
        return json.loads((ROOT / relative).read_text(encoding="utf-8"))
    except Exception as error:
        fail(f"Invalid JSON in {relative}: {error}", failures)
        return None


def walk_strings(value):
    if isinstance(value, dict):
        for item in value.values():
            yield from walk_strings(item)
    elif isinstance(value, list):
        for item in value:
            yield from walk_strings(item)
    elif isinstance(value, str):
        yield value


def course_units(data):
    return [unit for track in data.get("tracks", {}).values() for unit in track]


def validate_tree(files, failures):
    missing = sorted(REQUIRED_FILES - files)
    if missing:
        fail("Missing required release files: " + ", ".join(missing), failures)
    else:
        passed("Required release files exist")

    forbidden = sorted(name for name in FORBIDDEN_PUBLIC_NAMES if (ROOT / name).exists())
    if forbidden:
        fail("Internal development material remains public: " + ", ".join(forbidden), failures)
    else:
        passed("Internal development archive is outside the release tree")

    allowed = REQUIRED_FILES | {name for name in files if name.startswith(ALLOWED_PREFIXES)}
    unexpected = sorted(files - allowed)
    if unexpected:
        fail("Unexpected release files: " + ", ".join(unexpected[:20]), failures)
    else:
        passed("Release tree contains only allowlisted files")

    symlinks = [path.relative_to(ROOT).as_posix() for path in ROOT.rglob("*") if path.is_symlink() and ".git" not in path.parts]
    if symlinks:
        fail("Release contains symbolic links: " + ", ".join(symlinks), failures)
    else:
        passed("Release contains no symbolic links")


def validate_version_and_author(failures):
    manifest = load_json("manifest.webmanifest", failures)
    if manifest and manifest.get("version") == VERSION:
        passed(f"Manifest version is {VERSION}")
    else:
        fail(f"Manifest version is not {VERSION}", failures)

    sources = {name: (ROOT / name).read_text(encoding="utf-8") for name in ("app.js", "index.html", "sw.js", "README.md", "README.pt-BR.md")}
    required_tokens = {
        "app.js": [f'APP_VERSION = "{VERSION}"', AUTHOR_URL],
        "index.html": [f'content="{VERSION}"', f"?v={VERSION}"],
        "sw.js": [f"v{VERSION}", f"?v={VERSION}"],
        "README.md": [f"Version {VERSION}", AUTHOR_URL],
        "README.pt-BR.md": [f"Versão {VERSION}", AUTHOR_URL],
    }
    misses = [f"{name}:{token}" for name, tokens in required_tokens.items() for token in tokens if token not in sources[name]]
    if misses:
        fail("Version or author-link contract is incomplete: " + ", ".join(misses), failures)
    else:
        passed("Version and author link are consistent")


def validate_courses(failures):
    referenced_audio = set()
    referenced_images = set()
    for language in ("en", "pt"):
        data = load_json(f"data/{language}.json", failures)
        if data is None:
            continue
        units = course_units(data)
        ids = [unit.get("id") for unit in units]
        duplicates = sorted({item for item in ids if ids.count(item) > 1})
        if duplicates:
            fail(f"Duplicate {language} learning IDs: {duplicates[:10]}", failures)
        else:
            passed(f"{language}: {len(ids)} unique learning IDs")
        text = json.dumps(data, ensure_ascii=False)
        if '"ru"' in text:
            fail(f"{language}: obsolete ru field remains", failures)
        for value in walk_strings(data):
            if value.startswith("audio/"):
                referenced_audio.add(value)
            elif value.startswith("images/"):
                referenced_images.add(value)

    actual_audio = {path.relative_to(ROOT).as_posix() for path in (ROOT / "audio").rglob("*.mp3")}
    actual_images = {path.relative_to(ROOT).as_posix() for path in (ROOT / "images").rglob("*.webp")}
    missing_audio = sorted(referenced_audio - actual_audio)
    unused_audio = sorted(actual_audio - referenced_audio)
    missing_images = sorted(referenced_images - actual_images)
    unused_images = sorted(actual_images - referenced_images)
    if missing_audio or unused_audio:
        fail(f"Audio closure mismatch: {len(missing_audio)} missing, {len(unused_audio)} unused", failures)
    else:
        passed(f"Audio closure: {len(actual_audio)} referenced MP3 files")
    if missing_images or unused_images:
        fail(f"Image closure mismatch: {len(missing_images)} missing, {len(unused_images)} unused", failures)
    else:
        passed(f"Image closure: {len(actual_images)} referenced WebP files")
    return actual_audio, actual_images


def validate_media(audio, images, failures):
    bad_audio = []
    for relative in audio:
        payload = (ROOT / relative).read_bytes()[:3]
        if len(payload) < 2 or not (payload == b"ID3" or (payload[0] == 0xFF and payload[1] & 0xE0 == 0xE0)):
            bad_audio.append(relative)
    if bad_audio:
        fail(f"Invalid MP3 signatures: {len(bad_audio)}", failures)
    else:
        passed("All referenced audio has an MP3 signature")

    bad_images = []
    for relative in images:
        payload = (ROOT / relative).read_bytes()[:12]
        if len(payload) < 12 or payload[:4] != b"RIFF" or payload[8:12] != b"WEBP":
            bad_images.append(relative)
    if bad_images:
        fail(f"Invalid WebP signatures: {len(bad_images)}", failures)
    else:
        passed("All referenced images have a WebP signature")

    dimensions = {}
    for size in (192, 512):
        payload = (ROOT / f"icon-{size}.png").read_bytes()
        dimensions[size] = struct.unpack(">II", payload[16:24])
    if dimensions != {192: (192, 192), 512: (512, 512)}:
        fail(f"PWA icon dimensions are incorrect: {dimensions}", failures)
    else:
        passed("PWA icon dimensions are correct")


def validate_text_and_limits(files, failures):
    cyrillic = []
    secrets = []
    oversize = []
    total_size = 0
    for relative in files:
        path = ROOT / relative
        size = path.stat().st_size
        total_size += size
        if size >= MAX_GITHUB_FILE_BYTES:
            oversize.append(relative)
        if path.suffix.lower() in {".mp3", ".webp", ".png", ".jpg", ".jpeg", ".ico"} or path.resolve() == Path(__file__).resolve():
            continue
        text = path.read_text(encoding="utf-8", errors="ignore")
        if CYRILLIC.search(text):
            cyrillic.append(relative)
        for pattern in SECRET_PATTERNS:
            if pattern.search(text):
                secrets.append(f"{relative}:{pattern.pattern}")
    if cyrillic:
        fail("Cyrillic found in: " + ", ".join(cyrillic), failures)
    else:
        passed("Only English and Brazilian Portuguese text is present")
    if secrets:
        fail("Credential or local-path pattern found in: " + ", ".join(secrets), failures)
    else:
        passed("No credential or local key-file patterns")
    if oversize:
        fail("Files exceed the GitHub 100 MB limit: " + ", ".join(oversize), failures)
    else:
        passed("No file exceeds the GitHub 100 MB limit")
    if total_size >= MAX_RELEASE_BYTES:
        fail(f"Release tree exceeds 1 GB: {total_size} bytes", failures)
    else:
        passed(f"Release tree size: {total_size / 1024 / 1024:.1f} MB")


def validate_runtime_contracts(failures):
    app = (ROOT / "app.js").read_text(encoding="utf-8")
    index = (ROOT / "index.html").read_text(encoding="utf-8")
    worker = (ROOT / "sw.js").read_text(encoding="utf-8")
    if "speechSynthesis" in app or "SpeechSynthesis" in app:
        fail("System speech remains in the application runtime", failures)
    else:
        passed("No system-speech route in the runtime")
    for script in ("media-controller.js", "tutor-prompts.js", "tutor-runtime.js", "app.js"):
        if script not in index or f'"./{script}?v={VERSION}"' not in worker:
            fail(f"Versioned shell reference is missing for {script}", failures)
            return
    passed("Versioned application shell is complete")
    if "key.startsWith(SHELL_CACHE_PREFIX)" not in worker or "media-v1" not in worker:
        fail("Service-worker cache ownership is not restricted", failures)
    else:
        passed("Service-worker cache ownership is restricted")


def validate_introduction(failures):
    introduction = (ROOT / "content/INTRODUCTION.md").read_text(encoding="utf-8")
    if "reserved for the author's introductory text" in introduction:
        fail("Author introduction is still a placeholder", failures)
    else:
        passed("Author introduction is present")


def main():
    failures = []
    files = relative_files()
    validate_tree(files, failures)
    validate_version_and_author(failures)
    audio, images = validate_courses(failures)
    validate_media(audio, images, failures)
    validate_text_and_limits(files, failures)
    validate_runtime_contracts(failures)
    validate_introduction(failures)
    if failures:
        print(f"\n{len(failures)} release verification failure(s)")
        return 1
    print("\nVersion 0.91 release verification passed")
    return 0


if __name__ == "__main__":
    sys.exit(main())
