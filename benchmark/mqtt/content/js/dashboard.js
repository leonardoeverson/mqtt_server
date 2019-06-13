/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 6;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 98.9, "KoPercent": 1.1};
    var dataset = [
        {
            "label" : "KO",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "OK",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.668, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.9865, 500, 1500, "MQTT Connect"], "isController": false}, {"data": [0.3495, 500, 1500, "MQTT DisConnect"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 2000, 22, 1.1, 860.3775000000002, 0, 10368, 2825.7000000000003, 3259.749999999999, 3986.99, 16.03322083356715, 0.1715429369653923, 0.0], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["MQTT Connect", 1000, 11, 1.1, 140.02, 11, 10368, 45.89999999999998, 52.0, 10001.0, 16.763616247296866, 0.17935759727088327, 0.0], "isController": false}, {"data": ["MQTT DisConnect", 1000, 11, 1.1, 1580.7350000000001, 0, 4009, 3218.2, 3564.95, 3985.99, 198.37333862328904, 2.122439744098393, 0.0], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Percentile 1
            case 8:
            // Percentile 2
            case 9:
            // Percentile 3
            case 10:
            // Throughput
            case 11:
            // Kbytes/s
            case 12:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["501\/Failed to establish Connection org.fusesource.mqtt.client.CallbackConnection@1e07fbe.", 1, 4.545454545454546, 0.05], "isController": false}, {"data": ["501\/Failed to establish Connection org.fusesource.mqtt.client.CallbackConnection@66eb1c.", 1, 4.545454545454546, 0.05], "isController": false}, {"data": ["501\/Failed to establish Connection org.fusesource.mqtt.client.CallbackConnection@1b506cf.", 1, 4.545454545454546, 0.05], "isController": false}, {"data": ["501\/Failed to establish Connection org.fusesource.mqtt.client.CallbackConnection@11d8ff3.", 1, 4.545454545454546, 0.05], "isController": false}, {"data": ["501\/Failed to establish Connection org.fusesource.mqtt.client.CallbackConnection@ec2b12.", 1, 4.545454545454546, 0.05], "isController": false}, {"data": ["501\/Failed to establish Connection org.fusesource.mqtt.client.CallbackConnection@962c79.", 1, 4.545454545454546, 0.05], "isController": false}, {"data": ["501\/Failed to establish Connection org.fusesource.mqtt.client.CallbackConnection@1d3892b.", 1, 4.545454545454546, 0.05], "isController": false}, {"data": ["501\/Failed to establish Connection org.fusesource.mqtt.client.CallbackConnection@1a3d888.", 1, 4.545454545454546, 0.05], "isController": false}, {"data": ["500\/Connection not found.", 11, 50.0, 0.55], "isController": false}, {"data": ["501\/Failed to establish Connection org.fusesource.mqtt.client.CallbackConnection@1f7c703.", 1, 4.545454545454546, 0.05], "isController": false}, {"data": ["501\/Failed to establish Connection org.fusesource.mqtt.client.CallbackConnection@1b362a4.", 1, 4.545454545454546, 0.05], "isController": false}, {"data": ["501\/Failed to establish Connection org.fusesource.mqtt.client.CallbackConnection@881278.", 1, 4.545454545454546, 0.05], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 2000, 22, "500\/Connection not found.", 11, "501\/Failed to establish Connection org.fusesource.mqtt.client.CallbackConnection@1e07fbe.", 1, "501\/Failed to establish Connection org.fusesource.mqtt.client.CallbackConnection@66eb1c.", 1, "501\/Failed to establish Connection org.fusesource.mqtt.client.CallbackConnection@1d3892b.", 1, "501\/Failed to establish Connection org.fusesource.mqtt.client.CallbackConnection@1b506cf.", 1], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["MQTT Connect", 1000, 11, "501\/Failed to establish Connection org.fusesource.mqtt.client.CallbackConnection@1e07fbe.", 1, "501\/Failed to establish Connection org.fusesource.mqtt.client.CallbackConnection@66eb1c.", 1, "501\/Failed to establish Connection org.fusesource.mqtt.client.CallbackConnection@1d3892b.", 1, "501\/Failed to establish Connection org.fusesource.mqtt.client.CallbackConnection@1b506cf.", 1, "501\/Failed to establish Connection org.fusesource.mqtt.client.CallbackConnection@1a3d888.", 1], "isController": false}, {"data": ["MQTT DisConnect", 1000, 11, "500\/Connection not found.", 11, null, null, null, null, null, null, null, null], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
