import{S as L,i as W,s as j,e as b,b as k,B as q,h,q as _,r as m,W as w,k as N,a as z,l as y,m as E,c as D,n as B,C as f,u as P}from"../../../../../chunks/index-11e73137.js";function H(o,a,n){const t=o.slice();return t[1]=a[n],t}function F(o){let a;return{c(){a=_("404 - Não tem posts com essa categoria")},l(n){a=m(n,"404 - Não tem posts com essa categoria")},m(n,t){k(n,a,t)},p:q,d(n){n&&h(a)}}}function G(o){let a,n=o[0].posts,t=[];for(let e=0;e<n.length;e+=1)t[e]=I(H(o,n,e));return{c(){for(let e=0;e<t.length;e+=1)t[e].c();a=b()},l(e){for(let l=0;l<t.length;l+=1)t[l].l(e);a=b()},m(e,l){for(let s=0;s<t.length;s+=1)t[s].m(e,l);k(e,a,l)},p(e,l){if(l&1){n=e[0].posts;let s;for(s=0;s<n.length;s+=1){const c=H(e,n,s);t[s]?t[s].p(c,l):(t[s]=I(c),t[s].c(),t[s].m(a.parentNode,a))}for(;s<t.length;s+=1)t[s].d(1);t.length=n.length}},d(e){w(t,e),e&&h(a)}}}function I(o){let a,n,t,e=o[1].meta.title+"",l,s,c,u=o[1].meta.date+"",p,v,d=o[1].meta.categories+"",g,C;return{c(){a=N("li"),n=N("h2"),t=N("a"),l=_(e),c=_(`
			Published `),p=_(u),v=_(`
			Categories `),g=_(d),C=z(),this.h()},l(r){a=y(r,"LI",{});var i=E(a);n=y(i,"H2",{});var S=E(n);t=y(S,"A",{href:!0});var A=E(t);l=m(A,e),A.forEach(h),S.forEach(h),c=m(i,`
			Published `),p=m(i,u),v=m(i,`
			Categories `),g=m(i,d),C=D(i),i.forEach(h),this.h()},h(){B(t,"href",s=o[1].path)},m(r,i){k(r,a,i),f(a,n),f(n,t),f(t,l),f(a,c),f(a,p),f(a,v),f(a,g),f(a,C)},p(r,i){i&1&&e!==(e=r[1].meta.title+"")&&P(l,e),i&1&&s!==(s=r[1].path)&&B(t,"href",s),i&1&&u!==(u=r[1].meta.date+"")&&P(p,u),i&1&&d!==(d=r[1].meta.categories+"")&&P(g,d)},d(r){r&&h(a)}}}function J(o){let a;function n(l,s){var c;return(c=l[0].posts)!=null&&c.length?G:F}let t=n(o),e=t(o);return{c(){e.c(),a=b()},l(l){e.l(l),a=b()},m(l,s){e.m(l,s),k(l,a,s)},p(l,[s]){t===(t=n(l))&&e?e.p(l,s):(e.d(1),e=t(l),e&&(e.c(),e.m(a.parentNode,a)))},i:q,o:q,d(l){e.d(l),l&&h(a)}}}function K(o,a,n){let{data:t}=a;return o.$$set=e=>{"data"in e&&n(0,t=e.data)},[t]}class O extends L{constructor(a){super(),W(this,a,K,J,j,{data:0})}}export{O as default};
