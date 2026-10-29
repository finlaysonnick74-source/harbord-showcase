(()=>{var Pi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bu=0,zc=1,zu=2;var ss=1,ku=2,rr=3,Li=0,hn=1,Ze=2,Qn=0,ar=1,rs=2,kc=3,Vc=4,Vu=5;var as=100,Hu=101,Gu=102,Wu=103,Xu=104,qu=200,Yu=201,Zu=202,Ju=203,Hc=204,Gc=205,$u=206,Ku=207,ju=208,Qu=209,td=210,ed=211,nd=212,id=213,sd=214,oo=0,lo=1,co=2,ks=3,ho=4,uo=5,fo=6,po=7,aa=0,rd=1,ad=2,kn=0,Wc=1,Xc=2,qc=3,oa=4,Yc=5,Zc=6,Jc=7;var $c=300,Di=301,os=302,Wo=303,Xo=304,la=306,Vs=1e3,vn=1001,mo=1002,Ye=1003,od=1004;var ca=1005;var Ke=1006,qo=1007;var Ni=1008;var pn=1009,Kc=1010,jc=1011,or=1012,Yo=1013,Vn=1014,Ln=1015,Hn=1016,Zo=1017,Jo=1018,lr=1020,Qc=35902,th=35899,eh=1021,nh=1022,Dn=1023,Jn=1026,Ui=1027,$o=1028,Ko=1029,Fi=1030,jo=1031;var Qo=1033,ha=33776,ua=33777,da=33778,fa=33779,tl=35840,el=35841,nl=35842,il=35843,sl=36196,rl=37492,al=37496,ol=37488,ll=37489,pa=37490,cl=37491,hl=37808,ul=37809,dl=37810,fl=37811,pl=37812,ml=37813,gl=37814,_l=37815,xl=37816,vl=37817,yl=37818,Ml=37819,Sl=37820,bl=37821,El=36492,Tl=36494,wl=36495,Al=36283,Rl=36284,ma=36285,Cl=36286;var Ir=2300,go=2301,so=2302,Ac=2303,Rc=2400,Cc=2401,Pc=2402;var ld=3200;var cr=0,cd=1,Gn="",Xe="srgb",Lr="srgb-linear",Dr="linear",me="srgb";var ro=7680;var hd=519,ud=512,dd=513,fd=514,Pl=515,pd=516,md=517,Il=518,gd=519,_d=35044;var ih="300 es",On=2e3,Hs=2001;function np(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ip(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Gs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xd(){let n=Gs("canvas");return n.style.display="block",n}var ru={},Ws=null;function sh(...n){let t="THREE."+n.shift();Ws?Ws("log",t,...n):console.log(t,...n)}function vd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ht(...n){n=vd(n);let t="THREE."+n.shift();if(Ws)Ws("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Gt(...n){n=vd(n);let t="THREE."+n.shift();if(Ws)Ws("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ji(...n){let t=n.join(" ");t in ru||(ru[t]=!0,Ht(...n))}function yd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Md={[oo]:lo,[co]:fo,[ho]:po,[ks]:uo,[lo]:oo,[fo]:co,[po]:ho,[uo]:ks},Bn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],au=1234567,Ar=Math.PI/180,Xs=180/Math.PI;function ls(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]).toLowerCase()}function ee(n,t,e){return Math.max(t,Math.min(e,n))}function rh(n,t){return(n%t+t)%t}function sp(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function rp(n,t,e){return n!==t?(e-n)/(t-n):0}function Rr(n,t,e){return(1-e)*n+e*t}function ap(n,t,e,i){return Rr(n,t,1-Math.exp(-e*i))}function op(n,t=1){return t-Math.abs(rh(n,t*2)-t)}function lp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function cp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function hp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function up(n,t){return n+Math.random()*(t-n)}function dp(n){return n*(.5-Math.random())}function fp(n){n!==void 0&&(au=n);let t=au+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pp(n){return n*Ar}function mp(n){return n*Xs}function gp(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function _p(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function xp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vp(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),f=r((t-i)/2),u=a((t-i)/2),p=r((i-t)/2),x=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*f,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*f,o*c);break;case"ZXZ":n.set(l*f,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*x,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*x,o*c);break;case"ZYZ":n.set(l*x,l*p,o*h,o*c);break;default:Ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var En={DEG2RAD:Ar,RAD2DEG:Xs,generateUUID:ls,clamp:ee,euclideanModulo:rh,mapLinear:sp,inverseLerp:rp,lerp:Rr,damp:ap,pingpong:op,smoothstep:lp,smootherstep:cp,randInt:hp,randFloat:up,randFloatSpread:dp,seededRandom:fp,degToRad:pp,radToDeg:mp,isPowerOfTwo:gp,ceilPowerOfTwo:_p,floorPowerOfTwo:xp,setQuaternionFromProperEuler:vp,normalize:ln,denormalize:Bs},pt=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],u=r[a+0],p=r[a+1],x=r[a+2],b=r[a+3];if(f!==b||l!==u||c!==p||h!==x){let _=l*u+c*p+h*x+f*b;_<0&&(u=-u,p=-p,x=-x,b=-b,_=-_);let m=1-o;if(_<.9995){let E=Math.acos(_),I=Math.sin(E);m=Math.sin(m*E)/I,o=Math.sin(o*E)/I,l=l*m+u*o,c=c*m+p*o,h=h*m+x*o,f=f*m+b*o}else{l=l*m+u*o,c=c*m+p*o,h=h*m+x*o,f=f*m+b*o;let E=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=E,c*=E,h*=E,f*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[a],u=r[a+1],p=r[a+2],x=r[a+3];return t[e]=o*x+h*f+l*p-c*u,t[e+1]=l*x+h*u+c*f-o*p,t[e+2]=c*x+h*p+o*u-l*f,t[e+3]=h*x-o*f-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),f=o(r/2),u=l(i/2),p=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*p*x,this._y=c*p*f-u*h*x,this._z=c*h*x+u*p*f,this._w=c*h*f-u*p*x;break;case"YXZ":this._x=u*h*f+c*p*x,this._y=c*p*f-u*h*x,this._z=c*h*x-u*p*f,this._w=c*h*f+u*p*x;break;case"ZXY":this._x=u*h*f-c*p*x,this._y=c*p*f+u*h*x,this._z=c*h*x+u*p*f,this._w=c*h*f-u*p*x;break;case"ZYX":this._x=u*h*f-c*p*x,this._y=c*p*f+u*h*x,this._z=c*h*x-u*p*f,this._w=c*h*f+u*p*x;break;case"YZX":this._x=u*h*f+c*p*x,this._y=c*p*f+u*h*x,this._z=c*h*x-u*p*f,this._w=c*h*f-u*p*x;break;case"XZY":this._x=u*h*f-c*p*x,this._y=c*p*f-u*h*x,this._z=c*h*x+u*p*f,this._w=c*h*f+u*p*x;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=i+o+f;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>f){let p=2*Math.sqrt(1+i-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-i-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ou.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ou.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ic.copy(this).projectOnVector(t),this.sub(ic)}reflect(t){return this.sub(ic.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ic=new U,ou=new yn,Jt=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],p=i[5],x=i[8],b=s[0],_=s[3],m=s[6],E=s[1],I=s[4],y=s[7],T=s[2],w=s[5],P=s[8];return r[0]=a*b+o*E+l*T,r[3]=a*_+o*I+l*w,r[6]=a*m+o*y+l*P,r[1]=c*b+h*E+f*T,r[4]=c*_+h*I+f*w,r[7]=c*m+h*y+f*P,r[2]=u*b+p*E+x*T,r[5]=u*_+p*I+x*w,r[8]=u*m+p*y+x*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,p=c*r-a*l,x=e*f+i*u+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/x;return t[0]=f*b,t[1]=(s*c-h*i)*b,t[2]=(o*i-s*a)*b,t[3]=u*b,t[4]=(h*e-s*l)*b,t[5]=(s*r-o*e)*b,t[6]=p*b,t[7]=(i*l-c*e)*b,t[8]=(a*e-i*r)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sc.makeScale(t,e)),this}rotate(t){return Ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sc.makeRotation(-t)),this}translate(t,e){return Ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},sc=new Jt,lu=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cu=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yp(){let n={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===me&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gn?Dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Lr]:{primaries:t,whitePoint:i,transfer:Dr,toXYZ:lu,fromXYZ:cu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:i,transfer:me,toXYZ:lu,fromXYZ:cu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),n}var le=yp();function fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var bs,_o=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{bs===void 0&&(bs=Gs("canvas")),bs.width=t.width,bs.height=t.height;let s=bs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=bs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Gs("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=fi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(fi(e[i]/255)*255):e[i]=fi(e[i]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Mp=0,qs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=ls(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(rc(s[a].image)):r.push(rc(s[a]))}else r=rc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function rc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_o.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}var Sp=0,ac=new U,en=class n extends Bn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=vn,s=vn,r=Ke,a=Ni,o=Dn,l=pn,c=n.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=ls(),this.name="",this.source=new qs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ac).x}get height(){return this.source.getSize(ac).y}get depth(){return this.source.getSize(ac).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vs:t.x=t.x-Math.floor(t.x);break;case vn:t.x=t.x<0?0:1;break;case mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vs:t.y=t.y-Math.floor(t.y);break;case vn:t.y=t.y<0?0:1;break;case mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=$c;en.DEFAULT_ANISOTROPY=1;var Re=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],p=l[5],x=l[9],b=l[2],_=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-b)<.01&&Math.abs(x-_)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+b)<.1&&Math.abs(x+_)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(c+1)/2,y=(p+1)/2,T=(m+1)/2,w=(h+u)/4,P=(f+b)/4,d=(x+_)/4;return I>y&&I>T?I<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(I),s=w/i,r=P/i):y>T?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=w/s,r=d/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=P/r,s=d/r),this.set(i,s,r,e),this}let E=Math.sqrt((_-x)*(_-x)+(f-b)*(f-b)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(_-x)/E,this.y=(f-b)/E,this.z=(u-h)/E,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xo=class extends Bn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new en(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new qs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},fn=class extends xo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Nr=class extends en{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var vo=class extends en{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ge=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,o,l,c,h,f,u,p,x,b,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,f,u,p,x,b,_)}set(t,e,i,s,r,a,o,l,c,h,f,u,p,x,b,_){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=p,m[7]=x,m[11]=b,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Es.setFromMatrixColumn(t,0).length(),r=1/Es.setFromMatrixColumn(t,1).length(),a=1/Es.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,p=a*f,x=o*h,b=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=p+x*c,e[5]=u-b*c,e[9]=-o*l,e[2]=b-u*c,e[6]=x+p*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,p=l*f,x=c*h,b=c*f;e[0]=u+b*o,e[4]=x*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=p*o-x,e[6]=b+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,p=l*f,x=c*h,b=c*f;e[0]=u-b*o,e[4]=-a*f,e[8]=x+p*o,e[1]=p+x*o,e[5]=a*h,e[9]=b-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,p=a*f,x=o*h,b=o*f;e[0]=l*h,e[4]=x*c-p,e[8]=u*c+b,e[1]=l*f,e[5]=b*c+u,e[9]=p*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,p=a*c,x=o*l,b=o*c;e[0]=l*h,e[4]=b-u*f,e[8]=x*f+p,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*f+x,e[10]=u-b*f}else if(t.order==="XZY"){let u=a*l,p=a*c,x=o*l,b=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+b,e[5]=a*h,e[9]=p*f-x,e[2]=x*f-p,e[6]=o*h,e[10]=b*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bp,t,Ep)}lookAt(t,e,i){let s=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),_i.crossVectors(i,gn),_i.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),_i.crossVectors(i,gn)),_i.normalize(),Fa.crossVectors(gn,_i),s[0]=_i.x,s[4]=Fa.x,s[8]=gn.x,s[1]=_i.y,s[5]=Fa.y,s[9]=gn.y,s[2]=_i.z,s[6]=Fa.z,s[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],p=i[13],x=i[2],b=i[6],_=i[10],m=i[14],E=i[3],I=i[7],y=i[11],T=i[15],w=s[0],P=s[4],d=s[8],A=s[12],L=s[1],z=s[5],H=s[9],G=s[13],D=s[2],W=s[6],q=s[10],$=s[14],rt=s[3],et=s[7],at=s[11],ct=s[15];return r[0]=a*w+o*L+l*D+c*rt,r[4]=a*P+o*z+l*W+c*et,r[8]=a*d+o*H+l*q+c*at,r[12]=a*A+o*G+l*$+c*ct,r[1]=h*w+f*L+u*D+p*rt,r[5]=h*P+f*z+u*W+p*et,r[9]=h*d+f*H+u*q+p*at,r[13]=h*A+f*G+u*$+p*ct,r[2]=x*w+b*L+_*D+m*rt,r[6]=x*P+b*z+_*W+m*et,r[10]=x*d+b*H+_*q+m*at,r[14]=x*A+b*G+_*$+m*ct,r[3]=E*w+I*L+y*D+T*rt,r[7]=E*P+I*z+y*W+T*et,r[11]=E*d+I*H+y*q+T*at,r[15]=E*A+I*G+y*$+T*ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],p=t[14],x=t[3],b=t[7],_=t[11],m=t[15],E=l*p-c*u,I=o*p-c*f,y=o*u-l*f,T=a*p-c*h,w=a*u-l*h,P=a*f-o*h;return e*(b*E-_*I+m*y)-i*(x*E-_*T+m*w)+s*(x*I-b*T+m*P)-r*(x*y-b*w+_*P)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],p=t[11],x=t[12],b=t[13],_=t[14],m=t[15],E=e*o-i*a,I=e*l-s*a,y=e*c-r*a,T=i*l-s*o,w=i*c-r*o,P=s*c-r*l,d=h*b-f*x,A=h*_-u*x,L=h*m-p*x,z=f*_-u*b,H=f*m-p*b,G=u*m-p*_,D=E*G-I*H+y*z+T*L-w*A+P*d;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/D;return t[0]=(o*G-l*H+c*z)*W,t[1]=(s*H-i*G-r*z)*W,t[2]=(b*P-_*w+m*T)*W,t[3]=(u*w-f*P-p*T)*W,t[4]=(l*L-a*G-c*A)*W,t[5]=(e*G-s*L+r*A)*W,t[6]=(_*y-x*P-m*I)*W,t[7]=(h*P-u*y+p*I)*W,t[8]=(a*H-o*L+c*d)*W,t[9]=(i*L-e*H-r*d)*W,t[10]=(x*w-b*y+m*E)*W,t[11]=(f*y-h*w-p*E)*W,t[12]=(o*A-a*z-l*d)*W,t[13]=(e*z-i*A+s*d)*W,t[14]=(b*I-x*T-_*E)*W,t[15]=(h*T-f*I+u*E)*W,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,p=r*h,x=r*f,b=a*h,_=a*f,m=o*f,E=l*c,I=l*h,y=l*f,T=i.x,w=i.y,P=i.z;return s[0]=(1-(b+m))*T,s[1]=(p+y)*T,s[2]=(x-I)*T,s[3]=0,s[4]=(p-y)*w,s[5]=(1-(u+m))*w,s[6]=(_+E)*w,s[7]=0,s[8]=(x+I)*P,s[9]=(_-E)*P,s[10]=(1-(u+b))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Es.set(s[0],s[1],s[2]).length(),o=Es.set(s[4],s[5],s[6]).length(),l=Es.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Nn.copy(this);let c=1/a,h=1/o,f=1/l;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=f,Nn.elements[9]*=f,Nn.elements[10]*=f,e.setFromRotationMatrix(Nn),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=On,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),p=(i+s)/(i-s),x,b;if(l)x=r/(a-r),b=a*r/(a-r);else if(o===On)x=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Hs)x=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=On,l=!1){let c=this.elements,h=2/(e-t),f=2/(i-s),u=-(e+t)/(e-t),p=-(i+s)/(i-s),x,b;if(l)x=1/(a-r),b=a/(a-r);else if(o===On)x=-2/(a-r),b=-(a+r)/(a-r);else if(o===Hs)x=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Es=new U,Nn=new ge,bp=new U(0,0,0),Ep=new U(1,1,1),_i=new U,Fa=new U,gn=new U,hu=new ge,uu=new yn,zn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return hu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uu.setFromEuler(this),this.setFromQuaternion(uu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var Ys=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tp=0,du=new U,Ts=new yn,li=new ge,Oa=new U,yr=new U,wp=new U,Ap=new yn,fu=new U(1,0,0),pu=new U(0,1,0),mu=new U(0,0,1),gu={type:"added"},Rp={type:"removed"},ws={type:"childadded",child:null},oc={type:"childremoved",child:null},nn=class n extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new U,e=new zn,i=new yn,s=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new Jt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(fu,t)}rotateY(t){return this.rotateOnAxis(pu,t)}rotateZ(t){return this.rotateOnAxis(mu,t)}translateOnAxis(t,e){return du.copy(t).applyQuaternion(this.quaternion),this.position.add(du.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fu,t)}translateY(t){return this.translateOnAxis(pu,t)}translateZ(t){return this.translateOnAxis(mu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Oa.copy(t):Oa.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(yr,Oa,this.up):li.lookAt(Oa,yr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(li),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gu),ws.child=t,this.dispatchEvent(ws),ws.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rp),oc.child=t,this.dispatchEvent(oc),oc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gu),ws.child=t,this.dispatchEvent(ws),ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,t,wp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,Ap,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),p=a(t.animations),x=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};nn.DEFAULT_UP=new U(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $e=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cp={type:"move"},Zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let b of t.hand.values()){let _=e.getJointPose(b,i),m=this._getHandJoint(c,b);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&u>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new $e;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function lc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Yt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=le.workingColorSpace){if(t=rh(t,1),e=ee(e,0,1),i=ee(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=lc(a,r,t+1/3),this.g=lc(a,r,t),this.b=lc(a,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=Xe){function i(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){let i=Sd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return le.workingToColorSpace(tn.copy(this),t),Math.round(ee(tn.r*255,0,255))*65536+Math.round(ee(tn.g*255,0,255))*256+Math.round(ee(tn.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(tn.copy(this),e);let i=tn.r,s=tn.g,r=tn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=Xe){le.workingToColorSpace(tn.copy(this),t);let e=tn.r,i=tn.g,s=tn.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(Ba);let i=Rr(xi.h,Ba.h,e),s=Rr(xi.s,Ba.s,e),r=Rr(xi.l,Ba.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new Yt;Yt.NAMES=Sd;var Ur=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},$i=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Un=new U,ci=new U,cc=new U,hi=new U,As=new U,Rs=new U,_u=new U,hc=new U,uc=new U,dc=new U,fc=new Re,pc=new Re,mc=new Re,Si=class n{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Un.subVectors(t,e),s.cross(Un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Un.subVectors(s,e),ci.subVectors(i,e),cc.subVectors(t,e);let a=Un.dot(Un),o=Un.dot(ci),l=Un.dot(cc),c=ci.dot(ci),h=ci.dot(cc),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,p=(c*l-o*h)*u,x=(a*h-o*l)*u;return r.set(1-p-x,x,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(a,hi.y),l.addScaledVector(o,hi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return fc.setScalar(0),pc.setScalar(0),mc.setScalar(0),fc.fromBufferAttribute(t,e),pc.fromBufferAttribute(t,i),mc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(fc,r.x),a.addScaledVector(pc,r.y),a.addScaledVector(mc,r.z),a}static isFrontFacing(t,e,i,s){return Un.subVectors(i,e),ci.subVectors(t,e),Un.cross(ci).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Un.cross(ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;As.subVectors(s,i),Rs.subVectors(r,i),hc.subVectors(t,i);let l=As.dot(hc),c=Rs.dot(hc);if(l<=0&&c<=0)return e.copy(i);uc.subVectors(t,s);let h=As.dot(uc),f=Rs.dot(uc);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(As,a);dc.subVectors(t,r);let p=As.dot(dc),x=Rs.dot(dc);if(x>=0&&p<=x)return e.copy(r);let b=p*c-l*x;if(b<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(i).addScaledVector(Rs,o);let _=h*x-p*f;if(_<=0&&f-h>=0&&p-x>=0)return _u.subVectors(r,s),o=(f-h)/(f-h+(p-x)),e.copy(s).addScaledVector(_u,o);let m=1/(_+b+u);return a=b*m,o=u*m,e.copy(i).addScaledVector(As,a).addScaledVector(Rs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$n=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Fn):Fn.fromBufferAttribute(r,a),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),za.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),za.copy(i.boundingBox)),za.applyMatrix4(t.matrixWorld),this.union(za)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),ka.subVectors(this.max,Mr),Cs.subVectors(t.a,Mr),Ps.subVectors(t.b,Mr),Is.subVectors(t.c,Mr),vi.subVectors(Ps,Cs),yi.subVectors(Is,Ps),Xi.subVectors(Cs,Is);let e=[0,-vi.z,vi.y,0,-yi.z,yi.y,0,-Xi.z,Xi.y,vi.z,0,-vi.x,yi.z,0,-yi.x,Xi.z,0,-Xi.x,-vi.y,vi.x,0,-yi.y,yi.x,0,-Xi.y,Xi.x,0];return!gc(e,Cs,Ps,Is,ka)||(e=[1,0,0,0,1,0,0,0,1],!gc(e,Cs,Ps,Is,ka))?!1:(Va.crossVectors(vi,yi),e=[Va.x,Va.y,Va.z],gc(e,Cs,Ps,Is,ka))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ui=[new U,new U,new U,new U,new U,new U,new U,new U],Fn=new U,za=new $n,Cs=new U,Ps=new U,Is=new U,vi=new U,yi=new U,Xi=new U,Mr=new U,ka=new U,Va=new U,qi=new U;function gc(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){qi.fromArray(n,r);let o=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),l=t.dot(qi),c=e.dot(qi),h=i.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Fe=new U,Ha=new pt,Pp=0,cn=class extends Bn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=_d,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ha.fromBufferAttribute(this,e),Ha.applyMatrix3(t),this.setXY(e,Ha.x,Ha.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Bs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ln(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bs(e,this.array)),e}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bs(e,this.array)),e}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bs(e,this.array)),e}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),i=ln(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),i=ln(i,this.array),s=ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),i=ln(i,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Fr=class extends cn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Or=class extends cn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var de=class extends cn{constructor(t,e,i){super(new Float32Array(t),e,i)}},Ip=new $n,Sr=new U,_c=new U,bi=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Ip.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);let e=Sr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Sr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_c.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(_c)),this.expandByPoint(Sr.copy(t.center).sub(_c))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Lp=0,Cn=new ge,xc=new nn,Ls=new U,_n=new $n,br=new $n,We=new U,Oe=class n extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(np(t)?Or:Fr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,i){return Cn.makeTranslation(t,e,i),this.applyMatrix4(Cn),this}scale(t,e,i){return Cn.makeScale(t,e,i),this.applyMatrix4(Cn),this}lookAt(t){return xc.lookAt(t),xc.updateMatrix(),this.applyMatrix4(xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let i=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];br.setFromBufferAttribute(o),this.morphTargetsRelative?(We.addVectors(_n.min,br.min),_n.expandByPoint(We),We.addVectors(_n.max,br.max),_n.expandByPoint(We)):(_n.expandByPoint(br.min),_n.expandByPoint(br.max))}_n.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)We.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(We));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)We.fromBufferAttribute(o,c),l&&(Ls.fromBufferAttribute(t,c),We.add(Ls)),s=Math.max(s,i.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new cn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let d=0;d<i.count;d++)o[d]=new U,l[d]=new U;let c=new U,h=new U,f=new U,u=new pt,p=new pt,x=new pt,b=new U,_=new U;function m(d,A,L){c.fromBufferAttribute(i,d),h.fromBufferAttribute(i,A),f.fromBufferAttribute(i,L),u.fromBufferAttribute(r,d),p.fromBufferAttribute(r,A),x.fromBufferAttribute(r,L),h.sub(c),f.sub(c),p.sub(u),x.sub(u);let z=1/(p.x*x.y-x.x*p.y);isFinite(z)&&(b.copy(h).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(z),_.copy(f).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(z),o[d].add(b),o[A].add(b),o[L].add(b),l[d].add(_),l[A].add(_),l[L].add(_))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let d=0,A=E.length;d<A;++d){let L=E[d],z=L.start,H=L.count;for(let G=z,D=z+H;G<D;G+=3)m(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let I=new U,y=new U,T=new U,w=new U;function P(d){T.fromBufferAttribute(s,d),w.copy(T);let A=o[d];I.copy(A),I.sub(T.multiplyScalar(T.dot(A))).normalize(),y.crossVectors(w,A);let z=y.dot(l[d])<0?-1:1;a.setXYZW(d,I.x,I.y,I.z,z)}for(let d=0,A=E.length;d<A;++d){let L=E[d],z=L.start,H=L.count;for(let G=z,D=z+H;G<D;G+=3)P(t.getX(G+0)),P(t.getX(G+1)),P(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,f=new U;if(t)for(let u=0,p=t.count;u<p;u+=3){let x=t.getX(u+0),b=t.getX(u+1),_=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,b),a.fromBufferAttribute(e,_),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,_),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),p=0,x=0;for(let b=0,_=l.length;b<_;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*h;for(let m=0;m<h;m++)u[x++]=c[p++]}return new cn(u,h,f)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],p=t(u,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let p=c[f];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var vc=new U,Dp=new U,Np=new Jt,xn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=vc.subVectors(i,e).cross(Dp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(vc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Np.getNormalMatrix(t),s=this.coplanarPoint(vc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Up=0,Kn=class extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=ar,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hc,this.blendDst=Gc,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new xn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new pt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var di=new U,yc=new U,Ga=new U,Wa=new U,Ki=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(di.copy(this.origin).addScaledVector(this.direction,e),di.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){yc.copy(t).add(e).multiplyScalar(.5),Ga.copy(e).sub(t).normalize(),Wa.copy(this.origin).sub(yc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ga),o=Wa.dot(this.direction),l=-Wa.dot(Ga),c=Wa.lengthSq(),h=Math.abs(1-a*a),f,u,p,x;if(h>0)if(f=a*l-o,u=a*o-l,x=r*h,f>=0)if(u>=-x)if(u<=x){let b=1/h;f*=b,u*=b,p=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u<=-x?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c):u<=x?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(yc).addScaledVector(Ga,u),p}intersectSphere(t,e){if(t.radius<0)return null;di.subVectors(t.center,this.origin);let i=di.dot(this.direction),s=di.dot(di)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,di)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,p=t.z-a.z,x=e.x-a.x,b=e.y-a.y,_=e.z-a.z,m=i.x-a.x,E=i.y-a.y,I=i.z-a.z,y=Math.abs(l),T=Math.abs(c),w=Math.abs(h),P,d,A,L,z,H,G,D,W,q,$,rt;if(y>=T&&y>=w?(A=l,H=f,W=x,rt=m,l>=0?(P=c,d=h,L=u,z=p,G=b,D=_,q=E,$=I):(P=h,d=c,L=p,z=u,G=_,D=b,q=I,$=E)):T>=w?(A=c,H=u,W=b,rt=E,c>=0?(P=h,d=l,L=p,z=f,G=_,D=x,q=I,$=m):(P=l,d=h,L=f,z=p,G=x,D=_,q=m,$=I)):(A=h,H=p,W=_,rt=I,h>=0?(P=l,d=c,L=f,z=u,G=x,D=b,q=m,$=E):(P=c,d=l,L=u,z=f,G=b,D=x,q=E,$=m)),A===0)return null;let et=P/A,at=d/A,ct=1/A,Nt=L-et*H,bt=z-at*H,ae=G-et*W,$t=D-at*W,qt=q-et*rt,j=$-at*rt,ot=qt*$t-j*ae,vt=Nt*j-bt*qt,Vt=ae*bt-$t*Nt;if(s){if(ot<0||vt<0||Vt<0)return null}else if((ot<0||vt<0||Vt<0)&&(ot>0||vt>0||Vt>0))return null;let wt=ot+vt+Vt;if(wt===0)return null;let kt=ct*(ot*H+vt*W+Vt*rt);return(wt>0?kt<0:kt>0)?null:this.at(kt/wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pn=class extends Kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},xu=new ge,Yi=new Ki,Xa=new bi,vu=new U,qa=new U,Ya=new U,Za=new U,Mc=new U,Ja=new U,yu=new U,$a=new U,_e=class extends nn{constructor(t=new Oe,e=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ja.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Mc.fromBufferAttribute(f,t),a?Ja.addScaledVector(Mc,h):Ja.addScaledVector(Mc.sub(e),h))}e.add(Ja)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(r),Yi.copy(t.ray).recast(t.near),!(Xa.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Xa,vu)===null||Yi.origin.distanceToSquared(vu)>(t.far-t.near)**2))&&(xu.copy(r).invert(),Yi.copy(t.ray).applyMatrix4(xu),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,b=u.length;x<b;x++){let _=u[x],m=a[_.materialIndex],E=Math.max(_.start,p.start),I=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let y=E,T=I;y<T;y+=3){let w=o.getX(y),P=o.getX(y+1),d=o.getX(y+2);s=Ka(this,m,t,i,c,h,f,w,P,d),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let _=x,m=b;_<m;_+=3){let E=o.getX(_),I=o.getX(_+1),y=o.getX(_+2);s=Ka(this,a,t,i,c,h,f,E,I,y),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,b=u.length;x<b;x++){let _=u[x],m=a[_.materialIndex],E=Math.max(_.start,p.start),I=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let y=E,T=I;y<T;y+=3){let w=y,P=y+1,d=y+2;s=Ka(this,m,t,i,c,h,f,w,P,d),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let _=x,m=b;_<m;_+=3){let E=_,I=_+1,y=_+2;s=Ka(this,a,t,i,c,h,f,E,I,y),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function Fp(n,t,e,i,s,r,a,o){let l;if(t.side===hn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Li,o),l===null)return null;$a.copy(o),$a.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo($a);return c<e.near||c>e.far?null:{distance:c,point:$a.clone(),object:n}}function Ka(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,qa),n.getVertexPosition(l,Ya),n.getVertexPosition(c,Za);let h=Fp(n,t,e,i,qa,Ya,Za,yu);if(h){let f=new U;Si.getBarycoord(yu,qa,Ya,Za,f),s&&(h.uv=Si.getInterpolatedAttribute(s,o,l,c,f,new pt)),r&&(h.uv1=Si.getInterpolatedAttribute(r,o,l,c,f,new pt)),a&&(h.normal=Si.getInterpolatedAttribute(a,o,l,c,f,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new U,materialIndex:0};Si.getNormal(qa,Ya,Za,u.normal),h.face=u,h.barycoord=f}return h}var Br=class extends en{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Ye,h=Ye,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Js=class extends cn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ds=new ge,Mu=new ge,ja=[],Su=new $n,Op=new ge,Er=new _e,Tr=new bi,zr=class extends _e{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Js(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Op)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ds),Su.copy(t.boundingBox).applyMatrix4(Ds),this.boundingBox.union(Su)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ds),Tr.copy(t.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(Tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tr.copy(this.boundingSphere),Tr.applyMatrix4(i),t.ray.intersectsSphere(Tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ds),Mu.multiplyMatrices(i,Ds),Er.matrixWorld=Mu,Er.raycast(t,ja);for(let a=0,o=ja.length;a<o;a++){let l=ja[a];l.instanceId=r,l.object=this,e.push(l)}ja.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Js(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Br(new Float32Array(s*this.count),s,this.count,$o,Ln));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Zi=new bi,Bp=new pt(.5,.5),Qa=new U,$s=class{constructor(t=new xn,e=new xn,i=new xn,s=new xn,r=new xn,a=new xn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=On,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],p=r[7],x=r[8],b=r[9],_=r[10],m=r[11],E=r[12],I=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-a,p-h,m-x,T-E).normalize(),s[1].setComponents(c+a,p+h,m+x,T+E).normalize(),s[2].setComponents(c+o,p+f,m+b,T+I).normalize(),s[3].setComponents(c-o,p-f,m-b,T-I).normalize(),i)s[4].setComponents(l,u,_,y).normalize(),s[5].setComponents(c-l,p-u,m-_,T-y).normalize();else if(s[4].setComponents(c-l,p-u,m-_,T-y).normalize(),e===On)s[5].setComponents(c+l,p+u,m+_,T+y).normalize();else if(e===Hs)s[5].setComponents(l,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(t){Zi.center.set(0,0,0);let e=Bp.distanceTo(t.center);return Zi.radius=.7071067811865476+e,Zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Qa.x=s.normal.x>0?t.max.x:t.min.x,Qa.y=s.normal.y>0?t.max.y:t.min.y,Qa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var kr=class extends en{constructor(t=[],e=Di,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Vr=class extends en{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ei=class extends en{constructor(t,e,i=Vn,s,r,a,o=Ye,l=Ye,c,h=Jn,f=1){if(h!==Jn&&h!==Ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},yo=class extends Ei{constructor(t,e=Vn,i=Di,s,r,a=Ye,o=Ye,l,c=Jn){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Hr=class extends en{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Be=class n extends Oe{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,p=0;x("z","y","x",-1,-1,i,e,t,a,r,0),x("z","y","x",1,-1,i,e,-t,a,r,1),x("x","z","y",1,1,t,i,e,s,a,2),x("x","z","y",1,-1,t,i,-e,s,a,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(f,2));function x(b,_,m,E,I,y,T,w,P,d,A){let L=y/P,z=T/d,H=y/2,G=T/2,D=w/2,W=P+1,q=d+1,$=0,rt=0,et=new U;for(let at=0;at<q;at++){let ct=at*z-G;for(let Nt=0;Nt<W;Nt++){let bt=Nt*L-H;et[b]=bt*E,et[_]=ct*I,et[m]=D,c.push(et.x,et.y,et.z),et[b]=0,et[_]=0,et[m]=w>0?1:-1,h.push(et.x,et.y,et.z),f.push(Nt/P),f.push(1-at/d),$+=1}}for(let at=0;at<d;at++)for(let ct=0;ct<P;ct++){let Nt=u+ct+W*at,bt=u+ct+W*(at+1),ae=u+(ct+1)+W*(at+1),$t=u+(ct+1)+W*at;l.push(Nt,bt,$t),l.push(bt,ae,$t),rt+=6}o.addGroup(p,rt,A),p+=rt,u+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var jn=class n extends Oe{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],p=[],x=0,b=[],_=i/2,m=0;E(),a===!1&&(t>0&&I(!0),e>0&&I(!1)),this.setIndex(h),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(p,2));function E(){let y=new U,T=new U,w=0,P=(e-t)/i;for(let d=0;d<=r;d++){let A=[],L=d/r,z=L*(e-t)+t;for(let H=0;H<=s;H++){let G=H/s,D=G*l+o,W=Math.sin(D),q=Math.cos(D);T.x=z*W,T.y=-L*i+_,T.z=z*q,f.push(T.x,T.y,T.z),y.set(W,P,q).normalize(),u.push(y.x,y.y,y.z),p.push(G,1-L),A.push(x++)}b.push(A)}for(let d=0;d<s;d++)for(let A=0;A<r;A++){let L=b[A][d],z=b[A+1][d],H=b[A+1][d+1],G=b[A][d+1];(t>0||A!==0)&&(h.push(L,z,G),w+=3),(e>0||A!==r-1)&&(h.push(z,H,G),w+=3)}c.addGroup(m,w,0),m+=w}function I(y){let T=x,w=new pt,P=new U,d=0,A=y===!0?t:e,L=y===!0?1:-1;for(let H=1;H<=s;H++)f.push(0,_*L,0),u.push(0,L,0),p.push(.5,.5),x++;let z=x;for(let H=0;H<=s;H++){let D=H/s*l+o,W=Math.cos(D),q=Math.sin(D);P.x=A*q,P.y=_*L,P.z=A*W,f.push(P.x,P.y,P.z),u.push(0,L,0),w.x=W*.5+.5,w.y=q*.5*L+.5,p.push(w.x,w.y),x++}for(let H=0;H<s;H++){let G=T+H,D=z+H;y===!0?h.push(D,D+1,G):h.push(D+1,D,G),d+=3}c.addGroup(m,d,y===!0?1:2),m+=d}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ti=class n extends jn{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Mo=class n extends Oe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(r.slice(),3)),this.setAttribute("uv",new de(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){let I=new U,y=new U,T=new U;for(let w=0;w<e.length;w+=3)p(e[w+0],I),p(e[w+1],y),p(e[w+2],T),l(I,y,T,E)}function l(E,I,y,T){let w=T+1,P=[];for(let d=0;d<=w;d++){P[d]=[];let A=E.clone().lerp(y,d/w),L=I.clone().lerp(y,d/w),z=w-d;for(let H=0;H<=z;H++)H===0&&d===w?P[d][H]=A:P[d][H]=A.clone().lerp(L,H/z)}for(let d=0;d<w;d++)for(let A=0;A<2*(w-d)-1;A++){let L=Math.floor(A/2);A%2===0?(u(P[d][L+1]),u(P[d+1][L]),u(P[d][L])):(u(P[d][L+1]),u(P[d+1][L+1]),u(P[d+1][L]))}}function c(E){let I=new U;for(let y=0;y<r.length;y+=3)I.x=r[y+0],I.y=r[y+1],I.z=r[y+2],I.normalize().multiplyScalar(E),r[y+0]=I.x,r[y+1]=I.y,r[y+2]=I.z}function h(){let E=new U;for(let I=0;I<r.length;I+=3){E.x=r[I+0],E.y=r[I+1],E.z=r[I+2];let y=_(E)/2/Math.PI+.5,T=m(E)/Math.PI+.5;a.push(y,1-T)}x(),f()}function f(){for(let E=0;E<a.length;E+=6){let I=a[E+0],y=a[E+2],T=a[E+4],w=Math.max(I,y,T),P=Math.min(I,y,T);w>.9&&P<.1&&(I<.2&&(a[E+0]+=1),y<.2&&(a[E+2]+=1),T<.2&&(a[E+4]+=1))}}function u(E){r.push(E.x,E.y,E.z)}function p(E,I){let y=E*3;I.x=t[y+0],I.y=t[y+1],I.z=t[y+2]}function x(){let E=new U,I=new U,y=new U,T=new U,w=new pt,P=new pt,d=new pt;for(let A=0,L=0;A<r.length;A+=9,L+=6){E.set(r[A+0],r[A+1],r[A+2]),I.set(r[A+3],r[A+4],r[A+5]),y.set(r[A+6],r[A+7],r[A+8]),w.set(a[L+0],a[L+1]),P.set(a[L+2],a[L+3]),d.set(a[L+4],a[L+5]),T.copy(E).add(I).add(y).divideScalar(3);let z=_(T);b(w,L+0,E,z),b(P,L+2,I,z),b(d,L+4,y,z)}}function b(E,I,y,T){T<0&&E.x===1&&(a[I]=E.x-1),y.x===0&&y.z===0&&(a[I]=T/2/Math.PI+.5)}function _(E){return Math.atan2(E.z,-E.x)}function m(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,p=(a-h)/u;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new pt:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new U,s=[],r=[],a=[],o=new U,l=new ge;for(let p=0;p<=t;p++){let x=p/t;s[p]=this.getTangentAt(x,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(ee(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,x))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(ee(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],p*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ks=class extends Mn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new pt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*f+this.aX,c=u*f+p*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},So=class extends Ks{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ah(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,p*=h,s(a,o,u,p)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var bu=new U,Eu=new U,Sc=new ah,bc=new ah,Ec=new ah,bo=class extends Mn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new U){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Eu.subVectors(s[0],s[1]).add(s[0]),c=Eu);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(bu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=bu),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(f),p),b=Math.pow(f.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(h),p);b<1e-4&&(b=1),x<1e-4&&(x=b),_<1e-4&&(_=b),Sc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,x,b,_),bc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,x,b,_),Ec.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,x,b,_)}else this.curveType==="catmullrom"&&(Sc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),bc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Ec.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(Sc.calc(l),bc.calc(l),Ec.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Tu(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function zp(n,t){let e=1-n;return e*e*t}function kp(n,t){return 2*(1-n)*n*t}function Vp(n,t){return n*n*t}function Cr(n,t,e,i){return zp(n,t)+kp(n,e)+Vp(n,i)}function Hp(n,t){let e=1-n;return e*e*e*t}function Gp(n,t){let e=1-n;return 3*e*e*n*t}function Wp(n,t){return 3*(1-n)*n*n*t}function Xp(n,t){return n*n*n*t}function Pr(n,t,e,i,s){return Hp(n,t)+Gp(n,e)+Wp(n,i)+Xp(n,s)}var Gr=class extends Mn{constructor(t=new pt,e=new pt,i=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new pt){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Pr(t,s.x,r.x,a.x,o.x),Pr(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Eo=class extends Mn{constructor(t=new U,e=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new U){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Pr(t,s.x,r.x,a.x,o.x),Pr(t,s.y,r.y,a.y,o.y),Pr(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wr=class extends Mn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},To=class extends Mn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xr=class extends Mn{constructor(t=new pt,e=new pt,i=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new pt){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Cr(t,s.x,r.x,a.x),Cr(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wo=class extends Mn{constructor(t=new U,e=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new U){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Cr(t,s.x,r.x,a.x),Cr(t,s.y,r.y,a.y),Cr(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qr=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(Tu(o,l.x,c.x,h.x,f.x),Tu(o,l.y,c.y,h.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new pt().fromArray(s))}return this}},Ic=Object.freeze({__proto__:null,ArcCurve:So,CatmullRomCurve3:bo,CubicBezierCurve:Gr,CubicBezierCurve3:Eo,EllipseCurve:Ks,LineCurve:Wr,LineCurve3:To,QuadraticBezierCurve:Xr,QuadraticBezierCurve3:wo,SplineCurve:qr}),Ao=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ic[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Ic[s.type]().fromJSON(s))}return this}},Yr=class extends Ao{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Wr(this.currentPoint.clone(),new pt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Xr(this.currentPoint.clone(),new pt(t,e),new pt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new Gr(this.currentPoint.clone(),new pt(t,e),new pt(i,s),new pt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new qr(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new Ks(t,e,i,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ji=class extends Yr{constructor(t){super(t),this.uuid=ls(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Yr().fromJSON(s))}return this}};function qp(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=bd(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Kp(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let h=o,f=l;for(let u=e;u<s;u+=e){let p=n[u],x=n[u+1];p<o&&(o=p),x<l&&(l=x),p>h&&(h=p),x>f&&(f=x)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Zr(r,a,e,o,l,c,0),a}function bd(n,t,e,i,s){let r;if(s===lm(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=wu(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=wu(a/i|0,n[a],n[a+1],r);return r&&js(r,r.next)&&($r(r),r=r.next),r}function Qi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(js(e,e.next)||Pe(e.prev,e,e.next)===0)){if($r(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Zr(n,t,e,i,s,r,a){if(!n)return;!a&&r&&nm(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Zp(n,i,s,r):Yp(n)){t.push(l.i,n.i,c.i),$r(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Jp(Qi(n),t),Zr(n,t,e,i,s,r,2)):a===2&&$p(n,t,e,i,s,r):Zr(Qi(n),t,e,i,s,r,1);break}}}function Yp(n){let t=n.prev,e=n,i=n.next;if(Pe(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),p=Math.max(o,l,c),x=i.next;for(;x!==t;){if(x.x>=h&&x.x<=u&&x.y>=f&&x.y<=p&&wr(s,o,r,l,a,c,x.x,x.y)&&Pe(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Zp(n,t,e,i){let s=n.prev,r=n,a=n.next;if(Pe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,p=Math.min(o,l,c),x=Math.min(h,f,u),b=Math.max(o,l,c),_=Math.max(h,f,u),m=Lc(p,x,t,e,i),E=Lc(b,_,t,e,i),I=n.prevZ,y=n.nextZ;for(;I&&I.z>=m&&y&&y.z<=E;){if(I.x>=p&&I.x<=b&&I.y>=x&&I.y<=_&&I!==s&&I!==a&&wr(o,h,l,f,c,u,I.x,I.y)&&Pe(I.prev,I,I.next)>=0||(I=I.prevZ,y.x>=p&&y.x<=b&&y.y>=x&&y.y<=_&&y!==s&&y!==a&&wr(o,h,l,f,c,u,y.x,y.y)&&Pe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;I&&I.z>=m;){if(I.x>=p&&I.x<=b&&I.y>=x&&I.y<=_&&I!==s&&I!==a&&wr(o,h,l,f,c,u,I.x,I.y)&&Pe(I.prev,I,I.next)>=0)return!1;I=I.prevZ}for(;y&&y.z<=E;){if(y.x>=p&&y.x<=b&&y.y>=x&&y.y<=_&&y!==s&&y!==a&&wr(o,h,l,f,c,u,y.x,y.y)&&Pe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Jp(n,t){let e=n;do{let i=e.prev,s=e.next.next;!js(i,s)&&Td(i,e,e.next,s)&&Jr(i,s)&&Jr(s,i)&&(t.push(i.i,e.i,s.i),$r(e),$r(e.next),e=n=s),e=e.next}while(e!==n);return Qi(e)}function $p(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&rm(a,o)){let l=wd(a,o);a=Qi(a,a.next),l=Qi(l,l.next),Zr(a,t,e,i,s,r,0),Zr(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Kp(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=bd(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(sm(c))}s.sort(jp);for(let r=0;r<s.length;r++)e=Qp(s[r],e);return e}function jp(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Qp(n,t){let e=tm(n,t);if(!e)return t;let i=wd(e,n);return Qi(i,i.next),Qi(e,e.next)}function tm(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(js(n,e))return e;do{if(js(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Ed(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let f=Math.abs(s-e.y)/(i-e.x);Jr(e,n)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&em(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function em(n,t){return Pe(n.prev,n,t.prev)<0&&Pe(t.next,n,n.next)<0}function nm(n,t,e,i){let s=n;do s.z===0&&(s.z=Lc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,im(s)}function im(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function Lc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function sm(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ed(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function wr(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&Ed(n,t,e,i,s,r,a,o)}function rm(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!am(n,t)&&(Jr(n,t)&&Jr(t,n)&&om(n,t)&&(Pe(n.prev,n,t.prev)||Pe(n,t.prev,t))||js(n,t)&&Pe(n.prev,n,n.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function js(n,t){return n.x===t.x&&n.y===t.y}function Td(n,t,e,i){let s=eo(Pe(n,t,e)),r=eo(Pe(n,t,i)),a=eo(Pe(e,i,n)),o=eo(Pe(e,i,t));return!!(s!==r&&a!==o||s===0&&to(n,e,t)||r===0&&to(n,i,t)||a===0&&to(e,n,i)||o===0&&to(e,t,i))}function to(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function eo(n){return n>0?1:n<0?-1:0}function am(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Td(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Jr(n,t){return Pe(n.prev,n,n.next)<0?Pe(n,t,n.next)>=0&&Pe(n,n.prev,t)>=0:Pe(n,t,n.prev)<0||Pe(n,n.next,t)<0}function om(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function wd(n,t){let e=Dc(n.i,n.x,n.y),i=Dc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function wu(n,t,e,i){let s=Dc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function $r(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Dc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lm(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Nc=class{static triangulate(t,e,i=2){return qp(t,e,i)}},Zn=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Au(t),Ru(i,t);let a=t.length;e.forEach(Au);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Ru(i,e[l]);let o=Nc.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Au(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Ru(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Kr=class n extends Oe{constructor(t=new ji([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new de(s,3)),this.setAttribute("uv",new de(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:p-.1,b=e.bevelOffset!==void 0?e.bevelOffset:0,_=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:cm,I,y=!1,T,w,P,d;if(m){I=m.getSpacedPoints(h),y=!0,u=!1;let it=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(h,it),w=new U,P=new U,d=new U}u||(_=0,p=0,x=0,b=0);let A=o.extractPoints(c),L=A.shape,z=A.holes;if(!Zn.isClockWise(L)){L=L.reverse();for(let it=0,ut=z.length;it<ut;it++){let mt=z[it];Zn.isClockWise(mt)&&(z[it]=mt.reverse())}}function G(it){let mt=10000000000000001e-36,gt=it[0];for(let _t=1;_t<=it.length;_t++){let Ut=_t%it.length,Ct=it[Ut],Bt=Ct.x-gt.x,zt=Ct.y-gt.y,F=Bt*Bt+zt*zt,ce=Math.max(Math.abs(Ct.x),Math.abs(Ct.y),Math.abs(gt.x),Math.abs(gt.y)),Qt=mt*ce*ce;if(F<=Qt){it.splice(Ut,1),_t--;continue}gt=Ct}}G(L),z.forEach(G);let D=z.length,W=L;for(let it=0;it<D;it++){let ut=z[it];L=L.concat(ut)}function q(it,ut,mt){return ut||Gt("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(ut,mt)}let $=L.length;function rt(it,ut,mt){let gt,_t,Ut,Ct=it.x-ut.x,Bt=it.y-ut.y,zt=mt.x-it.x,F=mt.y-it.y,ce=Ct*Ct+Bt*Bt,Qt=Ct*F-Bt*zt;if(Math.abs(Qt)>Number.EPSILON){let R=Math.sqrt(ce),g=Math.sqrt(zt*zt+F*F),V=ut.x-Bt/R,J=ut.y+Ct/R,tt=mt.x-F/g,ft=mt.y+zt/g,xt=((tt-V)*F-(ft-J)*zt)/(Ct*F-Bt*zt);gt=V+Ct*xt-it.x,_t=J+Bt*xt-it.y;let nt=gt*gt+_t*_t;if(nt<=2)return new pt(gt,_t);Ut=Math.sqrt(nt/2)}else{let R=!1;Ct>Number.EPSILON?zt>Number.EPSILON&&(R=!0):Ct<-Number.EPSILON?zt<-Number.EPSILON&&(R=!0):Math.sign(Bt)===Math.sign(F)&&(R=!0),R?(gt=-Bt,_t=Ct,Ut=Math.sqrt(ce)):(gt=Ct,_t=Bt,Ut=Math.sqrt(ce/2))}return new pt(gt/Ut,_t/Ut)}let et=[];for(let it=0,ut=W.length,mt=ut-1,gt=it+1;it<ut;it++,mt++,gt++)mt===ut&&(mt=0),gt===ut&&(gt=0),et[it]=rt(W[it],W[mt],W[gt]);let at=[],ct,Nt=et.concat();for(let it=0,ut=D;it<ut;it++){let mt=z[it];ct=[];for(let gt=0,_t=mt.length,Ut=_t-1,Ct=gt+1;gt<_t;gt++,Ut++,Ct++)Ut===_t&&(Ut=0),Ct===_t&&(Ct=0),ct[gt]=rt(mt[gt],mt[Ut],mt[Ct]);at.push(ct),Nt=Nt.concat(ct)}let bt;if(_===0)bt=Zn.triangulateShape(W,z);else{let it=[],ut=[];for(let mt=0;mt<_;mt++){let gt=mt/_,_t=p*Math.cos(gt*Math.PI/2),Ut=x*Math.sin(gt*Math.PI/2)+b;for(let Ct=0,Bt=W.length;Ct<Bt;Ct++){let zt=q(W[Ct],et[Ct],Ut);vt(zt.x,zt.y,-_t),gt===0&&it.push(zt)}for(let Ct=0,Bt=D;Ct<Bt;Ct++){let zt=z[Ct];ct=at[Ct];let F=[];for(let ce=0,Qt=zt.length;ce<Qt;ce++){let R=q(zt[ce],ct[ce],Ut);vt(R.x,R.y,-_t),gt===0&&F.push(R)}gt===0&&ut.push(F)}}bt=Zn.triangulateShape(it,ut)}let ae=bt.length,$t=x+b;for(let it=0;it<$;it++){let ut=u?q(L[it],Nt[it],$t):L[it];y?(P.copy(T.normals[0]).multiplyScalar(ut.x),w.copy(T.binormals[0]).multiplyScalar(ut.y),d.copy(I[0]).add(P).add(w),vt(d.x,d.y,d.z)):vt(ut.x,ut.y,0)}for(let it=1;it<=h;it++)for(let ut=0;ut<$;ut++){let mt=u?q(L[ut],Nt[ut],$t):L[ut];y?(P.copy(T.normals[it]).multiplyScalar(mt.x),w.copy(T.binormals[it]).multiplyScalar(mt.y),d.copy(I[it]).add(P).add(w),vt(d.x,d.y,d.z)):vt(mt.x,mt.y,f/h*it)}for(let it=_-1;it>=0;it--){let ut=it/_,mt=p*Math.cos(ut*Math.PI/2),gt=x*Math.sin(ut*Math.PI/2)+b;for(let _t=0,Ut=W.length;_t<Ut;_t++){let Ct=q(W[_t],et[_t],gt);vt(Ct.x,Ct.y,f+mt)}for(let _t=0,Ut=z.length;_t<Ut;_t++){let Ct=z[_t];ct=at[_t];for(let Bt=0,zt=Ct.length;Bt<zt;Bt++){let F=q(Ct[Bt],ct[Bt],gt);y?vt(F.x,F.y+I[h-1].y,I[h-1].x+mt):vt(F.x,F.y,f+mt)}}}qt(),j();function qt(){let it=s.length/3;if(u){let ut=0,mt=$*ut;for(let gt=0;gt<ae;gt++){let _t=bt[gt];Vt(_t[2]+mt,_t[1]+mt,_t[0]+mt)}ut=h+_*2,mt=$*ut;for(let gt=0;gt<ae;gt++){let _t=bt[gt];Vt(_t[0]+mt,_t[1]+mt,_t[2]+mt)}}else{for(let ut=0;ut<ae;ut++){let mt=bt[ut];Vt(mt[2],mt[1],mt[0])}for(let ut=0;ut<ae;ut++){let mt=bt[ut];Vt(mt[0]+$*h,mt[1]+$*h,mt[2]+$*h)}}i.addGroup(it,s.length/3-it,0)}function j(){let it=s.length/3,ut=0;ot(W,ut),ut+=W.length;for(let mt=0,gt=z.length;mt<gt;mt++){let _t=z[mt];ot(_t,ut),ut+=_t.length}i.addGroup(it,s.length/3-it,1)}function ot(it,ut){let mt=it.length;for(;--mt>=0;){let gt=mt,_t=mt-1;_t<0&&(_t=it.length-1);for(let Ut=0,Ct=h+_*2;Ut<Ct;Ut++){let Bt=$*Ut,zt=$*(Ut+1),F=ut+gt+Bt,ce=ut+_t+Bt,Qt=ut+_t+zt,R=ut+gt+zt;wt(F,ce,Qt,R)}}}function vt(it,ut,mt){l.push(it),l.push(ut),l.push(mt)}function Vt(it,ut,mt){kt(it),kt(ut),kt(mt);let gt=s.length/3,_t=E.generateTopUV(i,s,gt-3,gt-2,gt-1);oe(_t[0]),oe(_t[1]),oe(_t[2])}function wt(it,ut,mt,gt){kt(it),kt(ut),kt(gt),kt(ut),kt(mt),kt(gt);let _t=s.length/3,Ut=E.generateSideWallUV(i,s,_t-6,_t-3,_t-2,_t-1);oe(Ut[0]),oe(Ut[1]),oe(Ut[3]),oe(Ut[1]),oe(Ut[2]),oe(Ut[3])}function kt(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function oe(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return hm(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ic[s.type]().fromJSON(s)),new n(i,t.options)}},cm={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new pt(r,a),new pt(o,l),new pt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],f=t[i*3+2],u=t[s*3],p=t[s*3+1],x=t[s*3+2],b=t[r*3],_=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new pt(a,1-l),new pt(c,1-f),new pt(u,1-x),new pt(b,1-m)]:[new pt(o,1-l),new pt(h,1-f),new pt(p,1-x),new pt(_,1-m)]}};function hm(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ts=class n extends Mo{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var In=class n extends Oe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,p=[],x=[],b=[],_=[];for(let m=0;m<h;m++){let E=m*u-a;for(let I=0;I<c;I++){let y=I*f-r;x.push(y,-E,0),b.push(0,0,1),_.push(I/o),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<o;E++){let I=E+c*m,y=E+c*(m+1),T=E+1+c*(m+1),w=E+1+c*m;p.push(I,y,w),p.push(y,T,w)}this.setIndex(p),this.setAttribute("position",new de(x,3)),this.setAttribute("normal",new de(b,3)),this.setAttribute("uv",new de(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var jr=class n extends Oe{constructor(t=new ji([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new de(s,3)),this.setAttribute("normal",new de(r,3)),this.setAttribute("uv",new de(a,2));function c(h){let f=s.length/3,u=h.extractPoints(e),p=u.shape,x=u.holes;Zn.isClockWise(p)===!1&&(p=p.reverse());for(let _=0,m=x.length;_<m;_++){let E=x[_];Zn.isClockWise(E)===!0&&(x[_]=E.reverse())}let b=Zn.triangulateShape(p,x);for(let _=0,m=x.length;_<m;_++){let E=x[_];p=p.concat(E)}for(let _=0,m=p.length;_<m;_++){let E=p[_];s.push(E.x,E.y,0),r.push(0,0,1),a.push(E.x,E.y)}for(let _=0,m=b.length;_<m;_++){let E=b[_],I=E[0]+f,y=E[1]+f,T=E[2]+f;i.push(I,y,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return um(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];i.push(a)}return new n(i,t.curveSegments)}};function um(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var wi=class n extends Oe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new U,u=new U,p=[],x=[],b=[],_=[];for(let m=0;m<=i;m++){let E=[],I=m/i,y=a+I*o,T=t*Math.cos(y),w=Math.sqrt(t*t-T*T),P=0;m===0&&a===0?P=.5/e:m===i&&l===Math.PI&&(P=-.5/e);for(let d=0;d<=e;d++){let A=d/e,L=s+A*r;f.x=-w*Math.cos(L),f.y=T,f.z=w*Math.sin(L),x.push(f.x,f.y,f.z),u.copy(f).normalize(),b.push(u.x,u.y,u.z),_.push(A+P,1-I),E.push(c++)}h.push(E)}for(let m=0;m<i;m++)for(let E=0;E<e;E++){let I=h[m][E+1],y=h[m][E],T=h[m+1][E],w=h[m+1][E+1];(m!==0||a>0)&&p.push(I,y,w),(m!==i-1||l<Math.PI)&&p.push(y,T,w)}this.setIndex(p),this.setAttribute("position",new de(x,3)),this.setAttribute("normal",new de(b,3)),this.setAttribute("uv",new de(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Qr=class n extends Oe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new U,p=new U,x=new U;for(let b=0;b<=i;b++){let _=a+b/i*o;for(let m=0;m<=s;m++){let E=m/s*r;p.x=(t+e*Math.cos(_))*Math.cos(E),p.y=(t+e*Math.cos(_))*Math.sin(E),p.z=e*Math.sin(_),c.push(p.x,p.y,p.z),u.x=t*Math.cos(E),u.y=t*Math.sin(E),x.subVectors(p,u).normalize(),h.push(x.x,x.y,x.z),f.push(m/s),f.push(b/i)}}for(let b=1;b<=i;b++)for(let _=1;_<=s;_++){let m=(s+1)*b+_-1,E=(s+1)*(b-1)+_-1,I=(s+1)*(b-1)+_,y=(s+1)*b+_;l.push(m,E,y),l.push(E,I,y)}this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function cs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Cu(s))s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Cu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function sn(n){let t={};for(let e=0;e<n.length;e++){let i=cs(n[e]);for(let s in i)t[s]=i[s]}return t}function Cu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function dm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function oh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var Ad={clone:cs,merge:sn},fm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Sn=class extends Kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fm,this.fragmentShader=pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=dm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Yt().setHex(s.value);break;case"v2":this.uniforms[i].value=new pt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new U().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Re().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Jt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ge().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ro=class extends Sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qs=class extends Kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var es=class extends Kn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Yt(16777215),this.specular=new Yt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=aa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ta=class extends Kn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=aa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Co=class extends Kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Po=class extends Kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ns(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Tc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ai=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Io=class extends Ai{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rc,endingEnd:Rc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Cc:r=t,o=2*e-i;break;case Pc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Cc:a=t,l=2*i-e;break;case Pc:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,p=this._weightNext,x=(i-e)/(s-e),b=x*x,_=b*x,m=-u*_+2*u*b-u*x,E=(1+u)*_+(-1.5-2*u)*b+(-.5+u)*x+1,I=(-1-p)*_+(1.5+p)*b+.5*x,y=p*_-p*b;for(let T=0;T!==o;++T)r[T]=m*a[h+T]+E*a[c+T]+I*a[l+T]+y*a[f+T];return r}},Lo=class extends Ai{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},Do=class extends Ai{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},No=class extends Ai{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let x=(i-e)/(s-e),b=1-x;for(let _=0;_!==o;++_)r[_]=a[c+_]*b+a[l+_]*x;return r}let u=o*2,p=t-1;for(let x=0;x!==o;++x){let b=a[c+x],_=a[l+x],m=p*u+x*2,E=f[m],I=f[m+1],y=t*u+x*2,T=h[y],w=h[y+1],P=gm(i,e,E,T,s);r[x]=Rd(P,b,I,w,_)}return r}};function Rd(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function mm(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function gm(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Rd(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=mm(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var bn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ns(e,this.TimeBufferType),this.values=Ns(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ns(t.times,Array),values:Ns(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Tc(t.settings)&&(i.settings={inTangents:Ns(t.settings.inTangents,Array),outTangents:Ns(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Do(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Lo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new No(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ir:e=this.InterpolantFactoryMethodDiscrete;break;case go:e=this.InterpolantFactoryMethodLinear;break;case so:e=this.InterpolantFactoryMethodSmooth;break;case Ac:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ht("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return go;case this.InterpolantFactoryMethodSmooth:return so;case this.InterpolantFactoryMethodBezier:return Ac}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Tc(this.settings)&&(Pu(this.settings.inTangents,t),Pu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Gt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Gt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&ip(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Gt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===so,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*i,u=f-i,p=f+i;for(let x=0;x!==i;++x){let b=e[f+x];if(b!==e[u+x]||b!==e[p+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*i,u=a*i;for(let p=0;p!==i;++p)e[u+p]=e[f+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Tc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Pu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=go;var Ri=class extends bn{constructor(t,e,i){super(t,e,i)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Ir;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Uo=class extends bn{constructor(t,e,i,s){super(t,e,i,s)}};Uo.prototype.ValueTypeName="color";var Fo=class extends bn{constructor(t,e,i,s){super(t,e,i,s)}};Fo.prototype.ValueTypeName="number";var Oo=class extends Ai{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)yn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ea=class extends bn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Oo(this.times,this.values,this.getValueSize(),t)}};ea.prototype.ValueTypeName="quaternion";ea.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends bn{constructor(t,e,i){super(t,e,i)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Ir;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Bo=class extends bn{constructor(t,e,i,s){super(t,e,i,s)}};Bo.prototype.ValueTypeName="vector";var ao={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(Iu(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!Iu(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Iu(n){try{let t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var zo=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let p=c[f],x=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Cd=new zo,tr=class{constructor(t){this.manager=t!==void 0?t:Cd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};tr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Us=new WeakMap,ko=class extends tr{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=ao.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let f=Us.get(a);f===void 0&&(f=[],Us.set(a,f)),f.push({onLoad:e,onError:s})}return a}let o=Gs("img");function l(){h(),e&&e(this);let f=Us.get(this)||[];for(let u=0;u<f.length;u++){let p=f[u];p.onLoad&&p.onLoad(this)}Us.delete(this),r.manager.itemEnd(t)}function c(f){h(),s&&s(f),ao.remove(`image:${t}`);let u=Us.get(this)||[];for(let p=0;p<u.length;p++){let x=u[p];x.onError&&x.onError(f)}Us.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ao.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var na=class extends tr{constructor(t){super(t)}load(t,e,i,s){let r=new en,a=new ko(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}},er=class extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ns=class extends er{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},wc=new ge,Lu=new U,Du=new U,Vo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $s,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Lu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Lu),Du.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Du),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){wc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(wc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Hs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(wc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},no=new U,io=new yn,Yn=new U,ia=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(no,io,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(no,io,Yn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(no,io,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(no,io,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Mi=new U,Nu=new pt,Uu=new pt,qe=class extends ia{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,Nu,Uu),e.subVectors(Uu,Nu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ar*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var nr=class extends ia{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Uc=class extends Vo{constructor(){super(new nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},is=class extends er{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new Uc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},sa=class extends er{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Fs=-90,Os=1,Ho=class extends nn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qe(Fs,Os,t,e);s.layers=this.layers,this.add(s);let r=new qe(Fs,Os,t,e);r.layers=this.layers,this.add(r);let a=new qe(Fs,Os,t,e);a.layers=this.layers,this.add(a);let o=new qe(Fs,Os,t,e);o.layers=this.layers,this.add(o);let l=new qe(Fs,Os,t,e);l.layers=this.layers,this.add(l);let c=new qe(Fs,Os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===On)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Hs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,p),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Go=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var lh="\\[\\]\\.:\\/",_m=new RegExp("["+lh+"]","g"),ch="[^"+lh+"]",xm="[^"+lh.replace("\\.","")+"]",vm=/((?:WC+[\/:])*)/.source.replace("WC",ch),ym=/(WCOD+)?/.source.replace("WCOD",xm),Mm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ch),Sm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ch),bm=new RegExp("^"+vm+ym+Mm+Sm+"$"),Em=["material","materials","bones","map"],Fc=class{constructor(t,e,i){let s=i||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ae=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_m,"")}static parseTrackName(t){let e=bm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Em.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Gt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=Fc;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qv=new Float32Array(1);var Fu=new ge,ir=class{constructor(t,e,i=0,s=1/0){this.ray=new Ki(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ys,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Gt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Fu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fu),this}intersectObject(t,e=!0,i=[]){return Oc(t,this,i,e),i.sort(Ou),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Oc(t[s],this,i,e);return i.sort(Ou),i}};function Ou(n,t){return n.distance-t.distance}function Oc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Oc(r[a],t,e,!0)}}var sr=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ee(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Bc=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};var ra=class extends Bn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function hh(n,t,e,i){let s=Tm(i);switch(e){case eh:return n*t;case $o:return n*t/s.components*s.byteLength;case Ko:return n*t/s.components*s.byteLength;case Fi:return n*t*2/s.components*s.byteLength;case jo:return n*t*2/s.components*s.byteLength;case nh:return n*t*3/s.components*s.byteLength;case Dn:return n*t*4/s.components*s.byteLength;case Qo:return n*t*4/s.components*s.byteLength;case ha:case ua:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case da:case fa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case el:case il:return Math.max(n,16)*Math.max(t,8)/4;case tl:case nl:return Math.max(n,8)*Math.max(t,8)/2;case sl:case rl:case ol:case ll:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case al:case pa:case cl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ul:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case dl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case fl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case pl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ml:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case gl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case _l:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case xl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case vl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case yl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Sl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case bl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case El:case Tl:case wl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Al:case Rl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ma:case Cl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tm(n){switch(n){case pn:case Kc:return{byteLength:1,components:1};case or:case jc:case Hn:return{byteLength:2,components:1};case Zo:case Jo:return{byteLength:2,components:4};case Vn:case Yo:case Ln:return{byteLength:4,components:1};case Qc:case th:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Kd(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Lm(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((p,x)=>p.start-x.start);let u=0;for(let p=1;p<f.length;p++){let x=f[u],b=f[p];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++u,f[u]=b)}f.length=u+1;for(let p=0,x=f.length;p<x;p++){let b=f[p];n.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nm=`#ifdef USE_ALPHAHASH
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
#endif`,Um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Om=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zm=`#ifdef USE_AOMAP
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
#endif`,km=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vm=`#ifdef USE_BATCHING
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
#endif`,Hm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qm=`#ifdef USE_IRIDESCENCE
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
#endif`,Ym=`#ifdef USE_BUMPMAP
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
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ng=`#define PI 3.141592653589793
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
} // validated`,ig=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sg=`vec3 transformedNormal = objectNormal;
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
#endif`,rg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ag=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,og=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cg="gl_FragColor = linearToOutputTexel( gl_FragColor );",hg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ug=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fg=`#ifdef USE_ENVMAP
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
#endif`,pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_g=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yg=`#ifdef USE_GRADIENTMAP
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
}`,Mg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Tg=`#ifdef USE_ENVMAP
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
#endif`,wg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pg=`PhysicalMaterial material;
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
#endif`,Ig=`uniform sampler2D dfgLUT;
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
}`,Lg=`
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
#endif`,Dg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ug=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Og=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gg=`#if defined( USE_POINTS_UV )
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
#endif`,Wg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jg=`#ifdef USE_MORPHTARGETS
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
#endif`,$g=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,n0=`#ifdef USE_NORMALMAP
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
#endif`,i0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,c0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,f0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,x0=`float getShadowMask() {
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
}`,v0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y0=`#ifdef USE_SKINNING
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
#endif`,M0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S0=`#ifdef USE_SKINNING
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
#endif`,b0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,A0=`#ifdef USE_TRANSMISSION
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
#endif`,R0=`#ifdef USE_TRANSMISSION
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
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,D0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N0=`uniform sampler2D t2D;
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
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`#include <common>
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
}`,k0=`#if DEPTH_PACKING == 3200
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
}`,V0=`#define DISTANCE
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
}`,H0=`#define DISTANCE
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`uniform float scale;
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
}`,q0=`uniform vec3 diffuse;
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
}`,Y0=`#include <common>
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
}`,Z0=`uniform vec3 diffuse;
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
}`,J0=`#define LAMBERT
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
}`,$0=`#define LAMBERT
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
}`,K0=`#define MATCAP
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
}`,j0=`#define MATCAP
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
}`,Q0=`#define NORMAL
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
}`,t_=`#define NORMAL
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
}`,e_=`#define PHONG
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
}`,n_=`#define PHONG
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
}`,i_=`#define STANDARD
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
}`,s_=`#define STANDARD
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
}`,r_=`#define TOON
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
}`,a_=`#define TOON
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
}`,o_=`uniform float size;
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
}`,l_=`uniform vec3 diffuse;
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
}`,c_=`#include <common>
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
}`,h_=`uniform vec3 color;
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
}`,u_=`uniform float rotation;
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
}`,d_=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:Dm,alphahash_pars_fragment:Nm,alphamap_fragment:Um,alphamap_pars_fragment:Fm,alphatest_fragment:Om,alphatest_pars_fragment:Bm,aomap_fragment:zm,aomap_pars_fragment:km,batching_pars_vertex:Vm,batching_vertex:Hm,begin_vertex:Gm,beginnormal_vertex:Wm,bsdfs:Xm,iridescence_fragment:qm,bumpmap_pars_fragment:Ym,clipping_planes_fragment:Zm,clipping_planes_pars_fragment:Jm,clipping_planes_pars_vertex:$m,clipping_planes_vertex:Km,color_fragment:jm,color_pars_fragment:Qm,color_pars_vertex:tg,color_vertex:eg,common:ng,cube_uv_reflection_fragment:ig,defaultnormal_vertex:sg,displacementmap_pars_vertex:rg,displacementmap_vertex:ag,emissivemap_fragment:og,emissivemap_pars_fragment:lg,colorspace_fragment:cg,colorspace_pars_fragment:hg,envmap_fragment:ug,envmap_common_pars_fragment:dg,envmap_pars_fragment:fg,envmap_pars_vertex:pg,envmap_physical_pars_fragment:Tg,envmap_vertex:mg,fog_vertex:gg,fog_pars_vertex:_g,fog_fragment:xg,fog_pars_fragment:vg,gradientmap_pars_fragment:yg,lightmap_pars_fragment:Mg,lights_lambert_fragment:Sg,lights_lambert_pars_fragment:bg,lights_pars_begin:Eg,lights_toon_fragment:wg,lights_toon_pars_fragment:Ag,lights_phong_fragment:Rg,lights_phong_pars_fragment:Cg,lights_physical_fragment:Pg,lights_physical_pars_fragment:Ig,lights_fragment_begin:Lg,lights_fragment_maps:Dg,lights_fragment_end:Ng,lightprobes_pars_fragment:Ug,logdepthbuf_fragment:Fg,logdepthbuf_pars_fragment:Og,logdepthbuf_pars_vertex:Bg,logdepthbuf_vertex:zg,map_fragment:kg,map_pars_fragment:Vg,map_particle_fragment:Hg,map_particle_pars_fragment:Gg,metalnessmap_fragment:Wg,metalnessmap_pars_fragment:Xg,morphinstance_vertex:qg,morphcolor_vertex:Yg,morphnormal_vertex:Zg,morphtarget_pars_vertex:Jg,morphtarget_vertex:$g,normal_fragment_begin:Kg,normal_fragment_maps:jg,normal_pars_fragment:Qg,normal_pars_vertex:t0,normal_vertex:e0,normalmap_pars_fragment:n0,clearcoat_normal_fragment_begin:i0,clearcoat_normal_fragment_maps:s0,clearcoat_pars_fragment:r0,iridescence_pars_fragment:a0,opaque_fragment:o0,packing:l0,premultiplied_alpha_fragment:c0,project_vertex:h0,dithering_fragment:u0,dithering_pars_fragment:d0,roughnessmap_fragment:f0,roughnessmap_pars_fragment:p0,shadowmap_pars_fragment:m0,shadowmap_pars_vertex:g0,shadowmap_vertex:_0,shadowmask_pars_fragment:x0,skinbase_vertex:v0,skinning_pars_vertex:y0,skinning_vertex:M0,skinnormal_vertex:S0,specularmap_fragment:b0,specularmap_pars_fragment:E0,tonemapping_fragment:T0,tonemapping_pars_fragment:w0,transmission_fragment:A0,transmission_pars_fragment:R0,uv_pars_fragment:C0,uv_pars_vertex:P0,uv_vertex:I0,worldpos_vertex:L0,background_vert:D0,background_frag:N0,backgroundCube_vert:U0,backgroundCube_frag:F0,cube_vert:O0,cube_frag:B0,depth_vert:z0,depth_frag:k0,distance_vert:V0,distance_frag:H0,equirect_vert:G0,equirect_frag:W0,linedashed_vert:X0,linedashed_frag:q0,meshbasic_vert:Y0,meshbasic_frag:Z0,meshlambert_vert:J0,meshlambert_frag:$0,meshmatcap_vert:K0,meshmatcap_frag:j0,meshnormal_vert:Q0,meshnormal_frag:t_,meshphong_vert:e_,meshphong_frag:n_,meshphysical_vert:i_,meshphysical_frag:s_,meshtoon_vert:r_,meshtoon_frag:a_,points_vert:o_,points_frag:l_,shadow_vert:c_,shadow_frag:h_,sprite_vert:u_,sprite_frag:d_},Et={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},ei={basic:{uniforms:sn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:sn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:sn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:sn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:sn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Yt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:sn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:sn([Et.points,Et.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:sn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:sn([Et.common,Et.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:sn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:sn([Et.sprite,Et.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:sn([Et.common,Et.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:sn([Et.lights,Et.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};ei.physical={uniforms:sn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var Ll={r:0,b:0,g:0},f_=new ge,jd=new Jt;jd.set(-1,0,0,0,1,0,0,0,1);function p_(n,t,e,i,s,r){let a=new Yt(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function p(E){let I=E.isScene===!0?E.background:null;if(I&&I.isTexture){let y=E.backgroundBlurriness>0;I=t.get(I,y)}return I}function x(E){let I=!1,y=p(E);y===null?_(a,o):y&&y.isColor&&(_(y,1),I=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||I)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(E,I){let y=p(I);y&&(y.isCubeTexture||y.mapping===la)?(c===void 0&&(c=new _e(new Be(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:cs(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(f_.makeRotationFromEuler(I.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(jd),c.material.toneMapped=le.getTransfer(y.colorSpace)!==me,(h!==y||f!==y.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new _e(new In(2,2),new Sn({name:"BackgroundMaterial",uniforms:cs(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.toneMapped=le.getTransfer(y.colorSpace)!==me,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function _(E,I){E.getRGB(Ll,oh(n)),e.buffers.color.setClear(Ll.r,Ll.g,Ll.b,I,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,I=1){a.set(E),o=I,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,_(a,o)},render:x,addToRenderList:b,dispose:m}}function m_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(z,H,G,D,W){let q=!1,$=f(z,D,G,H);r!==$&&(r=$,c(r.object)),q=p(z,D,G,W),q&&x(z,D,G,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(z,H,G,D),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return n.createVertexArray()}function c(z){return n.bindVertexArray(z)}function h(z){return n.deleteVertexArray(z)}function f(z,H,G,D){let W=D.wireframe===!0,q=i[H.id];q===void 0&&(q={},i[H.id]=q);let $=z.isInstancedMesh===!0?z.id:0,rt=q[$];rt===void 0&&(rt={},q[$]=rt);let et=rt[G.id];et===void 0&&(et={},rt[G.id]=et);let at=et[W];return at===void 0&&(at=u(l()),et[W]=at),at}function u(z){let H=[],G=[],D=[];for(let W=0;W<e;W++)H[W]=0,G[W]=0,D[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:G,attributeDivisors:D,object:z,attributes:{},index:null}}function p(z,H,G,D){let W=r.attributes,q=H.attributes,$=0,rt=G.getAttributes();for(let et in rt)if(rt[et].location>=0){let ct=W[et],Nt=q[et];if(Nt===void 0&&(et==="instanceMatrix"&&z.instanceMatrix&&(Nt=z.instanceMatrix),et==="instanceColor"&&z.instanceColor&&(Nt=z.instanceColor)),ct===void 0||ct.attribute!==Nt||Nt&&ct.data!==Nt.data)return!0;$++}return r.attributesNum!==$||r.index!==D}function x(z,H,G,D){let W={},q=H.attributes,$=0,rt=G.getAttributes();for(let et in rt)if(rt[et].location>=0){let ct=q[et];ct===void 0&&(et==="instanceMatrix"&&z.instanceMatrix&&(ct=z.instanceMatrix),et==="instanceColor"&&z.instanceColor&&(ct=z.instanceColor));let Nt={};Nt.attribute=ct,ct&&ct.data&&(Nt.data=ct.data),W[et]=Nt,$++}r.attributes=W,r.attributesNum=$,r.index=D}function b(){let z=r.newAttributes;for(let H=0,G=z.length;H<G;H++)z[H]=0}function _(z){m(z,0)}function m(z,H){let G=r.newAttributes,D=r.enabledAttributes,W=r.attributeDivisors;G[z]=1,D[z]===0&&(n.enableVertexAttribArray(z),D[z]=1),W[z]!==H&&(n.vertexAttribDivisor(z,H),W[z]=H)}function E(){let z=r.newAttributes,H=r.enabledAttributes;for(let G=0,D=H.length;G<D;G++)H[G]!==z[G]&&(n.disableVertexAttribArray(G),H[G]=0)}function I(z,H,G,D,W,q,$){$===!0?n.vertexAttribIPointer(z,H,G,W,q):n.vertexAttribPointer(z,H,G,D,W,q)}function y(z,H,G,D){b();let W=D.attributes,q=G.getAttributes(),$=H.defaultAttributeValues;for(let rt in q){let et=q[rt];if(et.location>=0){let at=W[rt];if(at===void 0&&(rt==="instanceMatrix"&&z.instanceMatrix&&(at=z.instanceMatrix),rt==="instanceColor"&&z.instanceColor&&(at=z.instanceColor)),at!==void 0){let ct=at.normalized,Nt=at.itemSize,bt=t.get(at);if(bt===void 0)continue;let ae=bt.buffer,$t=bt.type,qt=bt.bytesPerElement,j=$t===n.INT||$t===n.UNSIGNED_INT||at.gpuType===Yo;if(at.isInterleavedBufferAttribute){let ot=at.data,vt=ot.stride,Vt=at.offset;if(ot.isInstancedInterleavedBuffer){for(let wt=0;wt<et.locationSize;wt++)m(et.location+wt,ot.meshPerAttribute);z.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let wt=0;wt<et.locationSize;wt++)_(et.location+wt);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let wt=0;wt<et.locationSize;wt++)I(et.location+wt,Nt/et.locationSize,$t,ct,vt*qt,(Vt+Nt/et.locationSize*wt)*qt,j)}else{if(at.isInstancedBufferAttribute){for(let ot=0;ot<et.locationSize;ot++)m(et.location+ot,at.meshPerAttribute);z.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ot=0;ot<et.locationSize;ot++)_(et.location+ot);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let ot=0;ot<et.locationSize;ot++)I(et.location+ot,Nt/et.locationSize,$t,ct,Nt*qt,Nt/et.locationSize*ot*qt,j)}}else if($!==void 0){let ct=$[rt];if(ct!==void 0)switch(ct.length){case 2:n.vertexAttrib2fv(et.location,ct);break;case 3:n.vertexAttrib3fv(et.location,ct);break;case 4:n.vertexAttrib4fv(et.location,ct);break;default:n.vertexAttrib1fv(et.location,ct)}}}}E()}function T(){A();for(let z in i){let H=i[z];for(let G in H){let D=H[G];for(let W in D){let q=D[W];for(let $ in q)h(q[$].object),delete q[$];delete D[W]}}delete i[z]}}function w(z){if(i[z.id]===void 0)return;let H=i[z.id];for(let G in H){let D=H[G];for(let W in D){let q=D[W];for(let $ in q)h(q[$].object),delete q[$];delete D[W]}}delete i[z.id]}function P(z){for(let H in i){let G=i[H];for(let D in G){let W=G[D];if(W[z.id]===void 0)continue;let q=W[z.id];for(let $ in q)h(q[$].object),delete q[$];delete W[z.id]}}}function d(z){for(let H in i){let G=i[H],D=z.isInstancedMesh===!0?z.id:0,W=G[D];if(W!==void 0){for(let q in W){let $=W[q];for(let rt in $)h($[rt].object),delete $[rt];delete W[q]}delete G[D],Object.keys(G).length===0&&delete i[H]}}}function A(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:L,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:d,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:_,disableUnusedAttributes:E}}function g_(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function __(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Dn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let d=P===Hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==pn&&P!==Ln&&!d&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),I=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:E,maxVaryings:I,maxFragmentUniforms:y,maxSamples:T,samples:w}}function x_(n){let t=this,e=null,i=0,s=!1,r=!1,a=new xn,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let p=f.length!==0||u||i!==0||s;return s=u,i=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,p){let x=f.clippingPlanes,b=f.clipIntersection,_=f.clipShadows,m=n.get(f);if(!s||x===null||x.length===0||r&&!_)r?h(null):c();else{let E=r?0:i,I=E*4,y=m.clippingState||null;l.value=y,y=h(x,u,I,p);for(let T=0;T!==I;++T)y[T]=e[T];m.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,p,x){let b=f!==null?f.length:0,_=null;if(b!==0){if(_=l.value,x!==!0||_===null){let m=p+b*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(_===null||_.length<m)&&(_=new Float32Array(m));for(let I=0,y=p;I!==b;++I,y+=4)a.copy(f[I]).applyMatrix4(E,o),a.normal.toArray(_,y),_[y+3]=a.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,_}}var ur=4,v_=6,y_=20,M_=256,ga=new nr,Pd=new Yt,uh=null,dh=0,fh=0,ph=!1,S_=new U,hs=new U,Nl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=S_}=r;uh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(uh,dh,fh),this._renderer.xr.enabled=ph,t.scissorTest=!1,hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Di||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Hn,format:Dn,colorSpace:Lr,depthBuffer:!1},s=Id(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Id(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=b_(r)),this._blurMaterial=T_(r,t,e),this._ggxMaterial=E_(r,t,e)}return s}_compileMaterial(t){let e=new _e(new Oe,t);this._renderer.compile(e,ga)}_sceneToCubeUV(t,e,i,s,r){let l=new qe(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(Pd),f.toneMapping=kn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _e(new Be,new Pn({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,_=b.material,m=!1,E=t.background;E?E.isColor&&(_.color.copy(E),t.background=null,m=!0):(_.color.copy(Pd),m=!0);for(let I=0;I<6;I++){let y=I%3;y===0?(l.up.set(0,c[I],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[I],r.y,r.z)):y===1?(l.up.set(0,0,c[I]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[I],r.z)):(l.up.set(0,c[I],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[I]));let T=this._cubeSize;hr(s,y*T,I>2?T:0,T,T),f.setRenderTarget(s),m&&f.render(b,l),f.render(t,l)}f.toneMapping=p,f.autoClear=u,t.background=E}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Di||t.mapping===os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ld());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;hr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,ga)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,p=f*u,{_lodMax:x}=this,b=this._sizeLods[i],_=3*b*(i>x-ur?i-x+ur:0),m=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=x-e,hr(r,_,m,3*b,2*b),s.setRenderTarget(r),s.render(o,ga),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-i,hr(t,_,m,3*b,2*b),s.setRenderTarget(t),s.render(o,ga)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-ur?s-this._lodMax+ur:0),u=4*(this._cubeSize-h);hr(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(l,ga)}};function b_(n){let t=[],e=[],i=n,s=n-ur+1+v_;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,p=3,x=new Float32Array(p*u*f),b=new Float32Array(p*u*f);for(let m=0;m<f;m++){let E=m%3*2/3-1,I=m>2?0:-1,y=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];x.set(y,p*u*m);for(let T=0;T<u;T++){let w=h[T*2]*2-1,P=h[T*2+1]*2-1;m===0?hs.set(1,P,w):m===1?hs.set(-w,1,-P):m===2?hs.set(-w,P,1):m===3?hs.set(-1,P,-w):m===4?hs.set(-w,-1,P):hs.set(w,P,-1),hs.toArray(b,(m*u+T)*p)}}let _=new Oe;_.setAttribute("position",new cn(x,p)),_.setAttribute("outputDirection",new cn(b,p)),e.push(new _e(_,null)),i>ur&&i--}return{lodMeshes:e,sizeLods:t}}function Id(n,t,e){let i=new fn(n,t,e);return i.texture.mapping=la,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function E_(n,t,e){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:M_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function T_(n,t,e){return new Sn({name:"SphericalGaussianBlur",defines:{SAMPLES:y_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Ld(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Dd(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Ol(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ul=class extends fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new kr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Be(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Qn});r.uniforms.tEquirect.value=e;let a=new _e(s,r),o=e.minFilter;return e.minFilter===Ni&&(e.minFilter=Ke),new Ho(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function w_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Wo||p===Xo)if(t.has(u)){let x=t.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let b=new Ul(x.height);return b.fromEquirectangularTexture(n,u),t.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let p=u.mapping,x=p===Wo||p===Xo,b=p===Di||p===os;if(x||b){let _=e.get(u),m=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new Nl(n)),_=x?i.fromEquirectangular(u,_):i.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),_.texture;if(_!==void 0)return _.texture;{let E=u.image;return x&&E&&E.height>0||b&&E&&l(E)?(i===null&&(i=new Nl(n)),_=x?i.fromEquirectangular(u):i.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),u.addEventListener("dispose",h),_.texture):null}}}return u}function o(u,p){return p===Wo?u.mapping=Di:p===Xo&&(u.mapping=os),u}function l(u){let p=0,x=6;for(let b=0;b<x;b++)u[b]!==void 0&&p++;return p===x}function c(u){let p=u.target;p.removeEventListener("dispose",c);let x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function A_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ji("WebGLRenderer: "+i+" extension not supported."),s}}}function R_(n,t,e,i){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let x in u.attributes)t.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let p in u)t.update(u[p],n.ARRAY_BUFFER)}function c(f){let u=[],p=f.index,x=f.attributes.position,b=0;if(x===void 0)return;if(p!==null){let E=p.array;b=p.version;for(let I=0,y=E.length;I<y;I+=3){let T=E[I+0],w=E[I+1],P=E[I+2];u.push(T,w,w,P,P,T)}}else{let E=x.array;b=x.version;for(let I=0,y=E.length/3-1;I<y;I+=3){let T=I+0,w=I+1,P=I+2;u.push(T,w,w,P,P,T)}}let _=new(x.count>=65535?Or:Fr)(u,1);_.version=b;let m=r.get(f);m&&t.remove(m),r.set(f,_)}function h(f){let u=r.get(f);if(u){let p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function C_(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*a),e.update(u,i,1)}function c(f,u,p){p!==0&&(n.drawElementsInstanced(i,u,r,f*a,p),e.update(u,i,p))}function h(f,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,p);let b=0;for(let _=0;_<p;_++)b+=u[_];e.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function P_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Gt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function I_(n,t,e){let i=new WeakMap,s=new Re;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let A=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],I=0;p===!0&&(I=1),x===!0&&(I=2),b===!0&&(I=3);let y=o.attributes.position.count*I,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*T*4*f),P=new Nr(w,y,T,f);P.type=Ln,P.needsUpdate=!0;let d=I*4;for(let L=0;L<f;L++){let z=_[L],H=m[L],G=E[L],D=y*T*4*L;for(let W=0;W<z.count;W++){let q=W*d;p===!0&&(s.fromBufferAttribute(z,W),w[D+q+0]=s.x,w[D+q+1]=s.y,w[D+q+2]=s.z,w[D+q+3]=0),x===!0&&(s.fromBufferAttribute(H,W),w[D+q+4]=s.x,w[D+q+5]=s.y,w[D+q+6]=s.z,w[D+q+7]=0),b===!0&&(s.fromBufferAttribute(G,W),w[D+q+8]=s.x,w[D+q+9]=s.y,w[D+q+10]=s.z,w[D+q+11]=G.itemSize===4?s.w:1)}}u={count:f,texture:P,size:new pt(y,T)},i.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let p=0;for(let b=0;b<c.length;b++)p+=c[b];let x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function L_(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var D_={[Wc]:"LINEAR_TONE_MAPPING",[Xc]:"REINHARD_TONE_MAPPING",[qc]:"CINEON_TONE_MAPPING",[oa]:"ACES_FILMIC_TONE_MAPPING",[Zc]:"AGX_TONE_MAPPING",[Jc]:"NEUTRAL_TONE_MAPPING",[Yc]:"CUSTOM_TONE_MAPPING"};function N_(n,t,e,i,s,r){let a=new fn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Oe;c.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new de([0,2,0,0,2,0],2));let h=new Ro({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new _e(c,h),u=new nr(-1,1,1,-1,0,1),p=null,x=null,b=!1,_,m=null,E=[],I=!1;this.setSize=function(y,T){a.setSize(y,T),o!==null&&o.setSize(y,T),l!==null&&l.setSize(y,T);for(let w=0;w<E.length;w++){let P=E[w];P.setSize&&P.setSize(y,T)}},this.setEffects=function(y){E=y,I=E.length>0&&E[0].isRenderPass===!0;let T=a.width,w=a.height;E.length>0&&o===null&&(o=new fn(T,w,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),l=new fn(T,w,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<E.length;P++){let d=E[P];d.setSize&&d.setSize(T,w)}},this.begin=function(y,T){if(b||y.toneMapping===kn&&E.length===0)return!1;if(m=T,T!==null){let w=T.width,P=T.height;(a.width!==w||a.height!==P)&&this.setSize(w,P)}return I===!1&&y.setRenderTarget(a),_=y.toneMapping,y.toneMapping=kn,!0},this.hasRenderPass=function(){return I},this.end=function(y,T){y.toneMapping=_,b=!0;let w=a,P=o;for(let d=0;d<E.length;d++){let A=E[d];A.enabled!==!1&&(A.render(y,P,w,T),A.needsSwap!==!1&&(w=P,P=P===o?l:o))}if(p!==y.outputColorSpace||x!==y.toneMapping){p=y.outputColorSpace,x=y.toneMapping,h.defines={},le.getTransfer(p)===me&&(h.defines.SRGB_TRANSFER="");let d=D_[x];d&&(h.defines[d]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(m),y.render(f,u),m=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Qd=new en,_h=new Ei(1,1),tf=new Nr,ef=new vo,nf=new kr,Nd=[],Ud=[],Fd=new Float32Array(16),Od=new Float32Array(9),Bd=new Float32Array(4);function fr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Nd[s];if(r===void 0&&(r=new Float32Array(s),Nd[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function ze(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ke(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Bl(n,t){let e=Ud[t];e===void 0&&(e=new Int32Array(t),Ud[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function U_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function F_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2fv(this.addr,t),ke(e,t)}}function O_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;n.uniform3fv(this.addr,t),ke(e,t)}}function B_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4fv(this.addr,t),ke(e,t)}}function z_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,i))return;Bd.set(i),n.uniformMatrix2fv(this.addr,!1,Bd),ke(e,i)}}function k_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,i))return;Od.set(i),n.uniformMatrix3fv(this.addr,!1,Od),ke(e,i)}}function V_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,i))return;Fd.set(i),n.uniformMatrix4fv(this.addr,!1,Fd),ke(e,i)}}function H_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function G_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2iv(this.addr,t),ke(e,t)}}function W_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3iv(this.addr,t),ke(e,t)}}function X_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4iv(this.addr,t),ke(e,t)}}function q_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Y_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2uiv(this.addr,t),ke(e,t)}}function Z_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3uiv(this.addr,t),ke(e,t)}}function J_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4uiv(this.addr,t),ke(e,t)}}function $_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(_h.compareFunction=e.isReversedDepthBuffer()?Il:Pl,r=_h):r=Qd,e.setTexture2D(t||r,s)}function K_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ef,s)}function j_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||nf,s)}function Q_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||tf,s)}function tx(n){switch(n){case 5126:return U_;case 35664:return F_;case 35665:return O_;case 35666:return B_;case 35674:return z_;case 35675:return k_;case 35676:return V_;case 5124:case 35670:return H_;case 35667:case 35671:return G_;case 35668:case 35672:return W_;case 35669:case 35673:return X_;case 5125:return q_;case 36294:return Y_;case 36295:return Z_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return K_;case 35680:case 36300:case 36308:case 36293:return j_;case 36289:case 36303:case 36311:case 36292:return Q_}}function ex(n,t){n.uniform1fv(this.addr,t)}function nx(n,t){let e=fr(t,this.size,2);n.uniform2fv(this.addr,e)}function ix(n,t){let e=fr(t,this.size,3);n.uniform3fv(this.addr,e)}function sx(n,t){let e=fr(t,this.size,4);n.uniform4fv(this.addr,e)}function rx(n,t){let e=fr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ax(n,t){let e=fr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function ox(n,t){let e=fr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function lx(n,t){n.uniform1iv(this.addr,t)}function cx(n,t){n.uniform2iv(this.addr,t)}function hx(n,t){n.uniform3iv(this.addr,t)}function ux(n,t){n.uniform4iv(this.addr,t)}function dx(n,t){n.uniform1uiv(this.addr,t)}function fx(n,t){n.uniform2uiv(this.addr,t)}function px(n,t){n.uniform3uiv(this.addr,t)}function mx(n,t){n.uniform4uiv(this.addr,t)}function gx(n,t,e){let i=this.cache,s=t.length,r=Bl(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=_h:a=Qd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function _x(n,t,e){let i=this.cache,s=t.length,r=Bl(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ef,r[a])}function xx(n,t,e){let i=this.cache,s=t.length,r=Bl(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||nf,r[a])}function vx(n,t,e){let i=this.cache,s=t.length,r=Bl(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||tf,r[a])}function yx(n){switch(n){case 5126:return ex;case 35664:return nx;case 35665:return ix;case 35666:return sx;case 35674:return rx;case 35675:return ax;case 35676:return ox;case 5124:case 35670:return lx;case 35667:case 35671:return cx;case 35668:case 35672:return hx;case 35669:case 35673:return ux;case 5125:return dx;case 36294:return fx;case 36295:return px;case 36296:return mx;case 35678:case 36198:case 36298:case 36306:case 35682:return gx;case 35679:case 36299:case 36307:return _x;case 35680:case 36300:case 36308:case 36293:return xx;case 36289:case 36303:case 36311:case 36292:return vx}}var xh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=tx(e.type)}},vh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yx(e.type)}},yh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},mh=/(\w+)(\])?(\[|\.)?/g;function zd(n,t){n.seq.push(t),n.map[t.id]=t}function Mx(n,t,e){let i=n.name,s=i.length;for(mh.lastIndex=0;;){let r=mh.exec(i),a=mh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){zd(e,c===void 0?new xh(o,n,t):new vh(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new yh(o),zd(e,f)),e=f}}}var dr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Mx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function kd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Sx=37297,bx=0;function Ex(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Vd=new Jt;function Tx(n){le._getMatrix(Vd,le.workingColorSpace,n);let t=`mat3( ${Vd.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(n)){case Dr:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Hd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Ex(n.getShaderSource(t),o)}else return r}function wx(n,t){let e=Tx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Ax={[Wc]:"Linear",[Xc]:"Reinhard",[qc]:"Cineon",[oa]:"ACESFilmic",[Zc]:"AgX",[Jc]:"Neutral",[Yc]:"Custom"};function Rx(n,t){let e=Ax[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Dl=new U;function Cx(){le.getLuminanceCoefficients(Dl);let n=Dl.x.toFixed(4),t=Dl.y.toFixed(4),e=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Px(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function Ix(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Lx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function xa(n){return n!==""}function Gd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(n){return n.replace(Dx,Ux)}var Nx=new Map;function Ux(n,t){let e=ne[t];if(e===void 0){let i=Nx.get(t);if(i!==void 0)e=ne[i],Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Mh(e)}var Fx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xd(n){return n.replace(Fx,Ox)}function Ox(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var Bx={[ss]:"SHADOWMAP_TYPE_PCF",[rr]:"SHADOWMAP_TYPE_VSM"};function zx(n){return Bx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var kx={[Di]:"ENVMAP_TYPE_CUBE",[os]:"ENVMAP_TYPE_CUBE",[la]:"ENVMAP_TYPE_CUBE_UV"};function Vx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":kx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Hx={[os]:"ENVMAP_MODE_REFRACTION"};function Gx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Hx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Wx={[aa]:"ENVMAP_BLENDING_MULTIPLY",[rd]:"ENVMAP_BLENDING_MIX",[ad]:"ENVMAP_BLENDING_ADD"};function Xx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Wx[n.combine]||"ENVMAP_BLENDING_NONE"}function qx(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Yx(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=zx(e),c=Vx(e),h=Gx(e),f=Xx(e),u=qx(e),p=Px(e),x=Ix(r),b=s.createProgram(),_,m,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(xa).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(xa).join(`
`),m.length>0&&(m+=`
`)):(_=[qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),m=[qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?ne.tonemapping_pars_fragment:"",e.toneMapping!==kn?Rx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,wx("linearToOutputTexel",e.outputColorSpace),Cx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xa).join(`
`)),a=Mh(a),a=Gd(a,e),a=Wd(a,e),o=Mh(o),o=Gd(o,e),o=Wd(o,e),a=Xd(a),o=Xd(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let I=E+_+a,y=E+m+o,T=kd(s,s.VERTEX_SHADER,I),w=kd(s,s.FRAGMENT_SHADER,y);s.attachShader(b,T),s.attachShader(b,w),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function P(z){if(n.debug.checkShaderErrors){let H=s.getProgramInfoLog(b)||"",G=s.getShaderInfoLog(T)||"",D=s.getShaderInfoLog(w)||"",W=H.trim(),q=G.trim(),$=D.trim(),rt=!0,et=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(rt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,b,T,w);else{let at=Hd(s,T,"vertex"),ct=Hd(s,w,"fragment");Gt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+W+`
`+at+`
`+ct)}else W!==""?Ht("WebGLProgram: Program Info Log:",W):(q===""||$==="")&&(et=!1);et&&(z.diagnostics={runnable:rt,programLog:W,vertexShader:{log:q,prefix:_},fragmentShader:{log:$,prefix:m}})}s.deleteShader(T),s.deleteShader(w),d=new dr(s,b),A=Lx(s,b)}let d;this.getUniforms=function(){return d===void 0&&P(this),d};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(b,Sx)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bx++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=w,this}var Zx=0,Sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new bh(t),e.set(t,i)),i}},bh=class{constructor(t){this.id=Zx++,this.code=t,this.usedTimes=0}};function Jx(n){return n===Fi||n===pa||n===ma}function $x(n,t,e,i,s,r){let a=new Ys,o=new Sh,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,u=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(d){return l.add(d),d===0?"uv":`uv${d}`}function b(d,A,L,z,H,G){let D=z.fog,W=H.geometry,q=d.isMeshStandardMaterial||d.isMeshLambertMaterial||d.isMeshPhongMaterial?z.environment:null,$=d.isMeshStandardMaterial||d.isMeshLambertMaterial&&!d.envMap||d.isMeshPhongMaterial&&!d.envMap,rt=t.get(d.envMap||q,$),et=rt&&rt.mapping===la?rt.image.height:null,at=p[d.type];d.precision!==null&&(u=i.getMaxPrecision(d.precision),u!==d.precision&&Ht("WebGLProgram.getParameters:",d.precision,"not supported, using",u,"instead."));let ct=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Nt=ct!==void 0?ct.length:0,bt=0;W.morphAttributes.position!==void 0&&(bt=1),W.morphAttributes.normal!==void 0&&(bt=2),W.morphAttributes.color!==void 0&&(bt=3);let ae,$t,qt,j;if(at){let Rt=ei[at];ae=Rt.vertexShader,$t=Rt.fragmentShader}else{ae=d.vertexShader,$t=d.fragmentShader;let Rt=o.getVertexShaderStage(d),Wt=o.getFragmentShaderStage(d);o.update(d,Rt,Wt),qt=Rt.id,j=Wt.id}let ot=n.getRenderTarget(),vt=n.state.buffers.depth.getReversed(),Vt=H.isInstancedMesh===!0,wt=H.isBatchedMesh===!0,kt=!!d.map,oe=!!d.matcap,it=!!rt,ut=!!d.aoMap,mt=!!d.lightMap,gt=!!d.bumpMap&&d.wireframe===!1,_t=!!d.normalMap,Ut=!!d.displacementMap,Ct=!!d.emissiveMap,Bt=!!d.metalnessMap,zt=!!d.roughnessMap,F=d.anisotropy>0,ce=d.clearcoat>0,Qt=d.dispersion>0,R=d.retroreflectivity>0,g=d.iridescence>0,V=d.sheen>0,J=d.transmission>0,tt=F&&!!d.anisotropyMap,ft=ce&&!!d.clearcoatMap,xt=ce&&!!d.clearcoatNormalMap,nt=ce&&!!d.clearcoatRoughnessMap,lt=g&&!!d.iridescenceMap,yt=g&&!!d.iridescenceThicknessMap,Ft=V&&!!d.sheenColorMap,St=V&&!!d.sheenRoughnessMap,Mt=!!d.specularMap,v=!!d.specularColorMap,C=!!d.specularIntensityMap,N=J&&!!d.transmissionMap,S=J&&!!d.thicknessMap,B=!!d.gradientMap,O=!!d.alphaMap,K=d.alphaTest>0,st=!!d.alphaHash,X=!!d.extensions,ht=kn;d.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ht=n.toneMapping);let dt={shaderID:at,shaderType:d.type,shaderName:d.name,vertexShader:ae,fragmentShader:$t,defines:d.defines,customVertexShaderID:qt,customFragmentShaderID:j,isRawShaderMaterial:d.isRawShaderMaterial===!0,glslVersion:d.glslVersion,precision:u,batching:wt,batchingColor:wt&&H._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&H.instanceColor!==null,instancingMorph:Vt&&H.morphTexture!==null,outputColorSpace:ot===null?n.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!d.alphaToCoverage,map:kt,matcap:oe,envMap:it,envMapMode:it&&rt.mapping,envMapCubeUVHeight:et,aoMap:ut,lightMap:mt,bumpMap:gt,normalMap:_t,displacementMap:Ut,emissiveMap:Ct,normalMapObjectSpace:_t&&d.normalMapType===cd,normalMapTangentSpace:_t&&d.normalMapType===cr,packedNormalMap:_t&&d.normalMapType===cr&&Jx(d.normalMap.format),metalnessMap:Bt,roughnessMap:zt,anisotropy:F,anisotropyMap:tt,clearcoat:ce,clearcoatMap:ft,clearcoatNormalMap:xt,clearcoatRoughnessMap:nt,dispersion:Qt,retroreflection:R,iridescence:g,iridescenceMap:lt,iridescenceThicknessMap:yt,sheen:V,sheenColorMap:Ft,sheenRoughnessMap:St,specularMap:Mt,specularColorMap:v,specularIntensityMap:C,transmission:J,transmissionMap:N,thicknessMap:S,gradientMap:B,opaque:d.transparent===!1&&d.blending===ar&&d.alphaToCoverage===!1,alphaMap:O,alphaTest:K,alphaHash:st,combine:d.combine,mapUv:kt&&x(d.map.channel),aoMapUv:ut&&x(d.aoMap.channel),lightMapUv:mt&&x(d.lightMap.channel),bumpMapUv:gt&&x(d.bumpMap.channel),normalMapUv:_t&&x(d.normalMap.channel),displacementMapUv:Ut&&x(d.displacementMap.channel),emissiveMapUv:Ct&&x(d.emissiveMap.channel),metalnessMapUv:Bt&&x(d.metalnessMap.channel),roughnessMapUv:zt&&x(d.roughnessMap.channel),anisotropyMapUv:tt&&x(d.anisotropyMap.channel),clearcoatMapUv:ft&&x(d.clearcoatMap.channel),clearcoatNormalMapUv:xt&&x(d.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&x(d.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&x(d.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&x(d.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&x(d.sheenColorMap.channel),sheenRoughnessMapUv:St&&x(d.sheenRoughnessMap.channel),specularMapUv:Mt&&x(d.specularMap.channel),specularColorMapUv:v&&x(d.specularColorMap.channel),specularIntensityMapUv:C&&x(d.specularIntensityMap.channel),transmissionMapUv:N&&x(d.transmissionMap.channel),thicknessMapUv:S&&x(d.thicknessMap.channel),alphaMapUv:O&&x(d.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(_t||F),vertexNormals:!!W.attributes.normal,vertexColors:d.vertexColors,vertexAlphas:d.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!W.attributes.uv&&(kt||O),fog:!!D,useFog:d.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:d.wireframe===!1&&(d.flatShading===!0||W.attributes.normal===void 0&&_t===!1&&(d.isMeshLambertMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isMeshPhysicalMaterial)),sizeAttenuation:d.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:vt,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:bt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:d.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ht,decodeVideoTexture:kt&&d.map.isVideoTexture===!0&&le.getTransfer(d.map.colorSpace)===me,decodeVideoTextureEmissive:Ct&&d.emissiveMap.isVideoTexture===!0&&le.getTransfer(d.emissiveMap.colorSpace)===me,premultipliedAlpha:d.premultipliedAlpha,doubleSided:d.side===Ze,flipSided:d.side===hn,useDepthPacking:d.depthPacking>=0,depthPacking:d.depthPacking||0,index0AttributeName:d.index0AttributeName,extensionClipCullDistance:X&&d.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(X&&d.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:d.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function _(d){let A=[];if(d.shaderID?A.push(d.shaderID):(A.push(d.customVertexShaderID),A.push(d.customFragmentShaderID)),d.defines!==void 0)for(let L in d.defines)A.push(L),A.push(d.defines[L]);return d.isRawShaderMaterial===!1&&(m(A,d),E(A,d),A.push(n.outputColorSpace)),A.push(d.customProgramCacheKey),A.join()}function m(d,A){d.push(A.precision),d.push(A.outputColorSpace),d.push(A.envMapMode),d.push(A.envMapCubeUVHeight),d.push(A.mapUv),d.push(A.alphaMapUv),d.push(A.lightMapUv),d.push(A.aoMapUv),d.push(A.bumpMapUv),d.push(A.normalMapUv),d.push(A.displacementMapUv),d.push(A.emissiveMapUv),d.push(A.metalnessMapUv),d.push(A.roughnessMapUv),d.push(A.anisotropyMapUv),d.push(A.clearcoatMapUv),d.push(A.clearcoatNormalMapUv),d.push(A.clearcoatRoughnessMapUv),d.push(A.iridescenceMapUv),d.push(A.iridescenceThicknessMapUv),d.push(A.sheenColorMapUv),d.push(A.sheenRoughnessMapUv),d.push(A.specularMapUv),d.push(A.specularColorMapUv),d.push(A.specularIntensityMapUv),d.push(A.transmissionMapUv),d.push(A.thicknessMapUv),d.push(A.combine),d.push(A.fogExp2),d.push(A.sizeAttenuation),d.push(A.morphTargetsCount),d.push(A.morphAttributeCount),d.push(A.numSunLights),d.push(A.numDirLights),d.push(A.numPointLights),d.push(A.numSpotLights),d.push(A.numSpotLightMaps),d.push(A.numHemiLights),d.push(A.numRectAreaLights),d.push(A.numSunLightShadows),d.push(A.numDirLightShadows),d.push(A.numPointLightShadows),d.push(A.numSpotLightShadows),d.push(A.numSpotLightShadowsWithMaps),d.push(A.numLightProbes),d.push(A.shadowMapType),d.push(A.toneMapping),d.push(A.numClippingPlanes),d.push(A.numClipIntersection),d.push(A.depthPacking)}function E(d,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),d.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),d.push(a.mask)}function I(d){let A=p[d.type],L;if(A){let z=ei[A];L=Ad.clone(z.uniforms)}else L=d.uniforms;return L}function y(d,A){let L=h.get(A);return L!==void 0?++L.usedTimes:(L=new Yx(n,A,d,s),c.push(L),h.set(A,L)),L}function T(d){if(--d.usedTimes===0){let A=c.indexOf(d);c[A]=c[c.length-1],c.pop(),h.delete(d.cacheKey),d.destroy()}}function w(d){o.remove(d)}function P(){o.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:I,acquireProgram:y,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:P}}function Kx(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function jx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Yd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Zd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,x,b,_,m){let E=n[t];return E===void 0?(E={id:u.id,object:u,geometry:p,material:x,materialVariant:a(u),groupOrder:b,renderOrder:u.renderOrder,z:_,group:m},n[t]=E):(E.id=u.id,E.object=u,E.geometry=p,E.material=x,E.materialVariant=a(u),E.groupOrder=b,E.renderOrder=u.renderOrder,E.z=_,E.group=m),t++,E}function l(u,p,x,b,_,m,E){E.reversedDepth===!0&&(_=-_);let I=o(u,p,x,b,_,m);x.transmission>0?i.push(I):x.transparent===!0?s.push(I):e.push(I)}function c(u,p,x,b,_,m){let E=o(u,p,x,b,_,m);x.transmission>0?i.unshift(E):x.transparent===!0?s.unshift(E):e.unshift(E)}function h(u,p){e.length>1&&e.sort(u||jx),i.length>1&&i.sort(p||Yd),s.length>1&&s.sort(p||Yd)}function f(){for(let u=t,p=n.length;u<p;u++){let x=n[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function Qx(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Zd,n.set(i,[a])):s>=r.length?(a=new Zd,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function tv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Yt};break;case"SpotLight":e={position:new U,direction:new U,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function ev(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var nv=0;function iv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function sv(n){let t=new tv,e=ev(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let s=new U,r=new ge,a=new ge;function o(c){let h=0,f=0,u=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let p=0,x=0,b=0,_=0,m=0,E=0,I=0,y=0,T=0,w=0,P=0,d=0,A=0,L=0;c.sort(iv);for(let H=0,G=c.length;H<G;H++){let D=c[H],W=D.color,q=D.intensity,$=D.distance,rt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Fi?rt=D.shadow.map.texture:rt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=W.r*q,f+=W.g*q,u+=W.b*q;else if(D.isLightProbe){for(let et=0;et<9;et++)i.probe[et].addScaledVector(D.sh.coefficients[et],q);L++}else if(D.isSunLight){let et=t.get(D);if(et.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let at=D.shadow,ct=e.get(D);ct.shadowIntensity=at.intensity,ct.shadowBias=at.bias,ct.shadowNormalBias=at.normalBias,ct.shadowRadius=at.radius,ct.shadowMapSize.copy(at.mapSize).multiply(at.getFrameExtents()),i.sunShadow[x]=ct,i.sunShadowMap[x]=rt;let Nt=at.getViewportCount();for(let bt=0;bt<Nt;bt++)i.sunShadowMatrix[b+bt]=at.getMatrix(bt),i.sunShadowCascade[b+bt]=at._cascadeData[bt];b+=Nt,x++}i.sun[p]=et,p++}else if(D.isDirectionalLight){let et=t.get(D);if(et.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let at=D.shadow,ct=e.get(D);ct.shadowIntensity=at.intensity,ct.shadowBias=at.bias,ct.shadowNormalBias=at.normalBias,ct.shadowRadius=at.radius,ct.shadowMapSize=at.mapSize,i.directionalShadow[_]=ct,i.directionalShadowMap[_]=rt,i.directionalShadowMatrix[_]=D.shadow.matrix,T++}i.directional[_]=et,_++}else if(D.isSpotLight){let et=t.get(D);et.position.setFromMatrixPosition(D.matrixWorld),et.color.copy(W).multiplyScalar(q),et.distance=$,et.coneCos=Math.cos(D.angle),et.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),et.decay=D.decay,i.spot[E]=et;let at=D.shadow;if(D.map&&(i.spotLightMap[d]=D.map,d++,at.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[E]=at.matrix,D.castShadow){let ct=e.get(D);ct.shadowIntensity=at.intensity,ct.shadowBias=at.bias,ct.shadowNormalBias=at.normalBias,ct.shadowRadius=at.radius,ct.shadowMapSize=at.mapSize,i.spotShadow[E]=ct,i.spotShadowMap[E]=rt,P++}E++}else if(D.isRectAreaLight){let et=t.get(D);et.color.copy(W).multiplyScalar(q),et.halfWidth.set(D.width*.5,0,0),et.halfHeight.set(0,D.height*.5,0),i.rectArea[I]=et,I++}else if(D.isPointLight){let et=t.get(D);if(et.color.copy(D.color).multiplyScalar(D.intensity),et.distance=D.distance,et.decay=D.decay,D.castShadow){let at=D.shadow,ct=e.get(D);ct.shadowIntensity=at.intensity,ct.shadowBias=at.bias,ct.shadowNormalBias=at.normalBias,ct.shadowRadius=at.radius,ct.shadowMapSize=at.mapSize,ct.shadowCameraNear=at.camera.near,ct.shadowCameraFar=at.camera.far,i.pointShadow[m]=ct,i.pointShadowMap[m]=rt,i.pointShadowMatrix[m]=D.shadow.matrix,w++}i.point[m]=et,m++}else if(D.isHemisphereLight){let et=t.get(D);et.skyColor.copy(D.color).multiplyScalar(q),et.groundColor.copy(D.groundColor).multiplyScalar(q),i.hemi[y]=et,y++}}I>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Et.LTC_FLOAT_1,i.rectAreaLTC2=Et.LTC_FLOAT_2):(i.rectAreaLTC1=Et.LTC_HALF_1,i.rectAreaLTC2=Et.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let z=i.hash;(z.sunLength!==p||z.directionalLength!==_||z.pointLength!==m||z.spotLength!==E||z.rectAreaLength!==I||z.hemiLength!==y||z.numSunShadows!==x||z.numDirectionalShadows!==T||z.numPointShadows!==w||z.numSpotShadows!==P||z.numSpotMaps!==d||z.numLightProbes!==L)&&(i.sun.length=p,i.directional.length=_,i.spot.length=E,i.rectArea.length=I,i.point.length=m,i.hemi.length=y,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=P,i.spotShadowMap.length=P,i.spotLightMatrix.length=P+d-A,i.spotLightMap.length=d,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,z.sunLength=p,z.directionalLength=_,z.pointLength=m,z.spotLength=E,z.rectAreaLength=I,z.hemiLength=y,z.numSunShadows=x,z.numDirectionalShadows=T,z.numPointShadows=w,z.numSpotShadows=P,z.numSpotMaps=d,z.numLightProbes=L,i.version=nv++)}function l(c,h){let f=0,u=0,p=0,x=0,b=0,_=0,m=h.matrixWorldInverse;for(let E=0,I=c.length;E<I;E++){let y=c[E];if(y.isSunLight){let T=i.sun[f];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),f++}else if(y.isDirectionalLight){let T=i.directional[u];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),u++}else if(y.isSpotLight){let T=i.spot[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),x++}else if(y.isRectAreaLight){let T=i.rectArea[b];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),b++}else if(y.isPointLight){let T=i.point[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),p++}else if(y.isHemisphereLight){let T=i.hemi[_];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Jd(n){let t=new sv(n),e=[],i=[],s=[];function r(u){f.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function rv(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Jd(n),t.set(s,[o])):r>=a.length?(o=new Jd(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var av=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ov=`uniform sampler2D shadow_pass;
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
}`,lv=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],cv=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],$d=new ge,_a=new U,gh=new U;function hv(n,t,e){let i=new $s,s=new pt,r=new pt,a=new Re,o=new Co,l=new Po,c={},h=e.maxTextureSize,f={[Li]:hn,[hn]:Li,[Ze]:Ze},u=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:av,fragmentShader:ov}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let x=new Oe;x.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new _e(x,u),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ss;let m=this.type;this.render=function(w,P,d){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;this.type===ku&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ss);let A=n.getRenderTarget(),L=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Qn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let G=m!==this.type;G&&P.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(W=>W.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,W=w.length;D<W;D++){let q=w[D],$=q.shadow;if($===void 0){Ht("WebGLShadowMap:",q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let rt=$.getFrameExtents();s.multiply(rt),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,$.mapSize.y=r.y));let et=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=et,$.map===null||G===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===rr){if(q.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new fn(s.x,s.y,{format:Fi,type:Hn,minFilter:Ke,magFilter:Ke,generateMipmaps:!1}),$.map.texture.name=q.name+".shadowMap",$.map.depthTexture=new Ei(s.x,s.y,Ln),$.map.depthTexture.name=q.name+".shadowMapDepth",$.map.depthTexture.format=Jn,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Ye,$.map.depthTexture.magFilter=Ye}else q.isPointLight?($.map=new Ul(s.x),$.map.depthTexture=new yo(s.x,Vn)):($.map=new fn(s.x,s.y),$.map.depthTexture=new Ei(s.x,s.y,Vn)),$.map.depthTexture.name=q.name+".shadowMap",$.map.depthTexture.format=Jn,this.type===ss?($.map.depthTexture.compareFunction=et?Il:Pl,$.map.depthTexture.minFilter=Ke,$.map.depthTexture.magFilter=Ke):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Ye,$.map.depthTexture.magFilter=Ye);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let at=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();q.isPointLight!==!0&&$.updateMatrices(q,d);for(let ct=0;ct<at;ct++){let Nt=$.getCamera(ct);if(q.isPointLight){let bt=$.camera,ae=$.matrix,$t=q.distance||bt.far;$t!==bt.far&&(bt.far=$t,bt.updateProjectionMatrix()),_a.setFromMatrixPosition(q.matrixWorld),bt.position.copy(_a),gh.copy(bt.position),gh.add(lv[ct]),bt.up.copy(cv[ct]),bt.lookAt(gh),bt.updateMatrixWorld(),ae.makeTranslation(-_a.x,-_a.y,-_a.z),$d.multiplyMatrices(bt.projectionMatrix,bt.matrixWorldInverse),$._frustum.setFromProjectionMatrix($d,bt.coordinateSystem,bt.reversedDepth)}if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,ct),n.clear();else{ct===0&&(n.setRenderTarget($.map),n.clear());let bt=$.getViewport(ct);a.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),H.viewport(a)}i=$.getFrustum(ct),y(P,d,Nt,q,this.type)}$.isPointLightShadow!==!0&&this.type===rr&&E($,d),$.needsUpdate=!1}m=this.type,_.needsUpdate=!1,n.setRenderTarget(A,L,z)};function E(w,P){let d=t.update(b);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new fn(s.x,s.y,{format:Fi,type:Hn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(P,null,d,u,b,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(P,null,d,p,b,null)}function I(w,P,d,A){let L=null,z=d.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(z!==void 0)L=z;else if(L=d.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let H=L.uuid,G=P.uuid,D=c[H];D===void 0&&(D={},c[H]=D);let W=D[G];W===void 0&&(W=L.clone(),D[G]=W,P.addEventListener("dispose",T)),L=W}if(L.visible=P.visible,L.wireframe=P.wireframe,A===rr?L.side=P.shadowSide!==null?P.shadowSide:P.side:L.side=P.shadowSide!==null?P.shadowSide:f[P.side],L.alphaMap=P.alphaMap,L.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,L.map=P.map,L.clipShadows=P.clipShadows,L.clippingPlanes=P.clippingPlanes,L.clipIntersection=P.clipIntersection,L.displacementMap=P.displacementMap,L.displacementScale=P.displacementScale,L.displacementBias=P.displacementBias,L.wireframeLinewidth=P.wireframeLinewidth,L.linewidth=P.linewidth,d.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let H=n.properties.get(L);H.light=d}return L}function y(w,P,d,A,L){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===rr)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,w.matrixWorld);let G=t.update(w),D=w.material;if(Array.isArray(D)){let W=G.groups;for(let q=0,$=W.length;q<$;q++){let rt=W[q],et=D[rt.materialIndex];if(et&&et.visible){let at=I(w,et,A,L);w.onBeforeShadow(n,w,P,d,G,at,rt),n.renderBufferDirect(d,null,G,at,w,rt),w.onAfterShadow(n,w,P,d,G,at,rt)}}}else if(D.visible){let W=I(w,D,A,L);w.onBeforeShadow(n,w,P,d,G,W,null),n.renderBufferDirect(d,null,G,W,w,null),w.onAfterShadow(n,w,P,d,G,W,null)}}let H=w.children;for(let G=0,D=H.length;G<D;G++)y(H[G],P,d,A,L)}function T(w){w.target.removeEventListener("dispose",T);for(let d in c){let A=c[d],L=w.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}function uv(n,t){function e(){let S=!1,B=new Re,O=null,K=new Re(0,0,0,0);return{setMask:function(st){O!==st&&!S&&(n.colorMask(st,st,st,st),O=st)},setLocked:function(st){S=st},setClear:function(st,X,ht,dt,Rt){Rt===!0&&(st*=dt,X*=dt,ht*=dt),B.set(st,X,ht,dt),K.equals(B)===!1&&(n.clearColor(st,X,ht,dt),K.copy(B))},reset:function(){S=!1,O=null,K.set(-1,0,0,0)}}}function i(){let S=!1,B=!1,O=null,K=null,st=null;return{setReversed:function(X){if(B!==X){let ht=t.get("EXT_clip_control");X?ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.ZERO_TO_ONE_EXT):ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.NEGATIVE_ONE_TO_ONE_EXT),B=X;let dt=st;st=null,this.setClear(dt)}},getReversed:function(){return B},setTest:function(X){X?ot(n.DEPTH_TEST):vt(n.DEPTH_TEST)},setMask:function(X){O!==X&&!S&&(n.depthMask(X),O=X)},setFunc:function(X){if(B&&(X=Md[X]),K!==X){switch(X){case oo:n.depthFunc(n.NEVER);break;case lo:n.depthFunc(n.ALWAYS);break;case co:n.depthFunc(n.LESS);break;case ks:n.depthFunc(n.LEQUAL);break;case ho:n.depthFunc(n.EQUAL);break;case uo:n.depthFunc(n.GEQUAL);break;case fo:n.depthFunc(n.GREATER);break;case po:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=X}},setLocked:function(X){S=X},setClear:function(X){st!==X&&(st=X,B&&(X=1-X),n.clearDepth(X))},reset:function(){S=!1,O=null,K=null,st=null,B=!1}}}function s(){let S=!1,B=null,O=null,K=null,st=null,X=null,ht=null,dt=null,Rt=null;return{setTest:function(Wt){S||(Wt?ot(n.STENCIL_TEST):vt(n.STENCIL_TEST))},setMask:function(Wt){B!==Wt&&!S&&(n.stencilMask(Wt),B=Wt)},setFunc:function(Wt,ye,xe){(O!==Wt||K!==ye||st!==xe)&&(n.stencilFunc(Wt,ye,xe),O=Wt,K=ye,st=xe)},setOp:function(Wt,ye,xe){(X!==Wt||ht!==ye||dt!==xe)&&(n.stencilOp(Wt,ye,xe),X=Wt,ht=ye,dt=xe)},setLocked:function(Wt){S=Wt},setClear:function(Wt){Rt!==Wt&&(n.clearStencil(Wt),Rt=Wt)},reset:function(){S=!1,B=null,O=null,K=null,st=null,X=null,ht=null,dt=null,Rt=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},p=new WeakMap,x=[],b=null,_=!1,m=null,E=null,I=null,y=null,T=null,w=null,P=null,d=new Yt(0,0,0),A=0,L=!1,z=null,H=null,G=null,D=null,W=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,rt=0,et=n.getParameter(n.VERSION);et.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(et)[1]),$=rt>=1):et.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),$=rt>=2);let at=null,ct={},Nt=n.getParameter(n.SCISSOR_BOX),bt=n.getParameter(n.VIEWPORT),ae=new Re().fromArray(Nt),$t=new Re().fromArray(bt);function qt(S,B,O,K){let st=new Uint8Array(4),X=n.createTexture();n.bindTexture(S,X),n.texParameteri(S,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(S,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ht=0;ht<O;ht++)S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY?n.texImage3D(B,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,st):n.texImage2D(B+ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,st);return X}let j={};j[n.TEXTURE_2D]=qt(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=qt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=qt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=qt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(n.DEPTH_TEST),a.setFunc(ks),gt(!1),_t(zc),ot(n.CULL_FACE),ut(Qn);function ot(S){h[S]!==!0&&(n.enable(S),h[S]=!0)}function vt(S){h[S]!==!1&&(n.disable(S),h[S]=!1)}function Vt(S,B){return u[S]!==B?(n.bindFramebuffer(S,B),u[S]=B,S===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=B),S===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=B),!0):!1}function wt(S,B){let O=x,K=!1;if(S){O=p.get(B),O===void 0&&(O=[],p.set(B,O));let st=S.textures;if(O.length!==st.length||O[0]!==n.COLOR_ATTACHMENT0){for(let X=0,ht=st.length;X<ht;X++)O[X]=n.COLOR_ATTACHMENT0+X;O.length=st.length,K=!0}}else O[0]!==n.BACK&&(O[0]=n.BACK,K=!0);K&&n.drawBuffers(O)}function kt(S){return b!==S?(n.useProgram(S),b=S,!0):!1}let oe={[as]:n.FUNC_ADD,[Hu]:n.FUNC_SUBTRACT,[Gu]:n.FUNC_REVERSE_SUBTRACT};oe[Wu]=n.MIN,oe[Xu]=n.MAX;let it={[qu]:n.ZERO,[Yu]:n.ONE,[Zu]:n.SRC_COLOR,[Hc]:n.SRC_ALPHA,[td]:n.SRC_ALPHA_SATURATE,[ju]:n.DST_COLOR,[$u]:n.DST_ALPHA,[Ju]:n.ONE_MINUS_SRC_COLOR,[Gc]:n.ONE_MINUS_SRC_ALPHA,[Qu]:n.ONE_MINUS_DST_COLOR,[Ku]:n.ONE_MINUS_DST_ALPHA,[ed]:n.CONSTANT_COLOR,[nd]:n.ONE_MINUS_CONSTANT_COLOR,[id]:n.CONSTANT_ALPHA,[sd]:n.ONE_MINUS_CONSTANT_ALPHA};function ut(S,B,O,K,st,X,ht,dt,Rt,Wt){if(S===Qn){_===!0&&(vt(n.BLEND),_=!1);return}if(_===!1&&(ot(n.BLEND),_=!0),S!==Vu){if(S!==m||Wt!==L){if((E!==as||T!==as)&&(n.blendEquation(n.FUNC_ADD),E=as,T=as),Wt)switch(S){case ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rs:n.blendFunc(n.ONE,n.ONE);break;case kc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Gt("WebGLState: Invalid blending: ",S);break}else switch(S){case ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case kc:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vc:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",S);break}I=null,y=null,w=null,P=null,d.set(0,0,0),A=0,m=S,L=Wt}return}st=st||B,X=X||O,ht=ht||K,(B!==E||st!==T)&&(n.blendEquationSeparate(oe[B],oe[st]),E=B,T=st),(O!==I||K!==y||X!==w||ht!==P)&&(n.blendFuncSeparate(it[O],it[K],it[X],it[ht]),I=O,y=K,w=X,P=ht),(dt.equals(d)===!1||Rt!==A)&&(n.blendColor(dt.r,dt.g,dt.b,Rt),d.copy(dt),A=Rt),m=S,L=!1}function mt(S,B){S.side===Ze?vt(n.CULL_FACE):ot(n.CULL_FACE);let O=S.side===hn;B&&(O=!O),gt(O),S.blending===ar&&S.transparent===!1?ut(Qn):ut(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),a.setFunc(S.depthFunc),a.setTest(S.depthTest),a.setMask(S.depthWrite),r.setMask(S.colorWrite);let K=S.stencilWrite;o.setTest(K),K&&(o.setMask(S.stencilWriteMask),o.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),o.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),Ct(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?ot(n.SAMPLE_ALPHA_TO_COVERAGE):vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function gt(S){z!==S&&(S?n.frontFace(n.CW):n.frontFace(n.CCW),z=S)}function _t(S){S!==Bu?(ot(n.CULL_FACE),S!==H&&(S===zc?n.cullFace(n.BACK):S===zu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):vt(n.CULL_FACE),H=S}function Ut(S){S!==G&&($&&n.lineWidth(S),G=S)}function Ct(S,B,O){S?(ot(n.POLYGON_OFFSET_FILL),(D!==B||W!==O)&&(D=B,W=O,a.getReversed()&&(B=-B),n.polygonOffset(B,O))):vt(n.POLYGON_OFFSET_FILL)}function Bt(S){S?ot(n.SCISSOR_TEST):vt(n.SCISSOR_TEST)}function zt(S){S===void 0&&(S=n.TEXTURE0+q-1),at!==S&&(n.activeTexture(S),at=S)}function F(S,B,O){O===void 0&&(at===null?O=n.TEXTURE0+q-1:O=at);let K=ct[O];K===void 0&&(K={type:void 0,texture:void 0},ct[O]=K),(K.type!==S||K.texture!==B)&&(at!==O&&(n.activeTexture(O),at=O),n.bindTexture(S,B||j[S]),K.type=S,K.texture=B)}function ce(){let S=ct[at];S!==void 0&&S.type!==void 0&&(n.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function Qt(){try{n.compressedTexImage2D(...arguments)}catch(S){Gt("WebGLState:",S)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(S){Gt("WebGLState:",S)}}function g(){try{n.texSubImage2D(...arguments)}catch(S){Gt("WebGLState:",S)}}function V(){try{n.texSubImage3D(...arguments)}catch(S){Gt("WebGLState:",S)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(S){Gt("WebGLState:",S)}}function tt(){try{n.compressedTexSubImage3D(...arguments)}catch(S){Gt("WebGLState:",S)}}function ft(){try{n.texStorage2D(...arguments)}catch(S){Gt("WebGLState:",S)}}function xt(){try{n.texStorage3D(...arguments)}catch(S){Gt("WebGLState:",S)}}function nt(){try{n.texImage2D(...arguments)}catch(S){Gt("WebGLState:",S)}}function lt(){try{n.texImage3D(...arguments)}catch(S){Gt("WebGLState:",S)}}function yt(S){return f[S]!==void 0?f[S]:n.getParameter(S)}function Ft(S,B){f[S]!==B&&(n.pixelStorei(S,B),f[S]=B)}function St(S){ae.equals(S)===!1&&(n.scissor(S.x,S.y,S.z,S.w),ae.copy(S))}function Mt(S){$t.equals(S)===!1&&(n.viewport(S.x,S.y,S.z,S.w),$t.copy(S))}function v(S,B){let O=c.get(B);O===void 0&&(O=new WeakMap,c.set(B,O));let K=O.get(S);K===void 0&&(K=n.getUniformBlockIndex(B,S.name),O.set(S,K))}function C(S,B){let K=c.get(B).get(S);l.get(B)!==K&&(n.uniformBlockBinding(B,K,S.__bindingPointIndex),l.set(B,K))}function N(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},at=null,ct={},u={},p=new WeakMap,x=[],b=null,_=!1,m=null,E=null,I=null,y=null,T=null,w=null,P=null,d=new Yt(0,0,0),A=0,L=!1,z=null,H=null,G=null,D=null,W=null,ae.set(0,0,n.canvas.width,n.canvas.height),$t.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:vt,bindFramebuffer:Vt,drawBuffers:wt,useProgram:kt,setBlending:ut,setMaterial:mt,setFlipSided:gt,setCullFace:_t,setLineWidth:Ut,setPolygonOffset:Ct,setScissorTest:Bt,activeTexture:zt,bindTexture:F,unbindTexture:ce,compressedTexImage2D:Qt,compressedTexImage3D:R,texImage2D:nt,texImage3D:lt,pixelStorei:Ft,getParameter:yt,updateUBOMapping:v,uniformBlockBinding:C,texStorage2D:ft,texStorage3D:xt,texSubImage2D:g,texSubImage3D:V,compressedTexSubImage2D:J,compressedTexSubImage3D:tt,scissor:St,viewport:Mt,reset:N}}function dv(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,h=new WeakMap,f=new Set,u,p=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(R,g){return x?new OffscreenCanvas(R,g):Gs("canvas")}function _(R,g,V){let J=1,tt=Qt(R);if((tt.width>V||tt.height>V)&&(J=V/Math.max(tt.width,tt.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ft=Math.floor(J*tt.width),xt=Math.floor(J*tt.height);u===void 0&&(u=b(ft,xt));let nt=g?b(ft,xt):u;return nt.width=ft,nt.height=xt,nt.getContext("2d").drawImage(R,0,0,ft,xt),Ht("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ft+"x"+xt+")."),nt}else return"data"in R&&Ht("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),R;return R}function m(R){return R.generateMipmaps}function E(R){n.generateMipmap(R)}function I(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(R,g,V,J,tt,ft=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let xt;J&&(xt=t.get("EXT_texture_norm16"),xt||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=g;if(g===n.RED&&(V===n.FLOAT&&(nt=n.R32F),V===n.HALF_FLOAT&&(nt=n.R16F),V===n.UNSIGNED_BYTE&&(nt=n.R8),V===n.UNSIGNED_SHORT&&xt&&(nt=xt.R16_EXT),V===n.SHORT&&xt&&(nt=xt.R16_SNORM_EXT)),g===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(nt=n.R8UI),V===n.UNSIGNED_SHORT&&(nt=n.R16UI),V===n.UNSIGNED_INT&&(nt=n.R32UI),V===n.BYTE&&(nt=n.R8I),V===n.SHORT&&(nt=n.R16I),V===n.INT&&(nt=n.R32I)),g===n.RG&&(V===n.FLOAT&&(nt=n.RG32F),V===n.HALF_FLOAT&&(nt=n.RG16F),V===n.UNSIGNED_BYTE&&(nt=n.RG8),V===n.UNSIGNED_SHORT&&xt&&(nt=xt.RG16_EXT),V===n.SHORT&&xt&&(nt=xt.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(nt=n.RG8UI),V===n.UNSIGNED_SHORT&&(nt=n.RG16UI),V===n.UNSIGNED_INT&&(nt=n.RG32UI),V===n.BYTE&&(nt=n.RG8I),V===n.SHORT&&(nt=n.RG16I),V===n.INT&&(nt=n.RG32I)),g===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(nt=n.RGB8UI),V===n.UNSIGNED_SHORT&&(nt=n.RGB16UI),V===n.UNSIGNED_INT&&(nt=n.RGB32UI),V===n.BYTE&&(nt=n.RGB8I),V===n.SHORT&&(nt=n.RGB16I),V===n.INT&&(nt=n.RGB32I)),g===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(nt=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(nt=n.RGBA16UI),V===n.UNSIGNED_INT&&(nt=n.RGBA32UI),V===n.BYTE&&(nt=n.RGBA8I),V===n.SHORT&&(nt=n.RGBA16I),V===n.INT&&(nt=n.RGBA32I)),g===n.RGB&&(V===n.UNSIGNED_SHORT&&xt&&(nt=xt.RGB16_EXT),V===n.SHORT&&xt&&(nt=xt.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(nt=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(nt=n.R11F_G11F_B10F)),g===n.RGBA){let lt=ft?Dr:le.getTransfer(tt);V===n.FLOAT&&(nt=n.RGBA32F),V===n.HALF_FLOAT&&(nt=n.RGBA16F),V===n.UNSIGNED_BYTE&&(nt=lt===me?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&xt&&(nt=xt.RGBA16_EXT),V===n.SHORT&&xt&&(nt=xt.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(nt=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(nt=n.RGB5_A1)}return(nt===n.R16F||nt===n.R32F||nt===n.RG16F||nt===n.RG32F||nt===n.RGBA16F||nt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function T(R,g){let V;return R?g===null||g===Vn||g===lr?V=n.DEPTH24_STENCIL8:g===Ln?V=n.DEPTH32F_STENCIL8:g===or&&(V=n.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Vn||g===lr?V=n.DEPTH_COMPONENT24:g===Ln?V=n.DEPTH_COMPONENT32F:g===or&&(V=n.DEPTH_COMPONENT16),V}function w(R,g){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ye&&R.minFilter!==Ke?Math.log2(Math.max(g.width,g.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?g.mipmaps.length:1}function P(R){let g=R.target;g.removeEventListener("dispose",P),A(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&f.delete(g)}function d(R){let g=R.target;g.removeEventListener("dispose",d),z(g)}function A(R){let g=i.get(R);if(g.__webglInit===void 0)return;let V=R.source,J=p.get(V);if(J){let tt=J[g.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&L(R),Object.keys(J).length===0&&p.delete(V)}i.remove(R)}function L(R){let g=i.get(R);n.deleteTexture(g.__webglTexture);let V=R.source,J=p.get(V);delete J[g.__cacheKey],a.memory.textures--}function z(R){let g=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(g.__webglFramebuffer[J]))for(let tt=0;tt<g.__webglFramebuffer[J].length;tt++)n.deleteFramebuffer(g.__webglFramebuffer[J][tt]);else n.deleteFramebuffer(g.__webglFramebuffer[J]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[J])}else{if(Array.isArray(g.__webglFramebuffer))for(let J=0;J<g.__webglFramebuffer.length;J++)n.deleteFramebuffer(g.__webglFramebuffer[J]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let J=0;J<g.__webglColorRenderbuffer.length;J++)g.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[J]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let V=R.textures;for(let J=0,tt=V.length;J<tt;J++){let ft=i.get(V[J]);ft.__webglTexture&&(n.deleteTexture(ft.__webglTexture),a.memory.textures--),i.remove(V[J])}i.remove(R)}let H=0;function G(){H=0}function D(){return H}function W(R){H=R}function q(){let R=H;return R>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,R}function $(R){let g=[];return g.push(R.wrapS),g.push(R.wrapT),g.push(R.wrapR||0),g.push(R.magFilter),g.push(R.minFilter),g.push(R.anisotropy),g.push(R.internalFormat),g.push(R.format),g.push(R.type),g.push(R.generateMipmaps),g.push(R.premultiplyAlpha),g.push(R.flipY),g.push(R.unpackAlignment),g.push(R.colorSpace),g.join()}function rt(R,g){let V=i.get(R);if(R.isVideoTexture&&F(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){let J=R.image;if(J===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(V,R,g);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+g)}function et(R,g){let V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){vt(V,R,g);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+g)}function at(R,g){let V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){vt(V,R,g);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+g)}function ct(R,g){let V=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&V.__version!==R.version){Vt(V,R,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+g)}let Nt={[Vs]:n.REPEAT,[vn]:n.CLAMP_TO_EDGE,[mo]:n.MIRRORED_REPEAT},bt={[Ye]:n.NEAREST,[od]:n.NEAREST_MIPMAP_NEAREST,[ca]:n.NEAREST_MIPMAP_LINEAR,[Ke]:n.LINEAR,[qo]:n.LINEAR_MIPMAP_NEAREST,[Ni]:n.LINEAR_MIPMAP_LINEAR},ae={[ud]:n.NEVER,[gd]:n.ALWAYS,[dd]:n.LESS,[Pl]:n.LEQUAL,[fd]:n.EQUAL,[Il]:n.GEQUAL,[pd]:n.GREATER,[md]:n.NOTEQUAL};function $t(R,g){if(g.type===Ln&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ke||g.magFilter===qo||g.magFilter===ca||g.magFilter===Ni||g.minFilter===Ke||g.minFilter===qo||g.minFilter===ca||g.minFilter===Ni)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Nt[g.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Nt[g.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Nt[g.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,bt[g.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,bt[g.minFilter]),g.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ae[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ye||g.minFilter!==ca&&g.minFilter!==Ni||g.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function qt(R,g){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,g.addEventListener("dispose",P));let J=g.source,tt=p.get(J);tt===void 0&&(tt={},p.set(J,tt));let ft=$(g);if(ft!==R.__cacheKey){tt[ft]===void 0&&(tt[ft]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),tt[ft].usedTimes++;let xt=tt[R.__cacheKey];xt!==void 0&&(tt[R.__cacheKey].usedTimes--,xt.usedTimes===0&&L(g)),R.__cacheKey=ft,R.__webglTexture=tt[ft].texture}return V}function j(R,g,V){return Math.floor(Math.floor(R/V)/g)}function ot(R,g,V,J){let ft=R.updateRanges;if(ft.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,V,J,g.data);else{ft.sort((Ft,St)=>Ft.start-St.start);let xt=0;for(let Ft=1;Ft<ft.length;Ft++){let St=ft[xt],Mt=ft[Ft],v=St.start+St.count,C=j(Mt.start,g.width,4),N=j(St.start,g.width,4);Mt.start<=v+1&&C===N&&j(Mt.start+Mt.count-1,g.width,4)===C?St.count=Math.max(St.count,Mt.start+Mt.count-St.start):(++xt,ft[xt]=Mt)}ft.length=xt+1;let nt=e.getParameter(n.UNPACK_ROW_LENGTH),lt=e.getParameter(n.UNPACK_SKIP_PIXELS),yt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Ft=0,St=ft.length;Ft<St;Ft++){let Mt=ft[Ft],v=Math.floor(Mt.start/4),C=Math.ceil(Mt.count/4),N=v%g.width,S=Math.floor(v/g.width),B=C,O=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,N),e.pixelStorei(n.UNPACK_SKIP_ROWS,S),e.texSubImage2D(n.TEXTURE_2D,0,N,S,B,O,V,J,g.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,nt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(n.UNPACK_SKIP_ROWS,yt)}}function vt(R,g,V){let J=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(J=n.TEXTURE_3D);let tt=qt(R,g),ft=g.source;e.bindTexture(J,R.__webglTexture,n.TEXTURE0+V);let xt=i.get(ft);if(ft.version!==xt.__version||tt===!0){if(e.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let O=le.getPrimaries(le.workingColorSpace),K=g.colorSpace===Gn?null:le.getPrimaries(g.colorSpace),st=g.colorSpace===Gn||O===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st)}e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let lt=_(g.image,!1,s.maxTextureSize);lt=ce(g,lt);let yt=r.convert(g.format,g.colorSpace),Ft=r.convert(g.type),St=y(g.internalFormat,yt,Ft,g.normalized,g.colorSpace,g.isVideoTexture);$t(J,g);let Mt,v=g.mipmaps,C=g.isVideoTexture!==!0,N=xt.__version===void 0||tt===!0,S=ft.dataReady,B=w(g,lt);if(g.isDepthTexture)St=T(g.format===Ui,g.type),N&&(C?e.texStorage2D(n.TEXTURE_2D,1,St,lt.width,lt.height):e.texImage2D(n.TEXTURE_2D,0,St,lt.width,lt.height,0,yt,Ft,null));else if(g.isDataTexture)if(v.length>0){C&&N&&e.texStorage2D(n.TEXTURE_2D,B,St,v[0].width,v[0].height);for(let O=0,K=v.length;O<K;O++)Mt=v[O],C?S&&e.texSubImage2D(n.TEXTURE_2D,O,0,0,Mt.width,Mt.height,yt,Ft,Mt.data):e.texImage2D(n.TEXTURE_2D,O,St,Mt.width,Mt.height,0,yt,Ft,Mt.data);g.generateMipmaps=!1}else C?(N&&e.texStorage2D(n.TEXTURE_2D,B,St,lt.width,lt.height),S&&ot(g,lt,yt,Ft)):e.texImage2D(n.TEXTURE_2D,0,St,lt.width,lt.height,0,yt,Ft,lt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){C&&N&&e.texStorage3D(n.TEXTURE_2D_ARRAY,B,St,v[0].width,v[0].height,lt.depth);for(let O=0,K=v.length;O<K;O++)if(Mt=v[O],g.format!==Dn)if(yt!==null)if(C){if(S)if(g.layerUpdates.size>0){let st=hh(Mt.width,Mt.height,g.format,g.type);for(let X of g.layerUpdates){let ht=Mt.data.subarray(X*st/Mt.data.BYTES_PER_ELEMENT,(X+1)*st/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,O,0,0,X,Mt.width,Mt.height,1,yt,ht)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,O,0,0,0,Mt.width,Mt.height,lt.depth,yt,Mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,O,St,Mt.width,Mt.height,lt.depth,0,Mt.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else C?S&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,O,0,0,0,Mt.width,Mt.height,lt.depth,yt,Ft,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,O,St,Mt.width,Mt.height,lt.depth,0,yt,Ft,Mt.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{C&&N&&e.texStorage2D(n.TEXTURE_2D,B,St,v[0].width,v[0].height);for(let O=0,K=v.length;O<K;O++)Mt=v[O],g.format!==Dn?yt!==null?C?S&&e.compressedTexSubImage2D(n.TEXTURE_2D,O,0,0,Mt.width,Mt.height,yt,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,O,St,Mt.width,Mt.height,0,Mt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?S&&e.texSubImage2D(n.TEXTURE_2D,O,0,0,Mt.width,Mt.height,yt,Ft,Mt.data):e.texImage2D(n.TEXTURE_2D,O,St,Mt.width,Mt.height,0,yt,Ft,Mt.data)}else if(g.isDataArrayTexture)if(C){if(N&&e.texStorage3D(n.TEXTURE_2D_ARRAY,B,St,lt.width,lt.height,lt.depth),S)if(g.layerUpdates.size>0){let O=hh(lt.width,lt.height,g.format,g.type);for(let K of g.layerUpdates){let st=lt.data.subarray(K*O/lt.data.BYTES_PER_ELEMENT,(K+1)*O/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,lt.width,lt.height,1,yt,Ft,st)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,yt,Ft,lt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,St,lt.width,lt.height,lt.depth,0,yt,Ft,lt.data);else if(g.isData3DTexture)C?(N&&e.texStorage3D(n.TEXTURE_3D,B,St,lt.width,lt.height,lt.depth),S&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,yt,Ft,lt.data)):e.texImage3D(n.TEXTURE_3D,0,St,lt.width,lt.height,lt.depth,0,yt,Ft,lt.data);else if(g.isFramebufferTexture){if(N)if(C)e.texStorage2D(n.TEXTURE_2D,B,St,lt.width,lt.height);else{let O=lt.width,K=lt.height;for(let st=0;st<B;st++)e.texImage2D(n.TEXTURE_2D,st,St,O,K,0,yt,Ft,null),O>>=1,K>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){let O=n.canvas;if(O.hasAttribute("layoutsubtree")||O.setAttribute("layoutsubtree","true"),lt.parentNode!==O){O.appendChild(lt),f.add(g),O.onpaint=K=>{let st=K.changedElements;for(let X of f)st.includes(X.image)&&(X.needsUpdate=!0)},O.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,lt);else{let st=n.RGBA,X=n.RGBA,ht=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,st,X,ht,lt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(v.length>0){if(C&&N){let O=Qt(v[0]);e.texStorage2D(n.TEXTURE_2D,B,St,O.width,O.height)}for(let O=0,K=v.length;O<K;O++)Mt=v[O],C?S&&e.texSubImage2D(n.TEXTURE_2D,O,0,0,yt,Ft,Mt):e.texImage2D(n.TEXTURE_2D,O,St,yt,Ft,Mt);g.generateMipmaps=!1}else if(C){if(N){let O=Qt(lt);e.texStorage2D(n.TEXTURE_2D,B,St,O.width,O.height)}S&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,yt,Ft,lt)}else e.texImage2D(n.TEXTURE_2D,0,St,yt,Ft,lt);m(g)&&E(J),xt.__version=ft.version,g.onUpdate&&g.onUpdate(g)}R.__version=g.version}function Vt(R,g,V){if(g.image.length!==6)return;let J=qt(R,g),tt=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+V);let ft=i.get(tt);if(tt.version!==ft.__version||J===!0){e.activeTexture(n.TEXTURE0+V);let xt=le.getPrimaries(le.workingColorSpace),nt=g.colorSpace===Gn?null:le.getPrimaries(g.colorSpace),lt=g.colorSpace===Gn||xt===nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let yt=g.isCompressedTexture||g.image[0].isCompressedTexture,Ft=g.image[0]&&g.image[0].isDataTexture,St=[];for(let X=0;X<6;X++)!yt&&!Ft?St[X]=_(g.image[X],!0,s.maxCubemapSize):St[X]=Ft?g.image[X].image:g.image[X],St[X]=ce(g,St[X]);let Mt=St[0],v=r.convert(g.format,g.colorSpace),C=r.convert(g.type),N=y(g.internalFormat,v,C,g.normalized,g.colorSpace),S=g.isVideoTexture!==!0,B=ft.__version===void 0||J===!0,O=tt.dataReady,K=w(g,Mt);$t(n.TEXTURE_CUBE_MAP,g);let st;if(yt){S&&B&&e.texStorage2D(n.TEXTURE_CUBE_MAP,K,N,Mt.width,Mt.height);for(let X=0;X<6;X++){st=St[X].mipmaps;for(let ht=0;ht<st.length;ht++){let dt=st[ht];g.format!==Dn?v!==null?S?O&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ht,0,0,dt.width,dt.height,v,dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ht,N,dt.width,dt.height,0,dt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):S?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ht,0,0,dt.width,dt.height,v,C,dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ht,N,dt.width,dt.height,0,v,C,dt.data)}}}else{if(st=g.mipmaps,S&&B){st.length>0&&K++;let X=Qt(St[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,K,N,X.width,X.height)}for(let X=0;X<6;X++)if(Ft){S?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,St[X].width,St[X].height,v,C,St[X].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,N,St[X].width,St[X].height,0,v,C,St[X].data);for(let ht=0;ht<st.length;ht++){let Rt=st[ht].image[X].image;S?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ht+1,0,0,Rt.width,Rt.height,v,C,Rt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ht+1,N,Rt.width,Rt.height,0,v,C,Rt.data)}}else{S?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,v,C,St[X]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,N,v,C,St[X]);for(let ht=0;ht<st.length;ht++){let dt=st[ht];S?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ht+1,0,0,v,C,dt.image[X]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ht+1,N,v,C,dt.image[X])}}}m(g)&&E(n.TEXTURE_CUBE_MAP),ft.__version=tt.version,g.onUpdate&&g.onUpdate(g)}R.__version=g.version}function wt(R,g,V,J,tt,ft){let xt=r.convert(V.format,V.colorSpace),nt=r.convert(V.type),lt=y(V.internalFormat,xt,nt,V.normalized,V.colorSpace),yt=i.get(g),Ft=i.get(V);if(Ft.__renderTarget=g,!yt.__hasExternalTextures){let St=Math.max(1,g.width>>ft),Mt=Math.max(1,g.height>>ft);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,ft,lt,St,Mt,g.depth,0,xt,nt,null):e.texImage2D(tt,ft,lt,St,Mt,0,xt,nt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),zt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,tt,Ft.__webglTexture,0,Bt(g)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,tt,Ft.__webglTexture,ft),e.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(R,g,V){if(n.bindRenderbuffer(n.RENDERBUFFER,R),g.depthBuffer){let J=g.depthTexture,tt=J&&J.isDepthTexture?J.type:null,ft=T(g.stencilBuffer,tt),xt=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;zt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Bt(g),ft,g.width,g.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt(g),ft,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ft,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,R)}else{let J=g.textures;for(let tt=0;tt<J.length;tt++){let ft=J[tt],xt=r.convert(ft.format,ft.colorSpace),nt=r.convert(ft.type),lt=y(ft.internalFormat,xt,nt,ft.normalized,ft.colorSpace);zt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Bt(g),lt,g.width,g.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt(g),lt,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,lt,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function oe(R,g,V){let J=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=i.get(g.depthTexture);if(tt.__renderTarget=g,(!tt.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),J){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,g.depthTexture.addEventListener("dispose",P)),tt.__webglTexture===void 0){tt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),$t(n.TEXTURE_CUBE_MAP,g.depthTexture);let yt=r.convert(g.depthTexture.format),Ft=r.convert(g.depthTexture.type),St;g.depthTexture.format===Jn?St=n.DEPTH_COMPONENT24:g.depthTexture.format===Ui&&(St=n.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,St,g.width,g.height,0,yt,Ft,null)}}else rt(g.depthTexture,0);let ft=tt.__webglTexture,xt=Bt(g),nt=J?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,lt=g.depthTexture.format===Ui?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Jn)zt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,lt,nt,ft,0,xt):n.framebufferTexture2D(n.FRAMEBUFFER,lt,nt,ft,0);else if(g.depthTexture.format===Ui)zt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,lt,nt,ft,0,xt):n.framebufferTexture2D(n.FRAMEBUFFER,lt,nt,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(R){let g=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==R.depthTexture){let J=R.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),J){let tt=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,J.removeEventListener("dispose",tt)};J.addEventListener("dispose",tt),g.__depthDisposeCallback=tt}g.__boundDepthTexture=J}if(R.depthTexture&&!g.__autoAllocateDepthBuffer)if(V)for(let J=0;J<6;J++)oe(g.__webglFramebuffer[J],R,J);else{let J=R.texture.mipmaps;J&&J.length>0?oe(g.__webglFramebuffer[0],R,0):oe(g.__webglFramebuffer,R,0)}else if(V){g.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[J]),g.__webglDepthbuffer[J]===void 0)g.__webglDepthbuffer[J]=n.createRenderbuffer(),kt(g.__webglDepthbuffer[J],R,!1);else{let tt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=g.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,ft),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,ft)}}else{let J=R.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),kt(g.__webglDepthbuffer,R,!1);else{let tt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ft),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,ft)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(R,g,V){let J=i.get(R);g!==void 0&&wt(J.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&it(R)}function mt(R){let g=R.texture,V=i.get(R),J=i.get(g);R.addEventListener("dispose",d);let tt=R.textures,ft=R.isWebGLCubeRenderTarget===!0,xt=tt.length>1;if(xt||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=g.version,a.memory.textures++),ft){V.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer[nt]=[];for(let lt=0;lt<g.mipmaps.length;lt++)V.__webglFramebuffer[nt][lt]=n.createFramebuffer()}else V.__webglFramebuffer[nt]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer=[];for(let nt=0;nt<g.mipmaps.length;nt++)V.__webglFramebuffer[nt]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(xt)for(let nt=0,lt=tt.length;nt<lt;nt++){let yt=i.get(tt[nt]);yt.__webglTexture===void 0&&(yt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&zt(R)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let nt=0;nt<tt.length;nt++){let lt=tt[nt];V.__webglColorRenderbuffer[nt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[nt]);let yt=r.convert(lt.format,lt.colorSpace),Ft=r.convert(lt.type),St=y(lt.internalFormat,yt,Ft,lt.normalized,lt.colorSpace,R.isXRRenderTarget===!0),Mt=Bt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,St,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.RENDERBUFFER,V.__webglColorRenderbuffer[nt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),kt(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ft){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),$t(n.TEXTURE_CUBE_MAP,g);for(let nt=0;nt<6;nt++)if(g.mipmaps&&g.mipmaps.length>0)for(let lt=0;lt<g.mipmaps.length;lt++)wt(V.__webglFramebuffer[nt][lt],R,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,lt);else wt(V.__webglFramebuffer[nt],R,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);m(g)&&E(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let nt=0,lt=tt.length;nt<lt;nt++){let yt=tt[nt],Ft=i.get(yt),St=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(St=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(St,Ft.__webglTexture),$t(St,yt),wt(V.__webglFramebuffer,R,yt,n.COLOR_ATTACHMENT0+nt,St,0),m(yt)&&E(St)}e.unbindTexture()}else{let nt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(nt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(nt,J.__webglTexture),$t(nt,g),g.mipmaps&&g.mipmaps.length>0)for(let lt=0;lt<g.mipmaps.length;lt++)wt(V.__webglFramebuffer[lt],R,g,n.COLOR_ATTACHMENT0,nt,lt);else wt(V.__webglFramebuffer,R,g,n.COLOR_ATTACHMENT0,nt,0);m(g)&&E(nt),e.unbindTexture()}R.depthBuffer&&it(R)}function gt(R){let g=R.textures;for(let V=0,J=g.length;V<J;V++){let tt=g[V];if(m(tt)){let ft=I(R),xt=i.get(tt).__webglTexture;e.bindTexture(ft,xt),E(ft),e.unbindTexture()}}}let _t=[],Ut=[];function Ct(R){if(R.samples>0){if(zt(R)===!1){let g=R.textures,V=R.width,J=R.height,tt=n.COLOR_BUFFER_BIT,ft=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(R),nt=g.length>1;if(nt)for(let yt=0;yt<g.length;yt++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);let lt=R.texture.mipmaps;lt&&lt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let yt=0;yt<g.length;yt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),nt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[yt]);let Ft=i.get(g[yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ft,0)}n.blitFramebuffer(0,0,V,J,0,0,V,J,tt,n.NEAREST),l===!0&&(_t.length=0,Ut.length=0,_t.push(n.COLOR_ATTACHMENT0+yt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(_t.push(ft),Ut.push(ft),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ut)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_t))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),nt)for(let yt=0;yt<g.length;yt++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,xt.__webglColorRenderbuffer[yt]);let Ft=i.get(g[yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,Ft,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let g=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Bt(R){return Math.min(s.maxSamples,R.samples)}function zt(R){let g=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function F(R){let g=a.render.frame;h.get(R)!==g&&(h.set(R,g),R.update())}function ce(R,g){let V=R.colorSpace,J=R.format,tt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Lr&&V!==Gn&&(le.getTransfer(V)===me?(J!==Dn||tt!==pn)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",V)),g}function Qt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=G,this.getTextureUnits=D,this.setTextureUnits=W,this.setTexture2D=rt,this.setTexture2DArray=et,this.setTexture3D=at,this.setTextureCube=ct,this.rebindTextures=ut,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function fv(n,t){function e(i,s=Gn){let r,a=le.getTransfer(s);if(i===pn)return n.UNSIGNED_BYTE;if(i===Zo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Jo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Qc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===th)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Kc)return n.BYTE;if(i===jc)return n.SHORT;if(i===or)return n.UNSIGNED_SHORT;if(i===Yo)return n.INT;if(i===Vn)return n.UNSIGNED_INT;if(i===Ln)return n.FLOAT;if(i===Hn)return n.HALF_FLOAT;if(i===eh)return n.ALPHA;if(i===nh)return n.RGB;if(i===Dn)return n.RGBA;if(i===Jn)return n.DEPTH_COMPONENT;if(i===Ui)return n.DEPTH_STENCIL;if(i===$o)return n.RED;if(i===Ko)return n.RED_INTEGER;if(i===Fi)return n.RG;if(i===jo)return n.RG_INTEGER;if(i===Qo)return n.RGBA_INTEGER;if(i===ha||i===ua||i===da||i===fa)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tl||i===el||i===nl||i===il)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===el)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sl||i===rl||i===al||i===ol||i===ll||i===pa||i===cl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===sl||i===rl)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===al)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ol)return r.COMPRESSED_R11_EAC;if(i===ll)return r.COMPRESSED_SIGNED_R11_EAC;if(i===pa)return r.COMPRESSED_RG11_EAC;if(i===cl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===hl||i===ul||i===dl||i===fl||i===pl||i===ml||i===gl||i===_l||i===xl||i===vl||i===yl||i===Ml||i===Sl||i===bl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===hl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ul)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ml)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_l)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ml)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===El||i===Tl||i===wl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===El)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Al||i===Rl||i===ma||i===Cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Al)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var pv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mv=`
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

}`,Eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Hr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Sn({vertexShader:pv,fragmentShader:mv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _e(new In(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Th=class extends Bn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,p=null,x=null,b=typeof XRWebGLBinding<"u",_=new Eh,m={},E=e.getContextAttributes(),I=null,y=null,T=[],w=[],P=new pt,d=null,A=null,L=new qe;L.viewport=new Re;let z=new qe;z.viewport=new Re;let H=[L,z],G=new Go,D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ot=T[j];return ot===void 0&&(ot=new Zs,T[j]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(j){let ot=T[j];return ot===void 0&&(ot=new Zs,T[j]=ot),ot.getGripSpace()},this.getHand=function(j){let ot=T[j];return ot===void 0&&(ot=new Zs,T[j]=ot),ot.getHandSpace()};function q(j){let ot=w.indexOf(j.inputSource);if(ot===-1)return;let vt=T[ot];vt!==void 0&&(vt.update(j.inputSource,j.frame,c||a),vt.dispatchEvent({type:j.type,data:j.inputSource}))}function $(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",rt);for(let j=0;j<T.length;j++){let ot=w[j];ot!==null&&(w[j]=null,T[j].disconnect(ot))}D=null,W=null,_.reset();for(let j in m)delete m[j];if(t.setRenderTarget(I),p=null,u=null,f=null,s=null,y=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(d),t.setSize(P.width,P.height,!1),A!==null){let j=A.camera;j.fov=A.fov,j.zoom=A.zoom,j.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(I=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",$),s.addEventListener("inputsourceschange",rt),E.xrCompatible!==!0&&await e.makeXRCompatible(),d=t.getPixelRatio(),t.getSize(P),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Vt=null,wt=null;E.depth&&(wt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=E.stencil?Ui:Jn,Vt=E.stencil?lr:Vn);let kt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(kt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new fn(u.textureWidth,u.textureHeight,{format:Dn,type:pn,depthTexture:new Ei(u.textureWidth,u.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let vt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new fn(p.framebufferWidth,p.framebufferHeight,{format:Dn,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),qt.setContext(s),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function rt(j){for(let ot=0;ot<j.removed.length;ot++){let vt=j.removed[ot],Vt=w.indexOf(vt);Vt>=0&&(w[Vt]=null,T[Vt].disconnect(vt))}for(let ot=0;ot<j.added.length;ot++){let vt=j.added[ot],Vt=w.indexOf(vt);if(Vt===-1){for(let kt=0;kt<T.length;kt++)if(kt>=w.length){w.push(vt),Vt=kt;break}else if(w[kt]===null){w[kt]=vt,Vt=kt;break}if(Vt===-1)break}let wt=T[Vt];wt&&wt.connect(vt)}}let et=new U,at=new U;function ct(j,ot,vt){et.setFromMatrixPosition(ot.matrixWorld),at.setFromMatrixPosition(vt.matrixWorld);let Vt=et.distanceTo(at),wt=ot.projectionMatrix.elements,kt=vt.projectionMatrix.elements,oe=wt[14]/(wt[10]-1),it=wt[14]/(wt[10]+1),ut=(wt[9]+1)/wt[5],mt=(wt[9]-1)/wt[5],gt=(wt[8]-1)/wt[0],_t=(kt[8]+1)/kt[0],Ut=oe*gt,Ct=oe*_t,Bt=Vt/(-gt+_t),zt=Bt*-gt;if(ot.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(zt),j.translateZ(Bt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),wt[10]===-1)j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let F=oe+Bt,ce=it+Bt,Qt=Ut-zt,R=Ct+(Vt-zt),g=ut*it/ce*F,V=mt*it/ce*F;j.projectionMatrix.makePerspective(Qt,R,g,V,F,ce),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Nt(j,ot){ot===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ot.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ot=j.near,vt=j.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(vt=_.depthFar)),G.near=z.near=L.near=ot,G.far=z.far=L.far=vt,(D!==G.near||W!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),D=G.near,W=G.far),G.layers.mask=j.layers.mask|6,L.layers.mask=G.layers.mask&-5,z.layers.mask=G.layers.mask&-3;let Vt=j.parent,wt=G.cameras;Nt(G,Vt);for(let kt=0;kt<wt.length;kt++)Nt(wt[kt],Vt);wt.length===2?ct(G,L,z):G.projectionMatrix.copy(L.projectionMatrix),A===null&&j.isPerspectiveCamera&&(A={camera:j,fov:j.fov,zoom:j.zoom}),bt(j,G,Vt)};function bt(j,ot,vt){vt===null?j.matrix.copy(ot.matrixWorld):(j.matrix.copy(vt.matrixWorld),j.matrix.invert(),j.matrix.multiply(ot.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Xs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(G)},this.getCameraTexture=function(j){return m[j]};let ae=null;function $t(j,ot){if(h=ot.getViewerPose(c||a),x=ot,h!==null){let vt=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Vt=!1;vt.length!==G.cameras.length&&(G.cameras.length=0,Vt=!0);for(let it=0;it<vt.length;it++){let ut=vt[it],mt=null;if(p!==null)mt=p.getViewport(ut);else{let _t=f.getViewSubImage(u,ut);mt=_t.viewport,it===0&&(t.setRenderTargetTextures(y,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(y))}let gt=H[it];gt===void 0&&(gt=new qe,gt.layers.enable(it),gt.viewport=new Re,H[it]=gt),gt.matrix.fromArray(ut.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(ut.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(mt.x,mt.y,mt.width,mt.height),it===0&&(G.matrix.copy(gt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Vt===!0&&G.cameras.push(gt)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){f=i.getBinding();let it=f.getDepthInformation(vt[0]);it&&it.isValid&&it.texture&&_.init(it,s.renderState)}if(wt&&wt.includes("camera-access")&&b){t.state.unbindTexture(),f=i.getBinding();for(let it=0;it<vt.length;it++){let ut=vt[it].camera;if(ut){let mt=m[ut];mt||(mt=new Hr,m[ut]=mt);let gt=f.getCameraImage(ut);mt.sourceTexture=gt}}}}for(let vt=0;vt<T.length;vt++){let Vt=w[vt],wt=T[vt];Vt!==null&&wt!==void 0&&wt.update(Vt,ot,c||a)}ae&&ae(j,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),x=null}let qt=new Kd;qt.setAnimationLoop($t),this.setAnimationLoop=function(j){ae=j},this.dispose=function(){}}},gv=new ge,sf=new Jt;sf.set(-1,0,0,0,1,0,0,0,1);function _v(n,t){function e(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function i(_,m){m.color.getRGB(_.fogColor.value,oh(n)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function s(_,m,E,I,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(_,m):m.isMeshLambertMaterial?(r(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(_,m),f(_,m)):m.isMeshPhongMaterial?(r(_,m),h(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(_,m),u(_,m),m.isMeshPhysicalMaterial&&p(_,m,y)):m.isMeshMatcapMaterial?(r(_,m),x(_,m)):m.isMeshDepthMaterial?r(_,m):m.isMeshDistanceMaterial?(r(_,m),b(_,m)):m.isMeshNormalMaterial?r(_,m):m.isLineBasicMaterial?(a(_,m),m.isLineDashedMaterial&&o(_,m)):m.isPointsMaterial?l(_,m,E,I):m.isSpriteMaterial?c(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,e(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===hn&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,e(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===hn&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,e(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,e(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let E=t.get(m),I=E.envMap,y=E.envMapRotation;I&&(_.envMap.value=I,_.envMapRotation.value.setFromMatrix4(gv.makeRotationFromEuler(y)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(sf),_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,_.aoMapTransform))}function a(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform))}function o(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,E,I){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*E,_.scale.value=I*.5,m.map&&(_.map.value=m.map,e(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function h(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function f(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function u(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function p(_,m,E){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===hn&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.retroreflectivity>0&&(_.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=E.texture,_.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,m){m.matcap&&(_.matcap.value=m.matcap)}function b(_,m){let E=t.get(m).light;_.referencePosition.value.setFromMatrixPosition(E.matrixWorld),_.nearDistance.value=E.shadow.camera.near,_.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function xv(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){let w=T.program;i.uniformBlockBinding(y,w)}function c(y,T){let w=s[y.id];w===void 0&&(_(y),w=h(y),s[y.id]=w,y.addEventListener("dispose",E));let P=T.program;i.updateUBOMapping(y,P);let d=t.render.frame;r[y.id]!==d&&(u(y),r[y.id]=d)}function h(y){let T=f();y.__bindingPointIndex=T;let w=n.createBuffer(),P=y.__size,d=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,P,d),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,w),w}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let T=s[y.id],w=y.uniforms,P=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let d=0,A=w.length;d<A;d++){let L=w[d];if(Array.isArray(L))for(let z=0,H=L.length;z<H;z++)p(L[z],d,z,P);else p(L,d,0,P)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,T,w,P){if(b(y,T,w,P)===!0){let d=y.__offset,A=y.value;if(Array.isArray(A)){let L=0;for(let z=0;z<A.length;z++){let H=A[z],G=m(H);x(H,y.__data,L),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(L+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(A,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,d,y.__data)}}function x(y,T,w){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,w)}function b(y,T,w,P){let d=y.value,A=T+"_"+w;if(P[A]===void 0)return typeof d=="number"||typeof d=="boolean"?P[A]=d:ArrayBuffer.isView(d)?P[A]=d.slice():P[A]=d.clone(),!0;{let L=P[A];if(typeof d=="number"||typeof d=="boolean"){if(L!==d)return P[A]=d,!0}else{if(ArrayBuffer.isView(d))return!0;if(L.equals(d)===!1)return L.copy(d),!0}}return!1}function _(y){let T=y.uniforms,w=0,P=16;for(let A=0,L=T.length;A<L;A++){let z=Array.isArray(T[A])?T[A]:[T[A]];for(let H=0,G=z.length;H<G;H++){let D=z[H],W=Array.isArray(D.value)?D.value:[D.value];for(let q=0,$=W.length;q<$;q++){let rt=W[q],et=m(rt),at=w%P,ct=at%et.boundary,Nt=at+ct;w+=ct,Nt!==0&&P-Nt<et.storage&&(w+=P-Nt),D.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=et.storage}}}let d=w%P;return d>0&&(w+=P-d),y.__size=w,y.__cache={},this}function m(y){let T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",y),T}function E(y){let T=y.target;T.removeEventListener("dispose",E);let w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function I(){for(let y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:I}}var vv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ti=null;function yv(){return ti===null&&(ti=new Br(vv,16,16,Fi,Hn),ti.name="DFG_LUT",ti.minFilter=Ke,ti.magFilter=Ke,ti.wrapS=vn,ti.wrapT=vn,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}var Fl=class{constructor(t={}){let{canvas:e=xd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=pn}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;let b=p,_=new Set([Qo,jo,Ko]),m=new Set([pn,Vn,or,lr,Zo,Jo]),E=new Uint32Array(4),I=new Int32Array(4),y=new U,T=null,w=null,P=[],d=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,z=!1,H=null,G=null,D=null,W=null;this._outputColorSpace=Xe;let q=0,$=0,rt=null,et=-1,at=null,ct=new Re,Nt=new Re,bt=null,ae=new Yt(0),$t=0,qt=e.width,j=e.height,ot=1,vt=null,Vt=null,wt=new Re(0,0,qt,j),kt=new Re(0,0,qt,j),oe=!1,it=new $s,ut=!1,mt=!1,gt=new ge,_t=new U,Ut=new Re,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Bt=!1;function zt(){return rt===null?ot:1}let F=i;function ce(M,k){return e.getContext(M,k)}let Qt,R,g,V,J,tt,ft,xt,nt,lt,yt,Ft,St,Mt,v,C,N,S,B,O,K,st,X;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Rt,!1),e.addEventListener("webglcontextrestored",Wt,!1),e.addEventListener("webglcontextcreationerror",ye,!1),F===null){let k="webgl2";if(F=ce(k,M),F===null)throw ce(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ht()}catch(M){throw e.removeEventListener("webglcontextlost",Rt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",ye,!1),Gt("WebGLRenderer: "+M.message),M}function ht(){Qt=new A_(F),Qt.init(),K=new fv(F,Qt),R=new __(F,Qt,t,K),g=new uv(F,Qt),R.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),G=F.createFramebuffer(),D=F.createFramebuffer(),W=F.createFramebuffer(),V=new P_(F),J=new Kx,tt=new dv(F,Qt,g,J,R,K,V),ft=new w_(L),xt=new Lm(F),st=new m_(F,xt),nt=new R_(F,xt,V,st),lt=new L_(F,nt,xt,st,V),S=new I_(F,R,tt),v=new x_(J),yt=new $x(L,ft,Qt,R,st,v),Ft=new _v(L,J),St=new Qx,Mt=new rv(Qt),N=new p_(L,ft,g,lt,x,l),C=new hv(L,lt,R),X=new xv(F,V,R,g),B=new g_(F,Qt,V),O=new C_(F,Qt,V),V.programs=yt.programs,L.capabilities=R,L.extensions=Qt,L.properties=J,L.renderLists=St,L.shadowMap=C,L.state=g,L.info=V}b!==pn&&(A=new N_(b,e.width,e.height,o,s,r));let dt=new Th(L,F);this.xr=dt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let M=Qt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Qt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(M){M!==void 0&&(ot=M,this.setSize(qt,j,!1))},this.getSize=function(M){return M.set(qt,j)},this.setSize=function(M,k,Q=!0){if(dt.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}qt=M,j=k,e.width=Math.floor(M*ot),e.height=Math.floor(k*ot),Q===!0&&(e.style.width=M+"px",e.style.height=k+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,M,k)},this.getDrawingBufferSize=function(M){return M.set(qt*ot,j*ot).floor()},this.setDrawingBufferSize=function(M,k,Q){qt=M,j=k,ot=Q,e.width=Math.floor(M*Q),e.height=Math.floor(k*Q),this.setViewport(0,0,M,k)},this.setEffects=function(M){if(b===pn){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let k=0;k<M.length;k++)if(M[k].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ct)},this.getViewport=function(M){return M.copy(wt)},this.setViewport=function(M,k,Q,Y){M.isVector4?wt.set(M.x,M.y,M.z,M.w):wt.set(M,k,Q,Y),g.viewport(ct.copy(wt).multiplyScalar(ot).round())},this.getScissor=function(M){return M.copy(kt)},this.setScissor=function(M,k,Q,Y){M.isVector4?kt.set(M.x,M.y,M.z,M.w):kt.set(M,k,Q,Y),g.scissor(Nt.copy(kt).multiplyScalar(ot).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(M){g.setScissorTest(oe=M)},this.setOpaqueSort=function(M){vt=M},this.setTransparentSort=function(M){Vt=M},this.getClearColor=function(M){return M.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(M=!0,k=!0,Q=!0){let Y=0;if(M){let Z=!1;if(rt!==null){let At=rt.texture.format;Z=_.has(At)}if(Z){let At=rt.texture.type,It=m.has(At),Tt=N.getClearColor(),Lt=N.getClearAlpha(),Ot=Tt.r,te=Tt.g,re=Tt.b;It?(E[0]=Ot,E[1]=te,E[2]=re,E[3]=Lt,F.clearBufferuiv(F.COLOR,0,E)):(I[0]=Ot,I[1]=te,I[2]=re,I[3]=Lt,F.clearBufferiv(F.COLOR,0,I))}else Y|=F.COLOR_BUFFER_BIT}k&&(Y|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&F.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),H=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Rt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",ye,!1),N.dispose(),St.dispose(),Mt.dispose(),J.dispose(),ft.dispose(),lt.dispose(),st.dispose(),X.dispose(),yt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",$h),dt.removeEventListener("sessionend",Kh),Wi.stop()};function Rt(M){M.preventDefault(),sh("WebGLRenderer: Context Lost."),z=!0}function Wt(){sh("WebGLRenderer: Context Restored."),z=!1;let M=V.autoReset,k=C.enabled,Q=C.autoUpdate,Y=C.needsUpdate,Z=C.type;ht(),V.autoReset=M,C.enabled=k,C.autoUpdate=Q,C.needsUpdate=Y,C.type=Z}function ye(M){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function xe(M){let k=M.target;k.removeEventListener("dispose",xe),An(k)}function An(M){an(M),J.remove(M)}function an(M){let k=J.get(M).programs;k!==void 0&&(k.forEach(function(Q){yt.releaseProgram(Q)}),M.isShaderMaterial&&yt.releaseShaderCache(M))}this.renderBufferDirect=function(M,k,Q,Y,Z,At){k===null&&(k=Ct);let It=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Tt=Qf(M,k,Q,Y,Z);g.setMaterial(Y,It);let Lt=Q.index,Ot=1;if(Y.wireframe===!0){if(Lt=nt.getWireframeAttribute(Q),Lt===void 0)return;Ot=2}let te=Q.drawRange,re=Q.attributes.position,Dt=te.start*Ot,pe=(te.start+te.count)*Ot;At!==null&&(Dt=Math.max(Dt,At.start*Ot),pe=Math.min(pe,(At.start+At.count)*Ot)),Lt!==null?(Dt=Math.max(Dt,0),pe=Math.min(pe,Lt.count)):re!=null&&(Dt=Math.max(Dt,0),pe=Math.min(pe,re.count));let Ue=pe-Dt;if(Ue<0||Ue===1/0)return;st.setup(Z,Y,Tt,Q,Lt);let we,Se=B;if(Lt!==null&&(we=xt.get(Lt),Se=O,Se.setIndex(we)),Z.isMesh)Y.wireframe===!0?(g.setLineWidth(Y.wireframeLinewidth*zt()),Se.setMode(F.LINES)):Se.setMode(F.TRIANGLES);else if(Z.isLine){let je=Y.linewidth;je===void 0&&(je=1),g.setLineWidth(je*zt()),Z.isLineSegments?Se.setMode(F.LINES):Z.isLineLoop?Se.setMode(F.LINE_LOOP):Se.setMode(F.LINE_STRIP)}else Z.isPoints?Se.setMode(F.POINTS):Z.isSprite&&Se.setMode(F.TRIANGLES);if(Z.isBatchedMesh)if(Qt.get("WEBGL_multi_draw"))Se.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let je=Z._multiDrawStarts,Pt=Z._multiDrawCounts,on=Z._multiDrawCount,he=Lt?xt.get(Lt).bytesPerElement:1,Rn=J.get(Y).currentProgram.getUniforms();for(let qn=0;qn<on;qn++)Rn.setValue(F,"_gl_DrawID",qn),Se.render(je[qn]/he,Pt[qn])}else if(Z.isInstancedMesh)Se.renderInstances(Dt,Ue,Z.count);else if(Q.isInstancedBufferGeometry){let je=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Pt=Math.min(Q.instanceCount,je);Se.renderInstances(Dt,Ue,Pt)}else Se.render(Dt,Ue)};function La(M,k,Q,Y){H!==null&&M.isNodeMaterial&&H.setObject(Y,M),ut===!0&&v.setState(M,Q,!1),M.transparent===!0&&M.side===Ze&&M.forceSinglePass===!1?(M.side=hn,M.needsUpdate=!0,Ua(M,k,Y),M.side=Li,M.needsUpdate=!0,Ua(M,k,Y),M.side=Ze):Ua(M,k,Y)}this.compile=function(M,k,Q=null){Q===null&&(Q=M),H!==null&&H.renderStart(M,k,Q),w=Mt.get(Q),w.init(k),d.push(w),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(w.pushLight(Z),Z.castShadow&&w.pushShadow(Z))}),M!==Q&&M.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(w.pushLight(Z),Z.castShadow&&w.pushShadow(Z))}),w.setupLights(),H!==null&&H.updateLights(w.state.lightsArray),mt=this.localClippingEnabled,ut=v.init(this.clippingPlanes,mt),ut===!0&&v.setGlobalState(this.clippingPlanes,k),H!==null&&C.render(w.state.shadowsArray,Q,k);let Y=new Set;return M.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let At=Z.material;if(At)if(Array.isArray(At))for(let It=0;It<At.length;It++){let Tt=At[It];La(Tt,Q,k,Z),Y.add(Tt)}else La(At,Q,k,Z),Y.add(At)}),w=d.pop(),H!==null&&H.renderEnd(),Y},this.compileAsync=function(M,k,Q=null){let Y=this.compile(M,k,Q);return new Promise(Z=>{function At(){if(Y.forEach(function(It){let Lt=J.get(It).currentProgram;(Lt===void 0||Lt.isReady())&&Y.delete(It)}),Y.size===0){Z(M);return}setTimeout(At,10)}Qt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Gi=null;function Da(M){Gi&&Gi(M)}function $h(){Wi.stop()}function Kh(){Wi.start()}let Wi=new Kd;Wi.setAnimationLoop(Da),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(M){Gi=M,dt.setAnimationLoop(M),M===null?Wi.stop():Wi.start()},dt.addEventListener("sessionstart",$h),dt.addEventListener("sessionend",Kh),this.render=function(M,k){if(k!==void 0&&k.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;H!==null&&H.renderStart(M,k);let Q=dt.enabled===!0&&dt.isPresenting===!0,Y=A!==null&&(rt===null||Q)&&A.begin(L,rt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(k),k=dt.getCamera()),M.isScene===!0&&M.onBeforeRender(L,M,k,rt),w=Mt.get(M,d.length),w.init(k),w.state.textureUnits=tt.getTextureUnits(),d.push(w),gt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),it.setFromProjectionMatrix(gt,On,k.reversedDepth),mt=this.localClippingEnabled,ut=v.init(this.clippingPlanes,mt),T=St.get(M,P.length),T.init(),P.push(T),dt.enabled===!0&&dt.isPresenting===!0){let It=L.xr.getDepthSensingMesh();It!==null&&nc(It,k,-1/0,L.sortObjects)}nc(M,k,0,L.sortObjects),T.finish(),H!==null&&H.updateLights(w.state.lightsArray),L.sortObjects===!0&&T.sort(vt,Vt),Bt=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,Bt&&N.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ut===!0&&v.beginShadows();let Z=w.state.shadowsArray;if(C.render(Z,M,k),ut===!0&&v.endShadows(),(Y&&A.hasRenderPass())===!1){let It=T.opaque,Tt=T.transmissive;if(w.setupLights(),k.isArrayCamera){let Lt=k.cameras;if(Tt.length>0)for(let Ot=0,te=Lt.length;Ot<te;Ot++){let re=Lt[Ot];Qh(It,Tt,M,re)}Bt&&N.render(M);for(let Ot=0,te=Lt.length;Ot<te;Ot++){let re=Lt[Ot];jh(T,M,re,re.viewport)}}else Tt.length>0&&Qh(It,Tt,M,k),Bt&&N.render(M),jh(T,M,k)}rt!==null&&$===0&&(tt.updateMultisampleRenderTarget(rt),tt.updateRenderTargetMipmap(rt)),Y&&A.end(L),M.isScene===!0&&M.onAfterRender(L,M,k),st.resetDefaultState(),et=-1,at=null,d.pop(),d.length>0?(w=d[d.length-1],tt.setTextureUnits(w.state.textureUnits),ut===!0&&v.setGlobalState(L.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?T=P[P.length-1]:T=null,H!==null&&H.renderEnd()};function nc(M,k,Q,Y){if(M.visible===!1)return;if(M.layers.test(k.layers)){if(M.isGroup)Q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(k);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(it)){Y&&Ut.setFromMatrixPosition(M.matrixWorld).applyMatrix4(gt);let It=lt.update(M),Tt=M.material;Tt.visible&&T.push(M,It,Tt,Q,Ut.z,null,k)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(it))){let It=lt.update(M),Tt=M.material;if(Y&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ut.copy(M.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Ut.copy(It.boundingSphere.center)),Ut.applyMatrix4(M.matrixWorld).applyMatrix4(gt)),Array.isArray(Tt)){let Lt=It.groups;for(let Ot=0,te=Lt.length;Ot<te;Ot++){let re=Lt[Ot],Dt=Tt[re.materialIndex];Dt&&Dt.visible&&T.push(M,It,Dt,Q,Ut.z,re,k)}}else Tt.visible&&T.push(M,It,Tt,Q,Ut.z,null,k)}}let At=M.children;for(let It=0,Tt=At.length;It<Tt;It++)nc(At[It],k,Q,Y)}function jh(M,k,Q,Y){let{opaque:Z,transmissive:At,transparent:It}=M;w.setupLightsView(Q),ut===!0&&v.setGlobalState(L.clippingPlanes,Q),Y&&g.viewport(ct.copy(Y)),Z.length>0&&Na(Z,k,Q),At.length>0&&Na(At,k,Q),It.length>0&&Na(It,k,Q),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Qh(M,k,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Y.id]===void 0){let Dt=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Y.id]=new fn(1,1,{generateMipmaps:!0,type:Dt?Hn:pn,minFilter:Ni,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let At=w.state.transmissionRenderTarget[Y.id],It=Y.viewport||ct;At.setSize(It.z*L.transmissionResolutionScale,It.w*L.transmissionResolutionScale);let Tt=L.getRenderTarget(),Lt=L.getActiveCubeFace(),Ot=L.getActiveMipmapLevel();L.setRenderTarget(At),L.getClearColor(ae),$t=L.getClearAlpha(),$t<1&&L.setClearColor(16777215,.5),L.clear(),Bt&&N.render(Q);let te=L.toneMapping;L.toneMapping=kn;let re=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),w.setupLightsView(Y),ut===!0&&v.setGlobalState(L.clippingPlanes,Y),Na(M,Q,Y),tt.updateMultisampleRenderTarget(At),tt.updateRenderTargetMipmap(At),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let pe=0,Ue=k.length;pe<Ue;pe++){let we=k[pe],{object:Se,geometry:je,material:Pt,group:on}=we;if(Pt.side===Ze&&Se.layers.test(Y.layers)){let he=Pt.side;Pt.side=hn,Pt.needsUpdate=!0,tu(Se,Q,Y,je,Pt,on),Pt.side=he,Pt.needsUpdate=!0,Dt=!0}}Dt===!0&&(tt.updateMultisampleRenderTarget(At),tt.updateRenderTargetMipmap(At))}L.setRenderTarget(Tt,Lt,Ot),L.setClearColor(ae,$t),re!==void 0&&(Y.viewport=re),L.toneMapping=te}function Na(M,k,Q){let Y=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,At=M.length;Z<At;Z++){let It=M[Z],{object:Tt,geometry:Lt,group:Ot}=It,te=It.material;te.allowOverride===!0&&Y!==null&&(te=Y),Tt.layers.test(Q.layers)&&tu(Tt,k,Q,Lt,te,Ot)}}function tu(M,k,Q,Y,Z,At){H!==null&&Z.isNodeMaterial&&H.setObject(M,Z),M.onBeforeRender(L,k,Q,Y,Z,At),M.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Z.onBeforeRender(L,k,Q,Y,M,At),Z.transparent===!0&&Z.side===Ze&&Z.forceSinglePass===!1?(Z.side=hn,Z.needsUpdate=!0,L.renderBufferDirect(Q,k,Y,Z,M,At),Z.side=Li,Z.needsUpdate=!0,L.renderBufferDirect(Q,k,Y,Z,M,At),Z.side=Ze):L.renderBufferDirect(Q,k,Y,Z,M,At),M.onAfterRender(L,k,Q,Y,Z,At)}function Ua(M,k,Q){k.isScene!==!0&&(k=Ct);let Y=J.get(M),Z=w.state.lights,At=w.state.shadowsArray,It=Z.state.version,Tt=yt.getParameters(M,Z.state,At,k,Q,w.state.lightProbeGridArray),Lt=yt.getProgramCacheKey(Tt),Ot=Y.programs;Y.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?k.environment:null,Y.fog=k.fog;let te=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;Y.envMap=ft.get(M.envMap||Y.environment,te),Y.envMapRotation=Y.environment!==null&&M.envMap===null?k.environmentRotation:M.envMapRotation,Ot===void 0&&(M.addEventListener("dispose",xe),Ot=new Map,Y.programs=Ot);let re=Ot.get(Lt);if(re!==void 0){if(Y.currentProgram===re&&Y.lightsStateVersion===It)return nu(M,Tt),re}else Tt.uniforms=yt.getUniforms(M),H!==null&&M.isNodeMaterial&&H.build(M,Q,Tt),M.onBeforeCompile(Tt,L),re=yt.acquireProgram(Tt,Lt),Ot.set(Lt,re),Y.uniforms=Tt.uniforms;let Dt=Y.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Dt.clippingPlanes=v.uniform),nu(M,Tt),Y.needsLights=ep(M),Y.lightsStateVersion=It,Y.needsLights&&(Dt.ambientLightColor.value=Z.state.ambient,Dt.lightProbe.value=Z.state.probe,Dt.sunLights.value=Z.state.sun,Dt.sunLightShadows.value=Z.state.sunShadow,Dt.directionalLights.value=Z.state.directional,Dt.directionalLightShadows.value=Z.state.directionalShadow,Dt.spotLights.value=Z.state.spot,Dt.spotLightShadows.value=Z.state.spotShadow,Dt.rectAreaLights.value=Z.state.rectArea,Dt.ltc_1.value=Z.state.rectAreaLTC1,Dt.ltc_2.value=Z.state.rectAreaLTC2,Dt.pointLights.value=Z.state.point,Dt.pointLightShadows.value=Z.state.pointShadow,Dt.hemisphereLights.value=Z.state.hemi,Dt.sunShadowMatrix.value=Z.state.sunShadowMatrix,Dt.sunShadowCascade.value=Z.state.sunShadowCascade,Dt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Dt.spotLightMatrix.value=Z.state.spotLightMatrix,Dt.spotLightMap.value=Z.state.spotLightMap,Dt.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=w.state.lightProbeGridArray.length>0,Y.currentProgram=re,Y.uniformsList=null,re}function eu(M){if(M.uniformsList===null){let k=M.currentProgram.getUniforms();M.uniformsList=dr.seqWithValue(k.seq,M.uniforms)}return M.uniformsList}function nu(M,k){let Q=J.get(M);Q.outputColorSpace=k.outputColorSpace,Q.batching=k.batching,Q.batchingColor=k.batchingColor,Q.instancing=k.instancing,Q.instancingColor=k.instancingColor,Q.instancingMorph=k.instancingMorph,Q.skinning=k.skinning,Q.morphTargets=k.morphTargets,Q.morphNormals=k.morphNormals,Q.morphColors=k.morphColors,Q.morphTargetsCount=k.morphTargetsCount,Q.numClippingPlanes=k.numClippingPlanes,Q.numIntersection=k.numClipIntersection,Q.vertexAlphas=k.vertexAlphas,Q.vertexTangents=k.vertexTangents,Q.toneMapping=k.toneMapping}function jf(M,k){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(k.matrixWorld);for(let Q=0,Y=M.length;Q<Y;Q++){let Z=M[Q];if(Z.texture!==null&&Z.boundingBox.containsPoint(y))return Z}return null}function Qf(M,k,Q,Y,Z){k.isScene!==!0&&(k=Ct),tt.resetTextureUnits();let At=k.fog,It=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?k.environment:null,Tt=rt===null?L.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:le.workingColorSpace,Lt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ot=ft.get(Y.envMap||It,Lt),te=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,re=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Dt=!!Q.morphAttributes.position,pe=!!Q.morphAttributes.normal,Ue=!!Q.morphAttributes.color,we=kn;Y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(we=L.toneMapping);let Se=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,je=Se!==void 0?Se.length:0,Pt=J.get(Y),on=w.state.lights;if(ut===!0&&(mt===!0||M!==at)){let Ee=M===at&&Y.id===et;v.setState(Y,M,Ee)}let he=!1;Y.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==on.state.version||Pt.outputColorSpace!==Tt||Z.isBatchedMesh&&Pt.batching===!1||!Z.isBatchedMesh&&Pt.batching===!0||Z.isBatchedMesh&&Pt.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Pt.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Pt.instancing===!1||!Z.isInstancedMesh&&Pt.instancing===!0||Z.isSkinnedMesh&&Pt.skinning===!1||!Z.isSkinnedMesh&&Pt.skinning===!0||Z.isInstancedMesh&&Pt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Pt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Pt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Pt.instancingMorph===!1&&Z.morphTexture!==null||Pt.envMap!==Ot||Y.fog===!0&&Pt.fog!==At||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==v.numPlanes||Pt.numIntersection!==v.numIntersection)||Pt.vertexAlphas!==te||Pt.vertexTangents!==re||Pt.morphTargets!==Dt||Pt.morphNormals!==pe||Pt.morphColors!==Ue||Pt.toneMapping!==we||Pt.morphTargetsCount!==je||!!Pt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(he=!0):(he=!0,Pt.__version=Y.version);let Rn=Pt.currentProgram;he===!0&&(Rn=Ua(Y,k,Z),H&&Y.isNodeMaterial&&H.onUpdateProgram(Y,Rn,Pt));let qn=!1,pi=!1,Ms=!1,Me=Rn.getUniforms(),De=Pt.uniforms;if(g.useProgram(Rn.program)&&(qn=!0,pi=!0,Ms=!0),Y.id!==et&&(et=Y.id,pi=!0),Pt.needsLights){let Ee=jf(w.state.lightProbeGridArray,Z);Pt.lightProbeGrid!==Ee&&(Pt.lightProbeGrid=Ee,pi=!0)}if(qn||at!==M){g.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Me.setValue(F,"projectionMatrix",M.projectionMatrix),Me.setValue(F,"viewMatrix",M.matrixWorldInverse);let gi=Me.map.cameraPosition;gi!==void 0&&gi.setValue(F,_t.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&Me.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Me.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),at!==M&&(at=M,pi=!0,Ms=!0)}if(Pt.needsLights&&(on.state.sunShadowMap.length>0&&Me.setValue(F,"sunShadowMap",on.state.sunShadowMap,tt),on.state.directionalShadowMap.length>0&&Me.setValue(F,"directionalShadowMap",on.state.directionalShadowMap,tt),on.state.spotShadowMap.length>0&&Me.setValue(F,"spotShadowMap",on.state.spotShadowMap,tt),on.state.pointShadowMap.length>0&&Me.setValue(F,"pointShadowMap",on.state.pointShadowMap,tt)),Z.isSkinnedMesh){Me.setOptional(F,Z,"bindMatrix"),Me.setOptional(F,Z,"bindMatrixInverse");let Ee=Z.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),Me.setValue(F,"boneTexture",Ee.boneTexture,tt))}Z.isBatchedMesh&&(Me.setOptional(F,Z,"batchingTexture"),Me.setValue(F,"batchingTexture",Z._matricesTexture,tt),Me.setOptional(F,Z,"batchingIdTexture"),Me.setValue(F,"batchingIdTexture",Z._indirectTexture,tt),Me.setOptional(F,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Me.setValue(F,"batchingColorTexture",Z._colorsTexture,tt));let mi=Q.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&S.update(Z,Q,Rn),(pi||Pt.receiveShadow!==Z.receiveShadow)&&(Pt.receiveShadow=Z.receiveShadow,Me.setValue(F,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&k.environment!==null&&(De.envMapIntensity.value=k.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=yv()),pi){if(Me.setValue(F,"toneMappingExposure",L.toneMappingExposure),Pt.needsLights&&tp(De,Ms),At&&Y.fog===!0&&Ft.refreshFogUniforms(De,At),Ft.refreshMaterialUniforms(De,Y,ot,j,w.state.transmissionRenderTarget[M.id]),Pt.needsLights&&Pt.lightProbeGrid){let Ee=Pt.lightProbeGrid;De.probesSH.value=Ee.texture,De.probesMin.value.copy(Ee.boundingBox.min),De.probesMax.value.copy(Ee.boundingBox.max),De.probesResolution.value.copy(Ee.resolution)}dr.upload(F,eu(Pt),De,tt)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(dr.upload(F,eu(Pt),De,tt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Me.setValue(F,"center",Z.center),Me.setValue(F,"modelViewMatrix",Z.modelViewMatrix),Me.setValue(F,"normalMatrix",Z.normalMatrix),Me.setValue(F,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let Ee=Y.uniformsGroups;for(let gi=0,Ss=Ee.length;gi<Ss;gi++){let su=Ee[gi];X.update(su,Rn),X.bind(su,Rn)}}return Rn}function tp(M,k){M.ambientLightColor.needsUpdate=k,M.lightProbe.needsUpdate=k,M.sunLights.needsUpdate=k,M.sunLightShadows.needsUpdate=k,M.directionalLights.needsUpdate=k,M.directionalLightShadows.needsUpdate=k,M.pointLights.needsUpdate=k,M.pointLightShadows.needsUpdate=k,M.spotLights.needsUpdate=k,M.spotLightShadows.needsUpdate=k,M.rectAreaLights.needsUpdate=k,M.hemisphereLights.needsUpdate=k}function ep(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(M,k,Q){let Y=J.get(M);Y.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),J.get(M.texture).__webglTexture=k,J.get(M.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,k){let Q=J.get(M);Q.__webglFramebuffer=k,Q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(M,k=0,Q=0){rt=M,q=k,$=Q;let Y=null,Z=!1,At=!1;if(M){let Tt=J.get(M);if(Tt.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(F.FRAMEBUFFER,Tt.__webglFramebuffer),ct.copy(M.viewport),Nt.copy(M.scissor),bt=M.scissorTest,g.viewport(ct),g.scissor(Nt),g.setScissorTest(bt),et=-1;return}else if(Tt.__webglFramebuffer===void 0)tt.setupRenderTarget(M);else if(Tt.__hasExternalTextures)tt.rebindTextures(M,J.get(M.texture).__webglTexture,J.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let te=M.depthTexture;if(Tt.__boundDepthTexture!==te){if(te!==null&&J.has(te)&&(M.width!==te.image.width||M.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(M)}}let Lt=M.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(At=!0);let Ot=J.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ot[k])?Y=Ot[k][Q]:Y=Ot[k],Z=!0):M.samples>0&&tt.useMultisampledRTT(M)===!1?Y=J.get(M).__webglMultisampledFramebuffer:Array.isArray(Ot)?Y=Ot[Q]:Y=Ot,ct.copy(M.viewport),Nt.copy(M.scissor),bt=M.scissorTest}else ct.copy(wt).multiplyScalar(ot).floor(),Nt.copy(kt).multiplyScalar(ot).floor(),bt=oe;if(Q!==0&&(Y=G),g.bindFramebuffer(F.FRAMEBUFFER,Y)&&g.drawBuffers(M,Y),g.viewport(ct),g.scissor(Nt),g.setScissorTest(bt),Z){let Tt=J.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Tt.__webglTexture,Q)}else if(At){let Tt=k;for(let Lt=0;Lt<M.textures.length;Lt++){let Ot=J.get(M.textures[Lt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Lt,Ot.__webglTexture,Q,Tt)}}else if(M!==null&&Q!==0){let Tt=J.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Tt.__webglTexture,Q)}et=-1};function iu(M){let k=J.get(M);return(k.__readFormat!==M.format||k.__readType!==M.type)&&(k.__readFormat=M.format,k.__readType=M.type,k.__formatReadable=R.textureFormatReadable(M.format),k.__typeReadable=R.textureTypeReadable(M.type)),k}this.readRenderTargetPixels=function(M,k,Q,Y,Z,At,It,Tt=0){if(!(M&&M.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=J.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&It!==void 0&&(Lt=Lt[It]),Lt){g.bindFramebuffer(F.FRAMEBUFFER,Lt);try{let Ot=M.textures[Tt],te=Ot.format,re=Ot.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Tt);let Dt=iu(Ot);if(Dt.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=M.width-Y&&Q>=0&&Q<=M.height-Z&&F.readPixels(k,Q,Y,Z,K.convert(te),K.convert(re),At)}finally{let Ot=rt!==null?J.get(rt).__webglFramebuffer:null;g.bindFramebuffer(F.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(M,k,Q,Y,Z,At,It,Tt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=J.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&It!==void 0&&(Lt=Lt[It]),Lt)if(k>=0&&k<=M.width-Y&&Q>=0&&Q<=M.height-Z){g.bindFramebuffer(F.FRAMEBUFFER,Lt);let Ot=M.textures[Tt],te=Ot.format,re=Ot.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Tt);let Dt=iu(Ot);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,pe),F.bufferData(F.PIXEL_PACK_BUFFER,At.byteLength,F.STREAM_READ),F.readPixels(k,Q,Y,Z,K.convert(te),K.convert(re),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ue=rt!==null?J.get(rt).__webglFramebuffer:null;g.bindFramebuffer(F.FRAMEBUFFER,Ue);let we=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await yd(F,we,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,pe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,At),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(pe),F.deleteSync(we),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,k=null,Q=0){let Y=Math.pow(2,-Q),Z=Math.floor(M.image.width*Y),At=Math.floor(M.image.height*Y),It=k!==null?k.x:0,Tt=k!==null?k.y:0;tt.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,Q,0,0,It,Tt,Z,At),g.unbindTexture()},this.copyTextureToTexture=function(M,k,Q=null,Y=null,Z=0,At=0){let It,Tt,Lt,Ot,te,re,Dt,pe,Ue,we=M.isCompressedTexture?M.mipmaps[At]:M.image;if(Q!==null)It=Q.max.x-Q.min.x,Tt=Q.max.y-Q.min.y,Lt=Q.isBox3?Q.max.z-Q.min.z:1,Ot=Q.min.x,te=Q.min.y,re=Q.isBox3?Q.min.z:0;else{let De=Math.pow(2,-Z);It=Math.floor(we.width*De),Tt=Math.floor(we.height*De),M.isDataArrayTexture?Lt=we.depth:M.isData3DTexture?Lt=Math.floor(we.depth*De):Lt=1,Ot=0,te=0,re=0}Y!==null?(Dt=Y.x,pe=Y.y,Ue=Y.z):(Dt=0,pe=0,Ue=0);let Se=K.convert(k.format),je=K.convert(k.type),Pt;k.isData3DTexture?(tt.setTexture3D(k,0),Pt=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(tt.setTexture2DArray(k,0),Pt=F.TEXTURE_2D_ARRAY):(tt.setTexture2D(k,0),Pt=F.TEXTURE_2D),g.activeTexture(F.TEXTURE0),g.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),g.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),g.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);let on=g.getParameter(F.UNPACK_ROW_LENGTH),he=g.getParameter(F.UNPACK_IMAGE_HEIGHT),Rn=g.getParameter(F.UNPACK_SKIP_PIXELS),qn=g.getParameter(F.UNPACK_SKIP_ROWS),pi=g.getParameter(F.UNPACK_SKIP_IMAGES);g.pixelStorei(F.UNPACK_ROW_LENGTH,we.width),g.pixelStorei(F.UNPACK_IMAGE_HEIGHT,we.height),g.pixelStorei(F.UNPACK_SKIP_PIXELS,Ot),g.pixelStorei(F.UNPACK_SKIP_ROWS,te),g.pixelStorei(F.UNPACK_SKIP_IMAGES,re);let Ms=M.isDataArrayTexture||M.isData3DTexture,Me=k.isDataArrayTexture||k.isData3DTexture;if(M.isDepthTexture){let De=J.get(M),mi=J.get(k),Ee=J.get(De.__renderTarget),gi=J.get(mi.__renderTarget);g.bindFramebuffer(F.READ_FRAMEBUFFER,Ee.__webglFramebuffer),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let Ss=0;Ss<Lt;Ss++)Ms&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,J.get(M).__webglTexture,Z,re+Ss),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,J.get(k).__webglTexture,At,Ue+Ss)),F.blitFramebuffer(Ot,te,It,Tt,Dt,pe,It,Tt,F.DEPTH_BUFFER_BIT,F.NEAREST);g.bindFramebuffer(F.READ_FRAMEBUFFER,null),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Z!==0||M.isRenderTargetTexture||J.has(M)){let De=J.get(M),mi=J.get(k);g.bindFramebuffer(F.READ_FRAMEBUFFER,D),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,W);for(let Ee=0;Ee<Lt;Ee++)Ms?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,De.__webglTexture,Z,re+Ee):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,De.__webglTexture,Z),Me?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,mi.__webglTexture,At,Ue+Ee):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,mi.__webglTexture,At),Z!==0?F.blitFramebuffer(Ot,te,It,Tt,Dt,pe,It,Tt,F.COLOR_BUFFER_BIT,F.NEAREST):Me?F.copyTexSubImage3D(Pt,At,Dt,pe,Ue+Ee,Ot,te,It,Tt):F.copyTexSubImage2D(Pt,At,Dt,pe,Ot,te,It,Tt);g.bindFramebuffer(F.READ_FRAMEBUFFER,null),g.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Me?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(Pt,At,Dt,pe,Ue,It,Tt,Lt,Se,je,we.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(Pt,At,Dt,pe,Ue,It,Tt,Lt,Se,we.data):F.texSubImage3D(Pt,At,Dt,pe,Ue,It,Tt,Lt,Se,je,we):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,At,Dt,pe,It,Tt,Se,je,we.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,At,Dt,pe,we.width,we.height,Se,we.data):F.texSubImage2D(F.TEXTURE_2D,At,Dt,pe,It,Tt,Se,je,we);g.pixelStorei(F.UNPACK_ROW_LENGTH,on),g.pixelStorei(F.UNPACK_IMAGE_HEIGHT,he),g.pixelStorei(F.UNPACK_SKIP_PIXELS,Rn),g.pixelStorei(F.UNPACK_SKIP_ROWS,qn),g.pixelStorei(F.UNPACK_SKIP_IMAGES,pi),At===0&&k.generateMipmaps&&F.generateMipmap(Pt),g.unbindTexture()},this.initRenderTarget=function(M){J.get(M).__webglFramebuffer===void 0&&tt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?tt.setTextureCube(M,0):M.isData3DTexture?tt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?tt.setTexture2DArray(M,0):tt.setTexture2D(M,0),g.unbindTexture()},this.resetState=function(){q=0,$=0,rt=null,g.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var af={type:"change"},Ah={type:"start"},lf={type:"end"},zl=new Ki,of=new xn,Mv=Math.cos(70*En.DEG2RAD),Ve=new U,mn=2*Math.PI,ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wh=1e-6,kl=class extends ra{constructor(t,e=null){super(t,e),this.state=ve.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pi.ROTATE,MIDDLE:Pi.DOLLY,RIGHT:Pi.PAN},this.touches={ONE:Ii.ROTATE,TWO:Ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new yn,this._lastTargetPosition=new U,this._quat=new yn().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sr,this._sphericalDelta=new sr,this._scale=1,this._panOffset=new U,this._rotateStart=new pt,this._rotateEnd=new pt,this._rotateDelta=new pt,this._panStart=new pt,this._panEnd=new pt,this._panDelta=new pt,this._dollyStart=new pt,this._dollyEnd=new pt,this._dollyDelta=new pt,this._dollyDirection=new U,this._mouse=new pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bv.bind(this),this._onPointerDown=Sv.bind(this),this._onPointerUp=Ev.bind(this),this._onContextMenu=Iv.bind(this),this._onMouseWheel=Av.bind(this),this._onKeyDown=Rv.bind(this),this._onTouchStart=Cv.bind(this),this._onTouchMove=Pv.bind(this),this._onMouseDown=Tv.bind(this),this._onMouseMove=wv.bind(this),this._interceptControlDown=Lv.bind(this),this._interceptControlUp=Dv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ve.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(af),this.update(),this.state=ve.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ve.copy(e).sub(this.target),Ve.applyQuaternion(this._quat),this._spherical.setFromVector3(Ve),this.autoRotate&&this.state===ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=mn:i>Math.PI&&(i-=mn),s<-Math.PI?s+=mn:s>Math.PI&&(s-=mn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ve.setFromSpherical(this._spherical),Ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ve.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(zl.origin.copy(this.object.position),zl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zl.direction))<Mv?this.object.lookAt(this.target):(of.setFromNormalAndCoplanarPoint(this.object.up,this.target),zl.intersectPlane(of,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>wh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wh||this._lastTargetPosition.distanceToSquared(this.target)>wh?(this.dispatchEvent(af),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?mn/60*this.autoRotateSpeed*t:mn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ve.setFromMatrixColumn(e,0),Ve.multiplyScalar(-t),this._panOffset.add(Ve)}_panUp(t,e){this.screenSpacePanning===!0?Ve.setFromMatrixColumn(e,1):(Ve.setFromMatrixColumn(e,0),Ve.crossVectors(this.object.up,Ve)),Ve.multiplyScalar(t),this._panOffset.add(Ve)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ve.copy(s).sub(this.target);let r=Ve.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Sv(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function bv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Ev(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lf),this.state=ve.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Tv(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Pi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ve.DOLLY;break;case Pi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ve.ROTATE}break;case Pi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ve.PAN}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(Ah)}function wv(n){switch(this.state){case ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Av(n){this.enabled===!1||this.enableZoom===!1||this.state!==ve.NONE||(n.preventDefault(),this.dispatchEvent(Ah),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(lf))}function Rv(n){this.enabled!==!1&&this._handleKeyDown(n)}function Cv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ii.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ve.TOUCH_ROTATE;break;case Ii.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ve.TOUCH_PAN;break;default:this.state=ve.NONE}break;case 2:switch(this.touches.TWO){case Ii.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ve.TOUCH_DOLLY_PAN;break;case Ii.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ve.TOUCH_DOLLY_ROTATE;break;default:this.state=ve.NONE}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(Ah)}function Pv(n){switch(this._trackPointer(n),this.state){case ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ve.NONE}}function Iv(n){this.enabled!==!1&&n.preventDefault()}function Lv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Dv(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hf(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Oe,c=0;for(let h=0;h<n.length;++h){let f=n[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(f.morphAttributes[p])}if(t){let p;if(e)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,f=[];for(let u=0;u<n.length;++u){let p=n[u].index;for(let x=0;x<p.count;++x)f.push(p.getX(x)+h);h+=n[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=cf(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let p=[];for(let b=0;b<a[h].length;++b)p.push(a[h][b][u]);let x=cf(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}}return l}function cf(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new cn(a,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let u=0,p=h.count;u<p;u++)for(let x=0;x<e;x++){let b=h.getComponent(u,x);o.setComponent(u+f,x,b)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function uf({y0:n,y1:t,y2:e,yg:i,imgBase:s}){let r=new $i;r.background=new Yt(13624042);let a=new qe(70,1,.08,220);a.rotation.order="YXZ",r.add(new ns(16773596,14863280,1.55));let o=new is(16774368,1.1);o.position.set(-8,20,-30),r.add(o);let l=new sa(16767400,.35);r.add(l);function c(v,C,N){let S=document.createElement("canvas");S.width=v,S.height=C,N(S.getContext("2d"),v,C);let B=new Vr(S);return B.colorSpace=Xe,B.wrapS=B.wrapT=Vs,B.anisotropy=4,B}let h=(v,C)=>v+Math.random()*(C-v),f=v=>c(512,512,(C,N,S)=>{for(let O=0;O<8;O++){let K=h(-14,14);C.fillStyle=`hsl(${v[0]+h(-3,3)},${v[1]}%,${v[2]+K*.4}%)`,C.fillRect(0,O*S/8,N,S/8),C.strokeStyle="rgba(60,35,20,.10)";for(let X=0;X<14;X++){C.beginPath();let ht=O*S/8+h(2,S/8-2);C.moveTo(0,ht),C.bezierCurveTo(N*.3,ht+h(-3,3),N*.6,ht+h(-3,3),N,ht+h(-2,2)),C.stroke()}C.fillStyle="rgba(50,30,18,.35)",C.fillRect(0,O*S/8,N,1.5);let st=h(.2,.8)*N;C.fillRect(st,O*S/8,1.5,S/8)}}),u=f([30,48,58]),p=f([26,40,50]),x=f([28,30,62]),_=((v,C)=>c(256,256,(N,S,B)=>{N.fillStyle=C,N.fillRect(0,0,S,B);for(let O=0;O<8;O++)for(let K=0;K<4;K++){N.fillStyle=v.replace("L",(44+h(-4,4)).toFixed(0));let st=O%2?32:0;N.fillRect(K*64+st-64+2,O*32+2,60,28),N.fillRect(K*64+st+2,O*32+2,60,28)}}))("hsl(150,22%,L%)","#e9e2d2"),m=c(512,512,(v,C,N)=>{v.fillStyle="#cdb48d",v.fillRect(0,0,C,N);for(let S=0;S<70;S++){v.fillStyle=`hsl(${h(28,40)},${h(25,42)}%,${h(62,78)}%)`,v.beginPath();let B=h(0,C),O=h(0,N),K=h(22,48);for(let st=0;st<7;st++){let X=st/7*6.283,ht=K*h(.7,1.1);v.lineTo(B+Math.cos(X)*ht,O+Math.sin(X)*ht)}v.closePath(),v.fill()}}),E=c(1024,384,(v,C,N)=>{v.fillStyle="#c8502f",v.fillRect(0,0,C,N),v.fillStyle="#e9774d",v.fillRect(0,N*.62,C,N*.38),v.fillStyle="#f4e6cf";for(let S=0;S<6;S++){let B=80+S*175,O=h(110,220);v.save(),v.translate(B,O);for(let K=0;K<9;K++)v.rotate(.7),v.beginPath(),v.ellipse(48,0,52,9,0,0,6.283),v.fill();v.restore()}v.strokeStyle="#3d6f9e",v.lineWidth=18,v.beginPath(),v.moveTo(0,N*.8);for(let S=0;S<=C;S+=40)v.lineTo(S,N*.8+Math.sin(S/70)*22);v.stroke(),v.strokeStyle="#f4e6cf",v.lineWidth=6,v.beginPath(),v.moveTo(0,N*.9);for(let S=0;S<=C;S+=40)v.lineTo(S,N*.9+Math.sin(S/70+1)*14);v.stroke()});E.wrapS=E.wrapT=vn;let I=c(256,64,(v,C,N)=>{for(let S=0;S<C;S++){let B=Math.sin(S/5)*.5+.5;v.fillStyle=`hsl(40,${55+B*15}%,${38+B*22}%)`,v.fillRect(S,0,1,N)}}),y=c(128,128,(v,C,N)=>{v.fillStyle="#6b3f22",v.fillRect(0,0,C,N),v.fillStyle="#b57a45";for(let S=0;S<8;S++)for(let B=0;B<8;B++)(B+S)%2?v.fillRect(B*16+1,S*16+3,14,10):v.fillRect(B*16+3,S*16+1,10,14)}),T=c(128,128,(v,C,N)=>{let S=v.createRadialGradient(64,64,0,64,64,64);S.addColorStop(0,"rgba(255,255,255,1)"),S.addColorStop(.45,"rgba(255,255,255,.35)"),S.addColorStop(1,"rgba(255,255,255,0)"),v.fillStyle=S,v.fillRect(0,0,C,N)});T.colorSpace=Gn;let w=c(64,256,(v,C,N)=>{let S=v.createLinearGradient(0,0,0,N);S.addColorStop(0,"#9cc6dc"),S.addColorStop(.55,"#e6f1f3"),S.addColorStop(.62,"#7fb3c2"),S.addColorStop(1,"#d9c7a3"),v.fillStyle=S,v.fillRect(0,0,C,N)});w.wrapS=w.wrapT=vn;let P=(v,C={})=>new ta({color:v,...C}),d={wall:P(16052197),wall2:P(15458768),ceil:P(15985888,{emissive:3813672}),floor:P(16777215,{map:u}),floor2:P(16777215,{map:p}),deck:P(16777215,{map:x}),pavers:P(16777215,{map:m}),timber:P(10119744),oak:P(12618325),dark:P(3876377),brass:new es({color:13146954,shininess:80,specular:9071152}),sage:P(16777215,{map:_}),marble:new es({color:4156245,shininess:60,specular:4478276}),leather:P(9063210),tan:P(12157518),weave:P(16777215,{map:y}),teal:P(6196362),olive:P(7303488),terra:P(11818799),cream:P(15984335),stone:P(14866112),black:P(2760988),red:P(12728875,{side:Ze,emissive:3804168}),yellow:P(15315516,{side:Ze,emissive:3811848}),white:P(16513266,{side:Ze}),orange:P(14246443),leaf:P(6257221,{flatShading:!0}),leaf2:P(8161871,{flatShading:!0}),pot:P(14271396),mural:P(16777215,{map:E}),curt:P(16777215,{map:I}),bottle:P(6126154),bottle2:P(10115626),bottle3:P(14272928),shade:new Pn({color:16764810}),bulb:new Pn({color:16773580}),sky:new Pn({map:w,toneMapped:!1}),glass:new es({color:13625066,transparent:!0,opacity:.18,shininess:90,depthWrite:!1,side:Ze}),pool:new Pn({map:T,color:16758886,transparent:!0,opacity:.55,blending:rs,depthWrite:!1,toneMapped:!1}),daypool:new Pn({map:T,color:16773852,transparent:!0,opacity:.35,blending:rs,depthWrite:!1,toneMapped:!1}),lawn:P(10135398),sea:P(6266800),sand:P(15127469),road:P(9273975)},A=new Map,L=(v,C)=>{A.has(C)||A.set(C,[]),A.get(C).push(v.index?v.toNonIndexed():v)},z={0:[],1:[],2:[]},H={0:[],1:[],2:[]},G=(v,C,N,S,B)=>z[v].push([Math.min(C,S),Math.min(N,B),Math.max(C,S),Math.max(N,B)]);function D(v,C,N,S,B,O,K,st=0,X){let ht=new Be(v,C,N);if(X){let dt=ht.attributes.uv;for(let Rt=0;Rt<dt.count;Rt++)dt.setXY(Rt,dt.getX(Rt)*X[0],dt.getY(Rt)*X[1])}return st&&ht.rotateY(st),ht.translate(S,B+C/2,O),L(ht,K),ht}let W=(v,C,N,S,B,O,K,st,X=0)=>{D(C,N,S,B,O,K,st),G(v,B-C/2-X,K-S/2-X,B+C/2+X,K+S/2+X)};function q(v,C,N,S,B,O,K,st=10){let X=new jn(v,C,N,st);return X.translate(S,B+N/2,O),L(X,K),X}function $(v,C,N,S,B,O,K=2.4,st=-Math.PI/2,X=0){let ht=new In(v,C),dt=ht.attributes.uv;for(let Rt=0;Rt<dt.count;Rt++)dt.setXY(Rt,dt.getX(Rt)*v/K,dt.getY(Rt)*C/K);return ht.rotateX(st),X&&ht.rotateY(X),ht.translate(N,S,B),L(ht,O),ht}function rt(v,C,N,S,B,O,K,st=d.wall,X=.22){let ht=Math.abs(S-C)||X,dt=Math.abs(B-N)||X;D(ht,K,dt,(C+S)/2,O,(N+B)/2,st),K>2&&H[v].push([Math.min(C,S)-.11,Math.min(N,B)-.11,Math.max(C,S)+.11,Math.max(N,B)+.11]),G(v,Math.min(C,S)-(C===S?X/2:0),Math.min(N,B)-(N===B?X/2:0),Math.max(C,S)+(C===S?X/2:0),Math.max(N,B)+(N===B?X/2:0))}function et(v,C,N,S,B,O,K,st,X=d.wall){let ht=S;[...O,[B,B]].forEach(([dt,Rt])=>{dt>ht&&(C==="x"?rt(v,ht,N,dt,N,K,st,X):rt(v,N,ht,N,dt,K,st,X)),Rt>dt&&dt<B&&(C==="x"?D(Rt-dt,st-2.4,.22,(dt+Rt)/2,K+2.4,N,X):D(.22,st-2.4,Rt-dt,N,K+2.4,(dt+Rt)/2,X)),ht=Rt})}function at(v,C,N,S,B,O){let st={s:0,n:Math.PI,e:Math.PI/2,w:-Math.PI/2}[O],X=O==="e"?.12:O==="w"?-.12:0,ht=O==="s"?.12:O==="n"?-.12:0,dt=new In(S,B);dt.rotateY(st),dt.translate(v+X,C+B/2,N+ht),L(dt,d.sky);let Rt=(xe,An,an,La)=>{let Gi=new Be(xe,An,.08);Gi.rotateY(st);let Da=new U(an,0,0).applyAxisAngle(new U(0,1,0),st);Gi.translate(v+X*1.3+Da.x,La,N+ht*1.3+Da.z),L(Gi,d.white)};Rt(S+.16,.08,0,C),Rt(S+.16,.08,0,C+B),Rt(.08,B,-S/2,C+B/2),Rt(.08,B,S/2,C+B/2),Rt(.05,B,0,C+B/2),Rt(S,.05,0,C+B*.62);let Wt=new In(S*1.6,2.6);Wt.rotateX(-Math.PI/2),Wt.rotateY(st);let ye=new U(0,0,1.4).applyAxisAngle(new U(0,1,0),st);Wt.translate(v+ye.x,Nt(C)+.02,N+ye.z),L(Wt,d.daypool)}let ct=n,Nt=v=>v<t-.2?v<n-.2?i:n:v<e-.2?t:e;function bt(v,C,N,S,B,O=0){if(q(.006,.006,N-S,v,S,C,d.black,4),O===0){let K=new wi(.22,12,6,0,6.283,0,Math.PI/2);K.translate(v,S,C),L(K,d.shade)}else if(O===1){q(.05,.2,.26,v,S-.26,C,d.brass,12);let K=new wi(.07,8,6);K.translate(v,S-.3,C),L(K,d.bulb)}else{let K=new wi(.16,10,8);K.translate(v,S-.16,C),L(K,d.shade)}$(2.6,2.6,v,B+.015,C,d.pool,2.6)}function ae(v,C,N,S,B,O="weave"){let K=new $e,st=O==="weave"?d.weave:O==="red"?d.orange:d.oak,X=[[.44,.05,.44,0,.45,0,st],[.44,.42,.05,0,.5,.2,st]];[[-.19,-.19],[.19,-.19],[-.19,.19],[.19,.19]].forEach(([ht,dt])=>X.push([.04,.45,.04,ht,0,dt,O==="red"?d.orange:d.timber])),X.forEach(([ht,dt,Rt,Wt,ye,xe,An])=>{let an=new Be(ht,dt,Rt);an.translate(Wt,ye+dt/2,xe),an.rotateY(S),an.translate(C,B,N),L(an,An)})}function $t(v,C,N,S,B=.45,O=4,K="weave",st=.74){q(B,B,.04,C,S+st-.04,N,d.oak,16),q(.04,.04,st-.04,C,S,N,d.dark,6),q(.28,.3,.03,C,S,N,d.dark,12),G(v,C-B,N-B,C+B,N+B);for(let X=0;X<O;X++){let ht=X/O*6.283+.4;ae(v,C+Math.sin(ht)*(B+.32),N+Math.cos(ht)*(B+.32),ht+Math.PI,S,K)}}function qt(v,C,N,S=.75,B=d.dark){q(.19,.19,.06,v,N+S-.06,C,B,12),[[-.11,-.11],[.11,-.11],[-.11,.11],[.11,.11]].forEach(([O,K])=>D(.035,S-.06,.035,v+O,N,C+K,d.timber)),q(.13,.13,.02,v,N+.28,C,d.brass,8)}function j(v,C,N,S,B=1){q(.28*B,.22*B,.5*B,C,S,N,d.pot,10);let O=new ts(.55*B,0);O.scale(1,1.35,1),O.translate(C,S+1.05*B,N),L(O,Math.random()<.5?d.leaf:d.leaf2),G(v,C-.3*B,N-.3*B,C+.3*B,N+.3*B)}function ot(v,C,N,S,B,O,K,st=d.teal){let X=Math.abs(S-C),ht=Math.abs(B-N),dt=(C+S)/2,Rt=(N+B)/2;D(X,.45,ht,dt,O,Rt,d.timber);let Wt=.06;D(X-Wt,.1,ht-Wt,dt,O+.45,Rt,st);let ye=K==="s"||K==="n"?[X,.18]:[.18,ht],xe={n:[0,ht/2-.09],s:[0,-ht/2+.09],e:[-X/2+.09,0],w:[X/2-.09,0]}[K];D(ye[0],.55,ye[1],dt+xe[0],O+.5,Rt+xe[1],st),G(v,Math.min(C,S),Math.min(N,B),Math.max(C,S),Math.max(N,B))}function vt(v,C,N,S,B,O,K=.74,st=d.oak){D(B,.05,O,C,S+K-.05,N,st),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([X,ht])=>D(.06,K-.05,.06,C+X*(B/2-.08),S,N+ht*(O/2-.08),d.dark)),G(v,C-B/2,N-O/2,C+B/2,N+O/2)}function Vt(v,C,N,S,B=1.5){q(.03,.03,2.3,v,N,C,d.white,6);let O=new Ti(B,.45,10,1,!0);O.translate(v,N+2.45,C),L(O,S),q(.25,.3,.08,v,N,C,d.stone,10)}function wt(v,C,N,S,B){for(let O=0;O<B;O++){let K=v+(C-v)*(O+.5)/B,st=[d.bottle,d.bottle2,d.bottle3][O%3];q(.035,.035,.22,K,S,N,st,6),q(.012,.02,.07,K,S+.22,N,st,5)}}function kt(v,C,N,S,B){D(C-v+.1,.06,.08,(v+C)/2,S+.42,N,d.brass);for(let O=0;O<B;O++){let K=v+(C-v)*O/(B-1);q(.025,.025,.42,K,S,N,d.brass,6),D(.03,.16,.05,K,S+.5,N,O%3?d.dark:d.cream)}}function oe(v,C,N,S,B,O,K){let st=new In(S,B),X=new na().load(s+K+".jpg",Wt=>{Wt.colorSpace=Xe}),ht=new _e(st,new Pn({map:X,toneMapped:!1}));ht.position.set(v,C,N),ht.rotation.y=O,r.add(ht);let dt=new Be(S+.12,B+.12,.04);dt.rotateY(O);let Rt=new U(0,0,-.03).applyAxisAngle(new U(0,1,0),O);dt.translate(v+Rt.x,C+Rt.y,N+Rt.z),L(dt,d.dark)}$(160,120,15,i-.06,-40,d.sand,6),$(160,20,15,i-.4,-14,d.road,6),$(400,200,15,i-1.5,-160,d.sea,40);for(let v=0;v<9;v++){let C=-14+v*7,N=-17-h(0,6);q(.2,.35,9,C,i,N,d.dark,6);for(let S=0;S<5;S++){let B=new Ti(2.4-S*.4,1.4,7);B.translate(C,i+4+S*1.3,N),L(B,d.leaf)}}$(14,7,7.2,i,-3.5,d.pavers,3),$(14,7,26.8,i,-3.5,d.pavers,3),D(14.2,n-i,.3,7.1,i,-.15,d.wall),D(14.2,n-i,.3,26.9,i,-.15,d.wall),rt(0,0,-7,14.2,-7,i,1,d.wall),rt(0,19.8,-7,34,-7,i,1,d.wall),rt(0,0,-7,0,0,i,1,d.wall),rt(0,34,-7,34,0,i,1,d.wall),rt(0,14.2,-4.6,14.2,0,i,1,d.wall),rt(0,19.8,-4.6,19.8,0,i,1,d.wall);for(let v of[0,19.8])[[2.2,-5],[5.8,-5],[9.6,-5],[2.2,-2],[5.8,-2],[9.6,-2]].forEach(([C,N],S)=>{vt(0,v+C+.2,N,i,2.2,.8),[-.75,0,.75].forEach(B=>{qt(v+C+.2+B,N-.75,i,.46,d.orange),qt(v+C+.2+B,N+.75,i,.46,d.orange)}),S<3&&Vt(v+C+.2,N+1.5,i,S%2?d.white:d.yellow)});j(0,.9,-6.2,i,1.1),j(0,33.1,-6.2,i,1.1),j(0,13.4,-6.2,i,.9),j(0,20.6,-6.2,i,.9);for(let v=0;v<8;v++)D(5.6,(n-i)*(v+1)/8,.5,17,i,-4.75+v*.5,d.stone);D(5.6,.02,1,17,n-.02,-.5,d.stone),[14.35,19.65].forEach(v=>q(.025,.025,.95,v,n,-.2,d.black,6));let it=t-n-.3;$(31,21,15.5,n,10.5,d.floor,2.4),$(31,21,15.5,n+it,10.5,d.ceil,4,Math.PI/2),rt(0,0,0,0,21,n,it),rt(0,31,0,31,21,n,it),rt(0,0,21,31,21,n,it),[[0,14],[17.2,31]].forEach(([v,C])=>{D(C-v,it-.2,.04,(v+C)/2,n+.1,0,d.glass),G(0,v,-.1,C,.1);for(let N=v;N<=C+.01;N+=2)D(.1,it,.12,N,n,0,d.white);D(C-v,.12,.14,(v+C)/2,n,0,d.white),D(C-v,.14,.14,(v+C)/2,n+2.5,0,d.white)}),D(3.2,.5,.3,15.6,n+2.6,0,d.wall),D(.25,2.6,.3,14.1,n,0,d.white),D(.25,2.6,.3,17.1,n,0,d.white),et(0,"z",14,0,4.1,[[1.2,3.2]],n,it),et(0,"z",17.2,0,4.1,[[1.2,3.2]],n,it),et(0,"x",4.1,0,31,[[2.6,5.2],[8.4,11],[14.6,16.6],[20.4,23],[26,28.6]],n,it,d.wall2),D(9,it,11.5,15,n,15.25,d.wall2),G(0,10.5,9.5,19.5,21),[[11.5,"TOILETS"],[17.5,"KITCHEN"]].forEach(([v])=>{D(1,2.2,.06,v,n,9.47,d.dark)}),[[3,2],[7,2],[11,2.2],[20.5,2],[24.5,2],[28.5,2.2]].forEach(([v,C])=>{$t(0,v,C,n,.4,3),bt(v,C,n+it,n+2.7,n,2)}),j(0,.7,.8,n,.9),j(0,13.2,3.3,n,.8),j(0,30.3,.8,n,.9),j(0,18,3.3,n,.8);let ut=n,mt=(v,C,N,S)=>{W(0,N,1,S,v,ut,C,d.sage),D(N+.12,.06,S+.12,v,ut+1,C,d.oak)};mt(7,9.3,5,.7),mt(4.85,12.3,.7,5.3),mt(9.15,12.3,.7,5.3),q(.025,.025,5,7,ut+.18,8.85,d.brass);{let v=new jn(.025,.025,5,6);v.rotateZ(Math.PI/2),v.translate(7,ut+.2,8.85),L(v,d.brass)}kt(5.4,8.6,9.4,ut+1.06,8),W(0,1.6,1.4,.5,7,ut,12.6,d.timber),D(1.6,1,.5,7,ut+1.4,12.6,d.dark),wt(6.3,7.7,12.6,ut+1.42,9),wt(6.3,7.7,12.6,ut+1.92,9);for(let v=0;v<6;v++)qt(4.9+v*.85,8.4,ut);for(let v=0;v<5;v++)qt(4.05,10.2+v*.95,ut),qt(9.95,10.2+v*.95,ut);for(let v=0;v<4;v++)bt(5.3+v*1.15,9.3,n+it,n+2.35,n+1.06,1);ot(0,.12,5.2,.72,19.5,n,"e",d.teal);for(let v=6.2;v<19;v+=2.4)vt(0,1.45,v,n,.75,1.1),ae(0,2.25,v-.3,-Math.PI/2,n,"oak"),ae(0,2.25,v+.3,-Math.PI/2,n,"oak"),bt(1.45,v,n+it,n+2.3,n+.74,0);ot(0,3.2,20.3,10.3,20.88,n,"n",d.leather);for(let v=4;v<10;v+=2)vt(0,v,19.5,n,.9,.7),bt(v,19.5,n+it,n+2.3,n+.74,0);$t(0,4.4,17,n,.45,4,"oak"),$t(0,8.2,16.6,n,.45,4,"oak");for(let v=7;v<20;v+=3.2)at(0,n+.9,v,1.4,1.8,"e");oe(.13,n+1.7,13.6,1.6,.75,Math.PI/2,"facade");let gt=28.6,_t=6.2,Ut=3.2;for(let v=0;v<10;v++){let C=Math.PI*.5+v/10*Math.PI*.55,N=C+Math.PI*.55/10,S=(C+N)/2,B=gt+Math.cos(S)*Ut,O=_t+Math.sin(S)*Ut,K=Ut*(N-C)+.02,st=new Be(K,1,.65);st.rotateY(-S+Math.PI/2),st.translate(B,n+.5,O),L(st,d.marble);let X=new Be(K+.02,.05,.8);X.rotateY(-S+Math.PI/2),X.translate(B,n+1.03,O),L(X,d.oak),G(0,B-.4,O-.4,B+.4,O+.4),v%2===0&&qt(gt+Math.cos(S)*(Ut+.65),_t+Math.sin(S)*(Ut+.65),n,.75,d.tan)}D(.5,1.6,5,30.7,n,6.6,d.timber),wt(30.6,30.6,6,n+1.6,1);for(let v=0;v<12;v++)q(.035,.035,.24,30.6,n+1,4.6+v*.33,[d.bottle,d.bottle2,d.bottle3][v%3],6);G(0,28.4,4.2,31,9);for(let v=0;v<5;v++){let C=Math.PI*.55+v*.11*Math.PI;bt(gt+Math.cos(C)*Ut,_t+Math.sin(C)*Ut,n+it,n+2.3,n+1.05,2)}[[21.5,12],[24.5,12],[27.5,12],[21.5,15],[24.5,15],[27.5,15],[21.5,18],[24.5,18]].forEach(([v,C])=>{$t(0,v,C,n,.5,4,"weave"),bt(v,C,n+it,n+2.25,n+.74,1)}),ot(0,30.28,10.4,30.88,20.4,n,"w",d.leather);for(let v=11.4;v<20;v+=2.2)vt(0,29.6,v,n,.7,.9),ae(0,28.85,v,Math.PI/2,n,"weave");ot(0,20,20.3,27.5,20.88,n,"n",d.leather);for(let v=7;v<20;v+=3.2)at(31,n+.9,v,1.4,1.8,"w");oe(30.87,n+1.7,14.5,1.9,.55,-Math.PI/2,"diners"),oe(19.6,n+1.7,12,1.4,.7,Math.PI/2,"table"),j(0,20.1,9.9,n,.8),oe(13.86,n+1.8,2.2,.8,1,-Math.PI/2,"courtyard");let Ct=e-t-.3;$(18.5,11.8,17.75,t,10,d.floor2,2.4),$(18.5,11.8,17.75,t+Ct,10,d.ceil,4,Math.PI/2),et(1,"x",4.1,8.5,27,[[10.5,12.5],[15,17],[21.5,23.5]],t,Ct,d.wall),rt(1,8.5,15.9,27,15.9,t,Ct),rt(1,8.5,4.1,8.5,15.9,t,Ct),rt(1,27,4.1,27,15.9,t,Ct),[[10.5,12.5],[15,17],[21.5,23.5]].forEach(([v,C])=>{for(let N=v;N<=C+.01;N+=.5)D(.05,2.4,.06,N,t,4.1,d.white)}),W(1,3.6,.35,6,10.4,t,10,d.timber),$(5.6,Ct-.2,8.63,t+Ct/2,10,d.curt,1.2,0,Math.PI/2);let Bt=t+.35;q(.28,.28,.5,10.6,Bt,10.4,d.white,14),q(.18,.18,.25,10.1,Bt+.45,9.8,d.cream,12),q(.18,.18,.25,10.1,Bt+.45,11,d.cream,12),q(.2,.2,.03,9.9,Bt+.95,9.5,d.brass,12),q(.01,.01,.95,9.9,Bt,9.5,d.black,4),D(.5,.6,.35,9.6,Bt,12.1,d.black),D(.5,.6,.35,9.6,Bt,7.9,d.black);for(let v=0;v<3;v++)bt(10.4,8+v*2,t+Ct,t+2.4,t+.35,1);$(8.5,Ct-.3,16,t+.2+(Ct-.3)/2,15.77,d.mural,8.5,0,Math.PI),W(1,.7,1,6,20.5,t,9.2,d.timber),D(.85,.06,6.15,20.5,t+1,9.2,d.oak),D(.66,1,5.9,20.5,t,9.2,d.teal),G(1,20.1,6.2,20.9,12.2),kt(20.65,20.65,6.6,t+1.06,2),kt(20.65,20.65,11.6,t+1.06,2),D(.5,1.5,6,26.7,t,9.2,d.timber);for(let v=0;v<14;v++)q(.035,.035,.24,26.7,t+1.5,6.6+v*.38,[d.bottle,d.bottle2,d.bottle3][v%3],6);for(let v=0;v<6;v++)qt(19.75,6.8+v*.95,t);for(let v=0;v<4;v++)bt(20.5,6.9+v*1.55,t+Ct,t+2.1,t+1.05,0);$(4,3,15.5,t+.01,13.3,d.terra,4),[[14.2,12.6,Math.PI*.75],[16.8,12.6,-Math.PI*.75],[14.2,14.4,Math.PI*.25],[16.8,14.4,-Math.PI*.25]].forEach(([v,C,N])=>{D(.75,.4,.75,v,t,C,d.oak,N),D(.6,.14,.6,v,t+.4,C,d.cream,N);let S=new Be(.7,.5,.12);S.translate(0,.5+.25,.3),S.rotateY(N),S.translate(v,t,C),L(S,d.cream),G(1,v-.4,C-.4,v+.4,C+.4)}),q(.45,.45,.38,15.5,t,13.5,d.oak,14),G(1,15,13,16,14),j(1,12.3,15.2,t,1),j(1,26.2,15.2,t,1),j(1,9.2,14.9,t,.9),[[14,7],[17,7],[14,9.8],[17,9.8],[23.6,7],[23.6,10],[23.6,13]].forEach(([v,C])=>{q(.35,.35,.04,v,t+1.02,C,d.oak,14),q(.04,.04,1.02,v,t,C,d.dark,6),q(.25,.28,.03,v,t,C,d.dark,10),G(1,v-.35,C-.35,v+.35,C+.35),qt(v+.62,C,t,.75),qt(v-.62,C,t,.75),bt(v,C,t+Ct,t+2.2,t+1.04,2)}),oe(26.87,t+1.65,13.6,1.9,.9,-Math.PI/2,"bombies");for(let v=7;v<15;v+=4)at(27,t+.9,v,1.2,1.6,"w");$(30,3.6,15.2,t+.02,2.3,d.deck,2.4),$(31,4,15.2,t+3.05,2.2,d.ceil,4,Math.PI/2),D(30,1.1,.25,15.2,t,.5,d.wall),G(1,.2,.3,30.2,.62),D(30,1.2,.03,15.2,t+1.1,.48,d.glass);for(let v=0;v<9;v++)D(.4,3.05,.4,.4+v*3.7,t,.5,d.wall);rt(1,.2,.5,.2,4.1,t,3.05),rt(1,30.2,.5,30.2,4.1,t,3.05),rt(1,.2,4.1,8.5,4.1,t,3.05),rt(1,27,4.1,30.2,4.1,t,3.05);for(let v=0;v<8;v++){let C=2.25+v*3.7;if(v%2===0){D(2.2,.08,.5,C,t+1.02,1.05,d.white),D(2.2,1.02,.3,C,t,1,d.white);for(let N=-1;N<=1;N++)qt(C+N*.7,1.75,t,.75,d.oak)}else q(.42,.42,.04,C,t+1.02,2.2,d.white,14),q(.04,.04,1.02,C,t,2.2,d.white,6),G(1,C-.42,1.78,C+.42,2.62),qt(C-.7,2.2,t,.75,d.oak),qt(C+.7,2.2,t,.75,d.oak),qt(C,2.95,t,.75,d.oak)}for(let v=1;v<8;v+=2){let C=2.25+v*3.7;q(.03,.03,1.4,C,t+1.06,2.2,d.white,6);let N=new wi(1.15,12,4,0,6.283,0,Math.PI/2.6);N.translate(C,t+2.05,2.2),L(N,d.red)}j(1,.8,3.5,t,.8),j(1,29.6,3.5,t,.8),oe(8.38,t+1.7,3,.6,.75,-Math.PI/2,"terrace");let zt=2.7;$(22,11,14,e,10.7,d.floor,2.4),$(22,11,14,e+zt,10.7,d.wall2,4,Math.PI/2),rt(2,3,5.2,25,5.2,e,zt,d.wall2),rt(2,3,16.2,25,16.2,e,zt,d.wall2),rt(2,3,5.2,3,16.2,e,zt,d.wall2),rt(2,25,5.2,25,16.2,e,zt,d.wall2);for(let v=4;v<25;v+=1.8)D(.14,.2,11,v,e+zt-.2,10.7,d.timber);D(12.3,2.3,.04,9.65,e,8.3,d.glass),G(2,3.5,8.1,15.8,8.5),D(.08,2.3,.08,15.8,e,8.3,d.dark),D(12.3,.08,.08,9.65,e+2.3,8.3,d.dark),D(3,.85,.8,8,e,6.6,d.dark),D(2.6,.05,.6,8,e+.85,6.6,d.teal),D(.5,.5,.4,6,e+.85,6,d.black),D(.5,.5,.4,10,e+.85,6,d.black),W(2,8,1.05,.75,20,e,9.2,d.oak),D(8.1,.05,.9,20,e+1.05,9.2,d.marble),D(8,1.6,.4,20,e,5.5,d.timber),wt(16.5,23.5,5.5,e+1.6,22);for(let v=0;v<8;v++)qt(16.6+v*.95,10.05,e);for(let v=0;v<5;v++)bt(17+v*1.5,9.2,e+zt,e+1.95,e+1.08,1);$(5,3.5,8,e+.01,13,d.olive,5),ot(2,4.5,15.4,11.5,16.05,e,"n",d.cream),ot(2,3.15,10.5,3.75,15.4,e,"e",d.cream),q(.5,.5,.38,7,e,13.4,d.oak,14),q(.5,.5,.38,9.4,e,13.4,d.oak,14),G(2,6.5,12.9,9.9,13.9),[[13.5,12.5],[16,13.5],[19,12.5],[22,13.5]].forEach(([v,C])=>$t(2,v,C,e,.42,3,"oak"));for(let v=6;v<24;v+=4)bt(v,13,e+zt,e+2,e,2);at(14,e+.7,16.2,2.4,1.4,"n"),at(19,e+.7,16.2,2.4,1.4,"n"),at(25,e+.7,12,1.6,1.4,"w"),j(2,24.3,15.5,e,.8);for(let[v,C]of A){let N=hf(C,!1),S=new _e(N,v);S.matrixAutoUpdate=!1,(v.blending===rs||v.transparent)&&(S.renderOrder=2),r.add(S)}let F={bar:{n:"Public bar",lv:0,p:[2.6,6.2],look:[7,10.5],cap:"Ground floor \xB7 capacity 800",d:"The main front bar from the plan: an island bar with sage tiled front, timber top, brass foot rail and taps, stools all round, teal banquettes on the west wall and warm pendants.",img:"facade"},dining:{n:"Dining room (bistro)",lv:0,p:[21,17.5],look:[27,8],cap:"Ground floor \xB7 within the 800 ground-floor capacity",d:"The Harbord Dining Room: the curved green marble bar in the north-east corner, round timber tables and woven leather chairs, leather banquettes.",img:"diners"},garden:{n:"Beer garden",lv:0,p:[6.5,-6.3],look:[9,0],cap:"RL 14.62 \xB7 ground-floor licence 800, up to 275 in courtyards",d:"Sandstone paving, long timber tables with orange stools, yellow and white umbrellas, either side of the porch stair up to the front door.",img:"umbrellas"},function:{n:"Level 1 function space (Bombies)",lv:1,p:[25,14.6],look:[11,9.5],cap:"Level 1 \xB7 capacity 320",d:"The low-level performance space: timber stage with gold curtain, terracotta palm mural, bar on the east wall, retro timber armchairs and high tables.",img:"bombies"},terrace:{n:"Bombies terrace",lv:1,p:[1.4,2.6],look:[16,2],cap:"Level 1 verandah \xB7 70 seated / 110 standing",d:"The 147 m\xB2 verandah balcony behind the heritage balustrade: glass acoustic panels, red umbrellas, white rendered bars and timber stools.",img:"terrace"},attic:{n:"Attic studio & bar",lv:2,p:[5,11],look:[20,9],cap:"Attic \xB7 capacity 100",d:"Under the raised roof: a marble-topped bar, lounge, audio desk and glass-walled recording studio, reached by the new lift.",img:"bombies"}},ce=[n,t,e];function Qt(v,C,N){return v!==0?ce[v]:N<0?C>14.2&&C<19.8&&N>-5?i+(n-i)*En.clamp((N+4.8)/4,0,1):i:n}let R=[[-.2,-7.2,34.2,21.2],[0,0,31,16.2],[3,5,25,16.4]],g={x:15.6,z:1.6,lv:0,yaw:Math.PI,pitch:0,eye:1.62},V=.28;function J(v,C,N){for(let B=0;B<2;B++)for(let[O,K,st,X]of z[v]){let ht=En.clamp(C,O,st),dt=En.clamp(N,K,X),Rt=C-ht,Wt=N-dt,ye=Rt*Rt+Wt*Wt;if(ye<V*V)if(ye>1e-8){let xe=Math.sqrt(ye);C=ht+Rt/xe*V,N=dt+Wt/xe*V}else{let xe=[C-O,st-C,N-K,X-N],An=Math.min(...xe);An===xe[0]?C=O-V:An===xe[1]?C=st+V:An===xe[2]?N=K-V:N=X+V}}if(v===0){let B=g.z<0,O=N<0;B!==O&&!(C>14.4&&C<17.1)&&(N=g.z)}let S=R[v];return[En.clamp(C,S[0]+V,S[2]-V),En.clamp(N,S[1]+V,S[3]-V)]}let tt={f:0,s:0,run:!1},ft=null;function xt(v){if(ft){let N=Math.min(1,(performance.now()-ft.t0)/ft.dur),S=N<.5?2*N*N:1-Math.pow(-2*N+2,2)/2;g.x=ft.a[0]+(ft.b[0]-ft.a[0])*S,g.z=ft.a[1]+(ft.b[1]-ft.a[1])*S;let B=ft.yb-ft.ya;B=Math.atan2(Math.sin(B),Math.cos(B)),g.yaw=ft.ya+B*S,g.pitch=ft.pa*(1-S),N>=1&&(ft=null)}else if(tt.f||tt.s){let N=(tt.run?4.2:2.4)*v,S=-Math.sin(g.yaw),B=-Math.cos(g.yaw),O=Math.cos(g.yaw),K=-Math.sin(g.yaw),st=J(g.lv,g.x+(S*tt.f+O*tt.s)*N,g.z+(B*tt.f+K*tt.s)*N);g.x=st[0],g.z=st[1]}let C=Qt(g.lv,g.x,g.z);ct+=(C-ct)*Math.min(1,v*10),a.position.set(g.x,ct+g.eye,g.z),a.rotation.set(g.pitch,g.yaw,0)}function nt(v,C){return Math.atan2(-(C[0]-v[0]),-(C[1]-v[1]))}function lt(v){let C=F[v];g.lv=C.lv,g.x=C.p[0],g.z=C.p[1],g.yaw=nt(C.p,C.look),g.pitch=-.05,ct=Qt(g.lv,g.x,g.z)}function yt(v,C){let N=F[v];if(N.lv!==g.lv){C(()=>lt(v));return}ft={a:[g.x,g.z],b:N.p,ya:g.yaw,yb:nt(N.p,N.look),pa:g.pitch,t0:performance.now(),dur:1300}}function Ft(){g.lv=0,g.x=15.6,g.z=5.4,g.yaw=nt([15.6,5.4],[7,10.5]),g.pitch=-.04,ct=n}function St(v,C,N,S,B){for(let[O,K,st,X]of H[v]){let ht=0,dt=1,Rt=S-C,Wt=B-N,ye=!0;for(let[xe,An]of[[-Rt,C-O],[Rt,st-C],[-Wt,N-K],[Wt,X-N]])if(xe===0){if(An<0){ye=!1;break}}else{let an=An/xe;if(xe<0){if(an>dt){ye=!1;break}an>ht&&(ht=an)}else{if(an<ht){ye=!1;break}an<dt&&(dt=an)}}if(ye&&ht<dt)return!0}return!1}function Mt(){return g.lv===2?"attic":g.lv===1?g.z<4.1?"terrace":"function":g.z<0?"garden":g.x<15.5?"bar":"dining"}return{scene:r,camera:a,blocked:St,step:xt,jump:yt,place:lt,startAtDoor:Ft,ZONES:F,P:g,input:tt,zoneAt:Mt,look(v,C){ft||(g.yaw-=v*.0042,g.pitch=En.clamp(g.pitch-C*.0036,-1.1,1.1))},pinPos:v=>{let C=F[v],N=ce[C.lv]+(v==="garden"?i-n:0)+1.9;return new U(C.look[0],N,C.look[1])}}}var ms=document.getElementById("tour3d"),fe=n=>n-11.5,ba=64,_s=57,Je={render:15986404,render2:15130320,roof:11818799,roof2:10111532,timber:9067066,glass:7248536,pool:5814214,ground:15324078,lawn:10922860,road:9273975,tree:8159304,tree2:7303488,slab:14273460,room:15852492,hotelRoof:13616824,base:10260352},Te=new Fl({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),Mf=Math.min(devicePixelRatio,innerWidth<700?1.5:2),Nv=Math.min(devicePixelRatio,innerWidth<700?1.25:1.5);Te.setPixelRatio(Mf);Te.shadowMap.enabled=!0;Te.shadowMap.type=ss;Te.outputColorSpace=Xe;Te.toneMapping=oa;Te.toneMappingExposure=1.05;ms.appendChild(Te.domElement);var si=new $i;si.background=new Yt(16179910);si.fog=new Ur(16179910,140,260);var He=new qe(38,1,.5,600),Tn=new kl(He,Te.domElement);Tn.enableDamping=!0;Tn.maxPolarAngle=Math.PI*.49;Tn.minDistance=18;Tn.maxDistance=190;Tn.target.set(30,6,24);He.position.set(-20,48,-46);ms.clientWidth<ms.clientHeight&&He.position.set(-45,85,-80);si.add(new ns(16774370,10255194,1.1));var ki=new is(16771528,2.1);ki.position.set(-40,80,-30);ki.castShadow=!0;ki.shadow.mapSize.set(2048,2048);Object.assign(ki.shadow.camera,{left:-70,right:70,top:70,bottom:-70,near:10,far:220});ki.shadow.bias=-4e-4;ki.target.position.set(31,0,34);si.add(ki,ki.target);var df={},Xt=(n,t={})=>{let e=n+JSON.stringify(t);return df[e]||(df[e]=new Qs({color:n,roughness:.85,metalness:0,...t}))},oi=[];function Le(n,t,e,i,s,r,a,o,l){let c=new _e(new Be(n,t,e),a);return c.position.set(i+n/2,s+t/2,r+e/2),c.castShadow=c.receiveShadow=!0,o.add(c),l&&(c.userData.zone=l,oi.push(c)),c}function $l(n,t,e,i,s,r,a,o,l){let c=new Oe,h=Math.min(n,t)/2,f=[[0,0,0],[n,0,0],[n,0,t],[0,0,t],[h,e,h],[n-h,e,h],[n-h,e,t-h],[h,e,t-h]],u=[[0,4,1],[1,4,5],[1,5,2],[2,5,6],[2,6,3],[3,6,7],[3,7,0],[0,7,4],[4,7,5],[5,7,6]],p=[];u.forEach(b=>b.forEach(_=>p.push(...f[_]))),c.setAttribute("position",new de(p,3)),c.computeVertexNormals();let x=new _e(c,new Qs({color:a.color,roughness:.8,side:Ze}));return x.position.set(i,s,r),x.castShadow=!0,x.receiveShadow=!0,o.add(x),l&&(x.userData.zone=l,oi.push(x)),x}var Ea=new $e;si.add(Ea);var Ta=new In(ba+60,_s+60,90,90);Ta.rotateX(-Math.PI/2);Ta.translate(ba/2,0,_s/2);var Uh=(n,t)=>{let e=En.clamp(t/_s,0,1);return fe(11.5)+e*(fe(21.8)-fe(11.5))+(t<0,0)},Vl=Ta.attributes.position;for(let n=0;n<Vl.count;n++)Vl.setY(n,Uh(Vl.getX(n),Vl.getZ(n))-.05);Ta.computeVertexNormals();var Ph=Xt(Je.ground,{transparent:!0,opacity:1}),Fh=new _e(Ta,Ph);Fh.receiveShadow=!0;Ea.add(Fh);var Oh=Xt(Je.road);Le(ba+40,.3,7,-20,-.3,-8,Oh,Ea);var Bh=new _e(new Be(ba+40,.3,7),Oh);Bh.position.set(ba/2,fe(21.8),_s+4.5);Bh.receiveShadow=!0;Ea.add(Bh);var Kl=new _e(new Be(8,.3,_s+14),Oh);Kl.position.set(-5,(fe(11.5)+fe(21.8))/2,_s/2);Kl.rotation.x=-Math.atan((fe(21.8)-fe(11.5))/_s);Kl.receiveShadow=!0;Ea.add(Kl);var Sf=new $e;si.add(Sf);var ie=7.5,se=9.4,rn=Xt(Je.render),bf=Xt(Je.render2),Ef=Xt(Je.roof),Tf=Xt(Je.roof2),wf=Xt(Je.lawn),Af=Xt(Je.slab),Uv=Xt(14205856),Rf=Xt(4156245),Fv=Xt(12159582),Cf=Xt(Je.glass,{transparent:!0,opacity:.5,roughness:.2}),gs=Xt(9067066),zh=Xt(5913128),Pf=[],Hi=n=>{let t=new $e;return Sf.add(t),Pf.push({g:t,lv:n}),t},Ge=Hi(0),jl=Hi(1),Ql=Hi(2),ri=Hi(3),tc=Hi(.5),wn=Hi(-.5),If=Hi(1.5),xs=Hi(-1.5),jt=fe(16.33),be=fe(20.13),dn=fe(23.34),ai=fe(14.62),Zt=(n,t,e,i,s,r,a,o,l)=>Le(n,t,e,ie+i,s,se+r,a,o,l);Zt(31,jt,31,0,0,0,bf,Ge);Zt(14,ai,7,.2,0,-7,wf,Ge,"garden");Zt(14,ai,7,19.8,0,-7,wf,Ge,"garden");Zt(5.6,ai+.8,7,14.2,0,-7,Xt(13483944),Ge,"porch");for(let n=0;n<7;n++)Zt(5.6,(jt-ai)*(n+1)/7,.6,14.2,ai,-1.2-n*.6+.6,Xt(14273718),Ge,"porch");[[3,-3.6],[7.5,-4.5],[11,-3],[23,-3.6],[27.5,-4.5],[31,-3]].forEach(([n,t],e)=>{let i=new _e(new jn(.06,.06,2.4,6),Xt(5910044));i.position.set(ie+n,ai+1.2,se+t),Ge.add(i);let s=new _e(new Ti(1.5,.6,8),Xt(e%2?14722106:15986404));s.position.set(ie+n,ai+2.5,se+t),s.castShadow=!0,s.userData.zone="garden",oi.push(s),Ge.add(s)});Zt(14,be-jt-.3,4.1,0,jt,0,Cf,Ge,"courtyards");Zt(14,be-jt-.3,4.1,17,jt,0,Cf,Ge,"courtyards");Zt(3,be-jt-.3,4.1,14,jt,0,rn,Ge,"porch");Zt(2,2.6,.08,14.5,jt,-.08,Xt(15911306,{emissive:11565104,emissiveIntensity:.8}),Ge);Zt(2.3,.12,.12,14.35,jt+2.6,-.12,gs,Ge);Zt(.12,2.6,.12,14.35,jt,-.12,gs,Ge);Zt(.12,2.6,.12,16.53,jt,-.12,gs,Ge);Zt(31,be-jt,16.8,0,jt,4.1,rn,tc,"frontbar");Zt(26,be-jt-.4,4.2,1,jt,20.9,rn,tc,"kitchen");var Ov=Xt(14268812),Bv=Xt(15258286);Zt(14.5,.12,16.8,0,jt,4.1,Ov,wn,"frontbar");Zt(16.5,.12,16.8,14.5,jt,4.1,Bv,wn,"dining");Zt(26,.12,4.2,1,jt,20.9,Xt(13619144),wn,"kitchen");Zt(31,1.4,.3,0,jt,20.6,rn,wn);Zt(.3,1.4,16.8,0,jt,4.1,rn,wn);Zt(.3,1.4,16.8,30.7,jt,4.1,rn,wn);Zt(1.3,1.1,6,5.6,jt+.12,8.5,zh,wn,"frontbar");Zt(5,1.1,1.3,5.6,jt+.12,8.5,zh,wn,"frontbar");var vs=new _e(new Qr(2.6,.55,6,18,Math.PI*.9),Rf);vs.rotation.x=Math.PI/2;vs.rotation.z=-Math.PI*.15;vs.position.set(ie+25.5,jt+.7,se+8.5);vs.castShadow=!0;vs.userData.zone="dining";oi.push(vs);wn.add(vs);for(let n=0;n<3;n++)for(let t=0;t<2;t++)Zt(1.3,.75,1.3,2.5+t*3,jt+.12,12+n*2.6,gs,wn,"frontbar"),Zt(1.5,.75,1.5,18+t*3.2,jt+.12,12+n*2.8,gs,wn,"dining");Zt(4,1,6,13.4,jt+.12,13.4,Xt(12105904),wn,"kitchen");Zt(2.6,1.2,4,17.5,jt+.12,7,gs,wn,"stair");Zt(7,.2,4.5,1.1,jt,26.6,Uv,Ge,"courtyards");Zt(14.7,be-jt-.4,4,1.1,jt,21.3,rn,tc,"lounge");Zt(8.2,fe(26.2)-jt,9.5,18.8,jt,16,rn,tc,"stair");Le(13.1,fe(15.02)-0+2.8,19.7,48.3,0,10.2,bf,Ge,"bottleshop");$l(13.1,19.7,2.2,48.3,fe(15.02)+2.8,10.2,Tf,Ge,"bottleshop");Le(20,.12,5,28.5,Uh(30,49),47.8,Xt(12432035),Ge,"carpark");Zt(30,.15,3.6,.2,be-.1,.5,Af,jl,"balcony");Zt(30,1.1,.25,.2,be,.5,rn,jl,"balcony");for(let n=0;n<9;n++)Zt(.4,2.9,.4,.2+n*3.7,be,.5,rn,jl);Zt(27,dn-be+.3,11.8,.1,be,4.1,rn,If,"bombies");Zt(27,.12,11.8,.1,be,4.1,Fv,xs,"bombies");Zt(27,1.3,.3,.1,be,15.6,rn,xs);Zt(.3,1.3,11.8,.1,be,4.1,rn,xs);Zt(.3,1.3,11.8,26.8,be,4.1,rn,xs);Zt(.3,1.3,11.8,8.5,be,4.1,rn,xs);Zt(2.4,1.1,4,19.5,be+.12,8,Xt(8366502),xs,"bombies");Zt(8,.3,7,9.5,be+.12,5,Xt(13216131),xs,"bombies");Zt(8.2,fe(22.83)-be+.2,9.5,18.8,be,16,rn,jl,"stair");Zt(22,.15,11,3,dn,5.2,Xt(14268812),Ql,"attic");Zt(8.4,2.4,3.4,15.8,dn+.15,5.3,zh,Ql,"attic");Zt(12.3,2.2,.15,3.5,dn+.15,8.2,Xt(15260872),Ql,"attic");Zt(1.1,1.1,4,18.5,dn+.15,10,Rf,Ql,"attic");$l(30.7,15,fe(27.3)-dn-.2,-.5,dn+.2,2.2+se-se,Ef,ri,"roofpub");ri.children[ri.children.length-1].position.set(ie-.5,dn+.2,se+2.2);var _r=new ji;_r.moveTo(-3.6,0);_r.lineTo(3.6,0);_r.lineTo(0,3.4);_r.lineTo(-3.6,0);var wa=new _e(new Kr(_r,{depth:6,bevelEnabled:!1}),Xt(Je.roof));wa.position.set(ie+15.5,dn+.2,se+1.6);wa.castShadow=!0;wa.userData.zone="roofpub";oi.push(wa);ri.add(wa);var Lf=new _e(new jr(_r),Xt(15327698,{side:Ze}));Lf.position.set(ie+15.5,dn+.2,se+1.55);ri.add(Lf);for(let n=-3;n<=3;n++)Zt(.08,3.2-Math.abs(n)*.9,.06,15.5+n*.9,dn+.25,1.5,gs,ri);$l(31,3.6,.9,-.3,dn-.4,.2,Tf,ri,"balcony");ri.children[ri.children.length-1].position.set(ie-.3,dn-.5,se+.2);var zv=$l(8,7.5,1.4,0,0,0,Ef,ri,"attic");zv.position.set(ie+15.4,fe(26.2),se+8.7);var kv=Xt(5917248);for(let n=0;n<8;n++)Zt(1.2,1.5,.15,1.8+n*3.4,be+.9,4,kv,If);Le(16,jt,2,ie+10,0,se+31,Xt(13216131),Ge,"deck");var ql=new $e;si.add(ql);function Vv(n,t,e=1){let i=Uh(n,t),s=new _e(new jn(.25*e,.35*e,3*e,6),Xt(7031347));s.position.set(n,i+1.5*e,t),s.castShadow=!0,ql.add(s);let r=new _e(new ts(2.6*e,0),Xt(Math.random()<.5?Je.tree:Je.tree2,{flatShading:!0}));r.position.set(n,i+4.2*e,t),r.castShadow=!0,ql.add(r)}[[8,57],[17,57.5],[27,57],[38,57.5],[49,57],[59,52],[2,36],[58,8],[61,30]].forEach(([n,t])=>Vv(n,t,.75+Math.random()*.25));var ds=new $e;si.add(ds);var Ie=7,Ce=42.5,Bi=46,ii=14,Kt={B2:fe(10.06),B1:fe(13.06),L00:fe(16.95),L01:fe(20.15),L02:fe(23.35),RF:fe(27.25)},Gl={},Aa=n=>{let t=new $e;return t.userData.lv=n,ds.add(t),Gl[n]=t,t},va=Aa(-1),kh=Aa(0),xr=Aa(1),Vh=Aa(2),Df=Aa(3),Nf=Xt(Je.base,{transparent:!0,opacity:.92}),ff=Xt(Je.room),ib=Xt(15260872),Ih=Xt(Je.glass,{transparent:!0,opacity:.55,roughness:.2}),Hv=Xt(Je.timber),Gv=Xt(Je.pool,{roughness:.15,metalness:.1});Le(Bi+4,Kt.B1-Kt.B2-.3,ii+6,Ie-2,Kt.B2,Ce-3,Nf,va,"basement");Le(Bi+4,Kt.L00-Kt.B1-.3,ii+6,Ie-2,Kt.B1,Ce-3,Nf,va,"basement");var pf=Xt(10111532);for(let n of[Kt.B2,Kt.B1])for(let t=0;t<14;t++)Le(2.2,1.3,4.4,Ie+1+t*3.1,n+.05,Ce-2,pf,va),Le(2.2,1.3,4.4,Ie+1+t*3.1,n+.05,Ce+ii-3,pf,va);var Wv=Le(6,.4,10,-1,Kt.B1+1.5,Ce+2,Xt(8221288),va,"basement");Wv.rotation.z=0;function Hh(n,t,e,i,s,r){Le(Bi,.35,ii,Ie,t,Ce,Af,n);let a=6,o=6,l=ii-a-o;i.forEach(([c,h,f])=>Le(h-.2,e-.35,a,Ie+c,t+.35,Ce,f==="room"?ff:Xt(f),n,f==="room"?"rooms":r[f]||"rooms")),s.forEach(([c,h,f])=>Le(h-.2,e-.35,o,Ie+c,t+.35,Ce+ii-o,f==="room"?ff:Xt(f),n,f==="room"?"rooms":r[f]||"rooms")),Le(Bi-6,1.1,.08,Ie+3,t+.35,Ce+a+.2,Ih,n,"void"),Le(Bi-6,1.1,.08,Ie+3,t+.35,Ce+ii-o-.3,Ih,n,"void")}var Hl=8366502;var un=(n,t,e=3.8)=>Array.from({length:t},(i,s)=>[n+s*e,e,"room"]);Hh(kh,Kt.L00,Kt.L01-Kt.L00,[[0,8,Hl],[8,3,14207926],[11,5,Hl],...un(16,2),[23.6,3,14207926],...un(26.6,5)],[...un(.5,2),[8.1,2.4,14207926],[10.5,6,13615789],[16.5,6.5,15260872],[23,7,Hl],...un(30,2)],{[Hl]:"reception",13615789:"void",15260872:"reception",14207926:"connection"});Hh(xr,Kt.L01,Kt.L02-Kt.L01,[...un(0,5),...un(35.6,3)],[...un(0,4),[15.2,5.2,13615789],...un(20.4,4),...un(35.6,3).slice(0,2)],{13615789:"void"});Le(15,fe(21.38)-Kt.L01,8,Ie+19.5,Kt.L01,Ce-6,Xt(14140322),xr,"pool");var sb=Le(12,.25,5.4,Ie+21,fe(21.38)-.15,Ce-4.8,Gv,xr,"pool");Le(12,.08,.08,Ie+21,fe(21.38)+.1,Ce-4.85,Xt(16777215),xr,"pool");Hh(Vh,Kt.L02,Kt.RF-Kt.L02-.6,[...un(0,5),...un(19,2),...un(35.6,3)],[...un(0,4),[15.2,5.2,13615789],...un(20.4,4),...un(35.6,3).slice(0,2)],{13615789:"void"});[Kt.L01,Kt.L02].forEach((n,t)=>Le(2.2,.2,ii-12,Ie+22,n+.35,Ce+6,Xt(5917248),t?Vh:xr,"void"));function Uf(n,t,e){let i=Le(t,.35,ii+1.2,Ie+n,Kt.RF-.6,Ce-.6,Xt(Je.hotelRoof),e,"roof");i.rotation.x=En.degToRad(3)}Uf(-.6,21.4,Df);Uf(23.6,23,Df);var Xv=new Be(.12,Kt.RF-Kt.L00-.6,.22),Ff=Math.floor(Bi/.45),Vi=new zr(Xv,Hv,Ff*1+60),Yl=0,pr=new ge;for(let n=0;n<Ff;n++)pr.makeTranslation(Ie+n*.45+.2,Kt.L00+(Kt.RF-Kt.L00-.6)/2,Ce+ii+.5),Vi.setMatrixAt(Yl++,pr);for(let n=0;n<30;n++)pr.makeTranslation(Ie-.5,Kt.L00+(Kt.RF-Kt.L00-.6)/2,Ce+n*.5),Vi.setMatrixAt(Yl++,pr),pr.makeTranslation(Ie+Bi+.5,Kt.L00+(Kt.RF-Kt.L00-.6)/2,Ce+n*.5),Vi.setMatrixAt(Yl++,pr);Vi.count=Yl;Vi.castShadow=!0;Vi.userData.zone="screen";oi.push(Vi);var ec=new $e;ec.add(Vi);ds.add(ec);ec.userData.lv=2.5;for(let n of[[kh,Kt.L00],[xr,Kt.L01],[Vh,Kt.L02]])Le(Bi-.4,2,.06,Ie+.2,n[1]+.9,Ce-.04,Ih,n[0]);Le(3,Kt.L01-Kt.L00,6,Ie+23.6,Kt.L00,Ce-6,Xt(14207926),kh,"connection");var Gh={porch:["Front porch entry","Ground \xB7 RL 16.33","The central porch and stairs up from the beer garden, the front door off Moore Road."],frontbar:["Main front bar","Ground \xB7 RL 16.33","To the right as you enter: the main bar, looking out over the beer garden."],dining:["Harbord Dining Room","Ground \xB7 RL 16.33","To the left of the porch, the former Balsa restaurant, with its curved green marble bar and spotted gum ceilings."],kitchen:["Kitchen & back of house","Ground \xB7 RL 16.33","Kitchen, cool room and wash-up behind the bars."],lounge:["Lounge","Ground \xB7 rear","The rear lounge beside the back courtyard."],courtyards:["Courtyards","Ground \xB7 RL 16.33 / 16.42","The enclosed front courtyards in the former verandah, and the rear courtyard."],garden:["Beer garden","RL 14.62","Below the front bar on either side of the porch stairs, stepping down to Moore Road."],stair:["Stair & new lift","Ground to attic","The restored original staircase, with a new lift serving Level 1 and the attic."],bombies:["Bombies & Level 1 functions","Level 1 \xB7 RL 20.13 \xB7 capacity 320","The performance space and bar on Level 1, opening onto the verandah."],balcony:["Verandah balcony \xB7 Bombies Rooftop Terrace","Level 1 \xB7 RL 20.20 \xB7 about 147 m\xB2","The full-width balcony behind the heritage balustrade, with glass acoustic panels. 70 seated or 110 standing."],attic:["Attic studio & bar","Attic \xB7 RL 23.34 \xB7 capacity 100","About 150 m\xB2 under the raised roof: a lounge, bar, audio desk and recording studio, reached by the new lift."],roofpub:["Hipped terracotta roof","Ridge about RL 27","White render under terracotta tiles, with the street-facing central gable and timber batten infill."],bottleshop:["Bottle shop","East \xB7 FFL 15.02","The bottle shop to the east of the pub."],carpark:["Car park","South of the pub","Existing hard-stand car parking behind the pub."],deck:["Rear edge","RL 16.33","The back of the pub, where the proposed accommodation would connect."],reception:["Reception, lounge & gym","Proposed \xB7 L00 \xB7 RL 16.95","Arrival off Charles Street into reception, a guest lounge and gym."],connection:["Link to the pub","Proposed \xB7 L00","A corridor joins the proposed hotel to the existing pub."],rooms:["Guest rooms","Proposed \xB7 37 rooms over 3 levels","Rooms of about 20 to 24 m\xB2 either side of a central void."],void:["Central void & bridge","Proposed","Light wells bring daylight through the building, crossed by a grated bridge."],pool:["Infinity pool","Proposed \xB7 L01 \xB7 deck RL 21.38","A pool and deck on Level 01 between the room wings."],screen:["Hardwood timber screen","Proposed","Vertical hardwood battens wrap the facade to Undercliff Road."],roof:["Skillion roofs","Proposed \xB7 RL 27.25","Low 3\xB0 skillion roofs, kept below the pub ridge."],basement:["Basement parking","Proposed \xB7 2 levels \xB7 72 cars","Two basement levels with the driveway off Charles Street."]},zi=!1,Ne=3;function Of(){Object.values(Gl).forEach(n=>{n.visible=zi&&n.userData.lv<=Ne}),ec.visible=zi&&Ne>=3,Pf.forEach(n=>n.g.visible=n.lv===-.5?Ne===0:n.lv===-1.5?Ne===1:n.lv===2?Ne===2:Ne===-1?!0:n.lv<=Ne),Gl[-1].visible=zi&&Ne===-1,Ph.opacity=Ne===-1?.25:1,Ph.depthWrite=Ne!==-1,Ne===-1&&Object.values(Gl).forEach(n=>{n.userData.lv>=0&&(n.visible=!1)}),ql.visible=Ne!==-1,Vf()}function vr(n){zi=n;let t=performance.now();if(ds.visible=!0,n){ds.scale.y=.001;let e=i=>{let s=Math.min(1,(i-t)/900);ds.scale.y=.001+.999*(1-Math.pow(1-s,3)),s<1&&requestAnimationFrame(e)};requestAnimationFrame(e)}Of(),document.querySelectorAll("[data-era]").forEach(e=>e.setAttribute("aria-pressed",e.dataset.era==="future"===n)),document.getElementById("eraNote").textContent=n?"Showing the proposed accommodation building from the lodged planning proposal (secondary, concept only).":"Today: the Harbord as it stands. Tap a zone or play the guided tour."}var Bf=[["porch",[ie+17,jt+1.6,se-2.5]],["frontbar",[ie+6,be+.4,se+12]],["dining",[ie+24,be+.4,se+10]],["garden",[ie+6,ai+3.2,se-4]],["courtyards",[ie+6,be-1,se+.2]],["balcony",[ie+25,be+1.4,se+1.6]],["bombies",[ie+6,dn+.6,se+12]],["attic",[ie+19,fe(27.8),se+12]],["stair",[ie+23,fe(26.4),se+21]],["kitchen",[ie+8,be,se+23]],["bottleshop",[55,fe(15.02)+5.4,24]],["connection",[Ie+25,Kt.L01+.4,Ce-3]],["pool",[Ie+27,fe(21.38)+.5,Ce-2.5]],["rooms",[Ie+40,Kt.RF+.2,Ce+4]],["basement",[Ie+18,Kt.B1+1.2,Ce+3]]],Wh=document.getElementById("pins");Wh.innerHTML=Bf.map(([n],t)=>`<button class="pin" data-z="${n}" style="display:none" aria-label="${Gh[n][0]}">${t+1}</button>`).join("");var zf=[...Wh.children],kf=n=>Gh[n][1].startsWith("Proposed");function qv(n){return Ne===-1?n==="basement":n==="basement"||kf(n)&&!zi?!1:n==="rooms"||n==="pool"?zi&&Ne>=1:n==="attic"?Ne===2||Ne===3:["balcony","bombies"].includes(n)?Ne>=1:["frontbar","dining"].includes(n)?Ne===0||Ne===3:!0}var us=new U,Rh=new ir,mf={},Lh=0,Yv=()=>[Fh,...oi.filter(n=>{let t=n;for(;t;){if(!t.visible)return!1;t=t.parent}return!0})];function Vf(){let n=Te.domElement.getBoundingClientRect();Bf.forEach(([t,e],i)=>{let s=zf[i];if(!qv(t)){s.style.display="none";return}if(us.set(...e),t!=="basement"&&kf(t)&&(us.y*=ds.scale.y),Lh%8===0){let r=us.clone().sub(He.position),a=r.length();Rh.set(He.position,r.normalize()),Rh.far=a-1.2;let o=Rh.intersectObjects(Yv(),!1);mf[t]=o.length>0&&Ne!==-1}if(s.classList.toggle("hid",!!mf[t]),us.project(He),us.z>1){s.style.display="none";return}s.style.display="",s.style.transform=`translate(${(us.x*.5+.5)*n.width-15}px,${(-us.y*.5+.5)*n.height-15}px)`})}var Hf=document.getElementById("tinfo");function Ra(n){let t=Gh[n];t&&(Hf.innerHTML=`<div class="z">${t[1]}</div><h3 class="hd">${t[0]}</h3><p>${t[2]}</p>`,zf.forEach(e=>e.classList.toggle("on",e.dataset.z===n)),oi.forEach(e=>{e.material&&e.material.emissive}),Zv(n))}var Ch=[];function Zv(n){Ch.forEach(([t,e])=>t.material=e),Ch=[],oi.filter(t=>t.userData.zone===n&&!t.isInstancedMesh).forEach(t=>{Ch.push([t,t.material]);let e=t.material.clone();e.emissive=new Yt(14722106),e.emissiveIntensity=.35,t.material=e})}var gf=new ir,_f=new pt,Wl=null;Te.domElement.addEventListener("pointerdown",n=>Wl=[n.clientX,n.clientY]);Te.domElement.addEventListener("pointerup",n=>{if(Xn!=="out"||!Wl||Math.hypot(n.clientX-Wl[0],n.clientY-Wl[1])>6)return;let t=Te.domElement.getBoundingClientRect();_f.set((n.clientX-t.left)/t.width*2-1,-(n.clientY-t.top)/t.height*2+1),gf.setFromCamera(_f,He);let e=gf.intersectObjects(oi.filter(i=>{let s=i;for(;s;){if(!s.visible)return!1;s=s.parent}return!0}),!1)[0];e&&Ra(e.object.userData.zone)});Wh.addEventListener("click",n=>{let t=n.target.closest(".pin");t&&Ra(t.dataset.z)});document.querySelectorAll("[data-era]").forEach(n=>n.onclick=()=>{ys(),vr(n.dataset.era==="future")});document.querySelectorAll("[data-cut]").forEach(n=>n.onclick=()=>{ys(),Ca(+n.dataset.cut)});function Ca(n){Ne=n,n===-1&&!zi&&vr(!0),Of(),document.querySelectorAll("[data-cut]").forEach(t=>t.setAttribute("aria-pressed",+t.dataset.cut===n))}var ya=[{t:"Arriving on Moore Road",z:"porch",cam:[ie+40,16,-26],tg:[ie+16,6,se],cut:3,f:!1},{t:"The beer garden below the front bar",z:"garden",cam:[ie-10,9,-12],tg:[ie+7,4,se-3],cut:3,f:!1},{t:"Roof off: the main front bar",z:"frontbar",cam:[ie-12,24,se-8],tg:[ie+8,5,se+12],cut:0,f:!1},{t:"The Harbord Dining Room and its curved marble bar",z:"dining",cam:[ie+44,22,se-6],tg:[ie+23,5,se+11],cut:0,f:!1},{t:"Level 1: Bombies and the functions space",z:"bombies",cam:[ie+8,28,se-18],tg:[ie+13,9,se+9],cut:1,f:!1},{t:"The verandah balcony, Bombies Rooftop Terrace",z:"balcony",cam:[ie+36,14,se-12],tg:[ie+18,9,se+2],cut:1,f:!1},{t:"Under the raised roof: the attic studio and bar",z:"attic",cam:[ie-10,32,se-6],tg:[ie+16,12,se+10],cut:2,f:!1},{t:"The Harbord today",z:"roofpub",cam:[-20,48,-46],tg:[30,6,24],cut:3,f:!1},{t:"Bonus: the proposed accommodation building",z:"rooms",cam:[-30,52,92],tg:[30,8,44],cut:3,f:!0}],Pa=!1,fs=0,Gf=null,mr=null,Jv=document.getElementById("tcap"),Ma=document.getElementById("tplay");function Wf(n){n.f!==zi&&vr(n.f),Ca(n.cut),Ra(n.z),Jv.innerHTML=`<b>${fs+1}/${ya.length}</b> ${n.t}`;let t=He.position.clone(),e=Tn.target.clone(),i=new U(...n.tg),s=new U(...n.cam).sub(i).multiplyScalar(He.aspect<1?Math.min(2,1.1/He.aspect):1).add(i),r=performance.now(),a=2600;mr=o=>{let l=Math.min(1,(o-r)/a),c=l<.5?4*l*l*l:1-Math.pow(-2*l+2,3)/2;He.position.lerpVectors(t,s,c),Tn.target.lerpVectors(e,i,c),l>=1&&(mr=null)}}function Xh(){Wf(ya[fs]),fs=(fs+1)%ya.length,Pa&&(Gf=setTimeout(Xh,5200))}function $v(){Pa=!0,Ma.textContent="Pause tour",Ma.setAttribute("aria-pressed","true"),fs=fs%ya.length,Xh()}function ys(){Pa=!1,clearTimeout(Gf),Ma.textContent="Play guided tour",Ma.setAttribute("aria-pressed","false")}Ma.onclick=()=>Pa?ys():$v();document.getElementById("tnext").onclick=()=>{ys(),Xh()};Tn.addEventListener("start",()=>{Pa&&ys(),mr=null});function Ia(){let n=ms.clientWidth,t=ms.clientHeight;Te.setSize(n,t,!1),Te.domElement.style.width=n+"px",Te.domElement.style.height=t+"px",He.aspect=n/t,He.updateProjectionMatrix(),ue&&(ue.camera.aspect=n/t,ue.camera.fov=n<t?78:68,ue.camera.updateProjectionMatrix())}new ResizeObserver(Ia).observe(ms);Ia();var Xn="out",ue=null,Zl=null,xf=performance.now(),Xl=ms.parentElement,vf=document.getElementById("tfade"),qh=document.getElementById("inui"),Xf=document.getElementById("icap"),Dh=document.getElementById("ipins"),yf=["bar","dining","garden","function","terrace","attic"];function Yh(n){vf.classList.add("on"),setTimeout(()=>{n(),setTimeout(()=>vf.classList.remove("on"),60)},420)}function Zh(n){let t=ue.ZONES[n];Hf.innerHTML=`<div class="z">${t.cap}</div><h3 class="hd">${t.n}</h3><p>${t.d}</p><figure class="iref"><img src="../assets/img/tour/${t.img}.jpg" alt="The Harbord today: ${t.n}" loading="lazy"><figcaption>The Harbord today, for reference. The 3D interior is illustrative, based on approved plans.</figcaption></figure>`,Xf.innerHTML=`<b>${t.n}</b> ${t.cap}`,document.querySelectorAll("[data-iz]").forEach(e=>e.setAttribute("aria-pressed",e.dataset.iz===n))}function Kv(){ue||(ue=uf({y0:jt,y1:be,y2:dn,yg:ai,imgBase:"../assets/img/tour/"}),document.getElementById("izs").innerHTML=yf.map(n=>`<button data-iz="${n}" aria-pressed="false">${ue.ZONES[n].n.replace(" (Bombies)","").replace(" (bistro)","")}</button>`).join(""),Dh.innerHTML=yf.map((n,t)=>`<button class="pin ipin" data-iz="${n}" aria-label="${ue.ZONES[n].n}" style="display:none">${t+1}</button>`).join(""),qh.addEventListener("click",n=>{let t=n.target.closest("[data-iz]");t&&Nh(t.dataset.iz)}),Dh.addEventListener("click",n=>{let t=n.target.closest("[data-iz]");t&&Nh(t.dataset.iz)}),Ia())}var Sa=null;function Nh(n){ue.jump(n,Yh),Sa=n,Zh(n)}function qf(){if(Xn!=="out")return;ys(),mr=null,vr(!1),Ca(3),Kv(),Xn="flying",Tn.enabled=!1,Xl.classList.add("flying");let n=new U(ie+15.6,jt+1.7,se-3.2),t=new U(ie+15.6,jt+1.3,se+6),e=new U(ie+15.6,jt+9,se-30),i=He.position.clone(),s=Tn.target.clone(),r=performance.now(),a=2600;Zl=o=>{let l=Math.min(1,(o-r)/a),c=l<.5?4*l*l*l:1-Math.pow(-2*l+2,3)/2,h=i.clone().lerp(e,c),f=e.clone().lerp(n,c);He.position.copy(h.lerp(f,c));let u=s.clone().lerp(t,Math.min(1,c*1.3));He.lookAt(u),l>=1&&(Zl=null,Yh(()=>{Xn="in",ue.startAtDoor(),Te.setPixelRatio(Nv),Ia(),Xl.classList.remove("flying"),Xl.classList.add("inside"),qh.hidden=!1,Sa=null,Zh("bar"),Xf.innerHTML="<b>Inside the Harbord</b> "+(matchMedia("(pointer:coarse)").matches?"Joystick to walk, drag to look, or tap a zone.":"WASD or arrow keys to walk, drag to look, or pick a zone.")}))}}function Jh(){Xn==="in"&&Yh(()=>{Xn="out",qh.hidden=!0,Xl.classList.remove("inside"),Te.setPixelRatio(Mf),Ia(),Tn.enabled=!0,He.position.set(ie+15.6,ai+9,se-26),Tn.target.set(ie+15.6,jt,se+6),Ra("porch")})}document.getElementById("tin").onclick=qf;document.getElementById("tout").onclick=Jh;var Wn={},Jl={KeyW:"f",ArrowUp:"f",KeyS:"b",ArrowDown:"b",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"};addEventListener("keydown",n=>{Xn!=="in"||n.target.closest&&n.target.closest("input,textarea")||(Jl[n.code]&&(Wn[Jl[n.code]]=1,n.preventDefault()),n.key==="Shift"&&(Wn.run=1),n.key==="Escape"&&Jh())});addEventListener("keyup",n=>{Jl[n.code]&&(Wn[Jl[n.code]]=0),n.key==="Shift"&&(Wn.run=0)});addEventListener("blur",()=>{for(let n in Wn)Wn[n]=0});var ni=null;Te.domElement.addEventListener("pointerdown",n=>{if(Xn==="in"){ni={id:n.pointerId,x:n.clientX,y:n.clientY};try{Te.domElement.setPointerCapture(n.pointerId)}catch{}}});Te.domElement.addEventListener("pointermove",n=>{Xn!=="in"||!ni||n.pointerId!==ni.id||(ue.look(n.clientX-ni.x,n.clientY-ni.y),ni.x=n.clientX,ni.y=n.clientY)});var Yf=n=>{ni&&n.pointerId===ni.id&&(ni=null)};Te.domElement.addEventListener("pointerup",Yf);Te.domElement.addEventListener("pointercancel",Yf);var ps=document.getElementById("joy"),Zf=ps.firstElementChild,Oi=null,gr={x:0,y:0};ps.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation();try{ps.setPointerCapture(n.pointerId)}catch{}let t=ps.getBoundingClientRect();Oi={id:n.pointerId,cx:t.left+t.width/2,cy:t.top+t.height/2},Jf(n)});function Jf(n){if(!Oi||n.pointerId!==Oi.id)return;let t=n.clientX-Oi.cx,e=n.clientY-Oi.cy,i=Math.hypot(t,e),s=42;i>s&&(t*=s/i,e*=s/i),gr.x=t/s,gr.y=e/s,Zf.style.transform=`translate(${t}px,${e}px)`}ps.addEventListener("pointermove",Jf);var $f=n=>{Oi&&n.pointerId===Oi.id&&(Oi=null,gr.x=gr.y=0,Zf.style.transform="")};ps.addEventListener("pointerup",$f);ps.addEventListener("pointercancel",$f);function jv(){let n=Te.domElement.getBoundingClientRect();[...Dh.children].forEach(t=>{let e=t.dataset.iz,i=ue.ZONES[e];i.lv!==ue.P.lv||e===Sa&&ue.input.f;let s=ue.pinPos(e),r=s.distanceTo(ue.camera.position);if(i.lv!==ue.P.lv||r>32||r<2.2||ue.blocked(i.lv,ue.P.x,ue.P.z,s.x,s.z)){t.style.display="none";return}if(s.project(ue.camera),s.z>1||Math.abs(s.x)>1.05||Math.abs(s.y)>1.05){t.style.display="none";return}t.style.display="",t.style.transform=`translate(${(s.x*.5+.5)*n.width-15}px,${(-s.y*.5+.5)*n.height-15}px)`})}function Kf(n){requestAnimationFrame(Kf),Lh++;let t=Math.min(.05,(n-xf)/1e3);if(xf=n,Xn==="in"){ue.input.f=(Wn.f||0)-(Wn.b||0)-gr.y,ue.input.s=(Wn.r||0)-(Wn.l||0)+gr.x,ue.input.run=!!Wn.run,ue.step(t);let e=ue.zoneAt();e!==Sa&&(ue.input.f||ue.input.s)&&(Sa=e,Zh(e)),Te.render(ue.scene,ue.camera),Lh%2===0&&jv();return}if(Zl){Zl(n),Te.render(si,He);return}mr&&mr(n),Tn.update(),Te.render(si,He),Vf()}vr(!1);Ca(3);Ra("porch");requestAnimationFrame(Kf);window.__tour={setFuture:vr,setCut:Ca,fly:n=>{fs=n,ys(),Wf(ya[n])},enter:qf,exit:Jh,go:n=>Nh(n),get mode(){return Xn},get pos(){return ue&&{...ue.P}},ready:!0};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
