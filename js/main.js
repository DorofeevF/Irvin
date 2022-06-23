$(document).ready(function () {
  $('#btn').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#scroll').offset().top - 150}, 1300);
    e.preventDefault();
  });
})