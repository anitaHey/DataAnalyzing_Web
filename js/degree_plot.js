var apple_data = getCsv("data/csv/apple_jobs.csv_new.csv");
var google_data = getCsv("data/csv/google_jobs.csv_new.csv");
var facebook_data = getCsv("data/csv/facebook_jobs.csv_new.csv");
var keywords = ['PhD', 'Master', 'MBA', 'BA', 'BS', 'Bachelor', 'None'];

var apple_degree_reqs = count_keywords_freq(apple_data, ['min_degree_req', 'pref_degree_req'], keywords);
var google_degree_reqs = count_keywords_freq(google_data, ['min_degree_req', 'pref_degree_req'], keywords);
var facebook_degree_reqs = count_keywords_freq(facebook_data, ['min_degree_req', 'pref_degree_req'], keywords);
var all_degree_reqs = count_all();

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

function count_keywords_freq(df, col_name, keywords) {
    var freq = {};
    for (var index in keywords) {
        freq[keywords[index]] = 0;
    }
    for (var num in col_name) {
        for (var data in df) {
            freq[df[data][col_name[num]]]++;
        }
    }
    return freq
}

function count_all() {
    var freq = {};
    for (var index in keywords) {
        freq[keywords[index]] = apple_degree_reqs[keywords[index]] + google_degree_reqs[keywords[index]] + facebook_degree_reqs[keywords[index]];
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

var layout = {
    xaxis: {
        title: 'Degree',
        type: 'category',
        tickangle: -20
    },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)'
};

all_degree = document.getElementById('all_degree');
var all_chart = [{
    x: keywords,
    y: get_y_chart(all_degree_reqs, keywords),
    type: 'bar',
    width: 0.4
}];
Plotly.newPlot(all_degree, all_chart, layout);

apple_degree = document.getElementById('apple_degree');
var apple_chart = [{
    x: keywords,
    y: get_y_chart(apple_degree_reqs, keywords),
    type: 'bar',
    width: 0.4
}];
Plotly.newPlot(apple_degree, apple_chart, layout);

google_degree = document.getElementById('google_degree');
var google_chart = [{
    x: keywords,
    y: get_y_chart(google_degree_reqs, keywords),
    type: 'bar',
    width: 0.4
}];
Plotly.newPlot(google_degree, google_chart, layout);

facebook_degree = document.getElementById('facebook_degree');
var facebook_chart = [{
    x: keywords,
    y: get_y_chart(facebook_degree_reqs, keywords),
    type: 'bar',
    width: 0.4
}];
Plotly.newPlot(facebook_degree, facebook_chart, layout);