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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 477.0, "series": [{"data": [[0.0, 6.0], [0.1, 25.0], [0.2, 35.0], [0.3, 44.0], [0.4, 59.0], [0.5, 66.0], [0.6, 70.0], [0.7, 75.0], [0.8, 80.0], [0.9, 84.0], [1.0, 89.0], [1.1, 100.0], [1.2, 106.0], [1.3, 111.0], [1.4, 120.0], [1.5, 126.0], [1.6, 131.0], [1.7, 134.0], [1.8, 138.0], [1.9, 143.0], [2.0, 146.0], [2.1, 150.0], [2.2, 155.0], [2.3, 157.0], [2.4, 160.0], [2.5, 164.0], [2.6, 173.0], [2.7, 179.0], [2.8, 184.0], [2.9, 188.0], [3.0, 193.0], [3.1, 201.0], [3.2, 201.0], [3.3, 202.0], [3.4, 202.0], [3.5, 202.0], [3.6, 203.0], [3.7, 203.0], [3.8, 203.0], [3.9, 203.0], [4.0, 203.0], [4.1, 203.0], [4.2, 203.0], [4.3, 203.0], [4.4, 203.0], [4.5, 203.0], [4.6, 203.0], [4.7, 203.0], [4.8, 204.0], [4.9, 204.0], [5.0, 204.0], [5.1, 204.0], [5.2, 204.0], [5.3, 204.0], [5.4, 204.0], [5.5, 204.0], [5.6, 204.0], [5.7, 204.0], [5.8, 204.0], [5.9, 204.0], [6.0, 204.0], [6.1, 204.0], [6.2, 204.0], [6.3, 204.0], [6.4, 204.0], [6.5, 204.0], [6.6, 204.0], [6.7, 204.0], [6.8, 204.0], [6.9, 205.0], [7.0, 205.0], [7.1, 205.0], [7.2, 205.0], [7.3, 205.0], [7.4, 205.0], [7.5, 205.0], [7.6, 205.0], [7.7, 205.0], [7.8, 205.0], [7.9, 205.0], [8.0, 205.0], [8.1, 205.0], [8.2, 205.0], [8.3, 205.0], [8.4, 205.0], [8.5, 205.0], [8.6, 205.0], [8.7, 205.0], [8.8, 205.0], [8.9, 205.0], [9.0, 205.0], [9.1, 205.0], [9.2, 205.0], [9.3, 205.0], [9.4, 205.0], [9.5, 206.0], [9.6, 206.0], [9.7, 206.0], [9.8, 206.0], [9.9, 206.0], [10.0, 206.0], [10.1, 206.0], [10.2, 206.0], [10.3, 206.0], [10.4, 206.0], [10.5, 206.0], [10.6, 206.0], [10.7, 206.0], [10.8, 206.0], [10.9, 206.0], [11.0, 206.0], [11.1, 206.0], [11.2, 206.0], [11.3, 206.0], [11.4, 206.0], [11.5, 206.0], [11.6, 206.0], [11.7, 207.0], [11.8, 207.0], [11.9, 207.0], [12.0, 207.0], [12.1, 207.0], [12.2, 207.0], [12.3, 207.0], [12.4, 207.0], [12.5, 207.0], [12.6, 207.0], [12.7, 207.0], [12.8, 207.0], [12.9, 207.0], [13.0, 207.0], [13.1, 207.0], [13.2, 207.0], [13.3, 207.0], [13.4, 207.0], [13.5, 207.0], [13.6, 207.0], [13.7, 207.0], [13.8, 208.0], [13.9, 208.0], [14.0, 208.0], [14.1, 208.0], [14.2, 208.0], [14.3, 208.0], [14.4, 208.0], [14.5, 208.0], [14.6, 208.0], [14.7, 208.0], [14.8, 208.0], [14.9, 208.0], [15.0, 208.0], [15.1, 208.0], [15.2, 208.0], [15.3, 208.0], [15.4, 208.0], [15.5, 208.0], [15.6, 209.0], [15.7, 209.0], [15.8, 209.0], [15.9, 209.0], [16.0, 209.0], [16.1, 209.0], [16.2, 209.0], [16.3, 209.0], [16.4, 209.0], [16.5, 209.0], [16.6, 209.0], [16.7, 209.0], [16.8, 209.0], [16.9, 209.0], [17.0, 209.0], [17.1, 209.0], [17.2, 209.0], [17.3, 209.0], [17.4, 209.0], [17.5, 210.0], [17.6, 210.0], [17.7, 210.0], [17.8, 210.0], [17.9, 210.0], [18.0, 210.0], [18.1, 210.0], [18.2, 210.0], [18.3, 210.0], [18.4, 210.0], [18.5, 210.0], [18.6, 210.0], [18.7, 210.0], [18.8, 210.0], [18.9, 210.0], [19.0, 210.0], [19.1, 210.0], [19.2, 210.0], [19.3, 210.0], [19.4, 210.0], [19.5, 211.0], [19.6, 211.0], [19.7, 211.0], [19.8, 211.0], [19.9, 211.0], [20.0, 211.0], [20.1, 211.0], [20.2, 211.0], [20.3, 211.0], [20.4, 211.0], [20.5, 211.0], [20.6, 211.0], [20.7, 211.0], [20.8, 211.0], [20.9, 211.0], [21.0, 211.0], [21.1, 211.0], [21.2, 211.0], [21.3, 212.0], [21.4, 212.0], [21.5, 212.0], [21.6, 212.0], [21.7, 212.0], [21.8, 212.0], [21.9, 212.0], [22.0, 212.0], [22.1, 212.0], [22.2, 212.0], [22.3, 212.0], [22.4, 212.0], [22.5, 212.0], [22.6, 212.0], [22.7, 213.0], [22.8, 213.0], [22.9, 213.0], [23.0, 213.0], [23.1, 213.0], [23.2, 213.0], [23.3, 213.0], [23.4, 213.0], [23.5, 213.0], [23.6, 213.0], [23.7, 213.0], [23.8, 213.0], [23.9, 213.0], [24.0, 213.0], [24.1, 214.0], [24.2, 214.0], [24.3, 214.0], [24.4, 214.0], [24.5, 214.0], [24.6, 214.0], [24.7, 214.0], [24.8, 214.0], [24.9, 214.0], [25.0, 214.0], [25.1, 214.0], [25.2, 214.0], [25.3, 215.0], [25.4, 215.0], [25.5, 215.0], [25.6, 215.0], [25.7, 215.0], [25.8, 215.0], [25.9, 215.0], [26.0, 215.0], [26.1, 215.0], [26.2, 215.0], [26.3, 216.0], [26.4, 216.0], [26.5, 216.0], [26.6, 216.0], [26.7, 216.0], [26.8, 216.0], [26.9, 216.0], [27.0, 216.0], [27.1, 216.0], [27.2, 217.0], [27.3, 217.0], [27.4, 217.0], [27.5, 217.0], [27.6, 217.0], [27.7, 217.0], [27.8, 217.0], [27.9, 217.0], [28.0, 217.0], [28.1, 218.0], [28.2, 218.0], [28.3, 218.0], [28.4, 218.0], [28.5, 218.0], [28.6, 218.0], [28.7, 218.0], [28.8, 218.0], [28.9, 219.0], [29.0, 219.0], [29.1, 219.0], [29.2, 219.0], [29.3, 219.0], [29.4, 219.0], [29.5, 219.0], [29.6, 219.0], [29.7, 220.0], [29.8, 220.0], [29.9, 220.0], [30.0, 220.0], [30.1, 220.0], [30.2, 220.0], [30.3, 220.0], [30.4, 220.0], [30.5, 221.0], [30.6, 221.0], [30.7, 221.0], [30.8, 221.0], [30.9, 221.0], [31.0, 221.0], [31.1, 221.0], [31.2, 222.0], [31.3, 222.0], [31.4, 222.0], [31.5, 222.0], [31.6, 222.0], [31.7, 222.0], [31.8, 222.0], [31.9, 222.0], [32.0, 223.0], [32.1, 223.0], [32.2, 223.0], [32.3, 223.0], [32.4, 223.0], [32.5, 223.0], [32.6, 223.0], [32.7, 224.0], [32.8, 224.0], [32.9, 224.0], [33.0, 224.0], [33.1, 224.0], [33.2, 224.0], [33.3, 224.0], [33.4, 225.0], [33.5, 225.0], [33.6, 225.0], [33.7, 225.0], [33.8, 225.0], [33.9, 225.0], [34.0, 225.0], [34.1, 226.0], [34.2, 226.0], [34.3, 226.0], [34.4, 226.0], [34.5, 226.0], [34.6, 226.0], [34.7, 226.0], [34.8, 226.0], [34.9, 227.0], [35.0, 227.0], [35.1, 227.0], [35.2, 227.0], [35.3, 227.0], [35.4, 227.0], [35.5, 227.0], [35.6, 227.0], [35.7, 228.0], [35.8, 228.0], [35.9, 228.0], [36.0, 228.0], [36.1, 228.0], [36.2, 228.0], [36.3, 228.0], [36.4, 228.0], [36.5, 229.0], [36.6, 229.0], [36.7, 229.0], [36.8, 229.0], [36.9, 229.0], [37.0, 229.0], [37.1, 229.0], [37.2, 229.0], [37.3, 229.0], [37.4, 230.0], [37.5, 230.0], [37.6, 230.0], [37.7, 230.0], [37.8, 230.0], [37.9, 230.0], [38.0, 230.0], [38.1, 230.0], [38.2, 230.0], [38.3, 231.0], [38.4, 231.0], [38.5, 231.0], [38.6, 231.0], [38.7, 231.0], [38.8, 231.0], [38.9, 231.0], [39.0, 231.0], [39.1, 232.0], [39.2, 232.0], [39.3, 232.0], [39.4, 232.0], [39.5, 232.0], [39.6, 232.0], [39.7, 232.0], [39.8, 232.0], [39.9, 233.0], [40.0, 233.0], [40.1, 233.0], [40.2, 233.0], [40.3, 233.0], [40.4, 233.0], [40.5, 233.0], [40.6, 234.0], [40.7, 234.0], [40.8, 234.0], [40.9, 234.0], [41.0, 234.0], [41.1, 234.0], [41.2, 234.0], [41.3, 235.0], [41.4, 235.0], [41.5, 235.0], [41.6, 235.0], [41.7, 235.0], [41.8, 235.0], [41.9, 235.0], [42.0, 235.0], [42.1, 236.0], [42.2, 236.0], [42.3, 236.0], [42.4, 236.0], [42.5, 236.0], [42.6, 236.0], [42.7, 236.0], [42.8, 237.0], [42.9, 237.0], [43.0, 237.0], [43.1, 237.0], [43.2, 237.0], [43.3, 237.0], [43.4, 237.0], [43.5, 238.0], [43.6, 238.0], [43.7, 238.0], [43.8, 238.0], [43.9, 238.0], [44.0, 238.0], [44.1, 239.0], [44.2, 239.0], [44.3, 239.0], [44.4, 239.0], [44.5, 239.0], [44.6, 239.0], [44.7, 239.0], [44.8, 240.0], [44.9, 240.0], [45.0, 240.0], [45.1, 240.0], [45.2, 240.0], [45.3, 240.0], [45.4, 241.0], [45.5, 241.0], [45.6, 241.0], [45.7, 241.0], [45.8, 241.0], [45.9, 241.0], [46.0, 242.0], [46.1, 242.0], [46.2, 242.0], [46.3, 242.0], [46.4, 242.0], [46.5, 242.0], [46.6, 242.0], [46.7, 243.0], [46.8, 243.0], [46.9, 243.0], [47.0, 243.0], [47.1, 243.0], [47.2, 243.0], [47.3, 244.0], [47.4, 244.0], [47.5, 244.0], [47.6, 244.0], [47.7, 244.0], [47.8, 244.0], [47.9, 244.0], [48.0, 245.0], [48.1, 245.0], [48.2, 245.0], [48.3, 245.0], [48.4, 245.0], [48.5, 245.0], [48.6, 246.0], [48.7, 246.0], [48.8, 246.0], [48.9, 246.0], [49.0, 246.0], [49.1, 246.0], [49.2, 247.0], [49.3, 247.0], [49.4, 247.0], [49.5, 247.0], [49.6, 247.0], [49.7, 247.0], [49.8, 247.0], [49.9, 248.0], [50.0, 248.0], [50.1, 248.0], [50.2, 248.0], [50.3, 248.0], [50.4, 248.0], [50.5, 249.0], [50.6, 249.0], [50.7, 249.0], [50.8, 249.0], [50.9, 249.0], [51.0, 249.0], [51.1, 250.0], [51.2, 250.0], [51.3, 250.0], [51.4, 250.0], [51.5, 250.0], [51.6, 250.0], [51.7, 250.0], [51.8, 251.0], [51.9, 251.0], [52.0, 251.0], [52.1, 251.0], [52.2, 251.0], [52.3, 251.0], [52.4, 252.0], [52.5, 252.0], [52.6, 252.0], [52.7, 252.0], [52.8, 252.0], [52.9, 252.0], [53.0, 252.0], [53.1, 253.0], [53.2, 253.0], [53.3, 253.0], [53.4, 253.0], [53.5, 253.0], [53.6, 253.0], [53.7, 254.0], [53.8, 254.0], [53.9, 254.0], [54.0, 254.0], [54.1, 254.0], [54.2, 254.0], [54.3, 255.0], [54.4, 255.0], [54.5, 255.0], [54.6, 255.0], [54.7, 255.0], [54.8, 255.0], [54.9, 256.0], [55.0, 256.0], [55.1, 256.0], [55.2, 256.0], [55.3, 256.0], [55.4, 256.0], [55.5, 257.0], [55.6, 257.0], [55.7, 257.0], [55.8, 257.0], [55.9, 257.0], [56.0, 257.0], [56.1, 258.0], [56.2, 258.0], [56.3, 258.0], [56.4, 258.0], [56.5, 258.0], [56.6, 258.0], [56.7, 259.0], [56.8, 259.0], [56.9, 259.0], [57.0, 259.0], [57.1, 259.0], [57.2, 260.0], [57.3, 260.0], [57.4, 260.0], [57.5, 260.0], [57.6, 260.0], [57.7, 260.0], [57.8, 261.0], [57.9, 261.0], [58.0, 261.0], [58.1, 261.0], [58.2, 261.0], [58.3, 262.0], [58.4, 262.0], [58.5, 262.0], [58.6, 262.0], [58.7, 262.0], [58.8, 263.0], [58.9, 263.0], [59.0, 263.0], [59.1, 263.0], [59.2, 263.0], [59.3, 264.0], [59.4, 264.0], [59.5, 264.0], [59.6, 264.0], [59.7, 264.0], [59.8, 265.0], [59.9, 265.0], [60.0, 265.0], [60.1, 265.0], [60.2, 265.0], [60.3, 265.0], [60.4, 266.0], [60.5, 266.0], [60.6, 266.0], [60.7, 266.0], [60.8, 266.0], [60.9, 267.0], [61.0, 267.0], [61.1, 267.0], [61.2, 267.0], [61.3, 267.0], [61.4, 268.0], [61.5, 268.0], [61.6, 268.0], [61.7, 268.0], [61.8, 268.0], [61.9, 269.0], [62.0, 269.0], [62.1, 269.0], [62.2, 269.0], [62.3, 269.0], [62.4, 269.0], [62.5, 270.0], [62.6, 270.0], [62.7, 270.0], [62.8, 270.0], [62.9, 270.0], [63.0, 271.0], [63.1, 271.0], [63.2, 271.0], [63.3, 271.0], [63.4, 271.0], [63.5, 271.0], [63.6, 272.0], [63.7, 272.0], [63.8, 272.0], [63.9, 272.0], [64.0, 272.0], [64.1, 272.0], [64.2, 273.0], [64.3, 273.0], [64.4, 273.0], [64.5, 273.0], [64.6, 273.0], [64.7, 273.0], [64.8, 273.0], [64.9, 274.0], [65.0, 274.0], [65.1, 274.0], [65.2, 274.0], [65.3, 274.0], [65.4, 274.0], [65.5, 274.0], [65.6, 274.0], [65.7, 274.0], [65.8, 274.0], [65.9, 274.0], [66.0, 274.0], [66.1, 275.0], [66.2, 275.0], [66.3, 275.0], [66.4, 275.0], [66.5, 275.0], [66.6, 275.0], [66.7, 275.0], [66.8, 275.0], [66.9, 275.0], [67.0, 275.0], [67.1, 275.0], [67.2, 275.0], [67.3, 275.0], [67.4, 275.0], [67.5, 275.0], [67.6, 275.0], [67.7, 276.0], [67.8, 276.0], [67.9, 276.0], [68.0, 276.0], [68.1, 276.0], [68.2, 276.0], [68.3, 276.0], [68.4, 276.0], [68.5, 276.0], [68.6, 276.0], [68.7, 276.0], [68.8, 276.0], [68.9, 276.0], [69.0, 276.0], [69.1, 276.0], [69.2, 276.0], [69.3, 276.0], [69.4, 276.0], [69.5, 276.0], [69.6, 276.0], [69.7, 276.0], [69.8, 277.0], [69.9, 277.0], [70.0, 277.0], [70.1, 277.0], [70.2, 277.0], [70.3, 277.0], [70.4, 277.0], [70.5, 277.0], [70.6, 277.0], [70.7, 277.0], [70.8, 277.0], [70.9, 277.0], [71.0, 277.0], [71.1, 277.0], [71.2, 277.0], [71.3, 277.0], [71.4, 277.0], [71.5, 277.0], [71.6, 277.0], [71.7, 277.0], [71.8, 277.0], [71.9, 278.0], [72.0, 278.0], [72.1, 278.0], [72.2, 278.0], [72.3, 278.0], [72.4, 278.0], [72.5, 278.0], [72.6, 278.0], [72.7, 278.0], [72.8, 278.0], [72.9, 278.0], [73.0, 278.0], [73.1, 278.0], [73.2, 278.0], [73.3, 278.0], [73.4, 278.0], [73.5, 278.0], [73.6, 278.0], [73.7, 279.0], [73.8, 279.0], [73.9, 279.0], [74.0, 279.0], [74.1, 279.0], [74.2, 279.0], [74.3, 279.0], [74.4, 279.0], [74.5, 279.0], [74.6, 279.0], [74.7, 279.0], [74.8, 279.0], [74.9, 279.0], [75.0, 279.0], [75.1, 279.0], [75.2, 279.0], [75.3, 279.0], [75.4, 279.0], [75.5, 280.0], [75.6, 280.0], [75.7, 280.0], [75.8, 280.0], [75.9, 280.0], [76.0, 280.0], [76.1, 280.0], [76.2, 280.0], [76.3, 280.0], [76.4, 280.0], [76.5, 280.0], [76.6, 280.0], [76.7, 280.0], [76.8, 280.0], [76.9, 280.0], [77.0, 280.0], [77.1, 280.0], [77.2, 280.0], [77.3, 280.0], [77.4, 281.0], [77.5, 281.0], [77.6, 281.0], [77.7, 281.0], [77.8, 281.0], [77.9, 281.0], [78.0, 281.0], [78.1, 281.0], [78.2, 281.0], [78.3, 281.0], [78.4, 281.0], [78.5, 281.0], [78.6, 281.0], [78.7, 281.0], [78.8, 281.0], [78.9, 281.0], [79.0, 281.0], [79.1, 281.0], [79.2, 281.0], [79.3, 282.0], [79.4, 282.0], [79.5, 282.0], [79.6, 282.0], [79.7, 282.0], [79.8, 282.0], [79.9, 282.0], [80.0, 282.0], [80.1, 282.0], [80.2, 282.0], [80.3, 282.0], [80.4, 282.0], [80.5, 282.0], [80.6, 282.0], [80.7, 282.0], [80.8, 282.0], [80.9, 282.0], [81.0, 282.0], [81.1, 283.0], [81.2, 283.0], [81.3, 283.0], [81.4, 283.0], [81.5, 283.0], [81.6, 283.0], [81.7, 283.0], [81.8, 283.0], [81.9, 283.0], [82.0, 283.0], [82.1, 283.0], [82.2, 283.0], [82.3, 283.0], [82.4, 283.0], [82.5, 283.0], [82.6, 283.0], [82.7, 283.0], [82.8, 283.0], [82.9, 284.0], [83.0, 284.0], [83.1, 284.0], [83.2, 284.0], [83.3, 284.0], [83.4, 284.0], [83.5, 284.0], [83.6, 284.0], [83.7, 284.0], [83.8, 284.0], [83.9, 284.0], [84.0, 284.0], [84.1, 284.0], [84.2, 284.0], [84.3, 284.0], [84.4, 285.0], [84.5, 285.0], [84.6, 285.0], [84.7, 285.0], [84.8, 285.0], [84.9, 285.0], [85.0, 285.0], [85.1, 285.0], [85.2, 285.0], [85.3, 285.0], [85.4, 285.0], [85.5, 285.0], [85.6, 285.0], [85.7, 286.0], [85.8, 286.0], [85.9, 286.0], [86.0, 286.0], [86.1, 286.0], [86.2, 286.0], [86.3, 286.0], [86.4, 286.0], [86.5, 286.0], [86.6, 286.0], [86.7, 286.0], [86.8, 286.0], [86.9, 286.0], [87.0, 287.0], [87.1, 287.0], [87.2, 287.0], [87.3, 287.0], [87.4, 287.0], [87.5, 287.0], [87.6, 287.0], [87.7, 287.0], [87.8, 287.0], [87.9, 287.0], [88.0, 288.0], [88.1, 288.0], [88.2, 288.0], [88.3, 288.0], [88.4, 288.0], [88.5, 288.0], [88.6, 288.0], [88.7, 288.0], [88.8, 288.0], [88.9, 288.0], [89.0, 289.0], [89.1, 289.0], [89.2, 289.0], [89.3, 289.0], [89.4, 289.0], [89.5, 289.0], [89.6, 289.0], [89.7, 289.0], [89.8, 290.0], [89.9, 290.0], [90.0, 290.0], [90.1, 290.0], [90.2, 290.0], [90.3, 290.0], [90.4, 290.0], [90.5, 290.0], [90.6, 291.0], [90.7, 291.0], [90.8, 291.0], [90.9, 291.0], [91.0, 291.0], [91.1, 291.0], [91.2, 291.0], [91.3, 291.0], [91.4, 292.0], [91.5, 292.0], [91.6, 292.0], [91.7, 292.0], [91.8, 292.0], [91.9, 292.0], [92.0, 292.0], [92.1, 293.0], [92.2, 293.0], [92.3, 293.0], [92.4, 293.0], [92.5, 293.0], [92.6, 293.0], [92.7, 293.0], [92.8, 294.0], [92.9, 294.0], [93.0, 294.0], [93.1, 294.0], [93.2, 294.0], [93.3, 295.0], [93.4, 295.0], [93.5, 295.0], [93.6, 295.0], [93.7, 295.0], [93.8, 296.0], [93.9, 296.0], [94.0, 296.0], [94.1, 296.0], [94.2, 296.0], [94.3, 297.0], [94.4, 297.0], [94.5, 297.0], [94.6, 297.0], [94.7, 297.0], [94.8, 298.0], [94.9, 298.0], [95.0, 298.0], [95.1, 298.0], [95.2, 298.0], [95.3, 299.0], [95.4, 299.0], [95.5, 299.0], [95.6, 300.0], [95.7, 300.0], [95.8, 300.0], [95.9, 300.0], [96.0, 301.0], [96.1, 301.0], [96.2, 302.0], [96.3, 302.0], [96.4, 302.0], [96.5, 303.0], [96.6, 303.0], [96.7, 304.0], [96.8, 304.0], [96.9, 304.0], [97.0, 305.0], [97.1, 305.0], [97.2, 305.0], [97.3, 306.0], [97.4, 307.0], [97.5, 307.0], [97.6, 308.0], [97.7, 309.0], [97.8, 310.0], [97.9, 311.0], [98.0, 312.0], [98.1, 313.0], [98.2, 314.0], [98.3, 316.0], [98.4, 317.0], [98.5, 319.0], [98.6, 322.0], [98.7, 325.0], [98.8, 327.0], [98.9, 329.0], [99.0, 332.0], [99.1, 334.0], [99.2, 337.0], [99.3, 340.0], [99.4, 344.0], [99.5, 347.0], [99.6, 351.0], [99.7, 358.0], [99.8, 366.0], [99.9, 379.0], [100.0, 477.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 161.0, "minX": 0.0, "maxY": 329537.0, "series": [{"data": [[0.0, 3917.0], [300.0, 15555.0], [100.0, 7024.0], [200.0, 329537.0], [400.0, 161.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 356194.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 356194.0, "series": [{"data": [[0.0, 356194.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 68.99326145552554, "minX": 1.56224928E12, "maxY": 150.0, "series": [{"data": [[1.56224946E12, 150.0], [1.56224928E12, 68.99326145552554], [1.56224976E12, 150.0], [1.56224934E12, 149.01841176470697], [1.56224982E12, 150.0], [1.56224964E12, 150.0], [1.5622497E12, 150.0], [1.56224952E12, 150.0], [1.56224958E12, 150.0], [1.5622494E12, 150.0], [1.56224988E12, 148.86585118262113]], "isOverall": false, "label": "Grupo de Usu\u00E1rios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.56224988E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 15.1875, "minX": 1.0, "maxY": 331.88505747126436, "series": [{"data": [[2.0, 34.0], [3.0, 110.5], [4.0, 15.1875], [5.0, 16.236363636363638], [6.0, 20.196428571428573], [7.0, 19.391304347826082], [8.0, 21.753623188405793], [9.0, 24.62318840579711], [10.0, 31.19672131147541], [11.0, 33.28169014084508], [12.0, 30.57943925233645], [13.0, 38.761904761904766], [14.0, 35.901408450704224], [15.0, 36.38271604938273], [16.0, 32.23232323232325], [17.0, 36.42307692307693], [18.0, 48.58666666666667], [19.0, 49.873417721518976], [20.0, 57.11267605633804], [21.0, 53.04878048780488], [22.0, 62.88732394366198], [23.0, 45.90322580645162], [24.0, 69.59036144578312], [25.0, 64.35384615384615], [26.0, 67.4320987654321], [27.0, 61.2872340425532], [28.0, 58.311827956989255], [29.0, 67.10344827586206], [30.0, 68.3555555555556], [31.0, 79.25609756097562], [32.0, 71.3775510204082], [33.0, 75.13186813186816], [34.0, 80.63529411764706], [35.0, 81.65263157894736], [36.0, 75.43749999999997], [37.0, 81.47777777777776], [38.0, 83.73684210526316], [39.0, 95.7051282051282], [40.0, 86.78124999999999], [41.0, 78.39285714285715], [42.0, 75.35593220338988], [43.0, 76.03787878787877], [44.0, 91.5432098765432], [45.0, 96.37804878048777], [46.0, 110.49438202247191], [47.0, 82.66371681415933], [48.0, 101.37500000000004], [49.0, 100.04807692307693], [50.0, 99.91818181818185], [51.0, 96.19626168224298], [52.0, 89.84905660377359], [53.0, 99.73394495412849], [54.0, 113.97029702970295], [55.0, 105.64761904761905], [56.0, 111.07070707070706], [57.0, 115.01020408163266], [58.0, 129.67045454545453], [59.0, 105.19298245614037], [60.0, 128.29670329670324], [61.0, 129.27272727272722], [62.0, 126.1111111111111], [63.0, 127.54081632653063], [64.0, 119.1965811965812], [65.0, 105.53543307086612], [66.0, 114.65094339622642], [67.0, 138.77777777777771], [68.0, 157.13829787234047], [69.0, 150.3908045977011], [70.0, 149.75268817204298], [71.0, 151.22826086956525], [72.0, 155.35999999999999], [73.0, 139.71874999999994], [74.0, 150.2792792792793], [75.0, 145.2222222222222], [76.0, 157.66666666666663], [77.0, 151.80000000000004], [78.0, 129.49618320610676], [79.0, 145.98888888888877], [80.0, 158.49107142857147], [81.0, 157.30693069306935], [82.0, 160.32038834951456], [83.0, 139.4202898550725], [84.0, 152.1880341880342], [85.0, 160.49473684210525], [86.0, 185.77894736842103], [87.0, 155.06349206349208], [88.0, 139.99173553719], [89.0, 185.51401869158872], [90.0, 177.43478260869568], [91.0, 166.18399999999997], [92.0, 149.9416666666667], [93.0, 142.4087591240876], [94.0, 135.37762237762237], [95.0, 139.16058394160586], [96.0, 144.55813953488362], [97.0, 147.74358974358972], [98.0, 203.6960784313725], [99.0, 192.54761904761912], [100.0, 158.40740740740742], [101.0, 156.63709677419357], [102.0, 163.09923664122135], [103.0, 168.28244274809154], [104.0, 207.2553191489361], [105.0, 234.44318181818178], [106.0, 232.53571428571425], [107.0, 193.79661016949152], [108.0, 225.14432989690724], [109.0, 253.5842696629214], [110.0, 238.79611650485433], [111.0, 191.44525547445258], [112.0, 192.29457364341073], [113.0, 195.16326530612247], [114.0, 235.1372549019608], [115.0, 210.4403669724771], [116.0, 235.28571428571436], [117.0, 196.8571428571429], [118.0, 182.33076923076928], [119.0, 192.19512195121945], [120.0, 239.79000000000005], [121.0, 189.4870129870129], [122.0, 195.56880733944953], [123.0, 227.73394495412842], [124.0, 222.87200000000004], [125.0, 271.1976744186047], [126.0, 243.15929203539824], [127.0, 247.88764044943824], [128.0, 249.16788321167883], [129.0, 189.8947368421053], [130.0, 267.8684210526316], [131.0, 255.53900709219832], [132.0, 211.00869565217394], [133.0, 238.65957446808514], [134.0, 295.6075949367088], [135.0, 331.88505747126436], [136.0, 295.85858585858597], [137.0, 270.82051282051293], [138.0, 231.23478260869575], [139.0, 265.8811881188118], [140.0, 257.8914728682172], [141.0, 223.88235294117644], [142.0, 272.8235294117647], [143.0, 302.6288659793814], [144.0, 299.9181818181817], [145.0, 309.4000000000001], [146.0, 322.0467289719627], [147.0, 267.15315315315314], [148.0, 288.4128440366972], [149.0, 264.7530864197528], [150.0, 250.51035949847721], [1.0, 24.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}, {"data": [[147.14360432797966, 246.53470580638492]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 22754.666666666668, "minX": 1.56224928E12, "maxY": 2140755.0, "series": [{"data": [[1.56224946E12, 2140755.0], [1.56224928E12, 656719.4666666667], [1.56224976E12, 1968941.4333333333], [1.56224934E12, 1880766.6666666667], [1.56224982E12, 1982438.7], [1.56224964E12, 2081842.75], [1.5622497E12, 2084719.2166666666], [1.56224952E12, 1981940.85], [1.56224958E12, 1938572.5833333333], [1.5622494E12, 1896919.1333333333], [1.56224988E12, 1089848.9666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.56224946E12, 74175.0], [1.56224928E12, 22754.666666666668], [1.56224976E12, 68221.83333333333], [1.56224934E12, 65166.666666666664], [1.56224982E12, 68689.5], [1.56224964E12, 72133.75], [1.5622497E12, 72233.41666666667], [1.56224952E12, 68672.25], [1.56224958E12, 67169.58333333333], [1.5622494E12, 65726.33333333333], [1.56224988E12, 37762.166666666664]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.56224988E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 129.06157345013503, "minX": 1.56224928E12, "maxY": 273.27849964470477, "series": [{"data": [[1.56224946E12, 232.32343669250773], [1.56224928E12, 129.06157345013503], [1.56224976E12, 252.56874754172023], [1.56224934E12, 262.5382058823526], [1.56224982E12, 251.02625704559497], [1.56224964E12, 239.14250033213668], [1.5622497E12, 238.74532332103826], [1.56224952E12, 251.31226101760993], [1.56224958E12, 256.55990868883094], [1.5622494E12, 262.4889770208791], [1.56224988E12, 273.27849964470477]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.56224988E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 128.94339622641525, "minX": 1.56224928E12, "maxY": 273.17856055222944, "series": [{"data": [[1.56224946E12, 232.21444444444595], [1.56224928E12, 128.94339622641525], [1.56224976E12, 252.4671573860754], [1.56224934E12, 262.440235294116], [1.56224982E12, 250.92468887772577], [1.56224964E12, 239.03741198352643], [1.5622497E12, 238.6417862923558], [1.56224952E12, 251.20971838454562], [1.56224958E12, 256.4621201312602], [1.5622494E12, 262.3867374314726], [1.56224988E12, 273.17856055222944]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.56224988E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.4386154205062405, "minX": 1.56224928E12, "maxY": 0.9572102425876072, "series": [{"data": [[1.56224946E12, 0.49894056847545465], [1.56224928E12, 0.9572102425876072], [1.56224976E12, 0.46564027645108796], [1.56224934E12, 0.4906176470588238], [1.56224982E12, 0.47017132652491406], [1.56224964E12, 0.5011824099906956], [1.5622497E12, 0.47777748295168104], [1.56224952E12, 0.45862290323480986], [1.56224958E12, 0.44930803252960366], [1.5622494E12, 0.4386154205062405], [1.56224988E12, 0.4407166785097954]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.56224988E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.56224928E12, "maxY": 477.0, "series": [{"data": [[1.56224946E12, 341.0], [1.56224928E12, 261.0], [1.56224976E12, 477.0], [1.56224934E12, 384.0], [1.56224982E12, 407.0], [1.56224964E12, 362.0], [1.5622497E12, 339.0], [1.56224952E12, 347.0], [1.56224958E12, 359.0], [1.5622494E12, 366.0], [1.56224988E12, 385.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.56224946E12, 185.0], [1.56224928E12, 6.0], [1.56224976E12, 194.0], [1.56224934E12, 178.0], [1.56224982E12, 200.0], [1.56224964E12, 192.0], [1.5622497E12, 198.0], [1.56224952E12, 188.0], [1.56224958E12, 120.0], [1.5622494E12, 201.0], [1.56224988E12, 24.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.56224946E12, 279.0], [1.56224928E12, 210.0], [1.56224976E12, 296.0], [1.56224934E12, 297.0], [1.56224982E12, 291.0], [1.56224964E12, 275.0], [1.5622497E12, 286.0], [1.56224952E12, 283.0], [1.56224958E12, 288.0], [1.5622494E12, 294.0], [1.56224988E12, 300.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.56224946E12, 300.0], [1.56224928E12, 251.0], [1.56224976E12, 382.0], [1.56224934E12, 338.0], [1.56224982E12, 344.0], [1.56224964E12, 308.0], [1.5622497E12, 317.0], [1.56224952E12, 301.0], [1.56224958E12, 326.0], [1.5622494E12, 330.0], [1.56224988E12, 346.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.56224946E12, 284.0], [1.56224928E12, 231.0], [1.56224976E12, 322.0], [1.56224934E12, 304.0], [1.56224982E12, 306.0], [1.56224964E12, 283.0], [1.5622497E12, 294.0], [1.56224952E12, 286.0], [1.56224958E12, 297.0], [1.5622494E12, 301.0], [1.56224988E12, 309.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.56224988E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 18.0, "minX": 11.0, "maxY": 345.0, "series": [{"data": [[11.0, 18.0], [17.0, 44.0], [323.0, 19.0], [351.0, 33.0], [388.0, 56.0], [416.0, 37.0], [425.0, 64.0], [419.0, 345.0], [435.0, 181.5], [448.0, 80.0], [452.0, 295.0], [476.0, 100.0], [464.0, 233.0], [470.0, 256.0], [494.0, 139.0], [488.0, 151.0], [482.0, 255.5], [493.0, 280.0], [481.0, 298.0], [491.0, 299.0], [509.0, 294.0], [502.0, 291.0], [505.0, 289.0], [500.0, 299.0], [501.0, 299.0], [497.0, 294.0], [508.0, 295.0], [511.0, 287.0], [510.0, 291.0], [506.0, 287.0], [507.0, 290.0], [504.0, 299.0], [518.0, 281.0], [529.0, 283.0], [530.0, 280.0], [533.0, 282.0], [532.0, 281.0], [535.0, 281.0], [534.0, 280.0], [531.0, 281.0], [524.0, 283.0], [525.0, 284.0], [526.0, 281.0], [514.0, 286.0], [517.0, 286.0], [516.0, 290.0], [515.0, 288.0], [513.0, 290.0], [527.0, 284.0], [512.0, 285.0], [520.0, 290.0], [522.0, 287.0], [523.0, 289.0], [521.0, 282.0], [528.0, 284.0], [542.0, 279.0], [543.0, 277.0], [541.0, 279.0], [539.0, 279.0], [540.0, 280.0], [538.0, 281.0], [519.0, 288.0], [536.0, 281.0], [537.0, 281.0], [570.0, 261.0], [546.0, 209.5], [545.0, 277.0], [547.0, 282.0], [548.0, 279.0], [549.0, 279.0], [560.0, 250.0], [561.0, 275.0], [563.0, 275.0], [562.0, 262.0], [575.0, 275.0], [566.0, 275.5], [567.0, 258.0], [565.0, 277.0], [564.0, 267.0], [574.0, 227.0], [569.0, 256.0], [568.0, 253.0], [551.0, 279.0], [550.0, 237.5], [573.0, 253.0], [555.0, 280.0], [557.0, 277.0], [556.0, 277.0], [558.0, 270.0], [559.0, 276.0], [553.0, 279.0], [552.0, 273.0], [554.0, 274.0], [544.0, 278.0], [571.0, 266.0], [572.0, 269.0], [581.0, 267.0], [576.0, 264.0], [593.0, 245.0], [591.0, 237.0], [590.0, 251.0], [582.0, 266.0], [583.0, 262.0], [600.0, 249.0], [601.0, 246.0], [603.0, 245.0], [605.0, 244.0], [602.0, 233.0], [589.0, 256.0], [584.0, 250.0], [585.0, 265.0], [586.0, 253.0], [588.0, 263.5], [587.0, 267.0], [606.0, 249.5], [607.0, 254.0], [592.0, 261.0], [579.0, 258.0], [580.0, 254.0], [577.0, 254.0], [578.0, 261.0], [594.0, 255.0], [595.0, 257.0], [596.0, 250.0], [598.0, 249.0], [599.0, 245.0], [597.0, 256.0], [614.0, 241.0], [616.0, 207.0], [617.0, 242.0], [625.0, 237.0], [626.0, 232.0], [628.0, 248.0], [631.0, 211.0], [618.0, 242.0], [634.0, 231.0], [636.0, 233.0], [635.0, 246.0], [637.0, 210.0], [639.0, 221.0], [638.0, 226.0], [624.0, 239.0], [611.0, 260.0], [609.0, 254.0], [613.0, 234.0], [612.0, 243.0], [622.0, 240.0], [621.0, 245.0], [619.0, 236.0], [623.0, 238.0], [633.0, 235.0], [615.0, 240.0], [632.0, 238.5], [645.0, 234.0], [653.0, 215.0], [650.0, 228.0], [642.0, 231.0], [655.0, 228.0], [641.0, 225.0], [640.0, 232.0], [644.0, 233.5], [643.0, 221.0], [648.0, 226.5], [664.0, 226.0], [646.0, 234.0], [667.0, 223.0], [669.0, 220.0], [670.0, 230.0], [656.0, 219.0], [671.0, 214.0], [658.0, 225.0], [660.0, 218.0], [657.0, 221.0], [651.0, 229.0], [652.0, 222.0], [678.0, 222.0], [675.0, 215.0], [698.0, 210.0], [672.0, 209.0], [673.0, 216.0], [696.0, 215.0], [697.0, 216.0], [695.0, 214.0], [694.0, 213.0], [699.0, 211.0], [701.0, 214.0], [703.0, 210.0], [700.0, 214.0], [689.0, 213.0], [687.0, 207.0], [684.0, 206.0], [677.0, 219.0], [728.0, 204.0], [709.0, 210.0], [711.0, 208.0], [710.0, 208.0], [717.0, 209.0], [718.0, 207.5], [716.0, 207.0], [715.0, 208.0], [713.0, 207.0], [712.0, 209.0], [714.0, 209.0], [706.0, 206.0], [704.0, 212.0], [705.0, 212.0], [719.0, 208.0], [725.0, 207.0], [726.0, 206.0], [727.0, 206.0], [707.0, 208.0], [708.0, 206.0], [722.0, 207.0], [723.0, 206.0], [724.0, 207.0], [729.0, 205.0], [730.0, 206.0], [731.0, 207.0], [732.0, 205.0], [720.0, 210.0], [733.0, 205.0], [721.0, 207.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 733.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 18.0, "minX": 11.0, "maxY": 344.0, "series": [{"data": [[11.0, 18.0], [17.0, 44.0], [323.0, 19.0], [351.0, 33.0], [388.0, 56.0], [416.0, 36.0], [425.0, 64.0], [419.0, 344.0], [435.0, 181.5], [448.0, 80.0], [452.0, 295.0], [476.0, 100.0], [464.0, 233.0], [470.0, 255.5], [494.0, 139.0], [488.0, 151.0], [482.0, 255.0], [493.0, 280.0], [481.0, 298.0], [491.0, 299.0], [509.0, 294.0], [502.0, 291.0], [505.0, 288.0], [500.0, 299.0], [501.0, 299.0], [497.0, 294.0], [508.0, 295.0], [511.0, 287.0], [510.0, 291.0], [506.0, 287.0], [507.0, 289.0], [504.0, 299.0], [518.0, 281.0], [529.0, 283.0], [530.0, 280.0], [533.0, 282.0], [532.0, 280.0], [535.0, 280.0], [534.0, 280.0], [531.0, 281.0], [524.0, 283.0], [525.0, 284.0], [526.0, 281.0], [514.0, 286.0], [517.0, 286.0], [516.0, 289.0], [515.0, 288.0], [513.0, 290.0], [527.0, 284.0], [512.0, 285.0], [520.0, 290.0], [522.0, 287.0], [523.0, 288.0], [521.0, 282.0], [528.0, 283.5], [542.0, 279.0], [543.0, 277.0], [541.0, 279.0], [539.0, 279.0], [540.0, 280.0], [538.0, 281.0], [519.0, 288.0], [536.0, 281.0], [537.0, 280.0], [570.0, 261.0], [546.0, 209.5], [545.0, 277.0], [547.0, 282.0], [548.0, 278.0], [549.0, 279.0], [560.0, 250.0], [561.0, 275.0], [563.0, 275.0], [562.0, 262.0], [575.0, 275.0], [566.0, 275.0], [567.0, 258.0], [565.0, 277.0], [564.0, 267.0], [574.0, 227.0], [569.0, 256.0], [568.0, 253.0], [551.0, 279.0], [550.0, 237.5], [573.0, 252.0], [555.0, 280.0], [557.0, 277.0], [556.0, 277.0], [558.0, 270.0], [559.0, 276.0], [553.0, 278.0], [552.0, 273.0], [554.0, 274.0], [544.0, 278.0], [571.0, 266.0], [572.0, 269.0], [581.0, 267.0], [576.0, 264.0], [593.0, 244.0], [591.0, 237.0], [590.0, 250.5], [582.0, 266.0], [583.0, 262.0], [600.0, 249.0], [601.0, 246.0], [603.0, 245.0], [605.0, 244.0], [602.0, 233.0], [589.0, 256.0], [584.0, 250.0], [585.0, 265.0], [586.0, 253.0], [588.0, 263.5], [587.0, 266.0], [606.0, 249.5], [607.0, 254.0], [592.0, 261.0], [579.0, 258.0], [580.0, 254.0], [577.0, 254.0], [578.0, 261.0], [594.0, 255.0], [595.0, 257.0], [596.0, 250.0], [598.0, 249.0], [599.0, 245.0], [597.0, 256.0], [614.0, 241.0], [616.0, 207.0], [617.0, 242.0], [625.0, 237.0], [626.0, 232.0], [628.0, 247.5], [631.0, 211.0], [618.0, 242.0], [634.0, 231.0], [636.0, 233.0], [635.0, 246.0], [637.0, 210.0], [639.0, 221.0], [638.0, 226.0], [624.0, 239.0], [611.0, 260.0], [609.0, 254.0], [613.0, 234.0], [612.0, 243.0], [622.0, 240.0], [621.0, 245.0], [619.0, 236.0], [623.0, 238.0], [633.0, 235.0], [615.0, 240.0], [632.0, 238.0], [645.0, 233.0], [653.0, 215.0], [650.0, 228.0], [642.0, 231.0], [655.0, 228.0], [641.0, 225.0], [640.0, 232.0], [644.0, 233.5], [643.0, 221.0], [648.0, 226.0], [664.0, 226.0], [646.0, 234.0], [667.0, 223.0], [669.0, 220.0], [670.0, 230.0], [656.0, 219.0], [671.0, 214.0], [658.0, 225.0], [660.0, 218.0], [657.0, 221.0], [651.0, 229.0], [652.0, 222.0], [678.0, 221.0], [675.0, 215.0], [698.0, 209.0], [672.0, 209.0], [673.0, 216.0], [696.0, 215.0], [697.0, 215.0], [695.0, 214.0], [694.0, 213.0], [699.0, 211.0], [701.0, 214.0], [703.0, 210.0], [700.0, 214.0], [689.0, 213.0], [687.0, 207.0], [684.0, 206.0], [677.0, 219.0], [728.0, 204.0], [709.0, 210.0], [711.0, 208.0], [710.0, 208.0], [717.0, 209.0], [718.0, 207.0], [716.0, 207.0], [715.0, 207.0], [713.0, 207.0], [712.0, 208.0], [714.0, 209.0], [706.0, 206.0], [704.0, 212.0], [705.0, 212.0], [719.0, 208.0], [725.0, 207.0], [726.0, 206.0], [727.0, 206.0], [707.0, 208.0], [708.0, 206.0], [722.0, 207.0], [723.0, 205.0], [724.0, 207.0], [729.0, 205.0], [730.0, 206.0], [731.0, 207.0], [732.0, 205.0], [720.0, 210.0], [733.0, 205.0], [721.0, 207.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 733.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 199.93333333333334, "minX": 1.56224928E12, "maxY": 645.0, "series": [{"data": [[1.56224946E12, 645.0], [1.56224928E12, 199.93333333333334], [1.56224976E12, 593.2166666666667], [1.56224934E12, 567.1], [1.56224982E12, 597.3166666666667], [1.56224964E12, 627.25], [1.5622497E12, 628.1166666666667], [1.56224952E12, 597.1333333333333], [1.56224958E12, 584.1], [1.5622494E12, 571.5333333333333], [1.56224988E12, 325.8666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.56224988E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 197.86666666666667, "minX": 1.56224928E12, "maxY": 645.0, "series": [{"data": [[1.56224946E12, 645.0], [1.56224928E12, 197.86666666666667], [1.56224976E12, 593.2333333333333], [1.56224934E12, 566.6666666666666], [1.56224982E12, 597.3], [1.56224964E12, 627.25], [1.5622497E12, 628.1166666666667], [1.56224952E12, 597.15], [1.56224958E12, 584.0833333333334], [1.5622494E12, 571.5333333333333], [1.56224988E12, 328.3666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.56224988E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 197.86666666666667, "minX": 1.56224928E12, "maxY": 645.0, "series": [{"data": [[1.56224946E12, 645.0], [1.56224928E12, 197.86666666666667], [1.56224976E12, 593.2333333333333], [1.56224934E12, 566.6666666666666], [1.56224982E12, 597.3], [1.56224964E12, 627.25], [1.5622497E12, 628.1166666666667], [1.56224952E12, 597.15], [1.56224958E12, 584.0833333333334], [1.5622494E12, 571.5333333333333], [1.56224988E12, 328.3666666666667]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.56224988E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 197.86666666666667, "minX": 1.56224928E12, "maxY": 645.0, "series": [{"data": [[1.56224946E12, 645.0], [1.56224928E12, 197.86666666666667], [1.56224976E12, 593.2333333333333], [1.56224934E12, 566.6666666666666], [1.56224982E12, 597.3], [1.56224964E12, 627.25], [1.5622497E12, 628.1166666666667], [1.56224952E12, 597.15], [1.56224958E12, 584.0833333333334], [1.5622494E12, 571.5333333333333], [1.56224988E12, 328.3666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.56224988E12, "title": "Total Transactions Per Second"}},
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

