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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 1140.0, "series": [{"data": [[0.0, 4.0], [0.1, 10.0], [0.2, 14.0], [0.3, 17.0], [0.4, 21.0], [0.5, 24.0], [0.6, 26.0], [0.7, 28.0], [0.8, 31.0], [0.9, 34.0], [1.0, 36.0], [1.1, 38.0], [1.2, 39.0], [1.3, 41.0], [1.4, 43.0], [1.5, 46.0], [1.6, 49.0], [1.7, 51.0], [1.8, 53.0], [1.9, 54.0], [2.0, 56.0], [2.1, 58.0], [2.2, 61.0], [2.3, 63.0], [2.4, 65.0], [2.5, 67.0], [2.6, 69.0], [2.7, 71.0], [2.8, 73.0], [2.9, 74.0], [3.0, 75.0], [3.1, 75.0], [3.2, 76.0], [3.3, 76.0], [3.4, 76.0], [3.5, 77.0], [3.6, 77.0], [3.7, 77.0], [3.8, 78.0], [3.9, 78.0], [4.0, 78.0], [4.1, 78.0], [4.2, 78.0], [4.3, 79.0], [4.4, 79.0], [4.5, 79.0], [4.6, 79.0], [4.7, 79.0], [4.8, 79.0], [4.9, 79.0], [5.0, 79.0], [5.1, 79.0], [5.2, 80.0], [5.3, 80.0], [5.4, 80.0], [5.5, 80.0], [5.6, 80.0], [5.7, 80.0], [5.8, 80.0], [5.9, 80.0], [6.0, 80.0], [6.1, 80.0], [6.2, 80.0], [6.3, 80.0], [6.4, 80.0], [6.5, 80.0], [6.6, 80.0], [6.7, 81.0], [6.8, 81.0], [6.9, 81.0], [7.0, 81.0], [7.1, 81.0], [7.2, 81.0], [7.3, 81.0], [7.4, 81.0], [7.5, 81.0], [7.6, 81.0], [7.7, 81.0], [7.8, 81.0], [7.9, 81.0], [8.0, 81.0], [8.1, 81.0], [8.2, 81.0], [8.3, 81.0], [8.4, 81.0], [8.5, 81.0], [8.6, 81.0], [8.7, 81.0], [8.8, 82.0], [8.9, 82.0], [9.0, 82.0], [9.1, 82.0], [9.2, 82.0], [9.3, 82.0], [9.4, 82.0], [9.5, 82.0], [9.6, 82.0], [9.7, 82.0], [9.8, 82.0], [9.9, 82.0], [10.0, 82.0], [10.1, 82.0], [10.2, 82.0], [10.3, 82.0], [10.4, 82.0], [10.5, 82.0], [10.6, 82.0], [10.7, 82.0], [10.8, 82.0], [10.9, 82.0], [11.0, 82.0], [11.1, 82.0], [11.2, 82.0], [11.3, 82.0], [11.4, 82.0], [11.5, 82.0], [11.6, 82.0], [11.7, 83.0], [11.8, 83.0], [11.9, 83.0], [12.0, 83.0], [12.1, 83.0], [12.2, 83.0], [12.3, 83.0], [12.4, 83.0], [12.5, 83.0], [12.6, 83.0], [12.7, 83.0], [12.8, 83.0], [12.9, 83.0], [13.0, 83.0], [13.1, 83.0], [13.2, 83.0], [13.3, 83.0], [13.4, 83.0], [13.5, 83.0], [13.6, 83.0], [13.7, 83.0], [13.8, 83.0], [13.9, 83.0], [14.0, 83.0], [14.1, 83.0], [14.2, 83.0], [14.3, 83.0], [14.4, 83.0], [14.5, 83.0], [14.6, 83.0], [14.7, 83.0], [14.8, 83.0], [14.9, 83.0], [15.0, 83.0], [15.1, 83.0], [15.2, 83.0], [15.3, 83.0], [15.4, 83.0], [15.5, 84.0], [15.6, 84.0], [15.7, 84.0], [15.8, 84.0], [15.9, 84.0], [16.0, 84.0], [16.1, 84.0], [16.2, 84.0], [16.3, 84.0], [16.4, 84.0], [16.5, 84.0], [16.6, 84.0], [16.7, 84.0], [16.8, 84.0], [16.9, 84.0], [17.0, 84.0], [17.1, 84.0], [17.2, 84.0], [17.3, 84.0], [17.4, 84.0], [17.5, 84.0], [17.6, 84.0], [17.7, 84.0], [17.8, 84.0], [17.9, 84.0], [18.0, 84.0], [18.1, 84.0], [18.2, 84.0], [18.3, 84.0], [18.4, 84.0], [18.5, 84.0], [18.6, 84.0], [18.7, 84.0], [18.8, 84.0], [18.9, 84.0], [19.0, 84.0], [19.1, 84.0], [19.2, 84.0], [19.3, 84.0], [19.4, 84.0], [19.5, 84.0], [19.6, 84.0], [19.7, 84.0], [19.8, 84.0], [19.9, 84.0], [20.0, 85.0], [20.1, 85.0], [20.2, 85.0], [20.3, 85.0], [20.4, 85.0], [20.5, 85.0], [20.6, 85.0], [20.7, 85.0], [20.8, 85.0], [20.9, 85.0], [21.0, 85.0], [21.1, 85.0], [21.2, 85.0], [21.3, 85.0], [21.4, 85.0], [21.5, 85.0], [21.6, 85.0], [21.7, 85.0], [21.8, 85.0], [21.9, 85.0], [22.0, 85.0], [22.1, 85.0], [22.2, 85.0], [22.3, 85.0], [22.4, 85.0], [22.5, 85.0], [22.6, 85.0], [22.7, 85.0], [22.8, 85.0], [22.9, 85.0], [23.0, 85.0], [23.1, 85.0], [23.2, 85.0], [23.3, 85.0], [23.4, 85.0], [23.5, 85.0], [23.6, 85.0], [23.7, 85.0], [23.8, 85.0], [23.9, 85.0], [24.0, 85.0], [24.1, 86.0], [24.2, 86.0], [24.3, 86.0], [24.4, 86.0], [24.5, 86.0], [24.6, 86.0], [24.7, 86.0], [24.8, 86.0], [24.9, 86.0], [25.0, 86.0], [25.1, 86.0], [25.2, 86.0], [25.3, 86.0], [25.4, 86.0], [25.5, 86.0], [25.6, 86.0], [25.7, 86.0], [25.8, 86.0], [25.9, 86.0], [26.0, 86.0], [26.1, 86.0], [26.2, 86.0], [26.3, 86.0], [26.4, 86.0], [26.5, 86.0], [26.6, 86.0], [26.7, 86.0], [26.8, 86.0], [26.9, 86.0], [27.0, 86.0], [27.1, 86.0], [27.2, 86.0], [27.3, 86.0], [27.4, 86.0], [27.5, 87.0], [27.6, 87.0], [27.7, 87.0], [27.8, 87.0], [27.9, 87.0], [28.0, 87.0], [28.1, 87.0], [28.2, 87.0], [28.3, 87.0], [28.4, 87.0], [28.5, 87.0], [28.6, 87.0], [28.7, 87.0], [28.8, 87.0], [28.9, 87.0], [29.0, 87.0], [29.1, 87.0], [29.2, 87.0], [29.3, 87.0], [29.4, 87.0], [29.5, 87.0], [29.6, 87.0], [29.7, 87.0], [29.8, 87.0], [29.9, 87.0], [30.0, 87.0], [30.1, 87.0], [30.2, 87.0], [30.3, 88.0], [30.4, 88.0], [30.5, 88.0], [30.6, 88.0], [30.7, 88.0], [30.8, 88.0], [30.9, 88.0], [31.0, 88.0], [31.1, 88.0], [31.2, 88.0], [31.3, 88.0], [31.4, 88.0], [31.5, 88.0], [31.6, 88.0], [31.7, 88.0], [31.8, 88.0], [31.9, 88.0], [32.0, 88.0], [32.1, 88.0], [32.2, 88.0], [32.3, 88.0], [32.4, 88.0], [32.5, 88.0], [32.6, 88.0], [32.7, 89.0], [32.8, 89.0], [32.9, 89.0], [33.0, 89.0], [33.1, 89.0], [33.2, 89.0], [33.3, 89.0], [33.4, 89.0], [33.5, 89.0], [33.6, 89.0], [33.7, 89.0], [33.8, 89.0], [33.9, 89.0], [34.0, 89.0], [34.1, 89.0], [34.2, 89.0], [34.3, 89.0], [34.4, 89.0], [34.5, 89.0], [34.6, 89.0], [34.7, 90.0], [34.8, 90.0], [34.9, 90.0], [35.0, 90.0], [35.1, 90.0], [35.2, 90.0], [35.3, 90.0], [35.4, 90.0], [35.5, 90.0], [35.6, 90.0], [35.7, 90.0], [35.8, 90.0], [35.9, 90.0], [36.0, 90.0], [36.1, 90.0], [36.2, 90.0], [36.3, 91.0], [36.4, 91.0], [36.5, 91.0], [36.6, 91.0], [36.7, 91.0], [36.8, 91.0], [36.9, 91.0], [37.0, 91.0], [37.1, 91.0], [37.2, 91.0], [37.3, 91.0], [37.4, 91.0], [37.5, 91.0], [37.6, 91.0], [37.7, 92.0], [37.8, 92.0], [37.9, 92.0], [38.0, 92.0], [38.1, 92.0], [38.2, 92.0], [38.3, 92.0], [38.4, 92.0], [38.5, 92.0], [38.6, 92.0], [38.7, 92.0], [38.8, 92.0], [38.9, 92.0], [39.0, 93.0], [39.1, 93.0], [39.2, 93.0], [39.3, 93.0], [39.4, 93.0], [39.5, 93.0], [39.6, 93.0], [39.7, 93.0], [39.8, 93.0], [39.9, 93.0], [40.0, 93.0], [40.1, 93.0], [40.2, 94.0], [40.3, 94.0], [40.4, 94.0], [40.5, 94.0], [40.6, 94.0], [40.7, 94.0], [40.8, 94.0], [40.9, 94.0], [41.0, 94.0], [41.1, 94.0], [41.2, 94.0], [41.3, 94.0], [41.4, 95.0], [41.5, 95.0], [41.6, 95.0], [41.7, 95.0], [41.8, 95.0], [41.9, 95.0], [42.0, 95.0], [42.1, 95.0], [42.2, 95.0], [42.3, 95.0], [42.4, 95.0], [42.5, 95.0], [42.6, 96.0], [42.7, 96.0], [42.8, 96.0], [42.9, 96.0], [43.0, 96.0], [43.1, 96.0], [43.2, 96.0], [43.3, 96.0], [43.4, 96.0], [43.5, 96.0], [43.6, 96.0], [43.7, 96.0], [43.8, 97.0], [43.9, 97.0], [44.0, 97.0], [44.1, 97.0], [44.2, 97.0], [44.3, 97.0], [44.4, 97.0], [44.5, 97.0], [44.6, 97.0], [44.7, 97.0], [44.8, 97.0], [44.9, 98.0], [45.0, 98.0], [45.1, 98.0], [45.2, 98.0], [45.3, 98.0], [45.4, 98.0], [45.5, 98.0], [45.6, 98.0], [45.7, 98.0], [45.8, 98.0], [45.9, 99.0], [46.0, 99.0], [46.1, 99.0], [46.2, 99.0], [46.3, 99.0], [46.4, 99.0], [46.5, 99.0], [46.6, 99.0], [46.7, 99.0], [46.8, 99.0], [46.9, 100.0], [47.0, 100.0], [47.1, 100.0], [47.2, 100.0], [47.3, 100.0], [47.4, 100.0], [47.5, 100.0], [47.6, 100.0], [47.7, 100.0], [47.8, 100.0], [47.9, 101.0], [48.0, 101.0], [48.1, 101.0], [48.2, 101.0], [48.3, 101.0], [48.4, 101.0], [48.5, 101.0], [48.6, 101.0], [48.7, 101.0], [48.8, 102.0], [48.9, 102.0], [49.0, 102.0], [49.1, 102.0], [49.2, 102.0], [49.3, 102.0], [49.4, 102.0], [49.5, 102.0], [49.6, 102.0], [49.7, 102.0], [49.8, 103.0], [49.9, 103.0], [50.0, 103.0], [50.1, 103.0], [50.2, 103.0], [50.3, 103.0], [50.4, 103.0], [50.5, 103.0], [50.6, 103.0], [50.7, 104.0], [50.8, 104.0], [50.9, 104.0], [51.0, 104.0], [51.1, 104.0], [51.2, 104.0], [51.3, 104.0], [51.4, 104.0], [51.5, 104.0], [51.6, 104.0], [51.7, 105.0], [51.8, 105.0], [51.9, 105.0], [52.0, 105.0], [52.1, 105.0], [52.2, 105.0], [52.3, 105.0], [52.4, 105.0], [52.5, 105.0], [52.6, 105.0], [52.7, 105.0], [52.8, 105.0], [52.9, 105.0], [53.0, 106.0], [53.1, 106.0], [53.2, 106.0], [53.3, 106.0], [53.4, 106.0], [53.5, 106.0], [53.6, 106.0], [53.7, 106.0], [53.8, 106.0], [53.9, 106.0], [54.0, 106.0], [54.1, 106.0], [54.2, 106.0], [54.3, 106.0], [54.4, 106.0], [54.5, 106.0], [54.6, 106.0], [54.7, 106.0], [54.8, 107.0], [54.9, 107.0], [55.0, 107.0], [55.1, 107.0], [55.2, 107.0], [55.3, 107.0], [55.4, 107.0], [55.5, 107.0], [55.6, 107.0], [55.7, 107.0], [55.8, 107.0], [55.9, 107.0], [56.0, 107.0], [56.1, 107.0], [56.2, 107.0], [56.3, 107.0], [56.4, 107.0], [56.5, 107.0], [56.6, 107.0], [56.7, 107.0], [56.8, 107.0], [56.9, 107.0], [57.0, 107.0], [57.1, 107.0], [57.2, 107.0], [57.3, 107.0], [57.4, 107.0], [57.5, 107.0], [57.6, 107.0], [57.7, 107.0], [57.8, 107.0], [57.9, 108.0], [58.0, 108.0], [58.1, 108.0], [58.2, 108.0], [58.3, 108.0], [58.4, 108.0], [58.5, 108.0], [58.6, 108.0], [58.7, 108.0], [58.8, 108.0], [58.9, 108.0], [59.0, 108.0], [59.1, 108.0], [59.2, 108.0], [59.3, 108.0], [59.4, 108.0], [59.5, 108.0], [59.6, 108.0], [59.7, 108.0], [59.8, 108.0], [59.9, 108.0], [60.0, 108.0], [60.1, 108.0], [60.2, 108.0], [60.3, 108.0], [60.4, 108.0], [60.5, 108.0], [60.6, 108.0], [60.7, 108.0], [60.8, 108.0], [60.9, 108.0], [61.0, 108.0], [61.1, 108.0], [61.2, 108.0], [61.3, 108.0], [61.4, 108.0], [61.5, 108.0], [61.6, 108.0], [61.7, 108.0], [61.8, 108.0], [61.9, 108.0], [62.0, 108.0], [62.1, 108.0], [62.2, 108.0], [62.3, 108.0], [62.4, 108.0], [62.5, 108.0], [62.6, 108.0], [62.7, 109.0], [62.8, 109.0], [62.9, 109.0], [63.0, 109.0], [63.1, 109.0], [63.2, 109.0], [63.3, 109.0], [63.4, 109.0], [63.5, 109.0], [63.6, 109.0], [63.7, 109.0], [63.8, 109.0], [63.9, 109.0], [64.0, 109.0], [64.1, 109.0], [64.2, 109.0], [64.3, 109.0], [64.4, 109.0], [64.5, 109.0], [64.6, 109.0], [64.7, 109.0], [64.8, 109.0], [64.9, 109.0], [65.0, 109.0], [65.1, 109.0], [65.2, 109.0], [65.3, 109.0], [65.4, 109.0], [65.5, 109.0], [65.6, 109.0], [65.7, 109.0], [65.8, 109.0], [65.9, 109.0], [66.0, 109.0], [66.1, 109.0], [66.2, 109.0], [66.3, 109.0], [66.4, 109.0], [66.5, 109.0], [66.6, 109.0], [66.7, 109.0], [66.8, 109.0], [66.9, 109.0], [67.0, 109.0], [67.1, 109.0], [67.2, 109.0], [67.3, 109.0], [67.4, 109.0], [67.5, 109.0], [67.6, 109.0], [67.7, 109.0], [67.8, 109.0], [67.9, 109.0], [68.0, 109.0], [68.1, 109.0], [68.2, 109.0], [68.3, 109.0], [68.4, 109.0], [68.5, 109.0], [68.6, 109.0], [68.7, 109.0], [68.8, 110.0], [68.9, 110.0], [69.0, 110.0], [69.1, 110.0], [69.2, 110.0], [69.3, 110.0], [69.4, 110.0], [69.5, 110.0], [69.6, 110.0], [69.7, 110.0], [69.8, 110.0], [69.9, 110.0], [70.0, 110.0], [70.1, 110.0], [70.2, 110.0], [70.3, 110.0], [70.4, 110.0], [70.5, 110.0], [70.6, 110.0], [70.7, 110.0], [70.8, 110.0], [70.9, 110.0], [71.0, 110.0], [71.1, 110.0], [71.2, 110.0], [71.3, 110.0], [71.4, 110.0], [71.5, 110.0], [71.6, 110.0], [71.7, 110.0], [71.8, 110.0], [71.9, 110.0], [72.0, 110.0], [72.1, 110.0], [72.2, 110.0], [72.3, 110.0], [72.4, 110.0], [72.5, 110.0], [72.6, 110.0], [72.7, 110.0], [72.8, 110.0], [72.9, 110.0], [73.0, 110.0], [73.1, 110.0], [73.2, 110.0], [73.3, 110.0], [73.4, 110.0], [73.5, 110.0], [73.6, 110.0], [73.7, 110.0], [73.8, 110.0], [73.9, 110.0], [74.0, 110.0], [74.1, 110.0], [74.2, 110.0], [74.3, 110.0], [74.4, 110.0], [74.5, 110.0], [74.6, 111.0], [74.7, 111.0], [74.8, 111.0], [74.9, 111.0], [75.0, 111.0], [75.1, 111.0], [75.2, 111.0], [75.3, 111.0], [75.4, 111.0], [75.5, 111.0], [75.6, 111.0], [75.7, 111.0], [75.8, 111.0], [75.9, 111.0], [76.0, 111.0], [76.1, 111.0], [76.2, 111.0], [76.3, 111.0], [76.4, 111.0], [76.5, 111.0], [76.6, 111.0], [76.7, 111.0], [76.8, 111.0], [76.9, 111.0], [77.0, 111.0], [77.1, 111.0], [77.2, 111.0], [77.3, 111.0], [77.4, 111.0], [77.5, 111.0], [77.6, 111.0], [77.7, 111.0], [77.8, 111.0], [77.9, 111.0], [78.0, 111.0], [78.1, 111.0], [78.2, 111.0], [78.3, 111.0], [78.4, 111.0], [78.5, 111.0], [78.6, 111.0], [78.7, 111.0], [78.8, 111.0], [78.9, 111.0], [79.0, 111.0], [79.1, 111.0], [79.2, 111.0], [79.3, 111.0], [79.4, 111.0], [79.5, 111.0], [79.6, 112.0], [79.7, 112.0], [79.8, 112.0], [79.9, 112.0], [80.0, 112.0], [80.1, 112.0], [80.2, 112.0], [80.3, 112.0], [80.4, 112.0], [80.5, 112.0], [80.6, 112.0], [80.7, 112.0], [80.8, 112.0], [80.9, 112.0], [81.0, 112.0], [81.1, 112.0], [81.2, 112.0], [81.3, 112.0], [81.4, 112.0], [81.5, 112.0], [81.6, 112.0], [81.7, 112.0], [81.8, 112.0], [81.9, 112.0], [82.0, 112.0], [82.1, 112.0], [82.2, 112.0], [82.3, 112.0], [82.4, 112.0], [82.5, 112.0], [82.6, 112.0], [82.7, 112.0], [82.8, 112.0], [82.9, 112.0], [83.0, 112.0], [83.1, 112.0], [83.2, 112.0], [83.3, 112.0], [83.4, 112.0], [83.5, 112.0], [83.6, 112.0], [83.7, 112.0], [83.8, 112.0], [83.9, 112.0], [84.0, 113.0], [84.1, 113.0], [84.2, 113.0], [84.3, 113.0], [84.4, 113.0], [84.5, 113.0], [84.6, 113.0], [84.7, 113.0], [84.8, 113.0], [84.9, 113.0], [85.0, 113.0], [85.1, 113.0], [85.2, 113.0], [85.3, 113.0], [85.4, 113.0], [85.5, 113.0], [85.6, 113.0], [85.7, 113.0], [85.8, 113.0], [85.9, 113.0], [86.0, 113.0], [86.1, 113.0], [86.2, 113.0], [86.3, 113.0], [86.4, 113.0], [86.5, 113.0], [86.6, 113.0], [86.7, 113.0], [86.8, 113.0], [86.9, 113.0], [87.0, 113.0], [87.1, 113.0], [87.2, 113.0], [87.3, 113.0], [87.4, 114.0], [87.5, 114.0], [87.6, 114.0], [87.7, 114.0], [87.8, 114.0], [87.9, 114.0], [88.0, 114.0], [88.1, 114.0], [88.2, 114.0], [88.3, 114.0], [88.4, 114.0], [88.5, 114.0], [88.6, 114.0], [88.7, 114.0], [88.8, 114.0], [88.9, 114.0], [89.0, 114.0], [89.1, 114.0], [89.2, 114.0], [89.3, 114.0], [89.4, 114.0], [89.5, 114.0], [89.6, 114.0], [89.7, 114.0], [89.8, 114.0], [89.9, 115.0], [90.0, 115.0], [90.1, 115.0], [90.2, 115.0], [90.3, 115.0], [90.4, 115.0], [90.5, 115.0], [90.6, 115.0], [90.7, 115.0], [90.8, 115.0], [90.9, 115.0], [91.0, 115.0], [91.1, 115.0], [91.2, 115.0], [91.3, 115.0], [91.4, 115.0], [91.5, 116.0], [91.6, 116.0], [91.7, 116.0], [91.8, 116.0], [91.9, 116.0], [92.0, 116.0], [92.1, 116.0], [92.2, 116.0], [92.3, 116.0], [92.4, 116.0], [92.5, 116.0], [92.6, 116.0], [92.7, 116.0], [92.8, 117.0], [92.9, 117.0], [93.0, 117.0], [93.1, 117.0], [93.2, 117.0], [93.3, 117.0], [93.4, 117.0], [93.5, 117.0], [93.6, 117.0], [93.7, 117.0], [93.8, 118.0], [93.9, 118.0], [94.0, 118.0], [94.1, 118.0], [94.2, 118.0], [94.3, 118.0], [94.4, 118.0], [94.5, 118.0], [94.6, 119.0], [94.7, 119.0], [94.8, 119.0], [94.9, 119.0], [95.0, 119.0], [95.1, 119.0], [95.2, 119.0], [95.3, 119.0], [95.4, 120.0], [95.5, 120.0], [95.6, 120.0], [95.7, 120.0], [95.8, 120.0], [95.9, 120.0], [96.0, 121.0], [96.1, 121.0], [96.2, 121.0], [96.3, 121.0], [96.4, 121.0], [96.5, 121.0], [96.6, 122.0], [96.7, 122.0], [96.8, 122.0], [96.9, 122.0], [97.0, 122.0], [97.1, 123.0], [97.2, 123.0], [97.3, 123.0], [97.4, 123.0], [97.5, 124.0], [97.6, 124.0], [97.7, 124.0], [97.8, 124.0], [97.9, 125.0], [98.0, 125.0], [98.1, 125.0], [98.2, 126.0], [98.3, 126.0], [98.4, 126.0], [98.5, 127.0], [98.6, 127.0], [98.7, 128.0], [98.8, 128.0], [98.9, 129.0], [99.0, 130.0], [99.1, 130.0], [99.2, 131.0], [99.3, 133.0], [99.4, 135.0], [99.5, 137.0], [99.6, 141.0], [99.7, 149.0], [99.8, 159.0], [99.9, 179.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 157214.0, "series": [{"data": [[0.0, 138864.0], [1100.0, 10.0], [300.0, 2.0], [100.0, 157214.0], [1000.0, 1.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 11.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 296080.0, "series": [{"data": [[0.0, 296080.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 11.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.721859114015984, "minX": 1.55951442E12, "maxY": 50.0, "series": [{"data": [[1.55951442E12, 8.721859114015984], [1.5595149E12, 50.0], [1.55951472E12, 50.0], [1.55951478E12, 50.0], [1.5595146E12, 50.0], [1.55951466E12, 50.0], [1.55951448E12, 44.255809199318385], [1.55951496E12, 50.0], [1.55951454E12, 50.0], [1.55951502E12, 49.94972380113682], [1.55951484E12, 50.0]], "isOverall": false, "label": "Grupo de Usu\u00E1rios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55951502E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 8.534883720930234, "minX": 1.0, "maxY": 102.19920318725104, "series": [{"data": [[2.0, 8.534883720930234], [3.0, 10.097142857142856], [4.0, 13.234636871508386], [5.0, 16.47222222222222], [6.0, 16.365296803652967], [7.0, 24.416184971098257], [8.0, 25.227027027027006], [9.0, 27.37], [10.0, 30.49238578680204], [11.0, 25.166666666666664], [12.0, 28.825396825396833], [13.0, 28.93333333333333], [14.0, 36.774999999999984], [15.0, 33.72586872586872], [16.0, 40.83966244725737], [17.0, 36.911764705882355], [18.0, 38.26666666666666], [19.0, 47.288065843621375], [20.0, 48.469135802469175], [21.0, 50.09881422924903], [22.0, 44.24458204334367], [23.0, 43.90784982935155], [24.0, 43.524691358024725], [25.0, 60.145748987854276], [26.0, 63.87755102040815], [27.0, 62.906614785992225], [28.0, 65.74603174603176], [29.0, 71.6558704453441], [30.0, 58.85430463576159], [31.0, 57.01823708206688], [32.0, 65.128813559322], [33.0, 72.48717948717943], [34.0, 68.21594684385377], [35.0, 75.01444043321308], [36.0, 71.4290540540541], [37.0, 94.83771929824564], [38.0, 78.07118644067796], [39.0, 85.38351254480284], [40.0, 85.03942652329746], [41.0, 83.41414141414145], [42.0, 81.2875399361022], [43.0, 82.69841269841272], [44.0, 102.19920318725104], [45.0, 91.1320132013201], [46.0, 99.57913669064749], [47.0, 97.97526501766772], [48.0, 99.74132492113567], [49.0, 96.29333333333328], [50.0, 100.48185978619385], [1.0, 9.470588235294118]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}, {"data": [[49.04242952335411, 98.73535500910002]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5278.5, "minX": 1.55951442E12, "maxY": 1693464.4333333333, "series": [{"data": [[1.55951442E12, 152342.1], [1.5595149E12, 1598153.8166666667], [1.55951472E12, 1639364.7333333334], [1.55951478E12, 1607778.9166666667], [1.5595146E12, 1651921.6166666667], [1.55951466E12, 1693464.4333333333], [1.55951448E12, 1623544.1666666667], [1.55951496E12, 1676426.9], [1.55951454E12, 1686605.1666666667], [1.55951502E12, 1381920.9666666666], [1.55951484E12, 1667244.3333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55951442E12, 5278.5], [1.5595149E12, 55374.416666666664], [1.55951472E12, 56802.333333333336], [1.55951478E12, 55707.916666666664], [1.5595146E12, 57237.416666666664], [1.55951466E12, 58676.833333333336], [1.55951448E12, 56254.166666666664], [1.55951496E12, 58086.5], [1.55951454E12, 58439.166666666664], [1.55951502E12, 47882.166666666664], [1.55951484E12, 57768.333333333336]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55951502E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 23.460058097313016, "minX": 1.55951442E12, "maxY": 103.709667370461, "series": [{"data": [[1.55951442E12, 23.460058097313016], [1.5595149E12, 103.709667370461], [1.55951472E12, 101.12626535294947], [1.55951478E12, 103.10669189747185], [1.5595146E12, 100.3581689716378], [1.55951466E12, 97.85088521591383], [1.55951448E12, 89.39655877342383], [1.55951496E12, 98.92004883521376], [1.55951454E12, 98.30265660872426], [1.55951502E12, 102.91894163797903], [1.55951484E12, 99.44787657597881]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55951502E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 23.20043572984754, "minX": 1.55951442E12, "maxY": 103.61022463742998, "series": [{"data": [[1.55951442E12, 23.20043572984754], [1.5595149E12, 103.61022463742998], [1.55951472E12, 101.0267579970306], [1.55951478E12, 103.00756924135574], [1.5595146E12, 100.25774369621219], [1.55951466E12, 97.7557326713273], [1.55951448E12, 89.20289608177106], [1.55951496E12, 98.82033260740397], [1.55951454E12, 98.20485405050833], [1.55951502E12, 102.8197902489797], [1.55951484E12, 99.34790975447885]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55951502E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.8382435353454464, "minX": 1.55951442E12, "maxY": 2.639070442992009, "series": [{"data": [[1.55951442E12, 2.639070442992009], [1.5595149E12, 0.8734207884808414], [1.55951472E12, 0.950128222432171], [1.55951478E12, 0.938826767589882], [1.5595146E12, 0.9377825402672181], [1.55951466E12, 0.970667015091136], [1.55951448E12, 2.0703918228279603], [1.55951496E12, 0.9198508546162462], [1.55951454E12, 0.9508035421449679], [1.55951502E12, 0.8382435353454464], [1.55951484E12, 0.9388188453881924]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55951502E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.55951442E12, "maxY": 1140.0, "series": [{"data": [[1.55951442E12, 100.0], [1.5595149E12, 192.0], [1.55951472E12, 192.0], [1.55951478E12, 198.0], [1.5595146E12, 127.0], [1.55951466E12, 135.0], [1.55951448E12, 1140.0], [1.55951496E12, 147.0], [1.55951454E12, 127.0], [1.55951502E12, 197.0], [1.55951484E12, 130.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.55951442E12, 4.0], [1.5595149E12, 75.0], [1.55951472E12, 78.0], [1.55951478E12, 74.0], [1.5595146E12, 75.0], [1.55951466E12, 74.0], [1.55951448E12, 6.0], [1.55951496E12, 71.0], [1.55951454E12, 74.0], [1.55951502E12, 72.0], [1.55951484E12, 74.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.55951442E12, 38.0], [1.5595149E12, 117.0], [1.55951472E12, 114.0], [1.55951478E12, 124.0], [1.5595146E12, 113.0], [1.55951466E12, 112.0], [1.55951448E12, 114.0], [1.55951496E12, 114.0], [1.55951454E12, 113.0], [1.55951502E12, 123.0], [1.55951484E12, 113.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.55951442E12, 54.0], [1.5595149E12, 134.0], [1.55951472E12, 145.0], [1.55951478E12, 143.0], [1.5595146E12, 121.0], [1.55951466E12, 120.0], [1.55951448E12, 124.0], [1.55951496E12, 132.0], [1.55951454E12, 120.0], [1.55951502E12, 171.0], [1.55951484E12, 122.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.55951442E12, 42.0], [1.5595149E12, 122.0], [1.55951472E12, 120.0], [1.55951478E12, 129.0], [1.5595146E12, 115.0], [1.55951466E12, 115.0], [1.55951448E12, 118.0], [1.55951496E12, 117.0], [1.55951454E12, 114.0], [1.55951502E12, 127.0], [1.55951484E12, 114.95000000000073]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55951502E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 5.0, "minX": 38.0, "maxY": 131.0, "series": [{"data": [[38.0, 5.0], [231.0, 108.0], [250.0, 8.0], [294.0, 12.0], [304.0, 21.0], [332.0, 25.0], [337.0, 16.0], [378.0, 24.0], [380.0, 37.0], [383.0, 130.0], [373.0, 131.0], [381.0, 123.0], [394.0, 113.0], [408.0, 47.0], [409.0, 71.0], [402.0, 125.0], [406.0, 125.0], [412.0, 123.0], [403.0, 119.0], [407.0, 117.0], [421.0, 85.5], [419.0, 108.0], [425.0, 117.0], [430.0, 63.0], [431.0, 111.0], [423.0, 119.0], [427.0, 119.0], [422.0, 120.0], [445.0, 111.0], [447.0, 110.0], [441.0, 111.0], [440.0, 112.0], [446.0, 111.0], [433.0, 116.0], [435.0, 112.0], [434.0, 115.0], [436.0, 113.0], [437.0, 112.0], [438.0, 118.0], [432.0, 113.0], [442.0, 112.0], [443.0, 113.0], [463.0, 110.0], [459.0, 109.0], [450.0, 111.0], [449.0, 111.0], [451.0, 111.0], [448.0, 112.0], [455.0, 111.0], [454.0, 110.0], [457.0, 111.0], [456.0, 109.0], [458.0, 109.0], [453.0, 111.0], [460.0, 109.0], [461.0, 110.0], [462.0, 110.0], [479.0, 108.0], [473.0, 108.0], [476.0, 109.0], [478.0, 109.0], [477.0, 109.0], [464.0, 108.0], [471.0, 108.0], [466.0, 110.0], [467.0, 107.0], [465.0, 110.0], [472.0, 108.0], [475.0, 108.0], [474.0, 109.0], [468.0, 109.0], [469.0, 111.0], [470.0, 109.0], [483.0, 107.0], [485.0, 108.0], [484.0, 107.0], [486.0, 108.0], [491.0, 106.0], [490.0, 108.0], [487.0, 106.0], [482.0, 108.0], [495.0, 107.0], [494.0, 106.0], [493.0, 107.0], [492.0, 105.0], [480.0, 109.0], [481.0, 108.0], [488.0, 108.0], [489.0, 107.0], [497.0, 108.0], [504.0, 97.0], [498.0, 104.0], [508.0, 97.0], [509.0, 105.0], [499.0, 107.0], [505.0, 103.0], [506.0, 99.0], [507.0, 103.0], [502.0, 101.0], [496.0, 103.0], [503.0, 101.0], [510.0, 95.0], [511.0, 100.0], [500.0, 104.0], [501.0, 105.0], [519.0, 92.0], [513.0, 91.0], [526.0, 88.0], [525.0, 84.0], [524.0, 91.0], [523.0, 94.0], [512.0, 96.0], [527.0, 90.0], [521.0, 94.0], [520.0, 95.0], [522.0, 92.0], [537.0, 89.0], [538.0, 87.0], [539.0, 88.0], [540.0, 87.5], [542.0, 87.0], [543.0, 86.0], [528.0, 93.5], [529.0, 93.0], [533.0, 91.0], [530.0, 93.0], [531.0, 91.0], [532.0, 91.0], [518.0, 96.0], [517.0, 97.0], [516.0, 94.0], [514.0, 95.0], [515.0, 97.0], [534.0, 87.0], [535.0, 89.0], [550.0, 87.0], [568.0, 85.0], [570.0, 87.0], [571.0, 85.0], [572.0, 85.0], [544.0, 88.0], [575.0, 85.0], [547.0, 86.0], [555.0, 86.0], [556.0, 86.0], [557.0, 86.0], [558.0, 85.0], [554.0, 86.0], [553.0, 88.0], [548.0, 86.0], [549.0, 86.0], [563.0, 86.0], [567.0, 86.0], [566.0, 88.0], [562.0, 87.0], [561.0, 86.0], [560.0, 85.0], [546.0, 86.0], [581.0, 81.0], [578.0, 85.0], [588.0, 84.0], [596.0, 84.0], [576.0, 85.0], [595.0, 83.0], [579.0, 85.0], [602.0, 81.0], [592.0, 82.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 602.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 5.0, "minX": 38.0, "maxY": 131.0, "series": [{"data": [[38.0, 5.0], [231.0, 108.0], [250.0, 8.0], [294.0, 12.0], [304.0, 21.0], [332.0, 25.0], [337.0, 16.0], [378.0, 24.0], [380.0, 37.0], [383.0, 130.0], [373.0, 131.0], [381.0, 123.0], [394.0, 113.0], [408.0, 47.0], [409.0, 70.5], [402.0, 125.0], [406.0, 125.0], [412.0, 123.0], [403.0, 119.0], [407.0, 116.0], [421.0, 85.5], [419.0, 108.0], [425.0, 117.0], [430.0, 63.0], [431.0, 111.0], [423.0, 119.0], [427.0, 119.0], [422.0, 120.0], [445.0, 111.0], [447.0, 110.0], [441.0, 111.0], [440.0, 112.0], [446.0, 111.0], [433.0, 116.0], [435.0, 112.0], [434.0, 115.0], [436.0, 113.0], [437.0, 112.0], [438.0, 118.0], [432.0, 113.0], [442.0, 112.0], [443.0, 113.0], [463.0, 110.0], [459.0, 109.0], [450.0, 111.0], [449.0, 111.0], [451.0, 111.0], [448.0, 112.0], [455.0, 111.0], [454.0, 110.0], [457.0, 111.0], [456.0, 109.0], [458.0, 109.0], [453.0, 111.0], [460.0, 109.0], [461.0, 110.0], [462.0, 110.0], [479.0, 108.0], [473.0, 107.0], [476.0, 108.5], [478.0, 109.0], [477.0, 109.0], [464.0, 108.0], [471.0, 108.0], [466.0, 110.0], [467.0, 107.0], [465.0, 109.0], [472.0, 108.0], [475.0, 108.0], [474.0, 109.0], [468.0, 109.0], [469.0, 111.0], [470.0, 109.0], [483.0, 107.0], [485.0, 107.0], [484.0, 107.0], [486.0, 108.0], [491.0, 106.0], [490.0, 108.0], [487.0, 106.0], [482.0, 108.0], [495.0, 107.0], [494.0, 106.0], [493.0, 107.0], [492.0, 105.0], [480.0, 109.0], [481.0, 108.0], [488.0, 108.0], [489.0, 107.0], [497.0, 108.0], [504.0, 96.0], [498.0, 103.5], [508.0, 97.0], [509.0, 105.0], [499.0, 107.0], [505.0, 103.0], [506.0, 99.0], [507.0, 103.0], [502.0, 101.0], [496.0, 103.0], [503.0, 100.0], [510.0, 95.0], [511.0, 100.0], [500.0, 104.0], [501.0, 105.0], [519.0, 92.0], [513.0, 91.0], [526.0, 88.0], [525.0, 84.0], [524.0, 91.0], [523.0, 93.0], [512.0, 96.0], [527.0, 90.0], [521.0, 94.0], [520.0, 95.0], [522.0, 92.0], [537.0, 89.0], [538.0, 87.0], [539.0, 88.0], [540.0, 87.0], [542.0, 87.0], [543.0, 86.0], [528.0, 93.0], [529.0, 93.0], [533.0, 91.0], [530.0, 93.0], [531.0, 91.0], [532.0, 91.0], [518.0, 96.0], [517.0, 97.0], [516.0, 94.0], [514.0, 94.0], [515.0, 97.0], [534.0, 87.0], [535.0, 89.0], [550.0, 87.0], [568.0, 85.0], [570.0, 86.0], [571.0, 85.0], [572.0, 85.0], [544.0, 88.0], [575.0, 85.0], [547.0, 86.0], [555.0, 86.0], [556.0, 86.0], [557.0, 86.0], [558.0, 85.0], [554.0, 86.0], [553.0, 87.5], [548.0, 86.0], [549.0, 86.0], [563.0, 86.0], [567.0, 86.0], [566.0, 87.0], [562.0, 87.0], [561.0, 86.0], [560.0, 85.0], [546.0, 85.5], [581.0, 81.0], [578.0, 85.0], [588.0, 84.0], [596.0, 84.0], [576.0, 85.0], [595.0, 83.0], [579.0, 85.0], [602.0, 80.0], [592.0, 82.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 602.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 46.15, "minX": 1.55951442E12, "maxY": 510.23333333333335, "series": [{"data": [[1.55951442E12, 46.15], [1.5595149E12, 481.5], [1.55951472E12, 493.93333333333334], [1.55951478E12, 484.4166666666667], [1.5595146E12, 497.71666666666664], [1.55951466E12, 510.23333333333335], [1.55951448E12, 489.75], [1.55951496E12, 505.1166666666667], [1.55951454E12, 508.1666666666667], [1.55951502E12, 415.53333333333336], [1.55951484E12, 502.3333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55951502E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 45.9, "minX": 1.55951442E12, "maxY": 510.23333333333335, "series": [{"data": [[1.55951442E12, 45.9], [1.5595149E12, 481.51666666666665], [1.55951472E12, 493.93333333333334], [1.55951478E12, 484.4166666666667], [1.5595146E12, 497.71666666666664], [1.55951466E12, 510.23333333333335], [1.55951448E12, 489.1666666666667], [1.55951496E12, 505.1], [1.55951454E12, 508.1666666666667], [1.55951502E12, 416.3666666666667], [1.55951484E12, 502.3333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55951502E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 45.9, "minX": 1.55951442E12, "maxY": 510.23333333333335, "series": [{"data": [[1.55951442E12, 45.9], [1.5595149E12, 481.51666666666665], [1.55951472E12, 493.93333333333334], [1.55951478E12, 484.4166666666667], [1.5595146E12, 497.71666666666664], [1.55951466E12, 510.23333333333335], [1.55951448E12, 489.1666666666667], [1.55951496E12, 505.1], [1.55951454E12, 508.1666666666667], [1.55951502E12, 416.3666666666667], [1.55951484E12, 502.3333333333333]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55951502E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 45.9, "minX": 1.55951442E12, "maxY": 510.23333333333335, "series": [{"data": [[1.55951442E12, 45.9], [1.5595149E12, 481.51666666666665], [1.55951472E12, 493.93333333333334], [1.55951478E12, 484.4166666666667], [1.5595146E12, 497.71666666666664], [1.55951466E12, 510.23333333333335], [1.55951448E12, 489.1666666666667], [1.55951496E12, 505.1], [1.55951454E12, 508.1666666666667], [1.55951502E12, 416.3666666666667], [1.55951484E12, 502.3333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55951502E12, "title": "Total Transactions Per Second"}},
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
