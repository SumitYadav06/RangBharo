# RangBharo — APK build pack (taiyaar, 2026-11-15)
Prepared 2026-11-15 morning IST. Repo select hote hi ye files repo ke root me daal do — APK build shuru ho jayega. A/B jawab ka intezar nahi karna: debug APK bina AdMob IDs ke bhi ban jata hai, sirf usme real ads nahi chalenge.

## Is pack me kya hai
- `www/index.html` — game ka live v14 (196 pictures, 306,571 bytes, sha256 `d10f6cbb488855647e51aa187f1f7f213436bf1b06f43bba0c4abd89a69344e6`). Game update ho to ye file dobara copy karni hai.
- `www/icon.png` — 256×256 PNG icon (Uptodown ke liye kaafi; Play Store ko baad me 512×512 chahiye hoga).
- `capacitor.config.ts` — appId `com.rangbharo.colorbynumber`, appName `RangBharo` (upload ke baad package badalna mushkil, isliye yahi final hai).
- `package.json` — Capacitor 6, `@capacitor/core` + `@capacitor/cli` + `@capacitor/android`.
- `.github/workflows/build-apk.yml` — GitHub Actions: har push par debug APK banata hai, aur keystore secrets milne par signed release APK bhi.
- `manifest.webmanifest` — PWABuilder wale dusre raaste ke liye, abhi optional hai.

## Repo select karte hi — 3 steps
1. GitHub par naya repo banao (ya purana select karo), is pack ki saari files repo ke root me daalo, push karo.
2. Actions tab kholo — `build-apk` workflow chalega, 5–10 minute me `rangbharo-debug.apk` artifact milega. Phone par install karke test karo.
3. Uptodown par upload ke liye signed APK chahiye: pehle ek baar keystore banao (neeche dekho), phir 4 secrets repo me daalo, dobara push karo — `rangbharo-release.apk` bhi ban jayega.

## Signed APK ke liye keystore (ek baar, apne computer par)
```bash
keytool -genkey -v -keystore rangbharo.keystore -alias rangbharo -keyalg RSA -keysize 2048 -validity 10000
# base64 me badlo, phir GitHub repo → Settings → Secrets and variables → Actions me daalo:
#   ANDROID_KEYSTORE_BASE64 = base64 wali poori string
#   KEYSTORE_PASSWORD, KEY_ALIAS=rangbharo, KEY_PASSWORD
```
Keystore file aur passwords kho mat dena — inke bina aage ke updates sign nahi honge.

## Sach baatein
- Debug APK test ke liye hai; Uptodown par signed release APK upload karna.
- Real video ads tabhi chalenge jab AdMob ke real IDs game me dalein — wo A/B faisle ke baad hoga. Is pack se APK banna us par ruka nahi hai.
- Game sirf Google Fonts (Fredoka + Nunito) ke liye internet mangta hai; offline ho to system font se chal jayega.
- Play Store ko APK nahi, AAB chahiye — wo isi setup se `bundleRelease` se banega, par pehle Uptodown + APK hi lakshya hai.
