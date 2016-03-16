// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__21278__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21278__auto__){
return or__21278__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__21278__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21278__auto__)){
return or__21278__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26841_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26841_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26846 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26847 = null;
var count__26848 = (0);
var i__26849 = (0);
while(true){
if((i__26849 < count__26848)){
var n = cljs.core._nth.call(null,chunk__26847,i__26849);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26850 = seq__26846;
var G__26851 = chunk__26847;
var G__26852 = count__26848;
var G__26853 = (i__26849 + (1));
seq__26846 = G__26850;
chunk__26847 = G__26851;
count__26848 = G__26852;
i__26849 = G__26853;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26846);
if(temp__4657__auto__){
var seq__26846__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26846__$1)){
var c__22081__auto__ = cljs.core.chunk_first.call(null,seq__26846__$1);
var G__26854 = cljs.core.chunk_rest.call(null,seq__26846__$1);
var G__26855 = c__22081__auto__;
var G__26856 = cljs.core.count.call(null,c__22081__auto__);
var G__26857 = (0);
seq__26846 = G__26854;
chunk__26847 = G__26855;
count__26848 = G__26856;
i__26849 = G__26857;
continue;
} else {
var n = cljs.core.first.call(null,seq__26846__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26858 = cljs.core.next.call(null,seq__26846__$1);
var G__26859 = null;
var G__26860 = (0);
var G__26861 = (0);
seq__26846 = G__26858;
chunk__26847 = G__26859;
count__26848 = G__26860;
i__26849 = G__26861;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26900_26907 = cljs.core.seq.call(null,deps);
var chunk__26901_26908 = null;
var count__26902_26909 = (0);
var i__26903_26910 = (0);
while(true){
if((i__26903_26910 < count__26902_26909)){
var dep_26911 = cljs.core._nth.call(null,chunk__26901_26908,i__26903_26910);
topo_sort_helper_STAR_.call(null,dep_26911,(depth + (1)),state);

var G__26912 = seq__26900_26907;
var G__26913 = chunk__26901_26908;
var G__26914 = count__26902_26909;
var G__26915 = (i__26903_26910 + (1));
seq__26900_26907 = G__26912;
chunk__26901_26908 = G__26913;
count__26902_26909 = G__26914;
i__26903_26910 = G__26915;
continue;
} else {
var temp__4657__auto___26916 = cljs.core.seq.call(null,seq__26900_26907);
if(temp__4657__auto___26916){
var seq__26900_26917__$1 = temp__4657__auto___26916;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26900_26917__$1)){
var c__22081__auto___26918 = cljs.core.chunk_first.call(null,seq__26900_26917__$1);
var G__26919 = cljs.core.chunk_rest.call(null,seq__26900_26917__$1);
var G__26920 = c__22081__auto___26918;
var G__26921 = cljs.core.count.call(null,c__22081__auto___26918);
var G__26922 = (0);
seq__26900_26907 = G__26919;
chunk__26901_26908 = G__26920;
count__26902_26909 = G__26921;
i__26903_26910 = G__26922;
continue;
} else {
var dep_26923 = cljs.core.first.call(null,seq__26900_26917__$1);
topo_sort_helper_STAR_.call(null,dep_26923,(depth + (1)),state);

var G__26924 = cljs.core.next.call(null,seq__26900_26917__$1);
var G__26925 = null;
var G__26926 = (0);
var G__26927 = (0);
seq__26900_26907 = G__26924;
chunk__26901_26908 = G__26925;
count__26902_26909 = G__26926;
i__26903_26910 = G__26927;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26904){
var vec__26906 = p__26904;
var x = cljs.core.nth.call(null,vec__26906,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26906,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26906,x,xs,get_deps__$1){
return (function (p1__26862_SHARP_){
return clojure.set.difference.call(null,p1__26862_SHARP_,x);
});})(vec__26906,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26940 = cljs.core.seq.call(null,provides);
var chunk__26941 = null;
var count__26942 = (0);
var i__26943 = (0);
while(true){
if((i__26943 < count__26942)){
var prov = cljs.core._nth.call(null,chunk__26941,i__26943);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26944_26952 = cljs.core.seq.call(null,requires);
var chunk__26945_26953 = null;
var count__26946_26954 = (0);
var i__26947_26955 = (0);
while(true){
if((i__26947_26955 < count__26946_26954)){
var req_26956 = cljs.core._nth.call(null,chunk__26945_26953,i__26947_26955);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26956,prov);

var G__26957 = seq__26944_26952;
var G__26958 = chunk__26945_26953;
var G__26959 = count__26946_26954;
var G__26960 = (i__26947_26955 + (1));
seq__26944_26952 = G__26957;
chunk__26945_26953 = G__26958;
count__26946_26954 = G__26959;
i__26947_26955 = G__26960;
continue;
} else {
var temp__4657__auto___26961 = cljs.core.seq.call(null,seq__26944_26952);
if(temp__4657__auto___26961){
var seq__26944_26962__$1 = temp__4657__auto___26961;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26944_26962__$1)){
var c__22081__auto___26963 = cljs.core.chunk_first.call(null,seq__26944_26962__$1);
var G__26964 = cljs.core.chunk_rest.call(null,seq__26944_26962__$1);
var G__26965 = c__22081__auto___26963;
var G__26966 = cljs.core.count.call(null,c__22081__auto___26963);
var G__26967 = (0);
seq__26944_26952 = G__26964;
chunk__26945_26953 = G__26965;
count__26946_26954 = G__26966;
i__26947_26955 = G__26967;
continue;
} else {
var req_26968 = cljs.core.first.call(null,seq__26944_26962__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26968,prov);

var G__26969 = cljs.core.next.call(null,seq__26944_26962__$1);
var G__26970 = null;
var G__26971 = (0);
var G__26972 = (0);
seq__26944_26952 = G__26969;
chunk__26945_26953 = G__26970;
count__26946_26954 = G__26971;
i__26947_26955 = G__26972;
continue;
}
} else {
}
}
break;
}

var G__26973 = seq__26940;
var G__26974 = chunk__26941;
var G__26975 = count__26942;
var G__26976 = (i__26943 + (1));
seq__26940 = G__26973;
chunk__26941 = G__26974;
count__26942 = G__26975;
i__26943 = G__26976;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26940);
if(temp__4657__auto__){
var seq__26940__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26940__$1)){
var c__22081__auto__ = cljs.core.chunk_first.call(null,seq__26940__$1);
var G__26977 = cljs.core.chunk_rest.call(null,seq__26940__$1);
var G__26978 = c__22081__auto__;
var G__26979 = cljs.core.count.call(null,c__22081__auto__);
var G__26980 = (0);
seq__26940 = G__26977;
chunk__26941 = G__26978;
count__26942 = G__26979;
i__26943 = G__26980;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26940__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26948_26981 = cljs.core.seq.call(null,requires);
var chunk__26949_26982 = null;
var count__26950_26983 = (0);
var i__26951_26984 = (0);
while(true){
if((i__26951_26984 < count__26950_26983)){
var req_26985 = cljs.core._nth.call(null,chunk__26949_26982,i__26951_26984);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26985,prov);

var G__26986 = seq__26948_26981;
var G__26987 = chunk__26949_26982;
var G__26988 = count__26950_26983;
var G__26989 = (i__26951_26984 + (1));
seq__26948_26981 = G__26986;
chunk__26949_26982 = G__26987;
count__26950_26983 = G__26988;
i__26951_26984 = G__26989;
continue;
} else {
var temp__4657__auto___26990__$1 = cljs.core.seq.call(null,seq__26948_26981);
if(temp__4657__auto___26990__$1){
var seq__26948_26991__$1 = temp__4657__auto___26990__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26948_26991__$1)){
var c__22081__auto___26992 = cljs.core.chunk_first.call(null,seq__26948_26991__$1);
var G__26993 = cljs.core.chunk_rest.call(null,seq__26948_26991__$1);
var G__26994 = c__22081__auto___26992;
var G__26995 = cljs.core.count.call(null,c__22081__auto___26992);
var G__26996 = (0);
seq__26948_26981 = G__26993;
chunk__26949_26982 = G__26994;
count__26950_26983 = G__26995;
i__26951_26984 = G__26996;
continue;
} else {
var req_26997 = cljs.core.first.call(null,seq__26948_26991__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26997,prov);

var G__26998 = cljs.core.next.call(null,seq__26948_26991__$1);
var G__26999 = null;
var G__27000 = (0);
var G__27001 = (0);
seq__26948_26981 = G__26998;
chunk__26949_26982 = G__26999;
count__26950_26983 = G__27000;
i__26951_26984 = G__27001;
continue;
}
} else {
}
}
break;
}

var G__27002 = cljs.core.next.call(null,seq__26940__$1);
var G__27003 = null;
var G__27004 = (0);
var G__27005 = (0);
seq__26940 = G__27002;
chunk__26941 = G__27003;
count__26942 = G__27004;
i__26943 = G__27005;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27010_27014 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27011_27015 = null;
var count__27012_27016 = (0);
var i__27013_27017 = (0);
while(true){
if((i__27013_27017 < count__27012_27016)){
var ns_27018 = cljs.core._nth.call(null,chunk__27011_27015,i__27013_27017);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27018);

var G__27019 = seq__27010_27014;
var G__27020 = chunk__27011_27015;
var G__27021 = count__27012_27016;
var G__27022 = (i__27013_27017 + (1));
seq__27010_27014 = G__27019;
chunk__27011_27015 = G__27020;
count__27012_27016 = G__27021;
i__27013_27017 = G__27022;
continue;
} else {
var temp__4657__auto___27023 = cljs.core.seq.call(null,seq__27010_27014);
if(temp__4657__auto___27023){
var seq__27010_27024__$1 = temp__4657__auto___27023;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27010_27024__$1)){
var c__22081__auto___27025 = cljs.core.chunk_first.call(null,seq__27010_27024__$1);
var G__27026 = cljs.core.chunk_rest.call(null,seq__27010_27024__$1);
var G__27027 = c__22081__auto___27025;
var G__27028 = cljs.core.count.call(null,c__22081__auto___27025);
var G__27029 = (0);
seq__27010_27014 = G__27026;
chunk__27011_27015 = G__27027;
count__27012_27016 = G__27028;
i__27013_27017 = G__27029;
continue;
} else {
var ns_27030 = cljs.core.first.call(null,seq__27010_27024__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27030);

var G__27031 = cljs.core.next.call(null,seq__27010_27024__$1);
var G__27032 = null;
var G__27033 = (0);
var G__27034 = (0);
seq__27010_27014 = G__27031;
chunk__27011_27015 = G__27032;
count__27012_27016 = G__27033;
i__27013_27017 = G__27034;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__21278__auto__ = goog.require__;
if(cljs.core.truth_(or__21278__auto__)){
return or__21278__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27035__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27035 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27036__i = 0, G__27036__a = new Array(arguments.length -  0);
while (G__27036__i < G__27036__a.length) {G__27036__a[G__27036__i] = arguments[G__27036__i + 0]; ++G__27036__i;}
  args = new cljs.core.IndexedSeq(G__27036__a,0);
} 
return G__27035__delegate.call(this,args);};
G__27035.cljs$lang$maxFixedArity = 0;
G__27035.cljs$lang$applyTo = (function (arglist__27037){
var args = cljs.core.seq(arglist__27037);
return G__27035__delegate(args);
});
G__27035.cljs$core$IFn$_invoke$arity$variadic = G__27035__delegate;
return G__27035;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27039 = cljs.core._EQ_;
var expr__27040 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27039.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27040))){
var path_parts = ((function (pred__27039,expr__27040){
return (function (p1__27038_SHARP_){
return clojure.string.split.call(null,p1__27038_SHARP_,/[\/\\]/);
});})(pred__27039,expr__27040))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27039,expr__27040){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27042){if((e27042 instanceof Error)){
var e = e27042;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27042;

}
}})());
});
;})(path_parts,sep,root,pred__27039,expr__27040))
} else {
if(cljs.core.truth_(pred__27039.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27040))){
return ((function (pred__27039,expr__27040){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27039,expr__27040){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27039,expr__27040))
);

return deferred.addErrback(((function (deferred,pred__27039,expr__27040){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27039,expr__27040))
);
});
;})(pred__27039,expr__27040))
} else {
return ((function (pred__27039,expr__27040){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27039,expr__27040))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27043,callback){
var map__27046 = p__27043;
var map__27046__$1 = ((((!((map__27046 == null)))?((((map__27046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27046):map__27046);
var file_msg = map__27046__$1;
var request_url = cljs.core.get.call(null,map__27046__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27046,map__27046__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27046,map__27046__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto__){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto__){
return (function (state_27070){
var state_val_27071 = (state_27070[(1)]);
if((state_val_27071 === (7))){
var inst_27066 = (state_27070[(2)]);
var state_27070__$1 = state_27070;
var statearr_27072_27092 = state_27070__$1;
(statearr_27072_27092[(2)] = inst_27066);

(statearr_27072_27092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (1))){
var state_27070__$1 = state_27070;
var statearr_27073_27093 = state_27070__$1;
(statearr_27073_27093[(2)] = null);

(statearr_27073_27093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (4))){
var inst_27050 = (state_27070[(7)]);
var inst_27050__$1 = (state_27070[(2)]);
var state_27070__$1 = (function (){var statearr_27074 = state_27070;
(statearr_27074[(7)] = inst_27050__$1);

return statearr_27074;
})();
if(cljs.core.truth_(inst_27050__$1)){
var statearr_27075_27094 = state_27070__$1;
(statearr_27075_27094[(1)] = (5));

} else {
var statearr_27076_27095 = state_27070__$1;
(statearr_27076_27095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (6))){
var state_27070__$1 = state_27070;
var statearr_27077_27096 = state_27070__$1;
(statearr_27077_27096[(2)] = null);

(statearr_27077_27096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (3))){
var inst_27068 = (state_27070[(2)]);
var state_27070__$1 = state_27070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27070__$1,inst_27068);
} else {
if((state_val_27071 === (2))){
var state_27070__$1 = state_27070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27070__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27071 === (11))){
var inst_27062 = (state_27070[(2)]);
var state_27070__$1 = (function (){var statearr_27078 = state_27070;
(statearr_27078[(8)] = inst_27062);

return statearr_27078;
})();
var statearr_27079_27097 = state_27070__$1;
(statearr_27079_27097[(2)] = null);

(statearr_27079_27097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (9))){
var inst_27056 = (state_27070[(9)]);
var inst_27054 = (state_27070[(10)]);
var inst_27058 = inst_27056.call(null,inst_27054);
var state_27070__$1 = state_27070;
var statearr_27080_27098 = state_27070__$1;
(statearr_27080_27098[(2)] = inst_27058);

(statearr_27080_27098[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (5))){
var inst_27050 = (state_27070[(7)]);
var inst_27052 = figwheel.client.file_reloading.blocking_load.call(null,inst_27050);
var state_27070__$1 = state_27070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27070__$1,(8),inst_27052);
} else {
if((state_val_27071 === (10))){
var inst_27054 = (state_27070[(10)]);
var inst_27060 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27054);
var state_27070__$1 = state_27070;
var statearr_27081_27099 = state_27070__$1;
(statearr_27081_27099[(2)] = inst_27060);

(statearr_27081_27099[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (8))){
var inst_27050 = (state_27070[(7)]);
var inst_27056 = (state_27070[(9)]);
var inst_27054 = (state_27070[(2)]);
var inst_27055 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27056__$1 = cljs.core.get.call(null,inst_27055,inst_27050);
var state_27070__$1 = (function (){var statearr_27082 = state_27070;
(statearr_27082[(9)] = inst_27056__$1);

(statearr_27082[(10)] = inst_27054);

return statearr_27082;
})();
if(cljs.core.truth_(inst_27056__$1)){
var statearr_27083_27100 = state_27070__$1;
(statearr_27083_27100[(1)] = (9));

} else {
var statearr_27084_27101 = state_27070__$1;
(statearr_27084_27101[(1)] = (10));

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
});})(c__23947__auto__))
;
return ((function (switch__23835__auto__,c__23947__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23836__auto__ = null;
var figwheel$client$file_reloading$state_machine__23836__auto____0 = (function (){
var statearr_27088 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27088[(0)] = figwheel$client$file_reloading$state_machine__23836__auto__);

(statearr_27088[(1)] = (1));

return statearr_27088;
});
var figwheel$client$file_reloading$state_machine__23836__auto____1 = (function (state_27070){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_27070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e27089){if((e27089 instanceof Object)){
var ex__23839__auto__ = e27089;
var statearr_27090_27102 = state_27070;
(statearr_27090_27102[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27103 = state_27070;
state_27070 = G__27103;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23836__auto__ = function(state_27070){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23836__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23836__auto____1.call(this,state_27070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23836__auto____0;
figwheel$client$file_reloading$state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23836__auto____1;
return figwheel$client$file_reloading$state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto__))
})();
var state__23949__auto__ = (function (){var statearr_27091 = f__23948__auto__.call(null);
(statearr_27091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto__);

return statearr_27091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto__))
);

return c__23947__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27104,callback){
var map__27107 = p__27104;
var map__27107__$1 = ((((!((map__27107 == null)))?((((map__27107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27107):map__27107);
var file_msg = map__27107__$1;
var namespace = cljs.core.get.call(null,map__27107__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27107,map__27107__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27107,map__27107__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27109){
var map__27112 = p__27109;
var map__27112__$1 = ((((!((map__27112 == null)))?((((map__27112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27112):map__27112);
var file_msg = map__27112__$1;
var namespace = cljs.core.get.call(null,map__27112__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21266__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21266__auto__){
var or__21278__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21278__auto__)){
return or__21278__auto__;
} else {
var or__21278__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21278__auto____$1)){
return or__21278__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21266__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27114,callback){
var map__27117 = p__27114;
var map__27117__$1 = ((((!((map__27117 == null)))?((((map__27117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27117):map__27117);
var file_msg = map__27117__$1;
var request_url = cljs.core.get.call(null,map__27117__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27117__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23947__auto___27205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto___27205,out){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto___27205,out){
return (function (state_27187){
var state_val_27188 = (state_27187[(1)]);
if((state_val_27188 === (1))){
var inst_27165 = cljs.core.nth.call(null,files,(0),null);
var inst_27166 = cljs.core.nthnext.call(null,files,(1));
var inst_27167 = files;
var state_27187__$1 = (function (){var statearr_27189 = state_27187;
(statearr_27189[(7)] = inst_27167);

(statearr_27189[(8)] = inst_27166);

(statearr_27189[(9)] = inst_27165);

return statearr_27189;
})();
var statearr_27190_27206 = state_27187__$1;
(statearr_27190_27206[(2)] = null);

(statearr_27190_27206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (2))){
var inst_27167 = (state_27187[(7)]);
var inst_27170 = (state_27187[(10)]);
var inst_27170__$1 = cljs.core.nth.call(null,inst_27167,(0),null);
var inst_27171 = cljs.core.nthnext.call(null,inst_27167,(1));
var inst_27172 = (inst_27170__$1 == null);
var inst_27173 = cljs.core.not.call(null,inst_27172);
var state_27187__$1 = (function (){var statearr_27191 = state_27187;
(statearr_27191[(11)] = inst_27171);

(statearr_27191[(10)] = inst_27170__$1);

return statearr_27191;
})();
if(inst_27173){
var statearr_27192_27207 = state_27187__$1;
(statearr_27192_27207[(1)] = (4));

} else {
var statearr_27193_27208 = state_27187__$1;
(statearr_27193_27208[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (3))){
var inst_27185 = (state_27187[(2)]);
var state_27187__$1 = state_27187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27187__$1,inst_27185);
} else {
if((state_val_27188 === (4))){
var inst_27170 = (state_27187[(10)]);
var inst_27175 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27170);
var state_27187__$1 = state_27187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27187__$1,(7),inst_27175);
} else {
if((state_val_27188 === (5))){
var inst_27181 = cljs.core.async.close_BANG_.call(null,out);
var state_27187__$1 = state_27187;
var statearr_27194_27209 = state_27187__$1;
(statearr_27194_27209[(2)] = inst_27181);

(statearr_27194_27209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (6))){
var inst_27183 = (state_27187[(2)]);
var state_27187__$1 = state_27187;
var statearr_27195_27210 = state_27187__$1;
(statearr_27195_27210[(2)] = inst_27183);

(statearr_27195_27210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27188 === (7))){
var inst_27171 = (state_27187[(11)]);
var inst_27177 = (state_27187[(2)]);
var inst_27178 = cljs.core.async.put_BANG_.call(null,out,inst_27177);
var inst_27167 = inst_27171;
var state_27187__$1 = (function (){var statearr_27196 = state_27187;
(statearr_27196[(7)] = inst_27167);

(statearr_27196[(12)] = inst_27178);

return statearr_27196;
})();
var statearr_27197_27211 = state_27187__$1;
(statearr_27197_27211[(2)] = null);

(statearr_27197_27211[(1)] = (2));


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
});})(c__23947__auto___27205,out))
;
return ((function (switch__23835__auto__,c__23947__auto___27205,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23836__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23836__auto____0 = (function (){
var statearr_27201 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27201[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23836__auto__);

(statearr_27201[(1)] = (1));

return statearr_27201;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23836__auto____1 = (function (state_27187){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_27187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e27202){if((e27202 instanceof Object)){
var ex__23839__auto__ = e27202;
var statearr_27203_27212 = state_27187;
(statearr_27203_27212[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27213 = state_27187;
state_27187 = G__27213;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23836__auto__ = function(state_27187){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23836__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23836__auto____1.call(this,state_27187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23836__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23836__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto___27205,out))
})();
var state__23949__auto__ = (function (){var statearr_27204 = f__23948__auto__.call(null);
(statearr_27204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto___27205);

return statearr_27204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto___27205,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27214,opts){
var map__27218 = p__27214;
var map__27218__$1 = ((((!((map__27218 == null)))?((((map__27218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27218):map__27218);
var eval_body__$1 = cljs.core.get.call(null,map__27218__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27218__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21266__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21266__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21266__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27220){var e = e27220;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27221_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27221_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27226){
var vec__27227 = p__27226;
var k = cljs.core.nth.call(null,vec__27227,(0),null);
var v = cljs.core.nth.call(null,vec__27227,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27228){
var vec__27229 = p__27228;
var k = cljs.core.nth.call(null,vec__27229,(0),null);
var v = cljs.core.nth.call(null,vec__27229,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27233,p__27234){
var map__27481 = p__27233;
var map__27481__$1 = ((((!((map__27481 == null)))?((((map__27481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27481):map__27481);
var opts = map__27481__$1;
var before_jsload = cljs.core.get.call(null,map__27481__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27481__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27481__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27482 = p__27234;
var map__27482__$1 = ((((!((map__27482 == null)))?((((map__27482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27482):map__27482);
var msg = map__27482__$1;
var files = cljs.core.get.call(null,map__27482__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27482__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27482__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto__,map__27481,map__27481__$1,opts,before_jsload,on_jsload,reload_dependents,map__27482,map__27482__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto__,map__27481,map__27481__$1,opts,before_jsload,on_jsload,reload_dependents,map__27482,map__27482__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27635){
var state_val_27636 = (state_27635[(1)]);
if((state_val_27636 === (7))){
var inst_27498 = (state_27635[(7)]);
var inst_27497 = (state_27635[(8)]);
var inst_27499 = (state_27635[(9)]);
var inst_27496 = (state_27635[(10)]);
var inst_27504 = cljs.core._nth.call(null,inst_27497,inst_27499);
var inst_27505 = figwheel.client.file_reloading.eval_body.call(null,inst_27504,opts);
var inst_27506 = (inst_27499 + (1));
var tmp27637 = inst_27498;
var tmp27638 = inst_27497;
var tmp27639 = inst_27496;
var inst_27496__$1 = tmp27639;
var inst_27497__$1 = tmp27638;
var inst_27498__$1 = tmp27637;
var inst_27499__$1 = inst_27506;
var state_27635__$1 = (function (){var statearr_27640 = state_27635;
(statearr_27640[(7)] = inst_27498__$1);

(statearr_27640[(8)] = inst_27497__$1);

(statearr_27640[(9)] = inst_27499__$1);

(statearr_27640[(10)] = inst_27496__$1);

(statearr_27640[(11)] = inst_27505);

return statearr_27640;
})();
var statearr_27641_27727 = state_27635__$1;
(statearr_27641_27727[(2)] = null);

(statearr_27641_27727[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (20))){
var inst_27539 = (state_27635[(12)]);
var inst_27547 = figwheel.client.file_reloading.sort_files.call(null,inst_27539);
var state_27635__$1 = state_27635;
var statearr_27642_27728 = state_27635__$1;
(statearr_27642_27728[(2)] = inst_27547);

(statearr_27642_27728[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (27))){
var state_27635__$1 = state_27635;
var statearr_27643_27729 = state_27635__$1;
(statearr_27643_27729[(2)] = null);

(statearr_27643_27729[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (1))){
var inst_27488 = (state_27635[(13)]);
var inst_27485 = before_jsload.call(null,files);
var inst_27486 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27487 = (function (){return ((function (inst_27488,inst_27485,inst_27486,state_val_27636,c__23947__auto__,map__27481,map__27481__$1,opts,before_jsload,on_jsload,reload_dependents,map__27482,map__27482__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27230_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27230_SHARP_);
});
;})(inst_27488,inst_27485,inst_27486,state_val_27636,c__23947__auto__,map__27481,map__27481__$1,opts,before_jsload,on_jsload,reload_dependents,map__27482,map__27482__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27488__$1 = cljs.core.filter.call(null,inst_27487,files);
var inst_27489 = cljs.core.not_empty.call(null,inst_27488__$1);
var state_27635__$1 = (function (){var statearr_27644 = state_27635;
(statearr_27644[(14)] = inst_27485);

(statearr_27644[(13)] = inst_27488__$1);

(statearr_27644[(15)] = inst_27486);

return statearr_27644;
})();
if(cljs.core.truth_(inst_27489)){
var statearr_27645_27730 = state_27635__$1;
(statearr_27645_27730[(1)] = (2));

} else {
var statearr_27646_27731 = state_27635__$1;
(statearr_27646_27731[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (24))){
var state_27635__$1 = state_27635;
var statearr_27647_27732 = state_27635__$1;
(statearr_27647_27732[(2)] = null);

(statearr_27647_27732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (39))){
var inst_27589 = (state_27635[(16)]);
var state_27635__$1 = state_27635;
var statearr_27648_27733 = state_27635__$1;
(statearr_27648_27733[(2)] = inst_27589);

(statearr_27648_27733[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (46))){
var inst_27630 = (state_27635[(2)]);
var state_27635__$1 = state_27635;
var statearr_27649_27734 = state_27635__$1;
(statearr_27649_27734[(2)] = inst_27630);

(statearr_27649_27734[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (4))){
var inst_27533 = (state_27635[(2)]);
var inst_27534 = cljs.core.List.EMPTY;
var inst_27535 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27534);
var inst_27536 = (function (){return ((function (inst_27533,inst_27534,inst_27535,state_val_27636,c__23947__auto__,map__27481,map__27481__$1,opts,before_jsload,on_jsload,reload_dependents,map__27482,map__27482__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27231_SHARP_){
var and__21266__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27231_SHARP_);
if(cljs.core.truth_(and__21266__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27231_SHARP_));
} else {
return and__21266__auto__;
}
});
;})(inst_27533,inst_27534,inst_27535,state_val_27636,c__23947__auto__,map__27481,map__27481__$1,opts,before_jsload,on_jsload,reload_dependents,map__27482,map__27482__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27537 = cljs.core.filter.call(null,inst_27536,files);
var inst_27538 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27539 = cljs.core.concat.call(null,inst_27537,inst_27538);
var state_27635__$1 = (function (){var statearr_27650 = state_27635;
(statearr_27650[(17)] = inst_27535);

(statearr_27650[(18)] = inst_27533);

(statearr_27650[(12)] = inst_27539);

return statearr_27650;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27651_27735 = state_27635__$1;
(statearr_27651_27735[(1)] = (16));

} else {
var statearr_27652_27736 = state_27635__$1;
(statearr_27652_27736[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (15))){
var inst_27523 = (state_27635[(2)]);
var state_27635__$1 = state_27635;
var statearr_27653_27737 = state_27635__$1;
(statearr_27653_27737[(2)] = inst_27523);

(statearr_27653_27737[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (21))){
var inst_27549 = (state_27635[(19)]);
var inst_27549__$1 = (state_27635[(2)]);
var inst_27550 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27549__$1);
var state_27635__$1 = (function (){var statearr_27654 = state_27635;
(statearr_27654[(19)] = inst_27549__$1);

return statearr_27654;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27635__$1,(22),inst_27550);
} else {
if((state_val_27636 === (31))){
var inst_27633 = (state_27635[(2)]);
var state_27635__$1 = state_27635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27635__$1,inst_27633);
} else {
if((state_val_27636 === (32))){
var inst_27589 = (state_27635[(16)]);
var inst_27594 = inst_27589.cljs$lang$protocol_mask$partition0$;
var inst_27595 = (inst_27594 & (64));
var inst_27596 = inst_27589.cljs$core$ISeq$;
var inst_27597 = (inst_27595) || (inst_27596);
var state_27635__$1 = state_27635;
if(cljs.core.truth_(inst_27597)){
var statearr_27655_27738 = state_27635__$1;
(statearr_27655_27738[(1)] = (35));

} else {
var statearr_27656_27739 = state_27635__$1;
(statearr_27656_27739[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (40))){
var inst_27610 = (state_27635[(20)]);
var inst_27609 = (state_27635[(2)]);
var inst_27610__$1 = cljs.core.get.call(null,inst_27609,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27611 = cljs.core.get.call(null,inst_27609,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27612 = cljs.core.not_empty.call(null,inst_27610__$1);
var state_27635__$1 = (function (){var statearr_27657 = state_27635;
(statearr_27657[(20)] = inst_27610__$1);

(statearr_27657[(21)] = inst_27611);

return statearr_27657;
})();
if(cljs.core.truth_(inst_27612)){
var statearr_27658_27740 = state_27635__$1;
(statearr_27658_27740[(1)] = (41));

} else {
var statearr_27659_27741 = state_27635__$1;
(statearr_27659_27741[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (33))){
var state_27635__$1 = state_27635;
var statearr_27660_27742 = state_27635__$1;
(statearr_27660_27742[(2)] = false);

(statearr_27660_27742[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (13))){
var inst_27509 = (state_27635[(22)]);
var inst_27513 = cljs.core.chunk_first.call(null,inst_27509);
var inst_27514 = cljs.core.chunk_rest.call(null,inst_27509);
var inst_27515 = cljs.core.count.call(null,inst_27513);
var inst_27496 = inst_27514;
var inst_27497 = inst_27513;
var inst_27498 = inst_27515;
var inst_27499 = (0);
var state_27635__$1 = (function (){var statearr_27661 = state_27635;
(statearr_27661[(7)] = inst_27498);

(statearr_27661[(8)] = inst_27497);

(statearr_27661[(9)] = inst_27499);

(statearr_27661[(10)] = inst_27496);

return statearr_27661;
})();
var statearr_27662_27743 = state_27635__$1;
(statearr_27662_27743[(2)] = null);

(statearr_27662_27743[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (22))){
var inst_27549 = (state_27635[(19)]);
var inst_27552 = (state_27635[(23)]);
var inst_27557 = (state_27635[(24)]);
var inst_27553 = (state_27635[(25)]);
var inst_27552__$1 = (state_27635[(2)]);
var inst_27553__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27552__$1);
var inst_27554 = (function (){var all_files = inst_27549;
var res_SINGLEQUOTE_ = inst_27552__$1;
var res = inst_27553__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27549,inst_27552,inst_27557,inst_27553,inst_27552__$1,inst_27553__$1,state_val_27636,c__23947__auto__,map__27481,map__27481__$1,opts,before_jsload,on_jsload,reload_dependents,map__27482,map__27482__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27232_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27232_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27549,inst_27552,inst_27557,inst_27553,inst_27552__$1,inst_27553__$1,state_val_27636,c__23947__auto__,map__27481,map__27481__$1,opts,before_jsload,on_jsload,reload_dependents,map__27482,map__27482__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27555 = cljs.core.filter.call(null,inst_27554,inst_27552__$1);
var inst_27556 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27557__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27556);
var inst_27558 = cljs.core.not_empty.call(null,inst_27557__$1);
var state_27635__$1 = (function (){var statearr_27663 = state_27635;
(statearr_27663[(23)] = inst_27552__$1);

(statearr_27663[(26)] = inst_27555);

(statearr_27663[(24)] = inst_27557__$1);

(statearr_27663[(25)] = inst_27553__$1);

return statearr_27663;
})();
if(cljs.core.truth_(inst_27558)){
var statearr_27664_27744 = state_27635__$1;
(statearr_27664_27744[(1)] = (23));

} else {
var statearr_27665_27745 = state_27635__$1;
(statearr_27665_27745[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (36))){
var state_27635__$1 = state_27635;
var statearr_27666_27746 = state_27635__$1;
(statearr_27666_27746[(2)] = false);

(statearr_27666_27746[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (41))){
var inst_27610 = (state_27635[(20)]);
var inst_27614 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27615 = cljs.core.map.call(null,inst_27614,inst_27610);
var inst_27616 = cljs.core.pr_str.call(null,inst_27615);
var inst_27617 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27616)].join('');
var inst_27618 = figwheel.client.utils.log.call(null,inst_27617);
var state_27635__$1 = state_27635;
var statearr_27667_27747 = state_27635__$1;
(statearr_27667_27747[(2)] = inst_27618);

(statearr_27667_27747[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (43))){
var inst_27611 = (state_27635[(21)]);
var inst_27621 = (state_27635[(2)]);
var inst_27622 = cljs.core.not_empty.call(null,inst_27611);
var state_27635__$1 = (function (){var statearr_27668 = state_27635;
(statearr_27668[(27)] = inst_27621);

return statearr_27668;
})();
if(cljs.core.truth_(inst_27622)){
var statearr_27669_27748 = state_27635__$1;
(statearr_27669_27748[(1)] = (44));

} else {
var statearr_27670_27749 = state_27635__$1;
(statearr_27670_27749[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (29))){
var inst_27549 = (state_27635[(19)]);
var inst_27552 = (state_27635[(23)]);
var inst_27589 = (state_27635[(16)]);
var inst_27555 = (state_27635[(26)]);
var inst_27557 = (state_27635[(24)]);
var inst_27553 = (state_27635[(25)]);
var inst_27585 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27588 = (function (){var all_files = inst_27549;
var res_SINGLEQUOTE_ = inst_27552;
var res = inst_27553;
var files_not_loaded = inst_27555;
var dependencies_that_loaded = inst_27557;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27549,inst_27552,inst_27589,inst_27555,inst_27557,inst_27553,inst_27585,state_val_27636,c__23947__auto__,map__27481,map__27481__$1,opts,before_jsload,on_jsload,reload_dependents,map__27482,map__27482__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27587){
var map__27671 = p__27587;
var map__27671__$1 = ((((!((map__27671 == null)))?((((map__27671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27671):map__27671);
var namespace = cljs.core.get.call(null,map__27671__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27549,inst_27552,inst_27589,inst_27555,inst_27557,inst_27553,inst_27585,state_val_27636,c__23947__auto__,map__27481,map__27481__$1,opts,before_jsload,on_jsload,reload_dependents,map__27482,map__27482__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27589__$1 = cljs.core.group_by.call(null,inst_27588,inst_27555);
var inst_27591 = (inst_27589__$1 == null);
var inst_27592 = cljs.core.not.call(null,inst_27591);
var state_27635__$1 = (function (){var statearr_27673 = state_27635;
(statearr_27673[(16)] = inst_27589__$1);

(statearr_27673[(28)] = inst_27585);

return statearr_27673;
})();
if(inst_27592){
var statearr_27674_27750 = state_27635__$1;
(statearr_27674_27750[(1)] = (32));

} else {
var statearr_27675_27751 = state_27635__$1;
(statearr_27675_27751[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (44))){
var inst_27611 = (state_27635[(21)]);
var inst_27624 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27611);
var inst_27625 = cljs.core.pr_str.call(null,inst_27624);
var inst_27626 = [cljs.core.str("not required: "),cljs.core.str(inst_27625)].join('');
var inst_27627 = figwheel.client.utils.log.call(null,inst_27626);
var state_27635__$1 = state_27635;
var statearr_27676_27752 = state_27635__$1;
(statearr_27676_27752[(2)] = inst_27627);

(statearr_27676_27752[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (6))){
var inst_27530 = (state_27635[(2)]);
var state_27635__$1 = state_27635;
var statearr_27677_27753 = state_27635__$1;
(statearr_27677_27753[(2)] = inst_27530);

(statearr_27677_27753[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (28))){
var inst_27555 = (state_27635[(26)]);
var inst_27582 = (state_27635[(2)]);
var inst_27583 = cljs.core.not_empty.call(null,inst_27555);
var state_27635__$1 = (function (){var statearr_27678 = state_27635;
(statearr_27678[(29)] = inst_27582);

return statearr_27678;
})();
if(cljs.core.truth_(inst_27583)){
var statearr_27679_27754 = state_27635__$1;
(statearr_27679_27754[(1)] = (29));

} else {
var statearr_27680_27755 = state_27635__$1;
(statearr_27680_27755[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (25))){
var inst_27553 = (state_27635[(25)]);
var inst_27569 = (state_27635[(2)]);
var inst_27570 = cljs.core.not_empty.call(null,inst_27553);
var state_27635__$1 = (function (){var statearr_27681 = state_27635;
(statearr_27681[(30)] = inst_27569);

return statearr_27681;
})();
if(cljs.core.truth_(inst_27570)){
var statearr_27682_27756 = state_27635__$1;
(statearr_27682_27756[(1)] = (26));

} else {
var statearr_27683_27757 = state_27635__$1;
(statearr_27683_27757[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (34))){
var inst_27604 = (state_27635[(2)]);
var state_27635__$1 = state_27635;
if(cljs.core.truth_(inst_27604)){
var statearr_27684_27758 = state_27635__$1;
(statearr_27684_27758[(1)] = (38));

} else {
var statearr_27685_27759 = state_27635__$1;
(statearr_27685_27759[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (17))){
var state_27635__$1 = state_27635;
var statearr_27686_27760 = state_27635__$1;
(statearr_27686_27760[(2)] = recompile_dependents);

(statearr_27686_27760[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (3))){
var state_27635__$1 = state_27635;
var statearr_27687_27761 = state_27635__$1;
(statearr_27687_27761[(2)] = null);

(statearr_27687_27761[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (12))){
var inst_27526 = (state_27635[(2)]);
var state_27635__$1 = state_27635;
var statearr_27688_27762 = state_27635__$1;
(statearr_27688_27762[(2)] = inst_27526);

(statearr_27688_27762[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (2))){
var inst_27488 = (state_27635[(13)]);
var inst_27495 = cljs.core.seq.call(null,inst_27488);
var inst_27496 = inst_27495;
var inst_27497 = null;
var inst_27498 = (0);
var inst_27499 = (0);
var state_27635__$1 = (function (){var statearr_27689 = state_27635;
(statearr_27689[(7)] = inst_27498);

(statearr_27689[(8)] = inst_27497);

(statearr_27689[(9)] = inst_27499);

(statearr_27689[(10)] = inst_27496);

return statearr_27689;
})();
var statearr_27690_27763 = state_27635__$1;
(statearr_27690_27763[(2)] = null);

(statearr_27690_27763[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (23))){
var inst_27549 = (state_27635[(19)]);
var inst_27552 = (state_27635[(23)]);
var inst_27555 = (state_27635[(26)]);
var inst_27557 = (state_27635[(24)]);
var inst_27553 = (state_27635[(25)]);
var inst_27560 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27562 = (function (){var all_files = inst_27549;
var res_SINGLEQUOTE_ = inst_27552;
var res = inst_27553;
var files_not_loaded = inst_27555;
var dependencies_that_loaded = inst_27557;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27549,inst_27552,inst_27555,inst_27557,inst_27553,inst_27560,state_val_27636,c__23947__auto__,map__27481,map__27481__$1,opts,before_jsload,on_jsload,reload_dependents,map__27482,map__27482__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27561){
var map__27691 = p__27561;
var map__27691__$1 = ((((!((map__27691 == null)))?((((map__27691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27691):map__27691);
var request_url = cljs.core.get.call(null,map__27691__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27549,inst_27552,inst_27555,inst_27557,inst_27553,inst_27560,state_val_27636,c__23947__auto__,map__27481,map__27481__$1,opts,before_jsload,on_jsload,reload_dependents,map__27482,map__27482__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27563 = cljs.core.reverse.call(null,inst_27557);
var inst_27564 = cljs.core.map.call(null,inst_27562,inst_27563);
var inst_27565 = cljs.core.pr_str.call(null,inst_27564);
var inst_27566 = figwheel.client.utils.log.call(null,inst_27565);
var state_27635__$1 = (function (){var statearr_27693 = state_27635;
(statearr_27693[(31)] = inst_27560);

return statearr_27693;
})();
var statearr_27694_27764 = state_27635__$1;
(statearr_27694_27764[(2)] = inst_27566);

(statearr_27694_27764[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (35))){
var state_27635__$1 = state_27635;
var statearr_27695_27765 = state_27635__$1;
(statearr_27695_27765[(2)] = true);

(statearr_27695_27765[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (19))){
var inst_27539 = (state_27635[(12)]);
var inst_27545 = figwheel.client.file_reloading.expand_files.call(null,inst_27539);
var state_27635__$1 = state_27635;
var statearr_27696_27766 = state_27635__$1;
(statearr_27696_27766[(2)] = inst_27545);

(statearr_27696_27766[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (11))){
var state_27635__$1 = state_27635;
var statearr_27697_27767 = state_27635__$1;
(statearr_27697_27767[(2)] = null);

(statearr_27697_27767[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (9))){
var inst_27528 = (state_27635[(2)]);
var state_27635__$1 = state_27635;
var statearr_27698_27768 = state_27635__$1;
(statearr_27698_27768[(2)] = inst_27528);

(statearr_27698_27768[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (5))){
var inst_27498 = (state_27635[(7)]);
var inst_27499 = (state_27635[(9)]);
var inst_27501 = (inst_27499 < inst_27498);
var inst_27502 = inst_27501;
var state_27635__$1 = state_27635;
if(cljs.core.truth_(inst_27502)){
var statearr_27699_27769 = state_27635__$1;
(statearr_27699_27769[(1)] = (7));

} else {
var statearr_27700_27770 = state_27635__$1;
(statearr_27700_27770[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (14))){
var inst_27509 = (state_27635[(22)]);
var inst_27518 = cljs.core.first.call(null,inst_27509);
var inst_27519 = figwheel.client.file_reloading.eval_body.call(null,inst_27518,opts);
var inst_27520 = cljs.core.next.call(null,inst_27509);
var inst_27496 = inst_27520;
var inst_27497 = null;
var inst_27498 = (0);
var inst_27499 = (0);
var state_27635__$1 = (function (){var statearr_27701 = state_27635;
(statearr_27701[(7)] = inst_27498);

(statearr_27701[(8)] = inst_27497);

(statearr_27701[(9)] = inst_27499);

(statearr_27701[(32)] = inst_27519);

(statearr_27701[(10)] = inst_27496);

return statearr_27701;
})();
var statearr_27702_27771 = state_27635__$1;
(statearr_27702_27771[(2)] = null);

(statearr_27702_27771[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (45))){
var state_27635__$1 = state_27635;
var statearr_27703_27772 = state_27635__$1;
(statearr_27703_27772[(2)] = null);

(statearr_27703_27772[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (26))){
var inst_27549 = (state_27635[(19)]);
var inst_27552 = (state_27635[(23)]);
var inst_27555 = (state_27635[(26)]);
var inst_27557 = (state_27635[(24)]);
var inst_27553 = (state_27635[(25)]);
var inst_27572 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27574 = (function (){var all_files = inst_27549;
var res_SINGLEQUOTE_ = inst_27552;
var res = inst_27553;
var files_not_loaded = inst_27555;
var dependencies_that_loaded = inst_27557;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27549,inst_27552,inst_27555,inst_27557,inst_27553,inst_27572,state_val_27636,c__23947__auto__,map__27481,map__27481__$1,opts,before_jsload,on_jsload,reload_dependents,map__27482,map__27482__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27573){
var map__27704 = p__27573;
var map__27704__$1 = ((((!((map__27704 == null)))?((((map__27704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27704):map__27704);
var namespace = cljs.core.get.call(null,map__27704__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27704__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27549,inst_27552,inst_27555,inst_27557,inst_27553,inst_27572,state_val_27636,c__23947__auto__,map__27481,map__27481__$1,opts,before_jsload,on_jsload,reload_dependents,map__27482,map__27482__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27575 = cljs.core.map.call(null,inst_27574,inst_27553);
var inst_27576 = cljs.core.pr_str.call(null,inst_27575);
var inst_27577 = figwheel.client.utils.log.call(null,inst_27576);
var inst_27578 = (function (){var all_files = inst_27549;
var res_SINGLEQUOTE_ = inst_27552;
var res = inst_27553;
var files_not_loaded = inst_27555;
var dependencies_that_loaded = inst_27557;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27549,inst_27552,inst_27555,inst_27557,inst_27553,inst_27572,inst_27574,inst_27575,inst_27576,inst_27577,state_val_27636,c__23947__auto__,map__27481,map__27481__$1,opts,before_jsload,on_jsload,reload_dependents,map__27482,map__27482__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27549,inst_27552,inst_27555,inst_27557,inst_27553,inst_27572,inst_27574,inst_27575,inst_27576,inst_27577,state_val_27636,c__23947__auto__,map__27481,map__27481__$1,opts,before_jsload,on_jsload,reload_dependents,map__27482,map__27482__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27579 = setTimeout(inst_27578,(10));
var state_27635__$1 = (function (){var statearr_27706 = state_27635;
(statearr_27706[(33)] = inst_27577);

(statearr_27706[(34)] = inst_27572);

return statearr_27706;
})();
var statearr_27707_27773 = state_27635__$1;
(statearr_27707_27773[(2)] = inst_27579);

(statearr_27707_27773[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (16))){
var state_27635__$1 = state_27635;
var statearr_27708_27774 = state_27635__$1;
(statearr_27708_27774[(2)] = reload_dependents);

(statearr_27708_27774[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (38))){
var inst_27589 = (state_27635[(16)]);
var inst_27606 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27589);
var state_27635__$1 = state_27635;
var statearr_27709_27775 = state_27635__$1;
(statearr_27709_27775[(2)] = inst_27606);

(statearr_27709_27775[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (30))){
var state_27635__$1 = state_27635;
var statearr_27710_27776 = state_27635__$1;
(statearr_27710_27776[(2)] = null);

(statearr_27710_27776[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (10))){
var inst_27509 = (state_27635[(22)]);
var inst_27511 = cljs.core.chunked_seq_QMARK_.call(null,inst_27509);
var state_27635__$1 = state_27635;
if(inst_27511){
var statearr_27711_27777 = state_27635__$1;
(statearr_27711_27777[(1)] = (13));

} else {
var statearr_27712_27778 = state_27635__$1;
(statearr_27712_27778[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (18))){
var inst_27543 = (state_27635[(2)]);
var state_27635__$1 = state_27635;
if(cljs.core.truth_(inst_27543)){
var statearr_27713_27779 = state_27635__$1;
(statearr_27713_27779[(1)] = (19));

} else {
var statearr_27714_27780 = state_27635__$1;
(statearr_27714_27780[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (42))){
var state_27635__$1 = state_27635;
var statearr_27715_27781 = state_27635__$1;
(statearr_27715_27781[(2)] = null);

(statearr_27715_27781[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (37))){
var inst_27601 = (state_27635[(2)]);
var state_27635__$1 = state_27635;
var statearr_27716_27782 = state_27635__$1;
(statearr_27716_27782[(2)] = inst_27601);

(statearr_27716_27782[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (8))){
var inst_27496 = (state_27635[(10)]);
var inst_27509 = (state_27635[(22)]);
var inst_27509__$1 = cljs.core.seq.call(null,inst_27496);
var state_27635__$1 = (function (){var statearr_27717 = state_27635;
(statearr_27717[(22)] = inst_27509__$1);

return statearr_27717;
})();
if(inst_27509__$1){
var statearr_27718_27783 = state_27635__$1;
(statearr_27718_27783[(1)] = (10));

} else {
var statearr_27719_27784 = state_27635__$1;
(statearr_27719_27784[(1)] = (11));

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
}
});})(c__23947__auto__,map__27481,map__27481__$1,opts,before_jsload,on_jsload,reload_dependents,map__27482,map__27482__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23835__auto__,c__23947__auto__,map__27481,map__27481__$1,opts,before_jsload,on_jsload,reload_dependents,map__27482,map__27482__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23836__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23836__auto____0 = (function (){
var statearr_27723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27723[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23836__auto__);

(statearr_27723[(1)] = (1));

return statearr_27723;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23836__auto____1 = (function (state_27635){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_27635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e27724){if((e27724 instanceof Object)){
var ex__23839__auto__ = e27724;
var statearr_27725_27785 = state_27635;
(statearr_27725_27785[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27786 = state_27635;
state_27635 = G__27786;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23836__auto__ = function(state_27635){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23836__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23836__auto____1.call(this,state_27635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23836__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23836__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto__,map__27481,map__27481__$1,opts,before_jsload,on_jsload,reload_dependents,map__27482,map__27482__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23949__auto__ = (function (){var statearr_27726 = f__23948__auto__.call(null);
(statearr_27726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto__);

return statearr_27726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto__,map__27481,map__27481__$1,opts,before_jsload,on_jsload,reload_dependents,map__27482,map__27482__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23947__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27789,link){
var map__27792 = p__27789;
var map__27792__$1 = ((((!((map__27792 == null)))?((((map__27792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27792):map__27792);
var file = cljs.core.get.call(null,map__27792__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__27792,map__27792__$1,file){
return (function (p1__27787_SHARP_,p2__27788_SHARP_){
if(cljs.core._EQ_.call(null,p1__27787_SHARP_,p2__27788_SHARP_)){
return p1__27787_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__27792,map__27792__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27798){
var map__27799 = p__27798;
var map__27799__$1 = ((((!((map__27799 == null)))?((((map__27799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27799):map__27799);
var match_length = cljs.core.get.call(null,map__27799__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27799__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27794_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27794_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args27801 = [];
var len__22336__auto___27804 = arguments.length;
var i__22337__auto___27805 = (0);
while(true){
if((i__22337__auto___27805 < len__22336__auto___27804)){
args27801.push((arguments[i__22337__auto___27805]));

var G__27806 = (i__22337__auto___27805 + (1));
i__22337__auto___27805 = G__27806;
continue;
} else {
}
break;
}

var G__27803 = args27801.length;
switch (G__27803) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27801.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27808_SHARP_,p2__27809_SHARP_){
return cljs.core.assoc.call(null,p1__27808_SHARP_,cljs.core.get.call(null,p2__27809_SHARP_,key),p2__27809_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27810){
var map__27813 = p__27810;
var map__27813__$1 = ((((!((map__27813 == null)))?((((map__27813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27813):map__27813);
var f_data = map__27813__$1;
var file = cljs.core.get.call(null,map__27813__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27815,files_msg){
var map__27822 = p__27815;
var map__27822__$1 = ((((!((map__27822 == null)))?((((map__27822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27822):map__27822);
var opts = map__27822__$1;
var on_cssload = cljs.core.get.call(null,map__27822__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27824_27828 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27825_27829 = null;
var count__27826_27830 = (0);
var i__27827_27831 = (0);
while(true){
if((i__27827_27831 < count__27826_27830)){
var f_27832 = cljs.core._nth.call(null,chunk__27825_27829,i__27827_27831);
figwheel.client.file_reloading.reload_css_file.call(null,f_27832);

var G__27833 = seq__27824_27828;
var G__27834 = chunk__27825_27829;
var G__27835 = count__27826_27830;
var G__27836 = (i__27827_27831 + (1));
seq__27824_27828 = G__27833;
chunk__27825_27829 = G__27834;
count__27826_27830 = G__27835;
i__27827_27831 = G__27836;
continue;
} else {
var temp__4657__auto___27837 = cljs.core.seq.call(null,seq__27824_27828);
if(temp__4657__auto___27837){
var seq__27824_27838__$1 = temp__4657__auto___27837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27824_27838__$1)){
var c__22081__auto___27839 = cljs.core.chunk_first.call(null,seq__27824_27838__$1);
var G__27840 = cljs.core.chunk_rest.call(null,seq__27824_27838__$1);
var G__27841 = c__22081__auto___27839;
var G__27842 = cljs.core.count.call(null,c__22081__auto___27839);
var G__27843 = (0);
seq__27824_27828 = G__27840;
chunk__27825_27829 = G__27841;
count__27826_27830 = G__27842;
i__27827_27831 = G__27843;
continue;
} else {
var f_27844 = cljs.core.first.call(null,seq__27824_27838__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27844);

var G__27845 = cljs.core.next.call(null,seq__27824_27838__$1);
var G__27846 = null;
var G__27847 = (0);
var G__27848 = (0);
seq__27824_27828 = G__27845;
chunk__27825_27829 = G__27846;
count__27826_27830 = G__27847;
i__27827_27831 = G__27848;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27822,map__27822__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27822,map__27822__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map