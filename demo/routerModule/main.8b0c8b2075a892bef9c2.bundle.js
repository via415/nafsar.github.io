webpackJsonp([1],{0:function(t,e,n){t.exports=n("cDNt")},"1WKT":function(t,e){t.exports='<h4>UI Contact</h4>\n<p class="ml-5"></p>\n<table class="table table-condensed">\n    <thead>\n        <tr>\n            <th><span class="glyphicon glyphicon-user"> Contact:</span>&nbsp;<span>Naser Afsar</span></th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>\n                <a href="mailto:n.afsar@gmail.com" class="glyphicon glyphicon-envelope"></a>&nbsp;: n.afsar@gmail.com</td>\n        </tr>\n        <tr>\n            <td>\n                <div class="col-lg-12">\n                    <iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=40.014984,-105.270546&amp;t=m&amp;z=7&amp;output=embed"></iframe>\n                </div>\n            </td>\n        </tr>\n    </tbody>\n</table>'},"2g4R":function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},"52OD":function(t,e,n){t.exports=n.p+"1.ae737c012b5501395a43.png"},"6EAP":function(t,e,n){t.exports=n.p+"2.f930b20c13fef4fd9040.png"},DFjV:function(t,e){t.exports='<div class="container">\n    <h2>Route Event</h2>\n    <p>\n        This is the full list of router events in the table below.\n    </p>            \n    <table class="table table-striped">\n      <thead>\n        <tr>\n          <th>Router Event</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>NavigationStart</td>\n          <td>An event triggered when navigation starts.</td>\n        </tr>\n\n        <tr>\n          <td>RoutesRecognized</td>\n          <td>An event triggered when the Router parses the URL and the routes are recognized.</td>\n        </tr>\n\n        <tr>\n          <td>RouteConfigLoadStart</td>\n          <td>An event triggered before the Router lazy loads a route configuration.</td>\n        </tr>\n\n        <tr>\n            <td>RouteConfigLoadEnd</td>\n            <td>An event triggered after a route has been lazy loaded.</td>\n          </tr>\n          <tr>\n              <td>NavigationEnd</td>\n              <td>An event triggered when navigation ends successfully.</td>\n            </tr>\n            <tr>\n                <td>NavigationCancel</td>\n                <td>An event triggered when navigation is canceled. This is due to a Route Guard returning false during navigation.</td>\n              </tr>\n              <tr>\n                  <td>NavigationError</td>\n                  <td>An event triggered when navigation fails due to an unexpected error.</td>\n                </tr>        \n      </tbody>\n    </table>\n  </div>\n  '},LyPm:function(t,e,n){t.exports=n.p+"a.88481a1f0a18ed038e43.png"},P7Aw:function(t,e,n){t.exports=n.p+"3.ea16c1142926cfe08a2a.png"},RSIW:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,".route{margin:2%}p{text-align:justify}.data{width:700px;height:400px;display:block;margin:10px 0 25px 0;margin:auto}.mrk{background-color:#effa8f}.rte{background:url("+n("52OD")+") no-repeat}.rtecnf{background:url("+n("6EAP")+") no-repeat}.rtecomp{background:url("+n("P7Aw")+") no-repeat;width:700px;height:800px;display:block;margin:10px 0 25px 0;margin:auto}",""]),t.exports=t.exports.toString()},TGOV:function(t,e){t.exports='<div class="route">\n<p>\n  If you are building an Angular enterprise web application, soon you\'ll notice navigating through various views \n  are required. Angular routing provides capabilities for displaying different views and this technique simplifies\n  the navigation for large web applications. The router can handle optional parameters for views to help figuring out \n  as which content to display. Router keeps a log in browser\'s history for ease of going forward and back between views.\n\n Here is a quick guide on making a router for four page views:\n</p>\n<ol>\n\n<li>\n  Edit the index.html and add the <mark>&lt;base href="/"&gt;</mark> tag at the top of the &lt;head&gt; section.\n</li>\n\n<li>\nRun the following CLI command "ng generate module app-routing".\n</li>\n\n<li>\n  Now, edit <mark>"app-routing.module.ts" </mark>file and add the following basic configuration:\n  <div class="rte data"></div>\n   \n  \n</li>\n\n\n  <li>\n   Now, it is time to import the AppRoutingModule to <mark>"app.module.ts"</mark> file.\n   <div class="rtecnf data"></div>\n  </li>\n\n  <li>\n   The &lt;router-outlet&gt;&lt;/router-outlet&gt; should be added in <mark>app.component.html</mark>\n  </li>\n\n  <li>\n     I have added few more components in this configuration. Here is the final routes in \n    <mark>app-routing.module.ts</mark>\n    <div class="rtecomp"></div>\n\n  </li>\n  \n</ol>\n<div style="margin-top:60px;font-size:20px;margin-left:4%"><mark>For more information on:</mark> <a href="https://angular.io/guide/router" target="_blank">\ud83d\udd17Router</a></div>\n</div>\n'},UDfK:function(t,e){t.exports='<div class="container">\n  <h2>Activated route</h2>\n  <p>\n    The route path and parameters are available through an injected router service called the\n    <mark>ActivatedRoute.</mark>\n    <table class="table">\n      <thead>\n        <tr>\n          <th>Property</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>url</td>\n          <td>\n            An Observable of the route path(s), represented as an array of strings for each part of the route path.\n          </td>\n\n        </tr>\n        <tr class="success">\n          <td>data</td>\n          <td>\n            An Observable that contains the data object provided for the route. Also contains any resolved values from the resolve guard.\n          </td>\n\n        </tr>\n        <tr class="danger">\n          <td>paramMap</td>\n          <td>\n            An Observable that contains a map of the required and optional parameters specific to the route. The map supports retrieving\n            single and multiple values from the same parameter.\n          </td>\n\n        </tr>\n        <tr class="info">\n          <td>queryParamMap</td>\n          <td>\n            An Observable that contains a map of the query parameters available to all routes. The map supports retrieving single and\n            multiple values from the query parameter.\n          </td>\n\n        </tr>\n        <tr class="warning">\n          <td>outlet</td>\n          <td>\n            The name of the RouterOutlet used to render the route. For an unnamed outlet, the outlet name is primary.\n          </td>\n\n        </tr>\n        <tr class="active">\n          <td>routeConfig</td>\n          <td>\n            The route configuration used for the route that contains the origin path.\n          </td>\n\n        </tr>\n\n        <tr class="info">\n          <td>parent</td>\n          <td>\n            The route\'s parent ActivatedRoute when this route is a child route.\n          </td>\n\n        </tr>\n\n        <tr class="active">\n          <td>firstChild</td>\n          <td>\n            Contains the first ActivatedRoute in the list of this route\'s child routes.\n          </td>\n\n        </tr>\n        <tr>\n          <td>children</td>\n          <td>\n            Contains all the child routes activated under the current route.\n          </td>\n\n        </tr>\n      </tbody>\n    </table>\n</div>'},YUuM:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},cDNt:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("/oeL"),a=this&&this.__decorate||function(t,e,n,r){var a,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();i=a([Object(r.o)({selector:"app-contact",template:n("1WKT"),styles:[n("hbhV")]}),o("design:paramtypes",[])],i);var s=n("/oeL"),d=this&&this.__decorate||function(t,e,n,r){var a,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();l=d([Object(s.o)({selector:"app-activatedroute",template:n("UDfK"),styles:[n("2g4R")]}),c("design:paramtypes",[])],l);var p=n("/oeL"),u=this&&this.__decorate||function(t,e,n,r){var a,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},f=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},h=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();h=u([Object(p.o)({selector:"app-main",template:n("TGOV"),styles:[n("RSIW")]}),f("design:paramtypes",[])],h);var g=n("/oeL"),m=this&&this.__decorate||function(t,e,n,r){var a,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},v=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},b=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();b=m([Object(g.o)({selector:"app-routerparts",template:n("ibt+"),styles:[n("gYuG")]}),v("design:paramtypes",[])],b);var y=n("/oeL"),R=this&&this.__decorate||function(t,e,n,r){var a,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},x=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},k=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();k=R([Object(y.o)({selector:"app-routerevent",template:n("DFjV"),styles:[n("YUuM")]}),x("design:paramtypes",[])],k);var w=n("/oeL"),O=n("qbdv"),j=n("BkNc"),P=this&&this.__decorate||function(t,e,n,r){var a,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},L=[{path:"routerevent",component:k},{path:"routerparts",component:b},{path:"contact",component:i},{path:"activatedroute",component:l},{path:"",pathMatch:"full",component:h},{path:"**",redirectTo:""}],A=function(){function t(){}return t}();A=P([Object(w.M)({imports:[j.a.forRoot(L,{useHash:!0}),O.b],exports:[j.a],declarations:[]})],A);var _=n("/oeL"),T=this&&this.__decorate||function(t,e,n,r){var a,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},D=function(){function t(){this.title="Sample routing & Navigation"}return t}();D=T([Object(_.o)({selector:"app-root",template:n("efyd"),styles:[n("hxJY")]})],D);var M=n("fc+i"),Y=n("/oeL"),q=this&&this.__decorate||function(t,e,n,r){var a,o=arguments.length,i=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i);return o>3&&i&&Object.defineProperty(e,n,i),i},I=function(){function t(){}return t}();I=q([Object(Y.M)({declarations:[D,i,l,h,b,k],imports:[M.a,A],providers:[],bootstrap:[D]})],I);var N={production:!0},C=n("/oeL"),H=n("Qa4U");N.production&&Object(C._23)(),Object(H.a)().bootstrapModule(I)},efyd:function(t,e){t.exports='\x3c!--The content below is only a placeholder and can be replaced.--\x3e\n<div style="text-align:center">\n  <h1>\n     {{title}}!\n  </h1>\n  </div>\n  \n  <nav  class="navbar navbar-inverse">\n    <a [routerLink]="[\'./main\']"   queryParamsHandling="merge"><span class="ang"></span></a>\n      <ul class="nav navbar-nav" >\n        <li><a [routerLink]="[\'./routerevent\']"  queryParamsHandling="merge">Route Event</a></li>     \n        <li><a [routerLink]="[\'./activatedroute\']"   queryParamsHandling="merge">Activated Route</a></li>\n        <li><a [routerLink]="[\'./routerparts\']"   queryParamsHandling="merge">Router parts</a></li>\n        <li><a [routerLink]="[\'./contact\']"   queryParamsHandling="merge">Contact</a></li>\n      </ul>\n  </nav>\n  <router-outlet></router-outlet>\n'},gFIY:function(t,e){function n(t){return new Promise(function(e,n){n(new Error("Cannot find module '"+t+"'."))})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="gFIY"},gYuG:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,".ritalic{font-style:italic;font-weight:700}",""]),t.exports=t.exports.toString()},hbhV:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"[class*=col-]{float:left;padding-right:20px;padding-bottom:20px}[class*=col-]:last-of-type{padding-right:0}a{text-decoration:none}*,:after,:before{box-sizing:border-box}h3{text-align:center;margin-bottom:0}h4{position:relative}.grid{margin:0}.col-1-4{width:25%}.module{padding:20px;text-align:center;color:#eee;max-height:120px;min-width:120px;background-color:#607d8b;border-radius:2px}.module:hover{background-color:#eee;cursor:pointer;color:#607d8b}.grid-pad{padding:10px 0}.grid-pad>[class*=col-]:last-of-type{padding-right:20px}@media (max-width:600px){.module{font-size:10px;max-height:75px}}@media (max-width:1024px){.grid{margin:0}.module{min-width:60px}}",""]),t.exports=t.exports.toString()},hxJY:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,".navbar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}body{font-family:Roboto,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;font-size:14px;-webkit-font-smoothing:antialiased}.ang{background:url("+n("LyPm")+") no-repeat;width:150px;height:42px;display:block;margin-right:15px}",""]),t.exports=t.exports.toString()},"ibt+":function(t,e){t.exports='<div class="container">\n  <h2>Route Part</h2>\n  <p>\n    The RouterOutlet displays views produced by the router. It has RouterLinks that users can click to navigate via the router.\n  </p>\n  <table class="table table-hover">\n    <thead>\n      <tr>\n        <th>Router Part</th>\n        <th>Meaning</th>\n\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><mark>Router</mark></td>\n        <td>\n          Displays the application component for the active URL. Manages navigation from one component to the next.\n        </td>\n      </tr>\n      <tr>\n        <td>RouterModule</td>\n        <td>\n          A separate NgModule that provides the necessary service providers and directives for navigating through application views.\n        </td>\n      </tr>\n      <tr>\n        <td><mark>Routes</mark></td>\n        <td>\n          Defines an array of Routes, each mapping a URL path to a component.\n        </td>\n      </tr>\n      <tr>\n          <td>Route</td>\n          <td>\n              Defines how the router should navigate to a component based on a URL pattern. Most routes consist of a path and a component type.\n          </td>\n        </tr>      \n      <tr>\n        <td><mark>RouterOutlet</mark></td>\n        <td>\n            The directive (&lt;router-outlet&gt;) that marks where the router displays a view.\n        </td>\n      </tr>\n\n      <tr>\n        <td>RouterLink</td>\n        <td>\n            The directive for binding a clickable HTML element to a route. Clicking an element with a routerLink directive that is bound to a string or \n            a link parameters array triggers a navigation.\n        </td>\n      </tr>\n\n      <tr>\n        <td><mark>RouterLinkActive</mark></td>\n        <td>\n            The directive for adding/removing classes from an HTML element when an associated routerLink contained on or inside the element becomes active/inactive.\n        </td>\n      </tr>\n\n      <tr>\n        <td><mark>ActivatedRoute</mark></td>\n        <td>\n            A service that is provided to each route component that contains route specific information such as route parameters, \n            static data, resolve data, global query params, and the global fragment.\n        </td>\n      </tr>\n\n      <tr>\n        <td>RouterState </td>\n        <td>\n            The current state of the router including a tree of the currently activated routes together \n            with convenience methods for traversing the route tree.\n        </td>\n      </tr>\n\n      <tr>\n        <td class="ritalic">Link parameters array</td>\n        <td>\n            An array that the router interprets as a routing instruction. \n            You can bind that array to a RouterLink or pass the array as an argument to the Router.navigate method.\n        </td>\n      </tr>\n\n      <tr>\n        <td class="ritalic">Routing component </td>\n        <td>\n            An Angular component with a RouterOutlet that displays views based on router navigations.\n        </td>\n      </tr>\n\n\n\n    </tbody>\n  </table>\n</div>'}},[0]);