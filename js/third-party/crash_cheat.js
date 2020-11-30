<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/favicon.png");
         document.title = '◕ ں ◕喔哟,崩溃了';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/web.png");
         document.title = '(ฅ>ω<*ฅ) 咦,又好了~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });