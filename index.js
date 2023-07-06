$(document).ready(function() {
    var start = $('#start');
    var reset = $('#reset');

    var h = $('#hour');
    var m = $('#minute');
    var s = $('#sec');

    var startTimer = null;

    start.on('click', function() {
        function startInterval() {
            startTimer = setInterval(function() {
                timer();
            }, 1000);
        }
        startInterval();
    });

    reset.on('click', function() {
        h.val(0);
        m.val(0);
        s.val(0);
        stopInterval();
    });

    function timer() {
        if (h.val() == 0 && m.val() == 0 && s.val() == 0) {
            h.val(0);
            m.val(0);
            s.val(0);
        } else if (s.val() != 0) {
            s.val(s.val() - 1);
        } else if (m.val() != 0 && s.val() == 0) {
            s.val(59);
            m.val(m.val() - 1);
        } else if (h.val() != 0 && m.val() == 0) {
            m.val(60);
            h.val(h.val() - 1);
        }
        return;
    }

    function stopInterval() {
        clearInterval(startTimer);
    }
});
