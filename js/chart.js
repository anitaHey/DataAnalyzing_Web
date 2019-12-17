var apple_data = getCsv("data/csv/apple_jobs.csv_new.csv");
var google_data = getCsv("data/csv/google_jobs.csv_new.csv");
var facebook_data = getCsv("data/csv/facebook_jobs.csv_new.csv");
var degree_keywords = ['PhD', 'Master', 'MBA', 'BA', 'BS', 'Bachelor', 'None'];
var work_keywords = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
var prog_keywords = ['Python', 'JavaScript', 'SQL', 'C++', 'Go', 'C#', 'Java', 'Objective C', 'PHP', 'Ruby', 'Swift', 'Kotlin'];

var apple_degree_reqs = count_keywords_freq(apple_data, ['min_degree_req'], degree_keywords, 'degree');
var google_degree_reqs = count_keywords_freq(google_data, ['min_degree_req', 'pref_degree_req'], degree_keywords, 'degree');
var facebook_degree_reqs = count_keywords_freq(facebook_data, ['min_degree_req', 'pref_degree_req'], degree_keywords, 'degree');
var all_degree_reqs = count_all([apple_degree_reqs, google_degree_reqs, facebook_degree_reqs], degree_keywords, 'degree');

var apple_work_reqs = count_keywords_freq(apple_data, ['min_work_exp_req', 'pref_work_exp_req'], work_keywords, 'work');
var google_work_reqs = count_keywords_freq(google_data, ['min_work_exp_req', 'pref_work_exp_req'], work_keywords, 'work');
var facebook_work_reqs = count_keywords_freq(facebook_data, ['min_work_exp_req', 'pref_work_exp_req'], work_keywords, 'work');
var all_work_reqs = count_all([apple_work_reqs, google_work_reqs, facebook_work_reqs], work_keywords, 'work');

var apple_prog_reqs = count_keywords_freq(apple_data, ['min_langs_req', 'pref_langs_req'], prog_keywords, 'prog');
var google_prog_reqs = count_keywords_freq(google_data, ['min_langs_req', 'pref_langs_req'], prog_keywords, 'prog');
var facebook_prog_reqs = count_keywords_freq(facebook_data, ['min_langs_req', 'pref_langs_req'], prog_keywords, 'prog');
var all_prog_reqs = count_all([apple_prog_reqs, google_prog_reqs, facebook_prog_reqs], prog_keywords, 'prog');

function getCsv(filepath) {
    var company_data;
    $.ajax({
        type: "GET",
        url: filepath,
        dataType: "text",
        async: false,
        success: function(data) {
            company_data = $.csv.toObjects(data);
        }
    });
    return company_data
}

function count_keywords_freq(df, col_name, keywords, type) {
    var freq = {};
    for (var index in keywords) {
        freq[keywords[index]] = 0;
    }

    switch (type) {
        case 'degree':
            for (var num in col_name) {
                for (var data in df) {
                    freq[df[data][col_name[num]]]++;
                }
            }
            break;

        case 'work':
            for (var num in col_name) {
                for (var data in df) {
                    if (parseInt(df[data][col_name[num]]) < 10) {
                        freq[df[data][col_name[num]]]++;
                    } else {
                        freq['10+']++;
                    }
                }
            }
            break;

        case 'prog':
            for (var num in col_name) {
                for (var data in df) {
                    strs = df[data][col_name[num]].split(',');
                    for (var str in strs) {
                        freq[strs[str]]++;
                    }
                }
            }
            break;
    }

    return freq
}

function count_all(col_name, keywords) {
    var freq = {};
    for (var index in keywords) {
        freq[keywords[index]] = 0;

        for (var num in col_name) {
            freq[keywords[index]] += col_name[num][keywords[index]];
        }
    }

    return freq
}

function get_y_chart(df, keywords, degree) {
    var y_chart = new Array();
    for (keyword in keywords) {
        y_chart.push(df[keywords[keyword]]);
    }
    return y_chart;
}

var degree_layout = {
    xaxis: {
        title: 'Degree',
        type: 'category',
        tickangle: -20
    },
    font: {
        size: 18,
    },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)'
};

all_degree = document.getElementById('all_degree');
var all_degree_chart = [{
    x: degree_keywords,
    y: get_y_chart(all_degree_reqs, degree_keywords),
    type: 'bar',
    width: 0.4,
    marker: {
        color: ['#958090', '#83A2BE', '#7DAEA9', '#B4BF86', '#CBB079', '#B77A76', '#707070', '#AAAAAA']
    }
}];
Plotly.newPlot(all_degree, all_degree_chart, degree_layout);

apple_degree = document.getElementById('apple_degree');
var apple_degree_chart = [{
    x: degree_keywords,
    y: get_y_chart(apple_degree_reqs, degree_keywords),
    type: 'bar',
    width: 0.4,
    marker: {
        color: ['#958090', '#83A2BE', '#7DAEA9', '#B4BF86', '#CBB079', '#B77A76', '#707070', '#AAAAAA']
    }
}];
Plotly.newPlot(apple_degree, apple_degree_chart, degree_layout);

google_degree = document.getElementById('google_degree');
var google_degree_chart = [{
    x: degree_keywords,
    y: get_y_chart(google_degree_reqs, degree_keywords),
    type: 'bar',
    width: 0.4,
    marker: {
        color: ['#958090', '#83A2BE', '#7DAEA9', '#B4BF86', '#CBB079', '#B77A76', '#707070', '#AAAAAA']
    }
}];
Plotly.newPlot(google_degree, google_degree_chart, degree_layout);

facebook_degree = document.getElementById('facebook_degree');
var facebook_degree_chart = [{
    x: degree_keywords,
    y: get_y_chart(facebook_degree_reqs, degree_keywords),
    type: 'bar',
    width: 0.4,
    marker: {
        color: ['#958090', '#83A2BE', '#7DAEA9', '#B4BF86', '#CBB079', '#B77A76', '#707070', '#AAAAAA']
    }
}];
Plotly.newPlot(facebook_degree, facebook_degree_chart, degree_layout);


var work_layout = {
    xaxis: {
        title: 'Work Experience',
        type: 'category',
        tickangle: -20
    },
    font: {
        size: 18,
    },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)'
};

all_work = document.getElementById('all_work');
var all_work_chart = [{
    x: work_keywords,
    y: get_y_chart(all_work_reqs, work_keywords),
    type: 'bar',
    width: 0.4,
    marker: {
        color: ['#958090', '#83A2BE', '#7DAEA9', '#B4BF86', '#CBB079', '#B77A76', '#707070', '#AAAAAA', '#F18E33', '#178600', '#438EFF']
    }
}];
Plotly.newPlot(all_work, all_work_chart, work_layout);

apple_work = document.getElementById('apple_work');
var apple_work_chart = [{
    x: work_keywords,
    y: get_y_chart(apple_work_reqs, work_keywords),
    type: 'bar',
    width: 0.4,
    marker: {
        color: ['#958090', '#83A2BE', '#7DAEA9', '#B4BF86', '#CBB079', '#B77A76', '#707070', '#AAAAAA', '#F18E33', '#178600', '#438EFF']
    }
}];
Plotly.newPlot(apple_work, apple_work_chart, work_layout);

google_work = document.getElementById('google_work');
var google_work_chart = [{
    x: work_keywords,
    y: get_y_chart(google_work_reqs, work_keywords),
    type: 'bar',
    width: 0.4,
    marker: {
        color: ['#958090', '#83A2BE', '#7DAEA9', '#B4BF86', '#CBB079', '#B77A76', '#707070', '#AAAAAA', '#F18E33', '#178600', '#438EFF']
    }
}];
Plotly.newPlot(google_work, google_work_chart, work_layout);

facebook_work = document.getElementById('facebook_work');
var facebook_work_chart = [{
    x: work_keywords,
    y: get_y_chart(facebook_work_reqs, work_keywords),
    type: 'bar',
    width: 0.4,
    marker: {
        color: ['#958090', '#83A2BE', '#7DAEA9', '#B4BF86', '#CBB079', '#B77A76', '#707070', '#AAAAAA', '#F18E33', '#178600', '#438EFF']
    }
}];
Plotly.newPlot(facebook_work, facebook_work_chart, work_layout);

var prog_layout = {
    xaxis: {
        title: 'Work Experience',
        type: 'category',
        tickangle: -20
    },
    font: {
        size: 18,
    },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)'
};

all_prog = document.getElementById('all_prog');
var all_prog_chart = [{
    x: prog_keywords,
    y: get_y_chart(all_prog_reqs, prog_keywords),
    type: 'bar',
    width: 0.4,
    marker: {
        color: ['#958090', '#B07219', '#3572A5', '#83A2BE', '#375EAB', '#4F5D95', '#494D5C', '#701516', '#FFAC45', '#F18E33', '#178600', '#438EFF']
    }
}];
Plotly.newPlot(all_prog, all_prog_chart, prog_layout);

apple_prog = document.getElementById('apple_prog');
var apple_prog_chart = [{
    x: prog_keywords,
    y: get_y_chart(apple_prog_reqs, prog_keywords),
    type: 'bar',
    width: 0.4,
    marker: {
        color: ['#958090', '#B07219', '#3572A5', '#83A2BE', '#375EAB', '#4F5D95', '#494D5C', '#701516', '#FFAC45', '#F18E33', '#178600', '#438EFF']
    }
}];
Plotly.newPlot(apple_prog, apple_prog_chart, prog_layout);

google_prog = document.getElementById('google_prog');
var google_prog_chart = [{
    x: prog_keywords,
    y: get_y_chart(google_prog_reqs, prog_keywords),
    type: 'bar',
    width: 0.4,
    marker: {
        color: ['#958090', '#B07219', '#3572A5', '#83A2BE', '#375EAB', '#4F5D95', '#494D5C', '#701516', '#FFAC45', '#F18E33', '#178600', '#438EFF']
    }
}];
Plotly.newPlot(google_prog, google_prog_chart, prog_layout);

facebook_prog = document.getElementById('facebook_prog');
var facebook_prog_chart = [{
    x: prog_keywords,
    y: get_y_chart(facebook_prog_reqs, prog_keywords),
    type: 'bar',
    width: 0.4,
    marker: {
        color: ['#958090', '#B07219', '#3572A5', '#83A2BE', '#375EAB', '#4F5D95', '#494D5C', '#701516', '#FFAC45', '#F18E33', '#178600', '#438EFF']
    }
}];
Plotly.newPlot(facebook_prog, facebook_prog_chart, prog_layout);