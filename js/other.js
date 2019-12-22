$(document).ready(function() {
    var svg_width = $('.head_nav_btn').width();

    $('#video_svg').width(svg_width * 0.9);
    $('#video_svg').height(svg_width);
    $('#video_svg').css("margin-left", svg_width * 0.05);

    var video_anima = bodymovin.loadAnimation({
        container: document.getElementById('video_svg'),
        path: 'https://assets9.lottiefiles.com/packages/lf20_YGNGxq.json',
        animType: 'svg',
        loop: true,
        autoplay: false,
    });
    video_anima.setSpeed(0.6);

    $('#intro_svg').width(svg_width * 1.1);
    $('#intro_svg').height(svg_width);
    $('#intro_svg').css("margin-left", svg_width * -0.05);
    $('#intro_svg').css("margin-bottom", svg_width * 0.05);

    var intro_anima = bodymovin.loadAnimation({
        container: document.getElementById('intro_svg'),
        path: 'https://assets9.lottiefiles.com/datafiles/aidRldsQ1TyvNEf/data.json',
        animType: 'svg',
        loop: true,
        autoplay: false,
    });
    intro_anima.goToAndStop(64, true);
    intro_anima.setSpeed(2);

    $('#chart_svg').width(svg_width);
    $('#chart_svg').height(svg_width);
    $('#chart_svg').css("margin-bottom", svg_width * 0.05);

    var chart_anima = bodymovin.loadAnimation({
        container: document.getElementById('chart_svg'),
        path: 'https://assets9.lottiefiles.com/datafiles/2lgFyY8OHGMJPK0/data.json',
        animType: 'svg',
        loop: true,
        autoplay: false,
    });
    chart_anima.goToAndStop(58, true);
    chart_anima.setSpeed(0.8);

    $('#about_svg').width(svg_width);
    $('#about_svg').height(svg_width);

    var about_anima = bodymovin.loadAnimation({
        container: document.getElementById('about_svg'),
        path: 'https://assets5.lottiefiles.com/packages/lf20_O711lP.json',
        animType: 'svg',
        loop: true,
        autoplay: false,
    });

    $('#video_btn').hover(function() {
        video_anima.play();
    }, function() {
        video_anima.goToAndStop(0, true);
    });

    $('#intro_btn').hover(function() {
        intro_anima.play();
    }, function() {
        intro_anima.goToAndStop(64, true);
    });

    $('#chart_btn').hover(function() {
        chart_anima.play(0);
    }, function() {
        chart_anima.goToAndStop(58, true);
    });

    $('#about_btn').hover(function() {
        about_anima.play();
    }, function() {
        about_anima.goToAndStop(0, true);
    });

    $('#video_btn').click(function() {
        $("body,html").animate({
            scrollTop: $(".first").offset().top
        }, 800);
    });

    $('#chart_btn').click(function() {
        $("body,html").animate({
            scrollTop: $(".third").offset().top
        }, 800);
    });

    $('#about_btn').click(function() {
        $("body,html").animate({
            scrollTop: $(".four").offset().top
        }, 800);
    });

    $('input[name=question]').change(function() {
        var page = $(this).val();

        $('.ans_div').each(function() {
            $(this).addClass('hide');
        });

        $('.row1').addClass('hide');
        $('.row2').addClass('hide');

        if (page < 4) {
            $('.row1').removeClass('hide');
        } else {
            $('.row2').removeClass('hide');
        }

        $('.div_q' + page).removeClass('hide');

        $("body,html").animate({
            scrollTop: $('.div_q' + page).offset().top
        }, 500);
    });

    $('input[name=ans1]').change(function() {
        var page = $(this).val();

        $('.ans1').each(function() {
            $(this).addClass('hide');
        });

        $('#' + page + '_degree').removeClass('hide');
    });

    $('input[name=ans2]').change(function() {
        var page = $(this).val();

        $('.ans2').each(function() {
            $(this).addClass('hide');
        });

        $('#' + page + '_work').removeClass('hide');
    });

    $('input[name=ans3]').change(function() {
        var page = $(this).val();

        $('.ans3').each(function() {
            $(this).addClass('hide');
        });

        $('#' + page + '_prog').removeClass('hide');
    });

    $('input[name=ans4]').change(function() {
        var page = $(this).val();

        $('.ans4').each(function() {
            $(this).addClass('hide');
        });
        $('.lang_des').each(function() {
            $(this).addClass('hide');
        });

        $('#' + page + '_chart').removeClass('hide');
        $('#' + page + '_des').removeClass('hide');
    });

    $('input[name=ans5]').change(function() {
        var page = $(this).val();

        $('.ans5').each(function() {
            $(this).addClass('hide');
        });

        $('#' + page + '_key').removeClass('hide');
    });

    $('.out').click(function() {
        $('.row1').addClass('hide');
        $('.row2').addClass('hide');

        $('.ans_div').each(function() {
            $(this).addClass('hide');
        });

        $('input[name=question]').prop('checked', false);
    });
});