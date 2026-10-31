(()=>{var Ci={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fu=0,Bc=1,Ou=2;var is=1,Bu=2,rr=3,Ii=0,on=1,Be=2,Qn=0,ar=1,ss=2,zc=3,kc=4,zu=5;var rs=100,ku=101,Hu=102,Vu=103,Gu=104,Wu=200,Xu=201,qu=202,Yu=203,Hc=204,Vc=205,Zu=206,Ju=207,$u=208,Ku=209,ju=210,Qu=211,td=212,ed=213,nd=214,co=0,ho=1,uo=2,zs=3,fo=4,po=5,mo=6,go=7,ca=0,id=1,sd=2,kn=0,Gc=1,Wc=2,Xc=3,ha=4,qc=5,Yc=6,Zc=7;var Jc=300,Li=301,as=302,Yo=303,Zo=304,ua=306,ks=1e3,mn=1001,_o=1002,Ye=1003,rd=1004;var da=1005;var Ze=1006,Jo=1007;var Di=1008;var hn=1009,$c=1010,Kc=1011,or=1012,$o=1013,Hn=1014,Vn=1015,Gn=1016,Ko=1017,jo=1018,lr=1020,jc=35902,Qc=35899,th=1021,eh=1022,Rn=1023,jn=1026,Ni=1027,nh=1028,Qo=1029,Ui=1030,tl=1031;var el=1033,fa=33776,pa=33777,ma=33778,ga=33779,nl=35840,il=35841,sl=35842,rl=35843,al=36196,ol=37492,ll=37496,cl=37488,hl=37489,_a=37490,ul=37491,dl=37808,fl=37809,pl=37810,ml=37811,gl=37812,_l=37813,xl=37814,vl=37815,yl=37816,Ml=37817,Sl=37818,bl=37819,El=37820,Tl=37821,wl=36492,Al=36494,Rl=36495,Cl=36283,Pl=36284,xa=36285,Il=36286;var Fr=2300,xo=2301,ao=2302,wc=2303,Ac=2400,Rc=2401,Cc=2402;var ad=3200;var cr=0,od=1,Wn="",Oe="srgb",Or="srgb-linear",Br="linear",me="srgb";var oo=7680;var ld=519,cd=512,hd=513,ud=514,Ll=515,dd=516,fd=517,Dl=518,pd=519,ih=35044;var sh="300 es",Un=2e3,Hs=2001;function Zf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Jf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function md(){let i=Vs("canvas");return i.style.display="block",i}var iu={},Gs=null;function zr(...i){let t="THREE."+i.shift();Gs?Gs("log",t,...i):console.log(t,...i)}function gd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Yt(...i){i=gd(i);let t="THREE."+i.shift();if(Gs)Gs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function qt(...i){i=gd(i);let t="THREE."+i.shift();if(Gs)Gs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Xi(...i){let t=i.join(" ");t in iu||(iu[t]=!0,Yt(...i))}function _d(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var xd={[co]:ho,[uo]:mo,[fo]:go,[zs]:po,[ho]:co,[mo]:uo,[go]:fo,[po]:zs},Fn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],su=1234567,Lr=Math.PI/180,Ws=180/Math.PI;function Kn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function rh(i,t){return(i%t+t)%t}function $f(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Kf(i,t,e){return i!==t?(e-i)/(t-i):0}function Dr(i,t,e){return(1-e)*i+e*t}function jf(i,t,e,n){return Dr(i,t,1-Math.exp(-e*n))}function Qf(i,t=1){return t-Math.abs(rh(i,t*2)-t)}function tp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ep(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function np(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ip(i,t){return i+Math.random()*(t-i)}function sp(i){return i*(.5-Math.random())}function rp(i){i!==void 0&&(su=i);let t=su+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ap(i){return i*Lr}function op(i){return i*Ws}function lp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function cp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function up(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:Yt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Cn={DEG2RAD:Lr,RAD2DEG:Ws,generateUUID:Kn,clamp:te,euclideanModulo:rh,mapLinear:$f,inverseLerp:Kf,lerp:Dr,damp:jf,pingpong:Qf,smoothstep:tp,smootherstep:ep,randInt:np,randFloat:ip,randFloatSpread:sp,seededRandom:rp,degToRad:ap,radToDeg:op,isPowerOfTwo:lp,ceilPowerOfTwo:cp,floorPowerOfTwo:hp,setQuaternionFromProperEuler:up,normalize:ge,denormalize:Nn},mt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},gn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],E=r[a+3];if(d!==E||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*E;m<0&&(u=-u,f=-f,g=-g,E=-E,m=-m);let p=1-o;if(m<.9995){let T=Math.acos(m),R=Math.sin(T);p=Math.sin(p*T)/R,o=Math.sin(o*T)/R,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+E*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+E*o;let T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Yt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ru.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ru.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ec.copy(this).projectOnVector(t),this.sub(ec)}reflect(t){return this.sub(ec.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ec=new F,ru=new gn,$t=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],E=s[0],m=s[3],p=s[6],T=s[1],R=s[4],y=s[7],A=s[2],w=s[5],N=s[8];return r[0]=a*E+o*T+l*A,r[3]=a*m+o*R+l*w,r[6]=a*p+o*y+l*N,r[1]=c*E+h*T+d*A,r[4]=c*m+h*R+d*w,r[7]=c*p+h*y+d*N,r[2]=u*E+f*T+g*A,r[5]=u*m+f*R+g*w,r[8]=u*p+f*y+g*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/g;return t[0]=d*E,t[1]=(s*c-h*n)*E,t[2]=(o*n-s*a)*E,t[3]=u*E,t[4]=(h*e-s*l)*E,t[5]=(s*r-o*e)*E,t[6]=f*E,t[7]=(n*l-c*e)*E,t[8]=(a*e-n*r)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Xi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nc.makeScale(t,e)),this}rotate(t){return Xi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nc.makeRotation(-t)),this}translate(t,e){return Xi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},nc=new $t,au=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ou=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dp(){let i={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===me&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wn?Br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Or]:{primaries:t,whitePoint:n,transfer:Br,toXYZ:au,fromXYZ:ou,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:n,transfer:me,toXYZ:au,fromXYZ:ou,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),i}var oe=dp();function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ys,vo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ys===void 0&&(ys=Vs("canvas")),ys.width=t.width,ys.height=t.height;let s=ys.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ys}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Vs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=di(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return Yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},fp=0,Xs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ic(s[a].image)):r.push(ic(s[a]))}else r=ic(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ic(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Yt("Texture: Unable to serialize Texture."),{})}var pp=0,sc=new F,tn=class i extends Fn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=mn,s=mn,r=Ze,a=Di,o=Rn,l=hn,c=i.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Kn(),this.name="",this.source=new Xs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sc).x}get height(){return this.source.getSize(sc).y}get depth(){return this.source.getSize(sc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Yt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Yt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ks:t.x=t.x-Math.floor(t.x);break;case mn:t.x=t.x<0?0:1;break;case _o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ks:t.y=t.y-Math.floor(t.y);break;case mn:t.y=t.y<0?0:1;break;case _o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Jc;tn.DEFAULT_ANISOTROPY=1;var Re=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],E=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,y=(f+1)/2,A=(p+1)/2,w=(h+u)/4,N=(d+E)/4,_=(g+m)/4;return R>y&&R>A?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=w/n,r=N/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=_/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=N/r,s=_/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(d-E)*(d-E)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-E)/T,this.z=(u-h)/T,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yo=class extends Fn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new tn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Xs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends yo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},kr=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Mo=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ee=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,g,E,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,E,m)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,E,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=E,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ms.setFromMatrixColumn(t,0).length(),r=1/Ms.setFromMatrixColumn(t,1).length(),a=1/Ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,E=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-E*c,e[9]=-o*l,e[2]=E-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,E=c*d;e[0]=u+E*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=E+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,E=c*d;e[0]=u-E*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=E-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,E=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+E,e[1]=l*d,e[5]=E*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,E=o*c;e[0]=l*h,e[4]=E-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-E*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,E=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+E,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=E*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mp,t,gp)}lookAt(t,e,n){let s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),gi.crossVectors(n,dn),gi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),gi.crossVectors(n,dn)),gi.normalize(),Fa.crossVectors(dn,gi),s[0]=gi.x,s[4]=Fa.x,s[8]=dn.x,s[1]=gi.y,s[5]=Fa.y,s[9]=dn.y,s[2]=gi.z,s[6]=Fa.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],E=n[6],m=n[10],p=n[14],T=n[3],R=n[7],y=n[11],A=n[15],w=s[0],N=s[4],_=s[8],x=s[12],U=s[1],z=s[5],q=s[9],J=s[13],H=s[2],V=s[6],st=s[10],I=s[14],W=s[3],B=s[7],Y=s[11],j=s[15];return r[0]=a*w+o*U+l*H+c*W,r[4]=a*N+o*z+l*V+c*B,r[8]=a*_+o*q+l*st+c*Y,r[12]=a*x+o*J+l*I+c*j,r[1]=h*w+d*U+u*H+f*W,r[5]=h*N+d*z+u*V+f*B,r[9]=h*_+d*q+u*st+f*Y,r[13]=h*x+d*J+u*I+f*j,r[2]=g*w+E*U+m*H+p*W,r[6]=g*N+E*z+m*V+p*B,r[10]=g*_+E*q+m*st+p*Y,r[14]=g*x+E*J+m*I+p*j,r[3]=T*w+R*U+y*H+A*W,r[7]=T*N+R*z+y*V+A*B,r[11]=T*_+R*q+y*st+A*Y,r[15]=T*x+R*J+y*I+A*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],E=t[7],m=t[11],p=t[15],T=l*f-c*u,R=o*f-c*d,y=o*u-l*d,A=a*f-c*h,w=a*u-l*h,N=a*d-o*h;return e*(E*T-m*R+p*y)-n*(g*T-m*A+p*w)+s*(g*R-E*A+p*N)-r*(g*y-E*w+m*N)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],E=t[13],m=t[14],p=t[15],T=e*o-n*a,R=e*l-s*a,y=e*c-r*a,A=n*l-s*o,w=n*c-r*o,N=s*c-r*l,_=h*E-d*g,x=h*m-u*g,U=h*p-f*g,z=d*m-u*E,q=d*p-f*E,J=u*p-f*m,H=T*J-R*q+y*z+A*U-w*x+N*_;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/H;return t[0]=(o*J-l*q+c*z)*V,t[1]=(s*q-n*J-r*z)*V,t[2]=(E*N-m*w+p*A)*V,t[3]=(u*w-d*N-f*A)*V,t[4]=(l*U-a*J-c*x)*V,t[5]=(e*J-s*U+r*x)*V,t[6]=(m*y-g*N-p*R)*V,t[7]=(h*N-u*y+f*R)*V,t[8]=(a*q-o*U+c*_)*V,t[9]=(n*U-e*q-r*_)*V,t[10]=(g*w-E*y+p*T)*V,t[11]=(d*y-h*w-f*T)*V,t[12]=(o*x-a*z-l*_)*V,t[13]=(e*z-n*x+s*_)*V,t[14]=(E*R-g*A-m*T)*V,t[15]=(h*A-d*R+u*T)*V,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,E=a*h,m=a*d,p=o*d,T=l*c,R=l*h,y=l*d,A=n.x,w=n.y,N=n.z;return s[0]=(1-(E+p))*A,s[1]=(f+y)*A,s[2]=(g-R)*A,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(u+p))*w,s[6]=(m+T)*w,s[7]=0,s[8]=(g+R)*N,s[9]=(m-T)*N,s[10]=(1-(u+E))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ms.set(s[0],s[1],s[2]).length(),o=Ms.set(s[4],s[5],s[6]).length(),l=Ms.set(s[8],s[9],s[10]).length();r<0&&(a=-a),In.copy(this);let c=1/a,h=1/o,d=1/l;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=d,In.elements[9]*=d,In.elements[10]*=d,e.setFromRotationMatrix(In),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Un,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,E;if(l)g=r/(a-r),E=a*r/(a-r);else if(o===Un)g=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(o===Hs)g=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Un,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),g,E;if(l)g=1/(a-r),E=a/(a-r);else if(o===Un)g=-2/(a-r),E=-(a+r)/(a-r);else if(o===Hs)g=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ms=new F,In=new Ee,mp=new F(0,0,0),gp=new F(1,1,1),gi=new F,Fa=new F,dn=new F,lu=new Ee,cu=new gn,On=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cu.setFromEuler(this),this.setFromQuaternion(cu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var qs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},_p=0,hu=new F,Ss=new gn,ai=new Ee,Oa=new F,Er=new F,xp=new F,vp=new gn,uu=new F(1,0,0),du=new F(0,1,0),fu=new F(0,0,1),pu={type:"added"},yp={type:"removed"},bs={type:"childadded",child:null},rc={type:"childremoved",child:null},Je=class i extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new On,n=new gn,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new $t}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.premultiply(Ss),this}rotateX(t){return this.rotateOnAxis(uu,t)}rotateY(t){return this.rotateOnAxis(du,t)}rotateZ(t){return this.rotateOnAxis(fu,t)}translateOnAxis(t,e){return hu.copy(t).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uu,t)}translateY(t){return this.translateOnAxis(du,t)}translateZ(t){return this.translateOnAxis(fu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Oa.copy(t):Oa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Er,Oa,this.up):ai.lookAt(Oa,Er,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(ai),this.quaternion.premultiply(Ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pu),bs.child=t,this.dispatchEvent(bs),bs.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yp),rc.child=t,this.dispatchEvent(rc),rc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pu),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,xp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,vp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Je.DEFAULT_UP=new F(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var be=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mp={type:"move"},Ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let E of t.hand.values()){let m=e.getJointPose(E,n),p=this._getHandJoint(c,E);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function ac(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=rh(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ac(a,r,t+1/3),this.g=ac(a,r,t),this.b=ac(a,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&Yt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Yt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Yt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){let n=vd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Yt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return oe.workingToColorSpace(Qe.copy(this),t),Math.round(te(Qe.r*255,0,255))*65536+Math.round(te(Qe.g*255,0,255))*256+Math.round(te(Qe.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(Qe.copy(this),e);let n=Qe.r,s=Qe.g,r=Qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=Oe){oe.workingToColorSpace(Qe.copy(this),t);let e=Qe.r,n=Qe.g,s=Qe.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(Ba);let n=Dr(_i.h,Ba.h,e),s=Dr(_i.s,Ba.s,e),r=Dr(_i.l,Ba.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qe=new Zt;Zt.NAMES=vd;var Hr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Zt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qi=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ln=new F,oi=new F,oc=new F,li=new F,Es=new F,Ts=new F,mu=new F,lc=new F,cc=new F,hc=new F,uc=new Re,dc=new Re,fc=new Re,ui=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ln.subVectors(t,e),s.cross(Ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ln.subVectors(s,e),oi.subVectors(n,e),oc.subVectors(t,e);let a=Ln.dot(Ln),o=Ln.dot(oi),l=Ln.dot(oc),c=oi.dot(oi),h=oi.dot(oc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(a,li.y),l.addScaledVector(o,li.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return uc.setScalar(0),dc.setScalar(0),fc.setScalar(0),uc.fromBufferAttribute(t,e),dc.fromBufferAttribute(t,n),fc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(uc,r.x),a.addScaledVector(dc,r.y),a.addScaledVector(fc,r.z),a}static isFrontFacing(t,e,n,s){return Ln.subVectors(n,e),oi.subVectors(t,e),Ln.cross(oi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Ln.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Es.subVectors(s,n),Ts.subVectors(r,n),lc.subVectors(t,n);let l=Es.dot(lc),c=Ts.dot(lc);if(l<=0&&c<=0)return e.copy(n);cc.subVectors(t,s);let h=Es.dot(cc),d=Ts.dot(cc);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Es,a);hc.subVectors(t,r);let f=Es.dot(hc),g=Ts.dot(hc);if(g>=0&&f<=g)return e.copy(r);let E=f*c-l*g;if(E<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ts,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return mu.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(mu,o);let p=1/(m+E+u);return a=E*p,o=u*p,e.copy(n).addScaledVector(Es,a).addScaledVector(Ts,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Mi=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Dn):Dn.fromBufferAttribute(r,a),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),za.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),za.copy(n.boundingBox)),za.applyMatrix4(t.matrixWorld),this.union(za)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tr),ka.subVectors(this.max,Tr),ws.subVectors(t.a,Tr),As.subVectors(t.b,Tr),Rs.subVectors(t.c,Tr),xi.subVectors(As,ws),vi.subVectors(Rs,As),Hi.subVectors(ws,Rs);let e=[0,-xi.z,xi.y,0,-vi.z,vi.y,0,-Hi.z,Hi.y,xi.z,0,-xi.x,vi.z,0,-vi.x,Hi.z,0,-Hi.x,-xi.y,xi.x,0,-vi.y,vi.x,0,-Hi.y,Hi.x,0];return!pc(e,ws,As,Rs,ka)||(e=[1,0,0,0,1,0,0,0,1],!pc(e,ws,As,Rs,ka))?!1:(Ha.crossVectors(xi,vi),e=[Ha.x,Ha.y,Ha.z],pc(e,ws,As,Rs,ka))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ci=[new F,new F,new F,new F,new F,new F,new F,new F],Dn=new F,za=new Mi,ws=new F,As=new F,Rs=new F,xi=new F,vi=new F,Hi=new F,Tr=new F,ka=new F,Ha=new F,Vi=new F;function pc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Vi.fromArray(i,r);let o=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),l=t.dot(Vi),c=e.dot(Vi),h=n.dot(Vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Fe=new F,Va=new mt,Sp=0,an=class extends Fn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ih,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Va.fromBufferAttribute(this,e),Va.applyMatrix3(t),this.setXY(e,Va.x,Va.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Vr=class extends an{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Gr=class extends an{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends an{constructor(t,e,n){super(new Float32Array(t),e,n)}},bp=new Mi,wr=new F,mc=new F,Zs=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):bp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wr.subVectors(t,this.center);let e=wr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(wr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wr.copy(t.center).add(mc)),this.expandByPoint(wr.copy(t.center).sub(mc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ep=0,En=new Ee,gc=new Je,Cs=new F,fn=new Mi,Ar=new Mi,Xe=new F,Ce=class i extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zf(t)?Gr:Vr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return gc.lookAt(t),gc.updateMatrix(),this.applyMatrix4(gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ae(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ar.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(fn.min,Ar.min),fn.expandByPoint(Xe),Xe.addVectors(fn.max,Ar.max),fn.expandByPoint(Xe)):(fn.expandByPoint(Ar.min),fn.expandByPoint(Ar.max))}fn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xe.fromBufferAttribute(o,c),l&&(Cs.fromBufferAttribute(t,c),Xe.add(Cs)),s=Math.max(s,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new an(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new F,l[_]=new F;let c=new F,h=new F,d=new F,u=new mt,f=new mt,g=new mt,E=new F,m=new F;function p(_,x,U){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,x),d.fromBufferAttribute(n,U),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,x),g.fromBufferAttribute(r,U),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let z=1/(f.x*g.y-g.x*f.y);isFinite(z)&&(E.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(z),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(z),o[_].add(E),o[x].add(E),o[U].add(E),l[_].add(m),l[x].add(m),l[U].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let _=0,x=T.length;_<x;++_){let U=T[_],z=U.start,q=U.count;for(let J=z,H=z+q;J<H;J+=3)p(t.getX(J+0),t.getX(J+1),t.getX(J+2))}let R=new F,y=new F,A=new F,w=new F;function N(_){A.fromBufferAttribute(s,_),w.copy(A);let x=o[_];R.copy(x),R.sub(A.multiplyScalar(A.dot(x))).normalize(),y.crossVectors(w,x);let z=y.dot(l[_])<0?-1:1;a.setXYZW(_,R.x,R.y,R.z,z)}for(let _=0,x=T.length;_<x;++_){let U=T[_],z=U.start,q=U.count;for(let J=z,H=z+q;J<H;J+=3)N(t.getX(J+0)),N(t.getX(J+1)),N(t.getX(J+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),E=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,E),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let E=0,m=l.length;E<m;E++){o.isInterleavedBufferAttribute?f=l[E]*o.data.stride+o.offset:f=l[E]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new an(u,h,d)}if(this.index===null)return Yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ih,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},rn=new F,Js=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Nn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){zr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new an(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){zr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},_c=new F,Tp=new F,wp=new $t,pn=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=_c.subVectors(n,e).cross(Tp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(_c),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||wp.getNormalMatrix(t),s=this.coplanarPoint(_c).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ap=0,Bn=class extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=ar,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hc,this.blendDst=Vc,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ld,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oo,this.stencilZFail=oo,this.stencilZPass=oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Yt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Yt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new pn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new mt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},$s=class extends Bn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ps,Rr=new F,Is=new F,Ls=new F,Ds=new mt,Cr=new mt,yd=new Ee,Ga=new F,Pr=new F,Wa=new F,gu=new mt,xc=new mt,_u=new mt,Xr=class extends Je{constructor(t=new $s){if(super(),this.isSprite=!0,this.type="Sprite",Ps===void 0){Ps=new Ce;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wr(e,5);Ps.setIndex([0,1,2,0,2,3]),Ps.setAttribute("position",new Js(n,3,0,!1)),Ps.setAttribute("uv",new Js(n,2,3,!1))}this.geometry=Ps,this.material=t,this.center=new mt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Is.setFromMatrixScale(this.matrixWorld),yd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Is.multiplyScalar(-Ls.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Xa(Ga.set(-.5,-.5,0),Ls,a,Is,s,r),Xa(Pr.set(.5,-.5,0),Ls,a,Is,s,r),Xa(Wa.set(.5,.5,0),Ls,a,Is,s,r),gu.set(0,0),xc.set(1,0),_u.set(1,1);let o=t.ray.intersectTriangle(Ga,Pr,Wa,!1,Rr);if(o===null&&(Xa(Pr.set(-.5,.5,0),Ls,a,Is,s,r),xc.set(0,1),o=t.ray.intersectTriangle(Ga,Wa,Pr,!1,Rr),o===null))return;let l=t.ray.origin.distanceTo(Rr);l<t.near||l>t.far||e.push({distance:l,point:Rr.clone(),uv:ui.getInterpolation(Rr,Ga,Pr,Wa,gu,xc,_u,new mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Xa(i,t,e,n,s,r){Ds.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Cr.x=r*Ds.x-s*Ds.y,Cr.y=s*Ds.x+r*Ds.y):Cr.copy(Ds),i.copy(t),i.x+=Cr.x,i.y+=Cr.y,i.applyMatrix4(yd)}var hi=new F,vc=new F,qa=new F,Ya=new F,Yi=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){vc.copy(t).add(e).multiplyScalar(.5),qa.copy(e).sub(t).normalize(),Ya.copy(this.origin).sub(vc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(qa),o=Ya.dot(this.direction),l=-Ya.dot(qa),c=Ya.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let E=1/h;d*=E,u*=E,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(vc).addScaledVector(qa,u),f}intersectSphere(t,e){if(t.radius<0)return null;hi.subVectors(t.center,this.origin);let n=hi.dot(this.direction),s=hi.dot(hi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,E=e.y-a.y,m=e.z-a.z,p=n.x-a.x,T=n.y-a.y,R=n.z-a.z,y=Math.abs(l),A=Math.abs(c),w=Math.abs(h),N,_,x,U,z,q,J,H,V,st,I,W;if(y>=A&&y>=w?(x=l,q=d,V=g,W=p,l>=0?(N=c,_=h,U=u,z=f,J=E,H=m,st=T,I=R):(N=h,_=c,U=f,z=u,J=m,H=E,st=R,I=T)):A>=w?(x=c,q=u,V=E,W=T,c>=0?(N=h,_=l,U=f,z=d,J=m,H=g,st=R,I=p):(N=l,_=h,U=d,z=f,J=g,H=m,st=p,I=R)):(x=h,q=f,V=m,W=R,h>=0?(N=l,_=c,U=d,z=u,J=g,H=E,st=p,I=T):(N=c,_=l,U=u,z=d,J=E,H=g,st=T,I=p)),x===0)return null;let B=N/x,Y=_/x,j=1/x,pt=U-B*q,ht=z-Y*q,rt=J-B*V,Mt=H-Y*V,Tt=st-B*W,X=I-Y*W,it=Tt*Mt-X*rt,_t=pt*X-ht*Tt,Bt=rt*ht-Mt*pt;if(s){if(it<0||_t<0||Bt<0)return null}else if((it<0||_t<0||Bt<0)&&(it>0||_t>0||Bt>0))return null;let Rt=it+_t+Bt;if(Rt===0)return null;let Gt=j*(it*q+_t*V+Bt*W);return(Rt>0?Gt<0:Gt>0)?null:this.at(Gt/Rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tn=class extends Bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},xu=new Ee,Gi=new Yi,Za=new Zs,vu=new F,Ja=new F,$a=new F,Ka=new F,yc=new F,ja=new F,yu=new F,Qa=new F,le=class extends Je{constructor(t=new Ce,e=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ja.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(yc.fromBufferAttribute(d,t),a?ja.addScaledVector(yc,h):ja.addScaledVector(yc.sub(e),h))}e.add(ja)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(r),Gi.copy(t.ray).recast(t.near),!(Za.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Za,vu)===null||Gi.origin.distanceToSquared(vu)>(t.far-t.near)**2))&&(xu.copy(r).invert(),Gi.copy(t.ray).applyMatrix4(xu),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,E=u.length;g<E;g++){let m=u[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),R=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,A=R;y<A;y+=3){let w=o.getX(y),N=o.getX(y+1),_=o.getX(y+2);s=to(this,p,t,n,c,h,d,w,N,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(o.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let T=o.getX(m),R=o.getX(m+1),y=o.getX(m+2);s=to(this,a,t,n,c,h,d,T,R,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,E=u.length;g<E;g++){let m=u[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),R=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,A=R;y<A;y+=3){let w=y,N=y+1,_=y+2;s=to(this,p,t,n,c,h,d,w,N,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(l.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let T=m,R=m+1,y=m+2;s=to(this,a,t,n,c,h,d,T,R,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Rp(i,t,e,n,s,r,a,o){let l;if(t.side===on?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ii,o),l===null)return null;Qa.copy(o),Qa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Qa);return c<e.near||c>e.far?null:{distance:c,point:Qa.clone(),object:i}}function to(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ja),i.getVertexPosition(l,$a),i.getVertexPosition(c,Ka);let h=Rp(i,t,e,n,Ja,$a,Ka,yu);if(h){let d=new F;ui.getBarycoord(yu,Ja,$a,Ka,d),s&&(h.uv=ui.getInterpolatedAttribute(s,o,l,c,d,new mt)),r&&(h.uv1=ui.getInterpolatedAttribute(r,o,l,c,d,new mt)),a&&(h.normal=ui.getInterpolatedAttribute(a,o,l,c,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new F,materialIndex:0};ui.getNormal(Ja,$a,Ka,u.normal),h.face=u,h.barycoord=d}return h}var So=class extends tn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ye,h=Ye,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wi=new Zs,Cp=new mt(.5,.5),eo=new F,Ks=class{constructor(t=new pn,e=new pn,n=new pn,s=new pn,r=new pn,a=new pn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],E=r[9],m=r[10],p=r[11],T=r[12],R=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-a,f-h,p-g,A-T).normalize(),s[1].setComponents(c+a,f+h,p+g,A+T).normalize(),s[2].setComponents(c+o,f+d,p+E,A+R).normalize(),s[3].setComponents(c-o,f-d,p-E,A-R).normalize(),n)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,f-u,p-m,A-y).normalize();else if(s[4].setComponents(c-l,f-u,p-m,A-y).normalize(),e===Un)s[5].setComponents(c+l,f+u,p+m,A+y).normalize();else if(e===Hs)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){Wi.center.set(0,0,0);let e=Cp.distanceTo(t.center);return Wi.radius=.7071067811865476+e,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(eo.x=s.normal.x>0?t.max.x:t.min.x,eo.y=s.normal.y>0?t.max.y:t.min.y,eo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(eo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qr=class extends tn{constructor(t=[],e=Li,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Zi=class extends tn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Si=class extends tn{constructor(t,e,n=Hn,s,r,a,o=Ye,l=Ye,c,h=jn,d=1){if(h!==jn&&h!==Ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Xs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},bo=class extends Si{constructor(t,e=Hn,n=Li,s,r,a=Ye,o=Ye,l,c=jn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Yr=class extends tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Le=class i extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2));function g(E,m,p,T,R,y,A,w,N,_,x){let U=y/N,z=A/_,q=y/2,J=A/2,H=w/2,V=N+1,st=_+1,I=0,W=0,B=new F;for(let Y=0;Y<st;Y++){let j=Y*z-J;for(let pt=0;pt<V;pt++){let ht=pt*U-q;B[E]=ht*T,B[m]=j*R,B[p]=H,c.push(B.x,B.y,B.z),B[E]=0,B[m]=0,B[p]=w>0?1:-1,h.push(B.x,B.y,B.z),d.push(pt/N),d.push(1-Y/_),I+=1}}for(let Y=0;Y<_;Y++)for(let j=0;j<N;j++){let pt=u+j+V*Y,ht=u+j+V*(Y+1),rt=u+(j+1)+V*(Y+1),Mt=u+(j+1)+V*Y;l.push(pt,ht,Mt),l.push(ht,rt,Mt),W+=6}o.addGroup(f,W,x),f+=W,u+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Zr=class i extends Ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new F,h=new mt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(o,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},wn=class i extends Ce{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,E=[],m=n/2,p=0;T(),a===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(f,2));function T(){let y=new F,A=new F,w=0,N=(e-t)/n;for(let _=0;_<=r;_++){let x=[],U=_/r,z=U*(e-t)+t;for(let q=0;q<=s;q++){let J=q/s,H=J*l+o,V=Math.sin(H),st=Math.cos(H);A.x=z*V,A.y=-U*n+m,A.z=z*st,d.push(A.x,A.y,A.z),y.set(V,N,st).normalize(),u.push(y.x,y.y,y.z),f.push(J,1-U),x.push(g++)}E.push(x)}for(let _=0;_<s;_++)for(let x=0;x<r;x++){let U=E[x][_],z=E[x+1][_],q=E[x+1][_+1],J=E[x][_+1];(t>0||x!==0)&&(h.push(U,z,J),w+=3),(e>0||x!==r-1)&&(h.push(z,q,J),w+=3)}c.addGroup(p,w,0),p+=w}function R(y){let A=g,w=new mt,N=new F,_=0,x=y===!0?t:e,U=y===!0?1:-1;for(let q=1;q<=s;q++)d.push(0,m*U,0),u.push(0,U,0),f.push(.5,.5),g++;let z=g;for(let q=0;q<=s;q++){let H=q/s*l+o,V=Math.cos(H),st=Math.sin(H);N.x=x*st,N.y=m*U,N.z=x*V,d.push(N.x,N.y,N.z),u.push(0,U,0),w.x=V*.5+.5,w.y=st*.5*U+.5,f.push(w.x,w.y),g++}for(let q=0;q<s;q++){let J=A+q,H=z+q;y===!0?h.push(H,H+1,J):h.push(H+1,H,J),_+=3}c.addGroup(p,_,y===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},bi=class i extends wn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Eo=class i extends Ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(T){let R=new F,y=new F,A=new F;for(let w=0;w<e.length;w+=3)f(e[w+0],R),f(e[w+1],y),f(e[w+2],A),l(R,y,A,T)}function l(T,R,y,A){let w=A+1,N=[];for(let _=0;_<=w;_++){N[_]=[];let x=T.clone().lerp(y,_/w),U=R.clone().lerp(y,_/w),z=w-_;for(let q=0;q<=z;q++)q===0&&_===w?N[_][q]=x:N[_][q]=x.clone().lerp(U,q/z)}for(let _=0;_<w;_++)for(let x=0;x<2*(w-_)-1;x++){let U=Math.floor(x/2);x%2===0?(u(N[_][U+1]),u(N[_+1][U]),u(N[_][U])):(u(N[_][U+1]),u(N[_+1][U+1]),u(N[_+1][U]))}}function c(T){let R=new F;for(let y=0;y<r.length;y+=3)R.x=r[y+0],R.y=r[y+1],R.z=r[y+2],R.normalize().multiplyScalar(T),r[y+0]=R.x,r[y+1]=R.y,r[y+2]=R.z}function h(){let T=new F;for(let R=0;R<r.length;R+=3){T.x=r[R+0],T.y=r[R+1],T.z=r[R+2];let y=m(T)/2/Math.PI+.5,A=p(T)/Math.PI+.5;a.push(y,1-A)}g(),d()}function d(){for(let T=0;T<a.length;T+=6){let R=a[T+0],y=a[T+2],A=a[T+4],w=Math.max(R,y,A),N=Math.min(R,y,A);w>.9&&N<.1&&(R<.2&&(a[T+0]+=1),y<.2&&(a[T+2]+=1),A<.2&&(a[T+4]+=1))}}function u(T){r.push(T.x,T.y,T.z)}function f(T,R){let y=T*3;R.x=t[y+0],R.y=t[y+1],R.z=t[y+2]}function g(){let T=new F,R=new F,y=new F,A=new F,w=new mt,N=new mt,_=new mt;for(let x=0,U=0;x<r.length;x+=9,U+=6){T.set(r[x+0],r[x+1],r[x+2]),R.set(r[x+3],r[x+4],r[x+5]),y.set(r[x+6],r[x+7],r[x+8]),w.set(a[U+0],a[U+1]),N.set(a[U+2],a[U+3]),_.set(a[U+4],a[U+5]),A.copy(T).add(R).add(y).divideScalar(3);let z=m(A);E(w,U+0,T,z),E(N,U+2,R,z),E(_,U+4,y,z)}}function E(T,R,y,A){A<0&&T.x===1&&(a[R]=T.x-1),y.x===0&&y.z===0&&(a[R]=A/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function p(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var _n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Yt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new mt:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new F,s=[],r=[],a=[],o=new F,l=new Ee;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(te(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(te(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},js=class extends _n{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new mt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},To=class extends js{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ah(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Mu=new F,Su=new F,Mc=new ah,Sc=new ah,bc=new ah,wo=class extends _n{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Su.subVectors(s[0],s[1]).add(s[0]),c=Su);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Mu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Mu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),E=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);E<1e-4&&(E=1),g<1e-4&&(g=E),m<1e-4&&(m=E),Mc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,E,m),Sc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,E,m),bc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,E,m)}else this.curveType==="catmullrom"&&(Mc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Sc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),bc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Mc.calc(l),Sc.calc(l),bc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function bu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Pp(i,t){let e=1-i;return e*e*t}function Ip(i,t){return 2*(1-i)*i*t}function Lp(i,t){return i*i*t}function Nr(i,t,e,n){return Pp(i,t)+Ip(i,e)+Lp(i,n)}function Dp(i,t){let e=1-i;return e*e*e*t}function Np(i,t){let e=1-i;return 3*e*e*i*t}function Up(i,t){return 3*(1-i)*i*i*t}function Fp(i,t){return i*i*i*t}function Ur(i,t,e,n,s){return Dp(i,t)+Np(i,e)+Up(i,n)+Fp(i,s)}var Jr=class extends _n{constructor(t=new mt,e=new mt,n=new mt,s=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new mt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ur(t,s.x,r.x,a.x,o.x),Ur(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ao=class extends _n{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ur(t,s.x,r.x,a.x,o.x),Ur(t,s.y,r.y,a.y,o.y),Ur(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$r=class extends _n{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ro=class extends _n{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kr=class extends _n{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Nr(t,s.x,r.x,a.x),Nr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Co=class extends _n{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Nr(t,s.x,r.x,a.x),Nr(t,s.y,r.y,a.y),Nr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jr=class extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(bu(o,l.x,c.x,h.x,d.x),bu(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new mt().fromArray(s))}return this}},Pc=Object.freeze({__proto__:null,ArcCurve:To,CatmullRomCurve3:wo,CubicBezierCurve:Jr,CubicBezierCurve3:Ao,EllipseCurve:js,LineCurve:$r,LineCurve3:Ro,QuadraticBezierCurve:Kr,QuadraticBezierCurve3:Co,SplineCurve:jr}),Po=class extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Pc[s.type]().fromJSON(s))}return this}},Ji=class extends Po{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new $r(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Kr(this.currentPoint.clone(),new mt(t,e),new mt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Jr(this.currentPoint.clone(),new mt(t,e),new mt(n,s),new mt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new jr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new js(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},zn=class extends Ji{constructor(t){super(t),this.uuid=Kn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ji().fromJSON(s))}return this}};function Op(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Md(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Vp(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=i[u],g=i[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Qr(r,a,e,o,l,c,0),a}function Md(i,t,e,n,s){let r;if(s===Qp(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Eu(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Eu(a/n|0,i[a],i[a+1],r);return r&&Qs(r,r.next)&&(ea(r),r=r.next),r}function $i(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Qs(e,e.next)||Pe(e.prev,e,e.next)===0)){if(ea(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Qr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Yp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?zp(i,n,s,r):Bp(i)){t.push(l.i,i.i,c.i),ea(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=kp($i(i),t),Qr(i,t,e,n,s,r,2)):a===2&&Hp(i,t,e,n,s,r):Qr($i(i),t,e,n,s,r,1);break}}}function Bp(i){let t=i.prev,e=i,n=i.next;if(Pe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Ir(s,o,r,l,a,c,g.x,g.y)&&Pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function zp(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Pe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),E=Math.max(o,l,c),m=Math.max(h,d,u),p=Ic(f,g,t,e,n),T=Ic(E,m,t,e,n),R=i.prevZ,y=i.nextZ;for(;R&&R.z>=p&&y&&y.z<=T;){if(R.x>=f&&R.x<=E&&R.y>=g&&R.y<=m&&R!==s&&R!==a&&Ir(o,h,l,d,c,u,R.x,R.y)&&Pe(R.prev,R,R.next)>=0||(R=R.prevZ,y.x>=f&&y.x<=E&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Ir(o,h,l,d,c,u,y.x,y.y)&&Pe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;R&&R.z>=p;){if(R.x>=f&&R.x<=E&&R.y>=g&&R.y<=m&&R!==s&&R!==a&&Ir(o,h,l,d,c,u,R.x,R.y)&&Pe(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;y&&y.z<=T;){if(y.x>=f&&y.x<=E&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Ir(o,h,l,d,c,u,y.x,y.y)&&Pe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function kp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Qs(n,s)&&bd(n,e,e.next,s)&&ta(n,s)&&ta(s,n)&&(t.push(n.i,e.i,s.i),ea(e),ea(e.next),e=i=s),e=e.next}while(e!==i);return $i(e)}function Hp(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&$p(a,o)){let l=Ed(a,o);a=$i(a,a.next),l=$i(l,l.next),Qr(a,t,e,n,s,r,0),Qr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Vp(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Md(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Jp(c))}s.sort(Gp);for(let r=0;r<s.length;r++)e=Wp(s[r],e);return e}function Gp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Wp(i,t){let e=Xp(i,t);if(!e)return t;let n=Ed(e,i);return $i(n,n.next),$i(e,e.next)}function Xp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Qs(i,e))return e;do{if(Qs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Sd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);ta(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&qp(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function qp(i,t){return Pe(i.prev,i,t.prev)<0&&Pe(t.next,i,i.next)<0}function Yp(i,t,e,n){let s=i;do s.z===0&&(s.z=Ic(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Zp(s)}function Zp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Ic(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Jp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Sd(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ir(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Sd(i,t,e,n,s,r,a,o)}function $p(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Kp(i,t)&&(ta(i,t)&&ta(t,i)&&jp(i,t)&&(Pe(i.prev,i,t.prev)||Pe(i,t.prev,t))||Qs(i,t)&&Pe(i.prev,i,i.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Qs(i,t){return i.x===t.x&&i.y===t.y}function bd(i,t,e,n){let s=io(Pe(i,t,e)),r=io(Pe(i,t,n)),a=io(Pe(e,n,i)),o=io(Pe(e,n,t));return!!(s!==r&&a!==o||s===0&&no(i,e,t)||r===0&&no(i,n,t)||a===0&&no(e,i,n)||o===0&&no(e,t,n))}function no(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function io(i){return i>0?1:i<0?-1:0}function Kp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&bd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ta(i,t){return Pe(i.prev,i,i.next)<0?Pe(i,t,i.next)>=0&&Pe(i,i.prev,t)>=0:Pe(i,t,i.prev)<0||Pe(i,i.next,t)<0}function jp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ed(i,t){let e=Lc(i.i,i.x,i.y),n=Lc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Eu(i,t,e,n){let s=Lc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ea(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Lc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qp(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Dc=class{static triangulate(t,e,n=2){return Op(t,e,n)}},$n=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Tu(t),wu(n,t);let a=t.length;e.forEach(Tu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,wu(n,e[l]);let o=Dc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Tu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ki=class i extends Ce{constructor(t=new zn([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ae(s,3)),this.setAttribute("uv",new ae(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,E=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:tm,R,y=!1,A,w,N,_;if(p){R=p.getSpacedPoints(h),y=!0,u=!1;let lt=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(h,lt),w=new F,N=new F,_=new F}u||(m=0,f=0,g=0,E=0);let x=o.extractPoints(c),U=x.shape,z=x.holes;if(!$n.isClockWise(U)){U=U.reverse();for(let lt=0,ct=z.length;lt<ct;lt++){let gt=z[lt];$n.isClockWise(gt)&&(z[lt]=gt.reverse())}}function J(lt){let gt=10000000000000001e-36,yt=lt[0];for(let St=1;St<=lt.length;St++){let Wt=St%lt.length,Ut=lt[Wt],zt=Ut.x-yt.x,Xt=Ut.y-yt.y,k=zt*zt+Xt*Xt,ce=Math.max(Math.abs(Ut.x),Math.abs(Ut.y),Math.abs(yt.x),Math.abs(yt.y)),jt=gt*ce*ce;if(k<=jt){lt.splice(Wt,1),St--;continue}yt=Ut}}J(U),z.forEach(J);let H=z.length,V=U;for(let lt=0;lt<H;lt++){let ct=z[lt];U=U.concat(ct)}function st(lt,ct,gt){return ct||qt("ExtrudeGeometry: vec does not exist"),lt.clone().addScaledVector(ct,gt)}let I=U.length;function W(lt,ct,gt){let yt,St,Wt,Ut=lt.x-ct.x,zt=lt.y-ct.y,Xt=gt.x-lt.x,k=gt.y-lt.y,ce=Ut*Ut+zt*zt,jt=Ut*k-zt*Xt;if(Math.abs(jt)>Number.EPSILON){let C=Math.sqrt(ce),v=Math.sqrt(Xt*Xt+k*k),O=ct.x-zt/C,$=ct.y+Ut/C,at=gt.x-k/v,vt=gt.y+Xt/v,xt=((at-O)*k-(vt-$)*Xt)/(Ut*k-zt*Xt);yt=O+Ut*xt-lt.x,St=$+zt*xt-lt.y;let ot=yt*yt+St*St;if(ot<=2)return new mt(yt,St);Wt=Math.sqrt(ot/2)}else{let C=!1;Ut>Number.EPSILON?Xt>Number.EPSILON&&(C=!0):Ut<-Number.EPSILON?Xt<-Number.EPSILON&&(C=!0):Math.sign(zt)===Math.sign(k)&&(C=!0),C?(yt=-zt,St=Ut,Wt=Math.sqrt(ce)):(yt=Ut,St=zt,Wt=Math.sqrt(ce/2))}return new mt(yt/Wt,St/Wt)}let B=[];for(let lt=0,ct=V.length,gt=ct-1,yt=lt+1;lt<ct;lt++,gt++,yt++)gt===ct&&(gt=0),yt===ct&&(yt=0),B[lt]=W(V[lt],V[gt],V[yt]);let Y=[],j,pt=B.concat();for(let lt=0,ct=H;lt<ct;lt++){let gt=z[lt];j=[];for(let yt=0,St=gt.length,Wt=St-1,Ut=yt+1;yt<St;yt++,Wt++,Ut++)Wt===St&&(Wt=0),Ut===St&&(Ut=0),j[yt]=W(gt[yt],gt[Wt],gt[Ut]);Y.push(j),pt=pt.concat(j)}let ht;if(m===0)ht=$n.triangulateShape(V,z);else{let lt=[],ct=[];for(let gt=0;gt<m;gt++){let yt=gt/m,St=f*Math.cos(yt*Math.PI/2),Wt=g*Math.sin(yt*Math.PI/2)+E;for(let Ut=0,zt=V.length;Ut<zt;Ut++){let Xt=st(V[Ut],B[Ut],Wt);_t(Xt.x,Xt.y,-St),yt===0&&lt.push(Xt)}for(let Ut=0,zt=H;Ut<zt;Ut++){let Xt=z[Ut];j=Y[Ut];let k=[];for(let ce=0,jt=Xt.length;ce<jt;ce++){let C=st(Xt[ce],j[ce],Wt);_t(C.x,C.y,-St),yt===0&&k.push(C)}yt===0&&ct.push(k)}}ht=$n.triangulateShape(lt,ct)}let rt=ht.length,Mt=g+E;for(let lt=0;lt<I;lt++){let ct=u?st(U[lt],pt[lt],Mt):U[lt];y?(N.copy(A.normals[0]).multiplyScalar(ct.x),w.copy(A.binormals[0]).multiplyScalar(ct.y),_.copy(R[0]).add(N).add(w),_t(_.x,_.y,_.z)):_t(ct.x,ct.y,0)}for(let lt=1;lt<=h;lt++)for(let ct=0;ct<I;ct++){let gt=u?st(U[ct],pt[ct],Mt):U[ct];y?(N.copy(A.normals[lt]).multiplyScalar(gt.x),w.copy(A.binormals[lt]).multiplyScalar(gt.y),_.copy(R[lt]).add(N).add(w),_t(_.x,_.y,_.z)):_t(gt.x,gt.y,d/h*lt)}for(let lt=m-1;lt>=0;lt--){let ct=lt/m,gt=f*Math.cos(ct*Math.PI/2),yt=g*Math.sin(ct*Math.PI/2)+E;for(let St=0,Wt=V.length;St<Wt;St++){let Ut=st(V[St],B[St],yt);_t(Ut.x,Ut.y,d+gt)}for(let St=0,Wt=z.length;St<Wt;St++){let Ut=z[St];j=Y[St];for(let zt=0,Xt=Ut.length;zt<Xt;zt++){let k=st(Ut[zt],j[zt],yt);y?_t(k.x,k.y+R[h-1].y,R[h-1].x+gt):_t(k.x,k.y,d+gt)}}}Tt(),X();function Tt(){let lt=s.length/3;if(u){let ct=0,gt=I*ct;for(let yt=0;yt<rt;yt++){let St=ht[yt];Bt(St[2]+gt,St[1]+gt,St[0]+gt)}ct=h+m*2,gt=I*ct;for(let yt=0;yt<rt;yt++){let St=ht[yt];Bt(St[0]+gt,St[1]+gt,St[2]+gt)}}else{for(let ct=0;ct<rt;ct++){let gt=ht[ct];Bt(gt[2],gt[1],gt[0])}for(let ct=0;ct<rt;ct++){let gt=ht[ct];Bt(gt[0]+I*h,gt[1]+I*h,gt[2]+I*h)}}n.addGroup(lt,s.length/3-lt,0)}function X(){let lt=s.length/3,ct=0;it(V,ct),ct+=V.length;for(let gt=0,yt=z.length;gt<yt;gt++){let St=z[gt];it(St,ct),ct+=St.length}n.addGroup(lt,s.length/3-lt,1)}function it(lt,ct){let gt=lt.length;for(;--gt>=0;){let yt=gt,St=gt-1;St<0&&(St=lt.length-1);for(let Wt=0,Ut=h+m*2;Wt<Ut;Wt++){let zt=I*Wt,Xt=I*(Wt+1),k=ct+yt+zt,ce=ct+St+zt,jt=ct+St+Xt,C=ct+yt+Xt;Rt(k,ce,jt,C)}}}function _t(lt,ct,gt){l.push(lt),l.push(ct),l.push(gt)}function Bt(lt,ct,gt){Gt(lt),Gt(ct),Gt(gt);let yt=s.length/3,St=T.generateTopUV(n,s,yt-3,yt-2,yt-1);se(St[0]),se(St[1]),se(St[2])}function Rt(lt,ct,gt,yt){Gt(lt),Gt(ct),Gt(yt),Gt(ct),Gt(gt),Gt(yt);let St=s.length/3,Wt=T.generateSideWallUV(n,s,St-6,St-3,St-2,St-1);se(Wt[0]),se(Wt[1]),se(Wt[3]),se(Wt[1]),se(Wt[2]),se(Wt[3])}function Gt(lt){s.push(l[lt*3+0]),s.push(l[lt*3+1]),s.push(l[lt*3+2])}function se(lt){r.push(lt.x),r.push(lt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return em(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Pc[s.type]().fromJSON(s)),new i(n,t.options)}},tm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new mt(r,a),new mt(o,l),new mt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],E=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new mt(a,1-l),new mt(c,1-d),new mt(u,1-g),new mt(E,1-p)]:[new mt(o,1-l),new mt(h,1-d),new mt(f,1-g),new mt(m,1-p)]}};function em(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ji=class i extends Eo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var An=class i extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],E=[],m=[];for(let p=0;p<h;p++){let T=p*u-a;for(let R=0;R<c;R++){let y=R*d-r;g.push(y,-T,0),E.push(0,0,1),m.push(R/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){let R=T+c*p,y=T+c*(p+1),A=T+1+c*(p+1),w=T+1+c*p;f.push(R,y,w),f.push(y,A,w)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(E,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Qi=class i extends Ce{constructor(t=new zn([new mt(0,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ae(s,3)),this.setAttribute("normal",new ae(r,3)),this.setAttribute("uv",new ae(a,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,g=u.holes;$n.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let T=g[m];$n.isClockWise(T)===!0&&(g[m]=T.reverse())}let E=$n.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let T=g[m];f=f.concat(T)}for(let m=0,p=f.length;m<p;m++){let T=f[m];s.push(T.x,T.y,0),r.push(0,0,1),a.push(T.x,T.y)}for(let m=0,p=E.length;m<p;m++){let T=E[m],R=T[0]+d,y=T[1]+d,A=T[2]+d;n.push(R,y,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return nm(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function nm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ei=class i extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new F,u=new F,f=[],g=[],E=[],m=[];for(let p=0;p<=n;p++){let T=[],R=p/n,y=a+R*o,A=t*Math.cos(y),w=Math.sqrt(t*t-A*A),N=0;p===0&&a===0?N=.5/e:p===n&&l===Math.PI&&(N=-.5/e);for(let _=0;_<=e;_++){let x=_/e,U=s+x*r;d.x=-w*Math.cos(U),d.y=A,d.z=w*Math.sin(U),g.push(d.x,d.y,d.z),u.copy(d).normalize(),E.push(u.x,u.y,u.z),m.push(x+N,1-R),T.push(c++)}h.push(T)}for(let p=0;p<n;p++)for(let T=0;T<e;T++){let R=h[p][T+1],y=h[p][T],A=h[p+1][T],w=h[p+1][T+1];(p!==0||a>0)&&f.push(R,y,w),(p!==n-1||l<Math.PI)&&f.push(y,A,w)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(E,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var na=class i extends Ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new F,f=new F,g=new F;for(let E=0;E<=n;E++){let m=a+E/n*o;for(let p=0;p<=s;p++){let T=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(T),f.y=(t+e*Math.cos(m))*Math.sin(T),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(T),u.y=t*Math.sin(T),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(E/n)}}for(let E=1;E<=n;E++)for(let m=1;m<=s;m++){let p=(s+1)*E+m-1,T=(s+1)*(E-1)+m-1,R=(s+1)*(E-1)+m,y=(s+1)*E+m;l.push(p,T,y),l.push(T,R,y)}this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function os(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Au(s))s.isRenderTargetTexture?(Yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Au(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function en(i){let t={};for(let e=0;e<i.length;e++){let n=os(i[e]);for(let s in n)t[s]=n[s]}return t}function Au(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function im(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function oh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var Td={clone:os,merge:en},sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends Bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sm,this.fragmentShader=rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=im(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Zt().setHex(s.value);break;case"v2":this.uniforms[n].value=new mt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Re().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ee().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Io=class extends xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ti=class extends Bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ts=class extends Bn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Zt(16777215),this.specular=new Zt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=ca,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ia=class extends Bn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cr,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=ca,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Lo=class extends Bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Do=class extends Bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ns(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ec(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var wi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},No=class extends wi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ac,endingEnd:Ac}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rc:r=t,o=2*e-n;break;case Cc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rc:a=t,l=2*n-e;break;case Cc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),E=g*g,m=E*g,p=-u*m+2*u*E-u*g,T=(1+u)*m+(-1.5-2*u)*E+(-.5+u)*g+1,R=(-1-f)*m+(1.5+f)*E+.5*g,y=f*m-f*E;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+T*a[c+A]+R*a[l+A]+y*a[d+A];return r}},Uo=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Fo=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Oo=class extends wi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),E=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*E+a[l+m]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let E=a[c+g],m=a[l+g],p=f*u+g*2,T=d[p],R=d[p+1],y=t*u+g*2,A=h[y],w=h[y+1],N=om(n,e,T,A,s);r[g]=wd(N,E,R,w,m)}return r}};function wd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function am(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function om(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=wd(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=am(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var vn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ns(e,this.TimeBufferType),this.values=Ns(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ns(t.times,Array),values:Ns(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ec(t.settings)&&(n.settings={inTangents:Ns(t.settings.inTangents,Array),outTangents:Ns(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Uo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new No(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Oo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Fr:e=this.InterpolantFactoryMethodDiscrete;break;case xo:e=this.InterpolantFactoryMethodLinear;break;case ao:e=this.InterpolantFactoryMethodSmooth;break;case wc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Yt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fr;case this.InterpolantFactoryMethodLinear:return xo;case this.InterpolantFactoryMethodSmooth:return ao;case this.InterpolantFactoryMethodBezier:return wc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ec(this.settings)&&(Ru(this.settings.inTangents,t),Ru(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){qt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){qt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Jf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){qt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ao,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let E=e[d+g];if(E!==e[u+g]||E!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ec(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ru(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=xo;var Ai=class extends vn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Fr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Bo=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}};Bo.prototype.ValueTypeName="color";var zo=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}};zo.prototype.ValueTypeName="number";var ko=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)gn.slerpFlat(r,0,a,c-o,a,c,l);return r}},sa=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ko(this.times,this.values,this.getValueSize(),t)}};sa.prototype.ValueTypeName="quaternion";sa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends vn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Fr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Ho=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}};Ho.prototype.ValueTypeName="vector";var lo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Cu(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Cu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Cu(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Vo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ad=new Vo,tr=class{constructor(t){this.manager=t!==void 0?t:Ad,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};tr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Us=new WeakMap,Go=class extends tr{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=lo.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Us.get(a);d===void 0&&(d=[],Us.set(a,d)),d.push({onLoad:e,onError:s})}return a}let o=Vs("img");function l(){h(),e&&e(this);let d=Us.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Us.delete(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),lo.remove(`image:${t}`);let u=Us.get(this)||[];for(let f=0;f<u.length;f++){let g=u[f];g.onError&&g.onError(d)}Us.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),lo.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var ra=class extends tr{constructor(t){super(t)}load(t,e,n,s){let r=new tn,a=new Go(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},er=class extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},es=class extends er{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Tc=new Ee,Pu=new F,Iu=new F,Wo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ks,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Pu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pu),Iu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Iu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Tc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Tc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Hs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Tc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},so=new F,ro=new gn,Jn=new F,aa=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(so,ro,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(so,ro,Jn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(so,ro,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(so,ro,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},yi=new F,Lu=new mt,Du=new mt,qe=class extends aa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,Lu,Du),e.subVectors(Du,Lu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var nr=class extends aa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Nc=class extends Wo{constructor(){super(new nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ns=class extends er{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new Nc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},oa=class extends er{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Fs=-90,Os=1,Xo=class extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qe(Fs,Os,t,e);s.layers=this.layers,this.add(s);let r=new qe(Fs,Os,t,e);r.layers=this.layers,this.add(r);let a=new qe(Fs,Os,t,e);a.layers=this.layers,this.add(a);let o=new qe(Fs,Os,t,e);o.layers=this.layers,this.add(o);let l=new qe(Fs,Os,t,e);l.layers=this.layers,this.add(l);let c=new qe(Fs,Os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=E,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},qo=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var lh="\\[\\]\\.:\\/",lm=new RegExp("["+lh+"]","g"),ch="[^"+lh+"]",cm="[^"+lh.replace("\\.","")+"]",hm=/((?:WC+[\/:])*)/.source.replace("WC",ch),um=/(WCOD+)?/.source.replace("WCOD",cm),dm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ch),fm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ch),pm=new RegExp("^"+hm+um+dm+fm+"$"),mm=["material","materials","bones","map"],Uc=class{constructor(t,e,n){let s=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lm,"")}static parseTrackName(t){let e=pm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);mm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Yt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=Uc;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kv=new Float32Array(1);var Nu=new Ee,ir=class{constructor(t,e,n=0,s=1/0){this.ray=new Yi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new qs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Nu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nu),this}intersectObject(t,e=!0,n=[]){return Fc(t,this,n,e),n.sort(Uu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Fc(t[s],this,n,e);return n.sort(Uu),n}};function Uu(i,t){return i.distance-t.distance}function Fc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Fc(r[a],t,e,!0)}}var sr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=te(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Oc=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var la=class extends Fn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function hh(i,t,e,n){let s=gm(n);switch(e){case th:return i*t;case nh:return i*t/s.components*s.byteLength;case Qo:return i*t/s.components*s.byteLength;case Ui:return i*t*2/s.components*s.byteLength;case tl:return i*t*2/s.components*s.byteLength;case eh:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case el:return i*t*4/s.components*s.byteLength;case fa:case pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case il:case rl:return Math.max(i,16)*Math.max(t,8)/4;case nl:case sl:return Math.max(i,8)*Math.max(t,8)/2;case al:case ol:case cl:case hl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ll:case _a:case ul:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case pl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ml:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case gl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case _l:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case xl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case vl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case yl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case bl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case El:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Tl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case wl:case Al:case Rl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Cl:case Pl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xa:case Il:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gm(i){switch(i){case hn:case $c:return{byteLength:1,components:1};case or:case Kc:case Gn:return{byteLength:2,components:1};case Ko:case jo:return{byteLength:2,components:4};case Hn:case $o:case Vn:return{byteLength:4,components:1};case jc:case Qc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Jd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Sm(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],E=d[f];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++u,d[u]=E)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let E=d[f];i.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Em=`#ifdef USE_ALPHAHASH
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
#endif`,Tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cm=`#ifdef USE_AOMAP
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
#endif`,Pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Im=`#ifdef USE_BATCHING
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
#endif`,Lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Um=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fm=`#ifdef USE_IRIDESCENCE
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
#endif`,Om=`#ifdef USE_BUMPMAP
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
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,qm=`#define PI 3.141592653589793
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
} // validated`,Ym=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zm=`vec3 transformedNormal = objectNormal;
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
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$m=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",tg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eg=`#ifdef USE_ENVMAP
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
#endif`,ng=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
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
#endif`,ag=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,og=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hg=`#ifdef USE_GRADIENTMAP
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
}`,ug=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yg=`PhysicalMaterial material;
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
#endif`,Mg=`uniform sampler2D dfgLUT;
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
}`,Sg=`
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
#endif`,bg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,wg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ig=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dg=`#if defined( USE_POINTS_UV )
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
#endif`,Ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Og=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zg=`#ifdef USE_MORPHTARGETS
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
#endif`,kg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qg=`#ifdef USE_NORMALMAP
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
#endif`,Yg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,l0=`float getShadowMask() {
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
}`,c0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h0=`#ifdef USE_SKINNING
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
#endif`,u0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d0=`#ifdef USE_SKINNING
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
#endif`,f0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_0=`#ifdef USE_TRANSMISSION
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
#endif`,x0=`#ifdef USE_TRANSMISSION
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
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,b0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E0=`uniform sampler2D t2D;
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`#include <common>
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
}`,P0=`#if DEPTH_PACKING == 3200
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
}`,I0=`#define DISTANCE
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
}`,L0=`#define DISTANCE
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
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`uniform float scale;
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
}`,F0=`uniform vec3 diffuse;
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
}`,O0=`#include <common>
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
}`,B0=`uniform vec3 diffuse;
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
}`,z0=`#define LAMBERT
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
}`,k0=`#define LAMBERT
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
}`,H0=`#define MATCAP
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
}`,V0=`#define MATCAP
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
}`,G0=`#define NORMAL
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
}`,W0=`#define NORMAL
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
}`,X0=`#define PHONG
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
}`,q0=`#define PHONG
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
}`,Y0=`#define STANDARD
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
}`,Z0=`#define STANDARD
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
}`,J0=`#define TOON
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
}`,$0=`#define TOON
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
}`,K0=`uniform float size;
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
}`,j0=`uniform vec3 diffuse;
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
}`,Q0=`#include <common>
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
}`,t_=`uniform vec3 color;
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
}`,e_=`uniform float rotation;
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
}`,n_=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:bm,alphahash_pars_fragment:Em,alphamap_fragment:Tm,alphamap_pars_fragment:wm,alphatest_fragment:Am,alphatest_pars_fragment:Rm,aomap_fragment:Cm,aomap_pars_fragment:Pm,batching_pars_vertex:Im,batching_vertex:Lm,begin_vertex:Dm,beginnormal_vertex:Nm,bsdfs:Um,iridescence_fragment:Fm,bumpmap_pars_fragment:Om,clipping_planes_fragment:Bm,clipping_planes_pars_fragment:zm,clipping_planes_pars_vertex:km,clipping_planes_vertex:Hm,color_fragment:Vm,color_pars_fragment:Gm,color_pars_vertex:Wm,color_vertex:Xm,common:qm,cube_uv_reflection_fragment:Ym,defaultnormal_vertex:Zm,displacementmap_pars_vertex:Jm,displacementmap_vertex:$m,emissivemap_fragment:Km,emissivemap_pars_fragment:jm,colorspace_fragment:Qm,colorspace_pars_fragment:tg,envmap_fragment:eg,envmap_common_pars_fragment:ng,envmap_pars_fragment:ig,envmap_pars_vertex:sg,envmap_physical_pars_fragment:mg,envmap_vertex:rg,fog_vertex:ag,fog_pars_vertex:og,fog_fragment:lg,fog_pars_fragment:cg,gradientmap_pars_fragment:hg,lightmap_pars_fragment:ug,lights_lambert_fragment:dg,lights_lambert_pars_fragment:fg,lights_pars_begin:pg,lights_toon_fragment:gg,lights_toon_pars_fragment:_g,lights_phong_fragment:xg,lights_phong_pars_fragment:vg,lights_physical_fragment:yg,lights_physical_pars_fragment:Mg,lights_fragment_begin:Sg,lights_fragment_maps:bg,lights_fragment_end:Eg,lightprobes_pars_fragment:Tg,logdepthbuf_fragment:wg,logdepthbuf_pars_fragment:Ag,logdepthbuf_pars_vertex:Rg,logdepthbuf_vertex:Cg,map_fragment:Pg,map_pars_fragment:Ig,map_particle_fragment:Lg,map_particle_pars_fragment:Dg,metalnessmap_fragment:Ng,metalnessmap_pars_fragment:Ug,morphinstance_vertex:Fg,morphcolor_vertex:Og,morphnormal_vertex:Bg,morphtarget_pars_vertex:zg,morphtarget_vertex:kg,normal_fragment_begin:Hg,normal_fragment_maps:Vg,normal_pars_fragment:Gg,normal_pars_vertex:Wg,normal_vertex:Xg,normalmap_pars_fragment:qg,clearcoat_normal_fragment_begin:Yg,clearcoat_normal_fragment_maps:Zg,clearcoat_pars_fragment:Jg,iridescence_pars_fragment:$g,opaque_fragment:Kg,packing:jg,premultiplied_alpha_fragment:Qg,project_vertex:t0,dithering_fragment:e0,dithering_pars_fragment:n0,roughnessmap_fragment:i0,roughnessmap_pars_fragment:s0,shadowmap_pars_fragment:r0,shadowmap_pars_vertex:a0,shadowmap_vertex:o0,shadowmask_pars_fragment:l0,skinbase_vertex:c0,skinning_pars_vertex:h0,skinning_vertex:u0,skinnormal_vertex:d0,specularmap_fragment:f0,specularmap_pars_fragment:p0,tonemapping_fragment:m0,tonemapping_pars_fragment:g0,transmission_fragment:_0,transmission_pars_fragment:x0,uv_pars_fragment:v0,uv_pars_vertex:y0,uv_vertex:M0,worldpos_vertex:S0,background_vert:b0,background_frag:E0,backgroundCube_vert:T0,backgroundCube_frag:w0,cube_vert:A0,cube_frag:R0,depth_vert:C0,depth_frag:P0,distance_vert:I0,distance_frag:L0,equirect_vert:D0,equirect_frag:N0,linedashed_vert:U0,linedashed_frag:F0,meshbasic_vert:O0,meshbasic_frag:B0,meshlambert_vert:z0,meshlambert_frag:k0,meshmatcap_vert:H0,meshmatcap_frag:V0,meshnormal_vert:G0,meshnormal_frag:W0,meshphong_vert:X0,meshphong_frag:q0,meshphysical_vert:Y0,meshphysical_frag:Z0,meshtoon_vert:J0,meshtoon_frag:$0,points_vert:K0,points_frag:j0,shadow_vert:Q0,shadow_frag:t_,sprite_vert:e_,sprite_frag:n_},At={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},ei={basic:{uniforms:en([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:en([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:en([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:en([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:en([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:en([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:en([At.points,At.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:en([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:en([At.common,At.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:en([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:en([At.sprite,At.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:en([At.common,At.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:en([At.lights,At.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};ei.physical={uniforms:en([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var Nl={r:0,b:0,g:0},i_=new Ee,$d=new $t;$d.set(-1,0,0,0,1,0,0,0,1);function s_(i,t,e,n,s,r){let a=new Zt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(T){let R=T.isScene===!0?T.background:null;if(R&&R.isTexture){let y=T.backgroundBlurriness>0;R=t.get(R,y)}return R}function g(T){let R=!1,y=f(T);y===null?m(a,o):y&&y.isColor&&(m(y,1),R=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(T,R){let y=f(R);y&&(y.isCubeTexture||y.mapping===ua)?(c===void 0&&(c=new le(new Le(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:os(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(i_.makeRotationFromEuler(R.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply($d),c.material.toneMapped=oe.getTransfer(y.colorSpace)!==me,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new le(new An(2,2),new xn({name:"BackgroundMaterial",uniforms:os(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=oe.getTransfer(y.colorSpace)!==me,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,R){T.getRGB(Nl,oh(i)),e.buffers.color.setClear(Nl.r,Nl.g,Nl.b,R,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,R=1){a.set(T),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:g,addToRenderList:E,dispose:p}}function r_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(z,q,J,H,V){let st=!1,I=d(z,H,J,q);r!==I&&(r=I,c(r.object)),st=f(z,H,J,V),st&&g(z,H,J,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(st||a)&&(a=!1,y(z,q,J,H),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(z){return i.bindVertexArray(z)}function h(z){return i.deleteVertexArray(z)}function d(z,q,J,H){let V=H.wireframe===!0,st=n[q.id];st===void 0&&(st={},n[q.id]=st);let I=z.isInstancedMesh===!0?z.id:0,W=st[I];W===void 0&&(W={},st[I]=W);let B=W[J.id];B===void 0&&(B={},W[J.id]=B);let Y=B[V];return Y===void 0&&(Y=u(l()),B[V]=Y),Y}function u(z){let q=[],J=[],H=[];for(let V=0;V<e;V++)q[V]=0,J[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:J,attributeDivisors:H,object:z,attributes:{},index:null}}function f(z,q,J,H){let V=r.attributes,st=q.attributes,I=0,W=J.getAttributes();for(let B in W)if(W[B].location>=0){let j=V[B],pt=st[B];if(pt===void 0&&(B==="instanceMatrix"&&z.instanceMatrix&&(pt=z.instanceMatrix),B==="instanceColor"&&z.instanceColor&&(pt=z.instanceColor)),j===void 0||j.attribute!==pt||pt&&j.data!==pt.data)return!0;I++}return r.attributesNum!==I||r.index!==H}function g(z,q,J,H){let V={},st=q.attributes,I=0,W=J.getAttributes();for(let B in W)if(W[B].location>=0){let j=st[B];j===void 0&&(B==="instanceMatrix"&&z.instanceMatrix&&(j=z.instanceMatrix),B==="instanceColor"&&z.instanceColor&&(j=z.instanceColor));let pt={};pt.attribute=j,j&&j.data&&(pt.data=j.data),V[B]=pt,I++}r.attributes=V,r.attributesNum=I,r.index=H}function E(){let z=r.newAttributes;for(let q=0,J=z.length;q<J;q++)z[q]=0}function m(z){p(z,0)}function p(z,q){let J=r.newAttributes,H=r.enabledAttributes,V=r.attributeDivisors;J[z]=1,H[z]===0&&(i.enableVertexAttribArray(z),H[z]=1),V[z]!==q&&(i.vertexAttribDivisor(z,q),V[z]=q)}function T(){let z=r.newAttributes,q=r.enabledAttributes;for(let J=0,H=q.length;J<H;J++)q[J]!==z[J]&&(i.disableVertexAttribArray(J),q[J]=0)}function R(z,q,J,H,V,st,I){I===!0?i.vertexAttribIPointer(z,q,J,V,st):i.vertexAttribPointer(z,q,J,H,V,st)}function y(z,q,J,H){E();let V=H.attributes,st=J.getAttributes(),I=q.defaultAttributeValues;for(let W in st){let B=st[W];if(B.location>=0){let Y=V[W];if(Y===void 0&&(W==="instanceMatrix"&&z.instanceMatrix&&(Y=z.instanceMatrix),W==="instanceColor"&&z.instanceColor&&(Y=z.instanceColor)),Y!==void 0){let j=Y.normalized,pt=Y.itemSize,ht=t.get(Y);if(ht===void 0)continue;let rt=ht.buffer,Mt=ht.type,Tt=ht.bytesPerElement,X=Mt===i.INT||Mt===i.UNSIGNED_INT||Y.gpuType===$o;if(Y.isInterleavedBufferAttribute){let it=Y.data,_t=it.stride,Bt=Y.offset;if(it.isInstancedInterleavedBuffer){for(let Rt=0;Rt<B.locationSize;Rt++)p(B.location+Rt,it.meshPerAttribute);z.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Rt=0;Rt<B.locationSize;Rt++)m(B.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let Rt=0;Rt<B.locationSize;Rt++)R(B.location+Rt,pt/B.locationSize,Mt,j,_t*Tt,(Bt+pt/B.locationSize*Rt)*Tt,X)}else{if(Y.isInstancedBufferAttribute){for(let it=0;it<B.locationSize;it++)p(B.location+it,Y.meshPerAttribute);z.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let it=0;it<B.locationSize;it++)m(B.location+it);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let it=0;it<B.locationSize;it++)R(B.location+it,pt/B.locationSize,Mt,j,pt*Tt,pt/B.locationSize*it*Tt,X)}}else if(I!==void 0){let j=I[W];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(B.location,j);break;case 3:i.vertexAttrib3fv(B.location,j);break;case 4:i.vertexAttrib4fv(B.location,j);break;default:i.vertexAttrib1fv(B.location,j)}}}}T()}function A(){x();for(let z in n){let q=n[z];for(let J in q){let H=q[J];for(let V in H){let st=H[V];for(let I in st)h(st[I].object),delete st[I];delete H[V]}}delete n[z]}}function w(z){if(n[z.id]===void 0)return;let q=n[z.id];for(let J in q){let H=q[J];for(let V in H){let st=H[V];for(let I in st)h(st[I].object),delete st[I];delete H[V]}}delete n[z.id]}function N(z){for(let q in n){let J=n[q];for(let H in J){let V=J[H];if(V[z.id]===void 0)continue;let st=V[z.id];for(let I in st)h(st[I].object),delete st[I];delete V[z.id]}}}function _(z){for(let q in n){let J=n[q],H=z.isInstancedMesh===!0?z.id:0,V=J[H];if(V!==void 0){for(let st in V){let I=V[st];for(let W in I)h(I[W].object),delete I[W];delete V[st]}delete J[H],Object.keys(J).length===0&&delete n[q]}}}function x(){U(),a=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:x,resetDefaultState:U,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:N,initAttributes:E,enableAttribute:m,disableUnusedAttributes:T}}function a_(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function o_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let N=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(N){return!(N!==Rn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){let _=N===Gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==hn&&N!==Vn&&!_&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Yt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:R,maxFragmentUniforms:y,maxSamples:A,samples:w}}function l_(i){let t=this,e=null,n=0,s=!1,r=!1,a=new pn,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,E=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let T=r?0:n,R=T*4,y=p.clippingState||null;l.value=y,y=h(g,u,R,f);for(let A=0;A!==R;++A)y[A]=e[A];p.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let E=d!==null?d.length:0,m=null;if(E!==0){if(m=l.value,g!==!0||m===null){let p=f+E*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,y=f;R!==E;++R,y+=4)a.copy(d[R]).applyMatrix4(T,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,m}}var ur=4,c_=6,h_=20,u_=256,va=new nr,Rd=new Zt,uh=null,dh=0,fh=0,ph=!1,d_=new F,ls=new F,Fl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=d_}=r;uh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(uh,dh,fh),this._renderer.xr.enabled=ph,t.scissorTest=!1,hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Gn,format:Rn,colorSpace:Or,depthBuffer:!1},s=Cd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=f_(r)),this._blurMaterial=m_(r,t,e),this._ggxMaterial=p_(r,t,e)}return s}_compileMaterial(t){let e=new le(new Ce,t);this._renderer.compile(e,va)}_sceneToCubeUV(t,e,n,s,r){let l=new qe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Rd),d.toneMapping=kn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new le(new Le,new Tn({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));let E=this._backgroundBox,m=E.material,p=!1,T=t.background;T?T.isColor&&(m.color.copy(T),t.background=null,p=!0):(m.color.copy(Rd),p=!0);for(let R=0;R<6;R++){let y=R%3;y===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):y===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));let A=this._cubeSize;hr(s,y*A,R>2?A:0,A,A),d.setRenderTarget(s),p&&d.render(E,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Li||t.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Id()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;hr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,va)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,E=this._sizeLods[n],m=3*E*(n>g-ur?n-g+ur:0),p=4*(this._cubeSize-E);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,hr(r,m,p,3*E,2*E),s.setRenderTarget(r),s.render(o,va),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,hr(t,m,p,3*E,2*E),s.setRenderTarget(t),s.render(o,va)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-ur?s-this._lodMax+ur:0),u=4*(this._cubeSize-h);hr(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,va)}};function f_(i){let t=[],e=[],n=i,s=i-ur+1+c_;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),E=new Float32Array(f*u*d);for(let p=0;p<d;p++){let T=p%3*2/3-1,R=p>2?0:-1,y=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];g.set(y,f*u*p);for(let A=0;A<u;A++){let w=h[A*2]*2-1,N=h[A*2+1]*2-1;p===0?ls.set(1,N,w):p===1?ls.set(-w,1,-N):p===2?ls.set(-w,N,1):p===3?ls.set(-1,N,-w):p===4?ls.set(-w,-1,N):ls.set(w,N,-1),ls.toArray(E,(p*u+A)*f)}}let m=new Ce;m.setAttribute("position",new an(g,f)),m.setAttribute("outputDirection",new an(E,f)),e.push(new le(m,null)),n>ur&&n--}return{lodMeshes:e,sizeLods:t}}function Cd(i,t,e){let n=new cn(i,t,e);return n.texture.mapping=ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function p_(i,t,e){return new xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:u_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zl(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function m_(i,t,e){return new xn({name:"SphericalGaussianBlur",defines:{SAMPLES:h_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:zl(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Pd(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Id(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function zl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ol=class extends cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new qr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Le(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Qn});r.uniforms.tEquirect.value=e;let a=new le(s,r),o=e.minFilter;return e.minFilter===Di&&(e.minFilter=Ze),new Xo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function g_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Yo||f===Zo)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let E=new Ol(g.height);return E.fromEquirectangularTexture(i,u),t.set(u,E),u.addEventListener("dispose",c),o(E.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===Yo||f===Zo,E=f===Li||f===as;if(g||E){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Fl(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let T=u.image;return g&&T&&T.height>0||E&&T&&l(T)?(n===null&&(n=new Fl(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Yo?u.mapping=Li:f===Zo&&(u.mapping=as),u}function l(u){let f=0,g=6;for(let E=0;E<g;E++)u[E]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function __(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Xi("WebGLRenderer: "+n+" extension not supported."),s}}}function x_(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,E=0;if(g===void 0)return;if(f!==null){let T=f.array;E=f.version;for(let R=0,y=T.length;R<y;R+=3){let A=T[R+0],w=T[R+1],N=T[R+2];u.push(A,w,w,N,N,A)}}else{let T=g.array;E=g.version;for(let R=0,y=T.length/3-1;R<y;R+=3){let A=R+0,w=R+1,N=R+2;u.push(A,w,w,N,N,A)}}let m=new(g.count>=65535?Gr:Vr)(u,1);m.version=E;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function v_(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let E=0;for(let m=0;m<f;m++)E+=u[m];e.update(E,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function y_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:qt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function M_(i,t,e){let n=new WeakMap,s=new Re;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let x=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",x)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],R=0;f===!0&&(R=1),g===!0&&(R=2),E===!0&&(R=3);let y=o.attributes.position.count*R,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*A*4*d),N=new kr(w,y,A,d);N.type=Vn,N.needsUpdate=!0;let _=R*4;for(let U=0;U<d;U++){let z=m[U],q=p[U],J=T[U],H=y*A*4*U;for(let V=0;V<z.count;V++){let st=V*_;f===!0&&(s.fromBufferAttribute(z,V),w[H+st+0]=s.x,w[H+st+1]=s.y,w[H+st+2]=s.z,w[H+st+3]=0),g===!0&&(s.fromBufferAttribute(q,V),w[H+st+4]=s.x,w[H+st+5]=s.y,w[H+st+6]=s.z,w[H+st+7]=0),E===!0&&(s.fromBufferAttribute(J,V),w[H+st+8]=s.x,w[H+st+9]=s.y,w[H+st+10]=s.z,w[H+st+11]=J.itemSize===4?s.w:1)}}u={count:d,texture:N,size:new mt(y,A)},n.set(o,u),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let E=0;E<c.length;E++)f+=c[E];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function S_(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var b_={[Gc]:"LINEAR_TONE_MAPPING",[Wc]:"REINHARD_TONE_MAPPING",[Xc]:"CINEON_TONE_MAPPING",[ha]:"ACES_FILMIC_TONE_MAPPING",[Yc]:"AGX_TONE_MAPPING",[Zc]:"NEUTRAL_TONE_MAPPING",[qc]:"CUSTOM_TONE_MAPPING"};function E_(i,t,e,n,s,r){let a=new cn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ce;c.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ae([0,2,0,0,2,0],2));let h=new Io({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new le(c,h),u=new nr(-1,1,1,-1,0,1),f=null,g=null,E=!1,m,p=null,T=[],R=!1;this.setSize=function(y,A){a.setSize(y,A),o!==null&&o.setSize(y,A),l!==null&&l.setSize(y,A);for(let w=0;w<T.length;w++){let N=T[w];N.setSize&&N.setSize(y,A)}},this.setEffects=function(y){T=y,R=T.length>0&&T[0].isRenderPass===!0;let A=a.width,w=a.height;T.length>0&&o===null&&(o=new cn(A,w,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),l=new cn(A,w,{type:Gn,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<T.length;N++){let _=T[N];_.setSize&&_.setSize(A,w)}},this.begin=function(y,A){if(E||y.toneMapping===kn&&T.length===0)return!1;if(p=A,A!==null){let w=A.width,N=A.height;(a.width!==w||a.height!==N)&&this.setSize(w,N)}return R===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=kn,!0},this.hasRenderPass=function(){return R},this.end=function(y,A){y.toneMapping=m,E=!0;let w=a,N=o;for(let _=0;_<T.length;_++){let x=T[_];x.enabled!==!1&&(x.render(y,N,w,A),x.needsSwap!==!1&&(w=N,N=N===o?l:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,h.defines={},oe.getTransfer(f)===me&&(h.defines.SRGB_TRANSFER="");let _=b_[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(p),y.render(d,u),p=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Kd=new tn,_h=new Si(1,1),jd=new kr,Qd=new Mo,tf=new qr,Ld=[],Dd=[],Nd=new Float32Array(16),Ud=new Float32Array(9),Fd=new Float32Array(4);function fr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ld[s];if(r===void 0&&(r=new Float32Array(s),Ld[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function kl(i,t){let e=Dd[t];e===void 0&&(e=new Int32Array(t),Dd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function T_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function w_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function A_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function R_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function C_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(ke(e,n))return;Fd.set(n),i.uniformMatrix2fv(this.addr,!1,Fd),He(e,n)}}function P_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(ke(e,n))return;Ud.set(n),i.uniformMatrix3fv(this.addr,!1,Ud),He(e,n)}}function I_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(ke(e,n))return;Nd.set(n),i.uniformMatrix4fv(this.addr,!1,Nd),He(e,n)}}function L_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function D_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function N_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function U_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function F_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function O_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function B_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function z_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function k_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_h.compareFunction=e.isReversedDepthBuffer()?Dl:Ll,r=_h):r=Kd,e.setTexture2D(t||r,s)}function H_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qd,s)}function V_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||tf,s)}function G_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||jd,s)}function W_(i){switch(i){case 5126:return T_;case 35664:return w_;case 35665:return A_;case 35666:return R_;case 35674:return C_;case 35675:return P_;case 35676:return I_;case 5124:case 35670:return L_;case 35667:case 35671:return D_;case 35668:case 35672:return N_;case 35669:case 35673:return U_;case 5125:return F_;case 36294:return O_;case 36295:return B_;case 36296:return z_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return H_;case 35680:case 36300:case 36308:case 36293:return V_;case 36289:case 36303:case 36311:case 36292:return G_}}function X_(i,t){i.uniform1fv(this.addr,t)}function q_(i,t){let e=fr(t,this.size,2);i.uniform2fv(this.addr,e)}function Y_(i,t){let e=fr(t,this.size,3);i.uniform3fv(this.addr,e)}function Z_(i,t){let e=fr(t,this.size,4);i.uniform4fv(this.addr,e)}function J_(i,t){let e=fr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $_(i,t){let e=fr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function K_(i,t){let e=fr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function j_(i,t){i.uniform1iv(this.addr,t)}function Q_(i,t){i.uniform2iv(this.addr,t)}function tx(i,t){i.uniform3iv(this.addr,t)}function ex(i,t){i.uniform4iv(this.addr,t)}function nx(i,t){i.uniform1uiv(this.addr,t)}function ix(i,t){i.uniform2uiv(this.addr,t)}function sx(i,t){i.uniform3uiv(this.addr,t)}function rx(i,t){i.uniform4uiv(this.addr,t)}function ax(i,t,e){let n=this.cache,s=t.length,r=kl(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),He(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=_h:a=Kd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function ox(i,t,e){let n=this.cache,s=t.length,r=kl(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Qd,r[a])}function lx(i,t,e){let n=this.cache,s=t.length,r=kl(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||tf,r[a])}function cx(i,t,e){let n=this.cache,s=t.length,r=kl(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||jd,r[a])}function hx(i){switch(i){case 5126:return X_;case 35664:return q_;case 35665:return Y_;case 35666:return Z_;case 35674:return J_;case 35675:return $_;case 35676:return K_;case 5124:case 35670:return j_;case 35667:case 35671:return Q_;case 35668:case 35672:return tx;case 35669:case 35673:return ex;case 5125:return nx;case 36294:return ix;case 36295:return sx;case 36296:return rx;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return ox;case 35680:case 36300:case 36308:case 36293:return lx;case 36289:case 36303:case 36311:case 36292:return cx}}var xh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=W_(e.type)}},vh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hx(e.type)}},yh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},mh=/(\w+)(\])?(\[|\.)?/g;function Od(i,t){i.seq.push(t),i.map[t.id]=t}function ux(i,t,e){let n=i.name,s=n.length;for(mh.lastIndex=0;;){let r=mh.exec(n),a=mh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Od(e,c===void 0?new xh(o,i,t):new vh(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new yh(o),Od(e,d)),e=d}}}var dr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);ux(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Bd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var dx=37297,fx=0;function px(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var zd=new $t;function mx(i){oe._getMatrix(zd,oe.workingColorSpace,i);let t=`mat3( ${zd.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case Br:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Yt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function kd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+px(i.getShaderSource(t),o)}else return r}function gx(i,t){let e=mx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var _x={[Gc]:"Linear",[Wc]:"Reinhard",[Xc]:"Cineon",[ha]:"ACESFilmic",[Yc]:"AgX",[Zc]:"Neutral",[qc]:"Custom"};function xx(i,t){let e=_x[t];return e===void 0?(Yt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ul=new F;function vx(){oe.getLuminanceCoefficients(Ul);let i=Ul.x.toFixed(4),t=Ul.y.toFixed(4),e=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function Mx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ma(i){return i!==""}function Hd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(i){return i.replace(bx,Tx)}var Ex=new Map;function Tx(i,t){let e=ee[t];if(e===void 0){let n=Ex.get(t);if(n!==void 0)e=ee[n],Yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Mh(e)}var wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gd(i){return i.replace(wx,Ax)}function Ax(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Rx={[is]:"SHADOWMAP_TYPE_PCF",[rr]:"SHADOWMAP_TYPE_VSM"};function Cx(i){return Rx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Px={[Li]:"ENVMAP_TYPE_CUBE",[as]:"ENVMAP_TYPE_CUBE",[ua]:"ENVMAP_TYPE_CUBE_UV"};function Ix(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Px[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Lx={[as]:"ENVMAP_MODE_REFRACTION"};function Dx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Lx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Nx={[ca]:"ENVMAP_BLENDING_MULTIPLY",[id]:"ENVMAP_BLENDING_MIX",[sd]:"ENVMAP_BLENDING_ADD"};function Ux(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Nx[i.combine]||"ENVMAP_BLENDING_NONE"}function Fx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ox(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Cx(e),c=Ix(e),h=Dx(e),d=Ux(e),u=Fx(e),f=yx(e),g=Mx(r),E=s.createProgram(),m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ma).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ma).join(`
`),p.length>0&&(p+=`
`)):(m=[Wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),p=[Wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?ee.tonemapping_pars_fragment:"",e.toneMapping!==kn?xx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,gx("linearToOutputTexel",e.outputColorSpace),vx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ma).join(`
`)),a=Mh(a),a=Hd(a,e),a=Vd(a,e),o=Mh(o),o=Hd(o,e),o=Vd(o,e),a=Gd(a),o=Gd(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=T+m+a,y=T+p+o,A=Bd(s,s.VERTEX_SHADER,R),w=Bd(s,s.FRAGMENT_SHADER,y);s.attachShader(E,A),s.attachShader(E,w),e.index0AttributeName!==void 0?s.bindAttribLocation(E,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function N(z){if(i.debug.checkShaderErrors){let q=s.getProgramInfoLog(E)||"",J=s.getShaderInfoLog(A)||"",H=s.getShaderInfoLog(w)||"",V=q.trim(),st=J.trim(),I=H.trim(),W=!0,B=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,A,w);else{let Y=kd(s,A,"vertex"),j=kd(s,w,"fragment");qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+V+`
`+Y+`
`+j)}else V!==""?Yt("WebGLProgram: Program Info Log:",V):(st===""||I==="")&&(B=!1);B&&(z.diagnostics={runnable:W,programLog:V,vertexShader:{log:st,prefix:m},fragmentShader:{log:I,prefix:p}})}s.deleteShader(A),s.deleteShader(w),_=new dr(s,E),x=Sx(s,E)}let _;this.getUniforms=function(){return _===void 0&&N(this),_};let x;this.getAttributes=function(){return x===void 0&&N(this),x};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(E,dx)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fx++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=A,this.fragmentShader=w,this}var Bx=0,Sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bh(t),e.set(t,n)),n}},bh=class{constructor(t){this.id=Bx++,this.code=t,this.usedTimes=0}};function zx(i){return i===Ui||i===_a||i===xa}function kx(i,t,e,n,s,r){let a=new qs,o=new Sh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function E(_,x,U,z,q,J){let H=z.fog,V=q.geometry,st=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?z.environment:null,I=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,W=t.get(_.envMap||st,I),B=W&&W.mapping===ua?W.image.height:null,Y=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Yt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let j=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,pt=j!==void 0?j.length:0,ht=0;V.morphAttributes.position!==void 0&&(ht=1),V.morphAttributes.normal!==void 0&&(ht=2),V.morphAttributes.color!==void 0&&(ht=3);let rt,Mt,Tt,X;if(Y){let Pt=ei[Y];rt=Pt.vertexShader,Mt=Pt.fragmentShader}else{rt=_.vertexShader,Mt=_.fragmentShader;let Pt=o.getVertexShaderStage(_),It=o.getFragmentShaderStage(_);o.update(_,Pt,It),Tt=Pt.id,X=It.id}let it=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),Bt=q.isInstancedMesh===!0,Rt=q.isBatchedMesh===!0,Gt=!!_.map,se=!!_.matcap,lt=!!W,ct=!!_.aoMap,gt=!!_.lightMap,yt=!!_.bumpMap&&_.wireframe===!1,St=!!_.normalMap,Wt=!!_.displacementMap,Ut=!!_.emissiveMap,zt=!!_.metalnessMap,Xt=!!_.roughnessMap,k=_.anisotropy>0,ce=_.clearcoat>0,jt=_.dispersion>0,C=_.retroreflectivity>0,v=_.iridescence>0,O=_.sheen>0,$=_.transmission>0,at=k&&!!_.anisotropyMap,vt=ce&&!!_.clearcoatMap,xt=ce&&!!_.clearcoatNormalMap,ot=ce&&!!_.clearcoatRoughnessMap,ut=v&&!!_.iridescenceMap,bt=v&&!!_.iridescenceThicknessMap,kt=O&&!!_.sheenColorMap,wt=O&&!!_.sheenRoughnessMap,Et=!!_.specularMap,Ht=!!_.specularColorMap,S=!!_.specularIntensityMap,P=$&&!!_.transmissionMap,M=$&&!!_.thicknessMap,D=!!_.gradientMap,L=!!_.alphaMap,Z=_.alphaTest>0,nt=!!_.alphaHash,K=!!_.extensions,dt=kn;_.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(dt=i.toneMapping);let ft={shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:rt,fragmentShader:Mt,defines:_.defines,customVertexShaderID:Tt,customFragmentShaderID:X,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Rt,batchingColor:Rt&&q._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&q.instanceColor!==null,instancingMorph:Bt&&q.morphTexture!==null,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Gt,matcap:se,envMap:lt,envMapMode:lt&&W.mapping,envMapCubeUVHeight:B,aoMap:ct,lightMap:gt,bumpMap:yt,normalMap:St,displacementMap:Wt,emissiveMap:Ut,normalMapObjectSpace:St&&_.normalMapType===od,normalMapTangentSpace:St&&_.normalMapType===cr,packedNormalMap:St&&_.normalMapType===cr&&zx(_.normalMap.format),metalnessMap:zt,roughnessMap:Xt,anisotropy:k,anisotropyMap:at,clearcoat:ce,clearcoatMap:vt,clearcoatNormalMap:xt,clearcoatRoughnessMap:ot,dispersion:jt,retroreflection:C,iridescence:v,iridescenceMap:ut,iridescenceThicknessMap:bt,sheen:O,sheenColorMap:kt,sheenRoughnessMap:wt,specularMap:Et,specularColorMap:Ht,specularIntensityMap:S,transmission:$,transmissionMap:P,thicknessMap:M,gradientMap:D,opaque:_.transparent===!1&&_.blending===ar&&_.alphaToCoverage===!1,alphaMap:L,alphaTest:Z,alphaHash:nt,combine:_.combine,mapUv:Gt&&g(_.map.channel),aoMapUv:ct&&g(_.aoMap.channel),lightMapUv:gt&&g(_.lightMap.channel),bumpMapUv:yt&&g(_.bumpMap.channel),normalMapUv:St&&g(_.normalMap.channel),displacementMapUv:Wt&&g(_.displacementMap.channel),emissiveMapUv:Ut&&g(_.emissiveMap.channel),metalnessMapUv:zt&&g(_.metalnessMap.channel),roughnessMapUv:Xt&&g(_.roughnessMap.channel),anisotropyMapUv:at&&g(_.anisotropyMap.channel),clearcoatMapUv:vt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:xt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:wt&&g(_.sheenRoughnessMap.channel),specularMapUv:Et&&g(_.specularMap.channel),specularColorMapUv:Ht&&g(_.specularColorMap.channel),specularIntensityMapUv:S&&g(_.specularIntensityMap.channel),transmissionMapUv:P&&g(_.transmissionMap.channel),thicknessMapUv:M&&g(_.thicknessMap.channel),alphaMapUv:L&&g(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(St||k),vertexNormals:!!V.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!V.attributes.uv&&(Gt||L),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||V.attributes.normal===void 0&&St===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:ht,numSunLights:x.sun.length,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numSunLightShadows:x.sunShadowMap.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:Gt&&_.map.isVideoTexture===!0&&oe.getTransfer(_.map.colorSpace)===me,decodeVideoTextureEmissive:Ut&&_.emissiveMap.isVideoTexture===!0&&oe.getTransfer(_.emissiveMap.colorSpace)===me,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Be,flipSided:_.side===on,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:K&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(K&&_.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function m(_){let x=[];if(_.shaderID?x.push(_.shaderID):(x.push(_.customVertexShaderID),x.push(_.customFragmentShaderID)),_.defines!==void 0)for(let U in _.defines)x.push(U),x.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(p(x,_),T(x,_),x.push(i.outputColorSpace)),x.push(_.customProgramCacheKey),x.join()}function p(_,x){_.push(x.precision),_.push(x.outputColorSpace),_.push(x.envMapMode),_.push(x.envMapCubeUVHeight),_.push(x.mapUv),_.push(x.alphaMapUv),_.push(x.lightMapUv),_.push(x.aoMapUv),_.push(x.bumpMapUv),_.push(x.normalMapUv),_.push(x.displacementMapUv),_.push(x.emissiveMapUv),_.push(x.metalnessMapUv),_.push(x.roughnessMapUv),_.push(x.anisotropyMapUv),_.push(x.clearcoatMapUv),_.push(x.clearcoatNormalMapUv),_.push(x.clearcoatRoughnessMapUv),_.push(x.iridescenceMapUv),_.push(x.iridescenceThicknessMapUv),_.push(x.sheenColorMapUv),_.push(x.sheenRoughnessMapUv),_.push(x.specularMapUv),_.push(x.specularColorMapUv),_.push(x.specularIntensityMapUv),_.push(x.transmissionMapUv),_.push(x.thicknessMapUv),_.push(x.combine),_.push(x.fogExp2),_.push(x.sizeAttenuation),_.push(x.morphTargetsCount),_.push(x.morphAttributeCount),_.push(x.numSunLights),_.push(x.numDirLights),_.push(x.numPointLights),_.push(x.numSpotLights),_.push(x.numSpotLightMaps),_.push(x.numHemiLights),_.push(x.numRectAreaLights),_.push(x.numSunLightShadows),_.push(x.numDirLightShadows),_.push(x.numPointLightShadows),_.push(x.numSpotLightShadows),_.push(x.numSpotLightShadowsWithMaps),_.push(x.numLightProbes),_.push(x.shadowMapType),_.push(x.toneMapping),_.push(x.numClippingPlanes),_.push(x.numClipIntersection),_.push(x.depthPacking)}function T(_,x){a.disableAll(),x.instancing&&a.enable(0),x.instancingColor&&a.enable(1),x.instancingMorph&&a.enable(2),x.matcap&&a.enable(3),x.envMap&&a.enable(4),x.normalMapObjectSpace&&a.enable(5),x.normalMapTangentSpace&&a.enable(6),x.clearcoat&&a.enable(7),x.iridescence&&a.enable(8),x.alphaTest&&a.enable(9),x.vertexColors&&a.enable(10),x.vertexAlphas&&a.enable(11),x.vertexUv1s&&a.enable(12),x.vertexUv2s&&a.enable(13),x.vertexUv3s&&a.enable(14),x.vertexTangents&&a.enable(15),x.anisotropy&&a.enable(16),x.alphaHash&&a.enable(17),x.batching&&a.enable(18),x.dispersion&&a.enable(19),x.retroreflection&&a.enable(24),x.batchingColor&&a.enable(20),x.gradientMap&&a.enable(21),x.packedNormalMap&&a.enable(22),x.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),x.numLightProbeGrids>0&&a.enable(22),x.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function R(_){let x=f[_.type],U;if(x){let z=ei[x];U=Td.clone(z.uniforms)}else U=_.uniforms;return U}function y(_,x){let U=h.get(x);return U!==void 0?++U.usedTimes:(U=new Ox(i,x,_,s),c.push(U),h.set(x,U)),U}function A(_){if(--_.usedTimes===0){let x=c.indexOf(_);c[x]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function N(){o.dispose()}return{getParameters:E,getProgramCacheKey:m,getUniforms:R,acquireProgram:y,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:N}}function Hx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Vx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Xd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,E,m,p){let T=i[t];return T===void 0?(T={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:E,renderOrder:u.renderOrder,z:m,group:p},i[t]=T):(T.id=u.id,T.object=u,T.geometry=f,T.material=g,T.materialVariant=a(u),T.groupOrder=E,T.renderOrder=u.renderOrder,T.z=m,T.group=p),t++,T}function l(u,f,g,E,m,p,T){T.reversedDepth===!0&&(m=-m);let R=o(u,f,g,E,m,p);g.transmission>0?n.push(R):g.transparent===!0?s.push(R):e.push(R)}function c(u,f,g,E,m,p){let T=o(u,f,g,E,m,p);g.transmission>0?n.unshift(T):g.transparent===!0?s.unshift(T):e.unshift(T)}function h(u,f){e.length>1&&e.sort(u||Vx),n.length>1&&n.sort(f||Xd),s.length>1&&s.sort(f||Xd)}function d(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Gx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new qd,i.set(n,[a])):s>=r.length?(a=new qd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Wx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new Zt};break;case"SpotLight":e={position:new F,direction:new F,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function Xx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var qx=0;function Yx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Zx(i){let t=new Wx,e=Xx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new Ee,a=new Ee;function o(c){let h=0,d=0,u=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let f=0,g=0,E=0,m=0,p=0,T=0,R=0,y=0,A=0,w=0,N=0,_=0,x=0,U=0;c.sort(Yx);for(let q=0,J=c.length;q<J;q++){let H=c[q],V=H.color,st=H.intensity,I=H.distance,W=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Ui?W=H.shadow.map.texture:W=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)h+=V.r*st,d+=V.g*st,u+=V.b*st;else if(H.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(H.sh.coefficients[B],st);U++}else if(H.isSunLight){let B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let Y=H.shadow,j=e.get(H);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=W;let pt=Y.getViewportCount();for(let ht=0;ht<pt;ht++)n.sunShadowMatrix[E+ht]=Y.getMatrix(ht),n.sunShadowCascade[E+ht]=Y._cascadeData[ht];E+=pt,g++}n.sun[f]=B,f++}else if(H.isDirectionalLight){let B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let Y=H.shadow,j=e.get(H);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=W,n.directionalShadowMatrix[m]=H.shadow.matrix,A++}n.directional[m]=B,m++}else if(H.isSpotLight){let B=t.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(V).multiplyScalar(st),B.distance=I,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,n.spot[T]=B;let Y=H.shadow;if(H.map&&(n.spotLightMap[_]=H.map,_++,Y.updateMatrices(H),H.castShadow&&x++),n.spotLightMatrix[T]=Y.matrix,H.castShadow){let j=e.get(H);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,n.spotShadow[T]=j,n.spotShadowMap[T]=W,N++}T++}else if(H.isRectAreaLight){let B=t.get(H);B.color.copy(V).multiplyScalar(st),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),n.rectArea[R]=B,R++}else if(H.isPointLight){let B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){let Y=H.shadow,j=e.get(H);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,j.shadowCameraNear=Y.camera.near,j.shadowCameraFar=Y.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=W,n.pointShadowMatrix[p]=H.shadow.matrix,w++}n.point[p]=B,p++}else if(H.isHemisphereLight){let B=t.get(H);B.skyColor.copy(H.color).multiplyScalar(st),B.groundColor.copy(H.groundColor).multiplyScalar(st),n.hemi[y]=B,y++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let z=n.hash;(z.sunLength!==f||z.directionalLength!==m||z.pointLength!==p||z.spotLength!==T||z.rectAreaLength!==R||z.hemiLength!==y||z.numSunShadows!==g||z.numDirectionalShadows!==A||z.numPointShadows!==w||z.numSpotShadows!==N||z.numSpotMaps!==_||z.numLightProbes!==U)&&(n.sun.length=f,n.directional.length=m,n.spot.length=T,n.rectArea.length=R,n.point.length=p,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=E,n.sunShadowCascade.length=E,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=N,n.spotShadowMap.length=N,n.spotLightMatrix.length=N+_-x,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=x,n.numLightProbes=U,z.sunLength=f,z.directionalLength=m,z.pointLength=p,z.spotLength=T,z.rectAreaLength=R,z.hemiLength=y,z.numSunShadows=g,z.numDirectionalShadows=A,z.numPointShadows=w,z.numSpotShadows=N,z.numSpotMaps=_,z.numLightProbes=U,n.version=qx++)}function l(c,h){let d=0,u=0,f=0,g=0,E=0,m=0,p=h.matrixWorldInverse;for(let T=0,R=c.length;T<R;T++){let y=c[T];if(y.isSunLight){let A=n.sun[d];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),u++}else if(y.isSpotLight){let A=n.spot[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let A=n.rectArea[E];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),E++}else if(y.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let A=n.hemi[m];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Yd(i){let t=new Zx(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Jx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Yd(i),t.set(s,[o])):r>=a.length?(o=new Yd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var $x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kx=`uniform sampler2D shadow_pass;
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
}`,jx=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Qx=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Zd=new Ee,ya=new F,gh=new F;function tv(i,t,e){let n=new Ks,s=new mt,r=new mt,a=new Re,o=new Lo,l=new Do,c={},h=e.maxTextureSize,d={[Ii]:on,[on]:Ii,[Be]:Be},u=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:$x,fragmentShader:Kx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ce;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new le(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=is;let p=this.type;this.render=function(w,N,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Bu&&(Yt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=is);let x=i.getRenderTarget(),U=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Qn),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let J=p!==this.type;J&&N.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(V=>V.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,V=w.length;H<V;H++){let st=w[H],I=st.shadow;if(I===void 0){Yt("WebGLShadowMap:",st,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);let W=I.getFrameExtents();s.multiply(W),r.copy(I.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,I.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,I.mapSize.y=r.y));let B=i.state.buffers.depth.getReversed();if(I.camera._reversedDepth=B,I.map===null||J===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===rr){if(st.isPointLight){Yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new cn(s.x,s.y,{format:Ui,type:Gn,minFilter:Ze,magFilter:Ze,generateMipmaps:!1}),I.map.texture.name=st.name+".shadowMap",I.map.depthTexture=new Si(s.x,s.y,Vn),I.map.depthTexture.name=st.name+".shadowMapDepth",I.map.depthTexture.format=jn,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Ye,I.map.depthTexture.magFilter=Ye}else st.isPointLight?(I.map=new Ol(s.x),I.map.depthTexture=new bo(s.x,Hn)):(I.map=new cn(s.x,s.y),I.map.depthTexture=new Si(s.x,s.y,Hn)),I.map.depthTexture.name=st.name+".shadowMap",I.map.depthTexture.format=jn,this.type===is?(I.map.depthTexture.compareFunction=B?Dl:Ll,I.map.depthTexture.minFilter=Ze,I.map.depthTexture.magFilter=Ze):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Ye,I.map.depthTexture.magFilter=Ye);I.camera.updateProjectionMatrix()}I.map.isWebGLCubeRenderTarget!==!0&&(I.map.width!==s.x||I.map.height!==s.y)&&I.map.setSize(s.x,s.y);let Y=I.map.isWebGLCubeRenderTarget?6:I.getViewportCount();st.isPointLight!==!0&&I.updateMatrices(st,_);for(let j=0;j<Y;j++){let pt=I.getCamera(j);if(st.isPointLight){let ht=I.camera,rt=I.matrix,Mt=st.distance||ht.far;Mt!==ht.far&&(ht.far=Mt,ht.updateProjectionMatrix()),ya.setFromMatrixPosition(st.matrixWorld),ht.position.copy(ya),gh.copy(ht.position),gh.add(jx[j]),ht.up.copy(Qx[j]),ht.lookAt(gh),ht.updateMatrixWorld(),rt.makeTranslation(-ya.x,-ya.y,-ya.z),Zd.multiplyMatrices(ht.projectionMatrix,ht.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Zd,ht.coordinateSystem,ht.reversedDepth)}if(I.map.isWebGLCubeRenderTarget)i.setRenderTarget(I.map,j),i.clear();else{j===0&&(i.setRenderTarget(I.map),i.clear());let ht=I.getViewport(j);a.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),q.viewport(a)}n=I.getFrustum(j),y(N,_,pt,st,this.type)}I.isPointLightShadow!==!0&&this.type===rr&&T(I,_),I.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(x,U,z)};function T(w,N){let _=t.update(E);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new cn(s.x,s.y,{format:Ui,type:Gn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(N,null,_,u,E,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(N,null,_,f,E,null)}function R(w,N,_,x){let U=null,z=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(z!==void 0)U=z;else if(U=_.isPointLight===!0?l:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let q=U.uuid,J=N.uuid,H=c[q];H===void 0&&(H={},c[q]=H);let V=H[J];V===void 0&&(V=U.clone(),H[J]=V,N.addEventListener("dispose",A)),U=V}if(U.visible=N.visible,U.wireframe=N.wireframe,x===rr?U.side=N.shadowSide!==null?N.shadowSide:N.side:U.side=N.shadowSide!==null?N.shadowSide:d[N.side],U.alphaMap=N.alphaMap,U.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,U.map=N.map,U.clipShadows=N.clipShadows,U.clippingPlanes=N.clippingPlanes,U.clipIntersection=N.clipIntersection,U.displacementMap=N.displacementMap,U.displacementScale=N.displacementScale,U.displacementBias=N.displacementBias,U.wireframeLinewidth=N.wireframeLinewidth,U.linewidth=N.linewidth,_.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let q=i.properties.get(U);q.light=_}return U}function y(w,N,_,x,U){if(w.visible===!1)return;if(w.layers.test(N.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===rr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let J=t.update(w),H=w.material;if(Array.isArray(H)){let V=J.groups;for(let st=0,I=V.length;st<I;st++){let W=V[st],B=H[W.materialIndex];if(B&&B.visible){let Y=R(w,B,x,U);w.onBeforeShadow(i,w,N,_,J,Y,W),i.renderBufferDirect(_,null,J,Y,w,W),w.onAfterShadow(i,w,N,_,J,Y,W)}}}else if(H.visible){let V=R(w,H,x,U);w.onBeforeShadow(i,w,N,_,J,V,null),i.renderBufferDirect(_,null,J,V,w,null),w.onAfterShadow(i,w,N,_,J,V,null)}}let q=w.children;for(let J=0,H=q.length;J<H;J++)y(q[J],N,_,x,U)}function A(w){w.target.removeEventListener("dispose",A);for(let _ in c){let x=c[_],U=w.target.uuid;U in x&&(x[U].dispose(),delete x[U])}}}function ev(i,t){function e(){let M=!1,D=new Re,L=null,Z=new Re(0,0,0,0);return{setMask:function(nt){L!==nt&&!M&&(i.colorMask(nt,nt,nt,nt),L=nt)},setLocked:function(nt){M=nt},setClear:function(nt,K,dt,ft,Pt){Pt===!0&&(nt*=ft,K*=ft,dt*=ft),D.set(nt,K,dt,ft),Z.equals(D)===!1&&(i.clearColor(nt,K,dt,ft),Z.copy(D))},reset:function(){M=!1,L=null,Z.set(-1,0,0,0)}}}function n(){let M=!1,D=!1,L=null,Z=null,nt=null;return{setReversed:function(K){if(D!==K){let dt=t.get("EXT_clip_control");K?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT),D=K;let ft=nt;nt=null,this.setClear(ft)}},getReversed:function(){return D},setTest:function(K){K?it(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(K){L!==K&&!M&&(i.depthMask(K),L=K)},setFunc:function(K){if(D&&(K=xd[K]),Z!==K){switch(K){case co:i.depthFunc(i.NEVER);break;case ho:i.depthFunc(i.ALWAYS);break;case uo:i.depthFunc(i.LESS);break;case zs:i.depthFunc(i.LEQUAL);break;case fo:i.depthFunc(i.EQUAL);break;case po:i.depthFunc(i.GEQUAL);break;case mo:i.depthFunc(i.GREATER);break;case go:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=K}},setLocked:function(K){M=K},setClear:function(K){nt!==K&&(nt=K,D&&(K=1-K),i.clearDepth(K))},reset:function(){M=!1,L=null,Z=null,nt=null,D=!1}}}function s(){let M=!1,D=null,L=null,Z=null,nt=null,K=null,dt=null,ft=null,Pt=null;return{setTest:function(It){M||(It?it(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(It){D!==It&&!M&&(i.stencilMask(It),D=It)},setFunc:function(It,fe,ve){(L!==It||Z!==fe||nt!==ve)&&(i.stencilFunc(It,fe,ve),L=It,Z=fe,nt=ve)},setOp:function(It,fe,ve){(K!==It||dt!==fe||ft!==ve)&&(i.stencilOp(It,fe,ve),K=It,dt=fe,ft=ve)},setLocked:function(It){M=It},setClear:function(It){Pt!==It&&(i.clearStencil(It),Pt=It)},reset:function(){M=!1,D=null,L=null,Z=null,nt=null,K=null,dt=null,ft=null,Pt=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],E=null,m=!1,p=null,T=null,R=null,y=null,A=null,w=null,N=null,_=new Zt(0,0,0),x=0,U=!1,z=null,q=null,J=null,H=null,V=null,st=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),I=!1,W=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),I=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),I=W>=2);let Y=null,j={},pt=i.getParameter(i.SCISSOR_BOX),ht=i.getParameter(i.VIEWPORT),rt=new Re().fromArray(pt),Mt=new Re().fromArray(ht);function Tt(M,D,L,Z){let nt=new Uint8Array(4),K=i.createTexture();i.bindTexture(M,K),i.texParameteri(M,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(M,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let dt=0;dt<L;dt++)M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY?i.texImage3D(D,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,nt):i.texImage2D(D+dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,nt);return K}let X={};X[i.TEXTURE_2D]=Tt(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=Tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=Tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=Tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(i.DEPTH_TEST),a.setFunc(zs),yt(!1),St(Bc),it(i.CULL_FACE),ct(Qn);function it(M){h[M]!==!0&&(i.enable(M),h[M]=!0)}function _t(M){h[M]!==!1&&(i.disable(M),h[M]=!1)}function Bt(M,D){return u[M]!==D?(i.bindFramebuffer(M,D),u[M]=D,M===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=D),M===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=D),!0):!1}function Rt(M,D){let L=g,Z=!1;if(M){L=f.get(D),L===void 0&&(L=[],f.set(D,L));let nt=M.textures;if(L.length!==nt.length||L[0]!==i.COLOR_ATTACHMENT0){for(let K=0,dt=nt.length;K<dt;K++)L[K]=i.COLOR_ATTACHMENT0+K;L.length=nt.length,Z=!0}}else L[0]!==i.BACK&&(L[0]=i.BACK,Z=!0);Z&&i.drawBuffers(L)}function Gt(M){return E!==M?(i.useProgram(M),E=M,!0):!1}let se={[rs]:i.FUNC_ADD,[ku]:i.FUNC_SUBTRACT,[Hu]:i.FUNC_REVERSE_SUBTRACT};se[Vu]=i.MIN,se[Gu]=i.MAX;let lt={[Wu]:i.ZERO,[Xu]:i.ONE,[qu]:i.SRC_COLOR,[Hc]:i.SRC_ALPHA,[ju]:i.SRC_ALPHA_SATURATE,[$u]:i.DST_COLOR,[Zu]:i.DST_ALPHA,[Yu]:i.ONE_MINUS_SRC_COLOR,[Vc]:i.ONE_MINUS_SRC_ALPHA,[Ku]:i.ONE_MINUS_DST_COLOR,[Ju]:i.ONE_MINUS_DST_ALPHA,[Qu]:i.CONSTANT_COLOR,[td]:i.ONE_MINUS_CONSTANT_COLOR,[ed]:i.CONSTANT_ALPHA,[nd]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(M,D,L,Z,nt,K,dt,ft,Pt,It){if(M===Qn){m===!0&&(_t(i.BLEND),m=!1);return}if(m===!1&&(it(i.BLEND),m=!0),M!==zu){if(M!==p||It!==U){if((T!==rs||A!==rs)&&(i.blendEquation(i.FUNC_ADD),T=rs,A=rs),It)switch(M){case ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ss:i.blendFunc(i.ONE,i.ONE);break;case zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qt("WebGLState: Invalid blending: ",M);break}else switch(M){case ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zc:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kc:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",M);break}R=null,y=null,w=null,N=null,_.set(0,0,0),x=0,p=M,U=It}return}nt=nt||D,K=K||L,dt=dt||Z,(D!==T||nt!==A)&&(i.blendEquationSeparate(se[D],se[nt]),T=D,A=nt),(L!==R||Z!==y||K!==w||dt!==N)&&(i.blendFuncSeparate(lt[L],lt[Z],lt[K],lt[dt]),R=L,y=Z,w=K,N=dt),(ft.equals(_)===!1||Pt!==x)&&(i.blendColor(ft.r,ft.g,ft.b,Pt),_.copy(ft),x=Pt),p=M,U=!1}function gt(M,D){M.side===Be?_t(i.CULL_FACE):it(i.CULL_FACE);let L=M.side===on;D&&(L=!L),yt(L),M.blending===ar&&M.transparent===!1?ct(Qn):ct(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),a.setFunc(M.depthFunc),a.setTest(M.depthTest),a.setMask(M.depthWrite),r.setMask(M.colorWrite);let Z=M.stencilWrite;o.setTest(Z),Z&&(o.setMask(M.stencilWriteMask),o.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),o.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),Ut(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(M){z!==M&&(M?i.frontFace(i.CW):i.frontFace(i.CCW),z=M)}function St(M){M!==Fu?(it(i.CULL_FACE),M!==q&&(M===Bc?i.cullFace(i.BACK):M===Ou?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),q=M}function Wt(M){M!==J&&(I&&i.lineWidth(M),J=M)}function Ut(M,D,L){M?(it(i.POLYGON_OFFSET_FILL),(H!==D||V!==L)&&(H=D,V=L,a.getReversed()&&(D=-D),i.polygonOffset(D,L))):_t(i.POLYGON_OFFSET_FILL)}function zt(M){M?it(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function Xt(M){M===void 0&&(M=i.TEXTURE0+st-1),Y!==M&&(i.activeTexture(M),Y=M)}function k(M,D,L){L===void 0&&(Y===null?L=i.TEXTURE0+st-1:L=Y);let Z=j[L];Z===void 0&&(Z={type:void 0,texture:void 0},j[L]=Z),(Z.type!==M||Z.texture!==D)&&(Y!==L&&(i.activeTexture(L),Y=L),i.bindTexture(M,D||X[M]),Z.type=M,Z.texture=D)}function ce(){let M=j[Y];M!==void 0&&M.type!==void 0&&(i.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function jt(){try{i.compressedTexImage2D(...arguments)}catch(M){qt("WebGLState:",M)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(M){qt("WebGLState:",M)}}function v(){try{i.texSubImage2D(...arguments)}catch(M){qt("WebGLState:",M)}}function O(){try{i.texSubImage3D(...arguments)}catch(M){qt("WebGLState:",M)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(M){qt("WebGLState:",M)}}function at(){try{i.compressedTexSubImage3D(...arguments)}catch(M){qt("WebGLState:",M)}}function vt(){try{i.texStorage2D(...arguments)}catch(M){qt("WebGLState:",M)}}function xt(){try{i.texStorage3D(...arguments)}catch(M){qt("WebGLState:",M)}}function ot(){try{i.texImage2D(...arguments)}catch(M){qt("WebGLState:",M)}}function ut(){try{i.texImage3D(...arguments)}catch(M){qt("WebGLState:",M)}}function bt(M){return d[M]!==void 0?d[M]:i.getParameter(M)}function kt(M,D){d[M]!==D&&(i.pixelStorei(M,D),d[M]=D)}function wt(M){rt.equals(M)===!1&&(i.scissor(M.x,M.y,M.z,M.w),rt.copy(M))}function Et(M){Mt.equals(M)===!1&&(i.viewport(M.x,M.y,M.z,M.w),Mt.copy(M))}function Ht(M,D){let L=c.get(D);L===void 0&&(L=new WeakMap,c.set(D,L));let Z=L.get(M);Z===void 0&&(Z=i.getUniformBlockIndex(D,M.name),L.set(M,Z))}function S(M,D){let Z=c.get(D).get(M);l.get(D)!==Z&&(i.uniformBlockBinding(D,Z,M.__bindingPointIndex),l.set(D,Z))}function P(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},Y=null,j={},u={},f=new WeakMap,g=[],E=null,m=!1,p=null,T=null,R=null,y=null,A=null,w=null,N=null,_=new Zt(0,0,0),x=0,U=!1,z=null,q=null,J=null,H=null,V=null,rt.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:_t,bindFramebuffer:Bt,drawBuffers:Rt,useProgram:Gt,setBlending:ct,setMaterial:gt,setFlipSided:yt,setCullFace:St,setLineWidth:Wt,setPolygonOffset:Ut,setScissorTest:zt,activeTexture:Xt,bindTexture:k,unbindTexture:ce,compressedTexImage2D:jt,compressedTexImage3D:C,texImage2D:ot,texImage3D:ut,pixelStorei:kt,getParameter:bt,updateUBOMapping:Ht,uniformBlockBinding:S,texStorage2D:vt,texStorage3D:xt,texSubImage2D:v,texSubImage3D:O,compressedTexSubImage2D:$,compressedTexSubImage3D:at,scissor:wt,viewport:Et,reset:P}}function nv(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(C,v){return g?new OffscreenCanvas(C,v):Vs("canvas")}function m(C,v,O){let $=1,at=jt(C);if((at.width>O||at.height>O)&&($=O/Math.max(at.width,at.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let vt=Math.floor($*at.width),xt=Math.floor($*at.height);u===void 0&&(u=E(vt,xt));let ot=v?E(vt,xt):u;return ot.width=vt,ot.height=xt,ot.getContext("2d").drawImage(C,0,0,vt,xt),Yt("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+vt+"x"+xt+")."),ot}else return"data"in C&&Yt("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),C;return C}function p(C){return C.generateMipmaps}function T(C){i.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,v,O,$,at,vt=!1){if(C!==null){if(i[C]!==void 0)return i[C];Yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let xt;$&&(xt=t.get("EXT_texture_norm16"),xt||Yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ot=v;if(v===i.RED&&(O===i.FLOAT&&(ot=i.R32F),O===i.HALF_FLOAT&&(ot=i.R16F),O===i.UNSIGNED_BYTE&&(ot=i.R8),O===i.UNSIGNED_SHORT&&xt&&(ot=xt.R16_EXT),O===i.SHORT&&xt&&(ot=xt.R16_SNORM_EXT)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(ot=i.R8UI),O===i.UNSIGNED_SHORT&&(ot=i.R16UI),O===i.UNSIGNED_INT&&(ot=i.R32UI),O===i.BYTE&&(ot=i.R8I),O===i.SHORT&&(ot=i.R16I),O===i.INT&&(ot=i.R32I)),v===i.RG&&(O===i.FLOAT&&(ot=i.RG32F),O===i.HALF_FLOAT&&(ot=i.RG16F),O===i.UNSIGNED_BYTE&&(ot=i.RG8),O===i.UNSIGNED_SHORT&&xt&&(ot=xt.RG16_EXT),O===i.SHORT&&xt&&(ot=xt.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(ot=i.RG8UI),O===i.UNSIGNED_SHORT&&(ot=i.RG16UI),O===i.UNSIGNED_INT&&(ot=i.RG32UI),O===i.BYTE&&(ot=i.RG8I),O===i.SHORT&&(ot=i.RG16I),O===i.INT&&(ot=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),O===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),O===i.UNSIGNED_INT&&(ot=i.RGB32UI),O===i.BYTE&&(ot=i.RGB8I),O===i.SHORT&&(ot=i.RGB16I),O===i.INT&&(ot=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),O===i.UNSIGNED_INT&&(ot=i.RGBA32UI),O===i.BYTE&&(ot=i.RGBA8I),O===i.SHORT&&(ot=i.RGBA16I),O===i.INT&&(ot=i.RGBA32I)),v===i.RGB&&(O===i.UNSIGNED_SHORT&&xt&&(ot=xt.RGB16_EXT),O===i.SHORT&&xt&&(ot=xt.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(ot=i.R11F_G11F_B10F)),v===i.RGBA){let ut=vt?Br:oe.getTransfer(at);O===i.FLOAT&&(ot=i.RGBA32F),O===i.HALF_FLOAT&&(ot=i.RGBA16F),O===i.UNSIGNED_BYTE&&(ot=ut===me?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&xt&&(ot=xt.RGBA16_EXT),O===i.SHORT&&xt&&(ot=xt.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function A(C,v){let O;return C?v===null||v===Hn||v===lr?O=i.DEPTH24_STENCIL8:v===Vn?O=i.DEPTH32F_STENCIL8:v===or&&(O=i.DEPTH24_STENCIL8,Yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Hn||v===lr?O=i.DEPTH_COMPONENT24:v===Vn?O=i.DEPTH_COMPONENT32F:v===or&&(O=i.DEPTH_COMPONENT16),O}function w(C,v){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ye&&C.minFilter!==Ze?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function N(C){let v=C.target;v.removeEventListener("dispose",N),x(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function _(C){let v=C.target;v.removeEventListener("dispose",_),z(v)}function x(C){let v=n.get(C);if(v.__webglInit===void 0)return;let O=C.source,$=f.get(O);if($){let at=$[v.__cacheKey];at.usedTimes--,at.usedTimes===0&&U(C),Object.keys($).length===0&&f.delete(O)}n.remove(C)}function U(C){let v=n.get(C);i.deleteTexture(v.__webglTexture);let O=C.source,$=f.get(O);delete $[v.__cacheKey],a.memory.textures--}function z(C){let v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let at=0;at<v.__webglFramebuffer[$].length;at++)i.deleteFramebuffer(v.__webglFramebuffer[$][at]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=C.textures;for(let $=0,at=O.length;$<at;$++){let vt=n.get(O[$]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),a.memory.textures--),n.remove(O[$])}n.remove(C)}let q=0;function J(){q=0}function H(){return q}function V(C){q=C}function st(){let C=q;return C>=s.maxTextures&&Yt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,C}function I(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function W(C,v){let O=n.get(C);if(C.isVideoTexture&&k(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){let $=C.image;if($===null)Yt("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Yt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(O,C,v);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function B(C,v){let O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){_t(O,C,v);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function Y(C,v){let O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){_t(O,C,v);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function j(C,v){let O=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){Bt(O,C,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}let pt={[ks]:i.REPEAT,[mn]:i.CLAMP_TO_EDGE,[_o]:i.MIRRORED_REPEAT},ht={[Ye]:i.NEAREST,[rd]:i.NEAREST_MIPMAP_NEAREST,[da]:i.NEAREST_MIPMAP_LINEAR,[Ze]:i.LINEAR,[Jo]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},rt={[cd]:i.NEVER,[pd]:i.ALWAYS,[hd]:i.LESS,[Ll]:i.LEQUAL,[ud]:i.EQUAL,[Dl]:i.GEQUAL,[dd]:i.GREATER,[fd]:i.NOTEQUAL};function Mt(C,v){if(v.type===Vn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ze||v.magFilter===Jo||v.magFilter===da||v.magFilter===Di||v.minFilter===Ze||v.minFilter===Jo||v.minFilter===da||v.minFilter===Di)&&Yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,pt[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,pt[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,pt[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ht[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ht[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,rt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ye||v.minFilter!==da&&v.minFilter!==Di||v.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Tt(C,v){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",N));let $=v.source,at=f.get($);at===void 0&&(at={},f.set($,at));let vt=I(v);if(vt!==C.__cacheKey){at[vt]===void 0&&(at[vt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),at[vt].usedTimes++;let xt=at[C.__cacheKey];xt!==void 0&&(at[C.__cacheKey].usedTimes--,xt.usedTimes===0&&U(v)),C.__cacheKey=vt,C.__webglTexture=at[vt].texture}return O}function X(C,v,O){return Math.floor(Math.floor(C/O)/v)}function it(C,v,O,$){let vt=C.updateRanges;if(vt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,O,$,v.data);else{vt.sort((kt,wt)=>kt.start-wt.start);let xt=0;for(let kt=1;kt<vt.length;kt++){let wt=vt[xt],Et=vt[kt],Ht=wt.start+wt.count,S=X(Et.start,v.width,4),P=X(wt.start,v.width,4);Et.start<=Ht+1&&S===P&&X(Et.start+Et.count-1,v.width,4)===S?wt.count=Math.max(wt.count,Et.start+Et.count-wt.start):(++xt,vt[xt]=Et)}vt.length=xt+1;let ot=e.getParameter(i.UNPACK_ROW_LENGTH),ut=e.getParameter(i.UNPACK_SKIP_PIXELS),bt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let kt=0,wt=vt.length;kt<wt;kt++){let Et=vt[kt],Ht=Math.floor(Et.start/4),S=Math.ceil(Et.count/4),P=Ht%v.width,M=Math.floor(Ht/v.width),D=S,L=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,P),e.pixelStorei(i.UNPACK_SKIP_ROWS,M),e.texSubImage2D(i.TEXTURE_2D,0,P,M,D,L,O,$,v.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ot),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function _t(C,v,O){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);let at=Tt(C,v),vt=v.source;e.bindTexture($,C.__webglTexture,i.TEXTURE0+O);let xt=n.get(vt);if(vt.version!==xt.__version||at===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let L=oe.getPrimaries(oe.workingColorSpace),Z=v.colorSpace===Wn?null:oe.getPrimaries(v.colorSpace),nt=v.colorSpace===Wn||L===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let ut=m(v.image,!1,s.maxTextureSize);ut=ce(v,ut);let bt=r.convert(v.format,v.colorSpace),kt=r.convert(v.type),wt=y(v.internalFormat,bt,kt,v.normalized,v.colorSpace,v.isVideoTexture);Mt($,v);let Et,Ht=v.mipmaps,S=v.isVideoTexture!==!0,P=xt.__version===void 0||at===!0,M=vt.dataReady,D=w(v,ut);if(v.isDepthTexture)wt=A(v.format===Ni,v.type),P&&(S?e.texStorage2D(i.TEXTURE_2D,1,wt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,wt,ut.width,ut.height,0,bt,kt,null));else if(v.isDataTexture)if(Ht.length>0){S&&P&&e.texStorage2D(i.TEXTURE_2D,D,wt,Ht[0].width,Ht[0].height);for(let L=0,Z=Ht.length;L<Z;L++)Et=Ht[L],S?M&&e.texSubImage2D(i.TEXTURE_2D,L,0,0,Et.width,Et.height,bt,kt,Et.data):e.texImage2D(i.TEXTURE_2D,L,wt,Et.width,Et.height,0,bt,kt,Et.data);v.generateMipmaps=!1}else S?(P&&e.texStorage2D(i.TEXTURE_2D,D,wt,ut.width,ut.height),M&&it(v,ut,bt,kt)):e.texImage2D(i.TEXTURE_2D,0,wt,ut.width,ut.height,0,bt,kt,ut.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){S&&P&&e.texStorage3D(i.TEXTURE_2D_ARRAY,D,wt,Ht[0].width,Ht[0].height,ut.depth);for(let L=0,Z=Ht.length;L<Z;L++)if(Et=Ht[L],v.format!==Rn)if(bt!==null)if(S){if(M)if(v.layerUpdates.size>0){let nt=hh(Et.width,Et.height,v.format,v.type);for(let K of v.layerUpdates){let dt=Et.data.subarray(K*nt/Et.data.BYTES_PER_ELEMENT,(K+1)*nt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,L,0,0,K,Et.width,Et.height,1,bt,dt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,L,0,0,0,Et.width,Et.height,ut.depth,bt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,L,wt,Et.width,Et.height,ut.depth,0,Et.data,0,0);else Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else S?M&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,L,0,0,0,Et.width,Et.height,ut.depth,bt,kt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,L,wt,Et.width,Et.height,ut.depth,0,bt,kt,Et.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{S&&P&&e.texStorage2D(i.TEXTURE_2D,D,wt,Ht[0].width,Ht[0].height);for(let L=0,Z=Ht.length;L<Z;L++)Et=Ht[L],v.format!==Rn?bt!==null?S?M&&e.compressedTexSubImage2D(i.TEXTURE_2D,L,0,0,Et.width,Et.height,bt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,L,wt,Et.width,Et.height,0,Et.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):S?M&&e.texSubImage2D(i.TEXTURE_2D,L,0,0,Et.width,Et.height,bt,kt,Et.data):e.texImage2D(i.TEXTURE_2D,L,wt,Et.width,Et.height,0,bt,kt,Et.data)}else if(v.isDataArrayTexture)if(S){if(P&&e.texStorage3D(i.TEXTURE_2D_ARRAY,D,wt,ut.width,ut.height,ut.depth),M)if(v.layerUpdates.size>0){let L=hh(ut.width,ut.height,v.format,v.type);for(let Z of v.layerUpdates){let nt=ut.data.subarray(Z*L/ut.data.BYTES_PER_ELEMENT,(Z+1)*L/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ut.width,ut.height,1,bt,kt,nt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,bt,kt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,ut.width,ut.height,ut.depth,0,bt,kt,ut.data);else if(v.isData3DTexture)S?(P&&e.texStorage3D(i.TEXTURE_3D,D,wt,ut.width,ut.height,ut.depth),M&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,bt,kt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,wt,ut.width,ut.height,ut.depth,0,bt,kt,ut.data);else if(v.isFramebufferTexture){if(P)if(S)e.texStorage2D(i.TEXTURE_2D,D,wt,ut.width,ut.height);else{let L=ut.width,Z=ut.height;for(let nt=0;nt<D;nt++)e.texImage2D(i.TEXTURE_2D,nt,wt,L,Z,0,bt,kt,null),L>>=1,Z>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let L=i.canvas;if(L.hasAttribute("layoutsubtree")||L.setAttribute("layoutsubtree","true"),ut.parentNode!==L){L.appendChild(ut),d.add(v),L.onpaint=Z=>{let nt=Z.changedElements;for(let K of d)nt.includes(K.image)&&(K.needsUpdate=!0)},L.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ut);else{let nt=i.RGBA,K=i.RGBA,dt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,nt,K,dt,ut)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ht.length>0){if(S&&P){let L=jt(Ht[0]);e.texStorage2D(i.TEXTURE_2D,D,wt,L.width,L.height)}for(let L=0,Z=Ht.length;L<Z;L++)Et=Ht[L],S?M&&e.texSubImage2D(i.TEXTURE_2D,L,0,0,bt,kt,Et):e.texImage2D(i.TEXTURE_2D,L,wt,bt,kt,Et);v.generateMipmaps=!1}else if(S){if(P){let L=jt(ut);e.texStorage2D(i.TEXTURE_2D,D,wt,L.width,L.height)}M&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,kt,ut)}else e.texImage2D(i.TEXTURE_2D,0,wt,bt,kt,ut);p(v)&&T($),xt.__version=vt.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Bt(C,v,O){if(v.image.length!==6)return;let $=Tt(C,v),at=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+O);let vt=n.get(at);if(at.version!==vt.__version||$===!0){e.activeTexture(i.TEXTURE0+O);let xt=oe.getPrimaries(oe.workingColorSpace),ot=v.colorSpace===Wn?null:oe.getPrimaries(v.colorSpace),ut=v.colorSpace===Wn||xt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let bt=v.isCompressedTexture||v.image[0].isCompressedTexture,kt=v.image[0]&&v.image[0].isDataTexture,wt=[];for(let K=0;K<6;K++)!bt&&!kt?wt[K]=m(v.image[K],!0,s.maxCubemapSize):wt[K]=kt?v.image[K].image:v.image[K],wt[K]=ce(v,wt[K]);let Et=wt[0],Ht=r.convert(v.format,v.colorSpace),S=r.convert(v.type),P=y(v.internalFormat,Ht,S,v.normalized,v.colorSpace),M=v.isVideoTexture!==!0,D=vt.__version===void 0||$===!0,L=at.dataReady,Z=w(v,Et);Mt(i.TEXTURE_CUBE_MAP,v);let nt;if(bt){M&&D&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Z,P,Et.width,Et.height);for(let K=0;K<6;K++){nt=wt[K].mipmaps;for(let dt=0;dt<nt.length;dt++){let ft=nt[dt];v.format!==Rn?Ht!==null?M?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,0,0,ft.width,ft.height,Ht,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,P,ft.width,ft.height,0,ft.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):M?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,0,0,ft.width,ft.height,Ht,S,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,P,ft.width,ft.height,0,Ht,S,ft.data)}}}else{if(nt=v.mipmaps,M&&D){nt.length>0&&Z++;let K=jt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Z,P,K.width,K.height)}for(let K=0;K<6;K++)if(kt){M?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,wt[K].width,wt[K].height,Ht,S,wt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,P,wt[K].width,wt[K].height,0,Ht,S,wt[K].data);for(let dt=0;dt<nt.length;dt++){let Pt=nt[dt].image[K].image;M?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,0,0,Pt.width,Pt.height,Ht,S,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,P,Pt.width,Pt.height,0,Ht,S,Pt.data)}}else{M?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ht,S,wt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,P,Ht,S,wt[K]);for(let dt=0;dt<nt.length;dt++){let ft=nt[dt];M?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,0,0,Ht,S,ft.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,P,Ht,S,ft.image[K])}}}p(v)&&T(i.TEXTURE_CUBE_MAP),vt.__version=at.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Rt(C,v,O,$,at,vt){let xt=r.convert(O.format,O.colorSpace),ot=r.convert(O.type),ut=y(O.internalFormat,xt,ot,O.normalized,O.colorSpace),bt=n.get(v),kt=n.get(O);if(kt.__renderTarget=v,!bt.__hasExternalTextures){let wt=Math.max(1,v.width>>vt),Et=Math.max(1,v.height>>vt);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,vt,ut,wt,Et,v.depth,0,xt,ot,null):e.texImage2D(at,vt,ut,wt,Et,0,xt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Xt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,at,kt.__webglTexture,0,zt(v)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,at,kt.__webglTexture,vt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(C,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){let $=v.depthTexture,at=$&&$.isDepthTexture?$.type:null,vt=A(v.stencilBuffer,at),xt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Xt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt(v),vt,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt(v),vt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,vt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,C)}else{let $=v.textures;for(let at=0;at<$.length;at++){let vt=$[at],xt=r.convert(vt.format,vt.colorSpace),ot=r.convert(vt.type),ut=y(vt.internalFormat,xt,ot,vt.normalized,vt.colorSpace);Xt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt(v),ut,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt(v),ut,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ut,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function se(C,v,O){let $=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let at=n.get(v.depthTexture);if(at.__renderTarget=v,(!at.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$){if(at.__webglInit===void 0&&(at.__webglInit=!0,v.depthTexture.addEventListener("dispose",N)),at.__webglTexture===void 0){at.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,v.depthTexture);let bt=r.convert(v.depthTexture.format),kt=r.convert(v.depthTexture.type),wt;v.depthTexture.format===jn?wt=i.DEPTH_COMPONENT24:v.depthTexture.format===Ni&&(wt=i.DEPTH24_STENCIL8);for(let Et=0;Et<6;Et++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,wt,v.width,v.height,0,bt,kt,null)}}else W(v.depthTexture,0);let vt=at.__webglTexture,xt=zt(v),ot=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,ut=v.depthTexture.format===Ni?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===jn)Xt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,ot,vt,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,ot,vt,0);else if(v.depthTexture.format===Ni)Xt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,ot,vt,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,ot,vt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function lt(C){let v=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let $=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){let at=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",at)};$.addEventListener("dispose",at),v.__depthDisposeCallback=at}v.__boundDepthTexture=$}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let $=0;$<6;$++)se(v.__webglFramebuffer[$],C,$);else{let $=C.texture.mipmaps;$&&$.length>0?se(v.__webglFramebuffer[0],C,0):se(v.__webglFramebuffer,C,0)}else if(O){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=i.createRenderbuffer(),Gt(v.__webglDepthbuffer[$],C,!1);else{let at=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=v.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,vt)}}else{let $=C.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Gt(v.__webglDepthbuffer,C,!1);else{let at=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,vt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(C,v,O){let $=n.get(C);v!==void 0&&Rt($.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&lt(C)}function gt(C){let v=C.texture,O=n.get(C),$=n.get(v);C.addEventListener("dispose",_);let at=C.textures,vt=C.isWebGLCubeRenderTarget===!0,xt=at.length>1;if(xt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,a.memory.textures++),vt){O.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ot]=[];for(let ut=0;ut<v.mipmaps.length;ut++)O.__webglFramebuffer[ot][ut]=i.createFramebuffer()}else O.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ot=0;ot<v.mipmaps.length;ot++)O.__webglFramebuffer[ot]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(xt)for(let ot=0,ut=at.length;ot<ut;ot++){let bt=n.get(at[ot]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Xt(C)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ot=0;ot<at.length;ot++){let ut=at[ot];O.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ot]);let bt=r.convert(ut.format,ut.colorSpace),kt=r.convert(ut.type),wt=y(ut.internalFormat,bt,kt,ut.normalized,ut.colorSpace,C.isXRRenderTarget===!0),Et=zt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,wt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,O.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Gt(O.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(vt){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,v);for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)Rt(O.__webglFramebuffer[ot][ut],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else Rt(O.__webglFramebuffer[ot],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(v)&&T(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ot=0,ut=at.length;ot<ut;ot++){let bt=at[ot],kt=n.get(bt),wt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(wt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,kt.__webglTexture),Mt(wt,bt),Rt(O.__webglFramebuffer,C,bt,i.COLOR_ATTACHMENT0+ot,wt,0),p(bt)&&T(wt)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ot=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,$.__webglTexture),Mt(ot,v),v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)Rt(O.__webglFramebuffer[ut],C,v,i.COLOR_ATTACHMENT0,ot,ut);else Rt(O.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,ot,0);p(v)&&T(ot),e.unbindTexture()}C.depthBuffer&&lt(C)}function yt(C){let v=C.textures;for(let O=0,$=v.length;O<$;O++){let at=v[O];if(p(at)){let vt=R(C),xt=n.get(at).__webglTexture;e.bindTexture(vt,xt),T(vt),e.unbindTexture()}}}let St=[],Wt=[];function Ut(C){if(C.samples>0){if(Xt(C)===!1){let v=C.textures,O=C.width,$=C.height,at=i.COLOR_BUFFER_BIT,vt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(C),ot=v.length>1;if(ot)for(let bt=0;bt<v.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);let ut=C.texture.mipmaps;ut&&ut.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let bt=0;bt<v.length;bt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[bt]);let kt=n.get(v[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,kt,0)}i.blitFramebuffer(0,0,O,$,0,0,O,$,at,i.NEAREST),l===!0&&(St.length=0,Wt.length=0,St.push(i.COLOR_ATTACHMENT0+bt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(St.push(vt),Wt.push(vt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Wt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,St))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let bt=0;bt<v.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[bt]);let kt=n.get(v[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function zt(C){return Math.min(s.maxSamples,C.samples)}function Xt(C){let v=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function k(C){let v=a.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function ce(C,v){let O=C.colorSpace,$=C.format,at=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Or&&O!==Wn&&(oe.getTransfer(O)===me?($!==Rn||at!==hn)&&Yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",O)),v}function jt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=st,this.resetTextureUnits=J,this.getTextureUnits=H,this.setTextureUnits=V,this.setTexture2D=W,this.setTexture2DArray=B,this.setTexture3D=Y,this.setTextureCube=j,this.rebindTextures=ct,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function iv(i,t){function e(n,s=Wn){let r,a=oe.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===Ko)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===$c)return i.BYTE;if(n===Kc)return i.SHORT;if(n===or)return i.UNSIGNED_SHORT;if(n===$o)return i.INT;if(n===Hn)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===Gn)return i.HALF_FLOAT;if(n===th)return i.ALPHA;if(n===eh)return i.RGB;if(n===Rn)return i.RGBA;if(n===jn)return i.DEPTH_COMPONENT;if(n===Ni)return i.DEPTH_STENCIL;if(n===nh)return i.RED;if(n===Qo)return i.RED_INTEGER;if(n===Ui)return i.RG;if(n===tl)return i.RG_INTEGER;if(n===el)return i.RGBA_INTEGER;if(n===fa||n===pa||n===ma||n===ga)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nl||n===il||n===sl||n===rl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===al||n===ol||n===ll||n===cl||n===hl||n===_a||n===ul)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===al||n===ol)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ll)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===cl)return r.COMPRESSED_R11_EAC;if(n===hl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_a)return r.COMPRESSED_RG11_EAC;if(n===ul)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===yl||n===Ml||n===Sl||n===bl||n===El||n===Tl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===dl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ml)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_l)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ml)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===El)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wl||n===Al||n===Rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===wl)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cl||n===Pl||n===xa||n===Il)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Cl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===lr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rv=`
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

}`,Eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Yr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new xn({vertexShader:sv,fragmentShader:rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new An(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Th=class extends Fn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,E=typeof XRWebGLBinding<"u",m=new Eh,p={},T=e.getContextAttributes(),R=null,y=null,A=[],w=[],N=new mt,_=null,x=null,U=new qe;U.viewport=new Re;let z=new qe;z.viewport=new Re;let q=[U,z],J=new qo,H=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let it=A[X];return it===void 0&&(it=new Ys,A[X]=it),it.getTargetRaySpace()},this.getControllerGrip=function(X){let it=A[X];return it===void 0&&(it=new Ys,A[X]=it),it.getGripSpace()},this.getHand=function(X){let it=A[X];return it===void 0&&(it=new Ys,A[X]=it),it.getHandSpace()};function st(X){let it=w.indexOf(X.inputSource);if(it===-1)return;let _t=A[it];_t!==void 0&&(_t.update(X.inputSource,X.frame,c||a),_t.dispatchEvent({type:X.type,data:X.inputSource}))}function I(){s.removeEventListener("select",st),s.removeEventListener("selectstart",st),s.removeEventListener("selectend",st),s.removeEventListener("squeeze",st),s.removeEventListener("squeezestart",st),s.removeEventListener("squeezeend",st),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",W);for(let X=0;X<A.length;X++){let it=w[X];it!==null&&(w[X]=null,A[X].disconnect(it))}H=null,V=null,m.reset();for(let X in p)delete p[X];if(t.setRenderTarget(R),f=null,u=null,d=null,s=null,y=null,Tt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(N.width,N.height,!1),x!==null){let X=x.camera;X.fov=x.fov,X.zoom=x.zoom,X.updateProjectionMatrix(),x=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&Yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&Yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&E&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",st),s.addEventListener("selectstart",st),s.addEventListener("selectend",st),s.addEventListener("squeeze",st),s.addEventListener("squeezestart",st),s.addEventListener("squeezeend",st),s.addEventListener("end",I),s.addEventListener("inputsourceschange",W),T.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(N),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Bt=null,Rt=null;T.depth&&(Rt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=T.stencil?Ni:jn,Bt=T.stencil?lr:Hn);let Gt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Gt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new cn(u.textureWidth,u.textureHeight,{format:Rn,type:hn,depthTexture:new Si(u.textureWidth,u.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _t={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new cn(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Tt.setContext(s),Tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(X){for(let it=0;it<X.removed.length;it++){let _t=X.removed[it],Bt=w.indexOf(_t);Bt>=0&&(w[Bt]=null,A[Bt].disconnect(_t))}for(let it=0;it<X.added.length;it++){let _t=X.added[it],Bt=w.indexOf(_t);if(Bt===-1){for(let Gt=0;Gt<A.length;Gt++)if(Gt>=w.length){w.push(_t),Bt=Gt;break}else if(w[Gt]===null){w[Gt]=_t,Bt=Gt;break}if(Bt===-1)break}let Rt=A[Bt];Rt&&Rt.connect(_t)}}let B=new F,Y=new F;function j(X,it,_t){B.setFromMatrixPosition(it.matrixWorld),Y.setFromMatrixPosition(_t.matrixWorld);let Bt=B.distanceTo(Y),Rt=it.projectionMatrix.elements,Gt=_t.projectionMatrix.elements,se=Rt[14]/(Rt[10]-1),lt=Rt[14]/(Rt[10]+1),ct=(Rt[9]+1)/Rt[5],gt=(Rt[9]-1)/Rt[5],yt=(Rt[8]-1)/Rt[0],St=(Gt[8]+1)/Gt[0],Wt=se*yt,Ut=se*St,zt=Bt/(-yt+St),Xt=zt*-yt;if(it.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Xt),X.translateZ(zt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Rt[10]===-1)X.projectionMatrix.copy(it.projectionMatrix),X.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let k=se+zt,ce=lt+zt,jt=Wt-Xt,C=Ut+(Bt-Xt),v=ct*lt/ce*k,O=gt*lt/ce*k;X.projectionMatrix.makePerspective(jt,C,v,O,k,ce),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function pt(X,it){it===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(it.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let it=X.near,_t=X.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),J.near=z.near=U.near=it,J.far=z.far=U.far=_t,(H!==J.near||V!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),H=J.near,V=J.far),J.layers.mask=X.layers.mask|6,U.layers.mask=J.layers.mask&-5,z.layers.mask=J.layers.mask&-3;let Bt=X.parent,Rt=J.cameras;pt(J,Bt);for(let Gt=0;Gt<Rt.length;Gt++)pt(Rt[Gt],Bt);Rt.length===2?j(J,U,z):J.projectionMatrix.copy(U.projectionMatrix),x===null&&X.isPerspectiveCamera&&(x={camera:X,fov:X.fov,zoom:X.zoom}),ht(X,J,Bt)};function ht(X,it,_t){_t===null?X.matrix.copy(it.matrixWorld):(X.matrix.copy(_t.matrixWorld),X.matrix.invert(),X.matrix.multiply(it.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(it.projectionMatrix),X.projectionMatrixInverse.copy(it.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ws*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(J)},this.getCameraTexture=function(X){return p[X]};let rt=null;function Mt(X,it){if(h=it.getViewerPose(c||a),g=it,h!==null){let _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Bt=!1;_t.length!==J.cameras.length&&(J.cameras.length=0,Bt=!0);for(let lt=0;lt<_t.length;lt++){let ct=_t[lt],gt=null;if(f!==null)gt=f.getViewport(ct);else{let St=d.getViewSubImage(u,ct);gt=St.viewport,lt===0&&(t.setRenderTargetTextures(y,St.colorTexture,St.depthStencilTexture),t.setRenderTarget(y))}let yt=q[lt];yt===void 0&&(yt=new qe,yt.layers.enable(lt),yt.viewport=new Re,q[lt]=yt),yt.matrix.fromArray(ct.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(ct.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(gt.x,gt.y,gt.width,gt.height),lt===0&&(J.matrix.copy(yt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Bt===!0&&J.cameras.push(yt)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){d=n.getBinding();let lt=d.getDepthInformation(_t[0]);lt&&lt.isValid&&lt.texture&&m.init(lt,s.renderState)}if(Rt&&Rt.includes("camera-access")&&E){t.state.unbindTexture(),d=n.getBinding();for(let lt=0;lt<_t.length;lt++){let ct=_t[lt].camera;if(ct){let gt=p[ct];gt||(gt=new Yr,p[ct]=gt);let yt=d.getCameraImage(ct);gt.sourceTexture=yt}}}}for(let _t=0;_t<A.length;_t++){let Bt=w[_t],Rt=A[_t];Bt!==null&&Rt!==void 0&&Rt.update(Bt,it,c||a)}rt&&rt(X,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}let Tt=new Jd;Tt.setAnimationLoop(Mt),this.setAnimationLoop=function(X){rt=X},this.dispose=function(){}}},av=new Ee,ef=new $t;ef.set(-1,0,0,0,1,0,0,0,1);function ov(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,oh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,R,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),E(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,R):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=t.get(p),R=T.envMap,y=T.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(av.makeRotationFromEuler(y)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ef),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=R*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function E(m,p){let T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lv(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,A){let w=A.program;n.uniformBlockBinding(y,w)}function c(y,A){let w=s[y.id];w===void 0&&(m(y),w=h(y),s[y.id]=w,y.addEventListener("dispose",T));let N=A.program;n.updateUBOMapping(y,N);let _=t.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){let A=d();y.__bindingPointIndex=A;let w=i.createBuffer(),N=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,N,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,w),w}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let A=s[y.id],w=y.uniforms,N=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let _=0,x=w.length;_<x;_++){let U=w[_];if(Array.isArray(U))for(let z=0,q=U.length;z<q;z++)f(U[z],_,z,N);else f(U,_,0,N)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,A,w,N){if(E(y,A,w,N)===!0){let _=y.__offset,x=y.value;if(Array.isArray(x)){let U=0;for(let z=0;z<x.length;z++){let q=x[z],J=p(q);g(q,y.__data,U),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(U+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(x,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function g(y,A,w){typeof y=="number"||typeof y=="boolean"?A[0]=y:y.isMatrix3?(A[0]=y.elements[0],A[1]=y.elements[1],A[2]=y.elements[2],A[3]=0,A[4]=y.elements[3],A[5]=y.elements[4],A[6]=y.elements[5],A[7]=0,A[8]=y.elements[6],A[9]=y.elements[7],A[10]=y.elements[8],A[11]=0):ArrayBuffer.isView(y)?A.set(new y.constructor(y.buffer,y.byteOffset,A.length)):y.toArray(A,w)}function E(y,A,w,N){let _=y.value,x=A+"_"+w;if(N[x]===void 0)return typeof _=="number"||typeof _=="boolean"?N[x]=_:ArrayBuffer.isView(_)?N[x]=_.slice():N[x]=_.clone(),!0;{let U=N[x];if(typeof _=="number"||typeof _=="boolean"){if(U!==_)return N[x]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(U.equals(_)===!1)return U.copy(_),!0}}return!1}function m(y){let A=y.uniforms,w=0,N=16;for(let x=0,U=A.length;x<U;x++){let z=Array.isArray(A[x])?A[x]:[A[x]];for(let q=0,J=z.length;q<J;q++){let H=z[q],V=Array.isArray(H.value)?H.value:[H.value];for(let st=0,I=V.length;st<I;st++){let W=V[st],B=p(W),Y=w%N,j=Y%B.boundary,pt=Y+j;w+=j,pt!==0&&N-pt<B.storage&&(w+=N-pt),H.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=w,w+=B.storage}}}let _=w%N;return _>0&&(w+=N-_),y.__size=w,y.__cache={},this}function p(y){let A={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(A.boundary=4,A.storage=4):y.isVector2?(A.boundary=8,A.storage=8):y.isVector3||y.isColor?(A.boundary=16,A.storage=12):y.isVector4?(A.boundary=16,A.storage=16):y.isMatrix3?(A.boundary=48,A.storage=48):y.isMatrix4?(A.boundary=64,A.storage=64):y.isTexture?Yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(A.boundary=16,A.storage=y.byteLength):Yt("WebGLRenderer: Unsupported uniform value type.",y),A}function T(y){let A=y.target;A.removeEventListener("dispose",T);let w=a.indexOf(A.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function R(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}var cv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ti=null;function hv(){return ti===null&&(ti=new So(cv,16,16,Ui,Gn),ti.name="DFG_LUT",ti.minFilter=Ze,ti.magFilter=Ze,ti.wrapS=mn,ti.wrapT=mn,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}var Bl=class{constructor(t={}){let{canvas:e=md(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=hn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let E=f,m=new Set([el,tl,Qo]),p=new Set([hn,Hn,or,lr,Ko,jo]),T=new Uint32Array(4),R=new Int32Array(4),y=new F,A=null,w=null,N=[],_=[],x=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,z=!1,q=null,J=null,H=null,V=null;this._outputColorSpace=Oe;let st=0,I=0,W=null,B=-1,Y=null,j=new Re,pt=new Re,ht=null,rt=new Zt(0),Mt=0,Tt=e.width,X=e.height,it=1,_t=null,Bt=null,Rt=new Re(0,0,Tt,X),Gt=new Re(0,0,Tt,X),se=!1,lt=new Ks,ct=!1,gt=!1,yt=new Ee,St=new F,Wt=new Re,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},zt=!1;function Xt(){return W===null?it:1}let k=n;function ce(b,G){return e.getContext(b,G)}let jt,C,v,O,$,at,vt,xt,ot,ut,bt,kt,wt,Et,Ht,S,P,M,D,L,Z,nt,K;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Pt,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",fe,!1),k===null){let G="webgl2";if(k=ce(G,b),k===null)throw ce(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}dt()}catch(b){throw e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),qt("WebGLRenderer: "+b.message),b}function dt(){jt=new __(k),jt.init(),Z=new iv(k,jt),C=new o_(k,jt,t,Z),v=new ev(k,jt),C.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),J=k.createFramebuffer(),H=k.createFramebuffer(),V=k.createFramebuffer(),O=new y_(k),$=new Hx,at=new nv(k,jt,v,$,C,Z,O),vt=new g_(U),xt=new Sm(k),nt=new r_(k,xt),ot=new x_(k,xt,O,nt),ut=new S_(k,ot,xt,nt,O),M=new M_(k,C,at),Ht=new l_($),bt=new kx(U,vt,jt,C,nt,Ht),kt=new ov(U,$),wt=new Gx,Et=new Jx(jt),P=new s_(U,vt,v,ut,g,l),S=new tv(U,ut,C),K=new lv(k,O,C,v),D=new a_(k,jt,O),L=new v_(k,jt,O),O.programs=bt.programs,U.capabilities=C,U.extensions=jt,U.properties=$,U.renderLists=wt,U.shadowMap=S,U.state=v,U.info=O}E!==hn&&(x=new E_(E,e.width,e.height,o,s,r));let ft=new Th(U,k);this.xr=ft,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let b=jt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=jt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(b){b!==void 0&&(it=b,this.setSize(Tt,X,!1))},this.getSize=function(b){return b.set(Tt,X)},this.setSize=function(b,G,et=!0){if(ft.isPresenting){Yt("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=b,X=G,e.width=Math.floor(b*it),e.height=Math.floor(G*it),et===!0&&(e.style.width=b+"px",e.style.height=G+"px"),x!==null&&x.setSize(e.width,e.height),this.setViewport(0,0,b,G)},this.getDrawingBufferSize=function(b){return b.set(Tt*it,X*it).floor()},this.setDrawingBufferSize=function(b,G,et){Tt=b,X=G,it=et,e.width=Math.floor(b*et),e.height=Math.floor(G*et),this.setViewport(0,0,b,G)},this.setEffects=function(b){if(E===hn){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let G=0;G<b.length;G++)if(b[G].isOutputPass===!0){Yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(j)},this.getViewport=function(b){return b.copy(Rt)},this.setViewport=function(b,G,et,Q){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,G,et,Q),v.viewport(j.copy(Rt).multiplyScalar(it).round())},this.getScissor=function(b){return b.copy(Gt)},this.setScissor=function(b,G,et,Q){b.isVector4?Gt.set(b.x,b.y,b.z,b.w):Gt.set(b,G,et,Q),v.scissor(pt.copy(Gt).multiplyScalar(it).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(b){v.setScissorTest(se=b)},this.setOpaqueSort=function(b){_t=b},this.setTransparentSort=function(b){Bt=b},this.getClearColor=function(b){return b.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(b=!0,G=!0,et=!0){let Q=0;if(b){let tt=!1;if(W!==null){let Lt=W.texture.format;tt=m.has(Lt)}if(tt){let Lt=W.texture.type,Nt=p.has(Lt),Ct=P.getClearColor(),Ft=P.getClearAlpha(),Vt=Ct.r,Qt=Ct.g,re=Ct.b;Nt?(T[0]=Vt,T[1]=Qt,T[2]=re,T[3]=Ft,k.clearBufferuiv(k.COLOR,0,T)):(R[0]=Vt,R[1]=Qt,R[2]=re,R[3]=Ft,k.clearBufferiv(k.COLOR,0,R))}else Q|=k.COLOR_BUFFER_BIT}G&&(Q|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(Q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&k.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),q=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),P.dispose(),wt.dispose(),Et.dispose(),$.dispose(),vt.dispose(),ut.dispose(),nt.dispose(),K.dispose(),bt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",br),ft.removeEventListener("sessionend",Jh),ki.stop()};function Pt(b){b.preventDefault(),zr("WebGLRenderer: Context Lost."),z=!0}function It(){zr("WebGLRenderer: Context Restored."),z=!1;let b=O.autoReset,G=S.enabled,et=S.autoUpdate,Q=S.needsUpdate,tt=S.type;dt(),O.autoReset=b,S.enabled=G,S.autoUpdate=et,S.needsUpdate=Q,S.type=tt}function fe(b){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ve(b){let G=b.target;G.removeEventListener("dispose",ve),Ne(G)}function Ne(b){Sn(b),$.remove(b)}function Sn(b){let G=$.get(b).programs;G!==void 0&&(G.forEach(function(et){bt.releaseProgram(et)}),b.isShaderMaterial&&bt.releaseShaderCache(b))}this.renderBufferDirect=function(b,G,et,Q,tt,Lt){G===null&&(G=Ut);let Nt=tt.isMesh&&tt.matrixWorld.determinantAffine()<0,Ct=Xf(b,G,et,Q,tt);v.setMaterial(Q,Nt);let Ft=et.index,Vt=1;if(Q.wireframe===!0){if(Ft=ot.getWireframeAttribute(et),Ft===void 0)return;Vt=2}let Qt=et.drawRange,re=et.attributes.position,Ot=Qt.start*Vt,pe=(Qt.start+Qt.count)*Vt;Lt!==null&&(Ot=Math.max(Ot,Lt.start*Vt),pe=Math.min(pe,(Lt.start+Lt.count)*Vt)),Ft!==null?(Ot=Math.max(Ot,0),pe=Math.min(pe,Ft.count)):re!=null&&(Ot=Math.max(Ot,0),pe=Math.min(pe,re.count));let Ue=pe-Ot;if(Ue<0||Ue===1/0)return;nt.setup(tt,Q,Ct,et,Ft);let we,ye=D;if(Ft!==null&&(we=xt.get(Ft),ye=L,ye.setIndex(we)),tt.isMesh)Q.wireframe===!0?(v.setLineWidth(Q.wireframeLinewidth*Xt()),ye.setMode(k.LINES)):ye.setMode(k.TRIANGLES);else if(tt.isLine){let Ke=Q.linewidth;Ke===void 0&&(Ke=1),v.setLineWidth(Ke*Xt()),tt.isLineSegments?ye.setMode(k.LINES):tt.isLineLoop?ye.setMode(k.LINE_LOOP):ye.setMode(k.LINE_STRIP)}else tt.isPoints?ye.setMode(k.POINTS):tt.isSprite&&ye.setMode(k.TRIANGLES);if(tt.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))ye.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let Ke=tt._multiDrawStarts,Dt=tt._multiDrawCounts,sn=tt._multiDrawCount,ue=Ft?xt.get(Ft).bytesPerElement:1,bn=$.get(Q).currentProgram.getUniforms();for(let Zn=0;Zn<sn;Zn++)bn.setValue(k,"_gl_DrawID",Zn),ye.render(Ke[Zn]/ue,Dt[Zn])}else if(tt.isInstancedMesh)ye.renderInstances(Ot,Ue,tt.count);else if(et.isInstancedBufferGeometry){let Ke=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Dt=Math.min(et.instanceCount,Ke);ye.renderInstances(Ot,Ue,Dt)}else ye.render(Ot,Ue)};function $e(b,G,et,Q){q!==null&&b.isNodeMaterial&&q.setObject(Q,b),ct===!0&&Ht.setState(b,et,!1),b.transparent===!0&&b.side===Be&&b.forceSinglePass===!1?(b.side=on,b.needsUpdate=!0,Ua(b,G,Q),b.side=Ii,b.needsUpdate=!0,Ua(b,G,Q),b.side=Be):Ua(b,G,Q)}this.compile=function(b,G,et=null){et===null&&(et=b),q!==null&&q.renderStart(b,G,et),w=Et.get(et),w.init(G),_.push(w),et.traverseVisible(function(tt){tt.isLight&&tt.layers.test(G.layers)&&(w.pushLight(tt),tt.castShadow&&w.pushShadow(tt))}),b!==et&&b.traverseVisible(function(tt){tt.isLight&&tt.layers.test(G.layers)&&(w.pushLight(tt),tt.castShadow&&w.pushShadow(tt))}),w.setupLights(),q!==null&&q.updateLights(w.state.lightsArray),gt=this.localClippingEnabled,ct=Ht.init(this.clippingPlanes,gt),ct===!0&&Ht.setGlobalState(this.clippingPlanes,G),q!==null&&S.render(w.state.shadowsArray,et,G);let Q=new Set;return b.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let Lt=tt.material;if(Lt)if(Array.isArray(Lt))for(let Nt=0;Nt<Lt.length;Nt++){let Ct=Lt[Nt];$e(Ct,et,G,tt),Q.add(Ct)}else $e(Lt,et,G,tt),Q.add(Lt)}),w=_.pop(),q!==null&&q.renderEnd(),Q},this.compileAsync=function(b,G,et=null){let Q=this.compile(b,G,et);return new Promise(tt=>{function Lt(){if(Q.forEach(function(Nt){let Ft=$.get(Nt).currentProgram;(Ft===void 0||Ft.isReady())&&Q.delete(Nt)}),Q.size===0){tt(b);return}setTimeout(Lt,10)}jt.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Mr=null;function Sr(b){Mr&&Mr(b)}function br(){ki.stop()}function Jh(){ki.start()}let ki=new Jd;ki.setAnimationLoop(Sr),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(b){Mr=b,ft.setAnimationLoop(b),b===null?ki.stop():ki.start()},ft.addEventListener("sessionstart",br),ft.addEventListener("sessionend",Jh),this.render=function(b,G){if(G!==void 0&&G.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;q!==null&&q.renderStart(b,G);let et=ft.enabled===!0&&ft.isPresenting===!0,Q=x!==null&&(W===null||et)&&x.begin(U,W);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(G),G=ft.getCamera()),b.isScene===!0&&b.onBeforeRender(U,b,G,W),w=Et.get(b,_.length),w.init(G),w.state.textureUnits=at.getTextureUnits(),_.push(w),yt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),lt.setFromProjectionMatrix(yt,Un,G.reversedDepth),gt=this.localClippingEnabled,ct=Ht.init(this.clippingPlanes,gt),A=wt.get(b,N.length),A.init(),N.push(A),ft.enabled===!0&&ft.isPresenting===!0){let Nt=U.xr.getDepthSensingMesh();Nt!==null&&tc(Nt,G,-1/0,U.sortObjects)}tc(b,G,0,U.sortObjects),A.finish(),q!==null&&q.updateLights(w.state.lightsArray),U.sortObjects===!0&&A.sort(_t,Bt),zt=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,zt&&P.addToRenderList(A,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&Ht.beginShadows();let tt=w.state.shadowsArray;if(S.render(tt,b,G),ct===!0&&Ht.endShadows(),(Q&&x.hasRenderPass())===!1){let Nt=A.opaque,Ct=A.transmissive;if(w.setupLights(),G.isArrayCamera){let Ft=G.cameras;if(Ct.length>0)for(let Vt=0,Qt=Ft.length;Vt<Qt;Vt++){let re=Ft[Vt];Kh(Nt,Ct,b,re)}zt&&P.render(b);for(let Vt=0,Qt=Ft.length;Vt<Qt;Vt++){let re=Ft[Vt];$h(A,b,re,re.viewport)}}else Ct.length>0&&Kh(Nt,Ct,b,G),zt&&P.render(b),$h(A,b,G)}W!==null&&I===0&&(at.updateMultisampleRenderTarget(W),at.updateRenderTargetMipmap(W)),Q&&x.end(U),b.isScene===!0&&b.onAfterRender(U,b,G),nt.resetDefaultState(),B=-1,Y=null,_.pop(),_.length>0?(w=_[_.length-1],at.setTextureUnits(w.state.textureUnits),ct===!0&&Ht.setGlobalState(U.clippingPlanes,w.state.camera)):w=null,N.pop(),N.length>0?A=N[N.length-1]:A=null,q!==null&&q.renderEnd()};function tc(b,G,et,Q){if(b.visible===!1)return;if(b.layers.test(G.layers)){if(b.isGroup)et=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(G);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(lt)){Q&&Wt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(yt);let Nt=ut.update(b),Ct=b.material;Ct.visible&&A.push(b,Nt,Ct,et,Wt.z,null,G)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(lt))){let Nt=ut.update(b),Ct=b.material;if(Q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Wt.copy(b.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),Wt.copy(Nt.boundingSphere.center)),Wt.applyMatrix4(b.matrixWorld).applyMatrix4(yt)),Array.isArray(Ct)){let Ft=Nt.groups;for(let Vt=0,Qt=Ft.length;Vt<Qt;Vt++){let re=Ft[Vt],Ot=Ct[re.materialIndex];Ot&&Ot.visible&&A.push(b,Nt,Ot,et,Wt.z,re,G)}}else Ct.visible&&A.push(b,Nt,Ct,et,Wt.z,null,G)}}let Lt=b.children;for(let Nt=0,Ct=Lt.length;Nt<Ct;Nt++)tc(Lt[Nt],G,et,Q)}function $h(b,G,et,Q){let{opaque:tt,transmissive:Lt,transparent:Nt}=b;w.setupLightsView(et),ct===!0&&Ht.setGlobalState(U.clippingPlanes,et),Q&&v.viewport(j.copy(Q)),tt.length>0&&Na(tt,G,et),Lt.length>0&&Na(Lt,G,et),Nt.length>0&&Na(Nt,G,et),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Kh(b,G,et,Q){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Q.id]===void 0){let Ot=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Q.id]=new cn(1,1,{generateMipmaps:!0,type:Ot?Gn:hn,minFilter:Di,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let Lt=w.state.transmissionRenderTarget[Q.id],Nt=Q.viewport||j;Lt.setSize(Nt.z*U.transmissionResolutionScale,Nt.w*U.transmissionResolutionScale);let Ct=U.getRenderTarget(),Ft=U.getActiveCubeFace(),Vt=U.getActiveMipmapLevel();U.setRenderTarget(Lt),U.getClearColor(rt),Mt=U.getClearAlpha(),Mt<1&&U.setClearColor(16777215,.5),U.clear(),zt&&P.render(et);let Qt=U.toneMapping;U.toneMapping=kn;let re=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),w.setupLightsView(Q),ct===!0&&Ht.setGlobalState(U.clippingPlanes,Q),Na(b,et,Q),at.updateMultisampleRenderTarget(Lt),at.updateRenderTargetMipmap(Lt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let pe=0,Ue=G.length;pe<Ue;pe++){let we=G[pe],{object:ye,geometry:Ke,material:Dt,group:sn}=we;if(Dt.side===Be&&ye.layers.test(Q.layers)){let ue=Dt.side;Dt.side=on,Dt.needsUpdate=!0,jh(ye,et,Q,Ke,Dt,sn),Dt.side=ue,Dt.needsUpdate=!0,Ot=!0}}Ot===!0&&(at.updateMultisampleRenderTarget(Lt),at.updateRenderTargetMipmap(Lt))}U.setRenderTarget(Ct,Ft,Vt),U.setClearColor(rt,Mt),re!==void 0&&(Q.viewport=re),U.toneMapping=Qt}function Na(b,G,et){let Q=G.isScene===!0?G.overrideMaterial:null;for(let tt=0,Lt=b.length;tt<Lt;tt++){let Nt=b[tt],{object:Ct,geometry:Ft,group:Vt}=Nt,Qt=Nt.material;Qt.allowOverride===!0&&Q!==null&&(Qt=Q),Ct.layers.test(et.layers)&&jh(Ct,G,et,Ft,Qt,Vt)}}function jh(b,G,et,Q,tt,Lt){q!==null&&tt.isNodeMaterial&&q.setObject(b,tt),b.onBeforeRender(U,G,et,Q,tt,Lt),b.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),tt.onBeforeRender(U,G,et,Q,b,Lt),tt.transparent===!0&&tt.side===Be&&tt.forceSinglePass===!1?(tt.side=on,tt.needsUpdate=!0,U.renderBufferDirect(et,G,Q,tt,b,Lt),tt.side=Ii,tt.needsUpdate=!0,U.renderBufferDirect(et,G,Q,tt,b,Lt),tt.side=Be):U.renderBufferDirect(et,G,Q,tt,b,Lt),b.onAfterRender(U,G,et,Q,tt,Lt)}function Ua(b,G,et){G.isScene!==!0&&(G=Ut);let Q=$.get(b),tt=w.state.lights,Lt=w.state.shadowsArray,Nt=tt.state.version,Ct=bt.getParameters(b,tt.state,Lt,G,et,w.state.lightProbeGridArray),Ft=bt.getProgramCacheKey(Ct),Vt=Q.programs;Q.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?G.environment:null,Q.fog=G.fog;let Qt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;Q.envMap=vt.get(b.envMap||Q.environment,Qt),Q.envMapRotation=Q.environment!==null&&b.envMap===null?G.environmentRotation:b.envMapRotation,Vt===void 0&&(b.addEventListener("dispose",ve),Vt=new Map,Q.programs=Vt);let re=Vt.get(Ft);if(re!==void 0){if(Q.currentProgram===re&&Q.lightsStateVersion===Nt)return tu(b,Ct),re}else Ct.uniforms=bt.getUniforms(b),q!==null&&b.isNodeMaterial&&q.build(b,et,Ct),b.onBeforeCompile(Ct,U),re=bt.acquireProgram(Ct,Ft),Vt.set(Ft,re),Q.uniforms=Ct.uniforms;let Ot=Q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ot.clippingPlanes=Ht.uniform),tu(b,Ct),Q.needsLights=Yf(b),Q.lightsStateVersion=Nt,Q.needsLights&&(Ot.ambientLightColor.value=tt.state.ambient,Ot.lightProbe.value=tt.state.probe,Ot.sunLights.value=tt.state.sun,Ot.sunLightShadows.value=tt.state.sunShadow,Ot.directionalLights.value=tt.state.directional,Ot.directionalLightShadows.value=tt.state.directionalShadow,Ot.spotLights.value=tt.state.spot,Ot.spotLightShadows.value=tt.state.spotShadow,Ot.rectAreaLights.value=tt.state.rectArea,Ot.ltc_1.value=tt.state.rectAreaLTC1,Ot.ltc_2.value=tt.state.rectAreaLTC2,Ot.pointLights.value=tt.state.point,Ot.pointLightShadows.value=tt.state.pointShadow,Ot.hemisphereLights.value=tt.state.hemi,Ot.sunShadowMatrix.value=tt.state.sunShadowMatrix,Ot.sunShadowCascade.value=tt.state.sunShadowCascade,Ot.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Ot.spotLightMatrix.value=tt.state.spotLightMatrix,Ot.spotLightMap.value=tt.state.spotLightMap,Ot.pointShadowMatrix.value=tt.state.pointShadowMatrix),Q.lightProbeGrid=w.state.lightProbeGridArray.length>0,Q.currentProgram=re,Q.uniformsList=null,re}function Qh(b){if(b.uniformsList===null){let G=b.currentProgram.getUniforms();b.uniformsList=dr.seqWithValue(G.seq,b.uniforms)}return b.uniformsList}function tu(b,G){let et=$.get(b);et.outputColorSpace=G.outputColorSpace,et.batching=G.batching,et.batchingColor=G.batchingColor,et.instancing=G.instancing,et.instancingColor=G.instancingColor,et.instancingMorph=G.instancingMorph,et.skinning=G.skinning,et.morphTargets=G.morphTargets,et.morphNormals=G.morphNormals,et.morphColors=G.morphColors,et.morphTargetsCount=G.morphTargetsCount,et.numClippingPlanes=G.numClippingPlanes,et.numIntersection=G.numClipIntersection,et.vertexAlphas=G.vertexAlphas,et.vertexTangents=G.vertexTangents,et.toneMapping=G.toneMapping}function Wf(b,G){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(G.matrixWorld);for(let et=0,Q=b.length;et<Q;et++){let tt=b[et];if(tt.texture!==null&&tt.boundingBox.containsPoint(y))return tt}return null}function Xf(b,G,et,Q,tt){G.isScene!==!0&&(G=Ut),at.resetTextureUnits();let Lt=G.fog,Nt=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?G.environment:null,Ct=W===null?U.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:oe.workingColorSpace,Ft=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Vt=vt.get(Q.envMap||Nt,Ft),Qt=Q.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,re=!!et.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ot=!!et.morphAttributes.position,pe=!!et.morphAttributes.normal,Ue=!!et.morphAttributes.color,we=kn;Q.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(we=U.toneMapping);let ye=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Ke=ye!==void 0?ye.length:0,Dt=$.get(Q),sn=w.state.lights;if(ct===!0&&(gt===!0||b!==Y)){let Se=b===Y&&Q.id===B;Ht.setState(Q,b,Se)}let ue=!1;Q.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==sn.state.version||Dt.outputColorSpace!==Ct||tt.isBatchedMesh&&Dt.batching===!1||!tt.isBatchedMesh&&Dt.batching===!0||tt.isBatchedMesh&&Dt.batchingColor===!0&&tt._colorsTexture===null||tt.isBatchedMesh&&Dt.batchingColor===!1&&tt._colorsTexture!==null||tt.isInstancedMesh&&Dt.instancing===!1||!tt.isInstancedMesh&&Dt.instancing===!0||tt.isSkinnedMesh&&Dt.skinning===!1||!tt.isSkinnedMesh&&Dt.skinning===!0||tt.isInstancedMesh&&Dt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Dt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Dt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Dt.instancingMorph===!1&&tt.morphTexture!==null||Dt.envMap!==Vt||Q.fog===!0&&Dt.fog!==Lt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==Ht.numPlanes||Dt.numIntersection!==Ht.numIntersection)||Dt.vertexAlphas!==Qt||Dt.vertexTangents!==re||Dt.morphTargets!==Ot||Dt.morphNormals!==pe||Dt.morphColors!==Ue||Dt.toneMapping!==we||Dt.morphTargetsCount!==Ke||!!Dt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ue=!0):(ue=!0,Dt.__version=Q.version);let bn=Dt.currentProgram;ue===!0&&(bn=Ua(Q,G,tt),q&&Q.isNodeMaterial&&q.onUpdateProgram(Q,bn,Dt));let Zn=!1,fi=!1,xs=!1,xe=bn.getUniforms(),Ie=Dt.uniforms;if(v.useProgram(bn.program)&&(Zn=!0,fi=!0,xs=!0),Q.id!==B&&(B=Q.id,fi=!0),Dt.needsLights){let Se=Wf(w.state.lightProbeGridArray,tt);Dt.lightProbeGrid!==Se&&(Dt.lightProbeGrid=Se,fi=!0)}if(Zn||Y!==b){v.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),xe.setValue(k,"projectionMatrix",b.projectionMatrix),xe.setValue(k,"viewMatrix",b.matrixWorldInverse);let mi=xe.map.cameraPosition;mi!==void 0&&mi.setValue(k,St.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&xe.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&xe.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),Y!==b&&(Y=b,fi=!0,xs=!0)}if(Dt.needsLights&&(sn.state.sunShadowMap.length>0&&xe.setValue(k,"sunShadowMap",sn.state.sunShadowMap,at),sn.state.directionalShadowMap.length>0&&xe.setValue(k,"directionalShadowMap",sn.state.directionalShadowMap,at),sn.state.spotShadowMap.length>0&&xe.setValue(k,"spotShadowMap",sn.state.spotShadowMap,at),sn.state.pointShadowMap.length>0&&xe.setValue(k,"pointShadowMap",sn.state.pointShadowMap,at)),tt.isSkinnedMesh){xe.setOptional(k,tt,"bindMatrix"),xe.setOptional(k,tt,"bindMatrixInverse");let Se=tt.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),xe.setValue(k,"boneTexture",Se.boneTexture,at))}tt.isBatchedMesh&&(xe.setOptional(k,tt,"batchingTexture"),xe.setValue(k,"batchingTexture",tt._matricesTexture,at),xe.setOptional(k,tt,"batchingIdTexture"),xe.setValue(k,"batchingIdTexture",tt._indirectTexture,at),xe.setOptional(k,tt,"batchingColorTexture"),tt._colorsTexture!==null&&xe.setValue(k,"batchingColorTexture",tt._colorsTexture,at));let pi=et.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&M.update(tt,et,bn),(fi||Dt.receiveShadow!==tt.receiveShadow)&&(Dt.receiveShadow=tt.receiveShadow,xe.setValue(k,"receiveShadow",tt.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&G.environment!==null&&(Ie.envMapIntensity.value=G.environmentIntensity),Ie.dfgLUT!==void 0&&(Ie.dfgLUT.value=hv()),fi){if(xe.setValue(k,"toneMappingExposure",U.toneMappingExposure),Dt.needsLights&&qf(Ie,xs),Lt&&Q.fog===!0&&kt.refreshFogUniforms(Ie,Lt),kt.refreshMaterialUniforms(Ie,Q,it,X,w.state.transmissionRenderTarget[b.id]),Dt.needsLights&&Dt.lightProbeGrid){let Se=Dt.lightProbeGrid;Ie.probesSH.value=Se.texture,Ie.probesMin.value.copy(Se.boundingBox.min),Ie.probesMax.value.copy(Se.boundingBox.max),Ie.probesResolution.value.copy(Se.resolution)}dr.upload(k,Qh(Dt),Ie,at)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(dr.upload(k,Qh(Dt),Ie,at),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&xe.setValue(k,"center",tt.center),xe.setValue(k,"modelViewMatrix",tt.modelViewMatrix),xe.setValue(k,"normalMatrix",tt.normalMatrix),xe.setValue(k,"modelMatrix",tt.matrixWorld),Q.uniformsGroups!==void 0){let Se=Q.uniformsGroups;for(let mi=0,vs=Se.length;mi<vs;mi++){let nu=Se[mi];K.update(nu,bn),K.bind(nu,bn)}}return bn}function qf(b,G){b.ambientLightColor.needsUpdate=G,b.lightProbe.needsUpdate=G,b.sunLights.needsUpdate=G,b.sunLightShadows.needsUpdate=G,b.directionalLights.needsUpdate=G,b.directionalLightShadows.needsUpdate=G,b.pointLights.needsUpdate=G,b.pointLightShadows.needsUpdate=G,b.spotLights.needsUpdate=G,b.spotLightShadows.needsUpdate=G,b.rectAreaLights.needsUpdate=G,b.hemisphereLights.needsUpdate=G}function Yf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return st},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(b,G,et){let Q=$.get(b);Q.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),$.get(b.texture).__webglTexture=G,$.get(b.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:et,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,G){let et=$.get(b);et.__webglFramebuffer=G,et.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(b,G=0,et=0){W=b,st=G,I=et;let Q=null,tt=!1,Lt=!1;if(b){let Ct=$.get(b);if(Ct.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(k.FRAMEBUFFER,Ct.__webglFramebuffer),j.copy(b.viewport),pt.copy(b.scissor),ht=b.scissorTest,v.viewport(j),v.scissor(pt),v.setScissorTest(ht),B=-1;return}else if(Ct.__webglFramebuffer===void 0)at.setupRenderTarget(b);else if(Ct.__hasExternalTextures)at.rebindTextures(b,$.get(b.texture).__webglTexture,$.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Qt=b.depthTexture;if(Ct.__boundDepthTexture!==Qt){if(Qt!==null&&$.has(Qt)&&(b.width!==Qt.image.width||b.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(b)}}let Ft=b.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(Lt=!0);let Vt=$.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Vt[G])?Q=Vt[G][et]:Q=Vt[G],tt=!0):b.samples>0&&at.useMultisampledRTT(b)===!1?Q=$.get(b).__webglMultisampledFramebuffer:Array.isArray(Vt)?Q=Vt[et]:Q=Vt,j.copy(b.viewport),pt.copy(b.scissor),ht=b.scissorTest}else j.copy(Rt).multiplyScalar(it).floor(),pt.copy(Gt).multiplyScalar(it).floor(),ht=se;if(et!==0&&(Q=J),v.bindFramebuffer(k.FRAMEBUFFER,Q)&&v.drawBuffers(b,Q),v.viewport(j),v.scissor(pt),v.setScissorTest(ht),tt){let Ct=$.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ct.__webglTexture,et)}else if(Lt){let Ct=G;for(let Ft=0;Ft<b.textures.length;Ft++){let Vt=$.get(b.textures[Ft]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ft,Vt.__webglTexture,et,Ct)}}else if(b!==null&&et!==0){let Ct=$.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ct.__webglTexture,et)}B=-1};function eu(b){let G=$.get(b);return(G.__readFormat!==b.format||G.__readType!==b.type)&&(G.__readFormat=b.format,G.__readType=b.type,G.__formatReadable=C.textureFormatReadable(b.format),G.__typeReadable=C.textureTypeReadable(b.type)),G}this.readRenderTargetPixels=function(b,G,et,Q,tt,Lt,Nt,Ct=0){if(!(b&&b.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=$.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ft=Ft[Nt]),Ft){v.bindFramebuffer(k.FRAMEBUFFER,Ft);try{let Vt=b.textures[Ct],Qt=Vt.format,re=Vt.type;b.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ct);let Ot=eu(Vt);if(Ot.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=b.width-Q&&et>=0&&et<=b.height-tt&&k.readPixels(G,et,Q,tt,Z.convert(Qt),Z.convert(re),Lt)}finally{let Vt=W!==null?$.get(W).__webglFramebuffer:null;v.bindFramebuffer(k.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(b,G,et,Q,tt,Lt,Nt,Ct=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=$.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ft=Ft[Nt]),Ft)if(G>=0&&G<=b.width-Q&&et>=0&&et<=b.height-tt){v.bindFramebuffer(k.FRAMEBUFFER,Ft);let Vt=b.textures[Ct],Qt=Vt.format,re=Vt.type;b.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ct);let Ot=eu(Vt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,pe),k.bufferData(k.PIXEL_PACK_BUFFER,Lt.byteLength,k.STREAM_READ),k.readPixels(G,et,Q,tt,Z.convert(Qt),Z.convert(re),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Ue=W!==null?$.get(W).__webglFramebuffer:null;v.bindFramebuffer(k.FRAMEBUFFER,Ue);let we=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await _d(k,we,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,pe),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Lt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(pe),k.deleteSync(we),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,G=null,et=0){let Q=Math.pow(2,-et),tt=Math.floor(b.image.width*Q),Lt=Math.floor(b.image.height*Q),Nt=G!==null?G.x:0,Ct=G!==null?G.y:0;at.setTexture2D(b,0),k.copyTexSubImage2D(k.TEXTURE_2D,et,0,0,Nt,Ct,tt,Lt),v.unbindTexture()},this.copyTextureToTexture=function(b,G,et=null,Q=null,tt=0,Lt=0){let Nt,Ct,Ft,Vt,Qt,re,Ot,pe,Ue,we=b.isCompressedTexture?b.mipmaps[Lt]:b.image;if(et!==null)Nt=et.max.x-et.min.x,Ct=et.max.y-et.min.y,Ft=et.isBox3?et.max.z-et.min.z:1,Vt=et.min.x,Qt=et.min.y,re=et.isBox3?et.min.z:0;else{let Ie=Math.pow(2,-tt);Nt=Math.floor(we.width*Ie),Ct=Math.floor(we.height*Ie),b.isDataArrayTexture?Ft=we.depth:b.isData3DTexture?Ft=Math.floor(we.depth*Ie):Ft=1,Vt=0,Qt=0,re=0}Q!==null?(Ot=Q.x,pe=Q.y,Ue=Q.z):(Ot=0,pe=0,Ue=0);let ye=Z.convert(G.format),Ke=Z.convert(G.type),Dt;G.isData3DTexture?(at.setTexture3D(G,0),Dt=k.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(at.setTexture2DArray(G,0),Dt=k.TEXTURE_2D_ARRAY):(at.setTexture2D(G,0),Dt=k.TEXTURE_2D),v.activeTexture(k.TEXTURE0),v.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),v.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),v.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment);let sn=v.getParameter(k.UNPACK_ROW_LENGTH),ue=v.getParameter(k.UNPACK_IMAGE_HEIGHT),bn=v.getParameter(k.UNPACK_SKIP_PIXELS),Zn=v.getParameter(k.UNPACK_SKIP_ROWS),fi=v.getParameter(k.UNPACK_SKIP_IMAGES);v.pixelStorei(k.UNPACK_ROW_LENGTH,we.width),v.pixelStorei(k.UNPACK_IMAGE_HEIGHT,we.height),v.pixelStorei(k.UNPACK_SKIP_PIXELS,Vt),v.pixelStorei(k.UNPACK_SKIP_ROWS,Qt),v.pixelStorei(k.UNPACK_SKIP_IMAGES,re);let xs=b.isDataArrayTexture||b.isData3DTexture,xe=G.isDataArrayTexture||G.isData3DTexture;if(b.isDepthTexture){let Ie=$.get(b),pi=$.get(G),Se=$.get(Ie.__renderTarget),mi=$.get(pi.__renderTarget);v.bindFramebuffer(k.READ_FRAMEBUFFER,Se.__webglFramebuffer),v.bindFramebuffer(k.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let vs=0;vs<Ft;vs++)xs&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,$.get(b).__webglTexture,tt,re+vs),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,$.get(G).__webglTexture,Lt,Ue+vs)),k.blitFramebuffer(Vt,Qt,Nt,Ct,Ot,pe,Nt,Ct,k.DEPTH_BUFFER_BIT,k.NEAREST);v.bindFramebuffer(k.READ_FRAMEBUFFER,null),v.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(tt!==0||b.isRenderTargetTexture||$.has(b)){let Ie=$.get(b),pi=$.get(G);v.bindFramebuffer(k.READ_FRAMEBUFFER,H),v.bindFramebuffer(k.DRAW_FRAMEBUFFER,V);for(let Se=0;Se<Ft;Se++)xs?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ie.__webglTexture,tt,re+Se):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ie.__webglTexture,tt),xe?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,pi.__webglTexture,Lt,Ue+Se):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,pi.__webglTexture,Lt),tt!==0?k.blitFramebuffer(Vt,Qt,Nt,Ct,Ot,pe,Nt,Ct,k.COLOR_BUFFER_BIT,k.NEAREST):xe?k.copyTexSubImage3D(Dt,Lt,Ot,pe,Ue+Se,Vt,Qt,Nt,Ct):k.copyTexSubImage2D(Dt,Lt,Ot,pe,Vt,Qt,Nt,Ct);v.bindFramebuffer(k.READ_FRAMEBUFFER,null),v.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else xe?b.isDataTexture||b.isData3DTexture?k.texSubImage3D(Dt,Lt,Ot,pe,Ue,Nt,Ct,Ft,ye,Ke,we.data):G.isCompressedArrayTexture?k.compressedTexSubImage3D(Dt,Lt,Ot,pe,Ue,Nt,Ct,Ft,ye,we.data):k.texSubImage3D(Dt,Lt,Ot,pe,Ue,Nt,Ct,Ft,ye,Ke,we):b.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Lt,Ot,pe,Nt,Ct,ye,Ke,we.data):b.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Lt,Ot,pe,we.width,we.height,ye,we.data):k.texSubImage2D(k.TEXTURE_2D,Lt,Ot,pe,Nt,Ct,ye,Ke,we);v.pixelStorei(k.UNPACK_ROW_LENGTH,sn),v.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ue),v.pixelStorei(k.UNPACK_SKIP_PIXELS,bn),v.pixelStorei(k.UNPACK_SKIP_ROWS,Zn),v.pixelStorei(k.UNPACK_SKIP_IMAGES,fi),Lt===0&&G.generateMipmaps&&k.generateMipmap(Dt),v.unbindTexture()},this.initRenderTarget=function(b){$.get(b).__webglFramebuffer===void 0&&at.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?at.setTextureCube(b,0):b.isData3DTexture?at.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?at.setTexture2DArray(b,0):at.setTexture2D(b,0),v.unbindTexture()},this.resetState=function(){st=0,I=0,W=null,v.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};var nf={type:"change"},Rh={type:"start"},rf={type:"end"},Hl=new Yi,sf=new pn,uv=Math.cos(70*Cn.DEG2RAD),Ve=new F,un=2*Math.PI,_e={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ah=1e-6,Vl=class extends la{constructor(t,e=null){super(t,e),this.state=_e.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ci.ROTATE,MIDDLE:Ci.DOLLY,RIGHT:Ci.PAN},this.touches={ONE:Pi.ROTATE,TWO:Pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new gn,this._lastTargetPosition=new F,this._quat=new gn().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sr,this._sphericalDelta=new sr,this._scale=1,this._panOffset=new F,this._rotateStart=new mt,this._rotateEnd=new mt,this._rotateDelta=new mt,this._panStart=new mt,this._panEnd=new mt,this._panDelta=new mt,this._dollyStart=new mt,this._dollyEnd=new mt,this._dollyDelta=new mt,this._dollyDirection=new F,this._mouse=new mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fv.bind(this),this._onPointerDown=dv.bind(this),this._onPointerUp=pv.bind(this),this._onContextMenu=Mv.bind(this),this._onMouseWheel=_v.bind(this),this._onKeyDown=xv.bind(this),this._onTouchStart=vv.bind(this),this._onTouchMove=yv.bind(this),this._onMouseDown=mv.bind(this),this._onMouseMove=gv.bind(this),this._interceptControlDown=Sv.bind(this),this._interceptControlUp=bv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=_e.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nf),this.update(),this.state=_e.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ve.copy(e).sub(this.target),Ve.applyQuaternion(this._quat),this._spherical.setFromVector3(Ve),this.autoRotate&&this.state===_e.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=un:n>Math.PI&&(n-=un),s<-Math.PI?s+=un:s>Math.PI&&(s-=un),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ve.setFromSpherical(this._spherical),Ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ve.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Hl.origin.copy(this.object.position),Hl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hl.direction))<uv?this.object.lookAt(this.target):(sf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hl.intersectPlane(sf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ah||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ah||this._lastTargetPosition.distanceToSquared(this.target)>Ah?(this.dispatchEvent(nf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?un/60*this.autoRotateSpeed*t:un/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ve.setFromMatrixColumn(e,0),Ve.multiplyScalar(-t),this._panOffset.add(Ve)}_panUp(t,e){this.screenSpacePanning===!0?Ve.setFromMatrixColumn(e,1):(Ve.setFromMatrixColumn(e,0),Ve.crossVectors(this.object.up,Ve)),Ve.multiplyScalar(t),this._panOffset.add(Ve)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ve.copy(s).sub(this.target);let r=Ve.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(un*this._rotateDelta.x/e.clientHeight),this._rotateUp(un*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(un*this._rotateDelta.x/e.clientHeight),this._rotateUp(un*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function dv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function fv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function pv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rf),this.state=_e.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function mv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ci.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=_e.DOLLY;break;case Ci.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_e.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_e.ROTATE}break;case Ci.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_e.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_e.PAN}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(Rh)}function gv(i){switch(this.state){case _e.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case _e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case _e.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function _v(i){this.enabled===!1||this.enableZoom===!1||this.state!==_e.NONE||(i.preventDefault(),this.dispatchEvent(Rh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(rf))}function xv(i){this.enabled!==!1&&this._handleKeyDown(i)}function vv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Pi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=_e.TOUCH_ROTATE;break;case Pi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=_e.TOUCH_PAN;break;default:this.state=_e.NONE}break;case 2:switch(this.touches.TWO){case Pi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=_e.TOUCH_DOLLY_PAN;break;case Pi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=_e.TOUCH_DOLLY_ROTATE;break;default:this.state=_e.NONE}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(Rh)}function yv(i){switch(this._trackPointer(i),this.state){case _e.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case _e.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case _e.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case _e.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=_e.NONE}}function Mv(i){this.enabled!==!1&&i.preventDefault()}function Sv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function of(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ce,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=af(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let E=0;E<a[h].length;++E)f.push(a[h][E][u]);let g=af(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function af(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new an(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){let E=h.getComponent(u,g);o.setComponent(u+d,g,E)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function lf({y0:i,y1:t,y2:e,yg:n,imgBase:s,imgQ:r=""}){let a=new qi;a.background=new Zt(13624042);let o=new qe(70,1,.08,220);o.rotation.order="YXZ",a.add(new es(16773596,14863280,1.55));let l=new ns(16774368,1.1);l.position.set(-8,20,-30),a.add(l);let c=new oa(16767400,.35);a.add(c);function h(S,P,M){let D=document.createElement("canvas");D.width=S,D.height=P,M(D.getContext("2d"),S,P);let L=new Zi(D);return L.colorSpace=Oe,L.wrapS=L.wrapT=ks,L.anisotropy=4,L}let d=(S,P)=>S+Math.random()*(P-S),u=S=>h(512,512,(P,M,D)=>{for(let Z=0;Z<8;Z++){let nt=d(-14,14);P.fillStyle=`hsl(${S[0]+d(-3,3)},${S[1]}%,${S[2]+nt*.4}%)`,P.fillRect(0,Z*D/8,M,D/8),P.strokeStyle="rgba(60,35,20,.10)";for(let dt=0;dt<14;dt++){P.beginPath();let ft=Z*D/8+d(2,D/8-2);P.moveTo(0,ft),P.bezierCurveTo(M*.3,ft+d(-3,3),M*.6,ft+d(-3,3),M,ft+d(-2,2)),P.stroke()}P.fillStyle="rgba(50,30,18,.35)",P.fillRect(0,Z*D/8,M,1.5);let K=d(.2,.8)*M;P.fillRect(K,Z*D/8,1.5,D/8)}}),f=u([30,48,58]),g=u([26,40,50]),E=u([28,30,62]),p=((S,P)=>h(256,256,(M,D,L)=>{M.fillStyle=P,M.fillRect(0,0,D,L);for(let Z=0;Z<8;Z++)for(let nt=0;nt<4;nt++){M.fillStyle=S.replace("L",(44+d(-4,4)).toFixed(0));let K=Z%2?32:0;M.fillRect(nt*64+K-64+2,Z*32+2,60,28),M.fillRect(nt*64+K+2,Z*32+2,60,28)}}))("hsl(150,22%,L%)","#e9e2d2"),T=h(512,512,(S,P,M)=>{S.fillStyle="#cdb48d",S.fillRect(0,0,P,M);for(let D=0;D<70;D++){S.fillStyle=`hsl(${d(28,40)},${d(25,42)}%,${d(62,78)}%)`,S.beginPath();let L=d(0,P),Z=d(0,M),nt=d(22,48);for(let K=0;K<7;K++){let dt=K/7*6.283,ft=nt*d(.7,1.1);S.lineTo(L+Math.cos(dt)*ft,Z+Math.sin(dt)*ft)}S.closePath(),S.fill()}}),R=h(1024,384,(S,P,M)=>{S.fillStyle="#c8502f",S.fillRect(0,0,P,M),S.fillStyle="#e9774d",S.fillRect(0,M*.62,P,M*.38),S.fillStyle="#f4e6cf";for(let D=0;D<6;D++){let L=80+D*175,Z=d(110,220);S.save(),S.translate(L,Z);for(let nt=0;nt<9;nt++)S.rotate(.7),S.beginPath(),S.ellipse(48,0,52,9,0,0,6.283),S.fill();S.restore()}S.strokeStyle="#3d6f9e",S.lineWidth=18,S.beginPath(),S.moveTo(0,M*.8);for(let D=0;D<=P;D+=40)S.lineTo(D,M*.8+Math.sin(D/70)*22);S.stroke(),S.strokeStyle="#f4e6cf",S.lineWidth=6,S.beginPath(),S.moveTo(0,M*.9);for(let D=0;D<=P;D+=40)S.lineTo(D,M*.9+Math.sin(D/70+1)*14);S.stroke()});R.wrapS=R.wrapT=mn;let y=h(256,64,(S,P,M)=>{for(let D=0;D<P;D++){let L=Math.sin(D/5)*.5+.5;S.fillStyle=`hsl(40,${55+L*15}%,${38+L*22}%)`,S.fillRect(D,0,1,M)}}),A=h(128,128,(S,P,M)=>{S.fillStyle="#6b3f22",S.fillRect(0,0,P,M),S.fillStyle="#b57a45";for(let D=0;D<8;D++)for(let L=0;L<8;L++)(L+D)%2?S.fillRect(L*16+1,D*16+3,14,10):S.fillRect(L*16+3,D*16+1,10,14)}),w=h(128,128,(S,P,M)=>{let D=S.createRadialGradient(64,64,0,64,64,64);D.addColorStop(0,"rgba(255,255,255,1)"),D.addColorStop(.45,"rgba(255,255,255,.35)"),D.addColorStop(1,"rgba(255,255,255,0)"),S.fillStyle=D,S.fillRect(0,0,P,M)});w.colorSpace=Wn;let N=h(64,256,(S,P,M)=>{let D=S.createLinearGradient(0,0,0,M);D.addColorStop(0,"#9cc6dc"),D.addColorStop(.55,"#e6f1f3"),D.addColorStop(.62,"#7fb3c2"),D.addColorStop(1,"#d9c7a3"),S.fillStyle=D,S.fillRect(0,0,P,M)});N.wrapS=N.wrapT=mn;let _=(S,P={})=>new ia({color:S,...P}),x={wall:_(16052197),wall2:_(15458768),ceil:_(15985888,{emissive:3813672}),floor:_(16777215,{map:f}),floor2:_(16777215,{map:g}),deck:_(16777215,{map:E}),pavers:_(16777215,{map:T}),timber:_(10119744),oak:_(12618325),dark:_(3876377),brass:new ts({color:13146954,shininess:80,specular:9071152}),sage:_(16777215,{map:p}),marble:new ts({color:4156245,shininess:60,specular:4478276}),leather:_(9063210),tan:_(12157518),weave:_(16777215,{map:A}),teal:_(6196362),olive:_(7303488),terra:_(11818799),cream:_(15984335),stone:_(14866112),black:_(2760988),red:_(12728875,{side:Be,emissive:3804168}),yellow:_(15315516,{side:Be,emissive:3811848}),white:_(16513266,{side:Be}),orange:_(14246443),leaf:_(6257221,{flatShading:!0}),leaf2:_(8161871,{flatShading:!0}),pot:_(14271396),mural:_(16777215,{map:R}),curt:_(16777215,{map:y}),bottle:_(6126154),bottle2:_(10115626),bottle3:_(14272928),shade:new Tn({color:16764810}),bulb:new Tn({color:16773580}),sky:new Tn({map:N,toneMapped:!1}),glass:new ts({color:13625066,transparent:!0,opacity:.18,shininess:90,depthWrite:!1,side:Be}),pool:new Tn({map:w,color:16758886,transparent:!0,opacity:.55,blending:ss,depthWrite:!1,toneMapped:!1}),daypool:new Tn({map:w,color:16773852,transparent:!0,opacity:.35,blending:ss,depthWrite:!1,toneMapped:!1}),lawn:_(10135398),sea:_(6266800),sand:_(15127469),road:_(9273975)},U=new Map,z=(S,P)=>{U.has(P)||U.set(P,[]),U.get(P).push(S.index?S.toNonIndexed():S)},q={0:[],1:[],2:[]},J={0:[],1:[],2:[]},H=(S,P,M,D,L)=>q[S].push([Math.min(P,D),Math.min(M,L),Math.max(P,D),Math.max(M,L)]);function V(S,P,M,D,L,Z,nt,K=0,dt){let ft=new Le(S,P,M);if(dt){let Pt=ft.attributes.uv;for(let It=0;It<Pt.count;It++)Pt.setXY(It,Pt.getX(It)*dt[0],Pt.getY(It)*dt[1])}return K&&ft.rotateY(K),ft.translate(D,L+P/2,Z),z(ft,nt),ft}let st=(S,P,M,D,L,Z,nt,K,dt=0)=>{V(P,M,D,L,Z,nt,K),H(S,L-P/2-dt,nt-D/2-dt,L+P/2+dt,nt+D/2+dt)};function I(S,P,M,D,L,Z,nt,K=10){let dt=new wn(S,P,M,K);return dt.translate(D,L+M/2,Z),z(dt,nt),dt}function W(S,P,M,D,L,Z,nt=2.4,K=-Math.PI/2,dt=0){let ft=new An(S,P),Pt=ft.attributes.uv;for(let It=0;It<Pt.count;It++)Pt.setXY(It,Pt.getX(It)*S/nt,Pt.getY(It)*P/nt);return ft.rotateX(K),dt&&ft.rotateY(dt),ft.translate(M,D,L),z(ft,Z),ft}function B(S,P,M,D,L,Z,nt,K=x.wall,dt=.22){let ft=Math.abs(D-P)||dt,Pt=Math.abs(L-M)||dt;V(ft,nt,Pt,(P+D)/2,Z,(M+L)/2,K),nt>2&&J[S].push([Math.min(P,D)-.11,Math.min(M,L)-.11,Math.max(P,D)+.11,Math.max(M,L)+.11]),H(S,Math.min(P,D)-(P===D?dt/2:0),Math.min(M,L)-(M===L?dt/2:0),Math.max(P,D)+(P===D?dt/2:0),Math.max(M,L)+(M===L?dt/2:0))}function Y(S,P,M,D,L,Z,nt,K,dt=x.wall){let ft=D;[...Z,[L,L]].forEach(([Pt,It])=>{Pt>ft&&(P==="x"?B(S,ft,M,Pt,M,nt,K,dt):B(S,M,ft,M,Pt,nt,K,dt)),It>Pt&&Pt<L&&(P==="x"?V(It-Pt,K-2.4,.22,(Pt+It)/2,nt+2.4,M,dt):V(.22,K-2.4,It-Pt,M,nt+2.4,(Pt+It)/2,dt)),ft=It})}function j(S,P,M,D,L,Z){let K={s:0,n:Math.PI,e:Math.PI/2,w:-Math.PI/2}[Z],dt=Z==="e"?.12:Z==="w"?-.12:0,ft=Z==="s"?.12:Z==="n"?-.12:0,Pt=new An(D,L);Pt.rotateY(K),Pt.translate(S+dt,P+L/2,M+ft),z(Pt,x.sky);let It=(Ne,Sn,$e,Mr)=>{let Sr=new Le(Ne,Sn,.08);Sr.rotateY(K);let br=new F($e,0,0).applyAxisAngle(new F(0,1,0),K);Sr.translate(S+dt*1.3+br.x,Mr,M+ft*1.3+br.z),z(Sr,x.white)};It(D+.16,.08,0,P),It(D+.16,.08,0,P+L),It(.08,L,-D/2,P+L/2),It(.08,L,D/2,P+L/2),It(.05,L,0,P+L/2),It(D,.05,0,P+L*.62);let fe=new An(D*1.6,2.6);fe.rotateX(-Math.PI/2),fe.rotateY(K);let ve=new F(0,0,1.4).applyAxisAngle(new F(0,1,0),K);fe.translate(S+ve.x,ht(P)+.02,M+ve.z),z(fe,x.daypool)}let pt=i,ht=S=>S<t-.2?S<i-.2?n:i:S<e-.2?t:e;function rt(S,P,M,D,L,Z=0){if(I(.006,.006,M-D,S,D,P,x.black,4),Z===0){let nt=new Ei(.22,12,6,0,6.283,0,Math.PI/2);nt.translate(S,D,P),z(nt,x.shade)}else if(Z===1){I(.05,.2,.26,S,D-.26,P,x.brass,12);let nt=new Ei(.07,8,6);nt.translate(S,D-.3,P),z(nt,x.bulb)}else{let nt=new Ei(.16,10,8);nt.translate(S,D-.16,P),z(nt,x.shade)}W(2.6,2.6,S,L+.015,P,x.pool,2.6)}function Mt(S,P,M,D,L,Z="weave"){let nt=new be,K=Z==="weave"?x.weave:Z==="red"?x.orange:x.oak,dt=[[.44,.05,.44,0,.45,0,K],[.44,.42,.05,0,.5,.2,K]];[[-.19,-.19],[.19,-.19],[-.19,.19],[.19,.19]].forEach(([ft,Pt])=>dt.push([.04,.45,.04,ft,0,Pt,Z==="red"?x.orange:x.timber])),dt.forEach(([ft,Pt,It,fe,ve,Ne,Sn])=>{let $e=new Le(ft,Pt,It);$e.translate(fe,ve+Pt/2,Ne),$e.rotateY(D),$e.translate(P,L,M),z($e,Sn)})}function Tt(S,P,M,D,L=.45,Z=4,nt="weave",K=.74){I(L,L,.04,P,D+K-.04,M,x.oak,16),I(.04,.04,K-.04,P,D,M,x.dark,6),I(.28,.3,.03,P,D,M,x.dark,12),H(S,P-L,M-L,P+L,M+L);for(let dt=0;dt<Z;dt++){let ft=dt/Z*6.283+.4;Mt(S,P+Math.sin(ft)*(L+.32),M+Math.cos(ft)*(L+.32),ft+Math.PI,D,nt)}}function X(S,P,M,D=.75,L=x.dark){I(.19,.19,.06,S,M+D-.06,P,L,12),[[-.11,-.11],[.11,-.11],[-.11,.11],[.11,.11]].forEach(([Z,nt])=>V(.035,D-.06,.035,S+Z,M,P+nt,x.timber)),I(.13,.13,.02,S,M+.28,P,x.brass,8)}function it(S,P,M,D,L=1){I(.28*L,.22*L,.5*L,P,D,M,x.pot,10);let Z=new ji(.55*L,0);Z.scale(1,1.35,1),Z.translate(P,D+1.05*L,M),z(Z,Math.random()<.5?x.leaf:x.leaf2),H(S,P-.3*L,M-.3*L,P+.3*L,M+.3*L)}function _t(S,P,M,D,L,Z,nt,K=x.teal){let dt=Math.abs(D-P),ft=Math.abs(L-M),Pt=(P+D)/2,It=(M+L)/2;V(dt,.45,ft,Pt,Z,It,x.timber);let fe=.06;V(dt-fe,.1,ft-fe,Pt,Z+.45,It,K);let ve=nt==="s"||nt==="n"?[dt,.18]:[.18,ft],Ne={n:[0,ft/2-.09],s:[0,-ft/2+.09],e:[-dt/2+.09,0],w:[dt/2-.09,0]}[nt];V(ve[0],.55,ve[1],Pt+Ne[0],Z+.5,It+Ne[1],K),H(S,Math.min(P,D),Math.min(M,L),Math.max(P,D),Math.max(M,L))}function Bt(S,P,M,D,L,Z,nt=.74,K=x.oak){V(L,.05,Z,P,D+nt-.05,M,K),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([dt,ft])=>V(.06,nt-.05,.06,P+dt*(L/2-.08),D,M+ft*(Z/2-.08),x.dark)),H(S,P-L/2,M-Z/2,P+L/2,M+Z/2)}function Rt(S,P,M,D,L=1.5){I(.03,.03,2.3,S,M,P,x.white,6);let Z=new bi(L,.45,10,1,!0);Z.translate(S,M+2.45,P),z(Z,D),I(.25,.3,.08,S,M,P,x.stone,10)}function Gt(S,P,M,D,L){for(let Z=0;Z<L;Z++){let nt=S+(P-S)*(Z+.5)/L,K=[x.bottle,x.bottle2,x.bottle3][Z%3];I(.035,.035,.22,nt,D,M,K,6),I(.012,.02,.07,nt,D+.22,M,K,5)}}function se(S,P,M,D,L){V(P-S+.1,.06,.08,(S+P)/2,D+.42,M,x.brass);for(let Z=0;Z<L;Z++){let nt=S+(P-S)*Z/(L-1);I(.025,.025,.42,nt,D,M,x.brass,6),V(.03,.16,.05,nt,D+.5,M,Z%3?x.dark:x.cream)}}function lt(S,P,M,D,L,Z,nt){let K=new An(D,L),dt=new ra().load(s+nt+".jpg"+r,fe=>{fe.colorSpace=Oe}),ft=new le(K,new Tn({map:dt,toneMapped:!1}));ft.position.set(S,P,M),ft.rotation.y=Z,a.add(ft);let Pt=new Le(D+.12,L+.12,.04);Pt.rotateY(Z);let It=new F(0,0,-.03).applyAxisAngle(new F(0,1,0),Z);Pt.translate(S+It.x,P+It.y,M+It.z),z(Pt,x.dark)}W(160,120,15,n-.06,-40,x.sand,6),W(160,20,15,n-.4,-14,x.road,6),W(400,200,15,n-1.5,-160,x.sea,40);for(let S=0;S<9;S++){let P=-14+S*7,M=-17-d(0,6);I(.2,.35,9,P,n,M,x.dark,6);for(let D=0;D<5;D++){let L=new bi(2.4-D*.4,1.4,7);L.translate(P,n+4+D*1.3,M),z(L,x.leaf)}}W(14,7,7.2,n,-3.5,x.pavers,3),W(14,7,26.8,n,-3.5,x.pavers,3),V(14.2,i-n,.3,7.1,n,-.15,x.wall),V(14.2,i-n,.3,26.9,n,-.15,x.wall),B(0,0,-7,14.2,-7,n,1,x.wall),B(0,19.8,-7,34,-7,n,1,x.wall),B(0,0,-7,0,0,n,1,x.wall),B(0,34,-7,34,0,n,1,x.wall),B(0,14.2,-4.6,14.2,0,n,1,x.wall),B(0,19.8,-4.6,19.8,0,n,1,x.wall);for(let S of[0,19.8])[[2.2,-5],[5.8,-5],[9.6,-5],[2.2,-2],[5.8,-2],[9.6,-2]].forEach(([P,M],D)=>{Bt(0,S+P+.2,M,n,2.2,.8),[-.75,0,.75].forEach(L=>{X(S+P+.2+L,M-.75,n,.46,x.orange),X(S+P+.2+L,M+.75,n,.46,x.orange)}),D<3&&Rt(S+P+.2,M+1.5,n,D%2?x.white:x.yellow)});it(0,.9,-6.2,n,1.1),it(0,33.1,-6.2,n,1.1),it(0,13.4,-6.2,n,.9),it(0,20.6,-6.2,n,.9);for(let S=0;S<8;S++)V(5.6,(i-n)*(S+1)/8,.5,17,n,-4.75+S*.5,x.stone);V(5.6,.02,1,17,i-.02,-.5,x.stone),[14.35,19.65].forEach(S=>I(.025,.025,.95,S,i,-.2,x.black,6));let ct=t-i-.3;W(31,21,15.5,i,10.5,x.floor,2.4),W(31,21,15.5,i+ct,10.5,x.ceil,4,Math.PI/2),B(0,0,0,0,21,i,ct),B(0,31,0,31,21,i,ct),B(0,0,21,31,21,i,ct),[[0,14],[17.2,31]].forEach(([S,P])=>{V(P-S,ct-.2,.04,(S+P)/2,i+.1,0,x.glass),H(0,S,-.1,P,.1);for(let M=S;M<=P+.01;M+=2)V(.1,ct,.12,M,i,0,x.white);V(P-S,.12,.14,(S+P)/2,i,0,x.white),V(P-S,.14,.14,(S+P)/2,i+2.5,0,x.white)}),V(3.2,.5,.3,15.6,i+2.6,0,x.wall),V(.25,2.6,.3,14.1,i,0,x.white),V(.25,2.6,.3,17.1,i,0,x.white),Y(0,"z",14,0,4.1,[[1.2,3.2]],i,ct),Y(0,"z",17.2,0,4.1,[[1.2,3.2]],i,ct),Y(0,"x",4.1,0,31,[[2.6,5.2],[8.4,11],[14.6,16.6],[20.4,23],[26,28.6]],i,ct,x.wall2),V(9,ct,11.5,15,i,15.25,x.wall2),H(0,10.5,9.5,19.5,21),[[11.5,"TOILETS"],[17.5,"KITCHEN"]].forEach(([S])=>{V(1,2.2,.06,S,i,9.47,x.dark)}),[[3,2],[7,2],[11,2.2],[20.5,2],[24.5,2],[28.5,2.2]].forEach(([S,P])=>{Tt(0,S,P,i,.4,3),rt(S,P,i+ct,i+2.7,i,2)}),it(0,.7,.8,i,.9),it(0,13.2,3.3,i,.8),it(0,30.3,.8,i,.9),it(0,18,3.3,i,.8);let gt=i,yt=(S,P,M,D)=>{st(0,M,1,D,S,gt,P,x.sage),V(M+.12,.06,D+.12,S,gt+1,P,x.oak)};yt(7,9.3,5,.7),yt(4.85,12.3,.7,5.3),yt(9.15,12.3,.7,5.3),I(.025,.025,5,7,gt+.18,8.85,x.brass);{let S=new wn(.025,.025,5,6);S.rotateZ(Math.PI/2),S.translate(7,gt+.2,8.85),z(S,x.brass)}se(5.4,8.6,9.4,gt+1.06,8),st(0,1.6,1.4,.5,7,gt,12.6,x.timber),V(1.6,1,.5,7,gt+1.4,12.6,x.dark),Gt(6.3,7.7,12.6,gt+1.42,9),Gt(6.3,7.7,12.6,gt+1.92,9);for(let S=0;S<6;S++)X(4.9+S*.85,8.4,gt);for(let S=0;S<5;S++)X(4.05,10.2+S*.95,gt),X(9.95,10.2+S*.95,gt);for(let S=0;S<4;S++)rt(5.3+S*1.15,9.3,i+ct,i+2.35,i+1.06,1);_t(0,.12,5.2,.72,19.5,i,"e",x.teal);for(let S=6.2;S<19;S+=2.4)Bt(0,1.45,S,i,.75,1.1),Mt(0,2.25,S-.3,-Math.PI/2,i,"oak"),Mt(0,2.25,S+.3,-Math.PI/2,i,"oak"),rt(1.45,S,i+ct,i+2.3,i+.74,0);_t(0,3.2,20.3,10.3,20.88,i,"n",x.leather);for(let S=4;S<10;S+=2)Bt(0,S,19.5,i,.9,.7),rt(S,19.5,i+ct,i+2.3,i+.74,0);Tt(0,4.4,17,i,.45,4,"oak"),Tt(0,8.2,16.6,i,.45,4,"oak");for(let S=7;S<20;S+=3.2)j(0,i+.9,S,1.4,1.8,"e");lt(.13,i+1.7,13.6,1.6,.75,Math.PI/2,"facade");let St=28.6,Wt=6.2,Ut=3.2;for(let S=0;S<10;S++){let P=Math.PI*.5+S/10*Math.PI*.55,M=P+Math.PI*.55/10,D=(P+M)/2,L=St+Math.cos(D)*Ut,Z=Wt+Math.sin(D)*Ut,nt=Ut*(M-P)+.02,K=new Le(nt,1,.65);K.rotateY(-D+Math.PI/2),K.translate(L,i+.5,Z),z(K,x.marble);let dt=new Le(nt+.02,.05,.8);dt.rotateY(-D+Math.PI/2),dt.translate(L,i+1.03,Z),z(dt,x.oak),H(0,L-.4,Z-.4,L+.4,Z+.4),S%2===0&&X(St+Math.cos(D)*(Ut+.65),Wt+Math.sin(D)*(Ut+.65),i,.75,x.tan)}V(.5,1.6,5,30.7,i,6.6,x.timber),Gt(30.6,30.6,6,i+1.6,1);for(let S=0;S<12;S++)I(.035,.035,.24,30.6,i+1,4.6+S*.33,[x.bottle,x.bottle2,x.bottle3][S%3],6);H(0,28.4,4.2,31,9);for(let S=0;S<5;S++){let P=Math.PI*.55+S*.11*Math.PI;rt(St+Math.cos(P)*Ut,Wt+Math.sin(P)*Ut,i+ct,i+2.3,i+1.05,2)}[[21.5,12],[24.5,12],[27.5,12],[21.5,15],[24.5,15],[27.5,15],[21.5,18],[24.5,18]].forEach(([S,P])=>{Tt(0,S,P,i,.5,4,"weave"),rt(S,P,i+ct,i+2.25,i+.74,1)}),_t(0,30.28,10.4,30.88,20.4,i,"w",x.leather);for(let S=11.4;S<20;S+=2.2)Bt(0,29.6,S,i,.7,.9),Mt(0,28.85,S,Math.PI/2,i,"weave");_t(0,20,20.3,27.5,20.88,i,"n",x.leather);for(let S=7;S<20;S+=3.2)j(31,i+.9,S,1.4,1.8,"w");lt(30.87,i+1.7,14.5,1.9,.55,-Math.PI/2,"diners"),lt(19.6,i+1.7,12,1.4,.7,Math.PI/2,"table"),it(0,20.1,9.9,i,.8),lt(13.86,i+1.8,2.2,.8,1,-Math.PI/2,"courtyard");let zt=e-t-.3;W(18.5,11.8,17.75,t,10,x.floor2,2.4),W(18.5,11.8,17.75,t+zt,10,x.ceil,4,Math.PI/2),Y(1,"x",4.1,8.5,27,[[10.5,12.5],[15,17],[21.5,23.5]],t,zt,x.wall),B(1,8.5,15.9,27,15.9,t,zt),B(1,8.5,4.1,8.5,15.9,t,zt),B(1,27,4.1,27,15.9,t,zt),[[10.5,12.5],[15,17],[21.5,23.5]].forEach(([S,P])=>{for(let M=S;M<=P+.01;M+=.5)V(.05,2.4,.06,M,t,4.1,x.white)}),st(1,3.6,.35,6,10.4,t,10,x.timber),W(5.6,zt-.2,8.63,t+zt/2,10,x.curt,1.2,0,Math.PI/2);let Xt=t+.35;I(.28,.28,.5,10.6,Xt,10.4,x.white,14),I(.18,.18,.25,10.1,Xt+.45,9.8,x.cream,12),I(.18,.18,.25,10.1,Xt+.45,11,x.cream,12),I(.2,.2,.03,9.9,Xt+.95,9.5,x.brass,12),I(.01,.01,.95,9.9,Xt,9.5,x.black,4),V(.5,.6,.35,9.6,Xt,12.1,x.black),V(.5,.6,.35,9.6,Xt,7.9,x.black);for(let S=0;S<3;S++)rt(10.4,8+S*2,t+zt,t+2.4,t+.35,1);W(8.5,zt-.3,16,t+.2+(zt-.3)/2,15.77,x.mural,8.5,0,Math.PI),st(1,.7,1,6,20.5,t,9.2,x.timber),V(.85,.06,6.15,20.5,t+1,9.2,x.oak),V(.66,1,5.9,20.5,t,9.2,x.teal),H(1,20.1,6.2,20.9,12.2),se(20.65,20.65,6.6,t+1.06,2),se(20.65,20.65,11.6,t+1.06,2),V(.5,1.5,6,26.7,t,9.2,x.timber);for(let S=0;S<14;S++)I(.035,.035,.24,26.7,t+1.5,6.6+S*.38,[x.bottle,x.bottle2,x.bottle3][S%3],6);for(let S=0;S<6;S++)X(19.75,6.8+S*.95,t);for(let S=0;S<4;S++)rt(20.5,6.9+S*1.55,t+zt,t+2.1,t+1.05,0);W(4,3,15.5,t+.01,13.3,x.terra,4),[[14.2,12.6,Math.PI*.75],[16.8,12.6,-Math.PI*.75],[14.2,14.4,Math.PI*.25],[16.8,14.4,-Math.PI*.25]].forEach(([S,P,M])=>{V(.75,.4,.75,S,t,P,x.oak,M),V(.6,.14,.6,S,t+.4,P,x.cream,M);let D=new Le(.7,.5,.12);D.translate(0,.5+.25,.3),D.rotateY(M),D.translate(S,t,P),z(D,x.cream),H(1,S-.4,P-.4,S+.4,P+.4)}),I(.45,.45,.38,15.5,t,13.5,x.oak,14),H(1,15,13,16,14),it(1,12.3,15.2,t,1),it(1,26.2,15.2,t,1),it(1,9.2,14.9,t,.9),[[14,7],[17,7],[14,9.8],[17,9.8],[23.6,7],[23.6,10],[23.6,13]].forEach(([S,P])=>{I(.35,.35,.04,S,t+1.02,P,x.oak,14),I(.04,.04,1.02,S,t,P,x.dark,6),I(.25,.28,.03,S,t,P,x.dark,10),H(1,S-.35,P-.35,S+.35,P+.35),X(S+.62,P,t,.75),X(S-.62,P,t,.75),rt(S,P,t+zt,t+2.2,t+1.04,2)}),lt(26.87,t+1.65,13.6,1.9,.9,-Math.PI/2,"bombies");for(let S=7;S<15;S+=4)j(27,t+.9,S,1.2,1.6,"w");W(30,3.6,15.2,t+.02,2.3,x.deck,2.4),W(31,4,15.2,t+3.05,2.2,x.ceil,4,Math.PI/2),V(30,1.1,.25,15.2,t,.5,x.wall),H(1,.2,.3,30.2,.62),V(30,1.2,.03,15.2,t+1.1,.48,x.glass);for(let S=0;S<9;S++)V(.4,3.05,.4,.4+S*3.7,t,.5,x.wall);B(1,.2,.5,.2,4.1,t,3.05),B(1,30.2,.5,30.2,4.1,t,3.05),B(1,.2,4.1,8.5,4.1,t,3.05),B(1,27,4.1,30.2,4.1,t,3.05);for(let S=0;S<8;S++){let P=2.25+S*3.7;if(S%2===0){V(2.2,.08,.5,P,t+1.02,1.05,x.white),V(2.2,1.02,.3,P,t,1,x.white);for(let M=-1;M<=1;M++)X(P+M*.7,1.75,t,.75,x.oak)}else I(.42,.42,.04,P,t+1.02,2.2,x.white,14),I(.04,.04,1.02,P,t,2.2,x.white,6),H(1,P-.42,1.78,P+.42,2.62),X(P-.7,2.2,t,.75,x.oak),X(P+.7,2.2,t,.75,x.oak),X(P,2.95,t,.75,x.oak)}for(let S=1;S<8;S+=2){let P=2.25+S*3.7;I(.03,.03,1.4,P,t+1.06,2.2,x.white,6);let M=new Ei(1.15,12,4,0,6.283,0,Math.PI/2.6);M.translate(P,t+2.05,2.2),z(M,x.red)}it(1,.8,3.5,t,.8),it(1,29.6,3.5,t,.8),lt(8.38,t+1.7,3,.6,.75,-Math.PI/2,"terrace");let k=2.7;W(22,11,14,e,10.7,x.floor,2.4),W(22,11,14,e+k,10.7,x.wall2,4,Math.PI/2),B(2,3,5.2,25,5.2,e,k,x.wall2),B(2,3,16.2,25,16.2,e,k,x.wall2),B(2,3,5.2,3,16.2,e,k,x.wall2),B(2,25,5.2,25,16.2,e,k,x.wall2);for(let S=4;S<25;S+=1.8)V(.14,.2,11,S,e+k-.2,10.7,x.timber);V(12.3,2.3,.04,9.65,e,8.3,x.glass),H(2,3.5,8.1,15.8,8.5),V(.08,2.3,.08,15.8,e,8.3,x.dark),V(12.3,.08,.08,9.65,e+2.3,8.3,x.dark),V(3,.85,.8,8,e,6.6,x.dark),V(2.6,.05,.6,8,e+.85,6.6,x.teal),V(.5,.5,.4,6,e+.85,6,x.black),V(.5,.5,.4,10,e+.85,6,x.black),st(2,8,1.05,.75,20,e,9.2,x.oak),V(8.1,.05,.9,20,e+1.05,9.2,x.marble),V(8,1.6,.4,20,e,5.5,x.timber),Gt(16.5,23.5,5.5,e+1.6,22);for(let S=0;S<8;S++)X(16.6+S*.95,10.05,e);for(let S=0;S<5;S++)rt(17+S*1.5,9.2,e+k,e+1.95,e+1.08,1);W(5,3.5,8,e+.01,13,x.olive,5),_t(2,4.5,15.4,11.5,16.05,e,"n",x.cream),_t(2,3.15,10.5,3.75,15.4,e,"e",x.cream),I(.5,.5,.38,7,e,13.4,x.oak,14),I(.5,.5,.38,9.4,e,13.4,x.oak,14),H(2,6.5,12.9,9.9,13.9),[[13.5,12.5],[16,13.5],[19,12.5],[22,13.5]].forEach(([S,P])=>Tt(2,S,P,e,.42,3,"oak"));for(let S=6;S<24;S+=4)rt(S,13,e+k,e+2,e,2);j(14,e+.7,16.2,2.4,1.4,"n"),j(19,e+.7,16.2,2.4,1.4,"n"),j(25,e+.7,12,1.6,1.4,"w"),it(2,24.3,15.5,e,.8);for(let[S,P]of U){let M=of(P,!1),D=new le(M,S);D.matrixAutoUpdate=!1,(S.blending===ss||S.transparent)&&(D.renderOrder=2),a.add(D)}let ce={bar:{n:"Public bar",lv:0,p:[2.6,6.2],look:[7,10.5],cap:"Ground floor \xB7 capacity 800",d:"The main front bar from the plan: an island bar with sage tiled front, timber top, brass foot rail and taps, stools all round, teal banquettes on the west wall and warm pendants.",img:"facade"},dining:{n:"Dining room (bistro)",lv:0,p:[21,17.5],look:[27,8],cap:"Ground floor \xB7 within the 800 ground-floor capacity",d:"The Harbord Dining Room: the curved green marble bar in the north-east corner, round timber tables and woven leather chairs, leather banquettes.",img:"diners"},garden:{n:"Beer garden",lv:0,p:[6.5,-6.3],look:[9,0],cap:"RL 14.62 \xB7 ground-floor licence 800, up to 275 in courtyards",d:"Sandstone paving, long timber tables with orange stools, yellow and white umbrellas, either side of the porch stair up to the front door.",img:"umbrellas"},function:{n:"Level 1 function space (Bombies)",lv:1,p:[25,14.6],look:[11,9.5],cap:"Level 1 \xB7 capacity 320",d:"The low-level performance space: timber stage with gold curtain, terracotta palm mural, bar on the east wall, retro timber armchairs and high tables.",img:"bombies"},terrace:{n:"Bombies terrace",lv:1,p:[1.4,2.6],look:[16,2],cap:"Level 1 verandah \xB7 70 seated / 110 standing",d:"The 147 m\xB2 verandah balcony behind the heritage balustrade: glass acoustic panels, red umbrellas, white rendered bars and timber stools.",img:"terrace"},attic:{n:"Attic studio & bar",lv:2,p:[5,11],look:[20,9],cap:"Attic \xB7 capacity 100",d:"Under the raised roof: a marble-topped bar, lounge, audio desk and glass-walled recording studio, reached by the new lift.",img:"bombies"}},jt=[i,t,e];function C(S,P,M){return S!==0?jt[S]:M<0?P>14.2&&P<19.8&&M>-5?n+(i-n)*Cn.clamp((M+4.8)/4,0,1):n:i}let v=[[-.2,-7.2,34.2,21.2],[0,0,31,16.2],[3,5,25,16.4]],O={x:15.6,z:1.6,lv:0,yaw:Math.PI,pitch:0,eye:1.62},$=.28;function at(S,P,M){for(let L=0;L<2;L++)for(let[Z,nt,K,dt]of q[S]){let ft=Cn.clamp(P,Z,K),Pt=Cn.clamp(M,nt,dt),It=P-ft,fe=M-Pt,ve=It*It+fe*fe;if(ve<$*$)if(ve>1e-8){let Ne=Math.sqrt(ve);P=ft+It/Ne*$,M=Pt+fe/Ne*$}else{let Ne=[P-Z,K-P,M-nt,dt-M],Sn=Math.min(...Ne);Sn===Ne[0]?P=Z-$:Sn===Ne[1]?P=K+$:Sn===Ne[2]?M=nt-$:M=dt+$}}if(S===0){let L=O.z<0,Z=M<0;L!==Z&&!(P>14.4&&P<17.1)&&(M=O.z)}let D=v[S];return[Cn.clamp(P,D[0]+$,D[2]-$),Cn.clamp(M,D[1]+$,D[3]-$)]}let vt={f:0,s:0,run:!1},xt=null;function ot(S){if(xt){let M=Math.min(1,(performance.now()-xt.t0)/xt.dur),D=M<.5?2*M*M:1-Math.pow(-2*M+2,2)/2;O.x=xt.a[0]+(xt.b[0]-xt.a[0])*D,O.z=xt.a[1]+(xt.b[1]-xt.a[1])*D;let L=xt.yb-xt.ya;L=Math.atan2(Math.sin(L),Math.cos(L)),O.yaw=xt.ya+L*D,O.pitch=xt.pa*(1-D),M>=1&&(xt=null)}else if(vt.f||vt.s){let M=(vt.run?4.2:2.4)*S,D=-Math.sin(O.yaw),L=-Math.cos(O.yaw),Z=Math.cos(O.yaw),nt=-Math.sin(O.yaw),K=at(O.lv,O.x+(D*vt.f+Z*vt.s)*M,O.z+(L*vt.f+nt*vt.s)*M);O.x=K[0],O.z=K[1]}let P=C(O.lv,O.x,O.z);pt+=(P-pt)*Math.min(1,S*10),o.position.set(O.x,pt+O.eye,O.z),o.rotation.set(O.pitch,O.yaw,0)}function ut(S,P){return Math.atan2(-(P[0]-S[0]),-(P[1]-S[1]))}function bt(S){let P=ce[S];O.lv=P.lv,O.x=P.p[0],O.z=P.p[1],O.yaw=ut(P.p,P.look),O.pitch=-.05,pt=C(O.lv,O.x,O.z)}function kt(S,P){let M=ce[S];if(M.lv!==O.lv){P(()=>bt(S));return}xt={a:[O.x,O.z],b:M.p,ya:O.yaw,yb:ut(M.p,M.look),pa:O.pitch,t0:performance.now(),dur:1300}}function wt(){O.lv=0,O.x=15.6,O.z=5.4,O.yaw=ut([15.6,5.4],[7,10.5]),O.pitch=-.04,pt=i}function Et(S,P,M,D,L){for(let[Z,nt,K,dt]of J[S]){let ft=0,Pt=1,It=D-P,fe=L-M,ve=!0;for(let[Ne,Sn]of[[-It,P-Z],[It,K-P],[-fe,M-nt],[fe,dt-M]])if(Ne===0){if(Sn<0){ve=!1;break}}else{let $e=Sn/Ne;if(Ne<0){if($e>Pt){ve=!1;break}$e>ft&&(ft=$e)}else{if($e<ft){ve=!1;break}$e<Pt&&(Pt=$e)}}if(ve&&ft<Pt)return!0}return!1}function Ht(){return O.lv===2?"attic":O.lv===1?O.z<4.1?"terrace":"function":O.z<0?"garden":O.x<15.5?"bar":"dining"}return{scene:a,camera:o,blocked:Et,step:ot,jump:kt,place:bt,startAtDoor:wt,ZONES:ce,P:O,input:vt,zoneAt:Ht,look(S,P){xt||(O.yaw-=S*.0042,O.pitch=Cn.clamp(O.pitch-P*.0036,-1.1,1.1))},pinPos:S=>{let P=ce[S],M=jt[P.lv]+(S==="garden"?n-i:0)+1.9;return new F(P.look[0],M,P.look[1])}}}function cf({M:i,zones:t}){let n=I=>(I-70)*.0613+7.5,s=I=>(I-205)*.0613+9.4,r=I=>I-11.5,a={B02:9.96,B01:13.06,AG:16.95,A1:20.15,A2:23.35,AR:27.25,BG:16.42,B1:19.52,BR:24,BRhi:26.6},o={wall:15657698,wall2:14472908,timber:11041358,char:3881527,glass:8957619,seam:9277841,slab:14274495,deck:12159582,coping:15328474,std:14674114,pink:15911384,acc:16040079,suite:15653770,boh:11130576,circ:13887470,core:10262156},l=new be;function c(I,W,B,Y,j,pt,ht,rt,Mt,Tt=!0){let X=new le(new Le(Math.abs(W-I),Math.abs(Y-B),Math.abs(pt-j)),typeof ht=="number"?i(ht):ht);return X.position.set((I+W)/2,(B+Y)/2,(j+pt)/2),X.castShadow=X.receiveShadow=Tt,rt.add(X),Mt&&(X.userData.zone=Mt,t.push(X)),X}let h=(I,W,B,Y,j,pt,ht,rt,Mt)=>c(n(I),n(W),r(j),r(pt),s(B),s(Y),ht,rt,Mt);function d(I,W){let B=document.createElement("canvas");B.width=256,B.height=128;let Y=B.getContext("2d");Y.fillStyle="rgba(58,34,22,.86)",Y.beginPath(),Y.roundRect(8,20,240,88,44),Y.fill(),Y.fillStyle="#F9E4CB",Y.textAlign="center",Y.font="700 46px Oswald, Arial Narrow, sans-serif",Y.fillText(I,128,W?70:80),W&&(Y.font="600 20px Oswald, Arial, sans-serif",Y.fillStyle="#E6A73E",Y.fillText(W,128,96));let j=new Zi(B);j.colorSpace=Oe;let pt=new Xr(new $s({map:j,depthTest:!1,transparent:!0}));return pt.renderOrder=10,pt.scale.set(4.2,2.1,1),pt}let u={},f=[{k:-1,a:a.B02},{k:0,a:a.AG,b:a.BG,ta:a.A1,tb:a.B1},{k:1,a:a.A1,b:a.B1,ta:a.A2,tb:a.BR},{k:2,a:a.A2,ta:a.AR}];f.forEach(I=>{let W=new be,B={g:W,shell:new be,plan:new be,tags:new be,doors:new be,l:I};W.add(B.shell,B.plan,B.tags,B.doors),B.doors.visible=!1,l.add(W),u[I.k]=B});let g=new be;l.add(g);let E=I=>[[I[0],175,300,860,935,"pink"],[I[1],300,420,860,935,"pink"],["Stair",430,500,862,950,"core"],["Lift",500,575,862,950,"core"],[I[2],615,708,860,935,"pink"],[I[3],708,800,860,935,"pink"],[I[4],800,895,860,935,"pink"]],m=I=>615+I*55.6,p={0:[["014",195,330,718,775,"std"],["013",195,330,775,830,"std"],["BOH",335,440,718,830,"boh"],["001",450,515,718,830,"acc"],["002",515,580,718,830,"acc"],["003",m(0),m(1),718,830,"std"],["004",m(1),m(2),718,830,"std"],["005",m(2),m(3),718,830,"std"],["006",m(3),m(4),718,830,"std"],["007",m(4),895,718,830,"std"],...E(["012","011","010","009","008"]),["Corridor",175,895,830,860,"circ"],["301",730,787,230,345,"std"],["302",787,844,230,345,"std"],["303",844,900,230,345,"std"],["Hall",730,900,345,370,"circ"],["Lounge",730,900,370,490,"circ"],["Lift",780,830,490,600,"core"],["BOH",730,780,490,600,"boh"],["304",830,900,540,610,"std"]],1:[["102",175,330,718,772,"std"],["101",175,330,772,830,"std"],["Gym",520,755,730,830,"boh"],["105",760,828,722,830,"acc"],["106",828,895,722,830,"acc"],...E(["111","110","109","108","107"]),["Corridor",175,895,830,860,"circ"],["401",730,782,215,345,"std"],["402",782,835,215,345,"std"],["403",835,900,230,345,"std"],["Hall",810,835,345,490,"circ"],["Void",730,810,345,490,"void"],["Lift",780,830,490,600,"core"],["405",730,780,490,610,"std"],["404",835,900,540,610,"std"]],2:[["202",175,330,718,772,"std"],["201",175,330,772,830,"std"],["205",760,895,722,830,"suite"],...E(["210","209","208","207","206"]),["Corridor",175,895,830,860,"circ"]]},T={1:[["103",382,722],["104",475,722]],2:[["203",382,722],["204",475,722]]},R=[175,895,690,940],y=[725,900,200,630],A=i(o.wall),w=i(o.glass,{roughness:.15,metalness:.2}),N=i(o.timber),_=i(o.char),x=i(o.glass,{transparent:!0,opacity:.35}),U=[195,300,450,515,m(0),m(1),m(2),m(3),m(4)];function z(I){let W=u[I.k].shell;if(I.k===-1){[a.B02,a.B01].forEach(rt=>{h(150,900,200,960,rt-.3,rt,o.slab,W,"basement");for(let Mt=200;Mt<880;Mt+=42)for(let Tt of[300,560,820])h(Mt,Mt+30,Tt-55,Tt-50,rt,rt+.02,16777215,W),h(Mt,Mt+30,Tt+50,Tt+55,rt,rt+.02,16777215,W),h(Mt+28,Mt+30,Tt-55,Tt-10,rt,rt+.02,16777215,W),h(Mt+28,Mt+30,Tt+10,Tt+55,rt,rt+.02,16777215,W);for(let Mt=230;Mt<880;Mt+=130)for(let Tt of[250,430,690,900])h(Mt,Mt+7,Tt,Tt+7,rt,rt+2.8,o.wall2,W)}),h(500,575,862,950,a.B02,a.AG,o.core,W),h(780,830,490,600,a.B01,a.BG,o.core,W);return}let B=I.a,Y=I.ta,j=R[2]+(I.k===0?25:0),pt=s(j),ht=s(R[3]);h(R[0],R[1],j,R[3],B-.3,B,o.slab,W,"rooms"),I.k===2?(c(n(R[0]),n(R[1]),r(B),r(Y),s(830)+.35,ht-.35,A,W,"rooms"),c(n(R[0]),n(520),r(B),r(Y),pt+.35,s(830),A,W,"rooms"),c(n(760),n(R[1]),r(B),r(Y),pt+.35,s(830),A,W,"rooms")):c(n(R[0]),n(R[1]),r(B),r(Y),pt+.35,ht-.35,A,W,"rooms"),U.forEach(rt=>{I.k===2&&rt>=520&&rt<760||(c(n(rt)+.35,n(rt)+2.7,r(B)+.15,r(B)+2.55,pt+.15,pt+.4,w,W),c(n(rt)+.35,n(rt)+2.7,r(B)+2.55,r(B)+2.7,pt+.05,pt+.45,_,W),I.k>0&&(c(n(rt),n(rt)+3,r(B)-.1,r(B)+.05,pt-1.4,pt,o.wall2,W),c(n(rt),n(rt)+3,r(B)+.05,r(B)+1.05,pt-1.42,pt-1.38,x,W)))}),[175,300,615,708,800].forEach(rt=>{c(n(rt)+.6,n(rt)+4.6,r(B)+.15,r(B)+2.55,ht-.4,ht-.15,w,W),c(n(rt)+.6,n(rt)+4.6,r(B)+2.55,r(B)+2.7,ht-.45,ht-.05,_,W)});for(let rt=430;rt<590;rt+=4.5)c(n(rt),n(rt)+.07,r(B),r(Y)+.6,ht-.05,ht+.1,N,W,"screen");for(let rt=R[2]+30;rt<R[3];rt+=4.5)c(n(R[0])-.1,n(R[0])+.05,r(B),r(Y),s(rt),s(rt)+.07,N,W),c(n(R[1])-.05,n(R[1])+.1,r(B),r(Y),s(rt),s(rt)+.07,N,W);if(h(500,575,940,952,B,Y+.6,_,W),I.b){h(y[0],y[1],y[2],y[3],I.b-.3,I.b,o.slab,W,"bldgb"),c(n(y[0])+.3,n(y[1])-.3,r(I.b),r(I.tb),s(y[2])+.3,s(y[3])-.3,A,W,"bldgb"),[730,787,844].forEach(rt=>c(n(rt)+.4,n(rt)+3.1,r(I.b)+.15,r(I.b)+2.6,s(y[2])+.1,s(y[2])+.35,w,W));for(let rt=240;rt<600;rt+=60)c(n(y[0])+.05,n(y[0])+.3,r(I.b)+.15,r(I.b)+2.6,s(rt),s(rt)+2.4,w,W),c(n(y[1])-.3,n(y[1])-.05,r(I.b)+.15,r(I.b)+2.6,s(rt),s(rt)+2.4,w,W);for(let rt=y[0];rt<y[1];rt+=4.5)c(n(rt),n(rt)+.07,r(I.b),r(I.tb),s(y[3])-.1,s(y[3])+.05,N,W)}}function q(I){let W=u[I.k],B=p[I.k];B&&(B.forEach(([Y,j,pt,ht,rt,Mt])=>{let Tt=j>=725&&rt<=640,X=Tt?I.b:I.a;if(X==null||Mt==="void")return;let it=Tt?"bldgb":Mt==="boh"&&Y==="Gym"||Y==="Lounge"?"reception":"rooms";if(h(j,pt,ht,rt,X,X+.04,i(o[Mt]||o.std),W.plan,it),Mt!=="circ"){let _t=Mt==="core"?3:2.7;h(j-1.2,j+1.2,ht,rt,X,X+_t,o.wall2,W.plan),h(pt-1.2,pt+1.2,ht,rt,X,X+_t,o.wall2,W.plan),h(j,pt,ht-1.2,ht+1.2,X,X+_t,o.wall2,W.plan),h(j,pt,rt-1.2,rt+1.2,X,X+_t,o.wall2,W.plan),Mt!=="core"&&(h(j+4,j+(pt-j)*.62,ht+6,ht+(rt-ht)*.45,X,X+.55,16777215,W.plan),h(j+(pt-j)*.62+3,pt-4,rt-(rt-ht)*.3,rt-4,X,X+2.4,13621462,W.plan))}if(/^\d{3}$/.test(Y)&&!Tt&&(rt===830||ht===860)){let _t=d(Y);_t.scale.set(.8,.4,1),_t.material.depthTest=!0,_t.position.set(n(j+14),r(X)+2.35,s(rt===830?831:859)),W.doors.add(_t),h(j+6,j+22,rt===830?828:858,rt===830?832:862,X,X+2.1,o.timber,W.doors)}if(/^\d{3}$/.test(Y)||["Lounge","Gym"].includes(Y)){let _t=d(Y,Mt==="acc"?"accessible":Mt==="suite"?"suite":Tt?"Bldg B":"");_t.position.set(n((j+pt)/2),r(X)+3.6,s((ht+rt)/2)),W.tags.add(_t)}}),(T[I.k]||[]).forEach(([Y,j,pt])=>{let ht=new be,rt=95*.0613,Mt=150*.0613;c(-rt/2,rt/2,0,.04,-Mt/2,Mt/2,o.acc,ht,"rooms"),[-rt/2,rt/2].forEach(it=>c(it-.07,it+.07,0,2.7,-Mt/2,Mt/2,o.wall2,ht)),c(-rt/2,rt/2,0,2.7,-Mt/2-.07,-Mt/2+.07,o.wall2,ht),c(-rt/2+.4,rt/2-.4,0,.55,-Mt/2+.8,0,16777215,ht),ht.position.set(n(j),r(I.a),s(pt)+Mt/2-1.5),ht.rotation.y=-.45,W.plan.add(ht);let Tt=new be;c(-rt/2,rt/2,0,r(I.ta)-r(I.a),-Mt/2,Mt/2,A,Tt,"rooms"),c(-rt/2+.3,rt/2-.3,.15,2.55,-Mt/2-.05,-Mt/2+.2,w,Tt),Tt.position.copy(ht.position),Tt.rotation.y=-.45,W.shell.add(Tt);let X=d(Y,"accessible");X.position.set(n(j),r(I.a)+3.6,s(pt+70)),W.tags.add(X)}))}f.forEach(I=>{z(I),q(I)});let J=new be;u[2].shell.add(J);{let I=r(a.A2),W=4,B=13.47,Y=(n(540)+n(770))/2,j=(s(690)+s(758))/2;c(n(520),n(760),I-.3,I,s(675),s(830),o.slab,J,"pool"),c(n(520),n(760),I,I+.12,s(675),s(830),i(o.deck),J,"pool");let pt=new zn,ht=W/2,rt=B/2-ht;pt.moveTo(-rt,-ht),pt.lineTo(rt,-ht),pt.absarc(rt,0,ht,-Math.PI/2,Math.PI/2,!1),pt.lineTo(-rt,ht),pt.absarc(-rt,0,ht,Math.PI/2,Math.PI*1.5,!1);let Mt=new zn(pt.getPoints(48).map(ct=>ct.clone().multiplyScalar(1))),Tt=new zn,X=ht+.35,it=rt;Tt.moveTo(-it,-X),Tt.lineTo(it,-X),Tt.absarc(it,0,X,-Math.PI/2,Math.PI/2,!1),Tt.lineTo(-it,X),Tt.absarc(-it,0,X,Math.PI/2,Math.PI*1.5,!1),Tt.holes.push(new Ji(pt.getPoints(48)));let _t=new le(new Ki(Tt,{depth:.18,bevelEnabled:!1}),i(o.coping));_t.rotation.x=-Math.PI/2,_t.position.set(Y,I+.12,j),_t.castShadow=_t.receiveShadow=!0,J.add(_t);let Bt=new le(new Qi(Mt),new Ti({color:2072534,roughness:.05,metalness:0,emissive:819112,emissiveIntensity:.55}));Bt.rotation.x=-Math.PI/2,Bt.position.set(Y,I+.2,j),Bt.userData.zone="pool",t.push(Bt),J.add(Bt);let Rt=new le(new wn(1.2,1.2,.3,32),i(o.coping));Rt.position.set(n(777),I+.27,s(708)),Rt.castShadow=!0,J.add(Rt);let Gt=new le(new Zr(.95,32),Bt.material);Gt.rotation.x=-Math.PI/2,Gt.position.set(n(777),I+.43,s(708)),J.add(Gt);for(let ct=0;ct<6;ct++)c(n(540)+ct*2.2,n(540)+ct*2.2+.8,I+.12,I+.45,s(770),s(800),15986404,J);c(n(520),n(760),I+.12,I+1.2,s(675),s(675)+.06,x,J);let se=d("POOL","L2 \xB7 31.5 m \xB7 62 kL");se.scale.set(5,2.5,1),se.position.set(Y,I+3.2,j),g.add(se);let lt=d("POOL","L2 \xB7 RL 23.35");lt.position.set(Y,I+3,j),u[2].tags.add(lt)}h(R[0],R[1],830,R[3],a.AR-.35,a.AR,o.wall2,g,"roof"),h(R[0],520,R[2]+5,830,a.AR-.35,a.AR,o.wall2,g,"roof"),h(760,R[1],R[2]+5,830,a.AR-.35,a.AR,o.wall2,g,"roof"),h(560,700,860,920,a.AR,a.AR+1.1,o.char,g);{let I=n(y[1]+10)-n(y[0]-15),W=s(y[3])-s(y[2]),B=r(a.BR),Y=r(a.BRhi),j=new Ce,pt=[[0,Y,0],[I,B,0],[I,B,W],[0,Y,W]];j.setAttribute("position",new ae([0,1,2,0,2,3].flatMap(Tt=>pt[Tt]),3)),j.computeVertexNormals();let ht=new le(j,i(o.seam,{side:Be,metalness:.35,roughness:.5}));ht.position.set(n(y[0]-15),0,s(y[2])),ht.castShadow=!0,ht.userData.zone="bldgb",t.push(ht),g.add(ht);let rt=Math.atan2(Y-B,I),Mt=Math.hypot(I,Y-B);for(let Tt=0;Tt<W;Tt+=.5){let X=new le(new Le(Mt,.04,.04),i(o.char));X.position.set(n(y[0]-15)+I/2,(B+Y)/2+.03,s(y[2])+Tt),X.rotation.z=-rt,g.add(X)}c(n(y[0])+.3,n(y[1])-.3,r(a.B1),r(a.BR),s(y[2])+.3,s(y[3])-.3,A,g,"bldgb")}function H(I,W){l.visible=I,I&&([-1,0,1,2].forEach(B=>{let Y=u[B],j=W===3?B>=0:W===-1?B===-1:B>=0&&B<=W;Y.g.visible=j;let pt=B===W;Y.plan.visible=pt&&B>=0,Y.tags.visible=pt,Y.shell.children.forEach(ht=>{ht.visible=!(pt&&B>=0)||ht===J||ht.position&&ht.position.y<r(Y.l.a)+.2})}),g.visible=W===3)}let V={start(I){let W=I>=0&&I<=2?I:0,B=u[W];return B.tags.visible=!1,B.doors.visible=!0,{pos:[n(200),r(B.l.a)+1.6,s(845)],min:[n(182),s(834)],max:[n(888),s(856)]}},stop(){Object.values(u).forEach(I=>I.doors.visible=!1)}},st={rooms:[n(820),r(a.AR)+1.4,s(800)],pool:[(n(540)+n(770))/2,r(a.A2)+1.2,s(720)],bldgb:[n(812),r(a.BRhi)+1,s(420)],reception:[n(812),r(a.BG)+1.4,s(430)],basement:[n(520),r(a.B01)+1.2,s(560)],screen:[n(510),r(a.A1),s(955)]};return{root:l,levels:u,roofs:g,apply:H,walk:V,P:st,X:n,Z:s,Y:r}}var Uh="?v="+((document.querySelector("meta[name=wc-ver]")||{}).content||"1"),ds=document.getElementById("tour3d"),De=i=>i-11.5,wa=64,ps=57,Pn={render:15986404,render2:15130320,roof:11818799,roof2:10111532,timber:9067066,glass:7248536,pool:5814214,ground:15324078,lawn:10922860,road:9273975,tree:8159304,tree2:7303488,slab:14273460,room:15852492,hotelRoof:13616824,base:10260352},Te=new Bl({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),vf=Math.min(devicePixelRatio,innerWidth<700?1.5:2),Ev=Math.min(devicePixelRatio,innerWidth<700?1.25:1.5);Te.setPixelRatio(vf);Te.shadowMap.enabled=!0;Te.shadowMap.type=is;Te.outputColorSpace=Oe;Te.toneMapping=ha;Te.toneMappingExposure=1.05;ds.appendChild(Te.domElement);var ii=new qi;ii.background=new Zt(16179910);ii.fog=new Hr(16179910,140,260);var Ge=new qe(38,1,.5,600),yn=new Vl(Ge,Te.domElement);yn.enableDamping=!0;yn.maxPolarAngle=Math.PI*.49;yn.minDistance=18;yn.maxDistance=190;yn.target.set(30,6,24);Ge.position.set(-20,48,-46);ds.clientWidth<ds.clientHeight&&Ge.position.set(-45,85,-80);ii.add(new es(16774370,10255194,1.1));var Bi=new ns(16771528,2.1);Bi.position.set(-40,80,-30);Bi.castShadow=!0;Bi.shadow.mapSize.set(2048,2048);Object.assign(Bi.shadow.camera,{left:-70,right:70,top:70,bottom:-70,near:10,far:220});Bi.shadow.bias=-4e-4;Bi.target.position.set(31,0,34);ii.add(Bi,Bi.target);var hf={},he=(i,t={})=>{let e=i+JSON.stringify(t);return hf[e]||(hf[e]=new Ti({color:i,roughness:.85,metalness:0,...t}))},Yn=[];function Aa(i,t,e,n,s,r,a,o,l){let c=new le(new Le(i,t,e),a);return c.position.set(n+i/2,s+t/2,r+e/2),c.castShadow=c.receiveShadow=!0,o.add(c),l&&(c.userData.zone=l,Yn.push(c)),c}function Zl(i,t,e,n,s,r,a,o,l){let c=new Ce,h=Math.min(i,t)/2,d=[[0,0,0],[i,0,0],[i,0,t],[0,0,t],[h,e,h],[i-h,e,h],[i-h,e,t-h],[h,e,t-h]],u=[[0,4,1],[1,4,5],[1,5,2],[2,5,6],[2,6,3],[3,6,7],[3,7,0],[0,7,4],[4,7,5],[5,7,6]],f=[];u.forEach(E=>E.forEach(m=>f.push(...d[m]))),c.setAttribute("position",new ae(f,3)),c.computeVertexNormals();let g=new le(c,new Ti({color:a.color,roughness:.8,side:Be}));return g.position.set(n,s,r),g.castShadow=!0,g.receiveShadow=!0,o.add(g),l&&(g.userData.zone=l,Yn.push(g)),g}var Ra=new be;ii.add(Ra);var Ca=new An(wa+60,ps+60,90,90);Ca.rotateX(-Math.PI/2);Ca.translate(wa/2,0,ps/2);var Fh=(i,t)=>{let e=Cn.clamp(t/ps,0,1);return De(11.5)+e*(De(21.8)-De(11.5))+(t<0,0)},Gl=Ca.attributes.position;for(let i=0;i<Gl.count;i++)Gl.setY(i,Fh(Gl.getX(i),Gl.getZ(i))-.05);Ca.computeVertexNormals();var Ih=he(Pn.ground,{transparent:!0,opacity:1}),Oh=new le(Ca,Ih);Oh.receiveShadow=!0;Ra.add(Oh);var Bh=he(Pn.road);Aa(wa+40,.3,7,-20,-.3,-8,Bh,Ra);var zh=new le(new Le(wa+40,.3,7),Bh);zh.position.set(wa/2,De(21.8),ps+4.5);zh.receiveShadow=!0;Ra.add(zh);var Jl=new le(new Le(8,.3,ps+14),Bh);Jl.position.set(-5,(De(11.5)+De(21.8))/2,ps/2);Jl.rotation.x=-Math.atan((De(21.8)-De(11.5))/ps);Jl.receiveShadow=!0;Ra.add(Jl);var yf=new be;ii.add(yf);var ne=7.5,ie=9.4,nn=he(Pn.render),Mf=he(Pn.render2),Sf=he(Pn.roof),bf=he(Pn.roof2),Ef=he(Pn.lawn),Tv=he(Pn.slab),wv=he(14205856),Tf=he(4156245),Av=he(12159582),wf=he(Pn.glass,{transparent:!0,opacity:.5,roughness:.2}),fs=he(9067066),kh=he(5913128),Af=[],zi=i=>{let t=new be;return yf.add(t),Af.push({g:t,lv:i}),t},We=zi(0),$l=zi(1),Kl=zi(2),si=zi(3),jl=zi(.5),Mn=zi(-.5),Rf=zi(1.5),ms=zi(-1.5),Kt=De(16.33),Me=De(20.13),ln=De(23.34),ri=De(14.62),Jt=(i,t,e,n,s,r,a,o,l)=>Aa(i,t,e,ne+n,s,ie+r,a,o,l);Jt(31,Kt,31,0,0,0,Mf,We);Jt(14,ri,7,.2,0,-7,Ef,We,"garden");Jt(14,ri,7,19.8,0,-7,Ef,We,"garden");Jt(5.6,ri+.8,7,14.2,0,-7,he(13483944),We,"porch");for(let i=0;i<7;i++)Jt(5.6,(Kt-ri)*(i+1)/7,.6,14.2,ri,-1.2-i*.6+.6,he(14273718),We,"porch");[[3,-3.6],[7.5,-4.5],[11,-3],[23,-3.6],[27.5,-4.5],[31,-3]].forEach(([i,t],e)=>{let n=new le(new wn(.06,.06,2.4,6),he(5910044));n.position.set(ne+i,ri+1.2,ie+t),We.add(n);let s=new le(new bi(1.5,.6,8),he(e%2?14722106:15986404));s.position.set(ne+i,ri+2.5,ie+t),s.castShadow=!0,s.userData.zone="garden",Yn.push(s),We.add(s)});Jt(14,Me-Kt-.3,4.1,0,Kt,0,wf,We,"courtyards");Jt(14,Me-Kt-.3,4.1,17,Kt,0,wf,We,"courtyards");Jt(3,Me-Kt-.3,4.1,14,Kt,0,nn,We,"porch");Jt(2,2.6,.08,14.5,Kt,-.08,he(15911306,{emissive:11565104,emissiveIntensity:.8}),We);Jt(2.3,.12,.12,14.35,Kt+2.6,-.12,fs,We);Jt(.12,2.6,.12,14.35,Kt,-.12,fs,We);Jt(.12,2.6,.12,16.53,Kt,-.12,fs,We);Jt(31,Me-Kt,16.8,0,Kt,4.1,nn,jl,"frontbar");Jt(26,Me-Kt-.4,4.2,1,Kt,20.9,nn,jl,"kitchen");var Rv=he(14268812),Cv=he(15258286);Jt(14.5,.12,16.8,0,Kt,4.1,Rv,Mn,"frontbar");Jt(16.5,.12,16.8,14.5,Kt,4.1,Cv,Mn,"dining");Jt(26,.12,4.2,1,Kt,20.9,he(13619144),Mn,"kitchen");Jt(31,1.4,.3,0,Kt,20.6,nn,Mn);Jt(.3,1.4,16.8,0,Kt,4.1,nn,Mn);Jt(.3,1.4,16.8,30.7,Kt,4.1,nn,Mn);Jt(1.3,1.1,6,5.6,Kt+.12,8.5,kh,Mn,"frontbar");Jt(5,1.1,1.3,5.6,Kt+.12,8.5,kh,Mn,"frontbar");var gs=new le(new na(2.6,.55,6,18,Math.PI*.9),Tf);gs.rotation.x=Math.PI/2;gs.rotation.z=-Math.PI*.15;gs.position.set(ne+25.5,Kt+.7,ie+8.5);gs.castShadow=!0;gs.userData.zone="dining";Yn.push(gs);Mn.add(gs);for(let i=0;i<3;i++)for(let t=0;t<2;t++)Jt(1.3,.75,1.3,2.5+t*3,Kt+.12,12+i*2.6,fs,Mn,"frontbar"),Jt(1.5,.75,1.5,18+t*3.2,Kt+.12,12+i*2.8,fs,Mn,"dining");Jt(4,1,6,13.4,Kt+.12,13.4,he(12105904),Mn,"kitchen");Jt(2.6,1.2,4,17.5,Kt+.12,7,fs,Mn,"stair");Jt(7,.2,4.5,1.1,Kt,26.6,wv,We,"courtyards");Jt(14.7,Me-Kt-.4,4,1.1,Kt,21.3,nn,jl,"lounge");Jt(8.2,De(26.2)-Kt,9.5,18.8,Kt,16,nn,jl,"stair");Aa(13.1,De(15.02)-0+2.8,19.7,48.3,0,10.2,Mf,We,"bottleshop");Zl(13.1,19.7,2.2,48.3,De(15.02)+2.8,10.2,bf,We,"bottleshop");Aa(20,.12,5,28.5,Fh(30,49),47.8,he(12432035),We,"carpark");Jt(30,.15,3.6,.2,Me-.1,.5,Tv,$l,"balcony");Jt(30,1.1,.25,.2,Me,.5,nn,$l,"balcony");for(let i=0;i<9;i++)Jt(.4,2.9,.4,.2+i*3.7,Me,.5,nn,$l);Jt(27,ln-Me+.3,11.8,.1,Me,4.1,nn,Rf,"bombies");Jt(27,.12,11.8,.1,Me,4.1,Av,ms,"bombies");Jt(27,1.3,.3,.1,Me,15.6,nn,ms);Jt(.3,1.3,11.8,.1,Me,4.1,nn,ms);Jt(.3,1.3,11.8,26.8,Me,4.1,nn,ms);Jt(.3,1.3,11.8,8.5,Me,4.1,nn,ms);Jt(2.4,1.1,4,19.5,Me+.12,8,he(8366502),ms,"bombies");Jt(8,.3,7,9.5,Me+.12,5,he(13216131),ms,"bombies");Jt(8.2,De(22.83)-Me+.2,9.5,18.8,Me,16,nn,$l,"stair");Jt(22,.15,11,3,ln,5.2,he(14268812),Kl,"attic");Jt(8.4,2.4,3.4,15.8,ln+.15,5.3,kh,Kl,"attic");Jt(12.3,2.2,.15,3.5,ln+.15,8.2,he(15260872),Kl,"attic");Jt(1.1,1.1,4,18.5,ln+.15,10,Tf,Kl,"attic");Zl(30.7,15,De(27.3)-ln-.2,-.5,ln+.2,2.2+ie-ie,Sf,si,"roofpub");si.children[si.children.length-1].position.set(ne-.5,ln+.2,ie+2.2);var xr=new zn;xr.moveTo(-3.6,0);xr.lineTo(3.6,0);xr.lineTo(0,3.4);xr.lineTo(-3.6,0);var Pa=new le(new Ki(xr,{depth:6,bevelEnabled:!1}),he(Pn.roof));Pa.position.set(ne+15.5,ln+.2,ie+1.6);Pa.castShadow=!0;Pa.userData.zone="roofpub";Yn.push(Pa);si.add(Pa);var Cf=new le(new Qi(xr),he(15327698,{side:Be}));Cf.position.set(ne+15.5,ln+.2,ie+1.55);si.add(Cf);for(let i=-3;i<=3;i++)Jt(.08,3.2-Math.abs(i)*.9,.06,15.5+i*.9,ln+.25,1.5,fs,si);Zl(31,3.6,.9,-.3,ln-.4,.2,bf,si,"balcony");si.children[si.children.length-1].position.set(ne-.3,ln-.5,ie+.2);var Pv=Zl(8,7.5,1.4,0,0,0,Sf,si,"attic");Pv.position.set(ne+15.4,De(26.2),ie+8.7);var Iv=he(5917248);for(let i=0;i<8;i++)Jt(1.2,1.5,.15,1.8+i*3.4,Me+.9,4,Iv,Rf);Aa(16,Kt,2,ne+10,0,ie+31,he(13216131),We,"deck");var Xl=new be;ii.add(Xl);function Lv(i,t,e=1){let n=Fh(i,t),s=new le(new wn(.25*e,.35*e,3*e,6),he(7031347));s.position.set(i,n+1.5*e,t),s.castShadow=!0,Xl.add(s);let r=new le(new ji(2.6*e,0),he(Math.random()<.5?Pn.tree:Pn.tree2,{flatShading:!0}));r.position.set(i,n+4.2*e,t),r.castShadow=!0,Xl.add(r)}[[8,57],[17,57.5],[27,57],[38,57.5],[49,57],[59,52],[2,36],[58,8],[61,30]].forEach(([i,t])=>Lv(i,t,.75+Math.random()*.25));var mr=new be;ii.add(mr);var pr=cf({M:he,zones:Yn});mr.add(pr.root);var Ql={porch:["Front porch entry","Ground \xB7 RL 16.33","The central porch and stairs up from the beer garden, the front door off Moore Road."],frontbar:["Main front bar","Ground \xB7 RL 16.33","To the right as you enter: the main bar, looking out over the beer garden."],dining:["Harbord Dining Room","Ground \xB7 RL 16.33","To the left of the porch, the former Balsa restaurant, with its curved green marble bar and spotted gum ceilings."],kitchen:["Kitchen & back of house","Ground \xB7 RL 16.33","Kitchen, cool room and wash-up behind the bars."],lounge:["Lounge","Ground \xB7 rear","The rear lounge beside the back courtyard."],courtyards:["Courtyards","Ground \xB7 RL 16.33 / 16.42","The enclosed front courtyards in the former verandah, and the rear courtyard."],garden:["Beer garden","RL 14.62","Below the front bar on either side of the porch stairs, stepping down to Moore Road."],stair:["Stair & new lift","Ground to attic","The restored original staircase, with a new lift serving Level 1 and the attic."],bombies:["Bombies & Level 1 functions","Level 1 \xB7 RL 20.13 \xB7 capacity 320","The performance space and bar on Level 1, opening onto the verandah."],balcony:["Verandah balcony \xB7 Bombies Rooftop Terrace","Level 1 \xB7 RL 20.20 \xB7 about 147 m\xB2","The full-width balcony behind the heritage balustrade, with glass acoustic panels. 70 seated or 110 standing."],attic:["Attic studio & bar","Attic \xB7 RL 23.34 \xB7 capacity 100","About 150 m\xB2 under the raised roof: a lounge, bar, audio desk and recording studio, reached by the new lift."],roofpub:["Hipped terracotta roof","Ridge about RL 27","White render under terracotta tiles, with the street-facing central gable and timber batten infill."],bottleshop:["Bottle shop","East \xB7 FFL 15.02","The bottle shop to the east of the pub."],carpark:["Car park","South of the pub","Existing hard-stand car parking behind the pub."],deck:["Rear edge","RL 16.33","The back of the pub, where the proposed accommodation would connect."],reception:["Building B lounge & reception","Proposed \xB7 Ground \xB7 RL 16.42","Hotel arrival in Building B off the courtyard between the pub and the new rooms: lounge, reception and lift, with rooms 301 to 304 alongside."],bldgb:["Building B","Proposed \xB7 2 storeys + mezzanine","About 11 \xD7 26 m on the old bottle shop site. Rooms 301 to 304 on the ground floor (RL 16.42) and 401 to 405 on Level 1 (RL 19.52) under a sloping standing-seam metal roof."],rooms:["Building A guest rooms","Proposed \xB7 3 storeys \xB7 35 of 44 rooms","About 44 \xD7 15 m along the south of the site. Rooms either side of a central corridor: 001 to 014 at Ground (RL 16.95), 101 to 111 at Level 1 (RL 20.15), 201 to 210 at Level 2 (RL 23.35)."],pool:["Level 2 pool & spa","Proposed \xB7 Building A \xB7 RL 23.35","An open-air pool deck on Level 2 between the angled rooms and suite 205. The DA plan gives a 31.5 m pool perimeter and 62 kL volume, with a spa at the east end and the gym below."],screen:["Timber battens & stair core","Proposed","Natural timber battens wrap the stair core and the ends of Building A, over light fibre-cement cladding."],roof:["Building A roof","Proposed \xB7 RL 27.25","A flat roof behind a parapet at RL 27.25, below the pub ridge, left open over the pool deck."],basement:["Basement parking","Proposed \xB7 B01 RL 13.06 \xB7 B02 RL 9.96","Two basement car park levels under the site, ramped from Moore Road."]},Oi=!1,ze=3;function Pf(){pr.apply(Oi,ze),Af.forEach(i=>i.g.visible=i.lv===-.5?ze===0:i.lv===-1.5?ze===1:i.lv===2?ze===2:ze===-1?!0:i.lv<=ze),Yn.forEach(i=>{let t=i.userData.zone;(t==="bottleshop"||t==="carpark"||t==="deck")&&(i.visible=!Oi)}),Ih.opacity=ze===-1?.25:1,Ih.depthWrite=ze!==-1,Xl.visible=ze!==-1,Nf()}function vr(i){Oi=i;let t=performance.now();if(mr.visible=!0,i){mr.scale.y=.001;let e=n=>{let s=Math.min(1,(n-t)/900);mr.scale.y=.001+.999*(1-Math.pow(1-s,3)),s<1&&requestAnimationFrame(e)};requestAnimationFrame(e)}Pf(),document.querySelectorAll("[data-era]").forEach(e=>e.setAttribute("aria-pressed",e.dataset.era==="future"===i)),document.getElementById("eraNote").textContent=i?"Showing the proposed hotel from the HBH DA plans (June 2026, in progress): Buildings A and B and the Level 2 pool, at true scale and heights beside the pub.":"Today: the Harbord as it stands. Tap a zone or play the guided tour."}var If=[["porch",[ne+17,Kt+1.6,ie-2.5]],["frontbar",[ne+6,Me+.4,ie+12]],["dining",[ne+24,Me+.4,ie+10]],["garden",[ne+6,ri+3.2,ie-4]],["courtyards",[ne+6,Me-1,ie+.2]],["balcony",[ne+25,Me+1.4,ie+1.6]],["bombies",[ne+6,ln+.6,ie+12]],["attic",[ne+19,De(27.8),ie+12]],["stair",[ne+23,De(26.4),ie+21]],["kitchen",[ne+8,Me,ie+23]],["bottleshop",[55,De(15.02)+5.4,24]],["bldgb",pr.P.bldgb],["pool",pr.P.pool],["rooms",pr.P.rooms],["basement",pr.P.basement]],Hh=document.getElementById("pins");Hh.innerHTML=If.map(([i],t)=>`<button class="pin" data-z="${i}" style="display:none" aria-label="${Ql[i][0]}">${t+1}</button>`).join("");var Lf=[...Hh.children],Df=i=>Ql[i][1].startsWith("Proposed");function Dv(i){return ze===-1?i==="basement":i==="basement"||Df(i)&&!Oi?!1:i==="pool"?Oi&&(ze===3||ze===2):i==="rooms"||i==="bldgb"?Oi&&ze>=0:i==="attic"?ze===2||ze===3:["balcony","bombies"].includes(i)?ze>=1:["frontbar","dining"].includes(i)?ze===0||ze===3:!0}var cs=new F,Ch=new ir,uf={},Lh=0,Nv=()=>[Oh,...Yn.filter(i=>{let t=i;for(;t;){if(!t.visible)return!1;t=t.parent}return!0})];function Nf(){let i=Te.domElement.getBoundingClientRect();If.forEach(([t,e],n)=>{let s=Lf[n];if(!Dv(t)){s.style.display="none";return}if(cs.set(...e),t!=="basement"&&Df(t)&&(cs.y*=mr.scale.y),Lh%8===0){let r=cs.clone().sub(Ge.position),a=r.length();Ch.set(Ge.position,r.normalize()),Ch.far=a-1.2;let o=Ch.intersectObjects(Nv(),!1);uf[t]=o.length>0&&ze!==-1}if(s.classList.toggle("hid",!!uf[t]),cs.project(Ge),cs.z>1){s.style.display="none";return}s.style.display="",s.style.transform=`translate(${(cs.x*.5+.5)*i.width-24}px,${(-cs.y*.5+.5)*i.height-24}px)`})}var Uf=document.getElementById("tinfo"),df={porch:"entrance",frontbar:"facade",dining:"diners",kitchen:"table",lounge:"diners",courtyards:"courtyard",garden:"umbrellas",stair:"entrance",bombies:"bombies",balcony:"terrace",attic:"bombies",roofpub:"facade",bottleshop:"corner",carpark:"corner",deck:"corner"};function yr(i){let t=Ql[i];if(!t)return;let e=df[i]||"aerial";Uf.innerHTML=`<div class="z">${t[1]}</div><h3 class="hd">${t[0]}</h3><p>${t[2]}</p><figure class="iref"><img src="../assets/img/tour/${e}.jpg${Uh}" alt="The Harbord today: ${t[0]}" loading="lazy"><figcaption>${df[i]?"The Harbord today, for reference.":"The site today, for context. The proposed building is concept only."}</figcaption></figure>`,Lf.forEach(n=>n.classList.toggle("on",n.dataset.z===i)),Yn.forEach(n=>{n.material&&n.material.emissive}),Uv(i)}var Ph=[];function Uv(i){Ph.forEach(([t,e])=>t.material=e),Ph=[],Yn.filter(t=>t.userData.zone===i&&!t.isInstancedMesh).forEach(t=>{Ph.push([t,t.material]);let e=t.material.clone();e.emissive=new Zt(14722106),e.emissiveIntensity=.35,t.material=e})}var ff=new ir,pf=new mt,Wl=null;Te.domElement.addEventListener("pointerdown",i=>Wl=[i.clientX,i.clientY]);Te.domElement.addEventListener("pointerup",i=>{if(qn!=="out"||!Wl||Math.hypot(i.clientX-Wl[0],i.clientY-Wl[1])>6)return;let t=Te.domElement.getBoundingClientRect();pf.set((i.clientX-t.left)/t.width*2-1,-(i.clientY-t.top)/t.height*2+1),ff.setFromCamera(pf,Ge);let e=ff.intersectObjects(Yn.filter(n=>{let s=n;for(;s;){if(!s.visible)return!1;s=s.parent}return!0}),!1)[0];e&&yr(e.object.userData.zone)});Hh.addEventListener("click",i=>{let t=i.target.closest(".pin");t&&yr(t.dataset.z)});document.querySelectorAll("[data-era]").forEach(i=>i.onclick=()=>{_s(),vr(i.dataset.era==="future")});document.querySelectorAll("[data-cut]").forEach(i=>i.onclick=()=>{_s(),Ia(+i.dataset.cut)});function Ia(i){ze=i,i===-1&&!Oi&&vr(!0),Pf(),document.querySelectorAll("[data-cut]").forEach(t=>t.setAttribute("aria-pressed",+t.dataset.cut===i))}var ba=[{t:"Arriving on Moore Road",z:"porch",cam:[ne+40,16,-26],tg:[ne+16,6,ie],cut:3,f:!1},{t:"The beer garden below the front bar",z:"garden",cam:[ne-10,9,-12],tg:[ne+7,4,ie-3],cut:3,f:!1},{t:"Roof off: the main front bar",z:"frontbar",cam:[ne-12,24,ie-8],tg:[ne+8,5,ie+12],cut:0,f:!1},{t:"The Harbord Dining Room and its curved marble bar",z:"dining",cam:[ne+44,22,ie-6],tg:[ne+23,5,ie+11],cut:0,f:!1},{t:"Level 1: Bombies and the functions space",z:"bombies",cam:[ne+8,28,ie-18],tg:[ne+13,9,ie+9],cut:1,f:!1},{t:"The verandah balcony, Bombies Rooftop Terrace",z:"balcony",cam:[ne+36,14,ie-12],tg:[ne+18,9,ie+2],cut:1,f:!1},{t:"Under the raised roof: the attic studio and bar",z:"attic",cam:[ne-10,32,ie-6],tg:[ne+16,12,ie+10],cut:2,f:!1},{t:"The Harbord today",z:"roofpub",cam:[-20,48,-46],tg:[30,6,24],cut:3,f:!1},{t:"Bonus: the proposed hotel, Buildings A and B, and the Level 2 pool",z:"pool",cam:[40,34,14],tg:[43,11,41],cut:3,f:!0}],La=!1,hs=0,Ff=null,gr=null,Fv=document.getElementById("tcap"),Ea=document.getElementById("tplay");function Of(i){i.f!==Oi&&vr(i.f),Ia(i.cut),yr(i.z),Fv.innerHTML=`<b>${hs+1}/${ba.length}</b> ${i.t}`;let t=Ge.position.clone(),e=yn.target.clone(),n=new F(...i.tg),s=new F(...i.cam).sub(n).multiplyScalar(Ge.aspect<1?Math.min(2,1.1/Ge.aspect):1).add(n),r=performance.now(),a=2600;gr=o=>{let l=Math.min(1,(o-r)/a),c=l<.5?4*l*l*l:1-Math.pow(-2*l+2,3)/2;Ge.position.lerpVectors(t,s,c),yn.target.lerpVectors(e,n,c),l>=1&&(gr=null)}}function Vh(){Of(ba[hs]),hs=(hs+1)%ba.length,La&&(Ff=setTimeout(Vh,5200))}function Ov(){La=!0,Ea.textContent="Pause tour",Ea.setAttribute("aria-pressed","true"),hs=hs%ba.length,Vh()}function _s(){La=!1,clearTimeout(Ff),Ea.textContent="Play guided tour",Ea.setAttribute("aria-pressed","false")}Ea.onclick=()=>La?_s():Ov();document.getElementById("tnext").onclick=()=>{_s(),Vh()};yn.addEventListener("start",()=>{La&&_s(),gr=null});function Da(){let i=ds.clientWidth,t=ds.clientHeight;Te.setSize(i,t,!1),Te.domElement.style.width=i+"px",Te.domElement.style.height=t+"px",Ge.aspect=i/t,Ge.updateProjectionMatrix(),de&&(de.camera.aspect=i/t,de.camera.fov=i<t?78:68,de.camera.updateProjectionMatrix())}new ResizeObserver(Da).observe(ds);Da();var qn="out",de=null,ql=null,mf=performance.now(),Sa=ds.parentElement,gf=document.getElementById("tfade"),Gh=document.getElementById("inui"),Bf=document.getElementById("icap"),Dh=document.getElementById("ipins"),_f=["bar","dining","garden","function","terrace","attic"];function Wh(i){gf.classList.add("on"),setTimeout(()=>{i(),setTimeout(()=>gf.classList.remove("on"),60)},420)}function Xh(i){let t=de.ZONES[i];Uf.innerHTML=`<div class="z">${t.cap}</div><h3 class="hd">${t.n}</h3><p>${t.d}</p><figure class="iref"><img src="../assets/img/tour/${t.img}.jpg${Uh}" alt="The Harbord today: ${t.n}" loading="lazy"><figcaption>The Harbord today, for reference. The 3D interior is illustrative, based on approved plans.</figcaption></figure>`,Bf.innerHTML=`<b>${t.n}</b> ${t.cap}`,document.querySelectorAll("[data-iz]").forEach(e=>e.setAttribute("aria-pressed",e.dataset.iz===i))}function Bv(){de||(de=lf({y0:Kt,y1:Me,y2:ln,yg:ri,imgBase:"../assets/img/tour/",imgQ:Uh}),document.getElementById("izs").innerHTML=_f.map(i=>`<button data-iz="${i}" aria-pressed="false">${de.ZONES[i].n.replace(" (Bombies)","").replace(" (bistro)","")}</button>`).join(""),Dh.innerHTML=_f.map((i,t)=>`<button class="pin ipin" data-iz="${i}" aria-label="${de.ZONES[i].n}" style="display:none">${t+1}</button>`).join(""),Gh.addEventListener("click",i=>{let t=i.target.closest("[data-iz]");t&&Nh(t.dataset.iz)}),Dh.addEventListener("click",i=>{let t=i.target.closest("[data-iz]");t&&Nh(t.dataset.iz)}),Da())}var Ta=null;function Nh(i){de.jump(i,Wh),Ta=i,Xh(i)}function qh(){if(qn!=="out")return;_s(),gr=null,vr(!1),Ia(3),Bv(),qn="flying",yn.enabled=!1,Sa.classList.add("flying");let i=new F(ne+15.6,Kt+1.7,ie-3.2),t=new F(ne+15.6,Kt+1.3,ie+6),e=new F(ne+15.6,Kt+9,ie-30),n=Ge.position.clone(),s=yn.target.clone(),r=performance.now(),a=2600;ql=o=>{let l=Math.min(1,(o-r)/a),c=l<.5?4*l*l*l:1-Math.pow(-2*l+2,3)/2,h=n.clone().lerp(e,c),d=e.clone().lerp(i,c);Ge.position.copy(h.lerp(d,c));let u=s.clone().lerp(t,Math.min(1,c*1.3));Ge.lookAt(u),l>=1&&(ql=null,Wh(()=>{qn="in",de.startAtDoor(),Te.setPixelRatio(Ev),Da(),Sa.classList.remove("flying"),Sa.classList.add("inside"),Gh.hidden=!1,Ta=null,Xh("bar"),Bf.innerHTML="<b>Inside the Harbord</b> "+(matchMedia("(pointer:coarse)").matches?"Joystick to walk, drag to look, or tap a zone.":"WASD or arrow keys to walk, drag to look, or pick a zone.")}))}}function Yh(){qn==="in"&&Wh(()=>{qn="out",Gh.hidden=!0,Sa.classList.remove("inside"),Te.setPixelRatio(vf),Da(),yn.enabled=!0,Ge.position.set(ne+15.6,ri+9,ie-26),yn.target.set(ne+15.6,Kt,ie+6),yr("porch")})}document.getElementById("tin").onclick=qh;var Zh=i=>{i&&i.preventDefault(),Sa.scrollIntoView({block:"center",behavior:"smooth"}),setTimeout(qh,i?350:150)};document.getElementById("twalk").onclick=Zh;var xf=document.getElementById("heroWalk");xf&&(xf.onclick=Zh);new URLSearchParams(location.search).get("inside")==="1"&&setTimeout(()=>Zh(),400);document.getElementById("tout").onclick=Yh;var Xn={},Yl={KeyW:"f",ArrowUp:"f",KeyS:"b",ArrowDown:"b",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"};addEventListener("keydown",i=>{qn!=="in"||i.target.closest&&i.target.closest("input,textarea")||(Yl[i.code]&&(Xn[Yl[i.code]]=1,i.preventDefault()),i.key==="Shift"&&(Xn.run=1),i.key==="Escape"&&Yh())});addEventListener("keyup",i=>{Yl[i.code]&&(Xn[Yl[i.code]]=0),i.key==="Shift"&&(Xn.run=0)});addEventListener("blur",()=>{for(let i in Xn)Xn[i]=0});var ni=null;Te.domElement.addEventListener("pointerdown",i=>{if(qn==="in"){ni={id:i.pointerId,x:i.clientX,y:i.clientY};try{Te.domElement.setPointerCapture(i.pointerId)}catch{}}});Te.domElement.addEventListener("pointermove",i=>{qn!=="in"||!ni||i.pointerId!==ni.id||(de.look(i.clientX-ni.x,i.clientY-ni.y),ni.x=i.clientX,ni.y=i.clientY)});var zf=i=>{ni&&i.pointerId===ni.id&&(ni=null)};Te.domElement.addEventListener("pointerup",zf);Te.domElement.addEventListener("pointercancel",zf);var us=document.getElementById("joy"),kf=us.firstElementChild,Fi=null,_r={x:0,y:0};us.addEventListener("pointerdown",i=>{i.preventDefault(),i.stopPropagation();try{us.setPointerCapture(i.pointerId)}catch{}let t=us.getBoundingClientRect();Fi={id:i.pointerId,cx:t.left+t.width/2,cy:t.top+t.height/2},Hf(i)});function Hf(i){if(!Fi||i.pointerId!==Fi.id)return;let t=i.clientX-Fi.cx,e=i.clientY-Fi.cy,n=Math.hypot(t,e),s=42;n>s&&(t*=s/n,e*=s/n),_r.x=t/s,_r.y=e/s,kf.style.transform=`translate(${t}px,${e}px)`}us.addEventListener("pointermove",Hf);var Vf=i=>{Fi&&i.pointerId===Fi.id&&(Fi=null,_r.x=_r.y=0,kf.style.transform="")};us.addEventListener("pointerup",Vf);us.addEventListener("pointercancel",Vf);function zv(){let i=Te.domElement.getBoundingClientRect();[...Dh.children].forEach(t=>{let e=t.dataset.iz,n=de.ZONES[e];n.lv!==de.P.lv||e===Ta&&de.input.f;let s=de.pinPos(e),r=s.distanceTo(de.camera.position);if(n.lv!==de.P.lv||r>32||r<2.2||de.blocked(n.lv,de.P.x,de.P.z,s.x,s.z)){t.style.display="none";return}if(s.project(de.camera),s.z>1||Math.abs(s.x)>1.05||Math.abs(s.y)>1.05){t.style.display="none";return}t.style.display="",t.style.transform=`translate(${(s.x*.5+.5)*i.width-24}px,${(-s.y*.5+.5)*i.height-24}px)`})}function Gf(i){requestAnimationFrame(Gf),Lh++;let t=Math.min(.05,(i-mf)/1e3);if(mf=i,qn==="in"){de.input.f=(Xn.f||0)-(Xn.b||0)-_r.y,de.input.s=(Xn.r||0)-(Xn.l||0)+_r.x,de.input.run=!!Xn.run,de.step(t);let e=de.zoneAt();e!==Ta&&(de.input.f||de.input.s)&&(Ta=e,Xh(e)),Te.render(de.scene,de.camera),Lh%2===0&&zv();return}if(ql){ql(i),Te.render(ii,Ge);return}gr&&gr(i),yn.update(),Te.render(ii,Ge),Nf()}vr(!1);Ia(3);yr("porch");requestAnimationFrame(Gf);window.__tour={show:yr,zones:Object.keys(Ql),setFuture:vr,setCut:Ia,fly:i=>{hs=i,_s(),Of(ba[i])},enter:qh,exit:Yh,go:i=>Nh(i),get mode(){return qn},get pos(){return de&&{...de.P}},ready:!0};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
