// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27865_27879 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27866_27880 = null;
var count__27867_27881 = (0);
var i__27868_27882 = (0);
while(true){
if((i__27868_27882 < count__27867_27881)){
var f_27883 = cljs.core._nth.call(null,chunk__27866_27880,i__27868_27882);
cljs.core.println.call(null,"  ",f_27883);

var G__27884 = seq__27865_27879;
var G__27885 = chunk__27866_27880;
var G__27886 = count__27867_27881;
var G__27887 = (i__27868_27882 + (1));
seq__27865_27879 = G__27884;
chunk__27866_27880 = G__27885;
count__27867_27881 = G__27886;
i__27868_27882 = G__27887;
continue;
} else {
var temp__4657__auto___27888 = cljs.core.seq.call(null,seq__27865_27879);
if(temp__4657__auto___27888){
var seq__27865_27889__$1 = temp__4657__auto___27888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27865_27889__$1)){
var c__22081__auto___27890 = cljs.core.chunk_first.call(null,seq__27865_27889__$1);
var G__27891 = cljs.core.chunk_rest.call(null,seq__27865_27889__$1);
var G__27892 = c__22081__auto___27890;
var G__27893 = cljs.core.count.call(null,c__22081__auto___27890);
var G__27894 = (0);
seq__27865_27879 = G__27891;
chunk__27866_27880 = G__27892;
count__27867_27881 = G__27893;
i__27868_27882 = G__27894;
continue;
} else {
var f_27895 = cljs.core.first.call(null,seq__27865_27889__$1);
cljs.core.println.call(null,"  ",f_27895);

var G__27896 = cljs.core.next.call(null,seq__27865_27889__$1);
var G__27897 = null;
var G__27898 = (0);
var G__27899 = (0);
seq__27865_27879 = G__27896;
chunk__27866_27880 = G__27897;
count__27867_27881 = G__27898;
i__27868_27882 = G__27899;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27900 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21278__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21278__auto__)){
return or__21278__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27900);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27900)))?cljs.core.second.call(null,arglists_27900):arglists_27900));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27869 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27870 = null;
var count__27871 = (0);
var i__27872 = (0);
while(true){
if((i__27872 < count__27871)){
var vec__27873 = cljs.core._nth.call(null,chunk__27870,i__27872);
var name = cljs.core.nth.call(null,vec__27873,(0),null);
var map__27874 = cljs.core.nth.call(null,vec__27873,(1),null);
var map__27874__$1 = ((((!((map__27874 == null)))?((((map__27874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27874):map__27874);
var doc = cljs.core.get.call(null,map__27874__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27874__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27901 = seq__27869;
var G__27902 = chunk__27870;
var G__27903 = count__27871;
var G__27904 = (i__27872 + (1));
seq__27869 = G__27901;
chunk__27870 = G__27902;
count__27871 = G__27903;
i__27872 = G__27904;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27869);
if(temp__4657__auto__){
var seq__27869__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27869__$1)){
var c__22081__auto__ = cljs.core.chunk_first.call(null,seq__27869__$1);
var G__27905 = cljs.core.chunk_rest.call(null,seq__27869__$1);
var G__27906 = c__22081__auto__;
var G__27907 = cljs.core.count.call(null,c__22081__auto__);
var G__27908 = (0);
seq__27869 = G__27905;
chunk__27870 = G__27906;
count__27871 = G__27907;
i__27872 = G__27908;
continue;
} else {
var vec__27876 = cljs.core.first.call(null,seq__27869__$1);
var name = cljs.core.nth.call(null,vec__27876,(0),null);
var map__27877 = cljs.core.nth.call(null,vec__27876,(1),null);
var map__27877__$1 = ((((!((map__27877 == null)))?((((map__27877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27877):map__27877);
var doc = cljs.core.get.call(null,map__27877__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27877__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27909 = cljs.core.next.call(null,seq__27869__$1);
var G__27910 = null;
var G__27911 = (0);
var G__27912 = (0);
seq__27869 = G__27909;
chunk__27870 = G__27910;
count__27871 = G__27911;
i__27872 = G__27912;
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
}
});

//# sourceMappingURL=repl.js.map