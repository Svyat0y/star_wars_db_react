(this.webpackJsonpstar_wars_db=this.webpackJsonpstar_wars_db||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,r){},function(e,t,r){},,function(e,t,r){},,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),s=r(10),c=r.n(s),i=r(3),o=r(4),l=r(6),u=r(5),d=(r(15),r(16),r(0)),j=function(){return Object(d.jsxs)("div",{className:"header d-flex",children:[Object(d.jsx)("h3",{children:Object(d.jsx)("a",{href:"#",children:"Star Wars DB"})}),Object(d.jsxs)("ul",{className:"d-flex",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"People"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Planets"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Starships"})})]})]})},h=(r(18),r(2)),p=r.n(h),b=r(7),m=function(){function e(){var t=this;Object(i.a)(this,e),this._baseUrl="https://swapi.dev/api",this._baseImage="https://starwars-visualguide.com/assets/img",this.getResource=function(){var e=Object(b.a)(p.a.mark((function e(r){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._baseUrl).concat(r));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(r)+", received ".concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllPeople=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/people/").then((function(e){return e.results.map(t._transformPerson)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getPerson=function(){var e=Object(b.a)(p.a.mark((function e(r){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/people/".concat(r,"/")).then((function(e){return t._transformPerson(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllStarships=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/starships/").then((function(e){return e.results.map(t._transformStarship)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getStarship=function(){var e=Object(b.a)(p.a.mark((function e(r){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/starships/".concat(r,"/")).then((function(e){return t._transformStarship(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllPlanets=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/planets/").then((function(e){return e.results.map(t._transformPlanet)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getPlanet=function(){var e=Object(b.a)(p.a.mark((function e(r){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/planets/".concat(r)).then((function(e){return t._transformPlanet(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getPersonImage=function(e){var r=e.id;return"".concat(t._baseImage,"/characters/").concat(r,".jpg")},this.getPlanetImage=function(e){var r=e.id;return"".concat(t._baseImage,"/planets/").concat(r,".jpg")},this.getStarshipImage=function(e){var r=e.id;return"".concat(t._baseImage,"/starships/").concat(r,".jpg")},this._transformPlanet=function(e){return{id:t._extractId(e),name:e.name,population:e.population,rotationPeriod:e.rotation_period,diameter:e.diameter}},this._transformStarship=function(e){return{id:t._extractId(e),name:e.name,model:e.model,manufacturer:e.manufacturer,costInCredits:e.cost_in_credits,length:e.length,crew:e.crew,passengers:e.passengers,cargoCapacity:e.cargo_capacity}},this._transformPerson=function(e){return{id:t._extractId(e),name:e.name,gender:e.gender,birthYear:e.birth_year,eyeColor:e.eye_color}}}return Object(o.a)(e,[{key:"_extractId",value:function(e){return e.url.match(/\/([0-9]*)\/$/)[1]}}]),e}(),f=(r(20),function(){return Object(d.jsx)("div",{className:"loadingio-spinner-rolling-fvjbocgk5cr",children:Object(d.jsx)("div",{className:"ldio-gkt6bsphmz",children:Object(d.jsx)("div",{})})})}),O=(r(21),function(){return Object(d.jsxs)("div",{className:"error-indicator d-flex",children:[Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABcVBMVEUAAACUMUKVNESUNUaTNEWTNEWTNUWUNEWUNEWUNEWTNEWUNEWUNEWVNEWVNESUNUeWMkOUNUWVNEWUNEWTM0aVNUSSN0mVNUaUNEWUNEWUNEWVNESSNESWLUuUNESUNEWUNEafQECUNEaUNUWXNEaUMkaUNEWVNUaVM0SUNEWUM0WdO06UM0SVM0WSNkeVNUCUNEWUNEWVNEaUNESTMUWVMkSXOEiUNEWUNUSVNUSVK0CUNEWVNEWQN0OUNEaVNESUNEWAQED/AACUNEWZM02UNEaTNUaVM0SVNUaUNEaTNESSN0mUNEWUNUaZMzOUNEWVM0WUNEWTNkWUNEWVNEaXLkaUNEWUNEWXOUKUNEWVM0WUNkWSMkeUNEWUNUWUNEWUNEWVNUSUM0aTNUaTMkSUNEaUNESUNEWUNESPMECUNEWUNkOUNEWTNESUNUaTNEWZM0CUNEWVNEaUNUWVNUWSNUSUNEWUNEWTNESUNEUAAAAeSPByAAAAeXRSTlMAH155k63H4fjr07qiiWwrLn7O45pSDh2N3vuvMRGK97AIde4sTOJqeP2pDaTaLxjIwYRPGikg7FZlDNK2F8aoegQB2wpYhzxbko4c9j4Fnn3zNNS7FsuyG/FzUT3+jF3lwm5XR2Lya3AQ+ibqU6WmFNZx6TBESqdASVNu+gAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCRwPAQ3scZC+AAACoUlEQVRYw6WX+WPSMBTH6z11OhXva4hnFR0MdBsymGzshLmjKEMZG7svd3jmv7fJo23SJDQl35+S9/I+TV7SHIYh16nTZ86eO3+h6+Kly91XrvYY4XTt+g3EKnLz1m3V6Dt37yGR7j94qBL+6HEvkioaiHgSe4raKvqsbfzzFyhIXS/bxL8yA+NtvX4j635cJdzW23fC+L6E1yTZn0qnU/1JCaH3vSD+Q8T1Dww6xsEBMWGIj898dL3ZYc88nOWjc/mRT1x8Ier6R8dox9goByiKEjDuus0J1jNhqgAmPfcUWFLT0ykoTSkAZkqeu4wNs2To2VlcLisAPnteM4MNc1CZI+k1AwE9dpP5Bfu7MYQWiWURmnoVq0KKC/Me50vGBXzFc4MLVbvbxLIEbZZIBQ+n1mqao3ryzYn/jmv15WKxYSG0Qkyr0GSVVFbsUqS5hrVcFw2FXbBpbFqH8joupyXr2QXM1BkzTN7GJkKbGzChQYAt1pwswNIulyFJhWQQwPLZt9kp2pbFO0nc2fXZS3t0/F5JFu9M4yTn2T/w4g/2hcH0J34I/IdH4Ds6lHydBiREDczj+MlJ/NhECoDgfbg9oLCrCah0Ev+TAvyy5yMfUt2/KcAfhBqGjrQBYYfQ9APCJjHvB4SdRg4QdiHxAFjKrS0L1LDkgL8cAH6mGmOrhukB/M6tbRuEt3d1wI5KFmP4jKqwI3PPBUsBUCUta6zRORe2FABWw85tM8Ia11oA37auLsnB0gHAPdps+bupBPAOVz5RagDneOenShFAXzA6yQF7xVHXP249KyoHW0utQC/o8RAA4T2Rumh2BqCvusFDEFx1mct2sIZEfehLKMcLr/v6Dw5D+8lj6D+69J99hvbDE0vz6Uuk9/gGKT3//wOKqXrHYMfrIgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wOS0yOFQxNTowMToxMyswMjowMIL/AEkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDktMjhUMTU6MDE6MTMrMDI6MDDzorj1AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==",alt:"error icon"}),Object(d.jsx)("span",{className:"boom",children:"BOOM!"}),Object(d.jsx)("span",{children:"something has gone terribly wrong"}),Object(d.jsx)("span",{children:"(but we already sent droids to fix it)"})]})}),N=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).apiService=new m,e.state={planet:{},loader:!0,error:!1},e.onError=function(){e.setState({error:!0,loader:!1})},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.updatePlanet()}),8e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"updatePlanet",value:function(){var e=this,t=Math.floor(19*Math.random())+2;this.apiService.getPlanet(t).then((function(t){e.setState({planet:t,loading:!1})})).catch(this.onError)}},{key:"render",value:function(){var e=this.state,t=e.planet,r=e.loader,n=e.error,a=r||n,s=n&&Object(d.jsx)(O,{}),c=r&&Object(d.jsx)(f,{}),i=!a&&Object(d.jsx)(g,{planet:t});return Object(d.jsxs)("div",{className:"random-planet jumbotron rounded",children:[s,c,i]})}}]),r}(n.Component),g=function(e){var t=e.planet,r=t.id,n=t.name,a=t.population,s=t.rotationPeriod,c=t.diameter;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{className:"planet-image",src:"https://starwars-visualguide.com/assets/img/planets/".concat(r,".jpg"),alt:"planet"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:n}),Object(d.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(d.jsxs)("li",{className:"list-group-item",children:[Object(d.jsx)("span",{className:"term",children:"Population"}),Object(d.jsx)("span",{children:a})]}),Object(d.jsxs)("li",{className:"list-group-item",children:[Object(d.jsx)("span",{className:"term",children:"Rotation Period"}),Object(d.jsx)("span",{children:s})]}),Object(d.jsxs)("li",{className:"list-group-item",children:[Object(d.jsx)("span",{className:"term",children:"Diameter"}),Object(d.jsx)("span",{children:c})]})]})]})]})},A=N,x=(r(22),r(23),r(9)),v=function(e,t){return function(r){Object(l.a)(a,r);var n=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return(e=n.call.apply(n,[this].concat(r))).state={data:null,error:!1},e.onError=function(){e.setState({error:!0})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;t().then((function(t){return e.setState({data:t})})).catch(this.onError)}},{key:"render",value:function(){var t=this.state,r=t.data,n=t.error;return r?n?Object(d.jsx)(O,{}):Object(d.jsx)(e,Object(x.a)(Object(x.a)({},this.props),{},{data:r})):Object(d.jsx)(f,{})}}]),a}(n.Component)}((function(e){var t=e.onItemSelected,r=e.data,n=e.children,a=r.map((function(e){var r=e.id,a=n(e);return Object(d.jsx)("li",{className:"list-group-item",onClick:function(){return t(r)},children:a},r)}));return Object(d.jsx)("ul",{className:"item-list list-group",children:a})}),(new m).getAllPeople),U=(r(24),function(e){var t=e.item,r=e.field,n=e.label;return Object(d.jsxs)("li",{className:"list-group-item",children:[Object(d.jsx)("span",{className:"term",children:n}),Object(d.jsx)("span",{children:t[r]})]})}),E=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={item:null,image:null,loader:!0,error:!1},e.onError=function(){e.setState({error:!0,loader:!1})},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){this.updatePerson()}},{key:"componentDidUpdate",value:function(e){this.props.itemId!==e.itemId&&(this.updatePerson(),this.setState({loader:!0}))}},{key:"updatePerson",value:function(){var e=this,t=this.props,r=t.itemId,n=t.getData,a=t.getImage;r&&n(r).then((function(t){e.setState({item:t,loader:!1,image:a(t)})})).catch(this.onError)}},{key:"render",value:function(){var e=this.state,t=e.item,r=e.loader,n=e.image;if(e.error)return Object(d.jsx)(O,{});if(!t)return Object(d.jsx)("span",{children:"Select a person from a list"});if(r)return Object(d.jsx)(f,{});var s=t.name;return Object(d.jsxs)("div",{className:"person-details card",children:[Object(d.jsx)("img",{className:"person-image",src:n,alt:"character"}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h4",{children:s}),Object(d.jsx)("ul",{className:"list-group list-group-flush",children:a.a.Children.map(this.props.children,(function(e){return a.a.cloneElement(e,{item:t})}))})]})]})}}]),r}(n.Component),S=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return Object(o.a)(r,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(d.jsx)(O,{}):this.props.children}}]),r}(n.Component),W=(r(25),function(e){var t=e.left,r=e.right;return Object(d.jsxs)("div",{className:"row mb2",children:[Object(d.jsx)("div",{className:"col-md-6",children:t}),Object(d.jsx)("div",{className:"col-md-6 item-details",children:r})]})}),w=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).apiService=new m,e.state={selectedPerson:1},e.onPersonSelected=function(t){e.setState({selectedPerson:t})},e}return Object(o.a)(r,[{key:"render",value:function(){var e=Object(d.jsx)(v,{onItemSelected:this.onPersonSelected,getData:this.apiService.getAllPeople,children:function(e){return Object(d.jsxs)("span",{children:[e.name,Object(d.jsxs)("span",{className:"renderFnLabel",children:["(birthYear: ",e.birthYear,")"]})]})}}),t=Object(d.jsxs)(E,{itemId:this.state.selectedPerson,getData:this.apiService.getPerson,getImage:this.apiService.getPersonImage,children:[Object(d.jsx)(U,{field:"gender",label:"gender"}),Object(d.jsx)(U,{field:"birthYear",label:"birthYear"}),Object(d.jsx)(U,{field:"eyeColor",label:"eyeColor"})]});return Object(d.jsx)(S,{children:Object(d.jsx)(W,{left:e,right:t})})}}]),r}(n.Component),y=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).apiService=new m,e.state={},e}return Object(o.a)(r,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(j,{}),Object(d.jsx)(A,{}),Object(d.jsx)(w,{}),Object(d.jsxs)("div",{className:"row mb2",children:[Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)(v,{onItemSelected:this.onPersonSelected,getData:this.apiService.getAllPlanets,children:function(e){return Object(d.jsxs)("span",{children:[e.name,Object(d.jsxs)("span",{className:"renderFnLabel",children:["(diameter: ",e.diameter,")"]})]})}})}),Object(d.jsx)("div",{className:"col-md-6 item-details",children:Object(d.jsxs)(E,{itemId:5,getData:this.apiService.getPlanet,getImage:this.apiService.getPlanetImage,children:[Object(d.jsx)(U,{field:"diameter",label:"diameter"}),Object(d.jsx)(U,{field:"population",label:"population"}),Object(d.jsx)(U,{field:"rotationPeriod",label:"rotationPeriod"})]})})]}),Object(d.jsxs)("div",{className:"row mb2",children:[Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)(v,{onItemSelected:this.onPersonSelected,getData:this.apiService.getAllStarships,children:function(e){return Object(d.jsxs)("span",{children:[e.name,Object(d.jsxs)("span",{className:"renderFnLabel",children:["(model: ",e.model,")"]})]})}})}),Object(d.jsx)("div",{className:"col-md-6 item-details",children:Object(d.jsxs)(E,{itemId:5,getData:this.apiService.getStarship,getImage:this.apiService.getStarshipImage,children:[Object(d.jsx)(U,{field:"model",label:"model"}),Object(d.jsx)(U,{field:"manufacturer",label:"manufacturer"}),Object(d.jsx)(U,{field:"crew",label:"crew"}),Object(d.jsx)(U,{field:"passengers",label:"passengers"}),Object(d.jsx)(U,{field:"length",label:"length"}),Object(d.jsx)(U,{field:"cargoCapacity",label:"cargoCapacity"}),Object(d.jsx)(U,{field:"costInCredits",label:"costInCredits"})]})})]})]})}}]),r}(n.Component);c.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.c5a4adf0.chunk.js.map