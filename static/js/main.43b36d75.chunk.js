(this.webpackJsonpstore=this.webpackJsonpstore||[]).push([[0],{189:function(e,a,t){e.exports=t(302)},302:function(e,a,t){"use strict";t.r(a);var s=t(0),i=t.n(s),o=t(13),n=t.n(o),r=t(16),l=t(23),m=t(175),c=t(362),g=t(360),p=t(359),u=t(343),d=t(339),f=function(e){if(!e)return e;var a=e.replace(/[^\d]/g,"");return a.length<=3?a:a.length<=7?"".concat(a.slice(0,3),"-").concat(a.slice(3)):"".concat(a.slice(0,3),"-").concat(a.slice(3,6),"-").concat(a.slice(6,10))},h=t(178),_=t(58),L=t(304),b=t(14),C=t(103),j=t(33),w=function(e,a,t,s){return e.map((function(e){return e[t]===a?Object(j.a)({},e,{},s):e}))},y={goodsInBasket:[]},S=function(e,a){return function(t){t(function(e,a){return{type:"basket/UPDATE_AMOUNT_GOOD_BASKET",id:e,value:a}}(e,a))}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"basket/ADD_GOOD_TO_BASKET":var t=a.good;return Object(j.a)({},e,{goodsInBasket:[].concat(Object(C.a)(e.goodsInBasket),[t])});case"basket/DELETE_GOOD_FROM_BASKET":var s=a.id;return Object(j.a)({},e,{goodsInBasket:Object(C.a)(e.goodsInBasket).filter((function(e){return e.id!==s}))});case"basket/UPDATE_AMOUNT_GOOD_BASKET":return Object(j.a)({},e,{goodsInBasket:w(Object(C.a)(e.goodsInBasket),a.id,"id",{amount:a.value})});case"basket/CLEAR_BASKET":return Object(j.a)({},e,{goodsInBasket:[]});default:return e}},I=t(367),U=Object(d.a)((function(e){return{paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,minHeight:"40vh",width:"70vw",maxWidth:"350px"},submitBtn:{marginTop:"30px"},container:{display:"grid",justifyItems:"center"}}})),v=function(e){var a=e.label,t=e.input,s=e.meta,o=s.touched,n=s.invalid,r=s.error,l=Object(m.a)(e,["label","input","meta"]);return i.a.createElement(p.a,Object.assign({label:a,placeholder:a,error:o&&n,helperText:o&&r},t,l))},k=Object(g.a)({form:"OrderForm",validate:function(e){var a={};return["firstName","phone","email"].forEach((function(t){e[t]||(a[t]="Required")})),e.email&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)&&(a.email="Invalid email address"),a}})((function(e){var a=e.handleSubmit,t=e.valid,o=e.reset,n=e.setOpenPopup,r=U(),m=Object(b.c)(),g=Object(I.a)(),p=Object(l.a)(g,2),d=p[0],C=(p[1],Object(s.useCallback)((function(){n(!0),m((function(e){e({type:"basket/CLEAR_BASKET"})})),o()}),[n,o,m]));return i.a.createElement("div",{className:r.container},i.a.createElement(h.a,{className:r.paper},i.a.createElement(_.a,{variant:"h5",gutterBottom:!0},d("OrderForm")),i.a.createElement(u.a,{container:!0,spacing:3},i.a.createElement(u.a,{item:!0,xs:12},i.a.createElement("form",{onSubmit:a},i.a.createElement("div",null,i.a.createElement(c.a,{fullWidth:!0,name:"firstName",component:v,label:d("FirstName")})),i.a.createElement("div",null,i.a.createElement(c.a,{fullWidth:!0,name:"phone",component:v,label:d("Phone"),normalize:f})),i.a.createElement("div",null,i.a.createElement(c.a,{fullWidth:!0,name:"email",component:v,label:"Email"})),i.a.createElement("div",null,i.a.createElement(L.a,{variant:"contained",color:"secondary",className:r.submitBtn,disabled:!t,onClick:C},d("Submit"))))))))})),A=t(366),B=t(344),E=t(345),O=Object(d.a)((function(e){return{dialogActions:{justifyContent:"center"}}})),x=function(e){var a=e.openPopup,t=e.handleClose,s=O(),o=Object(I.a)(),n=Object(l.a)(o,2),r=n[0];n[1];return i.a.createElement(A.a,{onClose:t,"aria-labelledby":"customized-dialog-title",open:a},i.a.createElement(B.a,{id:"customized-dialog-title",onClose:t},r("OrderPlaced")),i.a.createElement(E.a,{className:s.dialogActions},i.a.createElement(L.a,{autoFocus:!0,onClick:t,color:"secondary",variant:"contained"},"OK")))},K={goods:"/",basket:"/basket",order:"/order"},F=function(){var e=Object(s.useState)(!1),a=Object(l.a)(e,2),t=a[0],o=a[1],n=Object(r.f)(),m=Object(s.useCallback)((function(){o(!1),n.push(K.goods)}),[o,n]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(k,{setOpenPopup:o}),i.a.createElement(x,{openPopup:t,handleClose:m}))},N=t(87),P=t(352),M=t(166),D=t.n(M),H=t(346),R=t(164),X=t.n(R),G=t(165),T=t.n(G),Q=t(341),V=Object(d.a)({counterInput:{maxWidth:"45px","& input":{textAlign:"center"}}}),W=function(e){var a=e.id,t=e.amount,s=V(),o=Object(b.c)();return i.a.createElement(i.a.Fragment,null,i.a.createElement(H.a,{variant:"contained",color:"primary",onClick:function(){o(S(a,t>=2?t-1:t))}},i.a.createElement(X.a,null)),i.a.createElement(Q.a,{value:t,className:s.counterInput,disableUnderline:!0,readOnly:!0}),i.a.createElement(H.a,{variant:"contained",color:"primary",onClick:function(){o(S(a,t+1))}},i.a.createElement(T.a,null)))},Z=t(347),Y=t(348),J=t(349),$=t(350),q=t(351),ee=[{title:"Keurig K-Duo",price:"149.99",description:"EN both ground coffee and k-cup pods. Multiple brew sizes: brew an 8, 10, or 12-cup carafe and an 237, 296, or 355ml (8, 10, or 12 oz. ) cup ",avatarUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e0/Keurig_Logo.png",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61-KUPluVYL._AC_SL1500_.jpg",id:1,amount:1},{title:"KRUPS Electric",price:"19.99",description:"Large grinding capacity yields ground coffee for up to 12 cups of coffee",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81CbxNLCHCL._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/71FhMLBP9XL._AC_SL1500_.jpg",id:2,amount:1},{title:"Hamilton Beach",price:"89.99",description:"No two coffee drinkers are the same \u2013 so, the flexibility to customize how and what you brew is key. From fresh grounds to K-Cup pods, the Hamilton Beach FlexBrew 2-Way Coffee Maker gives you the options to please fans of all types of coffees.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg",id:3,amount:1},{title:"Secura French",price:"36.48",description:"3-layered Stainless steel filter traps the smallest coffee grounds to produce an exceptional full-bodied flavor, filter is easy to disassemble and clean.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/61u76aiQQsL._AC_SL1000_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61XRMmXVwQL._AC_SL1500_.jpg",id:4,amount:1},{title:"Cafe Du Chateau",price:"32.95",description:"We use double stainless steel screen filters on a durable plunger supported by a spring loaded base plate to seal the edges, followed by a final top lid strainer to give you a pure brew with no grounds unlike other cheap presses.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81BdxpiRtCL._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/81luUhz7ZlL._AC_SL1500_.jpg",id:5,amount:1},{title:"LIVINGbasics  ",price:"37.99",description:'Brew with a single serve k-cup pod or ground coffee. Less than 14 cm (5.5") wide slim design, its the perfect size for any space.',avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/61PGHBLkl8L._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61KBB8K1wDL._AC_SL1000_.jpg",id:6,amount:1},{title:"Keurig K-Duo",price:"149.99",description:"Use both ground coffee and k-cup pods. Multiple brew sizes: brew an 8, 10, or 12-cup carafe and an 237, 296, or 355ml (8, 10, or 12 oz. ) cup ",avatarUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e0/Keurig_Logo.png",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61-KUPluVYL._AC_SL1500_.jpg",id:7,amount:1},{title:"KRUPS Electric",price:"19.99",description:"Large grinding capacity yields ground coffee for up to 12 cups of coffee",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81CbxNLCHCL._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/71FhMLBP9XL._AC_SL1500_.jpg",id:8,amount:1},{title:"Hamilton Beach",price:"89.99",description:"No two coffee drinkers are the same \u2013 so, the flexibility to customize how and what you brew is key. From fresh grounds to K-Cup pods, the Hamilton Beach FlexBrew 2-Way Coffee Maker gives you the options to please fans of all types of coffees.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg",id:9,amount:1},{title:"Secura French",price:"36.48",description:"3-layered Stainless steel filter traps the smallest coffee grounds to produce an exceptional full-bodied flavor, filter is easy to disassemble and clean.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/61u76aiQQsL._AC_SL1000_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61XRMmXVwQL._AC_SL1500_.jpg",id:10,amount:1},{title:"Cafe Du Chateau",price:"32.95",description:"We use double stainless steel screen filters on a durable plunger supported by a spring loaded base plate to seal the edges, followed by a final top lid strainer to give you a pure brew with no grounds unlike other cheap presses.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81BdxpiRtCL._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/81luUhz7ZlL._AC_SL1500_.jpg",id:11,amount:1},{title:"LIVINGbasics  ",price:"37.99",description:'Brew with a single serve k-cup pod or ground coffee. Less than 14 cm (5.5") wide slim design, its the perfect size for any space.',avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/61PGHBLkl8L._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61KBB8K1wDL._AC_SL1000_.jpg",id:12,amount:1},{title:"KRUPS Electric",price:"19.99",description:"Large grinding capacity yields ground coffee for up to 12 cups of coffee",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81CbxNLCHCL._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/71FhMLBP9XL._AC_SL1500_.jpg",id:13,amount:1},{title:"Hamilton Beach",price:"89.99",description:"No two coffee drinkers are the same \u2013 so, the flexibility to customize how and what you brew is key. From fresh grounds to K-Cup pods, the Hamilton Beach FlexBrew 2-Way Coffee Maker gives you the options to please fans of all types of coffees.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg",id:14,amount:1},{title:"Secura French",price:"36.48",description:"3-layered Stainless steel filter traps the smallest coffee grounds to produce an exceptional full-bodied flavor, filter is easy to disassemble and clean.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/61u76aiQQsL._AC_SL1000_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61XRMmXVwQL._AC_SL1500_.jpg",id:15,amount:1},{title:"Cafe Du Chateau",price:"32.95",description:"We use double stainless steel screen filters on a durable plunger supported by a spring loaded base plate to seal the edges, followed by a final top lid strainer to give you a pure brew with no grounds unlike other cheap presses.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81BdxpiRtCL._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/81luUhz7ZlL._AC_SL1500_.jpg",id:16,amount:1},{title:"LIVINGbasics  ",price:"37.99",description:'Brew with a single serve k-cup pod or ground coffee. Less than 14 cm (5.5") wide slim design, its the perfect size for any space.',avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/61PGHBLkl8L._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61KBB8K1wDL._AC_SL1000_.jpg",id:17,amount:1},{title:"Keurig K-Duo",price:"149.99",description:"Use both ground coffee and k-cup pods. Multiple brew sizes: brew an 8, 10, or 12-cup carafe and an 237, 296, or 355ml (8, 10, or 12 oz. ) cup ",avatarUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e0/Keurig_Logo.png",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61-KUPluVYL._AC_SL1500_.jpg",id:18,amount:1},{title:"KRUPS Electric",price:"19.99",description:"Large grinding capacity yields ground coffee for up to 12 cups of coffee",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81CbxNLCHCL._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/71FhMLBP9XL._AC_SL1500_.jpg",id:19,amount:1},{title:"Hamilton Beach",price:"89.99",description:"No two coffee drinkers are the same \u2013 so, the flexibility to customize how and what you brew is key. From fresh grounds to K-Cup pods, the Hamilton Beach FlexBrew 2-Way Coffee Maker gives you the options to please fans of all types of coffees.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg",id:20,amount:1},{title:"LIVINGbasics  ",price:"37.99",description:'Brew with a single serve k-cup pod or ground coffee. Less than 14 cm (5.5") wide slim design, its the perfect size for any space.',avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/61PGHBLkl8L._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61KBB8K1wDL._AC_SL1000_.jpg",id:21,amount:1},{title:"Keurig K-Duo",price:"149.99",description:"Use both ground coffee and k-cup pods. Multiple brew sizes: brew an 8, 10, or 12-cup carafe and an 237, 296, or 355ml (8, 10, or 12 oz. ) cup ",avatarUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e0/Keurig_Logo.png",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61-KUPluVYL._AC_SL1500_.jpg",id:22,amount:1},{title:"KRUPS Electric",price:"19.99",description:"Large grinding capacity yields ground coffee for up to 12 cups of coffee",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81CbxNLCHCL._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/71FhMLBP9XL._AC_SL1500_.jpg",id:23,amount:1},{title:"Hamilton Beach",price:"89.99",description:"No two coffee drinkers are the same \u2013 so, the flexibility to customize how and what you brew is key. From fresh grounds to K-Cup pods, the Hamilton Beach FlexBrew 2-Way Coffee Maker gives you the options to please fans of all types of coffees.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg",id:24,amount:1},{title:"Secura French",price:"36.48",description:"3-layered Stainless steel filter traps the smallest coffee grounds to produce an exceptional full-bodied flavor, filter is easy to disassemble and clean.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/61u76aiQQsL._AC_SL1000_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61XRMmXVwQL._AC_SL1500_.jpg",id:25,amount:1},{title:"Cafe Du Chateau",price:"32.95",description:"We use double stainless steel screen filters on a durable plunger supported by a spring loaded base plate to seal the edges, followed by a final top lid strainer to give you a pure brew with no grounds unlike other cheap presses.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81BdxpiRtCL._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/81luUhz7ZlL._AC_SL1500_.jpg",id:26,amount:1},{title:"LIVINGbasics  ",price:"37.99",description:'Brew with a single serve k-cup pod or ground coffee. Less than 14 cm (5.5") wide slim design, its the perfect size for any space.',avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/61PGHBLkl8L._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61KBB8K1wDL._AC_SL1000_.jpg",id:27,amount:1},{title:"KRUPS Electric",price:"19.99",description:"Large grinding capacity yields ground coffee for up to 12 cups of coffee",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81CbxNLCHCL._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/71FhMLBP9XL._AC_SL1500_.jpg",id:28,amount:1},{title:"Hamilton Beach",price:"89.99",description:"No two coffee drinkers are the same \u2013 so, the flexibility to customize how and what you brew is key. From fresh grounds to K-Cup pods, the Hamilton Beach FlexBrew 2-Way Coffee Maker gives you the options to please fans of all types of coffees.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg",id:29,amount:1},{title:"Secura French",price:"36.48",description:"3-layered Stainless steel filter traps the smallest coffee grounds to produce an exceptional full-bodied flavor, filter is easy to disassemble and clean.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/61u76aiQQsL._AC_SL1000_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61XRMmXVwQL._AC_SL1500_.jpg",id:30,amount:1},{title:"Cafe Du Chateau",price:"32.95",description:"We use double stainless steel screen filters on a durable plunger supported by a spring loaded base plate to seal the edges, followed by a final top lid strainer to give you a pure brew with no grounds unlike other cheap presses.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81BdxpiRtCL._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/81luUhz7ZlL._AC_SL1500_.jpg",id:31,amount:1}],ae=t(100),te=Object(d.a)((function(e){return{cardMedia:{height:"130px",width:"110px",margin:"0 auto"},cardContent:{height:"100px",overflow:"hidden"},cardActions:{justifyContent:"center",marginBottom:"8px"}}})),se=i.a.memo((function(e){var a=e.cardData,t=te(),o=Object(r.g)().pathname,n=Object(b.c)(),m=Object(I.a)(),c=Object(l.a)(m,2),g=c[0],p=c[1],d=Object(b.d)((function(e){return e.basket.goodsInBasket})),f=a.title,h=a.price,C=a.description,j=a.imageUrl,w=a.id,y=a.amount,S=p.language||window.localStorage.i18nextLng,z=(90*h).toFixed(2)+" \u20bd",U=Object(s.useCallback)((function(){var e=ee.find((function(e){return e.id===w}));d.map((function(e){return e.id})).includes(w)||n(function(e){return function(a){a({type:"basket/ADD_GOOD_TO_BASKET",good:e})}}(e))}),[n,w,d]),v=Object(s.useCallback)((function(){d.find((function(e){return e.id===w&&n(function(e){return function(a,t){a(function(e){return{type:"basket/DELETE_GOOD_FROM_BASKET",id:e}}(e))}}(w))}))}),[n,w,d]);return i.a.createElement(u.a,{item:!0,key:w,xs:12,sm:6,md:3,lg:!0},i.a.createElement(Z.a,null,i.a.createElement(Y.a,{title:i.a.createElement(_.a,{variant:"subtitle1"},f),subheader:"ru"===S?z:h+" \u20ac",action:o===K.basket&&i.a.createElement(H.a,{"aria-label":"settings",size:"small",onClick:v},i.a.createElement(D.a,null))}),i.a.createElement(J.a,{image:j,className:t.cardMedia}),i.a.createElement($.a,null,i.a.createElement(_.a,{variant:"body2",component:"p",className:t.cardContent},C)),i.a.createElement(q.a,{className:t.cardActions},o===K.basket?i.a.createElement(W,{amount:y,id:w}):i.a.createElement(L.a,{size:"small",color:"primary",variant:"contained",onClick:U},g("AddToBasket")))))})),ie=Object(d.a)((function(e){return{gridItemsContainer:Object(N.a)({},e.breakpoints.up("lg"),{display:"grid",gridTemplateColumns:"repeat(5, 1fr)"})}})),oe=function(e){var a=e.cards,t=ie();return a?i.a.createElement(u.a,{container:!0,spacing:3,className:t.gridItemsContainer},a.map((function(e){return i.a.createElement(se,{key:e.id,cardData:e})}))):i.a.createElement(P.a,{color:"secondary"})},ne={goodItems:[],lang:""},re=function(e){return function(a){a(function(e){return{type:"goods/SET_GOODS",goods:e}}(e))}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"goods/SET_GOODS":return Object(j.a)({},e,{goodItems:a.goods});case"goods/SET_LANG":return Object(j.a)({},e,{lang:a.lang});default:return e}},me=t(363),ce=[{title:"Keurig K-Duo",price:"149.99",description:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043a\u0430\u043a \u043c\u043e\u043b\u043e\u0442\u044b\u0439 \u043a\u043e\u0444\u0435, \u0442\u0430\u043a \u0438 \u043a\u0430\u043f\u0441\u0443\u043b\u044b k-cup. \u0420\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0437\u0430\u0432\u0430\u0440\u0438\u0432\u0430\u043d\u0438\u044f: \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u044c\u0442\u0435 \u0433\u0440\u0430\u0444\u0438\u043d \u043d\u0430 8, 10 \u0438\u043b\u0438 12 \u0447\u0430\u0448\u0435\u043a \u0438 \u0447\u0430\u0448\u043a\u0443 \u043d\u0430 237, 296 \u0438\u043b\u0438 355 \u043c\u043b (8, 10 \u0438\u043b\u0438 12 \u0443\u043d\u0446\u0438\u0439).",avatarUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e0/Keurig_Logo.png",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61-KUPluVYL._AC_SL1500_.jpg",id:1,amount:1},{title:"KRUPS Electric",price:"19.99",description:"Large grinding capacity yields ground coffee for up to 12 cups of coffee",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81CbxNLCHCL._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/71FhMLBP9XL._AC_SL1500_.jpg",id:2,amount:1},{title:"Hamilton Beach",price:"89.99",description:"No two coffee drinkers are the same \u2013 so, the flexibility to customize how and what you brew is key. From fresh grounds to K-Cup pods, the Hamilton Beach FlexBrew 2-Way Coffee Maker gives you the options to please fans of all types of coffees.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg",id:3,amount:1},{title:"Secura French",price:"36.48",description:"3-layered Stainless steel filter traps the smallest coffee grounds to produce an exceptional full-bodied flavor, filter is easy to disassemble and clean.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/61u76aiQQsL._AC_SL1000_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61XRMmXVwQL._AC_SL1500_.jpg",id:4,amount:1},{title:"Cafe Du Chateau",price:"32.95",description:"We use double stainless steel screen filters on a durable plunger supported by a spring loaded base plate to seal the edges, followed by a final top lid strainer to give you a pure brew with no grounds unlike other cheap presses.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81BdxpiRtCL._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/81luUhz7ZlL._AC_SL1500_.jpg",id:5,amount:1},{title:"LIVINGbasics  ",price:"37.99",description:'Brew with a single serve k-cup pod or ground coffee. Less than 14 cm (5.5") wide slim design, its the perfect size for any space.',avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/61PGHBLkl8L._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61KBB8K1wDL._AC_SL1000_.jpg",id:6,amount:1},{title:"Keurig K-Duo",price:"149.99",description:"Use both ground coffee and k-cup pods. Multiple brew sizes: brew an 8, 10, or 12-cup carafe and an 237, 296, or 355ml (8, 10, or 12 oz. ) cup ",avatarUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e0/Keurig_Logo.png",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61-KUPluVYL._AC_SL1500_.jpg",id:7,amount:1},{title:"KRUPS Electric",price:"19.99",description:"Large grinding capacity yields ground coffee for up to 12 cups of coffee",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81CbxNLCHCL._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/71FhMLBP9XL._AC_SL1500_.jpg",id:8,amount:1},{title:"Hamilton Beach",price:"89.99",description:"No two coffee drinkers are the same \u2013 so, the flexibility to customize how and what you brew is key. From fresh grounds to K-Cup pods, the Hamilton Beach FlexBrew 2-Way Coffee Maker gives you the options to please fans of all types of coffees.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg",id:9,amount:1},{title:"Secura French",price:"36.48",description:"3-layered Stainless steel filter traps the smallest coffee grounds to produce an exceptional full-bodied flavor, filter is easy to disassemble and clean.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/61u76aiQQsL._AC_SL1000_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61XRMmXVwQL._AC_SL1500_.jpg",id:10,amount:1},{title:"Cafe Du Chateau",price:"32.95",description:"We use double stainless steel screen filters on a durable plunger supported by a spring loaded base plate to seal the edges, followed by a final top lid strainer to give you a pure brew with no grounds unlike other cheap presses.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81BdxpiRtCL._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/81luUhz7ZlL._AC_SL1500_.jpg",id:11,amount:1},{title:"LIVINGbasics  ",price:"37.99",description:'Brew with a single serve k-cup pod or ground coffee. Less than 14 cm (5.5") wide slim design, its the perfect size for any space.',avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/61PGHBLkl8L._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61KBB8K1wDL._AC_SL1000_.jpg",id:12,amount:1},{title:"KRUPS Electric",price:"19.99",description:"Large grinding capacity yields ground coffee for up to 12 cups of coffee",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81CbxNLCHCL._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/71FhMLBP9XL._AC_SL1500_.jpg",id:13,amount:1},{title:"Hamilton Beach",price:"89.99",description:"No two coffee drinkers are the same \u2013 so, the flexibility to customize how and what you brew is key. From fresh grounds to K-Cup pods, the Hamilton Beach FlexBrew 2-Way Coffee Maker gives you the options to please fans of all types of coffees.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg",id:14,amount:1},{title:"Secura French",price:"36.48",description:"3-layered Stainless steel filter traps the smallest coffee grounds to produce an exceptional full-bodied flavor, filter is easy to disassemble and clean.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/61u76aiQQsL._AC_SL1000_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61XRMmXVwQL._AC_SL1500_.jpg",id:15,amount:1},{title:"Cafe Du Chateau",price:"32.95",description:"We use double stainless steel screen filters on a durable plunger supported by a spring loaded base plate to seal the edges, followed by a final top lid strainer to give you a pure brew with no grounds unlike other cheap presses.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81BdxpiRtCL._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/81luUhz7ZlL._AC_SL1500_.jpg",id:16,amount:1},{title:"LIVINGbasics  ",price:"37.99",description:'Brew with a single serve k-cup pod or ground coffee. Less than 14 cm (5.5") wide slim design, its the perfect size for any space.',avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/61PGHBLkl8L._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61KBB8K1wDL._AC_SL1000_.jpg",id:17,amount:1},{title:"Keurig K-Duo",price:"149.99",description:"Use both ground coffee and k-cup pods. Multiple brew sizes: brew an 8, 10, or 12-cup carafe and an 237, 296, or 355ml (8, 10, or 12 oz. ) cup ",avatarUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e0/Keurig_Logo.png",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61-KUPluVYL._AC_SL1500_.jpg",id:18,amount:1},{title:"KRUPS Electric",price:"19.99",description:"Large grinding capacity yields ground coffee for up to 12 cups of coffee",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81CbxNLCHCL._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/71FhMLBP9XL._AC_SL1500_.jpg",id:19,amount:1},{title:"Hamilton Beach",price:"89.99",description:"No two coffee drinkers are the same \u2013 so, the flexibility to customize how and what you brew is key. From fresh grounds to K-Cup pods, the Hamilton Beach FlexBrew 2-Way Coffee Maker gives you the options to please fans of all types of coffees.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg",id:20,amount:1},{title:"LIVINGbasics  ",price:"37.99",description:'Brew with a single serve k-cup pod or ground coffee. Less than 14 cm (5.5") wide slim design, its the perfect size for any space.',avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/61PGHBLkl8L._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61KBB8K1wDL._AC_SL1000_.jpg",id:21,amount:1},{title:"Keurig K-Duo",price:"149.99",description:"Use both ground coffee and k-cup pods. Multiple brew sizes: brew an 8, 10, or 12-cup carafe and an 237, 296, or 355ml (8, 10, or 12 oz. ) cup ",avatarUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e0/Keurig_Logo.png",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61-KUPluVYL._AC_SL1500_.jpg",id:22,amount:1},{title:"KRUPS Electric",price:"19.99",description:"Large grinding capacity yields ground coffee for up to 12 cups of coffee",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81CbxNLCHCL._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/71FhMLBP9XL._AC_SL1500_.jpg",id:23,amount:1},{title:"Hamilton Beach",price:"89.99",description:"No two coffee drinkers are the same \u2013 so, the flexibility to customize how and what you brew is key. From fresh grounds to K-Cup pods, the Hamilton Beach FlexBrew 2-Way Coffee Maker gives you the options to please fans of all types of coffees.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg",id:24,amount:1},{title:"Secura French",price:"36.48",description:"3-layered Stainless steel filter traps the smallest coffee grounds to produce an exceptional full-bodied flavor, filter is easy to disassemble and clean.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/61u76aiQQsL._AC_SL1000_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61XRMmXVwQL._AC_SL1500_.jpg",id:25,amount:1},{title:"Cafe Du Chateau",price:"32.95",description:"We use double stainless steel screen filters on a durable plunger supported by a spring loaded base plate to seal the edges, followed by a final top lid strainer to give you a pure brew with no grounds unlike other cheap presses.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81BdxpiRtCL._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/81luUhz7ZlL._AC_SL1500_.jpg",id:26,amount:1},{title:"LIVINGbasics  ",price:"37.99",description:'Brew with a single serve k-cup pod or ground coffee. Less than 14 cm (5.5") wide slim design, its the perfect size for any space.',avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/61PGHBLkl8L._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61KBB8K1wDL._AC_SL1000_.jpg",id:27,amount:1},{title:"KRUPS Electric",price:"19.99",description:"Large grinding capacity yields ground coffee for up to 12 cups of coffee",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81CbxNLCHCL._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/71FhMLBP9XL._AC_SL1500_.jpg",id:28,amount:1},{title:"Hamilton Beach",price:"89.99",description:"No two coffee drinkers are the same \u2013 so, the flexibility to customize how and what you brew is key. From fresh grounds to K-Cup pods, the Hamilton Beach FlexBrew 2-Way Coffee Maker gives you the options to please fans of all types of coffees.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg",id:29,amount:1},{title:"Secura French",price:"36.48",description:"3-layered Stainless steel filter traps the smallest coffee grounds to produce an exceptional full-bodied flavor, filter is easy to disassemble and clean.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/61u76aiQQsL._AC_SL1000_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61XRMmXVwQL._AC_SL1500_.jpg",id:30,amount:1},{title:"Cafe Du Chateau",price:"32.95",description:"We use double stainless steel screen filters on a durable plunger supported by a spring loaded base plate to seal the edges, followed by a final top lid strainer to give you a pure brew with no grounds unlike other cheap presses.",avatarUrl:"https://images-na.ssl-images-amazon.com/images/I/81BdxpiRtCL._AC_SL1500_.jpg",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/81luUhz7ZlL._AC_SL1500_.jpg",id:31,amount:1}],ge=Object(d.a)((function(e){return{paginator:{display:"flex",justifyContent:"center",marginTop:"25px"}}})),pe=function(){var e=ge(),a=Object(b.c)(),t=Object(b.d)((function(e){return e.goods})),o=t.goodItems,n=t.lang,r=Object(s.useState)(0),m=Object(l.a)(r,2),c=m[0],g=m[1],p=Object(s.useMemo)((function(){return"en"===n?ee:ce}),[n]),u=Math.ceil(c/5),d=function(e,a){var t=(e-1)*a,s=e*a;return p.slice(t,s)};Object(s.useEffect)((function(){g(p.length),a(re(d(1,5)))}),[a]);var f=Object(s.useCallback)((function(e,t){return a(re(d(t,5)))}),[a]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(oe,{cards:o}),i.a.createElement(me.a,{className:e.paginator,count:u,color:"secondary",onChange:f}))},ue=Object(d.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),de=function(){var e=Object(b.d)((function(e){return e.basket.goodsInBasket})),a=ue(),t=Object(r.f)(),s=Object(I.a)(),o=Object(l.a)(s,2),n=o[0],m=o[1].language||window.localStorage.i18nextLng,c=function(e,a){return e+a},g=e.map((function(e){return e.amount*e.price})).reduce(c,0).toFixed(2),p=e.map((function(e){return e.amount})).reduce(c,0),d=(90*g).toFixed(2)+" \u20bd";return i.a.createElement("div",{className:a.root},i.a.createElement(u.a,{container:!0,spacing:3},i.a.createElement(u.a,{item:!0,xs:12},i.a.createElement(h.a,{className:a.paper},i.a.createElement(_.a,{variant:"h6",component:"h6"},n("TotalGoods"),": ",p," ",n("OnTheSum"),": ","ru"===m?d:g+" \u20ac"),i.a.createElement(L.a,{disabled:0===e.length,variant:"contained",color:"secondary",onClick:function(){return t.push(K.order)}},n("Order"))))))},fe=function(){var e=Object(b.d)((function(e){return e.basket})).goodsInBasket;return i.a.createElement(i.a.Fragment,null,i.a.createElement(oe,{cards:e}),i.a.createElement(de,null))},he=t(353),_e=t(354),Le=t(357),be=t(167),Ce=t.n(be),je=t(305),we=t(38),ye=t(356),Se=t(355),ze=t(361),Ie=Object(je.a)({toolBarContainer:{justifyContent:"space-between"},basketIcon:{color:"white"},headerTitle:{color:"white",textDecoration:"none"},languageButton:{color:"white"}}),Ue=function(){var e=Object(b.d)((function(e){return e.basket})).goodsInBasket.length,a=Ie(),t=Object(b.c)(),o=Object(I.a)(),n=Object(l.a)(o,2),r=n[0],m=n[1],c=Object(s.useCallback)((function(e){return function(){m.changeLanguage(e),t(function(e){return function(a){a(function(e){return{type:"goods/SET_LANG",lang:e}}(e))}}(e))}}),[t]);return i.a.createElement(he.a,{position:"static",color:"primary"},i.a.createElement(_e.a,{className:a.toolBarContainer},i.a.createElement(_.a,{variant:"h6"},i.a.createElement(we.b,{to:K.goods,className:a.headerTitle},r("HeaderTitle"))),i.a.createElement(ze.a,null,i.a.createElement(Se.a,{"aria-label":"text primary button group",variant:"text"},i.a.createElement(L.a,{className:a.languageButton,onClick:c("en")},"EN"),i.a.createElement(L.a,{className:a.languageButton,onClick:c("ru")},"RU")),i.a.createElement(ye.a,{href:K.basket},i.a.createElement(Le.a,{badgeContent:e<=9?e:"9+",color:"secondary"},i.a.createElement(Ce.a,{className:a.basketIcon}))))))},ve=Object(d.a)((function(e){return{appContent:{padding:e.spacing(2.4,5,0,5)}}}));var ke=function(){var e=ve();return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.Suspense,{fallback:i.a.createElement(P.a,{color:"secondary"})},i.a.createElement(Ue,null),i.a.createElement("div",{className:e.appContent},i.a.createElement(r.c,null,i.a.createElement(r.a,{exact:!0,path:"/",component:pe}),i.a.createElement(r.a,{path:"/basket",component:fe}),i.a.createElement(r.a,{path:"/order",component:F}),i.a.createElement(r.a,{path:"*",render:function(){return i.a.createElement("div",null,"404 Not Found")}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ae=t(358),Be=t(174),Ee=Object(Be.a)({}),Oe=t(12),xe=t(168),Ke=t(365),Fe=Object(Oe.c)({basket:z,goods:le,form:Ke.a}),Ne=t(126),Pe=t(169),Me=t.n(Pe),De=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Oe.d,He={key:"root",storage:Me.a},Re=Object(Ne.a)(He,Fe),Xe=Object(Oe.e)(Re,De(Object(Oe.a)(xe.a))),Ge=Object(Ne.b)(Xe),Te=Xe,Qe=t(170),Ve=t(74),We=t(171),Ze=t(173);ae.a.use(We.a).use(Ze.a).use(Ve.e).init({fallbackLng:"en",debug:!1,whitelist:["en","ru"],interpolation:{escapeValue:!1}});ae.a;n.a.render(i.a.createElement(we.a,null,i.a.createElement(b.a,{store:Te},i.a.createElement(Qe.a,{loading:null,persistor:Ge},i.a.createElement(Ae.a,{theme:Ee},i.a.createElement(ke,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[189,1,2]]]);
//# sourceMappingURL=main.43b36d75.chunk.js.map