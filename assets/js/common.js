
$(function(){

  /**
   * @헤더부분에있는언어선택
   * 
   */
  $(".select-lang").click(function(){
    url = $("#langList").val()
    window.open(url)
  })
})