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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 1274.0, "series": [{"data": [[0.0, 5.0], [0.1, 15.0], [0.2, 26.0], [0.3, 32.0], [0.4, 39.0], [0.5, 47.0], [0.6, 55.0], [0.7, 62.0], [0.8, 72.0], [0.9, 88.0], [1.0, 96.0], [1.1, 107.0], [1.2, 116.0], [1.3, 124.0], [1.4, 133.0], [1.5, 143.0], [1.6, 152.0], [1.7, 162.0], [1.8, 166.0], [1.9, 169.0], [2.0, 177.0], [2.1, 185.0], [2.2, 190.0], [2.3, 193.0], [2.4, 199.0], [2.5, 204.0], [2.6, 219.0], [2.7, 226.0], [2.8, 231.0], [2.9, 236.0], [3.0, 239.0], [3.1, 240.0], [3.2, 241.0], [3.3, 242.0], [3.4, 242.0], [3.5, 243.0], [3.6, 243.0], [3.7, 244.0], [3.8, 244.0], [3.9, 245.0], [4.0, 245.0], [4.1, 245.0], [4.2, 246.0], [4.3, 246.0], [4.4, 246.0], [4.5, 246.0], [4.6, 247.0], [4.7, 247.0], [4.8, 247.0], [4.9, 247.0], [5.0, 248.0], [5.1, 248.0], [5.2, 248.0], [5.3, 248.0], [5.4, 249.0], [5.5, 249.0], [5.6, 249.0], [5.7, 249.0], [5.8, 249.0], [5.9, 250.0], [6.0, 250.0], [6.1, 250.0], [6.2, 250.0], [6.3, 250.0], [6.4, 250.0], [6.5, 251.0], [6.6, 251.0], [6.7, 251.0], [6.8, 251.0], [6.9, 251.0], [7.0, 251.0], [7.1, 251.0], [7.2, 252.0], [7.3, 252.0], [7.4, 252.0], [7.5, 252.0], [7.6, 252.0], [7.7, 252.0], [7.8, 252.0], [7.9, 253.0], [8.0, 253.0], [8.1, 253.0], [8.2, 253.0], [8.3, 253.0], [8.4, 253.0], [8.5, 253.0], [8.6, 253.0], [8.7, 254.0], [8.8, 254.0], [8.9, 254.0], [9.0, 254.0], [9.1, 254.0], [9.2, 254.0], [9.3, 254.0], [9.4, 254.0], [9.5, 255.0], [9.6, 255.0], [9.7, 255.0], [9.8, 255.0], [9.9, 255.0], [10.0, 255.0], [10.1, 255.0], [10.2, 255.0], [10.3, 255.0], [10.4, 256.0], [10.5, 256.0], [10.6, 256.0], [10.7, 256.0], [10.8, 256.0], [10.9, 256.0], [11.0, 256.0], [11.1, 256.0], [11.2, 256.0], [11.3, 257.0], [11.4, 257.0], [11.5, 257.0], [11.6, 257.0], [11.7, 257.0], [11.8, 257.0], [11.9, 257.0], [12.0, 257.0], [12.1, 257.0], [12.2, 257.0], [12.3, 258.0], [12.4, 258.0], [12.5, 258.0], [12.6, 258.0], [12.7, 258.0], [12.8, 258.0], [12.9, 258.0], [13.0, 258.0], [13.1, 259.0], [13.2, 259.0], [13.3, 259.0], [13.4, 259.0], [13.5, 259.0], [13.6, 259.0], [13.7, 259.0], [13.8, 259.0], [13.9, 259.0], [14.0, 260.0], [14.1, 260.0], [14.2, 260.0], [14.3, 260.0], [14.4, 260.0], [14.5, 260.0], [14.6, 260.0], [14.7, 260.0], [14.8, 261.0], [14.9, 261.0], [15.0, 261.0], [15.1, 261.0], [15.2, 261.0], [15.3, 261.0], [15.4, 262.0], [15.5, 262.0], [15.6, 262.0], [15.7, 262.0], [15.8, 262.0], [15.9, 262.0], [16.0, 262.0], [16.1, 263.0], [16.2, 263.0], [16.3, 263.0], [16.4, 263.0], [16.5, 263.0], [16.6, 263.0], [16.7, 263.0], [16.8, 264.0], [16.9, 264.0], [17.0, 264.0], [17.1, 264.0], [17.2, 264.0], [17.3, 264.0], [17.4, 264.0], [17.5, 264.0], [17.6, 265.0], [17.7, 265.0], [17.8, 265.0], [17.9, 265.0], [18.0, 265.0], [18.1, 265.0], [18.2, 265.0], [18.3, 266.0], [18.4, 266.0], [18.5, 266.0], [18.6, 266.0], [18.7, 266.0], [18.8, 266.0], [18.9, 267.0], [19.0, 267.0], [19.1, 267.0], [19.2, 267.0], [19.3, 267.0], [19.4, 267.0], [19.5, 267.0], [19.6, 268.0], [19.7, 268.0], [19.8, 268.0], [19.9, 268.0], [20.0, 268.0], [20.1, 268.0], [20.2, 269.0], [20.3, 269.0], [20.4, 269.0], [20.5, 269.0], [20.6, 269.0], [20.7, 269.0], [20.8, 269.0], [20.9, 270.0], [21.0, 270.0], [21.1, 270.0], [21.2, 270.0], [21.3, 270.0], [21.4, 270.0], [21.5, 270.0], [21.6, 271.0], [21.7, 271.0], [21.8, 271.0], [21.9, 271.0], [22.0, 271.0], [22.1, 271.0], [22.2, 272.0], [22.3, 272.0], [22.4, 272.0], [22.5, 272.0], [22.6, 272.0], [22.7, 272.0], [22.8, 272.0], [22.9, 273.0], [23.0, 273.0], [23.1, 273.0], [23.2, 273.0], [23.3, 273.0], [23.4, 273.0], [23.5, 273.0], [23.6, 273.0], [23.7, 274.0], [23.8, 274.0], [23.9, 274.0], [24.0, 274.0], [24.1, 274.0], [24.2, 274.0], [24.3, 274.0], [24.4, 274.0], [24.5, 275.0], [24.6, 275.0], [24.7, 275.0], [24.8, 275.0], [24.9, 275.0], [25.0, 275.0], [25.1, 275.0], [25.2, 275.0], [25.3, 276.0], [25.4, 276.0], [25.5, 276.0], [25.6, 276.0], [25.7, 276.0], [25.8, 276.0], [25.9, 276.0], [26.0, 276.0], [26.1, 277.0], [26.2, 277.0], [26.3, 277.0], [26.4, 277.0], [26.5, 277.0], [26.6, 277.0], [26.7, 277.0], [26.8, 277.0], [26.9, 278.0], [27.0, 278.0], [27.1, 278.0], [27.2, 278.0], [27.3, 278.0], [27.4, 278.0], [27.5, 278.0], [27.6, 278.0], [27.7, 279.0], [27.8, 279.0], [27.9, 279.0], [28.0, 279.0], [28.1, 279.0], [28.2, 279.0], [28.3, 279.0], [28.4, 279.0], [28.5, 279.0], [28.6, 280.0], [28.7, 280.0], [28.8, 280.0], [28.9, 280.0], [29.0, 280.0], [29.1, 280.0], [29.2, 280.0], [29.3, 280.0], [29.4, 281.0], [29.5, 281.0], [29.6, 281.0], [29.7, 281.0], [29.8, 281.0], [29.9, 281.0], [30.0, 281.0], [30.1, 281.0], [30.2, 281.0], [30.3, 282.0], [30.4, 282.0], [30.5, 282.0], [30.6, 282.0], [30.7, 282.0], [30.8, 282.0], [30.9, 282.0], [31.0, 282.0], [31.1, 282.0], [31.2, 283.0], [31.3, 283.0], [31.4, 283.0], [31.5, 283.0], [31.6, 283.0], [31.7, 283.0], [31.8, 283.0], [31.9, 283.0], [32.0, 283.0], [32.1, 284.0], [32.2, 284.0], [32.3, 284.0], [32.4, 284.0], [32.5, 284.0], [32.6, 284.0], [32.7, 284.0], [32.8, 284.0], [32.9, 284.0], [33.0, 285.0], [33.1, 285.0], [33.2, 285.0], [33.3, 285.0], [33.4, 285.0], [33.5, 285.0], [33.6, 285.0], [33.7, 285.0], [33.8, 285.0], [33.9, 286.0], [34.0, 286.0], [34.1, 286.0], [34.2, 286.0], [34.3, 286.0], [34.4, 286.0], [34.5, 286.0], [34.6, 286.0], [34.7, 286.0], [34.8, 287.0], [34.9, 287.0], [35.0, 287.0], [35.1, 287.0], [35.2, 287.0], [35.3, 287.0], [35.4, 287.0], [35.5, 287.0], [35.6, 288.0], [35.7, 288.0], [35.8, 288.0], [35.9, 288.0], [36.0, 288.0], [36.1, 288.0], [36.2, 288.0], [36.3, 288.0], [36.4, 288.0], [36.5, 289.0], [36.6, 289.0], [36.7, 289.0], [36.8, 289.0], [36.9, 289.0], [37.0, 289.0], [37.1, 289.0], [37.2, 290.0], [37.3, 290.0], [37.4, 290.0], [37.5, 290.0], [37.6, 290.0], [37.7, 290.0], [37.8, 290.0], [37.9, 290.0], [38.0, 291.0], [38.1, 291.0], [38.2, 291.0], [38.3, 291.0], [38.4, 291.0], [38.5, 291.0], [38.6, 291.0], [38.7, 291.0], [38.8, 292.0], [38.9, 292.0], [39.0, 292.0], [39.1, 292.0], [39.2, 292.0], [39.3, 292.0], [39.4, 292.0], [39.5, 293.0], [39.6, 293.0], [39.7, 293.0], [39.8, 293.0], [39.9, 293.0], [40.0, 293.0], [40.1, 293.0], [40.2, 293.0], [40.3, 294.0], [40.4, 294.0], [40.5, 294.0], [40.6, 294.0], [40.7, 294.0], [40.8, 294.0], [40.9, 294.0], [41.0, 294.0], [41.1, 295.0], [41.2, 295.0], [41.3, 295.0], [41.4, 295.0], [41.5, 295.0], [41.6, 295.0], [41.7, 295.0], [41.8, 295.0], [41.9, 296.0], [42.0, 296.0], [42.1, 296.0], [42.2, 296.0], [42.3, 296.0], [42.4, 296.0], [42.5, 296.0], [42.6, 297.0], [42.7, 297.0], [42.8, 297.0], [42.9, 297.0], [43.0, 297.0], [43.1, 297.0], [43.2, 297.0], [43.3, 298.0], [43.4, 298.0], [43.5, 298.0], [43.6, 298.0], [43.7, 298.0], [43.8, 298.0], [43.9, 298.0], [44.0, 298.0], [44.1, 299.0], [44.2, 299.0], [44.3, 299.0], [44.4, 299.0], [44.5, 299.0], [44.6, 299.0], [44.7, 299.0], [44.8, 300.0], [44.9, 300.0], [45.0, 300.0], [45.1, 300.0], [45.2, 300.0], [45.3, 300.0], [45.4, 300.0], [45.5, 300.0], [45.6, 301.0], [45.7, 301.0], [45.8, 301.0], [45.9, 301.0], [46.0, 301.0], [46.1, 301.0], [46.2, 301.0], [46.3, 302.0], [46.4, 302.0], [46.5, 302.0], [46.6, 302.0], [46.7, 302.0], [46.8, 302.0], [46.9, 302.0], [47.0, 303.0], [47.1, 303.0], [47.2, 303.0], [47.3, 303.0], [47.4, 303.0], [47.5, 303.0], [47.6, 303.0], [47.7, 303.0], [47.8, 304.0], [47.9, 304.0], [48.0, 304.0], [48.1, 304.0], [48.2, 304.0], [48.3, 304.0], [48.4, 304.0], [48.5, 305.0], [48.6, 305.0], [48.7, 305.0], [48.8, 305.0], [48.9, 305.0], [49.0, 305.0], [49.1, 305.0], [49.2, 306.0], [49.3, 306.0], [49.4, 306.0], [49.5, 306.0], [49.6, 306.0], [49.7, 306.0], [49.8, 306.0], [49.9, 307.0], [50.0, 307.0], [50.1, 307.0], [50.2, 307.0], [50.3, 307.0], [50.4, 307.0], [50.5, 307.0], [50.6, 308.0], [50.7, 308.0], [50.8, 308.0], [50.9, 308.0], [51.0, 308.0], [51.1, 308.0], [51.2, 308.0], [51.3, 309.0], [51.4, 309.0], [51.5, 309.0], [51.6, 309.0], [51.7, 309.0], [51.8, 309.0], [51.9, 309.0], [52.0, 310.0], [52.1, 310.0], [52.2, 310.0], [52.3, 310.0], [52.4, 310.0], [52.5, 310.0], [52.6, 310.0], [52.7, 310.0], [52.8, 311.0], [52.9, 311.0], [53.0, 311.0], [53.1, 311.0], [53.2, 311.0], [53.3, 311.0], [53.4, 311.0], [53.5, 312.0], [53.6, 312.0], [53.7, 312.0], [53.8, 312.0], [53.9, 312.0], [54.0, 312.0], [54.1, 312.0], [54.2, 312.0], [54.3, 313.0], [54.4, 313.0], [54.5, 313.0], [54.6, 313.0], [54.7, 313.0], [54.8, 313.0], [54.9, 313.0], [55.0, 314.0], [55.1, 314.0], [55.2, 314.0], [55.3, 314.0], [55.4, 314.0], [55.5, 314.0], [55.6, 314.0], [55.7, 314.0], [55.8, 315.0], [55.9, 315.0], [56.0, 315.0], [56.1, 315.0], [56.2, 315.0], [56.3, 315.0], [56.4, 315.0], [56.5, 316.0], [56.6, 316.0], [56.7, 316.0], [56.8, 316.0], [56.9, 316.0], [57.0, 316.0], [57.1, 317.0], [57.2, 317.0], [57.3, 317.0], [57.4, 317.0], [57.5, 317.0], [57.6, 317.0], [57.7, 317.0], [57.8, 318.0], [57.9, 318.0], [58.0, 318.0], [58.1, 318.0], [58.2, 318.0], [58.3, 318.0], [58.4, 318.0], [58.5, 319.0], [58.6, 319.0], [58.7, 319.0], [58.8, 319.0], [58.9, 319.0], [59.0, 319.0], [59.1, 319.0], [59.2, 320.0], [59.3, 320.0], [59.4, 320.0], [59.5, 320.0], [59.6, 320.0], [59.7, 320.0], [59.8, 320.0], [59.9, 321.0], [60.0, 321.0], [60.1, 321.0], [60.2, 321.0], [60.3, 321.0], [60.4, 321.0], [60.5, 321.0], [60.6, 322.0], [60.7, 322.0], [60.8, 322.0], [60.9, 322.0], [61.0, 322.0], [61.1, 322.0], [61.2, 322.0], [61.3, 323.0], [61.4, 323.0], [61.5, 323.0], [61.6, 323.0], [61.7, 323.0], [61.8, 323.0], [61.9, 324.0], [62.0, 324.0], [62.1, 324.0], [62.2, 324.0], [62.3, 324.0], [62.4, 324.0], [62.5, 324.0], [62.6, 325.0], [62.7, 325.0], [62.8, 325.0], [62.9, 325.0], [63.0, 325.0], [63.1, 325.0], [63.2, 326.0], [63.3, 326.0], [63.4, 326.0], [63.5, 326.0], [63.6, 326.0], [63.7, 326.0], [63.8, 326.0], [63.9, 327.0], [64.0, 327.0], [64.1, 327.0], [64.2, 327.0], [64.3, 327.0], [64.4, 327.0], [64.5, 328.0], [64.6, 328.0], [64.7, 328.0], [64.8, 328.0], [64.9, 328.0], [65.0, 328.0], [65.1, 328.0], [65.2, 329.0], [65.3, 329.0], [65.4, 329.0], [65.5, 329.0], [65.6, 329.0], [65.7, 329.0], [65.8, 329.0], [65.9, 330.0], [66.0, 330.0], [66.1, 330.0], [66.2, 330.0], [66.3, 330.0], [66.4, 330.0], [66.5, 331.0], [66.6, 331.0], [66.7, 331.0], [66.8, 331.0], [66.9, 331.0], [67.0, 331.0], [67.1, 331.0], [67.2, 332.0], [67.3, 332.0], [67.4, 332.0], [67.5, 332.0], [67.6, 332.0], [67.7, 332.0], [67.8, 332.0], [67.9, 333.0], [68.0, 333.0], [68.1, 333.0], [68.2, 333.0], [68.3, 333.0], [68.4, 333.0], [68.5, 333.0], [68.6, 333.0], [68.7, 334.0], [68.8, 334.0], [68.9, 334.0], [69.0, 334.0], [69.1, 334.0], [69.2, 334.0], [69.3, 334.0], [69.4, 334.0], [69.5, 335.0], [69.6, 335.0], [69.7, 335.0], [69.8, 335.0], [69.9, 335.0], [70.0, 335.0], [70.1, 335.0], [70.2, 335.0], [70.3, 336.0], [70.4, 336.0], [70.5, 336.0], [70.6, 336.0], [70.7, 336.0], [70.8, 336.0], [70.9, 336.0], [71.0, 336.0], [71.1, 337.0], [71.2, 337.0], [71.3, 337.0], [71.4, 337.0], [71.5, 337.0], [71.6, 337.0], [71.7, 337.0], [71.8, 337.0], [71.9, 337.0], [72.0, 337.0], [72.1, 338.0], [72.2, 338.0], [72.3, 338.0], [72.4, 338.0], [72.5, 338.0], [72.6, 338.0], [72.7, 338.0], [72.8, 338.0], [72.9, 338.0], [73.0, 338.0], [73.1, 339.0], [73.2, 339.0], [73.3, 339.0], [73.4, 339.0], [73.5, 339.0], [73.6, 339.0], [73.7, 339.0], [73.8, 339.0], [73.9, 339.0], [74.0, 339.0], [74.1, 339.0], [74.2, 339.0], [74.3, 340.0], [74.4, 340.0], [74.5, 340.0], [74.6, 340.0], [74.7, 340.0], [74.8, 340.0], [74.9, 340.0], [75.0, 340.0], [75.1, 340.0], [75.2, 340.0], [75.3, 340.0], [75.4, 340.0], [75.5, 340.0], [75.6, 341.0], [75.7, 341.0], [75.8, 341.0], [75.9, 341.0], [76.0, 341.0], [76.1, 341.0], [76.2, 341.0], [76.3, 341.0], [76.4, 341.0], [76.5, 341.0], [76.6, 341.0], [76.7, 341.0], [76.8, 341.0], [76.9, 342.0], [77.0, 342.0], [77.1, 342.0], [77.2, 342.0], [77.3, 342.0], [77.4, 342.0], [77.5, 342.0], [77.6, 342.0], [77.7, 342.0], [77.8, 342.0], [77.9, 342.0], [78.0, 342.0], [78.1, 342.0], [78.2, 343.0], [78.3, 343.0], [78.4, 343.0], [78.5, 343.0], [78.6, 343.0], [78.7, 343.0], [78.8, 343.0], [78.9, 343.0], [79.0, 343.0], [79.1, 343.0], [79.2, 343.0], [79.3, 343.0], [79.4, 343.0], [79.5, 344.0], [79.6, 344.0], [79.7, 344.0], [79.8, 344.0], [79.9, 344.0], [80.0, 344.0], [80.1, 344.0], [80.2, 344.0], [80.3, 344.0], [80.4, 344.0], [80.5, 344.0], [80.6, 344.0], [80.7, 344.0], [80.8, 344.0], [80.9, 345.0], [81.0, 345.0], [81.1, 345.0], [81.2, 345.0], [81.3, 345.0], [81.4, 345.0], [81.5, 345.0], [81.6, 345.0], [81.7, 345.0], [81.8, 345.0], [81.9, 345.0], [82.0, 345.0], [82.1, 345.0], [82.2, 345.0], [82.3, 345.0], [82.4, 346.0], [82.5, 346.0], [82.6, 346.0], [82.7, 346.0], [82.8, 346.0], [82.9, 346.0], [83.0, 346.0], [83.1, 346.0], [83.2, 346.0], [83.3, 346.0], [83.4, 346.0], [83.5, 346.0], [83.6, 346.0], [83.7, 346.0], [83.8, 346.0], [83.9, 347.0], [84.0, 347.0], [84.1, 347.0], [84.2, 347.0], [84.3, 347.0], [84.4, 347.0], [84.5, 347.0], [84.6, 347.0], [84.7, 347.0], [84.8, 347.0], [84.9, 347.0], [85.0, 347.0], [85.1, 347.0], [85.2, 347.0], [85.3, 348.0], [85.4, 348.0], [85.5, 348.0], [85.6, 348.0], [85.7, 348.0], [85.8, 348.0], [85.9, 348.0], [86.0, 348.0], [86.1, 348.0], [86.2, 348.0], [86.3, 348.0], [86.4, 348.0], [86.5, 348.0], [86.6, 349.0], [86.7, 349.0], [86.8, 349.0], [86.9, 349.0], [87.0, 349.0], [87.1, 349.0], [87.2, 349.0], [87.3, 349.0], [87.4, 349.0], [87.5, 349.0], [87.6, 349.0], [87.7, 350.0], [87.8, 350.0], [87.9, 350.0], [88.0, 350.0], [88.1, 350.0], [88.2, 350.0], [88.3, 350.0], [88.4, 350.0], [88.5, 350.0], [88.6, 350.0], [88.7, 350.0], [88.8, 351.0], [88.9, 351.0], [89.0, 351.0], [89.1, 351.0], [89.2, 351.0], [89.3, 351.0], [89.4, 351.0], [89.5, 351.0], [89.6, 351.0], [89.7, 351.0], [89.8, 351.0], [89.9, 351.0], [90.0, 352.0], [90.1, 352.0], [90.2, 352.0], [90.3, 352.0], [90.4, 352.0], [90.5, 352.0], [90.6, 352.0], [90.7, 352.0], [90.8, 352.0], [90.9, 352.0], [91.0, 353.0], [91.1, 353.0], [91.2, 353.0], [91.3, 353.0], [91.4, 353.0], [91.5, 353.0], [91.6, 353.0], [91.7, 353.0], [91.8, 353.0], [91.9, 354.0], [92.0, 354.0], [92.1, 354.0], [92.2, 354.0], [92.3, 354.0], [92.4, 354.0], [92.5, 354.0], [92.6, 354.0], [92.7, 355.0], [92.8, 355.0], [92.9, 355.0], [93.0, 355.0], [93.1, 355.0], [93.2, 355.0], [93.3, 355.0], [93.4, 356.0], [93.5, 356.0], [93.6, 356.0], [93.7, 356.0], [93.8, 356.0], [93.9, 356.0], [94.0, 357.0], [94.1, 357.0], [94.2, 357.0], [94.3, 357.0], [94.4, 357.0], [94.5, 357.0], [94.6, 358.0], [94.7, 358.0], [94.8, 358.0], [94.9, 358.0], [95.0, 358.0], [95.1, 359.0], [95.2, 359.0], [95.3, 359.0], [95.4, 359.0], [95.5, 360.0], [95.6, 360.0], [95.7, 360.0], [95.8, 360.0], [95.9, 361.0], [96.0, 361.0], [96.1, 361.0], [96.2, 362.0], [96.3, 362.0], [96.4, 362.0], [96.5, 363.0], [96.6, 363.0], [96.7, 363.0], [96.8, 364.0], [96.9, 364.0], [97.0, 365.0], [97.1, 365.0], [97.2, 366.0], [97.3, 366.0], [97.4, 367.0], [97.5, 368.0], [97.6, 368.0], [97.7, 369.0], [97.8, 370.0], [97.9, 370.0], [98.0, 371.0], [98.1, 372.0], [98.2, 373.0], [98.3, 375.0], [98.4, 376.0], [98.5, 378.0], [98.6, 380.0], [98.7, 382.0], [98.8, 384.0], [98.9, 385.0], [99.0, 388.0], [99.1, 390.0], [99.2, 393.0], [99.3, 395.0], [99.4, 397.0], [99.5, 401.0], [99.6, 404.0], [99.7, 408.0], [99.8, 412.0], [99.9, 419.0], [100.0, 1274.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 158289.0, "series": [{"data": [[0.0, 2980.0], [300.0, 158289.0], [1200.0, 7.0], [100.0, 4008.0], [200.0, 122688.0], [400.0, 1541.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 289506.0, "series": [{"data": [[0.0, 289506.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 7.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 106.53481401405355, "minX": 1.5595161E12, "maxY": 150.0, "series": [{"data": [[1.55951616E12, 150.0], [1.55951664E12, 150.0], [1.55951634E12, 150.0], [1.55951652E12, 150.0], [1.55951622E12, 150.0], [1.5595167E12, 148.23905915894497], [1.5595164E12, 150.0], [1.5595161E12, 106.53481401405355], [1.55951658E12, 150.0], [1.55951628E12, 150.0], [1.55951646E12, 150.0]], "isOverall": false, "label": "Grupo de Usu\u00E1rios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5595167E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 13.087499999999995, "minX": 1.0, "maxY": 322.9684210526318, "series": [{"data": [[2.0, 136.0], [3.0, 26.400000000000002], [4.0, 14.33333333333334], [5.0, 13.087499999999995], [6.0, 17.08571428571429], [7.0, 17.300000000000004], [8.0, 18.465116279069765], [9.0, 22.939024390243897], [10.0, 28.611111111111107], [11.0, 31.424657534246577], [12.0, 35.28358208955223], [13.0, 37.23684210526317], [14.0, 34.72499999999999], [15.0, 35.770114942528735], [16.0, 38.38383838383838], [17.0, 33.608695652173914], [18.0, 42.31914893617021], [19.0, 44.139534883720934], [20.0, 44.40816326530612], [21.0, 58.657142857142865], [22.0, 60.55263157894737], [23.0, 57.670731707317074], [24.0, 68.87671232876716], [25.0, 64.6746987951807], [26.0, 53.14583333333334], [27.0, 53.79207920792078], [28.0, 54.066037735849065], [29.0, 62.98989898989899], [30.0, 72.62500000000003], [31.0, 65.42718446601941], [32.0, 78.85333333333331], [33.0, 90.89041095890413], [34.0, 92.43421052631575], [35.0, 93.60256410256412], [36.0, 87.30327868852457], [37.0, 68.44444444444443], [38.0, 105.01333333333334], [39.0, 104.75342465753427], [40.0, 178.04444444444442], [41.0, 114.85526315789477], [42.0, 110.92207792207793], [43.0, 113.76000000000002], [44.0, 117.80555555555557], [45.0, 105.71844660194175], [46.0, 103.83333333333333], [47.0, 122.50602409638554], [48.0, 101.30999999999997], [49.0, 108.51190476190479], [50.0, 124.2025316455696], [51.0, 129.24691358024694], [52.0, 140.10389610389615], [53.0, 138.7721518987342], [54.0, 129.9642857142857], [55.0, 133.0609756097561], [56.0, 135.73170731707322], [57.0, 146.06250000000003], [58.0, 144.3292682926829], [59.0, 142.54761904761895], [60.0, 148.97727272727266], [61.0, 156.78947368421055], [62.0, 158.08749999999998], [63.0, 163.58666666666667], [64.0, 163.31645569620255], [65.0, 168.02409638554215], [66.0, 165.30379746835445], [67.0, 169.20512820512815], [68.0, 170.83132530120483], [69.0, 169.06329113924053], [70.0, 167.4651162790698], [71.0, 171.19277108433732], [72.0, 176.25609756097566], [73.0, 190.1466666666667], [74.0, 198.48717948717956], [75.0, 190.12499999999997], [76.0, 186.51249999999987], [77.0, 194.60975609756105], [78.0, 192.56097560975604], [79.0, 192.32530120481925], [80.0, 188.5632183908046], [81.0, 202.11904761904765], [82.0, 200.843373493976], [83.0, 200.50632911392395], [84.0, 204.91666666666669], [85.0, 197.97872340425528], [86.0, 171.14705882352945], [87.0, 165.84000000000006], [88.0, 199.9680851063829], [89.0, 180.86597938144322], [90.0, 215.68354430379748], [91.0, 240.013698630137], [92.0, 235.47560975609753], [93.0, 222.2340425531915], [94.0, 183.2083333333333], [95.0, 220.50000000000003], [96.0, 228.03703703703704], [97.0, 227.40909090909093], [98.0, 241.35526315789468], [99.0, 251.99999999999991], [100.0, 227.84946236559145], [101.0, 251.5394736842105], [102.0, 274.9066666666667], [103.0, 258.8210526315789], [104.0, 205.60465116279062], [105.0, 240.64835164835162], [106.0, 240.96385542168676], [107.0, 225.0869565217391], [108.0, 202.32653061224488], [109.0, 266.6578947368422], [110.0, 285.9324324324322], [111.0, 285.24999999999983], [112.0, 277.91666666666674], [113.0, 254.53999999999994], [114.0, 244.62886597938143], [115.0, 253.18571428571434], [116.0, 290.4698795180723], [117.0, 290.9999999999998], [118.0, 279.74117647058836], [119.0, 250.24999999999994], [120.0, 277.0879120879119], [121.0, 254.0], [122.0, 220.45535714285717], [123.0, 240.22580645161298], [124.0, 258.0], [125.0, 288.66265060240977], [126.0, 279.76785714285734], [127.0, 275.2374999999999], [128.0, 283.3690476190477], [129.0, 268.9417475728154], [130.0, 279.33333333333326], [131.0, 251.25490196078428], [132.0, 270.01204819277103], [133.0, 283.7889908256881], [134.0, 257.1769911504425], [135.0, 298.7383177570094], [136.0, 272.1460674157303], [137.0, 272.22499999999997], [138.0, 241.76470588235298], [139.0, 260.9579831932774], [140.0, 254.9385964912281], [141.0, 266.34782608695645], [142.0, 322.9684210526318], [143.0, 286.21666666666675], [144.0, 278.2125000000001], [145.0, 319.30681818181813], [146.0, 297.75409836065575], [147.0, 267.03738317757006], [148.0, 277.16190476190485], [149.0, 279.28318584070803], [150.0, 308.9009849119915], [1.0, 113.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}, {"data": [[146.90199058418207, 303.16182347598044]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 13445.416666666666, "minX": 1.5595161E12, "maxY": 1679524.6333333333, "series": [{"data": [[1.55951616E12, 1563304.3166666667], [1.55951664E12, 1607557.65], [1.55951634E12, 1584435.2833333334], [1.55951652E12, 1679524.6333333333], [1.55951622E12, 1592400.8833333333], [1.5595167E12, 388046.4166666667], [1.5595164E12, 1640968.9166666667], [1.5595161E12, 1125749.4833333334], [1.55951658E12, 1565406.35], [1.55951628E12, 1629131.15], [1.55951646E12, 1638369.0333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55951616E12, 54166.916666666664], [1.55951664E12, 55700.25], [1.55951634E12, 54899.083333333336], [1.55951652E12, 58193.833333333336], [1.55951622E12, 55175.083333333336], [1.5595167E12, 13445.416666666666], [1.5595164E12, 56857.916666666664], [1.5595161E12, 39006.083333333336], [1.55951658E12, 54239.75], [1.55951628E12, 56447.75], [1.55951646E12, 56767.833333333336]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5595167E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 228.13812589062027, "minX": 1.5595161E12, "maxY": 318.3060047415167, "series": [{"data": [[1.55951616E12, 318.3060047415167], [1.55951664E12, 309.77881008912436], [1.55951634E12, 314.0031770415124], [1.55951652E12, 296.3961201501892], [1.55951622E12, 312.48139785319836], [1.5595167E12, 307.81069137562196], [1.5595164E12, 303.42929378054754], [1.5595161E12, 228.13812589062027], [1.55951658E12, 317.6160995088172], [1.55951628E12, 305.51261417269393], [1.55951646E12, 303.64494564116313]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5595167E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 227.88491965996712, "minX": 1.5595161E12, "maxY": 318.1988252361934, "series": [{"data": [[1.55951616E12, 318.1988252361934], [1.55951664E12, 309.6682495440641], [1.55951634E12, 313.8994518730564], [1.55951652E12, 296.29033001778345], [1.55951622E12, 312.3720081981455], [1.5595167E12, 307.7070563079122], [1.5595164E12, 303.32243384459866], [1.5595161E12, 227.88491965996712], [1.55951658E12, 317.5042581009919], [1.55951628E12, 305.4028046585839], [1.55951646E12, 303.53474238638637]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5595167E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.8436693876108706, "minX": 1.5595161E12, "maxY": 2.75382045108348, "series": [{"data": [[1.55951616E12, 0.8628498637698562], [1.55951664E12, 0.8754688414025628], [1.55951634E12, 0.8693572600635424], [1.55951652E12, 0.955009551412948], [1.55951622E12, 0.8707055268002937], [1.5595167E12, 0.8795438346400587], [1.5595164E12, 0.876993089499414], [1.5595161E12, 2.75382045108348], [1.55951658E12, 0.8436693876108706], [1.55951628E12, 0.8904281688227887], [1.55951646E12, 0.9017151732054771]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5595167E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.5595161E12, "maxY": 1274.0, "series": [{"data": [[1.55951616E12, 426.0], [1.55951664E12, 423.0], [1.55951634E12, 425.0], [1.55951652E12, 413.0], [1.55951622E12, 441.0], [1.5595167E12, 376.0], [1.5595164E12, 426.0], [1.5595161E12, 1274.0], [1.55951658E12, 419.0], [1.55951628E12, 416.0], [1.55951646E12, 414.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.55951616E12, 227.0], [1.55951664E12, 238.0], [1.55951634E12, 229.0], [1.55951652E12, 239.0], [1.55951622E12, 240.0], [1.5595167E12, 113.0], [1.5595164E12, 240.0], [1.5595161E12, 5.0], [1.55951658E12, 239.0], [1.55951628E12, 236.0], [1.55951646E12, 237.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.55951616E12, 359.0], [1.55951664E12, 352.0], [1.55951634E12, 356.0], [1.55951652E12, 347.0], [1.55951622E12, 351.0], [1.5595167E12, 347.0], [1.5595164E12, 345.0], [1.5595161E12, 336.0], [1.55951658E12, 357.0], [1.55951628E12, 345.0], [1.55951646E12, 351.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.55951616E12, 400.0], [1.55951664E12, 401.0], [1.55951634E12, 390.0], [1.55951652E12, 389.0], [1.55951622E12, 372.0], [1.5595167E12, 362.0], [1.5595164E12, 377.0], [1.5595161E12, 367.0], [1.55951658E12, 395.0], [1.55951628E12, 366.0], [1.55951646E12, 383.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.55951616E12, 365.0], [1.55951664E12, 359.0], [1.55951634E12, 363.0], [1.55951652E12, 355.0], [1.55951622E12, 355.0], [1.5595167E12, 351.0], [1.5595164E12, 350.0], [1.5595161E12, 343.0], [1.55951658E12, 366.0], [1.55951628E12, 352.0], [1.55951646E12, 358.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5595167E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 10.0, "minX": 163.0, "maxY": 355.0, "series": [{"data": [[163.0, 10.0], [204.0, 304.0], [365.0, 100.0], [389.0, 18.0], [385.0, 32.0], [388.0, 60.0], [398.0, 109.0], [392.0, 260.5], [393.0, 187.0], [400.0, 228.0], [401.0, 144.0], [403.0, 167.0], [404.0, 238.0], [411.0, 229.0], [414.0, 355.0], [415.0, 345.0], [413.0, 353.0], [429.0, 290.5], [420.0, 117.0], [421.0, 350.0], [424.0, 338.0], [426.0, 287.0], [427.0, 346.0], [430.0, 350.0], [431.0, 346.0], [425.0, 353.0], [422.0, 349.0], [417.0, 354.0], [423.0, 355.0], [416.0, 354.0], [428.0, 347.0], [418.0, 347.0], [444.0, 346.0], [437.0, 315.5], [443.0, 336.0], [436.0, 340.0], [433.0, 353.0], [439.0, 345.0], [432.0, 321.0], [438.0, 348.0], [445.0, 345.0], [446.0, 339.0], [447.0, 342.0], [442.0, 343.0], [441.0, 342.0], [440.0, 343.0], [434.0, 340.0], [435.0, 345.0], [450.0, 335.0], [456.0, 332.0], [457.0, 316.0], [458.0, 335.0], [459.0, 333.0], [454.0, 329.0], [461.0, 332.0], [460.0, 327.0], [451.0, 342.0], [453.0, 335.0], [463.0, 335.0], [462.0, 326.0], [448.0, 331.0], [455.0, 329.0], [449.0, 344.0], [452.0, 341.0], [467.0, 337.0], [472.0, 304.0], [475.0, 310.0], [465.0, 319.0], [466.0, 324.0], [479.0, 302.0], [464.0, 316.0], [476.0, 312.0], [477.0, 309.0], [478.0, 308.0], [473.0, 324.0], [474.0, 327.0], [468.0, 315.0], [469.0, 329.0], [471.0, 327.0], [470.0, 313.0], [483.0, 299.0], [486.0, 305.0], [485.0, 300.0], [484.0, 320.0], [491.0, 303.0], [487.0, 307.0], [495.0, 301.0], [494.0, 310.0], [489.0, 301.0], [488.0, 297.0], [492.0, 298.0], [493.0, 301.0], [480.0, 310.0], [490.0, 313.0], [481.0, 310.0], [482.0, 308.0], [498.0, 302.0], [501.0, 300.0], [500.0, 310.0], [502.0, 304.0], [507.0, 285.0], [506.0, 296.0], [504.0, 296.0], [505.0, 292.0], [503.0, 298.0], [511.0, 294.0], [497.0, 296.0], [496.0, 314.0], [510.0, 292.0], [509.0, 296.0], [508.0, 300.0], [499.0, 303.0], [518.0, 300.0], [543.0, 259.0], [526.0, 279.0], [535.0, 278.0], [531.0, 279.0], [532.0, 278.5], [530.0, 284.0], [529.0, 275.0], [528.0, 280.0], [525.0, 289.0], [520.0, 299.0], [521.0, 285.0], [524.0, 279.0], [523.0, 287.0], [533.0, 277.0], [517.0, 296.0], [513.0, 287.0], [512.0, 296.5], [514.0, 287.0], [515.0, 302.0], [516.0, 294.0], [541.0, 265.0], [542.0, 267.0], [519.0, 292.0], [537.0, 285.0], [540.0, 274.0], [539.0, 269.0], [527.0, 280.0], [534.0, 288.0], [551.0, 272.0], [560.0, 259.0], [561.0, 274.0], [562.0, 250.0], [565.0, 260.0], [566.0, 268.0], [567.0, 258.0], [550.0, 283.0], [549.0, 273.0], [554.0, 270.0], [548.0, 271.5], [575.0, 259.0], [559.0, 260.0], [556.0, 275.0], [555.0, 274.0], [557.0, 260.0], [545.0, 269.0], [547.0, 258.0], [568.0, 263.0], [571.0, 260.0], [573.0, 253.0], [552.0, 261.0], [582.0, 257.0], [578.0, 256.0], [577.0, 260.0], [595.0, 251.0], [599.0, 256.0], [581.0, 256.0], [580.0, 257.0], [585.0, 254.0], [587.0, 253.0], [594.0, 255.0], [593.0, 251.0], [588.0, 257.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 599.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 10.0, "minX": 163.0, "maxY": 355.0, "series": [{"data": [[163.0, 10.0], [204.0, 304.0], [365.0, 100.0], [389.0, 18.0], [385.0, 32.0], [388.0, 60.0], [398.0, 107.0], [392.0, 259.5], [393.0, 187.0], [400.0, 228.0], [401.0, 144.0], [403.0, 167.0], [404.0, 237.5], [411.0, 229.0], [414.0, 355.0], [415.0, 345.0], [413.0, 353.0], [429.0, 290.5], [420.0, 116.0], [421.0, 350.0], [424.0, 338.0], [426.0, 287.0], [427.0, 346.0], [430.0, 350.0], [431.0, 346.0], [425.0, 353.0], [422.0, 349.0], [417.0, 354.0], [423.0, 355.0], [416.0, 354.0], [428.0, 347.0], [418.0, 347.0], [444.0, 346.0], [437.0, 315.0], [443.0, 335.0], [436.0, 340.0], [433.0, 353.0], [439.0, 345.0], [432.0, 321.0], [438.0, 348.0], [445.0, 345.0], [446.0, 339.0], [447.0, 342.0], [442.0, 343.0], [441.0, 341.0], [440.0, 342.0], [434.0, 340.0], [435.0, 345.0], [450.0, 335.0], [456.0, 332.0], [457.0, 316.0], [458.0, 335.0], [459.0, 333.0], [454.0, 329.0], [461.0, 332.0], [460.0, 327.0], [451.0, 342.0], [453.0, 335.0], [463.0, 334.0], [462.0, 326.0], [448.0, 331.0], [455.0, 329.0], [449.0, 344.0], [452.0, 340.0], [467.0, 337.0], [472.0, 304.0], [475.0, 310.0], [465.0, 319.0], [466.0, 323.0], [479.0, 302.0], [464.0, 316.0], [476.0, 312.0], [477.0, 309.0], [478.0, 308.0], [473.0, 324.0], [474.0, 327.0], [468.0, 314.0], [469.0, 329.0], [471.0, 327.0], [470.0, 313.0], [483.0, 298.0], [486.0, 305.0], [485.0, 300.0], [484.0, 320.0], [491.0, 302.0], [487.0, 307.0], [495.0, 301.0], [494.0, 310.0], [489.0, 301.0], [488.0, 297.0], [492.0, 298.0], [493.0, 300.5], [480.0, 310.0], [490.0, 313.0], [481.0, 310.0], [482.0, 308.0], [498.0, 302.0], [501.0, 300.0], [500.0, 309.0], [502.0, 303.0], [507.0, 285.0], [506.0, 296.0], [504.0, 296.0], [505.0, 292.0], [503.0, 298.0], [511.0, 294.0], [497.0, 295.0], [496.0, 314.0], [510.0, 292.0], [509.0, 296.0], [508.0, 299.0], [499.0, 303.0], [518.0, 300.0], [543.0, 259.0], [526.0, 279.0], [535.0, 278.0], [531.0, 279.0], [532.0, 278.0], [530.0, 284.0], [529.0, 274.0], [528.0, 280.0], [525.0, 289.0], [520.0, 299.0], [521.0, 285.0], [524.0, 279.0], [523.0, 287.0], [533.0, 277.0], [517.0, 296.0], [513.0, 287.0], [512.0, 296.0], [514.0, 287.0], [515.0, 302.0], [516.0, 294.0], [541.0, 265.0], [542.0, 267.0], [519.0, 292.0], [537.0, 285.0], [540.0, 273.0], [539.0, 269.0], [527.0, 280.0], [534.0, 288.0], [551.0, 272.0], [560.0, 259.0], [561.0, 274.0], [562.0, 250.0], [565.0, 260.0], [566.0, 268.0], [567.0, 258.0], [550.0, 283.0], [549.0, 273.0], [554.0, 270.0], [548.0, 271.5], [575.0, 259.0], [559.0, 260.0], [556.0, 275.0], [555.0, 274.0], [557.0, 260.0], [545.0, 269.0], [547.0, 258.0], [568.0, 262.5], [571.0, 260.0], [573.0, 253.0], [552.0, 260.0], [582.0, 257.0], [578.0, 256.0], [577.0, 260.0], [595.0, 251.0], [599.0, 255.0], [581.0, 255.0], [580.0, 256.0], [585.0, 254.0], [587.0, 253.0], [594.0, 255.0], [593.0, 251.0], [588.0, 257.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 599.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 114.41666666666667, "minX": 1.5595161E12, "maxY": 506.03333333333336, "series": [{"data": [[1.55951616E12, 471.01666666666665], [1.55951664E12, 484.35], [1.55951634E12, 477.3833333333333], [1.55951652E12, 506.03333333333336], [1.55951622E12, 479.78333333333336], [1.5595167E12, 114.41666666666667], [1.5595164E12, 494.4166666666667], [1.5595161E12, 341.68333333333334], [1.55951658E12, 471.65], [1.55951628E12, 490.85], [1.55951646E12, 493.6333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5595167E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 116.91666666666667, "minX": 1.5595161E12, "maxY": 506.03333333333336, "series": [{"data": [[1.55951616E12, 471.01666666666665], [1.55951664E12, 484.35], [1.55951634E12, 477.3833333333333], [1.55951652E12, 506.03333333333336], [1.55951622E12, 479.78333333333336], [1.5595167E12, 116.91666666666667], [1.5595164E12, 494.4166666666667], [1.5595161E12, 339.18333333333334], [1.55951658E12, 471.65], [1.55951628E12, 490.85], [1.55951646E12, 493.6333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5595167E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 116.91666666666667, "minX": 1.5595161E12, "maxY": 506.03333333333336, "series": [{"data": [[1.55951616E12, 471.01666666666665], [1.55951664E12, 484.35], [1.55951634E12, 477.3833333333333], [1.55951652E12, 506.03333333333336], [1.55951622E12, 479.78333333333336], [1.5595167E12, 116.91666666666667], [1.5595164E12, 494.4166666666667], [1.5595161E12, 339.18333333333334], [1.55951658E12, 471.65], [1.55951628E12, 490.85], [1.55951646E12, 493.6333333333333]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5595167E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 116.91666666666667, "minX": 1.5595161E12, "maxY": 506.03333333333336, "series": [{"data": [[1.55951616E12, 471.01666666666665], [1.55951664E12, 484.35], [1.55951634E12, 477.3833333333333], [1.55951652E12, 506.03333333333336], [1.55951622E12, 479.78333333333336], [1.5595167E12, 116.91666666666667], [1.5595164E12, 494.4166666666667], [1.5595161E12, 339.18333333333334], [1.55951658E12, 471.65], [1.55951628E12, 490.85], [1.55951646E12, 493.6333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5595167E12, "title": "Total Transactions Per Second"}},
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

