;(function(d,$){
  var jQ_slideMenu;
    jQ_slideMenu=function(){
      var prop = {
        deferredImage: 'img.deferred',
        subContainer: '#subContainer',
        mainNavigation_trigger: '.mainNavigation_trigger',
        mainNavigation_appear: '.appeared'
      }

      function init(){
        //画像遅延読み込み設定
        $(prop.deferredImage).lazyload({
          threshold:10,
          effect:'fadeIn',
          effectspeed: 1000
        });

        //スライドメニューの開閉ボタン
        $(prop.mainNavigation_trigger).find('a').on('click', function(){
          $(prop.subContainer).toggleClass(replaceString(prop.mainNavigation_appear));
        });
      }

      //文字列置換処理
      function replaceString(_str, _bf, _af, _flg){
        var _reg = new RegExp(_bf || '[\\.#]', _flg || '');
        return _str ? _str.replace(_reg, _af || '') : false;
      }
      init();
    };
    jQ_slideMenu();
})(document, jQuery );
