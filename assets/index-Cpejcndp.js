(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Ou="modulepreload",Bu=function(s){return"/shibuya-scene-2-play/"+s},Gl={},zu=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let c=function(l){return Promise.all(l.map(h=>Promise.resolve(h).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");i=c(t.map(l=>{if(l=Bu(l),l in Gl)return;Gl[l]=!0;const h=l.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":Ou,h||(u.as="script"),u.crossOrigin="",u.href=l,o&&u.setAttribute("nonce",o),document.head.appendChild(u),h)return new Promise((f,m)=>{u.addEventListener("load",f),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};const qc="186",Os={ROTATE:0,DOLLY:1,PAN:2},Is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gu=0,Hl=1,Hu=2,Ma=1,Nd=2,br=3,Di=0,Rn=1,Yn=2,fi=0,yr=1,Xo=2,Vl=3,Wl=4,Vu=5,Ds=100,Wu=101,qu=102,Xu=103,ju=104,Ku=200,Yu=201,Ju=202,$u=203,Fd=204,kd=205,Zu=206,Qu=207,ef=208,tf=209,nf=210,sf=211,rf=212,af=213,of=214,jo=0,Ko=1,Yo=2,Er=3,Jo=4,$o=5,Zo=6,Qo=7,Ud=0,cf=1,lf=2,pi=0,Xc=1,jc=2,Kc=3,Ka=4,Yc=5,Ya=6,Jc=7,ql="attached",hf="detached",Od=300,ls=301,Ws=302,Sa=303,io=304,Ja=306,qs=1e3,Vn=1001,Ia=1002,Xt=1003,Bd=1004,_r=1005,vt=1006,wa=1007,di=1008,In=1009,zd=1010,Gd=1011,Tr=1012,$c=1013,gi=1014,An=1015,sn=1016,Zc=1017,Qc=1018,Ar=1020,Hd=35902,Vd=35899,Wd=1021,qd=1022,Fn=1023,Li=1026,os=1027,el=1028,tl=1029,hs=1030,nl=1031,il=1033,Ea=33776,Ta=33777,Aa=33778,Ra=33779,ec=35840,tc=35841,nc=35842,ic=35843,sc=36196,rc=37492,ac=37496,oc=37488,cc=37489,Na=37490,lc=37491,hc=37808,dc=37809,uc=37810,fc=37811,pc=37812,mc=37813,gc=37814,bc=37815,_c=37816,xc=37817,vc=37818,yc=37819,Mc=37820,Sc=37821,wc=36492,Ec=36494,Tc=36495,Ac=36283,Rc=36284,Fa=36285,Cc=36286,ka=2200,Pc=2201,df=2202,Rr=2300,Cr=2301,so=2302,Xl=2303,Ns=2400,Fs=2401,Ua=2402,sl=2500,uf=2501,ff=0,Xd=1,Dc=2,pf=3200,Lc=0,mf=1,ji="",qt="srgb",Cn="srgb-linear",Oa="linear",ot="srgb",ro=7680,gf=519,bf=512,_f=513,xf=514,rl=515,vf=516,yf=517,al=518,Mf=519,jd=35044,jl="300 es",ui=2e3,Pr=2001;function Sf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function wf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Dr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ef(){const s=Dr("canvas");return s.style.display="block",s}const Kl={};function Ba(...s){const e="THREE."+s.shift();console.log(e,...s)}function Kd(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ae(...s){s=Kd(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Fe(...s){s=Kd(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Bs(...s){const e=s.join(" ");e in Kl||(Kl[e]=!0,Ae(...s))}function Tf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Af={[jo]:Ko,[Yo]:Zo,[Jo]:Qo,[Er]:$o,[Ko]:jo,[Zo]:Yo,[Qo]:Jo,[$o]:Er};class Ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yl=1234567;const Mr=Math.PI/180,Xs=180/Math.PI;function $n(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[s&255]+cn[s>>8&255]+cn[s>>16&255]+cn[s>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function He(s,e,t){return Math.max(e,Math.min(t,s))}function ol(s,e){return(s%e+e)%e}function Rf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Cf(s,e,t){return s!==e?(t-s)/(e-s):0}function Sr(s,e,t){return(1-t)*s+t*e}function Pf(s,e,t,n){return Sr(s,e,1-Math.exp(-t*n))}function Df(s,e=1){return e-Math.abs(ol(s,e*2)-e)}function Lf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function If(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Nf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Ff(s,e){return s+Math.random()*(e-s)}function kf(s){return s*(.5-Math.random())}function Uf(s){s!==void 0&&(Yl=s);let e=Yl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Of(s){return s*Mr}function Bf(s){return s*Xs}function zf(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Gf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Hf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Vf(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*d,c*u,o*l);break;case"YZY":s.set(c*u,o*h,c*d,o*l);break;case"ZXZ":s.set(c*d,c*u,o*h,o*l);break;case"XZX":s.set(o*h,c*m,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*m,o*l);break;case"ZYZ":s.set(c*m,c*f,o*h,o*l);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Jn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Yd={DEG2RAD:Mr,RAD2DEG:Xs,generateUUID:$n,clamp:He,euclideanModulo:ol,mapLinear:Rf,inverseLerp:Cf,lerp:Sr,damp:Pf,pingpong:Df,smoothstep:Lf,smootherstep:If,randInt:Nf,randFloat:Ff,randFloatSpread:kf,seededRandom:Uf,degToRad:Of,radToDeg:Bf,isPowerOfTwo:zf,ceilPowerOfTwo:Gf,floorPowerOfTwo:Hf,setQuaternionFromProperEuler:Vf,normalize:ht,denormalize:Jn};class we{static{we.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ct{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],m=r[a+2],v=r[a+3];if(d!==v||c!==u||l!==f||h!==m){let g=c*u+l*f+h*m+d*v;g<0&&(u=-u,f=-f,m=-m,v=-v,g=-g);let p=1-o;if(g<.9995){const y=Math.acos(g),A=Math.sin(y);p=Math.sin(p*y)/A,o=Math.sin(o*y)/A,c=c*p+u*o,l=l*p+f*o,h=h*p+m*o,d=d*p+v*o}else{c=c*p+u*o,l=l*p+f*o,h=h*p+m*o,d=d*p+v*o;const y=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=y,l*=y,h*=y,d*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*d+c*f-l*u,e[t+1]=c*m+h*u+l*d-o*f,e[t+2]=l*m+h*f+o*u-c*d,e[t+3]=h*m-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),u=c(n/2),f=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"YZX":this._x=u*h*d+l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d-u*f*m;break;case"XZY":this._x=u*h*d-l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d+u*f*m;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{static{C.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ao.copy(this).projectOnVector(e),this.sub(ao)}reflect(e){return this.sub(ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ao=new C,Jl=new Ct;class ke{static{ke.prototype.isMatrix3=!0}constructor(e,t,n,i,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],v=i[0],g=i[3],p=i[6],y=i[1],A=i[4],b=i[7],M=i[2],w=i[5],R=i[8];return r[0]=a*v+o*y+c*M,r[3]=a*g+o*A+c*w,r[6]=a*p+o*b+c*R,r[1]=l*v+h*y+d*M,r[4]=l*g+h*A+d*w,r[7]=l*p+h*b+d*R,r[2]=u*v+f*y+m*M,r[5]=u*g+f*A+m*w,r[8]=u*p+f*b+m*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,m=t*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=d*v,e[1]=(i*l-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=u*v,e[4]=(h*t-i*c)*v,e[5]=(i*r-o*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(oo.makeScale(e,t)),this}rotate(e){return Bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(oo.makeRotation(-e)),this}translate(e,t){return Bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oo=new ke,$l=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zl=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wf(){const s={enabled:!0,workingColorSpace:Cn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ot&&(i.r=Pi(i.r),i.g=Pi(i.g),i.b=Pi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(i.r=zs(i.r),i.g=zs(i.g),i.b=zs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ji?Oa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Cn]:{primaries:e,whitePoint:n,transfer:Oa,toXYZ:$l,fromXYZ:Zl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:$l,fromXYZ:Zl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),s}const Xe=Wf();function Pi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ps;class qf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ps===void 0&&(ps=Dr("canvas")),ps.width=e.width,ps.height=e.height;const i=ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Dr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Pi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xf=0;class cl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(co(i[a].image)):r.push(co(i[a]))}else r=co(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function co(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}let jf=0;const lo=new C;class jt extends Ni{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=Vn,i=Vn,r=vt,a=di,o=Fn,c=In,l=jt.DEFAULT_ANISOTROPY,h=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=$n(),this.name="",this.source=new cl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(lo).x}get height(){return this.source.getSize(lo).y}get depth(){return this.source.getSize(lo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Od)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qs:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case Ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qs:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case Ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Od;jt.DEFAULT_ANISOTROPY=1;class ft{static{ft.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,b=(f+1)/2,M=(p+1)/2,w=(h+u)/4,R=(d+v)/4,_=(m+g)/4;return A>b&&A>M?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=w/n,r=R/n):b>M?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=w/i,r=_/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=R/r,i=_/r),this.set(n,i,r,t),this}let y=Math.sqrt((g-m)*(g-m)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(d-v)/y,this.z=(u-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kf extends Ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new jt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new cl(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yn extends Kf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jd extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yf extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Ie{static{Ie.prototype.isMatrix4=!0}constructor(e,t,n,i,r,a,o,c,l,h,d,u,f,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,d,u,f,m,v,g)}set(e,t,n,i,r,a,o,c,l,h,d,u,f,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/ms.setFromMatrixColumn(e,0).length(),r=1/ms.setFromMatrixColumn(e,1).length(),a=1/ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,m=o*h,v=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+m*l,t[5]=u-v*l,t[9]=-o*c,t[2]=v-u*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*h,f=c*d,m=l*h,v=l*d;t[0]=u+v*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=v+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*h,f=c*d,m=l*h,v=l*d;t[0]=u-v*o,t[4]=-a*d,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*h,f=a*d,m=o*h,v=o*d;t[0]=c*h,t[4]=m*l-f,t[8]=u*l+v,t[1]=c*d,t[5]=v*l+u,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,f=a*l,m=o*c,v=o*l;t[0]=c*h,t[4]=v-u*d,t[8]=m*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+m,t[10]=u-v*d}else if(e.order==="XZY"){const u=a*c,f=a*l,m=o*c,v=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+v,t[5]=a*h,t[9]=f*d-m,t[2]=m*d-f,t[6]=o*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jf,e,$f)}lookAt(e,t,n){const i=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Bi.crossVectors(n,Pn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Bi.crossVectors(n,Pn)),Bi.normalize(),Vr.crossVectors(Pn,Bi),i[0]=Bi.x,i[4]=Vr.x,i[8]=Pn.x,i[1]=Bi.y,i[5]=Vr.y,i[9]=Pn.y,i[2]=Bi.z,i[6]=Vr.z,i[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],y=n[3],A=n[7],b=n[11],M=n[15],w=i[0],R=i[4],_=i[8],T=i[12],P=i[1],I=i[5],N=i[9],B=i[13],L=i[2],G=i[6],S=i[10],U=i[14],J=i[3],z=i[7],j=i[11],Z=i[15];return r[0]=a*w+o*P+c*L+l*J,r[4]=a*R+o*I+c*G+l*z,r[8]=a*_+o*N+c*S+l*j,r[12]=a*T+o*B+c*U+l*Z,r[1]=h*w+d*P+u*L+f*J,r[5]=h*R+d*I+u*G+f*z,r[9]=h*_+d*N+u*S+f*j,r[13]=h*T+d*B+u*U+f*Z,r[2]=m*w+v*P+g*L+p*J,r[6]=m*R+v*I+g*G+p*z,r[10]=m*_+v*N+g*S+p*j,r[14]=m*T+v*B+g*U+p*Z,r[3]=y*w+A*P+b*L+M*J,r[7]=y*R+A*I+b*G+M*z,r[11]=y*_+A*N+b*S+M*j,r[15]=y*T+A*B+b*U+M*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],m=e[3],v=e[7],g=e[11],p=e[15],y=c*f-l*u,A=o*f-l*d,b=o*u-c*d,M=a*f-l*h,w=a*u-c*h,R=a*d-o*h;return t*(v*y-g*A+p*b)-n*(m*y-g*M+p*w)+i*(m*A-v*M+p*R)-r*(m*b-v*w+g*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+i*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],m=e[12],v=e[13],g=e[14],p=e[15],y=t*o-n*a,A=t*c-i*a,b=t*l-r*a,M=n*c-i*o,w=n*l-r*o,R=i*l-r*c,_=h*v-d*m,T=h*g-u*m,P=h*p-f*m,I=d*g-u*v,N=d*p-f*v,B=u*p-f*g,L=y*B-A*N+b*I+M*P-w*T+R*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/L;return e[0]=(o*B-c*N+l*I)*G,e[1]=(i*N-n*B-r*I)*G,e[2]=(v*R-g*w+p*M)*G,e[3]=(u*w-d*R-f*M)*G,e[4]=(c*P-a*B-l*T)*G,e[5]=(t*B-i*P+r*T)*G,e[6]=(g*b-m*R-p*A)*G,e[7]=(h*R-u*b+f*A)*G,e[8]=(a*N-o*P+l*_)*G,e[9]=(n*P-t*N-r*_)*G,e[10]=(m*w-v*b+p*y)*G,e[11]=(d*b-h*w-f*y)*G,e[12]=(o*T-a*I-c*_)*G,e[13]=(t*I-n*T+i*_)*G,e[14]=(v*A-m*M-g*y)*G,e[15]=(h*M-d*A+u*y)*G,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,m=r*d,v=a*h,g=a*d,p=o*d,y=c*l,A=c*h,b=c*d,M=n.x,w=n.y,R=n.z;return i[0]=(1-(v+p))*M,i[1]=(f+b)*M,i[2]=(m-A)*M,i[3]=0,i[4]=(f-b)*w,i[5]=(1-(u+p))*w,i[6]=(g+y)*w,i[7]=0,i[8]=(m+A)*R,i[9]=(g-y)*R,i[10]=(1-(u+v))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ms.set(i[0],i[1],i[2]).length();const o=ms.set(i[4],i[5],i[6]).length(),c=ms.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Xn.copy(this);const l=1/a,h=1/o,d=1/c;return Xn.elements[0]*=l,Xn.elements[1]*=l,Xn.elements[2]*=l,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=d,Xn.elements[9]*=d,Xn.elements[10]*=d,t.setFromRotationMatrix(Xn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,r,a,o=ui,c=!1){const l=this.elements,h=2*r/(t-e),d=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let m,v;if(c)m=r/(a-r),v=a*r/(a-r);else if(o===ui)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Pr)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=ui,c=!1){const l=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i);let m,v;if(c)m=1/(a-r),v=a/(a-r);else if(o===ui)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===Pr)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ms=new C,Xn=new Ie,Jf=new C(0,0,0),$f=new C(1,1,1),Bi=new C,Vr=new C,Pn=new C,Ql=new Ie,eh=new Ct;class Ii{constructor(e=0,t=0,n=0,i=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ql.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ql,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eh.setFromEuler(this),this.setFromQuaternion(eh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class ll{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zf=0;const th=new C,gs=new Ct,_i=new Ie,Wr=new C,sr=new C,Qf=new C,ep=new Ct,nh=new C(1,0,0),ih=new C(0,1,0),sh=new C(0,0,1),rh={type:"added"},tp={type:"removed"},bs={type:"childadded",child:null},ho={type:"childremoved",child:null};class At extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new C,t=new Ii,n=new Ct,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new ke}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(nh,e)}rotateY(e){return this.rotateOnAxis(ih,e)}rotateZ(e){return this.rotateOnAxis(sh,e)}translateOnAxis(e,t){return th.copy(e).applyQuaternion(this.quaternion),this.position.add(th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nh,e)}translateY(e){return this.translateOnAxis(ih,e)}translateZ(e){return this.translateOnAxis(sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wr.copy(e):Wr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(sr,Wr,this.up):_i.lookAt(Wr,sr,this.up),this.quaternion.setFromRotationMatrix(_i),i&&(_i.extractRotation(i.matrixWorld),gs.setFromRotationMatrix(_i),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rh),bs.child=e,this.dispatchEvent(bs),bs.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tp),ho.child=e,this.dispatchEvent(ho),ho.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rh),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,e,Qf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,ep,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}At.DEFAULT_UP=new C(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ve extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const np={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;l.inputState.pinching&&u>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(np)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const $d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},qr={h:0,s:0,l:0};function fo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=ol(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=fo(a,r,e+1/3),this.g=fo(a,r,e),this.b=fo(a,r,e-1/3)}return Xe.colorSpaceToWorking(this,i),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const n=$d[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return Xe.workingToColorSpace(ln.copy(this),e),Math.round(He(ln.r*255,0,255))*65536+Math.round(He(ln.g*255,0,255))*256+Math.round(He(ln.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(ln.copy(this),t);const n=ln.r,i=ln.g,r=ln.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=qt){Xe.workingToColorSpace(ln.copy(this),e);const t=ln.r,n=ln.g,i=ln.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(qr);const n=Sr(zi.h,qr.h,t),i=Sr(zi.s,qr.s,t),r=Sr(zi.l,qr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new De;De.NAMES=$d;class ip extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const jn=new C,xi=new C,po=new C,vi=new C,_s=new C,xs=new C,ah=new C,mo=new C,go=new C,bo=new C,_o=new ft,xo=new ft,vo=new ft;class Nn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),jn.subVectors(e,t),i.cross(jn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){jn.subVectors(i,t),xi.subVectors(n,t),po.subVectors(e,t);const a=jn.dot(jn),o=jn.dot(xi),c=jn.dot(po),l=xi.dot(xi),h=xi.dot(po),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-o*h)*u,m=(a*h-o*c)*u;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vi.x),c.addScaledVector(a,vi.y),c.addScaledVector(o,vi.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return _o.setScalar(0),xo.setScalar(0),vo.setScalar(0),_o.fromBufferAttribute(e,t),xo.fromBufferAttribute(e,n),vo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(_o,r.x),a.addScaledVector(xo,r.y),a.addScaledVector(vo,r.z),a}static isFrontFacing(e,t,n,i){return jn.subVectors(n,t),xi.subVectors(e,t),jn.cross(xi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),jn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Nn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;_s.subVectors(i,n),xs.subVectors(r,n),mo.subVectors(e,n);const c=_s.dot(mo),l=xs.dot(mo);if(c<=0&&l<=0)return t.copy(n);go.subVectors(e,i);const h=_s.dot(go),d=xs.dot(go);if(h>=0&&d<=h)return t.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(_s,a);bo.subVectors(e,r);const f=_s.dot(bo),m=xs.dot(bo);if(m>=0&&f<=m)return t.copy(r);const v=f*l-c*m;if(v<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(xs,o);const g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return ah.subVectors(r,i),o=(d-h)/(d-h+(f-m)),t.copy(i).addScaledVector(ah,o);const p=1/(g+v+u);return a=v*p,o=u*p,t.copy(n).addScaledVector(_s,a).addScaledVector(xs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class yt{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kn):Kn.fromBufferAttribute(r,a),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xr.copy(n.boundingBox)),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),jr.subVectors(this.max,rr),vs.subVectors(e.a,rr),ys.subVectors(e.b,rr),Ms.subVectors(e.c,rr),Gi.subVectors(ys,vs),Hi.subVectors(Ms,ys),Ji.subVectors(vs,Ms);let t=[0,-Gi.z,Gi.y,0,-Hi.z,Hi.y,0,-Ji.z,Ji.y,Gi.z,0,-Gi.x,Hi.z,0,-Hi.x,Ji.z,0,-Ji.x,-Gi.y,Gi.x,0,-Hi.y,Hi.x,0,-Ji.y,Ji.x,0];return!yo(t,vs,ys,Ms,jr)||(t=[1,0,0,0,1,0,0,0,1],!yo(t,vs,ys,Ms,jr))?!1:(Kr.crossVectors(Gi,Hi),t=[Kr.x,Kr.y,Kr.z],yo(t,vs,ys,Ms,jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yi=[new C,new C,new C,new C,new C,new C,new C,new C],Kn=new C,Xr=new yt,vs=new C,ys=new C,Ms=new C,Gi=new C,Hi=new C,Ji=new C,rr=new C,jr=new C,Kr=new C,$i=new C;function yo(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){$i.fromArray(s,r);const o=i.x*Math.abs($i.x)+i.y*Math.abs($i.y)+i.z*Math.abs($i.z),c=e.dot($i),l=t.dot($i),h=n.dot($i);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Ri=sp();function sp(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function rp(s){Math.abs(s)>65504&&Ae("DataUtils.toHalfFloat(): Value out of range."),s=He(s,-65504,65504),Ri.floatView[0]=s;const e=Ri.uint32View[0],t=e>>23&511;return Ri.baseTable[t]+((e&8388607)>>Ri.shiftTable[t])}function ap(s){const e=s>>10;return Ri.uint32View[0]=Ri.mantissaTable[Ri.offsetTable[e]+(s&1023)]+Ri.exponentTable[e],Ri.floatView[0]}class Yr{static toHalfFloat(e){return rp(e)}static fromHalfFloat(e){return ap(e)}}const Ut=new C,Jr=new we;let op=0;class en extends Ni{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:op++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jd,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Zd extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qd extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bt extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}}const cp=new yt,ar=new C,Mo=new C;class bi{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ar,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(Mo)),this.expandByPoint(ar.copy(e.center).sub(Mo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let lp=0;const On=new Ie,So=new At,Ss=new C,Dn=new yt,or=new yt,$t=new C;class rn extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sf(e)?Qd:Zd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return So.lookAt(e),So.updateMatrix(),this.applyMatrix4(So.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Bt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];or.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(Dn.min,or.min),Dn.expandByPoint($t),$t.addVectors(Dn.max,or.max),Dn.expandByPoint($t)):(Dn.expandByPoint(or.min),Dn.expandByPoint(or.max))}Dn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)$t.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared($t));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)$t.fromBufferAttribute(o,l),c&&(Ss.fromBufferAttribute(e,l),$t.add(Ss)),i=Math.max(i,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new en(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new C,c[_]=new C;const l=new C,h=new C,d=new C,u=new we,f=new we,m=new we,v=new C,g=new C;function p(_,T,P){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,P),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,P),h.sub(l),d.sub(l),f.sub(u),m.sub(u);const I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(I),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(I),o[_].add(v),o[T].add(v),o[P].add(v),c[_].add(g),c[T].add(g),c[P].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,T=y.length;_<T;++_){const P=y[_],I=P.start,N=P.count;for(let B=I,L=I+N;B<L;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const A=new C,b=new C,M=new C,w=new C;function R(_){M.fromBufferAttribute(i,_),w.copy(M);const T=o[_];A.copy(T),A.sub(M.multiplyScalar(M.dot(T))).normalize(),b.crossVectors(w,T);const I=b.dot(c[_])<0?-1:1;a.setXYZW(_,A.x,A.y,A.z,I)}for(let _=0,T=y.length;_<T;++_){const P=y[_],I=P.start,N=P.count;for(let B=I,L=I+N;B<L;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new C,r=new C,a=new C,o=new C,c=new C,l=new C,h=new C,d=new C;if(e)for(let u=0,f=e.count;u<f;u+=3){const m=e.getX(u+0),v=e.getX(u+1),g=e.getX(u+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let f=0,m=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let p=0;p<h;p++)u[m++]=l[f++]}return new en(u,h,d)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jd,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const un=new C;class hl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ba("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new en(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ba("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const wo=new C,dp=new C,up=new ke;class Ai{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=wo.subVectors(n,t).cross(dp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(wo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||up.getNormalMatrix(e),i=this.coplanarPoint(wo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let fp=0;class mi extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=yr,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fd,this.blendDst=kd,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ai().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new we().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new we().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Mi=new C,Eo=new C,$r=new C,Zr=new C;class Js{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Eo.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),Zr.copy(this.origin).sub(Eo);const r=e.distanceTo(t)*.5,a=-this.direction.dot($r),o=Zr.dot(this.direction),c=-Zr.dot($r),l=Zr.lengthSq(),h=Math.abs(1-a*a);let d,u,f,m;if(h>0)if(d=a*c-o,u=a*o-c,m=r*h,d>=0)if(u>=-m)if(u<=m){const v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-m?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=m?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Eo).addScaledVector($r,u),f}intersectSphere(e,t){if(e.radius<0)return null;Mi.subVectors(e.center,this.origin);const n=Mi.dot(this.direction),i=Mi.dot(Mi)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,n,i,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,m=t.x-a.x,v=t.y-a.y,g=t.z-a.z,p=n.x-a.x,y=n.y-a.y,A=n.z-a.z,b=Math.abs(c),M=Math.abs(l),w=Math.abs(h);let R,_,T,P,I,N,B,L,G,S,U,J;if(b>=M&&b>=w?(T=c,N=d,G=m,J=p,c>=0?(R=l,_=h,P=u,I=f,B=v,L=g,S=y,U=A):(R=h,_=l,P=f,I=u,B=g,L=v,S=A,U=y)):M>=w?(T=l,N=u,G=v,J=y,l>=0?(R=h,_=c,P=f,I=d,B=g,L=m,S=A,U=p):(R=c,_=h,P=d,I=f,B=m,L=g,S=p,U=A)):(T=h,N=f,G=g,J=A,h>=0?(R=c,_=l,P=d,I=u,B=m,L=v,S=p,U=y):(R=l,_=c,P=u,I=d,B=v,L=m,S=y,U=p)),T===0)return null;const z=R/T,j=_/T,Z=1/T,se=P-z*N,ae=I-j*N,it=B-z*G,We=L-j*G,Ze=S-z*J,K=U-j*J,te=Ze*We-K*it,ye=se*K-ae*Ze,Ue=it*ae-We*se;if(i){if(te<0||ye<0||Ue<0)return null}else if((te<0||ye<0||Ue<0)&&(te>0||ye>0||Ue>0))return null;const xe=te+ye+Ue;if(xe===0)return null;const qe=Z*(te*N+ye*G+Ue*J);return(xe>0?qe<0:qe>0)?null:this.at(qe/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wn extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const oh=new Ie,Zi=new Js,Qr=new bi,ch=new C,ea=new C,ta=new C,na=new C,To=new C,ia=new C,lh=new C,sa=new C;class It extends At{constructor(e=new rn,t=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){ia.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(To.fromBufferAttribute(d,e),a?ia.addScaledVector(To,h):ia.addScaledVector(To.sub(t),h))}t.add(ia)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(r),Zi.copy(e.ray).recast(e.near),!(Qr.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Qr,ch)===null||Zi.origin.distanceToSquared(ch)>(e.far-e.near)**2))&&(oh.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(oh),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){const g=u[m],p=a[g.materialIndex],y=Math.max(g.start,f.start),A=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let b=y,M=A;b<M;b+=3){const w=o.getX(b),R=o.getX(b+1),_=o.getX(b+2);i=ra(this,p,e,n,l,h,d,w,R,_),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const y=o.getX(g),A=o.getX(g+1),b=o.getX(g+2);i=ra(this,a,e,n,l,h,d,y,A,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){const g=u[m],p=a[g.materialIndex],y=Math.max(g.start,f.start),A=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let b=y,M=A;b<M;b+=3){const w=b,R=b+1,_=b+2;i=ra(this,p,e,n,l,h,d,w,R,_),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const y=g,A=g+1,b=g+2;i=ra(this,a,e,n,l,h,d,y,A,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function pp(s,e,t,n,i,r,a,o){let c;if(e.side===Rn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Di,o),c===null)return null;sa.copy(o),sa.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(sa);return l<t.near||l>t.far?null:{distance:l,point:sa.clone(),object:s}}function ra(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,ea),s.getVertexPosition(c,ta),s.getVertexPosition(l,na);const h=pp(s,e,t,n,ea,ta,na,lh);if(h){const d=new C;Nn.getBarycoord(lh,ea,ta,na,d),i&&(h.uv=Nn.getInterpolatedAttribute(i,o,c,l,d,new we)),r&&(h.uv1=Nn.getInterpolatedAttribute(r,o,c,l,d,new we)),a&&(h.normal=Nn.getInterpolatedAttribute(a,o,c,l,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new C,materialIndex:0};Nn.getNormal(ea,ta,na,u.normal),h.face=u,h.barycoord=d}return h}const cr=new ft,hh=new ft,dh=new ft,mp=new ft,uh=new Ie,aa=new C,Ao=new bi,fh=new Ie,Ro=new Js;class gp extends It{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ql,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,aa),this.boundingBox.expandByPoint(aa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,aa),this.boundingSphere.expandByPoint(aa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ao.copy(this.boundingSphere),Ao.applyMatrix4(i),e.ray.intersectsSphere(Ao)!==!1&&(fh.copy(i).invert(),Ro.copy(e.ray).applyMatrix4(fh),!(this.boundingBox!==null&&Ro.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ro)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ft,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ql?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ae("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;hh.fromBufferAttribute(i.attributes.skinIndex,e),dh.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(cr.copy(t),t.set(0,0,0,0)):(cr.set(...t,1),t.set(0,0,0)),cr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=dh.getComponent(r);if(a!==0){const o=hh.getComponent(r);uh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(mp.copy(cr).applyMatrix4(uh),a)}}return t.isVector4&&(t.w=cr.w),t.applyMatrix4(this.bindMatrixInverse)}}class eu extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}}class js extends jt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Xt,h=Xt,d,u){super(null,a,o,c,l,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ph=new Ie,bp=new Ie;class dl{constructor(e=[],t=[]){this.uuid=$n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ae("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:bp;ph.multiplyMatrices(o,t[r]),ph.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new dl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new js(t,e,e,Fn,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Ae("Skeleton: No bone found with UUID:",r),a=new eu),this.bones.push(a),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class za extends en{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ws=new Ie,mh=new Ie,oa=[],gh=new yt,_p=new Ie,lr=new It,hr=new bi;class Ga extends It{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new za(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,_p)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),gh.copy(e.boundingBox).applyMatrix4(ws),this.boundingBox.union(gh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),hr.copy(e.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(n),e.ray.intersectsSphere(hr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ws),mh.multiplyMatrices(n,ws),lr.matrixWorld=mh,lr.raycast(e,oa);for(let a=0,o=oa.length;a<o;a++){const c=oa[a];c.instanceId=r,c.object=this,t.push(c)}oa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new za(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new js(new Float32Array(i*this.count),i,this.count,el,An));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Qi=new bi,xp=new we(.5,.5),ca=new C;class ul{constructor(e=new Ai,t=new Ai,n=new Ai,i=new Ai,r=new Ai,a=new Ai){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ui,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],v=r[9],g=r[10],p=r[11],y=r[12],A=r[13],b=r[14],M=r[15];if(i[0].setComponents(l-a,f-h,p-m,M-y).normalize(),i[1].setComponents(l+a,f+h,p+m,M+y).normalize(),i[2].setComponents(l+o,f+d,p+v,M+A).normalize(),i[3].setComponents(l-o,f-d,p-v,M-A).normalize(),n)i[4].setComponents(c,u,g,b).normalize(),i[5].setComponents(l-c,f-u,p-g,M-b).normalize();else if(i[4].setComponents(l-c,f-u,p-g,M-b).normalize(),t===ui)i[5].setComponents(l+c,f+u,p+g,M+b).normalize();else if(t===Pr)i[5].setComponents(c,u,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){Qi.center.set(0,0,0);const t=xp.distanceTo(e.center);return Qi.radius=.7071067811865476+t,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ca.x=i.normal.x>0?e.max.x:e.min.x,ca.y=i.normal.y>0?e.max.y:e.min.y,ca.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ca)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tu extends mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ha=new C,Va=new C,bh=new Ie,dr=new Js,la=new bi,Co=new C,_h=new C;class fl extends At{constructor(e=new rn,t=new tu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ha.fromBufferAttribute(t,i-1),Va.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ha.distanceTo(Va);e.setAttribute("lineDistance",new Bt(n,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(i),la.radius+=r,e.ray.intersectsSphere(la)===!1)return;bh.copy(i).invert(),dr.copy(e.ray).applyMatrix4(bh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=l){const p=h.getX(v),y=h.getX(v+1),A=ha(this,e,dr,c,p,y,v);A&&t.push(A)}if(this.isLineLoop){const v=h.getX(m-1),g=h.getX(f),p=ha(this,e,dr,c,v,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=l){const p=ha(this,e,dr,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=ha(this,e,dr,c,m-1,f,m-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ha(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(Ha.fromBufferAttribute(o,i),Va.fromBufferAttribute(o,r),t.distanceSqToSegment(Ha,Va,Co,_h)>n)return;Co.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Co);if(!(l<e.near||l>e.far))return{distance:l,point:_h.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const xh=new C,vh=new C;class vp extends fl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)xh.fromBufferAttribute(t,i),vh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+xh.distanceTo(vh);e.setAttribute("lineDistance",new Bt(n,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yp extends fl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class nu extends mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const yh=new Ie,Ic=new Js,da=new bi,ua=new C;class Mp extends At{constructor(e=new rn,t=new nu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(i),da.radius+=r,e.ray.intersectsSphere(da)===!1)return;yh.copy(i).invert(),Ic.copy(e.ray).applyMatrix4(yh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=u,v=f;m<v;m++){const g=l.getX(m);ua.fromBufferAttribute(d,g),Mh(ua,g,c,i,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=u,v=f;m<v;m++)ua.fromBufferAttribute(d,m),Mh(ua,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Mh(s,e,t,n,i,r,a){const o=Ic.distanceSqToPoint(s);if(o<t){const c=new C;Ic.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class iu extends jt{constructor(e=[],t=ls,n,i,r,a,o,c,l,h){super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lr extends jt{constructor(e,t,n=gi,i,r,a,o=Xt,c=Xt,l,h=Li,d=1){if(h!==Li&&h!==os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Sp extends Lr{constructor(e,t=gi,n=ls,i,r,a=Xt,o=Xt,c,l=Li){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class su extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $s extends rn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(d,2));function m(v,g,p,y,A,b,M,w,R,_,T){const P=b/R,I=M/_,N=b/2,B=M/2,L=w/2,G=R+1,S=_+1;let U=0,J=0;const z=new C;for(let j=0;j<S;j++){const Z=j*I-B;for(let se=0;se<G;se++){const ae=se*P-N;z[v]=ae*y,z[g]=Z*A,z[p]=L,l.push(z.x,z.y,z.z),z[v]=0,z[g]=0,z[p]=w>0?1:-1,h.push(z.x,z.y,z.z),d.push(se/R),d.push(1-j/_),U+=1}}for(let j=0;j<_;j++)for(let Z=0;Z<R;Z++){const se=u+Z+G*j,ae=u+Z+G*(j+1),it=u+(Z+1)+G*(j+1),We=u+(Z+1)+G*j;c.push(se,ae,We),c.push(ae,it,We),J+=6}o.addGroup(f,J,T),f+=J,u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class pl extends rn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new C,h=new we;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=n+d/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Bt(a,3)),this.setAttribute("normal",new Bt(o,3)),this.setAttribute("uv",new Bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ml extends rn{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let m=0;const v=[],g=n/2;let p=0;y(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Bt(d,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(f,2));function y(){const b=new C,M=new C;let w=0;const R=(t-e)/n;for(let _=0;_<=r;_++){const T=[],P=_/r,I=P*(t-e)+e;for(let N=0;N<=i;N++){const B=N/i,L=B*c+o,G=Math.sin(L),S=Math.cos(L);M.x=I*G,M.y=-P*n+g,M.z=I*S,d.push(M.x,M.y,M.z),b.set(G,R,S).normalize(),u.push(b.x,b.y,b.z),f.push(B,1-P),T.push(m++)}v.push(T)}for(let _=0;_<i;_++)for(let T=0;T<r;T++){const P=v[T][_],I=v[T+1][_],N=v[T+1][_+1],B=v[T][_+1];(e>0||T!==0)&&(h.push(P,I,B),w+=3),(t>0||T!==r-1)&&(h.push(I,N,B),w+=3)}l.addGroup(p,w,0),p+=w}function A(b){const M=m,w=new we,R=new C;let _=0;const T=b===!0?e:t,P=b===!0?1:-1;for(let N=1;N<=i;N++)d.push(0,g*P,0),u.push(0,P,0),f.push(.5,.5),m++;const I=m;for(let N=0;N<=i;N++){const L=N/i*c+o,G=Math.cos(L),S=Math.sin(L);R.x=T*S,R.y=g*P,R.z=T*G,d.push(R.x,R.y,R.z),u.push(0,P,0),w.x=G*.5+.5,w.y=S*.5*P+.5,f.push(w.x,w.y),m++}for(let N=0;N<i;N++){const B=M+N,L=I+N;b===!0?h.push(L,L+1,B):h.push(L+1,L,B),_+=3}l.addGroup(p,_,b===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $a extends rn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=e/o,u=t/c,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){const y=p*u-a;for(let A=0;A<l;A++){const b=A*d-r;m.push(b,-y,0),v.push(0,0,1),g.push(A/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const A=y+l*p,b=y+l*(p+1),M=y+1+l*(p+1),w=y+1+l*p;f.push(A,b,w),f.push(b,M,w)}this.setIndex(f),this.setAttribute("position",new Bt(m,3)),this.setAttribute("normal",new Bt(v,3)),this.setAttribute("uv",new Bt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ks(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(Sh(i))i.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Sh(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function pn(s){const e={};for(let t=0;t<s.length;t++){const n=Ks(s[t]);for(const i in n)e[i]=n[i]}return e}function Sh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function wp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ru(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Ir={clone:Ks,merge:pn};var Ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ep,this.fragmentShader=Tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=wp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new De().setHex(i.value);break;case"v2":this.uniforms[n].value=new we().fromArray(i.value);break;case"v3":this.uniforms[n].value=new C().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ft().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ke().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ie().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class au extends hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zs extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lc,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zn extends Zs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return He(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ap extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rp extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Xi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Ca(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Cp(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function wh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Pp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Qs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Dp extends Qs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ns,endingEnd:Ns}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fs:r=e,o=2*t-n;break;case Ua:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Fs:a=e,c=2*n-t;break;case Ua:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),v=m*m,g=v*m,p=-u*g+2*u*v-u*m,y=(1+u)*g+(-1.5-2*u)*v+(-.5+u)*m+1,A=(-1-f)*g+(1.5+f)*v+.5*m,b=f*g-f*v;for(let M=0;M!==o;++M)r[M]=p*a[h+M]+y*a[l+M]+A*a[c+M]+b*a[d+M];return r}}class ou extends Qs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}}class Lp extends Qs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ip extends Qs{interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){const m=(n-t)/(i-t),v=1-m;for(let g=0;g!==o;++g)r[g]=a[l+g]*v+a[c+g]*m;return r}const u=o*2,f=e-1;for(let m=0;m!==o;++m){const v=a[l+m],g=a[c+m],p=f*u+m*2,y=d[p],A=d[p+1],b=e*u+m*2,M=h[b],w=h[b+1],R=Fp(n,t,y,M,i);r[m]=cu(R,v,A,w,g)}return r}}function cu(s,e,t,n,i){const r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Np(s,e,t,n,i){const r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Fp(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){const o=cu(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;const c=Np(r,e,t,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}class Qn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xi(t,this.TimeBufferType),this.values=Xi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xi(e.times,Array),values:Xi(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Ca(e.settings)&&(n.settings={inTangents:Xi(e.settings.inTangents,Array),outTangents:Xi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ou(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Ip(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Rr:t=this.InterpolantFactoryMethodDiscrete;break;case Cr:t=this.InterpolantFactoryMethodLinear;break;case so:t=this.InterpolantFactoryMethodSmooth;break;case Xl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ae("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rr;case this.InterpolantFactoryMethodLinear:return Cr;case this.InterpolantFactoryMethodSmooth:return so;case this.InterpolantFactoryMethodBezier:return Xl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Ca(this.settings)&&(Eh(this.settings.inTangents,e),Eh(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){Fe("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Fe("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&wf(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){Fe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===so,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const d=o*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){const v=t[d+m];if(v!==t[u+m]||v!==t[f+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Ca(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function Eh(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Qn.prototype.ValueTypeName="";Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=Cr;class er extends Qn{constructor(e,t,n){super(e,t,n)}}er.prototype.ValueTypeName="bool";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=Rr;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;class lu extends Qn{constructor(e,t,n,i){super(e,t,n,i)}}lu.prototype.ValueTypeName="color";class Nr extends Qn{constructor(e,t,n,i){super(e,t,n,i)}}Nr.prototype.ValueTypeName="number";class kp extends Qs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)Ct.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Fr extends Qn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new kp(this.times,this.values,this.getValueSize(),e)}}Fr.prototype.ValueTypeName="quaternion";Fr.prototype.InterpolantFactoryMethodSmooth=void 0;class tr extends Qn{constructor(e,t,n){super(e,t,n)}}tr.prototype.ValueTypeName="string";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=Rr;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Wa extends Qn{constructor(e,t,n,i){super(e,t,n,i)}}Wa.prototype.ValueTypeName="vector";class Nc{constructor(e="",t=-1,n=[],i=sl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=$n(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Op(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Qn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=Cp(c);c=wh(c,1,h),l=wh(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Nr(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(r);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Up(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Nr;case"vector":case"vector2":case"vector3":case"vector4":return Wa;case"color":return lu;case"quaternion":return Fr;case"bool":case"boolean":return er;case"string":return tr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Op(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Up(s.type);if(s.times===void 0){const n=[],i=[];Pp(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Ca(s.settings)&&(t.settings={inTangents:Xi(s.settings.inTangents,Float32Array),outTangents:Xi(s.settings.outTangents,Float32Array)}),t}const Ci={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Th(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Th(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Th(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Bp{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],m=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const gl=new Bp;class ds{constructor(e){this.manager=e!==void 0?e:gl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ds.DEFAULT_MATERIAL_NAME="__DEFAULT";const Si={};class zp extends Error{constructor(e,t){super(e),this.response=t}}class bl extends ds{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ci.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Si[e]!==void 0){Si[e].push({onLoad:t,onProgress:n,onError:i});return}Si[e]=[],Si[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Si[e],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,m=f!==0;let v=0;const g=new ReadableStream({start(p){y();function y(){d.read().then(({done:A,value:b})=>{if(A)p.close();else{v+=b.byteLength;const M=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let w=0,R=h.length;w<R;w++){const _=h[w];_.onProgress&&_.onProgress(M)}p.enqueue(b),y()}},A=>{p.error(A)})}}});return new Response(g)}else throw new zp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Ci.add(`file:${e}`,l);const h=Si[e];delete Si[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Si[e];if(h===void 0)throw this.manager.itemError(e),l;delete Si[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Es=new WeakMap;class Gp extends ds{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ci.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Es.get(a);d===void 0&&(d=[],Es.set(a,d)),d.push({onLoad:t,onError:i})}return a}const o=Dr("img");function c(){h(),t&&t(this);const d=Es.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Es.delete(this),r.manager.itemEnd(e)}function l(d){h(),i&&i(d),Ci.remove(`image:${e}`);const u=Es.get(this)||[];for(let f=0;f<u.length;f++){const m=u[f];m.onError&&m.onError(d)}Es.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ci.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Hp extends ds{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new js,o=new bl(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(h){i!==void 0?i(h):Fe(h);return}r._applyTexData(a,l),t&&t(a,l)},n,i),a}createDataTexture(e){const t=new js;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Vn,e.wrapT=t.wrapT!==void 0?t.wrapT:Vn,e.magFilter=t.magFilter!==void 0?t.magFilter:vt,e.minFilter=t.minFilter!==void 0?t.minFilter:vt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=di),t.mipmapCount===1&&(e.minFilter=vt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class hu extends ds{constructor(e){super(e)}load(e,t,n,i){const r=new jt,a=new Gp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Or extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Vp extends Or{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Po=new Ie,Ah=new C,Rh=new C;class _l{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ul,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Ah.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ah),Rh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Po.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Po,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===Pr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Po)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fa=new C,pa=new Ct,ni=new C;class du extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fa,pa,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fa,pa,ni.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(fa,pa,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fa,pa,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new C,Ch=new we,Ph=new we;class vn extends du{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,Ch,Ph),t.subVectors(Ph,Ch)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Wp extends _l{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Xs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class xl extends Or{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Wp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class qp extends _l{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0}}class uu extends Or{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Br extends du{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xp extends _l{constructor(){super(new Br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fu extends Or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Xp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class jp extends Or{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class wr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Do=new WeakMap;class Kp extends ds{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ae("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ae("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ci.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Do.has(a)===!0?(i&&i(Do.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ci.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Do.set(c,l),Ci.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ci.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ts=-90,As=1;class Yp extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new vn(Ts,As,e,t);i.layers=this.layers,this.add(i);const r=new vn(Ts,As,e,t);r.layers=this.layers,this.add(r);const a=new vn(Ts,As,e,t);a.layers=this.layers,this.add(a);const o=new vn(Ts,As,e,t);o.layers=this.layers,this.add(o);const c=new vn(Ts,As,e,t);c.layers=this.layers,this.add(c);const l=new vn(Ts,As,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===ui)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Jp extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class $p{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Zp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Zp(){this._document.hidden===!1&&this.reset()}class Qp{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Ct.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;Ct.multiplyQuaternionsFlat(e,a,e,t,e,n),Ct.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const vl="\\[\\]\\.:\\/",em=new RegExp("["+vl+"]","g"),yl="[^"+vl+"]",tm="[^"+vl.replace("\\.","")+"]",nm=/((?:WC+[\/:])*)/.source.replace("WC",yl),im=/(WCOD+)?/.source.replace("WCOD",tm),sm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yl),rm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yl),am=new RegExp("^"+nm+im+sm+rm+"$"),om=["material","materials","bones","map"];class cm{constructor(e,t,n){const i=n||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class $e{constructor(e,t,n){this.path=t,this.parsedPath=n||$e.parseTrackName(t),this.node=$e.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new $e.Composite(e,t,n):new $e(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(em,"")}static parseTrackName(e){const t=am.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);om.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=$e.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;Fe("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$e.Composite=cm;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class lm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Ns,endingEnd:Ns};for(let l=0;l!==a;++l){const h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Pc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case uf:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case sl:default:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===df;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===ka){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Fs,i.endingEnd=Fs):(e?i.endingStart=this.zeroSlopeAtStart?Fs:Ns:i.endingStart=Ua,t?i.endingEnd=this.zeroSlopeAtEnd?Fs:Ns:i.endingEnd=Ua)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}}const hm=new Float32Array(1);class dm extends Ni{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let d=0;d!==r;++d){const u=i[d],f=u.name;let m=h[f];if(m!==void 0)++m.referenceCount,a[d]=m;else{if(m=a[d],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}const v=t&&t._propertyBindings[d].binding.parsedPath;m=new Qp($e.create(n,f,v),u.ValueTypeName,u.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),a[d]=m}o[d].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new ou(new Float32Array(2),new Float32Array(2),1,hm),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?Nc.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=sl),c!==void 0){const d=c.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const h=new lm(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Nc.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const h=l._cacheIndex,d=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Dh=new Ie;class qa{constructor(e,t,n=0,i=1/0){this.ray=new Js(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ll,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Fe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Dh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dh),this}intersectObject(e,t=!0,n=[]){return Fc(e,this,n,t),n.sort(Lh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Fc(e[i],this,n,t);return n.sort(Lh),n}}function Lh(s,e){return s.distance-e.distance}function Fc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Fc(r[a],e,t,!0)}}class Ih{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=He(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(He(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class pu{static{pu.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}}class mu extends Ni{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Nh(s,e,t,n){const i=um(n);switch(t){case Wd:return s*e;case el:return s*e/i.components*i.byteLength;case tl:return s*e/i.components*i.byteLength;case hs:return s*e*2/i.components*i.byteLength;case nl:return s*e*2/i.components*i.byteLength;case qd:return s*e*3/i.components*i.byteLength;case Fn:return s*e*4/i.components*i.byteLength;case il:return s*e*4/i.components*i.byteLength;case Ea:case Ta:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Aa:case Ra:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case tc:case ic:return Math.max(s,16)*Math.max(e,8)/4;case ec:case nc:return Math.max(s,8)*Math.max(e,8)/2;case sc:case rc:case oc:case cc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ac:case Na:case lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case uc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case fc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case pc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case mc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case gc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case bc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case _c:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case xc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case vc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case yc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case wc:case Ec:case Tc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ac:case Rc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Fa:case Cc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function um(s){switch(s){case In:case zd:return{byteLength:1,components:1};case Tr:case Gd:case sn:return{byteLength:2,components:1};case Zc:case Qc:return{byteLength:2,components:4};case gi:case $c:case An:return{byteLength:4,components:1};case Hd:case Vd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qc}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qc);function gu(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function fm(s){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){const m=d[u],v=d[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){const v=d[f];s.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_m=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Sm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Am=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Um=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Om=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",qm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ag=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,og=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ug=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,bg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_g=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Dg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ig=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ug=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$g=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ib=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ab=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ob=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ab=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Db=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ib=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ub=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:pm,alphahash_pars_fragment:mm,alphamap_fragment:gm,alphamap_pars_fragment:bm,alphatest_fragment:_m,alphatest_pars_fragment:xm,aomap_fragment:vm,aomap_pars_fragment:ym,batching_pars_vertex:Mm,batching_vertex:Sm,begin_vertex:wm,beginnormal_vertex:Em,bsdfs:Tm,iridescence_fragment:Am,bumpmap_pars_fragment:Rm,clipping_planes_fragment:Cm,clipping_planes_pars_fragment:Pm,clipping_planes_pars_vertex:Dm,clipping_planes_vertex:Lm,color_fragment:Im,color_pars_fragment:Nm,color_pars_vertex:Fm,color_vertex:km,common:Um,cube_uv_reflection_fragment:Om,defaultnormal_vertex:Bm,displacementmap_pars_vertex:zm,displacementmap_vertex:Gm,emissivemap_fragment:Hm,emissivemap_pars_fragment:Vm,colorspace_fragment:Wm,colorspace_pars_fragment:qm,envmap_fragment:Xm,envmap_common_pars_fragment:jm,envmap_pars_fragment:Km,envmap_pars_vertex:Ym,envmap_physical_pars_fragment:ag,envmap_vertex:Jm,fog_vertex:$m,fog_pars_vertex:Zm,fog_fragment:Qm,fog_pars_fragment:eg,gradientmap_pars_fragment:tg,lightmap_pars_fragment:ng,lights_lambert_fragment:ig,lights_lambert_pars_fragment:sg,lights_pars_begin:rg,lights_toon_fragment:og,lights_toon_pars_fragment:cg,lights_phong_fragment:lg,lights_phong_pars_fragment:hg,lights_physical_fragment:dg,lights_physical_pars_fragment:ug,lights_fragment_begin:fg,lights_fragment_maps:pg,lights_fragment_end:mg,lightprobes_pars_fragment:gg,logdepthbuf_fragment:bg,logdepthbuf_pars_fragment:_g,logdepthbuf_pars_vertex:xg,logdepthbuf_vertex:vg,map_fragment:yg,map_pars_fragment:Mg,map_particle_fragment:Sg,map_particle_pars_fragment:wg,metalnessmap_fragment:Eg,metalnessmap_pars_fragment:Tg,morphinstance_vertex:Ag,morphcolor_vertex:Rg,morphnormal_vertex:Cg,morphtarget_pars_vertex:Pg,morphtarget_vertex:Dg,normal_fragment_begin:Lg,normal_fragment_maps:Ig,normal_pars_fragment:Ng,normal_pars_vertex:Fg,normal_vertex:kg,normalmap_pars_fragment:Ug,clearcoat_normal_fragment_begin:Og,clearcoat_normal_fragment_maps:Bg,clearcoat_pars_fragment:zg,iridescence_pars_fragment:Gg,opaque_fragment:Hg,packing:Vg,premultiplied_alpha_fragment:Wg,project_vertex:qg,dithering_fragment:Xg,dithering_pars_fragment:jg,roughnessmap_fragment:Kg,roughnessmap_pars_fragment:Yg,shadowmap_pars_fragment:Jg,shadowmap_pars_vertex:$g,shadowmap_vertex:Zg,shadowmask_pars_fragment:Qg,skinbase_vertex:eb,skinning_pars_vertex:tb,skinning_vertex:nb,skinnormal_vertex:ib,specularmap_fragment:sb,specularmap_pars_fragment:rb,tonemapping_fragment:ab,tonemapping_pars_fragment:ob,transmission_fragment:cb,transmission_pars_fragment:lb,uv_pars_fragment:hb,uv_pars_vertex:db,uv_vertex:ub,worldpos_vertex:fb,background_vert:pb,background_frag:mb,backgroundCube_vert:gb,backgroundCube_frag:bb,cube_vert:_b,cube_frag:xb,depth_vert:vb,depth_frag:yb,distance_vert:Mb,distance_frag:Sb,equirect_vert:wb,equirect_frag:Eb,linedashed_vert:Tb,linedashed_frag:Ab,meshbasic_vert:Rb,meshbasic_frag:Cb,meshlambert_vert:Pb,meshlambert_frag:Db,meshmatcap_vert:Lb,meshmatcap_frag:Ib,meshnormal_vert:Nb,meshnormal_frag:Fb,meshphong_vert:kb,meshphong_frag:Ub,meshphysical_vert:Ob,meshphysical_frag:Bb,meshtoon_vert:zb,meshtoon_frag:Gb,points_vert:Hb,points_frag:Vb,shadow_vert:Wb,shadow_frag:qb,sprite_vert:Xb,sprite_frag:jb},fe={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},hi={basic:{uniforms:pn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:pn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:pn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:pn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:pn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new De(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:pn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:pn([fe.points,fe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:pn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:pn([fe.common,fe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:pn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:pn([fe.sprite,fe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:pn([fe.common,fe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:pn([fe.lights,fe.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};hi.physical={uniforms:pn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const ma={r:0,b:0,g:0},Kb=new Ie,bu=new ke;bu.set(-1,0,0,0,1,0,0,0,1);function Yb(s,e,t,n,i,r){const a=new De(0);let o=i===!0?0:1,c,l,h=null,d=0,u=null;function f(y){let A=y.isScene===!0?y.background:null;if(A&&A.isTexture){const b=y.backgroundBlurriness>0;A=e.get(A,b)}return A}function m(y){let A=!1;const b=f(y);b===null?g(a,o):b&&b.isColor&&(g(b,1),A=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(y,A){const b=f(A);b&&(b.isCubeTexture||b.mapping===Ja)?(l===void 0&&(l=new It(new $s(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:Ks(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Kb.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(bu),l.material.toneMapped=Xe.getTransfer(b.colorSpace)!==ot,(h!==b||d!==b.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new It(new $a(2,2),new hn({name:"BackgroundMaterial",uniforms:Ks(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(b.colorSpace)!==ot,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,A){y.getRGB(ma,ru(s)),t.buffers.color.setClear(ma.r,ma.g,ma.b,A,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,A=1){a.set(y),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:m,addToRenderList:v,dispose:p}}function Jb(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(I,N,B,L,G){let S=!1;const U=d(I,L,B,N);r!==U&&(r=U,l(r.object)),S=f(I,L,B,G),S&&m(I,L,B,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(S||a)&&(a=!1,b(I,N,B,L),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return s.createVertexArray()}function l(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function d(I,N,B,L){const G=L.wireframe===!0;let S=n[N.id];S===void 0&&(S={},n[N.id]=S);const U=I.isInstancedMesh===!0?I.id:0;let J=S[U];J===void 0&&(J={},S[U]=J);let z=J[B.id];z===void 0&&(z={},J[B.id]=z);let j=z[G];return j===void 0&&(j=u(c()),z[G]=j),j}function u(I){const N=[],B=[],L=[];for(let G=0;G<t;G++)N[G]=0,B[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:L,object:I,attributes:{},index:null}}function f(I,N,B,L){const G=r.attributes,S=N.attributes;let U=0;const J=B.getAttributes();for(const z in J)if(J[z].location>=0){const Z=G[z];let se=S[z];if(se===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(se=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(se=I.instanceColor)),Z===void 0||Z.attribute!==se||se&&Z.data!==se.data)return!0;U++}return r.attributesNum!==U||r.index!==L}function m(I,N,B,L){const G={},S=N.attributes;let U=0;const J=B.getAttributes();for(const z in J)if(J[z].location>=0){let Z=S[z];Z===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor));const se={};se.attribute=Z,Z&&Z.data&&(se.data=Z.data),G[z]=se,U++}r.attributes=G,r.attributesNum=U,r.index=L}function v(){const I=r.newAttributes;for(let N=0,B=I.length;N<B;N++)I[N]=0}function g(I){p(I,0)}function p(I,N){const B=r.newAttributes,L=r.enabledAttributes,G=r.attributeDivisors;B[I]=1,L[I]===0&&(s.enableVertexAttribArray(I),L[I]=1),G[I]!==N&&(s.vertexAttribDivisor(I,N),G[I]=N)}function y(){const I=r.newAttributes,N=r.enabledAttributes;for(let B=0,L=N.length;B<L;B++)N[B]!==I[B]&&(s.disableVertexAttribArray(B),N[B]=0)}function A(I,N,B,L,G,S,U){U===!0?s.vertexAttribIPointer(I,N,B,G,S):s.vertexAttribPointer(I,N,B,L,G,S)}function b(I,N,B,L){v();const G=L.attributes,S=B.getAttributes(),U=N.defaultAttributeValues;for(const J in S){const z=S[J];if(z.location>=0){let j=G[J];if(j===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){const Z=j.normalized,se=j.itemSize,ae=e.get(j);if(ae===void 0)continue;const it=ae.buffer,We=ae.type,Ze=ae.bytesPerElement,K=We===s.INT||We===s.UNSIGNED_INT||j.gpuType===$c;if(j.isInterleavedBufferAttribute){const te=j.data,ye=te.stride,Ue=j.offset;if(te.isInstancedInterleavedBuffer){for(let xe=0;xe<z.locationSize;xe++)p(z.location+xe,te.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let xe=0;xe<z.locationSize;xe++)g(z.location+xe);s.bindBuffer(s.ARRAY_BUFFER,it);for(let xe=0;xe<z.locationSize;xe++)A(z.location+xe,se/z.locationSize,We,Z,ye*Ze,(Ue+se/z.locationSize*xe)*Ze,K)}else{if(j.isInstancedBufferAttribute){for(let te=0;te<z.locationSize;te++)p(z.location+te,j.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let te=0;te<z.locationSize;te++)g(z.location+te);s.bindBuffer(s.ARRAY_BUFFER,it);for(let te=0;te<z.locationSize;te++)A(z.location+te,se/z.locationSize,We,Z,se*Ze,se/z.locationSize*te*Ze,K)}}else if(U!==void 0){const Z=U[J];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(z.location,Z);break;case 3:s.vertexAttrib3fv(z.location,Z);break;case 4:s.vertexAttrib4fv(z.location,Z);break;default:s.vertexAttrib1fv(z.location,Z)}}}}y()}function M(){T();for(const I in n){const N=n[I];for(const B in N){const L=N[B];for(const G in L){const S=L[G];for(const U in S)h(S[U].object),delete S[U];delete L[G]}}delete n[I]}}function w(I){if(n[I.id]===void 0)return;const N=n[I.id];for(const B in N){const L=N[B];for(const G in L){const S=L[G];for(const U in S)h(S[U].object),delete S[U];delete L[G]}}delete n[I.id]}function R(I){for(const N in n){const B=n[N];for(const L in B){const G=B[L];if(G[I.id]===void 0)continue;const S=G[I.id];for(const U in S)h(S[U].object),delete S[U];delete G[I.id]}}}function _(I){for(const N in n){const B=n[N],L=I.isInstancedMesh===!0?I.id:0,G=B[L];if(G!==void 0){for(const S in G){const U=G[S];for(const J in U)h(U[J].object),delete U[J];delete G[S]}delete B[L],Object.keys(B).length===0&&delete n[N]}}}function T(){P(),a=!0,r!==i&&(r=i,l(r.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function $b(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Zb(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==Fn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==In&&R!==An&&!_&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Ae("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:A,maxFragmentUniforms:b,maxSamples:M,samples:w}}function Qb(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Ai,o=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,p=s.get(d);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{const y=r?0:n,A=y*4;let b=p.clippingState||null;c.value=b,b=h(m,u,A,f);for(let M=0;M!==A;++M)b[M]=t[M];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,m){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=c.value,m!==!0||g===null){const p=f+v*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let A=0,b=f;A!==v;++A,b+=4)a.copy(d[A]).applyMatrix4(y,o),a.normal.toArray(g,b),g[b+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const ks=4,e_=6,t_=20,n_=256,ur=new Br,Fh=new De;let Lo=null,Io=0,No=0,Fo=!1;const i_=new C,es=new C;class kc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=i_}=r;Lo=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Lo,Io,No),this._renderer.xr.enabled=Fo,e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lo=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vt,minFilter:vt,generateMipmaps:!1,type:sn,format:Fn,colorSpace:Cn,depthBuffer:!1},i=kh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=s_(r)),this._blurMaterial=a_(r,e,t),this._ggxMaterial=r_(r,e,t)}return i}_compileMaterial(e){const t=new It(new rn,e);this._renderer.compile(t,ur)}_sceneToCubeUV(e,t,n,i,r){const c=new vn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Fh),d.toneMapping=pi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new It(new $s,new Wn({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let p=!1;const y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,p=!0):(g.color.copy(Fh),p=!0);for(let A=0;A<6;A++){const b=A%3;b===0?(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[A],r.y,r.z)):b===1?(c.up.set(0,0,l[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[A],r.z)):(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[A]));const M=this._cubeSize;Rs(i,b*M,A>2?M:0,M,M),d.setRenderTarget(i),p&&d.render(v,c),d.render(e,c)}d.toneMapping=f,d.autoClear=u,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ls||e.mapping===Ws;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uh());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Rs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ur)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:m}=this,v=this._sizeLods[n],g=3*v*(n>m-ks?n-m+ks:0),p=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,Rs(r,g,p,3*v,2*v),i.setRenderTarget(r),i.render(o,ur),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,Rs(e,g,p,3*v,2*v),i.setRenderTarget(e),i.render(o,ur)}_blur(e,t,n,i){const r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],d=3*h*(i>this._lodMax-ks?i-this._lodMax+ks:0),u=4*(this._cubeSize-h);Rs(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(c,ur)}}function s_(s){const e=[],t=[];let n=s;const i=s-ks+1+e_;for(let r=0;r<i;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,m=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let p=0;p<d;p++){const y=p%3*2/3-1,A=p>2?0:-1,b=[y,A,0,y+2/3,A,0,y+2/3,A+1,0,y,A,0,y+2/3,A+1,0,y,A+1,0];m.set(b,f*u*p);for(let M=0;M<u;M++){const w=h[M*2]*2-1,R=h[M*2+1]*2-1;p===0?es.set(1,R,w):p===1?es.set(-w,1,-R):p===2?es.set(-w,R,1):p===3?es.set(-1,R,-w):p===4?es.set(-w,-1,R):es.set(w,R,-1),es.toArray(v,(p*u+M)*f)}}const g=new rn;g.setAttribute("position",new en(m,f)),g.setAttribute("outputDirection",new en(v,f)),t.push(new It(g,null)),n>ks&&n--}return{lodMeshes:t,sizeLods:e}}function kh(s,e,t){const n=new yn(s,e,t);return n.texture.mapping=Ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function r_(s,e,t){return new hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:n_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Za(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function a_(s,e,t){return new hn({name:"SphericalGaussianBlur",defines:{SAMPLES:t_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Za(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Uh(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Oh(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Za(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class _u extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new iu(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new $s(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:Ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:fi});r.uniforms.tEquirect.value=t;const a=new It(i,r),o=t.minFilter;return t.minFilter===di&&(t.minFilter=vt),new Yp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}function o_(s){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Sa||f===io)if(e.has(u)){const m=e.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const v=new _u(m.height);return v.fromEquirectangularTexture(s,u),e.set(u,v),u.addEventListener("dispose",l),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,m=f===Sa||f===io,v=f===ls||f===Ws;if(m||v){let g=t.get(u);const p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new kc(s)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{const y=u.image;return m&&y&&y.height>0||v&&y&&c(y)?(n===null&&(n=new kc(s)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===Sa?u.mapping=ls:f===io&&(u.mapping=Ws),u}function c(u){let f=0;const m=6;for(let v=0;v<m;v++)u[v]!==void 0&&f++;return f===m}function l(u){const f=u.target;f.removeEventListener("dispose",l);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function c_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Bs("WebGLRenderer: "+n+" extension not supported."),i}}}function l_(s,e,t,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)e.update(u[f],s.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,m=d.attributes.position;let v=0;if(m===void 0)return;if(f!==null){const y=f.array;v=f.version;for(let A=0,b=y.length;A<b;A+=3){const M=y[A+0],w=y[A+1],R=y[A+2];u.push(M,w,w,R,R,M)}}else{const y=m.array;v=m.version;for(let A=0,b=y.length/3-1;A<b;A+=3){const M=A+0,w=A+1,R=A+2;u.push(M,w,w,R,R,M)}}const g=new(m.count>=65535?Qd:Zd)(u,1);g.version=v;const p=r.get(d);p&&e.remove(p),r.set(d,g)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function h_(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){s.drawElements(n,u,r,d*a),t.update(u,n,1)}function l(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let g=0;g<f;g++)v+=u[g];t.update(v,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function d_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Fe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function u_(s,e,t){const n=new WeakMap,i=new ft;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let A=0;f===!0&&(A=1),m===!0&&(A=2),v===!0&&(A=3);let b=o.attributes.position.count*A,M=1;b>e.maxTextureSize&&(M=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const w=new Float32Array(b*M*4*d),R=new Jd(w,b,M,d);R.type=An,R.needsUpdate=!0;const _=A*4;for(let P=0;P<d;P++){const I=g[P],N=p[P],B=y[P],L=b*M*4*P;for(let G=0;G<I.count;G++){const S=G*_;f===!0&&(i.fromBufferAttribute(I,G),w[L+S+0]=i.x,w[L+S+1]=i.y,w[L+S+2]=i.z,w[L+S+3]=0),m===!0&&(i.fromBufferAttribute(N,G),w[L+S+4]=i.x,w[L+S+5]=i.y,w[L+S+6]=i.z,w[L+S+7]=0),v===!0&&(i.fromBufferAttribute(B,G),w[L+S+8]=i.x,w[L+S+9]=i.y,w[L+S+10]=i.z,w[L+S+11]=B.itemSize===4?i.w:1)}}u={count:d,texture:R,size:new we(b,M)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function f_(s,e,t,n,i){let r=new WeakMap;function a(l){const h=i.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const p_={[Xc]:"LINEAR_TONE_MAPPING",[jc]:"REINHARD_TONE_MAPPING",[Kc]:"CINEON_TONE_MAPPING",[Ka]:"ACES_FILMIC_TONE_MAPPING",[Ya]:"AGX_TONE_MAPPING",[Jc]:"NEUTRAL_TONE_MAPPING",[Yc]:"CUSTOM_TONE_MAPPING"};function m_(s,e,t,n,i,r){const a=new yn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new rn;l.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Bt([0,2,0,0,2,0],2));const h=new au({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new It(l,h),u=new Br(-1,1,1,-1,0,1);let f=null,m=null,v=!1,g,p=null,y=[],A=!1;this.setSize=function(b,M){a.setSize(b,M),o!==null&&o.setSize(b,M),c!==null&&c.setSize(b,M);for(let w=0;w<y.length;w++){const R=y[w];R.setSize&&R.setSize(b,M)}},this.setEffects=function(b){y=b,A=y.length>0&&y[0].isRenderPass===!0;const M=a.width,w=a.height;y.length>0&&o===null&&(o=new yn(M,w,{type:sn,depthBuffer:!1,stencilBuffer:!1}),c=new yn(M,w,{type:sn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<y.length;R++){const _=y[R];_.setSize&&_.setSize(M,w)}},this.begin=function(b,M){if(v||b.toneMapping===pi&&y.length===0)return!1;if(p=M,M!==null){const w=M.width,R=M.height;(a.width!==w||a.height!==R)&&this.setSize(w,R)}return A===!1&&b.setRenderTarget(a),g=b.toneMapping,b.toneMapping=pi,!0},this.hasRenderPass=function(){return A},this.end=function(b,M){b.toneMapping=g,v=!0;let w=a,R=o;for(let _=0;_<y.length;_++){const T=y[_];T.enabled!==!1&&(T.render(b,R,w,M),T.needsSwap!==!1&&(w=R,R=R===o?c:o))}if(f!==b.outputColorSpace||m!==b.toneMapping){f=b.outputColorSpace,m=b.toneMapping,h.defines={},Xe.getTransfer(f)===ot&&(h.defines.SRGB_TRANSFER="");const _=p_[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(p),b.render(d,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const xu=new jt,Uc=new Lr(1,1),vu=new Jd,yu=new Yf,Mu=new iu,Bh=[],zh=[],Gh=new Float32Array(16),Hh=new Float32Array(9),Vh=new Float32Array(4);function nr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Bh[i];if(r===void 0&&(r=new Float32Array(i),Bh[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Kt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Yt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Qa(s,e){let t=zh[e];t===void 0&&(t=new Int32Array(e),zh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function g_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function b_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2fv(this.addr,e),Yt(t,e)}}function __(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;s.uniform3fv(this.addr,e),Yt(t,e)}}function x_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4fv(this.addr,e),Yt(t,e)}}function v_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(Kt(t,n))return;Vh.set(n),s.uniformMatrix2fv(this.addr,!1,Vh),Yt(t,n)}}function y_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(Kt(t,n))return;Hh.set(n),s.uniformMatrix3fv(this.addr,!1,Hh),Yt(t,n)}}function M_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(Kt(t,n))return;Gh.set(n),s.uniformMatrix4fv(this.addr,!1,Gh),Yt(t,n)}}function S_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function w_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2iv(this.addr,e),Yt(t,e)}}function E_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;s.uniform3iv(this.addr,e),Yt(t,e)}}function T_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4iv(this.addr,e),Yt(t,e)}}function A_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function R_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;s.uniform2uiv(this.addr,e),Yt(t,e)}}function C_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;s.uniform3uiv(this.addr,e),Yt(t,e)}}function P_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;s.uniform4uiv(this.addr,e),Yt(t,e)}}function D_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Uc.compareFunction=t.isReversedDepthBuffer()?al:rl,r=Uc):r=xu,t.setTexture2D(e||r,i)}function L_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||yu,i)}function I_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Mu,i)}function N_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||vu,i)}function F_(s){switch(s){case 5126:return g_;case 35664:return b_;case 35665:return __;case 35666:return x_;case 35674:return v_;case 35675:return y_;case 35676:return M_;case 5124:case 35670:return S_;case 35667:case 35671:return w_;case 35668:case 35672:return E_;case 35669:case 35673:return T_;case 5125:return A_;case 36294:return R_;case 36295:return C_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return I_;case 36289:case 36303:case 36311:case 36292:return N_}}function k_(s,e){s.uniform1fv(this.addr,e)}function U_(s,e){const t=nr(e,this.size,2);s.uniform2fv(this.addr,t)}function O_(s,e){const t=nr(e,this.size,3);s.uniform3fv(this.addr,t)}function B_(s,e){const t=nr(e,this.size,4);s.uniform4fv(this.addr,t)}function z_(s,e){const t=nr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function G_(s,e){const t=nr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function H_(s,e){const t=nr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function V_(s,e){s.uniform1iv(this.addr,e)}function W_(s,e){s.uniform2iv(this.addr,e)}function q_(s,e){s.uniform3iv(this.addr,e)}function X_(s,e){s.uniform4iv(this.addr,e)}function j_(s,e){s.uniform1uiv(this.addr,e)}function K_(s,e){s.uniform2uiv(this.addr,e)}function Y_(s,e){s.uniform3uiv(this.addr,e)}function J_(s,e){s.uniform4uiv(this.addr,e)}function $_(s,e,t){const n=this.cache,i=e.length,r=Qa(t,i);Kt(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Uc:a=xu;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function Z_(s,e,t){const n=this.cache,i=e.length,r=Qa(t,i);Kt(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||yu,r[a])}function Q_(s,e,t){const n=this.cache,i=e.length,r=Qa(t,i);Kt(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Mu,r[a])}function e0(s,e,t){const n=this.cache,i=e.length,r=Qa(t,i);Kt(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||vu,r[a])}function t0(s){switch(s){case 5126:return k_;case 35664:return U_;case 35665:return O_;case 35666:return B_;case 35674:return z_;case 35675:return G_;case 35676:return H_;case 5124:case 35670:return V_;case 35667:case 35671:return W_;case 35668:case 35672:return q_;case 35669:case 35673:return X_;case 5125:return j_;case 36294:return K_;case 36295:return Y_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return Q_;case 36289:case 36303:case 36311:case 36292:return e0}}class n0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=F_(t.type)}}class i0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=t0(t.type)}}class s0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const ko=/(\w+)(\])?(\[|\.)?/g;function Wh(s,e){s.seq.push(e),s.map[e.id]=e}function r0(s,e,t){const n=s.name,i=n.length;for(ko.lastIndex=0;;){const r=ko.exec(n),a=ko.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Wh(t,l===void 0?new n0(o,s,e):new i0(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new s0(o),Wh(t,d)),t=d}}}class Pa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);r0(o,c,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function qh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const a0=37297;let o0=0;function c0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Xh=new ke;function l0(s){Xe._getMatrix(Xh,Xe.workingColorSpace,s);const e=`mat3( ${Xh.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(s)){case Oa:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function jh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+c0(s.getShaderSource(e),o)}else return r}function h0(s,e){const t=l0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const d0={[Xc]:"Linear",[jc]:"Reinhard",[Kc]:"Cineon",[Ka]:"ACESFilmic",[Ya]:"AgX",[Jc]:"Neutral",[Yc]:"Custom"};function u0(s,e){const t=d0[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ga=new C;function f0(){Xe.getLuminanceCoefficients(ga);const s=ga.x.toFixed(4),e=ga.y.toFixed(4),t=ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function m0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function g0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function xr(s){return s!==""}function Kh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const b0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oc(s){return s.replace(b0,x0)}const _0=new Map;function x0(s,e){let t=Ge[e];if(t===void 0){const n=_0.get(e);if(n!==void 0)t=Ge[n],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Oc(t)}const v0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jh(s){return s.replace(v0,y0)}function y0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function $h(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const M0={[Ma]:"SHADOWMAP_TYPE_PCF",[br]:"SHADOWMAP_TYPE_VSM"};function S0(s){return M0[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const w0={[ls]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE",[Ja]:"ENVMAP_TYPE_CUBE_UV"};function E0(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":w0[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const T0={[Ws]:"ENVMAP_MODE_REFRACTION"};function A0(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":T0[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const R0={[Ud]:"ENVMAP_BLENDING_MULTIPLY",[cf]:"ENVMAP_BLENDING_MIX",[lf]:"ENVMAP_BLENDING_ADD"};function C0(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":R0[s.combine]||"ENVMAP_BLENDING_NONE"}function P0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function D0(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=S0(t),l=E0(t),h=A0(t),d=C0(t),u=P0(t),f=p0(t),m=m0(r),v=i.createProgram();let g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(xr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(xr).join(`
`),p.length>0&&(p+=`
`)):(g=[$h(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),p=[$h(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==pi?u0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,h0("linearToOutputTexel",t.outputColorSpace),f0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),a=Oc(a),a=Kh(a,t),a=Yh(a,t),o=Oc(o),o=Kh(o,t),o=Yh(o,t),a=Jh(a),o=Jh(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=y+g+a,b=y+p+o,M=qh(i,i.VERTEX_SHADER,A),w=qh(i,i.FRAGMENT_SHADER,b);i.attachShader(v,M),i.attachShader(v,w),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function R(I){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(v)||"",B=i.getShaderInfoLog(M)||"",L=i.getShaderInfoLog(w)||"",G=N.trim(),S=B.trim(),U=L.trim();let J=!0,z=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,M,w);else{const j=jh(i,M,"vertex"),Z=jh(i,w,"fragment");Fe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+j+`
`+Z)}else G!==""?Ae("WebGLProgram: Program Info Log:",G):(S===""||U==="")&&(z=!1);z&&(I.diagnostics={runnable:J,programLog:G,vertexShader:{log:S,prefix:g},fragmentShader:{log:U,prefix:p}})}i.deleteShader(M),i.deleteShader(w),_=new Pa(i,v),T=g0(i,v)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(v,a0)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=o0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=w,this}let L0=0;class I0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new N0(e),t.set(e,n)),n}}class N0{constructor(e){this.id=L0++,this.code=e,this.usedTimes=0}}function F0(s){return s===hs||s===Na||s===Fa}function k0(s,e,t,n,i,r){const a=new ll,o=new I0,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,T,P,I,N,B){const L=I.fog,G=N.geometry,S=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,J=e.get(_.envMap||S,U),z=J&&J.mapping===Ja?J.image.height:null,j=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Ae("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const Z=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,se=Z!==void 0?Z.length:0;let ae=0;G.morphAttributes.position!==void 0&&(ae=1),G.morphAttributes.normal!==void 0&&(ae=2),G.morphAttributes.color!==void 0&&(ae=3);let it,We,Ze,K;if(j){const gt=hi[j];it=gt.vertexShader,We=gt.fragmentShader}else{it=_.vertexShader,We=_.fragmentShader;const gt=o.getVertexShaderStage(_),st=o.getFragmentShaderStage(_);o.update(_,gt,st),Ze=gt.id,K=st.id}const te=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Ue=N.isInstancedMesh===!0,xe=N.isBatchedMesh===!0,qe=!!_.map,Gt=!!_.matcap,Ke=!!J,tt=!!_.aoMap,mt=!!_.lightMap,Je=!!_.bumpMap&&_.wireframe===!1,Mt=!!_.normalMap,Jt=!!_.displacementMap,Mn=!!_.emissiveMap,Rt=!!_.metalnessMap,Ft=!!_.roughnessMap,O=_.anisotropy>0,an=_.clearcoat>0,lt=_.dispersion>0,D=_.retroreflectivity>0,x=_.iridescence>0,H=_.sheen>0,q=_.transmission>0,Y=O&&!!_.anisotropyMap,re=an&&!!_.clearcoatMap,oe=an&&!!_.clearcoatNormalMap,$=an&&!!_.clearcoatRoughnessMap,ee=x&&!!_.iridescenceMap,ce=x&&!!_.iridescenceThicknessMap,Re=H&&!!_.sheenColorMap,ue=H&&!!_.sheenRoughnessMap,le=!!_.specularMap,Ce=!!_.specularColorMap,Ne=!!_.specularIntensityMap,Oe=q&&!!_.transmissionMap,k=q&&!!_.thicknessMap,he=!!_.gradientMap,Q=!!_.alphaMap,de=_.alphaTest>0,ge=!!_.alphaHash,ne=!!_.extensions;let Pe=pi;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Pe=s.toneMapping);const Ee={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:it,fragmentShader:We,defines:_.defines,customVertexShaderID:Ze,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:xe,batchingColor:xe&&N._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&N.instanceColor!==null,instancingMorph:Ue&&N.morphTexture!==null,outputColorSpace:te===null?s.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:qe,matcap:Gt,envMap:Ke,envMapMode:Ke&&J.mapping,envMapCubeUVHeight:z,aoMap:tt,lightMap:mt,bumpMap:Je,normalMap:Mt,displacementMap:Jt,emissiveMap:Mn,normalMapObjectSpace:Mt&&_.normalMapType===mf,normalMapTangentSpace:Mt&&_.normalMapType===Lc,packedNormalMap:Mt&&_.normalMapType===Lc&&F0(_.normalMap.format),metalnessMap:Rt,roughnessMap:Ft,anisotropy:O,anisotropyMap:Y,clearcoat:an,clearcoatMap:re,clearcoatNormalMap:oe,clearcoatRoughnessMap:$,dispersion:lt,retroreflection:D,iridescence:x,iridescenceMap:ee,iridescenceThicknessMap:ce,sheen:H,sheenColorMap:Re,sheenRoughnessMap:ue,specularMap:le,specularColorMap:Ce,specularIntensityMap:Ne,transmission:q,transmissionMap:Oe,thicknessMap:k,gradientMap:he,opaque:_.transparent===!1&&_.blending===yr&&_.alphaToCoverage===!1,alphaMap:Q,alphaTest:de,alphaHash:ge,combine:_.combine,mapUv:qe&&m(_.map.channel),aoMapUv:tt&&m(_.aoMap.channel),lightMapUv:mt&&m(_.lightMap.channel),bumpMapUv:Je&&m(_.bumpMap.channel),normalMapUv:Mt&&m(_.normalMap.channel),displacementMapUv:Jt&&m(_.displacementMap.channel),emissiveMapUv:Mn&&m(_.emissiveMap.channel),metalnessMapUv:Rt&&m(_.metalnessMap.channel),roughnessMapUv:Ft&&m(_.roughnessMap.channel),anisotropyMapUv:Y&&m(_.anisotropyMap.channel),clearcoatMapUv:re&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:oe&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:ue&&m(_.sheenRoughnessMap.channel),specularMapUv:le&&m(_.specularMap.channel),specularColorMapUv:Ce&&m(_.specularColorMap.channel),specularIntensityMapUv:Ne&&m(_.specularIntensityMap.channel),transmissionMapUv:Oe&&m(_.transmissionMap.channel),thicknessMapUv:k&&m(_.thicknessMap.channel),alphaMapUv:Q&&m(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Mt||O),vertexNormals:!!G.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(qe||Q),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||G.attributes.normal===void 0&&Mt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ye,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ae,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Pe,decodeVideoTexture:qe&&_.map.isVideoTexture===!0&&Xe.getTransfer(_.map.colorSpace)===ot,decodeVideoTextureEmissive:Mn&&_.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(_.emissiveMap.colorSpace)===ot,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Yn,flipSided:_.side===Rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ne&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&_.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function g(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)T.push(P),T.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(T,_),y(T,_),T.push(s.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function y(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function A(_){const T=f[_.type];let P;if(T){const I=hi[T];P=Ir.clone(I.uniforms)}else P=_.uniforms;return P}function b(_,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new D0(s,T,_,i),l.push(P),h.set(T,P)),P}function M(_){if(--_.usedTimes===0){const T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:A,acquireProgram:b,releaseProgram:M,releaseShaderCache:w,programs:l,dispose:R}}function U0(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function O0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Zh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,v,g,p){let y=s[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:m,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:g,group:p},s[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=m,y.materialVariant=a(u),y.groupOrder=v,y.renderOrder=u.renderOrder,y.z=g,y.group=p),e++,y}function c(u,f,m,v,g,p,y){y.reversedDepth===!0&&(g=-g);const A=o(u,f,m,v,g,p);m.transmission>0?n.push(A):m.transparent===!0?i.push(A):t.push(A)}function l(u,f,m,v,g,p){const y=o(u,f,m,v,g,p);m.transmission>0?n.unshift(y):m.transparent===!0?i.unshift(y):t.unshift(y)}function h(u,f){t.length>1&&t.sort(u||O0),n.length>1&&n.sort(f||Zh),i.length>1&&i.sort(f||Zh)}function d(){for(let u=e,f=s.length;u<f;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:d,sort:h}}function B0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Qh,s.set(n,[a])):i>=r.length?(a=new Qh,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function z0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new De};break;case"SpotLight":t={position:new C,direction:new C,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function G0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let H0=0;function V0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function W0(s){const e=new z0,t=G0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const i=new C,r=new Ie,a=new Ie;function o(l){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,y=0,A=0,b=0,M=0,w=0,R=0,_=0,T=0,P=0;l.sort(V0);for(let N=0,B=l.length;N<B;N++){const L=l[N],G=L.color,S=L.intensity,U=L.distance;let J=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===hs?J=L.shadow.map.texture:J=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=G.r*S,d+=G.g*S,u+=G.b*S;else if(L.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(L.sh.coefficients[z],S);P++}else if(L.isSunLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,Z=t.get(L);Z.shadowIntensity=j.intensity,Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[m]=Z,n.sunShadowMap[m]=J;const se=j.getViewportCount();for(let ae=0;ae<se;ae++)n.sunShadowMatrix[v+ae]=j.getMatrix(ae),n.sunShadowCascade[v+ae]=j._cascadeData[ae];v+=se,m++}n.sun[f]=z,f++}else if(L.isDirectionalLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,Z=t.get(L);Z.shadowIntensity=j.intensity,Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,n.directionalShadow[g]=Z,n.directionalShadowMap[g]=J,n.directionalShadowMatrix[g]=L.shadow.matrix,M++}n.directional[g]=z,g++}else if(L.isSpotLight){const z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(G).multiplyScalar(S),z.distance=U,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,n.spot[y]=z;const j=L.shadow;if(L.map&&(n.spotLightMap[_]=L.map,_++,j.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[y]=j.matrix,L.castShadow){const Z=t.get(L);Z.shadowIntensity=j.intensity,Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,n.spotShadow[y]=Z,n.spotShadowMap[y]=J,R++}y++}else if(L.isRectAreaLight){const z=e.get(L);z.color.copy(G).multiplyScalar(S),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),n.rectArea[A]=z,A++}else if(L.isPointLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){const j=L.shadow,Z=t.get(L);Z.shadowIntensity=j.intensity,Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,Z.shadowCameraNear=j.camera.near,Z.shadowCameraFar=j.camera.far,n.pointShadow[p]=Z,n.pointShadowMap[p]=J,n.pointShadowMatrix[p]=L.shadow.matrix,w++}n.point[p]=z,p++}else if(L.isHemisphereLight){const z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(S),z.groundColor.copy(L.groundColor).multiplyScalar(S),n.hemi[b]=z,b++}}A>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const I=n.hash;(I.sunLength!==f||I.directionalLength!==g||I.pointLength!==p||I.spotLength!==y||I.rectAreaLength!==A||I.hemiLength!==b||I.numSunShadows!==m||I.numDirectionalShadows!==M||I.numPointShadows!==w||I.numSpotShadows!==R||I.numSpotMaps!==_||I.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=g,n.spot.length=y,n.rectArea.length=A,n.point.length=p,n.hemi.length=b,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,I.sunLength=f,I.directionalLength=g,I.pointLength=p,I.spotLength=y,I.rectAreaLength=A,I.hemiLength=b,I.numSunShadows=m,I.numDirectionalShadows=M,I.numPointShadows=w,I.numSpotShadows=R,I.numSpotMaps=_,I.numLightProbes=P,n.version=H0++)}function c(l,h){let d=0,u=0,f=0,m=0,v=0,g=0;const p=h.matrixWorldInverse;for(let y=0,A=l.length;y<A;y++){const b=l[y];if(b.isSunLight){const M=n.sun[d];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(p),d++}else if(b.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),u++}else if(b.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const M=n.rectArea[v];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function ed(s){const e=new W0(s),t=[],n=[],i=[];function r(u){d.camera=u,t.length=0,n.length=0,i.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function c(u){i.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function q0(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new ed(s),e.set(i,[o])):r>=a.length?(o=new ed(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const X0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,K0=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Y0=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],td=new Ie,fr=new C,Uo=new C;function J0(s,e,t){let n=new ul;const i=new we,r=new we,a=new ft,o=new Ap,c=new Rp,l={},h=t.maxTextureSize,d={[Di]:Rn,[Rn]:Di,[Yn]:Yn},u=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:X0,fragmentShader:j0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new rn;m.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new It(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ma;let p=this.type;this.render=function(w,R,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Nd&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ma);const T=s.getRenderTarget(),P=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),N=s.state;N.setBlending(fi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=p!==this.type;B&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(G=>G.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,G=w.length;L<G;L++){const S=w[L],U=S.shadow;if(U===void 0){Ae("WebGLShadowMap:",S,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const J=U.getFrameExtents();i.multiply(J),r.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/J.x),i.x=r.x*J.x,U.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/J.y),i.y=r.y*J.y,U.mapSize.y=r.y));const z=s.state.buffers.depth.getReversed();if(U.camera._reversedDepth=z,U.map===null||B===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===br){if(S.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new yn(i.x,i.y,{format:hs,type:sn,minFilter:vt,magFilter:vt,generateMipmaps:!1}),U.map.texture.name=S.name+".shadowMap",U.map.depthTexture=new Lr(i.x,i.y,An),U.map.depthTexture.name=S.name+".shadowMapDepth",U.map.depthTexture.format=Li,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Xt,U.map.depthTexture.magFilter=Xt}else S.isPointLight?(U.map=new _u(i.x),U.map.depthTexture=new Sp(i.x,gi)):(U.map=new yn(i.x,i.y),U.map.depthTexture=new Lr(i.x,i.y,gi)),U.map.depthTexture.name=S.name+".shadowMap",U.map.depthTexture.format=Li,this.type===Ma?(U.map.depthTexture.compareFunction=z?al:rl,U.map.depthTexture.minFilter=vt,U.map.depthTexture.magFilter=vt):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Xt,U.map.depthTexture.magFilter=Xt);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==i.x||U.map.height!==i.y)&&U.map.setSize(i.x,i.y);const j=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();S.isPointLight!==!0&&U.updateMatrices(S,_);for(let Z=0;Z<j;Z++){const se=U.getCamera(Z);if(S.isPointLight){const ae=U.camera,it=U.matrix,We=S.distance||ae.far;We!==ae.far&&(ae.far=We,ae.updateProjectionMatrix()),fr.setFromMatrixPosition(S.matrixWorld),ae.position.copy(fr),Uo.copy(ae.position),Uo.add(K0[Z]),ae.up.copy(Y0[Z]),ae.lookAt(Uo),ae.updateMatrixWorld(),it.makeTranslation(-fr.x,-fr.y,-fr.z),td.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),U._frustum.setFromProjectionMatrix(td,ae.coordinateSystem,ae.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)s.setRenderTarget(U.map,Z),s.clear();else{Z===0&&(s.setRenderTarget(U.map),s.clear());const ae=U.getViewport(Z);a.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),N.viewport(a)}n=U.getFrustum(Z),b(R,_,se,S,this.type)}U.isPointLightShadow!==!0&&this.type===br&&y(U,_),U.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(T,P,I)};function y(w,R){const _=e.update(v);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new yn(i.x,i.y,{format:hs,type:sn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(R,null,_,u,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(R,null,_,f,v,null)}function A(w,R,_,T){let P=null;const I=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)P=I;else if(P=_.isPointLight===!0?c:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=P.uuid,B=R.uuid;let L=l[N];L===void 0&&(L={},l[N]=L);let G=L[B];G===void 0&&(G=P.clone(),L[B]=G,R.addEventListener("dispose",M)),P=G}if(P.visible=R.visible,P.wireframe=R.wireframe,T===br?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:d[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const N=s.properties.get(P);N.light=_}return P}function b(w,R,_,T,P){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===br)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);const B=e.update(w),L=w.material;if(Array.isArray(L)){const G=B.groups;for(let S=0,U=G.length;S<U;S++){const J=G[S],z=L[J.materialIndex];if(z&&z.visible){const j=A(w,z,T,P);w.onBeforeShadow(s,w,R,_,B,j,J),s.renderBufferDirect(_,null,B,j,w,J),w.onAfterShadow(s,w,R,_,B,j,J)}}}else if(L.visible){const G=A(w,L,T,P);w.onBeforeShadow(s,w,R,_,B,G,null),s.renderBufferDirect(_,null,B,G,w,null),w.onAfterShadow(s,w,R,_,B,G,null)}}const N=w.children;for(let B=0,L=N.length;B<L;B++)b(N[B],R,_,T,P)}function M(w){w.target.removeEventListener("dispose",M);for(const _ in l){const T=l[_],P=w.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function $0(s,e){function t(){let k=!1;const he=new ft;let Q=null;const de=new ft(0,0,0,0);return{setMask:function(ge){Q!==ge&&!k&&(s.colorMask(ge,ge,ge,ge),Q=ge)},setLocked:function(ge){k=ge},setClear:function(ge,ne,Pe,Ee,gt){gt===!0&&(ge*=Ee,ne*=Ee,Pe*=Ee),he.set(ge,ne,Pe,Ee),de.equals(he)===!1&&(s.clearColor(ge,ne,Pe,Ee),de.copy(he))},reset:function(){k=!1,Q=null,de.set(-1,0,0,0)}}}function n(){let k=!1,he=!1,Q=null,de=null,ge=null;return{setReversed:function(ne){if(he!==ne){const Pe=e.get("EXT_clip_control");ne?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),he=ne;const Ee=ge;ge=null,this.setClear(Ee)}},getReversed:function(){return he},setTest:function(ne){ne?te(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(ne){Q!==ne&&!k&&(s.depthMask(ne),Q=ne)},setFunc:function(ne){if(he&&(ne=Af[ne]),de!==ne){switch(ne){case jo:s.depthFunc(s.NEVER);break;case Ko:s.depthFunc(s.ALWAYS);break;case Yo:s.depthFunc(s.LESS);break;case Er:s.depthFunc(s.LEQUAL);break;case Jo:s.depthFunc(s.EQUAL);break;case $o:s.depthFunc(s.GEQUAL);break;case Zo:s.depthFunc(s.GREATER);break;case Qo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=ne}},setLocked:function(ne){k=ne},setClear:function(ne){ge!==ne&&(ge=ne,he&&(ne=1-ne),s.clearDepth(ne))},reset:function(){k=!1,Q=null,de=null,ge=null,he=!1}}}function i(){let k=!1,he=null,Q=null,de=null,ge=null,ne=null,Pe=null,Ee=null,gt=null;return{setTest:function(st){k||(st?te(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(st){he!==st&&!k&&(s.stencilMask(st),he=st)},setFunc:function(st,qn,ei){(Q!==st||de!==qn||ge!==ei)&&(s.stencilFunc(st,qn,ei),Q=st,de=qn,ge=ei)},setOp:function(st,qn,ei){(ne!==st||Pe!==qn||Ee!==ei)&&(s.stencilOp(st,qn,ei),ne=st,Pe=qn,Ee=ei)},setLocked:function(st){k=st},setClear:function(st){gt!==st&&(s.clearStencil(st),gt=st)},reset:function(){k=!1,he=null,Q=null,de=null,ge=null,ne=null,Pe=null,Ee=null,gt=null}}}const r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},d={},u={},f=new WeakMap,m=[],v=null,g=!1,p=null,y=null,A=null,b=null,M=null,w=null,R=null,_=new De(0,0,0),T=0,P=!1,I=null,N=null,B=null,L=null,G=null;const S=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,J=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),U=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),U=J>=2);let j=null,Z={};const se=s.getParameter(s.SCISSOR_BOX),ae=s.getParameter(s.VIEWPORT),it=new ft().fromArray(se),We=new ft().fromArray(ae);function Ze(k,he,Q,de){const ge=new Uint8Array(4),ne=s.createTexture();s.bindTexture(k,ne),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pe=0;Pe<Q;Pe++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(he,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,ge):s.texImage2D(he+Pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ge);return ne}const K={};K[s.TEXTURE_2D]=Ze(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=Ze(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=Ze(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=Ze(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(s.DEPTH_TEST),a.setFunc(Er),Je(!1),Mt(Hl),te(s.CULL_FACE),tt(fi);function te(k){h[k]!==!0&&(s.enable(k),h[k]=!0)}function ye(k){h[k]!==!1&&(s.disable(k),h[k]=!1)}function Ue(k,he){return u[k]!==he?(s.bindFramebuffer(k,he),u[k]=he,k===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=he),k===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=he),!0):!1}function xe(k,he){let Q=m,de=!1;if(k){Q=f.get(he),Q===void 0&&(Q=[],f.set(he,Q));const ge=k.textures;if(Q.length!==ge.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let ne=0,Pe=ge.length;ne<Pe;ne++)Q[ne]=s.COLOR_ATTACHMENT0+ne;Q.length=ge.length,de=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,de=!0);de&&s.drawBuffers(Q)}function qe(k){return v!==k?(s.useProgram(k),v=k,!0):!1}const Gt={[Ds]:s.FUNC_ADD,[Wu]:s.FUNC_SUBTRACT,[qu]:s.FUNC_REVERSE_SUBTRACT};Gt[Xu]=s.MIN,Gt[ju]=s.MAX;const Ke={[Ku]:s.ZERO,[Yu]:s.ONE,[Ju]:s.SRC_COLOR,[Fd]:s.SRC_ALPHA,[nf]:s.SRC_ALPHA_SATURATE,[ef]:s.DST_COLOR,[Zu]:s.DST_ALPHA,[$u]:s.ONE_MINUS_SRC_COLOR,[kd]:s.ONE_MINUS_SRC_ALPHA,[tf]:s.ONE_MINUS_DST_COLOR,[Qu]:s.ONE_MINUS_DST_ALPHA,[sf]:s.CONSTANT_COLOR,[rf]:s.ONE_MINUS_CONSTANT_COLOR,[af]:s.CONSTANT_ALPHA,[of]:s.ONE_MINUS_CONSTANT_ALPHA};function tt(k,he,Q,de,ge,ne,Pe,Ee,gt,st){if(k===fi){g===!0&&(ye(s.BLEND),g=!1);return}if(g===!1&&(te(s.BLEND),g=!0),k!==Vu){if(k!==p||st!==P){if((y!==Ds||M!==Ds)&&(s.blendEquation(s.FUNC_ADD),y=Ds,M=Ds),st)switch(k){case yr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xo:s.blendFunc(s.ONE,s.ONE);break;case Vl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Fe("WebGLState: Invalid blending: ",k);break}else switch(k){case yr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Vl:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wl:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",k);break}A=null,b=null,w=null,R=null,_.set(0,0,0),T=0,p=k,P=st}return}ge=ge||he,ne=ne||Q,Pe=Pe||de,(he!==y||ge!==M)&&(s.blendEquationSeparate(Gt[he],Gt[ge]),y=he,M=ge),(Q!==A||de!==b||ne!==w||Pe!==R)&&(s.blendFuncSeparate(Ke[Q],Ke[de],Ke[ne],Ke[Pe]),A=Q,b=de,w=ne,R=Pe),(Ee.equals(_)===!1||gt!==T)&&(s.blendColor(Ee.r,Ee.g,Ee.b,gt),_.copy(Ee),T=gt),p=k,P=!1}function mt(k,he){k.side===Yn?ye(s.CULL_FACE):te(s.CULL_FACE);let Q=k.side===Rn;he&&(Q=!Q),Je(Q),k.blending===yr&&k.transparent===!1?tt(fi):tt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const de=k.stencilWrite;o.setTest(de),de&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Mn(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?te(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function Je(k){I!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),I=k)}function Mt(k){k!==Gu?(te(s.CULL_FACE),k!==N&&(k===Hl?s.cullFace(s.BACK):k===Hu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),N=k}function Jt(k){k!==B&&(U&&s.lineWidth(k),B=k)}function Mn(k,he,Q){k?(te(s.POLYGON_OFFSET_FILL),(L!==he||G!==Q)&&(L=he,G=Q,a.getReversed()&&(he=-he),s.polygonOffset(he,Q))):ye(s.POLYGON_OFFSET_FILL)}function Rt(k){k?te(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function Ft(k){k===void 0&&(k=s.TEXTURE0+S-1),j!==k&&(s.activeTexture(k),j=k)}function O(k,he,Q){Q===void 0&&(j===null?Q=s.TEXTURE0+S-1:Q=j);let de=Z[Q];de===void 0&&(de={type:void 0,texture:void 0},Z[Q]=de),(de.type!==k||de.texture!==he)&&(j!==Q&&(s.activeTexture(Q),j=Q),s.bindTexture(k,he||K[k]),de.type=k,de.texture=he)}function an(){const k=Z[j];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function lt(){try{s.compressedTexImage2D(...arguments)}catch(k){Fe("WebGLState:",k)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(k){Fe("WebGLState:",k)}}function x(){try{s.texSubImage2D(...arguments)}catch(k){Fe("WebGLState:",k)}}function H(){try{s.texSubImage3D(...arguments)}catch(k){Fe("WebGLState:",k)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Fe("WebGLState:",k)}}function Y(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Fe("WebGLState:",k)}}function re(){try{s.texStorage2D(...arguments)}catch(k){Fe("WebGLState:",k)}}function oe(){try{s.texStorage3D(...arguments)}catch(k){Fe("WebGLState:",k)}}function $(){try{s.texImage2D(...arguments)}catch(k){Fe("WebGLState:",k)}}function ee(){try{s.texImage3D(...arguments)}catch(k){Fe("WebGLState:",k)}}function ce(k){return d[k]!==void 0?d[k]:s.getParameter(k)}function Re(k,he){d[k]!==he&&(s.pixelStorei(k,he),d[k]=he)}function ue(k){it.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),it.copy(k))}function le(k){We.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),We.copy(k))}function Ce(k,he){let Q=l.get(he);Q===void 0&&(Q=new WeakMap,l.set(he,Q));let de=Q.get(k);de===void 0&&(de=s.getUniformBlockIndex(he,k.name),Q.set(k,de))}function Ne(k,he){const de=l.get(he).get(k);c.get(he)!==de&&(s.uniformBlockBinding(he,de,k.__bindingPointIndex),c.set(he,de))}function Oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,Z={},u={},f=new WeakMap,m=[],v=null,g=!1,p=null,y=null,A=null,b=null,M=null,w=null,R=null,_=new De(0,0,0),T=0,P=!1,I=null,N=null,B=null,L=null,G=null,it.set(0,0,s.canvas.width,s.canvas.height),We.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:ye,bindFramebuffer:Ue,drawBuffers:xe,useProgram:qe,setBlending:tt,setMaterial:mt,setFlipSided:Je,setCullFace:Mt,setLineWidth:Jt,setPolygonOffset:Mn,setScissorTest:Rt,activeTexture:Ft,bindTexture:O,unbindTexture:an,compressedTexImage2D:lt,compressedTexImage3D:D,texImage2D:$,texImage3D:ee,pixelStorei:Re,getParameter:ce,updateUBOMapping:Ce,uniformBlockBinding:Ne,texStorage2D:re,texStorage3D:oe,texSubImage2D:x,texSubImage3D:H,compressedTexSubImage2D:q,compressedTexSubImage3D:Y,scissor:ue,viewport:le,reset:Oe}}function Z0(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new we,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,x){return m?new OffscreenCanvas(D,x):Dr("canvas")}function g(D,x,H){let q=1;const Y=lt(D);if((Y.width>H||Y.height>H)&&(q=H/Math.max(Y.width,Y.height)),q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const re=Math.floor(q*Y.width),oe=Math.floor(q*Y.height);u===void 0&&(u=v(re,oe));const $=x?v(re,oe):u;return $.width=re,$.height=oe,$.getContext("2d").drawImage(D,0,0,re,oe),Ae("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+re+"x"+oe+")."),$}else return"data"in D&&Ae("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),D;return D}function p(D){return D.generateMipmaps}function y(D){s.generateMipmap(D)}function A(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(D,x,H,q,Y,re=!1){if(D!==null){if(s[D]!==void 0)return s[D];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let oe;q&&(oe=e.get("EXT_texture_norm16"),oe||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=x;if(x===s.RED&&(H===s.FLOAT&&($=s.R32F),H===s.HALF_FLOAT&&($=s.R16F),H===s.UNSIGNED_BYTE&&($=s.R8),H===s.UNSIGNED_SHORT&&oe&&($=oe.R16_EXT),H===s.SHORT&&oe&&($=oe.R16_SNORM_EXT)),x===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&($=s.R8UI),H===s.UNSIGNED_SHORT&&($=s.R16UI),H===s.UNSIGNED_INT&&($=s.R32UI),H===s.BYTE&&($=s.R8I),H===s.SHORT&&($=s.R16I),H===s.INT&&($=s.R32I)),x===s.RG&&(H===s.FLOAT&&($=s.RG32F),H===s.HALF_FLOAT&&($=s.RG16F),H===s.UNSIGNED_BYTE&&($=s.RG8),H===s.UNSIGNED_SHORT&&oe&&($=oe.RG16_EXT),H===s.SHORT&&oe&&($=oe.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&($=s.RG8UI),H===s.UNSIGNED_SHORT&&($=s.RG16UI),H===s.UNSIGNED_INT&&($=s.RG32UI),H===s.BYTE&&($=s.RG8I),H===s.SHORT&&($=s.RG16I),H===s.INT&&($=s.RG32I)),x===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&($=s.RGB8UI),H===s.UNSIGNED_SHORT&&($=s.RGB16UI),H===s.UNSIGNED_INT&&($=s.RGB32UI),H===s.BYTE&&($=s.RGB8I),H===s.SHORT&&($=s.RGB16I),H===s.INT&&($=s.RGB32I)),x===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&($=s.RGBA8UI),H===s.UNSIGNED_SHORT&&($=s.RGBA16UI),H===s.UNSIGNED_INT&&($=s.RGBA32UI),H===s.BYTE&&($=s.RGBA8I),H===s.SHORT&&($=s.RGBA16I),H===s.INT&&($=s.RGBA32I)),x===s.RGB&&(H===s.UNSIGNED_SHORT&&oe&&($=oe.RGB16_EXT),H===s.SHORT&&oe&&($=oe.RGB16_SNORM_EXT),H===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),x===s.RGBA){const ee=re?Oa:Xe.getTransfer(Y);H===s.FLOAT&&($=s.RGBA32F),H===s.HALF_FLOAT&&($=s.RGBA16F),H===s.UNSIGNED_BYTE&&($=ee===ot?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT&&oe&&($=oe.RGBA16_EXT),H===s.SHORT&&oe&&($=oe.RGBA16_SNORM_EXT),H===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function M(D,x){let H;return D?x===null||x===gi||x===Ar?H=s.DEPTH24_STENCIL8:x===An?H=s.DEPTH32F_STENCIL8:x===Tr&&(H=s.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===gi||x===Ar?H=s.DEPTH_COMPONENT24:x===An?H=s.DEPTH_COMPONENT32F:x===Tr&&(H=s.DEPTH_COMPONENT16),H}function w(D,x){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==Xt&&D.minFilter!==vt?Math.log2(Math.max(x.width,x.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?x.mipmaps.length:1}function R(D){const x=D.target;x.removeEventListener("dispose",R),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function _(D){const x=D.target;x.removeEventListener("dispose",_),I(x)}function T(D){const x=n.get(D);if(x.__webglInit===void 0)return;const H=D.source,q=f.get(H);if(q){const Y=q[x.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&P(D),Object.keys(q).length===0&&f.delete(H)}n.remove(D)}function P(D){const x=n.get(D);s.deleteTexture(x.__webglTexture);const H=D.source,q=f.get(H);delete q[x.__cacheKey],a.memory.textures--}function I(D){const x=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let Y=0;Y<x.__webglFramebuffer[q].length;Y++)s.deleteFramebuffer(x.__webglFramebuffer[q][Y]);else s.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)s.deleteFramebuffer(x.__webglFramebuffer[q]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const H=D.textures;for(let q=0,Y=H.length;q<Y;q++){const re=n.get(H[q]);re.__webglTexture&&(s.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove(H[q])}n.remove(D)}let N=0;function B(){N=0}function L(){return N}function G(D){N=D}function S(){const D=N;return D>=i.maxTextures&&Ae("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+i.maxTextures),N+=1,D}function U(D){const x=[];return x.push(D.wrapS),x.push(D.wrapT),x.push(D.wrapR||0),x.push(D.magFilter),x.push(D.minFilter),x.push(D.anisotropy),x.push(D.internalFormat),x.push(D.format),x.push(D.type),x.push(D.generateMipmaps),x.push(D.premultiplyAlpha),x.push(D.flipY),x.push(D.unpackAlignment),x.push(D.colorSpace),x.join()}function J(D,x){const H=n.get(D);if(D.isVideoTexture&&O(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&H.__version!==D.version){const q=D.image;if(q===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(H,D,x);return}}else D.isExternalTexture&&(H.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+x)}function z(D,x){const H=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){ye(H,D,x);return}else D.isExternalTexture&&(H.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+x)}function j(D,x){const H=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){ye(H,D,x);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+x)}function Z(D,x){const H=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&H.__version!==D.version){Ue(H,D,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+x)}const se={[qs]:s.REPEAT,[Vn]:s.CLAMP_TO_EDGE,[Ia]:s.MIRRORED_REPEAT},ae={[Xt]:s.NEAREST,[Bd]:s.NEAREST_MIPMAP_NEAREST,[_r]:s.NEAREST_MIPMAP_LINEAR,[vt]:s.LINEAR,[wa]:s.LINEAR_MIPMAP_NEAREST,[di]:s.LINEAR_MIPMAP_LINEAR},it={[bf]:s.NEVER,[Mf]:s.ALWAYS,[_f]:s.LESS,[rl]:s.LEQUAL,[xf]:s.EQUAL,[al]:s.GEQUAL,[vf]:s.GREATER,[yf]:s.NOTEQUAL};function We(D,x){if(x.type===An&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===vt||x.magFilter===wa||x.magFilter===_r||x.magFilter===di||x.minFilter===vt||x.minFilter===wa||x.minFilter===_r||x.minFilter===di)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,se[x.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,se[x.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,se[x.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,ae[x.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,ae[x.minFilter]),x.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,it[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Xt||x.minFilter!==_r&&x.minFilter!==di||x.type===An&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ze(D,x){let H=!1;D.__webglInit===void 0&&(D.__webglInit=!0,x.addEventListener("dispose",R));const q=x.source;let Y=f.get(q);Y===void 0&&(Y={},f.set(q,Y));const re=U(x);if(re!==D.__cacheKey){Y[re]===void 0&&(Y[re]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Y[re].usedTimes++;const oe=Y[D.__cacheKey];oe!==void 0&&(Y[D.__cacheKey].usedTimes--,oe.usedTimes===0&&P(x)),D.__cacheKey=re,D.__webglTexture=Y[re].texture}return H}function K(D,x,H){return Math.floor(Math.floor(D/H)/x)}function te(D,x,H,q){const re=D.updateRanges;if(re.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,H,q,x.data);else{re.sort((Re,ue)=>Re.start-ue.start);let oe=0;for(let Re=1;Re<re.length;Re++){const ue=re[oe],le=re[Re],Ce=ue.start+ue.count,Ne=K(le.start,x.width,4),Oe=K(ue.start,x.width,4);le.start<=Ce+1&&Ne===Oe&&K(le.start+le.count-1,x.width,4)===Ne?ue.count=Math.max(ue.count,le.start+le.count-ue.start):(++oe,re[oe]=le)}re.length=oe+1;const $=t.getParameter(s.UNPACK_ROW_LENGTH),ee=t.getParameter(s.UNPACK_SKIP_PIXELS),ce=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let Re=0,ue=re.length;Re<ue;Re++){const le=re[Re],Ce=Math.floor(le.start/4),Ne=Math.ceil(le.count/4),Oe=Ce%x.width,k=Math.floor(Ce/x.width),he=Ne,Q=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(s.UNPACK_SKIP_ROWS,k),t.texSubImage2D(s.TEXTURE_2D,0,Oe,k,he,Q,H,q,x.data)}D.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,$),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(s.UNPACK_SKIP_ROWS,ce)}}function ye(D,x,H){let q=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=s.TEXTURE_3D);const Y=Ze(D,x),re=x.source;t.bindTexture(q,D.__webglTexture,s.TEXTURE0+H);const oe=n.get(re);if(re.version!==oe.__version||Y===!0){if(t.activeTexture(s.TEXTURE0+H),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const Q=Xe.getPrimaries(Xe.workingColorSpace),de=x.colorSpace===ji?null:Xe.getPrimaries(x.colorSpace),ge=x.colorSpace===ji||Q===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let ee=g(x.image,!1,i.maxTextureSize);ee=an(x,ee);const ce=r.convert(x.format,x.colorSpace),Re=r.convert(x.type);let ue=b(x.internalFormat,ce,Re,x.normalized,x.colorSpace,x.isVideoTexture);We(q,x);let le;const Ce=x.mipmaps,Ne=x.isVideoTexture!==!0,Oe=oe.__version===void 0||Y===!0,k=re.dataReady,he=w(x,ee);if(x.isDepthTexture)ue=M(x.format===os,x.type),Oe&&(Ne?t.texStorage2D(s.TEXTURE_2D,1,ue,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,ue,ee.width,ee.height,0,ce,Re,null));else if(x.isDataTexture)if(Ce.length>0){Ne&&Oe&&t.texStorage2D(s.TEXTURE_2D,he,ue,Ce[0].width,Ce[0].height);for(let Q=0,de=Ce.length;Q<de;Q++)le=Ce[Q],Ne?k&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,le.width,le.height,ce,Re,le.data):t.texImage2D(s.TEXTURE_2D,Q,ue,le.width,le.height,0,ce,Re,le.data);x.generateMipmaps=!1}else Ne?(Oe&&t.texStorage2D(s.TEXTURE_2D,he,ue,ee.width,ee.height),k&&te(x,ee,ce,Re)):t.texImage2D(s.TEXTURE_2D,0,ue,ee.width,ee.height,0,ce,Re,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ne&&Oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,ue,Ce[0].width,Ce[0].height,ee.depth);for(let Q=0,de=Ce.length;Q<de;Q++)if(le=Ce[Q],x.format!==Fn)if(ce!==null)if(Ne){if(k)if(x.layerUpdates.size>0){const ge=Nh(le.width,le.height,x.format,x.type);for(const ne of x.layerUpdates){const Pe=le.data.subarray(ne*ge/le.data.BYTES_PER_ELEMENT,(ne+1)*ge/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,ne,le.width,le.height,1,ce,Pe)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,le.width,le.height,ee.depth,ce,le.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,ue,le.width,le.height,ee.depth,0,le.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?k&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,le.width,le.height,ee.depth,ce,Re,le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Q,ue,le.width,le.height,ee.depth,0,ce,Re,le.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ne&&Oe&&t.texStorage2D(s.TEXTURE_2D,he,ue,Ce[0].width,Ce[0].height);for(let Q=0,de=Ce.length;Q<de;Q++)le=Ce[Q],x.format!==Fn?ce!==null?Ne?k&&t.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,le.width,le.height,ce,le.data):t.compressedTexImage2D(s.TEXTURE_2D,Q,ue,le.width,le.height,0,le.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?k&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,le.width,le.height,ce,Re,le.data):t.texImage2D(s.TEXTURE_2D,Q,ue,le.width,le.height,0,ce,Re,le.data)}else if(x.isDataArrayTexture)if(Ne){if(Oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,ue,ee.width,ee.height,ee.depth),k)if(x.layerUpdates.size>0){const Q=Nh(ee.width,ee.height,x.format,x.type);for(const de of x.layerUpdates){const ge=ee.data.subarray(de*Q/ee.data.BYTES_PER_ELEMENT,(de+1)*Q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,ee.width,ee.height,1,ce,Re,ge)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,Re,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ue,ee.width,ee.height,ee.depth,0,ce,Re,ee.data);else if(x.isData3DTexture)Ne?(Oe&&t.texStorage3D(s.TEXTURE_3D,he,ue,ee.width,ee.height,ee.depth),k&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,Re,ee.data)):t.texImage3D(s.TEXTURE_3D,0,ue,ee.width,ee.height,ee.depth,0,ce,Re,ee.data);else if(x.isFramebufferTexture){if(Oe)if(Ne)t.texStorage2D(s.TEXTURE_2D,he,ue,ee.width,ee.height);else{let Q=ee.width,de=ee.height;for(let ge=0;ge<he;ge++)t.texImage2D(s.TEXTURE_2D,ge,ue,Q,de,0,ce,Re,null),Q>>=1,de>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){const Q=s.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),ee.parentNode!==Q){Q.appendChild(ee),d.add(x),Q.onpaint=de=>{const ge=de.changedElements;for(const ne of d)ge.includes(ne.image)&&(ne.needsUpdate=!0)},Q.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ee);else{const ge=s.RGBA,ne=s.RGBA,Pe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ge,ne,Pe,ee)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Ne&&Oe){const Q=lt(Ce[0]);t.texStorage2D(s.TEXTURE_2D,he,ue,Q.width,Q.height)}for(let Q=0,de=Ce.length;Q<de;Q++)le=Ce[Q],Ne?k&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,ce,Re,le):t.texImage2D(s.TEXTURE_2D,Q,ue,ce,Re,le);x.generateMipmaps=!1}else if(Ne){if(Oe){const Q=lt(ee);t.texStorage2D(s.TEXTURE_2D,he,ue,Q.width,Q.height)}k&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ce,Re,ee)}else t.texImage2D(s.TEXTURE_2D,0,ue,ce,Re,ee);p(x)&&y(q),oe.__version=re.version,x.onUpdate&&x.onUpdate(x)}D.__version=x.version}function Ue(D,x,H){if(x.image.length!==6)return;const q=Ze(D,x),Y=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+H);const re=n.get(Y);if(Y.version!==re.__version||q===!0){t.activeTexture(s.TEXTURE0+H);const oe=Xe.getPrimaries(Xe.workingColorSpace),$=x.colorSpace===ji?null:Xe.getPrimaries(x.colorSpace),ee=x.colorSpace===ji||oe===$?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ce=x.isCompressedTexture||x.image[0].isCompressedTexture,Re=x.image[0]&&x.image[0].isDataTexture,ue=[];for(let ne=0;ne<6;ne++)!ce&&!Re?ue[ne]=g(x.image[ne],!0,i.maxCubemapSize):ue[ne]=Re?x.image[ne].image:x.image[ne],ue[ne]=an(x,ue[ne]);const le=ue[0],Ce=r.convert(x.format,x.colorSpace),Ne=r.convert(x.type),Oe=b(x.internalFormat,Ce,Ne,x.normalized,x.colorSpace),k=x.isVideoTexture!==!0,he=re.__version===void 0||q===!0,Q=Y.dataReady;let de=w(x,le);We(s.TEXTURE_CUBE_MAP,x);let ge;if(ce){k&&he&&t.texStorage2D(s.TEXTURE_CUBE_MAP,de,Oe,le.width,le.height);for(let ne=0;ne<6;ne++){ge=ue[ne].mipmaps;for(let Pe=0;Pe<ge.length;Pe++){const Ee=ge[Pe];x.format!==Fn?Ce!==null?k?Q&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,0,0,Ee.width,Ee.height,Ce,Ee.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,Oe,Ee.width,Ee.height,0,Ee.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,0,0,Ee.width,Ee.height,Ce,Ne,Ee.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,Oe,Ee.width,Ee.height,0,Ce,Ne,Ee.data)}}}else{if(ge=x.mipmaps,k&&he){ge.length>0&&de++;const ne=lt(ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,de,Oe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Re){k?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ue[ne].width,ue[ne].height,Ce,Ne,ue[ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Oe,ue[ne].width,ue[ne].height,0,Ce,Ne,ue[ne].data);for(let Pe=0;Pe<ge.length;Pe++){const gt=ge[Pe].image[ne].image;k?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,0,0,gt.width,gt.height,Ce,Ne,gt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,Oe,gt.width,gt.height,0,Ce,Ne,gt.data)}}else{k?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ce,Ne,ue[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Oe,Ce,Ne,ue[ne]);for(let Pe=0;Pe<ge.length;Pe++){const Ee=ge[Pe];k?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,0,0,Ce,Ne,Ee.image[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,Oe,Ce,Ne,Ee.image[ne])}}}p(x)&&y(s.TEXTURE_CUBE_MAP),re.__version=Y.version,x.onUpdate&&x.onUpdate(x)}D.__version=x.version}function xe(D,x,H,q,Y,re){const oe=r.convert(H.format,H.colorSpace),$=r.convert(H.type),ee=b(H.internalFormat,oe,$,H.normalized,H.colorSpace),ce=n.get(x),Re=n.get(H);if(Re.__renderTarget=x,!ce.__hasExternalTextures){const ue=Math.max(1,x.width>>re),le=Math.max(1,x.height>>re);Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?t.texImage3D(Y,re,ee,ue,le,x.depth,0,oe,$,null):t.texImage2D(Y,re,ee,ue,le,0,oe,$,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),Ft(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,Y,Re.__webglTexture,0,Rt(x)):(Y===s.TEXTURE_2D||Y>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,Y,Re.__webglTexture,re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function qe(D,x,H){if(s.bindRenderbuffer(s.RENDERBUFFER,D),x.depthBuffer){const q=x.depthTexture,Y=q&&q.isDepthTexture?q.type:null,re=M(x.stencilBuffer,Y),oe=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ft(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt(x),re,x.width,x.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt(x),re,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,re,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,D)}else{const q=x.textures;for(let Y=0;Y<q.length;Y++){const re=q[Y],oe=r.convert(re.format,re.colorSpace),$=r.convert(re.type),ee=b(re.internalFormat,oe,$,re.normalized,re.colorSpace);Ft(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt(x),ee,x.width,x.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt(x),ee,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ee,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Gt(D,x,H){const q=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=n.get(x.depthTexture);if(Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),Y.__webglTexture===void 0){Y.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),We(s.TEXTURE_CUBE_MAP,x.depthTexture);const ce=r.convert(x.depthTexture.format),Re=r.convert(x.depthTexture.type);let ue;x.depthTexture.format===Li?ue=s.DEPTH_COMPONENT24:x.depthTexture.format===os&&(ue=s.DEPTH24_STENCIL8);for(let le=0;le<6;le++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ue,x.width,x.height,0,ce,Re,null)}}else J(x.depthTexture,0);const re=Y.__webglTexture,oe=Rt(x),$=q?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,ee=x.depthTexture.format===os?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===Li)Ft(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,$,re,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,ee,$,re,0);else if(x.depthTexture.format===os)Ft(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,$,re,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,ee,$,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ke(D){const x=n.get(D),H=D.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==D.depthTexture){const q=D.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const Y=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",Y)};q.addEventListener("dispose",Y),x.__depthDisposeCallback=Y}x.__boundDepthTexture=q}if(D.depthTexture&&!x.__autoAllocateDepthBuffer)if(H)for(let q=0;q<6;q++)Gt(x.__webglFramebuffer[q],D,q);else{const q=D.texture.mipmaps;q&&q.length>0?Gt(x.__webglFramebuffer[0],D,0):Gt(x.__webglFramebuffer,D,0)}else if(H){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=s.createRenderbuffer(),qe(x.__webglDepthbuffer[q],D,!1);else{const Y=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,re)}}else{const q=D.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),qe(x.__webglDepthbuffer,D,!1);else{const Y=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,re)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function tt(D,x,H){const q=n.get(D);x!==void 0&&xe(q.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Ke(D)}function mt(D){const x=D.texture,H=n.get(D),q=n.get(x);D.addEventListener("dispose",_);const Y=D.textures,re=D.isWebGLCubeRenderTarget===!0,oe=Y.length>1;if(oe||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=x.version,a.memory.textures++),re){H.__webglFramebuffer=[];for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[$]=[];for(let ee=0;ee<x.mipmaps.length;ee++)H.__webglFramebuffer[$][ee]=s.createFramebuffer()}else H.__webglFramebuffer[$]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let $=0;$<x.mipmaps.length;$++)H.__webglFramebuffer[$]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(oe)for(let $=0,ee=Y.length;$<ee;$++){const ce=n.get(Y[$]);ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture(),a.memory.textures++)}if(D.samples>0&&Ft(D)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let $=0;$<Y.length;$++){const ee=Y[$];H.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[$]);const ce=r.convert(ee.format,ee.colorSpace),Re=r.convert(ee.type),ue=b(ee.internalFormat,ce,Re,ee.normalized,ee.colorSpace,D.isXRRenderTarget===!0),le=Rt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,le,ue,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,H.__webglColorRenderbuffer[$])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),qe(H.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(re){t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),We(s.TEXTURE_CUBE_MAP,x);for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0)for(let ee=0;ee<x.mipmaps.length;ee++)xe(H.__webglFramebuffer[$][ee],D,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ee);else xe(H.__webglFramebuffer[$],D,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(x)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let $=0,ee=Y.length;$<ee;$++){const ce=Y[$],Re=n.get(ce);let ue=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ue=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,Re.__webglTexture),We(ue,ce),xe(H.__webglFramebuffer,D,ce,s.COLOR_ATTACHMENT0+$,ue,0),p(ce)&&y(ue)}t.unbindTexture()}else{let $=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&($=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture($,q.__webglTexture),We($,x),x.mipmaps&&x.mipmaps.length>0)for(let ee=0;ee<x.mipmaps.length;ee++)xe(H.__webglFramebuffer[ee],D,x,s.COLOR_ATTACHMENT0,$,ee);else xe(H.__webglFramebuffer,D,x,s.COLOR_ATTACHMENT0,$,0);p(x)&&y($),t.unbindTexture()}D.depthBuffer&&Ke(D)}function Je(D){const x=D.textures;for(let H=0,q=x.length;H<q;H++){const Y=x[H];if(p(Y)){const re=A(D),oe=n.get(Y).__webglTexture;t.bindTexture(re,oe),y(re),t.unbindTexture()}}}const Mt=[],Jt=[];function Mn(D){if(D.samples>0){if(Ft(D)===!1){const x=D.textures,H=D.width,q=D.height;let Y=s.COLOR_BUFFER_BIT;const re=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=n.get(D),$=x.length>1;if($)for(let ce=0;ce<x.length;ce++)t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const ee=D.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ce=0;ce<x.length;ce++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Y|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Y|=s.STENCIL_BUFFER_BIT)),$){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,oe.__webglColorRenderbuffer[ce]);const Re=n.get(x[ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Re,0)}s.blitFramebuffer(0,0,H,q,0,0,H,q,Y,s.NEAREST),c===!0&&(Mt.length=0,Jt.length=0,Mt.push(s.COLOR_ATTACHMENT0+ce),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(Mt.push(re),Jt.push(re),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Jt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),$)for(let ce=0;ce<x.length;ce++){t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,oe.__webglColorRenderbuffer[ce]);const Re=n.get(x[ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,Re,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&c){const x=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function Rt(D){return Math.min(i.maxSamples,D.samples)}function Ft(D){const x=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function O(D){const x=a.render.frame;h.get(D)!==x&&(h.set(D,x),D.update())}function an(D,x){const H=D.colorSpace,q=D.format,Y=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||H!==Cn&&H!==ji&&(Xe.getTransfer(H)===ot?(q!==Fn||Y!==In)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",H)),x}function lt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=S,this.resetTextureUnits=B,this.getTextureUnits=L,this.setTextureUnits=G,this.setTexture2D=J,this.setTexture2DArray=z,this.setTexture3D=j,this.setTextureCube=Z,this.rebindTextures=tt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Mn,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Q0(s,e){function t(n,i=ji){let r;const a=Xe.getTransfer(i);if(n===In)return s.UNSIGNED_BYTE;if(n===Zc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Qc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Hd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Vd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===zd)return s.BYTE;if(n===Gd)return s.SHORT;if(n===Tr)return s.UNSIGNED_SHORT;if(n===$c)return s.INT;if(n===gi)return s.UNSIGNED_INT;if(n===An)return s.FLOAT;if(n===sn)return s.HALF_FLOAT;if(n===Wd)return s.ALPHA;if(n===qd)return s.RGB;if(n===Fn)return s.RGBA;if(n===Li)return s.DEPTH_COMPONENT;if(n===os)return s.DEPTH_STENCIL;if(n===el)return s.RED;if(n===tl)return s.RED_INTEGER;if(n===hs)return s.RG;if(n===nl)return s.RG_INTEGER;if(n===il)return s.RGBA_INTEGER;if(n===Ea||n===Ta||n===Aa||n===Ra)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ec||n===tc||n===nc||n===ic)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sc||n===rc||n===ac||n===oc||n===cc||n===Na||n===lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sc||n===rc)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ac)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===oc)return r.COMPRESSED_R11_EAC;if(n===cc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Na)return r.COMPRESSED_RG11_EAC;if(n===lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===hc||n===dc||n===uc||n===fc||n===pc||n===mc||n===gc||n===bc||n===_c||n===xc||n===vc||n===yc||n===Mc||n===Sc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_c)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wc||n===Ec||n===Tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===wc)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ac||n===Rc||n===Fa||n===Cc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ac)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ar?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const ex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new su(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new hn({vertexShader:ex,fragmentShader:tx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new $a(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ix extends Ni{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,m=null;const v=typeof XRWebGLBinding<"u",g=new nx,p={},y=t.getContextAttributes();let A=null,b=null;const M=[],w=[],R=new we;let _=null,T=null;const P=new vn;P.viewport=new ft;const I=new vn;I.viewport=new ft;const N=[P,I],B=new Jp;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let te=M[K];return te===void 0&&(te=new uo,M[K]=te),te.getTargetRaySpace()},this.getControllerGrip=function(K){let te=M[K];return te===void 0&&(te=new uo,M[K]=te),te.getGripSpace()},this.getHand=function(K){let te=M[K];return te===void 0&&(te=new uo,M[K]=te),te.getHandSpace()};function S(K){const te=w.indexOf(K.inputSource);if(te===-1)return;const ye=M[te];ye!==void 0&&(ye.update(K.inputSource,K.frame,l||a),ye.dispatchEvent({type:K.type,data:K.inputSource}))}function U(){i.removeEventListener("select",S),i.removeEventListener("selectstart",S),i.removeEventListener("selectend",S),i.removeEventListener("squeeze",S),i.removeEventListener("squeezestart",S),i.removeEventListener("squeezeend",S),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",J);for(let K=0;K<M.length;K++){const te=w[K];te!==null&&(w[K]=null,M[K].disconnect(te))}L=null,G=null,g.reset();for(const K in p)delete p[K];if(e.setRenderTarget(A),f=null,u=null,d=null,i=null,b=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),T!==null){const K=T.camera;K.fov=T.fov,K.zoom=T.zoom,K.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(A=e.getRenderTarget(),i.addEventListener("select",S),i.addEventListener("selectstart",S),i.addEventListener("selectend",S),i.addEventListener("squeeze",S),i.addEventListener("squeezestart",S),i.addEventListener("squeezeend",S),i.addEventListener("end",U),i.addEventListener("inputsourceschange",J),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ue=null,xe=null;y.depth&&(xe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=y.stencil?os:Li,Ue=y.stencil?Ar:gi);const qe={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(qe),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new yn(u.textureWidth,u.textureHeight,{format:Fn,type:In,depthTexture:new Lr(u.textureWidth,u.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ye={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ye),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new yn(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ze.setContext(i),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(K){for(let te=0;te<K.removed.length;te++){const ye=K.removed[te],Ue=w.indexOf(ye);Ue>=0&&(w[Ue]=null,M[Ue].disconnect(ye))}for(let te=0;te<K.added.length;te++){const ye=K.added[te];let Ue=w.indexOf(ye);if(Ue===-1){for(let qe=0;qe<M.length;qe++)if(qe>=w.length){w.push(ye),Ue=qe;break}else if(w[qe]===null){w[qe]=ye,Ue=qe;break}if(Ue===-1)break}const xe=M[Ue];xe&&xe.connect(ye)}}const z=new C,j=new C;function Z(K,te,ye){z.setFromMatrixPosition(te.matrixWorld),j.setFromMatrixPosition(ye.matrixWorld);const Ue=z.distanceTo(j),xe=te.projectionMatrix.elements,qe=ye.projectionMatrix.elements,Gt=xe[14]/(xe[10]-1),Ke=xe[14]/(xe[10]+1),tt=(xe[9]+1)/xe[5],mt=(xe[9]-1)/xe[5],Je=(xe[8]-1)/xe[0],Mt=(qe[8]+1)/qe[0],Jt=Gt*Je,Mn=Gt*Mt,Rt=Ue/(-Je+Mt),Ft=Rt*-Je;if(te.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ft),K.translateZ(Rt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),xe[10]===-1)K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const O=Gt+Rt,an=Ke+Rt,lt=Jt-Ft,D=Mn+(Ue-Ft),x=tt*Ke/an*O,H=mt*Ke/an*O;K.projectionMatrix.makePerspective(lt,D,x,H,O,an),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function se(K,te){te===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(te.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let te=K.near,ye=K.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),B.near=I.near=P.near=te,B.far=I.far=P.far=ye,(L!==B.near||G!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,G=B.far),B.layers.mask=K.layers.mask|6,P.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;const Ue=K.parent,xe=B.cameras;se(B,Ue);for(let qe=0;qe<xe.length;qe++)se(xe[qe],Ue);xe.length===2?Z(B,P,I):B.projectionMatrix.copy(P.projectionMatrix),T===null&&K.isPerspectiveCamera&&(T={camera:K,fov:K.fov,zoom:K.zoom}),ae(K,B,Ue)};function ae(K,te,ye){ye===null?K.matrix.copy(te.matrixWorld):(K.matrix.copy(ye.matrixWorld),K.matrix.invert(),K.matrix.multiply(te.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Xs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(K){return p[K]};let it=null;function We(K,te){if(h=te.getViewerPose(l||a),m=te,h!==null){const ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Ue=!1;ye.length!==B.cameras.length&&(B.cameras.length=0,Ue=!0);for(let Ke=0;Ke<ye.length;Ke++){const tt=ye[Ke];let mt=null;if(f!==null)mt=f.getViewport(tt);else{const Mt=d.getViewSubImage(u,tt);mt=Mt.viewport,Ke===0&&(e.setRenderTargetTextures(b,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(b))}let Je=N[Ke];Je===void 0&&(Je=new vn,Je.layers.enable(Ke),Je.viewport=new ft,N[Ke]=Je),Je.matrix.fromArray(tt.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(tt.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(mt.x,mt.y,mt.width,mt.height),Ke===0&&(B.matrix.copy(Je.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ue===!0&&B.cameras.push(Je)}const xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const Ke=d.getDepthInformation(ye[0]);Ke&&Ke.isValid&&Ke.texture&&g.init(Ke,i.renderState)}if(xe&&xe.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let Ke=0;Ke<ye.length;Ke++){const tt=ye[Ke].camera;if(tt){let mt=p[tt];mt||(mt=new su,p[tt]=mt);const Je=d.getCameraImage(tt);mt.sourceTexture=Je}}}}for(let ye=0;ye<M.length;ye++){const Ue=w[ye],xe=M[ye];Ue!==null&&xe!==void 0&&xe.update(Ue,te,l||a)}it&&it(K,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),m=null}const Ze=new gu;Ze.setAnimationLoop(We),this.setAnimationLoop=function(K){it=K},this.dispose=function(){}}}const sx=new Ie,Su=new ke;Su.set(-1,0,0,0,1,0,0,0,1);function rx(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ru(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,y,A,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,b)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,y,A):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Rn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Rn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=e.get(p),A=y.envMap,b=y.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(sx.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Su),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,A){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=A*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ax(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,M){const w=M.program;n.uniformBlockBinding(b,w)}function l(b,M){let w=i[b.id];w===void 0&&(g(b),w=h(b),i[b.id]=w,b.addEventListener("dispose",y));const R=M.program;n.updateUBOMapping(b,R);const _=e.render.frame;r[b.id]!==_&&(u(b),r[b.id]=_)}function h(b){const M=d();b.__bindingPointIndex=M;const w=s.createBuffer(),R=b.__size,_=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,R,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,w),w}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const M=i[b.id],w=b.uniforms,R=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let _=0,T=w.length;_<T;_++){const P=w[_];if(Array.isArray(P))for(let I=0,N=P.length;I<N;I++)f(P[I],_,I,R);else f(P,_,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,M,w,R){if(v(b,M,w,R)===!0){const _=b.__offset,T=b.value;if(Array.isArray(T)){let P=0;for(let I=0;I<T.length;I++){const N=T[I],B=p(N);m(N,b.__data,P),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,b.__data)}}function m(b,M,w){typeof b=="number"||typeof b=="boolean"?M[0]=b:b.isMatrix3?(M[0]=b.elements[0],M[1]=b.elements[1],M[2]=b.elements[2],M[3]=0,M[4]=b.elements[3],M[5]=b.elements[4],M[6]=b.elements[5],M[7]=0,M[8]=b.elements[6],M[9]=b.elements[7],M[10]=b.elements[8],M[11]=0):ArrayBuffer.isView(b)?M.set(new b.constructor(b.buffer,b.byteOffset,M.length)):b.toArray(M,w)}function v(b,M,w,R){const _=b.value,T=M+"_"+w;if(R[T]===void 0)return typeof _=="number"||typeof _=="boolean"?R[T]=_:ArrayBuffer.isView(_)?R[T]=_.slice():R[T]=_.clone(),!0;{const P=R[T];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return R[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function g(b){const M=b.uniforms;let w=0;const R=16;for(let T=0,P=M.length;T<P;T++){const I=Array.isArray(M[T])?M[T]:[M[T]];for(let N=0,B=I.length;N<B;N++){const L=I[N],G=Array.isArray(L.value)?L.value:[L.value];for(let S=0,U=G.length;S<U;S++){const J=G[S],z=p(J),j=w%R,Z=j%z.boundary,se=j+Z;w+=Z,se!==0&&R-se<z.storage&&(w+=R-se),L.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=z.storage}}}const _=w%R;return _>0&&(w+=R-_),b.__size=w,b.__cache={},this}function p(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(M.boundary=16,M.storage=b.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",b),M}function y(b){const M=b.target;M.removeEventListener("dispose",y);const w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function A(){for(const b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:c,update:l,dispose:A}}const ox=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ii=null;function cx(){return ii===null&&(ii=new js(ox,16,16,hs,sn),ii.name="DFG_LUT",ii.minFilter=vt,ii.magFilter=vt,ii.wrapS=Vn,ii.wrapT=Vn,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}class lx{constructor(e={}){const{canvas:t=Ef(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=In}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=f,g=new Set([il,nl,tl]),p=new Set([In,gi,Tr,Ar,Zc,Qc]),y=new Uint32Array(4),A=new Int32Array(4),b=new C;let M=null,w=null;const R=[],_=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let I=!1,N=null,B=null,L=null,G=null;this._outputColorSpace=qt;let S=0,U=0,J=null,z=-1,j=null;const Z=new ft,se=new ft;let ae=null;const it=new De(0);let We=0,Ze=t.width,K=t.height,te=1,ye=null,Ue=null;const xe=new ft(0,0,Ze,K),qe=new ft(0,0,Ze,K);let Gt=!1;const Ke=new ul;let tt=!1,mt=!1;const Je=new Ie,Mt=new C,Jt=new ft,Mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function Ft(){return J===null?te:1}let O=n;function an(E,F){return t.getContext(E,F)}let lt,D,x,H,q,Y,re,oe,$,ee,ce,Re,ue,le,Ce,Ne,Oe,k,he,Q,de,ge,ne;try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qc}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",qn,!1),O===null){const F="webgl2";if(O=an(F,E),O===null)throw an(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(E){throw t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",qn,!1),Fe("WebGLRenderer: "+E.message),E}function Pe(){lt=new c_(O),lt.init(),de=new Q0(O,lt),D=new Zb(O,lt,e,de),x=new $0(O,lt),D.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),B=O.createFramebuffer(),L=O.createFramebuffer(),G=O.createFramebuffer(),H=new d_(O),q=new U0,Y=new Z0(O,lt,x,q,D,de,H),re=new o_(P),oe=new fm(O),ge=new Jb(O,oe),$=new l_(O,oe,H,ge),ee=new f_(O,$,oe,ge,H),k=new u_(O,D,Y),Ce=new Qb(q),ce=new k0(P,re,lt,D,ge,Ce),Re=new rx(P,q),ue=new B0,le=new q0(lt),Oe=new Yb(P,re,x,ee,m,c),Ne=new J0(P,ee,D),ne=new ax(O,H,D,x),he=new $b(O,lt,H),Q=new h_(O,lt,H),H.programs=ce.programs,P.capabilities=D,P.extensions=lt,P.properties=q,P.renderLists=ue,P.shadowMap=Ne,P.state=x,P.info=H}v!==In&&(T=new m_(v,t.width,t.height,o,i,r));const Ee=new ix(P,O);this.xr=Ee,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=lt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=lt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(E){E!==void 0&&(te=E,this.setSize(Ze,K,!1))},this.getSize=function(E){return E.set(Ze,K)},this.setSize=function(E,F,X=!0){if(Ee.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}Ze=E,K=F,t.width=Math.floor(E*te),t.height=Math.floor(F*te),X===!0&&(t.style.width=E+"px",t.style.height=F+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Ze*te,K*te).floor()},this.setDrawingBufferSize=function(E,F,X){Ze=E,K=F,te=X,t.width=Math.floor(E*X),t.height=Math.floor(F*X),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(v===In){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){Ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Z)},this.getViewport=function(E){return E.copy(xe)},this.setViewport=function(E,F,X,V){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,F,X,V),x.viewport(Z.copy(xe).multiplyScalar(te).round())},this.getScissor=function(E){return E.copy(qe)},this.setScissor=function(E,F,X,V){E.isVector4?qe.set(E.x,E.y,E.z,E.w):qe.set(E,F,X,V),x.scissor(se.copy(qe).multiplyScalar(te).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(E){x.setScissorTest(Gt=E)},this.setOpaqueSort=function(E){ye=E},this.setTransparentSort=function(E){Ue=E},this.getClearColor=function(E){return E.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,X=!0){let V=0;if(E){let W=!1;if(J!==null){const me=J.texture.format;W=g.has(me)}if(W){const me=J.texture.type,ve=p.has(me),pe=Oe.getClearColor(),Me=Oe.getClearAlpha(),Te=pe.r,ze=pe.g,Ye=pe.b;ve?(y[0]=Te,y[1]=ze,y[2]=Ye,y[3]=Me,O.clearBufferuiv(O.COLOR,0,y)):(A[0]=Te,A[1]=ze,A[2]=Ye,A[3]=Me,O.clearBufferiv(O.COLOR,0,A))}else V|=O.COLOR_BUFFER_BIT}F&&(V|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),N=E},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",qn,!1),Oe.dispose(),ue.dispose(),le.dispose(),q.dispose(),re.dispose(),ee.dispose(),ge.dispose(),ne.dispose(),ce.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Ll),Ee.removeEventListener("sessionend",Il),Yi.stop()};function gt(E){E.preventDefault(),Ba("WebGLRenderer: Context Lost."),I=!0}function st(){Ba("WebGLRenderer: Context Restored."),I=!1;const E=H.autoReset,F=Ne.enabled,X=Ne.autoUpdate,V=Ne.needsUpdate,W=Ne.type;Pe(),H.autoReset=E,Ne.enabled=F,Ne.autoUpdate=X,Ne.needsUpdate=V,Ne.type=W}function qn(E){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ei(E){const F=E.target;F.removeEventListener("dispose",ei),Du(F)}function Du(E){Lu(E),q.remove(E)}function Lu(E){const F=q.get(E).programs;F!==void 0&&(F.forEach(function(X){ce.releaseProgram(X)}),E.isShaderMaterial&&ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,X,V,W,me){F===null&&(F=Mn);const ve=W.isMesh&&W.matrixWorld.determinantAffine()<0,pe=Fu(E,F,X,V,W);x.setMaterial(V,ve);let Me=X.index,Te=1;if(V.wireframe===!0){if(Me=$.getWireframeAttribute(X),Me===void 0)return;Te=2}const ze=X.drawRange,Ye=X.attributes.position;let Se=ze.start*Te,rt=(ze.start+ze.count)*Te;me!==null&&(Se=Math.max(Se,me.start*Te),rt=Math.min(rt,(me.start+me.count)*Te)),Me!==null?(Se=Math.max(Se,0),rt=Math.min(rt,Me.count)):Ye!=null&&(Se=Math.max(Se,0),rt=Math.min(rt,Ye.count));const kt=rt-Se;if(kt<0||kt===1/0)return;ge.setup(W,V,pe,X,Me);let _t,pt=he;if(Me!==null&&(_t=oe.get(Me),pt=Q,pt.setIndex(_t)),W.isMesh)V.wireframe===!0?(x.setLineWidth(V.wireframeLinewidth*Ft()),pt.setMode(O.LINES)):pt.setMode(O.TRIANGLES);else if(W.isLine){let on=V.linewidth;on===void 0&&(on=1),x.setLineWidth(on*Ft()),W.isLineSegments?pt.setMode(O.LINES):W.isLineLoop?pt.setMode(O.LINE_LOOP):pt.setMode(O.LINE_STRIP)}else W.isPoints?pt.setMode(O.POINTS):W.isSprite&&pt.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))pt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const on=W._multiDrawStarts,_e=W._multiDrawCounts,dn=W._multiDrawCount,et=Me?oe.get(Me).bytesPerElement:1,Un=q.get(V).currentProgram.getUniforms();for(let ti=0;ti<dn;ti++)Un.setValue(O,"_gl_DrawID",ti),pt.render(on[ti]/et,_e[ti])}else if(W.isInstancedMesh)pt.renderInstances(Se,kt,W.count);else if(X.isInstancedBufferGeometry){const on=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,_e=Math.min(X.instanceCount,on);pt.renderInstances(Se,kt,_e)}else pt.render(Se,kt)};function Dl(E,F,X,V){N!==null&&E.isNodeMaterial&&N.setObject(V,E),tt===!0&&Ce.setState(E,X,!1),E.transparent===!0&&E.side===Yn&&E.forceSinglePass===!1?(E.side=Rn,E.needsUpdate=!0,Hr(E,F,V),E.side=Di,E.needsUpdate=!0,Hr(E,F,V),E.side=Yn):Hr(E,F,V)}this.compile=function(E,F,X=null){X===null&&(X=E),N!==null&&N.renderStart(E,F,X),w=le.get(X),w.init(F),_.push(w),X.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),E!==X&&E.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights(),N!==null&&N.updateLights(w.state.lightsArray),mt=this.localClippingEnabled,tt=Ce.init(this.clippingPlanes,mt),tt===!0&&Ce.setGlobalState(this.clippingPlanes,F),N!==null&&Ne.render(w.state.shadowsArray,X,F);const V=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const me=W.material;if(me)if(Array.isArray(me))for(let ve=0;ve<me.length;ve++){const pe=me[ve];Dl(pe,X,F,W),V.add(pe)}else Dl(me,X,F,W),V.add(me)}),w=_.pop(),N!==null&&N.renderEnd(),V},this.compileAsync=function(E,F,X=null){const V=this.compile(E,F,X);return new Promise(W=>{function me(){if(V.forEach(function(ve){const Me=q.get(ve).currentProgram;(Me===void 0||Me.isReady())&&V.delete(ve)}),V.size===0){W(E);return}setTimeout(me,10)}lt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let to=null;function Iu(E){to&&to(E)}function Ll(){Yi.stop()}function Il(){Yi.start()}const Yi=new gu;Yi.setAnimationLoop(Iu),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(E){to=E,Ee.setAnimationLoop(E),E===null?Yi.stop():Yi.start()},Ee.addEventListener("sessionstart",Ll),Ee.addEventListener("sessionend",Il),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(E,F);const X=Ee.enabled===!0&&Ee.isPresenting===!0,V=T!==null&&(J===null||X)&&T.begin(P,J);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(F),F=Ee.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,F,J),w=le.get(E,_.length),w.init(F),w.state.textureUnits=Y.getTextureUnits(),_.push(w),Je.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ke.setFromProjectionMatrix(Je,ui,F.reversedDepth),mt=this.localClippingEnabled,tt=Ce.init(this.clippingPlanes,mt),M=ue.get(E,R.length),M.init(),R.push(M),Ee.enabled===!0&&Ee.isPresenting===!0){const ve=P.xr.getDepthSensingMesh();ve!==null&&no(ve,F,-1/0,P.sortObjects)}no(E,F,0,P.sortObjects),M.finish(),N!==null&&N.updateLights(w.state.lightsArray),P.sortObjects===!0&&M.sort(ye,Ue),Rt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,Rt&&Oe.addToRenderList(M,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),tt===!0&&Ce.beginShadows();const W=w.state.shadowsArray;if(Ne.render(W,E,F),tt===!0&&Ce.endShadows(),(V&&T.hasRenderPass())===!1){const ve=M.opaque,pe=M.transmissive;if(w.setupLights(),F.isArrayCamera){const Me=F.cameras;if(pe.length>0)for(let Te=0,ze=Me.length;Te<ze;Te++){const Ye=Me[Te];Fl(ve,pe,E,Ye)}Rt&&Oe.render(E);for(let Te=0,ze=Me.length;Te<ze;Te++){const Ye=Me[Te];Nl(M,E,Ye,Ye.viewport)}}else pe.length>0&&Fl(ve,pe,E,F),Rt&&Oe.render(E),Nl(M,E,F)}J!==null&&U===0&&(Y.updateMultisampleRenderTarget(J),Y.updateRenderTargetMipmap(J)),V&&T.end(P),E.isScene===!0&&E.onAfterRender(P,E,F),ge.resetDefaultState(),z=-1,j=null,_.pop(),_.length>0?(w=_[_.length-1],Y.setTextureUnits(w.state.textureUnits),tt===!0&&Ce.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?M=R[R.length-1]:M=null,N!==null&&N.renderEnd()};function no(E,F,X,V){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Ke)){V&&Jt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Je);const ve=ee.update(E),pe=E.material;pe.visible&&M.push(E,ve,pe,X,Jt.z,null,F)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Ke))){const ve=ee.update(E),pe=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Jt.copy(E.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Jt.copy(ve.boundingSphere.center)),Jt.applyMatrix4(E.matrixWorld).applyMatrix4(Je)),Array.isArray(pe)){const Me=ve.groups;for(let Te=0,ze=Me.length;Te<ze;Te++){const Ye=Me[Te],Se=pe[Ye.materialIndex];Se&&Se.visible&&M.push(E,ve,Se,X,Jt.z,Ye,F)}}else pe.visible&&M.push(E,ve,pe,X,Jt.z,null,F)}}const me=E.children;for(let ve=0,pe=me.length;ve<pe;ve++)no(me[ve],F,X,V)}function Nl(E,F,X,V){const{opaque:W,transmissive:me,transparent:ve}=E;w.setupLightsView(X),tt===!0&&Ce.setGlobalState(P.clippingPlanes,X),V&&x.viewport(Z.copy(V)),W.length>0&&Gr(W,F,X),me.length>0&&Gr(me,F,X),ve.length>0&&Gr(ve,F,X),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Fl(E,F,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){const Se=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new yn(1,1,{generateMipmaps:!0,type:Se?sn:In,minFilter:di,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const me=w.state.transmissionRenderTarget[V.id],ve=V.viewport||Z;me.setSize(ve.z*P.transmissionResolutionScale,ve.w*P.transmissionResolutionScale);const pe=P.getRenderTarget(),Me=P.getActiveCubeFace(),Te=P.getActiveMipmapLevel();P.setRenderTarget(me),P.getClearColor(it),We=P.getClearAlpha(),We<1&&P.setClearColor(16777215,.5),P.clear(),Rt&&Oe.render(X);const ze=P.toneMapping;P.toneMapping=pi;const Ye=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),tt===!0&&Ce.setGlobalState(P.clippingPlanes,V),Gr(E,X,V),Y.updateMultisampleRenderTarget(me),Y.updateRenderTargetMipmap(me),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let rt=0,kt=F.length;rt<kt;rt++){const _t=F[rt],{object:pt,geometry:on,material:_e,group:dn}=_t;if(_e.side===Yn&&pt.layers.test(V.layers)){const et=_e.side;_e.side=Rn,_e.needsUpdate=!0,kl(pt,X,V,on,_e,dn),_e.side=et,_e.needsUpdate=!0,Se=!0}}Se===!0&&(Y.updateMultisampleRenderTarget(me),Y.updateRenderTargetMipmap(me))}P.setRenderTarget(pe,Me,Te),P.setClearColor(it,We),Ye!==void 0&&(V.viewport=Ye),P.toneMapping=ze}function Gr(E,F,X){const V=F.isScene===!0?F.overrideMaterial:null;for(let W=0,me=E.length;W<me;W++){const ve=E[W],{object:pe,geometry:Me,group:Te}=ve;let ze=ve.material;ze.allowOverride===!0&&V!==null&&(ze=V),pe.layers.test(X.layers)&&kl(pe,F,X,Me,ze,Te)}}function kl(E,F,X,V,W,me){N!==null&&W.isNodeMaterial&&N.setObject(E,W),E.onBeforeRender(P,F,X,V,W,me),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(P,F,X,V,E,me),W.transparent===!0&&W.side===Yn&&W.forceSinglePass===!1?(W.side=Rn,W.needsUpdate=!0,P.renderBufferDirect(X,F,V,W,E,me),W.side=Di,W.needsUpdate=!0,P.renderBufferDirect(X,F,V,W,E,me),W.side=Yn):P.renderBufferDirect(X,F,V,W,E,me),E.onAfterRender(P,F,X,V,W,me)}function Hr(E,F,X){F.isScene!==!0&&(F=Mn);const V=q.get(E),W=w.state.lights,me=w.state.shadowsArray,ve=W.state.version,pe=ce.getParameters(E,W.state,me,F,X,w.state.lightProbeGridArray),Me=ce.getProgramCacheKey(pe);let Te=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;const ze=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=re.get(E.envMap||V.environment,ze),V.envMapRotation=V.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Te===void 0&&(E.addEventListener("dispose",ei),Te=new Map,V.programs=Te);let Ye=Te.get(Me);if(Ye!==void 0){if(V.currentProgram===Ye&&V.lightsStateVersion===ve)return Ol(E,pe),Ye}else pe.uniforms=ce.getUniforms(E),N!==null&&E.isNodeMaterial&&N.build(E,X,pe),E.onBeforeCompile(pe,P),Ye=ce.acquireProgram(pe,Me),Te.set(Me,Ye),V.uniforms=pe.uniforms;const Se=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Se.clippingPlanes=Ce.uniform),Ol(E,pe),V.needsLights=Uu(E),V.lightsStateVersion=ve,V.needsLights&&(Se.ambientLightColor.value=W.state.ambient,Se.lightProbe.value=W.state.probe,Se.sunLights.value=W.state.sun,Se.sunLightShadows.value=W.state.sunShadow,Se.directionalLights.value=W.state.directional,Se.directionalLightShadows.value=W.state.directionalShadow,Se.spotLights.value=W.state.spot,Se.spotLightShadows.value=W.state.spotShadow,Se.rectAreaLights.value=W.state.rectArea,Se.ltc_1.value=W.state.rectAreaLTC1,Se.ltc_2.value=W.state.rectAreaLTC2,Se.pointLights.value=W.state.point,Se.pointLightShadows.value=W.state.pointShadow,Se.hemisphereLights.value=W.state.hemi,Se.sunShadowMatrix.value=W.state.sunShadowMatrix,Se.sunShadowCascade.value=W.state.sunShadowCascade,Se.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Se.spotLightMatrix.value=W.state.spotLightMatrix,Se.spotLightMap.value=W.state.spotLightMap,Se.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=w.state.lightProbeGridArray.length>0,V.currentProgram=Ye,V.uniformsList=null,Ye}function Ul(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Pa.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Ol(E,F){const X=q.get(E);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Nu(E,F){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;b.setFromMatrixPosition(F.matrixWorld);for(let X=0,V=E.length;X<V;X++){const W=E[X];if(W.texture!==null&&W.boundingBox.containsPoint(b))return W}return null}function Fu(E,F,X,V,W){F.isScene!==!0&&(F=Mn),Y.resetTextureUnits();const me=F.fog,ve=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,pe=J===null?P.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Xe.workingColorSpace,Me=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Te=re.get(V.envMap||ve,Me),ze=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ye=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Se=!!X.morphAttributes.position,rt=!!X.morphAttributes.normal,kt=!!X.morphAttributes.color;let _t=pi;V.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(_t=P.toneMapping);const pt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,on=pt!==void 0?pt.length:0,_e=q.get(V),dn=w.state.lights;if(tt===!0&&(mt===!0||E!==j)){const bt=E===j&&V.id===z;Ce.setState(V,E,bt)}let et=!1;V.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==dn.state.version||_e.outputColorSpace!==pe||W.isBatchedMesh&&_e.batching===!1||!W.isBatchedMesh&&_e.batching===!0||W.isBatchedMesh&&_e.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&_e.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&_e.instancing===!1||!W.isInstancedMesh&&_e.instancing===!0||W.isSkinnedMesh&&_e.skinning===!1||!W.isSkinnedMesh&&_e.skinning===!0||W.isInstancedMesh&&_e.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&_e.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&_e.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&_e.instancingMorph===!1&&W.morphTexture!==null||_e.envMap!==Te||V.fog===!0&&_e.fog!==me||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Ce.numPlanes||_e.numIntersection!==Ce.numIntersection)||_e.vertexAlphas!==ze||_e.vertexTangents!==Ye||_e.morphTargets!==Se||_e.morphNormals!==rt||_e.morphColors!==kt||_e.toneMapping!==_t||_e.morphTargetsCount!==on||!!_e.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,_e.__version=V.version);let Un=_e.currentProgram;et===!0&&(Un=Hr(V,F,W),N&&V.isNodeMaterial&&N.onUpdateProgram(V,Un,_e));let ti=!1,ki=!1,us=!1;const ut=Un.getUniforms(),Pt=_e.uniforms;if(x.useProgram(Un.program)&&(ti=!0,ki=!0,us=!0),V.id!==z&&(z=V.id,ki=!0),_e.needsLights){const bt=Nu(w.state.lightProbeGridArray,W);_e.lightProbeGrid!==bt&&(_e.lightProbeGrid=bt,ki=!0)}if(ti||j!==E){x.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ut.setValue(O,"projectionMatrix",E.projectionMatrix),ut.setValue(O,"viewMatrix",E.matrixWorldInverse);const Oi=ut.map.cameraPosition;Oi!==void 0&&Oi.setValue(O,Mt.setFromMatrixPosition(E.matrixWorld)),D.logarithmicDepthBuffer&&ut.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ut.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),j!==E&&(j=E,ki=!0,us=!0)}if(_e.needsLights&&(dn.state.sunShadowMap.length>0&&ut.setValue(O,"sunShadowMap",dn.state.sunShadowMap,Y),dn.state.directionalShadowMap.length>0&&ut.setValue(O,"directionalShadowMap",dn.state.directionalShadowMap,Y),dn.state.spotShadowMap.length>0&&ut.setValue(O,"spotShadowMap",dn.state.spotShadowMap,Y),dn.state.pointShadowMap.length>0&&ut.setValue(O,"pointShadowMap",dn.state.pointShadowMap,Y)),W.isSkinnedMesh){ut.setOptional(O,W,"bindMatrix"),ut.setOptional(O,W,"bindMatrixInverse");const bt=W.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),ut.setValue(O,"boneTexture",bt.boneTexture,Y))}W.isBatchedMesh&&(ut.setOptional(O,W,"batchingTexture"),ut.setValue(O,"batchingTexture",W._matricesTexture,Y),ut.setOptional(O,W,"batchingIdTexture"),ut.setValue(O,"batchingIdTexture",W._indirectTexture,Y),ut.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&ut.setValue(O,"batchingColorTexture",W._colorsTexture,Y));const Ui=X.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&k.update(W,X,Un),(ki||_e.receiveShadow!==W.receiveShadow)&&(_e.receiveShadow=W.receiveShadow,ut.setValue(O,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(Pt.envMapIntensity.value=F.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=cx()),ki){if(ut.setValue(O,"toneMappingExposure",P.toneMappingExposure),_e.needsLights&&ku(Pt,us),me&&V.fog===!0&&Re.refreshFogUniforms(Pt,me),Re.refreshMaterialUniforms(Pt,V,te,K,w.state.transmissionRenderTarget[E.id]),_e.needsLights&&_e.lightProbeGrid){const bt=_e.lightProbeGrid;Pt.probesSH.value=bt.texture,Pt.probesMin.value.copy(bt.boundingBox.min),Pt.probesMax.value.copy(bt.boundingBox.max),Pt.probesResolution.value.copy(bt.resolution)}Pa.upload(O,Ul(_e),Pt,Y)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Pa.upload(O,Ul(_e),Pt,Y),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ut.setValue(O,"center",W.center),ut.setValue(O,"modelViewMatrix",W.modelViewMatrix),ut.setValue(O,"normalMatrix",W.normalMatrix),ut.setValue(O,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){const bt=V.uniformsGroups;for(let Oi=0,fs=bt.length;Oi<fs;Oi++){const zl=bt[Oi];ne.update(zl,Un),ne.bind(zl,Un)}}return Un}function ku(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Uu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(E,F,X){const V=q.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),q.get(E.texture).__webglTexture=F,q.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const X=q.get(E);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,X=0){J=E,S=F,U=X;let V=null,W=!1,me=!1;if(E){const pe=q.get(E);if(pe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(O.FRAMEBUFFER,pe.__webglFramebuffer),Z.copy(E.viewport),se.copy(E.scissor),ae=E.scissorTest,x.viewport(Z),x.scissor(se),x.setScissorTest(ae),z=-1;return}else if(pe.__webglFramebuffer===void 0)Y.setupRenderTarget(E);else if(pe.__hasExternalTextures)Y.rebindTextures(E,q.get(E.texture).__webglTexture,q.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ze=E.depthTexture;if(pe.__boundDepthTexture!==ze){if(ze!==null&&q.has(ze)&&(E.width!==ze.image.width||E.height!==ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(E)}}const Me=E.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(me=!0);const Te=q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Te[F])?V=Te[F][X]:V=Te[F],W=!0):E.samples>0&&Y.useMultisampledRTT(E)===!1?V=q.get(E).__webglMultisampledFramebuffer:Array.isArray(Te)?V=Te[X]:V=Te,Z.copy(E.viewport),se.copy(E.scissor),ae=E.scissorTest}else Z.copy(xe).multiplyScalar(te).floor(),se.copy(qe).multiplyScalar(te).floor(),ae=Gt;if(X!==0&&(V=B),x.bindFramebuffer(O.FRAMEBUFFER,V)&&x.drawBuffers(E,V),x.viewport(Z),x.scissor(se),x.setScissorTest(ae),W){const pe=q.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,pe.__webglTexture,X)}else if(me){const pe=F;for(let Me=0;Me<E.textures.length;Me++){const Te=q.get(E.textures[Me]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Me,Te.__webglTexture,X,pe)}}else if(E!==null&&X!==0){const pe=q.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,pe.__webglTexture,X)}z=-1};function Bl(E){const F=q.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=D.textureFormatReadable(E.format),F.__typeReadable=D.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,X,V,W,me,ve,pe=0){if(!(E&&E.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){x.bindFramebuffer(O.FRAMEBUFFER,Me);try{const Te=E.textures[pe],ze=Te.format,Ye=Te.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pe);const Se=Bl(Te);if(Se.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-V&&X>=0&&X<=E.height-W&&O.readPixels(F,X,V,W,de.convert(ze),de.convert(Ye),me)}finally{const Te=J!==null?q.get(J).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(E,F,X,V,W,me,ve,pe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me)if(F>=0&&F<=E.width-V&&X>=0&&X<=E.height-W){x.bindFramebuffer(O.FRAMEBUFFER,Me);const Te=E.textures[pe],ze=Te.format,Ye=Te.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pe);const Se=Bl(Te);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,rt),O.bufferData(O.PIXEL_PACK_BUFFER,me.byteLength,O.STREAM_READ),O.readPixels(F,X,V,W,de.convert(ze),de.convert(Ye),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const kt=J!==null?q.get(J).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,kt);const _t=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Tf(O,_t,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,rt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,me),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(rt),O.deleteSync(_t),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,X=0){const V=Math.pow(2,-X),W=Math.floor(E.image.width*V),me=Math.floor(E.image.height*V),ve=F!==null?F.x:0,pe=F!==null?F.y:0;Y.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,ve,pe,W,me),x.unbindTexture()},this.copyTextureToTexture=function(E,F,X=null,V=null,W=0,me=0){let ve,pe,Me,Te,ze,Ye,Se,rt,kt;const _t=E.isCompressedTexture?E.mipmaps[me]:E.image;if(X!==null)ve=X.max.x-X.min.x,pe=X.max.y-X.min.y,Me=X.isBox3?X.max.z-X.min.z:1,Te=X.min.x,ze=X.min.y,Ye=X.isBox3?X.min.z:0;else{const Pt=Math.pow(2,-W);ve=Math.floor(_t.width*Pt),pe=Math.floor(_t.height*Pt),E.isDataArrayTexture?Me=_t.depth:E.isData3DTexture?Me=Math.floor(_t.depth*Pt):Me=1,Te=0,ze=0,Ye=0}V!==null?(Se=V.x,rt=V.y,kt=V.z):(Se=0,rt=0,kt=0);const pt=de.convert(F.format),on=de.convert(F.type);let _e;F.isData3DTexture?(Y.setTexture3D(F,0),_e=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Y.setTexture2DArray(F,0),_e=O.TEXTURE_2D_ARRAY):(Y.setTexture2D(F,0),_e=O.TEXTURE_2D),x.activeTexture(O.TEXTURE0),x.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);const dn=x.getParameter(O.UNPACK_ROW_LENGTH),et=x.getParameter(O.UNPACK_IMAGE_HEIGHT),Un=x.getParameter(O.UNPACK_SKIP_PIXELS),ti=x.getParameter(O.UNPACK_SKIP_ROWS),ki=x.getParameter(O.UNPACK_SKIP_IMAGES);x.pixelStorei(O.UNPACK_ROW_LENGTH,_t.width),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_t.height),x.pixelStorei(O.UNPACK_SKIP_PIXELS,Te),x.pixelStorei(O.UNPACK_SKIP_ROWS,ze),x.pixelStorei(O.UNPACK_SKIP_IMAGES,Ye);const us=E.isDataArrayTexture||E.isData3DTexture,ut=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const Pt=q.get(E),Ui=q.get(F),bt=q.get(Pt.__renderTarget),Oi=q.get(Ui.__renderTarget);x.bindFramebuffer(O.READ_FRAMEBUFFER,bt.__webglFramebuffer),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let fs=0;fs<Me;fs++)us&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(E).__webglTexture,W,Ye+fs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(F).__webglTexture,me,kt+fs)),O.blitFramebuffer(Te,ze,ve,pe,Se,rt,ve,pe,O.DEPTH_BUFFER_BIT,O.NEAREST);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||q.has(E)){const Pt=q.get(E),Ui=q.get(F);x.bindFramebuffer(O.READ_FRAMEBUFFER,L),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,G);for(let bt=0;bt<Me;bt++)us?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.__webglTexture,W,Ye+bt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Pt.__webglTexture,W),ut?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ui.__webglTexture,me,kt+bt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ui.__webglTexture,me),W!==0?O.blitFramebuffer(Te,ze,ve,pe,Se,rt,ve,pe,O.COLOR_BUFFER_BIT,O.NEAREST):ut?O.copyTexSubImage3D(_e,me,Se,rt,kt+bt,Te,ze,ve,pe):O.copyTexSubImage2D(_e,me,Se,rt,Te,ze,ve,pe);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ut?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(_e,me,Se,rt,kt,ve,pe,Me,pt,on,_t.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(_e,me,Se,rt,kt,ve,pe,Me,pt,_t.data):O.texSubImage3D(_e,me,Se,rt,kt,ve,pe,Me,pt,on,_t):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,me,Se,rt,ve,pe,pt,on,_t.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,me,Se,rt,_t.width,_t.height,pt,_t.data):O.texSubImage2D(O.TEXTURE_2D,me,Se,rt,ve,pe,pt,on,_t);x.pixelStorei(O.UNPACK_ROW_LENGTH,dn),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,et),x.pixelStorei(O.UNPACK_SKIP_PIXELS,Un),x.pixelStorei(O.UNPACK_SKIP_ROWS,ti),x.pixelStorei(O.UNPACK_SKIP_IMAGES,ki),me===0&&F.generateMipmaps&&O.generateMipmap(_e),x.unbindTexture()},this.initRenderTarget=function(E){q.get(E).__webglFramebuffer===void 0&&Y.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Y.setTextureCube(E,0):E.isData3DTexture?Y.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Y.setTexture2DArray(E,0):Y.setTexture2D(E,0),x.unbindTexture()},this.resetState=function(){S=0,U=0,J=null,x.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}const si=8,Wi=85;class nd{sources=[];lastHit=null;data;cells=new Map;constructor(e){const t=[],n=new C,i=new C,r=new C,a=new Ie,o=new Ie,c=new Set;for(const l of e)l.updateWorldMatrix(!0,!0),l.traverseVisible(h=>{if(!(h instanceof It)||c.has(h))return;c.add(h);const d=h.geometry.getAttribute("position"),u=h.geometry.index;if(!d)return;const f=h instanceof Ga?h.count:1;for(let m=0;m<f;m++){const v=t.length;o.copy(h.matrixWorld),h instanceof Ga&&(h.getMatrixAt(m,a),o.multiply(a));for(let g=0;g<(u?.count??d.count);g+=3){n.fromBufferAttribute(d,u?u.getX(g):g).applyMatrix4(o),i.fromBufferAttribute(d,u?u.getX(g+1):g+1).applyMatrix4(o),r.fromBufferAttribute(d,u?u.getX(g+2):g+2).applyMatrix4(o);const p=Math.min(n.x,i.x,r.x),y=Math.max(n.x,i.x,r.x),A=Math.min(n.z,i.z,r.z),b=Math.max(n.z,i.z,r.z);if(p>Wi||y<-Wi||A>Wi||b<-Wi||Math.min(n.y,i.y,r.y)>30||Math.max(n.y,i.y,r.y)<-10)continue;const M=t.length;t.push(...n.toArray(),...i.toArray(),...r.toArray());for(let w=Math.floor(Math.max(-Wi,p)/si);w<=Math.floor(Math.min(Wi,y)/si);w++)for(let R=Math.floor(Math.max(-Wi,A)/si);R<=Math.floor(Math.min(Wi,b)/si);R++){const _=w+","+R;let T=this.cells.get(_);T||(T=[],this.cells.set(_,T)),T.push(M)}}if(t.length>v){const g=[];let p=h;for(;p;)p.name&&g.unshift(p.name),p=p.parent;this.sources.push({start:v,end:t.length,name:g.join("/")})}}});this.data=new Float32Array(t)}ids(e,t,n,i){const r=new Set;for(let a=Math.floor(e/si);a<=Math.floor(t/si);a++)for(let o=Math.floor(n/si);o<=Math.floor(i/si);o++)for(const c of this.cells.get(a+","+o)??[])r.add(c);return r}height(e,t,n){let i=-1/0;const r=this.data;for(const a of this.cells.get(Math.floor(e/si)+","+Math.floor(t/si))??[]){const o=r[a],c=r[a+2],l=r[a+3]-o,h=r[a+5]-c,d=r[a+6]-o,u=r[a+8]-c,f=l*u-h*d;if(Math.abs(f)<1e-10)continue;const m=e-o,v=t-c,g=(m*u-v*d)/f,p=(l*v-h*m)/f;if(g<-1e-5||p<-1e-5||g+p>1.00001)continue;const y=r[a+1]+g*(r[a+4]-r[a+1])+p*(r[a+7]-r[a+1]);y<=n&&y>i&&(i=y)}return Number.isFinite(i)?i:null}intersects(e,t,n){this.lastHit=null;const i=n.clone().applyMatrix4(new Ie().compose(e,t,new C(1,1,1))),r=t.clone().invert(),a=new Nn,o=this.data;for(const c of this.ids(i.min.x,i.max.x,i.min.z,i.max.z))if(!(Math.min(o[c+1],o[c+4],o[c+7])>i.max.y||Math.max(o[c+1],o[c+4],o[c+7])<i.min.y)&&(a.a.fromArray(o,c).sub(e).applyQuaternion(r),a.b.fromArray(o,c+3).sub(e).applyQuaternion(r),a.c.fromArray(o,c+6).sub(e).applyQuaternion(r),n.intersectsTriangle(a)))return this.lastHit={triangle:c/9,source:this.sources.find(l=>c>=l.start&&c<l.end)?.name??"unknown"},!0;return!1}}class hx{constructor(e,t,n){this.wheels=n,this.ground=new nd(e),this.obstacles=new nd(t)}wheels;ground;obstacles;lastFailure=null;body=new yt(new C(-2.38,.1,-1.16),new C(2.34,1.42,1.16));tyreHeight(e,t,n,i){const r=this.ground.height(e,t,n);if(r!==null)return r;const a=Math.cos(i),o=Math.sin(i),c=[];for(const l of[-.06,.06])for(const h of[-.06,.06]){const d=this.ground.height(e+l*a+h*o,t-l*o+h*a,n);if(d===null)return null;c.push(d)}return Math.max(...c)-Math.min(...c)<=.05?c.reduce((l,h)=>l+h,0)/4:null}pose(e,t,n,i){if(this.lastFailure=null,!Number.isFinite(e+t+n+i)||Math.abs(e)>75||Math.abs(t)>75)return null;const r=new C(e,i,t),a=new Ct().setFromAxisAngle(new C(0,1,0),n);let o=[],c=0;for(let l=0;l<3;l++){const h=this.wheels.map(R=>R.clone().applyQuaternion(a).add(r)),d=h.map(R=>this.tyreHeight(R.x,R.z,i+.5,n));if(d.some(R=>R===null))return this.lastFailure={reason:"missing-ground",x:e,z:t,yaw:n,previousY:i,points:h.map(R=>R.toArray()),heights:d},null;const u=h.reduce((R,_,T)=>R.add(new C(_.x,d[T],_.z)),new C).multiplyScalar(.25);let f=0,m=0,v=0,g=0,p=0;h.forEach((R,_)=>{const T=R.x-u.x,P=R.z-u.z,I=d[_]-u.y;f+=T*T,m+=P*P,v+=T*P,g+=T*I,p+=P*I});const y=f*m-v*v;if(Math.abs(y)<1e-8)return null;const A=new C(-(g*m-p*v)/y,1,-(p*f-g*v)/y).normalize();if(c=Math.acos(A.y)*180/Math.PI,c>18)return this.lastFailure={reason:"slope",slope:c,x:e,z:t,yaw:n,heights:d},null;const b=new C(Math.cos(n),0,-Math.sin(n));b.addScaledVector(A,-b.dot(A)).normalize();const M=new C().crossVectors(b,A).normalize();if(a.setFromRotationMatrix(new Ie().makeBasis(b,A,M)),o=this.wheels.map(R=>{const _=R.clone().applyQuaternion(a).add(r),T=this.tyreHeight(_.x,_.z,i+.5,n);return T===null?1/0:_.y-T}),!o.every(Number.isFinite))return null;const w=.002-Math.min(...o);r.y+=w,o=o.map(R=>R+w)}return Math.abs(r.y-i)>.3||Math.max(...o)>.1?(this.lastFailure={reason:"step-or-wheel-gap",x:e,z:t,yaw:n,previousY:i,y:r.y,gaps:o},null):{position:r,quaternion:a,gaps:o,slope:c}}blocked(e){return this.obstacles.intersects(e.position,e.quaternion,this.body)}safeExit(e){for(const t of[0,.8,-.8])for(const n of[-1.9,1.9]){const i=new C(t,0,n).applyQuaternion(e.quaternion).add(e.position),r=this.ground.height(i.x,i.z,e.position.y+.4);if(r===null||Math.abs(r-e.position.y)>.35)continue;i.y=r;const a=new yt(new C(-.35,.05,-.35),new C(.35,1.85,.35));if(this.obstacles.intersects(i,new Ct,a))continue;let o=!0;for(let l=.2;l<=1;l+=.2){const h=new C(t,0,Math.sign(n)*(.9+(Math.abs(n)-.9)*l)).applyQuaternion(e.quaternion).add(e.position);if(h.y=r,this.obstacles.intersects(h,new Ct,a)){o=!1;break}}const c=[[-.3,-.3],[.3,-.3],[-.3,.3],[.3,.3]].every(([l,h])=>{const d=this.ground.height(i.x+l,i.z+h,r+.35);return d!==null&&Math.abs(d-r)<.2});if(o&&c)return i}return null}}class dx{constructor(e,t,n=!0){this.car=e,this.world=t,this.enabled=n;for(const d of["Wheel_FL","Wheel_FR","Wheel_RL","Wheel_RR"]){const u=e.getObjectByName(d);if(u){this.wheelBases.set(u,u.position.clone());const f=e.getObjectByName(d.replace("Wheel","Caliper"));f&&this.caliperBases.set(u,{node:f,base:f.position.clone()})}}const i=new Map;e.traverse(d=>{if(!(d instanceof It)||!d.name.startsWith("Glass_")||!(d.material instanceof Zn)||d.material.name!=="Glass_ClearTransmission")return;const u=d.material;let f=i.get(u);f||(f=u.clone(),f.name="R34 thin clear window (alpha reflection)",f.transmission=0,f.thickness=0,f.transparent=!0,f.opacity=.16,f.depthWrite=!1,f.side=Di,f.forceSinglePass=!0,f.roughness=.045,f.metalness=0,f.clearcoat=.35,f.clearcoatRoughness=.04,f.color.setRGB(.94,.98,1),i.set(u,f)),this.windows.push({mesh:d,original:u,clear:f}),d.material=n?f:u});const r=64,a=new Uint8Array(r*r*4);for(let d=0;d<r;d++)for(let u=0;u<r;u++){const f=Math.hypot((u+.5-r/2)/(r/2),(d+.5-r/2)/(r/2));a[(d*r+u)*4+3]=Math.round(255*Math.pow(Math.max(0,1-f*f),2))}const o=new js(a,r,r,Fn);o.minFilter=o.magFilter=vt,o.generateMipmaps=!1,o.needsUpdate=!0;const c=new rn,l=[],h=[];for(let d=0;d<4;d++)l.push(0,0,1,0,1,1,0,1),h.push(d*4,d*4+2,d*4+1,d*4,d*4+3,d*4+2);c.setAttribute("position",new en(new Float32Array(48),3)),c.setAttribute("uv",new en(new Float32Array(l),2)),c.setAttribute("color",new en(new Float32Array(64).fill(1),4)),c.setIndex(h),this.shadow=new It(c,new Wn({map:o,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,vertexColors:!0})),this.shadow.name="R34 local tyre contact occlusion (approximation)",this.shadow.renderOrder=1,this.shadow.frustumCulled=!1,(e.parent??e).add(this.shadow),this.shadow.visible=n,this.update()}car;world;windows=[];wheelBases=new Map;caliperBases=new Map;shadow;last="";enabled;setEnabled(e){this.enabled=e;for(const t of this.windows)t.mesh.material=e?t.clear:t.original;this.shadow.visible=e,this.last="",this.update()}contacts(){const e=new C(1,0,0).applyQuaternion(this.car.getWorldQuaternion(this.car.quaternion.clone())),t=Math.atan2(-e.z,e.x);return this.world.wheels.map((n,i)=>{const r=["Wheel_FL","Wheel_FR","Wheel_RL","Wheel_RR"][i],a=this.car.getObjectByName(r),o=this.contactPoint(n,a),c=this.world.tyreHeight(o.x,o.z,o.y+.5,t),l=a?new yt().setFromObject(a,!0):void 0;return{wheel:r,point:o.toArray(),groundY:c,gap:c===null?null:o.y-c,meshMinY:l?.min.y}})}contactPoint(e,t){const n=this.car.localToWorld(e.clone()),i=t&&this.wheelBases.get(t);if(t&&i&&t.parent){const r=t.parent.localToWorld(i.clone()),a=t.parent.localToWorld(t.position.clone());n.add(a.sub(r))}return n}update(){this.shadow.visible=this.enabled&&this.car.visible;const e=[...this.car.position.toArray(),...this.car.quaternion.toArray(),...Array.from(this.wheelBases.keys()).flatMap(h=>h.parent.quaternion.toArray())].join(",");if(e===this.last)return;this.last=e;const t=new C(1,0,0).applyQuaternion(this.car.getWorldQuaternion(this.car.quaternion.clone())),n=Math.atan2(-t.z,t.x);let i=0;for(const[h,d]of this.wheelBases){h.position.copy(d);const u=this.car.localToWorld(this.world.wheels[i++].clone()),f=this.world.tyreHeight(u.x,u.z,u.y+.5,n),m=this.enabled&&f!==null?Math.max(0,Math.min(.08,u.y-f-.002)):0;if(m>0){const g=h.parent.localToWorld(d.clone());g.y-=m,h.position.copy(h.parent.worldToLocal(g))}h.updateMatrixWorld(!0);const v=this.caliperBases.get(h);if(v){const g=v.node.parent.localToWorld(v.base.clone());g.y-=m,v.node.position.copy(v.node.parent.worldToLocal(g)),v.node.updateMatrixWorld(!0)}}const r=this.shadow.geometry.getAttribute("position"),a=this.shadow.geometry.getAttribute("color"),o=this.car.getWorldQuaternion(this.car.quaternion.clone()),c=new C(1,0,0).applyQuaternion(o).setY(0).normalize(),l=new C(0,0,1).applyQuaternion(o).setY(0).normalize();this.world.wheels.forEach((h,d)=>{const u=this.contactPoint(h,this.car.getObjectByName(["Wheel_FL","Wheel_FR","Wheel_RL","Wheel_RR"][d])),f=this.world.tyreHeight(u.x,u.z,u.y+.5,Math.atan2(-c.z,c.x)),m=f===null?1/0:u.y-f,v=[[-.27,-.18],[.27,-.18],[.27,.18],[-.27,.18]].map(([p,y])=>{const A=u.clone().addScaledVector(c,p).addScaledVector(l,y),b=this.world.ground.height(A.x,A.z,u.y+.5);return b===null?null:A.setY(b+.002)}),g=v.every(p=>p!==null)&&m>=-.01&&m<.12;v.forEach((p,y)=>{const A=g?p:u.clone();this.shadow.parent.worldToLocal(A),r.setXYZ(d*4+y,A.x,A.y,A.z),a.setXYZW(d*4+y,1,1,1,g?Math.max(0,1-m/.12):0)})}),r.needsUpdate=!0,a.needsUpdate=!0}}const ri=360,ts=(s,e,t)=>Math.max(e,Math.min(t,s));function id(){return{x:0,z:0,yaw:0,speed:0,steer:0,wheelAngle:0,mode:"walk",view:"chase",px:0,pz:-2.8,lookYaw:Math.PI/2,lookPitch:0,time:0,cooldown:0,reverseWait:0,gear:0,rpm:850,flame:0,flameCooldown:0,previousThrottle:!1,paused:!0}}function sd(s,e,t){if(s.paused)return;if(t=ts(t,0,1/60),s.time+=t,s.cooldown=Math.max(0,s.cooldown-t),s.flame=Math.max(0,s.flame-t),s.flameCooldown=Math.max(0,s.flameCooldown-t),s.mode==="walk"){const u=(e.KeyW?1:0)-(e.KeyS?1:0),f=(e.KeyD?1:0)-(e.KeyA?1:0),m=Math.max(1,Math.hypot(u,f)),v=(-Math.cos(s.lookYaw)*u+Math.sin(s.lookYaw)*f)*3.4*t/m,g=(Math.sin(s.lookYaw)*u+Math.cos(s.lookYaw)*f)*3.4*t/m,p=ts(s.px+v,-ri,ri),y=ts(s.pz+g,-ri,ri),A=Math.cos(s.yaw)*(p-s.x)-Math.sin(s.yaw)*(y-s.z),b=Math.sin(s.yaw)*(p-s.x)+Math.cos(s.yaw)*(y-s.z);(Math.abs(A)>2.6||Math.abs(b)>1.17)&&(s.px=p,s.pz=y),s.rpm=850,s.gear=0;return}const n=!!e.KeyW,i=!!e.KeyS,r=s.gear,a=Math.abs(s.speed);let o=0;n&&!i?(s.reverseWait=0,o=s.speed<-.1?15:Math.max(2.1,9.8-.105*Math.max(0,s.speed))):i?s.speed>.05?(o=-16,s.reverseWait=0):(s.speed=Math.min(0,s.speed),s.reverseWait+=t,s.reverseWait>.45&&(o=-4.2)):s.reverseWait=0;const c=s.speed;s.speed+=o*t,i&&c>0&&s.speed<0&&(s.speed=0);const l=(.22+.0032*s.speed*s.speed)*t;s.speed=Math.sign(s.speed)*Math.max(0,Math.abs(s.speed)-l),s.speed=ts(s.speed,-8.3,69.4);const h=((e.KeyA?1:0)-(e.KeyD?1:0))*.48/(1+a*.043);s.steer+=(h-s.steer)*(1-Math.exp(-9*t)),s.yaw+=s.speed/2.665*Math.tan(s.steer)*t,s.x-=Math.cos(s.yaw)*s.speed*t,s.z+=Math.sin(s.yaw)*s.speed*t,s.wheelAngle=(s.wheelAngle+s.speed/.342*t)%(Math.PI*2),(Math.abs(s.x)>ri-3||Math.abs(s.z)>ri-3)&&(s.x=ts(s.x,-ri+3,ri-3),s.z=ts(s.z,-ri+3,ri-3),s.speed=0,s.flame=0);const d=Math.abs(s.speed);s.gear=s.speed<-.1?-1:d<.1?0:Math.min(6,1+Math.floor(d/12)),s.rpm=s.gear===0?850:ts(1700+d%12/12*5e3+(n?450:0),850,7200),s.flameCooldown===0&&d>4&&(n&&!s.previousThrottle||s.gear>r&&r>0||!n&&s.previousThrottle)&&(s.flame=.115,s.flameCooldown=.6),s.previousThrottle=n}const ns=Object.freeze({standingHeight:1.75,hip:[-.08,.54,-.39],torsoRecline:.35,wheel:[-.115,.877,-.405],leftAnkle:[-.38,.412,-.28],rightAnkle:[-.39,.412,-.52],leftWrist:[.005,.845,-.22],rightWrist:[.005,.845,-.59]});function ux(s,e){const t=new Ve;t.name="Existing protagonist seated RHD";const n=s,i=n.parent,r=[];n.traverse(b=>r.push({o:b,p:b.position.clone(),q:b.quaternion.clone(),s:b.scale.clone(),visible:b.visible})),t.add(n),n.position.set(0,0,0),n.quaternion.identity(),n.scale.setScalar(1),n.visible=!0;const a={};n.traverse(b=>{b.isBone&&(a[b.name.replace(/[^A-Za-z0-9]/g,"").replace(/^mixamorig/,"")]=b)});const o=[];n.traverse(b=>{b.isSkinnedMesh&&(o.push(b),b.frustumCulled=!1)});for(const b of o)b.skeleton.pose();n.updateMatrixWorld(!0);const c=new yt().setFromObject(n,!0),l=ns.standingHeight/(c.max.y-c.min.y);n.scale.setScalar(l),n.rotation.y=-Math.PI/2,n.updateMatrixWorld(!0),n.quaternion.premultiply(new Ct().setFromAxisAngle(new C(0,0,1),-ns.torsoRecline)),n.updateMatrixWorld(!0),n.position.add(new C(...ns.hip).sub(a.Hips.getWorldPosition(new C))),n.updateMatrixWorld(!0);const h=b=>b.getWorldPosition(new C);function d(b,M,w){n.updateMatrixWorld(!0);const R=h(M).sub(h(b)).normalize(),_=w.clone().sub(h(b)).normalize(),T=new Ct().setFromUnitVectors(R,_),P=b.getWorldQuaternion(new Ct).premultiply(T);b.quaternion.copy(b.parent.getWorldQuaternion(new Ct).invert().multiply(P)),n.updateMatrixWorld(!0)}function u(b,M,w,R,_){const T=h(b),P=h(M).distanceTo(T),I=h(w).distanceTo(h(M)),N=R.clone().sub(T),B=Math.min(N.length(),P+I-.001);N.normalize();const L=_.clone().sub(T);L.addScaledVector(N,-L.dot(N)).normalize();const G=(P*P-I*I+B*B)/(2*B),S=Math.sqrt(Math.max(0,P*P-G*G)),U=T.clone().addScaledVector(N,G).addScaledVector(L,S);d(b,M,U),d(M,w,R)}for(const b of["Left","Right"]){const M=b==="Left"?-.28:-.52,w=new C(...ns[b==="Left"?"leftAnkle":"rightAnkle"]);u(a[b+"UpLeg"],a[b+"Leg"],a[b+"Foot"],w,new C(-.4,.7,M)),d(a[b+"Foot"],a[b+"ToeBase"],h(a[b+"Foot"]).add(new C(-.15,.08,0)));const R=new C(...ns[b==="Left"?"leftWrist":"rightWrist"]);u(a[b+"Arm"],a[b+"ForeArm"],a[b+"Hand"],R,new C(.03,.65,M)),d(a[b+"Hand"],a[b+"HandMiddle1"],R.clone().add(new C(-.11,.035,b==="Left"?-.015:.015)))}for(const b of["Left","Right"])for(const M of["Index","Middle","Ring","Pinky"]){const w=b+"Hand"+M;d(a[w+"1"],a[w+"2"],h(a[w+"1"]).add(new C(-.04,-.005,0))),d(a[w+"2"],a[w+"3"],h(a[w+"2"]).add(new C(-.005,-.025,0))),d(a[w+"3"],a[w+"4"],h(a[w+"3"]).add(new C(.018,-.015,0)))}n.updateMatrixWorld(!0);const f=new Set;for(const b of o)b.skeleton.bones.forEach((M,w)=>{/Head|Neck/.test(M.name)&&f.add(w)});const m=[],v=[],g={value:0};for(const b of o){const M=b.geometry.clone(),w=new Float32Array(M.attributes.position.count),R=M.attributes.skinIndex,_=M.attributes.skinWeight;for(let P=0;P<w.length;P++)for(let I=0;I<4;I++)f.has(R.getComponent(P,I))&&(w[P]+=_.getComponent(P,I));M.setAttribute("driverHeadMask",new en(w,1)),m.push({mesh:b,geometry:b.geometry,material:b.material}),b.geometry=M,v.push(M);const T=P=>{const I=P.clone();return I.onBeforeCompile=N=>{N.uniforms.driverCockpit=g,N.vertexShader=`attribute float driverHeadMask; varying float vDriverHeadMask;
`+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vDriverHeadMask = driverHeadMask;`),N.fragmentShader=`uniform float driverCockpit; varying float vDriverHeadMask;
`+N.fragmentShader,N.fragmentShader=N.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if(driverCockpit > 0.5 && vDriverHeadMask > 0.35) discard;`)},I.customProgramCacheKey=()=>"r34-driver-head-mask-v1",v.push(I),I};b.material=Array.isArray(b.material)?b.material.map(T):T(b.material)}const p=h(a.Head).add(new C(-.085,.075,0)),y={standingHeight:1.75,uniformScale:l,hipTarget:ns.hip,wheelCenter:ns.wheel,bones:{},eyeLocal:p.toArray(),cockpitVisibility:"Only head/neck-weighted fragments discarded in cockpit. Entire actor visible in exterior.",method:"Static two-bone IK with unchanged bone lengths. Landmark distances do not prove zero mesh penetration."};for(const b of["Hips","Head","HeadTop_End","LeftUpLeg","LeftLeg","LeftFoot","LeftToeBase","RightLeg","RightFoot","RightToeBase","LeftArm","RightArm","LeftForeArm","RightForeArm","LeftHand","RightHand"])a[b]&&(y.bones[b]=h(a[b]).toArray());const A=new yt().setFromObject(n,!0);return y.posedBounds={min:A.min.toArray(),max:A.max.toArray()},e&&e.add(t),{root:t,actor:n,bones:a,eyeLocal:p,metrics:y,setCockpit:b=>{g.value=b?1:0},dispose:()=>{t.removeFromParent(),i&&i.add(n);for(const b of r)b.o.position.copy(b.p),b.o.quaternion.copy(b.q),b.o.scale.copy(b.s),b.o.visible=b.visible;n.updateMatrixWorld(!0);for(const b of m)b.mesh.geometry=b.geometry,b.mesh.material=b.material;v.forEach(b=>b.dispose())}}}class fx{constructor(e,t,n,i,r,a){if(this.car=e,this.person=t,this.controls=n,this.camera=i,this.world=new hx(r,a,e.contacts.map(o=>new C().fromArray(o.local))),this.visuals=new dx(e.root,this.world,new URLSearchParams(location.search).get("r34look")!=="legacy"),this.state.x=e.root.position.x,this.state.z=e.root.position.z,this.state.yaw=0,this.pose=this.world.pose(this.state.x,this.state.z,0,e.root.position.y),!this.pose||this.world.blocked(this.pose))throw Error("R34 driving spawn is unsupported or obstructed");this.spawn={position:this.pose.position.clone(),quaternion:this.pose.quaternion.clone(),gaps:[...this.pose.gaps],slope:this.pose.slope},this.state.paused=!1;for(const o of["Steering_FL","Steering_FR","Wheel_FL","Wheel_FR","Wheel_RL","Wheel_RR"]){const c=e.root.getObjectByName(o);if(!c)throw Error("Missing R34 rig "+o);this.bases.set(c,c.quaternion.clone())}this.panel.id="r34-driving-panel",this.panel.style.cssText="position:fixed;bottom:12px;left:12px;z-index:500;background:#101820e8;color:white;padding:12px;max-width:600px;font:14px sans-serif",document.body.append(this.panel),this.panel.onclick=()=>{this.driving&&(this.paused=!1,this.keys={},this.message="運転を再開",this.effects?.gesture())},addEventListener("keydown",o=>this.key(o,!0),!0),addEventListener("keyup",o=>this.key(o,!1),!0),addEventListener("blur",()=>this.pause()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.pause()}),addEventListener("click",o=>{this.driving&&o.target!==this.panel&&!o.target?.closest("#btn-day,#btn-night")&&(o.stopImmediatePropagation(),o.preventDefault())},!0),this.applyPose(),this.show()}car;person;controls;camera;effects;connectEffects(e){this.effects=e}visuals;world;state=id();keys={};driver;pose;spawn;panel=document.createElement("div");message="車の右側で E：乗車";paused=!1;bases=new Map;cooldown=0;lastTrace=0;events=[];trace=[];get driving(){return this.state.mode==="drive"}event(e,t){this.events.push({type:e,time:this.state.time,position:this.car.root.position.toArray(),detail:t}),this.events.length>250&&this.events.shift()}pause(){this.keys={},this.driving&&(this.paused=!0,this.event("pause"),this.message="一時停止：下のパネルをクリックして再開",this.effects?.update())}key(e,t){const n=e.target;if(n?.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(n?.tagName??""))return;const i=["KeyW","KeyS","KeyA","KeyD","KeyE","KeyC","KeyR","Escape","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","KeyB"];if(this.driving&&i.includes(e.code)){if(e.stopImmediatePropagation(),e.preventDefault(),t){if(e.repeat&&!this.keys[e.code])return;this.keys[e.code]=!0}else delete this.keys[e.code];this.effects?.update()}!t||e.repeat||(e.code==="KeyE"&&(this.driving||this.nearby())?(e.stopImmediatePropagation(),e.preventDefault(),this.interact()):e.code==="KeyC"&&this.driving?(this.state.view=this.state.view==="chase"?"cockpit":"chase",this.event("camera",this.state.view)):e.code==="KeyR"?(this.driving||this.controls.mode==="walk")&&(e.stopImmediatePropagation(),this.recover()):e.code==="Escape"&&this.driving&&this.pause())}nearby(){if(this.driving||this.controls.mode!=="walk")return!1;const e=new C(0,0,-1.15).applyQuaternion(this.pose.quaternion).add(this.pose.position);return this.person.root.position.distanceTo(e)<2}interact(){if(this.cooldown>0||this.paused)return!1;if(!this.driving)return this.nearby()?(this.controls.walk.unlock(),this.controls.orbit.enabled=!1,this.keys={},this.driver=ux(this.person.root,this.car.root),this.state.mode="drive",this.state.reverseWait=0,this.state.view="chase",this.cooldown=.4,this.event("enter"),this.message="W 加速 / S 制動→後退 / A D 操舵 / C 視点 / 停止後 E 降車 / R 復帰",this.updateCamera(),this.effects?.gesture(),!0):(this.message="右ドアへ近づいてください",!1);if(Math.abs(this.state.speed)>.35)return this.message="停止してから降車してください",this.event("exit-refused","moving"),!1;const e=this.world.safeExit(this.pose);return e?(this.driver?.dispose(),this.driver=void 0,this.state.mode="walk",this.state.speed=0,this.keys={},this.camera.near=.1,this.camera.fov=55,this.camera.updateProjectionMatrix(),this.controls.resetActorPosition(e),this.person.root.visible=!0,this.cooldown=.4,this.event("exit"),this.message="徒歩：画面クリックで操作 / 車の右側で E / R 復帰",this.effects?.update(),!0):(this.message="安全な降車場所がありません",this.event("exit-refused","no-safe-space"),!1)}recover(){this.driver&&(this.driver.dispose(),this.driver=void 0),this.state.mode="walk",this.state.speed=0,this.state.yaw=0,this.state.x=this.spawn.position.x,this.state.z=this.spawn.position.z,this.state.steer=0,this.state.reverseWait=0,this.keys={},this.paused=!1,this.cooldown=0,this.pose={position:this.spawn.position.clone(),quaternion:this.spawn.quaternion.clone(),gaps:[...this.spawn.gaps],slope:this.spawn.slope},this.applyPose();const e=this.world.safeExit(this.pose);if(!e)throw Error("Recovery spawn has no safe exit");this.controls.resetActorPosition(e),this.person.root.visible=!0,this.camera.near=.1,this.camera.fov=55,this.camera.updateProjectionMatrix(),this.event("recover"),this.message="安全な開始地点に復帰しました。画面クリックで徒歩",this.effects?.update()}applyPose(){this.car.root.position.copy(this.pose.position),this.car.root.quaternion.copy(this.pose.quaternion),this.car.root.updateMatrixWorld(!0),this.visuals.update()}update(e){if(e=Number.isFinite(e)?Math.max(0,Math.min(.1,e)):0,this.cooldown=Math.max(0,this.cooldown-e),this.driving){if(!Number.isFinite(this.car.root.position.length())||this.car.root.position.y<-10||Math.abs(this.car.root.position.x)>80||Math.abs(this.car.root.position.z)>80)return this.recover(),!1;if(!this.paused){let t=e;for(;t>1e-8;){const n=Math.min(t,.008333333333333333,.12/(Math.abs(this.state.speed)+1)),i={...this.state};sd(this.state,this.keys,n);const r=this.world.pose(this.state.x,this.state.z,this.state.yaw,this.pose.position.y);!r||this.world.blocked(r)?(this.state.x=i.x,this.state.z=i.z,this.state.yaw=i.yaw,this.state.wheelAngle=i.wheelAngle,this.state.speed=0,this.state.reverseWait=0,Math.abs(i.speed)>.1&&this.event(r?"collision":"road-boundary",JSON.stringify(r?this.world.obstacles.lastHit:this.world.lastFailure)),this.message=r?"障害物で停止：後退して離れてください":"路面・試験範囲の境界で停止"):this.pose=r,t-=n}}this.applyPose();for(const[t,n]of this.bases)t.quaternion.copy(n),t.name.startsWith("Steering")?t.rotateY(this.state.steer):t.rotateZ(this.state.wheelAngle*(t.name.endsWith("L")?-1:1));this.updateCamera(),this.state.time-this.lastTrace>.2&&(this.lastTrace=this.state.time,this.trace.push({time:this.state.time,position:this.pose.position.toArray(),speed:this.state.speed,gap:Math.max(...this.pose.gaps),slope:this.pose.slope}),this.trace.length>3e3&&this.trace.shift())}return this.visuals.update(),this.show(),this.driving}updateCamera(){const e=this.state.view==="cockpit";this.driver?.setCockpit(e);const t=e?this.driver?.eyeLocal.clone()??new C(.16,1.13,-.405):new C(6.8,2.3,0);this.car.root.localToWorld(t);const n=new C(e?-8:-6,e?1:.9,e?-.405:0);this.car.root.localToWorld(n),this.camera.position.copy(t),this.camera.up.set(0,1,0),this.camera.lookAt(n),this.camera.near=.035,this.camera.fov=e?74:63,this.camera.updateProjectionMatrix()}show(){this.panel.textContent=`R34 ${this.driving?this.state.view==="cockpit"?"運転席":"追従":"徒歩"} · ${Math.round(Math.abs(this.state.speed)*3.6)} km/h${this.paused?" · 一時停止":""}
${this.message}`}planRoutes(){const e=[];for(const t of[0,6,12,18])for(const n of[-1,1]){const i=id();i.mode="drive",i.paused=!1,i.x=this.spawn.position.x,i.z=this.spawn.position.z;let r=this.spawn,a=t===0,o="time-limit",c=[];for(let l=0;l<4800;l++){i.x<=this.spawn.position.x-t&&(a=!0);const h={KeyW:i.speed<4.3,KeyS:i.speed>5};a&&(h[n>0?"KeyA":"KeyD"]=!0),sd(i,h,1/120);const d=this.world.pose(i.x,i.z,i.yaw,r.position.y);if(!d){o="road-boundary";break}if(this.world.blocked(d)){o="collision";break}if(r=d,l%24===0&&c.push(r.position.toArray()),Math.abs(i.yaw)>=Math.PI*2-.06){o="complete";break}}e.push({distance:t,turn:n,reason:o,end:r.position.toArray(),yaw:i.yaw,path:c})}return e}roadProbe(e,t,n,i){const r=this.world.pose(e,t,n,i);return r?{position:r.position.toArray(),gaps:r.gaps,slope:r.slope}:this.world.lastFailure}snapshot(){return{mode:this.state.mode,view:this.state.view,speed:this.state.speed,position:this.car.root.position.toArray(),yaw:this.state.yaw,paused:this.paused,keys:{...this.keys},nearby:this.nearby(),gaps:[...this.pose.gaps],slope:this.pose.slope,events:[...this.events],trace:[...this.trace],actorUUID:this.person.root.uuid,seatedActorUUID:this.driver?.actor.uuid,driver:this.driver?.metrics,groundTriangles:this.world.ground.data.length/9,obstacleTriangles:this.world.obstacles.data.length/9}}}function px(s,e,t){const n=new qa;return s.cars.filter(i=>i.status==="ready").map(i=>{const r=new yt().setFromObject(i.root,!0),a=[],o=[];for(const l of t)l.traverse(h=>{if(h instanceof It&&h.visible&&r.intersectsBox(new yt().setFromObject(h,!0))){a.push(h.name);const d=h.geometry.getAttribute("position"),u=h.geometry.index,f=new Nn;for(let m=0;m<(u?u.count:d.count);m+=3)if([f.a,f.b,f.c].forEach((v,g)=>v.fromBufferAttribute(d,u?u.getX(m+g):m+g).applyMatrix4(h.matrixWorld)),r.intersectsTriangle(f)){o.push(h.name);break}}});const c=[];for(let l=0;l<=4;l++)for(let h=0;h<=2;h++){const d=r.min.x+(r.max.x-r.min.x)*l/4,u=r.min.z+(r.max.z-r.min.z)*h/2;n.set(new C(d,80,u),new C(0,-1,0));const f=n.intersectObjects(e,!0)[0];c.push({x:d,z:u,name:f?.object.name,y:f?.point.y})}return{id:i.id,conservativeObstacleOverlaps:[...new Set(a)],triangleBoxIntersections:[...new Set(o)],footprint:c}})}const mx=["FL","FR","RL","RR"],gx={r34:{x:-6,z:0,yaw:0},s15:{x:0,z:0,yaw:0},rx7:{x:6,z:0,yaw:0}},bx={r34:{label:"Nissan Skyline GT-R R34",basisYaw:0,wheels:{FL:"Wheel_FL",FR:"Wheel_FR",RL:"Wheel_RL",RR:"Wheel_RR"}},s15:{label:"Nissan Silvia S15 Mona Lisa",basisYaw:0,wheels:{FL:"S15_Wheel_Front_Left_RollPivot",FR:"S15_Wheel_Front_Right_RollPivot",RL:"S15_Wheel_Rear_Left_RollPivot",RR:"S15_Wheel_Rear_Right_RollPivot"}},rx7:{label:"Mazda RX-7 VeilSide Fortune",basisYaw:-Math.PI/2,wheels:{FL:"Fortune_FL_Spin",FR:"Fortune_FR_Spin",RL:"Fortune_RL_Spin",RR:"Fortune_RR_Spin"}}},Bc=()=>({nodes:0,meshes:0,triangles:0,vertices:0,uniqueGeometries:0,materials:0,textures:0}),rd=s=>({min:s.min.toArray(),max:s.max.toArray(),size:s.getSize(new C).toArray()});function _x(s){const e=Bc(),t=new Set,n=new Set,i=new Set;return s.traverse(r=>{e.nodes++;const a=r;if(!a.isMesh)return;e.meshes++;const o=a.geometry.getAttribute("position"),c=a.isInstancedMesh?a.count:1;e.vertices+=(o?.count??0)*c,e.triangles+=(a.geometry.index?.count??o?.count??0)/3*c,t.add(a.geometry);for(const l of Array.isArray(a.material)?a.material:[a.material]){n.add(l);for(const h of Object.values(l))h&&typeof h=="object"&&h.isTexture&&i.add(h)}}),e.uniqueGeometries=t.size,e.materials=n.size,e.textures=i.size,e}function xx(s,e){const t=new Map;return s.traverse(n=>{const i=n;if(!i.isMesh)return;const r=Array.isArray(i.material)?i.material:[i.material];i.receiveShadow=!0,i.castShadow=!r.some(o=>o.transparent);const a=r.map(o=>{if(!o.transparent||!o.depthWrite)return o;let c=t.get(o);return c||(c=o.clone(),c.depthWrite=!1,t.set(o,c),e.push(c)),c});a.some((o,c)=>o!==r[c])&&(i.material=Array.isArray(i.material)?a:a[0])}),t.size}function vx(s,e){s.updateWorldMatrix(!0,!0);const t=s.parent.matrixWorld.clone().invert();return mx.map(n=>{const i=[];if(s.traverse(c=>{c.name===e[n]&&i.push(c)}),i.length!==1)throw new Error(`${n}: expected one ${e[n]}, found ${i.length}`);const r=i[0],a=new yt().setFromObject(r,!0);if(a.isEmpty())throw new Error(`${n}: wheel geometry is empty`);const o=r.getWorldPosition(new C).applyMatrix4(t);return o.y=a.min.y,{wheel:n,sourceNode:e[n],local:o.toArray(),world:[],groundY:null,gap:null}})}function Oo(s,e,t,n){s.updateWorldMatrix(!0,!0);for(const r of e){const a=new C().fromArray(r.local).applyMatrix4(s.matrixWorld),o=t(a.x,a.z,n);r.world=a.toArray(),r.groundY=o!==null&&Number.isFinite(o)?o:null,r.gap=r.groundY===null?null:a.y-r.groundY}const i=e.filter(r=>r.groundY===null).map(r=>r.wheel);if(i.length)throw new Error(`No registered ground under tyre(s): ${i.join(", ")}; no Y=0 fallback used`)}function yx(s){const e=new C;for(const c of s)e.add(new C(c.world[0],c.groundY,c.world[2]));e.multiplyScalar(1/s.length);let t=0,n=0,i=0,r=0,a=0;for(const c of s){const l=c.world[0]-e.x,h=c.world[2]-e.z,d=c.groundY-e.y;t+=l*l,n+=h*h,i+=l*h,r+=l*d,a+=h*d}const o=t*n-i*i;if(Math.abs(o)<1e-10)throw new Error("Degenerate tyre footprint");return new C(-(r*n-a*i)/o,1,-(a*t-r*i)/o).normalize()}function Mx(s,e){const t=new C(Math.cos(e),0,-Math.sin(e));t.addScaledVector(s,-t.dot(s)).normalize();const n=new C().crossVectors(t,s).normalize();return t.crossVectors(s,n).normalize(),new Ct().setFromRotationMatrix(new Ie().makeBasis(t,s,n))}function Sx(s,e,t,n,i){const r=n.yaw??0,a=n.scale??1;if(![n.x,n.z,r,a].every(Number.isFinite)||a<=0)throw new Error("Invalid vehicle placement");s.position.set(n.x,0,n.z),s.scale.setScalar(a),s.rotation.y=r;const o=i.probeFrom??5,c=i.maxSlopeDegrees??12;let l=0;for(let d=0;d<5;d++){Oo(s,e,t,o);const u=yx(e);if(l=Math.acos(Math.min(1,u.y))*180/Math.PI,l>c)throw new Error(`Unsafe parking slope ${l.toFixed(2)}° exceeds ${c}°`);s.quaternion.copy(Mx(u,r)),Oo(s,e,t,o),s.position.y+=Math.max(...e.map(f=>-f.gap))+.002}Oo(s,e,t,o);const h=Math.max(...e.map(d=>d.gap));if(h>(i.maxContactGap??.04))throw new Error(`Uneven ground: tyre gap ${h.toFixed(3)} m; choose a flatter placement`);return{status:"verified",maxGap:h,slopeDegrees:l}}function wx(s,e,t=16/9){const n=e.getCenter(new C),i=e.getSize(new C).length()/2,r=50,a=r*Math.PI/360,o=Math.atan(Math.tan(a)*Math.max(.1,t)),c=i/Math.sin(Math.min(a,o))*1.15,l=new C(-1,.6,-1).normalize().applyQuaternion(s.quaternion);return{target:n,position:n.clone().addScaledVector(l,c),fov:r,distance:c,near:.05,far:2e3,suggestedOrbitMinDistance:Math.max(.5,i*.65)}}async function Ex(s,e,t,n="r34",i={}){const r=new Ve;r.name="sports-poc:parked";const a=[],o=[],c=n==="all"?["r34","s15","rx7"]:[n];for(const d of c){const u=new Ve;u.name=`sports-poc:${d}`,u.visible=!1;const f=bx[d],m=`/vehicles/sports-poc/${d}.glb`,v={id:d,url:m,label:f?.label??String(d),root:u,status:"error",stats:Bc(),contacts:[],contact:{status:"unverified",maxGap:null,slopeDegrees:null},transparentDepthWritePatches:0};o.push(v);try{if(!f)throw new Error(`Unknown sports car ${d}`);const g=await(typeof e=="function"?e(m):e.loadAsync(m)),p="scene"in g?g.scene:g,y=new Ve;if(y.name=`${d}:source-basis`,y.rotation.y=f.basisYaw,y.add(p),u.add(y),u.updateMatrixWorld(!0),v.stats=_x(p),!v.stats.meshes||!v.stats.triangles)throw new Error("Asset has no triangle meshes");const A=new yt().setFromObject(u,!0),b=A.getSize(new C);if(v.sourceBounds=rd(A),![b.x,b.y,b.z].every(Number.isFinite)||b.x<3||b.x>6.5||b.z<1.2||b.z>3||b.y<.8||b.y>2.5)throw new Error(`Unexpected metre-scale vehicle bounds ${b.toArray().map(w=>w.toFixed(3)).join(" × ")}; source left unchanged`);v.contacts=vx(y,f.wheels),v.transparentDepthWritePatches=xx(p,a),v.contact=Sx(u,v.contacts,t,i.placements?.[d]??gx[d],i);const M=new yt().setFromObject(u,!0);v.worldBounds=rd(M),v.camera=wx(u,M,i.cameraAspect),v.status="ready",u.visible=!0}catch(g){v.error=g instanceof Error?g.message:String(g)}r.add(u)}s.add(r),r.updateMatrixWorld(!0);const l=o.filter(d=>d.status==="ready").length,h=Bc();for(const d of o)for(const u of Object.keys(h))h[u]+=d.stats[u];return{group:r,cars:o,stats:h,status:l===o.length?"ready":l?"partial":"error",errors:o.filter(d=>d.error).map(d=>`${d.id}: ${d.error}`),contact:o.flatMap(d=>d.contacts),dispose(){r.removeFromParent();for(const d of a)d.dispose()}}}function Tx(s,e,t,n=4/3){if(!t){const c=2*Math.atan(Math.tan(65*Math.PI/360)*Math.max(1,1.3333333333333333/Math.max(.1,n)))*180/Math.PI;return{center:s.getCenter(new C),distance:4.2,shoulder:-2.6,fov:c}}const r=s.clone();e&&r.union(e);const a=r.getSize(new C).length()/2,o=Math.atan(Math.tan(65*Math.PI/360)*Math.min(1,Math.max(.1,n)));return{center:r.getCenter(new C),distance:Math.max(4.2,a/Math.sin(o)+.4),shoulder:0,fov:65}}function ad(s,e){if(e===ff)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Dc||e===Xd){let t=s.getIndex();if(t===null){const r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Dc)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Ax(s){const e=new Map,t=new Map,n=s.clone();return wu(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function wu(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)wu(s.children[n],e.children[n],t)}class Ml extends ds{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Lx(t)}),this.register(function(t){return new Ix(t)}),this.register(function(t){return new Hx(t)}),this.register(function(t){return new Vx(t)}),this.register(function(t){return new Wx(t)}),this.register(function(t){return new Fx(t)}),this.register(function(t){return new kx(t)}),this.register(function(t){return new Ux(t)}),this.register(function(t){return new Ox(t)}),this.register(function(t){return new Dx(t)}),this.register(function(t){return new Bx(t)}),this.register(function(t){return new Nx(t)}),this.register(function(t){return new Gx(t)}),this.register(function(t){return new zx(t)}),this.register(function(t){return new Cx(t)}),this.register(function(t){return new od(t,je.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new od(t,je.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new qx(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=wr.extractUrlBase(e);a=wr.resolveURL(l,this.path)}else a=wr.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new bl(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Eu){try{a[je.KHR_BINARY_GLTF]=new Xx(e)}catch(d){i&&i(d);return}r=JSON.parse(a[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new rv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case je.KHR_MATERIALS_UNLIT:a[d]=new Px;break;case je.KHR_DRACO_MESH_COMPRESSION:a[d]=new jx(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:a[d]=new Kx;break;case je.KHR_MESH_QUANTIZATION:a[d]=new Yx;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Rx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Nt(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Cx{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new De(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Cn);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new fu(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new uu(h),l.distance=d;break;case"spot":l=new xl(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),li(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class Px{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return Wn}extendParams(e,t,n){const i=[];e.color=new De(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Cn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,qt))}return Promise.all(i)}}class Dx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class Lx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Zn:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new we(r,r)}return Promise.all(i)}}class Ix{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Zn:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class Nx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Zn:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class Fx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Zn:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Cn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,qt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class kx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Zn:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class Ux{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Zn:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(r[0],r[1],r[2],Cn),Promise.all(i)}}class Ox{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Zn:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class Bx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Zn:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(r[0],r[1],r[2],Cn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,qt)),Promise.all(i)}}class zx{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Zn:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class Gx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Zn:null}extendMaterialParams(e,t){const n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class Hx{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Vx{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class Wx{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class od{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}}class qx{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==zn.TRIANGLES&&l.mode!==zn.TRIANGLE_STRIP&&l.mode!==zn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(const m of d){const v=new Ie,g=new C,p=new Ct,y=new C(1,1,1),A=new Ga(m.geometry,m.material,u);for(let M=0;M<u;M++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&y.fromBufferAttribute(c.SCALE,M),A.setMatrixAt(M,v.compose(g,p,y));let b=null;for(const M in c)if(M==="_COLOR_0"){const w=c[M];A.instanceColor=new za(w.array,w.itemSize,w.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(b===null){const R=A.geometry;b=new rn,b.name=R.name;for(const _ in R.attributes)b.setAttribute(_,R.attributes[_]);for(const _ in R.morphAttributes)b.morphAttributes[_]=R.morphAttributes[_];R.index!==null&&b.setIndex(R.index),b.morphTargetsRelative=R.morphTargetsRelative;for(const _ of R.groups)b.addGroup(_.start,_.count,_.materialIndex);R.boundingBox!==null&&(b.boundingBox=R.boundingBox.clone()),R.boundingSphere!==null&&(b.boundingSphere=R.boundingSphere.clone()),b.drawRange.start=R.drawRange.start,b.drawRange.count=R.drawRange.count,b.userData=Object.assign({},R.userData),A.geometry=b}const w=c[M];b.setAttribute(M,new za(w.array,w.itemSize,w.normalized))}At.prototype.copy.call(A,m),this.parser.assignFinalMaterial(A),f.push(A)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Eu="glTF",pr=12,cd={JSON:1313821514,BIN:5130562};class Xx{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,pr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Eu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-pr,r=new DataView(e,pr);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===cd.JSON){const l=new Uint8Array(e,pr+a,o);this.content=n.decode(l)}else if(c===cd.BIN){const l=pr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class jx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const d=zc[h]||h.toLowerCase();o[d]=a[h]}for(const h in e.attributes){const d=zc[h]||h.toLowerCase();if(a[h]!==void 0){const u=n.accessors[e.attributes[h]],f=Gs[u.componentType];l[d]=f.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const v=f.attributes[m],g=c[m];g!==void 0&&(v.normalized=g)}d(f)},o,l,Cn,u)})})}}class Kx{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class Yx{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class Tu extends Qs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,m=e*l,v=m-l,g=-2*f+3*u,p=f-u,y=1-g,A=p-u+d;for(let b=0;b!==o;b++){const M=a[v+b+o],w=a[v+b+c]*h,R=a[m+b+o],_=a[m+b]*h;r[b]=y*M+A*w+g*R+p*_}return r}}const Jx=new Ct;class $x extends Tu{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Jx.fromArray(r).normalize().toArray(r),r}}const zn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ld={9728:Xt,9729:vt,9984:Bd,9985:wa,9986:_r,9987:di},hd={33071:Vn,33648:Ia,10497:qs},Bo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Zx={CUBICSPLINE:void 0,LINEAR:Cr,STEP:Rr},zo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Qx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Zs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Di})),s.DefaultMaterial}function is(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function li(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ev(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const d=e[l];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(u)}if(r){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],d=l[1],u=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function tv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function nv(s){let e;const t=s.extensions&&s.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Go(t.attributes):e=s.indices+":"+Go(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Go(s.targets[n]);return e}function Go(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Gc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function iv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const sv=new Ie;class rv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Rx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new hu(this.options.manager):this.textureLoader=new Kp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new bl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return is(r,o,i),li(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(wr.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Bo[i.type],o=Gs[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new en(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Bo[i.type],l=Gs[i.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let v,g;if(f&&f!==d){const p=Math.floor(u/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let A=t.cache.get(y);A||(v=new l(o,p*f,i.count*f/h),A=new hp(v,f/h),t.cache.add(y,A)),g=new hl(A,c,u%f/h,m)}else o===null?v=new l(i.count*c):v=new l(o,u,i.count*c),g=new en(v,c,m);if(i.sparse!==void 0){const p=Bo.SCALAR,y=Gs[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,M=new y(a[1],A,i.sparse.count*p),w=new l(a[2],b,i.sparse.count*c);o!==null&&(g=new en(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,_=M.length;R<_;R++){const T=M[R];if(g.setX(T,w[R*c]),c>=2&&g.setY(T,w[R*c+1]),c>=3&&g.setZ(T,w[R*c+2]),c>=4&&g.setW(T,w[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return h.magFilter=ld[u.magFilter]||vt,h.minFilter=ld[u.minFilter]||di,h.wrapS=hd[u.wrapS]||qs,h.wrapT=hd[u.wrapT]||qs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Xt&&h.minFilter!==vt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;const u=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(d){return new Promise(function(u,f){let m=u;t.isImageBitmapLoader===!0&&(m=function(v){const g=new jt(v);g.needsUpdate=!0,u(g)}),t.load(wr.resolveURL(d,r.path),m,void 0,f)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),li(d,a),d.userData.mimeType=a.mimeType||iv(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new nu,mi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new tu,mi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Zs}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[je.KHR_MATERIALS_UNLIT]){const d=i[je.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,r,t))}else{const d=r.pbrMetallicRoughness||{};if(o.color=new De(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Cn),o.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,qt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Yn);const h=r.alphaMode||zo.OPAQUE;if(h===zo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===zo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Wn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new we(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Wn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Wn){const d=r.emissiveFactor;o.emissive=new De().setRGB(d[0],d[1],d[2],Cn)}return r.emissiveTexture!==void 0&&a!==Wn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,qt)),Promise.all(l).then(function(){const d=new a(o);return r.name&&(d.name=r.name),li(d,r),t.associations.set(d,{materials:e}),r.extensions&&is(i,d,r),d})}createUniqueName(e){const t=$e.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return dd(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=nv(l),d=i[h];if(d)a.push(d.promise);else{let u;l.extensions&&l.extensions[je.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=dd(new rn,l,t),l.mode===zn.TRIANGLE_STRIP?u=u.then(f=>ad(f,Xd)):l.mode===zn.TRIANGLE_FAN&&(u=u.then(f=>ad(f,Dc))),i[h]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?Qx(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,m=h.length;f<m;f++){const v=h[f],g=a[f];let p;const y=l[f];if(g.mode===zn.TRIANGLES||g.mode===zn.TRIANGLE_STRIP||g.mode===zn.TRIANGLE_FAN||g.mode===void 0){const A=r.isSkinnedMesh===!0,b=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");A&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=A&&b?new gp(v,y):new It(v,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===zn.LINES)p=new vp(v,y);else if(g.mode===zn.LINE_STRIP)p=new fl(v,y);else if(g.mode===zn.LINE_LOOP)p=new yp(v,y);else if(g.mode===zn.POINTS)p=new Mp(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&tv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),li(p,r),g.extensions&&is(i,p,g),t.assignFinalMaterial(p),d.push(p)}for(let f=0,m=d.length;f<m;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&is(i,d[0],r),d[0];const u=new Ve;r.extensions&&is(i,u,r),t.associations.set(u,{meshes:e});for(let f=0,m=d.length;f<m;f++)u.add(d[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new vn(Yd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Br(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),li(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const d=a[l];if(d){o.push(d);const u=new Ie;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new dl(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){const f=i.channels[d],m=i.samplers[f.sampler],v=f.target,g=v.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,y=i.parameters!==void 0?i.parameters[m.output]:m.output;v.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(m),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){const u=d[0],f=d[1],m=d[2],v=d[3],g=d[4],p=[];for(let A=0,b=u.length;A<b;A++){const M=u[A],w=f[A],R=m[A],_=v[A],T=g[A];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const P=n._createAnimationTracks(M,w,R,_,T);if(P)for(let I=0;I<P.length;I++)p.push(P[I])}const y=new Nc(r,void 0,p);return li(y,i),y})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,sv)});for(let f=0,m=d.length;f<m;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){const f=h.userData.pivot,m=d[0];h.pivot=new C().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new eu:l.length>1?h=new Ve:l.length===1?h=l[0]:h=new At,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=a),li(h,r),r.extensions&&is(n,h,r),r.matrix!==void 0){const d=new Ie;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Ve;n.name&&(r.name=i.createUniqueName(n.name)),li(r,n),n.extensions&&is(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,d=c.length;h<d;h++){const u=c[h];u.parent!==null?r.add(Ax(u)):r.add(u)}const l=h=>{const d=new Map;for(const[u,f]of i.associations)(u instanceof mi||u instanceof jt)&&d.set(u,f);return h.traverse(u=>{const f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}qi[r.path]===qi.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(qi[r.path]){case qi.weights:h=Nr;break;case qi.rotation:h=Fr;break;case qi.translation:case qi.scale:h=Wa;break;default:n.itemSize===1?h=Nr:h=Wa;break}const d=i.interpolation!==void 0?Zx[i.interpolation]:Cr,u=this._getArrayFromAccessor(n);for(let f=0,m=c.length;f<m;f++){const v=new h(c[f]+"."+qi[r.path],t.array,u,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Gc(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Fr?$x:Tu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function av(s,e,t){const n=e.attributes,i=new yt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),o.normalized){const h=Gc(Gs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new C,c=new C;for(let l=0,h=r.length;l<h;l++){const d=r[l];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,m=u.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),u.normalized){const v=Gc(Gs[u.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new bi;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function dd(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=zc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Xe.workingColorSpace!==Cn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),li(s,e),av(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?ev(s,e.targets,t):s})}const Ls=["idle","walk","run","box_01"];class Au{root=new Ve;mixer;actions;referenceSpeeds;inspection;current="idle";visual=new Ve;visualBaseY=0;soleCandidates=[];contact={candidates:0,probes:0,lastProbeMs:0,totalProbeMs:0,maxProbeMs:0,uncorrectedMinY:null,lift:0};boxFinished=!1;benchmarkMotion=null;constructor(e,t){const n=Ls.map(p=>{const y=t.filter(A=>A.name.toLowerCase()===p);if(y.length!==1)throw new Error(`Expected exactly one ${p} clip; found ${y.length}`);return y[0]});e.updateMatrixWorld(!0),e.traverse(p=>{const y=p;y.isSkinnedMesh&&y.skeleton.update()});const i=new yt().setFromObject(e,!0),r=i.max.y-i.min.y;if(!Number.isFinite(r)||r<=0)throw new Error("Invalid person bounds");const a=new Set;let o=0,c=0,l=0;if(e.traverse(p=>{const y=p;if(!y.isMesh)return;o++,c+=(y.geometry.index?.count??y.geometry.attributes.position.count)/3,l+=Math.max(1,y.geometry.groups.length);const A=p;if(A.isSkinnedMesh){A.skeleton.bones.forEach(w=>a.add(w)),A.frustumCulled=!1;const b=[],M=new C;for(let w=0;w<A.geometry.attributes.position.count;w++)A.getVertexPosition(w,M).applyMatrix4(A.matrixWorld),M.y<=i.min.y+r*.02&&b.push(w);b.length&&this.soleCandidates.push({mesh:A,indices:b}),this.contact.candidates+=b.length}y.castShadow=!0,y.receiveShadow=!0}),!a.size)throw new Error("Person has no skin joints");const h=new Set;for(const p of a){let y=p.parent;for(;y&&!a.has(y);)y=y.parent;if(!y){h.add(p);for(let A=p.parent;A&&(A.isBone||h.add(A),A!==e);A=A.parent);}}const d=1.8/r,u=[...h].filter(p=>a.has(p)),f=p=>{const y=n[Ls.indexOf(p)];if(u.length!==1||!Number.isFinite(y.duration)||y.duration<=0)return null;const A=u[0],b=y.tracks.filter(T=>{const P=$e.parseTrackName(T.name);return P.propertyName==="position"&&T.getValueSize()===3&&$e.findNode(e,P.nodeName)===A});if(b.length!==1||b[0].values.length<6)return null;const M=b[0].values,w=M.length-3,R=new C(M[w]-M[0],M[w+1]-M[1],M[w+2]-M[2]);A.parent&&R.applyMatrix3(new ke().setFromMatrix4(A.parent.matrixWorld));const _=Math.hypot(R.x,R.z)*d/y.duration;return Number.isFinite(_)&&_>1e-4?_:null};this.referenceSpeeds={walk:f("walk"),run:f("run")};const m=this.visual;m.scale.setScalar(d),m.position.set(-(i.min.x+i.max.x)*d/2,-i.min.y*d,-(i.min.z+i.max.z)*d/2),this.visualBaseY=m.position.y,m.add(e),this.root.add(m),this.root.name="tripo-person-poc";const v=[],g=n.map(p=>{const y=p.clone();for(const A of y.tracks){const b=$e.parseTrackName(A.name),M=$e.findNode(e,b.nodeName);if(b.propertyName==="position"&&A.getValueSize()===3&&M&&h.has(M)){for(let w=0;w<A.values.length;w+=3)A.values[w]=M.position.x,A.values[w+2]=M.position.z;v.push(`${p.name}:${A.name}`)}}return y});this.mixer=new dm(e),this.actions=Object.fromEntries(g.map((p,y)=>[Ls[y],this.mixer.clipAction(p)]));for(const p of Ls)this.actions[p].setLoop(p==="box_01"?ka:Pc,p==="box_01"?1:1/0),this.actions[p].clampWhenFinished=p==="box_01";this.mixer.addEventListener("finished",p=>{p.action===this.actions.box_01&&(this.boxFinished=!0)}),this.actions.idle.play(),this.inspection={soleCandidateVertices:this.contact.candidates,referenceSpeeds:this.referenceSpeeds,meshes:o,joints:a.size,triangles:c,primitives:l,rawBounds:{min:i.min.toArray(),max:i.max.toArray()},scale:d,assumedHeightMetres:1.8,assumedForward:"+Z",clips:t.map(p=>({name:p.name,duration:p.duration,tracks:p.tracks.length})),horizontalTracksFrozen:v}}dispose(){this.mixer.stopAllAction(),this.mixer.uncacheRoot(this.mixer.getRoot()),this.root.removeFromParent(),Hs(this.root)}transition(e){if(e===this.current)return;const t=this.actions[this.current];this.actions[e].reset().setEffectiveTimeScale(1).setEffectiveWeight(1).play(),t.crossFadeTo(this.actions[e],.2,!1),this.current=e,this.boxFinished=!1}resetContactMetrics(){this.contact.probes=0,this.contact.lastProbeMs=0,this.contact.totalProbeMs=0,this.contact.maxProbeMs=0}guardSoles(){const e=performance.now();this.visual.position.y=this.visualBaseY,this.root.updateMatrixWorld(!0);const t=new Ie().copy(this.root.matrixWorld).invert(),n=new Ie,i=new C;let r=1/0;for(const{mesh:o,indices:c}of this.soleCandidates){o.skeleton.update(),n.multiplyMatrices(t,o.matrixWorld);for(const l of c)o.getVertexPosition(l,i).applyMatrix4(n),r=Math.min(r,i.y)}this.contact.uncorrectedMinY=Number.isFinite(r)?r:null,this.contact.lift=Number.isFinite(r)?Math.max(0,-r):0,this.visual.position.y+=this.contact.lift;const a=performance.now()-e;this.contact.probes++,this.contact.lastProbeMs=a,this.contact.totalProbeMs+=a,this.contact.maxProbeMs=Math.max(this.contact.maxProbeMs,a)}setBenchmarkMotion(e,t=0){if(e!==null&&!Ls.includes(e))throw new Error("Unknown benchmark clip");this.benchmarkMotion=e===null?null:{clip:e,speed:t},this.actions.box_01.setLoop(e==="box_01"?Pc:ka,e==="box_01"?1/0:1),this.transition("idle")}update(e,t){if(this.benchmarkMotion){const{clip:r,speed:a}=this.benchmarkMotion;t={active:!0,moving:r==="walk"||r==="run",running:r==="run",boxPressed:r==="box_01",horizontalSpeed:a,direction:new C(Math.sin(this.root.rotation.y),0,Math.cos(this.root.rotation.y))}}let n=t.moving?t.running?"run":"walk":"idle";t.active&&!t.moving&&(this.current==="box_01"&&!this.boxFinished||t.boxPressed)&&(n="box_01"),this.transition(n);let i=1;if(n==="walk"||n==="run"){const r=this.referenceSpeeds[n];r!==null&&Number.isFinite(t.horizontalSpeed)&&t.horizontalSpeed>0&&(i=Math.min(4,Math.max(.1,t.horizontalSpeed/r)))}this.actions[n].setEffectiveTimeScale(i),t.moving&&(this.root.rotation.y=Math.atan2(t.direction.x,t.direction.z)),this.mixer.update(Number.isFinite(e)?Math.min(Math.max(e,0),.1):0),this.guardSoles()}}async function ud(s="/characters/tripo-person.glb"){const e=performance.now(),t=await new Ml().loadAsync(s);try{return{person:new Au(t.scene,t.animations),loadMs:performance.now()-e}}catch(n){throw Hs(t.scene),n}}function Hs(s){const e=new Set,t=new Set,n=new Set,i=new Set;s.traverse(r=>{const a=r;a.isMesh&&(n.add(a.geometry),(Array.isArray(a.material)?a.material:[a.material]).forEach(o=>e.add(o)),a.isSkinnedMesh&&i.add(a.skeleton))});for(const r of e)for(const a of Object.values(r))a?.isTexture&&t.add(a);t.forEach(r=>r.dispose()),e.forEach(r=>r.dispose()),n.forEach(r=>r.dispose()),i.forEach(r=>r.dispose())}function Sl(s,e="/shibuya-scene-2-play/"){return!s.startsWith("/")||s.startsWith("//")||s.startsWith(e)?s:e.replace(/\/$/,"")+s}const Hc={adult:{url:"/characters/tripo-person.glb",bytes:3962392,sha:"8bb99e0ea50ef5cebb09354acd5a8592f609ed8d4b401b73f5b286ef50f71743"},extra:{url:"/characters/combat/adult-extra.glb",bytes:3588480,sha:"bc348692e7716f9cef09cb41ce494599bbdcf862cc857ef2007938612dea001d"},npc:{url:"/characters/combat/fitness.glb",bytes:4162364,sha:"8758d2f890b18ef4f4c417872c868005f186ee57104824dce526081f67099582"}};function Xa(s){const e=[];return s.traverse(t=>{t.isSkinnedMesh&&e.push(t)}),e}const Gn=(s,e)=>s.length===e.length&&Array.from(s).every((t,n)=>t===e[n]);function ov(s,e){const t=Xa(s.scene),n=Xa(e.scene);if(t.length!==1||n.length!==1)throw Error("Expected one adult skin");const i=t[0],r=n[0],a=i.skeleton,o=r.skeleton;if(a.bones.length!==o.bones.length||!Gn(i.bindMatrix.elements,r.bindMatrix.elements)||!Gn(i.bindMatrixInverse.elements,r.bindMatrixInverse.elements))throw Error("Adult bind mismatch");const c=(d,u)=>{let f=u.parent;for(;f&&!d.skeleton.bones.includes(f);)f=f.parent;return f?d.skeleton.bones.indexOf(f):-1};a.bones.forEach((d,u)=>{const f=o.bones[u];if(d.name!==f.name||c(i,d)!==c(r,f)||!Gn(d.position.toArray(),f.position.toArray())||!Gn(d.quaternion.toArray(),f.quaternion.toArray())||!Gn(d.scale.toArray(),f.scale.toArray())||!Gn(a.boneInverses[u].elements,o.boneInverses[u].elements))throw Error("Adult skeleton mismatch")});const l=Object.keys(i.geometry.attributes).sort();if(JSON.stringify(l)!==JSON.stringify(Object.keys(r.geometry.attributes).sort()))throw Error("Adult attribute set mismatch");for(const d of l){const u=i.geometry.getAttribute(d),f=r.geometry.getAttribute(d);if(u.itemSize!==f.itemSize||u.normalized!==f.normalized||!Gn(u.array,f.array))throw Error("Adult geometry mismatch: "+d)}if(!i.geometry.index||!r.geometry.index||!Gn(i.geometry.index.array,r.geometry.index.array))throw Error("Adult indices mismatch");const h=["hit_to_body_02","fall"].map(d=>{const u=e.animations.filter(f=>f.name===d);if(u.length!==1)throw Error("Missing/duplicate extra clip");return u[0]});if(e.animations.length!==2||s.animations.some(d=>h.some(u=>u.name===d.name)))throw Error("Unexpected adult clip set");for(const d of h)for(const u of d.tracks){const f=$e.parseTrackName(u.name),m=$e.findNode(s.scene,f.nodeName);if(!a.bones.includes(m))throw Error("Unverified adult track binding")}return[...s.animations,...h.map(d=>d.clone())]}function cv(s,e){const t=Xa(s);if(t.length!==1)throw Error("Expected one NPC skin");const n=t[0],i=n.geometry,r=i.getAttribute("position"),a=i.getAttribute("skinIndex"),o=i.getAttribute("skinWeight");if(r.count!==17574||n.skeleton.bones.length!==66||!i.index||i.index.count!==29696*3)throw Error("Unexpected NPC topology");const c=n.skeleton.bones.map((u,f)=>({b:u,i:f})).filter(({b:u})=>u.name.toLowerCase().includes("neutral_bone"));if(c.length!==1||a.getX(12066)!==c[0].i||o.getX(12066)!==1||o.getY(12066)!==0||o.getZ(12066)!==0||o.getW(12066)!==0)throw Error("Unexpected NPC source weights");const l=[r.getX(12066),r.getY(12066),r.getZ(12066)];if(!l.every(Number.isFinite)||!Gn(l,[r.getX(12067),r.getY(12067),r.getZ(12067)]))throw Error("NPC duplicate coordinates mismatch");const h=[a.getX(12067),a.getY(12067),a.getZ(12067),a.getW(12067)],d=[o.getX(12067),o.getY(12067),o.getZ(12067),o.getW(12067)];if(!Gn(h,[41,42,0,0])||!Gn(d,[.5882353186607361,.4117647111415863,0,0]))throw Error("Unexpected NPC duplicate weights");return n.geometry=i.clone(),n.geometry.getAttribute("skinIndex").setXYZW(12066,...h),n.geometry.getAttribute("skinWeight").setXYZW(12066,...d),{vertex:12066,donor:12067,coords:l,indices:h,weights:d,sourceHash:e}}function fd(s){const t=new DataView(s).getUint32(12,!0),n=JSON.parse(new TextDecoder().decode(new Uint8Array(s,20,t))),i=28+t;return{materials:n.materials.map(({name:r,...a})=>a),textures:n.textures,images:n.images.map(r=>{const a=n.bufferViews[r.bufferView];return new Uint8Array(s,i+(a.byteOffset??0),a.byteLength)})}}async function lv(){const s=await Promise.all(Object.values(Hc).map(async a=>{const o=await fetch(Sl(a.url));if(!o.ok)throw Error("Combat input unavailable: "+o.status);const c=await o.arrayBuffer(),l=Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",c))).map(h=>h.toString(16).padStart(2,"0")).join("");if(c.byteLength!==a.bytes||l!==a.sha)throw Error("Combat input integrity mismatch");return c})),e=fd(s[0]),t=fd(s[1]);if(JSON.stringify(e.materials)!==JSON.stringify(t.materials)||JSON.stringify(e.textures)!==JSON.stringify(t.textures)||e.images.length!==t.images.length||e.images.some((a,o)=>!Gn(a,t.images[o])))throw Error("Adult material/texture mismatch");const n=new Ml,i=await Promise.allSettled(s.map(a=>n.parseAsync(a,""))),r=i.flatMap(a=>a.status==="fulfilled"?[a.value]:[]);try{if(i.some(d=>d.status==="rejected"))throw Error("Combat GLTF parsing failed");const[a,o,c]=r,l=ov(a,o),h=cv(c.scene,Hc.npc.sha);return{adult:a,extra:o,npc:c,clips:l,patch:h}}catch(a){throw r.forEach(o=>Hs(o.scene)),a}}class pd extends Au{extra;bodyContact={probes:0,vertices:0,totalMs:0,minY:0,lift:0};selected=null;token="";bodyKey="";bodyLift=0;bodyBounds=new yt;falling=!1;meshes;constructor(e,t){super(e,t),this.meshes=Xa(e);const n=i=>{const r=t.filter(a=>a.name===i);if(r.length!==1)throw Error("Missing combat clip "+i);return this.mixer.clipAction(r[0].clone()).setLoop(ka,1)};this.extra={hit_to_body_02:n("hit_to_body_02"),fall:n("fall")},Object.values(this.extra).forEach(i=>i.clampWhenFinished=!0),this.mixer.stopAllAction()}durations(){return{attack:this.actions.box_01.getClip().duration,hit:this.extra.hit_to_body_02.getClip().duration,fall:this.extra.fall.getClip().duration}}resetPose(){this.mixer.stopAllAction(),this.selected=null,this.token="",this.bodyKey="",this.falling=!1,this.bodyBounds.makeEmpty(),this.visual.position.y=this.visualBaseY}pose(e,t,n=0){const i=["fall","down","dead"].includes(e.phase);this.falling=i;const r=i?"fall":e.phase==="hit"?"hit_to_body_02":e.phase==="attack"?"box_01":e.phase==="walk"||e.phase==="run"?e.phase:"idle",a=r==="fall"||r==="hit_to_body_02"?this.extra[r]:this.actions[r],o=r==="box_01"||r==="hit_to_body_02"?r+e.cycle:r;if(o!==this.token){const c=this.selected;a.reset().setEffectiveWeight(1).setEffectiveTimeScale(1).play(),c&&c!==a&&c.crossFadeTo(a,.15,!1),this.selected=a,this.token=o}if(r==="walk"||r==="run"){const c=this.referenceSpeeds[r];a.setEffectiveTimeScale(c?Math.min(4,Math.max(.1,n/c)):1)}if(this.mixer.update(t),(r==="fall"||r==="hit_to_body_02"||r==="box_01")&&(a.time=i&&e.phase!=="fall"?a.getClip().duration:Math.min(e.elapsed,a.getClip().duration),this.mixer.update(0)),i){const c=[e.phase==="fall"?e.elapsed:"terminal",...this.root.position.toArray(),this.root.rotation.y].join(":");c!==this.bodyKey?(this.guardBody(),this.bodyKey=c,this.bodyLift=this.bodyContact.lift):this.visual.position.y=this.visualBaseY+this.bodyLift}else this.bodyKey="",this.guardSoles()}worldBounds(){return this.root.updateMatrixWorld(!0),(this.falling&&!this.bodyBounds.isEmpty()?this.bodyBounds.clone():new yt(new C(-.375,0,-.325),new C(.375,1.8,.325))).applyMatrix4(this.root.matrixWorld)}guardBody(){const e=performance.now();this.visual.position.y=this.visualBaseY,this.root.updateMatrixWorld(!0);const t=new Ie().copy(this.root.matrixWorld).invert(),n=new Ie,i=new C;let r=1/0,a=0;this.bodyBounds.makeEmpty();for(const c of this.meshes){c.skeleton.update(),n.multiplyMatrices(t,c.matrixWorld);for(let l=0;l<c.geometry.attributes.position.count;l++)c.getVertexPosition(l,i).applyMatrix4(n),r=Math.min(r,i.y),this.bodyBounds.expandByPoint(i),a++}const o=Number.isFinite(r)?Math.max(0,-r):0;this.visual.position.y+=o,this.bodyBounds.translate(new C(0,o,0)),this.bodyContact.probes++,this.bodyContact.vertices=a,this.bodyContact.minY=r,this.bodyContact.lift=o,this.bodyContact.totalMs+=performance.now()-e}}const ai={reach:1.5,facingCos:.5,vertical:.6,windowStart:.54,windowEnd:.66,downSeconds:60,hiddenSeconds:.25,chaseRadius:8,tether:6,speed:1.6},ba=(s,e)=>Math.hypot(s.x-e.x,s.z-e.z),vr=s=>({...s}),mr=(s,e)=>({hp:s,hitsLanded:0,maxHp:s,phase:"idle",elapsed:0,previousElapsed:0,cycle:0,spent:!1,protectedUntil:0,cooldown:0,position:vr(e),yaw:0}),_a=s=>["idle","walk","run"].includes(s.phase);class hv{constructor(e,t,n,i={player:0,npc:0}){this.durations=n;for(const r of Object.values(n))for(const a of Object.values(r))if(!Number.isFinite(a)||a<=0)throw Error("Invalid combat clip duration");this.player=mr(10,e),this.npc=mr(5,t),this.spawn=vr(t),this.playerSpawn=vr(e),this.spawnYaw=i.npc,this.playerYaw=i.player,this.npc.yaw=i.npc,this.player.yaw=i.player}durations;player;npc;spawn;playerSpawn;spawnYaw;playerYaw;hostile=!1;returning=!1;activeSeconds=0;last=null;wasActive=!1;pause(){this.last=null,this.wasActive=!1}canPlayerMove(e=!1){return _a(this.player)&&!e}restart(){Object.assign(this.player,mr(10,this.playerSpawn)),Object.assign(this.npc,mr(5,this.spawn)),this.npc.yaw=this.spawnYaw,this.player.yaw=this.playerYaw,this.hostile=!1,this.returning=!1,this.activeSeconds=0,this.pause()}enter(e,t){e.phase=t,e.elapsed=0,e.previousElapsed=0,e.cycle++,e.spent=!1}eligible(e,t,n){const i=ba(e.position,t.position);return t.hp<=0||["fall","down","dead","hidden"].includes(t.phase)||this.activeSeconds<t.protectedUntil||i>ai.reach||Math.abs(e.position.y-t.position.y)>ai.vertical?!1:(i<1e-6?1:((t.position.x-e.position.x)*Math.sin(e.yaw)+(t.position.z-e.position.z)*Math.cos(e.yaw))/i)>=ai.facingCos&&n.clear(e.position,t.position)}strike(e,t,n){e.phase!=="attack"||e.spent||e.elapsed<ai.windowStart||e.previousElapsed>ai.windowEnd||!this.eligible(e,t,n)||(e.spent=!0,e.hitsLanded++,t.hp--,e===this.player&&(this.hostile=!0),t.hp===0?this.enter(t,"fall"):(t.phase!=="hit"&&this.enter(t,"hit"),t.protectedUntil=this.activeSeconds+(t===this.player?this.durations.player.hit:this.durations.npc.hit)+.6))}progress(e,t,n,i){e.cooldown=Math.max(0,e.cooldown-n),e.previousElapsed=e.elapsed,e.elapsed+=e.phase==="down"||e.phase==="hidden"?i:n,e.phase==="attack"&&e.elapsed>=t.attack?(this.enter(e,"idle"),e.cooldown=.4):e.phase==="hit"&&e.elapsed>=t.hit?this.enter(e,"idle"):e.phase==="fall"&&e.elapsed>=t.fall?this.enter(e,e===this.player?"dead":"down"):e.phase==="down"&&e.elapsed>=ai.downSeconds?this.enter(e,"hidden"):e.phase==="hidden"&&e.elapsed>=ai.hiddenSeconds&&(Object.assign(e,mr(5,this.spawn)),e.yaw=this.spawnYaw,this.hostile=!1,this.returning=!1)}tick(e,t,n){if(!Number.isFinite(e))throw Error("Invalid combat clock");const i=t.active&&this.player.phase!=="dead",r=i&&this.wasActive&&this.last!==null?Math.max(0,e-this.last):0;if(this.last=e,this.wasActive=i,!i)return 0;const a=Math.min(.1,r);if(this.activeSeconds+=r,this.player.position=vr(t.player),_a(this.player)&&(this.player.yaw=t.yaw),this.progress(this.player,this.durations.player,a,r),this.progress(this.npc,this.durations.npc,a,r),this.player.phase==="dead")return a;if(_a(this.player)&&(t.attack&&this.player.cooldown===0?this.enter(this.player,"attack"):this.player.phase=t.moving?t.running?"run":"walk":"idle"),this.hostile&&_a(this.npc)){(ba(this.player.position,this.npc.position)>ai.chaseRadius||ba(this.player.position,this.spawn)>ai.tether)&&(this.returning=!0);const c=this.returning?this.spawn:this.player.position,l=ba(this.npc.position,c);if(this.returning&&l<.2)this.hostile=!1,this.returning=!1,this.npc.phase="idle";else if(this.npc.yaw=Math.atan2(c.x-this.npc.position.x,c.z-this.npc.position.z),!this.returning&&l<=1.35&&this.npc.cooldown===0&&this.eligible(this.npc,this.player,n))this.enter(this.npc,"attack");else if(l>(this.returning?.15:1.2)){const h={x:(c.x-this.npc.position.x)/l,y:0,z:(c.z-this.npc.position.z)/l},d=n.step(this.npc.position,h,Math.min(ai.speed*a,Math.max(0,l-(this.returning?0:1.2))));d?(this.npc.position=vr(d),this.npc.phase="walk"):this.npc.phase="idle"}else this.npc.phase="idle"}return this.strike(this.player,this.npc,n),this.strike(this.npc,this.player,n),a}}const ss=s=>new C(s.x,s.y,s.z);function dv(){const s=document.createElement("section");return s.id="combat-poc",s.style.cssText="position:fixed;left:12px;bottom:42px;padding:10px;background:#111d;color:white;z-index:10;font:14px sans-serif;max-width:420px",s.textContent="NPC戦闘PoC: 読み込み中…",document.body.append(s),s}class uv{constructor(e,t,n,i,r,a=null){this.player=e,this.npc=t,this.controls=n,this.scene=i,this.panel=r,this.assetInspection=a,r.replaceChildren(this.text,this.restart),this.restart.textContent="再スタート（両者を初期化）",this.restart.hidden=!0,this.restart.addEventListener("click",()=>this.reset(),{signal:this.events.signal});const o=()=>{this.state?.pause(),this.pausedReason="unlock-or-blur"};addEventListener("blur",o,{signal:this.events.signal}),document.addEventListener("visibilitychange",()=>{document.hidden&&(o(),this.pausedReason="hidden")},{signal:this.events.signal}),n.walk.addEventListener("unlock",o),this.events.signal.addEventListener("abort",()=>n.walk.removeEventListener("unlock",o))}player;npc;controls;scene;panel;assetInspection;get root(){return this.player.root}state=null;initialWalkPitch;disabled=!1;pausedReason="initial";gameOverShown=!1;events=new AbortController;text=document.createElement("div");restart=document.createElement("button");initialize(){const e=this.root.position.clone();let t=null;for(const[i,r]of[[0,-1],[1,0],[-1,0],[0,1]]){const a=e.clone().add(new C(0,1.6,0)),o=new C(i,0,r),c=this.controls.stepTo(a,o,3);if(c){t=c.add(new C(0,-1.6,0));break}}if(!t){this.disabled=!0,this.initialWalkPitch=void 0,this.player.actions.idle.play(),this.npc.dispose(),this.text.textContent="NPC配置に安全な地面がありません。従来の人物PoCを継続します。";return}const n=Math.atan2(e.x-t.x,e.z-t.z);this.state=new hv(e,t,{player:this.player.durations(),npc:this.npc.durations()},{player:this.root.rotation.y,npc:n}),this.npc.root.position.copy(t),this.npc.root.rotation.y=n,this.scene.add(this.npc.root),this.initialWalkPitch=-.25,this.controls.refreshActorCamera()}canRelocate(){return!this.state||this.state.canPlayerMove()}cameraFrame(e){if(this.disabled||!this.state)return;const t=!!this.state&&[this.state.player.phase,this.state.npc.phase].some(n=>["fall","down","dead"].includes(n));return Tx(this.player.worldBounds(),this.state?.npc.phase==="hidden"?null:this.npc.worldBounds(),t,e)}canMove(e){return this.disabled||!this.state||this.state.canPlayerMove(e.boxPressed)}update(e,t){if(this.disabled||!this.state){this.player.update(e,t);return}this.pausedReason=document.hidden?"hidden":t.active?null:this.pausedReason??"controls-inactive";const n=this.state,i=this.npc.root.position.clone(),r=n.tick(performance.now()/1e3,{active:t.active&&!document.hidden,attack:t.boxPressed,moving:t.moving,running:t.running,player:this.root.position,yaw:t.direction.lengthSq()?Math.atan2(t.direction.x,t.direction.z):this.root.rotation.y},{clear:(o,c)=>this.controls.clearBetweenFeet(ss(o),ss(c)),step:(o,c,l)=>{const h=this.controls.stepTo(ss(o).add(new C(0,1.6,0)),ss(c),l);return h?h.add(new C(0,-1.6,0)):null}});this.root.rotation.y=n.player.yaw,this.npc.root.position.copy(ss(n.npc.position)),this.npc.root.rotation.y=n.npc.yaw,this.npc.root.visible=n.npc.phase!=="hidden",this.player.pose(n.player,r,t.horizontalSpeed),this.npc.pose(n.npc,r,r>0?Math.hypot(i.x-this.npc.root.position.x,i.z-this.npc.root.position.z)/r:0),this.restart.hidden=n.player.phase!=="dead",n.player.phase==="dead"&&(this.pausedReason="game-over"),n.player.phase==="dead"&&!this.gameOverShown&&(this.gameOverShown=!0,this.controls.walk.unlock());const a=n.npc.phase==="down"?` / 再出現まで ${Math.ceil(Math.max(0,60-n.npc.elapsed))} active秒`:"";this.text.textContent=`主人公 ${n.player.hp}/10 [${n.player.phase}]・NPC ${n.npc.hp}/5 [${n.npc.phase}]${a}
${n.player.phase==="dead"?"ゲームオーバー（暫定）":t.active?"B:手動攻撃 / WASD・Shift / Esc:停止":"停止中。地上歩行で画面をクリックして再開"}
NPCだけ自動反撃。解除・非表示中は戦闘と60秒時計を停止。`}snapshot(){return this.state?JSON.parse(JSON.stringify({status:"loaded",player:this.state.player,npc:this.state.npc,spawn:this.state.spawn,hostile:this.state.hostile,returning:this.state.returning,activeSeconds:this.state.activeSeconds,downRemaining:this.state.npc.phase==="down"?Math.max(0,60-this.state.npc.elapsed):null,pausedReason:this.pausedReason,assetInspection:this.assetInspection,sourceHashes:Object.fromEntries(Object.entries(Hc).map(([e,t])=>[e,t.sha])),bodyContact:{player:this.player.bodyContact,npc:this.npc.bodyContact}})):{status:this.disabled?"disabled":"loading",pausedReason:this.pausedReason}}reset(){this.state&&(this.state.restart(),this.controls.resetActorPosition(ss(this.state.playerSpawn)),this.player.resetPose(),this.npc.resetPose(),this.root.rotation.y=this.state.player.yaw,this.npc.root.position.copy(ss(this.state.spawn)),this.npc.root.rotation.y=this.state.spawnYaw,this.npc.root.visible=!0,this.restart.hidden=!0,this.gameOverShown=!1,this.pausedReason="restart-awaiting-lock")}dispose(){this.events.abort(),this.player.dispose(),this.npc.dispose(),this.panel.remove()}}async function fv(s,e,t){const n=await lv();let i,r;try{return i=new pd(n.adult.scene,n.clips),r=new pd(n.npc.scene,n.npc.animations),new uv(i,r,s,e,t,{patch:n.patch,adult:i.inspection,npc:r.inspection})}catch(a){throw i?i.dispose():Hs(n.adult.scene),r?r.dispose():Hs(n.npc.scene),a}finally{Hs(n.extra.scene)}}const pv=new Set(["d16-inferred-hoarding","d17-station-bridge-additions","d20-neighborhood-pack","d21-neighborhood-pack","d21-roof-bridge-additions","d22-mufg-trust","d22-tokyo106","d22-district-pack","d23-district-pack","d22-hinaga-facade"]);function mv(s){return!pv.has(s)}function gv(s){const e=[];return s.some(t=>t.startsWith("d12-"))&&e.push("D12：店頭・残り外壁・向き・接地は推定を含み、写真の年代は混在。区画全体の精密再現ではありません"),s.some(t=>t.startsWith("d16-"))&&e.push("D16：窓・内装・接地は推定、写真の年代は混在。工事囲いの年月・境界は未確定で、歩行障害物には採用していません"),s.some(t=>t.startsWith("d17-"))&&e.push("D17：マークシティ外装・駅連絡橋補完の配置と寸法は推定。橋の追加部材は見た目のみで、通行・構造安全を認定していません"),s.includes("d18-neighborhood-pack")&&e.push("D18：28棟の外装・内装・向き・接地は推定を含み、写真年代は混在。区画全体の精密再現ではありません"),s.some(t=>t.startsWith("d19-"))&&e.push("D19：外装・内装・接合・高さは推定を含みます。写真年代は混在し、スクエアB低層は後年の候補を参考にした未確認形状です。フクラスの階段・接続デッキは外観の推定で、新しい歩行面ではありません。区画全体の精密再現ではありません"),s.includes("d20-neighborhood-pack")&&e.push("D20：新南口・橋・上屋・サクラ低層外装・周辺棟は外装と標高を推定。既存地形に接地調整していますが、2025年10月の状態や接続高さは未確認。追加の橋・床は歩行面として採用していません"),s.includes("d21-neighborhood-pack")&&e.push("D21：周辺3棟と小区画の外装・向き・接地は推定で、年代未確認。駅の既存模型は維持し、SKY柵・駅屋根端・橋端は外観のみで新しい歩行面ではありません。既存模型と交差する周辺5候補、西側デッキ・銀座線東端・階段は未採用。区画全体の完成ではありません"),s.includes("d22-mufg-trust")&&e.push("D22：MUFG信託銀行棟の外装・年代・標高は推定。既存地形に合わせ足元のみ補正し、見た目のみで歩行障害物には追加していません"),s.includes("d22-tokyo106")&&e.push("D22：第106東京ビルの正面は観察に基づく近似、側面・屋根・基礎は推定。写真年代・配置標高は未確認。見た目のみで歩行障害物に追加していません"),(s.includes("d22-district-pack")||s.includes("d22-hinaga-facade")||s.includes("d22-kiosk"))&&e.push("D22：Wako・伊東の正面は観察に基づく近似、補完外形・Gloria・日永外装・小型店舗は推定。年代・配置を含む保留資料は未反映。Wakoの非入口端の段差は通行を保証しません。日永の既存壁は保持。小型店舗は閉じたガラス壁の障害物で、入口や新しい歩行床ではありません。区画全体の完成ではありません"),s.some(t=>t.startsWith("d23-"))&&e.push("D23：宮益坂下北側の観察部分2面と推定上部外装6棟を部分反映。地上店舗・屋根・年代・接続が未確定の資料は保留。B3上屋は四隅柱の推定案で、駅入口や通行・構造安全を認定するものではありません。新しい歩行床は追加していません。区画全体の完成ではありません"),s.includes("d24-district-pack")&&e.push("D24：推定外装3棟を部分反映。外装・年代・標高・入口側壁は推定で、残る29資料は保留。既存地形を維持し、新しい歩行床や通行可能な入口は追加していません。区画全体の完成ではありません"),s.includes("d27-naruse-inferred")&&e.push("D27：ナルセビル候補の推定外形と接地基礎を反映。残る22資料は保留。写真による外装・年代の一致は未確認。ガラス面は通行可能な入口ではなく、新しい階段・歩行床は追加していません。区画全体の完成ではありません"),s.includes("d28-w136730028-inferred")&&e.push("D28：名称未確認の建物候補1件の推定外形と接地基礎を反映。残る21資料は保留。写真による外装・年代の一致は未確認。ガラス面は通行可能な入口ではなく、新しい階段・歩行床は追加していません。区画全体の完成ではありません"),s.includes("d26-w138589843-inferred")&&e.push("D26：名称未同定1棟の推定外形と接地基礎を反映。残る20資料は保留。撮影年代・店先の実態は未確認。ガラス面は通行可能な入口ではなく、新しい階段・歩行床は追加していません。区画全体の完成ではありません"),s.includes("d25-pola-upper")&&e.push("D25：ポーラ渋谷ビルの推定上部外装だけを部分反映。地上店舗と残る24資料は保留。年代未確認。既存壁と当たり判定を維持し、新しい歩行床や入口は追加していません。区画全体の完成ではありません"),s.includes("d29-nagasaki-inferred")&&e.push("D29：way/136730024の外装・入口側面・足元は推定。浅い店舗の側面は開いたままで、通行可能な入口ではなく、新しい階段・歩行床は追加していません。年代未確認、残る7資料は保留。区画全体の完成ではありません"),e}var bv=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var y=new Uint8Array(p.length),A=0;A<p.length;++A){var b=p.charCodeAt(A);y[A]=b>96?b-97:b>64?b-39:b+4}for(var M=0,A=0;A<p.length;++A)y[M++]=y[A]<60?n[y[A]]:(y[A]-60)*64+y[++A];return y.buffer.slice(0,M)}function c(p,y,A,b,M,w,R){var _=p.exports.sbrk,T=b+3&-4,P=_(T*M),I=_(w.length),N=new Uint8Array(p.exports.memory.buffer);N.set(w,I);var B=y(P,b,M,I,w.length);if(B==0&&R&&R(P,T,M),A.set(N.subarray(P,P+b*M)),_(P-_(0)),B!=0)throw new Error("Malformed buffer data: "+B)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],u=0;function f(p){var y={object:new Worker(p),pending:0,requests:{}};return y.object.onmessage=function(A){var b=A.data;y.pending-=b.count,y.requests[b.id][b.action](b.value),delete y.requests[b.id]},y}function m(p){for(var y="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+c.toString()+g.toString(),A=new Blob([y],{type:"text/javascript"}),b=URL.createObjectURL(A),M=d.length;M<p;++M)d[M]=f(b);for(var M=p;M<d.length;++M)d[M].object.postMessage({});d.length=p,URL.revokeObjectURL(b)}function v(p,y,A,b,M){for(var w=d[0],R=1;R<d.length;++R)d[R].pending<w.pending&&(w=d[R]);return new Promise(function(_,T){var P=new Uint8Array(A),I=++u;w.pending+=p,w.requests[I]={resolve:_,reject:T},w.object.postMessage({id:I,count:p,size:y,source:P,mode:b,filter:M},[P.buffer])})}function g(p){var y=p.data;self.ready.then(function(A){if(!y.id)return self.close();try{var b=new Uint8Array(y.count*y.size);c(A,A.exports[y.mode],b,y.count,y.size,y.source,A.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:b},[b.buffer])}catch(M){self.postMessage({id:y.id,count:y.count,action:"reject",value:M})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,y,A,b,M){c(r,r.exports.meshopt_decodeVertexBuffer,p,y,A,b,r.exports[l[M]])},decodeIndexBuffer:function(p,y,A,b){c(r,r.exports.meshopt_decodeIndexBuffer,p,y,A,b)},decodeIndexSequence:function(p,y,A,b){c(r,r.exports.meshopt_decodeIndexSequence,p,y,A,b)},decodeGltfBuffer:function(p,y,A,b,M,w){c(r,r.exports[h[M]],p,y,A,b,r.exports[l[w]])},decodeGltfBufferAsync:function(p,y,A,b,M){return d.length>0?v(p,y,A,h[b],l[M]):a.then(function(){var w=new Uint8Array(p*y);return c(r,r.exports[h[b]],w,p,y,A,r.exports[l[M]]),w})}}})();const Vc="@root",_v=/^\d{4}-\d{2}(-\d{2})?$/,md=s=>typeof s=="number"&&Number.isFinite(s);function xv(s){const e=[];if(s.version!==1&&e.push(`unsupported version ${String(s.version)}`),!Array.isArray(s.parts)||s.parts.length===0)return[...e,"no parts"];const t=new Set,n=new Set,i=new Map;for(const r of s.parts){const a=`part ${r.id??"?"}`;r.id?t.has(r.id)?e.push(`${a}: duplicate id`):t.add(r.id):e.push("part without id"),r.file===Vc?r.frame?.kind!=="host"&&e.push(`${a}: @root must use the host frame`):!r.file||/[\\/]|\.\./.test(r.file)?e.push(`${a}: file must be a plain name`):r.file===`${s.building}.glb`?e.push(`${a}: the main GLB is loaded anyway; use "${Vc}"`):n.has(r.file)&&!r.group&&e.push(`${a}: file ${r.file} is already used by another part`),n.add(r.file),r.label||e.push(`${a}: label missing`),_v.test(r.date??"")||e.push(`${a}: date must be YYYY-MM[-DD]`),["measured","photo","inferred"].includes(r.confidence)||e.push(`${a}: confidence`),(!Array.isArray(r.sources)||r.sources.length===0)&&e.push(`${a}: sources missing`),r.mount||e.push(`${a}: mount missing`);for(const o of["u","v","z","yaw_deg"])r[o]!==void 0&&!md(r[o])&&e.push(`${a}: ${o} not finite`);if(r.frame?.kind==="edge"){const{a:o,b:c}=r.frame;[...o,...c].every(md)?Math.hypot(c[0]-o[0],c[1]-o[1])<1e-6&&e.push(`${a}: edge has zero length`):e.push(`${a}: edge points not finite`)}else r.frame?.kind!=="host"&&e.push(`${a}: unknown frame`);r.group&&r.enabled!==!1&&i.set(r.group,(i.get(r.group)??0)+1)}for(const[r,a]of i)a>1&&e.push(`group ${r}: ${a} enabled alternatives (load exactly one)`);return e}function vv(s){const e=s.u??0,t=s.v??0,n=s.z??0,i=(s.yaw_deg??0)*Math.PI/180;if(s.frame.kind==="host")return{position:[e,n,-t],yaw:i};const[r,a]=s.frame.a,[o,c]=s.frame.b,l=Math.hypot(o-r,c-a),h=(o-r)/l,d=(c-a)/l,u=d,f=-h,m=r+h*e+u*t,v=a+d*e+f*t;return{position:[m,n,-v],yaw:Math.atan2(d,h)+i}}function yv(s,e){const t=new Ve;t.name=`part:${e.id}`;const n=vv(e);return t.position.set(...n.position),t.rotation.y=n.yaw,t.add(s),t}const Mv=15;function wl(s){return s.groundElevationTP===void 0?0:s.groundElevationTP-Mv}function ja(s){return!!(s.arcMid&&s.arcNormal&&s.arcEnds&&s.floodlights&&s.cameraQ032)}function Wc(s){const[e,t,n,i]=s.planBounds;return[(e+n)/2,(t+i)/2]}function zt(s,e=1){const t=[];let n=0,i=0;s.traverse(a=>{const o=a;if(!o.isMesh)return;n++;const c=o.geometry.getAttribute("position");if(!c||c.count===0){t.push(`${o.name}: empty mesh`);return}const l=c.array;for(let d=0;d<l.length;d++)if(!Number.isFinite(l[d])){t.push(`${o.name}: non-finite vertex`);break}i+=o.geometry.index?o.geometry.index.count/3:c.count/3,(Array.isArray(o.material)?o.material:[o.material]).some(d=>!d)&&t.push(`${o.name}: missing material`)}),n===0&&t.push("no meshes"),i===0&&t.push("no triangles");const r=new yt().setFromObject(s).getSize(new C);return r.length()>e&&r.length()<5e3||t.push(`implausible size ${r.toArray().map(a=>a.toFixed(1)).join("x")} m`),t}function Sv(s){let e=0,t=0;const n=new Set;return s.traverse(i=>{const r=i;if(!r.isMesh)return;e++;const a=r.geometry.getAttribute("position");t+=r.geometry.index?r.geometry.index.count/3:a.count/3,(Array.isArray(r.material)?r.material:[r.material]).forEach(o=>n.add(o))}),{meshes:e,triangles:Math.round(t),materials:n.size}}function wv(s){const e=new Ve;e.name=`${s}:placeholder`;const t=new It(new $s(20,40,20),new Wn({color:16724821,wireframe:!0}));return t.position.y=20,e.add(t),e}async function Ev(s,e,t="/buildings"){try{const[n,i,r,a]=await Promise.all([e.loadGlb(`${t}/${s}/${s}.glb`),e.loadJson(`${t}/${s}/viewer.json`),e.loadJson(`${t}/${s}/emissive_day.json`),e.loadJson(`${t}/${s}/emissive_night.json`)]),o=zt(n);if(o.length)throw new Error(`asset check failed: ${o.slice(0,4).join("; ")}`);const c=new Ve;c.name=s,c.position.y=wl(i),c.add(n);const l=[],h=[];if(await Promise.all(Object.entries(i.layers??{}).map(async([d,u])=>{try{const f=await e.loadGlb(`${t}/${s}/${u}`),m=zt(f,.01);if(m.length)throw new Error(m.slice(0,2).join("; "));f.name=`${s}:${d}`,c.add(f),l.push(d)}catch(f){h.push(`${d}: ${f instanceof Error?f.message:String(f)}`)}})),i.placements)try{const d=await e.loadJson(`${t}/${s}/${i.placements}`),u=xv(d);if(u.length)throw new Error(u.slice(0,3).join("; "));await Promise.all(d.parts.filter(f=>f.enabled!==!1).map(async f=>{if(f.file===Vc){l.push(f.id);return}try{const m=await e.loadGlb(`${t}/${s}/${f.file}`),v=zt(m,.01);if(v.length)throw new Error(v.slice(0,2).join("; "));c.add(yv(m,f)),l.push(f.id)}catch(m){h.push(`${f.id}: ${m instanceof Error?m.message:String(m)}`)}}))}catch(d){h.push(`placements: ${d instanceof Error?d.message:String(d)}`)}return{id:s,ok:!0,root:c,hints:i,emissive:{day:r,night:a},stats:Sv(c),layers:l,layerErrors:h}}catch(n){return{id:s,ok:!1,root:wv(s),error:n instanceof Error?n.message:String(n)}}}function Tv(s,e){s.traverse(t=>{const n=t;if(n.isMesh)for(const i of Array.isArray(n.material)?n.material:[n.material]){const r=i,a=e[r.name];!a||!("emissiveIntensity"in r)||(r.emissiveIntensity=a.estr,a.estr>0&&!r.emissiveMap&&r.emissive.setRGB(a.emit[0],a.emit[1],a.emit[2]))}})}function Av(s){if(s.get("street")==="off"||s.get("street")==="entrances"||s.get("reartree")==="off"||s.get("fit")==="off")return;const e=s.get("d01");return e==="g01"||e==="g02"?e:e===null||e==="assembly"?"assembly":void 0}const Rv=["street_tree_bark","street_tree_leaves","street_tree_leaves_light"];function Cv(s,e){const t=s.getAttribute("position"),n=s.index,i=[];let r=0;for(let o=0;o<(n?.count??t.count);o+=3){const c=[0,1,2].map(h=>n?n.getX(o+h):o+h),l=c.map(h=>Math.hypot(t.getX(h)-e[0],t.getZ(h)-e[2])<5);if(l.some(Boolean)&&!l.every(Boolean))throw Error("ambiguous roadside tree boundary");l.every(Boolean)?r+=1:i.push(...c)}if(!r)throw Error("selected roadside tree is absent");const a=s.clone();return a.setIndex(i),a.computeBoundingBox(),a.computeBoundingSphere(),{geometry:a,removed:r}}function gd(s,e){if(!e||!Array.isArray(e.position)||e.position.length!==3||!e.position.every(Number.isFinite)||!Number.isFinite(e.yaw_deg)||!Number.isFinite(e.scale)||e.scale<.8||e.scale>1.25)throw Error("invalid D01 transform");s.position.set(...e.position),s.rotation.y=e.yaw_deg*Math.PI/180,s.scale.setScalar(e.scale)}function Pv(s,e){s.updateWorldMatrix(!0,!0);const t=s.getWorldPosition(new C),n=(f,m)=>{const v=e(f,m);if(v===null||!Number.isFinite(v))throw Error("missing enclosure footing ground");return v},i=n(t.x,t.z),r=2.25,a=Array.from({length:64},(f,m)=>n(t.x+r*Math.cos(m*Math.PI/32),t.z+r*Math.sin(m*Math.PI/32))),o=(f,m)=>{const v=f-t.x,g=m-t.z,p=(Math.atan2(g,v)/(2*Math.PI)+1)%1*64,y=Math.floor(p),A=p-y;return i+(a[y]*(1-A)+a[(y+1)%64]*A-i)*Math.hypot(v,g)/r};let c=0;for(let f=0;f<32;f++){const m=(f+.5)*Math.PI/16,v=t.x+2.1*Math.cos(m),g=t.z+2.1*Math.sin(m);c=Math.max(c,Math.abs(n(v,g)-o(v,g)))}if(c>.008)throw Error("enclosure footing needs a non-planar fit");let l=0,h=1/0,d=-1/0,u=0;if(s.traverse(f=>{const m=f;if(!m.isMesh)return;const v=m.geometry.clone(),g=v.getAttribute("position"),p=new Bt(new Float32Array(g.count*3),3);for(let A=0;A<g.count;A++)p.setXYZ(A,g.getX(A),g.getY(A),g.getZ(A));v.setAttribute("position",p);let y=!1;for(let A=0;A<p.count;A++){const b=new C().fromBufferAttribute(p,A).applyMatrix4(m.matrixWorld),M=s.worldToLocal(b.clone()),w=M.y;if(w>.18)continue;const R=o(b.x,b.z),_=s.localToWorld(new C(M.x,0,M.z)).y,T=R-_;if(Math.abs(T)>.15)throw Error(`enclosure slope exceeds local footing allowance at ${b.x},${b.z}: ${R} vs ${_}`);b.y+=T*Math.max(0,1-w/.18),m.worldToLocal(b),p.setXYZ(A,b.x,b.y,b.z),l++,y=!0,h=Math.min(h,R),d=Math.max(d,R),u=Math.max(u,Math.abs(T))}y?(p.needsUpdate=!0,v.computeVertexNormals(),v.computeBoundingBox(),v.computeBoundingSphere(),m.geometry=v):v.dispose()}),!l)throw Error("no enclosure footing vertices");return{vertices:l,minGround:h,maxGround:d,maxAdjustment:u,maxInterpolationResidual:c}}function Dv(s){const e=new It(new ml(2.25,2.25,1.2,64,1,!0),new Wn({side:Yn}));return e.name="collision:d01-enclosure",e.position.copy(s.position),e.position.y+=.5,e.updateMatrixWorld(!0),e}async function Lv(s,e,t,n){const i=new Ve;i.name="street:d01-candidates";const r=performance.now();try{const[a,o,c,l]=await Promise.all([s.loadGlb("/street/d01-candidates/T-A.glb"),e==="assembly"?void 0:s.loadGlb("/street/d01-candidates/T-B.glb"),s.loadGlb("/street/d01-candidates/E-A.glb"),s.loadJson("/street/d01-candidates/placement.json")]);for(const p of[a,c,...o?[o]:[]]){const y=zt(p);if(y.length)throw Error(y.join("; "))}if(!Number.isFinite(l.tree_soil_offset_y)||l.tree_soil_offset_y<0||l.tree_soil_offset_y>2)throw Error("invalid soil mounting height");if(l.assembly.scale!==1)throw Error("enclosure collision requires the authored assembly scale");const h=new Ve;h.name="d01:T-A+E-A",gd(h,l.assembly),a.name="d01:T-A",c.name="d01:E-A",a.position.y=l.tree_soil_offset_y,h.add(a,c),i.add(h),o&&e!=="assembly"&&(o.name="d01:T-B:"+e,gd(o,l.roadside[e]),i.add(o));const d=n?Pv(c,n):void 0,u=Dv(h),f=e==="assembly"?[]:Rv.map(p=>{const y=t.street.getObjectByName(p);if(!y?.isMesh)throw Error("missing scoped core mesh "+p);return{mesh:y,...Cv(y.geometry,l.roadside[e].position)}});let m=0,v=0;i.traverse(p=>{const y=p;y.isMesh&&(m++,v+=(y.geometry.index?.count??y.geometry.getAttribute("position").count)/3,y.castShadow=y.receiveShadow=!0)});const g=e==="assembly"?void 0:t.street.clone(!0);for(const p of f)p.mesh.geometry=p.geometry;return t.rearTree&&(t.rearTree.visible=!1),t.enclosure&&(t.enclosure.visible=!1),{ok:!0,root:i,candidate:e,collisionStreet:g,collisionEnclosure:u,contact:d,loadMs:performance.now()-r,stats:{meshes:m,triangles:v,removedTriangles:f.reduce((p,y)=>p+y.removed,0)}}}catch(a){return i.clear(),{ok:!1,root:i,candidate:e,error:String(a),loadMs:performance.now()-r,stats:{meshes:0,triangles:0,removedTriangles:0}}}}function Iv(s,e){return e&&s.get("street")!=="off"&&s.get("boxcontents")!=="off"}async function Nv(s){const e=new Ve;e.name="street:box-contents";const t={meshes:0,triangles:0,parts:[]};try{const n=await s.loadJson("/street/box-contents/layout.json");if(![...n.origin,n.yaw].every(r=>typeof r=="number"&&Number.isFinite(r)))throw Error("Invalid BOX parent");if(e.position.set(n.origin[0],n.origin[2],-n.origin[1]),e.rotation.y=n.yaw*Math.PI/180,new Set(n.parts.map(r=>r.id)).size!==n.parts.length)throw Error("Duplicate BOX part");for(const r of n.parts)if(![...r.position,r.yaw,r.scale].every(a=>typeof a=="number"&&Number.isFinite(a))||r.scale<=0)throw Error(`Invalid transform: ${r.id}`);const i=await Promise.all(n.parts.map(r=>s.loadGlb(`/street/box-contents/${r.file}`)));for(const[r,a]of n.parts.entries()){const o=i[r],c=zt(o,.01);if(c.length)throw Error(`${a.id}: ${c.join(", ")}`);const l=new Ve;l.name=`contents:${a.id}`,l.position.set(a.position[0],a.position[2],-a.position[1]),l.rotation.y=a.yaw*Math.PI/180,l.scale.setScalar(a.scale),l.add(o),o.traverse(h=>{const d=h;if(d.isMesh){t.meshes++,t.triangles+=(d.geometry.index?.count??d.geometry.getAttribute("position").count)/3,d.receiveShadow=!0,d.castShadow=!0;for(const u of Array.isArray(d.material)?d.material:[d.material])u.name=`street_box_contents_${u.name}`}}),e.add(l),t.parts.push(a.id)}return{ok:!0,root:e,stats:t}}catch(n){return e.clear(),{ok:!1,root:e,error:String(n),stats:{meshes:0,triangles:0,parts:[]}}}}const kn=window.__startupDebug;async function bd(s,e){const t=kn?.begin(s);try{const n=await e();return t&&kn?.end(t),n}catch(n){throw t&&kn?.end(t,n instanceof Error?n.message:String(n)),n}}const Fv=["qfront","magnet","eiraku","west-block","d03-center-gai-frontage","d05-centerbuilding-bk","ekimae","station-concourse","station-north","hachiko-policebox","station-service","station-west-viaduct","ginza-canopy","daiichi-kangin","center-gai-gate","center244","quattro","scramble-square","fukuras","station-southeast","plaza-kiosk","shibu-hachi-box","mark-city","shibuya109","takagi","bic-camera","cine-tower","east-mixeduse","hikarie","parco","stream","sakura-stage","d04-takeda","d04-coast","d04-attagirl","d11-minagawa031","d11-shu896","d11-thanks007","d04-okoge","d21-elevator21","d04-okura","d04-pandora-shared","d04-yokota","d04-boundary-duct","d11-unnamed327","d11-new-kca030","d11-zara","d11-momose880","d11-north-linear","d11-shared490491","d11-higashinihon035","d11-tower-records","d11-c80-neutral","d11-compact-bridge","d11-doctors791","d11-tokyu796","d11-matrix799","d11-da-tokyo790","d11-shibuya-flat802","d11-miyashita-building807","d11-koyuu814","d11-iwamoto032","d11-miyashita-approach","d11-miyashita-approach-furniture","d11-miyashita-ne-band","d11-miyashita-north","d11-miyashita-parkcenter","d11-miyashita-south","d11-miyashita-trellis","d11-miyashita-yokocho","d12-bldg-8a285210-inferred","d12-bldg-cee7364f-fill","d12-bldg-fa8eb7fc-inferred","d12-bldg-w355252207-inferred","d12-fpg-links-inferred","d12-nonbei-dfeba0c4-fill","d12-nonbei-w138670868-row","d12-nonbei-w138670882-row","d12-nonbei-w138670888-row","d12-nonbei-w138670891-row","d12-nonbei-w138670898-row","d12-parkside-kyodo-inferred","d12-magnet-lower","d12-eiraku-ground-frontage-roof","d12-eiraku-window-cassette-frames","d12-magnet-glassbox-roof-plant","d12-nonbei-w138670865-row","d12-lindt-composite","d12-marudai-composite","d12-old-kca040-composite","d12-triangle-composite","d12-toei-composite","d12-tokyu-rei-composite","d12-nonbei-w138670870-neutral","d16-inferred-neighborhood","d16-dogenzaka-tr-composite","d16-cosmo-composite","d16-kato-composite","d16-janpara-composite","d16-umehara-composite","d16-dogenzaka-corner-composite","d16-diem-composite","d16-inferred-hoarding","d17-markcity-ne-glass","d17-station-bridge-additions","d18-neighborhood-pack","d19-neighborhood-pack","d19-photo-frontage-pairs","d19-square-ab-composites","d19-fukuras-additions","d19-gloria-frontage","d20-neighborhood-pack","d21-neighborhood-pack","d21-roof-bridge-additions","d22-mufg-trust","d22-tokyo106","d22-district-pack","d22-hinaga-facade","d22-kiosk","d23-district-pack","d23-b3-canopy","d24-district-pack","d25-pola-upper","d26-w138589843-inferred","d27-naruse-inferred","d28-w136730028-inferred","d29-nagasaki-inferred"];async function kv(s,e,t,n="/street/props"){const i=new Ve;i.name="street:props";const r={ok:!0,root:i,errors:[],anchors:[],stats:{placed:0,skipped:0,triangles:0,draws:0}};try{const a=await e(`${n}/layout.json`),o=new Set;for(const c of a.placements){if(o.has(c.id)||!a.props[c.prop]||![...c.xy,c.yaw_deg].every(Number.isFinite)||!c.basis||!c.source_photo)throw new Error(`Invalid placement: ${c.id}`);o.add(c.id)}for(const[c,l]of Object.entries(a.props)){const h=a.placements.filter(d=>d.prop===c);if(h.length)try{const d=await s(`${n}/${l.file}`);d.updateMatrixWorld(!0);const u=new yt().setFromObject(d),f=u.getSize(new C),m=[f.x,f.z,f.y];if(!m.every((M,w)=>Number.isFinite(M)&&M>0&&Math.abs(M-l.size_m[w])<.02))throw new Error("Unexpected dimensions (metres required)");const v=[],g=[];for(const M of h){const w=new Ct().setFromAxisAngle(new C(0,1,0),M.yaw_deg*Math.PI/180),R=[];for(const P of[u.min.x,u.getCenter(new C).x,u.max.x])for(const I of[u.min.z,u.getCenter(new C).z,u.max.z]){const N=new C(P,0,I).applyQuaternion(w),B=t(M.xy[0]+N.x,-M.xy[1]+N.z);B!==null&&Number.isFinite(B)&&R.push(B)}const _=Math.max(...R)-Math.min(...R);if(R.length!==9||_>.06){r.stats.skipped++,r.errors.push(`${M.id}: missing or uneven ground`);continue}const T=Math.max(...R);v.push(new Ie().compose(new C(M.xy[0],T-u.min.y,-M.xy[1]),w,new C(1,1,1))),g.push({id:M.id,prop:c,xy:M.xy,yaw_deg:M.yaw_deg,ground:T,baseGap:_,size_m:m})}if(!v.length)continue;const p=new Ve;p.name=c;let y=0,A=0;const b=M=>{const w=M.clone();return w.name=`street_prop_${M.name}`,w};if(d.traverse(M=>{if(!M.isMesh)return;const w=M,R=Array.isArray(w.material)?w.material.map(b):b(w.material),_=new Ga(w.geometry,R,v.length);_.name=`${c}:${w.name}`,v.forEach((T,P)=>_.setMatrixAt(P,T.clone().multiply(w.matrixWorld))),_.castShadow=_.receiveShadow=!0,_.computeBoundingBox(),_.computeBoundingSphere(),p.add(_),y+=(w.geometry.index?.count??w.geometry.getAttribute("position").count)/3*v.length,A+=Array.isArray(R)?Math.max(1,w.geometry.groups.length):1}),!p.children.length)throw new Error("Empty prop");i.add(p),r.anchors.push(...g),r.stats.placed+=v.length,r.stats.triangles+=y,r.stats.draws+=A}catch(d){r.stats.skipped+=h.length,r.errors.push(`${c}: ${String(d)}`)}}}catch(a){r.errors.push(String(a))}return r.ok=r.errors.length===0,r}async function Uv(s,e="/ground"){const t=new Ve;t.name="ground:exterior";try{const n=await Promise.all(["west","middle","east"].map(async a=>{const o=await s(`${e}/exterior-${a}/exterior-${a}.glb`),c=zt(o);if(c.length)throw new Error(`${a}: ${c.join(", ")}`);for(const l of["ground_road","ground_sidewalk"])if(!o.getObjectByName(l))throw new Error(`${a}: missing ${l}`);return o}));let i=0,r=0;for(const a of n)a.traverse(o=>{const c=o;c.isMesh&&(c.castShadow=!1,c.receiveShadow=!0,i++,r+=(c.geometry.index?.count??c.geometry.getAttribute("position").count)/3)}),t.add(a);return{ok:!0,root:t,stats:{meshes:i,triangles:r,tiles:n.length}}}catch(n){return t.clear(),{ok:!1,root:t,error:String(n),stats:{meshes:0,triangles:0,tiles:0}}}}function Ov(s,e){if(!e)return!1;const t=s.getObjectByName("ground_fill");return t?(t.removeFromParent(),!0):!1}async function Ho(s,e,t=`/street/tactile-${e}/tactile-${e}.glb`){const n=new Ve;n.name=`street:tactile-${e}`;try{const i=await s(t),r=zt(i);if(r.length)throw new Error(r.join(", "));if(!i.getObjectByName(e==="extra"?"street_tactile":`street_tactile_${e}`))throw new Error("missing tactile supplement mesh");let a=0,o=0;return i.traverse(c=>{const l=c;l.isMesh&&(l.castShadow=!1,l.receiveShadow=!0,a++,o+=(l.geometry.index?.count??l.geometry.getAttribute("position").count)/3)}),n.add(i),{ok:!0,root:n,stats:{meshes:a,triangles:o}}}catch(i){return n.clear(),{ok:!1,root:n,error:String(i),stats:{meshes:0,triangles:0}}}}async function Bv(s,e="/street/plaza-facilities/plaza-facilities.glb"){const t=new Ve;t.name="street:facilities";try{const n=await s(e),i=zt(n);if(i.length)throw new Error(i.join(", "));if(!n.getObjectByName("street_plaza_facilities_housing"))throw new Error("missing facility mesh");let r=0,a=0;return n.traverse(o=>{const c=o;c.isMesh&&(c.castShadow=!1,c.receiveShadow=!0,r++,a+=(c.geometry.index?.count??c.geometry.getAttribute("position").count)/3)}),t.add(n),{ok:!0,root:t,stats:{meshes:r,triangles:a}}}catch(n){return t.clear(),{ok:!1,root:t,error:String(n),stats:{meshes:0,triangles:0}}}}async function zv(s,e="/ground/extension/extension.glb"){const t=new Ve;t.name="ground:extension";try{const n=await s(e),i=zt(n);if(i.length)throw new Error(i.join(", "));if(!n.getObjectByName("ground_fill_extension"))throw new Error("missing terrain mesh");let r=0,a=0;return n.traverse(o=>{const c=o;c.isMesh&&(c.castShadow=!1,c.receiveShadow=!0,r++,a+=(c.geometry.index?.count??c.geometry.getAttribute("position").count)/3)}),t.add(n),{ok:!0,root:t,stats:{meshes:r,triangles:a}}}catch(n){return t.clear(),{ok:!1,root:t,error:String(n),stats:{meshes:0,triangles:0}}}}async function Gv(s,e="/street/plaza-finish/plaza-finish.glb"){const t=new Ve;t.name="street:plaza";try{const n=await s(e),i=zt(n);if(i.length)throw new Error(i.join(", "));if(!n.getObjectByName("plaza_finish"))throw new Error("missing plaza mesh");let r=0,a=0;return n.traverse(o=>{const c=o;c.isMesh&&(c.castShadow=!1,c.receiveShadow=!0,r++,a+=(c.geometry.index?.count??c.geometry.getAttribute("position").count)/3)}),t.add(n),{ok:!0,root:t,stats:{meshes:r,triangles:a}}}catch(n){return t.clear(),{ok:!1,root:t,error:String(n),stats:{meshes:0,triangles:0}}}}async function Hv(s,e="/street/hachiko-surround/hachiko-surround.glb"){const t=new Ve;t.name="street:surround";try{const[n,i,r]=await Promise.all([s(e),s("/street/hachiko-surround/shrubs.glb"),s("/street/hachiko-surround/seating.glb")]);for(const l of[n,i,r]){const h=zt(l);if(h.length)throw new Error(h.join(", "))}if(!n.getObjectByName("street_surround"))throw new Error("missing surround mesh");const a=new Ve;a.name="surround:seating",a.position.set(11.568175521259887,0,48.68573220011713),a.rotation.y=35*Math.PI/180;for(const[l,h]of[["current_left_statue_local_origin",.4710693359375],["current_right_statue_local_origin",.4155540466308594]]){const d=r.getObjectByName(l);if(!d)throw new Error(`missing seating root: ${l}`);d.position.y=h}a.add(r),t.add(n,i,a);let o=0,c=0;return t.traverse(l=>{const h=l;h.isMesh&&(h.castShadow=!0,h.receiveShadow=!0,o++,c+=(h.geometry.index?.count??h.geometry.getAttribute("position").count)/3)}),{ok:!0,root:t,stats:{meshes:o,triangles:c}}}catch(n){return t.clear(),{ok:!1,root:t,error:String(n),stats:{meshes:0,triangles:0}}}}async function Vv(s,e,t="/street/hachiko-memorial/hachiko-memorial.glb"){const n=new Ve;n.name="street:memorial";try{const[i,r]=await Promise.all([s(t),e("/street/hachiko-memorial/placement.json")]),a=r;if(zt(i).length)throw new Error("invalid memorial GLB");if(!i.getObjectByName("hachiko_memorial_bilingual_v001"))throw new Error("missing memorial model");if(!Array.isArray(a.position)||a.position.length!==3||!a.position.every(Number.isFinite)||!Number.isFinite(a.yaw_deg)||a.uniform_scale!==1)throw new Error("invalid memorial placement");i.position.set(...a.position),i.rotation.y=a.yaw_deg*Math.PI/180;let o=0,c=0;return i.traverse(l=>{const h=l;h.isMesh&&(h.castShadow=!0,h.receiveShadow=!0,o++,c+=(h.geometry.index?.count??h.geometry.getAttribute("position").count)/3)}),n.add(i),{ok:!0,root:n,stats:{meshes:o,triangles:c}}}catch(i){return n.clear(),{ok:!1,root:n,error:String(i),stats:{meshes:0,triangles:0}}}}async function _d(s,e,t="/street/hachiko-rear-tree/hachiko-rear-tree.glb"){const n=new Ve;n.name="street:hachiko-rear-tree";try{const[i,r]=await Promise.all([s(t),e("/street/hachiko-rear-tree/placement.json")]),a=r,o=zt(i);if(o.length)throw new Error(o.join(", "));if(!i.getObjectByName("hachiko_rear_tree_candidate_v001"))throw new Error("missing rear tree model");if(!Array.isArray(a.position)||a.position.length!==3||!a.position.every(Number.isFinite)||!Number.isFinite(a.yaw_deg)||a.uniform_scale!==1)throw new Error("invalid rear tree placement");i.position.set(...a.position),i.rotation.y=a.yaw_deg*Math.PI/180;let c=0,l=0;return i.traverse(h=>{const d=h;d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0,c++,l+=(d.geometry.index?.count??d.geometry.getAttribute("position").count)/3)}),n.add(i),{ok:!0,root:n,stats:{meshes:c,triangles:l}}}catch(i){return n.clear(),{ok:!1,root:n,error:String(i),stats:{meshes:0,triangles:0}}}}function Wv(s,e){if(s.ok)for(const[t,n]of[["lottery",e.facilities],["finish",e.plaza],["a8",e.kiosk]])n&&s.root.children.some(i=>i.name===`fit:${t}`)&&(n.visible=!1)}async function xd(s,e){const t=new Ve;t.name="street:hachiko-fit";try{const n=await Promise.all(e.map(a=>s(`/street/hachiko-fit/${a}.glb`)));let i=0,r=0;for(const[a,o]of n.entries()){const c=zt(o,e[a]==="fence"?.1:1);if(c.length)throw Error(`${e[a]}: ${c.join(", ")}`);o.traverse(l=>{const h=l;h.isMesh&&(i++,r+=(h.geometry.index?.count??h.geometry.getAttribute("position").count)/3,h.receiveShadow=!0)}),o.name=`fit:${e[a]}`,t.add(o)}return{ok:!0,root:t,stats:{meshes:i,triangles:r}}}catch(n){return t.clear(),{ok:!1,root:t,error:String(n),stats:{meshes:0,triangles:0}}}}const vd={position:[11.568175521259887,.3852884863052187,48.68573220011713],yawDegrees:-65};async function qv(s,e="/street/hachiko/hachiko.glb"){const t=new Ve;t.name="street:hachiko";try{const n=await s(e),i=zt(n);if(i.length)throw new Error(i.join(", "));if(!n.getObjectByName("hachiko_uploaded_scan_candidate_v001"))throw new Error("missing complete hachiko scan");let r=0,a=0;if(n.traverse(o=>{const c=o;c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0,r++,a+=(c.geometry.index?.count??c.geometry.getAttribute("position").count)/3)}),r!==1||a!==85934)throw new Error("unexpected complete scan geometry");return t.position.set(...vd.position),t.rotation.y=vd.yawDegrees*Math.PI/180,t.add(n),{ok:!0,root:t,stats:{meshes:r,triangles:a}}}catch(n){return t.clear(),{ok:!1,root:t,error:String(n),stats:{meshes:0,triangles:0}}}}async function Xv(s,e="/street/drainage/drainage.glb"){const t=new Ve;t.name="street:drainage";try{const n=await s(e);if(!n.getObjectByName("street_drainage"))throw new Error("missing road cover mesh");let i=0,r=0;n.traverse(o=>{const c=o;if(!c.isMesh)return;const l=c.geometry.getAttribute("position");if(!l?.count)throw new Error("empty cover geometry");for(let h=0;h<l.count;h++)if(![l.getX(h),l.getY(h),l.getZ(h)].every(Number.isFinite))throw new Error("non-finite cover geometry");c.castShadow=!1,c.receiveShadow=!0,i++,r+=(c.geometry.index?.count??l.count)/3});const a=new yt().setFromObject(n).getSize(new C);if(!i||!r||![a.x,a.y,a.z].every(Number.isFinite)||Math.max(a.x,a.y,a.z)<.1||Math.max(a.x,a.y,a.z)>5)throw new Error("invalid cover extent");return t.add(n),{ok:!0,root:t,stats:{meshes:i,triangles:r}}}catch(n){return t.clear(),{ok:!1,root:t,error:String(n),stats:{meshes:0,triangles:0}}}}const jv=["map","normalMap","roughnessMap","metalnessMap","emissiveMap","aoMap","alphaMap","bumpMap","displacementMap","lightMap","specularMap","clearcoatMap","clearcoatNormalMap","clearcoatRoughnessMap","sheenColorMap","sheenRoughnessMap","transmissionMap","thicknessMap","iridescenceMap","iridescenceThicknessMap","anisotropyMap","specularIntensityMap","specularColorMap"];function yd(s){const e={geometries:new Set,materials:new Set,textures:new Set,sources:new Set};for(const t of s)t.traverse(n=>{const i=n;if(i.isMesh){e.geometries.add(i.geometry);for(const r of Array.isArray(i.material)?i.material:[i.material]){e.materials.add(r);const a=r;for(const o of jv){const c=a[o];c instanceof jt&&(e.textures.add(c),c.source&&e.sources.add(c.source))}}}});return e}class Md{counts=new Map;disposed={geometries:0,materials:0,textures:0,imageBitmaps:0};retain(e){for(const t of[...e.geometries,...e.materials,...e.textures,...e.sources])this.counts.set(t,(this.counts.get(t)??0)+1)}release(e,t){const n=i=>{const r=(this.counts.get(i)??0)-1;return r<=0?(this.counts.delete(i),!0):(this.counts.set(i,r),!1)};for(const i of e.geometries)n(i)&&(i.dispose(),this.disposed.geometries++);for(const i of e.materials)n(i)&&(i.dispose(),this.disposed.materials++);for(const i of e.textures)n(i)&&(i.dispose(),this.disposed.textures++);for(const i of e.sources)if(n(i)&&t){const r=i.data;r&&typeof r.close=="function"&&(r.close(),this.disposed.imageBitmaps++)}}get size(){return this.counts.size}holds(e){return this.counts.get(e)??0}}const Sd=(s,e,t)=>Math.hypot(Math.max(s[0]-e,0,e-s[2]),Math.max(s[1]-t,0,t-s[3]));class Kv{constructor(e,t){this.manifest=e,this.deps=t;for(const n of e.cells)this.entries.set(n.id,{cell:n,state:"unloaded",roots:[],owned:null,generation:0,abort:null,activatedAt:0,lastUsed:0,failures:0,retryAt:0,pendingUploads:[],lastError:null})}manifest;deps;entries=new Map;last=null;vel={x:0,y:0};registry=new Md;counters={loadsStarted:0,loadsAborted:0,staleDiscarded:0,failures:0,activations:0,deactivations:0,evictions:0,cacheHits:0,retries:0};update(e,t){const n=this.deps.now();if(this.last){const c=(n-this.last.t)/1e3;if(c>0){const l=Math.min(1,c/.3);this.vel.x+=((e-this.last.x)/c-this.vel.x)*l,this.vel.y+=((t-this.last.y)/c-this.vel.y)*l}}this.last={x:e,y:t,t:n};const i=this.manifest.lookAheadSeconds,r=e+this.vel.x*i,a=t+this.vel.y*i;let o=[...this.entries.values()].filter(c=>c.state==="loading").length;for(const c of this.entries.values()){const l=Math.min(Sd(c.cell.bounds,e,t),Sd(c.cell.bounds,r,a)),h=l<=c.cell.loadRadius,d=l>c.cell.unloadRadius;switch(c.state){case"unloaded":h&&o<this.manifest.maxConcurrentLoads&&(this.startLoad(c),o++);break;case"failed":d?(c.failures=0,c.state="unloaded"):h&&c.failures<=this.manifest.retryDelaysMs.length&&n>=c.retryAt&&o<this.manifest.maxConcurrentLoads&&(this.counters.retries++,this.startLoad(c),o++);break;case"loading":d&&this.abortLoad(c);break;case"warming":if(d){this.toCache(c,n);break}for(let u=0;u<this.manifest.texturesPerUpdate&&c.pendingUploads.length;u++)this.deps.uploadTexture?.(c.pendingUploads.shift());c.pendingUploads.length||(c.state="ready",d?this.toCache(c,n):this.activate(c,n));break;case"ready":h&&(this.counters.cacheHits++,this.activate(c,n));break;case"active":c.lastUsed=n,d&&n-c.activatedAt>=this.manifest.minActiveMs&&this.deactivate(c,n);break}}}startLoad(e){const t=++e.generation,n=new AbortController;e.abort=n,e.state="loading",e.lastError=null,this.counters.loadsStarted++,this.deps.log?.("load",e.cell,{generation:t}),this.deps.loadGroup(e.cell,n.signal).then(i=>{if(t!==e.generation||e.state!=="loading"){this.counters.staleDiscarded++,this.disposeRoots(i,yd(i)),this.deps.release?.(i,e.cell),this.deps.log?.("stale",e.cell,{generation:t});return}const r=yd(i);this.registry.retain(r),e.roots=i,e.owned=r,e.abort=null,this.deps.prepare(i,e.cell),e.pendingUploads=[...r.textures],e.state="warming"},i=>{if(t!==e.generation)return;e.abort=null,e.failures++,this.counters.failures++,e.lastError=i instanceof Error?i.message:String(i);const r=this.manifest.retryDelaysMs;e.retryAt=this.deps.now()+(r[Math.min(e.failures-1,r.length-1)]??0),e.state="failed",this.deps.log?.("failed",e.cell,e.lastError)})}abortLoad(e){e.generation++,e.abort?.abort(),e.abort=null,e.state="unloaded",this.counters.loadsAborted++,this.deps.log?.("abort",e.cell)}activate(e,t){this.deps.attach(e.roots,e.cell),this.deps.showProxy(e.cell,!1),e.state="active",e.activatedAt=t,e.lastUsed=t,this.counters.activations++,this.deps.log?.("active",e.cell)}deactivate(e,t){this.deps.showProxy(e.cell,!0),this.deps.detach(e.roots,e.cell),this.counters.deactivations++,this.toCache(e,t)}toCache(e,t){e.state="ready",e.lastUsed=t;const n=[...this.entries.values()].filter(i=>i.state==="ready").sort((i,r)=>i.lastUsed-r.lastUsed);for(;n.length>this.manifest.cacheGroups;)this.evict(n.shift())}evict(e){const t=this.manifest.releaseMode==="full";e.owned&&this.registry.release(e.owned,t);for(const n of e.roots)n.removeFromParent();if(t){for(const n of e.roots)n.clear();this.deps.release?.(e.roots,e.cell)}e.roots=[],e.owned=null,e.pendingUploads=[],e.state="unloaded",this.counters.evictions++,this.deps.log?.("evict",e.cell)}disposeRoots(e,t){const n=new Md;n.retain(t),n.release(t,!0);for(const i of Object.keys(n.disposed))this.registry.disposed[i]+=n.disposed[i];for(const i of e)i.removeFromParent(),i.clear()}settled(){return[...this.entries.values()].every(e=>e.state!=="loading"&&e.state!=="warming")}liveRoots(){return[...this.entries.values()].flatMap(e=>["active","ready","warming"].includes(e.state)?e.roots:[])}snapshot(){return{cells:[...this.entries.values()].map(e=>({id:e.cell.id,state:e.state,generation:e.generation,failures:e.failures,lastError:e.lastError,roots:e.roots.length,owned:e.owned?{geometries:e.owned.geometries.size,materials:e.owned.materials.size,textures:e.owned.textures.size}:null})),velocity:{...this.vel},registrySize:this.registry.size,disposed:{...this.registry.disposed},counters:{...this.counters}}}}const wd=["ground_road","ground_intersection","ground_sidewalk","ground_kerb","ground_marking","ground_fill"];async function Yv(s,e="/ground/core/ground_core.glb"){const t=new Ve;t.name="ground:core";try{const n=await s(e),i=zt(n);if(i.length)throw new Error(`asset check failed: ${i.slice(0,3).join("; ")}`);const r=new Set;let a=0,o=0;n.traverse(l=>{r.add(l.name);const h=l;if(!h.isMesh)return;a++,h.receiveShadow=!0,h.castShadow=h.name.startsWith("ground_kerb");const d=h.geometry.getAttribute("position");o+=h.geometry.index?h.geometry.index.count/3:d.count/3});const c=wd.filter(l=>![...r].some(h=>h===l||h.startsWith(l+"_")||h.startsWith(l+".")));return t.add(n),{ok:!0,root:t,missing:c,stats:{meshes:a,triangles:Math.round(o)}}}catch(n){return{ok:!1,root:t,error:n instanceof Error?n.message:String(n),missing:[...wd],stats:{meshes:0,triangles:0}}}}async function Jv(s,e="/street/core/street_projected.glb"){const t=new Ve;t.name="street:experimental";try{const[n,i]=await Promise.all([s.loadGlb(e),s.loadJson("/street/core/projected.json")]),r=zt(n);if(r.length)throw new Error(r.join("; "));for(const l of["street_provisional_pole","street_lamp_glass","street_signal_body","street_signal_green","street_sign_blue","street_sign_red"])if(!n.getObjectByName(l))throw new Error(`missing experimental part: ${l}`);const a=i.camera;if(!a||a.pos.length!==3||![...a.pos,a.yaw,a.pitch,a.roll,a.fpx,a.W,a.H].every(Number.isFinite)||a.fpx<=0||a.W<=0||a.H<=0)throw new Error("invalid reference camera");if(i.status!=="experimental_only"||i.light_points.length!==3)throw new Error("invalid experimental metadata");for(const l of i.light_points)if(l.status!=="provisional"||l.position.length!==3||!l.position.every(Number.isFinite)||Math.abs(l.position[0])>55||Math.abs(l.position[2])>55||l.position[1]<1||l.position[1]>15||!Number.isFinite(l.intensity_cd)||l.intensity_cd<0||l.intensity_cd>1e4)throw new Error("invalid lamp placement");t.add(n);const o=i.light_points.map(l=>{const h=new xl(16770751,0,40,Math.PI/3,.6,2);return h.name=l.id,h.position.fromArray(l.position),h.target.position.set(l.position[0],-.6,l.position[2]),h.castShadow=!1,t.add(h,h.target),h}),c=(l,h=!0)=>{o.forEach((d,u)=>{d.intensity=l==="night"&&h?i.light_points[u].intensity_cd:0}),n.traverse(d=>{const u=d;if(u.isMesh)for(const f of Array.isArray(u.material)?u.material:[u.material])f instanceof Zs&&(f.name==="street_lamp_glass"?(f.emissive.setHex(16770751),f.emissiveIntensity=l==="night"&&h?8:0):f.name==="street_signal_green"&&(f.emissive.setHex(2162512),f.emissiveIntensity=2))})};return c("day"),{ok:!0,root:t,lights:o,metadata:i,setTime:c}}catch(n){return t.clear(),{ok:!1,root:t,lights:[],error:n instanceof Error?n.message:String(n),setTime(){}}}}const $v=["street_concrete","street_stair_well","street_roof","street_panel","street_glass","street_sign_blue","street_sign_white","street_steel","street_signal_body","street_signal_green","street_signal_red","street_rail","street_lamp_glass","street_tree_bark","street_tree_leaves","street_tree_leaves_light"],Zv=["street_tree_bark","street_tree_leaves","street_tree_leaves_light"],Qv=120;async function ey(s,e="/street/core/street_core.glb",t=!0){const n=new Ve;n.name="street:core";try{const i=await s(e),r=zt(i);if(r.length)throw new Error(`asset check failed: ${r.slice(0,3).join("; ")}`);const a=$v.filter(f=>!i.getObjectByName(f));if(a.length)throw new Error(`missing street parts: ${a.join(", ")}`);if(!t)for(const f of Zv){const m=i.getObjectByName(f);m.parent?.remove(m)}let o=0,c=0;const l=[];i.traverse(f=>{f.name.startsWith("light_")&&l.push(f);const m=f;m.isMesh&&(o++,m.castShadow=!/glass|signal|sign_/.test(m.name),m.receiveShadow=!0,c+=(m.geometry.index?.count??m.geometry.getAttribute("position").count)/3)}),n.add(i);const h=l.map(f=>{const m=new uu(16768174,0,32,2);return m.name=f.name,m.castShadow=!1,f.add(m),m}),d=i.getObjectByName("street_lamp_glass").material,u=f=>{for(const m of h)m.intensity=f==="night"?Qv:0;d.emissive.setHex(16768174),d.emissiveIntensity=f==="night"?3:0};return u("day"),{ok:!0,root:n,lights:h,setTime:u,walkSurfaces:[i.getObjectByName("street_concrete")],stats:{meshes:o,triangles:Math.round(c)}}}catch(i){return n.clear(),{ok:!1,root:n,lights:[],setTime(){},walkSurfaces:[],error:i instanceof Error?i.message:String(i),stats:{meshes:0,triangles:0}}}}async function ty(s,e="/street/tactile/tactile.glb"){const t=new Ve;t.name="street:tactile";try{const n=await s(e),i=zt(n);if(i.length)throw new Error(i.join(", "));if(!n.getObjectByName("street_tactile"))throw new Error("missing tactile mesh");let r=0,a=0;return n.traverse(o=>{const c=o;c.isMesh&&(c.castShadow=!1,c.receiveShadow=!0,r++,a+=(c.geometry.index?.count??c.geometry.getAttribute("position").count)/3)}),t.add(n),{ok:!0,root:t,stats:{meshes:r,triangles:a}}}catch(n){return t.clear(),{ok:!1,root:t,error:String(n),stats:{meshes:0,triangles:0}}}}const ny={ctx_wall_ribbon_a:13225166,ctx_wall_ribbon_b:10989752,ctx_wall_punched_a:14208959,ctx_wall_punched_b:11775139};async function iy(s,e="/context/core/context_core.glb",t=!0,n=i=>new hu().loadAsync(i)){const i=new Ve;i.name="context:core";try{const r=await s(e),a=zt(r);if(a.length)throw new Error(`asset check failed: ${a.slice(0,3).join("; ")}`);if(!r.getObjectByName("core__ctx_roof"))throw new Error("missing core__ctx_roof");const o={ribbon:null,punched:null};await Promise.all(Object.keys(o).map(async u=>{try{const f=await n(e.replace(/[^/]+$/,`facade_${u}_emit.png`));f.colorSpace=qt,f.flipY=!1,o[u]=f}catch{o[u]=null}}));let c=0,l=0;const h=[];r.traverse(u=>{const f=u;if(!f.isMesh)return;if(!t&&f.name.startsWith("station__")){f.visible=!1;return}c++,f.castShadow=f.receiveShadow=!0,l+=(f.geometry.index?.count??f.geometry.getAttribute("position").count)/3;const m=f.material,v=ny[m.name];v!==void 0&&(m.color=new De(v),h.push(m))}),i.add(r);const d=u=>{for(const f of h){const m=o[f.name.includes("ribbon")?"ribbon":"punched"];f.emissiveMap=u==="night"?m:null,f.emissive.setHex(u==="night"&&m?16766880:0),f.emissiveIntensity=u==="night"?.55:0,f.needsUpdate=!0}};return d("day"),{ok:!0,root:i,setTime:d,stats:{meshes:c,triangles:Math.round(l)}}}catch(r){return i.clear(),{ok:!1,root:i,setTime(){},error:r instanceof Error?r.message:String(r),stats:{meshes:0,triangles:0}}}}const sy={glass:255,sign:16776960,interior:16711935,wall:16711680,road:65280,sidewalk:65535,kerb:8421376,marking:16777215,fill:32896,vegetation:32768,furniture:8388736},ry=/(letters|logo|screen|led|banner|wrap|sign|poster|q_bar|tsutaya_face|sb_green|menu|amaguri|acom|lake|aiful|_t$|mark|label|qs_eye)/,ay=/(interior|shop_light|ceil_light|ceiling|goods|shelf|books|pendant|floor|skin|hair|blind|wood$|lamp_head|cloth|denim)/;function Ru(s,e,t,n=!1){const i=s.name||"";if(e.startsWith("A28_"))return/Dark_glazing/i.test(i)?"glass":/Lottery_red_original_lettering|Authored_Baokuji_wording_atlas/i.test(i)?"sign":"furniture";if(e.startsWith("A8_")&&/Glazed_bay/i.test(i))return"glass";if(e.startsWith("H_SF_011_"))return"furniture";if(i.startsWith("street_tree_")||i.startsWith("A08_original_"))return"vegetation";if(i.startsWith("street_"))return"furniture";if(e.startsWith("ground_")||i.startsWith("ground_"))return i.includes("marking")||e.startsWith("ground_marking")?"marking":i.includes("kerb")||e.startsWith("ground_kerb")?"kerb":i.includes("fill")||e.startsWith("ground_fill")?"fill":i.includes("sidewalk")||i.includes("island")||e.startsWith("ground_sidewalk")?"sidewalk":"road";const r=t?.[i]?.kind;return r==="glass"||/glass/.test(i)?"glass":r==="led"||n||ry.test(i)?"sign":ay.test(i)?"interior":"wall"}function Ot(s,e){const t=new Map,n=i=>(t.has(i)||t.set(i,new Wn({color:new De(sy[i]),toneMapped:!1})),t.get(i));s.traverse(i=>{const r=i;if(!r.isMesh)return;let a=r,o=!1;for(;a;)/:signs/.test(a.name)&&(o=!0),a=a.parent;const l=(Array.isArray(r.material)?r.material:[r.material]).map(h=>n(Ru(h,r.name,e,o)));r.material=Array.isArray(r.material)?l:l[0],r.castShadow=r.receiveShadow=!1})}const oy={dayExposure:.85,nightExposure:1.35,glassEnv:1.6,wallEnv:.5,road:.045,sidewalk:.3,nightGround:.5,nightSign:1};function cy(s,e=oy){const t={...e};for(const n of(s??"").split(",").filter(Boolean)){const[i,r]=n.split(":"),a=Number(r);i in t&&Number.isFinite(a)&&(t[i]=a)}return t}function Zt(s,e,t,n,i){s.traverse(r=>{const a=r;if(!a.isMesh)return;let o=a,c=!1;for(;o;)/:signs/.test(o.name)&&(c=!0),o=o.parent;for(const l of Array.isArray(a.material)?a.material:[a.material]){const h=l;if(!("envMapIntensity"in h))continue;const d=Ru(l,a.name,n,c);if((d==="glass"||d==="wall")&&i)h.envMap=i.map,h.envMapIntensity=(d==="glass"?t.glassEnv:t.wallEnv)*i.intensity,h.needsUpdate=!0;else if((d==="road"||d==="sidewalk")&&!/island/.test(l.name)){const u=d==="road"?t.road:t.sidewalk;h.userData.lookBase||(h.userData.lookBase=h.color.clone());const f=h.userData.lookBase,m=(f.r+f.g+f.b)/3||1;h.color.setRGB(f.r/m*u,f.g/m*u,f.b/m*u),h.emissive.copy(h.color).multiplyScalar(e==="night"?t.nightGround:0),h.emissiveIntensity=1}else d==="sign"&&e==="night"&&(h.emissiveIntensity*=t.nightSign)}})}class ly extends Hp{constructor(e){super(e),this.type=sn}parse(e){const a=function(_,T){switch(_){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(T||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(T||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(T||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(T||""))}},d=function(_,T,P){T=T||1024;let N=_.pos,B=-1,L=0,G="",S=String.fromCharCode.apply(null,new Uint16Array(_.subarray(N,N+128)));for(;0>(B=S.indexOf(`
`))&&L<T&&N<_.byteLength;)G+=S,L+=S.length,N+=128,S=String.fromCharCode.apply(null,new Uint16Array(_.subarray(N,N+128)));return-1<B?(_.pos+=L+B+1,G+S.slice(0,B)):!1},u=function(_){const T=/^#\?(\S+)/,P=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*FORMAT=(\S+)\s*$/,B=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,L={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let G,S;for((_.pos>=_.byteLength||!(G=d(_)))&&a(1,"no header found"),(S=G.match(T))||a(3,"bad initial token"),L.valid|=1,L.programtype=S[1],L.string+=G+`
`;G=d(_),G!==!1;){if(L.string+=G+`
`,G.charAt(0)==="#"){L.comments+=G+`
`;continue}if((S=G.match(P))&&(L.gamma=parseFloat(S[1])),(S=G.match(I))&&(L.exposure=parseFloat(S[1])),(S=G.match(N))&&(L.valid|=2,L.format=S[1]),(S=G.match(B))&&(L.valid|=4,L.height=parseInt(S[1],10),L.width=parseInt(S[2],10)),L.valid&2&&L.valid&4)break}return L.valid&2||a(3,"missing format specifier"),L.valid&4||a(3,"missing image size specifier"),L},f=function(_,T,P){const I=T;if(I<8||I>32767||_[0]!==2||_[1]!==2||_[2]&128)return new Uint8Array(_);I!==(_[2]<<8|_[3])&&a(3,"wrong scanline width");const N=new Uint8Array(4*T*P);N.length||a(4,"unable to allocate buffer space");let B=0,L=0;const G=4*I,S=new Uint8Array(4),U=new Uint8Array(G);let J=P;for(;J>0&&L<_.byteLength;){L+4>_.byteLength&&a(1),S[0]=_[L++],S[1]=_[L++],S[2]=_[L++],S[3]=_[L++],(S[0]!=2||S[1]!=2||(S[2]<<8|S[3])!=I)&&a(3,"bad rgbe scanline format");let z=0,j;for(;z<G&&L<_.byteLength;){j=_[L++];const se=j>128;if(se&&(j-=128),(j===0||z+j>G)&&a(3,"bad scanline data"),se){const ae=_[L++];for(let it=0;it<j;it++)U[z++]=ae}else U.set(_.subarray(L,L+j),z),z+=j,L+=j}const Z=I;for(let se=0;se<Z;se++){let ae=0;N[B]=U[se+ae],ae+=I,N[B+1]=U[se+ae],ae+=I,N[B+2]=U[se+ae],ae+=I,N[B+3]=U[se+ae],B+=4}J--}return N},m=function(_,T,P,I){const N=_[T+3],B=Math.pow(2,N-128)/255;P[I+0]=_[T+0]*B,P[I+1]=_[T+1]*B,P[I+2]=_[T+2]*B,P[I+3]=1},v=function(_,T,P,I){const N=_[T+3],B=Math.pow(2,N-128)/255;P[I+0]=Yr.toHalfFloat(Math.min(_[T+0]*B,65504)),P[I+1]=Yr.toHalfFloat(Math.min(_[T+1]*B,65504)),P[I+2]=Yr.toHalfFloat(Math.min(_[T+2]*B,65504)),P[I+3]=Yr.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;const p=u(g),y=p.width,A=p.height,b=f(g.subarray(g.pos),y,A);let M,w,R;switch(this.type){case An:R=b.length/4;const _=new Float32Array(R*4);for(let P=0;P<R;P++)m(b,P*4,_,P*4);M=_,w=An;break;case sn:R=b.length/4;const T=new Uint16Array(R*4);for(let P=0;P<R;P++)v(b,P*4,T,P*4);M=T,w=sn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:A,data:M,header:p.string,gamma:p.gamma,exposure:p.exposure,type:w,colorSpace:Cn,minFilter:vt,magFilter:vt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}}function Hn([s,e],t=0){return new C(s,t,-e)}class hy{constructor(e,t,n=2048){this.renderer=e,this.scene=t,this.sun.castShadow=!0,this.sun.shadow.mapSize.set(n,n);const i=this.sun.shadow.camera;i.left=-60,i.right=60,i.top=60,i.bottom=-60,i.near=1,i.far=400,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.03,this.group.add(this.sun,this.sun.target,this.hemi,this.ambient),t.add(this.group)}renderer;scene;group=new Ve;sun=new fu(16773856,6);hemi=new Vp(12110056,4867648,.6);ambient=new jp(16777215,0);floods=[];sets={};mode="day";floodIntensity=3e3;placeSun(e){const t=e.sun.azimuth_deg*Math.PI/180,n=e.sun.elevation_deg*Math.PI/180,i=new C(Math.sin(t)*Math.cos(n),Math.sin(n),-Math.cos(t)*Math.cos(n)),r=e.arcMid?Hn(e.arcMid,20).add(new C(-6,0,-12)):Hn(Wc(e),20);this.sun.target.position.copy(r),this.sun.position.copy(r).addScaledVector(i,200)}placeFloods(e){if(!ja(e))return;const t=Hn(e.arcMid),n=Hn(e.arcNormal).normalize(),i=[[e.arcEnds[0],e.floodlights.arcStart_m],[e.arcEnds[1],e.floodlights.arcEnd_m]];for(const[r,[a,o]]of i){const c=Hn(r),l=c.clone().sub(t).setY(0).normalize();for(let h=0;h<2;h++){const d=a+(o-a)*h,u=new xl(16769728,0,55,Math.PI/7,.8,1.4);u.position.copy(c).addScaledVector(l,3).addScaledVector(n,2).setY(d),u.target.position.copy(c).addScaledVector(n,-14).addScaledVector(l,-1).setY(d-16),this.group.add(u,u.target),this.floods.push(u)}}}async loadEnvironments(e="/env"){const t=new kc(this.renderer),n=new ly,i=async o=>{const c=await n.loadAsync(`${e}/${o}`);return c.mapping=Sa,{background:c,env:t.fromEquirectangular(c).texture}},[r,a]=await Promise.allSettled([i("wide_street_01_1k.hdr"),i("shanghai_bund_1k.hdr")]);return r.status==="fulfilled"&&(this.sets.day=r.value),a.status==="fulfilled"&&(this.sets.night=a.value),t.dispose(),{day:r.status,night:a.status}}apply(e,t=[]){this.mode=e;const n=e==="day",i=this.sets[e];this.scene.environment=i?.env??null,this.scene.environmentIntensity=n?.45:.06,this.scene.background=new De(n?4157365:731768),this.sun.intensity=n?6:0,this.sun.castShadow=n,this.hemi.intensity=n?.6:.08,this.hemi.color.set(n?12110056:3166368);for(const r of this.floods)r.intensity=n?0:this.floodIntensity;this.renderer.toneMappingExposure=n?1:1.35,this.prepareMeshes(t)}prepareMeshes(e){for(const t of e)t.traverse(n=>{const i=n;if(i.isMesh){i.castShadow=i.receiveShadow=!0;for(const r of Array.isArray(i.material)?i.material:[i.material]){const a=r;a.transparent&&(a.depthWrite=!1,i.castShadow=!1)}}})}}const Ed={type:"change"},El={type:"start"},Cu={type:"end"},xa=new Js,Td=new Ai,dy=Math.cos(70*Yd.DEG2RAD),Ht=new C,Sn=2*Math.PI,dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vo=1e-6;class uy extends mu{constructor(e,t=null){super(e,t),this.state=dt.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Os.ROTATE,MIDDLE:Os.DOLLY,RIGHT:Os.PAN},this.touches={ONE:Is.ROTATE,TWO:Is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Ct,this._lastTargetPosition=new C,this._quat=new Ct().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ih,this._sphericalDelta=new Ih,this._scale=1,this._panOffset=new C,this._rotateStart=new we,this._rotateEnd=new we,this._rotateDelta=new we,this._panStart=new we,this._panEnd=new we,this._panDelta=new we,this._dollyStart=new we,this._dollyEnd=new we,this._dollyDelta=new we,this._dollyDirection=new C,this._mouse=new we,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=py.bind(this),this._onPointerDown=fy.bind(this),this._onPointerUp=my.bind(this),this._onContextMenu=My.bind(this),this._onMouseWheel=_y.bind(this),this._onKeyDown=xy.bind(this),this._onTouchStart=vy.bind(this),this._onTouchMove=yy.bind(this),this._onMouseDown=gy.bind(this),this._onMouseMove=by.bind(this),this._interceptControlDown=Sy.bind(this),this._interceptControlUp=wy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=dt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ed),this.update(),this.state=dt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Ht.copy(t).sub(this.target),Ht.applyQuaternion(this._quat),this._spherical.setFromVector3(Ht),this.autoRotate&&this.state===dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Sn:n>Math.PI&&(n-=Sn),i<-Math.PI?i+=Sn:i>Math.PI&&(i-=Sn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ht.setFromSpherical(this._spherical),Ht.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ht.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new C(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(xa.origin.copy(this.object.position),xa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xa.direction))<dy?this.object.lookAt(this.target):(Td.setFromNormalAndCoplanarPoint(this.object.up,this.target),xa.intersectPlane(Td,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Vo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vo||this._lastTargetPosition.distanceToSquared(this.target)>Vo?(this.dispatchEvent(Ed),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Sn/60*this.autoRotateSpeed*e:Sn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ht.setFromMatrixColumn(t,0),Ht.multiplyScalar(-e),this._panOffset.add(Ht)}_panUp(e,t){this.screenSpacePanning===!0?Ht.setFromMatrixColumn(t,1):(Ht.setFromMatrixColumn(t,0),Ht.crossVectors(this.object.up,Ht)),Ht.multiplyScalar(e),this._panOffset.add(Ht)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ht.copy(i).sub(this.target);let r=Ht.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new we,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function fy(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function py(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function my(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cu),this.state=dt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function gy(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Os.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=dt.DOLLY;break;case Os.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=dt.ROTATE}break;case Os.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=dt.PAN}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(El)}function by(s){switch(this.state){case dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function _y(s){this.enabled===!1||this.enableZoom===!1||this.state!==dt.NONE||(s.preventDefault(),this.dispatchEvent(El),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Cu))}function xy(s){this.enabled!==!1&&this._handleKeyDown(s)}function vy(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Is.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=dt.TOUCH_ROTATE;break;case Is.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=dt.TOUCH_PAN;break;default:this.state=dt.NONE}break;case 2:switch(this.touches.TWO){case Is.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=dt.TOUCH_DOLLY_PAN;break;case Is.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=dt.TOUCH_DOLLY_ROTATE;break;default:this.state=dt.NONE}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(El)}function yy(s){switch(this._trackPointer(s),this.state){case dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=dt.NONE}}function My(s){this.enabled!==!1&&s.preventDefault()}function Sy(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wy(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Cs=new Ii(0,0,0,"YXZ"),Ps=new C,Ey={type:"change"},Ty={type:"lock"},Ay={type:"unlock"},Ad=.002,Rd=Math.PI/2;class Ry extends mu{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Cy.bind(this),this._onPointerlockChange=Py.bind(this),this._onPointerlockError=Dy.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;Ps.setFromMatrixColumn(t.matrix,0),Ps.crossVectors(t.up,Ps),t.position.addScaledVector(Ps,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;Ps.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(Ps,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function Cy(s){if(this.enabled===!1||this.isLocked===!1)return;const e=this.object;Cs.setFromQuaternion(e.quaternion),Cs.y-=s.movementX*Ad*this.pointerSpeed,Cs.x-=s.movementY*Ad*this.pointerSpeed,Cs.x=Math.max(Rd-this.maxPolarAngle,Math.min(Rd-this.minPolarAngle,Cs.x)),e.quaternion.setFromEuler(Cs),this.dispatchEvent(Ey)}function Py(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(Ty),this.isLocked=!0):(this.dispatchEvent(Ay),this.isLocked=!1)}function Dy(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const wi=1.6,Cd=.35;class Ly{constructor(e,t){this.camera=e,this.orbit=new uy(e,t),this.orbit.enableDamping=!0,this.orbit.maxPolarAngle=Math.PI*.495,this.orbit.minDistance=8,this.orbit.maxDistance=600,this.walk=new Ry(e,t),t.addEventListener("click",()=>{this.mode==="walk"&&!this.walk.isLocked&&this.walk.lock()}),addEventListener("keydown",n=>{if(this.actor){if(n.code==="Escape"&&this.mode==="walk"&&this.walk.isLocked){this.clearInput(),this.walk.unlock();return}const i=n.target;if(i?.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(i?.tagName??"")||this.mode!=="walk"||!this.walk.isLocked||this.inputSuspended||n.repeat&&!this.keys.has(n.code))return;n.code==="KeyB"&&!n.repeat&&!this.keys.has(n.code)&&(this.boxPressed=!0)}this.keys.add(n.code)}),addEventListener("keyup",n=>this.keys.delete(n.code)),addEventListener("blur",()=>{this.clearInput(),this.inputSuspended=!0}),addEventListener("focus",()=>{this.inputSuspended=!1}),this.walk.addEventListener("unlock",()=>{this.actor&&this.clearInput()}),t.ownerDocument.addEventListener("visibilitychange",()=>{this.inputSuspended=t.ownerDocument.hidden,this.actor&&this.inputSuspended&&this.clearInput()})}camera;mode="orbit";orbit;walk;keys=new Set;ray=new qa;obstacles=[];ground=[];projectionOverride=!1;actor;actorEye=new C;boxPressed=!1;inputSuspended=!1;fitActive=!1;clearInput(){this.keys.clear(),this.boxPressed=!1}attachActor(e,t=6.5,n=2){if(this.actor)throw new Error("Only one walking actor is supported");const i=this.groundAt(t,n,5);if(i===null&&this.ground.length)throw new Error("No ground at person spawn");this.clearInput(),this.actor=e,this.actorEye.set(t,(i??0)+wi,n),e.root.position.copy(this.actorEye).y-=wi,this.mode==="walk"&&(this.actorEye.copy(this.camera.position),e.root.position.copy(this.actorEye).y-=wi,this.applyActorInitialPitch(),this.followActor())}refreshActorCamera(){this.mode==="walk"&&(this.applyActorInitialPitch(),this.followActor())}applyActorInitialPitch(){this.actor?.initialWalkPitch!==void 0&&(this.camera.rotation.reorder("YXZ"),this.camera.rotation.x=this.actor.initialWalkPitch)}followActor(){if(!this.actor)return;this.actor.root.position.copy(this.actorEye).y-=wi;const e=new C;this.camera.getWorldDirection(e);const t=this.actor.cameraFrame?.(this.camera.aspect),n=t?t.center.clone().sub(this.actorEye).addScaledVector(e,-t.distance).addScaledVector(new C(1,0,0).applyQuaternion(this.camera.quaternion),t.shoulder):e.multiplyScalar(-3.2).add(new C(0,.9-wi,0));t&&this.camera.fov!==t.fov&&(this.camera.fov=t.fov,this.camera.updateProjectionMatrix()),this.ray.set(this.actorEye,n.clone().normalize()),this.ray.far=n.length();const i=this.ray.intersectObjects([...this.obstacles,...this.ground],!0)[0];i&&n.setLength(Math.max(.15,i.distance-.2)),this.camera.position.copy(this.actorEye).add(n),this.actor.root.visible=n.length()>.65}clearBetweenFeet(e,t){const n=e.clone().add(new C(0,1,0)),i=t.clone().add(new C(0,1,0));for(const[r,a]of[[n,i],[i,n]]){const o=a.clone().sub(r),c=o.length();if(!(c<1e-6)&&(this.ray.set(r,o.divideScalar(c)),this.ray.far=c,this.ray.intersectObjects(this.obstacles,!0).length))return!1}return!0}resetActorPosition(e){this.actor&&(this.clearInput(),this.walk.isLocked&&this.walk.unlock(),this.actorEye.copy(e).y+=wi,this.actor.root.position.copy(e),this.followActor())}setObstacles(e){this.obstacles=e}setGround(e){this.ground=e}groundY(e,t){return this.groundAt(e,t)??0}groundAt(e,t,n=80){if(!this.ground.length)return null;this.ray.set(new C(e,n,t),new C(0,-1,0)),this.ray.far=200;const i=this.ray.intersectObjects(this.ground,!0)[0];return i?i.point.y:null}stepTo(e,t,n){const i=e.y-wi;for(const o of[.25,.5,1.3])if(this.ray.set(e.clone().setY(i+o),t),this.ray.far=n+.4,this.ray.intersectObjects(this.obstacles,!0).length)return null;const r=e.clone().addScaledVector(t,n),a=this.ground.length?this.groundAt(r.x,r.z,i+Cd+.05):0;return a===null||a-i>Cd?null:r.setY(a+wi)}frameBuilding(e){if(this.clearProjectionOverride(),!ja(e)){const i=Hn(Wc(e));this.orbit.target.copy(i).setY(18),this.camera.position.copy(i).add(new C(-55,30,60)),this.orbit.update();return}const t=Hn(e.arcMid),n=Hn(e.arcNormal).normalize();this.orbit.target.copy(t).addScaledVector(n,-12).setY(24),this.camera.position.copy(t).addScaledVector(n,62).add(new C(22,12,0)),this.orbit.update()}setMode(e,t){if(this.actor&&this.clearInput(),this.mode=e,this.actor&&(this.actor.root.visible=!0),this.orbit.enabled=e==="orbit",e==="walk"){this.clearProjectionOverride();const n=Hn(t.arcMid??Wc(t)),i=t.arcNormal?Hn(t.arcNormal).normalize():new C(-.6,0,.8);this.camera.position.copy(n).addScaledVector(i,18),this.camera.position.setY(this.groundY(this.camera.position.x,this.camera.position.z)+wi),this.camera.lookAt(n.clone().setY(this.actor?this.camera.position.y:12)),this.actor&&(this.actor.canRelocate?.()!==!1&&this.actorEye.copy(this.camera.position),this.applyActorInitialPitch(),this.followActor())}else this.walk.isLocked&&this.walk.unlock(),this.actor?.cameraFrame&&(this.camera.fov=55,this.camera.updateProjectionMatrix()),this.frameBuilding(t)}q032View(e){if(!ja(e))return;const t=e.cameraQ032,n=e.arcMid,i=e.arcNormal,r=[-i[1],i[0]],a=[n[0]+i[0]*t.D+r[0]*t.lat,n[1]+i[1]*t.D+r[1]*t.lat],o=t.yaw*Math.PI/180,c=[-(i[0]*Math.cos(o)+r[0]*Math.sin(o)),-(i[1]*Math.cos(o)+r[1]*Math.sin(o))];this.setMode("orbit",e),this.orbit.enabled=!1;const l=wl(e);this.camera.position.copy(Hn(a,t.height_m+l)),this.camera.fov=2*Math.atan(t.H/2/t.fpx)*180/Math.PI,this.camera.lookAt(Hn([a[0]+c[0]*100,a[1]+c[1]*100],t.height_m+l)),this.camera.updateProjectionMatrix();const h=this.camera.projectionMatrix.elements;h[8]=-(h[0]*(t.cx-t.W/2))/t.fpx,h[9]=-(h[5]*(t.H/2-t.cy))/t.fpx,this.camera.projectionMatrixInverse.copy(this.camera.projectionMatrix).invert(),this.projectionOverride=!0}fitView(e,t,n=0){this.setMode("orbit",t),this.orbit.enabled=!1;const[i,r,a]=[e.yaw,e.pitch,e.roll].map(u=>u*Math.PI/180),o=(u,f,m)=>new C(u,m,-f),c=o(Math.sin(i)*Math.cos(r),Math.cos(i)*Math.cos(r),Math.sin(r)),l=o(Math.cos(i),-Math.sin(i),0),d=new C().crossVectors(l,c).clone().multiplyScalar(Math.cos(a)).addScaledVector(l,Math.sin(a));this.camera.position.copy(o(...e.pos)).add(new C(0,n,0)),this.camera.up.copy(d),this.camera.lookAt(this.camera.position.clone().add(c)),this.camera.fov=2*Math.atan(e.H/2/e.fpx)*180/Math.PI,this.camera.updateProjectionMatrix(),this.projectionOverride=!0,this.fitActive=!0}poseView(e,t,n,i){this.setMode("orbit",i),this.orbit.enabled=!1,this.camera.position.set(e[0],e[2],-e[1]),this.camera.fov=n,this.camera.updateProjectionMatrix(),this.camera.lookAt(t[0],t[2],-t[1]),this.projectionOverride=!0,this.fitActive=!0}clearProjectionOverride(){this.projectionOverride&&(this.projectionOverride=!1,this.fitActive=!1,this.camera.up.set(0,1,0),this.camera.fov=55,this.camera.updateProjectionMatrix())}hasProjectionOverride(){return this.projectionOverride}update(e){this.actor&&(e=Number.isFinite(e)?Math.min(Math.max(e,0),.1):0);const t={active:this.mode==="walk"&&this.walk.isLocked&&!this.inputSuspended,moving:!1,running:!1,boxPressed:this.boxPressed,horizontalSpeed:0,direction:new C};if(this.boxPressed=!1,this.mode==="orbit"){this.orbit.enabled&&this.orbit.update(),this.actor?.update(e,t);return}if(this.actor&&!t.active){this.actor.update(e,t),this.actor.cameraFrame?.(this.camera.aspect)&&this.followActor();return}const n=(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")?9:2.2)*e,i=new C;if(this.camera.getWorldDirection(i),i.y=0,i.normalize(),t.direction.copy(i),this.actor?.canMove&&!this.actor.canMove(t)){this.followActor(),this.actor.update(e,t);return}const r=new C().crossVectors(i,new C(0,1,0)).normalize(),a=new C;if((this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&a.add(i),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&a.sub(i),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&a.add(r),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&a.sub(r),a.lengthSq()===0){this.followActor(),this.actor?.update(e,t);return}a.normalize();const o=this.stepTo(this.actor?this.actorEye:this.camera.position,a,n);if(o){const c=this.actor?this.actorEye:this.camera.position,l=Math.hypot(o.x-c.x,o.z-c.z);t.horizontalSpeed=e>0?l/e:0,c.copy(o),t.moving=l>0,t.running=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"),t.direction.copy(a)}this.followActor(),this.actor?.update(e,t)}}class Iy{constructor(e=240){this.size=e}size;samples=[];last=performance.now();reset(e=this.size){this.samples=[],this.size=e,this.last=performance.now()}tick(){const e=performance.now(),t=e-this.last;return this.last=e,this.samples.push(t),this.samples.length>this.size&&this.samples.shift(),t/1e3}summary(){const e=[...this.samples].sort((i,r)=>i-r),t=i=>e.length?e[Math.min(e.length-1,Math.floor(i*e.length))]:0,n=e.reduce((i,r)=>i+r,0)/Math.max(1,e.length);return{frames:e.length,p50:t(.5),p95:t(.95),fps:n>0?1e3/n:0}}report(e){const{frames:t,p50:n,p95:i,fps:r}=this.summary(),a=e.info,o=e.domElement;return[`FPS ${r.toFixed(1)}  (${t}フレーム平均)`,`frame p50 ${n.toFixed(1)} ms / p95 ${i.toFixed(1)} ms`,`draw calls ${a.render.calls}  tris ${(a.render.triangles/1e3).toFixed(0)}k`,`geometries ${a.memory.geometries}  textures ${a.memory.textures}`,`解像度 ${o.width}x${o.height}  DPR ${e.getPixelRatio().toFixed(2)}`].join(`
`)}}const Pd={low:{name:"low",maxDpr:1,antialias:!1,shadows:!1,shadowMapSize:1024,bloom:!1},medium:{name:"medium",maxDpr:1.25,antialias:!0,shadows:!0,shadowMapSize:2048,bloom:!0},high:{name:"high",maxDpr:2,antialias:!0,shadows:!0,shadowMapSize:4096,bloom:!0}};function Ny(s){return Pd[s??"medium"]??Pd.medium}function Fy(s){const e=s.getContext(),t=e.getExtension("WEBGL_debug_renderer_info");return String(t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER))}function Tl(s,e,t,n=30){return s.reset(n*240),new Promise(i=>{setTimeout(()=>{const r=s.summary(),a=e.info,o=e.domElement;i({date:new Date().toISOString(),userAgent:navigator.userAgent,gpu:Fy(e),...t,seconds:n,frames:r.frames,fps:+r.fps.toFixed(1),p50_ms:+r.p50.toFixed(1),p95_ms:+r.p95.toFixed(1),drawCalls:a.render.calls,triangles:a.render.triangles,canvas:`${o.width}x${o.height}`,dpr:e.getPixelRatio()})},n*1e3)})}const Da={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ir{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ky=new Br(-1,1,1,-1,0,1);class Uy extends rn{constructor(){super(),this.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Bt([0,2,0,0,2,0],2))}}const Oy=new Uy;class Al{constructor(e){this._mesh=new It(Oy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ky)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class By extends ir{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof hn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ir.clone(e.uniforms),this.material=new hn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Al(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Dd extends ir{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class zy extends ir{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Gy{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new we);this._width=n.width,this._height=n.height,t=new yn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:sn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new By(Da),this.copyPass.material.blending=fi,this.timer=new $p}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Dd!==void 0&&(a instanceof Dd?n=!0:a instanceof zy&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new we);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Hy extends ir{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new De}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const Vy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new De(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ys extends ir{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new we(e.x,e.y):new we(256,256),this.clearColor=new De(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new yn(r,a,{type:sn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new yn(r,a,{type:sn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new yn(r,a,{type:sn,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}const o=Vy;this.highPassUniforms=Ir.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new hn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new we(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ir.clone(Da.uniforms),this.blendMaterial=new hn({uniforms:this.copyUniforms,vertexShader:Da.vertexShader,fragmentShader:Da.fragmentShader,premultipliedAlpha:!0,blending:Xo,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new De,this._oldClearAlpha=1,this._basic=new Wn,this._fsQuad=new Al(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new we(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Ys.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Ys.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);const i=[],r=[];for(let a=1;a<e;a+=2){const o=t[a],c=a+1<e?t[a+1]:0,l=o+c;i.push((a*o+(a+1)*c)/l),r.push(l)}return new hn({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new we(.5,.5)},direction:{value:new we(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new hn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Ys.BlurDirectionX=new we(1,0);Ys.BlurDirectionY=new we(0,1);const va={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Wy extends ir{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ir.clone(va.uniforms),this.material=new au({name:va.name,uniforms:this.uniforms,vertexShader:va.vertexShader,fragmentShader:va.fragmentShader}),this._fsQuad=new Al(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Xe.getTransfer(this._outputColorSpace)===ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Xc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Kc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ka?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ya?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Jc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Yc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}kn?.mark("WebGLを初期化中");const ie=new URLSearchParams(location.search),Pu=ie.get("drive")==="r34";Pu&&(ie.set("sports","r34"),ie.set("person","tripo"),ie.delete("npc"));let rs,La;const be=s=>document.getElementById(s),Vs=s=>{be("status").textContent=s};ie.has("capture")&&(be("hud").style.visibility="hidden");const Fi=Ny(ie.get("q")),Vt=cy(ie.get("look"));gl.setURLModifier(s=>Sl(s));gl.onError=s=>kn?.error("resource",s);const ct=new lx({antialias:Fi.antialias,powerPreference:"high-performance",preserveDrawingBuffer:ie.has("capture")});ct.setPixelRatio(Math.min(devicePixelRatio,Number(ie.get("dpr")??Fi.maxDpr)));ct.setSize(innerWidth,innerHeight);ct.outputColorSpace=qt;ct.toneMapping=ie.get("tone")==="aces"?Ka:Ya;ct.shadowMap.enabled=Fi.shadows;ct.shadowMap.type=Nd;document.body.appendChild(ct.domElement);const Be=new ip,Tt=new vn(55,innerWidth/innerHeight,.3,3e3),cs=new hy(ct,Be,Fi.shadowMapSize);ie.has("flood")&&(cs.floodIntensity=Number(ie.get("flood")));const at=new Ly(Tt,ct.domElement),kr=new Iy;let Ln,Ei,ya={enabled:ie.get("person")==="tripo",status:"off"};const zr=new Gy(ct);zr.addPass(new Hy(Be,Tt));const qy=ie.get("bloom")==="on",eo=new Ys(new we(innerWidth,innerHeight),Number(ie.get("bs")??.35),.35,Number(ie.get("bt")??3));zr.addPass(eo);zr.addPass(new Wy);const Qt=ie.get("ground")!=="off",Ki=new It(new pl(1500,96),new Zs({color:5986903,roughness:.9}));Ki.rotation.x=-Math.PI/2;Ki.position.y=Qt?-.62:0;Ki.receiveShadow=!0;Ki.name="ground";Be.add(Ki);let oi,Ti,ci,mn,Dt,Wt,Qe,Et,wn,gn,bn,tn,St,wt,_n,xn,En,nn,Tn,fn,Lt;const Xy=new Ml().setMeshoptDecoder(bv),nt={loadGlb:s=>bd(s,()=>Xy.loadAsync(s).then(e=>e.scene)),loadJson:s=>bd(s,async()=>{const e=await fetch(Sl(s));if(!e.ok)throw new Error(`${s}: HTTP ${e.status}`);return e.json()})},jy=ie.get("streaming")==="poc";let as;const gr=new Map,Wo=(ie.get("buildings")??Fv.join(",")).split(",").map(s=>s.trim()).filter(Boolean).filter(s=>s!=="center-gai-gate"||ie.get("street")!=="off").filter(s=>ie.get("context")!=="nostation"||!["station-southeast","station-concourse","station-north","station-service","station-west-viaduct","ginza-canopy"].includes(s)),qo={"d22-tokyo106":"D22 第106東京ビル（観察正面・推定側面屋上・見た目のみ）","d22-mufg-trust":"D22 MUFG信託銀行棟（外装・年代・標高推定、見た目のみ）","d21-roof-bridge-additions":"D21 SKY柵・駅屋根端・橋端（外観推定・見た目のみ）","d21-neighborhood-pack":"D21 周辺3棟・小区画（外装・接地推定、年代未確認）","d20-neighborhood-pack":"D20 新南口・ストリームホール周辺7棟（外装・高さ推定）","d19-fukuras-additions":"D19 フクラス屋上補完（推定）","d19-gloria-frontage":"D19 グローリア部分外装（接合推定）","d19-neighborhood-pack":"D19 推定周辺8棟","d19-photo-frontage-pairs":"D19 店頭4組（接合・高さ推定）","d19-square-ab-composites":"D19 スクエアA/B（年代混在・配置推定）","d18-neighborhood-pack":"D18 駅南西側28棟（外装・内装・配置推定）","d17-markcity-ne-glass":"D17 マークシティ北東ガラス（配置推定）","d17-station-bridge-additions":"D17 駅連絡橋補完（推定）","d16-inferred-hoarding":"D16 工事囲い（年月・範囲は推定）","d16-inferred-neighborhood":"D16 inferred neighborhood（推定）","d16-dogenzaka-tr-composite":"D16 dogenzaka tr composite（推定）","d16-cosmo-composite":"D16 cosmo composite（推定）","d16-kato-composite":"D16 kato composite（推定）","d16-janpara-composite":"D16 janpara composite（推定）","d16-umehara-composite":"D16 umehara composite（推定）","d16-dogenzaka-corner-composite":"D16 dogenzaka corner composite（推定）","d16-diem-composite":"D16 diem composite（推定）","d12-nonbei-w138670865-row":"d12-nonbei-w138670865-row（外装・配置は推定）","d12-lindt-composite":"d12-lindt-composite（外装・配置は推定）","d12-marudai-composite":"d12-marudai-composite（外装・配置は推定）","d12-old-kca040-composite":"d12-old-kca040-composite（外装・配置は推定）","d12-triangle-composite":"d12-triangle-composite（外装・配置は推定）","d12-toei-composite":"d12-toei-composite（外装・配置は推定）","d12-tokyu-rei-composite":"d12-tokyu-rei-composite（外装・配置は推定）","d12-nonbei-w138670870-neutral":"d12-nonbei-w138670870-neutral（外装・配置は推定）","d12-magnet-lower":"d12-magnet-lower（部分外装・配置推定）","d12-eiraku-ground-frontage-roof":"d12-eiraku-ground-frontage-roof（部分外装・配置推定）","d12-eiraku-window-cassette-frames":"d12-eiraku-window-cassette-frames（部分外装・配置推定）","d12-magnet-glassbox-roof-plant":"d12-magnet-glassbox-roof-plant（部分外装・配置推定）","d12-bldg-8a285210-inferred":"d12-bldg-8a285210-inferred（外装・配置は推定）","d12-bldg-cee7364f-fill":"d12-bldg-cee7364f-fill（外装・配置は推定）","d12-bldg-fa8eb7fc-inferred":"d12-bldg-fa8eb7fc-inferred（外装・配置は推定）","d12-bldg-w355252207-inferred":"d12-bldg-w355252207-inferred（外装・配置は推定）","d12-fpg-links-inferred":"d12-fpg-links-inferred（外装・配置は推定）","d12-nonbei-dfeba0c4-fill":"d12-nonbei-dfeba0c4-fill（外装・配置は推定）","d12-nonbei-w138670868-row":"d12-nonbei-w138670868-row（外装・配置は推定）","d12-nonbei-w138670882-row":"d12-nonbei-w138670882-row（外装・配置は推定）","d12-nonbei-w138670888-row":"d12-nonbei-w138670888-row（外装・配置は推定）","d12-nonbei-w138670891-row":"d12-nonbei-w138670891-row（外装・配置は推定）","d12-nonbei-w138670898-row":"d12-nonbei-w138670898-row（外装・配置は推定）","d12-parkside-kyodo-inferred":"d12-parkside-kyodo-inferred（外装・配置は推定）","d11-unnamed327":"d11-unnamed327（外装・内装・配置は推定）","d11-new-kca030":"d11-new-kca030（外装・内装・配置は推定）","d11-zara":"d11-zara（外装・内装・配置は推定）","d11-momose880":"d11-momose880（外装・内装・配置は推定）","d11-north-linear":"d11-north-linear（外装・内装・配置は推定）","d11-shared490491":"d11-shared490491（外装・内装・配置は推定）","d11-higashinihon035":"d11-higashinihon035（外装・内装・配置は推定）","d11-tower-records":"d11-tower-records（外装・内装・配置は推定）","d11-c80-neutral":"d11-c80-neutral（外装・内装・配置は推定）","d11-compact-bridge":"d11-compact-bridge（外装・内装・配置は推定）","d11-doctors791":"d11-doctors791（外装・内装・配置は推定）","d11-tokyu796":"d11-tokyu796（外装・内装・配置は推定）","d11-matrix799":"d11-matrix799（外装・内装・配置は推定）","d11-da-tokyo790":"d11-da-tokyo790（外装・内装・配置は推定）","d11-shibuya-flat802":"d11-shibuya-flat802（外装・内装・配置は推定）","d11-miyashita-building807":"d11-miyashita-building807（外装・内装・配置は推定）","d11-koyuu814":"d11-koyuu814（外装・内装・配置は推定）","d11-iwamoto032":"d11-iwamoto032（外装・内装・配置は推定）","d11-miyashita-approach":"d11-miyashita-approach（外装・内装・配置は推定）","d11-miyashita-approach-furniture":"d11-miyashita-approach-furniture（外装・内装・配置は推定）","d11-miyashita-ne-band":"d11-miyashita-ne-band（外装・内装・配置は推定）","d11-miyashita-north":"d11-miyashita-north（外装・内装・配置は推定）","d11-miyashita-parkcenter":"d11-miyashita-parkcenter（外装・内装・配置は推定）","d11-miyashita-south":"d11-miyashita-south（外装・内装・配置は推定）","d11-miyashita-trellis":"d11-miyashita-trellis（外装・内装・配置は推定）","d11-miyashita-yokocho":"d11-miyashita-yokocho（外装・内装・配置は推定）","d04-okura":"好乃ビル・OKURA（配置・上部外装推定）","d04-pandora-shared":"PANDORA共有棟（347/378同一躯体・推定）","d04-yokota":"横田ビル（外装・店内・配置推定）","d21-elevator21":"エレベーター21（外観・配置・入口方向推定）","d11-minagawa031":"皆川ビル（配置・残余外装推定）","d11-shu896":"朱・オグラ（配置・中間外壁・接地推定）","d11-thanks007":"サンクス007（配置・前面幅推定）","d04-coast":"Coast / PRINTÖNE（配置・外装推定、撮影年月不明）","d04-attagirl":"attagirl（過去の開店外観・上部推定、撮影年月不明）","d04-takeda":"武田ビル（配置・店舗相対位置・マンボー併用年代は推定）","hachiko-policebox":"ハチ公前交番（可視外観・配置推定）","shibu-hachi-box":"SHIBU HACHI BOX（外形・前テラス推定）","mark-city":"マークシティ EAST/WEST（同一PLATEAU施設）（外装推定）",shibuya109:"SHIBUYA109（外装推定）",takagi:"高木ビルディング（外装推定）","bic-camera":"ビックカメラ（外装推定）","cine-tower":"渋東シネタワー（外装推定）","east-mixeduse":"東側の金属外装ビル（台帳候補）（外装推定）",hikarie:"渋谷ヒカリエ（外装推定）",parco:"渋谷PARCO（外装推定）",stream:"渋谷ストリーム（外装推定）","sakura-stage":"Sakura Stage SHIBUYA Tower（外装推定）","plaza-kiosk":"広場の低層施設（売店候補）","station-southeast":"JR南東側施設（外装推定）",center244:"センター244ビル（外装推定）",quattro:"渋谷平和クワトロビル（台帳名）（外装推定）","scramble-square":"渋谷スクランブルスクエア（外装推定）",fukuras:"渋谷フクラス（外装推定）",qfront:"QFRONT",magnet:"MAGNET",eiraku:"栄楽ビル","west-block":"センター街入口西側街区","d03-center-gai-frontage":"D03センター街入口の3店先（西村入口・大盛堂案内板・薬局ラック）","d05-centerbuilding-bk":"D05センタービル道路側（BURGER KING 1–2階・3階窓帯）",ekimae:"渋谷駅前ビル","station-concourse":"駅・マークシティ連絡通路","station-north":"JR北側ホーム上屋","station-service":"駅西側の小施設","station-west-viaduct":"駅西側の高架部（推定）","ginza-canopy":"銀座線ホーム上屋（試作）","daiichi-kangin":"第一勧銀共同ビル（B試作）","center-gai-gate":"センター街入口ゲート（形状試作）"};let Le=[],Bn,xt,Us=ie.get("time")==="night"?"night":"day";function Ur(s){if(Us=s,be("btn-day").classList.toggle("on",s==="day"),be("btn-night").classList.toggle("on",s==="night"),!xt)return;cs.apply(s,Le.map(n=>n.root));const e={map:Be.environment,intensity:Be.environmentIntensity};for(const n of Le)Tv(n.root,n.emissive[s]),Zt(n.root,s,Vt,n.emissive.day,e);const t=Lt?.ok&&ie.get("lamps")!=="off"&&!ie.get("look")?.includes("nightGround:")?{...Vt,nightGround:0}:Vt;Qe?.ok&&Zt(Qe.root,s,t),Lt?.setTime(s,ie.get("lamps")!=="off");for(const n of[Ti,ci,oi])n?.ok&&Zt(n.root,s,Vt,void 0,e);nn&&Zt(nn.root,s,Vt,void 0,e),mn?.ok&&Zt(mn.root,s,Vt,void 0,e),Wt?.ok&&Zt(Wt.root,s,t),Dt?.ok&&Zt(Dt.root,s,t),wn?.ok&&Zt(wn.root,s,t),gn?.ok&&Zt(gn.root,s,Vt,void 0,e),bn?.ok&&Zt(bn.root,s,Vt,void 0,e),tn?.ok&&Zt(tn.root,s,Vt,void 0,e),_n?.ok&&Zt(_n.root,s,Vt,void 0,e),St?.ok&&Zt(St.root,s,Vt,void 0,e),wt?.ok&&Zt(wt.root,s,Vt,void 0,e),xn?.ok&&Zt(xn.root,s,Vt,void 0,e),En?.ok&&Zt(En.root,s,Vt,void 0,e),Tn?.ok&&Zt(Tn.root,s,Vt,void 0,e),Et?.ok&&(Zt(Et.root,s,Vt,void 0,e),Et.setTime(s)),fn?.setTime(s),ct.toneMappingExposure=s==="day"?Vt.dayExposure:Vt.nightExposure,eo.enabled=qy&&Fi.bloom&&s==="night"}async function Ky(){kn?.mark("街の資産を読み込み中"),Vs(`${Wo.map(S=>qo[S]??S).join("・")} を読み込み中…`);const s=Qt?Av(ie):void 0,e=jy?await nt.loadJson("/context/streaming-proxy/cells.json"):void 0,t=e?.cells.filter(S=>S.buildings.every(U=>Wo.includes(U)))??[],n=new Set(t.flatMap(S=>S.buildings)),[i,r,a,o,c,l,h,d,u,f,m,v,g,p,y,A,b,M,w]=await Promise.all([cs.loadEnvironments(),Promise.all(Wo.map(S=>Ev(S,nt))),Qt?Yv(nt.loadGlb,ie.get("groundurl")==="missing"?"/ground/core/missing.glb":void 0):Promise.resolve(void 0),ie.get("street")!=="off"?ey(nt.loadGlb,ie.get("streeturl")==="missing"?"/street/core/missing.glb":void 0,ie.get("street")!=="entrances"):Promise.resolve(void 0),ie.get("street")==="projected"?Jv(nt,ie.get("projectedurl")==="missing"?"/street/core/missing.glb":void 0):Promise.resolve(void 0),ie.get("context")!=="off"?iy(nt.loadGlb,ie.get("contexturl")==="missing"?"/context/core/missing.glb":void 0,ie.get("context")!=="nostation"):Promise.resolve(void 0),Qt&&ie.get("street")!=="off"&&ie.get("tactile")!=="off"?ty(nt.loadGlb,ie.get("tactileurl")==="missing"?"/street/tactile/missing.glb":void 0):Promise.resolve(void 0),Qt&&ie.get("street")!=="off"&&ie.get("drainage")!=="off"?Xv(nt.loadGlb,ie.get("drainageurl")==="missing"?"/street/drainage/missing.glb":void 0):Promise.resolve(void 0),Qt&&ie.get("street")!=="off"&&ie.get("hachiko")!=="off"?qv(nt.loadGlb,ie.get("hachikourl")==="missing"?"/street/hachiko/missing.glb":void 0):Promise.resolve(void 0),Qt&&ie.get("street")!=="off"&&ie.get("surround")!=="off"?Hv(nt.loadGlb,ie.get("surroundurl")==="missing"?"/street/hachiko-surround/missing.glb":void 0):Promise.resolve(void 0),Qt&&ie.get("street")!=="off"&&ie.get("surround")!=="off"&&ie.get("memorial")!=="off"?Vv(nt.loadGlb,nt.loadJson,ie.get("memorialurl")==="missing"?"/street/hachiko-memorial/missing.glb":void 0):Promise.resolve(void 0),Qt&&ie.get("street")!=="off"&&ie.get("reartree")!=="off"&&!s?_d(nt.loadGlb,nt.loadJson,ie.get("reartreeurl")==="missing"?"/street/hachiko-rear-tree/missing.glb":void 0):Promise.resolve(void 0),Qt&&ie.get("plaza")!=="off"?Gv(nt.loadGlb,ie.get("plazaurl")==="missing"?"/street/plaza-finish/missing.glb":void 0):Promise.resolve(void 0),Qt&&ie.get("terrain")!=="off"?zv(nt.loadGlb,ie.get("terrainurl")==="missing"?"/ground/extension/missing.glb":void 0):Promise.resolve(void 0),Qt&&ie.get("street")!=="off"&&ie.get("facilities")!=="off"?Bv(nt.loadGlb,ie.get("facilitiesurl")==="missing"?"/street/plaza-facilities/missing.glb":void 0):Promise.resolve(void 0),Qt&&ie.get("street")!=="off"&&ie.get("tactile")!=="off"&&ie.get("tactileextra")!=="off"?Ho(nt.loadGlb,"extra"):Promise.resolve(void 0),Qt&&ie.get("street")!=="off"&&ie.get("tactile")!=="off"&&ie.get("tactilelinks")!=="off"?Ho(nt.loadGlb,"links"):Promise.resolve(void 0),Qt&&ie.get("exterior")!=="off"?Uv(nt.loadGlb,ie.get("exteriorurl")==="missing"?"/missing":void 0):Promise.resolve(void 0),Qt&&ie.get("street")!=="off"&&ie.get("tactile")!=="off"&&ie.get("exterior")!=="off"?Ho(nt.loadGlb,"outer"):Promise.resolve(void 0)]);if(r.forEach(S=>{S.ok&&n.has(S.id)||Be.add(S.root)}),Le=r.filter(S=>S.ok),Qe=a,Wt=p,Dt=M,Qe?.ok&&Ov(Qe.root,!!(Dt?.ok&&Wt?.ok)),oi=w,mn=y,Ti=A,ci=b,Et=o,Tn=h,En=d,xn=u,gn=f,bn=m,tn=v,Qt&&ie.get("street")!=="off"&&ie.get("fit")!=="off"){const S=[...y?.ok?["lottery"]:[],...v?.ok?["enclosure"]:[],...g?.ok?["finish"]:[],...Le.some(U=>U.id==="plaza-kiosk")?["a8","kerb",...h?.ok?["tactile"]:[]]:[],...Le.some(U=>U.id==="station-north")?["louvre"]:[],...o?.ok?["fence"]:[]];St=await xd(nt.loadGlb,S),St.ok&&(Be.add(St.root),Wv(St,{facilities:y?.root,plaza:g?.root,kiosk:Le.find(U=>U.id==="plaza-kiosk")?.root}))}if(s&&Qe?.ok&&Et?.ok){const S=[Qe.root,...St?.ok?St.root.children.filter(J=>J.name==="fit:finish"):[]];S.forEach(J=>J.updateMatrixWorld(!0));const U=new qa;wt=await Lv(nt,s,{street:Et.root},(J,z)=>(U.set(new C(J,10,z),new C(0,-1,0)),U.intersectObjects(S,!0)[0]?.point.y??null)),wt.ok&&Be.add(wt.root)}if(s&&!wt?.ok&&(tn=await _d(nt.loadGlb,nt.loadJson),tn.ok)){const S=await xd(nt.loadGlb,["enclosure"]);S.ok&&(St?.ok?St.root.add(...S.root.children):(St=S,Be.add(S.root)))}Iv(ie,Le.some(S=>S.id==="shibu-hachi-box"))&&(_n=await Nv(nt),_n.ok&&Be.add(_n.root)),wn=g,fn=l,fn?.ok&&Be.add(fn.root),Lt=c,Lt?.ok&&Be.add(Lt.root),be("provisional").textContent=Lt?.ok?"仮配置：支柱の位置・寸法・光量は確認待ち（橙色）":Et?.ok?"街路設備は仮：出入口・樹木は2025年OSMの位置、信号・柵は規則による配置、形は標準寸法の汎用品":"",Le.some(S=>S.id.startsWith("d11-"))&&(be("provisional").textContent+=`
D11：出典付き素材の推定配置。地面・接合・見えない背面・一部内装は推定。年代違いの店舗候補を含み、区画全体の実景一致を保証しません。`),Le.some(S=>["d04-okura","d04-pandora-shared","d04-yokota"].includes(S.id))&&(be("provisional").textContent+=`
D04追加3棟：配置・寸法・見えない外装・簡易内装は推定、撮影時期未確認。PANDORA347/378は1つの共有躯体として配置`),Le.some(S=>S.id==="center244")&&(be("provisional").textContent+=`
センター244店頭：撮影年月不明の外装と推定内装。1月広告と同時期の保証なし`),Le.some(S=>S.id==="d04-boundary-duct")&&(be("provisional").textContent+=`
D04境界ダクト：横田・おこげ境界への推定配置。支持壁の帰属・取付高さ・撮影年月は未確認`),Le.some(S=>S.id==="d04-center244-january")&&(be("provisional").textContent+=`
センター244広告：2025年1月限定の比較表示。10月の現況ではありません`),Le.some(S=>S.id==="d04-coast")&&(be("provisional").textContent+=`
Coast / PRINTÖNE：配置・外装・接地補正は推定、撮影年月不明`),Le.some(S=>S.id==="d04-attagirl")&&(be("provisional").textContent+=`
attagirl：過去の開店外観、上部外装・配置・接地補正は推定、撮影年月不明。現在・2025年10月の営業状態は未確認`),Le.some(S=>S.id==="d21-elevator21")&&(be("provisional").textContent+=`
D21エレベーター21：外観・位置・接地・入口方向は推定。扉の詳細と撮影時点は未確認、昇降・地下通行は対象外`),Le.some(S=>["d11-minagawa031","d11-shu896","d11-thanks007"].includes(S.id))&&(be("provisional").textContent+=`
D11皆川・朱・サンクス：配置・残余外装・接地は推定、看板・店舗の撮影年月と2025年10月の営業状態は未確認。朱は店先を局所的に持ち上げ、入口段差は現行推定路面に接続`),Le.some(S=>S.id==="daiichi-kangin")&&(be("provisional").textContent+="／第一勧銀共同ビルは窓割り・店舗枠のB推定、広告内容は後工程"),Le.some(S=>["center244","quattro","scramble-square","fukuras"].includes(S.id))&&(be("provisional").textContent+="／周辺建物の窓割り・外装は旧年写真によるB推定"),Le.some(S=>S.id==="center-gai-gate")&&(be("provisional").textContent+="／センター街ゲートは位置・寸法のB推定、横断幕は2025年1月の写真"),Qe?.ok&&(be("provisional").textContent+="／北側歩道・ハチ公広場の舗装寸法・割付けは試作");for(const S of[Ti,ci,oi])S?.ok&&Be.add(S.root);ci?.ok&&(be("provisional").textContent+="／点字の施設前接続はモデル上の出入口へ推定した経路、実際の全経路は未確認"),mn?.ok&&(Be.add(mn.root),be("provisional").textContent+="／小施設の形・高さ・用途は推定、喫煙設備のOSM形状は喫煙区画全体ではない"),Dt?.ok&&(Be.add(Dt.root),be("provisional").textContent+="／外側道路・歩道：PLATEAU形状、欠測高さ・縁石・白線は推定"),Wt?.ok&&(Be.add(Wt.root),be("provisional").textContent+="／外側の地面は国土地理院標高による補填、仕上げ道路・歩道と継ぎ目は推定"),Et?.ok&&Be.add(Et.root),wn?.ok&&(Be.add(wn.root),be("provisional").textContent+="／像周辺の敷石は写真から推定、寸法・敷設範囲は未測量"),gn?.ok&&(Be.add(gn.root),be("provisional").textContent+="／像周辺の石縁・レール・低木は写真から試作、位置・寸法・10月状態は未確認"),bn?.ok&&(Be.add(bn.root),be("provisional").textContent+="／日英二面の石碑は2025-07-13写真由来、像との相対位置・寸法・接地は推定"),_n?.ok&&(be("provisional").textContent+="／BOXの内容物・案内表示は2024年、展示灯・屋根角機器は2026年8月写真参考。現行建築への寸法・配置とTKTS下部幕板は推定（ハチ公周辺のみ時点を併用）"),tn?.ok&&(Be.add(tn.root),be("provisional").textContent+="／像背後の大木1本は2025年11月の幹写真と2026年8月の葉を合わせた推定。幹位置・石囲いは未測量"),St?.ok&&(be("provisional").textContent+="／ハチ公周辺：宝くじ・A8外観と屋根接合・駅ルーバー・大木の全周石囲い・柵・舗装・縁石・接続誘導線は既存形状への推定配置。非可視部分と経路は復元案、駅設備・幹は2025年11月資料を併用"),wt?.ok&&(be("provisional").textContent+="／D01枝木・円弧囲い：推定配置。囲い接地・局所衝突を適合。"+(wt.candidate==="assembly"?"道路側樹冠は既存維持":"道路側T-Bは比較候補 "+wt.candidate)),xn?.ok&&(Be.add(xn.root),be("provisional").textContent+="／ハチ公スキャン：Maurice Svay／CC BY 4.0、寸法・向きは推定、撮影時点・2025年10月状態は未確認"),En?.ok&&(Be.add(En.root),be("provisional").textContent+="／円形路面蓋はM027から推定、用途・位置・寸法は未測量"),Tn?.ok&&(Be.add(Tn.root),be("provisional").textContent+="／点字ブロックは横断歩道端を基準にした部分試作、位置・接続先は推定"),Qe?.ok?(Be.add(Qe.root),at.setGround([Qe.root])):Qe&&(Ki.position.y=0),at.setGround([...Qe?.ok?[Qe.root]:[],...Wt?.ok?[Wt.root]:[],...Dt?.ok?[Dt.root]:[],...Et?.ok?Et.walkSurfaces:[]]);const R=ie.get("sports");R&&["r34","s15","rx7","all"].includes(R)&&(Be.updateMatrixWorld(!0),Bn=await Ex(Be,nt.loadGlb,(S,U,J)=>at.groundAt(S,U,J??10),R,{probeFrom:80}),Bn.errors.length&&console.error("sports-poc",Bn.errors)),Qt&&ie.get("street")!=="off"&&ie.get("props")!=="off"&&(nn=await kv(nt.loadGlb,nt.loadJson,(S,U)=>at.groundAt(S,U,5)),Be.add(nn.root),nn.stats.placed&&(be("provisional").textContent+=`
支柱・案内板・コーンは2025年写真に基づく推定配置。位置・寸法・継続設置は未測量`)),Le.some(S=>S.id==="d04-okoge")&&(be("provisional").textContent+=`
おこげ：撮影年月不明の店先、配置・外殻・接地・継ぎ目は推定`),Le.some(S=>S.id==="takagi")&&(be("provisional").textContent+=`
高木：北側入口の配置は推定、屋上看板・設備は2025年1月31日の歴史的候補、2025年10月の継続は未確認`),Le.some(S=>S.id==="west-block")&&(be("provisional").textContent+=`
西側街区の外観は試作、看板は2025年1月の写真を参照`),Le.some(S=>S.id==="d03-center-gai-frontage")&&(be("provisional").textContent+=`
D03店先：西村入口は2025年9月写真・中央ベイ割当と奥行きは推定／大盛堂案内板は2025年1月写真面（24×45px、文字は読めない）・寸法推定／薬局ラックは2025年2月写真の空の展示台・位置寸法推定`),Le.some(S=>S.id==="d05-centerbuilding-bk")&&(be("provisional").textContent+=`
D05センタービル：BURGER KING店先と3階窓帯は2025年5月30日写真（CC BY-SA 4.0 ウィ貴公子）から推定。寸法・取付位置・ガラス色は推定、3階上端は写真の切断線で屋根ではない`),Le.some(S=>S.id==="ekimae")&&(be("provisional").textContent+=`
渋谷駅前ビルの外観は試作、看板は2025年11月の写真を参照`),Le.some(S=>["mark-city","shibuya109","takagi","bic-camera","cine-tower","east-mixeduse","hikarie","parco","stream","sakura-stage"].includes(S.id))&&(be("provisional").textContent+=`
追加の周辺建物は窓・色・看板筐体のB推定、写真との精密照合は未完了`),Le.some(S=>S.id==="shibu-hachi-box")&&(be("provisional").textContent+=`
BOX外形・前テラスは公式図面とOSM輪郭による推定。屋根・テラス表示は2024年由来、時計は2026-08-08 08:08:08の静止表示。取付・接合・2025年10月状態は未確定`),Le.some(S=>S.id==="plaza-kiosk")&&(be("provisional").textContent+=`
広場の低層施設：南側はA8入口として推定復元、北側既存形状を保持`),Le.some(S=>S.id==="station-southeast")&&(be("provisional").textContent+=`
JR南東側施設は旧年写真による外装推定、10月現況と施設同定は未確認`),Le.some(S=>S.id==="station-concourse")&&(be("provisional").textContent+=`
駅側の連絡通路は試作、開口・窓・内部・工事用の囲いの寸法と配置、光量は推定`),Le.some(S=>S.id==="station-north")&&(be("provisional").textContent+=`
JR北側ホーム上屋は試作、柱・梁・床の帯の配置は推定、南側は外観未確認`),Le.some(S=>S.id==="station-north")&&(be("provisional").textContent+=`
宮益坂側JR入口の看板は2025年初頭、柱外装・開口は2025-04-09資料由来。取付位置・寸法・浅い奥行きは推定、通行できる入口や内部は未制作、2025年10月状態は未確定`),Le.some(S=>S.id==="hachiko-policebox")&&(be("provisional").textContent+=`
交番は2025-04-09の可視外観。寸法・取付点・浅い奥面は推定、内部・裏面・2025年10月状態は未確認`),Le.some(S=>S.id==="station-service")&&(be("provisional").textContent+=`
駅西側の小施設は試作、設備棟との対応・外装・換気口は推定、正面の同定は未完了`),Le.some(S=>S.id==="station-west-viaduct")&&(be("provisional").textContent+=`
駅西側高架は試作、写真との対応・桁・柱・補強・養生網の寸法と配置は推定`),Le.some(S=>S.id==="ginza-canopy")&&(be("provisional").textContent+=`
銀座線ホームは試作、床・フレーム・ドアの寸法と配置は推定、10月の内部・下部の確認は未達`);for(const S of gv(Le.map(U=>U.id)))be("provisional").textContent+=`
`+S;if(ie.get("datum")==="off")for(const S of Le)S.hints.groundElevationTP=void 0,S.root.position.y=0;kn?.mark("街を配置中");const _=[...nn&&!nn.ok?[`小物の一部を配置できず: ${nn.errors.join("; ")}（ほかは表示を継続）`]:[],...Lt&&!Lt.ok?[`写真からの仮配置を読み込めず: ${Lt.error}（通常表示を継続）`]:[],...fn&&!fn.ok?[`周辺の建物（C段階）の読み込みに失敗: ${fn.error}（他は表示を継続）`]:[],...[Ti,ci,oi].flatMap(S=>S&&!S.ok?[`点字の補足を読み込めず: ${S.error}（元の面を継続）`]:[]),...mn&&!mn.ok?[`小施設の読み込みに失敗: ${mn.error}（ほかの表示を継続）`]:[],...Dt&&!Dt.ok?[`外側道路の読み込みに失敗: ${Dt.error}（元Coreを継続）`]:[],...Wt&&!Wt.ok?[`外側地面の読み込みに失敗: ${Wt.error}（元の地面を継続）`]:[],...wn&&!wn.ok?[`敷石の読み込みに失敗: ${wn.error}（ほかの表示は継続）`]:[],...gn&&!gn.ok?[`像周辺の設備の読み込みに失敗: ${gn.error}（ほかの表示は継続）`]:[],...bn&&!bn.ok?[`石碑の読み込みに失敗: ${bn.error}（ほかの表示は継続）`]:[],...tn&&!tn.ok?[`像背後の大木の読み込みに失敗: ${tn.error}（ほかの表示は継続）`]:[],...wt&&!wt.ok?[`D01 candidate: ${wt.error}`]:[],..._n&&!_n.ok?[`BOX contents: ${_n.error}`]:[],...St&&!St.ok?[`配置確認案の読み込みに失敗: ${St.error}`]:[],...xn&&!xn.ok?[`ハチ公像の読み込みに失敗: ${xn.error}（ほかの表示は継続）`]:[],...En&&!En.ok?[`路面蓋の読み込みに失敗: ${En.error}（ほかの表示は継続）`]:[],...Tn&&!Tn.ok?[`点字ブロックの読み込みに失敗: ${Tn.error}（ほかの表示は継続）`]:[],...Et&&!Et.ok?[`街路設備の読み込みに失敗: ${Et.error}（建物と地面は表示を継続）`]:[],...Qe&&!Qe.ok?[`地面の読み込みに失敗: ${Qe.error}（灰色の円盤を表示）`]:[],...Qe?.ok&&Qe.missing.length?[`地面の一部がない: ${Qe.missing.join(", ")}`]:[],...r.filter(S=>!S.ok).map(S=>`${qo[S.id]??S.id} の読み込みに失敗: ${"error"in S?S.error:""}（仮の箱を表示）`),...Le.flatMap(S=>S.layerErrors.map(U=>`${qo[S.id]??S.id} の看板レイヤーを読み込めず: ${U}`))];if(xt=Le.find(S=>S.id==="qfront")??Le[0],!xt)throw new Error(_.join(`
`)||"表示できる建物がありません");for(const S of _)kn?.error("scene",S);cs.placeSun(xt.hints);for(const S of Le)cs.placeFloods(S.hints);const T=St?.ok?St.root.getObjectByName("fit_enclosure"):void 0,P=[...wt?.ok?[wt.collisionEnclosure]:T?[T]:[],...nn?[nn.root]:[],...Le.filter(S=>mv(S.id)).map(S=>S.root),...fn?.ok?[fn.root]:[],...[xn,gn,bn,tn,mn].filter(S=>S?.ok).map(S=>S.root),...Et?.ok?[wt?.collisionStreet??Et.root]:[],...Lt?.ok?[Lt.root]:[]];at.setObstacles(P);const I=()=>Le.filter(S=>P.includes(S.root)).map(S=>S.id);if(e&&t.length){const S=new Map(Le.map(z=>[z.id,z])),U=[];await Promise.all(t.map(async z=>{const j=z.buildings.map(se=>S.get(se));let Z=j.every(se=>se&&!se.layerErrors.length);if(Z&&z.proxy)try{const se=await nt.loadGlb(`/context/streaming-proxy/${z.proxy}`);se.name=`proxy-cell:${z.id}`,se.traverse(ae=>{ae.castShadow=ae.receiveShadow=!0}),se.visible=!1,Be.add(se),gr.set(z.id,se)}catch(se){Z=!1,kn?.error("streaming",`proxy ${z.id}: ${se instanceof Error?se.message:se}`)}if(Z)U.push(z);else for(const se of j)se&&!se.root.parent&&Be.add(se.root)}));for(const z of Le)z.root.updateMatrixWorld(!0);const J=z=>z.buildings.map(j=>S.get(j).root);for(const z of U)gr.has(z.id)&&(gr.get(z.id).visible=!0);as=new Kv({...e,cells:U,releaseMode:"gpu"},{loadGroup:async z=>J(z),prepare:()=>{},uploadTexture:z=>ct.initTexture(z),attach:z=>{for(const j of z)Be.add(j)},detach:z=>{for(const j of z)j.removeFromParent()},showProxy:(z,j)=>{const Z=gr.get(z.id);Z&&(Z.visible=j)},now:()=>performance.now()}),U.length&&(be("provisional").textContent+=`
区画ストリーミングPoC（?streaming=poc）：${U.map(z=>z.label).join("・")} は離れると描画を外しGPU資源を解放（衝突は元のまま）。遠景は${U.some(z=>z.proxy)?"PLATEAU外形の簡易版":"C段階の殻"}`)}at.frameBuilding(xt.hints),Ur(Us);const N=i.day==="fulfilled"&&i.night==="fulfilled"?"":"（環境マップの一部を読み込めず、反射は簡易表示）";Vs([..._,N].filter(Boolean).join(`
`));const B=Le.find(S=>S.hints.cameraFit);be("btn-m027").disabled=!B;const L=ie.get("view");if(L==="q032"?at.q032View(xt.hints):L==="m027"&&B?.hints.cameraFit?Cl(B):L==="walk"&&Rl("walk"),ie.get("pass")==="class"){for(const S of Le)Ot(S.root,{...S.emissive.day});Qe?.ok&&Ot(Qe.root),Et?.ok&&Ot(Et.root);for(const S of[Ti,ci,oi])S?.ok&&Ot(S.root);nn&&Ot(nn.root),mn?.ok&&Ot(mn.root),Wt?.ok&&Ot(Wt.root),Dt?.ok&&Ot(Dt.root),wn?.ok&&Ot(wn.root),gn?.ok&&Ot(gn.root),bn?.ok&&Ot(bn.root),tn?.ok&&Ot(tn.root),_n?.ok&&Ot(_n.root),St?.ok&&Ot(St.root),wt?.ok&&Ot(wt.root),xn?.ok&&Ot(xn.root),En?.ok&&Ot(En.root),Tn?.ok&&Ot(Tn.root),fn?.ok&&Ot(fn.root),Lt?.ok&&Ot(Lt.root),Ki.material=new Zs({color:0}),Ki.visible=!1,Be.background=new De(0),Be.environment=null,eo.enabled=!1}const G=ie.get("pose");if(G){const S=G.split(",").map(Number);at.poseView([S[0],S[1],S[2]],[S[3],S[4],S[5]],S[6]||55,xt.hints)}if(as){const S=performance.now()+6e4;for(as.update(Tt.position.x,-Tt.position.z);!as.settled()&&performance.now()<S;)await new Promise(U=>setTimeout(U,50))}if(ie.get("streetref")==="stream2025"){const S=Lt?.metadata??await nt.loadJson("/street/core/projected.json");at.fitView(S.camera,xt.hints,0)}if(ie.get("person")==="tripo")try{let S;if(ie.get("npc")==="fitness"){const z=dv(),j=performance.now();try{Ei=await fv(at,Be,z),S={person:Ei.player,loadMs:performance.now()-j}}catch(Z){z.textContent=`NPC戦闘PoCを読み込めません。従来の人物PoCへ戻ります: ${String(Z)}`,S=await ud()}}else S=await ud();const{person:U,loadMs:J}=S;try{at.attachActor(Ei??U)}catch(z){throw Ei?(Ei.dispose(),Ei=void 0):U.dispose(),z}Be.add(U.root),Ln=U,Ei?.initialize(),ya={enabled:!0,status:"loaded",loadMs:J,...U.inspection},be("help").textContent+=" / 人物PoC: 地上歩行でWASD・Shift、停止中Bでボクシング1回（移動/Escで解除）",be("provisional").textContent+=`
Tripo人物1体PoC: 身長1.8mは仮定。入力モデルの向き・足元は視覚レビュー待ち。`}catch(S){ya={enabled:!0,status:"failed",error:String(S)},Vs(`${be("status").textContent}
人物PoCを読み込めません: ${String(S)}（既存操作を継続）`)}if(Pu){const S=Bn?.cars.find(J=>J.id==="r34"&&J.status==="ready");if(!S||!Ln)throw new Error("R34 driving requires the existing protagonist and loaded R34");rs=new fx(S,Ln,at,Tt,[...Qe?.ok?[Qe.root]:[],...Wt?.ok?[Wt.root]:[],...Dt?.ok?[Dt.root]:[],...Et?.ok?Et.walkSurfaces:[]],P),at.setMode("walk",xt.hints),rs.recover();const{R34AV:U}=await zu(async()=>{const{R34AV:J}=await import("./av-Cb4SwkNY.js");return{R34AV:J}},[]);La=new U(rs,()=>Us),await La.attach()}window.__viewer={r34AV:()=>La?.diagnostics()??{status:"off"},driving:()=>rs?.snapshot()??{mode:"off"},drivingRouteProposals:ie.has("capture")?()=>rs?.planRoutes():void 0,drivingRoadProbe:ie.has("capture")?(S,U,J,z)=>rs?.roadProbe(S,U,J,z):void 0,ready:!0,sportsShow:ie.has("capture")?S=>Bn?.cars.forEach(U=>{U.root.visible=U.status==="ready"&&(S==="all"||S===U.id)}):void 0,sportsAudit:ie.has("capture")?()=>Bn?px(Bn,[...Qe?.ok?[Qe.root]:[],...Dt?.ok?[Dt.root]:[]],P):[]:void 0,sports:()=>Bn?{status:Bn.status,stats:Bn.stats,errors:Bn.errors,cars:Bn.cars.map(S=>({id:S.id,status:S.status,stats:S.stats,bounds:S.worldBounds,contact:S.contact,contacts:S.contacts,transparentDepthWritePatches:S.transparentDepthWritePatches}))}:{status:"off"},combat:()=>Ei?.snapshot()??{status:"off"},person:()=>({...ya,state:Ln?.current,position:Ln?.root.position.toArray(),visible:Ln?.root.visible,contact:Ln?{...Ln.contact}:void 0}),personBenchmark:ie.has("capture")&&["tripo","baseline"].includes(ie.get("person")??"")?async(S="idle")=>{if(Ei)throw Error("Single-person benchmark requires npc option off");if(!Ls.includes(S)||at.mode!=="orbit")throw new Error("Benchmark requires a known clip and fixed orbit pose");const U=()=>({position:Tt.position.toArray(),quaternion:Tt.quaternion.toArray(),fov:Tt.fov}),J=U();try{Ln?.setBenchmarkMotion(S,S==="run"?9:S==="walk"?2.2:0),await new Promise(j=>setTimeout(j,5e3)),Ln?.resetContactMetrics();const z=await Tl(kr,ct,{quality:Fi.name,time:Us,view:"person-poc-fixed"},10);if(JSON.stringify(J)!==JSON.stringify(U()))throw new Error("Camera moved during benchmark");return{person:ya,contact:Ln?{...Ln.contact}:void 0,animationCase:S,diagnosticInPlace:!0,camera:J,...z}}finally{Ln?.setBenchmarkMotion(null)}}:void 0,d01Candidates:wt?{ok:wt.ok,candidate:wt.candidate,error:wt.error,loadMs:wt.loadMs,contact:wt.contact,...wt.stats}:"off",captureBuildingObstacleIds:ie.has("capture")?I:void 0,captureRenderInfo:ie.has("capture")?()=>({...ct.info.render}):void 0,renderMemory:()=>({...ct.info.memory,programs:ct.info.programs?.length??0}),streaming:as?()=>({...as.snapshot(),proxies:[...gr.entries()].map(([S,U])=>({id:S,visible:U.visible})),inScene:Le.filter(S=>S.root.parent===Be).map(S=>S.id),obstacles:I()}):void 0,movePose:ie.has("capture")?S=>at.poseView([S[0],S[1],S[2]],[S[3],S[4],S[5]],S[6]||55,xt.hints):void 0,props:nn?{ok:nn.ok,errors:nn.errors,anchors:nn.anchors,...nn.stats}:"off",stats:Object.fromEntries(Le.map(S=>[S.id,{...S.stats,layers:S.layers,layerErrors:S.layerErrors}])),failed:r.filter(S=>!S.ok).map(S=>S.id),ground:Qe?{fillReplaced:Qe.ok&&!Qe.root.getObjectByName("ground_fill"),ok:Qe.ok,error:Qe.error,missing:Qe.missing,...Qe.stats}:"off",context:fn?{ok:fn.ok,error:fn.error,...fn.stats}:"off",tactileOuter:oi?{ok:oi.ok,attached:oi.root.parent===Be,error:oi.error,...oi.stats}:"off",tactileExtra:Ti?{ok:Ti.ok,error:Ti.error,...Ti.stats}:"off",tactileLinks:ci?{ok:ci.ok,error:ci.error,...ci.stats}:"off",facilities:mn?{ok:mn.ok,error:mn.error,...mn.stats}:"off",exterior:Dt?{ok:Dt.ok,error:Dt.error,...Dt.stats}:"off",terrain:Wt?{ok:Wt.ok,error:Wt.error,...Wt.stats}:"off",plaza:wn?{ok:wn.ok,error:wn.error,...wn.stats}:"off",surround:gn?{ok:gn.ok,error:gn.error,...gn.stats}:"off",memorial:bn?{ok:bn.ok,error:bn.error,...bn.stats}:"off",rearTree:tn?{ok:tn.ok,error:tn.error,...tn.stats}:"off",boxContents:_n?{ok:_n.ok,error:_n.error,..._n.stats}:"off",sceneFit:St?{ok:St.ok,error:St.error,parts:St.root.children.map(S=>S.name),...St.stats}:"off",hachiko:xn?{ok:xn.ok,error:xn.error,...xn.stats}:"off",drainage:En?{ok:En.ok,error:En.error,...En.stats}:"off",tactile:Tn?{ok:Tn.ok,error:Tn.error,...Tn.stats}:"off",street:Et?{ok:Et.ok,error:Et.error,mode:ie.get("street")==="entrances"?"entrances":"all",...Et.stats}:"off",projected:Lt?{ok:Lt.ok,error:Lt.error,status:Lt.metadata?.status,cameraStatus:Lt.metadata?.camera_status,lamps:Lt.lights.map(S=>({id:S.name,intensity:S.intensity,position:S.position.toArray()})),groundEmissive:Lt.ok&&ie.get("lamps")!=="off"&&!ie.get("look")?.includes("nightGround:")?0:Vt.nightGround}:"off",offsets:Object.fromEntries(Le.map(S=>[S.id,S.root.position.y])),cameraPos:()=>Tt.position.toArray(),cameraState:()=>({position:Tt.position.toArray(),quaternion:Tt.quaternion.toArray(),fov:Tt.fov,aspect:Tt.aspect,time:Us}),freezeFrame:ie.has("capture")?()=>{ct.setAnimationLoop(null),ct.render(Be,Tt)}:void 0,capturePose:ie.has("capture")?(S,U)=>{ct.setAnimationLoop(null),at.poseView([S[0],S[1],S[2]],[S[3],S[4],S[5]],S[6]||55,xt.hints),Ur(U),ct.render(Be,Tt)}:void 0,projectPlan:S=>{const U=new C(S[0],S[2],-S[1]).project(Tt);return[(U.x*.5+.5)*innerWidth,(-U.y*.5+.5)*innerHeight]},bench:null,groundUnderCamera:()=>at.groundY(Tt.position.x,Tt.position.z),walkTest:(S,U,J,z,j,Z=.25)=>{const se=at.groundAt(S,-U);if(se===null)return{start:null};let ae=new C(S,se+1.6,-U);const it=new C(J,0,-z).normalize(),We=[];for(let Ze=0;Ze<j;Ze++){const K=at.stepTo(ae,it,Z);if(!K)return{path:We,stoppedAt:[ae.x,-ae.z,ae.y-1.6]};ae=K,We.push([ae.x,-ae.z,ae.y-1.6])}return{path:We,stoppedAt:null}},pick:(S,U)=>{const J=new qa;J.setFromCamera(new we(S/innerWidth*2-1,-(U/innerHeight)*2+1),Tt);const z=J.intersectObjects(Be.children,!0).find(se=>se.object.visible);if(!z)return null;const j=[];let Z=z.object;for(;Z;)Z.name&&j.push(Z.name),Z=Z.parent;return{names:j,point:[z.point.x,-z.point.z,z.point.y],material:z.object.material?.name}}}}function Rl(s){xt&&(at.setMode(s,xt.hints),be("btn-orbit").classList.toggle("on",s==="orbit"),be("btn-walk").classList.toggle("on",s==="walk"))}be("btn-day").onclick=()=>Ur("day");be("btn-night").onclick=()=>Ur("night");be("btn-orbit").onclick=()=>{Rl("orbit"),Pl()};be("btn-walk").onclick=()=>{Rl("walk"),Pl()};be("btn-q032").onclick=()=>{xt&&(at.q032View(xt.hints),Pl())};be("btn-m027").onclick=()=>{const s=Le.find(e=>e.hints.cameraFit);s&&Cl(s)};function Cl(s){!s.hints.cameraFit||!xt||(at.fitView(s.hints.cameraFit,xt.hints,wl(s.hints)),cs.placeSun(s.hints))}function Pl(){xt&&cs.placeSun(xt.hints)}be("btn-bench").onclick=async()=>{const s=be("btn-bench");s.disabled=!0,s.textContent="計測中（30秒）…";const e=await Tl(kr,ct,{quality:Fi.name,time:Us,view:at.mode+(at.hasProjectionOverride()?":q032":"")});be("bench-out").textContent=JSON.stringify(e,null,1),s.disabled=!1,s.textContent="30秒計測",console.log("BENCHMARK",JSON.stringify(e))};addEventListener("resize",()=>{ct.setSize(innerWidth,innerHeight),zr.setSize(innerWidth,innerHeight),Tt.aspect=innerWidth/innerHeight,at.hasProjectionOverride()&&xt&&ja(xt.hints)&&!at.fitActive?at.q032View(xt.hints):Tt.updateProjectionMatrix()});let Ld=0;ct.setAnimationLoop(()=>{const s=Math.min(.1,kr.tick());rs?.update(s)||at.update(s),La?.update(),as?.update(Tt.position.x,-Tt.position.z),eo.enabled?zr.render():ct.render(Be,Tt),kn?.frame({calls:ct.info.render.calls,triangles:ct.info.render.triangles,geometries:ct.info.memory.geometries,textures:ct.info.memory.textures,quality:Fi.name});const e=performance.now();e-Ld>500&&(be("perf").textContent=kr.report(ct),Ld=e)});Ky().then(()=>{kn?.ready(),ie.get("bench")==="auto"&&Yy()}).catch(s=>{kn?.error("startup",s instanceof Error?s.message:s),kn?.mark("起動失敗"),Vs(`起動エラー: ${s instanceof Error?s.message:s}`)});const Id=[["c01_qfront","day","6.5,-2.0,1.516,-8,29,12,55"],["c01_qfront","night","6.5,-2.0,1.516,-8,29,12,55"],["c02_hachiko","day","11.6,-47.0,1.871,6,10,6,55"],["x01_walkway","day","-12.6,-68.2,10.2,0.8,30.7,16.2,52.2"],["top_down","day","6.5,-30,190,6.5,-1.9,0,48"],["m027","day","m027"],["q032","night","q032"]];async function Yy(){if(!xt)return;const s=[];for(const[t,n,i]of Id){if(Vs(`自動計測中: ${t}（${n}）… ${s.length+1}/${Id.length}`),Ur(n),i==="m027"){const r=Le.find(a=>a.hints.cameraFit);r&&Cl(r)}else if(i==="q032")at.q032View(xt.hints);else{const r=i.split(",").map(Number);at.poseView([r[0],r[1],r[2]],[r[3],r[4],r[5]],r[6],xt.hints)}await new Promise(r=>setTimeout(r,2e3)),s.push({name:t,...await Tl(kr,ct,{quality:Fi.name,time:n,view:t},10)})}const e=JSON.stringify({kind:"shibuya-core-bench",version:1,ground:Qe?.ok??!1,results:s});be("bench-out").textContent=e,console.log("BENCHMARK_AUTO",e),window.__viewer.bench=s,Vs("自動計測が終わりました。下の結果（JSON）をすべてコピーして送ってください。"),navigator.clipboard?.writeText(e).catch(()=>{})}export{yt as B,De as C,xl as S,C as V,Sl as a};
