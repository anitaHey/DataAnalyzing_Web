var apple_data = getCsv("../data/csv/apple_coordinate.csv");
var google_data = getCsv("../data/csv/google_coordinate.csv");
var facebook_data = getCsv("../data/csv/facebook_coordinate.csv");
var apple_coordinary = getCoordinary(apple_data);
var google_coordinary = getCoordinary(google_data);
var facebook_coordinary = getCoordinary(facebook_data);

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
    console.log(company_data);
    return company_data
}

function getCoordinary(df){ 
  console.log(df[0]);
    var coordinary = [];
    for(var data in df){
       coordinary.push({
          name: df[data]['City'],
          lat: df[data]['latitude'],
          lon: df[data]['longitude'],
          number: df[data]['Number_of_jobs']
       })
    }
  console.log(coordinary);
  return coordinary;
}



Highcharts.mapChart('google_map', {
    title: {
        text: 'Jobs of Google'
    },

    mapNavigation: {
        enabled: true
    },

    tooltip: {
        headerFormat: '',
        pointFormat: '<b>{point.name}</b><br>Lat: {point.lat}, Lon: {point.lon}<br>Number: {point.number}'
    },

    series: [{
        mapData: Highcharts.maps['custom/world'],
        name: 'Basemap',
        borderColor: '#A0A0A0',
        nullColor: 'rgba(200, 200, 200, 0.3)',
        showInLegend: false
    }, {
        name: 'Separators',
        type: 'mapline',
        nullColor: '#707070',
        showInLegend: false,
        enableMouseTracking: false
    }, {
        // Specify points using lat/lon
        type: 'mappoint',
        name: 'Cities',
        color: Highcharts.getOptions().colors[4],
        data: google_coordinary
    }]
});

Highcharts.mapChart('apple_map', {
    title: {
        text: 'Jobs of Apple'
    },

    mapNavigation: {
        enabled: true
    },

    tooltip: {
        headerFormat: '',
        pointFormat: '<b>{point.name}</b><br>Lat: {point.lat}, Lon: {point.lon}<br>Number: {point.number}'
    },

    series: [{
        mapData: Highcharts.maps['custom/world'],
        name: 'Basemap',
        borderColor: '#A0A0A0',
        nullColor: 'rgba(200, 200, 200, 0.3)',
        showInLegend: false
    }, {
        name: 'Separators',
        type: 'mapline',
        nullColor: '#707070',
        showInLegend: false,
        enableMouseTracking: false
    }, {
        // Specify points using lat/lon
        type: 'mappoint',
        name: 'Cities',
        color: Highcharts.getOptions().colors[8],
        data: apple_coordinary
    }]
});

Highcharts.mapChart('facebook_map', {
    title: {
        text: 'Jobs of Facebook'
    },

    mapNavigation: {
        enabled: true
    },

    tooltip: {
        headerFormat: '',
        pointFormat: '<b>{point.name}</b><br>Lat: {point.lat}, Lon: {point.lon}<br>Number: {point.number}'
    },

    series: [{
        mapData: Highcharts.maps['custom/world'],
        name: 'Basemap',
        borderColor: '#A0A0A0',
        nullColor: 'rgba(200, 200, 200, 0.3)',
        showInLegend: false
    }, {
        name: 'Separators',
        type: 'mapline',
        nullColor: '#707070',
        showInLegend: false,
        enableMouseTracking: false
    }, {
        // Specify points using lat/lon
        type: 'mappoint',
        name: 'Cities',
        color: Highcharts.getOptions().colors[7],
        data: facebook_coordinary
    }]
});

