$(document).ready(function(){
  // scroll to top link
  $("#to-top").click(function(a){
    $("body").ScrollTo({duration:800});
    a.preventDefault()
  });

  // Ajax loading icon
  $("body").append('<div id="ajaxloader"></div>');
})
