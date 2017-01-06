﻿var interval;
//TODO: do not witch to session after pause in break timer
$(document).ready(function () {
    function minusV(name) {
        if (Number($(name).html() > 0)) {
            $(name).html((Number($(name).html()) - 1).toString());
        }
    }
    function plusV(name) {
        if (Number($(name).html() < 99)) {
            $(name).html((Number($(name).html()) + 1).toString());
        }
    }
    
    function setLongTimer(total) {
       
        var min, sec;
        var startTime = new Date().getTime();
        var stopTime = startTime + total * 1000;
        var leftTime = stopTime - startTime;
       
        interval = setInterval(function () {
            var now = new Date().getTime();
            leftTime = stopTime - now;
            if (now <= stopTime) {
                min = Math.floor(leftTime / 60000);
                sec = Math.floor((leftTime / 1000) % 60);
                if (sec < 10) sec = "0" + sec;
                $('#timeLeft').html(min + ":" + sec);
                $('#timerStatus').html("Session");
                $('#timerView').val('s');
            }
            else {
                clearInterval(interval);
                setShortTimer(60*Number($('#breakTime').html()));
            }
        }, 250);
    }
    function setShortTimer(total) {
        var min, sec;
        var startTime = new Date().getTime();
        var stopTime = startTime + total * 1000;
        var leftTime = stopTime - startTime;

        interval = setInterval(function () {
            var now = new Date().getTime();
            leftTime = stopTime - now;
            if (now <= stopTime) {
                min = Math.floor(leftTime / 60000);
                sec = Math.floor((leftTime / 1000) % 60);
                if (sec < 10) sec = "0" + sec;
                $('#timeLeft').html(min + ":" + sec);
                $('#timerStatus').html("Break");
                $('#timerView').val('s');
            }
            else {
                clearInterval(interval);
                setLongTimer(60*Number($('#longTime').html()));
            }
        }, 250);
    }
    $('button').on('click', function () {
        switch (this.value) {
            case 'b-': {
                minusV('#breakTime');
                break;
            }
            case 'b+': {
                plusV('#breakTime');
                break;
            }
            case 'l-': {
                minusV('#longTime');
                $('#timeLeft').html($('#longTime').html()+':00');
                break;
            }
            case 'l+': {
                plusV('#longTime');
                $('#timeLeft').html($('#longTime').html() + ':00');
                break;
            }
            case 't': {
                var total = $('#timeLeft').html().split(':');
                total = Number(total[0]) * 60 + Number(total[1]);
                setLongTimer(total);
                $("button").prop("disabled", true);
                $("#timerView").prop("disabled", false);
                break;
            }
            case 's': {
                clearInterval(interval);
                $('#timerView').val('t');
                $("button").prop("disabled", false);
                break;
            }
        }
    });
    $('#mainWin').removeClass('hidden');
    $('#loadWin').addClass('hidden');
    $('#failWin').addClass('hidden');
});