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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 269.0, "series": [{"data": [[0.0, 2.0], [0.1, 12.0], [0.2, 15.0], [0.3, 18.0], [0.4, 21.0], [0.5, 26.0], [0.6, 28.0], [0.7, 32.0], [0.8, 36.0], [0.9, 40.0], [1.0, 47.0], [1.1, 51.0], [1.2, 53.0], [1.3, 56.0], [1.4, 60.0], [1.5, 67.0], [1.6, 78.0], [1.7, 82.0], [1.8, 87.0], [1.9, 91.0], [2.0, 94.0], [2.1, 97.0], [2.2, 102.0], [2.3, 104.0], [2.4, 107.0], [2.5, 109.0], [2.6, 113.0], [2.7, 116.0], [2.8, 121.0], [2.9, 126.0], [3.0, 130.0], [3.1, 131.0], [3.2, 131.0], [3.3, 131.0], [3.4, 132.0], [3.5, 132.0], [3.6, 132.0], [3.7, 132.0], [3.8, 132.0], [3.9, 132.0], [4.0, 132.0], [4.1, 132.0], [4.2, 132.0], [4.3, 133.0], [4.4, 133.0], [4.5, 133.0], [4.6, 133.0], [4.7, 133.0], [4.8, 133.0], [4.9, 133.0], [5.0, 133.0], [5.1, 133.0], [5.2, 133.0], [5.3, 133.0], [5.4, 134.0], [5.5, 134.0], [5.6, 134.0], [5.7, 134.0], [5.8, 134.0], [5.9, 134.0], [6.0, 134.0], [6.1, 134.0], [6.2, 134.0], [6.3, 134.0], [6.4, 134.0], [6.5, 134.0], [6.6, 135.0], [6.7, 135.0], [6.8, 135.0], [6.9, 135.0], [7.0, 135.0], [7.1, 135.0], [7.2, 135.0], [7.3, 135.0], [7.4, 135.0], [7.5, 135.0], [7.6, 135.0], [7.7, 135.0], [7.8, 135.0], [7.9, 135.0], [8.0, 135.0], [8.1, 135.0], [8.2, 135.0], [8.3, 136.0], [8.4, 136.0], [8.5, 136.0], [8.6, 136.0], [8.7, 136.0], [8.8, 136.0], [8.9, 136.0], [9.0, 136.0], [9.1, 136.0], [9.2, 136.0], [9.3, 136.0], [9.4, 136.0], [9.5, 136.0], [9.6, 136.0], [9.7, 136.0], [9.8, 136.0], [9.9, 136.0], [10.0, 136.0], [10.1, 136.0], [10.2, 136.0], [10.3, 136.0], [10.4, 136.0], [10.5, 136.0], [10.6, 136.0], [10.7, 136.0], [10.8, 136.0], [10.9, 137.0], [11.0, 137.0], [11.1, 137.0], [11.2, 137.0], [11.3, 137.0], [11.4, 137.0], [11.5, 137.0], [11.6, 137.0], [11.7, 137.0], [11.8, 137.0], [11.9, 137.0], [12.0, 137.0], [12.1, 137.0], [12.2, 137.0], [12.3, 137.0], [12.4, 137.0], [12.5, 137.0], [12.6, 137.0], [12.7, 137.0], [12.8, 137.0], [12.9, 137.0], [13.0, 137.0], [13.1, 137.0], [13.2, 137.0], [13.3, 137.0], [13.4, 137.0], [13.5, 137.0], [13.6, 137.0], [13.7, 137.0], [13.8, 137.0], [13.9, 137.0], [14.0, 137.0], [14.1, 137.0], [14.2, 137.0], [14.3, 137.0], [14.4, 138.0], [14.5, 138.0], [14.6, 138.0], [14.7, 138.0], [14.8, 138.0], [14.9, 138.0], [15.0, 138.0], [15.1, 138.0], [15.2, 138.0], [15.3, 138.0], [15.4, 138.0], [15.5, 138.0], [15.6, 138.0], [15.7, 138.0], [15.8, 138.0], [15.9, 138.0], [16.0, 138.0], [16.1, 138.0], [16.2, 138.0], [16.3, 138.0], [16.4, 138.0], [16.5, 138.0], [16.6, 138.0], [16.7, 138.0], [16.8, 138.0], [16.9, 138.0], [17.0, 138.0], [17.1, 138.0], [17.2, 138.0], [17.3, 138.0], [17.4, 138.0], [17.5, 138.0], [17.6, 138.0], [17.7, 138.0], [17.8, 138.0], [17.9, 138.0], [18.0, 138.0], [18.1, 139.0], [18.2, 139.0], [18.3, 139.0], [18.4, 139.0], [18.5, 139.0], [18.6, 139.0], [18.7, 139.0], [18.8, 139.0], [18.9, 139.0], [19.0, 139.0], [19.1, 139.0], [19.2, 139.0], [19.3, 139.0], [19.4, 139.0], [19.5, 139.0], [19.6, 139.0], [19.7, 139.0], [19.8, 139.0], [19.9, 139.0], [20.0, 139.0], [20.1, 139.0], [20.2, 139.0], [20.3, 139.0], [20.4, 139.0], [20.5, 139.0], [20.6, 139.0], [20.7, 139.0], [20.8, 139.0], [20.9, 139.0], [21.0, 139.0], [21.1, 139.0], [21.2, 139.0], [21.3, 139.0], [21.4, 140.0], [21.5, 140.0], [21.6, 140.0], [21.7, 140.0], [21.8, 140.0], [21.9, 140.0], [22.0, 140.0], [22.1, 140.0], [22.2, 140.0], [22.3, 140.0], [22.4, 140.0], [22.5, 140.0], [22.6, 140.0], [22.7, 140.0], [22.8, 140.0], [22.9, 140.0], [23.0, 140.0], [23.1, 140.0], [23.2, 140.0], [23.3, 140.0], [23.4, 140.0], [23.5, 140.0], [23.6, 140.0], [23.7, 140.0], [23.8, 140.0], [23.9, 141.0], [24.0, 141.0], [24.1, 141.0], [24.2, 141.0], [24.3, 141.0], [24.4, 141.0], [24.5, 141.0], [24.6, 141.0], [24.7, 141.0], [24.8, 141.0], [24.9, 141.0], [25.0, 141.0], [25.1, 141.0], [25.2, 141.0], [25.3, 141.0], [25.4, 141.0], [25.5, 141.0], [25.6, 141.0], [25.7, 141.0], [25.8, 142.0], [25.9, 142.0], [26.0, 142.0], [26.1, 142.0], [26.2, 142.0], [26.3, 142.0], [26.4, 142.0], [26.5, 142.0], [26.6, 142.0], [26.7, 142.0], [26.8, 142.0], [26.9, 142.0], [27.0, 142.0], [27.1, 142.0], [27.2, 142.0], [27.3, 143.0], [27.4, 143.0], [27.5, 143.0], [27.6, 143.0], [27.7, 143.0], [27.8, 143.0], [27.9, 143.0], [28.0, 143.0], [28.1, 143.0], [28.2, 143.0], [28.3, 143.0], [28.4, 143.0], [28.5, 143.0], [28.6, 143.0], [28.7, 144.0], [28.8, 144.0], [28.9, 144.0], [29.0, 144.0], [29.1, 144.0], [29.2, 144.0], [29.3, 144.0], [29.4, 144.0], [29.5, 144.0], [29.6, 144.0], [29.7, 144.0], [29.8, 145.0], [29.9, 145.0], [30.0, 145.0], [30.1, 145.0], [30.2, 145.0], [30.3, 145.0], [30.4, 145.0], [30.5, 145.0], [30.6, 145.0], [30.7, 145.0], [30.8, 145.0], [30.9, 146.0], [31.0, 146.0], [31.1, 146.0], [31.2, 146.0], [31.3, 146.0], [31.4, 146.0], [31.5, 146.0], [31.6, 146.0], [31.7, 146.0], [31.8, 146.0], [31.9, 146.0], [32.0, 146.0], [32.1, 147.0], [32.2, 147.0], [32.3, 147.0], [32.4, 147.0], [32.5, 147.0], [32.6, 147.0], [32.7, 147.0], [32.8, 147.0], [32.9, 147.0], [33.0, 147.0], [33.1, 147.0], [33.2, 148.0], [33.3, 148.0], [33.4, 148.0], [33.5, 148.0], [33.6, 148.0], [33.7, 148.0], [33.8, 148.0], [33.9, 148.0], [34.0, 148.0], [34.1, 148.0], [34.2, 149.0], [34.3, 149.0], [34.4, 149.0], [34.5, 149.0], [34.6, 149.0], [34.7, 149.0], [34.8, 149.0], [34.9, 149.0], [35.0, 149.0], [35.1, 149.0], [35.2, 150.0], [35.3, 150.0], [35.4, 150.0], [35.5, 150.0], [35.6, 150.0], [35.7, 150.0], [35.8, 150.0], [35.9, 150.0], [36.0, 150.0], [36.1, 151.0], [36.2, 151.0], [36.3, 151.0], [36.4, 151.0], [36.5, 151.0], [36.6, 151.0], [36.7, 151.0], [36.8, 151.0], [36.9, 151.0], [37.0, 152.0], [37.1, 152.0], [37.2, 152.0], [37.3, 152.0], [37.4, 152.0], [37.5, 152.0], [37.6, 152.0], [37.7, 152.0], [37.8, 153.0], [37.9, 153.0], [38.0, 153.0], [38.1, 153.0], [38.2, 153.0], [38.3, 153.0], [38.4, 153.0], [38.5, 153.0], [38.6, 154.0], [38.7, 154.0], [38.8, 154.0], [38.9, 154.0], [39.0, 154.0], [39.1, 154.0], [39.2, 154.0], [39.3, 155.0], [39.4, 155.0], [39.5, 155.0], [39.6, 155.0], [39.7, 155.0], [39.8, 155.0], [39.9, 155.0], [40.0, 155.0], [40.1, 156.0], [40.2, 156.0], [40.3, 156.0], [40.4, 156.0], [40.5, 156.0], [40.6, 156.0], [40.7, 156.0], [40.8, 157.0], [40.9, 157.0], [41.0, 157.0], [41.1, 157.0], [41.2, 157.0], [41.3, 157.0], [41.4, 157.0], [41.5, 158.0], [41.6, 158.0], [41.7, 158.0], [41.8, 158.0], [41.9, 158.0], [42.0, 158.0], [42.1, 158.0], [42.2, 159.0], [42.3, 159.0], [42.4, 159.0], [42.5, 159.0], [42.6, 159.0], [42.7, 159.0], [42.8, 159.0], [42.9, 159.0], [43.0, 160.0], [43.1, 160.0], [43.2, 160.0], [43.3, 160.0], [43.4, 160.0], [43.5, 160.0], [43.6, 160.0], [43.7, 161.0], [43.8, 161.0], [43.9, 161.0], [44.0, 161.0], [44.1, 161.0], [44.2, 161.0], [44.3, 161.0], [44.4, 162.0], [44.5, 162.0], [44.6, 162.0], [44.7, 162.0], [44.8, 162.0], [44.9, 162.0], [45.0, 162.0], [45.1, 163.0], [45.2, 163.0], [45.3, 163.0], [45.4, 163.0], [45.5, 163.0], [45.6, 163.0], [45.7, 163.0], [45.8, 164.0], [45.9, 164.0], [46.0, 164.0], [46.1, 164.0], [46.2, 164.0], [46.3, 164.0], [46.4, 164.0], [46.5, 164.0], [46.6, 165.0], [46.7, 165.0], [46.8, 165.0], [46.9, 165.0], [47.0, 165.0], [47.1, 165.0], [47.2, 165.0], [47.3, 166.0], [47.4, 166.0], [47.5, 166.0], [47.6, 166.0], [47.7, 166.0], [47.8, 166.0], [47.9, 166.0], [48.0, 167.0], [48.1, 167.0], [48.2, 167.0], [48.3, 167.0], [48.4, 167.0], [48.5, 167.0], [48.6, 167.0], [48.7, 168.0], [48.8, 168.0], [48.9, 168.0], [49.0, 168.0], [49.1, 168.0], [49.2, 168.0], [49.3, 168.0], [49.4, 169.0], [49.5, 169.0], [49.6, 169.0], [49.7, 169.0], [49.8, 169.0], [49.9, 169.0], [50.0, 170.0], [50.1, 170.0], [50.2, 170.0], [50.3, 170.0], [50.4, 170.0], [50.5, 170.0], [50.6, 170.0], [50.7, 171.0], [50.8, 171.0], [50.9, 171.0], [51.0, 171.0], [51.1, 171.0], [51.2, 171.0], [51.3, 171.0], [51.4, 172.0], [51.5, 172.0], [51.6, 172.0], [51.7, 172.0], [51.8, 172.0], [51.9, 172.0], [52.0, 172.0], [52.1, 173.0], [52.2, 173.0], [52.3, 173.0], [52.4, 173.0], [52.5, 173.0], [52.6, 173.0], [52.7, 173.0], [52.8, 174.0], [52.9, 174.0], [53.0, 174.0], [53.1, 174.0], [53.2, 174.0], [53.3, 174.0], [53.4, 174.0], [53.5, 175.0], [53.6, 175.0], [53.7, 175.0], [53.8, 175.0], [53.9, 175.0], [54.0, 175.0], [54.1, 175.0], [54.2, 176.0], [54.3, 176.0], [54.4, 176.0], [54.5, 176.0], [54.6, 176.0], [54.7, 176.0], [54.8, 176.0], [54.9, 177.0], [55.0, 177.0], [55.1, 177.0], [55.2, 177.0], [55.3, 177.0], [55.4, 177.0], [55.5, 177.0], [55.6, 177.0], [55.7, 178.0], [55.8, 178.0], [55.9, 178.0], [56.0, 178.0], [56.1, 178.0], [56.2, 178.0], [56.3, 178.0], [56.4, 178.0], [56.5, 178.0], [56.6, 178.0], [56.7, 178.0], [56.8, 178.0], [56.9, 179.0], [57.0, 179.0], [57.1, 179.0], [57.2, 179.0], [57.3, 179.0], [57.4, 179.0], [57.5, 179.0], [57.6, 179.0], [57.7, 179.0], [57.8, 179.0], [57.9, 179.0], [58.0, 179.0], [58.1, 179.0], [58.2, 179.0], [58.3, 179.0], [58.4, 179.0], [58.5, 179.0], [58.6, 179.0], [58.7, 180.0], [58.8, 180.0], [58.9, 180.0], [59.0, 180.0], [59.1, 180.0], [59.2, 180.0], [59.3, 180.0], [59.4, 180.0], [59.5, 180.0], [59.6, 180.0], [59.7, 180.0], [59.8, 180.0], [59.9, 180.0], [60.0, 180.0], [60.1, 180.0], [60.2, 180.0], [60.3, 180.0], [60.4, 180.0], [60.5, 180.0], [60.6, 180.0], [60.7, 181.0], [60.8, 181.0], [60.9, 181.0], [61.0, 181.0], [61.1, 181.0], [61.2, 181.0], [61.3, 181.0], [61.4, 181.0], [61.5, 181.0], [61.6, 181.0], [61.7, 181.0], [61.8, 181.0], [61.9, 181.0], [62.0, 181.0], [62.1, 181.0], [62.2, 181.0], [62.3, 181.0], [62.4, 181.0], [62.5, 181.0], [62.6, 181.0], [62.7, 181.0], [62.8, 182.0], [62.9, 182.0], [63.0, 182.0], [63.1, 182.0], [63.2, 182.0], [63.3, 182.0], [63.4, 182.0], [63.5, 182.0], [63.6, 182.0], [63.7, 182.0], [63.8, 182.0], [63.9, 182.0], [64.0, 182.0], [64.1, 182.0], [64.2, 182.0], [64.3, 182.0], [64.4, 182.0], [64.5, 182.0], [64.6, 182.0], [64.7, 182.0], [64.8, 182.0], [64.9, 182.0], [65.0, 182.0], [65.1, 182.0], [65.2, 182.0], [65.3, 182.0], [65.4, 182.0], [65.5, 182.0], [65.6, 182.0], [65.7, 182.0], [65.8, 183.0], [65.9, 183.0], [66.0, 183.0], [66.1, 183.0], [66.2, 183.0], [66.3, 183.0], [66.4, 183.0], [66.5, 183.0], [66.6, 183.0], [66.7, 183.0], [66.8, 183.0], [66.9, 183.0], [67.0, 183.0], [67.1, 183.0], [67.2, 183.0], [67.3, 183.0], [67.4, 183.0], [67.5, 183.0], [67.6, 183.0], [67.7, 183.0], [67.8, 183.0], [67.9, 183.0], [68.0, 183.0], [68.1, 183.0], [68.2, 183.0], [68.3, 183.0], [68.4, 183.0], [68.5, 183.0], [68.6, 183.0], [68.7, 183.0], [68.8, 183.0], [68.9, 183.0], [69.0, 183.0], [69.1, 183.0], [69.2, 183.0], [69.3, 183.0], [69.4, 183.0], [69.5, 183.0], [69.6, 183.0], [69.7, 183.0], [69.8, 183.0], [69.9, 183.0], [70.0, 183.0], [70.1, 183.0], [70.2, 184.0], [70.3, 184.0], [70.4, 184.0], [70.5, 184.0], [70.6, 184.0], [70.7, 184.0], [70.8, 184.0], [70.9, 184.0], [71.0, 184.0], [71.1, 184.0], [71.2, 184.0], [71.3, 184.0], [71.4, 184.0], [71.5, 184.0], [71.6, 184.0], [71.7, 184.0], [71.8, 184.0], [71.9, 184.0], [72.0, 184.0], [72.1, 184.0], [72.2, 184.0], [72.3, 184.0], [72.4, 184.0], [72.5, 184.0], [72.6, 184.0], [72.7, 184.0], [72.8, 184.0], [72.9, 184.0], [73.0, 184.0], [73.1, 184.0], [73.2, 184.0], [73.3, 184.0], [73.4, 184.0], [73.5, 184.0], [73.6, 184.0], [73.7, 184.0], [73.8, 184.0], [73.9, 184.0], [74.0, 184.0], [74.1, 184.0], [74.2, 184.0], [74.3, 184.0], [74.4, 184.0], [74.5, 184.0], [74.6, 184.0], [74.7, 184.0], [74.8, 184.0], [74.9, 184.0], [75.0, 184.0], [75.1, 184.0], [75.2, 185.0], [75.3, 185.0], [75.4, 185.0], [75.5, 185.0], [75.6, 185.0], [75.7, 185.0], [75.8, 185.0], [75.9, 185.0], [76.0, 185.0], [76.1, 185.0], [76.2, 185.0], [76.3, 185.0], [76.4, 185.0], [76.5, 185.0], [76.6, 185.0], [76.7, 185.0], [76.8, 185.0], [76.9, 185.0], [77.0, 185.0], [77.1, 185.0], [77.2, 185.0], [77.3, 185.0], [77.4, 185.0], [77.5, 185.0], [77.6, 185.0], [77.7, 185.0], [77.8, 185.0], [77.9, 185.0], [78.0, 185.0], [78.1, 185.0], [78.2, 185.0], [78.3, 185.0], [78.4, 185.0], [78.5, 185.0], [78.6, 185.0], [78.7, 185.0], [78.8, 185.0], [78.9, 185.0], [79.0, 185.0], [79.1, 185.0], [79.2, 185.0], [79.3, 185.0], [79.4, 185.0], [79.5, 185.0], [79.6, 185.0], [79.7, 185.0], [79.8, 185.0], [79.9, 185.0], [80.0, 185.0], [80.1, 185.0], [80.2, 186.0], [80.3, 186.0], [80.4, 186.0], [80.5, 186.0], [80.6, 186.0], [80.7, 186.0], [80.8, 186.0], [80.9, 186.0], [81.0, 186.0], [81.1, 186.0], [81.2, 186.0], [81.3, 186.0], [81.4, 186.0], [81.5, 186.0], [81.6, 186.0], [81.7, 186.0], [81.8, 186.0], [81.9, 186.0], [82.0, 186.0], [82.1, 186.0], [82.2, 186.0], [82.3, 186.0], [82.4, 186.0], [82.5, 186.0], [82.6, 186.0], [82.7, 186.0], [82.8, 186.0], [82.9, 186.0], [83.0, 186.0], [83.1, 186.0], [83.2, 186.0], [83.3, 186.0], [83.4, 186.0], [83.5, 186.0], [83.6, 186.0], [83.7, 186.0], [83.8, 186.0], [83.9, 186.0], [84.0, 186.0], [84.1, 186.0], [84.2, 187.0], [84.3, 187.0], [84.4, 187.0], [84.5, 187.0], [84.6, 187.0], [84.7, 187.0], [84.8, 187.0], [84.9, 187.0], [85.0, 187.0], [85.1, 187.0], [85.2, 187.0], [85.3, 187.0], [85.4, 187.0], [85.5, 187.0], [85.6, 187.0], [85.7, 187.0], [85.8, 187.0], [85.9, 187.0], [86.0, 187.0], [86.1, 187.0], [86.2, 187.0], [86.3, 187.0], [86.4, 187.0], [86.5, 187.0], [86.6, 187.0], [86.7, 187.0], [86.8, 187.0], [86.9, 188.0], [87.0, 188.0], [87.1, 188.0], [87.2, 188.0], [87.3, 188.0], [87.4, 188.0], [87.5, 188.0], [87.6, 188.0], [87.7, 188.0], [87.8, 188.0], [87.9, 188.0], [88.0, 188.0], [88.1, 188.0], [88.2, 188.0], [88.3, 188.0], [88.4, 188.0], [88.5, 188.0], [88.6, 188.0], [88.7, 188.0], [88.8, 189.0], [88.9, 189.0], [89.0, 189.0], [89.1, 189.0], [89.2, 189.0], [89.3, 189.0], [89.4, 189.0], [89.5, 189.0], [89.6, 189.0], [89.7, 189.0], [89.8, 189.0], [89.9, 189.0], [90.0, 189.0], [90.1, 190.0], [90.2, 190.0], [90.3, 190.0], [90.4, 190.0], [90.5, 190.0], [90.6, 190.0], [90.7, 190.0], [90.8, 190.0], [90.9, 190.0], [91.0, 190.0], [91.1, 190.0], [91.2, 191.0], [91.3, 191.0], [91.4, 191.0], [91.5, 191.0], [91.6, 191.0], [91.7, 191.0], [91.8, 191.0], [91.9, 191.0], [92.0, 192.0], [92.1, 192.0], [92.2, 192.0], [92.3, 192.0], [92.4, 192.0], [92.5, 192.0], [92.6, 192.0], [92.7, 193.0], [92.8, 193.0], [92.9, 193.0], [93.0, 193.0], [93.1, 193.0], [93.2, 193.0], [93.3, 193.0], [93.4, 194.0], [93.5, 194.0], [93.6, 194.0], [93.7, 194.0], [93.8, 194.0], [93.9, 194.0], [94.0, 194.0], [94.1, 194.0], [94.2, 195.0], [94.3, 195.0], [94.4, 195.0], [94.5, 195.0], [94.6, 195.0], [94.7, 195.0], [94.8, 195.0], [94.9, 196.0], [95.0, 196.0], [95.1, 196.0], [95.2, 196.0], [95.3, 196.0], [95.4, 196.0], [95.5, 196.0], [95.6, 197.0], [95.7, 197.0], [95.8, 197.0], [95.9, 197.0], [96.0, 197.0], [96.1, 198.0], [96.2, 198.0], [96.3, 198.0], [96.4, 198.0], [96.5, 198.0], [96.6, 199.0], [96.7, 199.0], [96.8, 199.0], [96.9, 199.0], [97.0, 200.0], [97.1, 200.0], [97.2, 200.0], [97.3, 200.0], [97.4, 201.0], [97.5, 201.0], [97.6, 201.0], [97.7, 202.0], [97.8, 202.0], [97.9, 203.0], [98.0, 203.0], [98.1, 203.0], [98.2, 204.0], [98.3, 204.0], [98.4, 205.0], [98.5, 205.0], [98.6, 205.0], [98.7, 206.0], [98.8, 207.0], [98.9, 207.0], [99.0, 208.0], [99.1, 209.0], [99.2, 211.0], [99.3, 212.0], [99.4, 214.0], [99.5, 218.0], [99.6, 226.0], [99.7, 234.0], [99.8, 239.0], [99.9, 250.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 7689.0, "minX": 0.0, "maxY": 339331.0, "series": [{"data": [[0.0, 7689.0], [100.0, 339331.0], [200.0, 11047.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 358067.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 358067.0, "series": [{"data": [[0.0, 358067.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 30.688164665523214, "minX": 1.56224802E12, "maxY": 100.0, "series": [{"data": [[1.5622485E12, 100.0], [1.5622482E12, 100.0], [1.56224832E12, 100.0], [1.56224838E12, 100.0], [1.56224802E12, 30.688164665523214], [1.56224826E12, 100.0], [1.56224856E12, 100.0], [1.56224814E12, 100.0], [1.56224862E12, 99.73914231084393], [1.56224808E12, 96.18729623384006], [1.56224844E12, 100.0]], "isOverall": false, "label": "Grupo de Usu\u00E1rios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.56224862E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 8.525252525252526, "minX": 1.0, "maxY": 210.71631205673745, "series": [{"data": [[2.0, 54.0], [3.0, 8.525252525252526], [4.0, 10.585585585585589], [5.0, 12.452173913043477], [6.0, 14.462809917355369], [7.0, 16.6076923076923], [8.0, 13.883720930232563], [9.0, 16.5], [10.0, 17.22222222222221], [11.0, 18.999999999999986], [12.0, 23.04424778761063], [13.0, 25.464052287581698], [14.0, 25.817610062893078], [15.0, 26.132947976878608], [16.0, 27.094674556213025], [17.0, 29.01734104046244], [18.0, 31.017543859649134], [19.0, 31.775862068965512], [20.0, 42.27007299270071], [21.0, 44.16312056737589], [22.0, 36.9774011299435], [23.0, 37.26373626373623], [24.0, 38.349726775956285], [25.0, 50.40689655172413], [26.0, 50.92052980132449], [27.0, 51.46762589928057], [28.0, 60.93835616438354], [29.0, 64.30935251798559], [30.0, 59.4], [31.0, 57.16363636363639], [32.0, 60.610062893081746], [33.0, 52.915789473684214], [34.0, 67.61971830985914], [35.0, 58.3968253968254], [36.0, 53.56930693069308], [37.0, 62.079545454545446], [38.0, 82.63703703703709], [39.0, 68.82681564245807], [40.0, 78.16], [41.0, 78.44871794871796], [42.0, 81.86754966887412], [43.0, 82.56050955414017], [44.0, 96.48550724637683], [45.0, 96.74999999999997], [46.0, 93.44137931034484], [47.0, 89.24374999999998], [48.0, 92.05095541401275], [49.0, 94.325], [50.0, 96.47398843930634], [51.0, 100.88549618320614], [52.0, 108.87500000000003], [53.0, 107.31999999999998], [54.0, 101.98064516129033], [55.0, 103.48124999999999], [56.0, 105.44303797468355], [57.0, 107.57575757575754], [58.0, 116.72727272727272], [59.0, 140.44961240310082], [60.0, 115.46794871794872], [61.0, 110.36842105263158], [62.0, 115.03105590062107], [63.0, 116.03105590062114], [64.0, 103.5492227979274], [65.0, 105.94444444444444], [66.0, 122.19374999999995], [67.0, 140.97916666666663], [68.0, 144.08333333333348], [69.0, 126.1724137931034], [70.0, 143.7659574468086], [71.0, 156.6296296296296], [72.0, 140.7012195121951], [73.0, 137.82993197278913], [74.0, 159.29655172413788], [75.0, 150.18181818181807], [76.0, 132.24324324324328], [77.0, 135.385093167702], [78.0, 148.30303030303037], [79.0, 131.4971751412429], [80.0, 130.9510869565218], [81.0, 125.20304568527919], [82.0, 160.7483870967741], [83.0, 169.17241379310335], [84.0, 144.0378378378378], [85.0, 176.9864864864864], [86.0, 165.61935483870963], [87.0, 162.44886363636365], [88.0, 160.68235294117642], [89.0, 135.41791044776122], [90.0, 166.3552631578947], [91.0, 168.2422360248448], [92.0, 174.00574712643686], [93.0, 179.92198581560282], [94.0, 188.81609195402308], [95.0, 180.7901234567901], [96.0, 173.7441860465116], [97.0, 172.70186335403733], [98.0, 210.71631205673745], [99.0, 197.98816568047334], [100.0, 166.37308967578568], [1.0, 65.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}, {"data": [[97.90968450038757, 163.38680191137377]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 16761.25, "minX": 1.56224802E12, "maxY": 2041406.2666666666, "series": [{"data": [[1.5622485E12, 1964239.5166666666], [1.5622482E12, 2026360.1333333333], [1.56224832E12, 1969439.2833333334], [1.56224838E12, 1952069.85], [1.56224802E12, 483744.25], [1.56224826E12, 2030453.5666666667], [1.56224856E12, 2041406.2666666666], [1.56224814E12, 1952346.4333333333], [1.56224862E12, 1417600.2166666666], [1.56224808E12, 1968167.0], [1.56224844E12, 2001246.3666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5622485E12, 68058.91666666667], [1.5622482E12, 70211.33333333333], [1.56224832E12, 68239.08333333333], [1.56224838E12, 67637.25], [1.56224802E12, 16761.25], [1.56224826E12, 70353.16666666667], [1.56224856E12, 70732.66666666667], [1.56224814E12, 67646.83333333333], [1.56224862E12, 49118.416666666664], [1.56224808E12, 68195.0], [1.56224844E12, 69341.16666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.56224862E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 57.94213836477991, "minX": 1.56224802E12, "maxY": 169.95514182889843, "series": [{"data": [[1.5622485E12, 168.9001098313093], [1.5622482E12, 163.69594889714017], [1.56224832E12, 168.40024717018403], [1.56224838E12, 169.95514182889843], [1.56224802E12, 57.94213836477991], [1.56224826E12, 163.34264152999665], [1.56224856E12, 162.49195209191424], [1.56224814E12, 169.89530798435928], [1.56224862E12, 167.33062785343668], [1.56224808E12, 161.24311410905082], [1.56224844E12, 165.73271048703864]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.56224862E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 57.80205831903956, "minX": 1.56224802E12, "maxY": 169.85632916772943, "series": [{"data": [[1.5622485E12, 168.7990368638932], [1.5622482E12, 163.5917776807158], [1.56224832E12, 168.29862652023763], [1.56224838E12, 169.85632916772943], [1.56224802E12, 57.80205831903956], [1.56224826E12, 163.24660818395108], [1.56224856E12, 162.39142098417545], [1.56224814E12, 169.80143933813113], [1.56224862E12, 167.22484098802082], [1.56224808E12, 161.14173693086], [1.56224844E12, 165.63466747747202]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.56224862E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.43849358156932255, "minX": 1.56224802E12, "maxY": 1.1994282447112636, "series": [{"data": [[1.5622485E12, 0.44577431073812324], [1.5622482E12, 0.45815134308801037], [1.56224832E12, 0.4434176895205453], [1.56224838E12, 0.43849358156932255], [1.56224802E12, 1.1994282447112636], [1.56224826E12, 0.4608783305181696], [1.56224856E12, 0.4446401474094935], [1.56224814E12, 0.44848982829943007], [1.56224862E12, 0.45217934210012783], [1.56224808E12, 0.53170320404722], [1.56224844E12, 0.4534800154790212]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.56224862E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.56224802E12, "maxY": 269.0, "series": [{"data": [[1.5622485E12, 240.0], [1.5622482E12, 256.0], [1.56224832E12, 245.0], [1.56224838E12, 240.0], [1.56224802E12, 136.0], [1.56224826E12, 228.0], [1.56224856E12, 262.0], [1.56224814E12, 260.0], [1.56224862E12, 269.0], [1.56224808E12, 264.0], [1.56224844E12, 241.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5622485E12, 124.0], [1.5622482E12, 122.0], [1.56224832E12, 129.0], [1.56224838E12, 130.0], [1.56224802E12, 2.0], [1.56224826E12, 128.0], [1.56224856E12, 128.0], [1.56224814E12, 129.0], [1.56224862E12, 65.0], [1.56224808E12, 89.0], [1.56224844E12, 131.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5622485E12, 190.0], [1.5622482E12, 193.0], [1.56224832E12, 190.0], [1.56224838E12, 195.0], [1.56224802E12, 103.0], [1.56224826E12, 186.0], [1.56224856E12, 184.0], [1.56224814E12, 196.0], [1.56224862E12, 191.0], [1.56224808E12, 189.0], [1.56224844E12, 188.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5622485E12, 206.0], [1.5622482E12, 211.9900000000016], [1.56224832E12, 209.0], [1.56224838E12, 208.0], [1.56224802E12, 121.53999999999905], [1.56224826E12, 202.0], [1.56224856E12, 196.0], [1.56224814E12, 215.0], [1.56224862E12, 202.0], [1.56224808E12, 205.0], [1.56224844E12, 211.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5622485E12, 196.0], [1.5622482E12, 197.0], [1.56224832E12, 197.0], [1.56224838E12, 199.0], [1.56224802E12, 107.0], [1.56224826E12, 192.0], [1.56224856E12, 185.0], [1.56224814E12, 201.0], [1.56224862E12, 195.0], [1.56224808E12, 195.0], [1.56224844E12, 195.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.56224862E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 10.0, "minX": 296.0, "maxY": 203.0, "series": [{"data": [[296.0, 10.0], [460.0, 14.0], [493.0, 52.0], [485.0, 90.0], [489.0, 139.0], [494.0, 148.0], [486.0, 194.0], [495.0, 203.0], [511.0, 122.5], [510.0, 91.0], [506.0, 180.0], [505.0, 107.0], [509.0, 165.0], [500.0, 146.0], [508.0, 197.0], [503.0, 196.0], [507.0, 198.0], [513.0, 201.0], [525.0, 184.0], [524.0, 182.0], [520.0, 191.0], [522.0, 191.0], [521.0, 186.0], [523.0, 190.0], [530.0, 184.0], [529.0, 188.0], [528.0, 187.0], [532.0, 187.0], [531.0, 187.0], [542.0, 184.0], [543.0, 185.0], [518.0, 103.0], [515.0, 185.0], [516.0, 193.0], [517.0, 196.0], [514.0, 195.0], [539.0, 186.0], [538.0, 186.0], [540.0, 184.0], [536.0, 186.0], [519.0, 189.0], [537.0, 186.0], [541.0, 184.0], [512.0, 190.0], [526.0, 187.0], [527.0, 188.0], [533.0, 185.0], [534.0, 184.0], [535.0, 188.0], [570.0, 90.0], [562.0, 183.0], [563.0, 156.0], [567.0, 177.0], [565.0, 184.0], [564.0, 182.0], [553.0, 183.0], [552.0, 181.0], [554.0, 183.0], [559.0, 182.0], [558.0, 183.0], [555.0, 183.0], [557.0, 184.0], [549.0, 179.0], [546.0, 184.0], [548.0, 184.0], [547.0, 183.0], [545.0, 184.0], [544.0, 184.0], [551.0, 183.0], [568.0, 182.0], [550.0, 183.0], [561.0, 184.0], [575.0, 179.0], [560.0, 183.0], [574.0, 184.0], [572.0, 182.0], [573.0, 173.5], [571.0, 182.0], [579.0, 180.0], [590.0, 162.0], [584.0, 158.0], [585.0, 174.0], [586.0, 180.0], [576.0, 165.0], [591.0, 176.0], [600.0, 171.0], [583.0, 181.0], [582.0, 180.0], [581.0, 178.0], [580.0, 174.0], [577.0, 180.0], [578.0, 178.0], [601.0, 172.0], [602.0, 171.0], [588.0, 165.0], [589.0, 177.0], [594.0, 166.0], [597.0, 164.0], [598.0, 174.0], [599.0, 170.0], [595.0, 169.0], [596.0, 179.0], [603.0, 163.0], [587.0, 173.0], [592.0, 174.0], [593.0, 174.0], [607.0, 174.0], [604.0, 170.0], [606.0, 164.0], [605.0, 163.0], [615.0, 157.0], [609.0, 165.0], [636.0, 157.0], [608.0, 170.0], [623.0, 164.0], [631.0, 156.0], [630.0, 158.0], [628.0, 157.0], [629.0, 153.0], [627.0, 161.0], [634.0, 154.0], [635.0, 152.0], [632.0, 152.0], [633.0, 150.0], [610.0, 165.0], [611.0, 164.0], [613.0, 166.0], [614.0, 163.0], [612.0, 155.0], [626.0, 160.0], [637.0, 152.0], [624.0, 156.0], [625.0, 160.0], [621.0, 158.0], [620.0, 157.0], [617.0, 159.0], [618.0, 154.0], [616.0, 155.0], [619.0, 163.0], [622.0, 157.0], [644.0, 152.0], [658.0, 143.0], [657.0, 141.0], [645.0, 149.0], [646.0, 151.0], [666.0, 139.0], [671.0, 146.0], [668.0, 143.0], [656.0, 146.0], [643.0, 143.0], [648.0, 142.0], [640.0, 143.0], [649.0, 146.0], [652.0, 148.0], [650.0, 147.0], [651.0, 151.0], [654.0, 147.0], [653.0, 142.0], [659.0, 148.0], [661.0, 145.0], [662.0, 139.0], [642.0, 153.0], [641.0, 151.0], [678.0, 140.0], [692.0, 138.0], [676.0, 146.0], [672.0, 141.0], [677.0, 139.0], [701.0, 142.0], [690.0, 137.0], [679.0, 140.0], [693.0, 137.0], [684.0, 140.0], [680.0, 141.0], [682.0, 140.0], [683.0, 138.0], [687.0, 140.0], [686.0, 140.0], [694.0, 138.0], [695.0, 141.0], [730.0, 137.0], [723.0, 138.0], [726.0, 137.0], [727.0, 138.0], [735.0, 137.0], [734.0, 136.0], [722.0, 138.0], [731.0, 137.0], [732.0, 136.0], [719.0, 138.0], [707.0, 140.0], [706.0, 138.0], [718.0, 137.0], [717.0, 140.0], [715.0, 138.0], [712.0, 136.0], [714.0, 138.0], [724.0, 136.0], [708.0, 138.0], [729.0, 137.0], [728.0, 137.0], [709.0, 139.0], [710.0, 140.0], [738.0, 136.0], [737.0, 136.0], [736.0, 137.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 738.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 9.0, "minX": 296.0, "maxY": 203.0, "series": [{"data": [[296.0, 9.0], [460.0, 14.0], [493.0, 52.0], [485.0, 90.0], [489.0, 139.0], [494.0, 148.0], [486.0, 194.0], [495.0, 203.0], [511.0, 122.5], [510.0, 91.0], [506.0, 180.0], [505.0, 107.0], [509.0, 165.0], [500.0, 146.0], [508.0, 196.0], [503.0, 195.0], [507.0, 198.0], [513.0, 201.0], [525.0, 184.0], [524.0, 182.0], [520.0, 191.0], [522.0, 191.0], [521.0, 186.0], [523.0, 190.0], [530.0, 184.0], [529.0, 188.0], [528.0, 187.0], [532.0, 187.0], [531.0, 187.0], [542.0, 184.0], [543.0, 185.0], [518.0, 103.0], [515.0, 185.0], [516.0, 193.0], [517.0, 196.0], [514.0, 195.0], [539.0, 186.0], [538.0, 186.0], [540.0, 184.0], [536.0, 186.0], [519.0, 188.0], [537.0, 186.0], [541.0, 184.0], [512.0, 189.0], [526.0, 187.0], [527.0, 188.0], [533.0, 185.0], [534.0, 183.0], [535.0, 188.0], [570.0, 89.5], [562.0, 182.5], [563.0, 156.0], [567.0, 177.0], [565.0, 184.0], [564.0, 182.0], [553.0, 183.0], [552.0, 181.0], [554.0, 183.0], [559.0, 182.0], [558.0, 183.0], [555.0, 183.0], [557.0, 184.0], [549.0, 179.0], [546.0, 184.0], [548.0, 184.0], [547.0, 183.0], [545.0, 184.0], [544.0, 184.0], [551.0, 183.0], [568.0, 182.0], [550.0, 183.0], [561.0, 184.0], [575.0, 179.0], [560.0, 182.0], [574.0, 184.0], [572.0, 182.0], [573.0, 173.5], [571.0, 182.0], [579.0, 180.0], [590.0, 162.0], [584.0, 158.0], [585.0, 174.0], [586.0, 179.5], [576.0, 165.0], [591.0, 176.0], [600.0, 171.0], [583.0, 181.0], [582.0, 180.0], [581.0, 178.0], [580.0, 174.0], [577.0, 180.0], [578.0, 178.0], [601.0, 172.0], [602.0, 171.0], [588.0, 165.0], [589.0, 177.0], [594.0, 166.0], [597.0, 164.0], [598.0, 174.0], [599.0, 170.0], [595.0, 169.0], [596.0, 179.0], [603.0, 163.0], [587.0, 173.0], [592.0, 174.0], [593.0, 174.0], [607.0, 174.0], [604.0, 170.0], [606.0, 164.0], [605.0, 163.0], [615.0, 157.0], [609.0, 165.0], [636.0, 157.0], [608.0, 170.0], [623.0, 164.0], [631.0, 156.0], [630.0, 158.0], [628.0, 156.5], [629.0, 153.0], [627.0, 161.0], [634.0, 154.0], [635.0, 152.0], [632.0, 152.0], [633.0, 150.0], [610.0, 165.0], [611.0, 164.0], [613.0, 166.0], [614.0, 163.0], [612.0, 155.0], [626.0, 160.0], [637.0, 152.0], [624.0, 156.0], [625.0, 160.0], [621.0, 158.0], [620.0, 157.0], [617.0, 159.0], [618.0, 154.0], [616.0, 155.0], [619.0, 163.0], [622.0, 157.0], [644.0, 152.0], [658.0, 142.5], [657.0, 141.0], [645.0, 149.0], [646.0, 151.0], [666.0, 139.0], [671.0, 145.0], [668.0, 143.0], [656.0, 146.0], [643.0, 143.0], [648.0, 142.0], [640.0, 143.0], [649.0, 146.0], [652.0, 148.0], [650.0, 146.0], [651.0, 151.0], [654.0, 147.0], [653.0, 142.0], [659.0, 148.0], [661.0, 145.0], [662.0, 139.0], [642.0, 153.0], [641.0, 150.5], [678.0, 140.0], [692.0, 138.0], [676.0, 146.0], [672.0, 141.0], [677.0, 139.0], [701.0, 141.5], [690.0, 137.0], [679.0, 140.0], [693.0, 137.0], [684.0, 140.0], [680.0, 141.0], [682.0, 140.0], [683.0, 138.0], [687.0, 140.0], [686.0, 140.0], [694.0, 138.0], [695.0, 141.0], [730.0, 137.0], [723.0, 138.0], [726.0, 137.0], [727.0, 138.0], [735.0, 136.0], [734.0, 136.0], [722.0, 138.0], [731.0, 137.0], [732.0, 136.0], [719.0, 138.0], [707.0, 140.0], [706.0, 138.0], [718.0, 137.0], [717.0, 140.0], [715.0, 137.0], [712.0, 136.0], [714.0, 138.0], [724.0, 136.0], [708.0, 138.0], [729.0, 137.0], [728.0, 137.0], [709.0, 139.0], [710.0, 140.0], [738.0, 136.0], [737.0, 136.0], [736.0, 137.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 738.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 146.73333333333332, "minX": 1.56224802E12, "maxY": 615.0666666666667, "series": [{"data": [[1.5622485E12, 591.8166666666667], [1.5622482E12, 610.5333333333333], [1.56224832E12, 593.3666666666667], [1.56224838E12, 588.1666666666666], [1.56224802E12, 146.73333333333332], [1.56224826E12, 611.7833333333333], [1.56224856E12, 615.0666666666667], [1.56224814E12, 588.2166666666667], [1.56224862E12, 425.45], [1.56224808E12, 593.6833333333333], [1.56224844E12, 602.9666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.56224862E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 145.75, "minX": 1.56224802E12, "maxY": 615.0666666666667, "series": [{"data": [[1.5622485E12, 591.8166666666667], [1.5622482E12, 610.5333333333333], [1.56224832E12, 593.3833333333333], [1.56224838E12, 588.15], [1.56224802E12, 145.75], [1.56224826E12, 611.7666666666667], [1.56224856E12, 615.0666666666667], [1.56224814E12, 588.2333333333333], [1.56224862E12, 427.1166666666667], [1.56224808E12, 593.0], [1.56224844E12, 602.9666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.56224862E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 145.75, "minX": 1.56224802E12, "maxY": 615.0666666666667, "series": [{"data": [[1.5622485E12, 591.8166666666667], [1.5622482E12, 610.5333333333333], [1.56224832E12, 593.3833333333333], [1.56224838E12, 588.15], [1.56224802E12, 145.75], [1.56224826E12, 611.7666666666667], [1.56224856E12, 615.0666666666667], [1.56224814E12, 588.2333333333333], [1.56224862E12, 427.1166666666667], [1.56224808E12, 593.0], [1.56224844E12, 602.9666666666667]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.56224862E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 145.75, "minX": 1.56224802E12, "maxY": 615.0666666666667, "series": [{"data": [[1.5622485E12, 591.8166666666667], [1.5622482E12, 610.5333333333333], [1.56224832E12, 593.3833333333333], [1.56224838E12, 588.15], [1.56224802E12, 145.75], [1.56224826E12, 611.7666666666667], [1.56224856E12, 615.0666666666667], [1.56224814E12, 588.2333333333333], [1.56224862E12, 427.1166666666667], [1.56224808E12, 593.0], [1.56224844E12, 602.9666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.56224862E12, "title": "Total Transactions Per Second"}},
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

