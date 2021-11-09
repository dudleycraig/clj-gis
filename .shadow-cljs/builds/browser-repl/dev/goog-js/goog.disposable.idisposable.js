["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/disposable/idisposable.js"],"~:js","goog.provide(\"goog.disposable.IDisposable\");\ngoog.disposable.IDisposable = function() {\n};\ngoog.disposable.IDisposable.prototype.dispose = goog.abstractMethod;\ngoog.disposable.IDisposable.prototype.isDisposed = goog.abstractMethod;\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Definition of the disposable interface.  A disposable object\n * has a dispose method to to clean up references and resources.\n */\n\n\ngoog.provide('goog.disposable.IDisposable');\n\n\n\n/**\n * Interface for a disposable object.  If a instance requires cleanup, it should\n * implement this interface (it may subclass goog.Disposable).\n *\n * Examples of cleanup that can be done in `dispose` method:\n * 1. Remove event listeners.\n * 2. Cancel timers (setTimeout, setInterval, goog.Timer).\n * 3. Call `dispose` on other disposable objects hold by current object.\n * 4. Close connections (e.g. WebSockets).\n *\n * Note that it's not required to delete properties (e.g. DOM nodes) or set them\n * to null as garbage collector will collect them assuming that references to\n * current object will be lost after it is disposed.\n *\n * See also http://go/mdn/JavaScript/Memory_Management.\n *\n * @record\n */\ngoog.disposable.IDisposable = function() {};\n\n\n/**\n * Disposes of the object and its resources.\n * @return {void} Nothing.\n */\ngoog.disposable.IDisposable.prototype.dispose = goog.abstractMethod;\n\n\n/**\n * @return {boolean} Whether the object has been disposed of.\n */\ngoog.disposable.IDisposable.prototype.isDisposed = goog.abstractMethod;\n","~:compiled-at",1630314704139,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.disposable.idisposable.js\",\n\"lineCount\":6,\n\"mappings\":\"AAYAA,IAAKC,CAAAA,OAAL,CAAa,6BAAb,CAAA;AAsBAD,IAAKE,CAAAA,UAAWC,CAAAA,WAAhB,GAA8BC,QAAQ,EAAG;CAAzC;AAOAJ,IAAKE,CAAAA,UAAWC,CAAAA,WAAYE,CAAAA,SAAUC,CAAAA,OAAtC,GAAgDN,IAAKO,CAAAA,cAArD;AAMAP,IAAKE,CAAAA,UAAWC,CAAAA,WAAYE,CAAAA,SAAUG,CAAAA,UAAtC,GAAmDR,IAAKO,CAAAA,cAAxD;;\",\n\"sources\":[\"goog/disposable/idisposable.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Definition of the disposable interface.  A disposable object\\n * has a dispose method to to clean up references and resources.\\n */\\n\\n\\ngoog.provide('goog.disposable.IDisposable');\\n\\n\\n\\n/**\\n * Interface for a disposable object.  If a instance requires cleanup, it should\\n * implement this interface (it may subclass goog.Disposable).\\n *\\n * Examples of cleanup that can be done in `dispose` method:\\n * 1. Remove event listeners.\\n * 2. Cancel timers (setTimeout, setInterval, goog.Timer).\\n * 3. Call `dispose` on other disposable objects hold by current object.\\n * 4. Close connections (e.g. WebSockets).\\n *\\n * Note that it's not required to delete properties (e.g. DOM nodes) or set them\\n * to null as garbage collector will collect them assuming that references to\\n * current object will be lost after it is disposed.\\n *\\n * See also http://go/mdn/JavaScript/Memory_Management.\\n *\\n * @record\\n */\\ngoog.disposable.IDisposable = function() {};\\n\\n\\n/**\\n * Disposes of the object and its resources.\\n * @return {void} Nothing.\\n */\\ngoog.disposable.IDisposable.prototype.dispose = goog.abstractMethod;\\n\\n\\n/**\\n * @return {boolean} Whether the object has been disposed of.\\n */\\ngoog.disposable.IDisposable.prototype.isDisposed = goog.abstractMethod;\\n\"],\n\"names\":[\"goog\",\"provide\",\"disposable\",\"IDisposable\",\"goog.disposable.IDisposable\",\"prototype\",\"dispose\",\"abstractMethod\",\"isDisposed\"]\n}\n"]