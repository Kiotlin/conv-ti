function addSelectBox(){
    var selectYear = document.getElementById("year_select");
    for(var i=1, j=1971; i<61 && j<2031; i++, j++){  
        var option = document.createElement("option");
        option.value = i;
        var temp = document.createTextNode(j.toString());
        option.appendChild(temp);
        selectYear.appendChild(option);
    }

    var selectMonth = document.getElementById("month_select");
    for(var i=1, j=2; i<12 && j<13; i++, j++){
        var option = document.createElement("option");
        option.value = i;
        con_j = "";
        if(j < 10){
            con_j = "0" + j;
        }else{
            con_j = j.toString();
        }
        var temp = document.createTextNode(con_j);
        option.appendChild(temp);
        selectMonth.appendChild(option);
    }

    var selectDay = document.getElementById("day_select");
    for(var i=1, j=2; i<31 && j<32; i++, j++){
        var option = document.createElement("option");
        option.value = i;
        con_j = "";
        if(j < 10){
            con_j = "0" + j;
        }else{
            con_j = j.toString();
        }
        var temp = document.createTextNode(con_j);
        option.appendChild(temp);
        selectDay.appendChild(option);
    }

    var selectHour = document.getElementById("hour_select");
    for(var i=1, j=1; i<24 && j<24; i++, j++){
        var option = document.createElement("option");
        option.value = i;
        con_j = "";
        if(j < 10){
            con_j = "0" + j;
        }else{
            con_j = j.toString();
        }
        var temp = document.createTextNode(con_j);
        option.appendChild(temp);
        selectHour.appendChild(option);
    }

    var selectMinute = document.getElementById("min_select");
    for(var i=1, j=1; i<60 && j<60; i++, j++){
        var option = document.createElement("option");
        option.value = i;
        con_j = "";
        if(j < 10){
            con_j = "0" + j;
        }else{
            con_j = j.toString();
        }
        var temp = document.createTextNode(con_j);
        option.appendChild(temp);
        selectMinute.appendChild(option);
    }

    var selectSecond = document.getElementById("sec_select");
    for(var i=1, j=1; i<60 && j<60; i++, j++){
        var option = document.createElement("option");
        option.value = i;
        con_j = "";
        if(j < 10){
            con_j = "0" + j;
        }else{
            con_j = j.toString();
        }
        var temp = document.createTextNode(con_j);
        option.appendChild(temp);
        selectSecond.appendChild(option);
    }
}

function convertFormat(y,m,d,h,mi,s,zone){
    year = y;
    month = m;
    day = d;
    hour = h;
    minute = mi;
    second = s;

    con_hour = 0;
    if(zone >= 0 ){
        temp_hour = parseInt(hour) + zone;
        con_hour = temp_hour % 24;
        if(temp_hour >= 24){
            if(parseInt(month)==1 || parseInt(month)==3 ||
            parseInt(month)==5 || parseInt(month)==7 ||
            parseInt(month)==8 || parseInt(month)==10 ||
            parseInt(month)==12){
                if(parseInt(day)==31){
                    day = "1";
                    if(parseInt(month)==12){
                        month = "1";
                        con_year = parseInt(year) + 1;
                        year = con_year.toString();
                    }else{
                        con_month = parseInt(month) + 1;
                        month = con_month.toString();
                    }
                }else{
                    con_day = parseInt(day) + 1;
                    day = con_day.toString();
                }
            }else if(parseInt(month)==4 || parseInt(month)==6 ||
            parseInt(month)==9 || parseInt(month)==11){
                if(parseInt(day)==30){
                    day = "1";
                    con_month = parseInt(month) + 1;
                    month = con_month.toString();
                }else{
                    con_day = parseInt(day) + 1;
                    day = con_day.toString();
                }
            }else{
                if(parseInt(day)==28){
                    day = "1";
                    con_month = parseInt(month) + 1;
                    month = con_month.toString();
                }else{
                    con_day = parseInt(day) + 1;
                    day = con_day.toString();
                }
            }
        }
    }else {
        temp_hour = parseInt(hour) + zone;
        if(temp_hour < 0){
            con_hour = 24 + temp_hour;
            if(parseInt(month)==11 || parseInt(month)==2 ||
            parseInt(month)==9 || parseInt(month)==8 ||
            parseInt(month)==6 || parseInt(month)==4){
                if(parseInt(day)==1){
                    day = "31";
                    con_month = parseInt(month) - 1;
                    month = con_month.toString();
                }else{
                    con_day = parseInt(day) - 1;
                    day = con_day.toString();
                }
            }else if(parseInt(month)==10 || parseInt(month)==7 ||
            parseInt(month)==5 || parseInt(month)==12){
                if(parseInt(day)==1){
                    day = "30";
                    con_month = parseInt(month) - 1;
                    month = con_month.toString();
                }else{
                    con_day = parseInt(day) - 1;
                    day = con_day.toString();
                }
            }else if(parseInt(month)==3){
                if(parseInt(day)==1){
                    day = "28";
                    month = "2";
                }else{
                    con_day = parseInt(day) - 1;
                    day = con_day.toString();
                }
            }else{
                if(parseInt(day)==1){
                    day = "31";
                    month = "12";
                    con_year = parseInt(year) - 1;
                    year = con_year.toString(); 
                }else{
                    con_day = parseInt(day) - 1;
                    day = con_day.toString();
                }
            }
        }else{
            con_hour = temp_hour;
        }
    }

    if(con_hour < 10){
        hour = "0" + con_hour;
    }else{
        hour = con_hour.toString();
    }
    if(parseInt(month) < 10){
        month = "0" + parseInt(month);
    }
    if(parseInt(day) < 10){
        day = "0" + parseInt(day);
    }
    return year + "-" + month + "-" + day + " " + hour + "-" + minute + "-" + second;
}

function showTime(){
    var date0 = new Date();
    y = date0.getUTCFullYear();
    m = date0.getUTCMonth()+1;
    d = date0.getUTCDate();
    h = date0.getUTCHours();
    mi = date0.getUTCMinutes()<10? "0"+date0.getUTCMinutes():date0.getUTCMinutes();
    s = date0.getUTCSeconds()<10? "0"+date0.getUTCSeconds():date0.getUTCSeconds();
    time_str = "";
    var list = document.getElementsByClassName("time");
    for (var i = 0; i < list.length; i++){
        if(i >= 13){
            time_str = convertFormat(y,m,d,h,mi,s, -1 * (i-12));
        }else {
            time_str = convertFormat(y,m,d,h,mi,s, i);
        }
        list[i].innerHTML = time_str;
    }
}
var bot = setInterval("showTime()",0);

function convert(){

    var buttonConvert = document.getElementById("_convert");

    var getYear = document.getElementById("year_select");
    var getMonth = document.getElementById("month_select");
    var getDay = document.getElementById("day_select");
    var getHour = document.getElementById("hour_select");
    var getMinute = document.getElementById("min_select");
    var getSecond = document.getElementById("sec_select");

    buttonConvert.onclick = function(){

        var indexYear = getYear.selectedIndex;
        var indexMonth = getMonth.selectedIndex;
        var indexDay = getDay.selectedIndex;
        var indexHour = getHour.selectedIndex;
        var indexMinute = getMinute.selectedIndex;
        var indexSecond = getSecond.selectedIndex;

        var y = getYear.options[indexYear].text;  
        var m = getMonth.options[indexMonth].text; 
        var d = getDay.options[indexDay].text; 
        var h = getHour.options[indexHour].text; 
        var mi = getMinute.options[indexMinute].text; 
        var s = getSecond.options[indexSecond].text; 
        
        //verify
        var selectBox = document.getElementsByClassName("nes-select");
        var count = 0;
        for(var i=0; i<selectBox.length; i++){
            var select = selectBox[i].children[0];
            if(select.selectedIndex == 0) {count++;}
        }
        if(count > 0){
            //create dialog
            var dialog = document.getElementById('dialog-convert');
            dialogPolyfill.registerDialog(dialog);
            dialog.showModal();
            return;
        }

        time_str = "";
        var list = document.getElementsByClassName("time");
        for (var i = 0; i < list.length; i++){
            if(i >= 13){
                time_str = convertFormat(y,m,d,h,mi,s, (-1 * i) + 4); //default local time zone - UTC+8
            }else {
                time_str = convertFormat(y,m,d,h,mi,s, i - 8); //default local time zone - UTC+8
            }
            list[i].innerHTML = time_str;
        }
        //clear intervals
        for(var i=1; i<=bot; i++){
            clearInterval(i);
        }
    };

}
convert();

function now(){

    var buttonNow = document.getElementById("_now");

    buttonNow.onclick = function(){
        bot = window.setInterval("showTime()",0);
    };
}
now();

function clear(){

    var buttonClear = document.getElementById("_clear");

    buttonClear.onclick = function(){
        var selectBox = document.getElementsByClassName("nes-select");   
        var checkBox = document.getElementsByClassName("nes-checkbox");
        for(var i=0; i<selectBox.length; i++){
            var select = selectBox[i].children[0];
            select.selectedIndex = 0;
        } 
        for(var i=0; i<checkBox.length; i++){
            if(checkBox[i].value == 1){
                checkBox[i].click();
            }
        } 
        bot = window.setInterval("showTime()",0);
    };
}
clear();

function checkBoxAddAttri(){
    var checkbox = document.getElementsByClassName("nes-checkbox");
    for(var i=0; i<checkbox.length; i++){
        checkbox[i].value = "0";
    }
}
checkBoxAddAttri();

function labelPress(caller){
    var wrap = caller.parentNode;
    var value = caller.value;
    if(parseInt(value)==0){
        wrap.classList.add('selected');
        caller.value = "1";
    }else{
        wrap.classList.remove('selected');
        caller.value = "0";
    }  
}

function execCopy(text){
    var textArea = document.createElement('textArea');  
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    document.body.removeChild(textArea);
}

function copyToClipBoard(){
    var clipBoardContent = "";
    var checkBox = document.getElementsByClassName("nes-checkbox");
    var checkBoxSelected = 0;
    for(var i=0; i<checkBox.length; i++){
        if(parseInt(checkBox[i].value) == 1){
            var timeZone = checkBox[i].nextSibling.nextSibling.innerHTML; 
            var convertedTime = checkBox[i].parentNode.parentNode.nextSibling.nextSibling.innerHTML;
            clipBoardContent = clipBoardContent + "[" + timeZone +"] " + convertedTime + "\n";
            checkBoxSelected++;
        }
    }
    if(checkBoxSelected == 0) clipBoardContent = "[ Please press at least one checkbox... ]";
    execCopy(clipBoardContent);

    //create dialog
    var dialog = document.getElementById('dialog-rounded');
    dialogPolyfill.registerDialog(dialog);
    dialog.showModal();
}

$(document).ready(function(){

    addSelectBox();
    $(function(){
        $(window).scroll(function() {
            if ($(document).scrollTop() > 50) {
                $('header').addClass('sticky');
                $('.logo_wrap a h1 i').hide();
            } else {
                $('header').removeClass('sticky');
                $('.logo_wrap a h1 i').show();
            }
        });
    });

    $("#go_top").hide();
    $(function(){
        $(window).scroll(function(){
            if($(this).scrollTop() > 250){
                $("#go_top").fadeIn();
            }else {
                $("#go_top").fadeOut();
            }
        });
    });

    $("#go_top").click(function(){
        $("html,body").animate({scrollTop:0},800);
        return false;
    });
});