function validatePincode(){
var checkflag=true;
$('input[maxlength="6"]').each(function(){
if ($(this).val().length<6 && $(this).val().length>=1)
{
$(this).next('.error').html('Please enter valid 6 digit pincode').show();
checkflag=false;
}
});
return checkflag;
}
//Left Trim
function LTrim(objID) {
    if (objID.val() != "") {
        var Len = 0;
        var ch = 0;
        for (l = 0; l < objID.val().length; l++) {
            if (objID.val().charAt(l) == " " && ch == 0) {
                Len = Len + 1;
            }
            else if (objID.val().charAt(l) != " ") {
                ch = ch + 1;
            }
        }
        var op = objID.val().substring(Len, objID.val().length)
        objID.val(op);
    }
    return objID;
}

//Right Trim
function RTrim(objID) {
    if (objID.val() != "") {
        var Len = 0;
        var ch = 0;

        for (i = 0; i < objID.val().length; i++) {
            if (objID.val().charAt([objID.val().length - 1 - i]) == " " && ch == 0) {
                Len += 1;
            }
            else {
                ch += 1;
            }
        }
        var op = objID.val().substring(0, objID.val().length - Len);
        objID.val(op);

    }
    return objID;
}


function checkzero(ID, message) {
    var exp = /^([6-9]{1}[0-9]{9})$/;
    var matchnumber = ID.val().match(exp);
    if (matchnumber == null) {
         ID.parent().find('.error').css({ 'display': 'block' });
	ID.parent().find('.error').addClass('e_active');
        ID.parent().find('.error').html("Please enter valid mobile number");
        return false;
    }
    else {
        ID.parent().find('.error').html("");
	ID.parent().find('.error').removeClass('e_active');
        ID.parent().find('.error').css({ 'display': 'none' });
        return true;
    }
}

function requiredfield(ID, message) {

    if ($.trim(ID.val()) == "") {
        ID.parent().find('.error').css({ 'display': 'block' });
	ID.parent().find('.error').addClass('e_active');
        ID.parent().find('.error').html(message);

        return false;

    }
    else {
        ID.parent().find('.error').html("");
	ID.parent().find('.error').removeClass('e_active');
        ID.parent().find('.error').css({ 'display': 'none' });
        return true;
    }
}
function requiredfieldCheckBox(ID, message) {

    if ($(ID).is(":checked") == false) {
        ID.parent().parent().parent().find('.error').css({ 'display': 'block' });
        ID.parent().parent().parent().find('.error').html(message);

        return false;

    }
    else {
        ID.parent().parent().parent().find('.error').html("");
        ID.parent().parent().parent().find('.error').css({ 'display': 'none' });
        return true;
    }
}
function requiredfieldFUpload(ID, message) {

    if ($.trim(ID.val()) == "") {
        ID.parent().find('.error').css({ 'display': 'block' });
        ID.parent().find('.error').html(message);

        return false;

    }
    else {
        ID.parent().find('.error').html("");
        //ID.parent().find('.error').css({ 'display': 'none' });
        return true;
    }
}
function requiredfieldDOB(ID, message) {

    if ($.trim(ID.val()) == "") {
        ID.parent().parent().find('.error').css({ 'display': 'block' });
	ID.parent().parent().find('.error').addClass('e_active');
        ID.parent().parent().find('.error').html(message);

        return false;

    }
    else {
        ID.parent().parent().find('.error').html("");
	ID.parent().parent().find('.error').removeClass('e_active');
        //ID.parent().parent().find('.error').css({ 'display': 'none' });
        return true;
    }
}
function validateemail(ID) {
//    var emailpat = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var emailpat = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-]{2,20})+\.)+([a-zA-Z0-9]{2,4})+$/;
    var matcharray = ID.val().match(emailpat);
    if (matcharray == null) {
        ID.parent().find('.error').css({ 'display': 'block' });
        ID.parent().find('.error').html("Please enter a valid email address (For example abc@mail.com)");
        return false;
    }
    else {
        //ID.parent().find('.error').css({ 'display': 'none' });
        ID.parent().find('.error').html("");
        return true;
    }
}

function alphabetsonly(ID) {
    var exp = /^[a-zA-Z,']*$/;
    if (!exp.test(ID.val())) {
        ID.parent().find('.error').css({ 'display': 'block' });
        ID.parent().find('.error').html("Please enter alphabets only no spaces and numbers allowed.");
        return false;
    }
    else {
        //ID.parent().find('.error').css({ 'display': 'none' });
        ID.parent().find('.error').html("");
        return true;
    }
}

function mobilenumbervalidate(ID) {
    var exp = /^(([1-9]{1}[0-9]{9})||(0{1}[0-9]{10})||((\+91){1}[0-9]{10}))$/;
    var matchnumber = ID.val().match(exp);
    if (matchnumber == null) {
        ID.parent().find('.error').css({ 'display': 'block' });
        ID.parent().find('.error').html("Please enter valid Mobile No.");
        return false;
    }
    else {
        //ID.parent().find('.error').css({ 'display': 'none' });
        ID.parent().find('.error').html("");
        return true;
    }
}

function numbersonly(ID) {
    if (isNaN(ID.val())) {
        ID.parent().find('.error').css({ 'display': 'block' });
        ID.parent().find('.error').html("Please Enter Numbers Only.");
        return false;
    }
    else {
        if (ID.val() != "") {
            if (ID.val() <= 0) {
                ID.parent().find('.error').css({ 'display': 'block' });
                ID.parent().find('.error').html("Please Enter Numbers > 0");
                return false;
            }
            else {
                //ID.parent().find('.error').css({ 'display': 'none' });
                ID.parent().find('.error').html(" ");
                return true;
            }
        }
        else {
            return true;
        }
    }
}

function isNumeric(event) {
    var key = 0;
    if (event.keyCode != 0) {
        key = event.keyCode;
    }
    else {
        key = event.which;
    }

    if (key == 46 || key == 27 || key == 13 || (key == 65 && event.ctrlKey === true) || (key == 35 || key == 36 || key == 38 || key == 40)) { return false; } //|| key == 8 || key == 9
    else
        //if (this.value.length >= 13) { event.preventDefault(); }
        //else
        //if (key == 107 && this.value.length == 0) { return; }
        //else if (this.value.length >= 10 && this.value.charAt(0) != '0' && this.value.charAt(0) != '+') { event.preventDefault(); }
        //else {
        if (event.shiftKey || (key < 48 || key > 57) && key != 8 && key != 9 && key != 37 && key != 39) { event.preventDefault(); } // && (key < 96 || key > 105)
    //}
}


function dropdownSelect(ID, message) {
    if ($(ID).val() == 0) {
        ID.parent().find('.error').css({ 'display': 'block' });
        ID.parent().find('.error').html(message);
        //alert("Please select anyone");
        //e.preventDefault();
        return false;
    }
    else {
        ID.parent().find('.error').html("");
        //ID.parent().find('.error').css({ 'display': 'none' });
        return true;
    }
}

function dropdownSelect_UpdatePanel(ID, message) {
    if ($(ID).val() == 0) {
        ID.parent().parent().find('.error').css({ 'display': 'block' });
        ID.parent().parent().find('.error').html(message);
        //alert("Please select anyone");
        //e.preventDefault();
        return false;
    }
    else {
        ID.parent().parent().find('.error').html("");
        //ID.parent().parent().find('.error').css({ 'display': 'none' });
        return true;
    }

}

function checkMaxLength(ID, maxLength) {
    if (ID.value != "") {
        TrimBoth(ID);
        if (ID.value.length > maxLength) {
            ID.parent().find('.error').css({ 'display': 'block' });
            ID.parent().find('.error').html("Please enter value less than " + maxLength + " characters");
            return false;
        }
    }
    else {
        ID.parent().find('.error').css({ 'display': 'block' });
        ID.parent().find('.error').html("Please enter minimum " + maxLength + " characters");
        return false;
    }
}

function checkMinLength(ID, minLength) {

    if ($(ID).val() != "") {
        LTrim(RTrim(ID));
        if ($(ID).val().length < minLength) {

            ID.parent().find('.error').css({ 'display': 'block' });
            ID.parent().find('.error').html("Please enter minimum " + minLength + " digits");
            return false;
        }
        else {
            ID.parent().find('.error').html("");
            //ID.parent().find('.error').css({ 'display': 'none' });
            return true;
        }
    }
    else {
        ID.parent().find('.error').css({ 'display': 'block' });
        ID.parent().find('.error').html("Please enter minimum " + minLength + " digits");
        return false;
    }
}

function serverSideError(ID, message) {
    var ControlID = $(ID);
    ControlID.parent().find('.error').css({ 'display': 'block' });
    ControlID.parent().find('.error').html(message);
    return false;
}


function alphanumeric(ID) {

    var exp = /^[a-zA-Z0-9]+$/;

    if (!exp.test(ID.val())) {
        ID.parent().find('.error').css({ 'display': 'block' });
        ID.parent().find('.error').html("Please enter alphanumeric value.");
        return false;
    }
    else {
     //   ID.parent().find('.error').css({ 'display': 'none' });
        ID.parent().find('.error').html("");
        return true;
    }
}

function validatePassword(ID, message) {
    if (checkMinLength(ID, 8)) {
        var pwdPattern = /[\W_]/g;
        if (!ID.val().match(/\d/) || !ID.val().match(/[a-zA-Z]/) || !ID.val().match(pwdPattern)) {
            ID.parent().find('.error').css({ 'display': 'block' });
            ID.parent().find('.error').html(message);
            //alert("");
        }
        else {
            ID.parent().find('.error').html("");
            //ID.parent().find('.error').css({ 'display': 'none' });
            return true;
        }
    }
    else {

        return false;
    }
}

function matchPassword(IDpass, IDconfirmPass) {
    var flag = true;
    if (requiredfield(IDpass, "Please enter Password", "characters")) {

        if (checkMinLength(IDpass, 8)) {
            if (validatePassword(IDpass, "Password must contains at least 1 number, 1 alphabet and 1 special character.")) {
                flag = true;
            }
            else {
                flag = false;
            }
        }
        else {
            flag = false;
        }

    }

    if (requiredfield(IDconfirmPass, "Please enter Confirm Password", "characters")) {
        if (checkMinLength(IDconfirmPass, 8)) {
            if (validatePassword(IDconfirmPass, "Password must contains at least 1 number, 1 alphabet and 1 special character.")) {
                flag = true;
            }
            else {
                flag = false;
            }
        }
        else {
            flag = false;
        }

    }

    if (flag == true) {
        if (IDpass.val() != "" && IDconfirmPass.val() != "") {
            if (IDpass.val() != IDconfirmPass.val()) {
                IDconfirmPass.parent().find('.error').css({ 'display': 'block' });
                IDconfirmPass.parent().find('.error').html("Password Does Not Match.");
                return false;
            }
            else {
                IDconfirmPass.parent().find('.error').html("");
                //IDconfirmPass.parent().find('.error').css({ 'display': 'none' });
                return true;
            }
        }
        else {
            return false;
        }
    } else {

        return false;
    }
}


function FormatDate_YYYYMMDD(dates) {
    var dt = "";
    if (dates != "") {
        var vdate = new Date(dates);
        var vMth = vdate.getMonth() + 1;
        var vDt = vdate.getDate();
        if (vMth.toString().length == 1) {
            vMth = "0".concat(vMth).toString();
        }
        if (vDt.toString().length == 1) {
            vDt = "0".concat(vDt).toString();
        }
        dt = vdate.getFullYear() + "" + vMth + "" + vDt;
    }
    return dt;
}

////Allow only specified special characters
function CheckSpecialChar(objID, strControlName, spstr) {
    var str = objID.value;
    var validchars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890" + spstr;
    for (var j = 0; j < str.length; j++)
        if (validchars.indexOf(str.charAt(j)) == -1) {
            alert(strControlName + ": should have only " + spstr + " special characters")
            objID.focus();
            objID.select();
            return false;
        }
    return true;
}



function alphaonly(ID) {

    var exp = /^[A-Za-z][A-Za-z0-9]+$/;

    if (!exp.test(ID.val())) {
        ID.parent().find('.error').css({ 'display': 'block' });
        ID.parent().find('.error').html("Please enter alphabets first followed by numbers only");
        return false;
    }
    else {
       // ID.parent().find('.error').css({ 'display': 'none' });
        ID.parent().find('.error').html("");
        return true;
    }
}




function checkIP(ID) {
    // var exp = /^[A-Za-z ]+$/;
    // var exp = /^[a-zA-Z]*$/;
    // var exp = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;


    //var exp = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.(xxx|XXX|\d{1,3})$/;
    var exp = /^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9]|(x{1}|X{1}|x{2}|X{2}|x{3}|X{3}))$/;



    if (!exp.test(ID.val())) {
        ID.parent().find('.error').css({ 'display': 'block' });
        ID.parent().find('.error').html("Please enter valid IP address only.");
        return false;
    }
    else {
      //  ID.parent().find('.error').css({ 'display': 'none' });
        ID.parent().find('.error').html("");
        return true;
    }
}


function alphaonly1(ID) {

    var exp = /^[A-Za-z ][A-Za-z0-9 ]+$/;

    if (!exp.test(ID.val())) {
        ID.parent().find('.error').css({ 'display': 'block' });
        ID.parent().find('.error').html("Please enter alphabets first followed by numbers only");
        return false;
    }
    else {
      //  ID.parent().find('.error').css({ 'display': 'none' });
        ID.parent().find('.error').html("");
        return true;
    }
}

function mobile_telephoneMandatory(MobileID, TelephoneID) {
    if (MobileID.val() == "" && TelephoneID.val() == "") {
        MobileID.parent().find('.error').css({ 'display': 'block' });
        MobileID.parent().find('.error').html("Please enter your Mobile Number or Telephone Number.");

        TelephoneID.parent().find('.error').css({ 'display': 'block' });
        TelephoneID.parent().find('.error').html("Please enter your Mobile Number or Telephone Number.");

        return false;
    }
    else {

        if (MobileID.val() != "" && TelephoneID.val() != "") {
            if ($(MobileID).val().length < 10 && $(TelephoneID).val().length < 8) {
                MobileID.parent().find('.error').css({ 'display': 'block' });
                MobileID.parent().find('.error').html("Please enter a 10 digit mobile number");

                TelephoneID.parent().find('.error').css({ 'display': 'block' });
                TelephoneID.parent().find('.error').html("Please enter a 8 digit Telephone number");
                return false;
            }
            else if ($(MobileID).val().length == 10 && $(TelephoneID).val().length < 8) {
              //  MobileID.parent().find('.error').css({ 'display': 'none' });
                MobileID.parent().find('.error').html("");

                TelephoneID.parent().find('.error').css({ 'display': 'block' });
                TelephoneID.parent().find('.error').html("Please enter a 8 digit Telephone number");
                return false;
            }
            else if ($(MobileID).val().length < 10 && $(TelephoneID).val().length == 8) {
                MobileID.parent().find('.error').css({ 'display': 'block' });
                MobileID.parent().find('.error').html("Please enter a 10 digit mobile number");

              //  TelephoneID.parent().find('.error').css({ 'display': 'none' });
                TelephoneID.parent().find('.error').html("");
                return false;
            }
        }
        else if (MobileID.val() != "" && TelephoneID.val() == "") {
            if ($(MobileID).val().length < 10) {
                MobileID.parent().find('.error').css({ 'display': 'block' });
                MobileID.parent().find('.error').html("Please enter a 10 digit mobile number");

             //   TelephoneID.parent().find('.error').css({ 'display': 'none' });
                TelephoneID.parent().find('.error').html("");
                return false;
            }
        }
        else if (MobileID.val() == "" && TelephoneID.val() != "") {
            if ($(TelephoneID).val().length < 8) {
                TelephoneID.parent().find('.error').css({ 'display': 'block' });
                TelephoneID.parent().find('.error').html("Please enter a 8 digit Telephone number");

              //  MobileID.parent().find('.error').css({ 'display': 'none' });
                MobileID.parent().find('.error').html("");
                return false;
            }
        }

        if (MobileID.val() != "") {
            if ($(MobileID).val().length < 10) {
                MobileID.parent().find('.error').css({ 'display': 'block' });
                return false;
            }
            else {
                if (!numbersonly(MobileID)) {
                    MobileID.parent().find('.error').css({ 'display': 'block' });
                    MobileID.parent().find('.error').html("Please enter your Mobile Number.");
                    return false;
                }
                else {
                 //   MobileID.parent().find('.error').css({ 'display': 'none' });
                    MobileID.parent().find('.error').html("");

                    //TelephoneID.parent().find('.error').css({ 'display': 'none' });
                    //TelephoneID.parent().find('.error').html("");
                    return true;
                }
            }
        }

        if (TelephoneID.val() != "") {
            if ($(TelephoneID).val().length < 8) {
                TelephoneID.parent().find('.error').css({ 'display': 'block' });
                TelephoneID.parent().find('.error').html("Please enter a 8 digit Telephone number");
                return false;
            }
            else {
                if (!numbersonly(TelephoneID)) {
                    TelephoneID.parent().find('.error').css({ 'display': 'block' });
                    TelephoneID.parent().find('.error').html("Please enter your Telephone Number.");
                    return false;
                }
                else {
                    //MobileID.parent().find('.error').css({ 'display': 'none' });
                    //MobileID.parent().find('.error').html("");

                  //  TelephoneID.parent().find('.error').css({ 'display': 'none' });
                    TelephoneID.parent().find('.error').html("");
                    return true;
                }
            }
        }
    }
}

//function chkpassword(ID) {
///  var exp = $("#txtLogin").val();
// if (!exp.test(ID.val())) {

//  ID.parent().find('.error').css({ 'display': 'block' });
// ID.parent().find('.error').html("Please enter valid IP address only.");
// return false;
// }
//else {
// ID.parent().find('.error').css({ 'display': 'none' });
// ID.parent().find('.error').html("");
// return true;
//  }
//
//}
function ReturnBlank() {
    return false;
}


//function fax_data(ID) {

//    if (ID.val() == "") {
//        ID.parent().find('.error').css({ 'display': 'block' });
//        ID.parent().find('.error').html("Please enter fax number value.");
//        return true;

//    }
//    else {
//        if (ID.val() != "") {
//            if (!numbersonly(ID)) {
//                ID.parent().find('.error').css({ 'display': 'block' });
//                ID.parent().find('.error').html("Please enter valid fax number.");
//                return false;
//            }
//        }
//    else {
//            if (ID.val() != "") {
//                if (ID.val().length < 12) {
//                    ID.parent().find('.error').css({ 'display': 'block' });
//                    ID.parent().find('.error').html("Please enter valid fax number.");
//                    return false;

//                }
//            }
//            else {
//                return true;
//            }

//        }
//    }
//}


