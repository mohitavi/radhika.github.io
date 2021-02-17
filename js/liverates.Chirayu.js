function removeAllRowsFromTable() {
    //alert("11");
    $("#gvData").empty();
    $("#gvData1").empty();
    $("#gvData2").empty();
}
function removeAllRowsFromTableGCSC() {
    //alert("11");
    $("#gvDataGCSC").empty();
}
function removeAllRowsFromTableGCSC_Silver() {
    //alert("11");
    $("#gvData_SilverRates_GCSC").empty();
}
function gvData_Trending() {
    $("#gvData_Trending").empty();
}
function removeAllRowsFromTable_gvData_SilverRates() {
    $("#gvData_SilverRates").empty();
}
function gvData_Trending_gvData_Trending_SilverRates() {
    $("#gvData_Trending_SilverRates").empty();

}
function gvData_Gold_Silver_INR_coinss() {
    $("#gvData_Gold_Silver_INR_coinss").empty();
}
function removeAllRowsFromTableGoldCoins_Coins_img() {
    $("#Coins_img").empty();
}
function removeAllRowsFromTableGoldCoins_Coins_Title() {
    $("#Coins_Title").empty();
}
function removeAllRowsFromTableGoldCoins_Coins_Rates() {
    $("#Coins_Rates").empty();
}
function removeAllRowsFromTableGoldCoins_Coins_img_995() {
    $("#995_Coins_img").empty();
}
function removeAllRowsFromTableGoldCoins_Coins_Title_995() {
    $("#995_Coins_Title").empty();
}
function removeAllRowsFromTableGoldCoins_Coins_Rates_995() {
    $("#995_Coins_Rates").empty();
}
function gvData_Trending_Fetch() {
    $("#gvData_Trending_Fetch").empty();
}
function gvdataCoins_Fetch() {
    $("#gvdataCoins_Fetch").empty();
}
function gvDataFromPopup() {
    $("#gvDataFromPopup").empty();
}
function fnStartClock_0() {
    try {
        CallWebServiceFromJqueryLiveRateMessage();
        CallWebServiceFromJquery();
        oInterval_0 = setInterval("CallWebServiceFromJquery()", 500); //500  
    }
    catch (e) {
    }
}

function fnStartClock_1() {

    try {
        CallWebServiceFromJqueryLiveRateMessage();
        CallWebServiceFromJqueryGoldCoins();
        oInterval_1 = setInterval("CallWebServiceFromJqueryGoldCoins()", 500); //500
    }
    catch (e) {
    }
}
function fnStartClock_2() {
    try {
        CallWebServiceFromJqueryLiveRateMessage();
   }
    catch (e) {
    }
}
function refreshData() {
    CallWebServiceFromJquery();
    CallWebServiceFromJqueryGoldCoins();
    CallWebServiceFromJquerySilverCoins();
}
function fnStopClock_0() {
    try {
        clearInterval(oInterval_0);
    }
    catch (e) {
    }
}

function fnStopClock_1() {
    try {
        clearInterval(oInterval_1);
    }
    catch (e) {
    }
}
function fnStopClock_2() {
    try {
        clearInterval(oInterval_2);
    }
    catch (e) {
    }
}
function callBuySell(scripCode, scripName) {
}
function CallWebServiceFromJquery() {
    try {
        var template = localStorage.defaultScripTemplateId;
        if (TemplateID) {
            template = TemplateID;
        }
        $.ajax({
            type: "GET",
            url: "http://" + localStorage.ipAddressBCast + ":" + localStorage.step3StreamingPort + "/VOTSBroadcastStreaming/Services/xml/GetLiveRateByTemplateID/" + template,
            dataType: "text",
            crossDomain: true,
            processData: false,
            success: OnSuccess1,
            error: OnError1,
            cache: false
        });
    }
    catch (e) {
    }
}
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
var maxRows = 0;
var oldData;
var oldData01;
var oldData02;
var oldData03;
var oldData_Gold_silver_INR_coins;
var screenFontSize = 14;
var oldDataTop;
var oldDataGoldCoins;
var oldDataSilverCoins;
var oldDataTrending_SilverRates
var oldDataMCX;
var SwiperHeading;
var counterRefresh = 0;
function OnSuccess1(data, status) {
    try {
        stopSpinner();
        var messagesDesktopp = "";
        messagesDesktopp = data.split("\n");
        if (typeof oldData != 'undefined') {
        }
        else {
            oldData = data.toString();
        }
        var messagesOldDesktop = oldData.split("\n");
        if (typeof messagesDesktopp != 'undefined') {
            if (maxRows == 0) {
                maxRows = messagesDesktopp.length;
            }
            removeAllRowsFromTable();
            var zebra = "";
            var zebra1 = "";
            zebra = document.getElementById("gvData"); //Desktopppppppppppppppppppppppppppp
            zebra1 = document.getElementById("gvData1");
            zebra2 = document.getElementById("gvData2");
            var trow = "";
            var trow1 = "";
            var trow2 = "";
            var retDesktop = "";
            var oldRetDesktop = "";
            var trowString = "";
            var trow1String = "";
            var trow2String = "";
            //border-collapse: separate; background:#d8d8d8;
            //Gold Costing and all
            //product
            for (var i = messagesDesktopp.length-2; i < messagesDesktopp.length; i++) {
                var retDesktop = messagesDesktopp[i].split("\t");
                var oldRetDesktop;
                oldRetDesktop = messagesOldDesktop[i].split("\t");
                
                if(i == messagesDesktopp.length-2){retDesktop[2]="Gold 99.5";}
                if(i == messagesDesktopp.length-1){retDesktop[2]="Gold 99.99";}
                
                if(retDesktop[4]>oldRetDesktop[4]){bgcolor_class_ask = 'h';}
                if(retDesktop[4]<oldRetDesktop[4]){bgcolor_class_ask = 'l';}
                if(retDesktop[4]==oldRetDesktop[4]){bgcolor_class_ask = 'e';}
                        trowString += '<div class="col-md-4">' +
                    '                       <div class="s-c">' +
                    '                           <div class="spt">' +
                    '                               <h2>' + retDesktop[2] + '</h2>' +
                    '                           </div>' +
                    '                           <div class="m">' +
                    '                               <table class="table">' +
                    '                                   <tbody>' +
                    '                                     <tr class="product-title-color">' +
                    '                                           <td class="p-h"><span class="spt-rt ' + bgcolor_class_ask + '";  background-color:#d0161e;>' + retDesktop[4] + '</span></td>' +
                    '                                       </tr>' +
                    '                                   </tbody>' +
                    '                               </table>' +
                    '                           </div>' +
                    '                       </div>' +
                    '                   </div>';


                // END IF
                oldData = data.toString();
            }
           /* //Silver Product
            for (var i = 4; i < 5; i++) {
                var retDesktop = messagesDesktopp[i].split("\t");
                var oldRetDesktop;
                oldRetDesktop = messagesOldDesktop[i].split("\t");
                retDesktop[2]="Silver 99.99";
                
                if(retDesktop[4]>oldRetDesktop[4]){bgcolor_class_ask = 'h';}
                if(retDesktop[4]<oldRetDesktop[4]){bgcolor_class_ask = 'l';}
                if(retDesktop[4]==oldRetDesktop[4]){bgcolor_class_ask = 'e';}
                        trowString += '<div class="col-md-4">' +
                    '                       <div class="s-c">' +
                    '                           <div class="spt">' +
                    '                               <h2>' + retDesktop[2] + '</h2>' +
                    '                           </div>' +
                    '                           <div class="m">' +
                    '                               <table class="table">' +
                    '                                   <tbody>' +
                    '                                     <tr class="product-title-color">' +
                    '                                           <td class="p-h"><span class="spt-rt ' + bgcolor_class_ask + '";  background-color:#d0161e;>' + retDesktop[4] + '</span></td>' +
                    '                                       </tr>' +
                    '                                   </tbody>' +
                    '                               </table>' +
                    '                           </div>' +
                    '                       </div>' +
                    '                   </div>';


                // END IF
                oldData = data.toString();
            } 
            */

            //Spot
            for (var i = 0; i < 3; i++) {
                var retDesktop = messagesDesktopp[i].split("\t");
                var oldRetDesktop;
                oldRetDesktop = messagesOldDesktop[i].split("\t");
                

                if(retDesktop[3]>oldRetDesktop[3]){bgcolor_class_ask = 'h';}
                if(retDesktop[3]<oldRetDesktop[3]){bgcolor_class_ask = 'l';}
                if(retDesktop[3]==oldRetDesktop[3]){bgcolor_class_ask = 'e';}
                
                if(retDesktop[4]>oldRetDesktop[4]){bgcolor_class_bid = 'h';}
                if(retDesktop[4]<oldRetDesktop[4]){bgcolor_class_bid = 'l';}
                if(retDesktop[4]==oldRetDesktop[4]){bgcolor_class_bid = 'e';}

                trow1String += '<div class="m-1">' +

                '                            <table class="table">' +

                '                                <tbody>' +

                '                                    <tr>' +

                '                                        <td class="p-l f-r-0"><span class="p-s">' + retDesktop[2] + '</span></td>' +

                '                                        <td class="p-l f-r pd"><span class="' + bgcolor_class_bid + '"> ' + retDesktop[3] + '</span></td>' +

                '                                        <td class="p-l f-r pd"><span class="' + bgcolor_class_ask + '"> ' + retDesktop[4] + '</span></td>' +

                '                                        <td class="p-l f-r pd smr"><span class="e">' + retDesktop[5] + ' / ' + retDesktop[6] + '</span></td>' +

                '                                    </tr>' +

                '                                </tbody>' +

                '                            </table>' +

                '                        </div>';

                oldData = data.toString();
                

            }

            //MCX
            for (var i = 3; i < 5; i++) {
                var retDesktop = messagesDesktopp[i].split("\t");
                var oldRetDesktop;
                oldRetDesktop = messagesOldDesktop[i].split("\t");

                if(i==4){retDesktop[2]="SILVER";}

                if(retDesktop[3]>oldRetDesktop[3]){bgcolor_class_ask = 'h';}
                if(retDesktop[3]<oldRetDesktop[3]){bgcolor_class_ask = 'l';}
                if(retDesktop[3]==oldRetDesktop[3]){bgcolor_class_ask = 'e';}
                
                if(retDesktop[4]>oldRetDesktop[4]){bgcolor_class_bid = 'h';}
                if(retDesktop[4]<oldRetDesktop[4]){bgcolor_class_bid = 'l';}
                if(retDesktop[4]==oldRetDesktop[4]){bgcolor_class_bid = 'e';}

                trow2String += '<div class="m-1">' +

                '                            <table class="table">' +

                '                                <tbody>' +

                '                                    <tr>' +

                '                                        <td class="p-l f-r-0"><span class="p-s">' + retDesktop[2] + '</span></td>' +

                '                                        <td class="p-l f-r pd"><span class="' + bgcolor_class_bid + '"> ' + retDesktop[3] + '</span></td>' +

                '                                        <td class="p-l f-r pd"><span class="' + bgcolor_class_ask + '"> ' + retDesktop[4] + '</span></td>' +

                '                                        <td class="p-l f-r pd smr"><span class="e">' + retDesktop[5] + ' / ' + retDesktop[6] + '</span></td>' +

                '                                    </tr>' +

                '                                </tbody>' +

                '                            </table>' +

                '                        </div>';

                oldData = data.toString();
                

            }
            trow = $(trowString);
            trow.prependTo(zebra);
            
            trow1 = $(trow1String);
            trow1.prependTo(zebra1);
            
            trow2 = $(trow2String);
            trow2.prependTo(zebra2);
        }
        if (counterRefresh == 0) {
            myScroll.refresh();
            counterRefresh = counterRefresh + 1;
        }
    }
    catch (e) {
        //alert("OnSuccess" + e);
        oldData = data.toString();
        //alert(oldData);
    }
}
function OnError1(request, status, error) {
}
function CallWebServiceFromJquerySilverCoins() {
}
function OnSuccess_SilverRates(data, status) {
}
$(document).ready(function () {});
function CallWebServiceFromJqueryMarquee() {
    try {
        $.ajax({
            type: "GET",
            url: "http://" + localStorage.webPanel + "/WebServiceGetMarquee.asmx/getMarquee?username=" + localStorage.appnameWithMiniadminId,
            dataType: "text",
            crossDomain: true,
            processData: false,
            success: OnSuccessMarquee,
            error: OnErrorMarquee,
            cache: false
        });
    }
    catch (e) {
    }
}
function OnSuccessMarquee(data, status) {
    try {
        var message = data.split("|");
        if (typeof message != 'undefined') {
            removeAllRowsFromMarquee();
            var zebra = document.getElementById("marqueeData");
            var trow;
            var trowString = "";
            trowString = trowString + convert(message[1]);
            $("#marqueeData").html(trowString);
            $('.marquee').marquee({
                duration: 10000,
                gap: 50,
                delayBeforeStart: 0,
                direction: 'left',
                duplicated: true,
                pauseOnHover: true
            });
        }
    }
    catch (e) {
    }
}
function OnErrorMarquee(request, status, error) {
    //alert("Webservice Error: " + request.statusText);
}
function removeAllRowsFromMarquee() {
    $("#marqueeData").empty();
}
var convert = function (convert) {
    return $("<span />", { html: convert }).text();
};