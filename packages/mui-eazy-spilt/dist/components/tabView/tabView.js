import{__rest as e,__assign as t}from"../../node_modules/.pnpm/@rollup_plugin-typescript@11.1.6_rollup@4.9.6_tslib@2.6.2_typescript@5.3.3/node_modules/tslib/tslib.es6.js";import{j as i}from"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js";import{Tabs as n,Tab as r}from"@mui/material";import{useState as o,useCallback as a,useLayoutEffect as l}from"react";import m from"../../node_modules/.pnpm/@mui_material@5.15.5_@emotion_react@11.5.0_@emotion_styled@11.6.0_@types_react@18.2.51_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js";import{uuidv4 as s}from"../../utils/uuidv4.js";function d(m){var d=m.tabs,c=e(m,["tabs"]),p=o([]),_=p[0],f=p[1],x=o("My Information"),b=x[0],j=x[1],v=a((function(e,t){j(t)}),[]);return l((function(){var e=[];d.forEach((function(t,i){e.push({}),t.id||(e[i].id=s()),Object.assign(e[i],t)})),e[0].id&&j(e[0].id),f(e)}),[d]),i.jsxs(i.Fragment,{children:[i.jsx(n,t({scrollButtons:!1,onChange:v,style:{marginBottom:"20px"}},c,{value:b,children:_.map((function(e){var t=e.id,n=e.label;return i.jsx(r,{value:t,label:n},n||t)}))})),_.map((function(e){var t=e.id,n=e.node;return i.jsx(u,{value:b,index:t,children:n},t)}))]})}function u(n){var r=n.children,o=n.value,a=n.index,l=e(n,["children","value","index"]);return i.jsx("div",t({role:"tabpanel",hidden:o!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},l,{children:o===a&&i.jsx(m,{sx:{py:3},children:r})}))}export{d as TabView};
