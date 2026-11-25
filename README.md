# RangBharo

Color by Number — 196 pictures, ads-only, free game

**Package (Android application ID):** `com.rangbharo.colorbynumber`

## Play it

Open `www/index.html` in a browser — no build step needed for the web version.

## Build the Android APK (GitHub Actions)

Every push to `main` runs `.github/workflows/build-apk.yml` and produces a
debug APK (`rangbharo-debug-apk`). For a signed release APK, add these repo
secrets (Settings → Secrets and variables → Actions) once:

- `ANDROID_KEYSTORE_BASE64` — base64 of your `.keystore` file
- `KEYSTORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD`

Then the workflow also uploads `rangbharo-release-apk`. Keep the keystore
file and its passwords safe — without them, later updates cannot be signed
with the same key.

## Ads — AdMob (real IDs not yet added)

Earning is ads-only (video ads, no pop-ups, no paid Premium):

- App Open ad — once, when the app opens
- Banner — Home screen only, never while playing
- Interstitial — after every 3rd level (Fruit Slice: after every 2nd game)
- Rewarded video — only when the player taps Watch Ad (hint / unlock)

Put the real AdMob IDs in the marked **ADMOB** config block in
`www/index.html` (search for `ADMOB`): `appId`, `bannerUnitId`,
`interstitialUnitId`, `rewardedUnitId`, `appOpenUnitId`. Real RangBharo AdMob IDs are in the code now (pasted 2026-11-25) — real ads only run
after the APK is built and uploaded.
Each game has its own AdMob app and its own IDs; IDs from another game
do not work here.
