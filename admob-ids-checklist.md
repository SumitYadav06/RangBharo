# AdMob IDs — 4 games checklist (2026-11-25, 10:00 IST)

Final: AdMob hi, abhi. AppLovin MAX baad me, jab downloads badhen.
Login ho gaya hai — ab sirf IDs chahiye.

## Har game ke liye alag app banao (AdMob > Apps > Add App > Android)

| Game | Package — yehi use karo |
|---|---|
| RangBharo | `com.rangbharo.colorbynumber` |
| BubbleBharo | `com.bubblebharo.shooter` |
| Fruit Slice | `com.fruitslice.game` |
| SaanpBharo | `com.saanpbharo.snake` |

Agar RangBharo ka app purane package se bana liya ho to bata do — wo entry galat hogi.

## Har game se 5 IDs bhejo

1. App ID (ca-app-pub-...)
2. Banner unit ID
3. Interstitial unit ID
4. Rewarded unit ID
5. App Open unit ID

Kul 20 IDs (4 games × 5). Ek game ke IDs dusre me nahi chalenge.
IDs milte hi main chaaro game me daal dunga. Login/password/OTP kabhi mat bhejo.

## Ads kaise lagenge (user pareshan na ho)

- App Open: sirf 1 baar, kholte time
- Banner: sirf Home par, khelte time nahi
- Interstitial: har 3 level ke baad, har level par nahi
- Rewarded: sirf jab user khud Watch Ad dabaye (hint / unlock)

## GitHub — long term ke liye

Sab games Muse server par hain, delete nahi hote — par edit + APK ke liye apna GitHub repo best hai.
RangBharo ka APK pack taiyaar hai, naye package `com.rangbharo.colorbynumber` par update kar diya gaya hai
(`workspace/goals/color-by-number-game/files/rangbharo-apk-build-pack/capacitor.config.ts`).
GitHub repo: is repo me code hai — push karte hi debug APK build shuru hoga.
Privacy policy draft me bhi naya package + 196 pictures kar diye gaye hain; sirf developer naam aur contact email bharna baki hai.
