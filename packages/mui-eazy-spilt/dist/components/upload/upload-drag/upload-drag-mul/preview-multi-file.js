import{j as e}from"../../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js";import{Box as t}from"@mui/material";import{useRef as o}from"react";import{HTML5Backend as r}from"../../../../node_modules/.pnpm/react-dnd-html5-backend@16.0.1/node_modules/react-dnd-html5-backend/dist/index.js";import{FileThumbnail as n}from"../../../file-thumbnail/file-thumbnail.js";import{Iconify as i}from"../../../iconify/iconify.js";import{DndProvider as d}from"../../../../node_modules/.pnpm/react-dnd@16.0.1_@types_node@20.11.16_@types_react@18.2.54_react@18.2.0/node_modules/react-dnd/dist/core/DndProvider.js";import{useDrop as m}from"../../../../node_modules/.pnpm/react-dnd@16.0.1_@types_node@20.11.16_@types_react@18.2.54_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useDrop.js";import{useDrag as s}from"../../../../node_modules/.pnpm/react-dnd@16.0.1_@types_node@20.11.16_@types_react@18.2.54_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useDrag.js";import a from"../../../../node_modules/.pnpm/@mui_material@5.15.7_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.54_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Stack/Stack.js";import c from"../../../../node_modules/.pnpm/@mui_material@5.15.7_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.54_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/ListItemText/ListItemText.js";import l from"../../../../node_modules/.pnpm/@mui_material@5.15.7_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.54_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/IconButton/IconButton.js";import{alpha as p}from"@mui/system";const _={CARD:"card"};function u({index:t,file:r,fileName:d,onRemove:u,sx:f={},moveCard:y}){const x=o(null),[{handlerId:g},j]=m({accept:_.CARD,collect:e=>({handlerId:e.getHandlerId()}),hover(e,o){if(!x.current)return;const r=e.index,n=t;if(r===n)return;const i=x.current?.getBoundingClientRect(),d=(i.bottom-i.top)/2,m=o.getClientOffset().y-i.top;r<n&&m<d||r>n&&m>d||(y?.(r,n),e.index=n)}}),[{isDragging:h},D]=s({type:_.CARD,item:()=>({id:r,index:t}),collect:e=>({isDragging:e.isDragging()})}),v=h?0:1;return D(j(x)),e.jsxs(a,{ref:x,"data-handler-id":g,spacing:2,direction:"row",alignItems:"center",sx:{my:1,py:1,px:1.5,borderRadius:1,border:e=>`solid 1px ${p(e.palette.grey[500],.16)}`,opacity:v,...f},children:[e.jsx(n,{fileName:d,file:r}),e.jsx(c,{primary:d.split("/").slice(-1)[0],secondary:"",secondaryTypographyProps:{component:"span",typography:"caption"}}),u&&e.jsx(l,{size:"small",onClick:()=>{u(d)},children:e.jsx(i,{icon:"mingcute:close-line",width:16})})]},d)}function f({fileNameList:o,onRemove:n,sx:i,moveCard:m,files:s}){return e.jsx(t,{children:e.jsx(d,{backend:r,children:o?.map(((t,o)=>e.jsx("div",{children:e.jsx(u,{index:o,moveCard:m,file:s?.[o],fileName:t,onRemove:n,sx:i})},t)))})})}export{_ as ItemTypes,f as default};
