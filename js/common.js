//共通パーツ読み込み
$(function() {
    if (screen.width > 768) {
        $("#header").load("/header.html");
        $("#footer").load("/footer.html");
    }
    else {
        $("#header").load("/header_m.html");
        $("#footer").load("/footer_m.html");
    }
});
