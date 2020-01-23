$(document).ready(function(){
$('form#fortunesurvey').submit(function(event){
  event.preventDefault();
  $('#homeResponse').show();
  $('input:checkbox[name=home]:checked').each(function(){
    var home = $(this).val();
    $('.homeResponse').append(home + "<br>");
  });
  $('#mouseResponse').show();
  $('input:checkbox[name=mouse]:checked').each(function(){
    var mouse = $(this).val();
    $('.mouseResponse').append(mouse + '<br>');
  });
  $('#fortunesurvey').hide();
  var result = calculate()
  function calculate() {

    if (result >= 6) {
      $('.homeResponse').show();
  
    } else {
      $('.mouseResponse').show();
    }
  var home = parseInt($('home').val());
  var mouse = parseInt($('mouse').val());
  var result = mouse + home;
 
  return home + mouse;



    });
  });
