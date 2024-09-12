import{d as D,o as g,f as k,bi as ue,b9 as Re,Z as Ve,k as V,w as I,F as ce,h as be,i as z,c as Me,g as Q,t as we,l as ze,W as Ae,aT as Ue,aU as Be,z as Pe,n as qe,b as Fe,x as Ie,bt as De,bu as je,y as Le}from"./index-3215ace6.js";import{_ as He}from"./Tag-cb8cb84b.js";import{a as Ge,_ as We}from"./Grid-d24b6c00.js";import{w as Ye}from"./defaults-4d6daddf.js";import"./color-to-class-b0332f36.js";import"./is-browser-fc34c9a6.js";const Ze={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Xe=ue('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="10" r="2"></circle><path d="M6 4v4"></path><path d="M6 12v8"></path><circle cx="12" cy="16" r="2"></circle><path d="M12 4v10"></path><path d="M12 18v2"></path><circle cx="18" cy="7" r="2"></circle><path d="M18 4v1"></path><path d="M18 9v11"></path></g>',1),Ke=[Xe],Je=D({name:"Adjustments",render:function(f,m){return g(),k("svg",Ze,Ke)}}),Qe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},$e=ue('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="5" width="14" height="14" rx="1"></rect><path d="M9 9h6v6H9z"></path><path d="M3 10h2"></path><path d="M3 14h2"></path><path d="M10 3v2"></path><path d="M14 3v2"></path><path d="M21 10h-2"></path><path d="M21 14h-2"></path><path d="M14 21v-2"></path><path d="M10 21v-2"></path></g>',1),ei=[$e],ii=D({name:"Cpu",render:function(f,m){return g(),k("svg",Qe,ei)}}),ai={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},oi=ue('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10v6"></path><path d="M12 5v3"></path><path d="M10 5h4"></path><path d="M5 13H3"></path><path d="M6 10h2l2-2h3.382a1 1 0 0 1 .894.553l1.448 2.894a1 1 0 0 0 .894.553H18v-2h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2v-2h-3v2a1 1 0 0 1-1 1h-3.465a1 1 0 0 1-.832-.445L8 16H6v-6z"></path></g>',1),ti=[oi],ni=D({name:"Engine",render:function(f,m){return g(),k("svg",ai,ti)}});var de={exports:{}};(function(E,f){(function(m,p){var j="1.0.35",w="",A="?",O="function",N="undefined",U="object",T="string",L="major",a="model",o="name",e="type",i="vendor",t="version",h="architecture",B="console",l="mobile",s="tablet",v="smarttv",S="wearable",$="embedded",ee=350,H="Amazon",P="Apple",pe="ASUS",me="BlackBerry",C="Browser",G="Chrome",Oe="Edge",W="Firefox",Y="Google",he="Huawei",ie="LG",ae="Microsoft",ve="Motorola",Z="Opera",oe="Samsung",ge="Sharp",X="Sony",te="Xiaomi",ne="Zebra",fe="Facebook",_e="Chromium OS",ke="Mac OS",Te=function(c,d){var r={};for(var u in c)d[u]&&d[u].length%2===0?r[u]=d[u].concat(c[u]):r[u]=c[u];return r},K=function(c){for(var d={},r=0;r<c.length;r++)d[c[r].toUpperCase()]=c[r];return d},xe=function(c,d){return typeof c===T?q(d).indexOf(q(c))!==-1:!1},q=function(c){return c.toLowerCase()},Se=function(c){return typeof c===T?c.replace(/[^\d\.]/g,w).split(".")[0]:p},re=function(c,d){if(typeof c===T)return c=c.replace(/^\s\s*/,w),typeof d===N?c:c.substring(0,ee)},F=function(c,d){for(var r=0,u,M,x,b,n,y;r<d.length&&!n;){var le=d[r],Ne=d[r+1];for(u=M=0;u<le.length&&!n&&le[u];)if(n=le[u++].exec(c),n)for(x=0;x<Ne.length;x++)y=n[++M],b=Ne[x],typeof b===U&&b.length>0?b.length===2?typeof b[1]==O?this[b[0]]=b[1].call(this,y):this[b[0]]=b[1]:b.length===3?typeof b[1]===O&&!(b[1].exec&&b[1].test)?this[b[0]]=y?b[1].call(this,y,b[2]):p:this[b[0]]=y?y.replace(b[1],b[2]):p:b.length===4&&(this[b[0]]=y?b[3].call(this,y.replace(b[1],b[2])):p):this[b]=y||p;r+=2}},se=function(c,d){for(var r in d)if(typeof d[r]===U&&d[r].length>0){for(var u=0;u<d[r].length;u++)if(xe(d[r][u],c))return r===A?p:r}else if(xe(d[r],c))return r===A?p:r;return c},Ce={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},ye={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Ee={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[t,[o,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[t,[o,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[o,t],[/opios[\/ ]+([\w\.]+)/i],[t,[o,Z+" Mini"]],[/\bopr\/([\w\.]+)/i],[t,[o,Z]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[o,t],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[t,[o,"UC"+C]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[t,[o,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[t,[o,"WeChat"]],[/konqueror\/([\w\.]+)/i],[t,[o,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[t,[o,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[t,[o,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[o,/(.+)/,"$1 Secure "+C],t],[/\bfocus\/([\w\.]+)/i],[t,[o,W+" Focus"]],[/\bopt\/([\w\.]+)/i],[t,[o,Z+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[t,[o,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[t,[o,"Dolphin"]],[/coast\/([\w\.]+)/i],[t,[o,Z+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[t,[o,"MIUI "+C]],[/fxios\/([-\w\.]+)/i],[t,[o,W]],[/\bqihu|(qi?ho?o?|360)browser/i],[[o,"360 "+C]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[o,/(.+)/,"$1 "+C],t],[/(comodo_dragon)\/([\w\.]+)/i],[[o,/_/g," "],t],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[o,t],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[o],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[o,fe],t],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[o,t],[/\bgsa\/([\w\.]+) .*safari\//i],[t,[o,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[t,[o,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[t,[o,G+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[o,G+" WebView"],t],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[t,[o,"Android "+C]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[o,t],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[t,[o,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[t,o],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[o,[t,se,Ce]],[/(webkit|khtml)\/([\w\.]+)/i],[o,t],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[o,"Netscape"],t],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[t,[o,W+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[o,t],[/(cobalt)\/([\w\.]+)/i],[o,[t,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[h,"amd64"]],[/(ia32(?=;))/i],[[h,q]],[/((?:i[346]|x)86)[;\)]/i],[[h,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[h,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[h,"armhf"]],[/windows (ce|mobile); ppc;/i],[[h,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[h,/ower/,w,q]],[/(sun4\w)[;\)]/i],[[h,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[h,q]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[a,[i,oe],[e,s]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[a,[i,oe],[e,l]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[a,[i,P],[e,l]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[a,[i,P],[e,s]],[/(macintosh);/i],[a,[i,P]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[a,[i,ge],[e,l]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[a,[i,he],[e,s]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[a,[i,he],[e,l]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[a,/_/g," "],[i,te],[e,l]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[a,/_/g," "],[i,te],[e,s]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[a,[i,"OPPO"],[e,l]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[a,[i,"Vivo"],[e,l]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[a,[i,"Realme"],[e,l]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[a,[i,ve],[e,l]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[a,[i,ve],[e,s]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[a,[i,ie],[e,s]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[a,[i,ie],[e,l]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[a,[i,"Lenovo"],[e,s]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[a,/_/g," "],[i,"Nokia"],[e,l]],[/(pixel c)\b/i],[a,[i,Y],[e,s]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[a,[i,Y],[e,l]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[a,[i,X],[e,l]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[a,"Xperia Tablet"],[i,X],[e,s]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[a,[i,"OnePlus"],[e,l]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[a,[i,H],[e,s]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[a,/(.+)/g,"Fire Phone $1"],[i,H],[e,l]],[/(playbook);[-\w\),; ]+(rim)/i],[a,i,[e,s]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[a,[i,me],[e,l]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[a,[i,pe],[e,s]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[a,[i,pe],[e,l]],[/(nexus 9)/i],[a,[i,"HTC"],[e,s]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[i,[a,/_/g," "],[e,l]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[a,[i,"Acer"],[e,s]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[a,[i,"Meizu"],[e,l]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[i,a,[e,l]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[i,a,[e,s]],[/(surface duo)/i],[a,[i,ae],[e,s]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[a,[i,"Fairphone"],[e,l]],[/(u304aa)/i],[a,[i,"AT&T"],[e,l]],[/\bsie-(\w*)/i],[a,[i,"Siemens"],[e,l]],[/\b(rct\w+) b/i],[a,[i,"RCA"],[e,s]],[/\b(venue[\d ]{2,7}) b/i],[a,[i,"Dell"],[e,s]],[/\b(q(?:mv|ta)\w+) b/i],[a,[i,"Verizon"],[e,s]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[a,[i,"Barnes & Noble"],[e,s]],[/\b(tm\d{3}\w+) b/i],[a,[i,"NuVision"],[e,s]],[/\b(k88) b/i],[a,[i,"ZTE"],[e,s]],[/\b(nx\d{3}j) b/i],[a,[i,"ZTE"],[e,l]],[/\b(gen\d{3}) b.+49h/i],[a,[i,"Swiss"],[e,l]],[/\b(zur\d{3}) b/i],[a,[i,"Swiss"],[e,s]],[/\b((zeki)?tb.*\b) b/i],[a,[i,"Zeki"],[e,s]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[i,"Dragon Touch"],a,[e,s]],[/\b(ns-?\w{0,9}) b/i],[a,[i,"Insignia"],[e,s]],[/\b((nxa|next)-?\w{0,9}) b/i],[a,[i,"NextBook"],[e,s]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[i,"Voice"],a,[e,l]],[/\b(lvtel\-)?(v1[12]) b/i],[[i,"LvTel"],a,[e,l]],[/\b(ph-1) /i],[a,[i,"Essential"],[e,l]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[a,[i,"Envizen"],[e,s]],[/\b(trio[-\w\. ]+) b/i],[a,[i,"MachSpeed"],[e,s]],[/\btu_(1491) b/i],[a,[i,"Rotor"],[e,s]],[/(shield[\w ]+) b/i],[a,[i,"Nvidia"],[e,s]],[/(sprint) (\w+)/i],[i,a,[e,l]],[/(kin\.[onetw]{3})/i],[[a,/\./g," "],[i,ae],[e,l]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[a,[i,ne],[e,s]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[a,[i,ne],[e,l]],[/smart-tv.+(samsung)/i],[i,[e,v]],[/hbbtv.+maple;(\d+)/i],[[a,/^/,"SmartTV"],[i,oe],[e,v]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[i,ie],[e,v]],[/(apple) ?tv/i],[i,[a,P+" TV"],[e,v]],[/crkey/i],[[a,G+"cast"],[i,Y],[e,v]],[/droid.+aft(\w)( bui|\))/i],[a,[i,H],[e,v]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[a,[i,ge],[e,v]],[/(bravia[\w ]+)( bui|\))/i],[a,[i,X],[e,v]],[/(mitv-\w{5}) bui/i],[a,[i,te],[e,v]],[/Hbbtv.*(technisat) (.*);/i],[i,a,[e,v]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[i,re],[a,re],[e,v]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[e,v]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[i,a,[e,B]],[/droid.+; (shield) bui/i],[a,[i,"Nvidia"],[e,B]],[/(playstation [345portablevi]+)/i],[a,[i,X],[e,B]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[a,[i,ae],[e,B]],[/((pebble))app/i],[i,a,[e,S]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[a,[i,P],[e,S]],[/droid.+; (glass) \d/i],[a,[i,Y],[e,S]],[/droid.+; (wt63?0{2,3})\)/i],[a,[i,ne],[e,S]],[/(quest( 2| pro)?)/i],[a,[i,fe],[e,S]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[i,[e,$]],[/(aeobc)\b/i],[a,[i,H],[e,$]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[a,[e,l]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[a,[e,s]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[e,s]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[e,l]],[/(android[-\w\. ]{0,9});.+buil/i],[a,[i,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[t,[o,Oe+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[t,[o,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[o,t],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[t,o]],os:[[/microsoft (windows) (vista|xp)/i],[o,t],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[o,[t,se,ye]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[o,"Windows"],[t,se,ye]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[t,/_/g,"."],[o,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[o,ke],[t,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[t,o],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[o,t],[/\(bb(10);/i],[t,[o,me]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[t,[o,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[t,[o,W+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[t,[o,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[t,[o,"watchOS"]],[/crkey\/([\d\.]+)/i],[t,[o,G+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[o,_e],t],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[o,t],[/(sunos) ?([\w\.\d]*)/i],[[o,"Solaris"],t],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[o,t]]},_=function(c,d){if(typeof c===U&&(d=c,c=p),!(this instanceof _))return new _(c,d).getResult();var r=typeof m!==N&&m.navigator?m.navigator:p,u=c||(r&&r.userAgent?r.userAgent:w),M=r&&r.userAgentData?r.userAgentData:p,x=d?Te(Ee,d):Ee,b=r&&r.userAgent==u;return this.getBrowser=function(){var n={};return n[o]=p,n[t]=p,F.call(n,u,x.browser),n[L]=Se(n[t]),b&&r&&r.brave&&typeof r.brave.isBrave==O&&(n[o]="Brave"),n},this.getCPU=function(){var n={};return n[h]=p,F.call(n,u,x.cpu),n},this.getDevice=function(){var n={};return n[i]=p,n[a]=p,n[e]=p,F.call(n,u,x.device),b&&!n[e]&&M&&M.mobile&&(n[e]=l),b&&n[a]=="Macintosh"&&r&&typeof r.standalone!==N&&r.maxTouchPoints&&r.maxTouchPoints>2&&(n[a]="iPad",n[e]=s),n},this.getEngine=function(){var n={};return n[o]=p,n[t]=p,F.call(n,u,x.engine),n},this.getOS=function(){var n={};return n[o]=p,n[t]=p,F.call(n,u,x.os),b&&!n[o]&&M&&M.platform!="Unknown"&&(n[o]=M.platform.replace(/chrome os/i,_e).replace(/macos/i,ke)),n},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return u},this.setUA=function(n){return u=typeof n===T&&n.length>ee?re(n,ee):n,this},this.setUA(u),this};_.VERSION=j,_.BROWSER=K([o,t,L]),_.CPU=K([h]),_.DEVICE=K([a,i,e,B,l,v,s,S,$]),_.ENGINE=_.OS=K([o,t]),E.exports&&(f=E.exports=_),f.UAParser=_;var R=typeof m!==N&&(m.jQuery||m.Zepto);if(R&&!R.ua){var J=new _;R.ua=J.getResult(),R.ua.get=function(){return J.getUA()},R.ua.set=function(c){J.setUA(c);var d=J.getResult();for(var r in d)R.ua[r]=d[r]}}})(typeof window=="object"?window:Re)})(de,de.exports);var ri=de.exports;const si={flex:"","items-center":"","gap-3":""},li={"text-lg":""},ci={"mt-5":"",flex:"","gap-2":""},bi={flex:"","flex-col":""},wi={key:0,"op-70":""},di=D({__name:"user-agent-result-cards",props:{userAgentInfo:{},sections:{}},setup(E){const f=E,{userAgentInfo:m,sections:p}=Ve(f);return(j,w)=>{const A=Ue,O=He,N=Be,U=Pe,T=We,L=Ge;return g(),k("div",null,[V(L,{"x-gap":12,"y-gap":8,cols:"1 s:2",responsive:"screen"},{default:I(()=>[(g(!0),k(ce,null,be(z(p),({heading:a,icon:o,content:e})=>(g(),Me(T,{key:a},{default:I(()=>[V(U,{"h-full":""},{default:I(()=>[Q("div",si,[V(A,{size:"30",component:o,depth:3},null,8,["component"]),Q("span",li,we(a),1)]),Q("div",ci,[(g(!0),k(ce,null,be(e,({label:i,getValue:t})=>(g(),k("span",{key:i},[t(z(m))?(g(),Me(N,{key:0,tooltip:i},{default:I(()=>[V(O,{type:"success",size:"large",round:"",bordered:!1},{default:I(()=>[ze(we(t(z(m))),1)]),_:2},1024)]),_:2},1032,["tooltip"])):Ae("",!0)]))),128))]),Q("div",bi,[(g(!0),k(ce,null,be(e,({label:i,getValue:t,undefinedFallback:h})=>(g(),k("span",{key:i},[t(z(m))===void 0?(g(),k("span",wi,we(h),1)):Ae("",!0)]))),128))])]),_:2},1024)]),_:2},1024))),128))]),_:1})])}}}),fi=D({__name:"user-agent-parser",setup(E){const f=qe(navigator.userAgent);function m(w){return w.trim().length>0?ri.UAParser(w.trim()):{ua:"",browser:{},cpu:{},device:{},engine:{},os:{}}}const p=Fe(()=>Ye(()=>m(f.value),void 0)),j=[{heading:"Browser",icon:De,content:[{label:"Name",getValue:w=>w?.browser.name,undefinedFallback:"No browser name available"},{label:"Version",getValue:w=>w?.browser.version,undefinedFallback:"No browser version available"}]},{heading:"Engine",icon:ni,content:[{label:"Name",getValue:w=>w?.engine.name,undefinedFallback:"No engine name available"},{label:"Version",getValue:w=>w?.engine.version,undefinedFallback:"No engine version available"}]},{heading:"OS",icon:Je,content:[{label:"Name",getValue:w=>w?.os.name,undefinedFallback:"No OS name available"},{label:"Version",getValue:w=>w?.os.version,undefinedFallback:"No OS version available"}]},{heading:"Device",icon:je,content:[{label:"Model",getValue:w=>w?.device.model,undefinedFallback:"No device model available"},{label:"Type",getValue:w=>w?.device.type,undefinedFallback:"No device type available"},{label:"Vendor",getValue:w=>w?.device.vendor,undefinedFallback:"No device vendor available"}]},{heading:"CPU",icon:ii,content:[{label:"Architecture",getValue:w=>w?.cpu.architecture,undefinedFallback:"No CPU architecture available"}]}];return(w,A)=>{const O=Le;return g(),k("div",null,[V(O,{value:z(f),"onUpdate:value":A[0]||(A[0]=N=>Ie(f)?f.value=N:null),label:"User agent string",multiline:"",placeholder:"Put your user-agent here...",clearable:"","raw-text":"",rows:"2",autosize:"",monospace:"","mb-3":""},null,8,["value"]),V(di,{"user-agent-info":z(p),sections:j},null,8,["user-agent-info"])])}}});export{fi as default};
