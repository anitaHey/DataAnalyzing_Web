$(document).ready(function() {
    $("#select_all > input").click(function() {
        if ($("#select_all > input").prop('checked')) {
            $(".programming_select > div > label > input").each(function(index, element) {
                $(this).prop("checked", true);
            });
        } else {
            $(".programming_select > div > label > input").each(function(index, element) {
                $(this).prop("checked", false);
            });
        }
    });

    $('#continent').on('change', function() {
        var select = $("#continent option:selected").text();

        $(".location_select > .country").each(function() {
            $(this).addClass("hide");
        });

        $(".location_select > #" + select).removeClass("hide");
    });

    var radios = document.querySelectorAll('.search_result > div > .radio-group > input[type=radio][name="selector"]');

    function changeHandler(event) {
        $('#facebook_search_table').addClass('hide');
        $('#google_search_table').addClass('hide');
        $('#apple_search_table').addClass('hide');

        if (this.value === 'apple') {
            $('#apple_search_table').removeClass('hide');
        } else if (this.value === 'facebook') {
            $('#facebook_search_table').removeClass('hide');
        }else{
            $('#google_search_table').removeClass('hide');
        }
    }

    Array.prototype.forEach.call(radios, function(radio) {
        radio.addEventListener('change', changeHandler);
    });

    $("#search_btn").click(function() {
        $('#apple_search_table').html('<div class="wait"><div class="loader"></div></div>');

        var apple_data, facebook_data, google_data;
        var search_array_apple = new Array();
        var search_array_facebook = new Array();
        var search_array_google = new Array();

        var degree = $(".degree_select option:selected").text().trim();
        var work = $(".work_select option:selected").text().trim();
        var programming = new Array();

        if (work == "10 up") work = 11;
        else work = parseInt(work);

        $(".programming_select > div > label > input").each(function(index, element) {
            if ($(this).prop('checked')) {
                programming.push($(this).parent("label").text().trim());
            }
        });
        var continent = $("#continent option:selected").text().trim();
        var country = $("#" + continent + " option:selected").text().trim();
        $.ajax({
            type: "GET",
            url: "../data/csv/apple_jobs.csv_new.csv",
            dataType: "text",
            success: function(response) {
                apple_data = $.csv.toObjects(response);


                for (var num = 0; num < apple_data.length; num++) {
                    check = true;

                    if (degree != 'ALL') {
                        check = check && (apple_data[num].min_degree_req.includes(degree) || apple_data[num].pref_degree_req.includes(degree) || apple_data[num].min_degree_req == "None");
                    }
                    if (!check) continue;

                    if (work != 'ALL') {
                        check = parseInt(apple_data[num].min_work_exp_req) <= work || parseInt(apple_data[num].min_work_exp_req) == 0;
                    }
                    if (!check) continue;

                    if (programming.length > 0) {
                        check_tem = false;

                        min_lang = apple_data[num].min_langs_req.split(",");
                        pref_lang = apple_data[num].pref_langs_req.split(",");
                        if (min_lang[0] != "None") {
                            for (var a = 0; a < programming.length; a++) {
                                check_tem = check_tem || min_lang.includes(programming[a]);
                            }
                        }

                        check = check_tem || apple_data[num].min_langs_req == "None";
                    }
                    if (!check) continue;

                    var othername = apple_data[num].location.split(",");
                    othername = othername[othername.length - 1].trim();
                    if (othername.length < 5) {
                        othername = "United States";
                    }

                    if (country != 'ALL') {
                        check = apple_data[num].location.includes(country) || othername == country;
                    } else if (continent != 'ALL') {
                        check = false;
                        $("#" + continent + " > option").each(function(index, element) {
                            var tem = $(this).text();
                            check = check || apple_data[num].location.includes(tem) || othername == tem;
                        });
                    }


                    if (!check) continue;
                    else {
                        search_array_apple.push(apple_data[num]);
                    }
                }
                $("#apple_len").html(search_array_apple.length);
                table_create("apple", search_array_apple);
            }
        });

        $.ajax({
            type: "GET",
            url: "../data/csv/facebook_jobs.csv_new.csv",
            dataType: "text",
            success: function(response) {
                facebook_data = $.csv.toObjects(response);


                for (var num = 0; num < facebook_data.length; num++) {
                    check = true;

                    if (degree != 'ALL') {
                        check = check && (facebook_data[num].min_degree_req.includes(degree) || facebook_data[num].pref_degree_req.includes(degree) || facebook_data[num].min_degree_req == "None");
                    }
                    if (!check) continue;

                    if (work != 'ALL') {
                        check = parseInt(facebook_data[num].min_work_exp_req) <= work || parseInt(facebook_data[num].min_work_exp_req) == 0;
                    }
                    if (!check) continue;

                    if (programming.length > 0) {
                        check_tem = false;

                        min_lang = facebook_data[num].min_langs_req.split(",");
                        pref_lang = facebook_data[num].pref_langs_req.split(",");
                        if (min_lang[0] != "None") {
                            for (var a = 0; a < programming.length; a++) {
                                check_tem = check_tem || min_lang.includes(programming[a]);
                            }
                        }

                        check = check_tem || facebook_data[num].min_langs_req == "None";
                    }
                    if (!check) continue;

                    var othername = facebook_data[num].location.split(",");
                    othername = othername[othername.length - 1].trim();
                    if (othername.length < 5) {
                        othername = "United States";
                    }

                    if (country != 'ALL') {
                        check = facebook_data[num].location.includes(country) || othername == country;
                    } else if (continent != 'ALL') {
                        check = false;
                        $("#" + continent + " > option").each(function(index, element) {
                            var tem = $(this).text();
                            check = check || facebook_data[num].location.includes(tem) || othername == tem;
                        });
                    }


                    if (!check) continue;
                    else {
                        search_array_facebook.push(facebook_data[num]);

                    }
                }
                $("#facebook_len").html(search_array_facebook.length);
                table_create("facebook", search_array_facebook);
            }
        });

        $.ajax({
            type: "GET",
            url: "../data/csv/google_jobs.csv_new.csv",
            dataType: "text",
            success: function(response) {
                google_data = $.csv.toObjects(response);


                for (var num = 0; num < google_data.length; num++) {
                    check = true;

                    if (degree != 'ALL') {
                        check = check && (google_data[num].min_degree_req.includes(degree) || google_data[num].pref_degree_req.includes(degree) || google_data[num].min_degree_req == "None");
                    }
                    if (!check) continue;

                    if (work != 'ALL') {
                        check = parseInt(google_data[num].min_work_exp_req) <= work|| parseInt(google_data[num].min_work_exp_req) == 0;
                    }
                    if (!check) continue;

                    if (programming.length > 0) {
                        check_tem = false;

                        min_lang = google_data[num].min_langs_req.split(",");
                        pref_lang = google_data[num].pref_langs_req.split(",");
                        if (min_lang[0] != "None") {
                            for (var a = 0; a < programming.length; a++) {
                                check_tem = check_tem || min_lang.includes(programming[a]);
                            }
                        }

                        check = check_tem || google_data[num].min_langs_req == "None";
                    }
                    if (!check) continue;

                    var othername = google_data[num].loc.split(",");
                    othername = othername[othername.length - 1].trim();
                    if (othername.length < 5) {
                        othername = "United States";
                    }

                    if (country != 'ALL') {
                        check = google_data[num].loc.includes(country) || othername == country;
                    } else if (continent != 'ALL') {
                        check = false;
                        $("#" + continent + " > option").each(function(index, element) {
                            var tem = $(this).text();
                            check = check || google_data[num].loc.includes(tem) || othername == tem;
                        });
                    }


                    if (!check) continue;
                    else {
                        search_array_google.push(google_data[num]);

                    }
                }
                $("#google_len").html(search_array_google.length);
                table_create("google", search_array_google);
            }
        });

        TweenMax.to(window, 2.5, { scrollTo: { y: $('.search_result').offset().top }, ease: Expo.easeOut, y: -500 });
    });



    function table_create(company, arr) {
        var length = arr.length;
        var page = Math.floor(length / 10) + 1;
        var table_word = "";
        var pagination = "";
        var count = 0;
        var check = 1;
        for (num = 0; num < page; num++) {
            check = 1;
            if (num == 0) {
                pagination = pagination + '<nav aria-label="Page navigation example"><ul class="pagination"><li class="page-item"><button class="page-link" href="#" aria-label="Previous " id="' + company + '_previous" tabindex="-1"><span aria-hidden="true">&laquo;</span><span class="sr-only">Previous</span></button></li><li class="page-item active"><select class="h-100" id="' + company + '_selectPage" style="width:80px; border-radius: 0px;"><option>1</option></li>';
                table_word = table_word + '<div id="' + company + '_search_page1">';
            } else {
                pagination = pagination + '<li class="page-item"><option>' + (num + 1) + '</option></li>';
                table_word = table_word + '<div id="' + company + '_search_page' + (num + 1) + '" class="' + company + '_search_page">';
            }

            while (count < length && check == 1) {
                table_word = table_word + '<div class="search_div"><div class="search_div_name">' + arr[count].title;

                if(company == 'google') table_word = table_word + '</div><div class="search_div_loc"><i class="fas fa-map-marker-alt"></i><span class="location_word">' + arr[count].loc;
                else table_word = table_word + '</div><div class="search_div_loc"><i class="fas fa-map-marker-alt"></i><span class="location_word">' + arr[count].location;
                
                table_word = table_word + '</span></div><div class="row mt-2"><div class="col-5"><i class="fas fa-book"></i>Requirement<br>Minimum:';

                if(arr[count].min_langs_req.length>30) table_word = table_word + ' <span style="font-size: 16px;">' + arr[count].min_langs_req + '</span><br>Preferred: ';
                else table_word = table_word + ' <span>' + arr[count].min_langs_req + '</span><br>Preferred: ';

                if (arr[count].pref_langs_req.length>30)  table_word = table_word +'<span style="font-size: 16px;">' + arr[count].pref_langs_req;
                else   table_word = table_word +'<span>' + arr[count].pref_langs_req;
                
                table_word = table_word + '</span></div><div class="col-4"><i class="fas fa-graduation-cap"></i>Degree Requirement<br>Minimum: <span >' + arr[count].min_degree_req + '</span><br>Preferred: <span>' + arr[count].pref_degree_req;
                table_word = table_word + '</span></div><div class="col-3"><i class="fas fa-briefcase"></i>Work Experience<br>Minimum: <span>' + arr[count].min_work_exp_req + '</span><br>Preferred: <span>' + arr[count].pref_work_exp_req + '</span></div></div></div>';
                if (count % 9 == 0 && count != 0) {
                    check = 0;
                }
                count++;
            }
            table_word = table_word + '</div>';
        }
        pagination = pagination + '</select><li class="page-item"><button class="page-link" href="#" aria-label="Next" id="' + company + '_next"><span aria-hidden="true">&raquo;</span><span class="sr-only">Next</span></button></li></ul></nav>';
        $("#" + company + "_search_table").html(table_word + "<br>" + pagination);
        $('#' + company + '_previous').attr('disabled', true);
        if (page == 1) {
            $('#' + company + '_next').attr('disabled', true);
        }
        $('.' + company + '_search_page').each(function(index, el) {
            $(this).css({ "display": "none", "opacity": "0" });
        });

        var previous_page = 1;
        $('#' + company + '_previous').click(function(event) {
            $("#" + company + "_search_page" + previous_page).css({ "display": "none", "opacity": "0" });
            previous_page = previous_page - 1;
            $("#" + company + "_search_page" + previous_page).css({ "display": "block", "opacity": "1" });
            $('#' + company + '_selectPage').val(previous_page);
            change();
        });
        $('#' + company + '_next').click(function(event) {
            $("#" + company + "_search_page" + previous_page).css({ "display": "none", "opacity": "0" });
            previous_page = previous_page + 1;
            $("#" + company + "_search_page" + previous_page).css({ "display": "block", "opacity": "1" });
            $('#' + company + '_selectPage').val(previous_page);
            change();
        });

        $('#' + company + "_selectPage").change(function() {
            $("#" + company + "_search_page" + previous_page).css({ "display": "none", "opacity": "0" });
            var now_page = parseInt($("#" + company + "_selectPage").val());
            $("#" + company + "_search_page" + now_page).css({ "display": "block", "opacity": "1" });
            previous_page = now_page;
            change();
        });

        function change() {
            if (previous_page == page) {
                $('#' + company + '_next').attr('disabled', true);
                $('#' + company + '_previous').attr('disabled', false);
            } else if (previous_page == 1) {
                $('#' + company + '_previous').attr('disabled', true);
                $('#' + company + '_next').attr('disabled', false);
            } else {
                $('#' + company + '_next').attr('disabled', false);
                $('#' + company + '_previous').attr('disabled', false);
            }
            TweenMax.to(window, 2, { scrollTo: { y: $('.search_result').offset().top }, ease: Expo.easeOut, y: -500 });
        }
    }
});
