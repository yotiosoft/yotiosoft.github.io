jQuery(function getArticleSummary(num) {
    $.getJSON("articles.json", function(data){
        $("#article_summary").html(data[num].summary);
    });
});
