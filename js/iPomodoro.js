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
                var interval = setInterval(function () {
                    if (elapsed < total) {
                        total -= 1;
                        $('#timerView').html(total + ":00<br /> Click!");
                    }
                    else {
                        clearInterval(interval);
                        alert('Done');
                    }
                }, 1000)
                break;
            }
        }
    });
    $('#mainWin').removeClass('hidden');
    $('#loadWin').addClass('hidden');
    $('#failWin').addClass('hidden');
});