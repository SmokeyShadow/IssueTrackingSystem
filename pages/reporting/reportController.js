(function () {
    'use strict';
    var app = angular.module('app');
    app.controller('reportController', reportController);

    reportController.$inject = ['$rootScope'];

    function reportController($rootScope, $http) {

        $rootScope.bodylayout = 'main_page_que';
        createGanttChart();

    }
    app.controller('dashboardCtrl', function ($scope, $window, myService) {
        var user = myService.get();
        $scope.name = user.user;
        if (user.role != 'admin') {
            $scope.adminAccess = 'hidden';
        }


    });
})();
function createGanttChart() {
    
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.rtl = true;
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.paddingRight = 30;
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";

    var colorSet = new am4core.ColorSet();
    colorSet.saturation = 0.4;

    chart.data = [{
        "category": "سیستم گرمایشی",
        "start": "2016-01-01",
        "end": "2016-01-14",
        "color": colorSet.getIndex(0).brighten(0),
        "task": " در حال بررسی توسط عطیه نوروززاده"
    }, {
        "category": "سیستم گرمایشی",
        "start": "2016-01-16",
        "end": "2016-01-27",
        "color": colorSet.getIndex(0).brighten(0.4),
        "task": " در حال بررسی توسط عطیه نوروززاده"
    }, {
        "category": "سیستم گرمایشی",
        "start": "2016-02-05",
        "end": "2016-04-18",
        "color": colorSet.getIndex(0).brighten(0.8),
        "task": " در حال انجام توسط عطیه نوروززاده"
    }, {
        "category": "سیستم سرمایشی",
        "start": "2016-01-08",
        "end": "2016-01-10",
        "color": colorSet.getIndex(2).brighten(0),
        "task": " در حال بررسی توسط عطیه نوروززاده"
    }, {
        "category": "سیستم سرمایشی",
        "start": "2016-01-12",
        "end": "2016-01-15",
        "color": colorSet.getIndex(2).brighten(0.4),
        "task": " در حال بررسی توسط عطیه نوروززاده"
    }, {
        "category": "سیستم سرمایشی",
        "start": "2016-01-16",
        "end": "2016-02-05",
        "color": colorSet.getIndex(2).brighten(0.8),
        "task": " در حال بررسی توسط عطیه نوروززاده"
    }, {
        "category": "سیستم سرمایشی",
        "start": "2016-02-10",
        "end": "2016-02-18",
        "color": colorSet.getIndex(2).brighten(1.2),
        "task": " در حال انجام توسط عطیه نوروززاده"
    }, {
        "category": "کلاس خالی",
        "start": "2016-01-02",
        "end": "2016-01-08",
        "color": colorSet.getIndex(4).brighten(0),
        "task": " در حال بررسی توسط عطیه نوروززاده"
    }, {
        "category": "کلاس خالی",
        "start": "2016-01-19",
        "end": "2016-03-01",
        "color": colorSet.getIndex(4).brighten(0.8),
        "task": " در حال بررسی توسط عطیه نوروززاده"
    }, {
        "category": "کلاس خالی",
        "start": "2016-03-12",
        "end": "2016-04-05",
        "color": colorSet.getIndex(4).brighten(1.2),
        "task": " در حال انجام توسط عطیه نوروززاده"
    },  {
        "category": "زمان بندی کلاس ها",
        "start": "2016-04-27",
        "end": "2016-05-15",
        "color": colorSet.getIndex(6).brighten(1.2),
        "task": " در حال انجام توسط عطیه نوروززاده"
    }, {
        "category": "ویدیو آموزشی",
        "start": "2016-01-19",
        "end": "2016-03-01",
        "color": colorSet.getIndex(8).brighten(0.8),
        "task": " در حال بررسی توسط عطیه نوروززاده"
    }, {
        "category": "ویدیو آموزشی",
        "start": "2016-03-08",
        "end": "2016-03-30",
        "color": colorSet.getIndex(8).brighten(1.2),
        "task": "در حال انجام توسط عطیه نوروززاده"
    }];

    chart.dateFormatter.dateFormat = "yyyy-MM-dd";
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
   
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.inversed = false;
    categoryAxis.rtl = true;
    categoryAxis.parseDates = false;

    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.baseInterval = { count: 1, timeUnit: "day" };
    dateAxis.renderer.tooltipLocation = 0;

    var series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.columns.template.width = am4core.percent(80);
    series1.columns.template.tooltipText = "{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]";

    series1.dataFields.openDateX = "start";
    series1.dataFields.dateX = "end";
    series1.dataFields.categoryY = "category";
    series1.columns.template.propertyFields.fill = "color"; // get color from data
    series1.columns.template.propertyFields.stroke = "color";
    series1.columns.template.strokeOpacity = 1;

    chart.scrollbarX = new am4core.Scrollbar();
}
function getOptions(sel) {
    var opts = [], opt;
    for (var i = 0, len = sel.options.length; i < len; i++) {
        opt = sel.options[i];
        if (opt.selected) {
            opts.push(opt.value);
        }
    }
    return opts;
}
function isFilteredCell(opts, filtercell, trs) {
    console.log(opts);
    for (var j = 0; j < opts.length; j++) {

        var cellVal1 = trs.cells[filtercell];
        if (cellVal1.innerText.trim() == opts[j].trim())
            return true;
    }
    return false;
}
//filter by all
function filterByAll(id1, id2, id3, filtercell1, filtercell2, filtercell3) {

    var sel1 = document.getElementById(id1);
    var sel2 = document.getElementById(id2);
    var sel3 = document.getElementById(id3);
    var opts1 = getOptions(sel1);
    var opts2 = getOptions(sel2);
    var opts3 = getOptions(sel3);

    var table = document.getElementById('statusTable');
    var equal1 = equal2 = equal3 = false;
    if (opts1.length == 0 && opts2.length == 0 && opts3.length == 0) {
        for (var i = 0; i < table.rows.length; i++) {
            var trs = table.getElementsByTagName("tr")[i].style.display = "none";
        }
    }
    for (var i = 0; i < table.rows.length; i++) {
        var trs = table.getElementsByTagName("tr")[i];
        equal1 = isFilteredCell(opts1, filtercell1, trs);
        equal2 = isFilteredCell(opts2, filtercell2, trs);
        equal3 = isFilteredCell(opts3, filtercell3, trs);

        if (equal1 && equal2 && equal3) {
            trs.style.display = "table-row";
        }
        else {
            trs.style.display = "none";
        }
    }
}

//filter just by one 
function filterByOne(id, filteredcell) {
    var sel = document.getElementById(id);
    var opts = getOptions(sel);
    var table = document.getElementById('statusTable');
    var equal = false;
    if (opts.length == 0) {
        for (var i = 0; i < table.rows.length; i++) {
            var trs = table.getElementsByTagName("tr")[i].style.display = "none";
        }
    }
    for (var i = 0; i < table.rows.length; i++) {

        var trs = table.getElementsByTagName("tr")[i];
        equal = isFilteredCell(opts, filteredcell, trs);
        if (!equal) {
            trs.style.display = "none";
        }
        else {
            trs.style.display = "table-row";
        }
    }
}

