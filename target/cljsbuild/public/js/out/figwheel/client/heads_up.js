// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__22343__auto__ = [];
var len__22336__auto___28050 = arguments.length;
var i__22337__auto___28051 = (0);
while(true){
if((i__22337__auto___28051 < len__22336__auto___28050)){
args__22343__auto__.push((arguments[i__22337__auto___28051]));

var G__28052 = (i__22337__auto___28051 + (1));
i__22337__auto___28051 = G__28052;
continue;
} else {
}
break;
}

var argseq__22344__auto__ = ((((2) < args__22343__auto__.length))?(new cljs.core.IndexedSeq(args__22343__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22344__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28042_28053 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28043_28054 = null;
var count__28044_28055 = (0);
var i__28045_28056 = (0);
while(true){
if((i__28045_28056 < count__28044_28055)){
var k_28057 = cljs.core._nth.call(null,chunk__28043_28054,i__28045_28056);
e.setAttribute(cljs.core.name.call(null,k_28057),cljs.core.get.call(null,attrs,k_28057));

var G__28058 = seq__28042_28053;
var G__28059 = chunk__28043_28054;
var G__28060 = count__28044_28055;
var G__28061 = (i__28045_28056 + (1));
seq__28042_28053 = G__28058;
chunk__28043_28054 = G__28059;
count__28044_28055 = G__28060;
i__28045_28056 = G__28061;
continue;
} else {
var temp__4657__auto___28062 = cljs.core.seq.call(null,seq__28042_28053);
if(temp__4657__auto___28062){
var seq__28042_28063__$1 = temp__4657__auto___28062;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28042_28063__$1)){
var c__22081__auto___28064 = cljs.core.chunk_first.call(null,seq__28042_28063__$1);
var G__28065 = cljs.core.chunk_rest.call(null,seq__28042_28063__$1);
var G__28066 = c__22081__auto___28064;
var G__28067 = cljs.core.count.call(null,c__22081__auto___28064);
var G__28068 = (0);
seq__28042_28053 = G__28065;
chunk__28043_28054 = G__28066;
count__28044_28055 = G__28067;
i__28045_28056 = G__28068;
continue;
} else {
var k_28069 = cljs.core.first.call(null,seq__28042_28063__$1);
e.setAttribute(cljs.core.name.call(null,k_28069),cljs.core.get.call(null,attrs,k_28069));

var G__28070 = cljs.core.next.call(null,seq__28042_28063__$1);
var G__28071 = null;
var G__28072 = (0);
var G__28073 = (0);
seq__28042_28053 = G__28070;
chunk__28043_28054 = G__28071;
count__28044_28055 = G__28072;
i__28045_28056 = G__28073;
continue;
}
} else {
}
}
break;
}

var seq__28046_28074 = cljs.core.seq.call(null,children);
var chunk__28047_28075 = null;
var count__28048_28076 = (0);
var i__28049_28077 = (0);
while(true){
if((i__28049_28077 < count__28048_28076)){
var ch_28078 = cljs.core._nth.call(null,chunk__28047_28075,i__28049_28077);
e.appendChild(ch_28078);

var G__28079 = seq__28046_28074;
var G__28080 = chunk__28047_28075;
var G__28081 = count__28048_28076;
var G__28082 = (i__28049_28077 + (1));
seq__28046_28074 = G__28079;
chunk__28047_28075 = G__28080;
count__28048_28076 = G__28081;
i__28049_28077 = G__28082;
continue;
} else {
var temp__4657__auto___28083 = cljs.core.seq.call(null,seq__28046_28074);
if(temp__4657__auto___28083){
var seq__28046_28084__$1 = temp__4657__auto___28083;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28046_28084__$1)){
var c__22081__auto___28085 = cljs.core.chunk_first.call(null,seq__28046_28084__$1);
var G__28086 = cljs.core.chunk_rest.call(null,seq__28046_28084__$1);
var G__28087 = c__22081__auto___28085;
var G__28088 = cljs.core.count.call(null,c__22081__auto___28085);
var G__28089 = (0);
seq__28046_28074 = G__28086;
chunk__28047_28075 = G__28087;
count__28048_28076 = G__28088;
i__28049_28077 = G__28089;
continue;
} else {
var ch_28090 = cljs.core.first.call(null,seq__28046_28084__$1);
e.appendChild(ch_28090);

var G__28091 = cljs.core.next.call(null,seq__28046_28084__$1);
var G__28092 = null;
var G__28093 = (0);
var G__28094 = (0);
seq__28046_28074 = G__28091;
chunk__28047_28075 = G__28092;
count__28048_28076 = G__28093;
i__28049_28077 = G__28094;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28039){
var G__28040 = cljs.core.first.call(null,seq28039);
var seq28039__$1 = cljs.core.next.call(null,seq28039);
var G__28041 = cljs.core.first.call(null,seq28039__$1);
var seq28039__$2 = cljs.core.next.call(null,seq28039__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28040,G__28041,seq28039__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__22191__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22192__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22193__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22194__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22195__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__22191__auto__,prefer_table__22192__auto__,method_cache__22193__auto__,cached_hierarchy__22194__auto__,hierarchy__22195__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__22191__auto__,prefer_table__22192__auto__,method_cache__22193__auto__,cached_hierarchy__22194__auto__,hierarchy__22195__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22195__auto__,method_table__22191__auto__,prefer_table__22192__auto__,method_cache__22193__auto__,cached_hierarchy__22194__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_28095 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28095.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28095.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_28095.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28095);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28096,st_map){
var map__28101 = p__28096;
var map__28101__$1 = ((((!((map__28101 == null)))?((((map__28101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28101):map__28101);
var container_el = cljs.core.get.call(null,map__28101__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28101,map__28101__$1,container_el){
return (function (p__28103){
var vec__28104 = p__28103;
var k = cljs.core.nth.call(null,vec__28104,(0),null);
var v = cljs.core.nth.call(null,vec__28104,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28101,map__28101__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28105,dom_str){
var map__28108 = p__28105;
var map__28108__$1 = ((((!((map__28108 == null)))?((((map__28108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28108):map__28108);
var c = map__28108__$1;
var content_area_el = cljs.core.get.call(null,map__28108__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28110){
var map__28113 = p__28110;
var map__28113__$1 = ((((!((map__28113 == null)))?((((map__28113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28113):map__28113);
var content_area_el = cljs.core.get.call(null,map__28113__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__23947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto__){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto__){
return (function (state_28156){
var state_val_28157 = (state_28156[(1)]);
if((state_val_28157 === (1))){
var inst_28141 = (state_28156[(7)]);
var inst_28141__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28142 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28143 = ["10px","10px","100%","68px","1.0"];
var inst_28144 = cljs.core.PersistentHashMap.fromArrays(inst_28142,inst_28143);
var inst_28145 = cljs.core.merge.call(null,inst_28144,style);
var inst_28146 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28141__$1,inst_28145);
var inst_28147 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28141__$1,msg);
var inst_28148 = cljs.core.async.timeout.call(null,(300));
var state_28156__$1 = (function (){var statearr_28158 = state_28156;
(statearr_28158[(8)] = inst_28147);

(statearr_28158[(7)] = inst_28141__$1);

(statearr_28158[(9)] = inst_28146);

return statearr_28158;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28156__$1,(2),inst_28148);
} else {
if((state_val_28157 === (2))){
var inst_28141 = (state_28156[(7)]);
var inst_28150 = (state_28156[(2)]);
var inst_28151 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28152 = ["auto"];
var inst_28153 = cljs.core.PersistentHashMap.fromArrays(inst_28151,inst_28152);
var inst_28154 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28141,inst_28153);
var state_28156__$1 = (function (){var statearr_28159 = state_28156;
(statearr_28159[(10)] = inst_28150);

return statearr_28159;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28156__$1,inst_28154);
} else {
return null;
}
}
});})(c__23947__auto__))
;
return ((function (switch__23835__auto__,c__23947__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__23836__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__23836__auto____0 = (function (){
var statearr_28163 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28163[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__23836__auto__);

(statearr_28163[(1)] = (1));

return statearr_28163;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__23836__auto____1 = (function (state_28156){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_28156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e28164){if((e28164 instanceof Object)){
var ex__23839__auto__ = e28164;
var statearr_28165_28167 = state_28156;
(statearr_28165_28167[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28168 = state_28156;
state_28156 = G__28168;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__23836__auto__ = function(state_28156){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23836__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23836__auto____1.call(this,state_28156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__23836__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__23836__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto__))
})();
var state__23949__auto__ = (function (){var statearr_28166 = f__23948__auto__.call(null);
(statearr_28166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto__);

return statearr_28166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto__))
);

return c__23947__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__28170 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__28170,(0),null);
var ln = cljs.core.nth.call(null,vec__28170,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28173 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28173,(0),null);
var file_line = cljs.core.nth.call(null,vec__28173,(1),null);
var file_column = cljs.core.nth.call(null,vec__28173,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28173,file_name,file_line,file_column){
return (function (p1__28171_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__28171_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__28173,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__21278__auto__ = file_line;
if(cljs.core.truth_(or__21278__auto__)){
return or__21278__auto__;
} else {
var and__21266__auto__ = cause;
if(cljs.core.truth_(and__21266__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__21266__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__28176 = figwheel.client.heads_up.ensure_container.call(null);
var map__28176__$1 = ((((!((map__28176 == null)))?((((map__28176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28176):map__28176);
var content_area_el = cljs.core.get.call(null,map__28176__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__23947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto__){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto__){
return (function (state_28224){
var state_val_28225 = (state_28224[(1)]);
if((state_val_28225 === (1))){
var inst_28207 = (state_28224[(7)]);
var inst_28207__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28208 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28209 = ["0.0"];
var inst_28210 = cljs.core.PersistentHashMap.fromArrays(inst_28208,inst_28209);
var inst_28211 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28207__$1,inst_28210);
var inst_28212 = cljs.core.async.timeout.call(null,(300));
var state_28224__$1 = (function (){var statearr_28226 = state_28224;
(statearr_28226[(7)] = inst_28207__$1);

(statearr_28226[(8)] = inst_28211);

return statearr_28226;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28224__$1,(2),inst_28212);
} else {
if((state_val_28225 === (2))){
var inst_28207 = (state_28224[(7)]);
var inst_28214 = (state_28224[(2)]);
var inst_28215 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28216 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28217 = cljs.core.PersistentHashMap.fromArrays(inst_28215,inst_28216);
var inst_28218 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28207,inst_28217);
var inst_28219 = cljs.core.async.timeout.call(null,(200));
var state_28224__$1 = (function (){var statearr_28227 = state_28224;
(statearr_28227[(9)] = inst_28218);

(statearr_28227[(10)] = inst_28214);

return statearr_28227;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28224__$1,(3),inst_28219);
} else {
if((state_val_28225 === (3))){
var inst_28207 = (state_28224[(7)]);
var inst_28221 = (state_28224[(2)]);
var inst_28222 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28207,"");
var state_28224__$1 = (function (){var statearr_28228 = state_28224;
(statearr_28228[(11)] = inst_28221);

return statearr_28228;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28224__$1,inst_28222);
} else {
return null;
}
}
}
});})(c__23947__auto__))
;
return ((function (switch__23835__auto__,c__23947__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__23836__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__23836__auto____0 = (function (){
var statearr_28232 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28232[(0)] = figwheel$client$heads_up$clear_$_state_machine__23836__auto__);

(statearr_28232[(1)] = (1));

return statearr_28232;
});
var figwheel$client$heads_up$clear_$_state_machine__23836__auto____1 = (function (state_28224){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_28224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e28233){if((e28233 instanceof Object)){
var ex__23839__auto__ = e28233;
var statearr_28234_28236 = state_28224;
(statearr_28234_28236[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28237 = state_28224;
state_28224 = G__28237;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__23836__auto__ = function(state_28224){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__23836__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__23836__auto____1.call(this,state_28224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__23836__auto____0;
figwheel$client$heads_up$clear_$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__23836__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto__))
})();
var state__23949__auto__ = (function (){var statearr_28235 = f__23948__auto__.call(null);
(statearr_28235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto__);

return statearr_28235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto__))
);

return c__23947__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__23947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto__){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto__){
return (function (state_28269){
var state_val_28270 = (state_28269[(1)]);
if((state_val_28270 === (1))){
var inst_28259 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28269__$1 = state_28269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28269__$1,(2),inst_28259);
} else {
if((state_val_28270 === (2))){
var inst_28261 = (state_28269[(2)]);
var inst_28262 = cljs.core.async.timeout.call(null,(400));
var state_28269__$1 = (function (){var statearr_28271 = state_28269;
(statearr_28271[(7)] = inst_28261);

return statearr_28271;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28269__$1,(3),inst_28262);
} else {
if((state_val_28270 === (3))){
var inst_28264 = (state_28269[(2)]);
var inst_28265 = figwheel.client.heads_up.clear.call(null);
var state_28269__$1 = (function (){var statearr_28272 = state_28269;
(statearr_28272[(8)] = inst_28264);

return statearr_28272;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28269__$1,(4),inst_28265);
} else {
if((state_val_28270 === (4))){
var inst_28267 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28269__$1,inst_28267);
} else {
return null;
}
}
}
}
});})(c__23947__auto__))
;
return ((function (switch__23835__auto__,c__23947__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__23836__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__23836__auto____0 = (function (){
var statearr_28276 = [null,null,null,null,null,null,null,null,null];
(statearr_28276[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__23836__auto__);

(statearr_28276[(1)] = (1));

return statearr_28276;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__23836__auto____1 = (function (state_28269){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_28269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e28277){if((e28277 instanceof Object)){
var ex__23839__auto__ = e28277;
var statearr_28278_28280 = state_28269;
(statearr_28278_28280[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28281 = state_28269;
state_28269 = G__28281;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__23836__auto__ = function(state_28269){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23836__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23836__auto____1.call(this,state_28269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__23836__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__23836__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto__))
})();
var state__23949__auto__ = (function (){var statearr_28279 = f__23948__auto__.call(null);
(statearr_28279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto__);

return statearr_28279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto__))
);

return c__23947__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map