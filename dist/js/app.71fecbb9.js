(function(){"use strict";var e={3880:function(e,t,a){var s=a(9242),i=a(3396),l=a(7139),r=a(4870);const o={class:"text-white bg-greenv font-bold text-md px-4 py-2.5 text-center hover:bg-[#24993F] hover:shadow-lg transition duration-300 ease-in-out"};var n={__name:"BaseButton",props:["text"],setup(e){return(t,a)=>((0,i.wg)(),(0,i.iD)("button",o,(0,l.zw)(e.text),1))}};const c=n;var d=c,m={__name:"SecondaryButton",props:["text"],setup(e){return(t,a)=>((0,i.wg)(),(0,i.iD)("button",null,(0,l.zw)(e.text),1))}},p=a(89);const u=(0,p.Z)(m,[["__scopeId","data-v-1d968a1b"]]);var g=u;const v={class:"flex items-end justify-around mx-8 md:gap-8 md:flex-row-reverse"},h=(0,i._)("div",{class:"md:w-[500px]"},[(0,i._)("img",{src:"img/profile2.png",alt:"",class:"absolute opacity-25 right-4 top-40 h-1/3 md:relative md:block md:mt-16 md:top-0 md:right-0 md:opacity-100 sepia dark:sepia-0 dark:grayscale"})],-1),f={class:"text-white md:w-5/12 md:text-black md:mt-28 dark:text-grayl"},x=(0,i.uE)('<h1 class="pb-1 text-xl font-bold">Hi There,</h1><h3 class="pb-1 text-3xl font-bold">I&#39;m Viktoria Bors-Pajuste</h3><ul class="pb-4"><li class="text-lg font-bold tracking-wide">Software Developer</li><li>Geologist and Environmental Engineer</li><li>Chemist and Lab Technician</li><li>Wife and Mom</li></ul><p class="pb-2 text-base text-justify">What does a highly educated person do when they&#39;re tired of listening to Baby Gaga and playing peek-a-boo?</p><p class="pb-2 text-base text-left">She fall in love with web development, it&#39;s the ultimate cure for Gaga fatigue and peek-a-boo overload.</p><p class="text-lg text-left">I am a self-taught/bootcamper web developer, focused on frontend technologies.</p>',6),b={class:"flex items-center gap-2 mt-8 sm:inline-block md:flex-row"},w={href:"#contact"};var y={__name:"HomeSection",setup(e){return(e,t)=>((0,i.wg)(),(0,i.iD)("div",v,[h,(0,i._)("div",f,[x,(0,i._)("div",b,[(0,i._)("a",w,[(0,i.Wm)(g,{text:"contact me",class:"w-32 ml-4 bg-white"})])])])]))}};const k=y;var _=k;var S=a.p+"img/soil.2114e730.svg",j=a.p+"img/water.9187c9e5.svg";const D=e=>((0,i.dD)("data-v-3a44e790"),e=e(),(0,i.Cn)(),e),C=D((()=>(0,i._)("div",{class:"flex flex-col items-center order-1 ml-1 md:ml-2"},[(0,i._)("img",{src:"img/logoNoBg.gif",width:"100",class:"",alt:"lab glass connecting to web"}),(0,i._)("p",{class:"text-xs font-bold leading-tight uppercase md:ml-4"},"From Lab to Web")],-1))),I={class:"relative order-2 mb-4 mr-2 md:order-3"},A={for:"toggle",class:"text-xl bg-white -top-3 md:absolute right-5 text-blackDark dark:bg-blackDark dark:text-grayl"},W=["src"],M=D((()=>(0,i._)("div",{class:"hamburger-inner"},null,-1))),H=[M],q={key:1,class:"flex flex-row flex-wrap justify-center order-2 max-w-sm gap-6 rounded-full lg:flex-nowrap lg:max-w-none text-md lg:text-lg"},B=(0,i.uE)('<a class="" href="#home" data-v-3a44e790>.home</a><a class="" href="#skills" data-v-3a44e790>.skills</a><a class="" href="#about" data-v-3a44e790>.who am i</a><a class="" href="#experiences" data-v-3a44e790>.experiences</a><a class="" href="#projects" data-v-3a44e790>.projects</a><a class="" href="#blog" data-v-3a44e790>.blog</a><a class="" href="#education" data-v-3a44e790>.education</a><a class="mr-4" href="#contact" data-v-3a44e790>.contact me</a>',8),T=[B],L={key:0,class:"fixed right-0 z-50 w-1/2 text-black"},F={class:"flex flex-col h-screen p-2 overflow-auto text-xl bg-white"};var z={__name:"TopNavBar",setup(e){let t=(0,r.iH)(!1),a=(0,r.iH)(null),o=(0,r.iH)(null);o.value=window.innerWidth,window.addEventListener("scroll",(()=>{a.value=window.scrollY})),window.addEventListener("resize",(()=>{o.value=window.innerWidth,o.value>=800&&(t.value=!1,document.querySelector("html").classList.contains("dark")?document.querySelector("#home").style.background="linear-gradient(110deg, #00161B 55%, #F0F0F0 45%)":document.querySelector("html").classList.contains("dark")||(document.querySelector("#home").style.background="linear-gradient(110deg, #FFFFFF 55%, #7D5A4B 45%)")),o.value<800&&(document.querySelector("html").classList.contains("dark")?document.querySelector("#home").style.background="#00161B":document.querySelector("html").classList.contains("dark")||(document.querySelector("#home").style.background="#7D5A4B"))}));let n=(0,r.iH)(!1),c=(0,r.iH)(!1);(0,i.bv)((()=>{"true"===localStorage.getItem("darkMode")&&(n.value=!0,document.querySelector("html").classList.add("dark"),window.matchMedia("(min-width: 800px)").matches?document.querySelector("#home").style.background="linear-gradient(110deg, #00161B 55%, #F0F0F0 45%)":document.querySelector("#home").style.background="#00161B")}));const d=()=>{switch(c.value=!c.value,localStorage.getItem("darkMode")){case null:n.value=!0;break;case"true":n.value=!1;break;case"false":n.value=!0;break}localStorage.setItem("darkMode",n.value),document.querySelector("html").classList.contains("dark")?(document.querySelector("html").classList.remove("dark"),window.matchMedia("(min-width: 800px)").matches?document.querySelector("#home").style.background="linear-gradient(110deg, #FFFFFF 55%, #7D5A4B 45%)":document.querySelector("#home").style.background="#7D5A4B"):(document.querySelector("html").classList.add("dark"),window.matchMedia("(min-width: 800px)").matches?document.querySelector("#home").style.background="linear-gradient(110deg, #00161B 55%, #F0F0F0 45%)":document.querySelector("#home").style.background="#00161B")};return(e,c)=>((0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",{id:"topMenu",class:(0,l.C_)([(0,r.SU)(a)>50&&(0,r.SU)(o)>800||(0,r.SU)(o)<800?["w-full mx-0"]:["w-11/12 rounded-full mx-auto"],"sticky top-0 flex items-center justify-between h-24 bg-white shadow-md"])},[C,(0,i._)("div",I,[(0,i._)("input",{type:"checkbox",id:"toggle",onClick:d,class:"md:absolute -top-3 right-5"}),(0,i._)("label",A,[(0,i._)("img",{src:(0,r.SU)(n)?(0,r.SU)(S):(0,r.SU)(j),class:(0,l.C_)([(0,r.SU)(n)?"rotate-180":"","p-1"])},null,10,W)])]),(0,r.SU)(o)<800?((0,i.wg)(),(0,i.iD)("div",{key:0,class:(0,l.C_)(["order-3 mr-6 hamburger",[{open:(0,r.SU)(t)}]]),onClick:c[0]||(c[0]=e=>(0,r.dq)(t)?t.value=!(0,r.SU)(t):t=!(0,r.SU)(t))},H,2)):(0,i.kq)("",!0),(0,r.SU)(o)>=800?((0,i.wg)(),(0,i.iD)("nav",q,T)):(0,i.kq)("",!0)],2),(0,i.Wm)(s.uT,{name:"bounce"},{default:(0,i.w5)((()=>[(0,r.SU)(t)?((0,i.wg)(),(0,i.iD)("div",L,[(0,i._)("nav",F,[(0,i._)("a",{onClick:c[1]||(c[1]=e=>(0,r.dq)(t)?t.value=!1:t=!1),class:"p-2 my-1 sm:p-5",href:"#"},".home"),(0,i._)("a",{onClick:c[2]||(c[2]=e=>(0,r.dq)(t)?t.value=!1:t=!1),class:"p-2 my-1 sm:p-5",href:"#skills"},".skills"),(0,i._)("a",{onClick:c[3]||(c[3]=e=>(0,r.dq)(t)?t.value=!1:t=!1),class:"p-2 my-1 sm:p-5",href:"#about"},".who am i"),(0,i._)("a",{onClick:c[4]||(c[4]=e=>(0,r.dq)(t)?t.value=!1:t=!1),class:"p-2 my-1 sm:p-5",href:"#experiences"},".experiences"),(0,i._)("a",{onClick:c[5]||(c[5]=e=>(0,r.dq)(t)?t.value=!1:t=!1),class:"p-2 my-1 sm:p-5",href:"#projects"},".projects"),(0,i._)("a",{onClick:c[6]||(c[6]=e=>(0,r.dq)(t)?t.value=!1:t=!1),class:"p-2 my-1 sm:p-5",href:"#blog"},".blog"),(0,i._)("a",{onClick:c[7]||(c[7]=e=>(0,r.dq)(t)?t.value=!1:t=!1),class:"p-2 my-1 sm:p-5",href:"#education"},".education"),(0,i._)("a",{onClick:c[8]||(c[8]=e=>(0,r.dq)(t)?t.value=!1:t=!1),class:"p-2 my-1 sm:p-5",href:"#contact"},".contact me")])])):(0,i.kq)("",!0)])),_:1})],64))}};const U=(0,p.Z)(z,[["__scopeId","data-v-3a44e790"]]);var J=U;const P={class:"w-11/12 p-2 mx-auto"},E={key:0,class:"relative flex flex-col items-center justify-center xl:flex-row"},O={class:"relative xl:order-1"},Y=["src"],N=["src","alt"],G={class:"w-full p-4 dark:shadow-lg bg-grayl lg:rounded-lg dark:bg-cardDark dark:text-grayl"},V={class:"flex flex-col justify-around p-6 h-72 sm:h-52"},Q={class:"pb-2 font-bold text-center"},R={key:1,class:"flex flex-col items-center justify-center"},Z={class:"relative"},X=["src","alt"],K={class:"flex flex-col justify-around w-10/12 p-4 text-base bg-white rounded-b-lg dark:bg-cardDark dark:text-grayl dark:shadow-lg"},$={class:"font-bold text-center"},ee={class:"text-justify"};var te={__name:"ImgSlider",emits:["openModal"],setup(e,{emit:t}){const a=()=>{t("openModal",d().src)};let s=[{id:1,src:"../img/geo.jpg",head:"Down To Earth",desc:"I'm all about Mother Nature, baby. I've been through some wild stuff - camping trips, field work, you name it. But nothing beats a good hike or chillin' in the lab peeping through a microscope. Basically, I'm a rugged environmentalist.",class:"rotate-2",altText:"me front of a geological site"},{id:2,src:"./img/it.jpg",head:"IT works...Why?",desc:"IT's a mystery, ain't it? As a developer, I'm always asking why? Why isn't this working? Why is it working? You get the idea. Sometimes a cold brew and some chips help me figure it out, but other times it's just a mystery",class:"rotate-3",altText:"learning hard with beer and chips"},{id:3,src:"./img/family.jpg",head:"The girl has many names",desc:"I wear many hats - wife, mom, friend, student, employee, chef. You name it, I do it. I'm a multitasking pro, juggling all my roles like a boss.",class:"rotate-6",altText:"me and my boys-family time"},{id:4,src:"./img/pol.jpg",head:"Career plan C? - Poledance",desc:"No, seriously... Don't underestimate it, it's a workout. I was doing it for a couple of years before I got pregnant and even took home a trophy. (No, seriously).",class:"-rotate-6",altText:"me performing poledance"}],o=(0,r.iH)(0);const n=()=>{o.value=o.value+1,o.value>=s.length&&(o.value=0)},c=()=>{o.value=o.value-1,o.value<=-1&&(o.value=3)},d=()=>s[o.value];let m=(0,r.iH)(null);return m.value=window.innerWidth,window.addEventListener("resize",(()=>{m.value=window.innerWidth})),(e,t)=>((0,i.wg)(),(0,i.iD)("div",P,[(0,r.SU)(m)>=800?((0,i.wg)(),(0,i.iD)("div",E,[(0,i._)("div",O,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,r.SU)(s),(e=>((0,i.wg)(),(0,i.iD)("img",{key:e.id,src:e.src,class:(0,l.C_)(["absolute max-w-2xl max-h-96 grayscale",e.class])},null,10,Y)))),128)),((0,i.wg)(),(0,i.iD)("img",{src:d().src,key:d().id,alt:d().altText,class:(0,l.C_)(["relative order-1 max-w-2xl cursor-pointer max-h-96 bounce-in dark:grayscale",d().class]),onClick:a},null,10,N))]),(0,i._)("div",G,[(0,i._)("div",V,[(0,i._)("p",Q,(0,l.zw)(d().head),1),(0,i._)("p",null,(0,l.zw)(d().desc),1)])]),(0,i._)("span",{class:"absolute inset-y-0 left-0 flex text-4xl font-bold cursor-pointer text-grayl md:mt-28 md:ml-8 xl:-ml-8 xl:mt-0 xl:justify-center xl:items-center",onClick:c},"❮"),(0,i._)("span",{class:"absolute inset-y-0 right-0 flex text-4xl font-bold cursor-pointer text-grayl md:mt-28 md:mr-8 xl:-mr-6 xl:mt-0 xl:justify-center xl:items-center",onClick:n},"❯")])):(0,i.kq)("",!0),(0,r.SU)(m)<800?((0,i.wg)(),(0,i.iD)("div",R,[(0,i._)("div",Z,[(0,i._)("img",{src:d().src,alt:d().altText,class:"w-full max-w-xl px-2 mx-auto max-h-96 dark:grayscale",onClick:a},null,8,X),(0,i._)("span",{class:"absolute inset-y-0 left-0 flex items-center justify-center p-4 text-4xl font-bold text-white cursor-pointer",onClick:c},"❮"),(0,i._)("span",{class:"absolute inset-y-0 right-0 flex items-center justify-center p-4 text-4xl font-bold text-white cursor-pointer",onClick:n},"❯")]),(0,i._)("div",K,[(0,i._)("p",$,(0,l.zw)(d().head),1),(0,i._)("p",ee,(0,l.zw)(d().desc),1)])])):(0,i.kq)("",!0)]))}};const ae=te;var se=ae;const ie={class:"inline font-semibold text-blue"};var le={__name:"ReadMoreButton",props:["isActive"],setup(e){return(t,a)=>((0,i.wg)(),(0,i.iD)("button",ie,(0,l.zw)(e.isActive?"read less":"read more"),1))}};const re=le;var oe=re,ne=a(1123),ce=a.n(ne),de={__name:"TiltBase",setup(e){const t=(0,r.iH)(null);let a=(0,r.iH)(null);return a.value=window.innerWidth,(0,i.bv)((()=>{a.value>800?ce().init(t.value,{reverse:!1,max:3,startX:0,startY:0,perspective:1e3,scale:1,speed:700,transition:!0,axis:null,reset:!0,"reset-to-start":!0,easing:"cubic-bezier(.03,.98,.52,.99)",glare:!1,"max-glare":1,"glare-prerender":!1,"mouse-event-element":null,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45}):ce().init(t.value,{max:0})})),window.addEventListener("resize",(()=>{a.value=window.innerWidth,a.value>800?ce().init(t.value,{reverse:!1,max:3,startX:0,startY:0,perspective:1e3,scale:1,speed:700,transition:!0,axis:null,reset:!0,"reset-to-start":!0,easing:"cubic-bezier(.03,.98,.52,.99)",glare:!1,"max-glare":1,"glare-prerender":!1,"mouse-event-element":null,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45}):ce().init(t.value,{max:0})})),(e,a)=>((0,i.wg)(),(0,i.iD)("div",{id:"tilt",ref_key:"tilt",ref:t},[(0,i.WI)(e.$slots,"default")],512))}};const me=de;var pe=me;const ue={class:"grid grid-cols-1 my-2 sm:px-4 justify-items-center md:flex md:flex-row"},ge={class:"max-w-xs shadow-lg lg:max-w-sm rounded-xl dark:bg-cardDark"},ve=["src"],he={class:"p-6 border-t-2 border-t-greenv"},fe={class:"text-xl font-medium text-gray-900"},xe={class:"text-lg italic font-medium text-gray-900"},be={class:"mb-2 text-sm italic text-gray-900"},we={class:"mb-4 text-base text-justify text-gray-700"},ye={key:1},ke={key:2};var _e={__name:"ExpCard",setup(e){let t=[{id:0,isActive:(0,r.iH)(!1),title:"Junior Developer",date:"2022.September - 2023.May",desc:"Formula 400 Ltd, a Hungarian company specializing in building web and software solutions for the insurance industry. Currently, I am working with a team to develop a web application that allows users to compare different insurance policies and purchase them online. I have been exposed to various tasks that vary in complexity and scope, such as minor UI improvements, keeping the product descriptions up-to-date, implementation of new products both on the backend and on the GUI, troubleshooting and fixing bugs identified by testers. The application written in NuxtJs and VueJs.",img:"img/formula400.jpg",skills:"JavaScript, Vue Js, Node Js"},{id:1,isActive:(0,r.iH)(!1),title:"Software Developer",date:"2023.June - Now",desc:"Solid Software Development is tasked with the development of administrative systems and stand-alone applications. In my role, I take charge of the management and enhancement of PharmaFakt, a veterinary pharmacy administration system. This has involved the successful implementation of web application data loading for both veterinary hospital orders and prescriptions. I also upgraded the Firebird database from version 1.5 to 4.0, significantly boosting application speed. Furthermore, I led the process of transitioning the code base from Borland Delphi 2005 to Delphi 11 Alexandria.",img:"img/ssd_logo.png",skills:"Delphi, Firebird database, Software development"}];(0,r.iH)(!1);const a=e=>t[e].isActive.value=!t[e].isActive.value;return(e,o)=>((0,i.wg)(),(0,i.iD)("div",ue,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,r.SU)(t),(e=>((0,i.wg)(),(0,i.j4)(pe,{class:"m-3",key:e.id},{default:(0,i.w5)((()=>[(0,i._)("div",ge,[(0,i._)("img",{class:"max-w-xs p-4 lg:max-w-sm rounded-t-xl dark:grayscale",src:e.img,alt:""},null,8,ve),(0,i._)("div",he,[(0,i._)("h5",fe,(0,l.zw)(e.title),1),(0,i._)("h5",xe,(0,l.zw)(e.date),1),(0,i._)("p",be,(0,l.zw)(e.skills),1),(0,i._)("p",we,[((0,i.wg)(),(0,i.iD)("span",ye,(0,l.zw)(e.isActive.value?e.desc.slice(0,150):e.desc.slice(0,150)+"..."),1)),(0,i.Wm)(s.uT,{name:"fade"},{default:(0,i.w5)((()=>[e.isActive.value?((0,i.wg)(),(0,i.iD)("span",ke,(0,l.zw)(e.desc.slice(150)),1)):(0,i.kq)("",!0)])),_:2},1024)]),(0,i.Wm)(oe,{class:"",type:"button",onClick:t=>a(e.id),isActive:e.isActive.value},null,8,["onClick","isActive"])])])])),_:2},1024)))),128))]))}};const Se=(0,p.Z)(_e,[["__scopeId","data-v-6057073a"]]);var je=Se;const De={class:"flex flex-col items-center justify-around gap-4 py-4 mx-auto md:flex-row"},Ce=["src"],Ie={class:"p-4"},Ae={class:"text-xl font-medium text-gray-900"},We={class:"text-lg italic font-medium text-gray-900"},Me={class:"mb-2 text-sm italic text-gray-900 md:text-base"},He={class:"text-base text-gray-700"},qe={key:1},Be={key:2};var Te={__name:"EdCard",setup(e){let t=[{id:0,isActive:(0,r.iH)(!1),title:"Environmental Engineering / Geology",date:"Master Degree",desc:"I studied Environmental Engineering with a focus on soil, groundwater, drinking water pollution and wastewater treatment. My geology education gave me a strong foundation in geology and the ability to solve geological problems.",img:"img/eotvos2.jpg",skills:"Aalborg University and Eotvos Lorand University"},{id:1,isActive:(0,r.iH)(!1),title:"IT Support Specialist",date:"2022. July - 2022. September",desc:"I went through a Google certified IT-Support Specialist program that helped me to gain a deeper understanding of different network protocols, Linux command lines, Windows operating systems, and system administration.",img:"img/greenfox.jpg",skills:"Network protocols, Op.systems, system administration"},{id:2,isActive:(0,r.iH)(!1),title:"Full Stack Developer",date:"2022.January - Now",desc:"I completed a part-time bootcamp, where I aced the frontend module with 98% and JavaScript module with 100% on written exams. All my projects got top grades. I'm currently working on the backend module (PHP, MySQL) and hope to finish it by March. After that, I'll have a solid understanding and insight into backend development as well.",img:"img/prooktatas.jpg",skills:"HTML, CSS, JavaScript, Node Js, PHP, MongoDb, MySQL"},{id:3,isActive:(0,r.iH)(!1),title:"C# (Software) Developer",date:"2023.April - 2024.January",desc:"This comprehensive C# bootcamp covers all aspects of C# programming, including its various applications. Starting with a structured introduction to the basics and Object-Oriented Programming (OOP) concepts, the course proceeds to explore Windows applications using WinForms and .NET GUI, SQL fundamentals, database connectivity, as well as web and mobile applications.",img:"img/prooktatas.jpg",skills:"C# basics, OOP, SQL, WinForms, .Net, Asp.Net, Xamarin"}];(0,r.iH)(!1);const a=e=>t[e].isActive.value=!t[e].isActive.value;return(e,o)=>((0,i.wg)(),(0,i.iD)("div",De,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,r.SU)(t),(e=>((0,i.wg)(),(0,i.j4)(pe,{key:e.id,class:"max-w-sm m-2 bg-white shadow-lg rounded-xl dark:bg-cardDark dark:text-grayl dark:shadow-lg"},{default:(0,i.w5)((()=>[(0,i._)("img",{src:e.img,alt:"",class:"mx-auto rounded-t-lg dark:grayscale"},null,8,Ce),(0,i._)("div",Ie,[(0,i._)("h5",Ae,(0,l.zw)(e.title),1),(0,i._)("h5",We,(0,l.zw)(e.date),1),(0,i._)("p",Me,(0,l.zw)(e.skills),1),(0,i._)("p",He,[((0,i.wg)(),(0,i.iD)("span",qe,(0,l.zw)(e.isActive.value?e.desc.slice(0,150):e.desc.slice(0,150)+"..."),1)),(0,i.Wm)(s.uT,{name:"fade"},{default:(0,i.w5)((()=>[e.isActive.value?((0,i.wg)(),(0,i.iD)("span",Be,(0,l.zw)(e.desc.slice(150)),1)):(0,i.kq)("",!0)])),_:2},1024)]),(0,i.Wm)(oe,{class:"",type:"button",onClick:t=>a(e.id),isActive:e.isActive.value},null,8,["onClick","isActive"])])])),_:2},1024)))),128))]))}};const Le=(0,p.Z)(Te,[["__scopeId","data-v-33cc9318"]]);var Fe=Le;const ze=e=>((0,i.dD)("data-v-1ca5c60e"),e=e(),(0,i.Cn)(),e),Ue={class:"flex flex-wrap justify-center gap-4 py-4 mx-auto"},Je={class:"p-4"},Pe=ze((()=>(0,i._)("img",{src:"/img/ocean.png",class:"h-6 mx-auto -mt-7",alt:""},null,-1))),Ee={class:"pt-4 text-xl font-medium text-gray-900"},Oe={class:"mt-3 text-base text-gray-700"},Ye=["href"],Ne=ze((()=>(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"{1.5}",stroke:"currentColor",class:"w-6 h-6 mt-2"},[(0,i._)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"})],-1)));var Ge={__name:"BlogCard",setup(e){let t=[{id:0,title:"Why I Decided to Invest in My Portfolio as a Junior Developer",class:"sm:rotate-3",desc:"As a junior developer, it's easy to overlook the importance of investing in your portfolio. Standing out in the tech industry is crucial to success. A good portfolio can help you do just that by showcasing your unique skills, experiences, and personal development.",img:"img/portfolio.jpg",link:"https://dev.to/viktoriabors/why-i-decided-to-invest-in-my-portfolio-as-a-junior-developer-428p"},{id:1,title:"From Lost to Confident",class:"sm:rotate-1",desc:"I can relate to the struggle of feeling trapped in the coding journey as maintaining motivation can be challenging. In my experience, the best way to sustain motivation is by tracking your progress throughout the journey. ",img:"img/lost.jpg",link:"https://dev.to/viktoriabors/from-lost-to-confident-how-to-see-improvement-as-a-junior-developer-384"},{id:2,title:"Maximizing Your Potential: How to Prepare for Career Fairs as a Junior Developer",class:"sm:-rotate-3",desc:"With career fairs and meet-ups just around the corner, have you considered how you will differentiate yourself and leave a lasting impression on recruiters and potential colleagues? What approach do you plan to take?",img:"img/itday.png",link:"https://dev.to/viktoriabors/maximizing-your-potential-how-to-prepare-for-career-fairs-as-a-junior-developer-lo8"}];(0,r.iH)(!1);return(e,a)=>((0,i.wg)(),(0,i.iD)("div",Ue,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,r.SU)(t),(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.id,class:(0,l.C_)(["max-w-sm m-2 border border-px border-slate rounded-xl dark:bg-cardDark dark:text-grayl dark:shadow-lg",e.class])},[(0,i._)("div",Je,[Pe,(0,i._)("h5",Ee,(0,l.zw)(e.title),1),(0,i._)("p",Oe,(0,l.zw)(e.desc),1),(0,i._)("a",{href:e.link,target:"_blank",class:"flex text-blue"},[(0,i.Wm)(oe,{class:"mt-2 mr-2"}),Ne],8,Ye)])],2)))),128))]))}};const Ve=(0,p.Z)(Ge,[["__scopeId","data-v-1ca5c60e"]]);var Qe=Ve;const Re={class:"flex justify-center py-4 mx-2"},Ze={class:"flex flex-col max-w-md bg-white rounded-lg shadow-lg md:max-w-7xl md:flex-row dark:bg-cardDark dark:shadow-lg dark:text-grayl"},Xe=["src"],Ke={class:"flex flex-col justify-center p-6"},$e={class:"text-xl font-medium text-gray-900"},et={class:"italic font-medium text-gray-900 text-md"},tt={key:0,class:"pt-4 text-base"},at={key:1,class:"mt-2 text-base text-gray-700"},st={key:1},it={key:2},lt={class:"flex flex-row mt-4 ml-1"},rt={key:0,href:"https://fromlabtoweb.hu/itmansys/publish.zip",target:"_blank",class:"mr-7"},ot=["href"],nt=["href"],ct={class:"pb-6 text-center"},dt={href:"https://github.com/ViktoriaBors",target:"_blank"};var mt={__name:"ProjectsCard",setup(e){let t=[{id:0,isActive:(0,r.iH)(!1),title:"IT Storage Management system",stacks:"C#, MySQL",desc:"During the 7 months C# Basics module, I have learned the basics of C# and WinForms applications.The project itself is a storage manager system for computer parts. The main objective of this project is to create a simple CRUD (Create, Read, Update, Delete) application that enables the client to track its storage. The client can choose from 5 different computer parts and add new parts in the system or delete one. These computer parts can be connected to a given storage, where their in stock piece needs to be given. From the given storage each part can be added more or deleted some. It is possible to export the given computer part and then import it.",linkServer:"",linkGit:"https://github.com/ViktoriaBors/itmansys",img:"img/csharp.png"},{id:1,isActive:(0,r.iH)(!1),title:"Multilingual Children Library",stacks:"JavaScript, Vue Js, Tailwind Css, PHP, SQL",desc:"This side project was a motivation to dig deeper in PHP and SQL. As someone from a multilingual family, I know how important it is for children to learn their mother tongue. Users can search  books, and once logged in, they can issue and return a book. There is an admin platform, where 'simple' admin can change active status for books, deal with issued books when they returned. As a 'super' admin, you have the right to do ban, delete a user.",linkServer:"https://online-library-ochre.vercel.app/",linkGit:"https://github.com/ViktoriaBors/online-library",img:"img/library.png"},{id:2,isActive:(0,r.iH)(!1),title:"SpaceRock",stacks:"JavaScript, Node Js, Mongo DB, Vue Js, Tailwind Css",desc:"I did a JavaScript module exam project called SpaceRock, which was inspired by ESA SACF. It's basically a CRUD app with a cool geological twist - it's all about the analogue and simulant samples from the Moon. Users can search the database, and once logged in, they can add, modify, and delete samples. It even has a feature for uploading images. I've since updated and re-written the project using the Vue.js framework.",linkServer:"https://spacerockvue.onrender.com/",linkGit:"https://github.com/ViktoriaBors/SpaceRockVue",img:"img/spacerock1.png"},{id:3,isActive:(0,r.iH)(!1),title:"Bows Cafe",stacks:"HTML, CSS, SASS, Bootstrap, Javascript",desc:"I did a front-end module exam project called Bows Cafe, which was inspired by a local LGBT+ gathering place called Buens Cafe. It's an important topic and I wanted to create a static webpage about them. The project shows my early skills in web development and how I started my journey.",linkServer:"https://examprojekt.vercel.app/",linkGit:"https://github.com/ViktoriaBors/FrontendExamProjekt",img:"img/bows.png"}];(0,r.iH)(!1);const a=e=>t[e].isActive.value=!t[e].isActive.value;let o=(0,r.iH)(null);return o.value=window.innerWidth,window.addEventListener("resize",(()=>{o.value=window.innerWidth})),(e,n)=>((0,i.wg)(),(0,i.iD)("div",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,r.SU)(t),(t=>((0,i.wg)(),(0,i.iD)("div",{key:t.id},[(0,i._)("div",Re,[(0,i._)("div",Ze,[(0,i._)("img",{class:"object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg dark:grayscale",src:t.img,alt:"",onClick:n[0]||(n[0]=(...t)=>e.loadImg&&e.loadImg(...t))},null,8,Xe),(0,i._)("div",Ke,[(0,i._)("h5",$e,(0,l.zw)(t.title),1),(0,i._)("h5",et,(0,l.zw)(t.stacks),1),(0,r.SU)(o)>=800?((0,i.wg)(),(0,i.iD)("p",tt,(0,l.zw)(t.desc),1)):(0,i.kq)("",!0),(0,r.SU)(o)<800?((0,i.wg)(),(0,i.iD)("p",at,[((0,i.wg)(),(0,i.iD)("span",st,(0,l.zw)(t.isActive.value?t.desc.slice(0,100):t.desc.slice(0,100)+"..."),1)),(0,i.Wm)(s.uT,{name:"fade"},{default:(0,i.w5)((()=>[t.isActive.value?((0,i.wg)(),(0,i.iD)("span",it,(0,l.zw)(t.desc.slice(100)),1)):(0,i.kq)("",!0)])),_:2},1024)])):(0,i.kq)("",!0),(0,r.SU)(o)<800?((0,i.wg)(),(0,i.j4)(oe,{key:2,class:"text-left",type:"button",onClick:e=>a(t.id),isActive:t.isActive.value},null,8,["onClick","isActive"])):(0,i.kq)("",!0),(0,i._)("div",lt,[0==t.id?((0,i.wg)(),(0,i.iD)("a",rt,[(0,i.Wm)(g,{text:"download exe"})])):(0,i.kq)("",!0),0!=t.id?((0,i.wg)(),(0,i.iD)("a",{key:1,href:t.linkServer,target:"_blank",class:"mr-7"},[(0,i.Wm)(g,{text:"live server"})],8,ot)):(0,i.kq)("",!0),(0,i._)("a",{href:t.linkGit,target:"_blank"},[(0,i.Wm)(g,{text:"source code"})],8,nt)])])])])])))),128)),(0,i._)("div",ct,[(0,i._)("a",dt,[(0,i.Wm)(d,{text:"see more on github »"})])])]))}};const pt=(0,p.Z)(mt,[["__scopeId","data-v-997944f4"]]);var ut=pt;const gt=e=>((0,i.dD)("data-v-b9c3af52"),e=e(),(0,i.Cn)(),e),vt={class:"flex flex-row items-center justify-between"},ht={action:"https://formsubmit.io/send/viktoria.pajuste@gmail.com",method:"POST",class:"flex-1 w-1/2 p-4 m-4 border-2 border-dashed rounded-lg lg:flex-none border-slate bg-gray dark:bg-cardDark dark:border-[#50AB65]"},ft=(0,i.uE)('<input name="_formsubmit_id" type="text" style="display:none;" data-v-b9c3af52><input name="_redirect" type="hidden" id="name" value="https://www.viktoria-pajuste.hu/#contact" data-v-b9c3af52><h2 class="mb-2 text-lg" data-v-b9c3af52>Send me an email</h2><input type="email" name="email" id="email" class="mb-4 bg-gray-50 border border-slate text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Your Email" required data-v-b9c3af52><input type="text" name="name" id="name" class="mb-4 bg-gray-50 border border-slate text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Your Name" required data-v-b9c3af52><textarea id="message" name="message" rows="4" class="mb-4 bg-gray-50 border border-slate text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Your Message comes here" required data-v-b9c3af52></textarea>',6),xt=gt((()=>(0,i._)("input",{type:"submit"},null,-1))),bt=(0,i.uE)('<p class="pt-2 ml-1 mr-4 text-base" data-v-b9c3af52> Or find me on »</p><div class="flex flex-row items-center mt-1 ml-1" data-v-b9c3af52><a href="https://www.linkedin.com/in/viktoria-b-pajuste/" target="_blank" class="cursor-pointer" data-v-b9c3af52><img src="/img/linkedin.svg" alt="Linkedin profile" class="w-12 ml-0 cursor-pointer" data-v-b9c3af52></a><a href="https://dev.to/viktoriabors" target="_blank" class="cursor-pointer" data-v-b9c3af52><img src="/img/dev-to.svg" alt="Dev.to profile" class="w-12 ml-1 cursor-pointer" data-v-b9c3af52></a></div>',2),wt=(0,i.uE)('<div class="hidden mt-4 mr-2 md:flex wrapper" data-v-b9c3af52><div class="lid one" data-v-b9c3af52></div><div class="lid two" data-v-b9c3af52></div><div class="envelope" data-v-b9c3af52></div><div class="flex flex-col justify-center letter" data-v-b9c3af52><p class="pt-2 text-base font-bold" data-v-b9c3af52><span class="mr-2 text-xl" data-v-b9c3af52>←</span>Write me there</p></div></div>',1),yt=gt((()=>(0,i._)("div",{class:"w-full text-justify"},[(0,i._)("p",{class:"mx-3 text-sm text-white lg:mx-0"}," We collect your name, email address, and message when you submit a form on the website. We use this information to respond to your message or enquiry. We protect your personal data and respect your rights under the GDPR. ")],-1)));var kt={__name:"ContactForm",props:["text"],setup(e){return(e,t)=>((0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",vt,[(0,i._)("form",ht,[ft,(0,i.Wm)(d,{text:"send an email »"},{default:(0,i.w5)((()=>[xt])),_:1}),bt]),wt]),yt],64))}};const _t=(0,p.Z)(kt,[["__scopeId","data-v-b9c3af52"]]);var St=_t;const jt={class:"p-6 m-2 rounded-lg dark:shadow-lg bg-grayl dark:bg-cardDark dark:text-grayl"},Dt=(0,i.uE)('<p class="pb-2 font-bold">I build kick-ass web apps with these tools:</p><p class="text-justify"> So, I&#39;m a self-taught software and web developer who enjoys working on frontend and dig deep into databases as well. I dig using JavaScript, especially with Vue.js. I have experience with C# and Delphi, moreover I&#39;ve got some skills in using Node.js too. I&#39;m also a fan of MongoDB, but MySQL is my go-to database, and for styling, I&#39;m all about Tailwind CSS. But I also know my way around Bootstrap. And let&#39;s not forget, version control is a must, so I&#39;m all in on Git and Github. </p><div class="grid grid-cols-3 mt-8 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 justify-items-center"><div class="flex flex-col items-center justify-center p-3"><img src="img/html-removebg-preview.png" class="h-12 md:h-20" alt="HTML 5"><p class="mt-2">HTML</p></div><div class="flex flex-col items-center justify-center p-3"><img src="img/css-removebg-preview.png" class="h-12 md:h-20" alt="CSS 3"><p class="mt-2">CSS</p></div><div class="flex flex-col items-center justify-center p-3"><img src="img/js-removebg-preview.png" class="h-12 md:h-20" alt="JavaScript"><p class="mt-2">JavaScript</p></div><div class="flex flex-col items-center justify-center p-3"><img src="img/sass-removebg-preview.png" class="h-12 md:h-20" alt="SASS"><p class="mt-2">SASS</p></div><div class="flex flex-col items-center justify-center p-3"><img src="img/bootstrap-removebg-preview.png" class="h-12 pb-2 md:h-20" alt="Bootstrap 5"><p class="mt-2">Bootstrap</p></div><div class="flex flex-col items-center justify-center p-3"><img src="img/tailwind-removebg-preview.png" class="h-12 md:h-20" alt="Tailwind CSS"><p class="mt-2">Tailwind</p></div><div class="flex flex-col items-center justify-center p-3"><img src="img/vue.png" class="h-12 md:h-20" alt="VueJs"><p class="mt-2">VueJs</p></div><div class="flex flex-col items-center justify-center p-3"><img src="img/nodejs-removebg-preview.png" class="h-12 md:h-20" alt="NodeJs"><p class="mt-2">NodeJs</p></div><div class="flex flex-col items-center justify-center p-3"><img src="img/mongo-removebg-preview.png" class="h-12 md:h-20" alt="Mongo DB"><p class="mt-2">MongoDB</p></div><div class="flex flex-col items-center justify-center p-3"><img src="img/php.png" class="h-12 md:h-20" alt="PHP"><p class="mt-2">PHP</p></div><div class="flex flex-col items-center justify-center p-3"><img src="img/mysql.png" class="h-12 md:h-20" alt="SQL"><p class="mt-2">MySQL</p></div><div class="flex flex-col items-center justify-center p-3"><img src="img/csharp-original.svg" class="h-12 md:h-20" alt="SQL"><p class="mt-2">C#</p></div><div class="flex flex-col items-center justify-center p-3"><img src="img/delphi-logo.png" class="h-12 md:h-20" alt="SQL"><p class="mt-2">Delphi</p></div><div class="flex flex-col items-center justify-center p-3"><img src="img/responsive-removebg-preview.png" class="h-12 md:h-20" alt="Responsive design"><p class="mt-2">Responsive<br>Webdesign</p></div><div class="flex flex-col items-center justify-center p-3"><img src="img/access-removebg-preview.png" class="h-12 md:h-20" alt="Web accessibility"><p class="mt-2">Accessibility</p></div></div>',3),Ct=[Dt];function It(e,t){return(0,i.wg)(),(0,i.iD)("div",jt,Ct)}const At={},Wt=(0,p.Z)(At,[["render",It]]);var Mt=Wt;const Ht={class:"relative max-w-5xl my-28"},qt={class:"relative flex flex-col text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto bg-clip-padding"},Bt=["src"],Tt={class:"flex items-center justify-center p-6 space-x-2 border-t rounded-b border-greenv boder-2"};var Lt={__name:"Modal",props:["img"],emits:["closeModal"],setup(e,{emit:t}){return(a,s)=>((0,i.wg)(),(0,i.iD)("div",Ht,[(0,i._)("div",qt,[(0,i._)("img",{src:e.img,alt:"",class:"p-2 lg:p-4"},null,8,Bt),(0,i._)("div",Tt,[(0,i._)("button",{onClick:s[0]||(s[0]=e=>t("closeModal")),type:"button",class:"w-16"},"Close")])])]))}};const Ft=(0,p.Z)(Lt,[["__scopeId","data-v-2ce52302"]]);var zt=Ft;const Ut=e=>((0,i.dD)("data-v-9cde2668"),e=e(),(0,i.Cn)(),e),Jt=Ut((()=>(0,i._)("span",{href:"#",id:"top",class:""},"⇑",-1))),Pt=[Jt],Et={id:"home",class:""},Ot={id:"skills",class:"flex items-center justify-center pt-6 -mb-8 pb-28 dark:bg-blackDark"},Yt=Ut((()=>(0,i._)("h1",{class:"pt-8 pb-8 ml-3 text-xl font-bold dark:text-grayl"},".stacks",-1))),Nt={id:"about",class:"py-8 -mt-12 md:py-24 bg-greenv dark:bg-greenBlackDark"},Gt={class:"mx-auto max-w-7xl"},Vt=Ut((()=>(0,i._)("h1",{class:"py-4 mb-4 mr-3 text-xl font-bold text-right text-grayl md:pb-8"},".who am i",-1))),Qt={id:"experiences",class:"pt-8 pb-32 -mt-12 -mb-24 dark:bg-deepBlackDark dark:text-grayl"},Rt={class:"mx-auto max-w-7xl"},Zt=Ut((()=>(0,i._)("h1",{class:"pt-8 pb-8 ml-3 text-xl font-bold md:ml-6"},".experiences",-1))),Xt={id:"projects",class:"py-8 my-4 md:my-8 md:py-16 bg-brownl dark:bg-greengrayDark"},Kt={class:"mx-auto max-w-7xl"},$t=Ut((()=>(0,i._)("h1",{class:"pb-2 mr-3 text-xl font-bold text-right text-black dark:text-grayl"},".projects",-1))),ea={id:"blog",class:"py-16 pb-48 -mt-8 dark:bg-deepBlackDark dark:text-grayl"},ta={class:"pt-8 pb-2 mx-auto mt-8 md:pt-16 md:pb-2 max-w-7xl"},aa=Ut((()=>(0,i._)("h1",{class:"ml-3 text-xl font-bold text-left md:pb-2"},".blog",-1))),sa={id:"education",class:"pt-16 pb-8 -mt-24 bg-brownl dark:bg-greengrayDark"},ia={class:"pb-8 mx-auto max-w-7xl"},la=Ut((()=>(0,i._)("h1",{class:"pt-4 pb-8 mr-3 text-xl font-bold text-right text-black dark:text-grayl"},".educations",-1))),ra={id:"contact",class:"pt-4 -mt-12 bg-brownd dark:bg-black dark:text-grayl"},oa={class:"py-10 max-w-7xl xl:mx-auto"},na=Ut((()=>(0,i._)("h1",{class:"ml-3 text-xl font-bold text-left text-white"},".contact me",-1))),ca={key:0,style:{"background-color":"rgba(240,240,240,0.8)"},class:"fixed top-0 left-0 right-0 z-50 flex justify-center w-full h-full overflow-x-hidden overflow-y-auto"};var da={__name:"App",props:["text","img"],setup(e){let t=(0,r.iH)(!1),a=(0,r.iH)("");const s=e=>{t.value=!t.value,a.value=e},o=()=>t.value=!t.value;let n=(0,r.iH)(null);return window.onscroll=()=>{n.value=window.scrollY},(e,c)=>((0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(J),(0,i._)("a",{href:"#",class:(0,l.C_)(["fixed z-50 flex items-center justify-center w-10 h-10 p-4 bg-white rounded-full shadow-lg bottom-1 right-1",(0,r.SU)(n)>30?["fixed"]:["hidden"]])},Pt,2),(0,i._)("section",Et,[(0,i.Wm)(_,{class:"pt-20 pb-4 -mt-16 md:pb-0 md:pt-24 md:-mt-40"})]),(0,i._)("section",Ot,[(0,i._)("div",null,[Yt,(0,i.Wm)(Mt,{class:"max-w-7xl"})])]),(0,i._)("section",Nt,[(0,i._)("div",Gt,[Vt,(0,i.Wm)(se,{class:"pb-8",onOpenModal:s})])]),(0,i._)("section",Qt,[(0,i._)("div",Rt,[Zt,(0,i.Wm)(je,{class:"max-w-7xl"})])]),(0,i._)("section",Xt,[(0,i._)("div",Kt,[$t,(0,i.Wm)(ut)])]),(0,i._)("section",ea,[(0,i._)("div",ta,[aa,(0,i.Wm)(Qe)])]),(0,i._)("section",sa,[(0,i._)("div",ia,[la,(0,i.Wm)(Fe)])]),(0,i._)("section",ra,[(0,i._)("div",oa,[na,(0,i.Wm)(St,{class:""})])]),(0,r.SU)(t)?((0,i.wg)(),(0,i.iD)("div",ca,[(0,i.Wm)(zt,{onCloseModal:o,img:(0,r.SU)(a)},null,8,["img"])])):(0,i.kq)("",!0)]))}};const ma=(0,p.Z)(da,[["__scopeId","data-v-9cde2668"]]);var pa=ma;(0,s.ri)(pa).mount("#app")}},t={};function a(s){var i=t[s];if(void 0!==i)return i.exports;var l=t[s]={exports:{}};return e[s](l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,s,i,l){if(!s){var r=1/0;for(d=0;d<e.length;d++){s=e[d][0],i=e[d][1],l=e[d][2];for(var o=!0,n=0;n<s.length;n++)(!1&l||r>=l)&&Object.keys(a.O).every((function(e){return a.O[e](s[n])}))?s.splice(n--,1):(o=!1,l<r&&(r=l));if(o){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[s,i,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,l,r=s[0],o=s[1],n=s[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(n)var d=n(a)}for(t&&t(s);c<r.length;c++)l=r[c],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(d)},s=self["webpackChunkvbpport"]=self["webpackChunkvbpport"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(3880)}));s=a.O(s)})();
//# sourceMappingURL=app.71fecbb9.js.map