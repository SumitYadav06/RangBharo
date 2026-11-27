# @dripply/unity-ads — local Capacitor plugin for Unity Ads

No maintained npm plugin for Unity Ads exists
(`@capacitor-community/unity-ads` does not exist; the single-maintainer
`capacitor-unity-ads` has no banner support and is unmaintained), so
this minimal plugin is written here and shipped inside the Dripply repo.

## What it does

Wraps the Unity Ads Android SDK **4.18.0** (`com.unity3d.ads:unity-ads`)
for Capacitor 6:

| JS method | Native behaviour |
|---|---|
| `initialize({gameId, testMode})` | `UnityAds.initialize(...)`; resolves `{initialized:true}` only on `onInitializationComplete` |
| `loadInterstitial({placementId})` / `showInterstitial(...)` | load-then-show; show resolves when the ad is dismissed (show complete), rejects on show failure |
| `loadRewarded({placementId})` / `showRewarded(...)` | show resolves `{earned:true}` only on `COMPLETED`; `SKIPPED` resolves `{earned:false}` — the game grants nothing then |
| `showBanner({placementId})` | 320×50 `BannerView` pinned to the bottom of the activity |
| `hideBanner()` | removes + destroys the banner |

All Unity calls run on the UI thread. The Game ID and placement IDs
are passed in from JS (`www/index.html`); this plugin contains no ad
IDs of its own. Web fallback (`src/web.ts`) fails honestly — Unity Ads
cannot run in a browser.

## How it gets into the APK

The app's `package.json` depends on it as `"@dripply/unity-ads":
"file:plugins/unity-ads"`. `npm install` copies it into
`node_modules`, and `npx cap sync android` registers it (see
`android/app/src/main/assets/capacitor.plugins.json` and the
`settings.gradle` include). The workflow's "Verify Unity Ads wiring"
step fails the build if the plugin is not registered.

## Files

- `android/build.gradle` — library module, declares the Unity Ads SDK
- `android/src/main/java/com/dripply/unityads/UnityAdsPlugin.java` — the bridge
- `src/definitions.ts` / `src/index.ts` / `src/web.ts` — TypeScript API
- `dist/` — hand-written equivalent of the `tsc` output (kept in sync
  by hand; the game uses the native bridge, this is the package entry
  + web fallback)
