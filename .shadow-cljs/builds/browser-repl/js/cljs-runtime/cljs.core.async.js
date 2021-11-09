goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__56696 = arguments.length;
switch (G__56696) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56697 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56697 = (function (f,blockable,meta56698){
this.f = f;
this.blockable = blockable;
this.meta56698 = meta56698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56699,meta56698__$1){
var self__ = this;
var _56699__$1 = this;
return (new cljs.core.async.t_cljs$core$async56697(self__.f,self__.blockable,meta56698__$1));
}));

(cljs.core.async.t_cljs$core$async56697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56699){
var self__ = this;
var _56699__$1 = this;
return self__.meta56698;
}));

(cljs.core.async.t_cljs$core$async56697.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56697.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async56697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async56697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta56698","meta56698",1365306818,null)], null);
}));

(cljs.core.async.t_cljs$core$async56697.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56697");

(cljs.core.async.t_cljs$core$async56697.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async56697");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56697.
 */
cljs.core.async.__GT_t_cljs$core$async56697 = (function cljs$core$async$__GT_t_cljs$core$async56697(f__$1,blockable__$1,meta56698){
return (new cljs.core.async.t_cljs$core$async56697(f__$1,blockable__$1,meta56698));
});

}

return (new cljs.core.async.t_cljs$core$async56697(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__56704 = arguments.length;
switch (G__56704) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__56706 = arguments.length;
switch (G__56706) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__56709 = arguments.length;
switch (G__56709) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_58817 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_58817) : fn1.call(null,val_58817));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_58817) : fn1.call(null,val_58817));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__56713 = arguments.length;
switch (G__56713) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___58826 = n;
var x_58827 = (0);
while(true){
if((x_58827 < n__4695__auto___58826)){
(a[x_58827] = x_58827);

var G__58828 = (x_58827 + (1));
x_58827 = G__58828;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56722 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56722 = (function (flag,meta56723){
this.flag = flag;
this.meta56723 = meta56723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56724,meta56723__$1){
var self__ = this;
var _56724__$1 = this;
return (new cljs.core.async.t_cljs$core$async56722(self__.flag,meta56723__$1));
}));

(cljs.core.async.t_cljs$core$async56722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56724){
var self__ = this;
var _56724__$1 = this;
return self__.meta56723;
}));

(cljs.core.async.t_cljs$core$async56722.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56722.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async56722.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56722.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async56722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta56723","meta56723",1176543193,null)], null);
}));

(cljs.core.async.t_cljs$core$async56722.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56722");

(cljs.core.async.t_cljs$core$async56722.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async56722");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56722.
 */
cljs.core.async.__GT_t_cljs$core$async56722 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async56722(flag__$1,meta56723){
return (new cljs.core.async.t_cljs$core$async56722(flag__$1,meta56723));
});

}

return (new cljs.core.async.t_cljs$core$async56722(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56727 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56727 = (function (flag,cb,meta56728){
this.flag = flag;
this.cb = cb;
this.meta56728 = meta56728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56729,meta56728__$1){
var self__ = this;
var _56729__$1 = this;
return (new cljs.core.async.t_cljs$core$async56727(self__.flag,self__.cb,meta56728__$1));
}));

(cljs.core.async.t_cljs$core$async56727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56729){
var self__ = this;
var _56729__$1 = this;
return self__.meta56728;
}));

(cljs.core.async.t_cljs$core$async56727.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56727.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async56727.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56727.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async56727.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta56728","meta56728",-1305001570,null)], null);
}));

(cljs.core.async.t_cljs$core$async56727.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56727.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56727");

(cljs.core.async.t_cljs$core$async56727.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async56727");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56727.
 */
cljs.core.async.__GT_t_cljs$core$async56727 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async56727(flag__$1,cb__$1,meta56728){
return (new cljs.core.async.t_cljs$core$async56727(flag__$1,cb__$1,meta56728));
});

}

return (new cljs.core.async.t_cljs$core$async56727(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56733_SHARP_){
var G__56735 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56733_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__56735) : fret.call(null,G__56735));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56734_SHARP_){
var G__56736 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56734_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__56736) : fret.call(null,G__56736));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__58846 = (i + (1));
i = G__58846;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___58852 = arguments.length;
var i__4819__auto___58853 = (0);
while(true){
if((i__4819__auto___58853 < len__4818__auto___58852)){
args__4824__auto__.push((arguments[i__4819__auto___58853]));

var G__58854 = (i__4819__auto___58853 + (1));
i__4819__auto___58853 = G__58854;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__56741){
var map__56742 = p__56741;
var map__56742__$1 = cljs.core.__destructure_map(map__56742);
var opts = map__56742__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq56737){
var G__56738 = cljs.core.first(seq56737);
var seq56737__$1 = cljs.core.next(seq56737);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56738,seq56737__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__56745 = arguments.length;
switch (G__56745) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__43632__auto___58858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43633__auto__ = (function (){var switch__43562__auto__ = (function (state_56781){
var state_val_56782 = (state_56781[(1)]);
if((state_val_56782 === (7))){
var inst_56771 = (state_56781[(2)]);
var state_56781__$1 = state_56781;
var statearr_56783_58860 = state_56781__$1;
(statearr_56783_58860[(2)] = inst_56771);

(statearr_56783_58860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56782 === (1))){
var state_56781__$1 = state_56781;
var statearr_56784_58862 = state_56781__$1;
(statearr_56784_58862[(2)] = null);

(statearr_56784_58862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56782 === (4))){
var inst_56754 = (state_56781[(7)]);
var inst_56754__$1 = (state_56781[(2)]);
var inst_56755 = (inst_56754__$1 == null);
var state_56781__$1 = (function (){var statearr_56785 = state_56781;
(statearr_56785[(7)] = inst_56754__$1);

return statearr_56785;
})();
if(cljs.core.truth_(inst_56755)){
var statearr_56786_58867 = state_56781__$1;
(statearr_56786_58867[(1)] = (5));

} else {
var statearr_56787_58868 = state_56781__$1;
(statearr_56787_58868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56782 === (13))){
var state_56781__$1 = state_56781;
var statearr_56788_58872 = state_56781__$1;
(statearr_56788_58872[(2)] = null);

(statearr_56788_58872[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56782 === (6))){
var inst_56754 = (state_56781[(7)]);
var state_56781__$1 = state_56781;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56781__$1,(11),to,inst_56754);
} else {
if((state_val_56782 === (3))){
var inst_56777 = (state_56781[(2)]);
var state_56781__$1 = state_56781;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56781__$1,inst_56777);
} else {
if((state_val_56782 === (12))){
var state_56781__$1 = state_56781;
var statearr_56789_58874 = state_56781__$1;
(statearr_56789_58874[(2)] = null);

(statearr_56789_58874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56782 === (2))){
var state_56781__$1 = state_56781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56781__$1,(4),from);
} else {
if((state_val_56782 === (11))){
var inst_56764 = (state_56781[(2)]);
var state_56781__$1 = state_56781;
if(cljs.core.truth_(inst_56764)){
var statearr_56790_58875 = state_56781__$1;
(statearr_56790_58875[(1)] = (12));

} else {
var statearr_56791_58876 = state_56781__$1;
(statearr_56791_58876[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56782 === (9))){
var state_56781__$1 = state_56781;
var statearr_56792_58878 = state_56781__$1;
(statearr_56792_58878[(2)] = null);

(statearr_56792_58878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56782 === (5))){
var state_56781__$1 = state_56781;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56793_58880 = state_56781__$1;
(statearr_56793_58880[(1)] = (8));

} else {
var statearr_56794_58884 = state_56781__$1;
(statearr_56794_58884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56782 === (14))){
var inst_56769 = (state_56781[(2)]);
var state_56781__$1 = state_56781;
var statearr_56795_58885 = state_56781__$1;
(statearr_56795_58885[(2)] = inst_56769);

(statearr_56795_58885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56782 === (10))){
var inst_56761 = (state_56781[(2)]);
var state_56781__$1 = state_56781;
var statearr_56796_58887 = state_56781__$1;
(statearr_56796_58887[(2)] = inst_56761);

(statearr_56796_58887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56782 === (8))){
var inst_56758 = cljs.core.async.close_BANG_(to);
var state_56781__$1 = state_56781;
var statearr_56798_58888 = state_56781__$1;
(statearr_56798_58888[(2)] = inst_56758);

(statearr_56798_58888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43563__auto__ = null;
var cljs$core$async$state_machine__43563__auto____0 = (function (){
var statearr_56800 = [null,null,null,null,null,null,null,null];
(statearr_56800[(0)] = cljs$core$async$state_machine__43563__auto__);

(statearr_56800[(1)] = (1));

return statearr_56800;
});
var cljs$core$async$state_machine__43563__auto____1 = (function (state_56781){
while(true){
var ret_value__43564__auto__ = (function (){try{while(true){
var result__43565__auto__ = switch__43562__auto__(state_56781);
if(cljs.core.keyword_identical_QMARK_(result__43565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43565__auto__;
}
break;
}
}catch (e56801){var ex__43566__auto__ = e56801;
var statearr_56802_58893 = state_56781;
(statearr_56802_58893[(2)] = ex__43566__auto__);


if(cljs.core.seq((state_56781[(4)]))){
var statearr_56804_58894 = state_56781;
(statearr_56804_58894[(1)] = cljs.core.first((state_56781[(4)])));

} else {
throw ex__43566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58895 = state_56781;
state_56781 = G__58895;
continue;
} else {
return ret_value__43564__auto__;
}
break;
}
});
cljs$core$async$state_machine__43563__auto__ = function(state_56781){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43563__auto____1.call(this,state_56781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43563__auto____0;
cljs$core$async$state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43563__auto____1;
return cljs$core$async$state_machine__43563__auto__;
})()
})();
var state__43634__auto__ = (function (){var statearr_56806 = f__43633__auto__();
(statearr_56806[(6)] = c__43632__auto___58858);

return statearr_56806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43634__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__56807){
var vec__56808 = p__56807;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56808,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56808,(1),null);
var job = vec__56808;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__43632__auto___58902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43633__auto__ = (function (){var switch__43562__auto__ = (function (state_56815){
var state_val_56816 = (state_56815[(1)]);
if((state_val_56816 === (1))){
var state_56815__$1 = state_56815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56815__$1,(2),res,v);
} else {
if((state_val_56816 === (2))){
var inst_56812 = (state_56815[(2)]);
var inst_56813 = cljs.core.async.close_BANG_(res);
var state_56815__$1 = (function (){var statearr_56817 = state_56815;
(statearr_56817[(7)] = inst_56812);

return statearr_56817;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56815__$1,inst_56813);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____0 = (function (){
var statearr_56818 = [null,null,null,null,null,null,null,null];
(statearr_56818[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__);

(statearr_56818[(1)] = (1));

return statearr_56818;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____1 = (function (state_56815){
while(true){
var ret_value__43564__auto__ = (function (){try{while(true){
var result__43565__auto__ = switch__43562__auto__(state_56815);
if(cljs.core.keyword_identical_QMARK_(result__43565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43565__auto__;
}
break;
}
}catch (e56819){var ex__43566__auto__ = e56819;
var statearr_56820_58903 = state_56815;
(statearr_56820_58903[(2)] = ex__43566__auto__);


if(cljs.core.seq((state_56815[(4)]))){
var statearr_56821_58904 = state_56815;
(statearr_56821_58904[(1)] = cljs.core.first((state_56815[(4)])));

} else {
throw ex__43566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58905 = state_56815;
state_56815 = G__58905;
continue;
} else {
return ret_value__43564__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__ = function(state_56815){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____1.call(this,state_56815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__;
})()
})();
var state__43634__auto__ = (function (){var statearr_56822 = f__43633__auto__();
(statearr_56822[(6)] = c__43632__auto___58902);

return statearr_56822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43634__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__56823){
var vec__56824 = p__56823;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56824,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56824,(1),null);
var job = vec__56824;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___58912 = n;
var __58913 = (0);
while(true){
if((__58913 < n__4695__auto___58912)){
var G__56827_58914 = type;
var G__56827_58915__$1 = (((G__56827_58914 instanceof cljs.core.Keyword))?G__56827_58914.fqn:null);
switch (G__56827_58915__$1) {
case "compute":
var c__43632__auto___58917 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__58913,c__43632__auto___58917,G__56827_58914,G__56827_58915__$1,n__4695__auto___58912,jobs,results,process,async){
return (function (){
var f__43633__auto__ = (function (){var switch__43562__auto__ = ((function (__58913,c__43632__auto___58917,G__56827_58914,G__56827_58915__$1,n__4695__auto___58912,jobs,results,process,async){
return (function (state_56843){
var state_val_56844 = (state_56843[(1)]);
if((state_val_56844 === (1))){
var state_56843__$1 = state_56843;
var statearr_56851_58919 = state_56843__$1;
(statearr_56851_58919[(2)] = null);

(statearr_56851_58919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56844 === (2))){
var state_56843__$1 = state_56843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56843__$1,(4),jobs);
} else {
if((state_val_56844 === (3))){
var inst_56841 = (state_56843[(2)]);
var state_56843__$1 = state_56843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56843__$1,inst_56841);
} else {
if((state_val_56844 === (4))){
var inst_56833 = (state_56843[(2)]);
var inst_56834 = process(inst_56833);
var state_56843__$1 = state_56843;
if(cljs.core.truth_(inst_56834)){
var statearr_56854_58920 = state_56843__$1;
(statearr_56854_58920[(1)] = (5));

} else {
var statearr_56855_58921 = state_56843__$1;
(statearr_56855_58921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56844 === (5))){
var state_56843__$1 = state_56843;
var statearr_56856_58922 = state_56843__$1;
(statearr_56856_58922[(2)] = null);

(statearr_56856_58922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56844 === (6))){
var state_56843__$1 = state_56843;
var statearr_56857_58923 = state_56843__$1;
(statearr_56857_58923[(2)] = null);

(statearr_56857_58923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56844 === (7))){
var inst_56839 = (state_56843[(2)]);
var state_56843__$1 = state_56843;
var statearr_56858_58924 = state_56843__$1;
(statearr_56858_58924[(2)] = inst_56839);

(statearr_56858_58924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__58913,c__43632__auto___58917,G__56827_58914,G__56827_58915__$1,n__4695__auto___58912,jobs,results,process,async))
;
return ((function (__58913,switch__43562__auto__,c__43632__auto___58917,G__56827_58914,G__56827_58915__$1,n__4695__auto___58912,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____0 = (function (){
var statearr_56859 = [null,null,null,null,null,null,null];
(statearr_56859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__);

(statearr_56859[(1)] = (1));

return statearr_56859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____1 = (function (state_56843){
while(true){
var ret_value__43564__auto__ = (function (){try{while(true){
var result__43565__auto__ = switch__43562__auto__(state_56843);
if(cljs.core.keyword_identical_QMARK_(result__43565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43565__auto__;
}
break;
}
}catch (e56860){var ex__43566__auto__ = e56860;
var statearr_56861_58925 = state_56843;
(statearr_56861_58925[(2)] = ex__43566__auto__);


if(cljs.core.seq((state_56843[(4)]))){
var statearr_56862_58926 = state_56843;
(statearr_56862_58926[(1)] = cljs.core.first((state_56843[(4)])));

} else {
throw ex__43566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58927 = state_56843;
state_56843 = G__58927;
continue;
} else {
return ret_value__43564__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__ = function(state_56843){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____1.call(this,state_56843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__;
})()
;})(__58913,switch__43562__auto__,c__43632__auto___58917,G__56827_58914,G__56827_58915__$1,n__4695__auto___58912,jobs,results,process,async))
})();
var state__43634__auto__ = (function (){var statearr_56863 = f__43633__auto__();
(statearr_56863[(6)] = c__43632__auto___58917);

return statearr_56863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43634__auto__);
});})(__58913,c__43632__auto___58917,G__56827_58914,G__56827_58915__$1,n__4695__auto___58912,jobs,results,process,async))
);


break;
case "async":
var c__43632__auto___58929 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__58913,c__43632__auto___58929,G__56827_58914,G__56827_58915__$1,n__4695__auto___58912,jobs,results,process,async){
return (function (){
var f__43633__auto__ = (function (){var switch__43562__auto__ = ((function (__58913,c__43632__auto___58929,G__56827_58914,G__56827_58915__$1,n__4695__auto___58912,jobs,results,process,async){
return (function (state_56876){
var state_val_56877 = (state_56876[(1)]);
if((state_val_56877 === (1))){
var state_56876__$1 = state_56876;
var statearr_56879_58931 = state_56876__$1;
(statearr_56879_58931[(2)] = null);

(statearr_56879_58931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56877 === (2))){
var state_56876__$1 = state_56876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56876__$1,(4),jobs);
} else {
if((state_val_56877 === (3))){
var inst_56874 = (state_56876[(2)]);
var state_56876__$1 = state_56876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56876__$1,inst_56874);
} else {
if((state_val_56877 === (4))){
var inst_56866 = (state_56876[(2)]);
var inst_56867 = async(inst_56866);
var state_56876__$1 = state_56876;
if(cljs.core.truth_(inst_56867)){
var statearr_56881_58934 = state_56876__$1;
(statearr_56881_58934[(1)] = (5));

} else {
var statearr_56882_58935 = state_56876__$1;
(statearr_56882_58935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56877 === (5))){
var state_56876__$1 = state_56876;
var statearr_56891_58936 = state_56876__$1;
(statearr_56891_58936[(2)] = null);

(statearr_56891_58936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56877 === (6))){
var state_56876__$1 = state_56876;
var statearr_56894_58937 = state_56876__$1;
(statearr_56894_58937[(2)] = null);

(statearr_56894_58937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56877 === (7))){
var inst_56872 = (state_56876[(2)]);
var state_56876__$1 = state_56876;
var statearr_56896_58938 = state_56876__$1;
(statearr_56896_58938[(2)] = inst_56872);

(statearr_56896_58938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__58913,c__43632__auto___58929,G__56827_58914,G__56827_58915__$1,n__4695__auto___58912,jobs,results,process,async))
;
return ((function (__58913,switch__43562__auto__,c__43632__auto___58929,G__56827_58914,G__56827_58915__$1,n__4695__auto___58912,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____0 = (function (){
var statearr_56897 = [null,null,null,null,null,null,null];
(statearr_56897[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__);

(statearr_56897[(1)] = (1));

return statearr_56897;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____1 = (function (state_56876){
while(true){
var ret_value__43564__auto__ = (function (){try{while(true){
var result__43565__auto__ = switch__43562__auto__(state_56876);
if(cljs.core.keyword_identical_QMARK_(result__43565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43565__auto__;
}
break;
}
}catch (e56898){var ex__43566__auto__ = e56898;
var statearr_56899_58939 = state_56876;
(statearr_56899_58939[(2)] = ex__43566__auto__);


if(cljs.core.seq((state_56876[(4)]))){
var statearr_56900_58940 = state_56876;
(statearr_56900_58940[(1)] = cljs.core.first((state_56876[(4)])));

} else {
throw ex__43566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58941 = state_56876;
state_56876 = G__58941;
continue;
} else {
return ret_value__43564__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__ = function(state_56876){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____1.call(this,state_56876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__;
})()
;})(__58913,switch__43562__auto__,c__43632__auto___58929,G__56827_58914,G__56827_58915__$1,n__4695__auto___58912,jobs,results,process,async))
})();
var state__43634__auto__ = (function (){var statearr_56901 = f__43633__auto__();
(statearr_56901[(6)] = c__43632__auto___58929);

return statearr_56901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43634__auto__);
});})(__58913,c__43632__auto___58929,G__56827_58914,G__56827_58915__$1,n__4695__auto___58912,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56827_58915__$1)].join('')));

}

var G__58943 = (__58913 + (1));
__58913 = G__58943;
continue;
} else {
}
break;
}

var c__43632__auto___58944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43633__auto__ = (function (){var switch__43562__auto__ = (function (state_56930){
var state_val_56931 = (state_56930[(1)]);
if((state_val_56931 === (7))){
var inst_56924 = (state_56930[(2)]);
var state_56930__$1 = state_56930;
var statearr_56935_58945 = state_56930__$1;
(statearr_56935_58945[(2)] = inst_56924);

(statearr_56935_58945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56931 === (1))){
var state_56930__$1 = state_56930;
var statearr_56936_58946 = state_56930__$1;
(statearr_56936_58946[(2)] = null);

(statearr_56936_58946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56931 === (4))){
var inst_56908 = (state_56930[(7)]);
var inst_56908__$1 = (state_56930[(2)]);
var inst_56909 = (inst_56908__$1 == null);
var state_56930__$1 = (function (){var statearr_56949 = state_56930;
(statearr_56949[(7)] = inst_56908__$1);

return statearr_56949;
})();
if(cljs.core.truth_(inst_56909)){
var statearr_56950_58947 = state_56930__$1;
(statearr_56950_58947[(1)] = (5));

} else {
var statearr_56951_58948 = state_56930__$1;
(statearr_56951_58948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56931 === (6))){
var inst_56908 = (state_56930[(7)]);
var inst_56914 = (state_56930[(8)]);
var inst_56914__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_56915 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56916 = [inst_56908,inst_56914__$1];
var inst_56917 = (new cljs.core.PersistentVector(null,2,(5),inst_56915,inst_56916,null));
var state_56930__$1 = (function (){var statearr_56954 = state_56930;
(statearr_56954[(8)] = inst_56914__$1);

return statearr_56954;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56930__$1,(8),jobs,inst_56917);
} else {
if((state_val_56931 === (3))){
var inst_56926 = (state_56930[(2)]);
var state_56930__$1 = state_56930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56930__$1,inst_56926);
} else {
if((state_val_56931 === (2))){
var state_56930__$1 = state_56930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56930__$1,(4),from);
} else {
if((state_val_56931 === (9))){
var inst_56921 = (state_56930[(2)]);
var state_56930__$1 = (function (){var statearr_56955 = state_56930;
(statearr_56955[(9)] = inst_56921);

return statearr_56955;
})();
var statearr_56956_58949 = state_56930__$1;
(statearr_56956_58949[(2)] = null);

(statearr_56956_58949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56931 === (5))){
var inst_56911 = cljs.core.async.close_BANG_(jobs);
var state_56930__$1 = state_56930;
var statearr_56957_58950 = state_56930__$1;
(statearr_56957_58950[(2)] = inst_56911);

(statearr_56957_58950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56931 === (8))){
var inst_56914 = (state_56930[(8)]);
var inst_56919 = (state_56930[(2)]);
var state_56930__$1 = (function (){var statearr_56960 = state_56930;
(statearr_56960[(10)] = inst_56919);

return statearr_56960;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56930__$1,(9),results,inst_56914);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____0 = (function (){
var statearr_56966 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56966[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__);

(statearr_56966[(1)] = (1));

return statearr_56966;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____1 = (function (state_56930){
while(true){
var ret_value__43564__auto__ = (function (){try{while(true){
var result__43565__auto__ = switch__43562__auto__(state_56930);
if(cljs.core.keyword_identical_QMARK_(result__43565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43565__auto__;
}
break;
}
}catch (e56967){var ex__43566__auto__ = e56967;
var statearr_56968_58955 = state_56930;
(statearr_56968_58955[(2)] = ex__43566__auto__);


if(cljs.core.seq((state_56930[(4)]))){
var statearr_56969_58956 = state_56930;
(statearr_56969_58956[(1)] = cljs.core.first((state_56930[(4)])));

} else {
throw ex__43566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58957 = state_56930;
state_56930 = G__58957;
continue;
} else {
return ret_value__43564__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__ = function(state_56930){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____1.call(this,state_56930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__;
})()
})();
var state__43634__auto__ = (function (){var statearr_56973 = f__43633__auto__();
(statearr_56973[(6)] = c__43632__auto___58944);

return statearr_56973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43634__auto__);
}));


var c__43632__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43633__auto__ = (function (){var switch__43562__auto__ = (function (state_57015){
var state_val_57016 = (state_57015[(1)]);
if((state_val_57016 === (7))){
var inst_57011 = (state_57015[(2)]);
var state_57015__$1 = state_57015;
var statearr_57019_58958 = state_57015__$1;
(statearr_57019_58958[(2)] = inst_57011);

(statearr_57019_58958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57016 === (20))){
var state_57015__$1 = state_57015;
var statearr_57020_58959 = state_57015__$1;
(statearr_57020_58959[(2)] = null);

(statearr_57020_58959[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57016 === (1))){
var state_57015__$1 = state_57015;
var statearr_57021_58960 = state_57015__$1;
(statearr_57021_58960[(2)] = null);

(statearr_57021_58960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57016 === (4))){
var inst_56980 = (state_57015[(7)]);
var inst_56980__$1 = (state_57015[(2)]);
var inst_56981 = (inst_56980__$1 == null);
var state_57015__$1 = (function (){var statearr_57024 = state_57015;
(statearr_57024[(7)] = inst_56980__$1);

return statearr_57024;
})();
if(cljs.core.truth_(inst_56981)){
var statearr_57025_58961 = state_57015__$1;
(statearr_57025_58961[(1)] = (5));

} else {
var statearr_57026_58962 = state_57015__$1;
(statearr_57026_58962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57016 === (15))){
var inst_56993 = (state_57015[(8)]);
var state_57015__$1 = state_57015;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57015__$1,(18),to,inst_56993);
} else {
if((state_val_57016 === (21))){
var inst_57006 = (state_57015[(2)]);
var state_57015__$1 = state_57015;
var statearr_57029_58963 = state_57015__$1;
(statearr_57029_58963[(2)] = inst_57006);

(statearr_57029_58963[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57016 === (13))){
var inst_57008 = (state_57015[(2)]);
var state_57015__$1 = (function (){var statearr_57030 = state_57015;
(statearr_57030[(9)] = inst_57008);

return statearr_57030;
})();
var statearr_57032_58964 = state_57015__$1;
(statearr_57032_58964[(2)] = null);

(statearr_57032_58964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57016 === (6))){
var inst_56980 = (state_57015[(7)]);
var state_57015__$1 = state_57015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57015__$1,(11),inst_56980);
} else {
if((state_val_57016 === (17))){
var inst_57001 = (state_57015[(2)]);
var state_57015__$1 = state_57015;
if(cljs.core.truth_(inst_57001)){
var statearr_57036_58965 = state_57015__$1;
(statearr_57036_58965[(1)] = (19));

} else {
var statearr_57037_58966 = state_57015__$1;
(statearr_57037_58966[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57016 === (3))){
var inst_57013 = (state_57015[(2)]);
var state_57015__$1 = state_57015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57015__$1,inst_57013);
} else {
if((state_val_57016 === (12))){
var inst_56990 = (state_57015[(10)]);
var state_57015__$1 = state_57015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57015__$1,(14),inst_56990);
} else {
if((state_val_57016 === (2))){
var state_57015__$1 = state_57015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57015__$1,(4),results);
} else {
if((state_val_57016 === (19))){
var state_57015__$1 = state_57015;
var statearr_57047_58967 = state_57015__$1;
(statearr_57047_58967[(2)] = null);

(statearr_57047_58967[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57016 === (11))){
var inst_56990 = (state_57015[(2)]);
var state_57015__$1 = (function (){var statearr_57051 = state_57015;
(statearr_57051[(10)] = inst_56990);

return statearr_57051;
})();
var statearr_57052_58968 = state_57015__$1;
(statearr_57052_58968[(2)] = null);

(statearr_57052_58968[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57016 === (9))){
var state_57015__$1 = state_57015;
var statearr_57054_58969 = state_57015__$1;
(statearr_57054_58969[(2)] = null);

(statearr_57054_58969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57016 === (5))){
var state_57015__$1 = state_57015;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57055_58971 = state_57015__$1;
(statearr_57055_58971[(1)] = (8));

} else {
var statearr_57056_58972 = state_57015__$1;
(statearr_57056_58972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57016 === (14))){
var inst_56993 = (state_57015[(8)]);
var inst_56995 = (state_57015[(11)]);
var inst_56993__$1 = (state_57015[(2)]);
var inst_56994 = (inst_56993__$1 == null);
var inst_56995__$1 = cljs.core.not(inst_56994);
var state_57015__$1 = (function (){var statearr_57057 = state_57015;
(statearr_57057[(8)] = inst_56993__$1);

(statearr_57057[(11)] = inst_56995__$1);

return statearr_57057;
})();
if(inst_56995__$1){
var statearr_57062_58974 = state_57015__$1;
(statearr_57062_58974[(1)] = (15));

} else {
var statearr_57063_58975 = state_57015__$1;
(statearr_57063_58975[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57016 === (16))){
var inst_56995 = (state_57015[(11)]);
var state_57015__$1 = state_57015;
var statearr_57064_58976 = state_57015__$1;
(statearr_57064_58976[(2)] = inst_56995);

(statearr_57064_58976[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57016 === (10))){
var inst_56987 = (state_57015[(2)]);
var state_57015__$1 = state_57015;
var statearr_57065_58978 = state_57015__$1;
(statearr_57065_58978[(2)] = inst_56987);

(statearr_57065_58978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57016 === (18))){
var inst_56998 = (state_57015[(2)]);
var state_57015__$1 = state_57015;
var statearr_57066_58980 = state_57015__$1;
(statearr_57066_58980[(2)] = inst_56998);

(statearr_57066_58980[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57016 === (8))){
var inst_56984 = cljs.core.async.close_BANG_(to);
var state_57015__$1 = state_57015;
var statearr_57067_58981 = state_57015__$1;
(statearr_57067_58981[(2)] = inst_56984);

(statearr_57067_58981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____0 = (function (){
var statearr_57068 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57068[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__);

(statearr_57068[(1)] = (1));

return statearr_57068;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____1 = (function (state_57015){
while(true){
var ret_value__43564__auto__ = (function (){try{while(true){
var result__43565__auto__ = switch__43562__auto__(state_57015);
if(cljs.core.keyword_identical_QMARK_(result__43565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43565__auto__;
}
break;
}
}catch (e57069){var ex__43566__auto__ = e57069;
var statearr_57072_58982 = state_57015;
(statearr_57072_58982[(2)] = ex__43566__auto__);


if(cljs.core.seq((state_57015[(4)]))){
var statearr_57075_58983 = state_57015;
(statearr_57075_58983[(1)] = cljs.core.first((state_57015[(4)])));

} else {
throw ex__43566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58984 = state_57015;
state_57015 = G__58984;
continue;
} else {
return ret_value__43564__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__ = function(state_57015){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____1.call(this,state_57015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43563__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43563__auto__;
})()
})();
var state__43634__auto__ = (function (){var statearr_57076 = f__43633__auto__();
(statearr_57076[(6)] = c__43632__auto__);

return statearr_57076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43634__auto__);
}));

return c__43632__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__57080 = arguments.length;
switch (G__57080) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__57084 = arguments.length;
switch (G__57084) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__57102 = arguments.length;
switch (G__57102) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__43632__auto___59000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43633__auto__ = (function (){var switch__43562__auto__ = (function (state_57135){
var state_val_57136 = (state_57135[(1)]);
if((state_val_57136 === (7))){
var inst_57131 = (state_57135[(2)]);
var state_57135__$1 = state_57135;
var statearr_57140_59004 = state_57135__$1;
(statearr_57140_59004[(2)] = inst_57131);

(statearr_57140_59004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57136 === (1))){
var state_57135__$1 = state_57135;
var statearr_57145_59005 = state_57135__$1;
(statearr_57145_59005[(2)] = null);

(statearr_57145_59005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57136 === (4))){
var inst_57112 = (state_57135[(7)]);
var inst_57112__$1 = (state_57135[(2)]);
var inst_57113 = (inst_57112__$1 == null);
var state_57135__$1 = (function (){var statearr_57154 = state_57135;
(statearr_57154[(7)] = inst_57112__$1);

return statearr_57154;
})();
if(cljs.core.truth_(inst_57113)){
var statearr_57155_59008 = state_57135__$1;
(statearr_57155_59008[(1)] = (5));

} else {
var statearr_57156_59009 = state_57135__$1;
(statearr_57156_59009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57136 === (13))){
var state_57135__$1 = state_57135;
var statearr_57157_59010 = state_57135__$1;
(statearr_57157_59010[(2)] = null);

(statearr_57157_59010[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57136 === (6))){
var inst_57112 = (state_57135[(7)]);
var inst_57118 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_57112) : p.call(null,inst_57112));
var state_57135__$1 = state_57135;
if(cljs.core.truth_(inst_57118)){
var statearr_57158_59014 = state_57135__$1;
(statearr_57158_59014[(1)] = (9));

} else {
var statearr_57159_59015 = state_57135__$1;
(statearr_57159_59015[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57136 === (3))){
var inst_57133 = (state_57135[(2)]);
var state_57135__$1 = state_57135;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57135__$1,inst_57133);
} else {
if((state_val_57136 === (12))){
var state_57135__$1 = state_57135;
var statearr_57162_59016 = state_57135__$1;
(statearr_57162_59016[(2)] = null);

(statearr_57162_59016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57136 === (2))){
var state_57135__$1 = state_57135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57135__$1,(4),ch);
} else {
if((state_val_57136 === (11))){
var inst_57112 = (state_57135[(7)]);
var inst_57122 = (state_57135[(2)]);
var state_57135__$1 = state_57135;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57135__$1,(8),inst_57122,inst_57112);
} else {
if((state_val_57136 === (9))){
var state_57135__$1 = state_57135;
var statearr_57164_59017 = state_57135__$1;
(statearr_57164_59017[(2)] = tc);

(statearr_57164_59017[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57136 === (5))){
var inst_57115 = cljs.core.async.close_BANG_(tc);
var inst_57116 = cljs.core.async.close_BANG_(fc);
var state_57135__$1 = (function (){var statearr_57166 = state_57135;
(statearr_57166[(8)] = inst_57115);

return statearr_57166;
})();
var statearr_57173_59022 = state_57135__$1;
(statearr_57173_59022[(2)] = inst_57116);

(statearr_57173_59022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57136 === (14))){
var inst_57129 = (state_57135[(2)]);
var state_57135__$1 = state_57135;
var statearr_57174_59026 = state_57135__$1;
(statearr_57174_59026[(2)] = inst_57129);

(statearr_57174_59026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57136 === (10))){
var state_57135__$1 = state_57135;
var statearr_57175_59027 = state_57135__$1;
(statearr_57175_59027[(2)] = fc);

(statearr_57175_59027[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57136 === (8))){
var inst_57124 = (state_57135[(2)]);
var state_57135__$1 = state_57135;
if(cljs.core.truth_(inst_57124)){
var statearr_57176_59028 = state_57135__$1;
(statearr_57176_59028[(1)] = (12));

} else {
var statearr_57177_59029 = state_57135__$1;
(statearr_57177_59029[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43563__auto__ = null;
var cljs$core$async$state_machine__43563__auto____0 = (function (){
var statearr_57181 = [null,null,null,null,null,null,null,null,null];
(statearr_57181[(0)] = cljs$core$async$state_machine__43563__auto__);

(statearr_57181[(1)] = (1));

return statearr_57181;
});
var cljs$core$async$state_machine__43563__auto____1 = (function (state_57135){
while(true){
var ret_value__43564__auto__ = (function (){try{while(true){
var result__43565__auto__ = switch__43562__auto__(state_57135);
if(cljs.core.keyword_identical_QMARK_(result__43565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43565__auto__;
}
break;
}
}catch (e57182){var ex__43566__auto__ = e57182;
var statearr_57183_59033 = state_57135;
(statearr_57183_59033[(2)] = ex__43566__auto__);


if(cljs.core.seq((state_57135[(4)]))){
var statearr_57184_59034 = state_57135;
(statearr_57184_59034[(1)] = cljs.core.first((state_57135[(4)])));

} else {
throw ex__43566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59035 = state_57135;
state_57135 = G__59035;
continue;
} else {
return ret_value__43564__auto__;
}
break;
}
});
cljs$core$async$state_machine__43563__auto__ = function(state_57135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43563__auto____1.call(this,state_57135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43563__auto____0;
cljs$core$async$state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43563__auto____1;
return cljs$core$async$state_machine__43563__auto__;
})()
})();
var state__43634__auto__ = (function (){var statearr_57186 = f__43633__auto__();
(statearr_57186[(6)] = c__43632__auto___59000);

return statearr_57186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43634__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__43632__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43633__auto__ = (function (){var switch__43562__auto__ = (function (state_57211){
var state_val_57212 = (state_57211[(1)]);
if((state_val_57212 === (7))){
var inst_57207 = (state_57211[(2)]);
var state_57211__$1 = state_57211;
var statearr_57213_59039 = state_57211__$1;
(statearr_57213_59039[(2)] = inst_57207);

(statearr_57213_59039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57212 === (1))){
var inst_57188 = init;
var inst_57190 = inst_57188;
var state_57211__$1 = (function (){var statearr_57214 = state_57211;
(statearr_57214[(7)] = inst_57190);

return statearr_57214;
})();
var statearr_57215_59040 = state_57211__$1;
(statearr_57215_59040[(2)] = null);

(statearr_57215_59040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57212 === (4))){
var inst_57193 = (state_57211[(8)]);
var inst_57193__$1 = (state_57211[(2)]);
var inst_57194 = (inst_57193__$1 == null);
var state_57211__$1 = (function (){var statearr_57216 = state_57211;
(statearr_57216[(8)] = inst_57193__$1);

return statearr_57216;
})();
if(cljs.core.truth_(inst_57194)){
var statearr_57217_59041 = state_57211__$1;
(statearr_57217_59041[(1)] = (5));

} else {
var statearr_57218_59042 = state_57211__$1;
(statearr_57218_59042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57212 === (6))){
var inst_57193 = (state_57211[(8)]);
var inst_57190 = (state_57211[(7)]);
var inst_57198 = (state_57211[(9)]);
var inst_57198__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_57190,inst_57193) : f.call(null,inst_57190,inst_57193));
var inst_57199 = cljs.core.reduced_QMARK_(inst_57198__$1);
var state_57211__$1 = (function (){var statearr_57219 = state_57211;
(statearr_57219[(9)] = inst_57198__$1);

return statearr_57219;
})();
if(inst_57199){
var statearr_57220_59046 = state_57211__$1;
(statearr_57220_59046[(1)] = (8));

} else {
var statearr_57221_59047 = state_57211__$1;
(statearr_57221_59047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57212 === (3))){
var inst_57209 = (state_57211[(2)]);
var state_57211__$1 = state_57211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57211__$1,inst_57209);
} else {
if((state_val_57212 === (2))){
var state_57211__$1 = state_57211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57211__$1,(4),ch);
} else {
if((state_val_57212 === (9))){
var inst_57198 = (state_57211[(9)]);
var inst_57190 = inst_57198;
var state_57211__$1 = (function (){var statearr_57222 = state_57211;
(statearr_57222[(7)] = inst_57190);

return statearr_57222;
})();
var statearr_57223_59050 = state_57211__$1;
(statearr_57223_59050[(2)] = null);

(statearr_57223_59050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57212 === (5))){
var inst_57190 = (state_57211[(7)]);
var state_57211__$1 = state_57211;
var statearr_57224_59051 = state_57211__$1;
(statearr_57224_59051[(2)] = inst_57190);

(statearr_57224_59051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57212 === (10))){
var inst_57205 = (state_57211[(2)]);
var state_57211__$1 = state_57211;
var statearr_57225_59052 = state_57211__$1;
(statearr_57225_59052[(2)] = inst_57205);

(statearr_57225_59052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57212 === (8))){
var inst_57198 = (state_57211[(9)]);
var inst_57201 = cljs.core.deref(inst_57198);
var state_57211__$1 = state_57211;
var statearr_57226_59053 = state_57211__$1;
(statearr_57226_59053[(2)] = inst_57201);

(statearr_57226_59053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__43563__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43563__auto____0 = (function (){
var statearr_57227 = [null,null,null,null,null,null,null,null,null,null];
(statearr_57227[(0)] = cljs$core$async$reduce_$_state_machine__43563__auto__);

(statearr_57227[(1)] = (1));

return statearr_57227;
});
var cljs$core$async$reduce_$_state_machine__43563__auto____1 = (function (state_57211){
while(true){
var ret_value__43564__auto__ = (function (){try{while(true){
var result__43565__auto__ = switch__43562__auto__(state_57211);
if(cljs.core.keyword_identical_QMARK_(result__43565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43565__auto__;
}
break;
}
}catch (e57228){var ex__43566__auto__ = e57228;
var statearr_57229_59055 = state_57211;
(statearr_57229_59055[(2)] = ex__43566__auto__);


if(cljs.core.seq((state_57211[(4)]))){
var statearr_57230_59056 = state_57211;
(statearr_57230_59056[(1)] = cljs.core.first((state_57211[(4)])));

} else {
throw ex__43566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59058 = state_57211;
state_57211 = G__59058;
continue;
} else {
return ret_value__43564__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43563__auto__ = function(state_57211){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43563__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43563__auto____1.call(this,state_57211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43563__auto____0;
cljs$core$async$reduce_$_state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43563__auto____1;
return cljs$core$async$reduce_$_state_machine__43563__auto__;
})()
})();
var state__43634__auto__ = (function (){var statearr_57231 = f__43633__auto__();
(statearr_57231[(6)] = c__43632__auto__);

return statearr_57231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43634__auto__);
}));

return c__43632__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__43632__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43633__auto__ = (function (){var switch__43562__auto__ = (function (state_57237){
var state_val_57238 = (state_57237[(1)]);
if((state_val_57238 === (1))){
var inst_57232 = cljs.core.async.reduce(f__$1,init,ch);
var state_57237__$1 = state_57237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57237__$1,(2),inst_57232);
} else {
if((state_val_57238 === (2))){
var inst_57234 = (state_57237[(2)]);
var inst_57235 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_57234) : f__$1.call(null,inst_57234));
var state_57237__$1 = state_57237;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57237__$1,inst_57235);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__43563__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43563__auto____0 = (function (){
var statearr_57239 = [null,null,null,null,null,null,null];
(statearr_57239[(0)] = cljs$core$async$transduce_$_state_machine__43563__auto__);

(statearr_57239[(1)] = (1));

return statearr_57239;
});
var cljs$core$async$transduce_$_state_machine__43563__auto____1 = (function (state_57237){
while(true){
var ret_value__43564__auto__ = (function (){try{while(true){
var result__43565__auto__ = switch__43562__auto__(state_57237);
if(cljs.core.keyword_identical_QMARK_(result__43565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43565__auto__;
}
break;
}
}catch (e57240){var ex__43566__auto__ = e57240;
var statearr_57241_59063 = state_57237;
(statearr_57241_59063[(2)] = ex__43566__auto__);


if(cljs.core.seq((state_57237[(4)]))){
var statearr_57242_59064 = state_57237;
(statearr_57242_59064[(1)] = cljs.core.first((state_57237[(4)])));

} else {
throw ex__43566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59065 = state_57237;
state_57237 = G__59065;
continue;
} else {
return ret_value__43564__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43563__auto__ = function(state_57237){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43563__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43563__auto____1.call(this,state_57237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43563__auto____0;
cljs$core$async$transduce_$_state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43563__auto____1;
return cljs$core$async$transduce_$_state_machine__43563__auto__;
})()
})();
var state__43634__auto__ = (function (){var statearr_57243 = f__43633__auto__();
(statearr_57243[(6)] = c__43632__auto__);

return statearr_57243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43634__auto__);
}));

return c__43632__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__57247 = arguments.length;
switch (G__57247) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__43632__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43633__auto__ = (function (){var switch__43562__auto__ = (function (state_57275){
var state_val_57276 = (state_57275[(1)]);
if((state_val_57276 === (7))){
var inst_57257 = (state_57275[(2)]);
var state_57275__$1 = state_57275;
var statearr_57279_59070 = state_57275__$1;
(statearr_57279_59070[(2)] = inst_57257);

(statearr_57279_59070[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57276 === (1))){
var inst_57248 = cljs.core.seq(coll);
var inst_57249 = inst_57248;
var state_57275__$1 = (function (){var statearr_57281 = state_57275;
(statearr_57281[(7)] = inst_57249);

return statearr_57281;
})();
var statearr_57282_59072 = state_57275__$1;
(statearr_57282_59072[(2)] = null);

(statearr_57282_59072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57276 === (4))){
var inst_57249 = (state_57275[(7)]);
var inst_57255 = cljs.core.first(inst_57249);
var state_57275__$1 = state_57275;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57275__$1,(7),ch,inst_57255);
} else {
if((state_val_57276 === (13))){
var inst_57269 = (state_57275[(2)]);
var state_57275__$1 = state_57275;
var statearr_57284_59073 = state_57275__$1;
(statearr_57284_59073[(2)] = inst_57269);

(statearr_57284_59073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57276 === (6))){
var inst_57260 = (state_57275[(2)]);
var state_57275__$1 = state_57275;
if(cljs.core.truth_(inst_57260)){
var statearr_57285_59074 = state_57275__$1;
(statearr_57285_59074[(1)] = (8));

} else {
var statearr_57286_59075 = state_57275__$1;
(statearr_57286_59075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57276 === (3))){
var inst_57273 = (state_57275[(2)]);
var state_57275__$1 = state_57275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57275__$1,inst_57273);
} else {
if((state_val_57276 === (12))){
var state_57275__$1 = state_57275;
var statearr_57288_59076 = state_57275__$1;
(statearr_57288_59076[(2)] = null);

(statearr_57288_59076[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57276 === (2))){
var inst_57249 = (state_57275[(7)]);
var state_57275__$1 = state_57275;
if(cljs.core.truth_(inst_57249)){
var statearr_57289_59080 = state_57275__$1;
(statearr_57289_59080[(1)] = (4));

} else {
var statearr_57290_59081 = state_57275__$1;
(statearr_57290_59081[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57276 === (11))){
var inst_57266 = cljs.core.async.close_BANG_(ch);
var state_57275__$1 = state_57275;
var statearr_57292_59082 = state_57275__$1;
(statearr_57292_59082[(2)] = inst_57266);

(statearr_57292_59082[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57276 === (9))){
var state_57275__$1 = state_57275;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57293_59083 = state_57275__$1;
(statearr_57293_59083[(1)] = (11));

} else {
var statearr_57294_59084 = state_57275__$1;
(statearr_57294_59084[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57276 === (5))){
var inst_57249 = (state_57275[(7)]);
var state_57275__$1 = state_57275;
var statearr_57295_59085 = state_57275__$1;
(statearr_57295_59085[(2)] = inst_57249);

(statearr_57295_59085[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57276 === (10))){
var inst_57271 = (state_57275[(2)]);
var state_57275__$1 = state_57275;
var statearr_57296_59086 = state_57275__$1;
(statearr_57296_59086[(2)] = inst_57271);

(statearr_57296_59086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57276 === (8))){
var inst_57249 = (state_57275[(7)]);
var inst_57262 = cljs.core.next(inst_57249);
var inst_57249__$1 = inst_57262;
var state_57275__$1 = (function (){var statearr_57297 = state_57275;
(statearr_57297[(7)] = inst_57249__$1);

return statearr_57297;
})();
var statearr_57298_59087 = state_57275__$1;
(statearr_57298_59087[(2)] = null);

(statearr_57298_59087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43563__auto__ = null;
var cljs$core$async$state_machine__43563__auto____0 = (function (){
var statearr_57299 = [null,null,null,null,null,null,null,null];
(statearr_57299[(0)] = cljs$core$async$state_machine__43563__auto__);

(statearr_57299[(1)] = (1));

return statearr_57299;
});
var cljs$core$async$state_machine__43563__auto____1 = (function (state_57275){
while(true){
var ret_value__43564__auto__ = (function (){try{while(true){
var result__43565__auto__ = switch__43562__auto__(state_57275);
if(cljs.core.keyword_identical_QMARK_(result__43565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43565__auto__;
}
break;
}
}catch (e57300){var ex__43566__auto__ = e57300;
var statearr_57301_59088 = state_57275;
(statearr_57301_59088[(2)] = ex__43566__auto__);


if(cljs.core.seq((state_57275[(4)]))){
var statearr_57302_59089 = state_57275;
(statearr_57302_59089[(1)] = cljs.core.first((state_57275[(4)])));

} else {
throw ex__43566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59090 = state_57275;
state_57275 = G__59090;
continue;
} else {
return ret_value__43564__auto__;
}
break;
}
});
cljs$core$async$state_machine__43563__auto__ = function(state_57275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43563__auto____1.call(this,state_57275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43563__auto____0;
cljs$core$async$state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43563__auto____1;
return cljs$core$async$state_machine__43563__auto__;
})()
})();
var state__43634__auto__ = (function (){var statearr_57303 = f__43633__auto__();
(statearr_57303[(6)] = c__43632__auto__);

return statearr_57303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43634__auto__);
}));

return c__43632__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__57328 = arguments.length;
switch (G__57328) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_59116 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_59116(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_59118 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_59118(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_59128 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_59128(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_59132 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_59132(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57409 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57409 = (function (ch,cs,meta57410){
this.ch = ch;
this.cs = cs;
this.meta57410 = meta57410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57411,meta57410__$1){
var self__ = this;
var _57411__$1 = this;
return (new cljs.core.async.t_cljs$core$async57409(self__.ch,self__.cs,meta57410__$1));
}));

(cljs.core.async.t_cljs$core$async57409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57411){
var self__ = this;
var _57411__$1 = this;
return self__.meta57410;
}));

(cljs.core.async.t_cljs$core$async57409.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57409.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async57409.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57409.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async57409.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async57409.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async57409.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta57410","meta57410",415738639,null)], null);
}));

(cljs.core.async.t_cljs$core$async57409.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57409");

(cljs.core.async.t_cljs$core$async57409.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async57409");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57409.
 */
cljs.core.async.__GT_t_cljs$core$async57409 = (function cljs$core$async$mult_$___GT_t_cljs$core$async57409(ch__$1,cs__$1,meta57410){
return (new cljs.core.async.t_cljs$core$async57409(ch__$1,cs__$1,meta57410));
});

}

return (new cljs.core.async.t_cljs$core$async57409(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__43632__auto___59140 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43633__auto__ = (function (){var switch__43562__auto__ = (function (state_57544){
var state_val_57545 = (state_57544[(1)]);
if((state_val_57545 === (7))){
var inst_57540 = (state_57544[(2)]);
var state_57544__$1 = state_57544;
var statearr_57546_59143 = state_57544__$1;
(statearr_57546_59143[(2)] = inst_57540);

(statearr_57546_59143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (20))){
var inst_57445 = (state_57544[(7)]);
var inst_57457 = cljs.core.first(inst_57445);
var inst_57458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57457,(0),null);
var inst_57459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57457,(1),null);
var state_57544__$1 = (function (){var statearr_57547 = state_57544;
(statearr_57547[(8)] = inst_57458);

return statearr_57547;
})();
if(cljs.core.truth_(inst_57459)){
var statearr_57548_59150 = state_57544__$1;
(statearr_57548_59150[(1)] = (22));

} else {
var statearr_57549_59151 = state_57544__$1;
(statearr_57549_59151[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (27))){
var inst_57489 = (state_57544[(9)]);
var inst_57414 = (state_57544[(10)]);
var inst_57487 = (state_57544[(11)]);
var inst_57494 = (state_57544[(12)]);
var inst_57494__$1 = cljs.core._nth(inst_57487,inst_57489);
var inst_57495 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_57494__$1,inst_57414,done);
var state_57544__$1 = (function (){var statearr_57550 = state_57544;
(statearr_57550[(12)] = inst_57494__$1);

return statearr_57550;
})();
if(cljs.core.truth_(inst_57495)){
var statearr_57551_59152 = state_57544__$1;
(statearr_57551_59152[(1)] = (30));

} else {
var statearr_57552_59153 = state_57544__$1;
(statearr_57552_59153[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (1))){
var state_57544__$1 = state_57544;
var statearr_57553_59157 = state_57544__$1;
(statearr_57553_59157[(2)] = null);

(statearr_57553_59157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (24))){
var inst_57445 = (state_57544[(7)]);
var inst_57464 = (state_57544[(2)]);
var inst_57465 = cljs.core.next(inst_57445);
var inst_57423 = inst_57465;
var inst_57424 = null;
var inst_57425 = (0);
var inst_57426 = (0);
var state_57544__$1 = (function (){var statearr_57554 = state_57544;
(statearr_57554[(13)] = inst_57423);

(statearr_57554[(14)] = inst_57464);

(statearr_57554[(15)] = inst_57426);

(statearr_57554[(16)] = inst_57425);

(statearr_57554[(17)] = inst_57424);

return statearr_57554;
})();
var statearr_57555_59162 = state_57544__$1;
(statearr_57555_59162[(2)] = null);

(statearr_57555_59162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (39))){
var state_57544__$1 = state_57544;
var statearr_57560_59169 = state_57544__$1;
(statearr_57560_59169[(2)] = null);

(statearr_57560_59169[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (4))){
var inst_57414 = (state_57544[(10)]);
var inst_57414__$1 = (state_57544[(2)]);
var inst_57415 = (inst_57414__$1 == null);
var state_57544__$1 = (function (){var statearr_57561 = state_57544;
(statearr_57561[(10)] = inst_57414__$1);

return statearr_57561;
})();
if(cljs.core.truth_(inst_57415)){
var statearr_57562_59170 = state_57544__$1;
(statearr_57562_59170[(1)] = (5));

} else {
var statearr_57563_59171 = state_57544__$1;
(statearr_57563_59171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (15))){
var inst_57423 = (state_57544[(13)]);
var inst_57426 = (state_57544[(15)]);
var inst_57425 = (state_57544[(16)]);
var inst_57424 = (state_57544[(17)]);
var inst_57441 = (state_57544[(2)]);
var inst_57442 = (inst_57426 + (1));
var tmp57556 = inst_57423;
var tmp57557 = inst_57425;
var tmp57558 = inst_57424;
var inst_57423__$1 = tmp57556;
var inst_57424__$1 = tmp57558;
var inst_57425__$1 = tmp57557;
var inst_57426__$1 = inst_57442;
var state_57544__$1 = (function (){var statearr_57564 = state_57544;
(statearr_57564[(13)] = inst_57423__$1);

(statearr_57564[(15)] = inst_57426__$1);

(statearr_57564[(16)] = inst_57425__$1);

(statearr_57564[(17)] = inst_57424__$1);

(statearr_57564[(18)] = inst_57441);

return statearr_57564;
})();
var statearr_57565_59172 = state_57544__$1;
(statearr_57565_59172[(2)] = null);

(statearr_57565_59172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (21))){
var inst_57468 = (state_57544[(2)]);
var state_57544__$1 = state_57544;
var statearr_57569_59173 = state_57544__$1;
(statearr_57569_59173[(2)] = inst_57468);

(statearr_57569_59173[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (31))){
var inst_57494 = (state_57544[(12)]);
var inst_57498 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_57494);
var state_57544__$1 = state_57544;
var statearr_57570_59175 = state_57544__$1;
(statearr_57570_59175[(2)] = inst_57498);

(statearr_57570_59175[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (32))){
var inst_57489 = (state_57544[(9)]);
var inst_57488 = (state_57544[(19)]);
var inst_57486 = (state_57544[(20)]);
var inst_57487 = (state_57544[(11)]);
var inst_57500 = (state_57544[(2)]);
var inst_57501 = (inst_57489 + (1));
var tmp57566 = inst_57488;
var tmp57567 = inst_57486;
var tmp57568 = inst_57487;
var inst_57486__$1 = tmp57567;
var inst_57487__$1 = tmp57568;
var inst_57488__$1 = tmp57566;
var inst_57489__$1 = inst_57501;
var state_57544__$1 = (function (){var statearr_57571 = state_57544;
(statearr_57571[(9)] = inst_57489__$1);

(statearr_57571[(19)] = inst_57488__$1);

(statearr_57571[(21)] = inst_57500);

(statearr_57571[(20)] = inst_57486__$1);

(statearr_57571[(11)] = inst_57487__$1);

return statearr_57571;
})();
var statearr_57572_59179 = state_57544__$1;
(statearr_57572_59179[(2)] = null);

(statearr_57572_59179[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (40))){
var inst_57513 = (state_57544[(22)]);
var inst_57517 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_57513);
var state_57544__$1 = state_57544;
var statearr_57573_59182 = state_57544__$1;
(statearr_57573_59182[(2)] = inst_57517);

(statearr_57573_59182[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (33))){
var inst_57504 = (state_57544[(23)]);
var inst_57506 = cljs.core.chunked_seq_QMARK_(inst_57504);
var state_57544__$1 = state_57544;
if(inst_57506){
var statearr_57574_59183 = state_57544__$1;
(statearr_57574_59183[(1)] = (36));

} else {
var statearr_57575_59184 = state_57544__$1;
(statearr_57575_59184[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (13))){
var inst_57435 = (state_57544[(24)]);
var inst_57438 = cljs.core.async.close_BANG_(inst_57435);
var state_57544__$1 = state_57544;
var statearr_57576_59185 = state_57544__$1;
(statearr_57576_59185[(2)] = inst_57438);

(statearr_57576_59185[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (22))){
var inst_57458 = (state_57544[(8)]);
var inst_57461 = cljs.core.async.close_BANG_(inst_57458);
var state_57544__$1 = state_57544;
var statearr_57577_59187 = state_57544__$1;
(statearr_57577_59187[(2)] = inst_57461);

(statearr_57577_59187[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (36))){
var inst_57504 = (state_57544[(23)]);
var inst_57508 = cljs.core.chunk_first(inst_57504);
var inst_57509 = cljs.core.chunk_rest(inst_57504);
var inst_57510 = cljs.core.count(inst_57508);
var inst_57486 = inst_57509;
var inst_57487 = inst_57508;
var inst_57488 = inst_57510;
var inst_57489 = (0);
var state_57544__$1 = (function (){var statearr_57578 = state_57544;
(statearr_57578[(9)] = inst_57489);

(statearr_57578[(19)] = inst_57488);

(statearr_57578[(20)] = inst_57486);

(statearr_57578[(11)] = inst_57487);

return statearr_57578;
})();
var statearr_57579_59195 = state_57544__$1;
(statearr_57579_59195[(2)] = null);

(statearr_57579_59195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (41))){
var inst_57504 = (state_57544[(23)]);
var inst_57519 = (state_57544[(2)]);
var inst_57520 = cljs.core.next(inst_57504);
var inst_57486 = inst_57520;
var inst_57487 = null;
var inst_57488 = (0);
var inst_57489 = (0);
var state_57544__$1 = (function (){var statearr_57580 = state_57544;
(statearr_57580[(9)] = inst_57489);

(statearr_57580[(19)] = inst_57488);

(statearr_57580[(25)] = inst_57519);

(statearr_57580[(20)] = inst_57486);

(statearr_57580[(11)] = inst_57487);

return statearr_57580;
})();
var statearr_57582_59196 = state_57544__$1;
(statearr_57582_59196[(2)] = null);

(statearr_57582_59196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (43))){
var state_57544__$1 = state_57544;
var statearr_57583_59197 = state_57544__$1;
(statearr_57583_59197[(2)] = null);

(statearr_57583_59197[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (29))){
var inst_57528 = (state_57544[(2)]);
var state_57544__$1 = state_57544;
var statearr_57584_59198 = state_57544__$1;
(statearr_57584_59198[(2)] = inst_57528);

(statearr_57584_59198[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (44))){
var inst_57537 = (state_57544[(2)]);
var state_57544__$1 = (function (){var statearr_57585 = state_57544;
(statearr_57585[(26)] = inst_57537);

return statearr_57585;
})();
var statearr_57586_59199 = state_57544__$1;
(statearr_57586_59199[(2)] = null);

(statearr_57586_59199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (6))){
var inst_57478 = (state_57544[(27)]);
var inst_57477 = cljs.core.deref(cs);
var inst_57478__$1 = cljs.core.keys(inst_57477);
var inst_57479 = cljs.core.count(inst_57478__$1);
var inst_57480 = cljs.core.reset_BANG_(dctr,inst_57479);
var inst_57485 = cljs.core.seq(inst_57478__$1);
var inst_57486 = inst_57485;
var inst_57487 = null;
var inst_57488 = (0);
var inst_57489 = (0);
var state_57544__$1 = (function (){var statearr_57587 = state_57544;
(statearr_57587[(9)] = inst_57489);

(statearr_57587[(28)] = inst_57480);

(statearr_57587[(19)] = inst_57488);

(statearr_57587[(27)] = inst_57478__$1);

(statearr_57587[(20)] = inst_57486);

(statearr_57587[(11)] = inst_57487);

return statearr_57587;
})();
var statearr_57588_59200 = state_57544__$1;
(statearr_57588_59200[(2)] = null);

(statearr_57588_59200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (28))){
var inst_57504 = (state_57544[(23)]);
var inst_57486 = (state_57544[(20)]);
var inst_57504__$1 = cljs.core.seq(inst_57486);
var state_57544__$1 = (function (){var statearr_57589 = state_57544;
(statearr_57589[(23)] = inst_57504__$1);

return statearr_57589;
})();
if(inst_57504__$1){
var statearr_57590_59201 = state_57544__$1;
(statearr_57590_59201[(1)] = (33));

} else {
var statearr_57591_59202 = state_57544__$1;
(statearr_57591_59202[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (25))){
var inst_57489 = (state_57544[(9)]);
var inst_57488 = (state_57544[(19)]);
var inst_57491 = (inst_57489 < inst_57488);
var inst_57492 = inst_57491;
var state_57544__$1 = state_57544;
if(cljs.core.truth_(inst_57492)){
var statearr_57592_59203 = state_57544__$1;
(statearr_57592_59203[(1)] = (27));

} else {
var statearr_57593_59204 = state_57544__$1;
(statearr_57593_59204[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (34))){
var state_57544__$1 = state_57544;
var statearr_57594_59205 = state_57544__$1;
(statearr_57594_59205[(2)] = null);

(statearr_57594_59205[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (17))){
var state_57544__$1 = state_57544;
var statearr_57595_59206 = state_57544__$1;
(statearr_57595_59206[(2)] = null);

(statearr_57595_59206[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (3))){
var inst_57542 = (state_57544[(2)]);
var state_57544__$1 = state_57544;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57544__$1,inst_57542);
} else {
if((state_val_57545 === (12))){
var inst_57473 = (state_57544[(2)]);
var state_57544__$1 = state_57544;
var statearr_57596_59208 = state_57544__$1;
(statearr_57596_59208[(2)] = inst_57473);

(statearr_57596_59208[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (2))){
var state_57544__$1 = state_57544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57544__$1,(4),ch);
} else {
if((state_val_57545 === (23))){
var state_57544__$1 = state_57544;
var statearr_57597_59216 = state_57544__$1;
(statearr_57597_59216[(2)] = null);

(statearr_57597_59216[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (35))){
var inst_57526 = (state_57544[(2)]);
var state_57544__$1 = state_57544;
var statearr_57598_59217 = state_57544__$1;
(statearr_57598_59217[(2)] = inst_57526);

(statearr_57598_59217[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (19))){
var inst_57445 = (state_57544[(7)]);
var inst_57449 = cljs.core.chunk_first(inst_57445);
var inst_57450 = cljs.core.chunk_rest(inst_57445);
var inst_57451 = cljs.core.count(inst_57449);
var inst_57423 = inst_57450;
var inst_57424 = inst_57449;
var inst_57425 = inst_57451;
var inst_57426 = (0);
var state_57544__$1 = (function (){var statearr_57599 = state_57544;
(statearr_57599[(13)] = inst_57423);

(statearr_57599[(15)] = inst_57426);

(statearr_57599[(16)] = inst_57425);

(statearr_57599[(17)] = inst_57424);

return statearr_57599;
})();
var statearr_57600_59218 = state_57544__$1;
(statearr_57600_59218[(2)] = null);

(statearr_57600_59218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (11))){
var inst_57445 = (state_57544[(7)]);
var inst_57423 = (state_57544[(13)]);
var inst_57445__$1 = cljs.core.seq(inst_57423);
var state_57544__$1 = (function (){var statearr_57601 = state_57544;
(statearr_57601[(7)] = inst_57445__$1);

return statearr_57601;
})();
if(inst_57445__$1){
var statearr_57602_59220 = state_57544__$1;
(statearr_57602_59220[(1)] = (16));

} else {
var statearr_57603_59221 = state_57544__$1;
(statearr_57603_59221[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (9))){
var inst_57475 = (state_57544[(2)]);
var state_57544__$1 = state_57544;
var statearr_57604_59223 = state_57544__$1;
(statearr_57604_59223[(2)] = inst_57475);

(statearr_57604_59223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (5))){
var inst_57421 = cljs.core.deref(cs);
var inst_57422 = cljs.core.seq(inst_57421);
var inst_57423 = inst_57422;
var inst_57424 = null;
var inst_57425 = (0);
var inst_57426 = (0);
var state_57544__$1 = (function (){var statearr_57605 = state_57544;
(statearr_57605[(13)] = inst_57423);

(statearr_57605[(15)] = inst_57426);

(statearr_57605[(16)] = inst_57425);

(statearr_57605[(17)] = inst_57424);

return statearr_57605;
})();
var statearr_57606_59227 = state_57544__$1;
(statearr_57606_59227[(2)] = null);

(statearr_57606_59227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (14))){
var state_57544__$1 = state_57544;
var statearr_57607_59228 = state_57544__$1;
(statearr_57607_59228[(2)] = null);

(statearr_57607_59228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (45))){
var inst_57534 = (state_57544[(2)]);
var state_57544__$1 = state_57544;
var statearr_57608_59229 = state_57544__$1;
(statearr_57608_59229[(2)] = inst_57534);

(statearr_57608_59229[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (26))){
var inst_57478 = (state_57544[(27)]);
var inst_57530 = (state_57544[(2)]);
var inst_57531 = cljs.core.seq(inst_57478);
var state_57544__$1 = (function (){var statearr_57609 = state_57544;
(statearr_57609[(29)] = inst_57530);

return statearr_57609;
})();
if(inst_57531){
var statearr_57610_59230 = state_57544__$1;
(statearr_57610_59230[(1)] = (42));

} else {
var statearr_57611_59231 = state_57544__$1;
(statearr_57611_59231[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (16))){
var inst_57445 = (state_57544[(7)]);
var inst_57447 = cljs.core.chunked_seq_QMARK_(inst_57445);
var state_57544__$1 = state_57544;
if(inst_57447){
var statearr_57612_59232 = state_57544__$1;
(statearr_57612_59232[(1)] = (19));

} else {
var statearr_57614_59233 = state_57544__$1;
(statearr_57614_59233[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (38))){
var inst_57523 = (state_57544[(2)]);
var state_57544__$1 = state_57544;
var statearr_57615_59234 = state_57544__$1;
(statearr_57615_59234[(2)] = inst_57523);

(statearr_57615_59234[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (30))){
var state_57544__$1 = state_57544;
var statearr_57616_59235 = state_57544__$1;
(statearr_57616_59235[(2)] = null);

(statearr_57616_59235[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (10))){
var inst_57426 = (state_57544[(15)]);
var inst_57424 = (state_57544[(17)]);
var inst_57434 = cljs.core._nth(inst_57424,inst_57426);
var inst_57435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57434,(0),null);
var inst_57436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57434,(1),null);
var state_57544__$1 = (function (){var statearr_57617 = state_57544;
(statearr_57617[(24)] = inst_57435);

return statearr_57617;
})();
if(cljs.core.truth_(inst_57436)){
var statearr_57619_59242 = state_57544__$1;
(statearr_57619_59242[(1)] = (13));

} else {
var statearr_57621_59243 = state_57544__$1;
(statearr_57621_59243[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (18))){
var inst_57471 = (state_57544[(2)]);
var state_57544__$1 = state_57544;
var statearr_57624_59244 = state_57544__$1;
(statearr_57624_59244[(2)] = inst_57471);

(statearr_57624_59244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (42))){
var state_57544__$1 = state_57544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57544__$1,(45),dchan);
} else {
if((state_val_57545 === (37))){
var inst_57513 = (state_57544[(22)]);
var inst_57414 = (state_57544[(10)]);
var inst_57504 = (state_57544[(23)]);
var inst_57513__$1 = cljs.core.first(inst_57504);
var inst_57514 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_57513__$1,inst_57414,done);
var state_57544__$1 = (function (){var statearr_57626 = state_57544;
(statearr_57626[(22)] = inst_57513__$1);

return statearr_57626;
})();
if(cljs.core.truth_(inst_57514)){
var statearr_57627_59245 = state_57544__$1;
(statearr_57627_59245[(1)] = (39));

} else {
var statearr_57628_59246 = state_57544__$1;
(statearr_57628_59246[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57545 === (8))){
var inst_57426 = (state_57544[(15)]);
var inst_57425 = (state_57544[(16)]);
var inst_57428 = (inst_57426 < inst_57425);
var inst_57429 = inst_57428;
var state_57544__$1 = state_57544;
if(cljs.core.truth_(inst_57429)){
var statearr_57630_59247 = state_57544__$1;
(statearr_57630_59247[(1)] = (10));

} else {
var statearr_57631_59248 = state_57544__$1;
(statearr_57631_59248[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__43563__auto__ = null;
var cljs$core$async$mult_$_state_machine__43563__auto____0 = (function (){
var statearr_57632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57632[(0)] = cljs$core$async$mult_$_state_machine__43563__auto__);

(statearr_57632[(1)] = (1));

return statearr_57632;
});
var cljs$core$async$mult_$_state_machine__43563__auto____1 = (function (state_57544){
while(true){
var ret_value__43564__auto__ = (function (){try{while(true){
var result__43565__auto__ = switch__43562__auto__(state_57544);
if(cljs.core.keyword_identical_QMARK_(result__43565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43565__auto__;
}
break;
}
}catch (e57634){var ex__43566__auto__ = e57634;
var statearr_57635_59249 = state_57544;
(statearr_57635_59249[(2)] = ex__43566__auto__);


if(cljs.core.seq((state_57544[(4)]))){
var statearr_57636_59250 = state_57544;
(statearr_57636_59250[(1)] = cljs.core.first((state_57544[(4)])));

} else {
throw ex__43566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59251 = state_57544;
state_57544 = G__59251;
continue;
} else {
return ret_value__43564__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43563__auto__ = function(state_57544){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43563__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43563__auto____1.call(this,state_57544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43563__auto____0;
cljs$core$async$mult_$_state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43563__auto____1;
return cljs$core$async$mult_$_state_machine__43563__auto__;
})()
})();
var state__43634__auto__ = (function (){var statearr_57641 = f__43633__auto__();
(statearr_57641[(6)] = c__43632__auto___59140);

return statearr_57641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43634__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__57643 = arguments.length;
switch (G__57643) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_59253 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_59253(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_59258 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_59258(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_59260 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_59260(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_59263 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_59263(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_59264 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_59264(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___59266 = arguments.length;
var i__4819__auto___59267 = (0);
while(true){
if((i__4819__auto___59267 < len__4818__auto___59266)){
args__4824__auto__.push((arguments[i__4819__auto___59267]));

var G__59270 = (i__4819__auto___59267 + (1));
i__4819__auto___59267 = G__59270;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__57684){
var map__57685 = p__57684;
var map__57685__$1 = cljs.core.__destructure_map(map__57685);
var opts = map__57685__$1;
var statearr_57686_59274 = state;
(statearr_57686_59274[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_57688_59279 = state;
(statearr_57688_59279[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_57689_59280 = state;
(statearr_57689_59280[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq57673){
var G__57674 = cljs.core.first(seq57673);
var seq57673__$1 = cljs.core.next(seq57673);
var G__57675 = cljs.core.first(seq57673__$1);
var seq57673__$2 = cljs.core.next(seq57673__$1);
var G__57676 = cljs.core.first(seq57673__$2);
var seq57673__$3 = cljs.core.next(seq57673__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57674,G__57675,G__57676,seq57673__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57699 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57699 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta57700){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta57700 = meta57700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57701,meta57700__$1){
var self__ = this;
var _57701__$1 = this;
return (new cljs.core.async.t_cljs$core$async57699(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta57700__$1));
}));

(cljs.core.async.t_cljs$core$async57699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57701){
var self__ = this;
var _57701__$1 = this;
return self__.meta57700;
}));

(cljs.core.async.t_cljs$core$async57699.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57699.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async57699.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57699.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57699.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57699.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57699.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57699.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57699.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta57700","meta57700",-1746261001,null)], null);
}));

(cljs.core.async.t_cljs$core$async57699.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57699.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57699");

(cljs.core.async.t_cljs$core$async57699.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async57699");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57699.
 */
cljs.core.async.__GT_t_cljs$core$async57699 = (function cljs$core$async$mix_$___GT_t_cljs$core$async57699(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57700){
return (new cljs.core.async.t_cljs$core$async57699(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57700));
});

}

return (new cljs.core.async.t_cljs$core$async57699(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43632__auto___59287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43633__auto__ = (function (){var switch__43562__auto__ = (function (state_57807){
var state_val_57808 = (state_57807[(1)]);
if((state_val_57808 === (7))){
var inst_57758 = (state_57807[(2)]);
var state_57807__$1 = state_57807;
if(cljs.core.truth_(inst_57758)){
var statearr_57809_59289 = state_57807__$1;
(statearr_57809_59289[(1)] = (8));

} else {
var statearr_57810_59291 = state_57807__$1;
(statearr_57810_59291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57808 === (20))){
var inst_57739 = (state_57807[(7)]);
var state_57807__$1 = state_57807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57807__$1,(23),out,inst_57739);
} else {
if((state_val_57808 === (1))){
var inst_57719 = calc_state();
var inst_57720 = cljs.core.__destructure_map(inst_57719);
var inst_57721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57720,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57720,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57720,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_57724 = inst_57719;
var state_57807__$1 = (function (){var statearr_57812 = state_57807;
(statearr_57812[(8)] = inst_57723);

(statearr_57812[(9)] = inst_57724);

(statearr_57812[(10)] = inst_57722);

(statearr_57812[(11)] = inst_57721);

return statearr_57812;
})();
var statearr_57813_59296 = state_57807__$1;
(statearr_57813_59296[(2)] = null);

(statearr_57813_59296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57808 === (24))){
var inst_57730 = (state_57807[(12)]);
var inst_57724 = inst_57730;
var state_57807__$1 = (function (){var statearr_57814 = state_57807;
(statearr_57814[(9)] = inst_57724);

return statearr_57814;
})();
var statearr_57815_59297 = state_57807__$1;
(statearr_57815_59297[(2)] = null);

(statearr_57815_59297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57808 === (4))){
var inst_57739 = (state_57807[(7)]);
var inst_57749 = (state_57807[(13)]);
var inst_57738 = (state_57807[(2)]);
var inst_57739__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57738,(0),null);
var inst_57740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57738,(1),null);
var inst_57749__$1 = (inst_57739__$1 == null);
var state_57807__$1 = (function (){var statearr_57816 = state_57807;
(statearr_57816[(7)] = inst_57739__$1);

(statearr_57816[(13)] = inst_57749__$1);

(statearr_57816[(14)] = inst_57740);

return statearr_57816;
})();
if(cljs.core.truth_(inst_57749__$1)){
var statearr_57825_59298 = state_57807__$1;
(statearr_57825_59298[(1)] = (5));

} else {
var statearr_57826_59299 = state_57807__$1;
(statearr_57826_59299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57808 === (15))){
var inst_57731 = (state_57807[(15)]);
var inst_57780 = (state_57807[(16)]);
var inst_57780__$1 = cljs.core.empty_QMARK_(inst_57731);
var state_57807__$1 = (function (){var statearr_57835 = state_57807;
(statearr_57835[(16)] = inst_57780__$1);

return statearr_57835;
})();
if(inst_57780__$1){
var statearr_57841_59300 = state_57807__$1;
(statearr_57841_59300[(1)] = (17));

} else {
var statearr_57842_59301 = state_57807__$1;
(statearr_57842_59301[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57808 === (21))){
var inst_57730 = (state_57807[(12)]);
var inst_57724 = inst_57730;
var state_57807__$1 = (function (){var statearr_57843 = state_57807;
(statearr_57843[(9)] = inst_57724);

return statearr_57843;
})();
var statearr_57844_59302 = state_57807__$1;
(statearr_57844_59302[(2)] = null);

(statearr_57844_59302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57808 === (13))){
var inst_57773 = (state_57807[(2)]);
var inst_57774 = calc_state();
var inst_57724 = inst_57774;
var state_57807__$1 = (function (){var statearr_57845 = state_57807;
(statearr_57845[(9)] = inst_57724);

(statearr_57845[(17)] = inst_57773);

return statearr_57845;
})();
var statearr_57846_59303 = state_57807__$1;
(statearr_57846_59303[(2)] = null);

(statearr_57846_59303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57808 === (22))){
var inst_57801 = (state_57807[(2)]);
var state_57807__$1 = state_57807;
var statearr_57847_59304 = state_57807__$1;
(statearr_57847_59304[(2)] = inst_57801);

(statearr_57847_59304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57808 === (6))){
var inst_57740 = (state_57807[(14)]);
var inst_57756 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57740,change);
var state_57807__$1 = state_57807;
var statearr_57848_59305 = state_57807__$1;
(statearr_57848_59305[(2)] = inst_57756);

(statearr_57848_59305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57808 === (25))){
var state_57807__$1 = state_57807;
var statearr_57849_59306 = state_57807__$1;
(statearr_57849_59306[(2)] = null);

(statearr_57849_59306[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57808 === (17))){
var inst_57740 = (state_57807[(14)]);
var inst_57732 = (state_57807[(18)]);
var inst_57782 = (inst_57732.cljs$core$IFn$_invoke$arity$1 ? inst_57732.cljs$core$IFn$_invoke$arity$1(inst_57740) : inst_57732.call(null,inst_57740));
var inst_57783 = cljs.core.not(inst_57782);
var state_57807__$1 = state_57807;
var statearr_57851_59308 = state_57807__$1;
(statearr_57851_59308[(2)] = inst_57783);

(statearr_57851_59308[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57808 === (3))){
var inst_57805 = (state_57807[(2)]);
var state_57807__$1 = state_57807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57807__$1,inst_57805);
} else {
if((state_val_57808 === (12))){
var state_57807__$1 = state_57807;
var statearr_57852_59310 = state_57807__$1;
(statearr_57852_59310[(2)] = null);

(statearr_57852_59310[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57808 === (2))){
var inst_57724 = (state_57807[(9)]);
var inst_57730 = (state_57807[(12)]);
var inst_57730__$1 = cljs.core.__destructure_map(inst_57724);
var inst_57731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57730__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57730__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57730__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_57807__$1 = (function (){var statearr_57853 = state_57807;
(statearr_57853[(15)] = inst_57731);

(statearr_57853[(18)] = inst_57732);

(statearr_57853[(12)] = inst_57730__$1);

return statearr_57853;
})();
return cljs.core.async.ioc_alts_BANG_(state_57807__$1,(4),inst_57733);
} else {
if((state_val_57808 === (23))){
var inst_57792 = (state_57807[(2)]);
var state_57807__$1 = state_57807;
if(cljs.core.truth_(inst_57792)){
var statearr_57854_59312 = state_57807__$1;
(statearr_57854_59312[(1)] = (24));

} else {
var statearr_57855_59313 = state_57807__$1;
(statearr_57855_59313[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57808 === (19))){
var inst_57786 = (state_57807[(2)]);
var state_57807__$1 = state_57807;
var statearr_57857_59315 = state_57807__$1;
(statearr_57857_59315[(2)] = inst_57786);

(statearr_57857_59315[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57808 === (11))){
var inst_57740 = (state_57807[(14)]);
var inst_57770 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_57740);
var state_57807__$1 = state_57807;
var statearr_57858_59316 = state_57807__$1;
(statearr_57858_59316[(2)] = inst_57770);

(statearr_57858_59316[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57808 === (9))){
var inst_57731 = (state_57807[(15)]);
var inst_57777 = (state_57807[(19)]);
var inst_57740 = (state_57807[(14)]);
var inst_57777__$1 = (inst_57731.cljs$core$IFn$_invoke$arity$1 ? inst_57731.cljs$core$IFn$_invoke$arity$1(inst_57740) : inst_57731.call(null,inst_57740));
var state_57807__$1 = (function (){var statearr_57859 = state_57807;
(statearr_57859[(19)] = inst_57777__$1);

return statearr_57859;
})();
if(cljs.core.truth_(inst_57777__$1)){
var statearr_57860_59317 = state_57807__$1;
(statearr_57860_59317[(1)] = (14));

} else {
var statearr_57861_59318 = state_57807__$1;
(statearr_57861_59318[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57808 === (5))){
var inst_57749 = (state_57807[(13)]);
var state_57807__$1 = state_57807;
var statearr_57862_59319 = state_57807__$1;
(statearr_57862_59319[(2)] = inst_57749);

(statearr_57862_59319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57808 === (14))){
var inst_57777 = (state_57807[(19)]);
var state_57807__$1 = state_57807;
var statearr_57863_59320 = state_57807__$1;
(statearr_57863_59320[(2)] = inst_57777);

(statearr_57863_59320[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57808 === (26))){
var inst_57797 = (state_57807[(2)]);
var state_57807__$1 = state_57807;
var statearr_57865_59324 = state_57807__$1;
(statearr_57865_59324[(2)] = inst_57797);

(statearr_57865_59324[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57808 === (16))){
var inst_57788 = (state_57807[(2)]);
var state_57807__$1 = state_57807;
if(cljs.core.truth_(inst_57788)){
var statearr_57866_59325 = state_57807__$1;
(statearr_57866_59325[(1)] = (20));

} else {
var statearr_57867_59326 = state_57807__$1;
(statearr_57867_59326[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57808 === (10))){
var inst_57803 = (state_57807[(2)]);
var state_57807__$1 = state_57807;
var statearr_57868_59327 = state_57807__$1;
(statearr_57868_59327[(2)] = inst_57803);

(statearr_57868_59327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57808 === (18))){
var inst_57780 = (state_57807[(16)]);
var state_57807__$1 = state_57807;
var statearr_57869_59328 = state_57807__$1;
(statearr_57869_59328[(2)] = inst_57780);

(statearr_57869_59328[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57808 === (8))){
var inst_57739 = (state_57807[(7)]);
var inst_57764 = (inst_57739 == null);
var state_57807__$1 = state_57807;
if(cljs.core.truth_(inst_57764)){
var statearr_57870_59329 = state_57807__$1;
(statearr_57870_59329[(1)] = (11));

} else {
var statearr_57871_59330 = state_57807__$1;
(statearr_57871_59330[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__43563__auto__ = null;
var cljs$core$async$mix_$_state_machine__43563__auto____0 = (function (){
var statearr_57872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57872[(0)] = cljs$core$async$mix_$_state_machine__43563__auto__);

(statearr_57872[(1)] = (1));

return statearr_57872;
});
var cljs$core$async$mix_$_state_machine__43563__auto____1 = (function (state_57807){
while(true){
var ret_value__43564__auto__ = (function (){try{while(true){
var result__43565__auto__ = switch__43562__auto__(state_57807);
if(cljs.core.keyword_identical_QMARK_(result__43565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43565__auto__;
}
break;
}
}catch (e57874){var ex__43566__auto__ = e57874;
var statearr_57875_59331 = state_57807;
(statearr_57875_59331[(2)] = ex__43566__auto__);


if(cljs.core.seq((state_57807[(4)]))){
var statearr_57876_59332 = state_57807;
(statearr_57876_59332[(1)] = cljs.core.first((state_57807[(4)])));

} else {
throw ex__43566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59333 = state_57807;
state_57807 = G__59333;
continue;
} else {
return ret_value__43564__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43563__auto__ = function(state_57807){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43563__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43563__auto____1.call(this,state_57807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43563__auto____0;
cljs$core$async$mix_$_state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43563__auto____1;
return cljs$core$async$mix_$_state_machine__43563__auto__;
})()
})();
var state__43634__auto__ = (function (){var statearr_57877 = f__43633__auto__();
(statearr_57877[(6)] = c__43632__auto___59287);

return statearr_57877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43634__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_59335 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_59335(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_59340 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_59340(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_59341 = (function() {
var G__59342 = null;
var G__59342__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__59342__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__59342 = function(p,v){
switch(arguments.length){
case 1:
return G__59342__1.call(this,p);
case 2:
return G__59342__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__59342.cljs$core$IFn$_invoke$arity$1 = G__59342__1;
G__59342.cljs$core$IFn$_invoke$arity$2 = G__59342__2;
return G__59342;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__57882 = arguments.length;
switch (G__57882) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_59341(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_59341(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__57887 = arguments.length;
switch (G__57887) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__57884_SHARP_){
if(cljs.core.truth_((p1__57884_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__57884_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__57884_SHARP_.call(null,topic)))){
return p1__57884_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__57884_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57888 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57888 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta57889){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta57889 = meta57889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57890,meta57889__$1){
var self__ = this;
var _57890__$1 = this;
return (new cljs.core.async.t_cljs$core$async57888(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta57889__$1));
}));

(cljs.core.async.t_cljs$core$async57888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57890){
var self__ = this;
var _57890__$1 = this;
return self__.meta57889;
}));

(cljs.core.async.t_cljs$core$async57888.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57888.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async57888.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57888.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async57888.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async57888.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async57888.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async57888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta57889","meta57889",1424421534,null)], null);
}));

(cljs.core.async.t_cljs$core$async57888.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57888");

(cljs.core.async.t_cljs$core$async57888.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async57888");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57888.
 */
cljs.core.async.__GT_t_cljs$core$async57888 = (function cljs$core$async$__GT_t_cljs$core$async57888(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta57889){
return (new cljs.core.async.t_cljs$core$async57888(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta57889));
});

}

return (new cljs.core.async.t_cljs$core$async57888(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43632__auto___59358 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43633__auto__ = (function (){var switch__43562__auto__ = (function (state_57965){
var state_val_57966 = (state_57965[(1)]);
if((state_val_57966 === (7))){
var inst_57961 = (state_57965[(2)]);
var state_57965__$1 = state_57965;
var statearr_57968_59359 = state_57965__$1;
(statearr_57968_59359[(2)] = inst_57961);

(statearr_57968_59359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57966 === (20))){
var state_57965__$1 = state_57965;
var statearr_57969_59360 = state_57965__$1;
(statearr_57969_59360[(2)] = null);

(statearr_57969_59360[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57966 === (1))){
var state_57965__$1 = state_57965;
var statearr_57970_59364 = state_57965__$1;
(statearr_57970_59364[(2)] = null);

(statearr_57970_59364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57966 === (24))){
var inst_57944 = (state_57965[(7)]);
var inst_57953 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_57944);
var state_57965__$1 = state_57965;
var statearr_57971_59365 = state_57965__$1;
(statearr_57971_59365[(2)] = inst_57953);

(statearr_57971_59365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57966 === (4))){
var inst_57895 = (state_57965[(8)]);
var inst_57895__$1 = (state_57965[(2)]);
var inst_57896 = (inst_57895__$1 == null);
var state_57965__$1 = (function (){var statearr_57972 = state_57965;
(statearr_57972[(8)] = inst_57895__$1);

return statearr_57972;
})();
if(cljs.core.truth_(inst_57896)){
var statearr_57973_59367 = state_57965__$1;
(statearr_57973_59367[(1)] = (5));

} else {
var statearr_57974_59371 = state_57965__$1;
(statearr_57974_59371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57966 === (15))){
var inst_57938 = (state_57965[(2)]);
var state_57965__$1 = state_57965;
var statearr_57976_59372 = state_57965__$1;
(statearr_57976_59372[(2)] = inst_57938);

(statearr_57976_59372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57966 === (21))){
var inst_57958 = (state_57965[(2)]);
var state_57965__$1 = (function (){var statearr_57977 = state_57965;
(statearr_57977[(9)] = inst_57958);

return statearr_57977;
})();
var statearr_57978_59373 = state_57965__$1;
(statearr_57978_59373[(2)] = null);

(statearr_57978_59373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57966 === (13))){
var inst_57920 = (state_57965[(10)]);
var inst_57922 = cljs.core.chunked_seq_QMARK_(inst_57920);
var state_57965__$1 = state_57965;
if(inst_57922){
var statearr_57979_59374 = state_57965__$1;
(statearr_57979_59374[(1)] = (16));

} else {
var statearr_57980_59375 = state_57965__$1;
(statearr_57980_59375[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57966 === (22))){
var inst_57950 = (state_57965[(2)]);
var state_57965__$1 = state_57965;
if(cljs.core.truth_(inst_57950)){
var statearr_57981_59376 = state_57965__$1;
(statearr_57981_59376[(1)] = (23));

} else {
var statearr_57982_59377 = state_57965__$1;
(statearr_57982_59377[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57966 === (6))){
var inst_57946 = (state_57965[(11)]);
var inst_57944 = (state_57965[(7)]);
var inst_57895 = (state_57965[(8)]);
var inst_57944__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_57895) : topic_fn.call(null,inst_57895));
var inst_57945 = cljs.core.deref(mults);
var inst_57946__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57945,inst_57944__$1);
var state_57965__$1 = (function (){var statearr_57984 = state_57965;
(statearr_57984[(11)] = inst_57946__$1);

(statearr_57984[(7)] = inst_57944__$1);

return statearr_57984;
})();
if(cljs.core.truth_(inst_57946__$1)){
var statearr_57985_59379 = state_57965__$1;
(statearr_57985_59379[(1)] = (19));

} else {
var statearr_57986_59380 = state_57965__$1;
(statearr_57986_59380[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57966 === (25))){
var inst_57955 = (state_57965[(2)]);
var state_57965__$1 = state_57965;
var statearr_57987_59381 = state_57965__$1;
(statearr_57987_59381[(2)] = inst_57955);

(statearr_57987_59381[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57966 === (17))){
var inst_57920 = (state_57965[(10)]);
var inst_57929 = cljs.core.first(inst_57920);
var inst_57930 = cljs.core.async.muxch_STAR_(inst_57929);
var inst_57931 = cljs.core.async.close_BANG_(inst_57930);
var inst_57932 = cljs.core.next(inst_57920);
var inst_57906 = inst_57932;
var inst_57907 = null;
var inst_57908 = (0);
var inst_57909 = (0);
var state_57965__$1 = (function (){var statearr_57988 = state_57965;
(statearr_57988[(12)] = inst_57906);

(statearr_57988[(13)] = inst_57909);

(statearr_57988[(14)] = inst_57907);

(statearr_57988[(15)] = inst_57931);

(statearr_57988[(16)] = inst_57908);

return statearr_57988;
})();
var statearr_57989_59382 = state_57965__$1;
(statearr_57989_59382[(2)] = null);

(statearr_57989_59382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57966 === (3))){
var inst_57963 = (state_57965[(2)]);
var state_57965__$1 = state_57965;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57965__$1,inst_57963);
} else {
if((state_val_57966 === (12))){
var inst_57940 = (state_57965[(2)]);
var state_57965__$1 = state_57965;
var statearr_57990_59384 = state_57965__$1;
(statearr_57990_59384[(2)] = inst_57940);

(statearr_57990_59384[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57966 === (2))){
var state_57965__$1 = state_57965;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57965__$1,(4),ch);
} else {
if((state_val_57966 === (23))){
var state_57965__$1 = state_57965;
var statearr_57992_59386 = state_57965__$1;
(statearr_57992_59386[(2)] = null);

(statearr_57992_59386[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57966 === (19))){
var inst_57946 = (state_57965[(11)]);
var inst_57895 = (state_57965[(8)]);
var inst_57948 = cljs.core.async.muxch_STAR_(inst_57946);
var state_57965__$1 = state_57965;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57965__$1,(22),inst_57948,inst_57895);
} else {
if((state_val_57966 === (11))){
var inst_57906 = (state_57965[(12)]);
var inst_57920 = (state_57965[(10)]);
var inst_57920__$1 = cljs.core.seq(inst_57906);
var state_57965__$1 = (function (){var statearr_57993 = state_57965;
(statearr_57993[(10)] = inst_57920__$1);

return statearr_57993;
})();
if(inst_57920__$1){
var statearr_57994_59387 = state_57965__$1;
(statearr_57994_59387[(1)] = (13));

} else {
var statearr_57995_59388 = state_57965__$1;
(statearr_57995_59388[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57966 === (9))){
var inst_57942 = (state_57965[(2)]);
var state_57965__$1 = state_57965;
var statearr_57996_59392 = state_57965__$1;
(statearr_57996_59392[(2)] = inst_57942);

(statearr_57996_59392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57966 === (5))){
var inst_57902 = cljs.core.deref(mults);
var inst_57903 = cljs.core.vals(inst_57902);
var inst_57904 = cljs.core.seq(inst_57903);
var inst_57906 = inst_57904;
var inst_57907 = null;
var inst_57908 = (0);
var inst_57909 = (0);
var state_57965__$1 = (function (){var statearr_57997 = state_57965;
(statearr_57997[(12)] = inst_57906);

(statearr_57997[(13)] = inst_57909);

(statearr_57997[(14)] = inst_57907);

(statearr_57997[(16)] = inst_57908);

return statearr_57997;
})();
var statearr_57998_59393 = state_57965__$1;
(statearr_57998_59393[(2)] = null);

(statearr_57998_59393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57966 === (14))){
var state_57965__$1 = state_57965;
var statearr_58003_59394 = state_57965__$1;
(statearr_58003_59394[(2)] = null);

(statearr_58003_59394[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57966 === (16))){
var inst_57920 = (state_57965[(10)]);
var inst_57924 = cljs.core.chunk_first(inst_57920);
var inst_57925 = cljs.core.chunk_rest(inst_57920);
var inst_57926 = cljs.core.count(inst_57924);
var inst_57906 = inst_57925;
var inst_57907 = inst_57924;
var inst_57908 = inst_57926;
var inst_57909 = (0);
var state_57965__$1 = (function (){var statearr_58004 = state_57965;
(statearr_58004[(12)] = inst_57906);

(statearr_58004[(13)] = inst_57909);

(statearr_58004[(14)] = inst_57907);

(statearr_58004[(16)] = inst_57908);

return statearr_58004;
})();
var statearr_58005_59395 = state_57965__$1;
(statearr_58005_59395[(2)] = null);

(statearr_58005_59395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57966 === (10))){
var inst_57906 = (state_57965[(12)]);
var inst_57909 = (state_57965[(13)]);
var inst_57907 = (state_57965[(14)]);
var inst_57908 = (state_57965[(16)]);
var inst_57914 = cljs.core._nth(inst_57907,inst_57909);
var inst_57915 = cljs.core.async.muxch_STAR_(inst_57914);
var inst_57916 = cljs.core.async.close_BANG_(inst_57915);
var inst_57917 = (inst_57909 + (1));
var tmp58000 = inst_57906;
var tmp58001 = inst_57907;
var tmp58002 = inst_57908;
var inst_57906__$1 = tmp58000;
var inst_57907__$1 = tmp58001;
var inst_57908__$1 = tmp58002;
var inst_57909__$1 = inst_57917;
var state_57965__$1 = (function (){var statearr_58006 = state_57965;
(statearr_58006[(12)] = inst_57906__$1);

(statearr_58006[(13)] = inst_57909__$1);

(statearr_58006[(14)] = inst_57907__$1);

(statearr_58006[(17)] = inst_57916);

(statearr_58006[(16)] = inst_57908__$1);

return statearr_58006;
})();
var statearr_58007_59396 = state_57965__$1;
(statearr_58007_59396[(2)] = null);

(statearr_58007_59396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57966 === (18))){
var inst_57935 = (state_57965[(2)]);
var state_57965__$1 = state_57965;
var statearr_58009_59397 = state_57965__$1;
(statearr_58009_59397[(2)] = inst_57935);

(statearr_58009_59397[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57966 === (8))){
var inst_57909 = (state_57965[(13)]);
var inst_57908 = (state_57965[(16)]);
var inst_57911 = (inst_57909 < inst_57908);
var inst_57912 = inst_57911;
var state_57965__$1 = state_57965;
if(cljs.core.truth_(inst_57912)){
var statearr_58010_59398 = state_57965__$1;
(statearr_58010_59398[(1)] = (10));

} else {
var statearr_58011_59400 = state_57965__$1;
(statearr_58011_59400[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43563__auto__ = null;
var cljs$core$async$state_machine__43563__auto____0 = (function (){
var statearr_58012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58012[(0)] = cljs$core$async$state_machine__43563__auto__);

(statearr_58012[(1)] = (1));

return statearr_58012;
});
var cljs$core$async$state_machine__43563__auto____1 = (function (state_57965){
while(true){
var ret_value__43564__auto__ = (function (){try{while(true){
var result__43565__auto__ = switch__43562__auto__(state_57965);
if(cljs.core.keyword_identical_QMARK_(result__43565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43565__auto__;
}
break;
}
}catch (e58013){var ex__43566__auto__ = e58013;
var statearr_58014_59404 = state_57965;
(statearr_58014_59404[(2)] = ex__43566__auto__);


if(cljs.core.seq((state_57965[(4)]))){
var statearr_58015_59405 = state_57965;
(statearr_58015_59405[(1)] = cljs.core.first((state_57965[(4)])));

} else {
throw ex__43566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59406 = state_57965;
state_57965 = G__59406;
continue;
} else {
return ret_value__43564__auto__;
}
break;
}
});
cljs$core$async$state_machine__43563__auto__ = function(state_57965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43563__auto____1.call(this,state_57965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43563__auto____0;
cljs$core$async$state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43563__auto____1;
return cljs$core$async$state_machine__43563__auto__;
})()
})();
var state__43634__auto__ = (function (){var statearr_58017 = f__43633__auto__();
(statearr_58017[(6)] = c__43632__auto___59358);

return statearr_58017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43634__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__58019 = arguments.length;
switch (G__58019) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__58022 = arguments.length;
switch (G__58022) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__58025 = arguments.length;
switch (G__58025) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__43632__auto___59414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43633__auto__ = (function (){var switch__43562__auto__ = (function (state_58070){
var state_val_58071 = (state_58070[(1)]);
if((state_val_58071 === (7))){
var state_58070__$1 = state_58070;
var statearr_58072_59415 = state_58070__$1;
(statearr_58072_59415[(2)] = null);

(statearr_58072_59415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58071 === (1))){
var state_58070__$1 = state_58070;
var statearr_58073_59416 = state_58070__$1;
(statearr_58073_59416[(2)] = null);

(statearr_58073_59416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58071 === (4))){
var inst_58029 = (state_58070[(7)]);
var inst_58030 = (state_58070[(8)]);
var inst_58032 = (inst_58030 < inst_58029);
var state_58070__$1 = state_58070;
if(cljs.core.truth_(inst_58032)){
var statearr_58075_59421 = state_58070__$1;
(statearr_58075_59421[(1)] = (6));

} else {
var statearr_58076_59422 = state_58070__$1;
(statearr_58076_59422[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58071 === (15))){
var inst_58056 = (state_58070[(9)]);
var inst_58061 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_58056);
var state_58070__$1 = state_58070;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58070__$1,(17),out,inst_58061);
} else {
if((state_val_58071 === (13))){
var inst_58056 = (state_58070[(9)]);
var inst_58056__$1 = (state_58070[(2)]);
var inst_58057 = cljs.core.some(cljs.core.nil_QMARK_,inst_58056__$1);
var state_58070__$1 = (function (){var statearr_58077 = state_58070;
(statearr_58077[(9)] = inst_58056__$1);

return statearr_58077;
})();
if(cljs.core.truth_(inst_58057)){
var statearr_58078_59424 = state_58070__$1;
(statearr_58078_59424[(1)] = (14));

} else {
var statearr_58079_59425 = state_58070__$1;
(statearr_58079_59425[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58071 === (6))){
var state_58070__$1 = state_58070;
var statearr_58080_59426 = state_58070__$1;
(statearr_58080_59426[(2)] = null);

(statearr_58080_59426[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58071 === (17))){
var inst_58063 = (state_58070[(2)]);
var state_58070__$1 = (function (){var statearr_58083 = state_58070;
(statearr_58083[(10)] = inst_58063);

return statearr_58083;
})();
var statearr_58084_59427 = state_58070__$1;
(statearr_58084_59427[(2)] = null);

(statearr_58084_59427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58071 === (3))){
var inst_58068 = (state_58070[(2)]);
var state_58070__$1 = state_58070;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58070__$1,inst_58068);
} else {
if((state_val_58071 === (12))){
var _ = (function (){var statearr_58085 = state_58070;
(statearr_58085[(4)] = cljs.core.rest((state_58070[(4)])));

return statearr_58085;
})();
var state_58070__$1 = state_58070;
var ex58082 = (state_58070__$1[(2)]);
var statearr_58086_59428 = state_58070__$1;
(statearr_58086_59428[(5)] = ex58082);


if((ex58082 instanceof Object)){
var statearr_58088_59437 = state_58070__$1;
(statearr_58088_59437[(1)] = (11));

(statearr_58088_59437[(5)] = null);

} else {
throw ex58082;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58071 === (2))){
var inst_58028 = cljs.core.reset_BANG_(dctr,cnt);
var inst_58029 = cnt;
var inst_58030 = (0);
var state_58070__$1 = (function (){var statearr_58089 = state_58070;
(statearr_58089[(7)] = inst_58029);

(statearr_58089[(11)] = inst_58028);

(statearr_58089[(8)] = inst_58030);

return statearr_58089;
})();
var statearr_58090_59445 = state_58070__$1;
(statearr_58090_59445[(2)] = null);

(statearr_58090_59445[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58071 === (11))){
var inst_58034 = (state_58070[(2)]);
var inst_58035 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_58070__$1 = (function (){var statearr_58091 = state_58070;
(statearr_58091[(12)] = inst_58034);

return statearr_58091;
})();
var statearr_58092_59446 = state_58070__$1;
(statearr_58092_59446[(2)] = inst_58035);

(statearr_58092_59446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58071 === (9))){
var inst_58030 = (state_58070[(8)]);
var _ = (function (){var statearr_58094 = state_58070;
(statearr_58094[(4)] = cljs.core.cons((12),(state_58070[(4)])));

return statearr_58094;
})();
var inst_58042 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_58030) : chs__$1.call(null,inst_58030));
var inst_58043 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_58030) : done.call(null,inst_58030));
var inst_58044 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_58042,inst_58043);
var ___$1 = (function (){var statearr_58095 = state_58070;
(statearr_58095[(4)] = cljs.core.rest((state_58070[(4)])));

return statearr_58095;
})();
var state_58070__$1 = state_58070;
var statearr_58096_59457 = state_58070__$1;
(statearr_58096_59457[(2)] = inst_58044);

(statearr_58096_59457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58071 === (5))){
var inst_58054 = (state_58070[(2)]);
var state_58070__$1 = (function (){var statearr_58097 = state_58070;
(statearr_58097[(13)] = inst_58054);

return statearr_58097;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58070__$1,(13),dchan);
} else {
if((state_val_58071 === (14))){
var inst_58059 = cljs.core.async.close_BANG_(out);
var state_58070__$1 = state_58070;
var statearr_58098_59458 = state_58070__$1;
(statearr_58098_59458[(2)] = inst_58059);

(statearr_58098_59458[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58071 === (16))){
var inst_58066 = (state_58070[(2)]);
var state_58070__$1 = state_58070;
var statearr_58099_59459 = state_58070__$1;
(statearr_58099_59459[(2)] = inst_58066);

(statearr_58099_59459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58071 === (10))){
var inst_58030 = (state_58070[(8)]);
var inst_58047 = (state_58070[(2)]);
var inst_58048 = (inst_58030 + (1));
var inst_58030__$1 = inst_58048;
var state_58070__$1 = (function (){var statearr_58100 = state_58070;
(statearr_58100[(14)] = inst_58047);

(statearr_58100[(8)] = inst_58030__$1);

return statearr_58100;
})();
var statearr_58101_59466 = state_58070__$1;
(statearr_58101_59466[(2)] = null);

(statearr_58101_59466[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58071 === (8))){
var inst_58052 = (state_58070[(2)]);
var state_58070__$1 = state_58070;
var statearr_58103_59469 = state_58070__$1;
(statearr_58103_59469[(2)] = inst_58052);

(statearr_58103_59469[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43563__auto__ = null;
var cljs$core$async$state_machine__43563__auto____0 = (function (){
var statearr_58104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58104[(0)] = cljs$core$async$state_machine__43563__auto__);

(statearr_58104[(1)] = (1));

return statearr_58104;
});
var cljs$core$async$state_machine__43563__auto____1 = (function (state_58070){
while(true){
var ret_value__43564__auto__ = (function (){try{while(true){
var result__43565__auto__ = switch__43562__auto__(state_58070);
if(cljs.core.keyword_identical_QMARK_(result__43565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43565__auto__;
}
break;
}
}catch (e58105){var ex__43566__auto__ = e58105;
var statearr_58106_59479 = state_58070;
(statearr_58106_59479[(2)] = ex__43566__auto__);


if(cljs.core.seq((state_58070[(4)]))){
var statearr_58107_59483 = state_58070;
(statearr_58107_59483[(1)] = cljs.core.first((state_58070[(4)])));

} else {
throw ex__43566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59484 = state_58070;
state_58070 = G__59484;
continue;
} else {
return ret_value__43564__auto__;
}
break;
}
});
cljs$core$async$state_machine__43563__auto__ = function(state_58070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43563__auto____1.call(this,state_58070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43563__auto____0;
cljs$core$async$state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43563__auto____1;
return cljs$core$async$state_machine__43563__auto__;
})()
})();
var state__43634__auto__ = (function (){var statearr_58108 = f__43633__auto__();
(statearr_58108[(6)] = c__43632__auto___59414);

return statearr_58108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43634__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__58112 = arguments.length;
switch (G__58112) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43632__auto___59486 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43633__auto__ = (function (){var switch__43562__auto__ = (function (state_58145){
var state_val_58146 = (state_58145[(1)]);
if((state_val_58146 === (7))){
var inst_58125 = (state_58145[(7)]);
var inst_58124 = (state_58145[(8)]);
var inst_58124__$1 = (state_58145[(2)]);
var inst_58125__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58124__$1,(0),null);
var inst_58126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58124__$1,(1),null);
var inst_58127 = (inst_58125__$1 == null);
var state_58145__$1 = (function (){var statearr_58147 = state_58145;
(statearr_58147[(9)] = inst_58126);

(statearr_58147[(7)] = inst_58125__$1);

(statearr_58147[(8)] = inst_58124__$1);

return statearr_58147;
})();
if(cljs.core.truth_(inst_58127)){
var statearr_58148_59489 = state_58145__$1;
(statearr_58148_59489[(1)] = (8));

} else {
var statearr_58149_59490 = state_58145__$1;
(statearr_58149_59490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58146 === (1))){
var inst_58113 = cljs.core.vec(chs);
var inst_58114 = inst_58113;
var state_58145__$1 = (function (){var statearr_58150 = state_58145;
(statearr_58150[(10)] = inst_58114);

return statearr_58150;
})();
var statearr_58152_59491 = state_58145__$1;
(statearr_58152_59491[(2)] = null);

(statearr_58152_59491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58146 === (4))){
var inst_58114 = (state_58145[(10)]);
var state_58145__$1 = state_58145;
return cljs.core.async.ioc_alts_BANG_(state_58145__$1,(7),inst_58114);
} else {
if((state_val_58146 === (6))){
var inst_58141 = (state_58145[(2)]);
var state_58145__$1 = state_58145;
var statearr_58153_59493 = state_58145__$1;
(statearr_58153_59493[(2)] = inst_58141);

(statearr_58153_59493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58146 === (3))){
var inst_58143 = (state_58145[(2)]);
var state_58145__$1 = state_58145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58145__$1,inst_58143);
} else {
if((state_val_58146 === (2))){
var inst_58114 = (state_58145[(10)]);
var inst_58117 = cljs.core.count(inst_58114);
var inst_58118 = (inst_58117 > (0));
var state_58145__$1 = state_58145;
if(cljs.core.truth_(inst_58118)){
var statearr_58155_59494 = state_58145__$1;
(statearr_58155_59494[(1)] = (4));

} else {
var statearr_58156_59495 = state_58145__$1;
(statearr_58156_59495[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58146 === (11))){
var inst_58114 = (state_58145[(10)]);
var inst_58134 = (state_58145[(2)]);
var tmp58154 = inst_58114;
var inst_58114__$1 = tmp58154;
var state_58145__$1 = (function (){var statearr_58157 = state_58145;
(statearr_58157[(11)] = inst_58134);

(statearr_58157[(10)] = inst_58114__$1);

return statearr_58157;
})();
var statearr_58158_59496 = state_58145__$1;
(statearr_58158_59496[(2)] = null);

(statearr_58158_59496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58146 === (9))){
var inst_58125 = (state_58145[(7)]);
var state_58145__$1 = state_58145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58145__$1,(11),out,inst_58125);
} else {
if((state_val_58146 === (5))){
var inst_58139 = cljs.core.async.close_BANG_(out);
var state_58145__$1 = state_58145;
var statearr_58159_59497 = state_58145__$1;
(statearr_58159_59497[(2)] = inst_58139);

(statearr_58159_59497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58146 === (10))){
var inst_58137 = (state_58145[(2)]);
var state_58145__$1 = state_58145;
var statearr_58161_59498 = state_58145__$1;
(statearr_58161_59498[(2)] = inst_58137);

(statearr_58161_59498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58146 === (8))){
var inst_58126 = (state_58145[(9)]);
var inst_58114 = (state_58145[(10)]);
var inst_58125 = (state_58145[(7)]);
var inst_58124 = (state_58145[(8)]);
var inst_58129 = (function (){var cs = inst_58114;
var vec__58120 = inst_58124;
var v = inst_58125;
var c = inst_58126;
return (function (p1__58110_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__58110_SHARP_);
});
})();
var inst_58130 = cljs.core.filterv(inst_58129,inst_58114);
var inst_58114__$1 = inst_58130;
var state_58145__$1 = (function (){var statearr_58162 = state_58145;
(statearr_58162[(10)] = inst_58114__$1);

return statearr_58162;
})();
var statearr_58163_59503 = state_58145__$1;
(statearr_58163_59503[(2)] = null);

(statearr_58163_59503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43563__auto__ = null;
var cljs$core$async$state_machine__43563__auto____0 = (function (){
var statearr_58164 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58164[(0)] = cljs$core$async$state_machine__43563__auto__);

(statearr_58164[(1)] = (1));

return statearr_58164;
});
var cljs$core$async$state_machine__43563__auto____1 = (function (state_58145){
while(true){
var ret_value__43564__auto__ = (function (){try{while(true){
var result__43565__auto__ = switch__43562__auto__(state_58145);
if(cljs.core.keyword_identical_QMARK_(result__43565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43565__auto__;
}
break;
}
}catch (e58165){var ex__43566__auto__ = e58165;
var statearr_58166_59507 = state_58145;
(statearr_58166_59507[(2)] = ex__43566__auto__);


if(cljs.core.seq((state_58145[(4)]))){
var statearr_58167_59508 = state_58145;
(statearr_58167_59508[(1)] = cljs.core.first((state_58145[(4)])));

} else {
throw ex__43566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59509 = state_58145;
state_58145 = G__59509;
continue;
} else {
return ret_value__43564__auto__;
}
break;
}
});
cljs$core$async$state_machine__43563__auto__ = function(state_58145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43563__auto____1.call(this,state_58145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43563__auto____0;
cljs$core$async$state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43563__auto____1;
return cljs$core$async$state_machine__43563__auto__;
})()
})();
var state__43634__auto__ = (function (){var statearr_58170 = f__43633__auto__();
(statearr_58170[(6)] = c__43632__auto___59486);

return statearr_58170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43634__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__58172 = arguments.length;
switch (G__58172) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43632__auto___59511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43633__auto__ = (function (){var switch__43562__auto__ = (function (state_58198){
var state_val_58199 = (state_58198[(1)]);
if((state_val_58199 === (7))){
var inst_58180 = (state_58198[(7)]);
var inst_58180__$1 = (state_58198[(2)]);
var inst_58181 = (inst_58180__$1 == null);
var inst_58182 = cljs.core.not(inst_58181);
var state_58198__$1 = (function (){var statearr_58200 = state_58198;
(statearr_58200[(7)] = inst_58180__$1);

return statearr_58200;
})();
if(inst_58182){
var statearr_58201_59512 = state_58198__$1;
(statearr_58201_59512[(1)] = (8));

} else {
var statearr_58202_59513 = state_58198__$1;
(statearr_58202_59513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58199 === (1))){
var inst_58175 = (0);
var state_58198__$1 = (function (){var statearr_58203 = state_58198;
(statearr_58203[(8)] = inst_58175);

return statearr_58203;
})();
var statearr_58204_59514 = state_58198__$1;
(statearr_58204_59514[(2)] = null);

(statearr_58204_59514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58199 === (4))){
var state_58198__$1 = state_58198;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58198__$1,(7),ch);
} else {
if((state_val_58199 === (6))){
var inst_58193 = (state_58198[(2)]);
var state_58198__$1 = state_58198;
var statearr_58205_59515 = state_58198__$1;
(statearr_58205_59515[(2)] = inst_58193);

(statearr_58205_59515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58199 === (3))){
var inst_58195 = (state_58198[(2)]);
var inst_58196 = cljs.core.async.close_BANG_(out);
var state_58198__$1 = (function (){var statearr_58206 = state_58198;
(statearr_58206[(9)] = inst_58195);

return statearr_58206;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58198__$1,inst_58196);
} else {
if((state_val_58199 === (2))){
var inst_58175 = (state_58198[(8)]);
var inst_58177 = (inst_58175 < n);
var state_58198__$1 = state_58198;
if(cljs.core.truth_(inst_58177)){
var statearr_58207_59516 = state_58198__$1;
(statearr_58207_59516[(1)] = (4));

} else {
var statearr_58208_59517 = state_58198__$1;
(statearr_58208_59517[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58199 === (11))){
var inst_58175 = (state_58198[(8)]);
var inst_58185 = (state_58198[(2)]);
var inst_58186 = (inst_58175 + (1));
var inst_58175__$1 = inst_58186;
var state_58198__$1 = (function (){var statearr_58209 = state_58198;
(statearr_58209[(10)] = inst_58185);

(statearr_58209[(8)] = inst_58175__$1);

return statearr_58209;
})();
var statearr_58210_59519 = state_58198__$1;
(statearr_58210_59519[(2)] = null);

(statearr_58210_59519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58199 === (9))){
var state_58198__$1 = state_58198;
var statearr_58211_59520 = state_58198__$1;
(statearr_58211_59520[(2)] = null);

(statearr_58211_59520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58199 === (5))){
var state_58198__$1 = state_58198;
var statearr_58212_59521 = state_58198__$1;
(statearr_58212_59521[(2)] = null);

(statearr_58212_59521[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58199 === (10))){
var inst_58190 = (state_58198[(2)]);
var state_58198__$1 = state_58198;
var statearr_58213_59522 = state_58198__$1;
(statearr_58213_59522[(2)] = inst_58190);

(statearr_58213_59522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58199 === (8))){
var inst_58180 = (state_58198[(7)]);
var state_58198__$1 = state_58198;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58198__$1,(11),out,inst_58180);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43563__auto__ = null;
var cljs$core$async$state_machine__43563__auto____0 = (function (){
var statearr_58214 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58214[(0)] = cljs$core$async$state_machine__43563__auto__);

(statearr_58214[(1)] = (1));

return statearr_58214;
});
var cljs$core$async$state_machine__43563__auto____1 = (function (state_58198){
while(true){
var ret_value__43564__auto__ = (function (){try{while(true){
var result__43565__auto__ = switch__43562__auto__(state_58198);
if(cljs.core.keyword_identical_QMARK_(result__43565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43565__auto__;
}
break;
}
}catch (e58215){var ex__43566__auto__ = e58215;
var statearr_58216_59523 = state_58198;
(statearr_58216_59523[(2)] = ex__43566__auto__);


if(cljs.core.seq((state_58198[(4)]))){
var statearr_58217_59524 = state_58198;
(statearr_58217_59524[(1)] = cljs.core.first((state_58198[(4)])));

} else {
throw ex__43566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59525 = state_58198;
state_58198 = G__59525;
continue;
} else {
return ret_value__43564__auto__;
}
break;
}
});
cljs$core$async$state_machine__43563__auto__ = function(state_58198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43563__auto____1.call(this,state_58198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43563__auto____0;
cljs$core$async$state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43563__auto____1;
return cljs$core$async$state_machine__43563__auto__;
})()
})();
var state__43634__auto__ = (function (){var statearr_58218 = f__43633__auto__();
(statearr_58218[(6)] = c__43632__auto___59511);

return statearr_58218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43634__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58222 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58222 = (function (f,ch,meta58223){
this.f = f;
this.ch = ch;
this.meta58223 = meta58223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58224,meta58223__$1){
var self__ = this;
var _58224__$1 = this;
return (new cljs.core.async.t_cljs$core$async58222(self__.f,self__.ch,meta58223__$1));
}));

(cljs.core.async.t_cljs$core$async58222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58224){
var self__ = this;
var _58224__$1 = this;
return self__.meta58223;
}));

(cljs.core.async.t_cljs$core$async58222.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58222.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58222.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58222.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58222.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58225 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58225 = (function (f,ch,meta58223,_,fn1,meta58226){
this.f = f;
this.ch = ch;
this.meta58223 = meta58223;
this._ = _;
this.fn1 = fn1;
this.meta58226 = meta58226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58227,meta58226__$1){
var self__ = this;
var _58227__$1 = this;
return (new cljs.core.async.t_cljs$core$async58225(self__.f,self__.ch,self__.meta58223,self__._,self__.fn1,meta58226__$1));
}));

(cljs.core.async.t_cljs$core$async58225.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58227){
var self__ = this;
var _58227__$1 = this;
return self__.meta58226;
}));

(cljs.core.async.t_cljs$core$async58225.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58225.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async58225.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58225.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__58220_SHARP_){
var G__58228 = (((p1__58220_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__58220_SHARP_) : self__.f.call(null,p1__58220_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__58228) : f1.call(null,G__58228));
});
}));

(cljs.core.async.t_cljs$core$async58225.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58223","meta58223",2112036071,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async58222","cljs.core.async/t_cljs$core$async58222",-1481301252,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta58226","meta58226",-929612745,null)], null);
}));

(cljs.core.async.t_cljs$core$async58225.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58225.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58225");

(cljs.core.async.t_cljs$core$async58225.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async58225");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58225.
 */
cljs.core.async.__GT_t_cljs$core$async58225 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58225(f__$1,ch__$1,meta58223__$1,___$2,fn1__$1,meta58226){
return (new cljs.core.async.t_cljs$core$async58225(f__$1,ch__$1,meta58223__$1,___$2,fn1__$1,meta58226));
});

}

return (new cljs.core.async.t_cljs$core$async58225(self__.f,self__.ch,self__.meta58223,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__58232 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__58232) : self__.f.call(null,G__58232));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async58222.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58222.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async58222.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58223","meta58223",2112036071,null)], null);
}));

(cljs.core.async.t_cljs$core$async58222.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58222");

(cljs.core.async.t_cljs$core$async58222.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async58222");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58222.
 */
cljs.core.async.__GT_t_cljs$core$async58222 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58222(f__$1,ch__$1,meta58223){
return (new cljs.core.async.t_cljs$core$async58222(f__$1,ch__$1,meta58223));
});

}

return (new cljs.core.async.t_cljs$core$async58222(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58239 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58239 = (function (f,ch,meta58240){
this.f = f;
this.ch = ch;
this.meta58240 = meta58240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58241,meta58240__$1){
var self__ = this;
var _58241__$1 = this;
return (new cljs.core.async.t_cljs$core$async58239(self__.f,self__.ch,meta58240__$1));
}));

(cljs.core.async.t_cljs$core$async58239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58241){
var self__ = this;
var _58241__$1 = this;
return self__.meta58240;
}));

(cljs.core.async.t_cljs$core$async58239.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58239.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58239.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58239.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async58239.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58239.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async58239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58240","meta58240",-31198946,null)], null);
}));

(cljs.core.async.t_cljs$core$async58239.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58239");

(cljs.core.async.t_cljs$core$async58239.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async58239");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58239.
 */
cljs.core.async.__GT_t_cljs$core$async58239 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async58239(f__$1,ch__$1,meta58240){
return (new cljs.core.async.t_cljs$core$async58239(f__$1,ch__$1,meta58240));
});

}

return (new cljs.core.async.t_cljs$core$async58239(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58254 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58254 = (function (p,ch,meta58255){
this.p = p;
this.ch = ch;
this.meta58255 = meta58255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58256,meta58255__$1){
var self__ = this;
var _58256__$1 = this;
return (new cljs.core.async.t_cljs$core$async58254(self__.p,self__.ch,meta58255__$1));
}));

(cljs.core.async.t_cljs$core$async58254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58256){
var self__ = this;
var _58256__$1 = this;
return self__.meta58255;
}));

(cljs.core.async.t_cljs$core$async58254.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58254.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58254.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58254.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58254.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async58254.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58254.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async58254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58255","meta58255",1866130138,null)], null);
}));

(cljs.core.async.t_cljs$core$async58254.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58254");

(cljs.core.async.t_cljs$core$async58254.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async58254");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58254.
 */
cljs.core.async.__GT_t_cljs$core$async58254 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async58254(p__$1,ch__$1,meta58255){
return (new cljs.core.async.t_cljs$core$async58254(p__$1,ch__$1,meta58255));
});

}

return (new cljs.core.async.t_cljs$core$async58254(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__58275 = arguments.length;
switch (G__58275) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43632__auto___59548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43633__auto__ = (function (){var switch__43562__auto__ = (function (state_58303){
var state_val_58304 = (state_58303[(1)]);
if((state_val_58304 === (7))){
var inst_58299 = (state_58303[(2)]);
var state_58303__$1 = state_58303;
var statearr_58309_59549 = state_58303__$1;
(statearr_58309_59549[(2)] = inst_58299);

(statearr_58309_59549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58304 === (1))){
var state_58303__$1 = state_58303;
var statearr_58311_59550 = state_58303__$1;
(statearr_58311_59550[(2)] = null);

(statearr_58311_59550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58304 === (4))){
var inst_58282 = (state_58303[(7)]);
var inst_58282__$1 = (state_58303[(2)]);
var inst_58283 = (inst_58282__$1 == null);
var state_58303__$1 = (function (){var statearr_58313 = state_58303;
(statearr_58313[(7)] = inst_58282__$1);

return statearr_58313;
})();
if(cljs.core.truth_(inst_58283)){
var statearr_58315_59551 = state_58303__$1;
(statearr_58315_59551[(1)] = (5));

} else {
var statearr_58317_59552 = state_58303__$1;
(statearr_58317_59552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58304 === (6))){
var inst_58282 = (state_58303[(7)]);
var inst_58287 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_58282) : p.call(null,inst_58282));
var state_58303__$1 = state_58303;
if(cljs.core.truth_(inst_58287)){
var statearr_58318_59553 = state_58303__$1;
(statearr_58318_59553[(1)] = (8));

} else {
var statearr_58319_59554 = state_58303__$1;
(statearr_58319_59554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58304 === (3))){
var inst_58301 = (state_58303[(2)]);
var state_58303__$1 = state_58303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58303__$1,inst_58301);
} else {
if((state_val_58304 === (2))){
var state_58303__$1 = state_58303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58303__$1,(4),ch);
} else {
if((state_val_58304 === (11))){
var inst_58292 = (state_58303[(2)]);
var state_58303__$1 = state_58303;
var statearr_58323_59555 = state_58303__$1;
(statearr_58323_59555[(2)] = inst_58292);

(statearr_58323_59555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58304 === (9))){
var state_58303__$1 = state_58303;
var statearr_58325_59556 = state_58303__$1;
(statearr_58325_59556[(2)] = null);

(statearr_58325_59556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58304 === (5))){
var inst_58285 = cljs.core.async.close_BANG_(out);
var state_58303__$1 = state_58303;
var statearr_58327_59557 = state_58303__$1;
(statearr_58327_59557[(2)] = inst_58285);

(statearr_58327_59557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58304 === (10))){
var inst_58295 = (state_58303[(2)]);
var state_58303__$1 = (function (){var statearr_58328 = state_58303;
(statearr_58328[(8)] = inst_58295);

return statearr_58328;
})();
var statearr_58329_59558 = state_58303__$1;
(statearr_58329_59558[(2)] = null);

(statearr_58329_59558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58304 === (8))){
var inst_58282 = (state_58303[(7)]);
var state_58303__$1 = state_58303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58303__$1,(11),out,inst_58282);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43563__auto__ = null;
var cljs$core$async$state_machine__43563__auto____0 = (function (){
var statearr_58333 = [null,null,null,null,null,null,null,null,null];
(statearr_58333[(0)] = cljs$core$async$state_machine__43563__auto__);

(statearr_58333[(1)] = (1));

return statearr_58333;
});
var cljs$core$async$state_machine__43563__auto____1 = (function (state_58303){
while(true){
var ret_value__43564__auto__ = (function (){try{while(true){
var result__43565__auto__ = switch__43562__auto__(state_58303);
if(cljs.core.keyword_identical_QMARK_(result__43565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43565__auto__;
}
break;
}
}catch (e58335){var ex__43566__auto__ = e58335;
var statearr_58336_59560 = state_58303;
(statearr_58336_59560[(2)] = ex__43566__auto__);


if(cljs.core.seq((state_58303[(4)]))){
var statearr_58337_59564 = state_58303;
(statearr_58337_59564[(1)] = cljs.core.first((state_58303[(4)])));

} else {
throw ex__43566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59565 = state_58303;
state_58303 = G__59565;
continue;
} else {
return ret_value__43564__auto__;
}
break;
}
});
cljs$core$async$state_machine__43563__auto__ = function(state_58303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43563__auto____1.call(this,state_58303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43563__auto____0;
cljs$core$async$state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43563__auto____1;
return cljs$core$async$state_machine__43563__auto__;
})()
})();
var state__43634__auto__ = (function (){var statearr_58341 = f__43633__auto__();
(statearr_58341[(6)] = c__43632__auto___59548);

return statearr_58341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43634__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__58347 = arguments.length;
switch (G__58347) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__43632__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43633__auto__ = (function (){var switch__43562__auto__ = (function (state_58425){
var state_val_58426 = (state_58425[(1)]);
if((state_val_58426 === (7))){
var inst_58418 = (state_58425[(2)]);
var state_58425__$1 = state_58425;
var statearr_58430_59567 = state_58425__$1;
(statearr_58430_59567[(2)] = inst_58418);

(statearr_58430_59567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58426 === (20))){
var inst_58384 = (state_58425[(7)]);
var inst_58399 = (state_58425[(2)]);
var inst_58400 = cljs.core.next(inst_58384);
var inst_58368 = inst_58400;
var inst_58369 = null;
var inst_58370 = (0);
var inst_58371 = (0);
var state_58425__$1 = (function (){var statearr_58432 = state_58425;
(statearr_58432[(8)] = inst_58369);

(statearr_58432[(9)] = inst_58399);

(statearr_58432[(10)] = inst_58371);

(statearr_58432[(11)] = inst_58368);

(statearr_58432[(12)] = inst_58370);

return statearr_58432;
})();
var statearr_58433_59568 = state_58425__$1;
(statearr_58433_59568[(2)] = null);

(statearr_58433_59568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58426 === (1))){
var state_58425__$1 = state_58425;
var statearr_58435_59569 = state_58425__$1;
(statearr_58435_59569[(2)] = null);

(statearr_58435_59569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58426 === (4))){
var inst_58355 = (state_58425[(13)]);
var inst_58355__$1 = (state_58425[(2)]);
var inst_58356 = (inst_58355__$1 == null);
var state_58425__$1 = (function (){var statearr_58438 = state_58425;
(statearr_58438[(13)] = inst_58355__$1);

return statearr_58438;
})();
if(cljs.core.truth_(inst_58356)){
var statearr_58440_59570 = state_58425__$1;
(statearr_58440_59570[(1)] = (5));

} else {
var statearr_58441_59571 = state_58425__$1;
(statearr_58441_59571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58426 === (15))){
var state_58425__$1 = state_58425;
var statearr_58446_59572 = state_58425__$1;
(statearr_58446_59572[(2)] = null);

(statearr_58446_59572[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58426 === (21))){
var state_58425__$1 = state_58425;
var statearr_58449_59573 = state_58425__$1;
(statearr_58449_59573[(2)] = null);

(statearr_58449_59573[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58426 === (13))){
var inst_58369 = (state_58425[(8)]);
var inst_58371 = (state_58425[(10)]);
var inst_58368 = (state_58425[(11)]);
var inst_58370 = (state_58425[(12)]);
var inst_58379 = (state_58425[(2)]);
var inst_58380 = (inst_58371 + (1));
var tmp58442 = inst_58369;
var tmp58444 = inst_58368;
var tmp58445 = inst_58370;
var inst_58368__$1 = tmp58444;
var inst_58369__$1 = tmp58442;
var inst_58370__$1 = tmp58445;
var inst_58371__$1 = inst_58380;
var state_58425__$1 = (function (){var statearr_58452 = state_58425;
(statearr_58452[(8)] = inst_58369__$1);

(statearr_58452[(10)] = inst_58371__$1);

(statearr_58452[(14)] = inst_58379);

(statearr_58452[(11)] = inst_58368__$1);

(statearr_58452[(12)] = inst_58370__$1);

return statearr_58452;
})();
var statearr_58453_59575 = state_58425__$1;
(statearr_58453_59575[(2)] = null);

(statearr_58453_59575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58426 === (22))){
var state_58425__$1 = state_58425;
var statearr_58454_59577 = state_58425__$1;
(statearr_58454_59577[(2)] = null);

(statearr_58454_59577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58426 === (6))){
var inst_58355 = (state_58425[(13)]);
var inst_58365 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_58355) : f.call(null,inst_58355));
var inst_58366 = cljs.core.seq(inst_58365);
var inst_58368 = inst_58366;
var inst_58369 = null;
var inst_58370 = (0);
var inst_58371 = (0);
var state_58425__$1 = (function (){var statearr_58458 = state_58425;
(statearr_58458[(8)] = inst_58369);

(statearr_58458[(10)] = inst_58371);

(statearr_58458[(11)] = inst_58368);

(statearr_58458[(12)] = inst_58370);

return statearr_58458;
})();
var statearr_58460_59579 = state_58425__$1;
(statearr_58460_59579[(2)] = null);

(statearr_58460_59579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58426 === (17))){
var inst_58384 = (state_58425[(7)]);
var inst_58390 = cljs.core.chunk_first(inst_58384);
var inst_58392 = cljs.core.chunk_rest(inst_58384);
var inst_58393 = cljs.core.count(inst_58390);
var inst_58368 = inst_58392;
var inst_58369 = inst_58390;
var inst_58370 = inst_58393;
var inst_58371 = (0);
var state_58425__$1 = (function (){var statearr_58465 = state_58425;
(statearr_58465[(8)] = inst_58369);

(statearr_58465[(10)] = inst_58371);

(statearr_58465[(11)] = inst_58368);

(statearr_58465[(12)] = inst_58370);

return statearr_58465;
})();
var statearr_58466_59582 = state_58425__$1;
(statearr_58466_59582[(2)] = null);

(statearr_58466_59582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58426 === (3))){
var inst_58421 = (state_58425[(2)]);
var state_58425__$1 = state_58425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58425__$1,inst_58421);
} else {
if((state_val_58426 === (12))){
var inst_58408 = (state_58425[(2)]);
var state_58425__$1 = state_58425;
var statearr_58470_59583 = state_58425__$1;
(statearr_58470_59583[(2)] = inst_58408);

(statearr_58470_59583[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58426 === (2))){
var state_58425__$1 = state_58425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58425__$1,(4),in$);
} else {
if((state_val_58426 === (23))){
var inst_58416 = (state_58425[(2)]);
var state_58425__$1 = state_58425;
var statearr_58472_59584 = state_58425__$1;
(statearr_58472_59584[(2)] = inst_58416);

(statearr_58472_59584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58426 === (19))){
var inst_58403 = (state_58425[(2)]);
var state_58425__$1 = state_58425;
var statearr_58476_59586 = state_58425__$1;
(statearr_58476_59586[(2)] = inst_58403);

(statearr_58476_59586[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58426 === (11))){
var inst_58384 = (state_58425[(7)]);
var inst_58368 = (state_58425[(11)]);
var inst_58384__$1 = cljs.core.seq(inst_58368);
var state_58425__$1 = (function (){var statearr_58477 = state_58425;
(statearr_58477[(7)] = inst_58384__$1);

return statearr_58477;
})();
if(inst_58384__$1){
var statearr_58479_59588 = state_58425__$1;
(statearr_58479_59588[(1)] = (14));

} else {
var statearr_58480_59589 = state_58425__$1;
(statearr_58480_59589[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58426 === (9))){
var inst_58410 = (state_58425[(2)]);
var inst_58411 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_58425__$1 = (function (){var statearr_58481 = state_58425;
(statearr_58481[(15)] = inst_58410);

return statearr_58481;
})();
if(cljs.core.truth_(inst_58411)){
var statearr_58483_59590 = state_58425__$1;
(statearr_58483_59590[(1)] = (21));

} else {
var statearr_58485_59591 = state_58425__$1;
(statearr_58485_59591[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58426 === (5))){
var inst_58358 = cljs.core.async.close_BANG_(out);
var state_58425__$1 = state_58425;
var statearr_58487_59592 = state_58425__$1;
(statearr_58487_59592[(2)] = inst_58358);

(statearr_58487_59592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58426 === (14))){
var inst_58384 = (state_58425[(7)]);
var inst_58386 = cljs.core.chunked_seq_QMARK_(inst_58384);
var state_58425__$1 = state_58425;
if(inst_58386){
var statearr_58489_59593 = state_58425__$1;
(statearr_58489_59593[(1)] = (17));

} else {
var statearr_58490_59594 = state_58425__$1;
(statearr_58490_59594[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58426 === (16))){
var inst_58406 = (state_58425[(2)]);
var state_58425__$1 = state_58425;
var statearr_58491_59596 = state_58425__$1;
(statearr_58491_59596[(2)] = inst_58406);

(statearr_58491_59596[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58426 === (10))){
var inst_58369 = (state_58425[(8)]);
var inst_58371 = (state_58425[(10)]);
var inst_58377 = cljs.core._nth(inst_58369,inst_58371);
var state_58425__$1 = state_58425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58425__$1,(13),out,inst_58377);
} else {
if((state_val_58426 === (18))){
var inst_58384 = (state_58425[(7)]);
var inst_58397 = cljs.core.first(inst_58384);
var state_58425__$1 = state_58425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58425__$1,(20),out,inst_58397);
} else {
if((state_val_58426 === (8))){
var inst_58371 = (state_58425[(10)]);
var inst_58370 = (state_58425[(12)]);
var inst_58374 = (inst_58371 < inst_58370);
var inst_58375 = inst_58374;
var state_58425__$1 = state_58425;
if(cljs.core.truth_(inst_58375)){
var statearr_58496_59598 = state_58425__$1;
(statearr_58496_59598[(1)] = (10));

} else {
var statearr_58497_59599 = state_58425__$1;
(statearr_58497_59599[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43563__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43563__auto____0 = (function (){
var statearr_58501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58501[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43563__auto__);

(statearr_58501[(1)] = (1));

return statearr_58501;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43563__auto____1 = (function (state_58425){
while(true){
var ret_value__43564__auto__ = (function (){try{while(true){
var result__43565__auto__ = switch__43562__auto__(state_58425);
if(cljs.core.keyword_identical_QMARK_(result__43565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43565__auto__;
}
break;
}
}catch (e58502){var ex__43566__auto__ = e58502;
var statearr_58503_59600 = state_58425;
(statearr_58503_59600[(2)] = ex__43566__auto__);


if(cljs.core.seq((state_58425[(4)]))){
var statearr_58505_59601 = state_58425;
(statearr_58505_59601[(1)] = cljs.core.first((state_58425[(4)])));

} else {
throw ex__43566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59602 = state_58425;
state_58425 = G__59602;
continue;
} else {
return ret_value__43564__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43563__auto__ = function(state_58425){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43563__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43563__auto____1.call(this,state_58425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43563__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43563__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43563__auto__;
})()
})();
var state__43634__auto__ = (function (){var statearr_58508 = f__43633__auto__();
(statearr_58508[(6)] = c__43632__auto__);

return statearr_58508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43634__auto__);
}));

return c__43632__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__58512 = arguments.length;
switch (G__58512) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__58522 = arguments.length;
switch (G__58522) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__58533 = arguments.length;
switch (G__58533) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43632__auto___59614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43633__auto__ = (function (){var switch__43562__auto__ = (function (state_58565){
var state_val_58566 = (state_58565[(1)]);
if((state_val_58566 === (7))){
var inst_58560 = (state_58565[(2)]);
var state_58565__$1 = state_58565;
var statearr_58572_59616 = state_58565__$1;
(statearr_58572_59616[(2)] = inst_58560);

(statearr_58572_59616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58566 === (1))){
var inst_58539 = null;
var state_58565__$1 = (function (){var statearr_58573 = state_58565;
(statearr_58573[(7)] = inst_58539);

return statearr_58573;
})();
var statearr_58574_59618 = state_58565__$1;
(statearr_58574_59618[(2)] = null);

(statearr_58574_59618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58566 === (4))){
var inst_58544 = (state_58565[(8)]);
var inst_58544__$1 = (state_58565[(2)]);
var inst_58546 = (inst_58544__$1 == null);
var inst_58547 = cljs.core.not(inst_58546);
var state_58565__$1 = (function (){var statearr_58576 = state_58565;
(statearr_58576[(8)] = inst_58544__$1);

return statearr_58576;
})();
if(inst_58547){
var statearr_58577_59619 = state_58565__$1;
(statearr_58577_59619[(1)] = (5));

} else {
var statearr_58580_59623 = state_58565__$1;
(statearr_58580_59623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58566 === (6))){
var state_58565__$1 = state_58565;
var statearr_58582_59624 = state_58565__$1;
(statearr_58582_59624[(2)] = null);

(statearr_58582_59624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58566 === (3))){
var inst_58562 = (state_58565[(2)]);
var inst_58563 = cljs.core.async.close_BANG_(out);
var state_58565__$1 = (function (){var statearr_58583 = state_58565;
(statearr_58583[(9)] = inst_58562);

return statearr_58583;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58565__$1,inst_58563);
} else {
if((state_val_58566 === (2))){
var state_58565__$1 = state_58565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58565__$1,(4),ch);
} else {
if((state_val_58566 === (11))){
var inst_58544 = (state_58565[(8)]);
var inst_58554 = (state_58565[(2)]);
var inst_58539 = inst_58544;
var state_58565__$1 = (function (){var statearr_58586 = state_58565;
(statearr_58586[(7)] = inst_58539);

(statearr_58586[(10)] = inst_58554);

return statearr_58586;
})();
var statearr_58589_59625 = state_58565__$1;
(statearr_58589_59625[(2)] = null);

(statearr_58589_59625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58566 === (9))){
var inst_58544 = (state_58565[(8)]);
var state_58565__$1 = state_58565;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58565__$1,(11),out,inst_58544);
} else {
if((state_val_58566 === (5))){
var inst_58544 = (state_58565[(8)]);
var inst_58539 = (state_58565[(7)]);
var inst_58549 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_58544,inst_58539);
var state_58565__$1 = state_58565;
if(inst_58549){
var statearr_58592_59626 = state_58565__$1;
(statearr_58592_59626[(1)] = (8));

} else {
var statearr_58593_59627 = state_58565__$1;
(statearr_58593_59627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58566 === (10))){
var inst_58557 = (state_58565[(2)]);
var state_58565__$1 = state_58565;
var statearr_58596_59628 = state_58565__$1;
(statearr_58596_59628[(2)] = inst_58557);

(statearr_58596_59628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58566 === (8))){
var inst_58539 = (state_58565[(7)]);
var tmp58590 = inst_58539;
var inst_58539__$1 = tmp58590;
var state_58565__$1 = (function (){var statearr_58598 = state_58565;
(statearr_58598[(7)] = inst_58539__$1);

return statearr_58598;
})();
var statearr_58599_59629 = state_58565__$1;
(statearr_58599_59629[(2)] = null);

(statearr_58599_59629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43563__auto__ = null;
var cljs$core$async$state_machine__43563__auto____0 = (function (){
var statearr_58604 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58604[(0)] = cljs$core$async$state_machine__43563__auto__);

(statearr_58604[(1)] = (1));

return statearr_58604;
});
var cljs$core$async$state_machine__43563__auto____1 = (function (state_58565){
while(true){
var ret_value__43564__auto__ = (function (){try{while(true){
var result__43565__auto__ = switch__43562__auto__(state_58565);
if(cljs.core.keyword_identical_QMARK_(result__43565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43565__auto__;
}
break;
}
}catch (e58607){var ex__43566__auto__ = e58607;
var statearr_58609_59630 = state_58565;
(statearr_58609_59630[(2)] = ex__43566__auto__);


if(cljs.core.seq((state_58565[(4)]))){
var statearr_58611_59634 = state_58565;
(statearr_58611_59634[(1)] = cljs.core.first((state_58565[(4)])));

} else {
throw ex__43566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59639 = state_58565;
state_58565 = G__59639;
continue;
} else {
return ret_value__43564__auto__;
}
break;
}
});
cljs$core$async$state_machine__43563__auto__ = function(state_58565){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43563__auto____1.call(this,state_58565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43563__auto____0;
cljs$core$async$state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43563__auto____1;
return cljs$core$async$state_machine__43563__auto__;
})()
})();
var state__43634__auto__ = (function (){var statearr_58612 = f__43633__auto__();
(statearr_58612[(6)] = c__43632__auto___59614);

return statearr_58612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43634__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__58617 = arguments.length;
switch (G__58617) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43632__auto___59647 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43633__auto__ = (function (){var switch__43562__auto__ = (function (state_58655){
var state_val_58656 = (state_58655[(1)]);
if((state_val_58656 === (7))){
var inst_58651 = (state_58655[(2)]);
var state_58655__$1 = state_58655;
var statearr_58658_59648 = state_58655__$1;
(statearr_58658_59648[(2)] = inst_58651);

(statearr_58658_59648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58656 === (1))){
var inst_58618 = (new Array(n));
var inst_58619 = inst_58618;
var inst_58620 = (0);
var state_58655__$1 = (function (){var statearr_58660 = state_58655;
(statearr_58660[(7)] = inst_58619);

(statearr_58660[(8)] = inst_58620);

return statearr_58660;
})();
var statearr_58661_59649 = state_58655__$1;
(statearr_58661_59649[(2)] = null);

(statearr_58661_59649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58656 === (4))){
var inst_58623 = (state_58655[(9)]);
var inst_58623__$1 = (state_58655[(2)]);
var inst_58624 = (inst_58623__$1 == null);
var inst_58625 = cljs.core.not(inst_58624);
var state_58655__$1 = (function (){var statearr_58662 = state_58655;
(statearr_58662[(9)] = inst_58623__$1);

return statearr_58662;
})();
if(inst_58625){
var statearr_58663_59657 = state_58655__$1;
(statearr_58663_59657[(1)] = (5));

} else {
var statearr_58664_59658 = state_58655__$1;
(statearr_58664_59658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58656 === (15))){
var inst_58645 = (state_58655[(2)]);
var state_58655__$1 = state_58655;
var statearr_58665_59662 = state_58655__$1;
(statearr_58665_59662[(2)] = inst_58645);

(statearr_58665_59662[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58656 === (13))){
var state_58655__$1 = state_58655;
var statearr_58666_59663 = state_58655__$1;
(statearr_58666_59663[(2)] = null);

(statearr_58666_59663[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58656 === (6))){
var inst_58620 = (state_58655[(8)]);
var inst_58641 = (inst_58620 > (0));
var state_58655__$1 = state_58655;
if(cljs.core.truth_(inst_58641)){
var statearr_58667_59664 = state_58655__$1;
(statearr_58667_59664[(1)] = (12));

} else {
var statearr_58668_59665 = state_58655__$1;
(statearr_58668_59665[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58656 === (3))){
var inst_58653 = (state_58655[(2)]);
var state_58655__$1 = state_58655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58655__$1,inst_58653);
} else {
if((state_val_58656 === (12))){
var inst_58619 = (state_58655[(7)]);
var inst_58643 = cljs.core.vec(inst_58619);
var state_58655__$1 = state_58655;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58655__$1,(15),out,inst_58643);
} else {
if((state_val_58656 === (2))){
var state_58655__$1 = state_58655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58655__$1,(4),ch);
} else {
if((state_val_58656 === (11))){
var inst_58635 = (state_58655[(2)]);
var inst_58636 = (new Array(n));
var inst_58619 = inst_58636;
var inst_58620 = (0);
var state_58655__$1 = (function (){var statearr_58669 = state_58655;
(statearr_58669[(10)] = inst_58635);

(statearr_58669[(7)] = inst_58619);

(statearr_58669[(8)] = inst_58620);

return statearr_58669;
})();
var statearr_58670_59673 = state_58655__$1;
(statearr_58670_59673[(2)] = null);

(statearr_58670_59673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58656 === (9))){
var inst_58619 = (state_58655[(7)]);
var inst_58633 = cljs.core.vec(inst_58619);
var state_58655__$1 = state_58655;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58655__$1,(11),out,inst_58633);
} else {
if((state_val_58656 === (5))){
var inst_58628 = (state_58655[(11)]);
var inst_58623 = (state_58655[(9)]);
var inst_58619 = (state_58655[(7)]);
var inst_58620 = (state_58655[(8)]);
var inst_58627 = (inst_58619[inst_58620] = inst_58623);
var inst_58628__$1 = (inst_58620 + (1));
var inst_58629 = (inst_58628__$1 < n);
var state_58655__$1 = (function (){var statearr_58671 = state_58655;
(statearr_58671[(11)] = inst_58628__$1);

(statearr_58671[(12)] = inst_58627);

return statearr_58671;
})();
if(cljs.core.truth_(inst_58629)){
var statearr_58672_59677 = state_58655__$1;
(statearr_58672_59677[(1)] = (8));

} else {
var statearr_58673_59678 = state_58655__$1;
(statearr_58673_59678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58656 === (14))){
var inst_58648 = (state_58655[(2)]);
var inst_58649 = cljs.core.async.close_BANG_(out);
var state_58655__$1 = (function (){var statearr_58675 = state_58655;
(statearr_58675[(13)] = inst_58648);

return statearr_58675;
})();
var statearr_58676_59682 = state_58655__$1;
(statearr_58676_59682[(2)] = inst_58649);

(statearr_58676_59682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58656 === (10))){
var inst_58639 = (state_58655[(2)]);
var state_58655__$1 = state_58655;
var statearr_58677_59683 = state_58655__$1;
(statearr_58677_59683[(2)] = inst_58639);

(statearr_58677_59683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58656 === (8))){
var inst_58628 = (state_58655[(11)]);
var inst_58619 = (state_58655[(7)]);
var tmp58674 = inst_58619;
var inst_58619__$1 = tmp58674;
var inst_58620 = inst_58628;
var state_58655__$1 = (function (){var statearr_58678 = state_58655;
(statearr_58678[(7)] = inst_58619__$1);

(statearr_58678[(8)] = inst_58620);

return statearr_58678;
})();
var statearr_58679_59688 = state_58655__$1;
(statearr_58679_59688[(2)] = null);

(statearr_58679_59688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43563__auto__ = null;
var cljs$core$async$state_machine__43563__auto____0 = (function (){
var statearr_58680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58680[(0)] = cljs$core$async$state_machine__43563__auto__);

(statearr_58680[(1)] = (1));

return statearr_58680;
});
var cljs$core$async$state_machine__43563__auto____1 = (function (state_58655){
while(true){
var ret_value__43564__auto__ = (function (){try{while(true){
var result__43565__auto__ = switch__43562__auto__(state_58655);
if(cljs.core.keyword_identical_QMARK_(result__43565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43565__auto__;
}
break;
}
}catch (e58681){var ex__43566__auto__ = e58681;
var statearr_58682_59689 = state_58655;
(statearr_58682_59689[(2)] = ex__43566__auto__);


if(cljs.core.seq((state_58655[(4)]))){
var statearr_58683_59692 = state_58655;
(statearr_58683_59692[(1)] = cljs.core.first((state_58655[(4)])));

} else {
throw ex__43566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59693 = state_58655;
state_58655 = G__59693;
continue;
} else {
return ret_value__43564__auto__;
}
break;
}
});
cljs$core$async$state_machine__43563__auto__ = function(state_58655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43563__auto____1.call(this,state_58655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43563__auto____0;
cljs$core$async$state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43563__auto____1;
return cljs$core$async$state_machine__43563__auto__;
})()
})();
var state__43634__auto__ = (function (){var statearr_58684 = f__43633__auto__();
(statearr_58684[(6)] = c__43632__auto___59647);

return statearr_58684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43634__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__58686 = arguments.length;
switch (G__58686) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43632__auto___59698 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43633__auto__ = (function (){var switch__43562__auto__ = (function (state_58733){
var state_val_58734 = (state_58733[(1)]);
if((state_val_58734 === (7))){
var inst_58729 = (state_58733[(2)]);
var state_58733__$1 = state_58733;
var statearr_58735_59703 = state_58733__$1;
(statearr_58735_59703[(2)] = inst_58729);

(statearr_58735_59703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58734 === (1))){
var inst_58689 = [];
var inst_58690 = inst_58689;
var inst_58691 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_58733__$1 = (function (){var statearr_58736 = state_58733;
(statearr_58736[(7)] = inst_58691);

(statearr_58736[(8)] = inst_58690);

return statearr_58736;
})();
var statearr_58737_59707 = state_58733__$1;
(statearr_58737_59707[(2)] = null);

(statearr_58737_59707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58734 === (4))){
var inst_58694 = (state_58733[(9)]);
var inst_58694__$1 = (state_58733[(2)]);
var inst_58695 = (inst_58694__$1 == null);
var inst_58696 = cljs.core.not(inst_58695);
var state_58733__$1 = (function (){var statearr_58738 = state_58733;
(statearr_58738[(9)] = inst_58694__$1);

return statearr_58738;
})();
if(inst_58696){
var statearr_58739_59708 = state_58733__$1;
(statearr_58739_59708[(1)] = (5));

} else {
var statearr_58740_59709 = state_58733__$1;
(statearr_58740_59709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58734 === (15))){
var inst_58690 = (state_58733[(8)]);
var inst_58721 = cljs.core.vec(inst_58690);
var state_58733__$1 = state_58733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58733__$1,(18),out,inst_58721);
} else {
if((state_val_58734 === (13))){
var inst_58716 = (state_58733[(2)]);
var state_58733__$1 = state_58733;
var statearr_58741_59710 = state_58733__$1;
(statearr_58741_59710[(2)] = inst_58716);

(statearr_58741_59710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58734 === (6))){
var inst_58690 = (state_58733[(8)]);
var inst_58718 = inst_58690.length;
var inst_58719 = (inst_58718 > (0));
var state_58733__$1 = state_58733;
if(cljs.core.truth_(inst_58719)){
var statearr_58742_59713 = state_58733__$1;
(statearr_58742_59713[(1)] = (15));

} else {
var statearr_58743_59715 = state_58733__$1;
(statearr_58743_59715[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58734 === (17))){
var inst_58726 = (state_58733[(2)]);
var inst_58727 = cljs.core.async.close_BANG_(out);
var state_58733__$1 = (function (){var statearr_58744 = state_58733;
(statearr_58744[(10)] = inst_58726);

return statearr_58744;
})();
var statearr_58745_59716 = state_58733__$1;
(statearr_58745_59716[(2)] = inst_58727);

(statearr_58745_59716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58734 === (3))){
var inst_58731 = (state_58733[(2)]);
var state_58733__$1 = state_58733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58733__$1,inst_58731);
} else {
if((state_val_58734 === (12))){
var inst_58690 = (state_58733[(8)]);
var inst_58709 = cljs.core.vec(inst_58690);
var state_58733__$1 = state_58733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58733__$1,(14),out,inst_58709);
} else {
if((state_val_58734 === (2))){
var state_58733__$1 = state_58733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58733__$1,(4),ch);
} else {
if((state_val_58734 === (11))){
var inst_58690 = (state_58733[(8)]);
var inst_58698 = (state_58733[(11)]);
var inst_58694 = (state_58733[(9)]);
var inst_58706 = inst_58690.push(inst_58694);
var tmp58746 = inst_58690;
var inst_58690__$1 = tmp58746;
var inst_58691 = inst_58698;
var state_58733__$1 = (function (){var statearr_58747 = state_58733;
(statearr_58747[(7)] = inst_58691);

(statearr_58747[(12)] = inst_58706);

(statearr_58747[(8)] = inst_58690__$1);

return statearr_58747;
})();
var statearr_58748_59720 = state_58733__$1;
(statearr_58748_59720[(2)] = null);

(statearr_58748_59720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58734 === (9))){
var inst_58691 = (state_58733[(7)]);
var inst_58702 = cljs.core.keyword_identical_QMARK_(inst_58691,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_58733__$1 = state_58733;
var statearr_58749_59721 = state_58733__$1;
(statearr_58749_59721[(2)] = inst_58702);

(statearr_58749_59721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58734 === (5))){
var inst_58691 = (state_58733[(7)]);
var inst_58698 = (state_58733[(11)]);
var inst_58699 = (state_58733[(13)]);
var inst_58694 = (state_58733[(9)]);
var inst_58698__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_58694) : f.call(null,inst_58694));
var inst_58699__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_58698__$1,inst_58691);
var state_58733__$1 = (function (){var statearr_58750 = state_58733;
(statearr_58750[(11)] = inst_58698__$1);

(statearr_58750[(13)] = inst_58699__$1);

return statearr_58750;
})();
if(inst_58699__$1){
var statearr_58751_59722 = state_58733__$1;
(statearr_58751_59722[(1)] = (8));

} else {
var statearr_58752_59723 = state_58733__$1;
(statearr_58752_59723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58734 === (14))){
var inst_58698 = (state_58733[(11)]);
var inst_58694 = (state_58733[(9)]);
var inst_58711 = (state_58733[(2)]);
var inst_58712 = [];
var inst_58713 = inst_58712.push(inst_58694);
var inst_58690 = inst_58712;
var inst_58691 = inst_58698;
var state_58733__$1 = (function (){var statearr_58753 = state_58733;
(statearr_58753[(7)] = inst_58691);

(statearr_58753[(8)] = inst_58690);

(statearr_58753[(14)] = inst_58713);

(statearr_58753[(15)] = inst_58711);

return statearr_58753;
})();
var statearr_58754_59727 = state_58733__$1;
(statearr_58754_59727[(2)] = null);

(statearr_58754_59727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58734 === (16))){
var state_58733__$1 = state_58733;
var statearr_58755_59728 = state_58733__$1;
(statearr_58755_59728[(2)] = null);

(statearr_58755_59728[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58734 === (10))){
var inst_58704 = (state_58733[(2)]);
var state_58733__$1 = state_58733;
if(cljs.core.truth_(inst_58704)){
var statearr_58756_59729 = state_58733__$1;
(statearr_58756_59729[(1)] = (11));

} else {
var statearr_58757_59730 = state_58733__$1;
(statearr_58757_59730[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58734 === (18))){
var inst_58723 = (state_58733[(2)]);
var state_58733__$1 = state_58733;
var statearr_58758_59731 = state_58733__$1;
(statearr_58758_59731[(2)] = inst_58723);

(statearr_58758_59731[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58734 === (8))){
var inst_58699 = (state_58733[(13)]);
var state_58733__$1 = state_58733;
var statearr_58759_59732 = state_58733__$1;
(statearr_58759_59732[(2)] = inst_58699);

(statearr_58759_59732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43563__auto__ = null;
var cljs$core$async$state_machine__43563__auto____0 = (function (){
var statearr_58760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58760[(0)] = cljs$core$async$state_machine__43563__auto__);

(statearr_58760[(1)] = (1));

return statearr_58760;
});
var cljs$core$async$state_machine__43563__auto____1 = (function (state_58733){
while(true){
var ret_value__43564__auto__ = (function (){try{while(true){
var result__43565__auto__ = switch__43562__auto__(state_58733);
if(cljs.core.keyword_identical_QMARK_(result__43565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43565__auto__;
}
break;
}
}catch (e58761){var ex__43566__auto__ = e58761;
var statearr_58762_59734 = state_58733;
(statearr_58762_59734[(2)] = ex__43566__auto__);


if(cljs.core.seq((state_58733[(4)]))){
var statearr_58763_59735 = state_58733;
(statearr_58763_59735[(1)] = cljs.core.first((state_58733[(4)])));

} else {
throw ex__43566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59736 = state_58733;
state_58733 = G__59736;
continue;
} else {
return ret_value__43564__auto__;
}
break;
}
});
cljs$core$async$state_machine__43563__auto__ = function(state_58733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43563__auto____1.call(this,state_58733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43563__auto____0;
cljs$core$async$state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43563__auto____1;
return cljs$core$async$state_machine__43563__auto__;
})()
})();
var state__43634__auto__ = (function (){var statearr_58764 = f__43633__auto__();
(statearr_58764[(6)] = c__43632__auto___59698);

return statearr_58764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43634__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
