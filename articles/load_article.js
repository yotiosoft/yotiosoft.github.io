$(document).ready(function () {
    $("#read_text").load("articles.json");
    $("#read_text2").text("./articles.json");
    $.getJSON("articles.json", function(data){
        for(var i in data){
            alert('name:' + data[i].title + '　age:' + data[i].link);
        }
    });
});
