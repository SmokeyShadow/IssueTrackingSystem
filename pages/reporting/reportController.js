(function () {
    'use strict';
    var app = angular.module('app');
    app.controller('reportController', reportController);

    reportController.$inject = ['$rootScope'];

    function reportController($rootScope, $http) {

        $rootScope.bodylayout = 'main_page_que';
        createGanttChart();
        createClock();
        createTopUsers();
        createPieChart();
        createStartEndChart();
        mostRepeatedWords();
    }
    app.controller('reportCtrl', function ($scope, $window, myService) {
        var user = myService.get();
        $scope.name = user.user;
        if (user.role != 'admin') {
            $scope.adminAccess = 'hidden';
        }


    });
})();
function mostRepeatedWords() {

    am4core.useTheme(am4themes_frozen);
    var chart = am4core.create("worddiv", am4plugins_wordCloud.WordCloud);
    chart.rtl = true;
    var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

    series.accuracy = 4;
    series.step = 25;
    series.rotationThreshold = 0.7;
    series.maxCount = 30;
    series.minWordLength = 2;
    series.maxFontSize = am4core.percent(20);

    series.text = "با سلام و احترام خدمت شما، در پاسخی که فرمودید به یکی از دوستانمان در مورد کارتی شدن آسانسور برای استفاده اساتید و محدودیت استفاده برای دانشجویان با توجه به فرمایش شما در استفاده غیر مجاز و خرابی مکرر آن،متوجه منظور شما نشده ایم؟ استفاده غیر مجاز یعنی چه؟ یعنی دانشجویان استفاده غیر مجاز کرده اند؟؟ بهتر نبود راه حل منطقی بکار برده میشد و آسانسور سرویس و تعمیر و یا تجهیز کامل میشد تا همه بتوانند استفاده کنند؟ آیا این واقعا یک بی احترامی به دانشجویان نیست؟ قبل از سقوط آسانسور دانشگاه شریف، نیز کلا آسانسور دانشکده مشکل داشت و برای استفاده دانشجویان توقف در طبقات اول را از کار انداخته بودند . و اینکه دانشجویان هم با طبقات دوم و سوم که اساتید هستند مرتب رفت و آمد دارند و این فرمایش شما منطقی نیست. خواهشا رسیدگی فرمایید";
    series.colors = new am4core.ColorSet();
    series.colors.passOptions = {};
    series.angles = [0,-90];
    series.fontWeight = "700"
    
    setInterval(function () {
      series.dataItems.getIndex(Math.round(Math.random() * (series.dataItems.length - 1))).setValue("value", Math.round(Math.random() * 10));
     }, 10000)
    

}
function createStartEndChart() {
    am4core.useTheme(am4themes_animated);

    var chart = am4core.create("timechart", am4charts.XYChart);

    var data = [];
    var open = 100;
    var close = 120;

    var names = ["کاربر ها",
        "مورد ها",
        "مورد های بسته شده",
        "رضایت ها ",
        "نارضایتی",
    ];

    for (var i = 0; i < names.length; i++) {
        open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
        close = open + Math.round(Math.random() * 10) + 3;
        if (i == 4) {
            data.push({ category: names[i], open: close, close: open });
        }
        else
            data.push({ category: names[i], open: open, close: close });
    }

    chart.data = data;
    chart.rtl = true;
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 15;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.inside = true;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
    categoryAxis.rtl = true;
    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;

    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryY = "category";
    series.dataFields.openValueX = "open";
    series.dataFields.valueX = "close";
    series.tooltipText = "open: {openValueX.value} close: {valueX.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 0;
    series.strokeOpacity = 1;
    series.columns.template.height = 0.01;
    series.tooltip.pointerOrientation = "vertical";

    var openBullet = series.bullets.create(am4charts.CircleBullet);
    openBullet.locationX = 1;

    var closeBullet = series.bullets.create(am4charts.CircleBullet);

    closeBullet.fill = chart.colors.getIndex(4);
    closeBullet.stroke = closeBullet.fill;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomY";

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarY = new am4core.Scrollbar();
}
function createPieChart() {

    // Set theme
    am4core.useTheme(am4themes_animated);

    // Create chart
    var chart = am4core.createFromConfig({
        "rtl": true,
        // Set data
        data: [{
            "country": "بسته",
            "litres": 501.9
        }, {
            "country": "باز",
            "litres": 301.9
        }, {
            "country": "در حال بررسی",
            "litres": 201.1
        }, {
            "country": "تعویق",
            "litres": 165.8
        }],

        // Create series
        "series": [{
            "type": "PieSeries",
            "dataFields": {
                "value": "litres",
                "category": "country",

            },
            "hiddenState": {
                "properties": {
                    // this creates initial animation
                    "opacity": 1,
                    "endAngle": -90,
                    "startAngle": -90

                }
            }
        }],

        // Add legend
        "legend": { "reverseOrder": true }
    }, "piediv", "PieChart");
}
function createClock() {
    const secondHand = document.querySelector('.second-hand');
    const minsHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    
    function setDate() {
      const now = new Date();
    
      const seconds = now.getSeconds();
      const secondsDegrees = ((seconds / 60) * 360) + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
      const mins = now.getMinutes();
      const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
      minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    
      const hour = now.getHours();
      const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }
    
    setInterval(setDate, 1000);
    
    setDate();

}



function createTopUsers() {
    am4core.useTheme(am4themes_animated);

    var chart = am4core.create("userdiv", am4charts.XYChart);


    chart.paddingBottom = 30;
    chart.rtl = true;

    chart.data = [{
        "name": "علی علوی",
        "steps": 45688
    }, {
        "name": "تقی تقوی",
        "steps": 35781
    }, {
        "name": "نقی نقوی",
        "steps": 25464
    }, {
        "name": "علی اسدی",
        "steps": 18788
    }, {
        "name": "حانیه ایزدی",
        "steps": 11561
    }];
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "name";
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.labels.template.dy = 35;
    categoryAxis.renderer.tooltip.dy = 35;
    categoryAxis.rtl = true;
    categoryAxis.parseDates = false;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inside = true;
    valueAxis.renderer.labels.template.fillOpacity = 0.3;
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.min = 0;
    valueAxis.cursorTooltipEnabled = false;
    valueAxis.renderer.baseGrid.strokeOpacity = 0;
    valueAxis.rtl = true;

    var series = chart.series.push(new am4charts.ColumnSeries);
    series.dataFields.valueY = "steps";
    series.dataFields.categoryX = "name";
    series.tooltipText = "{valueY.value}";
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.dy = - 6;
    series.columnsContainer.zIndex = 100;

    var columnTemplate = series.columns.template;
    columnTemplate.width = am4core.percent(50);
    columnTemplate.maxWidth = 50;
    columnTemplate.column.cornerRadius(60, 60, 10, 10);
    columnTemplate.strokeOpacity = 0;

    series.heatRules.push({ target: columnTemplate, property: "fill", dataField: "valueY", min: am4core.color("rgb(69, 187, 173)"), max: am4core.color("rgb(124, 175, 199)") });
    series.mainContainer.mask = undefined;

    var cursor = new am4charts.XYCursor();
    chart.cursor = cursor;
    cursor.lineX.disabled = true;
    cursor.lineY.disabled = true;
    cursor.behavior = "none";

    var bullet = columnTemplate.createChild(am4charts.CircleBullet);
    bullet.circle.radius = 30;
    bullet.valign = "bottom";
    bullet.align = "center";
    bullet.isMeasured = true;
    bullet.interactionsEnabled = false;
    bullet.verticalCenter = "bottom";

    var hoverState = bullet.states.create("hover");

    var outlineCircle = bullet.createChild(am4core.Circle);
    outlineCircle.adapter.add("radius", function (radius, target) {
        var circleBullet = target.parent;
        return circleBullet.circle.pixelRadius + 10;
    })

    var image = bullet.createChild(am4core.Image);
    image.width = 60;
    image.height = 60;
    image.horizontalCenter = "middle";
    image.verticalCenter = "middle";

    image.adapter.add("href", function (href, target) {
        var dataItem = target.dataItem;
        if (dataItem) {
            return "../Assets/images/users/" + dataItem.categoryX + ".jpg";
        }
    })


    image.adapter.add("mask", function (mask, target) {
        var circleBullet = target.parent;
        return circleBullet.circle;
    })

    var previousBullet;
    chart.cursor.events.on("cursorpositionchanged", function (event) {
        var dataItem = series.tooltipDataItem;

        if (dataItem.column) {
            var bullet = dataItem.column.children.getIndex(1);

            if (previousBullet && previousBullet != bullet) {
                previousBullet.isHover = false;
            }

            if (previousBullet != bullet) {

                var hs = bullet.states.getKey("hover");
                hs.properties.dy = -bullet.parent.pixelHeight + 30;
                bullet.isHover = true;

                previousBullet = bullet;
            }
        }
    })
}
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
    }, {
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
  
    for (var j = 0; j < opts.length; j++) {

        var cellVal1 = trs.cells[filtercell];
        if (cellVal1.innerText.trim() == opts[j].trim())
            return true;
    }
    return false;
}
//filter by all
function reportfilterByAll(id1, id2, id3, filtercell1, filtercell2, filtercell3) {

    var sel1 = document.getElementById(id1);
    var sel2 = document.getElementById(id2);
    var sel3 = document.getElementById(id3);
    var opts1 = getOptions(sel1);
    var opts2 = getOptions(sel2);
    var opts3 = getOptions(sel3);

    var table = document.getElementById('statusTable');
    var equal1 = equal2 = equal3 = false;
    if (opts1.length == 0 && opts2.length == 0 && opts3.length == 0) {
        for (var i = 1; i < table.rows.length; i++) {
            var trs = table.getElementsByTagName("tr")[i].style.display = "none";
        }
    }
    for (var i = 1; i < table.rows.length; i++) {
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



