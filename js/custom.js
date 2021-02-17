        localStorage.appnameWithMiniadminId = "apjewellers";
        localStorage.defaultScripTemplateId = "apjewellers";
        localStorage.coinsScripTemplateId = "silverapjewellers";
        localStorage.ipAddressOrder = "order.apjewellers.co.in";
        localStorage.ipAddressBCast = "bcast.apjewellers.co.in";
        localStorage.step2Port = "8888";
        localStorage.step3StreamingPort = "7767";
        localStorage.webPanel = "adminapi.apjewellers.co.in";
        
            CallWebServiceFromJquery_Alert2(); //Rate Alert Call
            if (!window.localStorage.getItem("registrationMobile")) {
                window.location.href = "Login.html";
            }
            if (/(android)/i.test(navigator.userAgent)) {
                localStorage.MobileType = "Android";
            } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
                localStorage.MobileType = "iPhone";
            } else {
                localStorage.MobileType = "Android";
            }
            localStorage.topicForMessage = localStorage.appnameWithMiniadminId + localStorage.MobileType + "All";

            localStorage.step3HTTPPort = "8878";
            localStorage.chartIpAddress = "chart.apjewellers.co.in";
            localStorage.chartPort = "2888";

            localStorage.autocallIpAddress = "autocall.apjewellers.co.in";
            localStorage.autocallPort = "9000";

            localStorage.ratealertIpAddress = "ratealert.apjewellers.co.in";
            localStorage.ratealertPort = "8440";

            localStorage.newsIpAddress = "news.apjewellers.co.in";
            localStorage.newsPort = "9100";
        $(document).ready(function () {
		iPhoneInstallOverlay.init({blurElement:'.plugin-overlay',appIconURL: './android-chrome-384x384.png',spritesURL: './plugin/mobile-sprite.png',showOnReload:true, appName:'Overlay Demo'});
            redirectToLiveRates = false;
            CallWebServiceFromJqueryTemplateID();
            if (localStorage.username) {
                var pendingCode = "<a href=\"Orders.html\" data-ajax='false'>" +
                   "<button type=\"button\" style=\"background: transparent;border: 0;\">" +
                    "<i class=\"fa fa-pencil-square-o\" style=\"color: #FFF;\"></i>" +
                      "</button>" +
					"<span class=\"d-block font_footer\" style=\"color:#FFF\">Pending</span>" +
                   "</a>";
                $("#divLoginPending").html(pendingCode);
            }
            else {
                var loginCode = "<a href=\"Login.html\" data-ajax='false'>" +
                   "<button type=\"button\" style=\"background: transparent;border: 0;\">" +
                    "<i class=\"fa fa-sign-in\" style=\"color: #FFF;\"></i>" +
                      "</button>" +
					"<span class=\"d-block font_footer\" style=\"color:#FFF\">Login</span>" +
                   "</a>";

                $("#divLoginPending").html(loginCode);
            }
            if (localStorage.getItem("overlayshown")) {
                //do nothing
            }
            else {
                localStorage.setItem("overlayshown", "true");
                ($('body').data('chardinJs')).toggle();

            }
        });
        var tempbottomOfWindow;
        var something = (function () {
            var executed = false;
            return function () {
                if (!executed) {
                    executed = true;
                    tempbottomOfWindow = $(window).scrollTop() + $(window).height();
                    fnStartClock_0();
                    CallWebServiceFromJqueryMarquee();
                    var timerMarquee = setInterval("CallWebServiceFromJqueryMarquee()", 30000);
                }
            };
        })();
        something();
    