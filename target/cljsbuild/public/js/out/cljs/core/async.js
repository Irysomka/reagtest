// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args23992 = [];
var len__22336__auto___23998 = arguments.length;
var i__22337__auto___23999 = (0);
while(true){
if((i__22337__auto___23999 < len__22336__auto___23998)){
args23992.push((arguments[i__22337__auto___23999]));

var G__24000 = (i__22337__auto___23999 + (1));
i__22337__auto___23999 = G__24000;
continue;
} else {
}
break;
}

var G__23994 = args23992.length;
switch (G__23994) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23992.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23995 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23995 = (function (f,blockable,meta23996){
this.f = f;
this.blockable = blockable;
this.meta23996 = meta23996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23997,meta23996__$1){
var self__ = this;
var _23997__$1 = this;
return (new cljs.core.async.t_cljs$core$async23995(self__.f,self__.blockable,meta23996__$1));
});

cljs.core.async.t_cljs$core$async23995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23997){
var self__ = this;
var _23997__$1 = this;
return self__.meta23996;
});

cljs.core.async.t_cljs$core$async23995.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23995.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23995.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23995.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23996","meta23996",-1712614493,null)], null);
});

cljs.core.async.t_cljs$core$async23995.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23995";

cljs.core.async.t_cljs$core$async23995.cljs$lang$ctorPrWriter = (function (this__21876__auto__,writer__21877__auto__,opt__21878__auto__){
return cljs.core._write.call(null,writer__21877__auto__,"cljs.core.async/t_cljs$core$async23995");
});

cljs.core.async.__GT_t_cljs$core$async23995 = (function cljs$core$async$__GT_t_cljs$core$async23995(f__$1,blockable__$1,meta23996){
return (new cljs.core.async.t_cljs$core$async23995(f__$1,blockable__$1,meta23996));
});

}

return (new cljs.core.async.t_cljs$core$async23995(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args24004 = [];
var len__22336__auto___24007 = arguments.length;
var i__22337__auto___24008 = (0);
while(true){
if((i__22337__auto___24008 < len__22336__auto___24007)){
args24004.push((arguments[i__22337__auto___24008]));

var G__24009 = (i__22337__auto___24008 + (1));
i__22337__auto___24008 = G__24009;
continue;
} else {
}
break;
}

var G__24006 = args24004.length;
switch (G__24006) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24004.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args24011 = [];
var len__22336__auto___24014 = arguments.length;
var i__22337__auto___24015 = (0);
while(true){
if((i__22337__auto___24015 < len__22336__auto___24014)){
args24011.push((arguments[i__22337__auto___24015]));

var G__24016 = (i__22337__auto___24015 + (1));
i__22337__auto___24015 = G__24016;
continue;
} else {
}
break;
}

var G__24013 = args24011.length;
switch (G__24013) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24011.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args24018 = [];
var len__22336__auto___24021 = arguments.length;
var i__22337__auto___24022 = (0);
while(true){
if((i__22337__auto___24022 < len__22336__auto___24021)){
args24018.push((arguments[i__22337__auto___24022]));

var G__24023 = (i__22337__auto___24022 + (1));
i__22337__auto___24022 = G__24023;
continue;
} else {
}
break;
}

var G__24020 = args24018.length;
switch (G__24020) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24018.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24025 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24025);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24025,ret){
return (function (){
return fn1.call(null,val_24025);
});})(val_24025,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args24026 = [];
var len__22336__auto___24029 = arguments.length;
var i__22337__auto___24030 = (0);
while(true){
if((i__22337__auto___24030 < len__22336__auto___24029)){
args24026.push((arguments[i__22337__auto___24030]));

var G__24031 = (i__22337__auto___24030 + (1));
i__22337__auto___24030 = G__24031;
continue;
} else {
}
break;
}

var G__24028 = args24026.length;
switch (G__24028) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24026.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__22181__auto___24033 = n;
var x_24034 = (0);
while(true){
if((x_24034 < n__22181__auto___24033)){
(a[x_24034] = (0));

var G__24035 = (x_24034 + (1));
x_24034 = G__24035;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24036 = (i + (1));
i = G__24036;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24040 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24040 = (function (alt_flag,flag,meta24041){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24041 = meta24041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24042,meta24041__$1){
var self__ = this;
var _24042__$1 = this;
return (new cljs.core.async.t_cljs$core$async24040(self__.alt_flag,self__.flag,meta24041__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24040.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24042){
var self__ = this;
var _24042__$1 = this;
return self__.meta24041;
});})(flag))
;

cljs.core.async.t_cljs$core$async24040.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24040.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24040.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24040.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24040.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24041","meta24041",-868830332,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24040.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24040.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24040";

cljs.core.async.t_cljs$core$async24040.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__21876__auto__,writer__21877__auto__,opt__21878__auto__){
return cljs.core._write.call(null,writer__21877__auto__,"cljs.core.async/t_cljs$core$async24040");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24040 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24040(alt_flag__$1,flag__$1,meta24041){
return (new cljs.core.async.t_cljs$core$async24040(alt_flag__$1,flag__$1,meta24041));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24040(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24046 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24046 = (function (alt_handler,flag,cb,meta24047){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24047 = meta24047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24048,meta24047__$1){
var self__ = this;
var _24048__$1 = this;
return (new cljs.core.async.t_cljs$core$async24046(self__.alt_handler,self__.flag,self__.cb,meta24047__$1));
});

cljs.core.async.t_cljs$core$async24046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24048){
var self__ = this;
var _24048__$1 = this;
return self__.meta24047;
});

cljs.core.async.t_cljs$core$async24046.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24046.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24046.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24046.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24046.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24047","meta24047",847904424,null)], null);
});

cljs.core.async.t_cljs$core$async24046.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24046";

cljs.core.async.t_cljs$core$async24046.cljs$lang$ctorPrWriter = (function (this__21876__auto__,writer__21877__auto__,opt__21878__auto__){
return cljs.core._write.call(null,writer__21877__auto__,"cljs.core.async/t_cljs$core$async24046");
});

cljs.core.async.__GT_t_cljs$core$async24046 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24046(alt_handler__$1,flag__$1,cb__$1,meta24047){
return (new cljs.core.async.t_cljs$core$async24046(alt_handler__$1,flag__$1,cb__$1,meta24047));
});

}

return (new cljs.core.async.t_cljs$core$async24046(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24049_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24049_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24050_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24050_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21278__auto__ = wport;
if(cljs.core.truth_(or__21278__auto__)){
return or__21278__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24051 = (i + (1));
i = G__24051;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21278__auto__ = ret;
if(cljs.core.truth_(or__21278__auto__)){
return or__21278__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__21266__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21266__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21266__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__22343__auto__ = [];
var len__22336__auto___24057 = arguments.length;
var i__22337__auto___24058 = (0);
while(true){
if((i__22337__auto___24058 < len__22336__auto___24057)){
args__22343__auto__.push((arguments[i__22337__auto___24058]));

var G__24059 = (i__22337__auto___24058 + (1));
i__22337__auto___24058 = G__24059;
continue;
} else {
}
break;
}

var argseq__22344__auto__ = ((((1) < args__22343__auto__.length))?(new cljs.core.IndexedSeq(args__22343__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22344__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24054){
var map__24055 = p__24054;
var map__24055__$1 = ((((!((map__24055 == null)))?((((map__24055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24055):map__24055);
var opts = map__24055__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24052){
var G__24053 = cljs.core.first.call(null,seq24052);
var seq24052__$1 = cljs.core.next.call(null,seq24052);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24053,seq24052__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args24060 = [];
var len__22336__auto___24110 = arguments.length;
var i__22337__auto___24111 = (0);
while(true){
if((i__22337__auto___24111 < len__22336__auto___24110)){
args24060.push((arguments[i__22337__auto___24111]));

var G__24112 = (i__22337__auto___24111 + (1));
i__22337__auto___24111 = G__24112;
continue;
} else {
}
break;
}

var G__24062 = args24060.length;
switch (G__24062) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24060.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23947__auto___24114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto___24114){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto___24114){
return (function (state_24086){
var state_val_24087 = (state_24086[(1)]);
if((state_val_24087 === (7))){
var inst_24082 = (state_24086[(2)]);
var state_24086__$1 = state_24086;
var statearr_24088_24115 = state_24086__$1;
(statearr_24088_24115[(2)] = inst_24082);

(statearr_24088_24115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24087 === (1))){
var state_24086__$1 = state_24086;
var statearr_24089_24116 = state_24086__$1;
(statearr_24089_24116[(2)] = null);

(statearr_24089_24116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24087 === (4))){
var inst_24065 = (state_24086[(7)]);
var inst_24065__$1 = (state_24086[(2)]);
var inst_24066 = (inst_24065__$1 == null);
var state_24086__$1 = (function (){var statearr_24090 = state_24086;
(statearr_24090[(7)] = inst_24065__$1);

return statearr_24090;
})();
if(cljs.core.truth_(inst_24066)){
var statearr_24091_24117 = state_24086__$1;
(statearr_24091_24117[(1)] = (5));

} else {
var statearr_24092_24118 = state_24086__$1;
(statearr_24092_24118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24087 === (13))){
var state_24086__$1 = state_24086;
var statearr_24093_24119 = state_24086__$1;
(statearr_24093_24119[(2)] = null);

(statearr_24093_24119[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24087 === (6))){
var inst_24065 = (state_24086[(7)]);
var state_24086__$1 = state_24086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24086__$1,(11),to,inst_24065);
} else {
if((state_val_24087 === (3))){
var inst_24084 = (state_24086[(2)]);
var state_24086__$1 = state_24086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24086__$1,inst_24084);
} else {
if((state_val_24087 === (12))){
var state_24086__$1 = state_24086;
var statearr_24094_24120 = state_24086__$1;
(statearr_24094_24120[(2)] = null);

(statearr_24094_24120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24087 === (2))){
var state_24086__$1 = state_24086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24086__$1,(4),from);
} else {
if((state_val_24087 === (11))){
var inst_24075 = (state_24086[(2)]);
var state_24086__$1 = state_24086;
if(cljs.core.truth_(inst_24075)){
var statearr_24095_24121 = state_24086__$1;
(statearr_24095_24121[(1)] = (12));

} else {
var statearr_24096_24122 = state_24086__$1;
(statearr_24096_24122[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24087 === (9))){
var state_24086__$1 = state_24086;
var statearr_24097_24123 = state_24086__$1;
(statearr_24097_24123[(2)] = null);

(statearr_24097_24123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24087 === (5))){
var state_24086__$1 = state_24086;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24098_24124 = state_24086__$1;
(statearr_24098_24124[(1)] = (8));

} else {
var statearr_24099_24125 = state_24086__$1;
(statearr_24099_24125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24087 === (14))){
var inst_24080 = (state_24086[(2)]);
var state_24086__$1 = state_24086;
var statearr_24100_24126 = state_24086__$1;
(statearr_24100_24126[(2)] = inst_24080);

(statearr_24100_24126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24087 === (10))){
var inst_24072 = (state_24086[(2)]);
var state_24086__$1 = state_24086;
var statearr_24101_24127 = state_24086__$1;
(statearr_24101_24127[(2)] = inst_24072);

(statearr_24101_24127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24087 === (8))){
var inst_24069 = cljs.core.async.close_BANG_.call(null,to);
var state_24086__$1 = state_24086;
var statearr_24102_24128 = state_24086__$1;
(statearr_24102_24128[(2)] = inst_24069);

(statearr_24102_24128[(1)] = (10));


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
});})(c__23947__auto___24114))
;
return ((function (switch__23835__auto__,c__23947__auto___24114){
return (function() {
var cljs$core$async$state_machine__23836__auto__ = null;
var cljs$core$async$state_machine__23836__auto____0 = (function (){
var statearr_24106 = [null,null,null,null,null,null,null,null];
(statearr_24106[(0)] = cljs$core$async$state_machine__23836__auto__);

(statearr_24106[(1)] = (1));

return statearr_24106;
});
var cljs$core$async$state_machine__23836__auto____1 = (function (state_24086){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_24086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e24107){if((e24107 instanceof Object)){
var ex__23839__auto__ = e24107;
var statearr_24108_24129 = state_24086;
(statearr_24108_24129[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24130 = state_24086;
state_24086 = G__24130;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
cljs$core$async$state_machine__23836__auto__ = function(state_24086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23836__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23836__auto____1.call(this,state_24086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23836__auto____0;
cljs$core$async$state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23836__auto____1;
return cljs$core$async$state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto___24114))
})();
var state__23949__auto__ = (function (){var statearr_24109 = f__23948__auto__.call(null);
(statearr_24109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto___24114);

return statearr_24109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto___24114))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24314){
var vec__24315 = p__24314;
var v = cljs.core.nth.call(null,vec__24315,(0),null);
var p = cljs.core.nth.call(null,vec__24315,(1),null);
var job = vec__24315;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23947__auto___24497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto___24497,res,vec__24315,v,p,job,jobs,results){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto___24497,res,vec__24315,v,p,job,jobs,results){
return (function (state_24320){
var state_val_24321 = (state_24320[(1)]);
if((state_val_24321 === (1))){
var state_24320__$1 = state_24320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24320__$1,(2),res,v);
} else {
if((state_val_24321 === (2))){
var inst_24317 = (state_24320[(2)]);
var inst_24318 = cljs.core.async.close_BANG_.call(null,res);
var state_24320__$1 = (function (){var statearr_24322 = state_24320;
(statearr_24322[(7)] = inst_24317);

return statearr_24322;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24320__$1,inst_24318);
} else {
return null;
}
}
});})(c__23947__auto___24497,res,vec__24315,v,p,job,jobs,results))
;
return ((function (switch__23835__auto__,c__23947__auto___24497,res,vec__24315,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____0 = (function (){
var statearr_24326 = [null,null,null,null,null,null,null,null];
(statearr_24326[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__);

(statearr_24326[(1)] = (1));

return statearr_24326;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____1 = (function (state_24320){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_24320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e24327){if((e24327 instanceof Object)){
var ex__23839__auto__ = e24327;
var statearr_24328_24498 = state_24320;
(statearr_24328_24498[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24499 = state_24320;
state_24320 = G__24499;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__ = function(state_24320){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____1.call(this,state_24320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto___24497,res,vec__24315,v,p,job,jobs,results))
})();
var state__23949__auto__ = (function (){var statearr_24329 = f__23948__auto__.call(null);
(statearr_24329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto___24497);

return statearr_24329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto___24497,res,vec__24315,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24330){
var vec__24331 = p__24330;
var v = cljs.core.nth.call(null,vec__24331,(0),null);
var p = cljs.core.nth.call(null,vec__24331,(1),null);
var job = vec__24331;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__22181__auto___24500 = n;
var __24501 = (0);
while(true){
if((__24501 < n__22181__auto___24500)){
var G__24332_24502 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24332_24502) {
case "compute":
var c__23947__auto___24504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24501,c__23947__auto___24504,G__24332_24502,n__22181__auto___24500,jobs,results,process,async){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (__24501,c__23947__auto___24504,G__24332_24502,n__22181__auto___24500,jobs,results,process,async){
return (function (state_24345){
var state_val_24346 = (state_24345[(1)]);
if((state_val_24346 === (1))){
var state_24345__$1 = state_24345;
var statearr_24347_24505 = state_24345__$1;
(statearr_24347_24505[(2)] = null);

(statearr_24347_24505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24346 === (2))){
var state_24345__$1 = state_24345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24345__$1,(4),jobs);
} else {
if((state_val_24346 === (3))){
var inst_24343 = (state_24345[(2)]);
var state_24345__$1 = state_24345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24345__$1,inst_24343);
} else {
if((state_val_24346 === (4))){
var inst_24335 = (state_24345[(2)]);
var inst_24336 = process.call(null,inst_24335);
var state_24345__$1 = state_24345;
if(cljs.core.truth_(inst_24336)){
var statearr_24348_24506 = state_24345__$1;
(statearr_24348_24506[(1)] = (5));

} else {
var statearr_24349_24507 = state_24345__$1;
(statearr_24349_24507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24346 === (5))){
var state_24345__$1 = state_24345;
var statearr_24350_24508 = state_24345__$1;
(statearr_24350_24508[(2)] = null);

(statearr_24350_24508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24346 === (6))){
var state_24345__$1 = state_24345;
var statearr_24351_24509 = state_24345__$1;
(statearr_24351_24509[(2)] = null);

(statearr_24351_24509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24346 === (7))){
var inst_24341 = (state_24345[(2)]);
var state_24345__$1 = state_24345;
var statearr_24352_24510 = state_24345__$1;
(statearr_24352_24510[(2)] = inst_24341);

(statearr_24352_24510[(1)] = (3));


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
});})(__24501,c__23947__auto___24504,G__24332_24502,n__22181__auto___24500,jobs,results,process,async))
;
return ((function (__24501,switch__23835__auto__,c__23947__auto___24504,G__24332_24502,n__22181__auto___24500,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____0 = (function (){
var statearr_24356 = [null,null,null,null,null,null,null];
(statearr_24356[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__);

(statearr_24356[(1)] = (1));

return statearr_24356;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____1 = (function (state_24345){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_24345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e24357){if((e24357 instanceof Object)){
var ex__23839__auto__ = e24357;
var statearr_24358_24511 = state_24345;
(statearr_24358_24511[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24512 = state_24345;
state_24345 = G__24512;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__ = function(state_24345){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____1.call(this,state_24345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__;
})()
;})(__24501,switch__23835__auto__,c__23947__auto___24504,G__24332_24502,n__22181__auto___24500,jobs,results,process,async))
})();
var state__23949__auto__ = (function (){var statearr_24359 = f__23948__auto__.call(null);
(statearr_24359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto___24504);

return statearr_24359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(__24501,c__23947__auto___24504,G__24332_24502,n__22181__auto___24500,jobs,results,process,async))
);


break;
case "async":
var c__23947__auto___24513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24501,c__23947__auto___24513,G__24332_24502,n__22181__auto___24500,jobs,results,process,async){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (__24501,c__23947__auto___24513,G__24332_24502,n__22181__auto___24500,jobs,results,process,async){
return (function (state_24372){
var state_val_24373 = (state_24372[(1)]);
if((state_val_24373 === (1))){
var state_24372__$1 = state_24372;
var statearr_24374_24514 = state_24372__$1;
(statearr_24374_24514[(2)] = null);

(statearr_24374_24514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (2))){
var state_24372__$1 = state_24372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24372__$1,(4),jobs);
} else {
if((state_val_24373 === (3))){
var inst_24370 = (state_24372[(2)]);
var state_24372__$1 = state_24372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24372__$1,inst_24370);
} else {
if((state_val_24373 === (4))){
var inst_24362 = (state_24372[(2)]);
var inst_24363 = async.call(null,inst_24362);
var state_24372__$1 = state_24372;
if(cljs.core.truth_(inst_24363)){
var statearr_24375_24515 = state_24372__$1;
(statearr_24375_24515[(1)] = (5));

} else {
var statearr_24376_24516 = state_24372__$1;
(statearr_24376_24516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (5))){
var state_24372__$1 = state_24372;
var statearr_24377_24517 = state_24372__$1;
(statearr_24377_24517[(2)] = null);

(statearr_24377_24517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (6))){
var state_24372__$1 = state_24372;
var statearr_24378_24518 = state_24372__$1;
(statearr_24378_24518[(2)] = null);

(statearr_24378_24518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (7))){
var inst_24368 = (state_24372[(2)]);
var state_24372__$1 = state_24372;
var statearr_24379_24519 = state_24372__$1;
(statearr_24379_24519[(2)] = inst_24368);

(statearr_24379_24519[(1)] = (3));


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
});})(__24501,c__23947__auto___24513,G__24332_24502,n__22181__auto___24500,jobs,results,process,async))
;
return ((function (__24501,switch__23835__auto__,c__23947__auto___24513,G__24332_24502,n__22181__auto___24500,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____0 = (function (){
var statearr_24383 = [null,null,null,null,null,null,null];
(statearr_24383[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__);

(statearr_24383[(1)] = (1));

return statearr_24383;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____1 = (function (state_24372){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_24372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e24384){if((e24384 instanceof Object)){
var ex__23839__auto__ = e24384;
var statearr_24385_24520 = state_24372;
(statearr_24385_24520[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24521 = state_24372;
state_24372 = G__24521;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__ = function(state_24372){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____1.call(this,state_24372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__;
})()
;})(__24501,switch__23835__auto__,c__23947__auto___24513,G__24332_24502,n__22181__auto___24500,jobs,results,process,async))
})();
var state__23949__auto__ = (function (){var statearr_24386 = f__23948__auto__.call(null);
(statearr_24386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto___24513);

return statearr_24386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(__24501,c__23947__auto___24513,G__24332_24502,n__22181__auto___24500,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24522 = (__24501 + (1));
__24501 = G__24522;
continue;
} else {
}
break;
}

var c__23947__auto___24523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto___24523,jobs,results,process,async){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto___24523,jobs,results,process,async){
return (function (state_24408){
var state_val_24409 = (state_24408[(1)]);
if((state_val_24409 === (1))){
var state_24408__$1 = state_24408;
var statearr_24410_24524 = state_24408__$1;
(statearr_24410_24524[(2)] = null);

(statearr_24410_24524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (2))){
var state_24408__$1 = state_24408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24408__$1,(4),from);
} else {
if((state_val_24409 === (3))){
var inst_24406 = (state_24408[(2)]);
var state_24408__$1 = state_24408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24408__$1,inst_24406);
} else {
if((state_val_24409 === (4))){
var inst_24389 = (state_24408[(7)]);
var inst_24389__$1 = (state_24408[(2)]);
var inst_24390 = (inst_24389__$1 == null);
var state_24408__$1 = (function (){var statearr_24411 = state_24408;
(statearr_24411[(7)] = inst_24389__$1);

return statearr_24411;
})();
if(cljs.core.truth_(inst_24390)){
var statearr_24412_24525 = state_24408__$1;
(statearr_24412_24525[(1)] = (5));

} else {
var statearr_24413_24526 = state_24408__$1;
(statearr_24413_24526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (5))){
var inst_24392 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24408__$1 = state_24408;
var statearr_24414_24527 = state_24408__$1;
(statearr_24414_24527[(2)] = inst_24392);

(statearr_24414_24527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (6))){
var inst_24389 = (state_24408[(7)]);
var inst_24394 = (state_24408[(8)]);
var inst_24394__$1 = cljs.core.async.chan.call(null,(1));
var inst_24395 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24396 = [inst_24389,inst_24394__$1];
var inst_24397 = (new cljs.core.PersistentVector(null,2,(5),inst_24395,inst_24396,null));
var state_24408__$1 = (function (){var statearr_24415 = state_24408;
(statearr_24415[(8)] = inst_24394__$1);

return statearr_24415;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24408__$1,(8),jobs,inst_24397);
} else {
if((state_val_24409 === (7))){
var inst_24404 = (state_24408[(2)]);
var state_24408__$1 = state_24408;
var statearr_24416_24528 = state_24408__$1;
(statearr_24416_24528[(2)] = inst_24404);

(statearr_24416_24528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (8))){
var inst_24394 = (state_24408[(8)]);
var inst_24399 = (state_24408[(2)]);
var state_24408__$1 = (function (){var statearr_24417 = state_24408;
(statearr_24417[(9)] = inst_24399);

return statearr_24417;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24408__$1,(9),results,inst_24394);
} else {
if((state_val_24409 === (9))){
var inst_24401 = (state_24408[(2)]);
var state_24408__$1 = (function (){var statearr_24418 = state_24408;
(statearr_24418[(10)] = inst_24401);

return statearr_24418;
})();
var statearr_24419_24529 = state_24408__$1;
(statearr_24419_24529[(2)] = null);

(statearr_24419_24529[(1)] = (2));


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
});})(c__23947__auto___24523,jobs,results,process,async))
;
return ((function (switch__23835__auto__,c__23947__auto___24523,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____0 = (function (){
var statearr_24423 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24423[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__);

(statearr_24423[(1)] = (1));

return statearr_24423;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____1 = (function (state_24408){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_24408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e24424){if((e24424 instanceof Object)){
var ex__23839__auto__ = e24424;
var statearr_24425_24530 = state_24408;
(statearr_24425_24530[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24531 = state_24408;
state_24408 = G__24531;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__ = function(state_24408){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____1.call(this,state_24408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto___24523,jobs,results,process,async))
})();
var state__23949__auto__ = (function (){var statearr_24426 = f__23948__auto__.call(null);
(statearr_24426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto___24523);

return statearr_24426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto___24523,jobs,results,process,async))
);


var c__23947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto__,jobs,results,process,async){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto__,jobs,results,process,async){
return (function (state_24464){
var state_val_24465 = (state_24464[(1)]);
if((state_val_24465 === (7))){
var inst_24460 = (state_24464[(2)]);
var state_24464__$1 = state_24464;
var statearr_24466_24532 = state_24464__$1;
(statearr_24466_24532[(2)] = inst_24460);

(statearr_24466_24532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (20))){
var state_24464__$1 = state_24464;
var statearr_24467_24533 = state_24464__$1;
(statearr_24467_24533[(2)] = null);

(statearr_24467_24533[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (1))){
var state_24464__$1 = state_24464;
var statearr_24468_24534 = state_24464__$1;
(statearr_24468_24534[(2)] = null);

(statearr_24468_24534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (4))){
var inst_24429 = (state_24464[(7)]);
var inst_24429__$1 = (state_24464[(2)]);
var inst_24430 = (inst_24429__$1 == null);
var state_24464__$1 = (function (){var statearr_24469 = state_24464;
(statearr_24469[(7)] = inst_24429__$1);

return statearr_24469;
})();
if(cljs.core.truth_(inst_24430)){
var statearr_24470_24535 = state_24464__$1;
(statearr_24470_24535[(1)] = (5));

} else {
var statearr_24471_24536 = state_24464__$1;
(statearr_24471_24536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (15))){
var inst_24442 = (state_24464[(8)]);
var state_24464__$1 = state_24464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24464__$1,(18),to,inst_24442);
} else {
if((state_val_24465 === (21))){
var inst_24455 = (state_24464[(2)]);
var state_24464__$1 = state_24464;
var statearr_24472_24537 = state_24464__$1;
(statearr_24472_24537[(2)] = inst_24455);

(statearr_24472_24537[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (13))){
var inst_24457 = (state_24464[(2)]);
var state_24464__$1 = (function (){var statearr_24473 = state_24464;
(statearr_24473[(9)] = inst_24457);

return statearr_24473;
})();
var statearr_24474_24538 = state_24464__$1;
(statearr_24474_24538[(2)] = null);

(statearr_24474_24538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (6))){
var inst_24429 = (state_24464[(7)]);
var state_24464__$1 = state_24464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24464__$1,(11),inst_24429);
} else {
if((state_val_24465 === (17))){
var inst_24450 = (state_24464[(2)]);
var state_24464__$1 = state_24464;
if(cljs.core.truth_(inst_24450)){
var statearr_24475_24539 = state_24464__$1;
(statearr_24475_24539[(1)] = (19));

} else {
var statearr_24476_24540 = state_24464__$1;
(statearr_24476_24540[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (3))){
var inst_24462 = (state_24464[(2)]);
var state_24464__$1 = state_24464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24464__$1,inst_24462);
} else {
if((state_val_24465 === (12))){
var inst_24439 = (state_24464[(10)]);
var state_24464__$1 = state_24464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24464__$1,(14),inst_24439);
} else {
if((state_val_24465 === (2))){
var state_24464__$1 = state_24464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24464__$1,(4),results);
} else {
if((state_val_24465 === (19))){
var state_24464__$1 = state_24464;
var statearr_24477_24541 = state_24464__$1;
(statearr_24477_24541[(2)] = null);

(statearr_24477_24541[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (11))){
var inst_24439 = (state_24464[(2)]);
var state_24464__$1 = (function (){var statearr_24478 = state_24464;
(statearr_24478[(10)] = inst_24439);

return statearr_24478;
})();
var statearr_24479_24542 = state_24464__$1;
(statearr_24479_24542[(2)] = null);

(statearr_24479_24542[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (9))){
var state_24464__$1 = state_24464;
var statearr_24480_24543 = state_24464__$1;
(statearr_24480_24543[(2)] = null);

(statearr_24480_24543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (5))){
var state_24464__$1 = state_24464;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24481_24544 = state_24464__$1;
(statearr_24481_24544[(1)] = (8));

} else {
var statearr_24482_24545 = state_24464__$1;
(statearr_24482_24545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (14))){
var inst_24444 = (state_24464[(11)]);
var inst_24442 = (state_24464[(8)]);
var inst_24442__$1 = (state_24464[(2)]);
var inst_24443 = (inst_24442__$1 == null);
var inst_24444__$1 = cljs.core.not.call(null,inst_24443);
var state_24464__$1 = (function (){var statearr_24483 = state_24464;
(statearr_24483[(11)] = inst_24444__$1);

(statearr_24483[(8)] = inst_24442__$1);

return statearr_24483;
})();
if(inst_24444__$1){
var statearr_24484_24546 = state_24464__$1;
(statearr_24484_24546[(1)] = (15));

} else {
var statearr_24485_24547 = state_24464__$1;
(statearr_24485_24547[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (16))){
var inst_24444 = (state_24464[(11)]);
var state_24464__$1 = state_24464;
var statearr_24486_24548 = state_24464__$1;
(statearr_24486_24548[(2)] = inst_24444);

(statearr_24486_24548[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (10))){
var inst_24436 = (state_24464[(2)]);
var state_24464__$1 = state_24464;
var statearr_24487_24549 = state_24464__$1;
(statearr_24487_24549[(2)] = inst_24436);

(statearr_24487_24549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (18))){
var inst_24447 = (state_24464[(2)]);
var state_24464__$1 = state_24464;
var statearr_24488_24550 = state_24464__$1;
(statearr_24488_24550[(2)] = inst_24447);

(statearr_24488_24550[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24465 === (8))){
var inst_24433 = cljs.core.async.close_BANG_.call(null,to);
var state_24464__$1 = state_24464;
var statearr_24489_24551 = state_24464__$1;
(statearr_24489_24551[(2)] = inst_24433);

(statearr_24489_24551[(1)] = (10));


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
});})(c__23947__auto__,jobs,results,process,async))
;
return ((function (switch__23835__auto__,c__23947__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____0 = (function (){
var statearr_24493 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24493[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__);

(statearr_24493[(1)] = (1));

return statearr_24493;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____1 = (function (state_24464){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_24464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e24494){if((e24494 instanceof Object)){
var ex__23839__auto__ = e24494;
var statearr_24495_24552 = state_24464;
(statearr_24495_24552[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24553 = state_24464;
state_24464 = G__24553;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__ = function(state_24464){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____1.call(this,state_24464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23836__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto__,jobs,results,process,async))
})();
var state__23949__auto__ = (function (){var statearr_24496 = f__23948__auto__.call(null);
(statearr_24496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto__);

return statearr_24496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto__,jobs,results,process,async))
);

return c__23947__auto__;
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
var args24554 = [];
var len__22336__auto___24557 = arguments.length;
var i__22337__auto___24558 = (0);
while(true){
if((i__22337__auto___24558 < len__22336__auto___24557)){
args24554.push((arguments[i__22337__auto___24558]));

var G__24559 = (i__22337__auto___24558 + (1));
i__22337__auto___24558 = G__24559;
continue;
} else {
}
break;
}

var G__24556 = args24554.length;
switch (G__24556) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24554.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
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
var args24561 = [];
var len__22336__auto___24564 = arguments.length;
var i__22337__auto___24565 = (0);
while(true){
if((i__22337__auto___24565 < len__22336__auto___24564)){
args24561.push((arguments[i__22337__auto___24565]));

var G__24566 = (i__22337__auto___24565 + (1));
i__22337__auto___24565 = G__24566;
continue;
} else {
}
break;
}

var G__24563 = args24561.length;
switch (G__24563) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24561.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
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
var args24568 = [];
var len__22336__auto___24621 = arguments.length;
var i__22337__auto___24622 = (0);
while(true){
if((i__22337__auto___24622 < len__22336__auto___24621)){
args24568.push((arguments[i__22337__auto___24622]));

var G__24623 = (i__22337__auto___24622 + (1));
i__22337__auto___24622 = G__24623;
continue;
} else {
}
break;
}

var G__24570 = args24568.length;
switch (G__24570) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24568.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23947__auto___24625 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto___24625,tc,fc){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto___24625,tc,fc){
return (function (state_24596){
var state_val_24597 = (state_24596[(1)]);
if((state_val_24597 === (7))){
var inst_24592 = (state_24596[(2)]);
var state_24596__$1 = state_24596;
var statearr_24598_24626 = state_24596__$1;
(statearr_24598_24626[(2)] = inst_24592);

(statearr_24598_24626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (1))){
var state_24596__$1 = state_24596;
var statearr_24599_24627 = state_24596__$1;
(statearr_24599_24627[(2)] = null);

(statearr_24599_24627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (4))){
var inst_24573 = (state_24596[(7)]);
var inst_24573__$1 = (state_24596[(2)]);
var inst_24574 = (inst_24573__$1 == null);
var state_24596__$1 = (function (){var statearr_24600 = state_24596;
(statearr_24600[(7)] = inst_24573__$1);

return statearr_24600;
})();
if(cljs.core.truth_(inst_24574)){
var statearr_24601_24628 = state_24596__$1;
(statearr_24601_24628[(1)] = (5));

} else {
var statearr_24602_24629 = state_24596__$1;
(statearr_24602_24629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (13))){
var state_24596__$1 = state_24596;
var statearr_24603_24630 = state_24596__$1;
(statearr_24603_24630[(2)] = null);

(statearr_24603_24630[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (6))){
var inst_24573 = (state_24596[(7)]);
var inst_24579 = p.call(null,inst_24573);
var state_24596__$1 = state_24596;
if(cljs.core.truth_(inst_24579)){
var statearr_24604_24631 = state_24596__$1;
(statearr_24604_24631[(1)] = (9));

} else {
var statearr_24605_24632 = state_24596__$1;
(statearr_24605_24632[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (3))){
var inst_24594 = (state_24596[(2)]);
var state_24596__$1 = state_24596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24596__$1,inst_24594);
} else {
if((state_val_24597 === (12))){
var state_24596__$1 = state_24596;
var statearr_24606_24633 = state_24596__$1;
(statearr_24606_24633[(2)] = null);

(statearr_24606_24633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (2))){
var state_24596__$1 = state_24596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24596__$1,(4),ch);
} else {
if((state_val_24597 === (11))){
var inst_24573 = (state_24596[(7)]);
var inst_24583 = (state_24596[(2)]);
var state_24596__$1 = state_24596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24596__$1,(8),inst_24583,inst_24573);
} else {
if((state_val_24597 === (9))){
var state_24596__$1 = state_24596;
var statearr_24607_24634 = state_24596__$1;
(statearr_24607_24634[(2)] = tc);

(statearr_24607_24634[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (5))){
var inst_24576 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24577 = cljs.core.async.close_BANG_.call(null,fc);
var state_24596__$1 = (function (){var statearr_24608 = state_24596;
(statearr_24608[(8)] = inst_24576);

return statearr_24608;
})();
var statearr_24609_24635 = state_24596__$1;
(statearr_24609_24635[(2)] = inst_24577);

(statearr_24609_24635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (14))){
var inst_24590 = (state_24596[(2)]);
var state_24596__$1 = state_24596;
var statearr_24610_24636 = state_24596__$1;
(statearr_24610_24636[(2)] = inst_24590);

(statearr_24610_24636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (10))){
var state_24596__$1 = state_24596;
var statearr_24611_24637 = state_24596__$1;
(statearr_24611_24637[(2)] = fc);

(statearr_24611_24637[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24597 === (8))){
var inst_24585 = (state_24596[(2)]);
var state_24596__$1 = state_24596;
if(cljs.core.truth_(inst_24585)){
var statearr_24612_24638 = state_24596__$1;
(statearr_24612_24638[(1)] = (12));

} else {
var statearr_24613_24639 = state_24596__$1;
(statearr_24613_24639[(1)] = (13));

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
});})(c__23947__auto___24625,tc,fc))
;
return ((function (switch__23835__auto__,c__23947__auto___24625,tc,fc){
return (function() {
var cljs$core$async$state_machine__23836__auto__ = null;
var cljs$core$async$state_machine__23836__auto____0 = (function (){
var statearr_24617 = [null,null,null,null,null,null,null,null,null];
(statearr_24617[(0)] = cljs$core$async$state_machine__23836__auto__);

(statearr_24617[(1)] = (1));

return statearr_24617;
});
var cljs$core$async$state_machine__23836__auto____1 = (function (state_24596){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_24596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e24618){if((e24618 instanceof Object)){
var ex__23839__auto__ = e24618;
var statearr_24619_24640 = state_24596;
(statearr_24619_24640[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24641 = state_24596;
state_24596 = G__24641;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
cljs$core$async$state_machine__23836__auto__ = function(state_24596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23836__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23836__auto____1.call(this,state_24596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23836__auto____0;
cljs$core$async$state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23836__auto____1;
return cljs$core$async$state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto___24625,tc,fc))
})();
var state__23949__auto__ = (function (){var statearr_24620 = f__23948__auto__.call(null);
(statearr_24620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto___24625);

return statearr_24620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto___24625,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto__){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto__){
return (function (state_24705){
var state_val_24706 = (state_24705[(1)]);
if((state_val_24706 === (7))){
var inst_24701 = (state_24705[(2)]);
var state_24705__$1 = state_24705;
var statearr_24707_24728 = state_24705__$1;
(statearr_24707_24728[(2)] = inst_24701);

(statearr_24707_24728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (1))){
var inst_24685 = init;
var state_24705__$1 = (function (){var statearr_24708 = state_24705;
(statearr_24708[(7)] = inst_24685);

return statearr_24708;
})();
var statearr_24709_24729 = state_24705__$1;
(statearr_24709_24729[(2)] = null);

(statearr_24709_24729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (4))){
var inst_24688 = (state_24705[(8)]);
var inst_24688__$1 = (state_24705[(2)]);
var inst_24689 = (inst_24688__$1 == null);
var state_24705__$1 = (function (){var statearr_24710 = state_24705;
(statearr_24710[(8)] = inst_24688__$1);

return statearr_24710;
})();
if(cljs.core.truth_(inst_24689)){
var statearr_24711_24730 = state_24705__$1;
(statearr_24711_24730[(1)] = (5));

} else {
var statearr_24712_24731 = state_24705__$1;
(statearr_24712_24731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (6))){
var inst_24688 = (state_24705[(8)]);
var inst_24685 = (state_24705[(7)]);
var inst_24692 = (state_24705[(9)]);
var inst_24692__$1 = f.call(null,inst_24685,inst_24688);
var inst_24693 = cljs.core.reduced_QMARK_.call(null,inst_24692__$1);
var state_24705__$1 = (function (){var statearr_24713 = state_24705;
(statearr_24713[(9)] = inst_24692__$1);

return statearr_24713;
})();
if(inst_24693){
var statearr_24714_24732 = state_24705__$1;
(statearr_24714_24732[(1)] = (8));

} else {
var statearr_24715_24733 = state_24705__$1;
(statearr_24715_24733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (3))){
var inst_24703 = (state_24705[(2)]);
var state_24705__$1 = state_24705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24705__$1,inst_24703);
} else {
if((state_val_24706 === (2))){
var state_24705__$1 = state_24705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24705__$1,(4),ch);
} else {
if((state_val_24706 === (9))){
var inst_24692 = (state_24705[(9)]);
var inst_24685 = inst_24692;
var state_24705__$1 = (function (){var statearr_24716 = state_24705;
(statearr_24716[(7)] = inst_24685);

return statearr_24716;
})();
var statearr_24717_24734 = state_24705__$1;
(statearr_24717_24734[(2)] = null);

(statearr_24717_24734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (5))){
var inst_24685 = (state_24705[(7)]);
var state_24705__$1 = state_24705;
var statearr_24718_24735 = state_24705__$1;
(statearr_24718_24735[(2)] = inst_24685);

(statearr_24718_24735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (10))){
var inst_24699 = (state_24705[(2)]);
var state_24705__$1 = state_24705;
var statearr_24719_24736 = state_24705__$1;
(statearr_24719_24736[(2)] = inst_24699);

(statearr_24719_24736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24706 === (8))){
var inst_24692 = (state_24705[(9)]);
var inst_24695 = cljs.core.deref.call(null,inst_24692);
var state_24705__$1 = state_24705;
var statearr_24720_24737 = state_24705__$1;
(statearr_24720_24737[(2)] = inst_24695);

(statearr_24720_24737[(1)] = (10));


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
});})(c__23947__auto__))
;
return ((function (switch__23835__auto__,c__23947__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23836__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23836__auto____0 = (function (){
var statearr_24724 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24724[(0)] = cljs$core$async$reduce_$_state_machine__23836__auto__);

(statearr_24724[(1)] = (1));

return statearr_24724;
});
var cljs$core$async$reduce_$_state_machine__23836__auto____1 = (function (state_24705){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_24705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e24725){if((e24725 instanceof Object)){
var ex__23839__auto__ = e24725;
var statearr_24726_24738 = state_24705;
(statearr_24726_24738[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24739 = state_24705;
state_24705 = G__24739;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23836__auto__ = function(state_24705){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23836__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23836__auto____1.call(this,state_24705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23836__auto____0;
cljs$core$async$reduce_$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23836__auto____1;
return cljs$core$async$reduce_$_state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto__))
})();
var state__23949__auto__ = (function (){var statearr_24727 = f__23948__auto__.call(null);
(statearr_24727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto__);

return statearr_24727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto__))
);

return c__23947__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args24740 = [];
var len__22336__auto___24792 = arguments.length;
var i__22337__auto___24793 = (0);
while(true){
if((i__22337__auto___24793 < len__22336__auto___24792)){
args24740.push((arguments[i__22337__auto___24793]));

var G__24794 = (i__22337__auto___24793 + (1));
i__22337__auto___24793 = G__24794;
continue;
} else {
}
break;
}

var G__24742 = args24740.length;
switch (G__24742) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24740.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto__){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto__){
return (function (state_24767){
var state_val_24768 = (state_24767[(1)]);
if((state_val_24768 === (7))){
var inst_24749 = (state_24767[(2)]);
var state_24767__$1 = state_24767;
var statearr_24769_24796 = state_24767__$1;
(statearr_24769_24796[(2)] = inst_24749);

(statearr_24769_24796[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (1))){
var inst_24743 = cljs.core.seq.call(null,coll);
var inst_24744 = inst_24743;
var state_24767__$1 = (function (){var statearr_24770 = state_24767;
(statearr_24770[(7)] = inst_24744);

return statearr_24770;
})();
var statearr_24771_24797 = state_24767__$1;
(statearr_24771_24797[(2)] = null);

(statearr_24771_24797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (4))){
var inst_24744 = (state_24767[(7)]);
var inst_24747 = cljs.core.first.call(null,inst_24744);
var state_24767__$1 = state_24767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24767__$1,(7),ch,inst_24747);
} else {
if((state_val_24768 === (13))){
var inst_24761 = (state_24767[(2)]);
var state_24767__$1 = state_24767;
var statearr_24772_24798 = state_24767__$1;
(statearr_24772_24798[(2)] = inst_24761);

(statearr_24772_24798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (6))){
var inst_24752 = (state_24767[(2)]);
var state_24767__$1 = state_24767;
if(cljs.core.truth_(inst_24752)){
var statearr_24773_24799 = state_24767__$1;
(statearr_24773_24799[(1)] = (8));

} else {
var statearr_24774_24800 = state_24767__$1;
(statearr_24774_24800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (3))){
var inst_24765 = (state_24767[(2)]);
var state_24767__$1 = state_24767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24767__$1,inst_24765);
} else {
if((state_val_24768 === (12))){
var state_24767__$1 = state_24767;
var statearr_24775_24801 = state_24767__$1;
(statearr_24775_24801[(2)] = null);

(statearr_24775_24801[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (2))){
var inst_24744 = (state_24767[(7)]);
var state_24767__$1 = state_24767;
if(cljs.core.truth_(inst_24744)){
var statearr_24776_24802 = state_24767__$1;
(statearr_24776_24802[(1)] = (4));

} else {
var statearr_24777_24803 = state_24767__$1;
(statearr_24777_24803[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (11))){
var inst_24758 = cljs.core.async.close_BANG_.call(null,ch);
var state_24767__$1 = state_24767;
var statearr_24778_24804 = state_24767__$1;
(statearr_24778_24804[(2)] = inst_24758);

(statearr_24778_24804[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (9))){
var state_24767__$1 = state_24767;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24779_24805 = state_24767__$1;
(statearr_24779_24805[(1)] = (11));

} else {
var statearr_24780_24806 = state_24767__$1;
(statearr_24780_24806[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (5))){
var inst_24744 = (state_24767[(7)]);
var state_24767__$1 = state_24767;
var statearr_24781_24807 = state_24767__$1;
(statearr_24781_24807[(2)] = inst_24744);

(statearr_24781_24807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (10))){
var inst_24763 = (state_24767[(2)]);
var state_24767__$1 = state_24767;
var statearr_24782_24808 = state_24767__$1;
(statearr_24782_24808[(2)] = inst_24763);

(statearr_24782_24808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (8))){
var inst_24744 = (state_24767[(7)]);
var inst_24754 = cljs.core.next.call(null,inst_24744);
var inst_24744__$1 = inst_24754;
var state_24767__$1 = (function (){var statearr_24783 = state_24767;
(statearr_24783[(7)] = inst_24744__$1);

return statearr_24783;
})();
var statearr_24784_24809 = state_24767__$1;
(statearr_24784_24809[(2)] = null);

(statearr_24784_24809[(1)] = (2));


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
});})(c__23947__auto__))
;
return ((function (switch__23835__auto__,c__23947__auto__){
return (function() {
var cljs$core$async$state_machine__23836__auto__ = null;
var cljs$core$async$state_machine__23836__auto____0 = (function (){
var statearr_24788 = [null,null,null,null,null,null,null,null];
(statearr_24788[(0)] = cljs$core$async$state_machine__23836__auto__);

(statearr_24788[(1)] = (1));

return statearr_24788;
});
var cljs$core$async$state_machine__23836__auto____1 = (function (state_24767){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_24767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e24789){if((e24789 instanceof Object)){
var ex__23839__auto__ = e24789;
var statearr_24790_24810 = state_24767;
(statearr_24790_24810[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24811 = state_24767;
state_24767 = G__24811;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
cljs$core$async$state_machine__23836__auto__ = function(state_24767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23836__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23836__auto____1.call(this,state_24767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23836__auto____0;
cljs$core$async$state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23836__auto____1;
return cljs$core$async$state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto__))
})();
var state__23949__auto__ = (function (){var statearr_24791 = f__23948__auto__.call(null);
(statearr_24791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto__);

return statearr_24791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto__))
);

return c__23947__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__21933__auto__ = (((_ == null))?null:_);
var m__21934__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__21933__auto__)]);
if(!((m__21934__auto__ == null))){
return m__21934__auto__.call(null,_);
} else {
var m__21934__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__21934__auto____$1 == null))){
return m__21934__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__21933__auto__ = (((m == null))?null:m);
var m__21934__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__21933__auto__)]);
if(!((m__21934__auto__ == null))){
return m__21934__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__21934__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__21934__auto____$1 == null))){
return m__21934__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__21933__auto__ = (((m == null))?null:m);
var m__21934__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__21933__auto__)]);
if(!((m__21934__auto__ == null))){
return m__21934__auto__.call(null,m,ch);
} else {
var m__21934__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__21934__auto____$1 == null))){
return m__21934__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__21933__auto__ = (((m == null))?null:m);
var m__21934__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__21933__auto__)]);
if(!((m__21934__auto__ == null))){
return m__21934__auto__.call(null,m);
} else {
var m__21934__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__21934__auto____$1 == null))){
return m__21934__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25033 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25033 = (function (mult,ch,cs,meta25034){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25034 = meta25034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25035,meta25034__$1){
var self__ = this;
var _25035__$1 = this;
return (new cljs.core.async.t_cljs$core$async25033(self__.mult,self__.ch,self__.cs,meta25034__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25033.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25035){
var self__ = this;
var _25035__$1 = this;
return self__.meta25034;
});})(cs))
;

cljs.core.async.t_cljs$core$async25033.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25033.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25033.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25033.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25033.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25033.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25033.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25034","meta25034",1672650313,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25033.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25033";

cljs.core.async.t_cljs$core$async25033.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__21876__auto__,writer__21877__auto__,opt__21878__auto__){
return cljs.core._write.call(null,writer__21877__auto__,"cljs.core.async/t_cljs$core$async25033");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25033 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25033(mult__$1,ch__$1,cs__$1,meta25034){
return (new cljs.core.async.t_cljs$core$async25033(mult__$1,ch__$1,cs__$1,meta25034));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25033(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23947__auto___25254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto___25254,cs,m,dchan,dctr,done){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto___25254,cs,m,dchan,dctr,done){
return (function (state_25166){
var state_val_25167 = (state_25166[(1)]);
if((state_val_25167 === (7))){
var inst_25162 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25168_25255 = state_25166__$1;
(statearr_25168_25255[(2)] = inst_25162);

(statearr_25168_25255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (20))){
var inst_25067 = (state_25166[(7)]);
var inst_25077 = cljs.core.first.call(null,inst_25067);
var inst_25078 = cljs.core.nth.call(null,inst_25077,(0),null);
var inst_25079 = cljs.core.nth.call(null,inst_25077,(1),null);
var state_25166__$1 = (function (){var statearr_25169 = state_25166;
(statearr_25169[(8)] = inst_25078);

return statearr_25169;
})();
if(cljs.core.truth_(inst_25079)){
var statearr_25170_25256 = state_25166__$1;
(statearr_25170_25256[(1)] = (22));

} else {
var statearr_25171_25257 = state_25166__$1;
(statearr_25171_25257[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (27))){
var inst_25114 = (state_25166[(9)]);
var inst_25107 = (state_25166[(10)]);
var inst_25109 = (state_25166[(11)]);
var inst_25038 = (state_25166[(12)]);
var inst_25114__$1 = cljs.core._nth.call(null,inst_25107,inst_25109);
var inst_25115 = cljs.core.async.put_BANG_.call(null,inst_25114__$1,inst_25038,done);
var state_25166__$1 = (function (){var statearr_25172 = state_25166;
(statearr_25172[(9)] = inst_25114__$1);

return statearr_25172;
})();
if(cljs.core.truth_(inst_25115)){
var statearr_25173_25258 = state_25166__$1;
(statearr_25173_25258[(1)] = (30));

} else {
var statearr_25174_25259 = state_25166__$1;
(statearr_25174_25259[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (1))){
var state_25166__$1 = state_25166;
var statearr_25175_25260 = state_25166__$1;
(statearr_25175_25260[(2)] = null);

(statearr_25175_25260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (24))){
var inst_25067 = (state_25166[(7)]);
var inst_25084 = (state_25166[(2)]);
var inst_25085 = cljs.core.next.call(null,inst_25067);
var inst_25047 = inst_25085;
var inst_25048 = null;
var inst_25049 = (0);
var inst_25050 = (0);
var state_25166__$1 = (function (){var statearr_25176 = state_25166;
(statearr_25176[(13)] = inst_25048);

(statearr_25176[(14)] = inst_25084);

(statearr_25176[(15)] = inst_25049);

(statearr_25176[(16)] = inst_25047);

(statearr_25176[(17)] = inst_25050);

return statearr_25176;
})();
var statearr_25177_25261 = state_25166__$1;
(statearr_25177_25261[(2)] = null);

(statearr_25177_25261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (39))){
var state_25166__$1 = state_25166;
var statearr_25181_25262 = state_25166__$1;
(statearr_25181_25262[(2)] = null);

(statearr_25181_25262[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (4))){
var inst_25038 = (state_25166[(12)]);
var inst_25038__$1 = (state_25166[(2)]);
var inst_25039 = (inst_25038__$1 == null);
var state_25166__$1 = (function (){var statearr_25182 = state_25166;
(statearr_25182[(12)] = inst_25038__$1);

return statearr_25182;
})();
if(cljs.core.truth_(inst_25039)){
var statearr_25183_25263 = state_25166__$1;
(statearr_25183_25263[(1)] = (5));

} else {
var statearr_25184_25264 = state_25166__$1;
(statearr_25184_25264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (15))){
var inst_25048 = (state_25166[(13)]);
var inst_25049 = (state_25166[(15)]);
var inst_25047 = (state_25166[(16)]);
var inst_25050 = (state_25166[(17)]);
var inst_25063 = (state_25166[(2)]);
var inst_25064 = (inst_25050 + (1));
var tmp25178 = inst_25048;
var tmp25179 = inst_25049;
var tmp25180 = inst_25047;
var inst_25047__$1 = tmp25180;
var inst_25048__$1 = tmp25178;
var inst_25049__$1 = tmp25179;
var inst_25050__$1 = inst_25064;
var state_25166__$1 = (function (){var statearr_25185 = state_25166;
(statearr_25185[(13)] = inst_25048__$1);

(statearr_25185[(15)] = inst_25049__$1);

(statearr_25185[(16)] = inst_25047__$1);

(statearr_25185[(18)] = inst_25063);

(statearr_25185[(17)] = inst_25050__$1);

return statearr_25185;
})();
var statearr_25186_25265 = state_25166__$1;
(statearr_25186_25265[(2)] = null);

(statearr_25186_25265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (21))){
var inst_25088 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25190_25266 = state_25166__$1;
(statearr_25190_25266[(2)] = inst_25088);

(statearr_25190_25266[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (31))){
var inst_25114 = (state_25166[(9)]);
var inst_25118 = done.call(null,null);
var inst_25119 = cljs.core.async.untap_STAR_.call(null,m,inst_25114);
var state_25166__$1 = (function (){var statearr_25191 = state_25166;
(statearr_25191[(19)] = inst_25118);

return statearr_25191;
})();
var statearr_25192_25267 = state_25166__$1;
(statearr_25192_25267[(2)] = inst_25119);

(statearr_25192_25267[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (32))){
var inst_25107 = (state_25166[(10)]);
var inst_25106 = (state_25166[(20)]);
var inst_25108 = (state_25166[(21)]);
var inst_25109 = (state_25166[(11)]);
var inst_25121 = (state_25166[(2)]);
var inst_25122 = (inst_25109 + (1));
var tmp25187 = inst_25107;
var tmp25188 = inst_25106;
var tmp25189 = inst_25108;
var inst_25106__$1 = tmp25188;
var inst_25107__$1 = tmp25187;
var inst_25108__$1 = tmp25189;
var inst_25109__$1 = inst_25122;
var state_25166__$1 = (function (){var statearr_25193 = state_25166;
(statearr_25193[(10)] = inst_25107__$1);

(statearr_25193[(20)] = inst_25106__$1);

(statearr_25193[(22)] = inst_25121);

(statearr_25193[(21)] = inst_25108__$1);

(statearr_25193[(11)] = inst_25109__$1);

return statearr_25193;
})();
var statearr_25194_25268 = state_25166__$1;
(statearr_25194_25268[(2)] = null);

(statearr_25194_25268[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (40))){
var inst_25134 = (state_25166[(23)]);
var inst_25138 = done.call(null,null);
var inst_25139 = cljs.core.async.untap_STAR_.call(null,m,inst_25134);
var state_25166__$1 = (function (){var statearr_25195 = state_25166;
(statearr_25195[(24)] = inst_25138);

return statearr_25195;
})();
var statearr_25196_25269 = state_25166__$1;
(statearr_25196_25269[(2)] = inst_25139);

(statearr_25196_25269[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (33))){
var inst_25125 = (state_25166[(25)]);
var inst_25127 = cljs.core.chunked_seq_QMARK_.call(null,inst_25125);
var state_25166__$1 = state_25166;
if(inst_25127){
var statearr_25197_25270 = state_25166__$1;
(statearr_25197_25270[(1)] = (36));

} else {
var statearr_25198_25271 = state_25166__$1;
(statearr_25198_25271[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (13))){
var inst_25057 = (state_25166[(26)]);
var inst_25060 = cljs.core.async.close_BANG_.call(null,inst_25057);
var state_25166__$1 = state_25166;
var statearr_25199_25272 = state_25166__$1;
(statearr_25199_25272[(2)] = inst_25060);

(statearr_25199_25272[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (22))){
var inst_25078 = (state_25166[(8)]);
var inst_25081 = cljs.core.async.close_BANG_.call(null,inst_25078);
var state_25166__$1 = state_25166;
var statearr_25200_25273 = state_25166__$1;
(statearr_25200_25273[(2)] = inst_25081);

(statearr_25200_25273[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (36))){
var inst_25125 = (state_25166[(25)]);
var inst_25129 = cljs.core.chunk_first.call(null,inst_25125);
var inst_25130 = cljs.core.chunk_rest.call(null,inst_25125);
var inst_25131 = cljs.core.count.call(null,inst_25129);
var inst_25106 = inst_25130;
var inst_25107 = inst_25129;
var inst_25108 = inst_25131;
var inst_25109 = (0);
var state_25166__$1 = (function (){var statearr_25201 = state_25166;
(statearr_25201[(10)] = inst_25107);

(statearr_25201[(20)] = inst_25106);

(statearr_25201[(21)] = inst_25108);

(statearr_25201[(11)] = inst_25109);

return statearr_25201;
})();
var statearr_25202_25274 = state_25166__$1;
(statearr_25202_25274[(2)] = null);

(statearr_25202_25274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (41))){
var inst_25125 = (state_25166[(25)]);
var inst_25141 = (state_25166[(2)]);
var inst_25142 = cljs.core.next.call(null,inst_25125);
var inst_25106 = inst_25142;
var inst_25107 = null;
var inst_25108 = (0);
var inst_25109 = (0);
var state_25166__$1 = (function (){var statearr_25203 = state_25166;
(statearr_25203[(10)] = inst_25107);

(statearr_25203[(20)] = inst_25106);

(statearr_25203[(27)] = inst_25141);

(statearr_25203[(21)] = inst_25108);

(statearr_25203[(11)] = inst_25109);

return statearr_25203;
})();
var statearr_25204_25275 = state_25166__$1;
(statearr_25204_25275[(2)] = null);

(statearr_25204_25275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (43))){
var state_25166__$1 = state_25166;
var statearr_25205_25276 = state_25166__$1;
(statearr_25205_25276[(2)] = null);

(statearr_25205_25276[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (29))){
var inst_25150 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25206_25277 = state_25166__$1;
(statearr_25206_25277[(2)] = inst_25150);

(statearr_25206_25277[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (44))){
var inst_25159 = (state_25166[(2)]);
var state_25166__$1 = (function (){var statearr_25207 = state_25166;
(statearr_25207[(28)] = inst_25159);

return statearr_25207;
})();
var statearr_25208_25278 = state_25166__$1;
(statearr_25208_25278[(2)] = null);

(statearr_25208_25278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (6))){
var inst_25098 = (state_25166[(29)]);
var inst_25097 = cljs.core.deref.call(null,cs);
var inst_25098__$1 = cljs.core.keys.call(null,inst_25097);
var inst_25099 = cljs.core.count.call(null,inst_25098__$1);
var inst_25100 = cljs.core.reset_BANG_.call(null,dctr,inst_25099);
var inst_25105 = cljs.core.seq.call(null,inst_25098__$1);
var inst_25106 = inst_25105;
var inst_25107 = null;
var inst_25108 = (0);
var inst_25109 = (0);
var state_25166__$1 = (function (){var statearr_25209 = state_25166;
(statearr_25209[(10)] = inst_25107);

(statearr_25209[(20)] = inst_25106);

(statearr_25209[(30)] = inst_25100);

(statearr_25209[(29)] = inst_25098__$1);

(statearr_25209[(21)] = inst_25108);

(statearr_25209[(11)] = inst_25109);

return statearr_25209;
})();
var statearr_25210_25279 = state_25166__$1;
(statearr_25210_25279[(2)] = null);

(statearr_25210_25279[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (28))){
var inst_25106 = (state_25166[(20)]);
var inst_25125 = (state_25166[(25)]);
var inst_25125__$1 = cljs.core.seq.call(null,inst_25106);
var state_25166__$1 = (function (){var statearr_25211 = state_25166;
(statearr_25211[(25)] = inst_25125__$1);

return statearr_25211;
})();
if(inst_25125__$1){
var statearr_25212_25280 = state_25166__$1;
(statearr_25212_25280[(1)] = (33));

} else {
var statearr_25213_25281 = state_25166__$1;
(statearr_25213_25281[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (25))){
var inst_25108 = (state_25166[(21)]);
var inst_25109 = (state_25166[(11)]);
var inst_25111 = (inst_25109 < inst_25108);
var inst_25112 = inst_25111;
var state_25166__$1 = state_25166;
if(cljs.core.truth_(inst_25112)){
var statearr_25214_25282 = state_25166__$1;
(statearr_25214_25282[(1)] = (27));

} else {
var statearr_25215_25283 = state_25166__$1;
(statearr_25215_25283[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (34))){
var state_25166__$1 = state_25166;
var statearr_25216_25284 = state_25166__$1;
(statearr_25216_25284[(2)] = null);

(statearr_25216_25284[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (17))){
var state_25166__$1 = state_25166;
var statearr_25217_25285 = state_25166__$1;
(statearr_25217_25285[(2)] = null);

(statearr_25217_25285[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (3))){
var inst_25164 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25166__$1,inst_25164);
} else {
if((state_val_25167 === (12))){
var inst_25093 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25218_25286 = state_25166__$1;
(statearr_25218_25286[(2)] = inst_25093);

(statearr_25218_25286[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (2))){
var state_25166__$1 = state_25166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25166__$1,(4),ch);
} else {
if((state_val_25167 === (23))){
var state_25166__$1 = state_25166;
var statearr_25219_25287 = state_25166__$1;
(statearr_25219_25287[(2)] = null);

(statearr_25219_25287[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (35))){
var inst_25148 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25220_25288 = state_25166__$1;
(statearr_25220_25288[(2)] = inst_25148);

(statearr_25220_25288[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (19))){
var inst_25067 = (state_25166[(7)]);
var inst_25071 = cljs.core.chunk_first.call(null,inst_25067);
var inst_25072 = cljs.core.chunk_rest.call(null,inst_25067);
var inst_25073 = cljs.core.count.call(null,inst_25071);
var inst_25047 = inst_25072;
var inst_25048 = inst_25071;
var inst_25049 = inst_25073;
var inst_25050 = (0);
var state_25166__$1 = (function (){var statearr_25221 = state_25166;
(statearr_25221[(13)] = inst_25048);

(statearr_25221[(15)] = inst_25049);

(statearr_25221[(16)] = inst_25047);

(statearr_25221[(17)] = inst_25050);

return statearr_25221;
})();
var statearr_25222_25289 = state_25166__$1;
(statearr_25222_25289[(2)] = null);

(statearr_25222_25289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (11))){
var inst_25047 = (state_25166[(16)]);
var inst_25067 = (state_25166[(7)]);
var inst_25067__$1 = cljs.core.seq.call(null,inst_25047);
var state_25166__$1 = (function (){var statearr_25223 = state_25166;
(statearr_25223[(7)] = inst_25067__$1);

return statearr_25223;
})();
if(inst_25067__$1){
var statearr_25224_25290 = state_25166__$1;
(statearr_25224_25290[(1)] = (16));

} else {
var statearr_25225_25291 = state_25166__$1;
(statearr_25225_25291[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (9))){
var inst_25095 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25226_25292 = state_25166__$1;
(statearr_25226_25292[(2)] = inst_25095);

(statearr_25226_25292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (5))){
var inst_25045 = cljs.core.deref.call(null,cs);
var inst_25046 = cljs.core.seq.call(null,inst_25045);
var inst_25047 = inst_25046;
var inst_25048 = null;
var inst_25049 = (0);
var inst_25050 = (0);
var state_25166__$1 = (function (){var statearr_25227 = state_25166;
(statearr_25227[(13)] = inst_25048);

(statearr_25227[(15)] = inst_25049);

(statearr_25227[(16)] = inst_25047);

(statearr_25227[(17)] = inst_25050);

return statearr_25227;
})();
var statearr_25228_25293 = state_25166__$1;
(statearr_25228_25293[(2)] = null);

(statearr_25228_25293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (14))){
var state_25166__$1 = state_25166;
var statearr_25229_25294 = state_25166__$1;
(statearr_25229_25294[(2)] = null);

(statearr_25229_25294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (45))){
var inst_25156 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25230_25295 = state_25166__$1;
(statearr_25230_25295[(2)] = inst_25156);

(statearr_25230_25295[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (26))){
var inst_25098 = (state_25166[(29)]);
var inst_25152 = (state_25166[(2)]);
var inst_25153 = cljs.core.seq.call(null,inst_25098);
var state_25166__$1 = (function (){var statearr_25231 = state_25166;
(statearr_25231[(31)] = inst_25152);

return statearr_25231;
})();
if(inst_25153){
var statearr_25232_25296 = state_25166__$1;
(statearr_25232_25296[(1)] = (42));

} else {
var statearr_25233_25297 = state_25166__$1;
(statearr_25233_25297[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (16))){
var inst_25067 = (state_25166[(7)]);
var inst_25069 = cljs.core.chunked_seq_QMARK_.call(null,inst_25067);
var state_25166__$1 = state_25166;
if(inst_25069){
var statearr_25234_25298 = state_25166__$1;
(statearr_25234_25298[(1)] = (19));

} else {
var statearr_25235_25299 = state_25166__$1;
(statearr_25235_25299[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (38))){
var inst_25145 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25236_25300 = state_25166__$1;
(statearr_25236_25300[(2)] = inst_25145);

(statearr_25236_25300[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (30))){
var state_25166__$1 = state_25166;
var statearr_25237_25301 = state_25166__$1;
(statearr_25237_25301[(2)] = null);

(statearr_25237_25301[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (10))){
var inst_25048 = (state_25166[(13)]);
var inst_25050 = (state_25166[(17)]);
var inst_25056 = cljs.core._nth.call(null,inst_25048,inst_25050);
var inst_25057 = cljs.core.nth.call(null,inst_25056,(0),null);
var inst_25058 = cljs.core.nth.call(null,inst_25056,(1),null);
var state_25166__$1 = (function (){var statearr_25238 = state_25166;
(statearr_25238[(26)] = inst_25057);

return statearr_25238;
})();
if(cljs.core.truth_(inst_25058)){
var statearr_25239_25302 = state_25166__$1;
(statearr_25239_25302[(1)] = (13));

} else {
var statearr_25240_25303 = state_25166__$1;
(statearr_25240_25303[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (18))){
var inst_25091 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25241_25304 = state_25166__$1;
(statearr_25241_25304[(2)] = inst_25091);

(statearr_25241_25304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (42))){
var state_25166__$1 = state_25166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25166__$1,(45),dchan);
} else {
if((state_val_25167 === (37))){
var inst_25125 = (state_25166[(25)]);
var inst_25134 = (state_25166[(23)]);
var inst_25038 = (state_25166[(12)]);
var inst_25134__$1 = cljs.core.first.call(null,inst_25125);
var inst_25135 = cljs.core.async.put_BANG_.call(null,inst_25134__$1,inst_25038,done);
var state_25166__$1 = (function (){var statearr_25242 = state_25166;
(statearr_25242[(23)] = inst_25134__$1);

return statearr_25242;
})();
if(cljs.core.truth_(inst_25135)){
var statearr_25243_25305 = state_25166__$1;
(statearr_25243_25305[(1)] = (39));

} else {
var statearr_25244_25306 = state_25166__$1;
(statearr_25244_25306[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (8))){
var inst_25049 = (state_25166[(15)]);
var inst_25050 = (state_25166[(17)]);
var inst_25052 = (inst_25050 < inst_25049);
var inst_25053 = inst_25052;
var state_25166__$1 = state_25166;
if(cljs.core.truth_(inst_25053)){
var statearr_25245_25307 = state_25166__$1;
(statearr_25245_25307[(1)] = (10));

} else {
var statearr_25246_25308 = state_25166__$1;
(statearr_25246_25308[(1)] = (11));

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
});})(c__23947__auto___25254,cs,m,dchan,dctr,done))
;
return ((function (switch__23835__auto__,c__23947__auto___25254,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23836__auto__ = null;
var cljs$core$async$mult_$_state_machine__23836__auto____0 = (function (){
var statearr_25250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25250[(0)] = cljs$core$async$mult_$_state_machine__23836__auto__);

(statearr_25250[(1)] = (1));

return statearr_25250;
});
var cljs$core$async$mult_$_state_machine__23836__auto____1 = (function (state_25166){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_25166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e25251){if((e25251 instanceof Object)){
var ex__23839__auto__ = e25251;
var statearr_25252_25309 = state_25166;
(statearr_25252_25309[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25310 = state_25166;
state_25166 = G__25310;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23836__auto__ = function(state_25166){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23836__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23836__auto____1.call(this,state_25166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23836__auto____0;
cljs$core$async$mult_$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23836__auto____1;
return cljs$core$async$mult_$_state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto___25254,cs,m,dchan,dctr,done))
})();
var state__23949__auto__ = (function (){var statearr_25253 = f__23948__auto__.call(null);
(statearr_25253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto___25254);

return statearr_25253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto___25254,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args25311 = [];
var len__22336__auto___25314 = arguments.length;
var i__22337__auto___25315 = (0);
while(true){
if((i__22337__auto___25315 < len__22336__auto___25314)){
args25311.push((arguments[i__22337__auto___25315]));

var G__25316 = (i__22337__auto___25315 + (1));
i__22337__auto___25315 = G__25316;
continue;
} else {
}
break;
}

var G__25313 = args25311.length;
switch (G__25313) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25311.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__21933__auto__ = (((m == null))?null:m);
var m__21934__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__21933__auto__)]);
if(!((m__21934__auto__ == null))){
return m__21934__auto__.call(null,m,ch);
} else {
var m__21934__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__21934__auto____$1 == null))){
return m__21934__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__21933__auto__ = (((m == null))?null:m);
var m__21934__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__21933__auto__)]);
if(!((m__21934__auto__ == null))){
return m__21934__auto__.call(null,m,ch);
} else {
var m__21934__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__21934__auto____$1 == null))){
return m__21934__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__21933__auto__ = (((m == null))?null:m);
var m__21934__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__21933__auto__)]);
if(!((m__21934__auto__ == null))){
return m__21934__auto__.call(null,m);
} else {
var m__21934__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__21934__auto____$1 == null))){
return m__21934__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__21933__auto__ = (((m == null))?null:m);
var m__21934__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__21933__auto__)]);
if(!((m__21934__auto__ == null))){
return m__21934__auto__.call(null,m,state_map);
} else {
var m__21934__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__21934__auto____$1 == null))){
return m__21934__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__21933__auto__ = (((m == null))?null:m);
var m__21934__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__21933__auto__)]);
if(!((m__21934__auto__ == null))){
return m__21934__auto__.call(null,m,mode);
} else {
var m__21934__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__21934__auto____$1 == null))){
return m__21934__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22343__auto__ = [];
var len__22336__auto___25328 = arguments.length;
var i__22337__auto___25329 = (0);
while(true){
if((i__22337__auto___25329 < len__22336__auto___25328)){
args__22343__auto__.push((arguments[i__22337__auto___25329]));

var G__25330 = (i__22337__auto___25329 + (1));
i__22337__auto___25329 = G__25330;
continue;
} else {
}
break;
}

var argseq__22344__auto__ = ((((3) < args__22343__auto__.length))?(new cljs.core.IndexedSeq(args__22343__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22344__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25322){
var map__25323 = p__25322;
var map__25323__$1 = ((((!((map__25323 == null)))?((((map__25323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25323):map__25323);
var opts = map__25323__$1;
var statearr_25325_25331 = state;
(statearr_25325_25331[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__25323,map__25323__$1,opts){
return (function (val){
var statearr_25326_25332 = state;
(statearr_25326_25332[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25323,map__25323__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_25327_25333 = state;
(statearr_25327_25333[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25318){
var G__25319 = cljs.core.first.call(null,seq25318);
var seq25318__$1 = cljs.core.next.call(null,seq25318);
var G__25320 = cljs.core.first.call(null,seq25318__$1);
var seq25318__$2 = cljs.core.next.call(null,seq25318__$1);
var G__25321 = cljs.core.first.call(null,seq25318__$2);
var seq25318__$3 = cljs.core.next.call(null,seq25318__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25319,G__25320,G__25321,seq25318__$3);
});
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25497 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25497 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25498){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25498 = meta25498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25499,meta25498__$1){
var self__ = this;
var _25499__$1 = this;
return (new cljs.core.async.t_cljs$core$async25497(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25498__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25499){
var self__ = this;
var _25499__$1 = this;
return self__.meta25498;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25497.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25498","meta25498",850766451,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25497.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25497.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25497";

cljs.core.async.t_cljs$core$async25497.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__21876__auto__,writer__21877__auto__,opt__21878__auto__){
return cljs.core._write.call(null,writer__21877__auto__,"cljs.core.async/t_cljs$core$async25497");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25497 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25497(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25498){
return (new cljs.core.async.t_cljs$core$async25497(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25498));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25497(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23947__auto___25660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto___25660,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto___25660,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25597){
var state_val_25598 = (state_25597[(1)]);
if((state_val_25598 === (7))){
var inst_25515 = (state_25597[(2)]);
var state_25597__$1 = state_25597;
var statearr_25599_25661 = state_25597__$1;
(statearr_25599_25661[(2)] = inst_25515);

(statearr_25599_25661[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (20))){
var inst_25527 = (state_25597[(7)]);
var state_25597__$1 = state_25597;
var statearr_25600_25662 = state_25597__$1;
(statearr_25600_25662[(2)] = inst_25527);

(statearr_25600_25662[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (27))){
var state_25597__$1 = state_25597;
var statearr_25601_25663 = state_25597__$1;
(statearr_25601_25663[(2)] = null);

(statearr_25601_25663[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (1))){
var inst_25503 = (state_25597[(8)]);
var inst_25503__$1 = calc_state.call(null);
var inst_25505 = (inst_25503__$1 == null);
var inst_25506 = cljs.core.not.call(null,inst_25505);
var state_25597__$1 = (function (){var statearr_25602 = state_25597;
(statearr_25602[(8)] = inst_25503__$1);

return statearr_25602;
})();
if(inst_25506){
var statearr_25603_25664 = state_25597__$1;
(statearr_25603_25664[(1)] = (2));

} else {
var statearr_25604_25665 = state_25597__$1;
(statearr_25604_25665[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (24))){
var inst_25571 = (state_25597[(9)]);
var inst_25550 = (state_25597[(10)]);
var inst_25557 = (state_25597[(11)]);
var inst_25571__$1 = inst_25550.call(null,inst_25557);
var state_25597__$1 = (function (){var statearr_25605 = state_25597;
(statearr_25605[(9)] = inst_25571__$1);

return statearr_25605;
})();
if(cljs.core.truth_(inst_25571__$1)){
var statearr_25606_25666 = state_25597__$1;
(statearr_25606_25666[(1)] = (29));

} else {
var statearr_25607_25667 = state_25597__$1;
(statearr_25607_25667[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (4))){
var inst_25518 = (state_25597[(2)]);
var state_25597__$1 = state_25597;
if(cljs.core.truth_(inst_25518)){
var statearr_25608_25668 = state_25597__$1;
(statearr_25608_25668[(1)] = (8));

} else {
var statearr_25609_25669 = state_25597__$1;
(statearr_25609_25669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (15))){
var inst_25544 = (state_25597[(2)]);
var state_25597__$1 = state_25597;
if(cljs.core.truth_(inst_25544)){
var statearr_25610_25670 = state_25597__$1;
(statearr_25610_25670[(1)] = (19));

} else {
var statearr_25611_25671 = state_25597__$1;
(statearr_25611_25671[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (21))){
var inst_25549 = (state_25597[(12)]);
var inst_25549__$1 = (state_25597[(2)]);
var inst_25550 = cljs.core.get.call(null,inst_25549__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25551 = cljs.core.get.call(null,inst_25549__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25552 = cljs.core.get.call(null,inst_25549__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25597__$1 = (function (){var statearr_25612 = state_25597;
(statearr_25612[(10)] = inst_25550);

(statearr_25612[(13)] = inst_25551);

(statearr_25612[(12)] = inst_25549__$1);

return statearr_25612;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25597__$1,(22),inst_25552);
} else {
if((state_val_25598 === (31))){
var inst_25579 = (state_25597[(2)]);
var state_25597__$1 = state_25597;
if(cljs.core.truth_(inst_25579)){
var statearr_25613_25672 = state_25597__$1;
(statearr_25613_25672[(1)] = (32));

} else {
var statearr_25614_25673 = state_25597__$1;
(statearr_25614_25673[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (32))){
var inst_25556 = (state_25597[(14)]);
var state_25597__$1 = state_25597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25597__$1,(35),out,inst_25556);
} else {
if((state_val_25598 === (33))){
var inst_25549 = (state_25597[(12)]);
var inst_25527 = inst_25549;
var state_25597__$1 = (function (){var statearr_25615 = state_25597;
(statearr_25615[(7)] = inst_25527);

return statearr_25615;
})();
var statearr_25616_25674 = state_25597__$1;
(statearr_25616_25674[(2)] = null);

(statearr_25616_25674[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (13))){
var inst_25527 = (state_25597[(7)]);
var inst_25534 = inst_25527.cljs$lang$protocol_mask$partition0$;
var inst_25535 = (inst_25534 & (64));
var inst_25536 = inst_25527.cljs$core$ISeq$;
var inst_25537 = (inst_25535) || (inst_25536);
var state_25597__$1 = state_25597;
if(cljs.core.truth_(inst_25537)){
var statearr_25617_25675 = state_25597__$1;
(statearr_25617_25675[(1)] = (16));

} else {
var statearr_25618_25676 = state_25597__$1;
(statearr_25618_25676[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (22))){
var inst_25557 = (state_25597[(11)]);
var inst_25556 = (state_25597[(14)]);
var inst_25555 = (state_25597[(2)]);
var inst_25556__$1 = cljs.core.nth.call(null,inst_25555,(0),null);
var inst_25557__$1 = cljs.core.nth.call(null,inst_25555,(1),null);
var inst_25558 = (inst_25556__$1 == null);
var inst_25559 = cljs.core._EQ_.call(null,inst_25557__$1,change);
var inst_25560 = (inst_25558) || (inst_25559);
var state_25597__$1 = (function (){var statearr_25619 = state_25597;
(statearr_25619[(11)] = inst_25557__$1);

(statearr_25619[(14)] = inst_25556__$1);

return statearr_25619;
})();
if(cljs.core.truth_(inst_25560)){
var statearr_25620_25677 = state_25597__$1;
(statearr_25620_25677[(1)] = (23));

} else {
var statearr_25621_25678 = state_25597__$1;
(statearr_25621_25678[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (36))){
var inst_25549 = (state_25597[(12)]);
var inst_25527 = inst_25549;
var state_25597__$1 = (function (){var statearr_25622 = state_25597;
(statearr_25622[(7)] = inst_25527);

return statearr_25622;
})();
var statearr_25623_25679 = state_25597__$1;
(statearr_25623_25679[(2)] = null);

(statearr_25623_25679[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (29))){
var inst_25571 = (state_25597[(9)]);
var state_25597__$1 = state_25597;
var statearr_25624_25680 = state_25597__$1;
(statearr_25624_25680[(2)] = inst_25571);

(statearr_25624_25680[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (6))){
var state_25597__$1 = state_25597;
var statearr_25625_25681 = state_25597__$1;
(statearr_25625_25681[(2)] = false);

(statearr_25625_25681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (28))){
var inst_25567 = (state_25597[(2)]);
var inst_25568 = calc_state.call(null);
var inst_25527 = inst_25568;
var state_25597__$1 = (function (){var statearr_25626 = state_25597;
(statearr_25626[(15)] = inst_25567);

(statearr_25626[(7)] = inst_25527);

return statearr_25626;
})();
var statearr_25627_25682 = state_25597__$1;
(statearr_25627_25682[(2)] = null);

(statearr_25627_25682[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (25))){
var inst_25593 = (state_25597[(2)]);
var state_25597__$1 = state_25597;
var statearr_25628_25683 = state_25597__$1;
(statearr_25628_25683[(2)] = inst_25593);

(statearr_25628_25683[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (34))){
var inst_25591 = (state_25597[(2)]);
var state_25597__$1 = state_25597;
var statearr_25629_25684 = state_25597__$1;
(statearr_25629_25684[(2)] = inst_25591);

(statearr_25629_25684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (17))){
var state_25597__$1 = state_25597;
var statearr_25630_25685 = state_25597__$1;
(statearr_25630_25685[(2)] = false);

(statearr_25630_25685[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (3))){
var state_25597__$1 = state_25597;
var statearr_25631_25686 = state_25597__$1;
(statearr_25631_25686[(2)] = false);

(statearr_25631_25686[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (12))){
var inst_25595 = (state_25597[(2)]);
var state_25597__$1 = state_25597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25597__$1,inst_25595);
} else {
if((state_val_25598 === (2))){
var inst_25503 = (state_25597[(8)]);
var inst_25508 = inst_25503.cljs$lang$protocol_mask$partition0$;
var inst_25509 = (inst_25508 & (64));
var inst_25510 = inst_25503.cljs$core$ISeq$;
var inst_25511 = (inst_25509) || (inst_25510);
var state_25597__$1 = state_25597;
if(cljs.core.truth_(inst_25511)){
var statearr_25632_25687 = state_25597__$1;
(statearr_25632_25687[(1)] = (5));

} else {
var statearr_25633_25688 = state_25597__$1;
(statearr_25633_25688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (23))){
var inst_25556 = (state_25597[(14)]);
var inst_25562 = (inst_25556 == null);
var state_25597__$1 = state_25597;
if(cljs.core.truth_(inst_25562)){
var statearr_25634_25689 = state_25597__$1;
(statearr_25634_25689[(1)] = (26));

} else {
var statearr_25635_25690 = state_25597__$1;
(statearr_25635_25690[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (35))){
var inst_25582 = (state_25597[(2)]);
var state_25597__$1 = state_25597;
if(cljs.core.truth_(inst_25582)){
var statearr_25636_25691 = state_25597__$1;
(statearr_25636_25691[(1)] = (36));

} else {
var statearr_25637_25692 = state_25597__$1;
(statearr_25637_25692[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (19))){
var inst_25527 = (state_25597[(7)]);
var inst_25546 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25527);
var state_25597__$1 = state_25597;
var statearr_25638_25693 = state_25597__$1;
(statearr_25638_25693[(2)] = inst_25546);

(statearr_25638_25693[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (11))){
var inst_25527 = (state_25597[(7)]);
var inst_25531 = (inst_25527 == null);
var inst_25532 = cljs.core.not.call(null,inst_25531);
var state_25597__$1 = state_25597;
if(inst_25532){
var statearr_25639_25694 = state_25597__$1;
(statearr_25639_25694[(1)] = (13));

} else {
var statearr_25640_25695 = state_25597__$1;
(statearr_25640_25695[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (9))){
var inst_25503 = (state_25597[(8)]);
var state_25597__$1 = state_25597;
var statearr_25641_25696 = state_25597__$1;
(statearr_25641_25696[(2)] = inst_25503);

(statearr_25641_25696[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (5))){
var state_25597__$1 = state_25597;
var statearr_25642_25697 = state_25597__$1;
(statearr_25642_25697[(2)] = true);

(statearr_25642_25697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (14))){
var state_25597__$1 = state_25597;
var statearr_25643_25698 = state_25597__$1;
(statearr_25643_25698[(2)] = false);

(statearr_25643_25698[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (26))){
var inst_25557 = (state_25597[(11)]);
var inst_25564 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25557);
var state_25597__$1 = state_25597;
var statearr_25644_25699 = state_25597__$1;
(statearr_25644_25699[(2)] = inst_25564);

(statearr_25644_25699[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (16))){
var state_25597__$1 = state_25597;
var statearr_25645_25700 = state_25597__$1;
(statearr_25645_25700[(2)] = true);

(statearr_25645_25700[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (38))){
var inst_25587 = (state_25597[(2)]);
var state_25597__$1 = state_25597;
var statearr_25646_25701 = state_25597__$1;
(statearr_25646_25701[(2)] = inst_25587);

(statearr_25646_25701[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (30))){
var inst_25550 = (state_25597[(10)]);
var inst_25551 = (state_25597[(13)]);
var inst_25557 = (state_25597[(11)]);
var inst_25574 = cljs.core.empty_QMARK_.call(null,inst_25550);
var inst_25575 = inst_25551.call(null,inst_25557);
var inst_25576 = cljs.core.not.call(null,inst_25575);
var inst_25577 = (inst_25574) && (inst_25576);
var state_25597__$1 = state_25597;
var statearr_25647_25702 = state_25597__$1;
(statearr_25647_25702[(2)] = inst_25577);

(statearr_25647_25702[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (10))){
var inst_25503 = (state_25597[(8)]);
var inst_25523 = (state_25597[(2)]);
var inst_25524 = cljs.core.get.call(null,inst_25523,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25525 = cljs.core.get.call(null,inst_25523,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25526 = cljs.core.get.call(null,inst_25523,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25527 = inst_25503;
var state_25597__$1 = (function (){var statearr_25648 = state_25597;
(statearr_25648[(16)] = inst_25525);

(statearr_25648[(17)] = inst_25526);

(statearr_25648[(18)] = inst_25524);

(statearr_25648[(7)] = inst_25527);

return statearr_25648;
})();
var statearr_25649_25703 = state_25597__$1;
(statearr_25649_25703[(2)] = null);

(statearr_25649_25703[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (18))){
var inst_25541 = (state_25597[(2)]);
var state_25597__$1 = state_25597;
var statearr_25650_25704 = state_25597__$1;
(statearr_25650_25704[(2)] = inst_25541);

(statearr_25650_25704[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (37))){
var state_25597__$1 = state_25597;
var statearr_25651_25705 = state_25597__$1;
(statearr_25651_25705[(2)] = null);

(statearr_25651_25705[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (8))){
var inst_25503 = (state_25597[(8)]);
var inst_25520 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25503);
var state_25597__$1 = state_25597;
var statearr_25652_25706 = state_25597__$1;
(statearr_25652_25706[(2)] = inst_25520);

(statearr_25652_25706[(1)] = (10));


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
});})(c__23947__auto___25660,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23835__auto__,c__23947__auto___25660,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23836__auto__ = null;
var cljs$core$async$mix_$_state_machine__23836__auto____0 = (function (){
var statearr_25656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25656[(0)] = cljs$core$async$mix_$_state_machine__23836__auto__);

(statearr_25656[(1)] = (1));

return statearr_25656;
});
var cljs$core$async$mix_$_state_machine__23836__auto____1 = (function (state_25597){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_25597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e25657){if((e25657 instanceof Object)){
var ex__23839__auto__ = e25657;
var statearr_25658_25707 = state_25597;
(statearr_25658_25707[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25708 = state_25597;
state_25597 = G__25708;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23836__auto__ = function(state_25597){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23836__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23836__auto____1.call(this,state_25597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23836__auto____0;
cljs$core$async$mix_$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23836__auto____1;
return cljs$core$async$mix_$_state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto___25660,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23949__auto__ = (function (){var statearr_25659 = f__23948__auto__.call(null);
(statearr_25659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto___25660);

return statearr_25659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto___25660,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__21933__auto__ = (((p == null))?null:p);
var m__21934__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__21933__auto__)]);
if(!((m__21934__auto__ == null))){
return m__21934__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__21934__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__21934__auto____$1 == null))){
return m__21934__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__21933__auto__ = (((p == null))?null:p);
var m__21934__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__21933__auto__)]);
if(!((m__21934__auto__ == null))){
return m__21934__auto__.call(null,p,v,ch);
} else {
var m__21934__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__21934__auto____$1 == null))){
return m__21934__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25709 = [];
var len__22336__auto___25712 = arguments.length;
var i__22337__auto___25713 = (0);
while(true){
if((i__22337__auto___25713 < len__22336__auto___25712)){
args25709.push((arguments[i__22337__auto___25713]));

var G__25714 = (i__22337__auto___25713 + (1));
i__22337__auto___25713 = G__25714;
continue;
} else {
}
break;
}

var G__25711 = args25709.length;
switch (G__25711) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25709.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__21933__auto__ = (((p == null))?null:p);
var m__21934__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21933__auto__)]);
if(!((m__21934__auto__ == null))){
return m__21934__auto__.call(null,p);
} else {
var m__21934__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__21934__auto____$1 == null))){
return m__21934__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__21933__auto__ = (((p == null))?null:p);
var m__21934__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21933__auto__)]);
if(!((m__21934__auto__ == null))){
return m__21934__auto__.call(null,p,v);
} else {
var m__21934__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__21934__auto____$1 == null))){
return m__21934__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

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
var args25717 = [];
var len__22336__auto___25842 = arguments.length;
var i__22337__auto___25843 = (0);
while(true){
if((i__22337__auto___25843 < len__22336__auto___25842)){
args25717.push((arguments[i__22337__auto___25843]));

var G__25844 = (i__22337__auto___25843 + (1));
i__22337__auto___25843 = G__25844;
continue;
} else {
}
break;
}

var G__25719 = args25717.length;
switch (G__25719) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25717.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21278__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21278__auto__)){
return or__21278__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21278__auto__,mults){
return (function (p1__25716_SHARP_){
if(cljs.core.truth_(p1__25716_SHARP_.call(null,topic))){
return p1__25716_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25716_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21278__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25720 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25720 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25721){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25721 = meta25721;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25722,meta25721__$1){
var self__ = this;
var _25722__$1 = this;
return (new cljs.core.async.t_cljs$core$async25720(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25721__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25720.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25722){
var self__ = this;
var _25722__$1 = this;
return self__.meta25721;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25720.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25720.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25720.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25720.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25720.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25720.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25720.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25720.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25721","meta25721",1676870332,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25720.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25720.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25720";

cljs.core.async.t_cljs$core$async25720.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__21876__auto__,writer__21877__auto__,opt__21878__auto__){
return cljs.core._write.call(null,writer__21877__auto__,"cljs.core.async/t_cljs$core$async25720");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25720 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25720(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25721){
return (new cljs.core.async.t_cljs$core$async25720(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25721));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25720(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23947__auto___25846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto___25846,mults,ensure_mult,p){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto___25846,mults,ensure_mult,p){
return (function (state_25794){
var state_val_25795 = (state_25794[(1)]);
if((state_val_25795 === (7))){
var inst_25790 = (state_25794[(2)]);
var state_25794__$1 = state_25794;
var statearr_25796_25847 = state_25794__$1;
(statearr_25796_25847[(2)] = inst_25790);

(statearr_25796_25847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25795 === (20))){
var state_25794__$1 = state_25794;
var statearr_25797_25848 = state_25794__$1;
(statearr_25797_25848[(2)] = null);

(statearr_25797_25848[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25795 === (1))){
var state_25794__$1 = state_25794;
var statearr_25798_25849 = state_25794__$1;
(statearr_25798_25849[(2)] = null);

(statearr_25798_25849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25795 === (24))){
var inst_25773 = (state_25794[(7)]);
var inst_25782 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25773);
var state_25794__$1 = state_25794;
var statearr_25799_25850 = state_25794__$1;
(statearr_25799_25850[(2)] = inst_25782);

(statearr_25799_25850[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25795 === (4))){
var inst_25725 = (state_25794[(8)]);
var inst_25725__$1 = (state_25794[(2)]);
var inst_25726 = (inst_25725__$1 == null);
var state_25794__$1 = (function (){var statearr_25800 = state_25794;
(statearr_25800[(8)] = inst_25725__$1);

return statearr_25800;
})();
if(cljs.core.truth_(inst_25726)){
var statearr_25801_25851 = state_25794__$1;
(statearr_25801_25851[(1)] = (5));

} else {
var statearr_25802_25852 = state_25794__$1;
(statearr_25802_25852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25795 === (15))){
var inst_25767 = (state_25794[(2)]);
var state_25794__$1 = state_25794;
var statearr_25803_25853 = state_25794__$1;
(statearr_25803_25853[(2)] = inst_25767);

(statearr_25803_25853[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25795 === (21))){
var inst_25787 = (state_25794[(2)]);
var state_25794__$1 = (function (){var statearr_25804 = state_25794;
(statearr_25804[(9)] = inst_25787);

return statearr_25804;
})();
var statearr_25805_25854 = state_25794__$1;
(statearr_25805_25854[(2)] = null);

(statearr_25805_25854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25795 === (13))){
var inst_25749 = (state_25794[(10)]);
var inst_25751 = cljs.core.chunked_seq_QMARK_.call(null,inst_25749);
var state_25794__$1 = state_25794;
if(inst_25751){
var statearr_25806_25855 = state_25794__$1;
(statearr_25806_25855[(1)] = (16));

} else {
var statearr_25807_25856 = state_25794__$1;
(statearr_25807_25856[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25795 === (22))){
var inst_25779 = (state_25794[(2)]);
var state_25794__$1 = state_25794;
if(cljs.core.truth_(inst_25779)){
var statearr_25808_25857 = state_25794__$1;
(statearr_25808_25857[(1)] = (23));

} else {
var statearr_25809_25858 = state_25794__$1;
(statearr_25809_25858[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25795 === (6))){
var inst_25725 = (state_25794[(8)]);
var inst_25775 = (state_25794[(11)]);
var inst_25773 = (state_25794[(7)]);
var inst_25773__$1 = topic_fn.call(null,inst_25725);
var inst_25774 = cljs.core.deref.call(null,mults);
var inst_25775__$1 = cljs.core.get.call(null,inst_25774,inst_25773__$1);
var state_25794__$1 = (function (){var statearr_25810 = state_25794;
(statearr_25810[(11)] = inst_25775__$1);

(statearr_25810[(7)] = inst_25773__$1);

return statearr_25810;
})();
if(cljs.core.truth_(inst_25775__$1)){
var statearr_25811_25859 = state_25794__$1;
(statearr_25811_25859[(1)] = (19));

} else {
var statearr_25812_25860 = state_25794__$1;
(statearr_25812_25860[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25795 === (25))){
var inst_25784 = (state_25794[(2)]);
var state_25794__$1 = state_25794;
var statearr_25813_25861 = state_25794__$1;
(statearr_25813_25861[(2)] = inst_25784);

(statearr_25813_25861[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25795 === (17))){
var inst_25749 = (state_25794[(10)]);
var inst_25758 = cljs.core.first.call(null,inst_25749);
var inst_25759 = cljs.core.async.muxch_STAR_.call(null,inst_25758);
var inst_25760 = cljs.core.async.close_BANG_.call(null,inst_25759);
var inst_25761 = cljs.core.next.call(null,inst_25749);
var inst_25735 = inst_25761;
var inst_25736 = null;
var inst_25737 = (0);
var inst_25738 = (0);
var state_25794__$1 = (function (){var statearr_25814 = state_25794;
(statearr_25814[(12)] = inst_25736);

(statearr_25814[(13)] = inst_25735);

(statearr_25814[(14)] = inst_25737);

(statearr_25814[(15)] = inst_25738);

(statearr_25814[(16)] = inst_25760);

return statearr_25814;
})();
var statearr_25815_25862 = state_25794__$1;
(statearr_25815_25862[(2)] = null);

(statearr_25815_25862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25795 === (3))){
var inst_25792 = (state_25794[(2)]);
var state_25794__$1 = state_25794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25794__$1,inst_25792);
} else {
if((state_val_25795 === (12))){
var inst_25769 = (state_25794[(2)]);
var state_25794__$1 = state_25794;
var statearr_25816_25863 = state_25794__$1;
(statearr_25816_25863[(2)] = inst_25769);

(statearr_25816_25863[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25795 === (2))){
var state_25794__$1 = state_25794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25794__$1,(4),ch);
} else {
if((state_val_25795 === (23))){
var state_25794__$1 = state_25794;
var statearr_25817_25864 = state_25794__$1;
(statearr_25817_25864[(2)] = null);

(statearr_25817_25864[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25795 === (19))){
var inst_25725 = (state_25794[(8)]);
var inst_25775 = (state_25794[(11)]);
var inst_25777 = cljs.core.async.muxch_STAR_.call(null,inst_25775);
var state_25794__$1 = state_25794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25794__$1,(22),inst_25777,inst_25725);
} else {
if((state_val_25795 === (11))){
var inst_25735 = (state_25794[(13)]);
var inst_25749 = (state_25794[(10)]);
var inst_25749__$1 = cljs.core.seq.call(null,inst_25735);
var state_25794__$1 = (function (){var statearr_25818 = state_25794;
(statearr_25818[(10)] = inst_25749__$1);

return statearr_25818;
})();
if(inst_25749__$1){
var statearr_25819_25865 = state_25794__$1;
(statearr_25819_25865[(1)] = (13));

} else {
var statearr_25820_25866 = state_25794__$1;
(statearr_25820_25866[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25795 === (9))){
var inst_25771 = (state_25794[(2)]);
var state_25794__$1 = state_25794;
var statearr_25821_25867 = state_25794__$1;
(statearr_25821_25867[(2)] = inst_25771);

(statearr_25821_25867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25795 === (5))){
var inst_25732 = cljs.core.deref.call(null,mults);
var inst_25733 = cljs.core.vals.call(null,inst_25732);
var inst_25734 = cljs.core.seq.call(null,inst_25733);
var inst_25735 = inst_25734;
var inst_25736 = null;
var inst_25737 = (0);
var inst_25738 = (0);
var state_25794__$1 = (function (){var statearr_25822 = state_25794;
(statearr_25822[(12)] = inst_25736);

(statearr_25822[(13)] = inst_25735);

(statearr_25822[(14)] = inst_25737);

(statearr_25822[(15)] = inst_25738);

return statearr_25822;
})();
var statearr_25823_25868 = state_25794__$1;
(statearr_25823_25868[(2)] = null);

(statearr_25823_25868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25795 === (14))){
var state_25794__$1 = state_25794;
var statearr_25827_25869 = state_25794__$1;
(statearr_25827_25869[(2)] = null);

(statearr_25827_25869[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25795 === (16))){
var inst_25749 = (state_25794[(10)]);
var inst_25753 = cljs.core.chunk_first.call(null,inst_25749);
var inst_25754 = cljs.core.chunk_rest.call(null,inst_25749);
var inst_25755 = cljs.core.count.call(null,inst_25753);
var inst_25735 = inst_25754;
var inst_25736 = inst_25753;
var inst_25737 = inst_25755;
var inst_25738 = (0);
var state_25794__$1 = (function (){var statearr_25828 = state_25794;
(statearr_25828[(12)] = inst_25736);

(statearr_25828[(13)] = inst_25735);

(statearr_25828[(14)] = inst_25737);

(statearr_25828[(15)] = inst_25738);

return statearr_25828;
})();
var statearr_25829_25870 = state_25794__$1;
(statearr_25829_25870[(2)] = null);

(statearr_25829_25870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25795 === (10))){
var inst_25736 = (state_25794[(12)]);
var inst_25735 = (state_25794[(13)]);
var inst_25737 = (state_25794[(14)]);
var inst_25738 = (state_25794[(15)]);
var inst_25743 = cljs.core._nth.call(null,inst_25736,inst_25738);
var inst_25744 = cljs.core.async.muxch_STAR_.call(null,inst_25743);
var inst_25745 = cljs.core.async.close_BANG_.call(null,inst_25744);
var inst_25746 = (inst_25738 + (1));
var tmp25824 = inst_25736;
var tmp25825 = inst_25735;
var tmp25826 = inst_25737;
var inst_25735__$1 = tmp25825;
var inst_25736__$1 = tmp25824;
var inst_25737__$1 = tmp25826;
var inst_25738__$1 = inst_25746;
var state_25794__$1 = (function (){var statearr_25830 = state_25794;
(statearr_25830[(12)] = inst_25736__$1);

(statearr_25830[(13)] = inst_25735__$1);

(statearr_25830[(17)] = inst_25745);

(statearr_25830[(14)] = inst_25737__$1);

(statearr_25830[(15)] = inst_25738__$1);

return statearr_25830;
})();
var statearr_25831_25871 = state_25794__$1;
(statearr_25831_25871[(2)] = null);

(statearr_25831_25871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25795 === (18))){
var inst_25764 = (state_25794[(2)]);
var state_25794__$1 = state_25794;
var statearr_25832_25872 = state_25794__$1;
(statearr_25832_25872[(2)] = inst_25764);

(statearr_25832_25872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25795 === (8))){
var inst_25737 = (state_25794[(14)]);
var inst_25738 = (state_25794[(15)]);
var inst_25740 = (inst_25738 < inst_25737);
var inst_25741 = inst_25740;
var state_25794__$1 = state_25794;
if(cljs.core.truth_(inst_25741)){
var statearr_25833_25873 = state_25794__$1;
(statearr_25833_25873[(1)] = (10));

} else {
var statearr_25834_25874 = state_25794__$1;
(statearr_25834_25874[(1)] = (11));

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
});})(c__23947__auto___25846,mults,ensure_mult,p))
;
return ((function (switch__23835__auto__,c__23947__auto___25846,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23836__auto__ = null;
var cljs$core$async$state_machine__23836__auto____0 = (function (){
var statearr_25838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25838[(0)] = cljs$core$async$state_machine__23836__auto__);

(statearr_25838[(1)] = (1));

return statearr_25838;
});
var cljs$core$async$state_machine__23836__auto____1 = (function (state_25794){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_25794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e25839){if((e25839 instanceof Object)){
var ex__23839__auto__ = e25839;
var statearr_25840_25875 = state_25794;
(statearr_25840_25875[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25876 = state_25794;
state_25794 = G__25876;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
cljs$core$async$state_machine__23836__auto__ = function(state_25794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23836__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23836__auto____1.call(this,state_25794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23836__auto____0;
cljs$core$async$state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23836__auto____1;
return cljs$core$async$state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto___25846,mults,ensure_mult,p))
})();
var state__23949__auto__ = (function (){var statearr_25841 = f__23948__auto__.call(null);
(statearr_25841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto___25846);

return statearr_25841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto___25846,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args25877 = [];
var len__22336__auto___25880 = arguments.length;
var i__22337__auto___25881 = (0);
while(true){
if((i__22337__auto___25881 < len__22336__auto___25880)){
args25877.push((arguments[i__22337__auto___25881]));

var G__25882 = (i__22337__auto___25881 + (1));
i__22337__auto___25881 = G__25882;
continue;
} else {
}
break;
}

var G__25879 = args25877.length;
switch (G__25879) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25877.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args25884 = [];
var len__22336__auto___25887 = arguments.length;
var i__22337__auto___25888 = (0);
while(true){
if((i__22337__auto___25888 < len__22336__auto___25887)){
args25884.push((arguments[i__22337__auto___25888]));

var G__25889 = (i__22337__auto___25888 + (1));
i__22337__auto___25888 = G__25889;
continue;
} else {
}
break;
}

var G__25886 = args25884.length;
switch (G__25886) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25884.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
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
var args25891 = [];
var len__22336__auto___25962 = arguments.length;
var i__22337__auto___25963 = (0);
while(true){
if((i__22337__auto___25963 < len__22336__auto___25962)){
args25891.push((arguments[i__22337__auto___25963]));

var G__25964 = (i__22337__auto___25963 + (1));
i__22337__auto___25963 = G__25964;
continue;
} else {
}
break;
}

var G__25893 = args25891.length;
switch (G__25893) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25891.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23947__auto___25966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto___25966,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto___25966,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25932){
var state_val_25933 = (state_25932[(1)]);
if((state_val_25933 === (7))){
var state_25932__$1 = state_25932;
var statearr_25934_25967 = state_25932__$1;
(statearr_25934_25967[(2)] = null);

(statearr_25934_25967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (1))){
var state_25932__$1 = state_25932;
var statearr_25935_25968 = state_25932__$1;
(statearr_25935_25968[(2)] = null);

(statearr_25935_25968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (4))){
var inst_25896 = (state_25932[(7)]);
var inst_25898 = (inst_25896 < cnt);
var state_25932__$1 = state_25932;
if(cljs.core.truth_(inst_25898)){
var statearr_25936_25969 = state_25932__$1;
(statearr_25936_25969[(1)] = (6));

} else {
var statearr_25937_25970 = state_25932__$1;
(statearr_25937_25970[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (15))){
var inst_25928 = (state_25932[(2)]);
var state_25932__$1 = state_25932;
var statearr_25938_25971 = state_25932__$1;
(statearr_25938_25971[(2)] = inst_25928);

(statearr_25938_25971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (13))){
var inst_25921 = cljs.core.async.close_BANG_.call(null,out);
var state_25932__$1 = state_25932;
var statearr_25939_25972 = state_25932__$1;
(statearr_25939_25972[(2)] = inst_25921);

(statearr_25939_25972[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (6))){
var state_25932__$1 = state_25932;
var statearr_25940_25973 = state_25932__$1;
(statearr_25940_25973[(2)] = null);

(statearr_25940_25973[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (3))){
var inst_25930 = (state_25932[(2)]);
var state_25932__$1 = state_25932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25932__$1,inst_25930);
} else {
if((state_val_25933 === (12))){
var inst_25918 = (state_25932[(8)]);
var inst_25918__$1 = (state_25932[(2)]);
var inst_25919 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25918__$1);
var state_25932__$1 = (function (){var statearr_25941 = state_25932;
(statearr_25941[(8)] = inst_25918__$1);

return statearr_25941;
})();
if(cljs.core.truth_(inst_25919)){
var statearr_25942_25974 = state_25932__$1;
(statearr_25942_25974[(1)] = (13));

} else {
var statearr_25943_25975 = state_25932__$1;
(statearr_25943_25975[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (2))){
var inst_25895 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25896 = (0);
var state_25932__$1 = (function (){var statearr_25944 = state_25932;
(statearr_25944[(7)] = inst_25896);

(statearr_25944[(9)] = inst_25895);

return statearr_25944;
})();
var statearr_25945_25976 = state_25932__$1;
(statearr_25945_25976[(2)] = null);

(statearr_25945_25976[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (11))){
var inst_25896 = (state_25932[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25932,(10),Object,null,(9));
var inst_25905 = chs__$1.call(null,inst_25896);
var inst_25906 = done.call(null,inst_25896);
var inst_25907 = cljs.core.async.take_BANG_.call(null,inst_25905,inst_25906);
var state_25932__$1 = state_25932;
var statearr_25946_25977 = state_25932__$1;
(statearr_25946_25977[(2)] = inst_25907);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25932__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (9))){
var inst_25896 = (state_25932[(7)]);
var inst_25909 = (state_25932[(2)]);
var inst_25910 = (inst_25896 + (1));
var inst_25896__$1 = inst_25910;
var state_25932__$1 = (function (){var statearr_25947 = state_25932;
(statearr_25947[(10)] = inst_25909);

(statearr_25947[(7)] = inst_25896__$1);

return statearr_25947;
})();
var statearr_25948_25978 = state_25932__$1;
(statearr_25948_25978[(2)] = null);

(statearr_25948_25978[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (5))){
var inst_25916 = (state_25932[(2)]);
var state_25932__$1 = (function (){var statearr_25949 = state_25932;
(statearr_25949[(11)] = inst_25916);

return statearr_25949;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25932__$1,(12),dchan);
} else {
if((state_val_25933 === (14))){
var inst_25918 = (state_25932[(8)]);
var inst_25923 = cljs.core.apply.call(null,f,inst_25918);
var state_25932__$1 = state_25932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25932__$1,(16),out,inst_25923);
} else {
if((state_val_25933 === (16))){
var inst_25925 = (state_25932[(2)]);
var state_25932__$1 = (function (){var statearr_25950 = state_25932;
(statearr_25950[(12)] = inst_25925);

return statearr_25950;
})();
var statearr_25951_25979 = state_25932__$1;
(statearr_25951_25979[(2)] = null);

(statearr_25951_25979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (10))){
var inst_25900 = (state_25932[(2)]);
var inst_25901 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25932__$1 = (function (){var statearr_25952 = state_25932;
(statearr_25952[(13)] = inst_25900);

return statearr_25952;
})();
var statearr_25953_25980 = state_25932__$1;
(statearr_25953_25980[(2)] = inst_25901);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25932__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25933 === (8))){
var inst_25914 = (state_25932[(2)]);
var state_25932__$1 = state_25932;
var statearr_25954_25981 = state_25932__$1;
(statearr_25954_25981[(2)] = inst_25914);

(statearr_25954_25981[(1)] = (5));


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
});})(c__23947__auto___25966,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23835__auto__,c__23947__auto___25966,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23836__auto__ = null;
var cljs$core$async$state_machine__23836__auto____0 = (function (){
var statearr_25958 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25958[(0)] = cljs$core$async$state_machine__23836__auto__);

(statearr_25958[(1)] = (1));

return statearr_25958;
});
var cljs$core$async$state_machine__23836__auto____1 = (function (state_25932){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_25932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e25959){if((e25959 instanceof Object)){
var ex__23839__auto__ = e25959;
var statearr_25960_25982 = state_25932;
(statearr_25960_25982[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25983 = state_25932;
state_25932 = G__25983;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
cljs$core$async$state_machine__23836__auto__ = function(state_25932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23836__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23836__auto____1.call(this,state_25932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23836__auto____0;
cljs$core$async$state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23836__auto____1;
return cljs$core$async$state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto___25966,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23949__auto__ = (function (){var statearr_25961 = f__23948__auto__.call(null);
(statearr_25961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto___25966);

return statearr_25961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto___25966,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args25985 = [];
var len__22336__auto___26041 = arguments.length;
var i__22337__auto___26042 = (0);
while(true){
if((i__22337__auto___26042 < len__22336__auto___26041)){
args25985.push((arguments[i__22337__auto___26042]));

var G__26043 = (i__22337__auto___26042 + (1));
i__22337__auto___26042 = G__26043;
continue;
} else {
}
break;
}

var G__25987 = args25985.length;
switch (G__25987) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25985.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23947__auto___26045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto___26045,out){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto___26045,out){
return (function (state_26017){
var state_val_26018 = (state_26017[(1)]);
if((state_val_26018 === (7))){
var inst_25997 = (state_26017[(7)]);
var inst_25996 = (state_26017[(8)]);
var inst_25996__$1 = (state_26017[(2)]);
var inst_25997__$1 = cljs.core.nth.call(null,inst_25996__$1,(0),null);
var inst_25998 = cljs.core.nth.call(null,inst_25996__$1,(1),null);
var inst_25999 = (inst_25997__$1 == null);
var state_26017__$1 = (function (){var statearr_26019 = state_26017;
(statearr_26019[(7)] = inst_25997__$1);

(statearr_26019[(8)] = inst_25996__$1);

(statearr_26019[(9)] = inst_25998);

return statearr_26019;
})();
if(cljs.core.truth_(inst_25999)){
var statearr_26020_26046 = state_26017__$1;
(statearr_26020_26046[(1)] = (8));

} else {
var statearr_26021_26047 = state_26017__$1;
(statearr_26021_26047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (1))){
var inst_25988 = cljs.core.vec.call(null,chs);
var inst_25989 = inst_25988;
var state_26017__$1 = (function (){var statearr_26022 = state_26017;
(statearr_26022[(10)] = inst_25989);

return statearr_26022;
})();
var statearr_26023_26048 = state_26017__$1;
(statearr_26023_26048[(2)] = null);

(statearr_26023_26048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (4))){
var inst_25989 = (state_26017[(10)]);
var state_26017__$1 = state_26017;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26017__$1,(7),inst_25989);
} else {
if((state_val_26018 === (6))){
var inst_26013 = (state_26017[(2)]);
var state_26017__$1 = state_26017;
var statearr_26024_26049 = state_26017__$1;
(statearr_26024_26049[(2)] = inst_26013);

(statearr_26024_26049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (3))){
var inst_26015 = (state_26017[(2)]);
var state_26017__$1 = state_26017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26017__$1,inst_26015);
} else {
if((state_val_26018 === (2))){
var inst_25989 = (state_26017[(10)]);
var inst_25991 = cljs.core.count.call(null,inst_25989);
var inst_25992 = (inst_25991 > (0));
var state_26017__$1 = state_26017;
if(cljs.core.truth_(inst_25992)){
var statearr_26026_26050 = state_26017__$1;
(statearr_26026_26050[(1)] = (4));

} else {
var statearr_26027_26051 = state_26017__$1;
(statearr_26027_26051[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (11))){
var inst_25989 = (state_26017[(10)]);
var inst_26006 = (state_26017[(2)]);
var tmp26025 = inst_25989;
var inst_25989__$1 = tmp26025;
var state_26017__$1 = (function (){var statearr_26028 = state_26017;
(statearr_26028[(11)] = inst_26006);

(statearr_26028[(10)] = inst_25989__$1);

return statearr_26028;
})();
var statearr_26029_26052 = state_26017__$1;
(statearr_26029_26052[(2)] = null);

(statearr_26029_26052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (9))){
var inst_25997 = (state_26017[(7)]);
var state_26017__$1 = state_26017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26017__$1,(11),out,inst_25997);
} else {
if((state_val_26018 === (5))){
var inst_26011 = cljs.core.async.close_BANG_.call(null,out);
var state_26017__$1 = state_26017;
var statearr_26030_26053 = state_26017__$1;
(statearr_26030_26053[(2)] = inst_26011);

(statearr_26030_26053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (10))){
var inst_26009 = (state_26017[(2)]);
var state_26017__$1 = state_26017;
var statearr_26031_26054 = state_26017__$1;
(statearr_26031_26054[(2)] = inst_26009);

(statearr_26031_26054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26018 === (8))){
var inst_25997 = (state_26017[(7)]);
var inst_25989 = (state_26017[(10)]);
var inst_25996 = (state_26017[(8)]);
var inst_25998 = (state_26017[(9)]);
var inst_26001 = (function (){var cs = inst_25989;
var vec__25994 = inst_25996;
var v = inst_25997;
var c = inst_25998;
return ((function (cs,vec__25994,v,c,inst_25997,inst_25989,inst_25996,inst_25998,state_val_26018,c__23947__auto___26045,out){
return (function (p1__25984_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25984_SHARP_);
});
;})(cs,vec__25994,v,c,inst_25997,inst_25989,inst_25996,inst_25998,state_val_26018,c__23947__auto___26045,out))
})();
var inst_26002 = cljs.core.filterv.call(null,inst_26001,inst_25989);
var inst_25989__$1 = inst_26002;
var state_26017__$1 = (function (){var statearr_26032 = state_26017;
(statearr_26032[(10)] = inst_25989__$1);

return statearr_26032;
})();
var statearr_26033_26055 = state_26017__$1;
(statearr_26033_26055[(2)] = null);

(statearr_26033_26055[(1)] = (2));


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
});})(c__23947__auto___26045,out))
;
return ((function (switch__23835__auto__,c__23947__auto___26045,out){
return (function() {
var cljs$core$async$state_machine__23836__auto__ = null;
var cljs$core$async$state_machine__23836__auto____0 = (function (){
var statearr_26037 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26037[(0)] = cljs$core$async$state_machine__23836__auto__);

(statearr_26037[(1)] = (1));

return statearr_26037;
});
var cljs$core$async$state_machine__23836__auto____1 = (function (state_26017){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_26017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e26038){if((e26038 instanceof Object)){
var ex__23839__auto__ = e26038;
var statearr_26039_26056 = state_26017;
(statearr_26039_26056[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26057 = state_26017;
state_26017 = G__26057;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
cljs$core$async$state_machine__23836__auto__ = function(state_26017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23836__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23836__auto____1.call(this,state_26017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23836__auto____0;
cljs$core$async$state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23836__auto____1;
return cljs$core$async$state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto___26045,out))
})();
var state__23949__auto__ = (function (){var statearr_26040 = f__23948__auto__.call(null);
(statearr_26040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto___26045);

return statearr_26040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto___26045,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args26058 = [];
var len__22336__auto___26107 = arguments.length;
var i__22337__auto___26108 = (0);
while(true){
if((i__22337__auto___26108 < len__22336__auto___26107)){
args26058.push((arguments[i__22337__auto___26108]));

var G__26109 = (i__22337__auto___26108 + (1));
i__22337__auto___26108 = G__26109;
continue;
} else {
}
break;
}

var G__26060 = args26058.length;
switch (G__26060) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26058.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23947__auto___26111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto___26111,out){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto___26111,out){
return (function (state_26084){
var state_val_26085 = (state_26084[(1)]);
if((state_val_26085 === (7))){
var inst_26066 = (state_26084[(7)]);
var inst_26066__$1 = (state_26084[(2)]);
var inst_26067 = (inst_26066__$1 == null);
var inst_26068 = cljs.core.not.call(null,inst_26067);
var state_26084__$1 = (function (){var statearr_26086 = state_26084;
(statearr_26086[(7)] = inst_26066__$1);

return statearr_26086;
})();
if(inst_26068){
var statearr_26087_26112 = state_26084__$1;
(statearr_26087_26112[(1)] = (8));

} else {
var statearr_26088_26113 = state_26084__$1;
(statearr_26088_26113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26085 === (1))){
var inst_26061 = (0);
var state_26084__$1 = (function (){var statearr_26089 = state_26084;
(statearr_26089[(8)] = inst_26061);

return statearr_26089;
})();
var statearr_26090_26114 = state_26084__$1;
(statearr_26090_26114[(2)] = null);

(statearr_26090_26114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26085 === (4))){
var state_26084__$1 = state_26084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26084__$1,(7),ch);
} else {
if((state_val_26085 === (6))){
var inst_26079 = (state_26084[(2)]);
var state_26084__$1 = state_26084;
var statearr_26091_26115 = state_26084__$1;
(statearr_26091_26115[(2)] = inst_26079);

(statearr_26091_26115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26085 === (3))){
var inst_26081 = (state_26084[(2)]);
var inst_26082 = cljs.core.async.close_BANG_.call(null,out);
var state_26084__$1 = (function (){var statearr_26092 = state_26084;
(statearr_26092[(9)] = inst_26081);

return statearr_26092;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26084__$1,inst_26082);
} else {
if((state_val_26085 === (2))){
var inst_26061 = (state_26084[(8)]);
var inst_26063 = (inst_26061 < n);
var state_26084__$1 = state_26084;
if(cljs.core.truth_(inst_26063)){
var statearr_26093_26116 = state_26084__$1;
(statearr_26093_26116[(1)] = (4));

} else {
var statearr_26094_26117 = state_26084__$1;
(statearr_26094_26117[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26085 === (11))){
var inst_26061 = (state_26084[(8)]);
var inst_26071 = (state_26084[(2)]);
var inst_26072 = (inst_26061 + (1));
var inst_26061__$1 = inst_26072;
var state_26084__$1 = (function (){var statearr_26095 = state_26084;
(statearr_26095[(8)] = inst_26061__$1);

(statearr_26095[(10)] = inst_26071);

return statearr_26095;
})();
var statearr_26096_26118 = state_26084__$1;
(statearr_26096_26118[(2)] = null);

(statearr_26096_26118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26085 === (9))){
var state_26084__$1 = state_26084;
var statearr_26097_26119 = state_26084__$1;
(statearr_26097_26119[(2)] = null);

(statearr_26097_26119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26085 === (5))){
var state_26084__$1 = state_26084;
var statearr_26098_26120 = state_26084__$1;
(statearr_26098_26120[(2)] = null);

(statearr_26098_26120[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26085 === (10))){
var inst_26076 = (state_26084[(2)]);
var state_26084__$1 = state_26084;
var statearr_26099_26121 = state_26084__$1;
(statearr_26099_26121[(2)] = inst_26076);

(statearr_26099_26121[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26085 === (8))){
var inst_26066 = (state_26084[(7)]);
var state_26084__$1 = state_26084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26084__$1,(11),out,inst_26066);
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
});})(c__23947__auto___26111,out))
;
return ((function (switch__23835__auto__,c__23947__auto___26111,out){
return (function() {
var cljs$core$async$state_machine__23836__auto__ = null;
var cljs$core$async$state_machine__23836__auto____0 = (function (){
var statearr_26103 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26103[(0)] = cljs$core$async$state_machine__23836__auto__);

(statearr_26103[(1)] = (1));

return statearr_26103;
});
var cljs$core$async$state_machine__23836__auto____1 = (function (state_26084){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_26084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e26104){if((e26104 instanceof Object)){
var ex__23839__auto__ = e26104;
var statearr_26105_26122 = state_26084;
(statearr_26105_26122[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26123 = state_26084;
state_26084 = G__26123;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
cljs$core$async$state_machine__23836__auto__ = function(state_26084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23836__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23836__auto____1.call(this,state_26084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23836__auto____0;
cljs$core$async$state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23836__auto____1;
return cljs$core$async$state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto___26111,out))
})();
var state__23949__auto__ = (function (){var statearr_26106 = f__23948__auto__.call(null);
(statearr_26106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto___26111);

return statearr_26106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto___26111,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26131 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26131 = (function (map_LT_,f,ch,meta26132){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26132 = meta26132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26133,meta26132__$1){
var self__ = this;
var _26133__$1 = this;
return (new cljs.core.async.t_cljs$core$async26131(self__.map_LT_,self__.f,self__.ch,meta26132__$1));
});

cljs.core.async.t_cljs$core$async26131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26133){
var self__ = this;
var _26133__$1 = this;
return self__.meta26132;
});

cljs.core.async.t_cljs$core$async26131.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26131.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26131.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26131.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26131.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26134 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26134 = (function (map_LT_,f,ch,meta26132,_,fn1,meta26135){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26132 = meta26132;
this._ = _;
this.fn1 = fn1;
this.meta26135 = meta26135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26136,meta26135__$1){
var self__ = this;
var _26136__$1 = this;
return (new cljs.core.async.t_cljs$core$async26134(self__.map_LT_,self__.f,self__.ch,self__.meta26132,self__._,self__.fn1,meta26135__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26134.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26136){
var self__ = this;
var _26136__$1 = this;
return self__.meta26135;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26134.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26134.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26134.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26134.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26124_SHARP_){
return f1.call(null,(((p1__26124_SHARP_ == null))?null:self__.f.call(null,p1__26124_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26134.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26132","meta26132",-1870829994,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26131","cljs.core.async/t_cljs$core$async26131",-1222745871,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26135","meta26135",668526036,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26134.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26134.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26134";

cljs.core.async.t_cljs$core$async26134.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__21876__auto__,writer__21877__auto__,opt__21878__auto__){
return cljs.core._write.call(null,writer__21877__auto__,"cljs.core.async/t_cljs$core$async26134");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26134 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26134(map_LT___$1,f__$1,ch__$1,meta26132__$1,___$2,fn1__$1,meta26135){
return (new cljs.core.async.t_cljs$core$async26134(map_LT___$1,f__$1,ch__$1,meta26132__$1,___$2,fn1__$1,meta26135));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26134(self__.map_LT_,self__.f,self__.ch,self__.meta26132,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21266__auto__ = ret;
if(cljs.core.truth_(and__21266__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21266__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26131.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26131.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26132","meta26132",-1870829994,null)], null);
});

cljs.core.async.t_cljs$core$async26131.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26131";

cljs.core.async.t_cljs$core$async26131.cljs$lang$ctorPrWriter = (function (this__21876__auto__,writer__21877__auto__,opt__21878__auto__){
return cljs.core._write.call(null,writer__21877__auto__,"cljs.core.async/t_cljs$core$async26131");
});

cljs.core.async.__GT_t_cljs$core$async26131 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26131(map_LT___$1,f__$1,ch__$1,meta26132){
return (new cljs.core.async.t_cljs$core$async26131(map_LT___$1,f__$1,ch__$1,meta26132));
});

}

return (new cljs.core.async.t_cljs$core$async26131(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26140 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26140 = (function (map_GT_,f,ch,meta26141){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26141 = meta26141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26142,meta26141__$1){
var self__ = this;
var _26142__$1 = this;
return (new cljs.core.async.t_cljs$core$async26140(self__.map_GT_,self__.f,self__.ch,meta26141__$1));
});

cljs.core.async.t_cljs$core$async26140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26142){
var self__ = this;
var _26142__$1 = this;
return self__.meta26141;
});

cljs.core.async.t_cljs$core$async26140.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26140.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26140.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26140.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26140.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26140.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26140.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26141","meta26141",756686170,null)], null);
});

cljs.core.async.t_cljs$core$async26140.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26140";

cljs.core.async.t_cljs$core$async26140.cljs$lang$ctorPrWriter = (function (this__21876__auto__,writer__21877__auto__,opt__21878__auto__){
return cljs.core._write.call(null,writer__21877__auto__,"cljs.core.async/t_cljs$core$async26140");
});

cljs.core.async.__GT_t_cljs$core$async26140 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26140(map_GT___$1,f__$1,ch__$1,meta26141){
return (new cljs.core.async.t_cljs$core$async26140(map_GT___$1,f__$1,ch__$1,meta26141));
});

}

return (new cljs.core.async.t_cljs$core$async26140(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26146 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26146 = (function (filter_GT_,p,ch,meta26147){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26147 = meta26147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26148,meta26147__$1){
var self__ = this;
var _26148__$1 = this;
return (new cljs.core.async.t_cljs$core$async26146(self__.filter_GT_,self__.p,self__.ch,meta26147__$1));
});

cljs.core.async.t_cljs$core$async26146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26148){
var self__ = this;
var _26148__$1 = this;
return self__.meta26147;
});

cljs.core.async.t_cljs$core$async26146.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26146.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26146.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26146.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26146.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26146.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26146.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26147","meta26147",-82244978,null)], null);
});

cljs.core.async.t_cljs$core$async26146.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26146";

cljs.core.async.t_cljs$core$async26146.cljs$lang$ctorPrWriter = (function (this__21876__auto__,writer__21877__auto__,opt__21878__auto__){
return cljs.core._write.call(null,writer__21877__auto__,"cljs.core.async/t_cljs$core$async26146");
});

cljs.core.async.__GT_t_cljs$core$async26146 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26146(filter_GT___$1,p__$1,ch__$1,meta26147){
return (new cljs.core.async.t_cljs$core$async26146(filter_GT___$1,p__$1,ch__$1,meta26147));
});

}

return (new cljs.core.async.t_cljs$core$async26146(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args26149 = [];
var len__22336__auto___26193 = arguments.length;
var i__22337__auto___26194 = (0);
while(true){
if((i__22337__auto___26194 < len__22336__auto___26193)){
args26149.push((arguments[i__22337__auto___26194]));

var G__26195 = (i__22337__auto___26194 + (1));
i__22337__auto___26194 = G__26195;
continue;
} else {
}
break;
}

var G__26151 = args26149.length;
switch (G__26151) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26149.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23947__auto___26197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto___26197,out){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto___26197,out){
return (function (state_26172){
var state_val_26173 = (state_26172[(1)]);
if((state_val_26173 === (7))){
var inst_26168 = (state_26172[(2)]);
var state_26172__$1 = state_26172;
var statearr_26174_26198 = state_26172__$1;
(statearr_26174_26198[(2)] = inst_26168);

(statearr_26174_26198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26173 === (1))){
var state_26172__$1 = state_26172;
var statearr_26175_26199 = state_26172__$1;
(statearr_26175_26199[(2)] = null);

(statearr_26175_26199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26173 === (4))){
var inst_26154 = (state_26172[(7)]);
var inst_26154__$1 = (state_26172[(2)]);
var inst_26155 = (inst_26154__$1 == null);
var state_26172__$1 = (function (){var statearr_26176 = state_26172;
(statearr_26176[(7)] = inst_26154__$1);

return statearr_26176;
})();
if(cljs.core.truth_(inst_26155)){
var statearr_26177_26200 = state_26172__$1;
(statearr_26177_26200[(1)] = (5));

} else {
var statearr_26178_26201 = state_26172__$1;
(statearr_26178_26201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26173 === (6))){
var inst_26154 = (state_26172[(7)]);
var inst_26159 = p.call(null,inst_26154);
var state_26172__$1 = state_26172;
if(cljs.core.truth_(inst_26159)){
var statearr_26179_26202 = state_26172__$1;
(statearr_26179_26202[(1)] = (8));

} else {
var statearr_26180_26203 = state_26172__$1;
(statearr_26180_26203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26173 === (3))){
var inst_26170 = (state_26172[(2)]);
var state_26172__$1 = state_26172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26172__$1,inst_26170);
} else {
if((state_val_26173 === (2))){
var state_26172__$1 = state_26172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26172__$1,(4),ch);
} else {
if((state_val_26173 === (11))){
var inst_26162 = (state_26172[(2)]);
var state_26172__$1 = state_26172;
var statearr_26181_26204 = state_26172__$1;
(statearr_26181_26204[(2)] = inst_26162);

(statearr_26181_26204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26173 === (9))){
var state_26172__$1 = state_26172;
var statearr_26182_26205 = state_26172__$1;
(statearr_26182_26205[(2)] = null);

(statearr_26182_26205[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26173 === (5))){
var inst_26157 = cljs.core.async.close_BANG_.call(null,out);
var state_26172__$1 = state_26172;
var statearr_26183_26206 = state_26172__$1;
(statearr_26183_26206[(2)] = inst_26157);

(statearr_26183_26206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26173 === (10))){
var inst_26165 = (state_26172[(2)]);
var state_26172__$1 = (function (){var statearr_26184 = state_26172;
(statearr_26184[(8)] = inst_26165);

return statearr_26184;
})();
var statearr_26185_26207 = state_26172__$1;
(statearr_26185_26207[(2)] = null);

(statearr_26185_26207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26173 === (8))){
var inst_26154 = (state_26172[(7)]);
var state_26172__$1 = state_26172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26172__$1,(11),out,inst_26154);
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
});})(c__23947__auto___26197,out))
;
return ((function (switch__23835__auto__,c__23947__auto___26197,out){
return (function() {
var cljs$core$async$state_machine__23836__auto__ = null;
var cljs$core$async$state_machine__23836__auto____0 = (function (){
var statearr_26189 = [null,null,null,null,null,null,null,null,null];
(statearr_26189[(0)] = cljs$core$async$state_machine__23836__auto__);

(statearr_26189[(1)] = (1));

return statearr_26189;
});
var cljs$core$async$state_machine__23836__auto____1 = (function (state_26172){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_26172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e26190){if((e26190 instanceof Object)){
var ex__23839__auto__ = e26190;
var statearr_26191_26208 = state_26172;
(statearr_26191_26208[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26209 = state_26172;
state_26172 = G__26209;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
cljs$core$async$state_machine__23836__auto__ = function(state_26172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23836__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23836__auto____1.call(this,state_26172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23836__auto____0;
cljs$core$async$state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23836__auto____1;
return cljs$core$async$state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto___26197,out))
})();
var state__23949__auto__ = (function (){var statearr_26192 = f__23948__auto__.call(null);
(statearr_26192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto___26197);

return statearr_26192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto___26197,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26210 = [];
var len__22336__auto___26213 = arguments.length;
var i__22337__auto___26214 = (0);
while(true){
if((i__22337__auto___26214 < len__22336__auto___26213)){
args26210.push((arguments[i__22337__auto___26214]));

var G__26215 = (i__22337__auto___26214 + (1));
i__22337__auto___26214 = G__26215;
continue;
} else {
}
break;
}

var G__26212 = args26210.length;
switch (G__26212) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26210.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto__){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto__){
return (function (state_26382){
var state_val_26383 = (state_26382[(1)]);
if((state_val_26383 === (7))){
var inst_26378 = (state_26382[(2)]);
var state_26382__$1 = state_26382;
var statearr_26384_26425 = state_26382__$1;
(statearr_26384_26425[(2)] = inst_26378);

(statearr_26384_26425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26383 === (20))){
var inst_26348 = (state_26382[(7)]);
var inst_26359 = (state_26382[(2)]);
var inst_26360 = cljs.core.next.call(null,inst_26348);
var inst_26334 = inst_26360;
var inst_26335 = null;
var inst_26336 = (0);
var inst_26337 = (0);
var state_26382__$1 = (function (){var statearr_26385 = state_26382;
(statearr_26385[(8)] = inst_26334);

(statearr_26385[(9)] = inst_26336);

(statearr_26385[(10)] = inst_26335);

(statearr_26385[(11)] = inst_26359);

(statearr_26385[(12)] = inst_26337);

return statearr_26385;
})();
var statearr_26386_26426 = state_26382__$1;
(statearr_26386_26426[(2)] = null);

(statearr_26386_26426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26383 === (1))){
var state_26382__$1 = state_26382;
var statearr_26387_26427 = state_26382__$1;
(statearr_26387_26427[(2)] = null);

(statearr_26387_26427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26383 === (4))){
var inst_26323 = (state_26382[(13)]);
var inst_26323__$1 = (state_26382[(2)]);
var inst_26324 = (inst_26323__$1 == null);
var state_26382__$1 = (function (){var statearr_26388 = state_26382;
(statearr_26388[(13)] = inst_26323__$1);

return statearr_26388;
})();
if(cljs.core.truth_(inst_26324)){
var statearr_26389_26428 = state_26382__$1;
(statearr_26389_26428[(1)] = (5));

} else {
var statearr_26390_26429 = state_26382__$1;
(statearr_26390_26429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26383 === (15))){
var state_26382__$1 = state_26382;
var statearr_26394_26430 = state_26382__$1;
(statearr_26394_26430[(2)] = null);

(statearr_26394_26430[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26383 === (21))){
var state_26382__$1 = state_26382;
var statearr_26395_26431 = state_26382__$1;
(statearr_26395_26431[(2)] = null);

(statearr_26395_26431[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26383 === (13))){
var inst_26334 = (state_26382[(8)]);
var inst_26336 = (state_26382[(9)]);
var inst_26335 = (state_26382[(10)]);
var inst_26337 = (state_26382[(12)]);
var inst_26344 = (state_26382[(2)]);
var inst_26345 = (inst_26337 + (1));
var tmp26391 = inst_26334;
var tmp26392 = inst_26336;
var tmp26393 = inst_26335;
var inst_26334__$1 = tmp26391;
var inst_26335__$1 = tmp26393;
var inst_26336__$1 = tmp26392;
var inst_26337__$1 = inst_26345;
var state_26382__$1 = (function (){var statearr_26396 = state_26382;
(statearr_26396[(8)] = inst_26334__$1);

(statearr_26396[(14)] = inst_26344);

(statearr_26396[(9)] = inst_26336__$1);

(statearr_26396[(10)] = inst_26335__$1);

(statearr_26396[(12)] = inst_26337__$1);

return statearr_26396;
})();
var statearr_26397_26432 = state_26382__$1;
(statearr_26397_26432[(2)] = null);

(statearr_26397_26432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26383 === (22))){
var state_26382__$1 = state_26382;
var statearr_26398_26433 = state_26382__$1;
(statearr_26398_26433[(2)] = null);

(statearr_26398_26433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26383 === (6))){
var inst_26323 = (state_26382[(13)]);
var inst_26332 = f.call(null,inst_26323);
var inst_26333 = cljs.core.seq.call(null,inst_26332);
var inst_26334 = inst_26333;
var inst_26335 = null;
var inst_26336 = (0);
var inst_26337 = (0);
var state_26382__$1 = (function (){var statearr_26399 = state_26382;
(statearr_26399[(8)] = inst_26334);

(statearr_26399[(9)] = inst_26336);

(statearr_26399[(10)] = inst_26335);

(statearr_26399[(12)] = inst_26337);

return statearr_26399;
})();
var statearr_26400_26434 = state_26382__$1;
(statearr_26400_26434[(2)] = null);

(statearr_26400_26434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26383 === (17))){
var inst_26348 = (state_26382[(7)]);
var inst_26352 = cljs.core.chunk_first.call(null,inst_26348);
var inst_26353 = cljs.core.chunk_rest.call(null,inst_26348);
var inst_26354 = cljs.core.count.call(null,inst_26352);
var inst_26334 = inst_26353;
var inst_26335 = inst_26352;
var inst_26336 = inst_26354;
var inst_26337 = (0);
var state_26382__$1 = (function (){var statearr_26401 = state_26382;
(statearr_26401[(8)] = inst_26334);

(statearr_26401[(9)] = inst_26336);

(statearr_26401[(10)] = inst_26335);

(statearr_26401[(12)] = inst_26337);

return statearr_26401;
})();
var statearr_26402_26435 = state_26382__$1;
(statearr_26402_26435[(2)] = null);

(statearr_26402_26435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26383 === (3))){
var inst_26380 = (state_26382[(2)]);
var state_26382__$1 = state_26382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26382__$1,inst_26380);
} else {
if((state_val_26383 === (12))){
var inst_26368 = (state_26382[(2)]);
var state_26382__$1 = state_26382;
var statearr_26403_26436 = state_26382__$1;
(statearr_26403_26436[(2)] = inst_26368);

(statearr_26403_26436[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26383 === (2))){
var state_26382__$1 = state_26382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26382__$1,(4),in$);
} else {
if((state_val_26383 === (23))){
var inst_26376 = (state_26382[(2)]);
var state_26382__$1 = state_26382;
var statearr_26404_26437 = state_26382__$1;
(statearr_26404_26437[(2)] = inst_26376);

(statearr_26404_26437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26383 === (19))){
var inst_26363 = (state_26382[(2)]);
var state_26382__$1 = state_26382;
var statearr_26405_26438 = state_26382__$1;
(statearr_26405_26438[(2)] = inst_26363);

(statearr_26405_26438[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26383 === (11))){
var inst_26334 = (state_26382[(8)]);
var inst_26348 = (state_26382[(7)]);
var inst_26348__$1 = cljs.core.seq.call(null,inst_26334);
var state_26382__$1 = (function (){var statearr_26406 = state_26382;
(statearr_26406[(7)] = inst_26348__$1);

return statearr_26406;
})();
if(inst_26348__$1){
var statearr_26407_26439 = state_26382__$1;
(statearr_26407_26439[(1)] = (14));

} else {
var statearr_26408_26440 = state_26382__$1;
(statearr_26408_26440[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26383 === (9))){
var inst_26370 = (state_26382[(2)]);
var inst_26371 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26382__$1 = (function (){var statearr_26409 = state_26382;
(statearr_26409[(15)] = inst_26370);

return statearr_26409;
})();
if(cljs.core.truth_(inst_26371)){
var statearr_26410_26441 = state_26382__$1;
(statearr_26410_26441[(1)] = (21));

} else {
var statearr_26411_26442 = state_26382__$1;
(statearr_26411_26442[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26383 === (5))){
var inst_26326 = cljs.core.async.close_BANG_.call(null,out);
var state_26382__$1 = state_26382;
var statearr_26412_26443 = state_26382__$1;
(statearr_26412_26443[(2)] = inst_26326);

(statearr_26412_26443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26383 === (14))){
var inst_26348 = (state_26382[(7)]);
var inst_26350 = cljs.core.chunked_seq_QMARK_.call(null,inst_26348);
var state_26382__$1 = state_26382;
if(inst_26350){
var statearr_26413_26444 = state_26382__$1;
(statearr_26413_26444[(1)] = (17));

} else {
var statearr_26414_26445 = state_26382__$1;
(statearr_26414_26445[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26383 === (16))){
var inst_26366 = (state_26382[(2)]);
var state_26382__$1 = state_26382;
var statearr_26415_26446 = state_26382__$1;
(statearr_26415_26446[(2)] = inst_26366);

(statearr_26415_26446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26383 === (10))){
var inst_26335 = (state_26382[(10)]);
var inst_26337 = (state_26382[(12)]);
var inst_26342 = cljs.core._nth.call(null,inst_26335,inst_26337);
var state_26382__$1 = state_26382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26382__$1,(13),out,inst_26342);
} else {
if((state_val_26383 === (18))){
var inst_26348 = (state_26382[(7)]);
var inst_26357 = cljs.core.first.call(null,inst_26348);
var state_26382__$1 = state_26382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26382__$1,(20),out,inst_26357);
} else {
if((state_val_26383 === (8))){
var inst_26336 = (state_26382[(9)]);
var inst_26337 = (state_26382[(12)]);
var inst_26339 = (inst_26337 < inst_26336);
var inst_26340 = inst_26339;
var state_26382__$1 = state_26382;
if(cljs.core.truth_(inst_26340)){
var statearr_26416_26447 = state_26382__$1;
(statearr_26416_26447[(1)] = (10));

} else {
var statearr_26417_26448 = state_26382__$1;
(statearr_26417_26448[(1)] = (11));

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
});})(c__23947__auto__))
;
return ((function (switch__23835__auto__,c__23947__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23836__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23836__auto____0 = (function (){
var statearr_26421 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26421[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23836__auto__);

(statearr_26421[(1)] = (1));

return statearr_26421;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23836__auto____1 = (function (state_26382){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_26382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e26422){if((e26422 instanceof Object)){
var ex__23839__auto__ = e26422;
var statearr_26423_26449 = state_26382;
(statearr_26423_26449[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26450 = state_26382;
state_26382 = G__26450;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23836__auto__ = function(state_26382){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23836__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23836__auto____1.call(this,state_26382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23836__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23836__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto__))
})();
var state__23949__auto__ = (function (){var statearr_26424 = f__23948__auto__.call(null);
(statearr_26424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto__);

return statearr_26424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto__))
);

return c__23947__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26451 = [];
var len__22336__auto___26454 = arguments.length;
var i__22337__auto___26455 = (0);
while(true){
if((i__22337__auto___26455 < len__22336__auto___26454)){
args26451.push((arguments[i__22337__auto___26455]));

var G__26456 = (i__22337__auto___26455 + (1));
i__22337__auto___26455 = G__26456;
continue;
} else {
}
break;
}

var G__26453 = args26451.length;
switch (G__26453) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26451.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args26458 = [];
var len__22336__auto___26461 = arguments.length;
var i__22337__auto___26462 = (0);
while(true){
if((i__22337__auto___26462 < len__22336__auto___26461)){
args26458.push((arguments[i__22337__auto___26462]));

var G__26463 = (i__22337__auto___26462 + (1));
i__22337__auto___26462 = G__26463;
continue;
} else {
}
break;
}

var G__26460 = args26458.length;
switch (G__26460) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26458.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args26465 = [];
var len__22336__auto___26516 = arguments.length;
var i__22337__auto___26517 = (0);
while(true){
if((i__22337__auto___26517 < len__22336__auto___26516)){
args26465.push((arguments[i__22337__auto___26517]));

var G__26518 = (i__22337__auto___26517 + (1));
i__22337__auto___26517 = G__26518;
continue;
} else {
}
break;
}

var G__26467 = args26465.length;
switch (G__26467) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26465.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23947__auto___26520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto___26520,out){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto___26520,out){
return (function (state_26491){
var state_val_26492 = (state_26491[(1)]);
if((state_val_26492 === (7))){
var inst_26486 = (state_26491[(2)]);
var state_26491__$1 = state_26491;
var statearr_26493_26521 = state_26491__$1;
(statearr_26493_26521[(2)] = inst_26486);

(statearr_26493_26521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26492 === (1))){
var inst_26468 = null;
var state_26491__$1 = (function (){var statearr_26494 = state_26491;
(statearr_26494[(7)] = inst_26468);

return statearr_26494;
})();
var statearr_26495_26522 = state_26491__$1;
(statearr_26495_26522[(2)] = null);

(statearr_26495_26522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26492 === (4))){
var inst_26471 = (state_26491[(8)]);
var inst_26471__$1 = (state_26491[(2)]);
var inst_26472 = (inst_26471__$1 == null);
var inst_26473 = cljs.core.not.call(null,inst_26472);
var state_26491__$1 = (function (){var statearr_26496 = state_26491;
(statearr_26496[(8)] = inst_26471__$1);

return statearr_26496;
})();
if(inst_26473){
var statearr_26497_26523 = state_26491__$1;
(statearr_26497_26523[(1)] = (5));

} else {
var statearr_26498_26524 = state_26491__$1;
(statearr_26498_26524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26492 === (6))){
var state_26491__$1 = state_26491;
var statearr_26499_26525 = state_26491__$1;
(statearr_26499_26525[(2)] = null);

(statearr_26499_26525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26492 === (3))){
var inst_26488 = (state_26491[(2)]);
var inst_26489 = cljs.core.async.close_BANG_.call(null,out);
var state_26491__$1 = (function (){var statearr_26500 = state_26491;
(statearr_26500[(9)] = inst_26488);

return statearr_26500;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26491__$1,inst_26489);
} else {
if((state_val_26492 === (2))){
var state_26491__$1 = state_26491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26491__$1,(4),ch);
} else {
if((state_val_26492 === (11))){
var inst_26471 = (state_26491[(8)]);
var inst_26480 = (state_26491[(2)]);
var inst_26468 = inst_26471;
var state_26491__$1 = (function (){var statearr_26501 = state_26491;
(statearr_26501[(7)] = inst_26468);

(statearr_26501[(10)] = inst_26480);

return statearr_26501;
})();
var statearr_26502_26526 = state_26491__$1;
(statearr_26502_26526[(2)] = null);

(statearr_26502_26526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26492 === (9))){
var inst_26471 = (state_26491[(8)]);
var state_26491__$1 = state_26491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26491__$1,(11),out,inst_26471);
} else {
if((state_val_26492 === (5))){
var inst_26468 = (state_26491[(7)]);
var inst_26471 = (state_26491[(8)]);
var inst_26475 = cljs.core._EQ_.call(null,inst_26471,inst_26468);
var state_26491__$1 = state_26491;
if(inst_26475){
var statearr_26504_26527 = state_26491__$1;
(statearr_26504_26527[(1)] = (8));

} else {
var statearr_26505_26528 = state_26491__$1;
(statearr_26505_26528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26492 === (10))){
var inst_26483 = (state_26491[(2)]);
var state_26491__$1 = state_26491;
var statearr_26506_26529 = state_26491__$1;
(statearr_26506_26529[(2)] = inst_26483);

(statearr_26506_26529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26492 === (8))){
var inst_26468 = (state_26491[(7)]);
var tmp26503 = inst_26468;
var inst_26468__$1 = tmp26503;
var state_26491__$1 = (function (){var statearr_26507 = state_26491;
(statearr_26507[(7)] = inst_26468__$1);

return statearr_26507;
})();
var statearr_26508_26530 = state_26491__$1;
(statearr_26508_26530[(2)] = null);

(statearr_26508_26530[(1)] = (2));


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
});})(c__23947__auto___26520,out))
;
return ((function (switch__23835__auto__,c__23947__auto___26520,out){
return (function() {
var cljs$core$async$state_machine__23836__auto__ = null;
var cljs$core$async$state_machine__23836__auto____0 = (function (){
var statearr_26512 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26512[(0)] = cljs$core$async$state_machine__23836__auto__);

(statearr_26512[(1)] = (1));

return statearr_26512;
});
var cljs$core$async$state_machine__23836__auto____1 = (function (state_26491){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_26491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e26513){if((e26513 instanceof Object)){
var ex__23839__auto__ = e26513;
var statearr_26514_26531 = state_26491;
(statearr_26514_26531[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26532 = state_26491;
state_26491 = G__26532;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
cljs$core$async$state_machine__23836__auto__ = function(state_26491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23836__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23836__auto____1.call(this,state_26491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23836__auto____0;
cljs$core$async$state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23836__auto____1;
return cljs$core$async$state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto___26520,out))
})();
var state__23949__auto__ = (function (){var statearr_26515 = f__23948__auto__.call(null);
(statearr_26515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto___26520);

return statearr_26515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto___26520,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26533 = [];
var len__22336__auto___26603 = arguments.length;
var i__22337__auto___26604 = (0);
while(true){
if((i__22337__auto___26604 < len__22336__auto___26603)){
args26533.push((arguments[i__22337__auto___26604]));

var G__26605 = (i__22337__auto___26604 + (1));
i__22337__auto___26604 = G__26605;
continue;
} else {
}
break;
}

var G__26535 = args26533.length;
switch (G__26535) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26533.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23947__auto___26607 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto___26607,out){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto___26607,out){
return (function (state_26573){
var state_val_26574 = (state_26573[(1)]);
if((state_val_26574 === (7))){
var inst_26569 = (state_26573[(2)]);
var state_26573__$1 = state_26573;
var statearr_26575_26608 = state_26573__$1;
(statearr_26575_26608[(2)] = inst_26569);

(statearr_26575_26608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26574 === (1))){
var inst_26536 = (new Array(n));
var inst_26537 = inst_26536;
var inst_26538 = (0);
var state_26573__$1 = (function (){var statearr_26576 = state_26573;
(statearr_26576[(7)] = inst_26538);

(statearr_26576[(8)] = inst_26537);

return statearr_26576;
})();
var statearr_26577_26609 = state_26573__$1;
(statearr_26577_26609[(2)] = null);

(statearr_26577_26609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26574 === (4))){
var inst_26541 = (state_26573[(9)]);
var inst_26541__$1 = (state_26573[(2)]);
var inst_26542 = (inst_26541__$1 == null);
var inst_26543 = cljs.core.not.call(null,inst_26542);
var state_26573__$1 = (function (){var statearr_26578 = state_26573;
(statearr_26578[(9)] = inst_26541__$1);

return statearr_26578;
})();
if(inst_26543){
var statearr_26579_26610 = state_26573__$1;
(statearr_26579_26610[(1)] = (5));

} else {
var statearr_26580_26611 = state_26573__$1;
(statearr_26580_26611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26574 === (15))){
var inst_26563 = (state_26573[(2)]);
var state_26573__$1 = state_26573;
var statearr_26581_26612 = state_26573__$1;
(statearr_26581_26612[(2)] = inst_26563);

(statearr_26581_26612[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26574 === (13))){
var state_26573__$1 = state_26573;
var statearr_26582_26613 = state_26573__$1;
(statearr_26582_26613[(2)] = null);

(statearr_26582_26613[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26574 === (6))){
var inst_26538 = (state_26573[(7)]);
var inst_26559 = (inst_26538 > (0));
var state_26573__$1 = state_26573;
if(cljs.core.truth_(inst_26559)){
var statearr_26583_26614 = state_26573__$1;
(statearr_26583_26614[(1)] = (12));

} else {
var statearr_26584_26615 = state_26573__$1;
(statearr_26584_26615[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26574 === (3))){
var inst_26571 = (state_26573[(2)]);
var state_26573__$1 = state_26573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26573__$1,inst_26571);
} else {
if((state_val_26574 === (12))){
var inst_26537 = (state_26573[(8)]);
var inst_26561 = cljs.core.vec.call(null,inst_26537);
var state_26573__$1 = state_26573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26573__$1,(15),out,inst_26561);
} else {
if((state_val_26574 === (2))){
var state_26573__$1 = state_26573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26573__$1,(4),ch);
} else {
if((state_val_26574 === (11))){
var inst_26553 = (state_26573[(2)]);
var inst_26554 = (new Array(n));
var inst_26537 = inst_26554;
var inst_26538 = (0);
var state_26573__$1 = (function (){var statearr_26585 = state_26573;
(statearr_26585[(7)] = inst_26538);

(statearr_26585[(8)] = inst_26537);

(statearr_26585[(10)] = inst_26553);

return statearr_26585;
})();
var statearr_26586_26616 = state_26573__$1;
(statearr_26586_26616[(2)] = null);

(statearr_26586_26616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26574 === (9))){
var inst_26537 = (state_26573[(8)]);
var inst_26551 = cljs.core.vec.call(null,inst_26537);
var state_26573__$1 = state_26573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26573__$1,(11),out,inst_26551);
} else {
if((state_val_26574 === (5))){
var inst_26538 = (state_26573[(7)]);
var inst_26537 = (state_26573[(8)]);
var inst_26541 = (state_26573[(9)]);
var inst_26546 = (state_26573[(11)]);
var inst_26545 = (inst_26537[inst_26538] = inst_26541);
var inst_26546__$1 = (inst_26538 + (1));
var inst_26547 = (inst_26546__$1 < n);
var state_26573__$1 = (function (){var statearr_26587 = state_26573;
(statearr_26587[(12)] = inst_26545);

(statearr_26587[(11)] = inst_26546__$1);

return statearr_26587;
})();
if(cljs.core.truth_(inst_26547)){
var statearr_26588_26617 = state_26573__$1;
(statearr_26588_26617[(1)] = (8));

} else {
var statearr_26589_26618 = state_26573__$1;
(statearr_26589_26618[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26574 === (14))){
var inst_26566 = (state_26573[(2)]);
var inst_26567 = cljs.core.async.close_BANG_.call(null,out);
var state_26573__$1 = (function (){var statearr_26591 = state_26573;
(statearr_26591[(13)] = inst_26566);

return statearr_26591;
})();
var statearr_26592_26619 = state_26573__$1;
(statearr_26592_26619[(2)] = inst_26567);

(statearr_26592_26619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26574 === (10))){
var inst_26557 = (state_26573[(2)]);
var state_26573__$1 = state_26573;
var statearr_26593_26620 = state_26573__$1;
(statearr_26593_26620[(2)] = inst_26557);

(statearr_26593_26620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26574 === (8))){
var inst_26537 = (state_26573[(8)]);
var inst_26546 = (state_26573[(11)]);
var tmp26590 = inst_26537;
var inst_26537__$1 = tmp26590;
var inst_26538 = inst_26546;
var state_26573__$1 = (function (){var statearr_26594 = state_26573;
(statearr_26594[(7)] = inst_26538);

(statearr_26594[(8)] = inst_26537__$1);

return statearr_26594;
})();
var statearr_26595_26621 = state_26573__$1;
(statearr_26595_26621[(2)] = null);

(statearr_26595_26621[(1)] = (2));


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
});})(c__23947__auto___26607,out))
;
return ((function (switch__23835__auto__,c__23947__auto___26607,out){
return (function() {
var cljs$core$async$state_machine__23836__auto__ = null;
var cljs$core$async$state_machine__23836__auto____0 = (function (){
var statearr_26599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26599[(0)] = cljs$core$async$state_machine__23836__auto__);

(statearr_26599[(1)] = (1));

return statearr_26599;
});
var cljs$core$async$state_machine__23836__auto____1 = (function (state_26573){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_26573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e26600){if((e26600 instanceof Object)){
var ex__23839__auto__ = e26600;
var statearr_26601_26622 = state_26573;
(statearr_26601_26622[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26623 = state_26573;
state_26573 = G__26623;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
cljs$core$async$state_machine__23836__auto__ = function(state_26573){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23836__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23836__auto____1.call(this,state_26573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23836__auto____0;
cljs$core$async$state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23836__auto____1;
return cljs$core$async$state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto___26607,out))
})();
var state__23949__auto__ = (function (){var statearr_26602 = f__23948__auto__.call(null);
(statearr_26602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto___26607);

return statearr_26602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto___26607,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26624 = [];
var len__22336__auto___26698 = arguments.length;
var i__22337__auto___26699 = (0);
while(true){
if((i__22337__auto___26699 < len__22336__auto___26698)){
args26624.push((arguments[i__22337__auto___26699]));

var G__26700 = (i__22337__auto___26699 + (1));
i__22337__auto___26699 = G__26700;
continue;
} else {
}
break;
}

var G__26626 = args26624.length;
switch (G__26626) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26624.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23947__auto___26702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23947__auto___26702,out){
return (function (){
var f__23948__auto__ = (function (){var switch__23835__auto__ = ((function (c__23947__auto___26702,out){
return (function (state_26668){
var state_val_26669 = (state_26668[(1)]);
if((state_val_26669 === (7))){
var inst_26664 = (state_26668[(2)]);
var state_26668__$1 = state_26668;
var statearr_26670_26703 = state_26668__$1;
(statearr_26670_26703[(2)] = inst_26664);

(statearr_26670_26703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26669 === (1))){
var inst_26627 = [];
var inst_26628 = inst_26627;
var inst_26629 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26668__$1 = (function (){var statearr_26671 = state_26668;
(statearr_26671[(7)] = inst_26628);

(statearr_26671[(8)] = inst_26629);

return statearr_26671;
})();
var statearr_26672_26704 = state_26668__$1;
(statearr_26672_26704[(2)] = null);

(statearr_26672_26704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26669 === (4))){
var inst_26632 = (state_26668[(9)]);
var inst_26632__$1 = (state_26668[(2)]);
var inst_26633 = (inst_26632__$1 == null);
var inst_26634 = cljs.core.not.call(null,inst_26633);
var state_26668__$1 = (function (){var statearr_26673 = state_26668;
(statearr_26673[(9)] = inst_26632__$1);

return statearr_26673;
})();
if(inst_26634){
var statearr_26674_26705 = state_26668__$1;
(statearr_26674_26705[(1)] = (5));

} else {
var statearr_26675_26706 = state_26668__$1;
(statearr_26675_26706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26669 === (15))){
var inst_26658 = (state_26668[(2)]);
var state_26668__$1 = state_26668;
var statearr_26676_26707 = state_26668__$1;
(statearr_26676_26707[(2)] = inst_26658);

(statearr_26676_26707[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26669 === (13))){
var state_26668__$1 = state_26668;
var statearr_26677_26708 = state_26668__$1;
(statearr_26677_26708[(2)] = null);

(statearr_26677_26708[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26669 === (6))){
var inst_26628 = (state_26668[(7)]);
var inst_26653 = inst_26628.length;
var inst_26654 = (inst_26653 > (0));
var state_26668__$1 = state_26668;
if(cljs.core.truth_(inst_26654)){
var statearr_26678_26709 = state_26668__$1;
(statearr_26678_26709[(1)] = (12));

} else {
var statearr_26679_26710 = state_26668__$1;
(statearr_26679_26710[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26669 === (3))){
var inst_26666 = (state_26668[(2)]);
var state_26668__$1 = state_26668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26668__$1,inst_26666);
} else {
if((state_val_26669 === (12))){
var inst_26628 = (state_26668[(7)]);
var inst_26656 = cljs.core.vec.call(null,inst_26628);
var state_26668__$1 = state_26668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26668__$1,(15),out,inst_26656);
} else {
if((state_val_26669 === (2))){
var state_26668__$1 = state_26668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26668__$1,(4),ch);
} else {
if((state_val_26669 === (11))){
var inst_26636 = (state_26668[(10)]);
var inst_26632 = (state_26668[(9)]);
var inst_26646 = (state_26668[(2)]);
var inst_26647 = [];
var inst_26648 = inst_26647.push(inst_26632);
var inst_26628 = inst_26647;
var inst_26629 = inst_26636;
var state_26668__$1 = (function (){var statearr_26680 = state_26668;
(statearr_26680[(11)] = inst_26648);

(statearr_26680[(7)] = inst_26628);

(statearr_26680[(8)] = inst_26629);

(statearr_26680[(12)] = inst_26646);

return statearr_26680;
})();
var statearr_26681_26711 = state_26668__$1;
(statearr_26681_26711[(2)] = null);

(statearr_26681_26711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26669 === (9))){
var inst_26628 = (state_26668[(7)]);
var inst_26644 = cljs.core.vec.call(null,inst_26628);
var state_26668__$1 = state_26668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26668__$1,(11),out,inst_26644);
} else {
if((state_val_26669 === (5))){
var inst_26629 = (state_26668[(8)]);
var inst_26636 = (state_26668[(10)]);
var inst_26632 = (state_26668[(9)]);
var inst_26636__$1 = f.call(null,inst_26632);
var inst_26637 = cljs.core._EQ_.call(null,inst_26636__$1,inst_26629);
var inst_26638 = cljs.core.keyword_identical_QMARK_.call(null,inst_26629,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26639 = (inst_26637) || (inst_26638);
var state_26668__$1 = (function (){var statearr_26682 = state_26668;
(statearr_26682[(10)] = inst_26636__$1);

return statearr_26682;
})();
if(cljs.core.truth_(inst_26639)){
var statearr_26683_26712 = state_26668__$1;
(statearr_26683_26712[(1)] = (8));

} else {
var statearr_26684_26713 = state_26668__$1;
(statearr_26684_26713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26669 === (14))){
var inst_26661 = (state_26668[(2)]);
var inst_26662 = cljs.core.async.close_BANG_.call(null,out);
var state_26668__$1 = (function (){var statearr_26686 = state_26668;
(statearr_26686[(13)] = inst_26661);

return statearr_26686;
})();
var statearr_26687_26714 = state_26668__$1;
(statearr_26687_26714[(2)] = inst_26662);

(statearr_26687_26714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26669 === (10))){
var inst_26651 = (state_26668[(2)]);
var state_26668__$1 = state_26668;
var statearr_26688_26715 = state_26668__$1;
(statearr_26688_26715[(2)] = inst_26651);

(statearr_26688_26715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26669 === (8))){
var inst_26628 = (state_26668[(7)]);
var inst_26636 = (state_26668[(10)]);
var inst_26632 = (state_26668[(9)]);
var inst_26641 = inst_26628.push(inst_26632);
var tmp26685 = inst_26628;
var inst_26628__$1 = tmp26685;
var inst_26629 = inst_26636;
var state_26668__$1 = (function (){var statearr_26689 = state_26668;
(statearr_26689[(7)] = inst_26628__$1);

(statearr_26689[(14)] = inst_26641);

(statearr_26689[(8)] = inst_26629);

return statearr_26689;
})();
var statearr_26690_26716 = state_26668__$1;
(statearr_26690_26716[(2)] = null);

(statearr_26690_26716[(1)] = (2));


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
});})(c__23947__auto___26702,out))
;
return ((function (switch__23835__auto__,c__23947__auto___26702,out){
return (function() {
var cljs$core$async$state_machine__23836__auto__ = null;
var cljs$core$async$state_machine__23836__auto____0 = (function (){
var statearr_26694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26694[(0)] = cljs$core$async$state_machine__23836__auto__);

(statearr_26694[(1)] = (1));

return statearr_26694;
});
var cljs$core$async$state_machine__23836__auto____1 = (function (state_26668){
while(true){
var ret_value__23837__auto__ = (function (){try{while(true){
var result__23838__auto__ = switch__23835__auto__.call(null,state_26668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23838__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23838__auto__;
}
break;
}
}catch (e26695){if((e26695 instanceof Object)){
var ex__23839__auto__ = e26695;
var statearr_26696_26717 = state_26668;
(statearr_26696_26717[(5)] = ex__23839__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26718 = state_26668;
state_26668 = G__26718;
continue;
} else {
return ret_value__23837__auto__;
}
break;
}
});
cljs$core$async$state_machine__23836__auto__ = function(state_26668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23836__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23836__auto____1.call(this,state_26668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23836__auto____0;
cljs$core$async$state_machine__23836__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23836__auto____1;
return cljs$core$async$state_machine__23836__auto__;
})()
;})(switch__23835__auto__,c__23947__auto___26702,out))
})();
var state__23949__auto__ = (function (){var statearr_26697 = f__23948__auto__.call(null);
(statearr_26697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23947__auto___26702);

return statearr_26697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23949__auto__);
});})(c__23947__auto___26702,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map