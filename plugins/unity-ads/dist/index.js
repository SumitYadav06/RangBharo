// Hand-written equivalent of `tsc` output for src/index.ts + src/web.ts
// (kept in sync by hand; the game loads the native plugin through the
// Capacitor bridge, this bundle is the web fallback + package entry).
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnityAds = void 0;
const core_1 = require("@capacitor/core");
class UnityAdsWeb extends core_1.WebPlugin {
    async initialize() {
        return { initialized: false, error: 'Unity Ads is not available on web' };
    }
    async isInitialized() {
        return { initialized: false };
    }
    async loadInterstitial() {
        throw new Error('Unity Ads is not available on web');
    }
    async showInterstitial() {
        throw new Error('Unity Ads is not available on web');
    }
    async loadRewarded() {
        throw new Error('Unity Ads is not available on web');
    }
    async showRewarded() {
        throw new Error('Unity Ads is not available on web');
    }
    async showBanner() {
        throw new Error('Unity Ads is not available on web');
    }
    async hideBanner() {
        return;
    }
}
const UnityAds = (0, core_1.registerPlugin)('UnityAds', {
    web: () => Promise.resolve().then(() => ({ UnityAdsWeb })).then((m) => new m.UnityAdsWeb()),
});
exports.UnityAds = UnityAds;
//# sourceMappingURL=index.js.map
