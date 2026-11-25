# RangBharo

Color by Number — 214 pictures, ads-only, free game

**Package (Android application ID):** `com.rangbharo.colorbynumber`

## What's new — Version 15.1 (2026-11-25)

- **214 pictures**: the 44 simple v15 pictures were removed (they were
  too easy and not interesting) and replaced with **18 hard,
  professional pictures** — 25–50 regions each, machine-checked so
  every region stays tappable and Hint points at the right part:
  Royal Mandala (50), Honey Bee Hive (46), Steam Train (44),
  Proud Peacock (40), Butterfly Garden (38), Yummy Pizza (37),
  Baby Dragon (36, Special), Sushi Platter (34), Balloon Festival
  (34), Fish Tank (32), Fairytale Castle (31), Gentle Elephant (30),
  Jet Plane (30), Pirate Ship (30), Sea Turtle (28), Moon Rocket
  (28), Big Burger (27), Wise Owl (25). The original 196 pictures
  keep their level numbers, so saved progress is unaffected.
  Special pictures: 16 (15 original + Baby Dragon).
- **Auto-updating levels (no new APK needed)**: the game now fetches
  `www/extra-pictures.json` from the public repo on launch (4-second
  timeout, silent offline fallback). New pictures added to that file
  appear in the installed app automatically — appended after the
  bundled ones, so level numbers and saved progress never change.
  Format: `{"version":1,"pictures":[{"id":"snowman","title":"Snowman",
  "cat":"nature","diff":2,"premium":false,"pal":3,"regions":[
  {"t":"circle","cx":200,"cy":200,"r":50,"n":1}],"decor":""}]}`.
  Rules: unique id (lowercase letters/digits/dashes), cat must be
  one of animals/nature/food/vehicles/ocean/space/patterns, diff
  1–4, 3–80 regions, each region a circle/ellipse/rect/polygon
  inside the 400×400 canvas with colour number 1–16, max 50 remote
  pictures. Any bad entry is skipped; any fetch failure is ignored.

## What's new — Version 15.0 (2026-11-25)

- **240 pictures** (was 196): 44 new colour-by-number pictures, all
  machine-checked so every region stays tappable and Hint points at
  the right part — animals (hamster, chameleon, meerkat, red panda,
  axolotl, capybara, llama, ostrich, armadillo, platypus, seagull,
  firefly), vehicles (jet ski, snowmobile, forklift, tram, rickshaw,
  monster truck, hovercraft, tow truck), food (croissant, waffle,
  bubble tea, ramen, dumplings, honey pot, peach, mango, kiwi,
  coconut), nature (daisy, rose, palm tree, mountains, beach),
  ocean (sandcastle, surfboard, pearl clam), space (nebula, moon
  rover), patterns (zigzag, rainbow spiral) — plus 2 new Special
  pictures (Golden Whale, Crystal Castle), so Special is now 17.
  Existing pictures keep their level numbers, so saved progress is
  unaffected.
- **Real artwork (9 pictures, ~8 MB, in `www/assets/`)**: a splash
  hero on Home, a scene banner above the gallery that follows the
  Up Next picture's world (animals / ocean / space / food / nature /
  art studio), and a celebration picture on the win screen. All
  local files — the game still works fully offline — and lazy-loaded
  so the first paint stays fast.
- **Real music + sound (in `www/assets/music/` and
  `www/assets/sfx/`)**: 3 original background-music tracks
  (~2 minutes each, looped playlist) and 6 original sound effects
  (tap, pop, good, wrong, win, unlock). All audio is **original work
  composed and synthesized in code for RangBharo** — no samples, no
  third-party or commercial music, no copyrighted material — so it
  is safe for Uptodown upload and for monetisation, with no
  licence/attribution needed. The existing Settings sound/music
  toggles still control them, and the old WebAudio melody stays as
  a fallback if a file ever fails to load.

`www/` is now ~15 MB, so the built APK is ~22 MB (was ~8 MB).

## Play it

Open `www/index.html` in a browser — no build step needed for the web version.

## Build the Android APK (GitHub Actions)

Every push to `main` runs `.github/workflows/build-apk.yml` and produces a
debug APK (`rangbharo-debug-apk`). The workflow also applies the final
launcher icon and writes the AdMob App ID into the Android manifest.
A signed release APK is a separate later step (keystore + signing config
are not wired into this workflow yet — do not promise a release APK
from this repo as it stands).

## Ads — AdMob (real IDs wired in)

Earning is ads-only (video ads, no pop-ups, no paid Premium):

- App Open ad — once, when the app opens (note: the current AdMob plugin
  has no App Open format, so this slot is still a demo overlay until a
  plugin with App Open support is added)
- Banner — Home screen only, never while playing
- Interstitial — after every 3rd level
- Rewarded video — only when the player taps Watch Ad (hint / unlock)

Real RangBharo AdMob IDs are in the code (`ADMOB_CONFIG` in
`www/index.html`) and the game talks to the real AdMob SDK through
`@capacitor-community/admob` v6 (`window.AdMobNative`). Real ads only run
in the APK after it is built and uploaded; the web preview shows demo
overlays instead. Each game has its own AdMob app and its own IDs; IDs
from another game do not work here.
