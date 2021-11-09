goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__57618,res){
var map__57620 = p__57618;
var map__57620__$1 = cljs.core.__destructure_map(map__57620);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57620__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57620__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__57622 = res;
var G__57622__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57622,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__57622);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57622__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__57622__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__57625 = arguments.length;
switch (G__57625) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__57629,msg,handlers,timeout_after_ms){
var map__57633 = p__57629;
var map__57633__$1 = cljs.core.__destructure_map(map__57633);
var runtime = map__57633__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57633__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___57726 = arguments.length;
var i__4819__auto___57727 = (0);
while(true){
if((i__4819__auto___57727 < len__4818__auto___57726)){
args__4824__auto__.push((arguments[i__4819__auto___57727]));

var G__57729 = (i__4819__auto___57727 + (1));
i__4819__auto___57727 = G__57729;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__57644,ev,args){
var map__57645 = p__57644;
var map__57645__$1 = cljs.core.__destructure_map(map__57645);
var runtime = map__57645__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57645__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__57646 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__57649 = null;
var count__57650 = (0);
var i__57651 = (0);
while(true){
if((i__57651 < count__57650)){
var ext = chunk__57649.cljs$core$IIndexed$_nth$arity$2(null,i__57651);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__57741 = seq__57646;
var G__57742 = chunk__57649;
var G__57743 = count__57650;
var G__57744 = (i__57651 + (1));
seq__57646 = G__57741;
chunk__57649 = G__57742;
count__57650 = G__57743;
i__57651 = G__57744;
continue;
} else {
var G__57745 = seq__57646;
var G__57746 = chunk__57649;
var G__57747 = count__57650;
var G__57748 = (i__57651 + (1));
seq__57646 = G__57745;
chunk__57649 = G__57746;
count__57650 = G__57747;
i__57651 = G__57748;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57646);
if(temp__5753__auto__){
var seq__57646__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57646__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__57646__$1);
var G__57752 = cljs.core.chunk_rest(seq__57646__$1);
var G__57753 = c__4638__auto__;
var G__57754 = cljs.core.count(c__4638__auto__);
var G__57755 = (0);
seq__57646 = G__57752;
chunk__57649 = G__57753;
count__57650 = G__57754;
i__57651 = G__57755;
continue;
} else {
var ext = cljs.core.first(seq__57646__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__57760 = cljs.core.next(seq__57646__$1);
var G__57761 = null;
var G__57762 = (0);
var G__57763 = (0);
seq__57646 = G__57760;
chunk__57649 = G__57761;
count__57650 = G__57762;
i__57651 = G__57763;
continue;
} else {
var G__57765 = cljs.core.next(seq__57646__$1);
var G__57766 = null;
var G__57767 = (0);
var G__57768 = (0);
seq__57646 = G__57765;
chunk__57649 = G__57766;
count__57650 = G__57767;
i__57651 = G__57768;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq57637){
var G__57639 = cljs.core.first(seq57637);
var seq57637__$1 = cljs.core.next(seq57637);
var G__57640 = cljs.core.first(seq57637__$1);
var seq57637__$2 = cljs.core.next(seq57637__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57639,G__57640,seq57637__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__57655,p__57656){
var map__57657 = p__57655;
var map__57657__$1 = cljs.core.__destructure_map(map__57657);
var runtime = map__57657__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57657__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__57658 = p__57656;
var map__57658__$1 = cljs.core.__destructure_map(map__57658);
var msg = map__57658__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57658__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__57659 = cljs.core.deref(state_ref);
var map__57659__$1 = cljs.core.__destructure_map(map__57659);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57659__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57659__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__57662){
var map__57663 = p__57662;
var map__57663__$1 = cljs.core.__destructure_map(map__57663);
var runtime = map__57663__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57663__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__57665,msg){
var map__57666 = p__57665;
var map__57666__$1 = cljs.core.__destructure_map(map__57666);
var runtime = map__57666__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57666__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__57669,key,p__57670){
var map__57671 = p__57669;
var map__57671__$1 = cljs.core.__destructure_map(map__57671);
var state = map__57671__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57671__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__57672 = p__57670;
var map__57672__$1 = cljs.core.__destructure_map(map__57672);
var spec = map__57672__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57672__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__57677,key,spec){
var map__57678 = p__57677;
var map__57678__$1 = cljs.core.__destructure_map(map__57678);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57678__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__57679_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__57679_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__57680_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__57680_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__57681_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__57681_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__57682_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__57682_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__57683_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__57683_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__57690,key){
var map__57691 = p__57690;
var map__57691__$1 = cljs.core.__destructure_map(map__57691);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57691__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__57693,msg){
var map__57694 = p__57693;
var map__57694__$1 = cljs.core.__destructure_map(map__57694);
var runtime = map__57694__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57694__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__57695,p__57696){
var map__57697 = p__57695;
var map__57697__$1 = cljs.core.__destructure_map(map__57697);
var runtime = map__57697__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57697__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__57698 = p__57696;
var map__57698__$1 = cljs.core.__destructure_map(map__57698);
var msg = map__57698__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57698__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57698__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__57703 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__57705 = null;
var count__57706 = (0);
var i__57707 = (0);
while(true){
if((i__57707 < count__57706)){
var map__57711 = chunk__57705.cljs$core$IIndexed$_nth$arity$2(null,i__57707);
var map__57711__$1 = cljs.core.__destructure_map(map__57711);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57711__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__57817 = seq__57703;
var G__57818 = chunk__57705;
var G__57819 = count__57706;
var G__57820 = (i__57707 + (1));
seq__57703 = G__57817;
chunk__57705 = G__57818;
count__57706 = G__57819;
i__57707 = G__57820;
continue;
} else {
var G__57821 = seq__57703;
var G__57822 = chunk__57705;
var G__57823 = count__57706;
var G__57824 = (i__57707 + (1));
seq__57703 = G__57821;
chunk__57705 = G__57822;
count__57706 = G__57823;
i__57707 = G__57824;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57703);
if(temp__5753__auto__){
var seq__57703__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57703__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__57703__$1);
var G__57827 = cljs.core.chunk_rest(seq__57703__$1);
var G__57828 = c__4638__auto__;
var G__57829 = cljs.core.count(c__4638__auto__);
var G__57830 = (0);
seq__57703 = G__57827;
chunk__57705 = G__57828;
count__57706 = G__57829;
i__57707 = G__57830;
continue;
} else {
var map__57713 = cljs.core.first(seq__57703__$1);
var map__57713__$1 = cljs.core.__destructure_map(map__57713);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57713__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__57831 = cljs.core.next(seq__57703__$1);
var G__57832 = null;
var G__57833 = (0);
var G__57834 = (0);
seq__57703 = G__57831;
chunk__57705 = G__57832;
count__57706 = G__57833;
i__57707 = G__57834;
continue;
} else {
var G__57836 = cljs.core.next(seq__57703__$1);
var G__57837 = null;
var G__57838 = (0);
var G__57839 = (0);
seq__57703 = G__57836;
chunk__57705 = G__57837;
count__57706 = G__57838;
i__57707 = G__57839;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
