/**
 * Created by web on 2019/1/16.
 */
$(function(){
  $.ajax({
    url: "http://127.0.0.1:6066/header.html",
    type: "get",
    success: function(res) {
      // 动态添加<link>到<head>元素中，自动引入main.css
      $("<link rel='stylesheet' href='../css/main.css'>").appendTo("head");
      $(res).replaceAll("#header");
      // 获取搜索框
      var $input = $("#header>div>div>input");
      // 获取查询按钮
      var $btnSearch = $input.next();
      // 单击查询按钮
      $btnSearch.click(function(){
        // 如果搜索框中有内容，且不是空字符时
        if($input.val().trim().length > 0){
          location.href = "searchers.html?kwords="+$input.val();
        }
      });
      // 当在搜索框上按下键盘时
      $input.keyup(function(e){
        if(e.keyCode == 13){
          // 如果按的是回车 就调用查询按钮的处理函数
          $btnSearch.click();
        }
      })
      // 如果地址栏中有kwords
      if(location.search.indexOf("kwords")!=-1){
        $input.val(//就读取kwords内容，放入搜索框
          // 将解码后的字符串解码为原文
          decodeURI(location.search.split("=")[1])
        )
      }

    }
  })
})

