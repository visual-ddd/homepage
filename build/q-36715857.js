import{U as I,W as b,G as p,K as S,n as y,c as _,C as m,k as E,g as i,j as w,b as v,m as c,R as T,_ as d,a as u,N as K}from"./q-2feefdb9.js";import{D as L,E as V,c as M,F as A,G as O,H as j,B as D,I as W,j as x,J as F,K as g,L as f,M as h,N as P,O as N,P as U,o as Y,Q as q,T as B,U as G,V as H,_ as J,W as X,X as Z}from"./q-7b277545.js";const $=n=>{var a;I();const s=b(),e=p({allRegisteredComponents:[...L(),...V,...n.customComponents||[]].reduce((o,{component:t,...r})=>({...o,[r.name]:{component:t,...r}}),{}),canTrackToUse:M(n.canTrack)?n.canTrack:!0,clicked:!1,contentState:A({content:n.content,data:n.data,locale:n.locale}),forceReRenderCount:0,httpReqsData:{},overrideContent:null,scriptStr:O({contentId:(a=n.content)==null?void 0:a.id,parentContentId:n.parentContentId}),update:0,useContent:j({content:n.content,data:n.data})},{deep:!0});return S(D,p({content:e.useContent,localState:void 0,rootState:e.contentState,rootSetState:void 0,context:n.context||{},apiKey:n.apiKey,apiVersion:n.apiVersion,registeredComponents:e.allRegisteredComponents,inheritedStyles:{}})),y(c(()=>d(()=>Promise.resolve().then(()=>l),void 0),"s_n50dgqWW6pY",[s,n,e])),_(c(()=>d(()=>Promise.resolve().then(()=>l),void 0),"s_Kulmlf9pM08",[s,n,e])),_(c(()=>d(()=>Promise.resolve().then(()=>l),void 0),"s_X59YMGOetns",[s,n,e])),_(c(()=>d(()=>Promise.resolve().then(()=>l),void 0),"s_u3gn3Pj2b2s",[s,n,e])),_(c(()=>d(()=>Promise.resolve().then(()=>l),void 0),"s_xLCHvjhJYRM",[s,n,e])),m(T,{children:e.useContent?E("div",{ref:s,...n.hideContent?{hidden:!0,"aria-hidden":!0}:{},children:[n.isSsrAbTest?w("script",null,{dangerouslySetInnerHTML:i(o=>o.scriptStr,[e],"p0.scriptStr")},null,3,"03_0"):null,m(W,{get contentId(){var o;return(o=e.useContent)==null?void 0:o.id},get cssCode(){var o,t;return(t=(o=e.useContent)==null?void 0:o.data)==null?void 0:t.cssCode},get customFonts(){var o,t;return(t=(o=e.useContent)==null?void 0:o.data)==null?void 0:t.customFonts},[v]:{contentId:i(o=>{var t;return(t=o.useContent)==null?void 0:t.id},[e],"p0.useContent?.id"),cssCode:i(o=>{var t,r;return(r=(t=o.useContent)==null?void 0:t.data)==null?void 0:r.cssCode},[e],"p0.useContent?.data?.cssCode"),customFonts:i(o=>{var t,r;return(r=(t=o.useContent)==null?void 0:t.data)==null?void 0:r.customFonts},[e],"p0.useContent?.data?.customFonts")}},3,"03_1"),m(x,{get blocks(){var o,t;return(t=(o=e.useContent)==null?void 0:o.data)==null?void 0:t.blocks},[v]:{blocks:i(o=>{var t,r;return(r=(t=o.useContent)==null?void 0:t.data)==null?void 0:r.blocks},[e],"p0.useContent?.data?.blocks")}},3,e.forceReRenderCount)],onClick$:c(()=>d(()=>Promise.resolve().then(()=>l),void 0),"s_wLg5o3ZkpC0",[s,n,e])},{"builder-content-id":i(o=>{var t;return(t=o.useContent)==null?void 0:t.id},[e],"p0.useContent?.id"),"builder-model":i(o=>o.model,[n],"p0.model"),class:i(o=>o.classNameProp,[n],"p0.classNameProp")},0,"03_2"):null},1,"03_3")},z=n=>{const[s,e,a]=u();return F(e,a,s,n)},Q=({track:n})=>{const[s,e,a]=u();n(()=>a.contentState),g(e,a)},ee=({track:n})=>{const[s,e,a]=u();n(()=>{var o,t;return(t=(o=a.useContent)==null?void 0:o.data)==null?void 0:t.httpRequests}),f(e,a,s)},te=({track:n})=>{const[s,e,a]=u();n(()=>{var o,t;return(t=(o=a.useContent)==null?void 0:o.data)==null?void 0:t.jsCode}),n(()=>a.contentState),h(e,a,s)},ne=({track:n})=>{const[s,e,a]=u();n(()=>e.content),e.content&&P(e,a,s,e.content)},se=()=>{var a,o;const[n,s,e]=u();if(s.apiKey||N.error("No API key provided to `RenderContent` component. This can cause issues. Please provide an API key using the `apiKey` prop."),U()){if(Y()&&(e.forceReRenderCount=e.forceReRenderCount+1,q(),B({...s.locale?{locale:s.locale}:{},...s.includeRefs?{includeRefs:s.includeRefs}:{},...s.enrich?{enrich:s.enrich}:{}}),Object.values(e.allRegisteredComponents).forEach(t=>{var C;const r=G(t);(C=window.parent)==null||C.postMessage(r,"*")}),window.addEventListener("message",H.bind(null,s,e,n)),window.addEventListener("builder:component:stateChangeListenerActivated",g.bind(null,s,e,n))),e.useContent){const t=(a=e.useContent)==null?void 0:a.testVariationId,r=(o=e.useContent)==null?void 0:o.id;J({type:"impression",canTrack:e.canTrackToUse,contentId:r,apiKey:s.apiKey,variationId:t!==r?t:void 0})}if(X()){const t=new URL(location.href).searchParams,r=t.get("builder.preview"),C=t.get(`builder.preview.${r}`),k=t.get("apiKey")||t.get("builder.space");r===s.model&&k===s.apiKey&&(!s.content||C===s.content.id)&&Z({model:s.model,apiKey:s.apiKey,apiVersion:s.apiVersion}).then(R=>{R&&P(s,e,n,R)})}h(s,e,n),f(s,e,n),g(s,e)}},l=Object.freeze(Object.defineProperty({__proto__:null,_hW:K,s_Kulmlf9pM08:ne,s_X59YMGOetns:te,s_hEAI0ahViXM:$,s_n50dgqWW6pY:se,s_u3gn3Pj2b2s:ee,s_wLg5o3ZkpC0:z,s_xLCHvjhJYRM:Q},Symbol.toStringTag,{value:"Module"}));export{K as _hW,ne as s_Kulmlf9pM08,te as s_X59YMGOetns,$ as s_hEAI0ahViXM,se as s_n50dgqWW6pY,ee as s_u3gn3Pj2b2s,z as s_wLg5o3ZkpC0,Q as s_xLCHvjhJYRM};