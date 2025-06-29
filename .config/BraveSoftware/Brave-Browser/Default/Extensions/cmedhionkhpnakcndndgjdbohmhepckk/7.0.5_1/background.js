/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/background/helpers/calculate-dau.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var calculateDau = function () {
    setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            chrome.runtime.reload();
            return [2];
        });
    }); }, 86400 * 1000);
};

;// ./src/background/helpers/dynamic-rules-helpers.ts
var findDynamicRuleSeparatorIndex = function (rule) {
    for (var i = rule.length - 1; i >= 0; i -= 1) {
        if (rule[i] === '$' && rule[i + 1] !== '/' && rule[i - 1] !== '\\') {
            return i;
        }
    }
    return -1;
};

;// ./src/constants/default-data/network-rules.ts
var networkRulesFallback = [
    '||youtube.com/pagead/',
    '||youtube.com/youtubei/v1/player/ad_break',
    '||www.youtube.com/get_midroll_',
    '||youtube.com/get_video_info?*=adunit&',
    '||youtube.com/get_video_info?*adunit',
    '||youtube.com/embed/*&origin=https%3A%2F%2Fwww.feltet.dk&widgetid=1$subdocument',
    '||youtube.com/embed/wqLWTeNBEEQ?',
    '||youtube.com/embed/-pGjd8-iyDQ',
    '||youtube.com/embed/46p5FwQdA64',
    '||youtube.com/embed/5tDSbsDqekU',
    '||youtube.com/embed/9olr5bechjI',
    '||youtube.com/embed/_6eiTXwuYoM',
    '||youtube.com/embed/CfBt63FbFNE',
    '||youtube.com/embed/dVD5yqGie9s',
    '||youtube.com/embed/GHomo-YgJNc',
    '||youtube.com/embed/h_PXz0vN5H4',
    '||youtube.com/embed/HF49uJ-e0zg',
    '||youtube.com/embed/Innx3oYcTWQ',
    '||youtube.com/embed/iNtajKR6ZCs',
    '||youtube.com/embed/iSsvK-L5CWI',
    '||youtube.com/embed/M63OoLc3WAI',
    '||youtube.com/embed/M6fO3qmXrhE',
    '||youtube.com/embed/MdidROnkjuo',
    '||youtube.com/embed/mILt9Fnh9bI',
    '||youtube.com/embed/Oknp4IAlagg',
    '||youtube.com/embed/qBR1xJA_nyY',
    '||youtube.com/embed/qZyibLqhGhs',
    '||youtube.com/embed/R5MZoHLaxCw',
    '||youtube.com/embed/r_MQnkukVrA',
    '||youtube.com/embed/SbtEQ5-Tzkc',
    '||youtube.com/embed/uETU52vKKOU',
    '||youtube.com/embed/VYuSDoPGeCk',
    '||youtube.com/embed/wr-wYUOdKi8',
    '||youtube.com/embed/zIQ6e--UWOw',
    '||youtube.com/embed/ZpENWJBmE10',
    '||youtube.com/embed/1ljpiLRAAho',
    '||youtube.com/embed/ixacW9YeJD0',
    '||youtube.com/embed/o19SibpQEcI',
    '||youtube.com/embed/Rr8SMpvYX2I?',
    '||youtube.com/embed/wuZ5Az_ANLU',
    '||googlesyndication.com^',
    '||googleads.g.doubleclick.net',
    '||doubleclick.com',
    '||google.com/pagead/',
    '||googlevideo.com/initplayback?source=youtube&*&c=TVHTML5&oad=$xmlhttprequest',
];
var youtubeAnnotationsRegexes = ['*annotations_invideo*'];

;// ./src/enums/extension-keys.enum.ts
var ExtensionsKeys;
(function (ExtensionsKeys) {
    ExtensionsKeys["InstalledAt"] = "installedAt";
    ExtensionsKeys["StorageVersion"] = "storageVersion";
    ExtensionsKeys["ExtensionVersion"] = "extensionVersion";
})(ExtensionsKeys || (ExtensionsKeys = {}));

;// ./src/enums/settings-keys.enum.ts
var SettingsKeys;
(function (SettingsKeys) {
    SettingsKeys["Ads"] = "ads";
    SettingsKeys["Annotations"] = "annotations";
    SettingsKeys["NetworkRules"] = "networkRules";
    SettingsKeys["CssRules"] = "cssRules";
    SettingsKeys["PopupConfig"] = "popupConfig";
    SettingsKeys["ScripletsRules"] = "scripletsRules";
    SettingsKeys["OldDailymotionAdBlockingSelectors"] = "dailymotionAdBlockingSelectors";
    SettingsKeys["OldDailymotionAdRegex"] = "dailymotionAdRegex";
    SettingsKeys["OldAdditionalBlockingEnabled"] = "isAdditionalBlockingEnabled";
    SettingsKeys["OldYoutubeAdRegex"] = "youtubeAdRegex";
    SettingsKeys["OldAdBlockingSelectors"] = "adBlockingSelectors";
    SettingsKeys["OldScriptlets"] = "scriptlets";
})(SettingsKeys || (SettingsKeys = {}));

;// ./src/enums/actions.enum.ts
var ActionsEnum;
(function (ActionsEnum) {
    ActionsEnum["PageReady"] = "PAGE_READY";
    ActionsEnum["Ping"] = "PING";
})(ActionsEnum || (ActionsEnum = {}));

;// ./src/enums/popup-keys.enum.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var PopupRestrictionKeysEnum;
(function (PopupRestrictionKeysEnum) {
    PopupRestrictionKeysEnum["ConfigurablePopupRestriction"] = "configurablePopupRestriction";
    PopupRestrictionKeysEnum["AntiAdblockPopupRestriction"] = "antiAdblockPopupRestriction";
    PopupRestrictionKeysEnum["PopupGeneralRestriction"] = "popupGeneralRestriction";
    PopupRestrictionKeysEnum["RatingPopupRestriction"] = "ratingDialogShown";
    PopupRestrictionKeysEnum["OldOtherStreamingPopupRestriction"] = "otherStreamingPopupRestriction";
    PopupRestrictionKeysEnum["OldUpdatePopupRestriction"] = "updatePopupRestriction";
})(PopupRestrictionKeysEnum || (PopupRestrictionKeysEnum = {}));
var PopupDontShowKeysEnum;
(function (PopupDontShowKeysEnum) {
    PopupDontShowKeysEnum["ConfigurablePopupDoNotShow"] = "configurablePopupDoNotShow";
    PopupDontShowKeysEnum["AntiAdblockPopupDoNotShow"] = "antiAdblockPopupDoNotShow";
    PopupDontShowKeysEnum["RateUsPopupDoNotShow"] = "rateUsPopupDoNotShow";
    PopupDontShowKeysEnum["OldOtherStreamingPopupDoNotShow"] = "otherStreamingPopupDoNotShow";
    PopupDontShowKeysEnum["OldUpdatePopupDoNotShow"] = "updatePopupDoNotShow";
})(PopupDontShowKeysEnum || (PopupDontShowKeysEnum = {}));
var PopupKeys = __assign(__assign({}, PopupRestrictionKeysEnum), PopupDontShowKeysEnum);
var PopupTypesEnum;
(function (PopupTypesEnum) {
    PopupTypesEnum["Windows"] = "windows";
    PopupTypesEnum["Mobile"] = "mobile";
    PopupTypesEnum["AntiAdblock"] = "anti-adblock";
    PopupTypesEnum["RateUs"] = "rate-us";
})(PopupTypesEnum || (PopupTypesEnum = {}));

;// ./src/enums/request.enum.ts
var ModifiersRequestTypeEnum;
(function (ModifiersRequestTypeEnum) {
    ModifiersRequestTypeEnum["SubDocument"] = "subdocument";
    ModifiersRequestTypeEnum["Script"] = "script";
    ModifiersRequestTypeEnum["Stylesheet"] = "stylesheet";
    ModifiersRequestTypeEnum["Object"] = "object";
    ModifiersRequestTypeEnum["Image"] = "image";
    ModifiersRequestTypeEnum["XmlHttpRequest"] = "xmlhttprequest";
    ModifiersRequestTypeEnum["Media"] = "media";
    ModifiersRequestTypeEnum["Font"] = "font";
    ModifiersRequestTypeEnum["WebSocket"] = "websocket";
    ModifiersRequestTypeEnum["Ping"] = "ping";
    ModifiersRequestTypeEnum["CspReport"] = "csp_report";
})(ModifiersRequestTypeEnum || (ModifiersRequestTypeEnum = {}));

;// ./src/enums/index.ts






;// ./src/constants/resource-map.ts
var _a;

var ResourceType = chrome.declarativeNetRequest.ResourceType;
var resourceMap = (_a = {},
    _a[ModifiersRequestTypeEnum.CspReport] = ResourceType.CSP_REPORT,
    _a[ModifiersRequestTypeEnum.Image] = ResourceType.IMAGE,
    _a[ModifiersRequestTypeEnum.Script] = ResourceType.SCRIPT,
    _a[ModifiersRequestTypeEnum.Stylesheet] = ResourceType.STYLESHEET,
    _a[ModifiersRequestTypeEnum.Font] = ResourceType.FONT,
    _a[ModifiersRequestTypeEnum.Media] = ResourceType.MEDIA,
    _a[ModifiersRequestTypeEnum.SubDocument] = ResourceType.SUB_FRAME,
    _a[ModifiersRequestTypeEnum.XmlHttpRequest] = ResourceType.XMLHTTPREQUEST,
    _a[ModifiersRequestTypeEnum.WebSocket] = ResourceType.WEBSOCKET,
    _a[ModifiersRequestTypeEnum.Ping] = ResourceType.PING,
    _a);

;// ./src/constants/default-data/css-rules.ts
var cssRulesFallback = [
    '#offer-module',
    '#promotion-shelf',
    '#shorts-inner-container > .ytd-shorts:has(> .ytd-reel-video-renderer > ytd-ad-slot-renderer)',
    'ytd-rich-item-renderer:has(> #content > ytd-ad-slot-renderer)',
    '.ytReelMetapanelViewModelHost > .ytReelMetapanelViewModelMetapanelItem > .ytShortsSuggestedActionViewModelStaticHost',
    '.ytd-section-list-renderer > .ytd-item-section-renderer > ytd-search-pyv-renderer.ytd-item-section-renderer',
    '.ytd-two-column-browse-results-renderer > ytd-rich-grid-renderer > #masthead-ad.ytd-rich-grid-renderer',
    '.ytd-watch-flexy > .ytd-watch-next-secondary-results-renderer > ytd-ad-slot-renderer.ytd-watch-next-secondary-results-renderer',
    '.ytd-watch-flexy > ytd-merch-shelf-renderer > #main.ytd-merch-shelf-renderer',
    '.grid.ytd-browse > #primary > .style-scope > .ytd-rich-grid-renderer > .ytd-rich-grid-renderer > .ytd-ad-slot-renderer',
    '.ytd-rich-item-renderer.style-scope > .ytd-rich-item-renderer > .ytd-ad-slot-renderer.style-scope',
    'ytd-item-section-renderer > .ytd-item-section-renderer > ytd-ad-slot-renderer.style-scope',
    '.ytp-suggested-action > .ytp-suggested-action-badge',
];

;// ./src/constants/default-data/popup-config.ts

var DefaultPopupsConfig = {
    isAntiAdblockPopupEnabled: false,
    isRateUsPopupEnabled: false,
    configurablePopup: {
        type: PopupTypesEnum.Mobile,
        isEnabled: false,
        doNotShowAgainMinutes: 120,
    },
};

;// ./src/constants/scriptlets/sriptlets.ts
var scripletsFallback = [
    {
        name: 'set-constant',
        args: ['ytInitialPlayerResponse.adPlacements', 'undefined'],
    },
    {
        name: 'set-constant',
        args: ['ytInitialPlayerResponse.adSlots', 'undefined'],
    },
    {
        name: 'set-constant',
        args: ['ytInitialPlayerResponse.playerAds', 'undefined'],
    },
    {
        name: 'set-constant',
        args: ['playerResponse.adPlacements', 'undefined'],
    },
    {
        name: 'set-constant',
        args: ['google_ad_status', '1'],
    },
    {
        name: 'json-prune',
        args: ['playerResponse.adPlacements playerResponse.adSlots', 'playerResponse.streamingData.serverAbrStreamingUrl'],
    },
    {
        name: 'json-prune-xhr-response',
        args: [
            'playerResponse.adPlacements playerResponse.playerAds playerResponse.adSlots adPlacements playerAds adSlots',
            '',
            '/playlist\\?list=|\\/player(?!.*(get_drm_license))|watch\\?[tv]=|get_watch\\?/',
        ],
    },
    {
        name: 'json-prune-fetch-response',
        args: [
            'playerResponse.adPlacements playerResponse.playerAds playerResponse.adSlots adPlacements playerAds adSlots',
            '',
            '/playlist\\?list=|player\\?|watch\\?[tv]=|get_watch\\?/',
        ],
    },
    {
        name: 'adjust-setTimeout',
        args: ['[native code]', '17000', '0.001'],
    },
    {
        name: 'trusted-replace-outbound-text',
        args: ['JSON.stringify', 'contentPlaybackContext":{', 'contentPlaybackContext":{"isInlinePlaybackNoAd":true,'],
    },
];

;// ./src/constants/settings.ts
var settings_a;





var settings_Settings = (settings_a = {},
    settings_a[SettingsKeys.Ads] = true,
    settings_a[SettingsKeys.Annotations] = false,
    settings_a[SettingsKeys.NetworkRules] = networkRulesFallback,
    settings_a[SettingsKeys.CssRules] = cssRulesFallback,
    settings_a[SettingsKeys.PopupConfig] = DefaultPopupsConfig,
    settings_a[SettingsKeys.ScripletsRules] = scripletsFallback,
    settings_a);

;// ./src/background/helpers/dynamic-rules.ts
var dynamic_rules_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var dynamic_rules_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};





var assignedRuleIds = 1;
var makeDynamicRules = function (rules, initiatorDomain) {
    return rules.map(function (rule) {
        var dynamicRule = {
            action: {
                type: chrome.declarativeNetRequest.RuleActionType.BLOCK,
            },
            condition: {
                initiatorDomains: [initiatorDomain],
            },
            id: assignedRuleIds++,
        };
        var separatorIndex = findDynamicRuleSeparatorIndex(rule);
        var ruleEnd = separatorIndex === -1 ? rule.length : separatorIndex;
        var ruleWithoutModifiers = rule.slice(0, ruleEnd);
        if (ruleWithoutModifiers.startsWith('/') && ruleWithoutModifiers.endsWith('/')) {
            dynamicRule.condition.regexFilter = ruleWithoutModifiers;
        }
        else {
            dynamicRule.condition.urlFilter = ruleWithoutModifiers;
        }
        if (separatorIndex !== -1) {
            var modifiers = rule.slice(separatorIndex + 1).split(',');
            dynamicRule.condition.resourceTypes = modifiers.map(function (modifier) { return resourceMap[modifier] || modifier; });
        }
        return dynamicRule;
    });
};
var deleteAllDynamicRules = function () { return dynamic_rules_awaiter(void 0, void 0, void 0, function () {
    var existingRules, removeRuleIds;
    return dynamic_rules_generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, chrome.declarativeNetRequest.getDynamicRules()];
            case 1:
                existingRules = _a.sent();
                removeRuleIds = existingRules.map(function (r) { return r.id; });
                assignedRuleIds = 1;
                return [4, chrome.declarativeNetRequest.updateDynamicRules({
                        removeRuleIds: removeRuleIds,
                    })];
            case 2:
                _a.sent();
                return [2];
        }
    });
}); };
var addDynamicRulesFromRegexesArray = function () {
    var args_1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args_1[_i] = arguments[_i];
    }
    return dynamic_rules_awaiter(void 0, __spreadArray([], __read(args_1), false), void 0, function (networkRuesArray, domain) {
        var addRules;
        if (networkRuesArray === void 0) { networkRuesArray = settings_Settings[SettingsKeys.NetworkRules]; }
        if (domain === void 0) { domain = 'youtube.com'; }
        return dynamic_rules_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    addRules = makeDynamicRules(networkRuesArray, domain);
                    return [4, chrome.declarativeNetRequest.updateDynamicRules({
                            addRules: addRules,
                        })];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
};
var updateDynamicRules = function () { return dynamic_rules_awaiter(void 0, void 0, void 0, function () {
    return dynamic_rules_generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, deleteAllDynamicRules()];
            case 1:
                _a.sent();
                if (!settings_Settings[SettingsKeys.Ads]) return [3, 3];
                return [4, addDynamicRulesFromRegexesArray()];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                if (!settings_Settings[SettingsKeys.Annotations]) return [3, 5];
                return [4, addDynamicRulesFromRegexesArray(youtubeAnnotationsRegexes)];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5: return [2];
        }
    });
}); };

;// ./src/constants/extension-data.ts
var EXTENSION_VERSION = chrome.runtime.getManifest().version;
var EXTENSION_ID = chrome.runtime.id;
var CHROME_STORE_LINK = "https://chromewebstore.google.com/detail/".concat(EXTENSION_ID);

;// ./src/constants/urls.ts

var INSTALL_URL = "".concat("https://get.adblock-for-youtube.com", "/install?v=").concat(EXTENSION_VERSION, "&xtid=").concat(EXTENSION_ID);
var UNINSTALL_URL = "".concat("https://get.adblock-for-youtube.com", "/uninstall?v=").concat(EXTENSION_VERSION, "&xtid=").concat(EXTENSION_ID);
var UPDATE_URL = "".concat("https://get.adblock-for-youtube.com", "/update?v=").concat(EXTENSION_VERSION, "&xtid=").concat(EXTENSION_ID);

;// ./src/helpers/storage.ts
var storage_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var storage_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var setToChromeStorage = function (key, value) {
    return new Promise(function (resolve, reject) {
        var _a;
        chrome.storage.local.set((_a = {}, _a[key] = value, _a), function () {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            }
            resolve();
        });
    });
};
var getFromChromeStorage = function (key) {
    return new Promise(function (resolve, reject) {
        chrome.storage.local.get([key], function (result) {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            }
            resolve(result[key]);
        });
    });
};
var setMultipleToChromeStorage = function (data) {
    return new Promise(function (resolve, reject) {
        chrome.storage.local.set(data, function () {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            }
            resolve();
        });
    });
};
var getMultipleFromChromeStorage = function (keys) {
    return new Promise(function (resolve, reject) {
        chrome.storage.local.get(keys, function (result) {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            }
            resolve(result);
        });
    });
};
var removeFromChromeStorage = function (key) {
    return new Promise(function (resolve, reject) {
        chrome.storage.local.remove(key, function () {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            }
            resolve();
        });
    });
};
var setToStorageAndSettings = function (fieldName, value) { return storage_awaiter(void 0, void 0, void 0, function () {
    return storage_generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, setToChromeStorage(fieldName, value)];
            case 1:
                _a.sent();
                Settings[fieldName] = value;
                return [2];
        }
    });
}); };
var setMultiplyToStorageAndSettings = function (settings) { return storage_awaiter(void 0, void 0, void 0, function () {
    return storage_generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, setMultipleToChromeStorage(settings)];
            case 1:
                _a.sent();
                Object.assign(settings_Settings, settings);
                return [2];
        }
    });
}); };

;// ./src/helpers/tabs.ts
var tabs_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var tabs_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var tabs_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var getActiveTab = function () {
    return new Promise(function (resolve, reject) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            var error = chrome.runtime.lastError;
            if (error) {
                reject(error);
            }
            var _a = tabs_read(tabs, 1), tab = _a[0];
            resolve(tab);
        });
    });
};
var getAllTabs = function () {
    return new Promise(function (resolve, reject) {
        chrome.tabs.query({}, function (tabs) {
            var error = chrome.runtime.lastError;
            if (error) {
                reject(error);
            }
            resolve(tabs);
        });
    });
};
var createTab = function (url) {
    return new Promise(function (resolve, reject) {
        chrome.tabs.create({ url: url }, function (tab) {
            var error = chrome.runtime.lastError;
            if (error) {
                reject(error);
            }
            resolve(tab);
        });
    });
};
var safeTabReload = function (tabId) { return tabs_awaiter(void 0, void 0, void 0, function () {
    var e_1;
    return tabs_generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, chrome.tabs.reload(tabId)];
            case 1:
                _a.sent();
                return [3, 3];
            case 2:
                e_1 = _a.sent();
                console.log(e_1);
                return [3, 3];
            case 3: return [2];
        }
    });
}); };

;// ./src/background/helpers/install-handler.ts
var install_handler_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var install_handler_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var installHandler = function () {
    chrome.runtime.onInstalled.addListener(function (_a) { return install_handler_awaiter(void 0, [_a], void 0, function (_b) {
        var _c;
        var reason = _b.reason;
        return install_handler_generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (!(reason === chrome.runtime.OnInstalledReason.INSTALL)) return [3, 3];
                    return [4, setMultipleToChromeStorage((_c = {},
                            _c[SettingsKeys.Ads] = true,
                            _c[SettingsKeys.Annotations] = false,
                            _c))];
                case 1:
                    _d.sent();
                    return [4, createTab(INSTALL_URL)];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3: return [2];
            }
        });
    }); });
};
var uninstallHandler = function () {
    chrome.runtime.setUninstallURL(UNINSTALL_URL);
};
var handleExtensionLifecycleEvents = function () { return install_handler_awaiter(void 0, void 0, void 0, function () {
    return install_handler_generator(this, function (_a) {
        installHandler();
        uninstallHandler();
        return [2];
    });
}); };

;// ./src/background/helpers/listen-messages.ts
var listen_messages_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var listen_messages_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var onMessageCallback = function (message, sender, sendResponse) {
    (function () { return listen_messages_awaiter(void 0, void 0, void 0, function () {
        var type, tab, response;
        var _a;
        return listen_messages_generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    type = message.type;
                    tab = sender.tab;
                    if (!tab || !tab.id)
                        return [2];
                    if (type === ActionsEnum.PageReady) {
                        response = (_a = {},
                            _a[SettingsKeys.Ads] = settings_Settings[SettingsKeys.Ads],
                            _a[SettingsKeys.PopupConfig] = settings_Settings[SettingsKeys.PopupConfig],
                            _a);
                        sendResponse(response);
                    }
                    if (!(type === ActionsEnum.Ping)) return [3, 2];
                    return [4, chrome.runtime.getPlatformInfo()];
                case 1:
                    _b.sent();
                    _b.label = 2;
                case 2: return [2];
            }
        });
    }); })();
    return true;
};
var listenMessages = function () {
    chrome.runtime.onMessage.addListener(onMessageCallback);
};

;// ./src/background/helpers/listen-store-changed.ts
var listen_store_changed_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var listen_store_changed_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var listen_store_changed_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};




var storesChangesCallBack = function (changes) { return listen_store_changed_awaiter(void 0, void 0, void 0, function () {
    var YOUTUBE_REGEX, _a, _b, _c, key, newValue, activeTab, e_1_1;
    var e_1, _d;
    return listen_store_changed_generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                YOUTUBE_REGEX = /^https?:\/\/(\w*.)?youtube.com/i;
                _e.label = 1;
            case 1:
                _e.trys.push([1, 8, 9, 10]);
                _a = __values(Object.entries(changes)), _b = _a.next();
                _e.label = 2;
            case 2:
                if (!!_b.done) return [3, 7];
                _c = listen_store_changed_read(_b.value, 2), key = _c[0], newValue = _c[1].newValue;
                if (![SettingsKeys.Ads, SettingsKeys.Annotations].includes(key)) return [3, 6];
                settings_Settings[key] = newValue;
                return [4, updateDynamicRules()];
            case 3:
                _e.sent();
                return [4, getActiveTab()];
            case 4:
                activeTab = _e.sent();
                if (!((activeTab === null || activeTab === void 0 ? void 0 : activeTab.url) && (activeTab === null || activeTab === void 0 ? void 0 : activeTab.id) && YOUTUBE_REGEX.test(activeTab.url))) return [3, 6];
                return [4, safeTabReload(activeTab.id)];
            case 5:
                _e.sent();
                _e.label = 6;
            case 6:
                _b = _a.next();
                return [3, 2];
            case 7: return [3, 10];
            case 8:
                e_1_1 = _e.sent();
                e_1 = { error: e_1_1 };
                return [3, 10];
            case 9:
                try {
                    if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7];
            case 10: return [2];
        }
    });
}); };
var listenStoreChanged = function () {
    chrome.storage.onChanged.addListener(storesChangesCallBack);
};

;// ./src/background/helpers/main-scheduler.ts
var main_scheduler_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var main_scheduler_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var scheduleHandler = function () {
    chrome.alarms.onAlarm.addListener(function (alarmInfo) { return main_scheduler_awaiter(void 0, void 0, void 0, function () {
        return main_scheduler_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(alarmInfo.name === ActionsEnum.Ping)) return [3, 2];
                    return [4, chrome.runtime.getPlatformInfo()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2];
            }
        });
    }); });
};
var mainScheduler = function () { return main_scheduler_awaiter(void 0, void 0, void 0, function () {
    return main_scheduler_generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                setInterval(function () { return main_scheduler_awaiter(void 0, void 0, void 0, function () {
                    return main_scheduler_generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, chrome.runtime.getPlatformInfo()];
                            case 1:
                                _a.sent();
                                return [2];
                        }
                    });
                }); }, 25000);
                return [4, chrome.alarms.create(ActionsEnum.Ping, {
                        periodInMinutes: 1,
                    })];
            case 1:
                _a.sent();
                scheduleHandler();
                return [2];
        }
    });
}); };

;// ./src/constants/default-data/storage.ts
var STORAGE_VERSION = 2;

;// ./src/background/helpers/runtime-info.ts
var runtime_info_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var runtime_info_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var runtimeInfo;
var collectAndSaveRuntimeInfo = function () { return runtime_info_awaiter(void 0, void 0, void 0, function () {
    var currentExtensionVersion, currentStorageVersion, _a, storedStorageVersion, storedExtensionVersion, isStoreInitialized, isExtensionVersionChanged, isExtensionInstalled, isExtensionUpdated;
    return runtime_info_generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                currentExtensionVersion = EXTENSION_VERSION;
                currentStorageVersion = STORAGE_VERSION;
                return [4, getMultipleFromChromeStorage([
                        ExtensionsKeys.StorageVersion,
                        ExtensionsKeys.ExtensionVersion,
                        ExtensionsKeys.InstalledAt,
                    ])];
            case 1:
                _a = _b.sent(), storedStorageVersion = _a.storageVersion, storedExtensionVersion = _a.extensionVersion, isStoreInitialized = _a.installedAt;
                isExtensionVersionChanged = storedExtensionVersion !== currentExtensionVersion;
                isExtensionInstalled = isExtensionVersionChanged && !storedExtensionVersion;
                isExtensionUpdated = isExtensionVersionChanged && !!storedExtensionVersion;
                runtimeInfo = {
                    appVersion: currentExtensionVersion,
                    isAppVersionChanged: isExtensionUpdated,
                    schemaVersion: currentStorageVersion,
                    savedStorageVersion: typeof storedStorageVersion === 'number' ? storedStorageVersion : 0,
                    savedAppVersion: storedExtensionVersion,
                    isAppDownloaded: isExtensionInstalled,
                    isInstalledKeyPresent: !!isStoreInitialized,
                };
                return [2, runtimeInfo];
        }
    });
}); };
var runtimeInfoLifeCycle = function () { return runtime_info_awaiter(void 0, void 0, void 0, function () {
    var runtimeInfo;
    var _a, _b, _c;
    return runtime_info_generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4, collectAndSaveRuntimeInfo()];
            case 1:
                runtimeInfo = _d.sent();
                if (!runtimeInfo.isAppDownloaded) return [3, 3];
                return [4, setMultipleToChromeStorage((_a = {},
                        _a[ExtensionsKeys.StorageVersion] = runtimeInfo.schemaVersion,
                        _a[ExtensionsKeys.ExtensionVersion] = runtimeInfo.appVersion,
                        _a))];
            case 2:
                _d.sent();
                _d.label = 3;
            case 3:
                if (!!runtimeInfo.isInstalledKeyPresent) return [3, 5];
                return [4, setToChromeStorage(ExtensionsKeys.InstalledAt, Date.now())];
            case 4:
                _d.sent();
                _d.label = 5;
            case 5:
                if (!runtimeInfo.isAppVersionChanged) return [3, 8];
                return [4, setMultiplyToStorageAndSettings((_b = {},
                        _b[SettingsKeys.Ads] = true,
                        _b[SettingsKeys.Annotations] = false,
                        _b))];
            case 6:
                _d.sent();
                return [4, setMultipleToChromeStorage((_c = {},
                        _c[ExtensionsKeys.ExtensionVersion] = runtimeInfo.appVersion,
                        _c[ExtensionsKeys.StorageVersion] = runtimeInfo.schemaVersion,
                        _c))];
            case 7:
                _d.sent();
                _d.label = 8;
            case 8: return [2];
        }
    });
}); };
var getRuntimeInfo = function () { return runtimeInfo; };

;// ./src/background/helpers/migration.ts
var migration_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var migration_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var migrateSettingsFromV0toV1 = function () { return migration_awaiter(void 0, void 0, void 0, function () {
    var ratingDialogShown;
    return migration_generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, removeFromChromeStorage([
                    SettingsKeys.OldDailymotionAdRegex,
                    SettingsKeys.OldAdditionalBlockingEnabled,
                    SettingsKeys.OldDailymotionAdBlockingSelectors,
                    PopupDontShowKeysEnum.OldOtherStreamingPopupDoNotShow,
                    PopupDontShowKeysEnum.OldUpdatePopupDoNotShow,
                    PopupRestrictionKeysEnum.OldOtherStreamingPopupRestriction,
                    PopupRestrictionKeysEnum.OldUpdatePopupRestriction,
                ])];
            case 1:
                _a.sent();
                return [4, getFromChromeStorage(PopupRestrictionKeysEnum.RatingPopupRestriction)];
            case 2:
                ratingDialogShown = _a.sent();
                if (!ratingDialogShown) return [3, 4];
                return [4, setToChromeStorage(PopupRestrictionKeysEnum.RatingPopupRestriction, Date.now())];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [2];
        }
    });
}); };
var migrateSettingsFromV1toV2 = function () { return migration_awaiter(void 0, void 0, void 0, function () {
    return migration_generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, removeFromChromeStorage([
                    SettingsKeys.OldYoutubeAdRegex,
                    SettingsKeys.OldAdBlockingSelectors,
                    SettingsKeys.OldScriptlets,
                ])];
            case 1:
                _a.sent();
                return [2];
        }
    });
}); };
var migrationsMap = {
    '0': migrateSettingsFromV0toV1,
    '1': migrateSettingsFromV1toV2,
};
var runMigration = function (storedStorageVersion, currentStorageVersion) { return migration_awaiter(void 0, void 0, void 0, function () {
    var storageVersion, schemaMigrationAction, err_1;
    return migration_generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                storageVersion = storedStorageVersion;
                _a.label = 1;
            case 1:
                if (!(storageVersion < currentStorageVersion)) return [3, 6];
                schemaMigrationAction = migrationsMap[storageVersion];
                if (!schemaMigrationAction) {
                    throw new Error("No migration: storage version - ".concat(storageVersion, ", current version - ").concat(currentStorageVersion, "."));
                }
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4, schemaMigrationAction()];
            case 3:
                _a.sent();
                return [3, 5];
            case 4:
                err_1 = _a.sent();
                throw new Error("Error start migration from ".concat(storageVersion, " to ").concat(currentStorageVersion, ". Error: ").concat(err_1));
            case 5:
                storageVersion += 1;
                return [3, 1];
            case 6: return [2];
        }
    });
}); };
var applyMigrations = function () { return migration_awaiter(void 0, void 0, void 0, function () {
    var _a, isInstalledKeyPresent, isAppVersionChanged, savedStorageVersion, schemaVersion;
    return migration_generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = getRuntimeInfo(), isInstalledKeyPresent = _a.isInstalledKeyPresent, isAppVersionChanged = _a.isAppVersionChanged, savedStorageVersion = _a.savedStorageVersion, schemaVersion = _a.schemaVersion;
                if (!(isInstalledKeyPresent && savedStorageVersion === 0)) return [3, 2];
                return [4, runMigration(savedStorageVersion, schemaVersion)];
            case 1:
                _b.sent();
                return [2];
            case 2:
                if (!isAppVersionChanged) return [3, 4];
                return [4, runMigration(savedStorageVersion, schemaVersion)];
            case 3:
                _b.sent();
                _b.label = 4;
            case 4: return [2];
        }
    });
}); };

;// ./src/helpers/is-ad-block-works-on-page.ts
var isAdBlockWorksOnPage = function (url) {
    return /youtube\.com/.test(url);
};

;// ./src/constants/scriptlets/scriplets-lib.ts
var scriptletsLib = {
    version: '2.1.4',
    scriptlets: [
        {
            names: ['amazon-apstag', 'ubo-amazon_apstag.js', 'amazon_apstag.js'],
            scriptlet: 'function AmazonApstag(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function noopFunc(){}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){var apstagWrapper={fetchBids(a,b){"function"==typeof b&&b([])},init:noopFunc,setDisplayBids:noopFunc,targetingKeys:noopFunc};window.apstag=apstagWrapper,function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['didomi-loader'],
            scriptlet: 'function DidomiLoader(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function noopFunc(){}function noopArray(){return[]}function trueFunc(){return!0}function falseFunc(){return!1}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){function UserConsentStatusForVendorSubscribe(){}function UserConsentStatusForVendor(){}UserConsentStatusForVendorSubscribe.prototype.filter=function(){return new UserConsentStatusForVendorSubscribe},UserConsentStatusForVendorSubscribe.prototype.subscribe=noopFunc,UserConsentStatusForVendor.prototype.first=function(){return new UserConsentStatusForVendorSubscribe},UserConsentStatusForVendor.prototype.filter=function(){return new UserConsentStatusForVendorSubscribe},UserConsentStatusForVendor.prototype.subscribe=noopFunc;var DidomiWrapper={isConsentRequired:falseFunc,getUserConsentStatusForPurpose:trueFunc,getUserConsentStatus:trueFunc,getUserStatus:noopFunc,getRequiredPurposes:noopArray,getUserConsentStatusForVendor:trueFunc,Purposes:{Cookies:"cookies"},notice:{configure:noopFunc,hide:noopFunc,isVisible:falseFunc,show:noopFunc,showDataProcessing:trueFunc},isUserConsentStatusPartial:falseFunc,on:()=>({actions:{},emitter:{},services:{},store:{}}),shouldConsentBeCollected:falseFunc,getUserConsentStatusForAll:noopFunc,getObservableOnUserConsentStatusForVendor:()=>new UserConsentStatusForVendor};window.Didomi=DidomiWrapper,window.didomiState={didomiExperimentId:"",didomiExperimentUserGroup:"",didomiGDPRApplies:1,didomiIABConsent:"",didomiPurposesConsent:"",didomiPurposesConsentDenied:"",didomiPurposesConsentUnknown:"",didomiVendorsConsent:"",didomiVendorsConsentDenied:"",didomiVendorsConsentUnknown:"",didomiVendorsRawConsent:"",didomiVendorsRawConsentDenied:"",didomiVendorsRawConsentUnknown:""};var tcData={eventStatus:"tcloaded",gdprApplies:!1,listenerId:noopFunc,vendor:{consents:[]},purpose:{consents:[]}};window.__tcfapi=function(command,version,callback){"function"==typeof callback&&"removeEventListener"!==command&&callback(tcData,!0)};var didomiEventListenersWrapper={stub:!0,push:noopFunc};window.didomiEventListeners=didomiEventListenersWrapper;var didomiOnReadyWrapper={stub:!0,push(arg){"function"==typeof arg&&("complete"!==document.readyState?window.addEventListener("load",(function(){setTimeout(arg(window.Didomi))})):setTimeout(arg(window.Didomi)))}};window.didomiOnReady=window.didomiOnReady||didomiOnReadyWrapper,Array.isArray(window.didomiOnReady)&&window.didomiOnReady.forEach((function(arg){if("function"==typeof arg)try{setTimeout(arg(window.Didomi))}catch(e){}})),function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['fingerprintjs2', 'ubo-fingerprint2.js', 'fingerprint2.js'],
            scriptlet: 'function Fingerprintjs2(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){for(var browserId="",i=0;i<8;i+=1)browserId+=(65536*Math.random()+4096).toString(16).slice(-4);var Fingerprint2=function(){};Fingerprint2.prototype={get:Fingerprint2.get=function(options,callback){callback||(callback=options),setTimeout((function(){callback&&callback(browserId,[])}),1)}},window.Fingerprint2=Fingerprint2,function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['fingerprintjs3', 'ubo-fingerprint3.js', 'fingerprint3.js'],
            scriptlet: 'function Fingerprintjs3(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function noopStr(){return""}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){var visitorId=function(){for(var id="",i=0;i<8;i+=1)id+=(65536*Math.random()+4096).toString(16).slice(-4);return id}(),FingerprintJS=function(){};FingerprintJS.prototype={load:()=>Promise.resolve(new FingerprintJS),get:()=>Promise.resolve({visitorId:visitorId}),hashComponents:noopStr},window.FingerprintJS=new FingerprintJS,function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['gemius'],
            scriptlet: 'function Gemius(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function noopFunc(){}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){var GemiusPlayer=function(){};GemiusPlayer.prototype={setVideoObject:noopFunc,newProgram:noopFunc,programEvent:noopFunc,newAd:noopFunc,adEvent:noopFunc},window.GemiusPlayer=GemiusPlayer,function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['google-analytics-ga', 'ubo-google-analytics_ga.js', 'google-analytics_ga.js'],
            scriptlet: 'function GoogleAnalyticsGa(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function noopFunc(){}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){function Gaq(){}Gaq.prototype.Na=noopFunc,Gaq.prototype.O=noopFunc,Gaq.prototype.Sa=noopFunc,Gaq.prototype.Ta=noopFunc,Gaq.prototype.Va=noopFunc,Gaq.prototype._createAsyncTracker=noopFunc,Gaq.prototype._getAsyncTracker=noopFunc,Gaq.prototype._getPlugin=noopFunc,Gaq.prototype.push=function(data){"function"!=typeof data?!1!==Array.isArray(data)&&("string"==typeof data[0]&&/(^|\\.)_link$/.test(data[0])&&"string"==typeof data[1]&&window.location.assign(data[1]),"_set"===data[0]&&"hitCallback"===data[1]&&"function"==typeof data[2]&&data[2]()):data()};var gaq=new Gaq,asyncTrackers=window._gaq||[];if(Array.isArray(asyncTrackers))for(;asyncTrackers[0];)gaq.push(asyncTrackers.shift());function Gat(){}window._gaq=gaq.qf=gaq;var tracker=["_addIgnoredOrganic","_addIgnoredRef","_addItem","_addOrganic","_addTrans","_clearIgnoredOrganic","_clearIgnoredRef","_clearOrganic","_cookiePathCopy","_deleteCustomVar","_getName","_setAccount","_getAccount","_getClientInfo","_getDetectFlash","_getDetectTitle","_getLinkerUrl","_getLocalGifPath","_getServiceMode","_getVersion","_getVisitorCustomVar","_initData","_link","_linkByPost","_setAllowAnchor","_setAllowHash","_setAllowLinker","_setCampContentKey","_setCampMediumKey","_setCampNameKey","_setCampNOKey","_setCampSourceKey","_setCampTermKey","_setCampaignCookieTimeout","_setCampaignTrack","_setClientInfo","_setCookiePath","_setCookiePersistence","_setCookieTimeout","_setCustomVar","_setDetectFlash","_setDetectTitle","_setDomainName","_setLocalGifPath","_setLocalRemoteServerMode","_setLocalServerMode","_setReferrerOverride","_setRemoteServerMode","_setSampleRate","_setSessionTimeout","_setSiteSpeedSampleRate","_setSessionCookieTimeout","_setVar","_setVisitorCookieTimeout","_trackEvent","_trackPageLoadTime","_trackPageview","_trackSocial","_trackTiming","_trackTrans","_visitCode"].reduce((function(res,funcName){return res[funcName]=noopFunc,res}),{});tracker._getLinkerUrl=function(a){return a},tracker._link=function(url){if("string"==typeof url)try{window.location.assign(url)}catch(e){!function(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}(source,e)}},Gat.prototype._anonymizeIP=noopFunc,Gat.prototype._createTracker=noopFunc,Gat.prototype._forceSSL=noopFunc,Gat.prototype._getPlugin=noopFunc,Gat.prototype._getTracker=function(){return tracker},Gat.prototype._getTrackerByName=function(){return tracker},Gat.prototype._getTrackers=noopFunc,Gat.prototype.aa=noopFunc,Gat.prototype.ab=noopFunc,Gat.prototype.hb=noopFunc,Gat.prototype.la=noopFunc,Gat.prototype.oa=noopFunc,Gat.prototype.pa=noopFunc,Gat.prototype.u=noopFunc;var gat=new Gat;window._gat=gat,function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'google-analytics',
                'ubo-google-analytics_analytics.js',
                'google-analytics_analytics.js',
                'googletagmanager-gtm',
                'ubo-googletagmanager_gtm.js',
                'googletagmanager_gtm.js',
            ],
            scriptlet: 'function GoogleAnalytics(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function noopFunc(){}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){var _window$googleAnalyti,Tracker=function(){},proto=Tracker.prototype;proto.get=noopFunc,proto.set=noopFunc,proto.send=noopFunc;var googleAnalyticsName=window.GoogleAnalyticsObject||"ga",queue=null===(_window$googleAnalyti=window[googleAnalyticsName])||void 0===_window$googleAnalyti?void 0:_window$googleAnalyti.q;function ga(a){var len=arguments.length;if(0!==len){var replacer,lastArg=arguments[len-1];lastArg instanceof Object&&null!==lastArg&&"function"==typeof lastArg.hitCallback?replacer=lastArg.hitCallback:"function"==typeof lastArg&&(replacer=function(){lastArg(ga.create())});try{setTimeout(replacer,1)}catch(ex){}}}if(ga.create=function(){return new Tracker},ga.getByName=function(){return new Tracker},ga.getAll=function(){return[new Tracker]},ga.remove=noopFunc,ga.loaded=!0,window[googleAnalyticsName]=ga,Array.isArray(queue)){var push=function(arg){ga(...arg)};queue.push=push,queue.forEach(push)}var{dataLayer:dataLayer,google_optimize:google_optimize}=window;if(dataLayer instanceof Object!=0){dataLayer.hide instanceof Object&&"function"==typeof dataLayer.hide.end&&dataLayer.hide.end();var handleCallback=function(dataObj,funcName){dataObj&&"function"==typeof dataObj[funcName]&&setTimeout(dataObj[funcName])};if("function"==typeof dataLayer.push&&(dataLayer.push=function(data){if(data instanceof Object){for(var key in handleCallback(data,"eventCallback"),data)handleCallback(data[key],"event_callback");data.hasOwnProperty("eventCallback")||data.hasOwnProperty("eventCallback")||[].push.call(window.dataLayer,data)}return Array.isArray(data)&&data.forEach((function(arg){handleCallback(arg,"callback")})),noopFunc}),google_optimize instanceof Object&&"function"==typeof google_optimize.get){var googleOptimizeWrapper={get:noopFunc};window.google_optimize=googleOptimizeWrapper}!function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['google-ima3', 'ubo-google-ima.js', 'google-ima.js'],
            scriptlet: 'function GoogleIma3(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function noopFunc(){}function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){var _window$google$ima,ima={},AdDisplayContainer=function(containerElement){var divElement=document.createElement("div");divElement.style.setProperty("display","none","important"),divElement.style.setProperty("visibility","collapse","important"),containerElement&&containerElement.appendChild(divElement)};AdDisplayContainer.prototype.destroy=noopFunc,AdDisplayContainer.prototype.initialize=noopFunc;var ImaSdkSettings=function(){};ImaSdkSettings.CompanionBackfillMode={ALWAYS:"always",ON_MASTER_AD:"on_master_ad"},ImaSdkSettings.VpaidMode={DISABLED:0,ENABLED:1,INSECURE:2},ImaSdkSettings.prototype={c:!0,f:{},i:!1,l:"",p:"",r:0,t:"",v:"",getCompanionBackfill:noopFunc,getDisableCustomPlaybackForIOS10Plus(){return this.i},getDisabledFlashAds:function(){return!0},getFeatureFlags(){return this.f},getLocale(){return this.l},getNumRedirects(){return this.r},getPlayerType(){return this.t},getPlayerVersion(){return this.v},getPpid(){return this.p},getVpaidMode(){return this.C},isCookiesEnabled(){return this.c},isVpaidAdapter(){return this.M},setCompanionBackfill:noopFunc,setAutoPlayAdBreaks(a){this.K=a},setCookiesEnabled(c){this.c=!!c},setDisableCustomPlaybackForIOS10Plus(i){this.i=!!i},setDisableFlashAds:noopFunc,setFeatureFlags(f){this.f=!!f},setIsVpaidAdapter(a){this.M=a},setLocale(l){this.l=!!l},setNumRedirects(r){this.r=!!r},setPageCorrelator(a){this.R=a},setPlayerType(t){this.t=!!t},setPlayerVersion(v){this.v=!!v},setPpid(p){this.p=!!p},setVpaidMode(a){this.C=a},setSessionId:noopFunc,setStreamCorrelator:noopFunc,setVpaidAllowed:noopFunc,CompanionBackfillMode:{ALWAYS:"always",ON_MASTER_AD:"on_master_ad"},VpaidMode:{DISABLED:0,ENABLED:1,INSECURE:2}};var EventHandler=function(){this.listeners=new Map,this._dispatch=function(e){var listeners=this.listeners.get(e.type);listeners=listeners?listeners.values():[];for(var _i=0,_Array$from=Array.from(listeners);_i<_Array$from.length;_i++){var listener=_Array$from[_i];try{listener(e)}catch(r){logMessage(source,r)}}},this.addEventListener=function(types,callback,options,context){Array.isArray(types)||(types=[types]);for(var i=0;i<types.length;i+=1){var type=types[i];this.listeners.has(type)||this.listeners.set(type,new Map),this.listeners.get(type).set(callback,callback.bind(context||this))}},this.removeEventListener=function(types,callback){Array.isArray(types)||(types=[types]);for(var i=0;i<types.length;i+=1){var _this$listeners$get,type=types[i];null===(_this$listeners$get=this.listeners.get(type))||void 0===_this$listeners$get||_this$listeners$get.delete(callback)}}},AdsManager=new EventHandler;AdsManager.volume=1,AdsManager.collapse=noopFunc,AdsManager.configureAdsManager=noopFunc,AdsManager.destroy=noopFunc,AdsManager.discardAdBreak=noopFunc,AdsManager.expand=noopFunc,AdsManager.focus=noopFunc,AdsManager.getAdSkippableState=function(){return!1},AdsManager.getCuePoints=function(){return[0]},AdsManager.getCurrentAd=function(){return currentAd},AdsManager.getCurrentAdCuePoints=function(){return[]},AdsManager.getRemainingTime=function(){return 0},AdsManager.getVolume=function(){return this.volume},AdsManager.init=noopFunc,AdsManager.isCustomClickTrackingUsed=function(){return!1},AdsManager.isCustomPlaybackUsed=function(){return!1},AdsManager.pause=noopFunc,AdsManager.requestNextAdBreak=noopFunc,AdsManager.resize=noopFunc,AdsManager.resume=noopFunc,AdsManager.setVolume=function(v){this.volume=v},AdsManager.skip=noopFunc,AdsManager.start=function(){for(var _i2=0,_arr=[AdEvent.Type.ALL_ADS_COMPLETED,AdEvent.Type.CONTENT_RESUME_REQUESTED];_i2<_arr.length;_i2++){var type=_arr[_i2];try{this._dispatch(new ima.AdEvent(type))}catch(e){logMessage(source,e)}}},AdsManager.stop=noopFunc,AdsManager.updateAdsRenderingSettings=noopFunc;var manager=Object.create(AdsManager),AdsManagerLoadedEvent=function(type,adsRequest,userRequestContext){this.type=type,this.adsRequest=adsRequest,this.userRequestContext=userRequestContext};AdsManagerLoadedEvent.prototype={getAdsManager:function(){return manager},getUserRequestContext(){return this.userRequestContext?this.userRequestContext:{}}},AdsManagerLoadedEvent.Type={ADS_MANAGER_LOADED:"adsManagerLoaded"};var AdsLoader=EventHandler;AdsLoader.prototype.settings=new ImaSdkSettings,AdsLoader.prototype.contentComplete=noopFunc,AdsLoader.prototype.destroy=noopFunc,AdsLoader.prototype.getSettings=function(){return this.settings},AdsLoader.prototype.getVersion=function(){return"3.453.0"},AdsLoader.prototype.requestAds=function(adsRequest,userRequestContext){var _this=this;requestAnimationFrame((function(){var{ADS_MANAGER_LOADED:ADS_MANAGER_LOADED}=AdsManagerLoadedEvent.Type,event=new ima.AdsManagerLoadedEvent(ADS_MANAGER_LOADED,adsRequest,userRequestContext);_this._dispatch(event)}));var e=new ima.AdError("adPlayError",1205,1205,"The browser prevented playback initiated without user interaction.",adsRequest,userRequestContext);requestAnimationFrame((function(){_this._dispatch(new ima.AdErrorEvent(e))}))};var AdsRenderingSettings=noopFunc,AdsRequest=function(){};AdsRequest.prototype={setAdWillAutoPlay:noopFunc,setAdWillPlayMuted:noopFunc,setContinuousPlayback:noopFunc};var AdPodInfo=function(){};AdPodInfo.prototype={getAdPosition:function(){return 1},getIsBumper:function(){return!1},getMaxDuration:function(){return-1},getPodIndex:function(){return 1},getTimeOffset:function(){return 0},getTotalAds:function(){return 1}};var UniversalAdIdInfo=function(){};UniversalAdIdInfo.prototype.getAdIdRegistry=function(){return""},UniversalAdIdInfo.prototype.getAdIsValue=function(){return""};var Ad=function(){};Ad.prototype={pi:new AdPodInfo,getAdId:function(){return""},getAdPodInfo(){return this.pi},getAdSystem:function(){return""},getAdvertiserName:function(){return""},getApiFramework:function(){return null},getCompanionAds:function(){return[]},getContentType:function(){return""},getCreativeAdId:function(){return""},getDealId:function(){return""},getDescription:function(){return""},getDuration:function(){return 8.5},getHeight:function(){return 0},getMediaUrl:function(){return null},getMinSuggestedDuration:function(){return-2},getSkipTimeOffset:function(){return-1},getSurveyUrl:function(){return null},getTitle:function(){return""},getTraffickingParametersString:function(){return""},getUiElements:function(){return[""]},getUniversalAdIdRegistry:function(){return"unknown"},getUniversalAdIds:function(){return[new UniversalAdIdInfo]},getUniversalAdIdValue:function(){return"unknown"},getVastMediaBitrate:function(){return 0},getVastMediaHeight:function(){return 0},getVastMediaWidth:function(){return 0},getWidth:function(){return 0},getWrapperAdIds:function(){return[""]},getWrapperAdSystems:function(){return[""]},getWrapperCreativeIds:function(){return[""]},isLinear:function(){return!0},isSkippable:()=>!0};var CompanionAd=function(){};CompanionAd.prototype={getAdSlotId:function(){return""},getContent:function(){return""},getContentType:function(){return""},getHeight:function(){return 1},getWidth:function(){return 1}};var AdError=function(type,code,vast,message,adsRequest,userRequestContext){this.errorCode=code,this.message=message,this.type=type,this.adsRequest=adsRequest,this.userRequestContext=userRequestContext,this.getErrorCode=function(){return this.errorCode},this.getInnerError=function(){return null},this.getMessage=function(){return this.message},this.getType=function(){return this.type},this.getVastErrorCode=function(){return this.vastErrorCode},this.toString=function(){return`AdError ${this.errorCode}: ${this.message}`}};AdError.ErrorCode={},AdError.Type={};var currentAd=function(){try{for(var _i3=0,_Object$values=Object.values(window.vidible._getContexts());_i3<_Object$values.length;_i3++){var _ctx$getPlayer;if(null!==(_ctx$getPlayer=_Object$values[_i3].getPlayer())&&void 0!==_ctx$getPlayer&&null!==(_ctx$getPlayer=_ctx$getPlayer.div)&&void 0!==_ctx$getPlayer&&_ctx$getPlayer.innerHTML.includes("www.engadget.com"))return!0}}catch(e){}return!1}()?void 0:new Ad,AdEvent=function(type){this.type=type};AdEvent.prototype={getAd:function(){return currentAd},getAdData:function(){}},AdEvent.Type={AD_BREAK_READY:"adBreakReady",AD_BUFFERING:"adBuffering",AD_CAN_PLAY:"adCanPlay",AD_METADATA:"adMetadata",AD_PROGRESS:"adProgress",ALL_ADS_COMPLETED:"allAdsCompleted",CLICK:"click",COMPLETE:"complete",CONTENT_PAUSE_REQUESTED:"contentPauseRequested",CONTENT_RESUME_REQUESTED:"contentResumeRequested",DURATION_CHANGE:"durationChange",EXPANDED_CHANGED:"expandedChanged",FIRST_QUARTILE:"firstQuartile",IMPRESSION:"impression",INTERACTION:"interaction",LINEAR_CHANGE:"linearChange",LINEAR_CHANGED:"linearChanged",LOADED:"loaded",LOG:"log",MIDPOINT:"midpoint",PAUSED:"pause",RESUMED:"resume",SKIPPABLE_STATE_CHANGED:"skippableStateChanged",SKIPPED:"skip",STARTED:"start",THIRD_QUARTILE:"thirdQuartile",USER_CLOSE:"userClose",VIDEO_CLICKED:"videoClicked",VIDEO_ICON_CLICKED:"videoIconClicked",VIEWABLE_IMPRESSION:"viewable_impression",VOLUME_CHANGED:"volumeChange",VOLUME_MUTED:"mute"};var AdErrorEvent=function(error){this.error=error,this.type="adError",this.getError=function(){return this.error},this.getUserRequestContext=function(){var _this$error;return null!==(_this$error=this.error)&&void 0!==_this$error&&_this$error.userRequestContext?this.error.userRequestContext:{}}};AdErrorEvent.Type={AD_ERROR:"adError"};var CustomContentLoadedEvent=function(){};CustomContentLoadedEvent.Type={CUSTOM_CONTENT_LOADED:"deprecated-event"};var CompanionAdSelectionSettings=function(){};CompanionAdSelectionSettings.CreativeType={ALL:"All",FLASH:"Flash",IMAGE:"Image"},CompanionAdSelectionSettings.ResourceType={ALL:"All",HTML:"Html",IFRAME:"IFrame",STATIC:"Static"},CompanionAdSelectionSettings.SizeCriteria={IGNORE:"IgnoreSize",SELECT_EXACT_MATCH:"SelectExactMatch",SELECT_NEAR_MATCH:"SelectNearMatch"};var AdCuePoints=function(){};AdCuePoints.prototype={getCuePoints:function(){return[]},getAdIdRegistry:function(){return""},getAdIdValue:function(){return""}};var AdProgressData=noopFunc;Object.assign(ima,{AdCuePoints:AdCuePoints,AdDisplayContainer:AdDisplayContainer,AdError:AdError,AdErrorEvent:AdErrorEvent,AdEvent:AdEvent,AdPodInfo:AdPodInfo,AdProgressData:AdProgressData,AdsLoader:AdsLoader,AdsManager:manager,AdsManagerLoadedEvent:AdsManagerLoadedEvent,AdsRenderingSettings:AdsRenderingSettings,AdsRequest:AdsRequest,CompanionAd:CompanionAd,CompanionAdSelectionSettings:CompanionAdSelectionSettings,CustomContentLoadedEvent:CustomContentLoadedEvent,gptProxyInstance:{},ImaSdkSettings:ImaSdkSettings,OmidAccessMode:{DOMAIN:"domain",FULL:"full",LIMITED:"limited"},OmidVerificationVendor:{1:"OTHER",2:"MOAT",3:"DOUBLEVERIFY",4:"INTEGRAL_AD_SCIENCE",5:"PIXELATE",6:"NIELSEN",7:"COMSCORE",8:"MEETRICS",9:"GOOGLE",OTHER:1,MOAT:2,DOUBLEVERIFY:3,INTEGRAL_AD_SCIENCE:4,PIXELATE:5,NIELSEN:6,COMSCORE:7,MEETRICS:8,GOOGLE:9},settings:new ImaSdkSettings,UiElements:{AD_ATTRIBUTION:"adAttribution",COUNTDOWN:"countdown"},UniversalAdIdInfo:UniversalAdIdInfo,VERSION:"3.453.0",ViewMode:{FULLSCREEN:"fullscreen",NORMAL:"normal"}}),window.google||(window.google={}),null!==(_window$google$ima=window.google.ima)&&void 0!==_window$google$ima&&_window$google$ima.dai&&(ima.dai=window.google.ima.dai),window.google.ima=ima,function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'googlesyndication-adsbygoogle',
                'ubo-googlesyndication_adsbygoogle.js',
                'googlesyndication_adsbygoogle.js',
            ],
            scriptlet: 'function GoogleSyndicationAdsByGoogle(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){window.adsbygoogle={loaded:!0,push(arg){if(void 0===this.length&&(this.length=0,this.length+=1),null!==arg&&arg instanceof Object&&"Object"===arg.constructor.name)for(var _i=0,_Object$keys=Object.keys(arg);_i<_Object$keys.length;_i++){var key=_Object$keys[_i];if("function"==typeof arg[key])try{arg[key].call(this,{})}catch(_unused){}}}};for(var adElems=document.querySelectorAll(".adsbygoogle"),css="height:1px!important;max-height:1px!important;max-width:1px!important;width:1px!important;",executed=!1,i=0;i<adElems.length;i+=1){var adElemChildNodes=adElems[i].childNodes,childNodesQuantity=adElemChildNodes.length,areIframesDefined=!1;if(childNodesQuantity>0&&(areIframesDefined=2===childNodesQuantity&&"iframe"===adElemChildNodes[0].nodeName.toLowerCase()&&adElemChildNodes[0].id.includes("aswift_")&&"iframe"===adElemChildNodes[1].nodeName.toLowerCase()&&adElemChildNodes[1].id.includes("google_ads_iframe_")),!areIframesDefined){adElems[i].setAttribute("data-adsbygoogle-status","done");var aswiftIframe=document.createElement("iframe");aswiftIframe.id=`aswift_${i}`,aswiftIframe.style=css,adElems[i].appendChild(aswiftIframe);var innerAswiftIframe=document.createElement("iframe");aswiftIframe.contentWindow.document.body.appendChild(innerAswiftIframe);var googleadsIframe=document.createElement("iframe");googleadsIframe.id=`google_ads_iframe_${i}`,googleadsIframe.style=css,adElems[i].appendChild(googleadsIframe);var innerGoogleadsIframe=document.createElement("iframe");googleadsIframe.contentWindow.document.body.appendChild(innerGoogleadsIframe),executed=!0}}executed&&function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['googletagservices-gpt', 'ubo-googletagservices_gpt.js', 'googletagservices_gpt.js'],
            scriptlet: 'function GoogleTagServicesGpt(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function noopFunc(){}function noopThis(){return this}function noopNull(){return null}function noopArray(){return[]}function noopStr(){return""}function trueFunc(){return!0}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){var slots=new Map,slotsById=new Map,slotsPerPath=new Map,slotCreatives=new Map,eventCallbacks=new Map,gTargeting=new Map,addEventListener=function(name,listener){return eventCallbacks.has(name)||eventCallbacks.set(name,new Set),eventCallbacks.get(name).add(listener),this},removeEventListener=function(name,listener){return!!eventCallbacks.has(name)&&eventCallbacks.get(name).delete(listener)},fireSlotEvent=function(name,slot){return new Promise((function(resolve){requestAnimationFrame((function(){for(var size=[0,0],callbacksSet=eventCallbacks.get(name)||[],callbackArray=Array.from(callbacksSet),i=0;i<callbackArray.length;i+=1)callbackArray[i]({isEmpty:!0,size:size,slot:slot});resolve()}))}))},displaySlot=function(slot){if(slot){var id=slot.getSlotElementId();if(document.getElementById(id)){var parent=document.getElementById(id);parent&&parent.appendChild(document.createElement("div")),function(slot){for(var node=document.getElementById(slot.getSlotElementId());null!=node&&node.lastChild;)node.lastChild.remove()}(slot),function(slot){var _document$getElementB,eid=`google_ads_iframe_${slot.getId()}`;null===(_document$getElementB=document.getElementById(eid))||void 0===_document$getElementB||_document$getElementB.remove();var node=document.getElementById(slot.getSlotElementId());if(node){var f=document.createElement("iframe");f.id=eid,f.srcdoc="<body></body>",f.style="position:absolute; width:0; height:0; left:0; right:0; z-index:-1; border:0",f.setAttribute("width",0),f.setAttribute("height",0),f.setAttribute("data-load-complete",!0),f.setAttribute("data-google-container-id",!0),f.setAttribute("sandbox",""),node.appendChild(f)}}(slot),fireSlotEvent("slotRenderEnded",slot),fireSlotEvent("slotRequested",slot),fireSlotEvent("slotResponseReceived",slot),fireSlotEvent("slotOnload",slot),fireSlotEvent("impressionViewable",slot)}}},companionAdsService={addEventListener:addEventListener,removeEventListener:removeEventListener,enableSyncLoading:noopFunc,setRefreshUnfilledSlots:noopFunc,getSlots:noopArray},contentService={addEventListener:addEventListener,removeEventListener:removeEventListener,setContent:noopFunc};function PassbackSlot(){}function SizeMappingBuilder(){}PassbackSlot.prototype.display=noopFunc,PassbackSlot.prototype.get=noopNull,PassbackSlot.prototype.set=noopThis,PassbackSlot.prototype.setClickUrl=noopThis,PassbackSlot.prototype.setTagForChildDirectedTreatment=noopThis,PassbackSlot.prototype.setTargeting=noopThis,PassbackSlot.prototype.updateTargetingFromMap=noopThis,SizeMappingBuilder.prototype.addSize=noopThis,SizeMappingBuilder.prototype.build=noopNull;var getTargetingValue=function(v){if("string"==typeof v)return[v];try{return Array.prototype.flat.call(v)}catch(_unused){}return[]},defineSlot=function(adUnitPath,creatives,optDiv){var _document$getElementB2;if(slotsById.has(optDiv))return null===(_document$getElementB2=document.getElementById(optDiv))||void 0===_document$getElementB2||_document$getElementB2.remove(),slotsById.get(optDiv);var attributes=new Map,targeting=new Map,exclusions=new Set,response={advertiserId:void 0,campaignId:void 0,creativeId:void 0,creativeTemplateId:void 0,lineItemId:void 0},sizes=[{getHeight:function(){return 2},getWidth:function(){return 2}}],num=(slotsPerPath.get(adUnitPath)||0)+1;slotsPerPath.set(adUnitPath,num);var id=`${adUnitPath}_${num}`,clickUrl="",collapseEmptyDiv=null,services=new Set,slot={addService:e=>(services.add(e),slot),clearCategoryExclusions:noopThis,clearTargeting(k){void 0===k?targeting.clear():targeting.delete(k)},defineSizeMapping(mapping){return slotCreatives.set(optDiv,mapping),this},get:function(k){return attributes.get(k)},getAdUnitPath:function(){return adUnitPath},getAttributeKeys:function(){return Array.from(attributes.keys())},getCategoryExclusions:function(){return Array.from(exclusions)},getClickUrl:function(){return clickUrl},getCollapseEmptyDiv:function(){return collapseEmptyDiv},getContentUrl:function(){return""},getDivStartsCollapsed:function(){return null},getDomId:function(){return optDiv},getEscapedQemQueryId:function(){return""},getFirstLook:function(){return 0},getId:function(){return id},getHtml:function(){return""},getName:function(){return id},getOutOfPage:function(){return!1},getResponseInformation:function(){return response},getServices:function(){return Array.from(services)},getSizes:function(){return sizes},getSlotElementId:function(){return optDiv},getSlotId:function(){return slot},getTargeting:function(k){return targeting.get(k)||gTargeting.get(k)||[]},getTargetingKeys:function(){return Array.from(new Set(Array.of(...gTargeting.keys(),...targeting.keys())))},getTargetingMap:function(){return Object.assign(Object.fromEntries(gTargeting.entries()),Object.fromEntries(targeting.entries()))},set:(k,v)=>(attributes.set(k,v),slot),setCategoryExclusion:e=>(exclusions.add(e),slot),setClickUrl:u=>(clickUrl=u,slot),setCollapseEmptyDiv:v=>(collapseEmptyDiv=!!v,slot),setSafeFrameConfig:noopThis,setTagForChildDirectedTreatment:noopThis,setTargeting:(k,v)=>(targeting.set(k,getTargetingValue(v)),slot),toString:function(){return id},updateTargetingFromMap:map=>(function(targeting,map){if("object"==typeof map)for(var key in map)Object.prototype.hasOwnProperty.call(map,key)&&targeting.set(key,getTargetingValue(map[key]))}(targeting,map),slot)};return slots.set(adUnitPath,slot),slotsById.set(optDiv,slot),slotCreatives.set(optDiv,creatives),slot},pubAdsService={addEventListener:addEventListener,removeEventListener:removeEventListener,clear:noopFunc,clearCategoryExclusions:noopThis,clearTagForChildDirectedTreatment:noopThis,clearTargeting(k){void 0===k?gTargeting.clear():gTargeting.delete(k)},collapseEmptyDivs:noopFunc,defineOutOfPagePassback:()=>new PassbackSlot,definePassback:()=>new PassbackSlot,disableInitialLoad:noopFunc,display:noopFunc,enableAsyncRendering:noopFunc,enableLazyLoad:noopFunc,enableSingleRequest:noopFunc,enableSyncRendering:noopFunc,enableVideoAds:noopFunc,get:noopNull,getAttributeKeys:noopArray,getTargeting:noopArray,getTargetingKeys:noopArray,getSlots:noopArray,isInitialLoadDisabled:trueFunc,refresh:noopFunc,set:noopThis,setCategoryExclusion:noopThis,setCentering:noopFunc,setCookieOptions:noopThis,setForceSafeFrame:noopThis,setLocation:noopThis,setPrivacySettings:noopThis,setPublisherProvidedId:noopThis,setRequestNonPersonalizedAds:noopThis,setSafeFrameConfig:noopThis,setTagForChildDirectedTreatment:noopThis,setTargeting:noopThis,setVideoContent:noopThis,updateCorrelator:noopFunc},{googletag:googletag={}}=window,{cmd:cmd=[]}=googletag;for(googletag.apiReady=!0,googletag.cmd=[],googletag.cmd.push=function(a){try{a()}catch(ex){}return 1},googletag.companionAds=function(){return companionAdsService},googletag.content=function(){return contentService},googletag.defineOutOfPageSlot=defineSlot,googletag.defineSlot=defineSlot,googletag.destroySlots=function(){slots.clear(),slotsById.clear()},googletag.disablePublisherConsole=noopFunc,googletag.display=function(arg){var id;id=null!=arg&&arg.getSlotElementId?arg.getSlotElementId():null!=arg&&arg.nodeType?arg.id:String(arg),displaySlot(slotsById.get(id))},googletag.enableServices=noopFunc,googletag.getVersion=noopStr,googletag.pubads=function(){return pubAdsService},googletag.pubadsReady=!0,googletag.setAdIframeTitle=noopFunc,googletag.sizeMapping=function(){return new SizeMappingBuilder},window.googletag=googletag;0!==cmd.length;)googletag.cmd.push(cmd.shift());!function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['matomo'],
            scriptlet: 'function Matomo(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function noopFunc(){}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){var Tracker=function(){};Tracker.prototype.setDoNotTrack=noopFunc,Tracker.prototype.setDomains=noopFunc,Tracker.prototype.setCustomDimension=noopFunc,Tracker.prototype.trackPageView=noopFunc;var AsyncTracker=function(){};AsyncTracker.prototype.addListener=noopFunc;var matomoWrapper={getTracker:Tracker,getAsyncTracker:AsyncTracker};window.Piwik=matomoWrapper,function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['naver-wcslog'],
            scriptlet: 'function NaverWcslog(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function noopFunc(){}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){window.wcs_add={},window.wcs_do=noopFunc,window.wcs={inflow:noopFunc},function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['pardot-1.0'],
            scriptlet: 'function Pardot(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function noopFunc(){}function noopStr(){return""}function noopNull(){return null}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){function piTracker(){window.pi={tracker:{visitor_id:"",visitor_id_sign:"",pi_opt_in:"",campaign_id:""}},window.piScriptNum+=1}window.piVersion="1.0.2",window.piScriptNum=0,window.piScriptObj=[],window.checkNamespace=noopFunc,window.getPardotUrl=noopStr,window.piGetParameter=noopNull,window.piSetCookie=noopFunc,window.piGetCookie=noopStr,window.piResponse=noopFunc,window.piTracker=piTracker,piTracker(),function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['prebid'],
            scriptlet: 'function Prebid(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function noopStr(){return""}function noopArray(){return[]}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){var pushFunction=function(arg){if("function"==typeof arg)try{arg.call()}catch(ex){}},pbjsWrapper={addAdUnits(){},adServers:{dfp:{buildVideoUrl:noopStr}},adUnits:[],aliasBidder(){},cmd:[],enableAnalytics(){},getHighestCpmBids:noopArray,libLoaded:!0,que:[],requestBids(arg){if(arg instanceof Object&&arg.bidsBackHandler)try{arg.bidsBackHandler.call()}catch(ex){}},removeAdUnit(){},setBidderConfig(){},setConfig(){},setTargetingForGPTAsync(){}};pbjsWrapper.cmd.push=pushFunction,pbjsWrapper.que.push=pushFunction,window.pbjs=pbjsWrapper,function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['scorecardresearch-beacon', 'ubo-scorecardresearch_beacon.js', 'scorecardresearch_beacon.js'],
            scriptlet: 'function ScoreCardResearchBeacon(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){window.COMSCORE={purge(){window._comscore=[]},beacon(){}},function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'abort-current-inline-script',
                'abort-current-script.js',
                'ubo-abort-current-script.js',
                'acs.js',
                'ubo-acs.js',
                'ubo-abort-current-script',
                'ubo-acs',
                'abort-current-inline-script.js',
                'ubo-abort-current-inline-script.js',
                'acis.js',
                'ubo-acis.js',
                'ubo-abort-current-inline-script',
                'ubo-acis',
                'abp-abort-current-inline-script',
            ],
            scriptlet: 'function abortCurrentInlineScript(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function randomId(){return Math.random().toString(36).slice(2,9)}function getPropertyInChain(base,chain){var pos=chain.indexOf(".");if(-1===pos)return{base:base,prop:chain};var prop=chain.slice(0,pos);if(null===base)return{base:base,prop:prop,chain:chain};var obj,nextBase=base[prop];return chain=chain.slice(pos+1),(base instanceof Object||"object"==typeof base)&&(obj=base,0===Object.keys(obj).length&&!obj.prototype)||null===nextBase?{base:base,prop:prop,chain:chain}:void 0!==nextBase?getPropertyInChain(nextBase,chain):(Object.defineProperty(base,prop,{configurable:!0}),{base:base,prop:prop,chain:chain})}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,property,search){var searchRegexp=function(rawInput){var input=rawInput||"",FORWARD_SLASH="/";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf(FORWARD_SLASH),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),isValidRegExpFlag=function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}},flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith(FORWARD_SLASH)&&regExpStr.endsWith(FORWARD_SLASH)&&!regExpStr.endsWith("\\\\/")&&isValidRegExpFlag(flagsStr)?flagsStr:"");if(input.startsWith(FORWARD_SLASH)&&input.endsWith(FORWARD_SLASH)||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}(search),rid=randomId(),getCurrentScript=function(){if("currentScript"in document)return document.currentScript;var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]},ourScript=getCurrentScript(),abort=function(){var _scriptEl$src,scriptEl=getCurrentScript();if(scriptEl){var content=scriptEl.textContent;try{content=Object.getOwnPropertyDescriptor(Node.prototype,"textContent").get.call(scriptEl)}catch(e){}if(0===content.length&&void 0!==scriptEl.src&&null!==(_scriptEl$src=scriptEl.src)&&void 0!==_scriptEl$src&&_scriptEl$src.startsWith("data:text/javascript;base64,")){var encodedContent=scriptEl.src.slice(28);content=window.atob(encodedContent)}if(scriptEl instanceof HTMLScriptElement&&content.length>0&&scriptEl!==ourScript&&searchRegexp.test(content))throw function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source),new ReferenceError(rid)}},_setChainPropAccess=function(owner,property){var chainInfo=getPropertyInChain(owner,property),{base:base}=chainInfo,{prop:prop,chain:chain}=chainInfo;if(base instanceof Object!=0||null!==base)if(chain)Object.defineProperty(owner,prop,{get:function(){return base},set:function(a){base=a,a instanceof Object&&_setChainPropAccess(a,chain)}});else{var currentValue=base[prop],origDescriptor=Object.getOwnPropertyDescriptor(base,prop);origDescriptor instanceof Object!=0&&origDescriptor.get instanceof Function!=0||(currentValue=base[prop],origDescriptor=void 0);var descriptorWrapper=Object.assign({isAbortingSuspended:!1,isolateCallback(cb){this.isAbortingSuspended=!0;try{for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];var result=cb(...args);return this.isAbortingSuspended=!1,result}catch(_unused){var rid=randomId();throw this.isAbortingSuspended=!1,new ReferenceError(rid)}}},{currentValue:currentValue,get(){return this.isAbortingSuspended||this.isolateCallback(abort),origDescriptor instanceof Object?origDescriptor.get.call(base):this.currentValue},set(newValue){this.isAbortingSuspended||this.isolateCallback(abort),origDescriptor instanceof Object?origDescriptor.set.call(base,newValue):this.currentValue=newValue}});!function(object,property,descriptor){var currentDescriptor=Object.getOwnPropertyDescriptor(object,property);if(currentDescriptor&&!currentDescriptor.configurable)return!1;Object.defineProperty(object,property,descriptor)}(base,prop,{get:()=>descriptorWrapper.get.call(descriptorWrapper),set(newValue){descriptorWrapper.set.call(descriptorWrapper,newValue)}})}else{var props=property.split("."),propIndex=props.indexOf(prop),baseName=props[propIndex-1];!function(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}(source,`The scriptlet had been executed before the ${baseName} was loaded.`)}};_setChainPropAccess(window,property),window.onerror=function(rid){var nativeOnError=window.onerror;return function(error){if("string"==typeof error&&error.includes(rid))return!0;if(nativeOnError instanceof Function){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];return nativeOnError.apply(window,[error,...args])}return!1}}(rid).bind()}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'abort-on-property-read',
                'abort-on-property-read.js',
                'ubo-abort-on-property-read.js',
                'aopr.js',
                'ubo-aopr.js',
                'ubo-abort-on-property-read',
                'ubo-aopr',
                'abp-abort-on-property-read',
            ],
            scriptlet: 'function abortOnPropertyRead(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function getPropertyInChain(base,chain){var pos=chain.indexOf(".");if(-1===pos)return{base:base,prop:chain};var prop=chain.slice(0,pos);if(null===base)return{base:base,prop:prop,chain:chain};var obj,nextBase=base[prop];return chain=chain.slice(pos+1),(base instanceof Object||"object"==typeof base)&&(obj=base,0===Object.keys(obj).length&&!obj.prototype)||null===nextBase?{base:base,prop:prop,chain:chain}:void 0!==nextBase?getPropertyInChain(nextBase,chain):(Object.defineProperty(base,prop,{configurable:!0}),{base:base,prop:prop,chain:chain})}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,property){if(property){var rid=Math.random().toString(36).slice(2,9),abort=function(){throw function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source),new ReferenceError(rid)},_setChainPropAccess=function(owner,property){var chainInfo=getPropertyInChain(owner,property),{base:base}=chainInfo,{prop:prop,chain:chain}=chainInfo;chain?Object.defineProperty(owner,prop,{get:function(){return base},set:function(a){base=a,a instanceof Object&&_setChainPropAccess(a,chain)}}):function(object,property,descriptor){var currentDescriptor=Object.getOwnPropertyDescriptor(object,property);if(currentDescriptor&&!currentDescriptor.configurable)return!1;Object.defineProperty(object,property,descriptor)}(base,prop,{get:abort,set:function(){}})};_setChainPropAccess(window,property),window.onerror=function(rid){var nativeOnError=window.onerror;return function(error){if("string"==typeof error&&error.includes(rid))return!0;if(nativeOnError instanceof Function){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];return nativeOnError.apply(window,[error,...args])}return!1}}(rid).bind()}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'abort-on-property-write',
                'abort-on-property-write.js',
                'ubo-abort-on-property-write.js',
                'aopw.js',
                'ubo-aopw.js',
                'ubo-abort-on-property-write',
                'ubo-aopw',
                'abp-abort-on-property-write',
            ],
            scriptlet: 'function abortOnPropertyWrite(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function getPropertyInChain(base,chain){var pos=chain.indexOf(".");if(-1===pos)return{base:base,prop:chain};var prop=chain.slice(0,pos);if(null===base)return{base:base,prop:prop,chain:chain};var obj,nextBase=base[prop];return chain=chain.slice(pos+1),(base instanceof Object||"object"==typeof base)&&(obj=base,0===Object.keys(obj).length&&!obj.prototype)||null===nextBase?{base:base,prop:prop,chain:chain}:void 0!==nextBase?getPropertyInChain(nextBase,chain):(Object.defineProperty(base,prop,{configurable:!0}),{base:base,prop:prop,chain:chain})}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,property){if(property){var rid=Math.random().toString(36).slice(2,9),abort=function(){throw function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source),new ReferenceError(rid)},_setChainPropAccess=function(owner,property){var chainInfo=getPropertyInChain(owner,property),{base:base}=chainInfo,{prop:prop,chain:chain}=chainInfo;chain?Object.defineProperty(owner,prop,{get:function(){return base},set:function(a){base=a,a instanceof Object&&_setChainPropAccess(a,chain)}}):function(object,property,descriptor){var currentDescriptor=Object.getOwnPropertyDescriptor(object,property);if(currentDescriptor&&!currentDescriptor.configurable)return!1;Object.defineProperty(object,property,descriptor)}(base,prop,{set:abort})};_setChainPropAccess(window,property),window.onerror=function(rid){var nativeOnError=window.onerror;return function(error){if("string"==typeof error&&error.includes(rid))return!0;if(nativeOnError instanceof Function){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];return nativeOnError.apply(window,[error,...args])}return!1}}(rid).bind()}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'abort-on-stack-trace',
                'abort-on-stack-trace.js',
                'ubo-abort-on-stack-trace.js',
                'aost.js',
                'ubo-aost.js',
                'ubo-abort-on-stack-trace',
                'ubo-aost',
                'abp-abort-on-stack-trace',
            ],
            scriptlet: 'function abortOnStackTrace(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function randomId(){return Math.random().toString(36).slice(2,9)}function getPropertyInChain(base,chain){var pos=chain.indexOf(".");if(-1===pos)return{base:base,prop:chain};var prop=chain.slice(0,pos);if(null===base)return{base:base,prop:prop,chain:chain};var obj,nextBase=base[prop];return chain=chain.slice(pos+1),(base instanceof Object||"object"==typeof base)&&(obj=base,0===Object.keys(obj).length&&!obj.prototype)||null===nextBase?{base:base,prop:prop,chain:chain}:void 0!==nextBase?getPropertyInChain(nextBase,chain):(Object.defineProperty(base,prop,{configurable:!0}),{base:base,prop:prop,chain:chain})}function matchStackTrace(stackMatch,stackTrace){if(!stackMatch||""===stackMatch)return!0;var regExpValues=function(){try{for(var arrayOfRegexpValues=[],index=1;index<10;index+=1){var value=`$${index}`;if(!RegExp[value])break;arrayOfRegexpValues.push(RegExp[value])}return arrayOfRegexpValues}catch(error){return[]}}();if(function(stackMatch,stackTrace){var INLINE_SCRIPT_STRING="inlineScript",INJECTED_SCRIPT_STRING="injectedScript",INJECTED_SCRIPT_MARKER="<anonymous>",isInlineScript=function(match){return match.includes(INLINE_SCRIPT_STRING)},isInjectedScript=function(match){return match.includes(INJECTED_SCRIPT_STRING)};if(!isInlineScript(stackMatch)&&!isInjectedScript(stackMatch))return!1;var documentURL=window.location.href,pos=documentURL.indexOf("#");-1!==pos&&(documentURL=documentURL.slice(0,pos));var stackSteps=stackTrace.split("\\n").slice(2).map((function(line){return line.trim()})),stackLines=stackSteps.map((function(line){var stack,getStackTraceValues=/(.*?@)?(\\S+)(:\\d+)(:\\d+)\\)?$/.exec(line);if(getStackTraceValues){var _stackURL,_stackURL2,stackURL=getStackTraceValues[2],stackLine=getStackTraceValues[3],stackCol=getStackTraceValues[4];if(null!==(_stackURL=stackURL)&&void 0!==_stackURL&&_stackURL.startsWith("(")&&(stackURL=stackURL.slice(1)),null!==(_stackURL2=stackURL)&&void 0!==_stackURL2&&_stackURL2.startsWith(INJECTED_SCRIPT_MARKER)){var _stackFunction;stackURL=INJECTED_SCRIPT_STRING;var stackFunction=void 0!==getStackTraceValues[1]?getStackTraceValues[1].slice(0,-1):line.slice(0,getStackTraceValues.index).trim();null!==(_stackFunction=stackFunction)&&void 0!==_stackFunction&&_stackFunction.startsWith("at")&&(stackFunction=stackFunction.slice(2).trim()),stack=`${stackFunction} ${stackURL}${stackLine}${stackCol}`.trim()}else stack=stackURL===documentURL?`${INLINE_SCRIPT_STRING}${stackLine}${stackCol}`.trim():`${stackURL}${stackLine}${stackCol}`.trim()}else stack=line;return stack}));if(stackLines)for(var index=0;index<stackLines.length;index+=1){if(isInlineScript(stackMatch)&&stackLines[index].startsWith(INLINE_SCRIPT_STRING)&&stackLines[index].match(toRegExp(stackMatch)))return!0;if(isInjectedScript(stackMatch)&&stackLines[index].startsWith(INJECTED_SCRIPT_STRING)&&stackLines[index].match(toRegExp(stackMatch)))return!0}return!1}(stackMatch,stackTrace))return regExpValues.length&&regExpValues[0]!==RegExp.$1&&restoreRegExpValues(regExpValues),!0;var stackRegexp=toRegExp(stackMatch),refinedStackTrace=stackTrace.split("\\n").slice(2).map((function(line){return line.trim()})).join("\\n");return regExpValues.length&&regExpValues[0]!==RegExp.$1&&restoreRegExpValues(regExpValues),function(){var descriptor=Object.getOwnPropertyDescriptor(RegExp.prototype,"test"),nativeRegexTest=null==descriptor?void 0:descriptor.value;if(descriptor&&"function"==typeof descriptor.value)return nativeRegexTest;throw new Error("RegExp.prototype.test is not a function")}().call(stackRegexp,refinedStackTrace)}function toRegExp(rawInput){var input=rawInput||"";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf("/"),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith("/")&&regExpStr.endsWith("/")&&!regExpStr.endsWith("\\\\/")&&function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}}(flagsStr)?flagsStr:"");if(input.startsWith("/")&&input.endsWith("/")||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}function restoreRegExpValues(array){if(array.length)try{var stringPattern="";stringPattern=1===array.length?`(${array[0]})`:array.reduce((function(accumulator,currentValue,currentIndex){return 1===currentIndex?`(${accumulator}),(${currentValue})`:`${accumulator},(${currentValue})`}));var regExpGroup=new RegExp(stringPattern);array.toString().replace(regExpGroup,"")}catch(error){var message=`Failed to restore RegExp values: ${error}`;console.log(message)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,property,stack){if(property&&stack){var rid=randomId(),abort=function(){throw function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source),new ReferenceError(rid)},_setChainPropAccess=function(owner,property){var chainInfo=getPropertyInChain(owner,property),{base:base}=chainInfo,{prop:prop,chain:chain}=chainInfo;if(chain)Object.defineProperty(owner,prop,{get:function(){return base},set:function(a){base=a,a instanceof Object&&_setChainPropAccess(a,chain)}});else if(stack.match(/^(inlineScript|injectedScript)$/)||function(input){var isValid,FORWARD_SLASH="/",str=function(str){return str.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&")}(input);input[0]===FORWARD_SLASH&&input[input.length-1]===FORWARD_SLASH&&(str=input.slice(1,-1));try{isValid=new RegExp(str),isValid=!0}catch(e){isValid=!1}return isValid}(stack)){var descriptorWrapper=Object.assign({isAbortingSuspended:!1,isolateCallback(cb){this.isAbortingSuspended=!0;try{for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];var result=cb(...args);return this.isAbortingSuspended=!1,result}catch(_unused){var rid=randomId();throw this.isAbortingSuspended=!1,new ReferenceError(rid)}}},{value:base[prop],get(){return!this.isAbortingSuspended&&this.isolateCallback(matchStackTrace,stack,(new Error).stack)&&abort(),this.value},set(newValue){!this.isAbortingSuspended&&this.isolateCallback(matchStackTrace,stack,(new Error).stack)&&abort(),this.value=newValue}});!function(object,property,descriptor){var currentDescriptor=Object.getOwnPropertyDescriptor(object,property);if(currentDescriptor&&!currentDescriptor.configurable)return!1;Object.defineProperty(object,property,descriptor)}(base,prop,{get:()=>descriptorWrapper.get.call(descriptorWrapper),set(newValue){descriptorWrapper.set.call(descriptorWrapper,newValue)}})}else!function(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}(source,`Invalid parameter: ${stack}`)};_setChainPropAccess(window,property),window.onerror=function(rid){var nativeOnError=window.onerror;return function(error){if("string"==typeof error&&error.includes(rid))return!0;if(nativeOnError instanceof Function){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];return nativeOnError.apply(window,[error,...args])}return!1}}(rid).bind()}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'adjust-setInterval',
                'nano-setInterval-booster.js',
                'ubo-nano-setInterval-booster.js',
                'nano-sib.js',
                'ubo-nano-sib.js',
                'adjust-setInterval.js',
                'ubo-adjust-setInterval.js',
                'ubo-nano-setInterval-booster',
                'ubo-nano-sib',
                'ubo-adjust-setInterval',
            ],
            scriptlet: 'function adjustSetInterval(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function nativeIsNaN(num){return(Number.isNaN||window.isNaN)(num)}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,matchCallback,matchDelay,boost){var nativeSetInterval=window.setInterval,matchRegexp=function(rawInput){var input=rawInput||"",FORWARD_SLASH="/";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf(FORWARD_SLASH),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),isValidRegExpFlag=function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}},flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith(FORWARD_SLASH)&&regExpStr.endsWith(FORWARD_SLASH)&&!regExpStr.endsWith("\\\\/")&&isValidRegExpFlag(flagsStr)?flagsStr:"");if(input.startsWith(FORWARD_SLASH)&&input.endsWith(FORWARD_SLASH)||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}(matchCallback);window.setInterval=function(callback,delay){if(function(callback){return callback instanceof Function||"string"==typeof callback}(callback))matchRegexp.test(callback.toString())&&(realDelay=delay,function(delay){return"*"===delay}(inputDelay=matchDelay)||realDelay===function(delay){var DEFAULT_DELAY=1e3,parsedDelay=parseInt(delay,10);return nativeIsNaN(parsedDelay)?DEFAULT_DELAY:parsedDelay}(inputDelay))&&(delay*=function(boost){var num,DEFAULT_MULTIPLIER=.05,MIN_MULTIPLIER=.001,MAX_MULTIPLIER=50,parsedBoost=parseFloat(boost),boostMultiplier=nativeIsNaN(parsedBoost)||(num=parsedBoost,!(Number.isFinite||window.isFinite)(num))?DEFAULT_MULTIPLIER:parsedBoost;return boostMultiplier<MIN_MULTIPLIER&&(boostMultiplier=MIN_MULTIPLIER),boostMultiplier>MAX_MULTIPLIER&&(boostMultiplier=MAX_MULTIPLIER),boostMultiplier}(boost),function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source));else{var message=`Scriptlet can\'t be applied because of invalid callback: \'${String(callback)}\'`;!function(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}(source,message)}for(var inputDelay,realDelay,_len=arguments.length,args=new Array(_len>2?_len-2:0),_key=2;_key<_len;_key++)args[_key-2]=arguments[_key];return nativeSetInterval.apply(window,[callback,delay,...args])}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'adjust-setTimeout',
                'adjust-setTimeout.js',
                'ubo-adjust-setTimeout.js',
                'nano-setTimeout-booster.js',
                'ubo-nano-setTimeout-booster.js',
                'nano-stb.js',
                'ubo-nano-stb.js',
                'ubo-adjust-setTimeout',
                'ubo-nano-setTimeout-booster',
                'ubo-nano-stb',
            ],
            scriptlet: 'function adjustSetTimeout(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function nativeIsNaN(num){return(Number.isNaN||window.isNaN)(num)}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,matchCallback,matchDelay,boost){var nativeSetTimeout=window.setTimeout,matchRegexp=function(rawInput){var input=rawInput||"",FORWARD_SLASH="/";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf(FORWARD_SLASH),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),isValidRegExpFlag=function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}},flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith(FORWARD_SLASH)&&regExpStr.endsWith(FORWARD_SLASH)&&!regExpStr.endsWith("\\\\/")&&isValidRegExpFlag(flagsStr)?flagsStr:"");if(input.startsWith(FORWARD_SLASH)&&input.endsWith(FORWARD_SLASH)||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}(matchCallback);window.setTimeout=function(callback,delay){if(function(callback){return callback instanceof Function||"string"==typeof callback}(callback))matchRegexp.test(callback.toString())&&(realDelay=delay,function(delay){return"*"===delay}(inputDelay=matchDelay)||realDelay===function(delay){var DEFAULT_DELAY=1e3,parsedDelay=parseInt(delay,10);return nativeIsNaN(parsedDelay)?DEFAULT_DELAY:parsedDelay}(inputDelay))&&(delay*=function(boost){var num,DEFAULT_MULTIPLIER=.05,MIN_MULTIPLIER=.001,MAX_MULTIPLIER=50,parsedBoost=parseFloat(boost),boostMultiplier=nativeIsNaN(parsedBoost)||(num=parsedBoost,!(Number.isFinite||window.isFinite)(num))?DEFAULT_MULTIPLIER:parsedBoost;return boostMultiplier<MIN_MULTIPLIER&&(boostMultiplier=MIN_MULTIPLIER),boostMultiplier>MAX_MULTIPLIER&&(boostMultiplier=MAX_MULTIPLIER),boostMultiplier}(boost),function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source));else{var message=`Scriptlet can\'t be applied because of invalid callback: \'${String(callback)}\'`;!function(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}(source,message)}for(var inputDelay,realDelay,_len=arguments.length,args=new Array(_len>2?_len-2:0),_key=2;_key<_len;_key++)args[_key-2]=arguments[_key];return nativeSetTimeout.apply(window,[callback,delay,...args])}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['call-nothrow', 'call-nothrow.js', 'ubo-call-nothrow.js', 'ubo-call-nothrow'],
            scriptlet: 'function callNoThrow(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function getPropertyInChain(base,chain){var pos=chain.indexOf(".");if(-1===pos)return{base:base,prop:chain};var prop=chain.slice(0,pos);if(null===base)return{base:base,prop:prop,chain:chain};var obj,nextBase=base[prop];return chain=chain.slice(pos+1),(base instanceof Object||"object"==typeof base)&&(obj=base,0===Object.keys(obj).length&&!obj.prototype)||null===nextBase?{base:base,prop:prop,chain:chain}:void 0!==nextBase?getPropertyInChain(nextBase,chain):(Object.defineProperty(base,prop,{configurable:!0}),{base:base,prop:prop,chain:chain})}function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,functionName){if(functionName){var{base:base,prop:prop}=getPropertyInChain(window,functionName);if(base&&prop&&"function"==typeof base[prop]){var objectHandler={apply:function(){var result;try{result=Reflect.apply(...arguments)}catch(e){var _message=`Error calling ${functionName}: ${e.message}`;logMessage(source,_message)}return function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source),result}};base[prop]=new Proxy(base[prop],objectHandler)}else logMessage(source,`${functionName} is not a function`)}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['debug-current-inline-script'],
            scriptlet: 'function debugCurrentInlineScript(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function getPropertyInChain(base,chain){var pos=chain.indexOf(".");if(-1===pos)return{base:base,prop:chain};var prop=chain.slice(0,pos);if(null===base)return{base:base,prop:prop,chain:chain};var obj,nextBase=base[prop];return chain=chain.slice(pos+1),(base instanceof Object||"object"==typeof base)&&(obj=base,0===Object.keys(obj).length&&!obj.prototype)||null===nextBase?{base:base,prop:prop,chain:chain}:void 0!==nextBase?getPropertyInChain(nextBase,chain):(Object.defineProperty(base,prop,{configurable:!0}),{base:base,prop:prop,chain:chain})}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,property,search){var searchRegexp=function(rawInput){var input=rawInput||"",FORWARD_SLASH="/";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf(FORWARD_SLASH),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),isValidRegExpFlag=function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}},flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith(FORWARD_SLASH)&&regExpStr.endsWith(FORWARD_SLASH)&&!regExpStr.endsWith("\\\\/")&&isValidRegExpFlag(flagsStr)?flagsStr:"");if(input.startsWith(FORWARD_SLASH)&&input.endsWith(FORWARD_SLASH)||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}(search),rid=Math.random().toString(36).slice(2,9),getCurrentScript=function(){if("currentScript"in document)return document.currentScript;var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]},ourScript=getCurrentScript(),abort=function(){var scriptEl=getCurrentScript();if(scriptEl){var content=scriptEl.textContent;try{content=Object.getOwnPropertyDescriptor(Node.prototype,"textContent").get.call(scriptEl)}catch(e){}if(scriptEl instanceof HTMLScriptElement&&content.length>0&&scriptEl!==ourScript&&searchRegexp.test(content)){!function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source);debugger}}},_setChainPropAccess=function(owner,property){var chainInfo=getPropertyInChain(owner,property),{base:base}=chainInfo,{prop:prop,chain:chain}=chainInfo;if(base instanceof Object!=0||null!==base)if(chain)Object.defineProperty(owner,prop,{get:function(){return base},set:function(a){base=a,a instanceof Object&&_setChainPropAccess(a,chain)}});else{var currentValue=base[prop];!function(object,property,descriptor){var currentDescriptor=Object.getOwnPropertyDescriptor(object,property);if(currentDescriptor&&!currentDescriptor.configurable)return!1;Object.defineProperty(object,property,descriptor)}(base,prop,{set:function(value){abort(),currentValue=value},get:function(){return abort(),currentValue}})}else{var props=property.split("."),propIndex=props.indexOf(prop);!function(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}(`The scriptlet had been executed before the ${props[propIndex-1]} was loaded.`,source.verbose)}};_setChainPropAccess(window,property),window.onerror=function(rid){var nativeOnError=window.onerror;return function(error){if("string"==typeof error&&error.includes(rid))return!0;if(nativeOnError instanceof Function){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];return nativeOnError.apply(window,[error,...args])}return!1}}(rid).bind()}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['debug-on-property-read'],
            scriptlet: 'function debugOnPropertyRead(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function getPropertyInChain(base,chain){var pos=chain.indexOf(".");if(-1===pos)return{base:base,prop:chain};var prop=chain.slice(0,pos);if(null===base)return{base:base,prop:prop,chain:chain};var obj,nextBase=base[prop];return chain=chain.slice(pos+1),(base instanceof Object||"object"==typeof base)&&(obj=base,0===Object.keys(obj).length&&!obj.prototype)||null===nextBase?{base:base,prop:prop,chain:chain}:void 0!==nextBase?getPropertyInChain(nextBase,chain):(Object.defineProperty(base,prop,{configurable:!0}),{base:base,prop:prop,chain:chain})}function noopFunc(){}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,property){if(property){var rid=Math.random().toString(36).slice(2,9),abort=function(){!function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source);debugger},_setChainPropAccess=function(owner,property){var chainInfo=getPropertyInChain(owner,property),{base:base}=chainInfo,{prop:prop,chain:chain}=chainInfo;chain?Object.defineProperty(owner,prop,{get:function(){return base},set:function(a){base=a,a instanceof Object&&_setChainPropAccess(a,chain)}}):function(object,property,descriptor){var currentDescriptor=Object.getOwnPropertyDescriptor(object,property);if(currentDescriptor&&!currentDescriptor.configurable)return!1;Object.defineProperty(object,property,descriptor)}(base,prop,{get:abort,set:noopFunc})};_setChainPropAccess(window,property),window.onerror=function(rid){var nativeOnError=window.onerror;return function(error){if("string"==typeof error&&error.includes(rid))return!0;if(nativeOnError instanceof Function){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];return nativeOnError.apply(window,[error,...args])}return!1}}(rid).bind()}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['debug-on-property-write'],
            scriptlet: 'function debugOnPropertyWrite(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function getPropertyInChain(base,chain){var pos=chain.indexOf(".");if(-1===pos)return{base:base,prop:chain};var prop=chain.slice(0,pos);if(null===base)return{base:base,prop:prop,chain:chain};var obj,nextBase=base[prop];return chain=chain.slice(pos+1),(base instanceof Object||"object"==typeof base)&&(obj=base,0===Object.keys(obj).length&&!obj.prototype)||null===nextBase?{base:base,prop:prop,chain:chain}:void 0!==nextBase?getPropertyInChain(nextBase,chain):(Object.defineProperty(base,prop,{configurable:!0}),{base:base,prop:prop,chain:chain})}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,property){if(property){var rid=Math.random().toString(36).slice(2,9),abort=function(){!function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source);debugger},_setChainPropAccess=function(owner,property){var chainInfo=getPropertyInChain(owner,property),{base:base}=chainInfo,{prop:prop,chain:chain}=chainInfo;chain?Object.defineProperty(owner,prop,{get:function(){return base},set:function(a){base=a,a instanceof Object&&_setChainPropAccess(a,chain)}}):function(object,property,descriptor){var currentDescriptor=Object.getOwnPropertyDescriptor(object,property);if(currentDescriptor&&!currentDescriptor.configurable)return!1;Object.defineProperty(object,property,descriptor)}(base,prop,{set:abort})};_setChainPropAccess(window,property),window.onerror=function(rid){var nativeOnError=window.onerror;return function(error){if("string"==typeof error&&error.includes(rid))return!0;if(nativeOnError instanceof Function){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];return nativeOnError.apply(window,[error,...args])}return!1}}(rid).bind()}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['dir-string'],
            scriptlet: 'function dirString(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,times){var{dir:dir}=console;console.dir=function(object){"function"==typeof dir&&dir.call(this,object),function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'disable-newtab-links',
                'disable-newtab-links.js',
                'ubo-disable-newtab-links.js',
                'ubo-disable-newtab-links',
            ],
            scriptlet: 'function disableNewtabLinks(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function hit(source){if(source.verbose){try{var trace=console.trace.bind(console),label="[ABY] ";"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){document.addEventListener("click",(function(ev){for(var{target:target}=ev;null!==target;){if("a"===target.localName&&target.hasAttribute("target")){ev.stopPropagation(),ev.preventDefault(),hit(source);break}target=target.parentNode}}))}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['evaldata-prune', 'evaldata-prune.js', 'ubo-evaldata-prune.js', 'ubo-evaldata-prune'],
            scriptlet: 'function evalDataPrune(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function getWildcardPropertyInChain(base,chain){var lookThrough=arguments.length>2&&void 0!==arguments[2]&&arguments[2],output=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],pos=chain.indexOf(".");if(-1===pos){if("*"===chain||"[]"===chain)for(var key in base)Object.prototype.hasOwnProperty.call(base,key)&&output.push({base:base,prop:key});else output.push({base:base,prop:chain});return output}var prop=chain.slice(0,pos);if("[]"===prop&&Array.isArray(base)||"*"===prop&&base instanceof Object){var nextProp=chain.slice(pos+1);Object.keys(base).forEach((function(key){getWildcardPropertyInChain(base[key],nextProp,lookThrough,output)}))}Array.isArray(base)&&base.forEach((function(key){void 0!==key&&getWildcardPropertyInChain(key,chain,lookThrough,output)}));var nextBase=base[prop];return chain=chain.slice(pos+1),void 0!==nextBase&&getWildcardPropertyInChain(nextBase,chain,lookThrough,output),output}function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}function toRegExp(rawInput){var input=rawInput||"";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf("/"),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith("/")&&regExpStr.endsWith("/")&&!regExpStr.endsWith("\\\\/")&&function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}}(flagsStr)?flagsStr:"");if(input.startsWith("/")&&input.endsWith("/")||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}function getPrunePath(props){return"string"==typeof props&&void 0!==props&&""!==props?props.split(/ +/):[]}function restoreRegExpValues(array){if(array.length)try{var stringPattern="";stringPattern=1===array.length?`(${array[0]})`:array.reduce((function(accumulator,currentValue,currentIndex){return 1===currentIndex?`(${accumulator}),(${currentValue})`:`${accumulator},(${currentValue})`}));var regExpGroup=new RegExp(stringPattern);array.toString().replace(regExpGroup,"")}catch(error){var message=`Failed to restore RegExp values: ${error}`;console.log(message)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,propsToRemove,requiredInitialProps,stack){var prunePaths=getPrunePath(propsToRemove),requiredPaths=getPrunePath(requiredInitialProps),nativeObjects={nativeStringify:window.JSON.stringify},evalHandler={apply:function(target,thisArg,args){var data=Reflect.apply(target,thisArg,args);return"object"==typeof data&&(data=function(source,root,prunePaths,requiredPaths,stack,nativeObjects){var{nativeStringify:nativeStringify}=nativeObjects;if(0===prunePaths.length&&0===requiredPaths.length)return logMessage(source,`${window.location.hostname}\\n${nativeStringify(root,null,2)}\\nStack trace:\\n${(new Error).stack}`,!0),root&&"object"==typeof root&&logMessage(source,root,!0,!1),root;try{if(!1===function(source,root,prunePaths,requiredPaths,stack,nativeObjects){if(!root)return!1;var shouldProcess,{nativeStringify:nativeStringify}=nativeObjects;if(0===prunePaths.length&&requiredPaths.length>0){var rootString=nativeStringify(root);if(toRegExp(requiredPaths.join("")).test(rootString))return logMessage(source,`${window.location.hostname}\\n${nativeStringify(root,null,2)}\\nStack trace:\\n${(new Error).stack}`,!0),root&&"object"==typeof root&&logMessage(source,root,!0,!1),shouldProcess=!1}if(stack&&!function(stackMatch,stackTrace){if(!stackMatch||""===stackMatch)return!0;var regExpValues=function(){try{for(var arrayOfRegexpValues=[],index=1;index<10;index+=1){var value=`$${index}`;if(!RegExp[value])break;arrayOfRegexpValues.push(RegExp[value])}return arrayOfRegexpValues}catch(error){return[]}}();if(function(stackMatch,stackTrace){var INLINE_SCRIPT_STRING="inlineScript",INJECTED_SCRIPT_STRING="injectedScript",INJECTED_SCRIPT_MARKER="<anonymous>",isInlineScript=function(match){return match.includes(INLINE_SCRIPT_STRING)},isInjectedScript=function(match){return match.includes(INJECTED_SCRIPT_STRING)};if(!isInlineScript(stackMatch)&&!isInjectedScript(stackMatch))return!1;var documentURL=window.location.href,pos=documentURL.indexOf("#");-1!==pos&&(documentURL=documentURL.slice(0,pos));var stackLines=stackTrace.split("\\n").slice(2).map((function(line){return line.trim()})).map((function(line){var stack,getStackTraceValues=/(.*?@)?(\\S+)(:\\d+)(:\\d+)\\)?$/.exec(line);if(getStackTraceValues){var _stackURL,_stackURL2,stackURL=getStackTraceValues[2],stackLine=getStackTraceValues[3],stackCol=getStackTraceValues[4];if(null!==(_stackURL=stackURL)&&void 0!==_stackURL&&_stackURL.startsWith("(")&&(stackURL=stackURL.slice(1)),null!==(_stackURL2=stackURL)&&void 0!==_stackURL2&&_stackURL2.startsWith(INJECTED_SCRIPT_MARKER)){var _stackFunction;stackURL=INJECTED_SCRIPT_STRING;var stackFunction=void 0!==getStackTraceValues[1]?getStackTraceValues[1].slice(0,-1):line.slice(0,getStackTraceValues.index).trim();null!==(_stackFunction=stackFunction)&&void 0!==_stackFunction&&_stackFunction.startsWith("at")&&(stackFunction=stackFunction.slice(2).trim()),stack=`${stackFunction} ${stackURL}${stackLine}${stackCol}`.trim()}else stack=stackURL===documentURL?`${INLINE_SCRIPT_STRING}${stackLine}${stackCol}`.trim():`${stackURL}${stackLine}${stackCol}`.trim()}else stack=line;return stack}));if(stackLines)for(var index=0;index<stackLines.length;index+=1){if(isInlineScript(stackMatch)&&stackLines[index].startsWith(INLINE_SCRIPT_STRING)&&stackLines[index].match(toRegExp(stackMatch)))return!0;if(isInjectedScript(stackMatch)&&stackLines[index].startsWith(INJECTED_SCRIPT_STRING)&&stackLines[index].match(toRegExp(stackMatch)))return!0}return!1}(stackMatch,stackTrace))return regExpValues.length&&regExpValues[0]!==RegExp.$1&&restoreRegExpValues(regExpValues),!0;var stackRegexp=toRegExp(stackMatch),refinedStackTrace=stackTrace.split("\\n").slice(2).map((function(line){return line.trim()})).join("\\n");return regExpValues.length&&regExpValues[0]!==RegExp.$1&&restoreRegExpValues(regExpValues),function(){var descriptor=Object.getOwnPropertyDescriptor(RegExp.prototype,"test"),nativeRegexTest=null==descriptor?void 0:descriptor.value;if(descriptor&&"function"==typeof descriptor.value)return nativeRegexTest;throw new Error("RegExp.prototype.test is not a function")}().call(stackRegexp,refinedStackTrace)}(stack,(new Error).stack||""))return shouldProcess=!1;for(var _ret,wildcardSymbols=[".*.","*.",".*",".[].","[].",".[]"],_loop=function(){var requiredPath=requiredPaths[i],lastNestedPropName=requiredPath.split(".").pop(),hasWildcard=wildcardSymbols.some((function(symbol){return requiredPath.includes(symbol)})),details=getWildcardPropertyInChain(root,requiredPath,hasWildcard);if(!details.length)return{v:shouldProcess=!1};shouldProcess=!hasWildcard;for(var j=0;j<details.length;j+=1){var hasRequiredProp="string"==typeof lastNestedPropName&&void 0!==details[j].base[lastNestedPropName];shouldProcess=hasWildcard?hasRequiredProp||shouldProcess:hasRequiredProp&&shouldProcess}},i=0;i<requiredPaths.length;i+=1)if(_ret=_loop())return _ret.v;return shouldProcess}(source,root,prunePaths,requiredPaths,stack,nativeObjects))return root;prunePaths.forEach((function(path){getWildcardPropertyInChain(root,path,!0).forEach((function(ownerObj){void 0!==ownerObj&&ownerObj.base&&(delete ownerObj.base[ownerObj.prop],function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source))}))}))}catch(e){logMessage(source,e)}return root}(source,data,prunePaths,requiredPaths,stack,nativeObjects)),data}};window.eval=new Proxy(window.eval,evalHandler)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['hide-in-shadow-dom'],
            scriptlet: 'function hideInShadowDom(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function findHostElements(rootElement){var hosts=[];rootElement&&rootElement.querySelectorAll("*").forEach((function(el){el.shadowRoot&&hosts.push(el)}));return hosts}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,selector,baseSelector){if(Element.prototype.attachShadow){var hideHandler=function(){for(var hostElements=baseSelector?document.querySelectorAll(baseSelector):findHostElements(document.documentElement),_loop=function(){var isHidden=!1,{targets:targets,innerHosts:innerHosts}=function(selector,hostElements){var targets=[],innerHostsAcc=[];hostElements.forEach((function(host){var simpleElems=host.querySelectorAll(selector);targets=targets.concat([].slice.call(simpleElems));var shadowRootElem=host.shadowRoot,shadowChildren=shadowRootElem.querySelectorAll(selector);targets=targets.concat([].slice.call(shadowChildren)),innerHostsAcc.push(findHostElements(shadowRootElem))}));var innerHosts=function(input){var stack=[];input.forEach((function(el){return stack.push(el)}));for(var res=[];stack.length;){var next=stack.pop();Array.isArray(next)?next.forEach((function(el){return stack.push(el)})):res.push(next)}return res.reverse()}(innerHostsAcc);return{targets:targets,innerHosts:innerHosts}}(selector,hostElements);targets.forEach((function(targetEl){targetEl.style.cssText="display:none!important;",isHidden=!0})),isHidden&&function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source),hostElements=innerHosts};0!==hostElements.length;)_loop()};hideHandler(),function(callback){var cb,delay,savedArgs,wait,_wrapper,observeAttrs=arguments.length>1&&void 0!==arguments[1]&&arguments[1],attrsToObserve=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],observer=new MutationObserver((cb=callbackWrapper,delay=20,wait=!1,_wrapper=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];wait?savedArgs=args:(cb(...args),wait=!0,setTimeout((function(){wait=!1,savedArgs&&(_wrapper(...savedArgs),savedArgs=null)}),delay))},_wrapper)),connect=function(){attrsToObserve.length>0?observer.observe(document.documentElement,{childList:!0,subtree:!0,attributes:observeAttrs,attributeFilter:attrsToObserve}):observer.observe(document.documentElement,{childList:!0,subtree:!0,attributes:observeAttrs})},disconnect=function(){observer.disconnect()};function callbackWrapper(){disconnect(),callback(),connect()}connect()}(hideHandler,!0)}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['href-sanitizer', 'href-sanitizer.js', 'ubo-href-sanitizer.js', 'ubo-href-sanitizer'],
            scriptlet: 'function hrefSanitizer(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,selector){var attribute=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",transform=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(selector){var regexpNotValidAtStart=/^[^!-~\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0560-\\u0588\\u05D0-\\u05EA\\u05EF-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u0860-\\u086A\\u0870-\\u0887\\u0889-\\u088E\\u08A0-\\u08C9\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u09FC\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0AF9\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58-\\u0C5A\\u0C5D\\u0C60\\u0C61\\u0C80\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D04-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D54-\\u0D56\\u0D5F-\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E86-\\u0E8A\\u0E8C-\\u0EA3\\u0EA5\\u0EA7-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F5\\u13F8-\\u13FD\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16F1-\\u16F8\\u1700-\\u1711\\u171F-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1878\\u1880-\\u1884\\u1887-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4C\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1C80-\\u1C8A\\u1C90-\\u1CBA\\u1CBD-\\u1CBF\\u1CE9-\\u1CEC\\u1CEE-\\u1CF3\\u1CF5\\u1CF6\\u1CFA\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2183\\u2184\\u2C00-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005\\u3006\\u3031-\\u3035\\u303B\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312F\\u3131-\\u318E\\u31A0-\\u31BF\\u31F0-\\u31FF\\u3400-\\u4DBF\\u4E00-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6E5\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA7CD\\uA7D0\\uA7D1\\uA7D3\\uA7D5-\\uA7DC\\uA7F2-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA8FD\\uA8FE\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB69\\uAB70-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC\\u{10000}-\\u{1000B}\\u{1000D}-\\u{10026}\\u{10028}-\\u{1003A}\\u{1003C}\\u{1003D}\\u{1003F}-\\u{1004D}\\u{10050}-\\u{1005D}\\u{10080}-\\u{100FA}\\u{10280}-\\u{1029C}\\u{102A0}-\\u{102D0}\\u{10300}-\\u{1031F}\\u{1032D}-\\u{10340}\\u{10342}-\\u{10349}\\u{10350}-\\u{10375}\\u{10380}-\\u{1039D}\\u{103A0}-\\u{103C3}\\u{103C8}-\\u{103CF}\\u{10400}-\\u{1049D}\\u{104B0}-\\u{104D3}\\u{104D8}-\\u{104FB}\\u{10500}-\\u{10527}\\u{10530}-\\u{10563}\\u{10570}-\\u{1057A}\\u{1057C}-\\u{1058A}\\u{1058C}-\\u{10592}\\u{10594}\\u{10595}\\u{10597}-\\u{105A1}\\u{105A3}-\\u{105B1}\\u{105B3}-\\u{105B9}\\u{105BB}\\u{105BC}\\u{105C0}-\\u{105F3}\\u{10600}-\\u{10736}\\u{10740}-\\u{10755}\\u{10760}-\\u{10767}\\u{10780}-\\u{10785}\\u{10787}-\\u{107B0}\\u{107B2}-\\u{107BA}\\u{10800}-\\u{10805}\\u{10808}\\u{1080A}-\\u{10835}\\u{10837}\\u{10838}\\u{1083C}\\u{1083F}-\\u{10855}\\u{10860}-\\u{10876}\\u{10880}-\\u{1089E}\\u{108E0}-\\u{108F2}\\u{108F4}\\u{108F5}\\u{10900}-\\u{10915}\\u{10920}-\\u{10939}\\u{10980}-\\u{109B7}\\u{109BE}\\u{109BF}\\u{10A00}\\u{10A10}-\\u{10A13}\\u{10A15}-\\u{10A17}\\u{10A19}-\\u{10A35}\\u{10A60}-\\u{10A7C}\\u{10A80}-\\u{10A9C}\\u{10AC0}-\\u{10AC7}\\u{10AC9}-\\u{10AE4}\\u{10B00}-\\u{10B35}\\u{10B40}-\\u{10B55}\\u{10B60}-\\u{10B72}\\u{10B80}-\\u{10B91}\\u{10C00}-\\u{10C48}\\u{10C80}-\\u{10CB2}\\u{10CC0}-\\u{10CF2}\\u{10D00}-\\u{10D23}\\u{10D4A}-\\u{10D65}\\u{10D6F}-\\u{10D85}\\u{10E80}-\\u{10EA9}\\u{10EB0}\\u{10EB1}\\u{10EC2}-\\u{10EC4}\\u{10F00}-\\u{10F1C}\\u{10F27}\\u{10F30}-\\u{10F45}\\u{10F70}-\\u{10F81}\\u{10FB0}-\\u{10FC4}\\u{10FE0}-\\u{10FF6}\\u{11003}-\\u{11037}\\u{11071}\\u{11072}\\u{11075}\\u{11083}-\\u{110AF}\\u{110D0}-\\u{110E8}\\u{11103}-\\u{11126}\\u{11144}\\u{11147}\\u{11150}-\\u{11172}\\u{11176}\\u{11183}-\\u{111B2}\\u{111C1}-\\u{111C4}\\u{111DA}\\u{111DC}\\u{11200}-\\u{11211}\\u{11213}-\\u{1122B}\\u{1123F}\\u{11240}\\u{11280}-\\u{11286}\\u{11288}\\u{1128A}-\\u{1128D}\\u{1128F}-\\u{1129D}\\u{1129F}-\\u{112A8}\\u{112B0}-\\u{112DE}\\u{11305}-\\u{1130C}\\u{1130F}\\u{11310}\\u{11313}-\\u{11328}\\u{1132A}-\\u{11330}\\u{11332}\\u{11333}\\u{11335}-\\u{11339}\\u{1133D}\\u{11350}\\u{1135D}-\\u{11361}\\u{11380}-\\u{11389}\\u{1138B}\\u{1138E}\\u{11390}-\\u{113B5}\\u{113B7}\\u{113D1}\\u{113D3}\\u{11400}-\\u{11434}\\u{11447}-\\u{1144A}\\u{1145F}-\\u{11461}\\u{11480}-\\u{114AF}\\u{114C4}\\u{114C5}\\u{114C7}\\u{11580}-\\u{115AE}\\u{115D8}-\\u{115DB}\\u{11600}-\\u{1162F}\\u{11644}\\u{11680}-\\u{116AA}\\u{116B8}\\u{11700}-\\u{1171A}\\u{11740}-\\u{11746}\\u{11800}-\\u{1182B}\\u{118A0}-\\u{118DF}\\u{118FF}-\\u{11906}\\u{11909}\\u{1190C}-\\u{11913}\\u{11915}\\u{11916}\\u{11918}-\\u{1192F}\\u{1193F}\\u{11941}\\u{119A0}-\\u{119A7}\\u{119AA}-\\u{119D0}\\u{119E1}\\u{119E3}\\u{11A00}\\u{11A0B}-\\u{11A32}\\u{11A3A}\\u{11A50}\\u{11A5C}-\\u{11A89}\\u{11A9D}\\u{11AB0}-\\u{11AF8}\\u{11BC0}-\\u{11BE0}\\u{11C00}-\\u{11C08}\\u{11C0A}-\\u{11C2E}\\u{11C40}\\u{11C72}-\\u{11C8F}\\u{11D00}-\\u{11D06}\\u{11D08}\\u{11D09}\\u{11D0B}-\\u{11D30}\\u{11D46}\\u{11D60}-\\u{11D65}\\u{11D67}\\u{11D68}\\u{11D6A}-\\u{11D89}\\u{11D98}\\u{11EE0}-\\u{11EF2}\\u{11F02}\\u{11F04}-\\u{11F10}\\u{11F12}-\\u{11F33}\\u{11FB0}\\u{12000}-\\u{12399}\\u{12480}-\\u{12543}\\u{12F90}-\\u{12FF0}\\u{13000}-\\u{1342F}\\u{13441}-\\u{13446}\\u{13460}-\\u{143FA}\\u{14400}-\\u{14646}\\u{16100}-\\u{1611D}\\u{16800}-\\u{16A38}\\u{16A40}-\\u{16A5E}\\u{16A70}-\\u{16ABE}\\u{16AD0}-\\u{16AED}\\u{16B00}-\\u{16B2F}\\u{16B40}-\\u{16B43}\\u{16B63}-\\u{16B77}\\u{16B7D}-\\u{16B8F}\\u{16D40}-\\u{16D6C}\\u{16E40}-\\u{16E7F}\\u{16F00}-\\u{16F4A}\\u{16F50}\\u{16F93}-\\u{16F9F}\\u{16FE0}\\u{16FE1}\\u{16FE3}\\u{17000}-\\u{187F7}\\u{18800}-\\u{18CD5}\\u{18CFF}-\\u{18D08}\\u{1AFF0}-\\u{1AFF3}\\u{1AFF5}-\\u{1AFFB}\\u{1AFFD}\\u{1AFFE}\\u{1B000}-\\u{1B122}\\u{1B132}\\u{1B150}-\\u{1B152}\\u{1B155}\\u{1B164}-\\u{1B167}\\u{1B170}-\\u{1B2FB}\\u{1BC00}-\\u{1BC6A}\\u{1BC70}-\\u{1BC7C}\\u{1BC80}-\\u{1BC88}\\u{1BC90}-\\u{1BC99}\\u{1D400}-\\u{1D454}\\u{1D456}-\\u{1D49C}\\u{1D49E}\\u{1D49F}\\u{1D4A2}\\u{1D4A5}\\u{1D4A6}\\u{1D4A9}-\\u{1D4AC}\\u{1D4AE}-\\u{1D4B9}\\u{1D4BB}\\u{1D4BD}-\\u{1D4C3}\\u{1D4C5}-\\u{1D505}\\u{1D507}-\\u{1D50A}\\u{1D50D}-\\u{1D514}\\u{1D516}-\\u{1D51C}\\u{1D51E}-\\u{1D539}\\u{1D53B}-\\u{1D53E}\\u{1D540}-\\u{1D544}\\u{1D546}\\u{1D54A}-\\u{1D550}\\u{1D552}-\\u{1D6A5}\\u{1D6A8}-\\u{1D6C0}\\u{1D6C2}-\\u{1D6DA}\\u{1D6DC}-\\u{1D6FA}\\u{1D6FC}-\\u{1D714}\\u{1D716}-\\u{1D734}\\u{1D736}-\\u{1D74E}\\u{1D750}-\\u{1D76E}\\u{1D770}-\\u{1D788}\\u{1D78A}-\\u{1D7A8}\\u{1D7AA}-\\u{1D7C2}\\u{1D7C4}-\\u{1D7CB}\\u{1DF00}-\\u{1DF1E}\\u{1DF25}-\\u{1DF2A}\\u{1E030}-\\u{1E06D}\\u{1E100}-\\u{1E12C}\\u{1E137}-\\u{1E13D}\\u{1E14E}\\u{1E290}-\\u{1E2AD}\\u{1E2C0}-\\u{1E2EB}\\u{1E4D0}-\\u{1E4EB}\\u{1E5D0}-\\u{1E5ED}\\u{1E5F0}\\u{1E7E0}-\\u{1E7E6}\\u{1E7E8}-\\u{1E7EB}\\u{1E7ED}\\u{1E7EE}\\u{1E7F0}-\\u{1E7FE}\\u{1E800}-\\u{1E8C4}\\u{1E900}-\\u{1E943}\\u{1E94B}\\u{1EE00}-\\u{1EE03}\\u{1EE05}-\\u{1EE1F}\\u{1EE21}\\u{1EE22}\\u{1EE24}\\u{1EE27}\\u{1EE29}-\\u{1EE32}\\u{1EE34}-\\u{1EE37}\\u{1EE39}\\u{1EE3B}\\u{1EE42}\\u{1EE47}\\u{1EE49}\\u{1EE4B}\\u{1EE4D}-\\u{1EE4F}\\u{1EE51}\\u{1EE52}\\u{1EE54}\\u{1EE57}\\u{1EE59}\\u{1EE5B}\\u{1EE5D}\\u{1EE5F}\\u{1EE61}\\u{1EE62}\\u{1EE64}\\u{1EE67}-\\u{1EE6A}\\u{1EE6C}-\\u{1EE72}\\u{1EE74}-\\u{1EE77}\\u{1EE79}-\\u{1EE7C}\\u{1EE7E}\\u{1EE80}-\\u{1EE89}\\u{1EE8B}-\\u{1EE9B}\\u{1EEA1}-\\u{1EEA3}\\u{1EEA5}-\\u{1EEA9}\\u{1EEAB}-\\u{1EEBB}\\u{20000}-\\u{2A6DF}\\u{2A700}-\\u{2B739}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}\\u{2EBF0}-\\u{2EE5D}\\u{2F800}-\\u{2FA1D}\\u{30000}-\\u{3134A}\\u{31350}-\\u{323AF}]+/u,regexpNotValidAtEnd=/[^!-~\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0560-\\u0588\\u05D0-\\u05EA\\u05EF-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u0860-\\u086A\\u0870-\\u0887\\u0889-\\u088E\\u08A0-\\u08C9\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u09FC\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0AF9\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58-\\u0C5A\\u0C5D\\u0C60\\u0C61\\u0C80\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D04-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D54-\\u0D56\\u0D5F-\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E86-\\u0E8A\\u0E8C-\\u0EA3\\u0EA5\\u0EA7-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F5\\u13F8-\\u13FD\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16F1-\\u16F8\\u1700-\\u1711\\u171F-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1878\\u1880-\\u1884\\u1887-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4C\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1C80-\\u1C8A\\u1C90-\\u1CBA\\u1CBD-\\u1CBF\\u1CE9-\\u1CEC\\u1CEE-\\u1CF3\\u1CF5\\u1CF6\\u1CFA\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2183\\u2184\\u2C00-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005\\u3006\\u3031-\\u3035\\u303B\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312F\\u3131-\\u318E\\u31A0-\\u31BF\\u31F0-\\u31FF\\u3400-\\u4DBF\\u4E00-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6E5\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA7CD\\uA7D0\\uA7D1\\uA7D3\\uA7D5-\\uA7DC\\uA7F2-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA8FD\\uA8FE\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB69\\uAB70-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC\\u{10000}-\\u{1000B}\\u{1000D}-\\u{10026}\\u{10028}-\\u{1003A}\\u{1003C}\\u{1003D}\\u{1003F}-\\u{1004D}\\u{10050}-\\u{1005D}\\u{10080}-\\u{100FA}\\u{10280}-\\u{1029C}\\u{102A0}-\\u{102D0}\\u{10300}-\\u{1031F}\\u{1032D}-\\u{10340}\\u{10342}-\\u{10349}\\u{10350}-\\u{10375}\\u{10380}-\\u{1039D}\\u{103A0}-\\u{103C3}\\u{103C8}-\\u{103CF}\\u{10400}-\\u{1049D}\\u{104B0}-\\u{104D3}\\u{104D8}-\\u{104FB}\\u{10500}-\\u{10527}\\u{10530}-\\u{10563}\\u{10570}-\\u{1057A}\\u{1057C}-\\u{1058A}\\u{1058C}-\\u{10592}\\u{10594}\\u{10595}\\u{10597}-\\u{105A1}\\u{105A3}-\\u{105B1}\\u{105B3}-\\u{105B9}\\u{105BB}\\u{105BC}\\u{105C0}-\\u{105F3}\\u{10600}-\\u{10736}\\u{10740}-\\u{10755}\\u{10760}-\\u{10767}\\u{10780}-\\u{10785}\\u{10787}-\\u{107B0}\\u{107B2}-\\u{107BA}\\u{10800}-\\u{10805}\\u{10808}\\u{1080A}-\\u{10835}\\u{10837}\\u{10838}\\u{1083C}\\u{1083F}-\\u{10855}\\u{10860}-\\u{10876}\\u{10880}-\\u{1089E}\\u{108E0}-\\u{108F2}\\u{108F4}\\u{108F5}\\u{10900}-\\u{10915}\\u{10920}-\\u{10939}\\u{10980}-\\u{109B7}\\u{109BE}\\u{109BF}\\u{10A00}\\u{10A10}-\\u{10A13}\\u{10A15}-\\u{10A17}\\u{10A19}-\\u{10A35}\\u{10A60}-\\u{10A7C}\\u{10A80}-\\u{10A9C}\\u{10AC0}-\\u{10AC7}\\u{10AC9}-\\u{10AE4}\\u{10B00}-\\u{10B35}\\u{10B40}-\\u{10B55}\\u{10B60}-\\u{10B72}\\u{10B80}-\\u{10B91}\\u{10C00}-\\u{10C48}\\u{10C80}-\\u{10CB2}\\u{10CC0}-\\u{10CF2}\\u{10D00}-\\u{10D23}\\u{10D4A}-\\u{10D65}\\u{10D6F}-\\u{10D85}\\u{10E80}-\\u{10EA9}\\u{10EB0}\\u{10EB1}\\u{10EC2}-\\u{10EC4}\\u{10F00}-\\u{10F1C}\\u{10F27}\\u{10F30}-\\u{10F45}\\u{10F70}-\\u{10F81}\\u{10FB0}-\\u{10FC4}\\u{10FE0}-\\u{10FF6}\\u{11003}-\\u{11037}\\u{11071}\\u{11072}\\u{11075}\\u{11083}-\\u{110AF}\\u{110D0}-\\u{110E8}\\u{11103}-\\u{11126}\\u{11144}\\u{11147}\\u{11150}-\\u{11172}\\u{11176}\\u{11183}-\\u{111B2}\\u{111C1}-\\u{111C4}\\u{111DA}\\u{111DC}\\u{11200}-\\u{11211}\\u{11213}-\\u{1122B}\\u{1123F}\\u{11240}\\u{11280}-\\u{11286}\\u{11288}\\u{1128A}-\\u{1128D}\\u{1128F}-\\u{1129D}\\u{1129F}-\\u{112A8}\\u{112B0}-\\u{112DE}\\u{11305}-\\u{1130C}\\u{1130F}\\u{11310}\\u{11313}-\\u{11328}\\u{1132A}-\\u{11330}\\u{11332}\\u{11333}\\u{11335}-\\u{11339}\\u{1133D}\\u{11350}\\u{1135D}-\\u{11361}\\u{11380}-\\u{11389}\\u{1138B}\\u{1138E}\\u{11390}-\\u{113B5}\\u{113B7}\\u{113D1}\\u{113D3}\\u{11400}-\\u{11434}\\u{11447}-\\u{1144A}\\u{1145F}-\\u{11461}\\u{11480}-\\u{114AF}\\u{114C4}\\u{114C5}\\u{114C7}\\u{11580}-\\u{115AE}\\u{115D8}-\\u{115DB}\\u{11600}-\\u{1162F}\\u{11644}\\u{11680}-\\u{116AA}\\u{116B8}\\u{11700}-\\u{1171A}\\u{11740}-\\u{11746}\\u{11800}-\\u{1182B}\\u{118A0}-\\u{118DF}\\u{118FF}-\\u{11906}\\u{11909}\\u{1190C}-\\u{11913}\\u{11915}\\u{11916}\\u{11918}-\\u{1192F}\\u{1193F}\\u{11941}\\u{119A0}-\\u{119A7}\\u{119AA}-\\u{119D0}\\u{119E1}\\u{119E3}\\u{11A00}\\u{11A0B}-\\u{11A32}\\u{11A3A}\\u{11A50}\\u{11A5C}-\\u{11A89}\\u{11A9D}\\u{11AB0}-\\u{11AF8}\\u{11BC0}-\\u{11BE0}\\u{11C00}-\\u{11C08}\\u{11C0A}-\\u{11C2E}\\u{11C40}\\u{11C72}-\\u{11C8F}\\u{11D00}-\\u{11D06}\\u{11D08}\\u{11D09}\\u{11D0B}-\\u{11D30}\\u{11D46}\\u{11D60}-\\u{11D65}\\u{11D67}\\u{11D68}\\u{11D6A}-\\u{11D89}\\u{11D98}\\u{11EE0}-\\u{11EF2}\\u{11F02}\\u{11F04}-\\u{11F10}\\u{11F12}-\\u{11F33}\\u{11FB0}\\u{12000}-\\u{12399}\\u{12480}-\\u{12543}\\u{12F90}-\\u{12FF0}\\u{13000}-\\u{1342F}\\u{13441}-\\u{13446}\\u{13460}-\\u{143FA}\\u{14400}-\\u{14646}\\u{16100}-\\u{1611D}\\u{16800}-\\u{16A38}\\u{16A40}-\\u{16A5E}\\u{16A70}-\\u{16ABE}\\u{16AD0}-\\u{16AED}\\u{16B00}-\\u{16B2F}\\u{16B40}-\\u{16B43}\\u{16B63}-\\u{16B77}\\u{16B7D}-\\u{16B8F}\\u{16D40}-\\u{16D6C}\\u{16E40}-\\u{16E7F}\\u{16F00}-\\u{16F4A}\\u{16F50}\\u{16F93}-\\u{16F9F}\\u{16FE0}\\u{16FE1}\\u{16FE3}\\u{17000}-\\u{187F7}\\u{18800}-\\u{18CD5}\\u{18CFF}-\\u{18D08}\\u{1AFF0}-\\u{1AFF3}\\u{1AFF5}-\\u{1AFFB}\\u{1AFFD}\\u{1AFFE}\\u{1B000}-\\u{1B122}\\u{1B132}\\u{1B150}-\\u{1B152}\\u{1B155}\\u{1B164}-\\u{1B167}\\u{1B170}-\\u{1B2FB}\\u{1BC00}-\\u{1BC6A}\\u{1BC70}-\\u{1BC7C}\\u{1BC80}-\\u{1BC88}\\u{1BC90}-\\u{1BC99}\\u{1D400}-\\u{1D454}\\u{1D456}-\\u{1D49C}\\u{1D49E}\\u{1D49F}\\u{1D4A2}\\u{1D4A5}\\u{1D4A6}\\u{1D4A9}-\\u{1D4AC}\\u{1D4AE}-\\u{1D4B9}\\u{1D4BB}\\u{1D4BD}-\\u{1D4C3}\\u{1D4C5}-\\u{1D505}\\u{1D507}-\\u{1D50A}\\u{1D50D}-\\u{1D514}\\u{1D516}-\\u{1D51C}\\u{1D51E}-\\u{1D539}\\u{1D53B}-\\u{1D53E}\\u{1D540}-\\u{1D544}\\u{1D546}\\u{1D54A}-\\u{1D550}\\u{1D552}-\\u{1D6A5}\\u{1D6A8}-\\u{1D6C0}\\u{1D6C2}-\\u{1D6DA}\\u{1D6DC}-\\u{1D6FA}\\u{1D6FC}-\\u{1D714}\\u{1D716}-\\u{1D734}\\u{1D736}-\\u{1D74E}\\u{1D750}-\\u{1D76E}\\u{1D770}-\\u{1D788}\\u{1D78A}-\\u{1D7A8}\\u{1D7AA}-\\u{1D7C2}\\u{1D7C4}-\\u{1D7CB}\\u{1DF00}-\\u{1DF1E}\\u{1DF25}-\\u{1DF2A}\\u{1E030}-\\u{1E06D}\\u{1E100}-\\u{1E12C}\\u{1E137}-\\u{1E13D}\\u{1E14E}\\u{1E290}-\\u{1E2AD}\\u{1E2C0}-\\u{1E2EB}\\u{1E4D0}-\\u{1E4EB}\\u{1E5D0}-\\u{1E5ED}\\u{1E5F0}\\u{1E7E0}-\\u{1E7E6}\\u{1E7E8}-\\u{1E7EB}\\u{1E7ED}\\u{1E7EE}\\u{1E7F0}-\\u{1E7FE}\\u{1E800}-\\u{1E8C4}\\u{1E900}-\\u{1E943}\\u{1E94B}\\u{1EE00}-\\u{1EE03}\\u{1EE05}-\\u{1EE1F}\\u{1EE21}\\u{1EE22}\\u{1EE24}\\u{1EE27}\\u{1EE29}-\\u{1EE32}\\u{1EE34}-\\u{1EE37}\\u{1EE39}\\u{1EE3B}\\u{1EE42}\\u{1EE47}\\u{1EE49}\\u{1EE4B}\\u{1EE4D}-\\u{1EE4F}\\u{1EE51}\\u{1EE52}\\u{1EE54}\\u{1EE57}\\u{1EE59}\\u{1EE5B}\\u{1EE5D}\\u{1EE5F}\\u{1EE61}\\u{1EE62}\\u{1EE64}\\u{1EE67}-\\u{1EE6A}\\u{1EE6C}-\\u{1EE72}\\u{1EE74}-\\u{1EE77}\\u{1EE79}-\\u{1EE7C}\\u{1EE7E}\\u{1EE80}-\\u{1EE89}\\u{1EE8B}-\\u{1EE9B}\\u{1EEA1}-\\u{1EEA3}\\u{1EEA5}-\\u{1EEA9}\\u{1EEAB}-\\u{1EEBB}\\u{20000}-\\u{2A6DF}\\u{2A700}-\\u{2B739}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}\\u{2EBF0}-\\u{2EE5D}\\u{2F800}-\\u{2FA1D}\\u{30000}-\\u{3134A}\\u{31350}-\\u{323AF}]+$/u,isValidURL=function(url){try{return new URL(url),!0}catch(_unused){return!1}},_extractURLFromObject=function(obj){for(var key in obj)if(Object.prototype.hasOwnProperty.call(obj,key)){var value=obj[key];if("string"==typeof value&&isValidURL(value))return value;if("object"==typeof value&&null!==value){var result=_extractURLFromObject(value);if(result)return result}}return null},decodeBase64SeveralTimes=function(text,times){for(var content,result=text,i=0;i<times;i+=1)try{result=atob(result)}catch(e){if(result===text)return""}if(isValidURL(result))return result;if((content=result).startsWith("{")&&content.endsWith("}"))try{var parsedResult=JSON.parse(result);return _extractURLFromObject(parsedResult)}catch(ex){return""}return logMessage(source,`Failed to decode base64 string: ${text}`),""},decodeBase64URL=function(url){var{search:search,hash:hash}=new URL(url,document.location.href);return search.length>0?function(search){var decodedParam,validEncodedParam,searchString=search.replace("?","");return searchString.includes("&")?(searchString.split("&").forEach((function(param){(decodedParam=decodeBase64SeveralTimes(param,10))&&decodedParam.length>0&&(validEncodedParam=decodedParam)})),validEncodedParam):decodeBase64SeveralTimes(searchString,10)}(search):hash.length>0?function(hash){var validEncodedHash="";return hash.includes("#!")?validEncodedHash=hash.replace("#!",""):hash.includes("#")&&(validEncodedHash=hash.replace("#","")),validEncodedHash?decodeBase64SeveralTimes(validEncodedHash,10):""}(hash):(logMessage(source,`Failed to execute base64 from URL: ${url}`),null)},sanitize=function(elementSelector){var elements;try{elements=document.querySelectorAll(elementSelector)}catch(e){return void logMessage(source,`Invalid selector "${elementSelector}"`)}elements.forEach((function(elem){try{if("a"!==(element=elem).nodeName.toLowerCase()||!element.hasAttribute("href"))return void logMessage(source,`${elem} is not a valid element to sanitize`);var newHref=function(anchor,attr){if("text"===attr)return anchor.textContent?anchor.textContent.replace(regexpNotValidAtStart,"").replace(regexpNotValidAtEnd,""):"";if(attr.startsWith("?"))try{return new URL(anchor.href,document.location.href).searchParams.get(attr.slice(1))||""}catch(ex){return logMessage(source,`Cannot retrieve the parameter \'${attr.slice(1)}\' from the URL \'${anchor.href}`),""}return attr.startsWith("[")&&attr.endsWith("]")&&anchor.getAttribute(attr.slice(1,-1))||""}(elem,attribute);if(transform)switch(!0){case"base64decode"===transform:newHref=isValidURL(href=newHref)?decodeBase64URL(href)||"":decodeBase64SeveralTimes(href,10)||"";break;case"removeHash"===transform:newHref=(urlObj=new URL(newHref,window.location.origin)).hash?(urlObj.hash="",urlObj.toString()):"";break;case transform.startsWith("removeParam"):newHref=function(url,transformValue){var urlObj=new URL(url,window.location.origin),paramNamesToRemoveStr=transformValue.split(":")[1];if(!paramNamesToRemoveStr)return urlObj.search="",urlObj.toString();var initSearchParamsLength=urlObj.searchParams.toString().length;return paramNamesToRemoveStr.split(",").forEach((function(param){urlObj.searchParams.has(param)&&urlObj.searchParams.delete(param)})),initSearchParamsLength===urlObj.searchParams.toString().length?"":urlObj.toString()}(newHref,transform);break;default:return void logMessage(source,`Invalid transform option: "${transform}"`)}var newValidHref=function(text){if(!text)return null;try{var{href:href,protocol:protocol}=new URL(text,document.location.href);return"http:"!==protocol&&"https:"!==protocol?(logMessage(source,`Protocol not allowed: "${protocol}", from URL: "${href}"`),null):href}catch(_unused2){return null}}(newHref);if(!newValidHref)return void logMessage(source,`Invalid URL: ${newHref}`);var oldHref=elem.href;elem.setAttribute("href",newValidHref),newValidHref!==oldHref&&logMessage(source,`Sanitized "${oldHref}" to "${newValidHref}".`)}catch(ex){logMessage(source,`Failed to sanitize ${elem}.`)}var urlObj,href,element})),function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)},run=function(){sanitize(selector),function(callback){var cb,delay,savedArgs,wait,_wrapper,observeAttrs=arguments.length>1&&void 0!==arguments[1]&&arguments[1],attrsToObserve=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],observer=new MutationObserver((cb=callbackWrapper,delay=20,wait=!1,_wrapper=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];wait?savedArgs=args:(cb(...args),wait=!0,setTimeout((function(){wait=!1,savedArgs&&(_wrapper(...savedArgs),savedArgs=null)}),delay))},_wrapper)),connect=function(){attrsToObserve.length>0?observer.observe(document.documentElement,{childList:!0,subtree:!0,attributes:observeAttrs,attributeFilter:attrsToObserve}):observer.observe(document.documentElement,{childList:!0,subtree:!0,attributes:observeAttrs})},disconnect=function(){observer.disconnect()};function callbackWrapper(){disconnect(),callback(),connect()}connect()}((function(){return sanitize(selector)}),!0)};"loading"===document.readyState?window.addEventListener("DOMContentLoaded",run,{once:!0}):run()}else logMessage(source,"Selector is required.")}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['inject-css-in-shadow-dom'],
            scriptlet: 'function injectCssInShadowDom(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,cssRule){var hostSelector=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";Element.prototype.attachShadow&&"undefined"!=typeof Proxy&&"undefined"!=typeof Reflect&&(cssRule.match(/(url|image-set)\\(.*\\)/i)?logMessage(source,\'"url()" function is not allowed for css rules\'):function(context,hostSelector,callback){var handlerWrapper=function(target,thisArg,args){var shadowRoot=Reflect.apply(target,thisArg,args);return thisArg&&thisArg.matches(hostSelector||"*")&&callback(shadowRoot),shadowRoot},attachShadowHandler={apply:handlerWrapper};context.Element.prototype.attachShadow=new Proxy(context.Element.prototype.attachShadow,attachShadowHandler)}(window,hostSelector,(function(shadowRoot){try{var stylesheet=new CSSStyleSheet;try{stylesheet.insertRule(cssRule)}catch(e){return void logMessage(source,`Unable to apply the rule \'${cssRule}\' due to: \\n\'${e.message}\'`)}shadowRoot.adoptedStyleSheets=[...shadowRoot.adoptedStyleSheets,stylesheet]}catch(_unused){var styleTag=document.createElement("style");styleTag.innerText=cssRule,shadowRoot.appendChild(styleTag)}!function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)})))}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'json-prune-fetch-response',
                'json-prune-fetch-response.js',
                'ubo-json-prune-fetch-response.js',
                'ubo-json-prune-fetch-response',
            ],
            scriptlet: 'function jsonPruneFetchResponse(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function hit(source){if(source.verbose){try{var trace=console.trace.bind(console),label="[ABY] ";"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}function objectToString(obj){return obj&&"object"==typeof obj?function(obj){return 0===Object.keys(obj).length&&!obj.prototype}(obj)?"{}":Object.entries(obj).map((function(pair){var key=pair[0],value=pair[1],recordValueStr=value;return value instanceof Object&&(recordValueStr=`{ ${objectToString(value)} }`),`${key}:"${recordValueStr}"`})).join(" "):String(obj)}function getPrunePath(props){return"string"==typeof props&&void 0!==props&&""!==props?props.split(/ +/):[]}function toRegExp(rawInput){var input=rawInput||"";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf("/"),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith("/")&&regExpStr.endsWith("/")&&!regExpStr.endsWith("\\\\/")&&function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}}(flagsStr)?flagsStr:"");if(input.startsWith("/")&&input.endsWith("/")||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}function getWildcardPropertyInChain(base,chain){var lookThrough=arguments.length>2&&void 0!==arguments[2]&&arguments[2],output=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],pos=chain.indexOf(".");if(-1===pos){if("*"===chain||"[]"===chain)for(var key in base)Object.prototype.hasOwnProperty.call(base,key)&&output.push({base:base,prop:key});else output.push({base:base,prop:chain});return output}var prop=chain.slice(0,pos);if("[]"===prop&&Array.isArray(base)||"*"===prop&&base instanceof Object){var nextProp=chain.slice(pos+1);Object.keys(base).forEach((function(key){getWildcardPropertyInChain(base[key],nextProp,lookThrough,output)}))}Array.isArray(base)&&base.forEach((function(key){void 0!==key&&getWildcardPropertyInChain(key,chain,lookThrough,output)}));var nextBase=base[prop];return chain=chain.slice(pos+1),void 0!==nextBase&&getWildcardPropertyInChain(nextBase,chain,lookThrough,output),output}function restoreRegExpValues(array){if(array.length)try{var stringPattern="";stringPattern=1===array.length?`(${array[0]})`:array.reduce((function(accumulator,currentValue,currentIndex){return 1===currentIndex?`(${accumulator}),(${currentValue})`:`${accumulator},(${currentValue})`}));var regExpGroup=new RegExp(stringPattern);array.toString().replace(regExpGroup,"")}catch(error){var message=`Failed to restore RegExp values: ${error}`;console.log(message)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,propsToRemove,obligatoryProps){var propsToMatch=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",stack=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if("undefined"!=typeof fetch&&"undefined"!=typeof Proxy&&"undefined"!=typeof Response){var prunePaths=getPrunePath(propsToRemove),requiredPaths=getPrunePath(obligatoryProps),nativeStringify=window.JSON.stringify,nativeRequestClone=window.Request.prototype.clone,nativeResponseClone=window.Response.prototype.clone,nativeFetch=window.fetch,fetchHandler={apply:async function(target,thisArg,args){var originalResponse,clonedResponse,json,fetchData=function(args,nativeRequestClone){var fetchUrl,fetchInit,request,entries,fetchPropsObj={},resource=args[0];if(resource instanceof Request){var realData=nativeRequestClone.call(resource),requestData=(request=realData,entries=["url","method","headers","body","credentials","cache","redirect","referrer","referrerPolicy","integrity","keepalive","signal","mode"].map((function(key){return[key,request[key]]})),Object.fromEntries(entries));fetchUrl=requestData.url,fetchInit=requestData}else fetchUrl=resource,fetchInit=args[1];return fetchPropsObj.url=fetchUrl,fetchInit instanceof Object&&Object.keys(fetchInit).forEach((function(prop){fetchPropsObj[prop]=fetchInit[prop]})),fetchPropsObj}(args,nativeRequestClone);if(!function(source,propsToMatch,requestData){if(""===propsToMatch||"*"===propsToMatch)return!0;var isMatched,PROPS_DIVIDER,PAIRS_MARKER,isRequestProp,propsObj,data,parsedData=(PROPS_DIVIDER=" ",PAIRS_MARKER=":",isRequestProp=function(prop){return["url","method","headers","body","credentials","cache","redirect","referrer","referrerPolicy","integrity","keepalive","signal","mode"].includes(prop)},propsObj={},propsToMatch.split(PROPS_DIVIDER).forEach((function(prop){var dividerInd=prop.indexOf(PAIRS_MARKER),key=prop.slice(0,dividerInd);if(isRequestProp(key)){var value=prop.slice(dividerInd+1);propsObj[key]=value}else propsObj.url=prop})),propsObj);if(data=parsedData,Object.values(data).every((function(value){return function(input){var isValid,FORWARD_SLASH="/",str=function(str){return str.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&")}(input);input[0]===FORWARD_SLASH&&input[input.length-1]===FORWARD_SLASH&&(str=input.slice(1,-1));try{isValid=new RegExp(str),isValid=!0}catch(e){isValid=!1}return isValid}(value)}))){var matchData=function(data){var matchData={};return Object.keys(data).forEach((function(key){matchData[key]=toRegExp(data[key])})),matchData}(parsedData);isMatched=Object.keys(matchData).every((function(matchKey){var matchValue=matchData[matchKey],dataValue=requestData[matchKey];return Object.prototype.hasOwnProperty.call(requestData,matchKey)&&"string"==typeof dataValue&&(null==matchValue?void 0:matchValue.test(dataValue))}))}else logMessage(source,`Invalid parameter: ${propsToMatch}`),isMatched=!1;return isMatched}(source,propsToMatch,fetchData))return Reflect.apply(target,thisArg,args);try{originalResponse=await nativeFetch.apply(null,args),clonedResponse=nativeResponseClone.call(originalResponse)}catch(_unused){return logMessage(source,`Could not make an original fetch request: ${fetchData.url}`),Reflect.apply(target,thisArg,args)}try{json=await originalResponse.json()}catch(e){var message=`Response body can\'t be converted to json: ${objectToString(fetchData)}`;return logMessage(source,message),clonedResponse}var modifiedJson=function(source,root,prunePaths,requiredPaths,stack,nativeObjects){var{nativeStringify:nativeStringify}=nativeObjects;if(0===prunePaths.length&&0===requiredPaths.length)return logMessage(source,`${window.location.hostname}\\n${nativeStringify(root,null,2)}\\nStack trace:\\n${(new Error).stack}`,!0),root&&"object"==typeof root&&logMessage(source,root,!0,!1),root;try{if(!1===function(source,root,prunePaths,requiredPaths,stack,nativeObjects){if(!root)return!1;var shouldProcess,{nativeStringify:nativeStringify}=nativeObjects;if(0===prunePaths.length&&requiredPaths.length>0){var rootString=nativeStringify(root);if(toRegExp(requiredPaths.join("")).test(rootString))return logMessage(source,`${window.location.hostname}\\n${nativeStringify(root,null,2)}\\nStack trace:\\n${(new Error).stack}`,!0),root&&"object"==typeof root&&logMessage(source,root,!0,!1),shouldProcess=!1}if(stack&&!function(stackMatch,stackTrace){if(!stackMatch||""===stackMatch)return!0;var regExpValues=function(){try{for(var arrayOfRegexpValues=[],index=1;index<10;index+=1){var value=`$${index}`;if(!RegExp[value])break;arrayOfRegexpValues.push(RegExp[value])}return arrayOfRegexpValues}catch(error){return[]}}();if(function(stackMatch,stackTrace){var INLINE_SCRIPT_STRING="inlineScript",INJECTED_SCRIPT_STRING="injectedScript",INJECTED_SCRIPT_MARKER="<anonymous>",isInlineScript=function(match){return match.includes(INLINE_SCRIPT_STRING)},isInjectedScript=function(match){return match.includes(INJECTED_SCRIPT_STRING)};if(!isInlineScript(stackMatch)&&!isInjectedScript(stackMatch))return!1;var documentURL=window.location.href,pos=documentURL.indexOf("#");-1!==pos&&(documentURL=documentURL.slice(0,pos));var stackLines=stackTrace.split("\\n").slice(2).map((function(line){return line.trim()})).map((function(line){var stack,getStackTraceValues=/(.*?@)?(\\S+)(:\\d+)(:\\d+)\\)?$/.exec(line);if(getStackTraceValues){var _stackURL,_stackURL2,stackURL=getStackTraceValues[2],stackLine=getStackTraceValues[3],stackCol=getStackTraceValues[4];if(null!==(_stackURL=stackURL)&&void 0!==_stackURL&&_stackURL.startsWith("(")&&(stackURL=stackURL.slice(1)),null!==(_stackURL2=stackURL)&&void 0!==_stackURL2&&_stackURL2.startsWith(INJECTED_SCRIPT_MARKER)){var _stackFunction;stackURL=INJECTED_SCRIPT_STRING;var stackFunction=void 0!==getStackTraceValues[1]?getStackTraceValues[1].slice(0,-1):line.slice(0,getStackTraceValues.index).trim();null!==(_stackFunction=stackFunction)&&void 0!==_stackFunction&&_stackFunction.startsWith("at")&&(stackFunction=stackFunction.slice(2).trim()),stack=`${stackFunction} ${stackURL}${stackLine}${stackCol}`.trim()}else stack=stackURL===documentURL?`${INLINE_SCRIPT_STRING}${stackLine}${stackCol}`.trim():`${stackURL}${stackLine}${stackCol}`.trim()}else stack=line;return stack}));if(stackLines)for(var index=0;index<stackLines.length;index+=1){if(isInlineScript(stackMatch)&&stackLines[index].startsWith(INLINE_SCRIPT_STRING)&&stackLines[index].match(toRegExp(stackMatch)))return!0;if(isInjectedScript(stackMatch)&&stackLines[index].startsWith(INJECTED_SCRIPT_STRING)&&stackLines[index].match(toRegExp(stackMatch)))return!0}return!1}(stackMatch,stackTrace))return regExpValues.length&&regExpValues[0]!==RegExp.$1&&restoreRegExpValues(regExpValues),!0;var stackRegexp=toRegExp(stackMatch),refinedStackTrace=stackTrace.split("\\n").slice(2).map((function(line){return line.trim()})).join("\\n");return regExpValues.length&&regExpValues[0]!==RegExp.$1&&restoreRegExpValues(regExpValues),function(){var descriptor=Object.getOwnPropertyDescriptor(RegExp.prototype,"test"),nativeRegexTest=null==descriptor?void 0:descriptor.value;if(descriptor&&"function"==typeof descriptor.value)return nativeRegexTest;throw new Error("RegExp.prototype.test is not a function")}().call(stackRegexp,refinedStackTrace)}(stack,(new Error).stack||""))return shouldProcess=!1;for(var _ret,wildcardSymbols=[".*.","*.",".*",".[].","[].",".[]"],_loop=function(){var requiredPath=requiredPaths[i],lastNestedPropName=requiredPath.split(".").pop(),hasWildcard=wildcardSymbols.some((function(symbol){return requiredPath.includes(symbol)})),details=getWildcardPropertyInChain(root,requiredPath,hasWildcard);if(!details.length)return{v:shouldProcess=!1};shouldProcess=!hasWildcard;for(var j=0;j<details.length;j+=1){var hasRequiredProp="string"==typeof lastNestedPropName&&void 0!==details[j].base[lastNestedPropName];shouldProcess=hasWildcard?hasRequiredProp||shouldProcess:hasRequiredProp&&shouldProcess}},i=0;i<requiredPaths.length;i+=1)if(_ret=_loop())return _ret.v;return shouldProcess}(source,root,prunePaths,requiredPaths,stack,nativeObjects))return root;prunePaths.forEach((function(path){getWildcardPropertyInChain(root,path,!0).forEach((function(ownerObj){void 0!==ownerObj&&ownerObj.base&&(delete ownerObj.base[ownerObj.prop],hit(source))}))}))}catch(e){logMessage(source,e)}return root}(source,json,prunePaths,requiredPaths,stack,{nativeStringify:nativeStringify,nativeRequestClone:nativeRequestClone,nativeResponseClone:nativeResponseClone,nativeFetch:nativeFetch}),forgedResponse=function(response,textContent){var{bodyUsed:bodyUsed,headers:headers,ok:ok,redirected:redirected,status:status,statusText:statusText,type:type,url:url}=response,forgedResponse=new Response(textContent,{status:status,statusText:statusText,headers:headers});return Object.defineProperties(forgedResponse,{url:{value:url},type:{value:type},ok:{value:ok},bodyUsed:{value:bodyUsed},redirected:{value:redirected}}),forgedResponse}(originalResponse,nativeStringify(modifiedJson));return hit(source),forgedResponse}};window.fetch=new Proxy(window.fetch,fetchHandler)}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['json-prune', 'json-prune.js', 'ubo-json-prune.js', 'ubo-json-prune', 'abp-json-prune'],
            scriptlet: 'function jsonPrune(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function matchStackTrace(stackMatch,stackTrace){if(!stackMatch||""===stackMatch)return!0;var regExpValues=function(){try{for(var arrayOfRegexpValues=[],index=1;index<10;index+=1){var value=`$${index}`;if(!RegExp[value])break;arrayOfRegexpValues.push(RegExp[value])}return arrayOfRegexpValues}catch(error){return[]}}();if(function(stackMatch,stackTrace){var INLINE_SCRIPT_STRING="inlineScript",INJECTED_SCRIPT_STRING="injectedScript",INJECTED_SCRIPT_MARKER="<anonymous>",isInlineScript=function(match){return match.includes(INLINE_SCRIPT_STRING)},isInjectedScript=function(match){return match.includes(INJECTED_SCRIPT_STRING)};if(!isInlineScript(stackMatch)&&!isInjectedScript(stackMatch))return!1;var documentURL=window.location.href,pos=documentURL.indexOf("#");-1!==pos&&(documentURL=documentURL.slice(0,pos));var stackSteps=stackTrace.split("\\n").slice(2).map((function(line){return line.trim()})),stackLines=stackSteps.map((function(line){var stack,getStackTraceValues=/(.*?@)?(\\S+)(:\\d+)(:\\d+)\\)?$/.exec(line);if(getStackTraceValues){var _stackURL,_stackURL2,stackURL=getStackTraceValues[2],stackLine=getStackTraceValues[3],stackCol=getStackTraceValues[4];if(null!==(_stackURL=stackURL)&&void 0!==_stackURL&&_stackURL.startsWith("(")&&(stackURL=stackURL.slice(1)),null!==(_stackURL2=stackURL)&&void 0!==_stackURL2&&_stackURL2.startsWith(INJECTED_SCRIPT_MARKER)){var _stackFunction;stackURL=INJECTED_SCRIPT_STRING;var stackFunction=void 0!==getStackTraceValues[1]?getStackTraceValues[1].slice(0,-1):line.slice(0,getStackTraceValues.index).trim();null!==(_stackFunction=stackFunction)&&void 0!==_stackFunction&&_stackFunction.startsWith("at")&&(stackFunction=stackFunction.slice(2).trim()),stack=`${stackFunction} ${stackURL}${stackLine}${stackCol}`.trim()}else stack=stackURL===documentURL?`${INLINE_SCRIPT_STRING}${stackLine}${stackCol}`.trim():`${stackURL}${stackLine}${stackCol}`.trim()}else stack=line;return stack}));if(stackLines)for(var index=0;index<stackLines.length;index+=1){if(isInlineScript(stackMatch)&&stackLines[index].startsWith(INLINE_SCRIPT_STRING)&&stackLines[index].match(toRegExp(stackMatch)))return!0;if(isInjectedScript(stackMatch)&&stackLines[index].startsWith(INJECTED_SCRIPT_STRING)&&stackLines[index].match(toRegExp(stackMatch)))return!0}return!1}(stackMatch,stackTrace))return regExpValues.length&&regExpValues[0]!==RegExp.$1&&restoreRegExpValues(regExpValues),!0;var stackRegexp=toRegExp(stackMatch),refinedStackTrace=stackTrace.split("\\n").slice(2).map((function(line){return line.trim()})).join("\\n");return regExpValues.length&&regExpValues[0]!==RegExp.$1&&restoreRegExpValues(regExpValues),function(){var descriptor=Object.getOwnPropertyDescriptor(RegExp.prototype,"test"),nativeRegexTest=null==descriptor?void 0:descriptor.value;if(descriptor&&"function"==typeof descriptor.value)return nativeRegexTest;throw new Error("RegExp.prototype.test is not a function")}().call(stackRegexp,refinedStackTrace)}function getWildcardPropertyInChain(base,chain){var lookThrough=arguments.length>2&&void 0!==arguments[2]&&arguments[2],output=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],pos=chain.indexOf(".");if(-1===pos){if("*"===chain||"[]"===chain)for(var key in base)Object.prototype.hasOwnProperty.call(base,key)&&output.push({base:base,prop:key});else output.push({base:base,prop:chain});return output}var prop=chain.slice(0,pos);if("[]"===prop&&Array.isArray(base)||"*"===prop&&base instanceof Object){var nextProp=chain.slice(pos+1);Object.keys(base).forEach((function(key){getWildcardPropertyInChain(base[key],nextProp,lookThrough,output)}))}Array.isArray(base)&&base.forEach((function(key){void 0!==key&&getWildcardPropertyInChain(key,chain,lookThrough,output)}));var nextBase=base[prop];return chain=chain.slice(pos+1),void 0!==nextBase&&getWildcardPropertyInChain(nextBase,chain,lookThrough,output),output}function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}function jsonPruner(source,root,prunePaths,requiredPaths,stack,nativeObjects){var{nativeStringify:nativeStringify}=nativeObjects;if(0===prunePaths.length&&0===requiredPaths.length)return logMessage(source,`${window.location.hostname}\\n${nativeStringify(root,null,2)}\\nStack trace:\\n${(new Error).stack}`,!0),root&&"object"==typeof root&&logMessage(source,root,!0,!1),root;try{if(!1===function(source,root,prunePaths,requiredPaths,stack,nativeObjects){if(!root)return!1;var shouldProcess,{nativeStringify:nativeStringify}=nativeObjects;if(0===prunePaths.length&&requiredPaths.length>0){var rootString=nativeStringify(root);if(toRegExp(requiredPaths.join("")).test(rootString))return logMessage(source,`${window.location.hostname}\\n${nativeStringify(root,null,2)}\\nStack trace:\\n${(new Error).stack}`,!0),root&&"object"==typeof root&&logMessage(source,root,!0,!1),shouldProcess=!1}if(stack&&!matchStackTrace(stack,(new Error).stack||""))return shouldProcess=!1;for(var _ret,wildcardSymbols=[".*.","*.",".*",".[].","[].",".[]"],_loop=function(){var requiredPath=requiredPaths[i],lastNestedPropName=requiredPath.split(".").pop(),hasWildcard=wildcardSymbols.some((function(symbol){return requiredPath.includes(symbol)})),details=getWildcardPropertyInChain(root,requiredPath,hasWildcard);if(!details.length)return{v:shouldProcess=!1};shouldProcess=!hasWildcard;for(var j=0;j<details.length;j+=1){var hasRequiredProp="string"==typeof lastNestedPropName&&void 0!==details[j].base[lastNestedPropName];shouldProcess=hasWildcard?hasRequiredProp||shouldProcess:hasRequiredProp&&shouldProcess}},i=0;i<requiredPaths.length;i+=1)if(_ret=_loop())return _ret.v;return shouldProcess}(source,root,prunePaths,requiredPaths,stack,nativeObjects))return root;prunePaths.forEach((function(path){getWildcardPropertyInChain(root,path,!0).forEach((function(ownerObj){void 0!==ownerObj&&ownerObj.base&&(delete ownerObj.base[ownerObj.prop],function(source){if(source.verbose){try{var trace=console.trace.bind(console),label="[ABY] ";"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source))}))}))}catch(e){logMessage(source,e)}return root}function getPrunePath(props){return"string"==typeof props&&void 0!==props&&""!==props?props.split(/ +/):[]}function toRegExp(rawInput){var input=rawInput||"";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf("/"),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith("/")&&regExpStr.endsWith("/")&&!regExpStr.endsWith("\\\\/")&&function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}}(flagsStr)?flagsStr:"");if(input.startsWith("/")&&input.endsWith("/")||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}function restoreRegExpValues(array){if(array.length)try{var stringPattern="";stringPattern=1===array.length?`(${array[0]})`:array.reduce((function(accumulator,currentValue,currentIndex){return 1===currentIndex?`(${accumulator}),(${currentValue})`:`${accumulator},(${currentValue})`}));var regExpGroup=new RegExp(stringPattern);array.toString().replace(regExpGroup,"")}catch(error){var message=`Failed to restore RegExp values: ${error}`;console.log(message)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,propsToRemove,requiredInitialProps){var stack=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",prunePaths=getPrunePath(propsToRemove),requiredPaths=getPrunePath(requiredInitialProps),nativeObjects={nativeStringify:window.JSON.stringify},nativeJSONParse=JSON.parse,jsonParseWrapper=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];var root=nativeJSONParse.apply(JSON,args);return jsonPruner(source,root,prunePaths,requiredPaths,stack,nativeObjects)};jsonParseWrapper.toString=nativeJSONParse.toString.bind(nativeJSONParse),JSON.parse=jsonParseWrapper;var nativeResponseJson=Response.prototype.json;"undefined"!=typeof Response&&(Response.prototype.json=function(){return nativeResponseJson.apply(this).then((function(obj){return jsonPruner(source,obj,prunePaths,requiredPaths,stack,nativeObjects)}))})}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'json-prune-xhr-response',
                'json-prune-xhr-response.js',
                'ubo-json-prune-xhr-response.js',
                'ubo-json-prune-xhr-response',
            ],
            scriptlet: 'function jsonPruneXhrResponse(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function hit(source){if(source.verbose){try{var trace=console.trace.bind(console),label="[ABY] ";"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}function toRegExp(rawInput){var input=rawInput||"";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf("/"),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith("/")&&regExpStr.endsWith("/")&&!regExpStr.endsWith("\\\\/")&&function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}}(flagsStr)?flagsStr:"");if(input.startsWith("/")&&input.endsWith("/")||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}function getPrunePath(props){return"string"==typeof props&&void 0!==props&&""!==props?props.split(/ +/):[]}function getXhrData(method,url,async,user,password){return{method:method,url:url,async:async,user:user,password:password}}function matchStackTrace(stackMatch,stackTrace){if(!stackMatch||""===stackMatch)return!0;var regExpValues=function(){try{for(var arrayOfRegexpValues=[],index=1;index<10;index+=1){var value=`$${index}`;if(!RegExp[value])break;arrayOfRegexpValues.push(RegExp[value])}return arrayOfRegexpValues}catch(error){return[]}}();if(function(stackMatch,stackTrace){var INLINE_SCRIPT_STRING="inlineScript",INJECTED_SCRIPT_STRING="injectedScript",INJECTED_SCRIPT_MARKER="<anonymous>",isInlineScript=function(match){return match.includes(INLINE_SCRIPT_STRING)},isInjectedScript=function(match){return match.includes(INJECTED_SCRIPT_STRING)};if(!isInlineScript(stackMatch)&&!isInjectedScript(stackMatch))return!1;var documentURL=window.location.href,pos=documentURL.indexOf("#");-1!==pos&&(documentURL=documentURL.slice(0,pos));var stackSteps=stackTrace.split("\\n").slice(2).map((function(line){return line.trim()})),stackLines=stackSteps.map((function(line){var stack,getStackTraceValues=/(.*?@)?(\\S+)(:\\d+)(:\\d+)\\)?$/.exec(line);if(getStackTraceValues){var _stackURL,_stackURL2,stackURL=getStackTraceValues[2],stackLine=getStackTraceValues[3],stackCol=getStackTraceValues[4];if(null!==(_stackURL=stackURL)&&void 0!==_stackURL&&_stackURL.startsWith("(")&&(stackURL=stackURL.slice(1)),null!==(_stackURL2=stackURL)&&void 0!==_stackURL2&&_stackURL2.startsWith(INJECTED_SCRIPT_MARKER)){var _stackFunction;stackURL=INJECTED_SCRIPT_STRING;var stackFunction=void 0!==getStackTraceValues[1]?getStackTraceValues[1].slice(0,-1):line.slice(0,getStackTraceValues.index).trim();null!==(_stackFunction=stackFunction)&&void 0!==_stackFunction&&_stackFunction.startsWith("at")&&(stackFunction=stackFunction.slice(2).trim()),stack=`${stackFunction} ${stackURL}${stackLine}${stackCol}`.trim()}else stack=stackURL===documentURL?`${INLINE_SCRIPT_STRING}${stackLine}${stackCol}`.trim():`${stackURL}${stackLine}${stackCol}`.trim()}else stack=line;return stack}));if(stackLines)for(var index=0;index<stackLines.length;index+=1){if(isInlineScript(stackMatch)&&stackLines[index].startsWith(INLINE_SCRIPT_STRING)&&stackLines[index].match(toRegExp(stackMatch)))return!0;if(isInjectedScript(stackMatch)&&stackLines[index].startsWith(INJECTED_SCRIPT_STRING)&&stackLines[index].match(toRegExp(stackMatch)))return!0}return!1}(stackMatch,stackTrace))return regExpValues.length&&regExpValues[0]!==RegExp.$1&&restoreRegExpValues(regExpValues),!0;var stackRegexp=toRegExp(stackMatch),refinedStackTrace=stackTrace.split("\\n").slice(2).map((function(line){return line.trim()})).join("\\n");return regExpValues.length&&regExpValues[0]!==RegExp.$1&&restoreRegExpValues(regExpValues),function(){var descriptor=Object.getOwnPropertyDescriptor(RegExp.prototype,"test"),nativeRegexTest=null==descriptor?void 0:descriptor.value;if(descriptor&&"function"==typeof descriptor.value)return nativeRegexTest;throw new Error("RegExp.prototype.test is not a function")}().call(stackRegexp,refinedStackTrace)}function getWildcardPropertyInChain(base,chain){var lookThrough=arguments.length>2&&void 0!==arguments[2]&&arguments[2],output=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],pos=chain.indexOf(".");if(-1===pos){if("*"===chain||"[]"===chain)for(var key in base)Object.prototype.hasOwnProperty.call(base,key)&&output.push({base:base,prop:key});else output.push({base:base,prop:chain});return output}var prop=chain.slice(0,pos);if("[]"===prop&&Array.isArray(base)||"*"===prop&&base instanceof Object){var nextProp=chain.slice(pos+1);Object.keys(base).forEach((function(key){getWildcardPropertyInChain(base[key],nextProp,lookThrough,output)}))}Array.isArray(base)&&base.forEach((function(key){void 0!==key&&getWildcardPropertyInChain(key,chain,lookThrough,output)}));var nextBase=base[prop];return chain=chain.slice(pos+1),void 0!==nextBase&&getWildcardPropertyInChain(nextBase,chain,lookThrough,output),output}function restoreRegExpValues(array){if(array.length)try{var stringPattern="";stringPattern=1===array.length?`(${array[0]})`:array.reduce((function(accumulator,currentValue,currentIndex){return 1===currentIndex?`(${accumulator}),(${currentValue})`:`${accumulator},(${currentValue})`}));var regExpGroup=new RegExp(stringPattern);array.toString().replace(regExpGroup,"")}catch(error){var message=`Failed to restore RegExp values: ${error}`;console.log(message)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,propsToRemove,obligatoryProps){var propsToMatch=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",stack=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if("undefined"!=typeof Proxy){var xhrData,shouldLog=!propsToRemove&&!obligatoryProps,prunePaths=getPrunePath(propsToRemove),requiredPaths=getPrunePath(obligatoryProps),nativeParse=window.JSON.parse,nativeStringify=window.JSON.stringify,nativeOpen=window.XMLHttpRequest.prototype.open,nativeSend=window.XMLHttpRequest.prototype.send,setRequestHeaderHandler={apply:function(setRequestHeader,thisArgument,argsList){return thisArgument.collectedHeaders.push(argsList),Reflect.apply(setRequestHeader,thisArgument,argsList)}},openHandler={apply:function(target,thisArg,args){return xhrData=getXhrData.apply(null,args),(function(source,propsToMatch,requestData){if(""===propsToMatch||"*"===propsToMatch)return!0;var isMatched,PROPS_DIVIDER,PAIRS_MARKER,isRequestProp,propsObj,data,parsedData=(PROPS_DIVIDER=" ",PAIRS_MARKER=":",isRequestProp=function(prop){return["url","method","headers","body","credentials","cache","redirect","referrer","referrerPolicy","integrity","keepalive","signal","mode"].includes(prop)},propsObj={},propsToMatch.split(PROPS_DIVIDER).forEach((function(prop){var dividerInd=prop.indexOf(PAIRS_MARKER),key=prop.slice(0,dividerInd);if(isRequestProp(key)){var value=prop.slice(dividerInd+1);propsObj[key]=value}else propsObj.url=prop})),propsObj);if(data=parsedData,Object.values(data).every((function(value){return function(input){var isValid,FORWARD_SLASH="/",str=function(str){return str.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&")}(input);input[0]===FORWARD_SLASH&&input[input.length-1]===FORWARD_SLASH&&(str=input.slice(1,-1));try{isValid=new RegExp(str),isValid=!0}catch(e){isValid=!1}return isValid}(value)}))){var matchData=function(data){var matchData={};return Object.keys(data).forEach((function(key){matchData[key]=toRegExp(data[key])})),matchData}(parsedData);isMatched=Object.keys(matchData).every((function(matchKey){var matchValue=matchData[matchKey],dataValue=requestData[matchKey];return Object.prototype.hasOwnProperty.call(requestData,matchKey)&&"string"==typeof dataValue&&(null==matchValue?void 0:matchValue.test(dataValue))}))}else logMessage(source,`Invalid parameter: ${propsToMatch}`),isMatched=!1;return isMatched}(source,propsToMatch,xhrData)||shouldLog)&&(thisArg.xhrShouldBePruned=!0,thisArg.headersReceived=!!thisArg.headersReceived),thisArg.xhrShouldBePruned&&!thisArg.headersReceived&&(thisArg.headersReceived=!0,thisArg.collectedHeaders=[],thisArg.setRequestHeader=new Proxy(thisArg.setRequestHeader,setRequestHeaderHandler)),Reflect.apply(target,thisArg,args)}},sendHandler={apply:function(target,thisArg,args){var stackTrace=(new Error).stack||"";if(!thisArg.xhrShouldBePruned||stack&&!matchStackTrace(stack,stackTrace))return Reflect.apply(target,thisArg,args);var forgedRequest=new XMLHttpRequest;forgedRequest.addEventListener("readystatechange",(function(){if(4===forgedRequest.readyState){var{readyState:readyState,response:response,responseText:responseText,responseURL:responseURL,responseXML:responseXML,status:status,statusText:statusText}=forgedRequest,content=responseText||response;if("string"==typeof content||"object"==typeof content){var modifiedContent;if("string"==typeof content)try{var jsonContent=nativeParse(content);if(shouldLog)logMessage(source,`${window.location.hostname}\\n${nativeStringify(jsonContent,null,2)}\\nStack trace:\\n${stackTrace}`,!0),logMessage(source,jsonContent,!0,!1),modifiedContent=content;else{modifiedContent=function(source,root,prunePaths,requiredPaths,stack,nativeObjects){var{nativeStringify:nativeStringify}=nativeObjects;if(0===prunePaths.length&&0===requiredPaths.length)return logMessage(source,`${window.location.hostname}\\n${nativeStringify(root,null,2)}\\nStack trace:\\n${(new Error).stack}`,!0),root&&"object"==typeof root&&logMessage(source,root,!0,!1),root;try{if(!1===function(source,root,prunePaths,requiredPaths,stack,nativeObjects){if(!root)return!1;var shouldProcess,{nativeStringify:nativeStringify}=nativeObjects;if(0===prunePaths.length&&requiredPaths.length>0){var rootString=nativeStringify(root);if(toRegExp(requiredPaths.join("")).test(rootString))return logMessage(source,`${window.location.hostname}\\n${nativeStringify(root,null,2)}\\nStack trace:\\n${(new Error).stack}`,!0),root&&"object"==typeof root&&logMessage(source,root,!0,!1),shouldProcess=!1}if(stack&&!matchStackTrace(stack,(new Error).stack||""))return shouldProcess=!1;for(var _ret,wildcardSymbols=[".*.","*.",".*",".[].","[].",".[]"],_loop=function(){var requiredPath=requiredPaths[i],lastNestedPropName=requiredPath.split(".").pop(),hasWildcard=wildcardSymbols.some((function(symbol){return requiredPath.includes(symbol)})),details=getWildcardPropertyInChain(root,requiredPath,hasWildcard);if(!details.length)return{v:shouldProcess=!1};shouldProcess=!hasWildcard;for(var j=0;j<details.length;j+=1){var hasRequiredProp="string"==typeof lastNestedPropName&&void 0!==details[j].base[lastNestedPropName];shouldProcess=hasWildcard?hasRequiredProp||shouldProcess:hasRequiredProp&&shouldProcess}},i=0;i<requiredPaths.length;i+=1)if(_ret=_loop())return _ret.v;return shouldProcess}(source,root,prunePaths,requiredPaths,stack,nativeObjects))return root;prunePaths.forEach((function(path){getWildcardPropertyInChain(root,path,!0).forEach((function(ownerObj){void 0!==ownerObj&&ownerObj.base&&(delete ownerObj.base[ownerObj.prop],hit(source))}))}))}catch(e){logMessage(source,e)}return root}(source,jsonContent,prunePaths,requiredPaths,stack="",{nativeStringify:nativeStringify});try{var{responseType:responseType}=thisArg;switch(responseType){case"":case"text":modifiedContent=nativeStringify(modifiedContent);break;case"arraybuffer":modifiedContent=(new TextEncoder).encode(nativeStringify(modifiedContent)).buffer;break;case"blob":modifiedContent=new Blob([nativeStringify(modifiedContent)])}}catch(error){logMessage(source,`Response body cannot be converted to reponse type: \'${content}\'`),modifiedContent=content}}}catch(error){logMessage(source,`Response body cannot be converted to json: \'${content}\'`),modifiedContent=content}Object.defineProperties(thisArg,{readyState:{value:readyState,writable:!1},responseURL:{value:responseURL,writable:!1},responseXML:{value:responseXML,writable:!1},status:{value:status,writable:!1},statusText:{value:statusText,writable:!1},response:{value:modifiedContent,writable:!1},responseText:{value:modifiedContent,writable:!1}}),setTimeout((function(){var stateEvent=new Event("readystatechange");thisArg.dispatchEvent(stateEvent);var loadEvent=new Event("load");thisArg.dispatchEvent(loadEvent);var loadEndEvent=new Event("loadend");thisArg.dispatchEvent(loadEndEvent)}),1),hit(source)}}})),nativeOpen.apply(forgedRequest,[xhrData.method,xhrData.url,Boolean(xhrData.async)]),thisArg.collectedHeaders.forEach((function(header){forgedRequest.setRequestHeader(header[0],header[1])})),thisArg.collectedHeaders=[];try{nativeSend.call(forgedRequest,args)}catch(_unused){return Reflect.apply(target,thisArg,args)}}};XMLHttpRequest.prototype.open=new Proxy(XMLHttpRequest.prototype.open,openHandler),XMLHttpRequest.prototype.send=new Proxy(XMLHttpRequest.prototype.send,sendHandler)}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'log-addEventListener',
                'addEventListener-logger.js',
                'ubo-addEventListener-logger.js',
                'aell.js',
                'ubo-aell.js',
                'ubo-addEventListener-logger',
                'ubo-aell',
            ],
            scriptlet: 'function logAddEventListener(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function convertTypeToString(value){return void 0===value?"undefined":"object"==typeof value?null===value?"null":objectToString(value):String(value)}function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}function objectToString(obj){return obj&&"object"==typeof obj?function(obj){return 0===Object.keys(obj).length&&!obj.prototype}(obj)?"{}":Object.entries(obj).map((function(pair){var key=pair[0],value=pair[1],recordValueStr=value;return value instanceof Object&&(recordValueStr=`{ ${objectToString(value)} }`),`${key}:"${recordValueStr}"`})).join(" "):String(obj)}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){var nativeAddEventListener=window.EventTarget.prototype.addEventListener;function addEventListenerWrapper(type,listener){var _this$constructor;if(function(type){return void 0!==type}(type)&&function(listener){return void 0!==listener&&("function"==typeof listener||"object"==typeof listener&&null!==listener&&"handleEvent"in listener&&"function"==typeof listener.handleEvent)}(listener)){var message=`addEventListener("${type}", ${function(listener){return"function"==typeof listener?listener.toString():listener.handleEvent.toString()}(listener)})`;logMessage(source,message,!0),function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}else{var _message=`Invalid event type or listener passed to addEventListener:\\n        type: ${convertTypeToString(type)}\\n        listener: ${convertTypeToString(listener)}`;logMessage(source,_message,!0)}var context=this;this&&"Window"===(null===(_this$constructor=this.constructor)||void 0===_this$constructor?void 0:_this$constructor.name)&&this!==window&&(context=window);for(var _len=arguments.length,args=new Array(_len>2?_len-2:0),_key=2;_key<_len;_key++)args[_key-2]=arguments[_key];return nativeAddEventListener.apply(context,[type,listener,...args])}var descriptor={configurable:!0,set:function(){},get:function(){return addEventListenerWrapper}};Object.defineProperty(window.EventTarget.prototype,"addEventListener",descriptor),Object.defineProperty(window,"addEventListener",descriptor),Object.defineProperty(document,"addEventListener",descriptor)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['log-eval'],
            scriptlet: 'function logEval(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function hit(source){if(source.verbose){try{var trace=console.trace.bind(console),label="[ABY] ";"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){var nativeEval=window.eval;window.eval=function(str){return hit(source),logMessage(source,`eval("${str}")`,!0),nativeEval(str)};var nativeFunction=window.Function;function FunctionWrapper(){hit(source);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return logMessage(source,`new Function(${args.join(", ")})`,!0),nativeFunction.apply(this,[...args])}FunctionWrapper.prototype=Object.create(nativeFunction.prototype),FunctionWrapper.prototype.constructor=FunctionWrapper,window.Function=FunctionWrapper}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['log', 'abp-log'],
            scriptlet: 'function log(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];console.log(args)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['log-on-stack-trace'],
            scriptlet: 'function logOnStackTrace(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function getPropertyInChain(base,chain){var pos=chain.indexOf(".");if(-1===pos)return{base:base,prop:chain};var prop=chain.slice(0,pos);if(null===base)return{base:base,prop:prop,chain:chain};var obj,nextBase=base[prop];return chain=chain.slice(pos+1),(base instanceof Object||"object"==typeof base)&&(obj=base,0===Object.keys(obj).length&&!obj.prototype)||null===nextBase?{base:base,prop:prop,chain:chain}:void 0!==nextBase?getPropertyInChain(nextBase,chain):(Object.defineProperty(base,prop,{configurable:!0}),{base:base,prop:prop,chain:chain})}function hit(source){if(source.verbose){try{var trace=console.trace.bind(console),label="[ABY] ";"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,property){if(property){var refineStackTrace=function(stackString){var regExpValues=function(){try{for(var arrayOfRegexpValues=[],index=1;index<10;index+=1){var value=`$${index}`;if(!RegExp[value])break;arrayOfRegexpValues.push(RegExp[value])}return arrayOfRegexpValues}catch(error){return[]}}(),logInfoArray=stackString.split("\\n").slice(2).map((function(line){return line.replace(/ {4}at /,"")})).map((function(line){var funcName,funcFullPath,reg=/\\(([^\\)]+)\\)/,regFirefox=/(.*?@)(\\S+)(:\\d+):\\d+\\)?$/;return line.match(reg)?(funcName=line.split(" ").slice(0,-1).join(" "),funcFullPath=line.match(reg)[1]):line.match(regFirefox)?(funcName=line.split("@").slice(0,-1).join(" "),funcFullPath=line.match(regFirefox)[2]):(funcName="function name is not available",funcFullPath=line),[funcName,funcFullPath]})),logInfoObject={};return logInfoArray.forEach((function(pair){logInfoObject[pair[0]]=pair[1]})),regExpValues.length&&regExpValues[0]!==RegExp.$1&&function(array){if(array.length)try{var stringPattern="";stringPattern=1===array.length?`(${array[0]})`:array.reduce((function(accumulator,currentValue,currentIndex){return 1===currentIndex?`(${accumulator}),(${currentValue})`:`${accumulator},(${currentValue})`}));var regExpGroup=new RegExp(stringPattern);array.toString().replace(regExpGroup,"")}catch(error){var message=`Failed to restore RegExp values: ${error}`;console.log(message)}}(regExpValues),logInfoObject},_setChainPropAccess=function(owner,property){var chainInfo=getPropertyInChain(owner,property),{base:base}=chainInfo,{prop:prop,chain:chain}=chainInfo;if(chain)Object.defineProperty(owner,prop,{get:function(){return base},set:function(a){base=a,a instanceof Object&&_setChainPropAccess(a,chain)}});else{var value=base[prop];!function(object,property,descriptor){var currentDescriptor=Object.getOwnPropertyDescriptor(object,property);if(currentDescriptor&&!currentDescriptor.configurable)return!1;Object.defineProperty(object,property,descriptor)}(base,prop,{get:()=>(hit(source),logMessage(source,`Get ${prop}`,!0),console.table(refineStackTrace((new Error).stack)),value),set(newValue){hit(source),logMessage(source,`Set ${prop}`,!0),console.table(refineStackTrace((new Error).stack)),value=newValue}})}};_setChainPropAccess(window,property)}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['m3u-prune', 'm3u-prune.js', 'ubo-m3u-prune.js', 'ubo-m3u-prune'],
            scriptlet: 'function m3uPrune(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function hit(source){if(source.verbose){try{var trace=console.trace.bind(console),label="[ABY] ";"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}function toRegExp(rawInput){var input=rawInput||"";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf("/"),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith("/")&&regExpStr.endsWith("/")&&!regExpStr.endsWith("\\\\/")&&function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}}(flagsStr)?flagsStr:"");if(input.startsWith("/")&&input.endsWith("/")||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}function getXhrData(method,url,async,user,password){return{method:method,url:url,async:async,user:user,password:password}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,propsToRemove){var urlToMatch=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if("undefined"!=typeof Reflect&&"undefined"!=typeof fetch&&"undefined"!=typeof Proxy&&"undefined"!=typeof Response){var xhrData,shouldPruneResponse=!1,shouldLogContent="true"===(arguments.length>3&&void 0!==arguments[3]&&arguments[3]),urlMatchRegexp=toRegExp(urlToMatch),AD_MARKER_ASSET="#EXT-X-ASSET:",AD_MARKER_CUE="#EXT-X-CUE:",AD_MARKER_CUE_IN="#EXT-X-CUE-IN",AD_MARKER_DISCONTINUITY="#EXT-X-DISCONTINUITY",AD_MARKER_EXTINF="#EXTINF",AD_MARKER_EXTM3U="#EXTM3U",AD_MARKER_SCTE35="#EXT-X-SCTE35:",COMCAST_AD_MARKER_AD="-AD-",COMCAST_AD_MARKER_VAST="-VAST-",COMCAST_AD_MARKER_VMAP_AD="-VMAP-AD-",COMCAST_AD_MARKER_VMAP_AD_BREAK="#EXT-X-VMAP-AD-BREAK:",TAGS_ALLOWLIST=["#EXT-X-TARGETDURATION","#EXT-X-MEDIA-SEQUENCE","#EXT-X-DISCONTINUITY-SEQUENCE","#EXT-X-ENDLIST","#EXT-X-PLAYLIST-TYPE","#EXT-X-I-FRAMES-ONLY","#EXT-X-MEDIA","#EXT-X-STREAM-INF","#EXT-X-I-FRAME-STREAM-INF","#EXT-X-SESSION-DATA","#EXT-X-SESSION-KEY","#EXT-X-INDEPENDENT-SEGMENTS","#EXT-X-START"],isAllowedTag=function(str){return TAGS_ALLOWLIST.some((function(el){return str.startsWith(el)}))},_pruneExtinfFromVmapBlock=function(lines,i){var array=lines.slice(),index=i;if(array[index].includes(AD_MARKER_EXTINF)&&(array[index]=void 0,array[index+=1].includes(AD_MARKER_DISCONTINUITY))){array[index]=void 0;var prunedExtinf=_pruneExtinfFromVmapBlock(array,index+=1);array=prunedExtinf.array,index=prunedExtinf.index}return{array:array,index:index}},removeM3ULineRegexp=toRegExp(propsToRemove),isM3U=function(text){if("string"==typeof text){var trimmedText=text.trim();return trimmedText.startsWith(AD_MARKER_EXTM3U)||trimmedText.startsWith(COMCAST_AD_MARKER_VMAP_AD_BREAK)}return!1},isPruningNeeded=function(text,regexp){return isM3U(text)&&regexp.test(text)},pruneM3U=function(text){shouldLogContent&&logMessage(source,`Original M3U content:\\n${text}`);var lines=text.split(/\\r?\\n/);return text.includes(COMCAST_AD_MARKER_VMAP_AD_BREAK)?(lines=(lines=function(lines){for(var array=lines.slice(),i=0;i<array.length-1;i+=1)if((array[i].includes(COMCAST_AD_MARKER_VMAP_AD)||array[i].includes(COMCAST_AD_MARKER_VAST)||array[i].includes(COMCAST_AD_MARKER_AD))&&(array[i]=void 0,array[i+1].includes(AD_MARKER_EXTINF))){var prunedExtinf=_pruneExtinfFromVmapBlock(array,i+=1);array=prunedExtinf.array,i=prunedExtinf.index-1}return array}(lines)).filter((function(l){return!!l})).join("\\n"),shouldLogContent&&logMessage(source,`Modified M3U content:\\n${lines}`),lines):(lines=(lines=function(lines){for(var i=0;i<lines.length-1;i+=1){var _lines$i;if(null!==(_lines$i=lines[i])&&void 0!==_lines$i&&_lines$i.startsWith("#")&&removeM3ULineRegexp.test(lines[i])){var segmentName=lines[i].substring(0,lines[i].indexOf(":"));if(!segmentName)return lines;lines[i]=void 0;for(var j=i+=1;j<lines.length;j+=1){if(lines[j].includes(segmentName)||isAllowedTag(lines[j])){i=j-1;break}lines[j]=void 0}}}return lines}(lines)).map((function(line,index,array){return void 0===line||(line=function(line,index,array){return line.startsWith(AD_MARKER_CUE)?(line=void 0,array[index+=1].startsWith(AD_MARKER_ASSET)&&(array[index]=void 0,index+=1),array[index].startsWith(AD_MARKER_SCTE35)&&(array[index]=void 0,index+=1),array[index].startsWith(AD_MARKER_CUE_IN)&&(array[index]=void 0,index+=1),array[index].startsWith(AD_MARKER_SCTE35)&&(array[index]=void 0),line):line}(line,index,array),void 0!==line&&(line=function(line,index,array){return line.startsWith(AD_MARKER_EXTINF)&&removeM3ULineRegexp.test(array[index+1])?(isAllowedTag(array[index])||(array[index]=void 0),isAllowedTag(array[index+=1])||(array[index]=void 0),array[index+=1].startsWith(AD_MARKER_DISCONTINUITY)&&(array[index]=void 0),line):line}(line,index,array))),line})).filter((function(l){return!!l})).join("\\n"),shouldLogContent&&logMessage(source,`Modified M3U content:\\n${lines}`),lines)},nativeOpen=window.XMLHttpRequest.prototype.open,nativeSend=window.XMLHttpRequest.prototype.send,openHandler={apply:function(target,thisArg,args){if(xhrData=getXhrData.apply(null,args),function(source,propsToMatch,requestData){if(""===propsToMatch||"*"===propsToMatch)return!0;var isMatched,PROPS_DIVIDER,PAIRS_MARKER,isRequestProp,propsObj,data,parsedData=(PROPS_DIVIDER=" ",PAIRS_MARKER=":",isRequestProp=function(prop){return["url","method","headers","body","credentials","cache","redirect","referrer","referrerPolicy","integrity","keepalive","signal","mode"].includes(prop)},propsObj={},propsToMatch.split(PROPS_DIVIDER).forEach((function(prop){var dividerInd=prop.indexOf(PAIRS_MARKER),key=prop.slice(0,dividerInd);if(isRequestProp(key)){var value=prop.slice(dividerInd+1);propsObj[key]=value}else propsObj.url=prop})),propsObj);if(data=parsedData,Object.values(data).every((function(value){return function(input){var isValid,FORWARD_SLASH="/",str=function(str){return str.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&")}(input);input[0]===FORWARD_SLASH&&input[input.length-1]===FORWARD_SLASH&&(str=input.slice(1,-1));try{isValid=new RegExp(str),isValid=!0}catch(e){isValid=!1}return isValid}(value)}))){var matchData=function(data){var matchData={};return Object.keys(data).forEach((function(key){matchData[key]=toRegExp(data[key])})),matchData}(parsedData);isMatched=Object.keys(matchData).every((function(matchKey){var matchValue=matchData[matchKey],dataValue=requestData[matchKey];return Object.prototype.hasOwnProperty.call(requestData,matchKey)&&"string"==typeof dataValue&&(null==matchValue?void 0:matchValue.test(dataValue))}))}else logMessage(source,`Invalid parameter: ${propsToMatch}`),isMatched=!1;return isMatched}(source,urlToMatch,xhrData)&&(thisArg.shouldBePruned=!0),thisArg.shouldBePruned){thisArg.collectedHeaders=[];var setRequestHeaderHandler={apply:function(target,thisArg,args){return thisArg.collectedHeaders.push(args),Reflect.apply(target,thisArg,args)}};thisArg.setRequestHeader=new Proxy(thisArg.setRequestHeader,setRequestHeaderHandler)}return Reflect.apply(target,thisArg,args)}},sendHandler={apply:function(target,thisArg,args){if(!thisArg.shouldBePruned||!["","text"].includes(thisArg.responseType))return Reflect.apply(target,thisArg,args);var forgedRequest=new XMLHttpRequest;forgedRequest.addEventListener("readystatechange",(function(){if(4===forgedRequest.readyState){var{readyState:readyState,response:response,responseText:responseText,responseURL:responseURL,responseXML:responseXML,status:status,statusText:statusText}=forgedRequest;if("string"==typeof(responseText||response)){propsToRemove?shouldPruneResponse=isPruningNeeded(response,removeM3ULineRegexp):isM3U(response)&&logMessage(source,`XMLHttpRequest.open() URL: ${responseURL}\\nresponse: ${response}`);var responseContent=shouldPruneResponse?pruneM3U(response):response;Object.defineProperties(thisArg,{readyState:{value:readyState,writable:!1},responseURL:{value:responseURL,writable:!1},responseXML:{value:responseXML,writable:!1},status:{value:status,writable:!1},statusText:{value:statusText,writable:!1},response:{value:responseContent,writable:!1},responseText:{value:responseContent,writable:!1}}),setTimeout((function(){var stateEvent=new Event("readystatechange");thisArg.dispatchEvent(stateEvent);var loadEvent=new Event("load");thisArg.dispatchEvent(loadEvent);var loadEndEvent=new Event("loadend");thisArg.dispatchEvent(loadEndEvent)}),1),hit(source)}}})),nativeOpen.apply(forgedRequest,[xhrData.method,xhrData.url]),thisArg.collectedHeaders.forEach((function(header){var name=header[0],value=header[1];forgedRequest.setRequestHeader(name,value)})),thisArg.collectedHeaders=[];try{nativeSend.call(forgedRequest,args)}catch(_unused){return Reflect.apply(target,thisArg,args)}}};XMLHttpRequest.prototype.open=new Proxy(XMLHttpRequest.prototype.open,openHandler),XMLHttpRequest.prototype.send=new Proxy(XMLHttpRequest.prototype.send,sendHandler);var nativeFetch=window.fetch,fetchHandler={apply:async function(target,thisArg,args){var fetchURL=args[0]instanceof Request?args[0].url:args[0];if("string"!=typeof fetchURL||0===fetchURL.length)return Reflect.apply(target,thisArg,args);if(urlMatchRegexp.test(fetchURL)){var response=await nativeFetch(...args),clonedResponse=response.clone(),responseText=await response.text();if(!propsToRemove&&isM3U(responseText))return logMessage(source,`fetch URL: ${fetchURL}\\nresponse text: ${responseText}`),clonedResponse;if(isPruningNeeded(responseText,removeM3ULineRegexp)){var prunedText=pruneM3U(responseText);return hit(source),new Response(prunedText,{status:response.status,statusText:response.statusText,headers:response.headers})}return clonedResponse}return Reflect.apply(target,thisArg,args)}};window.fetch=new Proxy(window.fetch,fetchHandler)}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['metrika-yandex-tag'],
            scriptlet: 'function metrikaYandexTag(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function noopFunc(){}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){var asyncCallbackFromOptions=function(id,param){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{callback:callback}=options,{ctx:ctx}=options;"function"==typeof callback&&(callback=void 0!==ctx?callback.bind(ctx):callback,setTimeout((function(){return callback()})))},api={addFileExtension:noopFunc,extLink:asyncCallbackFromOptions,file:asyncCallbackFromOptions,getClientID:function(id,cb){cb&&setTimeout(cb(null))},hit:asyncCallbackFromOptions,notBounce:asyncCallbackFromOptions,params:noopFunc,reachGoal:function(id,target,params,callback,ctx){asyncCallbackFromOptions(null,null,{callback:callback,ctx:ctx})},setUserID:noopFunc,userParams:noopFunc,destruct:noopFunc};function init(id){window[`yaCounter${id}`]=api,document.dispatchEvent(new Event(`yacounter${id}inited`))}function ym(id,funcName){if("init"===funcName)return init(id);for(var _len=arguments.length,args=new Array(_len>2?_len-2:0),_key=2;_key<_len;_key++)args[_key-2]=arguments[_key];return api[funcName]&&api[funcName](id,...args)}void 0===window.ym?(window.ym=ym,ym.a=[]):window.ym&&window.ym.a&&(ym.a=window.ym.a,window.ym=ym,window.ym.a.forEach((function(params){init(params[0])}))),function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['metrika-yandex-watch'],
            scriptlet: 'function metrikaYandexWatch(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function noopFunc(){}function noopArray(){return[]}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){var cbName="yandex_metrika_callbacks",asyncCallbackFromOptions=function(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{callback:callback}=options,{ctx:ctx}=options;"function"==typeof callback&&(callback=void 0!==ctx?callback.bind(ctx):callback,setTimeout((function(){return callback()})))};function Metrika(){}Metrika.counters=noopArray,Metrika.prototype.addFileExtension=noopFunc,Metrika.prototype.getClientID=noopFunc,Metrika.prototype.setUserID=noopFunc,Metrika.prototype.userParams=noopFunc,Metrika.prototype.params=noopFunc,Metrika.prototype.counters=noopArray,Metrika.prototype.extLink=function(url,options){asyncCallbackFromOptions(options)},Metrika.prototype.file=function(url,options){asyncCallbackFromOptions(options)},Metrika.prototype.hit=function(url,options){asyncCallbackFromOptions(options)},Metrika.prototype.reachGoal=function(target,params,cb,ctx){asyncCallbackFromOptions({callback:cb,ctx:ctx})},Metrika.prototype.notBounce=asyncCallbackFromOptions,window.Ya?window.Ya.Metrika=Metrika:window.Ya={Metrika:Metrika},window[cbName]&&Array.isArray(window[cbName])&&window[cbName].forEach((function(func){"function"==typeof func&&func()})),function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['no-protected-audience'],
            scriptlet: 'function noProtectedAudience(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function noopStr(){return""}function noopFunc(){}function noopResolveVoid(){return Promise.resolve(void 0)}function noopResolveNull(){return Promise.resolve(null)}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){if(Document instanceof Object!=0){for(var protectedAudienceMethods={joinAdInterestGroup:noopResolveVoid,runAdAuction:noopResolveNull,leaveAdInterestGroup:noopResolveVoid,clearOriginJoinedAdInterestGroups:noopResolveVoid,createAuctionNonce:noopStr,updateAdInterestGroups:noopFunc},_i=0,_Object$keys=Object.keys(protectedAudienceMethods);_i<_Object$keys.length;_i++){var methodName=_Object$keys[_i],prototype=Navigator.prototype;Object.prototype.hasOwnProperty.call(prototype,methodName)&&prototype[methodName]instanceof Function!=0&&(prototype[methodName]=protectedAudienceMethods[methodName])}!function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['no-topics'],
            scriptlet: 'function noTopics(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){Document instanceof Object!=0&&Object.prototype.hasOwnProperty.call(Document.prototype,"browsingTopics")&&Document.prototype.browsingTopics instanceof Function!=0&&(Document.prototype.browsingTopics=function(){return function(){var responseUrl=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",responseType=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"basic";if("undefined"!=typeof Response){var response=new Response(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"{}",{status:200,statusText:"OK"});return"opaque"===responseType?Object.defineProperties(response,{body:{value:null},status:{value:0},ok:{value:!1},statusText:{value:""},url:{value:""},type:{value:responseType}}):Object.defineProperties(response,{url:{value:responseUrl},type:{value:responseType}}),Promise.resolve(response)}}("[]")},function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source))}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'noeval',
                'noeval.js',
                'silent-noeval.js',
                'ubo-noeval.js',
                'ubo-silent-noeval.js',
                'ubo-noeval',
                'ubo-silent-noeval',
            ],
            scriptlet: 'function noeval(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){window.eval=function(s){!function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source),function(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}(source,`ABY has prevented eval:\\n${s}`,!0)}.bind()}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['nowebrtc', 'nowebrtc.js', 'ubo-nowebrtc.js', 'ubo-nowebrtc'],
            scriptlet: 'function nowebrtc(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function noopFunc(){}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){var propertyName="";if(window.RTCPeerConnection?propertyName="RTCPeerConnection":window.webkitRTCPeerConnection&&(propertyName="webkitRTCPeerConnection"),""!==propertyName){var rtcReplacement=function(config){var message=`Document tried to create an RTCPeerConnection: ${function(config){var str="undefined";if(null===config)str="null";else if(config instanceof Object){var SERVERS_PROP_NAME="iceServers",URLS_PROP_NAME="urls";Object.prototype.hasOwnProperty.call(config,SERVERS_PROP_NAME)&&config[SERVERS_PROP_NAME]&&Object.prototype.hasOwnProperty.call(config[SERVERS_PROP_NAME][0],URLS_PROP_NAME)&&config[SERVERS_PROP_NAME][0][URLS_PROP_NAME]&&(str=config[SERVERS_PROP_NAME][0][URLS_PROP_NAME].toString())}return str}(config)}`;!function(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}(source,message),function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)};rtcReplacement.prototype={close:noopFunc,createDataChannel:noopFunc,createOffer:noopFunc,setRemoteDescription:noopFunc};var rtc=window[propertyName];window[propertyName]=rtcReplacement,rtc.prototype&&(rtc.prototype.createDataChannel=function(a,b){return{close:noopFunc,send:noopFunc}}.bind(null))}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'prevent-addEventListener',
                'addEventListener-defuser.js',
                'ubo-addEventListener-defuser.js',
                'aeld.js',
                'ubo-aeld.js',
                'ubo-addEventListener-defuser',
                'ubo-aeld',
                'abp-prevent-listener',
            ],
            scriptlet: 'function preventAddEventListener(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function toRegExp(rawInput){var input=rawInput||"";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf("/"),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith("/")&&regExpStr.endsWith("/")&&!regExpStr.endsWith("\\\\/")&&function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}}(flagsStr)?flagsStr:"");if(input.startsWith("/")&&input.endsWith("/")||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,typeSearch,listenerSearch){var typeSearchRegexp=toRegExp(typeSearch),listenerSearchRegexp=toRegExp(listenerSearch),nativeAddEventListener=window.EventTarget.prototype.addEventListener;function addEventListenerWrapper(type,listener){var _this$constructor,shouldPrevent=!1;if(function(type){return void 0!==type}(type)&&function(listener){return void 0!==listener&&("function"==typeof listener||"object"==typeof listener&&null!==listener&&"handleEvent"in listener&&"function"==typeof listener.handleEvent)}(listener)&&(shouldPrevent=typeSearchRegexp.test(type.toString())&&listenerSearchRegexp.test(function(listener){return"function"==typeof listener?listener.toString():listener.handleEvent.toString()}(listener))),!shouldPrevent){var context=this;this&&"Window"===(null===(_this$constructor=this.constructor)||void 0===_this$constructor?void 0:_this$constructor.name)&&this!==window&&(context=window);for(var _len=arguments.length,args=new Array(_len>2?_len-2:0),_key=2;_key<_len;_key++)args[_key-2]=arguments[_key];return nativeAddEventListener.apply(context,[type,listener,...args])}!function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}var descriptor={configurable:!0,set:function(){},get:function(){return addEventListenerWrapper}};Object.defineProperty(window.EventTarget.prototype,"addEventListener",descriptor),Object.defineProperty(window,"addEventListener",descriptor),Object.defineProperty(document,"addEventListener",descriptor)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['prevent-adfly'],
            scriptlet: 'function preventAdfly(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){var val,isDigit=function(data){return/^\\d$/.test(data)},applyHandler=!0;object=window,property="ysmm",descriptor={configurable:!1,set:function(value){if(applyHandler){applyHandler=!1;try{"string"==typeof value&&function(encodedURL){for(var evenChars="",oddChars="",i=0;i<encodedURL.length;i+=1)i%2==0?evenChars+=encodedURL.charAt(i):oddChars=encodedURL.charAt(i)+oddChars;for(var data=(evenChars+oddChars).split(""),_i=0;_i<data.length;_i+=1)if(isDigit(data[_i]))for(var ii=_i+1;ii<data.length;ii+=1)if(isDigit(data[ii])){var temp=parseInt(data[_i],10)^parseInt(data[ii],10);temp<10&&(data[_i]=temp.toString()),_i=ii;break}data=data.join("");var decodedURL=window.atob(data).slice(16,-16);window.stop&&window.stop(),window.onbeforeunload=null,window.location.href=decodedURL}(value)}catch(err){}}val=value},get:function(){return val}},currentDescriptor=Object.getOwnPropertyDescriptor(object,property),currentDescriptor&&!currentDescriptor.configurable||(Object.defineProperty(object,property,descriptor),0)?function(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}(source,"Failed to set up prevent-adfly scriptlet"):function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source);var object,property,descriptor,currentDescriptor}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['prevent-bab'],
            scriptlet: 'function preventBab(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function hit(source){if(source.verbose){try{var trace=console.trace.bind(console),label="[ABY] ";"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){var nativeSetTimeout=window.setTimeout,babRegex=/\\.bab_elementid.$/;window.setTimeout=function(callback){if("string"!=typeof callback||!babRegex.test(callback)){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];return nativeSetTimeout.apply(window,[callback,...args])}hit(source)};var signatures=[["blockadblock"],["babasbm"],[/getItem\\(\'babn\'\\)/],["getElementById","String.fromCharCode","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789","charAt","DOMContentLoaded","AdBlock","addEventListener","doScroll","fromCharCode","<<2|r>>4","sessionStorage","clientWidth","localStorage","Math","random"]],nativeEval=window.eval;window.eval=function(str){if(!function(str){if("string"!=typeof str)return!1;for(var i=0;i<signatures.length;i+=1){for(var tokens=signatures[i],match=0,j=0;j<tokens.length;j+=1){var token=tokens[j];(token instanceof RegExp?token.test(str):str.includes(token))&&(match+=1)}if(match/tokens.length>=.8)return!0}return!1}(str))return nativeEval(str);hit(source);var bodyEl=document.body;bodyEl&&bodyEl.style.removeProperty("visibility");var el=document.getElementById("babasbmsgx");el&&el.parentNode.removeChild(el)}.bind(window)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['prevent-canvas', 'prevent-canvas.js', 'ubo-prevent-canvas.js', 'ubo-prevent-canvas'],
            scriptlet: 'function preventCanvas(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,contextType){var canvasHandler={apply:function(target,thisArg,argumentsList){var match,INVERT_MARKER,str,type=argumentsList[0],shouldPrevent=!1;if(contextType)if(INVERT_MARKER="!",str=match=contextType,null!=match&&match.startsWith(INVERT_MARKER)&&(str=match.slice(1)),function(input){var isValid,FORWARD_SLASH="/",str=function(str){return str.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&")}(input);input[0]===FORWARD_SLASH&&input[input.length-1]===FORWARD_SLASH&&(str=input.slice(1,-1));try{isValid=new RegExp(str),isValid=!0}catch(e){isValid=!1}return isValid}(str)){var{isInvertedMatch:isInvertedMatch,matchRegexp:matchRegexp}=function(match){var INVERT_MARKER="!",isInvertedMatch=!!match&&(null==match?void 0:match.startsWith(INVERT_MARKER)),matchValue=isInvertedMatch?match.slice(1):match,matchRegexp=function(rawInput){var input=rawInput||"",FORWARD_SLASH="/";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf(FORWARD_SLASH),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),isValidRegExpFlag=function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}},flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith(FORWARD_SLASH)&&regExpStr.endsWith(FORWARD_SLASH)&&!regExpStr.endsWith("\\\\/")&&isValidRegExpFlag(flagsStr)?flagsStr:"");if(input.startsWith(FORWARD_SLASH)&&input.endsWith(FORWARD_SLASH)||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}(matchValue);return{isInvertedMatch:isInvertedMatch,matchRegexp:matchRegexp,matchValue:matchValue}}(contextType);shouldPrevent=matchRegexp.test(type)!==isInvertedMatch}else!function(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}(source,`Invalid contextType parameter: ${contextType}`),shouldPrevent=!1;else shouldPrevent=!0;return shouldPrevent?(function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source),null):Reflect.apply(target,thisArg,argumentsList)}};window.HTMLCanvasElement.prototype.getContext=new Proxy(window.HTMLCanvasElement.prototype.getContext,canvasHandler)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['prevent-element-src-loading'],
            scriptlet: 'function preventElementSrcLoading(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function hit(source){if(source.verbose){try{var trace=console.trace.bind(console),label="[ABY] ";"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}function safeGetDescriptor(obj,prop){var descriptor=Object.getOwnPropertyDescriptor(obj,prop);return descriptor&&descriptor.configurable?descriptor:null}function noopFunc(){}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,tagName,match){if("undefined"!=typeof Proxy&&"undefined"!=typeof Reflect){var instance,policy,srcMockData={script:"data:text/javascript;base64,KCk9Pnt9",img:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",iframe:"data:text/html;base64, PGRpdj48L2Rpdj4=",link:"data:text/plain;base64,"};if("script"===tagName)instance=HTMLScriptElement;else if("img"===tagName)instance=HTMLImageElement;else if("iframe"===tagName)instance=HTMLIFrameElement;else{if("link"!==tagName)return;instance=HTMLLinkElement}window.trustedTypes&&"function"==typeof window.trustedTypes.createPolicy&&(policy=window.trustedTypes.createPolicy("AGPolicy",{createScriptURL:function(arg){return arg}}));var SOURCE_PROPERTY_NAME="link"===tagName?"href":"src",searchRegexp=function(rawInput){var input=rawInput||"",FORWARD_SLASH="/";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf(FORWARD_SLASH),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),isValidRegExpFlag=function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}},flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith(FORWARD_SLASH)&&regExpStr.endsWith(FORWARD_SLASH)&&!regExpStr.endsWith("\\\\/")&&isValidRegExpFlag(flagsStr)?flagsStr:"");if(input.startsWith(FORWARD_SLASH)&&input.endsWith(FORWARD_SLASH)||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}(match),setMatchedAttribute=function(elem){return elem.setAttribute(source.name,"matched")},setAttributeHandler={apply:function(target,thisArg,args){if(!args[0]||!args[1])return Reflect.apply(target,thisArg,args);var nodeName=thisArg.nodeName.toLowerCase(),attrName=args[0].toLowerCase(),attrValue=args[1];return attrName===SOURCE_PROPERTY_NAME&&tagName.toLowerCase()===nodeName&&srcMockData[nodeName]&&searchRegexp.test(attrValue)?(hit(source),setMatchedAttribute(thisArg),Reflect.apply(target,thisArg,[attrName,srcMockData[nodeName]])):Reflect.apply(target,thisArg,args)}};instance.prototype.setAttribute=new Proxy(Element.prototype.setAttribute,setAttributeHandler);var origSrcDescriptor=safeGetDescriptor(instance.prototype,SOURCE_PROPERTY_NAME);if(origSrcDescriptor){Object.defineProperty(instance.prototype,SOURCE_PROPERTY_NAME,{enumerable:!0,configurable:!0,get(){return origSrcDescriptor.get.call(this)},set(urlValue){var nodeName=this.nodeName.toLowerCase();if(tagName.toLowerCase()!==nodeName||!srcMockData[nodeName]||!searchRegexp.test(urlValue))return origSrcDescriptor.set.call(this,urlValue),!0;if(policy&&urlValue instanceof TrustedScriptURL){var trustedSrc=policy.createScriptURL(urlValue);return origSrcDescriptor.set.call(this,trustedSrc),void hit(source)}setMatchedAttribute(this),origSrcDescriptor.set.call(this,srcMockData[nodeName]),hit(source)}});var origOnerrorDescriptor=safeGetDescriptor(HTMLElement.prototype,"onerror");if(origOnerrorDescriptor){Object.defineProperty(HTMLElement.prototype,"onerror",{enumerable:!0,configurable:!0,get(){return origOnerrorDescriptor.get.call(this)},set(cb){return"matched"===this.getAttribute(source.name)?(origOnerrorDescriptor.set.call(this,noopFunc),!0):(origOnerrorDescriptor.set.call(this,cb),!0)}});var addEventListenerHandler={apply:function(target,thisArg,args){if(!args[0]||!args[1]||!thisArg)return Reflect.apply(target,thisArg,args);var eventName=args[0];return"function"==typeof thisArg.getAttribute&&"matched"===thisArg.getAttribute(source.name)&&"error"===eventName?Reflect.apply(target,thisArg,[eventName,noopFunc]):Reflect.apply(target,thisArg,args)}};EventTarget.prototype.addEventListener=new Proxy(EventTarget.prototype.addEventListener,addEventListenerHandler),function(tagName,src){window.addEventListener("error",(function(event){event.target&&event.target.nodeName&&event.target.nodeName.toLowerCase()===tagName&&event.target.src&&src.test(event.target.src)&&(hit(source),"function"!=typeof event.target.onload?event.target.onerror=noopFunc:event.target.onerror=event.target.onload)}),!0)}(tagName,searchRegexp)}}}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['prevent-eval-if', 'noeval-if.js', 'ubo-noeval-if.js', 'ubo-noeval-if'],
            scriptlet: 'function preventEvalIf(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,search){var searchRegexp=function(rawInput){var input=rawInput||"",FORWARD_SLASH="/";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf(FORWARD_SLASH),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),isValidRegExpFlag=function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}},flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith(FORWARD_SLASH)&&regExpStr.endsWith(FORWARD_SLASH)&&!regExpStr.endsWith("\\\\/")&&isValidRegExpFlag(flagsStr)?flagsStr:"");if(input.startsWith(FORWARD_SLASH)&&input.endsWith(FORWARD_SLASH)||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}(search),nativeEval=window.eval;window.eval=function(payload){if(!searchRegexp.test(payload.toString()))return nativeEval.call(window,payload);!function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}.bind(window)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'prevent-fab-3.2.0',
                'nofab.js',
                'ubo-nofab.js',
                'fuckadblock.js-3.2.0',
                'ubo-fuckadblock.js-3.2.0',
                'ubo-nofab',
            ],
            scriptlet: 'function preventFab(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function noopFunc(){}function noopThis(){return this}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){!function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source);var Fab=function(){};Fab.prototype.check=noopFunc,Fab.prototype.clearEvent=noopFunc,Fab.prototype.emitEvent=noopFunc,Fab.prototype.on=function(a,b){return a||b(),this},Fab.prototype.onDetected=noopThis,Fab.prototype.onNotDetected=function(a){return a(),this},Fab.prototype.setOption=noopFunc,Fab.prototype.options={set:noopFunc,get:noopFunc};var fab=new Fab,getSetFab={get:()=>Fab,set(){}},getsetfab={get:()=>fab,set(){}};Object.prototype.hasOwnProperty.call(window,"FuckAdBlock")?window.FuckAdBlock=Fab:Object.defineProperty(window,"FuckAdBlock",getSetFab),Object.prototype.hasOwnProperty.call(window,"BlockAdBlock")?window.BlockAdBlock=Fab:Object.defineProperty(window,"BlockAdBlock",getSetFab),Object.prototype.hasOwnProperty.call(window,"SniffAdBlock")?window.SniffAdBlock=Fab:Object.defineProperty(window,"SniffAdBlock",getSetFab),Object.prototype.hasOwnProperty.call(window,"fuckAdBlock")?window.fuckAdBlock=fab:Object.defineProperty(window,"fuckAdBlock",getsetfab),Object.prototype.hasOwnProperty.call(window,"blockAdBlock")?window.blockAdBlock=fab:Object.defineProperty(window,"blockAdBlock",getsetfab),Object.prototype.hasOwnProperty.call(window,"sniffAdBlock")?window.sniffAdBlock=fab:Object.defineProperty(window,"sniffAdBlock",getsetfab)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'prevent-fetch',
                'prevent-fetch.js',
                'ubo-prevent-fetch.js',
                'ubo-prevent-fetch',
                'no-fetch-if.js',
                'ubo-no-fetch-if.js',
                'ubo-no-fetch-if',
            ],
            scriptlet: 'function preventFetch(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function hit(source){if(source.verbose){try{var trace=console.trace.bind(console),label="[ABY] ";"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}function objectToString(obj){return obj&&"object"==typeof obj?function(obj){return 0===Object.keys(obj).length&&!obj.prototype}(obj)?"{}":Object.entries(obj).map((function(pair){var key=pair[0],value=pair[1],recordValueStr=value;return value instanceof Object&&(recordValueStr=`{ ${objectToString(value)} }`),`${key}:"${recordValueStr}"`})).join(" "):String(obj)}function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}function noopPromiseResolve(){var responseUrl=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",responseType=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"basic";if("undefined"!=typeof Response){var response=new Response(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"{}",{status:200,statusText:"OK"});return"opaque"===responseType?Object.defineProperties(response,{body:{value:null},status:{value:0},ok:{value:!1},statusText:{value:""},url:{value:""},type:{value:responseType}}):Object.defineProperties(response,{url:{value:responseUrl},type:{value:responseType}}),Promise.resolve(response)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,propsToMatch){var responseBody=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"emptyObj",responseType=arguments.length>3?arguments[3]:void 0;if("undefined"!=typeof fetch&&"undefined"!=typeof Proxy&&"undefined"!=typeof Response){var strResponseBody,nativeRequestClone=Request.prototype.clone;if(""===responseBody||"emptyObj"===responseBody)strResponseBody="{}";else if("emptyArr"===responseBody)strResponseBody="[]";else{if("emptyStr"!==responseBody)return void logMessage(source,`Invalid responseBody parameter: \'${responseBody}\'`);strResponseBody=""}if(void 0===responseType||function(responseType){return["basic","cors","opaque"].includes(responseType)}(responseType)){var fetchHandler={apply:async function(target,thisArg,args){var shouldPrevent,fetchData=function(args,nativeRequestClone){var fetchUrl,fetchInit,request,entries,fetchPropsObj={},resource=args[0];if(resource instanceof Request){var realData=nativeRequestClone.call(resource),requestData=(request=realData,entries=["url","method","headers","body","credentials","cache","redirect","referrer","referrerPolicy","integrity","keepalive","signal","mode"].map((function(key){return[key,request[key]]})),Object.fromEntries(entries));fetchUrl=requestData.url,fetchInit=requestData}else fetchUrl=resource,fetchInit=args[1];return fetchPropsObj.url=fetchUrl,fetchInit instanceof Object&&Object.keys(fetchInit).forEach((function(prop){fetchPropsObj[prop]=fetchInit[prop]})),fetchPropsObj}(args,nativeRequestClone);if(void 0===propsToMatch)return logMessage(source,`fetch( ${objectToString(fetchData)} )`,!0),hit(source),Reflect.apply(target,thisArg,args);if(shouldPrevent=function(source,propsToMatch,requestData){if(""===propsToMatch||"*"===propsToMatch)return!0;var isMatched,PROPS_DIVIDER,PAIRS_MARKER,isRequestProp,propsObj,data,parsedData=(PROPS_DIVIDER=" ",PAIRS_MARKER=":",isRequestProp=function(prop){return["url","method","headers","body","credentials","cache","redirect","referrer","referrerPolicy","integrity","keepalive","signal","mode"].includes(prop)},propsObj={},propsToMatch.split(PROPS_DIVIDER).forEach((function(prop){var dividerInd=prop.indexOf(PAIRS_MARKER),key=prop.slice(0,dividerInd);if(isRequestProp(key)){var value=prop.slice(dividerInd+1);propsObj[key]=value}else propsObj.url=prop})),propsObj);if(data=parsedData,Object.values(data).every((function(value){return function(input){var isValid,FORWARD_SLASH="/",str=function(str){return str.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&")}(input);input[0]===FORWARD_SLASH&&input[input.length-1]===FORWARD_SLASH&&(str=input.slice(1,-1));try{isValid=new RegExp(str),isValid=!0}catch(e){isValid=!1}return isValid}(value)}))){var matchData=function(data){var matchData={};return Object.keys(data).forEach((function(key){matchData[key]=function(rawInput){var input=rawInput||"",FORWARD_SLASH="/";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf(FORWARD_SLASH),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),isValidRegExpFlag=function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}},flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith(FORWARD_SLASH)&&regExpStr.endsWith(FORWARD_SLASH)&&!regExpStr.endsWith("\\\\/")&&isValidRegExpFlag(flagsStr)?flagsStr:"");if(input.startsWith(FORWARD_SLASH)&&input.endsWith(FORWARD_SLASH)||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}(data[key])})),matchData}(parsedData);isMatched=Object.keys(matchData).every((function(matchKey){var matchValue=matchData[matchKey],dataValue=requestData[matchKey];return Object.prototype.hasOwnProperty.call(requestData,matchKey)&&"string"==typeof dataValue&&(null==matchValue?void 0:matchValue.test(dataValue))}))}else logMessage(source,`Invalid parameter: ${propsToMatch}`),isMatched=!1;return isMatched}(source,propsToMatch,fetchData),shouldPrevent){var finalResponseType;hit(source);try{finalResponseType=responseType||function(request){try{var{mode:mode}=request;if(void 0===mode||"cors"===mode||"no-cors"===mode)return new URL(request.url).origin===document.location.origin?"basic":"no-cors"===mode?"opaque":"cors"}catch(error){logMessage(source,`Could not determine response type: ${error}`)}}(fetchData);var origResponse=await Reflect.apply(target,thisArg,args);return origResponse.ok?function(origResponse){var _origResponse$headers,replacement=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{body:"{}"},headers={};null==origResponse||null===(_origResponse$headers=origResponse.headers)||void 0===_origResponse$headers||_origResponse$headers.forEach((function(value,key){headers[key]=value}));var modifiedResponse=new Response(replacement.body,{status:origResponse.status,statusText:origResponse.statusText,headers:headers});return Object.defineProperties(modifiedResponse,{url:{value:origResponse.url},type:{value:replacement.type||origResponse.type}}),modifiedResponse}(origResponse,{body:strResponseBody,type:finalResponseType}):noopPromiseResolve(strResponseBody,fetchData.url,finalResponseType)}catch(ex){return noopPromiseResolve(strResponseBody,fetchData.url,finalResponseType)}}return Reflect.apply(target,thisArg,args)}};fetch=new Proxy(fetch,fetchHandler)}else logMessage(source,`Invalid responseType parameter: \'${responseType}\'`)}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['prevent-popads-net', 'popads.net.js', 'ubo-popads.net.js', 'ubo-popads.net'],
            scriptlet: 'function preventPopadsNet(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){var rid=Math.random().toString(36).slice(2,9),throwError=function(){throw new ReferenceError(rid)};delete window.PopAds,delete window.popns,Object.defineProperties(window,{PopAds:{set:throwError},popns:{set:throwError}}),window.onerror=function(rid){var nativeOnError=window.onerror;return function(error){if("string"==typeof error&&error.includes(rid))return!0;if(nativeOnError instanceof Function){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];return nativeOnError.apply(window,[error,...args])}return!1}}(rid).bind(),function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'prevent-refresh',
                'prevent-refresh.js',
                'refresh-defuser.js',
                'refresh-defuser',
                'ubo-prevent-refresh.js',
                'ubo-prevent-refresh',
                'ubo-refresh-defuser.js',
                'ubo-refresh-defuser',
            ],
            scriptlet: 'function preventRefresh(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function getNumberFromString(rawString){var num,parsedDelay=parseInt(rawString,10);return num=parsedDelay,(Number.isNaN||window.isNaN)(num)?null:parsedDelay}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,delaySec){var getMetaElements=function(){var metaNodes=[];try{metaNodes=document.querySelectorAll(\'meta[http-equiv="refresh" i][content]\')}catch(e){try{metaNodes=document.querySelectorAll(\'meta[http-equiv="refresh"][content]\')}catch(e){!function(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}(source,e)}}return Array.from(metaNodes)},stop=function(){var metaElements=getMetaElements();if(0!==metaElements.length){var secondsToRun=getNumberFromString(delaySec);null===secondsToRun&&(secondsToRun=function(metaElements){var delays=metaElements.map((function(meta){var contentString=meta.getAttribute("content");if(0===contentString.length)return null;var limiterIndex=contentString.indexOf(";");return getNumberFromString(-1!==limiterIndex?contentString.substring(0,limiterIndex):contentString)})).filter((function(delay){return null!==delay}));return delays.length?delays.reduce((function(a,b){return Math.min(a,b)})):null}(metaElements)),null!==secondsToRun&&setTimeout((function(){window.stop(),function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}),1e3*secondsToRun)}};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",stop,{once:!0}):stop()}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'prevent-requestAnimationFrame',
                'no-requestAnimationFrame-if.js',
                'ubo-no-requestAnimationFrame-if.js',
                'norafif.js',
                'ubo-norafif.js',
                'ubo-no-requestAnimationFrame-if',
                'ubo-norafif',
            ],
            scriptlet: 'function preventRequestAnimationFrame(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function hit(source){if(source.verbose){try{var trace=console.trace.bind(console),label="[ABY] ";"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}function noopFunc(){}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,match){var nativeRequestAnimationFrame=window.requestAnimationFrame,shouldLog=void 0===match,{isInvertedMatch:isInvertedMatch,matchRegexp:matchRegexp}=function(match){var INVERT_MARKER="!",isInvertedMatch=!!match&&(null==match?void 0:match.startsWith(INVERT_MARKER)),matchValue=isInvertedMatch?match.slice(1):match,matchRegexp=function(rawInput){var input=rawInput||"",FORWARD_SLASH="/";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf(FORWARD_SLASH),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),isValidRegExpFlag=function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}},flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith(FORWARD_SLASH)&&regExpStr.endsWith(FORWARD_SLASH)&&!regExpStr.endsWith("\\\\/")&&isValidRegExpFlag(flagsStr)?flagsStr:"");if(input.startsWith(FORWARD_SLASH)&&input.endsWith(FORWARD_SLASH)||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}(matchValue);return{isInvertedMatch:isInvertedMatch,matchRegexp:matchRegexp,matchValue:matchValue}}(match);window.requestAnimationFrame=function(callback){var shouldPrevent=!1;if(shouldLog?(hit(source),function(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}(source,`requestAnimationFrame(${String(callback)})`,!0)):function(callback){return callback instanceof Function||"string"==typeof callback}(callback)&&function(input){var isValid,FORWARD_SLASH="/",str=function(str){return str.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&")}(input);input[0]===FORWARD_SLASH&&input[input.length-1]===FORWARD_SLASH&&(str=input.slice(1,-1));try{isValid=new RegExp(str),isValid=!0}catch(e){isValid=!1}return isValid}(match)&&(shouldPrevent=matchRegexp.test(callback.toString())!==isInvertedMatch),shouldPrevent)return hit(source),nativeRequestAnimationFrame(noopFunc);for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];return nativeRequestAnimationFrame.apply(window,[callback,...args])}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'prevent-setInterval',
                'no-setInterval-if.js',
                'ubo-no-setInterval-if.js',
                'setInterval-defuser.js',
                'ubo-setInterval-defuser.js',
                'nosiif.js',
                'ubo-nosiif.js',
                'sid.js',
                'ubo-sid.js',
                'ubo-no-setInterval-if',
                'ubo-setInterval-defuser',
                'ubo-nosiif',
                'ubo-sid',
            ],
            scriptlet: 'function preventSetInterval(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function hit(source){if(source.verbose){try{var trace=console.trace.bind(console),label="[ABY] ";"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}function noopFunc(){}function nativeIsNaN(num){return(Number.isNaN||window.isNaN)(num)}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,matchCallback,matchDelay){var shouldLog=void 0===matchCallback&&void 0===matchDelay,setIntervalHandler={apply:function(target,thisArg,args){var callback=args[0],delay=args[1],shouldPrevent=!1;return shouldLog?(hit(source),function(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}(source,`setInterval(${String(callback)}, ${delay})`,!0)):shouldPrevent=function(_ref){var match,INVERT_MARKER,str,{callback:callback,delay:delay,matchCallback:matchCallback,matchDelay:matchDelay}=_ref;if(!function(callback){return callback instanceof Function||"string"==typeof callback}(callback))return!1;if(INVERT_MARKER="!",str=match=matchCallback,null!=match&&match.startsWith(INVERT_MARKER)&&(str=match.slice(1)),!function(input){var isValid,FORWARD_SLASH="/",str=function(str){return str.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&")}(input);input[0]===FORWARD_SLASH&&input[input.length-1]===FORWARD_SLASH&&(str=input.slice(1,-1));try{isValid=new RegExp(str),isValid=!0}catch(e){isValid=!1}return isValid}(str)||matchDelay&&!function(match){var INVERT_MARKER="!",str=match;null!=match&&match.startsWith(INVERT_MARKER)&&(str=match.slice(1));var num=parseFloat(str);return!nativeIsNaN(num)&&function(num){return(Number.isFinite||window.isFinite)(num)}(num)}(matchDelay))return!1;var{isInvertedMatch:isInvertedMatch,matchRegexp:matchRegexp}=function(match){var INVERT_MARKER="!",isInvertedMatch=!!match&&(null==match?void 0:match.startsWith(INVERT_MARKER)),matchValue=isInvertedMatch?match.slice(1):match,matchRegexp=function(rawInput){var input=rawInput||"",FORWARD_SLASH="/";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf(FORWARD_SLASH),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),isValidRegExpFlag=function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}},flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith(FORWARD_SLASH)&&regExpStr.endsWith(FORWARD_SLASH)&&!regExpStr.endsWith("\\\\/")&&isValidRegExpFlag(flagsStr)?flagsStr:"");if(input.startsWith(FORWARD_SLASH)&&input.endsWith(FORWARD_SLASH)||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}(matchValue);return{isInvertedMatch:isInvertedMatch,matchRegexp:matchRegexp,matchValue:matchValue}}(matchCallback),{isInvertedDelayMatch:isInvertedDelayMatch,delayMatch:delayMatch}=function(delay){var INVERT_MARKER="!",isInvertedDelayMatch=null==delay?void 0:delay.startsWith(INVERT_MARKER),delayValue=isInvertedDelayMatch?delay.slice(1):delay,parsedDelay=parseInt(delayValue,10);return{isInvertedDelayMatch:isInvertedDelayMatch,delayMatch:nativeIsNaN(parsedDelay)?null:parsedDelay}}(matchDelay),parsedDelay=function(delay){var parsedDelay=Math.floor(parseInt(delay,10));return"number"!=typeof parsedDelay||nativeIsNaN(parsedDelay)?delay:parsedDelay}(delay),callbackStr=String(callback);return null===delayMatch?matchRegexp.test(callbackStr)!==isInvertedMatch:matchCallback?matchRegexp.test(callbackStr)!==isInvertedMatch&&parsedDelay===delayMatch!==isInvertedDelayMatch:parsedDelay===delayMatch!==isInvertedDelayMatch}({callback:callback,delay:delay,matchCallback:matchCallback,matchDelay:matchDelay}),shouldPrevent&&(hit(source),args[0]=noopFunc),target.apply(thisArg,args)}};window.setInterval=new Proxy(window.setInterval,setIntervalHandler)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'prevent-setTimeout',
                'no-setTimeout-if.js',
                'ubo-no-setTimeout-if.js',
                'nostif.js',
                'ubo-nostif.js',
                'ubo-no-setTimeout-if',
                'ubo-nostif',
                'setTimeout-defuser.js',
                'ubo-setTimeout-defuser.js',
                'ubo-setTimeout-defuser',
                'std.js',
                'ubo-std.js',
                'ubo-std',
            ],
            scriptlet: 'function preventSetTimeout(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function hit(source){if(source.verbose){try{var trace=console.trace.bind(console),label="[ABY] ";"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}function noopFunc(){}function nativeIsNaN(num){return(Number.isNaN||window.isNaN)(num)}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,matchCallback,matchDelay){var shouldLog=void 0===matchCallback&&void 0===matchDelay,setTimeoutHandler={apply:function(target,thisArg,args){var callback=args[0],delay=args[1],shouldPrevent=!1;return shouldLog?(hit(source),function(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}(source,`setTimeout(${String(callback)}, ${delay})`,!0)):shouldPrevent=function(_ref){var match,INVERT_MARKER,str,{callback:callback,delay:delay,matchCallback:matchCallback,matchDelay:matchDelay}=_ref;if(!function(callback){return callback instanceof Function||"string"==typeof callback}(callback))return!1;if(INVERT_MARKER="!",str=match=matchCallback,null!=match&&match.startsWith(INVERT_MARKER)&&(str=match.slice(1)),!function(input){var isValid,FORWARD_SLASH="/",str=function(str){return str.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&")}(input);input[0]===FORWARD_SLASH&&input[input.length-1]===FORWARD_SLASH&&(str=input.slice(1,-1));try{isValid=new RegExp(str),isValid=!0}catch(e){isValid=!1}return isValid}(str)||matchDelay&&!function(match){var INVERT_MARKER="!",str=match;null!=match&&match.startsWith(INVERT_MARKER)&&(str=match.slice(1));var num=parseFloat(str);return!nativeIsNaN(num)&&function(num){return(Number.isFinite||window.isFinite)(num)}(num)}(matchDelay))return!1;var{isInvertedMatch:isInvertedMatch,matchRegexp:matchRegexp}=function(match){var INVERT_MARKER="!",isInvertedMatch=!!match&&(null==match?void 0:match.startsWith(INVERT_MARKER)),matchValue=isInvertedMatch?match.slice(1):match,matchRegexp=function(rawInput){var input=rawInput||"",FORWARD_SLASH="/";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf(FORWARD_SLASH),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),isValidRegExpFlag=function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}},flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith(FORWARD_SLASH)&&regExpStr.endsWith(FORWARD_SLASH)&&!regExpStr.endsWith("\\\\/")&&isValidRegExpFlag(flagsStr)?flagsStr:"");if(input.startsWith(FORWARD_SLASH)&&input.endsWith(FORWARD_SLASH)||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}(matchValue);return{isInvertedMatch:isInvertedMatch,matchRegexp:matchRegexp,matchValue:matchValue}}(matchCallback),{isInvertedDelayMatch:isInvertedDelayMatch,delayMatch:delayMatch}=function(delay){var INVERT_MARKER="!",isInvertedDelayMatch=null==delay?void 0:delay.startsWith(INVERT_MARKER),delayValue=isInvertedDelayMatch?delay.slice(1):delay,parsedDelay=parseInt(delayValue,10);return{isInvertedDelayMatch:isInvertedDelayMatch,delayMatch:nativeIsNaN(parsedDelay)?null:parsedDelay}}(matchDelay),parsedDelay=function(delay){var parsedDelay=Math.floor(parseInt(delay,10));return"number"!=typeof parsedDelay||nativeIsNaN(parsedDelay)?delay:parsedDelay}(delay),callbackStr=String(callback);return null===delayMatch?matchRegexp.test(callbackStr)!==isInvertedMatch:matchCallback?matchRegexp.test(callbackStr)!==isInvertedMatch&&parsedDelay===delayMatch!==isInvertedDelayMatch:parsedDelay===delayMatch!==isInvertedDelayMatch}({callback:callback,delay:delay,matchCallback:matchCallback,matchDelay:matchDelay}),shouldPrevent&&(hit(source),args[0]=noopFunc),target.apply(thisArg,args)}};window.setTimeout=new Proxy(window.setTimeout,setTimeoutHandler)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'prevent-window-open',
                'window.open-defuser.js',
                'ubo-window.open-defuser.js',
                'ubo-window.open-defuser',
                'nowoif.js',
                'ubo-nowoif.js',
                'ubo-nowoif',
                'no-window-open-if.js',
                'ubo-no-window-open-if.js',
                'ubo-no-window-open-if',
            ],
            scriptlet: 'function preventWindowOpen(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function hit(source){if(source.verbose){try{var trace=console.trace.bind(console),label="[ABY] ";"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}function isValidStrPattern(input){var isValid,str=function(str){return str.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&")}(input);"/"===input[0]&&"/"===input[input.length-1]&&(str=input.slice(1,-1));try{isValid=new RegExp(str),isValid=!0}catch(e){isValid=!1}return isValid}function toRegExp(rawInput){var input=rawInput||"";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf("/"),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith("/")&&regExpStr.endsWith("/")&&!regExpStr.endsWith("\\\\/")&&function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}}(flagsStr)?flagsStr:"");if(input.startsWith("/")&&input.endsWith("/")||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}function getPreventGetter(nativeGetter){return function(target,prop){return(!prop||"closed"!==prop)&&("function"==typeof nativeGetter?noopFunc:prop&&target[prop])}}function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}function noopFunc(){}function trueFunc(){return!0}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){var match=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"*",delay=arguments.length>2?arguments[2]:void 0,replacement=arguments.length>3?arguments[3]:void 0,nativeOpen=window.open,isNewSyntax="0"!==match&&"1"!==match;window.open=isNewSyntax?function(url){for(var shouldLog=replacement&&replacement.includes("log"),_len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++)args[_key2-1]=arguments[_key2];if(shouldLog){var argsStr=args&&args.length>0?`, ${args.join(", ")}`:"";logMessage(source,`${url}${argsStr}`,!0),hit(source)}var num,shouldPrevent=!1;if("*"===match)shouldPrevent=!0;else if(function(match){var INVERT_MARKER="!",str=match;return null!=match&&match.startsWith(INVERT_MARKER)&&(str=match.slice(1)),isValidStrPattern(str)}(match)){var{isInvertedMatch:isInvertedMatch,matchRegexp:matchRegexp}=function(match){var INVERT_MARKER="!",isInvertedMatch=!!match&&(null==match?void 0:match.startsWith(INVERT_MARKER)),matchValue=isInvertedMatch?match.slice(1):match;return{isInvertedMatch:isInvertedMatch,matchRegexp:toRegExp(matchValue),matchValue:matchValue}}(match);shouldPrevent=matchRegexp.test(url)!==isInvertedMatch}else logMessage(source,`Invalid parameter: ${match}`),shouldPrevent=!1;if(shouldPrevent){var result,parsedDelay=parseInt(delay,10);if(num=parsedDelay,(Number.isNaN||window.isNaN)(num))result=null;else{var decoy=function(args){var tag,UrlPropNameOf=function(UrlPropNameOf){return UrlPropNameOf.Object="data",UrlPropNameOf.Iframe="src",UrlPropNameOf}({}),{replacement:replacement,url:url,delay:delay}=args;tag="obj"===replacement?"object":"iframe";var decoy=document.createElement(tag);return decoy instanceof HTMLObjectElement?decoy[UrlPropNameOf.Object]=url:decoy instanceof HTMLIFrameElement&&(decoy[UrlPropNameOf.Iframe]=url),decoy.style.setProperty("height","1px","important"),decoy.style.setProperty("position","fixed","important"),decoy.style.setProperty("top","-1px","important"),decoy.style.setProperty("width","1px","important"),document.body.appendChild(decoy),setTimeout((function(){return decoy.remove()}),1e3*delay),decoy}({replacement:replacement,url:url,delay:parsedDelay}),popup=decoy.contentWindow;if("object"==typeof popup&&null!==popup)Object.defineProperty(popup,"closed",{value:!1}),Object.defineProperty(popup,"opener",{value:window}),Object.defineProperty(popup,"frameElement",{value:null});else{var nativeGetter=decoy.contentWindow&&decoy.contentWindow.get;Object.defineProperty(decoy,"contentWindow",{get:getPreventGetter(nativeGetter)}),popup=decoy.contentWindow}result=popup}return hit(source),result}return nativeOpen.apply(window,[url,...args])}:function(str){match=Number(match)>0;for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];if(!isValidStrPattern(delay))return logMessage(source,`Invalid parameter: ${delay}`),nativeOpen.apply(window,[str,...args]);var searchRegexp=toRegExp(delay);return match!==searchRegexp.test(str)?nativeOpen.apply(window,[str,...args]):(hit(source),function(replacement){var result;if(replacement){if("trueFunc"===replacement)result=trueFunc;else if(replacement.includes("=")&&replacement.startsWith("{")&&replacement.endsWith("}")){var propertyPart=replacement.slice(1,-1),propertyName=function(str,separator){if(!str||!separator)return str;var index=str.indexOf(separator);return index<0?str:str.substring(0,index)}(propertyPart,"="),propertyValue=function(str,separator){if(!str)return str;var index=str.indexOf(separator);return index<0?"":str.substring(index+separator.length)}(propertyPart,"=");"noopFunc"===propertyValue&&((result={})[propertyName]=noopFunc)}}else result=noopFunc;return result}(replacement))},window.open.toString=nativeOpen.toString.bind(nativeOpen)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['prevent-xhr', 'no-xhr-if.js', 'ubo-no-xhr-if.js', 'ubo-no-xhr-if'],
            scriptlet: 'function preventXHR(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function hit(source){if(source.verbose){try{var trace=console.trace.bind(console),label="[ABY] ";"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}function objectToString(obj){return obj&&"object"==typeof obj?function(obj){return 0===Object.keys(obj).length&&!obj.prototype}(obj)?"{}":Object.entries(obj).map((function(pair){var key=pair[0],value=pair[1],recordValueStr=value;return value instanceof Object&&(recordValueStr=`{ ${objectToString(value)} }`),`${key}:"${recordValueStr}"`})).join(" "):String(obj)}function getXhrData(method,url,async,user,password){return{method:method,url:url,async:async,user:user,password:password}}function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}function getNumberFromString(rawString){var num,parsedDelay=parseInt(rawString,10);return num=parsedDelay,(Number.isNaN||window.isNaN)(num)?null:parsedDelay}function nativeIsFinite(num){return(Number.isFinite||window.isFinite)(num)}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,propsToMatch,customResponseText){if("undefined"!=typeof Proxy){var xhrData,nativeOpen=window.XMLHttpRequest.prototype.open,nativeGetResponseHeader=window.XMLHttpRequest.prototype.getResponseHeader,nativeGetAllResponseHeaders=window.XMLHttpRequest.prototype.getAllResponseHeaders,modifiedResponse="",modifiedResponseText="",openHandler={apply:function(target,thisArg,args){if(xhrData=getXhrData.apply(null,args),void 0===propsToMatch?(logMessage(source,`xhr( ${objectToString(xhrData)} )`,!0),hit(source)):function(source,propsToMatch,requestData){if(""===propsToMatch||"*"===propsToMatch)return!0;var isMatched,PROPS_DIVIDER,PAIRS_MARKER,isRequestProp,propsObj,data,parsedData=(PROPS_DIVIDER=" ",PAIRS_MARKER=":",isRequestProp=function(prop){return["url","method","headers","body","credentials","cache","redirect","referrer","referrerPolicy","integrity","keepalive","signal","mode"].includes(prop)},propsObj={},propsToMatch.split(PROPS_DIVIDER).forEach((function(prop){var dividerInd=prop.indexOf(PAIRS_MARKER),key=prop.slice(0,dividerInd);if(isRequestProp(key)){var value=prop.slice(dividerInd+1);propsObj[key]=value}else propsObj.url=prop})),propsObj);if(data=parsedData,Object.values(data).every((function(value){return function(input){var isValid,FORWARD_SLASH="/",str=function(str){return str.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&")}(input);input[0]===FORWARD_SLASH&&input[input.length-1]===FORWARD_SLASH&&(str=input.slice(1,-1));try{isValid=new RegExp(str),isValid=!0}catch(e){isValid=!1}return isValid}(value)}))){var matchData=function(data){var matchData={};return Object.keys(data).forEach((function(key){matchData[key]=function(rawInput){var input=rawInput||"",FORWARD_SLASH="/";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf(FORWARD_SLASH),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),isValidRegExpFlag=function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}},flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith(FORWARD_SLASH)&&regExpStr.endsWith(FORWARD_SLASH)&&!regExpStr.endsWith("\\\\/")&&isValidRegExpFlag(flagsStr)?flagsStr:"");if(input.startsWith(FORWARD_SLASH)&&input.endsWith(FORWARD_SLASH)||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}(data[key])})),matchData}(parsedData);isMatched=Object.keys(matchData).every((function(matchKey){var matchValue=matchData[matchKey],dataValue=requestData[matchKey];return Object.prototype.hasOwnProperty.call(requestData,matchKey)&&"string"==typeof dataValue&&(null==matchValue?void 0:matchValue.test(dataValue))}))}else logMessage(source,`Invalid parameter: ${propsToMatch}`),isMatched=!1;return isMatched}(source,propsToMatch,xhrData)&&(thisArg.shouldBePrevented=!0,thisArg.xhrData=xhrData),thisArg.shouldBePrevented){thisArg.collectedHeaders=[];var setRequestHeaderHandler={apply:function(target,thisArg,args){return thisArg.collectedHeaders.push(args),Reflect.apply(target,thisArg,args)}};thisArg.setRequestHeader=new Proxy(thisArg.setRequestHeader,setRequestHeaderHandler)}return Reflect.apply(target,thisArg,args)}},sendHandler={apply:function(target,thisArg,args){if(!thisArg.shouldBePrevented)return Reflect.apply(target,thisArg,args);if("blob"===thisArg.responseType&&(modifiedResponse=new Blob),"arraybuffer"===thisArg.responseType&&(modifiedResponse=new ArrayBuffer),customResponseText){var randomText=function(customResponseText){var customResponse=customResponseText;if("true"===customResponse)return Math.random().toString(36).slice(-10);if(customResponse=customResponse.replace("length:",""),!/^\\d+-\\d+$/.test(customResponse))return null;var min,max,rangeMin=getNumberFromString(customResponse.split("-")[0]),rangeMax=getNumberFromString(customResponse.split("-")[1]);if(!nativeIsFinite(rangeMin)||!nativeIsFinite(rangeMax))return null;if(rangeMin>rangeMax){var temp=rangeMin;rangeMin=rangeMax,rangeMax=temp}return rangeMax>5e5?null:function(length){for(var result="",characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=~",charactersLength=characters.length,i=0;i<length;i+=1)result+=characters.charAt(Math.floor(Math.random()*charactersLength));return result}((min=rangeMin,max=rangeMax,min=Math.ceil(min),max=Math.floor(max),Math.floor(Math.random()*(max-min+1)+min)))}(customResponseText);randomText?(modifiedResponse=randomText,modifiedResponseText=randomText):logMessage(source,`Invalid randomize parameter: \'${customResponseText}\'`)}var forgedRequest=new XMLHttpRequest,transitionReadyState=function(state){if(4===state){var{responseURL:responseURL,responseXML:responseXML}=forgedRequest;Object.defineProperties(thisArg,{readyState:{value:4,writable:!1},statusText:{value:"OK",writable:!1},responseURL:{value:responseURL||thisArg.xhrData.url,writable:!1},responseXML:{value:responseXML,writable:!1},status:{value:200,writable:!1},response:{value:modifiedResponse,writable:!1},responseText:{value:modifiedResponseText,writable:!1}}),hit(source)}else Object.defineProperty(thisArg,"readyState",{value:state,writable:!0,configurable:!0});var stateEvent=new Event("readystatechange");thisArg.dispatchEvent(stateEvent)};forgedRequest.addEventListener("readystatechange",(function(){transitionReadyState(1);var loadStartEvent=new ProgressEvent("loadstart");thisArg.dispatchEvent(loadStartEvent),transitionReadyState(2),transitionReadyState(3);var progressEvent=new ProgressEvent("progress");thisArg.dispatchEvent(progressEvent),transitionReadyState(4)})),setTimeout((function(){var loadEvent=new ProgressEvent("load");thisArg.dispatchEvent(loadEvent);var loadEndEvent=new ProgressEvent("loadend");thisArg.dispatchEvent(loadEndEvent)}),1),nativeOpen.apply(forgedRequest,[thisArg.xhrData.method,thisArg.xhrData.url]),thisArg.collectedHeaders.forEach((function(header){var name=header[0],value=header[1];forgedRequest.setRequestHeader(name,value)}))}},getHeaderHandler={apply:function(target,thisArg,args){if(!thisArg.shouldBePrevented)return nativeGetResponseHeader.apply(thisArg,args);if(!thisArg.collectedHeaders.length)return null;var searchHeaderName=args[0].toLowerCase(),matchedHeader=thisArg.collectedHeaders.find((function(header){return header[0].toLowerCase()===searchHeaderName}));return matchedHeader?matchedHeader[1]:null}},getAllHeadersHandler={apply:function(target,thisArg){return thisArg.shouldBePrevented?thisArg.collectedHeaders.length?thisArg.collectedHeaders.map((function(header){var headerName=header[0],headerValue=header[1];return`${headerName.toLowerCase()}: ${headerValue}`})).join("\\r\\n"):"":nativeGetAllResponseHeaders.call(thisArg)}};XMLHttpRequest.prototype.open=new Proxy(XMLHttpRequest.prototype.open,openHandler),XMLHttpRequest.prototype.send=new Proxy(XMLHttpRequest.prototype.send,sendHandler),XMLHttpRequest.prototype.getResponseHeader=new Proxy(XMLHttpRequest.prototype.getResponseHeader,getHeaderHandler),XMLHttpRequest.prototype.getAllResponseHeaders=new Proxy(XMLHttpRequest.prototype.getAllResponseHeaders,getAllHeadersHandler)}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['remove-attr', 'remove-attr.js', 'ubo-remove-attr.js', 'ra.js', 'ubo-ra.js', 'ubo-remove-attr', 'ubo-ra'],
            scriptlet: 'function removeAttr(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function observeDOMChanges(callback){var cb,delay,savedArgs,wait,_wrapper,observeAttrs=arguments.length>1&&void 0!==arguments[1]&&arguments[1],attrsToObserve=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],observer=new MutationObserver((cb=function(){disconnect(),callback(),connect()},delay=20,wait=!1,_wrapper=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];wait?savedArgs=args:(cb(...args),wait=!0,setTimeout((function(){wait=!1,savedArgs&&(_wrapper(...savedArgs),savedArgs=null)}),delay))},_wrapper)),connect=function(){attrsToObserve.length>0?observer.observe(document.documentElement,{childList:!0,subtree:!0,attributes:observeAttrs,attributeFilter:attrsToObserve}):observer.observe(document.documentElement,{childList:!0,subtree:!0,attributes:observeAttrs})},disconnect=function(){observer.disconnect()};connect()}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,attrs,selector){var applying=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"asap stay";if(attrs){attrs=attrs.split(/\\s*\\|\\s*/),selector||(selector=`[${attrs.join("],[")}]`);var rmattr=function(){var nodes=[];try{nodes=[].slice.call(document.querySelectorAll(selector))}catch(e){!function(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}(source,`Invalid selector arg: \'${selector}\'`)}var removed=!1;nodes.forEach((function(node){attrs.forEach((function(attr){node.removeAttribute(attr),removed=!0}))})),removed&&function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)},flags=function(flags){var FLAGS_DIVIDER=" ",ASAP_FLAG="asap",COMPLETE_FLAG="complete",STAY_FLAG="stay",VALID_FLAGS=new Set([ASAP_FLAG,COMPLETE_FLAG,STAY_FLAG]),passedFlags=new Set(flags.trim().split(FLAGS_DIVIDER).filter((function(flag){return VALID_FLAGS.has(flag)})));return{ASAP:ASAP_FLAG,COMPLETE:COMPLETE_FLAG,STAY:STAY_FLAG,hasFlag:function(flag){return passedFlags.has(flag)}}}(applying);flags.hasFlag(flags.ASAP)&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",rmattr,{once:!0}):rmattr()),"complete"!==document.readyState&&flags.hasFlag(flags.COMPLETE)?window.addEventListener("load",(function(){rmattr(),flags.hasFlag(flags.STAY)&&observeDOMChanges(rmattr,!0)}),{once:!0}):flags.hasFlag(flags.STAY)&&(applying.includes(" ")||rmattr(),observeDOMChanges(rmattr,!0))}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'remove-class',
                'remove-class.js',
                'ubo-remove-class.js',
                'rc.js',
                'ubo-rc.js',
                'ubo-remove-class',
                'ubo-rc',
            ],
            scriptlet: 'function removeClass(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function observeDOMChanges(callback){var cb,delay,savedArgs,wait,_wrapper,observeAttrs=arguments.length>1&&void 0!==arguments[1]&&arguments[1],attrsToObserve=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],observer=new MutationObserver((cb=function(){disconnect(),callback(),connect()},delay=20,wait=!1,_wrapper=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];wait?savedArgs=args:(cb(...args),wait=!0,setTimeout((function(){wait=!1,savedArgs&&(_wrapper(...savedArgs),savedArgs=null)}),delay))},_wrapper)),connect=function(){attrsToObserve.length>0?observer.observe(document.documentElement,{childList:!0,subtree:!0,attributes:observeAttrs,attributeFilter:attrsToObserve}):observer.observe(document.documentElement,{childList:!0,subtree:!0,attributes:observeAttrs})},disconnect=function(){observer.disconnect()};connect()}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,classNames,selector){var applying=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"asap stay";if(classNames){classNames=classNames.split(/\\s*\\|\\s*/);var selectors=[];selector||(selectors=classNames.map((function(className){return`.${className}`})));var removeClassHandler=function(){var nodes=new Set;if(selector){var foundNodes=[];try{foundNodes=[].slice.call(document.querySelectorAll(selector))}catch(e){!function(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}(source,`Invalid selector arg: \'${selector}\'`)}foundNodes.forEach((function(n){return nodes.add(n)}))}else selectors.length>0&&selectors.forEach((function(s){for(var elements=document.querySelectorAll(s),i=0;i<elements.length;i+=1){var element=elements[i];nodes.add(element)}}));var removed=!1;nodes.forEach((function(node){classNames.forEach((function(className){node.classList.contains(className)&&(node.classList.remove(className),removed=!0)}))})),removed&&function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)},CLASS_ATTR_NAME=["class"],flags=function(flags){var FLAGS_DIVIDER=" ",ASAP_FLAG="asap",COMPLETE_FLAG="complete",STAY_FLAG="stay",VALID_FLAGS=new Set([ASAP_FLAG,COMPLETE_FLAG,STAY_FLAG]),passedFlags=new Set(flags.trim().split(FLAGS_DIVIDER).filter((function(flag){return VALID_FLAGS.has(flag)})));return{ASAP:ASAP_FLAG,COMPLETE:COMPLETE_FLAG,STAY:STAY_FLAG,hasFlag:function(flag){return passedFlags.has(flag)}}}(applying);flags.hasFlag(flags.ASAP)&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",removeClassHandler,{once:!0}):removeClassHandler()),"complete"!==document.readyState&&flags.hasFlag(flags.COMPLETE)?window.addEventListener("load",(function(){removeClassHandler(),flags.hasFlag(flags.STAY)&&observeDOMChanges(removeClassHandler,!0,CLASS_ATTR_NAME)}),{once:!0}):flags.hasFlag(flags.STAY)&&(applying.includes(" ")||removeClassHandler(),observeDOMChanges(removeClassHandler,!0,CLASS_ATTR_NAME))}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'remove-cookie',
                'cookie-remover.js',
                'ubo-cookie-remover.js',
                'ubo-cookie-remover',
                'remove-cookie.js',
                'ubo-remove-cookie.js',
                'ubo-remove-cookie',
                'abp-cookie-remover',
            ],
            scriptlet: 'function removeCookie(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,match){var matchRegexp=function(rawInput){var input=rawInput||"",FORWARD_SLASH="/";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf(FORWARD_SLASH),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),isValidRegExpFlag=function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}},flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith(FORWARD_SLASH)&&regExpStr.endsWith(FORWARD_SLASH)&&!regExpStr.endsWith("\\\\/")&&isValidRegExpFlag(flagsStr)?flagsStr:"");if(input.startsWith(FORWARD_SLASH)&&input.endsWith(FORWARD_SLASH)||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}(match),removeCookieFromHost=function(cookieName,hostName){var cookieSpec=`${cookieName}=`,domain1=`; domain=${hostName}`,domain2=`; domain=.${hostName}`,path="; path=/",expiration="; expires=Thu, 01 Jan 1970 00:00:00 GMT";document.cookie=cookieSpec+expiration,document.cookie=cookieSpec+domain1+expiration,document.cookie=cookieSpec+domain2+expiration,document.cookie=cookieSpec+path+expiration,document.cookie=cookieSpec+domain1+path+expiration,document.cookie=cookieSpec+domain2+path+expiration,function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)},rmCookie=function(){document.cookie.split(";").forEach((function(cookieStr){var pos=cookieStr.indexOf("=");if(-1!==pos){var cookieName=cookieStr.slice(0,pos).trim();if(matchRegexp.test(cookieName))for(var hostParts=document.location.hostname.split("."),i=0;i<=hostParts.length-1;i+=1){var hostName=hostParts.slice(i).join(".");hostName&&removeCookieFromHost(cookieName,hostName)}}}))};rmCookie(),window.addEventListener("beforeunload",rmCookie)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['remove-in-shadow-dom'],
            scriptlet: 'function removeInShadowDom(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function findHostElements(rootElement){var hosts=[];rootElement&&rootElement.querySelectorAll("*").forEach((function(el){el.shadowRoot&&hosts.push(el)}));return hosts}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,selector,baseSelector){if(Element.prototype.attachShadow){var removeHandler=function(){for(var hostElements=baseSelector?document.querySelectorAll(baseSelector):findHostElements(document.documentElement),_loop=function(){var isRemoved=!1,{targets:targets,innerHosts:innerHosts}=function(selector,hostElements){var targets=[],innerHostsAcc=[];hostElements.forEach((function(host){var simpleElems=host.querySelectorAll(selector);targets=targets.concat([].slice.call(simpleElems));var shadowRootElem=host.shadowRoot,shadowChildren=shadowRootElem.querySelectorAll(selector);targets=targets.concat([].slice.call(shadowChildren)),innerHostsAcc.push(findHostElements(shadowRootElem))}));var innerHosts=function(input){var stack=[];input.forEach((function(el){return stack.push(el)}));for(var res=[];stack.length;){var next=stack.pop();Array.isArray(next)?next.forEach((function(el){return stack.push(el)})):res.push(next)}return res.reverse()}(innerHostsAcc);return{targets:targets,innerHosts:innerHosts}}(selector,hostElements);targets.forEach((function(targetEl){targetEl.remove(),isRemoved=!0})),isRemoved&&function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source),hostElements=innerHosts};0!==hostElements.length;)_loop()};removeHandler(),function(callback){var cb,delay,savedArgs,wait,_wrapper,observeAttrs=arguments.length>1&&void 0!==arguments[1]&&arguments[1],attrsToObserve=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],observer=new MutationObserver((cb=callbackWrapper,delay=20,wait=!1,_wrapper=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];wait?savedArgs=args:(cb(...args),wait=!0,setTimeout((function(){wait=!1,savedArgs&&(_wrapper(...savedArgs),savedArgs=null)}),delay))},_wrapper)),connect=function(){attrsToObserve.length>0?observer.observe(document.documentElement,{childList:!0,subtree:!0,attributes:observeAttrs,attributeFilter:attrsToObserve}):observer.observe(document.documentElement,{childList:!0,subtree:!0,attributes:observeAttrs})},disconnect=function(){observer.disconnect()};function callbackWrapper(){disconnect(),callback(),connect()}connect()}(removeHandler,!0)}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'remove-node-text',
                'remove-node-text.js',
                'ubo-remove-node-text.js',
                'rmnt.js',
                'ubo-rmnt.js',
                'ubo-remove-node-text',
                'ubo-rmnt',
            ],
            scriptlet: 'function removeNodeText(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function handleExistingNodes(selector,handler,parentSelector){(parentSelector?document.querySelectorAll(parentSelector):[document]).forEach((function(parent){return function(parent){if("#text"===selector){var textNodes=nodeListToArray(parent.childNodes).filter((function(node){return node.nodeType===Node.TEXT_NODE}));handler(textNodes)}else{var _nodes=nodeListToArray(parent.querySelectorAll(selector));handler(_nodes)}}(parent)}))}function nodeListToArray(nodeList){for(var nodes=[],i=0;i<nodeList.length;i+=1)nodes.push(nodeList[i]);return nodes}function toRegExp(rawInput){var input=rawInput||"";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf("/"),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith("/")&&regExpStr.endsWith("/")&&!regExpStr.endsWith("\\\\/")&&function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}}(flagsStr)?flagsStr:"");if(input.startsWith("/")&&input.endsWith("/")||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,nodeName,textMatch,parentSelector){var{selector:selector,nodeNameMatch:nodeNameMatch,textContentMatch:textContentMatch}=function(nodeName,textMatch){var patternMatch,pattern=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,REGEXP_START_MARKER="/",isStringNameMatch=!(nodeName.startsWith(REGEXP_START_MARKER)&&nodeName.endsWith(REGEXP_START_MARKER)),selector=isStringNameMatch?nodeName:"*",nodeNameMatch=isStringNameMatch?nodeName:toRegExp(nodeName),textContentMatch=textMatch.startsWith(REGEXP_START_MARKER)?toRegExp(textMatch):textMatch;return pattern&&(patternMatch=pattern.startsWith(REGEXP_START_MARKER)?toRegExp(pattern):pattern),{selector:selector,nodeNameMatch:nodeNameMatch,textContentMatch:textContentMatch,patternMatch:patternMatch}}(nodeName,textMatch),handleNodes=function(nodes){return nodes.forEach((function(node){var shouldReplace=function(node,nodeNameMatch,textContentMatch){var{nodeName:nodeName,textContent:textContent}=node,nodeNameLowerCase=nodeName.toLowerCase();return null!==textContent&&""!==textContent&&(nodeNameMatch instanceof RegExp?nodeNameMatch.test(nodeNameLowerCase):nodeNameMatch===nodeNameLowerCase)&&(textContentMatch instanceof RegExp?textContentMatch.test(textContent):textContent.includes(textContentMatch))}(node,nodeNameMatch,textContentMatch);shouldReplace&&function(source,node,pattern,replacement){var{textContent:textContent}=node;if(textContent){if("SCRIPT"===node.nodeName&&window.trustedTypes&&window.trustedTypes.createPolicy){var policy=window.trustedTypes.createPolicy("AGPolicy",{createScript:function(string){return string}}),modifiedText=textContent.replace(pattern,replacement),trustedReplacement=policy.createScript(modifiedText);node.textContent=trustedReplacement}else node.textContent=textContent.replace(pattern,replacement);!function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}}(source,node,/^[^]*$/,"")}))};document.documentElement&&handleExistingNodes(selector,handleNodes,parentSelector),function(callback){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{subtree:!0,childList:!0},timeout=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4,documentObserver=new MutationObserver((function(mutations,observer){observer.disconnect(),callback(mutations,observer),observer.observe(document.documentElement,options)}));documentObserver.observe(document.documentElement,options),"number"==typeof timeout&&setTimeout((function(){return documentObserver.disconnect()}),timeout)}((function(mutations){return function(mutations,handler,selector,parentSelector){var addedNodes=function(mutations){for(var nodes=[],i=0;i<mutations.length;i+=1)for(var{addedNodes:addedNodes}=mutations[i],j=0;j<addedNodes.length;j+=1)nodes.push(addedNodes[j]);return nodes}(mutations);selector&&parentSelector?addedNodes.forEach((function(){handleExistingNodes(selector,handler,parentSelector)})):handler(addedNodes)}(mutations,handleNodes,selector,parentSelector)}))}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['set-attr', 'set-attr.js', 'ubo-set-attr.js', 'ubo-set-attr'],
            scriptlet: 'function setAttr(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function setAttributeBySelector(source,selector,attribute,value){var elements,attributeSetter=arguments.length>4&&void 0!==arguments[4]?arguments[4]:defaultAttributeSetter;try{elements=document.querySelectorAll(selector)}catch(_unused){return void logMessage(source,`Failed to find elements matching selector "${selector}"`)}if(elements&&0!==elements.length)try{elements.forEach((function(elem){return attributeSetter(elem,attribute,value)})),function(source){var ABY_PREFIX="[ABY]";if(!source.verbose)return;try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}(source)}catch(_unused2){logMessage(source,`Failed to set [${attribute}="${value}"] to each of selected elements.`)}}function defaultAttributeSetter(elem,attribute,value){return elem.setAttribute(attribute,value)}function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,selector,attr){var value=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(selector&&attr){var num,attributeHandler,shouldCopyValue=value.startsWith("[")&&value.endsWith("]"),isValidValue=0===value.length||(num=parseInt(value,10),!(Number.isNaN||window.isNaN)(num)&&parseInt(value,10)>=0&&parseInt(value,10)<=32767)||["true","false"].includes(value.toLowerCase());shouldCopyValue||isValidValue?(shouldCopyValue&&(attributeHandler=function(elem,attr,value){var valueToCopy=elem.getAttribute(value.slice(1,-1));null===valueToCopy&&logMessage(source,`No element attribute found to copy value from: ${value}`),elem.setAttribute(attr,valueToCopy)}),setAttributeBySelector(source,selector,attr,value,attributeHandler),function(callback){var cb,delay,savedArgs,wait,_wrapper,observeAttrs=arguments.length>1&&void 0!==arguments[1]&&arguments[1],attrsToObserve=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],observer=new MutationObserver((cb=callbackWrapper,delay=20,wait=!1,_wrapper=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];wait?savedArgs=args:(cb(...args),wait=!0,setTimeout((function(){wait=!1,savedArgs&&(_wrapper(...savedArgs),savedArgs=null)}),delay))},_wrapper)),connect=function(){attrsToObserve.length>0?observer.observe(document.documentElement,{childList:!0,subtree:!0,attributes:observeAttrs,attributeFilter:attrsToObserve}):observer.observe(document.documentElement,{childList:!0,subtree:!0,attributes:observeAttrs})},disconnect=function(){observer.disconnect()};function callbackWrapper(){disconnect(),callback(),connect()}connect()}((function(){return setAttributeBySelector(source,selector,attr,value,attributeHandler)}),!0)):logMessage(source,`Invalid attribute value provided: \'${function(value){return void 0===value?"undefined":"object"==typeof value?null===value?"null":objectToString(value):String(value)}(value)}\'`)}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'set-constant',
                'set-constant.js',
                'ubo-set-constant.js',
                'set.js',
                'ubo-set.js',
                'ubo-set-constant',
                'ubo-set',
                'abp-override-property-read',
            ],
            scriptlet: 'function setConstant(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function noopFunc(){}function noopCallbackFunc(){return noopFunc}function trueFunc(){return!0}function falseFunc(){return!1}function throwFunc(){throw new Error}function noopPromiseReject(){return Promise.reject()}function noopPromiseResolve(){var responseUrl=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",responseType=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"basic";if("undefined"!=typeof Response){var response=new Response(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"{}",{status:200,statusText:"OK"});return"opaque"===responseType?Object.defineProperties(response,{body:{value:null},status:{value:0},ok:{value:!1},statusText:{value:""},url:{value:""},type:{value:responseType}}):Object.defineProperties(response,{url:{value:responseUrl},type:{value:responseType}}),Promise.resolve(response)}}function getPropertyInChain(base,chain){var pos=chain.indexOf(".");if(-1===pos)return{base:base,prop:chain};var prop=chain.slice(0,pos);if(null===base)return{base:base,prop:prop,chain:chain};var nextBase=base[prop];return chain=chain.slice(pos+1),(base instanceof Object||"object"==typeof base)&&isEmptyObject(base)||null===nextBase?{base:base,prop:prop,chain:chain}:void 0!==nextBase?getPropertyInChain(nextBase,chain):(Object.defineProperty(base,prop,{configurable:!0}),{base:base,prop:prop,chain:chain})}function nativeIsNaN(num){return(Number.isNaN||window.isNaN)(num)}function isEmptyObject(obj){return 0===Object.keys(obj).length&&!obj.prototype}function toRegExp(rawInput){var input=rawInput||"";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf("/"),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith("/")&&regExpStr.endsWith("/")&&!regExpStr.endsWith("\\\\/")&&function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}}(flagsStr)?flagsStr:"");if(input.startsWith("/")&&input.endsWith("/")||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}function restoreRegExpValues(array){if(array.length)try{var stringPattern="";stringPattern=1===array.length?`(${array[0]})`:array.reduce((function(accumulator,currentValue,currentIndex){return 1===currentIndex?`(${accumulator}),(${currentValue})`:`${accumulator},(${currentValue})`}));var regExpGroup=new RegExp(stringPattern);array.toString().replace(regExpGroup,"")}catch(error){var message=`Failed to restore RegExp values: ${error}`;console.log(message)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,property,value){var parsedDelay,stack=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",valueWrapper=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",setProxyTrap=arguments.length>5&&void 0!==arguments[5]&&arguments[5];if(["set-constant.js","ubo-set-constant.js","set.js","ubo-set.js","ubo-set-constant","ubo-set"].includes(source.name)&&(1!==stack.length&&(nativeIsNaN(parsedDelay=parseInt(stack,10))||!parsedDelay)&&(valueWrapper=stack),stack=void 0),property&&function(stackMatch,stackTrace){if(!stackMatch||""===stackMatch)return!0;var regExpValues=function(){try{for(var arrayOfRegexpValues=[],index=1;index<10;index+=1){var value=`$${index}`;if(!RegExp[value])break;arrayOfRegexpValues.push(RegExp[value])}return arrayOfRegexpValues}catch(error){return[]}}();if(function(stackMatch,stackTrace){var INLINE_SCRIPT_STRING="inlineScript",INJECTED_SCRIPT_STRING="injectedScript",INJECTED_SCRIPT_MARKER="<anonymous>",isInlineScript=function(match){return match.includes(INLINE_SCRIPT_STRING)},isInjectedScript=function(match){return match.includes(INJECTED_SCRIPT_STRING)};if(!isInlineScript(stackMatch)&&!isInjectedScript(stackMatch))return!1;var documentURL=window.location.href,pos=documentURL.indexOf("#");-1!==pos&&(documentURL=documentURL.slice(0,pos));var stackLines=stackTrace.split("\\n").slice(2).map((function(line){return line.trim()})).map((function(line){var stack,getStackTraceValues=/(.*?@)?(\\S+)(:\\d+)(:\\d+)\\)?$/.exec(line);if(getStackTraceValues){var _stackURL,_stackURL2,stackURL=getStackTraceValues[2],stackLine=getStackTraceValues[3],stackCol=getStackTraceValues[4];if(null!==(_stackURL=stackURL)&&void 0!==_stackURL&&_stackURL.startsWith("(")&&(stackURL=stackURL.slice(1)),null!==(_stackURL2=stackURL)&&void 0!==_stackURL2&&_stackURL2.startsWith(INJECTED_SCRIPT_MARKER)){var _stackFunction;stackURL=INJECTED_SCRIPT_STRING;var stackFunction=void 0!==getStackTraceValues[1]?getStackTraceValues[1].slice(0,-1):line.slice(0,getStackTraceValues.index).trim();null!==(_stackFunction=stackFunction)&&void 0!==_stackFunction&&_stackFunction.startsWith("at")&&(stackFunction=stackFunction.slice(2).trim()),stack=`${stackFunction} ${stackURL}${stackLine}${stackCol}`.trim()}else stack=stackURL===documentURL?`${INLINE_SCRIPT_STRING}${stackLine}${stackCol}`.trim():`${stackURL}${stackLine}${stackCol}`.trim()}else stack=line;return stack}));if(stackLines)for(var index=0;index<stackLines.length;index+=1){if(isInlineScript(stackMatch)&&stackLines[index].startsWith(INLINE_SCRIPT_STRING)&&stackLines[index].match(toRegExp(stackMatch)))return!0;if(isInjectedScript(stackMatch)&&stackLines[index].startsWith(INJECTED_SCRIPT_STRING)&&stackLines[index].match(toRegExp(stackMatch)))return!0}return!1}(stackMatch,stackTrace))return regExpValues.length&&regExpValues[0]!==RegExp.$1&&restoreRegExpValues(regExpValues),!0;var stackRegexp=toRegExp(stackMatch),refinedStackTrace=stackTrace.split("\\n").slice(2).map((function(line){return line.trim()})).join("\\n");return regExpValues.length&&regExpValues[0]!==RegExp.$1&&restoreRegExpValues(regExpValues),function(){var descriptor=Object.getOwnPropertyDescriptor(RegExp.prototype,"test"),nativeRegexTest=null==descriptor?void 0:descriptor.value;if(descriptor&&"function"==typeof descriptor.value)return nativeRegexTest;throw new Error("RegExp.prototype.test is not a function")}().call(stackRegexp,refinedStackTrace)}(stack,(new Error).stack)){var constantValue,isProxyTrapSet=!1;if("undefined"===value)constantValue=void 0;else if("false"===value)constantValue=!1;else if("true"===value)constantValue=!0;else if("null"===value)constantValue=null;else if("emptyArr"===value)constantValue=[];else if("emptyObj"===value)constantValue={};else if("noopFunc"===value)constantValue=noopFunc;else if("noopCallbackFunc"===value)constantValue=noopCallbackFunc;else if("trueFunc"===value)constantValue=trueFunc;else if("falseFunc"===value)constantValue=falseFunc;else if("throwFunc"===value)constantValue=throwFunc;else if("noopPromiseResolve"===value)constantValue=noopPromiseResolve;else if("noopPromiseReject"===value)constantValue=noopPromiseReject;else if(/^\\d+$/.test(value)){if(nativeIsNaN(constantValue=parseFloat(value)))return;if(Math.abs(constantValue)>32767)return}else if("-1"===value)constantValue=-1;else if(""===value)constantValue="";else if("yes"===value)constantValue="yes";else{if("no"!==value)return;constantValue="no"}["asFunction","asCallback","asResolved","asRejected"].includes(valueWrapper)&&(constantValue={asFunction:v=>function(){return v},asCallback:v=>function(){return function(){return v}},asResolved:v=>Promise.resolve(v),asRejected:v=>Promise.reject(v)}[valueWrapper](constantValue));var canceled=!1,mustCancel=function(value){return canceled||(canceled=void 0!==value&&void 0!==constantValue&&typeof value!=typeof constantValue&&null!==value)},trapProp=function(base,prop,configurable,handler){if(!handler.init(base[prop]))return!1;var prevSetter,origDescriptor=Object.getOwnPropertyDescriptor(base,prop);if(origDescriptor instanceof Object){if(!origDescriptor.configurable)return function(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}(source,`Property \'${prop}\' is not configurable`),!1;base[prop]&&(base[prop]=constantValue),origDescriptor.set instanceof Function&&(prevSetter=origDescriptor.set)}return Object.defineProperty(base,prop,{configurable:configurable,get:()=>handler.get(),set(a){if(void 0!==prevSetter&&prevSetter(a),a instanceof Object){var propertiesToCheck=property.split(".").slice(1);setProxyTrap&&!isProxyTrapSet&&(isProxyTrapSet=!0,a=new Proxy(a,{get:function(target,propertyKey,val){return propertiesToCheck.reduce((function(object,currentProp,index,array){var currentObj=null==object?void 0:object[currentProp];return index===array.length-1&&currentObj!==constantValue&&(object[currentProp]=constantValue),currentObj||object}),target),Reflect.get(target,propertyKey,val)}}))}handler.set(a)}}),!0},_setChainPropAccess=function(owner,property){var chainInfo=getPropertyInChain(owner,property),{base:base}=chainInfo,{prop:prop,chain:chain}=chainInfo,inChainPropHandler={factValue:void 0,init(a){return this.factValue=a,!0},get(){return this.factValue},set(a){this.factValue!==a&&(this.factValue=a,a instanceof Object&&_setChainPropAccess(a,chain))}},endPropHandler={init:a=>!mustCancel(a),get:()=>constantValue,set(a){mustCancel(a)&&(constantValue=a)}};if(chain)if(void 0===base||null!==base[prop]){(base instanceof Object||"object"==typeof base)&&isEmptyObject(base)&&trapProp(base,prop,!0,inChainPropHandler);var propValue=owner[prop];(propValue instanceof Object||"object"==typeof propValue&&null!==propValue)&&_setChainPropAccess(propValue,chain),trapProp(base,prop,!0,inChainPropHandler)}else trapProp(base,prop,!0,inChainPropHandler);else trapProp(base,prop,!1,endPropHandler)&&function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)};_setChainPropAccess(window,property)}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['set-cookie', 'set-cookie.js', 'ubo-set-cookie.js', 'ubo-set-cookie'],
            scriptlet: 'function setCookie(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,name,value){var rawPath,path=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"/",domain=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",validValue=function(value){if(!value)return null;var validValue,num;if(new Set(["true","t","false","f","yes","y","no","n","ok","on","off","accept","accepted","notaccepted","reject","rejected","allow","allowed","disallow","deny","enable","enabled","disable","disabled","necessary","required","hide","hidden","essential","nonessential","checked","unchecked","forbidden","forever"]).has(value.toLowerCase()))validValue=value;else{if(!/^\\d+$/.test(value))return null;if(num=validValue=parseFloat(value),(Number.isNaN||window.isNaN)(num))return null;if(Math.abs(validValue)<0||Math.abs(validValue)>32767)return null}return validValue}(value);if(null!==validValue)if("/"===(rawPath=path)||"none"===rawPath)if(document.location.origin.includes(domain)){var cookieToSet=function(name,rawValue,rawPath){var domainValue=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",shouldEncodeValue=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],HOST_PREFIX="__Host-",SECURE_PREFIX="__Secure-",COOKIE_BREAKER=";";if(!shouldEncodeValue&&`${rawValue}`.includes(COOKIE_BREAKER)||name.includes(COOKIE_BREAKER))return null;var resultCookie=`${name}=${shouldEncodeValue?encodeURIComponent(rawValue):rawValue}`;if(name.startsWith(HOST_PREFIX))return resultCookie+="; path=/; secure",domainValue&&console.debug(`Domain value: "${domainValue}" has been ignored, because is not allowed for __Host- prefixed cookies`),resultCookie;var path=function(rawPath){return"/"===rawPath?"path=/":""}(rawPath);return path&&(resultCookie+=`; ${path}`),name.startsWith(SECURE_PREFIX)&&(resultCookie+="; secure"),domainValue&&(resultCookie+=`; domain=${domainValue}`),resultCookie}(name,validValue,path,domain);cookieToSet?(function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source),document.cookie=cookieToSet):logMessage(source,"Invalid cookie name or value")}else logMessage(source,`Cookie domain not matched by origin: \'${domain}\'`);else logMessage(source,`Invalid cookie path: \'${path}\'`);else logMessage(source,`Invalid cookie value: \'${validValue}\'`)}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['set-cookie-reload', 'set-cookie-reload.js', 'ubo-set-cookie-reload.js', 'ubo-set-cookie-reload'],
            scriptlet: 'function setCookieReload(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}function isCookieSetWithValue(cookieString,name,value){return cookieString.split(";").some((function(cookieStr){var pos=cookieStr.indexOf("=");if(-1===pos)return!1;var cookieName=cookieStr.slice(0,pos).trim(),cookieValue=cookieStr.slice(pos+1).trim();return name===cookieName&&value===cookieValue}))}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,name,value){var path=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"/",domain=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if(!isCookieSetWithValue(document.cookie,name,value)){var rawPath,validValue=function(value){if(!value)return null;var validValue,num;if(new Set(["true","t","false","f","yes","y","no","n","ok","on","off","accept","accepted","notaccepted","reject","rejected","allow","allowed","disallow","deny","enable","enabled","disable","disabled","necessary","required","hide","hidden","essential","nonessential","checked","unchecked","forbidden","forever"]).has(value.toLowerCase()))validValue=value;else{if(!/^\\d+$/.test(value))return null;if(num=validValue=parseFloat(value),(Number.isNaN||window.isNaN)(num))return null;if(Math.abs(validValue)<0||Math.abs(validValue)>32767)return null}return validValue}(value);if(null!==validValue)if("/"===(rawPath=path)||"none"===rawPath)if(document.location.origin.includes(domain)){var cookieToSet=function(name,rawValue,rawPath){var domainValue=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",shouldEncodeValue=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],HOST_PREFIX="__Host-",SECURE_PREFIX="__Secure-",COOKIE_BREAKER=";";if(!shouldEncodeValue&&`${rawValue}`.includes(COOKIE_BREAKER)||name.includes(COOKIE_BREAKER))return null;var resultCookie=`${name}=${shouldEncodeValue?encodeURIComponent(rawValue):rawValue}`;if(name.startsWith(HOST_PREFIX))return resultCookie+="; path=/; secure",domainValue&&console.debug(`Domain value: "${domainValue}" has been ignored, because is not allowed for __Host- prefixed cookies`),resultCookie;var path=function(rawPath){return"/"===rawPath?"path=/":""}(rawPath);return path&&(resultCookie+=`; ${path}`),name.startsWith(SECURE_PREFIX)&&(resultCookie+="; secure"),domainValue&&(resultCookie+=`; domain=${domainValue}`),resultCookie}(name,validValue,path,domain);cookieToSet?(document.cookie=cookieToSet,function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source),isCookieSetWithValue(document.cookie,name,value)&&window.location.reload()):logMessage(source,"Invalid cookie name or value")}else logMessage(source,`Cookie domain not matched by origin: \'${domain}\'`);else logMessage(source,`Invalid cookie path: \'${path}\'`);else logMessage(source,`Invalid cookie value: \'${value}\'`)}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'set-local-storage-item',
                'set-local-storage-item.js',
                'ubo-set-local-storage-item.js',
                'ubo-set-local-storage-item',
            ],
            scriptlet: 'function setLocalStorageItem(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,key,value){if(void 0!==key){var validValue;try{validValue=function(value){if("string"!=typeof value)throw new Error("Invalid value");var validValue,num;if(new Set(["undefined","false","true","null","","yes","no","on","off","accept","accepted","reject","rejected","allowed","denied","forbidden","forever"]).has(value.toLowerCase()))validValue=value;else if("emptyArr"===value)validValue="[]";else if("emptyObj"===value)validValue="{}";else if(/^\\d+$/.test(value)){if(num=validValue=parseFloat(value),(Number.isNaN||window.isNaN)(num))throw new Error("Invalid value");if(Math.abs(validValue)>32767)throw new Error("Invalid value")}else{if("$remove$"!==value)throw new Error("Invalid value");validValue="$remove$"}return validValue}(value)}catch(_unused){return void logMessage(source,`Invalid storage item value: \'${value}\'`)}var{localStorage:localStorage}=window;"$remove$"===validValue?function(source,storage,key){try{if(key.startsWith("/")&&(key.endsWith("/")||key.endsWith("/i"))&&function(input){var isValid,FORWARD_SLASH="/",str=function(str){return str.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&")}(input);input[0]===FORWARD_SLASH&&input[input.length-1]===FORWARD_SLASH&&(str=input.slice(1,-1));try{isValid=new RegExp(str),isValid=!0}catch(e){isValid=!1}return isValid}(key)){var regExpKey=function(rawInput){var input=rawInput||"",FORWARD_SLASH="/";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf(FORWARD_SLASH),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),isValidRegExpFlag=function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}},flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith(FORWARD_SLASH)&&regExpStr.endsWith(FORWARD_SLASH)&&!regExpStr.endsWith("\\\\/")&&isValidRegExpFlag(flagsStr)?flagsStr:"");if(input.startsWith(FORWARD_SLASH)&&input.endsWith(FORWARD_SLASH)||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}(key);Object.keys(storage).forEach((function(storageKey){regExpKey.test(storageKey)&&storage.removeItem(storageKey)}))}else storage.removeItem(key)}catch(e){logMessage(source,`Unable to remove storage item due to: ${e.message}`)}}(source,localStorage,key):function(source,storage,key,value){try{storage.setItem(key,value)}catch(e){logMessage(source,`Unable to set storage item due to: ${e.message}`)}}(source,localStorage,key,validValue),function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}else logMessage(source,"Item key should be specified.")}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['set-popads-dummy', 'popads-dummy.js', 'ubo-popads-dummy.js', 'ubo-popads-dummy'],
            scriptlet: 'function setPopadsDummy(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function hit(source){if(source.verbose){try{var trace=console.trace.bind(console),label="[ABY] ";"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){delete window.PopAds,delete window.popns,Object.defineProperties(window,{PopAds:{get:function(){return hit(source),{}}},popns:{get:function(){return hit(source),{}}}})}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: [
                'set-session-storage-item',
                'set-session-storage-item.js',
                'ubo-set-session-storage-item.js',
                'ubo-set-session-storage-item',
            ],
            scriptlet: 'function setSessionStorageItem(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,key,value){if(void 0!==key){var validValue;try{validValue=function(value){if("string"!=typeof value)throw new Error("Invalid value");var validValue,num;if(new Set(["undefined","false","true","null","","yes","no","on","off","accept","accepted","reject","rejected","allowed","denied","forbidden","forever"]).has(value.toLowerCase()))validValue=value;else if("emptyArr"===value)validValue="[]";else if("emptyObj"===value)validValue="{}";else if(/^\\d+$/.test(value)){if(num=validValue=parseFloat(value),(Number.isNaN||window.isNaN)(num))throw new Error("Invalid value");if(Math.abs(validValue)>32767)throw new Error("Invalid value")}else{if("$remove$"!==value)throw new Error("Invalid value");validValue="$remove$"}return validValue}(value)}catch(_unused){return void logMessage(source,`Invalid storage item value: \'${value}\'`)}var{sessionStorage:sessionStorage}=window;"$remove$"===validValue?function(source,storage,key){try{if(key.startsWith("/")&&(key.endsWith("/")||key.endsWith("/i"))&&function(input){var isValid,FORWARD_SLASH="/",str=function(str){return str.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&")}(input);input[0]===FORWARD_SLASH&&input[input.length-1]===FORWARD_SLASH&&(str=input.slice(1,-1));try{isValid=new RegExp(str),isValid=!0}catch(e){isValid=!1}return isValid}(key)){var regExpKey=function(rawInput){var input=rawInput||"",FORWARD_SLASH="/";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf(FORWARD_SLASH),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),isValidRegExpFlag=function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}},flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith(FORWARD_SLASH)&&regExpStr.endsWith(FORWARD_SLASH)&&!regExpStr.endsWith("\\\\/")&&isValidRegExpFlag(flagsStr)?flagsStr:"");if(input.startsWith(FORWARD_SLASH)&&input.endsWith(FORWARD_SLASH)||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}(key);Object.keys(storage).forEach((function(storageKey){regExpKey.test(storageKey)&&storage.removeItem(storageKey)}))}else storage.removeItem(key)}catch(e){logMessage(source,`Unable to remove storage item due to: ${e.message}`)}}(source,sessionStorage,key):function(source,storage,key,value){try{storage.setItem(key,value)}catch(e){logMessage(source,`Unable to set storage item due to: ${e.message}`)}}(source,sessionStorage,key,validValue),function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}else logMessage(source,"Item key should be specified.")}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['spoof-css', 'spoof-css.js', 'ubo-spoof-css.js', 'ubo-spoof-css'],
            scriptlet: 'function spoofCSS(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function hit(source){if(source.verbose){try{var trace=console.trace.bind(console),label="[ABY] ";"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,selectors,cssPropertyName,cssPropertyValue){if(selectors){var shouldDebug=!("debug"!==cssPropertyName||!cssPropertyValue),propToValueMap=new Map;if(["spoof-css.js","ubo-spoof-css.js","ubo-spoof-css"].includes(source.name)){var{args:args}=source,arrayOfProperties=[];arrayOfProperties="debug"===args.at(-2)?args.slice(1,-2):args.slice(1);for(var i=0;i<arrayOfProperties.length&&""!==arrayOfProperties[i];i+=2)propToValueMap.set(convertToCamelCase(arrayOfProperties[i]),arrayOfProperties[i+1])}else cssPropertyName&&cssPropertyValue&&!shouldDebug&&propToValueMap.set(convertToCamelCase(cssPropertyName),cssPropertyValue);var spoofStyle=function(cssProperty,realCssValue){return propToValueMap.has(cssProperty)?propToValueMap.get(cssProperty):realCssValue},setRectValue=function(rect,prop,value){Object.defineProperty(rect,prop,{value:parseFloat(value)})},getter=function(target,prop,receiver){return hit(source),"toString"===prop?target.toString.bind(target):Reflect.get(target,prop,receiver)},getComputedStyleHandler={apply:function(target,thisArg,args){if(shouldDebug)debugger;var style=Reflect.apply(target,thisArg,args);if(!args[0].matches(selectors))return style;var proxiedStyle=new Proxy(style,{get(target,prop){var CSSStyleProp=target[prop];if("function"!=typeof CSSStyleProp)return spoofStyle(prop,CSSStyleProp||"");if("getPropertyValue"!==prop)return CSSStyleProp.bind(target);var getPropertyValueFunc=new Proxy(CSSStyleProp,{apply(target,thisArg,args){var cssName=args[0],cssValue=thisArg[cssName];return spoofStyle(cssName,cssValue)},get:getter});return getPropertyValueFunc},getOwnPropertyDescriptor:(target,prop)=>propToValueMap.has(prop)?{configurable:!0,enumerable:!0,value:propToValueMap.get(prop),writable:!0}:Reflect.getOwnPropertyDescriptor(target,prop)});return hit(source),proxiedStyle},get:getter};window.getComputedStyle=new Proxy(window.getComputedStyle,getComputedStyleHandler);var getBoundingClientRectHandler={apply:function(target,thisArg,args){if(shouldDebug)debugger;var rect=Reflect.apply(target,thisArg,args);if(!thisArg.matches(selectors))return rect;var{top:top,bottom:bottom,height:height,width:width,left:left,right:right}=rect,newDOMRect=new window.DOMRect(rect.x,rect.y,top,bottom,width,height,left,right);return propToValueMap.has("top")&&setRectValue(newDOMRect,"top",propToValueMap.get("top")),propToValueMap.has("bottom")&&setRectValue(newDOMRect,"bottom",propToValueMap.get("bottom")),propToValueMap.has("left")&&setRectValue(newDOMRect,"left",propToValueMap.get("left")),propToValueMap.has("right")&&setRectValue(newDOMRect,"right",propToValueMap.get("right")),propToValueMap.has("height")&&setRectValue(newDOMRect,"height",propToValueMap.get("height")),propToValueMap.has("width")&&setRectValue(newDOMRect,"width",propToValueMap.get("width")),hit(source),newDOMRect},get:getter};window.Element.prototype.getBoundingClientRect=new Proxy(window.Element.prototype.getBoundingClientRect,getBoundingClientRectHandler)}function convertToCamelCase(cssProperty){if(!cssProperty.includes("-"))return cssProperty;var splittedProperty=cssProperty.split("-"),firstPart=splittedProperty[0],secondPart=splittedProperty[1];return`${firstPart}${secondPart[0].toUpperCase()}${secondPart.slice(1)}`}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['trusted-click-element'],
            scriptlet: 'function trustedClickElement(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function toRegExp(rawInput){var input=rawInput||"";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf("/"),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith("/")&&regExpStr.endsWith("/")&&!regExpStr.endsWith("\\\\/")&&function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}}(flagsStr)?flagsStr:"");if(input.startsWith("/")&&input.endsWith("/")||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}function parseCookieString(cookieString){var cookieChunks=cookieString.split(";"),cookieData={};return cookieChunks.forEach((function(singleCookie){var cookieKey,cookieValue="",delimiterIndex=singleCookie.indexOf("=");-1===delimiterIndex?cookieKey=singleCookie.trim():(cookieKey=singleCookie.slice(0,delimiterIndex).trim(),cookieValue=singleCookie.slice(delimiterIndex+1)),cookieData[cookieKey]=cookieValue||null})),cookieData}function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}function parseMatchArg(match){var isInvertedMatch=!!match&&(null==match?void 0:match.startsWith("!")),matchValue=isInvertedMatch?match.slice(1):match;return{isInvertedMatch:isInvertedMatch,matchRegexp:toRegExp(matchValue),matchValue:matchValue}}function queryShadowSelector(selector){var context=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.documentElement,textContent=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,pos=selector.indexOf(" >>> ");if(-1===pos)return textContent?function(rootElement,selector,matchRegexp){for(var elements=rootElement.querySelectorAll(selector),i=0;i<elements.length;i+=1)if(doesElementContainText(elements[i],matchRegexp))return elements[i];return null}(context,selector,textContent):context.querySelector(selector);var shadowHostSelector=selector.slice(0,pos).trim(),elem=context.querySelector(shadowHostSelector);return elem&&elem.shadowRoot?queryShadowSelector(selector.slice(pos+5).trim(),elem.shadowRoot,textContent):null}function doesElementContainText(element,matchRegexp){var{textContent:textContent}=element;return!!textContent&&matchRegexp.test(textContent)}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,selectors){var extraMatch=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",delay=arguments.length>3&&void 0!==arguments[3]?arguments[3]:NaN,reload=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if(selectors){var parsedDelay,sleep=function(delayMs){return new Promise((function(resolve){setTimeout(resolve,delayMs)}))};if(selectors.includes(" >>> ")){var attachShadowHandler={apply:function(target,thisArg,argumentsList){var _argumentsList$;return"closed"===(null===(_argumentsList$=argumentsList[0])||void 0===_argumentsList$?void 0:_argumentsList$.mode)&&(argumentsList[0].mode="open"),Reflect.apply(target,thisArg,argumentsList)}};window.Element.prototype.attachShadow=new Proxy(window.Element.prototype.attachShadow,attachShadowHandler)}if(delay&&(parsedDelay=parseInt(String(delay),10),Number.isNaN(parsedDelay)&&!(parsedDelay<1e4)))return void logMessage(source,`Passed delay \'${delay}\' is invalid or bigger than 10000 ms`);var canClick=!parsedDelay,cookieMatches=[],localStorageMatches=[],textMatches="",isInvertedMatchCookie=!1,isInvertedMatchLocalStorage=!1;if(extraMatch&&extraMatch.split(/(,\\s*){1}(?=!?cookie:|!?localStorage:|containsText:)/).map((function(matchStr){return matchStr.trim()})).forEach((function(matchStr){if(matchStr.includes("cookie:")){var{isInvertedMatch:isInvertedMatch,matchValue:matchValue}=parseMatchArg(matchStr);isInvertedMatchCookie=isInvertedMatch;var cookieMatch=matchValue.replace("cookie:","");cookieMatches.push(cookieMatch)}if(matchStr.includes("localStorage:")){var{isInvertedMatch:_isInvertedMatch,matchValue:_matchValue}=parseMatchArg(matchStr);isInvertedMatchLocalStorage=_isInvertedMatch;var localStorageMatch=_matchValue.replace("localStorage:","");localStorageMatches.push(localStorageMatch)}if(matchStr.includes("containsText:")){var{matchValue:_matchValue2}=parseMatchArg(matchStr),textMatch=_matchValue2.replace("containsText:","");textMatches=textMatch}})),cookieMatches.length>0){var parsedCookieMatches=parseCookieString(cookieMatches.join(";")),parsedCookies=parseCookieString(document.cookie),cookieKeys=Object.keys(parsedCookies);if(0===cookieKeys.length)return;if(Object.keys(parsedCookieMatches).every((function(key){var valueMatch=parsedCookieMatches[key]?toRegExp(parsedCookieMatches[key]):null,keyMatch=toRegExp(key);return cookieKeys.some((function(cookieKey){if(!keyMatch.test(cookieKey))return!1;if(!valueMatch)return!0;var parsedCookieValue=parsedCookies[cookieKey];return!!parsedCookieValue&&valueMatch.test(parsedCookieValue)}))}))===isInvertedMatchCookie)return}if(localStorageMatches.length>0&&localStorageMatches.every((function(str){var itemValue=window.localStorage.getItem(str);return itemValue||""===itemValue}))===isInvertedMatchLocalStorage)return;var textMatchRegexp=textMatches?toRegExp(textMatches):null,selectorsSequence=selectors.split(",").map((function(selector){return selector.trim()})),createElementObj=function(element,selector){return{element:element||null,clicked:!1,selectorText:selector||null}},elementsSequence=Array(selectorsSequence.length).fill(createElementObj(null)),findAndClickElement=function(elementObj){try{if(!elementObj.selectorText)return;var element=queryShadowSelector(elementObj.selectorText);if(!element)return void logMessage(source,`Could not find element: \'${elementObj.selectorText}\'`);element.click(),elementObj.clicked=!0}catch(error){logMessage(source,`Could not click element: \'${elementObj.selectorText}\'`)}},shouldReloadAfterClick=!1,reloadDelayMs=500;if(reload){var reloadSplit=reload.split(":"),reloadMarker=reloadSplit[0],reloadValue=reloadSplit[1];if("reloadAfterClick"!==reloadMarker)return void logMessage(source,`Passed reload option \'${reload}\' is invalid`);if(reloadValue){var passedReload=Number(reloadValue);if(Number.isNaN(passedReload))return void logMessage(source,`Passed reload delay value \'${passedReload}\' is invalid`);if(passedReload>1e4)return void logMessage(source,`Passed reload delay value \'${passedReload}\' is bigger than maximum 10000 ms`);reloadDelayMs=passedReload}shouldReloadAfterClick=!0}var canReload=!0,clickElementsBySequence=async function(){for(var i=0;i<elementsSequence.length;i+=1){var elementObj=elementsSequence[i];if(i>=1&&await sleep(150),!elementObj.element)break;elementObj.clicked||(elementObj.element.isConnected?(elementObj.element.click(),elementObj.clicked=!0):findAndClickElement(elementObj))}var allElementsClicked=elementsSequence.every((function(elementObj){return!0===elementObj.clicked}));allElementsClicked&&(shouldReloadAfterClick&&canReload&&(canReload=!1,setTimeout((function(){window.location.reload()}),reloadDelayMs)),function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source))},fulfillAndHandleSelectors=function(){var fulfilledSelectors=[];return selectorsSequence.forEach((function(selector,i){if(selector){var element=queryShadowSelector(selector,document.documentElement,textMatchRegexp);element&&(function(element,i,selector){var elementObj=createElementObj(element,selector);elementsSequence[i]=elementObj,canClick&&clickElementsBySequence()}(element,i,selector),fulfilledSelectors.push(selector))}})),selectorsSequence=selectorsSequence.map((function(selector){return selector&&fulfilledSelectors.includes(selector)?null:selector}))},findElements=function(mutations,observer){(selectorsSequence=fulfillAndHandleSelectors()).every((function(selector){return null===selector}))&&observer.disconnect()},initializeMutationObserver=function(){var observer=new MutationObserver(function(cb,delay){var savedArgs,wait=!1,_wrapper=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];wait?savedArgs=args:(cb(...args),wait=!0,setTimeout((function(){wait=!1,savedArgs&&(_wrapper(...savedArgs),savedArgs=null)}),delay))};return _wrapper}(findElements,20));observer.observe(document.documentElement,{attributes:!0,childList:!0,subtree:!0}),setTimeout((function(){return observer.disconnect()}),1e4)};selectorsSequence.every((function(selector){return!!selector&&!!queryShadowSelector(selector,document.documentElement,textMatchRegexp)}))?fulfillAndHandleSelectors():initializeMutationObserver(),parsedDelay&&setTimeout((function(){clickElementsBySequence(),canClick=!0}),parsedDelay)}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['trusted-create-element'],
            scriptlet: 'function trustedCreateElement(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,parentSelector,tagName){var attributePairs=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",textContent=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",cleanupDelayMs=arguments.length>5&&void 0!==arguments[5]?arguments[5]:NaN;if(parentSelector&&tagName&&"trusted-create-element-window"!==window.name){var element,logError=function(prefix,error){logMessage(source,`${prefix} due to ${function(error){if("object"==typeof(e=error)&&null!==e&&"message"in e&&"string"==typeof e.message)return error.message;var e;try{return new Error(JSON.stringify(error)).message}catch(_unused){return new Error(String(error)).message}}(error)}`)};try{(element=document.createElement(tagName)).textContent=textContent}catch(e){return void logError(`Cannot create element with tag name \'${tagName}\'`,e)}var timerId,attributes=[];try{attributes=function(input){if(!input)return[];for(var NAME_VALUE_SEPARATOR="=",PAIRS_SEPARATOR=" ",SINGLE_QUOTE="\'",DOUBLE_QUOTE=\'"\',BACKSLASH="\\\\",pairs=[],i=0;i<input.length;i+=1){for(var name="",value="";i<input.length&&input[i]!==NAME_VALUE_SEPARATOR&&input[i]!==PAIRS_SEPARATOR;)name+=input[i],i+=1;if(i<input.length&&input[i]===NAME_VALUE_SEPARATOR){var quote=null;if(input[i+=1]!==SINGLE_QUOTE&&input[i]!==DOUBLE_QUOTE)throw new Error(`Attribute value should be quoted: "${input.slice(i)}"`);for(quote=input[i],i+=1;i<input.length;i+=1)if(input[i]===quote){if(input[i-1]!==BACKSLASH){i+=1,quote=null;break}value=`${value.slice(0,-1)}${quote}`}else value+=input[i];if(null!==quote)throw new Error(`Unbalanced quote for attribute value: \'${input}\'`)}if(name=name.trim(),value=value.trim(),!name){if(!value)continue;throw new Error(`Attribute name before \'=\' should be specified: \'${input}\'`)}if(pairs.push({name:name,value:value}),input[i]&&input[i]!==PAIRS_SEPARATOR)throw new Error(`No space before attribute: \'${input.slice(i)}\'`)}return pairs}(attributePairs)}catch(e){return void logError(`Cannot parse attributePairs param: \'${attributePairs}\'`,e)}attributes.forEach((function(attr){try{element.setAttribute(attr.name,attr.value)}catch(e){logError(`Cannot set attribute \'${attr.name}\' with value \'${attr.value}\'`,e)}}));var elementCreated=!1,elementRemoved=!1,findParentAndAppendEl=function(parentElSelector,el,removeElDelayMs){var parentEl,num;try{parentEl=document.querySelector(parentElSelector)}catch(e){return logError(`Cannot find parent element by selector \'${parentElSelector}\'`,e),!1}if(!parentEl)return logMessage(source,`No parent element found by selector: \'${parentElSelector}\'`),!1;try{parentEl.contains(el)||parentEl.append(el),el instanceof HTMLIFrameElement&&el.contentWindow&&(el.contentWindow.name="trusted-create-element-window"),elementCreated=!0,function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}catch(e){return logError(`Cannot append child to parent by selector \'${parentElSelector}\'`,e),!1}return num=removeElDelayMs,(Number.isNaN||window.isNaN)(num)||(timerId=setTimeout((function(){el.remove(),elementRemoved=!0,clearTimeout(timerId)}),removeElDelayMs)),!0};findParentAndAppendEl(parentSelector,element,cleanupDelayMs)||function(callback){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{subtree:!0,childList:!0},timeout=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4,documentObserver=new MutationObserver((function(mutations,observer){observer.disconnect(),callback(mutations,observer),observer.observe(document.documentElement,options)}));documentObserver.observe(document.documentElement,options),"number"==typeof timeout&&setTimeout((function(){return documentObserver.disconnect()}),timeout)}((function(mutations,observer){(elementRemoved||elementCreated||findParentAndAppendEl(parentSelector,element,cleanupDelayMs))&&observer.disconnect()}))}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['trusted-dispatch-event'],
            scriptlet: 'function trustedDispatchEvent(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,event,target){if(event){var hasBeenDispatched=!1,eventTarget=document;"window"===target&&(eventTarget=window);var events=new Set,dispatch=function(){var customEvent=new Event(event);"string"==typeof target&&"window"!==target&&(eventTarget=document.querySelector(target));var isEventAdded=events.has(event);!hasBeenDispatched&&isEventAdded&&eventTarget&&(hasBeenDispatched=!0,function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source),eventTarget.dispatchEvent(customEvent))},handler={apply:function(eventListener,thisArg,args){var eventName=args[0];return thisArg&&eventName&&(events.add(eventName),setTimeout((function(){dispatch()}),1)),Reflect.apply(eventListener,thisArg,args)}};EventTarget.prototype.addEventListener=new Proxy(EventTarget.prototype.addEventListener,handler)}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['trusted-prune-inbound-object'],
            scriptlet: 'function trustedPruneInboundObject(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function getPropertyInChain(base,chain){var pos=chain.indexOf(".");if(-1===pos)return{base:base,prop:chain};var prop=chain.slice(0,pos);if(null===base)return{base:base,prop:prop,chain:chain};var obj,nextBase=base[prop];return chain=chain.slice(pos+1),(base instanceof Object||"object"==typeof base)&&(obj=base,0===Object.keys(obj).length&&!obj.prototype)||null===nextBase?{base:base,prop:prop,chain:chain}:void 0!==nextBase?getPropertyInChain(nextBase,chain):(Object.defineProperty(base,prop,{configurable:!0}),{base:base,prop:prop,chain:chain})}function getWildcardPropertyInChain(base,chain){var lookThrough=arguments.length>2&&void 0!==arguments[2]&&arguments[2],output=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],pos=chain.indexOf(".");if(-1===pos){if("*"===chain||"[]"===chain)for(var key in base)Object.prototype.hasOwnProperty.call(base,key)&&output.push({base:base,prop:key});else output.push({base:base,prop:chain});return output}var prop=chain.slice(0,pos);if("[]"===prop&&Array.isArray(base)||"*"===prop&&base instanceof Object){var nextProp=chain.slice(pos+1);Object.keys(base).forEach((function(key){getWildcardPropertyInChain(base[key],nextProp,lookThrough,output)}))}Array.isArray(base)&&base.forEach((function(key){void 0!==key&&getWildcardPropertyInChain(key,chain,lookThrough,output)}));var nextBase=base[prop];return chain=chain.slice(pos+1),void 0!==nextBase&&getWildcardPropertyInChain(nextBase,chain,lookThrough,output),output}function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}function getPrunePath(props){return"string"==typeof props&&void 0!==props&&""!==props?props.split(/ +/):[]}function toRegExp(rawInput){var input=rawInput||"";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf("/"),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith("/")&&regExpStr.endsWith("/")&&!regExpStr.endsWith("\\\\/")&&function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}}(flagsStr)?flagsStr:"");if(input.startsWith("/")&&input.endsWith("/")||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}function restoreRegExpValues(array){if(array.length)try{var stringPattern="";stringPattern=1===array.length?`(${array[0]})`:array.reduce((function(accumulator,currentValue,currentIndex){return 1===currentIndex?`(${accumulator}),(${currentValue})`:`${accumulator},(${currentValue})`}));var regExpGroup=new RegExp(stringPattern);array.toString().replace(regExpGroup,"")}catch(error){var message=`Failed to restore RegExp values: ${error}`;console.log(message)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,functionName,propsToRemove,requiredInitialProps){var stack=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if(functionName){var nativeObjects={nativeStringify:window.JSON.stringify},{base:base,prop:prop}=getPropertyInChain(window,functionName);if(base&&prop&&"function"==typeof base[prop]){var prunePaths=getPrunePath(propsToRemove),requiredPaths=getPrunePath(requiredInitialProps),objectHandler={apply:function(target,thisArg,args){var data=args[0];return"object"==typeof data&&(data=function(source,root,prunePaths,requiredPaths,stack,nativeObjects){var{nativeStringify:nativeStringify}=nativeObjects;if(0===prunePaths.length&&0===requiredPaths.length)return logMessage(source,`${window.location.hostname}\\n${nativeStringify(root,null,2)}\\nStack trace:\\n${(new Error).stack}`,!0),root&&"object"==typeof root&&logMessage(source,root,!0,!1),root;try{if(!1===function(source,root,prunePaths,requiredPaths,stack,nativeObjects){if(!root)return!1;var shouldProcess,{nativeStringify:nativeStringify}=nativeObjects;if(0===prunePaths.length&&requiredPaths.length>0){var rootString=nativeStringify(root);if(toRegExp(requiredPaths.join("")).test(rootString))return logMessage(source,`${window.location.hostname}\\n${nativeStringify(root,null,2)}\\nStack trace:\\n${(new Error).stack}`,!0),root&&"object"==typeof root&&logMessage(source,root,!0,!1),shouldProcess=!1}if(stack&&!function(stackMatch,stackTrace){if(!stackMatch||""===stackMatch)return!0;var regExpValues=function(){try{for(var arrayOfRegexpValues=[],index=1;index<10;index+=1){var value=`$${index}`;if(!RegExp[value])break;arrayOfRegexpValues.push(RegExp[value])}return arrayOfRegexpValues}catch(error){return[]}}();if(function(stackMatch,stackTrace){var INLINE_SCRIPT_STRING="inlineScript",INJECTED_SCRIPT_STRING="injectedScript",INJECTED_SCRIPT_MARKER="<anonymous>",isInlineScript=function(match){return match.includes(INLINE_SCRIPT_STRING)},isInjectedScript=function(match){return match.includes(INJECTED_SCRIPT_STRING)};if(!isInlineScript(stackMatch)&&!isInjectedScript(stackMatch))return!1;var documentURL=window.location.href,pos=documentURL.indexOf("#");-1!==pos&&(documentURL=documentURL.slice(0,pos));var stackLines=stackTrace.split("\\n").slice(2).map((function(line){return line.trim()})).map((function(line){var stack,getStackTraceValues=/(.*?@)?(\\S+)(:\\d+)(:\\d+)\\)?$/.exec(line);if(getStackTraceValues){var _stackURL,_stackURL2,stackURL=getStackTraceValues[2],stackLine=getStackTraceValues[3],stackCol=getStackTraceValues[4];if(null!==(_stackURL=stackURL)&&void 0!==_stackURL&&_stackURL.startsWith("(")&&(stackURL=stackURL.slice(1)),null!==(_stackURL2=stackURL)&&void 0!==_stackURL2&&_stackURL2.startsWith(INJECTED_SCRIPT_MARKER)){var _stackFunction;stackURL=INJECTED_SCRIPT_STRING;var stackFunction=void 0!==getStackTraceValues[1]?getStackTraceValues[1].slice(0,-1):line.slice(0,getStackTraceValues.index).trim();null!==(_stackFunction=stackFunction)&&void 0!==_stackFunction&&_stackFunction.startsWith("at")&&(stackFunction=stackFunction.slice(2).trim()),stack=`${stackFunction} ${stackURL}${stackLine}${stackCol}`.trim()}else stack=stackURL===documentURL?`${INLINE_SCRIPT_STRING}${stackLine}${stackCol}`.trim():`${stackURL}${stackLine}${stackCol}`.trim()}else stack=line;return stack}));if(stackLines)for(var index=0;index<stackLines.length;index+=1){if(isInlineScript(stackMatch)&&stackLines[index].startsWith(INLINE_SCRIPT_STRING)&&stackLines[index].match(toRegExp(stackMatch)))return!0;if(isInjectedScript(stackMatch)&&stackLines[index].startsWith(INJECTED_SCRIPT_STRING)&&stackLines[index].match(toRegExp(stackMatch)))return!0}return!1}(stackMatch,stackTrace))return regExpValues.length&&regExpValues[0]!==RegExp.$1&&restoreRegExpValues(regExpValues),!0;var stackRegexp=toRegExp(stackMatch),refinedStackTrace=stackTrace.split("\\n").slice(2).map((function(line){return line.trim()})).join("\\n");return regExpValues.length&&regExpValues[0]!==RegExp.$1&&restoreRegExpValues(regExpValues),function(){var descriptor=Object.getOwnPropertyDescriptor(RegExp.prototype,"test"),nativeRegexTest=null==descriptor?void 0:descriptor.value;if(descriptor&&"function"==typeof descriptor.value)return nativeRegexTest;throw new Error("RegExp.prototype.test is not a function")}().call(stackRegexp,refinedStackTrace)}(stack,(new Error).stack||""))return shouldProcess=!1;for(var _ret,wildcardSymbols=[".*.","*.",".*",".[].","[].",".[]"],_loop=function(){var requiredPath=requiredPaths[i],lastNestedPropName=requiredPath.split(".").pop(),hasWildcard=wildcardSymbols.some((function(symbol){return requiredPath.includes(symbol)})),details=getWildcardPropertyInChain(root,requiredPath,hasWildcard);if(!details.length)return{v:shouldProcess=!1};shouldProcess=!hasWildcard;for(var j=0;j<details.length;j+=1){var hasRequiredProp="string"==typeof lastNestedPropName&&void 0!==details[j].base[lastNestedPropName];shouldProcess=hasWildcard?hasRequiredProp||shouldProcess:hasRequiredProp&&shouldProcess}},i=0;i<requiredPaths.length;i+=1)if(_ret=_loop())return _ret.v;return shouldProcess}(source,root,prunePaths,requiredPaths,stack,nativeObjects))return root;prunePaths.forEach((function(path){getWildcardPropertyInChain(root,path,!0).forEach((function(ownerObj){void 0!==ownerObj&&ownerObj.base&&(delete ownerObj.base[ownerObj.prop],function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source))}))}))}catch(e){logMessage(source,e)}return root}(source,data,prunePaths,requiredPaths,stack,nativeObjects),args[0]=data),Reflect.apply(target,thisArg,args)}};base[prop]=new Proxy(base[prop],objectHandler)}else logMessage(source,`${functionName} is not a function`)}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['trusted-replace-fetch-response'],
            scriptlet: 'function trustedReplaceFetchResponse(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function hit(source){if(source.verbose){try{var trace=console.trace.bind(console),label="[ABY] ";"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}function objectToString(obj){return obj&&"object"==typeof obj?function(obj){return 0===Object.keys(obj).length&&!obj.prototype}(obj)?"{}":Object.entries(obj).map((function(pair){var key=pair[0],value=pair[1],recordValueStr=value;return value instanceof Object&&(recordValueStr=`{ ${objectToString(value)} }`),`${key}:"${recordValueStr}"`})).join(" "):String(obj)}function toRegExp(rawInput){var input=rawInput||"";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf("/"),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith("/")&&regExpStr.endsWith("/")&&!regExpStr.endsWith("\\\\/")&&function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}}(flagsStr)?flagsStr:"");if(input.startsWith("/")&&input.endsWith("/")||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){var pattern=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",replacement=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",propsToMatch=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if("undefined"!=typeof fetch&&"undefined"!=typeof Proxy&&"undefined"!=typeof Response)if(""!==pattern||""===replacement){var fetchData,shouldLog=""===pattern&&""===replacement,shouldLogContent="true"===(arguments.length>4&&void 0!==arguments[4]&&arguments[4]),nativeRequestClone=Request.prototype.clone,nativeFetch=fetch,shouldReplace=!1,fetchHandler={apply:function(target,thisArg,args){return fetchData=function(args,nativeRequestClone){var fetchUrl,fetchInit,request,entries,fetchPropsObj={},resource=args[0];if(resource instanceof Request){var realData=nativeRequestClone.call(resource),requestData=(request=realData,entries=["url","method","headers","body","credentials","cache","redirect","referrer","referrerPolicy","integrity","keepalive","signal","mode"].map((function(key){return[key,request[key]]})),Object.fromEntries(entries));fetchUrl=requestData.url,fetchInit=requestData}else fetchUrl=resource,fetchInit=args[1];return fetchPropsObj.url=fetchUrl,fetchInit instanceof Object&&Object.keys(fetchInit).forEach((function(prop){fetchPropsObj[prop]=fetchInit[prop]})),fetchPropsObj}(args,nativeRequestClone),shouldLog?(logMessage(source,`fetch( ${objectToString(fetchData)} )`,!0),hit(source),Reflect.apply(target,thisArg,args)):(shouldReplace=function(source,propsToMatch,requestData){if(""===propsToMatch||"*"===propsToMatch)return!0;var isMatched,PROPS_DIVIDER,PAIRS_MARKER,isRequestProp,propsObj,data,parsedData=(PROPS_DIVIDER=" ",PAIRS_MARKER=":",isRequestProp=function(prop){return["url","method","headers","body","credentials","cache","redirect","referrer","referrerPolicy","integrity","keepalive","signal","mode"].includes(prop)},propsObj={},propsToMatch.split(PROPS_DIVIDER).forEach((function(prop){var dividerInd=prop.indexOf(PAIRS_MARKER),key=prop.slice(0,dividerInd);if(isRequestProp(key)){var value=prop.slice(dividerInd+1);propsObj[key]=value}else propsObj.url=prop})),propsObj);if(data=parsedData,Object.values(data).every((function(value){return function(input){var isValid,FORWARD_SLASH="/",str=function(str){return str.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&")}(input);input[0]===FORWARD_SLASH&&input[input.length-1]===FORWARD_SLASH&&(str=input.slice(1,-1));try{isValid=new RegExp(str),isValid=!0}catch(e){isValid=!1}return isValid}(value)}))){var matchData=function(data){var matchData={};return Object.keys(data).forEach((function(key){matchData[key]=toRegExp(data[key])})),matchData}(parsedData);isMatched=Object.keys(matchData).every((function(matchKey){var matchValue=matchData[matchKey],dataValue=requestData[matchKey];return Object.prototype.hasOwnProperty.call(requestData,matchKey)&&"string"==typeof dataValue&&(null==matchValue?void 0:matchValue.test(dataValue))}))}else logMessage(source,`Invalid parameter: ${propsToMatch}`),isMatched=!1;return isMatched}(source,propsToMatch,fetchData),shouldReplace?nativeFetch.apply(null,args).then((function(response){return response.text().then((function(bodyText){var patternRegexp="*"===pattern?/(\\n|.)*/:toRegExp(pattern);shouldLogContent&&logMessage(source,`Original text content: ${bodyText}`);var modifiedTextContent=bodyText.replace(patternRegexp,replacement);shouldLogContent&&logMessage(source,`Modified text content: ${modifiedTextContent}`);var forgedResponse=function(response,textContent){var{bodyUsed:bodyUsed,headers:headers,ok:ok,redirected:redirected,status:status,statusText:statusText,type:type,url:url}=response,forgedResponse=new Response(textContent,{status:status,statusText:statusText,headers:headers});return Object.defineProperties(forgedResponse,{url:{value:url},type:{value:type},ok:{value:ok},bodyUsed:{value:bodyUsed},redirected:{value:redirected}}),forgedResponse}(response,modifiedTextContent);return hit(source),forgedResponse})).catch((function(){var fetchDataStr=objectToString(fetchData);return logMessage(source,`Response body can\'t be converted to text: ${fetchDataStr}`),Reflect.apply(target,thisArg,args)}))})).catch((function(){return Reflect.apply(target,thisArg,args)})):Reflect.apply(target,thisArg,args))}};fetch=new Proxy(fetch,fetchHandler)}else logMessage(source,"Pattern argument should not be empty string")}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['trusted-replace-node-text'],
            scriptlet: 'function trustedReplaceNodeText(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function handleExistingNodes(selector,handler,parentSelector){(parentSelector?document.querySelectorAll(parentSelector):[document]).forEach((function(parent){return function(parent){if("#text"===selector){var textNodes=nodeListToArray(parent.childNodes).filter((function(node){return node.nodeType===Node.TEXT_NODE}));handler(textNodes)}else{var _nodes=nodeListToArray(parent.querySelectorAll(selector));handler(_nodes)}}(parent)}))}function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}function nodeListToArray(nodeList){for(var nodes=[],i=0;i<nodeList.length;i+=1)nodes.push(nodeList[i]);return nodes}function toRegExp(rawInput){var input=rawInput||"";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf("/"),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith("/")&&regExpStr.endsWith("/")&&!regExpStr.endsWith("\\\\/")&&function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}}(flagsStr)?flagsStr:"");if(input.startsWith("/")&&input.endsWith("/")||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,nodeName,textMatch,pattern,replacement){for(var{selector:selector,nodeNameMatch:nodeNameMatch,textContentMatch:textContentMatch,patternMatch:patternMatch}=function(nodeName,textMatch){var patternMatch,pattern=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,REGEXP_START_MARKER="/",isStringNameMatch=!(nodeName.startsWith(REGEXP_START_MARKER)&&nodeName.endsWith(REGEXP_START_MARKER)),selector=isStringNameMatch?nodeName:"*",nodeNameMatch=isStringNameMatch?nodeName:toRegExp(nodeName),textContentMatch=textMatch.startsWith(REGEXP_START_MARKER)?toRegExp(textMatch):textMatch;return pattern&&(patternMatch=pattern.startsWith(REGEXP_START_MARKER)?toRegExp(pattern):pattern),{selector:selector,nodeNameMatch:nodeNameMatch,textContentMatch:textContentMatch,patternMatch:patternMatch}}(nodeName,textMatch,pattern),_len=arguments.length,extraArgs=new Array(_len>5?_len-5:0),_key=5;_key<_len;_key++)extraArgs[_key-5]=arguments[_key];var shouldLog=extraArgs.includes("verbose"),handleNodes=function(nodes){return nodes.forEach((function(node){var shouldReplace=function(node,nodeNameMatch,textContentMatch){var{nodeName:nodeName,textContent:textContent}=node,nodeNameLowerCase=nodeName.toLowerCase();return null!==textContent&&""!==textContent&&(nodeNameMatch instanceof RegExp?nodeNameMatch.test(nodeNameLowerCase):nodeNameMatch===nodeNameLowerCase)&&(textContentMatch instanceof RegExp?textContentMatch.test(textContent):textContent.includes(textContentMatch))}(node,nodeNameMatch,textContentMatch);if(shouldReplace){if(shouldLog){var originalText=node.textContent;originalText&&logMessage(source,`Original text content: ${originalText}`)}if(function(source,node,pattern,replacement){var{textContent:textContent}=node;if(textContent){if("SCRIPT"===node.nodeName&&window.trustedTypes&&window.trustedTypes.createPolicy){var policy=window.trustedTypes.createPolicy("AGPolicy",{createScript:function(string){return string}}),modifiedText=textContent.replace(pattern,replacement),trustedReplacement=policy.createScript(modifiedText);node.textContent=trustedReplacement}else node.textContent=textContent.replace(pattern,replacement);!function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}}(source,node,patternMatch,replacement),shouldLog){var modifiedText=node.textContent;modifiedText&&logMessage(source,`Modified text content: ${modifiedText}`)}}}))};document.documentElement&&handleExistingNodes(selector,handleNodes),function(callback){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{subtree:!0,childList:!0},timeout=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4,documentObserver=new MutationObserver((function(mutations,observer){observer.disconnect(),callback(mutations,observer),observer.observe(document.documentElement,options)}));documentObserver.observe(document.documentElement,options),"number"==typeof timeout&&setTimeout((function(){return documentObserver.disconnect()}),timeout)}((function(mutations){return function(mutations,handler,selector,parentSelector){var addedNodes=function(mutations){for(var nodes=[],i=0;i<mutations.length;i+=1)for(var{addedNodes:addedNodes}=mutations[i],j=0;j<addedNodes.length;j+=1)nodes.push(addedNodes[j]);return nodes}(mutations);selector&&parentSelector?addedNodes.forEach((function(){handleExistingNodes(selector,handler,parentSelector)})):handler(addedNodes)}(mutations,handleNodes)}))}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['trusted-replace-outbound-text'],
            scriptlet: 'function trustedReplaceOutboundText(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function getPropertyInChain(base,chain){var pos=chain.indexOf(".");if(-1===pos)return{base:base,prop:chain};var prop=chain.slice(0,pos);if(null===base)return{base:base,prop:prop,chain:chain};var obj,nextBase=base[prop];return chain=chain.slice(pos+1),(base instanceof Object||"object"==typeof base)&&(obj=base,0===Object.keys(obj).length&&!obj.prototype)||null===nextBase?{base:base,prop:prop,chain:chain}:void 0!==nextBase?getPropertyInChain(nextBase,chain):(Object.defineProperty(base,prop,{configurable:!0}),{base:base,prop:prop,chain:chain})}function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}function toRegExp(rawInput){var input=rawInput||"";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf("/"),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith("/")&&regExpStr.endsWith("/")&&!regExpStr.endsWith("\\\\/")&&function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}}(flagsStr)?flagsStr:"");if(input.startsWith("/")&&input.endsWith("/")||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}function restoreRegExpValues(array){if(array.length)try{var stringPattern="";stringPattern=1===array.length?`(${array[0]})`:array.reduce((function(accumulator,currentValue,currentIndex){return 1===currentIndex?`(${accumulator}),(${currentValue})`:`${accumulator},(${currentValue})`}));var regExpGroup=new RegExp(stringPattern);array.toString().replace(regExpGroup,"")}catch(error){var message=`Failed to restore RegExp values: ${error}`;console.log(message)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,methodPath){var textToReplace=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",replacement=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",decodeMethod=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",stack=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",logContent=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";if(methodPath){var getPathParts=getPropertyInChain,{base:base,chain:chain,prop:prop}=getPathParts(window,methodPath);if(void 0===chain){var nativeMethod=base[prop];if(nativeMethod&&"function"==typeof nativeMethod){var decodeAndReplaceContent=function(content,pattern,textReplacement,decode,log){if("base64"===decode)try{if(!function(str){try{if(""===str)return!1;var decodedString=atob(str),encodedString=btoa(decodedString),stringWithoutPadding=str.replace(/=+$/,"");return encodedString.replace(/=+$/,"")===stringWithoutPadding}catch(e){return!1}}(content))return logMessage(source,`Text content is not a valid base64 encoded string: ${content}`),content;var decodedContent=atob(content);log&&logMessage(source,`Decoded text content: ${decodedContent}`);var modifiedContent=textToReplace?decodedContent.replace(pattern,textReplacement):decodedContent;return log&&logMessage(source,modifiedContent!==decodedContent?`Modified decoded text content: ${modifiedContent}`:"Decoded text content was not modified"),btoa(modifiedContent)}catch(e){return content}return content.replace(pattern,textReplacement)},logOriginalContent=!textToReplace||!!logContent,logModifiedContent=!!logContent,logDecodedContent=!!decodeMethod&&!!logContent,isMatchingSuspended=!1,objectHandler={apply:function(target,thisArg,argumentsList){if(isMatchingSuspended)return Reflect.apply(target,thisArg,argumentsList);isMatchingSuspended=!0,function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source);var result=Reflect.apply(target,thisArg,argumentsList);if(stack&&!function(stackMatch,stackTrace){if(!stackMatch||""===stackMatch)return!0;var regExpValues=function(){try{for(var arrayOfRegexpValues=[],index=1;index<10;index+=1){var value=`$${index}`;if(!RegExp[value])break;arrayOfRegexpValues.push(RegExp[value])}return arrayOfRegexpValues}catch(error){return[]}}();if(function(stackMatch,stackTrace){var INLINE_SCRIPT_STRING="inlineScript",INJECTED_SCRIPT_STRING="injectedScript",INJECTED_SCRIPT_MARKER="<anonymous>",isInlineScript=function(match){return match.includes(INLINE_SCRIPT_STRING)},isInjectedScript=function(match){return match.includes(INJECTED_SCRIPT_STRING)};if(!isInlineScript(stackMatch)&&!isInjectedScript(stackMatch))return!1;var documentURL=window.location.href,pos=documentURL.indexOf("#");-1!==pos&&(documentURL=documentURL.slice(0,pos));var stackLines=stackTrace.split("\\n").slice(2).map((function(line){return line.trim()})).map((function(line){var stack,getStackTraceValues=/(.*?@)?(\\S+)(:\\d+)(:\\d+)\\)?$/.exec(line);if(getStackTraceValues){var _stackURL,_stackURL2,stackURL=getStackTraceValues[2],stackLine=getStackTraceValues[3],stackCol=getStackTraceValues[4];if(null!==(_stackURL=stackURL)&&void 0!==_stackURL&&_stackURL.startsWith("(")&&(stackURL=stackURL.slice(1)),null!==(_stackURL2=stackURL)&&void 0!==_stackURL2&&_stackURL2.startsWith(INJECTED_SCRIPT_MARKER)){var _stackFunction;stackURL=INJECTED_SCRIPT_STRING;var stackFunction=void 0!==getStackTraceValues[1]?getStackTraceValues[1].slice(0,-1):line.slice(0,getStackTraceValues.index).trim();null!==(_stackFunction=stackFunction)&&void 0!==_stackFunction&&_stackFunction.startsWith("at")&&(stackFunction=stackFunction.slice(2).trim()),stack=`${stackFunction} ${stackURL}${stackLine}${stackCol}`.trim()}else stack=stackURL===documentURL?`${INLINE_SCRIPT_STRING}${stackLine}${stackCol}`.trim():`${stackURL}${stackLine}${stackCol}`.trim()}else stack=line;return stack}));if(stackLines)for(var index=0;index<stackLines.length;index+=1){if(isInlineScript(stackMatch)&&stackLines[index].startsWith(INLINE_SCRIPT_STRING)&&stackLines[index].match(toRegExp(stackMatch)))return!0;if(isInjectedScript(stackMatch)&&stackLines[index].startsWith(INJECTED_SCRIPT_STRING)&&stackLines[index].match(toRegExp(stackMatch)))return!0}return!1}(stackMatch,stackTrace))return regExpValues.length&&regExpValues[0]!==RegExp.$1&&restoreRegExpValues(regExpValues),!0;var stackRegexp=toRegExp(stackMatch),refinedStackTrace=stackTrace.split("\\n").slice(2).map((function(line){return line.trim()})).join("\\n");return regExpValues.length&&regExpValues[0]!==RegExp.$1&&restoreRegExpValues(regExpValues),function(){var descriptor=Object.getOwnPropertyDescriptor(RegExp.prototype,"test"),nativeRegexTest=null==descriptor?void 0:descriptor.value;if(descriptor&&"function"==typeof descriptor.value)return nativeRegexTest;throw new Error("RegExp.prototype.test is not a function")}().call(stackRegexp,refinedStackTrace)}(stack,(new Error).stack||""))return result;if("string"==typeof result){logOriginalContent&&logMessage(source,`Original text content: ${result}`);var patternRegexp=toRegExp(textToReplace),modifiedContent=textToReplace||logDecodedContent?decodeAndReplaceContent(result,patternRegexp,replacement,decodeMethod,logContent):result;return logModifiedContent&&logMessage(source,modifiedContent!==result?`Modified text content: ${modifiedContent}`:"Text content was not modified"),isMatchingSuspended=!1,modifiedContent}return isMatchingSuspended=!1,logMessage(source,"Content is not a string"),result}};base[prop]=new Proxy(nativeMethod,objectHandler)}else logMessage(source,`Could not retrieve the method: ${methodPath}`)}else logMessage(source,`Could not reach the end of the prop chain: ${methodPath}`)}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['trusted-replace-xhr-response'],
            scriptlet: 'function trustedReplaceXhrResponse(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function hit(source){if(source.verbose){try{var trace=console.trace.bind(console),label="[ABY] ";"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}function toRegExp(rawInput){var input=rawInput||"";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf("/"),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith("/")&&regExpStr.endsWith("/")&&!regExpStr.endsWith("\\\\/")&&function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}}(flagsStr)?flagsStr:"");if(input.startsWith("/")&&input.endsWith("/")||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}function objectToString(obj){return obj&&"object"==typeof obj?function(obj){return 0===Object.keys(obj).length&&!obj.prototype}(obj)?"{}":Object.entries(obj).map((function(pair){var key=pair[0],value=pair[1],recordValueStr=value;return value instanceof Object&&(recordValueStr=`{ ${objectToString(value)} }`),`${key}:"${recordValueStr}"`})).join(" "):String(obj)}function getXhrData(method,url,async,user,password){return{method:method,url:url,async:async,user:user,password:password}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source){var pattern=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",replacement=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",propsToMatch=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if("undefined"!=typeof Proxy)if(""!==pattern||""===replacement){var xhrData,shouldLog=""===pattern&&""===replacement,shouldLogContent="true"===(arguments.length>4&&void 0!==arguments[4]&&arguments[4]),nativeOpen=window.XMLHttpRequest.prototype.open,nativeSend=window.XMLHttpRequest.prototype.send,openHandler={apply:function(target,thisArg,args){if(xhrData=getXhrData.apply(null,args),shouldLog){var _message=`xhr( ${objectToString(xhrData)} )`;return logMessage(source,_message,!0),hit(source),Reflect.apply(target,thisArg,args)}if(function(source,propsToMatch,requestData){if(""===propsToMatch||"*"===propsToMatch)return!0;var isMatched,PROPS_DIVIDER,PAIRS_MARKER,isRequestProp,propsObj,data,parsedData=(PROPS_DIVIDER=" ",PAIRS_MARKER=":",isRequestProp=function(prop){return["url","method","headers","body","credentials","cache","redirect","referrer","referrerPolicy","integrity","keepalive","signal","mode"].includes(prop)},propsObj={},propsToMatch.split(PROPS_DIVIDER).forEach((function(prop){var dividerInd=prop.indexOf(PAIRS_MARKER),key=prop.slice(0,dividerInd);if(isRequestProp(key)){var value=prop.slice(dividerInd+1);propsObj[key]=value}else propsObj.url=prop})),propsObj);if(data=parsedData,Object.values(data).every((function(value){return function(input){var isValid,FORWARD_SLASH="/",str=function(str){return str.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&")}(input);input[0]===FORWARD_SLASH&&input[input.length-1]===FORWARD_SLASH&&(str=input.slice(1,-1));try{isValid=new RegExp(str),isValid=!0}catch(e){isValid=!1}return isValid}(value)}))){var matchData=function(data){var matchData={};return Object.keys(data).forEach((function(key){matchData[key]=toRegExp(data[key])})),matchData}(parsedData);isMatched=Object.keys(matchData).every((function(matchKey){var matchValue=matchData[matchKey],dataValue=requestData[matchKey];return Object.prototype.hasOwnProperty.call(requestData,matchKey)&&"string"==typeof dataValue&&(null==matchValue?void 0:matchValue.test(dataValue))}))}else logMessage(source,`Invalid parameter: ${propsToMatch}`),isMatched=!1;return isMatched}(source,propsToMatch,xhrData)&&(thisArg.shouldBePrevented=!0,thisArg.headersReceived=!!thisArg.headersReceived),thisArg.shouldBePrevented&&!thisArg.headersReceived){thisArg.headersReceived=!0,thisArg.collectedHeaders=[];var setRequestHeaderHandler={apply:function(target,thisArg,args){return thisArg.collectedHeaders.push(args),Reflect.apply(target,thisArg,args)}};thisArg.setRequestHeader=new Proxy(thisArg.setRequestHeader,setRequestHeaderHandler)}return Reflect.apply(target,thisArg,args)}},sendHandler={apply:function(target,thisArg,args){if(!thisArg.shouldBePrevented)return Reflect.apply(target,thisArg,args);var forgedRequest=new XMLHttpRequest;forgedRequest.addEventListener("readystatechange",(function(){if(4===forgedRequest.readyState){var{readyState:readyState,response:response,responseText:responseText,responseURL:responseURL,responseXML:responseXML,status:status,statusText:statusText}=forgedRequest,content=responseText||response;if("string"==typeof content){var patternRegexp="*"===pattern?/(\\n|.)*/:toRegExp(pattern);shouldLogContent&&logMessage(source,`Original text content: ${content}`);var modifiedContent=content.replace(patternRegexp,replacement);shouldLogContent&&logMessage(source,`Modified text content: ${modifiedContent}`),Object.defineProperties(thisArg,{readyState:{value:readyState,writable:!1},responseURL:{value:responseURL,writable:!1},responseXML:{value:responseXML,writable:!1},status:{value:status,writable:!1},statusText:{value:statusText,writable:!1},response:{value:modifiedContent,writable:!1},responseText:{value:modifiedContent,writable:!1}}),setTimeout((function(){var stateEvent=new Event("readystatechange");thisArg.dispatchEvent(stateEvent);var loadEvent=new Event("load");thisArg.dispatchEvent(loadEvent);var loadEndEvent=new Event("loadend");thisArg.dispatchEvent(loadEndEvent)}),1),hit(source)}}})),nativeOpen.apply(forgedRequest,[xhrData.method,xhrData.url]),thisArg.collectedHeaders.forEach((function(header){var name=header[0],value=header[1];forgedRequest.setRequestHeader(name,value)})),thisArg.collectedHeaders=[];try{nativeSend.call(forgedRequest,args)}catch(_unused){return Reflect.apply(target,thisArg,args)}}};XMLHttpRequest.prototype.open=new Proxy(XMLHttpRequest.prototype.open,openHandler),XMLHttpRequest.prototype.send=new Proxy(XMLHttpRequest.prototype.send,sendHandler)}else logMessage(source,"Pattern argument should not be empty string.")}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['trusted-set-attr'],
            scriptlet: 'function trustedSetAttr(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function setAttributeBySelector(source,selector,attribute,value){var elements,attributeSetter=arguments.length>4&&void 0!==arguments[4]?arguments[4]:defaultAttributeSetter;try{elements=document.querySelectorAll(selector)}catch(_unused){return void logMessage(source,`Failed to find elements matching selector "${selector}"`)}if(elements&&0!==elements.length)try{elements.forEach((function(elem){return attributeSetter(elem,attribute,value)})),function(source){var ABY_PREFIX="[ABY]";if(!source.verbose)return;try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}(source)}catch(_unused2){logMessage(source,`Failed to set [${attribute}="${value}"] to each of selected elements.`)}}function defaultAttributeSetter(elem,attribute,value){return elem.setAttribute(attribute,value)}function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,selector,attr){var value=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";selector&&attr&&(setAttributeBySelector(source,selector,attr,value),function(callback){var cb,delay,savedArgs,wait,_wrapper,observeAttrs=arguments.length>1&&void 0!==arguments[1]&&arguments[1],attrsToObserve=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],observer=new MutationObserver((cb=callbackWrapper,delay=20,wait=!1,_wrapper=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];wait?savedArgs=args:(cb(...args),wait=!0,setTimeout((function(){wait=!1,savedArgs&&(_wrapper(...savedArgs),savedArgs=null)}),delay))},_wrapper)),connect=function(){attrsToObserve.length>0?observer.observe(document.documentElement,{childList:!0,subtree:!0,attributes:observeAttrs,attributeFilter:attrsToObserve}):observer.observe(document.documentElement,{childList:!0,subtree:!0,attributes:observeAttrs})},disconnect=function(){observer.disconnect()};function callbackWrapper(){disconnect(),callback(),connect()}connect()}((function(){return setAttributeBySelector(source,selector,attr,value)}),!0))}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['trusted-set-constant'],
            scriptlet: 'function trustedSetConstant(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}function getPropertyInChain(base,chain){var pos=chain.indexOf(".");if(-1===pos)return{base:base,prop:chain};var prop=chain.slice(0,pos);if(null===base)return{base:base,prop:prop,chain:chain};var nextBase=base[prop];return chain=chain.slice(pos+1),(base instanceof Object||"object"==typeof base)&&isEmptyObject(base)||null===nextBase?{base:base,prop:prop,chain:chain}:void 0!==nextBase?getPropertyInChain(nextBase,chain):(Object.defineProperty(base,prop,{configurable:!0}),{base:base,prop:prop,chain:chain})}function toRegExp(rawInput){var input=rawInput||"";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf("/"),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith("/")&&regExpStr.endsWith("/")&&!regExpStr.endsWith("\\\\/")&&function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}}(flagsStr)?flagsStr:"");if(input.startsWith("/")&&input.endsWith("/")||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}function isEmptyObject(obj){return 0===Object.keys(obj).length&&!obj.prototype}function restoreRegExpValues(array){if(array.length)try{var stringPattern="";stringPattern=1===array.length?`(${array[0]})`:array.reduce((function(accumulator,currentValue,currentIndex){return 1===currentIndex?`(${accumulator}),(${currentValue})`:`${accumulator},(${currentValue})`}));var regExpGroup=new RegExp(stringPattern);array.toString().replace(regExpGroup,"")}catch(error){var message=`Failed to restore RegExp values: ${error}`;console.log(message)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,property,value,stack){if(property&&function(stackMatch,stackTrace){if(!stackMatch||""===stackMatch)return!0;var regExpValues=function(){try{for(var arrayOfRegexpValues=[],index=1;index<10;index+=1){var value=`$${index}`;if(!RegExp[value])break;arrayOfRegexpValues.push(RegExp[value])}return arrayOfRegexpValues}catch(error){return[]}}();if(function(stackMatch,stackTrace){var INLINE_SCRIPT_STRING="inlineScript",INJECTED_SCRIPT_STRING="injectedScript",INJECTED_SCRIPT_MARKER="<anonymous>",isInlineScript=function(match){return match.includes(INLINE_SCRIPT_STRING)},isInjectedScript=function(match){return match.includes(INJECTED_SCRIPT_STRING)};if(!isInlineScript(stackMatch)&&!isInjectedScript(stackMatch))return!1;var documentURL=window.location.href,pos=documentURL.indexOf("#");-1!==pos&&(documentURL=documentURL.slice(0,pos));var stackLines=stackTrace.split("\\n").slice(2).map((function(line){return line.trim()})).map((function(line){var stack,getStackTraceValues=/(.*?@)?(\\S+)(:\\d+)(:\\d+)\\)?$/.exec(line);if(getStackTraceValues){var _stackURL,_stackURL2,stackURL=getStackTraceValues[2],stackLine=getStackTraceValues[3],stackCol=getStackTraceValues[4];if(null!==(_stackURL=stackURL)&&void 0!==_stackURL&&_stackURL.startsWith("(")&&(stackURL=stackURL.slice(1)),null!==(_stackURL2=stackURL)&&void 0!==_stackURL2&&_stackURL2.startsWith(INJECTED_SCRIPT_MARKER)){var _stackFunction;stackURL=INJECTED_SCRIPT_STRING;var stackFunction=void 0!==getStackTraceValues[1]?getStackTraceValues[1].slice(0,-1):line.slice(0,getStackTraceValues.index).trim();null!==(_stackFunction=stackFunction)&&void 0!==_stackFunction&&_stackFunction.startsWith("at")&&(stackFunction=stackFunction.slice(2).trim()),stack=`${stackFunction} ${stackURL}${stackLine}${stackCol}`.trim()}else stack=stackURL===documentURL?`${INLINE_SCRIPT_STRING}${stackLine}${stackCol}`.trim():`${stackURL}${stackLine}${stackCol}`.trim()}else stack=line;return stack}));if(stackLines)for(var index=0;index<stackLines.length;index+=1){if(isInlineScript(stackMatch)&&stackLines[index].startsWith(INLINE_SCRIPT_STRING)&&stackLines[index].match(toRegExp(stackMatch)))return!0;if(isInjectedScript(stackMatch)&&stackLines[index].startsWith(INJECTED_SCRIPT_STRING)&&stackLines[index].match(toRegExp(stackMatch)))return!0}return!1}(stackMatch,stackTrace))return regExpValues.length&&regExpValues[0]!==RegExp.$1&&restoreRegExpValues(regExpValues),!0;var stackRegexp=toRegExp(stackMatch),refinedStackTrace=stackTrace.split("\\n").slice(2).map((function(line){return line.trim()})).join("\\n");return regExpValues.length&&regExpValues[0]!==RegExp.$1&&restoreRegExpValues(regExpValues),function(){var descriptor=Object.getOwnPropertyDescriptor(RegExp.prototype,"test"),nativeRegexTest=null==descriptor?void 0:descriptor.value;if(descriptor&&"function"==typeof descriptor.value)return nativeRegexTest;throw new Error("RegExp.prototype.test is not a function")}().call(stackRegexp,refinedStackTrace)}(stack,(new Error).stack)){var constantValue;try{constantValue=function(value){if("undefined"!==value){if("false"===value)return!1;if("true"===value)return!0;if("null"===value)return null;if("NaN"===value)return NaN;if(value.startsWith("/")&&value.endsWith("/"))return toRegExp(value);var num,MAX_ALLOWED_NUM=32767,numVal=Number(value);if(num=numVal,!(Number.isNaN||window.isNaN)(num)){if(Math.abs(numVal)>MAX_ALLOWED_NUM)throw new Error("number values bigger than 32767 are not allowed");return numVal}var errorMessage=`\'${value}\' value type can\'t be inferred`;try{var parsableVal=JSON.parse(value);if(parsableVal instanceof Object||"string"==typeof parsableVal)return parsableVal}catch(e){errorMessage+=`: ${e}`}throw new TypeError(errorMessage)}}(value)}catch(e){return void logMessage(source,e)}var canceled=!1,mustCancel=function(value){return canceled||(canceled=void 0!==value&&void 0!==constantValue&&typeof value!=typeof constantValue&&null!==value)},trapProp=function(base,prop,configurable,handler){if(!handler.init(base[prop]))return!1;var prevSetter,origDescriptor=Object.getOwnPropertyDescriptor(base,prop);if(origDescriptor instanceof Object){if(!origDescriptor.configurable)return logMessage(source,`Property \'${prop}\' is not configurable`),!1;base[prop]=constantValue,origDescriptor.set instanceof Function&&(prevSetter=origDescriptor.set)}return Object.defineProperty(base,prop,{configurable:configurable,get:()=>handler.get(),set(a){void 0!==prevSetter&&prevSetter(a),handler.set(a)}}),!0},_setChainPropAccess=function(owner,property){var chainInfo=getPropertyInChain(owner,property),{base:base}=chainInfo,{prop:prop,chain:chain}=chainInfo,inChainPropHandler={factValue:void 0,init(a){return this.factValue=a,!0},get(){return this.factValue},set(a){this.factValue!==a&&(this.factValue=a,a instanceof Object&&_setChainPropAccess(a,chain))}},endPropHandler={init:a=>!mustCancel(a),get:()=>constantValue,set(a){mustCancel(a)&&(constantValue=a)}};if(chain)if(void 0===base||null!==base[prop]){(base instanceof Object||"object"==typeof base)&&isEmptyObject(base)&&trapProp(base,prop,!0,inChainPropHandler);var propValue=owner[prop];(propValue instanceof Object||"object"==typeof propValue&&null!==propValue)&&_setChainPropAccess(propValue,chain),trapProp(base,prop,!0,inChainPropHandler)}else trapProp(base,prop,!0,inChainPropHandler);else trapProp(base,prop,!1,endPropHandler)&&function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)};_setChainPropAccess(window,property)}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['trusted-set-cookie'],
            scriptlet: 'function trustedSetCookie(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,name,value){var offsetExpiresSec=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",path=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"/",domain=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";if(void 0!==name)if(void 0!==value){var rawPath,parsedValue=function(rawValue){var CURRENT_DATE_KEYWORD="$currentDate$",CURRENT_ISO_DATE_KEYWORD="$currentISODate$",parsedValue=rawValue;return"$now$"===rawValue?parsedValue=Date.now().toString():rawValue===CURRENT_DATE_KEYWORD?parsedValue=Date():rawValue===CURRENT_ISO_DATE_KEYWORD&&(parsedValue=(new Date).toISOString()),parsedValue}(value);if("/"===(rawPath=path)||"none"===rawPath)if(document.location.origin.includes(domain)){var cookieToSet=function(name,rawValue,rawPath){var domainValue=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",shouldEncodeValue=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],HOST_PREFIX="__Host-",SECURE_PREFIX="__Secure-",COOKIE_BREAKER=";";if(!shouldEncodeValue&&`${rawValue}`.includes(COOKIE_BREAKER)||name.includes(COOKIE_BREAKER))return null;var resultCookie=`${name}=${shouldEncodeValue?encodeURIComponent(rawValue):rawValue}`;if(name.startsWith(HOST_PREFIX))return resultCookie+="; path=/; secure",domainValue&&console.debug(`Domain value: "${domainValue}" has been ignored, because is not allowed for __Host- prefixed cookies`),resultCookie;var path=function(rawPath){return"/"===rawPath?"path=/":""}(rawPath);return path&&(resultCookie+=`; ${path}`),name.startsWith(SECURE_PREFIX)&&(resultCookie+="; secure"),domainValue&&(resultCookie+=`; domain=${domainValue}`),resultCookie}(name,parsedValue,path,domain,!1);if(cookieToSet){if(offsetExpiresSec){var parsedOffsetMs=function(offsetExpiresSec){var parsedSec,MS_IN_SEC=1e3;if("1year"===offsetExpiresSec)parsedSec=31536e3;else if(offsetExpiresSec==="1day")parsedSec=86400;else if(parsedSec=Number.parseInt(offsetExpiresSec,10),Number.isNaN(parsedSec))return null;return parsedSec*MS_IN_SEC}(offsetExpiresSec);if(!parsedOffsetMs)return void logMessage(source,`Invalid offsetExpiresSec value: ${offsetExpiresSec}`);var expires=Date.now()+parsedOffsetMs;cookieToSet+=`; expires=${new Date(expires).toUTCString()}`}document.cookie=cookieToSet,function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}else logMessage(source,"Invalid cookie name or value")}else logMessage(source,`Cookie domain not matched by origin: \'${domain}\'`);else logMessage(source,`Invalid cookie path: \'${path}\'`)}else logMessage(source,"Cookie value should be specified");else logMessage(source,"Cookie name should be specified")}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['trusted-set-cookie-reload'],
            scriptlet: 'function trustedSetCookieReload(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}function isCookieSetWithValue(cookieString,name,value){return cookieString.split(";").some((function(cookieStr){var pos=cookieStr.indexOf("=");if(-1===pos)return!1;var cookieName=cookieStr.slice(0,pos).trim(),cookieValue=cookieStr.slice(pos+1).trim();return name===cookieName&&value===cookieValue}))}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,name,value){var offsetExpiresSec=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",path=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"/",domain=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";if(void 0!==name)if(void 0!==value){if(!isCookieSetWithValue(document.cookie,name,value)){var rawPath,parsedValue=function(rawValue){var CURRENT_DATE_KEYWORD="$currentDate$",CURRENT_ISO_DATE_KEYWORD="$currentISODate$",parsedValue=rawValue;return"$now$"===rawValue?parsedValue=Date.now().toString():rawValue===CURRENT_DATE_KEYWORD?parsedValue=Date():rawValue===CURRENT_ISO_DATE_KEYWORD&&(parsedValue=(new Date).toISOString()),parsedValue}(value);if("/"===(rawPath=path)||"none"===rawPath)if(document.location.origin.includes(domain)){var cookieToSet=function(name,rawValue,rawPath){var domainValue=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",shouldEncodeValue=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],HOST_PREFIX="__Host-",SECURE_PREFIX="__Secure-",COOKIE_BREAKER=";";if(!shouldEncodeValue&&`${rawValue}`.includes(COOKIE_BREAKER)||name.includes(COOKIE_BREAKER))return null;var resultCookie=`${name}=${shouldEncodeValue?encodeURIComponent(rawValue):rawValue}`;if(name.startsWith(HOST_PREFIX))return resultCookie+="; path=/; secure",domainValue&&console.debug(`Domain value: "${domainValue}" has been ignored, because is not allowed for __Host- prefixed cookies`),resultCookie;var path=function(rawPath){return"/"===rawPath?"path=/":""}(rawPath);return path&&(resultCookie+=`; ${path}`),name.startsWith(SECURE_PREFIX)&&(resultCookie+="; secure"),domainValue&&(resultCookie+=`; domain=${domainValue}`),resultCookie}(name,parsedValue,path,domain,!1);if(cookieToSet){if(offsetExpiresSec){var parsedOffsetMs=function(offsetExpiresSec){var parsedSec,MS_IN_SEC=1e3;if("1year"===offsetExpiresSec)parsedSec=31536e3;else if(offsetExpiresSec==="1day")parsedSec=86400;else if(parsedSec=Number.parseInt(offsetExpiresSec,10),Number.isNaN(parsedSec))return null;return parsedSec*MS_IN_SEC}(offsetExpiresSec);if(!parsedOffsetMs)return void logMessage(source,`Invalid offsetExpiresSec value: ${offsetExpiresSec}`);var expires=Date.now()+parsedOffsetMs;cookieToSet+=`; expires=${new Date(expires).toUTCString()}`}document.cookie=cookieToSet,function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source);var cookieString,COOKIE_DELIMITER,COOKIE_PAIRS_DELIMITER,cookieChunks,cookieData,cookieValueToCheck=(cookieString=document.cookie,COOKIE_DELIMITER="=",COOKIE_PAIRS_DELIMITER=";",cookieChunks=cookieString.split(COOKIE_PAIRS_DELIMITER),cookieData={},cookieChunks.forEach((function(singleCookie){var cookieKey,cookieValue="",delimiterIndex=singleCookie.indexOf(COOKIE_DELIMITER);-1===delimiterIndex?cookieKey=singleCookie.trim():(cookieKey=singleCookie.slice(0,delimiterIndex).trim(),cookieValue=singleCookie.slice(delimiterIndex+1)),cookieData[cookieKey]=cookieValue||null})),cookieData)[name];isCookieSetWithValue(document.cookie,name,cookieValueToCheck)&&window.location.reload()}else logMessage(source,"Invalid cookie name or value")}else logMessage(source,`Cookie domain not matched by origin: \'${domain}\'`);else logMessage(source,`Invalid cookie path: \'${path}\'`)}}else logMessage(source,"Cookie value should be specified");else logMessage(source,"Cookie name should be specified")}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['trusted-set-local-storage-item'],
            scriptlet: 'function trustedSetLocalStorageItem(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,key,value){if(void 0!==key)if(void 0!==value){var parsedValue=function(rawValue){var CURRENT_DATE_KEYWORD="$currentDate$",CURRENT_ISO_DATE_KEYWORD="$currentISODate$",parsedValue=rawValue;return"$now$"===rawValue?parsedValue=Date.now().toString():rawValue===CURRENT_DATE_KEYWORD?parsedValue=Date():rawValue===CURRENT_ISO_DATE_KEYWORD&&(parsedValue=(new Date).toISOString()),parsedValue}(value),{localStorage:localStorage}=window;!function(source,storage,key,value){try{storage.setItem(key,value)}catch(e){logMessage(source,`Unable to set storage item due to: ${e.message}`)}}(source,localStorage,key,parsedValue),function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}else logMessage(source,"Item value should be specified");else logMessage(source,"Item key should be specified")}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['trusted-set-session-storage-item'],
            scriptlet: 'function trustedSetSessionStorageItem(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,key,value){if(void 0!==key)if(void 0!==value){var parsedValue=function(rawValue){var CURRENT_DATE_KEYWORD="$currentDate$",CURRENT_ISO_DATE_KEYWORD="$currentISODate$",parsedValue=rawValue;return"$now$"===rawValue?parsedValue=Date.now().toString():rawValue===CURRENT_DATE_KEYWORD?parsedValue=Date():rawValue===CURRENT_ISO_DATE_KEYWORD&&(parsedValue=(new Date).toISOString()),parsedValue}(value),{sessionStorage:sessionStorage}=window;!function(source,storage,key,value){try{storage.setItem(key,value)}catch(e){logMessage(source,`Unable to set storage item due to: ${e.message}`)}}(source,sessionStorage,key,parsedValue),function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source)}else logMessage(source,"Item value should be specified");else logMessage(source,"Item key should be specified")}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['trusted-suppress-native-method'],
            scriptlet: 'function trustedSuppressNativeMethod(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}function getPropertyInChain(base,chain){var pos=chain.indexOf(".");if(-1===pos)return{base:base,prop:chain};var prop=chain.slice(0,pos);if(null===base)return{base:base,prop:prop,chain:chain};var obj,nextBase=base[prop];return chain=chain.slice(pos+1),(base instanceof Object||"object"==typeof base)&&(obj=base,0===Object.keys(obj).length&&!obj.prototype)||null===nextBase?{base:base,prop:prop,chain:chain}:void 0!==nextBase?getPropertyInChain(nextBase,chain):(Object.defineProperty(base,prop,{configurable:!0}),{base:base,prop:prop,chain:chain})}function isValueMatched(value,matcher){return"function"!=typeof value&&(nativeIsNaN(value)?nativeIsNaN(matcher):null==value||"number"==typeof value||"boolean"==typeof value?value===matcher:"string"==typeof value?("string"==typeof matcher||matcher instanceof RegExp)&&function(str,matcher){if("string"==typeof matcher)return""===matcher?str===matcher:str.includes(matcher);if(matcher instanceof RegExp)return matcher.test(str);return!1}(value,matcher):Array.isArray(value)&&Array.isArray(matcher)?function(array,matcher){if(0===array.length)return 0===matcher.length;if(0===matcher.length)return!1;for(var _ret,_loop=function(){var matcherValue=matcher[i];return array.some((function(arrItem){return isValueMatched(arrItem,matcherValue)}))?0:{v:!1}},i=0;i<matcher.length;i+=1)if(0!==(_ret=_loop())&&_ret)return _ret.v;return!0}(value,matcher):!(!isArbitraryObject(value)||!isArbitraryObject(matcher))&&function(obj,matcher){for(var matcherKeys=Object.keys(matcher),i=0;i<matcherKeys.length;i+=1){var key=matcherKeys[i];if(!isValueMatched(obj[key],matcher[key]))return!1}return!0}(value,matcher))}function toRegExp(rawInput){var input=rawInput||"";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf("/"),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith("/")&&regExpStr.endsWith("/")&&!regExpStr.endsWith("\\\\/")&&function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}}(flagsStr)?flagsStr:"");if(input.startsWith("/")&&input.endsWith("/")||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}function nativeIsNaN(num){return(Number.isNaN||window.isNaN)(num)}function isArbitraryObject(value){return!(null===value||"object"!=typeof value||Array.isArray(value)||value instanceof RegExp)}function restoreRegExpValues(array){if(array.length)try{var stringPattern="";stringPattern=1===array.length?`(${array[0]})`:array.reduce((function(accumulator,currentValue,currentIndex){return 1===currentIndex?`(${accumulator}),(${currentValue})`:`${accumulator},(${currentValue})`}));var regExpGroup=new RegExp(stringPattern);array.toString().replace(regExpGroup,"")}catch(error){var message=`Failed to restore RegExp values: ${error}`;console.log(message)}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,methodPath,signatureStr){var stack=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if(methodPath&&signatureStr){var rid,isErrorHandlerSet,signatureMatcher,suppress="abort"===(arguments.length>3&&void 0!==arguments[3]?arguments[3]:"abort")?(rid=Math.random().toString(36).slice(2,9),isErrorHandlerSet=!1,function(){throw isErrorHandlerSet||(window.onerror=function(rid){var nativeOnError=window.onerror;return function(error){if("string"==typeof error&&error.includes(rid))return!0;if(nativeOnError instanceof Function){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];return nativeOnError.apply(window,[error,...args])}return!1}}(rid),isErrorHandlerSet=!0),new ReferenceError(rid)}):function(){};try{signatureMatcher=signatureStr.split("|").map((function(value){return" "===value?value:function(value){if("undefined"!==value){if("false"===value)return!1;if("true"===value)return!0;if("null"===value)return null;if("NaN"===value)return NaN;if(value.startsWith("/")&&value.endsWith("/"))return toRegExp(value);var MAX_ALLOWED_NUM=32767,numVal=Number(value);if(!nativeIsNaN(numVal)){if(Math.abs(numVal)>MAX_ALLOWED_NUM)throw new Error("number values bigger than 32767 are not allowed");return numVal}var errorMessage=`\'${value}\' value type can\'t be inferred`;try{var parsableVal=JSON.parse(value);if(parsableVal instanceof Object||"string"==typeof parsableVal)return parsableVal}catch(e){errorMessage+=`: ${e}`}throw new TypeError(errorMessage)}}(value)}))}catch(e){return void logMessage(source,`Could not parse the signature matcher: ${function(error){var isErrorWithMessage=function(e){return"object"==typeof e&&null!==e&&"message"in e&&"string"==typeof e.message};if(isErrorWithMessage(error))return error.message;try{return new Error(JSON.stringify(error)).message}catch(_unused){return new Error(String(error)).message}}(e)}`)}var getPathParts=getPropertyInChain,{base:base,chain:chain,prop:prop}=getPathParts(window,methodPath);if(void 0===chain){var nativeMethod=base[prop];if(nativeMethod&&"function"==typeof nativeMethod){var isMatchingSuspended=!1;base[prop]=new Proxy(nativeMethod,{apply:function(target,thisArg,argumentsList){if(isMatchingSuspended)return Reflect.apply(target,thisArg,argumentsList);if(isMatchingSuspended=!0,stack&&!function(stackMatch,stackTrace){if(!stackMatch||""===stackMatch)return!0;var regExpValues=function(){try{for(var arrayOfRegexpValues=[],index=1;index<10;index+=1){var value=`$${index}`;if(!RegExp[value])break;arrayOfRegexpValues.push(RegExp[value])}return arrayOfRegexpValues}catch(error){return[]}}();if(function(stackMatch,stackTrace){var INLINE_SCRIPT_STRING="inlineScript",INJECTED_SCRIPT_STRING="injectedScript",INJECTED_SCRIPT_MARKER="<anonymous>",isInlineScript=function(match){return match.includes(INLINE_SCRIPT_STRING)},isInjectedScript=function(match){return match.includes(INJECTED_SCRIPT_STRING)};if(!isInlineScript(stackMatch)&&!isInjectedScript(stackMatch))return!1;var documentURL=window.location.href,pos=documentURL.indexOf("#");-1!==pos&&(documentURL=documentURL.slice(0,pos));var stackLines=stackTrace.split("\\n").slice(2).map((function(line){return line.trim()})).map((function(line){var stack,getStackTraceValues=/(.*?@)?(\\S+)(:\\d+)(:\\d+)\\)?$/.exec(line);if(getStackTraceValues){var _stackURL,_stackURL2,stackURL=getStackTraceValues[2],stackLine=getStackTraceValues[3],stackCol=getStackTraceValues[4];if(null!==(_stackURL=stackURL)&&void 0!==_stackURL&&_stackURL.startsWith("(")&&(stackURL=stackURL.slice(1)),null!==(_stackURL2=stackURL)&&void 0!==_stackURL2&&_stackURL2.startsWith(INJECTED_SCRIPT_MARKER)){var _stackFunction;stackURL=INJECTED_SCRIPT_STRING;var stackFunction=void 0!==getStackTraceValues[1]?getStackTraceValues[1].slice(0,-1):line.slice(0,getStackTraceValues.index).trim();null!==(_stackFunction=stackFunction)&&void 0!==_stackFunction&&_stackFunction.startsWith("at")&&(stackFunction=stackFunction.slice(2).trim()),stack=`${stackFunction} ${stackURL}${stackLine}${stackCol}`.trim()}else stack=stackURL===documentURL?`${INLINE_SCRIPT_STRING}${stackLine}${stackCol}`.trim():`${stackURL}${stackLine}${stackCol}`.trim()}else stack=line;return stack}));if(stackLines)for(var index=0;index<stackLines.length;index+=1){if(isInlineScript(stackMatch)&&stackLines[index].startsWith(INLINE_SCRIPT_STRING)&&stackLines[index].match(toRegExp(stackMatch)))return!0;if(isInjectedScript(stackMatch)&&stackLines[index].startsWith(INJECTED_SCRIPT_STRING)&&stackLines[index].match(toRegExp(stackMatch)))return!0}return!1}(stackMatch,stackTrace))return regExpValues.length&&regExpValues[0]!==RegExp.$1&&restoreRegExpValues(regExpValues),!0;var stackRegexp=toRegExp(stackMatch),refinedStackTrace=stackTrace.split("\\n").slice(2).map((function(line){return line.trim()})).join("\\n");return regExpValues.length&&regExpValues[0]!==RegExp.$1&&restoreRegExpValues(regExpValues),function(){var descriptor=Object.getOwnPropertyDescriptor(RegExp.prototype,"test"),nativeRegexTest=null==descriptor?void 0:descriptor.value;if(descriptor&&"function"==typeof descriptor.value)return nativeRegexTest;throw new Error("RegExp.prototype.test is not a function")}().call(stackRegexp,refinedStackTrace)}(stack,(new Error).stack||""))return Reflect.apply(target,thisArg,argumentsList);var nativeArguments,isMatching=(nativeArguments=argumentsList,signatureMatcher.every((function(matcher,i){return" "===matcher||isValueMatched(nativeArguments[i],matcher)})));return isMatchingSuspended=!1,isMatching?(function(source){var ABY_PREFIX="[ABY]";if(source.verbose){try{var trace=console.trace.bind(console),label=`${ABY_PREFIX} `;"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}(source),suppress()):Reflect.apply(target,thisArg,argumentsList)}})}else logMessage(source,`Could not retrieve the method: ${methodPath}`)}else logMessage(source,`Could not reach the end of the prop chain: ${methodPath}`)}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
        {
            names: ['xml-prune', 'xml-prune.js', 'ubo-xml-prune.js', 'ubo-xml-prune'],
            scriptlet: 'function xmlPrune(source,args){const uniqueIdentifier=source.uniqueId+source.name+"_"+(Array.isArray(args)?args.join("_"):"");if(source.uniqueId&&"done"===Window.prototype.toString[uniqueIdentifier])return;function hit(source){if(source.verbose){try{var trace=console.trace.bind(console),label="[ABY] ";"corelibs"===source.engine?label+=source.ruleText:(source.domainName&&(label+=`${source.domainName}`),source.args?label+=`#%#//scriptlet(\'${source.name}\', \'${source.args.join("\', \'")}\')`:label+=`#%#//scriptlet(\'${source.name}\')`),trace&&trace(label)}catch(e){}"function"==typeof window.__debug&&window.__debug(source)}}function logMessage(source,message){var forced=arguments.length>2&&void 0!==arguments[2]&&arguments[2],convertMessageToString=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],{name:name,verbose:verbose}=source;if(forced||verbose){var nativeConsole=console.log;convertMessageToString?nativeConsole(`${name}: ${message}`):nativeConsole(`${name}:`,message)}}function toRegExp(rawInput){var input=rawInput||"";if(""===input)return new RegExp(".?");var regExpStr,flagsStr,delimiterIndex=input.lastIndexOf("/"),flagsPart=input.substring(delimiterIndex+1),regExpPart=input.substring(0,delimiterIndex+1),flags=(flagsStr=flagsPart,(regExpStr=regExpPart).startsWith("/")&&regExpStr.endsWith("/")&&!regExpStr.endsWith("\\\\/")&&function(flag){if(!flag)return!1;try{return new RegExp("",flag),!0}catch(ex){return!1}}(flagsStr)?flagsStr:"");if(input.startsWith("/")&&input.endsWith("/")||flags)return new RegExp((flags?regExpPart:input).slice(1,-1),flags);var escaped=input.replace(/\\\\\'/g,"\'").replace(/\\\\"/g,\'"\').replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&");return new RegExp(escaped)}function getXhrData(method,url,async,user,password){return{method:method,url:url,async:async,user:user,password:password}}const updatedArgs=args?[].concat(source).concat(args):[source];try{(function(source,propsToRemove){var optionalProp=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",urlToMatch=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if("undefined"!=typeof Reflect&&"undefined"!=typeof fetch&&"undefined"!=typeof Proxy&&"undefined"!=typeof Response){var xhrData,shouldPruneResponse=!1,shouldLogContent="true"===(arguments.length>4&&void 0!==arguments[4]&&arguments[4]),urlMatchRegexp=toRegExp(urlToMatch),isXpath=propsToRemove&&propsToRemove.startsWith("xpath("),getXPathElements=function(contextNode){var matchedElements=[];try{for(var elementsToRemove=propsToRemove.slice(6,-1),xpathResult=contextNode.evaluate(elementsToRemove,contextNode,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null),i=0;i<xpathResult.snapshotLength;i+=1)matchedElements.push(xpathResult.snapshotItem(i))}catch(ex){logMessage(source,`Invalid XPath parameter: ${propsToRemove}\\n${ex}`)}return matchedElements},isXML=function(text){if("string"==typeof text){var trimmedText=text.trim();if(trimmedText.startsWith("<")&&trimmedText.endsWith(">"))return!0}return!1},createXMLDocument=function(text){return(new DOMParser).parseFromString(text,"text/xml")},isPruningNeeded=function(response,propsToRemove){if(!isXML(response))return!1;var docXML=createXMLDocument(response);return isXpath?getXPathElements(docXML):!!docXML.querySelector(propsToRemove)},pruneXML=function(text){if(!isXML(text))return shouldPruneResponse=!1,text;var xmlDoc=createXMLDocument(text);if(xmlDoc.querySelector("parsererror"))return text;if(""!==optionalProp&&null===xmlDoc.querySelector(optionalProp))return shouldPruneResponse=!1,text;var elements=isXpath?getXPathElements(xmlDoc):xmlDoc.querySelectorAll(propsToRemove);if(!elements.length)return shouldPruneResponse=!1,text;if(shouldLogContent){var cloneXmlDoc=xmlDoc.cloneNode(!0);logMessage(source,"Original xml:"),logMessage(source,cloneXmlDoc,!0,!1)}return isXpath?elements.forEach((function(element){1===element.nodeType?element.remove():2===element.nodeType&&element.ownerElement.removeAttribute(element.nodeName)})):elements.forEach((function(elem){elem.remove()})),shouldLogContent&&(logMessage(source,"Modified xml:"),logMessage(source,xmlDoc,!0,!1)),(new XMLSerializer).serializeToString(xmlDoc)},nativeOpen=window.XMLHttpRequest.prototype.open,nativeSend=window.XMLHttpRequest.prototype.send,openHandler={apply:function(target,thisArg,args){if(xhrData=getXhrData.apply(null,args),function(source,propsToMatch,requestData){if(""===propsToMatch||"*"===propsToMatch)return!0;var isMatched,PROPS_DIVIDER,PAIRS_MARKER,isRequestProp,propsObj,data,parsedData=(PROPS_DIVIDER=" ",PAIRS_MARKER=":",isRequestProp=function(prop){return["url","method","headers","body","credentials","cache","redirect","referrer","referrerPolicy","integrity","keepalive","signal","mode"].includes(prop)},propsObj={},propsToMatch.split(PROPS_DIVIDER).forEach((function(prop){var dividerInd=prop.indexOf(PAIRS_MARKER),key=prop.slice(0,dividerInd);if(isRequestProp(key)){var value=prop.slice(dividerInd+1);propsObj[key]=value}else propsObj.url=prop})),propsObj);if(data=parsedData,Object.values(data).every((function(value){return function(input){var isValid,FORWARD_SLASH="/",str=function(str){return str.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&")}(input);input[0]===FORWARD_SLASH&&input[input.length-1]===FORWARD_SLASH&&(str=input.slice(1,-1));try{isValid=new RegExp(str),isValid=!0}catch(e){isValid=!1}return isValid}(value)}))){var matchData=function(data){var matchData={};return Object.keys(data).forEach((function(key){matchData[key]=toRegExp(data[key])})),matchData}(parsedData);isMatched=Object.keys(matchData).every((function(matchKey){var matchValue=matchData[matchKey],dataValue=requestData[matchKey];return Object.prototype.hasOwnProperty.call(requestData,matchKey)&&"string"==typeof dataValue&&(null==matchValue?void 0:matchValue.test(dataValue))}))}else logMessage(source,`Invalid parameter: ${propsToMatch}`),isMatched=!1;return isMatched}(source,urlToMatch,xhrData)&&(thisArg.shouldBePruned=!0),thisArg.shouldBePruned){thisArg.collectedHeaders=[];var setRequestHeaderHandler={apply:function(target,thisArg,args){return thisArg.collectedHeaders.push(args),Reflect.apply(target,thisArg,args)}};thisArg.setRequestHeader=new Proxy(thisArg.setRequestHeader,setRequestHeaderHandler)}return Reflect.apply(target,thisArg,args)}},sendHandler={apply:function(target,thisArg,args){if(!thisArg.shouldBePruned||!["","text"].includes(thisArg.responseType))return Reflect.apply(target,thisArg,args);var forgedRequest=new XMLHttpRequest;forgedRequest.addEventListener("readystatechange",(function(){if(4===forgedRequest.readyState){var{readyState:readyState,response:response,responseText:responseText,responseURL:responseURL,responseXML:responseXML,status:status,statusText:statusText}=forgedRequest;if("string"==typeof(responseText||response)){propsToRemove?shouldPruneResponse=isPruningNeeded(response,propsToRemove):isXML(response)&&(logMessage(source,`XMLHttpRequest.open() URL: ${responseURL}\\nresponse: ${response}`),logMessage(source,createXMLDocument(response),!0,!1));var responseContent=shouldPruneResponse?pruneXML(response):response;Object.defineProperties(thisArg,{readyState:{value:readyState,writable:!1},responseURL:{value:responseURL,writable:!1},responseXML:{value:responseXML,writable:!1},status:{value:status,writable:!1},statusText:{value:statusText,writable:!1},response:{value:responseContent,writable:!1},responseText:{value:responseContent,writable:!1}}),setTimeout((function(){var stateEvent=new Event("readystatechange");thisArg.dispatchEvent(stateEvent);var loadEvent=new Event("load");thisArg.dispatchEvent(loadEvent);var loadEndEvent=new Event("loadend");thisArg.dispatchEvent(loadEndEvent)}),1),hit(source)}}})),nativeOpen.apply(forgedRequest,[xhrData.method,xhrData.url]),thisArg.collectedHeaders.forEach((function(header){var name=header[0],value=header[1];forgedRequest.setRequestHeader(name,value)})),thisArg.collectedHeaders=[];try{nativeSend.call(forgedRequest,args)}catch(_unused){return Reflect.apply(target,thisArg,args)}}};XMLHttpRequest.prototype.open=new Proxy(XMLHttpRequest.prototype.open,openHandler),XMLHttpRequest.prototype.send=new Proxy(XMLHttpRequest.prototype.send,sendHandler);var nativeFetch=window.fetch,fetchHandler={apply:async function(target,thisArg,args){var fetchURL=args[0]instanceof Request?args[0].url:args[0];if("string"!=typeof fetchURL||0===fetchURL.length)return Reflect.apply(target,thisArg,args);if(urlMatchRegexp.test(fetchURL)){var response=await nativeFetch(...args),clonedResponse=response.clone(),responseText=await response.text();if(!(shouldPruneResponse=isPruningNeeded(responseText,propsToRemove)))return logMessage(source,`fetch URL: ${fetchURL}\\nresponse text: ${responseText}`),logMessage(source,createXMLDocument(responseText),!0,!1),clonedResponse;var prunedText=pruneXML(responseText);return shouldPruneResponse?(hit(source),new Response(prunedText,{status:response.status,statusText:response.statusText,headers:response.headers})):clonedResponse}return Reflect.apply(target,thisArg,args)}};window.fetch=new Proxy(window.fetch,fetchHandler)}}).apply(this,updatedArgs),source.uniqueId&&Object.defineProperty(Window.prototype.toString,uniqueIdentifier,{value:"done",enumerable:!1,writable:!1,configurable:!1})}catch(e){console.log(e)}}',
        },
    ],
};

;// ./src/helpers/scriptlets/get-scriptlet-function.ts

function getScriptletFunction(scriptletName) {
    var scriptlets = scriptletsLib.scriptlets;
    var foundScriptlet = scriptlets.find(function (_a) {
        var names = _a.names;
        return names.includes(scriptletName);
    });
    return foundScriptlet ? foundScriptlet.scriptlet : null;
}

;// ./src/helpers/scriptlets/pass-source-and-props.ts
function passSourceAndProps(source, code) {
    var sourceString = JSON.stringify(source);
    var argsString = source.args ? "[".concat(source.args.map(function (arg) { return JSON.stringify(arg); }), "]") : undefined;
    var params = argsString ? "".concat(sourceString, ", ").concat(argsString) : sourceString;
    return "(".concat(code, ")(").concat(params, ");");
}

;// ./src/helpers/scriptlets/get-scriptlet-code.ts


var getScriptletString = function (scriptletSource) {
    return scriptletSource.map(function (source) { return getScriptletCode(source); }).join(';');
};
var getScriptletCode = function (source) {
    var scriptletFunction = getScriptletFunction(source.name);
    if (!scriptletFunction) {
        return '';
    }
    return passSourceAndProps(source, scriptletFunction);
};

;// ./src/background/helpers/css-execute.ts
var css_execute_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var css_execute_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var cssExecute = function (tabId, cssText) { return css_execute_awaiter(void 0, void 0, void 0, function () {
    var e_1;
    return css_execute_generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, chrome.scripting.insertCSS({
                        css: cssText,
                        origin: 'USER',
                        target: { tabId: tabId },
                    })];
            case 1:
                _a.sent();
                return [3, 3];
            case 2:
                e_1 = _a.sent();
                if (false) {}
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
var getCssAndInject = function (tabId) { return css_execute_awaiter(void 0, void 0, void 0, function () {
    var cssText;
    return css_execute_generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                cssText = "".concat(settings_Settings[SettingsKeys.CssRules].join(','), " { display: none !important; }");
                return [4, cssExecute(tabId, cssText)];
            case 1:
                _a.sent();
                return [2];
        }
    });
}); };

;// ./src/constants/inline-scripts.ts
var inlineScriptsArray = [
    '(()=>{window.JSON.parse=new Proxy(JSON.parse,{apply(r,e,t){const n=Reflect.apply(r,e,t);if(!location.pathname.startsWith("/shorts/"))return n;const a=n?.entries;return a&&Array.isArray(a)&&(n.entries=n.entries.filter((r=>{if(!r?.command?.reelWatchEndpoint?.adClientParams?.isAd)return r}))),n}});})();',
    '(()=>{let t=document.location.href,e=[],n=[],o="",r=!1;const i=Array.prototype.push,a={apply:(t,o,a)=>(window.yt?.config_?.EXPERIMENT_FLAGS?.html5_enable_ssap_entity_id&&a[0]&&a[0]!==window&&"number"==typeof a[0].start&&a[0].end&&"ssap"===a[0].namespace&&a[0].id&&(r||0!==a[0]?.start||n.includes(a[0].id)||(e.length=0,n.length=0,r=!0,i.call(e,a[0]),i.call(n,a[0].id)),r&&0!==a[0]?.start&&!n.includes(a[0].id)&&(i.call(e,a[0]),i.call(n,a[0].id))),Reflect.apply(t,o,a))};window.Array.prototype.push=new Proxy(window.Array.prototype.push,a),document.addEventListener("DOMContentLoaded",(function(){if(!window.yt?.config_?.EXPERIMENT_FLAGS?.html5_enable_ssap_entity_id)return;const i=()=>{const t=document.querySelector("video");if(t&&e.length){const i=Math.round(t.duration),a=Math.round(e.at(-1).end/1e3),c=n.join(",");if(!1===t.loop&&o!==c&&i&&i===a){const n=e.at(-1).start/1e3;t.currentTime<n&&(t.currentTime=n,r=!1,o=c)}else if(!0===t.loop&&i&&i===a){const n=e.at(-1).start/1e3;t.currentTime<n&&(t.currentTime=n,r=!1,o=c)}}};i();new MutationObserver((()=>{t!==document.location.href&&(t=document.location.href,e.length=0,n.length=0,r=!1),i()})).observe(document,{childList:!0,subtree:!0})}))})();',
    '(()=>{const e={apply:(e,t,n)=>{const o=Reflect.apply(e,t,n);try{o instanceof HTMLIFrameElement&&"about:blank"===o.src&&o.contentWindow&&(o.contentWindow.fetch=window.fetch,o.contentWindow.Request=window.Request)}catch(e){}return o}};Node.prototype.appendChild=new Proxy(Node.prototype.appendChild,e)})();',
    '(()=>{const t={apply:(t,o,n)=>{const e=n[0];return"function"==typeof e&&e.toString().includes("onAbnormalityDetected")&&(n[0]=function(){}),Reflect.apply(t,o,n)}};window.Promise.prototype.then=new Proxy(window.Promise.prototype.then,t)})();',
    '(()=>{if(Object.getOwnPropertyDescriptor(window.JSON,"stringify").writable)return;const e={apply:(e,t,n)=>{let o=Reflect.apply(e,t,n);try{3!==n.length||"object"!=typeof o||"string"!=typeof o.body||o.body.includes(\'"isInlinePlaybackNoAd":true\')||(o.body=o.body.replace(\'"contentPlaybackContext":{\',\'"contentPlaybackContext":{"isInlinePlaybackNoAd":true,\'))}catch(e){console.trace("Error occurred:",e)}return o}};window.Object.assign=new Proxy(window.Object.assign,e)})();',
];

;// ./src/background/helpers/script-execute.ts
var script_execute_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var script_execute_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





function injectedFunction(script, scriptId) {
    if (window[scriptId])
        return;
    var policy = window.trustedTypes.createPolicy('default', {
        createScript: function (input) { return input; },
    });
    var safeScriptContent = policy.createScript(script);
    window[scriptId] = true;
    var scriptTag = document.createElement('script');
    scriptTag.setAttribute('type', 'text/javascript');
    scriptTag.textContent = safeScriptContent;
    var parent = document.head || document.documentElement;
    parent.appendChild(scriptTag);
    parent.removeChild(scriptTag);
}
function executeScriptOnPage(tabId, script) {
    return script_execute_awaiter(this, void 0, void 0, function () {
        var injectionString, e_1;
        return script_execute_generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    injectionString = "(()=>{try {".concat(script, ";} catch (e) {console.log(e)}})();");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, chrome.scripting.executeScript({
                            target: { tabId: tabId },
                            func: injectedFunction,
                            injectImmediately: true,
                            world: 'MAIN',
                            args: [injectionString, 'aby-38oj8EJVO3Uu7t4G9PdfI'],
                        })];
                case 2:
                    _a.sent();
                    return [3, 4];
                case 3:
                    e_1 = _a.sent();
                    if (false) {}
                    return [3, 4];
                case 4: return [2];
            }
        });
    });
}
var getScriptsAndInject = function (tabId) { return script_execute_awaiter(void 0, void 0, void 0, function () {
    var scriptlets, inlineScripts;
    return script_execute_generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                scriptlets = getScriptletString(settings_Settings[SettingsKeys.ScripletsRules]);
                inlineScripts = inlineScriptsArray.join(';');
                return [4, executeScriptOnPage(tabId, scriptlets + inlineScripts)];
            case 1:
                _a.sent();
                return [2];
        }
    });
}); };
var cosmeticInject = function (tabId) { return script_execute_awaiter(void 0, void 0, void 0, function () {
    return script_execute_generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, getScriptsAndInject(tabId)];
            case 1:
                _a.sent();
                return [4, getCssAndInject(tabId)];
            case 2:
                _a.sent();
                return [2];
        }
    });
}); };

;// ./src/background/helpers/process-open-tab.ts
var process_open_tab_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var process_open_tab_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var process_open_tab_values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};





var processOpenTab = function () { return process_open_tab_awaiter(void 0, void 0, void 0, function () {
    var allTabs, allTabs_1, allTabs_1_1, tab, e_1_1;
    var e_1, _a;
    return process_open_tab_generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!settings_Settings[SettingsKeys.Ads])
                    return [2];
                return [4, getAllTabs()];
            case 1:
                allTabs = _b.sent();
                _b.label = 2;
            case 2:
                _b.trys.push([2, 7, 8, 9]);
                allTabs_1 = process_open_tab_values(allTabs), allTabs_1_1 = allTabs_1.next();
                _b.label = 3;
            case 3:
                if (!!allTabs_1_1.done) return [3, 6];
                tab = allTabs_1_1.value;
                if (!tab.id || !tab.url || !isAdBlockWorksOnPage(tab.url))
                    return [3, 5];
                return [4, cosmeticInject(tab.id)];
            case 4:
                _b.sent();
                _b.label = 5;
            case 5:
                allTabs_1_1 = allTabs_1.next();
                return [3, 3];
            case 6: return [3, 9];
            case 7:
                e_1_1 = _b.sent();
                e_1 = { error: e_1_1 };
                return [3, 9];
            case 8:
                try {
                    if (allTabs_1_1 && !allTabs_1_1.done && (_a = allTabs_1.return)) _a.call(allTabs_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7];
            case 9: return [2];
        }
    });
}); };

;// ./src/api/server-data.ts
var server_data_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var server_data_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var fetchServerData = function () { return server_data_awaiter(void 0, void 0, void 0, function () {
    var response, e_1;
    return server_data_generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4, fetch("".concat("https://api.adblock-for-youtube.com", "/api/v2/rules?version=").concat(EXTENSION_VERSION))];
            case 1:
                response = _a.sent();
                return [4, response.json()];
            case 2: return [2, _a.sent()];
            case 3:
                e_1 = _a.sent();
                console.log(e_1);
                return [2, null];
            case 4: return [2];
        }
    });
}); };

;// ./src/background/helpers/update-settings-from-server.ts
var update_settings_from_server_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var update_settings_from_server_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var updateSettingsFromServer = function () { return update_settings_from_server_awaiter(void 0, void 0, void 0, function () {
    var response, networkRules, cssRules, popupConfig, scripletsRules, data;
    var _a;
    return update_settings_from_server_generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4, fetchServerData()];
            case 1:
                response = _b.sent();
                if (!response)
                    return [2];
                networkRules = response.networkRules, cssRules = response.cssRules, popupConfig = response.popupConfig, scripletsRules = response.scripletsRules;
                data = (_a = {},
                    _a[SettingsKeys.ScripletsRules] = scripletsRules,
                    _a[SettingsKeys.CssRules] = cssRules,
                    _a[SettingsKeys.NetworkRules] = networkRules,
                    _a);
                settings_Settings[SettingsKeys.PopupConfig] = popupConfig;
                return [4, setMultiplyToStorageAndSettings(data)];
            case 2:
                _b.sent();
                return [2];
        }
    });
}); };

;// ./src/background/helpers/update-settings-from-storage.ts
var update_settings_from_storage_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var update_settings_from_storage_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var update_settings_from_storage_values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};



var updateSettingsFromStorage = function () { return update_settings_from_storage_awaiter(void 0, void 0, void 0, function () {
    var result, _a, _b, key;
    var e_1, _c;
    return update_settings_from_storage_generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4, getMultipleFromChromeStorage([
                    SettingsKeys.Ads,
                    SettingsKeys.Annotations,
                    SettingsKeys.NetworkRules,
                    SettingsKeys.CssRules,
                    SettingsKeys.ScripletsRules,
                ])];
            case 1:
                result = _d.sent();
                try {
                    for (_a = update_settings_from_storage_values(Object.keys(result)), _b = _a.next(); !_b.done; _b = _a.next()) {
                        key = _b.value;
                        if (result[key] !== undefined) {
                            settings_Settings[key] = result[key];
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return [2];
        }
    });
}); };

;// ./src/background/helpers/web-navigation.ts
var web_navigation_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var web_navigation_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var onCommitted = function (details) { return web_navigation_awaiter(void 0, void 0, void 0, function () {
    var tabId, url;
    return web_navigation_generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                tabId = details.tabId, url = details.url;
                if (!isAdBlockWorksOnPage(url) || !settings_Settings[SettingsKeys.Ads]) {
                    return [2];
                }
                return [4, cosmeticInject(tabId)];
            case 1:
                _a.sent();
                return [2];
        }
    });
}); };
var webNavigation = function () {
    chrome.webNavigation.onCommitted.addListener(onCommitted);
};

;// ./src/background/helpers/web-request.ts
var web_request_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var web_request_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var onResponseStarted = function (details) { return web_request_awaiter(void 0, void 0, void 0, function () {
    var type, tabId, url;
    return web_request_generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!settings_Settings[SettingsKeys.Ads]) {
                    return [2];
                }
                type = details.type, tabId = details.tabId, url = details.url;
                if (!['main_frame', 'sub_frame'].includes(type)) {
                    return [2];
                }
                if (!tabId || !isAdBlockWorksOnPage(url)) {
                    return [2];
                }
                return [4, getScriptsAndInject(tabId)];
            case 1:
                _a.sent();
                return [2];
        }
    });
}); };
var webRequest = function () {
    chrome.webRequest.onResponseStarted.addListener(onResponseStarted, { urls: ['<all_urls>'] }, [
        'responseHeaders',
        'extraHeaders',
    ]);
};

;// ./src/background/index.ts
var background_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var background_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













(function () { return background_awaiter(void 0, void 0, void 0, function () {
    return background_generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                listenMessages();
                return [4, handleExtensionLifecycleEvents()];
            case 1:
                _a.sent();
                return [4, runtimeInfoLifeCycle()];
            case 2:
                _a.sent();
                return [4, applyMigrations()];
            case 3:
                _a.sent();
                return [4, updateSettingsFromStorage()];
            case 4:
                _a.sent();
                listenStoreChanged();
                return [4, updateSettingsFromServer()];
            case 5:
                _a.sent();
                return [4, updateDynamicRules()];
            case 6:
                _a.sent();
                return [4, processOpenTab()];
            case 7:
                _a.sent();
                webRequest();
                webNavigation();
                return [4, mainScheduler()];
            case 8:
                _a.sent();
                calculateDau();
                return [2];
        }
    });
}); })();

/******/ })()
;