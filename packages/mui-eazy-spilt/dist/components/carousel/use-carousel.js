import{useRef as e,useState as r,useCallback as t}from"react";import n from"../../node_modules/.pnpm/@mui_material@5.15.7_@emotion_react@11.11.3_@emotion_styled@11.11.0_@types_react@18.2.54_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/useTheme.js";function o(o){const c=n(),a=e(null),[u,i]=r(o?.initialSlide||0),[s,l]=r(void 0),m="rtl"===c.direction,d={arrows:!1,dots:!!o?.customPaging,rtl:m,beforeChange:(e,r)=>i(r),...o,fade:!(!o?.fade||m)},_=t((()=>{a.current&&l(a.current)}),[]),f=t((()=>{a.current&&a.current.slickPrev()}),[]),p=t((()=>{a.current&&a.current.slickNext()}),[]),v=t((e=>{a.current&&a.current.slickGoTo(e)}),[]);return{nav:s,carouselRef:a,currentIndex:u,carouselSettings:d,onPrev:f,onNext:p,onTogo:v,onSetNav:_,setNav:l,setCurrentIndex:i}}export{o as default};
