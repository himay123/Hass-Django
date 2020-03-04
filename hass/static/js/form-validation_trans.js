$(document).ready(function() {


$('#gst-uin').bind('keypress cut copy paste', function (e) {
        var regex, cursorSt, cursorEnd;
        var firstChar = $(this).val().substr(0, 1);
        cursorSt = $(this)[0].selectionStart;
        cursorEnd = $(this)[0].selectionEnd;
        var curr = $(this).val();
        var foo = $(this).val();
        if (this.selectionStart == 0) {
            regex = new RegExp("^[0-3]+$");
        }

        if (this.selectionStart == 1) {
            if (firstChar <= 2) {
                regex = new RegExp("^[0-9]+$");
            } else {
                regex = new RegExp("^[0-8]+$");
            }
        }

        if ((this.selectionStart > 1 && this.selectionStart < 7) || (this.selectionStart == 11) || (this.selectionStart == 13)) {
            regex = new RegExp("^[a-zA-Z]+$");
        }

        if ((this.selectionStart > 6 && this.selectionStart < 11)) {
            regex = new RegExp("^[0-9]+$");
        }
        if ((this.selectionStart == 12) || (this.selectionStart == 14)) {
            regex = new RegExp("^[a-zA-Z0-9]+$");
        }
        var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (this.selectionStart < 15) {
            if (!regex.test(key)) {
                e.preventDefault();
                return false;
            }
        }

        if ((cursorSt == cursorEnd && cursorSt == curr.length) || (cursorSt == cursorEnd)) {
            cursorSt += 1;
            cursorEnd += 1;
        }
        if (curr != foo) {
            $(this).val(foo);
            $(this)[0].selectionStart = cursorSt;
            $(this)[0].selectionEnd = cursorEnd;
        }

    });



	landingEvents();
	//autocompleteBlock();
    /*numeric pattern*/
 $(".Numeric").keyup(removeextraNumeric).blur(removeextraNumeric);
 $(".AlphaTxt").keyup(removeextraAlphabet).blur(removeextraAlphabet);
 $(".AlphaNumeric").keyup(removeextraAlphanumeric).blur(removeextraAlphanumeric);
 $(".Policynum").keyup(removeextraAlphanumericSC).blur(removeextraAlphanumericSC);
$(document).on('keyup blur', '.Numeric', removeextraNumeric);
$(document).on('keyup blur', '.AlphaTxt', removeextraAlphabet);
$(document).on('keyup blur', '.AlphaNumeric', removeextraAlphanumeric);
$(document).on('keyup blur', '.Policynum', removeextraAlphanumericSC);

    $(document).on('keydown', '.tel, .numeric', function (e) { 46 == e.keyCode || 8 == e.keyCode || 9 == e.keyCode || 27 == e.keyCode || 13 == e.keyCode || 65 == e.keyCode && e.ctrlKey === !0 || e.keyCode >= 35 && e.keyCode <= 39 || (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) && e.preventDefault() });

    $(document).on('keyup keypress', '.tel, .numeric', function (e) {
        var regex = /^[0-9\.]$/;
        var str = $(this).val();
        var subStr = str.substr(str.length - 1);
        if (!regex.test(subStr)) {

            if (str.length > 0) {
                $(this).val(str.substr(0, (str.length - 1)));
            } else {
                $(this).val();
            }

        }

    });
/*numeric pattern*/


    /*alpha pattern*/

    $(document).on('keydown', '.alphaTxt', function (e) { 46 == e.keyCode || 8 == e.keyCode || 9 == e.keyCode || 27 == e.keyCode || 13 == e.keyCode || 65 == e.keyCode && e.ctrlKey === !0 || e.keyCode >= 35 && e.keyCode <= 39 || 32 == e.keyCode || 222 != e.keyCode && (e.keyCode < 65 || e.keyCode > 90) && e.preventDefault() });
    $(document).on('keyup paste keypress', '.alphaTxt', function (e) {
        var regex = /[a-zA-Z ]*$/;
        var str = $(this).val();
        var subStr = str.substr(str.length - 1);
        if (!regex.test(subStr)) {

            if (str.length > 0) {
                $(this).val(str.substr(0, (str.length - 1)));
            } else {
                $(this).val();
            }

        }

    });

/*alpha pattern*/


/*alpha numeric*/
$(document).on('keyup keypress', '.alphaNumeric', function (e) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }

    e.preventDefault();
    return false;
});

/*alpha numeric*/

	/* Policy Number */
	
	$(document).on('keyup keypress', '.policynum', function (e) {
    var regex = new RegExp("^[a-zA-Z0-9/-]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }

    e.preventDefault();
    return false;
});

	
	/* Policy Number */
	
/*Registration number regex*/



$('.vehicle-regno').bind('keypress', function (e) {
        var regex, cursorSt, cursorEnd;
        var firstChar = $(this).val().substr(0, 1);
        cursorSt = $(this)[0].selectionStart;
        cursorEnd = $(this)[0].selectionEnd;
        var curr = $(this).val();
        var foo = $(this).val();
        if (this.selectionStart == 0) {
            regex = new RegExp("^[A-z]+$");
        }

        if (this.selectionStart == 1) {
            if (firstChar <= 2) {
                regex = new RegExp("^[A-z]+$");
            } else {
                regex = new RegExp("^[A-z]+$");
            }
            }        
    if ((this.selectionStart > 1 && this.selectionStart < 4)) {
            regex = new RegExp("^[a-zA-Z0-9]+$");
        }

        if ((this.selectionStart > 3 && this.selectionStart < 6)) {
            regex = new RegExp("^[a-zA-Z0-9]+$");
        }
        if ((this.selectionStart > 5 && this.selectionStart < 11)) {
            regex = new RegExp("^[a-zA-Z0-9]+$");
        }
        var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (this.selectionStart < 11) {
            if (!regex.test(key)) {
                e.preventDefault();
                return false;
            }
        }

        if ((cursorSt == cursorEnd && cursorSt == curr.length) || (cursorSt == cursorEnd)) {
            cursorSt += 1;
            cursorEnd += 1;
        }
        if (curr != foo) {
            $(this).val(foo);
            $(this)[0].selectionStart = cursorSt;
            $(this)[0].selectionEnd = cursorEnd;
        }

    });

/*Registration number regex*/


   // $('#register-vehile').on("cut copy paste",function(e) {
   //    e.preventDefault();
   // });


});




/** GLobal Variable **/
var regEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,4})$/i;
//var regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var regMobile = /^[0-9]{10}$/;
/** GLobal Variable **/




function landingEvents(){
/** Error common Validation **/
//$('.js-car-register').on('click', function(){
//    if(carRegistration()){
//        var $go = $(this).data('submit');
//        window.location = $go;
//        //alert('Submitted');
//       }
//    });

//$('.js-tellaboutcar').on('click', function(){
//    if(carRegmobemail()){
//        var $go = $(this).data('submit');
//        window.location = $go;
//        //alert('Submitted');
//       }
//    });


//$('.js-gotnewcar').on('click', function(){
//    if(carRegmobemail()){
//        var $go = $(this).data('submit');
//        window.location = $go;
//        //alert('Submitted');
//       }
//    });


$('.js-subbtn').on('click', function(){
    if(carPreviouspolicy()){
        $(this).parents('.ip-main').find('.section-content').removeClass('active');
        $(this).parents('.ip-main').find('.side-panel').addClass('close');
        $(this).parents('.ip-main').find('.side-panel').removeClass('active');
        $('.overlay').hide();
        $('body').removeClass('no-scroll');
       }
    });


//$('.js-car-proc').on('click', function(){
//    if(tellAboutcars()){
//        // $(this).parents('.ip-main').find('.section-content').removeClass('active');
//        // $(this).parents('.ip-main').find('.side-panel').addClass('close');
//        // $(this).parents('.ip-main').find('.side-panel').removeClass('active');
//        // $('.overlay').hide();
//        // $('body').removeClass('no-scroll');
//       }
//    });

$('.js-addcovers-disc').on('click', function(){
    if(addCoversdiscount()){
        //alert('Submitted');
        $('.overlayN').removeClass('active');
        $('html, body').removeClass('over-hidden');

       }
    });


$('.js-pacovers').on('click', function(){
    if(paAccidentcover()){
        //alert('Submitted');
        $('.overlayN').removeClass('active');
        $('html, body').removeClass('over-hidden');
       }
    });




$('.check-feild .input-check').click(function () {
    $(this).parents('.check-feild').find('.ui-error').hide();
 })


$('.val-req').on('focusout', function(){
        ErrorOnFocus($(this));
});

$('.val-req').on('keypress change', function(){
        hideError($(this)); 
});

function ErrorOnFocus(el){
    var $this = el;
    if($this.hasClass('val-vehiledetail')){
        if($this.val() == ''){
            showError($this);
        }else{
            hideError($this);
        }
    }
    if($this.hasClass('val-mob')){
        if(!regMobile.test($this.val())){
            showError($this);
        }else{
            hideError($this);
        }
    }
    if($this.hasClass('val-eml')){
        if(!regEmail.test($this.val())){
            showError($this);
        }else{
            hideError($this);
        }
    }
    if($this.hasClass('val-carmakemodel')){
        if($this.val() == ''){
            showError($this);
        }else{
            hideError($this);
        }
    } 
    if($this.hasClass('val-purchase-date')){
        if($this.val() == ''){
            showError($this);
        }else{
            hideError($this);
        }
    }
    if($this.hasClass('val-cityreg')){
        if($this.val() == ''){
            showError($this);
        }else{
            hideError($this);
        }
    }
    if($this.hasClass('val-exshowroom')){
        if($this.val() == ''){
            showError($this);
        }else{
            hideError($this);
        }
    }
    if($this.hasClass('val-policy-endate')){
        if($this.val() == ''){
            showError($this);
        }else{
            hideError($this);
        }
    }
    if($this.hasClass('val-noclaims')){
        if($this.find('.selected-tag').length == 0){
            showError($this);
        }else{
            hideError($this);
        }
    }
    if($this.hasClass('val-claimsbonus')){
        if($this.find('.selected-tag').length == 0){
            showError($this);
        }else{
            hideError($this);
        }
    } 
    if($this.hasClass('val-purchased-year')){
        if($this.find('.selected-tag').length == 0){
            showError($this);
        }else{
            hideError($this);
        }
    }
    if($this.hasClass('val-electrical-ac')){
        if($this.val() == ''){
            showError($this);
        }else{
            hideError($this);
        }
    }
    if($this.hasClass('val-nonelectrical')){
        if($this.val() == ''){
            showError($this);
        }else{
            hideError($this);
        }
    }
    if($this.hasClass('val-lpg-cng')){
        if($this.find('.selected-tag').length == 0){
            showError($this);
        }else{
            hideError($this);
        }
    }
    if($this.hasClass('vel-vol-deduct')){
        if($this.find('.selected-tag').length == 0){
            showError($this);
        }else{
            hideError($this);
        }
    }                                               
}
/** Error common Validation **/
}


/*errorshowhide*/
function showError(el){
  // $(el).parents('.input-block').find('.ui-error').show();

   //$(el).parents('.check-feild').find('.ui-error').show();
   //$(el).parents('.choice-radio-block').find('.ui-error').show();
   //$(el).parents('.pacover-popblock').find('.ui-error').show();
}
function hideError(el){
   //$(el).parents('.input-block').find('.ui-error').hide();
   //$(el).parents('.check-feild').find('.ui-error').hide();
   //$(el).parents('.choice-radio-block').find('.ui-error').hide();
   //$(el).parents('.pacover-popblock').find('.ui-error').hide();
}
/*errorshowhide*/


/* landing car registration*/
function carRegistration(){
    var valid = true,
        inMobileno = $('.val-mob'),
        inEmailid = $('.val-eml'),
        invehdetail = $('.val-vehiledetail'),
        termCon = $('.val-terms');

    if(invehdetail.val() == ''){
        showError(invehdetail);
        valid = false; 
    }
    if(!regMobile.test(inMobileno.val())){
        showError(inMobileno);
        valid = false; 
    }
    if(!regEmail.test(inEmailid.val())){
        showError(inEmailid);
        valid = false; 
    }
    if(!termCon.is(':checked')){
        showError(termCon);
        valid = false;
    }
    return valid;
}



function carRegmobemail(){
    var valid = true,
        inMobileno = $('.val-mob'),
        inEmailid = $('.val-eml');

    if(!regMobile.test(inMobileno.val())){
        showError(inMobileno);
        valid = false; 
    }
    if(!regEmail.test(inEmailid.val())){
        showError(inEmailid);
        valid = false; 
    }
    return valid;
}



function carPreviouspolicy(){
    var valid = true,
        inCarmakemodel = $('.val-carmakemodel'),
        inPurchasedate = $('.val-purchase-date'),
        inCityreg = $('.val-cityreg'),
        inExshowroom = $('.val-exshowroom'),
        inPolicyenddate = $('.val-policy-endate'),
        inNoclaims = $('.val-noclaims'),
        inClaimsbonus = $('.val-claimsbonus'),
        inRegisterui = $('.val-regunind'),
        inPrepolicy = $('.val-prepolicy'),
        inVehicleowner = $('.val-vehicle-owner');

    if(inCarmakemodel.val() == ''){
        showError(inCarmakemodel);
        valid = false; 
    }
    if(inPurchasedate.val() == ''){
        showError(inPurchasedate);
        valid = false; 
    }
    if(inCityreg.val() == ''){
        showError(inCityreg);
        valid = false; 
    }
    if(inExshowroom.val() == ''){
        showError(inExshowroom);
        valid = false; 
    }
    if(inPolicyenddate.val() == ''){
        showError(inPolicyenddate);
        valid = false; 
    } 
    if(inNoclaims.find('.selected-tag').length == 0){
        showError(inNoclaims);
        //console.log(inNoclaims.length);
        valid = false; 
    }
    if(inClaimsbonus.find('.selected-tag').length == 0){
        showError(inClaimsbonus);
        valid = false; 
    }
    if(!inRegisterui.is(':checked')){
        showError(inRegisterui);
        valid = false;
    } 
    if(!inPrepolicy.is(':checked')){
        showError(inPrepolicy);
        valid = false;
    }
    if(!inVehicleowner.is(':checked')){
        showError(inVehicleowner);
        valid = false;
    }                                   
    return valid;
}



function tellAboutcars(){
    var valid = true,
        inCarmakemodel = $('.val-carmakemodel'),
        inCityreg = $('.val-cityreg'),
        invehperyear = $('.val-purchased-year');

    if(inCarmakemodel.val() == ''){
        showError(inCarmakemodel);
        valid = false; 
    }
    if(inCityreg.val() == ''){
        showError(inCityreg);
        valid = false; 
    }
    if(invehperyear.find('.selected-tag').length == 0){
        showError(invehperyear);
        valid = false; 
    }                                   
    return valid;
}



function addCoversdiscount(){
    var valid = true,
        inElectricalAcc = $('.val-electrical-ac'),
        inNonelectrical = $('.val-nonelectrical'),
        inLpgcng = $('.val-lpg-cng'),
        inAraiapproved = $('.val-arai-approve'),
        inAutomobile = $('.val-memauto'),
        inVoluntaryde = $('.vel-vol-deduct');

    if(inElectricalAcc.val() == ''){
        showError(inElectricalAcc);
        valid = false; 
    }
    if(inNonelectrical.val() == ''){
        showError(inNonelectrical);
        valid = false; 
    }
    if(inLpgcng.find('.selected-tag').length == 0){
        showError(inLpgcng);
        valid = false; 
    }
    // if(!inAraiapproved.is(':checked')){
    //     showError(inAraiapproved);
    //     valid = false;
    // }
    // if(!inAutomobile.is(':checked')){
    //     showError(inAutomobile);
    //     valid = false;
    // }
    if(inVoluntaryde.find('.selected-tag').length == 0){
        showError(inVoluntaryde);
        valid = false; 
    }                                            
    return valid;
}


function paAccidentcover(){
    var valid = true,
    inPacoverscheck = $('.pa_Checkboxs');

    if(!inPacoverscheck.is(':checked')){
        showError(inPacoverscheck);
        valid = false;
    }    
    return valid;
}


/* landing car registration*/


function removeextraAlphanumericSC() {
    var initVal = $(this).val();
    outputVal = initVal.replace(/[^0-9a-zA-Z/-]/g,"");       
    if (initVal != outputVal) {
        $(this).val(outputVal);
    }
};

function removeextraAlphanumeric() {
    var initVal = $(this).val();
    outputVal = initVal.replace(/[^0-9a-zA-Z]/g,"");       
    if (initVal != outputVal) {
        $(this).val(outputVal);
    }
};

function removeextraAlphabet() {
    var initVal = $(this).val();
    outputVal = initVal.replace(/[^a-zA-Z ]/g,"");       
    if (initVal != outputVal) {
        $(this).val(outputVal);
    }
};

function removeextraNumeric() {
    var initVal = $(this).val();
    outputVal = initVal.replace(/[^0-9]/g,"");       
    if (initVal != outputVal) {
        $(this).val(outputVal);
    }
};
//function autocompleteBlock(){
//var availableTags = [
//      "Mumbai",
//      "Delhi",
//      "Bangalore",
//      "Hyderabad",
//      "Pune",
//      "Jaipur",
//      "Nagpur",
//      "Chennai",
//      "Kolkata"
//    ];
//    $( "#valid-city" ).autocomplete({
//      source: availableTags
//    });
//}
