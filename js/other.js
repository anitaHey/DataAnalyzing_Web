$(document).ready(function() {
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

        $('#' + page + '_chart').removeClass('hide');
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
    });
});