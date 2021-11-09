goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__61242,p__61243){
var map__61244 = p__61242;
var map__61244__$1 = cljs.core.__destructure_map(map__61244);
var svc = map__61244__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61244__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61244__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61244__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61245 = p__61243;
var map__61245__$1 = cljs.core.__destructure_map(map__61245);
var msg = map__61245__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61245__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61245__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61245__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61245__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__61260,p__61261){
var map__61277 = p__61260;
var map__61277__$1 = cljs.core.__destructure_map(map__61277);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61277__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61278 = p__61261;
var map__61278__$1 = cljs.core.__destructure_map(map__61278);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61278__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__61282,p__61283){
var map__61284 = p__61282;
var map__61284__$1 = cljs.core.__destructure_map(map__61284);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61284__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61284__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61285 = p__61283;
var map__61285__$1 = cljs.core.__destructure_map(map__61285);
var msg = map__61285__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61285__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__61298,tid){
var map__61299 = p__61298;
var map__61299__$1 = cljs.core.__destructure_map(map__61299);
var svc = map__61299__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61299__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__61311 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__61312 = null;
var count__61313 = (0);
var i__61314 = (0);
while(true){
if((i__61314 < count__61313)){
var vec__61335 = chunk__61312.cljs$core$IIndexed$_nth$arity$2(null,i__61314);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61335,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61335,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61356 = seq__61311;
var G__61357 = chunk__61312;
var G__61358 = count__61313;
var G__61359 = (i__61314 + (1));
seq__61311 = G__61356;
chunk__61312 = G__61357;
count__61313 = G__61358;
i__61314 = G__61359;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61311);
if(temp__5753__auto__){
var seq__61311__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61311__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__61311__$1);
var G__61360 = cljs.core.chunk_rest(seq__61311__$1);
var G__61361 = c__4638__auto__;
var G__61362 = cljs.core.count(c__4638__auto__);
var G__61363 = (0);
seq__61311 = G__61360;
chunk__61312 = G__61361;
count__61313 = G__61362;
i__61314 = G__61363;
continue;
} else {
var vec__61339 = cljs.core.first(seq__61311__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61339,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61339,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61364 = cljs.core.next(seq__61311__$1);
var G__61365 = null;
var G__61366 = (0);
var G__61367 = (0);
seq__61311 = G__61364;
chunk__61312 = G__61365;
count__61313 = G__61366;
i__61314 = G__61367;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__61302_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__61302_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__61303_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__61303_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__61304_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__61304_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__61305_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__61305_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__61345){
var map__61346 = p__61345;
var map__61346__$1 = cljs.core.__destructure_map(map__61346);
var svc = map__61346__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61346__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61346__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
