(self.webpackChunkcv_as_a_project_ui=self.webpackChunkcv_as_a_project_ui||[]).push([[248],{248:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>k});var r=n(791),s=n(87),a=n(842),i=n(184);const u=t=>{let{label:e,link:n,value:r,format:s}=t;return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{width:"70%",children:e}),(0,i.jsx)("td",{children:n?(0,i.jsx)("a",{href:n,children:s(r)}):s(r)})]})};u.defaultProps={format:t=>t,link:null,value:null};const c=u,o=t=>{let{data:e}=t;return(0,i.jsx)("table",{children:(0,i.jsx)("tbody",{children:e.map((t=>(0,i.jsx)(c,{format:t.format,label:t.label,link:t.link,value:t.value},t.label)))})})},l=()=>{const[t,e]=(0,r.useState)();return(0,r.useEffect)((()=>{const t=setInterval((()=>(()=>{const t=new Date("1983-09-25T01:30:00");e(((Date.now()-t)/31556925190.079998).toFixed(11))})()),25);return()=>{clearInterval(t)}}),[]),(0,i.jsx)(i.Fragment,{children:t})},h=[{key:"age",label:"Current age",value:(0,i.jsx)(l,{})},{key:"countries",label:"Countries visited",value:"X",link:"TODO"},{key:"location",label:"Current city",value:"Izmir, TR"}],f=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{children:"Some stats about me"}),(0,i.jsx)(o,{data:h})]});var d=n(892),$=n.n(d);const{GITHUB_URL:m,GITHUB_REPO_NAME:v}=n(708),y=[{label:"Stars this repository has on github",key:"stargazers_count",link:"".concat(m,"/").concat(v,"/stargazers")},{label:"Number of people watching this repository",key:"subscribers_count",link:"".concat(m,"/").concat(v,"/stargazers")},{label:"Number of forks",key:"forks",link:"".concat(m,"/").concat(v,"/network")},{label:"Open github issues",key:"open_issues_count",link:"".concat(m,"/").concat(v,"/issues")},{label:"Last updated at",key:"pushed_at",link:"".concat(m,"/").concat(v,"/commits"),format:t=>$()(t).format("MMMM DD, YYYY")},{}],{GITHUB_API_URL:M,GITHUB_REPO_NAME:p}=n(708),b=()=>{const[t,e]=(0,r.useState)(y),n=(0,r.useCallback)((async()=>{const t=await fetch("".concat(M,"/").concat(p)),n=await t.json();e(y.map((t=>({...t,value:Object.keys(n).includes(t.key)?n[t.key]:t.value}))))}),[]);return(0,r.useEffect)((()=>{n()}),[n]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"Some stats about this site"}),(0,i.jsx)(o,{data:t})]})};var g=n(708);const k=()=>(0,i.jsx)(a.Z,{title:"Stats",description:"Some statistics about ".concat(g.PROFILE_NAME," and current site"),children:(0,i.jsxs)("article",{className:"post",id:"stats",children:[(0,i.jsx)("header",{children:(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h2",{children:(0,i.jsx)(s.rU,{to:"/stats",children:"Stats"})})})}),(0,i.jsx)(f,{}),(0,i.jsx)(b,{})]})})},892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",s="second",a="minute",i="hour",u="day",c="week",o="month",l="quarter",h="year",f="date",d="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},M={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(r,o),a=n-s<0,i=e.clone().add(r+(a?-1:1),o);return+(-(r+(n-s)/(a?s-i:i-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:h,w:c,d:u,D:f,h:i,m:a,s:s,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",b={};b[p]=v;var g="$isDayjsObject",k=function(t){return t instanceof w||!(!t||!t[g])},D=function t(e,n,r){var s;if(!e)return p;if("string"==typeof e){var a=e.toLowerCase();b[a]&&(s=a),n&&(b[a]=n,s=a);var i=e.split("-");if(!s&&i.length>1)return t(i[0])}else{var u=e.name;b[u]=e,s=u}return!r&&s&&(p=s),s||!r&&p},S=function(t,e){if(k(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},_=M;_.l=D,_.i=k,_.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function v(t){this.$L=D(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[g]=!0}var y=v.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(_.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var s=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return _},y.isValid=function(){return!(this.$d.toString()===d)},y.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return S(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<S(t)},y.$g=function(t,e,n){return _.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!_.u(e)||e,l=_.p(t),d=function(t,e){var s=_.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?s:s.endOf(u)},$=function(t,e){return _.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(l){case h:return r?d(1,0):d(31,11);case o:return r?d(1,v):d(0,v+1);case c:var p=this.$locale().weekStart||0,b=(m<p?m+7:m)-p;return d(r?y-b:y+(6-b),v);case u:case f:return $(M+"Hours",0);case i:return $(M+"Minutes",1);case a:return $(M+"Seconds",2);case s:return $(M+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,c=_.p(t),l="set"+(this.$u?"UTC":""),d=(n={},n[u]=l+"Date",n[f]=l+"Date",n[o]=l+"Month",n[h]=l+"FullYear",n[i]=l+"Hours",n[a]=l+"Minutes",n[s]=l+"Seconds",n[r]=l+"Milliseconds",n)[c],$=c===u?this.$D+(e-this.$W):e;if(c===o||c===h){var m=this.clone().set(f,1);m.$d[d]($),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else d&&this.$d[d]($);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[_.p(t)]()},y.add=function(r,l){var f,d=this;r=Number(r);var $=_.p(l),m=function(t){var e=S(d);return _.w(e.date(e.date()+Math.round(t*r)),d)};if($===o)return this.set(o,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===u)return m(1);if($===c)return m(7);var v=(f={},f[a]=e,f[i]=n,f[s]=t,f)[$]||1,y=this.$d.getTime()+r*v;return _.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",s=_.z(this),a=this.$H,i=this.$m,u=this.$M,c=n.weekdays,o=n.months,l=n.meridiem,h=function(t,n,s,a){return t&&(t[n]||t(e,r))||s[n].slice(0,a)},f=function(t){return _.s(a%12||12,t,"0")},$=l||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return _.s(e.$y,4,"0");case"M":return u+1;case"MM":return _.s(u+1,2,"0");case"MMM":return h(n.monthsShort,u,o,3);case"MMMM":return h(o,u);case"D":return e.$D;case"DD":return _.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,c,2);case"ddd":return h(n.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(a);case"HH":return _.s(a,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return $(a,i,!0);case"A":return $(a,i,!1);case"m":return String(i);case"mm":return _.s(i,2,"0");case"s":return String(e.$s);case"ss":return _.s(e.$s,2,"0");case"SSS":return _.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,f,d){var $,m=this,v=_.p(f),y=S(r),M=(y.utcOffset()-this.utcOffset())*e,p=this-y,b=function(){return _.m(m,y)};switch(v){case h:$=b()/12;break;case o:$=b();break;case l:$=b()/3;break;case c:$=(p-M)/6048e5;break;case u:$=(p-M)/864e5;break;case i:$=p/n;break;case a:$=p/e;break;case s:$=p/t;break;default:$=p}return d?$:_.a($)},y.daysInMonth=function(){return this.endOf(o).$D},y.$locale=function(){return b[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return _.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},v}(),x=w.prototype;return S.prototype=x,[["$ms",r],["$s",s],["$m",a],["$H",i],["$W",u],["$M",o],["$y",h],["$D",f]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,w,S),t.$i=!0),S},S.locale=D,S.isDayjs=k,S.unix=function(t){return S(1e3*t)},S.en=b[p],S.Ls=b,S.p={},S}()}}]);
//# sourceMappingURL=248.18b67d7c.chunk.js.map