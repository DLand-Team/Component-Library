import{j as e}from"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js";import{useState as r,useEffect as o,createRef as t}from"react";import{Cropper as i}from"../../../node_modules/.pnpm/react-cropper@2.3.3_react@18.2.0/node_modules/react-cropper/dist/react-cropper.es.js";import{dataURLToBlob as n}from"../../../utils/dataURLToBlob.js";var a=function(a){var p=a.name,c=a.src,d=a.callRef,s=a.onComplete,l=a.validateFunc,u=r(c)[0],m=t(),v=function(){var e,r;if(void 0!==(null===(e=m.current)||void 0===e?void 0:e.cropper)){var o=null===(r=m.current)||void 0===r?void 0:r.cropper.getCroppedCanvas().toDataURL(),t=n(o),i=new File([t],p||"hello.txt",{type:t.type}),a=(null==l?void 0:l(i))||[],c=a[0],d=void 0===c||c,u=a[1];return d&&s(i),[d,u]}};return o((function(){d.current=v}),[d]),e.jsxs("div",{children:[e.jsx("div",{style:{width:"100%"},children:e.jsx(i,{ref:m,style:{height:400,width:"100%"},zoomTo:.5,initialAspectRatio:1,src:u,viewMode:1,minCropBoxHeight:10,minCropBoxWidth:10,background:!1,responsive:!0,autoCropArea:1,checkOrientation:!1,guides:!0,aspectRatio:16/9})}),e.jsx("br",{style:{clear:"both"}})]})},p=a;export{a as Demo,p as default};
