// http://stackoverflow.com/questions/19491336/get-url-parameter-jquery-or-how-to-get-query-string-values-in-js

function getUrlParameter(sParam) {

    var sPageURL = decodeURIComponent(window.location.search.substring(1)),

        sURLVariables = sPageURL.split('&'),

        sParameterName,

        i;



    for (i = 0; i < sURLVariables.length; i++) {

        sParameterName = sURLVariables[i].split('=');



        if (sParameterName[0] === sParam) {

            return sParameterName[1] === undefined ? true : sParameterName[1];

        }

    }

}



function menu(){

  $('#tab2').click(function() {

    $('#tab2content').slideToggle('slow');

  });
  
  /*$("#menu>li").click(function(){
		$(this).siblings().children("ul").slideUp();
		$(this).children("ul").slideToggle();
	});*/
  
  $("#ham").click(function(){
		$("#menu>div.topic:not(#ham)").slideToggle();
	});

}



function index(){

  $.each([music[music.length-3], music[music.length-2], music[music.length-1]], function( index, value ) {

    $(".list").prepend('<embed src="' + value['address'] + '" alt="' + value['Title'] + '" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html"><br><a class="click" href="music_element.html?id=' + value['id'] + '">Click here for more.</a>');

  });

  $.each([graphics[graphics.length-3], graphics[graphics.length-2], graphics[graphics.length-1]], function( index, value ) {

    $(".list").prepend('<a href="graphics_element.html?id=' + value['id'] + '"><img src="' + value['address'] + '" alt="' + value['Title'] + '"></a>');

  });

  $.each([cgi[cgi.length-3], cgi[cgi.length-2], cgi[cgi.length-1]], function( index, value ) {

    $(".list").prepend('<a href="cgi_element.html?id=' + value['id'] + '"><img src="' + value['address'] + '" alt="' + value['Title'] + '"></a>');

  });

}



function music_page(){

  $.each(music, function( index, value ) {

    $(".list").prepend('<embed src="' + value['address'] + '" alt="' + value['Title'] + '" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html"><br><a class="click" href="music_element.html?id=' + value['id'] + '">Click here for more.</a>');

  });

}



function graphics_page(){

  $.each(graphics, function( index, value ) {

    $(".list").prepend('<a href="graphics_element.html?id=' + value['id'] + '"><img src="' + value['address'] + '" alt="' + value['Title'] + '"></a>');

  });

}



function cgi_page(){

  $.each(cgi, function( index, value ) {

    $(".list").prepend('<a href="cgi_element.html?id=' + value['id'] + '"><img src="' + value['address'] + '" alt="' + value['Title'] + '"></a>');

  });

}



function music_element(){

  var id = getUrlParameter('id');

  var element = '<h1>' + music[id]['Title'] + '</h1>';

  element += '<embed src="' + music[id]['address'] + '" alt="' + music[id]['Title'] + '" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">';

  element += '<div class="info"><p class="date">' + music[id]['date'] + '</p><br>';

  element += '<p>' + music[id]['about'] + '</p></div>'

  $('.list').html(element);

}



function cgi_element(){

  var id = getUrlParameter('id');

  var element = '<h1>' + cgi[id]['Title'] + '</h1>';

  element += '<a href="' + cgi[id]['address'] + '"><img src="' + cgi[id]['address'] + '" alt="' + cgi[id]['Title'] + '"></a>';

  element += '<div class="info"><p class="date">' + cgi[id]['date'] + '</p><br>';

  element += '<p>' + cgi[id]['about'] + '</p></div>'

  $('.list').html(element);

}



function graphics_element(){

  var id = getUrlParameter('id');

  var element = '<h1>' + graphics[id]['Title'] + '</h1>';

  element += '<a href="' + graphics[id]['address'] + '"><img src="' + graphics[id]['address'] + '" alt="' + graphics[id]['Title'] + '"></a>';

  element += '<div class="info"><p class="date">' + graphics[id]['date'] + '</p><br>';

  element += '<p>' + graphics[id]['about'] + '</p></div>'

  $('.list').html(element);

}

