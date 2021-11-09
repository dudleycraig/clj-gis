goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_59816 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_59816(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_59818 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_59818(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__58818 = coll;
var G__58819 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__58818,G__58819) : shadow.dom.lazy_native_coll_seq.call(null,G__58818,G__58819));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__58855 = arguments.length;
switch (G__58855) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__58861 = arguments.length;
switch (G__58861) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__58879 = arguments.length;
switch (G__58879) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__58897 = arguments.length;
switch (G__58897) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__58911 = arguments.length;
switch (G__58911) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__58930 = arguments.length;
switch (G__58930) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e58942){if((e58942 instanceof Object)){
var e = e58942;
return console.log("didnt support attachEvent",el,e);
} else {
throw e58942;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__58951 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__58952 = null;
var count__58953 = (0);
var i__58954 = (0);
while(true){
if((i__58954 < count__58953)){
var el = chunk__58952.cljs$core$IIndexed$_nth$arity$2(null,i__58954);
var handler_59855__$1 = ((function (seq__58951,chunk__58952,count__58953,i__58954,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__58951,chunk__58952,count__58953,i__58954,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_59855__$1);


var G__59856 = seq__58951;
var G__59857 = chunk__58952;
var G__59858 = count__58953;
var G__59859 = (i__58954 + (1));
seq__58951 = G__59856;
chunk__58952 = G__59857;
count__58953 = G__59858;
i__58954 = G__59859;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58951);
if(temp__5753__auto__){
var seq__58951__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58951__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__58951__$1);
var G__59862 = cljs.core.chunk_rest(seq__58951__$1);
var G__59863 = c__4638__auto__;
var G__59864 = cljs.core.count(c__4638__auto__);
var G__59865 = (0);
seq__58951 = G__59862;
chunk__58952 = G__59863;
count__58953 = G__59864;
i__58954 = G__59865;
continue;
} else {
var el = cljs.core.first(seq__58951__$1);
var handler_59866__$1 = ((function (seq__58951,chunk__58952,count__58953,i__58954,el,seq__58951__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__58951,chunk__58952,count__58953,i__58954,el,seq__58951__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_59866__$1);


var G__59867 = cljs.core.next(seq__58951__$1);
var G__59868 = null;
var G__59869 = (0);
var G__59870 = (0);
seq__58951 = G__59867;
chunk__58952 = G__59868;
count__58953 = G__59869;
i__58954 = G__59870;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__58973 = arguments.length;
switch (G__58973) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__58986 = cljs.core.seq(events);
var chunk__58987 = null;
var count__58988 = (0);
var i__58989 = (0);
while(true){
if((i__58989 < count__58988)){
var vec__59001 = chunk__58987.cljs$core$IIndexed$_nth$arity$2(null,i__58989);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59001,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59001,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__59878 = seq__58986;
var G__59879 = chunk__58987;
var G__59880 = count__58988;
var G__59881 = (i__58989 + (1));
seq__58986 = G__59878;
chunk__58987 = G__59879;
count__58988 = G__59880;
i__58989 = G__59881;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58986);
if(temp__5753__auto__){
var seq__58986__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58986__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__58986__$1);
var G__59882 = cljs.core.chunk_rest(seq__58986__$1);
var G__59883 = c__4638__auto__;
var G__59884 = cljs.core.count(c__4638__auto__);
var G__59885 = (0);
seq__58986 = G__59882;
chunk__58987 = G__59883;
count__58988 = G__59884;
i__58989 = G__59885;
continue;
} else {
var vec__59011 = cljs.core.first(seq__58986__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59011,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59011,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__59889 = cljs.core.next(seq__58986__$1);
var G__59890 = null;
var G__59891 = (0);
var G__59892 = (0);
seq__58986 = G__59889;
chunk__58987 = G__59890;
count__58988 = G__59891;
i__58989 = G__59892;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__59018 = cljs.core.seq(styles);
var chunk__59019 = null;
var count__59020 = (0);
var i__59021 = (0);
while(true){
if((i__59021 < count__59020)){
var vec__59036 = chunk__59019.cljs$core$IIndexed$_nth$arity$2(null,i__59021);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59036,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59036,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__59894 = seq__59018;
var G__59895 = chunk__59019;
var G__59896 = count__59020;
var G__59897 = (i__59021 + (1));
seq__59018 = G__59894;
chunk__59019 = G__59895;
count__59020 = G__59896;
i__59021 = G__59897;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59018);
if(temp__5753__auto__){
var seq__59018__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59018__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__59018__$1);
var G__59898 = cljs.core.chunk_rest(seq__59018__$1);
var G__59899 = c__4638__auto__;
var G__59900 = cljs.core.count(c__4638__auto__);
var G__59901 = (0);
seq__59018 = G__59898;
chunk__59019 = G__59899;
count__59020 = G__59900;
i__59021 = G__59901;
continue;
} else {
var vec__59043 = cljs.core.first(seq__59018__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59043,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59043,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__59902 = cljs.core.next(seq__59018__$1);
var G__59903 = null;
var G__59904 = (0);
var G__59905 = (0);
seq__59018 = G__59902;
chunk__59019 = G__59903;
count__59020 = G__59904;
i__59021 = G__59905;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__59054_59906 = key;
var G__59054_59907__$1 = (((G__59054_59906 instanceof cljs.core.Keyword))?G__59054_59906.fqn:null);
switch (G__59054_59907__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_59910 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_59910,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_59910,"aria-");
}
})())){
el.setAttribute(ks_59910,value);
} else {
(el[ks_59910] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__59105){
var map__59106 = p__59105;
var map__59106__$1 = cljs.core.__destructure_map(map__59106);
var props = map__59106__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59106__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__59113 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59113,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59113,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59113,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__59117 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__59117,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__59117;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__59124 = arguments.length;
switch (G__59124) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__59136){
var vec__59137 = p__59136;
var seq__59138 = cljs.core.seq(vec__59137);
var first__59139 = cljs.core.first(seq__59138);
var seq__59138__$1 = cljs.core.next(seq__59138);
var nn = first__59139;
var first__59139__$1 = cljs.core.first(seq__59138__$1);
var seq__59138__$2 = cljs.core.next(seq__59138__$1);
var np = first__59139__$1;
var nc = seq__59138__$2;
var node = vec__59137;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59141 = nn;
var G__59142 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__59141,G__59142) : create_fn.call(null,G__59141,G__59142));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59145 = nn;
var G__59146 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__59145,G__59146) : create_fn.call(null,G__59145,G__59146));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__59154 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59154,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59154,(1),null);
var seq__59158_59927 = cljs.core.seq(node_children);
var chunk__59159_59928 = null;
var count__59160_59929 = (0);
var i__59161_59930 = (0);
while(true){
if((i__59161_59930 < count__59160_59929)){
var child_struct_59931 = chunk__59159_59928.cljs$core$IIndexed$_nth$arity$2(null,i__59161_59930);
var children_59933 = shadow.dom.dom_node(child_struct_59931);
if(cljs.core.seq_QMARK_(children_59933)){
var seq__59210_59934 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_59933));
var chunk__59212_59935 = null;
var count__59213_59936 = (0);
var i__59214_59937 = (0);
while(true){
if((i__59214_59937 < count__59213_59936)){
var child_59938 = chunk__59212_59935.cljs$core$IIndexed$_nth$arity$2(null,i__59214_59937);
if(cljs.core.truth_(child_59938)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59938);


var G__59939 = seq__59210_59934;
var G__59940 = chunk__59212_59935;
var G__59941 = count__59213_59936;
var G__59942 = (i__59214_59937 + (1));
seq__59210_59934 = G__59939;
chunk__59212_59935 = G__59940;
count__59213_59936 = G__59941;
i__59214_59937 = G__59942;
continue;
} else {
var G__59943 = seq__59210_59934;
var G__59944 = chunk__59212_59935;
var G__59945 = count__59213_59936;
var G__59946 = (i__59214_59937 + (1));
seq__59210_59934 = G__59943;
chunk__59212_59935 = G__59944;
count__59213_59936 = G__59945;
i__59214_59937 = G__59946;
continue;
}
} else {
var temp__5753__auto___59947 = cljs.core.seq(seq__59210_59934);
if(temp__5753__auto___59947){
var seq__59210_59948__$1 = temp__5753__auto___59947;
if(cljs.core.chunked_seq_QMARK_(seq__59210_59948__$1)){
var c__4638__auto___59949 = cljs.core.chunk_first(seq__59210_59948__$1);
var G__59950 = cljs.core.chunk_rest(seq__59210_59948__$1);
var G__59951 = c__4638__auto___59949;
var G__59952 = cljs.core.count(c__4638__auto___59949);
var G__59953 = (0);
seq__59210_59934 = G__59950;
chunk__59212_59935 = G__59951;
count__59213_59936 = G__59952;
i__59214_59937 = G__59953;
continue;
} else {
var child_59954 = cljs.core.first(seq__59210_59948__$1);
if(cljs.core.truth_(child_59954)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59954);


var G__59955 = cljs.core.next(seq__59210_59948__$1);
var G__59956 = null;
var G__59957 = (0);
var G__59958 = (0);
seq__59210_59934 = G__59955;
chunk__59212_59935 = G__59956;
count__59213_59936 = G__59957;
i__59214_59937 = G__59958;
continue;
} else {
var G__59959 = cljs.core.next(seq__59210_59948__$1);
var G__59960 = null;
var G__59961 = (0);
var G__59962 = (0);
seq__59210_59934 = G__59959;
chunk__59212_59935 = G__59960;
count__59213_59936 = G__59961;
i__59214_59937 = G__59962;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_59933);
}


var G__59963 = seq__59158_59927;
var G__59964 = chunk__59159_59928;
var G__59965 = count__59160_59929;
var G__59966 = (i__59161_59930 + (1));
seq__59158_59927 = G__59963;
chunk__59159_59928 = G__59964;
count__59160_59929 = G__59965;
i__59161_59930 = G__59966;
continue;
} else {
var temp__5753__auto___59967 = cljs.core.seq(seq__59158_59927);
if(temp__5753__auto___59967){
var seq__59158_59968__$1 = temp__5753__auto___59967;
if(cljs.core.chunked_seq_QMARK_(seq__59158_59968__$1)){
var c__4638__auto___59969 = cljs.core.chunk_first(seq__59158_59968__$1);
var G__59970 = cljs.core.chunk_rest(seq__59158_59968__$1);
var G__59971 = c__4638__auto___59969;
var G__59972 = cljs.core.count(c__4638__auto___59969);
var G__59973 = (0);
seq__59158_59927 = G__59970;
chunk__59159_59928 = G__59971;
count__59160_59929 = G__59972;
i__59161_59930 = G__59973;
continue;
} else {
var child_struct_59974 = cljs.core.first(seq__59158_59968__$1);
var children_59975 = shadow.dom.dom_node(child_struct_59974);
if(cljs.core.seq_QMARK_(children_59975)){
var seq__59236_59976 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_59975));
var chunk__59238_59977 = null;
var count__59239_59978 = (0);
var i__59240_59979 = (0);
while(true){
if((i__59240_59979 < count__59239_59978)){
var child_59980 = chunk__59238_59977.cljs$core$IIndexed$_nth$arity$2(null,i__59240_59979);
if(cljs.core.truth_(child_59980)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59980);


var G__59981 = seq__59236_59976;
var G__59982 = chunk__59238_59977;
var G__59983 = count__59239_59978;
var G__59984 = (i__59240_59979 + (1));
seq__59236_59976 = G__59981;
chunk__59238_59977 = G__59982;
count__59239_59978 = G__59983;
i__59240_59979 = G__59984;
continue;
} else {
var G__59985 = seq__59236_59976;
var G__59986 = chunk__59238_59977;
var G__59987 = count__59239_59978;
var G__59988 = (i__59240_59979 + (1));
seq__59236_59976 = G__59985;
chunk__59238_59977 = G__59986;
count__59239_59978 = G__59987;
i__59240_59979 = G__59988;
continue;
}
} else {
var temp__5753__auto___59989__$1 = cljs.core.seq(seq__59236_59976);
if(temp__5753__auto___59989__$1){
var seq__59236_59991__$1 = temp__5753__auto___59989__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59236_59991__$1)){
var c__4638__auto___59992 = cljs.core.chunk_first(seq__59236_59991__$1);
var G__59993 = cljs.core.chunk_rest(seq__59236_59991__$1);
var G__59994 = c__4638__auto___59992;
var G__59995 = cljs.core.count(c__4638__auto___59992);
var G__59996 = (0);
seq__59236_59976 = G__59993;
chunk__59238_59977 = G__59994;
count__59239_59978 = G__59995;
i__59240_59979 = G__59996;
continue;
} else {
var child_59997 = cljs.core.first(seq__59236_59991__$1);
if(cljs.core.truth_(child_59997)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59997);


var G__59998 = cljs.core.next(seq__59236_59991__$1);
var G__59999 = null;
var G__60000 = (0);
var G__60001 = (0);
seq__59236_59976 = G__59998;
chunk__59238_59977 = G__59999;
count__59239_59978 = G__60000;
i__59240_59979 = G__60001;
continue;
} else {
var G__60002 = cljs.core.next(seq__59236_59991__$1);
var G__60003 = null;
var G__60004 = (0);
var G__60005 = (0);
seq__59236_59976 = G__60002;
chunk__59238_59977 = G__60003;
count__59239_59978 = G__60004;
i__59240_59979 = G__60005;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_59975);
}


var G__60006 = cljs.core.next(seq__59158_59968__$1);
var G__60007 = null;
var G__60008 = (0);
var G__60009 = (0);
seq__59158_59927 = G__60006;
chunk__59159_59928 = G__60007;
count__59160_59929 = G__60008;
i__59161_59930 = G__60009;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__59275 = cljs.core.seq(node);
var chunk__59276 = null;
var count__59277 = (0);
var i__59278 = (0);
while(true){
if((i__59278 < count__59277)){
var n = chunk__59276.cljs$core$IIndexed$_nth$arity$2(null,i__59278);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__60011 = seq__59275;
var G__60012 = chunk__59276;
var G__60013 = count__59277;
var G__60014 = (i__59278 + (1));
seq__59275 = G__60011;
chunk__59276 = G__60012;
count__59277 = G__60013;
i__59278 = G__60014;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59275);
if(temp__5753__auto__){
var seq__59275__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59275__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__59275__$1);
var G__60016 = cljs.core.chunk_rest(seq__59275__$1);
var G__60017 = c__4638__auto__;
var G__60018 = cljs.core.count(c__4638__auto__);
var G__60019 = (0);
seq__59275 = G__60016;
chunk__59276 = G__60017;
count__59277 = G__60018;
i__59278 = G__60019;
continue;
} else {
var n = cljs.core.first(seq__59275__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__60020 = cljs.core.next(seq__59275__$1);
var G__60021 = null;
var G__60022 = (0);
var G__60023 = (0);
seq__59275 = G__60020;
chunk__59276 = G__60021;
count__59277 = G__60022;
i__59278 = G__60023;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__59282 = arguments.length;
switch (G__59282) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__59290 = arguments.length;
switch (G__59290) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__59309 = arguments.length;
switch (G__59309) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___60042 = arguments.length;
var i__4819__auto___60044 = (0);
while(true){
if((i__4819__auto___60044 < len__4818__auto___60042)){
args__4824__auto__.push((arguments[i__4819__auto___60044]));

var G__60048 = (i__4819__auto___60044 + (1));
i__4819__auto___60044 = G__60048;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__59336_60049 = cljs.core.seq(nodes);
var chunk__59337_60050 = null;
var count__59338_60051 = (0);
var i__59339_60052 = (0);
while(true){
if((i__59339_60052 < count__59338_60051)){
var node_60054 = chunk__59337_60050.cljs$core$IIndexed$_nth$arity$2(null,i__59339_60052);
fragment.appendChild(shadow.dom._to_dom(node_60054));


var G__60055 = seq__59336_60049;
var G__60056 = chunk__59337_60050;
var G__60057 = count__59338_60051;
var G__60058 = (i__59339_60052 + (1));
seq__59336_60049 = G__60055;
chunk__59337_60050 = G__60056;
count__59338_60051 = G__60057;
i__59339_60052 = G__60058;
continue;
} else {
var temp__5753__auto___60060 = cljs.core.seq(seq__59336_60049);
if(temp__5753__auto___60060){
var seq__59336_60061__$1 = temp__5753__auto___60060;
if(cljs.core.chunked_seq_QMARK_(seq__59336_60061__$1)){
var c__4638__auto___60062 = cljs.core.chunk_first(seq__59336_60061__$1);
var G__60063 = cljs.core.chunk_rest(seq__59336_60061__$1);
var G__60064 = c__4638__auto___60062;
var G__60065 = cljs.core.count(c__4638__auto___60062);
var G__60066 = (0);
seq__59336_60049 = G__60063;
chunk__59337_60050 = G__60064;
count__59338_60051 = G__60065;
i__59339_60052 = G__60066;
continue;
} else {
var node_60067 = cljs.core.first(seq__59336_60061__$1);
fragment.appendChild(shadow.dom._to_dom(node_60067));


var G__60068 = cljs.core.next(seq__59336_60061__$1);
var G__60069 = null;
var G__60070 = (0);
var G__60071 = (0);
seq__59336_60049 = G__60068;
chunk__59337_60050 = G__60069;
count__59338_60051 = G__60070;
i__59339_60052 = G__60071;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq59334){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59334));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__59345_60072 = cljs.core.seq(scripts);
var chunk__59346_60073 = null;
var count__59347_60074 = (0);
var i__59348_60075 = (0);
while(true){
if((i__59348_60075 < count__59347_60074)){
var vec__59355_60076 = chunk__59346_60073.cljs$core$IIndexed$_nth$arity$2(null,i__59348_60075);
var script_tag_60077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59355_60076,(0),null);
var script_body_60078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59355_60076,(1),null);
eval(script_body_60078);


var G__60079 = seq__59345_60072;
var G__60080 = chunk__59346_60073;
var G__60081 = count__59347_60074;
var G__60082 = (i__59348_60075 + (1));
seq__59345_60072 = G__60079;
chunk__59346_60073 = G__60080;
count__59347_60074 = G__60081;
i__59348_60075 = G__60082;
continue;
} else {
var temp__5753__auto___60083 = cljs.core.seq(seq__59345_60072);
if(temp__5753__auto___60083){
var seq__59345_60085__$1 = temp__5753__auto___60083;
if(cljs.core.chunked_seq_QMARK_(seq__59345_60085__$1)){
var c__4638__auto___60086 = cljs.core.chunk_first(seq__59345_60085__$1);
var G__60087 = cljs.core.chunk_rest(seq__59345_60085__$1);
var G__60088 = c__4638__auto___60086;
var G__60089 = cljs.core.count(c__4638__auto___60086);
var G__60090 = (0);
seq__59345_60072 = G__60087;
chunk__59346_60073 = G__60088;
count__59347_60074 = G__60089;
i__59348_60075 = G__60090;
continue;
} else {
var vec__59361_60091 = cljs.core.first(seq__59345_60085__$1);
var script_tag_60092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59361_60091,(0),null);
var script_body_60093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59361_60091,(1),null);
eval(script_body_60093);


var G__60094 = cljs.core.next(seq__59345_60085__$1);
var G__60095 = null;
var G__60096 = (0);
var G__60097 = (0);
seq__59345_60072 = G__60094;
chunk__59346_60073 = G__60095;
count__59347_60074 = G__60096;
i__59348_60075 = G__60097;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__59366){
var vec__59368 = p__59366;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59368,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59368,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__59385 = arguments.length;
switch (G__59385) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__59408 = cljs.core.seq(style_keys);
var chunk__59409 = null;
var count__59410 = (0);
var i__59411 = (0);
while(true){
if((i__59411 < count__59410)){
var it = chunk__59409.cljs$core$IIndexed$_nth$arity$2(null,i__59411);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__60116 = seq__59408;
var G__60117 = chunk__59409;
var G__60118 = count__59410;
var G__60119 = (i__59411 + (1));
seq__59408 = G__60116;
chunk__59409 = G__60117;
count__59410 = G__60118;
i__59411 = G__60119;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59408);
if(temp__5753__auto__){
var seq__59408__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59408__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__59408__$1);
var G__60120 = cljs.core.chunk_rest(seq__59408__$1);
var G__60121 = c__4638__auto__;
var G__60122 = cljs.core.count(c__4638__auto__);
var G__60123 = (0);
seq__59408 = G__60120;
chunk__59409 = G__60121;
count__59410 = G__60122;
i__59411 = G__60123;
continue;
} else {
var it = cljs.core.first(seq__59408__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__60124 = cljs.core.next(seq__59408__$1);
var G__60125 = null;
var G__60126 = (0);
var G__60127 = (0);
seq__59408 = G__60124;
chunk__59409 = G__60125;
count__59410 = G__60126;
i__59411 = G__60127;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k59418,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__59438 = k59418;
var G__59438__$1 = (((G__59438 instanceof cljs.core.Keyword))?G__59438.fqn:null);
switch (G__59438__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59418,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__59453){
var vec__59454 = p__59453;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59454,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59454,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59417){
var self__ = this;
var G__59417__$1 = this;
return (new cljs.core.RecordIter((0),G__59417__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59419,other59420){
var self__ = this;
var this59419__$1 = this;
return (((!((other59420 == null)))) && ((((this59419__$1.constructor === other59420.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59419__$1.x,other59420.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59419__$1.y,other59420.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59419__$1.__extmap,other59420.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k59418){
var self__ = this;
var this__4468__auto____$1 = this;
var G__59502 = k59418;
var G__59502__$1 = (((G__59502 instanceof cljs.core.Keyword))?G__59502.fqn:null);
switch (G__59502__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k59418);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__59417){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__59504 = cljs.core.keyword_identical_QMARK_;
var expr__59505 = k__4470__auto__;
if(cljs.core.truth_((pred__59504.cljs$core$IFn$_invoke$arity$2 ? pred__59504.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__59505) : pred__59504.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__59505)))){
return (new shadow.dom.Coordinate(G__59417,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__59504.cljs$core$IFn$_invoke$arity$2 ? pred__59504.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__59505) : pred__59504.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__59505)))){
return (new shadow.dom.Coordinate(self__.x,G__59417,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__59417),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__59417){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__59417,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__59423){
var extmap__4501__auto__ = (function (){var G__59518 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__59423,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__59423)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__59518);
} else {
return G__59518;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__59423),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__59423),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k59527,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__59531 = k59527;
var G__59531__$1 = (((G__59531 instanceof cljs.core.Keyword))?G__59531.fqn:null);
switch (G__59531__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59527,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__59532){
var vec__59533 = p__59532;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59533,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59533,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59526){
var self__ = this;
var G__59526__$1 = this;
return (new cljs.core.RecordIter((0),G__59526__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59528,other59529){
var self__ = this;
var this59528__$1 = this;
return (((!((other59529 == null)))) && ((((this59528__$1.constructor === other59529.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59528__$1.w,other59529.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59528__$1.h,other59529.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59528__$1.__extmap,other59529.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k59527){
var self__ = this;
var this__4468__auto____$1 = this;
var G__59559 = k59527;
var G__59559__$1 = (((G__59559 instanceof cljs.core.Keyword))?G__59559.fqn:null);
switch (G__59559__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k59527);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__59526){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__59561 = cljs.core.keyword_identical_QMARK_;
var expr__59562 = k__4470__auto__;
if(cljs.core.truth_((pred__59561.cljs$core$IFn$_invoke$arity$2 ? pred__59561.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__59562) : pred__59561.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__59562)))){
return (new shadow.dom.Size(G__59526,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__59561.cljs$core$IFn$_invoke$arity$2 ? pred__59561.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__59562) : pred__59561.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__59562)))){
return (new shadow.dom.Size(self__.w,G__59526,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__59526),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__59526){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__59526,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__59530){
var extmap__4501__auto__ = (function (){var G__59574 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__59530,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__59530)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__59574);
} else {
return G__59574;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__59530),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__59530),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__60179 = (i + (1));
var G__60180 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__60179;
ret = G__60180;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59609){
var vec__59610 = p__59609;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59610,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59610,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__59617 = arguments.length;
switch (G__59617) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__60188 = ps;
var G__60189 = (i + (1));
el__$1 = G__60188;
i = G__60189;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__59694 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59694,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59694,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59694,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__59699_60193 = cljs.core.seq(props);
var chunk__59700_60194 = null;
var count__59701_60195 = (0);
var i__59702_60196 = (0);
while(true){
if((i__59702_60196 < count__59701_60195)){
var vec__59717_60197 = chunk__59700_60194.cljs$core$IIndexed$_nth$arity$2(null,i__59702_60196);
var k_60198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59717_60197,(0),null);
var v_60199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59717_60197,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_60198);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_60198),v_60199);


var G__60200 = seq__59699_60193;
var G__60201 = chunk__59700_60194;
var G__60202 = count__59701_60195;
var G__60203 = (i__59702_60196 + (1));
seq__59699_60193 = G__60200;
chunk__59700_60194 = G__60201;
count__59701_60195 = G__60202;
i__59702_60196 = G__60203;
continue;
} else {
var temp__5753__auto___60204 = cljs.core.seq(seq__59699_60193);
if(temp__5753__auto___60204){
var seq__59699_60205__$1 = temp__5753__auto___60204;
if(cljs.core.chunked_seq_QMARK_(seq__59699_60205__$1)){
var c__4638__auto___60206 = cljs.core.chunk_first(seq__59699_60205__$1);
var G__60207 = cljs.core.chunk_rest(seq__59699_60205__$1);
var G__60208 = c__4638__auto___60206;
var G__60209 = cljs.core.count(c__4638__auto___60206);
var G__60210 = (0);
seq__59699_60193 = G__60207;
chunk__59700_60194 = G__60208;
count__59701_60195 = G__60209;
i__59702_60196 = G__60210;
continue;
} else {
var vec__59724_60211 = cljs.core.first(seq__59699_60205__$1);
var k_60212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59724_60211,(0),null);
var v_60213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59724_60211,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_60212);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_60212),v_60213);


var G__60214 = cljs.core.next(seq__59699_60205__$1);
var G__60215 = null;
var G__60216 = (0);
var G__60217 = (0);
seq__59699_60193 = G__60214;
chunk__59700_60194 = G__60215;
count__59701_60195 = G__60216;
i__59702_60196 = G__60217;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__59737 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59737,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59737,(1),null);
var seq__59740_60218 = cljs.core.seq(node_children);
var chunk__59742_60219 = null;
var count__59743_60220 = (0);
var i__59744_60221 = (0);
while(true){
if((i__59744_60221 < count__59743_60220)){
var child_struct_60222 = chunk__59742_60219.cljs$core$IIndexed$_nth$arity$2(null,i__59744_60221);
if((!((child_struct_60222 == null)))){
if(typeof child_struct_60222 === 'string'){
var text_60223 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_60223),child_struct_60222].join(''));
} else {
var children_60224 = shadow.dom.svg_node(child_struct_60222);
if(cljs.core.seq_QMARK_(children_60224)){
var seq__59771_60225 = cljs.core.seq(children_60224);
var chunk__59773_60226 = null;
var count__59774_60227 = (0);
var i__59775_60228 = (0);
while(true){
if((i__59775_60228 < count__59774_60227)){
var child_60229 = chunk__59773_60226.cljs$core$IIndexed$_nth$arity$2(null,i__59775_60228);
if(cljs.core.truth_(child_60229)){
node.appendChild(child_60229);


var G__60230 = seq__59771_60225;
var G__60231 = chunk__59773_60226;
var G__60232 = count__59774_60227;
var G__60233 = (i__59775_60228 + (1));
seq__59771_60225 = G__60230;
chunk__59773_60226 = G__60231;
count__59774_60227 = G__60232;
i__59775_60228 = G__60233;
continue;
} else {
var G__60234 = seq__59771_60225;
var G__60235 = chunk__59773_60226;
var G__60236 = count__59774_60227;
var G__60237 = (i__59775_60228 + (1));
seq__59771_60225 = G__60234;
chunk__59773_60226 = G__60235;
count__59774_60227 = G__60236;
i__59775_60228 = G__60237;
continue;
}
} else {
var temp__5753__auto___60238 = cljs.core.seq(seq__59771_60225);
if(temp__5753__auto___60238){
var seq__59771_60239__$1 = temp__5753__auto___60238;
if(cljs.core.chunked_seq_QMARK_(seq__59771_60239__$1)){
var c__4638__auto___60240 = cljs.core.chunk_first(seq__59771_60239__$1);
var G__60241 = cljs.core.chunk_rest(seq__59771_60239__$1);
var G__60242 = c__4638__auto___60240;
var G__60243 = cljs.core.count(c__4638__auto___60240);
var G__60244 = (0);
seq__59771_60225 = G__60241;
chunk__59773_60226 = G__60242;
count__59774_60227 = G__60243;
i__59775_60228 = G__60244;
continue;
} else {
var child_60245 = cljs.core.first(seq__59771_60239__$1);
if(cljs.core.truth_(child_60245)){
node.appendChild(child_60245);


var G__60246 = cljs.core.next(seq__59771_60239__$1);
var G__60247 = null;
var G__60248 = (0);
var G__60249 = (0);
seq__59771_60225 = G__60246;
chunk__59773_60226 = G__60247;
count__59774_60227 = G__60248;
i__59775_60228 = G__60249;
continue;
} else {
var G__60250 = cljs.core.next(seq__59771_60239__$1);
var G__60251 = null;
var G__60252 = (0);
var G__60253 = (0);
seq__59771_60225 = G__60250;
chunk__59773_60226 = G__60251;
count__59774_60227 = G__60252;
i__59775_60228 = G__60253;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_60224);
}
}


var G__60254 = seq__59740_60218;
var G__60255 = chunk__59742_60219;
var G__60256 = count__59743_60220;
var G__60257 = (i__59744_60221 + (1));
seq__59740_60218 = G__60254;
chunk__59742_60219 = G__60255;
count__59743_60220 = G__60256;
i__59744_60221 = G__60257;
continue;
} else {
var G__60258 = seq__59740_60218;
var G__60259 = chunk__59742_60219;
var G__60260 = count__59743_60220;
var G__60261 = (i__59744_60221 + (1));
seq__59740_60218 = G__60258;
chunk__59742_60219 = G__60259;
count__59743_60220 = G__60260;
i__59744_60221 = G__60261;
continue;
}
} else {
var temp__5753__auto___60262 = cljs.core.seq(seq__59740_60218);
if(temp__5753__auto___60262){
var seq__59740_60263__$1 = temp__5753__auto___60262;
if(cljs.core.chunked_seq_QMARK_(seq__59740_60263__$1)){
var c__4638__auto___60264 = cljs.core.chunk_first(seq__59740_60263__$1);
var G__60265 = cljs.core.chunk_rest(seq__59740_60263__$1);
var G__60266 = c__4638__auto___60264;
var G__60267 = cljs.core.count(c__4638__auto___60264);
var G__60268 = (0);
seq__59740_60218 = G__60265;
chunk__59742_60219 = G__60266;
count__59743_60220 = G__60267;
i__59744_60221 = G__60268;
continue;
} else {
var child_struct_60269 = cljs.core.first(seq__59740_60263__$1);
if((!((child_struct_60269 == null)))){
if(typeof child_struct_60269 === 'string'){
var text_60270 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_60270),child_struct_60269].join(''));
} else {
var children_60271 = shadow.dom.svg_node(child_struct_60269);
if(cljs.core.seq_QMARK_(children_60271)){
var seq__59779_60272 = cljs.core.seq(children_60271);
var chunk__59781_60273 = null;
var count__59782_60274 = (0);
var i__59783_60275 = (0);
while(true){
if((i__59783_60275 < count__59782_60274)){
var child_60276 = chunk__59781_60273.cljs$core$IIndexed$_nth$arity$2(null,i__59783_60275);
if(cljs.core.truth_(child_60276)){
node.appendChild(child_60276);


var G__60277 = seq__59779_60272;
var G__60278 = chunk__59781_60273;
var G__60279 = count__59782_60274;
var G__60280 = (i__59783_60275 + (1));
seq__59779_60272 = G__60277;
chunk__59781_60273 = G__60278;
count__59782_60274 = G__60279;
i__59783_60275 = G__60280;
continue;
} else {
var G__60281 = seq__59779_60272;
var G__60282 = chunk__59781_60273;
var G__60283 = count__59782_60274;
var G__60284 = (i__59783_60275 + (1));
seq__59779_60272 = G__60281;
chunk__59781_60273 = G__60282;
count__59782_60274 = G__60283;
i__59783_60275 = G__60284;
continue;
}
} else {
var temp__5753__auto___60287__$1 = cljs.core.seq(seq__59779_60272);
if(temp__5753__auto___60287__$1){
var seq__59779_60288__$1 = temp__5753__auto___60287__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59779_60288__$1)){
var c__4638__auto___60289 = cljs.core.chunk_first(seq__59779_60288__$1);
var G__60290 = cljs.core.chunk_rest(seq__59779_60288__$1);
var G__60291 = c__4638__auto___60289;
var G__60292 = cljs.core.count(c__4638__auto___60289);
var G__60293 = (0);
seq__59779_60272 = G__60290;
chunk__59781_60273 = G__60291;
count__59782_60274 = G__60292;
i__59783_60275 = G__60293;
continue;
} else {
var child_60294 = cljs.core.first(seq__59779_60288__$1);
if(cljs.core.truth_(child_60294)){
node.appendChild(child_60294);


var G__60295 = cljs.core.next(seq__59779_60288__$1);
var G__60296 = null;
var G__60297 = (0);
var G__60298 = (0);
seq__59779_60272 = G__60295;
chunk__59781_60273 = G__60296;
count__59782_60274 = G__60297;
i__59783_60275 = G__60298;
continue;
} else {
var G__60299 = cljs.core.next(seq__59779_60288__$1);
var G__60300 = null;
var G__60301 = (0);
var G__60302 = (0);
seq__59779_60272 = G__60299;
chunk__59781_60273 = G__60300;
count__59782_60274 = G__60301;
i__59783_60275 = G__60302;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_60271);
}
}


var G__60304 = cljs.core.next(seq__59740_60263__$1);
var G__60305 = null;
var G__60306 = (0);
var G__60307 = (0);
seq__59740_60218 = G__60304;
chunk__59742_60219 = G__60305;
count__59743_60220 = G__60306;
i__59744_60221 = G__60307;
continue;
} else {
var G__60309 = cljs.core.next(seq__59740_60263__$1);
var G__60310 = null;
var G__60311 = (0);
var G__60312 = (0);
seq__59740_60218 = G__60309;
chunk__59742_60219 = G__60310;
count__59743_60220 = G__60311;
i__59744_60221 = G__60312;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___60314 = arguments.length;
var i__4819__auto___60315 = (0);
while(true){
if((i__4819__auto___60315 < len__4818__auto___60314)){
args__4824__auto__.push((arguments[i__4819__auto___60315]));

var G__60319 = (i__4819__auto___60315 + (1));
i__4819__auto___60315 = G__60319;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq59785){
var G__59786 = cljs.core.first(seq59785);
var seq59785__$1 = cljs.core.next(seq59785);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59786,seq59785__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__59791 = arguments.length;
switch (G__59791) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__43632__auto___60331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43633__auto__ = (function (){var switch__43562__auto__ = (function (state_59805){
var state_val_59806 = (state_59805[(1)]);
if((state_val_59806 === (1))){
var state_59805__$1 = state_59805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59805__$1,(2),once_or_cleanup);
} else {
if((state_val_59806 === (2))){
var inst_59802 = (state_59805[(2)]);
var inst_59803 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_59805__$1 = (function (){var statearr_59808 = state_59805;
(statearr_59808[(7)] = inst_59802);

return statearr_59808;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59805__$1,inst_59803);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__43563__auto__ = null;
var shadow$dom$state_machine__43563__auto____0 = (function (){
var statearr_59809 = [null,null,null,null,null,null,null,null];
(statearr_59809[(0)] = shadow$dom$state_machine__43563__auto__);

(statearr_59809[(1)] = (1));

return statearr_59809;
});
var shadow$dom$state_machine__43563__auto____1 = (function (state_59805){
while(true){
var ret_value__43564__auto__ = (function (){try{while(true){
var result__43565__auto__ = switch__43562__auto__(state_59805);
if(cljs.core.keyword_identical_QMARK_(result__43565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43565__auto__;
}
break;
}
}catch (e59810){var ex__43566__auto__ = e59810;
var statearr_59811_60332 = state_59805;
(statearr_59811_60332[(2)] = ex__43566__auto__);


if(cljs.core.seq((state_59805[(4)]))){
var statearr_59812_60333 = state_59805;
(statearr_59812_60333[(1)] = cljs.core.first((state_59805[(4)])));

} else {
throw ex__43566__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60334 = state_59805;
state_59805 = G__60334;
continue;
} else {
return ret_value__43564__auto__;
}
break;
}
});
shadow$dom$state_machine__43563__auto__ = function(state_59805){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__43563__auto____0.call(this);
case 1:
return shadow$dom$state_machine__43563__auto____1.call(this,state_59805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__43563__auto____0;
shadow$dom$state_machine__43563__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__43563__auto____1;
return shadow$dom$state_machine__43563__auto__;
})()
})();
var state__43634__auto__ = (function (){var statearr_59813 = f__43633__auto__();
(statearr_59813[(6)] = c__43632__auto___60331);

return statearr_59813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43634__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
