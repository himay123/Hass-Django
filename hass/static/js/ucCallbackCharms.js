function SendParameter(fullname, mobileno, product) {
    var product_name = "";
    if (product == "Car Insurance") {
        product_name = "WCB-Car";
    }
    else if (product == "Two wheeler Insurance") {
        product_name = "WCB-Bike";
    }
    else if (product == "Travel Insurance") {
        product_name = "WCB-Travel";
    }
    else if (product == "Health Insurance") {
        product_name = "WCB-Health";
    }
    else if (product == "Home Insurance") {
        product_name = "WCB-Home";
    }

    $.ajax({
        type: 'POST',
        url: 'https://www.icicilombard.com/Content/ilom-en/Default/new/saveNumber.asp',
        data: {
            telName: fullname,
            telNo: mobileno,
            sltproduct: product_name,
            keyword: 'ui/ux'
        },
        success: function (result) {
            if (window.location.pathname.toLowerCase() == "/mobile1") {
                dataLayer.push({ "event": "LeadSuccessfullysubmited" });
            }
            
        }
    });

}

//Function to display the overlay message and resetting the input values.
function CallModalWindowCaptcha_Callback() {
    $('.loader_charms_cb').hide();
    $(".call_back_form.cf").addClass('active');
    $('.close_forms').click(function (e) {
        $('.call_back_form').removeClass('active');
        e.preventDefault();
        $('#lbl_captcha_callbackCharm').css('display', 'block');
    });
    $(".Name").attr('maxlength', '25');
    $(".Name").keydown(function (event) { if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true) || (event.keyCode >= 35 && event.keyCode <= 39)) { return; } else if (event.keyCode == 222) { return; } else { if (event.keyCode < 65 || event.keyCode > 90) { event.preventDefault(); } } });
    $(".Numeric").keydown(function (e) { 46 == e.keyCode || 8 == e.keyCode || 9 == e.keyCode || 27 == e.keyCode || 13 == e.keyCode || 65 == e.keyCode && e.ctrlKey === !0 || e.keyCode >= 35 && e.keyCode <= 39 || (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) && e.preventDefault() });
    $(".Numeric").keyup(function (e) {

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

}

function CallModalWindow_Callback() {
    $('.loader_charms_cb').hide();
    $(".error").hide();
    $(".call_back_form.cf").addClass('active');
    $("#Callback_msgdiv_1").css('display', 'block');
    $(".close_forms").hide();
    $(".charms .basic_dd select").selectbox();
    $('#lbl_captcha_callbackCharm').css('display', 'none');
    $(".Name").attr('maxlength', '25');
    $(".Name").keydown(function (event) { if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true) || (event.keyCode >= 35 && event.keyCode <= 39)) { return; } else if (event.keyCode == 222) { return; } else { if (event.keyCode < 65 || event.keyCode > 90) { event.preventDefault(); } } });
    $(".Numeric").keydown(function (e) { 46 == e.keyCode || 8 == e.keyCode || 9 == e.keyCode || 27 == e.keyCode || 13 == e.keyCode || 65 == e.keyCode && e.ctrlKey === !0 || e.keyCode >= 35 && e.keyCode <= 39 || (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) && e.preventDefault() });
    $(".Numeric").keyup(function (e) {

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
    $("#Callback_closefeedback").click(function (e) {
        e.preventDefault();
        $("#txtfullname").val("");
        $("#txtMobileR").val("");
        $("#ddproduct").val("0");
        generatecaptcha();
        generatecaptcha1();
        $("#charms_cb_captcha_input").val("");
        $(".call_back_form .error").hide();
        $("#Callback_msgdiv_1").css('display', 'none');
        $(".close_forms").show();


        //$("#ddproduct option[value='0']").attr("selected", "selected");
        $(".basic_dd select").selectbox("detach");
        $("#ddproduct option[value='0']").prop("selected", false);
        $(".basic_dd select").selectbox("attach");
        $(".basic_dd select").selectbox({
            speed: 50

        });

    });

    $('#callback_charms').click(function (e) {
        e.preventDefault();
        $("#Callback_msgdiv_1").css('display', 'none');
    });

}

//Function to validate the input values of the form.

function funValidate() {
    var b_val = true;
    var count = 0;
    if ($('#txtfullname').val() == "") {
        $('#fullname').show();
        count++;
    }
    else {
        $('#fullname').hide();
    }
    if (requiredfield($('#txtMobileR'), "Please enter mobile no.")) {
        if (checkMinLength($('#txtMobileR'), 10)) {
            $('#mobile').hide();
        }
        else {
            $('#mobile').show();
            count++;
        }

    }

    var exp = /^([6-9]{1}[0-9]{9})$/;
    var matchnumber = $("#txtMobileR").val().match(exp);
    if (matchnumber == null) {
        $("#mobile").css({ 'display': 'block' });
        $("#mobile").html("Please enter valid mobile number");
        count++;
    }
    else {
        $("#mobile").css({ 'display': 'none' });
    }


    if ($('#ddproduct').val() == "0") {
        $('#product').show();
        count++;
    }
    else {
        $('#product').hide();
    }

//    var Capstring = $("#charms_cb_captcha_input").val();
//    var answerCap = randomNum1 + randomNum2;
//    if (Capstring == "") {
//        $("#charms_cb_captcha").css({ 'display': 'block' });
//        $("#charms_cb_captcha").html("Please enter captcha");
//        count++;
//    }
//    else if (Capstring != answerCap) {
//        $("#charms_cb_captcha").css({ 'display': 'block' });
//        $("#charms_cb_captcha").html("Please enter valid captcha");
//        count++;
//    }
//    else {
//        $("#charms_cb_captcha").css({ 'display': 'none' });
//    }

    var Capstring = $("#txt_captcha_callbackCharms").val();
    if (Capstring == "") {
        $("#lbl_captcha_callbackCharms").css({ 'display': 'block' });
        $("#lbl_captcha_callbackCharms").html("Please enter Captcha");
        count++;
    }
    else {
        $("#lbl_captcha_callbackCharms").css({ 'display': 'none' });
    }
    if (count > 0) {
        b_val = false;
    }
    else {
        b_val = true;
    }
    if (b_val) {
        $('.loader_charms_cb').show();
        SendParameter($('#txtfullname').val(), $('#txtMobileR').val(), $('#ddproduct').val());

    }

//    var sum = $("#charms_cb_captcha_input").val();
//    $('#CB_Num1').val(randomNum1);
//    $('#CB_Num2').val(randomNum2);
//    $('#CB_Captcha_Sum').val(sum);

    return b_val;
}

$(document).ready(function () {
    $("#Callback_closefeedback").click(function (e) {
        $("#Callback_msgdiv_1").css('display', 'none');
        $("#Callback_submitdata").css('display', 'block');
        $(".close_forms").show();
    });

    $('#callback_charms').click(function (e) {
        e.preventDefault();
        $("#Callback_msgdiv").css('display', 'none')
    });

    $('.close_forms').click(function (e) {
        $('.call_back_form').removeClass('active');
        e.preventDefault();
    });
});

$(document).ready(function () {
    calljs();
    $('.input_bkT input,.input_bkT textarea').focus(function () {
        $(this).next(".error").hide();
    });

    $('.sbHolder ul.sbOptions li > a').click(function () {

        $(this).find('.error').hide();

        $(this).parents('.basic_dd').next('.error').hide();

        $(this).parents('.basic_dd').find('.error').hide()

    });
});

function calljs() {
    try {
        $(".basic_dd select").selectbox({
            speed: 50
        });
    }
    catch (e) { }
}

var randomNum1, randomNum2;
$(document).ready(function () {
    generatecaptcha1();
    $("#changeCap_cb").click(function () {
        generatecaptcha1();
    });
    generatecaptcha1();
});

function generatecaptcha1() {

    randomNum1 = Math.floor(Math.random() * (9 - 0 + 1) + 0);
    randomNum1 = parseInt(randomNum1);
    randomNum2 = Math.floor(Math.random() * (9 - 0 + 1) + 0);
    randomNum2 = parseInt(randomNum2);
    var captstring = randomNum1 + "+" + randomNum2 + "=";
    $("#captcha_cb").html(captstring);

    $("#changeCap_cb").click(function () {
        generatecaptcha1();
    });
};

$("#changeCap_cb").click(function () {
    generatecaptcha1();
});

$('.close_forms').click(function (e) {
    e.preventDefault();
    $('.call_back_form .cf').removeClass('active');
});

$(document).on('click', '.close_forms', function (e) {
    $('.call_back_form').removeClass('active');
    e.preventDefault();
});

$(document).on('click', '.charms-open , .feedback_click , .call_click', function (e) {
    $('.call_back_form .error').hide();
    $('#charms_cb_captcha_input').val("");
    $('#charms_captcha_input').val("");
    $("#txtfullname, #txtMobileR , #txtname , #txtemail, #txtmobile , #txtcomment").val("");
    $(".basic_dd select").selectbox("detach");
    $("#ddproduct option[value='0']").prop("selected", false);
    $("#DdlType option[value='0']").prop("selected", false);
    $(".basic_dd select").selectbox("attach");
    $(".basic_dd select").selectbox({
        speed: 50

    });
});