import{p as le,H as m,m as d,_ as p,C as _,b as P,T as B,R as ue}from"./q-2feefdb9.js";const de=m(d(()=>p(()=>import("./q-9545d1da.js"),["build/q-9545d1da.js","build/q-2feefdb9.js"]),"s_gJoMUICXoUQ")),en=`
.button-Button {
  all: unset;
}
`,tn=le("Builder"),E="qwik";function y(){return typeof window<"u"&&typeof document<"u"}function pe(){return y()&&window.self!==window.top}function I(){return pe()&&window.location.search.indexOf("builder.frameEditing=")!==-1}const R=e=>JSON.parse(JSON.stringify(e)),H={small:{min:320,default:321,max:640},medium:{min:641,default:642,max:991},large:{min:990,default:991,max:1200}},nn=(e,t=H)=>`@media (max-width: ${t[e].max}px)`,me=({small:e,medium:t})=>{const n=R(H);if(!e||!t)return n;const o=Math.floor(e/2);n.small={max:e,min:o,default:o+1};const r=n.small.max+1;n.medium={max:t,min:r,default:r+1};const a=n.medium.max+1;return n.large={max:2e3,min:a,default:a+1},n};function C({code:e,context:t,localState:n,rootState:o,rootSetState:r,event:a,isExpression:i=!0}){if(e===""){console.warn("Skipping evaluation of empty code block.");return}const s={isEditing:I(),isBrowser:y(),isServer:!y()},l=i&&!(e.includes(";")||e.includes(" return ")||e.trim().startsWith("return "))?`return (${e});`:e;try{return new Function("builder","Builder","state","context","event",l)(s,s,fe(o,n,r),t,a)}catch(u){console.warn(`Builder custom code error: 
 While Evaluating: 
 `,l,`
`,u)}}function fe(e,t,n){if(e===t)throw new Error("rootState === localState");return new Proxy(e,{get:(o,r)=>t&&r in t?t[r]:e[r],set:(o,r,a)=>{if(t&&r in t)throw new Error("Writing to local state is not allowed as it is read-only.");return e[r]=a,n==null||n(e),!0}})}const ge=(e,t,n)=>{if(Object(e)!==e)return e;const o=Array.isArray(t)?t:t.toString().match(/[^.[\]]+/g);return o.slice(0,-1).reduce((r,a,i)=>Object(r[a])===r[a]?r[a]:r[a]=Math.abs(Number(o[i+1]))>>0===+o[i+1]?[]:{},e)[o[o.length-1]]=n,e};const he=({block:e,context:t,localState:n,rootState:o,rootSetState:r})=>{if(!e.bindings)return e;const a=R(e),i={...a,properties:{...a.properties},actions:{...a.actions}};for(const s in e.bindings){const c=e.bindings[s],l=C({code:c,localState:n,rootState:o,rootSetState:r,context:t});ge(i,s,l)}return i};function be({block:e,context:t,shouldEvaluateBindings:n,localState:o,rootState:r,rootSetState:a}){const i=e;return n?he({block:i,localState:o,rootState:r,rootSetState:a,context:t}):i}const ye=e=>e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase(),w=e=>e!=null,K=e=>Object.entries(e).map(([n,o])=>{if(typeof o=="string")return`${ye(n)}: ${o};`}).filter(w),ve=e=>K(e).join(`
`),on=({mediaQuery:e,className:t,styles:n})=>{const o=`.${t} {
    ${ve(n)}
  }`;return e?`${e} {
      ${o}
    }`:o},rn=m(d(()=>p(()=>import("./q-e3f20d81.js"),["build/q-e3f20d81.js","build/q-2feefdb9.js"]),"s_ejNQtXd1ahM")),xe=m(d(()=>p(()=>import("./q-90343485.js"),["build/q-90343485.js","build/q-2feefdb9.js"]),"s_r0t5qGxiwHA"));function Se(e){return e.charAt(0).toUpperCase()+e.slice(1)}const we=e=>`on${Se(e)}$`;function Ie(e,t){return d(()=>p(()=>import("./q-33cc1267.js"),["build/q-33cc1267.js","build/q-2feefdb9.js"]),"s_7wCAiJVliNE",[t,e])}function an(e){const t={},n=e.block.actions??{};for(const o in n){if(!n.hasOwnProperty(o))continue;const r=n[o];t[we(o)]=Ie(r,e)}return t}function sn(e){var t;return{...(t=e.component)==null?void 0:t.options,...e.options,builderBlock:e}}const ke=e=>({href:e.href});function cn(e){var n;const t={...ke(e),...e.properties,"builder-id":e.id,style:Ee(e.style),class:[e.id,"builder-block",e.class,(n=e.properties)==null?void 0:n.class].filter(Boolean).join(" ")};return t}function Ee(e){if(e)switch(E){case"svelte":case"vue2":case"vue3":case"solid":return K(e).join(" ");case"qwik":case"reactNative":case"react":return e}}const _e=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],ln=e=>typeof e=="string"&&_e.includes(e.toLowerCase()),un=({block:e,context:t})=>{var r;const n=(r=be({block:e,localState:t.localState,rootState:t.rootState,rootSetState:t.rootSetState,context:t.context,shouldEvaluateBindings:!1}).component)==null?void 0:r.name;if(!n)return null;const o=t.registeredComponents[n];if(o)return o;console.warn(`
      Could not find a registered component named "${n}". 
      If you registered it, is the file that registered it imported by the file that needs to render it?`)},dn=({block:e,context:t})=>{const{repeat:n,...o}=e;if(!(n!=null&&n.collection))return;const r=C({code:n.collection,localState:t.localState,rootState:t.rootState,rootSetState:t.rootSetState,context:t.context});if(!Array.isArray(r))return;const a=n.collection.split(".").pop(),i=n.itemName||(a?a+"Item":"item");return r.map((c,l)=>({context:{...t,localState:{...t.localState,$index:l,$item:c,[i]:c,[`$${i}Index`]:l}},block:o}))},pn=e=>_(ue,{children:e.componentRef?_(e.componentRef,{...e.componentOptions,children:[(e.blockChildren||[]).map(function(t){return _(Te,{block:t,get context(){return e.context},[P]:{context:B(e,"context")}},3,"render-block-"+t.id)}),(e.blockChildren||[]).map(function(t){return _(xe,{block:t,get context(){return e.context},[P]:{context:B(e,"context")}},3,"block-style-"+t.id)})]},0,"R9_0"):null},1,"R9_1"),mn=m(d(()=>p(()=>import("./q-3f16b106.js"),["build/q-3f16b106.js","build/q-2feefdb9.js"]),"s_nRyVBtbGKc8")),Te=m(d(()=>p(()=>import("./q-efaa1498.js"),["build/q-efaa1498.js","build/q-2feefdb9.js"]),"s_m0hg0zT573Q")),fn=function(t,n,o){var r,a;I()&&!((r=t.blocks)!=null&&r.length)&&((a=window.parent)==null||a.postMessage({type:"builder.clickEmptyBlocks",data:{parentElementId:t.parent,dataPath:t.path}},"*"))},gn=function(t,n,o){var r,a;I()&&!((r=t.blocks)!=null&&r.length)&&((a=window.parent)==null||a.postMessage({type:"builder.hoverEmptyBlocks",data:{parentElementId:t.parent,dataPath:t.path}},"*"))},hn=m(d(()=>p(()=>import("./q-ffec16b0.js"),["build/q-ffec16b0.js","build/q-2feefdb9.js"]),"s_MYUZ0j1uLsw")),bn=`
.div-RenderBlocks {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
`,Re=function(t,n,o,r){var a;return((a=n.cols[r])==null?void 0:a.width)||100/n.cols.length},Ce=function(t,n,o,r){const a=n.gutterSize*(n.cols.length-1)/n.cols.length;return`calc(${Re(t,n,o,r)}% - ${a}px)`},L=function(t,n,o,{stackedStyle:r,desktopStyle:a}){return n.stackAt==="tablet"?r:a},F=function(t,n,o,{stackedStyle:r,desktopStyle:a}){return n.stackAt==="never"?a:r},yn=function(t,n,o,r){const a=r===0?0:n.gutterSize,i=Ce(t,n,o,r),s=`${a}px`,c="100%",l=0;return{width:i,"margin-left":s,"--column-width-mobile":F(t,n,o,{stackedStyle:c,desktopStyle:i}),"--column-margin-left-mobile":F(t,n,o,{stackedStyle:l,desktopStyle:s}),"--column-width-tablet":L(t,n,o,{stackedStyle:c,desktopStyle:i}),"--column-margin-left-tablet":L(t,n,o,{stackedStyle:l,desktopStyle:s})}},vn=function(t,n,o,r){var i,s;return me(((s=(i=o.content)==null?void 0:i.meta)==null?void 0:s.breakpoints)||{})[r].max},Ae=m(d(()=>p(()=>import("./q-3c1ced2a.js"),["build/q-3c1ced2a.js","build/q-2feefdb9.js"]),"s_7yLj4bxdI6c")),xn=`
.div-Columns {
  display: flex;
  line-height: normal;
}
.div-Columns-2 {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
`,Ve=m(d(()=>p(()=>import("./q-e9d3fe21.js"),["build/q-e9d3fe21.js","build/q-2feefdb9.js"]),"s_T0AypnadAK0"));function M(e){return e.replace(/http(s)?:/,"")}function $e(e="",t,n){const o=new RegExp("([?&])"+t+"=.*?(&|$)","i"),r=e.indexOf("?")!==-1?"&":"?";return e.match(o)?e.replace(o,"$1"+t+"="+encodeURIComponent(n)+"$2"):e+r+t+"="+encodeURIComponent(n)}function Oe(e,t){if(!e||!(e!=null&&e.match(/cdn\.shopify\.com/))||!t)return e;if(t==="master")return M(e);const n=e.match(/(_\d+x(\d+)?)?(\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?)/i);if(n){const o=e.split(n[0]),r=n[3],a=t.match("x")?t:`${t}x`;return M(`${o[0]}_${a}${r}`)}return null}function Sn(e){if(!e)return e;const t=[100,200,400,800,1200,1600,2e3];if(e.match(/builder\.io/)){let n=e;const o=Number(e.split("?width=")[1]);return isNaN(o)||(n=`${n} ${o}w`),t.filter(r=>r!==o).map(r=>`${$e(e,"width",r)} ${r}w`).concat([n]).join(", ")}return e.match(/cdn\.shopify\.com/)?t.map(n=>[Oe(e,`${n}x${n}`),n]).filter(([n])=>!!n).map(([n,o])=>`${n} ${o}w`).concat([e]).join(", "):e}const Pe=m(d(()=>p(()=>import("./q-be2aaf68.js"),["build/q-be2aaf68.js","build/q-2feefdb9.js"]),"s_LRxDkFa1EfU")),wn=`
.img-Image {
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}
.div-Image {
  width: 100%;
  pointer-events: none;
  font-size: 0;
}
.div-Image-2 {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
`,Be=m(d(()=>p(()=>import("./q-0db4e1e5.js"),["build/q-0db4e1e5.js","build/q-2feefdb9.js"]),"s_ZWF9iD5WeLg")),Le={name:"Core:Button",image:"https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2F81a15681c3e74df09677dfc57a615b13",defaultStyles:{appearance:"none",paddingTop:"15px",paddingBottom:"15px",paddingLeft:"25px",paddingRight:"25px",backgroundColor:"#000000",color:"white",borderRadius:"4px",textAlign:"center",cursor:"pointer"},inputs:[{name:"text",type:"text",defaultValue:"Click me!",bubble:!0},{name:"link",type:"url",bubble:!0},{name:"openLinkInNewTab",type:"boolean",defaultValue:!1,friendlyName:"Open link in new tab"}],static:!0,noWrap:!0},A=e=>{const t=e.toString().trim();return`return (${!t.startsWith("function")&&!t.startsWith("(")?"function ":""}${t}).apply(this, arguments)`},Fe={name:"Columns",inputs:[{name:"columns",type:"array",broadcast:!0,subFields:[{name:"blocks",type:"array",hideFromUI:!0,defaultValue:[{"@type":"@builder.io/sdk:Element",responsiveStyles:{large:{display:"flex",flexDirection:"column",alignItems:"stretch",flexShrink:"0",position:"relative",marginTop:"30px",textAlign:"center",lineHeight:"normal",height:"auto",minHeight:"20px",minWidth:"20px",overflow:"hidden"}},component:{name:"Image",options:{image:"https://builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",backgroundPosition:"center",backgroundSize:"cover",aspectRatio:.7004048582995948}}},{"@type":"@builder.io/sdk:Element",responsiveStyles:{large:{display:"flex",flexDirection:"column",alignItems:"stretch",flexShrink:"0",position:"relative",marginTop:"30px",textAlign:"center",lineHeight:"normal",height:"auto"}},component:{name:"Text",options:{text:"<p>Enter some text...</p>"}}}]},{name:"width",type:"number",hideFromUI:!0,helperText:"Width %, e.g. set to 50 to fill half of the space"},{name:"link",type:"url",helperText:"Optionally set a url that clicking this column will link to"}],defaultValue:[{blocks:[{"@type":"@builder.io/sdk:Element",responsiveStyles:{large:{display:"flex",flexDirection:"column",alignItems:"stretch",flexShrink:"0",position:"relative",marginTop:"30px",textAlign:"center",lineHeight:"normal",height:"auto",minHeight:"20px",minWidth:"20px",overflow:"hidden"}},component:{name:"Image",options:{image:"https://builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",backgroundPosition:"center",backgroundSize:"cover",aspectRatio:.7004048582995948}}},{"@type":"@builder.io/sdk:Element",responsiveStyles:{large:{display:"flex",flexDirection:"column",alignItems:"stretch",flexShrink:"0",position:"relative",marginTop:"30px",textAlign:"center",lineHeight:"normal",height:"auto"}},component:{name:"Text",options:{text:"<p>Enter some text...</p>"}}}]},{blocks:[{"@type":"@builder.io/sdk:Element",responsiveStyles:{large:{display:"flex",flexDirection:"column",alignItems:"stretch",flexShrink:"0",position:"relative",marginTop:"30px",textAlign:"center",lineHeight:"normal",height:"auto",minHeight:"20px",minWidth:"20px",overflow:"hidden"}},component:{name:"Image",options:{image:"https://builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",backgroundPosition:"center",backgroundSize:"cover",aspectRatio:.7004048582995948}}},{"@type":"@builder.io/sdk:Element",responsiveStyles:{large:{display:"flex",flexDirection:"column",alignItems:"stretch",flexShrink:"0",position:"relative",marginTop:"30px",textAlign:"center",lineHeight:"normal",height:"auto"}},component:{name:"Text",options:{text:"<p>Enter some text...</p>"}}}]}],onChange:A(e=>{function t(){n.forEach(o=>{o.delete("width")})}const n=e.get("columns");Array.isArray(n)&&n.find(r=>r.get("width"))&&(n.find(a=>!a.get("width"))||n.reduce((s,c)=>s+c.get("width"),0)!==100)&&t()})},{name:"space",type:"number",defaultValue:20,helperText:"Size of gap between columns",advanced:!0},{name:"stackColumnsAt",type:"string",defaultValue:"tablet",helperText:"Convert horizontal columns to vertical at what device size",enum:["tablet","mobile","never"],advanced:!0},{name:"reverseColumnsWhenStacked",type:"boolean",defaultValue:!1,helperText:"When stacking columns for mobile devices, reverse the ordering",advanced:!0}]},Me={name:"Fragment",static:!0,hidden:!0,canHaveChildren:!0,noWrap:!0},Ue={name:"Image",static:!0,image:"https://firebasestorage.googleapis.com/v0/b/builder-3b0a2.appspot.com/o/images%2Fbaseline-insert_photo-24px.svg?alt=media&token=4e5d0ef4-f5e8-4e57-b3a9-38d63a9b9dc4",defaultStyles:{position:"relative",minHeight:"20px",minWidth:"20px",overflow:"hidden"},canHaveChildren:!0,inputs:[{name:"image",type:"file",bubble:!0,allowedFileTypes:["jpeg","jpg","png","svg"],required:!0,defaultValue:"https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a",onChange:A(e=>{e.delete("srcset"),e.delete("noWebp");function n(i,s=6e4){return new Promise((c,l)=>{const u=document.createElement("img");let f=!1;u.onload=()=>{f=!0,c(u)},u.addEventListener("error",g=>{console.warn("Image load failed",g.error),l(g.error)}),u.src=i,setTimeout(()=>{f||l(new Error("Image load timed out"))},s)})}function o(i){return Math.round(i*1e3)/1e3}const r=e.get("image"),a=e.get("aspectRatio");if(fetch(r).then(i=>i.blob()).then(i=>{i.type.includes("svg")&&e.set("noWebp",!0)}),r&&(!a||a===.7041))return n(r).then(i=>{const s=e.get("aspectRatio");e.get("image")===r&&(!s||s===.7041)&&i.width&&i.height&&(e.set("aspectRatio",o(i.height/i.width)),e.set("height",i.height),e.set("width",i.width))})})},{name:"backgroundSize",type:"text",defaultValue:"cover",enum:[{label:"contain",value:"contain",helperText:"The image should never get cropped"},{label:"cover",value:"cover",helperText:"The image should fill it's box, cropping when needed"}]},{name:"backgroundPosition",type:"text",defaultValue:"center",enum:["center","top","left","right","bottom","top left","top right","bottom left","bottom right"]},{name:"altText",type:"string",helperText:"Text to display when the user has images off"},{name:"height",type:"number",hideFromUI:!0},{name:"width",type:"number",hideFromUI:!0},{name:"sizes",type:"string",hideFromUI:!0},{name:"srcset",type:"string",hideFromUI:!0},{name:"lazy",type:"boolean",defaultValue:!0,hideFromUI:!0},{name:"fitContent",type:"boolean",helperText:"When child blocks are provided, fit to them instead of using the image's aspect ratio",defaultValue:!0},{name:"aspectRatio",type:"number",helperText:"This is the ratio of height/width, e.g. set to 1.5 for a 300px wide and 200px tall photo. Set to 0 to not force the image to maintain it's aspect ratio",advanced:!0,defaultValue:.7041}]},We={name:"Core:Section",static:!0,image:"https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2F682efef23ace49afac61748dd305c70a",inputs:[{name:"maxWidth",type:"number",defaultValue:1200},{name:"lazyLoad",type:"boolean",defaultValue:!1,advanced:!0,description:"Only render this section when in view"}],defaultStyles:{paddingLeft:"20px",paddingRight:"20px",paddingTop:"50px",paddingBottom:"50px",marginTop:"0px",width:"100vw",marginLeft:"calc(50% - 50vw)"},canHaveChildren:!0,defaultChildren:[{"@type":"@builder.io/sdk:Element",responsiveStyles:{large:{textAlign:"center"}},component:{name:"Text",options:{text:"<p><b>I am a section! My content keeps from getting too wide, so that it's easy to read even on big screens.</b></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>"}}}]},je={name:"Symbol",noWrap:!0,static:!0,inputs:[{name:"symbol",type:"uiSymbol"},{name:"dataOnly",helperText:"Make this a data symbol that doesn't display any UI",type:"boolean",defaultValue:!1,advanced:!0,hideFromUI:!0},{name:"inheritState",helperText:"Inherit the parent component state and data",type:"boolean",defaultValue:!1,advanced:!0},{name:"renderToLiquid",helperText:"Render this symbols contents to liquid. Turn off to fetch with javascript and use custom targeting",type:"boolean",defaultValue:!1,advanced:!0,hideFromUI:!0},{name:"useChildren",hideFromUI:!0,type:"boolean"}]},Ne={name:"Text",static:!0,image:"https://firebasestorage.googleapis.com/v0/b/builder-3b0a2.appspot.com/o/images%2Fbaseline-text_fields-24px%20(1).svg?alt=media&token=12177b73-0ee3-42ca-98c6-0dd003de1929",inputs:[{name:"text",type:"html",required:!0,autoFocus:!0,bubble:!0,defaultValue:"Enter some text..."}],defaultStyles:{lineHeight:"normal",height:"auto",textAlign:"center"}},De=m(d(()=>p(()=>import("./q-53af442e.js"),["build/q-53af442e.js","build/q-2feefdb9.js"]),"s_15p0cKUxgIE")),qe={name:"Video",canHaveChildren:!0,defaultStyles:{minHeight:"20px",minWidth:"20px"},image:"https://firebasestorage.googleapis.com/v0/b/builder-3b0a2.appspot.com/o/images%2Fbaseline-videocam-24px%20(1).svg?alt=media&token=49a84e4a-b20e-4977-a650-047f986874bb",inputs:[{name:"video",type:"file",allowedFileTypes:["mp4"],bubble:!0,defaultValue:"https://firebasestorage.googleapis.com/v0/b/builder-3b0a2.appspot.com/o/assets%2FKQlEmWDxA0coC3PK6UvkrjwkIGI2%2F28cb070609f546cdbe5efa20e931aa4b?alt=media&token=912e9551-7a7c-4dfb-86b6-3da1537d1a7f",required:!0},{name:"posterImage",type:"file",allowedFileTypes:["jpeg","png"],helperText:"Image to show before the video plays"},{name:"autoPlay",type:"boolean",defaultValue:!0},{name:"controls",type:"boolean",defaultValue:!1},{name:"muted",type:"boolean",defaultValue:!0},{name:"loop",type:"boolean",defaultValue:!0},{name:"playsInline",type:"boolean",defaultValue:!0},{name:"fit",type:"text",defaultValue:"cover",enum:["contain","cover","fill","auto"]},{name:"fitContent",type:"boolean",helperText:"When child blocks are provided, fit to them instead of using the aspect ratio",defaultValue:!0,advanced:!0},{name:"position",type:"text",defaultValue:"center",enum:["center","top","left","right","bottom","top left","top right","bottom left","bottom right"]},{name:"height",type:"number",advanced:!0},{name:"width",type:"number",advanced:!0},{name:"aspectRatio",type:"number",advanced:!0,defaultValue:.7004048582995948},{name:"lazyLoad",type:"boolean",helperText:'Load this video "lazily" - as in only when a user scrolls near the video. Recommended for optmized performance and bandwidth consumption',defaultValue:!0,advanced:!0}]},He=m(d(()=>p(()=>import("./q-42eb13e3.js"),["build/q-42eb13e3.js","build/q-2feefdb9.js"]),"s_qdcTZflYyoQ")),Ke={name:"Embed",static:!0,inputs:[{name:"url",type:"url",required:!0,defaultValue:"",helperText:"e.g. enter a youtube url, google map, etc",onChange:A(e=>{const t=e.get("url");if(t)return e.set("content","Loading..."),fetch(`https://iframe.ly/api/iframely?url=${t}&api_key=ae0e60e78201a3f2b0de4b`).then(o=>o.json()).then(o=>{e.get("url")===t&&(o.html?e.set("content",o.html):e.set("content","Invalid url, please try another"))}).catch(o=>{e.set("content","There was an error embedding this URL, please try again or another URL")});e.delete("content")})},{name:"content",type:"html",defaultValue:'<div style="padding: 20px; text-align: center">(Choose an embed URL)<div>',hideFromUI:!0}]},ze=["text/javascript","application/javascript","application/ecmascript"],Ye=e=>ze.includes(e.type),In=function(t,n,o){if(!o.value||!o.value.getElementsByTagName)return;const r=o.value.getElementsByTagName("script");for(let a=0;a<r.length;a++){const i=r[a];if(i.src&&!n.scriptsInserted.includes(i.src)){n.scriptsInserted.push(i.src);const s=document.createElement("script");s.async=!0,s.src=i.src,document.head.appendChild(s)}else if(Ye(i)&&!n.scriptsRun.includes(i.innerText))try{n.scriptsRun.push(i.innerText),new Function(i.innerText)()}catch(s){console.warn("`Embed`: Error running script:",s)}}},Je=m(d(()=>p(()=>import("./q-36bc14bb.js"),["build/q-36bc14bb.js","build/q-2feefdb9.js"]),"s_Uji08ORjXbE")),Ge=m(d(()=>p(()=>import("./q-a1986651.js"),["build/q-a1986651.js","build/q-2feefdb9.js"]),"s_FXvIDBSffO8")),Xe={name:"Raw:Img",hideFromInsertMenu:!0,image:"https://firebasestorage.googleapis.com/v0/b/builder-3b0a2.appspot.com/o/images%2Fbaseline-insert_photo-24px.svg?alt=media&token=4e5d0ef4-f5e8-4e57-b3a9-38d63a9b9dc4",inputs:[{name:"image",bubble:!0,type:"file",allowedFileTypes:["jpeg","jpg","png","svg"],required:!0}],noWrap:!0,static:!0},kn=function(t,n,o){if(o.value&&o.value.getElementsByTagName&&typeof window<"u"){const r=o.value.getElementsByTagName("script");for(let a=0;a<r.length;a++){const i=r[a];if(i.src){if(n.scriptsInserted.includes(i.src))continue;n.scriptsInserted.push(i.src);const s=document.createElement("script");s.async=!0,s.src=i.src,document.head.appendChild(s)}else if(!i.type||["text/javascript","application/javascript","application/ecmascript"].includes(i.type)){if(n.scriptsRun.includes(i.innerText))continue;try{n.scriptsRun.push(i.innerText),new Function(i.innerText)()}catch(s){console.warn("`CustomCode`: Error running script:",s)}}}}},Qe=m(d(()=>p(()=>import("./q-20772169.js"),["build/q-20772169.js","build/q-2feefdb9.js"]),"s_uYOSy7w7Zqw")),Ze={name:"Custom Code",static:!0,requiredPermissions:["editCode"],inputs:[{name:"code",type:"html",required:!0,defaultValue:"<p>Hello there, I am custom HTML code!</p>",code:!0},{name:"replaceNodes",type:"boolean",helperText:"Preserve server rendered dom nodes",advanced:!0},{name:"scriptsClientOnly",type:"boolean",defaultValue:!1,helperText:"Only print and run scripts on the client. Important when scripts influence DOM that could be replaced when client loads",advanced:!0}]},En=()=>[{component:de,...Le},{component:Ae,...Fe},{component:Qe,...Ze},{component:Je,...Ke},{component:Ve,...Me},{component:Pe,...Ue},{component:Ge,...Xe},{component:Be,...We},{component:Qt,...je},{component:De,...Ne},{component:He,...qe}],T="[Builder.io]: ",S={log:(...e)=>console.log(T,...e),error:(...e)=>console.error(T,...e),warn:(...e)=>console.warn(T,...e),debug:(...e)=>console.debug(T,...e)},et=e=>{if(e==="localhost"||e==="127.0.0.1")return e;const t=e.split(".");return t.length>2?t.slice(1).join("."):e},z=({name:e,canTrack:t})=>{var n;try{return t?(n=document.cookie.split("; ").find(o=>o.startsWith(`${e}=`)))==null?void 0:n.split("=")[1]:void 0}catch(o){S.warn("[COOKIE] GET error: ",(o==null?void 0:o.message)||o);return}},Y=async e=>z(e),tt=e=>e.map(([t,n])=>n?`${t}=${n}`:t).filter(w).join("; "),nt=[["secure",""],["SameSite","None"]],ot=({name:e,value:t,expires:n})=>{const r=(y()?location.protocol==="https:":!0)?nt:[[]],a=n?[["expires",n.toUTCString()]]:[[]],i=[[e,t],...a,["path","/"],["domain",et(window.location.hostname)],...r];return tt(i)},J=async({name:e,value:t,expires:n,canTrack:o})=>{try{if(!o)return;const r=ot({name:e,value:t,expires:n});document.cookie=r}catch(r){S.warn("[COOKIE] SET error: ",(r==null?void 0:r.message)||r)}},rt="builder.tests",$=e=>`${rt}.${e}`,it=({contentId:e})=>Y({name:$(e),canTrack:!0}),at=({contentId:e})=>z({name:$(e),canTrack:!0}),st=({contentId:e,value:t})=>J({name:$(e),value:t,canTrack:!0}),G=e=>w(e.id)&&w(e.variations)&&Object.keys(e.variations).length>0,ct=({id:e,variations:t})=>{var r;let n=0;const o=Math.random();for(const a in t){const i=(r=t[a])==null?void 0:r.testRatio;if(n+=i,o<n)return a}return e},X=e=>{const t=ct(e);return st({contentId:e.id,value:t}).catch(n=>{S.error("could not store A/B test variation: ",n)}),t},Q=({item:e,testGroupId:t})=>{const n=e.variations[t];return t===e.id||!n?{testVariationId:e.id,testVariationName:"Default"}:{data:n.data,testVariationId:n.id,testVariationName:n.name||(n.id===e.id?"Default":"")}},_n=({item:e,canTrack:t})=>{if(!t)return e;if(!e)return;if(!G(e))return e;const n=at({contentId:e.id})||X({variations:e.variations,id:e.id}),o=Q({item:e,testGroupId:n});return{...e,...o}},lt=async({item:e,canTrack:t})=>{if(!t||!G(e))return e;const o=await it({contentId:e.id})||X({variations:e.variations,id:e.id}),r=Q({item:e,testGroupId:o});return{...e,...r}},ut=e=>w(e)?e:!0;function dt(){return typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:globalThis}function pt(){const e=dt().fetch;if(typeof e>"u")throw console.warn(`Builder SDK could not find a global fetch function. Make sure you have a polyfill for fetch in your project. 
      For more information, read https://github.com/BuilderIO/this-package-uses-fetch`),new Error("Builder SDK could not find a global `fetch` function");return e}const Z=pt();function V(e,t=null,n="."){return Object.keys(e).reduce((o,r)=>{const a=e[r],i=[t,r].filter(Boolean).join(n);return[typeof a=="object",a!==null,!(Array.isArray(a)&&a.length===0)].every(Boolean)?{...o,...V(a,i,n)}:{...o,[i]:a}},{})}const U="builder.",mt="options.",ft=e=>{const t={};return e.forEach((n,o)=>{t[o]=n}),t},gt=e=>{if(!e)return{};const t=ee(e),n={};return Object.keys(t).forEach(o=>{if(o.startsWith(U)){const r=o.replace(U,"").replace(mt,"");n[r]=t[o]}}),n},ht=()=>{if(!y())return{};const e=new URLSearchParams(window.location.search);return gt(e)},ee=e=>e instanceof URLSearchParams?ft(e):e,bt="v3",te=e=>{const{limit:t=30,userAttributes:n,query:o,noTraverse:r=!1,model:a,apiKey:i,includeRefs:s=!0,enrich:c,locale:l,apiVersion:u=bt}=e;if(!i)throw new Error("Missing API key");if(!["v2","v3"].includes(u))throw new Error(`Invalid apiVersion: expected 'v2' or 'v3', received '${u}'`);const f=new URL(`https://cdn.builder.io/api/${u}/content/${a}?apiKey=${i}&limit=${t}&noTraverse=${r}&includeRefs=${s}${l?`&locale=${l}`:""}${c?`&enrich=${c}`:""}`),g={...ht(),...ee(e.options||{})},h=V(g);for(const b in h)f.searchParams.set(b,String(h[b]));if(n&&f.searchParams.set("userAttributes",JSON.stringify(n)),o){const b=V({query:o});for(const x in b)f.searchParams.set(x,JSON.stringify(b[x]))}return f},ne=e=>"results"in e;async function yt(e){const t=await St({...e,limit:1});return t&&ne(t)&&t.results[0]||null}const vt=async e=>{const t=te(e);return await(await Z(t.href)).json()},xt=async(e,t)=>{const n=ut(e.canTrack);if(!n||!(y()||E==="reactNative"))return t;try{const o=[];for(const r of t.results)o.push(await lt({item:r,canTrack:n}));t.results=o}catch(o){S.error("Could not process A/B tests. ",o)}return t};async function St(e){try{const t=te(e),n=await vt(e);return ne(n)?xt(e,n):(S.error("Error fetching data. ",{url:t,content:n,options:e}),n)}catch(t){return S.error("Error fetching data. ",t),null}}function Tn(){return!y()||I()?!1:location.search.indexOf("builder.preview=")!==-1}const Rn=[],Cn=({component:e,...t})=>({type:"builder.registerComponent",data:It(t)}),wt=e=>typeof e=="function"?A(e):R(e),It=({inputs:e,...t})=>({...R(t),inputs:e==null?void 0:e.map(n=>Object.entries(n).reduce((o,[r,a])=>({...o,[r]:wt(a)}),{}))});function kt(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}function oe(){return kt().replace(/-/g,"")}const re="builderSessionId",Et=async({canTrack:e})=>{if(!e)return;const t=await Y({name:re,canTrack:e});if(w(t))return t;{const n=_t();return Tt({id:n,canTrack:e}),n}},_t=()=>oe(),Tt=({id:e,canTrack:t})=>J({name:re,value:e,canTrack:t}),ie=()=>y()&&typeof localStorage<"u"?localStorage:void 0,Rt=({key:e,canTrack:t})=>{var n;try{return t?(n=ie())==null?void 0:n.getItem(e):void 0}catch(o){console.debug("[LocalStorage] GET error: ",o);return}},Ct=({key:e,canTrack:t,value:n})=>{var o;try{t&&((o=ie())==null||o.setItem(e,n))}catch(r){console.debug("[LocalStorage] SET error: ",r)}},ae="builderVisitorId",At=({canTrack:e})=>{if(!e)return;const t=Rt({key:ae,canTrack:e});if(w(t))return t;{const n=Vt();return $t({id:n,canTrack:e}),n}},Vt=()=>oe(),$t=({id:e,canTrack:t})=>Ct({key:ae,value:e,canTrack:t}),Ot=()=>{if(y()){const e=new URL(location.href);return e.pathname===""&&(e.pathname="/"),e}else return console.warn("Cannot get location for tracking in non-browser environment"),null},Pt=()=>typeof navigator=="object"&&navigator.userAgent||"",Bt=()=>{const e=Pt(),t={Android(){return e.match(/Android/i)},BlackBerry(){return e.match(/BlackBerry/i)},iOS(){return e.match(/iPhone|iPod/i)},Opera(){return e.match(/Opera Mini/i)},Windows(){return e.match(/IEMobile/i)||e.match(/WPDesktop/i)},any(){return t.Android()||t.BlackBerry()||t.iOS()||t.Opera()||t.Windows()||E==="reactNative"}},n=e.match(/Tablet|iPad/i),o=Ot();return{urlPath:o==null?void 0:o.pathname,host:(o==null?void 0:o.host)||(o==null?void 0:o.hostname),device:n?"tablet":t.any()?"mobile":"desktop"}},Lt=async({canTrack:e})=>{if(!e)return{visitorId:void 0,sessionId:void 0};const t=await Et({canTrack:e}),n=At({canTrack:e});return{sessionId:t,visitorId:n}},Ft=async({type:e,canTrack:t,apiKey:n,metadata:o,...r})=>({type:e,data:{...r,metadata:{url:location.href,...o},...await Lt({canTrack:t}),userAttributes:Bt(),ownerId:n}});async function Mt(e){if(!e.apiKey){S.error("Missing API key for track call. Please provide your API key.");return}if(e.canTrack&&!I()&&(y()||E==="reactNative"))return fetch("https://builder.io/api/v1/track",{method:"POST",body:JSON.stringify({events:[await Ft(e)]}),headers:{"content-type":"application/json"},mode:"cors"}).catch(t=>{console.error("Failed to track: ",t)})}function W(e){return Math.round(e*1e3)/1e3}const Ut=(e,t,n=!0)=>{if(!(e instanceof HTMLElement))return null;let o=n?e:e.parentElement;do{if(!o)return null;if(t(o))return o}while(o=o.parentElement);return null},Wt=e=>Ut(e,t=>{const n=t.getAttribute("builder-id")||t.id;return(n==null?void 0:n.indexOf("builder-"))===0}),j=({event:e,target:t})=>{const n=t.getBoundingClientRect(),o=e.clientX-n.left,r=e.clientY-n.top,a=W(o/n.width),i=W(r/n.height);return{x:a,y:i}},jt=e=>{const t=e.target,n=t&&Wt(t),o=(n==null?void 0:n.getAttribute("builder-id"))||(n==null?void 0:n.id);return{targetBuilderElement:o||void 0,metadata:{targetOffset:t?j({event:e,target:t}):void 0,builderTargetOffset:n?j({event:e,target:n}):void 0,builderElementIndex:n&&o?[].slice.call(document.getElementsByClassName(o)).indexOf(n):void 0}}},Nt="0.4.1",N={};function Dt(e,t){let n=N[e];if(n||(n=N[e]=[]),n.push(t),y()){const o={type:"builder.register",data:{type:e,info:t}};try{parent.postMessage(o,"*"),parent!==window&&window.postMessage(o,"*")}catch(r){console.debug("Could not postmessage",r)}}}const An=()=>{Dt("insertMenu",{name:"_default",default:!0,items:[{name:"Box"},{name:"Text"},{name:"Image"},{name:"Columns"},{name:"Core:Section"},{name:"Core:Button"},{name:"Embed"},{name:"Custom Code"}]})};let D=!1;const Vn=(e={})=>{var t,n;D||(D=!0,y()&&((t=window.parent)==null||t.postMessage({type:"builder.sdkInfo",data:{target:E,version:Nt,supportsPatchUpdates:!1,supportsAddBlockScoping:!0,supportsCustomBreakpoints:!0}},"*"),(n=window.parent)==null||n.postMessage({type:"builder.updateContent",data:{options:e}},"*"),window.addEventListener("message",({data:o})=>{var r,a;if(o!=null&&o.type)switch(o.type){case"builder.evaluate":{const i=o.data.text,s=o.data.arguments||[],c=o.data.id,l=new Function(i);let u,f=null;try{u=l.apply(null,s)}catch(g){f=g}f?(r=window.parent)==null||r.postMessage({type:"builder.evaluateError",data:{id:c,error:f.message}},"*"):u&&typeof u.then=="function"?u.then(g=>{var h;(h=window.parent)==null||h.postMessage({type:"builder.evaluateResult",data:{id:c,result:g}},"*")}).catch(console.error):(a=window.parent)==null||a.postMessage({type:"builder.evaluateResult",data:{result:u,id:c}},"*");break}}})))},qt=e=>Object.values((e==null?void 0:e.variations)||{}),$n=({canTrack:e,content:t})=>!(!(qt(t).length>0)||!e||y());function Ht(e,t,n){function o(){function i(h,b,x){let k="";if(x){const v=new Date;v.setTime(v.getTime()+x*864e5),k="; expires="+v.toUTCString()}document.cookie=h+"="+(b||"")+k+"; path=/; Secure; SameSite=None"}function s(h){const b=h+"=",x=document.cookie.split(";");for(let k=0;k<x.length;k++){let v=x[k];for(;v.charAt(0)===" ";)v=v.substring(1,v.length);if(v.indexOf(b)===0)return v.substring(b.length,v.length)}return null}const c=`builder.tests.${e}`,l=s(c),u=t.map(h=>h.id).concat(e);if(l&&u.includes(l))return l;let f=0;const g=Math.random();for(let h=0;h<t.length;h++){const b=t[h],x=b.testRatio;if(f+=x,g<f)return i(c,b.id),b.id}return i(c,e),e}const r=o(),a=document.getElementById(`variants-styles-${e}`);if(n){a.remove();const i=document.getElementById(`variants-script-${e}`);i==null||i.remove()}else{const i=t.concat({id:e}).filter(s=>s.id!==r).map(s=>`.variant-${s.id} {  display: none; }
        `).join("");a.innerHTML=i}}function Kt(e,t,n){if(!navigator.cookieEnabled)return;function o(c){const l=c+"=",u=document.cookie.split(";");for(let f=0;f<u.length;f++){let g=u[f];for(;g.charAt(0)===" ";)g=g.substring(1,g.length);if(g.indexOf(l)===0)return g.substring(l.length,g.length)}return null}const r=`builder.tests.${t}`,a=o(r),i=document.querySelector(`[builder-content-id="${e}"]`),s=e===t;if(a===e){if(s)return;i==null||i.removeAttribute("hidden"),i==null||i.removeAttribute("aria-hidden")}else{s&&(n?i==null||i.remove():(i==null||i.setAttribute("hidden","true"),i==null||i.setAttribute("aria-hidden","true")));return}}const se=e=>e==="react"||e==="reactNative"||e==="vue3"||e==="vue2",q="bldrAbTest",ce="bldrCntntScrpt",On=(e,t)=>{const n=Ht.toString().replace(/\s+/g," "),o=Kt.toString().replace(/\s+/g," ");return`
  const ${q} = ${n}
  const ${ce} = ${o}
  ${q}("${t}", ${JSON.stringify(e)}, ${se})
  `},Pn=({parentContentId:e,contentId:t})=>`
  ${ce}("${t}", "${e}", ${se})`,zt=e=>{var a;const t=e.family+(e.kind&&!e.kind.includes("#")?", "+e.kind:""),n=t.split(",")[0],o=e.fileUrl??((a=e==null?void 0:e.files)==null?void 0:a.regular);let r="";if(o&&t&&n&&(r+=`
@font-face {
font-family: "${t}";
src: local("${n}"), url('${o}') format('woff2');
font-display: fallback;
font-weight: 400;
}
      `.trim()),e.files)for(const i in e.files){if(!(String(Number(i))===i))continue;const c=e.files[i];c&&c!==o&&(r+=`
@font-face {
font-family: "${t}";
src: url('${c}') format('woff2');
font-display: fallback;
font-weight: ${i};
}
        `.trim())}return r},Bn=({customFonts:e})=>{var t;return((t=e==null?void 0:e.map(n=>zt(n)))==null?void 0:t.join(" "))||""},Ln=({cssCode:e,contentId:t})=>e?t?(e==null?void 0:e.replace(/&/g,`div[builder-content-id="${t}"]`))||"":e:"",Fn=m(d(()=>p(()=>import("./q-5094c4ac.js"),["build/q-5094c4ac.js","build/q-2feefdb9.js"]),"s_Og0xL34Zbvc")),Mn=({content:e,data:t,locale:n})=>{var a,i,s;const o={};(i=(a=e==null?void 0:e.data)==null?void 0:a.inputs)==null||i.forEach(c=>{var l;c.name&&c.defaultValue!==void 0&&((l=e==null?void 0:e.data)!=null&&l.state)&&e.data.state[c.name]===void 0&&(o[c.name]=c.defaultValue)});const r={...(s=e==null?void 0:e.data)==null?void 0:s.state,...t,...n?{locale:n}:{}};return{...o,...r}},Un=({content:e,data:t})=>e?{...e,data:{...e==null?void 0:e.data,...t},meta:e==null?void 0:e.meta}:void 0,Yt=function(t,n,o,r){var a,i,s,c,l;n.useContent={...n.useContent,...r,data:{...(a=n.useContent)==null?void 0:a.data,...r==null?void 0:r.data},meta:{...(i=n.useContent)==null?void 0:i.meta,...r==null?void 0:r.meta,breakpoints:((s=r==null?void 0:r.meta)==null?void 0:s.breakpoints)||((l=(c=n.useContent)==null?void 0:c.meta)==null?void 0:l.breakpoints)}}},Jt=function(t,n,o,r){var a;n.useContent={...n.useContent,meta:{...(a=n.useContent)==null?void 0:a.meta,breakpoints:r}}},O=function(t,n,o,r){n.contentState=r},Wn=function(t,n,o,r){var i;const{data:a}=r;if(a)switch(a.type){case"builder.configureSdk":{const s=a.data,{breakpoints:c,contentId:l}=s;if(!l||l!==((i=n.useContent)==null?void 0:i.id))return;c&&Jt(t,n,o,c),n.forceReRenderCount=n.forceReRenderCount+1;break}case"builder.contentUpdate":{const s=a.data,c=s.key||s.alias||s.entry||s.modelName,l=s.data;c===t.model&&(Yt(t,n,o,l),n.forceReRenderCount=n.forceReRenderCount+1);break}}},jn=function(t,n,o){var a,i;const r=(i=(a=n.useContent)==null?void 0:a.data)==null?void 0:i.jsCode;r&&C({code:r,context:t.context||{},localState:void 0,rootState:n.contentState,rootSetState:O.bind(null,t,n,o)})},Nn=function(t,n,o,r){var a,i;if(n.useContent){const s=(a=n.useContent)==null?void 0:a.testVariationId,c=(i=n.useContent)==null?void 0:i.id;Mt({type:"click",canTrack:n.canTrackToUse,contentId:c,apiKey:t.apiKey,variationId:s!==c?s:void 0,...jt(r),unique:!n.clicked})}n.clicked||(n.clicked=!0)},Gt=function(t,n,o,r){return r.replace(/{{([^}]+)}}/g,(a,i)=>C({code:i,context:t.context||{},localState:void 0,rootState:n.contentState,rootSetState:O.bind(null,t,n,o)}))},Xt=function(t,n,o,{url:r,key:a}){Z(r).then(i=>i.json()).then(i=>{const s={...n.contentState,[a]:i};O(t,n,o,s)}).catch(i=>{console.error("error fetching dynamic data",r,i)})},Dn=function(t,n,o){var a,i;const r=((i=(a=n.useContent)==null?void 0:a.data)==null?void 0:i.httpRequests)??{};Object.entries(r).forEach(([s,c])=>{if(c&&(!n.httpReqsData[s]||I())){const l=Gt(t,n,o,c);Xt(t,n,o,{url:l,key:s})}})},qn=function(t,n,o){I()&&window.dispatchEvent(new CustomEvent("builder:component:stateChange",{detail:{state:n.contentState,ref:{name:t.model}}}))},Hn=m(d(()=>p(()=>import("./q-36715857.js"),["build/q-36715857.js","build/q-2feefdb9.js"]),"s_hEAI0ahViXM")),Kn=function(t,n,o){var r;!n.contentToUse&&((r=t.symbol)!=null&&r.model)&&(o!=null&&o.apiKey)&&yt({model:t.symbol.model,apiKey:o.apiKey,apiVersion:o.apiVersion,query:{id:t.symbol.entry}}).then(a=>{a&&(n.contentToUse=a)}).catch(a=>{S.error("Could not fetch symbol content: ",a)})},Qt=m(d(()=>p(()=>import("./q-8a391196.js"),["build/q-8a391196.js","build/q-2feefdb9.js"]),"s_WVvggdkUPdk")),zn=m(d(()=>p(()=>import("./q-bcada44f.js"),["build/q-bcada44f.js","build/q-2feefdb9.js"]),"s_OMvvre8Ofjw"));export{$n as $,fn as A,tn as B,gn as C,En as D,Rn as E,Mn as F,Pn as G,Un as H,Fn as I,Nn as J,qn as K,Dn as L,jn as M,Yt as N,S as O,y as P,An as Q,rn as R,en as S,Vn as T,Cn as U,Wn as V,Tn as W,yt as X,Ln as Y,Bn as Z,Mt as _,me as a,ut as a0,_n as a1,qt as a2,On as a3,Hn as a4,Kn as a5,zn as a6,C as a7,on as b,w as c,nn as d,xn as e,L as f,be as g,vn as h,yn as i,hn as j,kn as k,In as l,Sn as m,wn as n,I as o,un as p,dn as q,an as r,cn as s,sn as t,ln as u,mn as v,pn as w,Te as x,xe as y,bn as z};
