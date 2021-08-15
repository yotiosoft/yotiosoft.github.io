//共通パーツ読み込み
$(function() {
    if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
        $("#header").load("/header_m.html");
        $("#footer").load("/footer_m.html");
    }
    else {
		var link = document.createElement('link');
        $("#header").load("/header.html");
        $("#footer").load("/footer.html");
    }
});
