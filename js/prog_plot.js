var apple_data = getCsv("../data/csv/apple_jobs.csv_new.csv");
var google_data = getCsv("../data/csv/google_jobs.csv_new.csv");
var facebook_data = getCsv("../data/csv/facebook_jobs.csv_new.csv");
var keywords = ['Python','JavaScript','SQL','C++','Go','C#','Java','Objective C','PHP','Ruby','Swift','Kotlin'];

var apple_min_prog_reqs = count_keywords_freq(apple_data, 'min_langs_req', keywords);
var apple_pref_prog_reqs = count_keywords_freq(apple_data, 'pref_langs_req', keywords);
var google_min_prog_reqs = count_keywords_freq(google_data, 'min_langs_req', keywords);
var google_pref_prog_reqs = count_keywords_freq(google_data, 'pref_langs_req', keywords);
var facebook_min_prog_reqs = count_keywords_freq(facebook_data, 'min_langs_req', keywords);
var facebook_pref_prog_reqs = count_keywords_freq(facebook_data, 'pref_langs_req', keywords);

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
        strs = df[data][col_name].split(',');
        for(var str in strs){
          freq[strs[str]]++;
        }
    }
    return freq;
}

function get_y_chart(df,keywords,prog){
    var y_chart = new Array();
    for(keyword in keywords){
        y_chart.push(df[keywords[keyword]]);
    }
    return y_chart;
}

$("#option-two").click(function(){
    Plotly.newPlot(apple_prog, apple_pre_chart, pre_layout);
    Plotly.newPlot(google_prog, google_pre_chart, pre_layout);
    Plotly.newPlot(facebook_prog, facebook_pre_chart, pre_layout);
})
$("#option-one").click(function(){
    Plotly.newPlot(apple_prog, apple_min_chart, min_layout);
    Plotly.newPlot(google_prog, google_min_chart, min_layout);
    Plotly.newPlot(facebook_prog, facebook_min_chart, min_layout);
})

var min_layout = {
  title: 'Minimum Work Experience',
  xaxis: {
    title: 'Programming Language',
    type: 'category',
    tickangle: -40
  },
};
var pre_layout = {
  title: 'Preference Work Experience',
  xaxis: {
    title: 'Programming Language',
    type: 'category',
    tickangle: -40
  },
};


apple_prog = document.getElementById('apple_prog');
var apple_min_chart = [
  {
    x: keywords,
    y: get_y_chart(apple_min_prog_reqs,keywords),
    type: 'bar',
    width: 0.4
  }
];
var apple_pre_chart = [
  {
    x: keywords,
    y: get_y_chart(apple_pref_prog_reqs,keywords),
    type: 'bar',
    width: 0.4
  }
];
Plotly.newPlot(apple_prog, apple_min_chart, min_layout);

google_prog = document.getElementById('google_prog');
var google_min_chart = [
  {
    x: keywords,
    y: get_y_chart(google_min_prog_reqs,keywords),
    type: 'bar',
    width: 0.4
  }
];
var google_pre_chart = [
  {
    x: keywords,
    y: get_y_chart(google_pref_prog_reqs,keywords),
    type: 'bar',
    width: 0.4
  }
];
Plotly.newPlot(google_prog, google_min_chart,min_layout);

facebook_prog = document.getElementById('facebook_prog');
var facebook_min_chart = [
  {
    x: keywords,
    y: get_y_chart(facebook_min_prog_reqs,keywords),
    type: 'bar',
    width: 0.4
  }
];
var facebook_pre_chart = [
  {
    x: keywords,
    y: get_y_chart(facebook_pref_prog_reqs,keywords),
    type: 'bar',
    width: 0.4
  }
];
Plotly.newPlot(facebook_prog, facebook_min_chart,min_layout);


