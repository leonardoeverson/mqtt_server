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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 1449.0, "series": [{"data": [[0.0, 5.0], [0.1, 21.0], [0.2, 30.0], [0.3, 39.0], [0.4, 46.0], [0.5, 55.0], [0.6, 64.0], [0.7, 77.0], [0.8, 89.0], [0.9, 98.0], [1.0, 111.0], [1.1, 122.0], [1.2, 132.0], [1.3, 139.0], [1.4, 148.0], [1.5, 154.0], [1.6, 162.0], [1.7, 175.0], [1.8, 184.0], [1.9, 194.0], [2.0, 207.0], [2.1, 216.0], [2.2, 222.0], [2.3, 232.0], [2.4, 240.0], [2.5, 248.0], [2.6, 257.0], [2.7, 271.0], [2.8, 285.0], [2.9, 299.0], [3.0, 313.0], [3.1, 320.0], [3.2, 325.0], [3.3, 327.0], [3.4, 328.0], [3.5, 329.0], [3.6, 330.0], [3.7, 330.0], [3.8, 331.0], [3.9, 331.0], [4.0, 332.0], [4.1, 333.0], [4.2, 333.0], [4.3, 334.0], [4.4, 334.0], [4.5, 334.0], [4.6, 335.0], [4.7, 335.0], [4.8, 336.0], [4.9, 336.0], [5.0, 336.0], [5.1, 336.0], [5.2, 337.0], [5.3, 337.0], [5.4, 337.0], [5.5, 337.0], [5.6, 338.0], [5.7, 338.0], [5.8, 338.0], [5.9, 338.0], [6.0, 338.0], [6.1, 339.0], [6.2, 339.0], [6.3, 339.0], [6.4, 339.0], [6.5, 340.0], [6.6, 340.0], [6.7, 340.0], [6.8, 340.0], [6.9, 340.0], [7.0, 340.0], [7.1, 341.0], [7.2, 341.0], [7.3, 341.0], [7.4, 341.0], [7.5, 341.0], [7.6, 342.0], [7.7, 342.0], [7.8, 342.0], [7.9, 342.0], [8.0, 342.0], [8.1, 342.0], [8.2, 343.0], [8.3, 343.0], [8.4, 343.0], [8.5, 343.0], [8.6, 343.0], [8.7, 343.0], [8.8, 344.0], [8.9, 344.0], [9.0, 344.0], [9.1, 344.0], [9.2, 344.0], [9.3, 345.0], [9.4, 345.0], [9.5, 345.0], [9.6, 345.0], [9.7, 345.0], [9.8, 345.0], [9.9, 346.0], [10.0, 346.0], [10.1, 346.0], [10.2, 346.0], [10.3, 346.0], [10.4, 347.0], [10.5, 347.0], [10.6, 347.0], [10.7, 347.0], [10.8, 347.0], [10.9, 347.0], [11.0, 347.0], [11.1, 348.0], [11.2, 348.0], [11.3, 348.0], [11.4, 348.0], [11.5, 348.0], [11.6, 348.0], [11.7, 349.0], [11.8, 349.0], [11.9, 349.0], [12.0, 349.0], [12.1, 349.0], [12.2, 349.0], [12.3, 350.0], [12.4, 350.0], [12.5, 350.0], [12.6, 350.0], [12.7, 350.0], [12.8, 350.0], [12.9, 351.0], [13.0, 351.0], [13.1, 351.0], [13.2, 351.0], [13.3, 351.0], [13.4, 351.0], [13.5, 351.0], [13.6, 352.0], [13.7, 352.0], [13.8, 352.0], [13.9, 352.0], [14.0, 352.0], [14.1, 352.0], [14.2, 352.0], [14.3, 353.0], [14.4, 353.0], [14.5, 353.0], [14.6, 353.0], [14.7, 353.0], [14.8, 353.0], [14.9, 354.0], [15.0, 354.0], [15.1, 354.0], [15.2, 354.0], [15.3, 354.0], [15.4, 354.0], [15.5, 355.0], [15.6, 355.0], [15.7, 355.0], [15.8, 355.0], [15.9, 355.0], [16.0, 356.0], [16.1, 356.0], [16.2, 356.0], [16.3, 356.0], [16.4, 356.0], [16.5, 356.0], [16.6, 357.0], [16.7, 357.0], [16.8, 357.0], [16.9, 357.0], [17.0, 357.0], [17.1, 358.0], [17.2, 358.0], [17.3, 358.0], [17.4, 358.0], [17.5, 358.0], [17.6, 359.0], [17.7, 359.0], [17.8, 359.0], [17.9, 359.0], [18.0, 359.0], [18.1, 360.0], [18.2, 360.0], [18.3, 360.0], [18.4, 360.0], [18.5, 360.0], [18.6, 361.0], [18.7, 361.0], [18.8, 361.0], [18.9, 361.0], [19.0, 361.0], [19.1, 362.0], [19.2, 362.0], [19.3, 362.0], [19.4, 362.0], [19.5, 363.0], [19.6, 363.0], [19.7, 363.0], [19.8, 363.0], [19.9, 363.0], [20.0, 364.0], [20.1, 364.0], [20.2, 364.0], [20.3, 364.0], [20.4, 364.0], [20.5, 365.0], [20.6, 365.0], [20.7, 365.0], [20.8, 365.0], [20.9, 365.0], [21.0, 366.0], [21.1, 366.0], [21.2, 366.0], [21.3, 366.0], [21.4, 366.0], [21.5, 367.0], [21.6, 367.0], [21.7, 367.0], [21.8, 367.0], [21.9, 368.0], [22.0, 368.0], [22.1, 368.0], [22.2, 368.0], [22.3, 369.0], [22.4, 369.0], [22.5, 369.0], [22.6, 369.0], [22.7, 369.0], [22.8, 370.0], [22.9, 370.0], [23.0, 370.0], [23.1, 370.0], [23.2, 371.0], [23.3, 371.0], [23.4, 371.0], [23.5, 371.0], [23.6, 372.0], [23.7, 372.0], [23.8, 372.0], [23.9, 372.0], [24.0, 373.0], [24.1, 373.0], [24.2, 373.0], [24.3, 373.0], [24.4, 374.0], [24.5, 374.0], [24.6, 374.0], [24.7, 374.0], [24.8, 374.0], [24.9, 375.0], [25.0, 375.0], [25.1, 375.0], [25.2, 376.0], [25.3, 376.0], [25.4, 376.0], [25.5, 376.0], [25.6, 376.0], [25.7, 377.0], [25.8, 377.0], [25.9, 377.0], [26.0, 377.0], [26.1, 378.0], [26.2, 378.0], [26.3, 378.0], [26.4, 378.0], [26.5, 379.0], [26.6, 379.0], [26.7, 379.0], [26.8, 379.0], [26.9, 380.0], [27.0, 380.0], [27.1, 380.0], [27.2, 380.0], [27.3, 380.0], [27.4, 381.0], [27.5, 381.0], [27.6, 381.0], [27.7, 381.0], [27.8, 382.0], [27.9, 382.0], [28.0, 382.0], [28.1, 382.0], [28.2, 382.0], [28.3, 383.0], [28.4, 383.0], [28.5, 383.0], [28.6, 383.0], [28.7, 383.0], [28.8, 384.0], [28.9, 384.0], [29.0, 384.0], [29.1, 384.0], [29.2, 385.0], [29.3, 385.0], [29.4, 385.0], [29.5, 385.0], [29.6, 385.0], [29.7, 385.0], [29.8, 386.0], [29.9, 386.0], [30.0, 386.0], [30.1, 386.0], [30.2, 386.0], [30.3, 387.0], [30.4, 387.0], [30.5, 387.0], [30.6, 387.0], [30.7, 387.0], [30.8, 388.0], [30.9, 388.0], [31.0, 388.0], [31.1, 388.0], [31.2, 388.0], [31.3, 388.0], [31.4, 389.0], [31.5, 389.0], [31.6, 389.0], [31.7, 389.0], [31.8, 389.0], [31.9, 390.0], [32.0, 390.0], [32.1, 390.0], [32.2, 390.0], [32.3, 390.0], [32.4, 390.0], [32.5, 390.0], [32.6, 391.0], [32.7, 391.0], [32.8, 391.0], [32.9, 391.0], [33.0, 391.0], [33.1, 391.0], [33.2, 392.0], [33.3, 392.0], [33.4, 392.0], [33.5, 392.0], [33.6, 392.0], [33.7, 392.0], [33.8, 393.0], [33.9, 393.0], [34.0, 393.0], [34.1, 393.0], [34.2, 393.0], [34.3, 393.0], [34.4, 394.0], [34.5, 394.0], [34.6, 394.0], [34.7, 394.0], [34.8, 394.0], [34.9, 394.0], [35.0, 394.0], [35.1, 395.0], [35.2, 395.0], [35.3, 395.0], [35.4, 395.0], [35.5, 395.0], [35.6, 395.0], [35.7, 395.0], [35.8, 395.0], [35.9, 396.0], [36.0, 396.0], [36.1, 396.0], [36.2, 396.0], [36.3, 396.0], [36.4, 396.0], [36.5, 396.0], [36.6, 397.0], [36.7, 397.0], [36.8, 397.0], [36.9, 397.0], [37.0, 397.0], [37.1, 397.0], [37.2, 397.0], [37.3, 398.0], [37.4, 398.0], [37.5, 398.0], [37.6, 398.0], [37.7, 398.0], [37.8, 398.0], [37.9, 398.0], [38.0, 398.0], [38.1, 399.0], [38.2, 399.0], [38.3, 399.0], [38.4, 399.0], [38.5, 399.0], [38.6, 399.0], [38.7, 399.0], [38.8, 399.0], [38.9, 399.0], [39.0, 400.0], [39.1, 400.0], [39.2, 400.0], [39.3, 400.0], [39.4, 400.0], [39.5, 400.0], [39.6, 400.0], [39.7, 400.0], [39.8, 401.0], [39.9, 401.0], [40.0, 401.0], [40.1, 401.0], [40.2, 401.0], [40.3, 401.0], [40.4, 401.0], [40.5, 401.0], [40.6, 402.0], [40.7, 402.0], [40.8, 402.0], [40.9, 402.0], [41.0, 402.0], [41.1, 402.0], [41.2, 402.0], [41.3, 403.0], [41.4, 403.0], [41.5, 403.0], [41.6, 403.0], [41.7, 403.0], [41.8, 403.0], [41.9, 403.0], [42.0, 403.0], [42.1, 404.0], [42.2, 404.0], [42.3, 404.0], [42.4, 404.0], [42.5, 404.0], [42.6, 404.0], [42.7, 404.0], [42.8, 405.0], [42.9, 405.0], [43.0, 405.0], [43.1, 405.0], [43.2, 405.0], [43.3, 405.0], [43.4, 405.0], [43.5, 405.0], [43.6, 406.0], [43.7, 406.0], [43.8, 406.0], [43.9, 406.0], [44.0, 406.0], [44.1, 406.0], [44.2, 406.0], [44.3, 407.0], [44.4, 407.0], [44.5, 407.0], [44.6, 407.0], [44.7, 407.0], [44.8, 407.0], [44.9, 407.0], [45.0, 408.0], [45.1, 408.0], [45.2, 408.0], [45.3, 408.0], [45.4, 408.0], [45.5, 408.0], [45.6, 408.0], [45.7, 408.0], [45.8, 409.0], [45.9, 409.0], [46.0, 409.0], [46.1, 409.0], [46.2, 409.0], [46.3, 409.0], [46.4, 409.0], [46.5, 410.0], [46.6, 410.0], [46.7, 410.0], [46.8, 410.0], [46.9, 410.0], [47.0, 410.0], [47.1, 410.0], [47.2, 411.0], [47.3, 411.0], [47.4, 411.0], [47.5, 411.0], [47.6, 411.0], [47.7, 411.0], [47.8, 411.0], [47.9, 412.0], [48.0, 412.0], [48.1, 412.0], [48.2, 412.0], [48.3, 412.0], [48.4, 412.0], [48.5, 413.0], [48.6, 413.0], [48.7, 413.0], [48.8, 413.0], [48.9, 413.0], [49.0, 413.0], [49.1, 413.0], [49.2, 413.0], [49.3, 414.0], [49.4, 414.0], [49.5, 414.0], [49.6, 414.0], [49.7, 414.0], [49.8, 414.0], [49.9, 414.0], [50.0, 414.0], [50.1, 415.0], [50.2, 415.0], [50.3, 415.0], [50.4, 415.0], [50.5, 415.0], [50.6, 415.0], [50.7, 415.0], [50.8, 415.0], [50.9, 416.0], [51.0, 416.0], [51.1, 416.0], [51.2, 416.0], [51.3, 416.0], [51.4, 416.0], [51.5, 416.0], [51.6, 417.0], [51.7, 417.0], [51.8, 417.0], [51.9, 417.0], [52.0, 417.0], [52.1, 417.0], [52.2, 417.0], [52.3, 418.0], [52.4, 418.0], [52.5, 418.0], [52.6, 418.0], [52.7, 418.0], [52.8, 418.0], [52.9, 418.0], [53.0, 419.0], [53.1, 419.0], [53.2, 419.0], [53.3, 419.0], [53.4, 419.0], [53.5, 419.0], [53.6, 419.0], [53.7, 420.0], [53.8, 420.0], [53.9, 420.0], [54.0, 420.0], [54.1, 420.0], [54.2, 420.0], [54.3, 420.0], [54.4, 421.0], [54.5, 421.0], [54.6, 421.0], [54.7, 421.0], [54.8, 421.0], [54.9, 421.0], [55.0, 421.0], [55.1, 421.0], [55.2, 422.0], [55.3, 422.0], [55.4, 422.0], [55.5, 422.0], [55.6, 422.0], [55.7, 422.0], [55.8, 422.0], [55.9, 423.0], [56.0, 423.0], [56.1, 423.0], [56.2, 423.0], [56.3, 423.0], [56.4, 423.0], [56.5, 423.0], [56.6, 424.0], [56.7, 424.0], [56.8, 424.0], [56.9, 424.0], [57.0, 424.0], [57.1, 424.0], [57.2, 424.0], [57.3, 425.0], [57.4, 425.0], [57.5, 425.0], [57.6, 425.0], [57.7, 425.0], [57.8, 425.0], [57.9, 426.0], [58.0, 426.0], [58.1, 426.0], [58.2, 426.0], [58.3, 426.0], [58.4, 426.0], [58.5, 427.0], [58.6, 427.0], [58.7, 427.0], [58.8, 427.0], [58.9, 427.0], [59.0, 427.0], [59.1, 428.0], [59.2, 428.0], [59.3, 428.0], [59.4, 428.0], [59.5, 428.0], [59.6, 428.0], [59.7, 429.0], [59.8, 429.0], [59.9, 429.0], [60.0, 429.0], [60.1, 429.0], [60.2, 429.0], [60.3, 429.0], [60.4, 430.0], [60.5, 430.0], [60.6, 430.0], [60.7, 430.0], [60.8, 430.0], [60.9, 430.0], [61.0, 431.0], [61.1, 431.0], [61.2, 431.0], [61.3, 431.0], [61.4, 431.0], [61.5, 431.0], [61.6, 432.0], [61.7, 432.0], [61.8, 432.0], [61.9, 432.0], [62.0, 432.0], [62.1, 432.0], [62.2, 433.0], [62.3, 433.0], [62.4, 433.0], [62.5, 433.0], [62.6, 433.0], [62.7, 433.0], [62.8, 433.0], [62.9, 434.0], [63.0, 434.0], [63.1, 434.0], [63.2, 434.0], [63.3, 434.0], [63.4, 434.0], [63.5, 435.0], [63.6, 435.0], [63.7, 435.0], [63.8, 435.0], [63.9, 435.0], [64.0, 436.0], [64.1, 436.0], [64.2, 436.0], [64.3, 436.0], [64.4, 436.0], [64.5, 436.0], [64.6, 437.0], [64.7, 437.0], [64.8, 437.0], [64.9, 437.0], [65.0, 437.0], [65.1, 437.0], [65.2, 438.0], [65.3, 438.0], [65.4, 438.0], [65.5, 438.0], [65.6, 438.0], [65.7, 439.0], [65.8, 439.0], [65.9, 439.0], [66.0, 439.0], [66.1, 439.0], [66.2, 440.0], [66.3, 440.0], [66.4, 440.0], [66.5, 440.0], [66.6, 440.0], [66.7, 441.0], [66.8, 441.0], [66.9, 441.0], [67.0, 441.0], [67.1, 441.0], [67.2, 441.0], [67.3, 442.0], [67.4, 442.0], [67.5, 442.0], [67.6, 442.0], [67.7, 442.0], [67.8, 443.0], [67.9, 443.0], [68.0, 443.0], [68.1, 443.0], [68.2, 443.0], [68.3, 443.0], [68.4, 444.0], [68.5, 444.0], [68.6, 444.0], [68.7, 444.0], [68.8, 444.0], [68.9, 445.0], [69.0, 445.0], [69.1, 445.0], [69.2, 445.0], [69.3, 445.0], [69.4, 446.0], [69.5, 446.0], [69.6, 446.0], [69.7, 446.0], [69.8, 446.0], [69.9, 447.0], [70.0, 447.0], [70.1, 447.0], [70.2, 447.0], [70.3, 447.0], [70.4, 447.0], [70.5, 448.0], [70.6, 448.0], [70.7, 448.0], [70.8, 448.0], [70.9, 448.0], [71.0, 449.0], [71.1, 449.0], [71.2, 449.0], [71.3, 449.0], [71.4, 449.0], [71.5, 450.0], [71.6, 450.0], [71.7, 450.0], [71.8, 450.0], [71.9, 450.0], [72.0, 450.0], [72.1, 451.0], [72.2, 451.0], [72.3, 451.0], [72.4, 451.0], [72.5, 451.0], [72.6, 452.0], [72.7, 452.0], [72.8, 452.0], [72.9, 452.0], [73.0, 452.0], [73.1, 453.0], [73.2, 453.0], [73.3, 453.0], [73.4, 453.0], [73.5, 453.0], [73.6, 454.0], [73.7, 454.0], [73.8, 454.0], [73.9, 454.0], [74.0, 454.0], [74.1, 454.0], [74.2, 455.0], [74.3, 455.0], [74.4, 455.0], [74.5, 455.0], [74.6, 455.0], [74.7, 456.0], [74.8, 456.0], [74.9, 456.0], [75.0, 456.0], [75.1, 456.0], [75.2, 456.0], [75.3, 457.0], [75.4, 457.0], [75.5, 457.0], [75.6, 457.0], [75.7, 457.0], [75.8, 458.0], [75.9, 458.0], [76.0, 458.0], [76.1, 458.0], [76.2, 458.0], [76.3, 458.0], [76.4, 459.0], [76.5, 459.0], [76.6, 459.0], [76.7, 459.0], [76.8, 459.0], [76.9, 460.0], [77.0, 460.0], [77.1, 460.0], [77.2, 460.0], [77.3, 460.0], [77.4, 461.0], [77.5, 461.0], [77.6, 461.0], [77.7, 461.0], [77.8, 461.0], [77.9, 462.0], [78.0, 462.0], [78.1, 462.0], [78.2, 462.0], [78.3, 462.0], [78.4, 462.0], [78.5, 463.0], [78.6, 463.0], [78.7, 463.0], [78.8, 463.0], [78.9, 463.0], [79.0, 463.0], [79.1, 464.0], [79.2, 464.0], [79.3, 464.0], [79.4, 464.0], [79.5, 464.0], [79.6, 464.0], [79.7, 465.0], [79.8, 465.0], [79.9, 465.0], [80.0, 465.0], [80.1, 465.0], [80.2, 465.0], [80.3, 465.0], [80.4, 466.0], [80.5, 466.0], [80.6, 466.0], [80.7, 466.0], [80.8, 466.0], [80.9, 466.0], [81.0, 466.0], [81.1, 467.0], [81.2, 467.0], [81.3, 467.0], [81.4, 467.0], [81.5, 467.0], [81.6, 467.0], [81.7, 467.0], [81.8, 468.0], [81.9, 468.0], [82.0, 468.0], [82.1, 468.0], [82.2, 468.0], [82.3, 468.0], [82.4, 469.0], [82.5, 469.0], [82.6, 469.0], [82.7, 469.0], [82.8, 469.0], [82.9, 469.0], [83.0, 469.0], [83.1, 470.0], [83.2, 470.0], [83.3, 470.0], [83.4, 470.0], [83.5, 470.0], [83.6, 470.0], [83.7, 470.0], [83.8, 471.0], [83.9, 471.0], [84.0, 471.0], [84.1, 471.0], [84.2, 471.0], [84.3, 471.0], [84.4, 472.0], [84.5, 472.0], [84.6, 472.0], [84.7, 472.0], [84.8, 472.0], [84.9, 472.0], [85.0, 472.0], [85.1, 473.0], [85.2, 473.0], [85.3, 473.0], [85.4, 473.0], [85.5, 473.0], [85.6, 473.0], [85.7, 474.0], [85.8, 474.0], [85.9, 474.0], [86.0, 474.0], [86.1, 474.0], [86.2, 474.0], [86.3, 474.0], [86.4, 475.0], [86.5, 475.0], [86.6, 475.0], [86.7, 475.0], [86.8, 475.0], [86.9, 475.0], [87.0, 476.0], [87.1, 476.0], [87.2, 476.0], [87.3, 476.0], [87.4, 476.0], [87.5, 476.0], [87.6, 477.0], [87.7, 477.0], [87.8, 477.0], [87.9, 477.0], [88.0, 477.0], [88.1, 477.0], [88.2, 477.0], [88.3, 478.0], [88.4, 478.0], [88.5, 478.0], [88.6, 478.0], [88.7, 478.0], [88.8, 478.0], [88.9, 479.0], [89.0, 479.0], [89.1, 479.0], [89.2, 479.0], [89.3, 479.0], [89.4, 479.0], [89.5, 480.0], [89.6, 480.0], [89.7, 480.0], [89.8, 480.0], [89.9, 480.0], [90.0, 480.0], [90.1, 481.0], [90.2, 481.0], [90.3, 481.0], [90.4, 481.0], [90.5, 481.0], [90.6, 481.0], [90.7, 482.0], [90.8, 482.0], [90.9, 482.0], [91.0, 482.0], [91.1, 482.0], [91.2, 483.0], [91.3, 483.0], [91.4, 483.0], [91.5, 483.0], [91.6, 483.0], [91.7, 483.0], [91.8, 484.0], [91.9, 484.0], [92.0, 484.0], [92.1, 484.0], [92.2, 485.0], [92.3, 485.0], [92.4, 485.0], [92.5, 485.0], [92.6, 486.0], [92.7, 486.0], [92.8, 486.0], [92.9, 486.0], [93.0, 486.0], [93.1, 487.0], [93.2, 487.0], [93.3, 487.0], [93.4, 487.0], [93.5, 488.0], [93.6, 488.0], [93.7, 488.0], [93.8, 489.0], [93.9, 489.0], [94.0, 489.0], [94.1, 490.0], [94.2, 490.0], [94.3, 490.0], [94.4, 491.0], [94.5, 491.0], [94.6, 491.0], [94.7, 492.0], [94.8, 492.0], [94.9, 492.0], [95.0, 493.0], [95.1, 493.0], [95.2, 494.0], [95.3, 494.0], [95.4, 495.0], [95.5, 496.0], [95.6, 496.0], [95.7, 497.0], [95.8, 498.0], [95.9, 498.0], [96.0, 499.0], [96.1, 500.0], [96.2, 500.0], [96.3, 501.0], [96.4, 502.0], [96.5, 503.0], [96.6, 504.0], [96.7, 505.0], [96.8, 506.0], [96.9, 507.0], [97.0, 508.0], [97.1, 509.0], [97.2, 511.0], [97.3, 512.0], [97.4, 513.0], [97.5, 514.0], [97.6, 515.0], [97.7, 516.0], [97.8, 517.0], [97.9, 518.0], [98.0, 519.0], [98.1, 521.0], [98.2, 522.0], [98.3, 523.0], [98.4, 525.0], [98.5, 528.0], [98.6, 529.0], [98.7, 531.0], [98.8, 533.0], [98.9, 536.0], [99.0, 540.0], [99.1, 542.0], [99.2, 544.0], [99.3, 546.0], [99.4, 549.0], [99.5, 553.0], [99.6, 557.0], [99.7, 566.0], [99.8, 578.0], [99.9, 594.0], [100.0, 1449.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 162889.0, "series": [{"data": [[0.0, 2619.0], [1100.0, 3.0], [300.0, 102817.0], [1200.0, 2.0], [600.0, 197.0], [1300.0, 1.0], [1400.0, 2.0], [100.0, 2924.0], [200.0, 2745.0], [400.0, 162889.0], [500.0, 10941.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10779.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 274361.0, "series": [{"data": [[0.0, 274361.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 10779.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 115.36605554795445, "minX": 1.55951694E12, "maxY": 200.0, "series": [{"data": [[1.55951712E12, 200.0], [1.5595173E12, 200.0], [1.559517E12, 200.0], [1.55951748E12, 200.0], [1.55951718E12, 200.0], [1.55951736E12, 200.0], [1.55951706E12, 200.0], [1.55951754E12, 198.23645517020915], [1.55951724E12, 200.0], [1.55951694E12, 115.36605554795445], [1.55951742E12, 200.0]], "isOverall": false, "label": "Grupo de Usu\u00E1rios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55951754E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 20.509433962264154, "minX": 1.0, "maxY": 484.6060606060607, "series": [{"data": [[2.0, 232.0], [4.0, 260.5], [5.0, 44.842105263157904], [6.0, 20.509433962264154], [7.0, 23.471698113207548], [8.0, 26.803921568627445], [9.0, 27.425925925925924], [10.0, 22.68571428571428], [11.0, 25.53623188405797], [12.0, 27.31884057971014], [13.0, 29.084507042253524], [14.0, 30.268656716417908], [15.0, 40.08196721311475], [16.0, 38.74626865671644], [17.0, 40.388059701492544], [18.0, 47.65573770491805], [19.0, 50.46268656716418], [20.0, 43.06849315068493], [21.0, 46.70666666666667], [22.0, 43.175000000000004], [23.0, 48.73529411764704], [24.0, 55.58823529411765], [25.0, 47.84415584415586], [26.0, 60.35802469135801], [27.0, 70.64444444444445], [28.0, 62.772151898734165], [29.0, 59.25396825396826], [30.0, 61.30263157894737], [31.0, 71.01470588235297], [32.0, 64.57446808510637], [33.0, 71.92592592592592], [34.0, 91.0], [35.0, 93.92592592592591], [36.0, 97.03448275862067], [37.0, 81.27272727272728], [38.0, 83.69662921348315], [39.0, 76.58620689655174], [40.0, 93.95], [41.0, 88.03896103896106], [42.0, 100.29687499999997], [43.0, 108.94444444444447], [44.0, 123.30769230769229], [45.0, 156.51851851851848], [46.0, 102.60294117647057], [47.0, 116.80701754385964], [48.0, 92.82352941176471], [49.0, 126.22413793103446], [50.0, 121.5076923076923], [51.0, 105.55844155844153], [52.0, 114.52307692307693], [53.0, 137.04918032786884], [54.0, 135.71428571428572], [55.0, 139.6923076923077], [56.0, 145.55172413793102], [57.0, 116.56164383561644], [58.0, 136.5254237288135], [59.0, 154.40350877192984], [60.0, 159.6440677966102], [61.0, 160.0666666666667], [62.0, 146.62666666666667], [63.0, 131.85714285714283], [64.0, 120.14925373134326], [65.0, 152.84615384615384], [66.0, 129.66265060240963], [67.0, 126.11428571428569], [68.0, 160.38333333333333], [69.0, 166.35937499999997], [70.0, 176.87654320987662], [71.0, 156.96551724137936], [72.0, 180.61016949152543], [73.0, 185.71929824561403], [74.0, 186.33823529411777], [75.0, 184.82539682539687], [76.0, 184.14925373134332], [77.0, 152.9887640449439], [78.0, 145.34920634920636], [79.0, 200.7457627118644], [80.0, 220.73913043478254], [81.0, 221.88333333333335], [82.0, 206.80821917808217], [83.0, 165.44578313253004], [84.0, 160.01351351351357], [85.0, 186.01754385964918], [86.0, 180.71264367816093], [87.0, 152.33720930232565], [88.0, 155.87671232876716], [89.0, 197.67741935483872], [90.0, 220.42465753424653], [91.0, 203.44117647058832], [92.0, 197.82258064516125], [93.0, 224.89552238805973], [94.0, 210.73170731707324], [95.0, 188.39436619718313], [96.0, 213.09836065573776], [97.0, 237.34920634920633], [98.0, 246.98214285714286], [99.0, 247.9454545454545], [100.0, 257.7230769230769], [101.0, 250.82258064516134], [102.0, 240.8955223880598], [103.0, 241.25396825396828], [104.0, 212.44827586206898], [105.0, 206.72131147540983], [106.0, 248.98387096774192], [107.0, 243.74999999999994], [108.0, 212.7230769230769], [109.0, 237.45312500000006], [110.0, 257.61428571428576], [111.0, 253.91780821917806], [112.0, 223.2253521126761], [113.0, 221.4393939393939], [114.0, 254.31428571428572], [115.0, 275.2456140350878], [116.0, 280.4067796610169], [117.0, 299.36507936507945], [118.0, 265.55844155844153], [119.0, 236.14457831325308], [120.0, 232.76623376623377], [121.0, 250.02985074626864], [122.0, 287.9206349206349], [123.0, 270.886075949367], [124.0, 261.5593220338982], [125.0, 291.74999999999994], [126.0, 327.8333333333333], [127.0, 337.5862068965517], [128.0, 312.74324324324334], [129.0, 250.45569620253167], [130.0, 258.03125], [131.0, 293.6], [132.0, 311.77419354838713], [133.0, 320.390625], [134.0, 293.2435897435898], [135.0, 285.3278688524591], [136.0, 308.86363636363654], [137.0, 323.19047619047626], [138.0, 327.0], [139.0, 335.12676056338023], [140.0, 342.93750000000006], [141.0, 346.16438356164383], [142.0, 339.17241379310343], [143.0, 329.9041095890411], [144.0, 333.04411764705884], [145.0, 309.9523809523811], [146.0, 302.4923076923075], [147.0, 333.442857142857], [148.0, 332.8441558441558], [149.0, 313.24615384615373], [150.0, 335.9701492537314], [151.0, 368.31999999999994], [152.0, 372.8153846153847], [153.0, 364.48611111111103], [154.0, 335.2602739726027], [155.0, 334.375], [156.0, 366.1929824561404], [157.0, 393.82089552238796], [158.0, 389.7230769230769], [159.0, 387.625], [160.0, 387.00000000000006], [161.0, 389.7307692307691], [162.0, 390.7846153846154], [163.0, 398.11111111111114], [164.0, 403.5396825396826], [165.0, 408.968253968254], [166.0, 409.50000000000017], [167.0, 468.3999999999999], [168.0, 470.63076923076915], [169.0, 470.45000000000005], [170.0, 419.16923076923075], [171.0, 408.19999999999993], [172.0, 403.3207547169812], [173.0, 413.08333333333326], [174.0, 422.90769230769223], [175.0, 429.5471698113207], [176.0, 427.9705882352942], [177.0, 438.46153846153834], [178.0, 436.25423728813564], [179.0, 396.6626506024096], [180.0, 381.047619047619], [181.0, 390.9545454545455], [182.0, 422.0166666666666], [183.0, 439.7407407407407], [184.0, 446.5555555555556], [185.0, 416.6944444444443], [186.0, 380.5161290322582], [187.0, 401.96000000000004], [188.0, 429.448275862069], [189.0, 453.85714285714283], [190.0, 444.9277108433733], [191.0, 448.35], [192.0, 465.0], [193.0, 468.52380952380946], [194.0, 434.7246376811595], [195.0, 453.69642857142856], [196.0, 442.30000000000007], [197.0, 471.91428571428577], [198.0, 481.7903225806452], [199.0, 484.6060606060607], [200.0, 418.72810332228244], [1.0, 192.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}, {"data": [[195.58375184119964, 410.50855018588305]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 23985.166666666668, "minX": 1.55951694E12, "maxY": 1660882.9166666667, "series": [{"data": [[1.55951712E12, 1534816.2333333334], [1.5595173E12, 1601638.7666666666], [1.559517E12, 1569389.15], [1.55951748E12, 1604515.2333333334], [1.55951718E12, 1550028.3166666667], [1.55951736E12, 1660882.9166666667], [1.55951706E12, 1562972.4166666667], [1.55951754E12, 692232.7666666667], [1.55951724E12, 1597545.3333333333], [1.55951694E12, 808619.0333333333], [1.55951742E12, 1590354.1666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55951712E12, 53179.833333333336], [1.5595173E12, 55495.166666666664], [1.559517E12, 54377.75], [1.55951748E12, 55594.833333333336], [1.55951718E12, 53706.916666666664], [1.55951736E12, 57547.916666666664], [1.55951706E12, 54155.416666666664], [1.55951754E12, 23985.166666666668], [1.55951724E12, 55353.333333333336], [1.55951694E12, 28017.833333333332], [1.55951742E12, 55104.166666666664]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55951754E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 266.1782733616087, "minX": 1.55951694E12, "maxY": 432.1960642975589, "series": [{"data": [[1.55951712E12, 432.1960642975589], [1.5595173E12, 414.035504593491], [1.559517E12, 422.9411370765932], [1.55951748E12, 413.0009997931445], [1.55951718E12, 428.6464794261456], [1.55951736E12, 399.9611656952517], [1.55951706E12, 424.35084055919265], [1.55951754E12, 415.87741729263166], [1.55951724E12, 415.18237534626144], [1.55951694E12, 266.1782733616087], [1.55951742E12, 417.32942608695976]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55951754E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 265.91797783554483, "minX": 1.55951694E12, "maxY": 432.0901391191512, "series": [{"data": [[1.55951712E12, 432.0901391191512], [1.5595173E12, 413.92740208606534], [1.559517E12, 422.8298262310108], [1.55951748E12, 412.89553885403046], [1.55951718E12, 428.53359980014955], [1.55951736E12, 399.8489258950867], [1.55951706E12, 424.2415855600759], [1.55951754E12, 415.76506312929456], [1.55951724E12, 415.0689404432099], [1.55951694E12, 265.91797783554483], [1.55951742E12, 417.2183652173908]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55951754E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.8567721473365487, "minX": 1.55951694E12, "maxY": 3.742030373512092, "series": [{"data": [[1.55951712E12, 0.8567721473365487], [1.5595173E12, 0.9428749050217612], [1.559517E12, 0.9341933664657613], [1.55951748E12, 0.9120871543818573], [1.55951718E12, 1.0668070375789687], [1.55951736E12, 1.0610824313072376], [1.55951706E12, 0.8874181560785684], [1.55951754E12, 0.8708646316125942], [1.55951724E12, 0.9900969529085826], [1.55951694E12, 3.742030373512092], [1.55951742E12, 0.9193043478260904]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55951754E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.55951694E12, "maxY": 1449.0, "series": [{"data": [[1.55951712E12, 564.0], [1.5595173E12, 567.0], [1.559517E12, 557.0], [1.55951748E12, 549.0], [1.55951718E12, 1368.0], [1.55951736E12, 538.0], [1.55951706E12, 548.0], [1.55951754E12, 531.0], [1.55951724E12, 665.0], [1.55951694E12, 1449.0], [1.55951742E12, 551.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.55951712E12, 319.0], [1.5595173E12, 318.0], [1.559517E12, 327.0], [1.55951748E12, 321.0], [1.55951718E12, 318.0], [1.55951736E12, 314.0], [1.55951706E12, 324.0], [1.55951754E12, 192.0], [1.55951724E12, 315.0], [1.55951694E12, 5.0], [1.55951742E12, 323.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.55951712E12, 489.0], [1.5595173E12, 471.0], [1.559517E12, 482.0], [1.55951748E12, 478.0], [1.55951718E12, 513.0], [1.55951736E12, 464.0], [1.55951706E12, 481.0], [1.55951754E12, 474.0], [1.55951724E12, 502.0], [1.55951694E12, 471.0], [1.55951742E12, 478.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.55951712E12, 543.0], [1.5595173E12, 540.0], [1.559517E12, 520.0], [1.55951748E12, 531.0], [1.55951718E12, 559.0], [1.55951736E12, 517.0], [1.55951706E12, 518.0], [1.55951754E12, 522.0], [1.55951724E12, 599.0], [1.55951694E12, 514.8099999999995], [1.55951742E12, 528.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.55951712E12, 499.0], [1.5595173E12, 484.0], [1.559517E12, 491.0], [1.55951748E12, 487.0], [1.55951718E12, 528.0], [1.55951736E12, 485.0], [1.55951706E12, 492.0], [1.55951754E12, 484.0], [1.55951724E12, 545.0], [1.55951694E12, 490.0], [1.55951742E12, 487.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55951754E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 20.0, "minX": 336.0, "maxY": 548.0, "series": [{"data": [[336.0, 20.0], [339.0, 548.0], [347.0, 541.0], [365.0, 548.0], [380.0, 424.0], [381.0, 464.0], [398.0, 488.0], [392.0, 510.0], [391.0, 509.0], [384.0, 521.0], [395.0, 521.0], [397.0, 494.0], [388.0, 536.0], [399.0, 475.0], [400.0, 484.0], [404.0, 483.0], [405.0, 479.0], [414.0, 471.5], [412.0, 489.0], [411.0, 480.0], [403.0, 483.0], [406.0, 481.0], [407.0, 485.0], [408.0, 484.0], [415.0, 481.0], [413.0, 471.0], [428.0, 469.0], [426.0, 447.0], [427.0, 459.0], [417.0, 342.5], [430.0, 289.0], [419.0, 456.0], [418.0, 468.0], [429.0, 466.0], [416.0, 481.0], [423.0, 472.0], [421.0, 476.0], [420.0, 482.0], [422.0, 477.0], [424.0, 487.0], [431.0, 466.0], [425.0, 463.0], [445.0, 440.0], [432.0, 335.5], [443.0, 438.0], [442.0, 450.0], [441.0, 450.0], [436.0, 450.0], [437.0, 439.0], [435.0, 462.0], [434.0, 458.0], [433.0, 426.0], [444.0, 457.0], [438.0, 443.0], [439.0, 468.5], [440.0, 428.0], [446.0, 456.0], [447.0, 427.0], [461.0, 430.0], [452.0, 404.0], [448.0, 438.0], [463.0, 421.0], [462.0, 420.0], [449.0, 449.0], [450.0, 446.0], [460.0, 440.0], [451.0, 418.0], [457.0, 443.0], [458.0, 434.0], [459.0, 436.0], [456.0, 430.0], [454.0, 434.0], [455.0, 449.0], [453.0, 435.0], [479.0, 413.0], [472.0, 405.0], [473.0, 418.0], [475.0, 414.0], [474.0, 417.0], [464.0, 461.0], [471.0, 425.0], [470.0, 423.0], [468.0, 411.0], [469.0, 422.0], [465.0, 421.0], [478.0, 416.0], [467.0, 440.0], [476.0, 444.0], [466.0, 424.0], [477.0, 406.0], [483.0, 420.0], [488.0, 395.0], [486.0, 412.0], [491.0, 405.0], [492.0, 406.0], [484.0, 406.0], [485.0, 422.0], [481.0, 413.0], [482.0, 394.0], [487.0, 413.0], [480.0, 419.0], [493.0, 414.0], [495.0, 397.0], [494.0, 415.0], [490.0, 412.0], [489.0, 413.0], [509.0, 393.0], [501.0, 399.0], [500.0, 400.0], [502.0, 408.0], [511.0, 397.0], [503.0, 394.0], [499.0, 401.0], [508.0, 408.0], [510.0, 395.0], [497.0, 407.0], [498.0, 405.0], [496.0, 429.0], [506.0, 409.0], [507.0, 392.0], [504.0, 398.0], [505.0, 399.0], [518.0, 365.0], [517.0, 393.0], [522.0, 385.0], [524.0, 399.0], [521.0, 389.0], [520.0, 403.0], [516.0, 381.0], [527.0, 382.0], [513.0, 395.0], [512.0, 387.0], [515.0, 396.0], [514.0, 399.0], [537.0, 364.0], [519.0, 382.0], [536.0, 381.0], [531.0, 390.0], [533.0, 364.0], [532.0, 361.0], [535.0, 385.0], [534.0, 356.0], [541.0, 361.0], [530.0, 389.0], [529.0, 369.0], [543.0, 343.0], [549.0, 360.0], [550.0, 372.0], [568.0, 350.0], [571.0, 346.0], [572.0, 349.0], [569.0, 347.0], [552.0, 352.0], [548.0, 368.0], [545.0, 353.0], [547.0, 375.0], [559.0, 351.0], [575.0, 350.0], [564.0, 362.0], [565.0, 355.0], [567.0, 362.0], [563.0, 353.5], [562.0, 344.0], [561.0, 357.0], [556.0, 351.0], [555.0, 360.0], [554.0, 362.0], [578.0, 349.0], [587.0, 342.0], [585.0, 343.0], [577.0, 345.0], [586.0, 346.0], [602.0, 334.0], [576.0, 348.0], [594.0, 340.0], [593.0, 342.0], [582.0, 343.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 602.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 19.5, "minX": 336.0, "maxY": 548.0, "series": [{"data": [[336.0, 19.5], [339.0, 548.0], [347.0, 541.0], [365.0, 548.0], [380.0, 424.0], [381.0, 464.0], [398.0, 488.0], [392.0, 510.0], [391.0, 509.0], [384.0, 520.0], [395.0, 521.0], [397.0, 494.0], [388.0, 536.0], [399.0, 475.0], [400.0, 484.0], [404.0, 483.0], [405.0, 479.0], [414.0, 471.5], [412.0, 489.0], [411.0, 480.0], [403.0, 483.0], [406.0, 481.0], [407.0, 485.0], [408.0, 484.0], [415.0, 481.0], [413.0, 471.0], [428.0, 469.0], [426.0, 447.0], [427.0, 459.0], [417.0, 304.5], [430.0, 288.0], [419.0, 456.0], [418.0, 468.0], [429.0, 466.0], [416.0, 481.0], [423.0, 472.0], [421.0, 476.0], [420.0, 481.0], [422.0, 477.0], [424.0, 487.0], [431.0, 466.0], [425.0, 463.0], [445.0, 440.0], [432.0, 335.5], [443.0, 438.0], [442.0, 450.0], [441.0, 450.0], [436.0, 450.0], [437.0, 439.0], [435.0, 462.0], [434.0, 458.0], [433.0, 426.0], [444.0, 457.0], [438.0, 443.0], [439.0, 467.5], [440.0, 428.0], [446.0, 456.0], [447.0, 427.0], [461.0, 430.0], [452.0, 404.0], [448.0, 438.0], [463.0, 421.0], [462.0, 420.0], [449.0, 448.0], [450.0, 446.0], [460.0, 440.0], [451.0, 418.0], [457.0, 443.0], [458.0, 434.0], [459.0, 436.0], [456.0, 429.5], [454.0, 434.0], [455.0, 449.0], [453.0, 435.0], [479.0, 413.0], [472.0, 405.0], [473.0, 418.0], [475.0, 414.0], [474.0, 417.0], [464.0, 460.5], [471.0, 424.0], [470.0, 423.0], [468.0, 411.0], [469.0, 422.0], [465.0, 421.0], [478.0, 416.0], [467.0, 440.0], [476.0, 444.0], [466.0, 424.0], [477.0, 406.0], [483.0, 420.0], [488.0, 395.0], [486.0, 412.0], [491.0, 405.0], [492.0, 406.0], [484.0, 406.0], [485.0, 422.0], [481.0, 413.0], [482.0, 394.0], [487.0, 412.0], [480.0, 419.0], [493.0, 414.0], [495.0, 397.0], [494.0, 415.0], [490.0, 412.0], [489.0, 413.0], [509.0, 393.0], [501.0, 399.0], [500.0, 400.0], [502.0, 408.0], [511.0, 397.0], [503.0, 394.0], [499.0, 401.0], [508.0, 407.5], [510.0, 394.5], [497.0, 407.0], [498.0, 404.0], [496.0, 429.0], [506.0, 409.0], [507.0, 392.0], [504.0, 398.0], [505.0, 399.0], [518.0, 365.0], [517.0, 392.0], [522.0, 385.0], [524.0, 399.0], [521.0, 389.0], [520.0, 403.0], [516.0, 380.5], [527.0, 382.0], [513.0, 394.0], [512.0, 387.0], [515.0, 396.0], [514.0, 399.0], [537.0, 363.0], [519.0, 382.0], [536.0, 381.0], [531.0, 390.0], [533.0, 364.0], [532.0, 361.0], [535.0, 385.0], [534.0, 356.0], [541.0, 361.0], [530.0, 389.0], [529.0, 369.0], [543.0, 342.0], [549.0, 360.0], [550.0, 372.0], [568.0, 350.0], [571.0, 346.0], [572.0, 349.0], [569.0, 347.0], [552.0, 352.0], [548.0, 368.0], [545.0, 352.0], [547.0, 375.0], [559.0, 351.0], [575.0, 350.0], [564.0, 362.0], [565.0, 355.0], [567.0, 362.0], [563.0, 353.0], [562.0, 344.0], [561.0, 356.0], [556.0, 351.0], [555.0, 359.5], [554.0, 362.0], [578.0, 348.0], [587.0, 342.0], [585.0, 343.0], [577.0, 345.0], [586.0, 346.0], [602.0, 334.0], [576.0, 348.0], [594.0, 340.0], [593.0, 342.0], [582.0, 343.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 602.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 205.23333333333332, "minX": 1.55951694E12, "maxY": 500.4166666666667, "series": [{"data": [[1.55951712E12, 462.43333333333334], [1.5595173E12, 482.56666666666666], [1.559517E12, 472.85], [1.55951748E12, 483.45], [1.55951718E12, 467.01666666666665], [1.55951736E12, 500.4166666666667], [1.55951706E12, 470.93333333333334], [1.55951754E12, 205.23333333333332], [1.55951724E12, 481.3333333333333], [1.55951694E12, 246.95], [1.55951742E12, 479.15]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55951754E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 208.56666666666666, "minX": 1.55951694E12, "maxY": 500.4166666666667, "series": [{"data": [[1.55951712E12, 462.43333333333334], [1.5595173E12, 482.56666666666666], [1.559517E12, 472.85], [1.55951748E12, 483.43333333333334], [1.55951718E12, 467.01666666666665], [1.55951736E12, 500.4166666666667], [1.55951706E12, 470.9166666666667], [1.55951754E12, 208.56666666666666], [1.55951724E12, 481.3333333333333], [1.55951694E12, 243.63333333333333], [1.55951742E12, 479.1666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55951754E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 208.56666666666666, "minX": 1.55951694E12, "maxY": 500.4166666666667, "series": [{"data": [[1.55951712E12, 462.43333333333334], [1.5595173E12, 482.56666666666666], [1.559517E12, 472.85], [1.55951748E12, 483.43333333333334], [1.55951718E12, 467.01666666666665], [1.55951736E12, 500.4166666666667], [1.55951706E12, 470.9166666666667], [1.55951754E12, 208.56666666666666], [1.55951724E12, 481.3333333333333], [1.55951694E12, 243.63333333333333], [1.55951742E12, 479.1666666666667]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55951754E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 208.56666666666666, "minX": 1.55951694E12, "maxY": 500.4166666666667, "series": [{"data": [[1.55951712E12, 462.43333333333334], [1.5595173E12, 482.56666666666666], [1.559517E12, 472.85], [1.55951748E12, 483.43333333333334], [1.55951718E12, 467.01666666666665], [1.55951736E12, 500.4166666666667], [1.55951706E12, 470.9166666666667], [1.55951754E12, 208.56666666666666], [1.55951724E12, 481.3333333333333], [1.55951694E12, 243.63333333333333], [1.55951742E12, 479.1666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55951754E12, "title": "Total Transactions Per Second"}},
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

