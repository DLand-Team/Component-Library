import{enqueueSnackbar as o}from"../../node_modules/.pnpm/notistack@3.0.1_csstype@3.1.2_react-dom@18.2.0_react@18.2.0/node_modules/notistack/notistack.esm.js";export{NotifyProvider}from"./provider.js";const r={autoHideDuration:2e3,anchorOrigin:{horizontal:"right",vertical:"top"}},t={info:(...t)=>{const[n,i]=t;o(n,{...r,...i,variant:"info"})},error:(...t)=>{const[n,i]=t;o(n,{...r,...i,variant:"error"})},success:(...t)=>{const[n,i]=t;o(n,{...r,...i,variant:"success"})},warn:(...t)=>{const[n,i]=t;o(n,{...r,...i,variant:"warning"})}};export{t as notify};