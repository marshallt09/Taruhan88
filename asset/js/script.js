$(document).ready(function () {
    $("#nav-button").on("click", function () {
        $('#navigation:checkbox').change(function () {
            // this will contain a reference to the checkbox   
            if (this.checked) {
                $('nav').css('height', '259px');
            } else {
                $('nav').css('height', '0px');
            }
        });

    });
    $(window).resize(function () {
        if ($(this).width() >= 1025) {
            $('nav').css({
                'height': '30px',
                'top': '0px',
                'position': 'relative'
            });
        }
        if ($(this).width() <= 1024) {
            $('nav').css({
                'height': '0px',
                'top': '60px',
                'width': '100%',
                'position': 'absolute'
            });
        }
    });
    $(document).keyup(function (e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            $('.games-t88').css('display', 'none');
        }
    });
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $('nav').css({
                'top': '0px',
                'position': 'fixed',
                'width': '1024px',
                'z-index': 2
            });
            $('.logo').css({
                'z-index': 1,
            });
        } else {
            $('nav').css({
                'z-index': '0',
                'position': 'relative',
                'z-index': 2

            });
            $('.logo').css('z-index', '3');
        }
    });

    $('#nav-daftar').on('click', function () {
        //local link
        $('section').load('/../partial/daftar.html');
        //github link
        $('section').load('/taruhan88/partial/daftar.html');
        //$.getScript('/asset/js/register.js');
    });

    $('#nav-deposit').on('click', function () {
        //local link
        $('section').load('/../partial/deposit.html');
        //github link
        $('section').load('/taruhan88/partial/deposit.html');
        //$.getScript('/asset/js/register.js');
    });

    $('#nav-withdraw').on('click', function () {
        //local link
        $('section').load('/../partial/withdraw.html');
        //github link
        $('section').load('/taruhan88/partial/withdraw.html');
        //$.getScript('/asset/js/register.js');
    });

    $('#nav-promo').on('click', function () {
        //local link
        $('section').load('/../partial/promo.html');
        //github link
        $('section').load('/taruhan88/partial/promo.html');
        //$.getScript('/asset/js/register.js');
    });

    $('#nav-aturan').on('click', function () {
        //local link
        $('section').load('/../partial/peraturan.html');
        //github link
        $('section').load('/taruhan88/partial/peraturan.html');
        //$.getScript('/asset/js/register.js');
    });
    
    $('#nav-livescore').on('click', function () {
        //local link
        $('section').load('/../partial/livescore.php');
        //github link
        $('section').load('/taruhan88/partial/livescore.php');
        //$.getScript('/asset/js/register.js');

        $('aside').css({
            'width' : '280px',
            'position' : 'absolute',
            'right' : '0px', 
            'transition' : 'width .1s ease-in-out'
        });
        $('section').css({
            'width' : 'calc(100% - 280px - 1em)',
            'transition' : 'width .1s ease-in-out',
        });
        $('#cr').css({
            'background' : 'none',
        });
    });

    $('#nav-games').on('click', function () {
        $('.games-t88').css('display', 'block');
    });

    $('.close-game').on('click', function () {
        $('.games-t88').css('display', 'none');
    });

});
