function getArticleSummary(num_from_latest) {
    $.getJSON("articles.json", function(data){
        $("#article_index").text(data[num_from_latest].summary);
    });
};
