function loadChart() {
    Morris.Line({
        element: 'audit-area-chart',
        data: [ //Layout is year-mo, div: # of audits
            { period: '2016-02', 21: 20, 22: 10, 23: 3, 24: 5, 31: 15, 32: 6, 33: 9, 34: 18 }, 
            { period: '2016-03', 21: 12, 22: 19, 23: 8, 24: 9, 31: 25, 32: 28, 33: 16, 34: 15 }, 
            { period: '2016-04', 21: 12, 22: 11, 23: 6, 24: 9, 31: 15, 32: 14, 33: 23, 34: 14 }, 
            { period: '2016-05', 21: 17, 22: 16, 23: 23, 24: 20, 31: 12, 32: 12, 33: 21, 34: 20 }, 
            { period: '2016-06', 21: 11, 22: 16, 23: 23, 24: 20, 31: 10, 32: 1, 33: 9, 34: 7 }, 
            { period: '2016-07', 21: 7, 22: 15, 23: 13, 24: 9, 31: 5, 32: 8, 33: 16, 34: 25 }, 
            { period: '2016-08', 21: 11, 22: 16, 23: 23, 24: 20, 31: 12, 32: 12, 33: 21, 34: 20 }, 
            { period: '2016-09', 21: 11, 22: 16, 23: 23, 24: 20, 31: 10, 32: 1, 33: 9, 34: 7 }, 
            { period: '2016-10', 21: 21, 22: 16, 23: 12, 24: 9, 31: 8, 32: 15, 33: 6, 34: 2 }, 
            { period: '2016-11', 21: 17, 22: 8, 23: 5, 24: 20, 31: 29, 32: 15, 33: 12, 34: 26 }, 
            { period: '2016-12', 21: 21, 22: 16, 23: 12, 24: 9, 31: 8, 32: 15, 33: 6, 34: 2 }, 
            { period: '2017-01', 21: 17, 22: 11, 23: 23, 24: 20, 31: 12, 32: 10, 33: 20, 34: 21 }
        ],
        xkey: 'period',
        ykeys: ['21', '22', '23', '24', '31', '32', '33', '34'],
        labels: ['Upper Midwest', 'Lakeshore', 'Heartland', 'Buckeye', 'Colony', 'Midatlantic', 'Florida', 'Eastern Shore'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true,
        ymax: 30,
        ymin: 0,
        yLabelFormat: function(y){return y != Math.round(y)?'':y;}
    });
};