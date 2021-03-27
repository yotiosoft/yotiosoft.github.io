$(document).ready(function () {
    $("#read_text").load("articles.json");
    $("#read_text2").text("./articles.json");
    $.getJSON("articles.json", function(data){
        for(var i in data){
            $("#article_index").text('year:' + data[i].year + '　title:' + data[i].title);
        }
    });
});
