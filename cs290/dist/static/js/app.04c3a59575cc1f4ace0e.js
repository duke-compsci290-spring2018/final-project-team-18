webpackJsonp([1],{"30gv":function(t,e){},"9rXJ":function(t,e){},Ehbo:function(t,e){},LU3t:function(t,e,s){t.exports=s.p+"static/img/profilepic.f5ef426.png"},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i=s("Sazm"),n=s.n(i),o=s("2ahc"),r=s.n(o),l=n.a.initializeApp({apiKey:"AIzaSyCga8HBDnUCgjS7utee6JzcL_mytgBblOE",authDomain:"cs290-62ce7.firebaseapp.com",databaseURL:"https://cs290-62ce7.firebaseio.com",projectId:"cs290-62ce7",storageBucket:"cs290-62ce7.appspot.com",messagingSenderId:"143036517691"}).database(),c={name:"Login",created:function(){n.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=n.a.auth().currentUser.email)},methods:{signIn:function(t){this.setUser({name:t.displayName,email:t.email,uid:t.uid,isAnonymous:t.isAnonymous})},refresh:function(){window.location.reload()},signOut:function(){n.a.auth().signOut(),this.setUser(null)},signUp:function(){n.a.auth().signInAnonymously()},setUser:function(t){this.user=t}},mounted:function(){var t=this,e={credentialHelper:r.a.auth.CredentialHelper.NONE,signInFlow:"popup",signInSuccessUrl:"/home",signInOptions:[{provider:n.a.auth.EmailAuthProvider.PROVIDER_ID,requireDisplayName:!0}]};new firebaseui.auth.AuthUI(n.a.auth()).start("#firebaseui-auth-container",e),n.a.auth().onAuthStateChanged(function(e){e&&t.signIn(e)})}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"bg"}},[e("div",{attrs:{id:"bgq"}}),this._v(" "),e("div",{attrs:{id:"bx"}},[e("div",{attrs:{id:"firebaseui-auth-container"}}),this._v(" "),this.user?e("p"):this._e(),e("p",{directives:[{name:"if-else",rawName:"v-if-else"}]},[this._v("You don't have an account? "),e("router-link",{staticClass:"mock",attrs:{to:"/signup"}},[this._v("Browse as Guest")])],1)])])},staticRenderFns:[]};var v=s("VU/8")(c,u,!1,function(t){s("Wtwm")},null,null).exports,_={name:"app",data:function(){return{images:[],user:null}},methods:{logout:function(){n.a.auth().signOut().then(function(){h("router-link",{class:"link",attrs:{to:"/login"}},["Home"])})},getUser:function(){return this.user},setUser:function(t){this.user=t}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var m=s("VU/8")(_,d,!1,function(t){s("30gv")},null,null).exports,f=s("/ocq"),p={name:"home",data:function(){return{msg:"CompSci Latinx and Black Students at Duke"}},methods:{logout:function(){var t=this;n.a.auth().signOut().then(function(){t.$router.replace("login")})}}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"nav"},[s("router-link",{staticClass:"link",attrs:{to:"/home"}},[t._v("Home")]),t._v(" "),s("router-link",{staticClass:"link",attrs:{to:"/dashboard"}},[t._v("Dashboard")]),t._v(" "),s("router-link",{staticClass:"link",attrs:{to:"/courses"}},[t._v("Courses")]),t._v(" "),s("router-link",{staticClass:"link",attrs:{to:"/profiles"}},[t._v("Profiles")]),t._v(" "),s("router-link",{staticClass:"link",attrs:{to:"/myaccount"}},[t._v("My Account")]),t._v(" "),s("button",{on:{click:t.logout}},[t._v("Logout")])],1),t._v(" "),s("hr"),t._v(" "),s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h3",[t._v("Welcome to a page made by Duke students, for Duke students.")]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3 col-md-4 col-sm-6"},[a("div",{staticClass:"article"},[a("h4",[t._v("Here you can do things like:")]),t._v(" "),a("ul",[a("li",[t._v("Get advice from other students.")]),t._v(" "),a("li",[t._v("Post questions, tips or anything really.")]),t._v(" "),a("li",[t._v("Browse through other students who are like you!")])])]),t._v(" "),a("div",{staticClass:"article"},[a("h4",[t._v("Spaces at Duke")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://studentaffairs.duke.edu/cma/about-us/facilities"}},[t._v("CMA La Casa")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://studentaffairs.duke.edu/mlw"}},[t._v("Mary Lou Williams Center for Black Culture")])])]),t._v(" "),a("div",{staticClass:"article"},[a("h4",[t._v("Duke Computer Science")]),t._v(" "),a("p",[t._v("Graduation Requirements!")]),t._v(" "),a("ul",[a("li",[t._v("Math 111L *,")]),t._v(" "),a("li",[t._v("Math 112L *,")]),t._v(" "),a("li",[t._v("CompSci 101L *,")]),t._v(" "),a("li",[t._v("CompSci 201D,")]),t._v(" "),a("li",[t._v("CompSci 230D,")]),t._v(" "),a("li",[t._v("CompSci 250D,")]),t._v(" "),a("li",[t._v("CompSci 310,")]),t._v(" "),a("li",[t._v("CompSci 330,")]),t._v(" "),a("li",[t._v("3 or 5 CompSci electives, depending on whether it's a BS or BA")])]),t._v(" "),a("p",[t._v("* Pre-requisite")]),t._v(" "),a("button",{staticClass:"btn btn-primary"},[a("a",{attrs:{href:"https://www.cs.duke.edu/"}},[t._v("Visit website")])])])]),t._v(" "),a("img",{attrs:{src:s("d46q"),width:"70%"}})])}]};var g=s("VU/8")(p,C,!1,function(t){s("a8p5")},"data-v-b58191e8",null).exports,b=l.ref("posts"),k={name:"Dashboard",firebase:{posts:b},data:function(){return{newPost:{title:"",body:""},title:"Welcome to your feed!"}},methods:{logout:function(){var t=this;n.a.auth().signOut().then(function(){t.$router.replace("login")})},addPost:function(){b.push(this.newPost),this.newPost.title="",this.newPost.body=""},deletePost:function(t){b.child(t).remove()}}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dashboard"},[s("div",{staticClass:"nav"},[s("router-link",{staticClass:"link",attrs:{to:"/home"}},[t._v("Home")]),t._v(" "),s("router-link",{staticClass:"link",attrs:{to:"/dashboard"}},[t._v("Dashboard")]),t._v(" "),s("router-link",{staticClass:"link",attrs:{to:"/courses"}},[t._v("Courses")]),t._v(" "),s("router-link",{staticClass:"link",attrs:{to:"/profiles"}},[t._v("Profiles")]),t._v(" "),s("router-link",{staticClass:"link",attrs:{to:"/myaccount"}},[t._v("My Account")]),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("Logout")])],1),t._v(" "),s("hr"),s("h1",[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"newPost"},[s("h3",[t._v("Add a New Post")]),t._v(" "),s("label",{attrs:{for:"title"}},[t._v("Title: ")]),t._v(" "),s("br"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newPost.title,expression:"newPost.title"}],attrs:{id:"title",type:"text"},domProps:{value:t.newPost.title},on:{input:function(e){e.target.composing||t.$set(t.newPost,"title",e.target.value)}}}),t._v(" "),s("br"),t._v(" "),s("label",{attrs:{for:"body"}},[t._v("Body: ")]),t._v(" "),s("br"),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newPost.body,expression:"newPost.body"}],attrs:{id:"body",type:"text"},domProps:{value:t.newPost.body},on:{input:function(e){e.target.composing||t.$set(t.newPost,"body",e.target.value)}}}),t._v(" "),s("br"),t._v(" "),s("button",{staticClass:"btn btn-primary",on:{click:t.addPost}},[t._v("+ New Post")])]),t._v(" "),s("h2",[t._v("Posts made by other students like you!")]),t._v(" "),t._l(t.posts,function(e){return s("div",{key:e,staticClass:"col-lg-3 col-md-4 col-sm-6"},[s("div",{staticClass:"thumbnail"},[s("div",{staticClass:"caption"},[s("h3",[t._v(t._s(e.title))]),t._v(" "),s("p",[t._v(t._s(e.body))]),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:function(s){t.deletePost(e[".key"])}}},[t._v("Delete")])])])])})],2)},staticRenderFns:[]};var y=s("VU/8")(k,w,!1,function(t){s("UPdb")},"data-v-4aa21c2c",null).exports,S=s("1mcD"),P=s.n(S);a.a.use(P.a);var L={name:"Profiles",firebase:{profiles:l.ref("profiles")},data:function(){return{profiles:{},search:""}},computed:{filteredList:function(){var t=this;return this.profiles.filter(function(e){return e.title.toLowerCase().indexOf(t.search.toLowerCase())>-1||e.major.toLowerCase().indexOf(t.search.toLowerCase())>-1||e.firstname.toLowerCase().indexOf(t.search.toLowerCase())>-1||e.lastname.toLowerCase().indexOf(t.search.toLowerCase())>-1||e.class.toLowerCase().indexOf(t.search.toLowerCase())>-1})}},methods:{logout:function(){var t=this;n.a.auth().signOut().then(function(){t.$router.replace("login")})}}},D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profiles"},[s("div",{staticClass:"nav"},[s("router-link",{staticClass:"link",attrs:{to:"/home"}},[t._v("Home")]),t._v(" "),s("router-link",{staticClass:"link",attrs:{to:"/dashboard"}},[t._v("Dashboard")]),t._v(" "),s("router-link",{staticClass:"link",attrs:{to:"/courses"}},[t._v("Courses")]),t._v(" "),s("router-link",{staticClass:"link",attrs:{to:"/profiles"}},[t._v("Profiles")]),t._v(" "),s("router-link",{staticClass:"link",attrs:{to:"/myaccount"}},[t._v("My Account")]),t._v(" "),s("button",{on:{click:t.logout}},[t._v("Logout")])],1),t._v(" "),s("div",{attrs:{id:"sp"}}),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"container"},[s("p",[t._v("Search profiles to find what you're looking for: ")]),t._v(" "),s("input",{staticClass:"search-wrapper"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{id:"searchme",type:"text",placeholder:"Search profiles..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"wrapper"},t._l(t.filteredList,function(e){return s("div",{staticClass:"caption"},[s("h3",[t._v(t._s(e.firstname)+" "+t._s(e.lastname))]),t._v(" "),s("div",{attrs:{id:"description"}},[s("h4",[t._v(" Major ")]),t._v(t._s(e.major)+"\n            "),s("h4",[t._v(" Role ")]),t._v(t._s(e.role)+"\n            "),s("h4",[t._v(" Message ")]),t._v(' "'+t._s(e.title)+'"\n           '),s("h4",[t._v(" Class of "+t._s(e.class))])]),t._v(" "),s("a",{attrs:{id:"b",href:""+e.contact}},[t._v("Contact ")])])}))])},staticRenderFns:[]};var A=s("VU/8")(L,D,!1,function(t){s("Ehbo")},"data-v-2ee6dee6",null).exports,U=n.a.auth().currentUser,x={name:"MyAccount",data:function(){return{title:"My Account",description:"Change your settings here.",email:U.email}},methods:{logout:function(){var t=this;n.a.auth().signOut().then(function(){t.$router.replace("login")})},changeBackgroundImage:function(){var t=document.getElementById("files");this.newImageTitle&&t.files.length>0&&this.onSubmit(this.newImageTitle,t.files[0]),this.newImageTitle="",t.value=""},request:function(){alert("Thank you for you request. An email has been sent, and we will get back to you shortly.")}}},q={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"myaccount"},[a("div",{staticClass:"nav"},[a("router-link",{staticClass:"link",attrs:{to:"/home"}},[t._v("Home")]),t._v(" "),a("router-link",{staticClass:"link",attrs:{to:"/dashboard"}},[t._v("Dashboard")]),t._v(" "),a("router-link",{staticClass:"link",attrs:{to:"/courses"}},[t._v("Courses")]),t._v(" "),a("router-link",{staticClass:"link",attrs:{to:"/profiles"}},[t._v("Profiles")]),t._v(" "),a("router-link",{staticClass:"link",attrs:{to:"/myaccount"}},[t._v("My Account")]),t._v(" "),a("button",{on:{click:t.logout}},[t._v("Logout")])],1),t._v(" "),a("div",{attrs:{id:"sp"}}),t._v(" "),a("hr"),t._v(" "),a("h1",[t._v(t._s(t.title))]),t._v(" "),a("br"),t._v(" "),a("h3",[t._v(t._s(t.description))]),t._v(" "),a("img",{attrs:{src:s("LU3t"),width:"10%",alt:"default profile picture"}}),t._v(" "),a("br"),t._v(" "),a("div",{attrs:{id:"photo"}},[a("h3",[t._v("Change Photo")]),t._v(" "),a("div",{staticClass:"form-inline",on:{submit:function(e){return e.preventDefault(),t.addImage(e)}}},[t._m(0),t._v(" "),a("input",{staticClass:"btn btn-default",attrs:{type:"submit",value:"Add"}})])]),t._v(" "),a("div",{attrs:{id:"email"}},[a("h3",[t._v("Your email: "+t._s(t.email))]),t._v(" "),a("button",{on:{click:t.updateEmail}},[t._v("Change my email")])]),t._v(" "),a("div",{attrs:{id:"admin"}},[a("h3",[t._v("Request Admin Control")]),t._v(" "),a("button",{on:{click:t.request}},[t._v("Request")])]),t._v(" "),a("div",{attrs:{id:"profile"}},[a("h3",[t._v("Edit Profile")]),t._v(" "),a("button",{on:{click:function(t){}}},[t._v("Edit Profile")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("input",{staticClass:"form-control",attrs:{type:"file",id:"files",name:"files[]"}})])}]};var E=s("VU/8")(x,q,!1,function(t){s("fI3q")},"data-v-de8facd8",null).exports,I={name:"home",data:function(){return{msg:"CompSci Latinx and Black Students at Duke"}},methods:{logout:function(){var t=this;n.a.auth().signOut().then(function(){t.$router.replace("login")})},refresh:function(){window.location.reload()}}},$={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"nav"},[s("button",{on:{click:t.refresh}},[t._v("Sign Up")])]),t._v(" "),s("hr"),t._v(" "),s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h3",[t._v("Welcome to a page made by Duke students, for Duke students.")]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3 col-md-4 col-sm-6"},[a("div",{staticClass:"article"},[a("h4",[t._v("Here you can do things like:")]),t._v(" "),a("ul",[a("li",[t._v("Get advice from other students.")]),t._v(" "),a("li",[t._v("Post questions, tips or anything really.")]),t._v(" "),a("li",[t._v("Browse through other students who are like you!")])])]),t._v(" "),a("div",{staticClass:"article"},[a("h4",[t._v("Spaces at Duke")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://studentaffairs.duke.edu/cma/about-us/facilities"}},[t._v("CMA La Casa")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://studentaffairs.duke.edu/mlw"}},[t._v("Mary Lou Williams Center for Black Culture")])])]),t._v(" "),a("div",{staticClass:"article"},[a("h4",[t._v("Duke Computer Science")]),t._v(" "),a("p",[t._v("Graduation Requirements!")]),t._v(" "),a("ul",[a("li",[t._v("Math 111L *,")]),t._v(" "),a("li",[t._v("Math 112L *,")]),t._v(" "),a("li",[t._v("CompSci 101L *,")]),t._v(" "),a("li",[t._v("CompSci 201D,")]),t._v(" "),a("li",[t._v("CompSci 230D,")]),t._v(" "),a("li",[t._v("CompSci 250D,")]),t._v(" "),a("li",[t._v("CompSci 310,")]),t._v(" "),a("li",[t._v("CompSci 330,")]),t._v(" "),a("li",[t._v("3 or 5 CompSci electives, depending on whether it's a BS or BA")])]),t._v(" "),a("p",[t._v("* Pre-requisite")]),t._v(" "),a("button",{staticClass:"btn btn-primary"},[a("a",{attrs:{href:"https://www.cs.duke.edu/"}},[t._v("Visit website")])])])]),t._v(" "),a("img",{attrs:{src:s("d46q"),width:"70%"}})])}]};var M=s("VU/8")(I,$,!1,function(t){s("l67/")},"data-v-6e65dae0",null).exports,O={name:"Courses",data:function(){return{title:"Courses",description:"Reviews and advice!",courses:{1:{title:"CompSci 101",name:"Intro to Programming",teacher:"Susan Rodger"},2:{title:"CompSci 201",name:"Data Structures and Algorithms",teacher:"Owen Astrachan and Jeffrey Forbes"},6:{title:"CompSci 216",name:"Everything Data",teacher:""},3:{title:"CompSci 230",name:"Discrete Math for Computer Science",teacher:""},4:{title:"CompSci 250",name:"Computer Architecture",teacher:""},5:{title:"CompSci 290",name:"Individual Topics in Computer Science",teacher:""}}}},methods:{request:function(){alert("Thank you for you request. An email has been sent, and we will get back to you shortly.")}}},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"course"},[s("div",{staticClass:"nav"},[s("router-link",{staticClass:"link",attrs:{to:"/home"}},[t._v("Home")]),t._v(" "),s("router-link",{staticClass:"link",attrs:{to:"/dashboard"}},[t._v("Dashboard")]),t._v(" "),s("router-link",{staticClass:"link",attrs:{to:"/courses"}},[t._v("Courses")]),t._v(" "),s("router-link",{staticClass:"link",attrs:{to:"/profiles"}},[t._v("Profiles")]),t._v(" "),s("router-link",{staticClass:"link",attrs:{to:"/myaccount"}},[t._v("My Account")]),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("Logout")])],1),t._v(" "),s("div",{attrs:{id:"courses"}},[s("h1",[t._v(t._s(t.title))]),t._v(" "),s("h3",[t._v(t._s(t.description))]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6 col-md-4 col-lg-3"},[t._l(t.courses,function(e){return s("div",{staticClass:"course"},[s("h4",[t._v(t._s(e.title))]),t._v(" "),s("p",[t._v(t._s(e.name))]),t._v(" "),s("p",[t._v(t._s(e.teacher))]),t._v(" "),s("button",{staticClass:"btn btn-success",on:{click:e}},[t._v("View reviews!")])])}),t._v("cd \n    ")],2)]),t._v(" "),s("button",{staticClass:"btn btn-danger"},[t._v("Don't see your course? Add it!")])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"container"}},[e("h1",[this._v(" No reviews for this course")])])}]};var B=s("VU/8")(O,R,!1,function(t){s("9rXJ")},"data-v-3d3cafa6",null).exports;a.a.use(f.a);var H=new f.a({mode:"history",routes:[{path:"/login",name:"login",component:v},{path:"/home",name:"home",component:g},{path:"/dashboard",name:"Dashboard",component:y,meta:{requiresAuth:!0}},{path:"/profiles",name:"Profiles",component:A,meta:{requiresAuth:!0}},{path:"/myaccount",name:"My Account",component:E,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:v},{path:"/signup",name:"Sign Up",component:M},{path:"/courses",name:"Courses",component:B}]});a.a.use(f.a),a.a.use(P.a),new a.a({router:H,created:function(){var t=this;n.a.auth().onAuthStateChanged(function(e){e?t.$router.push("/home"):t.$router.push("/Login")})},el:"#app",render:function(t){return t(m)}})},UPdb:function(t,e){},Wtwm:function(t,e){},a8p5:function(t,e){},d46q:function(t,e,s){t.exports=s.p+"static/img/code.88537f3.jpg"},fI3q:function(t,e){},"l67/":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.04c3a59575cc1f4ace0e.js.map