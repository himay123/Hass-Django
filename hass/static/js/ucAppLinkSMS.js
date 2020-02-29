function chkMobileTnc(mobilectlid) {
    var bchk = true;
    if (requiredfield($(mobilectlid), "Please enter the mobile no")) {
        if (checkMinLength($(mobilectlid), 10)) {
            $(mobilectlid).next(".error").hide();
        }
        else bchk = false;
    }
    else
        bchk = false;

    if (checkzero($(mobilectlid), "Please enter valid mobile no")) {
        $(mobilectlid).next(".error").hide();
    }
    else {
        bchk = false;
    }
    return bchk;
}

function CallModalWindow_App() {

    $("#hdnAppSelected").val("android");

    $("#adroid_applink").click(function (e) {
        $("#ios_applink").removeClass('active');
        $("#adroid_applink").removeClass('active');
        $("#adroid_applink").addClass('active');

        $("#hdnAppSelected").val("android");
    });

    $("#ios_applink").click(function (e) {
        $("#adroid_applink").removeClass('active');
        $("#ios_applink").removeClass('active');
        $("#ios_applink").addClass('active');

        $("#hdnAppSelected").val("ios");
    });

    $(".call_back_form.app_link").addClass('active');
    $("#appmsgdiv").css('display', 'block');
    $(".close_forms").hide();

    $("#closeappbox").click(function (e) {
        $("#appmsgdiv").css('display', 'none');
        $("#submitdata").css('display', 'block');
        $(".close_forms").show();
    });

    // To Side In / Out Toggle
    $('.applink_click').click(function (e) {
        e.preventDefault();
        $("#appmsgdiv").css('display', 'none')
    });

    $('.close_forms').click(function (e) {
        $('.call_back_form').removeClass('active');
        e.preventDefault();
    });
}

function AppLink_Validate() {

    var sms_val = true;
    // Mobile
    if ($("#txt_app_mobile").val().trim() == "") {
        $("#txt_app_mobile").next(".error").show();
        sms_val = false;
    }
    else {
        $("#txt_app_mobile").next(".error").hide();
        sms_val = true;
    }

    // Mobile
    if (chkMobileTnc("#txt_app_mobile") == false) {
        sms_val = false;
    }
    else {
        $("#txt_app_mobile").next(".error").hide();
        sms_val = true;
    }

    console.log("sms_val : " + sms_val);
    return sms_val;
}

$(document).ready(function () {
    $("#closeappbox").click(function (e) {
        $("#appmsgdiv").css('display', 'none');
        $("#submitdata").css('display', 'block');
        $(".close_forms").show();
    });

    // To Side In / Out Toggle
    $('.applink_click').click(function (e) {
        e.preventDefault();
        $("#appmsgdiv").css('display', 'none')
    });

    $('.close_forms').click(function (e) {
        $('.call_back_form').removeClass('active');
        e.preventDefault();
    });

});

$(document).ready(function () {

    $("#hdnAppSelected").val("android");

    $("#adroid_applink").click(function (e) {
        $("#ios_applink").removeClass('active');
        $("#adroid_applink").removeClass('active');
        $("#adroid_applink").addClass('active');

        $("#hdnAppSelected").val("android");
    });

    $("#ios_applink").click(function (e) {
        $("#adroid_applink").removeClass('active');
        $("#ios_applink").removeClass('active');
        $("#ios_applink").addClass('active');

        $("#hdnAppSelected").val("ios");
    });

});