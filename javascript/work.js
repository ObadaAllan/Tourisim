
//Day Mode

$(document).ready(function(){
    $('.mode').change(function(){
      if($(this).prop('checked')){
        $('.header').css('background-image', "url('css/images/daya.jpg')");
        $('.fwall').css('background-image', "url('css/images/dayb.jpg')");
        $('body').css('background-color', "white");
        $('.mirado').css('color', "white");
        $('.card-body').css('background-color', "white");
        $('h3').css('color', "black");
        $('p').css('color', "black");
        $('#m1').css('color', "black");
        $('.seem').css('color','black')

      }
      else{
        $('.header').css('background-image', "url('css/images/night.jpg')");
        $('.fwall').css('background-image', "url('css/images/Mountain.jpg')");
        $('body').css('background-color', "black");
        $('.card-body').css('background-color', "black");
        $('h3').css('color', "white");
        $('p').css('color', "white");
        $('#m1').css('color', "white");
        $('.seem').css('color','white')
      }
    });
});
$('.navbar-toggler-icon').click(function(){
  var get = $('.map');
  var gett = $('.maplink');
  get.remove();
  gett.remove();
});


var text = ["Welcome", "Explore the world", "Tourisim website"];
var counter = 0;
var elem = document.getElementById("m1");
var inst = setInterval(change, 3000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}

function changeBG(id_img)
{

var image= document.getElementById(id_img);
    image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-lT6TcSB0vQ1r4MdN9NUcMtLT2jfKsnyzrnlAkCv-okumI80jMY9n-mNvEsGm4YF2Yk&usqp=CAU";
    image.style.height='145px';
  }
