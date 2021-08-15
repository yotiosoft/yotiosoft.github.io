//共通パーツ読み込み
$(function() {
    window.addEventListener('resize', function(){
        if (window.innerWidth <= 768　|| navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
            var link = document.createElement('link');
            link.href = '/style_m.css';
            link.rel = 'stylesheet';
            link.type = 'text/css';

            $("#header").load("/header_m.html");
            $("#footer").load("/footer_m.html");
        }
        else {
            var link = document.createElement('link');
            link.href = '/style.css';
            link.rel = 'stylesheet';
            link.type = 'text/css';

            $("#header").load("/header.html");
            $("#footer").load("/footer.html");
        }
    });
});
