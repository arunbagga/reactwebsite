(this.webpackJsonpmystore=this.webpackJsonpmystore||[]).push([[0],{41:function(e,a,t){e.exports=t(73)},46:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(7),c=t.n(r),s=(t(46),t(47),t(48),t(49),t(10)),m=t(11),o=t(16),i=t(17),u=t(8),d=t(3),g=t(4),E=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).toggleNav=n.toggleNav.bind(Object(u.a)(n)),n.toggleModal=n.toggleModal.bind(Object(u.a)(n)),n.handleLogin=n.handleLogin.bind(Object(u.a)(n)),n.state={isNavOpen:!1,isModalOpen:!1},n}return Object(m.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.s,{dark:!0,expand:"md"},l.a.createElement("div",{className:"container"},l.a.createElement(d.u,{onClick:this.toggleNav}),l.a.createElement(d.t,{className:"ml-0",href:"/"},l.a.createElement("img",{src:"assets/images/logo.png",height:"50",width:"130",alt:"MyStore"})),l.a.createElement(d.h,{isOpen:this.state.isNavOpen,navbar:!0},l.a.createElement(d.q,{navbar:!0,className:"ml-auto"},l.a.createElement(d.r,null,l.a.createElement(g.c,{className:"nav-link ml-4",to:"/home"},l.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),l.a.createElement(d.r,null,l.a.createElement(g.c,{className:"nav-link ml-4",to:"/aboutus"},l.a.createElement("span",{className:"fa fa-info fa-lg"})," AboutUs")),l.a.createElement(d.r,null,l.a.createElement(g.c,{className:"nav-link ml-4",to:"/menu"},l.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),l.a.createElement(d.r,null,l.a.createElement(g.c,{className:"nav-link ml-4",to:"/contactus"},l.a.createElement("span",{className:"fa fa-address-card fa-lg"})," ContactUs"))),l.a.createElement(d.q,{className:"ml-4",navbar:!0},l.a.createElement(d.r,null,l.a.createElement(d.c,{outline:!0,onClick:this.toggleModal},l.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),l.a.createElement(d.n,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},l.a.createElement(d.p,{toggle:this.toggleModal},"Login"),l.a.createElement(d.o,null,l.a.createElement(d.i,{onSubmit:this.handleLogin},l.a.createElement(d.j,null,l.a.createElement(d.m,{htmlFor:"username"},"Username"),l.a.createElement(d.k,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),l.a.createElement(d.j,null,l.a.createElement(d.m,{htmlFor:"password"},"Password"),l.a.createElement(d.k,{type:"text",id:"password",name:"password",innerRef:function(a){return e.password=a}})),l.a.createElement(d.j,{check:!0},l.a.createElement(d.m,{check:!0},l.a.createElement(d.k,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember Me")),l.a.createElement(d.c,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),t}(n.Component);var h=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-7 col-sm-5"},l.a.createElement("h5",null,"Our Address"),l.a.createElement("address",null,"177A, Bleeker Street",l.a.createElement("br",null),"Greenwich Village, New York",l.a.createElement("br",null),"United States of America",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",l.a.createElement("a",{href:"mailto:mystore@shop.net"},"mystore@shop.net"))),l.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},l.a.createElement("h5",null,"Links"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement(g.b,{to:"/home"},"Home")),l.a.createElement("li",null,l.a.createElement(g.b,{to:"/aboutus"},"About")),l.a.createElement("li",null,l.a.createElement(g.b,{to:"/menu"},"Shop")),l.a.createElement("li",null,l.a.createElement(g.b,{to:"/contactus"},"Help")))),l.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},l.a.createElement("div",{className:"text-center"},l.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},l.a.createElement("i",{className:"fa fa-google-plus"})),l.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},l.a.createElement("i",{className:"fa fa-facebook"})),l.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},l.a.createElement("i",{className:"fa fa-linkedin"})),l.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},l.a.createElement("i",{className:"fa fa-twitter"})),l.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},l.a.createElement("i",{className:"fa fa-youtube"})),l.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},l.a.createElement("i",{className:"fa fa-envelope-o"}))))),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-auto"},l.a.createElement("p",null,"\xa9 Copyright 2018 MyStore by Arun Bagga")))))},p=(t(59),t(40)),f=t(15),b=function(){return l.a.createElement(f.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6 col-md-3 mt-4 mb-4"},l.a.createElement(g.b,{to:"/men"},l.a.createElement(d.d,null,l.a.createElement(d.e,{src:"assets/images/men.png",alt:""}),l.a.createElement(d.g,{className:"cat-icon-text"},"MEN")))),l.a.createElement("div",{className:"col-6 col-md-3 mt-4 mb-4"},l.a.createElement(g.b,{to:"/men"},l.a.createElement(d.d,null,l.a.createElement(d.e,{src:"assets/images/women.png",alt:""}),l.a.createElement(d.g,{className:"cat-icon-text"},"WOMEN")))),l.a.createElement("div",{className:"col-6 col-md-3 mt-4 mb-4"},l.a.createElement(g.b,{to:"/men"},l.a.createElement(d.d,null,l.a.createElement(d.e,{src:"assets/images/kids.png",alt:""}),l.a.createElement(d.g,{className:"cat-icon-text"},"KIDS")))),l.a.createElement("div",{className:"col-6 col-md-3 mt-4 mb-4"},l.a.createElement(g.b,{to:"/men"},l.a.createElement(d.d,null,l.a.createElement(d.e,{src:"assets/images/furnish.png",alt:""}),l.a.createElement(d.g,{className:"cat-icon-text"},"HOME FURNISHINGS")))))))},v=function(){return l.a.createElement("div",{className:"promo-bg"},l.a.createElement("div",{className:"container"},l.a.createElement(p.Carousel,{infiniteLoop:!0},l.a.createElement("div",null,l.a.createElement("img",{src:"assets/images/buyonegetone.jpg",alt:""}),l.a.createElement("h2",{className:"mt-3"},"Buy 1 Get 1 Free Offer on our exclusive Brands in Men's Shirts")),l.a.createElement("div",null,l.a.createElement("img",{src:"assets/images/sportshoes.jpg",alt:""}),l.a.createElement("h2",{className:"mt-3"},"Get into your Gyms with these cool sport shoes at discount prices")),l.a.createElement("div",null,l.a.createElement("img",{src:"assets/images/newwomenfootwear.jpg",alt:""}),l.a.createElement("h2",{className:"mt-3"},"Step into these amazing new arrivals in women footwear")))))};var N=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.l,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-6 col-md-2"},l.a.createElement("img",{className:"img-fluid jumbo-img",src:"assets/images/manshop1.png",alt:""})),l.a.createElement("div",{className:"col-6 col-md-2"},l.a.createElement("img",{className:"img-fluid jumbo-img",src:"assets/images/womanshop1.png",alt:""})),l.a.createElement("div",{className:"col-12 col-md-4 mt-5"},l.a.createElement("h1",{className:"jumbo-text"},"Always in Style",l.a.createElement("br",null),l.a.createElement("img",{src:"assets/images/logo1.png",class:"jumbo-logo mt-2",alt:""}))),l.a.createElement("div",{className:"d-none d-md-block col-md-2"},l.a.createElement("img",{className:"img-fluid jumbo-img",src:"assets/images/womanshop2.png",alt:""})),l.a.createElement("div",{className:"d-none d-md-block col-md-2"},l.a.createElement("img",{className:"img-fluid jumbo-img",src:"assets/images/manshop2.png",alt:""}))))),l.a.createElement(b,null),l.a.createElement(v,null))},k=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null),l.a.createElement(v,null))};function w(e){var a=e.apparel;return l.a.createElement(f.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%"}},l.a.createElement(d.d,{className:"card-text"},l.a.createElement(d.e,{src:"assets/images/"+a.image,alt:a.name}),l.a.createElement(d.g,null,a.category+" - "+a.name),l.a.createElement(d.f,null,a.price+"$")))}var y=function(e){var a=e.list.map((function(e){return l.a.createElement("div",{className:"col-6 col-md-3 mt-2 mb-2"},l.a.createElement("div",{key:e.id},l.a.createElement(w,{apparel:e})))}));return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(d.a,null,l.a.createElement(d.b,null,l.a.createElement(g.b,{to:"/menu"},"Menu")),l.a.createElement(d.b,{active:!0},e.category))),l.a.createElement("div",{className:"row"},a)))},j=[{id:0,name:"Ether Navy Blue",image:"men/ether_navyblue.jpg",color:["navy blue"],category:"Shirt",price:"15.99",description:"Navy blue anti-microbial corduroy shirt, has a button-down collar, a full button placket, long sleeves, a curved hemline"},{id:1,name:"Wrogn Casual Pink",image:"men/wrogn_pink_casual.jpg",color:["pink"],category:"Shirt",price:"18.99",description:"Pink solid casual shirt, has a mandarin collar, long sleeves, curved hem"},{id:2,name:"HighLander Check",image:"men/highlander_check.jpg",color:["navy blue","brown"],category:"Shirt",price:"12.99",description:"Navy blue and brown checked casual shirt, has a spread collar, button placket, 1 pocket, long sleeves with roll-up tab, curved hem"},{id:3,name:"HighLander White",image:"men/highlander_white.jpg",color:["white"],category:"Shirt",price:"11.99",description:"White and green printed casual shirt, has a spread collar, short sleeves, curved hem, one patch pocket"},{id:4,name:"Dillinger Rust Roundneck",image:"men/dillinger_rust_roundneck.jpg",color:["rust"],category:"T-Shirt",price:"9.99",description:"Rust solid T-shirt, has a round neck, long sleeves"},{id:5,name:"HighLander Charcoal Jeans",image:"men/highlander_jeans_grey.jpg",color:["Charcoal"],category:"Jeans",price:"17.99",description:"Charcoal dark wash 4-pocket mid-rise jeans, clean look with light fade, has a button and zip closure, waistband with belt loops sleeves"},{id:6,name:"Hangup Black Kurta",image:"men/hangup_black_kurta.jpg",color:["rust"],category:"Kurta Pajama",price:"15.99",description:"Black solid Pathani kurta with pyjama. Black knee length Pathani kurta, has a shirt collar, long sleeves, short button placket, curved hem, side slits. Black solid pyjama, drawstring closure"},{id:7,name:"HRX Blue Men N-Flux",image:"men/hrx_blue_flux.jpg",color:["Blue"],category:"Sports Shoes",price:"25.99",description:"The new HRX Performance running shoe from N-FLUX collection is the Balanced Cushioning shoe to get you on the road. This neutral running shoe places your heel and forefoot at the same distance from the ground to encourage proper, stable & low-impact ride throughout your run."}],O=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={men:j},n}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(g.f,null,l.a.createElement(g.e,{path:"/home",component:function(){return l.a.createElement(N,null)}}),l.a.createElement(g.e,{path:"/menu",component:k}),l.a.createElement(g.e,{path:"/men",component:function(){return l.a.createElement(y,{list:e.state.men,category:"Men"})}}),l.a.createElement(g.d,{to:"/home"})),l.a.createElement(h,null))}}]),t}(n.Component);t(72);var M=function(){return l.a.createElement(g.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.1aaa34ea.chunk.js.map