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
        data: {"result": {"minY": 10.0, "minX": 0.0, "maxY": 487.0, "series": [{"data": [[0.0, 10.0], [0.1, 45.0], [0.2, 61.0], [0.3, 77.0], [0.4, 88.0], [0.5, 99.0], [0.6, 106.0], [0.7, 113.0], [0.8, 121.0], [0.9, 130.0], [1.0, 139.0], [1.1, 148.0], [1.2, 155.0], [1.3, 160.0], [1.4, 171.0], [1.5, 179.0], [1.6, 188.0], [1.7, 195.0], [1.8, 202.0], [1.9, 213.0], [2.0, 220.0], [2.1, 226.0], [2.2, 233.0], [2.3, 241.0], [2.4, 248.0], [2.5, 253.0], [2.6, 259.0], [2.7, 268.0], [2.8, 271.0], [2.9, 272.0], [3.0, 272.0], [3.1, 272.0], [3.2, 273.0], [3.3, 273.0], [3.4, 273.0], [3.5, 273.0], [3.6, 273.0], [3.7, 274.0], [3.8, 274.0], [3.9, 274.0], [4.0, 274.0], [4.1, 274.0], [4.2, 274.0], [4.3, 275.0], [4.4, 275.0], [4.5, 275.0], [4.6, 275.0], [4.7, 275.0], [4.8, 275.0], [4.9, 275.0], [5.0, 276.0], [5.1, 276.0], [5.2, 276.0], [5.3, 276.0], [5.4, 276.0], [5.5, 276.0], [5.6, 276.0], [5.7, 277.0], [5.8, 277.0], [5.9, 277.0], [6.0, 277.0], [6.1, 277.0], [6.2, 277.0], [6.3, 277.0], [6.4, 277.0], [6.5, 278.0], [6.6, 278.0], [6.7, 278.0], [6.8, 278.0], [6.9, 278.0], [7.0, 278.0], [7.1, 278.0], [7.2, 278.0], [7.3, 278.0], [7.4, 278.0], [7.5, 278.0], [7.6, 279.0], [7.7, 279.0], [7.8, 279.0], [7.9, 279.0], [8.0, 279.0], [8.1, 279.0], [8.2, 279.0], [8.3, 279.0], [8.4, 279.0], [8.5, 279.0], [8.6, 279.0], [8.7, 279.0], [8.8, 279.0], [8.9, 279.0], [9.0, 280.0], [9.1, 280.0], [9.2, 280.0], [9.3, 280.0], [9.4, 280.0], [9.5, 280.0], [9.6, 280.0], [9.7, 280.0], [9.8, 280.0], [9.9, 280.0], [10.0, 280.0], [10.1, 280.0], [10.2, 280.0], [10.3, 280.0], [10.4, 280.0], [10.5, 281.0], [10.6, 281.0], [10.7, 281.0], [10.8, 281.0], [10.9, 281.0], [11.0, 281.0], [11.1, 281.0], [11.2, 281.0], [11.3, 281.0], [11.4, 281.0], [11.5, 281.0], [11.6, 281.0], [11.7, 281.0], [11.8, 281.0], [11.9, 281.0], [12.0, 282.0], [12.1, 282.0], [12.2, 282.0], [12.3, 282.0], [12.4, 282.0], [12.5, 282.0], [12.6, 282.0], [12.7, 282.0], [12.8, 282.0], [12.9, 282.0], [13.0, 282.0], [13.1, 282.0], [13.2, 282.0], [13.3, 283.0], [13.4, 283.0], [13.5, 283.0], [13.6, 283.0], [13.7, 283.0], [13.8, 283.0], [13.9, 283.0], [14.0, 283.0], [14.1, 283.0], [14.2, 283.0], [14.3, 283.0], [14.4, 283.0], [14.5, 283.0], [14.6, 283.0], [14.7, 284.0], [14.8, 284.0], [14.9, 284.0], [15.0, 284.0], [15.1, 284.0], [15.2, 284.0], [15.3, 284.0], [15.4, 284.0], [15.5, 284.0], [15.6, 284.0], [15.7, 284.0], [15.8, 284.0], [15.9, 285.0], [16.0, 285.0], [16.1, 285.0], [16.2, 285.0], [16.3, 285.0], [16.4, 285.0], [16.5, 285.0], [16.6, 285.0], [16.7, 285.0], [16.8, 286.0], [16.9, 286.0], [17.0, 286.0], [17.1, 286.0], [17.2, 286.0], [17.3, 286.0], [17.4, 286.0], [17.5, 287.0], [17.6, 287.0], [17.7, 287.0], [17.8, 287.0], [17.9, 287.0], [18.0, 287.0], [18.1, 287.0], [18.2, 288.0], [18.3, 288.0], [18.4, 288.0], [18.5, 288.0], [18.6, 288.0], [18.7, 288.0], [18.8, 288.0], [18.9, 288.0], [19.0, 289.0], [19.1, 289.0], [19.2, 289.0], [19.3, 289.0], [19.4, 289.0], [19.5, 289.0], [19.6, 290.0], [19.7, 290.0], [19.8, 290.0], [19.9, 290.0], [20.0, 290.0], [20.1, 291.0], [20.2, 291.0], [20.3, 291.0], [20.4, 291.0], [20.5, 291.0], [20.6, 291.0], [20.7, 292.0], [20.8, 292.0], [20.9, 292.0], [21.0, 292.0], [21.1, 292.0], [21.2, 292.0], [21.3, 293.0], [21.4, 293.0], [21.5, 293.0], [21.6, 293.0], [21.7, 293.0], [21.8, 294.0], [21.9, 294.0], [22.0, 294.0], [22.1, 294.0], [22.2, 294.0], [22.3, 295.0], [22.4, 295.0], [22.5, 295.0], [22.6, 295.0], [22.7, 295.0], [22.8, 295.0], [22.9, 296.0], [23.0, 296.0], [23.1, 296.0], [23.2, 296.0], [23.3, 296.0], [23.4, 297.0], [23.5, 297.0], [23.6, 297.0], [23.7, 297.0], [23.8, 297.0], [23.9, 297.0], [24.0, 298.0], [24.1, 298.0], [24.2, 298.0], [24.3, 298.0], [24.4, 298.0], [24.5, 299.0], [24.6, 299.0], [24.7, 299.0], [24.8, 299.0], [24.9, 299.0], [25.0, 300.0], [25.1, 300.0], [25.2, 300.0], [25.3, 300.0], [25.4, 301.0], [25.5, 301.0], [25.6, 301.0], [25.7, 301.0], [25.8, 301.0], [25.9, 302.0], [26.0, 302.0], [26.1, 302.0], [26.2, 302.0], [26.3, 303.0], [26.4, 303.0], [26.5, 303.0], [26.6, 303.0], [26.7, 304.0], [26.8, 304.0], [26.9, 304.0], [27.0, 304.0], [27.1, 305.0], [27.2, 305.0], [27.3, 305.0], [27.4, 305.0], [27.5, 305.0], [27.6, 306.0], [27.7, 306.0], [27.8, 306.0], [27.9, 306.0], [28.0, 307.0], [28.1, 307.0], [28.2, 307.0], [28.3, 307.0], [28.4, 307.0], [28.5, 308.0], [28.6, 308.0], [28.7, 308.0], [28.8, 308.0], [28.9, 309.0], [29.0, 309.0], [29.1, 309.0], [29.2, 309.0], [29.3, 310.0], [29.4, 310.0], [29.5, 310.0], [29.6, 310.0], [29.7, 311.0], [29.8, 311.0], [29.9, 311.0], [30.0, 311.0], [30.1, 312.0], [30.2, 312.0], [30.3, 312.0], [30.4, 312.0], [30.5, 313.0], [30.6, 313.0], [30.7, 313.0], [30.8, 313.0], [30.9, 314.0], [31.0, 314.0], [31.1, 314.0], [31.2, 314.0], [31.3, 314.0], [31.4, 315.0], [31.5, 315.0], [31.6, 315.0], [31.7, 315.0], [31.8, 315.0], [31.9, 316.0], [32.0, 316.0], [32.1, 316.0], [32.2, 316.0], [32.3, 316.0], [32.4, 316.0], [32.5, 317.0], [32.6, 317.0], [32.7, 317.0], [32.8, 317.0], [32.9, 317.0], [33.0, 317.0], [33.1, 318.0], [33.2, 318.0], [33.3, 318.0], [33.4, 318.0], [33.5, 318.0], [33.6, 318.0], [33.7, 318.0], [33.8, 319.0], [33.9, 319.0], [34.0, 319.0], [34.1, 319.0], [34.2, 319.0], [34.3, 319.0], [34.4, 319.0], [34.5, 320.0], [34.6, 320.0], [34.7, 320.0], [34.8, 320.0], [34.9, 320.0], [35.0, 320.0], [35.1, 320.0], [35.2, 320.0], [35.3, 320.0], [35.4, 321.0], [35.5, 321.0], [35.6, 321.0], [35.7, 321.0], [35.8, 321.0], [35.9, 321.0], [36.0, 321.0], [36.1, 321.0], [36.2, 321.0], [36.3, 322.0], [36.4, 322.0], [36.5, 322.0], [36.6, 322.0], [36.7, 322.0], [36.8, 322.0], [36.9, 322.0], [37.0, 322.0], [37.1, 322.0], [37.2, 322.0], [37.3, 323.0], [37.4, 323.0], [37.5, 323.0], [37.6, 323.0], [37.7, 323.0], [37.8, 323.0], [37.9, 323.0], [38.0, 323.0], [38.1, 323.0], [38.2, 323.0], [38.3, 324.0], [38.4, 324.0], [38.5, 324.0], [38.6, 324.0], [38.7, 324.0], [38.8, 324.0], [38.9, 324.0], [39.0, 324.0], [39.1, 324.0], [39.2, 324.0], [39.3, 325.0], [39.4, 325.0], [39.5, 325.0], [39.6, 325.0], [39.7, 325.0], [39.8, 325.0], [39.9, 325.0], [40.0, 325.0], [40.1, 325.0], [40.2, 325.0], [40.3, 326.0], [40.4, 326.0], [40.5, 326.0], [40.6, 326.0], [40.7, 326.0], [40.8, 326.0], [40.9, 326.0], [41.0, 326.0], [41.1, 326.0], [41.2, 327.0], [41.3, 327.0], [41.4, 327.0], [41.5, 327.0], [41.6, 327.0], [41.7, 327.0], [41.8, 327.0], [41.9, 327.0], [42.0, 327.0], [42.1, 328.0], [42.2, 328.0], [42.3, 328.0], [42.4, 328.0], [42.5, 328.0], [42.6, 328.0], [42.7, 328.0], [42.8, 328.0], [42.9, 329.0], [43.0, 329.0], [43.1, 329.0], [43.2, 329.0], [43.3, 329.0], [43.4, 329.0], [43.5, 329.0], [43.6, 330.0], [43.7, 330.0], [43.8, 330.0], [43.9, 330.0], [44.0, 330.0], [44.1, 330.0], [44.2, 331.0], [44.3, 331.0], [44.4, 331.0], [44.5, 331.0], [44.6, 331.0], [44.7, 331.0], [44.8, 331.0], [44.9, 332.0], [45.0, 332.0], [45.1, 332.0], [45.2, 332.0], [45.3, 332.0], [45.4, 332.0], [45.5, 333.0], [45.6, 333.0], [45.7, 333.0], [45.8, 333.0], [45.9, 333.0], [46.0, 333.0], [46.1, 334.0], [46.2, 334.0], [46.3, 334.0], [46.4, 334.0], [46.5, 334.0], [46.6, 334.0], [46.7, 334.0], [46.8, 335.0], [46.9, 335.0], [47.0, 335.0], [47.1, 335.0], [47.2, 335.0], [47.3, 335.0], [47.4, 335.0], [47.5, 336.0], [47.6, 336.0], [47.7, 336.0], [47.8, 336.0], [47.9, 336.0], [48.0, 336.0], [48.1, 336.0], [48.2, 336.0], [48.3, 337.0], [48.4, 337.0], [48.5, 337.0], [48.6, 337.0], [48.7, 337.0], [48.8, 337.0], [48.9, 337.0], [49.0, 337.0], [49.1, 337.0], [49.2, 338.0], [49.3, 338.0], [49.4, 338.0], [49.5, 338.0], [49.6, 338.0], [49.7, 338.0], [49.8, 338.0], [49.9, 338.0], [50.0, 338.0], [50.1, 339.0], [50.2, 339.0], [50.3, 339.0], [50.4, 339.0], [50.5, 339.0], [50.6, 339.0], [50.7, 339.0], [50.8, 340.0], [50.9, 340.0], [51.0, 340.0], [51.1, 340.0], [51.2, 340.0], [51.3, 340.0], [51.4, 340.0], [51.5, 341.0], [51.6, 341.0], [51.7, 341.0], [51.8, 341.0], [51.9, 341.0], [52.0, 341.0], [52.1, 341.0], [52.2, 341.0], [52.3, 342.0], [52.4, 342.0], [52.5, 342.0], [52.6, 342.0], [52.7, 342.0], [52.8, 342.0], [52.9, 342.0], [53.0, 343.0], [53.1, 343.0], [53.2, 343.0], [53.3, 343.0], [53.4, 343.0], [53.5, 343.0], [53.6, 343.0], [53.7, 344.0], [53.8, 344.0], [53.9, 344.0], [54.0, 344.0], [54.1, 344.0], [54.2, 344.0], [54.3, 345.0], [54.4, 345.0], [54.5, 345.0], [54.6, 345.0], [54.7, 345.0], [54.8, 345.0], [54.9, 346.0], [55.0, 346.0], [55.1, 346.0], [55.2, 346.0], [55.3, 346.0], [55.4, 346.0], [55.5, 346.0], [55.6, 347.0], [55.7, 347.0], [55.8, 347.0], [55.9, 347.0], [56.0, 347.0], [56.1, 348.0], [56.2, 348.0], [56.3, 348.0], [56.4, 348.0], [56.5, 348.0], [56.6, 348.0], [56.7, 349.0], [56.8, 349.0], [56.9, 349.0], [57.0, 349.0], [57.1, 349.0], [57.2, 349.0], [57.3, 350.0], [57.4, 350.0], [57.5, 350.0], [57.6, 350.0], [57.7, 350.0], [57.8, 351.0], [57.9, 351.0], [58.0, 351.0], [58.1, 351.0], [58.2, 351.0], [58.3, 351.0], [58.4, 352.0], [58.5, 352.0], [58.6, 352.0], [58.7, 352.0], [58.8, 352.0], [58.9, 353.0], [59.0, 353.0], [59.1, 353.0], [59.2, 353.0], [59.3, 353.0], [59.4, 354.0], [59.5, 354.0], [59.6, 354.0], [59.7, 354.0], [59.8, 354.0], [59.9, 354.0], [60.0, 355.0], [60.1, 355.0], [60.2, 355.0], [60.3, 355.0], [60.4, 355.0], [60.5, 355.0], [60.6, 356.0], [60.7, 356.0], [60.8, 356.0], [60.9, 356.0], [61.0, 356.0], [61.1, 357.0], [61.2, 357.0], [61.3, 357.0], [61.4, 357.0], [61.5, 357.0], [61.6, 358.0], [61.7, 358.0], [61.8, 358.0], [61.9, 358.0], [62.0, 358.0], [62.1, 359.0], [62.2, 359.0], [62.3, 359.0], [62.4, 359.0], [62.5, 359.0], [62.6, 360.0], [62.7, 360.0], [62.8, 360.0], [62.9, 360.0], [63.0, 360.0], [63.1, 361.0], [63.2, 361.0], [63.3, 361.0], [63.4, 361.0], [63.5, 361.0], [63.6, 361.0], [63.7, 362.0], [63.8, 362.0], [63.9, 362.0], [64.0, 362.0], [64.1, 363.0], [64.2, 363.0], [64.3, 363.0], [64.4, 363.0], [64.5, 363.0], [64.6, 364.0], [64.7, 364.0], [64.8, 364.0], [64.9, 364.0], [65.0, 364.0], [65.1, 364.0], [65.2, 365.0], [65.3, 365.0], [65.4, 365.0], [65.5, 365.0], [65.6, 365.0], [65.7, 366.0], [65.8, 366.0], [65.9, 366.0], [66.0, 366.0], [66.1, 366.0], [66.2, 366.0], [66.3, 367.0], [66.4, 367.0], [66.5, 367.0], [66.6, 367.0], [66.7, 367.0], [66.8, 367.0], [66.9, 368.0], [67.0, 368.0], [67.1, 368.0], [67.2, 368.0], [67.3, 368.0], [67.4, 368.0], [67.5, 368.0], [67.6, 368.0], [67.7, 369.0], [67.8, 369.0], [67.9, 369.0], [68.0, 369.0], [68.1, 369.0], [68.2, 369.0], [68.3, 369.0], [68.4, 369.0], [68.5, 369.0], [68.6, 369.0], [68.7, 369.0], [68.8, 370.0], [68.9, 370.0], [69.0, 370.0], [69.1, 370.0], [69.2, 370.0], [69.3, 370.0], [69.4, 370.0], [69.5, 370.0], [69.6, 370.0], [69.7, 370.0], [69.8, 370.0], [69.9, 370.0], [70.0, 371.0], [70.1, 371.0], [70.2, 371.0], [70.3, 371.0], [70.4, 371.0], [70.5, 371.0], [70.6, 371.0], [70.7, 371.0], [70.8, 371.0], [70.9, 371.0], [71.0, 371.0], [71.1, 371.0], [71.2, 371.0], [71.3, 372.0], [71.4, 372.0], [71.5, 372.0], [71.6, 372.0], [71.7, 372.0], [71.8, 372.0], [71.9, 372.0], [72.0, 372.0], [72.1, 372.0], [72.2, 372.0], [72.3, 372.0], [72.4, 372.0], [72.5, 372.0], [72.6, 373.0], [72.7, 373.0], [72.8, 373.0], [72.9, 373.0], [73.0, 373.0], [73.1, 373.0], [73.2, 373.0], [73.3, 373.0], [73.4, 373.0], [73.5, 373.0], [73.6, 373.0], [73.7, 373.0], [73.8, 373.0], [73.9, 374.0], [74.0, 374.0], [74.1, 374.0], [74.2, 374.0], [74.3, 374.0], [74.4, 374.0], [74.5, 374.0], [74.6, 374.0], [74.7, 374.0], [74.8, 374.0], [74.9, 374.0], [75.0, 374.0], [75.1, 374.0], [75.2, 374.0], [75.3, 374.0], [75.4, 374.0], [75.5, 375.0], [75.6, 375.0], [75.7, 375.0], [75.8, 375.0], [75.9, 375.0], [76.0, 375.0], [76.1, 375.0], [76.2, 375.0], [76.3, 375.0], [76.4, 375.0], [76.5, 375.0], [76.6, 375.0], [76.7, 375.0], [76.8, 375.0], [76.9, 375.0], [77.0, 375.0], [77.1, 375.0], [77.2, 376.0], [77.3, 376.0], [77.4, 376.0], [77.5, 376.0], [77.6, 376.0], [77.7, 376.0], [77.8, 376.0], [77.9, 376.0], [78.0, 376.0], [78.1, 376.0], [78.2, 376.0], [78.3, 376.0], [78.4, 376.0], [78.5, 376.0], [78.6, 376.0], [78.7, 376.0], [78.8, 376.0], [78.9, 376.0], [79.0, 376.0], [79.1, 376.0], [79.2, 377.0], [79.3, 377.0], [79.4, 377.0], [79.5, 377.0], [79.6, 377.0], [79.7, 377.0], [79.8, 377.0], [79.9, 377.0], [80.0, 377.0], [80.1, 377.0], [80.2, 377.0], [80.3, 377.0], [80.4, 377.0], [80.5, 377.0], [80.6, 377.0], [80.7, 377.0], [80.8, 377.0], [80.9, 377.0], [81.0, 377.0], [81.1, 377.0], [81.2, 377.0], [81.3, 377.0], [81.4, 377.0], [81.5, 378.0], [81.6, 378.0], [81.7, 378.0], [81.8, 378.0], [81.9, 378.0], [82.0, 378.0], [82.1, 378.0], [82.2, 378.0], [82.3, 378.0], [82.4, 378.0], [82.5, 378.0], [82.6, 378.0], [82.7, 378.0], [82.8, 378.0], [82.9, 378.0], [83.0, 378.0], [83.1, 378.0], [83.2, 378.0], [83.3, 379.0], [83.4, 379.0], [83.5, 379.0], [83.6, 379.0], [83.7, 379.0], [83.8, 379.0], [83.9, 379.0], [84.0, 379.0], [84.1, 379.0], [84.2, 379.0], [84.3, 379.0], [84.4, 379.0], [84.5, 379.0], [84.6, 379.0], [84.7, 379.0], [84.8, 379.0], [84.9, 380.0], [85.0, 380.0], [85.1, 380.0], [85.2, 380.0], [85.3, 380.0], [85.4, 380.0], [85.5, 380.0], [85.6, 380.0], [85.7, 380.0], [85.8, 380.0], [85.9, 380.0], [86.0, 380.0], [86.1, 381.0], [86.2, 381.0], [86.3, 381.0], [86.4, 381.0], [86.5, 381.0], [86.6, 381.0], [86.7, 381.0], [86.8, 381.0], [86.9, 381.0], [87.0, 381.0], [87.1, 381.0], [87.2, 382.0], [87.3, 382.0], [87.4, 382.0], [87.5, 382.0], [87.6, 382.0], [87.7, 382.0], [87.8, 382.0], [87.9, 382.0], [88.0, 383.0], [88.1, 383.0], [88.2, 383.0], [88.3, 383.0], [88.4, 383.0], [88.5, 383.0], [88.6, 383.0], [88.7, 384.0], [88.8, 384.0], [88.9, 384.0], [89.0, 384.0], [89.1, 384.0], [89.2, 384.0], [89.3, 384.0], [89.4, 385.0], [89.5, 385.0], [89.6, 385.0], [89.7, 385.0], [89.8, 385.0], [89.9, 386.0], [90.0, 386.0], [90.1, 386.0], [90.2, 386.0], [90.3, 386.0], [90.4, 386.0], [90.5, 387.0], [90.6, 387.0], [90.7, 387.0], [90.8, 387.0], [90.9, 387.0], [91.0, 388.0], [91.1, 388.0], [91.2, 388.0], [91.3, 388.0], [91.4, 388.0], [91.5, 388.0], [91.6, 389.0], [91.7, 389.0], [91.8, 389.0], [91.9, 389.0], [92.0, 389.0], [92.1, 390.0], [92.2, 390.0], [92.3, 390.0], [92.4, 390.0], [92.5, 390.0], [92.6, 391.0], [92.7, 391.0], [92.8, 391.0], [92.9, 391.0], [93.0, 391.0], [93.1, 392.0], [93.2, 392.0], [93.3, 392.0], [93.4, 392.0], [93.5, 392.0], [93.6, 393.0], [93.7, 393.0], [93.8, 393.0], [93.9, 393.0], [94.0, 394.0], [94.1, 394.0], [94.2, 394.0], [94.3, 394.0], [94.4, 394.0], [94.5, 395.0], [94.6, 395.0], [94.7, 395.0], [94.8, 395.0], [94.9, 396.0], [95.0, 396.0], [95.1, 396.0], [95.2, 396.0], [95.3, 397.0], [95.4, 397.0], [95.5, 397.0], [95.6, 397.0], [95.7, 398.0], [95.8, 398.0], [95.9, 398.0], [96.0, 399.0], [96.1, 399.0], [96.2, 399.0], [96.3, 399.0], [96.4, 400.0], [96.5, 400.0], [96.6, 400.0], [96.7, 401.0], [96.8, 401.0], [96.9, 402.0], [97.0, 402.0], [97.1, 403.0], [97.2, 403.0], [97.3, 404.0], [97.4, 404.0], [97.5, 405.0], [97.6, 405.0], [97.7, 406.0], [97.8, 406.0], [97.9, 407.0], [98.0, 408.0], [98.1, 410.0], [98.2, 411.0], [98.3, 413.0], [98.4, 414.0], [98.5, 416.0], [98.6, 417.0], [98.7, 419.0], [98.8, 420.0], [98.9, 422.0], [99.0, 425.0], [99.1, 426.0], [99.2, 429.0], [99.3, 432.0], [99.4, 435.0], [99.5, 440.0], [99.6, 444.0], [99.7, 449.0], [99.8, 454.0], [99.9, 461.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1774.0, "minX": 0.0, "maxY": 249672.0, "series": [{"data": [[0.0, 1774.0], [300.0, 249672.0], [400.0, 12903.0], [200.0, 81050.0], [100.0, 4435.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 349834.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 349834.0, "series": [{"data": [[0.0, 349834.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 73.25080425637225, "minX": 1.56225024E12, "maxY": 200.0, "series": [{"data": [[1.56225072E12, 200.0], [1.56225042E12, 200.0], [1.56225024E12, 73.25080425637225], [1.5622506E12, 200.0], [1.5622503E12, 194.25692951362714], [1.56225078E12, 200.0], [1.56225048E12, 200.0], [1.56225066E12, 200.0], [1.56225036E12, 200.0], [1.56225084E12, 198.6302445038009], [1.56225054E12, 200.0]], "isOverall": false, "label": "Grupo de Usu\u00E1rios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.56225084E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 31.23809523809524, "minX": 1.0, "maxY": 411.70103092783506, "series": [{"data": [[2.0, 68.0], [3.0, 84.0], [4.0, 120.0], [5.0, 123.0], [6.0, 124.0], [7.0, 182.99999999999997], [8.0, 31.23809523809524], [9.0, 31.45454545454546], [10.0, 39.224999999999994], [11.0, 39.48837209302326], [12.0, 42.3953488372093], [13.0, 38.34545454545453], [14.0, 46.02272727272728], [15.0, 51.56818181818181], [16.0, 54.065217391304344], [17.0, 59.33333333333333], [18.0, 48.620689655172406], [19.0, 48.781818181818174], [20.0, 56.01666666666667], [21.0, 63.553191489361716], [22.0, 68.50000000000001], [23.0, 70.89361702127657], [24.0, 72.7959183673469], [25.0, 71.28846153846159], [26.0, 72.60606060606061], [27.0, 80.88636363636361], [28.0, 79.4285714285714], [29.0, 68.84848484848486], [30.0, 67.11666666666669], [31.0, 98.18], [32.0, 89.00000000000001], [33.0, 87.83333333333333], [34.0, 95.90163934426232], [35.0, 96.843137254902], [36.0, 111.140625], [37.0, 92.43333333333335], [38.0, 125.48275862068971], [39.0, 104.28333333333335], [40.0, 90.8918918918919], [41.0, 88.31506849315066], [42.0, 104.77586206896548], [43.0, 103.96923076923076], [44.0, 85.37333333333332], [45.0, 91.71830985915491], [46.0, 112.40625000000001], [47.0, 114.59677419354841], [48.0, 114.0806451612903], [49.0, 123.83050847457628], [50.0, 114.56249999999999], [51.0, 123.94488188976375], [52.0, 140.7142857142857], [53.0, 136.9074074074074], [54.0, 129.24999999999997], [55.0, 101.91954022988503], [56.0, 109.69117647058825], [57.0, 150.49999999999997], [58.0, 140.87878787878788], [59.0, 136.59999999999997], [60.0, 116.9518072289157], [61.0, 131.89230769230767], [62.0, 114.20430107526882], [63.0, 112.46153846153845], [64.0, 142.41538461538457], [65.0, 135.32432432432432], [66.0, 153.22413793103442], [67.0, 142.31764705882352], [68.0, 126.42465753424659], [69.0, 155.29577464788738], [70.0, 158.30303030303034], [71.0, 153.78787878787884], [72.0, 141.18627450980384], [73.0, 148.86486486486487], [74.0, 171.15624999999994], [75.0, 131.59999999999994], [76.0, 133.73417721518985], [77.0, 157.00000000000003], [78.0, 172.61194029850742], [79.0, 174.05882352941174], [80.0, 164.59090909090904], [81.0, 142.5068493150685], [82.0, 190.1666666666667], [83.0, 207.38235294117644], [84.0, 201.86363636363646], [85.0, 193.48529411764702], [86.0, 186.31944444444446], [87.0, 180.8428571428571], [88.0, 198.12857142857143], [89.0, 192.28], [90.0, 184.27586206896555], [91.0, 162.35051546391753], [92.0, 161.6538461538462], [93.0, 160.13483146067418], [94.0, 158.56179775280899], [95.0, 173.62857142857143], [96.0, 205.25], [97.0, 187.47619047619048], [98.0, 235.9310344827586], [99.0, 221.71951219512198], [100.0, 203.28571428571433], [101.0, 225.20000000000002], [102.0, 221.8767123287671], [103.0, 211.22352941176464], [104.0, 177.8865979381443], [105.0, 176.8488372093023], [106.0, 184.58620689655172], [107.0, 183.03703703703695], [108.0, 221.77142857142854], [109.0, 231.34782608695653], [110.0, 231.0149253731342], [111.0, 251.93243243243245], [112.0, 256.375], [113.0, 274.064935064935], [114.0, 248.81818181818173], [115.0, 207.34883720930233], [116.0, 211.5194805194805], [117.0, 233.51351351351354], [118.0, 238.36619718309865], [119.0, 237.37234042553183], [120.0, 201.33333333333331], [121.0, 224.02499999999998], [122.0, 244.7638888888889], [123.0, 255.34375], [124.0, 260.2530120481927], [125.0, 254.21739130434773], [126.0, 252.34666666666664], [127.0, 292.25806451612897], [128.0, 299.8695652173913], [129.0, 263.88607594936707], [130.0, 254.56000000000012], [131.0, 233.67032967032966], [132.0, 228.46226415094333], [133.0, 200.49473684210525], [134.0, 203.7604166666667], [135.0, 233.3974358974359], [136.0, 276.7179487179488], [137.0, 295.49275362318843], [138.0, 306.7460317460318], [139.0, 283.24752475247533], [140.0, 227.4111111111112], [141.0, 246.69333333333338], [142.0, 262.3627450980391], [143.0, 253.31343283582083], [144.0, 281.28089887640454], [145.0, 263.20930232558135], [146.0, 233.86842105263165], [147.0, 221.03478260869565], [148.0, 241.30303030303028], [149.0, 280.2409638554216], [150.0, 301.7631578947369], [151.0, 281.5057471264368], [152.0, 283.2835820895522], [153.0, 322.9882352941177], [154.0, 309.5777777777777], [155.0, 255.8991596638655], [156.0, 280.90740740740745], [157.0, 319.746835443038], [158.0, 352.63076923076915], [159.0, 349.8550724637681], [160.0, 353.0933333333334], [161.0, 366.36666666666673], [162.0, 369.18181818181824], [163.0, 346.7297297297297], [164.0, 302.9215686274511], [165.0, 277.50561797752795], [166.0, 271.9509803921567], [167.0, 292.5428571428571], [168.0, 320.9350649350648], [169.0, 331.82417582417565], [170.0, 299.60377358490564], [171.0, 288.923076923077], [172.0, 290.8125000000001], [173.0, 306.3827160493826], [174.0, 312.5384615384615], [175.0, 352.8507462686568], [176.0, 405.5357142857143], [177.0, 411.70103092783506], [178.0, 398.5576923076922], [179.0, 381.67045454545473], [180.0, 388.984375], [181.0, 390.05633802816897], [182.0, 381.8411214953268], [183.0, 338.95555555555535], [184.0, 325.63999999999976], [185.0, 347.5735294117647], [186.0, 388.1733333333333], [187.0, 385.51851851851853], [188.0, 345.05], [189.0, 342.9589041095892], [190.0, 358.32432432432427], [191.0, 356.4915254237288], [192.0, 315.67032967032964], [193.0, 310.8971962616822], [194.0, 319.50505050505046], [195.0, 312.95833333333337], [196.0, 304.0123456790123], [197.0, 346.8695652173913], [198.0, 376.4948453608248], [199.0, 355.51764705882346], [200.0, 339.6060634044941], [1.0, 65.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}, {"data": [[196.41148373228236, 334.7218223500224]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 15490.5, "minX": 1.56225024E12, "maxY": 2051086.6833333333, "series": [{"data": [[1.56225072E12, 1933372.8166666667], [1.56225042E12, 1917386.3], [1.56225024E12, 447069.3], [1.5622506E12, 1853882.7666666666], [1.5622503E12, 1903889.0333333334], [1.56225078E12, 1958873.8], [1.56225048E12, 1991787.2166666666], [1.56225066E12, 1994442.4166666667], [1.56225036E12, 1953729.35], [1.56225084E12, 1346131.0833333333], [1.56225054E12, 2051086.6833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.56225072E12, 66989.41666666667], [1.56225042E12, 66435.5], [1.56225024E12, 15490.5], [1.5622506E12, 64235.166666666664], [1.5622503E12, 65967.83333333333], [1.56225078E12, 67873.0], [1.56225048E12, 69013.41666666667], [1.56225066E12, 69105.41666666667], [1.56225036E12, 67694.75], [1.56225084E12, 46642.083333333336], [1.56225054E12, 71068.08333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.56225084E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 153.35077951002256, "minX": 1.56225024E12, "maxY": 357.98931789700254, "series": [{"data": [[1.56225072E12, 343.1708677863283], [1.56225042E12, 346.34452714788546], [1.56225024E12, 153.35077951002256], [1.5622506E12, 357.98931789700254], [1.5622503E12, 337.21846127026583], [1.56225078E12, 338.59191799390123], [1.56225048E12, 333.1222262337849], [1.56225066E12, 332.86650949937524], [1.56225036E12, 339.60783147880613], [1.56225084E12, 340.5190466406413], [1.56225054E12, 323.28013161088404]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.56225084E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 153.2176441474882, "minX": 1.56225024E12, "maxY": 357.89273139583645, "series": [{"data": [[1.56225072E12, 343.0709850934166], [1.56225042E12, 346.2421383647779], [1.56225024E12, 153.2176441474882], [1.5622506E12, 357.89273139583645], [1.5622503E12, 337.11775814980723], [1.56225078E12, 338.48695357505784], [1.56225048E12, 333.0224678534751], [1.56225066E12, 332.7639994452913], [1.56225036E12, 339.5065828590854], [1.56225084E12, 340.41824532566386], [1.56225054E12, 323.1788343806491]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.56225084E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.44205406695709215, "minX": 1.56225024E12, "maxY": 1.0725068052462312, "series": [{"data": [[1.56225072E12, 0.4724042230551301], [1.56225042E12, 0.45923489700536785], [1.56225024E12, 1.0725068052462312], [1.5622506E12, 0.44205406695709215], [1.5622503E12, 0.525451798477537], [1.56225078E12, 0.46021122783237256], [1.56225048E12, 0.4645763323798137], [1.56225066E12, 0.4804049369019545], [1.56225036E12, 0.46830317959171985], [1.56225084E12, 0.4671460858845308], [1.56225054E12, 0.4712640578224872]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.56225084E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.56225024E12, "maxY": 487.0, "series": [{"data": [[1.56225072E12, 487.0], [1.56225042E12, 471.0], [1.56225024E12, 439.0], [1.5622506E12, 461.0], [1.5622503E12, 463.0], [1.56225078E12, 432.0], [1.56225048E12, 449.0], [1.56225066E12, 440.0], [1.56225036E12, 466.0], [1.56225084E12, 447.0], [1.56225054E12, 468.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.56225072E12, 212.0], [1.56225042E12, 269.0], [1.56225024E12, 10.0], [1.5622506E12, 272.0], [1.5622503E12, 193.0], [1.56225078E12, 228.0], [1.56225048E12, 248.0], [1.56225066E12, 265.0], [1.56225036E12, 272.0], [1.56225084E12, 65.0], [1.56225054E12, 257.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.56225072E12, 390.0], [1.56225042E12, 384.0], [1.56225024E12, 247.0], [1.5622506E12, 392.0], [1.5622503E12, 396.0], [1.56225078E12, 384.0], [1.56225048E12, 392.0], [1.56225066E12, 384.0], [1.56225036E12, 385.0], [1.56225084E12, 381.0], [1.56225054E12, 380.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.56225072E12, 439.0], [1.56225042E12, 437.0], [1.56225024E12, 297.0], [1.5622506E12, 437.0], [1.5622503E12, 424.0], [1.56225078E12, 406.0], [1.56225048E12, 427.0], [1.56225066E12, 404.0], [1.56225036E12, 417.0], [1.56225084E12, 415.0], [1.56225054E12, 439.9900000000016]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.56225072E12, 399.0], [1.56225042E12, 395.0], [1.56225024E12, 258.0], [1.5622506E12, 403.0], [1.5622503E12, 405.0], [1.56225078E12, 393.0], [1.56225048E12, 404.0], [1.56225066E12, 395.0], [1.56225036E12, 396.0], [1.56225084E12, 391.0], [1.56225054E12, 392.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.56225084E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 28.0, "minX": 89.0, "maxY": 416.0, "series": [{"data": [[89.0, 28.0], [296.0, 40.5], [304.0, 291.0], [338.0, 54.0], [367.0, 72.0], [352.0, 93.0], [394.0, 99.0], [436.0, 111.0], [447.0, 114.0], [446.0, 355.0], [458.0, 164.0], [456.0, 191.0], [454.0, 216.5], [474.0, 248.0], [464.0, 139.0], [478.0, 393.0], [479.0, 393.0], [486.0, 393.0], [487.0, 404.0], [494.0, 403.0], [485.0, 375.0], [483.0, 388.0], [509.0, 300.0], [502.0, 234.0], [505.0, 397.5], [510.0, 390.0], [511.0, 380.0], [506.0, 379.0], [508.0, 393.0], [499.0, 416.0], [503.0, 386.0], [536.0, 376.0], [523.0, 379.0], [531.0, 375.0], [530.0, 377.0], [534.0, 376.0], [535.0, 377.0], [532.0, 376.0], [533.0, 374.0], [521.0, 379.0], [520.0, 380.0], [522.0, 378.0], [516.0, 381.0], [517.0, 389.0], [515.0, 387.0], [513.0, 385.0], [514.0, 389.0], [529.0, 374.0], [512.0, 389.0], [526.0, 381.0], [527.0, 377.0], [525.0, 377.0], [524.0, 380.0], [543.0, 363.0], [528.0, 378.0], [540.0, 372.0], [541.0, 371.0], [542.0, 363.5], [539.0, 375.0], [538.0, 374.0], [537.0, 375.0], [569.0, 330.0], [575.0, 339.0], [546.0, 306.0], [552.0, 340.0], [553.0, 363.0], [554.0, 353.0], [556.0, 370.0], [557.0, 371.0], [559.0, 354.0], [558.0, 358.0], [555.0, 352.0], [549.0, 359.0], [550.0, 374.0], [548.0, 367.0], [547.0, 382.0], [551.0, 373.0], [568.0, 362.0], [573.0, 356.0], [574.0, 349.0], [572.0, 343.0], [570.0, 348.5], [571.0, 352.0], [564.0, 350.0], [566.0, 349.0], [567.0, 343.0], [565.0, 370.0], [563.0, 357.0], [544.0, 367.5], [545.0, 373.0], [560.0, 335.0], [562.0, 365.0], [561.0, 354.0], [582.0, 345.0], [580.0, 352.0], [581.0, 329.0], [579.0, 350.0], [578.0, 341.0], [577.0, 333.5], [576.0, 342.0], [590.0, 325.0], [591.0, 339.0], [586.0, 342.0], [584.0, 306.5], [585.0, 335.0], [588.0, 342.0], [587.0, 345.0], [589.0, 337.0], [597.0, 331.0], [599.0, 334.0], [598.0, 335.0], [596.0, 335.0], [603.0, 327.0], [607.0, 329.0], [604.0, 331.0], [606.0, 332.0], [605.0, 336.0], [593.0, 325.0], [594.0, 341.0], [595.0, 344.0], [592.0, 339.0], [600.0, 337.0], [601.0, 332.0], [602.0, 336.5], [583.0, 340.0], [609.0, 325.0], [617.0, 327.0], [616.0, 316.0], [618.0, 328.0], [619.0, 315.0], [620.0, 347.0], [621.0, 322.0], [612.0, 326.0], [622.0, 320.0], [623.0, 330.0], [627.0, 309.0], [629.0, 329.0], [630.0, 322.0], [626.0, 314.0], [635.0, 325.0], [639.0, 308.0], [638.0, 288.0], [624.0, 327.0], [633.0, 316.0], [632.0, 315.5], [634.0, 304.5], [625.0, 320.0], [615.0, 335.0], [611.0, 333.0], [610.0, 320.0], [613.0, 332.0], [614.0, 313.0], [664.0, 282.0], [657.0, 290.0], [662.0, 287.0], [663.0, 284.0], [644.0, 307.0], [643.0, 296.0], [658.0, 284.0], [661.0, 284.0], [666.0, 294.0], [665.0, 298.0], [669.0, 307.0], [671.0, 293.0], [656.0, 284.0], [668.0, 292.0], [642.0, 313.0], [655.0, 307.0], [641.0, 308.0], [640.0, 304.0], [652.0, 287.0], [650.0, 314.0], [651.0, 291.0], [647.0, 296.0], [688.0, 300.0], [690.0, 291.0], [687.0, 282.0], [674.0, 298.0], [675.0, 284.0], [678.0, 289.0], [700.0, 281.0], [703.0, 282.0], [701.0, 283.0], [694.0, 281.0], [692.0, 288.0], [679.0, 296.0], [691.0, 290.0], [681.0, 290.0], [685.0, 291.0], [686.0, 285.0], [720.0, 279.0], [707.0, 283.0], [725.0, 280.5], [726.0, 281.0], [724.0, 279.0], [714.0, 282.0], [712.0, 279.0], [713.0, 279.0], [709.0, 283.0], [728.0, 280.0], [708.0, 281.0], [715.0, 280.0], [706.0, 282.0], [705.0, 282.0], [704.0, 281.0], [722.0, 278.0], [723.0, 280.0], [736.0, 278.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 736.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 28.0, "minX": 89.0, "maxY": 415.0, "series": [{"data": [[89.0, 28.0], [296.0, 40.0], [304.0, 290.5], [338.0, 54.0], [367.0, 72.0], [352.0, 92.0], [394.0, 99.0], [436.0, 110.0], [447.0, 114.0], [446.0, 355.0], [458.0, 164.0], [456.0, 191.0], [454.0, 216.0], [474.0, 247.5], [464.0, 138.5], [478.0, 393.0], [479.0, 393.0], [486.0, 393.0], [487.0, 404.0], [494.0, 403.0], [485.0, 375.0], [483.0, 388.0], [509.0, 300.0], [502.0, 234.0], [505.0, 397.0], [510.0, 390.0], [511.0, 380.0], [506.0, 379.0], [508.0, 393.0], [499.0, 415.0], [503.0, 386.0], [536.0, 376.0], [523.0, 379.0], [531.0, 375.0], [530.0, 377.0], [534.0, 376.0], [535.0, 377.0], [532.0, 376.0], [533.0, 374.0], [521.0, 379.0], [520.0, 380.0], [522.0, 378.0], [516.0, 380.0], [517.0, 389.0], [515.0, 387.0], [513.0, 384.0], [514.0, 389.0], [529.0, 374.0], [512.0, 388.0], [526.0, 380.0], [527.0, 377.0], [525.0, 377.0], [524.0, 380.0], [543.0, 363.0], [528.0, 378.0], [540.0, 372.0], [541.0, 371.0], [542.0, 363.5], [539.0, 375.0], [538.0, 374.0], [537.0, 375.0], [569.0, 330.0], [575.0, 338.0], [546.0, 306.0], [552.0, 340.0], [553.0, 363.0], [554.0, 352.5], [556.0, 369.0], [557.0, 371.0], [559.0, 353.5], [558.0, 357.0], [555.0, 352.0], [549.0, 359.0], [550.0, 374.0], [548.0, 367.0], [547.0, 382.0], [551.0, 373.0], [568.0, 362.0], [573.0, 356.0], [574.0, 349.0], [572.0, 343.0], [570.0, 348.0], [571.0, 352.0], [564.0, 350.0], [566.0, 349.0], [567.0, 343.0], [565.0, 370.0], [563.0, 356.0], [544.0, 367.0], [545.0, 373.0], [560.0, 335.0], [562.0, 365.0], [561.0, 354.0], [582.0, 345.0], [580.0, 352.0], [581.0, 329.0], [579.0, 350.0], [578.0, 341.0], [577.0, 333.0], [576.0, 342.0], [590.0, 325.0], [591.0, 339.0], [586.0, 342.0], [584.0, 306.5], [585.0, 335.0], [588.0, 342.0], [587.0, 344.0], [589.0, 337.0], [597.0, 331.0], [599.0, 334.0], [598.0, 334.0], [596.0, 335.0], [603.0, 327.0], [607.0, 329.0], [604.0, 331.0], [606.0, 331.0], [605.0, 335.0], [593.0, 325.0], [594.0, 340.0], [595.0, 343.5], [592.0, 339.0], [600.0, 337.0], [601.0, 332.0], [602.0, 336.5], [583.0, 340.0], [609.0, 325.0], [617.0, 327.0], [616.0, 316.0], [618.0, 327.0], [619.0, 315.0], [620.0, 347.0], [621.0, 322.0], [612.0, 326.0], [622.0, 319.0], [623.0, 330.0], [627.0, 309.0], [629.0, 329.0], [630.0, 322.0], [626.0, 314.0], [635.0, 325.0], [639.0, 307.0], [638.0, 288.0], [624.0, 327.0], [633.0, 316.0], [632.0, 315.5], [634.0, 304.5], [625.0, 319.0], [615.0, 335.0], [611.0, 333.0], [610.0, 320.0], [613.0, 332.0], [614.0, 313.0], [664.0, 282.0], [657.0, 290.0], [662.0, 287.0], [663.0, 284.0], [644.0, 307.0], [643.0, 296.0], [658.0, 284.0], [661.0, 284.0], [666.0, 294.0], [665.0, 297.0], [669.0, 307.0], [671.0, 293.0], [656.0, 284.0], [668.0, 292.0], [642.0, 313.0], [655.0, 307.0], [641.0, 308.0], [640.0, 304.0], [652.0, 287.0], [650.0, 314.0], [651.0, 291.0], [647.0, 295.0], [688.0, 300.0], [690.0, 291.0], [687.0, 281.0], [674.0, 298.0], [675.0, 284.0], [678.0, 289.0], [700.0, 281.0], [703.0, 282.0], [701.0, 283.0], [694.0, 281.0], [692.0, 287.0], [679.0, 296.0], [691.0, 290.0], [681.0, 290.0], [685.0, 291.0], [686.0, 285.0], [720.0, 279.0], [707.0, 283.0], [725.0, 280.0], [726.0, 281.0], [724.0, 279.0], [714.0, 282.0], [712.0, 278.0], [713.0, 279.0], [709.0, 283.0], [728.0, 280.0], [708.0, 281.0], [715.0, 280.0], [706.0, 282.0], [705.0, 282.0], [704.0, 281.0], [722.0, 278.0], [723.0, 280.0], [736.0, 277.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 736.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 136.86666666666667, "minX": 1.56225024E12, "maxY": 617.9833333333333, "series": [{"data": [[1.56225072E12, 582.5333333333333], [1.56225042E12, 577.7], [1.56225024E12, 136.86666666666667], [1.5622506E12, 558.55], [1.5622503E12, 574.8], [1.56225078E12, 590.2], [1.56225048E12, 600.1166666666667], [1.56225066E12, 600.9166666666666], [1.56225036E12, 588.65], [1.56225084E12, 402.25], [1.56225054E12, 617.9833333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.56225084E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 134.7, "minX": 1.56225024E12, "maxY": 617.9833333333333, "series": [{"data": [[1.56225072E12, 582.5166666666667], [1.56225042E12, 577.7], [1.56225024E12, 134.7], [1.5622506E12, 558.5666666666667], [1.5622503E12, 573.6333333333333], [1.56225078E12, 590.2], [1.56225048E12, 600.1166666666667], [1.56225066E12, 600.9166666666666], [1.56225036E12, 588.65], [1.56225084E12, 405.5833333333333], [1.56225054E12, 617.9833333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.56225084E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 134.7, "minX": 1.56225024E12, "maxY": 617.9833333333333, "series": [{"data": [[1.56225072E12, 582.5166666666667], [1.56225042E12, 577.7], [1.56225024E12, 134.7], [1.5622506E12, 558.5666666666667], [1.5622503E12, 573.6333333333333], [1.56225078E12, 590.2], [1.56225048E12, 600.1166666666667], [1.56225066E12, 600.9166666666666], [1.56225036E12, 588.65], [1.56225084E12, 405.5833333333333], [1.56225054E12, 617.9833333333333]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.56225084E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 134.7, "minX": 1.56225024E12, "maxY": 617.9833333333333, "series": [{"data": [[1.56225072E12, 582.5166666666667], [1.56225042E12, 577.7], [1.56225024E12, 134.7], [1.5622506E12, 558.5666666666667], [1.5622503E12, 573.6333333333333], [1.56225078E12, 590.2], [1.56225048E12, 600.1166666666667], [1.56225066E12, 600.9166666666666], [1.56225036E12, 588.65], [1.56225084E12, 405.5833333333333], [1.56225054E12, 617.9833333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.56225084E12, "title": "Total Transactions Per Second"}},
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

