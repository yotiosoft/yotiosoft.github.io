jQuery(function getArticleSummary(num) {
    $.getJSON("articles.json", function(data){
        return data[num].summary;
    });
});
