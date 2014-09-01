seajs.use(['$', 'jsuri', 'calendar', 'moment'], function ($, Uri, Calendar, moment) {
    $(document).ready(function () {

        var uri = new Uri(window.location.href), startYmd = uri.getQueryParamValue('startYmd'), endYmd = uri.getQueryParamValue('endYmd'), renderType = uri.getQueryParamValue('renderType');
        var today = moment().format();
        startYmd = startYmd ? startYmd : today, endYmd = endYmd ? endYmd : today;

        $("#startYmd").attr('value', startYmd);
        $("#endYmd").attr('value', endYmd);
        $("#" + (renderType ? renderType : 'sum')).attr('checked', true);

        var c1 = new Calendar({
            trigger: '#startYmd',
            startDay: 1,
            range: [openYmd, endYmd]
        });
        var c2 = new Calendar({
            trigger: '#endYmd',
            startDay: 1,
            range: [startYmd, today]
        });

        c1.on('selectDate', function (date) {
            c2.range([date, today]);
        });
        c2.on('selectDate', function (date) {
            c1.range([openYmd, date]);
        });

    });
});