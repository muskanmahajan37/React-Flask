(this["webpackJsonphoc-site"]=this["webpackJsonphoc-site"]||[]).push([[0],{45:function(e,t,a){},64:function(e,t,a){e.exports=a(82)},69:function(e,t,a){},74:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),o=(a(69),a(15)),i=a(10),m=a(111),u=a(115),s=a(120),E=(a(45),function(){return r.a.createElement("body",null,r.a.createElement(m.a,null,r.a.createElement(u.a,{row:!0},r.a.createElement(u.a,{item:!0,lg:12},r.a.createElement("div",{class:"content"},r.a.createElement("h1",null,"Code Capture"),r.a.createElement("h3",null,"From pen and paper to editor and compiler!"),r.a.createElement("hr",null),r.a.createElement(o.b,{to:"/instructions"},r.a.createElement(s.a,{variant:"contained",color:"secondary"},"Get Started!")))))))}),d=a(116),h=a(117),p=(a(74),Object(d.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},input:{display:"none"}}})));function f(){var e=p();return r.a.createElement(m.a,null,r.a.createElement("br",null),r.a.createElement(h.a,{variant:"h2",align:"center"},"Instructions for the activity"),r.a.createElement(u.a,{row:!0,justify:"center",alignItems:"center"},r.a.createElement(u.a,{item:!0,sm:12},r.a.createElement("iframe",{title:"ppt",src:"https://onedrive.live.com/embed?cid=703B19A0781C4859&resid=703B19A0781C4859%21148&authkey=AHvfQz-RUmtl0Co&em=2&wdAr=1.7777777777777777",frameborder:"0"},"This is an embedded",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://office.com"},"Microsoft Office"),"presentation, powered by",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://office.com/webapps"},"Office"),".")),r.a.createElement(u.a,{item:!0,justify:"flex-end",align:"right"},r.a.createElement("div",{className:e.root},r.a.createElement(o.b,{to:"/upload"},r.a.createElement(s.a,{variant:"contained",color:"secondary",component:"span"},"Continue"))))),r.a.createElement("br",null))}var v=a(53),b=a(54),g=a(37),y=a(58),w=a(57),C=function(e){Object(y.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).state={file:null},n.handleChange=n.handleChange.bind(Object(g.a)(n)),n}return Object(b.a)(a,[{key:"handleChange",value:function(e){this.setState({file:URL.createObjectURL(e.target.files[0])})}},{key:"render",value:function(){return r.a.createElement(m.a,{maxWidth:"sm"},r.a.createElement("br",null),r.a.createElement(h.a,{component:"h1",variant:"h2",align:"center",gutterBottom:!0},"Upload code image"),r.a.createElement("div",null,r.a.createElement(u.a,{container:!0,spacing:2,justify:"center"},r.a.createElement(u.a,{item:!0},r.a.createElement("input",{type:"file",style:{display:"none"},accept:"image/*",id:"contained-button-file",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"contained-button-file"},r.a.createElement(s.a,{variant:"contained",color:"secondary",component:"span"},"Capture"))),r.a.createElement(u.a,{item:!0},r.a.createElement(o.b,{to:"/edit"},this.state.file?r.a.createElement(s.a,{variant:"contained",color:"secondary",component:"span"},"Continue to editor"):r.a.createElement(s.a,{variant:"contained",disabled:!0,color:"secondary",component:"span"},"Continue to editor"))))),r.a.createElement("br",null),r.a.createElement(h.a,{variant:"h6",align:"center"},"Image preview"),r.a.createElement("hr",null),r.a.createElement(u.a,{row:!0,justify:"center",alignItems:"center"},r.a.createElement(u.a,{item:!0,align:"center"},r.a.createElement("img",{alt:"",src:this.state.file,height:"50%",width:"50%"}))))}}]),a}(r.a.Component),j=a(55),O=a.n(j);a(80),a(81);function k(e){console.log("change",e)}var x=function(){return r.a.createElement(O.a,{placeholder:"Placeholder Text",mode:"javascript",theme:"monokai",name:"blah2",onChange:k,width:"100%",fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,value:'console.log("Hello world!")',setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2}})},I=a(56),S=a(119);function N(){var e=r.a.useState(""),t=Object(I.a)(e,2),a=t[0],n=t[1];return r.a.createElement(u.a,{item:!0},r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement(S.a,{id:"outlined-multiline-flexible ",label:"STDIN",multiline:!0,color:"secondary",fullWidth:!0,rowsMax:4,value:a,onChange:function(e){n(e.target.value)},variant:"filled",helperText:"Standard input"})))}var A=Object(d.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},input:{display:"none"}}}));var T=function(){var e=A();return r.a.createElement(m.a,null,r.a.createElement("br",null),r.a.createElement(h.a,{variant:"h2",align:"center"},"Your Code"),r.a.createElement("br",null),r.a.createElement(u.a,{row:!0,justify:"center",alignItems:"center"},r.a.createElement(u.a,{item:!0},r.a.createElement(x,null))),r.a.createElement("br",null),r.a.createElement(N,null),r.a.createElement(u.a,{row:!0},r.a.createElement(u.a,{item:!0,justify:"flex-end",align:"right"},r.a.createElement("div",{className:e.root},r.a.createElement(o.b,{to:"/out"},r.a.createElement(s.a,{variant:"contained",color:"secondary",component:"span"},"Show output"))))),r.a.createElement("br",null))},B=a(118),W=Object(d.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},paper:{padding:"6px 16px"},secondaryTail:{backgroundColor:e.palette.secondary.main}}}));var H=function(){var e=W();return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement("br",null),r.a.createElement(h.a,{variant:"h2",align:"center"},"Output"),r.a.createElement("br",null),r.a.createElement(u.a,{row:!0,justify:"center",alignItems:"center"},r.a.createElement(u.a,{item:!0},r.a.createElement(B.a,{elevation:3,className:e.paper},r.a.createElement(h.a,{variant:"h5",component:"h1"},"Code"),r.a.createElement(h.a,{variant:"body1"},'console.log("Hello World!")'))),r.a.createElement("br",null),r.a.createElement(u.a,{item:!0},r.a.createElement(B.a,{elevation:3,className:e.paper},r.a.createElement(h.a,{variant:"h5",component:"h1"},"Input"),r.a.createElement(h.a,{variant:"body1"},"/* input here */"))),r.a.createElement("br",null),r.a.createElement(u.a,{item:!0},r.a.createElement(B.a,{elevation:3,className:e.paper},r.a.createElement(h.a,{variant:"h5",component:"h1"},"Output"),r.a.createElement(h.a,{variant:"body1"},"Hello World!"))),r.a.createElement("br",null),r.a.createElement(u.a,{item:!0,justify:"flex-end",align:"right"},r.a.createElement("div",{className:e.root},r.a.createElement(o.b,{to:"/done"},r.a.createElement(s.a,{variant:"contained",color:"secondary",component:"span"},"Finish"))))),r.a.createElement("br",null)))},L=function(){return r.a.createElement("body",null,r.a.createElement(m.a,null,r.a.createElement(u.a,{row:!0},r.a.createElement(u.a,{item:!0,lg:12},r.a.createElement("div",{class:"content"},r.a.createElement("h2",null," Thank you for using Code Capture! "),r.a.createElement("h3",null,"If you have the time, please fill put a short feedback of the platform!\n\n                Then please head over to the HoC site to collect your certificate."),r.a.createElement("hr",null),r.a.createElement(s.a,{variant:"contained",color:"secondary"},"Give Feedback"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(s.a,{variant:"contained",color:"secondary"},"Collect your certificate!"))))))};var F=function(){return r.a.createElement(o.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/edit"},r.a.createElement(T,null)),r.a.createElement(i.a,{path:"/instructions"},r.a.createElement(f,null)),r.a.createElement(i.a,{path:"/upload"},r.a.createElement(C,null)),r.a.createElement(i.a,{path:"/out"},r.a.createElement(H,null)),r.a.createElement(i.a,{path:"/done"},r.a.createElement(L,null)),r.a.createElement(i.a,{path:"/"},r.a.createElement(E,null))))};var M=function(){return r.a.createElement(F,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.fc4602e4.chunk.js.map