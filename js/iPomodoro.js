var interval;
$(document).ready(function () {

    $('button').on('click', function () {
        switch (this.value) {
            case 'b-': {
                if (Number($('#breakTime').html()>0)) {
                    $('#breakTime').html((Number($('#breakTime').html()) - 1).toString());
                }
                break;
            }
            case 'b+': {
                if (Number($('#breakTime').html() < 99)) {
                    $('#breakTime').html((Number($('#breakTime').html()) + 1).toString());
                }
                break;
            }
            case 'l-': {
                if (Number($('#longTime').html() > 0)) {
                    $('#longTime').html((Number($('#longTime').html()) - 1).toString());
                    $('#timerView').html($('#longTime').html() + ":00<br /> Click!");
                }
                break;
            }
            case 'l+': {
                if (Number($('#longTime').html() < 99)) {
                    $('#longTime').html((Number($('#longTime').html()) + 1).toString());
                    $('#timerView').html($('#longTime').html() + ":00<br /> Click!");
                }
                break;
            }
            case 't': {
                var total = 60 * Number($('#longTime').html());
                var elapsed = 0;
                var min = Math.floor(total/60);
                var sec = total % 60;
                interval = setInterval(function () {
                    if (elapsed < total) {
                        total -= 1;
                        min = Math.floor(total/60);
                        sec = total % 60;
                        $('#timerView').html(min + ":" + sec+"<br>Stop!");
                        $('#timerView').val('s');
                    }
                    else {
                        clearInterval(interval);
                        alert('Done');
                    }
                }, 1000)
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