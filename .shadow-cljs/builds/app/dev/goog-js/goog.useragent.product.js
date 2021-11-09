["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/useragent/product.js"],"~:js","goog.provide(\"goog.userAgent.product\");\ngoog.require(\"goog.labs.userAgent.browser\");\ngoog.require(\"goog.labs.userAgent.platform\");\ngoog.require(\"goog.userAgent\");\ngoog.userAgent.product.ASSUME_FIREFOX = goog.define(\"goog.userAgent.product.ASSUME_FIREFOX\", false);\ngoog.userAgent.product.ASSUME_IPHONE = goog.define(\"goog.userAgent.product.ASSUME_IPHONE\", false);\ngoog.userAgent.product.ASSUME_IPAD = goog.define(\"goog.userAgent.product.ASSUME_IPAD\", false);\ngoog.userAgent.product.ASSUME_ANDROID = goog.define(\"goog.userAgent.product.ASSUME_ANDROID\", false);\ngoog.userAgent.product.ASSUME_CHROME = goog.define(\"goog.userAgent.product.ASSUME_CHROME\", false);\ngoog.userAgent.product.ASSUME_SAFARI = goog.define(\"goog.userAgent.product.ASSUME_SAFARI\", false);\ngoog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI;\ngoog.userAgent.product.OPERA = goog.userAgent.OPERA;\ngoog.userAgent.product.IE = goog.userAgent.IE;\ngoog.userAgent.product.EDGE = goog.userAgent.EDGE;\ngoog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.labs.userAgent.browser.isFirefox();\ngoog.userAgent.product.isIphoneOrIpod_ = function() {\n  return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpod();\n};\ngoog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.isIphoneOrIpod_();\ngoog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();\ngoog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.labs.userAgent.browser.isAndroidBrowser();\ngoog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.labs.userAgent.browser.isChrome();\ngoog.userAgent.product.isSafariDesktop_ = function() {\n  return goog.labs.userAgent.browser.isSafari() && !goog.labs.userAgent.platform.isIos();\n};\ngoog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.isSafariDesktop_();\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Detects the specific browser and not just the rendering engine.\n */\n\ngoog.provide('goog.userAgent.product');\n\ngoog.require('goog.labs.userAgent.browser');\ngoog.require('goog.labs.userAgent.platform');\ngoog.require('goog.userAgent');\n\n\n/**\n * @define {boolean} Whether the code is running on the Firefox web browser.\n */\ngoog.userAgent.product.ASSUME_FIREFOX =\n    goog.define('goog.userAgent.product.ASSUME_FIREFOX', false);\n\n\n/**\n * @define {boolean} Whether we know at compile-time that the product is an\n *     iPhone.\n */\ngoog.userAgent.product.ASSUME_IPHONE =\n    goog.define('goog.userAgent.product.ASSUME_IPHONE', false);\n\n\n/**\n * @define {boolean} Whether we know at compile-time that the product is an\n *     iPad.\n */\ngoog.userAgent.product.ASSUME_IPAD =\n    goog.define('goog.userAgent.product.ASSUME_IPAD', false);\n\n\n/**\n * @define {boolean} Whether we know at compile-time that the product is an\n *     AOSP browser or WebView inside a pre KitKat Android phone or tablet.\n */\ngoog.userAgent.product.ASSUME_ANDROID =\n    goog.define('goog.userAgent.product.ASSUME_ANDROID', false);\n\n\n/**\n * @define {boolean} Whether the code is running on the Chrome web browser on\n * any platform or AOSP browser or WebView in a KitKat+ Android phone or tablet.\n */\ngoog.userAgent.product.ASSUME_CHROME =\n    goog.define('goog.userAgent.product.ASSUME_CHROME', false);\n\n\n/**\n * @define {boolean} Whether the code is running on the Safari web browser.\n */\ngoog.userAgent.product.ASSUME_SAFARI =\n    goog.define('goog.userAgent.product.ASSUME_SAFARI', false);\n\n\n/**\n * Whether we know the product type at compile-time.\n * @type {boolean}\n * @private\n */\ngoog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE ||\n    goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA ||\n    goog.userAgent.product.ASSUME_FIREFOX ||\n    goog.userAgent.product.ASSUME_IPHONE ||\n    goog.userAgent.product.ASSUME_IPAD ||\n    goog.userAgent.product.ASSUME_ANDROID ||\n    goog.userAgent.product.ASSUME_CHROME ||\n    goog.userAgent.product.ASSUME_SAFARI;\n\n\n/**\n * Whether the code is running on the Opera web browser.\n * @type {boolean}\n */\ngoog.userAgent.product.OPERA = goog.userAgent.OPERA;\n\n\n/**\n * Whether the code is running on an IE web browser.\n * @type {boolean}\n */\ngoog.userAgent.product.IE = goog.userAgent.IE;\n\n\n/**\n * Whether the code is running on an Edge web browser (EdgeHTML based).\n * @type {boolean}\n */\ngoog.userAgent.product.EDGE = goog.userAgent.EDGE;\n\n\n/**\n * Whether the code is running on the Firefox web browser.\n * @type {boolean}\n */\ngoog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ?\n    goog.userAgent.product.ASSUME_FIREFOX :\n    goog.labs.userAgent.browser.isFirefox();\n\n\n/**\n * Whether the user agent is an iPhone or iPod (as in iPod touch).\n * @return {boolean}\n * @private\n */\ngoog.userAgent.product.isIphoneOrIpod_ = function() {\n  'use strict';\n  return goog.labs.userAgent.platform.isIphone() ||\n      goog.labs.userAgent.platform.isIpod();\n};\n\n\n/**\n * Whether the code is running on an iPhone or iPod touch.\n *\n * iPod touch is considered an iPhone for legacy reasons.\n * @type {boolean}\n */\ngoog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ?\n    goog.userAgent.product.ASSUME_IPHONE :\n    goog.userAgent.product.isIphoneOrIpod_();\n\n\n/**\n * Whether the code is running on an iPad.\n * @type {boolean}\n */\ngoog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ?\n    goog.userAgent.product.ASSUME_IPAD :\n    goog.labs.userAgent.platform.isIpad();\n\n\n/**\n * Whether the code is running on AOSP browser or WebView inside\n * a pre KitKat Android phone or tablet.\n * @type {boolean}\n */\ngoog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ?\n    goog.userAgent.product.ASSUME_ANDROID :\n    goog.labs.userAgent.browser.isAndroidBrowser();\n\n\n/**\n * Whether the code is running on any Chromium-based web browser on any platform\n * or AOSP browser or WebView in a KitKat+ Android phone or tablet.\n * @type {boolean}\n */\ngoog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ?\n    goog.userAgent.product.ASSUME_CHROME :\n    goog.labs.userAgent.browser.isChrome();\n\n\n/**\n * @return {boolean} Whether the browser is Safari on desktop.\n * @private\n */\ngoog.userAgent.product.isSafariDesktop_ = function() {\n  'use strict';\n  return goog.labs.userAgent.browser.isSafari() &&\n      !goog.labs.userAgent.platform.isIos();\n};\n\n\n/**\n * Whether the code is running on the desktop Safari web browser.\n * Note: the legacy behavior here is only true for Safari not running\n * on iOS.\n * @type {boolean}\n */\ngoog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ?\n    goog.userAgent.product.ASSUME_SAFARI :\n    goog.userAgent.product.isSafariDesktop_();\n","~:compiled-at",1636041379377,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.useragent.product.js\",\n\"lineCount\":27,\n\"mappings\":\"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\",\n\"sources\":[\"goog/useragent/product.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Detects the specific browser and not just the rendering engine.\\n */\\n\\ngoog.provide('goog.userAgent.product');\\n\\ngoog.require('goog.labs.userAgent.browser');\\ngoog.require('goog.labs.userAgent.platform');\\ngoog.require('goog.userAgent');\\n\\n\\n/**\\n * @define {boolean} Whether the code is running on the Firefox web browser.\\n */\\ngoog.userAgent.product.ASSUME_FIREFOX =\\n    goog.define('goog.userAgent.product.ASSUME_FIREFOX', false);\\n\\n\\n/**\\n * @define {boolean} Whether we know at compile-time that the product is an\\n *     iPhone.\\n */\\ngoog.userAgent.product.ASSUME_IPHONE =\\n    goog.define('goog.userAgent.product.ASSUME_IPHONE', false);\\n\\n\\n/**\\n * @define {boolean} Whether we know at compile-time that the product is an\\n *     iPad.\\n */\\ngoog.userAgent.product.ASSUME_IPAD =\\n    goog.define('goog.userAgent.product.ASSUME_IPAD', false);\\n\\n\\n/**\\n * @define {boolean} Whether we know at compile-time that the product is an\\n *     AOSP browser or WebView inside a pre KitKat Android phone or tablet.\\n */\\ngoog.userAgent.product.ASSUME_ANDROID =\\n    goog.define('goog.userAgent.product.ASSUME_ANDROID', false);\\n\\n\\n/**\\n * @define {boolean} Whether the code is running on the Chrome web browser on\\n * any platform or AOSP browser or WebView in a KitKat+ Android phone or tablet.\\n */\\ngoog.userAgent.product.ASSUME_CHROME =\\n    goog.define('goog.userAgent.product.ASSUME_CHROME', false);\\n\\n\\n/**\\n * @define {boolean} Whether the code is running on the Safari web browser.\\n */\\ngoog.userAgent.product.ASSUME_SAFARI =\\n    goog.define('goog.userAgent.product.ASSUME_SAFARI', false);\\n\\n\\n/**\\n * Whether we know the product type at compile-time.\\n * @type {boolean}\\n * @private\\n */\\ngoog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE ||\\n    goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA ||\\n    goog.userAgent.product.ASSUME_FIREFOX ||\\n    goog.userAgent.product.ASSUME_IPHONE ||\\n    goog.userAgent.product.ASSUME_IPAD ||\\n    goog.userAgent.product.ASSUME_ANDROID ||\\n    goog.userAgent.product.ASSUME_CHROME ||\\n    goog.userAgent.product.ASSUME_SAFARI;\\n\\n\\n/**\\n * Whether the code is running on the Opera web browser.\\n * @type {boolean}\\n */\\ngoog.userAgent.product.OPERA = goog.userAgent.OPERA;\\n\\n\\n/**\\n * Whether the code is running on an IE web browser.\\n * @type {boolean}\\n */\\ngoog.userAgent.product.IE = goog.userAgent.IE;\\n\\n\\n/**\\n * Whether the code is running on an Edge web browser (EdgeHTML based).\\n * @type {boolean}\\n */\\ngoog.userAgent.product.EDGE = goog.userAgent.EDGE;\\n\\n\\n/**\\n * Whether the code is running on the Firefox web browser.\\n * @type {boolean}\\n */\\ngoog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ?\\n    goog.userAgent.product.ASSUME_FIREFOX :\\n    goog.labs.userAgent.browser.isFirefox();\\n\\n\\n/**\\n * Whether the user agent is an iPhone or iPod (as in iPod touch).\\n * @return {boolean}\\n * @private\\n */\\ngoog.userAgent.product.isIphoneOrIpod_ = function() {\\n  'use strict';\\n  return goog.labs.userAgent.platform.isIphone() ||\\n      goog.labs.userAgent.platform.isIpod();\\n};\\n\\n\\n/**\\n * Whether the code is running on an iPhone or iPod touch.\\n *\\n * iPod touch is considered an iPhone for legacy reasons.\\n * @type {boolean}\\n */\\ngoog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ?\\n    goog.userAgent.product.ASSUME_IPHONE :\\n    goog.userAgent.product.isIphoneOrIpod_();\\n\\n\\n/**\\n * Whether the code is running on an iPad.\\n * @type {boolean}\\n */\\ngoog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ?\\n    goog.userAgent.product.ASSUME_IPAD :\\n    goog.labs.userAgent.platform.isIpad();\\n\\n\\n/**\\n * Whether the code is running on AOSP browser or WebView inside\\n * a pre KitKat Android phone or tablet.\\n * @type {boolean}\\n */\\ngoog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ?\\n    goog.userAgent.product.ASSUME_ANDROID :\\n    goog.labs.userAgent.browser.isAndroidBrowser();\\n\\n\\n/**\\n * Whether the code is running on any Chromium-based web browser on any platform\\n * or AOSP browser or WebView in a KitKat+ Android phone or tablet.\\n * @type {boolean}\\n */\\ngoog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ?\\n    goog.userAgent.product.ASSUME_CHROME :\\n    goog.labs.userAgent.browser.isChrome();\\n\\n\\n/**\\n * @return {boolean} Whether the browser is Safari on desktop.\\n * @private\\n */\\ngoog.userAgent.product.isSafariDesktop_ = function() {\\n  'use strict';\\n  return goog.labs.userAgent.browser.isSafari() &&\\n      !goog.labs.userAgent.platform.isIos();\\n};\\n\\n\\n/**\\n * Whether the code is running on the desktop Safari web browser.\\n * Note: the legacy behavior here is only true for Safari not running\\n * on iOS.\\n * @type {boolean}\\n */\\ngoog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ?\\n    goog.userAgent.product.ASSUME_SAFARI :\\n    goog.userAgent.product.isSafariDesktop_();\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"userAgent\",\"product\",\"ASSUME_FIREFOX\",\"define\",\"ASSUME_IPHONE\",\"ASSUME_IPAD\",\"ASSUME_ANDROID\",\"ASSUME_CHROME\",\"ASSUME_SAFARI\",\"PRODUCT_KNOWN_\",\"ASSUME_IE\",\"ASSUME_EDGE\",\"ASSUME_OPERA\",\"OPERA\",\"IE\",\"EDGE\",\"FIREFOX\",\"labs\",\"browser\",\"isFirefox\",\"isIphoneOrIpod_\",\"goog.userAgent.product.isIphoneOrIpod_\",\"platform\",\"isIphone\",\"isIpod\",\"IPHONE\",\"IPAD\",\"isIpad\",\"ANDROID\",\"isAndroidBrowser\",\"CHROME\",\"isChrome\",\"isSafariDesktop_\",\"goog.userAgent.product.isSafariDesktop_\",\"isSafari\",\"isIos\",\"SAFARI\"]\n}\n"]