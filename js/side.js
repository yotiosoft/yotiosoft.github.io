$(function($){
  var content = $("#content");
  var sidebar = $("#sidebar");
  var sticked = $("#sticked");

  // サイドバーの位置
  var sidebar_top = sidebar.offset().top;
  // 固定するコンテンツの元々の位置
  var sticked_original_top = sticked.offset().top;
  // 固定するコンテンツの高さ
  var sticked_height = sticked.height();

  $(window).on('scroll resize', function(){ // スクロールかリサイズ時
      // 現在の位置
      var scrollTop = $(document).scrollTop() + document.getElementById('pegeheader_id').style.height + 50;
      // メインコンテンツ最後尾
      var content_bottom = content.offset().top + content.height();

      if ((scrollTop > sticked_original_top) && (scrollTop < content_bottom - sticked_height)){
          // 現在位置が、初期位置より下で、メインコンテンツ最後尾より上なら、画面上部にサイドバーを固定
          sticked.css({'position': 'fixed',
              'top': document.getElementById('pegeheader_id').style.height + 50,
              'width': sidebar.width()
          });
      } else if(scrollTop >= content_bottom - sticked_height){
          // 現在位置がメインコンテンツ最後尾より下なら、メインコンテンツ最後尾にサイドバーを位置させる
          sticked.css({'position': 'absolute',
              'top': content_bottom - sticked_height - sidebar_top,
              'width': sidebar.width()
          });
      } else {
          // 現在位置が初期位置より上なら、何もしない
          sticked.css({'position': 'static'});
      }
  });
});
