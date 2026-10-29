(()=>{var Ii={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vu=0,Vc=1,Hu=2;var ss=1,Gu=2,rr=3,Di=0,un=1,Je=2,ti=0,ar=1,rs=2,Hc=3,Gc=4,Wu=5;var as=100,Xu=101,qu=102,Yu=103,Zu=104,Ju=200,$u=201,Ku=202,ju=203,Wc=204,Xc=205,Qu=206,td=207,ed=208,nd=209,id=210,sd=211,rd=212,ad=213,od=214,co=0,ho=1,uo=2,ks=3,fo=4,po=5,mo=6,go=7,ha=0,ld=1,cd=2,Vn=0,qc=1,Yc=2,Zc=3,ua=4,Jc=5,$c=6,Kc=7;var jc=300,Ni=301,os=302,qo=303,Yo=304,da=306,Vs=1e3,yn=1001,_o=1002,Ze=1003,hd=1004;var fa=1005;var je=1006,Zo=1007;var Ui=1008;var mn=1009,Qc=1010,th=1011,or=1012,Jo=1013,Hn=1014,Dn=1015,Gn=1016,$o=1017,Ko=1018,lr=1020,eh=35902,nh=35899,ih=1021,sh=1022,Nn=1023,$n=1026,Fi=1027,jo=1028,Qo=1029,Oi=1030,tl=1031;var el=1033,pa=33776,ma=33777,ga=33778,_a=33779,nl=35840,il=35841,sl=35842,rl=35843,al=36196,ol=37492,ll=37496,cl=37488,hl=37489,xa=37490,ul=37491,dl=37808,fl=37809,pl=37810,ml=37811,gl=37812,_l=37813,xl=37814,vl=37815,yl=37816,Ml=37817,Sl=37818,bl=37819,El=37820,Tl=37821,wl=36492,Al=36494,Rl=36495,Cl=36283,Pl=36284,va=36285,Il=36286;var Ur=2300,xo=2301,ao=2302,Cc=2303,Pc=2400,Ic=2401,Lc=2402;var ud=3200;var cr=0,dd=1,Wn="",qe="srgb",Fr="srgb-linear",Or="linear",ge="srgb";var oo=7680;var fd=519,pd=512,md=513,gd=514,Ll=515,_d=516,xd=517,Dl=518,vd=519,yd=35044;var rh="300 es",Bn=2e3,Hs=2001;function ap(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function op(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Gs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Md(){let n=Gs("canvas");return n.style.display="block",n}var lu={},Ws=null;function ah(...n){let t="THREE."+n.shift();Ws?Ws("log",t,...n):console.log(t,...n)}function Sd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Gt(...n){n=Sd(n);let t="THREE."+n.shift();if(Ws)Ws("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Wt(...n){n=Sd(n);let t="THREE."+n.shift();if(Ws)Ws("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ji(...n){let t=n.join(" ");t in lu||(lu[t]=!0,Gt(...n))}function bd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Ed={[co]:ho,[uo]:mo,[fo]:go,[ks]:po,[ho]:co,[mo]:uo,[go]:fo,[po]:ks},zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cu=1234567,Ir=Math.PI/180,Xs=180/Math.PI;function ls(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function ee(n,t,e){return Math.max(t,Math.min(e,n))}function oh(n,t){return(n%t+t)%t}function lp(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function cp(n,t,e){return n!==t?(e-n)/(t-n):0}function Lr(n,t,e){return(1-e)*n+e*t}function hp(n,t,e,i){return Lr(n,t,1-Math.exp(-e*i))}function up(n,t=1){return t-Math.abs(oh(n,t*2)-t)}function dp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function fp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function pp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function mp(n,t){return n+Math.random()*(t-n)}function gp(n){return n*(.5-Math.random())}function _p(n){n!==void 0&&(cu=n);let t=cu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xp(n){return n*Ir}function vp(n){return n*Xs}function yp(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Mp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Sp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function bp(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),d=r((t-i)/2),u=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*d,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*h,o*c);break;default:Gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function cn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Tn={DEG2RAD:Ir,RAD2DEG:Xs,generateUUID:ls,clamp:ee,euclideanModulo:oh,mapLinear:lp,inverseLerp:cp,lerp:Lr,damp:hp,pingpong:up,smoothstep:dp,smootherstep:fp,randInt:pp,randFloat:mp,randFloatSpread:gp,seededRandom:_p,degToRad:xp,radToDeg:vp,isPowerOfTwo:yp,ceilPowerOfTwo:Mp,floorPowerOfTwo:Sp,setQuaternionFromProperEuler:bp,normalize:cn,denormalize:Bs},ft=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Mn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],E=r[a+3];if(d!==E||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*E;m<0&&(u=-u,f=-f,g=-g,E=-E,m=-m);let p=1-o;if(m<.9995){let T=Math.acos(m),P=Math.sin(T);p=Math.sin(p*T)/P,o=Math.sin(o*T)/P,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+E*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+E*o;let T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return rc.copy(this).projectOnVector(t),this.sub(rc)}reflect(t){return this.sub(rc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},rc=new F,hu=new Mn,Zt=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],E=s[0],m=s[3],p=s[6],T=s[1],P=s[4],y=s[7],A=s[2],w=s[5],D=s[8];return r[0]=a*E+o*T+l*A,r[3]=a*m+o*P+l*w,r[6]=a*p+o*y+l*D,r[1]=c*E+h*T+d*A,r[4]=c*m+h*P+d*w,r[7]=c*p+h*y+d*D,r[2]=u*E+f*T+g*A,r[5]=u*m+f*P+g*w,r[8]=u*p+f*y+g*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/g;return t[0]=d*E,t[1]=(s*c-h*i)*E,t[2]=(o*i-s*a)*E,t[3]=u*E,t[4]=(h*e-s*l)*E,t[5]=(s*r-o*e)*E,t[6]=f*E,t[7]=(i*l-c*e)*E,t[8]=(a*e-i*r)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ac.makeScale(t,e)),this}rotate(t){return Ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ac.makeRotation(-t)),this}translate(t,e){return Ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ac.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ac=new Zt,uu=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),du=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ep(){let n={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ge&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ge&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wn?Or:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Fr]:{primaries:t,whitePoint:i,transfer:Or,toXYZ:uu,fromXYZ:du,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:t,whitePoint:i,transfer:ge,toXYZ:uu,fromXYZ:du,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}}),n}var oe=Ep();function pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var bs,vo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{bs===void 0&&(bs=Gs("canvas")),bs.width=t.width,bs.height=t.height;let s=bs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=bs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Gs("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=pi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(pi(e[i]/255)*255):e[i]=pi(e[i]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Tp=0,qs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=ls(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(oc(s[a].image)):r.push(oc(s[a]))}else r=oc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function oc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?vo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}var wp=0,lc=new F,sn=class n extends zn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=yn,s=yn,r=je,a=Ui,o=Nn,l=mn,c=n.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=ls(),this.name="",this.source=new qs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(lc).x}get height(){return this.source.getSize(lc).y}get depth(){return this.source.getSize(lc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vs:t.x=t.x-Math.floor(t.x);break;case yn:t.x=t.x<0?0:1;break;case _o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vs:t.y=t.y-Math.floor(t.y);break;case yn:t.y=t.y<0?0:1;break;case _o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=jc;sn.DEFAULT_ANISOTROPY=1;var Re=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],E=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let P=(c+1)/2,y=(f+1)/2,A=(p+1)/2,w=(h+u)/4,D=(d+E)/4,_=(g+m)/4;return P>y&&P>A?P<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(P),s=w/i,r=D/i):y>A?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=w/s,r=_/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=D/r,s=_/r),this.set(i,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(d-E)*(d-E)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-E)/T,this.z=(u-h)/T,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yo=class extends zn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new sn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new qs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends yo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Br=class extends sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Mo=class extends sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var _e=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,o,l,c,h,d,u,f,g,E,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,d,u,f,g,E,m)}set(t,e,i,s,r,a,o,l,c,h,d,u,f,g,E,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=E,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Es.setFromMatrixColumn(t,0).length(),r=1/Es.setFromMatrixColumn(t,1).length(),a=1/Es.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,E=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-E*c,e[9]=-o*l,e[2]=E-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,E=c*d;e[0]=u+E*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=E+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,E=c*d;e[0]=u-E*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=E-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,E=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+E,e[1]=l*d,e[5]=E*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,E=o*c;e[0]=l*h,e[4]=E-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-E*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,E=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+E,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=E*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ap,t,Rp)}lookAt(t,e,i){let s=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),xi.crossVectors(i,_n),xi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),xi.crossVectors(i,_n)),xi.normalize(),Ba.crossVectors(_n,xi),s[0]=xi.x,s[4]=Ba.x,s[8]=_n.x,s[1]=xi.y,s[5]=Ba.y,s[9]=_n.y,s[2]=xi.z,s[6]=Ba.z,s[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],E=i[6],m=i[10],p=i[14],T=i[3],P=i[7],y=i[11],A=i[15],w=s[0],D=s[4],_=s[8],x=s[12],N=s[1],B=s[5],H=s[9],J=s[13],z=s[2],k=s[6],tt=s[10],G=s[14],rt=s[3],$=s[7],ot=s[11],lt=s[15];return r[0]=a*w+o*N+l*z+c*rt,r[4]=a*D+o*B+l*k+c*$,r[8]=a*_+o*H+l*tt+c*ot,r[12]=a*x+o*J+l*G+c*lt,r[1]=h*w+d*N+u*z+f*rt,r[5]=h*D+d*B+u*k+f*$,r[9]=h*_+d*H+u*tt+f*ot,r[13]=h*x+d*J+u*G+f*lt,r[2]=g*w+E*N+m*z+p*rt,r[6]=g*D+E*B+m*k+p*$,r[10]=g*_+E*H+m*tt+p*ot,r[14]=g*x+E*J+m*G+p*lt,r[3]=T*w+P*N+y*z+A*rt,r[7]=T*D+P*B+y*k+A*$,r[11]=T*_+P*H+y*tt+A*ot,r[15]=T*x+P*J+y*G+A*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],E=t[7],m=t[11],p=t[15],T=l*f-c*u,P=o*f-c*d,y=o*u-l*d,A=a*f-c*h,w=a*u-l*h,D=a*d-o*h;return e*(E*T-m*P+p*y)-i*(g*T-m*A+p*w)+s*(g*P-E*A+p*D)-r*(g*y-E*w+m*D)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],E=t[13],m=t[14],p=t[15],T=e*o-i*a,P=e*l-s*a,y=e*c-r*a,A=i*l-s*o,w=i*c-r*o,D=s*c-r*l,_=h*E-d*g,x=h*m-u*g,N=h*p-f*g,B=d*m-u*E,H=d*p-f*E,J=u*p-f*m,z=T*J-P*H+y*B+A*N-w*x+D*_;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/z;return t[0]=(o*J-l*H+c*B)*k,t[1]=(s*H-i*J-r*B)*k,t[2]=(E*D-m*w+p*A)*k,t[3]=(u*w-d*D-f*A)*k,t[4]=(l*N-a*J-c*x)*k,t[5]=(e*J-s*N+r*x)*k,t[6]=(m*y-g*D-p*P)*k,t[7]=(h*D-u*y+f*P)*k,t[8]=(a*H-o*N+c*_)*k,t[9]=(i*N-e*H-r*_)*k,t[10]=(g*w-E*y+p*T)*k,t[11]=(d*y-h*w-f*T)*k,t[12]=(o*x-a*B-l*_)*k,t[13]=(e*B-i*x+s*_)*k,t[14]=(E*P-g*A-m*T)*k,t[15]=(h*A-d*P+u*T)*k,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,E=a*h,m=a*d,p=o*d,T=l*c,P=l*h,y=l*d,A=i.x,w=i.y,D=i.z;return s[0]=(1-(E+p))*A,s[1]=(f+y)*A,s[2]=(g-P)*A,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(u+p))*w,s[6]=(m+T)*w,s[7]=0,s[8]=(g+P)*D,s[9]=(m-T)*D,s[10]=(1-(u+E))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Es.set(s[0],s[1],s[2]).length(),o=Es.set(s[4],s[5],s[6]).length(),l=Es.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Un.copy(this);let c=1/a,h=1/o,d=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,e.setFromRotationMatrix(Un),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Bn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),g,E;if(l)g=r/(a-r),E=a*r/(a-r);else if(o===Bn)g=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(o===Hs)g=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Bn,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s),g,E;if(l)g=1/(a-r),E=a/(a-r);else if(o===Bn)g=-2/(a-r),E=-(a+r)/(a-r);else if(o===Hs)g=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Es=new F,Un=new _e,Ap=new F(0,0,0),Rp=new F(1,1,1),xi=new F,Ba=new F,_n=new F,fu=new _e,pu=new Mn,kn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return fu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pu.setFromEuler(this),this.setFromQuaternion(pu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";var Ys=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Cp=0,mu=new F,Ts=new Mn,ci=new _e,za=new F,Er=new F,Pp=new F,Ip=new Mn,gu=new F(1,0,0),_u=new F(0,1,0),xu=new F(0,0,1),vu={type:"added"},Lp={type:"removed"},ws={type:"childadded",child:null},cc={type:"childremoved",child:null},rn=class n extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,e=new kn,i=new Mn,s=new F(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new Zt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(gu,t)}rotateY(t){return this.rotateOnAxis(_u,t)}rotateZ(t){return this.rotateOnAxis(xu,t)}translateOnAxis(t,e){return mu.copy(t).applyQuaternion(this.quaternion),this.position.add(mu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gu,t)}translateY(t){return this.translateOnAxis(_u,t)}translateZ(t){return this.translateOnAxis(xu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?za.copy(t):za.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Er,za,this.up):ci.lookAt(za,Er,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(ci),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vu),ws.child=t,this.dispatchEvent(ws),ws.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lp),cc.child=t,this.dispatchEvent(cc),cc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vu),ws.child=t,this.dispatchEvent(ws),ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,Pp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,Ip,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};rn.DEFAULT_UP=new F(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ke=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dp={type:"move"},Zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let E of t.hand.values()){let m=e.getJointPose(E,i),p=this._getHandJoint(c,E);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ke;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},ka={h:0,s:0,l:0};function hc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var qt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=oe.workingColorSpace){if(t=oh(t,1),e=ee(e,0,1),i=ee(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=hc(a,r,t+1/3),this.g=hc(a,r,t),this.b=hc(a,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=qe){function i(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){let i=Td[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return oe.workingToColorSpace(nn.copy(this),t),Math.round(ee(nn.r*255,0,255))*65536+Math.round(ee(nn.g*255,0,255))*256+Math.round(ee(nn.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(nn.copy(this),e);let i=nn.r,s=nn.g,r=nn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=qe){oe.workingToColorSpace(nn.copy(this),t);let e=nn.r,i=nn.g,s=nn.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(ka);let i=Lr(vi.h,ka.h,e),s=Lr(vi.s,ka.s,e),r=Lr(vi.l,ka.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new qt;qt.NAMES=Td;var zr=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},$i=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fn=new F,hi=new F,uc=new F,ui=new F,As=new F,Rs=new F,yu=new F,dc=new F,fc=new F,pc=new F,mc=new Re,gc=new Re,_c=new Re,bi=class n{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Fn.subVectors(t,e),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Fn.subVectors(s,e),hi.subVectors(i,e),uc.subVectors(t,e);let a=Fn.dot(Fn),o=Fn.dot(hi),l=Fn.dot(uc),c=hi.dot(hi),h=hi.dot(uc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(a,ui.y),l.addScaledVector(o,ui.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return mc.setScalar(0),gc.setScalar(0),_c.setScalar(0),mc.fromBufferAttribute(t,e),gc.fromBufferAttribute(t,i),_c.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(mc,r.x),a.addScaledVector(gc,r.y),a.addScaledVector(_c,r.z),a}static isFrontFacing(t,e,i,s){return Fn.subVectors(i,e),hi.subVectors(t,e),Fn.cross(hi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Fn.cross(hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;As.subVectors(s,i),Rs.subVectors(r,i),dc.subVectors(t,i);let l=As.dot(dc),c=Rs.dot(dc);if(l<=0&&c<=0)return e.copy(i);fc.subVectors(t,s);let h=As.dot(fc),d=Rs.dot(fc);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(As,a);pc.subVectors(t,r);let f=As.dot(pc),g=Rs.dot(pc);if(g>=0&&f<=g)return e.copy(r);let E=f*c-l*g;if(E<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Rs,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return yu.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(yu,o);let p=1/(m+E+u);return a=E*p,o=u*p,e.copy(i).addScaledVector(As,a).addScaledVector(Rs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Kn=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Va.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Va.copy(i.boundingBox)),Va.applyMatrix4(t.matrixWorld),this.union(Va)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tr),Ha.subVectors(this.max,Tr),Cs.subVectors(t.a,Tr),Ps.subVectors(t.b,Tr),Is.subVectors(t.c,Tr),yi.subVectors(Ps,Cs),Mi.subVectors(Is,Ps),Xi.subVectors(Cs,Is);let e=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Xi.z,Xi.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Xi.z,0,-Xi.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Xi.y,Xi.x,0];return!xc(e,Cs,Ps,Is,Ha)||(e=[1,0,0,0,1,0,0,0,1],!xc(e,Cs,Ps,Is,Ha))?!1:(Ga.crossVectors(yi,Mi),e=[Ga.x,Ga.y,Ga.z],xc(e,Cs,Ps,Is,Ha))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},di=[new F,new F,new F,new F,new F,new F,new F,new F],On=new F,Va=new Kn,Cs=new F,Ps=new F,Is=new F,yi=new F,Mi=new F,Xi=new F,Tr=new F,Ha=new F,Ga=new F,qi=new F;function xc(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){qi.fromArray(n,r);let o=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),l=t.dot(qi),c=e.dot(qi),h=i.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Oe=new F,Wa=new ft,Np=0,hn=class extends zn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Np++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=yd,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Wa.fromBufferAttribute(this,e),Wa.applyMatrix3(t),this.setXY(e,Wa.x,Wa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Bs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=cn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bs(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bs(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bs(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var kr=class extends hn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Vr=class extends hn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var de=class extends hn{constructor(t,e,i){super(new Float32Array(t),e,i)}},Up=new Kn,wr=new F,vc=new F,Ei=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Up.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wr.subVectors(t,this.center);let e=wr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(wr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wr.copy(t.center).add(vc)),this.expandByPoint(wr.copy(t.center).sub(vc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Fp=0,Pn=new _e,yc=new rn,Ls=new F,xn=new Kn,Ar=new Kn,Xe=new F,Be=class n extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ap(t)?Vr:kr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,i){return Pn.makeTranslation(t,e,i),this.applyMatrix4(Pn),this}scale(t,e,i){return Pn.makeScale(t,e,i),this.applyMatrix4(Pn),this}lookAt(t){return yc.lookAt(t),yc.updateMatrix(),this.applyMatrix4(yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let i=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ar.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(xn.min,Ar.min),xn.expandByPoint(Xe),Xe.addVectors(xn.max,Ar.max),xn.expandByPoint(Xe)):(xn.expandByPoint(Ar.min),xn.expandByPoint(Ar.max))}xn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xe.fromBufferAttribute(o,c),l&&(Ls.fromBufferAttribute(t,c),Xe.add(Ls)),s=Math.max(s,i.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new hn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new F,l[_]=new F;let c=new F,h=new F,d=new F,u=new ft,f=new ft,g=new ft,E=new F,m=new F;function p(_,x,N){c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,x),d.fromBufferAttribute(i,N),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,x),g.fromBufferAttribute(r,N),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let B=1/(f.x*g.y-g.x*f.y);isFinite(B)&&(E.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(B),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(B),o[_].add(E),o[x].add(E),o[N].add(E),l[_].add(m),l[x].add(m),l[N].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let _=0,x=T.length;_<x;++_){let N=T[_],B=N.start,H=N.count;for(let J=B,z=B+H;J<z;J+=3)p(t.getX(J+0),t.getX(J+1),t.getX(J+2))}let P=new F,y=new F,A=new F,w=new F;function D(_){A.fromBufferAttribute(s,_),w.copy(A);let x=o[_];P.copy(x),P.sub(A.multiplyScalar(A.dot(x))).normalize(),y.crossVectors(w,x);let B=y.dot(l[_])<0?-1:1;a.setXYZW(_,P.x,P.y,P.z,B)}for(let _=0,x=T.length;_<x;++_){let N=T[_],B=N.start,H=N.count;for(let J=B,z=B+H;J<z;J+=3)D(t.getX(J+0)),D(t.getX(J+1)),D(t.getX(J+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),E=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,E),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let E=0,m=l.length;E<m;E++){o.isInterleavedBufferAttribute?f=l[E]*o.data.stride+o.offset:f=l[E]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new hn(u,h,d)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Mc=new F,Op=new F,Bp=new Zt,vn=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Mc.subVectors(i,e).cross(Op.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Mc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Bp.getNormalMatrix(t),s=this.coplanarPoint(Mc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},zp=0,jn=class extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=ar,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wc,this.blendDst=Xc,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oo,this.stencilZFail=oo,this.stencilZPass=oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new vn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ft().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var fi=new F,Sc=new F,Xa=new F,qa=new F,Ki=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fi.copy(this.origin).addScaledVector(this.direction,e),fi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Sc.copy(t).add(e).multiplyScalar(.5),Xa.copy(e).sub(t).normalize(),qa.copy(this.origin).sub(Sc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Xa),o=qa.dot(this.direction),l=-qa.dot(Xa),c=qa.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let E=1/h;d*=E,u*=E,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Sc).addScaledVector(Xa,u),f}intersectSphere(t,e){if(t.radius<0)return null;fi.subVectors(t.center,this.origin);let i=fi.dot(this.direction),s=fi.dot(fi)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,fi)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,E=e.y-a.y,m=e.z-a.z,p=i.x-a.x,T=i.y-a.y,P=i.z-a.z,y=Math.abs(l),A=Math.abs(c),w=Math.abs(h),D,_,x,N,B,H,J,z,k,tt,G,rt;if(y>=A&&y>=w?(x=l,H=d,k=g,rt=p,l>=0?(D=c,_=h,N=u,B=f,J=E,z=m,tt=T,G=P):(D=h,_=c,N=f,B=u,J=m,z=E,tt=P,G=T)):A>=w?(x=c,H=u,k=E,rt=T,c>=0?(D=h,_=l,N=f,B=d,J=m,z=g,tt=P,G=p):(D=l,_=h,N=d,B=f,J=g,z=m,tt=p,G=P)):(x=h,H=f,k=m,rt=P,h>=0?(D=l,_=c,N=d,B=u,J=g,z=E,tt=p,G=T):(D=c,_=l,N=u,B=d,J=E,z=g,tt=T,G=p)),x===0)return null;let $=D/x,ot=_/x,lt=1/x,It=N-$*H,Ct=B-ot*H,Jt=J-$*k,Kt=z-ot*k,ie=tt-$*rt,j=G-ot*rt,it=ie*Kt-j*Jt,xt=It*j-Ct*ie,kt=Jt*Ct-Kt*It;if(s){if(it<0||xt<0||kt<0)return null}else if((it<0||xt<0||kt<0)&&(it>0||xt>0||kt>0))return null;let At=it+xt+kt;if(At===0)return null;let Vt=lt*(it*H+xt*k+kt*rt);return(At>0?Vt<0:Vt>0)?null:this.at(Vt/At,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},In=class extends jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Mu=new _e,Yi=new Ki,Ya=new Ei,Su=new F,Za=new F,Ja=new F,$a=new F,bc=new F,Ka=new F,bu=new F,ja=new F,xe=class extends rn{constructor(t=new Be,e=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ka.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(bc.fromBufferAttribute(d,t),a?Ka.addScaledVector(bc,h):Ka.addScaledVector(bc.sub(e),h))}e.add(Ka)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(r),Yi.copy(t.ray).recast(t.near),!(Ya.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Ya,Su)===null||Yi.origin.distanceToSquared(Su)>(t.far-t.near)**2))&&(Mu.copy(r).invert(),Yi.copy(t.ray).applyMatrix4(Mu),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,E=u.length;g<E;g++){let m=u[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),P=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,A=P;y<A;y+=3){let w=o.getX(y),D=o.getX(y+1),_=o.getX(y+2);s=Qa(this,p,t,i,c,h,d,w,D,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(o.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let T=o.getX(m),P=o.getX(m+1),y=o.getX(m+2);s=Qa(this,a,t,i,c,h,d,T,P,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,E=u.length;g<E;g++){let m=u[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),P=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,A=P;y<A;y+=3){let w=y,D=y+1,_=y+2;s=Qa(this,p,t,i,c,h,d,w,D,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(l.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let T=m,P=m+1,y=m+2;s=Qa(this,a,t,i,c,h,d,T,P,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function kp(n,t,e,i,s,r,a,o){let l;if(t.side===un?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Di,o),l===null)return null;ja.copy(o),ja.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(ja);return c<e.near||c>e.far?null:{distance:c,point:ja.clone(),object:n}}function Qa(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Za),n.getVertexPosition(l,Ja),n.getVertexPosition(c,$a);let h=kp(n,t,e,i,Za,Ja,$a,bu);if(h){let d=new F;bi.getBarycoord(bu,Za,Ja,$a,d),s&&(h.uv=bi.getInterpolatedAttribute(s,o,l,c,d,new ft)),r&&(h.uv1=bi.getInterpolatedAttribute(r,o,l,c,d,new ft)),a&&(h.normal=bi.getInterpolatedAttribute(a,o,l,c,d,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new F,materialIndex:0};bi.getNormal(Za,Ja,$a,u.normal),h.face=u,h.barycoord=d}return h}var Hr=class extends sn{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Ze,h=Ze,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Js=class extends hn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ds=new _e,Eu=new _e,to=[],Tu=new Kn,Vp=new _e,Rr=new xe,Cr=new Ei,Gr=class extends xe{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Js(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Vp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ds),Tu.copy(t.boundingBox).applyMatrix4(Ds),this.boundingBox.union(Tu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ds),Cr.copy(t.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(Cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Rr.geometry=this.geometry,Rr.material=this.material,Rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cr.copy(this.boundingSphere),Cr.applyMatrix4(i),t.ray.intersectsSphere(Cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ds),Eu.multiplyMatrices(i,Ds),Rr.matrixWorld=Eu,Rr.raycast(t,to);for(let a=0,o=to.length;a<o;a++){let l=to[a];l.instanceId=r,l.object=this,e.push(l)}to.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Js(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Hr(new Float32Array(s*this.count),s,this.count,jo,Dn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Zi=new Ei,Hp=new ft(.5,.5),eo=new F,$s=class{constructor(t=new vn,e=new vn,i=new vn,s=new vn,r=new vn,a=new vn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Bn,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],E=r[9],m=r[10],p=r[11],T=r[12],P=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-a,f-h,p-g,A-T).normalize(),s[1].setComponents(c+a,f+h,p+g,A+T).normalize(),s[2].setComponents(c+o,f+d,p+E,A+P).normalize(),s[3].setComponents(c-o,f-d,p-E,A-P).normalize(),i)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,f-u,p-m,A-y).normalize();else if(s[4].setComponents(c-l,f-u,p-m,A-y).normalize(),e===Bn)s[5].setComponents(c+l,f+u,p+m,A+y).normalize();else if(e===Hs)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(t){Zi.center.set(0,0,0);let e=Hp.distanceTo(t.center);return Zi.radius=.7071067811865476+e,Zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(eo.x=s.normal.x>0?t.max.x:t.min.x,eo.y=s.normal.y>0?t.max.y:t.min.y,eo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(eo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Wr=class extends sn{constructor(t=[],e=Ni,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xr=class extends sn{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ti=class extends sn{constructor(t,e,i=Hn,s,r,a,o=Ze,l=Ze,c,h=$n,d=1){if(h!==$n&&h!==Fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},So=class extends Ti{constructor(t,e=Hn,i=Ni,s,r,a=Ze,o=Ze,l,c=$n){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},qr=class extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ze=class n extends Be{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(d,2));function g(E,m,p,T,P,y,A,w,D,_,x){let N=y/D,B=A/_,H=y/2,J=A/2,z=w/2,k=D+1,tt=_+1,G=0,rt=0,$=new F;for(let ot=0;ot<tt;ot++){let lt=ot*B-J;for(let It=0;It<k;It++){let Ct=It*N-H;$[E]=Ct*T,$[m]=lt*P,$[p]=z,c.push($.x,$.y,$.z),$[E]=0,$[m]=0,$[p]=w>0?1:-1,h.push($.x,$.y,$.z),d.push(It/D),d.push(1-ot/_),G+=1}}for(let ot=0;ot<_;ot++)for(let lt=0;lt<D;lt++){let It=u+lt+k*ot,Ct=u+lt+k*(ot+1),Jt=u+(lt+1)+k*(ot+1),Kt=u+(lt+1)+k*ot;l.push(It,Ct,Kt),l.push(Ct,Jt,Kt),rt+=6}o.addGroup(f,rt,x),f+=rt,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Qn=class n extends Be{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,E=[],m=i/2,p=0;T(),a===!1&&(t>0&&P(!0),e>0&&P(!1)),this.setIndex(h),this.setAttribute("position",new de(d,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(f,2));function T(){let y=new F,A=new F,w=0,D=(e-t)/i;for(let _=0;_<=r;_++){let x=[],N=_/r,B=N*(e-t)+t;for(let H=0;H<=s;H++){let J=H/s,z=J*l+o,k=Math.sin(z),tt=Math.cos(z);A.x=B*k,A.y=-N*i+m,A.z=B*tt,d.push(A.x,A.y,A.z),y.set(k,D,tt).normalize(),u.push(y.x,y.y,y.z),f.push(J,1-N),x.push(g++)}E.push(x)}for(let _=0;_<s;_++)for(let x=0;x<r;x++){let N=E[x][_],B=E[x+1][_],H=E[x+1][_+1],J=E[x][_+1];(t>0||x!==0)&&(h.push(N,B,J),w+=3),(e>0||x!==r-1)&&(h.push(B,H,J),w+=3)}c.addGroup(p,w,0),p+=w}function P(y){let A=g,w=new ft,D=new F,_=0,x=y===!0?t:e,N=y===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,m*N,0),u.push(0,N,0),f.push(.5,.5),g++;let B=g;for(let H=0;H<=s;H++){let z=H/s*l+o,k=Math.cos(z),tt=Math.sin(z);D.x=x*tt,D.y=m*N,D.z=x*k,d.push(D.x,D.y,D.z),u.push(0,N,0),w.x=k*.5+.5,w.y=tt*.5*N+.5,f.push(w.x,w.y),g++}for(let H=0;H<s;H++){let J=A+H,z=B+H;y===!0?h.push(z,z+1,J):h.push(z+1,z,J),_+=3}c.addGroup(p,_,y===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wi=class n extends Qn{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},bo=class n extends Be{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(r.slice(),3)),this.setAttribute("uv",new de(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(T){let P=new F,y=new F,A=new F;for(let w=0;w<e.length;w+=3)f(e[w+0],P),f(e[w+1],y),f(e[w+2],A),l(P,y,A,T)}function l(T,P,y,A){let w=A+1,D=[];for(let _=0;_<=w;_++){D[_]=[];let x=T.clone().lerp(y,_/w),N=P.clone().lerp(y,_/w),B=w-_;for(let H=0;H<=B;H++)H===0&&_===w?D[_][H]=x:D[_][H]=x.clone().lerp(N,H/B)}for(let _=0;_<w;_++)for(let x=0;x<2*(w-_)-1;x++){let N=Math.floor(x/2);x%2===0?(u(D[_][N+1]),u(D[_+1][N]),u(D[_][N])):(u(D[_][N+1]),u(D[_+1][N+1]),u(D[_+1][N]))}}function c(T){let P=new F;for(let y=0;y<r.length;y+=3)P.x=r[y+0],P.y=r[y+1],P.z=r[y+2],P.normalize().multiplyScalar(T),r[y+0]=P.x,r[y+1]=P.y,r[y+2]=P.z}function h(){let T=new F;for(let P=0;P<r.length;P+=3){T.x=r[P+0],T.y=r[P+1],T.z=r[P+2];let y=m(T)/2/Math.PI+.5,A=p(T)/Math.PI+.5;a.push(y,1-A)}g(),d()}function d(){for(let T=0;T<a.length;T+=6){let P=a[T+0],y=a[T+2],A=a[T+4],w=Math.max(P,y,A),D=Math.min(P,y,A);w>.9&&D<.1&&(P<.2&&(a[T+0]+=1),y<.2&&(a[T+2]+=1),A<.2&&(a[T+4]+=1))}}function u(T){r.push(T.x,T.y,T.z)}function f(T,P){let y=T*3;P.x=t[y+0],P.y=t[y+1],P.z=t[y+2]}function g(){let T=new F,P=new F,y=new F,A=new F,w=new ft,D=new ft,_=new ft;for(let x=0,N=0;x<r.length;x+=9,N+=6){T.set(r[x+0],r[x+1],r[x+2]),P.set(r[x+3],r[x+4],r[x+5]),y.set(r[x+6],r[x+7],r[x+8]),w.set(a[N+0],a[N+1]),D.set(a[N+2],a[N+3]),_.set(a[N+4],a[N+5]),A.copy(T).add(P).add(y).divideScalar(3);let B=m(A);E(w,N+0,T,B),E(D,N+2,P,B),E(_,N+4,y,B)}}function E(T,P,y,A){A<0&&T.x===1&&(a[P]=T.x-1),y.x===0&&y.z===0&&(a[P]=A/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function p(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var Sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Gt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ft:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new F,s=[],r=[],a=[],o=new F,l=new _e;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ee(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ee(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ks=class extends Sn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ft){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Eo=class extends Ks{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function lh(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var wu=new F,Au=new F,Ec=new lh,Tc=new lh,wc=new lh,To=class extends Sn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new F){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Au.subVectors(s[0],s[1]).add(s[0]),c=Au);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(wu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=wu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),E=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);E<1e-4&&(E=1),g<1e-4&&(g=E),m<1e-4&&(m=E),Ec.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,E,m),Tc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,E,m),wc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,E,m)}else this.curveType==="catmullrom"&&(Ec.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Tc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),wc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Ec.calc(l),Tc.calc(l),wc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ru(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function Gp(n,t){let e=1-n;return e*e*t}function Wp(n,t){return 2*(1-n)*n*t}function Xp(n,t){return n*n*t}function Dr(n,t,e,i){return Gp(n,t)+Wp(n,e)+Xp(n,i)}function qp(n,t){let e=1-n;return e*e*e*t}function Yp(n,t){let e=1-n;return 3*e*e*n*t}function Zp(n,t){return 3*(1-n)*n*n*t}function Jp(n,t){return n*n*n*t}function Nr(n,t,e,i,s){return qp(n,t)+Yp(n,e)+Zp(n,i)+Jp(n,s)}var Yr=class extends Sn{constructor(t=new ft,e=new ft,i=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ft){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Nr(t,s.x,r.x,a.x,o.x),Nr(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wo=class extends Sn{constructor(t=new F,e=new F,i=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new F){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Nr(t,s.x,r.x,a.x,o.x),Nr(t,s.y,r.y,a.y,o.y),Nr(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zr=class extends Sn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ao=class extends Sn{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jr=class extends Sn{constructor(t=new ft,e=new ft,i=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ft){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Dr(t,s.x,r.x,a.x),Dr(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ro=class extends Sn{constructor(t=new F,e=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new F){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Dr(t,s.x,r.x,a.x),Dr(t,s.y,r.y,a.y),Dr(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$r=class extends Sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(Ru(o,l.x,c.x,h.x,d.x),Ru(o,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new ft().fromArray(s))}return this}},Dc=Object.freeze({__proto__:null,ArcCurve:Eo,CatmullRomCurve3:To,CubicBezierCurve:Yr,CubicBezierCurve3:wo,EllipseCurve:Ks,LineCurve:Zr,LineCurve3:Ao,QuadraticBezierCurve:Jr,QuadraticBezierCurve3:Ro,SplineCurve:$r}),Co=class extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Dc[s.type]().fromJSON(s))}return this}},Kr=class extends Co{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Zr(this.currentPoint.clone(),new ft(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Jr(this.currentPoint.clone(),new ft(t,e),new ft(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new Yr(this.currentPoint.clone(),new ft(t,e),new ft(i,s),new ft(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new $r(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new Ks(t,e,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ji=class extends Kr{constructor(t){super(t),this.uuid=ls(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Kr().fromJSON(s))}return this}};function $p(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=wd(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=em(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=n[u],g=n[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return jr(r,a,e,o,l,c,0),a}function wd(n,t,e,i,s){let r;if(s===dm(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=Cu(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=Cu(a/i|0,n[a],n[a+1],r);return r&&js(r,r.next)&&(ta(r),r=r.next),r}function Qi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(js(e,e.next)||Pe(e.prev,e,e.next)===0)){if(ta(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function jr(n,t,e,i,s,r,a){if(!n)return;!a&&r&&am(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?jp(n,i,s,r):Kp(n)){t.push(l.i,n.i,c.i),ta(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Qp(Qi(n),t),jr(n,t,e,i,s,r,2)):a===2&&tm(n,t,e,i,s,r):jr(Qi(n),t,e,i,s,r,1);break}}}function Kp(n){let t=n.prev,e=n,i=n.next;if(Pe(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Pr(s,o,r,l,a,c,g.x,g.y)&&Pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function jp(n,t,e,i){let s=n.prev,r=n,a=n.next;if(Pe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),E=Math.max(o,l,c),m=Math.max(h,d,u),p=Nc(f,g,t,e,i),T=Nc(E,m,t,e,i),P=n.prevZ,y=n.nextZ;for(;P&&P.z>=p&&y&&y.z<=T;){if(P.x>=f&&P.x<=E&&P.y>=g&&P.y<=m&&P!==s&&P!==a&&Pr(o,h,l,d,c,u,P.x,P.y)&&Pe(P.prev,P,P.next)>=0||(P=P.prevZ,y.x>=f&&y.x<=E&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Pr(o,h,l,d,c,u,y.x,y.y)&&Pe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;P&&P.z>=p;){if(P.x>=f&&P.x<=E&&P.y>=g&&P.y<=m&&P!==s&&P!==a&&Pr(o,h,l,d,c,u,P.x,P.y)&&Pe(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;y&&y.z<=T;){if(y.x>=f&&y.x<=E&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Pr(o,h,l,d,c,u,y.x,y.y)&&Pe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Qp(n,t){let e=n;do{let i=e.prev,s=e.next.next;!js(i,s)&&Rd(i,e,e.next,s)&&Qr(i,s)&&Qr(s,i)&&(t.push(i.i,e.i,s.i),ta(e),ta(e.next),e=n=s),e=e.next}while(e!==n);return Qi(e)}function tm(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&cm(a,o)){let l=Cd(a,o);a=Qi(a,a.next),l=Qi(l,l.next),jr(a,t,e,i,s,r,0),jr(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function em(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=wd(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(lm(c))}s.sort(nm);for(let r=0;r<s.length;r++)e=im(s[r],e);return e}function nm(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function im(n,t){let e=sm(n,t);if(!e)return t;let i=Cd(e,n);return Qi(i,i.next),Qi(e,e.next)}function sm(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(js(n,e))return e;do{if(js(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Ad(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let d=Math.abs(s-e.y)/(i-e.x);Qr(e,n)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&rm(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function rm(n,t){return Pe(n.prev,n,t.prev)<0&&Pe(t.next,n,n.next)<0}function am(n,t,e,i){let s=n;do s.z===0&&(s.z=Nc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,om(s)}function om(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function Nc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function lm(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ad(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function Pr(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&Ad(n,t,e,i,s,r,a,o)}function cm(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!hm(n,t)&&(Qr(n,t)&&Qr(t,n)&&um(n,t)&&(Pe(n.prev,n,t.prev)||Pe(n,t.prev,t))||js(n,t)&&Pe(n.prev,n,n.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function js(n,t){return n.x===t.x&&n.y===t.y}function Rd(n,t,e,i){let s=io(Pe(n,t,e)),r=io(Pe(n,t,i)),a=io(Pe(e,i,n)),o=io(Pe(e,i,t));return!!(s!==r&&a!==o||s===0&&no(n,e,t)||r===0&&no(n,i,t)||a===0&&no(e,n,i)||o===0&&no(e,t,i))}function no(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function io(n){return n>0?1:n<0?-1:0}function hm(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Rd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Qr(n,t){return Pe(n.prev,n,n.next)<0?Pe(n,t,n.next)>=0&&Pe(n,n.prev,t)>=0:Pe(n,t,n.prev)<0||Pe(n,n.next,t)<0}function um(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Cd(n,t){let e=Uc(n.i,n.x,n.y),i=Uc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Cu(n,t,e,i){let s=Uc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ta(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Uc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function dm(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Fc=class{static triangulate(t,e,i=2){return $p(t,e,i)}},Jn=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Pu(t),Iu(i,t);let a=t.length;e.forEach(Pu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Iu(i,e[l]);let o=Fc.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Pu(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Iu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var ea=class n extends Be{constructor(t=new ji([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new de(s,3)),this.setAttribute("uv",new de(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,E=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:fm,P,y=!1,A,w,D,_;if(p){P=p.getSpacedPoints(h),y=!0,u=!1;let st=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(h,st),w=new F,D=new F,_=new F}u||(m=0,f=0,g=0,E=0);let x=o.extractPoints(c),N=x.shape,B=x.holes;if(!Jn.isClockWise(N)){N=N.reverse();for(let st=0,ut=B.length;st<ut;st++){let dt=B[st];Jn.isClockWise(dt)&&(B[st]=dt.reverse())}}function J(st){let dt=10000000000000001e-36,gt=st[0];for(let _t=1;_t<=st.length;_t++){let zt=_t%st.length,Lt=st[zt],Ut=Lt.x-gt.x,Ht=Lt.y-gt.y,O=Ut*Ut+Ht*Ht,le=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(gt.x),Math.abs(gt.y)),Qt=dt*le*le;if(O<=Qt){st.splice(zt,1),_t--;continue}gt=Lt}}J(N),B.forEach(J);let z=B.length,k=N;for(let st=0;st<z;st++){let ut=B[st];N=N.concat(ut)}function tt(st,ut,dt){return ut||Wt("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(ut,dt)}let G=N.length;function rt(st,ut,dt){let gt,_t,zt,Lt=st.x-ut.x,Ut=st.y-ut.y,Ht=dt.x-st.x,O=dt.y-st.y,le=Lt*Lt+Ut*Ut,Qt=Lt*O-Ut*Ht;if(Math.abs(Qt)>Number.EPSILON){let R=Math.sqrt(le),v=Math.sqrt(Ht*Ht+O*O),U=ut.x-Ut/R,X=ut.y+Lt/R,et=dt.x-O/v,mt=dt.y+Ht/v,pt=((et-U)*O-(mt-X)*Ht)/(Lt*O-Ut*Ht);gt=U+Lt*pt-st.x,_t=X+Ut*pt-st.y;let nt=gt*gt+_t*_t;if(nt<=2)return new ft(gt,_t);zt=Math.sqrt(nt/2)}else{let R=!1;Lt>Number.EPSILON?Ht>Number.EPSILON&&(R=!0):Lt<-Number.EPSILON?Ht<-Number.EPSILON&&(R=!0):Math.sign(Ut)===Math.sign(O)&&(R=!0),R?(gt=-Ut,_t=Lt,zt=Math.sqrt(le)):(gt=Lt,_t=Ut,zt=Math.sqrt(le/2))}return new ft(gt/zt,_t/zt)}let $=[];for(let st=0,ut=k.length,dt=ut-1,gt=st+1;st<ut;st++,dt++,gt++)dt===ut&&(dt=0),gt===ut&&(gt=0),$[st]=rt(k[st],k[dt],k[gt]);let ot=[],lt,It=$.concat();for(let st=0,ut=z;st<ut;st++){let dt=B[st];lt=[];for(let gt=0,_t=dt.length,zt=_t-1,Lt=gt+1;gt<_t;gt++,zt++,Lt++)zt===_t&&(zt=0),Lt===_t&&(Lt=0),lt[gt]=rt(dt[gt],dt[zt],dt[Lt]);ot.push(lt),It=It.concat(lt)}let Ct;if(m===0)Ct=Jn.triangulateShape(k,B);else{let st=[],ut=[];for(let dt=0;dt<m;dt++){let gt=dt/m,_t=f*Math.cos(gt*Math.PI/2),zt=g*Math.sin(gt*Math.PI/2)+E;for(let Lt=0,Ut=k.length;Lt<Ut;Lt++){let Ht=tt(k[Lt],$[Lt],zt);xt(Ht.x,Ht.y,-_t),gt===0&&st.push(Ht)}for(let Lt=0,Ut=z;Lt<Ut;Lt++){let Ht=B[Lt];lt=ot[Lt];let O=[];for(let le=0,Qt=Ht.length;le<Qt;le++){let R=tt(Ht[le],lt[le],zt);xt(R.x,R.y,-_t),gt===0&&O.push(R)}gt===0&&ut.push(O)}}Ct=Jn.triangulateShape(st,ut)}let Jt=Ct.length,Kt=g+E;for(let st=0;st<G;st++){let ut=u?tt(N[st],It[st],Kt):N[st];y?(D.copy(A.normals[0]).multiplyScalar(ut.x),w.copy(A.binormals[0]).multiplyScalar(ut.y),_.copy(P[0]).add(D).add(w),xt(_.x,_.y,_.z)):xt(ut.x,ut.y,0)}for(let st=1;st<=h;st++)for(let ut=0;ut<G;ut++){let dt=u?tt(N[ut],It[ut],Kt):N[ut];y?(D.copy(A.normals[st]).multiplyScalar(dt.x),w.copy(A.binormals[st]).multiplyScalar(dt.y),_.copy(P[st]).add(D).add(w),xt(_.x,_.y,_.z)):xt(dt.x,dt.y,d/h*st)}for(let st=m-1;st>=0;st--){let ut=st/m,dt=f*Math.cos(ut*Math.PI/2),gt=g*Math.sin(ut*Math.PI/2)+E;for(let _t=0,zt=k.length;_t<zt;_t++){let Lt=tt(k[_t],$[_t],gt);xt(Lt.x,Lt.y,d+dt)}for(let _t=0,zt=B.length;_t<zt;_t++){let Lt=B[_t];lt=ot[_t];for(let Ut=0,Ht=Lt.length;Ut<Ht;Ut++){let O=tt(Lt[Ut],lt[Ut],gt);y?xt(O.x,O.y+P[h-1].y,P[h-1].x+dt):xt(O.x,O.y,d+dt)}}}ie(),j();function ie(){let st=s.length/3;if(u){let ut=0,dt=G*ut;for(let gt=0;gt<Jt;gt++){let _t=Ct[gt];kt(_t[2]+dt,_t[1]+dt,_t[0]+dt)}ut=h+m*2,dt=G*ut;for(let gt=0;gt<Jt;gt++){let _t=Ct[gt];kt(_t[0]+dt,_t[1]+dt,_t[2]+dt)}}else{for(let ut=0;ut<Jt;ut++){let dt=Ct[ut];kt(dt[2],dt[1],dt[0])}for(let ut=0;ut<Jt;ut++){let dt=Ct[ut];kt(dt[0]+G*h,dt[1]+G*h,dt[2]+G*h)}}i.addGroup(st,s.length/3-st,0)}function j(){let st=s.length/3,ut=0;it(k,ut),ut+=k.length;for(let dt=0,gt=B.length;dt<gt;dt++){let _t=B[dt];it(_t,ut),ut+=_t.length}i.addGroup(st,s.length/3-st,1)}function it(st,ut){let dt=st.length;for(;--dt>=0;){let gt=dt,_t=dt-1;_t<0&&(_t=st.length-1);for(let zt=0,Lt=h+m*2;zt<Lt;zt++){let Ut=G*zt,Ht=G*(zt+1),O=ut+gt+Ut,le=ut+_t+Ut,Qt=ut+_t+Ht,R=ut+gt+Ht;At(O,le,Qt,R)}}}function xt(st,ut,dt){l.push(st),l.push(ut),l.push(dt)}function kt(st,ut,dt){Vt(st),Vt(ut),Vt(dt);let gt=s.length/3,_t=T.generateTopUV(i,s,gt-3,gt-2,gt-1);ce(_t[0]),ce(_t[1]),ce(_t[2])}function At(st,ut,dt,gt){Vt(st),Vt(ut),Vt(gt),Vt(ut),Vt(dt),Vt(gt);let _t=s.length/3,zt=T.generateSideWallUV(i,s,_t-6,_t-3,_t-2,_t-1);ce(zt[0]),ce(zt[1]),ce(zt[3]),ce(zt[1]),ce(zt[2]),ce(zt[3])}function Vt(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function ce(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return pm(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Dc[s.type]().fromJSON(s)),new n(i,t.options)}},fm={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new ft(r,a),new ft(o,l),new ft(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],E=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ft(a,1-l),new ft(c,1-d),new ft(u,1-g),new ft(E,1-p)]:[new ft(o,1-l),new ft(h,1-d),new ft(f,1-g),new ft(m,1-p)]}};function pm(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ts=class n extends bo{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Ln=class n extends Be{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],E=[],m=[];for(let p=0;p<h;p++){let T=p*u-a;for(let P=0;P<c;P++){let y=P*d-r;g.push(y,-T,0),E.push(0,0,1),m.push(P/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){let P=T+c*p,y=T+c*(p+1),A=T+1+c*(p+1),w=T+1+c*p;f.push(P,y,w),f.push(y,A,w)}this.setIndex(f),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(E,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var na=class n extends Be{constructor(t=new ji([new ft(0,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new de(s,3)),this.setAttribute("normal",new de(r,3)),this.setAttribute("uv",new de(a,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,g=u.holes;Jn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let T=g[m];Jn.isClockWise(T)===!0&&(g[m]=T.reverse())}let E=Jn.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let T=g[m];f=f.concat(T)}for(let m=0,p=f.length;m<p;m++){let T=f[m];s.push(T.x,T.y,0),r.push(0,0,1),a.push(T.x,T.y)}for(let m=0,p=E.length;m<p;m++){let T=E[m],P=T[0]+d,y=T[1]+d,A=T[2]+d;i.push(P,y,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return mm(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];i.push(a)}return new n(i,t.curveSegments)}};function mm(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var Ai=class n extends Be{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new F,u=new F,f=[],g=[],E=[],m=[];for(let p=0;p<=i;p++){let T=[],P=p/i,y=a+P*o,A=t*Math.cos(y),w=Math.sqrt(t*t-A*A),D=0;p===0&&a===0?D=.5/e:p===i&&l===Math.PI&&(D=-.5/e);for(let _=0;_<=e;_++){let x=_/e,N=s+x*r;d.x=-w*Math.cos(N),d.y=A,d.z=w*Math.sin(N),g.push(d.x,d.y,d.z),u.copy(d).normalize(),E.push(u.x,u.y,u.z),m.push(x+D,1-P),T.push(c++)}h.push(T)}for(let p=0;p<i;p++)for(let T=0;T<e;T++){let P=h[p][T+1],y=h[p][T],A=h[p+1][T],w=h[p+1][T+1];(p!==0||a>0)&&f.push(P,y,w),(p!==i-1||l<Math.PI)&&f.push(y,A,w)}this.setIndex(f),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(E,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ia=class n extends Be{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new F,f=new F,g=new F;for(let E=0;E<=i;E++){let m=a+E/i*o;for(let p=0;p<=s;p++){let T=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(T),f.y=(t+e*Math.cos(m))*Math.sin(T),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(T),u.y=t*Math.sin(T),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(E/i)}}for(let E=1;E<=i;E++)for(let m=1;m<=s;m++){let p=(s+1)*E+m-1,T=(s+1)*(E-1)+m-1,P=(s+1)*(E-1)+m,y=(s+1)*E+m;l.push(p,T,y),l.push(T,P,y)}this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function cs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Lu(s))s.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Lu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function an(n){let t={};for(let e=0;e<n.length;e++){let i=cs(n[e]);for(let s in i)t[s]=i[s]}return t}function Lu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function gm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ch(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var Pd={clone:cs,merge:an},_m=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_m,this.fragmentShader=xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=gm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new qt().setHex(s.value);break;case"v2":this.uniforms[i].value=new ft().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Re().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Zt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new _e().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Po=class extends bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qs=class extends jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var es=class extends jn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qt(16777215),this.specular=new qt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=ha,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var sa=class extends jn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=ha,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Io=class extends jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Lo=class extends jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ns(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Ac(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ri=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Do=class extends Ri{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pc,endingEnd:Pc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ic:r=t,o=2*e-i;break;case Lc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ic:a=t,l=2*i-e;break;case Lc:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),E=g*g,m=E*g,p=-u*m+2*u*E-u*g,T=(1+u)*m+(-1.5-2*u)*E+(-.5+u)*g+1,P=(-1-f)*m+(1.5+f)*E+.5*g,y=f*m-f*E;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+T*a[c+A]+P*a[l+A]+y*a[d+A];return r}},No=class extends Ri{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Uo=class extends Ri{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Fo=class extends Ri{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-e)/(s-e),E=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*E+a[l+m]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let E=a[c+g],m=a[l+g],p=f*u+g*2,T=d[p],P=d[p+1],y=t*u+g*2,A=h[y],w=h[y+1],D=ym(i,e,T,A,s);r[g]=Id(D,E,P,w,m)}return r}};function Id(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function vm(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function ym(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Id(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=vm(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var En=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ns(e,this.TimeBufferType),this.values=Ns(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ns(t.times,Array),values:Ns(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Ac(t.settings)&&(i.settings={inTangents:Ns(t.settings.inTangents,Array),outTangents:Ns(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Uo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new No(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Do(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Fo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ur:e=this.InterpolantFactoryMethodDiscrete;break;case xo:e=this.InterpolantFactoryMethodLinear;break;case ao:e=this.InterpolantFactoryMethodSmooth;break;case Cc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Gt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ur;case this.InterpolantFactoryMethodLinear:return xo;case this.InterpolantFactoryMethodSmooth:return ao;case this.InterpolantFactoryMethodBezier:return Cc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Ac(this.settings)&&(Du(this.settings.inTangents,t),Du(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Wt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Wt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Wt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Wt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&op(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Wt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ao,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let E=e[d+g];if(E!==e[u+g]||E!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ac(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Du(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=xo;var Ci=class extends En{constructor(t,e,i){super(t,e,i)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Ur;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends En{constructor(t,e,i,s){super(t,e,i,s)}};Oo.prototype.ValueTypeName="color";var Bo=class extends En{constructor(t,e,i,s){super(t,e,i,s)}};Bo.prototype.ValueTypeName="number";var zo=class extends Ri{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Mn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ra=class extends En{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new zo(this.times,this.values,this.getValueSize(),t)}};ra.prototype.ValueTypeName="quaternion";ra.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends En{constructor(t,e,i){super(t,e,i)}};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Ur;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var ko=class extends En{constructor(t,e,i,s){super(t,e,i,s)}};ko.prototype.ValueTypeName="vector";var lo={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(Nu(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!Nu(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Nu(n){try{let t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Vo=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ld=new Vo,tr=class{constructor(t){this.manager=t!==void 0?t:Ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};tr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Us=new WeakMap,Ho=class extends tr{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=lo.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Us.get(a);d===void 0&&(d=[],Us.set(a,d)),d.push({onLoad:e,onError:s})}return a}let o=Gs("img");function l(){h(),e&&e(this);let d=Us.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Us.delete(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),lo.remove(`image:${t}`);let u=Us.get(this)||[];for(let f=0;f<u.length;f++){let g=u[f];g.onError&&g.onError(d)}Us.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),lo.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var aa=class extends tr{constructor(t){super(t)}load(t,e,i,s){let r=new sn,a=new Ho(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},er=class extends rn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ns=class extends er{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Rc=new _e,Uu=new F,Fu=new F,Go=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $s,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Uu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uu),Fu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Rc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Rc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Hs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Rc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},so=new F,ro=new Mn,Zn=new F,oa=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(so,ro,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(so,ro,Zn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(so,ro,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(so,ro,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Si=new F,Ou=new ft,Bu=new ft,Ye=class extends oa{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,Ou,Bu),e.subVectors(Bu,Ou)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ir*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var nr=class extends oa{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Oc=class extends Go{constructor(){super(new nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},is=class extends er{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new Oc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},la=class extends er{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Fs=-90,Os=1,Wo=class extends rn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ye(Fs,Os,t,e);s.layers=this.layers,this.add(s);let r=new Ye(Fs,Os,t,e);r.layers=this.layers,this.add(r);let a=new Ye(Fs,Os,t,e);a.layers=this.layers,this.add(a);let o=new Ye(Fs,Os,t,e);o.layers=this.layers,this.add(o);let l=new Ye(Fs,Os,t,e);l.layers=this.layers,this.add(l);let c=new Ye(Fs,Os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Hs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Xo=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var hh="\\[\\]\\.:\\/",Mm=new RegExp("["+hh+"]","g"),uh="[^"+hh+"]",Sm="[^"+hh.replace("\\.","")+"]",bm=/((?:WC+[\/:])*)/.source.replace("WC",uh),Em=/(WCOD+)?/.source.replace("WCOD",Sm),Tm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uh),wm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uh),Am=new RegExp("^"+bm+Em+Tm+wm+"$"),Rm=["material","materials","bones","map"],Bc=class{constructor(t,e,i){let s=i||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ae=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Mm,"")}static parseTrackName(t){let e=Am.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Rm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Gt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Wt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=Bc;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iy=new Float32Array(1);var zu=new _e,ir=class{constructor(t,e,i=0,s=1/0){this.ray=new Ki(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ys,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Wt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zu),this}intersectObject(t,e=!0,i=[]){return zc(t,this,i,e),i.sort(ku),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)zc(t[s],this,i,e);return i.sort(ku),i}};function ku(n,t){return n.distance-t.distance}function zc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)zc(r[a],t,e,!0)}}var sr=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ee(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var kc=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};var ca=class extends zn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function dh(n,t,e,i){let s=Cm(i);switch(e){case ih:return n*t;case jo:return n*t/s.components*s.byteLength;case Qo:return n*t/s.components*s.byteLength;case Oi:return n*t*2/s.components*s.byteLength;case tl:return n*t*2/s.components*s.byteLength;case sh:return n*t*3/s.components*s.byteLength;case Nn:return n*t*4/s.components*s.byteLength;case el:return n*t*4/s.components*s.byteLength;case pa:case ma:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ga:case _a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case il:case rl:return Math.max(n,16)*Math.max(t,8)/4;case nl:case sl:return Math.max(n,8)*Math.max(t,8)/2;case al:case ol:case cl:case hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ll:case xa:case ul:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case pl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ml:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case gl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case _l:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case xl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case vl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case yl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case bl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case El:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Tl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case wl:case Al:case Rl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Cl:case Pl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case va:case Il:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cm(n){switch(n){case mn:case Qc:return{byteLength:1,components:1};case or:case th:case Gn:return{byteLength:2,components:1};case $o:case Ko:return{byteLength:2,components:4};case Hn:case Jo:case Dn:return{byteLength:4,components:1};case eh:case nh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function tf(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Fm(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],E=d[f];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++u,d[u]=E)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let E=d[f];n.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bm=`#ifdef USE_ALPHAHASH
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
#endif`,zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gm=`#ifdef USE_AOMAP
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
#endif`,Wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xm=`#ifdef USE_BATCHING
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
#endif`,qm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$m=`#ifdef USE_IRIDESCENCE
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
#endif`,Km=`#ifdef USE_BUMPMAP
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
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ag=`#define PI 3.141592653589793
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
} // validated`,og=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lg=`vec3 transformedNormal = objectNormal;
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
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",pg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_g=`#ifdef USE_ENVMAP
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
#endif`,xg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vg=`#ifdef USE_ENVMAP
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
#endif`,yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eg=`#ifdef USE_GRADIENTMAP
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
}`,Tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Pg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ng=`PhysicalMaterial material;
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
#endif`,Ug=`uniform sampler2D dfgLUT;
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
}`,Fg=`
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
#endif`,Og=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,kg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yg=`#if defined( USE_POINTS_UV )
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
#endif`,Zg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$g=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qg=`#ifdef USE_MORPHTARGETS
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
#endif`,t0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,a0=`#ifdef USE_NORMALMAP
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
#endif`,o0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S0=`float getShadowMask() {
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
}`,b0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,T0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w0=`#ifdef USE_SKINNING
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
#endif`,A0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I0=`#ifdef USE_TRANSMISSION
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
#endif`,L0=`#ifdef USE_TRANSMISSION
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,O0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B0=`uniform sampler2D t2D;
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`#include <common>
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
}`,W0=`#if DEPTH_PACKING == 3200
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
}`,X0=`#define DISTANCE
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
}`,q0=`#define DISTANCE
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`uniform float scale;
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
}`,$0=`uniform vec3 diffuse;
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
}`,K0=`#include <common>
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
}`,j0=`uniform vec3 diffuse;
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
}`,Q0=`#define LAMBERT
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
}`,t_=`#define LAMBERT
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
}`,e_=`#define MATCAP
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
}`,n_=`#define MATCAP
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
}`,i_=`#define NORMAL
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
}`,s_=`#define NORMAL
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
}`,r_=`#define PHONG
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
}`,a_=`#define PHONG
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
}`,o_=`#define STANDARD
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
}`,l_=`#define STANDARD
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
}`,c_=`#define TOON
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
}`,h_=`#define TOON
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
}`,u_=`uniform float size;
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
}`,d_=`uniform vec3 diffuse;
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
}`,f_=`#include <common>
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
}`,p_=`uniform vec3 color;
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
}`,m_=`uniform float rotation;
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
}`,g_=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:Om,alphahash_pars_fragment:Bm,alphamap_fragment:zm,alphamap_pars_fragment:km,alphatest_fragment:Vm,alphatest_pars_fragment:Hm,aomap_fragment:Gm,aomap_pars_fragment:Wm,batching_pars_vertex:Xm,batching_vertex:qm,begin_vertex:Ym,beginnormal_vertex:Zm,bsdfs:Jm,iridescence_fragment:$m,bumpmap_pars_fragment:Km,clipping_planes_fragment:jm,clipping_planes_pars_fragment:Qm,clipping_planes_pars_vertex:tg,clipping_planes_vertex:eg,color_fragment:ng,color_pars_fragment:ig,color_pars_vertex:sg,color_vertex:rg,common:ag,cube_uv_reflection_fragment:og,defaultnormal_vertex:lg,displacementmap_pars_vertex:cg,displacementmap_vertex:hg,emissivemap_fragment:ug,emissivemap_pars_fragment:dg,colorspace_fragment:fg,colorspace_pars_fragment:pg,envmap_fragment:mg,envmap_common_pars_fragment:gg,envmap_pars_fragment:_g,envmap_pars_vertex:xg,envmap_physical_pars_fragment:Cg,envmap_vertex:vg,fog_vertex:yg,fog_pars_vertex:Mg,fog_fragment:Sg,fog_pars_fragment:bg,gradientmap_pars_fragment:Eg,lightmap_pars_fragment:Tg,lights_lambert_fragment:wg,lights_lambert_pars_fragment:Ag,lights_pars_begin:Rg,lights_toon_fragment:Pg,lights_toon_pars_fragment:Ig,lights_phong_fragment:Lg,lights_phong_pars_fragment:Dg,lights_physical_fragment:Ng,lights_physical_pars_fragment:Ug,lights_fragment_begin:Fg,lights_fragment_maps:Og,lights_fragment_end:Bg,lightprobes_pars_fragment:zg,logdepthbuf_fragment:kg,logdepthbuf_pars_fragment:Vg,logdepthbuf_pars_vertex:Hg,logdepthbuf_vertex:Gg,map_fragment:Wg,map_pars_fragment:Xg,map_particle_fragment:qg,map_particle_pars_fragment:Yg,metalnessmap_fragment:Zg,metalnessmap_pars_fragment:Jg,morphinstance_vertex:$g,morphcolor_vertex:Kg,morphnormal_vertex:jg,morphtarget_pars_vertex:Qg,morphtarget_vertex:t0,normal_fragment_begin:e0,normal_fragment_maps:n0,normal_pars_fragment:i0,normal_pars_vertex:s0,normal_vertex:r0,normalmap_pars_fragment:a0,clearcoat_normal_fragment_begin:o0,clearcoat_normal_fragment_maps:l0,clearcoat_pars_fragment:c0,iridescence_pars_fragment:h0,opaque_fragment:u0,packing:d0,premultiplied_alpha_fragment:f0,project_vertex:p0,dithering_fragment:m0,dithering_pars_fragment:g0,roughnessmap_fragment:_0,roughnessmap_pars_fragment:x0,shadowmap_pars_fragment:v0,shadowmap_pars_vertex:y0,shadowmap_vertex:M0,shadowmask_pars_fragment:S0,skinbase_vertex:b0,skinning_pars_vertex:E0,skinning_vertex:T0,skinnormal_vertex:w0,specularmap_fragment:A0,specularmap_pars_fragment:R0,tonemapping_fragment:C0,tonemapping_pars_fragment:P0,transmission_fragment:I0,transmission_pars_fragment:L0,uv_pars_fragment:D0,uv_pars_vertex:N0,uv_vertex:U0,worldpos_vertex:F0,background_vert:O0,background_frag:B0,backgroundCube_vert:z0,backgroundCube_frag:k0,cube_vert:V0,cube_frag:H0,depth_vert:G0,depth_frag:W0,distance_vert:X0,distance_frag:q0,equirect_vert:Y0,equirect_frag:Z0,linedashed_vert:J0,linedashed_frag:$0,meshbasic_vert:K0,meshbasic_frag:j0,meshlambert_vert:Q0,meshlambert_frag:t_,meshmatcap_vert:e_,meshmatcap_frag:n_,meshnormal_vert:i_,meshnormal_frag:s_,meshphong_vert:r_,meshphong_frag:a_,meshphysical_vert:o_,meshphysical_frag:l_,meshtoon_vert:c_,meshtoon_frag:h_,points_vert:u_,points_frag:d_,shadow_vert:f_,shadow_frag:p_,sprite_vert:m_,sprite_frag:g_},St={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},ni={basic:{uniforms:an([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:an([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:an([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:an([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:an([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new qt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:an([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:an([St.points,St.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:an([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:an([St.common,St.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:an([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:an([St.sprite,St.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:an([St.common,St.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:an([St.lights,St.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};ni.physical={uniforms:an([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var Nl={r:0,b:0,g:0},__=new _e,ef=new Zt;ef.set(-1,0,0,0,1,0,0,0,1);function x_(n,t,e,i,s,r){let a=new qt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(T){let P=T.isScene===!0?T.background:null;if(P&&P.isTexture){let y=T.backgroundBlurriness>0;P=t.get(P,y)}return P}function g(T){let P=!1,y=f(T);y===null?m(a,o):y&&y.isColor&&(m(y,1),P=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||P)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(T,P){let y=f(P);y&&(y.isCubeTexture||y.mapping===da)?(c===void 0&&(c=new xe(new ze(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:cs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(__.makeRotationFromEuler(P.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ef),c.material.toneMapped=oe.getTransfer(y.colorSpace)!==ge,(h!==y||d!==y.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new xe(new Ln(2,2),new bn({name:"BackgroundMaterial",uniforms:cs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=oe.getTransfer(y.colorSpace)!==ge,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,P){T.getRGB(Nl,ch(n)),e.buffers.color.setClear(Nl.r,Nl.g,Nl.b,P,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,P=1){a.set(T),o=P,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:g,addToRenderList:E,dispose:p}}function v_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(B,H,J,z,k){let tt=!1,G=d(B,z,J,H);r!==G&&(r=G,c(r.object)),tt=f(B,z,J,k),tt&&g(B,z,J,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(tt||a)&&(a=!1,y(B,H,J,z),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return n.createVertexArray()}function c(B){return n.bindVertexArray(B)}function h(B){return n.deleteVertexArray(B)}function d(B,H,J,z){let k=z.wireframe===!0,tt=i[H.id];tt===void 0&&(tt={},i[H.id]=tt);let G=B.isInstancedMesh===!0?B.id:0,rt=tt[G];rt===void 0&&(rt={},tt[G]=rt);let $=rt[J.id];$===void 0&&($={},rt[J.id]=$);let ot=$[k];return ot===void 0&&(ot=u(l()),$[k]=ot),ot}function u(B){let H=[],J=[],z=[];for(let k=0;k<e;k++)H[k]=0,J[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:J,attributeDivisors:z,object:B,attributes:{},index:null}}function f(B,H,J,z){let k=r.attributes,tt=H.attributes,G=0,rt=J.getAttributes();for(let $ in rt)if(rt[$].location>=0){let lt=k[$],It=tt[$];if(It===void 0&&($==="instanceMatrix"&&B.instanceMatrix&&(It=B.instanceMatrix),$==="instanceColor"&&B.instanceColor&&(It=B.instanceColor)),lt===void 0||lt.attribute!==It||It&&lt.data!==It.data)return!0;G++}return r.attributesNum!==G||r.index!==z}function g(B,H,J,z){let k={},tt=H.attributes,G=0,rt=J.getAttributes();for(let $ in rt)if(rt[$].location>=0){let lt=tt[$];lt===void 0&&($==="instanceMatrix"&&B.instanceMatrix&&(lt=B.instanceMatrix),$==="instanceColor"&&B.instanceColor&&(lt=B.instanceColor));let It={};It.attribute=lt,lt&&lt.data&&(It.data=lt.data),k[$]=It,G++}r.attributes=k,r.attributesNum=G,r.index=z}function E(){let B=r.newAttributes;for(let H=0,J=B.length;H<J;H++)B[H]=0}function m(B){p(B,0)}function p(B,H){let J=r.newAttributes,z=r.enabledAttributes,k=r.attributeDivisors;J[B]=1,z[B]===0&&(n.enableVertexAttribArray(B),z[B]=1),k[B]!==H&&(n.vertexAttribDivisor(B,H),k[B]=H)}function T(){let B=r.newAttributes,H=r.enabledAttributes;for(let J=0,z=H.length;J<z;J++)H[J]!==B[J]&&(n.disableVertexAttribArray(J),H[J]=0)}function P(B,H,J,z,k,tt,G){G===!0?n.vertexAttribIPointer(B,H,J,k,tt):n.vertexAttribPointer(B,H,J,z,k,tt)}function y(B,H,J,z){E();let k=z.attributes,tt=J.getAttributes(),G=H.defaultAttributeValues;for(let rt in tt){let $=tt[rt];if($.location>=0){let ot=k[rt];if(ot===void 0&&(rt==="instanceMatrix"&&B.instanceMatrix&&(ot=B.instanceMatrix),rt==="instanceColor"&&B.instanceColor&&(ot=B.instanceColor)),ot!==void 0){let lt=ot.normalized,It=ot.itemSize,Ct=t.get(ot);if(Ct===void 0)continue;let Jt=Ct.buffer,Kt=Ct.type,ie=Ct.bytesPerElement,j=Kt===n.INT||Kt===n.UNSIGNED_INT||ot.gpuType===Jo;if(ot.isInterleavedBufferAttribute){let it=ot.data,xt=it.stride,kt=ot.offset;if(it.isInstancedInterleavedBuffer){for(let At=0;At<$.locationSize;At++)p($.location+At,it.meshPerAttribute);B.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let At=0;At<$.locationSize;At++)m($.location+At);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let At=0;At<$.locationSize;At++)P($.location+At,It/$.locationSize,Kt,lt,xt*ie,(kt+It/$.locationSize*At)*ie,j)}else{if(ot.isInstancedBufferAttribute){for(let it=0;it<$.locationSize;it++)p($.location+it,ot.meshPerAttribute);B.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let it=0;it<$.locationSize;it++)m($.location+it);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let it=0;it<$.locationSize;it++)P($.location+it,It/$.locationSize,Kt,lt,It*ie,It/$.locationSize*it*ie,j)}}else if(G!==void 0){let lt=G[rt];if(lt!==void 0)switch(lt.length){case 2:n.vertexAttrib2fv($.location,lt);break;case 3:n.vertexAttrib3fv($.location,lt);break;case 4:n.vertexAttrib4fv($.location,lt);break;default:n.vertexAttrib1fv($.location,lt)}}}}T()}function A(){x();for(let B in i){let H=i[B];for(let J in H){let z=H[J];for(let k in z){let tt=z[k];for(let G in tt)h(tt[G].object),delete tt[G];delete z[k]}}delete i[B]}}function w(B){if(i[B.id]===void 0)return;let H=i[B.id];for(let J in H){let z=H[J];for(let k in z){let tt=z[k];for(let G in tt)h(tt[G].object),delete tt[G];delete z[k]}}delete i[B.id]}function D(B){for(let H in i){let J=i[H];for(let z in J){let k=J[z];if(k[B.id]===void 0)continue;let tt=k[B.id];for(let G in tt)h(tt[G].object),delete tt[G];delete k[B.id]}}}function _(B){for(let H in i){let J=i[H],z=B.isInstancedMesh===!0?B.id:0,k=J[z];if(k!==void 0){for(let tt in k){let G=k[tt];for(let rt in G)h(G[rt].object),delete G[rt];delete k[tt]}delete J[z],Object.keys(J).length===0&&delete i[H]}}}function x(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:x,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:D,initAttributes:E,enableAttribute:m,disableUnusedAttributes:T}}function y_(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function M_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==Nn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let _=D===Gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==mn&&D!==Dn&&!_&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Gt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:P,maxFragmentUniforms:y,maxSamples:A,samples:w}}function S_(n){let t=this,e=null,i=0,s=!1,r=!1,a=new vn,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,E=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let T=r?0:i,P=T*4,y=p.clippingState||null;l.value=y,y=h(g,u,P,f);for(let A=0;A!==P;++A)y[A]=e[A];p.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){let E=d!==null?d.length:0,m=null;if(E!==0){if(m=l.value,g!==!0||m===null){let p=f+E*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let P=0,y=f;P!==E;++P,y+=4)a.copy(d[P]).applyMatrix4(T,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,m}}var ur=4,b_=6,E_=20,T_=256,ya=new nr,Dd=new qt,fh=null,ph=0,mh=0,gh=!1,w_=new F,hs=new F,Fl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=w_}=r;fh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(fh,ph,mh),this._renderer.xr.enabled=gh,t.scissorTest=!1,hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ni||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:je,minFilter:je,generateMipmaps:!1,type:Gn,format:Nn,colorSpace:Fr,depthBuffer:!1},s=Nd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nd(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=A_(r)),this._blurMaterial=C_(r,t,e),this._ggxMaterial=R_(r,t,e)}return s}_compileMaterial(t){let e=new xe(new Be,t);this._renderer.compile(e,ya)}_sceneToCubeUV(t,e,i,s,r){let l=new Ye(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Dd),d.toneMapping=Vn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xe(new ze,new In({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));let E=this._backgroundBox,m=E.material,p=!1,T=t.background;T?T.isColor&&(m.color.copy(T),t.background=null,p=!0):(m.color.copy(Dd),p=!0);for(let P=0;P<6;P++){let y=P%3;y===0?(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[P],r.y,r.z)):y===1?(l.up.set(0,0,c[P]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[P],r.z)):(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[P]));let A=this._cubeSize;hr(s,y*A,P>2?A:0,A,A),d.setRenderTarget(s),p&&d.render(E,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=T}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ni||t.mapping===os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ud());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;hr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,ya)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,E=this._sizeLods[i],m=3*E*(i>g-ur?i-g+ur:0),p=4*(this._cubeSize-E);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,hr(r,m,p,3*E,2*E),s.setRenderTarget(r),s.render(o,ya),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,hr(t,m,p,3*E,2*E),s.setRenderTarget(t),s.render(o,ya)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-ur?s-this._lodMax+ur:0),u=4*(this._cubeSize-h);hr(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,ya)}};function A_(n){let t=[],e=[],i=n,s=n-ur+1+b_;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),E=new Float32Array(f*u*d);for(let p=0;p<d;p++){let T=p%3*2/3-1,P=p>2?0:-1,y=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];g.set(y,f*u*p);for(let A=0;A<u;A++){let w=h[A*2]*2-1,D=h[A*2+1]*2-1;p===0?hs.set(1,D,w):p===1?hs.set(-w,1,-D):p===2?hs.set(-w,D,1):p===3?hs.set(-1,D,-w):p===4?hs.set(-w,-1,D):hs.set(w,D,-1),hs.toArray(E,(p*u+A)*f)}}let m=new Be;m.setAttribute("position",new hn(g,f)),m.setAttribute("outputDirection",new hn(E,f)),e.push(new xe(m,null)),i>ur&&i--}return{lodMeshes:e,sizeLods:t}}function Nd(n,t,e){let i=new pn(n,t,e);return i.texture.mapping=da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function R_(n,t,e){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:T_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function C_(n,t,e){return new bn({name:"SphericalGaussianBlur",defines:{SAMPLES:E_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:zl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Ud(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Fd(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function zl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ol=class extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Wr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ze(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:ti});r.uniforms.tEquirect.value=e;let a=new xe(s,r),o=e.minFilter;return e.minFilter===Ui&&(e.minFilter=je),new Wo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function P_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===qo||f===Yo)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let E=new Ol(g.height);return E.fromEquirectangularTexture(n,u),t.set(u,E),u.addEventListener("dispose",c),o(E.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===qo||f===Yo,E=f===Ni||f===os;if(g||E){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Fl(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let T=u.image;return g&&T&&T.height>0||E&&T&&l(T)?(i===null&&(i=new Fl(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===qo?u.mapping=Ni:f===Yo&&(u.mapping=os),u}function l(u){let f=0,g=6;for(let E=0;E<g;E++)u[E]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function I_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ji("WebGLRenderer: "+i+" extension not supported."),s}}}function L_(n,t,e,i){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,E=0;if(g===void 0)return;if(f!==null){let T=f.array;E=f.version;for(let P=0,y=T.length;P<y;P+=3){let A=T[P+0],w=T[P+1],D=T[P+2];u.push(A,w,w,D,D,A)}}else{let T=g.array;E=g.version;for(let P=0,y=T.length/3-1;P<y;P+=3){let A=P+0,w=P+1,D=P+2;u.push(A,w,w,D,D,A)}}let m=new(g.count>=65535?Vr:kr)(u,1);m.version=E;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function D_(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*a,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let E=0;for(let m=0;m<f;m++)E+=u[m];e.update(E,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function N_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Wt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function U_(n,t,e){let i=new WeakMap,s=new Re;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let x=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",x)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],P=0;f===!0&&(P=1),g===!0&&(P=2),E===!0&&(P=3);let y=o.attributes.position.count*P,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*A*4*d),D=new Br(w,y,A,d);D.type=Dn,D.needsUpdate=!0;let _=P*4;for(let N=0;N<d;N++){let B=m[N],H=p[N],J=T[N],z=y*A*4*N;for(let k=0;k<B.count;k++){let tt=k*_;f===!0&&(s.fromBufferAttribute(B,k),w[z+tt+0]=s.x,w[z+tt+1]=s.y,w[z+tt+2]=s.z,w[z+tt+3]=0),g===!0&&(s.fromBufferAttribute(H,k),w[z+tt+4]=s.x,w[z+tt+5]=s.y,w[z+tt+6]=s.z,w[z+tt+7]=0),E===!0&&(s.fromBufferAttribute(J,k),w[z+tt+8]=s.x,w[z+tt+9]=s.y,w[z+tt+10]=s.z,w[z+tt+11]=J.itemSize===4?s.w:1)}}u={count:d,texture:D,size:new ft(y,A)},i.set(o,u),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let E=0;E<c.length;E++)f+=c[E];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function F_(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var O_={[qc]:"LINEAR_TONE_MAPPING",[Yc]:"REINHARD_TONE_MAPPING",[Zc]:"CINEON_TONE_MAPPING",[ua]:"ACES_FILMIC_TONE_MAPPING",[$c]:"AGX_TONE_MAPPING",[Kc]:"NEUTRAL_TONE_MAPPING",[Jc]:"CUSTOM_TONE_MAPPING"};function B_(n,t,e,i,s,r){let a=new pn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Be;c.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new de([0,2,0,0,2,0],2));let h=new Po({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new xe(c,h),u=new nr(-1,1,1,-1,0,1),f=null,g=null,E=!1,m,p=null,T=[],P=!1;this.setSize=function(y,A){a.setSize(y,A),o!==null&&o.setSize(y,A),l!==null&&l.setSize(y,A);for(let w=0;w<T.length;w++){let D=T[w];D.setSize&&D.setSize(y,A)}},this.setEffects=function(y){T=y,P=T.length>0&&T[0].isRenderPass===!0;let A=a.width,w=a.height;T.length>0&&o===null&&(o=new pn(A,w,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),l=new pn(A,w,{type:Gn,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<T.length;D++){let _=T[D];_.setSize&&_.setSize(A,w)}},this.begin=function(y,A){if(E||y.toneMapping===Vn&&T.length===0)return!1;if(p=A,A!==null){let w=A.width,D=A.height;(a.width!==w||a.height!==D)&&this.setSize(w,D)}return P===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Vn,!0},this.hasRenderPass=function(){return P},this.end=function(y,A){y.toneMapping=m,E=!0;let w=a,D=o;for(let _=0;_<T.length;_++){let x=T[_];x.enabled!==!1&&(x.render(y,D,w,A),x.needsSwap!==!1&&(w=D,D=D===o?l:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,h.defines={},oe.getTransfer(f)===ge&&(h.defines.SRGB_TRANSFER="");let _=O_[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(p),y.render(d,u),p=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var nf=new sn,vh=new Ti(1,1),sf=new Br,rf=new Mo,af=new Wr,Od=[],Bd=[],zd=new Float32Array(16),kd=new Float32Array(9),Vd=new Float32Array(4);function fr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Od[s];if(r===void 0&&(r=new Float32Array(s),Od[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ve(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function kl(n,t){let e=Bd[t];e===void 0&&(e=new Int32Array(t),Bd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function z_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function k_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2fv(this.addr,t),Ve(e,t)}}function V_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;n.uniform3fv(this.addr,t),Ve(e,t)}}function H_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4fv(this.addr,t),Ve(e,t)}}function G_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(ke(e,i))return;Vd.set(i),n.uniformMatrix2fv(this.addr,!1,Vd),Ve(e,i)}}function W_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(ke(e,i))return;kd.set(i),n.uniformMatrix3fv(this.addr,!1,kd),Ve(e,i)}}function X_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(ke(e,i))return;zd.set(i),n.uniformMatrix4fv(this.addr,!1,zd),Ve(e,i)}}function q_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Y_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2iv(this.addr,t),Ve(e,t)}}function Z_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3iv(this.addr,t),Ve(e,t)}}function J_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4iv(this.addr,t),Ve(e,t)}}function $_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function K_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2uiv(this.addr,t),Ve(e,t)}}function j_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3uiv(this.addr,t),Ve(e,t)}}function Q_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4uiv(this.addr,t),Ve(e,t)}}function tx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(vh.compareFunction=e.isReversedDepthBuffer()?Dl:Ll,r=vh):r=nf,e.setTexture2D(t||r,s)}function ex(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||rf,s)}function nx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||af,s)}function ix(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||sf,s)}function sx(n){switch(n){case 5126:return z_;case 35664:return k_;case 35665:return V_;case 35666:return H_;case 35674:return G_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return q_;case 35667:case 35671:return Y_;case 35668:case 35672:return Z_;case 35669:case 35673:return J_;case 5125:return $_;case 36294:return K_;case 36295:return j_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}function rx(n,t){n.uniform1fv(this.addr,t)}function ax(n,t){let e=fr(t,this.size,2);n.uniform2fv(this.addr,e)}function ox(n,t){let e=fr(t,this.size,3);n.uniform3fv(this.addr,e)}function lx(n,t){let e=fr(t,this.size,4);n.uniform4fv(this.addr,e)}function cx(n,t){let e=fr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function hx(n,t){let e=fr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function ux(n,t){let e=fr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function dx(n,t){n.uniform1iv(this.addr,t)}function fx(n,t){n.uniform2iv(this.addr,t)}function px(n,t){n.uniform3iv(this.addr,t)}function mx(n,t){n.uniform4iv(this.addr,t)}function gx(n,t){n.uniform1uiv(this.addr,t)}function _x(n,t){n.uniform2uiv(this.addr,t)}function xx(n,t){n.uniform3uiv(this.addr,t)}function vx(n,t){n.uniform4uiv(this.addr,t)}function yx(n,t,e){let i=this.cache,s=t.length,r=kl(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),Ve(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=vh:a=nf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Mx(n,t,e){let i=this.cache,s=t.length,r=kl(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),Ve(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||rf,r[a])}function Sx(n,t,e){let i=this.cache,s=t.length,r=kl(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),Ve(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||af,r[a])}function bx(n,t,e){let i=this.cache,s=t.length,r=kl(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),Ve(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||sf,r[a])}function Ex(n){switch(n){case 5126:return rx;case 35664:return ax;case 35665:return ox;case 35666:return lx;case 35674:return cx;case 35675:return hx;case 35676:return ux;case 5124:case 35670:return dx;case 35667:case 35671:return fx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return _x;case 36295:return xx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return bx}}var yh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=sx(e.type)}},Mh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ex(e.type)}},Sh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},_h=/(\w+)(\])?(\[|\.)?/g;function Hd(n,t){n.seq.push(t),n.map[t.id]=t}function Tx(n,t,e){let i=n.name,s=i.length;for(_h.lastIndex=0;;){let r=_h.exec(i),a=_h.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Hd(e,c===void 0?new yh(o,n,t):new Mh(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new Sh(o),Hd(e,d)),e=d}}}var dr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Tx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Gd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var wx=37297,Ax=0;function Rx(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Wd=new Zt;function Cx(n){oe._getMatrix(Wd,oe.workingColorSpace,n);let t=`mat3( ${Wd.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(n)){case Or:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Xd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Rx(n.getShaderSource(t),o)}else return r}function Px(n,t){let e=Cx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Ix={[qc]:"Linear",[Yc]:"Reinhard",[Zc]:"Cineon",[ua]:"ACESFilmic",[$c]:"AgX",[Kc]:"Neutral",[Jc]:"Custom"};function Lx(n,t){let e=Ix[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ul=new F;function Dx(){oe.getLuminanceCoefficients(Ul);let n=Ul.x.toFixed(4),t=Ul.y.toFixed(4),e=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function Ux(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Fx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Sa(n){return n!==""}function qd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(n){return n.replace(Ox,zx)}var Bx=new Map;function zx(n,t){let e=ne[t];if(e===void 0){let i=Bx.get(t);if(i!==void 0)e=ne[i],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return bh(e)}var kx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zd(n){return n.replace(kx,Vx)}function Vx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Hx={[ss]:"SHADOWMAP_TYPE_PCF",[rr]:"SHADOWMAP_TYPE_VSM"};function Gx(n){return Hx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wx={[Ni]:"ENVMAP_TYPE_CUBE",[os]:"ENVMAP_TYPE_CUBE",[da]:"ENVMAP_TYPE_CUBE_UV"};function Xx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Wx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var qx={[os]:"ENVMAP_MODE_REFRACTION"};function Yx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":qx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Zx={[ha]:"ENVMAP_BLENDING_MULTIPLY",[ld]:"ENVMAP_BLENDING_MIX",[cd]:"ENVMAP_BLENDING_ADD"};function Jx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Zx[n.combine]||"ENVMAP_BLENDING_NONE"}function $x(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Kx(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Gx(e),c=Xx(e),h=Yx(e),d=Jx(e),u=$x(e),f=Nx(e),g=Ux(r),E=s.createProgram(),m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Sa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Sa).join(`
`),p.length>0&&(p+=`
`)):(m=[Jd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),p=[Jd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?ne.tonemapping_pars_fragment:"",e.toneMapping!==Vn?Lx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Px("linearToOutputTexel",e.outputColorSpace),Dx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sa).join(`
`)),a=bh(a),a=qd(a,e),a=Yd(a,e),o=bh(o),o=qd(o,e),o=Yd(o,e),a=Zd(a),o=Zd(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let P=T+m+a,y=T+p+o,A=Gd(s,s.VERTEX_SHADER,P),w=Gd(s,s.FRAGMENT_SHADER,y);s.attachShader(E,A),s.attachShader(E,w),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function D(B){if(n.debug.checkShaderErrors){let H=s.getProgramInfoLog(E)||"",J=s.getShaderInfoLog(A)||"",z=s.getShaderInfoLog(w)||"",k=H.trim(),tt=J.trim(),G=z.trim(),rt=!0,$=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(rt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,A,w);else{let ot=Xd(s,A,"vertex"),lt=Xd(s,w,"fragment");Wt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+k+`
`+ot+`
`+lt)}else k!==""?Gt("WebGLProgram: Program Info Log:",k):(tt===""||G==="")&&($=!1);$&&(B.diagnostics={runnable:rt,programLog:k,vertexShader:{log:tt,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(A),s.deleteShader(w),_=new dr(s,E),x=Fx(s,E)}let _;this.getUniforms=function(){return _===void 0&&D(this),_};let x;this.getAttributes=function(){return x===void 0&&D(this),x};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(E,wx)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ax++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=A,this.fragmentShader=w,this}var jx=0,Eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Th(t),e.set(t,i)),i}},Th=class{constructor(t){this.id=jx++,this.code=t,this.usedTimes=0}};function Qx(n){return n===Oi||n===xa||n===va}function tv(n,t,e,i,s,r){let a=new Ys,o=new Eh,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function E(_,x,N,B,H,J){let z=B.fog,k=H.geometry,tt=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?B.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,rt=t.get(_.envMap||tt,G),$=rt&&rt.mapping===da?rt.image.height:null,ot=f[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Gt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let lt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,It=lt!==void 0?lt.length:0,Ct=0;k.morphAttributes.position!==void 0&&(Ct=1),k.morphAttributes.normal!==void 0&&(Ct=2),k.morphAttributes.color!==void 0&&(Ct=3);let Jt,Kt,ie,j;if(ot){let Et=ni[ot];Jt=Et.vertexShader,Kt=Et.fragmentShader}else{Jt=_.vertexShader,Kt=_.fragmentShader;let Et=o.getVertexShaderStage(_),Tt=o.getFragmentShaderStage(_);o.update(_,Et,Tt),ie=Et.id,j=Tt.id}let it=n.getRenderTarget(),xt=n.state.buffers.depth.getReversed(),kt=H.isInstancedMesh===!0,At=H.isBatchedMesh===!0,Vt=!!_.map,ce=!!_.matcap,st=!!rt,ut=!!_.aoMap,dt=!!_.lightMap,gt=!!_.bumpMap&&_.wireframe===!1,_t=!!_.normalMap,zt=!!_.displacementMap,Lt=!!_.emissiveMap,Ut=!!_.metalnessMap,Ht=!!_.roughnessMap,O=_.anisotropy>0,le=_.clearcoat>0,Qt=_.dispersion>0,R=_.retroreflectivity>0,v=_.iridescence>0,U=_.sheen>0,X=_.transmission>0,et=O&&!!_.anisotropyMap,mt=le&&!!_.clearcoatMap,pt=le&&!!_.clearcoatNormalMap,nt=le&&!!_.clearcoatRoughnessMap,at=v&&!!_.iridescenceMap,vt=v&&!!_.iridescenceThicknessMap,Ft=U&&!!_.sheenColorMap,Mt=U&&!!_.sheenRoughnessMap,yt=!!_.specularMap,Ot=!!_.specularColorMap,S=!!_.specularIntensityMap,C=X&&!!_.transmissionMap,M=X&&!!_.thicknessMap,L=!!_.gradientMap,I=!!_.alphaMap,W=_.alphaTest>0,Q=!!_.alphaHash,q=!!_.extensions,ct=Vn;_.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ct=n.toneMapping);let ht={shaderID:ot,shaderType:_.type,shaderName:_.name,vertexShader:Jt,fragmentShader:Kt,defines:_.defines,customVertexShaderID:ie,customFragmentShaderID:j,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:At,batchingColor:At&&H._colorsTexture!==null,instancing:kt,instancingColor:kt&&H.instanceColor!==null,instancingMorph:kt&&H.morphTexture!==null,outputColorSpace:it===null?n.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Vt,matcap:ce,envMap:st,envMapMode:st&&rt.mapping,envMapCubeUVHeight:$,aoMap:ut,lightMap:dt,bumpMap:gt,normalMap:_t,displacementMap:zt,emissiveMap:Lt,normalMapObjectSpace:_t&&_.normalMapType===dd,normalMapTangentSpace:_t&&_.normalMapType===cr,packedNormalMap:_t&&_.normalMapType===cr&&Qx(_.normalMap.format),metalnessMap:Ut,roughnessMap:Ht,anisotropy:O,anisotropyMap:et,clearcoat:le,clearcoatMap:mt,clearcoatNormalMap:pt,clearcoatRoughnessMap:nt,dispersion:Qt,retroreflection:R,iridescence:v,iridescenceMap:at,iridescenceThicknessMap:vt,sheen:U,sheenColorMap:Ft,sheenRoughnessMap:Mt,specularMap:yt,specularColorMap:Ot,specularIntensityMap:S,transmission:X,transmissionMap:C,thicknessMap:M,gradientMap:L,opaque:_.transparent===!1&&_.blending===ar&&_.alphaToCoverage===!1,alphaMap:I,alphaTest:W,alphaHash:Q,combine:_.combine,mapUv:Vt&&g(_.map.channel),aoMapUv:ut&&g(_.aoMap.channel),lightMapUv:dt&&g(_.lightMap.channel),bumpMapUv:gt&&g(_.bumpMap.channel),normalMapUv:_t&&g(_.normalMap.channel),displacementMapUv:zt&&g(_.displacementMap.channel),emissiveMapUv:Lt&&g(_.emissiveMap.channel),metalnessMapUv:Ut&&g(_.metalnessMap.channel),roughnessMapUv:Ht&&g(_.roughnessMap.channel),anisotropyMapUv:et&&g(_.anisotropyMap.channel),clearcoatMapUv:mt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:pt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&g(_.sheenRoughnessMap.channel),specularMapUv:yt&&g(_.specularMap.channel),specularColorMapUv:Ot&&g(_.specularColorMap.channel),specularIntensityMapUv:S&&g(_.specularIntensityMap.channel),transmissionMapUv:C&&g(_.transmissionMap.channel),thicknessMapUv:M&&g(_.thicknessMap.channel),alphaMapUv:I&&g(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(_t||O),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!k.attributes.uv&&(Vt||I),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&_t===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:Ct,numSunLights:x.sun.length,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numSunLightShadows:x.sunShadowMap.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:ct,decodeVideoTexture:Vt&&_.map.isVideoTexture===!0&&oe.getTransfer(_.map.colorSpace)===ge,decodeVideoTextureEmissive:Lt&&_.emissiveMap.isVideoTexture===!0&&oe.getTransfer(_.emissiveMap.colorSpace)===ge,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Je,flipSided:_.side===un,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:q&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(q&&_.extensions.multiDraw===!0||At)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function m(_){let x=[];if(_.shaderID?x.push(_.shaderID):(x.push(_.customVertexShaderID),x.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)x.push(N),x.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(p(x,_),T(x,_),x.push(n.outputColorSpace)),x.push(_.customProgramCacheKey),x.join()}function p(_,x){_.push(x.precision),_.push(x.outputColorSpace),_.push(x.envMapMode),_.push(x.envMapCubeUVHeight),_.push(x.mapUv),_.push(x.alphaMapUv),_.push(x.lightMapUv),_.push(x.aoMapUv),_.push(x.bumpMapUv),_.push(x.normalMapUv),_.push(x.displacementMapUv),_.push(x.emissiveMapUv),_.push(x.metalnessMapUv),_.push(x.roughnessMapUv),_.push(x.anisotropyMapUv),_.push(x.clearcoatMapUv),_.push(x.clearcoatNormalMapUv),_.push(x.clearcoatRoughnessMapUv),_.push(x.iridescenceMapUv),_.push(x.iridescenceThicknessMapUv),_.push(x.sheenColorMapUv),_.push(x.sheenRoughnessMapUv),_.push(x.specularMapUv),_.push(x.specularColorMapUv),_.push(x.specularIntensityMapUv),_.push(x.transmissionMapUv),_.push(x.thicknessMapUv),_.push(x.combine),_.push(x.fogExp2),_.push(x.sizeAttenuation),_.push(x.morphTargetsCount),_.push(x.morphAttributeCount),_.push(x.numSunLights),_.push(x.numDirLights),_.push(x.numPointLights),_.push(x.numSpotLights),_.push(x.numSpotLightMaps),_.push(x.numHemiLights),_.push(x.numRectAreaLights),_.push(x.numSunLightShadows),_.push(x.numDirLightShadows),_.push(x.numPointLightShadows),_.push(x.numSpotLightShadows),_.push(x.numSpotLightShadowsWithMaps),_.push(x.numLightProbes),_.push(x.shadowMapType),_.push(x.toneMapping),_.push(x.numClippingPlanes),_.push(x.numClipIntersection),_.push(x.depthPacking)}function T(_,x){a.disableAll(),x.instancing&&a.enable(0),x.instancingColor&&a.enable(1),x.instancingMorph&&a.enable(2),x.matcap&&a.enable(3),x.envMap&&a.enable(4),x.normalMapObjectSpace&&a.enable(5),x.normalMapTangentSpace&&a.enable(6),x.clearcoat&&a.enable(7),x.iridescence&&a.enable(8),x.alphaTest&&a.enable(9),x.vertexColors&&a.enable(10),x.vertexAlphas&&a.enable(11),x.vertexUv1s&&a.enable(12),x.vertexUv2s&&a.enable(13),x.vertexUv3s&&a.enable(14),x.vertexTangents&&a.enable(15),x.anisotropy&&a.enable(16),x.alphaHash&&a.enable(17),x.batching&&a.enable(18),x.dispersion&&a.enable(19),x.retroreflection&&a.enable(24),x.batchingColor&&a.enable(20),x.gradientMap&&a.enable(21),x.packedNormalMap&&a.enable(22),x.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),x.numLightProbeGrids>0&&a.enable(22),x.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function P(_){let x=f[_.type],N;if(x){let B=ni[x];N=Pd.clone(B.uniforms)}else N=_.uniforms;return N}function y(_,x){let N=h.get(x);return N!==void 0?++N.usedTimes:(N=new Kx(n,x,_,s),c.push(N),h.set(x,N)),N}function A(_){if(--_.usedTimes===0){let x=c.indexOf(_);c[x]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function D(){o.dispose()}return{getParameters:E,getProgramCacheKey:m,getUniforms:P,acquireProgram:y,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:D}}function ev(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function nv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function $d(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Kd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,E,m,p){let T=n[t];return T===void 0?(T={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:E,renderOrder:u.renderOrder,z:m,group:p},n[t]=T):(T.id=u.id,T.object=u,T.geometry=f,T.material=g,T.materialVariant=a(u),T.groupOrder=E,T.renderOrder=u.renderOrder,T.z=m,T.group=p),t++,T}function l(u,f,g,E,m,p,T){T.reversedDepth===!0&&(m=-m);let P=o(u,f,g,E,m,p);g.transmission>0?i.push(P):g.transparent===!0?s.push(P):e.push(P)}function c(u,f,g,E,m,p){let T=o(u,f,g,E,m,p);g.transmission>0?i.unshift(T):g.transparent===!0?s.unshift(T):e.unshift(T)}function h(u,f){e.length>1&&e.sort(u||nv),i.length>1&&i.sort(f||$d),s.length>1&&s.sort(f||$d)}function d(){for(let u=t,f=n.length;u<f;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function iv(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Kd,n.set(i,[a])):s>=r.length?(a=new Kd,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function sv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new qt};break;case"SpotLight":e={position:new F,direction:new F,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function rv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var av=0;function ov(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function lv(n){let t=new sv,e=rv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,r=new _e,a=new _e;function o(c){let h=0,d=0,u=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let f=0,g=0,E=0,m=0,p=0,T=0,P=0,y=0,A=0,w=0,D=0,_=0,x=0,N=0;c.sort(ov);for(let H=0,J=c.length;H<J;H++){let z=c[H],k=z.color,tt=z.intensity,G=z.distance,rt=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Oi?rt=z.shadow.map.texture:rt=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)h+=k.r*tt,d+=k.g*tt,u+=k.b*tt;else if(z.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(z.sh.coefficients[$],tt);N++}else if(z.isSunLight){let $=t.get(z);if($.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let ot=z.shadow,lt=e.get(z);lt.shadowIntensity=ot.intensity,lt.shadowBias=ot.bias,lt.shadowNormalBias=ot.normalBias,lt.shadowRadius=ot.radius,lt.shadowMapSize.copy(ot.mapSize).multiply(ot.getFrameExtents()),i.sunShadow[g]=lt,i.sunShadowMap[g]=rt;let It=ot.getViewportCount();for(let Ct=0;Ct<It;Ct++)i.sunShadowMatrix[E+Ct]=ot.getMatrix(Ct),i.sunShadowCascade[E+Ct]=ot._cascadeData[Ct];E+=It,g++}i.sun[f]=$,f++}else if(z.isDirectionalLight){let $=t.get(z);if($.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let ot=z.shadow,lt=e.get(z);lt.shadowIntensity=ot.intensity,lt.shadowBias=ot.bias,lt.shadowNormalBias=ot.normalBias,lt.shadowRadius=ot.radius,lt.shadowMapSize=ot.mapSize,i.directionalShadow[m]=lt,i.directionalShadowMap[m]=rt,i.directionalShadowMatrix[m]=z.shadow.matrix,A++}i.directional[m]=$,m++}else if(z.isSpotLight){let $=t.get(z);$.position.setFromMatrixPosition(z.matrixWorld),$.color.copy(k).multiplyScalar(tt),$.distance=G,$.coneCos=Math.cos(z.angle),$.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),$.decay=z.decay,i.spot[T]=$;let ot=z.shadow;if(z.map&&(i.spotLightMap[_]=z.map,_++,ot.updateMatrices(z),z.castShadow&&x++),i.spotLightMatrix[T]=ot.matrix,z.castShadow){let lt=e.get(z);lt.shadowIntensity=ot.intensity,lt.shadowBias=ot.bias,lt.shadowNormalBias=ot.normalBias,lt.shadowRadius=ot.radius,lt.shadowMapSize=ot.mapSize,i.spotShadow[T]=lt,i.spotShadowMap[T]=rt,D++}T++}else if(z.isRectAreaLight){let $=t.get(z);$.color.copy(k).multiplyScalar(tt),$.halfWidth.set(z.width*.5,0,0),$.halfHeight.set(0,z.height*.5,0),i.rectArea[P]=$,P++}else if(z.isPointLight){let $=t.get(z);if($.color.copy(z.color).multiplyScalar(z.intensity),$.distance=z.distance,$.decay=z.decay,z.castShadow){let ot=z.shadow,lt=e.get(z);lt.shadowIntensity=ot.intensity,lt.shadowBias=ot.bias,lt.shadowNormalBias=ot.normalBias,lt.shadowRadius=ot.radius,lt.shadowMapSize=ot.mapSize,lt.shadowCameraNear=ot.camera.near,lt.shadowCameraFar=ot.camera.far,i.pointShadow[p]=lt,i.pointShadowMap[p]=rt,i.pointShadowMatrix[p]=z.shadow.matrix,w++}i.point[p]=$,p++}else if(z.isHemisphereLight){let $=t.get(z);$.skyColor.copy(z.color).multiplyScalar(tt),$.groundColor.copy(z.groundColor).multiplyScalar(tt),i.hemi[y]=$,y++}}P>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let B=i.hash;(B.sunLength!==f||B.directionalLength!==m||B.pointLength!==p||B.spotLength!==T||B.rectAreaLength!==P||B.hemiLength!==y||B.numSunShadows!==g||B.numDirectionalShadows!==A||B.numPointShadows!==w||B.numSpotShadows!==D||B.numSpotMaps!==_||B.numLightProbes!==N)&&(i.sun.length=f,i.directional.length=m,i.spot.length=T,i.rectArea.length=P,i.point.length=p,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=E,i.sunShadowCascade.length=E,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=D,i.spotShadowMap.length=D,i.spotLightMatrix.length=D+_-x,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=x,i.numLightProbes=N,B.sunLength=f,B.directionalLength=m,B.pointLength=p,B.spotLength=T,B.rectAreaLength=P,B.hemiLength=y,B.numSunShadows=g,B.numDirectionalShadows=A,B.numPointShadows=w,B.numSpotShadows=D,B.numSpotMaps=_,B.numLightProbes=N,i.version=av++)}function l(c,h){let d=0,u=0,f=0,g=0,E=0,m=0,p=h.matrixWorldInverse;for(let T=0,P=c.length;T<P;T++){let y=c[T];if(y.isSunLight){let A=i.sun[d];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let A=i.directional[u];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),u++}else if(y.isSpotLight){let A=i.spot[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let A=i.rectArea[E];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),E++}else if(y.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let A=i.hemi[m];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function jd(n){let t=new lv(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function cv(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new jd(n),t.set(s,[o])):r>=a.length?(o=new jd(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var hv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uv=`uniform sampler2D shadow_pass;
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
}`,dv=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],fv=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Qd=new _e,Ma=new F,xh=new F;function pv(n,t,e){let i=new $s,s=new ft,r=new ft,a=new Re,o=new Io,l=new Lo,c={},h=e.maxTextureSize,d={[Di]:un,[un]:Di,[Je]:Je},u=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:hv,fragmentShader:uv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Be;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new xe(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ss;let p=this.type;this.render=function(w,D,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Gu&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ss);let x=n.getRenderTarget(),N=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),H=n.state;H.setBlending(ti),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let J=p!==this.type;J&&D.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(k=>k.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,k=w.length;z<k;z++){let tt=w[z],G=tt.shadow;if(G===void 0){Gt("WebGLShadowMap:",tt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let rt=G.getFrameExtents();s.multiply(rt),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,G.mapSize.y=r.y));let $=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=$,G.map===null||J===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===rr){if(tt.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new pn(s.x,s.y,{format:Oi,type:Gn,minFilter:je,magFilter:je,generateMipmaps:!1}),G.map.texture.name=tt.name+".shadowMap",G.map.depthTexture=new Ti(s.x,s.y,Dn),G.map.depthTexture.name=tt.name+".shadowMapDepth",G.map.depthTexture.format=$n,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ze,G.map.depthTexture.magFilter=Ze}else tt.isPointLight?(G.map=new Ol(s.x),G.map.depthTexture=new So(s.x,Hn)):(G.map=new pn(s.x,s.y),G.map.depthTexture=new Ti(s.x,s.y,Hn)),G.map.depthTexture.name=tt.name+".shadowMap",G.map.depthTexture.format=$n,this.type===ss?(G.map.depthTexture.compareFunction=$?Dl:Ll,G.map.depthTexture.minFilter=je,G.map.depthTexture.magFilter=je):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ze,G.map.depthTexture.magFilter=Ze);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let ot=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();tt.isPointLight!==!0&&G.updateMatrices(tt,_);for(let lt=0;lt<ot;lt++){let It=G.getCamera(lt);if(tt.isPointLight){let Ct=G.camera,Jt=G.matrix,Kt=tt.distance||Ct.far;Kt!==Ct.far&&(Ct.far=Kt,Ct.updateProjectionMatrix()),Ma.setFromMatrixPosition(tt.matrixWorld),Ct.position.copy(Ma),xh.copy(Ct.position),xh.add(dv[lt]),Ct.up.copy(fv[lt]),Ct.lookAt(xh),Ct.updateMatrixWorld(),Jt.makeTranslation(-Ma.x,-Ma.y,-Ma.z),Qd.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Qd,Ct.coordinateSystem,Ct.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,lt),n.clear();else{lt===0&&(n.setRenderTarget(G.map),n.clear());let Ct=G.getViewport(lt);a.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),H.viewport(a)}i=G.getFrustum(lt),y(D,_,It,tt,this.type)}G.isPointLightShadow!==!0&&this.type===rr&&T(G,_),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(x,N,B)};function T(w,D){let _=t.update(E);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new pn(s.x,s.y,{format:Oi,type:Gn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(D,null,_,u,E,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(D,null,_,f,E,null)}function P(w,D,_,x){let N=null,B=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(B!==void 0)N=B;else if(N=_.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let H=N.uuid,J=D.uuid,z=c[H];z===void 0&&(z={},c[H]=z);let k=z[J];k===void 0&&(k=N.clone(),z[J]=k,D.addEventListener("dispose",A)),N=k}if(N.visible=D.visible,N.wireframe=D.wireframe,x===rr?N.side=D.shadowSide!==null?D.shadowSide:D.side:N.side=D.shadowSide!==null?D.shadowSide:d[D.side],N.alphaMap=D.alphaMap,N.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,N.map=D.map,N.clipShadows=D.clipShadows,N.clippingPlanes=D.clippingPlanes,N.clipIntersection=D.clipIntersection,N.displacementMap=D.displacementMap,N.displacementScale=D.displacementScale,N.displacementBias=D.displacementBias,N.wireframeLinewidth=D.wireframeLinewidth,N.linewidth=D.linewidth,_.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let H=n.properties.get(N);H.light=_}return N}function y(w,D,_,x,N){if(w.visible===!1)return;if(w.layers.test(D.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===rr)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let J=t.update(w),z=w.material;if(Array.isArray(z)){let k=J.groups;for(let tt=0,G=k.length;tt<G;tt++){let rt=k[tt],$=z[rt.materialIndex];if($&&$.visible){let ot=P(w,$,x,N);w.onBeforeShadow(n,w,D,_,J,ot,rt),n.renderBufferDirect(_,null,J,ot,w,rt),w.onAfterShadow(n,w,D,_,J,ot,rt)}}}else if(z.visible){let k=P(w,z,x,N);w.onBeforeShadow(n,w,D,_,J,k,null),n.renderBufferDirect(_,null,J,k,w,null),w.onAfterShadow(n,w,D,_,J,k,null)}}let H=w.children;for(let J=0,z=H.length;J<z;J++)y(H[J],D,_,x,N)}function A(w){w.target.removeEventListener("dispose",A);for(let _ in c){let x=c[_],N=w.target.uuid;N in x&&(x[N].dispose(),delete x[N])}}}function mv(n,t){function e(){let M=!1,L=new Re,I=null,W=new Re(0,0,0,0);return{setMask:function(Q){I!==Q&&!M&&(n.colorMask(Q,Q,Q,Q),I=Q)},setLocked:function(Q){M=Q},setClear:function(Q,q,ct,ht,Et){Et===!0&&(Q*=ht,q*=ht,ct*=ht),L.set(Q,q,ct,ht),W.equals(L)===!1&&(n.clearColor(Q,q,ct,ht),W.copy(L))},reset:function(){M=!1,I=null,W.set(-1,0,0,0)}}}function i(){let M=!1,L=!1,I=null,W=null,Q=null;return{setReversed:function(q){if(L!==q){let ct=t.get("EXT_clip_control");q?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT),L=q;let ht=Q;Q=null,this.setClear(ht)}},getReversed:function(){return L},setTest:function(q){q?it(n.DEPTH_TEST):xt(n.DEPTH_TEST)},setMask:function(q){I!==q&&!M&&(n.depthMask(q),I=q)},setFunc:function(q){if(L&&(q=Ed[q]),W!==q){switch(q){case co:n.depthFunc(n.NEVER);break;case ho:n.depthFunc(n.ALWAYS);break;case uo:n.depthFunc(n.LESS);break;case ks:n.depthFunc(n.LEQUAL);break;case fo:n.depthFunc(n.EQUAL);break;case po:n.depthFunc(n.GEQUAL);break;case mo:n.depthFunc(n.GREATER);break;case go:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}W=q}},setLocked:function(q){M=q},setClear:function(q){Q!==q&&(Q=q,L&&(q=1-q),n.clearDepth(q))},reset:function(){M=!1,I=null,W=null,Q=null,L=!1}}}function s(){let M=!1,L=null,I=null,W=null,Q=null,q=null,ct=null,ht=null,Et=null;return{setTest:function(Tt){M||(Tt?it(n.STENCIL_TEST):xt(n.STENCIL_TEST))},setMask:function(Tt){L!==Tt&&!M&&(n.stencilMask(Tt),L=Tt)},setFunc:function(Tt,pe,Me){(I!==Tt||W!==pe||Q!==Me)&&(n.stencilFunc(Tt,pe,Me),I=Tt,W=pe,Q=Me)},setOp:function(Tt,pe,Me){(q!==Tt||ct!==pe||ht!==Me)&&(n.stencilOp(Tt,pe,Me),q=Tt,ct=pe,ht=Me)},setLocked:function(Tt){M=Tt},setClear:function(Tt){Et!==Tt&&(n.clearStencil(Tt),Et=Tt)},reset:function(){M=!1,L=null,I=null,W=null,Q=null,q=null,ct=null,ht=null,Et=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],E=null,m=!1,p=null,T=null,P=null,y=null,A=null,w=null,D=null,_=new qt(0,0,0),x=0,N=!1,B=null,H=null,J=null,z=null,k=null,tt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,rt=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec($)[1]),G=rt>=1):$.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),G=rt>=2);let ot=null,lt={},It=n.getParameter(n.SCISSOR_BOX),Ct=n.getParameter(n.VIEWPORT),Jt=new Re().fromArray(It),Kt=new Re().fromArray(Ct);function ie(M,L,I,W){let Q=new Uint8Array(4),q=n.createTexture();n.bindTexture(M,q),n.texParameteri(M,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(M,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ct=0;ct<I;ct++)M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY?n.texImage3D(L,0,n.RGBA,1,1,W,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(L+ct,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return q}let j={};j[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(n.DEPTH_TEST),a.setFunc(ks),gt(!1),_t(Vc),it(n.CULL_FACE),ut(ti);function it(M){h[M]!==!0&&(n.enable(M),h[M]=!0)}function xt(M){h[M]!==!1&&(n.disable(M),h[M]=!1)}function kt(M,L){return u[M]!==L?(n.bindFramebuffer(M,L),u[M]=L,M===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=L),M===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=L),!0):!1}function At(M,L){let I=g,W=!1;if(M){I=f.get(L),I===void 0&&(I=[],f.set(L,I));let Q=M.textures;if(I.length!==Q.length||I[0]!==n.COLOR_ATTACHMENT0){for(let q=0,ct=Q.length;q<ct;q++)I[q]=n.COLOR_ATTACHMENT0+q;I.length=Q.length,W=!0}}else I[0]!==n.BACK&&(I[0]=n.BACK,W=!0);W&&n.drawBuffers(I)}function Vt(M){return E!==M?(n.useProgram(M),E=M,!0):!1}let ce={[as]:n.FUNC_ADD,[Xu]:n.FUNC_SUBTRACT,[qu]:n.FUNC_REVERSE_SUBTRACT};ce[Yu]=n.MIN,ce[Zu]=n.MAX;let st={[Ju]:n.ZERO,[$u]:n.ONE,[Ku]:n.SRC_COLOR,[Wc]:n.SRC_ALPHA,[id]:n.SRC_ALPHA_SATURATE,[ed]:n.DST_COLOR,[Qu]:n.DST_ALPHA,[ju]:n.ONE_MINUS_SRC_COLOR,[Xc]:n.ONE_MINUS_SRC_ALPHA,[nd]:n.ONE_MINUS_DST_COLOR,[td]:n.ONE_MINUS_DST_ALPHA,[sd]:n.CONSTANT_COLOR,[rd]:n.ONE_MINUS_CONSTANT_COLOR,[ad]:n.CONSTANT_ALPHA,[od]:n.ONE_MINUS_CONSTANT_ALPHA};function ut(M,L,I,W,Q,q,ct,ht,Et,Tt){if(M===ti){m===!0&&(xt(n.BLEND),m=!1);return}if(m===!1&&(it(n.BLEND),m=!0),M!==Wu){if(M!==p||Tt!==N){if((T!==as||A!==as)&&(n.blendEquation(n.FUNC_ADD),T=as,A=as),Tt)switch(M){case ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rs:n.blendFunc(n.ONE,n.ONE);break;case Hc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Wt("WebGLState: Invalid blending: ",M);break}else switch(M){case ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Hc:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gc:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",M);break}P=null,y=null,w=null,D=null,_.set(0,0,0),x=0,p=M,N=Tt}return}Q=Q||L,q=q||I,ct=ct||W,(L!==T||Q!==A)&&(n.blendEquationSeparate(ce[L],ce[Q]),T=L,A=Q),(I!==P||W!==y||q!==w||ct!==D)&&(n.blendFuncSeparate(st[I],st[W],st[q],st[ct]),P=I,y=W,w=q,D=ct),(ht.equals(_)===!1||Et!==x)&&(n.blendColor(ht.r,ht.g,ht.b,Et),_.copy(ht),x=Et),p=M,N=!1}function dt(M,L){M.side===Je?xt(n.CULL_FACE):it(n.CULL_FACE);let I=M.side===un;L&&(I=!I),gt(I),M.blending===ar&&M.transparent===!1?ut(ti):ut(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),a.setFunc(M.depthFunc),a.setTest(M.depthTest),a.setMask(M.depthWrite),r.setMask(M.colorWrite);let W=M.stencilWrite;o.setTest(W),W&&(o.setMask(M.stencilWriteMask),o.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),o.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),Lt(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?it(n.SAMPLE_ALPHA_TO_COVERAGE):xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function gt(M){B!==M&&(M?n.frontFace(n.CW):n.frontFace(n.CCW),B=M)}function _t(M){M!==Vu?(it(n.CULL_FACE),M!==H&&(M===Vc?n.cullFace(n.BACK):M===Hu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xt(n.CULL_FACE),H=M}function zt(M){M!==J&&(G&&n.lineWidth(M),J=M)}function Lt(M,L,I){M?(it(n.POLYGON_OFFSET_FILL),(z!==L||k!==I)&&(z=L,k=I,a.getReversed()&&(L=-L),n.polygonOffset(L,I))):xt(n.POLYGON_OFFSET_FILL)}function Ut(M){M?it(n.SCISSOR_TEST):xt(n.SCISSOR_TEST)}function Ht(M){M===void 0&&(M=n.TEXTURE0+tt-1),ot!==M&&(n.activeTexture(M),ot=M)}function O(M,L,I){I===void 0&&(ot===null?I=n.TEXTURE0+tt-1:I=ot);let W=lt[I];W===void 0&&(W={type:void 0,texture:void 0},lt[I]=W),(W.type!==M||W.texture!==L)&&(ot!==I&&(n.activeTexture(I),ot=I),n.bindTexture(M,L||j[M]),W.type=M,W.texture=L)}function le(){let M=lt[ot];M!==void 0&&M.type!==void 0&&(n.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function Qt(){try{n.compressedTexImage2D(...arguments)}catch(M){Wt("WebGLState:",M)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(M){Wt("WebGLState:",M)}}function v(){try{n.texSubImage2D(...arguments)}catch(M){Wt("WebGLState:",M)}}function U(){try{n.texSubImage3D(...arguments)}catch(M){Wt("WebGLState:",M)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(M){Wt("WebGLState:",M)}}function et(){try{n.compressedTexSubImage3D(...arguments)}catch(M){Wt("WebGLState:",M)}}function mt(){try{n.texStorage2D(...arguments)}catch(M){Wt("WebGLState:",M)}}function pt(){try{n.texStorage3D(...arguments)}catch(M){Wt("WebGLState:",M)}}function nt(){try{n.texImage2D(...arguments)}catch(M){Wt("WebGLState:",M)}}function at(){try{n.texImage3D(...arguments)}catch(M){Wt("WebGLState:",M)}}function vt(M){return d[M]!==void 0?d[M]:n.getParameter(M)}function Ft(M,L){d[M]!==L&&(n.pixelStorei(M,L),d[M]=L)}function Mt(M){Jt.equals(M)===!1&&(n.scissor(M.x,M.y,M.z,M.w),Jt.copy(M))}function yt(M){Kt.equals(M)===!1&&(n.viewport(M.x,M.y,M.z,M.w),Kt.copy(M))}function Ot(M,L){let I=c.get(L);I===void 0&&(I=new WeakMap,c.set(L,I));let W=I.get(M);W===void 0&&(W=n.getUniformBlockIndex(L,M.name),I.set(M,W))}function S(M,L){let W=c.get(L).get(M);l.get(L)!==W&&(n.uniformBlockBinding(L,W,M.__bindingPointIndex),l.set(L,W))}function C(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},ot=null,lt={},u={},f=new WeakMap,g=[],E=null,m=!1,p=null,T=null,P=null,y=null,A=null,w=null,D=null,_=new qt(0,0,0),x=0,N=!1,B=null,H=null,J=null,z=null,k=null,Jt.set(0,0,n.canvas.width,n.canvas.height),Kt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:xt,bindFramebuffer:kt,drawBuffers:At,useProgram:Vt,setBlending:ut,setMaterial:dt,setFlipSided:gt,setCullFace:_t,setLineWidth:zt,setPolygonOffset:Lt,setScissorTest:Ut,activeTexture:Ht,bindTexture:O,unbindTexture:le,compressedTexImage2D:Qt,compressedTexImage3D:R,texImage2D:nt,texImage3D:at,pixelStorei:Ft,getParameter:vt,updateUBOMapping:Ot,uniformBlockBinding:S,texStorage2D:mt,texStorage3D:pt,texSubImage2D:v,texSubImage3D:U,compressedTexSubImage2D:X,compressedTexSubImage3D:et,scissor:Mt,viewport:yt,reset:C}}function gv(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,v){return g?new OffscreenCanvas(R,v):Gs("canvas")}function m(R,v,U){let X=1,et=Qt(R);if((et.width>U||et.height>U)&&(X=U/Math.max(et.width,et.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let mt=Math.floor(X*et.width),pt=Math.floor(X*et.height);u===void 0&&(u=E(mt,pt));let nt=v?E(mt,pt):u;return nt.width=mt,nt.height=pt,nt.getContext("2d").drawImage(R,0,0,mt,pt),Gt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+mt+"x"+pt+")."),nt}else return"data"in R&&Gt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),R;return R}function p(R){return R.generateMipmaps}function T(R){n.generateMipmap(R)}function P(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(R,v,U,X,et,mt=!1){if(R!==null){if(n[R]!==void 0)return n[R];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let pt;X&&(pt=t.get("EXT_texture_norm16"),pt||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=v;if(v===n.RED&&(U===n.FLOAT&&(nt=n.R32F),U===n.HALF_FLOAT&&(nt=n.R16F),U===n.UNSIGNED_BYTE&&(nt=n.R8),U===n.UNSIGNED_SHORT&&pt&&(nt=pt.R16_EXT),U===n.SHORT&&pt&&(nt=pt.R16_SNORM_EXT)),v===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(nt=n.R8UI),U===n.UNSIGNED_SHORT&&(nt=n.R16UI),U===n.UNSIGNED_INT&&(nt=n.R32UI),U===n.BYTE&&(nt=n.R8I),U===n.SHORT&&(nt=n.R16I),U===n.INT&&(nt=n.R32I)),v===n.RG&&(U===n.FLOAT&&(nt=n.RG32F),U===n.HALF_FLOAT&&(nt=n.RG16F),U===n.UNSIGNED_BYTE&&(nt=n.RG8),U===n.UNSIGNED_SHORT&&pt&&(nt=pt.RG16_EXT),U===n.SHORT&&pt&&(nt=pt.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(nt=n.RG8UI),U===n.UNSIGNED_SHORT&&(nt=n.RG16UI),U===n.UNSIGNED_INT&&(nt=n.RG32UI),U===n.BYTE&&(nt=n.RG8I),U===n.SHORT&&(nt=n.RG16I),U===n.INT&&(nt=n.RG32I)),v===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(nt=n.RGB8UI),U===n.UNSIGNED_SHORT&&(nt=n.RGB16UI),U===n.UNSIGNED_INT&&(nt=n.RGB32UI),U===n.BYTE&&(nt=n.RGB8I),U===n.SHORT&&(nt=n.RGB16I),U===n.INT&&(nt=n.RGB32I)),v===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(nt=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(nt=n.RGBA16UI),U===n.UNSIGNED_INT&&(nt=n.RGBA32UI),U===n.BYTE&&(nt=n.RGBA8I),U===n.SHORT&&(nt=n.RGBA16I),U===n.INT&&(nt=n.RGBA32I)),v===n.RGB&&(U===n.UNSIGNED_SHORT&&pt&&(nt=pt.RGB16_EXT),U===n.SHORT&&pt&&(nt=pt.RGB16_SNORM_EXT),U===n.UNSIGNED_INT_5_9_9_9_REV&&(nt=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(nt=n.R11F_G11F_B10F)),v===n.RGBA){let at=mt?Or:oe.getTransfer(et);U===n.FLOAT&&(nt=n.RGBA32F),U===n.HALF_FLOAT&&(nt=n.RGBA16F),U===n.UNSIGNED_BYTE&&(nt=at===ge?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT&&pt&&(nt=pt.RGBA16_EXT),U===n.SHORT&&pt&&(nt=pt.RGBA16_SNORM_EXT),U===n.UNSIGNED_SHORT_4_4_4_4&&(nt=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(nt=n.RGB5_A1)}return(nt===n.R16F||nt===n.R32F||nt===n.RG16F||nt===n.RG32F||nt===n.RGBA16F||nt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function A(R,v){let U;return R?v===null||v===Hn||v===lr?U=n.DEPTH24_STENCIL8:v===Dn?U=n.DEPTH32F_STENCIL8:v===or&&(U=n.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Hn||v===lr?U=n.DEPTH_COMPONENT24:v===Dn?U=n.DEPTH_COMPONENT32F:v===or&&(U=n.DEPTH_COMPONENT16),U}function w(R,v){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ze&&R.minFilter!==je?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function D(R){let v=R.target;v.removeEventListener("dispose",D),x(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function _(R){let v=R.target;v.removeEventListener("dispose",_),B(v)}function x(R){let v=i.get(R);if(v.__webglInit===void 0)return;let U=R.source,X=f.get(U);if(X){let et=X[v.__cacheKey];et.usedTimes--,et.usedTimes===0&&N(R),Object.keys(X).length===0&&f.delete(U)}i.remove(R)}function N(R){let v=i.get(R);n.deleteTexture(v.__webglTexture);let U=R.source,X=f.get(U);delete X[v.__cacheKey],a.memory.textures--}function B(R){let v=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let et=0;et<v.__webglFramebuffer[X].length;et++)n.deleteFramebuffer(v.__webglFramebuffer[X][et]);else n.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)n.deleteFramebuffer(v.__webglFramebuffer[X]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let U=R.textures;for(let X=0,et=U.length;X<et;X++){let mt=i.get(U[X]);mt.__webglTexture&&(n.deleteTexture(mt.__webglTexture),a.memory.textures--),i.remove(U[X])}i.remove(R)}let H=0;function J(){H=0}function z(){return H}function k(R){H=R}function tt(){let R=H;return R>=s.maxTextures&&Gt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,R}function G(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function rt(R,v){let U=i.get(R);if(R.isVideoTexture&&O(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){let X=R.image;if(X===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(U,R,v);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+v)}function $(R,v){let U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){xt(U,R,v);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+v)}function ot(R,v){let U=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){xt(U,R,v);return}e.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+v)}function lt(R,v){let U=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){kt(U,R,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+v)}let It={[Vs]:n.REPEAT,[yn]:n.CLAMP_TO_EDGE,[_o]:n.MIRRORED_REPEAT},Ct={[Ze]:n.NEAREST,[hd]:n.NEAREST_MIPMAP_NEAREST,[fa]:n.NEAREST_MIPMAP_LINEAR,[je]:n.LINEAR,[Zo]:n.LINEAR_MIPMAP_NEAREST,[Ui]:n.LINEAR_MIPMAP_LINEAR},Jt={[pd]:n.NEVER,[vd]:n.ALWAYS,[md]:n.LESS,[Ll]:n.LEQUAL,[gd]:n.EQUAL,[Dl]:n.GEQUAL,[_d]:n.GREATER,[xd]:n.NOTEQUAL};function Kt(R,v){if(v.type===Dn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===je||v.magFilter===Zo||v.magFilter===fa||v.magFilter===Ui||v.minFilter===je||v.minFilter===Zo||v.minFilter===fa||v.minFilter===Ui)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,It[v.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,It[v.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,It[v.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Ct[v.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Ct[v.minFilter]),v.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Jt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ze||v.minFilter!==fa&&v.minFilter!==Ui||v.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ie(R,v){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",D));let X=v.source,et=f.get(X);et===void 0&&(et={},f.set(X,et));let mt=G(v);if(mt!==R.__cacheKey){et[mt]===void 0&&(et[mt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),et[mt].usedTimes++;let pt=et[R.__cacheKey];pt!==void 0&&(et[R.__cacheKey].usedTimes--,pt.usedTimes===0&&N(v)),R.__cacheKey=mt,R.__webglTexture=et[mt].texture}return U}function j(R,v,U){return Math.floor(Math.floor(R/U)/v)}function it(R,v,U,X){let mt=R.updateRanges;if(mt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,U,X,v.data);else{mt.sort((Ft,Mt)=>Ft.start-Mt.start);let pt=0;for(let Ft=1;Ft<mt.length;Ft++){let Mt=mt[pt],yt=mt[Ft],Ot=Mt.start+Mt.count,S=j(yt.start,v.width,4),C=j(Mt.start,v.width,4);yt.start<=Ot+1&&S===C&&j(yt.start+yt.count-1,v.width,4)===S?Mt.count=Math.max(Mt.count,yt.start+yt.count-Mt.start):(++pt,mt[pt]=yt)}mt.length=pt+1;let nt=e.getParameter(n.UNPACK_ROW_LENGTH),at=e.getParameter(n.UNPACK_SKIP_PIXELS),vt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Ft=0,Mt=mt.length;Ft<Mt;Ft++){let yt=mt[Ft],Ot=Math.floor(yt.start/4),S=Math.ceil(yt.count/4),C=Ot%v.width,M=Math.floor(Ot/v.width),L=S,I=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,C),e.pixelStorei(n.UNPACK_SKIP_ROWS,M),e.texSubImage2D(n.TEXTURE_2D,0,C,M,L,I,U,X,v.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,nt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,at),e.pixelStorei(n.UNPACK_SKIP_ROWS,vt)}}function xt(R,v,U){let X=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=n.TEXTURE_3D);let et=ie(R,v),mt=v.source;e.bindTexture(X,R.__webglTexture,n.TEXTURE0+U);let pt=i.get(mt);if(mt.version!==pt.__version||et===!0){if(e.activeTexture(n.TEXTURE0+U),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let I=oe.getPrimaries(oe.workingColorSpace),W=v.colorSpace===Wn?null:oe.getPrimaries(v.colorSpace),Q=v.colorSpace===Wn||I===W?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q)}e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let at=m(v.image,!1,s.maxTextureSize);at=le(v,at);let vt=r.convert(v.format,v.colorSpace),Ft=r.convert(v.type),Mt=y(v.internalFormat,vt,Ft,v.normalized,v.colorSpace,v.isVideoTexture);Kt(X,v);let yt,Ot=v.mipmaps,S=v.isVideoTexture!==!0,C=pt.__version===void 0||et===!0,M=mt.dataReady,L=w(v,at);if(v.isDepthTexture)Mt=A(v.format===Fi,v.type),C&&(S?e.texStorage2D(n.TEXTURE_2D,1,Mt,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,Mt,at.width,at.height,0,vt,Ft,null));else if(v.isDataTexture)if(Ot.length>0){S&&C&&e.texStorage2D(n.TEXTURE_2D,L,Mt,Ot[0].width,Ot[0].height);for(let I=0,W=Ot.length;I<W;I++)yt=Ot[I],S?M&&e.texSubImage2D(n.TEXTURE_2D,I,0,0,yt.width,yt.height,vt,Ft,yt.data):e.texImage2D(n.TEXTURE_2D,I,Mt,yt.width,yt.height,0,vt,Ft,yt.data);v.generateMipmaps=!1}else S?(C&&e.texStorage2D(n.TEXTURE_2D,L,Mt,at.width,at.height),M&&it(v,at,vt,Ft)):e.texImage2D(n.TEXTURE_2D,0,Mt,at.width,at.height,0,vt,Ft,at.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){S&&C&&e.texStorage3D(n.TEXTURE_2D_ARRAY,L,Mt,Ot[0].width,Ot[0].height,at.depth);for(let I=0,W=Ot.length;I<W;I++)if(yt=Ot[I],v.format!==Nn)if(vt!==null)if(S){if(M)if(v.layerUpdates.size>0){let Q=dh(yt.width,yt.height,v.format,v.type);for(let q of v.layerUpdates){let ct=yt.data.subarray(q*Q/yt.data.BYTES_PER_ELEMENT,(q+1)*Q/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,I,0,0,q,yt.width,yt.height,1,vt,ct)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,I,0,0,0,yt.width,yt.height,at.depth,vt,yt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,I,Mt,yt.width,yt.height,at.depth,0,yt.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else S?M&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,I,0,0,0,yt.width,yt.height,at.depth,vt,Ft,yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,I,Mt,yt.width,yt.height,at.depth,0,vt,Ft,yt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{S&&C&&e.texStorage2D(n.TEXTURE_2D,L,Mt,Ot[0].width,Ot[0].height);for(let I=0,W=Ot.length;I<W;I++)yt=Ot[I],v.format!==Nn?vt!==null?S?M&&e.compressedTexSubImage2D(n.TEXTURE_2D,I,0,0,yt.width,yt.height,vt,yt.data):e.compressedTexImage2D(n.TEXTURE_2D,I,Mt,yt.width,yt.height,0,yt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):S?M&&e.texSubImage2D(n.TEXTURE_2D,I,0,0,yt.width,yt.height,vt,Ft,yt.data):e.texImage2D(n.TEXTURE_2D,I,Mt,yt.width,yt.height,0,vt,Ft,yt.data)}else if(v.isDataArrayTexture)if(S){if(C&&e.texStorage3D(n.TEXTURE_2D_ARRAY,L,Mt,at.width,at.height,at.depth),M)if(v.layerUpdates.size>0){let I=dh(at.width,at.height,v.format,v.type);for(let W of v.layerUpdates){let Q=at.data.subarray(W*I/at.data.BYTES_PER_ELEMENT,(W+1)*I/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,W,at.width,at.height,1,vt,Ft,Q)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,vt,Ft,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Mt,at.width,at.height,at.depth,0,vt,Ft,at.data);else if(v.isData3DTexture)S?(C&&e.texStorage3D(n.TEXTURE_3D,L,Mt,at.width,at.height,at.depth),M&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,vt,Ft,at.data)):e.texImage3D(n.TEXTURE_3D,0,Mt,at.width,at.height,at.depth,0,vt,Ft,at.data);else if(v.isFramebufferTexture){if(C)if(S)e.texStorage2D(n.TEXTURE_2D,L,Mt,at.width,at.height);else{let I=at.width,W=at.height;for(let Q=0;Q<L;Q++)e.texImage2D(n.TEXTURE_2D,Q,Mt,I,W,0,vt,Ft,null),I>>=1,W>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let I=n.canvas;if(I.hasAttribute("layoutsubtree")||I.setAttribute("layoutsubtree","true"),at.parentNode!==I){I.appendChild(at),d.add(v),I.onpaint=W=>{let Q=W.changedElements;for(let q of d)Q.includes(q.image)&&(q.needsUpdate=!0)},I.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,at);else{let Q=n.RGBA,q=n.RGBA,ct=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Q,q,ct,at)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(S&&C){let I=Qt(Ot[0]);e.texStorage2D(n.TEXTURE_2D,L,Mt,I.width,I.height)}for(let I=0,W=Ot.length;I<W;I++)yt=Ot[I],S?M&&e.texSubImage2D(n.TEXTURE_2D,I,0,0,vt,Ft,yt):e.texImage2D(n.TEXTURE_2D,I,Mt,vt,Ft,yt);v.generateMipmaps=!1}else if(S){if(C){let I=Qt(at);e.texStorage2D(n.TEXTURE_2D,L,Mt,I.width,I.height)}M&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,Ft,at)}else e.texImage2D(n.TEXTURE_2D,0,Mt,vt,Ft,at);p(v)&&T(X),pt.__version=mt.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function kt(R,v,U){if(v.image.length!==6)return;let X=ie(R,v),et=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+U);let mt=i.get(et);if(et.version!==mt.__version||X===!0){e.activeTexture(n.TEXTURE0+U);let pt=oe.getPrimaries(oe.workingColorSpace),nt=v.colorSpace===Wn?null:oe.getPrimaries(v.colorSpace),at=v.colorSpace===Wn||pt===nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let vt=v.isCompressedTexture||v.image[0].isCompressedTexture,Ft=v.image[0]&&v.image[0].isDataTexture,Mt=[];for(let q=0;q<6;q++)!vt&&!Ft?Mt[q]=m(v.image[q],!0,s.maxCubemapSize):Mt[q]=Ft?v.image[q].image:v.image[q],Mt[q]=le(v,Mt[q]);let yt=Mt[0],Ot=r.convert(v.format,v.colorSpace),S=r.convert(v.type),C=y(v.internalFormat,Ot,S,v.normalized,v.colorSpace),M=v.isVideoTexture!==!0,L=mt.__version===void 0||X===!0,I=et.dataReady,W=w(v,yt);Kt(n.TEXTURE_CUBE_MAP,v);let Q;if(vt){M&&L&&e.texStorage2D(n.TEXTURE_CUBE_MAP,W,C,yt.width,yt.height);for(let q=0;q<6;q++){Q=Mt[q].mipmaps;for(let ct=0;ct<Q.length;ct++){let ht=Q[ct];v.format!==Nn?Ot!==null?M?I&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ct,0,0,ht.width,ht.height,Ot,ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ct,C,ht.width,ht.height,0,ht.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):M?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ct,0,0,ht.width,ht.height,Ot,S,ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ct,C,ht.width,ht.height,0,Ot,S,ht.data)}}}else{if(Q=v.mipmaps,M&&L){Q.length>0&&W++;let q=Qt(Mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,W,C,q.width,q.height)}for(let q=0;q<6;q++)if(Ft){M?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Mt[q].width,Mt[q].height,Ot,S,Mt[q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,C,Mt[q].width,Mt[q].height,0,Ot,S,Mt[q].data);for(let ct=0;ct<Q.length;ct++){let Et=Q[ct].image[q].image;M?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ct+1,0,0,Et.width,Et.height,Ot,S,Et.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ct+1,C,Et.width,Et.height,0,Ot,S,Et.data)}}else{M?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ot,S,Mt[q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,C,Ot,S,Mt[q]);for(let ct=0;ct<Q.length;ct++){let ht=Q[ct];M?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ct+1,0,0,Ot,S,ht.image[q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ct+1,C,Ot,S,ht.image[q])}}}p(v)&&T(n.TEXTURE_CUBE_MAP),mt.__version=et.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function At(R,v,U,X,et,mt){let pt=r.convert(U.format,U.colorSpace),nt=r.convert(U.type),at=y(U.internalFormat,pt,nt,U.normalized,U.colorSpace),vt=i.get(v),Ft=i.get(U);if(Ft.__renderTarget=v,!vt.__hasExternalTextures){let Mt=Math.max(1,v.width>>mt),yt=Math.max(1,v.height>>mt);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,mt,at,Mt,yt,v.depth,0,pt,nt,null):e.texImage2D(et,mt,at,Mt,yt,0,pt,nt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),Ht(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,et,Ft.__webglTexture,0,Ut(v)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,et,Ft.__webglTexture,mt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Vt(R,v,U){if(n.bindRenderbuffer(n.RENDERBUFFER,R),v.depthBuffer){let X=v.depthTexture,et=X&&X.isDepthTexture?X.type:null,mt=A(v.stencilBuffer,et),pt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ht(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ut(v),mt,v.width,v.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut(v),mt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,mt,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pt,n.RENDERBUFFER,R)}else{let X=v.textures;for(let et=0;et<X.length;et++){let mt=X[et],pt=r.convert(mt.format,mt.colorSpace),nt=r.convert(mt.type),at=y(mt.internalFormat,pt,nt,mt.normalized,mt.colorSpace);Ht(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ut(v),at,v.width,v.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut(v),at,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,at,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(R,v,U){let X=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=i.get(v.depthTexture);if(et.__renderTarget=v,(!et.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X){if(et.__webglInit===void 0&&(et.__webglInit=!0,v.depthTexture.addEventListener("dispose",D)),et.__webglTexture===void 0){et.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),Kt(n.TEXTURE_CUBE_MAP,v.depthTexture);let vt=r.convert(v.depthTexture.format),Ft=r.convert(v.depthTexture.type),Mt;v.depthTexture.format===$n?Mt=n.DEPTH_COMPONENT24:v.depthTexture.format===Fi&&(Mt=n.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Mt,v.width,v.height,0,vt,Ft,null)}}else rt(v.depthTexture,0);let mt=et.__webglTexture,pt=Ut(v),nt=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,at=v.depthTexture.format===Fi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===$n)Ht(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,at,nt,mt,0,pt):n.framebufferTexture2D(n.FRAMEBUFFER,at,nt,mt,0);else if(v.depthTexture.format===Fi)Ht(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,at,nt,mt,0,pt):n.framebufferTexture2D(n.FRAMEBUFFER,at,nt,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(R){let v=i.get(R),U=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let X=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){let et=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",et)};X.addEventListener("dispose",et),v.__depthDisposeCallback=et}v.__boundDepthTexture=X}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(U)for(let X=0;X<6;X++)ce(v.__webglFramebuffer[X],R,X);else{let X=R.texture.mipmaps;X&&X.length>0?ce(v.__webglFramebuffer[0],R,0):ce(v.__webglFramebuffer,R,0)}else if(U){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=n.createRenderbuffer(),Vt(v.__webglDepthbuffer[X],R,!1);else{let et=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=v.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,mt)}}else{let X=R.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Vt(v.__webglDepthbuffer,R,!1);else{let et=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,mt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(R,v,U){let X=i.get(R);v!==void 0&&At(X.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&st(R)}function dt(R){let v=R.texture,U=i.get(R),X=i.get(v);R.addEventListener("dispose",_);let et=R.textures,mt=R.isWebGLCubeRenderTarget===!0,pt=et.length>1;if(pt||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=v.version,a.memory.textures++),mt){U.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[nt]=[];for(let at=0;at<v.mipmaps.length;at++)U.__webglFramebuffer[nt][at]=n.createFramebuffer()}else U.__webglFramebuffer[nt]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let nt=0;nt<v.mipmaps.length;nt++)U.__webglFramebuffer[nt]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(pt)for(let nt=0,at=et.length;nt<at;nt++){let vt=i.get(et[nt]);vt.__webglTexture===void 0&&(vt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Ht(R)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let nt=0;nt<et.length;nt++){let at=et[nt];U.__webglColorRenderbuffer[nt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[nt]);let vt=r.convert(at.format,at.colorSpace),Ft=r.convert(at.type),Mt=y(at.internalFormat,vt,Ft,at.normalized,at.colorSpace,R.isXRRenderTarget===!0),yt=Ut(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,yt,Mt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.RENDERBUFFER,U.__webglColorRenderbuffer[nt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Vt(U.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(mt){e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Kt(n.TEXTURE_CUBE_MAP,v);for(let nt=0;nt<6;nt++)if(v.mipmaps&&v.mipmaps.length>0)for(let at=0;at<v.mipmaps.length;at++)At(U.__webglFramebuffer[nt][at],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,at);else At(U.__webglFramebuffer[nt],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);p(v)&&T(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let nt=0,at=et.length;nt<at;nt++){let vt=et[nt],Ft=i.get(vt),Mt=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Mt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Ft.__webglTexture),Kt(Mt,vt),At(U.__webglFramebuffer,R,vt,n.COLOR_ATTACHMENT0+nt,Mt,0),p(vt)&&T(Mt)}e.unbindTexture()}else{let nt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(nt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(nt,X.__webglTexture),Kt(nt,v),v.mipmaps&&v.mipmaps.length>0)for(let at=0;at<v.mipmaps.length;at++)At(U.__webglFramebuffer[at],R,v,n.COLOR_ATTACHMENT0,nt,at);else At(U.__webglFramebuffer,R,v,n.COLOR_ATTACHMENT0,nt,0);p(v)&&T(nt),e.unbindTexture()}R.depthBuffer&&st(R)}function gt(R){let v=R.textures;for(let U=0,X=v.length;U<X;U++){let et=v[U];if(p(et)){let mt=P(R),pt=i.get(et).__webglTexture;e.bindTexture(mt,pt),T(mt),e.unbindTexture()}}}let _t=[],zt=[];function Lt(R){if(R.samples>0){if(Ht(R)===!1){let v=R.textures,U=R.width,X=R.height,et=n.COLOR_BUFFER_BIT,mt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=i.get(R),nt=v.length>1;if(nt)for(let vt=0;vt<v.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);let at=R.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let vt=0;vt<v.length;vt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),nt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pt.__webglColorRenderbuffer[vt]);let Ft=i.get(v[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ft,0)}n.blitFramebuffer(0,0,U,X,0,0,U,X,et,n.NEAREST),l===!0&&(_t.length=0,zt.length=0,_t.push(n.COLOR_ATTACHMENT0+vt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(_t.push(mt),zt.push(mt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,zt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_t))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),nt)for(let vt=0;vt<v.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,pt.__webglColorRenderbuffer[vt]);let Ft=i.get(v[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,Ft,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let v=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Ut(R){return Math.min(s.maxSamples,R.samples)}function Ht(R){let v=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function O(R){let v=a.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function le(R,v){let U=R.colorSpace,X=R.format,et=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==Fr&&U!==Wn&&(oe.getTransfer(U)===ge?(X!==Nn||et!==mn)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",U)),v}function Qt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=tt,this.resetTextureUnits=J,this.getTextureUnits=z,this.setTextureUnits=k,this.setTexture2D=rt,this.setTexture2DArray=$,this.setTexture3D=ot,this.setTextureCube=lt,this.rebindTextures=ut,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Ht,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function _v(n,t){function e(i,s=Wn){let r,a=oe.getTransfer(s);if(i===mn)return n.UNSIGNED_BYTE;if(i===$o)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ko)return n.UNSIGNED_SHORT_5_5_5_1;if(i===eh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qc)return n.BYTE;if(i===th)return n.SHORT;if(i===or)return n.UNSIGNED_SHORT;if(i===Jo)return n.INT;if(i===Hn)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===Gn)return n.HALF_FLOAT;if(i===ih)return n.ALPHA;if(i===sh)return n.RGB;if(i===Nn)return n.RGBA;if(i===$n)return n.DEPTH_COMPONENT;if(i===Fi)return n.DEPTH_STENCIL;if(i===jo)return n.RED;if(i===Qo)return n.RED_INTEGER;if(i===Oi)return n.RG;if(i===tl)return n.RG_INTEGER;if(i===el)return n.RGBA_INTEGER;if(i===pa||i===ma||i===ga||i===_a)if(a===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nl||i===il||i===sl||i===rl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===al||i===ol||i===ll||i===cl||i===hl||i===xa||i===ul)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===al||i===ol)return a===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ll)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===cl)return r.COMPRESSED_R11_EAC;if(i===hl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===xa)return r.COMPRESSED_RG11_EAC;if(i===ul)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===dl||i===fl||i===pl||i===ml||i===gl||i===_l||i===xl||i===vl||i===yl||i===Ml||i===Sl||i===bl||i===El||i===Tl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===dl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ml)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_l)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ml)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===El)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Tl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wl||i===Al||i===Rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===wl)return a===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cl||i===Pl||i===va||i===Il)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Cl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vv=`
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

}`,wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new qr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new bn({vertexShader:xv,fragmentShader:vv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new Ln(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ah=class extends zn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,E=typeof XRWebGLBinding<"u",m=new wh,p={},T=e.getContextAttributes(),P=null,y=null,A=[],w=[],D=new ft,_=null,x=null,N=new Ye;N.viewport=new Re;let B=new Ye;B.viewport=new Re;let H=[N,B],J=new Xo,z=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let it=A[j];return it===void 0&&(it=new Zs,A[j]=it),it.getTargetRaySpace()},this.getControllerGrip=function(j){let it=A[j];return it===void 0&&(it=new Zs,A[j]=it),it.getGripSpace()},this.getHand=function(j){let it=A[j];return it===void 0&&(it=new Zs,A[j]=it),it.getHandSpace()};function tt(j){let it=w.indexOf(j.inputSource);if(it===-1)return;let xt=A[it];xt!==void 0&&(xt.update(j.inputSource,j.frame,c||a),xt.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){s.removeEventListener("select",tt),s.removeEventListener("selectstart",tt),s.removeEventListener("selectend",tt),s.removeEventListener("squeeze",tt),s.removeEventListener("squeezestart",tt),s.removeEventListener("squeezeend",tt),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",rt);for(let j=0;j<A.length;j++){let it=w[j];it!==null&&(w[j]=null,A[j].disconnect(it))}z=null,k=null,m.reset();for(let j in p)delete p[j];if(t.setRenderTarget(P),f=null,u=null,d=null,s=null,y=null,ie.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(D.width,D.height,!1),x!==null){let j=x.camera;j.fov=x.fov,j.zoom=x.zoom,j.updateProjectionMatrix(),x=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&E&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(P=t.getRenderTarget(),s.addEventListener("select",tt),s.addEventListener("selectstart",tt),s.addEventListener("selectend",tt),s.addEventListener("squeeze",tt),s.addEventListener("squeezestart",tt),s.addEventListener("squeezeend",tt),s.addEventListener("end",G),s.addEventListener("inputsourceschange",rt),T.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(D),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,kt=null,At=null;T.depth&&(At=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=T.stencil?Fi:$n,kt=T.stencil?lr:Hn);let Vt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Vt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new pn(u.textureWidth,u.textureHeight,{format:Nn,type:mn,depthTexture:new Ti(u.textureWidth,u.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let xt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new pn(f.framebufferWidth,f.framebufferHeight,{format:Nn,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ie.setContext(s),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt(j){for(let it=0;it<j.removed.length;it++){let xt=j.removed[it],kt=w.indexOf(xt);kt>=0&&(w[kt]=null,A[kt].disconnect(xt))}for(let it=0;it<j.added.length;it++){let xt=j.added[it],kt=w.indexOf(xt);if(kt===-1){for(let Vt=0;Vt<A.length;Vt++)if(Vt>=w.length){w.push(xt),kt=Vt;break}else if(w[Vt]===null){w[Vt]=xt,kt=Vt;break}if(kt===-1)break}let At=A[kt];At&&At.connect(xt)}}let $=new F,ot=new F;function lt(j,it,xt){$.setFromMatrixPosition(it.matrixWorld),ot.setFromMatrixPosition(xt.matrixWorld);let kt=$.distanceTo(ot),At=it.projectionMatrix.elements,Vt=xt.projectionMatrix.elements,ce=At[14]/(At[10]-1),st=At[14]/(At[10]+1),ut=(At[9]+1)/At[5],dt=(At[9]-1)/At[5],gt=(At[8]-1)/At[0],_t=(Vt[8]+1)/Vt[0],zt=ce*gt,Lt=ce*_t,Ut=kt/(-gt+_t),Ht=Ut*-gt;if(it.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ht),j.translateZ(Ut),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),At[10]===-1)j.projectionMatrix.copy(it.projectionMatrix),j.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let O=ce+Ut,le=st+Ut,Qt=zt-Ht,R=Lt+(kt-Ht),v=ut*st/le*O,U=dt*st/le*O;j.projectionMatrix.makePerspective(Qt,R,v,U,O,le),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function It(j,it){it===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(it.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let it=j.near,xt=j.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),J.near=B.near=N.near=it,J.far=B.far=N.far=xt,(z!==J.near||k!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),z=J.near,k=J.far),J.layers.mask=j.layers.mask|6,N.layers.mask=J.layers.mask&-5,B.layers.mask=J.layers.mask&-3;let kt=j.parent,At=J.cameras;It(J,kt);for(let Vt=0;Vt<At.length;Vt++)It(At[Vt],kt);At.length===2?lt(J,N,B):J.projectionMatrix.copy(N.projectionMatrix),x===null&&j.isPerspectiveCamera&&(x={camera:j,fov:j.fov,zoom:j.zoom}),Ct(j,J,kt)};function Ct(j,it,xt){xt===null?j.matrix.copy(it.matrixWorld):(j.matrix.copy(xt.matrixWorld),j.matrix.invert(),j.matrix.multiply(it.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(it.projectionMatrix),j.projectionMatrixInverse.copy(it.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Xs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(J)},this.getCameraTexture=function(j){return p[j]};let Jt=null;function Kt(j,it){if(h=it.getViewerPose(c||a),g=it,h!==null){let xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let kt=!1;xt.length!==J.cameras.length&&(J.cameras.length=0,kt=!0);for(let st=0;st<xt.length;st++){let ut=xt[st],dt=null;if(f!==null)dt=f.getViewport(ut);else{let _t=d.getViewSubImage(u,ut);dt=_t.viewport,st===0&&(t.setRenderTargetTextures(y,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(y))}let gt=H[st];gt===void 0&&(gt=new Ye,gt.layers.enable(st),gt.viewport=new Re,H[st]=gt),gt.matrix.fromArray(ut.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(ut.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(dt.x,dt.y,dt.width,dt.height),st===0&&(J.matrix.copy(gt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),kt===!0&&J.cameras.push(gt)}let At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){d=i.getBinding();let st=d.getDepthInformation(xt[0]);st&&st.isValid&&st.texture&&m.init(st,s.renderState)}if(At&&At.includes("camera-access")&&E){t.state.unbindTexture(),d=i.getBinding();for(let st=0;st<xt.length;st++){let ut=xt[st].camera;if(ut){let dt=p[ut];dt||(dt=new qr,p[ut]=dt);let gt=d.getCameraImage(ut);dt.sourceTexture=gt}}}}for(let xt=0;xt<A.length;xt++){let kt=w[xt],At=A[xt];kt!==null&&At!==void 0&&At.update(kt,it,c||a)}Jt&&Jt(j,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),g=null}let ie=new tf;ie.setAnimationLoop(Kt),this.setAnimationLoop=function(j){Jt=j},this.dispose=function(){}}},yv=new _e,of=new Zt;of.set(-1,0,0,0,1,0,0,0,1);function Mv(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ch(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,P,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),E(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,P):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=t.get(p),P=T.envMap,y=T.envMapRotation;P&&(m.envMap.value=P,m.envMapRotation.value.setFromMatrix4(yv.makeRotationFromEuler(y)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(of),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,P){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=P*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function E(m,p){let T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Sv(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,A){let w=A.program;i.uniformBlockBinding(y,w)}function c(y,A){let w=s[y.id];w===void 0&&(m(y),w=h(y),s[y.id]=w,y.addEventListener("dispose",T));let D=A.program;i.updateUBOMapping(y,D);let _=t.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){let A=d();y.__bindingPointIndex=A;let w=n.createBuffer(),D=y.__size,_=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,D,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,w),w}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let A=s[y.id],w=y.uniforms,D=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let _=0,x=w.length;_<x;_++){let N=w[_];if(Array.isArray(N))for(let B=0,H=N.length;B<H;B++)f(N[B],_,B,D);else f(N,_,0,D)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,A,w,D){if(E(y,A,w,D)===!0){let _=y.__offset,x=y.value;if(Array.isArray(x)){let N=0;for(let B=0;B<x.length;B++){let H=x[B],J=p(H);g(H,y.__data,N),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(N+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(x,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,y.__data)}}function g(y,A,w){typeof y=="number"||typeof y=="boolean"?A[0]=y:y.isMatrix3?(A[0]=y.elements[0],A[1]=y.elements[1],A[2]=y.elements[2],A[3]=0,A[4]=y.elements[3],A[5]=y.elements[4],A[6]=y.elements[5],A[7]=0,A[8]=y.elements[6],A[9]=y.elements[7],A[10]=y.elements[8],A[11]=0):ArrayBuffer.isView(y)?A.set(new y.constructor(y.buffer,y.byteOffset,A.length)):y.toArray(A,w)}function E(y,A,w,D){let _=y.value,x=A+"_"+w;if(D[x]===void 0)return typeof _=="number"||typeof _=="boolean"?D[x]=_:ArrayBuffer.isView(_)?D[x]=_.slice():D[x]=_.clone(),!0;{let N=D[x];if(typeof _=="number"||typeof _=="boolean"){if(N!==_)return D[x]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(N.equals(_)===!1)return N.copy(_),!0}}return!1}function m(y){let A=y.uniforms,w=0,D=16;for(let x=0,N=A.length;x<N;x++){let B=Array.isArray(A[x])?A[x]:[A[x]];for(let H=0,J=B.length;H<J;H++){let z=B[H],k=Array.isArray(z.value)?z.value:[z.value];for(let tt=0,G=k.length;tt<G;tt++){let rt=k[tt],$=p(rt),ot=w%D,lt=ot%$.boundary,It=ot+lt;w+=lt,It!==0&&D-It<$.storage&&(w+=D-It),z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=w,w+=$.storage}}}let _=w%D;return _>0&&(w+=D-_),y.__size=w,y.__cache={},this}function p(y){let A={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(A.boundary=4,A.storage=4):y.isVector2?(A.boundary=8,A.storage=8):y.isVector3||y.isColor?(A.boundary=16,A.storage=12):y.isVector4?(A.boundary=16,A.storage=16):y.isMatrix3?(A.boundary=48,A.storage=48):y.isMatrix4?(A.boundary=64,A.storage=64):y.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(A.boundary=16,A.storage=y.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",y),A}function T(y){let A=y.target;A.removeEventListener("dispose",T);let w=a.indexOf(A.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function P(){for(let y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:P}}var bv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ei=null;function Ev(){return ei===null&&(ei=new Hr(bv,16,16,Oi,Gn),ei.name="DFG_LUT",ei.minFilter=je,ei.magFilter=je,ei.wrapS=yn,ei.wrapT=yn,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}var Bl=class{constructor(t={}){let{canvas:e=Md(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=mn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let E=f,m=new Set([el,tl,Qo]),p=new Set([mn,Hn,or,lr,$o,Ko]),T=new Uint32Array(4),P=new Int32Array(4),y=new F,A=null,w=null,D=[],_=[],x=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,B=!1,H=null,J=null,z=null,k=null;this._outputColorSpace=qe;let tt=0,G=0,rt=null,$=-1,ot=null,lt=new Re,It=new Re,Ct=null,Jt=new qt(0),Kt=0,ie=e.width,j=e.height,it=1,xt=null,kt=null,At=new Re(0,0,ie,j),Vt=new Re(0,0,ie,j),ce=!1,st=new $s,ut=!1,dt=!1,gt=new _e,_t=new F,zt=new Re,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ut=!1;function Ht(){return rt===null?it:1}let O=i;function le(b,V){return e.getContext(b,V)}let Qt,R,v,U,X,et,mt,pt,nt,at,vt,Ft,Mt,yt,Ot,S,C,M,L,I,W,Q,q;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Et,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",pe,!1),O===null){let V="webgl2";if(O=le(V,b),O===null)throw le(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ct()}catch(b){throw e.removeEventListener("webglcontextlost",Et,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",pe,!1),Wt("WebGLRenderer: "+b.message),b}function ct(){Qt=new I_(O),Qt.init(),W=new _v(O,Qt),R=new M_(O,Qt,t,W),v=new mv(O,Qt),R.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),J=O.createFramebuffer(),z=O.createFramebuffer(),k=O.createFramebuffer(),U=new N_(O),X=new ev,et=new gv(O,Qt,v,X,R,W,U),mt=new P_(N),pt=new Fm(O),Q=new v_(O,pt),nt=new L_(O,pt,U,Q),at=new F_(O,nt,pt,Q,U),M=new U_(O,R,et),Ot=new S_(X),vt=new tv(N,mt,Qt,R,Q,Ot),Ft=new Mv(N,X),Mt=new iv,yt=new cv(Qt),C=new x_(N,mt,v,at,g,l),S=new pv(N,at,R),q=new Sv(O,U,R,v),L=new y_(O,Qt,U),I=new D_(O,Qt,U),U.programs=vt.programs,N.capabilities=R,N.extensions=Qt,N.properties=X,N.renderLists=Mt,N.shadowMap=S,N.state=v,N.info=U}E!==mn&&(x=new B_(E,e.width,e.height,o,s,r));let ht=new Ah(N,O);this.xr=ht,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=Qt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Qt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(b){b!==void 0&&(it=b,this.setSize(ie,j,!1))},this.getSize=function(b){return b.set(ie,j)},this.setSize=function(b,V,K=!0){if(ht.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=b,j=V,e.width=Math.floor(b*it),e.height=Math.floor(V*it),K===!0&&(e.style.width=b+"px",e.style.height=V+"px"),x!==null&&x.setSize(e.width,e.height),this.setViewport(0,0,b,V)},this.getDrawingBufferSize=function(b){return b.set(ie*it,j*it).floor()},this.setDrawingBufferSize=function(b,V,K){ie=b,j=V,it=K,e.width=Math.floor(b*K),e.height=Math.floor(V*K),this.setViewport(0,0,b,V)},this.setEffects=function(b){if(E===mn){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let V=0;V<b.length;V++)if(b[V].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(lt)},this.getViewport=function(b){return b.copy(At)},this.setViewport=function(b,V,K,Y){b.isVector4?At.set(b.x,b.y,b.z,b.w):At.set(b,V,K,Y),v.viewport(lt.copy(At).multiplyScalar(it).round())},this.getScissor=function(b){return b.copy(Vt)},this.setScissor=function(b,V,K,Y){b.isVector4?Vt.set(b.x,b.y,b.z,b.w):Vt.set(b,V,K,Y),v.scissor(It.copy(Vt).multiplyScalar(it).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(b){v.setScissorTest(ce=b)},this.setOpaqueSort=function(b){xt=b},this.setTransparentSort=function(b){kt=b},this.getClearColor=function(b){return b.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(b=!0,V=!0,K=!0){let Y=0;if(b){let Z=!1;if(rt!==null){let wt=rt.texture.format;Z=m.has(wt)}if(Z){let wt=rt.texture.type,Pt=p.has(wt),bt=C.getClearColor(),Dt=C.getClearAlpha(),Bt=bt.r,te=bt.g,ae=bt.b;Pt?(T[0]=Bt,T[1]=te,T[2]=ae,T[3]=Dt,O.clearBufferuiv(O.COLOR,0,T)):(P[0]=Bt,P[1]=te,P[2]=ae,P[3]=Dt,O.clearBufferiv(O.COLOR,0,P))}else Y|=O.COLOR_BUFFER_BIT}V&&(Y|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),H=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Et,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",pe,!1),C.dispose(),Mt.dispose(),yt.dispose(),X.dispose(),mt.dispose(),at.dispose(),Q.dispose(),q.dispose(),vt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",br),ht.removeEventListener("sessionend",tu),Wi.stop()};function Et(b){b.preventDefault(),ah("WebGLRenderer: Context Lost."),B=!0}function Tt(){ah("WebGLRenderer: Context Restored."),B=!1;let b=U.autoReset,V=S.enabled,K=S.autoUpdate,Y=S.needsUpdate,Z=S.type;ct(),U.autoReset=b,S.enabled=V,S.autoUpdate=K,S.needsUpdate=Y,S.type=Z}function pe(b){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Me(b){let V=b.target;V.removeEventListener("dispose",Me),Ue(V)}function Ue(b){Rn(b),X.remove(b)}function Rn(b){let V=X.get(b).programs;V!==void 0&&(V.forEach(function(K){vt.releaseProgram(K)}),b.isShaderMaterial&&vt.releaseShaderCache(b))}this.renderBufferDirect=function(b,V,K,Y,Z,wt){V===null&&(V=Lt);let Pt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,bt=ip(b,V,K,Y,Z);v.setMaterial(Y,Pt);let Dt=K.index,Bt=1;if(Y.wireframe===!0){if(Dt=nt.getWireframeAttribute(K),Dt===void 0)return;Bt=2}let te=K.drawRange,ae=K.attributes.position,Nt=te.start*Bt,me=(te.start+te.count)*Bt;wt!==null&&(Nt=Math.max(Nt,wt.start*Bt),me=Math.min(me,(wt.start+wt.count)*Bt)),Dt!==null?(Nt=Math.max(Nt,0),me=Math.min(me,Dt.count)):ae!=null&&(Nt=Math.max(Nt,0),me=Math.min(me,ae.count));let Fe=me-Nt;if(Fe<0||Fe===1/0)return;Q.setup(Z,Y,bt,K,Dt);let we,Se=L;if(Dt!==null&&(we=pt.get(Dt),Se=I,Se.setIndex(we)),Z.isMesh)Y.wireframe===!0?(v.setLineWidth(Y.wireframeLinewidth*Ht()),Se.setMode(O.LINES)):Se.setMode(O.TRIANGLES);else if(Z.isLine){let tn=Y.linewidth;tn===void 0&&(tn=1),v.setLineWidth(tn*Ht()),Z.isLineSegments?Se.setMode(O.LINES):Z.isLineLoop?Se.setMode(O.LINE_LOOP):Se.setMode(O.LINE_STRIP)}else Z.isPoints?Se.setMode(O.POINTS):Z.isSprite&&Se.setMode(O.TRIANGLES);if(Z.isBatchedMesh)if(Qt.get("WEBGL_multi_draw"))Se.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let tn=Z._multiDrawStarts,Rt=Z._multiDrawCounts,ln=Z._multiDrawCount,he=Dt?pt.get(Dt).bytesPerElement:1,Cn=X.get(Y).currentProgram.getUniforms();for(let Yn=0;Yn<ln;Yn++)Cn.setValue(O,"_gl_DrawID",Yn),Se.render(tn[Yn]/he,Rt[Yn])}else if(Z.isInstancedMesh)Se.renderInstances(Nt,Fe,Z.count);else if(K.isInstancedBufferGeometry){let tn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Rt=Math.min(K.instanceCount,tn);Se.renderInstances(Nt,Fe,Rt)}else Se.render(Nt,Fe)};function Qe(b,V,K,Y){H!==null&&b.isNodeMaterial&&H.setObject(Y,b),ut===!0&&Ot.setState(b,K,!1),b.transparent===!0&&b.side===Je&&b.forceSinglePass===!1?(b.side=un,b.needsUpdate=!0,Oa(b,V,Y),b.side=Di,b.needsUpdate=!0,Oa(b,V,Y),b.side=Je):Oa(b,V,Y)}this.compile=function(b,V,K=null){K===null&&(K=b),H!==null&&H.renderStart(b,V,K),w=yt.get(K),w.init(V),_.push(w),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(w.pushLight(Z),Z.castShadow&&w.pushShadow(Z))}),b!==K&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(w.pushLight(Z),Z.castShadow&&w.pushShadow(Z))}),w.setupLights(),H!==null&&H.updateLights(w.state.lightsArray),dt=this.localClippingEnabled,ut=Ot.init(this.clippingPlanes,dt),ut===!0&&Ot.setGlobalState(this.clippingPlanes,V),H!==null&&S.render(w.state.shadowsArray,K,V);let Y=new Set;return b.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let wt=Z.material;if(wt)if(Array.isArray(wt))for(let Pt=0;Pt<wt.length;Pt++){let bt=wt[Pt];Qe(bt,K,V,Z),Y.add(bt)}else Qe(wt,K,V,Z),Y.add(wt)}),w=_.pop(),H!==null&&H.renderEnd(),Y},this.compileAsync=function(b,V,K=null){let Y=this.compile(b,V,K);return new Promise(Z=>{function wt(){if(Y.forEach(function(Pt){let Dt=X.get(Pt).currentProgram;(Dt===void 0||Dt.isReady())&&Y.delete(Pt)}),Y.size===0){Z(b);return}setTimeout(wt,10)}Qt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Mr=null;function Sr(b){Mr&&Mr(b)}function br(){Wi.stop()}function tu(){Wi.start()}let Wi=new tf;Wi.setAnimationLoop(Sr),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(b){Mr=b,ht.setAnimationLoop(b),b===null?Wi.stop():Wi.start()},ht.addEventListener("sessionstart",br),ht.addEventListener("sessionend",tu),this.render=function(b,V){if(V!==void 0&&V.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;H!==null&&H.renderStart(b,V);let K=ht.enabled===!0&&ht.isPresenting===!0,Y=x!==null&&(rt===null||K)&&x.begin(N,rt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(V),V=ht.getCamera()),b.isScene===!0&&b.onBeforeRender(N,b,V,rt),w=yt.get(b,_.length),w.init(V),w.state.textureUnits=et.getTextureUnits(),_.push(w),gt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),st.setFromProjectionMatrix(gt,Bn,V.reversedDepth),dt=this.localClippingEnabled,ut=Ot.init(this.clippingPlanes,dt),A=Mt.get(b,D.length),A.init(),D.push(A),ht.enabled===!0&&ht.isPresenting===!0){let Pt=N.xr.getDepthSensingMesh();Pt!==null&&sc(Pt,V,-1/0,N.sortObjects)}sc(b,V,0,N.sortObjects),A.finish(),H!==null&&H.updateLights(w.state.lightsArray),N.sortObjects===!0&&A.sort(xt,kt),Ut=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,Ut&&C.addToRenderList(A,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ut===!0&&Ot.beginShadows();let Z=w.state.shadowsArray;if(S.render(Z,b,V),ut===!0&&Ot.endShadows(),(Y&&x.hasRenderPass())===!1){let Pt=A.opaque,bt=A.transmissive;if(w.setupLights(),V.isArrayCamera){let Dt=V.cameras;if(bt.length>0)for(let Bt=0,te=Dt.length;Bt<te;Bt++){let ae=Dt[Bt];nu(Pt,bt,b,ae)}Ut&&C.render(b);for(let Bt=0,te=Dt.length;Bt<te;Bt++){let ae=Dt[Bt];eu(A,b,ae,ae.viewport)}}else bt.length>0&&nu(Pt,bt,b,V),Ut&&C.render(b),eu(A,b,V)}rt!==null&&G===0&&(et.updateMultisampleRenderTarget(rt),et.updateRenderTargetMipmap(rt)),Y&&x.end(N),b.isScene===!0&&b.onAfterRender(N,b,V),Q.resetDefaultState(),$=-1,ot=null,_.pop(),_.length>0?(w=_[_.length-1],et.setTextureUnits(w.state.textureUnits),ut===!0&&Ot.setGlobalState(N.clippingPlanes,w.state.camera)):w=null,D.pop(),D.length>0?A=D[D.length-1]:A=null,H!==null&&H.renderEnd()};function sc(b,V,K,Y){if(b.visible===!1)return;if(b.layers.test(V.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(V);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(st)){Y&&zt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(gt);let Pt=at.update(b),bt=b.material;bt.visible&&A.push(b,Pt,bt,K,zt.z,null,V)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(st))){let Pt=at.update(b),bt=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),zt.copy(b.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),zt.copy(Pt.boundingSphere.center)),zt.applyMatrix4(b.matrixWorld).applyMatrix4(gt)),Array.isArray(bt)){let Dt=Pt.groups;for(let Bt=0,te=Dt.length;Bt<te;Bt++){let ae=Dt[Bt],Nt=bt[ae.materialIndex];Nt&&Nt.visible&&A.push(b,Pt,Nt,K,zt.z,ae,V)}}else bt.visible&&A.push(b,Pt,bt,K,zt.z,null,V)}}let wt=b.children;for(let Pt=0,bt=wt.length;Pt<bt;Pt++)sc(wt[Pt],V,K,Y)}function eu(b,V,K,Y){let{opaque:Z,transmissive:wt,transparent:Pt}=b;w.setupLightsView(K),ut===!0&&Ot.setGlobalState(N.clippingPlanes,K),Y&&v.viewport(lt.copy(Y)),Z.length>0&&Fa(Z,V,K),wt.length>0&&Fa(wt,V,K),Pt.length>0&&Fa(Pt,V,K),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function nu(b,V,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Y.id]===void 0){let Nt=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Y.id]=new pn(1,1,{generateMipmaps:!0,type:Nt?Gn:mn,minFilter:Ui,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let wt=w.state.transmissionRenderTarget[Y.id],Pt=Y.viewport||lt;wt.setSize(Pt.z*N.transmissionResolutionScale,Pt.w*N.transmissionResolutionScale);let bt=N.getRenderTarget(),Dt=N.getActiveCubeFace(),Bt=N.getActiveMipmapLevel();N.setRenderTarget(wt),N.getClearColor(Jt),Kt=N.getClearAlpha(),Kt<1&&N.setClearColor(16777215,.5),N.clear(),Ut&&C.render(K);let te=N.toneMapping;N.toneMapping=Vn;let ae=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),w.setupLightsView(Y),ut===!0&&Ot.setGlobalState(N.clippingPlanes,Y),Fa(b,K,Y),et.updateMultisampleRenderTarget(wt),et.updateRenderTargetMipmap(wt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let me=0,Fe=V.length;me<Fe;me++){let we=V[me],{object:Se,geometry:tn,material:Rt,group:ln}=we;if(Rt.side===Je&&Se.layers.test(Y.layers)){let he=Rt.side;Rt.side=un,Rt.needsUpdate=!0,iu(Se,K,Y,tn,Rt,ln),Rt.side=he,Rt.needsUpdate=!0,Nt=!0}}Nt===!0&&(et.updateMultisampleRenderTarget(wt),et.updateRenderTargetMipmap(wt))}N.setRenderTarget(bt,Dt,Bt),N.setClearColor(Jt,Kt),ae!==void 0&&(Y.viewport=ae),N.toneMapping=te}function Fa(b,V,K){let Y=V.isScene===!0?V.overrideMaterial:null;for(let Z=0,wt=b.length;Z<wt;Z++){let Pt=b[Z],{object:bt,geometry:Dt,group:Bt}=Pt,te=Pt.material;te.allowOverride===!0&&Y!==null&&(te=Y),bt.layers.test(K.layers)&&iu(bt,V,K,Dt,te,Bt)}}function iu(b,V,K,Y,Z,wt){H!==null&&Z.isNodeMaterial&&H.setObject(b,Z),b.onBeforeRender(N,V,K,Y,Z,wt),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(N,V,K,Y,b,wt),Z.transparent===!0&&Z.side===Je&&Z.forceSinglePass===!1?(Z.side=un,Z.needsUpdate=!0,N.renderBufferDirect(K,V,Y,Z,b,wt),Z.side=Di,Z.needsUpdate=!0,N.renderBufferDirect(K,V,Y,Z,b,wt),Z.side=Je):N.renderBufferDirect(K,V,Y,Z,b,wt),b.onAfterRender(N,V,K,Y,Z,wt)}function Oa(b,V,K){V.isScene!==!0&&(V=Lt);let Y=X.get(b),Z=w.state.lights,wt=w.state.shadowsArray,Pt=Z.state.version,bt=vt.getParameters(b,Z.state,wt,V,K,w.state.lightProbeGridArray),Dt=vt.getProgramCacheKey(bt),Bt=Y.programs;Y.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?V.environment:null,Y.fog=V.fog;let te=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;Y.envMap=mt.get(b.envMap||Y.environment,te),Y.envMapRotation=Y.environment!==null&&b.envMap===null?V.environmentRotation:b.envMapRotation,Bt===void 0&&(b.addEventListener("dispose",Me),Bt=new Map,Y.programs=Bt);let ae=Bt.get(Dt);if(ae!==void 0){if(Y.currentProgram===ae&&Y.lightsStateVersion===Pt)return ru(b,bt),ae}else bt.uniforms=vt.getUniforms(b),H!==null&&b.isNodeMaterial&&H.build(b,K,bt),b.onBeforeCompile(bt,N),ae=vt.acquireProgram(bt,Dt),Bt.set(Dt,ae),Y.uniforms=bt.uniforms;let Nt=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Nt.clippingPlanes=Ot.uniform),ru(b,bt),Y.needsLights=rp(b),Y.lightsStateVersion=Pt,Y.needsLights&&(Nt.ambientLightColor.value=Z.state.ambient,Nt.lightProbe.value=Z.state.probe,Nt.sunLights.value=Z.state.sun,Nt.sunLightShadows.value=Z.state.sunShadow,Nt.directionalLights.value=Z.state.directional,Nt.directionalLightShadows.value=Z.state.directionalShadow,Nt.spotLights.value=Z.state.spot,Nt.spotLightShadows.value=Z.state.spotShadow,Nt.rectAreaLights.value=Z.state.rectArea,Nt.ltc_1.value=Z.state.rectAreaLTC1,Nt.ltc_2.value=Z.state.rectAreaLTC2,Nt.pointLights.value=Z.state.point,Nt.pointLightShadows.value=Z.state.pointShadow,Nt.hemisphereLights.value=Z.state.hemi,Nt.sunShadowMatrix.value=Z.state.sunShadowMatrix,Nt.sunShadowCascade.value=Z.state.sunShadowCascade,Nt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Nt.spotLightMatrix.value=Z.state.spotLightMatrix,Nt.spotLightMap.value=Z.state.spotLightMap,Nt.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=w.state.lightProbeGridArray.length>0,Y.currentProgram=ae,Y.uniformsList=null,ae}function su(b){if(b.uniformsList===null){let V=b.currentProgram.getUniforms();b.uniformsList=dr.seqWithValue(V.seq,b.uniforms)}return b.uniformsList}function ru(b,V){let K=X.get(b);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function np(b,V){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(V.matrixWorld);for(let K=0,Y=b.length;K<Y;K++){let Z=b[K];if(Z.texture!==null&&Z.boundingBox.containsPoint(y))return Z}return null}function ip(b,V,K,Y,Z){V.isScene!==!0&&(V=Lt),et.resetTextureUnits();let wt=V.fog,Pt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?V.environment:null,bt=rt===null?N.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:oe.workingColorSpace,Dt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Bt=mt.get(Y.envMap||Pt,Dt),te=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ae=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Nt=!!K.morphAttributes.position,me=!!K.morphAttributes.normal,Fe=!!K.morphAttributes.color,we=Vn;Y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(we=N.toneMapping);let Se=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,tn=Se!==void 0?Se.length:0,Rt=X.get(Y),ln=w.state.lights;if(ut===!0&&(dt===!0||b!==ot)){let Ee=b===ot&&Y.id===$;Ot.setState(Y,b,Ee)}let he=!1;Y.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==ln.state.version||Rt.outputColorSpace!==bt||Z.isBatchedMesh&&Rt.batching===!1||!Z.isBatchedMesh&&Rt.batching===!0||Z.isBatchedMesh&&Rt.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Rt.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Rt.instancing===!1||!Z.isInstancedMesh&&Rt.instancing===!0||Z.isSkinnedMesh&&Rt.skinning===!1||!Z.isSkinnedMesh&&Rt.skinning===!0||Z.isInstancedMesh&&Rt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Rt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Rt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Rt.instancingMorph===!1&&Z.morphTexture!==null||Rt.envMap!==Bt||Y.fog===!0&&Rt.fog!==wt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Ot.numPlanes||Rt.numIntersection!==Ot.numIntersection)||Rt.vertexAlphas!==te||Rt.vertexTangents!==ae||Rt.morphTargets!==Nt||Rt.morphNormals!==me||Rt.morphColors!==Fe||Rt.toneMapping!==we||Rt.morphTargetsCount!==tn||!!Rt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(he=!0):(he=!0,Rt.__version=Y.version);let Cn=Rt.currentProgram;he===!0&&(Cn=Oa(Y,V,Z),H&&Y.isNodeMaterial&&H.onUpdateProgram(Y,Cn,Rt));let Yn=!1,mi=!1,Ms=!1,ye=Cn.getUniforms(),De=Rt.uniforms;if(v.useProgram(Cn.program)&&(Yn=!0,mi=!0,Ms=!0),Y.id!==$&&($=Y.id,mi=!0),Rt.needsLights){let Ee=np(w.state.lightProbeGridArray,Z);Rt.lightProbeGrid!==Ee&&(Rt.lightProbeGrid=Ee,mi=!0)}if(Yn||ot!==b){v.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ye.setValue(O,"projectionMatrix",b.projectionMatrix),ye.setValue(O,"viewMatrix",b.matrixWorldInverse);let _i=ye.map.cameraPosition;_i!==void 0&&_i.setValue(O,_t.setFromMatrixPosition(b.matrixWorld)),R.logarithmicDepthBuffer&&ye.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ye.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),ot!==b&&(ot=b,mi=!0,Ms=!0)}if(Rt.needsLights&&(ln.state.sunShadowMap.length>0&&ye.setValue(O,"sunShadowMap",ln.state.sunShadowMap,et),ln.state.directionalShadowMap.length>0&&ye.setValue(O,"directionalShadowMap",ln.state.directionalShadowMap,et),ln.state.spotShadowMap.length>0&&ye.setValue(O,"spotShadowMap",ln.state.spotShadowMap,et),ln.state.pointShadowMap.length>0&&ye.setValue(O,"pointShadowMap",ln.state.pointShadowMap,et)),Z.isSkinnedMesh){ye.setOptional(O,Z,"bindMatrix"),ye.setOptional(O,Z,"bindMatrixInverse");let Ee=Z.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),ye.setValue(O,"boneTexture",Ee.boneTexture,et))}Z.isBatchedMesh&&(ye.setOptional(O,Z,"batchingTexture"),ye.setValue(O,"batchingTexture",Z._matricesTexture,et),ye.setOptional(O,Z,"batchingIdTexture"),ye.setValue(O,"batchingIdTexture",Z._indirectTexture,et),ye.setOptional(O,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ye.setValue(O,"batchingColorTexture",Z._colorsTexture,et));let gi=K.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&M.update(Z,K,Cn),(mi||Rt.receiveShadow!==Z.receiveShadow)&&(Rt.receiveShadow=Z.receiveShadow,ye.setValue(O,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&V.environment!==null&&(De.envMapIntensity.value=V.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=Ev()),mi){if(ye.setValue(O,"toneMappingExposure",N.toneMappingExposure),Rt.needsLights&&sp(De,Ms),wt&&Y.fog===!0&&Ft.refreshFogUniforms(De,wt),Ft.refreshMaterialUniforms(De,Y,it,j,w.state.transmissionRenderTarget[b.id]),Rt.needsLights&&Rt.lightProbeGrid){let Ee=Rt.lightProbeGrid;De.probesSH.value=Ee.texture,De.probesMin.value.copy(Ee.boundingBox.min),De.probesMax.value.copy(Ee.boundingBox.max),De.probesResolution.value.copy(Ee.resolution)}dr.upload(O,su(Rt),De,et)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(dr.upload(O,su(Rt),De,et),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ye.setValue(O,"center",Z.center),ye.setValue(O,"modelViewMatrix",Z.modelViewMatrix),ye.setValue(O,"normalMatrix",Z.normalMatrix),ye.setValue(O,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let Ee=Y.uniformsGroups;for(let _i=0,Ss=Ee.length;_i<Ss;_i++){let ou=Ee[_i];q.update(ou,Cn),q.bind(ou,Cn)}}return Cn}function sp(b,V){b.ambientLightColor.needsUpdate=V,b.lightProbe.needsUpdate=V,b.sunLights.needsUpdate=V,b.sunLightShadows.needsUpdate=V,b.directionalLights.needsUpdate=V,b.directionalLightShadows.needsUpdate=V,b.pointLights.needsUpdate=V,b.pointLightShadows.needsUpdate=V,b.spotLights.needsUpdate=V,b.spotLightShadows.needsUpdate=V,b.rectAreaLights.needsUpdate=V,b.hemisphereLights.needsUpdate=V}function rp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return tt},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(b,V,K){let Y=X.get(b);Y.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),X.get(b.texture).__webglTexture=V,X.get(b.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:K,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,V){let K=X.get(b);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(b,V=0,K=0){rt=b,tt=V,G=K;let Y=null,Z=!1,wt=!1;if(b){let bt=X.get(b);if(bt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(O.FRAMEBUFFER,bt.__webglFramebuffer),lt.copy(b.viewport),It.copy(b.scissor),Ct=b.scissorTest,v.viewport(lt),v.scissor(It),v.setScissorTest(Ct),$=-1;return}else if(bt.__webglFramebuffer===void 0)et.setupRenderTarget(b);else if(bt.__hasExternalTextures)et.rebindTextures(b,X.get(b.texture).__webglTexture,X.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let te=b.depthTexture;if(bt.__boundDepthTexture!==te){if(te!==null&&X.has(te)&&(b.width!==te.image.width||b.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(b)}}let Dt=b.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(wt=!0);let Bt=X.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Bt[V])?Y=Bt[V][K]:Y=Bt[V],Z=!0):b.samples>0&&et.useMultisampledRTT(b)===!1?Y=X.get(b).__webglMultisampledFramebuffer:Array.isArray(Bt)?Y=Bt[K]:Y=Bt,lt.copy(b.viewport),It.copy(b.scissor),Ct=b.scissorTest}else lt.copy(At).multiplyScalar(it).floor(),It.copy(Vt).multiplyScalar(it).floor(),Ct=ce;if(K!==0&&(Y=J),v.bindFramebuffer(O.FRAMEBUFFER,Y)&&v.drawBuffers(b,Y),v.viewport(lt),v.scissor(It),v.setScissorTest(Ct),Z){let bt=X.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,bt.__webglTexture,K)}else if(wt){let bt=V;for(let Dt=0;Dt<b.textures.length;Dt++){let Bt=X.get(b.textures[Dt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Dt,Bt.__webglTexture,K,bt)}}else if(b!==null&&K!==0){let bt=X.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,bt.__webglTexture,K)}$=-1};function au(b){let V=X.get(b);return(V.__readFormat!==b.format||V.__readType!==b.type)&&(V.__readFormat=b.format,V.__readType=b.type,V.__formatReadable=R.textureFormatReadable(b.format),V.__typeReadable=R.textureTypeReadable(b.type)),V}this.readRenderTargetPixels=function(b,V,K,Y,Z,wt,Pt,bt=0){if(!(b&&b.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=X.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(Dt=Dt[Pt]),Dt){v.bindFramebuffer(O.FRAMEBUFFER,Dt);try{let Bt=b.textures[bt],te=Bt.format,ae=Bt.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+bt);let Nt=au(Bt);if(Nt.__formatReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Nt.__typeReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=b.width-Y&&K>=0&&K<=b.height-Z&&O.readPixels(V,K,Y,Z,W.convert(te),W.convert(ae),wt)}finally{let Bt=rt!==null?X.get(rt).__webglFramebuffer:null;v.bindFramebuffer(O.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(b,V,K,Y,Z,wt,Pt,bt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=X.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(Dt=Dt[Pt]),Dt)if(V>=0&&V<=b.width-Y&&K>=0&&K<=b.height-Z){v.bindFramebuffer(O.FRAMEBUFFER,Dt);let Bt=b.textures[bt],te=Bt.format,ae=Bt.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+bt);let Nt=au(Bt);if(Nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let me=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,me),O.bufferData(O.PIXEL_PACK_BUFFER,wt.byteLength,O.STREAM_READ),O.readPixels(V,K,Y,Z,W.convert(te),W.convert(ae),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Fe=rt!==null?X.get(rt).__webglFramebuffer:null;v.bindFramebuffer(O.FRAMEBUFFER,Fe);let we=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await bd(O,we,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,me),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,wt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(me),O.deleteSync(we),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,V=null,K=0){let Y=Math.pow(2,-K),Z=Math.floor(b.image.width*Y),wt=Math.floor(b.image.height*Y),Pt=V!==null?V.x:0,bt=V!==null?V.y:0;et.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,K,0,0,Pt,bt,Z,wt),v.unbindTexture()},this.copyTextureToTexture=function(b,V,K=null,Y=null,Z=0,wt=0){let Pt,bt,Dt,Bt,te,ae,Nt,me,Fe,we=b.isCompressedTexture?b.mipmaps[wt]:b.image;if(K!==null)Pt=K.max.x-K.min.x,bt=K.max.y-K.min.y,Dt=K.isBox3?K.max.z-K.min.z:1,Bt=K.min.x,te=K.min.y,ae=K.isBox3?K.min.z:0;else{let De=Math.pow(2,-Z);Pt=Math.floor(we.width*De),bt=Math.floor(we.height*De),b.isDataArrayTexture?Dt=we.depth:b.isData3DTexture?Dt=Math.floor(we.depth*De):Dt=1,Bt=0,te=0,ae=0}Y!==null?(Nt=Y.x,me=Y.y,Fe=Y.z):(Nt=0,me=0,Fe=0);let Se=W.convert(V.format),tn=W.convert(V.type),Rt;V.isData3DTexture?(et.setTexture3D(V,0),Rt=O.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(et.setTexture2DArray(V,0),Rt=O.TEXTURE_2D_ARRAY):(et.setTexture2D(V,0),Rt=O.TEXTURE_2D),v.activeTexture(O.TEXTURE0),v.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),v.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),v.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);let ln=v.getParameter(O.UNPACK_ROW_LENGTH),he=v.getParameter(O.UNPACK_IMAGE_HEIGHT),Cn=v.getParameter(O.UNPACK_SKIP_PIXELS),Yn=v.getParameter(O.UNPACK_SKIP_ROWS),mi=v.getParameter(O.UNPACK_SKIP_IMAGES);v.pixelStorei(O.UNPACK_ROW_LENGTH,we.width),v.pixelStorei(O.UNPACK_IMAGE_HEIGHT,we.height),v.pixelStorei(O.UNPACK_SKIP_PIXELS,Bt),v.pixelStorei(O.UNPACK_SKIP_ROWS,te),v.pixelStorei(O.UNPACK_SKIP_IMAGES,ae);let Ms=b.isDataArrayTexture||b.isData3DTexture,ye=V.isDataArrayTexture||V.isData3DTexture;if(b.isDepthTexture){let De=X.get(b),gi=X.get(V),Ee=X.get(De.__renderTarget),_i=X.get(gi.__renderTarget);v.bindFramebuffer(O.READ_FRAMEBUFFER,Ee.__webglFramebuffer),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let Ss=0;Ss<Dt;Ss++)Ms&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(b).__webglTexture,Z,ae+Ss),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(V).__webglTexture,wt,Fe+Ss)),O.blitFramebuffer(Bt,te,Pt,bt,Nt,me,Pt,bt,O.DEPTH_BUFFER_BIT,O.NEAREST);v.bindFramebuffer(O.READ_FRAMEBUFFER,null),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Z!==0||b.isRenderTargetTexture||X.has(b)){let De=X.get(b),gi=X.get(V);v.bindFramebuffer(O.READ_FRAMEBUFFER,z),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,k);for(let Ee=0;Ee<Dt;Ee++)Ms?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,De.__webglTexture,Z,ae+Ee):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,De.__webglTexture,Z),ye?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,gi.__webglTexture,wt,Fe+Ee):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,gi.__webglTexture,wt),Z!==0?O.blitFramebuffer(Bt,te,Pt,bt,Nt,me,Pt,bt,O.COLOR_BUFFER_BIT,O.NEAREST):ye?O.copyTexSubImage3D(Rt,wt,Nt,me,Fe+Ee,Bt,te,Pt,bt):O.copyTexSubImage2D(Rt,wt,Nt,me,Bt,te,Pt,bt);v.bindFramebuffer(O.READ_FRAMEBUFFER,null),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ye?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Rt,wt,Nt,me,Fe,Pt,bt,Dt,Se,tn,we.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(Rt,wt,Nt,me,Fe,Pt,bt,Dt,Se,we.data):O.texSubImage3D(Rt,wt,Nt,me,Fe,Pt,bt,Dt,Se,tn,we):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,wt,Nt,me,Pt,bt,Se,tn,we.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,wt,Nt,me,we.width,we.height,Se,we.data):O.texSubImage2D(O.TEXTURE_2D,wt,Nt,me,Pt,bt,Se,tn,we);v.pixelStorei(O.UNPACK_ROW_LENGTH,ln),v.pixelStorei(O.UNPACK_IMAGE_HEIGHT,he),v.pixelStorei(O.UNPACK_SKIP_PIXELS,Cn),v.pixelStorei(O.UNPACK_SKIP_ROWS,Yn),v.pixelStorei(O.UNPACK_SKIP_IMAGES,mi),wt===0&&V.generateMipmaps&&O.generateMipmap(Rt),v.unbindTexture()},this.initRenderTarget=function(b){X.get(b).__webglFramebuffer===void 0&&et.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?et.setTextureCube(b,0):b.isData3DTexture?et.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?et.setTexture2DArray(b,0):et.setTexture2D(b,0),v.unbindTexture()},this.resetState=function(){tt=0,G=0,rt=null,v.reset(),Q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};var cf={type:"change"},Ch={type:"start"},uf={type:"end"},Vl=new Ki,hf=new vn,Tv=Math.cos(70*Tn.DEG2RAD),He=new F,gn=2*Math.PI,ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Rh=1e-6,Hl=class extends ca{constructor(t,e=null){super(t,e),this.state=ve.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ii.ROTATE,MIDDLE:Ii.DOLLY,RIGHT:Ii.PAN},this.touches={ONE:Li.ROTATE,TWO:Li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Mn,this._lastTargetPosition=new F,this._quat=new Mn().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sr,this._sphericalDelta=new sr,this._scale=1,this._panOffset=new F,this._rotateStart=new ft,this._rotateEnd=new ft,this._rotateDelta=new ft,this._panStart=new ft,this._panEnd=new ft,this._panDelta=new ft,this._dollyStart=new ft,this._dollyEnd=new ft,this._dollyDelta=new ft,this._dollyDirection=new F,this._mouse=new ft,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Av.bind(this),this._onPointerDown=wv.bind(this),this._onPointerUp=Rv.bind(this),this._onContextMenu=Uv.bind(this),this._onMouseWheel=Iv.bind(this),this._onKeyDown=Lv.bind(this),this._onTouchStart=Dv.bind(this),this._onTouchMove=Nv.bind(this),this._onMouseDown=Cv.bind(this),this._onMouseMove=Pv.bind(this),this._interceptControlDown=Fv.bind(this),this._interceptControlUp=Ov.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ve.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cf),this.update(),this.state=ve.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;He.copy(e).sub(this.target),He.applyQuaternion(this._quat),this._spherical.setFromVector3(He),this.autoRotate&&this.state===ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=gn:i>Math.PI&&(i-=gn),s<-Math.PI?s+=gn:s>Math.PI&&(s-=gn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(He.setFromSpherical(this._spherical),He.applyQuaternion(this._quatInverse),e.copy(this.target).add(He),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=He.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=He.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Vl.origin.copy(this.object.position),Vl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vl.direction))<Tv?this.object.lookAt(this.target):(hf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vl.intersectPlane(hf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Rh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Rh||this._lastTargetPosition.distanceToSquared(this.target)>Rh?(this.dispatchEvent(cf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?gn/60*this.autoRotateSpeed*t:gn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){He.setFromMatrixColumn(e,0),He.multiplyScalar(-t),this._panOffset.add(He)}_panUp(t,e){this.screenSpacePanning===!0?He.setFromMatrixColumn(e,1):(He.setFromMatrixColumn(e,0),He.crossVectors(this.object.up,He)),He.multiplyScalar(t),this._panOffset.add(He)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;He.copy(s).sub(this.target);let r=He.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/e.clientHeight),this._rotateUp(gn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/e.clientHeight),this._rotateUp(gn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ft,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function wv(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Av(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Rv(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(uf),this.state=ve.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Cv(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ii.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ve.DOLLY;break;case Ii.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ve.ROTATE}break;case Ii.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ve.PAN}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(Ch)}function Pv(n){switch(this.state){case ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Iv(n){this.enabled===!1||this.enableZoom===!1||this.state!==ve.NONE||(n.preventDefault(),this.dispatchEvent(Ch),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(uf))}function Lv(n){this.enabled!==!1&&this._handleKeyDown(n)}function Dv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Li.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ve.TOUCH_ROTATE;break;case Li.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ve.TOUCH_PAN;break;default:this.state=ve.NONE}break;case 2:switch(this.touches.TWO){case Li.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ve.TOUCH_DOLLY_PAN;break;case Li.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ve.TOUCH_DOLLY_ROTATE;break;default:this.state=ve.NONE}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(Ch)}function Nv(n){switch(this._trackPointer(n),this.state){case ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ve.NONE}}function Uv(n){this.enabled!==!1&&n.preventDefault()}function Fv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ov(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ff(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Be,c=0;for(let h=0;h<n.length;++h){let d=n[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<n.length;++u){let f=n[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=n[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=df(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let E=0;E<a[h].length;++E)f.push(a[h][E][u]);let g=df(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function df(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new hn(a,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){let E=h.getComponent(u,g);o.setComponent(u+d,g,E)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function pf({y0:n,y1:t,y2:e,yg:i,imgBase:s,imgQ:r=""}){let a=new $i;a.background=new qt(13624042);let o=new Ye(70,1,.08,220);o.rotation.order="YXZ",a.add(new ns(16773596,14863280,1.55));let l=new is(16774368,1.1);l.position.set(-8,20,-30),a.add(l);let c=new la(16767400,.35);a.add(c);function h(S,C,M){let L=document.createElement("canvas");L.width=S,L.height=C,M(L.getContext("2d"),S,C);let I=new Xr(L);return I.colorSpace=qe,I.wrapS=I.wrapT=Vs,I.anisotropy=4,I}let d=(S,C)=>S+Math.random()*(C-S),u=S=>h(512,512,(C,M,L)=>{for(let W=0;W<8;W++){let Q=d(-14,14);C.fillStyle=`hsl(${S[0]+d(-3,3)},${S[1]}%,${S[2]+Q*.4}%)`,C.fillRect(0,W*L/8,M,L/8),C.strokeStyle="rgba(60,35,20,.10)";for(let ct=0;ct<14;ct++){C.beginPath();let ht=W*L/8+d(2,L/8-2);C.moveTo(0,ht),C.bezierCurveTo(M*.3,ht+d(-3,3),M*.6,ht+d(-3,3),M,ht+d(-2,2)),C.stroke()}C.fillStyle="rgba(50,30,18,.35)",C.fillRect(0,W*L/8,M,1.5);let q=d(.2,.8)*M;C.fillRect(q,W*L/8,1.5,L/8)}}),f=u([30,48,58]),g=u([26,40,50]),E=u([28,30,62]),p=((S,C)=>h(256,256,(M,L,I)=>{M.fillStyle=C,M.fillRect(0,0,L,I);for(let W=0;W<8;W++)for(let Q=0;Q<4;Q++){M.fillStyle=S.replace("L",(44+d(-4,4)).toFixed(0));let q=W%2?32:0;M.fillRect(Q*64+q-64+2,W*32+2,60,28),M.fillRect(Q*64+q+2,W*32+2,60,28)}}))("hsl(150,22%,L%)","#e9e2d2"),T=h(512,512,(S,C,M)=>{S.fillStyle="#cdb48d",S.fillRect(0,0,C,M);for(let L=0;L<70;L++){S.fillStyle=`hsl(${d(28,40)},${d(25,42)}%,${d(62,78)}%)`,S.beginPath();let I=d(0,C),W=d(0,M),Q=d(22,48);for(let q=0;q<7;q++){let ct=q/7*6.283,ht=Q*d(.7,1.1);S.lineTo(I+Math.cos(ct)*ht,W+Math.sin(ct)*ht)}S.closePath(),S.fill()}}),P=h(1024,384,(S,C,M)=>{S.fillStyle="#c8502f",S.fillRect(0,0,C,M),S.fillStyle="#e9774d",S.fillRect(0,M*.62,C,M*.38),S.fillStyle="#f4e6cf";for(let L=0;L<6;L++){let I=80+L*175,W=d(110,220);S.save(),S.translate(I,W);for(let Q=0;Q<9;Q++)S.rotate(.7),S.beginPath(),S.ellipse(48,0,52,9,0,0,6.283),S.fill();S.restore()}S.strokeStyle="#3d6f9e",S.lineWidth=18,S.beginPath(),S.moveTo(0,M*.8);for(let L=0;L<=C;L+=40)S.lineTo(L,M*.8+Math.sin(L/70)*22);S.stroke(),S.strokeStyle="#f4e6cf",S.lineWidth=6,S.beginPath(),S.moveTo(0,M*.9);for(let L=0;L<=C;L+=40)S.lineTo(L,M*.9+Math.sin(L/70+1)*14);S.stroke()});P.wrapS=P.wrapT=yn;let y=h(256,64,(S,C,M)=>{for(let L=0;L<C;L++){let I=Math.sin(L/5)*.5+.5;S.fillStyle=`hsl(40,${55+I*15}%,${38+I*22}%)`,S.fillRect(L,0,1,M)}}),A=h(128,128,(S,C,M)=>{S.fillStyle="#6b3f22",S.fillRect(0,0,C,M),S.fillStyle="#b57a45";for(let L=0;L<8;L++)for(let I=0;I<8;I++)(I+L)%2?S.fillRect(I*16+1,L*16+3,14,10):S.fillRect(I*16+3,L*16+1,10,14)}),w=h(128,128,(S,C,M)=>{let L=S.createRadialGradient(64,64,0,64,64,64);L.addColorStop(0,"rgba(255,255,255,1)"),L.addColorStop(.45,"rgba(255,255,255,.35)"),L.addColorStop(1,"rgba(255,255,255,0)"),S.fillStyle=L,S.fillRect(0,0,C,M)});w.colorSpace=Wn;let D=h(64,256,(S,C,M)=>{let L=S.createLinearGradient(0,0,0,M);L.addColorStop(0,"#9cc6dc"),L.addColorStop(.55,"#e6f1f3"),L.addColorStop(.62,"#7fb3c2"),L.addColorStop(1,"#d9c7a3"),S.fillStyle=L,S.fillRect(0,0,C,M)});D.wrapS=D.wrapT=yn;let _=(S,C={})=>new sa({color:S,...C}),x={wall:_(16052197),wall2:_(15458768),ceil:_(15985888,{emissive:3813672}),floor:_(16777215,{map:f}),floor2:_(16777215,{map:g}),deck:_(16777215,{map:E}),pavers:_(16777215,{map:T}),timber:_(10119744),oak:_(12618325),dark:_(3876377),brass:new es({color:13146954,shininess:80,specular:9071152}),sage:_(16777215,{map:p}),marble:new es({color:4156245,shininess:60,specular:4478276}),leather:_(9063210),tan:_(12157518),weave:_(16777215,{map:A}),teal:_(6196362),olive:_(7303488),terra:_(11818799),cream:_(15984335),stone:_(14866112),black:_(2760988),red:_(12728875,{side:Je,emissive:3804168}),yellow:_(15315516,{side:Je,emissive:3811848}),white:_(16513266,{side:Je}),orange:_(14246443),leaf:_(6257221,{flatShading:!0}),leaf2:_(8161871,{flatShading:!0}),pot:_(14271396),mural:_(16777215,{map:P}),curt:_(16777215,{map:y}),bottle:_(6126154),bottle2:_(10115626),bottle3:_(14272928),shade:new In({color:16764810}),bulb:new In({color:16773580}),sky:new In({map:D,toneMapped:!1}),glass:new es({color:13625066,transparent:!0,opacity:.18,shininess:90,depthWrite:!1,side:Je}),pool:new In({map:w,color:16758886,transparent:!0,opacity:.55,blending:rs,depthWrite:!1,toneMapped:!1}),daypool:new In({map:w,color:16773852,transparent:!0,opacity:.35,blending:rs,depthWrite:!1,toneMapped:!1}),lawn:_(10135398),sea:_(6266800),sand:_(15127469),road:_(9273975)},N=new Map,B=(S,C)=>{N.has(C)||N.set(C,[]),N.get(C).push(S.index?S.toNonIndexed():S)},H={0:[],1:[],2:[]},J={0:[],1:[],2:[]},z=(S,C,M,L,I)=>H[S].push([Math.min(C,L),Math.min(M,I),Math.max(C,L),Math.max(M,I)]);function k(S,C,M,L,I,W,Q,q=0,ct){let ht=new ze(S,C,M);if(ct){let Et=ht.attributes.uv;for(let Tt=0;Tt<Et.count;Tt++)Et.setXY(Tt,Et.getX(Tt)*ct[0],Et.getY(Tt)*ct[1])}return q&&ht.rotateY(q),ht.translate(L,I+C/2,W),B(ht,Q),ht}let tt=(S,C,M,L,I,W,Q,q,ct=0)=>{k(C,M,L,I,W,Q,q),z(S,I-C/2-ct,Q-L/2-ct,I+C/2+ct,Q+L/2+ct)};function G(S,C,M,L,I,W,Q,q=10){let ct=new Qn(S,C,M,q);return ct.translate(L,I+M/2,W),B(ct,Q),ct}function rt(S,C,M,L,I,W,Q=2.4,q=-Math.PI/2,ct=0){let ht=new Ln(S,C),Et=ht.attributes.uv;for(let Tt=0;Tt<Et.count;Tt++)Et.setXY(Tt,Et.getX(Tt)*S/Q,Et.getY(Tt)*C/Q);return ht.rotateX(q),ct&&ht.rotateY(ct),ht.translate(M,L,I),B(ht,W),ht}function $(S,C,M,L,I,W,Q,q=x.wall,ct=.22){let ht=Math.abs(L-C)||ct,Et=Math.abs(I-M)||ct;k(ht,Q,Et,(C+L)/2,W,(M+I)/2,q),Q>2&&J[S].push([Math.min(C,L)-.11,Math.min(M,I)-.11,Math.max(C,L)+.11,Math.max(M,I)+.11]),z(S,Math.min(C,L)-(C===L?ct/2:0),Math.min(M,I)-(M===I?ct/2:0),Math.max(C,L)+(C===L?ct/2:0),Math.max(M,I)+(M===I?ct/2:0))}function ot(S,C,M,L,I,W,Q,q,ct=x.wall){let ht=L;[...W,[I,I]].forEach(([Et,Tt])=>{Et>ht&&(C==="x"?$(S,ht,M,Et,M,Q,q,ct):$(S,M,ht,M,Et,Q,q,ct)),Tt>Et&&Et<I&&(C==="x"?k(Tt-Et,q-2.4,.22,(Et+Tt)/2,Q+2.4,M,ct):k(.22,q-2.4,Tt-Et,M,Q+2.4,(Et+Tt)/2,ct)),ht=Tt})}function lt(S,C,M,L,I,W){let q={s:0,n:Math.PI,e:Math.PI/2,w:-Math.PI/2}[W],ct=W==="e"?.12:W==="w"?-.12:0,ht=W==="s"?.12:W==="n"?-.12:0,Et=new Ln(L,I);Et.rotateY(q),Et.translate(S+ct,C+I/2,M+ht),B(Et,x.sky);let Tt=(Ue,Rn,Qe,Mr)=>{let Sr=new ze(Ue,Rn,.08);Sr.rotateY(q);let br=new F(Qe,0,0).applyAxisAngle(new F(0,1,0),q);Sr.translate(S+ct*1.3+br.x,Mr,M+ht*1.3+br.z),B(Sr,x.white)};Tt(L+.16,.08,0,C),Tt(L+.16,.08,0,C+I),Tt(.08,I,-L/2,C+I/2),Tt(.08,I,L/2,C+I/2),Tt(.05,I,0,C+I/2),Tt(L,.05,0,C+I*.62);let pe=new Ln(L*1.6,2.6);pe.rotateX(-Math.PI/2),pe.rotateY(q);let Me=new F(0,0,1.4).applyAxisAngle(new F(0,1,0),q);pe.translate(S+Me.x,Ct(C)+.02,M+Me.z),B(pe,x.daypool)}let It=n,Ct=S=>S<t-.2?S<n-.2?i:n:S<e-.2?t:e;function Jt(S,C,M,L,I,W=0){if(G(.006,.006,M-L,S,L,C,x.black,4),W===0){let Q=new Ai(.22,12,6,0,6.283,0,Math.PI/2);Q.translate(S,L,C),B(Q,x.shade)}else if(W===1){G(.05,.2,.26,S,L-.26,C,x.brass,12);let Q=new Ai(.07,8,6);Q.translate(S,L-.3,C),B(Q,x.bulb)}else{let Q=new Ai(.16,10,8);Q.translate(S,L-.16,C),B(Q,x.shade)}rt(2.6,2.6,S,I+.015,C,x.pool,2.6)}function Kt(S,C,M,L,I,W="weave"){let Q=new Ke,q=W==="weave"?x.weave:W==="red"?x.orange:x.oak,ct=[[.44,.05,.44,0,.45,0,q],[.44,.42,.05,0,.5,.2,q]];[[-.19,-.19],[.19,-.19],[-.19,.19],[.19,.19]].forEach(([ht,Et])=>ct.push([.04,.45,.04,ht,0,Et,W==="red"?x.orange:x.timber])),ct.forEach(([ht,Et,Tt,pe,Me,Ue,Rn])=>{let Qe=new ze(ht,Et,Tt);Qe.translate(pe,Me+Et/2,Ue),Qe.rotateY(L),Qe.translate(C,I,M),B(Qe,Rn)})}function ie(S,C,M,L,I=.45,W=4,Q="weave",q=.74){G(I,I,.04,C,L+q-.04,M,x.oak,16),G(.04,.04,q-.04,C,L,M,x.dark,6),G(.28,.3,.03,C,L,M,x.dark,12),z(S,C-I,M-I,C+I,M+I);for(let ct=0;ct<W;ct++){let ht=ct/W*6.283+.4;Kt(S,C+Math.sin(ht)*(I+.32),M+Math.cos(ht)*(I+.32),ht+Math.PI,L,Q)}}function j(S,C,M,L=.75,I=x.dark){G(.19,.19,.06,S,M+L-.06,C,I,12),[[-.11,-.11],[.11,-.11],[-.11,.11],[.11,.11]].forEach(([W,Q])=>k(.035,L-.06,.035,S+W,M,C+Q,x.timber)),G(.13,.13,.02,S,M+.28,C,x.brass,8)}function it(S,C,M,L,I=1){G(.28*I,.22*I,.5*I,C,L,M,x.pot,10);let W=new ts(.55*I,0);W.scale(1,1.35,1),W.translate(C,L+1.05*I,M),B(W,Math.random()<.5?x.leaf:x.leaf2),z(S,C-.3*I,M-.3*I,C+.3*I,M+.3*I)}function xt(S,C,M,L,I,W,Q,q=x.teal){let ct=Math.abs(L-C),ht=Math.abs(I-M),Et=(C+L)/2,Tt=(M+I)/2;k(ct,.45,ht,Et,W,Tt,x.timber);let pe=.06;k(ct-pe,.1,ht-pe,Et,W+.45,Tt,q);let Me=Q==="s"||Q==="n"?[ct,.18]:[.18,ht],Ue={n:[0,ht/2-.09],s:[0,-ht/2+.09],e:[-ct/2+.09,0],w:[ct/2-.09,0]}[Q];k(Me[0],.55,Me[1],Et+Ue[0],W+.5,Tt+Ue[1],q),z(S,Math.min(C,L),Math.min(M,I),Math.max(C,L),Math.max(M,I))}function kt(S,C,M,L,I,W,Q=.74,q=x.oak){k(I,.05,W,C,L+Q-.05,M,q),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([ct,ht])=>k(.06,Q-.05,.06,C+ct*(I/2-.08),L,M+ht*(W/2-.08),x.dark)),z(S,C-I/2,M-W/2,C+I/2,M+W/2)}function At(S,C,M,L,I=1.5){G(.03,.03,2.3,S,M,C,x.white,6);let W=new wi(I,.45,10,1,!0);W.translate(S,M+2.45,C),B(W,L),G(.25,.3,.08,S,M,C,x.stone,10)}function Vt(S,C,M,L,I){for(let W=0;W<I;W++){let Q=S+(C-S)*(W+.5)/I,q=[x.bottle,x.bottle2,x.bottle3][W%3];G(.035,.035,.22,Q,L,M,q,6),G(.012,.02,.07,Q,L+.22,M,q,5)}}function ce(S,C,M,L,I){k(C-S+.1,.06,.08,(S+C)/2,L+.42,M,x.brass);for(let W=0;W<I;W++){let Q=S+(C-S)*W/(I-1);G(.025,.025,.42,Q,L,M,x.brass,6),k(.03,.16,.05,Q,L+.5,M,W%3?x.dark:x.cream)}}function st(S,C,M,L,I,W,Q){let q=new Ln(L,I),ct=new aa().load(s+Q+".jpg"+r,pe=>{pe.colorSpace=qe}),ht=new xe(q,new In({map:ct,toneMapped:!1}));ht.position.set(S,C,M),ht.rotation.y=W,a.add(ht);let Et=new ze(L+.12,I+.12,.04);Et.rotateY(W);let Tt=new F(0,0,-.03).applyAxisAngle(new F(0,1,0),W);Et.translate(S+Tt.x,C+Tt.y,M+Tt.z),B(Et,x.dark)}rt(160,120,15,i-.06,-40,x.sand,6),rt(160,20,15,i-.4,-14,x.road,6),rt(400,200,15,i-1.5,-160,x.sea,40);for(let S=0;S<9;S++){let C=-14+S*7,M=-17-d(0,6);G(.2,.35,9,C,i,M,x.dark,6);for(let L=0;L<5;L++){let I=new wi(2.4-L*.4,1.4,7);I.translate(C,i+4+L*1.3,M),B(I,x.leaf)}}rt(14,7,7.2,i,-3.5,x.pavers,3),rt(14,7,26.8,i,-3.5,x.pavers,3),k(14.2,n-i,.3,7.1,i,-.15,x.wall),k(14.2,n-i,.3,26.9,i,-.15,x.wall),$(0,0,-7,14.2,-7,i,1,x.wall),$(0,19.8,-7,34,-7,i,1,x.wall),$(0,0,-7,0,0,i,1,x.wall),$(0,34,-7,34,0,i,1,x.wall),$(0,14.2,-4.6,14.2,0,i,1,x.wall),$(0,19.8,-4.6,19.8,0,i,1,x.wall);for(let S of[0,19.8])[[2.2,-5],[5.8,-5],[9.6,-5],[2.2,-2],[5.8,-2],[9.6,-2]].forEach(([C,M],L)=>{kt(0,S+C+.2,M,i,2.2,.8),[-.75,0,.75].forEach(I=>{j(S+C+.2+I,M-.75,i,.46,x.orange),j(S+C+.2+I,M+.75,i,.46,x.orange)}),L<3&&At(S+C+.2,M+1.5,i,L%2?x.white:x.yellow)});it(0,.9,-6.2,i,1.1),it(0,33.1,-6.2,i,1.1),it(0,13.4,-6.2,i,.9),it(0,20.6,-6.2,i,.9);for(let S=0;S<8;S++)k(5.6,(n-i)*(S+1)/8,.5,17,i,-4.75+S*.5,x.stone);k(5.6,.02,1,17,n-.02,-.5,x.stone),[14.35,19.65].forEach(S=>G(.025,.025,.95,S,n,-.2,x.black,6));let ut=t-n-.3;rt(31,21,15.5,n,10.5,x.floor,2.4),rt(31,21,15.5,n+ut,10.5,x.ceil,4,Math.PI/2),$(0,0,0,0,21,n,ut),$(0,31,0,31,21,n,ut),$(0,0,21,31,21,n,ut),[[0,14],[17.2,31]].forEach(([S,C])=>{k(C-S,ut-.2,.04,(S+C)/2,n+.1,0,x.glass),z(0,S,-.1,C,.1);for(let M=S;M<=C+.01;M+=2)k(.1,ut,.12,M,n,0,x.white);k(C-S,.12,.14,(S+C)/2,n,0,x.white),k(C-S,.14,.14,(S+C)/2,n+2.5,0,x.white)}),k(3.2,.5,.3,15.6,n+2.6,0,x.wall),k(.25,2.6,.3,14.1,n,0,x.white),k(.25,2.6,.3,17.1,n,0,x.white),ot(0,"z",14,0,4.1,[[1.2,3.2]],n,ut),ot(0,"z",17.2,0,4.1,[[1.2,3.2]],n,ut),ot(0,"x",4.1,0,31,[[2.6,5.2],[8.4,11],[14.6,16.6],[20.4,23],[26,28.6]],n,ut,x.wall2),k(9,ut,11.5,15,n,15.25,x.wall2),z(0,10.5,9.5,19.5,21),[[11.5,"TOILETS"],[17.5,"KITCHEN"]].forEach(([S])=>{k(1,2.2,.06,S,n,9.47,x.dark)}),[[3,2],[7,2],[11,2.2],[20.5,2],[24.5,2],[28.5,2.2]].forEach(([S,C])=>{ie(0,S,C,n,.4,3),Jt(S,C,n+ut,n+2.7,n,2)}),it(0,.7,.8,n,.9),it(0,13.2,3.3,n,.8),it(0,30.3,.8,n,.9),it(0,18,3.3,n,.8);let dt=n,gt=(S,C,M,L)=>{tt(0,M,1,L,S,dt,C,x.sage),k(M+.12,.06,L+.12,S,dt+1,C,x.oak)};gt(7,9.3,5,.7),gt(4.85,12.3,.7,5.3),gt(9.15,12.3,.7,5.3),G(.025,.025,5,7,dt+.18,8.85,x.brass);{let S=new Qn(.025,.025,5,6);S.rotateZ(Math.PI/2),S.translate(7,dt+.2,8.85),B(S,x.brass)}ce(5.4,8.6,9.4,dt+1.06,8),tt(0,1.6,1.4,.5,7,dt,12.6,x.timber),k(1.6,1,.5,7,dt+1.4,12.6,x.dark),Vt(6.3,7.7,12.6,dt+1.42,9),Vt(6.3,7.7,12.6,dt+1.92,9);for(let S=0;S<6;S++)j(4.9+S*.85,8.4,dt);for(let S=0;S<5;S++)j(4.05,10.2+S*.95,dt),j(9.95,10.2+S*.95,dt);for(let S=0;S<4;S++)Jt(5.3+S*1.15,9.3,n+ut,n+2.35,n+1.06,1);xt(0,.12,5.2,.72,19.5,n,"e",x.teal);for(let S=6.2;S<19;S+=2.4)kt(0,1.45,S,n,.75,1.1),Kt(0,2.25,S-.3,-Math.PI/2,n,"oak"),Kt(0,2.25,S+.3,-Math.PI/2,n,"oak"),Jt(1.45,S,n+ut,n+2.3,n+.74,0);xt(0,3.2,20.3,10.3,20.88,n,"n",x.leather);for(let S=4;S<10;S+=2)kt(0,S,19.5,n,.9,.7),Jt(S,19.5,n+ut,n+2.3,n+.74,0);ie(0,4.4,17,n,.45,4,"oak"),ie(0,8.2,16.6,n,.45,4,"oak");for(let S=7;S<20;S+=3.2)lt(0,n+.9,S,1.4,1.8,"e");st(.13,n+1.7,13.6,1.6,.75,Math.PI/2,"facade");let _t=28.6,zt=6.2,Lt=3.2;for(let S=0;S<10;S++){let C=Math.PI*.5+S/10*Math.PI*.55,M=C+Math.PI*.55/10,L=(C+M)/2,I=_t+Math.cos(L)*Lt,W=zt+Math.sin(L)*Lt,Q=Lt*(M-C)+.02,q=new ze(Q,1,.65);q.rotateY(-L+Math.PI/2),q.translate(I,n+.5,W),B(q,x.marble);let ct=new ze(Q+.02,.05,.8);ct.rotateY(-L+Math.PI/2),ct.translate(I,n+1.03,W),B(ct,x.oak),z(0,I-.4,W-.4,I+.4,W+.4),S%2===0&&j(_t+Math.cos(L)*(Lt+.65),zt+Math.sin(L)*(Lt+.65),n,.75,x.tan)}k(.5,1.6,5,30.7,n,6.6,x.timber),Vt(30.6,30.6,6,n+1.6,1);for(let S=0;S<12;S++)G(.035,.035,.24,30.6,n+1,4.6+S*.33,[x.bottle,x.bottle2,x.bottle3][S%3],6);z(0,28.4,4.2,31,9);for(let S=0;S<5;S++){let C=Math.PI*.55+S*.11*Math.PI;Jt(_t+Math.cos(C)*Lt,zt+Math.sin(C)*Lt,n+ut,n+2.3,n+1.05,2)}[[21.5,12],[24.5,12],[27.5,12],[21.5,15],[24.5,15],[27.5,15],[21.5,18],[24.5,18]].forEach(([S,C])=>{ie(0,S,C,n,.5,4,"weave"),Jt(S,C,n+ut,n+2.25,n+.74,1)}),xt(0,30.28,10.4,30.88,20.4,n,"w",x.leather);for(let S=11.4;S<20;S+=2.2)kt(0,29.6,S,n,.7,.9),Kt(0,28.85,S,Math.PI/2,n,"weave");xt(0,20,20.3,27.5,20.88,n,"n",x.leather);for(let S=7;S<20;S+=3.2)lt(31,n+.9,S,1.4,1.8,"w");st(30.87,n+1.7,14.5,1.9,.55,-Math.PI/2,"diners"),st(19.6,n+1.7,12,1.4,.7,Math.PI/2,"table"),it(0,20.1,9.9,n,.8),st(13.86,n+1.8,2.2,.8,1,-Math.PI/2,"courtyard");let Ut=e-t-.3;rt(18.5,11.8,17.75,t,10,x.floor2,2.4),rt(18.5,11.8,17.75,t+Ut,10,x.ceil,4,Math.PI/2),ot(1,"x",4.1,8.5,27,[[10.5,12.5],[15,17],[21.5,23.5]],t,Ut,x.wall),$(1,8.5,15.9,27,15.9,t,Ut),$(1,8.5,4.1,8.5,15.9,t,Ut),$(1,27,4.1,27,15.9,t,Ut),[[10.5,12.5],[15,17],[21.5,23.5]].forEach(([S,C])=>{for(let M=S;M<=C+.01;M+=.5)k(.05,2.4,.06,M,t,4.1,x.white)}),tt(1,3.6,.35,6,10.4,t,10,x.timber),rt(5.6,Ut-.2,8.63,t+Ut/2,10,x.curt,1.2,0,Math.PI/2);let Ht=t+.35;G(.28,.28,.5,10.6,Ht,10.4,x.white,14),G(.18,.18,.25,10.1,Ht+.45,9.8,x.cream,12),G(.18,.18,.25,10.1,Ht+.45,11,x.cream,12),G(.2,.2,.03,9.9,Ht+.95,9.5,x.brass,12),G(.01,.01,.95,9.9,Ht,9.5,x.black,4),k(.5,.6,.35,9.6,Ht,12.1,x.black),k(.5,.6,.35,9.6,Ht,7.9,x.black);for(let S=0;S<3;S++)Jt(10.4,8+S*2,t+Ut,t+2.4,t+.35,1);rt(8.5,Ut-.3,16,t+.2+(Ut-.3)/2,15.77,x.mural,8.5,0,Math.PI),tt(1,.7,1,6,20.5,t,9.2,x.timber),k(.85,.06,6.15,20.5,t+1,9.2,x.oak),k(.66,1,5.9,20.5,t,9.2,x.teal),z(1,20.1,6.2,20.9,12.2),ce(20.65,20.65,6.6,t+1.06,2),ce(20.65,20.65,11.6,t+1.06,2),k(.5,1.5,6,26.7,t,9.2,x.timber);for(let S=0;S<14;S++)G(.035,.035,.24,26.7,t+1.5,6.6+S*.38,[x.bottle,x.bottle2,x.bottle3][S%3],6);for(let S=0;S<6;S++)j(19.75,6.8+S*.95,t);for(let S=0;S<4;S++)Jt(20.5,6.9+S*1.55,t+Ut,t+2.1,t+1.05,0);rt(4,3,15.5,t+.01,13.3,x.terra,4),[[14.2,12.6,Math.PI*.75],[16.8,12.6,-Math.PI*.75],[14.2,14.4,Math.PI*.25],[16.8,14.4,-Math.PI*.25]].forEach(([S,C,M])=>{k(.75,.4,.75,S,t,C,x.oak,M),k(.6,.14,.6,S,t+.4,C,x.cream,M);let L=new ze(.7,.5,.12);L.translate(0,.5+.25,.3),L.rotateY(M),L.translate(S,t,C),B(L,x.cream),z(1,S-.4,C-.4,S+.4,C+.4)}),G(.45,.45,.38,15.5,t,13.5,x.oak,14),z(1,15,13,16,14),it(1,12.3,15.2,t,1),it(1,26.2,15.2,t,1),it(1,9.2,14.9,t,.9),[[14,7],[17,7],[14,9.8],[17,9.8],[23.6,7],[23.6,10],[23.6,13]].forEach(([S,C])=>{G(.35,.35,.04,S,t+1.02,C,x.oak,14),G(.04,.04,1.02,S,t,C,x.dark,6),G(.25,.28,.03,S,t,C,x.dark,10),z(1,S-.35,C-.35,S+.35,C+.35),j(S+.62,C,t,.75),j(S-.62,C,t,.75),Jt(S,C,t+Ut,t+2.2,t+1.04,2)}),st(26.87,t+1.65,13.6,1.9,.9,-Math.PI/2,"bombies");for(let S=7;S<15;S+=4)lt(27,t+.9,S,1.2,1.6,"w");rt(30,3.6,15.2,t+.02,2.3,x.deck,2.4),rt(31,4,15.2,t+3.05,2.2,x.ceil,4,Math.PI/2),k(30,1.1,.25,15.2,t,.5,x.wall),z(1,.2,.3,30.2,.62),k(30,1.2,.03,15.2,t+1.1,.48,x.glass);for(let S=0;S<9;S++)k(.4,3.05,.4,.4+S*3.7,t,.5,x.wall);$(1,.2,.5,.2,4.1,t,3.05),$(1,30.2,.5,30.2,4.1,t,3.05),$(1,.2,4.1,8.5,4.1,t,3.05),$(1,27,4.1,30.2,4.1,t,3.05);for(let S=0;S<8;S++){let C=2.25+S*3.7;if(S%2===0){k(2.2,.08,.5,C,t+1.02,1.05,x.white),k(2.2,1.02,.3,C,t,1,x.white);for(let M=-1;M<=1;M++)j(C+M*.7,1.75,t,.75,x.oak)}else G(.42,.42,.04,C,t+1.02,2.2,x.white,14),G(.04,.04,1.02,C,t,2.2,x.white,6),z(1,C-.42,1.78,C+.42,2.62),j(C-.7,2.2,t,.75,x.oak),j(C+.7,2.2,t,.75,x.oak),j(C,2.95,t,.75,x.oak)}for(let S=1;S<8;S+=2){let C=2.25+S*3.7;G(.03,.03,1.4,C,t+1.06,2.2,x.white,6);let M=new Ai(1.15,12,4,0,6.283,0,Math.PI/2.6);M.translate(C,t+2.05,2.2),B(M,x.red)}it(1,.8,3.5,t,.8),it(1,29.6,3.5,t,.8),st(8.38,t+1.7,3,.6,.75,-Math.PI/2,"terrace");let O=2.7;rt(22,11,14,e,10.7,x.floor,2.4),rt(22,11,14,e+O,10.7,x.wall2,4,Math.PI/2),$(2,3,5.2,25,5.2,e,O,x.wall2),$(2,3,16.2,25,16.2,e,O,x.wall2),$(2,3,5.2,3,16.2,e,O,x.wall2),$(2,25,5.2,25,16.2,e,O,x.wall2);for(let S=4;S<25;S+=1.8)k(.14,.2,11,S,e+O-.2,10.7,x.timber);k(12.3,2.3,.04,9.65,e,8.3,x.glass),z(2,3.5,8.1,15.8,8.5),k(.08,2.3,.08,15.8,e,8.3,x.dark),k(12.3,.08,.08,9.65,e+2.3,8.3,x.dark),k(3,.85,.8,8,e,6.6,x.dark),k(2.6,.05,.6,8,e+.85,6.6,x.teal),k(.5,.5,.4,6,e+.85,6,x.black),k(.5,.5,.4,10,e+.85,6,x.black),tt(2,8,1.05,.75,20,e,9.2,x.oak),k(8.1,.05,.9,20,e+1.05,9.2,x.marble),k(8,1.6,.4,20,e,5.5,x.timber),Vt(16.5,23.5,5.5,e+1.6,22);for(let S=0;S<8;S++)j(16.6+S*.95,10.05,e);for(let S=0;S<5;S++)Jt(17+S*1.5,9.2,e+O,e+1.95,e+1.08,1);rt(5,3.5,8,e+.01,13,x.olive,5),xt(2,4.5,15.4,11.5,16.05,e,"n",x.cream),xt(2,3.15,10.5,3.75,15.4,e,"e",x.cream),G(.5,.5,.38,7,e,13.4,x.oak,14),G(.5,.5,.38,9.4,e,13.4,x.oak,14),z(2,6.5,12.9,9.9,13.9),[[13.5,12.5],[16,13.5],[19,12.5],[22,13.5]].forEach(([S,C])=>ie(2,S,C,e,.42,3,"oak"));for(let S=6;S<24;S+=4)Jt(S,13,e+O,e+2,e,2);lt(14,e+.7,16.2,2.4,1.4,"n"),lt(19,e+.7,16.2,2.4,1.4,"n"),lt(25,e+.7,12,1.6,1.4,"w"),it(2,24.3,15.5,e,.8);for(let[S,C]of N){let M=ff(C,!1),L=new xe(M,S);L.matrixAutoUpdate=!1,(S.blending===rs||S.transparent)&&(L.renderOrder=2),a.add(L)}let le={bar:{n:"Public bar",lv:0,p:[2.6,6.2],look:[7,10.5],cap:"Ground floor \xB7 capacity 800",d:"The main front bar from the plan: an island bar with sage tiled front, timber top, brass foot rail and taps, stools all round, teal banquettes on the west wall and warm pendants.",img:"facade"},dining:{n:"Dining room (bistro)",lv:0,p:[21,17.5],look:[27,8],cap:"Ground floor \xB7 within the 800 ground-floor capacity",d:"The Harbord Dining Room: the curved green marble bar in the north-east corner, round timber tables and woven leather chairs, leather banquettes.",img:"diners"},garden:{n:"Beer garden",lv:0,p:[6.5,-6.3],look:[9,0],cap:"RL 14.62 \xB7 ground-floor licence 800, up to 275 in courtyards",d:"Sandstone paving, long timber tables with orange stools, yellow and white umbrellas, either side of the porch stair up to the front door.",img:"umbrellas"},function:{n:"Level 1 function space (Bombies)",lv:1,p:[25,14.6],look:[11,9.5],cap:"Level 1 \xB7 capacity 320",d:"The low-level performance space: timber stage with gold curtain, terracotta palm mural, bar on the east wall, retro timber armchairs and high tables.",img:"bombies"},terrace:{n:"Bombies terrace",lv:1,p:[1.4,2.6],look:[16,2],cap:"Level 1 verandah \xB7 70 seated / 110 standing",d:"The 147 m\xB2 verandah balcony behind the heritage balustrade: glass acoustic panels, red umbrellas, white rendered bars and timber stools.",img:"terrace"},attic:{n:"Attic studio & bar",lv:2,p:[5,11],look:[20,9],cap:"Attic \xB7 capacity 100",d:"Under the raised roof: a marble-topped bar, lounge, audio desk and glass-walled recording studio, reached by the new lift.",img:"bombies"}},Qt=[n,t,e];function R(S,C,M){return S!==0?Qt[S]:M<0?C>14.2&&C<19.8&&M>-5?i+(n-i)*Tn.clamp((M+4.8)/4,0,1):i:n}let v=[[-.2,-7.2,34.2,21.2],[0,0,31,16.2],[3,5,25,16.4]],U={x:15.6,z:1.6,lv:0,yaw:Math.PI,pitch:0,eye:1.62},X=.28;function et(S,C,M){for(let I=0;I<2;I++)for(let[W,Q,q,ct]of H[S]){let ht=Tn.clamp(C,W,q),Et=Tn.clamp(M,Q,ct),Tt=C-ht,pe=M-Et,Me=Tt*Tt+pe*pe;if(Me<X*X)if(Me>1e-8){let Ue=Math.sqrt(Me);C=ht+Tt/Ue*X,M=Et+pe/Ue*X}else{let Ue=[C-W,q-C,M-Q,ct-M],Rn=Math.min(...Ue);Rn===Ue[0]?C=W-X:Rn===Ue[1]?C=q+X:Rn===Ue[2]?M=Q-X:M=ct+X}}if(S===0){let I=U.z<0,W=M<0;I!==W&&!(C>14.4&&C<17.1)&&(M=U.z)}let L=v[S];return[Tn.clamp(C,L[0]+X,L[2]-X),Tn.clamp(M,L[1]+X,L[3]-X)]}let mt={f:0,s:0,run:!1},pt=null;function nt(S){if(pt){let M=Math.min(1,(performance.now()-pt.t0)/pt.dur),L=M<.5?2*M*M:1-Math.pow(-2*M+2,2)/2;U.x=pt.a[0]+(pt.b[0]-pt.a[0])*L,U.z=pt.a[1]+(pt.b[1]-pt.a[1])*L;let I=pt.yb-pt.ya;I=Math.atan2(Math.sin(I),Math.cos(I)),U.yaw=pt.ya+I*L,U.pitch=pt.pa*(1-L),M>=1&&(pt=null)}else if(mt.f||mt.s){let M=(mt.run?4.2:2.4)*S,L=-Math.sin(U.yaw),I=-Math.cos(U.yaw),W=Math.cos(U.yaw),Q=-Math.sin(U.yaw),q=et(U.lv,U.x+(L*mt.f+W*mt.s)*M,U.z+(I*mt.f+Q*mt.s)*M);U.x=q[0],U.z=q[1]}let C=R(U.lv,U.x,U.z);It+=(C-It)*Math.min(1,S*10),o.position.set(U.x,It+U.eye,U.z),o.rotation.set(U.pitch,U.yaw,0)}function at(S,C){return Math.atan2(-(C[0]-S[0]),-(C[1]-S[1]))}function vt(S){let C=le[S];U.lv=C.lv,U.x=C.p[0],U.z=C.p[1],U.yaw=at(C.p,C.look),U.pitch=-.05,It=R(U.lv,U.x,U.z)}function Ft(S,C){let M=le[S];if(M.lv!==U.lv){C(()=>vt(S));return}pt={a:[U.x,U.z],b:M.p,ya:U.yaw,yb:at(M.p,M.look),pa:U.pitch,t0:performance.now(),dur:1300}}function Mt(){U.lv=0,U.x=15.6,U.z=5.4,U.yaw=at([15.6,5.4],[7,10.5]),U.pitch=-.04,It=n}function yt(S,C,M,L,I){for(let[W,Q,q,ct]of J[S]){let ht=0,Et=1,Tt=L-C,pe=I-M,Me=!0;for(let[Ue,Rn]of[[-Tt,C-W],[Tt,q-C],[-pe,M-Q],[pe,ct-M]])if(Ue===0){if(Rn<0){Me=!1;break}}else{let Qe=Rn/Ue;if(Ue<0){if(Qe>Et){Me=!1;break}Qe>ht&&(ht=Qe)}else{if(Qe<ht){Me=!1;break}Qe<Et&&(Et=Qe)}}if(Me&&ht<Et)return!0}return!1}function Ot(){return U.lv===2?"attic":U.lv===1?U.z<4.1?"terrace":"function":U.z<0?"garden":U.x<15.5?"bar":"dining"}return{scene:a,camera:o,blocked:yt,step:nt,jump:Ft,place:vt,startAtDoor:Mt,ZONES:le,P:U,input:mt,zoneAt:Ot,look(S,C){pt||(U.yaw-=S*.0042,U.pitch=Tn.clamp(U.pitch-C*.0036,-1.1,1.1))},pinPos:S=>{let C=le[S],M=Qt[C.lv]+(S==="garden"?i-n:0)+1.9;return new F(C.look[0],M,C.look[1])}}}var Oh="?v="+((document.querySelector("meta[name=wc-ver]")||{}).content||"1"),ms=document.getElementById("tour3d"),fe=n=>n-11.5,Ra=64,_s=57,$e={render:15986404,render2:15130320,roof:11818799,roof2:10111532,timber:9067066,glass:7248536,pool:5814214,ground:15324078,lawn:10922860,road:9273975,tree:8159304,tree2:7303488,slab:14273460,room:15852492,hotelRoof:13616824,base:10260352},Te=new Bl({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),wf=Math.min(devicePixelRatio,innerWidth<700?1.5:2),Bv=Math.min(devicePixelRatio,innerWidth<700?1.25:1.5);Te.setPixelRatio(wf);Te.shadowMap.enabled=!0;Te.shadowMap.type=ss;Te.outputColorSpace=qe;Te.toneMapping=ua;Te.toneMappingExposure=1.05;ms.appendChild(Te.domElement);var ri=new $i;ri.background=new qt(16179910);ri.fog=new zr(16179910,140,260);var Ge=new Ye(38,1,.5,600),wn=new Hl(Ge,Te.domElement);wn.enableDamping=!0;wn.maxPolarAngle=Math.PI*.49;wn.minDistance=18;wn.maxDistance=190;wn.target.set(30,6,24);Ge.position.set(-20,48,-46);ms.clientWidth<ms.clientHeight&&Ge.position.set(-45,85,-80);ri.add(new ns(16774370,10255194,1.1));var Vi=new is(16771528,2.1);Vi.position.set(-40,80,-30);Vi.castShadow=!0;Vi.shadow.mapSize.set(2048,2048);Object.assign(Vi.shadow.camera,{left:-70,right:70,top:70,bottom:-70,near:10,far:220});Vi.shadow.bias=-4e-4;Vi.target.position.set(31,0,34);ri.add(Vi,Vi.target);var mf={},Xt=(n,t={})=>{let e=n+JSON.stringify(t);return mf[e]||(mf[e]=new Qs({color:n,roughness:.85,metalness:0,...t}))},li=[];function Le(n,t,e,i,s,r,a,o,l){let c=new xe(new ze(n,t,e),a);return c.position.set(i+n/2,s+t/2,r+e/2),c.castShadow=c.receiveShadow=!0,o.add(c),l&&(c.userData.zone=l,li.push(c)),c}function Kl(n,t,e,i,s,r,a,o,l){let c=new Be,h=Math.min(n,t)/2,d=[[0,0,0],[n,0,0],[n,0,t],[0,0,t],[h,e,h],[n-h,e,h],[n-h,e,t-h],[h,e,t-h]],u=[[0,4,1],[1,4,5],[1,5,2],[2,5,6],[2,6,3],[3,6,7],[3,7,0],[0,7,4],[4,7,5],[5,7,6]],f=[];u.forEach(E=>E.forEach(m=>f.push(...d[m]))),c.setAttribute("position",new de(f,3)),c.computeVertexNormals();let g=new xe(c,new Qs({color:a.color,roughness:.8,side:Je}));return g.position.set(i,s,r),g.castShadow=!0,g.receiveShadow=!0,o.add(g),l&&(g.userData.zone=l,li.push(g)),g}var Ca=new Ke;ri.add(Ca);var Pa=new Ln(Ra+60,_s+60,90,90);Pa.rotateX(-Math.PI/2);Pa.translate(Ra/2,0,_s/2);var Bh=(n,t)=>{let e=Tn.clamp(t/_s,0,1);return fe(11.5)+e*(fe(21.8)-fe(11.5))+(t<0,0)},Gl=Pa.attributes.position;for(let n=0;n<Gl.count;n++)Gl.setY(n,Bh(Gl.getX(n),Gl.getZ(n))-.05);Pa.computeVertexNormals();var Lh=Xt($e.ground,{transparent:!0,opacity:1}),zh=new xe(Pa,Lh);zh.receiveShadow=!0;Ca.add(zh);var kh=Xt($e.road);Le(Ra+40,.3,7,-20,-.3,-8,kh,Ca);var Vh=new xe(new ze(Ra+40,.3,7),kh);Vh.position.set(Ra/2,fe(21.8),_s+4.5);Vh.receiveShadow=!0;Ca.add(Vh);var jl=new xe(new ze(8,.3,_s+14),kh);jl.position.set(-5,(fe(11.5)+fe(21.8))/2,_s/2);jl.rotation.x=-Math.atan((fe(21.8)-fe(11.5))/_s);jl.receiveShadow=!0;Ca.add(jl);var Af=new Ke;ri.add(Af);var se=7.5,re=9.4,on=Xt($e.render),Rf=Xt($e.render2),Cf=Xt($e.roof),Pf=Xt($e.roof2),If=Xt($e.lawn),Lf=Xt($e.slab),zv=Xt(14205856),Df=Xt(4156245),kv=Xt(12159582),Nf=Xt($e.glass,{transparent:!0,opacity:.5,roughness:.2}),gs=Xt(9067066),Hh=Xt(5913128),Uf=[],Gi=n=>{let t=new Ke;return Af.add(t),Uf.push({g:t,lv:n}),t},We=Gi(0),Ql=Gi(1),tc=Gi(2),ai=Gi(3),ec=Gi(.5),An=Gi(-.5),Ff=Gi(1.5),xs=Gi(-1.5),jt=fe(16.33),be=fe(20.13),fn=fe(23.34),oi=fe(14.62),Yt=(n,t,e,i,s,r,a,o,l)=>Le(n,t,e,se+i,s,re+r,a,o,l);Yt(31,jt,31,0,0,0,Rf,We);Yt(14,oi,7,.2,0,-7,If,We,"garden");Yt(14,oi,7,19.8,0,-7,If,We,"garden");Yt(5.6,oi+.8,7,14.2,0,-7,Xt(13483944),We,"porch");for(let n=0;n<7;n++)Yt(5.6,(jt-oi)*(n+1)/7,.6,14.2,oi,-1.2-n*.6+.6,Xt(14273718),We,"porch");[[3,-3.6],[7.5,-4.5],[11,-3],[23,-3.6],[27.5,-4.5],[31,-3]].forEach(([n,t],e)=>{let i=new xe(new Qn(.06,.06,2.4,6),Xt(5910044));i.position.set(se+n,oi+1.2,re+t),We.add(i);let s=new xe(new wi(1.5,.6,8),Xt(e%2?14722106:15986404));s.position.set(se+n,oi+2.5,re+t),s.castShadow=!0,s.userData.zone="garden",li.push(s),We.add(s)});Yt(14,be-jt-.3,4.1,0,jt,0,Nf,We,"courtyards");Yt(14,be-jt-.3,4.1,17,jt,0,Nf,We,"courtyards");Yt(3,be-jt-.3,4.1,14,jt,0,on,We,"porch");Yt(2,2.6,.08,14.5,jt,-.08,Xt(15911306,{emissive:11565104,emissiveIntensity:.8}),We);Yt(2.3,.12,.12,14.35,jt+2.6,-.12,gs,We);Yt(.12,2.6,.12,14.35,jt,-.12,gs,We);Yt(.12,2.6,.12,16.53,jt,-.12,gs,We);Yt(31,be-jt,16.8,0,jt,4.1,on,ec,"frontbar");Yt(26,be-jt-.4,4.2,1,jt,20.9,on,ec,"kitchen");var Vv=Xt(14268812),Hv=Xt(15258286);Yt(14.5,.12,16.8,0,jt,4.1,Vv,An,"frontbar");Yt(16.5,.12,16.8,14.5,jt,4.1,Hv,An,"dining");Yt(26,.12,4.2,1,jt,20.9,Xt(13619144),An,"kitchen");Yt(31,1.4,.3,0,jt,20.6,on,An);Yt(.3,1.4,16.8,0,jt,4.1,on,An);Yt(.3,1.4,16.8,30.7,jt,4.1,on,An);Yt(1.3,1.1,6,5.6,jt+.12,8.5,Hh,An,"frontbar");Yt(5,1.1,1.3,5.6,jt+.12,8.5,Hh,An,"frontbar");var vs=new xe(new ia(2.6,.55,6,18,Math.PI*.9),Df);vs.rotation.x=Math.PI/2;vs.rotation.z=-Math.PI*.15;vs.position.set(se+25.5,jt+.7,re+8.5);vs.castShadow=!0;vs.userData.zone="dining";li.push(vs);An.add(vs);for(let n=0;n<3;n++)for(let t=0;t<2;t++)Yt(1.3,.75,1.3,2.5+t*3,jt+.12,12+n*2.6,gs,An,"frontbar"),Yt(1.5,.75,1.5,18+t*3.2,jt+.12,12+n*2.8,gs,An,"dining");Yt(4,1,6,13.4,jt+.12,13.4,Xt(12105904),An,"kitchen");Yt(2.6,1.2,4,17.5,jt+.12,7,gs,An,"stair");Yt(7,.2,4.5,1.1,jt,26.6,zv,We,"courtyards");Yt(14.7,be-jt-.4,4,1.1,jt,21.3,on,ec,"lounge");Yt(8.2,fe(26.2)-jt,9.5,18.8,jt,16,on,ec,"stair");Le(13.1,fe(15.02)-0+2.8,19.7,48.3,0,10.2,Rf,We,"bottleshop");Kl(13.1,19.7,2.2,48.3,fe(15.02)+2.8,10.2,Pf,We,"bottleshop");Le(20,.12,5,28.5,Bh(30,49),47.8,Xt(12432035),We,"carpark");Yt(30,.15,3.6,.2,be-.1,.5,Lf,Ql,"balcony");Yt(30,1.1,.25,.2,be,.5,on,Ql,"balcony");for(let n=0;n<9;n++)Yt(.4,2.9,.4,.2+n*3.7,be,.5,on,Ql);Yt(27,fn-be+.3,11.8,.1,be,4.1,on,Ff,"bombies");Yt(27,.12,11.8,.1,be,4.1,kv,xs,"bombies");Yt(27,1.3,.3,.1,be,15.6,on,xs);Yt(.3,1.3,11.8,.1,be,4.1,on,xs);Yt(.3,1.3,11.8,26.8,be,4.1,on,xs);Yt(.3,1.3,11.8,8.5,be,4.1,on,xs);Yt(2.4,1.1,4,19.5,be+.12,8,Xt(8366502),xs,"bombies");Yt(8,.3,7,9.5,be+.12,5,Xt(13216131),xs,"bombies");Yt(8.2,fe(22.83)-be+.2,9.5,18.8,be,16,on,Ql,"stair");Yt(22,.15,11,3,fn,5.2,Xt(14268812),tc,"attic");Yt(8.4,2.4,3.4,15.8,fn+.15,5.3,Hh,tc,"attic");Yt(12.3,2.2,.15,3.5,fn+.15,8.2,Xt(15260872),tc,"attic");Yt(1.1,1.1,4,18.5,fn+.15,10,Df,tc,"attic");Kl(30.7,15,fe(27.3)-fn-.2,-.5,fn+.2,2.2+re-re,Cf,ai,"roofpub");ai.children[ai.children.length-1].position.set(se-.5,fn+.2,re+2.2);var _r=new ji;_r.moveTo(-3.6,0);_r.lineTo(3.6,0);_r.lineTo(0,3.4);_r.lineTo(-3.6,0);var Ia=new xe(new ea(_r,{depth:6,bevelEnabled:!1}),Xt($e.roof));Ia.position.set(se+15.5,fn+.2,re+1.6);Ia.castShadow=!0;Ia.userData.zone="roofpub";li.push(Ia);ai.add(Ia);var Of=new xe(new na(_r),Xt(15327698,{side:Je}));Of.position.set(se+15.5,fn+.2,re+1.55);ai.add(Of);for(let n=-3;n<=3;n++)Yt(.08,3.2-Math.abs(n)*.9,.06,15.5+n*.9,fn+.25,1.5,gs,ai);Kl(31,3.6,.9,-.3,fn-.4,.2,Pf,ai,"balcony");ai.children[ai.children.length-1].position.set(se-.3,fn-.5,re+.2);var Gv=Kl(8,7.5,1.4,0,0,0,Cf,ai,"attic");Gv.position.set(se+15.4,fe(26.2),re+8.7);var Wv=Xt(5917248);for(let n=0;n<8;n++)Yt(1.2,1.5,.15,1.8+n*3.4,be+.9,4,Wv,Ff);Le(16,jt,2,se+10,0,re+31,Xt(13216131),We,"deck");var Yl=new Ke;ri.add(Yl);function Xv(n,t,e=1){let i=Bh(n,t),s=new xe(new Qn(.25*e,.35*e,3*e,6),Xt(7031347));s.position.set(n,i+1.5*e,t),s.castShadow=!0,Yl.add(s);let r=new xe(new ts(2.6*e,0),Xt(Math.random()<.5?$e.tree:$e.tree2,{flatShading:!0}));r.position.set(n,i+4.2*e,t),r.castShadow=!0,Yl.add(r)}[[8,57],[17,57.5],[27,57],[38,57.5],[49,57],[59,52],[2,36],[58,8],[61,30]].forEach(([n,t])=>Xv(n,t,.75+Math.random()*.25));var ds=new Ke;ri.add(ds);var Ie=7,Ce=42.5,zi=46,si=14,$t={B2:fe(10.06),B1:fe(13.06),L00:fe(16.95),L01:fe(20.15),L02:fe(23.35),RF:fe(27.25)},Xl={},La=n=>{let t=new Ke;return t.userData.lv=n,ds.add(t),Xl[n]=t,t},Ea=La(-1),Gh=La(0),xr=La(1),Wh=La(2),Bf=La(3),zf=Xt($e.base,{transparent:!0,opacity:.92}),gf=Xt($e.room),ob=Xt(15260872),Dh=Xt($e.glass,{transparent:!0,opacity:.55,roughness:.2}),qv=Xt($e.timber),Yv=Xt($e.pool,{roughness:.15,metalness:.1});Le(zi+4,$t.B1-$t.B2-.3,si+6,Ie-2,$t.B2,Ce-3,zf,Ea,"basement");Le(zi+4,$t.L00-$t.B1-.3,si+6,Ie-2,$t.B1,Ce-3,zf,Ea,"basement");var _f=Xt(10111532);for(let n of[$t.B2,$t.B1])for(let t=0;t<14;t++)Le(2.2,1.3,4.4,Ie+1+t*3.1,n+.05,Ce-2,_f,Ea),Le(2.2,1.3,4.4,Ie+1+t*3.1,n+.05,Ce+si-3,_f,Ea);var Zv=Le(6,.4,10,-1,$t.B1+1.5,Ce+2,Xt(8221288),Ea,"basement");Zv.rotation.z=0;function Xh(n,t,e,i,s,r){Le(zi,.35,si,Ie,t,Ce,Lf,n);let a=6,o=6,l=si-a-o;i.forEach(([c,h,d])=>Le(h-.2,e-.35,a,Ie+c,t+.35,Ce,d==="room"?gf:Xt(d),n,d==="room"?"rooms":r[d]||"rooms")),s.forEach(([c,h,d])=>Le(h-.2,e-.35,o,Ie+c,t+.35,Ce+si-o,d==="room"?gf:Xt(d),n,d==="room"?"rooms":r[d]||"rooms")),Le(zi-6,1.1,.08,Ie+3,t+.35,Ce+a+.2,Dh,n,"void"),Le(zi-6,1.1,.08,Ie+3,t+.35,Ce+si-o-.3,Dh,n,"void")}var Wl=8366502;var dn=(n,t,e=3.8)=>Array.from({length:t},(i,s)=>[n+s*e,e,"room"]);Xh(Gh,$t.L00,$t.L01-$t.L00,[[0,8,Wl],[8,3,14207926],[11,5,Wl],...dn(16,2),[23.6,3,14207926],...dn(26.6,5)],[...dn(.5,2),[8.1,2.4,14207926],[10.5,6,13615789],[16.5,6.5,15260872],[23,7,Wl],...dn(30,2)],{[Wl]:"reception",13615789:"void",15260872:"reception",14207926:"connection"});Xh(xr,$t.L01,$t.L02-$t.L01,[...dn(0,5),...dn(35.6,3)],[...dn(0,4),[15.2,5.2,13615789],...dn(20.4,4),...dn(35.6,3).slice(0,2)],{13615789:"void"});Le(15,fe(21.38)-$t.L01,8,Ie+19.5,$t.L01,Ce-6,Xt(14140322),xr,"pool");var lb=Le(12,.25,5.4,Ie+21,fe(21.38)-.15,Ce-4.8,Yv,xr,"pool");Le(12,.08,.08,Ie+21,fe(21.38)+.1,Ce-4.85,Xt(16777215),xr,"pool");Xh(Wh,$t.L02,$t.RF-$t.L02-.6,[...dn(0,5),...dn(19,2),...dn(35.6,3)],[...dn(0,4),[15.2,5.2,13615789],...dn(20.4,4),...dn(35.6,3).slice(0,2)],{13615789:"void"});[$t.L01,$t.L02].forEach((n,t)=>Le(2.2,.2,si-12,Ie+22,n+.35,Ce+6,Xt(5917248),t?Wh:xr,"void"));function kf(n,t,e){let i=Le(t,.35,si+1.2,Ie+n,$t.RF-.6,Ce-.6,Xt($e.hotelRoof),e,"roof");i.rotation.x=Tn.degToRad(3)}kf(-.6,21.4,Bf);kf(23.6,23,Bf);var Jv=new ze(.12,$t.RF-$t.L00-.6,.22),Vf=Math.floor(zi/.45),Hi=new Gr(Jv,qv,Vf*1+60),Zl=0,pr=new _e;for(let n=0;n<Vf;n++)pr.makeTranslation(Ie+n*.45+.2,$t.L00+($t.RF-$t.L00-.6)/2,Ce+si+.5),Hi.setMatrixAt(Zl++,pr);for(let n=0;n<30;n++)pr.makeTranslation(Ie-.5,$t.L00+($t.RF-$t.L00-.6)/2,Ce+n*.5),Hi.setMatrixAt(Zl++,pr),pr.makeTranslation(Ie+zi+.5,$t.L00+($t.RF-$t.L00-.6)/2,Ce+n*.5),Hi.setMatrixAt(Zl++,pr);Hi.count=Zl;Hi.castShadow=!0;Hi.userData.zone="screen";li.push(Hi);var nc=new Ke;nc.add(Hi);ds.add(nc);nc.userData.lv=2.5;for(let n of[[Gh,$t.L00],[xr,$t.L01],[Wh,$t.L02]])Le(zi-.4,2,.06,Ie+.2,n[1]+.9,Ce-.04,Dh,n[0]);Le(3,$t.L01-$t.L00,6,Ie+23.6,$t.L00,Ce-6,Xt(14207926),Gh,"connection");var ic={porch:["Front porch entry","Ground \xB7 RL 16.33","The central porch and stairs up from the beer garden, the front door off Moore Road."],frontbar:["Main front bar","Ground \xB7 RL 16.33","To the right as you enter: the main bar, looking out over the beer garden."],dining:["Harbord Dining Room","Ground \xB7 RL 16.33","To the left of the porch, the former Balsa restaurant, with its curved green marble bar and spotted gum ceilings."],kitchen:["Kitchen & back of house","Ground \xB7 RL 16.33","Kitchen, cool room and wash-up behind the bars."],lounge:["Lounge","Ground \xB7 rear","The rear lounge beside the back courtyard."],courtyards:["Courtyards","Ground \xB7 RL 16.33 / 16.42","The enclosed front courtyards in the former verandah, and the rear courtyard."],garden:["Beer garden","RL 14.62","Below the front bar on either side of the porch stairs, stepping down to Moore Road."],stair:["Stair & new lift","Ground to attic","The restored original staircase, with a new lift serving Level 1 and the attic."],bombies:["Bombies & Level 1 functions","Level 1 \xB7 RL 20.13 \xB7 capacity 320","The performance space and bar on Level 1, opening onto the verandah."],balcony:["Verandah balcony \xB7 Bombies Rooftop Terrace","Level 1 \xB7 RL 20.20 \xB7 about 147 m\xB2","The full-width balcony behind the heritage balustrade, with glass acoustic panels. 70 seated or 110 standing."],attic:["Attic studio & bar","Attic \xB7 RL 23.34 \xB7 capacity 100","About 150 m\xB2 under the raised roof: a lounge, bar, audio desk and recording studio, reached by the new lift."],roofpub:["Hipped terracotta roof","Ridge about RL 27","White render under terracotta tiles, with the street-facing central gable and timber batten infill."],bottleshop:["Bottle shop","East \xB7 FFL 15.02","The bottle shop to the east of the pub."],carpark:["Car park","South of the pub","Existing hard-stand car parking behind the pub."],deck:["Rear edge","RL 16.33","The back of the pub, where the proposed accommodation would connect."],reception:["Reception, lounge & gym","Proposed \xB7 L00 \xB7 RL 16.95","Arrival off Charles Street into reception, a guest lounge and gym."],connection:["Link to the pub","Proposed \xB7 L00","A corridor joins the proposed hotel to the existing pub."],rooms:["Guest rooms","Proposed \xB7 37 rooms over 3 levels","Rooms of about 20 to 24 m\xB2 either side of a central void."],void:["Central void & bridge","Proposed","Light wells bring daylight through the building, crossed by a grated bridge."],pool:["Infinity pool","Proposed \xB7 L01 \xB7 deck RL 21.38","A pool and deck on Level 01 between the room wings."],screen:["Hardwood timber screen","Proposed","Vertical hardwood battens wrap the facade to Undercliff Road."],roof:["Skillion roofs","Proposed \xB7 RL 27.25","Low 3\xB0 skillion roofs, kept below the pub ridge."],basement:["Basement parking","Proposed \xB7 2 levels \xB7 72 cars","Two basement levels with the driveway off Charles Street."]},ki=!1,Ne=3;function Hf(){Object.values(Xl).forEach(n=>{n.visible=ki&&n.userData.lv<=Ne}),nc.visible=ki&&Ne>=3,Uf.forEach(n=>n.g.visible=n.lv===-.5?Ne===0:n.lv===-1.5?Ne===1:n.lv===2?Ne===2:Ne===-1?!0:n.lv<=Ne),Xl[-1].visible=ki&&Ne===-1,Lh.opacity=Ne===-1?.25:1,Lh.depthWrite=Ne!==-1,Ne===-1&&Object.values(Xl).forEach(n=>{n.userData.lv>=0&&(n.visible=!1)}),Yl.visible=Ne!==-1,qf()}function vr(n){ki=n;let t=performance.now();if(ds.visible=!0,n){ds.scale.y=.001;let e=i=>{let s=Math.min(1,(i-t)/900);ds.scale.y=.001+.999*(1-Math.pow(1-s,3)),s<1&&requestAnimationFrame(e)};requestAnimationFrame(e)}Hf(),document.querySelectorAll("[data-era]").forEach(e=>e.setAttribute("aria-pressed",e.dataset.era==="future"===n)),document.getElementById("eraNote").textContent=n?"Showing the proposed accommodation building from the lodged planning proposal (secondary, concept only).":"Today: the Harbord as it stands. Tap a zone or play the guided tour."}var Gf=[["porch",[se+17,jt+1.6,re-2.5]],["frontbar",[se+6,be+.4,re+12]],["dining",[se+24,be+.4,re+10]],["garden",[se+6,oi+3.2,re-4]],["courtyards",[se+6,be-1,re+.2]],["balcony",[se+25,be+1.4,re+1.6]],["bombies",[se+6,fn+.6,re+12]],["attic",[se+19,fe(27.8),re+12]],["stair",[se+23,fe(26.4),re+21]],["kitchen",[se+8,be,re+23]],["bottleshop",[55,fe(15.02)+5.4,24]],["connection",[Ie+25,$t.L01+.4,Ce-3]],["pool",[Ie+27,fe(21.38)+.5,Ce-2.5]],["rooms",[Ie+40,$t.RF+.2,Ce+4]],["basement",[Ie+18,$t.B1+1.2,Ce+3]]],qh=document.getElementById("pins");qh.innerHTML=Gf.map(([n],t)=>`<button class="pin" data-z="${n}" style="display:none" aria-label="${ic[n][0]}">${t+1}</button>`).join("");var Wf=[...qh.children],Xf=n=>ic[n][1].startsWith("Proposed");function $v(n){return Ne===-1?n==="basement":n==="basement"||Xf(n)&&!ki?!1:n==="rooms"||n==="pool"?ki&&Ne>=1:n==="attic"?Ne===2||Ne===3:["balcony","bombies"].includes(n)?Ne>=1:["frontbar","dining"].includes(n)?Ne===0||Ne===3:!0}var us=new F,Ph=new ir,xf={},Nh=0,Kv=()=>[zh,...li.filter(n=>{let t=n;for(;t;){if(!t.visible)return!1;t=t.parent}return!0})];function qf(){let n=Te.domElement.getBoundingClientRect();Gf.forEach(([t,e],i)=>{let s=Wf[i];if(!$v(t)){s.style.display="none";return}if(us.set(...e),t!=="basement"&&Xf(t)&&(us.y*=ds.scale.y),Nh%8===0){let r=us.clone().sub(Ge.position),a=r.length();Ph.set(Ge.position,r.normalize()),Ph.far=a-1.2;let o=Ph.intersectObjects(Kv(),!1);xf[t]=o.length>0&&Ne!==-1}if(s.classList.toggle("hid",!!xf[t]),us.project(Ge),us.z>1){s.style.display="none";return}s.style.display="",s.style.transform=`translate(${(us.x*.5+.5)*n.width-24}px,${(-us.y*.5+.5)*n.height-24}px)`})}var Yf=document.getElementById("tinfo"),vf={porch:"entrance",frontbar:"facade",dining:"diners",kitchen:"table",lounge:"diners",courtyards:"courtyard",garden:"umbrellas",stair:"entrance",bombies:"bombies",balcony:"terrace",attic:"bombies",roofpub:"facade",bottleshop:"corner",carpark:"corner",deck:"corner"};function yr(n){let t=ic[n];if(!t)return;let e=vf[n]||"aerial";Yf.innerHTML=`<div class="z">${t[1]}</div><h3 class="hd">${t[0]}</h3><p>${t[2]}</p><figure class="iref"><img src="../assets/img/tour/${e}.jpg${Oh}" alt="The Harbord today: ${t[0]}" loading="lazy"><figcaption>${vf[n]?"The Harbord today, for reference.":"The site today, for context. The proposed building is concept only."}</figcaption></figure>`,Wf.forEach(i=>i.classList.toggle("on",i.dataset.z===n)),li.forEach(i=>{i.material&&i.material.emissive}),jv(n)}var Ih=[];function jv(n){Ih.forEach(([t,e])=>t.material=e),Ih=[],li.filter(t=>t.userData.zone===n&&!t.isInstancedMesh).forEach(t=>{Ih.push([t,t.material]);let e=t.material.clone();e.emissive=new qt(14722106),e.emissiveIntensity=.35,t.material=e})}var yf=new ir,Mf=new ft,ql=null;Te.domElement.addEventListener("pointerdown",n=>ql=[n.clientX,n.clientY]);Te.domElement.addEventListener("pointerup",n=>{if(qn!=="out"||!ql||Math.hypot(n.clientX-ql[0],n.clientY-ql[1])>6)return;let t=Te.domElement.getBoundingClientRect();Mf.set((n.clientX-t.left)/t.width*2-1,-(n.clientY-t.top)/t.height*2+1),yf.setFromCamera(Mf,Ge);let e=yf.intersectObjects(li.filter(i=>{let s=i;for(;s;){if(!s.visible)return!1;s=s.parent}return!0}),!1)[0];e&&yr(e.object.userData.zone)});qh.addEventListener("click",n=>{let t=n.target.closest(".pin");t&&yr(t.dataset.z)});document.querySelectorAll("[data-era]").forEach(n=>n.onclick=()=>{ys(),vr(n.dataset.era==="future")});document.querySelectorAll("[data-cut]").forEach(n=>n.onclick=()=>{ys(),Da(+n.dataset.cut)});function Da(n){Ne=n,n===-1&&!ki&&vr(!0),Hf(),document.querySelectorAll("[data-cut]").forEach(t=>t.setAttribute("aria-pressed",+t.dataset.cut===n))}var Ta=[{t:"Arriving on Moore Road",z:"porch",cam:[se+40,16,-26],tg:[se+16,6,re],cut:3,f:!1},{t:"The beer garden below the front bar",z:"garden",cam:[se-10,9,-12],tg:[se+7,4,re-3],cut:3,f:!1},{t:"Roof off: the main front bar",z:"frontbar",cam:[se-12,24,re-8],tg:[se+8,5,re+12],cut:0,f:!1},{t:"The Harbord Dining Room and its curved marble bar",z:"dining",cam:[se+44,22,re-6],tg:[se+23,5,re+11],cut:0,f:!1},{t:"Level 1: Bombies and the functions space",z:"bombies",cam:[se+8,28,re-18],tg:[se+13,9,re+9],cut:1,f:!1},{t:"The verandah balcony, Bombies Rooftop Terrace",z:"balcony",cam:[se+36,14,re-12],tg:[se+18,9,re+2],cut:1,f:!1},{t:"Under the raised roof: the attic studio and bar",z:"attic",cam:[se-10,32,re-6],tg:[se+16,12,re+10],cut:2,f:!1},{t:"The Harbord today",z:"roofpub",cam:[-20,48,-46],tg:[30,6,24],cut:3,f:!1},{t:"Bonus: the proposed accommodation building",z:"rooms",cam:[-30,52,92],tg:[30,8,44],cut:3,f:!0}],Na=!1,fs=0,Zf=null,mr=null,Qv=document.getElementById("tcap"),wa=document.getElementById("tplay");function Jf(n){n.f!==ki&&vr(n.f),Da(n.cut),yr(n.z),Qv.innerHTML=`<b>${fs+1}/${Ta.length}</b> ${n.t}`;let t=Ge.position.clone(),e=wn.target.clone(),i=new F(...n.tg),s=new F(...n.cam).sub(i).multiplyScalar(Ge.aspect<1?Math.min(2,1.1/Ge.aspect):1).add(i),r=performance.now(),a=2600;mr=o=>{let l=Math.min(1,(o-r)/a),c=l<.5?4*l*l*l:1-Math.pow(-2*l+2,3)/2;Ge.position.lerpVectors(t,s,c),wn.target.lerpVectors(e,i,c),l>=1&&(mr=null)}}function Yh(){Jf(Ta[fs]),fs=(fs+1)%Ta.length,Na&&(Zf=setTimeout(Yh,5200))}function ty(){Na=!0,wa.textContent="Pause tour",wa.setAttribute("aria-pressed","true"),fs=fs%Ta.length,Yh()}function ys(){Na=!1,clearTimeout(Zf),wa.textContent="Play guided tour",wa.setAttribute("aria-pressed","false")}wa.onclick=()=>Na?ys():ty();document.getElementById("tnext").onclick=()=>{ys(),Yh()};wn.addEventListener("start",()=>{Na&&ys(),mr=null});function Ua(){let n=ms.clientWidth,t=ms.clientHeight;Te.setSize(n,t,!1),Te.domElement.style.width=n+"px",Te.domElement.style.height=t+"px",Ge.aspect=n/t,Ge.updateProjectionMatrix(),ue&&(ue.camera.aspect=n/t,ue.camera.fov=n<t?78:68,ue.camera.updateProjectionMatrix())}new ResizeObserver(Ua).observe(ms);Ua();var qn="out",ue=null,Jl=null,Sf=performance.now(),ba=ms.parentElement,bf=document.getElementById("tfade"),Zh=document.getElementById("inui"),$f=document.getElementById("icap"),Uh=document.getElementById("ipins"),Ef=["bar","dining","garden","function","terrace","attic"];function Jh(n){bf.classList.add("on"),setTimeout(()=>{n(),setTimeout(()=>bf.classList.remove("on"),60)},420)}function $h(n){let t=ue.ZONES[n];Yf.innerHTML=`<div class="z">${t.cap}</div><h3 class="hd">${t.n}</h3><p>${t.d}</p><figure class="iref"><img src="../assets/img/tour/${t.img}.jpg${Oh}" alt="The Harbord today: ${t.n}" loading="lazy"><figcaption>The Harbord today, for reference. The 3D interior is illustrative, based on approved plans.</figcaption></figure>`,$f.innerHTML=`<b>${t.n}</b> ${t.cap}`,document.querySelectorAll("[data-iz]").forEach(e=>e.setAttribute("aria-pressed",e.dataset.iz===n))}function ey(){ue||(ue=pf({y0:jt,y1:be,y2:fn,yg:oi,imgBase:"../assets/img/tour/",imgQ:Oh}),document.getElementById("izs").innerHTML=Ef.map(n=>`<button data-iz="${n}" aria-pressed="false">${ue.ZONES[n].n.replace(" (Bombies)","").replace(" (bistro)","")}</button>`).join(""),Uh.innerHTML=Ef.map((n,t)=>`<button class="pin ipin" data-iz="${n}" aria-label="${ue.ZONES[n].n}" style="display:none">${t+1}</button>`).join(""),Zh.addEventListener("click",n=>{let t=n.target.closest("[data-iz]");t&&Fh(t.dataset.iz)}),Uh.addEventListener("click",n=>{let t=n.target.closest("[data-iz]");t&&Fh(t.dataset.iz)}),Ua())}var Aa=null;function Fh(n){ue.jump(n,Jh),Aa=n,$h(n)}function Kh(){if(qn!=="out")return;ys(),mr=null,vr(!1),Da(3),ey(),qn="flying",wn.enabled=!1,ba.classList.add("flying");let n=new F(se+15.6,jt+1.7,re-3.2),t=new F(se+15.6,jt+1.3,re+6),e=new F(se+15.6,jt+9,re-30),i=Ge.position.clone(),s=wn.target.clone(),r=performance.now(),a=2600;Jl=o=>{let l=Math.min(1,(o-r)/a),c=l<.5?4*l*l*l:1-Math.pow(-2*l+2,3)/2,h=i.clone().lerp(e,c),d=e.clone().lerp(n,c);Ge.position.copy(h.lerp(d,c));let u=s.clone().lerp(t,Math.min(1,c*1.3));Ge.lookAt(u),l>=1&&(Jl=null,Jh(()=>{qn="in",ue.startAtDoor(),Te.setPixelRatio(Bv),Ua(),ba.classList.remove("flying"),ba.classList.add("inside"),Zh.hidden=!1,Aa=null,$h("bar"),$f.innerHTML="<b>Inside the Harbord</b> "+(matchMedia("(pointer:coarse)").matches?"Joystick to walk, drag to look, or tap a zone.":"WASD or arrow keys to walk, drag to look, or pick a zone.")}))}}function jh(){qn==="in"&&Jh(()=>{qn="out",Zh.hidden=!0,ba.classList.remove("inside"),Te.setPixelRatio(wf),Ua(),wn.enabled=!0,Ge.position.set(se+15.6,oi+9,re-26),wn.target.set(se+15.6,jt,re+6),yr("porch")})}document.getElementById("tin").onclick=Kh;var Qh=n=>{n&&n.preventDefault(),ba.scrollIntoView({block:"center",behavior:"smooth"}),setTimeout(Kh,n?350:150)};document.getElementById("twalk").onclick=Qh;var Tf=document.getElementById("heroWalk");Tf&&(Tf.onclick=Qh);new URLSearchParams(location.search).get("inside")==="1"&&setTimeout(()=>Qh(),400);document.getElementById("tout").onclick=jh;var Xn={},$l={KeyW:"f",ArrowUp:"f",KeyS:"b",ArrowDown:"b",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"};addEventListener("keydown",n=>{qn!=="in"||n.target.closest&&n.target.closest("input,textarea")||($l[n.code]&&(Xn[$l[n.code]]=1,n.preventDefault()),n.key==="Shift"&&(Xn.run=1),n.key==="Escape"&&jh())});addEventListener("keyup",n=>{$l[n.code]&&(Xn[$l[n.code]]=0),n.key==="Shift"&&(Xn.run=0)});addEventListener("blur",()=>{for(let n in Xn)Xn[n]=0});var ii=null;Te.domElement.addEventListener("pointerdown",n=>{if(qn==="in"){ii={id:n.pointerId,x:n.clientX,y:n.clientY};try{Te.domElement.setPointerCapture(n.pointerId)}catch{}}});Te.domElement.addEventListener("pointermove",n=>{qn!=="in"||!ii||n.pointerId!==ii.id||(ue.look(n.clientX-ii.x,n.clientY-ii.y),ii.x=n.clientX,ii.y=n.clientY)});var Kf=n=>{ii&&n.pointerId===ii.id&&(ii=null)};Te.domElement.addEventListener("pointerup",Kf);Te.domElement.addEventListener("pointercancel",Kf);var ps=document.getElementById("joy"),jf=ps.firstElementChild,Bi=null,gr={x:0,y:0};ps.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation();try{ps.setPointerCapture(n.pointerId)}catch{}let t=ps.getBoundingClientRect();Bi={id:n.pointerId,cx:t.left+t.width/2,cy:t.top+t.height/2},Qf(n)});function Qf(n){if(!Bi||n.pointerId!==Bi.id)return;let t=n.clientX-Bi.cx,e=n.clientY-Bi.cy,i=Math.hypot(t,e),s=42;i>s&&(t*=s/i,e*=s/i),gr.x=t/s,gr.y=e/s,jf.style.transform=`translate(${t}px,${e}px)`}ps.addEventListener("pointermove",Qf);var tp=n=>{Bi&&n.pointerId===Bi.id&&(Bi=null,gr.x=gr.y=0,jf.style.transform="")};ps.addEventListener("pointerup",tp);ps.addEventListener("pointercancel",tp);function ny(){let n=Te.domElement.getBoundingClientRect();[...Uh.children].forEach(t=>{let e=t.dataset.iz,i=ue.ZONES[e];i.lv!==ue.P.lv||e===Aa&&ue.input.f;let s=ue.pinPos(e),r=s.distanceTo(ue.camera.position);if(i.lv!==ue.P.lv||r>32||r<2.2||ue.blocked(i.lv,ue.P.x,ue.P.z,s.x,s.z)){t.style.display="none";return}if(s.project(ue.camera),s.z>1||Math.abs(s.x)>1.05||Math.abs(s.y)>1.05){t.style.display="none";return}t.style.display="",t.style.transform=`translate(${(s.x*.5+.5)*n.width-24}px,${(-s.y*.5+.5)*n.height-24}px)`})}function ep(n){requestAnimationFrame(ep),Nh++;let t=Math.min(.05,(n-Sf)/1e3);if(Sf=n,qn==="in"){ue.input.f=(Xn.f||0)-(Xn.b||0)-gr.y,ue.input.s=(Xn.r||0)-(Xn.l||0)+gr.x,ue.input.run=!!Xn.run,ue.step(t);let e=ue.zoneAt();e!==Aa&&(ue.input.f||ue.input.s)&&(Aa=e,$h(e)),Te.render(ue.scene,ue.camera),Nh%2===0&&ny();return}if(Jl){Jl(n),Te.render(ri,Ge);return}mr&&mr(n),wn.update(),Te.render(ri,Ge),qf()}vr(!1);Da(3);yr("porch");requestAnimationFrame(ep);window.__tour={show:yr,zones:Object.keys(ic),setFuture:vr,setCut:Da,fly:n=>{fs=n,ys(),Jf(Ta[n])},enter:Kh,exit:jh,go:n=>Fh(n),get mode(){return qn},get pos(){return ue&&{...ue.P}},ready:!0};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
