
function SendParameter_Charms(fullname, mobileno, feed_product) {
    var product_name = "";
    if (feed_product == "Car Insurance") {
        product_name = "WCB-Car";
    }
    else if (feed_product == "Two wheeler Insurance") {
        product_name = "WCB-Bike";
    }
    else if (feed_product == "Travel Insurance") {
        product_name = "WCB-Travel";
    }
    else if (feed_product == "Health Insurance") {
        product_name = "WCB-Health";
    }
    else if (feed_product == "Home Insurance") {
        product_name = "WCB-Home";
    }

//    $.ajax({
//        type: 'POST',
//        url: 'https://www.icicilombard.com/Content/ilom-en/Default/new/saveNumber.asp',
//        data: {
//            telName: fullname,
//            telNo: mobileno,
//            sltproduct: product_name,
//            keyword: 'ui/ux'
//        },
//        success: function (result) {

//        }
//    });
}

//Function to display the overlay message and reset the input values.
function CallModalWindowCaptcha() {
    $('.loader_charms').hide();
    $(".call_back_form.fd_form").addClass('active'); 
    $('.close_forms').click(function (e) {
        $('.call_back_form').removeClass('active');
        e.preventDefault();
    });
    $('#lbl_captcha_feedbackcCharms').css('display', 'block');
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
function CallModalWindow() {
    $('.loader_charms').hide();
    $(".error").hide();
    $(".call_back_form.fd_form").addClass('active');
    $("#Callback_msgdiv").css('display', 'block');
    $(".close_forms").hide();
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
    $("#closefeedback").click(function (e) {
        e.preventDefault();
        $("#Callback_msgdiv").css('display', 'none');
        generatecaptcha();
        generatecaptcha1();
        $("#txtname").val("");
        $("#txtemail").val("");
        $("#txtmobile").val("");
        $("#charms_captcha_input").val();
        $(".error").hide();
        $("#DdlType").children().removeAttr("selected");
        // $("#DdlType").val("0");
        $("#txtcomment").val("");
        $(".close_forms").show();
        $(".basic_dd select").selectbox("detach");
        $("#DdlType option[value='0']").prop("selected", false);
        $(".basic_dd select").selectbox("attach");
        $(".basic_dd select").selectbox({
            speed: 50

        });

    });
    // $("#DdlType option").removeAttr("selected");

    $('.input_bkT input,.input_text textarea').focus(function () {
        $(this).next(".error").hide();
    });

    $('.sbHolder ul.sbOptions li > a').click(function () {

        $(this).find('.error').hide();

        $(this).parents('.basic_dd').next('.error').hide();

        $(this).parents('.basic_dd').find('.error').hide();

    });
}

$('.feedback_click').click(function (e) {
    e.preventDefault();
    $("#Callback_msgdiv").css('display', 'none');
});

$('.close_forms').click(function (e) {
    e.preventDefault();
    $("#Callback_msgdiv").css('display', 'none');
    $("#txtname").val("");
    $("#txtemail").val("");
    $("#txtmobile").val("");
    $("#txt_captcha_feedbackCharms").val();
    $(".error").hide();
    $("#DdlType").children().removeAttr("selected");
    $("#txtcomment").val("");
    $('.call_back_form').removeClass('active');
});

//Function to validate the feedback form input values.

function FeedBack_Validate() {
    var b_val = true;
    var count = 0;

    // User Name
    if ($("#txtname").val().trim() == "") {
        $('#err_name').show();
        count++;
    }
    else { $('#err_name').hide(); }

    // Email ID

    if ($("#txtemail").val().trim() == "") {
        $('#err_email').show();
        count++;
    }
    else {
        $('#err_email').hide();
    }

    var email = $("#txtemail").val();
    var emailpat = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-]{2,9})+\.)+([a-zA-Z0-9]{2,4})+$/;
    var matcharray = email.match(emailpat);

    if (matcharray == null || email == "") {
        $('#err_email').css({ 'display': 'block' });
        $("#err_email").html("Please enter valid email id");
        count++;
    }
    else {
        $('#err_email').hide();
    }

    //Product Type

    if ($("#DdlType").val() == "0") {
        $('#type').show();
        count++;
    }
    else {
        $('#type').hide();
    }

    // Mobile

    if ($("#txtmobile").val() == "") {
        $('#err_mobile').show();
        count++;
    }
    else {
        $('#err_mobile').hide();
    }

    if ($("#txtmobile").val().length < 10) {
        $("#err_mobile").css({ 'display': 'block' });
        $("#err_mobile").html("Please enter minimum 10 digits");
        count++;
    }
    else {
        $('#err_mobile').hide();
    }

    var exp = /^([6-9]{1}[0-9]{9})$/;
    var matchnumber = $("#txtmobile").val().match(exp);
    if (matchnumber == null) {
        $("#err_mobile").css({ 'display': 'block' });
        $("#err_mobile").html("Please enter valid mobile number");
        count++;
    }
    else {
        $("#err_mobile").html("");
        $("#err_mobile").css({ 'display': 'none' });
    }

    // Comment

    if ($("#txtcomment").val().trim() == "") {
        $('#comment').show();
        count++;
    }
    else {
        $('#comment').hide();
    }

    var Capstring = $("#txt_captcha_feedbackCharms").val();
    if (Capstring == "") {
        $("#lbl_captcha_feedbackcCharms").css({ 'display': 'block' });
        $("#lbl_captcha_feedbackcCharms").html("Please enter valid Captcha");
        count++;
    }
    else {
        $("#charms_captcha").css({ 'display': 'none' });
    }
    if (count > 0) {
        b_val = false;
    }
    else {
        b_val = true;
    }

    if (b_val) {
        $('.loader_charms').show();
        var name = $("#txtname").val();
        var mob = $("#txtmobile").val();
        var feedbackcharm_product = $("#DdlType").val();
        SendParameter_Charms(name, mob, feedbackcharm_product);
    }

    var sum = $("#charms_captcha_input").val();
    $('#FB_Num1').val(randomNumber1);
    $('#FB_Num2').val(randomNumber2);
    $('#FB_Captcha_Sum').val(sum);

    return b_val;
}

$(document).ready(function () {
    calljs();
    $('.input_bkT input,.input_text textarea').focus(function () {
        $(this).next(".error").hide();
    });

    $('.sbHolder ul.sbOptions li > a').click(function () {

        $(this).find('.error').hide();

        $(this).parents('.basic_dd').next('.error').hide();

        $(this).parents('.basic_dd').find('.error').hide();

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

var randomNumber1, randomNumber2;
$(document).ready(function () {
    generatecaptcha();
    $("#changeCap").click(function () {
        generatecaptcha();
    });
    generatecaptcha();
});

function generatecaptcha() {

    randomNumber1 = Math.floor(Math.random() * (9 - 0 + 1) + 0);
    randomNumber1 = parseInt(randomNumber1);
    randomNumber2 = Math.floor(Math.random() * (9 - 0 + 1) + 0);
    randomNumber2 = parseInt(randomNumber2);
    var captstring = randomNumber1 + "+" + randomNumber2 + "=";
    $("#captcha").html(captstring);

    $("#changeCap").click(function () {
        generatecaptcha();
    });
};

$("#changeCap").click(function () {
    generatecaptcha();
});
