(function(){"use strict";var e={1149:function(e,t,a){var s=a(9242),i=a(3396),l=a(4870),o=a(7139);var r=a(89);const n=e=>((0,i.dD)("data-v-504bfd13"),e=e(),(0,i.Cn)(),e),d=n((()=>(0,i._)("div",{class:"pl-2"},[(0,i._)("img",{src:"img/logoNoBg.gif",width:"80",class:"ml-2"})],-1))),c={class:"pr-2"},p={key:0,id:"toggle",type:"checkbox",class:"relative hidden"},m=n((()=>(0,i._)("div",{class:"top-bun"},null,-1))),u=n((()=>(0,i._)("div",{class:"meat"},null,-1))),v=n((()=>(0,i._)("div",{class:"bottom-bun"},null,-1))),g=[m,u,v],x={key:0,class:"flex flex-row gap-4 bg-white rounded-full"},h=(0,i.uE)('<a class="hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv" href="#home" data-v-504bfd13>.home</a><a class="hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv" href="#skills" data-v-504bfd13>.skills</a><a class="hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv" href="#about" data-v-504bfd13>.who am i</a><a class="hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv" href="#experiences" data-v-504bfd13>.experiences</a><a class="hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv" href="#projects" data-v-504bfd13>.projects</a><a class="hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv" href="#education" data-v-504bfd13>.education</a><a class="pr-2 hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv" href="#contact" data-v-504bfd13>.contact me</a>',7),f=[h],b={key:0,class:"fixed right-0 z-50 w-1/3 text-black"},w=n((()=>(0,i._)("nav",{class:"flex flex-col h-screen gap-2 p-2 bg-white"},[(0,i._)("a",{class:"hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv",href:"#"},".home"),(0,i._)("a",{class:"hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv",href:"#skills"},".skills"),(0,i._)("a",{class:"hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv",href:"#about"},".who am i"),(0,i._)("a",{class:"hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv",href:"#experiences"},".experiences"),(0,i._)("a",{class:"hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv",href:"#projects"},".projects"),(0,i._)("a",{class:"hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv",href:"#education"},".education"),(0,i._)("a",{class:"hover:underline decoration-2 underline-offset-2 decoration-greenv hover:text-greenv",href:"#contact"},".contact me")],-1))),y=[w];var _={__name:"TopNavBar",setup(e){let t=(0,l.iH)(!1),a=(0,l.iH)(null),r=(0,l.iH)(null);return r.value=window.innerWidth,window.addEventListener("scroll",(()=>{a.value=window.scrollY})),window.addEventListener("resize",(()=>{r.value=window.innerWidth,r.value>768&&(t.value=!1)})),(e,n)=>((0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",{id:"topMenu",class:(0,o.C_)([(0,l.SU)(a)>50?["w-full mx-0"]:["w-11/12 rounded-full mx-auto"],"sticky top-0 z-50 flex items-center justify-between h-16 bg-white shadow-md"])},[d,(0,i._)("div",c,[(0,l.SU)(r)<=768?((0,i.wg)(),(0,i.iD)("input",p)):(0,i.kq)("",!0),(0,l.SU)(r)<=768?((0,i.wg)(),(0,i.iD)("label",{key:1,for:"toggle",class:"p-4 cursor-pointer hamburger",onClick:n[0]||(n[0]=e=>(0,l.dq)(t)?t.value=!(0,l.SU)(t):t=!(0,l.SU)(t))},g)):(0,i.kq)("",!0)]),(0,l.SU)(r)>768?((0,i.wg)(),(0,i.iD)("nav",x,f)):(0,i.kq)("",!0)],2),(0,i.Wm)(s.uT,{name:"bounce"},{default:(0,i.w5)((()=>[(0,l.SU)(t)?((0,i.wg)(),(0,i.iD)("div",b,y)):(0,i.kq)("",!0)])),_:1})],64))}};const k=(0,r.Z)(_,[["__scopeId","data-v-504bfd13"]]);var S=k;const j={class:"w-11/12 p-2 mx-auto"},C={key:0,class:"relative flex flex-col items-center xl:flex-row"},D={class:"relative xl:order-1"},W=["src"],A=["src"],I={class:"w-full p-4 bg-white lg:rounded-l-lg"},z={class:"flex flex-col justify-around p-6 h-72 sm:h-52"},T={class:"pb-2 font-bold text-center"},E={key:1,class:"flex flex-col items-center justify-center"},M={class:"relative"},H=["src"],J={class:"flex flex-col justify-around w-10/12 p-4 bg-white rounded-b-lg"},B={class:"text-sm font-bold text-center sm:text-base"},U={class:"text-sm sm:text-base"};var q={__name:"ImgSlider",emits:["openModal"],setup(e,{emit:t}){const a=()=>{t("openModal",c().src)};let s=[{id:1,src:"../img/geo.jpg",head:"Down To Earth",desc:"The environment have always been a big part of me. I have survived many field trips, mapping courses and other extreme assignments. I have always loved to hike on the field or sitting in the lab behind the microscope.",class:"rotate-2"},{id:2,src:"./img/it.jpg",head:"IT works...Why?",desc:"Why? This is the ultimate question for a developer. It can be asked always. Why doesn't it work? Why does it work? Etc. Sometimes a beer and chips would help me to answer these questions. ",class:"rotate-3"},{id:3,src:"./img/family.jpg",head:"Wife, mom, friend...",desc:"... student, employee, chef. This girls has MANY NAMES. I can fulfill multiple roles and do multiple tasks per day.",class:"rotate-6"},{id:4,src:"./img/pol.jpg",head:"Plan C for career - Poledance",desc:"No, seriously... It is a sport that actually can give you muscles and muscle aches. I have done poledance for 2-3 years (before pregnancy) and even won one!",class:"-rotate-6"}],r=(0,l.iH)(0);const n=()=>{r.value=r.value+1,r.value>=s.length&&(r.value=0)},d=()=>{r.value=r.value-1,r.value<=-1&&(r.value=3)},c=()=>s[r.value];let p=(0,l.iH)(null);return p.value=window.innerWidth,window.addEventListener("resize",(()=>{p.value=window.innerWidth})),(e,t)=>((0,i.wg)(),(0,i.iD)("div",j,[(0,l.SU)(p)>768?((0,i.wg)(),(0,i.iD)("div",C,[(0,i._)("div",D,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,l.SU)(s),(e=>((0,i.wg)(),(0,i.iD)("img",{key:e.id,src:e.src,class:(0,o.C_)(["absolute max-w-md xl:max-w-2xl max-h-96 grayscale right-10",e.class])},null,10,W)))),128)),((0,i.wg)(),(0,i.iD)("img",{src:c().src,key:c().id,class:(0,o.C_)(["relative order-1 max-w-md mr-10 cursor-pointer xl:max-w-2xl max-h-96 bounce-in",c().class]),onClick:a},null,10,A))]),(0,i._)("div",I,[(0,i._)("div",z,[(0,i._)("p",T,(0,o.zw)(c().head),1),(0,i._)("p",null,(0,o.zw)(c().desc),1)])]),(0,i._)("span",{class:"absolute inset-y-0 left-0 flex text-lg font-bold cursor-pointer md:mt-28 md:ml-8 xl:-ml-8 xl:mt-0 xl:justify-center xl:items-center sm:text-2xl hover:text-3xl",onClick:d},"❮"),(0,i._)("span",{class:"absolute inset-y-0 right-0 flex text-lg font-bold cursor-pointer md:mt-28 md:mr-8 xl:-mr-6 xl:mt-0 xl:justify-center xl:items-center sm:text-2xl hover:text-3xl",onClick:n},"❯")])):(0,i.kq)("",!0),(0,l.SU)(p)<768?((0,i.wg)(),(0,i.iD)("div",E,[(0,i._)("div",M,[(0,i._)("img",{src:c().src,class:"w-full max-w-xl px-2 mx-auto max-h-96",onClick:a},null,8,H),(0,i._)("span",{class:"absolute inset-y-0 left-0 flex items-center justify-center p-4 text-lg font-bold text-black cursor-pointer sm:text-2xl hover:text-3xl",onClick:d},"❮"),(0,i._)("span",{class:"absolute inset-y-0 right-0 flex items-center justify-center p-4 text-lg font-bold text-black cursor-pointer sm:text-2xl hover:text-3xl",onClick:n},"❯")]),(0,i._)("div",J,[(0,i._)("p",B,(0,o.zw)(c().head),1),(0,i._)("p",U,(0,o.zw)(c().desc),1)])])):(0,i.kq)("",!0)]))}};const O=q;var N=O,V={__name:"ReadMoreButton",props:["isActive"],setup(e){return(t,a)=>((0,i.wg)(),(0,i.iD)("button",null,(0,o.zw)(e.isActive?"read less":"read more"),1))}};const L=(0,r.Z)(V,[["__scopeId","data-v-4fa9c4be"]]);var F=L;const P={class:"grid grid-cols-1 gap-4 py-4 min-[800px]:grid-cols-2 justify-items-center"},Z={class:"max-w-xs bg-white rounded-lg shadow-lg md:max-w-sm"},Y=["src"],G={class:"p-6 border-t-2 border-t-brownd"},R={class:"text-xl font-medium text-gray-900"},K={class:"text-lg italic font-medium text-gray-900"},Q={class:"mb-2 text-sm italic text-gray-900"},X={class:"mb-4 text-base text-gray-700"},$={key:1},ee={key:2},te=(0,i.uE)('<div class="md:justify-self-center" data-v-f66241d0><div class="relative bg-white rounded-lg shadow-lg h-[580px]" data-v-f66241d0><img src="img/luck-removebg.png" alt="" class="max-w-xs rounded-lg md:max-w-sm" data-v-f66241d0><div class="absolute inset-0 flex flex-col items-center justify-between text-black" data-v-f66241d0><h5 class="text-3xl font-medium text-center" data-v-f66241d0>Who is the lucky next?</h5><h5 class="text-lg italic font-medium" data-v-f66241d0>I hope to see you soon here</h5></div></div></div>',1);var ae={__name:"ExpCard",setup(e){let t=[{id:0,isActive:(0,l.iH)(!1),title:"Junior Developer",date:"2022.October - Now",desc:"Formula 400 (Hungarian Company) builds web application and software platforms for Insurance Companies. I am responsible to make updates in the product description and implement new products both in the database, on backend side (through webservices) and on frontend (visualize them on the User Interface). The project written in Vue.Js and Node.Js.",img:"img/coverme-removebg.png",skills:"JavaScript, Vue Js, Node Js"}];(0,l.iH)(!1);const a=e=>t[e].isActive.value=!t[e].isActive.value;return(e,r)=>((0,i.wg)(),(0,i.iD)("div",P,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,l.SU)(t),(e=>((0,i.wg)(),(0,i.iD)("div",{class:"md:justify-self-center",key:e.id},[(0,i._)("div",Z,[(0,i._)("img",{class:"max-w-xs pb-2 rounded-t-lg md:max-w-sm",src:e.img,alt:""},null,8,Y),(0,i._)("div",G,[(0,i._)("h5",R,(0,o.zw)(e.title),1),(0,i._)("h5",K,(0,o.zw)(e.date),1),(0,i._)("p",Q,(0,o.zw)(e.skills),1),(0,i._)("p",X,[(0,i.Wm)(s.W3,{name:"fade"},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.iD)("span",$,(0,o.zw)(e.isActive.value?e.desc.slice(0,150):e.desc.slice(0,150)+"..."),1)),e.isActive.value?((0,i.wg)(),(0,i.iD)("span",ee,(0,o.zw)(e.desc.slice(150)),1)):(0,i.kq)("",!0)])),_:2},1024)]),(0,i.Wm)(F,{class:"text-sm",type:"button",onClick:t=>a(e.id),isActive:e.isActive.value},null,8,["onClick","isActive"])])])])))),128)),te]))}};const se=(0,r.Z)(ae,[["__scopeId","data-v-f66241d0"]]);var ie=se;const le={class:"grid grid-cols-1 gap-4 py-4 md:grid-cols-3 justify-items-center"},oe=["src"],re={class:"p-4"},ne={class:"text-xl font-medium text-gray-900"},de={class:"text-lg italic font-medium text-gray-900"},ce={class:"mb-2 text-sm italic text-gray-900"},pe={class:"mb-4 text-base text-gray-700"},me={key:1},ue={key:2};var ve={__name:"EdCard",setup(e){let t=[{id:0,isActive:(0,l.iH)(!1),title:"Environmental Engineering / Geology",date:"Master Degree",desc:"Environmental Engineer study program with focus on  soil, groundwater, drinking water pollution and wastewater treatment. The geology education has provided advanced training in geology and geological problem solving. ",img:"img/eotvos2.jpg",skills:"Aalborg University / Eotvos Lorand University"},{id:1,isActive:(0,l.iH)(!1),title:"IT Support Specialist",date:"2022. July - 2022. September",desc:"Google certified IT-Support Specialist program consisted 5 modules (Technical support, Operating Systems, Computer networking, IT infrastructure services and IT security) which gave a powerful tool to understand different network protocols, Linux command lines, Windows operating system and system administration.  ",img:"img/greenfox.jpeg",skills:"Network protocols, Op.systems, system administration"},{id:2,isActive:(0,l.iH)(!1),title:"Full Stack Developer",date:"2022.January - Now",desc:"Part-time bootcamp program with 5 hours per week courses and lot of individual practice time. Frontend module has been completed with 98% theory exam, JavaScript module was finished with 2 written (coding) exams with 100% . All projects got the highest grade.",img:"img/prooktatas.jpeg",skills:"HTML, CSS, JavaScript, Node Js, PHP, MongoDb, MySQL"}];(0,l.iH)(!1);const a=e=>t[e].isActive.value=!t[e].isActive.value;return(e,r)=>((0,i.wg)(),(0,i.iD)("div",le,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,l.SU)(t),(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.id,class:"max-w-sm m-2 bg-white rounded-lg shadow-lg"},[(0,i._)("img",{src:e.img,alt:"",class:"h-[200px] mx-auto"},null,8,oe),(0,i._)("div",re,[(0,i._)("h5",ne,(0,o.zw)(e.title),1),(0,i._)("h5",de,(0,o.zw)(e.date),1),(0,i._)("p",ce,(0,o.zw)(e.skills),1),(0,i._)("p",pe,[(0,i.Wm)(s.W3,{name:"fade"},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.iD)("span",me,(0,o.zw)(e.isActive.value?e.desc.slice(0,150):e.desc.slice(0,150)+"..."),1)),e.isActive.value?((0,i.wg)(),(0,i.iD)("span",ue,(0,o.zw)(e.desc.slice(150)),1)):(0,i.kq)("",!0)])),_:2},1024)]),(0,i.Wm)(F,{class:"mt-12 text-sm",type:"button",onClick:t=>a(e.id),isActive:e.isActive.value},null,8,["onClick","isActive"])])])))),128))]))}};const ge=(0,r.Z)(ve,[["__scopeId","data-v-4eca202f"]]);var xe=ge,he={__name:"SecondaryButton",props:["text"],setup(e){return(t,a)=>((0,i.wg)(),(0,i.iD)("button",null,(0,o.zw)(e.text),1))}};const fe=(0,r.Z)(he,[["__scopeId","data-v-1d968a1b"]]);var be=fe;const we={class:"text-white bg-greenv font-bold text-md px-4 py-2.5 text-center hover:bg-[#24993F] hover:shadow-lg transition duration-300 ease-in-out"};var ye={__name:"BaseButton",props:["text"],setup(e){return(t,a)=>((0,i.wg)(),(0,i.iD)("button",we,(0,o.zw)(e.text),1))}};const _e=ye;var ke=_e;const Se={class:"flex justify-center py-4 mx-2"},je={class:"flex flex-col max-w-md bg-white rounded-lg shadow-lg md:max-w-7xl md:flex-row"},Ce=["src"],De={class:"flex flex-col justify-center p-6"},We={class:"text-xl font-medium text-gray-900"},Ae={class:"italic font-medium text-gray-900 text-md"},Ie={key:0,class:"pt-4 text-base"},ze={key:1,class:"mt-2 mb-4 text-base text-gray-700"},Te={key:1},Ee={key:2},Me={class:"flex flex-row justify-around mt-4 md:mt-2"},He=["href"],Je=["href"],Be={class:"text-center"},Ue={href:"https://github.com/ViktoriaBors",target:"_blank"};var qe={__name:"ProjectsCard",setup(e){let t=[{id:0,isActive:(0,l.iH)(!1),title:"SpaceRock",stacks:"JavaScript, Node Js, Mongo DB, Vue Js, Tailwind Css",desc:"JavaScript module exam project. SpaceRock is inspired by ESA SACF. The project is actually a CRUD application mixed with some interesting geological topic about the analogue and simulant samples from the Moon. The user can search in the database and after registration and login the user can add new sample, modify and delete sample. It has a image upload feature as well. Since then, the project has got updated and re-written in Vue Js framework.",linkServer:"https://spacerockvue.onrender.com/",linkGit:"https://github.com/ViktoriaBors/SpaceRockVue",img:"img/spacerock1.png"},{id:1,isActive:(0,l.iH)(!1),title:"Bows Cafe",stacks:"HTML, CSS, SASS, Bootstrap, Javascript",desc:"Front end module exam project. Bows Cafe is inspired by Buens Cafe. Buens Cafe is a local LGBT+ gathering place with friendly atmosphere. It is an important topic and therefore I decided to make this static webpage about them.The project reflects my knowledge in the beginning of my journey in webdevelopment.",linkServer:"https://examprojekt.vercel.app/",linkGit:"https://github.com/ViktoriaBors/FrontendExamProjekt",img:"img/bows.png"}];(0,l.iH)(!1);const a=e=>t[e].isActive.value=!t[e].isActive.value;let r=(0,l.iH)(null);return r.value=window.innerWidth,window.addEventListener("resize",(()=>{r.value=window.innerWidth})),(e,n)=>((0,i.wg)(),(0,i.iD)("div",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,l.SU)(t),(t=>((0,i.wg)(),(0,i.iD)("div",{key:t.id},[(0,i._)("div",Se,[(0,i._)("div",je,[(0,i._)("img",{class:"object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",src:t.img,alt:"",onClick:n[0]||(n[0]=(...t)=>e.loadImg&&e.loadImg(...t))},null,8,Ce),(0,i._)("div",De,[(0,i._)("h5",We,(0,o.zw)(t.title),1),(0,i._)("h5",Ae,(0,o.zw)(t.stacks),1),(0,l.SU)(r)>768?((0,i.wg)(),(0,i.iD)("p",Ie,(0,o.zw)(t.desc),1)):(0,i.kq)("",!0),(0,l.SU)(r)<768?((0,i.wg)(),(0,i.iD)("p",ze,[(0,i.Wm)(s.W3,{name:"fade"},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.iD)("span",Te,(0,o.zw)(t.isActive.value?t.desc.slice(0,100):t.desc.slice(0,100)+"..."),1)),t.isActive.value?((0,i.wg)(),(0,i.iD)("span",Ee,(0,o.zw)(t.desc.slice(100)),1)):(0,i.kq)("",!0)])),_:2},1024)])):(0,i.kq)("",!0),(0,l.SU)(r)<768?((0,i.wg)(),(0,i.j4)(F,{key:2,class:"text-sm",type:"button",onClick:e=>a(t.id),isActive:t.isActive.value},null,8,["onClick","isActive"])):(0,i.kq)("",!0),(0,i._)("div",Me,[(0,i._)("a",{href:t.linkServer,target:"_blank"},[(0,i.Wm)(be,{text:"live server"})],8,He),(0,i._)("a",{href:t.linkGit,target:"_blank"},[(0,i.Wm)(be,{text:"source code"})],8,Je)])])])])])))),128)),(0,i._)("div",Be,[(0,i._)("a",Ue,[(0,i.Wm)(ke,{text:"read more on github >>"})])])]))}};const Oe=(0,r.Z)(qe,[["__scopeId","data-v-333dec6c"]]);var Ne=Oe;const Ve=e=>((0,i.dD)("data-v-40d926d1"),e=e(),(0,i.Cn)(),e),Le={class:"flex flex-row items-center justify-around"},Fe={action:"https://formsubmit.io/send/viktoria.pajuste@gmail.com",method:"POST",class:"flex-1 w-1/2 p-4 m-4 border-2 border-dashed rounded-lg lg:flex-none border-slate bg-gray"},Pe=(0,i.uE)('<input name="_formsubmit_id" type="text" style="display:none;" data-v-40d926d1><input name="_redirect" type="hidden" id="name" value="https://www.viktoria-pajuste.hu/#contact" data-v-40d926d1><h2 class="mb-2 text-lg" data-v-40d926d1>Send me an email</h2><input type="email" name="email" id="email" class="mb-4 bg-gray-50 border border-slate text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Your Email" required data-v-40d926d1><input type="text" name="name" id="name" class="mb-4 bg-gray-50 border border-slate text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Your Name" required data-v-40d926d1><textarea id="message" name="message" rows="4" class="mb-4 bg-gray-50 border border-slate text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Your Message comes here" required data-v-40d926d1></textarea>',6),Ze=Ve((()=>(0,i._)("input",{type:"submit"},null,-1))),Ye=(0,i.uE)('<div class="hidden mt-4 mr-2 md:flex wrapper" data-v-40d926d1><div class="lid one" data-v-40d926d1></div><div class="lid two" data-v-40d926d1></div><div class="envelope" data-v-40d926d1></div><div class="letter" data-v-40d926d1><p class="pt-2 text-base font-bold" data-v-40d926d1><span class="mr-2 text-xl" data-v-40d926d1>←</span>Write me there</p></div></div>',1);var Ge={__name:"ContactForm",props:["text"],setup(e){return(e,t)=>((0,i.wg)(),(0,i.iD)("div",Le,[(0,i._)("form",Fe,[Pe,(0,i.Wm)(ke,{text:"send an email"},{default:(0,i.w5)((()=>[Ze])),_:1})]),Ye]))}};const Re=(0,r.Z)(Ge,[["__scopeId","data-v-40d926d1"]]);var Ke=Re;const Qe={class:"p-6 m-2 rounded-lg bg-gray md:h-[500px]"},Xe=(0,i.uE)('<p class="pb-2 font-bold">These are the technologies I use every day to build cool web applications.</p><p class="px-4"> I am a JavaScript enthusiast with a primary focus on Vue Js. I also have some insight into Node.Js as a backend technology. As a database, I like to use JSON-based databases, like MongoDB. For styling, I am a big fan of Tailwind Css, but also familiar with Bootstrap. Version control? Obviously Git and Github </p><div class="flex flex-row flex-wrap items-center justify-center mt-12 md:grid md:grid-cols-6 md:justify-items-center"><div class="p-3"><img src="img/html-removebg-preview.png" class="max-h-20" alt="HTML 5"><p>HTML</p></div><div class="p-3"><img src="img/css-removebg-preview.png" class="max-h-20" alt="CSS 3"><p>CSS</p></div><div class="p-3"><img src="img/js-removebg-preview.png" class="max-h-20" alt="JavaScript"><p>JavaScript</p></div><div class="p-3"><img src="img/sass-removebg-preview.png" class="max-h-20" alt="SASS"><p>SASS</p></div><div class="p-3"><img src="img/bootstrap-removebg-preview.png" class="pb-2 max-h-20" alt="Bootstrap 5"><p>Bootstrap 5</p></div><div class="p-3"><img src="img/tailwind-removebg-preview.png" class="max-h-20" alt="Tailwind CSS"><p>Tailwind CSS</p></div><div class="p-3"><img src="img/vue.png" class="max-h-20" alt="VueJs"><p>VueJs</p></div><div class="p-3"><img src="img/nodejs-removebg-preview.png" class="max-h-20" alt="NodeJs"><p>NodeJs</p></div><div class="p-3"><img src="img/mongo-removebg-preview.png" class="max-h-20" alt="Mongo DB"><p>Mongo DB</p></div><div class="p-3"><img src="img/responsive-removebg-preview.png" class="max-h-20" alt="Responsive design"><p>Responsive Webdesign</p></div><div class="p-3"><img src="img/access-removebg-preview.png" class="max-h-20" alt="Web accessibility"><p>Accessibility</p></div></div>',3),$e=[Xe];function et(e,t){return(0,i.wg)(),(0,i.iD)("div",Qe,$e)}const tt={},at=(0,r.Z)(tt,[["render",et]]);var st=at;const it={class:"relative max-w-7xl my-28"},lt={class:"relative flex flex-col text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto bg-clip-padding"},ot=["src"],rt={class:"flex items-center justify-center p-6 space-x-2 border-t rounded-b border-greenv boder-2"};var nt={__name:"Modal",props:["img"],emits:["closeModal"],setup(e,{emit:t}){return(a,s)=>((0,i.wg)(),(0,i.iD)("div",it,[(0,i._)("div",lt,[(0,i._)("img",{src:e.img,alt:"",class:"p-2 lg:p-4"},null,8,ot),(0,i._)("div",rt,[(0,i._)("button",{onClick:s[0]||(s[0]=e=>t("closeModal")),type:"button",class:"w-16"},"Close")])])]))}};const dt=(0,r.Z)(nt,[["__scopeId","data-v-7bdf3f3d"]]);var ct=dt;const pt={class:"relative max-w-7xl my-28"},mt={class:"relative flex flex-col text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto bg-clip-padding"},ut={class:"flex items-center justify-center p-6 space-x-2 border-t rounded-b border-greenv boder-2"};var vt={__name:"CvModal",emits:["closeCvModal"],setup(e,{emit:t}){return(e,a)=>((0,i.wg)(),(0,i.iD)("div",pt,[(0,i._)("div",mt,[(0,i.Uk)(" Coming Soon "),(0,i._)("div",ut,[(0,i._)("button",{onClick:a[0]||(a[0]=e=>t("closeCvModal")),type:"button",class:"w-16"},"Close")])])]))}};const gt=(0,r.Z)(vt,[["__scopeId","data-v-fb471f4c"]]);var xt=gt;const ht=e=>((0,i.dD)("data-v-65298f2a"),e=e(),(0,i.Cn)(),e),ft=ht((()=>(0,i._)("a",{href:"#",id:"top",class:"fixed bottom-0 right-0 z-50 p-4 pr-0 text-xl font-bold text-black sm:text-3xl"},"⇧",-1))),bt={id:"home",class:"relative pb-12 -mt-40 pt-36"},wt={class:"md:h-[800px]"},yt=(0,i.uE)('<img src="img/profile3.png" alt="" class="absolute right-0 z-0 hidden md:block top-72 sepia" data-v-65298f2a><div class="p-8 text-white md:text-black md:w-2/5 md:mt-28" data-v-65298f2a><h1 class="pb-2 text-xl font-bold" data-v-65298f2a>Hi There,</h1><h3 class="pb-2 text-3xl font-bold" data-v-65298f2a>I&#39;m Viktoria Bors-Pajuste</h3><ul class="pb-4" data-v-65298f2a><li class="text-lg font-bold tracking-wide" data-v-65298f2a>FrontEnd Developer</li><li data-v-65298f2a>Geologist and Environmental Engineer</li><li data-v-65298f2a>Chemist and Lab Technician</li><li data-v-65298f2a>Wife and Mom</li></ul><p class="pb-2 text-justify" data-v-65298f2a>What does a highly educated person do, who heard enough of gaga and played way too much peekaboo?? Fell in love with WEB DEVELOPMENT.</p><p data-v-65298f2a>I am a self-taught/bootcamper web developer, focused on frontend technologies.</p></div>',2),_t={class:"flex flex-col items-center justify-center gap-2 sm:inline-block"},kt={href:"#contact"},St=ht((()=>(0,i._)("div",{id:"scroll",class:"absolute hidden font-bold md:block text-brownd left-[120px] top-[850px] xl:left-[260px]"},"Scroll Down",-1))),jt=ht((()=>(0,i._)("div",{class:"absolute hidden border-l-2 md:block top-[880px] left-[180px] h-[300px] xl:left-[300px] border-brownd"},null,-1))),Ct={id:"skills",class:"relative mb-12"},Dt=ht((()=>(0,i._)("h1",{class:"px-12 pt-4 text-xl font-bold"},".stacks",-1))),Wt=ht((()=>(0,i._)("div",{class:"vl absolute hidden border-l-2 md:block top-[570px] right-[180px] xl:right-[300px] h-[120px] border-greenv"},null,-1))),At={id:"about",class:"relative pb-10 mt-24 bg-greenv md:h-[700px] xl:h-[600px]"},It=ht((()=>(0,i._)("div",{class:"vl absolute hidden border-l-2 z-10 md:block top-[0px] md:right-[180px] xl:right-[300px] md:h-[550px] xl:h-[100px] border-white"},null,-1))),zt=ht((()=>(0,i._)("h1",{class:"px-12 pt-6 pb-2 text-xl font-bold text-right text-white md:pb-12 md:pt-12"},".who am i",-1))),Tt=ht((()=>(0,i._)("div",{class:"vl absolute hidden border-l-2 md:block md:top-[630px] xl:top-[450px] xl:h-[150px] xl:left-[300px] left-[250px] md:h-[150px] border-white"},null,-1))),Et={id:"experiences",class:"relative mt-8 min-[800px]:h-[800px]"},Mt=ht((()=>(0,i._)("div",{class:"absolute hidden border-l-2 md:block md:-mt-[40px] xl:-mt-[50px] md:top-[0px] xl:h-[130px] xl:left-[300px] left-[250px] md:h-[120px] border-greenv"},null,-1))),Ht=ht((()=>(0,i._)("h1",{class:"px-12 py-4 text-xl font-bold"},".experiences",-1))),Jt=ht((()=>(0,i._)("div",{class:"vl absolute hidden border-l-2 md:block md:-mt-[25px] min-[800px]:-mt-[44px] min-[800px]:top-[710px] h-[130px] max-[800px]:h-[160px] xl:right-[300px] right-[250px] border-greenv"},null,-1))),Bt={id:"projects",class:"bg-brownl md:h-[850px] relative py-12"},Ut=ht((()=>(0,i._)("div",{class:"vl absolute hidden border-l-2 md:block md:-mt-[45px] min-[800px]:mt-[0px] min-[800px]:top-[0px] h-[170px] min-[800px]:h-[110px] xl:right-[300px] right-[250px] border-white"},null,-1))),qt=ht((()=>(0,i._)("h1",{class:"px-12 pt-2 text-xl font-bold text-right text-black"},".projects",-1))),Ot=ht((()=>(0,i._)("div",{class:"vl absolute hidden border-l-2 md:block md:-mt-[55px] min-[800px]:top-[700px] h-[90px] min-[800px]:h-[205px] xl:right-[300px] right-[250px] border-white"},null,-1))),Nt={id:"education",class:"md:h-[750px] lg:h-[650px] relative"},Vt=ht((()=>(0,i._)("div",{class:"vl absolute hidden border-l-2 md:block md:-mt-[55px] min-[800px]:top-[0px] h-[100px] min-[800px]:h-[100px] xl:right-[300px] right-[250px] lg:-mt-[60px] border-brownl"},null,-1))),Lt=ht((()=>(0,i._)("h1",{class:"px-12 mt-12 text-xl font-bold text-left text-black"},".educations",-1))),Ft=ht((()=>(0,i._)("div",{class:"vl absolute hidden border-l-2 md:block md:-mt-[15px] min-[800px]:top-[585px] h-[158px] min-[800px]:h-[200px] xl:left-[300px] left-[250px] lg:-mt-[70px] border-brownl"},null,-1))),Pt={id:"contact",class:"relative py-12 bg-brownd"},Zt=ht((()=>(0,i._)("div",{class:"absolute hidden border-l-2 md:block md:top-0 h-[123px] xl:left-[300px] left-[250px] border-white"},null,-1))),Yt=ht((()=>(0,i._)("h1",{class:"px-12 py-4 text-xl font-bold text-right text-white"},".contact me",-1))),Gt={key:0,style:{"background-color":"rgba(240,240,240,0.8)"},class:"fixed top-0 left-0 right-0 z-50 flex justify-center w-full h-full overflow-x-hidden overflow-y-auto"},Rt={key:1,style:{"background-color":"rgba(240,240,240,0.8)"},class:"fixed top-0 left-0 right-0 z-50 flex justify-center w-full h-full overflow-x-hidden overflow-y-auto"};var Kt={__name:"App",props:["text","img"],setup(e){let t=(0,l.iH)(!1),a=(0,l.iH)(""),s=(0,l.iH)(!1);const o=e=>{t.value=!t.value,a.value=e},r=()=>t.value=!t.value,n=()=>s.value=!s.value;return(0,i.bv)((()=>{swal("Still under Construction!","Soon ready - Worth to wait","info")})),(e,d)=>((0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(S),ft,(0,i._)("section",bt,[(0,i._)("div",wt,[yt,(0,i._)("div",_t,[(0,i.Wm)(ke,{text:"see CV",class:"w-32 ml-8",onClick:d[0]||(d[0]=e=>(0,l.dq)(s)?s.value=!0:s=!0)}),(0,i._)("a",kt,[(0,i.Wm)(be,{text:"contact me",class:"w-32 m-2 ml-8 bg-white"})])]),St,jt])]),(0,i._)("section",Ct,[Dt,(0,i.Wm)(st),Wt]),(0,i._)("section",At,[It,(0,i._)("div",null,[zt,(0,i.Wm)(N,{onOpenModal:o})]),Tt]),(0,i._)("section",Et,[Mt,Ht,(0,i.Wm)(ie),Jt]),(0,i._)("section",Bt,[Ut,(0,i._)("div",null,[qt,(0,i.Wm)(Ne)]),Ot]),(0,i._)("section",Nt,[Vt,Lt,(0,i.Wm)(xe),Ft]),(0,i._)("section",Pt,[Zt,Yt,(0,i.Wm)(Ke)]),(0,l.SU)(t)?((0,i.wg)(),(0,i.iD)("div",Gt,[(0,i.Wm)(ct,{onCloseModal:r,img:(0,l.SU)(a)},null,8,["img"])])):(0,i.kq)("",!0),(0,l.SU)(s)?((0,i.wg)(),(0,i.iD)("div",Rt,[(0,i.Wm)(xt,{onCloseCvModal:n})])):(0,i.kq)("",!0)]))}};const Qt=(0,r.Z)(Kt,[["__scopeId","data-v-65298f2a"]]);var Xt=Qt;(0,s.ri)(Xt).mount("#app")}},t={};function a(s){var i=t[s];if(void 0!==i)return i.exports;var l=t[s]={exports:{}};return e[s](l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,s,i,l){if(!s){var o=1/0;for(c=0;c<e.length;c++){s=e[c][0],i=e[c][1],l=e[c][2];for(var r=!0,n=0;n<s.length;n++)(!1&l||o>=l)&&Object.keys(a.O).every((function(e){return a.O[e](s[n])}))?s.splice(n--,1):(r=!1,l<o&&(o=l));if(r){e.splice(c--,1);var d=i();void 0!==d&&(t=d)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[s,i,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,l,o=s[0],r=s[1],n=s[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(n)var c=n(a)}for(t&&t(s);d<o.length;d++)l=o[d],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(c)},s=self["webpackChunkvbpport"]=self["webpackChunkvbpport"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(1149)}));s=a.O(s)})();
//# sourceMappingURL=app.421fda04.js.map