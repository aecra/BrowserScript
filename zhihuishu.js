// ==UserScript==
// @name         智慧树刷课脚本
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自动播放，1.5倍速，静音，流畅画质，自动跳转至下一个视频
// @author       aecra
// @match        *://*.zhihuishu.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  function checkAndToNext(){
      let fileItem = $('.file-item');
      if($($($('.file-item.active')[0]).children('.status-box')[0]).children('i').attr('class') == 'icon-finish'){
          for(let i=0;i<fileItem.length;i++){
              if(fileItem[i]==$('.file-item.active')[0]){
                  $(fileItem[i+1]).click()
              }
          }
      }

      if($($('.bigPlayButton')[0]).css('display')!='none'){
          $($('.bigPlayButton')[0]).click()
      }

      if($(".definiLines .active")[0].className === "line1gq active") {
          console.log('切换到标清');
          $(".line1bq")[0].click();
      }

      if ($("video").length > 0 && $("video")[0].playbackRate != 1.5) {
          console.log('切换到1.5倍');
          $(".speedTab15")[0].click();
      }

      if ($("video")[0].volume > 0) {
          console.log('静音')
          $(".volumeIcon").click();
      }
  }

  setTimeout(function(){
      setInterval(checkAndToNext, 500);
  },3000)

})();