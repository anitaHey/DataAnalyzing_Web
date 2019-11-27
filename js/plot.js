//var data = Papa.parse("apple_job.csv_new.csv");
var apple_data = getCsv("../data/csv/apple_jobs.csv_new.csv");
var google_data = getCsv("../data/csv/google_jobs.csv_new.csv");
var facebook_data = getCsv("../data/csv/facebook_jobs.csv_new.csv");
var keywords = ['PhD', 'Master', 'MBA', 'BA', 'BS', 'Bachelor','None'];

var apple_min_degree_reqs = count_keywords_freq(apple_data, 'min_degree_req', keywords);
var apple_pref_degree_reqs = count_keywords_freq(apple_data, 'pref_degree_req', keywords);
var google_min_degree_reqs = count_keywords_freq(google_data, 'min_degree_req', keywords);
var google_pref_degree_reqs = count_keywords_freq(google_data, 'pref_degree_req', keywords);
var facebook_min_degree_reqs = count_keywords_freq(facebook_data, 'min_degree_req', keywords);
var facebook_pref_degree_reqs = count_keywords_freq(facebook_data, 'pref_degree_req', keywords);

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
    console.log("success");
    return company_data
}

function count_keywords_freq(df,col_name,keywords){  
    var freq = {};
    for(var index in keywords){
        freq[keywords[index]] = 0;
    }
    for(var data in df){
        freq[df[data][col_name]]++;
    }
    console.log(freq['BS']);
    return freq
}

function get_y_chart(df,keywords,degree){
    var y_chart = new Array();
    for(keyword in keywords){
        y_chart.push(df[keywords[keyword]]);
    }
    return y_chart;
}


apple_degree = document.getElementById('apple_degree');
var apple_chart = [
  {
    x: keywords,
    y: get_y_chart(apple_min_degree_reqs,keywords),
    type: 'bar',
    width: 0.5
  }
];
Plotly.newPlot(apple_degree, apple_chart);

google_degree = document.getElementById('google_degree');
var google_chart = [
  {
    x: keywords,
    y: get_y_chart(google_min_degree_reqs,keywords),
    type: 'bar',
    width: 0.5
  }
];
Plotly.newPlot(google_degree, google_chart);

facebook_degree = document.getElementById('facebook_degree');
var facebook_chart = [
  {
    x: keywords,
    y: get_y_chart(facebook_min_degree_reqs,keywords),
    type: 'bar',
    width: 0.5
  }
];
Plotly.newPlot(facebook_degree, facebook_chart);


