import{S as ee,i as te,s as ae,e as w,t as L,k as b,c as y,a as E,h as S,d as c,m as D,b as v,g as $,J as m,j as F,n as x,K as le,x as P,y as R,z as T,r as V,p as C,C as N}from"../../chunks/index-06cb3e88.js";import{r as W,b as se}from"../../chunks/reading-time-estimator.es-5dec524d.js";import{T as re,L as ne,F as oe}from"../../chunks/topLevelHeader-ff167ad8.js";function X(i,e,n){const l=i.slice();return l[2]=e[n],l}function Z(i){let e,n=i[2].topic+"",l,t,r,a=i[2].date+"",_,g,u,o=i[2].description+"",p,H,h,k,q=W(i[2].description).text+"",I,z,d,K,A=i[2].tag+"",J,O,U;return{c(){e=w("h1"),l=L(n),t=b(),r=w("p"),_=L(a),g=b(),u=w("p"),p=L(o),H=b(),h=w("div"),k=w("p"),I=L(q),z=b(),d=w("a"),K=L("#"),J=L(A),U=b(),this.h()},l(s){e=y(s,"H1",{class:!0});var f=E(e);l=S(f,n),f.forEach(c),t=D(s),r=y(s,"P",{class:!0});var G=E(r);_=S(G,a),G.forEach(c),g=D(s),u=y(s,"P",{class:!0});var M=E(u);p=S(M,o),M.forEach(c),H=D(s),h=y(s,"DIV",{class:!0});var B=E(h);k=y(B,"P",{class:!0});var Q=E(k);I=S(Q,q),Q.forEach(c),z=D(B),d=y(B,"A",{class:!0,href:!0});var Y=E(d);K=S(Y,"#"),J=S(Y,A),Y.forEach(c),U=D(B),B.forEach(c),this.h()},h(){v(e,"class","svelte-13w78gm"),v(r,"class","date svelte-13w78gm"),v(u,"class","description svelte-13w78gm"),v(k,"class","read-time svelte-13w78gm"),v(d,"class","tag svelte-13w78gm"),v(d,"href",O="/blog/"+i[2].tag),v(h,"class","info-wrapper svelte-13w78gm")},m(s,f){$(s,e,f),m(e,l),$(s,t,f),$(s,r,f),m(r,_),$(s,g,f),$(s,u,f),m(u,p),$(s,H,f),$(s,h,f),m(h,k),m(k,I),m(h,z),m(h,d),m(d,K),m(d,J),m(h,U)},p(s,f){f&1&&n!==(n=s[2].topic+"")&&F(l,n),f&1&&a!==(a=s[2].date+"")&&F(_,a),f&1&&o!==(o=s[2].description+"")&&F(p,o),f&1&&q!==(q=W(s[2].description).text+"")&&F(I,q),f&1&&A!==(A=s[2].tag+"")&&F(J,A),f&1&&O!==(O="/blog/"+s[2].tag)&&v(d,"href",O)},d(s){s&&c(e),s&&c(t),s&&c(r),s&&c(g),s&&c(u),s&&c(H),s&&c(h)}}}function ie(i){let e,n=i[0],l=[];for(let t=0;t<n.length;t+=1)l[t]=Z(X(i,n,t));return{c(){e=w("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=y(t,"DIV",{class:!0});var r=E(e);for(let a=0;a<l.length;a+=1)l[a].l(r);r.forEach(c),this.h()},h(){v(e,"class","post-wrapper svelte-13w78gm")},m(t,r){$(t,e,r);for(let a=0;a<l.length;a+=1)l[a].m(e,null)},p(t,[r]){if(r&1){n=t[0];let a;for(a=0;a<n.length;a+=1){const _=X(t,n,a);l[a]?l[a].p(_,r):(l[a]=Z(_),l[a].c(),l[a].m(e,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=n.length}},i:x,o:x,d(t){t&&c(e),le(l,t)}}}function fe(i,e,n){let l=[],{tag:t}=e;try{se.forEach(r=>{r.tag===t&&l.push(r)}),l.length==0&&(l[0]={id:null,topic:"ERROR",description:"Error - Your searched post was not found",date:"",link:"",tag:"error - message"})}catch(r){console.log("an errror happened, trying to filter the blog posts",r)}return i.$$set=r=>{"tag"in r&&n(1,t=r.tag)},[l,t]}class ce extends ee{constructor(e){super(),te(this,e,fe,ie,ae,{tag:1})}}function pe(i){let e,n,l,t,r,a,_,g,u;return n=new re({}),t=new ne({}),a=new ce({props:{tag:j}}),g=new oe({}),{c(){e=w("div"),P(n.$$.fragment),l=b(),P(t.$$.fragment),r=b(),P(a.$$.fragment),_=b(),P(g.$$.fragment),this.h()},l(o){e=y(o,"DIV",{class:!0});var p=E(e);R(n.$$.fragment,p),l=D(p),R(t.$$.fragment,p),r=D(p),R(a.$$.fragment,p),_=D(p),R(g.$$.fragment,p),p.forEach(c),this.h()},h(){v(e,"class","content-wrapper svelte-qyqyds")},m(o,p){$(o,e,p),T(n,e,null),m(e,l),T(t,e,null),m(e,r),T(a,e,null),m(e,_),T(g,e,null),u=!0},p:x,i(o){u||(V(n.$$.fragment,o),V(t.$$.fragment,o),V(a.$$.fragment,o),V(g.$$.fragment,o),u=!0)},o(o){C(n.$$.fragment,o),C(t.$$.fragment,o),C(a.$$.fragment,o),C(g.$$.fragment,o),u=!1},d(o){o&&c(e),N(n),N(t),N(a),N(g)}}}let j;async function _e({params:i}){return j=i.tag,console.log("tag"+j),{props:{tag:j}}}class he extends ee{constructor(e){super(),te(this,e,null,pe,ae,{})}}export{he as default,_e as load};