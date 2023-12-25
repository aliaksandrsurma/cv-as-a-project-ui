(self.webpackChunkcv_as_a_project_ui=self.webpackChunkcv_as_a_project_ui||[]).push([[775],{775:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>C});var s=n(791),r=n(87),a=n(842),i=n(184);const c=e=>{let{data:t}=e;return(0,i.jsx)("article",{className:"degree-container",children:(0,i.jsxs)("header",{children:[(0,i.jsx)("h4",{className:"degree",children:t.degree}),(0,i.jsxs)("p",{className:"school",children:[(0,i.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},o=e=>{let{data:t}=e;return(0,i.jsxs)("div",{className:"education",children:[(0,i.jsx)("div",{className:"link-to",id:"education"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Education"})}),t.map((e=>(0,i.jsx)(c,{data:e},e.school)))]})};o.defaultProps={data:[]};const l=o;var u=n(892),d=n.n(u),h=n(745);const m=e=>{let{data:{name:t,position:n,url:s,startDate:r,endDate:a,summary:c,highlights:o}}=e;return(0,i.jsxs)("article",{className:"jobs-container",children:[(0,i.jsxs)("header",{children:[(0,i.jsxs)("h4",{children:[(0,i.jsx)("a",{href:s,children:t})," - ",n]}),(0,i.jsxs)("p",{className:"daterange",children:[" ",d()(r).format("MMMM YYYY")," - ",a?d()(a).format("MMMM YYYY"):"PRESENT"]})]}),c?(0,i.jsx)(h.Z,{options:{overrides:{p:{props:{className:"summary"}}}},children:c}):null,o?(0,i.jsx)("ul",{className:"points",children:o.map((e=>(0,i.jsx)("li",{children:e},e)))}):null]})},f=e=>{let{data:t}=e;return(0,i.jsxs)("div",{className:"experience",children:[(0,i.jsx)("div",{className:"link-to",id:"experience"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Experience"})}),t.map((e=>(0,i.jsx)(m,{data:e},"".concat(e.name,"-").concat(e.position))))]})};f.defaultProps={data:[]};const p=f,g=e=>{let{handleClick:t,active:n,label:s}=e;return(0,i.jsx)("button",{className:"skillbutton ".concat(n[s]?"skillbutton-active":""),type:"button",onClick:()=>t(s),children:s})},y=e=>{let{data:t,categories:n}=e;const{category:s,competency:r,title:a}=t,c={background:n.filter((e=>s.includes(e.name))).map((e=>e.color))[0]},o={...c,width:"".concat(String(Math.min(100,Math.max(r/5*100,0))),"%")};return(0,i.jsxs)("div",{className:"skillbar clearfix",children:[(0,i.jsx)("div",{className:"skillbar-title",style:c,children:(0,i.jsx)("span",{children:a})}),(0,i.jsx)("div",{className:"skillbar-bar",style:o}),(0,i.jsxs)("div",{className:"skill-bar-percent",children:[r," / 5"]})]})};y.defaultProps={categories:[]};const v=y,$=e=>{let{skills:t,categories:n}=e;const r=Object.fromEntries([["All",!1]].concat(n.map((e=>{let{name:t}=e;return[t,!1]})))),[a,c]=(0,s.useState)(r),o=e=>{const t=Object.keys(a).reduce(((t,n)=>({...t,[n]:e===n&&!a[n]})),{});t.All=!Object.keys(a).some((e=>t[e])),c(t)};return(0,i.jsxs)("div",{className:"skills",children:[(0,i.jsx)("div",{className:"link-to",id:"skills"}),(0,i.jsxs)("div",{className:"title",children:[(0,i.jsx)("h3",{children:"Skills"}),(0,i.jsx)("p",{})]}),(0,i.jsx)("div",{className:"skill-button-container",children:Object.keys(a).map((e=>(0,i.jsx)(g,{label:e,active:a,handleClick:o},e)))}),(0,i.jsx)("div",{className:"skill-row-container",children:(()=>{const e=Object.keys(a).reduce(((e,t)=>a[t]?t:e),"All");return t.sort(((e,t)=>{let n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((t=>"All"===e||t.category.includes(e))).map((e=>(0,i.jsx)(v,{categories:n,data:e},e.title)))})()})]})};$.defaultProps={skills:[],categories:[]};const x=$,j=e=>{let{data:t,last:n}=e;return(0,i.jsxs)("li",{className:"course-container",children:[(0,i.jsxs)("a",{href:t.link,children:[(0,i.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,i.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,i.jsx)("div",{className:"course-dot",children:(0,i.jsx)("p",{className:"course-name",children:" \u2022"})})]})};j.defaultProps={last:!1};const b=j,S=e=>e.sort(((e,t)=>{let n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map(((t,n)=>(0,i.jsx)(b,{data:t,last:n===e.length-1},t.title))),M=e=>{let{data:t}=e;return(0,i.jsxs)("div",{className:"courses",children:[(0,i.jsx)("div",{className:"link-to",id:"courses"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Selected Courses"})}),(0,i.jsx)("ul",{className:"course-list",children:S(t)})]})};M.defaultProps={data:[]};const k=M,D=[{title:"Software Architecture Principles and Practices",number:"P35",link:"https://www.sei.cmu.edu/education-outreach/courses/course.cfm?courseCode=P35",university:"Software Engineering Institute (SEI)"}],w=[{school:"Belarusian State University of Informatics and Radioelectronics",degree:"Master. Software Engineering",link:"https://www.bsuir.by/en/",year:2006}],N=[{name:"EPAM Systems",position:"Solution Architect",url:"https://www.epam.com/",startDate:"2028-03-01",summary:"Consulting and Development Services for Omnichannel adidas area. TODO: Add more details",highlights:["consulting Adidas teams on payment integrations and payment related initiatives/projects","working with business stakeholders on collecting business requirements/needs","leading 'Payment Service Suite' product (SME and architecture)","owning a payment process e2e (from storefront page to finance system and reconciliation phase)","supervising / consulting other architects","providing tech design / architecture documentation to storefront or back office Adidas dev teams","working with external vendors (SVS, ACI) on communicating both business and technical requirements"]}],O=[{title:"Java EE",competency:4,category:["Web/Serverside Development","Languages","Java"]},{title:"Solution Architecture",competency:5,category:["Engineering practices"]},{title:"Payment Gateways",competency:5,category:["Industries"]},{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:5,category:["Web Development","Javascript"]},{title:"React",competency:2,category:["Web Development","Javascript"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Heroku",competency:2,category:["Web Development","Tools"]},{title:"PostgreSQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"Express.JS",competency:2,category:["Web Development","Javascript"]},{title:"Git",competency:3,category:["Tools"]},{title:"Kubernetes",competency:2,category:["Tools","Data Engineering"]},{title:"Docker",competency:3,category:["Tools","Data Engineering"]},{title:"Typescript",competency:1,category:["Web Development","Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:2,category:["Web Development","Languages"]},{title:"Python",competency:2,category:["Languages","Python","ML Engineering"]}].map((e=>({...e,category:e.category.sort()}))),_=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],A=[...new Set(O.flatMap((e=>{let{category:t}=e;return t})))].sort().map(((e,t)=>({name:e,color:_[t]})));var E=n(708);const T={Education:()=>(0,i.jsx)(l,{data:w}),Experience:()=>(0,i.jsx)(p,{data:N}),Skills:()=>(0,i.jsx)(x,{skills:O,categories:A}),Courses:()=>(0,i.jsx)(k,{data:D})},C=()=>(0,i.jsx)(a.Z,{title:"Resume",description:"".concat(E.PROFILE_NAME,"'s Resume. TODO: Add companies"),children:(0,i.jsxs)("article",{className:"post",id:"resume",children:[(0,i.jsx)("header",{children:(0,i.jsxs)("div",{className:"title",children:[(0,i.jsx)("h2",{children:(0,i.jsx)(r.rU,{to:"resume",children:"Resume"})}),(0,i.jsx)("div",{className:"link-container",children:Object.keys(T).map((e=>(0,i.jsx)("h4",{children:(0,i.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)))})]})}),Object.entries(T).map((e=>{let[t,n]=e;return(0,i.jsx)(n,{},t)}))]})})},892:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,s="millisecond",r="second",a="minute",i="hour",c="day",o="week",l="month",u="quarter",d="year",h="date",m="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var s=String(e);return!s||s.length>=t?e:""+Array(t+1-s.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),s=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+y(s,2,"0")+":"+y(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var s=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(s,l),a=n-r<0,i=t.clone().add(s+(a?-1:1),l);return+(-(s+(n-r)/(a?r-i:i-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:o,d:c,D:h,h:i,m:a,s:r,ms:s,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},$="en",x={};x[$]=g;var j="$isDayjsObject",b=function(e){return e instanceof D||!(!e||!e[j])},S=function e(t,n,s){var r;if(!t)return $;if("string"==typeof t){var a=t.toLowerCase();x[a]&&(r=a),n&&(x[a]=n,r=a);var i=t.split("-");if(!r&&i.length>1)return e(i[0])}else{var c=t.name;x[c]=t,r=c}return!s&&r&&($=r),r||!s&&$},M=function(e,t){if(b(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},k=v;k.l=S,k.i=b,k.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function g(e){this.$L=S(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[j]=!0}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var s=t.match(f);if(s){var r=s[2]-1||0,a=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,a)):new Date(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,a)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return k},y.isValid=function(){return!(this.$d.toString()===m)},y.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return M(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<M(e)},y.$g=function(e,t,n){return k.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,s=!!k.u(t)||t,u=k.p(e),m=function(e,t){var r=k.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return s?r:r.endOf(c)},f=function(e,t){return k.w(n.toDate()[e].apply(n.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return s?m(1,0):m(31,11);case l:return s?m(1,g):m(0,g+1);case o:var $=this.$locale().weekStart||0,x=(p<$?p+7:p)-$;return m(s?y-x:y+(6-x),g);case c:case h:return f(v+"Hours",0);case i:return f(v+"Minutes",1);case a:return f(v+"Seconds",2);case r:return f(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,o=k.p(e),u="set"+(this.$u?"UTC":""),m=(n={},n[c]=u+"Date",n[h]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[i]=u+"Hours",n[a]=u+"Minutes",n[r]=u+"Seconds",n[s]=u+"Milliseconds",n)[o],f=o===c?this.$D+(t-this.$W):t;if(o===l||o===d){var p=this.clone().set(h,1);p.$d[m](f),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else m&&this.$d[m](f);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[k.p(e)]()},y.add=function(s,u){var h,m=this;s=Number(s);var f=k.p(u),p=function(e){var t=M(m);return k.w(t.date(t.date()+Math.round(e*s)),m)};if(f===l)return this.set(l,this.$M+s);if(f===d)return this.set(d,this.$y+s);if(f===c)return p(1);if(f===o)return p(7);var g=(h={},h[a]=t,h[i]=n,h[r]=e,h)[f]||1,y=this.$d.getTime()+s*g;return k.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||m;var s=e||"YYYY-MM-DDTHH:mm:ssZ",r=k.z(this),a=this.$H,i=this.$m,c=this.$M,o=n.weekdays,l=n.months,u=n.meridiem,d=function(e,n,r,a){return e&&(e[n]||e(t,s))||r[n].slice(0,a)},h=function(e){return k.s(a%12||12,e,"0")},f=u||function(e,t,n){var s=e<12?"AM":"PM";return n?s.toLowerCase():s};return s.replace(p,(function(e,s){return s||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return k.s(t.$y,4,"0");case"M":return c+1;case"MM":return k.s(c+1,2,"0");case"MMM":return d(n.monthsShort,c,l,3);case"MMMM":return d(l,c);case"D":return t.$D;case"DD":return k.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,o,2);case"ddd":return d(n.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(a);case"HH":return k.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return f(a,i,!0);case"A":return f(a,i,!1);case"m":return String(i);case"mm":return k.s(i,2,"0");case"s":return String(t.$s);case"ss":return k.s(t.$s,2,"0");case"SSS":return k.s(t.$ms,3,"0");case"Z":return r}return null}(e)||r.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(s,h,m){var f,p=this,g=k.p(h),y=M(s),v=(y.utcOffset()-this.utcOffset())*t,$=this-y,x=function(){return k.m(p,y)};switch(g){case d:f=x()/12;break;case l:f=x();break;case u:f=x()/3;break;case o:f=($-v)/6048e5;break;case c:f=($-v)/864e5;break;case i:f=$/n;break;case a:f=$/t;break;case r:f=$/e;break;default:f=$}return m?f:k.a(f)},y.daysInMonth=function(){return this.endOf(l).$D},y.$locale=function(){return x[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),s=S(e,t,!0);return s&&(n.$L=s),n},y.clone=function(){return k.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),w=D.prototype;return M.prototype=w,[["$ms",s],["$s",r],["$m",a],["$H",i],["$W",c],["$M",l],["$y",d],["$D",h]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,D,M),e.$i=!0),M},M.locale=S,M.isDayjs=b,M.unix=function(e){return M(1e3*e)},M.en=x[$],M.Ls=x,M.p={},M}()}}]);
//# sourceMappingURL=775.76aaed25.chunk.js.map