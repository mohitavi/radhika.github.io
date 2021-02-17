var url = "http://starlinebullion.in:10001";
var apiUrl = "http://5.255.72.67:91";
var objRefrance;
var objCLientDetail;
var name = "regaliabullion";
var socket = io(url);
var objPremium = new Object();
var objPorduct = new Object();
var objSpotProduct = new Object();
var objCopySpotProduct = new Object();
socket.on('connect', function() {
    socket.emit('room', name);
    socket.emit('ClientData', name);
    socket.emit('Liverateroom', 'Liverate');
});
socket.on("ClientData", function(data) {
    try {
        if (data != "") {
            objRefrance = JSON.parse(data);
        }
    } 
    catch (e) {
    }
});
socket.on('Liverateroom', function(data) {
    let objrates = JSON.parse(data);
    let viewSymbole = "gold,silver,goldnext,silvernext,xauusd,xagusd,inrspot"
    let myfuturehtmlHD = '';
	let myfuturehtml = '';
    let myfutureHD = true;    
    let futurehtmlHD = '';
    let futurehtml = '';
    let futureHD = true;
    let spothtmlHD = '<table class="table">' +
                        '   <tbody>' +
                        '      <tr class="product-title-color">' +
                        '         <td class="p-h p0"><span>Spot</span></td>' +
                        '         <td class="p-h ph"><span>BUY</span></td>' +
                        '         <td class="p-h ph"><span>SELL</span></td>' +
                        '         <td class="p-h ph smr"><span>HIGH / LOW</span></td>' +
                        '      </tr>' +
                        '   </tbody>' +
                        '</table>';  
    let spothtml = '';
    let spotHD = true;
    let nexthtmlHD = '';
    let nexthtml = '';
    let nextHD=true;
    try {
        localStorage.setItem("Spot_data", JSON.stringify(objSpotProduct));
        try {
            var SpotProduct_data = localStorage.getItem("Spot_data");
            objCopySpotProduct = JSON.parse(SpotProduct_data);
        } 
        catch (e) {
        }
        for (let i = 0; i < objrates.length; i++) {
            let symbole = objrates[i]["symbol"];
            let ObjSymbole = $.grep(objRefrance, function(v) {
                return v.Source.toLowerCase() == symbole.toLowerCase();
            });
            let s = objrates[i]["symbol"].toLowerCase()
            if (ObjSymbole.length > 0) {
                var bgcolor_class_bid = "";
                try {
                    if (objrates[i]["Bid"] == objCopySpotProduct[i + 'Bid']) {
                       bgcolor_class_bid = '';
                    } 
                    else if (objrates[i]["Bid"] >= objCopySpotProduct[i + 'Bid']) {
                        bgcolor_class_bid = 'h';
                        objSpotProduct[i + 'Bid'] = objrates[i]["Bid"]
                    } 
                    else if (objrates[i]["Bid"] <= objCopySpotProduct[i + 'Bid']) {
                        bgcolor_class_bid = 'l';
                        objSpotProduct[i + 'Bid'] = objrates[i]["Bid"]
                    } 
                    else {
                        objSpotProduct[i + 'Bid'] = objrates[i]["Bid"];
                        bgcolor_class_bid = 'e';
                    }
                } 
                catch (e) {}
                try {
                    if (objrates[i]["Ask"] == objCopySpotProduct[i + 'Ask']) {
                        bgcolor_class_ask = 'e';
                    } 
                    else if (objrates[i]["Ask"] >= objCopySpotProduct[i + 'Ask']) {
                        bgcolor_class_ask = 'h';
                        objSpotProduct[i + 'Ask'] = objrates[i]["Ask"]
                    } 
                    else if (objrates[i]["Ask"] <= objCopySpotProduct[i + 'Ask']) {
                        bgcolor_class_ask = 'l';
                        objSpotProduct[i + 'Ask'] = objrates[i]["Ask"]
                    } 
                    else {
                        objSpotProduct[i + 'Ask'] = objrates[i]["Ask"];
                        bgcolor_class_ask = 'e';
                    }
                } 
                catch (e) {}
                spothtmlHD += '<table class="table">' +
                                    '   <tbody>' +
                                    '      <tr class="product-title-color">' +
                                    '         <td class="p-h p0"><span>Spot</span></td>' +
                                    '         <td class="p-h ph"><span>BUY</span></td>' +
                                    '         <td class="p-h ph"><span>SELL</span></td>' +
                                    '         <td class="p-h ph smr"><span>HIGH / LOW</span></td>' +
                                    '      </tr>' +
                                    '   </tbody>' +
                                    '</table>';
                                    
                if (ObjSymbole[0].IsDisplay == true) {
                    if (symbole.toLocaleLowerCase() == "goldnext" || symbole.toLocaleLowerCase() == "silvernext") {
                             {  if (nextHD == true) {
                                nextHD = false;
                                nexthtmlHD += '<table class="table">' +
                                    '   <tbody>' +
                                    '      <tr class="product-title-color">' +
                                    '         <td class="p-h p0"><span>Future Next</span></td>' +
                                    '         <td class="p-h ph"><span>BUY</span></td>' +
                                    '         <td class="p-h ph"><span>SELL</span></td>' +
                                    '         <td class="p-h ph smr"><span>HIGH / LOW</span></td>' +
                                    '      </tr>' +
                                    '   </tbody>' +
                                    '</table>';  
                            }
                                nexthtml += '<div class="m-1">' +
                            '                            <table class="table">' +
                            '                                <tbody>' +
                            '                                    <tr>' +
                            '                                        <td class="p-l f-r-0"><span class="p-s">' + ObjSymbole[0].Symbol_Name + '</span></td>' +
                            '                                        <td class="p-l f-r pd"><span class="' + bgcolor_class_bid + '"> ' + objrates[i]["Bid"] + '</span></td>' +
                            '                                        <td class="p-l f-r pd"><span class="' + bgcolor_class_ask + '"> ' + objrates[i]["Ask"] + '</span></td>' +
                            '                                        <td class="p-l f-r pd smr"><span class="e">' + objrates[i]["High"] + ' / ' + objrates[i]["Low"] + '</span></td>' +
                            '                                    </tr>' +
                            '                                </tbody>' +
                            '                            </table>' +
                            '                        </div>';
                        }
                    }
                }
            }
        }
        localStorage.setItem("Spot_data", JSON.stringify(objSpotProduct));
        $('#divSpotHd').html(spothtmlHD);
        $('#divSpot').html(spothtml);
        $('#divFutureHd').html(futurehtmlHD);
        $('#divmyFutureHd').html(myfuturehtmlHD);
        $('#divFuture').html(futurehtml);      
        $('#divmyFuture').html(myfuturehtml);
        $('#divNextHd').html(nexthtmlHD);
        $('#divNext').html(nexthtml);
    } 
    catch (e) {
        console.log(e)
    }
});
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}