(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,n,t){"use strict";(function(e){var r=t(0),o=t.n(r),a=[4,35,80,123,12345,44,8,5,24,3];n.a=function(){return o.a.createElement("div",null,function(n,t){if(0===n.length||n.length>200)console.log("Array has no elements or more than 200 elements");else if(t<1||t>1e7||!Number.isInteger(t)||t>n.length)console.log("Break - k is smaller than 1 or has value greater than 1000000, or k is not an integer, or k is greater than the length of array, therefore array cannot be divided into rows");else{for(var r=0;r<n.length;r++)if(n[r]<0||n[r]>1e6||!Number.isInteger(n[r]))return void console.log("There are other types of elements other than integer within array, or are smaller than 1 or are greater than 1000000");for(var o,a=[],l=t,i=0;i<n.length;i+=l)o=n.slice(i,i+l),a.push(o);for(var c="",s=[],h=Math.max.apply(null,n).toString().length,g="-".repeat(h),u="+".concat(g).repeat(t),f="-".repeat(h),m="+".concat(f).repeat(a[a.length-1].length),d=0;d<a.length;d++){s[d]="";for(var p=0;p<a[d].length;p++)s[d]+="|"+"\xa0".repeat(h-a[d][p].toString().length)+a[d][p];c+="".concat(u,"+\n"),c+="".concat(s[d],"|\n")}c+="".concat(m,"+"),e.stdout.write(c)}}(a,4))}}).call(this,t(11))},function(e,n,t){e.exports=t(12)},,,,,,function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(2),l=t.n(a),i=(t(10),t(3));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(i.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.4c2af809.chunk.js.map