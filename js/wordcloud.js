var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum erat ac justo sollicitudin, quis lacinia ligula fringilla. Pellentesque hendrerit, nisi vitae posuere condimentum, lectus urna accumsan libero, rutrum commodo mi lacus pretium erat. Phasellus pretium ultrices mi sed semper. Praesent ut tristique magna. Donec nisl tellus, sagittis ut tempus sit amet, consectetur eget erat. Sed ornare gravida lacinia. Curabitur iaculis metus purus, eget pretium est laoreet ut. Quisque tristique augue ac eros malesuada, vitae facilisis mauris sollicitudin. Mauris ac molestie nulla, vitae facilisis quam. Curabitur placerat ornare sem, in mattis purus posuere eget. Praesent non condimentum odio. Nunc aliquet, odio nec auctor congue, sapien justo dictum massa, nec fermentum massa sapien non tellus. Praesent luctus eros et nunc pretium hendrerit. In consequat et eros nec interdum. Ut neque dui, maximus id elit ac, consequat pretium tellus. Nullam vel accumsan lorem.';
var lines = text.split(/[,\. ]+/g),
    data = Highcharts.reduce(lines, function (arr, word) {
        var obj = Highcharts.find(arr, function (obj) {
            return obj.name === word;
        });
        if (obj) {
            obj.weight += 1;
        } else {
            obj = {
                name: word,
                weight: 1
            };
            arr.push(obj);
        }
        return arr;
    }, []);
    

Highcharts.chart('google_min_key', {
    series: [{
        type: 'wordcloud',
        plotBackgroundColor:'null',
        plotBackgroundImage:'../data/facebook_icon.png',
        data: data,
        name: 'Occurrences'
    }],
    title: {
        text: 'Wordcloud of Minimum Keyword'
    }
});


var list =[['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12],['foo', 12], ['bar', 6],['foo', 12],['foo', 12],['foo', 12],['foo', 12]];
WordCloud(document.getElementById('apple_min_key'), { list: list ,shape: 'star'});