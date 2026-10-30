# Self-hosted fonts

Noto Sans JP (400–700) and JetBrains Mono (100–800), normal variable WOFF2 subsets, retrieved from Google Fonts on 2026-10-30. Both are distributed under the SIL Open Font License; see the accompanying OFL files.

CSS source: https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400..700&family=JetBrains+Mono:wght@100..800&display=swap

`src/app/fonts.css` preserves the original Unicode ranges and uses local `/fonts/` URLs. Filenames are the first 16 hexadecimal digits of SHA-256 of the original Google Fonts resource URL. This removes build-time and runtime requests to Google Fonts.
