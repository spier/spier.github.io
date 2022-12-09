jQuery(document).ready(function($){

  $('#github').mouseover(function(){
    $('#mousing').text("GitHub");
  });

  $('#twitter').mouseover(function(){
    $('#mousing').text("Twitter");
  });

  $('#mastodon').mouseover(function(){
    $('#mousing').text("Mastodon");
  });

  $('#rss').mouseover(function(){
    $('#mousing').text("RSS");
  });

  $('.social-button').mouseout(function(){
    $('#mousing').html("&nbsp;");
  });

});
