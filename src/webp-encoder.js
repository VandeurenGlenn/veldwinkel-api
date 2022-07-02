
var webp_enc = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(webp_enc) {
  webp_enc = webp_enc || {};

var d;d||(d=typeof webp_enc !== 'undefined' ? webp_enc : {});var u={},w;for(w in d)d.hasOwnProperty(w)&&(u[w]=d[w]);var x=!1,y=!1,aa=!1,ba=!1;x="object"===typeof window;y="function"===typeof importScripts;aa="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;ba=!x&&!aa&&!y;var z="",B,C,ca,da;
if(aa)z=y?require("path").dirname(z)+"/":__dirname+"/",B=function(a,b){ca||(ca=require("fs"));da||(da=require("path"));a=da.normalize(a);return ca.readFileSync(a,b?null:"utf8")},C=function(a){a=B(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||D("Assertion failed: undefined");return a},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(a){throw a;}),process.on("unhandledRejection",D),d.inspect=function(){return"[Emscripten Module object]"};
else if(ba)"undefined"!=typeof read&&(B=function(a){return read(a)}),C=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||D("Assertion failed: undefined");return a},"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(x||y)y?z=self.location.href:document.currentScript&&(z=document.currentScript.src),_scriptDir&&
(z=_scriptDir),0!==z.indexOf("blob:")?z=z.substr(0,z.lastIndexOf("/")+1):z="",B=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},y&&(C=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});var ea=d.print||console.log.bind(console),E=d.printErr||console.warn.bind(console);for(w in u)u.hasOwnProperty(w)&&(d[w]=u[w]);u=null;var F;d.wasmBinary&&(F=d.wasmBinary);var noExitRuntime;
d.noExitRuntime&&(noExitRuntime=d.noExitRuntime);"object"!==typeof WebAssembly&&E("no native wasm support detected");var G,fa=new WebAssembly.Table({initial:129,maximum:129,element:"anyfunc"}),ha=!1,ia="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ja(a,b,c){var e=I;if(0<c){c=b+c-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var n=a.charCodeAt(++f);g=65536+((g&1023)<<10)|n&1023}if(127>=g){if(b>=c)break;e[b++]=g}else{if(2047>=g){if(b+1>=c)break;e[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;e[b++]=224|g>>12}else{if(b+3>=c)break;e[b++]=240|g>>18;e[b++]=128|g>>12&63}e[b++]=128|g>>6&63}e[b++]=128|g&63}}e[b]=0}}var ka="undefined"!==typeof TextDecoder?new TextDecoder("utf-16le"):void 0;
function la(a){var b;for(b=a>>1;J[b];)++b;b<<=1;if(32<b-a&&ka)return ka.decode(I.subarray(a,b));b=0;for(var c="";;){var e=J[a+2*b>>1];if(0==e)return c;++b;c+=String.fromCharCode(e)}}function ma(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var e=b;c=c<2*a.length?c/2:a.length;for(var f=0;f<c;++f)J[b>>1]=a.charCodeAt(f),b+=2;J[b>>1]=0;return b-e}function na(a){return 2*a.length}
function oa(a){for(var b=0,c="";;){var e=K[a+4*b>>2];if(0==e)return c;++b;65536<=e?(e-=65536,c+=String.fromCharCode(55296|e>>10,56320|e&1023)):c+=String.fromCharCode(e)}}function pa(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var e=b;c=e+c-4;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var n=a.charCodeAt(++f);g=65536+((g&1023)<<10)|n&1023}K[b>>2]=g;b+=4;if(b+4>c)break}K[b>>2]=0;return b-e}
function qa(a){for(var b=0,c=0;c<a.length;++c){var e=a.charCodeAt(c);55296<=e&&57343>=e&&++c;b+=4}return b}var L,ra,I,J,sa,K,M,ta,ua;function va(a){L=a;d.HEAP8=ra=new Int8Array(a);d.HEAP16=J=new Int16Array(a);d.HEAP32=K=new Int32Array(a);d.HEAPU8=I=new Uint8Array(a);d.HEAPU16=sa=new Uint16Array(a);d.HEAPU32=M=new Uint32Array(a);d.HEAPF32=ta=new Float32Array(a);d.HEAPF64=ua=new Float64Array(a)}var wa=d.INITIAL_MEMORY||16777216;d.wasmMemory?G=d.wasmMemory:G=new WebAssembly.Memory({initial:wa/65536});
G&&(L=G.buffer);wa=L.byteLength;va(L);K[8664]=5277696;function xa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.X;"number"===typeof c?void 0===b.R?d.dynCall_v(c):d.dynCall_vi(c,b.R):c(void 0===b.R?null:b.R)}}}var ya=[],za=[],Aa=[],Ba=[];function Ca(){var a=d.preRun.shift();ya.unshift(a)}var N=0,Da=null,O=null;d.preloadedImages={};d.preloadedAudios={};
function D(a){if(d.onAbort)d.onAbort(a);ea(a);E(a);ha=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ea(){var a=P;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var P="webp_enc.wasm";if(!Ea()){var Fa=P;P=d.locateFile?d.locateFile(Fa,z):z+Fa}
function Ga(){try{if(F)return new Uint8Array(F);if(C)return C(P);throw"both async and sync fetching of the wasm failed";}catch(a){D(a)}}function Ha(){return F||!x&&!y||"function"!==typeof fetch?new Promise(function(a){a(Ga())}):fetch(P,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+P+"'";return a.arrayBuffer()}).catch(function(){return Ga()})}za.push({X:function(){Ia()}});function Ja(){return 0<Ja.T}var Ka={};
function La(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function Ma(a){return this.fromWireType(M[a>>2])}var Q={},R={},Na={};function Oa(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Pa(a,b){a=Oa(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function Qa(a){var b=Error,c=Pa(a,function(e){this.name=a;this.message=e;e=Error(e).stack;void 0!==e&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Ra=void 0;
function Sa(a,b,c){function e(h){h=c(h);if(h.length!==a.length)throw new Ra("Mismatched type converter count");for(var k=0;k<a.length;++k)S(a[k],h[k])}a.forEach(function(h){Na[h]=b});var f=Array(b.length),g=[],n=0;b.forEach(function(h,k){R.hasOwnProperty(h)?f[k]=R[h]:(g.push(h),Q.hasOwnProperty(h)||(Q[h]=[]),Q[h].push(function(){f[k]=R[h];++n;n===g.length&&e(f)}))});0===g.length&&e(f)}
function Ta(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Ua=void 0;function T(a){for(var b="";I[a];)b+=Ua[I[a++]];return b}var Va=void 0;function U(a){throw new Va(a);}
function S(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=b.name;a||U('type "'+e+'" must have a positive integer typeid pointer');if(R.hasOwnProperty(a)){if(c.aa)return;U("Cannot register type '"+e+"' twice")}R[a]=b;delete Na[a];Q.hasOwnProperty(a)&&(b=Q[a],delete Q[a],b.forEach(function(f){f()}))}var Wa=[],V=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function Xa(a){4<a&&0===--V[a].S&&(V[a]=void 0,Wa.push(a))}function Ya(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Wa.length?Wa.pop():V.length;V[b]={S:1,value:a};return b}}
function Za(a,b){var c=d;if(void 0===c[a].P){var e=c[a];c[a]=function(){c[a].P.hasOwnProperty(arguments.length)||U("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].P+")!");return c[a].P[arguments.length].apply(this,arguments)};c[a].P=[];c[a].P[e.V]=e}}
function $a(a,b,c){d.hasOwnProperty(a)?((void 0===c||void 0!==d[a].P&&void 0!==d[a].P[c])&&U("Cannot register public name '"+a+"' twice"),Za(a,a),d.hasOwnProperty(c)&&U("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),d[a].P[c]=b):(d[a]=b,void 0!==c&&(d[a].ia=c))}
function ab(a,b,c){switch(b){case 0:return function(e){return this.fromWireType((c?ra:I)[e])};case 1:return function(e){return this.fromWireType((c?J:sa)[e>>1])};case 2:return function(e){return this.fromWireType((c?K:M)[e>>2])};default:throw new TypeError("Unknown integer type: "+a);}}function bb(a){a=cb(a);var b=T(a);X(a);return b}function db(a,b){var c=R[a];void 0===c&&U(b+" has unknown type "+bb(a));return c}
function eb(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function fb(a,b){switch(b){case 2:return function(c){return this.fromWireType(ta[c>>2])};case 3:return function(c){return this.fromWireType(ua[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}
function gb(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Pa(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}function hb(a,b){for(var c=[],e=0;e<a;e++)c.push(K[(b>>2)+e]);return c}
function Y(a,b){a=T(a);var c=d["dynCall_"+a];for(var e=[],f=1;f<a.length;++f)e.push("a"+f);f="return function dynCall_"+(a+"_"+b)+"("+e.join(", ")+") {\n";f+="    return dynCall(rawFunction"+(e.length?", ":"")+e.join(", ")+");\n";c=(new Function("dynCall","rawFunction",f+"};\n"))(c,b);"function"!==typeof c&&U("unknown function pointer with signature "+a+": "+b);return c}var ib=void 0;
function jb(a,b){function c(g){f[g]||R[g]||(Na[g]?Na[g].forEach(c):(e.push(g),f[g]=!0))}var e=[],f={};b.forEach(c);throw new ib(a+": "+e.map(bb).join([", "]));}function kb(a,b,c){switch(b){case 0:return c?function(e){return ra[e]}:function(e){return I[e]};case 1:return c?function(e){return J[e>>1]}:function(e){return sa[e>>1]};case 2:return c?function(e){return K[e>>2]}:function(e){return M[e>>2]};default:throw new TypeError("Unknown integer type: "+a);}}Ra=d.InternalError=Qa("InternalError");
for(var lb=Array(256),mb=0;256>mb;++mb)lb[mb]=String.fromCharCode(mb);Ua=lb;Va=d.BindingError=Qa("BindingError");d.count_emval_handles=function(){for(var a=0,b=5;b<V.length;++b)void 0!==V[b]&&++a;return a};d.get_first_emval=function(){for(var a=5;a<V.length;++a)if(void 0!==V[a])return V[a];return null};ib=d.UnboundTypeError=Qa("UnboundTypeError");
var ob={j:function(a){return nb(a)},i:function(a){"uncaught_exception"in Ja?Ja.T++:Ja.T=1;throw a;},l:function(a){var b=Ka[a];delete Ka[a];var c=b.ba,e=b.da,f=b.U,g=f.map(function(n){return n.$}).concat(f.map(function(n){return n.fa}));Sa([a],g,function(n){var h={};f.forEach(function(k,l){var m=n[l],p=k.Y,r=k.Z,v=n[l+f.length],q=k.ea,t=k.ga;h[k.W]={read:function(A){return m.fromWireType(p(r,A))},write:function(A,H){var W=[];q(t,A,v.toWireType(W,H));La(W)}}});return[{name:b.name,fromWireType:function(k){var l=
{},m;for(m in h)l[m]=h[m].read(k);e(k);return l},toWireType:function(k,l){for(var m in h)if(!(m in l))throw new TypeError("Missing field");var p=c();for(m in h)h[m].write(p,l[m]);null!==k&&k.push(e,p);return p},argPackAdvance:8,readValueFromPointer:Ma,O:e}]})},s:function(a,b,c,e,f){var g=Ta(c);b=T(b);S(a,{name:b,fromWireType:function(n){return!!n},toWireType:function(n,h){return h?e:f},argPackAdvance:8,readValueFromPointer:function(n){if(1===c)var h=ra;else if(2===c)h=J;else if(4===c)h=K;else throw new TypeError("Unknown boolean type size: "+
b);return this.fromWireType(h[n>>g])},O:null})},r:function(a,b){b=T(b);S(a,{name:b,fromWireType:function(c){var e=V[c].value;Xa(c);return e},toWireType:function(c,e){return Ya(e)},argPackAdvance:8,readValueFromPointer:Ma,O:null})},o:function(a,b,c,e){function f(){}c=Ta(c);b=T(b);f.values={};S(a,{name:b,constructor:f,fromWireType:function(g){return this.constructor.values[g]},toWireType:function(g,n){return n.value},argPackAdvance:8,readValueFromPointer:ab(b,c,e),O:null});$a(b,f)},n:function(a,b,c){var e=
db(a,"enum");b=T(b);a=e.constructor;e=Object.create(e.constructor.prototype,{value:{value:c},constructor:{value:Pa(e.name+"_"+b,function(){})}});a.values[c]=e;a[b]=e},g:function(a,b,c){c=Ta(c);b=T(b);S(a,{name:b,fromWireType:function(e){return e},toWireType:function(e,f){if("number"!==typeof f&&"boolean"!==typeof f)throw new TypeError('Cannot convert "'+eb(f)+'" to '+this.name);return f},argPackAdvance:8,readValueFromPointer:fb(b,c),O:null})},d:function(a,b,c,e,f,g){var n=hb(b,c);a=T(a);f=Y(e,f);
$a(a,function(){jb("Cannot call "+a+" due to unbound types",n)},b-1);Sa([],n,function(h){var k=[h[0],null].concat(h.slice(1)),l=h=a,m=f,p=k.length;2>p&&U("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var r=null!==k[1]&&!1,v=!1,q=1;q<k.length;++q)if(null!==k[q]&&void 0===k[q].O){v=!0;break}var t="void"!==k[0].name,A="",H="";for(q=0;q<p-2;++q)A+=(0!==q?", ":"")+"arg"+q,H+=(0!==q?", ":"")+"arg"+q+"Wired";l="return function "+Oa(l)+"("+A+") {\nif (arguments.length !== "+
(p-2)+") {\nthrowBindingError('function "+l+" called with ' + arguments.length + ' arguments, expected "+(p-2)+" args!');\n}\n";v&&(l+="var destructors = [];\n");var W=v?"destructors":"null";A="throwBindingError invoker fn runDestructors retType classParam".split(" ");m=[U,m,g,La,k[0],k[1]];r&&(l+="var thisWired = classParam.toWireType("+W+", this);\n");for(q=0;q<p-2;++q)l+="var arg"+q+"Wired = argType"+q+".toWireType("+W+", arg"+q+"); // "+k[q+2].name+"\n",A.push("argType"+q),m.push(k[q+2]);r&&(H=
"thisWired"+(0<H.length?", ":"")+H);l+=(t?"var rv = ":"")+"invoker(fn"+(0<H.length?", ":"")+H+");\n";if(v)l+="runDestructors(destructors);\n";else for(q=r?1:2;q<k.length;++q)p=1===q?"thisWired":"arg"+(q-2)+"Wired",null!==k[q].O&&(l+=p+"_dtor("+p+"); // "+k[q].name+"\n",A.push(p+"_dtor"),m.push(k[q].O));t&&(l+="var ret = retType.fromWireType(rv);\nreturn ret;\n");A.push(l+"}\n");k=gb(A).apply(null,m);q=b-1;if(!d.hasOwnProperty(h))throw new Ra("Replacing nonexistant public symbol");void 0!==d[h].P&&
void 0!==q?d[h].P[q]=k:(d[h]=k,d[h].V=q);return[]})},b:function(a,b,c,e,f){function g(l){return l}b=T(b);-1===f&&(f=4294967295);var n=Ta(c);if(0===e){var h=32-8*c;g=function(l){return l<<h>>>h}}var k=-1!=b.indexOf("unsigned");S(a,{name:b,fromWireType:g,toWireType:function(l,m){if("number"!==typeof m&&"boolean"!==typeof m)throw new TypeError('Cannot convert "'+eb(m)+'" to '+this.name);if(m<e||m>f)throw new TypeError('Passing a number "'+eb(m)+'" from JS side to C/C++ side to an argument of type "'+
b+'", which is outside the valid range ['+e+", "+f+"]!");return k?m>>>0:m|0},argPackAdvance:8,readValueFromPointer:kb(b,n,0!==e),O:null})},a:function(a,b,c){function e(g){g>>=2;var n=M;return new f(L,n[g+1],n[g])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=T(c);S(a,{name:c,fromWireType:e,argPackAdvance:8,readValueFromPointer:e},{aa:!0})},h:function(a,b){b=T(b);var c="std::string"===b;S(a,{name:b,fromWireType:function(e){var f=M[e>>2];if(c){var g=
I[e+4+f],n=0;0!=g&&(n=g,I[e+4+f]=0);var h=e+4;for(g=0;g<=f;++g){var k=e+4+g;if(0==I[k]){if(h){for(var l=I,m=h+NaN,p=h;l[p]&&!(p>=m);)++p;if(16<p-h&&l.subarray&&ia)h=ia.decode(l.subarray(h,p));else{for(m="";h<p;){var r=l[h++];if(r&128){var v=l[h++]&63;if(192==(r&224))m+=String.fromCharCode((r&31)<<6|v);else{var q=l[h++]&63;r=224==(r&240)?(r&15)<<12|v<<6|q:(r&7)<<18|v<<12|q<<6|l[h++]&63;65536>r?m+=String.fromCharCode(r):(r-=65536,m+=String.fromCharCode(55296|r>>10,56320|r&1023))}}else m+=String.fromCharCode(r)}h=
m}}else h="";if(void 0===t)var t=h;else t+=String.fromCharCode(0),t+=h;h=k+1}}0!=n&&(I[e+4+f]=n)}else{t=Array(f);for(g=0;g<f;++g)t[g]=String.fromCharCode(I[e+4+g]);t=t.join("")}X(e);return t},toWireType:function(e,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var g="string"===typeof f;g||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof Int8Array||U("Cannot pass non-string to std::string");var n=(c&&g?function(){for(var l=0,m=0;m<f.length;++m){var p=f.charCodeAt(m);55296<=
p&&57343>=p&&(p=65536+((p&1023)<<10)|f.charCodeAt(++m)&1023);127>=p?++l:l=2047>=p?l+2:65535>=p?l+3:l+4}return l}:function(){return f.length})(),h=nb(4+n+1);M[h>>2]=n;if(c&&g)ja(f,h+4,n+1);else if(g)for(g=0;g<n;++g){var k=f.charCodeAt(g);255<k&&(X(h),U("String has UTF-16 code units that do not fit in 8 bits"));I[h+4+g]=k}else for(g=0;g<n;++g)I[h+4+g]=f[g];null!==e&&e.push(X,h);return h},argPackAdvance:8,readValueFromPointer:Ma,O:function(e){X(e)}})},f:function(a,b,c){c=T(c);if(2===b){var e=la;var f=
ma;var g=na;var n=function(){return sa};var h=1}else 4===b&&(e=oa,f=pa,g=qa,n=function(){return M},h=2);S(a,{name:c,fromWireType:function(k){var l=M[k>>2],m=n(),p=m[k+4+l*b>>h],r=0;0!=p&&(r=p,m[k+4+l*b>>h]=0);var v=k+4;for(p=0;p<=l;++p){var q=k+4+p*b;if(0==m[q>>h]){v=e(v);if(void 0===t)var t=v;else t+=String.fromCharCode(0),t+=v;v=q+b}}0!=r&&(m[k+4+l*b>>h]=r);X(k);return t},toWireType:function(k,l){"string"!==typeof l&&U("Cannot pass non-string to C++ string type "+c);var m=g(l),p=nb(4+m+b);M[p>>
2]=m>>h;f(l,p+4,m+b);null!==k&&k.push(X,p);return p},argPackAdvance:8,readValueFromPointer:Ma,O:function(k){X(k)}})},m:function(a,b,c,e,f,g){Ka[a]={name:T(b),ba:Y(c,e),da:Y(f,g),U:[]}},e:function(a,b,c,e,f,g,n,h,k,l){Ka[a].U.push({W:T(b),$:c,Y:Y(e,f),Z:g,fa:n,ea:Y(h,k),ga:l})},t:function(a,b){b=T(b);S(a,{ha:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},u:Xa,k:function(a){4<a&&(V[a].S+=1)},q:function(a,b){a=db(a,"_emval_take_value");a=a.readValueFromPointer(b);return Ya(a)},
p:function(a,b,c){I.copyWithin(a,b,b+c)},c:function(a){var b=I.length;if(2147418112<a)return!1;for(var c=1;4>=c;c*=2){var e=b*(1+.2/c);e=Math.min(e,a+100663296);e=Math.max(16777216,a,e);0<e%65536&&(e+=65536-e%65536);a:{try{G.grow(Math.min(2147418112,e)-L.byteLength+65535>>16);va(G.buffer);var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},memory:G,table:fa},pb=function(){function a(f){d.asm=f.exports;N--;d.monitorRunDependencies&&d.monitorRunDependencies(N);0==N&&(null!==Da&&(clearInterval(Da),
Da=null),O&&(f=O,O=null,f()))}function b(f){a(f.instance)}function c(f){return Ha().then(function(g){return WebAssembly.instantiate(g,e)}).then(f,function(g){E("failed to asynchronously prepare wasm: "+g);D(g)})}var e={a:ob};N++;d.monitorRunDependencies&&d.monitorRunDependencies(N);if(d.instantiateWasm)try{return d.instantiateWasm(e,a)}catch(f){return E("Module.instantiateWasm callback failed with error: "+f),!1}(function(){if(F||"function"!==typeof WebAssembly.instantiateStreaming||Ea()||"function"!==
typeof fetch)return c(b);fetch(P,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,e).then(b,function(g){E("wasm streaming compile failed: "+g);E("falling back to ArrayBuffer instantiation");c(b)})})})();return{}}();d.asm=pb;
var Ia=d.___wasm_call_ctors=function(){return(Ia=d.___wasm_call_ctors=d.asm.v).apply(null,arguments)},nb=d._malloc=function(){return(nb=d._malloc=d.asm.w).apply(null,arguments)},X=d._free=function(){return(X=d._free=d.asm.x).apply(null,arguments)},cb=d.___getTypeName=function(){return(cb=d.___getTypeName=d.asm.y).apply(null,arguments)};d.___embind_register_native_and_builtin_types=function(){return(d.___embind_register_native_and_builtin_types=d.asm.z).apply(null,arguments)};
d.dynCall_i=function(){return(d.dynCall_i=d.asm.A).apply(null,arguments)};d.dynCall_vi=function(){return(d.dynCall_vi=d.asm.B).apply(null,arguments)};d.dynCall_iii=function(){return(d.dynCall_iii=d.asm.C).apply(null,arguments)};d.dynCall_viii=function(){return(d.dynCall_viii=d.asm.D).apply(null,arguments)};d.dynCall_fii=function(){return(d.dynCall_fii=d.asm.E).apply(null,arguments)};d.dynCall_viif=function(){return(d.dynCall_viif=d.asm.F).apply(null,arguments)};
d.dynCall_ii=function(){return(d.dynCall_ii=d.asm.G).apply(null,arguments)};d.dynCall_iiiiii=function(){return(d.dynCall_iiiiii=d.asm.H).apply(null,arguments)};d.dynCall_viiiii=function(){return(d.dynCall_viiiii=d.asm.I).apply(null,arguments)};d.dynCall_v=function(){return(d.dynCall_v=d.asm.J).apply(null,arguments)};d.dynCall_iiii=function(){return(d.dynCall_iiii=d.asm.K).apply(null,arguments)};d.dynCall_viiiiiiiii=function(){return(d.dynCall_viiiiiiiii=d.asm.L).apply(null,arguments)};
d.dynCall_viiii=function(){return(d.dynCall_viiii=d.asm.M).apply(null,arguments)};d.dynCall_viiiiii=function(){return(d.dynCall_viiiiii=d.asm.N).apply(null,arguments)};d.asm=pb;var Z;d.then=function(a){if(Z)a(d);else{var b=d.onRuntimeInitialized;d.onRuntimeInitialized=function(){b&&b();a(d)}}return d};O=function qb(){Z||rb();Z||(O=qb)};
function rb(){function a(){if(!Z&&(Z=!0,d.calledRun=!0,!ha)){xa(za);xa(Aa);if(d.onRuntimeInitialized)d.onRuntimeInitialized();if(d.postRun)for("function"==typeof d.postRun&&(d.postRun=[d.postRun]);d.postRun.length;){var b=d.postRun.shift();Ba.unshift(b)}xa(Ba)}}if(!(0<N)){if(d.preRun)for("function"==typeof d.preRun&&(d.preRun=[d.preRun]);d.preRun.length;)Ca();xa(ya);0<N||(d.setStatus?(d.setStatus("Running..."),setTimeout(function(){setTimeout(function(){d.setStatus("")},1);a()},1)):a())}}d.run=rb;
if(d.preInit)for("function"==typeof d.preInit&&(d.preInit=[d.preInit]);0<d.preInit.length;)d.preInit.pop()();noExitRuntime=!0;rb();


  return webp_enc
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = webp_enc;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return webp_enc; });
    else if (typeof exports === 'object')
      exports["webp_enc"] = webp_enc;
    

const encode = input => {
  let keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let output = "";
  let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
  let i = 0;

  while (i < input.length) {
      chr1 = input[i++];
      chr2 = i < input.length ? input[i++] : Number.NaN; // Not sure if the index
      chr3 = i < input.length ? input[i++] : Number.NaN; // checks are needed here

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
          enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
          enc4 = 64;
      }
      output += keyStr.charAt(enc1) + keyStr.charAt(enc2) +
                keyStr.charAt(enc3) + keyStr.charAt(enc4);
  }
  return output;
}

export default class WebpEncoder {
  constructor() {
    this.size = 960
    this._init()
  }

  async _init() {

    this.module = webp_enc();
  }

  get height() {
    return (this.img.height / this.img.width) * this.size
  }

  get width() {
    return (this.img.width / this.img.width) * this.size
  }

  async load(src) {
    this.img = document.createElement('img');
    this.img.src = src;
    await new Promise(resolve => this.img.onload = resolve);
    // Make canvas same size as image
    const canvas = document.createElement('canvas');
    [canvas.width, canvas.height] = [this.width, this.height];
    // Draw image onto canvas
    const ctx = canvas.getContext('2d');
    ctx.drawImage(this.img, 0, 0, this.width, this.height);
    return ctx.getImageData(0, 0, this.width, this.height);
  }

  async encode(src, size, quality = 85) {
    this.size = size
    const image = await this.load(src);
    const result = this.module.encode(image.data, image.width, image.height, {
      quality,
      target_size: 0,
      target_PSNR: 0,
      method: 4,
      sns_strength: 50,
      filter_strength: 60,
      filter_sharpness: 0,
      filter_type: 1,
      partitions: 0,
      segments: 4,
      pass: 1,
      show_compressed: 0,
      preprocessing: 0,
      autofilter: 0,
      partition_limit: 0,
      alpha_compression: 1,
      alpha_filtering: 1,
      alpha_quality: 100,
      lossless: 0,
      exact: 0,
      image_hint: 0,
      emulate_jpeg_size: 0,
      thread_level: 0,
      low_memory: 0,
      near_lossless: 100,
      use_delta_palette: 0,
      use_sharp_yuv: 0,
    });
    console.log('size', result.length);
    // const blob = new Blob([result], {type: 'image/webp'});

    this.module.free_result();

    // const blobURL = URL.createObjectURL(blob);
    // const img = document.createElement('img');
    // img.src = 'data:image/webp;base64,'+encode(bytes)

    // return 'data:image/webp;base64,' + encode(new Uint8Array(result))
    return result
    // this.appendChild(img);
  }
}
