(this.webpackJsonpnomflix=this.webpackJsonpnomflix||[]).push([[0],{76:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/blackBG.152677e3.png"},77:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/noPosterBig.9fb7088f.jpg"},82:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/noPosterSmall.65e7269e.jpg"},83:function(e,t,n){"use strict";n.r(t);var r,a,i,c,o,s,l=n(0),u=n.n(l),d=n(35),p=n.n(d),b=n(9),j=n(10),g=n(12),h=n(11),x=n(16),m=n(4),v=n(8),O=n.n(v),f=n(13),_=n(36),y=n.n(_).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"1a7d44b3b1402c416b6ca1bafd522a1a",language:"en-US"}}),w=function(){return y.get("movie/now_playing")},k=function(){return y.get("movie/upcoming")},T=function(){return y.get("movie/popular")},S=function(e){return y.get("movie/".concat(e),{params:{append_to_response:"videos"}})},R=function(e){return y.get("search/movie",{params:{query:encodeURIComponent(e)}})},U=function(){return y.get("tv/top_rated")},z=function(){return y.get("tv/popular")},M=function(){return y.get("tv/airing_today")},C=function(e){return y.get("tv/".concat(e),{params:{append_to_response:"videos"}})},P=function(e){return y.get("search/tv",{params:{query:encodeURIComponent(e)}})},I=n(3),V=n(2),A=n(1),B=V.c.div(r||(r=Object(I.a)(["\n  :not(:last-child) {\n    margin-bottom: 80px;\n  }\n"]))),N=V.c.span(a||(a=Object(I.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 20px;\n  display: inline-block;\n"]))),q=V.c.div(i||(i=Object(I.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n  margin-top: 10px;\n"]))),D=function(e){var t=e.title,n=e.children;return Object(A.jsxs)(B,{children:[Object(A.jsx)(N,{children:t}),Object(A.jsx)(q,{children:n})]})},F=n(39),J=n.n(F),E=V.c.div(c||(c=Object(I.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),G=function(){return Object(A.jsx)(E,{children:Object(A.jsx)(J.a,{color:"#de3f47",size:80})})},L=n(15),H=n.n(L),K=V.c.div(o||(o=Object(I.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]))),Q=V.c.span(s||(s=Object(I.a)(["\n  color: ",";\n  font-weight: 700;\n"])),(function(e){return e.color}));K.propTypes={text:H.a.string.isRequired,color:H.a.string.isRequired};var W,X,Y,Z,$,ee,te,ne,re,ae,ie,ce,oe,se,le,ue,de,pe,be,je,ge,he,xe,me,ve,Oe,fe,_e=function(e){var t=e.text,n=e.color;return Object(A.jsx)(K,{children:Object(A.jsx)(Q,{color:n,children:t})})},ye=V.c.div(W||(W=Object(I.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]))),we=V.c.div(X||(X=Object(I.a)(["\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(5px);\n  opacity: 0.5;\n"])),(function(e){return e.bgImage})),ke=V.c.div(Y||(Y=Object(I.a)(["\n  display: flex;\n  position: relative;\n  z-index: 1;\n\n  width: 100%;\n  height: 100%;\n"]))),Te=V.c.div(Z||(Z=Object(I.a)(["\n  width: 30%;\n  height: 100%;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n\n  border-radius: 4px;\n"])),(function(e){return e.bgImage})),Se=V.c.div($||($=Object(I.a)(["\n  width: 70%;\n  margin-left: 10px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),Re=V.c.h3(ee||(ee=Object(I.a)(["\n  font-size: 2rem;\n  margin-bottom: 20px;\n"]))),Ue=V.c.div(te||(te=Object(I.a)(["\n  margin: 20px 0;\n"]))),ze=V.c.span(ne||(ne=Object(I.a)(["\n  margin: 0 4px;\n"]))),Me=V.c.span(re||(re=Object(I.a)(["\n  margin: 0 10px;\n"]))),Ce=V.c.p(ae||(ae=Object(I.a)(["\n  font-size: 1rem;\n  opacity: 0.7;\n  line-height: 1.5;\n  width: 50%;\n"]))),Pe=function(e){var t=e.result;e.error;return e.loading?Object(A.jsx)(G,{}):Object(A.jsxs)(ye,{children:[Object(A.jsx)(we,{bgImage:t.backdrop_path?"https://image.tmdb.org/t/p/original".concat(t.backdrop_path):n(76)}),Object(A.jsxs)(ke,{children:[Object(A.jsx)(Te,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/w300".concat(t.poster_path):n(77)}),Object(A.jsxs)(Se,{children:[Object(A.jsx)(Re,{children:t.original_title?t.original_title:t.original_name}),Object(A.jsxs)(Ue,{children:[Object(A.jsx)(ze,{children:t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)}),Object(A.jsx)(Me,{children:"\u2219"}),Object(A.jsx)(ze,{children:t.vote_average}),Object(A.jsx)(Me,{children:"\u2219"}),Object(A.jsxs)(ze,{children:[t.runtime?t.runtime:t.episode_run_time[0]," min"]}),Object(A.jsx)(Me,{children:"\u2219"}),Object(A.jsx)(ze,{children:t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")}))})]}),Object(A.jsx)(Ce,{children:t.overview})]})]})]})},Ie=function(e){Object(g.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={result:null,error:null,loading:!0},e.componentDidMount=Object(f.a)(O.a.mark((function t(){var n,r,a,i,c,o,s,l;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.props,r=n.match.params.id,a=n.history.push,i=n.location.pathname,e.isMovie=i.includes("/movie/"),c=parseInt(r),!Number.isNaN(c)){t.next=5;break}return t.abrupt("return",a("/"));case 5:if(o=null,t.prev=6,!e.isMovie){t.next=14;break}return t.next=10,S(c);case 10:s=t.sent,o=s.data,t.next=18;break;case 14:return t.next=16,C(c);case 16:l=t.sent,o=l.data;case 18:t.next=23;break;case 20:t.prev=20,t.t0=t.catch(6),e.setState({error:"Can't find anything by searching"});case 23:return t.prev=23,e.setState({loading:!1,result:o}),t.finish(23);case 26:case"end":return t.stop()}}),t,null,[[6,20,23,26]])}))),e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,r=e.loading;return Object(A.jsx)(Pe,{result:t,error:n,loading:r})}}]),n}(u.a.Component),Ve=Ie,Ae=V.c.div(ie||(ie=Object(I.a)(["\n  font-size: 12px;\n  width: 120px;\n  height: 100%;\n"]))),Be=V.c.div(ce||(ce=Object(I.a)(["\n  background-image: url(",");\n\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity linear 0.1s;\n"])),(function(e){return e.bgUrl})),Ne=V.c.span(oe||(oe=Object(I.a)(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n\n  display: flex;\n  justify-content: space-between;\n\n  padding: 0 10px 10px;\n  opacity: 0;\n  transition: opacity linear 0.1s;\n"]))),qe=V.c.span(se||(se=Object(I.a)(["\n  text-align: justify;\n  font-size: 4px;\n"]))),De=V.c.span(le||(le=Object(I.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]))),Fe=V.c.span(ue||(ue=Object(I.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]))),Je=V.c.div(de||(de=Object(I.a)(["\n  position: relative;\n  width: 120px;\n  height: 180px;\n  margin-bottom: 5px;\n\n  background-color: #2c3e50;\n\n  &:hover {\n    "," {\n      opacity: 0.4;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"])),Be,Ne),Ee=function(e){var t=e.imageUrl,r=e.title,a=e.id,i=e.rating,c=e.year,o=e.isMovie,s=void 0!==o&&o;return Object(A.jsx)(x.b,{to:s?"/movie/".concat(a):"/show/".concat(a),children:Object(A.jsxs)(Ae,{children:[Object(A.jsxs)(Je,{children:[Object(A.jsx)(Be,{bgUrl:t?"https://image.tmdb.org/t/p/w200".concat(t):n(82)}),Object(A.jsxs)(Ne,{children:[Object(A.jsx)(qe,{role:"img","aria-label":"rating",children:"\u2b50\ufe0f".repeat(Math.round(i/2))}),Object(A.jsxs)("span",{children:[i," / 10"]})]})]}),Object(A.jsx)(De,{children:r.length>18?"".concat(r.substring(0,18),"..."):r}),Object(A.jsx)(Fe,{children:c})]})})},Ge=V.c.div(pe||(pe=Object(I.a)(["\n  padding: 20px;\n"]))),Le=function(e){var t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.error;return e.loading?Object(A.jsx)(G,{}):Object(A.jsxs)(Ge,{children:[t&&t.length>0&&Object(A.jsx)(D,{title:"Now Playing",children:t.map((function(e){return Object(A.jsx)(Ee,{title:e.original_title,imageUrl:e.poster_path,id:e.id,rating:e.vote_average,isMovie:!0,year:e.release_date&&e.release_date.substring(.4)},e.original_title)}))}),n&&n.length>0&&Object(A.jsx)(D,{title:"Upcoming movies",children:n.map((function(e){return Object(A.jsx)(Ee,{title:e.original_title,imageUrl:e.poster_path,id:e.id,rating:e.vote_average,isMovie:!0,year:e.release_date&&e.release_date.substring(.4)},e.original_title+e.id)}))}),r&&r.length>0&&Object(A.jsx)(D,{title:"Popular movies",children:r.map((function(e){return Object(A.jsx)(Ee,{title:e.original_title,imageUrl:e.poster_path,id:e.id,rating:e.vote_average,isMovie:!0,year:e.release_date&&e.release_date.substring(.4)},e.original_title+"key")}))},"2"),a&&Object(A.jsx)(_e,{text:a,color:"##74c3c"})]})},He=function(e){Object(g.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!1},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(f.a)(O.a.mark((function e(){var t,n,r,a,i,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({loading:!0}),e.next=4,w();case 4:return t=e.sent,n=t.data.results,e.next=8,k();case 8:return r=e.sent,a=r.data.results,e.next=12,T();case 12:i=e.sent,c=i.data.results,this.setState({nowPlaying:n,upcoming:a,popular:c}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),this.setState({error:"Can't find movie information"});case 20:return e.prev=20,this.setState({loading:!1}),e.finish(20);case 23:case"end":return e.stop()}}),e,this,[[0,17,20,23]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.error,i=e.loading;return Object(A.jsx)(Le,{nowPlaying:t,upcoming:n,popular:r,error:a,loading:i})}}]),n}(u.a.Component),Ke=He,Qe=V.c.div(be||(be=Object(I.a)(["\n  padding: 20px;\n"]))),We=V.c.form(je||(je=Object(I.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]))),Xe=V.c.input(ge||(ge=Object(I.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]))),Ye=function(e){var t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.error,i=e.loading,c=e.handleSubmit,o=e.updateTerm;return Object(A.jsxs)(Qe,{children:[Object(A.jsx)(We,{onSubmit:c,children:Object(A.jsx)(Xe,{placeholder:"Search Movies or TV shows...",value:r,onChange:o})}),i?Object(A.jsx)(G,{}):Object(A.jsxs)(A.Fragment,{children:[t&&t.length>0&&Object(A.jsx)(D,{title:"Movie Results",children:t.map((function(e){return Object(A.jsx)(Ee,{title:e.original_title,imageUrl:e.poster_path,id:e.id,rating:e.vote_average,isMovie:!0,year:e.release_date&&e.release_date.substring(.4)},e.original_title)}))}),n&&n.length>0&&Object(A.jsx)(D,{title:"TV Show Results",children:n.map((function(e){return Object(A.jsx)(Ee,{title:e.original_name,imageUrl:e.poster_path,id:e.id,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.original_name+"key")}))}),a&&Object(A.jsx)(_e,{text:a,color:"#e74c3c"}),n&&t&&0===n.length&&0===t.length&&Object(A.jsx)(_e,{text:"Nothing found",color:"#7f8c8d"})]})]})},Ze=function(e){Object(g.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={movieResults:null,tvResults:null,searchTerm:"",error:null,loading:!1},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchTerm&&e.searchByTerm()},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.searchByTerm=Object(f.a)(O.a.mark((function t(){var n,r,a,i,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,e.setState({loading:!0}),t.prev=2,t.next=5,R(n);case 5:return r=t.sent,a=r.data.results,t.next=9,P(n);case 9:i=t.sent,c=i.data.results,e.setState({movieResults:a,tvResults:c}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),e.setState({error:"Can't find results"});case 17:return t.prev=17,e.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,14,17,20]])}))),e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,r=e.error,a=e.loading,i=e.searchTerm;return Object(A.jsx)(Ye,{movieResults:t,tvResults:n,error:r,loading:a,searchTerm:i,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(u.a.Component),$e=Ze,et=V.c.div(he||(he=Object(I.a)(["\n  padding: 20px;\n"]))),tt=function(e){var t=e.topRated,n=e.popular,r=e.airingToday,a=e.error;return e.loading?Object(A.jsx)(G,{}):Object(A.jsxs)(et,{children:[t&&t.length>0&&Object(A.jsx)(D,{title:"TV top Rated",children:t.map((function(e){return Object(A.jsx)(Ee,{title:e.original_name,imageUrl:e.poster_path,id:e.id,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.original_name+e.poster_path)}))}),n&&n.length>0&&Object(A.jsx)(D,{title:"TV popular",children:n.map((function(e){return Object(A.jsx)(Ee,{title:e.original_name,imageUrl:e.poster_path,id:e.id,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.original_name+e.vote_average)}))}),r&&r.length>0&&Object(A.jsx)(D,{title:"Airing Today",children:r.map((function(e){return Object(A.jsx)(Ee,{title:e.original_name,imageUrl:e.poster_path,id:e.id,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.original_name+e.id)}))}),a&&Object(A.jsx)(_e,{text:a})]})},nt=function(e){Object(g.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={topRated:null,popular:null,airingToday:null,error:null,loading:!1},e.componentDidMount=Object(f.a)(O.a.mark((function t(){var n,r,a,i,c,o;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setState({loading:!0}),t.next=4,U();case 4:return n=t.sent,r=n.data.results,t.next=8,z();case 8:return a=t.sent,i=a.data.results,t.next=12,M();case 12:c=t.sent,o=c.data.results,e.setState({topRated:r,popular:i,airingToday:o}),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),e.setState({error:"Can't find TV information"});case 20:return t.prev=20,e.setState({loading:!1}),t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[0,17,20,23]])}))),e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,r=e.airingToday,a=e.error,i=e.loading;return Object(A.jsx)(tt,{topRated:t,popular:n,airingToday:r,error:a,loading:i})}}]),n}(u.a.Component),rt=nt,at=V.c.header(xe||(xe=Object(I.a)(["\n  background-color: rgba(20, 20, 20, 0.8);\n  color: #fff;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n\n  display: flex;\n  align-items: center;\n  padding: 0px 10px;\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]))),it=V.c.ul(me||(me=Object(I.a)(["\n  display: flex;\n  list-style: none;\n"]))),ct=V.c.li(ve||(ve=Object(I.a)(["\n  width: 80px;\n  height: 50px;\n  transition: border-bottom 0.5s ease-in-out;\n  border-bottom: 5px solid\n    ",";\n"])),(function(e){return e.current?"#3498db":"transparent"})),ot=Object(V.c)(x.b)(Oe||(Oe=Object(I.a)(["\n  height: 50px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  color: #fff;\n"]))),st=Object(m.g)((function(e){var t=e.location.pathname;return Object(A.jsx)(at,{children:Object(A.jsxs)(it,{children:[Object(A.jsx)(ct,{current:"/"===t,children:Object(A.jsx)(ot,{to:"/",children:"Movies"})}),Object(A.jsx)(ct,{current:"/tv"===t,children:Object(A.jsx)(ot,{to:"/tv",children:"TV"})}),Object(A.jsx)(ct,{current:"/search"===t,children:Object(A.jsx)(ot,{to:"/search",children:"Search"})})]})})})),lt=function(){return Object(A.jsxs)(x.a,{basename:"/nomflix",children:[Object(A.jsx)(st,{}),Object(A.jsxs)(m.d,{children:[Object(A.jsx)(m.b,{path:"/search",children:Object(A.jsx)($e,{})}),Object(A.jsx)(m.b,{path:"/tv",component:rt}),Object(A.jsx)(m.b,{path:"/movie/:id",component:Ve}),Object(A.jsx)(m.b,{path:"/show/:id",component:Ve}),Object(A.jsx)(m.b,{path:"/",exact:!0,component:Ke}),Object(A.jsx)(m.a,{from:"*",to:"/"})]})]})},ut=n(41),dt=Object(V.a)(fe||(fe=Object(I.a)(["\n  ",";\n\n  html,body{\n    width:100%;\n    height:100%;\n  }\n\n  body {\n    background-color: #303030;\n    color: #e6e6e6;\n    padding-top:50px;\n  }\n\n  a{\n    text-decoration:none;\n    color:inherit;\n  }\n\n    *{\n      box-sizing:border-box;\n    }\n  "])),ut.a),pt=function(e){Object(g.a)(n,e);var t=Object(h.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(lt,{}),Object(A.jsx)(dt,{})]})}}]),n}(l.Component),bt=pt;p.a.render(Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(bt,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.5455e0da.chunk.js.map