["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/async/run.js"],"~:js","goog.provide(\"goog.async.run\");\ngoog.require(\"goog.async.WorkQueue\");\ngoog.require(\"goog.async.nextTick\");\ngoog.require(\"goog.async.throwException\");\ngoog.ASSUME_NATIVE_PROMISE = goog.define(\"goog.ASSUME_NATIVE_PROMISE\", false);\ngoog.async.run = function(callback, opt_context) {\n  if (!goog.async.run.schedule_) {\n    goog.async.run.initializeRunner_();\n  }\n  if (!goog.async.run.workQueueScheduled_) {\n    goog.async.run.schedule_();\n    goog.async.run.workQueueScheduled_ = true;\n  }\n  goog.async.run.workQueue_.add(callback, opt_context);\n};\ngoog.async.run.initializeRunner_ = function() {\n  if (goog.ASSUME_NATIVE_PROMISE || goog.global.Promise && goog.global.Promise.resolve) {\n    var promise = goog.global.Promise.resolve(undefined);\n    goog.async.run.schedule_ = function() {\n      promise.then(goog.async.run.processWorkQueue);\n    };\n  } else {\n    goog.async.run.schedule_ = function() {\n      goog.async.nextTick(goog.async.run.processWorkQueue);\n    };\n  }\n};\ngoog.async.run.forceNextTick = function(opt_realSetTimeout) {\n  goog.async.run.schedule_ = function() {\n    goog.async.nextTick(goog.async.run.processWorkQueue);\n    if (opt_realSetTimeout) {\n      opt_realSetTimeout(goog.async.run.processWorkQueue);\n    }\n  };\n};\ngoog.async.run.schedule_;\ngoog.async.run.workQueueScheduled_ = false;\ngoog.async.run.workQueue_ = new goog.async.WorkQueue;\nif (goog.DEBUG) {\n  goog.async.run.resetQueue = function() {\n    goog.async.run.workQueueScheduled_ = false;\n    goog.async.run.workQueue_ = new goog.async.WorkQueue;\n  };\n}\ngoog.async.run.processWorkQueue = function() {\n  var item = null;\n  while (item = goog.async.run.workQueue_.remove()) {\n    try {\n      item.fn.call(item.scope);\n    } catch (e) {\n      goog.async.throwException(e);\n    }\n    goog.async.run.workQueue_.returnUnused(item);\n  }\n  goog.async.run.workQueueScheduled_ = false;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\ngoog.provide('goog.async.run');\n\ngoog.require('goog.async.WorkQueue');\ngoog.require('goog.async.nextTick');\ngoog.require('goog.async.throwException');\n\n/**\n * @define {boolean} If true, use the global Promise to implement goog.async.run\n * assuming either the native, or polyfill version will be used. Does still\n * permit tests to use forceNextTick.\n */\ngoog.ASSUME_NATIVE_PROMISE = goog.define('goog.ASSUME_NATIVE_PROMISE', false);\n\n/**\n * Fires the provided callback just before the current callstack unwinds, or as\n * soon as possible after the current JS execution context.\n * @param {function(this:THIS)} callback\n * @param {THIS=} opt_context Object to use as the \"this value\" when calling\n *     the provided function.\n * @template THIS\n */\ngoog.async.run = function(callback, opt_context) {\n  'use strict';\n  if (!goog.async.run.schedule_) {\n    goog.async.run.initializeRunner_();\n  }\n  if (!goog.async.run.workQueueScheduled_) {\n    // Nothing is currently scheduled, schedule it now.\n    goog.async.run.schedule_();\n    goog.async.run.workQueueScheduled_ = true;\n  }\n\n  goog.async.run.workQueue_.add(callback, opt_context);\n};\n\n\n/**\n * Initializes the function to use to process the work queue.\n * @private\n */\ngoog.async.run.initializeRunner_ = function() {\n  'use strict';\n  if (goog.ASSUME_NATIVE_PROMISE ||\n      (goog.global.Promise && goog.global.Promise.resolve)) {\n    // Use goog.global.Promise instead of just Promise because the relevant\n    // externs may be missing, and don't alias it because this could confuse the\n    // compiler into thinking the polyfill is required when it should be treated\n    // as optional.\n    var promise = goog.global.Promise.resolve(undefined);\n    goog.async.run.schedule_ = function() {\n      'use strict';\n      promise.then(goog.async.run.processWorkQueue);\n    };\n  } else {\n    goog.async.run.schedule_ = function() {\n      'use strict';\n      goog.async.nextTick(goog.async.run.processWorkQueue);\n    };\n  }\n};\n\n\n/**\n * Forces goog.async.run to use nextTick instead of Promise.\n *\n * This should only be done in unit tests. It's useful because MockClock\n * replaces nextTick, but not the browser Promise implementation, so it allows\n * Promise-based code to be tested with MockClock.\n *\n * However, we also want to run promises if the MockClock is no longer in\n * control so we schedule a backup \"setTimeout\" to the unmocked timeout if\n * provided.\n *\n * @param {function(function())=} opt_realSetTimeout\n */\ngoog.async.run.forceNextTick = function(opt_realSetTimeout) {\n  'use strict';\n  goog.async.run.schedule_ = function() {\n    'use strict';\n    goog.async.nextTick(goog.async.run.processWorkQueue);\n    if (opt_realSetTimeout) {\n      opt_realSetTimeout(goog.async.run.processWorkQueue);\n    }\n  };\n};\n\n\n/**\n * The function used to schedule work asynchronousely.\n * @private {function()}\n */\ngoog.async.run.schedule_;\n\n\n/** @private {boolean} */\ngoog.async.run.workQueueScheduled_ = false;\n\n\n/** @private {!goog.async.WorkQueue} */\ngoog.async.run.workQueue_ = new goog.async.WorkQueue();\n\n\nif (goog.DEBUG) {\n  /**\n   * Reset the work queue. Only available for tests in debug mode.\n   */\n  goog.async.run.resetQueue = function() {\n    'use strict';\n    goog.async.run.workQueueScheduled_ = false;\n    goog.async.run.workQueue_ = new goog.async.WorkQueue();\n  };\n}\n\n\n/**\n * Run any pending goog.async.run work items. This function is not intended\n * for general use, but for use by entry point handlers to run items ahead of\n * goog.async.nextTick.\n */\ngoog.async.run.processWorkQueue = function() {\n  'use strict';\n  // NOTE: additional work queue items may be added while processing.\n  var item = null;\n  while (item = goog.async.run.workQueue_.remove()) {\n    try {\n      item.fn.call(item.scope);\n    } catch (e) {\n      goog.async.throwException(e);\n    }\n    goog.async.run.workQueue_.returnUnused(item);\n  }\n\n  // There are no more work items, allow processing to be scheduled again.\n  goog.async.run.workQueueScheduled_ = false;\n};\n","~:compiled-at",1636041379570,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.async.run.js\",\n\"lineCount\":57,\n\"mappings\":\"AAMAA,IAAKC,CAAAA,OAAL,CAAa,gBAAb,CAAA;AAEAD,IAAKE,CAAAA,OAAL,CAAa,sBAAb,CAAA;AACAF,IAAKE,CAAAA,OAAL,CAAa,qBAAb,CAAA;AACAF,IAAKE,CAAAA,OAAL,CAAa,2BAAb,CAAA;AAOAF,IAAKG,CAAAA,qBAAL,GAA6BH,IAAKI,CAAAA,MAAL,CAAY,4BAAZ,EAA0C,KAA1C,CAA7B;AAUAJ,IAAKK,CAAAA,KAAMC,CAAAA,GAAX,GAAiBC,QAAQ,CAACC,QAAD,EAAWC,WAAX,CAAwB;AAE/C,MAAI,CAACT,IAAKK,CAAAA,KAAMC,CAAAA,GAAII,CAAAA,SAApB;AACEV,QAAKK,CAAAA,KAAMC,CAAAA,GAAIK,CAAAA,iBAAf,EAAA;AADF;AAGA,MAAI,CAACX,IAAKK,CAAAA,KAAMC,CAAAA,GAAIM,CAAAA,mBAApB,CAAyC;AAEvCZ,QAAKK,CAAAA,KAAMC,CAAAA,GAAII,CAAAA,SAAf,EAAA;AACAV,QAAKK,CAAAA,KAAMC,CAAAA,GAAIM,CAAAA,mBAAf,GAAqC,IAArC;AAHuC;AAMzCZ,MAAKK,CAAAA,KAAMC,CAAAA,GAAIO,CAAAA,UAAWC,CAAAA,GAA1B,CAA8BN,QAA9B,EAAwCC,WAAxC,CAAA;AAX+C,CAAjD;AAmBAT,IAAKK,CAAAA,KAAMC,CAAAA,GAAIK,CAAAA,iBAAf,GAAmCI,QAAQ,EAAG;AAE5C,MAAIf,IAAKG,CAAAA,qBAAT,IACKH,IAAKgB,CAAAA,MAAOC,CAAAA,OADjB,IAC4BjB,IAAKgB,CAAAA,MAAOC,CAAAA,OAAQC,CAAAA,OADhD,CAC0D;AAKxD,QAAIC,UAAUnB,IAAKgB,CAAAA,MAAOC,CAAAA,OAAQC,CAAAA,OAApB,CAA4BE,SAA5B,CAAd;AACApB,QAAKK,CAAAA,KAAMC,CAAAA,GAAII,CAAAA,SAAf,GAA2BW,QAAQ,EAAG;AAEpCF,aAAQG,CAAAA,IAAR,CAAatB,IAAKK,CAAAA,KAAMC,CAAAA,GAAIiB,CAAAA,gBAA5B,CAAA;AAFoC,KAAtC;AANwD,GAD1D;AAYEvB,QAAKK,CAAAA,KAAMC,CAAAA,GAAII,CAAAA,SAAf,GAA2BW,QAAQ,EAAG;AAEpCrB,UAAKK,CAAAA,KAAMmB,CAAAA,QAAX,CAAoBxB,IAAKK,CAAAA,KAAMC,CAAAA,GAAIiB,CAAAA,gBAAnC,CAAA;AAFoC,KAAtC;AAZF;AAF4C,CAA9C;AAmCAvB,IAAKK,CAAAA,KAAMC,CAAAA,GAAImB,CAAAA,aAAf,GAA+BC,QAAQ,CAACC,kBAAD,CAAqB;AAE1D3B,MAAKK,CAAAA,KAAMC,CAAAA,GAAII,CAAAA,SAAf,GAA2BW,QAAQ,EAAG;AAEpCrB,QAAKK,CAAAA,KAAMmB,CAAAA,QAAX,CAAoBxB,IAAKK,CAAAA,KAAMC,CAAAA,GAAIiB,CAAAA,gBAAnC,CAAA;AACA,QAAII,kBAAJ;AACEA,wBAAA,CAAmB3B,IAAKK,CAAAA,KAAMC,CAAAA,GAAIiB,CAAAA,gBAAlC,CAAA;AADF;AAHoC,GAAtC;AAF0D,CAA5D;AAgBAvB,IAAKK,CAAAA,KAAMC,CAAAA,GAAII,CAAAA,SAAf;AAIAV,IAAKK,CAAAA,KAAMC,CAAAA,GAAIM,CAAAA,mBAAf,GAAqC,KAArC;AAIAZ,IAAKK,CAAAA,KAAMC,CAAAA,GAAIO,CAAAA,UAAf,GAA4B,IAAIb,IAAKK,CAAAA,KAAMuB,CAAAA,SAA3C;AAGA,IAAI5B,IAAK6B,CAAAA,KAAT;AAIE7B,MAAKK,CAAAA,KAAMC,CAAAA,GAAIwB,CAAAA,UAAf,GAA4BC,QAAQ,EAAG;AAErC/B,QAAKK,CAAAA,KAAMC,CAAAA,GAAIM,CAAAA,mBAAf,GAAqC,KAArC;AACAZ,QAAKK,CAAAA,KAAMC,CAAAA,GAAIO,CAAAA,UAAf,GAA4B,IAAIb,IAAKK,CAAAA,KAAMuB,CAAAA,SAA3C;AAHqC,GAAvC;AAJF;AAiBA5B,IAAKK,CAAAA,KAAMC,CAAAA,GAAIiB,CAAAA,gBAAf,GAAkCS,QAAQ,EAAG;AAG3C,MAAIC,OAAO,IAAX;AACA,SAAOA,IAAP,GAAcjC,IAAKK,CAAAA,KAAMC,CAAAA,GAAIO,CAAAA,UAAWqB,CAAAA,MAA1B,EAAd,CAAkD;AAChD,OAAI;AACFD,UAAKE,CAAAA,EAAGC,CAAAA,IAAR,CAAaH,IAAKI,CAAAA,KAAlB,CAAA;AADE,KAEF,QAAOC,CAAP,CAAU;AACVtC,UAAKK,CAAAA,KAAMkC,CAAAA,cAAX,CAA0BD,CAA1B,CAAA;AADU;AAGZtC,QAAKK,CAAAA,KAAMC,CAAAA,GAAIO,CAAAA,UAAW2B,CAAAA,YAA1B,CAAuCP,IAAvC,CAAA;AANgD;AAUlDjC,MAAKK,CAAAA,KAAMC,CAAAA,GAAIM,CAAAA,mBAAf,GAAqC,KAArC;AAd2C,CAA7C;;\",\n\"sources\":[\"goog/async/run.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\ngoog.provide('goog.async.run');\\n\\ngoog.require('goog.async.WorkQueue');\\ngoog.require('goog.async.nextTick');\\ngoog.require('goog.async.throwException');\\n\\n/**\\n * @define {boolean} If true, use the global Promise to implement goog.async.run\\n * assuming either the native, or polyfill version will be used. Does still\\n * permit tests to use forceNextTick.\\n */\\ngoog.ASSUME_NATIVE_PROMISE = goog.define('goog.ASSUME_NATIVE_PROMISE', false);\\n\\n/**\\n * Fires the provided callback just before the current callstack unwinds, or as\\n * soon as possible after the current JS execution context.\\n * @param {function(this:THIS)} callback\\n * @param {THIS=} opt_context Object to use as the \\\"this value\\\" when calling\\n *     the provided function.\\n * @template THIS\\n */\\ngoog.async.run = function(callback, opt_context) {\\n  'use strict';\\n  if (!goog.async.run.schedule_) {\\n    goog.async.run.initializeRunner_();\\n  }\\n  if (!goog.async.run.workQueueScheduled_) {\\n    // Nothing is currently scheduled, schedule it now.\\n    goog.async.run.schedule_();\\n    goog.async.run.workQueueScheduled_ = true;\\n  }\\n\\n  goog.async.run.workQueue_.add(callback, opt_context);\\n};\\n\\n\\n/**\\n * Initializes the function to use to process the work queue.\\n * @private\\n */\\ngoog.async.run.initializeRunner_ = function() {\\n  'use strict';\\n  if (goog.ASSUME_NATIVE_PROMISE ||\\n      (goog.global.Promise && goog.global.Promise.resolve)) {\\n    // Use goog.global.Promise instead of just Promise because the relevant\\n    // externs may be missing, and don't alias it because this could confuse the\\n    // compiler into thinking the polyfill is required when it should be treated\\n    // as optional.\\n    var promise = goog.global.Promise.resolve(undefined);\\n    goog.async.run.schedule_ = function() {\\n      'use strict';\\n      promise.then(goog.async.run.processWorkQueue);\\n    };\\n  } else {\\n    goog.async.run.schedule_ = function() {\\n      'use strict';\\n      goog.async.nextTick(goog.async.run.processWorkQueue);\\n    };\\n  }\\n};\\n\\n\\n/**\\n * Forces goog.async.run to use nextTick instead of Promise.\\n *\\n * This should only be done in unit tests. It's useful because MockClock\\n * replaces nextTick, but not the browser Promise implementation, so it allows\\n * Promise-based code to be tested with MockClock.\\n *\\n * However, we also want to run promises if the MockClock is no longer in\\n * control so we schedule a backup \\\"setTimeout\\\" to the unmocked timeout if\\n * provided.\\n *\\n * @param {function(function())=} opt_realSetTimeout\\n */\\ngoog.async.run.forceNextTick = function(opt_realSetTimeout) {\\n  'use strict';\\n  goog.async.run.schedule_ = function() {\\n    'use strict';\\n    goog.async.nextTick(goog.async.run.processWorkQueue);\\n    if (opt_realSetTimeout) {\\n      opt_realSetTimeout(goog.async.run.processWorkQueue);\\n    }\\n  };\\n};\\n\\n\\n/**\\n * The function used to schedule work asynchronousely.\\n * @private {function()}\\n */\\ngoog.async.run.schedule_;\\n\\n\\n/** @private {boolean} */\\ngoog.async.run.workQueueScheduled_ = false;\\n\\n\\n/** @private {!goog.async.WorkQueue} */\\ngoog.async.run.workQueue_ = new goog.async.WorkQueue();\\n\\n\\nif (goog.DEBUG) {\\n  /**\\n   * Reset the work queue. Only available for tests in debug mode.\\n   */\\n  goog.async.run.resetQueue = function() {\\n    'use strict';\\n    goog.async.run.workQueueScheduled_ = false;\\n    goog.async.run.workQueue_ = new goog.async.WorkQueue();\\n  };\\n}\\n\\n\\n/**\\n * Run any pending goog.async.run work items. This function is not intended\\n * for general use, but for use by entry point handlers to run items ahead of\\n * goog.async.nextTick.\\n */\\ngoog.async.run.processWorkQueue = function() {\\n  'use strict';\\n  // NOTE: additional work queue items may be added while processing.\\n  var item = null;\\n  while (item = goog.async.run.workQueue_.remove()) {\\n    try {\\n      item.fn.call(item.scope);\\n    } catch (e) {\\n      goog.async.throwException(e);\\n    }\\n    goog.async.run.workQueue_.returnUnused(item);\\n  }\\n\\n  // There are no more work items, allow processing to be scheduled again.\\n  goog.async.run.workQueueScheduled_ = false;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"ASSUME_NATIVE_PROMISE\",\"define\",\"async\",\"run\",\"goog.async.run\",\"callback\",\"opt_context\",\"schedule_\",\"initializeRunner_\",\"workQueueScheduled_\",\"workQueue_\",\"add\",\"goog.async.run.initializeRunner_\",\"global\",\"Promise\",\"resolve\",\"promise\",\"undefined\",\"goog.async.run.schedule_\",\"then\",\"processWorkQueue\",\"nextTick\",\"forceNextTick\",\"goog.async.run.forceNextTick\",\"opt_realSetTimeout\",\"WorkQueue\",\"DEBUG\",\"resetQueue\",\"goog.async.run.resetQueue\",\"goog.async.run.processWorkQueue\",\"item\",\"remove\",\"fn\",\"call\",\"scope\",\"e\",\"throwException\",\"returnUnused\"]\n}\n"]