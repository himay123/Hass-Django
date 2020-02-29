

$(document).ready(function() {

/*autocomplete ios*/
$('.ui-autocomplete').mouseenter(function(e){
e.preventDefault();
e.stopPropagation();

});
/*autocomplete ios*/

/*Code from Rupali*/
  var usersDetails = JSON.parse(window.sessionStorage.getItem('ClaimUserDetail'));

if(usersDetails!=null)
    $("#loss-dtldob").datepicker("option", "minDate", usersDetails[0].StartDate);
 /*Code from Rupali*/

$('#claim-intpopup .close').click(function(){
  $('#block').show();
  $('#block1').show();
  $('#claim-details').hide();
  $('#motor-dtl').val('');
  $('#motor-model').val('');
  $('#car-nm').val('');
  $('#policy-num,#txtEngChas').val('');
  $('#claim-intpopup .errorN').hide();
  $('#js-ntcra').hide();
  $('#js-claim-int').show();
});

$('.block input').on('click', function(){
    $(this).parents('.claim-content').find('.errorN').hide();
});

$('.block input').on('keypress change paste', function(){
    $(this).parents('.claim-content').find('.errorN').hide();
});

    $('.driver-details .sbOptions li, .fir-details .sbOptions li').on('click', function(){
        //console.log(516145641);
        $(this).parents('.block').find('.errorN').hide();
    });

$('.js-ntcra').on('click', function(){
  $('.block').show();
  $('.claim-details').hide();
  $(this).hide();
  $('#js-claim-int').show();
});


$('#setTime-hr').on('input', function () {    
  var value = $(this).val();   
  //console.log(value.indexOf('.') === -1);
  //$(this).val(Math.max(Math.min(value, 12), 00)); 
  
  if(value.length > 2) {
    this.value = this.value.slice(0,2); 
  }
  if(value > 12){
    $(this).val(Math.max(Math.min(value, 12)));
  }
  if(value.length == 2) {
    $('#setTime-mm').focus();
  }

}); 


$('#setTime-mm').on('input', function () {    
  var value = $(this).val();   
  //console.log(value.indexOf('.') === -1);
  //$(this).val(Math.max(Math.min(value, 12), 00)); 
  
  if(value.length > 2) {
    this.value = this.value.slice(0,2); 
  }
  if(value > 59){
    $(this).val(Math.max(Math.min(value, 59)));
  }

  if(value.length == 2) {
    $('#ddltl').focus();
  }
  
}); 


$('#setTime-hr, #setTime-mm').on('focusout', function () {
  var value = $(this).val();   
  if(value <= 9 && value.length <= 1 && value !== ''){
    $(this).val('0'+value);
  }

  if($(this).hasClass('setTimeHour')){
      if(value.length){
      $('#setTime-mm').focus();
    }
  }

});

$('#setTime-hr, #setTime-mm').on('focus', function () {
  $(this).select()
});


// $('#setTime-hr').on('input', function () {    
//   var value = $(this).val();   

//   if ((value !== '') && (value.indexOf('.') === -1)) {   
//     $(this).val(Math.max(Math.min(value, 12), 0));   
//   }    
// });   
    
// $('#setTime-mm').on('input', function () {   
//   var value = $(this).val();   
//   if ((value !== '') && (value.indexOf('.') === -1)) {   
//     $(this).val(Math.max(Math.min(value, 59), 0));   
//   }    
// });   

  
  // $('.time-check input').on('input', function (e) {
  //     if (e.value.length >= 2) e.value = e.value.slice(0, 2);
  //     if (e.value.length === 1) e.value = '0' + e.value;
  //     if (!e.value) e.value = '00';
  // }); 
 // document.querySelectorAll('.time-check input').forEach(e => e.oninput = () => {   
 //              if (e.value.length >= 2) e.value = e.value.slice(0, 2);   
 //                if (e.value.length === 1) e.value = '0' + e.value;    
 //                if (!e.value) e.value = '00';   
 //              });


  var ScrollPos;
$('.apopup').click(function(){
    ScrollPos = $(window).scrollTop();
});
$('#claim-intpopup .close').click(function(){
  $('.overlayN').css('display', 'none');
});


 $('.apopup').click(function () {
        $('#' + $(this).attr('href').replace('#', '')).css({
            'visibility': 'visible',
            'opacity': '1',
            'display': 'block'
        })
    });



$('.js-fd').click(function (e) {
    if (firDetails() == true) {
        MotorClaimIntimate.CallClaimIntimate();
    }
    e.preventDefault();
});


 $('#js-claim-int').click(function (e) {
    if (claimIntimation() == true) {
        MotorClaim.CallEDW();

    }
    e.preventDefault();
});

$('.js-gb').click(function(e){
    if(driverDetails() == true){
      $('.driver-details').hide();
      $('.fir-details').show();
      $(this).parents('.claim-intdetail').find('li').removeClass('active-tabs');
     $(this).parents('.claim-intdetail').find('li:nth-child(2)').addClass('driverdtl-fill');
      $(this).parents('.claim-intdetail').find('li:nth-child(2)').removeClass('active-tabs');
      $(this).parents('.claim-intdetail').find('li:last-child').addClass('active-tabs');
      $(this).parents('.claim-intdetail').find('.claim-tabs li:last-child').removeClass('fir-fill');
       $('body, html').animate({scrollTop:$('.planDetails').offset().top});
    }
    e.preventDefault();
});

$('.claim-intdetail input, .driver-details select, .claim-intdetail textarea').on('keypress change paste', function(){
  $(this).parents('.new-block').find('.errorN').hide();
});


$('.block input, .block textarea').keyup(function(){
  $(this).parents('.block').find('.errorN').hide();
});

$('.block input, .new-block textarea, .gender-block input, .block select').on('click', function(){
  $(this).parents('.block').find('.errorN').hide();
  $(this).parents('.gender-block').find('.errorN').hide();
  $(this).parents('.new-block').find('.errorN').hide();

});


$('.tab1').on('click', function(){

  if(firDetails() == false){
      $(this).parents('.claim-intdetail').find('li.active-tabs:last-child').addClass('fir-fill');
      $('.errorN').hide();

  }

      else{
          $(this).parents('.claim-intdetail').find('li.active-tabs:last-child').addClass('fir-fill');
      }
        $('.driver-details').hide();
        $('.fir-details').hide();
        $('.loss-details').show();
        $(this).parents('.claim-intdetail').find('li:first-child').removeClass('lossdtl-fill');
        $(this).parents('.claim-intdetail').find('.claim-tabs li:first-child').addClass('active-tabs');
        $(this).parents('.claim-intdetail').find('.claim-tabs li:nth-child(2)').addClass('driverdtl-fill');
        $(this).parents('.claim-intdetail').find('li:last-child').removeClass('active-tabs');
        $(this).parents('.claim-intdetail').find('li:nth-child(2)').removeClass('active-tabs');
});


$('.tab2').on('click', function(){

  if(firDetails() == false){
      $(this).parents('.claim-intdetail').find('li.active-tabs:last-child').addClass('fir-fill');
      $('.errorN').hide();

  }

      else{
          $(this).parents('.claim-intdetail').find('li.active-tabs:last-child').addClass('fir-fill');
      }
        $('.driver-details').show();
        $('.fir-details').hide();
        $('.loss-details').hide();
       $(this).parents('.claim-intdetail').find('li:nth-child(2)').removeClass('driverdtl-fill');
       $(this).parents('.claim-intdetail').find('li:nth-child(2)').addClass('active-tabs');
       $(this).parents('.claim-intdetail').find('li:first-child').addClass('lossdtl-fill');
       $(this).parents('.claim-intdetail').find('li:last-child').removeClass('active-tabs');
       $(this).parents('.claim-intdetail').find('li:first-child').removeClass('active-tabs');
    });


$('.tab3').on('click', function(){
        $('.fir-details').show();
        $('.driver-details').hide();
        $('.loss-details').hide();
       $(this).parents('.claim-intdetail').find('li:nth-child(2)').removeClass('driverdtl-fill');
       $(this).parents('.claim-intdetail').find('li:last-child').removeClass('fir-fill');
       $(this).parents('.claim-intdetail').find('li:last-child').addClass('active-tabs');
        $(this).parents('.claim-intdetail').find('li:nth-child(2)').addClass('driverdtl-fill');
        $(this).parents('.claim-intdetail').find('li:nth-child(2)').removeClass('active-tabs');
       $(this).parents('.claim-intdetail').find('li:first-child').removeClass('active-tabs');
       $(this).parents('.claim-intdetail').find('li:first-child').addClass('lossdtl-fill');
});      


  $('.js-ld').click(function(e){
    if(lossDetails1() == true){
      $('.loss-details').hide();
      $('.driver-details').show();
      $(this).parents('.claim-intdetail').find('.claim-tabs li').removeClass('active-tabs');
      $(this).parents('.claim-intdetail').find('.claim-tabs li:first-child').addClass('lossdtl-fill');
      $(this).parents('.claim-intdetail').find('.claim-tabs li:nth-child(2)').addClass('active-tabs');
      $(this).parents('.claim-intdetail').find('.claim-tabs li:nth-child(2)').removeClass('driverdtl-fill');
       $('body, html').animate({scrollTop:$('.planDetails').offset().top})
    }
    e.preventDefault();
});

 selectBtn();
  $('#dr-rel').parents('.basic_dd').find('.sbSelector').css('opacity', '1');
  $('#dr-rel').parents('.block').addClass('focus');
});

// $(window).load(function(){
//  if($(window).width()<767){
//   $('.claim_process .c_panel_body').hide();
//   $('.claim_process .c_panel').removeClass('active');
//   $('.claim_process .c_panel_head').removeClass('active');
// }
 
// });
/* claim validation*/


function selectBtn(){
    $('.fir-select').click(function(e){
        e.preventDefault();
        $('.fir-select').removeClass('selected');
        $(this).addClass('selected');
        $(this).parents('.block').find('.errorN').hide();
        if($(this).hasClass('No')){
          $('.wid-block.cr').hide();
          $('#wid-block').addClass('noblock');
        }
        else
        {
           $('.wid-block.cr').show();
           $('#wid-block').removeClass('noblock');
        }
});
}    
 
function IsValidDateTime()
{
var lossDate= MotorClaimIntimate.getMMddyyyyformat($("#loss-dtldob").val());
var lossTime= $("#setTime-hr").val()+":"+$("#setTime-mm").val()+" "+$("#ddltl").val();
var date1 = new Date(lossDate +" "+lossTime); 


if(new Date() > date1){ 
return true;
}
else{
  $('#setTime-hr').parents('.block').find('.errorN').show().text('Please select past time');
return false;
}
}


function showError(el){
  el.parents('.claim-content').find('.errorN').show();

}
function hideError(el){
  el.parents('.claim-content').find('.errorN').hide();
}



function claimIntimation(){
  var valid = true;
  var el22 = $('#policy-num');
 var el23 = $('#txtEngChas');

  if(el22.val() == ''){
    showError(el22);
    valid = false;
  }
  if(el23.val() == ''){
    showError(el23);
    valid = false;
  }
  else if(el23.val().length < 5){
    el23.parents('.block').find('.errorN').text('Please enter Correct engine / chassis number.').show();
    valid = false;
  }
  if(valid){
    hideError(el22);
     hideError(el23);
  
  }
  return valid; 
}




 

/* claim validation*/

function lossDetails1(){
  var valid = true;
  var el41 = $('#loss-dtldob'),
  el42 = $('#setTime-hr'),
  el43 = $('#setTime-mm'),
  el44 = $('#loi'),
  el45 = $('#inc-des'),
  el46 = $('#loc-inc');

  if(el41.val() == ''){
    showError(el41);
    valid = false;
  }
   if(el42.val() == ''){
    showError(el42);
    valid = false;
  }

  if(el43.val() == ''){
    showError(el43);
    valid = false;
  }

  //  if(el43.val() == ''){
  //   showError(el42);
  //   valid = false;
  // }
if(el42.val() == '' && el43.val() == ''){
    $('#setTime-hr').parents('.block').find('.errorN').show().text('Please enter time of loss');
    showError(el42);
    valid = false;

}
else if(el41.val() != '' && IsValidDateTime()==false){
  showError(el42);
    valid = false;
}

  if(el44.val() == ''){
    showError(el44);
    valid = false;
  }
  if(el45.val() == ''){
    showError(el45);
    valid = false;
  }
  if(el46.val() == ''){
    showError(el46);
    valid = false;
  }
if (MotorClaimIntimate.StateCityId == "" || $('#txtstatecity').val() == "" || $('#txtstatecity').val() == undefined) {
            $('#errorCity').css('display', 'inline').parent().addClass("err");
            $('#errorCity').html("Please select valid City");
             valid = false;
        }


  if(valid){
    $(this).parents('.claim-intdetail').find('li.tab2').css("cursor", "pointer");
    //alert('submitted');
  }
  return valid;
}

function driverDetails(){
  var valid = true;
  var el51 = $('#dr-name'),
  el52 = $('#dr-rel'),
  el53 = $('.gen-cl');


  if(el51.val() == ''){
    showError(el51);
    valid = false;
  }
  if(el52.val() == 0){
    showError(el52);
    valid = false;
  }
  if($('.gen-cl:checked').length < 1){
       el53.parents('.gender-block').find('.errorN').show();
       valid = false;
    }

  if(valid){
  }
  return valid;
}


function firDetails(){
  var valid = true;
  var el71 = $('.fir-select'),
  el72 = $('#dri-rel');

  if($('.fir-select.selected').length < 1){
       el71.parents('.fir-details').find('.errorN').show();
       valid = false;
    }

 if(!$('.fir-select.No').hasClass('selected')){
     if(el72.val() == ''){
       showError(el72);
       valid = false;
     }
 }


  if(valid){
  }
  return valid;
}

 



function showError(el){
  el.parents('.block').find('.errorN').show();

}
function hideError(el){
  el.parents('.block').find('.errorN').hide();
}


function locautocomplete(){

var availableTags
    $( "#loi" ).autocomplete({
      source: availableTags
    });
}



/*---------------------claim intimation------------------------*/