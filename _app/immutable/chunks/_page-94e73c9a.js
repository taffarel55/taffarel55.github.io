const i=async({fetch:o,params:r})=>{try{const{category:e}=r,s=e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),a=(await(await o("/api/posts")).json()).filter(n=>{var t;return((t=n.meta.categories)==null?void 0:t.map(c=>c.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase())).includes(s)});return{category:e,posts:a}}catch(e){return{status:404,error:new Error(e)}}},g=Object.freeze(Object.defineProperty({__proto__:null,load:i},Symbol.toStringTag,{value:"Module"}));export{g as _,i as l};