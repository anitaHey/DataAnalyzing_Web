var apple_data = getCsv("../data/csv/apple_jobs.csv_new.csv");
var google_data = getCsv("../data/csv/google_jobs.csv_new.csv");
var facebook_data = getCsv("../data/csv/facebook_jobs.csv_new.csv");
var keywords = ['0','1','2','3','4','5','6','7','8','9','10+'];

var apple_min_work_reqs = count_keywords_freq(apple_data, 'min_work_exp_req', keywords);
var apple_pref_work_reqs = count_keywords_freq(apple_data, 'pref_work_exp_req', keywords);
var google_min_work_reqs = count_keywords_freq(google_data, 'min_work_exp_req', keywords);
var google_pref_work_reqs = count_keywords_freq(google_data, 'pref_work_exp_req', keywords);
var facebook_min_work_reqs = count_keywords_freq(facebook_data, 'min_work_exp_req', keywords);
var facebook_pref_work_reqs = count_keywords_freq(facebook_data, 'pref_work_exp_req', keywords);

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
        if(parseInt(df[data][col_name])<10){
            freq[df[data][col_name]]++;
        }else{
            freq['10+']++;
        }
    }
    return freq
}

function get_y_chart(df,keywords){
    var y_chart = new Array();
    for(keyword in keywords){
        y_chart.push(df[keywords[keyword]]);
    }
    console.log(keywords);
    console.log("STOP");
    console.log(y_chart);
    return y_chart;
}

$("#option-two").click(function(){
    Plotly.newPlot(apple_work, apple_pre_chart,pre_layout);
    Plotly.newPlot(google_work, google_pre_chart,pre_layout);
    Plotly.newPlot(facebook_work, facebook_pre_chart,pre_layout);
})
$("#option-one").click(function(){
    Plotly.newPlot(apple_work, apple_min_chart,min_layout);
    Plotly.newPlot(google_work, google_min_chart,min_layout);
    Plotly.newPlot(facebook_work, facebook_min_chart,min_layout);
})

console.log(get_y_chart(apple_min_work_reqs,keywords));
console.log(get_y_chart(apple_pref_work_reqs,keywords));

var min_layout = {
  title: 'Minimum Work Experience',
  xaxis: {
    title: 'Year',
    type: 'category',
    tickangle: -20
  },
};
var pre_layout = {
  title: 'Preference Work Experience',
  xaxis: {
    title: 'Year',
    type: 'category',
    tickangle: -20
  },
};

apple_work = document.getElementById('apple_work');
var apple_min_chart = [
  {
    x: keywords,
    y: get_y_chart(apple_min_work_reqs,keywords),
    type: 'bar',
    width: 0.4
  }
];
var apple_pre_chart = [
  {
    x: keywords,
    y: get_y_chart(apple_pref_work_reqs,keywords),
    type: 'bar',
    width: 0.4
  }
];
Plotly.newPlot(apple_work, apple_min_chart,min_layout);

google_work = document.getElementById('google_work');
var google_min_chart = [
  {
    x: keywords,
    y: get_y_chart(google_min_work_reqs,keywords),
    type: 'bar',
    width: 0.4
  }
];
var google_pre_chart = [
  {
    x: keywords,
    y: get_y_chart(google_pref_work_reqs,keywords),
    type: 'bar',
    width: 0.4
  }
];
Plotly.newPlot(google_work, google_min_chart,min_layout);

facebook_work = document.getElementById('facebook_work');
var facebook_min_chart = [
  {
    x: keywords,
    y: get_y_chart(facebook_min_work_reqs,keywords),
    type: 'bar',
    width: 0.4
  }
];
var facebook_pre_chart = [
  {
    x: keywords,
    y: get_y_chart(facebook_pref_work_reqs,keywords),
    type: 'bar',
    width: 0.4
  }
];
Plotly.newPlot(facebook_work, facebook_min_chart,min_layout);


