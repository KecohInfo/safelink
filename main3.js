var blog_url="http://safe.kecoh.info"; // Homepage Blog Safelink
var article1="/2018/08/4.Blogs.To.Help.Track.Current.Viral.Trends.html"; // Article 1
var article2="/2018/08/3.Surefire.Tips.to.Building.a.Great.Business.Team.html"; // Article 2
var article3="/2018/08/3.Marketing.Trends.To.Put.On.Your.Radar.Today.html"; // Article 3
var protected_links = "ekecoh.com,facebook.com,twitter.com,instagram.com"; // Protected Links
function auto_safeconvert(){var a=window.location.hostname,c=0;""==protected_links||protected_links.match(a)?""==protected_links&&(protected_links=a):protected_links+=", "+a;var b;a=document.getElementsByTagName("a");a_to_va=a.length;var d=(b=a_to_fa()).length;for(var e,f,h="",g=0;g<a_to_va;g++){e=!1;for(f=0;0==e&&f<d;)!(h=a[g].href).match(b[f])&&h&&h.match("http")||(e=!0),f++;if(0==e){e=Base64.encode(h+",");f=Math.floor(3*Math.random()+1);var k=null;"1"==f&&(k=""+article1);"2"==f&&
(k=""+article2);"3"==f&&(k=""+article3);a[g].href=""+blog_url+k+"?url="+e;a[g].rel="nofollow";c++}}a=document.getElementById("anonyminized");b=document.getElementById("found_links");a&&(a.innerHTML+=c);b&&(b.innerHTML+=a_to_va)}function a_to_fa(){return protected_links=protected_links.replace(" ",""),protected_links.split(",")}
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(a){var c,b,d="",e=0;for(a=Base64._utf8_encode(a);e<a.length;){var f=(c=a.charCodeAt(e++))>>2;var h=(3&c)<<4|(c=a.charCodeAt(e++))>>4;var g=(15&c)<<2|(b=a.charCodeAt(e++))>>6;var k=63&b;isNaN(c)?g=k=64:isNaN(b)&&(k=64);d=d+this._keyStr.charAt(f)+this._keyStr.charAt(h)+this._keyStr.charAt(g)+this._keyStr.charAt(k)}return d},decode:function(a){var c,b,d,e="",f=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,
"");f<a.length;){var h=this._keyStr.indexOf(a.charAt(f++))<<2|(c=this._keyStr.indexOf(a.charAt(f++)))>>4;c=(15&c)<<4|(b=this._keyStr.indexOf(a.charAt(f++)))>>2;var g=(3&b)<<6|(d=this._keyStr.indexOf(a.charAt(f++)));e+=String.fromCharCode(h);64!=b&&(e+=String.fromCharCode(c));64!=d&&(e+=String.fromCharCode(g))}return Base64._utf8_decode(e)},_utf8_encode:function(a){a=a.replace(/\r\n/g,"\n");for(var c="",b=0;b<a.length;b++){var d=a.charCodeAt(b);128>d?c+=String.fromCharCode(d):127<d&&2048>d?(c+=String.fromCharCode(d>>
6|192),c+=String.fromCharCode(63&d|128)):(c+=String.fromCharCode(d>>12|224),c+=String.fromCharCode(d>>6&63|128),c+=String.fromCharCode(63&d|128))}return c},_utf8_decode:function(a){for(var c="",b=0,d=c1=c2=0;b<a.length;)128>(d=a.charCodeAt(b))?(c+=String.fromCharCode(d),b++):191<d&&224>d?(c2=a.charCodeAt(b+1),c+=String.fromCharCode((31&d)<<6|63&c2),b+=2):(c2=a.charCodeAt(b+1),c3=a.charCodeAt(b+2),c+=String.fromCharCode((15&d)<<12|(63&c2)<<6|63&c3),b+=3);return c}};auto_safeconvert();
