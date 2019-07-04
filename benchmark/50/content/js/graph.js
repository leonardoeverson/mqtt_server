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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 152.0, "series": [{"data": [[0.0, 3.0], [0.1, 9.0], [0.2, 13.0], [0.3, 16.0], [0.4, 19.0], [0.5, 21.0], [0.6, 23.0], [0.7, 25.0], [0.8, 27.0], [0.9, 28.0], [1.0, 30.0], [1.1, 32.0], [1.2, 33.0], [1.3, 34.0], [1.4, 36.0], [1.5, 37.0], [1.6, 39.0], [1.7, 41.0], [1.8, 44.0], [1.9, 45.0], [2.0, 47.0], [2.1, 49.0], [2.2, 53.0], [2.3, 55.0], [2.4, 57.0], [2.5, 58.0], [2.6, 60.0], [2.7, 61.0], [2.8, 62.0], [2.9, 63.0], [3.0, 63.0], [3.1, 63.0], [3.2, 63.0], [3.3, 63.0], [3.4, 63.0], [3.5, 63.0], [3.6, 63.0], [3.7, 64.0], [3.8, 64.0], [3.9, 64.0], [4.0, 64.0], [4.1, 64.0], [4.2, 64.0], [4.3, 64.0], [4.4, 64.0], [4.5, 64.0], [4.6, 64.0], [4.7, 64.0], [4.8, 64.0], [4.9, 64.0], [5.0, 64.0], [5.1, 64.0], [5.2, 64.0], [5.3, 64.0], [5.4, 64.0], [5.5, 64.0], [5.6, 64.0], [5.7, 64.0], [5.8, 64.0], [5.9, 64.0], [6.0, 64.0], [6.1, 64.0], [6.2, 64.0], [6.3, 64.0], [6.4, 64.0], [6.5, 64.0], [6.6, 64.0], [6.7, 64.0], [6.8, 64.0], [6.9, 64.0], [7.0, 64.0], [7.1, 64.0], [7.2, 64.0], [7.3, 64.0], [7.4, 64.0], [7.5, 64.0], [7.6, 64.0], [7.7, 64.0], [7.8, 65.0], [7.9, 65.0], [8.0, 65.0], [8.1, 65.0], [8.2, 65.0], [8.3, 65.0], [8.4, 65.0], [8.5, 65.0], [8.6, 65.0], [8.7, 65.0], [8.8, 65.0], [8.9, 65.0], [9.0, 65.0], [9.1, 65.0], [9.2, 65.0], [9.3, 65.0], [9.4, 65.0], [9.5, 65.0], [9.6, 65.0], [9.7, 65.0], [9.8, 65.0], [9.9, 65.0], [10.0, 65.0], [10.1, 65.0], [10.2, 65.0], [10.3, 65.0], [10.4, 65.0], [10.5, 65.0], [10.6, 65.0], [10.7, 65.0], [10.8, 65.0], [10.9, 65.0], [11.0, 65.0], [11.1, 65.0], [11.2, 65.0], [11.3, 65.0], [11.4, 65.0], [11.5, 65.0], [11.6, 65.0], [11.7, 65.0], [11.8, 65.0], [11.9, 65.0], [12.0, 65.0], [12.1, 65.0], [12.2, 65.0], [12.3, 65.0], [12.4, 65.0], [12.5, 65.0], [12.6, 65.0], [12.7, 65.0], [12.8, 65.0], [12.9, 65.0], [13.0, 65.0], [13.1, 65.0], [13.2, 65.0], [13.3, 65.0], [13.4, 65.0], [13.5, 65.0], [13.6, 65.0], [13.7, 65.0], [13.8, 65.0], [13.9, 65.0], [14.0, 65.0], [14.1, 65.0], [14.2, 65.0], [14.3, 65.0], [14.4, 65.0], [14.5, 65.0], [14.6, 65.0], [14.7, 66.0], [14.8, 66.0], [14.9, 66.0], [15.0, 66.0], [15.1, 66.0], [15.2, 66.0], [15.3, 66.0], [15.4, 66.0], [15.5, 66.0], [15.6, 66.0], [15.7, 66.0], [15.8, 66.0], [15.9, 66.0], [16.0, 66.0], [16.1, 66.0], [16.2, 66.0], [16.3, 66.0], [16.4, 66.0], [16.5, 66.0], [16.6, 66.0], [16.7, 66.0], [16.8, 66.0], [16.9, 66.0], [17.0, 66.0], [17.1, 66.0], [17.2, 66.0], [17.3, 66.0], [17.4, 66.0], [17.5, 66.0], [17.6, 66.0], [17.7, 66.0], [17.8, 66.0], [17.9, 66.0], [18.0, 66.0], [18.1, 66.0], [18.2, 66.0], [18.3, 66.0], [18.4, 66.0], [18.5, 66.0], [18.6, 66.0], [18.7, 66.0], [18.8, 66.0], [18.9, 66.0], [19.0, 66.0], [19.1, 66.0], [19.2, 66.0], [19.3, 66.0], [19.4, 66.0], [19.5, 66.0], [19.6, 67.0], [19.7, 67.0], [19.8, 67.0], [19.9, 67.0], [20.0, 67.0], [20.1, 67.0], [20.2, 67.0], [20.3, 67.0], [20.4, 67.0], [20.5, 67.0], [20.6, 67.0], [20.7, 67.0], [20.8, 67.0], [20.9, 67.0], [21.0, 67.0], [21.1, 67.0], [21.2, 67.0], [21.3, 67.0], [21.4, 67.0], [21.5, 67.0], [21.6, 67.0], [21.7, 67.0], [21.8, 67.0], [21.9, 67.0], [22.0, 67.0], [22.1, 67.0], [22.2, 67.0], [22.3, 67.0], [22.4, 67.0], [22.5, 67.0], [22.6, 67.0], [22.7, 67.0], [22.8, 67.0], [22.9, 67.0], [23.0, 67.0], [23.1, 68.0], [23.2, 68.0], [23.3, 68.0], [23.4, 68.0], [23.5, 68.0], [23.6, 68.0], [23.7, 68.0], [23.8, 68.0], [23.9, 68.0], [24.0, 68.0], [24.1, 68.0], [24.2, 68.0], [24.3, 68.0], [24.4, 68.0], [24.5, 68.0], [24.6, 68.0], [24.7, 68.0], [24.8, 68.0], [24.9, 68.0], [25.0, 68.0], [25.1, 68.0], [25.2, 68.0], [25.3, 68.0], [25.4, 68.0], [25.5, 68.0], [25.6, 68.0], [25.7, 68.0], [25.8, 68.0], [25.9, 68.0], [26.0, 68.0], [26.1, 68.0], [26.2, 68.0], [26.3, 68.0], [26.4, 68.0], [26.5, 68.0], [26.6, 69.0], [26.7, 69.0], [26.8, 69.0], [26.9, 69.0], [27.0, 69.0], [27.1, 69.0], [27.2, 69.0], [27.3, 69.0], [27.4, 69.0], [27.5, 69.0], [27.6, 69.0], [27.7, 69.0], [27.8, 69.0], [27.9, 69.0], [28.0, 69.0], [28.1, 69.0], [28.2, 69.0], [28.3, 69.0], [28.4, 69.0], [28.5, 69.0], [28.6, 69.0], [28.7, 69.0], [28.8, 69.0], [28.9, 69.0], [29.0, 69.0], [29.1, 69.0], [29.2, 69.0], [29.3, 69.0], [29.4, 69.0], [29.5, 70.0], [29.6, 70.0], [29.7, 70.0], [29.8, 70.0], [29.9, 70.0], [30.0, 70.0], [30.1, 70.0], [30.2, 70.0], [30.3, 70.0], [30.4, 70.0], [30.5, 70.0], [30.6, 70.0], [30.7, 70.0], [30.8, 70.0], [30.9, 70.0], [31.0, 70.0], [31.1, 70.0], [31.2, 70.0], [31.3, 70.0], [31.4, 71.0], [31.5, 71.0], [31.6, 71.0], [31.7, 71.0], [31.8, 71.0], [31.9, 71.0], [32.0, 71.0], [32.1, 71.0], [32.2, 71.0], [32.3, 71.0], [32.4, 71.0], [32.5, 71.0], [32.6, 72.0], [32.7, 72.0], [32.8, 72.0], [32.9, 72.0], [33.0, 72.0], [33.1, 72.0], [33.2, 72.0], [33.3, 72.0], [33.4, 72.0], [33.5, 73.0], [33.6, 73.0], [33.7, 73.0], [33.8, 73.0], [33.9, 73.0], [34.0, 73.0], [34.1, 73.0], [34.2, 73.0], [34.3, 73.0], [34.4, 74.0], [34.5, 74.0], [34.6, 74.0], [34.7, 74.0], [34.8, 74.0], [34.9, 74.0], [35.0, 74.0], [35.1, 75.0], [35.2, 75.0], [35.3, 75.0], [35.4, 75.0], [35.5, 75.0], [35.6, 75.0], [35.7, 76.0], [35.8, 76.0], [35.9, 76.0], [36.0, 76.0], [36.1, 76.0], [36.2, 76.0], [36.3, 76.0], [36.4, 77.0], [36.5, 77.0], [36.6, 77.0], [36.7, 77.0], [36.8, 77.0], [36.9, 77.0], [37.0, 78.0], [37.1, 78.0], [37.2, 78.0], [37.3, 78.0], [37.4, 78.0], [37.5, 79.0], [37.6, 79.0], [37.7, 79.0], [37.8, 79.0], [37.9, 79.0], [38.0, 80.0], [38.1, 80.0], [38.2, 80.0], [38.3, 80.0], [38.4, 81.0], [38.5, 81.0], [38.6, 81.0], [38.7, 81.0], [38.8, 82.0], [38.9, 82.0], [39.0, 82.0], [39.1, 82.0], [39.2, 83.0], [39.3, 83.0], [39.4, 83.0], [39.5, 83.0], [39.6, 83.0], [39.7, 84.0], [39.8, 84.0], [39.9, 84.0], [40.0, 84.0], [40.1, 85.0], [40.2, 85.0], [40.3, 85.0], [40.4, 85.0], [40.5, 85.0], [40.6, 86.0], [40.7, 86.0], [40.8, 86.0], [40.9, 86.0], [41.0, 86.0], [41.1, 86.0], [41.2, 86.0], [41.3, 86.0], [41.4, 86.0], [41.5, 86.0], [41.6, 86.0], [41.7, 86.0], [41.8, 86.0], [41.9, 86.0], [42.0, 86.0], [42.1, 86.0], [42.2, 86.0], [42.3, 86.0], [42.4, 87.0], [42.5, 87.0], [42.6, 87.0], [42.7, 87.0], [42.8, 87.0], [42.9, 87.0], [43.0, 87.0], [43.1, 87.0], [43.2, 87.0], [43.3, 87.0], [43.4, 87.0], [43.5, 87.0], [43.6, 87.0], [43.7, 87.0], [43.8, 87.0], [43.9, 87.0], [44.0, 87.0], [44.1, 87.0], [44.2, 87.0], [44.3, 87.0], [44.4, 87.0], [44.5, 87.0], [44.6, 87.0], [44.7, 87.0], [44.8, 87.0], [44.9, 87.0], [45.0, 87.0], [45.1, 87.0], [45.2, 87.0], [45.3, 87.0], [45.4, 87.0], [45.5, 87.0], [45.6, 87.0], [45.7, 87.0], [45.8, 87.0], [45.9, 87.0], [46.0, 87.0], [46.1, 87.0], [46.2, 87.0], [46.3, 87.0], [46.4, 87.0], [46.5, 87.0], [46.6, 87.0], [46.7, 87.0], [46.8, 87.0], [46.9, 87.0], [47.0, 87.0], [47.1, 87.0], [47.2, 87.0], [47.3, 87.0], [47.4, 87.0], [47.5, 87.0], [47.6, 87.0], [47.7, 87.0], [47.8, 87.0], [47.9, 87.0], [48.0, 87.0], [48.1, 87.0], [48.2, 87.0], [48.3, 87.0], [48.4, 87.0], [48.5, 87.0], [48.6, 87.0], [48.7, 87.0], [48.8, 87.0], [48.9, 87.0], [49.0, 87.0], [49.1, 87.0], [49.2, 88.0], [49.3, 88.0], [49.4, 88.0], [49.5, 88.0], [49.6, 88.0], [49.7, 88.0], [49.8, 88.0], [49.9, 88.0], [50.0, 88.0], [50.1, 88.0], [50.2, 88.0], [50.3, 88.0], [50.4, 88.0], [50.5, 88.0], [50.6, 88.0], [50.7, 88.0], [50.8, 88.0], [50.9, 88.0], [51.0, 88.0], [51.1, 88.0], [51.2, 88.0], [51.3, 88.0], [51.4, 88.0], [51.5, 88.0], [51.6, 88.0], [51.7, 88.0], [51.8, 88.0], [51.9, 88.0], [52.0, 88.0], [52.1, 88.0], [52.2, 88.0], [52.3, 88.0], [52.4, 88.0], [52.5, 88.0], [52.6, 88.0], [52.7, 88.0], [52.8, 88.0], [52.9, 88.0], [53.0, 88.0], [53.1, 88.0], [53.2, 88.0], [53.3, 88.0], [53.4, 88.0], [53.5, 88.0], [53.6, 88.0], [53.7, 88.0], [53.8, 88.0], [53.9, 88.0], [54.0, 88.0], [54.1, 88.0], [54.2, 88.0], [54.3, 88.0], [54.4, 88.0], [54.5, 88.0], [54.6, 88.0], [54.7, 88.0], [54.8, 88.0], [54.9, 88.0], [55.0, 88.0], [55.1, 88.0], [55.2, 88.0], [55.3, 88.0], [55.4, 88.0], [55.5, 88.0], [55.6, 88.0], [55.7, 88.0], [55.8, 88.0], [55.9, 88.0], [56.0, 88.0], [56.1, 88.0], [56.2, 88.0], [56.3, 88.0], [56.4, 88.0], [56.5, 88.0], [56.6, 88.0], [56.7, 88.0], [56.8, 88.0], [56.9, 88.0], [57.0, 88.0], [57.1, 88.0], [57.2, 88.0], [57.3, 88.0], [57.4, 88.0], [57.5, 88.0], [57.6, 88.0], [57.7, 88.0], [57.8, 88.0], [57.9, 88.0], [58.0, 88.0], [58.1, 88.0], [58.2, 88.0], [58.3, 88.0], [58.4, 88.0], [58.5, 88.0], [58.6, 88.0], [58.7, 88.0], [58.8, 88.0], [58.9, 88.0], [59.0, 88.0], [59.1, 88.0], [59.2, 88.0], [59.3, 88.0], [59.4, 88.0], [59.5, 88.0], [59.6, 88.0], [59.7, 88.0], [59.8, 88.0], [59.9, 88.0], [60.0, 88.0], [60.1, 88.0], [60.2, 88.0], [60.3, 88.0], [60.4, 88.0], [60.5, 88.0], [60.6, 88.0], [60.7, 88.0], [60.8, 89.0], [60.9, 89.0], [61.0, 89.0], [61.1, 89.0], [61.2, 89.0], [61.3, 89.0], [61.4, 89.0], [61.5, 89.0], [61.6, 89.0], [61.7, 89.0], [61.8, 89.0], [61.9, 89.0], [62.0, 89.0], [62.1, 89.0], [62.2, 89.0], [62.3, 89.0], [62.4, 89.0], [62.5, 89.0], [62.6, 89.0], [62.7, 89.0], [62.8, 89.0], [62.9, 89.0], [63.0, 89.0], [63.1, 89.0], [63.2, 89.0], [63.3, 89.0], [63.4, 89.0], [63.5, 89.0], [63.6, 89.0], [63.7, 89.0], [63.8, 89.0], [63.9, 89.0], [64.0, 89.0], [64.1, 89.0], [64.2, 89.0], [64.3, 89.0], [64.4, 89.0], [64.5, 89.0], [64.6, 89.0], [64.7, 89.0], [64.8, 89.0], [64.9, 89.0], [65.0, 89.0], [65.1, 89.0], [65.2, 89.0], [65.3, 89.0], [65.4, 89.0], [65.5, 89.0], [65.6, 89.0], [65.7, 89.0], [65.8, 89.0], [65.9, 89.0], [66.0, 89.0], [66.1, 89.0], [66.2, 89.0], [66.3, 89.0], [66.4, 89.0], [66.5, 89.0], [66.6, 89.0], [66.7, 89.0], [66.8, 89.0], [66.9, 89.0], [67.0, 89.0], [67.1, 89.0], [67.2, 89.0], [67.3, 89.0], [67.4, 89.0], [67.5, 89.0], [67.6, 89.0], [67.7, 89.0], [67.8, 89.0], [67.9, 89.0], [68.0, 89.0], [68.1, 89.0], [68.2, 89.0], [68.3, 89.0], [68.4, 89.0], [68.5, 89.0], [68.6, 89.0], [68.7, 89.0], [68.8, 89.0], [68.9, 89.0], [69.0, 89.0], [69.1, 89.0], [69.2, 89.0], [69.3, 89.0], [69.4, 89.0], [69.5, 89.0], [69.6, 89.0], [69.7, 89.0], [69.8, 89.0], [69.9, 89.0], [70.0, 89.0], [70.1, 89.0], [70.2, 89.0], [70.3, 89.0], [70.4, 89.0], [70.5, 89.0], [70.6, 89.0], [70.7, 89.0], [70.8, 90.0], [70.9, 90.0], [71.0, 90.0], [71.1, 90.0], [71.2, 90.0], [71.3, 90.0], [71.4, 90.0], [71.5, 90.0], [71.6, 90.0], [71.7, 90.0], [71.8, 90.0], [71.9, 90.0], [72.0, 90.0], [72.1, 90.0], [72.2, 90.0], [72.3, 90.0], [72.4, 90.0], [72.5, 90.0], [72.6, 90.0], [72.7, 90.0], [72.8, 90.0], [72.9, 90.0], [73.0, 90.0], [73.1, 90.0], [73.2, 90.0], [73.3, 90.0], [73.4, 90.0], [73.5, 90.0], [73.6, 90.0], [73.7, 90.0], [73.8, 90.0], [73.9, 90.0], [74.0, 90.0], [74.1, 90.0], [74.2, 90.0], [74.3, 90.0], [74.4, 90.0], [74.5, 90.0], [74.6, 90.0], [74.7, 90.0], [74.8, 90.0], [74.9, 90.0], [75.0, 90.0], [75.1, 90.0], [75.2, 90.0], [75.3, 90.0], [75.4, 90.0], [75.5, 90.0], [75.6, 90.0], [75.7, 90.0], [75.8, 90.0], [75.9, 90.0], [76.0, 90.0], [76.1, 90.0], [76.2, 90.0], [76.3, 90.0], [76.4, 90.0], [76.5, 90.0], [76.6, 90.0], [76.7, 90.0], [76.8, 90.0], [76.9, 90.0], [77.0, 90.0], [77.1, 90.0], [77.2, 90.0], [77.3, 90.0], [77.4, 90.0], [77.5, 90.0], [77.6, 90.0], [77.7, 90.0], [77.8, 90.0], [77.9, 90.0], [78.0, 90.0], [78.1, 90.0], [78.2, 90.0], [78.3, 90.0], [78.4, 90.0], [78.5, 90.0], [78.6, 90.0], [78.7, 91.0], [78.8, 91.0], [78.9, 91.0], [79.0, 91.0], [79.1, 91.0], [79.2, 91.0], [79.3, 91.0], [79.4, 91.0], [79.5, 91.0], [79.6, 91.0], [79.7, 91.0], [79.8, 91.0], [79.9, 91.0], [80.0, 91.0], [80.1, 91.0], [80.2, 91.0], [80.3, 91.0], [80.4, 91.0], [80.5, 91.0], [80.6, 91.0], [80.7, 91.0], [80.8, 91.0], [80.9, 91.0], [81.0, 91.0], [81.1, 91.0], [81.2, 91.0], [81.3, 91.0], [81.4, 91.0], [81.5, 91.0], [81.6, 91.0], [81.7, 91.0], [81.8, 91.0], [81.9, 91.0], [82.0, 91.0], [82.1, 91.0], [82.2, 91.0], [82.3, 91.0], [82.4, 91.0], [82.5, 91.0], [82.6, 91.0], [82.7, 91.0], [82.8, 91.0], [82.9, 91.0], [83.0, 91.0], [83.1, 91.0], [83.2, 91.0], [83.3, 91.0], [83.4, 91.0], [83.5, 91.0], [83.6, 91.0], [83.7, 91.0], [83.8, 91.0], [83.9, 91.0], [84.0, 91.0], [84.1, 91.0], [84.2, 91.0], [84.3, 91.0], [84.4, 91.0], [84.5, 91.0], [84.6, 91.0], [84.7, 91.0], [84.8, 91.0], [84.9, 91.0], [85.0, 91.0], [85.1, 91.0], [85.2, 91.0], [85.3, 91.0], [85.4, 91.0], [85.5, 91.0], [85.6, 91.0], [85.7, 91.0], [85.8, 91.0], [85.9, 91.0], [86.0, 91.0], [86.1, 91.0], [86.2, 92.0], [86.3, 92.0], [86.4, 92.0], [86.5, 92.0], [86.6, 92.0], [86.7, 92.0], [86.8, 92.0], [86.9, 92.0], [87.0, 92.0], [87.1, 92.0], [87.2, 92.0], [87.3, 92.0], [87.4, 92.0], [87.5, 92.0], [87.6, 92.0], [87.7, 92.0], [87.8, 92.0], [87.9, 92.0], [88.0, 92.0], [88.1, 92.0], [88.2, 92.0], [88.3, 92.0], [88.4, 92.0], [88.5, 92.0], [88.6, 92.0], [88.7, 92.0], [88.8, 92.0], [88.9, 92.0], [89.0, 92.0], [89.1, 92.0], [89.2, 92.0], [89.3, 92.0], [89.4, 92.0], [89.5, 92.0], [89.6, 92.0], [89.7, 92.0], [89.8, 92.0], [89.9, 92.0], [90.0, 92.0], [90.1, 92.0], [90.2, 92.0], [90.3, 92.0], [90.4, 92.0], [90.5, 92.0], [90.6, 92.0], [90.7, 92.0], [90.8, 92.0], [90.9, 92.0], [91.0, 92.0], [91.1, 92.0], [91.2, 92.0], [91.3, 92.0], [91.4, 93.0], [91.5, 93.0], [91.6, 93.0], [91.7, 93.0], [91.8, 93.0], [91.9, 93.0], [92.0, 93.0], [92.1, 93.0], [92.2, 93.0], [92.3, 93.0], [92.4, 93.0], [92.5, 93.0], [92.6, 93.0], [92.7, 93.0], [92.8, 93.0], [92.9, 93.0], [93.0, 93.0], [93.1, 93.0], [93.2, 93.0], [93.3, 93.0], [93.4, 93.0], [93.5, 93.0], [93.6, 94.0], [93.7, 94.0], [93.8, 94.0], [93.9, 94.0], [94.0, 94.0], [94.1, 94.0], [94.2, 94.0], [94.3, 94.0], [94.4, 94.0], [94.5, 94.0], [94.6, 94.0], [94.7, 95.0], [94.8, 95.0], [94.9, 95.0], [95.0, 95.0], [95.1, 95.0], [95.2, 95.0], [95.3, 95.0], [95.4, 96.0], [95.5, 96.0], [95.6, 96.0], [95.7, 96.0], [95.8, 96.0], [95.9, 96.0], [96.0, 96.0], [96.1, 97.0], [96.2, 97.0], [96.3, 97.0], [96.4, 97.0], [96.5, 97.0], [96.6, 97.0], [96.7, 97.0], [96.8, 98.0], [96.9, 98.0], [97.0, 98.0], [97.1, 98.0], [97.2, 98.0], [97.3, 98.0], [97.4, 99.0], [97.5, 99.0], [97.6, 99.0], [97.7, 99.0], [97.8, 99.0], [97.9, 100.0], [98.0, 100.0], [98.1, 100.0], [98.2, 100.0], [98.3, 100.0], [98.4, 101.0], [98.5, 101.0], [98.6, 101.0], [98.7, 101.0], [98.8, 102.0], [98.9, 102.0], [99.0, 102.0], [99.1, 103.0], [99.2, 103.0], [99.3, 103.0], [99.4, 104.0], [99.5, 105.0], [99.6, 106.0], [99.7, 107.0], [99.8, 109.0], [99.9, 113.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 7691.0, "minX": 0.0, "maxY": 354549.0, "series": [{"data": [[0.0, 354549.0], [100.0, 7691.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 362240.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 362240.0, "series": [{"data": [[0.0, 362240.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 34.067590001422936, "minX": 1.5622473E12, "maxY": 50.0, "series": [{"data": [[1.56224772E12, 50.0], [1.56224742E12, 50.0], [1.5622479E12, 49.80637234132698], [1.56224736E12, 50.0], [1.56224784E12, 50.0], [1.56224754E12, 50.0], [1.56224748E12, 50.0], [1.56224766E12, 50.0], [1.5622476E12, 50.0], [1.5622473E12, 34.067590001422936], [1.56224778E12, 50.0]], "isOverall": false, "label": "Grupo de Usu\u00E1rios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5622479E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 6.784313725490195, "minX": 1.0, "maxY": 94.77300613496931, "series": [{"data": [[2.0, 6.784313725490195], [3.0, 8.4375], [4.0, 11.715736040609135], [5.0, 13.200873362445412], [6.0, 14.974468085106384], [7.0, 18.709251101321588], [8.0, 19.686991869918707], [9.0, 23.021367521367512], [10.0, 21.2893772893773], [11.0, 23.43859649122808], [12.0, 23.661073825503333], [13.0, 29.3558052434457], [14.0, 27.48684210526317], [15.0, 32.78066914498144], [16.0, 28.498516320474778], [17.0, 29.499999999999996], [18.0, 31.523529411764684], [19.0, 33.08771929824562], [20.0, 34.905604719764], [21.0, 39.495268138801286], [22.0, 44.35099337748345], [23.0, 36.50133333333331], [24.0, 38.093582887700556], [25.0, 44.41764705882353], [26.0, 43.3342776203966], [27.0, 58.279999999999994], [28.0, 56.69463087248322], [29.0, 59.68989547038329], [30.0, 67.96654275092935], [31.0, 51.08446866485014], [32.0, 66.55555555555556], [33.0, 47.59952606635073], [34.0, 66.37000000000002], [35.0, 72.65410958904113], [36.0, 69.19936708860757], [37.0, 57.585492227979266], [38.0, 68.20241691842905], [39.0, 76.77704918032784], [40.0, 70.61031518624645], [41.0, 69.205633802817], [42.0, 84.41118421052634], [43.0, 72.7765042979942], [44.0, 85.11875000000005], [45.0, 82.85757575757582], [46.0, 74.62465753424664], [47.0, 69.08612440191388], [48.0, 94.77300613496931], [49.0, 74.71032745591947], [50.0, 82.03718363540123], [1.0, 7.615384615384615]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}, {"data": [[49.06639796819657, 80.71081327297068]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 22618.583333333332, "minX": 1.5622473E12, "maxY": 2236729.4166666665, "series": [{"data": [[1.56224772E12, 1941725.6333333333], [1.56224742E12, 2026526.0833333333], [1.5622479E12, 652791.9833333333], [1.56224736E12, 1961473.6833333333], [1.56224784E12, 2100927.0], [1.56224754E12, 1932211.1666666667], [1.56224748E12, 2059716.0833333333], [1.56224766E12, 2052635.55], [1.5622476E12, 1906931.45], [1.5622473E12, 1166241.2833333334], [1.56224778E12, 2236729.4166666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.56224772E12, 67278.83333333333], [1.56224742E12, 70217.08333333333], [1.5622479E12, 22618.583333333332], [1.56224736E12, 67963.08333333333], [1.56224784E12, 72795.0], [1.56224754E12, 66949.16666666667], [1.56224748E12, 71367.08333333333], [1.56224766E12, 71121.75], [1.5622476E12, 66073.25], [1.5622473E12, 40409.083333333336], [1.56224778E12, 77500.41666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5622479E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 59.87378456576352, "minX": 1.5622473E12, "maxY": 86.93574681634962, "series": [{"data": [[1.56224772E12, 85.39590336732947], [1.56224742E12, 81.7861334789139], [1.5622479E12, 85.15083467502753], [1.56224736E12, 84.5226317719053], [1.56224784E12, 78.88928383359686], [1.56224754E12, 85.79613512739805], [1.56224748E12, 80.4709547468789], [1.56224766E12, 80.7497776699822], [1.5622476E12, 86.93574681634962], [1.5622473E12, 59.87378456576352], [1.56224778E12, 74.09133176703345]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5622479E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 59.76692121614577, "minX": 1.5622473E12, "maxY": 86.83700287181281, "series": [{"data": [[1.56224772E12, 85.30192011851123], [1.56224742E12, 81.69447249897561], [1.5622479E12, 85.06135073298876], [1.56224736E12, 84.43061000028145], [1.56224784E12, 78.79836756187531], [1.56224754E12, 85.70226166618929], [1.56224748E12, 80.37813884785801], [1.56224766E12, 80.65303042552662], [1.5622476E12, 86.83700287181281], [1.5622473E12, 59.76692121614577], [1.56224778E12, 73.99646345987479]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5622479E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.408185746970596, "minX": 1.5622473E12, "maxY": 0.7490869420860415, "series": [{"data": [[1.56224772E12, 0.4221127001310471], [1.56224742E12, 0.4553841954415173], [1.5622479E12, 0.408185746970596], [1.56224736E12, 0.44166502157421145], [1.56224784E12, 0.4441021590310718], [1.56224754E12, 0.4242484969939853], [1.56224748E12, 0.4387807170672779], [1.56224766E12, 0.44872935025736166], [1.5622476E12, 0.41676094334696956], [1.5622473E12, 0.7490869420860415], [1.56224778E12, 0.4770619512798327]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5622479E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 3.0, "minX": 1.5622473E12, "maxY": 152.0, "series": [{"data": [[1.56224772E12, 111.0], [1.56224742E12, 132.0], [1.5622479E12, 109.0], [1.56224736E12, 129.0], [1.56224784E12, 142.0], [1.56224754E12, 122.0], [1.56224748E12, 152.0], [1.56224766E12, 114.0], [1.5622476E12, 136.0], [1.5622473E12, 116.0], [1.56224778E12, 119.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.56224772E12, 62.0], [1.56224742E12, 35.0], [1.5622479E12, 3.0], [1.56224736E12, 58.0], [1.56224784E12, 52.0], [1.56224754E12, 57.0], [1.56224748E12, 62.0], [1.56224766E12, 55.0], [1.5622476E12, 59.0], [1.5622473E12, 3.0], [1.56224778E12, 45.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.56224772E12, 92.0], [1.56224742E12, 93.0], [1.5622479E12, 92.0], [1.56224736E12, 92.0], [1.56224784E12, 91.0], [1.56224754E12, 92.0], [1.56224748E12, 93.0], [1.56224766E12, 93.0], [1.5622476E12, 93.0], [1.5622473E12, 92.0], [1.56224778E12, 70.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.56224772E12, 101.0], [1.56224742E12, 103.0], [1.5622479E12, 104.0], [1.56224736E12, 103.0], [1.56224784E12, 99.0], [1.56224754E12, 103.0], [1.56224748E12, 102.0], [1.56224766E12, 103.0], [1.5622476E12, 103.0], [1.5622473E12, 108.0], [1.56224778E12, 90.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.56224772E12, 94.0], [1.56224742E12, 96.0], [1.5622479E12, 97.0], [1.56224736E12, 95.0], [1.56224784E12, 93.0], [1.56224754E12, 96.0], [1.56224748E12, 96.0], [1.56224766E12, 96.0], [1.5622476E12, 97.0], [1.5622473E12, 96.0], [1.56224778E12, 74.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5622479E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 6.0, "minX": 98.0, "maxY": 95.0, "series": [{"data": [[98.0, 64.0], [134.0, 6.0], [304.0, 8.0], [369.0, 12.0], [383.0, 15.0], [388.0, 20.0], [435.0, 21.0], [441.0, 29.0], [466.0, 66.0], [488.0, 31.0], [485.0, 58.0], [501.0, 21.0], [505.0, 43.0], [496.0, 69.0], [508.0, 95.0], [540.0, 91.0], [528.0, 45.0], [529.0, 53.0], [531.0, 92.0], [536.0, 90.0], [533.0, 90.0], [535.0, 92.0], [534.0, 91.0], [532.0, 92.0], [527.0, 93.0], [537.0, 92.0], [541.0, 91.0], [542.0, 91.0], [543.0, 91.0], [539.0, 91.0], [538.0, 91.0], [549.0, 89.0], [571.0, 28.0], [559.0, 89.0], [557.0, 89.0], [555.0, 90.0], [556.0, 90.0], [558.0, 89.0], [560.0, 89.0], [563.0, 89.0], [564.0, 89.0], [565.0, 89.0], [567.0, 88.0], [562.0, 89.0], [561.0, 89.0], [547.0, 90.0], [548.0, 90.0], [544.0, 91.0], [546.0, 91.0], [570.0, 89.0], [569.0, 89.0], [550.0, 90.0], [551.0, 90.0], [554.0, 90.0], [552.0, 90.0], [553.0, 90.0], [575.0, 88.0], [573.0, 88.0], [572.0, 89.0], [574.0, 89.0], [600.0, 87.0], [576.0, 76.0], [589.0, 59.0], [584.0, 89.0], [585.0, 87.0], [587.0, 89.0], [586.0, 89.0], [596.0, 87.0], [593.0, 87.0], [595.0, 88.0], [594.0, 88.0], [592.0, 88.0], [578.0, 89.0], [577.0, 89.0], [583.0, 88.0], [580.0, 89.0], [582.0, 88.0], [591.0, 89.0], [590.0, 88.0], [607.0, 87.0], [604.0, 87.0], [606.0, 88.0], [605.0, 88.0], [601.0, 88.0], [603.0, 89.0], [599.0, 88.0], [598.0, 88.0], [612.0, 37.0], [631.0, 71.0], [629.0, 86.0], [630.0, 82.0], [621.0, 87.0], [616.0, 87.0], [611.0, 87.0], [610.0, 87.0], [609.0, 87.0], [608.0, 87.0], [623.0, 86.0], [617.0, 88.0], [620.0, 87.0], [618.0, 82.0], [619.0, 87.0], [622.0, 83.0], [628.0, 80.0], [625.0, 86.0], [627.0, 85.0], [626.0, 84.0], [624.0, 87.0], [639.0, 78.0], [638.0, 78.0], [637.0, 79.0], [636.0, 80.0], [633.0, 79.0], [632.0, 77.0], [615.0, 88.0], [613.0, 87.0], [634.0, 69.0], [644.0, 72.0], [652.0, 72.0], [654.0, 70.0], [653.0, 73.0], [641.0, 77.0], [655.0, 71.0], [648.0, 76.0], [661.0, 73.0], [662.0, 72.0], [663.0, 69.0], [659.0, 71.0], [660.0, 73.0], [657.0, 70.0], [669.0, 69.0], [671.0, 69.0], [670.0, 69.0], [656.0, 70.0], [658.0, 70.0], [649.0, 73.0], [650.0, 72.0], [651.0, 69.0], [668.0, 70.0], [667.0, 70.0], [665.0, 70.0], [666.0, 71.0], [645.0, 75.0], [647.0, 70.0], [646.0, 76.0], [664.0, 71.0], [642.0, 73.0], [643.0, 79.0], [679.0, 68.0], [672.0, 69.0], [682.0, 69.0], [680.0, 71.0], [673.0, 69.0], [677.0, 70.0], [676.0, 68.0], [675.0, 76.0], [686.0, 70.0], [685.0, 68.0], [683.0, 70.0], [697.0, 69.0], [691.0, 68.0], [703.0, 68.0], [688.0, 68.0], [690.0, 68.0], [698.0, 67.0], [694.0, 69.0], [695.0, 68.0], [692.0, 68.0], [729.0, 68.0], [734.0, 68.0], [710.0, 69.0], [728.0, 67.0], [711.0, 67.0], [709.0, 67.0], [722.0, 69.0], [730.0, 68.0], [732.0, 67.0], [733.0, 68.0], [704.0, 67.0], [706.0, 68.0], [717.0, 67.0], [719.0, 68.0], [712.0, 68.0], [715.0, 68.0], [727.0, 68.0], [726.0, 66.0], [707.0, 68.0], [742.0, 67.0], [737.0, 68.0], [744.0, 66.0], [747.0, 66.0], [750.0, 66.0], [748.0, 67.0], [756.0, 66.0], [757.0, 66.0], [739.0, 67.0], [740.0, 67.0], [738.0, 66.0], [755.0, 66.0], [753.0, 66.0], [743.0, 66.0], [761.0, 65.0], [752.0, 66.0], [754.0, 65.0], [758.0, 66.0], [759.0, 65.0], [751.0, 66.0], [736.0, 67.0], [768.0, 65.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 768.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 6.0, "minX": 98.0, "maxY": 95.0, "series": [{"data": [[98.0, 64.0], [134.0, 6.0], [304.0, 8.0], [369.0, 12.0], [383.0, 15.0], [388.0, 20.0], [435.0, 21.0], [441.0, 29.0], [466.0, 66.0], [488.0, 31.0], [485.0, 58.0], [501.0, 21.0], [505.0, 43.0], [496.0, 69.0], [508.0, 95.0], [540.0, 91.0], [528.0, 45.0], [529.0, 53.0], [531.0, 92.0], [536.0, 90.0], [533.0, 90.0], [535.0, 92.0], [534.0, 91.0], [532.0, 92.0], [527.0, 93.0], [537.0, 92.0], [541.0, 91.0], [542.0, 91.0], [543.0, 91.0], [539.0, 91.0], [538.0, 91.0], [549.0, 89.0], [571.0, 28.0], [559.0, 89.0], [557.0, 89.0], [555.0, 90.0], [556.0, 89.0], [558.0, 89.0], [560.0, 89.0], [563.0, 88.0], [564.0, 89.0], [565.0, 89.0], [567.0, 88.0], [562.0, 89.0], [561.0, 89.0], [547.0, 90.0], [548.0, 90.0], [544.0, 90.0], [546.0, 91.0], [570.0, 89.0], [569.0, 89.0], [550.0, 90.0], [551.0, 90.0], [554.0, 90.0], [552.0, 90.0], [553.0, 90.0], [575.0, 88.0], [573.0, 88.0], [572.0, 88.0], [574.0, 89.0], [600.0, 87.0], [576.0, 76.0], [589.0, 59.0], [584.0, 89.0], [585.0, 87.0], [587.0, 89.0], [586.0, 89.0], [596.0, 87.0], [593.0, 87.0], [595.0, 88.0], [594.0, 88.0], [592.0, 88.0], [578.0, 89.0], [577.0, 89.0], [583.0, 88.0], [580.0, 89.0], [582.0, 88.0], [591.0, 89.0], [590.0, 88.0], [607.0, 87.0], [604.0, 87.0], [606.0, 88.0], [605.0, 88.0], [601.0, 88.0], [603.0, 88.0], [599.0, 87.0], [598.0, 88.0], [612.0, 37.0], [631.0, 71.0], [629.0, 86.0], [630.0, 82.0], [621.0, 87.0], [616.0, 87.0], [611.0, 86.0], [610.0, 87.0], [609.0, 86.0], [608.0, 87.0], [623.0, 86.0], [617.0, 88.0], [620.0, 87.0], [618.0, 82.0], [619.0, 87.0], [622.0, 83.0], [628.0, 80.0], [625.0, 86.0], [627.0, 85.0], [626.0, 84.0], [624.0, 87.0], [639.0, 78.0], [638.0, 78.0], [637.0, 78.0], [636.0, 80.0], [633.0, 79.0], [632.0, 77.0], [615.0, 88.0], [613.0, 87.0], [634.0, 69.0], [644.0, 72.0], [652.0, 72.0], [654.0, 69.0], [653.0, 73.0], [641.0, 76.0], [655.0, 71.0], [648.0, 76.0], [661.0, 73.0], [662.0, 71.0], [663.0, 68.0], [659.0, 71.0], [660.0, 73.0], [657.0, 69.0], [669.0, 69.0], [671.0, 69.0], [670.0, 69.0], [656.0, 70.0], [658.0, 70.0], [649.0, 72.0], [650.0, 72.0], [651.0, 69.0], [668.0, 70.0], [667.0, 70.0], [665.0, 70.0], [666.0, 71.0], [645.0, 75.0], [647.0, 70.0], [646.0, 76.0], [664.0, 70.5], [642.0, 73.0], [643.0, 79.0], [679.0, 68.0], [672.0, 69.0], [682.0, 69.0], [680.0, 71.0], [673.0, 69.0], [677.0, 70.0], [676.0, 68.0], [675.0, 75.0], [686.0, 70.0], [685.0, 68.0], [683.0, 70.0], [697.0, 69.0], [691.0, 68.0], [703.0, 68.0], [688.0, 68.0], [690.0, 68.0], [698.0, 67.0], [694.0, 69.0], [695.0, 68.0], [692.0, 68.0], [729.0, 68.0], [734.0, 68.0], [710.0, 69.0], [728.0, 67.0], [711.0, 67.0], [709.0, 67.0], [722.0, 68.0], [730.0, 68.0], [732.0, 67.0], [733.0, 67.0], [704.0, 67.0], [706.0, 68.0], [717.0, 67.0], [719.0, 68.0], [712.0, 68.0], [715.0, 68.0], [727.0, 68.0], [726.0, 66.0], [707.0, 68.0], [742.0, 67.0], [737.0, 68.0], [744.0, 66.0], [747.0, 66.0], [750.0, 66.0], [748.0, 66.0], [756.0, 65.0], [757.0, 66.0], [739.0, 67.0], [740.0, 67.0], [738.0, 66.0], [755.0, 66.0], [753.0, 66.0], [743.0, 66.0], [761.0, 65.0], [752.0, 66.0], [754.0, 65.0], [758.0, 65.0], [759.0, 65.0], [751.0, 66.0], [736.0, 67.0], [768.0, 65.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 768.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 195.85, "minX": 1.5622473E12, "maxY": 673.9333333333333, "series": [{"data": [[1.56224772E12, 585.0166666666667], [1.56224742E12, 610.5833333333334], [1.5622479E12, 195.85], [1.56224736E12, 591.0], [1.56224784E12, 633.0], [1.56224754E12, 582.15], [1.56224748E12, 620.5833333333334], [1.56224766E12, 618.45], [1.5622476E12, 574.5666666666667], [1.5622473E12, 352.2], [1.56224778E12, 673.9333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5622479E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 196.68333333333334, "minX": 1.5622473E12, "maxY": 673.9166666666666, "series": [{"data": [[1.56224772E12, 585.0333333333333], [1.56224742E12, 610.5833333333334], [1.5622479E12, 196.68333333333334], [1.56224736E12, 590.9833333333333], [1.56224784E12, 633.0], [1.56224754E12, 582.1666666666666], [1.56224748E12, 620.5833333333334], [1.56224766E12, 618.45], [1.5622476E12, 574.55], [1.5622473E12, 351.3833333333333], [1.56224778E12, 673.9166666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5622479E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 196.68333333333334, "minX": 1.5622473E12, "maxY": 673.9166666666666, "series": [{"data": [[1.56224772E12, 585.0333333333333], [1.56224742E12, 610.5833333333334], [1.5622479E12, 196.68333333333334], [1.56224736E12, 590.9833333333333], [1.56224784E12, 633.0], [1.56224754E12, 582.1666666666666], [1.56224748E12, 620.5833333333334], [1.56224766E12, 618.45], [1.5622476E12, 574.55], [1.5622473E12, 351.3833333333333], [1.56224778E12, 673.9166666666666]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5622479E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 196.68333333333334, "minX": 1.5622473E12, "maxY": 673.9166666666666, "series": [{"data": [[1.56224772E12, 585.0333333333333], [1.56224742E12, 610.5833333333334], [1.5622479E12, 196.68333333333334], [1.56224736E12, 590.9833333333333], [1.56224784E12, 633.0], [1.56224754E12, 582.1666666666666], [1.56224748E12, 620.5833333333334], [1.56224766E12, 618.45], [1.5622476E12, 574.55], [1.5622473E12, 351.3833333333333], [1.56224778E12, 673.9166666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5622479E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

