/** === functions === **/
function events(){
    $('.event-tab-btn').click(function(){
        var $data = $(this).data('target');
        //var $elprev = $(this).parents('.why-tab').prevAll('.why-tab');
        var $elPar = $(this).parents('.why-tab');
        $('.why-active-tabs').fadeOut(200, function(){
            $('.why-visible-tabs').removeClass('why-active-tabs');
            $('#'+$data).fadeIn(200).addClass('why-active-tabs');
        });
        $('.event-tab-btn').parent().removeClass('tab__btn-hidden');
        $(this).parent().addClass('tab__btn-hidden');
        
        var allHeight = [];
        if($elPar.prev().is('.why-tab')){
            $(this).parents('.why-tab').prevAll('.why-tab').each(function() {
              allHeight.push($(this).outerHeight());
            });
            var arrayCalc = allHeight.reduce(function (a, b) {return a + b;}, 0);
            $('.side-arrow').animate({top: arrayCalc + ($elPar.height() / 1.5)});
        }else{
            allHeight.push($elPar.height());
            $('.side-arrow').animate({top: ($elPar.height() / 1.5)});
        }
        //console.log(allHeight.reduce((a, b) => a + b, 0));
    });
    
    $('.event-home-carousal').on('change', function(){
       var $id = $(this).val();
       $('.carousal-all').removeClass('carousal-all-visible');
       $('.dotted-loader').addClass('loader-show');
       setTimeout(function(){
         $('.dotted-loader').removeClass('loader-show');
         $('#'+$id).addClass('carousal-all-visible');
       },1000);
    });
    
    $(document).on("click", "footer .footerTop h4, .menuDrpBox h4:not(.accordCloseNot)", function() {
        $(this).hasClass("active") ? ($(this).removeClass("active"), 
        $(".footerTop,.menuDrpBox").find("ul,.social_hover").slideUp()) : ($("footer .footerTop h4, .menuDrpBox h4").removeClass("active"), 
        $("footer .footerTop ul,footer .footerTop .social_hover,.menuDrpBox ul").slideUp(), 
        $(this).addClass("active"), $(this).next("ul,.social_hover").slideDown())
    });
    $(document).on("click", ".accordBox h3.accord-head", function(e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next().slideUp('slow');
        } else {
            $('.accordBox h3.accord-head').removeClass('active');
            $('.accordBox .accord-body').slideUp('slow');
            $(this).addClass('active');
            $(this).next().slideDown('slow');
        }
    });
    $(document).on('click', '.smartChoiceBox .knwMoreAnchr',function(){
        $('.tab-head').next('.tab-body').hide();
        $('.smartChoiceBox .tab-head, .smartChoiceBox .tab-body').removeClass('active');
        $(this).parents('.tab-head').addClass('active');
        $(this).parents('.tab-head').next('.tab-body').addClass('active').show();
        $('.knwMoreAnchr').removeClass('knwMoreAnchr-active');
        $(this).addClass('knwMoreAnchr-active');
    });
    
    // load video
    $('.disaplyVideo').click(function(e){
        e.preventDefault();
        var $id = $(this).data('target');
        var $vidPath = $("#loadSource"+$id).data('src');
        $('html').addClass('onPopup');
        $('#overlayFull'+$id).fadeIn(250);
        document.getElementById("loadSource"+$id).src = $vidPath;
        document.getElementById("loadVideo"+$id).load();
        //console.log(document.getElementById("loadVideo"+$id));
    });
    $('.js-close__btn').click(function(e){
        e.preventDefault();
        var $id = $(this).data('target');
        $('html').removeClass('onPopup');
        $('#overlayFull'+$id).fadeOut(250);
        document.getElementById("loadSource"+$id).src = '';
        document.getElementById("loadVideo"+$id).load();
    });
    
    /*$('.smartbanner-close').click(function(){
       $(this).parents('.smartbanner').slideUp(250); 
    });*/
    
}
/** header **/
function header(){
    /*$('.profIcoactive').on('click', function(){
       $(this).parents('.feedBack').find('.profileSec').slideToggle(250); 
    });
    $(document).on('click', function(e) {
        var $closest = $('.profIcoactive');
        if(!$(e.target).closest($closest).length) {
            $closest.parents('.feedBack').find('.profileSec').slideUp(250);
        }    
    });*/
    $('.rightAln h4:not(.accordCloseNot)').on('click', function(){
        $(this).parent('li').siblings().find('h4').removeClass('downArrowUp');
        $(this).toggleClass('downArrowUp');
        $(this).parent('li').siblings().find('ul').slideUp(250);
        $(this).parent('li').find('ul').slideToggle(250);
    });
    $('.mobProduct').on('click', function(){
        $(this).parent('li').stop().toggleClass('_mPdtActive');
    });
    $('#header .navBar li>a').on('click', function(){
        $(this).parent('li').siblings().removeClass('downArrowUp1');
        $(this).parent('li').toggleClass('downArrowUp1');
        $(this).parent('li').siblings().find('ul.otherdrMenu').slideUp(250);
        $(this).parent('li').find('ul.otherdrMenu').slideToggle(250);
    });
    $('.mobHumberger').on('click', function(){
       $('html').addClass('mobileMenu-open menu-transition'); 
    });
    $('.menuClose').on('click', function(){
       $('html').removeClass('mobileMenu-open');
       setTimeout(function(){
           $('html').removeClass('menu-transition');
       }, 300)
    });
}
/** header **/

/** Header Detach Attahc **/
function detachAttach(){
    var $lastLogin = $(".detach-lastLogin").detach();
    var $btnLogin = $(".detach-loginBtn").detach();
    var $detchUser = $(".detach-username").detach();
	
	var UserDetailData = JSON.parse(window.sessionStorage.getItem('UserDetailsData'));
	var UserLoggedInDetail = JSON.parse(window.sessionStorage.getItem('UserLoggedInDetail'));
	
    if($(window).width() <= 991){
        $(".logouthere").append($lastLogin);
        $(".loginAttacher").append($btnLogin);
        $(".attachUserNameMob").append($detchUser);
		
		if (UserDetailData != null && UserDetailData != "") {
            $(".profIcohide").hide().next(".profIcoactive").css("display","block");
			if (UserDetailData.isguestuser == 1) {
				$('.mobBeforelogin,.guestIco, .logouthere').show();
				$('.mobAfterlogin,.menIco').hide();
			} else {
				$('.mobBeforelogin,.guestIco').hide();
				$('.mobAfterlogin,.menIco').show();
			}
		}else if (UserLoggedInDetail != null && UserLoggedInDetail != "") {
            $(".profIcohide").hide().next(".profIcoactive").css("display","block");
			if (UserLoggedInDetail.isguestuser == 1) {
				$('.mobBeforelogin,.guestIco, .logouthere').show();
				$('.mobAfterlogin,.menIco').hide();
			} else {
				$('.mobBeforelogin,.guestIco').hide();
				$('.mobAfterlogin,.menIco').show();
			}
		}
		else {
            $(".profIcohide").css("display","block").next(".profIcoactive").hide();
			$('.mobBeforelogin,.guestIco').show();
			$('.mobAfterlogin,.menIco, .logouthere').hide();
		}
		
    }else{
        $(".logoutSec").append($lastLogin);
        $(".logoutSec").append($btnLogin);
        $(".attachUserNameDesk").append($detchUser);
    }
	
}
/** Header Detach Attahc **/

function detectAndroid(){
    // detedt android
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    if(isAndroid) {
      $('#smartabanner').show();
      $('html').addClass('android');
    }else{
        $('#smartabanner').hide();
        $('html').removeClass('android');
    }
}

// Android top bar
function androidBar(){
    document.getElementById("playinsure").href="https://play.google.com/store/apps/details?id=com.icicilombard.mcust&referrer=utm_source=il_msite&utm_medium=referral&utm_campaign=app_promotion&utm_content=" + window.location.href;
    var getDevice = function() {
        var flag = false;
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/android/i.test(userAgent)) {
            flag = true
        }
        return flag;
    }
    var add_minutes =  function (dt, minutes) {
        return new Date(dt.getTime() + minutes*60000);
    }
    
    var nextdatevalue = localStorage.getItem("nextdate");
    var nextdatevalue =  new Date(nextdatevalue);
    var currentdate = new Date();
    var newcounter	= 0;
    newcounter = localStorage.getItem("counter");
    if(nextdatevalue != null){
        if(newcounter < 2 && getDevice() == true){
            document.getElementById("smartabanner").style.display = "block";
        }else{
            if(currentdate.getTime() >= nextdatevalue.getTime() && getDevice() == true){
                document.getElementById("smartabanner").style.display = "block";
                newcounter	= 0;
                localStorage.setItem("counter", newcounter);
                localStorage.setItem("nextdate",'');
            }else{
                document.getElementById("smartabanner").style.display = "none";
            }
        }
    }
    $('#smb-close').on('click',function(){
        newcounter = Number(newcounter)+1;
        localStorage.setItem("counter", newcounter);
        $('#smartabanner').slideUp();
        var nextdate = add_minutes(currentdate, 1440).toString();
        var date = new Date();
        date.setDate(date.getDate() + 1);
        localStorage.setItem("nextdate", nextdate);
    });
}

function androidBarOnResize(){
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if(localStorage.getItem("counter") < 1 && /android/i.test(userAgent)){
        $("#smartabanner").show();
    }else{
        $("#smartabanner").hide();
    }
}

function charms(){
    if($(window).width() < 768){
        $('.charms').removeClass('open-side');
    }
}

/** Document Ready **/
$(document).ready(function(){

    header(); // header
    detachAttach(); //header detach and attach
    detectAndroid();
    androidBar();
    
    //$('#custScrollBox').mCustomScrollbar({ 
    //     theme:"dark-3"        
    //});

});

/** window resize **/
$(window).on('resize', function(){
    detachAttach(); //header detach and attach
    detectAndroid();
	//funshowmoblogin(); //header mobile login changer
    //charms();
    androidBarOnResize();
});
/** window resize **/
/** === functions === **/

$(function(){
    // functions
    events();
    //lazyload
    new LazyLoad({
		elements_selector: ".lazy" 
	});
    new LazyLoad({
		elements_selector: ".lazyBanner",
        callback_load: function(){
            $('.home-banner').addClass('afterBannerLoad');
            //TweenMax.staggerFromTo('.products>li', .2, {y:30, autoAlpha:0},{y:0, autoAlpha:1 }, 0.05); 
            $('.products').addClass('products-show');
        }
	});
    
    if($(".owl-carousel").length){
        $(".owl-carousel").owlCarousel({
            items:2,
            dots:false,
            nav:true,
            slideBy:2,
            responsive:{
                0:{
                    items:1,
                    slideBy:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
        });
    }
    
});


$(window).on('load', function(){
   $('body').addClass('afterLoad');
   $('.onWin[data-src]').each(function(){
       var $src = $(this).data('src');
       $(this).attr('src', $src);
   });
   charms();
});