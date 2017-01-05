var interval;

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
        var elapsed = 0;
        var min, sec;
        
        interval = setInterval(function () {
            if (elapsed < total) {
                total -= 1;
                min = Math.floor(total / 60);
                sec = total % 60;
                $('#timerView').html(min + ":" + sec + "<br>Stop!");
                $('#timerView').val('s');
            }
            else {
                clearInterval(interval);
                setShortTimer(60 * Number($('#breakTime').html()));
            }
        }, 100);
    }
    function setShortTimer(total) {
        var elapsed = 0;
        var min, sec;
        
        interval = setInterval(function () {
            if (elapsed < total) {
                total -= 1;
                min = Math.floor(total / 60);
                sec = total % 60;
                $('#timerView').html(min + ":" + sec + "<br>Stop!");
                $('#timerView').val('s');
            }
            else {
                clearInterval(interval);
                setLongTimer(60 * Number($('#longTime').html()));
            }
        }, 100);
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
                $('#timerView').html($('#longTime').html() + ":00<br /> Click!");
                break;
            }
            case 'l+': {
                plusV('#longTime');
                $('#timerView').html($('#longTime').html() + ":00<br /> Click!");
                break;
            }
            case 't': {
                var total = 60 * Number($('#longTime').html());
                setLongTimer(total);
                break;
            }
            case 's': {
                clearInterval(interval);
                $('#timerView').val('t');
                $('#timerView').html($('#longTime').html() + ":00<br /> Click!");
                break;
            }
        }
    });
    $('#mainWin').removeClass('hidden');
    $('#loadWin').addClass('hidden');
    $('#failWin').addClass('hidden');
});