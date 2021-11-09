goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___61701 = arguments.length;
var i__4819__auto___61702 = (0);
while(true){
if((i__4819__auto___61702 < len__4818__auto___61701)){
args__4824__auto__.push((arguments[i__4819__auto___61702]));

var G__61703 = (i__4819__auto___61702 + (1));
i__4819__auto___61702 = G__61703;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq61577){
var G__61578 = cljs.core.first(seq61577);
var seq61577__$1 = cljs.core.next(seq61577);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61578,seq61577__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__61581 = cljs.core.seq(sources);
var chunk__61582 = null;
var count__61583 = (0);
var i__61584 = (0);
while(true){
if((i__61584 < count__61583)){
var map__61589 = chunk__61582.cljs$core$IIndexed$_nth$arity$2(null,i__61584);
var map__61589__$1 = cljs.core.__destructure_map(map__61589);
var src = map__61589__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61589__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61589__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61589__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61589__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e61590){var e_61704 = e61590;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_61704);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_61704.message)].join('')));
}

var G__61705 = seq__61581;
var G__61706 = chunk__61582;
var G__61707 = count__61583;
var G__61708 = (i__61584 + (1));
seq__61581 = G__61705;
chunk__61582 = G__61706;
count__61583 = G__61707;
i__61584 = G__61708;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61581);
if(temp__5753__auto__){
var seq__61581__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61581__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__61581__$1);
var G__61709 = cljs.core.chunk_rest(seq__61581__$1);
var G__61710 = c__4638__auto__;
var G__61711 = cljs.core.count(c__4638__auto__);
var G__61712 = (0);
seq__61581 = G__61709;
chunk__61582 = G__61710;
count__61583 = G__61711;
i__61584 = G__61712;
continue;
} else {
var map__61591 = cljs.core.first(seq__61581__$1);
var map__61591__$1 = cljs.core.__destructure_map(map__61591);
var src = map__61591__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61591__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61591__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61591__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61591__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e61592){var e_61713 = e61592;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_61713);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_61713.message)].join('')));
}

var G__61714 = cljs.core.next(seq__61581__$1);
var G__61715 = null;
var G__61716 = (0);
var G__61717 = (0);
seq__61581 = G__61714;
chunk__61582 = G__61715;
count__61583 = G__61716;
i__61584 = G__61717;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__61593 = cljs.core.seq(js_requires);
var chunk__61594 = null;
var count__61595 = (0);
var i__61596 = (0);
while(true){
if((i__61596 < count__61595)){
var js_ns = chunk__61594.cljs$core$IIndexed$_nth$arity$2(null,i__61596);
var require_str_61718 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_61718);


var G__61719 = seq__61593;
var G__61720 = chunk__61594;
var G__61721 = count__61595;
var G__61722 = (i__61596 + (1));
seq__61593 = G__61719;
chunk__61594 = G__61720;
count__61595 = G__61721;
i__61596 = G__61722;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61593);
if(temp__5753__auto__){
var seq__61593__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61593__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__61593__$1);
var G__61723 = cljs.core.chunk_rest(seq__61593__$1);
var G__61724 = c__4638__auto__;
var G__61725 = cljs.core.count(c__4638__auto__);
var G__61726 = (0);
seq__61593 = G__61723;
chunk__61594 = G__61724;
count__61595 = G__61725;
i__61596 = G__61726;
continue;
} else {
var js_ns = cljs.core.first(seq__61593__$1);
var require_str_61727 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_61727);


var G__61728 = cljs.core.next(seq__61593__$1);
var G__61729 = null;
var G__61730 = (0);
var G__61731 = (0);
seq__61593 = G__61728;
chunk__61594 = G__61729;
count__61595 = G__61730;
i__61596 = G__61731;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__61598){
var map__61599 = p__61598;
var map__61599__$1 = cljs.core.__destructure_map(map__61599);
var msg = map__61599__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61599__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61599__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61600(s__61601){
return (new cljs.core.LazySeq(null,(function (){
var s__61601__$1 = s__61601;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__61601__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__61606 = cljs.core.first(xs__6308__auto__);
var map__61606__$1 = cljs.core.__destructure_map(map__61606);
var src = map__61606__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61606__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61606__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__61601__$1,map__61606,map__61606__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__61599,map__61599__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61600_$_iter__61602(s__61603){
return (new cljs.core.LazySeq(null,((function (s__61601__$1,map__61606,map__61606__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__61599,map__61599__$1,msg,info,reload_info){
return (function (){
var s__61603__$1 = s__61603;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__61603__$1);
if(temp__5753__auto____$1){
var s__61603__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__61603__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__61603__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__61605 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__61604 = (0);
while(true){
if((i__61604 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__61604);
cljs.core.chunk_append(b__61605,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__61732 = (i__61604 + (1));
i__61604 = G__61732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61605),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61600_$_iter__61602(cljs.core.chunk_rest(s__61603__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61605),null);
}
} else {
var warning = cljs.core.first(s__61603__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61600_$_iter__61602(cljs.core.rest(s__61603__$2)));
}
} else {
return null;
}
break;
}
});})(s__61601__$1,map__61606,map__61606__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__61599,map__61599__$1,msg,info,reload_info))
,null,null));
});})(s__61601__$1,map__61606,map__61606__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__61599,map__61599__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61600(cljs.core.rest(s__61601__$1)));
} else {
var G__61733 = cljs.core.rest(s__61601__$1);
s__61601__$1 = G__61733;
continue;
}
} else {
var G__61734 = cljs.core.rest(s__61601__$1);
s__61601__$1 = G__61734;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__61607_61735 = cljs.core.seq(warnings);
var chunk__61608_61736 = null;
var count__61609_61737 = (0);
var i__61610_61738 = (0);
while(true){
if((i__61610_61738 < count__61609_61737)){
var map__61613_61739 = chunk__61608_61736.cljs$core$IIndexed$_nth$arity$2(null,i__61610_61738);
var map__61613_61740__$1 = cljs.core.__destructure_map(map__61613_61739);
var w_61741 = map__61613_61740__$1;
var msg_61742__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61613_61740__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_61743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61613_61740__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_61744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61613_61740__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_61745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61613_61740__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_61745)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_61743),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_61744),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_61742__$1)].join(''));


var G__61746 = seq__61607_61735;
var G__61747 = chunk__61608_61736;
var G__61748 = count__61609_61737;
var G__61749 = (i__61610_61738 + (1));
seq__61607_61735 = G__61746;
chunk__61608_61736 = G__61747;
count__61609_61737 = G__61748;
i__61610_61738 = G__61749;
continue;
} else {
var temp__5753__auto___61750 = cljs.core.seq(seq__61607_61735);
if(temp__5753__auto___61750){
var seq__61607_61751__$1 = temp__5753__auto___61750;
if(cljs.core.chunked_seq_QMARK_(seq__61607_61751__$1)){
var c__4638__auto___61752 = cljs.core.chunk_first(seq__61607_61751__$1);
var G__61753 = cljs.core.chunk_rest(seq__61607_61751__$1);
var G__61754 = c__4638__auto___61752;
var G__61755 = cljs.core.count(c__4638__auto___61752);
var G__61756 = (0);
seq__61607_61735 = G__61753;
chunk__61608_61736 = G__61754;
count__61609_61737 = G__61755;
i__61610_61738 = G__61756;
continue;
} else {
var map__61614_61757 = cljs.core.first(seq__61607_61751__$1);
var map__61614_61758__$1 = cljs.core.__destructure_map(map__61614_61757);
var w_61759 = map__61614_61758__$1;
var msg_61760__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61614_61758__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_61761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61614_61758__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_61762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61614_61758__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_61763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61614_61758__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_61763)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_61761),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_61762),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_61760__$1)].join(''));


var G__61764 = cljs.core.next(seq__61607_61751__$1);
var G__61765 = null;
var G__61766 = (0);
var G__61767 = (0);
seq__61607_61735 = G__61764;
chunk__61608_61736 = G__61765;
count__61609_61737 = G__61766;
i__61610_61738 = G__61767;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__61597_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__61597_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__61615){
var map__61616 = p__61615;
var map__61616__$1 = cljs.core.__destructure_map(map__61616);
var msg = map__61616__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61616__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__61617 = cljs.core.seq(updates);
var chunk__61619 = null;
var count__61620 = (0);
var i__61621 = (0);
while(true){
if((i__61621 < count__61620)){
var path = chunk__61619.cljs$core$IIndexed$_nth$arity$2(null,i__61621);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__61651_61768 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__61655_61769 = null;
var count__61656_61770 = (0);
var i__61657_61771 = (0);
while(true){
if((i__61657_61771 < count__61656_61770)){
var node_61772 = chunk__61655_61769.cljs$core$IIndexed$_nth$arity$2(null,i__61657_61771);
if(cljs.core.not(node_61772.shadow$old)){
var path_match_61773 = shadow.cljs.devtools.client.browser.match_paths(node_61772.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61773)){
var new_link_61774 = (function (){var G__61663 = node_61772.cloneNode(true);
G__61663.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61773),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61663;
})();
(node_61772.shadow$old = true);

(new_link_61774.onload = ((function (seq__61651_61768,chunk__61655_61769,count__61656_61770,i__61657_61771,seq__61617,chunk__61619,count__61620,i__61621,new_link_61774,path_match_61773,node_61772,path,map__61616,map__61616__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_61772);
});})(seq__61651_61768,chunk__61655_61769,count__61656_61770,i__61657_61771,seq__61617,chunk__61619,count__61620,i__61621,new_link_61774,path_match_61773,node_61772,path,map__61616,map__61616__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61773], 0));

goog.dom.insertSiblingAfter(new_link_61774,node_61772);


var G__61775 = seq__61651_61768;
var G__61776 = chunk__61655_61769;
var G__61777 = count__61656_61770;
var G__61778 = (i__61657_61771 + (1));
seq__61651_61768 = G__61775;
chunk__61655_61769 = G__61776;
count__61656_61770 = G__61777;
i__61657_61771 = G__61778;
continue;
} else {
var G__61779 = seq__61651_61768;
var G__61780 = chunk__61655_61769;
var G__61781 = count__61656_61770;
var G__61782 = (i__61657_61771 + (1));
seq__61651_61768 = G__61779;
chunk__61655_61769 = G__61780;
count__61656_61770 = G__61781;
i__61657_61771 = G__61782;
continue;
}
} else {
var G__61783 = seq__61651_61768;
var G__61784 = chunk__61655_61769;
var G__61785 = count__61656_61770;
var G__61786 = (i__61657_61771 + (1));
seq__61651_61768 = G__61783;
chunk__61655_61769 = G__61784;
count__61656_61770 = G__61785;
i__61657_61771 = G__61786;
continue;
}
} else {
var temp__5753__auto___61787 = cljs.core.seq(seq__61651_61768);
if(temp__5753__auto___61787){
var seq__61651_61788__$1 = temp__5753__auto___61787;
if(cljs.core.chunked_seq_QMARK_(seq__61651_61788__$1)){
var c__4638__auto___61789 = cljs.core.chunk_first(seq__61651_61788__$1);
var G__61790 = cljs.core.chunk_rest(seq__61651_61788__$1);
var G__61791 = c__4638__auto___61789;
var G__61792 = cljs.core.count(c__4638__auto___61789);
var G__61793 = (0);
seq__61651_61768 = G__61790;
chunk__61655_61769 = G__61791;
count__61656_61770 = G__61792;
i__61657_61771 = G__61793;
continue;
} else {
var node_61794 = cljs.core.first(seq__61651_61788__$1);
if(cljs.core.not(node_61794.shadow$old)){
var path_match_61795 = shadow.cljs.devtools.client.browser.match_paths(node_61794.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61795)){
var new_link_61796 = (function (){var G__61664 = node_61794.cloneNode(true);
G__61664.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61795),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61664;
})();
(node_61794.shadow$old = true);

(new_link_61796.onload = ((function (seq__61651_61768,chunk__61655_61769,count__61656_61770,i__61657_61771,seq__61617,chunk__61619,count__61620,i__61621,new_link_61796,path_match_61795,node_61794,seq__61651_61788__$1,temp__5753__auto___61787,path,map__61616,map__61616__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_61794);
});})(seq__61651_61768,chunk__61655_61769,count__61656_61770,i__61657_61771,seq__61617,chunk__61619,count__61620,i__61621,new_link_61796,path_match_61795,node_61794,seq__61651_61788__$1,temp__5753__auto___61787,path,map__61616,map__61616__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61795], 0));

goog.dom.insertSiblingAfter(new_link_61796,node_61794);


var G__61797 = cljs.core.next(seq__61651_61788__$1);
var G__61798 = null;
var G__61799 = (0);
var G__61800 = (0);
seq__61651_61768 = G__61797;
chunk__61655_61769 = G__61798;
count__61656_61770 = G__61799;
i__61657_61771 = G__61800;
continue;
} else {
var G__61801 = cljs.core.next(seq__61651_61788__$1);
var G__61802 = null;
var G__61803 = (0);
var G__61804 = (0);
seq__61651_61768 = G__61801;
chunk__61655_61769 = G__61802;
count__61656_61770 = G__61803;
i__61657_61771 = G__61804;
continue;
}
} else {
var G__61805 = cljs.core.next(seq__61651_61788__$1);
var G__61806 = null;
var G__61807 = (0);
var G__61808 = (0);
seq__61651_61768 = G__61805;
chunk__61655_61769 = G__61806;
count__61656_61770 = G__61807;
i__61657_61771 = G__61808;
continue;
}
}
} else {
}
}
break;
}


var G__61809 = seq__61617;
var G__61810 = chunk__61619;
var G__61811 = count__61620;
var G__61812 = (i__61621 + (1));
seq__61617 = G__61809;
chunk__61619 = G__61810;
count__61620 = G__61811;
i__61621 = G__61812;
continue;
} else {
var G__61813 = seq__61617;
var G__61814 = chunk__61619;
var G__61815 = count__61620;
var G__61816 = (i__61621 + (1));
seq__61617 = G__61813;
chunk__61619 = G__61814;
count__61620 = G__61815;
i__61621 = G__61816;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61617);
if(temp__5753__auto__){
var seq__61617__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61617__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__61617__$1);
var G__61817 = cljs.core.chunk_rest(seq__61617__$1);
var G__61818 = c__4638__auto__;
var G__61819 = cljs.core.count(c__4638__auto__);
var G__61820 = (0);
seq__61617 = G__61817;
chunk__61619 = G__61818;
count__61620 = G__61819;
i__61621 = G__61820;
continue;
} else {
var path = cljs.core.first(seq__61617__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__61665_61821 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__61669_61822 = null;
var count__61670_61823 = (0);
var i__61671_61824 = (0);
while(true){
if((i__61671_61824 < count__61670_61823)){
var node_61825 = chunk__61669_61822.cljs$core$IIndexed$_nth$arity$2(null,i__61671_61824);
if(cljs.core.not(node_61825.shadow$old)){
var path_match_61826 = shadow.cljs.devtools.client.browser.match_paths(node_61825.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61826)){
var new_link_61827 = (function (){var G__61677 = node_61825.cloneNode(true);
G__61677.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61826),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61677;
})();
(node_61825.shadow$old = true);

(new_link_61827.onload = ((function (seq__61665_61821,chunk__61669_61822,count__61670_61823,i__61671_61824,seq__61617,chunk__61619,count__61620,i__61621,new_link_61827,path_match_61826,node_61825,path,seq__61617__$1,temp__5753__auto__,map__61616,map__61616__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_61825);
});})(seq__61665_61821,chunk__61669_61822,count__61670_61823,i__61671_61824,seq__61617,chunk__61619,count__61620,i__61621,new_link_61827,path_match_61826,node_61825,path,seq__61617__$1,temp__5753__auto__,map__61616,map__61616__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61826], 0));

goog.dom.insertSiblingAfter(new_link_61827,node_61825);


var G__61828 = seq__61665_61821;
var G__61829 = chunk__61669_61822;
var G__61830 = count__61670_61823;
var G__61831 = (i__61671_61824 + (1));
seq__61665_61821 = G__61828;
chunk__61669_61822 = G__61829;
count__61670_61823 = G__61830;
i__61671_61824 = G__61831;
continue;
} else {
var G__61832 = seq__61665_61821;
var G__61833 = chunk__61669_61822;
var G__61834 = count__61670_61823;
var G__61835 = (i__61671_61824 + (1));
seq__61665_61821 = G__61832;
chunk__61669_61822 = G__61833;
count__61670_61823 = G__61834;
i__61671_61824 = G__61835;
continue;
}
} else {
var G__61836 = seq__61665_61821;
var G__61837 = chunk__61669_61822;
var G__61838 = count__61670_61823;
var G__61839 = (i__61671_61824 + (1));
seq__61665_61821 = G__61836;
chunk__61669_61822 = G__61837;
count__61670_61823 = G__61838;
i__61671_61824 = G__61839;
continue;
}
} else {
var temp__5753__auto___61840__$1 = cljs.core.seq(seq__61665_61821);
if(temp__5753__auto___61840__$1){
var seq__61665_61841__$1 = temp__5753__auto___61840__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61665_61841__$1)){
var c__4638__auto___61842 = cljs.core.chunk_first(seq__61665_61841__$1);
var G__61843 = cljs.core.chunk_rest(seq__61665_61841__$1);
var G__61844 = c__4638__auto___61842;
var G__61845 = cljs.core.count(c__4638__auto___61842);
var G__61846 = (0);
seq__61665_61821 = G__61843;
chunk__61669_61822 = G__61844;
count__61670_61823 = G__61845;
i__61671_61824 = G__61846;
continue;
} else {
var node_61847 = cljs.core.first(seq__61665_61841__$1);
if(cljs.core.not(node_61847.shadow$old)){
var path_match_61848 = shadow.cljs.devtools.client.browser.match_paths(node_61847.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61848)){
var new_link_61849 = (function (){var G__61678 = node_61847.cloneNode(true);
G__61678.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61848),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61678;
})();
(node_61847.shadow$old = true);

(new_link_61849.onload = ((function (seq__61665_61821,chunk__61669_61822,count__61670_61823,i__61671_61824,seq__61617,chunk__61619,count__61620,i__61621,new_link_61849,path_match_61848,node_61847,seq__61665_61841__$1,temp__5753__auto___61840__$1,path,seq__61617__$1,temp__5753__auto__,map__61616,map__61616__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_61847);
});})(seq__61665_61821,chunk__61669_61822,count__61670_61823,i__61671_61824,seq__61617,chunk__61619,count__61620,i__61621,new_link_61849,path_match_61848,node_61847,seq__61665_61841__$1,temp__5753__auto___61840__$1,path,seq__61617__$1,temp__5753__auto__,map__61616,map__61616__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61848], 0));

goog.dom.insertSiblingAfter(new_link_61849,node_61847);


var G__61850 = cljs.core.next(seq__61665_61841__$1);
var G__61851 = null;
var G__61852 = (0);
var G__61853 = (0);
seq__61665_61821 = G__61850;
chunk__61669_61822 = G__61851;
count__61670_61823 = G__61852;
i__61671_61824 = G__61853;
continue;
} else {
var G__61854 = cljs.core.next(seq__61665_61841__$1);
var G__61855 = null;
var G__61856 = (0);
var G__61857 = (0);
seq__61665_61821 = G__61854;
chunk__61669_61822 = G__61855;
count__61670_61823 = G__61856;
i__61671_61824 = G__61857;
continue;
}
} else {
var G__61858 = cljs.core.next(seq__61665_61841__$1);
var G__61859 = null;
var G__61860 = (0);
var G__61861 = (0);
seq__61665_61821 = G__61858;
chunk__61669_61822 = G__61859;
count__61670_61823 = G__61860;
i__61671_61824 = G__61861;
continue;
}
}
} else {
}
}
break;
}


var G__61862 = cljs.core.next(seq__61617__$1);
var G__61863 = null;
var G__61864 = (0);
var G__61865 = (0);
seq__61617 = G__61862;
chunk__61619 = G__61863;
count__61620 = G__61864;
i__61621 = G__61865;
continue;
} else {
var G__61866 = cljs.core.next(seq__61617__$1);
var G__61867 = null;
var G__61868 = (0);
var G__61869 = (0);
seq__61617 = G__61866;
chunk__61619 = G__61867;
count__61620 = G__61868;
i__61621 = G__61869;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__61679){
var map__61680 = p__61679;
var map__61680__$1 = cljs.core.__destructure_map(map__61680);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61680__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__61681){
var map__61682 = p__61681;
var map__61682__$1 = cljs.core.__destructure_map(map__61682);
var _ = map__61682__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61682__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__61683,done,error){
var map__61684 = p__61683;
var map__61684__$1 = cljs.core.__destructure_map(map__61684);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61684__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__61685,done,error){
var map__61686 = p__61685;
var map__61686__$1 = cljs.core.__destructure_map(map__61686);
var msg = map__61686__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61686__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61686__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61686__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__61687){
var map__61688 = p__61687;
var map__61688__$1 = cljs.core.__destructure_map(map__61688);
var src = map__61688__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61688__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__61689 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__61689) : done.call(null,G__61689));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__61690){
var map__61691 = p__61690;
var map__61691__$1 = cljs.core.__destructure_map(map__61691);
var msg__$1 = map__61691__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61691__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e61692){var ex = e61692;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__61693){
var map__61694 = p__61693;
var map__61694__$1 = cljs.core.__destructure_map(map__61694);
var env = map__61694__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61694__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__61695){
var map__61696 = p__61695;
var map__61696__$1 = cljs.core.__destructure_map(map__61696);
var msg = map__61696__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61696__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__61697){
var map__61698 = p__61697;
var map__61698__$1 = cljs.core.__destructure_map(map__61698);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61698__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61698__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__61699){
var map__61700 = p__61699;
var map__61700__$1 = cljs.core.__destructure_map(map__61700);
var svc = map__61700__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61700__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
