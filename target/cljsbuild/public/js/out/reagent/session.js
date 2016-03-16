// Compiled by ClojureScript 1.7.228 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__22343__auto__ = [];
var len__22336__auto___22909 = arguments.length;
var i__22337__auto___22910 = (0);
while(true){
if((i__22337__auto___22910 < len__22336__auto___22909)){
args__22343__auto__.push((arguments[i__22337__auto___22910]));

var G__22911 = (i__22337__auto___22910 + (1));
i__22337__auto___22910 = G__22911;
continue;
} else {
}
break;
}

var argseq__22344__auto__ = ((((1) < args__22343__auto__.length))?(new cljs.core.IndexedSeq(args__22343__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22344__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__22907){
var vec__22908 = p__22907;
var default$ = cljs.core.nth.call(null,vec__22908,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq22905){
var G__22906 = cljs.core.first.call(null,seq22905);
var seq22905__$1 = cljs.core.next.call(null,seq22905);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__22906,seq22905__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__22343__auto__ = [];
var len__22336__auto___22916 = arguments.length;
var i__22337__auto___22917 = (0);
while(true){
if((i__22337__auto___22917 < len__22336__auto___22916)){
args__22343__auto__.push((arguments[i__22337__auto___22917]));

var G__22918 = (i__22337__auto___22917 + (1));
i__22337__auto___22917 = G__22918;
continue;
} else {
}
break;
}

var argseq__22344__auto__ = ((((1) < args__22343__auto__.length))?(new cljs.core.IndexedSeq(args__22343__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22344__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__22914){
var vec__22915 = p__22914;
var default$ = cljs.core.nth.call(null,vec__22915,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq22912){
var G__22913 = cljs.core.first.call(null,seq22912);
var seq22912__$1 = cljs.core.next.call(null,seq22912);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__22913,seq22912__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__22343__auto__ = [];
var len__22336__auto___22921 = arguments.length;
var i__22337__auto___22922 = (0);
while(true){
if((i__22337__auto___22922 < len__22336__auto___22921)){
args__22343__auto__.push((arguments[i__22337__auto___22922]));

var G__22923 = (i__22337__auto___22922 + (1));
i__22337__auto___22922 = G__22923;
continue;
} else {
}
break;
}

var argseq__22344__auto__ = ((((1) < args__22343__auto__.length))?(new cljs.core.IndexedSeq(args__22343__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22344__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq22919){
var G__22920 = cljs.core.first.call(null,seq22919);
var seq22919__$1 = cljs.core.next.call(null,seq22919);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22920,seq22919__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__22924_SHARP_){
return cljs.core.assoc_in.call(null,p1__22924_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__22343__auto__ = [];
var len__22336__auto___22929 = arguments.length;
var i__22337__auto___22930 = (0);
while(true){
if((i__22337__auto___22930 < len__22336__auto___22929)){
args__22343__auto__.push((arguments[i__22337__auto___22930]));

var G__22931 = (i__22337__auto___22930 + (1));
i__22337__auto___22930 = G__22931;
continue;
} else {
}
break;
}

var argseq__22344__auto__ = ((((1) < args__22343__auto__.length))?(new cljs.core.IndexedSeq(args__22343__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22344__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__22927){
var vec__22928 = p__22927;
var default$ = cljs.core.nth.call(null,vec__22928,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq22925){
var G__22926 = cljs.core.first.call(null,seq22925);
var seq22925__$1 = cljs.core.next.call(null,seq22925);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22926,seq22925__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__22343__auto__ = [];
var len__22336__auto___22936 = arguments.length;
var i__22337__auto___22937 = (0);
while(true){
if((i__22337__auto___22937 < len__22336__auto___22936)){
args__22343__auto__.push((arguments[i__22337__auto___22937]));

var G__22938 = (i__22337__auto___22937 + (1));
i__22337__auto___22937 = G__22938;
continue;
} else {
}
break;
}

var argseq__22344__auto__ = ((((1) < args__22343__auto__.length))?(new cljs.core.IndexedSeq(args__22343__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22344__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__22934){
var vec__22935 = p__22934;
var default$ = cljs.core.nth.call(null,vec__22935,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq22932){
var G__22933 = cljs.core.first.call(null,seq22932);
var seq22932__$1 = cljs.core.next.call(null,seq22932);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22933,seq22932__$1);
});
/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__22343__auto__ = [];
var len__22336__auto___22943 = arguments.length;
var i__22337__auto___22944 = (0);
while(true){
if((i__22337__auto___22944 < len__22336__auto___22943)){
args__22343__auto__.push((arguments[i__22337__auto___22944]));

var G__22945 = (i__22337__auto___22944 + (1));
i__22337__auto___22944 = G__22945;
continue;
} else {
}
break;
}

var argseq__22344__auto__ = ((((2) < args__22343__auto__.length))?(new cljs.core.IndexedSeq(args__22343__auto__.slice((2)),(0))):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22344__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__22939_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__22939_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq22940){
var G__22941 = cljs.core.first.call(null,seq22940);
var seq22940__$1 = cljs.core.next.call(null,seq22940);
var G__22942 = cljs.core.first.call(null,seq22940__$1);
var seq22940__$2 = cljs.core.next.call(null,seq22940__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22941,G__22942,seq22940__$2);
});
/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__22343__auto__ = [];
var len__22336__auto___22950 = arguments.length;
var i__22337__auto___22951 = (0);
while(true){
if((i__22337__auto___22951 < len__22336__auto___22950)){
args__22343__auto__.push((arguments[i__22337__auto___22951]));

var G__22952 = (i__22337__auto___22951 + (1));
i__22337__auto___22951 = G__22952;
continue;
} else {
}
break;
}

var argseq__22344__auto__ = ((((2) < args__22343__auto__.length))?(new cljs.core.IndexedSeq(args__22343__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22344__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__22946_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__22946_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq22947){
var G__22948 = cljs.core.first.call(null,seq22947);
var seq22947__$1 = cljs.core.next.call(null,seq22947);
var G__22949 = cljs.core.first.call(null,seq22947__$1);
var seq22947__$2 = cljs.core.next.call(null,seq22947__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22948,G__22949,seq22947__$2);
});

//# sourceMappingURL=session.js.map