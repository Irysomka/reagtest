// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__28284 = cljs.core._EQ_;
var expr__28285 = (function (){var or__21278__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e28288){if((e28288 instanceof Error)){
var e = e28288;
return false;
} else {
throw e28288;

}
}})();
if(cljs.core.truth_(or__21278__auto__)){
return or__21278__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28284.call(null,"true",expr__28285))){
return true;
} else {
if(cljs.core.truth_(pred__28284.call(null,"false",expr__28285))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28285)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e28290){if((e28290 instanceof Error)){
var e = e28290;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e28290;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__22343__auto__ = [];
var len__22336__auto___28292 = arguments.length;
var i__22337__auto___28293 = (0);
while(true){
if((i__22337__auto___28293 < len__22336__auto___28292)){
args__22343__auto__.push((arguments[i__22337__auto___28293]));

var G__28294 = (i__22337__auto___28293 + (1));
i__22337__auto___28293 = G__28294;
continue;
} else {
}
break;
}

var argseq__22344__auto__ = ((((0) < args__22343__auto__.length))?(new cljs.core.IndexedSeq(args__22343__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22344__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq28291){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28291));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28295){
var map__28298 = p__28295;
var map__28298__$1 = ((((!((map__28298 == null)))?((((map__28298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28298):map__28298);
var message = cljs.core.get.call(null,map__28298__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28298__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21278__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21278__auto__)){
return or__21278__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21266__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21266__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21266__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23947__auto___28460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto___28460,ch){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto___28460,ch){
return (function (state_28429){
var state_val_28430 = (state_28429[(1)]);
if((state_val_28430 === (7))){
var inst_28425 = (state_28429[(2)]);
var state_28429__$1 = state_28429;
var statearr_28431_28461 = state_28429__$1;
(statearr_28431_28461[(2)] = inst_28425);

(statearr_28431_28461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (1))){
var state_28429__$1 = state_28429;
var statearr_28432_28462 = state_28429__$1;
(statearr_28432_28462[(2)] = null);

(statearr_28432_28462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (4))){
var inst_28382 = (state_28429[(7)]);
var inst_28382__$1 = (state_28429[(2)]);
var state_28429__$1 = (function (){var statearr_28433 = state_28429;
(statearr_28433[(7)] = inst_28382__$1);

return statearr_28433;
})();
if(cljs.core.truth_(inst_28382__$1)){
var statearr_28434_28463 = state_28429__$1;
(statearr_28434_28463[(1)] = (5));

} else {
var statearr_28435_28464 = state_28429__$1;
(statearr_28435_28464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (15))){
var inst_28389 = (state_28429[(8)]);
var inst_28404 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28389);
var inst_28405 = cljs.core.first.call(null,inst_28404);
var inst_28406 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28405);
var inst_28407 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28406)].join('');
var inst_28408 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28407);
var state_28429__$1 = state_28429;
var statearr_28436_28465 = state_28429__$1;
(statearr_28436_28465[(2)] = inst_28408);

(statearr_28436_28465[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (13))){
var inst_28413 = (state_28429[(2)]);
var state_28429__$1 = state_28429;
var statearr_28437_28466 = state_28429__$1;
(statearr_28437_28466[(2)] = inst_28413);

(statearr_28437_28466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (6))){
var state_28429__$1 = state_28429;
var statearr_28438_28467 = state_28429__$1;
(statearr_28438_28467[(2)] = null);

(statearr_28438_28467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (17))){
var inst_28411 = (state_28429[(2)]);
var state_28429__$1 = state_28429;
var statearr_28439_28468 = state_28429__$1;
(statearr_28439_28468[(2)] = inst_28411);

(statearr_28439_28468[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (3))){
var inst_28427 = (state_28429[(2)]);
var state_28429__$1 = state_28429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28429__$1,inst_28427);
} else {
if((state_val_28430 === (12))){
var inst_28388 = (state_28429[(9)]);
var inst_28402 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28388,opts);
var state_28429__$1 = state_28429;
if(cljs.core.truth_(inst_28402)){
var statearr_28440_28469 = state_28429__$1;
(statearr_28440_28469[(1)] = (15));

} else {
var statearr_28441_28470 = state_28429__$1;
(statearr_28441_28470[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (2))){
var state_28429__$1 = state_28429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28429__$1,(4),ch);
} else {
if((state_val_28430 === (11))){
var inst_28389 = (state_28429[(8)]);
var inst_28394 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28395 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28389);
var inst_28396 = cljs.core.async.timeout.call(null,(1000));
var inst_28397 = [inst_28395,inst_28396];
var inst_28398 = (new cljs.core.PersistentVector(null,2,(5),inst_28394,inst_28397,null));
var state_28429__$1 = state_28429;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28429__$1,(14),inst_28398);
} else {
if((state_val_28430 === (9))){
var inst_28389 = (state_28429[(8)]);
var inst_28415 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28416 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28389);
var inst_28417 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28416);
var inst_28418 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28417)].join('');
var inst_28419 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28418);
var state_28429__$1 = (function (){var statearr_28442 = state_28429;
(statearr_28442[(10)] = inst_28415);

return statearr_28442;
})();
var statearr_28443_28471 = state_28429__$1;
(statearr_28443_28471[(2)] = inst_28419);

(statearr_28443_28471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (5))){
var inst_28382 = (state_28429[(7)]);
var inst_28384 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28385 = (new cljs.core.PersistentArrayMap(null,2,inst_28384,null));
var inst_28386 = (new cljs.core.PersistentHashSet(null,inst_28385,null));
var inst_28387 = figwheel.client.focus_msgs.call(null,inst_28386,inst_28382);
var inst_28388 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28387);
var inst_28389 = cljs.core.first.call(null,inst_28387);
var inst_28390 = figwheel.client.autoload_QMARK_.call(null);
var state_28429__$1 = (function (){var statearr_28444 = state_28429;
(statearr_28444[(8)] = inst_28389);

(statearr_28444[(9)] = inst_28388);

return statearr_28444;
})();
if(cljs.core.truth_(inst_28390)){
var statearr_28445_28472 = state_28429__$1;
(statearr_28445_28472[(1)] = (8));

} else {
var statearr_28446_28473 = state_28429__$1;
(statearr_28446_28473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (14))){
var inst_28400 = (state_28429[(2)]);
var state_28429__$1 = state_28429;
var statearr_28447_28474 = state_28429__$1;
(statearr_28447_28474[(2)] = inst_28400);

(statearr_28447_28474[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (16))){
var state_28429__$1 = state_28429;
var statearr_28448_28475 = state_28429__$1;
(statearr_28448_28475[(2)] = null);

(statearr_28448_28475[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (10))){
var inst_28421 = (state_28429[(2)]);
var state_28429__$1 = (function (){var statearr_28449 = state_28429;
(statearr_28449[(11)] = inst_28421);

return statearr_28449;
})();
var statearr_28450_28476 = state_28429__$1;
(statearr_28450_28476[(2)] = null);

(statearr_28450_28476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (8))){
var inst_28388 = (state_28429[(9)]);
var inst_28392 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28388,opts);
var state_28429__$1 = state_28429;
if(cljs.core.truth_(inst_28392)){
var statearr_28451_28477 = state_28429__$1;
(statearr_28451_28477[(1)] = (11));

} else {
var statearr_28452_28478 = state_28429__$1;
(statearr_28452_28478[(1)] = (12));

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
});})(c__23947__auto___28460,ch))
;
return ((function (switch__23835__auto__,c__23947__auto___28460,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23836__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23836__auto____0 = (function (){
var statearr_28456 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28456[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23836__auto__);

(statearr_28456[(1)] = (1));

return statearr_28456;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23836__auto____1 = (function (state_28429){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_28429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e28457){if((e28457 instanceof Object)){
var ex__23839__auto__ = e28457;
var statearr_28458_28479 = state_28429;
(statearr_28458_28479[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28480 = state_28429;
state_28429 = G__28480;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23836__auto__ = function(state_28429){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23836__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23836__auto____1.call(this,state_28429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23836__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23836__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto___28460,ch))
})();
var state__23949__auto__ = (function (){var statearr_28459 = f__23948__auto__.call(null);
(statearr_28459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto___28460);

return statearr_28459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto___28460,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28481_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28481_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_28488 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28488){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28486 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28487 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28487;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28486;
}}catch (e28485){if((e28485 instanceof Error)){
var e = e28485;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28488], null));
} else {
var e = e28485;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28488))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28489){
var map__28496 = p__28489;
var map__28496__$1 = ((((!((map__28496 == null)))?((((map__28496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28496):map__28496);
var opts = map__28496__$1;
var build_id = cljs.core.get.call(null,map__28496__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28496,map__28496__$1,opts,build_id){
return (function (p__28498){
var vec__28499 = p__28498;
var map__28500 = cljs.core.nth.call(null,vec__28499,(0),null);
var map__28500__$1 = ((((!((map__28500 == null)))?((((map__28500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28500):map__28500);
var msg = map__28500__$1;
var msg_name = cljs.core.get.call(null,map__28500__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28499,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28499,map__28500,map__28500__$1,msg,msg_name,_,map__28496,map__28496__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28499,map__28500,map__28500__$1,msg,msg_name,_,map__28496,map__28496__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28496,map__28496__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28506){
var vec__28507 = p__28506;
var map__28508 = cljs.core.nth.call(null,vec__28507,(0),null);
var map__28508__$1 = ((((!((map__28508 == null)))?((((map__28508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28508):map__28508);
var msg = map__28508__$1;
var msg_name = cljs.core.get.call(null,map__28508__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28507,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28510){
var map__28520 = p__28510;
var map__28520__$1 = ((((!((map__28520 == null)))?((((map__28520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28520):map__28520);
var on_compile_warning = cljs.core.get.call(null,map__28520__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28520__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28520,map__28520__$1,on_compile_warning,on_compile_fail){
return (function (p__28522){
var vec__28523 = p__28522;
var map__28524 = cljs.core.nth.call(null,vec__28523,(0),null);
var map__28524__$1 = ((((!((map__28524 == null)))?((((map__28524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28524):map__28524);
var msg = map__28524__$1;
var msg_name = cljs.core.get.call(null,map__28524__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28523,(1));
var pred__28526 = cljs.core._EQ_;
var expr__28527 = msg_name;
if(cljs.core.truth_(pred__28526.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28527))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28526.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28527))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28520,map__28520__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto__,msg_hist,msg_names,msg){
return (function (state_28743){
var state_val_28744 = (state_28743[(1)]);
if((state_val_28744 === (7))){
var inst_28667 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
if(cljs.core.truth_(inst_28667)){
var statearr_28745_28791 = state_28743__$1;
(statearr_28745_28791[(1)] = (8));

} else {
var statearr_28746_28792 = state_28743__$1;
(statearr_28746_28792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (20))){
var inst_28737 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
var statearr_28747_28793 = state_28743__$1;
(statearr_28747_28793[(2)] = inst_28737);

(statearr_28747_28793[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (27))){
var inst_28733 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
var statearr_28748_28794 = state_28743__$1;
(statearr_28748_28794[(2)] = inst_28733);

(statearr_28748_28794[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (1))){
var inst_28660 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28743__$1 = state_28743;
if(cljs.core.truth_(inst_28660)){
var statearr_28749_28795 = state_28743__$1;
(statearr_28749_28795[(1)] = (2));

} else {
var statearr_28750_28796 = state_28743__$1;
(statearr_28750_28796[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (24))){
var inst_28735 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
var statearr_28751_28797 = state_28743__$1;
(statearr_28751_28797[(2)] = inst_28735);

(statearr_28751_28797[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (4))){
var inst_28741 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28743__$1,inst_28741);
} else {
if((state_val_28744 === (15))){
var inst_28739 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
var statearr_28752_28798 = state_28743__$1;
(statearr_28752_28798[(2)] = inst_28739);

(statearr_28752_28798[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (21))){
var inst_28698 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
var statearr_28753_28799 = state_28743__$1;
(statearr_28753_28799[(2)] = inst_28698);

(statearr_28753_28799[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (31))){
var inst_28722 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28743__$1 = state_28743;
if(cljs.core.truth_(inst_28722)){
var statearr_28754_28800 = state_28743__$1;
(statearr_28754_28800[(1)] = (34));

} else {
var statearr_28755_28801 = state_28743__$1;
(statearr_28755_28801[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (32))){
var inst_28731 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
var statearr_28756_28802 = state_28743__$1;
(statearr_28756_28802[(2)] = inst_28731);

(statearr_28756_28802[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (33))){
var inst_28720 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
var statearr_28757_28803 = state_28743__$1;
(statearr_28757_28803[(2)] = inst_28720);

(statearr_28757_28803[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (13))){
var inst_28681 = figwheel.client.heads_up.clear.call(null);
var state_28743__$1 = state_28743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28743__$1,(16),inst_28681);
} else {
if((state_val_28744 === (22))){
var inst_28702 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28703 = figwheel.client.heads_up.append_message.call(null,inst_28702);
var state_28743__$1 = state_28743;
var statearr_28758_28804 = state_28743__$1;
(statearr_28758_28804[(2)] = inst_28703);

(statearr_28758_28804[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (36))){
var inst_28729 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
var statearr_28759_28805 = state_28743__$1;
(statearr_28759_28805[(2)] = inst_28729);

(statearr_28759_28805[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (29))){
var inst_28713 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
var statearr_28760_28806 = state_28743__$1;
(statearr_28760_28806[(2)] = inst_28713);

(statearr_28760_28806[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (6))){
var inst_28662 = (state_28743[(7)]);
var state_28743__$1 = state_28743;
var statearr_28761_28807 = state_28743__$1;
(statearr_28761_28807[(2)] = inst_28662);

(statearr_28761_28807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (28))){
var inst_28709 = (state_28743[(2)]);
var inst_28710 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28711 = figwheel.client.heads_up.display_warning.call(null,inst_28710);
var state_28743__$1 = (function (){var statearr_28762 = state_28743;
(statearr_28762[(8)] = inst_28709);

return statearr_28762;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28743__$1,(29),inst_28711);
} else {
if((state_val_28744 === (25))){
var inst_28707 = figwheel.client.heads_up.clear.call(null);
var state_28743__$1 = state_28743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28743__$1,(28),inst_28707);
} else {
if((state_val_28744 === (34))){
var inst_28724 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28743__$1 = state_28743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28743__$1,(37),inst_28724);
} else {
if((state_val_28744 === (17))){
var inst_28689 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
var statearr_28763_28808 = state_28743__$1;
(statearr_28763_28808[(2)] = inst_28689);

(statearr_28763_28808[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (3))){
var inst_28679 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28743__$1 = state_28743;
if(cljs.core.truth_(inst_28679)){
var statearr_28764_28809 = state_28743__$1;
(statearr_28764_28809[(1)] = (13));

} else {
var statearr_28765_28810 = state_28743__$1;
(statearr_28765_28810[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (12))){
var inst_28675 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
var statearr_28766_28811 = state_28743__$1;
(statearr_28766_28811[(2)] = inst_28675);

(statearr_28766_28811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (2))){
var inst_28662 = (state_28743[(7)]);
var inst_28662__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28743__$1 = (function (){var statearr_28767 = state_28743;
(statearr_28767[(7)] = inst_28662__$1);

return statearr_28767;
})();
if(cljs.core.truth_(inst_28662__$1)){
var statearr_28768_28812 = state_28743__$1;
(statearr_28768_28812[(1)] = (5));

} else {
var statearr_28769_28813 = state_28743__$1;
(statearr_28769_28813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (23))){
var inst_28705 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28743__$1 = state_28743;
if(cljs.core.truth_(inst_28705)){
var statearr_28770_28814 = state_28743__$1;
(statearr_28770_28814[(1)] = (25));

} else {
var statearr_28771_28815 = state_28743__$1;
(statearr_28771_28815[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (35))){
var state_28743__$1 = state_28743;
var statearr_28772_28816 = state_28743__$1;
(statearr_28772_28816[(2)] = null);

(statearr_28772_28816[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (19))){
var inst_28700 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28743__$1 = state_28743;
if(cljs.core.truth_(inst_28700)){
var statearr_28773_28817 = state_28743__$1;
(statearr_28773_28817[(1)] = (22));

} else {
var statearr_28774_28818 = state_28743__$1;
(statearr_28774_28818[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (11))){
var inst_28671 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
var statearr_28775_28819 = state_28743__$1;
(statearr_28775_28819[(2)] = inst_28671);

(statearr_28775_28819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (9))){
var inst_28673 = figwheel.client.heads_up.clear.call(null);
var state_28743__$1 = state_28743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28743__$1,(12),inst_28673);
} else {
if((state_val_28744 === (5))){
var inst_28664 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28743__$1 = state_28743;
var statearr_28776_28820 = state_28743__$1;
(statearr_28776_28820[(2)] = inst_28664);

(statearr_28776_28820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (14))){
var inst_28691 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28743__$1 = state_28743;
if(cljs.core.truth_(inst_28691)){
var statearr_28777_28821 = state_28743__$1;
(statearr_28777_28821[(1)] = (18));

} else {
var statearr_28778_28822 = state_28743__$1;
(statearr_28778_28822[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (26))){
var inst_28715 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28743__$1 = state_28743;
if(cljs.core.truth_(inst_28715)){
var statearr_28779_28823 = state_28743__$1;
(statearr_28779_28823[(1)] = (30));

} else {
var statearr_28780_28824 = state_28743__$1;
(statearr_28780_28824[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (16))){
var inst_28683 = (state_28743[(2)]);
var inst_28684 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28685 = figwheel.client.format_messages.call(null,inst_28684);
var inst_28686 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28687 = figwheel.client.heads_up.display_error.call(null,inst_28685,inst_28686);
var state_28743__$1 = (function (){var statearr_28781 = state_28743;
(statearr_28781[(9)] = inst_28683);

return statearr_28781;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28743__$1,(17),inst_28687);
} else {
if((state_val_28744 === (30))){
var inst_28717 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28718 = figwheel.client.heads_up.display_warning.call(null,inst_28717);
var state_28743__$1 = state_28743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28743__$1,(33),inst_28718);
} else {
if((state_val_28744 === (10))){
var inst_28677 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
var statearr_28782_28825 = state_28743__$1;
(statearr_28782_28825[(2)] = inst_28677);

(statearr_28782_28825[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (18))){
var inst_28693 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28694 = figwheel.client.format_messages.call(null,inst_28693);
var inst_28695 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28696 = figwheel.client.heads_up.display_error.call(null,inst_28694,inst_28695);
var state_28743__$1 = state_28743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28743__$1,(21),inst_28696);
} else {
if((state_val_28744 === (37))){
var inst_28726 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
var statearr_28783_28826 = state_28743__$1;
(statearr_28783_28826[(2)] = inst_28726);

(statearr_28783_28826[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (8))){
var inst_28669 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28743__$1 = state_28743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28743__$1,(11),inst_28669);
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
});})(c__23947__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23835__auto__,c__23947__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23836__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23836__auto____0 = (function (){
var statearr_28787 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28787[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23836__auto__);

(statearr_28787[(1)] = (1));

return statearr_28787;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23836__auto____1 = (function (state_28743){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_28743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e28788){if((e28788 instanceof Object)){
var ex__23839__auto__ = e28788;
var statearr_28789_28827 = state_28743;
(statearr_28789_28827[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28828 = state_28743;
state_28743 = G__28828;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23836__auto__ = function(state_28743){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23836__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23836__auto____1.call(this,state_28743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23836__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23836__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto__,msg_hist,msg_names,msg))
})();
var state__23949__auto__ = (function (){var statearr_28790 = f__23948__auto__.call(null);
(statearr_28790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto__);

return statearr_28790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto__,msg_hist,msg_names,msg))
);

return c__23947__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23947__auto___28891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto___28891,ch){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto___28891,ch){
return (function (state_28874){
var state_val_28875 = (state_28874[(1)]);
if((state_val_28875 === (1))){
var state_28874__$1 = state_28874;
var statearr_28876_28892 = state_28874__$1;
(statearr_28876_28892[(2)] = null);

(statearr_28876_28892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (2))){
var state_28874__$1 = state_28874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28874__$1,(4),ch);
} else {
if((state_val_28875 === (3))){
var inst_28872 = (state_28874[(2)]);
var state_28874__$1 = state_28874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28874__$1,inst_28872);
} else {
if((state_val_28875 === (4))){
var inst_28862 = (state_28874[(7)]);
var inst_28862__$1 = (state_28874[(2)]);
var state_28874__$1 = (function (){var statearr_28877 = state_28874;
(statearr_28877[(7)] = inst_28862__$1);

return statearr_28877;
})();
if(cljs.core.truth_(inst_28862__$1)){
var statearr_28878_28893 = state_28874__$1;
(statearr_28878_28893[(1)] = (5));

} else {
var statearr_28879_28894 = state_28874__$1;
(statearr_28879_28894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (5))){
var inst_28862 = (state_28874[(7)]);
var inst_28864 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28862);
var state_28874__$1 = state_28874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28874__$1,(8),inst_28864);
} else {
if((state_val_28875 === (6))){
var state_28874__$1 = state_28874;
var statearr_28880_28895 = state_28874__$1;
(statearr_28880_28895[(2)] = null);

(statearr_28880_28895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (7))){
var inst_28870 = (state_28874[(2)]);
var state_28874__$1 = state_28874;
var statearr_28881_28896 = state_28874__$1;
(statearr_28881_28896[(2)] = inst_28870);

(statearr_28881_28896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (8))){
var inst_28866 = (state_28874[(2)]);
var state_28874__$1 = (function (){var statearr_28882 = state_28874;
(statearr_28882[(8)] = inst_28866);

return statearr_28882;
})();
var statearr_28883_28897 = state_28874__$1;
(statearr_28883_28897[(2)] = null);

(statearr_28883_28897[(1)] = (2));


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
});})(c__23947__auto___28891,ch))
;
return ((function (switch__23835__auto__,c__23947__auto___28891,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23836__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23836__auto____0 = (function (){
var statearr_28887 = [null,null,null,null,null,null,null,null,null];
(statearr_28887[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23836__auto__);

(statearr_28887[(1)] = (1));

return statearr_28887;
});
var figwheel$client$heads_up_plugin_$_state_machine__23836__auto____1 = (function (state_28874){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_28874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e28888){if((e28888 instanceof Object)){
var ex__23839__auto__ = e28888;
var statearr_28889_28898 = state_28874;
(statearr_28889_28898[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28899 = state_28874;
state_28874 = G__28899;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23836__auto__ = function(state_28874){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23836__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23836__auto____1.call(this,state_28874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23836__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23836__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto___28891,ch))
})();
var state__23949__auto__ = (function (){var statearr_28890 = f__23948__auto__.call(null);
(statearr_28890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto___28891);

return statearr_28890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto___28891,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto__){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto__){
return (function (state_28920){
var state_val_28921 = (state_28920[(1)]);
if((state_val_28921 === (1))){
var inst_28915 = cljs.core.async.timeout.call(null,(3000));
var state_28920__$1 = state_28920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28920__$1,(2),inst_28915);
} else {
if((state_val_28921 === (2))){
var inst_28917 = (state_28920[(2)]);
var inst_28918 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28920__$1 = (function (){var statearr_28922 = state_28920;
(statearr_28922[(7)] = inst_28917);

return statearr_28922;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28920__$1,inst_28918);
} else {
return null;
}
}
});})(c__23947__auto__))
;
return ((function (switch__23835__auto__,c__23947__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23836__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23836__auto____0 = (function (){
var statearr_28926 = [null,null,null,null,null,null,null,null];
(statearr_28926[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23836__auto__);

(statearr_28926[(1)] = (1));

return statearr_28926;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23836__auto____1 = (function (state_28920){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_28920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e28927){if((e28927 instanceof Object)){
var ex__23839__auto__ = e28927;
var statearr_28928_28930 = state_28920;
(statearr_28928_28930[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28931 = state_28920;
state_28920 = G__28931;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23836__auto__ = function(state_28920){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23836__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23836__auto____1.call(this,state_28920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23836__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23836__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto__))
})();
var state__23949__auto__ = (function (){var statearr_28929 = f__23948__auto__.call(null);
(statearr_28929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto__);

return statearr_28929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto__))
);

return c__23947__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28932){
var map__28939 = p__28932;
var map__28939__$1 = ((((!((map__28939 == null)))?((((map__28939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28939):map__28939);
var ed = map__28939__$1;
var formatted_exception = cljs.core.get.call(null,map__28939__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28939__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28939__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28941_28945 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28942_28946 = null;
var count__28943_28947 = (0);
var i__28944_28948 = (0);
while(true){
if((i__28944_28948 < count__28943_28947)){
var msg_28949 = cljs.core._nth.call(null,chunk__28942_28946,i__28944_28948);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28949);

var G__28950 = seq__28941_28945;
var G__28951 = chunk__28942_28946;
var G__28952 = count__28943_28947;
var G__28953 = (i__28944_28948 + (1));
seq__28941_28945 = G__28950;
chunk__28942_28946 = G__28951;
count__28943_28947 = G__28952;
i__28944_28948 = G__28953;
continue;
} else {
var temp__4657__auto___28954 = cljs.core.seq.call(null,seq__28941_28945);
if(temp__4657__auto___28954){
var seq__28941_28955__$1 = temp__4657__auto___28954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28941_28955__$1)){
var c__22081__auto___28956 = cljs.core.chunk_first.call(null,seq__28941_28955__$1);
var G__28957 = cljs.core.chunk_rest.call(null,seq__28941_28955__$1);
var G__28958 = c__22081__auto___28956;
var G__28959 = cljs.core.count.call(null,c__22081__auto___28956);
var G__28960 = (0);
seq__28941_28945 = G__28957;
chunk__28942_28946 = G__28958;
count__28943_28947 = G__28959;
i__28944_28948 = G__28960;
continue;
} else {
var msg_28961 = cljs.core.first.call(null,seq__28941_28955__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28961);

var G__28962 = cljs.core.next.call(null,seq__28941_28955__$1);
var G__28963 = null;
var G__28964 = (0);
var G__28965 = (0);
seq__28941_28945 = G__28962;
chunk__28942_28946 = G__28963;
count__28943_28947 = G__28964;
i__28944_28948 = G__28965;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28966){
var map__28969 = p__28966;
var map__28969__$1 = ((((!((map__28969 == null)))?((((map__28969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28969):map__28969);
var w = map__28969__$1;
var message = cljs.core.get.call(null,map__28969__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__21266__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21266__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21266__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28977 = cljs.core.seq.call(null,plugins);
var chunk__28978 = null;
var count__28979 = (0);
var i__28980 = (0);
while(true){
if((i__28980 < count__28979)){
var vec__28981 = cljs.core._nth.call(null,chunk__28978,i__28980);
var k = cljs.core.nth.call(null,vec__28981,(0),null);
var plugin = cljs.core.nth.call(null,vec__28981,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28983 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28977,chunk__28978,count__28979,i__28980,pl_28983,vec__28981,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28983.call(null,msg_hist);
});})(seq__28977,chunk__28978,count__28979,i__28980,pl_28983,vec__28981,k,plugin))
);
} else {
}

var G__28984 = seq__28977;
var G__28985 = chunk__28978;
var G__28986 = count__28979;
var G__28987 = (i__28980 + (1));
seq__28977 = G__28984;
chunk__28978 = G__28985;
count__28979 = G__28986;
i__28980 = G__28987;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28977);
if(temp__4657__auto__){
var seq__28977__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28977__$1)){
var c__22081__auto__ = cljs.core.chunk_first.call(null,seq__28977__$1);
var G__28988 = cljs.core.chunk_rest.call(null,seq__28977__$1);
var G__28989 = c__22081__auto__;
var G__28990 = cljs.core.count.call(null,c__22081__auto__);
var G__28991 = (0);
seq__28977 = G__28988;
chunk__28978 = G__28989;
count__28979 = G__28990;
i__28980 = G__28991;
continue;
} else {
var vec__28982 = cljs.core.first.call(null,seq__28977__$1);
var k = cljs.core.nth.call(null,vec__28982,(0),null);
var plugin = cljs.core.nth.call(null,vec__28982,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28992 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28977,chunk__28978,count__28979,i__28980,pl_28992,vec__28982,k,plugin,seq__28977__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28992.call(null,msg_hist);
});})(seq__28977,chunk__28978,count__28979,i__28980,pl_28992,vec__28982,k,plugin,seq__28977__$1,temp__4657__auto__))
);
} else {
}

var G__28993 = cljs.core.next.call(null,seq__28977__$1);
var G__28994 = null;
var G__28995 = (0);
var G__28996 = (0);
seq__28977 = G__28993;
chunk__28978 = G__28994;
count__28979 = G__28995;
i__28980 = G__28996;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args28997 = [];
var len__22336__auto___29000 = arguments.length;
var i__22337__auto___29001 = (0);
while(true){
if((i__22337__auto___29001 < len__22336__auto___29000)){
args28997.push((arguments[i__22337__auto___29001]));

var G__29002 = (i__22337__auto___29001 + (1));
i__22337__auto___29001 = G__29002;
continue;
} else {
}
break;
}

var G__28999 = args28997.length;
switch (G__28999) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28997.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__22343__auto__ = [];
var len__22336__auto___29008 = arguments.length;
var i__22337__auto___29009 = (0);
while(true){
if((i__22337__auto___29009 < len__22336__auto___29008)){
args__22343__auto__.push((arguments[i__22337__auto___29009]));

var G__29010 = (i__22337__auto___29009 + (1));
i__22337__auto___29009 = G__29010;
continue;
} else {
}
break;
}

var argseq__22344__auto__ = ((((0) < args__22343__auto__.length))?(new cljs.core.IndexedSeq(args__22343__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22344__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29005){
var map__29006 = p__29005;
var map__29006__$1 = ((((!((map__29006 == null)))?((((map__29006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29006):map__29006);
var opts = map__29006__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29004){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29004));
});

//# sourceMappingURL=client.js.map