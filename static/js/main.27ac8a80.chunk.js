(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,t,a){e.exports={notification:"Notification_notification__Onfl5"}},39:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(10),o=a.n(r),i=a(3),s=a(6),l=a.n(s),u=a(0),m=function(e){var t=e.src,a=e.alt,n=e.id,c=e.onClick;return Object(u.jsx)("li",{className:l.a.ImageGalleryItem,onClick:c,children:Object(u.jsx)("img",{src:t,alt:a,id:n,className:l.a.ImageGalleryItemImage})})},h=a(7),d=a.n(h),j=function(e){var t=e.images,a=e.onClick;return Object(u.jsx)("div",{className:d.a.ImageGalleryContainer,children:Object(u.jsx)("ul",{className:d.a.ImageGallery,children:t.map((function(e){return Object(u.jsx)(m,{src:e.webformatURL,alt:e.tags,id:e.id,onClick:a},e.id)}))})})},g=a(4),b=a.n(g),f=function(e){var t=e.onSubmit,a=e.searchWord,c=Object(n.useState)(""),r=Object(i.a)(c,2),o=r[0],s=r[1];return Object(u.jsx)("header",{className:b.a.Searchbar,onSubmit:function(e){e.preventDefault(),o!==a&&t(o)},children:Object(u.jsxs)("form",{className:b.a.SearchForm,children:[Object(u.jsx)("button",{type:"submit",className:b.a.SearchFormButton,children:Object(u.jsx)("span",{className:b.a.SearchFormButtonLabel,children:"Search"})}),Object(u.jsx)("input",{className:b.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){return s(e.target.value)},value:o})]})})},_=a(8),O=a.n(_),p=a(11),x=a.n(p),I=(a(38),function(e){var t=e.onClick,a=e.images,n=e.isLoading;return Object(u.jsx)("div",{className:O.a.LoadMoreBtn,children:n?Object(u.jsx)(x.a,{type:"Circles",color:"#003cff",height:80,width:80}):a.length>11&&Object(u.jsx)("button",{className:O.a.Button,type:"button",onClick:t,children:"Load More"})})}),S=a(9),y=a.n(S),v=function(e){var t=e.image,a=e.onClick;return Object(u.jsx)("div",{className:y.a.Overlay,onClick:a,id:"overley",children:Object(u.jsx)("div",{className:y.a.Modal,children:Object(u.jsx)("img",{src:t.largeImageURL,alt:t.tags})})})},B=function(e,t){return fetch("https://pixabay.com/api/?q="+e+"&page="+t+"&key=22611406-1fc8dc647f338efc8b1d9d866&image_type=photo&orientation=horizontal&per_page=12").then((function(e){return e.json()})).then((function(e){return e.hits}))},k=a(12),C=a.n(k),N=function(e){var t=e.notification;return Object(u.jsx)("div",{className:C.a.notification,children:t})},G=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),o=Object(i.a)(r,2),s=o[0],l=o[1],m=Object(n.useState)(""),h=Object(i.a)(m,2),d=h[0],g=h[1],b=Object(n.useState)({}),_=Object(i.a)(b,2),O=_[0],p=_[1],x=Object(n.useState)(!1),S=Object(i.a)(x,2),y=S[0],k=S[1],C=Object(n.useState)(1),G=Object(i.a)(C,2),L=G[0],F=G[1],M=Object(n.useState)(""),w=Object(i.a)(M,2),E=w[0],W=w[1];Object(n.useEffect)((function(){""!==d.trim()&&(k(!0),B(d,1).then((function(e){console.log("1"),k(!1),c(e),0===e.length&&W(" No search results! Change your search word and try again!")})))}),[d,W]),Object(n.useEffect)((function(){L>1&&(k(!0),B(d,L).then((function(e){c((function(t){return t.concat(e)})),k(!1),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})))}),[L,d]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{onSubmit:function(e){""!==e.trim()&&(W(""),g(e),c([]))},searchWord:d}),0!==a.length?Object(u.jsx)(j,{images:a,onClick:function(e){var t=a.find((function(t){return e.target.id===String(t.id)}));l(!0),p(t),document.addEventListener("keydown",(function(e){"Escape"===e.code&&l(!1)}))},addImages:function(e){return c(e)},searchWord:d,isLoading:y}):Object(u.jsx)(N,{notification:E}),Object(u.jsx)(I,{searchWord:d,onClick:function(){return F((function(e){return e+1}))},images:a,isLoading:y}),s&&Object(u.jsx)(v,{image:O,onClick:function(e){"overley"===e.target.id&&l(!1)}})]})};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(G,{})}),document.getElementById("root"))},4:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__270MC",SearchForm:"SearchBar_SearchForm__3g19A",SearchFormButton:"SearchBar_SearchFormButton__3y3vQ",SearchFormButtonLabel:"SearchBar_SearchFormButtonLabel__3_v_z",SearchFormInput:"SearchBar_SearchFormInput__39xWO"}},6:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__23Uwg",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3khu_"}},7:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1-vdN",ImageGalleryContainer:"ImageGallery_ImageGalleryContainer__2zLgs"}},8:function(e,t,a){e.exports={Button:"Button_Button__1khPh",LoadMoreBtn:"Button_LoadMoreBtn__2LeAV"}},9:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2_Vyd",Modal:"Modal_Modal__2721V",ModalImage:"Modal_ModalImage__6xKpT"}}},[[39,1,2]]]);
//# sourceMappingURL=main.27ac8a80.chunk.js.map