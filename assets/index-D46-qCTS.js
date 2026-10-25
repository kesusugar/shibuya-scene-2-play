(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const kf="modulepreload",Uf=function(s){return"/shibuya-scene-2-play/"+s},yh={},Mh=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");i=l(t.map(c=>{if(c=Uf(c),c in yh)return;yh[c]=!0;const h=c.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":kf,h||(u.as="script"),u.crossOrigin="",u.href=c,o&&u.setAttribute("nonce",o),document.head.appendChild(u),h)return new Promise((f,m)=>{u.addEventListener("load",f),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};function Of(s,e,t){const n=new URL(t);n.searchParams.set("person","brian"),s.appendChild(s.ownerDocument.createTextNode(`
Brian8K: ${e}`));const i=s.ownerDocument.createElement("a");i.href=n.href,i.textContent=" 4K Brian で開く",s.appendChild(i)}function Bf(s){const e=s.getAll("person");return{requested:e.length===1&&e[0]==="brian8k",invalid:e.includes("brian8k")&&e.length!==1}}const zf=Object.freeze({standingHeight:1.75,hip:[.035,.56,-.39],torsoRecline:.38,wheel:[-.115,.877,-.405],leftAnkle:[-.43,.359,-.29],rightAnkle:[-.44,.359,-.54],leftWrist:[.005,.86,-.22],rightWrist:[.005,.86,-.59],footDirection:[-.15,0,0],uprightNeck:!0,lookForwardWorld:!0,kneePoleY:.64,kneeSpread:.045,rimSideGrip:!0});const Ac="186",tr={ROTATE:0,DOLLY:1,PAN:2},Ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gf=0,Sh=1,Hf=2,Ya=1,Mu=2,Fr=3,Di=0,Pn=1,Kn=2,fi=0,Or=1,Pl=2,wh=3,Eh=4,Vf=5,js=100,Wf=101,qf=102,Xf=103,jf=104,Kf=200,Yf=201,Jf=202,$f=203,Su=204,wu=205,Zf=206,Qf=207,ep=208,tp=209,np=210,ip=211,sp=212,rp=213,ap=214,Ll=0,Dl=1,Il=2,Vr=3,Fl=4,Nl=5,kl=6,Ul=7,Eu=0,op=1,lp=2,pi=0,Rc=1,Cc=2,Pc=3,Ro=4,Lc=5,Co=6,Dc=7,Th="attached",cp="detached",Tu=300,ps=301,ar=302,Ja=303,Bo=304,Po=306,ms=1e3,Hn=1001,ao=1002,jt=1003,Au=1004,Nr=1005,Mt=1006,$a=1007,Jn=1008,Fn=1009,Ru=1010,Cu=1011,Wr=1012,Ic=1013,mi=1014,Rn=1015,rn=1016,Fc=1017,Nc=1018,qr=1020,Pu=35902,Lu=35899,Du=1021,Iu=1022,Cn=1023,Ii=1026,us=1027,Lo=1028,kc=1029,gs=1030,Uc=1031,Oc=1033,Za=33776,Qa=33777,eo=33778,to=33779,Ol=35840,Bl=35841,zl=35842,Gl=35843,Hl=36196,Vl=37492,Wl=37496,ql=37488,Xl=37489,oo=37490,jl=37491,Kl=37808,Yl=37809,Jl=37810,$l=37811,Zl=37812,Ql=37813,ec=37814,tc=37815,nc=37816,ic=37817,sc=37818,rc=37819,ac=37820,oc=37821,lc=36492,cc=36494,hc=36495,dc=36283,uc=36284,lo=36285,fc=36286,co=2200,ho=2201,hp=2202,Xr=2300,jr=2301,zo=2302,Ah=2303,Js=2400,$s=2401,uo=2402,Bc=2500,dp=2501,up=0,Fu=1,pc=2,fp=3200,mc=0,pp=1,Ai="",Gt="srgb",Ln="srgb-linear",fo="linear",ct="srgb",Go=7680,mp=519,gp=512,bp=513,_p=514,zc=515,xp=516,vp=517,Gc=518,yp=519,Nu=35044,Rh="300 es",ui=2e3,Kr=2001;function Mp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Sp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Yr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wp(){const s=Yr("canvas");return s.style.display="block",s}const Ch={};function po(...s){const e="THREE."+s.shift();console.log(e,...s)}function ku(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ae(...s){s=ku(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ne(...s){s=ku(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function nr(...s){const e=s.join(" ");e in Ch||(Ch[e]=!0,Ae(...s))}function Ep(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Tp={[Ll]:Dl,[Il]:kl,[Fl]:Ul,[Vr]:Nl,[Dl]:Ll,[kl]:Il,[Ul]:Fl,[Nl]:Vr};class Ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ph=1234567;const Br=Math.PI/180,or=180/Math.PI;function $n(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[s&255]+ln[s>>8&255]+ln[s>>16&255]+ln[s>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function We(s,e,t){return Math.max(e,Math.min(t,s))}function Hc(s,e){return(s%e+e)%e}function Ap(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Rp(s,e,t){return s!==e?(t-s)/(e-s):0}function zr(s,e,t){return(1-t)*s+t*e}function Cp(s,e,t,n){return zr(s,e,1-Math.exp(-t*n))}function Pp(s,e=1){return e-Math.abs(Hc(s,e*2)-e)}function Lp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Dp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Ip(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Fp(s,e){return s+Math.random()*(e-s)}function Np(s){return s*(.5-Math.random())}function kp(s){s!==void 0&&(Ph=s);let e=Ph+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Up(s){return s*Br}function Op(s){return s*or}function Bp(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function zp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Gp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Hp(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*f,o*h,o*c);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Yn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Uu={DEG2RAD:Br,RAD2DEG:or,generateUUID:$n,clamp:We,euclideanModulo:Hc,mapLinear:Ap,inverseLerp:Rp,lerp:zr,damp:Cp,pingpong:Pp,smoothstep:Lp,smootherstep:Dp,randInt:Ip,randFloat:Fp,randFloatSpread:Np,seededRandom:kp,degToRad:Up,radToDeg:Op,isPowerOfTwo:Bp,ceilPowerOfTwo:zp,floorPowerOfTwo:Gp,setQuaternionFromProperEuler:Hp,normalize:dt,denormalize:Yn};class _e{static{_e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(d!==x||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*x;g<0&&(u=-u,f=-f,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){const v=Math.acos(g),T=Math.sin(v);p=Math.sin(p*v)/T,o=Math.sin(o*v)/T,l=l*p+u*o,c=c*p+f*o,h=h*p+m*o,d=d*p+x*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+m*o,d=d*p+x*o;const v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*d+l*f-c*u,e[t+1]=l*m+h*u+c*d-o*f,e[t+2]=c*m+h*f+o*u-l*d,e[t+3]=h*m-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{static{C.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ho.copy(this).projectOnVector(e),this.sub(Ho)}reflect(e){return this.sub(Ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ho=new C,Lh=new et;class ke{static{ke.prototype.isMatrix3=!0}constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],x=i[0],g=i[3],p=i[6],v=i[1],T=i[4],b=i[7],y=i[2],E=i[5],R=i[8];return r[0]=a*x+o*v+l*y,r[3]=a*g+o*T+l*E,r[6]=a*p+o*b+l*R,r[1]=c*x+h*v+d*y,r[4]=c*g+h*T+d*E,r[7]=c*p+h*b+d*R,r[2]=u*x+f*v+m*y,r[5]=u*g+f*T+m*E,r[8]=u*p+f*b+m*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,m=t*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=d*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=u*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return nr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vo.makeScale(e,t)),this}rotate(e){return nr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vo.makeRotation(-e)),this}translate(e,t){return nr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vo=new ke,Dh=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ih=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vp(){const s={enabled:!0,workingColorSpace:Ln,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(i.r=Pi(i.r),i.g=Pi(i.g),i.b=Pi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(i.r=ir(i.r),i.g=ir(i.g),i.b=ir(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ai?fo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return nr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return nr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ln]:{primaries:e,whitePoint:n,transfer:fo,toXYZ:Dh,fromXYZ:Ih,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:Dh,fromXYZ:Ih,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),s}const Ke=Vp();function Pi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ir(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ys;class Wp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=Yr("canvas")),ys.width=e.width,ys.height=e.height;const i=ys.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ys}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Pi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qp=0;class Vc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Wo(i[a].image)):r.push(Wo(i[a]))}else r=Wo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Wo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Wp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}let Xp=0;const qo=new C;class Ht extends Ni{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=Hn,i=Hn,r=Mt,a=Jn,o=Cn,l=Fn,c=Ht.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=$n(),this.name="",this.source=new Vc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qo).x}get height(){return this.source.getSize(qo).y}get depth(){return this.source.getSize(qo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ms:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ms:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Tu;Ht.DEFAULT_ANISOTROPY=1;class pt{static{pt.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,b=(f+1)/2,y=(p+1)/2,E=(h+u)/4,R=(d+x)/4,_=(m+g)/4;return T>b&&T>y?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=E/n,r=R/n):b>y?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=E/i,r=_/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=R/r,i=_/r),this.set(n,i,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jp extends Ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new Ht(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Mt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Vc(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yn extends jp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ou extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kp extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Re{static{Re.prototype.isMatrix4=!0}constructor(e,t,n,i,r,a,o,l,c,h,d,u,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,u,f,m,x,g)}set(e,t,n,i,r,a,o,l,c,h,d,u,f,m,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ms.setFromMatrixColumn(e,0).length(),r=1/Ms.setFromMatrixColumn(e,1).length(),a=1/Ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,m=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,m=c*h,x=c*d;t[0]=u+x*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,m=c*h,x=c*d;t[0]=u-x*o,t[4]=-a*d,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,m=o*h,x=o*d;t[0]=l*h,t[4]=m*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=m*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+m,t[10]=u-x*d}else if(e.order==="XZY"){const u=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=f*d-m,t[2]=m*d-f,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yp,e,Jp)}lookAt(e,t,n){const i=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),zi.crossVectors(n,Dn),zi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),zi.crossVectors(n,Dn)),zi.normalize(),ha.crossVectors(Dn,zi),i[0]=zi.x,i[4]=ha.x,i[8]=Dn.x,i[1]=zi.y,i[5]=ha.y,i[9]=Dn.y,i[2]=zi.z,i[6]=ha.z,i[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],v=n[3],T=n[7],b=n[11],y=n[15],E=i[0],R=i[4],_=i[8],w=i[12],P=i[1],L=i[5],F=i[9],k=i[13],I=i[2],O=i[6],S=i[10],N=i[14],K=i[3],U=i[7],V=i[11],Y=i[15];return r[0]=a*E+o*P+l*I+c*K,r[4]=a*R+o*L+l*O+c*U,r[8]=a*_+o*F+l*S+c*V,r[12]=a*w+o*k+l*N+c*Y,r[1]=h*E+d*P+u*I+f*K,r[5]=h*R+d*L+u*O+f*U,r[9]=h*_+d*F+u*S+f*V,r[13]=h*w+d*k+u*N+f*Y,r[2]=m*E+x*P+g*I+p*K,r[6]=m*R+x*L+g*O+p*U,r[10]=m*_+x*F+g*S+p*V,r[14]=m*w+x*k+g*N+p*Y,r[3]=v*E+T*P+b*I+y*K,r[7]=v*R+T*L+b*O+y*U,r[11]=v*_+T*F+b*S+y*V,r[15]=v*w+T*k+b*N+y*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15],v=l*f-c*u,T=o*f-c*d,b=o*u-l*d,y=a*f-c*h,E=a*u-l*h,R=a*d-o*h;return t*(x*v-g*T+p*b)-n*(m*v-g*y+p*E)+i*(m*T-x*y+p*R)-r*(m*b-x*E+g*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],v=t*o-n*a,T=t*l-i*a,b=t*c-r*a,y=n*l-i*o,E=n*c-r*o,R=i*c-r*l,_=h*x-d*m,w=h*g-u*m,P=h*p-f*m,L=d*g-u*x,F=d*p-f*x,k=u*p-f*g,I=v*k-T*F+b*L+y*P-E*w+R*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/I;return e[0]=(o*k-l*F+c*L)*O,e[1]=(i*F-n*k-r*L)*O,e[2]=(x*R-g*E+p*y)*O,e[3]=(u*E-d*R-f*y)*O,e[4]=(l*P-a*k-c*w)*O,e[5]=(t*k-i*P+r*w)*O,e[6]=(g*b-m*R-p*T)*O,e[7]=(h*R-u*b+f*T)*O,e[8]=(a*F-o*P+c*_)*O,e[9]=(n*P-t*F-r*_)*O,e[10]=(m*E-x*b+p*v)*O,e[11]=(d*b-h*E-f*v)*O,e[12]=(o*w-a*L-l*_)*O,e[13]=(t*L-n*w+i*_)*O,e[14]=(x*T-m*y-g*v)*O,e[15]=(h*y-d*T+u*v)*O,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,m=r*d,x=a*h,g=a*d,p=o*d,v=l*c,T=l*h,b=l*d,y=n.x,E=n.y,R=n.z;return i[0]=(1-(x+p))*y,i[1]=(f+b)*y,i[2]=(m-T)*y,i[3]=0,i[4]=(f-b)*E,i[5]=(1-(u+p))*E,i[6]=(g+v)*E,i[7]=0,i[8]=(m+T)*R,i[9]=(g-v)*R,i[10]=(1-(u+x))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ms.set(i[0],i[1],i[2]).length();const o=Ms.set(i[4],i[5],i[6]).length(),l=Ms.set(i[8],i[9],i[10]).length();r<0&&(a=-a),qn.copy(this);const c=1/a,h=1/o,d=1/l;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,t.setFromRotationMatrix(qn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=ui,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===ui)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Kr)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=ui,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i);let m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===ui)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===Kr)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ms=new C,qn=new Re,Yp=new C(0,0,0),Jp=new C(1,1,1),zi=new C,ha=new C,Dn=new C,Fh=new Re,Nh=new et;class Fi{constructor(e=0,t=0,n=0,i=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class Wc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $p=0;const kh=new C,Ss=new et,bi=new Re,da=new C,br=new C,Zp=new C,Qp=new et,Uh=new C(1,0,0),Oh=new C(0,1,0),Bh=new C(0,0,1),zh={type:"added"},em={type:"removed"},ws={type:"childadded",child:null},Xo={type:"childremoved",child:null};class wt extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new C,t=new Fi,n=new et,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new ke}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(Uh,e)}rotateY(e){return this.rotateOnAxis(Oh,e)}rotateZ(e){return this.rotateOnAxis(Bh,e)}translateOnAxis(e,t){return kh.copy(e).applyQuaternion(this.quaternion),this.position.add(kh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uh,e)}translateY(e){return this.translateOnAxis(Oh,e)}translateZ(e){return this.translateOnAxis(Bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?da.copy(e):da.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(br,da,this.up):bi.lookAt(da,br,this.up),this.quaternion.setFromRotationMatrix(bi),i&&(bi.extractRotation(i.matrixWorld),Ss.setFromRotationMatrix(bi),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zh),ws.child=e,this.dispatchEvent(ws),ws.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(em),Xo.child=e,this.dispatchEvent(Xo),Xo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zh),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,e,Zp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,Qp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}wt.DEFAULT_UP=new C(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Be extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tm={type:"move"};class jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},ua={h:0,s:0,l:0};function Ko(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=Hc(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ko(a,r,e+1/3),this.g=Ko(a,r,e),this.b=Ko(a,r,e-1/3)}return Ke.colorSpaceToWorking(this,i),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=Bu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return Ke.workingToColorSpace(cn.copy(this),e),Math.round(We(cn.r*255,0,255))*65536+Math.round(We(cn.g*255,0,255))*256+Math.round(We(cn.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(cn.copy(this),t);const n=cn.r,i=cn.g,r=cn.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Gt){Ke.workingToColorSpace(cn.copy(this),e);const t=cn.r,n=cn.g,i=cn.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(ua);const n=zr(Gi.h,ua.h,t),i=zr(Gi.s,ua.s,t),r=zr(Gi.l,ua.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new De;De.NAMES=Bu;class nm extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Xn=new C,_i=new C,Yo=new C,xi=new C,Es=new C,Ts=new C,Gh=new C,Jo=new C,$o=new C,Zo=new C,Qo=new pt,el=new pt,tl=new pt;class An{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xn.subVectors(e,t),i.cross(Xn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Xn.subVectors(i,t),_i.subVectors(n,t),Yo.subVectors(e,t);const a=Xn.dot(Xn),o=Xn.dot(_i),l=Xn.dot(Yo),c=_i.dot(_i),h=_i.dot(Yo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(a,xi.y),l.addScaledVector(o,xi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Qo.setScalar(0),el.setScalar(0),tl.setScalar(0),Qo.fromBufferAttribute(e,t),el.fromBufferAttribute(e,n),tl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Qo,r.x),a.addScaledVector(el,r.y),a.addScaledVector(tl,r.z),a}static isFrontFacing(e,t,n,i){return Xn.subVectors(n,t),_i.subVectors(e,t),Xn.cross(_i).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Xn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return An.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Es.subVectors(i,n),Ts.subVectors(r,n),Jo.subVectors(e,n);const l=Es.dot(Jo),c=Ts.dot(Jo);if(l<=0&&c<=0)return t.copy(n);$o.subVectors(e,i);const h=Es.dot($o),d=Ts.dot($o);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Es,a);Zo.subVectors(e,r);const f=Es.dot(Zo),m=Ts.dot(Zo);if(m>=0&&f<=m)return t.copy(r);const x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Ts,o);const g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Gh.subVectors(r,i),o=(d-h)/(d-h+(f-m)),t.copy(i).addScaledVector(Gh,o);const p=1/(g+x+u);return a=x*p,o=u*p,t.copy(n).addScaledVector(Es,a).addScaledVector(Ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class mt{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jn):jn.fromBufferAttribute(r,a),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fa.copy(n.boundingBox)),fa.applyMatrix4(e.matrixWorld),this.union(fa)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),pa.subVectors(this.max,_r),As.subVectors(e.a,_r),Rs.subVectors(e.b,_r),Cs.subVectors(e.c,_r),Hi.subVectors(Rs,As),Vi.subVectors(Cs,Rs),es.subVectors(As,Cs);let t=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-es.z,es.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,es.z,0,-es.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-es.y,es.x,0];return!nl(t,As,Rs,Cs,pa)||(t=[1,0,0,0,1,0,0,0,1],!nl(t,As,Rs,Cs,pa))?!1:(ma.crossVectors(Hi,Vi),t=[ma.x,ma.y,ma.z],nl(t,As,Rs,Cs,pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vi=[new C,new C,new C,new C,new C,new C,new C,new C],jn=new C,fa=new mt,As=new C,Rs=new C,Cs=new C,Hi=new C,Vi=new C,es=new C,_r=new C,pa=new C,ma=new C,ts=new C;function nl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ts.fromArray(s,r);const o=i.x*Math.abs(ts.x)+i.y*Math.abs(ts.y)+i.z*Math.abs(ts.z),l=e.dot(ts),c=t.dot(ts),h=n.dot(ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ri=im();function im(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function sm(s){Math.abs(s)>65504&&Ae("DataUtils.toHalfFloat(): Value out of range."),s=We(s,-65504,65504),Ri.floatView[0]=s;const e=Ri.uint32View[0],t=e>>23&511;return Ri.baseTable[t]+((e&8388607)>>Ri.shiftTable[t])}function rm(s){const e=s>>10;return Ri.uint32View[0]=Ri.mantissaTable[Ri.offsetTable[e]+(s&1023)]+Ri.exponentTable[e],Ri.floatView[0]}class ga{static toHalfFloat(e){return sm(e)}static fromHalfFloat(e){return rm(e)}}const Bt=new C,ba=new _e;let am=0;class Kt extends Ni{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:am++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nu,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ba.fromBufferAttribute(this,t),ba.applyMatrix3(e),this.setXY(t,ba.x,ba.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class zu extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gu extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Nt extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const om=new mt,xr=new C,il=new C;class gi{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):om.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);const t=xr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(xr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(il)),this.expandByPoint(xr.copy(e.center).sub(il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let lm=0;const Un=new Re,sl=new wt,Ps=new C,In=new mt,vr=new mt,Zt=new C;class tn extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mp(e)?Gu:zu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,n){return Un.makeTranslation(e,t,n),this.applyMatrix4(Un),this}scale(e,t,n){return Un.makeScale(e,t,n),this.applyMatrix4(Un),this}lookAt(e){return sl.lookAt(e),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Nt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];vr.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(In.min,vr.min),In.expandByPoint(Zt),Zt.addVectors(In.max,vr.max),In.expandByPoint(Zt)):(In.expandByPoint(vr.min),In.expandByPoint(vr.max))}In.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Zt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Zt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Zt.fromBufferAttribute(o,c),l&&(Ps.fromBufferAttribute(e,c),Zt.add(Ps)),i=Math.max(i,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Kt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new C,l[_]=new C;const c=new C,h=new C,d=new C,u=new _e,f=new _e,m=new _e,x=new C,g=new C;function p(_,w,P){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,P),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,P),h.sub(c),d.sub(c),f.sub(u),m.sub(u);const L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(L),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),o[_].add(x),o[w].add(x),o[P].add(x),l[_].add(g),l[w].add(g),l[P].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let _=0,w=v.length;_<w;++_){const P=v[_],L=P.start,F=P.count;for(let k=L,I=L+F;k<I;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const T=new C,b=new C,y=new C,E=new C;function R(_){y.fromBufferAttribute(i,_),E.copy(y);const w=o[_];T.copy(w),T.sub(y.multiplyScalar(y.dot(w))).normalize(),b.crossVectors(E,w);const L=b.dot(l[_])<0?-1:1;a.setXYZW(_,T.x,T.y,T.z,L)}for(let _=0,w=v.length;_<w;++_){const P=v[_],L=P.start,F=P.count;for(let k=L,I=L+F;k<I;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,d=new C;if(e)for(let u=0,f=e.count;u<f;u+=3){const m=e.getX(u+0),x=e.getX(u+1),g=e.getX(u+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new Kt(u,h,d)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nu,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const un=new C;class Jr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){po("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Jr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){po("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const rl=new C,cm=new C,hm=new ke;class Ti{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=rl.subVectors(n,t).cross(cm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(rl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||hm.getNormalMatrix(e),i=this.coplanarPoint(rl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let dm=0;class Zn extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=Or,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Su,this.blendDst=wu,this.blendEquation=js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ti().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _e().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class um extends Zn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ls;const yr=new C,Ds=new C,Is=new C,Fs=new _e,Mr=new _e,Vu=new Re,_a=new C,Sr=new C,xa=new C,Hh=new _e,al=new _e,Vh=new _e;class wS extends wt{constructor(e=new um){if(super(),this.isSprite=!0,this.type="Sprite",Ls===void 0){Ls=new tn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Hu(t,5);Ls.setIndex([0,1,2,0,2,3]),Ls.setAttribute("position",new Jr(n,3,0,!1)),Ls.setAttribute("uv",new Jr(n,2,3,!1))}this.geometry=Ls,this.material=e,this.center=new _e(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ds.setFromMatrixScale(this.matrixWorld),Vu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Is.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ds.multiplyScalar(-Is.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;va(_a.set(-.5,-.5,0),Is,a,Ds,i,r),va(Sr.set(.5,-.5,0),Is,a,Ds,i,r),va(xa.set(.5,.5,0),Is,a,Ds,i,r),Hh.set(0,0),al.set(1,0),Vh.set(1,1);let o=e.ray.intersectTriangle(_a,Sr,xa,!1,yr);if(o===null&&(va(Sr.set(-.5,.5,0),Is,a,Ds,i,r),al.set(0,1),o=e.ray.intersectTriangle(_a,xa,Sr,!1,yr),o===null))return;const l=e.ray.origin.distanceTo(yr);l<e.near||l>e.far||t.push({distance:l,point:yr.clone(),uv:An.getInterpolation(yr,_a,Sr,xa,Hh,al,Vh,new _e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function va(s,e,t,n,i,r){Fs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Mr.x=r*Fs.x-i*Fs.y,Mr.y=i*Fs.x+r*Fs.y):Mr.copy(Fs),s.copy(e),s.x+=Mr.x,s.y+=Mr.y,s.applyMatrix4(Vu)}const yi=new C,ol=new C,ya=new C,Ma=new C;class hr{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ol.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),Ma.copy(this.origin).sub(ol);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ya),o=Ma.dot(this.direction),l=-Ma.dot(ya),c=Ma.lengthSq(),h=Math.abs(1-a*a);let d,u,f,m;if(h>0)if(d=a*l-o,u=a*o-l,m=r*h,d>=0)if(u>=-m)if(u<=m){const x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ol).addScaledVector(ya,u),f}intersectSphere(e,t){if(e.radius<0)return null;yi.subVectors(e.center,this.origin);const n=yi.dot(this.direction),i=yi.dot(yi)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,n,i,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,m=t.x-a.x,x=t.y-a.y,g=t.z-a.z,p=n.x-a.x,v=n.y-a.y,T=n.z-a.z,b=Math.abs(l),y=Math.abs(c),E=Math.abs(h);let R,_,w,P,L,F,k,I,O,S,N,K;if(b>=y&&b>=E?(w=l,F=d,O=m,K=p,l>=0?(R=c,_=h,P=u,L=f,k=x,I=g,S=v,N=T):(R=h,_=c,P=f,L=u,k=g,I=x,S=T,N=v)):y>=E?(w=c,F=u,O=x,K=v,c>=0?(R=h,_=l,P=f,L=d,k=g,I=m,S=T,N=p):(R=l,_=h,P=d,L=f,k=m,I=g,S=p,N=T)):(w=h,F=f,O=g,K=T,h>=0?(R=l,_=c,P=d,L=u,k=m,I=x,S=p,N=v):(R=c,_=l,P=u,L=d,k=x,I=m,S=v,N=p)),w===0)return null;const U=R/w,V=_/w,Y=1/w,se=P-U*F,re=L-V*F,Je=k-U*O,qe=I-V*O,tt=S-U*K,J=N-V*K,te=tt*qe-J*Je,Me=se*J-re*tt,Ue=Je*re-qe*se;if(i){if(te<0||Me<0||Ue<0)return null}else if((te<0||Me<0||Ue<0)&&(te>0||Me>0||Ue>0))return null;const ve=te+Me+Ue;if(ve===0)return null;const Xe=Y*(te*F+Me*O+Ue*K);return(ve>0?Xe<0:Xe>0)?null:this.at(Xe/ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vn extends Zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=Eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wh=new Re,ns=new hr,Sa=new gi,qh=new C,wa=new C,Ea=new C,Ta=new C,ll=new C,Aa=new C,Xh=new C,Ra=new C;class Lt extends wt{constructor(e=new tn,t=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Aa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(ll.fromBufferAttribute(d,e),a?Aa.addScaledVector(ll,h):Aa.addScaledVector(ll.sub(t),h))}t.add(Aa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(r),ns.copy(e.ray).recast(e.near),!(Sa.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Sa,qh)===null||ns.origin.distanceToSquared(qh)>(e.far-e.near)**2))&&(Wh.copy(r).invert(),ns.copy(e.ray).applyMatrix4(Wh),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){const g=u[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),T=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let b=v,y=T;b<y;b+=3){const E=o.getX(b),R=o.getX(b+1),_=o.getX(b+2);i=Ca(this,p,e,n,c,h,d,E,R,_),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const v=o.getX(g),T=o.getX(g+1),b=o.getX(g+2);i=Ca(this,a,e,n,c,h,d,v,T,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){const g=u[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),T=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let b=v,y=T;b<y;b+=3){const E=b,R=b+1,_=b+2;i=Ca(this,p,e,n,c,h,d,E,R,_),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const v=g,T=g+1,b=g+2;i=Ca(this,a,e,n,c,h,d,v,T,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function fm(s,e,t,n,i,r,a,o){let l;if(e.side===Pn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Di,o),l===null)return null;Ra.copy(o),Ra.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ra);return c<t.near||c>t.far?null:{distance:c,point:Ra.clone(),object:s}}function Ca(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,wa),s.getVertexPosition(l,Ea),s.getVertexPosition(c,Ta);const h=fm(s,e,t,n,wa,Ea,Ta,Xh);if(h){const d=new C;An.getBarycoord(Xh,wa,Ea,Ta,d),i&&(h.uv=An.getInterpolatedAttribute(i,o,l,c,d,new _e)),r&&(h.uv1=An.getInterpolatedAttribute(r,o,l,c,d,new _e)),a&&(h.normal=An.getInterpolatedAttribute(a,o,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new C,materialIndex:0};An.getNormal(wa,Ea,Ta,u.normal),h.face=u,h.barycoord=d}return h}const wr=new pt,jh=new pt,Kh=new pt,pm=new pt,Yh=new Re,Pa=new C,cl=new gi,Jh=new Re,hl=new hr;class mm extends Lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Th,this.bindMatrix=new Re,this.bindMatrixInverse=new Re,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pa),this.boundingBox.expandByPoint(Pa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pa),this.boundingSphere.expandByPoint(Pa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cl.copy(this.boundingSphere),cl.applyMatrix4(i),e.ray.intersectsSphere(cl)!==!1&&(Jh.copy(i).invert(),hl.copy(e.ray).applyMatrix4(Jh),!(this.boundingBox!==null&&hl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,hl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Th?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ae("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;jh.fromBufferAttribute(i.attributes.skinIndex,e),Kh.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(wr.copy(t),t.set(0,0,0,0)):(wr.set(...t,1),t.set(0,0,0)),wr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=Kh.getComponent(r);if(a!==0){const o=jh.getComponent(r);Yh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(pm.copy(wr).applyMatrix4(Yh),a)}}return t.isVector4&&(t.w=wr.w),t.applyMatrix4(this.bindMatrixInverse)}}class Wu extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class bs extends Ht{constructor(e=null,t=1,n=1,i,r,a,o,l,c=jt,h=jt,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $h=new Re,gm=new Re;class qc{constructor(e=[],t=[]){this.uuid=$n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ae("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Re)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Re;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:gm;$h.multiplyMatrices(o,t[r]),$h.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new qc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new bs(t,e,e,Cn,Rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Ae("Skeleton: No bone found with UUID:",r),a=new Wu),this.bones.push(a),this.boneInverses.push(new Re().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class mo extends Kt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ns=new Re,Zh=new Re,La=[],Qh=new mt,bm=new Re,Er=new Lt,Tr=new gi;class go extends Lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,bm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ns),Qh.copy(e.boundingBox).applyMatrix4(Ns),this.boundingBox.union(Qh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ns),Tr.copy(e.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(Tr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tr.copy(this.boundingSphere),Tr.applyMatrix4(n),e.ray.intersectsSphere(Tr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ns),Zh.multiplyMatrices(n,Ns),Er.matrixWorld=Zh,Er.raycast(e,La);for(let a=0,o=La.length;a<o;a++){const l=La[a];l.instanceId=r,l.object=this,t.push(l)}La.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new mo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new bs(new Float32Array(i*this.count),i,this.count,Lo,Rn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const is=new gi,_m=new _e(.5,.5),Da=new C;class Xc{constructor(e=new Ti,t=new Ti,n=new Ti,i=new Ti,r=new Ti,a=new Ti){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ui,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],v=r[12],T=r[13],b=r[14],y=r[15];if(i[0].setComponents(c-a,f-h,p-m,y-v).normalize(),i[1].setComponents(c+a,f+h,p+m,y+v).normalize(),i[2].setComponents(c+o,f+d,p+x,y+T).normalize(),i[3].setComponents(c-o,f-d,p-x,y-T).normalize(),n)i[4].setComponents(l,u,g,b).normalize(),i[5].setComponents(c-l,f-u,p-g,y-b).normalize();else if(i[4].setComponents(c-l,f-u,p-g,y-b).normalize(),t===ui)i[5].setComponents(c+l,f+u,p+g,y+b).normalize();else if(t===Kr)i[5].setComponents(l,u,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){is.center.set(0,0,0);const t=_m.distanceTo(e.center);return is.radius=.7071067811865476+t,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Da.x=i.normal.x>0?e.max.x:e.min.x,Da.y=i.normal.y>0?e.max.y:e.min.y,Da.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qu extends Zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bo=new C,_o=new C,ed=new Re,Ar=new hr,Ia=new gi,dl=new C,td=new C;class jc extends wt{constructor(e=new tn,t=new qu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)bo.fromBufferAttribute(t,i-1),_o.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=bo.distanceTo(_o);e.setAttribute("lineDistance",new Nt(n,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(i),Ia.radius+=r,e.ray.intersectsSphere(Ia)===!1)return;ed.copy(i).invert(),Ar.copy(e.ray).applyMatrix4(ed);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=c){const p=h.getX(x),v=h.getX(x+1),T=Fa(this,e,Ar,l,p,v,x);T&&t.push(T)}if(this.isLineLoop){const x=h.getX(m-1),g=h.getX(f),p=Fa(this,e,Ar,l,x,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=c){const p=Fa(this,e,Ar,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=Fa(this,e,Ar,l,m-1,f,m-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Fa(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(bo.fromBufferAttribute(o,i),_o.fromBufferAttribute(o,r),t.distanceSqToSegment(bo,_o,dl,td)>n)return;dl.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(dl);if(!(c<e.near||c>e.far))return{distance:c,point:td.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const nd=new C,id=new C;class xm extends jc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)nd.fromBufferAttribute(t,i),id.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+nd.distanceTo(id);e.setAttribute("lineDistance",new Nt(n,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vm extends jc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Xu extends Zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sd=new Re,gc=new hr,Na=new gi,ka=new C;class ym extends wt{constructor(e=new tn,t=new Xu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(i),Na.radius+=r,e.ray.intersectsSphere(Na)===!1)return;sd.copy(i).invert(),gc.copy(e.ray).applyMatrix4(sd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=u,x=f;m<x;m++){const g=c.getX(m);ka.fromBufferAttribute(d,g),rd(ka,g,l,i,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=u,x=f;m<x;m++)ka.fromBufferAttribute(d,m),rd(ka,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function rd(s,e,t,n,i,r,a){const o=gc.distanceSqToPoint(s);if(o<t){const l=new C;gc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ju extends Ht{constructor(e=[],t=ps,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ES extends Ht{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $r extends Ht{constructor(e,t,n=mi,i,r,a,o=jt,l=jt,c,h=Ii,d=1){if(h!==Ii&&h!==us)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Mm extends $r{constructor(e,t=mi,n=ps,i,r,a=jt,o=jt,l,c=Ii){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ku extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class dr extends tn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(d,2));function m(x,g,p,v,T,b,y,E,R,_,w){const P=b/R,L=y/_,F=b/2,k=y/2,I=E/2,O=R+1,S=_+1;let N=0,K=0;const U=new C;for(let V=0;V<S;V++){const Y=V*L-k;for(let se=0;se<O;se++){const re=se*P-F;U[x]=re*v,U[g]=Y*T,U[p]=I,c.push(U.x,U.y,U.z),U[x]=0,U[g]=0,U[p]=E>0?1:-1,h.push(U.x,U.y,U.z),d.push(se/R),d.push(1-V/_),N+=1}}for(let V=0;V<_;V++)for(let Y=0;Y<R;Y++){const se=u+Y+O*V,re=u+Y+O*(V+1),Je=u+(Y+1)+O*(V+1),qe=u+(Y+1)+O*V;l.push(se,re,qe),l.push(re,Je,qe),K+=6}o.addGroup(f,K,w),f+=K,u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Kc extends tn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new C,h=new _e;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=n+d/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Nt(a,3)),this.setAttribute("normal",new Nt(o,3)),this.setAttribute("uv",new Nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Yc extends tn{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let m=0;const x=[],g=n/2;let p=0;v(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Nt(d,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(f,2));function v(){const b=new C,y=new C;let E=0;const R=(t-e)/n;for(let _=0;_<=r;_++){const w=[],P=_/r,L=P*(t-e)+e;for(let F=0;F<=i;F++){const k=F/i,I=k*l+o,O=Math.sin(I),S=Math.cos(I);y.x=L*O,y.y=-P*n+g,y.z=L*S,d.push(y.x,y.y,y.z),b.set(O,R,S).normalize(),u.push(b.x,b.y,b.z),f.push(k,1-P),w.push(m++)}x.push(w)}for(let _=0;_<i;_++)for(let w=0;w<r;w++){const P=x[w][_],L=x[w+1][_],F=x[w+1][_+1],k=x[w][_+1];(e>0||w!==0)&&(h.push(P,L,k),E+=3),(t>0||w!==r-1)&&(h.push(L,F,k),E+=3)}c.addGroup(p,E,0),p+=E}function T(b){const y=m,E=new _e,R=new C;let _=0;const w=b===!0?e:t,P=b===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,g*P,0),u.push(0,P,0),f.push(.5,.5),m++;const L=m;for(let F=0;F<=i;F++){const I=F/i*l+o,O=Math.cos(I),S=Math.sin(I);R.x=w*S,R.y=g*P,R.z=w*O,d.push(R.x,R.y,R.z),u.push(0,P,0),E.x=O*.5+.5,E.y=S*.5*P+.5,f.push(E.x,E.y),m++}for(let F=0;F<i;F++){const k=y+F,I=L+F;b===!0?h.push(I,I+1,k):h.push(I+1,I,k),_+=3}c.addGroup(p,_,b===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Do extends tn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){const v=p*u-a;for(let T=0;T<c;T++){const b=T*d-r;m.push(b,-v,0),x.push(0,0,1),g.push(T/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const T=v+c*p,b=v+c*(p+1),y=v+1+c*(p+1),E=v+1+c*p;f.push(T,b,E),f.push(b,y,E)}this.setIndex(f),this.setAttribute("position",new Nt(m,3)),this.setAttribute("normal",new Nt(x,3)),this.setAttribute("uv",new Nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.width,e.height,e.widthSegments,e.heightSegments)}}function lr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(ad(i))i.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(ad(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function pn(s){const e={};for(let t=0;t<s.length;t++){const n=lr(s[t]);for(const i in n)e[i]=n[i]}return e}function ad(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Sm(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Yu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Zr={clone:lr,merge:pn};var wm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends Zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wm,this.fragmentShader=Em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=Sm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new De().setHex(i.value);break;case"v2":this.uniforms[n].value=new _e().fromArray(i.value);break;case"v3":this.uniforms[n].value=new C().fromArray(i.value);break;case"v4":this.uniforms[n].value=new pt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ke().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Re().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ju extends hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zi extends Zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qn extends Zi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Tm extends Zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Am extends Zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ji(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function no(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Rm(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function od(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Cm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class ur{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Pm extends ur{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Js,endingEnd:Js}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case $s:r=e,o=2*t-n;break;case uo:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $s:a=e,l=2*n-t;break;case uo:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),x=m*m,g=x*m,p=-u*g+2*u*x-u*m,v=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*m+1,T=(-1-f)*g+(1.5+f)*x+.5*m,b=f*g-f*x;for(let y=0;y!==o;++y)r[y]=p*a[h+y]+v*a[c+y]+T*a[l+y]+b*a[d+y];return r}}class $u extends ur{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}}class Lm extends ur{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Dm extends ur{interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){const m=(n-t)/(i-t),x=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*m;return r}const u=o*2,f=e-1;for(let m=0;m!==o;++m){const x=a[c+m],g=a[l+m],p=f*u+m*2,v=d[p],T=d[p+1],b=e*u+m*2,y=h[b],E=h[b+1],R=Fm(n,t,v,y,i);r[m]=Zu(R,x,T,E,g)}return r}}function Zu(s,e,t,n,i){const r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Im(s,e,t,n,i){const r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Fm(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){const o=Zu(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;const l=Im(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class ei{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ji(t,this.TimeBufferType),this.values=ji(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ji(e.times,Array),values:ji(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),no(e.settings)&&(n.settings={inTangents:ji(e.settings.inTangents,Array),outTangents:ji(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $u(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Dm(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Xr:t=this.InterpolantFactoryMethodDiscrete;break;case jr:t=this.InterpolantFactoryMethodLinear;break;case zo:t=this.InterpolantFactoryMethodSmooth;break;case Ah:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ae("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xr;case this.InterpolantFactoryMethodLinear:return jr;case this.InterpolantFactoryMethodSmooth:return zo;case this.InterpolantFactoryMethodBezier:return Ah}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;no(this.settings)&&(ld(this.settings.inTangents,e),ld(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Ne("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ne("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Sp(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Ne("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===zo,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const d=o*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){const x=t[d+m];if(x!==t[u+m]||x!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,no(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function ld(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}ei.prototype.ValueTypeName="";ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=jr;class fr extends ei{constructor(e,t,n){super(e,t,n)}}fr.prototype.ValueTypeName="bool";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=Xr;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;class Qu extends ei{constructor(e,t,n,i){super(e,t,n,i)}}Qu.prototype.ValueTypeName="color";class Qr extends ei{constructor(e,t,n,i){super(e,t,n,i)}}Qr.prototype.ValueTypeName="number";class Nm extends ur{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)et.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ea extends ei{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Nm(this.times,this.values,this.getValueSize(),e)}}ea.prototype.ValueTypeName="quaternion";ea.prototype.InterpolantFactoryMethodSmooth=void 0;class pr extends ei{constructor(e,t,n){super(e,t,n)}}pr.prototype.ValueTypeName="string";pr.prototype.ValueBufferType=Array;pr.prototype.DefaultInterpolation=Xr;pr.prototype.InterpolantFactoryMethodLinear=void 0;pr.prototype.InterpolantFactoryMethodSmooth=void 0;class xo extends ei{constructor(e,t,n,i){super(e,t,n,i)}}xo.prototype.ValueTypeName="vector";class vo{constructor(e="",t=-1,n=[],i=Bc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=$n(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Um(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(ei.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Rm(l);l=od(l,1,h),c=od(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Qr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function km(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qr;case"vector":case"vector2":case"vector3":case"vector4":return xo;case"color":return Qu;case"quaternion":return ea;case"bool":case"boolean":return fr;case"string":return pr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Um(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=km(s.type);if(s.times===void 0){const n=[],i=[];Cm(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),no(s.settings)&&(t.settings={inTangents:ji(s.settings.inTangents,Float32Array),outTangents:ji(s.settings.outTangents,Float32Array)}),t}const Ci={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(cd(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!cd(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function cd(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Om{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Jc=new Om;class _s{constructor(e){this.manager=e!==void 0?e:Jc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}_s.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mi={};class Bm extends Error{constructor(e,t){super(e),this.response=t}}class $c extends _s{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ci.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:n,onError:i});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Mi[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,m=f!==0;let x=0;const g=new ReadableStream({start(p){v();function v(){d.read().then(({done:T,value:b})=>{if(T)p.close();else{x+=b.byteLength;const y=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let E=0,R=h.length;E<R;E++){const _=h[E];_.onProgress&&_.onProgress(y)}p.enqueue(b),v()}},T=>{p.error(T)})}}});return new Response(g)}else throw new Bm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Ci.add(`file:${e}`,c);const h=Mi[e];delete Mi[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Mi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Mi[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ks=new WeakMap;class zm extends _s{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ci.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=ks.get(a);d===void 0&&(d=[],ks.set(a,d)),d.push({onLoad:t,onError:i})}return a}const o=Yr("img");function l(){h(),t&&t(this);const d=ks.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}ks.delete(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),Ci.remove(`image:${e}`);const u=ks.get(this)||[];for(let f=0;f<u.length;f++){const m=u[f];m.onError&&m.onError(d)}ks.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ci.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Gm extends _s{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new bs,o=new $c(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){i!==void 0?i(h):Ne(h);return}r._applyTexData(a,c),t&&t(a,c)},n,i),a}createDataTexture(e){const t=new bs;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Hn,e.wrapT=t.wrapT!==void 0?t.wrapT:Hn,e.magFilter=t.magFilter!==void 0?t.magFilter:Mt,e.minFilter=t.minFilter!==void 0?t.minFilter:Mt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Jn),t.mipmapCount===1&&(e.minFilter=Mt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class ef extends _s{constructor(e){super(e)}load(e,t,n,i){const r=new Ht,a=new zm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ia extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Hm extends ia{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ul=new Re,hd=new C,dd=new C;class Zc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xc,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;hd.setFromMatrixPosition(e.matrixWorld),t.position.copy(hd),dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){ul.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ul,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Kr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ua=new C,Oa=new et,ii=new C;class tf extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ua,Oa,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ua,Oa,ii.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ua,Oa,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ua,Oa,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new C,ud=new _e,fd=new _e;class vn extends tf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return or*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,ud,fd),t.subVectors(fd,ud)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Br*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Vm extends Zc{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=or*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Qc extends ia{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Vm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Wm extends Zc{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0}}class nf extends ia{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Wm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class sa extends tf{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qm extends Zc{constructor(){super(new sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sf extends ia{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new qm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Xm extends ia{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const fl=new WeakMap;class jm extends _s{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ae("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ae("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ci.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{fl.has(a)===!0?(i&&i(fl.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ci.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),fl.set(l,c),Ci.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ci.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Us=-90,Os=1;class Km extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new vn(Us,Os,e,t);i.layers=this.layers,this.add(i);const r=new vn(Us,Os,e,t);r.layers=this.layers,this.add(r);const a=new vn(Us,Os,e,t);a.layers=this.layers,this.add(a);const o=new vn(Us,Os,e,t);o.layers=this.layers,this.add(o);const l=new vn(Us,Os,e,t);l.layers=this.layers,this.add(l);const c=new vn(Us,Os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ui)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Ym extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Jm{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=$m.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function $m(){this._document.hidden===!1&&this.reset()}class Zm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){et.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;et.multiplyQuaternionsFlat(e,a,e,t,e,n),et.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const eh="\\[\\]\\.:\\/",Qm=new RegExp("["+eh+"]","g"),th="[^"+eh+"]",eg="[^"+eh.replace("\\.","")+"]",tg=/((?:WC+[\/:])*)/.source.replace("WC",th),ng=/(WCOD+)?/.source.replace("WCOD",eg),ig=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",th),sg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",th),rg=new RegExp("^"+tg+ng+ig+sg+"$"),ag=["material","materials","bones","map"];class og{constructor(e,t,n){const i=n||Ge.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ge{constructor(e,t,n){this.path=t,this.parsedPath=n||Ge.parseTrackName(t),this.node=Ge.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ge.Composite(e,t,n):new Ge(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qm,"")}static parseTrackName(e){const t=rg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);ag.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ge.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Ne("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ge.Composite=og;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class lg{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Js,endingEnd:Js};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=ho,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case dp:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Bc:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===hp;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===co){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=$s,i.endingEnd=$s):(e?i.endingStart=this.zeroSlopeAtStart?$s:Js:i.endingStart=uo,t?i.endingEnd=this.zeroSlopeAtEnd?$s:Js:i.endingEnd=uo)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const cg=new Float32Array(1);class rf extends Ni{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){const u=i[d],f=u.name;let m=h[f];if(m!==void 0)++m.referenceCount,a[d]=m;else{if(m=a[d],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const x=t&&t._propertyBindings[d].binding.parsedPath;m=new Zm(Ge.create(n,f,x),u.ValueTypeName,u.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[d]=m}o[d].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new $u(new Float32Array(2),new Float32Array(2),1,cg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?vo.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Bc),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new lg(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?vo.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const pd=new Re;class yo{constructor(e,t,n=0,i=1/0){this.ray=new hr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Wc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ne("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return pd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pd),this}intersectObject(e,t=!0,n=[]){return bc(e,this,n,t),n.sort(md),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)bc(e[i],this,n,t);return n.sort(md),n}}function md(s,e){return s.distance-e.distance}function bc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)bc(r[a],e,t,!0)}}class gd{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class af{static{af.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}}class of extends Ni{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function bd(s,e,t,n){const i=hg(n);switch(t){case Du:return s*e;case Lo:return s*e/i.components*i.byteLength;case kc:return s*e/i.components*i.byteLength;case gs:return s*e*2/i.components*i.byteLength;case Uc:return s*e*2/i.components*i.byteLength;case Iu:return s*e*3/i.components*i.byteLength;case Cn:return s*e*4/i.components*i.byteLength;case Oc:return s*e*4/i.components*i.byteLength;case Za:case Qa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case eo:case to:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bl:case Gl:return Math.max(s,16)*Math.max(e,8)/4;case Ol:case zl:return Math.max(s,8)*Math.max(e,8)/2;case Hl:case Vl:case ql:case Xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Wl:case oo:case jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case $l:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ec:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case tc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case nc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ic:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case sc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case rc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ac:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case oc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case lc:case cc:case hc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case dc:case uc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case lo:case fc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hg(s){switch(s){case Fn:case Ru:return{byteLength:1,components:1};case Wr:case Cu:case rn:return{byteLength:2,components:1};case Fc:case Nc:return{byteLength:2,components:4};case mi:case Ic:case Rn:return{byteLength:4,components:1};case Pu:case Lu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ac}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ac);function lf(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function dg(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){const m=d[u],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){const x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var ug=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fg=`#ifdef USE_ALPHAHASH
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
#endif`,pg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_g=`#ifdef USE_AOMAP
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
#endif`,xg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vg=`#ifdef USE_BATCHING
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
#endif`,yg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Eg=`#ifdef USE_IRIDESCENCE
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
#endif`,Tg=`#ifdef USE_BUMPMAP
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
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ng=`#define PI 3.141592653589793
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
} // validated`,kg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ug=`vec3 transformedNormal = objectNormal;
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
#endif`,Og=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wg=`#ifdef USE_ENVMAP
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
#endif`,qg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xg=`#ifdef USE_ENVMAP
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
#endif`,jg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
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
#endif`,Yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qg=`#ifdef USE_GRADIENTMAP
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
}`,eb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ib=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,sb=`#ifdef USE_ENVMAP
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
#endif`,rb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ob=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cb=`PhysicalMaterial material;
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
#endif`,hb=`uniform sampler2D dfgLUT;
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
}`,db=`
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
#endif`,ub=`#if defined( RE_IndirectDiffuse )
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
#endif`,fb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,mb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_b=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mb=`#if defined( USE_POINTS_UV )
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
#endif`,Sb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ab=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rb=`#ifdef USE_MORPHTARGETS
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
#endif`,Cb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Nb=`#ifdef USE_NORMALMAP
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
#endif`,kb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ub=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ob=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$b=`float getShadowMask() {
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
}`,Zb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qb=`#ifdef USE_SKINNING
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
#endif`,e0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t0=`#ifdef USE_SKINNING
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
#endif`,n0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,a0=`#ifdef USE_TRANSMISSION
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
#endif`,o0=`#ifdef USE_TRANSMISSION
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
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f0=`uniform sampler2D t2D;
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
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`#include <common>
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
}`,x0=`#if DEPTH_PACKING == 3200
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
}`,v0=`#define DISTANCE
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
}`,y0=`#define DISTANCE
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`uniform float scale;
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
}`,E0=`uniform vec3 diffuse;
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
}`,T0=`#include <common>
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
}`,A0=`uniform vec3 diffuse;
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
}`,R0=`#define LAMBERT
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
}`,C0=`#define LAMBERT
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
}`,P0=`#define MATCAP
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
}`,L0=`#define MATCAP
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
}`,D0=`#define NORMAL
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
}`,I0=`#define NORMAL
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
}`,F0=`#define PHONG
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
}`,N0=`#define PHONG
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
}`,k0=`#define STANDARD
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
}`,U0=`#define STANDARD
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
}`,O0=`#define TOON
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
}`,B0=`#define TOON
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
}`,z0=`uniform float size;
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
}`,G0=`uniform vec3 diffuse;
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
}`,H0=`#include <common>
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
}`,V0=`uniform vec3 color;
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
}`,W0=`uniform float rotation;
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
}`,q0=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:ug,alphahash_pars_fragment:fg,alphamap_fragment:pg,alphamap_pars_fragment:mg,alphatest_fragment:gg,alphatest_pars_fragment:bg,aomap_fragment:_g,aomap_pars_fragment:xg,batching_pars_vertex:vg,batching_vertex:yg,begin_vertex:Mg,beginnormal_vertex:Sg,bsdfs:wg,iridescence_fragment:Eg,bumpmap_pars_fragment:Tg,clipping_planes_fragment:Ag,clipping_planes_pars_fragment:Rg,clipping_planes_pars_vertex:Cg,clipping_planes_vertex:Pg,color_fragment:Lg,color_pars_fragment:Dg,color_pars_vertex:Ig,color_vertex:Fg,common:Ng,cube_uv_reflection_fragment:kg,defaultnormal_vertex:Ug,displacementmap_pars_vertex:Og,displacementmap_vertex:Bg,emissivemap_fragment:zg,emissivemap_pars_fragment:Gg,colorspace_fragment:Hg,colorspace_pars_fragment:Vg,envmap_fragment:Wg,envmap_common_pars_fragment:qg,envmap_pars_fragment:Xg,envmap_pars_vertex:jg,envmap_physical_pars_fragment:sb,envmap_vertex:Kg,fog_vertex:Yg,fog_pars_vertex:Jg,fog_fragment:$g,fog_pars_fragment:Zg,gradientmap_pars_fragment:Qg,lightmap_pars_fragment:eb,lights_lambert_fragment:tb,lights_lambert_pars_fragment:nb,lights_pars_begin:ib,lights_toon_fragment:rb,lights_toon_pars_fragment:ab,lights_phong_fragment:ob,lights_phong_pars_fragment:lb,lights_physical_fragment:cb,lights_physical_pars_fragment:hb,lights_fragment_begin:db,lights_fragment_maps:ub,lights_fragment_end:fb,lightprobes_pars_fragment:pb,logdepthbuf_fragment:mb,logdepthbuf_pars_fragment:gb,logdepthbuf_pars_vertex:bb,logdepthbuf_vertex:_b,map_fragment:xb,map_pars_fragment:vb,map_particle_fragment:yb,map_particle_pars_fragment:Mb,metalnessmap_fragment:Sb,metalnessmap_pars_fragment:wb,morphinstance_vertex:Eb,morphcolor_vertex:Tb,morphnormal_vertex:Ab,morphtarget_pars_vertex:Rb,morphtarget_vertex:Cb,normal_fragment_begin:Pb,normal_fragment_maps:Lb,normal_pars_fragment:Db,normal_pars_vertex:Ib,normal_vertex:Fb,normalmap_pars_fragment:Nb,clearcoat_normal_fragment_begin:kb,clearcoat_normal_fragment_maps:Ub,clearcoat_pars_fragment:Ob,iridescence_pars_fragment:Bb,opaque_fragment:zb,packing:Gb,premultiplied_alpha_fragment:Hb,project_vertex:Vb,dithering_fragment:Wb,dithering_pars_fragment:qb,roughnessmap_fragment:Xb,roughnessmap_pars_fragment:jb,shadowmap_pars_fragment:Kb,shadowmap_pars_vertex:Yb,shadowmap_vertex:Jb,shadowmask_pars_fragment:$b,skinbase_vertex:Zb,skinning_pars_vertex:Qb,skinning_vertex:e0,skinnormal_vertex:t0,specularmap_fragment:n0,specularmap_pars_fragment:i0,tonemapping_fragment:s0,tonemapping_pars_fragment:r0,transmission_fragment:a0,transmission_pars_fragment:o0,uv_pars_fragment:l0,uv_pars_vertex:c0,uv_vertex:h0,worldpos_vertex:d0,background_vert:u0,background_frag:f0,backgroundCube_vert:p0,backgroundCube_frag:m0,cube_vert:g0,cube_frag:b0,depth_vert:_0,depth_frag:x0,distance_vert:v0,distance_frag:y0,equirect_vert:M0,equirect_frag:S0,linedashed_vert:w0,linedashed_frag:E0,meshbasic_vert:T0,meshbasic_frag:A0,meshlambert_vert:R0,meshlambert_frag:C0,meshmatcap_vert:P0,meshmatcap_frag:L0,meshnormal_vert:D0,meshnormal_frag:I0,meshphong_vert:F0,meshphong_frag:N0,meshphysical_vert:k0,meshphysical_frag:U0,meshtoon_vert:O0,meshtoon_frag:B0,points_vert:z0,points_frag:G0,shadow_vert:H0,shadow_frag:V0,sprite_vert:W0,sprite_frag:q0},pe={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},di={basic:{uniforms:pn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:pn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:pn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:pn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:pn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new De(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:pn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:pn([pe.points,pe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:pn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:pn([pe.common,pe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:pn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:pn([pe.sprite,pe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:pn([pe.common,pe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:pn([pe.lights,pe.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};di.physical={uniforms:pn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Ba={r:0,b:0,g:0},X0=new Re,cf=new ke;cf.set(-1,0,0,0,1,0,0,0,1);function j0(s,e,t,n,i,r){const a=new De(0);let o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){const b=v.backgroundBlurriness>0;T=e.get(T,b)}return T}function m(v){let T=!1;const b=f(v);b===null?g(a,o):b&&b.isColor&&(g(b,1),T=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,T){const b=f(T);b&&(b.isCubeTexture||b.mapping===Po)?(c===void 0&&(c=new Lt(new dr(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:lr(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(X0.makeRotationFromEuler(T.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(cf),c.material.toneMapped=Ke.getTransfer(b.colorSpace)!==ct,(h!==b||d!==b.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Lt(new Do(2,2),new hn({name:"BackgroundMaterial",uniforms:lr(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(b.colorSpace)!==ct,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,T){v.getRGB(Ba,Yu(s)),t.buffers.color.setClear(Ba.r,Ba.g,Ba.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:m,addToRenderList:x,dispose:p}}function K0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(L,F,k,I,O){let S=!1;const N=d(L,I,k,F);r!==N&&(r=N,c(r.object)),S=f(L,I,k,O),S&&m(L,I,k,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(S||a)&&(a=!1,b(L,F,k,I),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function d(L,F,k,I){const O=I.wireframe===!0;let S=n[F.id];S===void 0&&(S={},n[F.id]=S);const N=L.isInstancedMesh===!0?L.id:0;let K=S[N];K===void 0&&(K={},S[N]=K);let U=K[k.id];U===void 0&&(U={},K[k.id]=U);let V=U[O];return V===void 0&&(V=u(l()),U[O]=V),V}function u(L){const F=[],k=[],I=[];for(let O=0;O<t;O++)F[O]=0,k[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:I,object:L,attributes:{},index:null}}function f(L,F,k,I){const O=r.attributes,S=F.attributes;let N=0;const K=k.getAttributes();for(const U in K)if(K[U].location>=0){const Y=O[U];let se=S[U];if(se===void 0&&(U==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),U==="instanceColor"&&L.instanceColor&&(se=L.instanceColor)),Y===void 0||Y.attribute!==se||se&&Y.data!==se.data)return!0;N++}return r.attributesNum!==N||r.index!==I}function m(L,F,k,I){const O={},S=F.attributes;let N=0;const K=k.getAttributes();for(const U in K)if(K[U].location>=0){let Y=S[U];Y===void 0&&(U==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),U==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor));const se={};se.attribute=Y,Y&&Y.data&&(se.data=Y.data),O[U]=se,N++}r.attributes=O,r.attributesNum=N,r.index=I}function x(){const L=r.newAttributes;for(let F=0,k=L.length;F<k;F++)L[F]=0}function g(L){p(L,0)}function p(L,F){const k=r.newAttributes,I=r.enabledAttributes,O=r.attributeDivisors;k[L]=1,I[L]===0&&(s.enableVertexAttribArray(L),I[L]=1),O[L]!==F&&(s.vertexAttribDivisor(L,F),O[L]=F)}function v(){const L=r.newAttributes,F=r.enabledAttributes;for(let k=0,I=F.length;k<I;k++)F[k]!==L[k]&&(s.disableVertexAttribArray(k),F[k]=0)}function T(L,F,k,I,O,S,N){N===!0?s.vertexAttribIPointer(L,F,k,O,S):s.vertexAttribPointer(L,F,k,I,O,S)}function b(L,F,k,I){x();const O=I.attributes,S=k.getAttributes(),N=F.defaultAttributeValues;for(const K in S){const U=S[K];if(U.location>=0){let V=O[K];if(V===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){const Y=V.normalized,se=V.itemSize,re=e.get(V);if(re===void 0)continue;const Je=re.buffer,qe=re.type,tt=re.bytesPerElement,J=qe===s.INT||qe===s.UNSIGNED_INT||V.gpuType===Ic;if(V.isInterleavedBufferAttribute){const te=V.data,Me=te.stride,Ue=V.offset;if(te.isInstancedInterleavedBuffer){for(let ve=0;ve<U.locationSize;ve++)p(U.location+ve,te.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ve=0;ve<U.locationSize;ve++)g(U.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Je);for(let ve=0;ve<U.locationSize;ve++)T(U.location+ve,se/U.locationSize,qe,Y,Me*tt,(Ue+se/U.locationSize*ve)*tt,J)}else{if(V.isInstancedBufferAttribute){for(let te=0;te<U.locationSize;te++)p(U.location+te,V.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let te=0;te<U.locationSize;te++)g(U.location+te);s.bindBuffer(s.ARRAY_BUFFER,Je);for(let te=0;te<U.locationSize;te++)T(U.location+te,se/U.locationSize,qe,Y,se*tt,se/U.locationSize*te*tt,J)}}else if(N!==void 0){const Y=N[K];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(U.location,Y);break;case 3:s.vertexAttrib3fv(U.location,Y);break;case 4:s.vertexAttrib4fv(U.location,Y);break;default:s.vertexAttrib1fv(U.location,Y)}}}}v()}function y(){w();for(const L in n){const F=n[L];for(const k in F){const I=F[k];for(const O in I){const S=I[O];for(const N in S)h(S[N].object),delete S[N];delete I[O]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;const F=n[L.id];for(const k in F){const I=F[k];for(const O in I){const S=I[O];for(const N in S)h(S[N].object),delete S[N];delete I[O]}}delete n[L.id]}function R(L){for(const F in n){const k=n[F];for(const I in k){const O=k[I];if(O[L.id]===void 0)continue;const S=O[L.id];for(const N in S)h(S[N].object),delete S[N];delete O[L.id]}}}function _(L){for(const F in n){const k=n[F],I=L.isInstancedMesh===!0?L.id:0,O=k[I];if(O!==void 0){for(const S in O){const N=O[S];for(const K in N)h(N[K].object),delete N[K];delete O[S]}delete k[I],Object.keys(k).length===0&&delete n[F]}}}function w(){P(),a=!0,r!==i&&(r=i,c(r.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:P,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function Y0(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function J0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==Cn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Fn&&R!==Rn&&!_&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ae("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:b,maxSamples:y,samples:E}}function $0(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Ti,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=s.get(d);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{const v=r?0:n,T=v*4;let b=p.clippingState||null;l.value=b,b=h(m,u,T,f);for(let y=0;y!==T;++y)b[y]=t[y];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,m){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const p=f+x*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,b=f;T!==x;++T,b+=4)a.copy(d[T]).applyMatrix4(v,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}const Zs=4,Z0=6,Q0=20,e_=256,Rr=new sa,_d=new De;let pl=null,ml=0,gl=0,bl=!1;const t_=new C,ss=new C;class _c{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=t_}=r;pl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pl,ml,gl),this._renderer.xr.enabled=bl,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:rn,format:Cn,colorSpace:Ln,depthBuffer:!1},i=xd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xd(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=n_(r)),this._blurMaterial=s_(r,e,t),this._ggxMaterial=i_(r,e,t)}return i}_compileMaterial(e){const t=new Lt(new tn,e);this._renderer.compile(t,Rr)}_sceneToCubeUV(e,t,n,i,r){const l=new vn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(_d),d.toneMapping=pi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Lt(new dr,new Vn({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let p=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,p=!0):(g.color.copy(_d),p=!0);for(let T=0;T<6;T++){const b=T%3;b===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):b===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));const y=this._cubeSize;Bs(i,b*y,T>2?y:0,y,y),d.setRenderTarget(i),p&&d.render(x,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ps||e.mapping===ar;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vd());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Bs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Rr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Zs?n-m+Zs:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,Bs(r,g,p,3*x,2*x),i.setRenderTarget(r),i.render(o,Rr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Bs(e,g,p,3*x,2*x),i.setRenderTarget(e),i.render(o,Rr)}_blur(e,t,n,i){const r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],d=3*h*(i>this._lodMax-Zs?i-this._lodMax+Zs:0),u=4*(this._cubeSize-h);Bs(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Rr)}}function n_(s){const e=[],t=[];let n=s;const i=s-Zs+1+Z0;for(let r=0;r<i;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,m=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let p=0;p<d;p++){const v=p%3*2/3-1,T=p>2?0:-1,b=[v,T,0,v+2/3,T,0,v+2/3,T+1,0,v,T,0,v+2/3,T+1,0,v,T+1,0];m.set(b,f*u*p);for(let y=0;y<u;y++){const E=h[y*2]*2-1,R=h[y*2+1]*2-1;p===0?ss.set(1,R,E):p===1?ss.set(-E,1,-R):p===2?ss.set(-E,R,1):p===3?ss.set(-1,R,-E):p===4?ss.set(-E,-1,R):ss.set(E,R,-1),ss.toArray(x,(p*u+y)*f)}}const g=new tn;g.setAttribute("position",new Kt(m,f)),g.setAttribute("outputDirection",new Kt(x,f)),t.push(new Lt(g,null)),n>Zs&&n--}return{lodMeshes:t,sizeLods:e}}function xd(s,e,t){const n=new yn(s,e,t);return n.texture.mapping=Po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function i_(s,e,t){return new hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:e_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Io(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function s_(s,e,t){return new hn({name:"SphericalGaussianBlur",defines:{SAMPLES:Q0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Io(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function vd(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Io(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function yd(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Io(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class hf extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ju(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new dr(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:fi});r.uniforms.tEquirect.value=t;const a=new Lt(i,r),o=t.minFilter;return t.minFilter===Jn&&(t.minFilter=Mt),new Km(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}function r_(s){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Ja||f===Bo)if(e.has(u)){const m=e.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const x=new hf(m.height);return x.fromEquirectangularTexture(s,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,m=f===Ja||f===Bo,x=f===ps||f===ar;if(m||x){let g=t.get(u);const p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new _c(s)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{const v=u.image;return m&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new _c(s)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===Ja?u.mapping=ps:f===Bo&&(u.mapping=ar),u}function l(u){let f=0;const m=6;for(let x=0;x<m;x++)u[x]!==void 0&&f++;return f===m}function c(u){const f=u.target;f.removeEventListener("dispose",c);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function a_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&nr("WebGLRenderer: "+n+" extension not supported."),i}}}function o_(s,e,t,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)e.update(u[f],s.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,m=d.attributes.position;let x=0;if(m===void 0)return;if(f!==null){const v=f.array;x=f.version;for(let T=0,b=v.length;T<b;T+=3){const y=v[T+0],E=v[T+1],R=v[T+2];u.push(y,E,E,R,R,y)}}else{const v=m.array;x=m.version;for(let T=0,b=v.length/3-1;T<b;T+=3){const y=T+0,E=T+1,R=T+2;u.push(y,E,E,R,R,y)}}const g=new(m.count>=65535?Gu:zu)(u,1);g.version=x;const p=r.get(d);p&&e.remove(p),r.set(d,g)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function l_(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];t.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function c_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ne("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function h_(s,e,t){const n=new WeakMap,i=new pt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let w=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let T=0;f===!0&&(T=1),m===!0&&(T=2),x===!0&&(T=3);let b=o.attributes.position.count*T,y=1;b>e.maxTextureSize&&(y=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const E=new Float32Array(b*y*4*d),R=new Ou(E,b,y,d);R.type=Rn,R.needsUpdate=!0;const _=T*4;for(let P=0;P<d;P++){const L=g[P],F=p[P],k=v[P],I=b*y*4*P;for(let O=0;O<L.count;O++){const S=O*_;f===!0&&(i.fromBufferAttribute(L,O),E[I+S+0]=i.x,E[I+S+1]=i.y,E[I+S+2]=i.z,E[I+S+3]=0),m===!0&&(i.fromBufferAttribute(F,O),E[I+S+4]=i.x,E[I+S+5]=i.y,E[I+S+6]=i.z,E[I+S+7]=0),x===!0&&(i.fromBufferAttribute(k,O),E[I+S+8]=i.x,E[I+S+9]=i.y,E[I+S+10]=i.z,E[I+S+11]=k.itemSize===4?i.w:1)}}u={count:d,texture:R,size:new _e(b,y)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function d_(s,e,t,n,i){let r=new WeakMap;function a(c){const h=i.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const u_={[Rc]:"LINEAR_TONE_MAPPING",[Cc]:"REINHARD_TONE_MAPPING",[Pc]:"CINEON_TONE_MAPPING",[Ro]:"ACES_FILMIC_TONE_MAPPING",[Co]:"AGX_TONE_MAPPING",[Dc]:"NEUTRAL_TONE_MAPPING",[Lc]:"CUSTOM_TONE_MAPPING"};function f_(s,e,t,n,i,r){const a=new yn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new tn;c.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Nt([0,2,0,0,2,0],2));const h=new Ju({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Lt(c,h),u=new sa(-1,1,1,-1,0,1);let f=null,m=null,x=!1,g,p=null,v=[],T=!1;this.setSize=function(b,y){a.setSize(b,y),o!==null&&o.setSize(b,y),l!==null&&l.setSize(b,y);for(let E=0;E<v.length;E++){const R=v[E];R.setSize&&R.setSize(b,y)}},this.setEffects=function(b){v=b,T=v.length>0&&v[0].isRenderPass===!0;const y=a.width,E=a.height;v.length>0&&o===null&&(o=new yn(y,E,{type:rn,depthBuffer:!1,stencilBuffer:!1}),l=new yn(y,E,{type:rn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<v.length;R++){const _=v[R];_.setSize&&_.setSize(y,E)}},this.begin=function(b,y){if(x||b.toneMapping===pi&&v.length===0)return!1;if(p=y,y!==null){const E=y.width,R=y.height;(a.width!==E||a.height!==R)&&this.setSize(E,R)}return T===!1&&b.setRenderTarget(a),g=b.toneMapping,b.toneMapping=pi,!0},this.hasRenderPass=function(){return T},this.end=function(b,y){b.toneMapping=g,x=!0;let E=a,R=o;for(let _=0;_<v.length;_++){const w=v[_];w.enabled!==!1&&(w.render(b,R,E,y),w.needsSwap!==!1&&(E=R,R=R===o?l:o))}if(f!==b.outputColorSpace||m!==b.toneMapping){f=b.outputColorSpace,m=b.toneMapping,h.defines={},Ke.getTransfer(f)===ct&&(h.defines.SRGB_TRANSFER="");const _=u_[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,b.setRenderTarget(p),b.render(d,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const df=new Ht,xc=new $r(1,1),uf=new Ou,ff=new Kp,pf=new ju,Md=[],Sd=[],wd=new Float32Array(16),Ed=new Float32Array(9),Td=new Float32Array(4);function mr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Md[i];if(r===void 0&&(r=new Float32Array(i),Md[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Yt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Jt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Fo(s,e){let t=Sd[e];t===void 0&&(t=new Int32Array(e),Sd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function p_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function m_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;s.uniform2fv(this.addr,e),Jt(t,e)}}function g_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;s.uniform3fv(this.addr,e),Jt(t,e)}}function b_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;s.uniform4fv(this.addr,e),Jt(t,e)}}function __(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Yt(t,n))return;Td.set(n),s.uniformMatrix2fv(this.addr,!1,Td),Jt(t,n)}}function x_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Yt(t,n))return;Ed.set(n),s.uniformMatrix3fv(this.addr,!1,Ed),Jt(t,n)}}function v_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Yt(t,n))return;wd.set(n),s.uniformMatrix4fv(this.addr,!1,wd),Jt(t,n)}}function y_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function M_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;s.uniform2iv(this.addr,e),Jt(t,e)}}function S_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;s.uniform3iv(this.addr,e),Jt(t,e)}}function w_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;s.uniform4iv(this.addr,e),Jt(t,e)}}function E_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function T_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;s.uniform2uiv(this.addr,e),Jt(t,e)}}function A_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;s.uniform3uiv(this.addr,e),Jt(t,e)}}function R_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;s.uniform4uiv(this.addr,e),Jt(t,e)}}function C_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(xc.compareFunction=t.isReversedDepthBuffer()?Gc:zc,r=xc):r=df,t.setTexture2D(e||r,i)}function P_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ff,i)}function L_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||pf,i)}function D_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||uf,i)}function I_(s){switch(s){case 5126:return p_;case 35664:return m_;case 35665:return g_;case 35666:return b_;case 35674:return __;case 35675:return x_;case 35676:return v_;case 5124:case 35670:return y_;case 35667:case 35671:return M_;case 35668:case 35672:return S_;case 35669:case 35673:return w_;case 5125:return E_;case 36294:return T_;case 36295:return A_;case 36296:return R_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return P_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return D_}}function F_(s,e){s.uniform1fv(this.addr,e)}function N_(s,e){const t=mr(e,this.size,2);s.uniform2fv(this.addr,t)}function k_(s,e){const t=mr(e,this.size,3);s.uniform3fv(this.addr,t)}function U_(s,e){const t=mr(e,this.size,4);s.uniform4fv(this.addr,t)}function O_(s,e){const t=mr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function B_(s,e){const t=mr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function z_(s,e){const t=mr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function G_(s,e){s.uniform1iv(this.addr,e)}function H_(s,e){s.uniform2iv(this.addr,e)}function V_(s,e){s.uniform3iv(this.addr,e)}function W_(s,e){s.uniform4iv(this.addr,e)}function q_(s,e){s.uniform1uiv(this.addr,e)}function X_(s,e){s.uniform2uiv(this.addr,e)}function j_(s,e){s.uniform3uiv(this.addr,e)}function K_(s,e){s.uniform4uiv(this.addr,e)}function Y_(s,e,t){const n=this.cache,i=e.length,r=Fo(t,i);Yt(n,r)||(s.uniform1iv(this.addr,r),Jt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=xc:a=df;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function J_(s,e,t){const n=this.cache,i=e.length,r=Fo(t,i);Yt(n,r)||(s.uniform1iv(this.addr,r),Jt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||ff,r[a])}function $_(s,e,t){const n=this.cache,i=e.length,r=Fo(t,i);Yt(n,r)||(s.uniform1iv(this.addr,r),Jt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||pf,r[a])}function Z_(s,e,t){const n=this.cache,i=e.length,r=Fo(t,i);Yt(n,r)||(s.uniform1iv(this.addr,r),Jt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||uf,r[a])}function Q_(s){switch(s){case 5126:return F_;case 35664:return N_;case 35665:return k_;case 35666:return U_;case 35674:return O_;case 35675:return B_;case 35676:return z_;case 5124:case 35670:return G_;case 35667:case 35671:return H_;case 35668:case 35672:return V_;case 35669:case 35673:return W_;case 5125:return q_;case 36294:return X_;case 36295:return j_;case 36296:return K_;case 35678:case 36198:case 36298:case 36306:case 35682:return Y_;case 35679:case 36299:case 36307:return J_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return Z_}}class ex{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=I_(t.type)}}class tx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Q_(t.type)}}class nx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const _l=/(\w+)(\])?(\[|\.)?/g;function Ad(s,e){s.seq.push(e),s.map[e.id]=e}function ix(s,e,t){const n=s.name,i=n.length;for(_l.lastIndex=0;;){const r=_l.exec(n),a=_l.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Ad(t,c===void 0?new ex(o,s,e):new tx(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new nx(o),Ad(t,d)),t=d}}}class io{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);ix(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Rd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const sx=37297;let rx=0;function ax(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Cd=new ke;function ox(s){Ke._getMatrix(Cd,Ke.workingColorSpace,s);const e=`mat3( ${Cd.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(s)){case fo:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Pd(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ax(s.getShaderSource(e),o)}else return r}function lx(s,e){const t=ox(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const cx={[Rc]:"Linear",[Cc]:"Reinhard",[Pc]:"Cineon",[Ro]:"ACESFilmic",[Co]:"AgX",[Dc]:"Neutral",[Lc]:"Custom"};function hx(s,e){const t=cx[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const za=new C;function dx(){Ke.getLuminanceCoefficients(za);const s=za.x.toFixed(4),e=za.y.toFixed(4),t=za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ux(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function fx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function px(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function kr(s){return s!==""}function Ld(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mx=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(s){return s.replace(mx,bx)}const gx=new Map;function bx(s,e){let t=Ve[e];if(t===void 0){const n=gx.get(e);if(n!==void 0)t=Ve[n],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return vc(t)}const _x=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Id(s){return s.replace(_x,xx)}function xx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Fd(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const vx={[Ya]:"SHADOWMAP_TYPE_PCF",[Fr]:"SHADOWMAP_TYPE_VSM"};function yx(s){return vx[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Mx={[ps]:"ENVMAP_TYPE_CUBE",[ar]:"ENVMAP_TYPE_CUBE",[Po]:"ENVMAP_TYPE_CUBE_UV"};function Sx(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Mx[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const wx={[ar]:"ENVMAP_MODE_REFRACTION"};function Ex(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":wx[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Tx={[Eu]:"ENVMAP_BLENDING_MULTIPLY",[op]:"ENVMAP_BLENDING_MIX",[lp]:"ENVMAP_BLENDING_ADD"};function Ax(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Tx[s.combine]||"ENVMAP_BLENDING_NONE"}function Rx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Cx(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=yx(t),c=Sx(t),h=Ex(t),d=Ax(t),u=Rx(t),f=ux(t),m=fx(r),x=i.createProgram();let g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(kr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(kr).join(`
`),p.length>0&&(p+=`
`)):(g=[Fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),p=[Fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==pi?hx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,lx("linearToOutputTexel",t.outputColorSpace),dx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kr).join(`
`)),a=vc(a),a=Ld(a,t),a=Dd(a,t),o=vc(o),o=Ld(o,t),o=Dd(o,t),a=Id(a),o=Id(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=v+g+a,b=v+p+o,y=Rd(i,i.VERTEX_SHADER,T),E=Rd(i,i.FRAGMENT_SHADER,b);i.attachShader(x,y),i.attachShader(x,E),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(L){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(x)||"",k=i.getShaderInfoLog(y)||"",I=i.getShaderInfoLog(E)||"",O=F.trim(),S=k.trim(),N=I.trim();let K=!0,U=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,y,E);else{const V=Pd(i,y,"vertex"),Y=Pd(i,E,"fragment");Ne("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+V+`
`+Y)}else O!==""?Ae("WebGLProgram: Program Info Log:",O):(S===""||N==="")&&(U=!1);U&&(L.diagnostics={runnable:K,programLog:O,vertexShader:{log:S,prefix:g},fragmentShader:{log:N,prefix:p}})}i.deleteShader(y),i.deleteShader(E),_=new io(i,x),w=px(i,x)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(x,sx)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=E,this}let Px=0;class Lx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Dx(e),t.set(e,n)),n}}class Dx{constructor(e){this.id=Px++,this.code=e,this.usedTimes=0}}function Ix(s){return s===gs||s===oo||s===lo}function Fx(s,e,t,n,i,r){const a=new Wc,o=new Lx,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,w,P,L,F,k){const I=L.fog,O=F.geometry,S=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,N=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,K=e.get(_.envMap||S,N),U=K&&K.mapping===Po?K.image.height:null,V=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Ae("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const Y=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,se=Y!==void 0?Y.length:0;let re=0;O.morphAttributes.position!==void 0&&(re=1),O.morphAttributes.normal!==void 0&&(re=2),O.morphAttributes.color!==void 0&&(re=3);let Je,qe,tt,J;if(V){const xt=di[V];Je=xt.vertexShader,qe=xt.fragmentShader}else{Je=_.vertexShader,qe=_.fragmentShader;const xt=o.getVertexShaderStage(_),ot=o.getFragmentShaderStage(_);o.update(_,xt,ot),tt=xt.id,J=ot.id}const te=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),Ue=F.isInstancedMesh===!0,ve=F.isBatchedMesh===!0,Xe=!!_.map,Wt=!!_.matcap,$e=!!K,st=!!_.aoMap,_t=!!_.lightMap,Qe=!!_.bumpMap&&_.wireframe===!1,Et=!!_.normalMap,$t=!!_.displacementMap,Mn=!!_.emissiveMap,Ct=!!_.metalnessMap,Ut=!!_.roughnessMap,G=_.anisotropy>0,an=_.clearcoat>0,ht=_.dispersion>0,D=_.retroreflectivity>0,M=_.iridescence>0,H=_.sheen>0,X=_.transmission>0,$=G&&!!_.anisotropyMap,ae=an&&!!_.clearcoatMap,oe=an&&!!_.clearcoatNormalMap,Z=an&&!!_.clearcoatRoughnessMap,ee=M&&!!_.iridescenceMap,ce=M&&!!_.iridescenceThicknessMap,Ce=H&&!!_.sheenColorMap,fe=H&&!!_.sheenRoughnessMap,he=!!_.specularMap,Pe=!!_.specularColorMap,Fe=!!_.specularIntensityMap,ze=X&&!!_.transmissionMap,z=X&&!!_.thicknessMap,de=!!_.gradientMap,Q=!!_.alphaMap,ue=_.alphaTest>0,be=!!_.alphaHash,ie=!!_.extensions;let Le=pi;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Le=s.toneMapping);const Ee={shaderID:V,shaderType:_.type,shaderName:_.name,vertexShader:Je,fragmentShader:qe,defines:_.defines,customVertexShaderID:tt,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:ve,batchingColor:ve&&F._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&F.instanceColor!==null,instancingMorph:Ue&&F.morphTexture!==null,outputColorSpace:te===null?s.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Xe,matcap:Wt,envMap:$e,envMapMode:$e&&K.mapping,envMapCubeUVHeight:U,aoMap:st,lightMap:_t,bumpMap:Qe,normalMap:Et,displacementMap:$t,emissiveMap:Mn,normalMapObjectSpace:Et&&_.normalMapType===pp,normalMapTangentSpace:Et&&_.normalMapType===mc,packedNormalMap:Et&&_.normalMapType===mc&&Ix(_.normalMap.format),metalnessMap:Ct,roughnessMap:Ut,anisotropy:G,anisotropyMap:$,clearcoat:an,clearcoatMap:ae,clearcoatNormalMap:oe,clearcoatRoughnessMap:Z,dispersion:ht,retroreflection:D,iridescence:M,iridescenceMap:ee,iridescenceThicknessMap:ce,sheen:H,sheenColorMap:Ce,sheenRoughnessMap:fe,specularMap:he,specularColorMap:Pe,specularIntensityMap:Fe,transmission:X,transmissionMap:ze,thicknessMap:z,gradientMap:de,opaque:_.transparent===!1&&_.blending===Or&&_.alphaToCoverage===!1,alphaMap:Q,alphaTest:ue,alphaHash:be,combine:_.combine,mapUv:Xe&&m(_.map.channel),aoMapUv:st&&m(_.aoMap.channel),lightMapUv:_t&&m(_.lightMap.channel),bumpMapUv:Qe&&m(_.bumpMap.channel),normalMapUv:Et&&m(_.normalMap.channel),displacementMapUv:$t&&m(_.displacementMap.channel),emissiveMapUv:Mn&&m(_.emissiveMap.channel),metalnessMapUv:Ct&&m(_.metalnessMap.channel),roughnessMapUv:Ut&&m(_.roughnessMap.channel),anisotropyMapUv:$&&m(_.anisotropyMap.channel),clearcoatMapUv:ae&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:oe&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:fe&&m(_.sheenRoughnessMap.channel),specularMapUv:he&&m(_.specularMap.channel),specularColorMapUv:Pe&&m(_.specularColorMap.channel),specularIntensityMapUv:Fe&&m(_.specularIntensityMap.channel),transmissionMapUv:ze&&m(_.transmissionMap.channel),thicknessMapUv:z&&m(_.thicknessMap.channel),alphaMapUv:Q&&m(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Et||G),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(Xe||Q),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&Et===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Me,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:re,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Le,decodeVideoTexture:Xe&&_.map.isVideoTexture===!0&&Ke.getTransfer(_.map.colorSpace)===ct,decodeVideoTextureEmissive:Mn&&_.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(_.emissiveMap.colorSpace)===ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Kn,flipSided:_.side===Pn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ie&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&_.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function g(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)w.push(P),w.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(w,_),v(w,_),w.push(s.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function v(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function T(_){const w=f[_.type];let P;if(w){const L=di[w];P=Zr.clone(L.uniforms)}else P=_.uniforms;return P}function b(_,w){let P=h.get(w);return P!==void 0?++P.usedTimes:(P=new Cx(s,w,_,i),c.push(P),h.set(w,P)),P}function y(_){if(--_.usedTimes===0){const w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:T,acquireProgram:b,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:R}}function Nx(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function kx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Nd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function kd(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,x,g,p){let v=s[e];return v===void 0?(v={id:u.id,object:u,geometry:f,material:m,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:p},s[e]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=m,v.materialVariant=a(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=g,v.group=p),e++,v}function l(u,f,m,x,g,p,v){v.reversedDepth===!0&&(g=-g);const T=o(u,f,m,x,g,p);m.transmission>0?n.push(T):m.transparent===!0?i.push(T):t.push(T)}function c(u,f,m,x,g,p){const v=o(u,f,m,x,g,p);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):t.unshift(v)}function h(u,f){t.length>1&&t.sort(u||kx),n.length>1&&n.sort(f||Nd),i.length>1&&i.sort(f||Nd)}function d(){for(let u=e,f=s.length;u<f;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function Ux(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new kd,s.set(n,[a])):i>=r.length?(a=new kd,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ox(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new De};break;case"SpotLight":t={position:new C,direction:new C,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function Bx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let zx=0;function Gx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Hx(s){const e=new Ox,t=Bx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const i=new C,r=new Re,a=new Re;function o(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,v=0,T=0,b=0,y=0,E=0,R=0,_=0,w=0,P=0;c.sort(Gx);for(let F=0,k=c.length;F<k;F++){const I=c[F],O=I.color,S=I.intensity,N=I.distance;let K=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===gs?K=I.shadow.map.texture:K=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=O.r*S,d+=O.g*S,u+=O.b*S;else if(I.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(I.sh.coefficients[U],S);P++}else if(I.isSunLight){const U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const V=I.shadow,Y=t.get(I);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[m]=Y,n.sunShadowMap[m]=K;const se=V.getViewportCount();for(let re=0;re<se;re++)n.sunShadowMatrix[x+re]=V.getMatrix(re),n.sunShadowCascade[x+re]=V._cascadeData[re];x+=se,m++}n.sun[f]=U,f++}else if(I.isDirectionalLight){const U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const V=I.shadow,Y=t.get(I);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,n.directionalShadow[g]=Y,n.directionalShadowMap[g]=K,n.directionalShadowMatrix[g]=I.shadow.matrix,y++}n.directional[g]=U,g++}else if(I.isSpotLight){const U=e.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(O).multiplyScalar(S),U.distance=N,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,n.spot[v]=U;const V=I.shadow;if(I.map&&(n.spotLightMap[_]=I.map,_++,V.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[v]=V.matrix,I.castShadow){const Y=t.get(I);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=K,R++}v++}else if(I.isRectAreaLight){const U=e.get(I);U.color.copy(O).multiplyScalar(S),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),n.rectArea[T]=U,T++}else if(I.isPointLight){const U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),U.distance=I.distance,U.decay=I.decay,I.castShadow){const V=I.shadow,Y=t.get(I);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,Y.shadowCameraNear=V.camera.near,Y.shadowCameraFar=V.camera.far,n.pointShadow[p]=Y,n.pointShadowMap[p]=K,n.pointShadowMatrix[p]=I.shadow.matrix,E++}n.point[p]=U,p++}else if(I.isHemisphereLight){const U=e.get(I);U.skyColor.copy(I.color).multiplyScalar(S),U.groundColor.copy(I.groundColor).multiplyScalar(S),n.hemi[b]=U,b++}}T>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const L=n.hash;(L.sunLength!==f||L.directionalLength!==g||L.pointLength!==p||L.spotLength!==v||L.rectAreaLength!==T||L.hemiLength!==b||L.numSunShadows!==m||L.numDirectionalShadows!==y||L.numPointShadows!==E||L.numSpotShadows!==R||L.numSpotMaps!==_||L.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=g,n.spot.length=v,n.rectArea.length=T,n.point.length=p,n.hemi.length=b,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-w,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=P,L.sunLength=f,L.directionalLength=g,L.pointLength=p,L.spotLength=v,L.rectAreaLength=T,L.hemiLength=b,L.numSunShadows=m,L.numDirectionalShadows=y,L.numPointShadows=E,L.numSpotShadows=R,L.numSpotMaps=_,L.numLightProbes=P,n.version=zx++)}function l(c,h){let d=0,u=0,f=0,m=0,x=0,g=0;const p=h.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){const b=c[v];if(b.isSunLight){const y=n.sun[d];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(p),d++}else if(b.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),u++}else if(b.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const y=n.rectArea[x];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Ud(s){const e=new Hx(s),t=[],n=[],i=[];function r(u){d.camera=u,t.length=0,n.length=0,i.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Vx(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Ud(s),e.set(i,[o])):r>=a.length?(o=new Ud(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Wx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qx=`uniform sampler2D shadow_pass;
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
}`,Xx=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],jx=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Od=new Re,Cr=new C,xl=new C;function Kx(s,e,t){let n=new Xc;const i=new _e,r=new _e,a=new pt,o=new Tm,l=new Am,c={},h=t.maxTextureSize,d={[Di]:Pn,[Pn]:Di,[Kn]:Kn},u=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:Wx,fragmentShader:qx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new tn;m.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Lt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ya;let p=this.type;this.render=function(E,R,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Mu&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ya);const w=s.getRenderTarget(),P=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),F=s.state;F.setBlending(fi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=p!==this.type;k&&R.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(O=>O.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,O=E.length;I<O;I++){const S=E[I],N=S.shadow;if(N===void 0){Ae("WebGLShadowMap:",S,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const K=N.getFrameExtents();i.multiply(K),r.copy(N.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/K.x),i.x=r.x*K.x,N.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/K.y),i.y=r.y*K.y,N.mapSize.y=r.y));const U=s.state.buffers.depth.getReversed();if(N.camera._reversedDepth=U,N.map===null||k===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Fr){if(S.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new yn(i.x,i.y,{format:gs,type:rn,minFilter:Mt,magFilter:Mt,generateMipmaps:!1}),N.map.texture.name=S.name+".shadowMap",N.map.depthTexture=new $r(i.x,i.y,Rn),N.map.depthTexture.name=S.name+".shadowMapDepth",N.map.depthTexture.format=Ii,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=jt,N.map.depthTexture.magFilter=jt}else S.isPointLight?(N.map=new hf(i.x),N.map.depthTexture=new Mm(i.x,mi)):(N.map=new yn(i.x,i.y),N.map.depthTexture=new $r(i.x,i.y,mi)),N.map.depthTexture.name=S.name+".shadowMap",N.map.depthTexture.format=Ii,this.type===Ya?(N.map.depthTexture.compareFunction=U?Gc:zc,N.map.depthTexture.minFilter=Mt,N.map.depthTexture.magFilter=Mt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=jt,N.map.depthTexture.magFilter=jt);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==i.x||N.map.height!==i.y)&&N.map.setSize(i.x,i.y);const V=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();S.isPointLight!==!0&&N.updateMatrices(S,_);for(let Y=0;Y<V;Y++){const se=N.getCamera(Y);if(S.isPointLight){const re=N.camera,Je=N.matrix,qe=S.distance||re.far;qe!==re.far&&(re.far=qe,re.updateProjectionMatrix()),Cr.setFromMatrixPosition(S.matrixWorld),re.position.copy(Cr),xl.copy(re.position),xl.add(Xx[Y]),re.up.copy(jx[Y]),re.lookAt(xl),re.updateMatrixWorld(),Je.makeTranslation(-Cr.x,-Cr.y,-Cr.z),Od.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Od,re.coordinateSystem,re.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)s.setRenderTarget(N.map,Y),s.clear();else{Y===0&&(s.setRenderTarget(N.map),s.clear());const re=N.getViewport(Y);a.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),F.viewport(a)}n=N.getFrustum(Y),b(R,_,se,S,this.type)}N.isPointLightShadow!==!0&&this.type===Fr&&v(N,_),N.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(w,P,L)};function v(E,R){const _=e.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new yn(i.x,i.y,{format:gs,type:rn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(R,null,_,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(R,null,_,f,x,null)}function T(E,R,_,w){let P=null;const L=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)P=L;else if(P=_.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=P.uuid,k=R.uuid;let I=c[F];I===void 0&&(I={},c[F]=I);let O=I[k];O===void 0&&(O=P.clone(),I[k]=O,R.addEventListener("dispose",y)),P=O}if(P.visible=R.visible,P.wireframe=R.wireframe,w===Fr?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:d[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const F=s.properties.get(P);F.light=_}return P}function b(E,R,_,w,P){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===Fr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);const k=e.update(E),I=E.material;if(Array.isArray(I)){const O=k.groups;for(let S=0,N=O.length;S<N;S++){const K=O[S],U=I[K.materialIndex];if(U&&U.visible){const V=T(E,U,w,P);E.onBeforeShadow(s,E,R,_,k,V,K),s.renderBufferDirect(_,null,k,V,E,K),E.onAfterShadow(s,E,R,_,k,V,K)}}}else if(I.visible){const O=T(E,I,w,P);E.onBeforeShadow(s,E,R,_,k,O,null),s.renderBufferDirect(_,null,k,O,E,null),E.onAfterShadow(s,E,R,_,k,O,null)}}const F=E.children;for(let k=0,I=F.length;k<I;k++)b(F[k],R,_,w,P)}function y(E){E.target.removeEventListener("dispose",y);for(const _ in c){const w=c[_],P=E.target.uuid;P in w&&(w[P].dispose(),delete w[P])}}}function Yx(s,e){function t(){let z=!1;const de=new pt;let Q=null;const ue=new pt(0,0,0,0);return{setMask:function(be){Q!==be&&!z&&(s.colorMask(be,be,be,be),Q=be)},setLocked:function(be){z=be},setClear:function(be,ie,Le,Ee,xt){xt===!0&&(be*=Ee,ie*=Ee,Le*=Ee),de.set(be,ie,Le,Ee),ue.equals(de)===!1&&(s.clearColor(be,ie,Le,Ee),ue.copy(de))},reset:function(){z=!1,Q=null,ue.set(-1,0,0,0)}}}function n(){let z=!1,de=!1,Q=null,ue=null,be=null;return{setReversed:function(ie){if(de!==ie){const Le=e.get("EXT_clip_control");ie?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),de=ie;const Ee=be;be=null,this.setClear(Ee)}},getReversed:function(){return de},setTest:function(ie){ie?te(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(ie){Q!==ie&&!z&&(s.depthMask(ie),Q=ie)},setFunc:function(ie){if(de&&(ie=Tp[ie]),ue!==ie){switch(ie){case Ll:s.depthFunc(s.NEVER);break;case Dl:s.depthFunc(s.ALWAYS);break;case Il:s.depthFunc(s.LESS);break;case Vr:s.depthFunc(s.LEQUAL);break;case Fl:s.depthFunc(s.EQUAL);break;case Nl:s.depthFunc(s.GEQUAL);break;case kl:s.depthFunc(s.GREATER);break;case Ul:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ue=ie}},setLocked:function(ie){z=ie},setClear:function(ie){be!==ie&&(be=ie,de&&(ie=1-ie),s.clearDepth(ie))},reset:function(){z=!1,Q=null,ue=null,be=null,de=!1}}}function i(){let z=!1,de=null,Q=null,ue=null,be=null,ie=null,Le=null,Ee=null,xt=null;return{setTest:function(ot){z||(ot?te(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(ot){de!==ot&&!z&&(s.stencilMask(ot),de=ot)},setFunc:function(ot,Wn,ti){(Q!==ot||ue!==Wn||be!==ti)&&(s.stencilFunc(ot,Wn,ti),Q=ot,ue=Wn,be=ti)},setOp:function(ot,Wn,ti){(ie!==ot||Le!==Wn||Ee!==ti)&&(s.stencilOp(ot,Wn,ti),ie=ot,Le=Wn,Ee=ti)},setLocked:function(ot){z=ot},setClear:function(ot){xt!==ot&&(s.clearStencil(ot),xt=ot)},reset:function(){z=!1,de=null,Q=null,ue=null,be=null,ie=null,Le=null,Ee=null,xt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,m=[],x=null,g=!1,p=null,v=null,T=null,b=null,y=null,E=null,R=null,_=new De(0,0,0),w=0,P=!1,L=null,F=null,k=null,I=null,O=null;const S=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,K=0;const U=s.getParameter(s.VERSION);U.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(U)[1]),N=K>=1):U.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),N=K>=2);let V=null,Y={};const se=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),Je=new pt().fromArray(se),qe=new pt().fromArray(re);function tt(z,de,Q,ue){const be=new Uint8Array(4),ie=s.createTexture();s.bindTexture(z,ie),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Le=0;Le<Q;Le++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(de,0,s.RGBA,1,1,ue,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(de+Le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return ie}const J={};J[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(s.DEPTH_TEST),a.setFunc(Vr),Qe(!1),Et(Sh),te(s.CULL_FACE),st(fi);function te(z){h[z]!==!0&&(s.enable(z),h[z]=!0)}function Me(z){h[z]!==!1&&(s.disable(z),h[z]=!1)}function Ue(z,de){return u[z]!==de?(s.bindFramebuffer(z,de),u[z]=de,z===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=de),z===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=de),!0):!1}function ve(z,de){let Q=m,ue=!1;if(z){Q=f.get(de),Q===void 0&&(Q=[],f.set(de,Q));const be=z.textures;if(Q.length!==be.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let ie=0,Le=be.length;ie<Le;ie++)Q[ie]=s.COLOR_ATTACHMENT0+ie;Q.length=be.length,ue=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,ue=!0);ue&&s.drawBuffers(Q)}function Xe(z){return x!==z?(s.useProgram(z),x=z,!0):!1}const Wt={[js]:s.FUNC_ADD,[Wf]:s.FUNC_SUBTRACT,[qf]:s.FUNC_REVERSE_SUBTRACT};Wt[Xf]=s.MIN,Wt[jf]=s.MAX;const $e={[Kf]:s.ZERO,[Yf]:s.ONE,[Jf]:s.SRC_COLOR,[Su]:s.SRC_ALPHA,[np]:s.SRC_ALPHA_SATURATE,[ep]:s.DST_COLOR,[Zf]:s.DST_ALPHA,[$f]:s.ONE_MINUS_SRC_COLOR,[wu]:s.ONE_MINUS_SRC_ALPHA,[tp]:s.ONE_MINUS_DST_COLOR,[Qf]:s.ONE_MINUS_DST_ALPHA,[ip]:s.CONSTANT_COLOR,[sp]:s.ONE_MINUS_CONSTANT_COLOR,[rp]:s.CONSTANT_ALPHA,[ap]:s.ONE_MINUS_CONSTANT_ALPHA};function st(z,de,Q,ue,be,ie,Le,Ee,xt,ot){if(z===fi){g===!0&&(Me(s.BLEND),g=!1);return}if(g===!1&&(te(s.BLEND),g=!0),z!==Vf){if(z!==p||ot!==P){if((v!==js||y!==js)&&(s.blendEquation(s.FUNC_ADD),v=js,y=js),ot)switch(z){case Or:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pl:s.blendFunc(s.ONE,s.ONE);break;case wh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Eh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ne("WebGLState: Invalid blending: ",z);break}else switch(z){case Or:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case wh:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Eh:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",z);break}T=null,b=null,E=null,R=null,_.set(0,0,0),w=0,p=z,P=ot}return}be=be||de,ie=ie||Q,Le=Le||ue,(de!==v||be!==y)&&(s.blendEquationSeparate(Wt[de],Wt[be]),v=de,y=be),(Q!==T||ue!==b||ie!==E||Le!==R)&&(s.blendFuncSeparate($e[Q],$e[ue],$e[ie],$e[Le]),T=Q,b=ue,E=ie,R=Le),(Ee.equals(_)===!1||xt!==w)&&(s.blendColor(Ee.r,Ee.g,Ee.b,xt),_.copy(Ee),w=xt),p=z,P=!1}function _t(z,de){z.side===Kn?Me(s.CULL_FACE):te(s.CULL_FACE);let Q=z.side===Pn;de&&(Q=!Q),Qe(Q),z.blending===Or&&z.transparent===!1?st(fi):st(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const ue=z.stencilWrite;o.setTest(ue),ue&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Mn(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?te(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(z){L!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),L=z)}function Et(z){z!==Gf?(te(s.CULL_FACE),z!==F&&(z===Sh?s.cullFace(s.BACK):z===Hf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),F=z}function $t(z){z!==k&&(N&&s.lineWidth(z),k=z)}function Mn(z,de,Q){z?(te(s.POLYGON_OFFSET_FILL),(I!==de||O!==Q)&&(I=de,O=Q,a.getReversed()&&(de=-de),s.polygonOffset(de,Q))):Me(s.POLYGON_OFFSET_FILL)}function Ct(z){z?te(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function Ut(z){z===void 0&&(z=s.TEXTURE0+S-1),V!==z&&(s.activeTexture(z),V=z)}function G(z,de,Q){Q===void 0&&(V===null?Q=s.TEXTURE0+S-1:Q=V);let ue=Y[Q];ue===void 0&&(ue={type:void 0,texture:void 0},Y[Q]=ue),(ue.type!==z||ue.texture!==de)&&(V!==Q&&(s.activeTexture(Q),V=Q),s.bindTexture(z,de||J[z]),ue.type=z,ue.texture=de)}function an(){const z=Y[V];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ht(){try{s.compressedTexImage2D(...arguments)}catch(z){Ne("WebGLState:",z)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(z){Ne("WebGLState:",z)}}function M(){try{s.texSubImage2D(...arguments)}catch(z){Ne("WebGLState:",z)}}function H(){try{s.texSubImage3D(...arguments)}catch(z){Ne("WebGLState:",z)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(z){Ne("WebGLState:",z)}}function $(){try{s.compressedTexSubImage3D(...arguments)}catch(z){Ne("WebGLState:",z)}}function ae(){try{s.texStorage2D(...arguments)}catch(z){Ne("WebGLState:",z)}}function oe(){try{s.texStorage3D(...arguments)}catch(z){Ne("WebGLState:",z)}}function Z(){try{s.texImage2D(...arguments)}catch(z){Ne("WebGLState:",z)}}function ee(){try{s.texImage3D(...arguments)}catch(z){Ne("WebGLState:",z)}}function ce(z){return d[z]!==void 0?d[z]:s.getParameter(z)}function Ce(z,de){d[z]!==de&&(s.pixelStorei(z,de),d[z]=de)}function fe(z){Je.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Je.copy(z))}function he(z){qe.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),qe.copy(z))}function Pe(z,de){let Q=c.get(de);Q===void 0&&(Q=new WeakMap,c.set(de,Q));let ue=Q.get(z);ue===void 0&&(ue=s.getUniformBlockIndex(de,z.name),Q.set(z,ue))}function Fe(z,de){const ue=c.get(de).get(z);l.get(de)!==ue&&(s.uniformBlockBinding(de,ue,z.__bindingPointIndex),l.set(de,ue))}function ze(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},V=null,Y={},u={},f=new WeakMap,m=[],x=null,g=!1,p=null,v=null,T=null,b=null,y=null,E=null,R=null,_=new De(0,0,0),w=0,P=!1,L=null,F=null,k=null,I=null,O=null,Je.set(0,0,s.canvas.width,s.canvas.height),qe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:Me,bindFramebuffer:Ue,drawBuffers:ve,useProgram:Xe,setBlending:st,setMaterial:_t,setFlipSided:Qe,setCullFace:Et,setLineWidth:$t,setPolygonOffset:Mn,setScissorTest:Ct,activeTexture:Ut,bindTexture:G,unbindTexture:an,compressedTexImage2D:ht,compressedTexImage3D:D,texImage2D:Z,texImage3D:ee,pixelStorei:Ce,getParameter:ce,updateUBOMapping:Pe,uniformBlockBinding:Fe,texStorage2D:ae,texStorage3D:oe,texSubImage2D:M,texSubImage3D:H,compressedTexSubImage2D:X,compressedTexSubImage3D:$,scissor:fe,viewport:he,reset:ze}}function Jx(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,M){return m?new OffscreenCanvas(D,M):Yr("canvas")}function g(D,M,H){let X=1;const $=ht(D);if(($.width>H||$.height>H)&&(X=H/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ae=Math.floor(X*$.width),oe=Math.floor(X*$.height);u===void 0&&(u=x(ae,oe));const Z=M?x(ae,oe):u;return Z.width=ae,Z.height=oe,Z.getContext("2d").drawImage(D,0,0,ae,oe),Ae("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ae+"x"+oe+")."),Z}else return"data"in D&&Ae("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),D;return D}function p(D){return D.generateMipmaps}function v(D){s.generateMipmap(D)}function T(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(D,M,H,X,$,ae=!1){if(D!==null){if(s[D]!==void 0)return s[D];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let oe;X&&(oe=e.get("EXT_texture_norm16"),oe||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=M;if(M===s.RED&&(H===s.FLOAT&&(Z=s.R32F),H===s.HALF_FLOAT&&(Z=s.R16F),H===s.UNSIGNED_BYTE&&(Z=s.R8),H===s.UNSIGNED_SHORT&&oe&&(Z=oe.R16_EXT),H===s.SHORT&&oe&&(Z=oe.R16_SNORM_EXT)),M===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(Z=s.R8UI),H===s.UNSIGNED_SHORT&&(Z=s.R16UI),H===s.UNSIGNED_INT&&(Z=s.R32UI),H===s.BYTE&&(Z=s.R8I),H===s.SHORT&&(Z=s.R16I),H===s.INT&&(Z=s.R32I)),M===s.RG&&(H===s.FLOAT&&(Z=s.RG32F),H===s.HALF_FLOAT&&(Z=s.RG16F),H===s.UNSIGNED_BYTE&&(Z=s.RG8),H===s.UNSIGNED_SHORT&&oe&&(Z=oe.RG16_EXT),H===s.SHORT&&oe&&(Z=oe.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(Z=s.RG8UI),H===s.UNSIGNED_SHORT&&(Z=s.RG16UI),H===s.UNSIGNED_INT&&(Z=s.RG32UI),H===s.BYTE&&(Z=s.RG8I),H===s.SHORT&&(Z=s.RG16I),H===s.INT&&(Z=s.RG32I)),M===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),H===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),H===s.UNSIGNED_INT&&(Z=s.RGB32UI),H===s.BYTE&&(Z=s.RGB8I),H===s.SHORT&&(Z=s.RGB16I),H===s.INT&&(Z=s.RGB32I)),M===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),H===s.UNSIGNED_INT&&(Z=s.RGBA32UI),H===s.BYTE&&(Z=s.RGBA8I),H===s.SHORT&&(Z=s.RGBA16I),H===s.INT&&(Z=s.RGBA32I)),M===s.RGB&&(H===s.UNSIGNED_SHORT&&oe&&(Z=oe.RGB16_EXT),H===s.SHORT&&oe&&(Z=oe.RGB16_SNORM_EXT),H===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),M===s.RGBA){const ee=ae?fo:Ke.getTransfer($);H===s.FLOAT&&(Z=s.RGBA32F),H===s.HALF_FLOAT&&(Z=s.RGBA16F),H===s.UNSIGNED_BYTE&&(Z=ee===ct?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT&&oe&&(Z=oe.RGBA16_EXT),H===s.SHORT&&oe&&(Z=oe.RGBA16_SNORM_EXT),H===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function y(D,M){let H;return D?M===null||M===mi||M===qr?H=s.DEPTH24_STENCIL8:M===Rn?H=s.DEPTH32F_STENCIL8:M===Wr&&(H=s.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===mi||M===qr?H=s.DEPTH_COMPONENT24:M===Rn?H=s.DEPTH_COMPONENT32F:M===Wr&&(H=s.DEPTH_COMPONENT16),H}function E(D,M){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==jt&&D.minFilter!==Mt?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function R(D){const M=D.target;M.removeEventListener("dispose",R),w(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&d.delete(M)}function _(D){const M=D.target;M.removeEventListener("dispose",_),L(M)}function w(D){const M=n.get(D);if(M.__webglInit===void 0)return;const H=D.source,X=f.get(H);if(X){const $=X[M.__cacheKey];$.usedTimes--,$.usedTimes===0&&P(D),Object.keys(X).length===0&&f.delete(H)}n.remove(D)}function P(D){const M=n.get(D);s.deleteTexture(M.__webglTexture);const H=D.source,X=f.get(H);delete X[M.__cacheKey],a.memory.textures--}function L(D){const M=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(M.__webglFramebuffer[X]))for(let $=0;$<M.__webglFramebuffer[X].length;$++)s.deleteFramebuffer(M.__webglFramebuffer[X][$]);else s.deleteFramebuffer(M.__webglFramebuffer[X]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[X])}else{if(Array.isArray(M.__webglFramebuffer))for(let X=0;X<M.__webglFramebuffer.length;X++)s.deleteFramebuffer(M.__webglFramebuffer[X]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let X=0;X<M.__webglColorRenderbuffer.length;X++)M.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[X]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=D.textures;for(let X=0,$=H.length;X<$;X++){const ae=n.get(H[X]);ae.__webglTexture&&(s.deleteTexture(ae.__webglTexture),a.memory.textures--),n.remove(H[X])}n.remove(D)}let F=0;function k(){F=0}function I(){return F}function O(D){F=D}function S(){const D=F;return D>=i.maxTextures&&Ae("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+i.maxTextures),F+=1,D}function N(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function K(D,M){const H=n.get(D);if(D.isVideoTexture&&G(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&H.__version!==D.version){const X=D.image;if(X===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(H,D,M);return}}else D.isExternalTexture&&(H.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+M)}function U(D,M){const H=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){Me(H,D,M);return}else D.isExternalTexture&&(H.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+M)}function V(D,M){const H=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){Me(H,D,M);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+M)}function Y(D,M){const H=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&H.__version!==D.version){Ue(H,D,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+M)}const se={[ms]:s.REPEAT,[Hn]:s.CLAMP_TO_EDGE,[ao]:s.MIRRORED_REPEAT},re={[jt]:s.NEAREST,[Au]:s.NEAREST_MIPMAP_NEAREST,[Nr]:s.NEAREST_MIPMAP_LINEAR,[Mt]:s.LINEAR,[$a]:s.LINEAR_MIPMAP_NEAREST,[Jn]:s.LINEAR_MIPMAP_LINEAR},Je={[gp]:s.NEVER,[yp]:s.ALWAYS,[bp]:s.LESS,[zc]:s.LEQUAL,[_p]:s.EQUAL,[Gc]:s.GEQUAL,[xp]:s.GREATER,[vp]:s.NOTEQUAL};function qe(D,M){if(M.type===Rn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Mt||M.magFilter===$a||M.magFilter===Nr||M.magFilter===Jn||M.minFilter===Mt||M.minFilter===$a||M.minFilter===Nr||M.minFilter===Jn)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,se[M.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,se[M.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,se[M.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,re[M.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,re[M.minFilter]),M.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,Je[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===jt||M.minFilter!==Nr&&M.minFilter!==Jn||M.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function tt(D,M){let H=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",R));const X=M.source;let $=f.get(X);$===void 0&&($={},f.set(X,$));const ae=N(M);if(ae!==D.__cacheKey){$[ae]===void 0&&($[ae]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),$[ae].usedTimes++;const oe=$[D.__cacheKey];oe!==void 0&&($[D.__cacheKey].usedTimes--,oe.usedTimes===0&&P(M)),D.__cacheKey=ae,D.__webglTexture=$[ae].texture}return H}function J(D,M,H){return Math.floor(Math.floor(D/H)/M)}function te(D,M,H,X){const ae=D.updateRanges;if(ae.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,H,X,M.data);else{ae.sort((Ce,fe)=>Ce.start-fe.start);let oe=0;for(let Ce=1;Ce<ae.length;Ce++){const fe=ae[oe],he=ae[Ce],Pe=fe.start+fe.count,Fe=J(he.start,M.width,4),ze=J(fe.start,M.width,4);he.start<=Pe+1&&Fe===ze&&J(he.start+he.count-1,M.width,4)===Fe?fe.count=Math.max(fe.count,he.start+he.count-fe.start):(++oe,ae[oe]=he)}ae.length=oe+1;const Z=t.getParameter(s.UNPACK_ROW_LENGTH),ee=t.getParameter(s.UNPACK_SKIP_PIXELS),ce=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Ce=0,fe=ae.length;Ce<fe;Ce++){const he=ae[Ce],Pe=Math.floor(he.start/4),Fe=Math.ceil(he.count/4),ze=Pe%M.width,z=Math.floor(Pe/M.width),de=Fe,Q=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(s.UNPACK_SKIP_ROWS,z),t.texSubImage2D(s.TEXTURE_2D,0,ze,z,de,Q,H,X,M.data)}D.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Z),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(s.UNPACK_SKIP_ROWS,ce)}}function Me(D,M,H){let X=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=s.TEXTURE_3D);const $=tt(D,M),ae=M.source;t.bindTexture(X,D.__webglTexture,s.TEXTURE0+H);const oe=n.get(ae);if(ae.version!==oe.__version||$===!0){if(t.activeTexture(s.TEXTURE0+H),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const Q=Ke.getPrimaries(Ke.workingColorSpace),ue=M.colorSpace===Ai?null:Ke.getPrimaries(M.colorSpace),be=M.colorSpace===Ai||Q===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let ee=g(M.image,!1,i.maxTextureSize);ee=an(M,ee);const ce=r.convert(M.format,M.colorSpace),Ce=r.convert(M.type);let fe=b(M.internalFormat,ce,Ce,M.normalized,M.colorSpace,M.isVideoTexture);qe(X,M);let he;const Pe=M.mipmaps,Fe=M.isVideoTexture!==!0,ze=oe.__version===void 0||$===!0,z=ae.dataReady,de=E(M,ee);if(M.isDepthTexture)fe=y(M.format===us,M.type),ze&&(Fe?t.texStorage2D(s.TEXTURE_2D,1,fe,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,fe,ee.width,ee.height,0,ce,Ce,null));else if(M.isDataTexture)if(Pe.length>0){Fe&&ze&&t.texStorage2D(s.TEXTURE_2D,de,fe,Pe[0].width,Pe[0].height);for(let Q=0,ue=Pe.length;Q<ue;Q++)he=Pe[Q],Fe?z&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,he.width,he.height,ce,Ce,he.data):t.texImage2D(s.TEXTURE_2D,Q,fe,he.width,he.height,0,ce,Ce,he.data);M.generateMipmaps=!1}else Fe?(ze&&t.texStorage2D(s.TEXTURE_2D,de,fe,ee.width,ee.height),z&&te(M,ee,ce,Ce)):t.texImage2D(s.TEXTURE_2D,0,fe,ee.width,ee.height,0,ce,Ce,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Fe&&ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,fe,Pe[0].width,Pe[0].height,ee.depth);for(let Q=0,ue=Pe.length;Q<ue;Q++)if(he=Pe[Q],M.format!==Cn)if(ce!==null)if(Fe){if(z)if(M.layerUpdates.size>0){const be=bd(he.width,he.height,M.format,M.type);for(const ie of M.layerUpdates){const Le=he.data.subarray(ie*be/he.data.BYTES_PER_ELEMENT,(ie+1)*be/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,ie,he.width,he.height,1,ce,Le)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,ee.depth,ce,he.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,fe,he.width,he.height,ee.depth,0,he.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?z&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,ee.depth,ce,Ce,he.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Q,fe,he.width,he.height,ee.depth,0,ce,Ce,he.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Fe&&ze&&t.texStorage2D(s.TEXTURE_2D,de,fe,Pe[0].width,Pe[0].height);for(let Q=0,ue=Pe.length;Q<ue;Q++)he=Pe[Q],M.format!==Cn?ce!==null?Fe?z&&t.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,he.width,he.height,ce,he.data):t.compressedTexImage2D(s.TEXTURE_2D,Q,fe,he.width,he.height,0,he.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?z&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,he.width,he.height,ce,Ce,he.data):t.texImage2D(s.TEXTURE_2D,Q,fe,he.width,he.height,0,ce,Ce,he.data)}else if(M.isDataArrayTexture)if(Fe){if(ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,fe,ee.width,ee.height,ee.depth),z)if(M.layerUpdates.size>0){const Q=bd(ee.width,ee.height,M.format,M.type);for(const ue of M.layerUpdates){const be=ee.data.subarray(ue*Q/ee.data.BYTES_PER_ELEMENT,(ue+1)*Q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ue,ee.width,ee.height,1,ce,Ce,be)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,Ce,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,fe,ee.width,ee.height,ee.depth,0,ce,Ce,ee.data);else if(M.isData3DTexture)Fe?(ze&&t.texStorage3D(s.TEXTURE_3D,de,fe,ee.width,ee.height,ee.depth),z&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,Ce,ee.data)):t.texImage3D(s.TEXTURE_3D,0,fe,ee.width,ee.height,ee.depth,0,ce,Ce,ee.data);else if(M.isFramebufferTexture){if(ze)if(Fe)t.texStorage2D(s.TEXTURE_2D,de,fe,ee.width,ee.height);else{let Q=ee.width,ue=ee.height;for(let be=0;be<de;be++)t.texImage2D(s.TEXTURE_2D,be,fe,Q,ue,0,ce,Ce,null),Q>>=1,ue>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const Q=s.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),ee.parentNode!==Q){Q.appendChild(ee),d.add(M),Q.onpaint=ue=>{const be=ue.changedElements;for(const ie of d)be.includes(ie.image)&&(ie.needsUpdate=!0)},Q.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ee);else{const be=s.RGBA,ie=s.RGBA,Le=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,be,ie,Le,ee)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Fe&&ze){const Q=ht(Pe[0]);t.texStorage2D(s.TEXTURE_2D,de,fe,Q.width,Q.height)}for(let Q=0,ue=Pe.length;Q<ue;Q++)he=Pe[Q],Fe?z&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,ce,Ce,he):t.texImage2D(s.TEXTURE_2D,Q,fe,ce,Ce,he);M.generateMipmaps=!1}else if(Fe){if(ze){const Q=ht(ee);t.texStorage2D(s.TEXTURE_2D,de,fe,Q.width,Q.height)}z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ce,Ce,ee)}else t.texImage2D(s.TEXTURE_2D,0,fe,ce,Ce,ee);p(M)&&v(X),oe.__version=ae.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Ue(D,M,H){if(M.image.length!==6)return;const X=tt(D,M),$=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+H);const ae=n.get($);if($.version!==ae.__version||X===!0){t.activeTexture(s.TEXTURE0+H);const oe=Ke.getPrimaries(Ke.workingColorSpace),Z=M.colorSpace===Ai?null:Ke.getPrimaries(M.colorSpace),ee=M.colorSpace===Ai||oe===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ce=M.isCompressedTexture||M.image[0].isCompressedTexture,Ce=M.image[0]&&M.image[0].isDataTexture,fe=[];for(let ie=0;ie<6;ie++)!ce&&!Ce?fe[ie]=g(M.image[ie],!0,i.maxCubemapSize):fe[ie]=Ce?M.image[ie].image:M.image[ie],fe[ie]=an(M,fe[ie]);const he=fe[0],Pe=r.convert(M.format,M.colorSpace),Fe=r.convert(M.type),ze=b(M.internalFormat,Pe,Fe,M.normalized,M.colorSpace),z=M.isVideoTexture!==!0,de=ae.__version===void 0||X===!0,Q=$.dataReady;let ue=E(M,he);qe(s.TEXTURE_CUBE_MAP,M);let be;if(ce){z&&de&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,ze,he.width,he.height);for(let ie=0;ie<6;ie++){be=fe[ie].mipmaps;for(let Le=0;Le<be.length;Le++){const Ee=be[Le];M.format!==Cn?Pe!==null?z?Q&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,Ee.width,Ee.height,Pe,Ee.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,ze,Ee.width,Ee.height,0,Ee.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,Ee.width,Ee.height,Pe,Fe,Ee.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,ze,Ee.width,Ee.height,0,Pe,Fe,Ee.data)}}}else{if(be=M.mipmaps,z&&de){be.length>0&&ue++;const ie=ht(fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,ze,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ce){z?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,fe[ie].width,fe[ie].height,Pe,Fe,fe[ie].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ze,fe[ie].width,fe[ie].height,0,Pe,Fe,fe[ie].data);for(let Le=0;Le<be.length;Le++){const xt=be[Le].image[ie].image;z?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,xt.width,xt.height,Pe,Fe,xt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,ze,xt.width,xt.height,0,Pe,Fe,xt.data)}}else{z?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Pe,Fe,fe[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ze,Pe,Fe,fe[ie]);for(let Le=0;Le<be.length;Le++){const Ee=be[Le];z?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,Pe,Fe,Ee.image[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,ze,Pe,Fe,Ee.image[ie])}}}p(M)&&v(s.TEXTURE_CUBE_MAP),ae.__version=$.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function ve(D,M,H,X,$,ae){const oe=r.convert(H.format,H.colorSpace),Z=r.convert(H.type),ee=b(H.internalFormat,oe,Z,H.normalized,H.colorSpace),ce=n.get(M),Ce=n.get(H);if(Ce.__renderTarget=M,!ce.__hasExternalTextures){const fe=Math.max(1,M.width>>ae),he=Math.max(1,M.height>>ae);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,ae,ee,fe,he,M.depth,0,oe,Z,null):t.texImage2D($,ae,ee,fe,he,0,oe,Z,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),Ut(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,$,Ce.__webglTexture,0,Ct(M)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,$,Ce.__webglTexture,ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(D,M,H){if(s.bindRenderbuffer(s.RENDERBUFFER,D),M.depthBuffer){const X=M.depthTexture,$=X&&X.isDepthTexture?X.type:null,ae=y(M.stencilBuffer,$),oe=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ut(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(M),ae,M.width,M.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(M),ae,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ae,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,D)}else{const X=M.textures;for(let $=0;$<X.length;$++){const ae=X[$],oe=r.convert(ae.format,ae.colorSpace),Z=r.convert(ae.type),ee=b(ae.internalFormat,oe,Z,ae.normalized,ae.colorSpace);Ut(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(M),ee,M.width,M.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(M),ee,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ee,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Wt(D,M,H){const X=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(M.depthTexture);if($.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X){if($.__webglInit===void 0&&($.__webglInit=!0,M.depthTexture.addEventListener("dispose",R)),$.__webglTexture===void 0){$.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),qe(s.TEXTURE_CUBE_MAP,M.depthTexture);const ce=r.convert(M.depthTexture.format),Ce=r.convert(M.depthTexture.type);let fe;M.depthTexture.format===Ii?fe=s.DEPTH_COMPONENT24:M.depthTexture.format===us&&(fe=s.DEPTH24_STENCIL8);for(let he=0;he<6;he++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,fe,M.width,M.height,0,ce,Ce,null)}}else K(M.depthTexture,0);const ae=$.__webglTexture,oe=Ct(M),Z=X?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,ee=M.depthTexture.format===us?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ii)Ut(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,Z,ae,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,ee,Z,ae,0);else if(M.depthTexture.format===us)Ut(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,Z,ae,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,ee,Z,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(D){const M=n.get(D),H=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const X=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),X){const $=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),M.__depthDisposeCallback=$}M.__boundDepthTexture=X}if(D.depthTexture&&!M.__autoAllocateDepthBuffer)if(H)for(let X=0;X<6;X++)Wt(M.__webglFramebuffer[X],D,X);else{const X=D.texture.mipmaps;X&&X.length>0?Wt(M.__webglFramebuffer[0],D,0):Wt(M.__webglFramebuffer,D,0)}else if(H){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]===void 0)M.__webglDepthbuffer[X]=s.createRenderbuffer(),Xe(M.__webglDepthbuffer[X],D,!1);else{const $=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,ae)}}else{const X=D.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Xe(M.__webglDepthbuffer,D,!1);else{const $=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,ae)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function st(D,M,H){const X=n.get(D);M!==void 0&&ve(X.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&$e(D)}function _t(D){const M=D.texture,H=n.get(D),X=n.get(M);D.addEventListener("dispose",_);const $=D.textures,ae=D.isWebGLCubeRenderTarget===!0,oe=$.length>1;if(oe||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=M.version,a.memory.textures++),ae){H.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[Z]=[];for(let ee=0;ee<M.mipmaps.length;ee++)H.__webglFramebuffer[Z][ee]=s.createFramebuffer()}else H.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let Z=0;Z<M.mipmaps.length;Z++)H.__webglFramebuffer[Z]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(oe)for(let Z=0,ee=$.length;Z<ee;Z++){const ce=n.get($[Z]);ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture(),a.memory.textures++)}if(D.samples>0&&Ut(D)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Z=0;Z<$.length;Z++){const ee=$[Z];H.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[Z]);const ce=r.convert(ee.format,ee.colorSpace),Ce=r.convert(ee.type),fe=b(ee.internalFormat,ce,Ce,ee.normalized,ee.colorSpace,D.isXRRenderTarget===!0),he=Ct(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,he,fe,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,H.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Xe(H.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),qe(s.TEXTURE_CUBE_MAP,M);for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)ve(H.__webglFramebuffer[Z][ee],D,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ee);else ve(H.__webglFramebuffer[Z],D,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(M)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let Z=0,ee=$.length;Z<ee;Z++){const ce=$[Z],Ce=n.get(ce);let fe=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(fe=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,Ce.__webglTexture),qe(fe,ce),ve(H.__webglFramebuffer,D,ce,s.COLOR_ATTACHMENT0+Z,fe,0),p(ce)&&v(fe)}t.unbindTexture()}else{let Z=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Z=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Z,X.__webglTexture),qe(Z,M),M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)ve(H.__webglFramebuffer[ee],D,M,s.COLOR_ATTACHMENT0,Z,ee);else ve(H.__webglFramebuffer,D,M,s.COLOR_ATTACHMENT0,Z,0);p(M)&&v(Z),t.unbindTexture()}D.depthBuffer&&$e(D)}function Qe(D){const M=D.textures;for(let H=0,X=M.length;H<X;H++){const $=M[H];if(p($)){const ae=T(D),oe=n.get($).__webglTexture;t.bindTexture(ae,oe),v(ae),t.unbindTexture()}}}const Et=[],$t=[];function Mn(D){if(D.samples>0){if(Ut(D)===!1){const M=D.textures,H=D.width,X=D.height;let $=s.COLOR_BUFFER_BIT;const ae=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=n.get(D),Z=M.length>1;if(Z)for(let ce=0;ce<M.length;ce++)t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const ee=D.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ce=0;ce<M.length;ce++){if(D.resolveDepthBuffer&&(D.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),Z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,oe.__webglColorRenderbuffer[ce]);const Ce=n.get(M[ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ce,0)}s.blitFramebuffer(0,0,H,X,0,0,H,X,$,s.NEAREST),l===!0&&(Et.length=0,$t.length=0,Et.push(s.COLOR_ATTACHMENT0+ce),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(Et.push(ae),$t.push(ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,$t)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Et))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let ce=0;ce<M.length;ce++){t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,oe.__webglColorRenderbuffer[ce]);const Ce=n.get(M[ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,Ce,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){const M=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Ct(D){return Math.min(i.maxSamples,D.samples)}function Ut(D){const M=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function G(D){const M=a.render.frame;h.get(D)!==M&&(h.set(D,M),D.update())}function an(D,M){const H=D.colorSpace,X=D.format,$=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||H!==Ln&&H!==Ai&&(Ke.getTransfer(H)===ct?(X!==Cn||$!==Fn)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",H)),M}function ht(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=S,this.resetTextureUnits=k,this.getTextureUnits=I,this.setTextureUnits=O,this.setTexture2D=K,this.setTexture2DArray=U,this.setTexture3D=V,this.setTextureCube=Y,this.rebindTextures=st,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Mn,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $x(s,e){function t(n,i=Ai){let r;const a=Ke.getTransfer(i);if(n===Fn)return s.UNSIGNED_BYTE;if(n===Fc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Nc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Pu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Lu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ru)return s.BYTE;if(n===Cu)return s.SHORT;if(n===Wr)return s.UNSIGNED_SHORT;if(n===Ic)return s.INT;if(n===mi)return s.UNSIGNED_INT;if(n===Rn)return s.FLOAT;if(n===rn)return s.HALF_FLOAT;if(n===Du)return s.ALPHA;if(n===Iu)return s.RGB;if(n===Cn)return s.RGBA;if(n===Ii)return s.DEPTH_COMPONENT;if(n===us)return s.DEPTH_STENCIL;if(n===Lo)return s.RED;if(n===kc)return s.RED_INTEGER;if(n===gs)return s.RG;if(n===Uc)return s.RG_INTEGER;if(n===Oc)return s.RGBA_INTEGER;if(n===Za||n===Qa||n===eo||n===to)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ol||n===Bl||n===zl||n===Gl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hl||n===Vl||n===Wl||n===ql||n===Xl||n===oo||n===jl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Hl||n===Vl)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ql)return r.COMPRESSED_R11_EAC;if(n===Xl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===oo)return r.COMPRESSED_RG11_EAC;if(n===jl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Kl||n===Yl||n===Jl||n===$l||n===Zl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Kl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$l)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ql)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ec)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ic)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ac)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lc||n===cc||n===hc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===lc)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dc||n===uc||n===lo||n===fc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===dc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qx=`
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

}`;class ev{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ku(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new hn({vertexShader:Zx,fragmentShader:Qx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new Do(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tv extends Ni{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null;const x=typeof XRWebGLBinding<"u",g=new ev,p={},v=t.getContextAttributes();let T=null,b=null;const y=[],E=[],R=new _e;let _=null,w=null;const P=new vn;P.viewport=new pt;const L=new vn;L.viewport=new pt;const F=[P,L],k=new Ym;let I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let te=y[J];return te===void 0&&(te=new jo,y[J]=te),te.getTargetRaySpace()},this.getControllerGrip=function(J){let te=y[J];return te===void 0&&(te=new jo,y[J]=te),te.getGripSpace()},this.getHand=function(J){let te=y[J];return te===void 0&&(te=new jo,y[J]=te),te.getHandSpace()};function S(J){const te=E.indexOf(J.inputSource);if(te===-1)return;const Me=y[te];Me!==void 0&&(Me.update(J.inputSource,J.frame,c||a),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function N(){i.removeEventListener("select",S),i.removeEventListener("selectstart",S),i.removeEventListener("selectend",S),i.removeEventListener("squeeze",S),i.removeEventListener("squeezestart",S),i.removeEventListener("squeezeend",S),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",K);for(let J=0;J<y.length;J++){const te=E[J];te!==null&&(E[J]=null,y[J].disconnect(te))}I=null,O=null,g.reset();for(const J in p)delete p[J];if(e.setRenderTarget(T),f=null,u=null,d=null,i=null,b=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),w!==null){const J=w.camera;J.fov=w.fov,J.zoom=w.zoom,J.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",S),i.addEventListener("selectstart",S),i.addEventListener("selectend",S),i.addEventListener("squeeze",S),i.addEventListener("squeezestart",S),i.addEventListener("squeezeend",S),i.addEventListener("end",N),i.addEventListener("inputsourceschange",K),v.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ue=null,ve=null;v.depth&&(ve=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=v.stencil?us:Ii,Ue=v.stencil?qr:mi);const Xe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Xe),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new yn(u.textureWidth,u.textureHeight,{format:Cn,type:Fn,depthTexture:new $r(u.textureWidth,u.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Me={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Me),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new yn(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(J){for(let te=0;te<J.removed.length;te++){const Me=J.removed[te],Ue=E.indexOf(Me);Ue>=0&&(E[Ue]=null,y[Ue].disconnect(Me))}for(let te=0;te<J.added.length;te++){const Me=J.added[te];let Ue=E.indexOf(Me);if(Ue===-1){for(let Xe=0;Xe<y.length;Xe++)if(Xe>=E.length){E.push(Me),Ue=Xe;break}else if(E[Xe]===null){E[Xe]=Me,Ue=Xe;break}if(Ue===-1)break}const ve=y[Ue];ve&&ve.connect(Me)}}const U=new C,V=new C;function Y(J,te,Me){U.setFromMatrixPosition(te.matrixWorld),V.setFromMatrixPosition(Me.matrixWorld);const Ue=U.distanceTo(V),ve=te.projectionMatrix.elements,Xe=Me.projectionMatrix.elements,Wt=ve[14]/(ve[10]-1),$e=ve[14]/(ve[10]+1),st=(ve[9]+1)/ve[5],_t=(ve[9]-1)/ve[5],Qe=(ve[8]-1)/ve[0],Et=(Xe[8]+1)/Xe[0],$t=Wt*Qe,Mn=Wt*Et,Ct=Ue/(-Qe+Et),Ut=Ct*-Qe;if(te.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ut),J.translateZ(Ct),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ve[10]===-1)J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const G=Wt+Ct,an=$e+Ct,ht=$t-Ut,D=Mn+(Ue-Ut),M=st*$e/an*G,H=_t*$e/an*G;J.projectionMatrix.makePerspective(ht,D,M,H,G,an),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function se(J,te){te===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(te.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let te=J.near,Me=J.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(Me=g.depthFar)),k.near=L.near=P.near=te,k.far=L.far=P.far=Me,(I!==k.near||O!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,O=k.far),k.layers.mask=J.layers.mask|6,P.layers.mask=k.layers.mask&-5,L.layers.mask=k.layers.mask&-3;const Ue=J.parent,ve=k.cameras;se(k,Ue);for(let Xe=0;Xe<ve.length;Xe++)se(ve[Xe],Ue);ve.length===2?Y(k,P,L):k.projectionMatrix.copy(P.projectionMatrix),w===null&&J.isPerspectiveCamera&&(w={camera:J,fov:J.fov,zoom:J.zoom}),re(J,k,Ue)};function re(J,te,Me){Me===null?J.matrix.copy(te.matrixWorld):(J.matrix.copy(Me.matrixWorld),J.matrix.invert(),J.matrix.multiply(te.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=or*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(J){return p[J]};let Je=null;function qe(J,te){if(h=te.getViewerPose(c||a),m=te,h!==null){const Me=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Ue=!1;Me.length!==k.cameras.length&&(k.cameras.length=0,Ue=!0);for(let $e=0;$e<Me.length;$e++){const st=Me[$e];let _t=null;if(f!==null)_t=f.getViewport(st);else{const Et=d.getViewSubImage(u,st);_t=Et.viewport,$e===0&&(e.setRenderTargetTextures(b,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(b))}let Qe=F[$e];Qe===void 0&&(Qe=new vn,Qe.layers.enable($e),Qe.viewport=new pt,F[$e]=Qe),Qe.matrix.fromArray(st.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(st.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(_t.x,_t.y,_t.width,_t.height),$e===0&&(k.matrix.copy(Qe.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ue===!0&&k.cameras.push(Qe)}const ve=i.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const $e=d.getDepthInformation(Me[0]);$e&&$e.isValid&&$e.texture&&g.init($e,i.renderState)}if(ve&&ve.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let $e=0;$e<Me.length;$e++){const st=Me[$e].camera;if(st){let _t=p[st];_t||(_t=new Ku,p[st]=_t);const Qe=d.getCameraImage(st);_t.sourceTexture=Qe}}}}for(let Me=0;Me<y.length;Me++){const Ue=E[Me],ve=y[Me];Ue!==null&&ve!==void 0&&ve.update(Ue,te,c||a)}Je&&Je(J,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),m=null}const tt=new lf;tt.setAnimationLoop(qe),this.setAnimationLoop=function(J){Je=J},this.dispose=function(){}}}const nv=new Re,mf=new ke;mf.set(-1,0,0,0,1,0,0,0,1);function iv(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Yu(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,T,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,b)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,v,T):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Pn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Pn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=e.get(p),T=v.envMap,b=v.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(nv.makeRotationFromEuler(b)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(mf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=T*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function sv(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const E=y.program;n.uniformBlockBinding(b,E)}function c(b,y){let E=i[b.id];E===void 0&&(g(b),E=h(b),i[b.id]=E,b.addEventListener("dispose",v));const R=y.program;n.updateUBOMapping(b,R);const _=e.render.frame;r[b.id]!==_&&(u(b),r[b.id]=_)}function h(b){const y=d();b.__bindingPointIndex=y;const E=s.createBuffer(),R=b.__size,_=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,R,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,E),E}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const y=i[b.id],E=b.uniforms,R=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let _=0,w=E.length;_<w;_++){const P=E[_];if(Array.isArray(P))for(let L=0,F=P.length;L<F;L++)f(P[L],_,L,R);else f(P,_,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,y,E,R){if(x(b,y,E,R)===!0){const _=b.__offset,w=b.value;if(Array.isArray(w)){let P=0;for(let L=0;L<w.length;L++){const F=w[L],k=p(F);m(F,b.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,b.__data)}}function m(b,y,E){typeof b=="number"||typeof b=="boolean"?y[0]=b:b.isMatrix3?(y[0]=b.elements[0],y[1]=b.elements[1],y[2]=b.elements[2],y[3]=0,y[4]=b.elements[3],y[5]=b.elements[4],y[6]=b.elements[5],y[7]=0,y[8]=b.elements[6],y[9]=b.elements[7],y[10]=b.elements[8],y[11]=0):ArrayBuffer.isView(b)?y.set(new b.constructor(b.buffer,b.byteOffset,y.length)):b.toArray(y,E)}function x(b,y,E,R){const _=b.value,w=y+"_"+E;if(R[w]===void 0)return typeof _=="number"||typeof _=="boolean"?R[w]=_:ArrayBuffer.isView(_)?R[w]=_.slice():R[w]=_.clone(),!0;{const P=R[w];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return R[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function g(b){const y=b.uniforms;let E=0;const R=16;for(let w=0,P=y.length;w<P;w++){const L=Array.isArray(y[w])?y[w]:[y[w]];for(let F=0,k=L.length;F<k;F++){const I=L[F],O=Array.isArray(I.value)?I.value:[I.value];for(let S=0,N=O.length;S<N;S++){const K=O[S],U=p(K),V=E%R,Y=V%U.boundary,se=V+Y;E+=Y,se!==0&&R-se<U.storage&&(E+=R-se),I.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=U.storage}}}const _=E%R;return _>0&&(E+=R-_),b.__size=E,b.__cache={},this}function p(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(y.boundary=16,y.storage=b.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",b),y}function v(b){const y=b.target;y.removeEventListener("dispose",v);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function T(){for(const b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:T}}const rv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let si=null;function av(){return si===null&&(si=new bs(rv,16,16,gs,rn),si.name="DFG_LUT",si.minFilter=Mt,si.magFilter=Mt,si.wrapS=Hn,si.wrapT=Hn,si.generateMipmaps=!1,si.needsUpdate=!0),si}class ov{constructor(e={}){const{canvas:t=wp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Fn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const x=f,g=new Set([Oc,Uc,kc]),p=new Set([Fn,mi,Wr,qr,Fc,Nc]),v=new Uint32Array(4),T=new Int32Array(4),b=new C;let y=null,E=null;const R=[],_=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,F=null,k=null,I=null,O=null;this._outputColorSpace=Gt;let S=0,N=0,K=null,U=-1,V=null;const Y=new pt,se=new pt;let re=null;const Je=new De(0);let qe=0,tt=t.width,J=t.height,te=1,Me=null,Ue=null;const ve=new pt(0,0,tt,J),Xe=new pt(0,0,tt,J);let Wt=!1;const $e=new Xc;let st=!1,_t=!1;const Qe=new Re,Et=new C,$t=new pt,Mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function Ut(){return K===null?te:1}let G=n;function an(A,B){return t.getContext(A,B)}let ht,D,M,H,X,$,ae,oe,Z,ee,ce,Ce,fe,he,Pe,Fe,ze,z,de,Q,ue,be,ie;try{const A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ac}`),t.addEventListener("webglcontextlost",xt,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",Wn,!1),G===null){const B="webgl2";if(G=an(B,A),G===null)throw an(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(A){throw t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Wn,!1),Ne("WebGLRenderer: "+A.message),A}function Le(){ht=new a_(G),ht.init(),ue=new $x(G,ht),D=new J0(G,ht,e,ue),M=new Yx(G,ht),D.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),k=G.createFramebuffer(),I=G.createFramebuffer(),O=G.createFramebuffer(),H=new c_(G),X=new Nx,$=new Jx(G,ht,M,X,D,ue,H),ae=new r_(P),oe=new dg(G),be=new K0(G,oe),Z=new o_(G,oe,H,be),ee=new d_(G,Z,oe,be,H),z=new h_(G,D,$),Pe=new $0(X),ce=new Fx(P,ae,ht,D,be,Pe),Ce=new iv(P,X),fe=new Ux,he=new Vx(ht),ze=new j0(P,ae,M,ee,m,l),Fe=new Kx(P,ee,D),ie=new sv(G,H,D,M),de=new Y0(G,ht,H),Q=new l_(G,ht,H),H.programs=ce.programs,P.capabilities=D,P.extensions=ht,P.properties=X,P.renderLists=fe,P.shadowMap=Fe,P.state=M,P.info=H}x!==Fn&&(w=new f_(x,t.width,t.height,o,i,r));const Ee=new tv(P,G);this.xr=Ee,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(A){A!==void 0&&(te=A,this.setSize(tt,J,!1))},this.getSize=function(A){return A.set(tt,J)},this.setSize=function(A,B,j=!0){if(Ee.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=A,J=B,t.width=Math.floor(A*te),t.height=Math.floor(B*te),j===!0&&(t.style.width=A+"px",t.style.height=B+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(tt*te,J*te).floor()},this.setDrawingBufferSize=function(A,B,j){tt=A,J=B,te=j,t.width=Math.floor(A*j),t.height=Math.floor(B*j),this.setViewport(0,0,A,B)},this.setEffects=function(A){if(x===Fn){Ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let B=0;B<A.length;B++)if(A[B].isOutputPass===!0){Ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Y)},this.getViewport=function(A){return A.copy(ve)},this.setViewport=function(A,B,j,W){A.isVector4?ve.set(A.x,A.y,A.z,A.w):ve.set(A,B,j,W),M.viewport(Y.copy(ve).multiplyScalar(te).round())},this.getScissor=function(A){return A.copy(Xe)},this.setScissor=function(A,B,j,W){A.isVector4?Xe.set(A.x,A.y,A.z,A.w):Xe.set(A,B,j,W),M.scissor(se.copy(Xe).multiplyScalar(te).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(A){M.setScissorTest(Wt=A)},this.setOpaqueSort=function(A){Me=A},this.setTransparentSort=function(A){Ue=A},this.getClearColor=function(A){return A.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,j=!0){let W=0;if(A){let q=!1;if(K!==null){const ge=K.texture.format;q=g.has(ge)}if(q){const ge=K.texture.type,ye=p.has(ge),me=ze.getClearColor(),Se=ze.getClearAlpha(),Te=me.r,He=me.g,Ze=me.b;ye?(v[0]=Te,v[1]=He,v[2]=Ze,v[3]=Se,G.clearBufferuiv(G.COLOR,0,v)):(T[0]=Te,T[1]=He,T[2]=Ze,T[3]=Se,G.clearBufferiv(G.COLOR,0,T))}else W|=G.COLOR_BUFFER_BIT}B&&(W|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(W|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&G.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),F=A},this.dispose=function(){t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Wn,!1),ze.dispose(),fe.dispose(),he.dispose(),X.dispose(),ae.dispose(),ee.dispose(),be.dispose(),ie.dispose(),ce.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",uh),Ee.removeEventListener("sessionend",fh),Qi.stop()};function xt(A){A.preventDefault(),po("WebGLRenderer: Context Lost."),L=!0}function ot(){po("WebGLRenderer: Context Restored."),L=!1;const A=H.autoReset,B=Fe.enabled,j=Fe.autoUpdate,W=Fe.needsUpdate,q=Fe.type;Le(),H.autoReset=A,Fe.enabled=B,Fe.autoUpdate=j,Fe.needsUpdate=W,Fe.type=q}function Wn(A){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ti(A){const B=A.target;B.removeEventListener("dispose",ti),Cf(B)}function Cf(A){Pf(A),X.remove(A)}function Pf(A){const B=X.get(A).programs;B!==void 0&&(B.forEach(function(j){ce.releaseProgram(j)}),A.isShaderMaterial&&ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,j,W,q,ge){B===null&&(B=Mn);const ye=q.isMesh&&q.matrixWorld.determinantAffine()<0,me=If(A,B,j,W,q);M.setMaterial(W,ye);let Se=j.index,Te=1;if(W.wireframe===!0){if(Se=Z.getWireframeAttribute(j),Se===void 0)return;Te=2}const He=j.drawRange,Ze=j.attributes.position;let we=He.start*Te,lt=(He.start+He.count)*Te;ge!==null&&(we=Math.max(we,ge.start*Te),lt=Math.min(lt,(ge.start+ge.count)*Te)),Se!==null?(we=Math.max(we,0),lt=Math.min(lt,Se.count)):Ze!=null&&(we=Math.max(we,0),lt=Math.min(lt,Ze.count));const Ot=lt-we;if(Ot<0||Ot===1/0)return;be.setup(q,W,me,j,Se);let St,gt=de;if(Se!==null&&(St=oe.get(Se),gt=Q,gt.setIndex(St)),q.isMesh)W.wireframe===!0?(M.setLineWidth(W.wireframeLinewidth*Ut()),gt.setMode(G.LINES)):gt.setMode(G.TRIANGLES);else if(q.isLine){let on=W.linewidth;on===void 0&&(on=1),M.setLineWidth(on*Ut()),q.isLineSegments?gt.setMode(G.LINES):q.isLineLoop?gt.setMode(G.LINE_LOOP):gt.setMode(G.LINE_STRIP)}else q.isPoints?gt.setMode(G.POINTS):q.isSprite&&gt.setMode(G.TRIANGLES);if(q.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))gt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const on=q._multiDrawStarts,xe=q._multiDrawCounts,dn=q._multiDrawCount,nt=Se?oe.get(Se).bytesPerElement:1,kn=X.get(W).currentProgram.getUniforms();for(let ni=0;ni<dn;ni++)kn.setValue(G,"_gl_DrawID",ni),gt.render(on[ni]/nt,xe[ni])}else if(q.isInstancedMesh)gt.renderInstances(we,Ot,q.count);else if(j.isInstancedBufferGeometry){const on=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,xe=Math.min(j.instanceCount,on);gt.renderInstances(we,Ot,xe)}else gt.render(we,Ot)};function dh(A,B,j,W){F!==null&&A.isNodeMaterial&&F.setObject(W,A),st===!0&&Pe.setState(A,j,!1),A.transparent===!0&&A.side===Kn&&A.forceSinglePass===!1?(A.side=Pn,A.needsUpdate=!0,ca(A,B,W),A.side=Di,A.needsUpdate=!0,ca(A,B,W),A.side=Kn):ca(A,B,W)}this.compile=function(A,B,j=null){j===null&&(j=A),F!==null&&F.renderStart(A,B,j),E=he.get(j),E.init(B),_.push(E),j.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),A!==j&&A.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),_t=this.localClippingEnabled,st=Pe.init(this.clippingPlanes,_t),st===!0&&Pe.setGlobalState(this.clippingPlanes,B),F!==null&&Fe.render(E.state.shadowsArray,j,B);const W=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ge=q.material;if(ge)if(Array.isArray(ge))for(let ye=0;ye<ge.length;ye++){const me=ge[ye];dh(me,j,B,q),W.add(me)}else dh(ge,j,B,q),W.add(ge)}),E=_.pop(),F!==null&&F.renderEnd(),W},this.compileAsync=function(A,B,j=null){const W=this.compile(A,B,j);return new Promise(q=>{function ge(){if(W.forEach(function(ye){const Se=X.get(ye).currentProgram;(Se===void 0||Se.isReady())&&W.delete(ye)}),W.size===0){q(A);return}setTimeout(ge,10)}ht.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Uo=null;function Lf(A){Uo&&Uo(A)}function uh(){Qi.stop()}function fh(){Qi.start()}const Qi=new lf;Qi.setAnimationLoop(Lf),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(A){Uo=A,Ee.setAnimationLoop(A),A===null?Qi.stop():Qi.start()},Ee.addEventListener("sessionstart",uh),Ee.addEventListener("sessionend",fh),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(A,B);const j=Ee.enabled===!0&&Ee.isPresenting===!0,W=w!==null&&(K===null||j)&&w.begin(P,K);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(B),B=Ee.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,B,K),E=he.get(A,_.length),E.init(B),E.state.textureUnits=$.getTextureUnits(),_.push(E),Qe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$e.setFromProjectionMatrix(Qe,ui,B.reversedDepth),_t=this.localClippingEnabled,st=Pe.init(this.clippingPlanes,_t),y=fe.get(A,R.length),y.init(),R.push(y),Ee.enabled===!0&&Ee.isPresenting===!0){const ye=P.xr.getDepthSensingMesh();ye!==null&&Oo(ye,B,-1/0,P.sortObjects)}Oo(A,B,0,P.sortObjects),y.finish(),F!==null&&F.updateLights(E.state.lightsArray),P.sortObjects===!0&&y.sort(Me,Ue),Ct=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,Ct&&ze.addToRenderList(y,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Pe.beginShadows();const q=E.state.shadowsArray;if(Fe.render(q,A,B),st===!0&&Pe.endShadows(),(W&&w.hasRenderPass())===!1){const ye=y.opaque,me=y.transmissive;if(E.setupLights(),B.isArrayCamera){const Se=B.cameras;if(me.length>0)for(let Te=0,He=Se.length;Te<He;Te++){const Ze=Se[Te];mh(ye,me,A,Ze)}Ct&&ze.render(A);for(let Te=0,He=Se.length;Te<He;Te++){const Ze=Se[Te];ph(y,A,Ze,Ze.viewport)}}else me.length>0&&mh(ye,me,A,B),Ct&&ze.render(A),ph(y,A,B)}K!==null&&N===0&&($.updateMultisampleRenderTarget(K),$.updateRenderTargetMipmap(K)),W&&w.end(P),A.isScene===!0&&A.onAfterRender(P,A,B),be.resetDefaultState(),U=-1,V=null,_.pop(),_.length>0?(E=_[_.length-1],$.setTextureUnits(E.state.textureUnits),st===!0&&Pe.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?y=R[R.length-1]:y=null,F!==null&&F.renderEnd()};function Oo(A,B,j,W){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLightProbeGrid)E.pushLightProbeGrid(A);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum($e)){W&&$t.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Qe);const ye=ee.update(A),me=A.material;me.visible&&y.push(A,ye,me,j,$t.z,null,B)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum($e))){const ye=ee.update(A),me=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),$t.copy(A.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),$t.copy(ye.boundingSphere.center)),$t.applyMatrix4(A.matrixWorld).applyMatrix4(Qe)),Array.isArray(me)){const Se=ye.groups;for(let Te=0,He=Se.length;Te<He;Te++){const Ze=Se[Te],we=me[Ze.materialIndex];we&&we.visible&&y.push(A,ye,we,j,$t.z,Ze,B)}}else me.visible&&y.push(A,ye,me,j,$t.z,null,B)}}const ge=A.children;for(let ye=0,me=ge.length;ye<me;ye++)Oo(ge[ye],B,j,W)}function ph(A,B,j,W){const{opaque:q,transmissive:ge,transparent:ye}=A;E.setupLightsView(j),st===!0&&Pe.setGlobalState(P.clippingPlanes,j),W&&M.viewport(Y.copy(W)),q.length>0&&la(q,B,j),ge.length>0&&la(ge,B,j),ye.length>0&&la(ye,B,j),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function mh(A,B,j,W){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){const we=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new yn(1,1,{generateMipmaps:!0,type:we?rn:Fn,minFilter:Jn,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const ge=E.state.transmissionRenderTarget[W.id],ye=W.viewport||Y;ge.setSize(ye.z*P.transmissionResolutionScale,ye.w*P.transmissionResolutionScale);const me=P.getRenderTarget(),Se=P.getActiveCubeFace(),Te=P.getActiveMipmapLevel();P.setRenderTarget(ge),P.getClearColor(Je),qe=P.getClearAlpha(),qe<1&&P.setClearColor(16777215,.5),P.clear(),Ct&&ze.render(j);const He=P.toneMapping;P.toneMapping=pi;const Ze=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),st===!0&&Pe.setGlobalState(P.clippingPlanes,W),la(A,j,W),$.updateMultisampleRenderTarget(ge),$.updateRenderTargetMipmap(ge),ht.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let lt=0,Ot=B.length;lt<Ot;lt++){const St=B[lt],{object:gt,geometry:on,material:xe,group:dn}=St;if(xe.side===Kn&&gt.layers.test(W.layers)){const nt=xe.side;xe.side=Pn,xe.needsUpdate=!0,gh(gt,j,W,on,xe,dn),xe.side=nt,xe.needsUpdate=!0,we=!0}}we===!0&&($.updateMultisampleRenderTarget(ge),$.updateRenderTargetMipmap(ge))}P.setRenderTarget(me,Se,Te),P.setClearColor(Je,qe),Ze!==void 0&&(W.viewport=Ze),P.toneMapping=He}function la(A,B,j){const W=B.isScene===!0?B.overrideMaterial:null;for(let q=0,ge=A.length;q<ge;q++){const ye=A[q],{object:me,geometry:Se,group:Te}=ye;let He=ye.material;He.allowOverride===!0&&W!==null&&(He=W),me.layers.test(j.layers)&&gh(me,B,j,Se,He,Te)}}function gh(A,B,j,W,q,ge){F!==null&&q.isNodeMaterial&&F.setObject(A,q),A.onBeforeRender(P,B,j,W,q,ge),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(P,B,j,W,A,ge),q.transparent===!0&&q.side===Kn&&q.forceSinglePass===!1?(q.side=Pn,q.needsUpdate=!0,P.renderBufferDirect(j,B,W,q,A,ge),q.side=Di,q.needsUpdate=!0,P.renderBufferDirect(j,B,W,q,A,ge),q.side=Kn):P.renderBufferDirect(j,B,W,q,A,ge),A.onAfterRender(P,B,j,W,q,ge)}function ca(A,B,j){B.isScene!==!0&&(B=Mn);const W=X.get(A),q=E.state.lights,ge=E.state.shadowsArray,ye=q.state.version,me=ce.getParameters(A,q.state,ge,B,j,E.state.lightProbeGridArray),Se=ce.getProgramCacheKey(me);let Te=W.programs;W.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;const He=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;W.envMap=ae.get(A.envMap||W.environment,He),W.envMapRotation=W.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Te===void 0&&(A.addEventListener("dispose",ti),Te=new Map,W.programs=Te);let Ze=Te.get(Se);if(Ze!==void 0){if(W.currentProgram===Ze&&W.lightsStateVersion===ye)return _h(A,me),Ze}else me.uniforms=ce.getUniforms(A),F!==null&&A.isNodeMaterial&&F.build(A,j,me),A.onBeforeCompile(me,P),Ze=ce.acquireProgram(me,Se),Te.set(Se,Ze),W.uniforms=me.uniforms;const we=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(we.clippingPlanes=Pe.uniform),_h(A,me),W.needsLights=Nf(A),W.lightsStateVersion=ye,W.needsLights&&(we.ambientLightColor.value=q.state.ambient,we.lightProbe.value=q.state.probe,we.sunLights.value=q.state.sun,we.sunLightShadows.value=q.state.sunShadow,we.directionalLights.value=q.state.directional,we.directionalLightShadows.value=q.state.directionalShadow,we.spotLights.value=q.state.spot,we.spotLightShadows.value=q.state.spotShadow,we.rectAreaLights.value=q.state.rectArea,we.ltc_1.value=q.state.rectAreaLTC1,we.ltc_2.value=q.state.rectAreaLTC2,we.pointLights.value=q.state.point,we.pointLightShadows.value=q.state.pointShadow,we.hemisphereLights.value=q.state.hemi,we.sunShadowMatrix.value=q.state.sunShadowMatrix,we.sunShadowCascade.value=q.state.sunShadowCascade,we.directionalShadowMatrix.value=q.state.directionalShadowMatrix,we.spotLightMatrix.value=q.state.spotLightMatrix,we.spotLightMap.value=q.state.spotLightMap,we.pointShadowMatrix.value=q.state.pointShadowMatrix),W.lightProbeGrid=E.state.lightProbeGridArray.length>0,W.currentProgram=Ze,W.uniformsList=null,Ze}function bh(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=io.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function _h(A,B){const j=X.get(A);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function Df(A,B){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;b.setFromMatrixPosition(B.matrixWorld);for(let j=0,W=A.length;j<W;j++){const q=A[j];if(q.texture!==null&&q.boundingBox.containsPoint(b))return q}return null}function If(A,B,j,W,q){B.isScene!==!0&&(B=Mn),$.resetTextureUnits();const ge=B.fog,ye=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,me=K===null?P.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ke.workingColorSpace,Se=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Te=ae.get(W.envMap||ye,Se),He=W.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ze=!!j.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),we=!!j.morphAttributes.position,lt=!!j.morphAttributes.normal,Ot=!!j.morphAttributes.color;let St=pi;W.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(St=P.toneMapping);const gt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,on=gt!==void 0?gt.length:0,xe=X.get(W),dn=E.state.lights;if(st===!0&&(_t===!0||A!==V)){const vt=A===V&&W.id===U;Pe.setState(W,A,vt)}let nt=!1;W.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==dn.state.version||xe.outputColorSpace!==me||q.isBatchedMesh&&xe.batching===!1||!q.isBatchedMesh&&xe.batching===!0||q.isBatchedMesh&&xe.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&xe.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&xe.instancing===!1||!q.isInstancedMesh&&xe.instancing===!0||q.isSkinnedMesh&&xe.skinning===!1||!q.isSkinnedMesh&&xe.skinning===!0||q.isInstancedMesh&&xe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&xe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&xe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&xe.instancingMorph===!1&&q.morphTexture!==null||xe.envMap!==Te||W.fog===!0&&xe.fog!==ge||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Pe.numPlanes||xe.numIntersection!==Pe.numIntersection)||xe.vertexAlphas!==He||xe.vertexTangents!==Ze||xe.morphTargets!==we||xe.morphNormals!==lt||xe.morphColors!==Ot||xe.toneMapping!==St||xe.morphTargetsCount!==on||!!xe.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,xe.__version=W.version);let kn=xe.currentProgram;nt===!0&&(kn=ca(W,B,q),F&&W.isNodeMaterial&&F.onUpdateProgram(W,kn,xe));let ni=!1,Ui=!1,xs=!1;const ft=kn.getUniforms(),Dt=xe.uniforms;if(M.useProgram(kn.program)&&(ni=!0,Ui=!0,xs=!0),W.id!==U&&(U=W.id,Ui=!0),xe.needsLights){const vt=Df(E.state.lightProbeGridArray,q);xe.lightProbeGrid!==vt&&(xe.lightProbeGrid=vt,Ui=!0)}if(ni||V!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ft.setValue(G,"projectionMatrix",A.projectionMatrix),ft.setValue(G,"viewMatrix",A.matrixWorldInverse);const Bi=ft.map.cameraPosition;Bi!==void 0&&Bi.setValue(G,Et.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&ft.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ft.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),V!==A&&(V=A,Ui=!0,xs=!0)}if(xe.needsLights&&(dn.state.sunShadowMap.length>0&&ft.setValue(G,"sunShadowMap",dn.state.sunShadowMap,$),dn.state.directionalShadowMap.length>0&&ft.setValue(G,"directionalShadowMap",dn.state.directionalShadowMap,$),dn.state.spotShadowMap.length>0&&ft.setValue(G,"spotShadowMap",dn.state.spotShadowMap,$),dn.state.pointShadowMap.length>0&&ft.setValue(G,"pointShadowMap",dn.state.pointShadowMap,$)),q.isSkinnedMesh){ft.setOptional(G,q,"bindMatrix"),ft.setOptional(G,q,"bindMatrixInverse");const vt=q.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),ft.setValue(G,"boneTexture",vt.boneTexture,$))}q.isBatchedMesh&&(ft.setOptional(G,q,"batchingTexture"),ft.setValue(G,"batchingTexture",q._matricesTexture,$),ft.setOptional(G,q,"batchingIdTexture"),ft.setValue(G,"batchingIdTexture",q._indirectTexture,$),ft.setOptional(G,q,"batchingColorTexture"),q._colorsTexture!==null&&ft.setValue(G,"batchingColorTexture",q._colorsTexture,$));const Oi=j.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&z.update(q,j,kn),(Ui||xe.receiveShadow!==q.receiveShadow)&&(xe.receiveShadow=q.receiveShadow,ft.setValue(G,"receiveShadow",q.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(Dt.envMapIntensity.value=B.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=av()),Ui){if(ft.setValue(G,"toneMappingExposure",P.toneMappingExposure),xe.needsLights&&Ff(Dt,xs),ge&&W.fog===!0&&Ce.refreshFogUniforms(Dt,ge),Ce.refreshMaterialUniforms(Dt,W,te,J,E.state.transmissionRenderTarget[A.id]),xe.needsLights&&xe.lightProbeGrid){const vt=xe.lightProbeGrid;Dt.probesSH.value=vt.texture,Dt.probesMin.value.copy(vt.boundingBox.min),Dt.probesMax.value.copy(vt.boundingBox.max),Dt.probesResolution.value.copy(vt.resolution)}io.upload(G,bh(xe),Dt,$)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(io.upload(G,bh(xe),Dt,$),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ft.setValue(G,"center",q.center),ft.setValue(G,"modelViewMatrix",q.modelViewMatrix),ft.setValue(G,"normalMatrix",q.normalMatrix),ft.setValue(G,"modelMatrix",q.matrixWorld),W.uniformsGroups!==void 0){const vt=W.uniformsGroups;for(let Bi=0,vs=vt.length;Bi<vs;Bi++){const vh=vt[Bi];ie.update(vh,kn),ie.bind(vh,kn)}}return kn}function Ff(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.sunLights.needsUpdate=B,A.sunLightShadows.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function Nf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(A,B,j){const W=X.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),X.get(A.texture).__webglTexture=B,X.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:j,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){const j=X.get(A);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,j=0){K=A,S=B,N=j;let W=null,q=!1,ge=!1;if(A){const me=X.get(A);if(me.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(G.FRAMEBUFFER,me.__webglFramebuffer),Y.copy(A.viewport),se.copy(A.scissor),re=A.scissorTest,M.viewport(Y),M.scissor(se),M.setScissorTest(re),U=-1;return}else if(me.__webglFramebuffer===void 0)$.setupRenderTarget(A);else if(me.__hasExternalTextures)$.rebindTextures(A,X.get(A.texture).__webglTexture,X.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const He=A.depthTexture;if(me.__boundDepthTexture!==He){if(He!==null&&X.has(He)&&(A.width!==He.image.width||A.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(A)}}const Se=A.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(ge=!0);const Te=X.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Te[B])?W=Te[B][j]:W=Te[B],q=!0):A.samples>0&&$.useMultisampledRTT(A)===!1?W=X.get(A).__webglMultisampledFramebuffer:Array.isArray(Te)?W=Te[j]:W=Te,Y.copy(A.viewport),se.copy(A.scissor),re=A.scissorTest}else Y.copy(ve).multiplyScalar(te).floor(),se.copy(Xe).multiplyScalar(te).floor(),re=Wt;if(j!==0&&(W=k),M.bindFramebuffer(G.FRAMEBUFFER,W)&&M.drawBuffers(A,W),M.viewport(Y),M.scissor(se),M.setScissorTest(re),q){const me=X.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+B,me.__webglTexture,j)}else if(ge){const me=B;for(let Se=0;Se<A.textures.length;Se++){const Te=X.get(A.textures[Se]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Se,Te.__webglTexture,j,me)}}else if(A!==null&&j!==0){const me=X.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,me.__webglTexture,j)}U=-1};function xh(A){const B=X.get(A);return(B.__readFormat!==A.format||B.__readType!==A.type)&&(B.__readFormat=A.format,B.__readType=A.type,B.__formatReadable=D.textureFormatReadable(A.format),B.__typeReadable=D.textureTypeReadable(A.type)),B}this.readRenderTargetPixels=function(A,B,j,W,q,ge,ye,me=0){if(!(A&&A.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Se=Se[ye]),Se){M.bindFramebuffer(G.FRAMEBUFFER,Se);try{const Te=A.textures[me],He=Te.format,Ze=Te.type;A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+me);const we=xh(Te);if(we.__formatReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-W&&j>=0&&j<=A.height-q&&G.readPixels(B,j,W,q,ue.convert(He),ue.convert(Ze),ge)}finally{const Te=K!==null?X.get(K).__webglFramebuffer:null;M.bindFramebuffer(G.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(A,B,j,W,q,ge,ye,me=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Se=Se[ye]),Se)if(B>=0&&B<=A.width-W&&j>=0&&j<=A.height-q){M.bindFramebuffer(G.FRAMEBUFFER,Se);const Te=A.textures[me],He=Te.format,Ze=Te.type;A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+me);const we=xh(Te);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,lt),G.bufferData(G.PIXEL_PACK_BUFFER,ge.byteLength,G.STREAM_READ),G.readPixels(B,j,W,q,ue.convert(He),ue.convert(Ze),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);const Ot=K!==null?X.get(K).__webglFramebuffer:null;M.bindFramebuffer(G.FRAMEBUFFER,Ot);const St=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Ep(G,St,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,lt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,ge),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(lt),G.deleteSync(St),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,j=0){const W=Math.pow(2,-j),q=Math.floor(A.image.width*W),ge=Math.floor(A.image.height*W),ye=B!==null?B.x:0,me=B!==null?B.y:0;$.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,j,0,0,ye,me,q,ge),M.unbindTexture()},this.copyTextureToTexture=function(A,B,j=null,W=null,q=0,ge=0){let ye,me,Se,Te,He,Ze,we,lt,Ot;const St=A.isCompressedTexture?A.mipmaps[ge]:A.image;if(j!==null)ye=j.max.x-j.min.x,me=j.max.y-j.min.y,Se=j.isBox3?j.max.z-j.min.z:1,Te=j.min.x,He=j.min.y,Ze=j.isBox3?j.min.z:0;else{const Dt=Math.pow(2,-q);ye=Math.floor(St.width*Dt),me=Math.floor(St.height*Dt),A.isDataArrayTexture?Se=St.depth:A.isData3DTexture?Se=Math.floor(St.depth*Dt):Se=1,Te=0,He=0,Ze=0}W!==null?(we=W.x,lt=W.y,Ot=W.z):(we=0,lt=0,Ot=0);const gt=ue.convert(B.format),on=ue.convert(B.type);let xe;B.isData3DTexture?($.setTexture3D(B,0),xe=G.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?($.setTexture2DArray(B,0),xe=G.TEXTURE_2D_ARRAY):($.setTexture2D(B,0),xe=G.TEXTURE_2D),M.activeTexture(G.TEXTURE0),M.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,B.flipY),M.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),M.pixelStorei(G.UNPACK_ALIGNMENT,B.unpackAlignment);const dn=M.getParameter(G.UNPACK_ROW_LENGTH),nt=M.getParameter(G.UNPACK_IMAGE_HEIGHT),kn=M.getParameter(G.UNPACK_SKIP_PIXELS),ni=M.getParameter(G.UNPACK_SKIP_ROWS),Ui=M.getParameter(G.UNPACK_SKIP_IMAGES);M.pixelStorei(G.UNPACK_ROW_LENGTH,St.width),M.pixelStorei(G.UNPACK_IMAGE_HEIGHT,St.height),M.pixelStorei(G.UNPACK_SKIP_PIXELS,Te),M.pixelStorei(G.UNPACK_SKIP_ROWS,He),M.pixelStorei(G.UNPACK_SKIP_IMAGES,Ze);const xs=A.isDataArrayTexture||A.isData3DTexture,ft=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){const Dt=X.get(A),Oi=X.get(B),vt=X.get(Dt.__renderTarget),Bi=X.get(Oi.__renderTarget);M.bindFramebuffer(G.READ_FRAMEBUFFER,vt.__webglFramebuffer),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let vs=0;vs<Se;vs++)xs&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,X.get(A).__webglTexture,q,Ze+vs),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,X.get(B).__webglTexture,ge,Ot+vs)),G.blitFramebuffer(Te,He,ye,me,we,lt,ye,me,G.DEPTH_BUFFER_BIT,G.NEAREST);M.bindFramebuffer(G.READ_FRAMEBUFFER,null),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||X.has(A)){const Dt=X.get(A),Oi=X.get(B);M.bindFramebuffer(G.READ_FRAMEBUFFER,I),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,O);for(let vt=0;vt<Se;vt++)xs?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Dt.__webglTexture,q,Ze+vt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Dt.__webglTexture,q),ft?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Oi.__webglTexture,ge,Ot+vt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Oi.__webglTexture,ge),q!==0?G.blitFramebuffer(Te,He,ye,me,we,lt,ye,me,G.COLOR_BUFFER_BIT,G.NEAREST):ft?G.copyTexSubImage3D(xe,ge,we,lt,Ot+vt,Te,He,ye,me):G.copyTexSubImage2D(xe,ge,we,lt,Te,He,ye,me);M.bindFramebuffer(G.READ_FRAMEBUFFER,null),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else ft?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(xe,ge,we,lt,Ot,ye,me,Se,gt,on,St.data):B.isCompressedArrayTexture?G.compressedTexSubImage3D(xe,ge,we,lt,Ot,ye,me,Se,gt,St.data):G.texSubImage3D(xe,ge,we,lt,Ot,ye,me,Se,gt,on,St):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,ge,we,lt,ye,me,gt,on,St.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,ge,we,lt,St.width,St.height,gt,St.data):G.texSubImage2D(G.TEXTURE_2D,ge,we,lt,ye,me,gt,on,St);M.pixelStorei(G.UNPACK_ROW_LENGTH,dn),M.pixelStorei(G.UNPACK_IMAGE_HEIGHT,nt),M.pixelStorei(G.UNPACK_SKIP_PIXELS,kn),M.pixelStorei(G.UNPACK_SKIP_ROWS,ni),M.pixelStorei(G.UNPACK_SKIP_IMAGES,Ui),ge===0&&B.generateMipmaps&&G.generateMipmap(xe),M.unbindTexture()},this.initRenderTarget=function(A){X.get(A).__webglFramebuffer===void 0&&$.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?$.setTextureCube(A,0):A.isData3DTexture?$.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?$.setTexture2DArray(A,0):$.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){S=0,N=0,K=null,M.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}function Bd(s,e){if(e===up)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===pc||e===Fu){let t=s.getIndex();if(t===null){const r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===pc)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function lv(s){const e=new Map,t=new Map,n=s.clone();return gf(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function gf(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)gf(s.children[n],e.children[n],t)}class ra extends _s{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new fv(t)}),this.register(function(t){return new pv(t)}),this.register(function(t){return new Sv(t)}),this.register(function(t){return new wv(t)}),this.register(function(t){return new Ev(t)}),this.register(function(t){return new gv(t)}),this.register(function(t){return new bv(t)}),this.register(function(t){return new _v(t)}),this.register(function(t){return new xv(t)}),this.register(function(t){return new uv(t)}),this.register(function(t){return new vv(t)}),this.register(function(t){return new mv(t)}),this.register(function(t){return new Mv(t)}),this.register(function(t){return new yv(t)}),this.register(function(t){return new hv(t)}),this.register(function(t){return new zd(t,Ye.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new zd(t,Ye.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Tv(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Gr.extractUrlBase(e);a=Gr.resolveURL(c,this.path)}else a=Gr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new $c(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===bf){try{a[Ye.KHR_BINARY_GLTF]=new Av(e)}catch(d){i&&i(d);return}r=JSON.parse(a[Ye.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new zv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case Ye.KHR_MATERIALS_UNLIT:a[d]=new dv;break;case Ye.KHR_DRACO_MESH_COMPRESSION:a[d]=new Rv(r,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:a[d]=new Cv;break;case Ye.KHR_MESH_QUANTIZATION:a[d]=new Pv;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function cv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function kt(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class hv{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new De(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Ln);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new sf(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new nf(h),c.distance=d;break;case"spot":c=new Qc(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),hi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class dv{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return Vn}extendParams(e,t,n){const i=[];e.color=new De(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ln),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Gt))}return Promise.all(i)}}class uv{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=kt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class fv{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new _e(r,r)}return Promise.all(i)}}class pv{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=kt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class mv{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class gv{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Ln)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Gt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class bv{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class _v{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(r[0],r[1],r[2],Ln),Promise.all(i)}}class xv{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=kt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class vv{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(r[0],r[1],r[2],Ln),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Gt)),Promise.all(i)}}class yv{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class Mv{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Qn:null}extendMaterialParams(e,t){const n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class Sv{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class wv{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Ev{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class zd{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}}class Tv{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Bn.TRIANGLES&&c.mode!==Bn.TRIANGLE_STRIP&&c.mode!==Bn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(const m of d){const x=new Re,g=new C,p=new et,v=new C(1,1,1),T=new go(m.geometry,m.material,u);for(let y=0;y<u;y++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&v.fromBufferAttribute(l.SCALE,y),T.setMatrixAt(y,x.compose(g,p,v));let b=null;for(const y in l)if(y==="_COLOR_0"){const E=l[y];T.instanceColor=new mo(E.array,E.itemSize,E.normalized)}else if(y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"){if(b===null){const R=T.geometry;b=new tn,b.name=R.name;for(const _ in R.attributes)b.setAttribute(_,R.attributes[_]);for(const _ in R.morphAttributes)b.morphAttributes[_]=R.morphAttributes[_];R.index!==null&&b.setIndex(R.index),b.morphTargetsRelative=R.morphTargetsRelative;for(const _ of R.groups)b.addGroup(_.start,_.count,_.materialIndex);R.boundingBox!==null&&(b.boundingBox=R.boundingBox.clone()),R.boundingSphere!==null&&(b.boundingSphere=R.boundingSphere.clone()),b.drawRange.start=R.drawRange.start,b.drawRange.count=R.drawRange.count,b.userData=Object.assign({},R.userData),T.geometry=b}const E=l[y];b.setAttribute(y,new mo(E.array,E.itemSize,E.normalized))}wt.prototype.copy.call(T,m),this.parser.assignFinalMaterial(T),f.push(T)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const bf="glTF",Pr=12,Gd={JSON:1313821514,BIN:5130562};class Av{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Pr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==bf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Pr,r=new DataView(e,Pr);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Gd.JSON){const c=new Uint8Array(e,Pr+a,o);this.content=n.decode(c)}else if(l===Gd.BIN){const c=Pr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Rv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const d=yc[h]||h.toLowerCase();o[d]=a[h]}for(const h in e.attributes){const d=yc[h]||h.toLowerCase();if(a[h]!==void 0){const u=n.accessors[e.attributes[h]],f=sr[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const x=f.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}d(f)},o,c,Ln,u)})})}}class Cv{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class Pv{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class _f extends ur{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,m=e*c,x=m-c,g=-2*f+3*u,p=f-u,v=1-g,T=p-u+d;for(let b=0;b!==o;b++){const y=a[x+b+o],E=a[x+b+l]*h,R=a[m+b+o],_=a[m+b]*h;r[b]=v*y+T*E+g*R+p*_}return r}}const Lv=new et;class Dv extends _f{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Lv.fromArray(r).normalize().toArray(r),r}}const Bn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},sr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hd={9728:jt,9729:Mt,9984:Au,9985:$a,9986:Nr,9987:Jn},Vd={33071:Hn,33648:ao,10497:ms},vl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},yc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Iv={CUBICSPLINE:void 0,LINEAR:jr,STEP:Xr},yl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Fv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Zi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Di})),s.DefaultMaterial}function rs(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function hi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Nv(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(u)}if(r){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],u=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function kv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Uv(s){let e;const t=s.extensions&&s.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ml(t.attributes):e=s.indices+":"+Ml(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ml(s.targets[n]);return e}function Ml(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Mc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ov(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Bv=new Re;class zv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new cv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new ef(this.options.manager):this.textureLoader=new jm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new $c(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return rs(r,o,i),hi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Gr.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=vl[i.type],o=sr[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Kt(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=vl[i.type],c=sr[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let x,g;if(f&&f!==d){const p=Math.floor(u/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let T=t.cache.get(v);T||(x=new c(o,p*f,i.count*f/h),T=new Hu(x,f/h),t.cache.add(v,T)),g=new Jr(T,l,u%f/h,m)}else o===null?x=new c(i.count*l):x=new c(o,u,i.count*l),g=new Kt(x,l,m);if(i.sparse!==void 0){const p=vl.SCALAR,v=sr[i.sparse.indices.componentType],T=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,y=new v(a[1],T,i.sparse.count*p),E=new c(a[2],b,i.sparse.count*l);o!==null&&(g=new Kt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,_=y.length;R<_;R++){const w=y[R];if(g.setX(w,E[R*l]),l>=2&&g.setY(w,E[R*l+1]),l>=3&&g.setZ(w,E[R*l+2]),l>=4&&g.setW(w,E[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return h.magFilter=Hd[u.magFilter]||Mt,h.minFilter=Hd[u.minFilter]||Jn,h.wrapS=Vd[u.wrapS]||ms,h.wrapT=Vd[u.wrapT]||ms,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==jt&&h.minFilter!==Mt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;const u=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(u,f){let m=u;t.isImageBitmapLoader===!0&&(m=function(x){const g=new Ht(x);g.needsUpdate=!0,u(g)}),t.load(Gr.resolveURL(d,r.path),m,void 0,f)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),hi(d,a),d.userData.mimeType=a.mimeType||Ov(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Xu,Zn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new qu,Zn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Zi}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Ye.KHR_MATERIALS_UNLIT]){const d=i[Ye.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{const d=r.pbrMetallicRoughness||{};if(o.color=new De(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Ln),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,Gt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Kn);const h=r.alphaMode||yl.OPAQUE;if(h===yl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===yl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Vn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new _e(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Vn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Vn){const d=r.emissiveFactor;o.emissive=new De().setRGB(d[0],d[1],d[2],Ln)}return r.emissiveTexture!==void 0&&a!==Vn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Gt)),Promise.all(c).then(function(){const d=new a(o);return r.name&&(d.name=r.name),hi(d,r),t.associations.set(d,{materials:e}),r.extensions&&rs(i,d,r),d})}createUniqueName(e){const t=Ge.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Wd(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=Uv(c),d=i[h];if(d)a.push(d.promise);else{let u;c.extensions&&c.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=Wd(new tn,c,t),c.mode===Bn.TRIANGLE_STRIP?u=u.then(f=>Bd(f,Fu)):c.mode===Bn.TRIANGLE_FAN&&(u=u.then(f=>Bd(f,pc))),i[h]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?Fv(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,m=h.length;f<m;f++){const x=h[f],g=a[f];let p;const v=c[f];if(g.mode===Bn.TRIANGLES||g.mode===Bn.TRIANGLE_STRIP||g.mode===Bn.TRIANGLE_FAN||g.mode===void 0){const T=r.isSkinnedMesh===!0,b=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");T&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=T&&b?new mm(x,v):new Lt(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===Bn.LINES)p=new xm(x,v);else if(g.mode===Bn.LINE_STRIP)p=new jc(x,v);else if(g.mode===Bn.LINE_LOOP)p=new vm(x,v);else if(g.mode===Bn.POINTS)p=new ym(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&kv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),hi(p,r),g.extensions&&rs(i,p,g),t.assignFinalMaterial(p),d.push(p)}for(let f=0,m=d.length;f<m;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&rs(i,d[0],r),d[0];const u=new Be;r.extensions&&rs(i,u,r),t.associations.set(u,{meshes:e});for(let f=0,m=d.length;f<m;f++)u.add(d[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new vn(Uu.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new sa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),hi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const d=a[c];if(d){o.push(d);const u=new Re;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new qc(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){const f=i.channels[d],m=i.samplers[f.sampler],x=f.target,g=x.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,v=i.parameters!==void 0?i.parameters[m.output]:m.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(m),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const u=d[0],f=d[1],m=d[2],x=d[3],g=d[4],p=[];for(let T=0,b=u.length;T<b;T++){const y=u[T],E=f[T],R=m[T],_=x[T],w=g[T];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const P=n._createAnimationTracks(y,E,R,_,w);if(P)for(let L=0;L<P.length;L++)p.push(P[L])}const v=new vo(r,void 0,p);return hi(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,Bv)});for(let f=0,m=d.length;f<m;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){const f=h.userData.pivot,m=d[0];h.pivot=new C().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Wu:c.length>1?h=new Be:c.length===1?h=c[0]:h=new wt,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=a),hi(h,r),r.extensions&&rs(n,h,r),r.matrix!==void 0){const d=new Re;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Be;n.name&&(r.name=i.createUniqueName(n.name)),hi(r,n),n.extensions&&rs(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++){const u=l[h];u.parent!==null?r.add(lv(u)):r.add(u)}const c=h=>{const d=new Map;for(const[u,f]of i.associations)(u instanceof Zn||u instanceof Ht)&&d.set(u,f);return h.traverse(u=>{const f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}qi[r.path]===qi.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(qi[r.path]){case qi.weights:h=Qr;break;case qi.rotation:h=ea;break;case qi.translation:case qi.scale:h=xo;break;default:n.itemSize===1?h=Qr:h=xo;break}const d=i.interpolation!==void 0?Iv[i.interpolation]:jr,u=this._getArrayFromAccessor(n);for(let f=0,m=l.length;f<m;f++){const x=new h(l[f]+"."+qi[r.path],t.array,u,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Mc(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ea?Dv:_f;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Gv(s,e,t){const n=e.attributes,i=new mt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),o.normalized){const h=Mc(sr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new C,l=new C;for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,m=u.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),u.normalized){const x=Mc(sr[u.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new gi;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Wd(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=yc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ke.workingColorSpace!==Ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),hi(s,e),Gv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Nv(s,e.targets,t):s})}function aa(s,e="/shibuya-scene-2-play/"){return!s.startsWith("/")||s.startsWith("//")||s.startsWith(e)?s:e.replace(/\/$/,"")+s}const Ks=["idle","walk","run","box_01"];class xf{root=new Be;mixer;actions;referenceSpeeds;inspection;current="idle";visual=new Be;visualBaseY=0;soleCandidates=[];contact={candidates:0,probes:0,lastProbeMs:0,totalProbeMs:0,maxProbeMs:0,uncorrectedMinY:null,lift:0};boxFinished=!1;benchmarkMotion=null;constructor(e,t){const n=Ks.map(p=>{const v=t.filter(T=>T.name.toLowerCase()===p);if(v.length!==1)throw new Error(`Expected exactly one ${p} clip; found ${v.length}`);return v[0]});e.updateMatrixWorld(!0),e.traverse(p=>{const v=p;v.isSkinnedMesh&&v.skeleton.update()});const i=new mt().setFromObject(e,!0),r=i.max.y-i.min.y;if(!Number.isFinite(r)||r<=0)throw new Error("Invalid person bounds");const a=new Set;let o=0,l=0,c=0;if(e.traverse(p=>{const v=p;if(!v.isMesh)return;o++,l+=(v.geometry.index?.count??v.geometry.attributes.position.count)/3,c+=Math.max(1,v.geometry.groups.length);const T=p;if(T.isSkinnedMesh){T.skeleton.bones.forEach(E=>a.add(E)),T.frustumCulled=!1;const b=[],y=new C;for(let E=0;E<T.geometry.attributes.position.count;E++)T.getVertexPosition(E,y).applyMatrix4(T.matrixWorld),y.y<=i.min.y+r*.02&&b.push(E);b.length&&this.soleCandidates.push({mesh:T,indices:b}),this.contact.candidates+=b.length}v.castShadow=!0,v.receiveShadow=!0}),!a.size)throw new Error("Person has no skin joints");const h=new Set;for(const p of a){let v=p.parent;for(;v&&!a.has(v);)v=v.parent;if(!v){h.add(p);for(let T=p.parent;T&&(T.isBone||h.add(T),T!==e);T=T.parent);}}const d=1.8/r,u=[...h].filter(p=>a.has(p)),f=p=>{const v=n[Ks.indexOf(p)];if(u.length!==1||!Number.isFinite(v.duration)||v.duration<=0)return null;const T=u[0],b=v.tracks.filter(w=>{const P=Ge.parseTrackName(w.name);return P.propertyName==="position"&&w.getValueSize()===3&&Ge.findNode(e,P.nodeName)===T});if(b.length!==1||b[0].values.length<6)return null;const y=b[0].values,E=y.length-3,R=new C(y[E]-y[0],y[E+1]-y[1],y[E+2]-y[2]);T.parent&&R.applyMatrix3(new ke().setFromMatrix4(T.parent.matrixWorld));const _=Math.hypot(R.x,R.z)*d/v.duration;return Number.isFinite(_)&&_>1e-4?_:null};this.referenceSpeeds={walk:f("walk"),run:f("run")};const m=this.visual;m.scale.setScalar(d),m.position.set(-(i.min.x+i.max.x)*d/2,-i.min.y*d,-(i.min.z+i.max.z)*d/2),this.visualBaseY=m.position.y,m.add(e),this.root.add(m),this.root.name="tripo-person-poc";const x=[],g=n.map(p=>{const v=p.clone();for(const T of v.tracks){const b=Ge.parseTrackName(T.name),y=Ge.findNode(e,b.nodeName);if(b.propertyName==="position"&&T.getValueSize()===3&&y&&h.has(y)){for(let E=0;E<T.values.length;E+=3)T.values[E]=y.position.x,T.values[E+2]=y.position.z;x.push(`${p.name}:${T.name}`)}}return v});this.mixer=new rf(e),this.actions=Object.fromEntries(g.map((p,v)=>[Ks[v],this.mixer.clipAction(p)]));for(const p of Ks)this.actions[p].setLoop(p==="box_01"?co:ho,p==="box_01"?1:1/0),this.actions[p].clampWhenFinished=p==="box_01";this.mixer.addEventListener("finished",p=>{p.action===this.actions.box_01&&(this.boxFinished=!0)}),this.actions.idle.play(),this.inspection={soleCandidateVertices:this.contact.candidates,referenceSpeeds:this.referenceSpeeds,meshes:o,joints:a.size,triangles:l,primitives:c,rawBounds:{min:i.min.toArray(),max:i.max.toArray()},scale:d,assumedHeightMetres:1.8,assumedForward:"+Z",clips:t.map(p=>({name:p.name,duration:p.duration,tracks:p.tracks.length})),horizontalTracksFrozen:x}}dispose(){this.mixer.stopAllAction(),this.mixer.uncacheRoot(this.mixer.getRoot()),this.root.removeFromParent(),Li(this.root)}transition(e){if(e===this.current)return;const t=this.actions[this.current];this.actions[e].reset().setEffectiveTimeScale(1).setEffectiveWeight(1).play(),t.crossFadeTo(this.actions[e],.2,!1),this.current=e,this.boxFinished=!1}resetContactMetrics(){this.contact.probes=0,this.contact.lastProbeMs=0,this.contact.totalProbeMs=0,this.contact.maxProbeMs=0}guardSoles(){const e=performance.now();this.visual.position.y=this.visualBaseY,this.root.updateMatrixWorld(!0);const t=new Re().copy(this.root.matrixWorld).invert(),n=new Re,i=new C;let r=1/0;for(const{mesh:o,indices:l}of this.soleCandidates){o.skeleton.update(),n.multiplyMatrices(t,o.matrixWorld);for(const c of l)o.getVertexPosition(c,i).applyMatrix4(n),r=Math.min(r,i.y)}this.contact.uncorrectedMinY=Number.isFinite(r)?r:null,this.contact.lift=Number.isFinite(r)?Math.max(0,-r):0,this.visual.position.y+=this.contact.lift;const a=performance.now()-e;this.contact.probes++,this.contact.lastProbeMs=a,this.contact.totalProbeMs+=a,this.contact.maxProbeMs=Math.max(this.contact.maxProbeMs,a)}setBenchmarkMotion(e,t=0){if(e!==null&&!Ks.includes(e))throw new Error("Unknown benchmark clip");this.benchmarkMotion=e===null?null:{clip:e,speed:t},this.actions.box_01.setLoop(e==="box_01"?ho:co,e==="box_01"?1/0:1),this.transition("idle")}update(e,t){if(this.benchmarkMotion){const{clip:r,speed:a}=this.benchmarkMotion;t={active:!0,moving:r==="walk"||r==="run",running:r==="run",boxPressed:r==="box_01",horizontalSpeed:a,direction:new C(Math.sin(this.root.rotation.y),0,Math.cos(this.root.rotation.y))}}let n=t.moving?t.running?"run":"walk":"idle";t.active&&!t.moving&&(this.current==="box_01"&&!this.boxFinished||t.boxPressed)&&(n="box_01"),this.transition(n);let i=1;if(n==="walk"||n==="run"){const r=this.referenceSpeeds[n];r!==null&&Number.isFinite(t.horizontalSpeed)&&t.horizontalSpeed>0&&(i=Math.min(4,Math.max(.1,t.horizontalSpeed/r)))}this.actions[n].setEffectiveTimeScale(i),t.moving&&(this.root.rotation.y=Math.atan2(t.direction.x,t.direction.z)),this.mixer.update(Number.isFinite(e)?Math.min(Math.max(e,0),.1):0),this.guardSoles()}}async function qd(s="/characters/tripo-person.glb"){const e=performance.now(),t=await new ra().loadAsync(s);try{return{person:new xf(t.scene,t.animations),loadMs:performance.now()-e}}catch(n){throw Li(t.scene),n}}function Li(s){const e=new Set,t=new Set,n=new Set,i=new Set;s.traverse(r=>{const a=r;a.isMesh&&(n.add(a.geometry),(Array.isArray(a.material)?a.material:[a.material]).forEach(o=>e.add(o)),a.isSkinnedMesh&&i.add(a.skeleton))});for(const r of e)for(const a of Object.values(r))a?.isTexture&&t.add(a);t.forEach(r=>r.dispose()),e.forEach(r=>r.dispose()),n.forEach(r=>r.dispose()),i.forEach(r=>r.dispose())}const Ga=1.75,zs=["idle","walk","run"],vf=205/24;function Hv(s,e=vf){if(!Number.isFinite(e)||e<0||e>s.duration)throw Error("Folded-arms sample outside clip");const t=s.tracks.map(n=>{const i=n.createInterpolant(),r=Array.from(i.evaluate(e)),a=n.clone();return a.times=new Float32Array([0,1]),a.values=new Float32Array([...r,...r]),a});return new vo("brian-folded-arms-hold",1,t)}class yf{root=new Be;mixer;actions;referenceSpeeds;inspection;current="idle";seatingSuspensions=0;floorBase=.0116*Ga/1.8;penetrationResidual=0;contactDt=0;footGroups=[];footIK={corrections:0,maxLift:0};blendWeights={idle:1,walk:0,run:0};blendDuration=0;blendElapsed=0;blendRemaining=0;suspendForSeating(){this.seatingSuspensions++;let e=!1;return()=>{e||(e=!0,this.seatingSuspensions--)}}visual=new Be;visualBaseY=0;soleCandidates=[];contact={candidates:0,probes:0,lastProbeMs:0,totalProbeMs:0,maxProbeMs:0,uncorrectedMinY:null,lift:0};constructor(e,t){const n=zs.map(p=>{const v=p==="idle"?"fold_arms":p,T=t.filter(b=>b.name.toLowerCase()===v);if(T.length!==1)throw new Error(`Expected exactly one ${p} clip; found ${T.length}`);return p==="idle"?Hv(T[0]):T[0]});e.updateMatrixWorld(!0),e.traverse(p=>{const v=p;v.isSkinnedMesh&&v.skeleton.update()});const i=new mt().setFromObject(e,!0),r=i.max.y-i.min.y;if(!Number.isFinite(r)||r<=0)throw new Error("Invalid person bounds");const a=new Set;let o=0,l=0,c=0;if(e.traverse(p=>{const v=p;if(!v.isMesh)return;o++,l+=(v.geometry.index?.count??v.geometry.attributes.position.count)/3,c+=Math.max(1,v.geometry.groups.length);const T=p;if(T.isSkinnedMesh){T.skeleton.bones.forEach(E=>a.add(E)),T.frustumCulled=!1;const b=[],y=new C;for(let E=0;E<T.geometry.attributes.position.count;E++)T.getVertexPosition(E,y).applyMatrix4(T.matrixWorld),y.y<=i.min.y+r*.02&&b.push(E);b.length&&this.soleCandidates.push({mesh:T,indices:b}),this.contact.candidates+=b.length}v.castShadow=!0,v.receiveShadow=!0}),!a.size)throw new Error("Person has no skin joints");const h=new Set;for(const p of a){let v=p.parent;for(;v&&!a.has(v);)v=v.parent;if(!v){h.add(p);for(let T=p.parent;T&&(T.isBone||h.add(T),T!==e);T=T.parent);}}const d=Ga/r,u=[...h].filter(p=>a.has(p)),f=p=>{const v=n[zs.indexOf(p)];if(u.length!==1||!Number.isFinite(v.duration)||v.duration<=0)return null;const T=u[0],b=v.tracks.filter(w=>{const P=Ge.parseTrackName(w.name);return P.propertyName==="position"&&w.getValueSize()===3&&Ge.findNode(e,P.nodeName)===T});if(b.length!==1||b[0].values.length<6)return null;const y=b[0].values,E=y.length-3,R=new C(y[E]-y[0],y[E+1]-y[1],y[E+2]-y[2]);T.parent&&R.applyMatrix3(new ke().setFromMatrix4(T.parent.matrixWorld));const _=Math.hypot(R.x,R.z)*d/v.duration;return Number.isFinite(_)&&_>1e-4?_:null};this.referenceSpeeds={walk:f("walk"),run:f("run")};const m=this.visual;m.scale.setScalar(d),m.position.set(-(i.min.x+i.max.x)*d/2,-i.min.y*d,-(i.min.z+i.max.z)*d/2),this.visualBaseY=m.position.y,m.add(e),this.root.add(m),this.root.name="brian-person-poc";const x=[],g=n.map(p=>{const v=p.clone();for(const T of v.tracks){const b=Ge.parseTrackName(T.name),y=Ge.findNode(e,b.nodeName);if(b.propertyName==="position"&&T.getValueSize()===3&&y&&h.has(y)){for(let E=0;E<T.values.length;E+=3)T.values[E]=y.position.x,T.values[E+2]=y.position.z;x.push(`${p.name}:${T.name}`)}}return v});this.mixer=new rf(e),this.actions=Object.fromEntries(g.map((p,v)=>[zs[v],this.mixer.clipAction(p)]));for(const p of zs)this.actions[p].setLoop(ho,1/0).setEffectiveWeight(p==="idle"?1:0);this.actions.idle.play();for(const{mesh:p,indices:v}of this.soleCandidates){const T=E=>p.skeleton.bones.find(R=>R.name.replace(/[^A-Za-z0-9]/g,"").replace(/^mixamorig/,"")===E),b=p.geometry.getAttribute("skinIndex"),y=p.geometry.getAttribute("skinWeight");for(const E of["Left","Right"]){const R=T(E+"UpLeg"),_=T(E+"Leg"),w=T(E+"Foot");if(!R||!_||!w)continue;const P=v.filter(L=>{let F=0,k=0;for(let I=0;I<4;I++){const O=p.skeleton.bones[b.getComponent(L,I)]?.name??"",S=y.getComponent(L,I);O.includes(E)?F+=S:k+=S}return F>k});P.length&&this.footGroups.push({mesh:p,indices:P,thigh:R,knee:_,foot:w})}}this.inspection={identity:"brian",assetBytes:Hr.bytes,assetSha256:Hr.sha256,embeddedImageBytes:9738884,textureMaps:3,textureDimensions:[4096,4096],runtimeVramBytes:null,runtimeVramStatus:"not-measured",coreBudgetStatus:"not-audited-for-this-runtime-session",performanceApproved:!1,attackSupported:!1,combatSupported:!1,idleSource:"fold_arms",idleSampleSeconds:vf,soleCandidateVertices:this.contact.candidates,referenceSpeeds:this.referenceSpeeds,meshes:o,joints:a.size,triangles:l,primitives:c,rawBounds:{min:i.min.toArray(),max:i.max.toArray()},scale:d,assumedHeightMetres:Ga,assumedForward:"+Z",clips:t.map(p=>({name:p.name,duration:p.duration,tracks:p.tracks.length})),horizontalTracksFrozen:x}}dispose(){this.mixer.stopAllAction(),this.mixer.uncacheRoot(this.mixer.getRoot()),this.root.removeFromParent(),Li(this.root)}transition(e){if(e===this.current)return;for(const i of zs)this.blendWeights[i]=this.actions[i].getEffectiveWeight(),this.actions[i].stopFading();let t=0;if(e!=="idle"&&this.blendWeights[e]<=1e-8){const r=this.actions[e].getClip().tracks.filter(o=>/(Hips|UpLeg|Leg|Foot|ToeBase)\.quaternion$/.test(o.name)).flatMap(o=>{const l=Ge.parseTrackName(o.name),c=Ge.findNode(this.mixer.getRoot(),l.nodeName);return c?[{node:c,interpolant:o.createInterpolant()}]:[]});let a=1/0;for(let o=0;r.length&&o<96;o++){const l=this.actions[e].getClip().duration*o/96;let c=0;for(const{node:h,interpolant:d}of r){const u=d.evaluate(l),f=h.quaternion;c+=1-Math.min(1,Math.abs(f.x*u[0]+f.y*u[1]+f.z*u[2]+f.w*u[3]))}c<a&&(a=c,t=l)}}this.blendWeights[e]<=1e-8&&(this.actions[e].reset().setEffectiveTimeScale(1).setEffectiveWeight(0).play(),this.actions[e].time=t);const n=e==="idle"?.35:this.current==="idle"?.3:.2;this.blendDuration=n,this.blendElapsed=0,this.blendRemaining=n,this.current=e}resetContactMetrics(){this.contact.probes=0,this.contact.lastProbeMs=0,this.contact.totalProbeMs=0,this.contact.maxProbeMs=0}correctFeet(){const e=n=>n.getWorldPosition(new C),t=(n,i,r)=>{this.root.updateMatrixWorld(!0);const a=e(i).sub(e(n)).normalize(),o=r.clone().sub(e(n)).normalize(),l=n.getWorldQuaternion(new et).premultiply(new et().setFromUnitVectors(a,o));n.quaternion.copy(n.parent.getWorldQuaternion(new et).invert().multiply(l)),this.root.updateMatrixWorld(!0)};for(let n=0;n<2;n++){let i=!1;for(const r of this.footGroups){this.root.updateMatrixWorld(!0),r.mesh.skeleton.update();const a=new Re().copy(this.root.matrixWorld).invert(),o=new Re().multiplyMatrices(a,r.mesh.matrixWorld),l=new C;let c=1/0;for(const P of r.indices)r.mesh.getVertexPosition(P,l).applyMatrix4(o),c=Math.min(c,l.y);if(c>=-1e-4||!Number.isFinite(c))continue;const h=Math.min(.15,-c+2e-4),{thigh:d,knee:u,foot:f}=r,m=e(d),x=e(u),g=e(f),p=f.getWorldQuaternion(new et),v=g.clone().add(new C(0,h,0)),T=m.distanceTo(x),b=x.distanceTo(g),y=v.clone().sub(m);if(T<1e-6||b<1e-6||y.lengthSq()<1e-12)continue;const E=Math.min(T+b-1e-5,Math.max(Math.abs(T-b)+1e-5,y.length()));y.normalize();const R=x.clone().sub(m);R.addScaledVector(y,-R.dot(y)),R.lengthSq()<1e-10&&(R.set(0,0,1),R.addScaledVector(y,-R.dot(y))),R.normalize();const _=(T*T-b*b+E*E)/(2*E),w=m.clone().addScaledVector(y,_).addScaledVector(R,Math.sqrt(Math.max(0,T*T-_*_)));t(d,u,w),t(u,f,v),f.quaternion.copy(f.parent.getWorldQuaternion(new et).invert().multiply(p)),i=!0,this.footIK.corrections++,this.footIK.maxLift=Math.max(this.footIK.maxLift,h)}if(!i)break}}guardSoles(){const e=performance.now(),t={idle:.0116,walk:.019,run:.046}[this.current]*Ga/1.8,n=1-Math.exp(-this.contactDt/.08);this.floorBase+=(t-this.floorBase)*n,this.visual.position.y=this.visualBaseY+this.floorBase,(this.blendRemaining>0||Math.abs(this.floorBase-t)>5e-4)&&this.correctFeet(),this.visual.position.y=this.visualBaseY,this.root.updateMatrixWorld(!0);const i=new Re().copy(this.root.matrixWorld).invert(),r=new Re,a=new C;let o=1/0;for(const{mesh:h,indices:d}of this.soleCandidates){h.skeleton.update(),r.multiplyMatrices(i,h.matrixWorld);for(const u of d)h.getVertexPosition(u,a).applyMatrix4(r),o=Math.min(o,a.y)}this.contact.uncorrectedMinY=Number.isFinite(o)?o:null;const l=Number.isFinite(o)?Math.max(0,-o-this.floorBase):0;this.penetrationResidual=Math.max(l,this.penetrationResidual*Math.exp(-this.contactDt/.08)),this.contact.lift=this.floorBase+this.penetrationResidual,this.visual.position.y+=this.contact.lift;const c=performance.now()-e;this.contact.probes++,this.contact.lastProbeMs=c,this.contact.totalProbeMs+=c,this.contact.maxProbeMs=Math.max(this.contact.maxProbeMs,c)}update(e,t){if(this.seatingSuspensions>0)return;e=Number.isFinite(e)?Math.min(Math.max(e,0),.1):0;const n=t.moving?t.running?"run":"walk":"idle";this.transition(n);let i=1;if(n==="walk"||n==="run"){const r=this.referenceSpeeds[n];r!==null&&Number.isFinite(t.horizontalSpeed)&&t.horizontalSpeed>0&&(i=Math.min(4,Math.max(.1,t.horizontalSpeed/r)))}if(this.actions[n].setEffectiveTimeScale(i),this.blendRemaining>0){this.blendElapsed=Math.min(this.blendDuration,this.blendElapsed+e),this.blendRemaining=Math.max(0,this.blendDuration-this.blendElapsed);const r=this.blendElapsed/this.blendDuration,a=r*r*(3-2*r);for(const o of zs)this.actions[o].setEffectiveWeight(this.blendWeights[o]+((o===n?1:0)-this.blendWeights[o])*a),o!==n&&this.actions[o].setEffectiveTimeScale(n==="idle"?0:i*this.actions[o].getClip().duration/this.actions[n].getClip().duration)}t.moving&&(this.root.rotation.y=Math.atan2(t.direction.x,t.direction.z)),this.mixer.update(Number.isFinite(e)?Math.min(Math.max(e,0),.1):0),this.contactDt=Number.isFinite(e)?Math.min(Math.max(e,0),.1):0,this.guardSoles()}}const Hr=Object.freeze({source:"assets/characters/brian/source/human+figure+3d+model.glb",url:"/characters/brian.glb",bytes:11965268,sha256:"09d5a6df4818f96347225136b9fdfd43ab693a9d2e20db33ac47f63c21595aee"});async function Vv(){const s=performance.now(),e=await fetch(aa(Hr.url));if(!e.ok)throw Error("Brian input unavailable: "+e.status);const t=await e.arrayBuffer(),n=Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",t))).map(r=>r.toString(16).padStart(2,"0")).join("");if(t.byteLength!==Hr.bytes||n!==Hr.sha256)throw Error("Brian input integrity mismatch");const i=await new ra().parseAsync(t,"");try{return{person:new yf(i.scene,i.animations),loadMs:performance.now()-s}}catch(r){throw Li(i.scene),r}}const Ji=Object.freeze({url:"/characters/brian8k/manifest.json",bytes:26796656,sha256:"bd9d57c4744d7b75d229f2f582b3e0ebf2a42904f9bc2e20f627464e66dbd17a",maxTextureSizeRequired:8192});function Wv(s){const e=s;if(!e||e.schemaVersion!==1||e.format!=="glb-concatenated-parts"||e.partSize!==8388608||e.original?.bytes!==Ji.bytes||e.original?.sha256!==Ji.sha256||!Array.isArray(e.parts)||e.parts.length!==4)throw Error("Brian8K manifest identity mismatch");for(let t=0;t<4;t++){const n=e.parts[t];if(!n||n.file!==`parts/brian8k.glb.part00${t+1}`||n.bytes!==(t<3?8388608:1630832)||typeof n.sha256!="string"||!/^[a-f0-9]{64}$/.test(n.sha256))throw Error("Brian8K invalid part metadata")}return e}function qv(s){if(!Number.isFinite(s)||s<Ji.maxTextureSizeRequired)throw Error(`Brian8K requires MAX_TEXTURE_SIZE >= 8192 (device: ${s}); use person=brian for 4K. No automatic fallback.`)}const Xd=async s=>Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",s))).map(e=>e.toString(16).padStart(2,"0")).join("");async function jd(s,e){if(!s.ok)throw Error(`Brian8K fetch failed: ${s.status}`);const t=s.headers.get("content-length");if(t!==null&&Number(t)>e)throw Error("Brian8K response exceeds size limit");if(!s.body)throw Error("Brian8K response has no body");const n=s.body.getReader(),i=[];let r=0;try{for(;;){const{done:l,value:c}=await n.read();if(l)break;if(r+=c.byteLength,r>e)throw Error("Brian8K response exceeds size limit");i.push(c)}}catch(l){throw await n.cancel().catch(()=>{}),l}finally{n.releaseLock()}const a=new Uint8Array(r);let o=0;for(const l of i)a.set(l,o),o+=l.byteLength;return a.buffer}async function Xv(){const s=new AbortController;try{const e=aa(Ji.url),t=Wv(JSON.parse(new TextDecoder().decode(await jd(await fetch(e,{signal:s.signal}),65536)))),n=new Uint8Array(Ji.bytes);let i=0;if(await Promise.all([0,1].map(async()=>{for(;i<t.parts.length;){const r=i++,a=t.parts[r],o=await jd(await fetch(e.slice(0,e.lastIndexOf("/")+1)+a.file,{signal:s.signal}),a.bytes);if(o.byteLength!==a.bytes||await Xd(o)!==a.sha256)throw Error(`Brian8K part ${r+1} integrity mismatch`);n.set(new Uint8Array(o),r*t.partSize)}})),await Xd(n.buffer)!==Ji.sha256)throw Error("Brian8K original integrity mismatch");return n.buffer}catch(e){throw s.abort(),e}}class jv extends yf{constructor(e,t){super(e,t),this.mixer.update(0),this.guardSoles(),this.root.name="brian8k-person-poc",Object.assign(this.inspection,{identity:"brian8k",assetBytes:Ji.bytes,assetSha256:Ji.sha256,embeddedImageBytes:22885310,textureDimensions:[[8192,8192],[4096,4096],[4096,4096]],textureAllocationEstimateRgba8FullMipsMiB:512,runtimeVramBytes:null,runtimeVramStatus:"not-measured",coreBudgetStatus:"8k-trial-not-approved",performanceApproved:!1})}update(e,t){!Number.isFinite(e)||e<=0||super.update(e,t)}}async function Kv(s){qv(s);const e=performance.now(),t=await Xv(),n=await new ra().parseAsync(t,"");try{const i=new jv(n.scene,n.animations);return i.inspection.maxTextureSize=s,{person:i,loadMs:performance.now()-e}}catch(i){throw Li(n.scene),i}}function Yv(s,e,t){const n=s.suspendForSeating?.();let i;try{i=t(s.root,e)}catch(a){throw n?.(),a}let r=!1;return{...i,dispose(){if(!r){r=!0;try{i.dispose()}finally{n?.()}}}}}const Jv=Object.freeze({standingHeight:1.8,hip:[-.08,.54,-.39],torsoRecline:.35,wheel:[-.115,.877,-.405],leftAnkle:[-.38,.412,-.28],rightAnkle:[-.39,.412,-.52],leftWrist:[.005,.845,-.22],rightWrist:[.005,.845,-.59]});function Kd(s,e,t=Jv){const n=new Be;n.name="Existing protagonist seated RHD";const i=s,r=i.parent,a=r?r.children.indexOf(i):-1,o=[],l=new Set;let c=!1;i.traverse(u=>o.push({o:u,p:u.position.clone(),q:u.quaternion.clone(),s:u.scale.clone(),visible:u.visible,frustumCulled:u.frustumCulled,geometry:u.geometry,material:u.material,morphs:u.morphTargetInfluences,morphValues:u.morphTargetInfluences?.slice(),bindMatrix:u.bindMatrix?.clone(),bindMatrixInverse:u.bindMatrixInverse?.clone(),matrix:u.matrix.clone(),matrixWorld:u.matrixWorld.clone(),matrixAutoUpdate:u.matrixAutoUpdate,matrixWorldAutoUpdate:u.matrixWorldAutoUpdate,matrixWorldNeedsUpdate:u.matrixWorldNeedsUpdate}));const h=u=>(l.add(u),u);function d(){if(c)return[];c=!0;const u=[],f=m=>{try{m()}catch(x){u.push(x)}};for(const m of o)f(()=>{m.geometry!==void 0&&(m.o.geometry=m.geometry),m.material!==void 0&&(m.o.material=m.material),m.morphs!==void 0&&(m.o.morphTargetInfluences=m.morphs,m.morphs.splice(0,m.morphs.length,...m.morphValues)),m.bindMatrix&&m.o.bindMatrix.copy(m.bindMatrix),m.bindMatrixInverse&&m.o.bindMatrixInverse.copy(m.bindMatrixInverse),m.o.position.copy(m.p),m.o.quaternion.copy(m.q),m.o.scale.copy(m.s),m.o.visible=m.visible,m.o.frustumCulled=m.frustumCulled,m.o.matrixAutoUpdate=m.matrixAutoUpdate,m.o.matrixWorldAutoUpdate=m.matrixWorldAutoUpdate,m.o.matrix.copy(m.matrix),m.o.matrixWorld.copy(m.matrixWorld),m.o.matrixWorldNeedsUpdate=m.matrixWorldNeedsUpdate});f(()=>{if(i.removeFromParent(),r){r.add(i);const m=r.children.indexOf(i);r.children.splice(m,1),r.children.splice(a,0,i)}}),f(()=>n.removeFromParent());for(const m of l)f(()=>m.dispose());return l.clear(),u}try{let v=function(w,P,L){i.updateMatrixWorld(!0);const F=p(P).sub(p(w)).normalize(),k=L.clone().sub(p(w)).normalize(),I=new et().setFromUnitVectors(F,k),O=w.getWorldQuaternion(new et).premultiply(I);w.quaternion.copy(w.parent.getWorldQuaternion(new et).invert().multiply(O)),i.updateMatrixWorld(!0)},T=function(w,P,L,F,k){const I=p(w),O=p(P).distanceTo(I),S=p(L).distanceTo(p(P)),N=F.clone().sub(I),K=Math.min(N.length(),O+S-.001);N.normalize();const U=k.clone().sub(I);U.addScaledVector(N,-U.dot(N)).normalize();const V=(O*O-S*S+K*K)/(2*K),Y=Math.sqrt(Math.max(0,O*O-V*V)),se=I.clone().addScaledVector(N,V).addScaledVector(U,Y);v(w,P,se),v(P,L,F)};n.add(i),i.position.set(0,0,0),i.quaternion.identity(),i.scale.setScalar(1),i.visible=!0;const u={};i.traverse(w=>{w.isBone&&(u[w.name.replace(/[^A-Za-z0-9]/g,"").replace(/^mixamorig/,"")]=w)});const f=[];i.traverse(w=>{w.isSkinnedMesh&&(f.push(w),w.frustumCulled=!1)});for(const w of f)w.skeleton.pose();i.updateMatrixWorld(!0);const m=u.Head.getWorldQuaternion(new et),x=new mt().setFromObject(i,!0),g=t.standingHeight/(x.max.y-x.min.y);i.scale.setScalar(g),i.rotation.y=-Math.PI/2,i.updateMatrixWorld(!0),i.quaternion.premultiply(new et().setFromAxisAngle(new C(0,0,1),-t.torsoRecline)),i.updateMatrixWorld(!0),i.position.add(new C(...t.hip).sub(u.Hips.getWorldPosition(new C))),i.updateMatrixWorld(!0);const p=w=>w.getWorldPosition(new C);t.uprightNeck&&v(u.Neck,u.Head,p(u.Neck).add(new C(0,.2,0)));for(const w of["Left","Right"]){const P=w==="Left"?-.28:-.52,L=new C(...t[w==="Left"?"leftAnkle":"rightAnkle"]);T(u[w+"UpLeg"],u[w+"Leg"],u[w+"Foot"],L,new C(-.4,t.kneePoleY??.7,P+(w==="Left"?1:-1)*(t.kneeSpread??0))),v(u[w+"Foot"],u[w+"ToeBase"],p(u[w+"Foot"]).add(new C(...t.footDirection??[-.15,.08,0])));const F=new C(...t[w==="Left"?"leftWrist":"rightWrist"]);T(u[w+"Arm"],u[w+"ForeArm"],u[w+"Hand"],F,new C(.03,.65,P)),v(u[w+"Hand"],u[w+"HandMiddle1"],F.clone().add(new C(-.11,.035,w==="Left"?-.015:.015)))}for(const w of["Left","Right"])for(const P of["Index","Middle","Ring","Pinky"]){const L=w+"Hand"+P;v(u[L+"1"],u[L+"2"],p(u[L+"1"]).add(new C(-.04,t.rimSideGrip?0:-.005,t.rimSideGrip?w==="Left"?-.004:.004:0))),v(u[L+"2"],u[L+"3"],p(u[L+"2"]).add(new C(-.005,t.rimSideGrip?0:-.025,t.rimSideGrip?w==="Left"?-.025:.025:0))),v(u[L+"3"],u[L+"4"],p(u[L+"3"]).add(new C(.018,t.rimSideGrip?0:-.015,t.rimSideGrip?w==="Left"?-.015:.015:0)))}if(t.lookForwardWorld){const w=u.Head.getWorldQuaternion(new et),P=new C(0,0,1).applyQuaternion(w.clone().multiply(m.clone().invert())),L=w.premultiply(new et().setFromUnitVectors(P,new C(-1,0,0)));u.Head.quaternion.copy(u.Head.parent.getWorldQuaternion(new et).invert().multiply(L))}i.updateMatrixWorld(!0);const b=new Set;for(const w of f)w.skeleton.bones.forEach((P,L)=>{/Head|Neck/.test(P.name)&&b.add(L)});const y={value:0};for(const w of f){const P=h(w.geometry.clone()),L=new Float32Array(P.attributes.position.count),F=P.attributes.skinIndex,k=P.attributes.skinWeight;for(let O=0;O<L.length;O++)for(let S=0;S<4;S++)b.has(F.getComponent(O,S))&&(L[O]+=k.getComponent(O,S));P.setAttribute("driverHeadMask",new Kt(L,1)),w.geometry=P;const I=O=>{const S=h(O.clone());return S.onBeforeCompile=N=>{N.uniforms.driverCockpit=y,N.vertexShader=`attribute float driverHeadMask; varying float vDriverHeadMask;
`+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vDriverHeadMask = driverHeadMask;`),N.fragmentShader=`uniform float driverCockpit; varying float vDriverHeadMask;
`+N.fragmentShader,N.fragmentShader=N.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if(driverCockpit > 0.5 && vDriverHeadMask > 0.35) discard;`)},S.customProgramCacheKey=()=>"r34-driver-head-mask-v1",S};w.material=Array.isArray(w.material)?w.material.map(I):I(w.material)}const E=p(u.Head).add(new C(-.085,.075,0)),R={standingHeight:t.standingHeight,uniformScale:g,hipTarget:t.hip,wheelCenter:t.wheel,bones:{},eyeLocal:E.toArray(),cockpitVisibility:"Only head/neck-weighted fragments discarded in cockpit. Entire actor visible in exterior.",method:"Static two-bone IK with unchanged bone lengths. Landmark distances do not prove zero mesh penetration."};for(const w of["Hips","Head","HeadTop_End","LeftUpLeg","LeftLeg","LeftFoot","LeftToeBase","RightLeg","RightFoot","RightToeBase","LeftArm","RightArm","LeftForeArm","RightForeArm","LeftHand","RightHand"])u[w]&&(R.bones[w]=p(u[w]).toArray());const _=new mt().setFromObject(i,!0);return R.posedBounds={min:_.min.toArray(),max:_.max.toArray()},e&&e.add(n),{root:n,actor:i,bones:u,eyeLocal:E,metrics:R,setCockpit:w=>{c||(y.value=w?1:0)},dispose:()=>{const w=d();if(w.length)throw new AggregateError(w,"Brian seat disposal failed")}}}catch(u){const f=d();throw f.length?new AggregateError([u,...f],"Brian seat construction failed and cleanup reported errors"):u}}const $v=Object.freeze({standingHeight:1.75,hip:[.025,.56,-.39],torsoRecline:.38,wheel:[-.115,.877,-.405],leftAnkle:[-.43,.369,-.29],rightAnkle:[-.44,.369,-.54],leftWrist:[.005,.86,-.22],rightWrist:[.005,.86,-.59],footDirection:[-.15,0,0],uprightNeck:!0,lookForwardWorld:!0,kneePoleY:.64,kneeSpread:.045,rimSideGrip:!0}),nh=s=>Object.freeze({minX:-s,maxX:s,minZ:-s,maxZ:s}),as=nh(75),Zv=nh(80),Yd=nh(85),Sl=Object.freeze({minX:-110.4,maxX:-62.6,minZ:-4.2,maxZ:-1.8}),Gs=(s,e,t)=>e>=s.minX&&e<=s.maxX&&t>=s.minZ&&t<=s.maxZ,Ha=(...s)=>s.every(Number.isFinite);function Qv(s){return s.getAll("drive").length===1&&s.get("drive")==="r34"&&s.getAll("r34route").length===1&&s.get("r34route")==="109-west-43m"?"109-west-43m":void 0}class ih{route;indexRegions;constructor(e){this.route=e==="109-west-43m"?e:void 0,this.indexRegions=Object.freeze(this.route?[Yd,Sl]:[Yd])}poseCentre(e,t){return Ha(e,t)&&(Gs(as,e,t)||!!(this.route&&e>=-108&&Gs(Sl,e,t)))}isExtension(e,t){return!!(this.route&&!Gs(as,e,t))}indexPoint(e,t){return Ha(e,t)&&this.indexRegions.some(n=>Gs(n,e,t))}footprint(e,t,n,i){if(!Ha(...e.toArray(),...t.toArray()))return!1;if(!this.isExtension(e.x,e.z))return!0;const r=n.clone();for(const l of i)r.expandByPoint(l);const a=r.applyMatrix4(new Re().compose(e,t,new C(1,1,1)));for(const l of i){const c=l.clone().applyQuaternion(t).add(e);a.expandByPoint(c.clone().add(new C(-.085,0,-.085))),a.expandByPoint(c.clone().add(new C(.085,0,.085)))}const o=Sl;return a.min.x>=o.minX&&a.max.x<=as.maxX&&a.min.z>=as.minZ&&a.max.z<=as.maxZ&&(a.min.x>=as.minX||a.min.z>=o.minZ&&a.max.z<=o.maxZ)}recoverable(e,t,n,i){return!Ha(...e.toArray())||e.y<-10?!1:Gs(Zv,e.x,e.z)?!0:!!(this.route&&this.poseCentre(e.x,e.z)&&this.footprint(e,t,n,i))}canExit(e,t){return!this.route||Gs(as,e,t)}}const ri=8;class Jd{constructor(e,t=new ih){this.bounds=t;const n=[],i=new C,r=new C,a=new C,o=new Re,l=new Re,c=new Set;for(const h of e)h.updateWorldMatrix(!0,!0),h.traverseVisible(d=>{if(!(d instanceof Lt)||c.has(d))return;c.add(d);const u=d.geometry.getAttribute("position"),f=d.geometry.index;if(!u)return;const m=d instanceof go?d.count:1;for(let x=0;x<m;x++){const g=n.length;l.copy(d.matrixWorld),d instanceof go&&(d.getMatrixAt(x,o),l.multiply(o));for(let p=0;p<(f?.count??u.count);p+=3){i.fromBufferAttribute(u,f?f.getX(p):p).applyMatrix4(l),r.fromBufferAttribute(u,f?f.getX(p+1):p+1).applyMatrix4(l),a.fromBufferAttribute(u,f?f.getX(p+2):p+2).applyMatrix4(l);const v=Math.min(i.x,r.x,a.x),T=Math.max(i.x,r.x,a.x),b=Math.min(i.z,r.z,a.z),y=Math.max(i.z,r.z,a.z),E=t.indexRegions.filter(w=>v<=w.maxX&&T>=w.minX&&b<=w.maxZ&&y>=w.minZ);if(!E.length||Math.min(i.y,r.y,a.y)>30||Math.max(i.y,r.y,a.y)<-10)continue;const R=n.length;n.push(...i.toArray(),...r.toArray(),...a.toArray());const _=new Set;for(const w of E)for(let P=Math.floor(Math.max(w.minX,v)/ri);P<=Math.floor(Math.min(w.maxX,T)/ri);P++)for(let L=Math.floor(Math.max(w.minZ,b)/ri);L<=Math.floor(Math.min(w.maxZ,y)/ri);L++){const F=P+","+L;if(_.has(F))continue;_.add(F);let k=this.cells.get(F);k||(k=[],this.cells.set(F,k)),k.push(R)}}if(n.length>g){const p=[];let v=d;for(;v;)v.name&&p.unshift(v.name),v=v.parent;this.sources.push({start:g,end:n.length,name:p.join("/")})}}});this.data=new Float32Array(n)}bounds;sources=[];lastHit=null;data;cells=new Map;ids(e,t,n,i){const r=new Set;for(let a=Math.floor(e/ri);a<=Math.floor(t/ri);a++)for(let o=Math.floor(n/ri);o<=Math.floor(i/ri);o++)for(const l of this.cells.get(a+","+o)??[])r.add(l);return r}height(e,t,n){if(this.bounds.route&&!this.bounds.indexPoint(e,t))return null;let i=-1/0;const r=this.data;for(const a of this.cells.get(Math.floor(e/ri)+","+Math.floor(t/ri))??[]){const o=r[a],l=r[a+2],c=r[a+3]-o,h=r[a+5]-l,d=r[a+6]-o,u=r[a+8]-l,f=c*u-h*d;if(Math.abs(f)<1e-10)continue;const m=e-o,x=t-l,g=(m*u-x*d)/f,p=(c*x-h*m)/f;if(g<-1e-5||p<-1e-5||g+p>1.00001)continue;const v=r[a+1]+g*(r[a+4]-r[a+1])+p*(r[a+7]-r[a+1]);v<=n&&v>i&&(i=v)}return Number.isFinite(i)?i:null}intersects(e,t,n){this.lastHit=null;const i=n.clone().applyMatrix4(new Re().compose(e,t,new C(1,1,1))),r=t.clone().invert(),a=new An,o=this.data;for(const l of this.ids(i.min.x,i.max.x,i.min.z,i.max.z))if(!(Math.min(o[l+1],o[l+4],o[l+7])>i.max.y||Math.max(o[l+1],o[l+4],o[l+7])<i.min.y)&&(a.a.fromArray(o,l).sub(e).applyQuaternion(r),a.b.fromArray(o,l+3).sub(e).applyQuaternion(r),a.c.fromArray(o,l+6).sub(e).applyQuaternion(r),n.intersectsTriangle(a)))return this.lastHit={triangle:l/9,source:this.sources.find(c=>l>=c.start&&l<c.end)?.name??"unknown"},!0;return!1}}class ey{constructor(e,t,n,i=new ih){this.wheels=n,this.bounds=i,this.ground=new Jd(e,i),this.obstacles=new Jd(t,i)}wheels;bounds;ground;obstacles;lastFailure=null;body=new mt(new C(-2.38,.1,-1.16),new C(2.34,1.42,1.16));tyreHeight(e,t,n,i){const r=this.ground.height(e,t,n);if(r!==null)return r;const a=Math.cos(i),o=Math.sin(i),l=[];for(const c of[-.06,.06])for(const h of[-.06,.06]){const d=this.ground.height(e+c*a+h*o,t-c*o+h*a,n);if(d===null)return null;l.push(d)}return Math.max(...l)-Math.min(...l)<=.05?l.reduce((c,h)=>c+h,0)/4:null}pose(e,t,n,i){if(this.lastFailure=null,!Number.isFinite(e+t+n+i)||!this.bounds.poseCentre(e,t))return this.lastFailure={reason:"test-area",route:this.bounds.route??"core",x:e,z:t,yaw:n},null;const r=new C(e,i,t),a=new et().setFromAxisAngle(new C(0,1,0),n);let o=[],l=0;for(let c=0;c<3;c++){const h=this.wheels.map(R=>R.clone().applyQuaternion(a).add(r)),d=h.map(R=>this.tyreHeight(R.x,R.z,i+.5,n));if(d.some(R=>R===null))return this.lastFailure={reason:"missing-ground",x:e,z:t,yaw:n,previousY:i,points:h.map(R=>R.toArray()),heights:d},null;const u=h.reduce((R,_,w)=>R.add(new C(_.x,d[w],_.z)),new C).multiplyScalar(.25);let f=0,m=0,x=0,g=0,p=0;h.forEach((R,_)=>{const w=R.x-u.x,P=R.z-u.z,L=d[_]-u.y;f+=w*w,m+=P*P,x+=w*P,g+=w*L,p+=P*L});const v=f*m-x*x;if(Math.abs(v)<1e-8)return null;const T=new C(-(g*m-p*x)/v,1,-(p*f-g*x)/v).normalize();if(l=Math.acos(T.y)*180/Math.PI,l>18)return this.lastFailure={reason:"slope",slope:l,x:e,z:t,yaw:n,heights:d},null;const b=new C(Math.cos(n),0,-Math.sin(n));b.addScaledVector(T,-b.dot(T)).normalize();const y=new C().crossVectors(b,T).normalize();if(a.setFromRotationMatrix(new Re().makeBasis(b,T,y)),o=this.wheels.map(R=>{const _=R.clone().applyQuaternion(a).add(r),w=this.tyreHeight(_.x,_.z,i+.5,n);return w===null?1/0:_.y-w}),!o.every(Number.isFinite))return null;const E=.002-Math.min(...o);r.y+=E,o=o.map(R=>R+E)}return Math.abs(r.y-i)>.3||Math.max(...o)>.1?(this.lastFailure={reason:"step-or-wheel-gap",x:e,z:t,yaw:n,previousY:i,y:r.y,gaps:o},null):this.bounds.footprint(r,a,this.body,this.wheels)?{position:r,quaternion:a,gaps:o,slope:l}:(this.lastFailure={reason:"corridor-footprint",route:this.bounds.route,x:e,z:t,yaw:n},null)}blocked(e){return this.obstacles.intersects(e.position,e.quaternion,this.body)}safeExit(e){if(!this.bounds.canExit(e.position.x,e.position.z))return null;for(const t of[0,.8,-.8])for(const n of[-1.9,1.9]){const i=new C(t,0,n).applyQuaternion(e.quaternion).add(e.position),r=this.ground.height(i.x,i.z,e.position.y+.4);if(r===null||Math.abs(r-e.position.y)>.35)continue;i.y=r;const a=new mt(new C(-.35,.05,-.35),new C(.35,1.85,.35));if(this.obstacles.intersects(i,new et,a))continue;let o=!0;for(let c=.2;c<=1;c+=.2){const h=new C(t,0,Math.sign(n)*(.9+(Math.abs(n)-.9)*c)).applyQuaternion(e.quaternion).add(e.position);if(h.y=r,this.obstacles.intersects(h,new et,a)){o=!1;break}}const l=[[-.3,-.3],[.3,-.3],[-.3,.3],[.3,.3]].every(([c,h])=>{const d=this.ground.height(i.x+c,i.z+h,r+.35);return d!==null&&Math.abs(d-r)<.2});if(o&&l)return i}return null}}class ty{constructor(e,t,n=!0){this.car=e,this.world=t,this.enabled=n;for(const d of["Wheel_FL","Wheel_FR","Wheel_RL","Wheel_RR"]){const u=e.getObjectByName(d);if(u){this.wheelBases.set(u,u.position.clone());const f=e.getObjectByName(d.replace("Wheel","Caliper"));f&&this.caliperBases.set(u,{node:f,base:f.position.clone()})}}const i=new Map;e.traverse(d=>{if(!(d instanceof Lt)||!d.name.startsWith("Glass_")||!(d.material instanceof Qn)||d.material.name!=="Glass_ClearTransmission")return;const u=d.material;let f=i.get(u);f||(f=u.clone(),f.name="R34 thin clear window (alpha reflection)",f.transmission=0,f.thickness=0,f.transparent=!0,f.opacity=.16,f.depthWrite=!1,f.side=Di,f.forceSinglePass=!0,f.roughness=.045,f.metalness=0,f.clearcoat=.35,f.clearcoatRoughness=.04,f.color.setRGB(.94,.98,1),i.set(u,f)),this.windows.push({mesh:d,original:u,clear:f}),d.material=n?f:u});const r=64,a=new Uint8Array(r*r*4);for(let d=0;d<r;d++)for(let u=0;u<r;u++){const f=Math.hypot((u+.5-r/2)/(r/2),(d+.5-r/2)/(r/2));a[(d*r+u)*4+3]=Math.round(255*Math.pow(Math.max(0,1-f*f),2))}const o=new bs(a,r,r,Cn);o.minFilter=o.magFilter=Mt,o.generateMipmaps=!1,o.needsUpdate=!0;const l=new tn,c=[],h=[];for(let d=0;d<4;d++)c.push(0,0,1,0,1,1,0,1),h.push(d*4,d*4+2,d*4+1,d*4,d*4+3,d*4+2);l.setAttribute("position",new Kt(new Float32Array(48),3)),l.setAttribute("uv",new Kt(new Float32Array(c),2)),l.setAttribute("color",new Kt(new Float32Array(64).fill(1),4)),l.setIndex(h),this.shadow=new Lt(l,new Vn({map:o,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,vertexColors:!0})),this.shadow.name="R34 local tyre contact occlusion (approximation)",this.shadow.renderOrder=1,this.shadow.frustumCulled=!1,(e.parent??e).add(this.shadow),this.shadow.visible=n,this.update()}car;world;windows=[];wheelBases=new Map;caliperBases=new Map;shadow;last="";enabled;setEnabled(e){this.enabled=e;for(const t of this.windows)t.mesh.material=e?t.clear:t.original;this.shadow.visible=e,this.last="",this.update()}contacts(){const e=new C(1,0,0).applyQuaternion(this.car.getWorldQuaternion(this.car.quaternion.clone())),t=Math.atan2(-e.z,e.x);return this.world.wheels.map((n,i)=>{const r=["Wheel_FL","Wheel_FR","Wheel_RL","Wheel_RR"][i],a=this.car.getObjectByName(r),o=this.contactPoint(n,a),l=this.world.tyreHeight(o.x,o.z,o.y+.5,t),c=a?new mt().setFromObject(a,!0):void 0;return{wheel:r,point:o.toArray(),groundY:l,gap:l===null?null:o.y-l,meshMinY:c?.min.y}})}contactPoint(e,t){const n=this.car.localToWorld(e.clone()),i=t&&this.wheelBases.get(t);if(t&&i&&t.parent){const r=t.parent.localToWorld(i.clone()),a=t.parent.localToWorld(t.position.clone());n.add(a.sub(r))}return n}update(){this.shadow.visible=this.enabled&&this.car.visible;const e=[...this.car.position.toArray(),...this.car.quaternion.toArray(),...Array.from(this.wheelBases.keys()).flatMap(h=>h.parent.quaternion.toArray())].join(",");if(e===this.last)return;this.last=e;const t=new C(1,0,0).applyQuaternion(this.car.getWorldQuaternion(this.car.quaternion.clone())),n=Math.atan2(-t.z,t.x);let i=0;for(const[h,d]of this.wheelBases){h.position.copy(d);const u=this.car.localToWorld(this.world.wheels[i++].clone()),f=this.world.tyreHeight(u.x,u.z,u.y+.5,n),m=this.enabled&&f!==null?Math.max(0,Math.min(.08,u.y-f-.002)):0;if(m>0){const g=h.parent.localToWorld(d.clone());g.y-=m,h.position.copy(h.parent.worldToLocal(g))}h.updateMatrixWorld(!0);const x=this.caliperBases.get(h);if(x){const g=x.node.parent.localToWorld(x.base.clone());g.y-=m,x.node.position.copy(x.node.parent.worldToLocal(g)),x.node.updateMatrixWorld(!0)}}const r=this.shadow.geometry.getAttribute("position"),a=this.shadow.geometry.getAttribute("color"),o=this.car.getWorldQuaternion(this.car.quaternion.clone()),l=new C(1,0,0).applyQuaternion(o).setY(0).normalize(),c=new C(0,0,1).applyQuaternion(o).setY(0).normalize();this.world.wheels.forEach((h,d)=>{const u=this.contactPoint(h,this.car.getObjectByName(["Wheel_FL","Wheel_FR","Wheel_RL","Wheel_RR"][d])),f=this.world.tyreHeight(u.x,u.z,u.y+.5,Math.atan2(-l.z,l.x)),m=f===null?1/0:u.y-f,x=[[-.27,-.18],[.27,-.18],[.27,.18],[-.27,.18]].map(([p,v])=>{const T=u.clone().addScaledVector(l,p).addScaledVector(c,v),b=this.world.ground.height(T.x,T.z,u.y+.5);return b===null?null:T.setY(b+.002)}),g=x.every(p=>p!==null)&&m>=-.01&&m<.12;x.forEach((p,v)=>{const T=g?p:u.clone();this.shadow.parent.worldToLocal(T),r.setXYZ(d*4+v,T.x,T.y,T.z),a.setXYZW(d*4+v,1,1,1,g?Math.max(0,1-m/.12):0)})}),r.needsUpdate=!0,a.needsUpdate=!0}}const ai=360,os=(s,e,t)=>Math.max(e,Math.min(t,s));function $d(){return{x:0,z:0,yaw:0,speed:0,steer:0,wheelAngle:0,mode:"walk",view:"chase",px:0,pz:-2.8,lookYaw:Math.PI/2,lookPitch:0,time:0,cooldown:0,reverseWait:0,gear:0,rpm:850,flame:0,flameCooldown:0,previousThrottle:!1,paused:!0}}function Zd(s,e,t){if(s.paused)return;if(t=os(t,0,1/60),s.time+=t,s.cooldown=Math.max(0,s.cooldown-t),s.flame=Math.max(0,s.flame-t),s.flameCooldown=Math.max(0,s.flameCooldown-t),s.mode==="walk"){const u=(e.KeyW?1:0)-(e.KeyS?1:0),f=(e.KeyD?1:0)-(e.KeyA?1:0),m=Math.max(1,Math.hypot(u,f)),x=(-Math.cos(s.lookYaw)*u+Math.sin(s.lookYaw)*f)*3.4*t/m,g=(Math.sin(s.lookYaw)*u+Math.cos(s.lookYaw)*f)*3.4*t/m,p=os(s.px+x,-ai,ai),v=os(s.pz+g,-ai,ai),T=Math.cos(s.yaw)*(p-s.x)-Math.sin(s.yaw)*(v-s.z),b=Math.sin(s.yaw)*(p-s.x)+Math.cos(s.yaw)*(v-s.z);(Math.abs(T)>2.6||Math.abs(b)>1.17)&&(s.px=p,s.pz=v),s.rpm=850,s.gear=0;return}const n=!!e.KeyW,i=!!e.KeyS,r=s.gear,a=Math.abs(s.speed);let o=0;n&&!i?(s.reverseWait=0,o=s.speed<-.1?15:Math.max(2.1,9.8-.105*Math.max(0,s.speed))):i?s.speed>.05?(o=-16,s.reverseWait=0):(s.speed=Math.min(0,s.speed),s.reverseWait+=t,s.reverseWait>.45&&(o=-4.2)):s.reverseWait=0;const l=s.speed;s.speed+=o*t,i&&l>0&&s.speed<0&&(s.speed=0);const c=(.22+.0032*s.speed*s.speed)*t;s.speed=Math.sign(s.speed)*Math.max(0,Math.abs(s.speed)-c),s.speed=os(s.speed,-8.3,69.4);const h=((e.KeyA?1:0)-(e.KeyD?1:0))*.48/(1+a*.043);s.steer+=(h-s.steer)*(1-Math.exp(-9*t)),s.yaw+=s.speed/2.665*Math.tan(s.steer)*t,s.x-=Math.cos(s.yaw)*s.speed*t,s.z+=Math.sin(s.yaw)*s.speed*t,s.wheelAngle=(s.wheelAngle+s.speed/.342*t)%(Math.PI*2),(Math.abs(s.x)>ai-3||Math.abs(s.z)>ai-3)&&(s.x=os(s.x,-ai+3,ai-3),s.z=os(s.z,-ai+3,ai-3),s.speed=0,s.flame=0);const d=Math.abs(s.speed);s.gear=s.speed<-.1?-1:d<.1?0:Math.min(6,1+Math.floor(d/12)),s.rpm=s.gear===0?850:os(1700+d%12/12*5e3+(n?450:0),850,7200),s.flameCooldown===0&&d>4&&(n&&!s.previousThrottle||s.gear>r&&r>0||!n&&s.previousThrottle)&&(s.flame=.115,s.flameCooldown=.6),s.previousThrottle=n}const ls=Object.freeze({standingHeight:1.75,hip:[-.08,.54,-.39],torsoRecline:.35,wheel:[-.115,.877,-.405],leftAnkle:[-.38,.412,-.28],rightAnkle:[-.39,.412,-.52],leftWrist:[.005,.845,-.22],rightWrist:[.005,.845,-.59]});function ny(s,e){const t=new Be;t.name="Existing protagonist seated RHD";const n=s,i=n.parent,r=[];n.traverse(b=>r.push({o:b,p:b.position.clone(),q:b.quaternion.clone(),s:b.scale.clone(),visible:b.visible})),t.add(n),n.position.set(0,0,0),n.quaternion.identity(),n.scale.setScalar(1),n.visible=!0;const a={};n.traverse(b=>{b.isBone&&(a[b.name.replace(/[^A-Za-z0-9]/g,"").replace(/^mixamorig/,"")]=b)});const o=[];n.traverse(b=>{b.isSkinnedMesh&&(o.push(b),b.frustumCulled=!1)});for(const b of o)b.skeleton.pose();n.updateMatrixWorld(!0);const l=new mt().setFromObject(n,!0),c=ls.standingHeight/(l.max.y-l.min.y);n.scale.setScalar(c),n.rotation.y=-Math.PI/2,n.updateMatrixWorld(!0),n.quaternion.premultiply(new et().setFromAxisAngle(new C(0,0,1),-ls.torsoRecline)),n.updateMatrixWorld(!0),n.position.add(new C(...ls.hip).sub(a.Hips.getWorldPosition(new C))),n.updateMatrixWorld(!0);const h=b=>b.getWorldPosition(new C);function d(b,y,E){n.updateMatrixWorld(!0);const R=h(y).sub(h(b)).normalize(),_=E.clone().sub(h(b)).normalize(),w=new et().setFromUnitVectors(R,_),P=b.getWorldQuaternion(new et).premultiply(w);b.quaternion.copy(b.parent.getWorldQuaternion(new et).invert().multiply(P)),n.updateMatrixWorld(!0)}function u(b,y,E,R,_){const w=h(b),P=h(y).distanceTo(w),L=h(E).distanceTo(h(y)),F=R.clone().sub(w),k=Math.min(F.length(),P+L-.001);F.normalize();const I=_.clone().sub(w);I.addScaledVector(F,-I.dot(F)).normalize();const O=(P*P-L*L+k*k)/(2*k),S=Math.sqrt(Math.max(0,P*P-O*O)),N=w.clone().addScaledVector(F,O).addScaledVector(I,S);d(b,y,N),d(y,E,R)}for(const b of["Left","Right"]){const y=b==="Left"?-.28:-.52,E=new C(...ls[b==="Left"?"leftAnkle":"rightAnkle"]);u(a[b+"UpLeg"],a[b+"Leg"],a[b+"Foot"],E,new C(-.4,.7,y)),d(a[b+"Foot"],a[b+"ToeBase"],h(a[b+"Foot"]).add(new C(-.15,.08,0)));const R=new C(...ls[b==="Left"?"leftWrist":"rightWrist"]);u(a[b+"Arm"],a[b+"ForeArm"],a[b+"Hand"],R,new C(.03,.65,y)),d(a[b+"Hand"],a[b+"HandMiddle1"],R.clone().add(new C(-.11,.035,b==="Left"?-.015:.015)))}for(const b of["Left","Right"])for(const y of["Index","Middle","Ring","Pinky"]){const E=b+"Hand"+y;d(a[E+"1"],a[E+"2"],h(a[E+"1"]).add(new C(-.04,-.005,0))),d(a[E+"2"],a[E+"3"],h(a[E+"2"]).add(new C(-.005,-.025,0))),d(a[E+"3"],a[E+"4"],h(a[E+"3"]).add(new C(.018,-.015,0)))}n.updateMatrixWorld(!0);const f=new Set;for(const b of o)b.skeleton.bones.forEach((y,E)=>{/Head|Neck/.test(y.name)&&f.add(E)});const m=[],x=[],g={value:0};for(const b of o){const y=b.geometry.clone(),E=new Float32Array(y.attributes.position.count),R=y.attributes.skinIndex,_=y.attributes.skinWeight;for(let P=0;P<E.length;P++)for(let L=0;L<4;L++)f.has(R.getComponent(P,L))&&(E[P]+=_.getComponent(P,L));y.setAttribute("driverHeadMask",new Kt(E,1)),m.push({mesh:b,geometry:b.geometry,material:b.material}),b.geometry=y,x.push(y);const w=P=>{const L=P.clone();return L.onBeforeCompile=F=>{F.uniforms.driverCockpit=g,F.vertexShader=`attribute float driverHeadMask; varying float vDriverHeadMask;
`+F.vertexShader,F.vertexShader=F.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vDriverHeadMask = driverHeadMask;`),F.fragmentShader=`uniform float driverCockpit; varying float vDriverHeadMask;
`+F.fragmentShader,F.fragmentShader=F.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if(driverCockpit > 0.5 && vDriverHeadMask > 0.35) discard;`)},L.customProgramCacheKey=()=>"r34-driver-head-mask-v1",x.push(L),L};b.material=Array.isArray(b.material)?b.material.map(w):w(b.material)}const p=h(a.Head).add(new C(-.085,.075,0)),v={standingHeight:1.75,uniformScale:c,hipTarget:ls.hip,wheelCenter:ls.wheel,bones:{},eyeLocal:p.toArray(),cockpitVisibility:"Only head/neck-weighted fragments discarded in cockpit. Entire actor visible in exterior.",method:"Static two-bone IK with unchanged bone lengths. Landmark distances do not prove zero mesh penetration."};for(const b of["Hips","Head","HeadTop_End","LeftUpLeg","LeftLeg","LeftFoot","LeftToeBase","RightLeg","RightFoot","RightToeBase","LeftArm","RightArm","LeftForeArm","RightForeArm","LeftHand","RightHand"])a[b]&&(v.bones[b]=h(a[b]).toArray());const T=new mt().setFromObject(n,!0);return v.posedBounds={min:T.min.toArray(),max:T.max.toArray()},e&&e.add(t),{root:t,actor:n,bones:a,eyeLocal:p,metrics:v,setCockpit:b=>{g.value=b?1:0},dispose:()=>{t.removeFromParent(),i&&i.add(n);for(const b of r)b.o.position.copy(b.p),b.o.quaternion.copy(b.q),b.o.scale.copy(b.s),b.o.visible=b.visible;n.updateMatrixWorld(!0);for(const b of m)b.mesh.geometry=b.geometry,b.mesh.material=b.material;x.forEach(b=>b.dispose())}}}const Hs=Object.freeze({x:-60,z:0,yaw:0,walkerX:-55,walkerZ:-1.9});class iy{constructor(e,t,n,i,r,a,o=ny){if(this.car=e,this.person=t,this.controls=n,this.camera=i,this.seatFactory=o,this.world=new ey(r,a,e.contacts.map(l=>new C().fromArray(l.local)),new ih(Qv(new URLSearchParams(location.search)))),this.visuals=new ty(e.root,this.world,new URLSearchParams(location.search).get("r34look")!=="legacy"),this.state.x=e.root.position.x,this.state.z=e.root.position.z,this.state.yaw=0,this.pose=this.world.pose(this.state.x,this.state.z,0,e.root.position.y),!this.pose||this.world.blocked(this.pose))throw Error("R34 driving spawn is unsupported or obstructed");this.spawn={position:this.pose.position.clone(),quaternion:this.pose.quaternion.clone(),gaps:[...this.pose.gaps],slope:this.pose.slope},this.state.paused=!1;for(const l of["Steering_FL","Steering_FR","Wheel_FL","Wheel_FR","Wheel_RL","Wheel_RR"]){const c=e.root.getObjectByName(l);if(!c)throw Error("Missing R34 rig "+l);this.bases.set(c,c.quaternion.clone())}this.panel.id="r34-driving-panel",this.panel.style.cssText="position:fixed;bottom:12px;left:12px;z-index:500;background:#101820e8;color:white;padding:12px;max-width:600px;font:14px sans-serif",document.body.append(this.panel),this.panelStatus.style.whiteSpace="pre-line",this.walkButton.type="button",this.walkButton.id="r34-walk-start",this.panel.append(this.panelStatus,this.walkButton),this.walkButton.onclick=l=>{if(l.stopPropagation(),!(this.driving||this.controls.mode!=="walk"||this.controls.walk.isLocked)){this.walkError=!1;try{this.controls.walk.lock()}catch{this.walkError=!0}this.show()}},document.addEventListener("pointerlockchange",()=>{this.controls.walk.isLocked&&(this.walkError=!1,this.walkStarted=!0),this.show()}),document.addEventListener("pointerlockerror",()=>{!this.driving&&this.controls.mode==="walk"&&(this.walkError=!0,this.show())}),this.panel.onclick=()=>{this.driving&&(this.paused=!1,this.keys={},this.message="運転を再開",this.effects?.gesture())},addEventListener("keydown",l=>this.key(l,!0),!0),addEventListener("keyup",l=>this.key(l,!1),!0),addEventListener("blur",()=>this.pause()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.pause()}),addEventListener("click",l=>{this.driving&&!l.target?.closest("#r34-driving-panel,#btn-day,#btn-night")&&(l.stopImmediatePropagation(),l.preventDefault())},!0),this.applyPose(),this.show()}car;person;controls;camera;seatFactory;effects;connectEffects(e){this.effects=e}visuals;world;state=$d();keys={};driver;pose;spawn;panel=document.createElement("div");panelStatus=document.createElement("div");walkButton=document.createElement("button");walkError=!1;walkStarted=!1;message="車の右側で E：乗車";paused=!1;bases=new Map;cooldown=0;lastTrace=0;events=[];trace=[];get driving(){return this.state.mode==="drive"}event(e,t){this.events.push({type:e,time:this.state.time,position:this.car.root.position.toArray(),detail:t}),this.events.length>250&&this.events.shift()}pause(){this.keys={},this.driving&&(this.paused=!0,this.event("pause"),this.message="一時停止：下のパネルをクリックして再開",this.effects?.update())}key(e,t){const n=e.target;if(n?.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(n?.tagName??""))return;const i=["KeyW","KeyS","KeyA","KeyD","KeyE","KeyC","KeyR","Escape","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","KeyB"];if(this.driving&&i.includes(e.code)){if(e.stopImmediatePropagation(),e.preventDefault(),t){if(e.repeat&&!this.keys[e.code])return;this.keys[e.code]=!0}else delete this.keys[e.code];this.effects?.update()}!t||e.repeat||(e.code==="KeyE"&&(this.driving||this.nearby())?(e.stopImmediatePropagation(),e.preventDefault(),this.interact()):e.code==="KeyC"&&this.driving?(this.state.view=this.state.view==="chase"?"cockpit":"chase",this.event("camera",this.state.view)):e.code==="KeyR"?(this.driving||this.controls.mode==="walk")&&(e.stopImmediatePropagation(),this.recover()):e.code==="Escape"&&this.driving&&this.pause())}nearby(){if(this.driving||this.controls.mode!=="walk")return!1;const e=new C(0,0,-1.15).applyQuaternion(this.pose.quaternion).add(this.pose.position);return this.person.root.position.distanceTo(e)<2}interact(){if(this.cooldown>0||this.paused)return!1;if(!this.driving){if(!this.nearby())return this.message="右ドアへ近づいてください",!1;this.controls.walk.unlock(),this.controls.orbit.enabled=!1,this.keys={};try{this.driver=this.seatFactory(this.person.root,this.car.root)}catch(t){return this.message="乗車姿勢を作れません。徒歩を再開してください。",this.event("entry-failed",String(t)),this.show(),!1}return this.state.mode="drive",this.state.reverseWait=0,this.state.view="chase",this.cooldown=.4,this.event("enter"),this.message="W 加速 / S 制動→後退 / A D 操舵 / C 視点 / 停止後 E 降車 / R 復帰",this.updateCamera(),this.effects?.gesture(),!0}if(Math.abs(this.state.speed)>.35)return this.message="停止してから降車してください",this.event("exit-refused","moving"),!1;const e=this.world.safeExit(this.pose);return e?(this.driver?.dispose(),this.driver=void 0,this.state.mode="walk",this.state.speed=0,this.keys={},this.camera.near=.1,this.camera.fov=55,this.camera.updateProjectionMatrix(),this.controls.resetActorPosition(e),this.person.root.visible=!0,this.cooldown=.4,this.event("exit"),this.message="徒歩：画面クリックで操作 / 車の右側で E / R 復帰",this.effects?.update(),!0):(this.message=this.world.bounds.isExtension(this.pose.position.x,this.pose.position.z)?"延伸試験中：元の範囲へ後退して降車 / R で復帰":"安全な降車場所がありません",this.event("exit-refused","no-safe-space"),!1)}recover(){this.driver&&(this.driver.dispose(),this.driver=void 0),this.state.mode="walk",this.state.speed=0,this.state.yaw=0,this.state.x=this.spawn.position.x,this.state.z=this.spawn.position.z,this.state.steer=0,this.state.reverseWait=0,this.keys={},this.paused=!1,this.cooldown=0,this.pose={position:this.spawn.position.clone(),quaternion:this.spawn.quaternion.clone(),gaps:[...this.spawn.gaps],slope:this.spawn.slope},this.applyPose();const e=this.world.safeExit(this.pose);if(!e)throw Error("Recovery spawn has no safe exit");this.controls.resetActorPosition(e),this.person.root.visible=!0,this.camera.near=.1,this.camera.fov=55,this.camera.updateProjectionMatrix(),this.event("recover"),this.message="安全な開始地点に復帰しました。画面クリックで徒歩",this.effects?.update()}applyPose(){this.car.root.position.copy(this.pose.position),this.car.root.quaternion.copy(this.pose.quaternion),this.car.root.updateMatrixWorld(!0),this.visuals.update()}update(e){if(e=Number.isFinite(e)?Math.max(0,Math.min(.1,e)):0,this.cooldown=Math.max(0,this.cooldown-e),this.driving){if(!this.world.bounds.recoverable(this.car.root.position,this.car.root.quaternion,this.world.body,this.world.wheels))return this.recover(),!1;if(!this.paused){let t=e;for(;t>1e-8;){const n=Math.min(t,.008333333333333333,.12/(Math.abs(this.state.speed)+1)),i={...this.state};Zd(this.state,this.keys,n);const r=this.world.pose(this.state.x,this.state.z,this.state.yaw,this.pose.position.y);!r||this.world.blocked(r)?(this.state.x=i.x,this.state.z=i.z,this.state.yaw=i.yaw,this.state.wheelAngle=i.wheelAngle,this.state.speed=0,this.state.reverseWait=0,Math.abs(i.speed)>.1&&this.event(r?"collision":"road-boundary",JSON.stringify(r?this.world.obstacles.lastHit:this.world.lastFailure)),this.message=r?"障害物で停止：後退して離れてください":"路面・試験範囲の境界で停止"):this.pose=r,t-=n}}this.applyPose();for(const[t,n]of this.bases)t.quaternion.copy(n),t.name.startsWith("Steering")?t.rotateY(this.state.steer):t.rotateZ(this.state.wheelAngle*(t.name.endsWith("L")?-1:1));this.updateCamera(),this.state.time-this.lastTrace>.2&&(this.lastTrace=this.state.time,this.trace.push({time:this.state.time,position:this.pose.position.toArray(),speed:this.state.speed,gap:Math.max(...this.pose.gaps),slope:this.pose.slope}),this.trace.length>3e3&&this.trace.shift())}return this.visuals.update(),this.show(),this.driving}updateCamera(){const e=this.state.view==="cockpit";this.driver?.setCockpit(e);const t=e?this.driver?.eyeLocal.clone()??new C(.16,1.13,-.405):new C(6.8,2.3,0);this.car.root.localToWorld(t);const n=new C(e?-8:-6,e?1:.9,e?-.405:0);this.car.root.localToWorld(n),this.camera.position.copy(t),this.camera.up.set(0,1,0),this.camera.lookAt(n),this.camera.near=.035,this.camera.fov=e?74:63,this.camera.updateProjectionMatrix()}show(){const e=!this.driving&&this.controls.mode==="walk",t=this.controls.walk.isLocked;this.walkButton.hidden=!e||t,this.walkButton.textContent=this.walkStarted?"徒歩を再開":"徒歩を開始";const n=e?this.walkError?"徒歩操作を開始できませんでした。「徒歩を開始／再開」をもう一度押してください。":t?"徒歩操作中：WASD 移動 / Shift 走る / Esc 解除":"下のボタンで徒歩を開始。車に近づいても自由に歩けます。":"地上歩行を選ぶと徒歩に戻れます。",i=this.events.at(-1)?.type==="entry-failed"?this.message+`
`:"",r=(this.nearby()?"車の右側で E：乗車":"車の右ドアへ近づくと E：乗車")+" / R：車と人物を開始地点へ復帰";this.panelStatus.textContent=`R34 ${this.driving?this.state.view==="cockpit"?"運転席":"追従":"徒歩"} · ${Math.round(Math.abs(this.state.speed)*3.6)} km/h${this.paused?" · 一時停止":""}${this.world.bounds.route?" · 109西43m試験（終端停止・後退/R復帰）":""}
${this.driving?this.message:i+n+`
`+r}`}planRoutes(){const e=[];for(const t of[0,6,12,18])for(const n of[-1,1]){const i=$d();i.mode="drive",i.paused=!1,i.x=this.spawn.position.x,i.z=this.spawn.position.z;let r=this.spawn,a=t===0,o="time-limit",l=[];for(let c=0;c<4800;c++){i.x<=this.spawn.position.x-t&&(a=!0);const h={KeyW:i.speed<4.3,KeyS:i.speed>5};a&&(h[n>0?"KeyA":"KeyD"]=!0),Zd(i,h,1/120);const d=this.world.pose(i.x,i.z,i.yaw,r.position.y);if(!d){o="road-boundary";break}if(this.world.blocked(d)){o="collision";break}if(r=d,c%24===0&&l.push(r.position.toArray()),Math.abs(i.yaw)>=Math.PI*2-.06){o="complete";break}}e.push({distance:t,turn:n,reason:o,end:r.position.toArray(),yaw:i.yaw,path:l})}return e}roadProbe(e,t,n,i){const r=this.world.pose(e,t,n,i);return r?{position:r.position.toArray(),gaps:r.gaps,slope:r.slope}:this.world.lastFailure}snapshot(){return{route:this.world.bounds.route??"core",mode:this.state.mode,view:this.state.view,speed:this.state.speed,position:this.car.root.position.toArray(),yaw:this.state.yaw,paused:this.paused,walkingInput:{mode:this.controls.mode,locked:this.controls.walk.isLocked,error:this.walkError},keys:{...this.keys},nearby:this.nearby(),gaps:[...this.pose.gaps],slope:this.pose.slope,events:[...this.events],trace:[...this.trace],actorUUID:this.person.root.uuid,seatedActorUUID:this.driver?.actor.uuid,driver:this.driver?.metrics,groundTriangles:this.world.ground.data.length/9,obstacleTriangles:this.world.obstacles.data.length/9}}}function sy(s,e,t){const n=new yo;return s.cars.filter(i=>i.status==="ready").map(i=>{const r=new mt().setFromObject(i.root,!0),a=[],o=[];for(const c of t)c.traverse(h=>{if(h instanceof Lt&&h.visible&&r.intersectsBox(new mt().setFromObject(h,!0))){a.push(h.name);const d=h.geometry.getAttribute("position"),u=h.geometry.index,f=new An;for(let m=0;m<(u?u.count:d.count);m+=3)if([f.a,f.b,f.c].forEach((x,g)=>x.fromBufferAttribute(d,u?u.getX(m+g):m+g).applyMatrix4(h.matrixWorld)),r.intersectsTriangle(f)){o.push(h.name);break}}});const l=[];for(let c=0;c<=4;c++)for(let h=0;h<=2;h++){const d=r.min.x+(r.max.x-r.min.x)*c/4,u=r.min.z+(r.max.z-r.min.z)*h/2;n.set(new C(d,80,u),new C(0,-1,0));const f=n.intersectObjects(e,!0)[0];l.push({x:d,z:u,name:f?.object.name,y:f?.point.y})}return{id:i.id,conservativeObstacleOverlaps:[...new Set(a)],triangleBoxIntersections:[...new Set(o)],footprint:l}})}const ry=["FL","FR","RL","RR"],ay={r34:{x:-6,z:0,yaw:0},s15:{x:0,z:0,yaw:0},rx7:{x:6,z:0,yaw:0}},oy={r34:{label:"Nissan Skyline GT-R R34",basisYaw:0,wheels:{FL:"Wheel_FL",FR:"Wheel_FR",RL:"Wheel_RL",RR:"Wheel_RR"}},s15:{label:"Nissan Silvia S15 Mona Lisa",basisYaw:0,wheels:{FL:"S15_Wheel_Front_Left_RollPivot",FR:"S15_Wheel_Front_Right_RollPivot",RL:"S15_Wheel_Rear_Left_RollPivot",RR:"S15_Wheel_Rear_Right_RollPivot"}},rx7:{label:"Mazda RX-7 VeilSide Fortune",basisYaw:-Math.PI/2,wheels:{FL:"Fortune_FL_Spin",FR:"Fortune_FR_Spin",RL:"Fortune_RL_Spin",RR:"Fortune_RR_Spin"}}},Sc=()=>({nodes:0,meshes:0,triangles:0,vertices:0,uniqueGeometries:0,materials:0,textures:0}),Qd=s=>({min:s.min.toArray(),max:s.max.toArray(),size:s.getSize(new C).toArray()});function ly(s){const e=Sc(),t=new Set,n=new Set,i=new Set;return s.traverse(r=>{e.nodes++;const a=r;if(!a.isMesh)return;e.meshes++;const o=a.geometry.getAttribute("position"),l=a.isInstancedMesh?a.count:1;e.vertices+=(o?.count??0)*l,e.triangles+=(a.geometry.index?.count??o?.count??0)/3*l,t.add(a.geometry);for(const c of Array.isArray(a.material)?a.material:[a.material]){n.add(c);for(const h of Object.values(c))h&&typeof h=="object"&&h.isTexture&&i.add(h)}}),e.uniqueGeometries=t.size,e.materials=n.size,e.textures=i.size,e}function cy(s,e){const t=new Map;return s.traverse(n=>{const i=n;if(!i.isMesh)return;const r=Array.isArray(i.material)?i.material:[i.material];i.receiveShadow=!0,i.castShadow=!r.some(o=>o.transparent);const a=r.map(o=>{if(!o.transparent||!o.depthWrite)return o;let l=t.get(o);return l||(l=o.clone(),l.depthWrite=!1,t.set(o,l),e.push(l)),l});a.some((o,l)=>o!==r[l])&&(i.material=Array.isArray(i.material)?a:a[0])}),t.size}function hy(s,e){s.updateWorldMatrix(!0,!0);const t=s.parent.matrixWorld.clone().invert();return ry.map(n=>{const i=[];if(s.traverse(l=>{l.name===e[n]&&i.push(l)}),i.length!==1)throw new Error(`${n}: expected one ${e[n]}, found ${i.length}`);const r=i[0],a=new mt().setFromObject(r,!0);if(a.isEmpty())throw new Error(`${n}: wheel geometry is empty`);const o=r.getWorldPosition(new C).applyMatrix4(t);return o.y=a.min.y,{wheel:n,sourceNode:e[n],local:o.toArray(),world:[],groundY:null,gap:null}})}function wl(s,e,t,n){s.updateWorldMatrix(!0,!0);for(const r of e){const a=new C().fromArray(r.local).applyMatrix4(s.matrixWorld),o=t(a.x,a.z,n);r.world=a.toArray(),r.groundY=o!==null&&Number.isFinite(o)?o:null,r.gap=r.groundY===null?null:a.y-r.groundY}const i=e.filter(r=>r.groundY===null).map(r=>r.wheel);if(i.length)throw new Error(`No registered ground under tyre(s): ${i.join(", ")}; no Y=0 fallback used`)}function dy(s){const e=new C;for(const l of s)e.add(new C(l.world[0],l.groundY,l.world[2]));e.multiplyScalar(1/s.length);let t=0,n=0,i=0,r=0,a=0;for(const l of s){const c=l.world[0]-e.x,h=l.world[2]-e.z,d=l.groundY-e.y;t+=c*c,n+=h*h,i+=c*h,r+=c*d,a+=h*d}const o=t*n-i*i;if(Math.abs(o)<1e-10)throw new Error("Degenerate tyre footprint");return new C(-(r*n-a*i)/o,1,-(a*t-r*i)/o).normalize()}function uy(s,e){const t=new C(Math.cos(e),0,-Math.sin(e));t.addScaledVector(s,-t.dot(s)).normalize();const n=new C().crossVectors(t,s).normalize();return t.crossVectors(s,n).normalize(),new et().setFromRotationMatrix(new Re().makeBasis(t,s,n))}function fy(s,e,t,n,i){const r=n.yaw??0,a=n.scale??1;if(![n.x,n.z,r,a].every(Number.isFinite)||a<=0)throw new Error("Invalid vehicle placement");s.position.set(n.x,0,n.z),s.scale.setScalar(a),s.rotation.y=r;const o=i.probeFrom??5,l=i.maxSlopeDegrees??12;let c=0;for(let d=0;d<5;d++){wl(s,e,t,o);const u=dy(e);if(c=Math.acos(Math.min(1,u.y))*180/Math.PI,c>l)throw new Error(`Unsafe parking slope ${c.toFixed(2)}° exceeds ${l}°`);s.quaternion.copy(uy(u,r)),wl(s,e,t,o),s.position.y+=Math.max(...e.map(f=>-f.gap))+.002}wl(s,e,t,o);const h=Math.max(...e.map(d=>d.gap));if(h>(i.maxContactGap??.04))throw new Error(`Uneven ground: tyre gap ${h.toFixed(3)} m; choose a flatter placement`);return{status:"verified",maxGap:h,slopeDegrees:c}}function py(s,e,t=16/9){const n=e.getCenter(new C),i=e.getSize(new C).length()/2,r=50,a=r*Math.PI/360,o=Math.atan(Math.tan(a)*Math.max(.1,t)),l=i/Math.sin(Math.min(a,o))*1.15,c=new C(-1,.6,-1).normalize().applyQuaternion(s.quaternion);return{target:n,position:n.clone().addScaledVector(c,l),fov:r,distance:l,near:.05,far:2e3,suggestedOrbitMinDistance:Math.max(.5,i*.65)}}async function my(s,e,t,n="r34",i={}){const r=new Be;r.name="sports-poc:parked";const a=[],o=[],l=n==="all"?["r34","s15","rx7"]:[n];for(const d of l){const u=new Be;u.name=`sports-poc:${d}`,u.visible=!1;const f=oy[d],m=`/vehicles/sports-poc/${d}.glb`,x={id:d,url:m,label:f?.label??String(d),root:u,status:"error",stats:Sc(),contacts:[],contact:{status:"unverified",maxGap:null,slopeDegrees:null},transparentDepthWritePatches:0};o.push(x);try{if(!f)throw new Error(`Unknown sports car ${d}`);const g=await(typeof e=="function"?e(m):e.loadAsync(m)),p="scene"in g?g.scene:g,v=new Be;if(v.name=`${d}:source-basis`,v.rotation.y=f.basisYaw,v.add(p),u.add(v),u.updateMatrixWorld(!0),x.stats=ly(p),!x.stats.meshes||!x.stats.triangles)throw new Error("Asset has no triangle meshes");const T=new mt().setFromObject(u,!0),b=T.getSize(new C);if(x.sourceBounds=Qd(T),![b.x,b.y,b.z].every(Number.isFinite)||b.x<3||b.x>6.5||b.z<1.2||b.z>3||b.y<.8||b.y>2.5)throw new Error(`Unexpected metre-scale vehicle bounds ${b.toArray().map(E=>E.toFixed(3)).join(" × ")}; source left unchanged`);x.contacts=hy(v,f.wheels),x.transparentDepthWritePatches=cy(p,a),x.contact=fy(u,x.contacts,t,i.placements?.[d]??ay[d],i);const y=new mt().setFromObject(u,!0);x.worldBounds=Qd(y),x.camera=py(u,y,i.cameraAspect),x.status="ready",u.visible=!0}catch(g){x.error=g instanceof Error?g.message:String(g)}r.add(u)}s.add(r),r.updateMatrixWorld(!0);const c=o.filter(d=>d.status==="ready").length,h=Sc();for(const d of o)for(const u of Object.keys(h))h[u]+=d.stats[u];return{group:r,cars:o,stats:h,status:c===o.length?"ready":c?"partial":"error",errors:o.filter(d=>d.error).map(d=>`${d.id}: ${d.error}`),contact:o.flatMap(d=>d.contacts),dispose(){r.removeFromParent();for(const d of a)d.dispose()}}}function gy(s,e,t,n=4/3){if(!t){const l=2*Math.atan(Math.tan(65*Math.PI/360)*Math.max(1,1.3333333333333333/Math.max(.1,n)))*180/Math.PI;return{center:s.getCenter(new C),distance:4.2,shoulder:-2.6,fov:l}}const r=s.clone();e&&r.union(e);const a=r.getSize(new C).length()/2,o=Math.atan(Math.tan(65*Math.PI/360)*Math.min(1,Math.max(.1,n)));return{center:r.getCenter(new C),distance:Math.max(4.2,a/Math.sin(o)+.4),shoulder:0,fov:65}}const Mo={adult:{url:"/characters/tripo-person.glb",bytes:3962392,sha:"8bb99e0ea50ef5cebb09354acd5a8592f609ed8d4b401b73f5b286ef50f71743"},extra:{url:"/characters/combat/adult-extra.glb",bytes:3588480,sha:"bc348692e7716f9cef09cb41ce494599bbdcf862cc857ef2007938612dea001d"},npc:{url:"/characters/combat/fitness.glb",bytes:4162364,sha:"8758d2f890b18ef4f4c417872c868005f186ee57104824dce526081f67099582"}};function So(s){const e=[];return s.traverse(t=>{t.isSkinnedMesh&&e.push(t)}),e}const zn=(s,e)=>s.length===e.length&&Array.from(s).every((t,n)=>t===e[n]);function by(s,e){const t=So(s.scene),n=So(e.scene);if(t.length!==1||n.length!==1)throw Error("Expected one adult skin");const i=t[0],r=n[0],a=i.skeleton,o=r.skeleton;if(a.bones.length!==o.bones.length||!zn(i.bindMatrix.elements,r.bindMatrix.elements)||!zn(i.bindMatrixInverse.elements,r.bindMatrixInverse.elements))throw Error("Adult bind mismatch");const l=(d,u)=>{let f=u.parent;for(;f&&!d.skeleton.bones.includes(f);)f=f.parent;return f?d.skeleton.bones.indexOf(f):-1};a.bones.forEach((d,u)=>{const f=o.bones[u];if(d.name!==f.name||l(i,d)!==l(r,f)||!zn(d.position.toArray(),f.position.toArray())||!zn(d.quaternion.toArray(),f.quaternion.toArray())||!zn(d.scale.toArray(),f.scale.toArray())||!zn(a.boneInverses[u].elements,o.boneInverses[u].elements))throw Error("Adult skeleton mismatch")});const c=Object.keys(i.geometry.attributes).sort();if(JSON.stringify(c)!==JSON.stringify(Object.keys(r.geometry.attributes).sort()))throw Error("Adult attribute set mismatch");for(const d of c){const u=i.geometry.getAttribute(d),f=r.geometry.getAttribute(d);if(u.itemSize!==f.itemSize||u.normalized!==f.normalized||!zn(u.array,f.array))throw Error("Adult geometry mismatch: "+d)}if(!i.geometry.index||!r.geometry.index||!zn(i.geometry.index.array,r.geometry.index.array))throw Error("Adult indices mismatch");const h=["hit_to_body_02","fall"].map(d=>{const u=e.animations.filter(f=>f.name===d);if(u.length!==1)throw Error("Missing/duplicate extra clip");return u[0]});if(e.animations.length!==2||s.animations.some(d=>h.some(u=>u.name===d.name)))throw Error("Unexpected adult clip set");for(const d of h)for(const u of d.tracks){const f=Ge.parseTrackName(u.name),m=Ge.findNode(s.scene,f.nodeName);if(!a.bones.includes(m))throw Error("Unverified adult track binding")}return[...s.animations,...h.map(d=>d.clone())]}function _y(s,e){if(e!==Mo.npc.sha)throw Error("Unapproved NPC source");const t=So(s);if(t.length!==1)throw Error("Expected one NPC skin");const n=t[0],i=n.geometry,r=i.getAttribute("position"),a=i.getAttribute("skinIndex"),o=i.getAttribute("skinWeight");if(r.count!==17574||n.skeleton.bones.length!==66||!i.index||i.index.count!==29696*3)throw Error("Unexpected NPC topology");const l=n.skeleton.bones.map((u,f)=>({b:u,i:f})).filter(({b:u})=>u.name.toLowerCase().includes("neutral_bone"));if(l.length!==1||a.getX(12066)!==l[0].i||o.getX(12066)!==1||o.getY(12066)!==0||o.getZ(12066)!==0||o.getW(12066)!==0)throw Error("Unexpected NPC source weights");const c=[r.getX(12066),r.getY(12066),r.getZ(12066)];if(!c.every(Number.isFinite)||!zn(c,[r.getX(12067),r.getY(12067),r.getZ(12067)]))throw Error("NPC duplicate coordinates mismatch");const h=[a.getX(12067),a.getY(12067),a.getZ(12067),a.getW(12067)],d=[o.getX(12067),o.getY(12067),o.getZ(12067),o.getW(12067)];if(!zn(h,[41,42,0,0])||!zn(d,[.5882353186607361,.4117647111415863,0,0]))throw Error("Unexpected NPC duplicate weights");return n.geometry=i.clone(),n.geometry.getAttribute("skinIndex").setXYZW(12066,...h),n.geometry.getAttribute("skinWeight").setXYZW(12066,...d),{vertex:12066,donor:12067,coords:c,indices:h,weights:d,sourceHash:e}}function eu(s){const t=new DataView(s).getUint32(12,!0),n=JSON.parse(new TextDecoder().decode(new Uint8Array(s,20,t))),i=28+t;return{materials:n.materials.map(({name:r,...a})=>a),textures:n.textures,images:n.images.map(r=>{const a=n.bufferViews[r.bufferView];return new Uint8Array(s,i+(a.byteOffset??0),a.byteLength)})}}async function xy(){const s=await Promise.all(Object.values(Mo).map(async a=>{const o=await fetch(aa(a.url));if(!o.ok)throw Error("Combat input unavailable: "+o.status);const l=await o.arrayBuffer(),c=Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",l))).map(h=>h.toString(16).padStart(2,"0")).join("");if(l.byteLength!==a.bytes||c!==a.sha)throw Error("Combat input integrity mismatch");return l})),e=eu(s[0]),t=eu(s[1]);if(JSON.stringify(e.materials)!==JSON.stringify(t.materials)||JSON.stringify(e.textures)!==JSON.stringify(t.textures)||e.images.length!==t.images.length||e.images.some((a,o)=>!zn(a,t.images[o])))throw Error("Adult material/texture mismatch");const n=new ra,i=await Promise.allSettled(s.map(a=>n.parseAsync(a,""))),r=i.flatMap(a=>a.status==="fulfilled"?[a.value]:[]);try{if(i.some(d=>d.status==="rejected"))throw Error("Combat GLTF parsing failed");const[a,o,l]=r,c=by(a,o),h=_y(l.scene,Mo.npc.sha);return{adult:a,extra:o,npc:l,clips:c,patch:h}}catch(a){throw r.forEach(o=>Li(o.scene)),a}}class tu extends xf{extra;bodyContact={probes:0,vertices:0,totalMs:0,minY:0,lift:0};selected=null;token="";bodyKey="";bodyLift=0;bodyBounds=new mt;falling=!1;meshes;constructor(e,t){super(e,t),this.meshes=So(e);const n=i=>{const r=t.filter(a=>a.name===i);if(r.length!==1)throw Error("Missing combat clip "+i);return this.mixer.clipAction(r[0].clone()).setLoop(co,1)};this.extra={hit_to_body_02:n("hit_to_body_02"),fall:n("fall")},Object.values(this.extra).forEach(i=>i.clampWhenFinished=!0),this.mixer.stopAllAction()}durations(){return{attack:this.actions.box_01.getClip().duration,hit:this.extra.hit_to_body_02.getClip().duration,fall:this.extra.fall.getClip().duration}}resetPose(){this.mixer.stopAllAction(),this.selected=null,this.token="",this.bodyKey="",this.falling=!1,this.bodyBounds.makeEmpty(),this.visual.position.y=this.visualBaseY}pose(e,t,n=0){const i=["fall","down","dead"].includes(e.phase);this.falling=i;const r=i?"fall":e.phase==="hit"?"hit_to_body_02":e.phase==="attack"?"box_01":e.phase==="walk"||e.phase==="run"?e.phase:"idle",a=r==="fall"||r==="hit_to_body_02"?this.extra[r]:this.actions[r],o=r==="box_01"||r==="hit_to_body_02"?r+e.cycle:r;if(o!==this.token){const l=this.selected;a.reset().setEffectiveWeight(1).setEffectiveTimeScale(1).play(),l&&l!==a&&l.crossFadeTo(a,.15,!1),this.selected=a,this.token=o}if(r==="walk"||r==="run"){const l=this.referenceSpeeds[r];a.setEffectiveTimeScale(l?Math.min(4,Math.max(.1,n/l)):1)}if(this.mixer.update(t),(r==="fall"||r==="hit_to_body_02"||r==="box_01")&&(a.time=i&&e.phase!=="fall"?a.getClip().duration:Math.min(e.elapsed,a.getClip().duration),this.mixer.update(0)),i){const l=[e.phase==="fall"?e.elapsed:"terminal",...this.root.position.toArray(),this.root.rotation.y].join(":");l!==this.bodyKey?(this.guardBody(),this.bodyKey=l,this.bodyLift=this.bodyContact.lift):this.visual.position.y=this.visualBaseY+this.bodyLift}else this.bodyKey="",this.guardSoles()}worldBounds(){return this.root.updateMatrixWorld(!0),(this.falling&&!this.bodyBounds.isEmpty()?this.bodyBounds.clone():new mt(new C(-.375,0,-.325),new C(.375,1.8,.325))).applyMatrix4(this.root.matrixWorld)}guardBody(){const e=performance.now();this.visual.position.y=this.visualBaseY,this.root.updateMatrixWorld(!0);const t=new Re().copy(this.root.matrixWorld).invert(),n=new Re,i=new C;let r=1/0,a=0;this.bodyBounds.makeEmpty();for(const l of this.meshes){l.skeleton.update(),n.multiplyMatrices(t,l.matrixWorld);for(let c=0;c<l.geometry.attributes.position.count;c++)l.getVertexPosition(c,i).applyMatrix4(n),r=Math.min(r,i.y),this.bodyBounds.expandByPoint(i),a++}const o=Number.isFinite(r)?Math.max(0,-r):0;this.visual.position.y+=o,this.bodyBounds.translate(new C(0,o,0)),this.bodyContact.probes++,this.bodyContact.vertices=a,this.bodyContact.minY=r,this.bodyContact.lift=o,this.bodyContact.totalMs+=performance.now()-e}}const oi={reach:1.5,facingCos:.5,vertical:.6,windowStart:.54,windowEnd:.66,downSeconds:60,hiddenSeconds:.25,chaseRadius:8,tether:6,speed:1.6},Va=(s,e)=>Math.hypot(s.x-e.x,s.z-e.z),Ur=s=>({...s}),Lr=(s,e)=>({hp:s,hitsLanded:0,maxHp:s,phase:"idle",elapsed:0,previousElapsed:0,cycle:0,spent:!1,protectedUntil:0,cooldown:0,position:Ur(e),yaw:0}),Wa=s=>["idle","walk","run"].includes(s.phase);class vy{constructor(e,t,n,i={player:0,npc:0}){this.durations=n;for(const r of Object.values(n))for(const a of Object.values(r))if(!Number.isFinite(a)||a<=0)throw Error("Invalid combat clip duration");this.player=Lr(10,e),this.npc=Lr(5,t),this.spawn=Ur(t),this.playerSpawn=Ur(e),this.spawnYaw=i.npc,this.playerYaw=i.player,this.npc.yaw=i.npc,this.player.yaw=i.player}durations;player;npc;spawn;playerSpawn;spawnYaw;playerYaw;hostile=!1;returning=!1;activeSeconds=0;last=null;wasActive=!1;pause(){this.last=null,this.wasActive=!1}canPlayerMove(e=!1){return Wa(this.player)&&!e}restart(){Object.assign(this.player,Lr(10,this.playerSpawn)),Object.assign(this.npc,Lr(5,this.spawn)),this.npc.yaw=this.spawnYaw,this.player.yaw=this.playerYaw,this.hostile=!1,this.returning=!1,this.activeSeconds=0,this.pause()}enter(e,t){e.phase=t,e.elapsed=0,e.previousElapsed=0,e.cycle++,e.spent=!1}eligible(e,t,n){const i=Va(e.position,t.position);return t.hp<=0||["fall","down","dead","hidden"].includes(t.phase)||this.activeSeconds<t.protectedUntil||i>oi.reach||Math.abs(e.position.y-t.position.y)>oi.vertical?!1:(i<1e-6?1:((t.position.x-e.position.x)*Math.sin(e.yaw)+(t.position.z-e.position.z)*Math.cos(e.yaw))/i)>=oi.facingCos&&n.clear(e.position,t.position)}strike(e,t,n){e.phase!=="attack"||e.spent||e.elapsed<oi.windowStart||e.previousElapsed>oi.windowEnd||!this.eligible(e,t,n)||(e.spent=!0,e.hitsLanded++,t.hp--,e===this.player&&(this.hostile=!0),t.hp===0?this.enter(t,"fall"):(t.phase!=="hit"&&this.enter(t,"hit"),t.protectedUntil=this.activeSeconds+(t===this.player?this.durations.player.hit:this.durations.npc.hit)+.6))}progress(e,t,n,i){e.cooldown=Math.max(0,e.cooldown-n),e.previousElapsed=e.elapsed,e.elapsed+=e.phase==="down"||e.phase==="hidden"?i:n,e.phase==="attack"&&e.elapsed>=t.attack?(this.enter(e,"idle"),e.cooldown=.4):e.phase==="hit"&&e.elapsed>=t.hit?this.enter(e,"idle"):e.phase==="fall"&&e.elapsed>=t.fall?this.enter(e,e===this.player?"dead":"down"):e.phase==="down"&&e.elapsed>=oi.downSeconds?this.enter(e,"hidden"):e.phase==="hidden"&&e.elapsed>=oi.hiddenSeconds&&(Object.assign(e,Lr(5,this.spawn)),e.yaw=this.spawnYaw,this.hostile=!1,this.returning=!1)}tick(e,t,n){if(!Number.isFinite(e))throw Error("Invalid combat clock");const i=t.active&&this.player.phase!=="dead",r=i&&this.wasActive&&this.last!==null?Math.max(0,e-this.last):0;if(this.last=e,this.wasActive=i,!i)return 0;const a=Math.min(.1,r);if(this.activeSeconds+=r,this.player.position=Ur(t.player),Wa(this.player)&&(this.player.yaw=t.yaw),this.progress(this.player,this.durations.player,a,r),this.progress(this.npc,this.durations.npc,a,r),this.player.phase==="dead")return a;if(Wa(this.player)&&(t.attack&&this.player.cooldown===0?this.enter(this.player,"attack"):this.player.phase=t.moving?t.running?"run":"walk":"idle"),this.hostile&&Wa(this.npc)){(Va(this.player.position,this.npc.position)>oi.chaseRadius||Va(this.player.position,this.spawn)>oi.tether)&&(this.returning=!0);const l=this.returning?this.spawn:this.player.position,c=Va(this.npc.position,l);if(this.returning&&c<.2)this.hostile=!1,this.returning=!1,this.npc.phase="idle";else if(this.npc.yaw=Math.atan2(l.x-this.npc.position.x,l.z-this.npc.position.z),!this.returning&&c<=1.35&&this.npc.cooldown===0&&this.eligible(this.npc,this.player,n))this.enter(this.npc,"attack");else if(c>(this.returning?.15:1.2)){const h={x:(l.x-this.npc.position.x)/c,y:0,z:(l.z-this.npc.position.z)/c},d=n.step(this.npc.position,h,Math.min(oi.speed*a,Math.max(0,c-(this.returning?0:1.2))));d?(this.npc.position=Ur(d),this.npc.phase="walk"):this.npc.phase="idle"}else this.npc.phase="idle"}return this.strike(this.player,this.npc,n),this.strike(this.npc,this.player,n),a}}const cs=s=>new C(s.x,s.y,s.z);function yy(){const s=document.createElement("section");return s.id="combat-poc",s.style.cssText="position:fixed;left:12px;bottom:42px;padding:10px;background:#111d;color:white;z-index:10;font:14px sans-serif;max-width:420px",s.textContent="NPC戦闘PoC: 読み込み中…",document.body.append(s),s}class My{constructor(e,t,n,i,r,a=null){this.player=e,this.npc=t,this.controls=n,this.scene=i,this.panel=r,this.assetInspection=a,r.replaceChildren(this.text,this.restart),this.restart.textContent="再スタート（両者を初期化）",this.restart.hidden=!0,this.restart.addEventListener("click",()=>this.reset(),{signal:this.events.signal});const o=()=>{this.state?.pause(),this.pausedReason="unlock-or-blur"};addEventListener("blur",o,{signal:this.events.signal}),document.addEventListener("visibilitychange",()=>{document.hidden&&(o(),this.pausedReason="hidden")},{signal:this.events.signal}),n.walk.addEventListener("unlock",o),this.events.signal.addEventListener("abort",()=>n.walk.removeEventListener("unlock",o))}player;npc;controls;scene;panel;assetInspection;get root(){return this.player.root}state=null;initialWalkPitch;disabled=!1;pausedReason="initial";gameOverShown=!1;events=new AbortController;text=document.createElement("div");restart=document.createElement("button");initialize(){const e=this.root.position.clone();let t=null;for(const[i,r]of[[0,-1],[1,0],[-1,0],[0,1]]){const a=e.clone().add(new C(0,1.6,0)),o=new C(i,0,r),l=this.controls.stepTo(a,o,3);if(l){t=l.add(new C(0,-1.6,0));break}}if(!t){this.disabled=!0,this.initialWalkPitch=void 0,this.player.actions.idle.play(),this.npc.dispose(),this.text.textContent="NPC配置に安全な地面がありません。従来の人物PoCを継続します。";return}const n=Math.atan2(e.x-t.x,e.z-t.z);this.state=new vy(e,t,{player:this.player.durations(),npc:this.npc.durations()},{player:this.root.rotation.y,npc:n}),this.npc.root.position.copy(t),this.npc.root.rotation.y=n,this.scene.add(this.npc.root),this.initialWalkPitch=-.25,this.controls.refreshActorCamera()}canRelocate(){return!this.state||this.state.canPlayerMove()}cameraFrame(e){if(this.disabled||!this.state)return;const t=!!this.state&&[this.state.player.phase,this.state.npc.phase].some(n=>["fall","down","dead"].includes(n));return gy(this.player.worldBounds(),this.state?.npc.phase==="hidden"?null:this.npc.worldBounds(),t,e)}canMove(e){return this.disabled||!this.state||this.state.canPlayerMove(e.boxPressed)}update(e,t){if(this.disabled||!this.state){this.player.update(e,t);return}this.pausedReason=document.hidden?"hidden":t.active?null:this.pausedReason??"controls-inactive";const n=this.state,i=this.npc.root.position.clone(),r=n.tick(performance.now()/1e3,{active:t.active&&!document.hidden,attack:t.boxPressed,moving:t.moving,running:t.running,player:this.root.position,yaw:t.direction.lengthSq()?Math.atan2(t.direction.x,t.direction.z):this.root.rotation.y},{clear:(o,l)=>this.controls.clearBetweenFeet(cs(o),cs(l)),step:(o,l,c)=>{const h=this.controls.stepTo(cs(o).add(new C(0,1.6,0)),cs(l),c);return h?h.add(new C(0,-1.6,0)):null}});this.root.rotation.y=n.player.yaw,this.npc.root.position.copy(cs(n.npc.position)),this.npc.root.rotation.y=n.npc.yaw,this.npc.root.visible=n.npc.phase!=="hidden",this.player.pose(n.player,r,t.horizontalSpeed),this.npc.pose(n.npc,r,r>0?Math.hypot(i.x-this.npc.root.position.x,i.z-this.npc.root.position.z)/r:0),this.restart.hidden=n.player.phase!=="dead",n.player.phase==="dead"&&(this.pausedReason="game-over"),n.player.phase==="dead"&&!this.gameOverShown&&(this.gameOverShown=!0,this.controls.walk.unlock());const a=n.npc.phase==="down"?` / 再出現まで ${Math.ceil(Math.max(0,60-n.npc.elapsed))} active秒`:"";this.text.textContent=`主人公 ${n.player.hp}/10 [${n.player.phase}]・NPC ${n.npc.hp}/5 [${n.npc.phase}]${a}
${n.player.phase==="dead"?"ゲームオーバー（暫定）":t.active?"B:手動攻撃 / WASD・Shift / Esc:停止":"停止中。地上歩行で画面をクリックして再開"}
NPCだけ自動反撃。解除・非表示中は戦闘と60秒時計を停止。`}snapshot(){return this.state?JSON.parse(JSON.stringify({status:"loaded",player:this.state.player,npc:this.state.npc,spawn:this.state.spawn,hostile:this.state.hostile,returning:this.state.returning,activeSeconds:this.state.activeSeconds,downRemaining:this.state.npc.phase==="down"?Math.max(0,60-this.state.npc.elapsed):null,pausedReason:this.pausedReason,assetInspection:this.assetInspection,sourceHashes:Object.fromEntries(Object.entries(Mo).map(([e,t])=>[e,t.sha])),bodyContact:{player:this.player.bodyContact,npc:this.npc.bodyContact}})):{status:this.disabled?"disabled":"loading",pausedReason:this.pausedReason}}reset(){this.state&&(this.state.restart(),this.controls.resetActorPosition(cs(this.state.playerSpawn)),this.player.resetPose(),this.npc.resetPose(),this.root.rotation.y=this.state.player.yaw,this.npc.root.position.copy(cs(this.state.spawn)),this.npc.root.rotation.y=this.state.spawnYaw,this.npc.root.visible=!0,this.restart.hidden=!0,this.gameOverShown=!1,this.pausedReason="restart-awaiting-lock")}dispose(){this.events.abort(),this.player.dispose(),this.npc.dispose(),this.panel.remove()}}async function Sy(s,e,t){const n=await xy();let i,r;try{return i=new tu(n.adult.scene,n.clips),r=new tu(n.npc.scene,n.npc.animations),new My(i,r,s,e,t,{patch:n.patch,adult:i.inspection,npc:r.inspection})}catch(a){throw i?i.dispose():Li(n.adult.scene),r?r.dispose():Li(n.npc.scene),a}finally{Li(n.extra.scene)}}const wy=new Set(["d16-inferred-hoarding","d17-station-bridge-additions","d20-neighborhood-pack","d21-neighborhood-pack","d21-roof-bridge-additions","d22-mufg-trust","d22-tokyo106","d22-district-pack","d23-district-pack","d22-hinaga-facade"]);function Ey(s){return!wy.has(s)}function Ty(s){const e=[];return s.some(t=>t.startsWith("d12-"))&&e.push("D12：店頭・残り外壁・向き・接地は推定を含み、写真の年代は混在。区画全体の精密再現ではありません"),s.some(t=>t.startsWith("d16-"))&&e.push("D16：窓・内装・接地は推定、写真の年代は混在。工事囲いの年月・境界は未確定で、歩行障害物には採用していません"),s.some(t=>t.startsWith("d17-"))&&e.push("D17：マークシティ外装・駅連絡橋補完の配置と寸法は推定。橋の追加部材は見た目のみで、通行・構造安全を認定していません"),s.includes("d18-neighborhood-pack")&&e.push("D18：28棟の外装・内装・向き・接地は推定を含み、写真年代は混在。区画全体の精密再現ではありません"),s.some(t=>t.startsWith("d19-"))&&e.push("D19：外装・内装・接合・高さは推定を含みます。写真年代は混在し、スクエアB低層は後年の候補を参考にした未確認形状です。フクラスの階段・接続デッキは外観の推定で、新しい歩行面ではありません。区画全体の精密再現ではありません"),s.includes("d20-neighborhood-pack")&&e.push("D20：新南口・橋・上屋・サクラ低層外装・周辺棟は外装と標高を推定。既存地形に接地調整していますが、2025年10月の状態や接続高さは未確認。追加の橋・床は歩行面として採用していません"),s.includes("d21-neighborhood-pack")&&e.push("D21：周辺3棟と小区画の外装・向き・接地は推定で、年代未確認。駅の既存模型は維持し、SKY柵・駅屋根端・橋端は外観のみで新しい歩行面ではありません。既存模型と交差する周辺5候補、西側デッキ・銀座線東端・階段は未採用。区画全体の完成ではありません"),s.includes("d22-mufg-trust")&&e.push("D22：MUFG信託銀行棟の外装・年代・標高は推定。既存地形に合わせ足元のみ補正し、見た目のみで歩行障害物には追加していません"),s.includes("d22-tokyo106")&&e.push("D22：第106東京ビルの正面は観察に基づく近似、側面・屋根・基礎は推定。写真年代・配置標高は未確認。見た目のみで歩行障害物に追加していません"),(s.includes("d22-district-pack")||s.includes("d22-hinaga-facade")||s.includes("d22-kiosk"))&&e.push("D22：Wako・伊東の正面は観察に基づく近似、補完外形・Gloria・日永外装・小型店舗は推定。年代・配置を含む保留資料は未反映。Wakoの非入口端の段差は通行を保証しません。日永の既存壁は保持。小型店舗は閉じたガラス壁の障害物で、入口や新しい歩行床ではありません。区画全体の完成ではありません"),s.some(t=>t.startsWith("d23-"))&&e.push("D23：宮益坂下北側の観察部分2面と推定上部外装6棟を部分反映。地上店舗・屋根・年代・接続が未確定の資料は保留。B3上屋は四隅柱の推定案で、駅入口や通行・構造安全を認定するものではありません。新しい歩行床は追加していません。区画全体の完成ではありません"),s.includes("d24-district-pack")&&e.push("D24：推定外装3棟を部分反映。外装・年代・標高・入口側壁は推定で、残る29資料は保留。既存地形を維持し、新しい歩行床や通行可能な入口は追加していません。区画全体の完成ではありません"),s.includes("d27-naruse-inferred")&&e.push("D27：ナルセビル候補の推定外形と接地基礎を反映。残る22資料は保留。写真による外装・年代の一致は未確認。ガラス面は通行可能な入口ではなく、新しい階段・歩行床は追加していません。区画全体の完成ではありません"),s.includes("d28-w136730028-inferred")&&e.push("D28：名称未確認の建物候補1件の推定外形と接地基礎を反映。残る21資料は保留。写真による外装・年代の一致は未確認。ガラス面は通行可能な入口ではなく、新しい階段・歩行床は追加していません。区画全体の完成ではありません"),s.includes("d26-w138589843-inferred")&&e.push("D26：名称未同定1棟の推定外形と接地基礎を反映。残る20資料は保留。撮影年代・店先の実態は未確認。ガラス面は通行可能な入口ではなく、新しい階段・歩行床は追加していません。区画全体の完成ではありません"),s.includes("d25-pola-upper")&&e.push("D25：ポーラ渋谷ビルの推定上部外装だけを部分反映。地上店舗と残る24資料は保留。年代未確認。既存壁と当たり判定を維持し、新しい歩行床や入口は追加していません。区画全体の完成ではありません"),s.includes("d29-nagasaki-inferred")&&e.push("D29：way/136730024の外装・入口側面・足元は推定。浅い店舗の側面は開いたままで、通行可能な入口ではなく、新しい階段・歩行床は追加していません。年代未確認、残る7資料は保留。区画全体の完成ではありません"),e}var Ay=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var v=new Uint8Array(p.length),T=0;T<p.length;++T){var b=p.charCodeAt(T);v[T]=b>96?b-97:b>64?b-39:b+4}for(var y=0,T=0;T<p.length;++T)v[y++]=v[T]<60?n[v[T]]:(v[T]-60)*64+v[++T];return v.buffer.slice(0,y)}function l(p,v,T,b,y,E,R){var _=p.exports.sbrk,w=b+3&-4,P=_(w*y),L=_(E.length),F=new Uint8Array(p.exports.memory.buffer);F.set(E,L);var k=v(P,b,y,L,E.length);if(k==0&&R&&R(P,w,y),T.set(F.subarray(P,P+b*y)),_(P-_(0)),k!=0)throw new Error("Malformed buffer data: "+k)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],u=0;function f(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(T){var b=T.data;v.pending-=b.count,v.requests[b.id][b.action](b.value),delete v.requests[b.id]},v}function m(p){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+l.toString()+g.toString(),T=new Blob([v],{type:"text/javascript"}),b=URL.createObjectURL(T),y=d.length;y<p;++y)d[y]=f(b);for(var y=p;y<d.length;++y)d[y].object.postMessage({});d.length=p,URL.revokeObjectURL(b)}function x(p,v,T,b,y){for(var E=d[0],R=1;R<d.length;++R)d[R].pending<E.pending&&(E=d[R]);return new Promise(function(_,w){var P=new Uint8Array(T),L=++u;E.pending+=p,E.requests[L]={resolve:_,reject:w},E.object.postMessage({id:L,count:p,size:v,source:P,mode:b,filter:y},[P.buffer])})}function g(p){var v=p.data;self.ready.then(function(T){if(!v.id)return self.close();try{var b=new Uint8Array(v.count*v.size);l(T,T.exports[v.mode],b,v.count,v.size,v.source,T.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:b},[b.buffer])}catch(y){self.postMessage({id:v.id,count:v.count,action:"reject",value:y})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,v,T,b,y){l(r,r.exports.meshopt_decodeVertexBuffer,p,v,T,b,r.exports[c[y]])},decodeIndexBuffer:function(p,v,T,b){l(r,r.exports.meshopt_decodeIndexBuffer,p,v,T,b)},decodeIndexSequence:function(p,v,T,b){l(r,r.exports.meshopt_decodeIndexSequence,p,v,T,b)},decodeGltfBuffer:function(p,v,T,b,y,E){l(r,r.exports[h[y]],p,v,T,b,r.exports[c[E]])},decodeGltfBufferAsync:function(p,v,T,b,y){return d.length>0?x(p,v,T,h[b],c[y]):a.then(function(){var E=new Uint8Array(p*v);return l(r,r.exports[h[b]],E,p,v,T,r.exports[c[y]]),E})}}})();const wc="@root",Ry=/^\d{4}-\d{2}(-\d{2})?$/,nu=s=>typeof s=="number"&&Number.isFinite(s);function Cy(s){const e=[];if(s.version!==1&&e.push(`unsupported version ${String(s.version)}`),!Array.isArray(s.parts)||s.parts.length===0)return[...e,"no parts"];const t=new Set,n=new Set,i=new Map;for(const r of s.parts){const a=`part ${r.id??"?"}`;r.id?t.has(r.id)?e.push(`${a}: duplicate id`):t.add(r.id):e.push("part without id"),r.file===wc?r.frame?.kind!=="host"&&e.push(`${a}: @root must use the host frame`):!r.file||/[\\/]|\.\./.test(r.file)?e.push(`${a}: file must be a plain name`):r.file===`${s.building}.glb`?e.push(`${a}: the main GLB is loaded anyway; use "${wc}"`):n.has(r.file)&&!r.group&&e.push(`${a}: file ${r.file} is already used by another part`),n.add(r.file),r.label||e.push(`${a}: label missing`),Ry.test(r.date??"")||e.push(`${a}: date must be YYYY-MM[-DD]`),["measured","photo","inferred"].includes(r.confidence)||e.push(`${a}: confidence`),(!Array.isArray(r.sources)||r.sources.length===0)&&e.push(`${a}: sources missing`),r.mount||e.push(`${a}: mount missing`);for(const o of["u","v","z","yaw_deg"])r[o]!==void 0&&!nu(r[o])&&e.push(`${a}: ${o} not finite`);if(r.frame?.kind==="edge"){const{a:o,b:l}=r.frame;[...o,...l].every(nu)?Math.hypot(l[0]-o[0],l[1]-o[1])<1e-6&&e.push(`${a}: edge has zero length`):e.push(`${a}: edge points not finite`)}else r.frame?.kind!=="host"&&e.push(`${a}: unknown frame`);r.group&&r.enabled!==!1&&i.set(r.group,(i.get(r.group)??0)+1)}for(const[r,a]of i)a>1&&e.push(`group ${r}: ${a} enabled alternatives (load exactly one)`);return e}function Py(s){const e=s.u??0,t=s.v??0,n=s.z??0,i=(s.yaw_deg??0)*Math.PI/180;if(s.frame.kind==="host")return{position:[e,n,-t],yaw:i};const[r,a]=s.frame.a,[o,l]=s.frame.b,c=Math.hypot(o-r,l-a),h=(o-r)/c,d=(l-a)/c,u=d,f=-h,m=r+h*e+u*t,x=a+d*e+f*t;return{position:[m,n,-x],yaw:Math.atan2(d,h)+i}}function Ly(s,e){const t=new Be;t.name=`part:${e.id}`;const n=Py(e);return t.position.set(...n.position),t.rotation.y=n.yaw,t.add(s),t}const Dy=15;function sh(s){return s.groundElevationTP===void 0?0:s.groundElevationTP-Dy}function wo(s){return!!(s.arcMid&&s.arcNormal&&s.arcEnds&&s.floodlights&&s.cameraQ032)}function Ec(s){const[e,t,n,i]=s.planBounds;return[(e+n)/2,(t+i)/2]}function Vt(s,e=1){const t=[];let n=0,i=0;s.traverse(a=>{const o=a;if(!o.isMesh)return;n++;const l=o.geometry.getAttribute("position");if(!l||l.count===0){t.push(`${o.name}: empty mesh`);return}const c=l.array;for(let d=0;d<c.length;d++)if(!Number.isFinite(c[d])){t.push(`${o.name}: non-finite vertex`);break}i+=o.geometry.index?o.geometry.index.count/3:l.count/3,(Array.isArray(o.material)?o.material:[o.material]).some(d=>!d)&&t.push(`${o.name}: missing material`)}),n===0&&t.push("no meshes"),i===0&&t.push("no triangles");const r=new mt().setFromObject(s).getSize(new C);return r.length()>e&&r.length()<5e3||t.push(`implausible size ${r.toArray().map(a=>a.toFixed(1)).join("x")} m`),t}function Iy(s){let e=0,t=0;const n=new Set;return s.traverse(i=>{const r=i;if(!r.isMesh)return;e++;const a=r.geometry.getAttribute("position");t+=r.geometry.index?r.geometry.index.count/3:a.count/3,(Array.isArray(r.material)?r.material:[r.material]).forEach(o=>n.add(o))}),{meshes:e,triangles:Math.round(t),materials:n.size}}function Fy(s){const e=new Be;e.name=`${s}:placeholder`;const t=new Lt(new dr(20,40,20),new Vn({color:16724821,wireframe:!0}));return t.position.y=20,e.add(t),e}async function Ny(s,e,t="/buildings"){try{const[n,i,r,a]=await Promise.all([e.loadGlb(`${t}/${s}/${s}.glb`),e.loadJson(`${t}/${s}/viewer.json`),e.loadJson(`${t}/${s}/emissive_day.json`),e.loadJson(`${t}/${s}/emissive_night.json`)]),o=Vt(n);if(o.length)throw new Error(`asset check failed: ${o.slice(0,4).join("; ")}`);const l=new Be;l.name=s,l.position.y=sh(i),l.add(n);const c=[],h=[];if(await Promise.all(Object.entries(i.layers??{}).map(async([d,u])=>{try{const f=await e.loadGlb(`${t}/${s}/${u}`),m=Vt(f,.01);if(m.length)throw new Error(m.slice(0,2).join("; "));f.name=`${s}:${d}`,l.add(f),c.push(d)}catch(f){h.push(`${d}: ${f instanceof Error?f.message:String(f)}`)}})),i.placements)try{const d=await e.loadJson(`${t}/${s}/${i.placements}`),u=Cy(d);if(u.length)throw new Error(u.slice(0,3).join("; "));await Promise.all(d.parts.filter(f=>f.enabled!==!1).map(async f=>{if(f.file===wc){c.push(f.id);return}try{const m=await e.loadGlb(`${t}/${s}/${f.file}`),x=Vt(m,.01);if(x.length)throw new Error(x.slice(0,2).join("; "));l.add(Ly(m,f)),c.push(f.id)}catch(m){h.push(`${f.id}: ${m instanceof Error?m.message:String(m)}`)}}))}catch(d){h.push(`placements: ${d instanceof Error?d.message:String(d)}`)}return{id:s,ok:!0,root:l,hints:i,emissive:{day:r,night:a},stats:Iy(l),layers:c,layerErrors:h}}catch(n){return{id:s,ok:!1,root:Fy(s),error:n instanceof Error?n.message:String(n)}}}function ky(s,e){s.traverse(t=>{const n=t;if(n.isMesh)for(const i of Array.isArray(n.material)?n.material:[n.material]){const r=i,a=e[r.name];!a||!("emissiveIntensity"in r)||(r.emissiveIntensity=a.estr,a.estr>0&&!r.emissiveMap&&r.emissive.setRGB(a.emit[0],a.emit[1],a.emit[2]))}})}function Uy(s){if(s.get("street")==="off"||s.get("street")==="entrances"||s.get("reartree")==="off"||s.get("fit")==="off")return;const e=s.get("d01");return e==="g01"||e==="g02"?e:e===null||e==="assembly"?"assembly":void 0}const Oy=["street_tree_bark","street_tree_leaves","street_tree_leaves_light"];function By(s,e){const t=s.getAttribute("position"),n=s.index,i=[];let r=0;for(let o=0;o<(n?.count??t.count);o+=3){const l=[0,1,2].map(h=>n?n.getX(o+h):o+h),c=l.map(h=>Math.hypot(t.getX(h)-e[0],t.getZ(h)-e[2])<5);if(c.some(Boolean)&&!c.every(Boolean))throw Error("ambiguous roadside tree boundary");c.every(Boolean)?r+=1:i.push(...l)}if(!r)throw Error("selected roadside tree is absent");const a=s.clone();return a.setIndex(i),a.computeBoundingBox(),a.computeBoundingSphere(),{geometry:a,removed:r}}function iu(s,e){if(!e||!Array.isArray(e.position)||e.position.length!==3||!e.position.every(Number.isFinite)||!Number.isFinite(e.yaw_deg)||!Number.isFinite(e.scale)||e.scale<.8||e.scale>1.25)throw Error("invalid D01 transform");s.position.set(...e.position),s.rotation.y=e.yaw_deg*Math.PI/180,s.scale.setScalar(e.scale)}function zy(s,e){s.updateWorldMatrix(!0,!0);const t=s.getWorldPosition(new C),n=(f,m)=>{const x=e(f,m);if(x===null||!Number.isFinite(x))throw Error("missing enclosure footing ground");return x},i=n(t.x,t.z),r=2.25,a=Array.from({length:64},(f,m)=>n(t.x+r*Math.cos(m*Math.PI/32),t.z+r*Math.sin(m*Math.PI/32))),o=(f,m)=>{const x=f-t.x,g=m-t.z,p=(Math.atan2(g,x)/(2*Math.PI)+1)%1*64,v=Math.floor(p),T=p-v;return i+(a[v]*(1-T)+a[(v+1)%64]*T-i)*Math.hypot(x,g)/r};let l=0;for(let f=0;f<32;f++){const m=(f+.5)*Math.PI/16,x=t.x+2.1*Math.cos(m),g=t.z+2.1*Math.sin(m);l=Math.max(l,Math.abs(n(x,g)-o(x,g)))}if(l>.008)throw Error("enclosure footing needs a non-planar fit");let c=0,h=1/0,d=-1/0,u=0;if(s.traverse(f=>{const m=f;if(!m.isMesh)return;const x=m.geometry.clone(),g=x.getAttribute("position"),p=new Nt(new Float32Array(g.count*3),3);for(let T=0;T<g.count;T++)p.setXYZ(T,g.getX(T),g.getY(T),g.getZ(T));x.setAttribute("position",p);let v=!1;for(let T=0;T<p.count;T++){const b=new C().fromBufferAttribute(p,T).applyMatrix4(m.matrixWorld),y=s.worldToLocal(b.clone()),E=y.y;if(E>.18)continue;const R=o(b.x,b.z),_=s.localToWorld(new C(y.x,0,y.z)).y,w=R-_;if(Math.abs(w)>.15)throw Error(`enclosure slope exceeds local footing allowance at ${b.x},${b.z}: ${R} vs ${_}`);b.y+=w*Math.max(0,1-E/.18),m.worldToLocal(b),p.setXYZ(T,b.x,b.y,b.z),c++,v=!0,h=Math.min(h,R),d=Math.max(d,R),u=Math.max(u,Math.abs(w))}v?(p.needsUpdate=!0,x.computeVertexNormals(),x.computeBoundingBox(),x.computeBoundingSphere(),m.geometry=x):x.dispose()}),!c)throw Error("no enclosure footing vertices");return{vertices:c,minGround:h,maxGround:d,maxAdjustment:u,maxInterpolationResidual:l}}function Gy(s){const e=new Lt(new Yc(2.25,2.25,1.2,64,1,!0),new Vn({side:Kn}));return e.name="collision:d01-enclosure",e.position.copy(s.position),e.position.y+=.5,e.updateMatrixWorld(!0),e}async function Hy(s,e,t,n){const i=new Be;i.name="street:d01-candidates";const r=performance.now();try{const[a,o,l,c]=await Promise.all([s.loadGlb("/street/d01-candidates/T-A.glb"),e==="assembly"?void 0:s.loadGlb("/street/d01-candidates/T-B.glb"),s.loadGlb("/street/d01-candidates/E-A.glb"),s.loadJson("/street/d01-candidates/placement.json")]);for(const p of[a,l,...o?[o]:[]]){const v=Vt(p);if(v.length)throw Error(v.join("; "))}if(!Number.isFinite(c.tree_soil_offset_y)||c.tree_soil_offset_y<0||c.tree_soil_offset_y>2)throw Error("invalid soil mounting height");if(c.assembly.scale!==1)throw Error("enclosure collision requires the authored assembly scale");const h=new Be;h.name="d01:T-A+E-A",iu(h,c.assembly),a.name="d01:T-A",l.name="d01:E-A",a.position.y=c.tree_soil_offset_y,h.add(a,l),i.add(h),o&&e!=="assembly"&&(o.name="d01:T-B:"+e,iu(o,c.roadside[e]),i.add(o));const d=n?zy(l,n):void 0,u=Gy(h),f=e==="assembly"?[]:Oy.map(p=>{const v=t.street.getObjectByName(p);if(!v?.isMesh)throw Error("missing scoped core mesh "+p);return{mesh:v,...By(v.geometry,c.roadside[e].position)}});let m=0,x=0;i.traverse(p=>{const v=p;v.isMesh&&(m++,x+=(v.geometry.index?.count??v.geometry.getAttribute("position").count)/3,v.castShadow=v.receiveShadow=!0)});const g=e==="assembly"?void 0:t.street.clone(!0);for(const p of f)p.mesh.geometry=p.geometry;return t.rearTree&&(t.rearTree.visible=!1),t.enclosure&&(t.enclosure.visible=!1),{ok:!0,root:i,candidate:e,collisionStreet:g,collisionEnclosure:u,contact:d,loadMs:performance.now()-r,stats:{meshes:m,triangles:x,removedTriangles:f.reduce((p,v)=>p+v.removed,0)}}}catch(a){return i.clear(),{ok:!1,root:i,candidate:e,error:String(a),loadMs:performance.now()-r,stats:{meshes:0,triangles:0,removedTriangles:0}}}}function Vy(s,e){return e&&s.get("street")!=="off"&&s.get("boxcontents")!=="off"}async function Wy(s){const e=new Be;e.name="street:box-contents";const t={meshes:0,triangles:0,parts:[]};try{const n=await s.loadJson("/street/box-contents/layout.json");if(![...n.origin,n.yaw].every(r=>typeof r=="number"&&Number.isFinite(r)))throw Error("Invalid BOX parent");if(e.position.set(n.origin[0],n.origin[2],-n.origin[1]),e.rotation.y=n.yaw*Math.PI/180,new Set(n.parts.map(r=>r.id)).size!==n.parts.length)throw Error("Duplicate BOX part");for(const r of n.parts)if(![...r.position,r.yaw,r.scale].every(a=>typeof a=="number"&&Number.isFinite(a))||r.scale<=0)throw Error(`Invalid transform: ${r.id}`);const i=await Promise.all(n.parts.map(r=>s.loadGlb(`/street/box-contents/${r.file}`)));for(const[r,a]of n.parts.entries()){const o=i[r],l=Vt(o,.01);if(l.length)throw Error(`${a.id}: ${l.join(", ")}`);const c=new Be;c.name=`contents:${a.id}`,c.position.set(a.position[0],a.position[2],-a.position[1]),c.rotation.y=a.yaw*Math.PI/180,c.scale.setScalar(a.scale),c.add(o),o.traverse(h=>{const d=h;if(d.isMesh){t.meshes++,t.triangles+=(d.geometry.index?.count??d.geometry.getAttribute("position").count)/3,d.receiveShadow=!0,d.castShadow=!0;for(const u of Array.isArray(d.material)?d.material:[d.material])u.name=`street_box_contents_${u.name}`}}),e.add(c),t.parts.push(a.id)}return{ok:!0,root:e,stats:t}}catch(n){return e.clear(),{ok:!1,root:e,error:String(n),stats:{meshes:0,triangles:0,parts:[]}}}}const Nn=window.__startupDebug;async function su(s,e){const t=Nn?.begin(s);try{const n=await e();return t&&Nn?.end(t),n}catch(n){throw t&&Nn?.end(t,n instanceof Error?n.message:String(n)),n}}const qy=["qfront","magnet","eiraku","west-block","d03-center-gai-frontage","d05-centerbuilding-bk","ekimae","station-concourse","station-north","hachiko-policebox","station-service","station-west-viaduct","ginza-canopy","daiichi-kangin","center-gai-gate","center244","quattro","scramble-square","fukuras","station-southeast","plaza-kiosk","shibu-hachi-box","mark-city","shibuya109","takagi","bic-camera","cine-tower","east-mixeduse","hikarie","parco","stream","sakura-stage","d04-takeda","d04-coast","d04-attagirl","d11-minagawa031","d11-shu896","d11-thanks007","d04-okoge","d21-elevator21","d04-okura","d04-pandora-shared","d04-yokota","d04-boundary-duct","d11-unnamed327","d11-new-kca030","d11-zara","d11-momose880","d11-north-linear","d11-shared490491","d11-higashinihon035","d11-tower-records","d11-c80-neutral","d11-compact-bridge","d11-doctors791","d11-tokyu796","d11-matrix799","d11-da-tokyo790","d11-shibuya-flat802","d11-miyashita-building807","d11-koyuu814","d11-iwamoto032","d11-miyashita-approach","d11-miyashita-approach-furniture","d11-miyashita-ne-band","d11-miyashita-north","d11-miyashita-parkcenter","d11-miyashita-south","d11-miyashita-trellis","d11-miyashita-yokocho","d12-bldg-8a285210-inferred","d12-bldg-cee7364f-fill","d12-bldg-fa8eb7fc-inferred","d12-bldg-w355252207-inferred","d12-fpg-links-inferred","d12-nonbei-dfeba0c4-fill","d12-nonbei-w138670868-row","d12-nonbei-w138670882-row","d12-nonbei-w138670888-row","d12-nonbei-w138670891-row","d12-nonbei-w138670898-row","d12-parkside-kyodo-inferred","d12-magnet-lower","d12-eiraku-ground-frontage-roof","d12-eiraku-window-cassette-frames","d12-magnet-glassbox-roof-plant","d12-nonbei-w138670865-row","d12-lindt-composite","d12-marudai-composite","d12-old-kca040-composite","d12-triangle-composite","d12-toei-composite","d12-tokyu-rei-composite","d12-nonbei-w138670870-neutral","d16-inferred-neighborhood","d16-dogenzaka-tr-composite","d16-cosmo-composite","d16-kato-composite","d16-janpara-composite","d16-umehara-composite","d16-dogenzaka-corner-composite","d16-diem-composite","d16-inferred-hoarding","d17-markcity-ne-glass","d17-station-bridge-additions","d18-neighborhood-pack","d19-neighborhood-pack","d19-photo-frontage-pairs","d19-square-ab-composites","d19-fukuras-additions","d19-gloria-frontage","d20-neighborhood-pack","d21-neighborhood-pack","d21-roof-bridge-additions","d22-mufg-trust","d22-tokyo106","d22-district-pack","d22-hinaga-facade","d22-kiosk","d23-district-pack","d23-b3-canopy","d24-district-pack","d25-pola-upper","d26-w138589843-inferred","d27-naruse-inferred","d28-w136730028-inferred","d29-nagasaki-inferred"];async function Xy(s,e,t,n="/street/props"){const i=new Be;i.name="street:props";const r={ok:!0,root:i,errors:[],anchors:[],stats:{placed:0,skipped:0,triangles:0,draws:0}};try{const a=await e(`${n}/layout.json`),o=new Set;for(const l of a.placements){if(o.has(l.id)||!a.props[l.prop]||![...l.xy,l.yaw_deg].every(Number.isFinite)||!l.basis||!l.source_photo)throw new Error(`Invalid placement: ${l.id}`);o.add(l.id)}for(const[l,c]of Object.entries(a.props)){const h=a.placements.filter(d=>d.prop===l);if(h.length)try{const d=await s(`${n}/${c.file}`);d.updateMatrixWorld(!0);const u=new mt().setFromObject(d),f=u.getSize(new C),m=[f.x,f.z,f.y];if(!m.every((y,E)=>Number.isFinite(y)&&y>0&&Math.abs(y-c.size_m[E])<.02))throw new Error("Unexpected dimensions (metres required)");const x=[],g=[];for(const y of h){const E=new et().setFromAxisAngle(new C(0,1,0),y.yaw_deg*Math.PI/180),R=[];for(const P of[u.min.x,u.getCenter(new C).x,u.max.x])for(const L of[u.min.z,u.getCenter(new C).z,u.max.z]){const F=new C(P,0,L).applyQuaternion(E),k=t(y.xy[0]+F.x,-y.xy[1]+F.z);k!==null&&Number.isFinite(k)&&R.push(k)}const _=Math.max(...R)-Math.min(...R);if(R.length!==9||_>.06){r.stats.skipped++,r.errors.push(`${y.id}: missing or uneven ground`);continue}const w=Math.max(...R);x.push(new Re().compose(new C(y.xy[0],w-u.min.y,-y.xy[1]),E,new C(1,1,1))),g.push({id:y.id,prop:l,xy:y.xy,yaw_deg:y.yaw_deg,ground:w,baseGap:_,size_m:m})}if(!x.length)continue;const p=new Be;p.name=l;let v=0,T=0;const b=y=>{const E=y.clone();return E.name=`street_prop_${y.name}`,E};if(d.traverse(y=>{if(!y.isMesh)return;const E=y,R=Array.isArray(E.material)?E.material.map(b):b(E.material),_=new go(E.geometry,R,x.length);_.name=`${l}:${E.name}`,x.forEach((w,P)=>_.setMatrixAt(P,w.clone().multiply(E.matrixWorld))),_.castShadow=_.receiveShadow=!0,_.computeBoundingBox(),_.computeBoundingSphere(),p.add(_),v+=(E.geometry.index?.count??E.geometry.getAttribute("position").count)/3*x.length,T+=Array.isArray(R)?Math.max(1,E.geometry.groups.length):1}),!p.children.length)throw new Error("Empty prop");i.add(p),r.anchors.push(...g),r.stats.placed+=x.length,r.stats.triangles+=v,r.stats.draws+=T}catch(d){r.stats.skipped+=h.length,r.errors.push(`${l}: ${String(d)}`)}}}catch(a){r.errors.push(String(a))}return r.ok=r.errors.length===0,r}async function jy(s,e="/ground"){const t=new Be;t.name="ground:exterior";try{const n=await Promise.all(["west","middle","east"].map(async a=>{const o=await s(`${e}/exterior-${a}/exterior-${a}.glb`),l=Vt(o);if(l.length)throw new Error(`${a}: ${l.join(", ")}`);for(const c of["ground_road","ground_sidewalk"])if(!o.getObjectByName(c))throw new Error(`${a}: missing ${c}`);return o}));let i=0,r=0;for(const a of n)a.traverse(o=>{const l=o;l.isMesh&&(l.castShadow=!1,l.receiveShadow=!0,i++,r+=(l.geometry.index?.count??l.geometry.getAttribute("position").count)/3)}),t.add(a);return{ok:!0,root:t,stats:{meshes:i,triangles:r,tiles:n.length}}}catch(n){return t.clear(),{ok:!1,root:t,error:String(n),stats:{meshes:0,triangles:0,tiles:0}}}}function Ky(s,e){if(!e)return!1;const t=s.getObjectByName("ground_fill");return t?(t.removeFromParent(),!0):!1}async function El(s,e,t=`/street/tactile-${e}/tactile-${e}.glb`){const n=new Be;n.name=`street:tactile-${e}`;try{const i=await s(t),r=Vt(i);if(r.length)throw new Error(r.join(", "));if(!i.getObjectByName(e==="extra"?"street_tactile":`street_tactile_${e}`))throw new Error("missing tactile supplement mesh");let a=0,o=0;return i.traverse(l=>{const c=l;c.isMesh&&(c.castShadow=!1,c.receiveShadow=!0,a++,o+=(c.geometry.index?.count??c.geometry.getAttribute("position").count)/3)}),n.add(i),{ok:!0,root:n,stats:{meshes:a,triangles:o}}}catch(i){return n.clear(),{ok:!1,root:n,error:String(i),stats:{meshes:0,triangles:0}}}}async function Yy(s,e="/street/plaza-facilities/plaza-facilities.glb"){const t=new Be;t.name="street:facilities";try{const n=await s(e),i=Vt(n);if(i.length)throw new Error(i.join(", "));if(!n.getObjectByName("street_plaza_facilities_housing"))throw new Error("missing facility mesh");let r=0,a=0;return n.traverse(o=>{const l=o;l.isMesh&&(l.castShadow=!1,l.receiveShadow=!0,r++,a+=(l.geometry.index?.count??l.geometry.getAttribute("position").count)/3)}),t.add(n),{ok:!0,root:t,stats:{meshes:r,triangles:a}}}catch(n){return t.clear(),{ok:!1,root:t,error:String(n),stats:{meshes:0,triangles:0}}}}async function Jy(s,e="/ground/extension/extension.glb"){const t=new Be;t.name="ground:extension";try{const n=await s(e),i=Vt(n);if(i.length)throw new Error(i.join(", "));if(!n.getObjectByName("ground_fill_extension"))throw new Error("missing terrain mesh");let r=0,a=0;return n.traverse(o=>{const l=o;l.isMesh&&(l.castShadow=!1,l.receiveShadow=!0,r++,a+=(l.geometry.index?.count??l.geometry.getAttribute("position").count)/3)}),t.add(n),{ok:!0,root:t,stats:{meshes:r,triangles:a}}}catch(n){return t.clear(),{ok:!1,root:t,error:String(n),stats:{meshes:0,triangles:0}}}}async function $y(s,e="/street/plaza-finish/plaza-finish.glb"){const t=new Be;t.name="street:plaza";try{const n=await s(e),i=Vt(n);if(i.length)throw new Error(i.join(", "));if(!n.getObjectByName("plaza_finish"))throw new Error("missing plaza mesh");let r=0,a=0;return n.traverse(o=>{const l=o;l.isMesh&&(l.castShadow=!1,l.receiveShadow=!0,r++,a+=(l.geometry.index?.count??l.geometry.getAttribute("position").count)/3)}),t.add(n),{ok:!0,root:t,stats:{meshes:r,triangles:a}}}catch(n){return t.clear(),{ok:!1,root:t,error:String(n),stats:{meshes:0,triangles:0}}}}async function Zy(s,e="/street/hachiko-surround/hachiko-surround.glb"){const t=new Be;t.name="street:surround";try{const[n,i,r]=await Promise.all([s(e),s("/street/hachiko-surround/shrubs.glb"),s("/street/hachiko-surround/seating.glb")]);for(const c of[n,i,r]){const h=Vt(c);if(h.length)throw new Error(h.join(", "))}if(!n.getObjectByName("street_surround"))throw new Error("missing surround mesh");const a=new Be;a.name="surround:seating",a.position.set(11.568175521259887,0,48.68573220011713),a.rotation.y=35*Math.PI/180;for(const[c,h]of[["current_left_statue_local_origin",.4710693359375],["current_right_statue_local_origin",.4155540466308594]]){const d=r.getObjectByName(c);if(!d)throw new Error(`missing seating root: ${c}`);d.position.y=h}a.add(r),t.add(n,i,a);let o=0,l=0;return t.traverse(c=>{const h=c;h.isMesh&&(h.castShadow=!0,h.receiveShadow=!0,o++,l+=(h.geometry.index?.count??h.geometry.getAttribute("position").count)/3)}),{ok:!0,root:t,stats:{meshes:o,triangles:l}}}catch(n){return t.clear(),{ok:!1,root:t,error:String(n),stats:{meshes:0,triangles:0}}}}async function Qy(s,e,t="/street/hachiko-memorial/hachiko-memorial.glb"){const n=new Be;n.name="street:memorial";try{const[i,r]=await Promise.all([s(t),e("/street/hachiko-memorial/placement.json")]),a=r;if(Vt(i).length)throw new Error("invalid memorial GLB");if(!i.getObjectByName("hachiko_memorial_bilingual_v001"))throw new Error("missing memorial model");if(!Array.isArray(a.position)||a.position.length!==3||!a.position.every(Number.isFinite)||!Number.isFinite(a.yaw_deg)||a.uniform_scale!==1)throw new Error("invalid memorial placement");i.position.set(...a.position),i.rotation.y=a.yaw_deg*Math.PI/180;let o=0,l=0;return i.traverse(c=>{const h=c;h.isMesh&&(h.castShadow=!0,h.receiveShadow=!0,o++,l+=(h.geometry.index?.count??h.geometry.getAttribute("position").count)/3)}),n.add(i),{ok:!0,root:n,stats:{meshes:o,triangles:l}}}catch(i){return n.clear(),{ok:!1,root:n,error:String(i),stats:{meshes:0,triangles:0}}}}async function ru(s,e,t="/street/hachiko-rear-tree/hachiko-rear-tree.glb"){const n=new Be;n.name="street:hachiko-rear-tree";try{const[i,r]=await Promise.all([s(t),e("/street/hachiko-rear-tree/placement.json")]),a=r,o=Vt(i);if(o.length)throw new Error(o.join(", "));if(!i.getObjectByName("hachiko_rear_tree_candidate_v001"))throw new Error("missing rear tree model");if(!Array.isArray(a.position)||a.position.length!==3||!a.position.every(Number.isFinite)||!Number.isFinite(a.yaw_deg)||a.uniform_scale!==1)throw new Error("invalid rear tree placement");i.position.set(...a.position),i.rotation.y=a.yaw_deg*Math.PI/180;let l=0,c=0;return i.traverse(h=>{const d=h;d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0,l++,c+=(d.geometry.index?.count??d.geometry.getAttribute("position").count)/3)}),n.add(i),{ok:!0,root:n,stats:{meshes:l,triangles:c}}}catch(i){return n.clear(),{ok:!1,root:n,error:String(i),stats:{meshes:0,triangles:0}}}}function eM(s,e){if(s.ok)for(const[t,n]of[["lottery",e.facilities],["finish",e.plaza],["a8",e.kiosk]])n&&s.root.children.some(i=>i.name===`fit:${t}`)&&(n.visible=!1)}async function au(s,e){const t=new Be;t.name="street:hachiko-fit";try{const n=await Promise.all(e.map(a=>s(`/street/hachiko-fit/${a}.glb`)));let i=0,r=0;for(const[a,o]of n.entries()){const l=Vt(o,e[a]==="fence"?.1:1);if(l.length)throw Error(`${e[a]}: ${l.join(", ")}`);o.traverse(c=>{const h=c;h.isMesh&&(i++,r+=(h.geometry.index?.count??h.geometry.getAttribute("position").count)/3,h.receiveShadow=!0)}),o.name=`fit:${e[a]}`,t.add(o)}return{ok:!0,root:t,stats:{meshes:i,triangles:r}}}catch(n){return t.clear(),{ok:!1,root:t,error:String(n),stats:{meshes:0,triangles:0}}}}const ou={position:[11.568175521259887,.3852884863052187,48.68573220011713],yawDegrees:-65};async function tM(s,e="/street/hachiko/hachiko.glb"){const t=new Be;t.name="street:hachiko";try{const n=await s(e),i=Vt(n);if(i.length)throw new Error(i.join(", "));if(!n.getObjectByName("hachiko_uploaded_scan_candidate_v001"))throw new Error("missing complete hachiko scan");let r=0,a=0;if(n.traverse(o=>{const l=o;l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0,r++,a+=(l.geometry.index?.count??l.geometry.getAttribute("position").count)/3)}),r!==1||a!==85934)throw new Error("unexpected complete scan geometry");return t.position.set(...ou.position),t.rotation.y=ou.yawDegrees*Math.PI/180,t.add(n),{ok:!0,root:t,stats:{meshes:r,triangles:a}}}catch(n){return t.clear(),{ok:!1,root:t,error:String(n),stats:{meshes:0,triangles:0}}}}async function nM(s,e="/street/drainage/drainage.glb"){const t=new Be;t.name="street:drainage";try{const n=await s(e);if(!n.getObjectByName("street_drainage"))throw new Error("missing road cover mesh");let i=0,r=0;n.traverse(o=>{const l=o;if(!l.isMesh)return;const c=l.geometry.getAttribute("position");if(!c?.count)throw new Error("empty cover geometry");for(let h=0;h<c.count;h++)if(![c.getX(h),c.getY(h),c.getZ(h)].every(Number.isFinite))throw new Error("non-finite cover geometry");l.castShadow=!1,l.receiveShadow=!0,i++,r+=(l.geometry.index?.count??c.count)/3});const a=new mt().setFromObject(n).getSize(new C);if(!i||!r||![a.x,a.y,a.z].every(Number.isFinite)||Math.max(a.x,a.y,a.z)<.1||Math.max(a.x,a.y,a.z)>5)throw new Error("invalid cover extent");return t.add(n),{ok:!0,root:t,stats:{meshes:i,triangles:r}}}catch(n){return t.clear(),{ok:!1,root:t,error:String(n),stats:{meshes:0,triangles:0}}}}const iM=["map","normalMap","roughnessMap","metalnessMap","emissiveMap","aoMap","alphaMap","bumpMap","displacementMap","lightMap","specularMap","clearcoatMap","clearcoatNormalMap","clearcoatRoughnessMap","sheenColorMap","sheenRoughnessMap","transmissionMap","thicknessMap","iridescenceMap","iridescenceThicknessMap","anisotropyMap","specularIntensityMap","specularColorMap"];function lu(s){const e={geometries:new Set,materials:new Set,textures:new Set,sources:new Set};for(const t of s)t.traverse(n=>{const i=n;if(i.isMesh){e.geometries.add(i.geometry);for(const r of Array.isArray(i.material)?i.material:[i.material]){e.materials.add(r);const a=r;for(const o of iM){const l=a[o];l instanceof Ht&&(e.textures.add(l),l.source&&e.sources.add(l.source))}}}});return e}class cu{counts=new Map;disposed={geometries:0,materials:0,textures:0,imageBitmaps:0};retain(e){for(const t of[...e.geometries,...e.materials,...e.textures,...e.sources])this.counts.set(t,(this.counts.get(t)??0)+1)}release(e,t){const n=i=>{const r=(this.counts.get(i)??0)-1;return r<=0?(this.counts.delete(i),!0):(this.counts.set(i,r),!1)};for(const i of e.geometries)n(i)&&(i.dispose(),this.disposed.geometries++);for(const i of e.materials)n(i)&&(i.dispose(),this.disposed.materials++);for(const i of e.textures)n(i)&&(i.dispose(),this.disposed.textures++);for(const i of e.sources)if(n(i)&&t){const r=i.data;r&&typeof r.close=="function"&&(r.close(),this.disposed.imageBitmaps++)}}get size(){return this.counts.size}holds(e){return this.counts.get(e)??0}}const hu=(s,e,t)=>Math.hypot(Math.max(s[0]-e,0,e-s[2]),Math.max(s[1]-t,0,t-s[3]));class sM{constructor(e,t){this.manifest=e,this.deps=t;for(const n of e.cells)this.entries.set(n.id,{cell:n,state:"unloaded",roots:[],owned:null,generation:0,abort:null,activatedAt:0,lastUsed:0,failures:0,retryAt:0,pendingUploads:[],lastError:null})}manifest;deps;entries=new Map;last=null;vel={x:0,y:0};registry=new cu;counters={loadsStarted:0,loadsAborted:0,staleDiscarded:0,failures:0,activations:0,deactivations:0,evictions:0,cacheHits:0,retries:0};update(e,t){const n=this.deps.now();if(this.last){const l=(n-this.last.t)/1e3;if(l>0){const c=Math.min(1,l/.3);this.vel.x+=((e-this.last.x)/l-this.vel.x)*c,this.vel.y+=((t-this.last.y)/l-this.vel.y)*c}}this.last={x:e,y:t,t:n};const i=this.manifest.lookAheadSeconds,r=e+this.vel.x*i,a=t+this.vel.y*i;let o=[...this.entries.values()].filter(l=>l.state==="loading").length;for(const l of this.entries.values()){const c=Math.min(hu(l.cell.bounds,e,t),hu(l.cell.bounds,r,a)),h=c<=l.cell.loadRadius,d=c>l.cell.unloadRadius;switch(l.state){case"unloaded":h&&o<this.manifest.maxConcurrentLoads&&(this.startLoad(l),o++);break;case"failed":d?(l.failures=0,l.state="unloaded"):h&&l.failures<=this.manifest.retryDelaysMs.length&&n>=l.retryAt&&o<this.manifest.maxConcurrentLoads&&(this.counters.retries++,this.startLoad(l),o++);break;case"loading":d&&this.abortLoad(l);break;case"warming":if(d){this.toCache(l,n);break}for(let u=0;u<this.manifest.texturesPerUpdate&&l.pendingUploads.length;u++)this.deps.uploadTexture?.(l.pendingUploads.shift());l.pendingUploads.length||(l.state="ready",d?this.toCache(l,n):this.activate(l,n));break;case"ready":h&&(this.counters.cacheHits++,this.activate(l,n));break;case"active":l.lastUsed=n,d&&n-l.activatedAt>=this.manifest.minActiveMs&&this.deactivate(l,n);break}}}startLoad(e){const t=++e.generation,n=new AbortController;e.abort=n,e.state="loading",e.lastError=null,this.counters.loadsStarted++,this.deps.log?.("load",e.cell,{generation:t}),this.deps.loadGroup(e.cell,n.signal).then(i=>{if(t!==e.generation||e.state!=="loading"){this.counters.staleDiscarded++,this.disposeRoots(i,lu(i)),this.deps.release?.(i,e.cell),this.deps.log?.("stale",e.cell,{generation:t});return}const r=lu(i);this.registry.retain(r),e.roots=i,e.owned=r,e.abort=null,this.deps.prepare(i,e.cell),e.pendingUploads=[...r.textures],e.state="warming"},i=>{if(t!==e.generation)return;e.abort=null,e.failures++,this.counters.failures++,e.lastError=i instanceof Error?i.message:String(i);const r=this.manifest.retryDelaysMs;e.retryAt=this.deps.now()+(r[Math.min(e.failures-1,r.length-1)]??0),e.state="failed",this.deps.log?.("failed",e.cell,e.lastError)})}abortLoad(e){e.generation++,e.abort?.abort(),e.abort=null,e.state="unloaded",this.counters.loadsAborted++,this.deps.log?.("abort",e.cell)}activate(e,t){this.deps.attach(e.roots,e.cell),this.deps.showProxy(e.cell,!1),e.state="active",e.activatedAt=t,e.lastUsed=t,this.counters.activations++,this.deps.log?.("active",e.cell)}deactivate(e,t){this.deps.showProxy(e.cell,!0),this.deps.detach(e.roots,e.cell),this.counters.deactivations++,this.toCache(e,t)}toCache(e,t){e.state="ready",e.lastUsed=t;const n=[...this.entries.values()].filter(i=>i.state==="ready").sort((i,r)=>i.lastUsed-r.lastUsed);for(;n.length>this.manifest.cacheGroups;)this.evict(n.shift())}evict(e){const t=this.manifest.releaseMode==="full";e.owned&&this.registry.release(e.owned,t);for(const n of e.roots)n.removeFromParent();if(t){for(const n of e.roots)n.clear();this.deps.release?.(e.roots,e.cell)}e.roots=[],e.owned=null,e.pendingUploads=[],e.state="unloaded",this.counters.evictions++,this.deps.log?.("evict",e.cell)}disposeRoots(e,t){const n=new cu;n.retain(t),n.release(t,!0);for(const i of Object.keys(n.disposed))this.registry.disposed[i]+=n.disposed[i];for(const i of e)i.removeFromParent(),i.clear()}settled(){return[...this.entries.values()].every(e=>e.state!=="loading"&&e.state!=="warming")}liveRoots(){return[...this.entries.values()].flatMap(e=>["active","ready","warming"].includes(e.state)?e.roots:[])}snapshot(){return{cells:[...this.entries.values()].map(e=>({id:e.cell.id,state:e.state,generation:e.generation,failures:e.failures,lastError:e.lastError,roots:e.roots.length,owned:e.owned?{geometries:e.owned.geometries.size,materials:e.owned.materials.size,textures:e.owned.textures.size}:null})),velocity:{...this.vel},registrySize:this.registry.size,disposed:{...this.registry.disposed},counters:{...this.counters}}}}const du=["ground_road","ground_intersection","ground_sidewalk","ground_kerb","ground_marking","ground_fill"];async function rM(s,e="/ground/core/ground_core.glb"){const t=new Be;t.name="ground:core";try{const n=await s(e),i=Vt(n);if(i.length)throw new Error(`asset check failed: ${i.slice(0,3).join("; ")}`);const r=new Set;let a=0,o=0;n.traverse(c=>{r.add(c.name);const h=c;if(!h.isMesh)return;a++,h.receiveShadow=!0,h.castShadow=h.name.startsWith("ground_kerb");const d=h.geometry.getAttribute("position");o+=h.geometry.index?h.geometry.index.count/3:d.count/3});const l=du.filter(c=>![...r].some(h=>h===c||h.startsWith(c+"_")||h.startsWith(c+".")));return t.add(n),{ok:!0,root:t,missing:l,stats:{meshes:a,triangles:Math.round(o)}}}catch(n){return{ok:!1,root:t,error:n instanceof Error?n.message:String(n),missing:[...du],stats:{meshes:0,triangles:0}}}}async function aM(s,e="/street/core/street_projected.glb"){const t=new Be;t.name="street:experimental";try{const[n,i]=await Promise.all([s.loadGlb(e),s.loadJson("/street/core/projected.json")]),r=Vt(n);if(r.length)throw new Error(r.join("; "));for(const c of["street_provisional_pole","street_lamp_glass","street_signal_body","street_signal_green","street_sign_blue","street_sign_red"])if(!n.getObjectByName(c))throw new Error(`missing experimental part: ${c}`);const a=i.camera;if(!a||a.pos.length!==3||![...a.pos,a.yaw,a.pitch,a.roll,a.fpx,a.W,a.H].every(Number.isFinite)||a.fpx<=0||a.W<=0||a.H<=0)throw new Error("invalid reference camera");if(i.status!=="experimental_only"||i.light_points.length!==3)throw new Error("invalid experimental metadata");for(const c of i.light_points)if(c.status!=="provisional"||c.position.length!==3||!c.position.every(Number.isFinite)||Math.abs(c.position[0])>55||Math.abs(c.position[2])>55||c.position[1]<1||c.position[1]>15||!Number.isFinite(c.intensity_cd)||c.intensity_cd<0||c.intensity_cd>1e4)throw new Error("invalid lamp placement");t.add(n);const o=i.light_points.map(c=>{const h=new Qc(16770751,0,40,Math.PI/3,.6,2);return h.name=c.id,h.position.fromArray(c.position),h.target.position.set(c.position[0],-.6,c.position[2]),h.castShadow=!1,t.add(h,h.target),h}),l=(c,h=!0)=>{o.forEach((d,u)=>{d.intensity=c==="night"&&h?i.light_points[u].intensity_cd:0}),n.traverse(d=>{const u=d;if(u.isMesh)for(const f of Array.isArray(u.material)?u.material:[u.material])f instanceof Zi&&(f.name==="street_lamp_glass"?(f.emissive.setHex(16770751),f.emissiveIntensity=c==="night"&&h?8:0):f.name==="street_signal_green"&&(f.emissive.setHex(2162512),f.emissiveIntensity=2))})};return l("day"),{ok:!0,root:t,lights:o,metadata:i,setTime:l}}catch(n){return t.clear(),{ok:!1,root:t,lights:[],error:n instanceof Error?n.message:String(n),setTime(){}}}}const oM=["street_concrete","street_stair_well","street_roof","street_panel","street_glass","street_sign_blue","street_sign_white","street_steel","street_signal_body","street_signal_green","street_signal_red","street_rail","street_lamp_glass","street_tree_bark","street_tree_leaves","street_tree_leaves_light"],lM=["street_tree_bark","street_tree_leaves","street_tree_leaves_light"],cM=120;async function hM(s,e="/street/core/street_core.glb",t=!0){const n=new Be;n.name="street:core";try{const i=await s(e),r=Vt(i);if(r.length)throw new Error(`asset check failed: ${r.slice(0,3).join("; ")}`);const a=oM.filter(f=>!i.getObjectByName(f));if(a.length)throw new Error(`missing street parts: ${a.join(", ")}`);if(!t)for(const f of lM){const m=i.getObjectByName(f);m.parent?.remove(m)}let o=0,l=0;const c=[];i.traverse(f=>{f.name.startsWith("light_")&&c.push(f);const m=f;m.isMesh&&(o++,m.castShadow=!/glass|signal|sign_/.test(m.name),m.receiveShadow=!0,l+=(m.geometry.index?.count??m.geometry.getAttribute("position").count)/3)}),n.add(i);const h=c.map(f=>{const m=new nf(16768174,0,32,2);return m.name=f.name,m.castShadow=!1,f.add(m),m}),d=i.getObjectByName("street_lamp_glass").material,u=f=>{for(const m of h)m.intensity=f==="night"?cM:0;d.emissive.setHex(16768174),d.emissiveIntensity=f==="night"?3:0};return u("day"),{ok:!0,root:n,lights:h,setTime:u,walkSurfaces:[i.getObjectByName("street_concrete")],stats:{meshes:o,triangles:Math.round(l)}}}catch(i){return n.clear(),{ok:!1,root:n,lights:[],setTime(){},walkSurfaces:[],error:i instanceof Error?i.message:String(i),stats:{meshes:0,triangles:0}}}}async function dM(s,e="/street/tactile/tactile.glb"){const t=new Be;t.name="street:tactile";try{const n=await s(e),i=Vt(n);if(i.length)throw new Error(i.join(", "));if(!n.getObjectByName("street_tactile"))throw new Error("missing tactile mesh");let r=0,a=0;return n.traverse(o=>{const l=o;l.isMesh&&(l.castShadow=!1,l.receiveShadow=!0,r++,a+=(l.geometry.index?.count??l.geometry.getAttribute("position").count)/3)}),t.add(n),{ok:!0,root:t,stats:{meshes:r,triangles:a}}}catch(n){return t.clear(),{ok:!1,root:t,error:String(n),stats:{meshes:0,triangles:0}}}}const uM={ctx_wall_ribbon_a:13225166,ctx_wall_ribbon_b:10989752,ctx_wall_punched_a:14208959,ctx_wall_punched_b:11775139};async function fM(s,e="/context/core/context_core.glb",t=!0,n=i=>new ef().loadAsync(i)){const i=new Be;i.name="context:core";try{const r=await s(e),a=Vt(r);if(a.length)throw new Error(`asset check failed: ${a.slice(0,3).join("; ")}`);if(!r.getObjectByName("core__ctx_roof"))throw new Error("missing core__ctx_roof");const o={ribbon:null,punched:null};await Promise.all(Object.keys(o).map(async u=>{try{const f=await n(e.replace(/[^/]+$/,`facade_${u}_emit.png`));f.colorSpace=Gt,f.flipY=!1,o[u]=f}catch{o[u]=null}}));let l=0,c=0;const h=[];r.traverse(u=>{const f=u;if(!f.isMesh)return;if(!t&&f.name.startsWith("station__")){f.visible=!1;return}l++,f.castShadow=f.receiveShadow=!0,c+=(f.geometry.index?.count??f.geometry.getAttribute("position").count)/3;const m=f.material,x=uM[m.name];x!==void 0&&(m.color=new De(x),h.push(m))}),i.add(r);const d=u=>{for(const f of h){const m=o[f.name.includes("ribbon")?"ribbon":"punched"];f.emissiveMap=u==="night"?m:null,f.emissive.setHex(u==="night"&&m?16766880:0),f.emissiveIntensity=u==="night"?.55:0,f.needsUpdate=!0}};return d("day"),{ok:!0,root:i,setTime:d,stats:{meshes:l,triangles:Math.round(c)}}}catch(r){return i.clear(),{ok:!1,root:i,setTime(){},error:r instanceof Error?r.message:String(r),stats:{meshes:0,triangles:0}}}}const pM={glass:255,sign:16776960,interior:16711935,wall:16711680,road:65280,sidewalk:65535,kerb:8421376,marking:16777215,fill:32896,vegetation:32768,furniture:8388736},mM=/(letters|logo|screen|led|banner|wrap|sign|poster|q_bar|tsutaya_face|sb_green|menu|amaguri|acom|lake|aiful|_t$|mark|label|qs_eye)/,gM=/(interior|shop_light|ceil_light|ceiling|goods|shelf|books|pendant|floor|skin|hair|blind|wood$|lamp_head|cloth|denim)/;function Mf(s,e,t,n=!1){const i=s.name||"";if(e.startsWith("A28_"))return/Dark_glazing/i.test(i)?"glass":/Lottery_red_original_lettering|Authored_Baokuji_wording_atlas/i.test(i)?"sign":"furniture";if(e.startsWith("A8_")&&/Glazed_bay/i.test(i))return"glass";if(e.startsWith("H_SF_011_"))return"furniture";if(i.startsWith("street_tree_")||i.startsWith("A08_original_"))return"vegetation";if(i.startsWith("street_"))return"furniture";if(e.startsWith("ground_")||i.startsWith("ground_"))return i.includes("marking")||e.startsWith("ground_marking")?"marking":i.includes("kerb")||e.startsWith("ground_kerb")?"kerb":i.includes("fill")||e.startsWith("ground_fill")?"fill":i.includes("sidewalk")||i.includes("island")||e.startsWith("ground_sidewalk")?"sidewalk":"road";const r=t?.[i]?.kind;return r==="glass"||/glass/.test(i)?"glass":r==="led"||n||mM.test(i)?"sign":gM.test(i)?"interior":"wall"}function zt(s,e){const t=new Map,n=i=>(t.has(i)||t.set(i,new Vn({color:new De(pM[i]),toneMapped:!1})),t.get(i));s.traverse(i=>{const r=i;if(!r.isMesh)return;let a=r,o=!1;for(;a;)/:signs/.test(a.name)&&(o=!0),a=a.parent;const c=(Array.isArray(r.material)?r.material:[r.material]).map(h=>n(Mf(h,r.name,e,o)));r.material=Array.isArray(r.material)?c:c[0],r.castShadow=r.receiveShadow=!1})}const bM={dayExposure:.85,nightExposure:1.35,glassEnv:1.6,wallEnv:.5,road:.045,sidewalk:.3,nightGround:.5,nightSign:1};function _M(s,e=bM){const t={...e};for(const n of(s??"").split(",").filter(Boolean)){const[i,r]=n.split(":"),a=Number(r);i in t&&Number.isFinite(a)&&(t[i]=a)}return t}function Qt(s,e,t,n,i){s.traverse(r=>{const a=r;if(!a.isMesh)return;let o=a,l=!1;for(;o;)/:signs/.test(o.name)&&(l=!0),o=o.parent;for(const c of Array.isArray(a.material)?a.material:[a.material]){const h=c;if(!("envMapIntensity"in h))continue;const d=Mf(c,a.name,n,l);if((d==="glass"||d==="wall")&&i)h.envMap=i.map,h.envMapIntensity=(d==="glass"?t.glassEnv:t.wallEnv)*i.intensity,h.needsUpdate=!0;else if((d==="road"||d==="sidewalk")&&!/island/.test(c.name)){const u=d==="road"?t.road:t.sidewalk;h.userData.lookBase||(h.userData.lookBase=h.color.clone());const f=h.userData.lookBase,m=(f.r+f.g+f.b)/3||1;h.color.setRGB(f.r/m*u,f.g/m*u,f.b/m*u),h.emissive.copy(h.color).multiplyScalar(e==="night"?t.nightGround:0),h.emissiveIntensity=1}else d==="sign"&&e==="night"&&(h.emissiveIntensity*=t.nightSign)}})}class xM extends Gm{constructor(e){super(e),this.type=rn}parse(e){const a=function(_,w){switch(_){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(w||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(w||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(w||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(w||""))}},d=function(_,w,P){w=w||1024;let F=_.pos,k=-1,I=0,O="",S=String.fromCharCode.apply(null,new Uint16Array(_.subarray(F,F+128)));for(;0>(k=S.indexOf(`
`))&&I<w&&F<_.byteLength;)O+=S,I+=S.length,F+=128,S=String.fromCharCode.apply(null,new Uint16Array(_.subarray(F,F+128)));return-1<k?(_.pos+=I+k+1,O+S.slice(0,k)):!1},u=function(_){const w=/^#\?(\S+)/,P=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,F=/^\s*FORMAT=(\S+)\s*$/,k=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,I={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let O,S;for((_.pos>=_.byteLength||!(O=d(_)))&&a(1,"no header found"),(S=O.match(w))||a(3,"bad initial token"),I.valid|=1,I.programtype=S[1],I.string+=O+`
`;O=d(_),O!==!1;){if(I.string+=O+`
`,O.charAt(0)==="#"){I.comments+=O+`
`;continue}if((S=O.match(P))&&(I.gamma=parseFloat(S[1])),(S=O.match(L))&&(I.exposure=parseFloat(S[1])),(S=O.match(F))&&(I.valid|=2,I.format=S[1]),(S=O.match(k))&&(I.valid|=4,I.height=parseInt(S[1],10),I.width=parseInt(S[2],10)),I.valid&2&&I.valid&4)break}return I.valid&2||a(3,"missing format specifier"),I.valid&4||a(3,"missing image size specifier"),I},f=function(_,w,P){const L=w;if(L<8||L>32767||_[0]!==2||_[1]!==2||_[2]&128)return new Uint8Array(_);L!==(_[2]<<8|_[3])&&a(3,"wrong scanline width");const F=new Uint8Array(4*w*P);F.length||a(4,"unable to allocate buffer space");let k=0,I=0;const O=4*L,S=new Uint8Array(4),N=new Uint8Array(O);let K=P;for(;K>0&&I<_.byteLength;){I+4>_.byteLength&&a(1),S[0]=_[I++],S[1]=_[I++],S[2]=_[I++],S[3]=_[I++],(S[0]!=2||S[1]!=2||(S[2]<<8|S[3])!=L)&&a(3,"bad rgbe scanline format");let U=0,V;for(;U<O&&I<_.byteLength;){V=_[I++];const se=V>128;if(se&&(V-=128),(V===0||U+V>O)&&a(3,"bad scanline data"),se){const re=_[I++];for(let Je=0;Je<V;Je++)N[U++]=re}else N.set(_.subarray(I,I+V),U),U+=V,I+=V}const Y=L;for(let se=0;se<Y;se++){let re=0;F[k]=N[se+re],re+=L,F[k+1]=N[se+re],re+=L,F[k+2]=N[se+re],re+=L,F[k+3]=N[se+re],k+=4}K--}return F},m=function(_,w,P,L){const F=_[w+3],k=Math.pow(2,F-128)/255;P[L+0]=_[w+0]*k,P[L+1]=_[w+1]*k,P[L+2]=_[w+2]*k,P[L+3]=1},x=function(_,w,P,L){const F=_[w+3],k=Math.pow(2,F-128)/255;P[L+0]=ga.toHalfFloat(Math.min(_[w+0]*k,65504)),P[L+1]=ga.toHalfFloat(Math.min(_[w+1]*k,65504)),P[L+2]=ga.toHalfFloat(Math.min(_[w+2]*k,65504)),P[L+3]=ga.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;const p=u(g),v=p.width,T=p.height,b=f(g.subarray(g.pos),v,T);let y,E,R;switch(this.type){case Rn:R=b.length/4;const _=new Float32Array(R*4);for(let P=0;P<R;P++)m(b,P*4,_,P*4);y=_,E=Rn;break;case rn:R=b.length/4;const w=new Uint16Array(R*4);for(let P=0;P<R;P++)x(b,P*4,w,P*4);y=w,E=rn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:v,height:T,data:y,header:p.string,gamma:p.gamma,exposure:p.exposure,type:E,colorSpace:Ln,minFilter:Mt,magFilter:Mt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}}function Gn([s,e],t=0){return new C(s,t,-e)}class vM{constructor(e,t,n=2048){this.renderer=e,this.scene=t,this.sun.castShadow=!0,this.sun.shadow.mapSize.set(n,n);const i=this.sun.shadow.camera;i.left=-60,i.right=60,i.top=60,i.bottom=-60,i.near=1,i.far=400,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.03,this.group.add(this.sun,this.sun.target,this.hemi,this.ambient),t.add(this.group)}renderer;scene;group=new Be;sun=new sf(16773856,6);hemi=new Hm(12110056,4867648,.6);ambient=new Xm(16777215,0);floods=[];sets={};mode="day";floodIntensity=3e3;placeSun(e){const t=e.sun.azimuth_deg*Math.PI/180,n=e.sun.elevation_deg*Math.PI/180,i=new C(Math.sin(t)*Math.cos(n),Math.sin(n),-Math.cos(t)*Math.cos(n)),r=e.arcMid?Gn(e.arcMid,20).add(new C(-6,0,-12)):Gn(Ec(e),20);this.sun.target.position.copy(r),this.sun.position.copy(r).addScaledVector(i,200)}placeFloods(e){if(!wo(e))return;const t=Gn(e.arcMid),n=Gn(e.arcNormal).normalize(),i=[[e.arcEnds[0],e.floodlights.arcStart_m],[e.arcEnds[1],e.floodlights.arcEnd_m]];for(const[r,[a,o]]of i){const l=Gn(r),c=l.clone().sub(t).setY(0).normalize();for(let h=0;h<2;h++){const d=a+(o-a)*h,u=new Qc(16769728,0,55,Math.PI/7,.8,1.4);u.position.copy(l).addScaledVector(c,3).addScaledVector(n,2).setY(d),u.target.position.copy(l).addScaledVector(n,-14).addScaledVector(c,-1).setY(d-16),this.group.add(u,u.target),this.floods.push(u)}}}async loadEnvironments(e="/env"){const t=new _c(this.renderer),n=new xM,i=async o=>{const l=await n.loadAsync(`${e}/${o}`);return l.mapping=Ja,{background:l,env:t.fromEquirectangular(l).texture}},[r,a]=await Promise.allSettled([i("wide_street_01_1k.hdr"),i("shanghai_bund_1k.hdr")]);return r.status==="fulfilled"&&(this.sets.day=r.value),a.status==="fulfilled"&&(this.sets.night=a.value),t.dispose(),{day:r.status,night:a.status}}apply(e,t=[]){this.mode=e;const n=e==="day",i=this.sets[e];this.scene.environment=i?.env??null,this.scene.environmentIntensity=n?.45:.06,this.scene.background=new De(n?4157365:731768),this.sun.intensity=n?6:0,this.sun.castShadow=n,this.hemi.intensity=n?.6:.08,this.hemi.color.set(n?12110056:3166368);for(const r of this.floods)r.intensity=n?0:this.floodIntensity;this.renderer.toneMappingExposure=n?1:1.35,this.prepareMeshes(t)}prepareMeshes(e){for(const t of e)t.traverse(n=>{const i=n;if(i.isMesh){i.castShadow=i.receiveShadow=!0;for(const r of Array.isArray(i.material)?i.material:[i.material]){const a=r;a.transparent&&(a.depthWrite=!1,i.castShadow=!1)}}})}}const uu={type:"change"},rh={type:"start"},Sf={type:"end"},qa=new hr,fu=new Ti,yM=Math.cos(70*Uu.DEG2RAD),qt=new C,Sn=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Tl=1e-6;class MM extends of{constructor(e,t=null){super(e,t),this.state=ut.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:tr.ROTATE,MIDDLE:tr.DOLLY,RIGHT:tr.PAN},this.touches={ONE:Ys.ROTATE,TWO:Ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new et,this._lastTargetPosition=new C,this._quat=new et().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gd,this._sphericalDelta=new gd,this._scale=1,this._panOffset=new C,this._rotateStart=new _e,this._rotateEnd=new _e,this._rotateDelta=new _e,this._panStart=new _e,this._panEnd=new _e,this._panDelta=new _e,this._dollyStart=new _e,this._dollyEnd=new _e,this._dollyDelta=new _e,this._dollyDirection=new C,this._mouse=new _e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wM.bind(this),this._onPointerDown=SM.bind(this),this._onPointerUp=EM.bind(this),this._onContextMenu=DM.bind(this),this._onMouseWheel=RM.bind(this),this._onKeyDown=CM.bind(this),this._onTouchStart=PM.bind(this),this._onTouchMove=LM.bind(this),this._onMouseDown=TM.bind(this),this._onMouseMove=AM.bind(this),this._interceptControlDown=IM.bind(this),this._interceptControlUp=FM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ut.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(uu),this.update(),this.state=ut.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;qt.copy(t).sub(this.target),qt.applyQuaternion(this._quat),this._spherical.setFromVector3(qt),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Sn:n>Math.PI&&(n-=Sn),i<-Math.PI?i+=Sn:i>Math.PI&&(i-=Sn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(qt.setFromSpherical(this._spherical),qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=qt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(qa.origin.copy(this.object.position),qa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qa.direction))<yM?this.object.lookAt(this.target):(fu.setFromNormalAndCoplanarPoint(this.object.up,this.target),qa.intersectPlane(fu,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Tl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Tl||this._lastTargetPosition.distanceToSquared(this.target)>Tl?(this.dispatchEvent(uu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Sn/60*this.autoRotateSpeed*e:Sn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){qt.setFromMatrixColumn(t,0),qt.multiplyScalar(-e),this._panOffset.add(qt)}_panUp(e,t){this.screenSpacePanning===!0?qt.setFromMatrixColumn(t,1):(qt.setFromMatrixColumn(t,0),qt.crossVectors(this.object.up,qt)),qt.multiplyScalar(e),this._panOffset.add(qt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;qt.copy(i).sub(this.target);let r=qt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new _e,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function SM(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function wM(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function EM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sf),this.state=ut.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function TM(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case tr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ut.DOLLY;break;case tr.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ut.ROTATE}break;case tr.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(rh)}function AM(s){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function RM(s){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(s.preventDefault(),this.dispatchEvent(rh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Sf))}function CM(s){this.enabled!==!1&&this._handleKeyDown(s)}function PM(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ys.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ut.TOUCH_ROTATE;break;case Ys.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case Ys.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ut.TOUCH_DOLLY_PAN;break;case Ys.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(rh)}function LM(s){switch(this._trackPointer(s),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ut.NONE}}function DM(s){this.enabled!==!1&&s.preventDefault()}function IM(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function FM(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Vs=new Fi(0,0,0,"YXZ"),Ws=new C,NM={type:"change"},kM={type:"lock"},UM={type:"unlock"},pu=.002,mu=Math.PI/2;class OM extends of{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=BM.bind(this),this._onPointerlockChange=zM.bind(this),this._onPointerlockError=GM.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;Ws.setFromMatrixColumn(t.matrix,0),Ws.crossVectors(t.up,Ws),t.position.addScaledVector(Ws,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;Ws.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(Ws,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function BM(s){if(this.enabled===!1||this.isLocked===!1)return;const e=this.object;Vs.setFromQuaternion(e.quaternion),Vs.y-=s.movementX*pu*this.pointerSpeed,Vs.x-=s.movementY*pu*this.pointerSpeed,Vs.x=Math.max(mu-this.maxPolarAngle,Math.min(mu-this.minPolarAngle,Vs.x)),e.quaternion.setFromEuler(Vs),this.dispatchEvent(NM)}function zM(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(kM),this.isLocked=!0):(this.dispatchEvent(UM),this.isLocked=!1)}function GM(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const Si=1.6,gu=.35;class HM{constructor(e,t){this.camera=e,this.orbit=new MM(e,t),this.orbit.enableDamping=!0,this.orbit.maxPolarAngle=Math.PI*.495,this.orbit.minDistance=8,this.orbit.maxDistance=600,this.walk=new OM(e,t),t.addEventListener("click",()=>{this.mode==="walk"&&!this.walk.isLocked&&this.walk.lock()}),addEventListener("keydown",n=>{if(this.actor){if(n.code==="Escape"&&this.mode==="walk"&&this.walk.isLocked){this.clearInput(),this.walk.unlock();return}const i=n.target;if(i?.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(i?.tagName??"")||this.mode!=="walk"||!this.walk.isLocked||this.inputSuspended||n.repeat&&!this.keys.has(n.code))return;n.code==="KeyB"&&!n.repeat&&!this.keys.has(n.code)&&(this.boxPressed=!0)}this.keys.add(n.code)}),addEventListener("keyup",n=>this.keys.delete(n.code)),addEventListener("blur",()=>{this.clearInput(),this.inputSuspended=!0}),addEventListener("focus",()=>{this.inputSuspended=!1}),this.walk.addEventListener("unlock",()=>{this.actor&&this.clearInput()}),t.ownerDocument.addEventListener("visibilitychange",()=>{this.inputSuspended=t.ownerDocument.hidden,this.actor&&this.inputSuspended&&this.clearInput()})}camera;mode="orbit";orbit;walk;keys=new Set;ray=new yo;obstacles=[];ground=[];projectionOverride=!1;actor;actorEye=new C;boxPressed=!1;inputSuspended=!1;fitActive=!1;clearInput(){this.keys.clear(),this.boxPressed=!1}attachActor(e,t=6.5,n=2){if(this.actor)throw new Error("Only one walking actor is supported");const i=this.groundAt(t,n,5);if(i===null&&this.ground.length)throw new Error("No ground at person spawn");this.clearInput(),this.actor=e,this.actorEye.set(t,(i??0)+Si,n),e.root.position.copy(this.actorEye).y-=Si,this.mode==="walk"&&(this.actorEye.copy(this.camera.position),e.root.position.copy(this.actorEye).y-=Si,this.applyActorInitialPitch(),this.followActor())}refreshActorCamera(){this.mode==="walk"&&(this.applyActorInitialPitch(),this.followActor())}applyActorInitialPitch(){this.actor?.initialWalkPitch!==void 0&&(this.camera.rotation.reorder("YXZ"),this.camera.rotation.x=this.actor.initialWalkPitch)}followActor(){if(!this.actor)return;this.actor.root.position.copy(this.actorEye).y-=Si;const e=new C;this.camera.getWorldDirection(e);const t=this.actor.cameraFrame?.(this.camera.aspect),n=t?t.center.clone().sub(this.actorEye).addScaledVector(e,-t.distance).addScaledVector(new C(1,0,0).applyQuaternion(this.camera.quaternion),t.shoulder):e.multiplyScalar(-3.2).add(new C(0,.9-Si,0));t&&this.camera.fov!==t.fov&&(this.camera.fov=t.fov,this.camera.updateProjectionMatrix()),this.ray.set(this.actorEye,n.clone().normalize()),this.ray.far=n.length();const i=this.ray.intersectObjects([...this.obstacles,...this.ground],!0)[0];i&&n.setLength(Math.max(.15,i.distance-.2)),this.camera.position.copy(this.actorEye).add(n),this.actor.root.visible=n.length()>.65}clearBetweenFeet(e,t){const n=e.clone().add(new C(0,1,0)),i=t.clone().add(new C(0,1,0));for(const[r,a]of[[n,i],[i,n]]){const o=a.clone().sub(r),l=o.length();if(!(l<1e-6)&&(this.ray.set(r,o.divideScalar(l)),this.ray.far=l,this.ray.intersectObjects(this.obstacles,!0).length))return!1}return!0}resetActorPosition(e){this.actor&&(this.clearInput(),this.walk.isLocked&&this.walk.unlock(),this.actorEye.copy(e).y+=Si,this.actor.root.position.copy(e),this.followActor())}setObstacles(e){this.obstacles=e}setGround(e){this.ground=e}groundY(e,t){return this.groundAt(e,t)??0}groundAt(e,t,n=80){if(!this.ground.length)return null;this.ray.set(new C(e,n,t),new C(0,-1,0)),this.ray.far=200;const i=this.ray.intersectObjects(this.ground,!0)[0];return i?i.point.y:null}stepTo(e,t,n){const i=e.y-Si;for(const o of[.25,.5,1.3])if(this.ray.set(e.clone().setY(i+o),t),this.ray.far=n+.4,this.ray.intersectObjects(this.obstacles,!0).length)return null;const r=e.clone().addScaledVector(t,n),a=this.ground.length?this.groundAt(r.x,r.z,i+gu+.05):0;return a===null||a-i>gu?null:r.setY(a+Si)}frameBuilding(e){if(this.clearProjectionOverride(),!wo(e)){const i=Gn(Ec(e));this.orbit.target.copy(i).setY(18),this.camera.position.copy(i).add(new C(-55,30,60)),this.orbit.update();return}const t=Gn(e.arcMid),n=Gn(e.arcNormal).normalize();this.orbit.target.copy(t).addScaledVector(n,-12).setY(24),this.camera.position.copy(t).addScaledVector(n,62).add(new C(22,12,0)),this.orbit.update()}setMode(e,t){if(this.actor&&this.clearInput(),this.mode=e,this.actor&&(this.actor.root.visible=!0),this.orbit.enabled=e==="orbit",e==="walk"){this.clearProjectionOverride();const n=Gn(t.arcMid??Ec(t)),i=t.arcNormal?Gn(t.arcNormal).normalize():new C(-.6,0,.8);this.camera.position.copy(n).addScaledVector(i,18),this.camera.position.setY(this.groundY(this.camera.position.x,this.camera.position.z)+Si),this.camera.lookAt(n.clone().setY(this.actor?this.camera.position.y:12)),this.actor&&(this.actor.canRelocate?.()!==!1&&this.actorEye.copy(this.camera.position),this.applyActorInitialPitch(),this.followActor())}else this.walk.isLocked&&this.walk.unlock(),this.actor?.cameraFrame&&(this.camera.fov=55,this.camera.updateProjectionMatrix()),this.frameBuilding(t)}q032View(e){if(!wo(e))return;const t=e.cameraQ032,n=e.arcMid,i=e.arcNormal,r=[-i[1],i[0]],a=[n[0]+i[0]*t.D+r[0]*t.lat,n[1]+i[1]*t.D+r[1]*t.lat],o=t.yaw*Math.PI/180,l=[-(i[0]*Math.cos(o)+r[0]*Math.sin(o)),-(i[1]*Math.cos(o)+r[1]*Math.sin(o))];this.setMode("orbit",e),this.orbit.enabled=!1;const c=sh(e);this.camera.position.copy(Gn(a,t.height_m+c)),this.camera.fov=2*Math.atan(t.H/2/t.fpx)*180/Math.PI,this.camera.lookAt(Gn([a[0]+l[0]*100,a[1]+l[1]*100],t.height_m+c)),this.camera.updateProjectionMatrix();const h=this.camera.projectionMatrix.elements;h[8]=-(h[0]*(t.cx-t.W/2))/t.fpx,h[9]=-(h[5]*(t.H/2-t.cy))/t.fpx,this.camera.projectionMatrixInverse.copy(this.camera.projectionMatrix).invert(),this.projectionOverride=!0}fitView(e,t,n=0){this.setMode("orbit",t),this.orbit.enabled=!1;const[i,r,a]=[e.yaw,e.pitch,e.roll].map(u=>u*Math.PI/180),o=(u,f,m)=>new C(u,m,-f),l=o(Math.sin(i)*Math.cos(r),Math.cos(i)*Math.cos(r),Math.sin(r)),c=o(Math.cos(i),-Math.sin(i),0),d=new C().crossVectors(c,l).clone().multiplyScalar(Math.cos(a)).addScaledVector(c,Math.sin(a));this.camera.position.copy(o(...e.pos)).add(new C(0,n,0)),this.camera.up.copy(d),this.camera.lookAt(this.camera.position.clone().add(l)),this.camera.fov=2*Math.atan(e.H/2/e.fpx)*180/Math.PI,this.camera.updateProjectionMatrix(),this.projectionOverride=!0,this.fitActive=!0}poseView(e,t,n,i){this.setMode("orbit",i),this.orbit.enabled=!1,this.camera.position.set(e[0],e[2],-e[1]),this.camera.fov=n,this.camera.updateProjectionMatrix(),this.camera.lookAt(t[0],t[2],-t[1]),this.projectionOverride=!0,this.fitActive=!0}clearProjectionOverride(){this.projectionOverride&&(this.projectionOverride=!1,this.fitActive=!1,this.camera.up.set(0,1,0),this.camera.fov=55,this.camera.updateProjectionMatrix())}hasProjectionOverride(){return this.projectionOverride}update(e){this.actor&&(e=Number.isFinite(e)?Math.min(Math.max(e,0),.1):0);const t={active:this.mode==="walk"&&this.walk.isLocked&&!this.inputSuspended,moving:!1,running:!1,boxPressed:this.boxPressed,horizontalSpeed:0,direction:new C};if(this.boxPressed=!1,this.mode==="orbit"){this.orbit.enabled&&this.orbit.update(),this.actor?.update(e,t);return}if(this.actor&&!t.active){this.actor.update(e,t),this.actor.cameraFrame?.(this.camera.aspect)&&this.followActor();return}const n=(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")?9:2.2)*e,i=new C;if(this.camera.getWorldDirection(i),i.y=0,i.normalize(),t.direction.copy(i),this.actor?.canMove&&!this.actor.canMove(t)){this.followActor(),this.actor.update(e,t);return}const r=new C().crossVectors(i,new C(0,1,0)).normalize(),a=new C;if((this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&a.add(i),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&a.sub(i),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&a.add(r),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&a.sub(r),a.lengthSq()===0){this.followActor(),this.actor?.update(e,t);return}a.normalize();const o=this.stepTo(this.actor?this.actorEye:this.camera.position,a,n);if(o){const l=this.actor?this.actorEye:this.camera.position,c=Math.hypot(o.x-l.x,o.z-l.z);t.horizontalSpeed=e>0?c/e:0,l.copy(o),t.moving=c>0,t.running=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"),t.direction.copy(a)}this.followActor(),this.actor?.update(e,t)}}class VM{constructor(e=240){this.size=e}size;samples=[];last=performance.now();reset(e=this.size){this.samples=[],this.size=e,this.last=performance.now()}tick(){const e=performance.now(),t=e-this.last;return this.last=e,this.samples.push(t),this.samples.length>this.size&&this.samples.shift(),t/1e3}summary(){const e=[...this.samples].sort((i,r)=>i-r),t=i=>e.length?e[Math.min(e.length-1,Math.floor(i*e.length))]:0,n=e.reduce((i,r)=>i+r,0)/Math.max(1,e.length);return{frames:e.length,p50:t(.5),p95:t(.95),fps:n>0?1e3/n:0}}report(e){const{frames:t,p50:n,p95:i,fps:r}=this.summary(),a=e.info,o=e.domElement;return[`FPS ${r.toFixed(1)}  (${t}フレーム平均)`,`frame p50 ${n.toFixed(1)} ms / p95 ${i.toFixed(1)} ms`,`draw calls ${a.render.calls}  tris ${(a.render.triangles/1e3).toFixed(0)}k`,`geometries ${a.memory.geometries}  textures ${a.memory.textures}`,`解像度 ${o.width}x${o.height}  DPR ${e.getPixelRatio().toFixed(2)}`].join(`
`)}}const bu={low:{name:"low",maxDpr:1,antialias:!1,shadows:!1,shadowMapSize:1024,bloom:!1},medium:{name:"medium",maxDpr:1.25,antialias:!0,shadows:!0,shadowMapSize:2048,bloom:!0},high:{name:"high",maxDpr:2,antialias:!0,shadows:!0,shadowMapSize:4096,bloom:!0}};function WM(s){return bu[s??"medium"]??bu.medium}const qM=4096*4096;function _u(s){const e=s.getAll("dpr");if(e.length!==1||!e[0].trim())return null;const t=Number(e[0]);return Number.isFinite(t)&&t>=.5&&t<=2?t:null}function XM(s,e,t,n,i,r){const a=Math.max(1,Math.floor(Number.isFinite(s)?s:1)),o=Math.max(1,Math.floor(Number.isFinite(e)?e:1)),l=Number.isFinite(t)&&t>0?t:1,c=i??Math.min(l,n),h=Math.max(1,Math.floor(r.width)),d=Math.max(1,Math.floor(r.height)),u=Math.max(1,r.pixels??qM),f=Math.min(c,h/a,d/o,Math.sqrt(u/a/o));return{width:a,height:o,requested:c,dpr:f,bufferWidth:Math.max(1,Math.floor(a*f)),bufferHeight:Math.max(1,Math.floor(o*f)),limited:f<c}}class jM{constructor(e,t,n){this.renderer=e,this.qualityCap=t,this.explicit=_u(n);const i=e.getContext(),r=i.getParameter(i.MAX_VIEWPORT_DIMS),a=Math.min(i.getParameter(i.MAX_RENDERBUFFER_SIZE),i.getParameter(i.MAX_TEXTURE_SIZE));this.limits={width:Math.min(a,r[0]),height:Math.min(a,r[1])}}renderer;qualityCap;explicit;composer;select;label;limits;resize(){const e=XM(innerWidth,innerHeight,devicePixelRatio,this.qualityCap,this.explicit,this.limits);if(this.renderer.setDrawingBufferSize(e.width,e.height,e.dpr),this.renderer.domElement.style.width=`${e.width}px`,this.renderer.domElement.style.height=`${e.height}px`,this.composer&&(this.composer.setSize(1,1),this.composer.setPixelRatio(e.dpr),this.composer.setSize(e.width,e.height)),this.label){const t=this.renderer.getContext();this.label.textContent=`${t.drawingBufferWidth}×${t.drawingBufferHeight} / DPR ${e.dpr.toFixed(2)}`+(e.limited?"（GPU寸法・画素数上限で制限）":"")}return e}mount(e,t){this.composer=e;const n=document.createElement("div");n.className="panel";const i=document.createElement("label");i.textContent="描画解像度 ",this.select=document.createElement("select"),this.select.setAttribute("aria-label","描画解像度");for(const[r,a]of[["auto","自動"],["1","標準 DPR1"],["1.5","中間 DPR1.5"],["2","高精細 DPR2（負荷大）"]])this.select.add(new Option(a,r));this.explicit!==null&&!["1","1.5","2"].includes(String(this.explicit))&&this.select.add(new Option(`指定 DPR${this.explicit}`,String(this.explicit))),this.select.value=this.explicit===null?"auto":String(this.explicit),this.select.onchange=()=>{const r=new URL(location.href);this.select.value==="auto"?r.searchParams.delete("dpr"):r.searchParams.set("dpr",this.select.value),history.replaceState(history.state,"",r),this.explicit=_u(r.searchParams),this.resize()},i.append(this.select),n.append(i),this.label=document.createElement("div"),this.label.id="resolution-status",n.append(this.label),t.append(n),this.resize()}}const wf=512,KM=1,YM=512,Ef=2048,Tf=96,JM=4,$M=new Map([["ground_road","ground_asphalt"],["ground_intersection","ground_asphalt_intersection"]]);function ZM(s=wf){const e=new Uint8Array(s*s*4),t=new Uint8Array(e.length),n=new Uint8Array(e.length),i=new Float32Array(s*s),r=192,a=(c,h,d)=>{let u=Math.imul((c+r)%r,374761393)^Math.imul((h+r)%r,668265263)^d;return u=Math.imul(u^u>>>13,1274126177),((u^u>>>16)>>>0)/4294967296};let o=0;for(let c=0;c<s;c++)for(let h=0;h<s;h++){const d=h/s*r,u=c/s*r,f=Math.floor(d),m=Math.floor(u);let x=1/0,g=0;for(let y=-1;y<=1;y++)for(let E=-1;E<=1;E++){const R=f+E,_=m+y,w=(R+a(R,_,71)-d)**2+(_+a(R,_,193)-u)**2;w<x&&(x=w,g=a(R,_,487))}const p=Math.round(184+(g-.5)*54+(g>.9?22:0)-Math.min(1,x)*6),v=(c*s+h)*4;e.set([p,p,p,255],v);const T=p/255;o+=T<=.04045?T/12.92:((T+.055)/1.055)**2.4,i[c*s+h]=g*.55-Math.min(1,x)*.25;const b=Math.round(226+g*24);n.set([b,b,b,255],v)}const l=(c,h)=>i[(h+s)%s*s+(c+s)%s];for(let c=0;c<s;c++)for(let h=0;h<s;h++){const d=l(h-1,c)-l(h+1,c),u=l(h,c-1)-l(h,c+1),f=Math.hypot(d,u,1);t.set([Math.round((d/f*.5+.5)*255),Math.round((u/f*.5+.5)*255),Math.round((1/f*.5+.5)*255),255],(c*s+h)*4)}return{color:e,normal:t,roughness:n,meanLinearColor:o/s/s}}const rr=(s,e,t)=>{const n=Math.max(0,Math.min(1,(t-s)/(e-s)));return n*n*(3-2*n)};function Ki(s,e,t,n){const i=(c,h)=>{let d=Math.imul((c%t+t)%t,374761393)^Math.imul((h%t+t)%t,668265263)^n;return d=Math.imul(d^d>>>13,1274126177),((d^d>>>16)>>>0)/4294967296},r=Math.floor(s),a=Math.floor(e),o=rr(0,1,s-r),l=rr(0,1,e-a);return(i(r,a)*(1-o)+i(r+1,a)*o)*(1-l)+(i(r,a+1)*(1-o)+i(r+1,a+1)*o)*l}function QM(s=Ef){const e=new Uint8Array(s*s),t=s/Tf;for(let x=0;x<s;x++)for(let g=0;g<s;g++){const p=Ki(g/s*256,x/s*256,256,853);e[x*s+g]=Math.round((1+(p-.5)*.1)*100)}const n=[0,27],i=[25,30],r=[52,22],a=[73,25],o=[96,20],l=[0,62],c=[28,57],h=[56,62],d=[77,54],u=[96,59];[{tone:.82,points:[[0,0],[30,0],i,n]},{tone:1.06,points:[[30,0],[68,0],r,i]},{tone:1.31,points:[[68,0],[96,0],o,a,r]},{tone:.95,points:[n,i,r,c,l]},{tone:1.18,points:[r,a,d,h,c]},{tone:.76,points:[a,o,u,d]},{tone:1.3,points:[l,c,h,[42,96],[0,96]]},{tone:1.03,points:[h,d,u,[96,96],[42,96]]}].forEach(({tone:x,points:g})=>{const p=Math.floor((Math.min(...g.map(y=>y[0]))-.25)*t),v=Math.ceil((Math.max(...g.map(y=>y[0]))+.25)*t),T=Math.floor((Math.min(...g.map(y=>y[1]))-.25)*t),b=Math.ceil((Math.max(...g.map(y=>y[1]))+.25)*t);for(let y=T;y<=b;y++)for(let E=p;E<=v;E++){const R=(E%s+s)%s,_=(y%s+s)%s,w=_*s+R,P=Ki(R/s*256,_/s*256,256,853),L=E/t+(P-.5)*.19,F=y/t+(Ki(R/s*384,_/s*384,384,991)-.5)*.15;let k=!1,I=1/0;for(let K=0,U=g.length-1;K<g.length;U=K++){const V=g[K],Y=g[U];V[1]>F!=Y[1]>F&&L<(Y[0]-V[0])*(F-V[1])/(Y[1]-V[1])+V[0]&&(k=!k);const se=Y[0]-V[0],re=Y[1]-V[1],Je=Math.max(0,Math.min(1,((L-V[0])*se+(F-V[1])*re)/(se*se+re*re)));I=Math.min(I,Math.hypot(L-V[0]-Je*se,F-V[1]-Je*re))}if(!k&&I>.14)continue;const O=.045+P*.055;let S=k?x+(P-.5)*.14:e[w]/100;const N=(1-rr(O,O+.045,I))*(.35+P*.55);if(S=S*(1-N)+(.24+P*.12)*N,k&&I>.35){const K=Ki(R/s*192,_/s*192,192,3251),U=Ki(R/s*768,_/s*768,768,6173),V=rr(.54,.76,K*.65+U*.35);S+=V*.36*rr(.35,.65,I)}e[w]=Math.round(S*100)}});let m=0;for(const x of e)m+=x/255;return{color:e,mean:m/(s*s)}}function eS(s=YM){const e=new Uint8Array(s*s*4);let t=0,n=0;for(let i=0;i<s;i++)for(let r=0;r<s;r++){const a=r/s,o=i/s,l=Ki(a*18,o*18,18,7321),c=Ki(a*128,o*128,128,811),h=1-rr(.3,.46,c*.67+l*.33),d=235+Ki(a*41,o*41,41,119)*17,u=Math.round(d*(1-h)+66*h);u<110&&t++,n+=u,e.set([u,u,u,255],(i*s+r)*4)}return{color:e,darkFraction:t/(s*s),meanSRGB:n/(s*s*255)}}function tS(s=1){const e=ZM(),t=QM(),n=eS(),i=(r,a=!1,o=wf,l=Cn)=>{const c=new bs(r,o,o,l);return c.colorSpace=a?Gt:Ai,c.wrapS=c.wrapT=ms,c.generateMipmaps=!0,c.minFilter=Jn,c.magFilter=Mt,c.anisotropy=Math.max(1,Math.min(4,s)),c.needsUpdate=!0,c};return{map:i(e.color,!0),normalMap:i(e.normal),roughnessMap:i(e.roughness),meanLinearColor:e.meanLinearColor,wearMap:i(t.color,!1,Ef,Lo),wearMean:t.mean,paintMap:i(n.color,!0)}}const Al=.2,Af=new WeakMap;function nS(s,e){s.traverse(t=>{if(!(t instanceof Lt)||t.name!=="ground_marking"||!t.userData.asphaltApplied||!(t.material instanceof Zi)||t.material.name!=="ground_marking")return;const n=t.material,i=Af.get(n);if(!i)return;const r=e==="night"?i.paintMap:i.emissiveMap;n.emissiveMap!==r&&(n.emissiveMap=r,n.needsUpdate=!0),e==="night"?(n.emissive.setRGB(Al,Al,Al),n.emissiveIntensity=1):(n.emissive.copy(i.emissive),n.emissiveIntensity=i.emissiveIntensity)})}function iS(s,e){s.onBeforeCompile=t=>{t.uniforms.roadWearMap={value:e.wearMap},t.uniforms.roadWearMean={value:e.wearMean},t.uniforms.asphaltMeanLinearColor={value:e.meanLinearColor},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vRoadWearWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRoadWearWorld = (modelMatrix * vec4(position, 1.0)).xz * vec2(1.0, -1.0);`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D roadWearMap;
uniform float roadWearMean;
uniform float asphaltMeanLinearColor;
varying vec2 vRoadWearWorld;`).replace("#include <map_fragment>",`#include <map_fragment>
float roadWearFactor = texture2D(roadWearMap, vRoadWearWorld / ${Tf.toFixed(1)}).r / roadWearMean / asphaltMeanLinearColor;
diffuseColor.rgb *= roadWearFactor;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= roadWearFactor;`)},s.customProgramCacheKey=()=>"core-road-wear-v3"}function sS(s,e){s.updateMatrixWorld(!0);let t=0;return s.traverse(n=>{if(!(n instanceof Lt)||n.userData.asphaltApplied||!(n.material instanceof Zi))return;const i=$M.get(n.name)===n.material.name,r=n.name==="ground_marking"&&n.material.name==="ground_marking";if(!i&&!r)return;const a=n.geometry.clone(),o=a.getAttribute("position"),l=new Float32Array(o.count*2),c=new C;for(let d=0;d<o.count;d++){c.fromBufferAttribute(o,d).applyMatrix4(n.matrixWorld);const u=r?JM:KM;l[d*2]=c.x/u,l[d*2+1]=-c.z/u}a.setAttribute("uv",new Nt(l,2));const h=n.material.clone();r?(Af.set(h,{emissive:h.emissive.clone(),emissiveMap:h.emissiveMap,emissiveIntensity:h.emissiveIntensity,paintMap:e.paintMap}),h.map=e.paintMap,h.roughness=.94):(h.userData.lookBase=h.color.clone(),h.map=e.map,h.normalMap=e.normalMap,h.normalScale.set(.18,.18),h.roughnessMap=e.roughnessMap,h.roughness=.94,h.emissiveMap=e.map,iS(h,e)),n.geometry=a,n.material=h,n.userData.asphaltApplied=!0,t++}),t}function rS(s){const e=s.getContext(),t=e.getExtension("WEBGL_debug_renderer_info");return String(t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER))}function ah(s,e,t,n=30){return s.reset(n*240),new Promise(i=>{setTimeout(()=>{const r=s.summary(),a=e.info,o=e.domElement;i({date:new Date().toISOString(),userAgent:navigator.userAgent,gpu:rS(e),...t,seconds:n,frames:r.frames,fps:+r.fps.toFixed(1),p50_ms:+r.p50.toFixed(1),p95_ms:+r.p95.toFixed(1),drawCalls:a.render.calls,triangles:a.render.triangles,canvas:`${o.width}x${o.height}`,dpr:e.getPixelRatio()})},n*1e3)})}const Xa=1024*1024,ja=s=>Math.round(s*10)/10;function aS(s){const e=s.image;if(!e)return 0;const t=e.width??0,n=e.height??0,i=s.isCompressedTexture,r=i?e.data?.byteLength??t*n:t*n*4;return s.generateMipmaps||i?r*4/3:r}function oS(s){let e=s.index?s.index.array.byteLength:0;for(const t of Object.values(s.attributes))e+=t.array?.byteLength??0;return e}class lS{constructor(e,t){this.renderer=e,this.scene=t}renderer;scene;last=null;lastAt=-1/0;sample(){const e=new Set,t=new Set;let n=0,i=0,r=0,a=0,o=0;const l=m=>{if(!m.visible)return;const x=m;if(x.isMesh){const p=Array.isArray(x.material)?Math.max(1,x.geometry.groups.length):1;n++,i+=p,x.castShadow&&(r+=p),t.add(x.geometry);for(const v of Array.isArray(x.material)?x.material:[x.material])for(const T of Object.values(v))T?.isTexture&&e.add(T)}const g=m;g.isLight&&g.castShadow&&g.shadow&&(a++,o+=g.shadow.mapSize.x*g.shadow.mapSize.y*4);for(const p of m.children)l(p)};l(this.scene);for(const m of[this.scene.background,this.scene.environment])m?.isTexture&&e.add(m);let c=0;for(const m of e)c+=aS(m);let h=0;for(const m of t)h+=oS(m);const d=this.renderer.domElement,u=d.width*d.height*8+o,f=this.renderer.info;return this.last={drawCalls:f.render.calls,triangles:f.render.triangles,visibleMeshes:n,visiblePrimitives:i,shadowCasterPrimitives:r,shadowLights:a,textureMiB:ja(c/Xa),geometryMiB:ja(h/Xa),targetsMiB:ja(u/Xa),totalMiB:ja((c+h+u)/Xa),textures:e.size,geometries:t.size},this.lastAt=performance.now(),this.last}snapshot(){return this.last??this.sample()}report(){const e=!this.last||performance.now()-this.lastAt>2e3?this.sample():this.last;return`表示中 ${e.visiblePrimitives}プリミティブ（影 ${e.shadowCasterPrimitives}）
GPUメモリ推定 ${e.totalMiB.toFixed(0)} MiB（画像 ${e.textureMiB.toFixed(0)}・形 ${e.geometryMiB.toFixed(0)}・画面と影 ${e.targetsMiB.toFixed(0)}）`}}const so={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class gr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const cS=new sa(-1,1,1,-1,0,1);class hS extends tn{constructor(){super(),this.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Nt([0,2,0,0,2,0],2))}}const dS=new hS;class oh{constructor(e){this._mesh=new Lt(dS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,cS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class uS extends gr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof hn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Zr.clone(e.uniforms),this.material=new hn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new oh(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class xu extends gr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class fS extends gr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class pS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new _e);this._width=n.width,this._height=n.height,t=new yn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:rn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new uS(so),this.copyPass.material.blending=fi,this.timer=new Jm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}xu!==void 0&&(a instanceof xu?n=!0:a instanceof fS&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new _e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class mS extends gr{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new De}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const gS={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new De(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class cr extends gr{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new _e(e.x,e.y):new _e(256,256),this.clearColor=new De(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new yn(r,a,{type:rn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new yn(r,a,{type:rn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new yn(r,a,{type:rn,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}const o=gS;this.highPassUniforms=Zr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new hn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new _e(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Zr.clone(so.uniforms),this.blendMaterial=new hn({uniforms:this.copyUniforms,vertexShader:so.vertexShader,fragmentShader:so.fragmentShader,premultipliedAlpha:!0,blending:Pl,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new De,this._oldClearAlpha=1,this._basic=new Vn,this._fsQuad=new oh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new _e(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=cr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=cr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);const i=[],r=[];for(let a=1;a<e;a+=2){const o=t[a],l=a+1<e?t[a+1]:0,c=o+l;i.push((a*o+(a+1)*l)/c),r.push(c)}return new hn({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new _e(.5,.5)},direction:{value:new _e(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}}cr.BlurDirectionX=new _e(1,0);cr.BlurDirectionY=new _e(0,1);const Ka={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class bS extends gr{constructor(){super(),this.isOutputPass=!0,this.uniforms=Zr.clone(Ka.uniforms),this.material=new Ju({name:Ka.name,uniforms:this.uniforms,vertexShader:Ka.vertexShader,fragmentShader:Ka.fragmentShader}),this._fsQuad=new oh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ke.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Rc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Cc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Pc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ro?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Co?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Dc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Lc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}Nn?.mark("WebGLを初期化中");const ne=new URLSearchParams(location.search),{requested:Qs,invalid:Eo}=Bf(ne),Rf=ne.get("person")==="brian"||Qs||Eo;Eo&&ne.set("person","invalid-brian8k");const To=ne.get("drive")==="r34";To&&(ne.set("sports","r34"),Rf||ne.set("person","tripo"),ne.delete("npc"));let hs,ro;const le=s=>document.getElementById(s);let Tc;const Yi=s=>{le("status").textContent=s,Tc&&Of(le("status"),Tc,location.href)};ne.has("capture")&&(le("hud").style.visibility="hidden");const ki=WM(ne.get("q")),Xt=_M(ne.get("look"));Jc.setURLModifier(s=>aa(s));Jc.onError=s=>Nn?.error("resource",s);const at=new ov({antialias:ki.antialias,powerPreference:"high-performance",preserveDrawingBuffer:ne.has("capture")}),lh=new jM(at,ki.maxDpr,ne);lh.resize();at.outputColorSpace=Gt;at.toneMapping=ne.get("tone")==="aces"?Ro:Co;at.shadowMap.enabled=ki.shadows;at.shadowMap.type=Mu;document.body.appendChild(at.domElement);const Oe=new nm,bt=new vn(55,innerWidth/innerHeight,.3,3e3),fs=new vM(at,Oe,ki.shadowMapSize);ne.has("flood")&&(fs.floodIntensity=Number(ne.get("flood")));const it=new HM(bt,at.domElement),ta=new VM,No=new lS(at,Oe);let Xi,Dr,qs;const _S=ne.get("combat")==="gun"&&ne.get("person")==="brian"&&!Qs&&!To;let wi,Xs={enabled:["tripo","brian","brian8k"].includes(ne.get("person")??""),status:"off"};const oa=new pS(at);oa.addPass(new mS(Oe,bt));const xS=ne.get("bloom")==="on",ko=new cr(new _e(innerWidth,innerHeight),Number(ne.get("bs")??.35),.35,Number(ne.get("bt")??3));oa.addPass(ko);oa.addPass(new bS);lh.mount(oa,le("hud"));const en=ne.get("ground")!=="off",$i=new Lt(new Kc(1500,96),new Zi({color:5986903,roughness:.9}));$i.rotation.x=-Math.PI/2;$i.position.y=en?-.62:0;$i.receiveShadow=!0;$i.name="ground";Oe.add($i);let li,Ei,ci,mn,Pt,It,je,yt,wn,gn,bn,nn,Tt,At,_n,xn,En,sn,Tn,fn,Ft;const vS=new ra().setMeshoptDecoder(Ay),rt={loadGlb:s=>su(s,()=>vS.loadAsync(s).then(e=>e.scene)),loadJson:s=>su(s,async()=>{const e=await fetch(aa(s));if(!e.ok)throw new Error(`${s}: HTTP ${e.status}`);return e.json()})},yS=ne.get("streaming")==="poc";let ds;const Ir=new Map,Rl=(ne.get("buildings")??qy.join(",")).split(",").map(s=>s.trim()).filter(Boolean).filter(s=>s!=="center-gai-gate"||ne.get("street")!=="off").filter(s=>ne.get("context")!=="nostation"||!["station-southeast","station-concourse","station-north","station-service","station-west-viaduct","ginza-canopy"].includes(s)),Cl={"d22-tokyo106":"D22 第106東京ビル（観察正面・推定側面屋上・見た目のみ）","d22-mufg-trust":"D22 MUFG信託銀行棟（外装・年代・標高推定、見た目のみ）","d21-roof-bridge-additions":"D21 SKY柵・駅屋根端・橋端（外観推定・見た目のみ）","d21-neighborhood-pack":"D21 周辺3棟・小区画（外装・接地推定、年代未確認）","d20-neighborhood-pack":"D20 新南口・ストリームホール周辺7棟（外装・高さ推定）","d19-fukuras-additions":"D19 フクラス屋上補完（推定）","d19-gloria-frontage":"D19 グローリア部分外装（接合推定）","d19-neighborhood-pack":"D19 推定周辺8棟","d19-photo-frontage-pairs":"D19 店頭4組（接合・高さ推定）","d19-square-ab-composites":"D19 スクエアA/B（年代混在・配置推定）","d18-neighborhood-pack":"D18 駅南西側28棟（外装・内装・配置推定）","d17-markcity-ne-glass":"D17 マークシティ北東ガラス（配置推定）","d17-station-bridge-additions":"D17 駅連絡橋補完（推定）","d16-inferred-hoarding":"D16 工事囲い（年月・範囲は推定）","d16-inferred-neighborhood":"D16 inferred neighborhood（推定）","d16-dogenzaka-tr-composite":"D16 dogenzaka tr composite（推定）","d16-cosmo-composite":"D16 cosmo composite（推定）","d16-kato-composite":"D16 kato composite（推定）","d16-janpara-composite":"D16 janpara composite（推定）","d16-umehara-composite":"D16 umehara composite（推定）","d16-dogenzaka-corner-composite":"D16 dogenzaka corner composite（推定）","d16-diem-composite":"D16 diem composite（推定）","d12-nonbei-w138670865-row":"d12-nonbei-w138670865-row（外装・配置は推定）","d12-lindt-composite":"d12-lindt-composite（外装・配置は推定）","d12-marudai-composite":"d12-marudai-composite（外装・配置は推定）","d12-old-kca040-composite":"d12-old-kca040-composite（外装・配置は推定）","d12-triangle-composite":"d12-triangle-composite（外装・配置は推定）","d12-toei-composite":"d12-toei-composite（外装・配置は推定）","d12-tokyu-rei-composite":"d12-tokyu-rei-composite（外装・配置は推定）","d12-nonbei-w138670870-neutral":"d12-nonbei-w138670870-neutral（外装・配置は推定）","d12-magnet-lower":"d12-magnet-lower（部分外装・配置推定）","d12-eiraku-ground-frontage-roof":"d12-eiraku-ground-frontage-roof（部分外装・配置推定）","d12-eiraku-window-cassette-frames":"d12-eiraku-window-cassette-frames（部分外装・配置推定）","d12-magnet-glassbox-roof-plant":"d12-magnet-glassbox-roof-plant（部分外装・配置推定）","d12-bldg-8a285210-inferred":"d12-bldg-8a285210-inferred（外装・配置は推定）","d12-bldg-cee7364f-fill":"d12-bldg-cee7364f-fill（外装・配置は推定）","d12-bldg-fa8eb7fc-inferred":"d12-bldg-fa8eb7fc-inferred（外装・配置は推定）","d12-bldg-w355252207-inferred":"d12-bldg-w355252207-inferred（外装・配置は推定）","d12-fpg-links-inferred":"d12-fpg-links-inferred（外装・配置は推定）","d12-nonbei-dfeba0c4-fill":"d12-nonbei-dfeba0c4-fill（外装・配置は推定）","d12-nonbei-w138670868-row":"d12-nonbei-w138670868-row（外装・配置は推定）","d12-nonbei-w138670882-row":"d12-nonbei-w138670882-row（外装・配置は推定）","d12-nonbei-w138670888-row":"d12-nonbei-w138670888-row（外装・配置は推定）","d12-nonbei-w138670891-row":"d12-nonbei-w138670891-row（外装・配置は推定）","d12-nonbei-w138670898-row":"d12-nonbei-w138670898-row（外装・配置は推定）","d12-parkside-kyodo-inferred":"d12-parkside-kyodo-inferred（外装・配置は推定）","d11-unnamed327":"d11-unnamed327（外装・内装・配置は推定）","d11-new-kca030":"d11-new-kca030（外装・内装・配置は推定）","d11-zara":"d11-zara（外装・内装・配置は推定）","d11-momose880":"d11-momose880（外装・内装・配置は推定）","d11-north-linear":"d11-north-linear（外装・内装・配置は推定）","d11-shared490491":"d11-shared490491（外装・内装・配置は推定）","d11-higashinihon035":"d11-higashinihon035（外装・内装・配置は推定）","d11-tower-records":"d11-tower-records（外装・内装・配置は推定）","d11-c80-neutral":"d11-c80-neutral（外装・内装・配置は推定）","d11-compact-bridge":"d11-compact-bridge（外装・内装・配置は推定）","d11-doctors791":"d11-doctors791（外装・内装・配置は推定）","d11-tokyu796":"d11-tokyu796（外装・内装・配置は推定）","d11-matrix799":"d11-matrix799（外装・内装・配置は推定）","d11-da-tokyo790":"d11-da-tokyo790（外装・内装・配置は推定）","d11-shibuya-flat802":"d11-shibuya-flat802（外装・内装・配置は推定）","d11-miyashita-building807":"d11-miyashita-building807（外装・内装・配置は推定）","d11-koyuu814":"d11-koyuu814（外装・内装・配置は推定）","d11-iwamoto032":"d11-iwamoto032（外装・内装・配置は推定）","d11-miyashita-approach":"d11-miyashita-approach（外装・内装・配置は推定）","d11-miyashita-approach-furniture":"d11-miyashita-approach-furniture（外装・内装・配置は推定）","d11-miyashita-ne-band":"d11-miyashita-ne-band（外装・内装・配置は推定）","d11-miyashita-north":"d11-miyashita-north（外装・内装・配置は推定）","d11-miyashita-parkcenter":"d11-miyashita-parkcenter（外装・内装・配置は推定）","d11-miyashita-south":"d11-miyashita-south（外装・内装・配置は推定）","d11-miyashita-trellis":"d11-miyashita-trellis（外装・内装・配置は推定）","d11-miyashita-yokocho":"d11-miyashita-yokocho（外装・内装・配置は推定）","d04-okura":"好乃ビル・OKURA（配置・上部外装推定）","d04-pandora-shared":"PANDORA共有棟（347/378同一躯体・推定）","d04-yokota":"横田ビル（外装・店内・配置推定）","d21-elevator21":"エレベーター21（外観・配置・入口方向推定）","d11-minagawa031":"皆川ビル（配置・残余外装推定）","d11-shu896":"朱・オグラ（配置・中間外壁・接地推定）","d11-thanks007":"サンクス007（配置・前面幅推定）","d04-coast":"Coast / PRINTÖNE（配置・外装推定、撮影年月不明）","d04-attagirl":"attagirl（過去の開店外観・上部推定、撮影年月不明）","d04-takeda":"武田ビル（配置・店舗相対位置・マンボー併用年代は推定）","hachiko-policebox":"ハチ公前交番（可視外観・配置推定）","shibu-hachi-box":"SHIBU HACHI BOX（外形・前テラス推定）","mark-city":"マークシティ EAST/WEST（同一PLATEAU施設）（外装推定）",shibuya109:"SHIBUYA109（外装推定）",takagi:"高木ビルディング（外装推定）","bic-camera":"ビックカメラ（外装推定）","cine-tower":"渋東シネタワー（外装推定）","east-mixeduse":"東側の金属外装ビル（台帳候補）（外装推定）",hikarie:"渋谷ヒカリエ（外装推定）",parco:"渋谷PARCO（外装推定）",stream:"渋谷ストリーム（外装推定）","sakura-stage":"Sakura Stage SHIBUYA Tower（外装推定）","plaza-kiosk":"広場の低層施設（売店候補）","station-southeast":"JR南東側施設（外装推定）",center244:"センター244ビル（外装推定）",quattro:"渋谷平和クワトロビル（台帳名）（外装推定）","scramble-square":"渋谷スクランブルスクエア（外装推定）",fukuras:"渋谷フクラス（外装推定）",qfront:"QFRONT",magnet:"MAGNET",eiraku:"栄楽ビル","west-block":"センター街入口西側街区","d03-center-gai-frontage":"D03センター街入口の3店先（西村入口・大盛堂案内板・薬局ラック）","d05-centerbuilding-bk":"D05センタービル道路側（BURGER KING 1–2階・3階窓帯）",ekimae:"渋谷駅前ビル","station-concourse":"駅・マークシティ連絡通路","station-north":"JR北側ホーム上屋","station-service":"駅西側の小施設","station-west-viaduct":"駅西側の高架部（推定）","ginza-canopy":"銀座線ホーム上屋（試作）","daiichi-kangin":"第一勧銀共同ビル（B試作）","center-gai-gate":"センター街入口ゲート（形状試作）"};let Ie=[],On,Rt,er=ne.get("time")==="night"?"night":"day";function na(s){if(er=s,le("btn-day").classList.toggle("on",s==="day"),le("btn-night").classList.toggle("on",s==="night"),!Rt)return;fs.apply(s,Ie.map(n=>n.root));const e={map:Oe.environment,intensity:Oe.environmentIntensity};for(const n of Ie)ky(n.root,n.emissive[s]),Qt(n.root,s,Xt,n.emissive.day,e);const t=Ft?.ok&&ne.get("lamps")!=="off"&&!ne.get("look")?.includes("nightGround:")?{...Xt,nightGround:0}:Xt;je?.ok&&Qt(je.root,s,t),je?.ok&&nS(je.root,s),Ft?.setTime(s,ne.get("lamps")!=="off");for(const n of[Ei,ci,li])n?.ok&&Qt(n.root,s,Xt,void 0,e);sn&&Qt(sn.root,s,Xt,void 0,e),mn?.ok&&Qt(mn.root,s,Xt,void 0,e),It?.ok&&Qt(It.root,s,t),Pt?.ok&&Qt(Pt.root,s,t),wn?.ok&&Qt(wn.root,s,t),gn?.ok&&Qt(gn.root,s,Xt,void 0,e),bn?.ok&&Qt(bn.root,s,Xt,void 0,e),nn?.ok&&Qt(nn.root,s,Xt,void 0,e),_n?.ok&&Qt(_n.root,s,Xt,void 0,e),Tt?.ok&&Qt(Tt.root,s,Xt,void 0,e),At?.ok&&Qt(At.root,s,Xt,void 0,e),xn?.ok&&Qt(xn.root,s,Xt,void 0,e),En?.ok&&Qt(En.root,s,Xt,void 0,e),Tn?.ok&&Qt(Tn.root,s,Xt,void 0,e),yt?.ok&&(Qt(yt.root,s,Xt,void 0,e),yt.setTime(s)),fn?.setTime(s),at.toneMappingExposure=s==="day"?Xt.dayExposure:Xt.nightExposure,ko.enabled=xS&&ki.bloom&&s==="night"}async function MS(){Nn?.mark("街の資産を読み込み中"),Yi(`${Rl.map(S=>Cl[S]??S).join("・")} を読み込み中…`);const s=en?Uy(ne):void 0,e=yS?await rt.loadJson("/context/streaming-proxy/cells.json"):void 0,t=e?.cells.filter(S=>S.buildings.every(N=>Rl.includes(N)))??[],n=new Set(t.flatMap(S=>S.buildings)),[i,r,a,o,l,c,h,d,u,f,m,x,g,p,v,T,b,y,E]=await Promise.all([fs.loadEnvironments(),Promise.all(Rl.map(S=>Ny(S,rt))),en?rM(rt.loadGlb,ne.get("groundurl")==="missing"?"/ground/core/missing.glb":void 0).then(S=>(S.ok&&ne.get("asphalt")!=="off"&&sS(S.root,tS(at.capabilities.getMaxAnisotropy())),S)):Promise.resolve(void 0),ne.get("street")!=="off"?hM(rt.loadGlb,ne.get("streeturl")==="missing"?"/street/core/missing.glb":void 0,ne.get("street")!=="entrances"):Promise.resolve(void 0),ne.get("street")==="projected"?aM(rt,ne.get("projectedurl")==="missing"?"/street/core/missing.glb":void 0):Promise.resolve(void 0),ne.get("context")!=="off"?fM(rt.loadGlb,ne.get("contexturl")==="missing"?"/context/core/missing.glb":void 0,ne.get("context")!=="nostation"):Promise.resolve(void 0),en&&ne.get("street")!=="off"&&ne.get("tactile")!=="off"?dM(rt.loadGlb,ne.get("tactileurl")==="missing"?"/street/tactile/missing.glb":void 0):Promise.resolve(void 0),en&&ne.get("street")!=="off"&&ne.get("drainage")!=="off"?nM(rt.loadGlb,ne.get("drainageurl")==="missing"?"/street/drainage/missing.glb":void 0):Promise.resolve(void 0),en&&ne.get("street")!=="off"&&ne.get("hachiko")!=="off"?tM(rt.loadGlb,ne.get("hachikourl")==="missing"?"/street/hachiko/missing.glb":void 0):Promise.resolve(void 0),en&&ne.get("street")!=="off"&&ne.get("surround")!=="off"?Zy(rt.loadGlb,ne.get("surroundurl")==="missing"?"/street/hachiko-surround/missing.glb":void 0):Promise.resolve(void 0),en&&ne.get("street")!=="off"&&ne.get("surround")!=="off"&&ne.get("memorial")!=="off"?Qy(rt.loadGlb,rt.loadJson,ne.get("memorialurl")==="missing"?"/street/hachiko-memorial/missing.glb":void 0):Promise.resolve(void 0),en&&ne.get("street")!=="off"&&ne.get("reartree")!=="off"&&!s?ru(rt.loadGlb,rt.loadJson,ne.get("reartreeurl")==="missing"?"/street/hachiko-rear-tree/missing.glb":void 0):Promise.resolve(void 0),en&&ne.get("plaza")!=="off"?$y(rt.loadGlb,ne.get("plazaurl")==="missing"?"/street/plaza-finish/missing.glb":void 0):Promise.resolve(void 0),en&&ne.get("terrain")!=="off"?Jy(rt.loadGlb,ne.get("terrainurl")==="missing"?"/ground/extension/missing.glb":void 0):Promise.resolve(void 0),en&&ne.get("street")!=="off"&&ne.get("facilities")!=="off"?Yy(rt.loadGlb,ne.get("facilitiesurl")==="missing"?"/street/plaza-facilities/missing.glb":void 0):Promise.resolve(void 0),en&&ne.get("street")!=="off"&&ne.get("tactile")!=="off"&&ne.get("tactileextra")!=="off"?El(rt.loadGlb,"extra"):Promise.resolve(void 0),en&&ne.get("street")!=="off"&&ne.get("tactile")!=="off"&&ne.get("tactilelinks")!=="off"?El(rt.loadGlb,"links"):Promise.resolve(void 0),en&&ne.get("exterior")!=="off"?jy(rt.loadGlb,ne.get("exteriorurl")==="missing"?"/missing":void 0):Promise.resolve(void 0),en&&ne.get("street")!=="off"&&ne.get("tactile")!=="off"&&ne.get("exterior")!=="off"?El(rt.loadGlb,"outer"):Promise.resolve(void 0)]);if(r.forEach(S=>{S.ok&&n.has(S.id)||Oe.add(S.root)}),Ie=r.filter(S=>S.ok),je=a,It=p,Pt=y,je?.ok&&Ky(je.root,!!(Pt?.ok&&It?.ok)),li=E,mn=v,Ei=T,ci=b,yt=o,Tn=h,En=d,xn=u,gn=f,bn=m,nn=x,en&&ne.get("street")!=="off"&&ne.get("fit")!=="off"){const S=[...v?.ok?["lottery"]:[],...x?.ok?["enclosure"]:[],...g?.ok?["finish"]:[],...Ie.some(N=>N.id==="plaza-kiosk")?["a8","kerb",...h?.ok?["tactile"]:[]]:[],...Ie.some(N=>N.id==="station-north")?["louvre"]:[],...o?.ok?["fence"]:[]];Tt=await au(rt.loadGlb,S),Tt.ok&&(Oe.add(Tt.root),eM(Tt,{facilities:v?.root,plaza:g?.root,kiosk:Ie.find(N=>N.id==="plaza-kiosk")?.root}))}if(s&&je?.ok&&yt?.ok){const S=[je.root,...Tt?.ok?Tt.root.children.filter(K=>K.name==="fit:finish"):[]];S.forEach(K=>K.updateMatrixWorld(!0));const N=new yo;At=await Hy(rt,s,{street:yt.root},(K,U)=>(N.set(new C(K,10,U),new C(0,-1,0)),N.intersectObjects(S,!0)[0]?.point.y??null)),At.ok&&Oe.add(At.root)}if(s&&!At?.ok&&(nn=await ru(rt.loadGlb,rt.loadJson),nn.ok)){const S=await au(rt.loadGlb,["enclosure"]);S.ok&&(Tt?.ok?Tt.root.add(...S.root.children):(Tt=S,Oe.add(S.root)))}Vy(ne,Ie.some(S=>S.id==="shibu-hachi-box"))&&(_n=await Wy(rt),_n.ok&&Oe.add(_n.root)),wn=g,fn=c,fn?.ok&&Oe.add(fn.root),Ft=l,Ft?.ok&&Oe.add(Ft.root),le("provisional").textContent=Ft?.ok?"仮配置：支柱の位置・寸法・光量は確認待ち（橙色）":yt?.ok?"街路設備は仮：出入口・樹木は2025年OSMの位置、信号・柵は規則による配置、形は標準寸法の汎用品":"",Ie.some(S=>S.id.startsWith("d11-"))&&(le("provisional").textContent+=`
D11：出典付き素材の推定配置。地面・接合・見えない背面・一部内装は推定。年代違いの店舗候補を含み、区画全体の実景一致を保証しません。`),Ie.some(S=>["d04-okura","d04-pandora-shared","d04-yokota"].includes(S.id))&&(le("provisional").textContent+=`
D04追加3棟：配置・寸法・見えない外装・簡易内装は推定、撮影時期未確認。PANDORA347/378は1つの共有躯体として配置`),Ie.some(S=>S.id==="center244")&&(le("provisional").textContent+=`
センター244店頭：撮影年月不明の外装と推定内装。1月広告と同時期の保証なし`),Ie.some(S=>S.id==="d04-boundary-duct")&&(le("provisional").textContent+=`
D04境界ダクト：横田・おこげ境界への推定配置。支持壁の帰属・取付高さ・撮影年月は未確認`),Ie.some(S=>S.id==="d04-center244-january")&&(le("provisional").textContent+=`
センター244広告：2025年1月限定の比較表示。10月の現況ではありません`),Ie.some(S=>S.id==="d04-coast")&&(le("provisional").textContent+=`
Coast / PRINTÖNE：配置・外装・接地補正は推定、撮影年月不明`),Ie.some(S=>S.id==="d04-attagirl")&&(le("provisional").textContent+=`
attagirl：過去の開店外観、上部外装・配置・接地補正は推定、撮影年月不明。現在・2025年10月の営業状態は未確認`),Ie.some(S=>S.id==="d21-elevator21")&&(le("provisional").textContent+=`
D21エレベーター21：外観・位置・接地・入口方向は推定。扉の詳細と撮影時点は未確認、昇降・地下通行は対象外`),Ie.some(S=>["d11-minagawa031","d11-shu896","d11-thanks007"].includes(S.id))&&(le("provisional").textContent+=`
D11皆川・朱・サンクス：配置・残余外装・接地は推定、看板・店舗の撮影年月と2025年10月の営業状態は未確認。朱は店先を局所的に持ち上げ、入口段差は現行推定路面に接続`),Ie.some(S=>S.id==="daiichi-kangin")&&(le("provisional").textContent+="／第一勧銀共同ビルは窓割り・店舗枠のB推定、広告内容は後工程"),Ie.some(S=>["center244","quattro","scramble-square","fukuras"].includes(S.id))&&(le("provisional").textContent+="／周辺建物の窓割り・外装は旧年写真によるB推定"),Ie.some(S=>S.id==="center-gai-gate")&&(le("provisional").textContent+="／センター街ゲートは位置・寸法のB推定、横断幕は2025年1月の写真"),je?.ok&&(le("provisional").textContent+="／北側歩道・ハチ公広場の舗装寸法・割付けは試作");for(const S of[Ei,ci,li])S?.ok&&Oe.add(S.root);ci?.ok&&(le("provisional").textContent+="／点字の施設前接続はモデル上の出入口へ推定した経路、実際の全経路は未確認"),mn?.ok&&(Oe.add(mn.root),le("provisional").textContent+="／小施設の形・高さ・用途は推定、喫煙設備のOSM形状は喫煙区画全体ではない"),Pt?.ok&&(Oe.add(Pt.root),le("provisional").textContent+="／外側道路・歩道：PLATEAU形状、欠測高さ・縁石・白線は推定"),It?.ok&&(Oe.add(It.root),le("provisional").textContent+="／外側の地面は国土地理院標高による補填、仕上げ道路・歩道と継ぎ目は推定"),yt?.ok&&Oe.add(yt.root),wn?.ok&&(Oe.add(wn.root),le("provisional").textContent+="／像周辺の敷石は写真から推定、寸法・敷設範囲は未測量"),gn?.ok&&(Oe.add(gn.root),le("provisional").textContent+="／像周辺の石縁・レール・低木は写真から試作、位置・寸法・10月状態は未確認"),bn?.ok&&(Oe.add(bn.root),le("provisional").textContent+="／日英二面の石碑は2025-07-13写真由来、像との相対位置・寸法・接地は推定"),_n?.ok&&(le("provisional").textContent+="／BOXの内容物・案内表示は2024年、展示灯・屋根角機器は2026年8月写真参考。現行建築への寸法・配置とTKTS下部幕板は推定（ハチ公周辺のみ時点を併用）"),nn?.ok&&(Oe.add(nn.root),le("provisional").textContent+="／像背後の大木1本は2025年11月の幹写真と2026年8月の葉を合わせた推定。幹位置・石囲いは未測量"),Tt?.ok&&(le("provisional").textContent+="／ハチ公周辺：宝くじ・A8外観と屋根接合・駅ルーバー・大木の全周石囲い・柵・舗装・縁石・接続誘導線は既存形状への推定配置。非可視部分と経路は復元案、駅設備・幹は2025年11月資料を併用"),At?.ok&&(le("provisional").textContent+="／D01枝木・円弧囲い：推定配置。囲い接地・局所衝突を適合。"+(At.candidate==="assembly"?"道路側樹冠は既存維持":"道路側T-Bは比較候補 "+At.candidate)),xn?.ok&&(Oe.add(xn.root),le("provisional").textContent+="／ハチ公スキャン：Maurice Svay／CC BY 4.0、寸法・向きは推定、撮影時点・2025年10月状態は未確認"),En?.ok&&(Oe.add(En.root),le("provisional").textContent+="／円形路面蓋はM027から推定、用途・位置・寸法は未測量"),Tn?.ok&&(Oe.add(Tn.root),le("provisional").textContent+="／点字ブロックは横断歩道端を基準にした部分試作、位置・接続先は推定"),je?.ok?(Oe.add(je.root),it.setGround([je.root])):je&&($i.position.y=0),it.setGround([...je?.ok?[je.root]:[],...It?.ok?[It.root]:[],...Pt?.ok?[Pt.root]:[],...yt?.ok?yt.walkSurfaces:[]]);const R=ne.get("sports");R&&["r34","s15","rx7","all"].includes(R)&&(Oe.updateMatrixWorld(!0),On=await my(Oe,rt.loadGlb,(S,N,K)=>it.groundAt(S,N,K??10),R,{probeFrom:80,...To?{placements:{r34:Hs}}:{}}),On.errors.length&&console.error("sports-poc",On.errors)),en&&ne.get("street")!=="off"&&ne.get("props")!=="off"&&(sn=await Xy(rt.loadGlb,rt.loadJson,(S,N)=>it.groundAt(S,N,5)),Oe.add(sn.root),sn.stats.placed&&(le("provisional").textContent+=`
支柱・案内板・コーンは2025年写真に基づく推定配置。位置・寸法・継続設置は未測量`)),Ie.some(S=>S.id==="d04-okoge")&&(le("provisional").textContent+=`
おこげ：撮影年月不明の店先、配置・外殻・接地・継ぎ目は推定`),Ie.some(S=>S.id==="takagi")&&(le("provisional").textContent+=`
高木：北側入口の配置は推定、屋上看板・設備は2025年1月31日の歴史的候補、2025年10月の継続は未確認`),Ie.some(S=>S.id==="west-block")&&(le("provisional").textContent+=`
西側街区の外観は試作、看板は2025年1月の写真を参照`),Ie.some(S=>S.id==="d03-center-gai-frontage")&&(le("provisional").textContent+=`
D03店先：西村入口は2025年9月写真・中央ベイ割当と奥行きは推定／大盛堂案内板は2025年1月写真面（24×45px、文字は読めない）・寸法推定／薬局ラックは2025年2月写真の空の展示台・位置寸法推定`),Ie.some(S=>S.id==="d05-centerbuilding-bk")&&(le("provisional").textContent+=`
D05センタービル：BURGER KING店先と3階窓帯は2025年5月30日写真（CC BY-SA 4.0 ウィ貴公子）から推定。寸法・取付位置・ガラス色は推定、3階上端は写真の切断線で屋根ではない`),Ie.some(S=>S.id==="ekimae")&&(le("provisional").textContent+=`
渋谷駅前ビルの外観は試作、看板は2025年11月の写真を参照`),Ie.some(S=>["mark-city","shibuya109","takagi","bic-camera","cine-tower","east-mixeduse","hikarie","parco","stream","sakura-stage"].includes(S.id))&&(le("provisional").textContent+=`
追加の周辺建物は窓・色・看板筐体のB推定、写真との精密照合は未完了`),Ie.some(S=>S.id==="shibu-hachi-box")&&(le("provisional").textContent+=`
BOX外形・前テラスは公式図面とOSM輪郭による推定。屋根・テラス表示は2024年由来、時計は2026-08-08 08:08:08の静止表示。取付・接合・2025年10月状態は未確定`),Ie.some(S=>S.id==="plaza-kiosk")&&(le("provisional").textContent+=`
広場の低層施設：南側はA8入口として推定復元、北側既存形状を保持`),Ie.some(S=>S.id==="station-southeast")&&(le("provisional").textContent+=`
JR南東側施設は旧年写真による外装推定、10月現況と施設同定は未確認`),Ie.some(S=>S.id==="station-concourse")&&(le("provisional").textContent+=`
駅側の連絡通路は試作、開口・窓・内部・工事用の囲いの寸法と配置、光量は推定`),Ie.some(S=>S.id==="station-north")&&(le("provisional").textContent+=`
JR北側ホーム上屋は試作、柱・梁・床の帯の配置は推定、南側は外観未確認`),Ie.some(S=>S.id==="station-north")&&(le("provisional").textContent+=`
宮益坂側JR入口の看板は2025年初頭、柱外装・開口は2025-04-09資料由来。取付位置・寸法・浅い奥行きは推定、通行できる入口や内部は未制作、2025年10月状態は未確定`),Ie.some(S=>S.id==="hachiko-policebox")&&(le("provisional").textContent+=`
交番は2025-04-09の可視外観。寸法・取付点・浅い奥面は推定、内部・裏面・2025年10月状態は未確認`),Ie.some(S=>S.id==="station-service")&&(le("provisional").textContent+=`
駅西側の小施設は試作、設備棟との対応・外装・換気口は推定、正面の同定は未完了`),Ie.some(S=>S.id==="station-west-viaduct")&&(le("provisional").textContent+=`
駅西側高架は試作、写真との対応・桁・柱・補強・養生網の寸法と配置は推定`),Ie.some(S=>S.id==="ginza-canopy")&&(le("provisional").textContent+=`
銀座線ホームは試作、床・フレーム・ドアの寸法と配置は推定、10月の内部・下部の確認は未達`);for(const S of Ty(Ie.map(N=>N.id)))le("provisional").textContent+=`
`+S;if(ne.get("datum")==="off")for(const S of Ie)S.hints.groundElevationTP=void 0,S.root.position.y=0;Nn?.mark("街を配置中");const _=[...sn&&!sn.ok?[`小物の一部を配置できず: ${sn.errors.join("; ")}（ほかは表示を継続）`]:[],...Ft&&!Ft.ok?[`写真からの仮配置を読み込めず: ${Ft.error}（通常表示を継続）`]:[],...fn&&!fn.ok?[`周辺の建物（C段階）の読み込みに失敗: ${fn.error}（他は表示を継続）`]:[],...[Ei,ci,li].flatMap(S=>S&&!S.ok?[`点字の補足を読み込めず: ${S.error}（元の面を継続）`]:[]),...mn&&!mn.ok?[`小施設の読み込みに失敗: ${mn.error}（ほかの表示を継続）`]:[],...Pt&&!Pt.ok?[`外側道路の読み込みに失敗: ${Pt.error}（元Coreを継続）`]:[],...It&&!It.ok?[`外側地面の読み込みに失敗: ${It.error}（元の地面を継続）`]:[],...wn&&!wn.ok?[`敷石の読み込みに失敗: ${wn.error}（ほかの表示は継続）`]:[],...gn&&!gn.ok?[`像周辺の設備の読み込みに失敗: ${gn.error}（ほかの表示は継続）`]:[],...bn&&!bn.ok?[`石碑の読み込みに失敗: ${bn.error}（ほかの表示は継続）`]:[],...nn&&!nn.ok?[`像背後の大木の読み込みに失敗: ${nn.error}（ほかの表示は継続）`]:[],...At&&!At.ok?[`D01 candidate: ${At.error}`]:[],..._n&&!_n.ok?[`BOX contents: ${_n.error}`]:[],...Tt&&!Tt.ok?[`配置確認案の読み込みに失敗: ${Tt.error}`]:[],...xn&&!xn.ok?[`ハチ公像の読み込みに失敗: ${xn.error}（ほかの表示は継続）`]:[],...En&&!En.ok?[`路面蓋の読み込みに失敗: ${En.error}（ほかの表示は継続）`]:[],...Tn&&!Tn.ok?[`点字ブロックの読み込みに失敗: ${Tn.error}（ほかの表示は継続）`]:[],...yt&&!yt.ok?[`街路設備の読み込みに失敗: ${yt.error}（建物と地面は表示を継続）`]:[],...je&&!je.ok?[`地面の読み込みに失敗: ${je.error}（灰色の円盤を表示）`]:[],...je?.ok&&je.missing.length?[`地面の一部がない: ${je.missing.join(", ")}`]:[],...r.filter(S=>!S.ok).map(S=>`${Cl[S.id]??S.id} の読み込みに失敗: ${"error"in S?S.error:""}（仮の箱を表示）`),...Ie.flatMap(S=>S.layerErrors.map(N=>`${Cl[S.id]??S.id} の看板レイヤーを読み込めず: ${N}`))];if(Rt=Ie.find(S=>S.id==="qfront")??Ie[0],!Rt)throw new Error(_.join(`
`)||"表示できる建物がありません");for(const S of _)Nn?.error("scene",S);fs.placeSun(Rt.hints);for(const S of Ie)fs.placeFloods(S.hints);const w=Tt?.ok?Tt.root.getObjectByName("fit_enclosure"):void 0,P=[...At?.ok?[At.collisionEnclosure]:w?[w]:[],...sn?[sn.root]:[],...Ie.filter(S=>Ey(S.id)).map(S=>S.root),...fn?.ok?[fn.root]:[],...[xn,gn,bn,nn,mn].filter(S=>S?.ok).map(S=>S.root),...yt?.ok?[At?.collisionStreet??yt.root]:[],...Ft?.ok?[Ft.root]:[]];it.setObstacles(P);const L=()=>Ie.filter(S=>P.includes(S.root)).map(S=>S.id);if(e&&t.length){const S=new Map(Ie.map(U=>[U.id,U])),N=[];await Promise.all(t.map(async U=>{const V=U.buildings.map(se=>S.get(se));let Y=V.every(se=>se&&!se.layerErrors.length);if(Y&&U.proxy)try{const se=await rt.loadGlb(`/context/streaming-proxy/${U.proxy}`);se.name=`proxy-cell:${U.id}`,se.traverse(re=>{re.castShadow=re.receiveShadow=!0}),se.visible=!1,Oe.add(se),Ir.set(U.id,se)}catch(se){Y=!1,Nn?.error("streaming",`proxy ${U.id}: ${se instanceof Error?se.message:se}`)}if(Y)N.push(U);else for(const se of V)se&&!se.root.parent&&Oe.add(se.root)}));for(const U of Ie)U.root.updateMatrixWorld(!0);const K=U=>U.buildings.map(V=>S.get(V).root);for(const U of N)Ir.has(U.id)&&(Ir.get(U.id).visible=!0);ds=new sM({...e,cells:N,releaseMode:"gpu"},{loadGroup:async U=>K(U),prepare:()=>{},uploadTexture:U=>at.initTexture(U),attach:U=>{for(const V of U)Oe.add(V)},detach:U=>{for(const V of U)V.removeFromParent()},showProxy:(U,V)=>{const Y=Ir.get(U.id);Y&&(Y.visible=V)},now:()=>performance.now()}),N.length&&(le("provisional").textContent+=`
区画ストリーミングPoC（?streaming=poc）：${N.map(U=>U.label).join("・")} は離れると描画を外しGPU資源を解放（衝突は元のまま）。遠景は${N.some(U=>U.proxy)?"PLATEAU外形の簡易版":"C段階の殻"}`)}it.frameBuilding(Rt.hints),na(er);const F=i.day==="fulfilled"&&i.night==="fulfilled"?"":"（環境マップの一部を読み込めず、反射は簡易表示）";Yi([..._,F].filter(Boolean).join(`
`));const k=Ie.find(S=>S.hints.cameraFit);le("btn-m027").disabled=!k;const I=ne.get("view");if(I==="q032"?it.q032View(Rt.hints):I==="m027"&&k?.hints.cameraFit?ch(k):I==="walk"&&Ao("walk"),ne.get("pass")==="class"){for(const S of Ie)zt(S.root,{...S.emissive.day});je?.ok&&zt(je.root),yt?.ok&&zt(yt.root);for(const S of[Ei,ci,li])S?.ok&&zt(S.root);sn&&zt(sn.root),mn?.ok&&zt(mn.root),It?.ok&&zt(It.root),Pt?.ok&&zt(Pt.root),wn?.ok&&zt(wn.root),gn?.ok&&zt(gn.root),bn?.ok&&zt(bn.root),nn?.ok&&zt(nn.root),_n?.ok&&zt(_n.root),Tt?.ok&&zt(Tt.root),At?.ok&&zt(At.root),xn?.ok&&zt(xn.root),En?.ok&&zt(En.root),Tn?.ok&&zt(Tn.root),fn?.ok&&zt(fn.root),Ft?.ok&&zt(Ft.root),$i.material=new Zi({color:0}),$i.visible=!1,Oe.background=new De(0),Oe.environment=null,ko.enabled=!1}const O=ne.get("pose");if(O){const S=O.split(",").map(Number);it.poseView([S[0],S[1],S[2]],[S[3],S[4],S[5]],S[6]||55,Rt.hints)}if(ds){const S=performance.now()+6e4;for(ds.update(bt.position.x,-bt.position.z);!ds.settled()&&performance.now()<S;)await new Promise(N=>setTimeout(N,50))}if(ne.get("streetref")==="stream2025"){const S=Ft?.metadata??await rt.loadJson("/street/core/projected.json");it.fitView(S.camera,Rt.hints,0)}if(Rf)try{if(Eo)throw Error("Brian8K requires exactly one person query parameter");const{person:S,loadMs:N}=Qs?await Kv(at.capabilities.maxTextureSize):await Vv();if(_S){const K=[...je?.ok?[je.root]:[],...It?.ok?[It.root]:[],...Pt?.ok?[Pt.root]:[],...yt?.ok?yt.walkSurfaces:[]];try{qs=await(await Mh(async()=>{const{createGunActor:U}=await import("./actor-J68Q4_ME.js");return{createGunActor:U}},[])).createGunActor(S,Oe,bt,it,[...P,...K],at.domElement)}catch(U){Yi(`${le("status").textContent}
射撃モードを読み込めません（Brianの歩行だけ続けます）: ${String(U)}`)}}try{it.attachActor(qs??S)}catch(K){throw(qs??S).dispose(),qs=void 0,K}Oe.add(S.root),Dr=S,Xs={enabled:!0,status:"loaded",loadMs:N,...S.inspection},le("help").textContent+=" / Brian PoC: 待機は腕組み、WASD・Shift。B攻撃・NPC戦闘は対応clip未提供のため無効。",le("provisional").textContent+=Qs?`
Brian8K 実験: 26,796,656 bytes / 98,478 triangles。baseColor 8K・normal/MR 4K。実VRAM/FPS未測定、全体予算未承認。4Kとは形状・clip出力も異なります。`:`
Brian人物1体PoC: 身長1.75mは座席と共通のレビュー設定。GLB 11,965,268 bytes / 47,516 triangles。4Kテクスチャ3枚、実VRAM・全体予算/FPS未検証。実地形の足元・視覚確認は継続中。`,ne.get("drive")==="r34"&&(le("provisional").textContent+=`
BrianのR34座席はレビュー中。座面の衣服・手指の接触は未完成。`),qs&&(le("help").textContent+=" / 射撃モード: 右下の表示を参照（クリックで撃つ・右クリックで構え・Qで武器・Eで次の人）。",le("provisional").textContent+=`
射撃モード（試作）: 拳銃・小銃は assets/weapons、Brianの銃モーションはBlenderで作成、効果音はCC0。周りの人は既存のfitness NPC 1種を5体複製。小銃の全長0.70mは仮定。描画負荷・FPSは未測定。`)}catch(S){Xs={enabled:!0,status:"failed",error:String(S)},(Qs||Eo)&&(Tc=String(S)),Yi(`${le("status").textContent}
Brianを読み込めません: ${String(S)}（旧人物への無断差替えはしません）`)}if(ne.get("person")==="tripo")try{let S;if(ne.get("npc")==="fitness"){const U=yy(),V=performance.now();try{wi=await Sy(it,Oe,U),S={person:wi.player,loadMs:performance.now()-V}}catch(Y){U.textContent=`NPC戦闘PoCを読み込めません。従来の人物PoCへ戻ります: ${String(Y)}`,S=await qd()}}else S=await qd();const{person:N,loadMs:K}=S;try{it.attachActor(wi??N)}catch(U){throw wi?(wi.dispose(),wi=void 0):N.dispose(),U}Oe.add(N.root),Xi=N,wi?.initialize(),Xs={enabled:!0,status:"loaded",loadMs:K,...N.inspection},le("help").textContent+=" / 人物PoC: 地上歩行でWASD・Shift、停止中Bでボクシング1回（移動/Escで解除）",le("provisional").textContent+=`
Tripo人物1体PoC: 身長1.8mは仮定。入力モデルの向き・足元は視覚レビュー待ち。`}catch(S){Xs={enabled:!0,status:"failed",error:String(S)},Yi(`${le("status").textContent}
人物PoCを読み込めません: ${String(S)}（既存操作を継続）`)}if(To){const S=On?.cars.find(Y=>Y.id==="r34"&&Y.status==="ready"),N=Dr??Xi;if(!S||!N)throw new Error("R34 driving requires the selected protagonist and loaded R34");hs=new iy(S,N,it,bt,[...je?.ok?[je.root]:[],...It?.ok?[It.root]:[],...Pt?.ok?[Pt.root]:[],...yt?.ok?yt.walkSurfaces:[]],P,Dr?(Y,se)=>Yv(Dr,se,(re,Je)=>Qs?Kd(re,Je,zf):Kd(re,Je,$v)):void 0),Ao("walk"),hs.recover();const K=it.groundAt(Hs.walkerX,Hs.walkerZ,5);if(K===null)throw new Error("R34 walking start has no ground");const U=new C(Hs.walkerX,K,Hs.walkerZ);bt.position.copy(U).y+=1.6,bt.lookAt(S.root.position.x,K+1.6,Hs.walkerZ),it.resetActorPosition(U);const{R34AV:V}=await Mh(async()=>{const{R34AV:Y}=await import("./av-N3-gE15G.js");return{R34AV:Y}},[]);ro=new V(hs,()=>er),await ro.attach()}window.__viewer={r34AV:()=>ro?.diagnostics()??{status:"off"},driving:()=>hs?.snapshot()??{mode:"off"},drivingRouteProposals:ne.has("capture")?()=>hs?.planRoutes():void 0,drivingRoadProbe:ne.has("capture")?(S,N,K,U)=>hs?.roadProbe(S,N,K,U):void 0,ready:!0,sportsShow:ne.has("capture")?S=>On?.cars.forEach(N=>{N.root.visible=N.status==="ready"&&(S==="all"||S===N.id)}):void 0,sportsAudit:ne.has("capture")?()=>On?sy(On,[...je?.ok?[je.root]:[],...Pt?.ok?[Pt.root]:[]],P):[]:void 0,sports:()=>On?{status:On.status,stats:On.stats,errors:On.errors,cars:On.cars.map(S=>({id:S.id,status:S.status,stats:S.stats,bounds:S.worldBounds,contact:S.contact,contacts:S.contacts,transparentDepthWritePatches:S.transparentDepthWritePatches}))}:{status:"off"},combat:()=>wi?.snapshot()??{status:"off"},gun:()=>qs?.snapshot()??{status:"off"},meter:()=>No.sample(),person:()=>{const S=Dr??Xi;return{...Xs,state:S?.current,position:S?.root.position.toArray(),visible:S?.root.visible,contact:S?{...S.contact}:void 0}},personBenchmark:ne.has("capture")&&["tripo","baseline"].includes(ne.get("person")??"")?async(S="idle")=>{if(wi)throw Error("Single-person benchmark requires npc option off");if(!Ks.includes(S)||it.mode!=="orbit")throw new Error("Benchmark requires a known clip and fixed orbit pose");const N=()=>({position:bt.position.toArray(),quaternion:bt.quaternion.toArray(),fov:bt.fov}),K=N();try{Xi?.setBenchmarkMotion(S,S==="run"?9:S==="walk"?2.2:0),await new Promise(V=>setTimeout(V,5e3)),Xi?.resetContactMetrics();const U=await ah(ta,at,{quality:ki.name,time:er,view:"person-poc-fixed"},10);if(JSON.stringify(K)!==JSON.stringify(N()))throw new Error("Camera moved during benchmark");return{person:Xs,contact:Xi?{...Xi.contact}:void 0,animationCase:S,diagnosticInPlace:!0,camera:K,...U}}finally{Xi?.setBenchmarkMotion(null)}}:void 0,d01Candidates:At?{ok:At.ok,candidate:At.candidate,error:At.error,loadMs:At.loadMs,contact:At.contact,...At.stats}:"off",captureBuildingObstacleIds:ne.has("capture")?L:void 0,captureRenderInfo:ne.has("capture")?()=>({...at.info.render}):void 0,renderMemory:()=>({...at.info.memory,programs:at.info.programs?.length??0}),streaming:ds?()=>({...ds.snapshot(),proxies:[...Ir.entries()].map(([S,N])=>({id:S,visible:N.visible})),inScene:Ie.filter(S=>S.root.parent===Oe).map(S=>S.id),obstacles:L()}):void 0,movePose:ne.has("capture")?S=>it.poseView([S[0],S[1],S[2]],[S[3],S[4],S[5]],S[6]||55,Rt.hints):void 0,props:sn?{ok:sn.ok,errors:sn.errors,anchors:sn.anchors,...sn.stats}:"off",stats:Object.fromEntries(Ie.map(S=>[S.id,{...S.stats,layers:S.layers,layerErrors:S.layerErrors}])),failed:r.filter(S=>!S.ok).map(S=>S.id),ground:je?{fillReplaced:je.ok&&!je.root.getObjectByName("ground_fill"),ok:je.ok,error:je.error,missing:je.missing,...je.stats}:"off",context:fn?{ok:fn.ok,error:fn.error,...fn.stats}:"off",tactileOuter:li?{ok:li.ok,attached:li.root.parent===Oe,error:li.error,...li.stats}:"off",tactileExtra:Ei?{ok:Ei.ok,error:Ei.error,...Ei.stats}:"off",tactileLinks:ci?{ok:ci.ok,error:ci.error,...ci.stats}:"off",facilities:mn?{ok:mn.ok,error:mn.error,...mn.stats}:"off",exterior:Pt?{ok:Pt.ok,error:Pt.error,...Pt.stats}:"off",terrain:It?{ok:It.ok,error:It.error,...It.stats}:"off",plaza:wn?{ok:wn.ok,error:wn.error,...wn.stats}:"off",surround:gn?{ok:gn.ok,error:gn.error,...gn.stats}:"off",memorial:bn?{ok:bn.ok,error:bn.error,...bn.stats}:"off",rearTree:nn?{ok:nn.ok,error:nn.error,...nn.stats}:"off",boxContents:_n?{ok:_n.ok,error:_n.error,..._n.stats}:"off",sceneFit:Tt?{ok:Tt.ok,error:Tt.error,parts:Tt.root.children.map(S=>S.name),...Tt.stats}:"off",hachiko:xn?{ok:xn.ok,error:xn.error,...xn.stats}:"off",drainage:En?{ok:En.ok,error:En.error,...En.stats}:"off",tactile:Tn?{ok:Tn.ok,error:Tn.error,...Tn.stats}:"off",street:yt?{ok:yt.ok,error:yt.error,mode:ne.get("street")==="entrances"?"entrances":"all",...yt.stats}:"off",projected:Ft?{ok:Ft.ok,error:Ft.error,status:Ft.metadata?.status,cameraStatus:Ft.metadata?.camera_status,lamps:Ft.lights.map(S=>({id:S.name,intensity:S.intensity,position:S.position.toArray()})),groundEmissive:Ft.ok&&ne.get("lamps")!=="off"&&!ne.get("look")?.includes("nightGround:")?0:Xt.nightGround}:"off",offsets:Object.fromEntries(Ie.map(S=>[S.id,S.root.position.y])),cameraPos:()=>bt.position.toArray(),cameraState:()=>({position:bt.position.toArray(),quaternion:bt.quaternion.toArray(),fov:bt.fov,aspect:bt.aspect,time:er}),freezeFrame:ne.has("capture")?()=>{at.setAnimationLoop(null),at.render(Oe,bt)}:void 0,capturePose:ne.has("capture")?(S,N)=>{at.setAnimationLoop(null),it.poseView([S[0],S[1],S[2]],[S[3],S[4],S[5]],S[6]||55,Rt.hints),na(N),at.render(Oe,bt)}:void 0,projectPlan:S=>{const N=new C(S[0],S[2],-S[1]).project(bt);return[(N.x*.5+.5)*innerWidth,(-N.y*.5+.5)*innerHeight]},bench:null,groundUnderCamera:()=>it.groundY(bt.position.x,bt.position.z),walkTest:(S,N,K,U,V,Y=.25)=>{const se=it.groundAt(S,-N);if(se===null)return{start:null};let re=new C(S,se+1.6,-N);const Je=new C(K,0,-U).normalize(),qe=[];for(let tt=0;tt<V;tt++){const J=it.stepTo(re,Je,Y);if(!J)return{path:qe,stoppedAt:[re.x,-re.z,re.y-1.6]};re=J,qe.push([re.x,-re.z,re.y-1.6])}return{path:qe,stoppedAt:null}},pick:(S,N)=>{const K=new yo;K.setFromCamera(new _e(S/innerWidth*2-1,-(N/innerHeight)*2+1),bt);const U=K.intersectObjects(Oe.children,!0).find(se=>se.object.visible);if(!U)return null;const V=[];let Y=U.object;for(;Y;)Y.name&&V.push(Y.name),Y=Y.parent;return{names:V,point:[U.point.x,-U.point.z,U.point.y],material:U.object.material?.name}}}}function Ao(s){Rt&&(it.setMode(s,Rt.hints),le("btn-orbit").classList.toggle("on",s==="orbit"),le("btn-walk").classList.toggle("on",s==="walk"))}le("btn-day").onclick=()=>na("day");le("btn-night").onclick=()=>na("night");le("btn-orbit").onclick=()=>{Ao("orbit"),hh()};le("btn-walk").onclick=()=>{Ao("walk"),hh()};le("btn-q032").onclick=()=>{Rt&&(it.q032View(Rt.hints),hh())};le("btn-m027").onclick=()=>{const s=Ie.find(e=>e.hints.cameraFit);s&&ch(s)};function ch(s){!s.hints.cameraFit||!Rt||(it.fitView(s.hints.cameraFit,Rt.hints,sh(s.hints)),fs.placeSun(s.hints))}function hh(){Rt&&fs.placeSun(Rt.hints)}le("btn-bench").onclick=async()=>{const s=le("btn-bench");s.disabled=!0,s.textContent="計測中（30秒）…";const e={...await ah(ta,at,{quality:ki.name,time:er,view:it.mode+(it.hasProjectionOverride()?":q032":"")}),load:No.sample()};le("bench-out").textContent=JSON.stringify(e,null,1),s.disabled=!1,s.textContent="30秒計測",console.log("BENCHMARK",JSON.stringify(e))};addEventListener("resize",()=>{lh.resize(),bt.aspect=innerWidth/innerHeight,it.hasProjectionOverride()&&Rt&&wo(Rt.hints)&&!it.fitActive?it.q032View(Rt.hints):bt.updateProjectionMatrix()});let vu=0;at.setAnimationLoop(()=>{const s=Math.min(.1,ta.tick());hs?.update(s)||it.update(s),ro?.update(),ds?.update(bt.position.x,-bt.position.z),ko.enabled?oa.render():at.render(Oe,bt),Nn?.frame({calls:at.info.render.calls,triangles:at.info.render.triangles,geometries:at.info.memory.geometries,textures:at.info.memory.textures,quality:ki.name});const e=performance.now();e-vu>500&&(le("perf").textContent=ta.report(at)+`
`+No.report(),vu=e)});MS().then(()=>{Nn?.ready(),ne.get("bench")==="auto"&&SS()}).catch(s=>{Nn?.error("startup",s instanceof Error?s.message:s),Nn?.mark("起動失敗"),Yi(`起動エラー: ${s instanceof Error?s.message:s}`)});const yu=[["c01_qfront","day","6.5,-2.0,1.516,-8,29,12,55"],["c01_qfront","night","6.5,-2.0,1.516,-8,29,12,55"],["c02_hachiko","day","11.6,-47.0,1.871,6,10,6,55"],["x01_walkway","day","-12.6,-68.2,10.2,0.8,30.7,16.2,52.2"],["top_down","day","6.5,-30,190,6.5,-1.9,0,48"],["m027","day","m027"],["q032","night","q032"]];async function SS(){if(!Rt)return;const s=[];for(const[t,n,i]of yu){if(Yi(`自動計測中: ${t}（${n}）… ${s.length+1}/${yu.length}`),na(n),i==="m027"){const r=Ie.find(a=>a.hints.cameraFit);r&&ch(r)}else if(i==="q032")it.q032View(Rt.hints);else{const r=i.split(",").map(Number);it.poseView([r[0],r[1],r[2]],[r[3],r[4],r[5]],r[6],Rt.hints)}await new Promise(r=>setTimeout(r,2e3)),s.push({name:t,...await ah(ta,at,{quality:ki.name,time:n,view:t},10),load:No.sample()})}const e=JSON.stringify({kind:"shibuya-core-bench",version:2,ground:je?.ok??!1,results:s});le("bench-out").textContent=e,console.log("BENCHMARK_AUTO",e),window.__viewer.bench=s,Yi("自動計測が終わりました。下の結果（JSON）をすべてコピーして送ってください。"),navigator.clipboard?.writeText(e).catch(()=>{})}export{Pl as A,Kt as B,tu as C,ra as G,Mo as I,ho as L,Vn as M,Xu as P,et as Q,hr as R,wS as S,C as V,aa as a,um as b,lv as c,Li as d,Kc as e,Yc as f,Zi as g,Lt as h,Do as i,ES as j,Gt as k,ym as l,tn as m,co as n,dr as o,_y as p,yo as q,rf as r,Re as s,Ge as t,vo as u,De as v,mt as w,Qc as x};
