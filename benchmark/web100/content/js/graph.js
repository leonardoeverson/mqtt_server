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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 1228.0, "series": [{"data": [[0.0, 4.0], [0.1, 11.0], [0.2, 19.0], [0.3, 27.0], [0.4, 32.0], [0.5, 37.0], [0.6, 41.0], [0.7, 45.0], [0.8, 50.0], [0.9, 54.0], [1.0, 58.0], [1.1, 62.0], [1.2, 66.0], [1.3, 73.0], [1.4, 86.0], [1.5, 92.0], [1.6, 97.0], [1.7, 102.0], [1.8, 105.0], [1.9, 108.0], [2.0, 111.0], [2.1, 114.0], [2.2, 118.0], [2.3, 122.0], [2.4, 126.0], [2.5, 130.0], [2.6, 133.0], [2.7, 137.0], [2.8, 142.0], [2.9, 146.0], [3.0, 150.0], [3.1, 153.0], [3.2, 154.0], [3.3, 155.0], [3.4, 156.0], [3.5, 156.0], [3.6, 157.0], [3.7, 157.0], [3.8, 158.0], [3.9, 158.0], [4.0, 158.0], [4.1, 158.0], [4.2, 159.0], [4.3, 159.0], [4.4, 159.0], [4.5, 159.0], [4.6, 159.0], [4.7, 160.0], [4.8, 160.0], [4.9, 160.0], [5.0, 160.0], [5.1, 160.0], [5.2, 160.0], [5.3, 161.0], [5.4, 161.0], [5.5, 161.0], [5.6, 161.0], [5.7, 161.0], [5.8, 161.0], [5.9, 161.0], [6.0, 161.0], [6.1, 162.0], [6.2, 162.0], [6.3, 162.0], [6.4, 162.0], [6.5, 162.0], [6.6, 162.0], [6.7, 162.0], [6.8, 162.0], [6.9, 163.0], [7.0, 163.0], [7.1, 163.0], [7.2, 163.0], [7.3, 163.0], [7.4, 163.0], [7.5, 163.0], [7.6, 163.0], [7.7, 163.0], [7.8, 163.0], [7.9, 163.0], [8.0, 163.0], [8.1, 164.0], [8.2, 164.0], [8.3, 164.0], [8.4, 164.0], [8.5, 164.0], [8.6, 164.0], [8.7, 164.0], [8.8, 164.0], [8.9, 164.0], [9.0, 164.0], [9.1, 164.0], [9.2, 164.0], [9.3, 164.0], [9.4, 165.0], [9.5, 165.0], [9.6, 165.0], [9.7, 165.0], [9.8, 165.0], [9.9, 165.0], [10.0, 165.0], [10.1, 165.0], [10.2, 165.0], [10.3, 165.0], [10.4, 165.0], [10.5, 165.0], [10.6, 165.0], [10.7, 165.0], [10.8, 166.0], [10.9, 166.0], [11.0, 166.0], [11.1, 166.0], [11.2, 166.0], [11.3, 166.0], [11.4, 166.0], [11.5, 166.0], [11.6, 166.0], [11.7, 166.0], [11.8, 166.0], [11.9, 166.0], [12.0, 166.0], [12.1, 166.0], [12.2, 166.0], [12.3, 167.0], [12.4, 167.0], [12.5, 167.0], [12.6, 167.0], [12.7, 167.0], [12.8, 167.0], [12.9, 167.0], [13.0, 167.0], [13.1, 167.0], [13.2, 167.0], [13.3, 167.0], [13.4, 167.0], [13.5, 167.0], [13.6, 167.0], [13.7, 167.0], [13.8, 168.0], [13.9, 168.0], [14.0, 168.0], [14.1, 168.0], [14.2, 168.0], [14.3, 168.0], [14.4, 168.0], [14.5, 168.0], [14.6, 168.0], [14.7, 168.0], [14.8, 168.0], [14.9, 168.0], [15.0, 168.0], [15.1, 168.0], [15.2, 168.0], [15.3, 169.0], [15.4, 169.0], [15.5, 169.0], [15.6, 169.0], [15.7, 169.0], [15.8, 169.0], [15.9, 169.0], [16.0, 169.0], [16.1, 169.0], [16.2, 169.0], [16.3, 169.0], [16.4, 169.0], [16.5, 169.0], [16.6, 169.0], [16.7, 169.0], [16.8, 170.0], [16.9, 170.0], [17.0, 170.0], [17.1, 170.0], [17.2, 170.0], [17.3, 170.0], [17.4, 170.0], [17.5, 170.0], [17.6, 170.0], [17.7, 170.0], [17.8, 170.0], [17.9, 170.0], [18.0, 170.0], [18.1, 170.0], [18.2, 171.0], [18.3, 171.0], [18.4, 171.0], [18.5, 171.0], [18.6, 171.0], [18.7, 171.0], [18.8, 171.0], [18.9, 171.0], [19.0, 171.0], [19.1, 171.0], [19.2, 171.0], [19.3, 171.0], [19.4, 171.0], [19.5, 171.0], [19.6, 172.0], [19.7, 172.0], [19.8, 172.0], [19.9, 172.0], [20.0, 172.0], [20.1, 172.0], [20.2, 172.0], [20.3, 172.0], [20.4, 172.0], [20.5, 172.0], [20.6, 172.0], [20.7, 172.0], [20.8, 173.0], [20.9, 173.0], [21.0, 173.0], [21.1, 173.0], [21.2, 173.0], [21.3, 173.0], [21.4, 173.0], [21.5, 173.0], [21.6, 173.0], [21.7, 173.0], [21.8, 173.0], [21.9, 173.0], [22.0, 174.0], [22.1, 174.0], [22.2, 174.0], [22.3, 174.0], [22.4, 174.0], [22.5, 174.0], [22.6, 174.0], [22.7, 174.0], [22.8, 174.0], [22.9, 174.0], [23.0, 174.0], [23.1, 175.0], [23.2, 175.0], [23.3, 175.0], [23.4, 175.0], [23.5, 175.0], [23.6, 175.0], [23.7, 175.0], [23.8, 175.0], [23.9, 175.0], [24.0, 175.0], [24.1, 175.0], [24.2, 175.0], [24.3, 176.0], [24.4, 176.0], [24.5, 176.0], [24.6, 176.0], [24.7, 176.0], [24.8, 176.0], [24.9, 176.0], [25.0, 176.0], [25.1, 176.0], [25.2, 176.0], [25.3, 177.0], [25.4, 177.0], [25.5, 177.0], [25.6, 177.0], [25.7, 177.0], [25.8, 177.0], [25.9, 177.0], [26.0, 177.0], [26.1, 177.0], [26.2, 177.0], [26.3, 178.0], [26.4, 178.0], [26.5, 178.0], [26.6, 178.0], [26.7, 178.0], [26.8, 178.0], [26.9, 178.0], [27.0, 178.0], [27.1, 178.0], [27.2, 178.0], [27.3, 179.0], [27.4, 179.0], [27.5, 179.0], [27.6, 179.0], [27.7, 179.0], [27.8, 179.0], [27.9, 179.0], [28.0, 179.0], [28.1, 179.0], [28.2, 179.0], [28.3, 180.0], [28.4, 180.0], [28.5, 180.0], [28.6, 180.0], [28.7, 180.0], [28.8, 180.0], [28.9, 180.0], [29.0, 180.0], [29.1, 180.0], [29.2, 181.0], [29.3, 181.0], [29.4, 181.0], [29.5, 181.0], [29.6, 181.0], [29.7, 181.0], [29.8, 181.0], [29.9, 181.0], [30.0, 182.0], [30.1, 182.0], [30.2, 182.0], [30.3, 182.0], [30.4, 182.0], [30.5, 182.0], [30.6, 182.0], [30.7, 182.0], [30.8, 182.0], [30.9, 183.0], [31.0, 183.0], [31.1, 183.0], [31.2, 183.0], [31.3, 183.0], [31.4, 183.0], [31.5, 183.0], [31.6, 183.0], [31.7, 184.0], [31.8, 184.0], [31.9, 184.0], [32.0, 184.0], [32.1, 184.0], [32.2, 184.0], [32.3, 184.0], [32.4, 184.0], [32.5, 184.0], [32.6, 185.0], [32.7, 185.0], [32.8, 185.0], [32.9, 185.0], [33.0, 185.0], [33.1, 185.0], [33.2, 185.0], [33.3, 185.0], [33.4, 186.0], [33.5, 186.0], [33.6, 186.0], [33.7, 186.0], [33.8, 186.0], [33.9, 186.0], [34.0, 186.0], [34.1, 186.0], [34.2, 187.0], [34.3, 187.0], [34.4, 187.0], [34.5, 187.0], [34.6, 187.0], [34.7, 187.0], [34.8, 187.0], [34.9, 187.0], [35.0, 188.0], [35.1, 188.0], [35.2, 188.0], [35.3, 188.0], [35.4, 188.0], [35.5, 188.0], [35.6, 188.0], [35.7, 188.0], [35.8, 189.0], [35.9, 189.0], [36.0, 189.0], [36.1, 189.0], [36.2, 189.0], [36.3, 189.0], [36.4, 189.0], [36.5, 190.0], [36.6, 190.0], [36.7, 190.0], [36.8, 190.0], [36.9, 190.0], [37.0, 190.0], [37.1, 190.0], [37.2, 190.0], [37.3, 191.0], [37.4, 191.0], [37.5, 191.0], [37.6, 191.0], [37.7, 191.0], [37.8, 191.0], [37.9, 191.0], [38.0, 191.0], [38.1, 192.0], [38.2, 192.0], [38.3, 192.0], [38.4, 192.0], [38.5, 192.0], [38.6, 192.0], [38.7, 192.0], [38.8, 193.0], [38.9, 193.0], [39.0, 193.0], [39.1, 193.0], [39.2, 193.0], [39.3, 193.0], [39.4, 193.0], [39.5, 193.0], [39.6, 194.0], [39.7, 194.0], [39.8, 194.0], [39.9, 194.0], [40.0, 194.0], [40.1, 194.0], [40.2, 194.0], [40.3, 194.0], [40.4, 195.0], [40.5, 195.0], [40.6, 195.0], [40.7, 195.0], [40.8, 195.0], [40.9, 195.0], [41.0, 195.0], [41.1, 196.0], [41.2, 196.0], [41.3, 196.0], [41.4, 196.0], [41.5, 196.0], [41.6, 196.0], [41.7, 196.0], [41.8, 196.0], [41.9, 197.0], [42.0, 197.0], [42.1, 197.0], [42.2, 197.0], [42.3, 197.0], [42.4, 197.0], [42.5, 197.0], [42.6, 197.0], [42.7, 198.0], [42.8, 198.0], [42.9, 198.0], [43.0, 198.0], [43.1, 198.0], [43.2, 198.0], [43.3, 198.0], [43.4, 199.0], [43.5, 199.0], [43.6, 199.0], [43.7, 199.0], [43.8, 199.0], [43.9, 199.0], [44.0, 199.0], [44.1, 199.0], [44.2, 200.0], [44.3, 200.0], [44.4, 200.0], [44.5, 200.0], [44.6, 200.0], [44.7, 200.0], [44.8, 200.0], [44.9, 201.0], [45.0, 201.0], [45.1, 201.0], [45.2, 201.0], [45.3, 201.0], [45.4, 201.0], [45.5, 201.0], [45.6, 201.0], [45.7, 202.0], [45.8, 202.0], [45.9, 202.0], [46.0, 202.0], [46.1, 202.0], [46.2, 202.0], [46.3, 202.0], [46.4, 203.0], [46.5, 203.0], [46.6, 203.0], [46.7, 203.0], [46.8, 203.0], [46.9, 203.0], [47.0, 203.0], [47.1, 204.0], [47.2, 204.0], [47.3, 204.0], [47.4, 204.0], [47.5, 204.0], [47.6, 204.0], [47.7, 204.0], [47.8, 205.0], [47.9, 205.0], [48.0, 205.0], [48.1, 205.0], [48.2, 205.0], [48.3, 205.0], [48.4, 205.0], [48.5, 206.0], [48.6, 206.0], [48.7, 206.0], [48.8, 206.0], [48.9, 206.0], [49.0, 206.0], [49.1, 206.0], [49.2, 206.0], [49.3, 207.0], [49.4, 207.0], [49.5, 207.0], [49.6, 207.0], [49.7, 207.0], [49.8, 207.0], [49.9, 207.0], [50.0, 208.0], [50.1, 208.0], [50.2, 208.0], [50.3, 208.0], [50.4, 208.0], [50.5, 208.0], [50.6, 208.0], [50.7, 208.0], [50.8, 209.0], [50.9, 209.0], [51.0, 209.0], [51.1, 209.0], [51.2, 209.0], [51.3, 209.0], [51.4, 209.0], [51.5, 210.0], [51.6, 210.0], [51.7, 210.0], [51.8, 210.0], [51.9, 210.0], [52.0, 210.0], [52.1, 210.0], [52.2, 210.0], [52.3, 211.0], [52.4, 211.0], [52.5, 211.0], [52.6, 211.0], [52.7, 211.0], [52.8, 211.0], [52.9, 211.0], [53.0, 212.0], [53.1, 212.0], [53.2, 212.0], [53.3, 212.0], [53.4, 212.0], [53.5, 212.0], [53.6, 212.0], [53.7, 213.0], [53.8, 213.0], [53.9, 213.0], [54.0, 213.0], [54.1, 213.0], [54.2, 213.0], [54.3, 213.0], [54.4, 213.0], [54.5, 214.0], [54.6, 214.0], [54.7, 214.0], [54.8, 214.0], [54.9, 214.0], [55.0, 214.0], [55.1, 214.0], [55.2, 215.0], [55.3, 215.0], [55.4, 215.0], [55.5, 215.0], [55.6, 215.0], [55.7, 215.0], [55.8, 215.0], [55.9, 216.0], [56.0, 216.0], [56.1, 216.0], [56.2, 216.0], [56.3, 216.0], [56.4, 216.0], [56.5, 216.0], [56.6, 216.0], [56.7, 217.0], [56.8, 217.0], [56.9, 217.0], [57.0, 217.0], [57.1, 217.0], [57.2, 217.0], [57.3, 217.0], [57.4, 217.0], [57.5, 217.0], [57.6, 218.0], [57.7, 218.0], [57.8, 218.0], [57.9, 218.0], [58.0, 218.0], [58.1, 218.0], [58.2, 218.0], [58.3, 218.0], [58.4, 218.0], [58.5, 219.0], [58.6, 219.0], [58.7, 219.0], [58.8, 219.0], [58.9, 219.0], [59.0, 219.0], [59.1, 219.0], [59.2, 219.0], [59.3, 219.0], [59.4, 219.0], [59.5, 219.0], [59.6, 219.0], [59.7, 220.0], [59.8, 220.0], [59.9, 220.0], [60.0, 220.0], [60.1, 220.0], [60.2, 220.0], [60.3, 220.0], [60.4, 220.0], [60.5, 220.0], [60.6, 220.0], [60.7, 220.0], [60.8, 220.0], [60.9, 220.0], [61.0, 220.0], [61.1, 221.0], [61.2, 221.0], [61.3, 221.0], [61.4, 221.0], [61.5, 221.0], [61.6, 221.0], [61.7, 221.0], [61.8, 221.0], [61.9, 221.0], [62.0, 221.0], [62.1, 221.0], [62.2, 221.0], [62.3, 221.0], [62.4, 221.0], [62.5, 221.0], [62.6, 221.0], [62.7, 221.0], [62.8, 222.0], [62.9, 222.0], [63.0, 222.0], [63.1, 222.0], [63.2, 222.0], [63.3, 222.0], [63.4, 222.0], [63.5, 222.0], [63.6, 222.0], [63.7, 222.0], [63.8, 222.0], [63.9, 222.0], [64.0, 222.0], [64.1, 222.0], [64.2, 222.0], [64.3, 222.0], [64.4, 222.0], [64.5, 222.0], [64.6, 222.0], [64.7, 222.0], [64.8, 223.0], [64.9, 223.0], [65.0, 223.0], [65.1, 223.0], [65.2, 223.0], [65.3, 223.0], [65.4, 223.0], [65.5, 223.0], [65.6, 223.0], [65.7, 223.0], [65.8, 223.0], [65.9, 223.0], [66.0, 223.0], [66.1, 223.0], [66.2, 223.0], [66.3, 223.0], [66.4, 223.0], [66.5, 223.0], [66.6, 223.0], [66.7, 223.0], [66.8, 223.0], [66.9, 223.0], [67.0, 223.0], [67.1, 223.0], [67.2, 224.0], [67.3, 224.0], [67.4, 224.0], [67.5, 224.0], [67.6, 224.0], [67.7, 224.0], [67.8, 224.0], [67.9, 224.0], [68.0, 224.0], [68.1, 224.0], [68.2, 224.0], [68.3, 224.0], [68.4, 224.0], [68.5, 224.0], [68.6, 224.0], [68.7, 224.0], [68.8, 224.0], [68.9, 224.0], [69.0, 224.0], [69.1, 224.0], [69.2, 224.0], [69.3, 224.0], [69.4, 224.0], [69.5, 224.0], [69.6, 224.0], [69.7, 224.0], [69.8, 225.0], [69.9, 225.0], [70.0, 225.0], [70.1, 225.0], [70.2, 225.0], [70.3, 225.0], [70.4, 225.0], [70.5, 225.0], [70.6, 225.0], [70.7, 225.0], [70.8, 225.0], [70.9, 225.0], [71.0, 225.0], [71.1, 225.0], [71.2, 225.0], [71.3, 225.0], [71.4, 225.0], [71.5, 225.0], [71.6, 225.0], [71.7, 225.0], [71.8, 225.0], [71.9, 225.0], [72.0, 225.0], [72.1, 225.0], [72.2, 225.0], [72.3, 225.0], [72.4, 225.0], [72.5, 225.0], [72.6, 225.0], [72.7, 225.0], [72.8, 225.0], [72.9, 225.0], [73.0, 226.0], [73.1, 226.0], [73.2, 226.0], [73.3, 226.0], [73.4, 226.0], [73.5, 226.0], [73.6, 226.0], [73.7, 226.0], [73.8, 226.0], [73.9, 226.0], [74.0, 226.0], [74.1, 226.0], [74.2, 226.0], [74.3, 226.0], [74.4, 226.0], [74.5, 226.0], [74.6, 226.0], [74.7, 226.0], [74.8, 226.0], [74.9, 226.0], [75.0, 226.0], [75.1, 226.0], [75.2, 226.0], [75.3, 226.0], [75.4, 226.0], [75.5, 226.0], [75.6, 226.0], [75.7, 226.0], [75.8, 226.0], [75.9, 226.0], [76.0, 226.0], [76.1, 226.0], [76.2, 226.0], [76.3, 226.0], [76.4, 226.0], [76.5, 227.0], [76.6, 227.0], [76.7, 227.0], [76.8, 227.0], [76.9, 227.0], [77.0, 227.0], [77.1, 227.0], [77.2, 227.0], [77.3, 227.0], [77.4, 227.0], [77.5, 227.0], [77.6, 227.0], [77.7, 227.0], [77.8, 227.0], [77.9, 227.0], [78.0, 227.0], [78.1, 227.0], [78.2, 227.0], [78.3, 227.0], [78.4, 227.0], [78.5, 227.0], [78.6, 227.0], [78.7, 227.0], [78.8, 227.0], [78.9, 227.0], [79.0, 227.0], [79.1, 227.0], [79.2, 227.0], [79.3, 227.0], [79.4, 227.0], [79.5, 227.0], [79.6, 227.0], [79.7, 227.0], [79.8, 228.0], [79.9, 228.0], [80.0, 228.0], [80.1, 228.0], [80.2, 228.0], [80.3, 228.0], [80.4, 228.0], [80.5, 228.0], [80.6, 228.0], [80.7, 228.0], [80.8, 228.0], [80.9, 228.0], [81.0, 228.0], [81.1, 228.0], [81.2, 228.0], [81.3, 228.0], [81.4, 228.0], [81.5, 228.0], [81.6, 228.0], [81.7, 228.0], [81.8, 228.0], [81.9, 228.0], [82.0, 228.0], [82.1, 228.0], [82.2, 228.0], [82.3, 228.0], [82.4, 228.0], [82.5, 228.0], [82.6, 229.0], [82.7, 229.0], [82.8, 229.0], [82.9, 229.0], [83.0, 229.0], [83.1, 229.0], [83.2, 229.0], [83.3, 229.0], [83.4, 229.0], [83.5, 229.0], [83.6, 229.0], [83.7, 229.0], [83.8, 229.0], [83.9, 229.0], [84.0, 229.0], [84.1, 229.0], [84.2, 229.0], [84.3, 229.0], [84.4, 229.0], [84.5, 229.0], [84.6, 229.0], [84.7, 229.0], [84.8, 229.0], [84.9, 229.0], [85.0, 230.0], [85.1, 230.0], [85.2, 230.0], [85.3, 230.0], [85.4, 230.0], [85.5, 230.0], [85.6, 230.0], [85.7, 230.0], [85.8, 230.0], [85.9, 230.0], [86.0, 230.0], [86.1, 230.0], [86.2, 230.0], [86.3, 230.0], [86.4, 230.0], [86.5, 230.0], [86.6, 230.0], [86.7, 230.0], [86.8, 230.0], [86.9, 230.0], [87.0, 230.0], [87.1, 230.0], [87.2, 231.0], [87.3, 231.0], [87.4, 231.0], [87.5, 231.0], [87.6, 231.0], [87.7, 231.0], [87.8, 231.0], [87.9, 231.0], [88.0, 231.0], [88.1, 231.0], [88.2, 231.0], [88.3, 231.0], [88.4, 231.0], [88.5, 231.0], [88.6, 231.0], [88.7, 231.0], [88.8, 231.0], [88.9, 231.0], [89.0, 232.0], [89.1, 232.0], [89.2, 232.0], [89.3, 232.0], [89.4, 232.0], [89.5, 232.0], [89.6, 232.0], [89.7, 232.0], [89.8, 232.0], [89.9, 232.0], [90.0, 232.0], [90.1, 232.0], [90.2, 232.0], [90.3, 232.0], [90.4, 232.0], [90.5, 233.0], [90.6, 233.0], [90.7, 233.0], [90.8, 233.0], [90.9, 233.0], [91.0, 233.0], [91.1, 233.0], [91.2, 233.0], [91.3, 233.0], [91.4, 233.0], [91.5, 233.0], [91.6, 233.0], [91.7, 234.0], [91.8, 234.0], [91.9, 234.0], [92.0, 234.0], [92.1, 234.0], [92.2, 234.0], [92.3, 234.0], [92.4, 234.0], [92.5, 234.0], [92.6, 234.0], [92.7, 234.0], [92.8, 234.0], [92.9, 235.0], [93.0, 235.0], [93.1, 235.0], [93.2, 235.0], [93.3, 235.0], [93.4, 235.0], [93.5, 235.0], [93.6, 235.0], [93.7, 235.0], [93.8, 235.0], [93.9, 236.0], [94.0, 236.0], [94.1, 236.0], [94.2, 236.0], [94.3, 236.0], [94.4, 236.0], [94.5, 236.0], [94.6, 236.0], [94.7, 237.0], [94.8, 237.0], [94.9, 237.0], [95.0, 237.0], [95.1, 237.0], [95.2, 237.0], [95.3, 238.0], [95.4, 238.0], [95.5, 238.0], [95.6, 238.0], [95.7, 238.0], [95.8, 238.0], [95.9, 239.0], [96.0, 239.0], [96.1, 239.0], [96.2, 239.0], [96.3, 240.0], [96.4, 240.0], [96.5, 240.0], [96.6, 240.0], [96.7, 241.0], [96.8, 241.0], [96.9, 241.0], [97.0, 242.0], [97.1, 242.0], [97.2, 243.0], [97.3, 243.0], [97.4, 244.0], [97.5, 244.0], [97.6, 245.0], [97.7, 245.0], [97.8, 246.0], [97.9, 247.0], [98.0, 248.0], [98.1, 248.0], [98.2, 249.0], [98.3, 250.0], [98.4, 252.0], [98.5, 254.0], [98.6, 256.0], [98.7, 258.0], [98.8, 261.0], [98.9, 263.0], [99.0, 265.0], [99.1, 269.0], [99.2, 273.0], [99.3, 275.0], [99.4, 278.0], [99.5, 282.0], [99.6, 286.0], [99.7, 292.0], [99.8, 296.0], [99.9, 304.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 162456.0, "series": [{"data": [[0.0, 4745.0], [1100.0, 11.0], [300.0, 424.0], [1200.0, 1.0], [100.0, 123814.0], [200.0, 162456.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 12.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 291439.0, "series": [{"data": [[0.0, 291439.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 12.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 61.0886754231197, "minX": 1.55951532E12, "maxY": 100.0, "series": [{"data": [[1.55951568E12, 100.0], [1.55951538E12, 100.0], [1.55951586E12, 100.0], [1.55951574E12, 100.0], [1.55951556E12, 100.0], [1.55951592E12, 99.53198074277852], [1.55951562E12, 100.0], [1.55951544E12, 100.0], [1.5595158E12, 100.0], [1.5595155E12, 100.0], [1.55951532E12, 61.0886754231197]], "isOverall": false, "label": "Grupo de Usu\u00E1rios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55951592E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 9.978260869565213, "minX": 1.0, "maxY": 218.36619718309856, "series": [{"data": [[2.0, 13.690476190476195], [3.0, 9.978260869565213], [4.0, 11.666666666666668], [5.0, 11.84552845528455], [6.0, 17.396226415094354], [7.0, 20.87254901960785], [8.0, 25.21649484536082], [9.0, 30.417582417582405], [10.0, 25.433333333333337], [11.0, 29.685039370078744], [12.0, 34.270270270270295], [13.0, 32.94495412844037], [14.0, 41.19230769230771], [15.0, 40.247863247863236], [16.0, 34.97709923664124], [17.0, 38.73684210526315], [18.0, 40.007518796992464], [19.0, 41.558823529411754], [20.0, 50.634782608695645], [21.0, 57.732142857142854], [22.0, 56.75862068965517], [23.0, 52.62406015037595], [24.0, 54.770992366412244], [25.0, 58.75590551181104], [26.0, 50.51948051948055], [27.0, 60.94405594405595], [28.0, 54.32467532467535], [29.0, 65.24242424242422], [30.0, 55.52258064516128], [31.0, 74.84761904761906], [32.0, 118.92783505154634], [33.0, 87.58181818181822], [34.0, 93.03539823008846], [35.0, 89.67500000000003], [36.0, 76.30344827586211], [37.0, 67.63095238095244], [38.0, 82.95454545454548], [39.0, 108.45238095238095], [40.0, 97.13821138211381], [41.0, 105.7586206896552], [42.0, 108.30172413793103], [43.0, 112.20869565217389], [44.0, 110.9756097560976], [45.0, 108.49593495934961], [46.0, 113.272], [47.0, 116.424], [48.0, 122.54954954954952], [49.0, 123.68032786885246], [50.0, 123.44444444444449], [51.0, 105.2162162162162], [52.0, 131.26400000000007], [53.0, 112.18881118881119], [54.0, 111.61842105263156], [55.0, 107.41780821917811], [56.0, 131.99248120300751], [57.0, 108.61589403973514], [58.0, 117.74829931972788], [59.0, 131.53076923076932], [60.0, 126.93055555555554], [61.0, 148.28906249999994], [62.0, 124.96598639455782], [63.0, 149.63779527559058], [64.0, 156.63025210084035], [65.0, 116.06617647058823], [66.0, 122.41463414634154], [67.0, 136.93984962406014], [68.0, 166.04255319148936], [69.0, 191.67768595041315], [70.0, 145.28205128205113], [71.0, 162.38709677419357], [72.0, 180.37288135593215], [73.0, 151.56410256410268], [74.0, 143.5341614906832], [75.0, 151.29710144927535], [76.0, 174.90909090909085], [77.0, 144.29651162790705], [78.0, 147.430463576159], [79.0, 197.23728813559316], [80.0, 180.68493150684935], [81.0, 178.85365853658533], [82.0, 170.58227848101268], [83.0, 195.35964912280707], [84.0, 175.98203592814377], [85.0, 163.5855263157895], [86.0, 178.65441176470594], [87.0, 216.8581560283688], [88.0, 207.7058823529412], [89.0, 195.52413793103443], [90.0, 173.69230769230776], [91.0, 165.20000000000007], [92.0, 163.14204545454552], [93.0, 188.469387755102], [94.0, 200.8692307692308], [95.0, 218.36619718309856], [96.0, 190.17647058823533], [97.0, 185.42622950819663], [98.0, 173.24050632911388], [99.0, 207.8101265822785], [100.0, 204.62045632399025], [1.0, 108.0]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}, {"data": [[97.93823318499345, 200.7277072303785]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 22294.666666666668, "minX": 1.55951532E12, "maxY": 1696672.8, "series": [{"data": [[1.55951568E12, 1633445.85], [1.55951538E12, 1578239.8166666667], [1.55951586E12, 1600421.8], [1.55951574E12, 1653138.5833333333], [1.55951556E12, 1696672.8], [1.55951592E12, 643443.4666666667], [1.55951562E12, 1660827.6], [1.55951544E12, 1598541.0333333334], [1.5595158E12, 1611817.0333333334], [1.5595155E12, 1599038.8833333333], [1.55951532E12, 846510.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55951568E12, 56597.25], [1.55951538E12, 54684.416666666664], [1.55951586E12, 55453.0], [1.55951574E12, 57279.583333333336], [1.55951556E12, 58788.0], [1.55951592E12, 22294.666666666668], [1.55951562E12, 57546.0], [1.55951544E12, 55387.833333333336], [1.5595158E12, 55847.833333333336], [1.5595155E12, 55405.083333333336], [1.55951532E12, 29330.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55951592E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 130.5438802849116, "minX": 1.55951532E12, "maxY": 218.28455983493825, "series": [{"data": [[1.55951568E12, 203.1338006705283], [1.55951538E12, 210.08411902842596], [1.55951586E12, 207.12747131204134], [1.55951574E12, 200.73498410573933], [1.55951556E12, 195.53638497652653], [1.55951592E12, 218.28455983493825], [1.55951562E12, 199.60371702637983], [1.55951544E12, 207.47352757976358], [1.5595158E12, 205.80712471686402], [1.5595155E12, 207.52395613519292], [1.55951532E12, 130.5438802849116]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55951592E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 129.84395216624162, "minX": 1.55951532E12, "maxY": 218.18045048143014, "series": [{"data": [[1.55951568E12, 203.03626943005168], [1.55951538E12, 209.98142371455629], [1.55951586E12, 207.0296557445062], [1.55951574E12, 200.6296469800908], [1.55951556E12, 195.43316379759915], [1.55951592E12, 218.18045048143014], [1.55951562E12, 199.50399680255694], [1.55951544E12, 207.37002560730855], [1.5595158E12, 205.70203857505567], [1.5595155E12, 207.41069637112042], [1.55951532E12, 129.84395216624162]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55951592E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.7474209078404406, "minX": 1.55951532E12, "maxY": 3.7495262366855857, "series": [{"data": [[1.55951568E12, 0.8604761420976029], [1.55951538E12, 0.9261154533665102], [1.55951586E12, 0.8326766210424433], [1.55951574E12, 0.8685293625564632], [1.55951556E12, 0.8981481481481455], [1.55951592E12, 0.7474209078404406], [1.55951562E12, 0.8501865174527038], [1.55951544E12, 0.8193300574434154], [1.5595158E12, 0.8596677877685497], [1.5595155E12, 0.819663057390945], [1.55951532E12, 3.7495262366855857]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55951592E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.55951532E12, "maxY": 1228.0, "series": [{"data": [[1.55951568E12, 314.0], [1.55951538E12, 304.0], [1.55951586E12, 312.0], [1.55951574E12, 305.0], [1.55951556E12, 260.0], [1.55951592E12, 310.0], [1.55951562E12, 293.0], [1.55951544E12, 310.0], [1.5595158E12, 294.0], [1.5595155E12, 307.0], [1.55951532E12, 1228.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.55951568E12, 150.0], [1.55951538E12, 153.0], [1.55951586E12, 154.0], [1.55951574E12, 151.0], [1.55951556E12, 146.0], [1.55951592E12, 108.0], [1.55951562E12, 150.0], [1.55951544E12, 150.0], [1.5595158E12, 150.0], [1.5595155E12, 153.0], [1.55951532E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.55951568E12, 228.0], [1.55951538E12, 246.0], [1.55951586E12, 232.0], [1.55951574E12, 230.0], [1.55951556E12, 228.0], [1.55951592E12, 234.0], [1.55951562E12, 233.0], [1.55951544E12, 231.0], [1.5595158E12, 232.0], [1.5595155E12, 235.0], [1.55951532E12, 213.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.55951568E12, 244.0], [1.55951538E12, 282.0], [1.55951586E12, 260.0], [1.55951574E12, 245.0], [1.55951556E12, 240.0], [1.55951592E12, 294.0], [1.55951562E12, 253.0], [1.55951544E12, 288.0], [1.5595158E12, 268.9900000000016], [1.5595155E12, 269.8100000000304], [1.55951532E12, 240.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.55951568E12, 231.0], [1.55951538E12, 261.0], [1.55951586E12, 238.0], [1.55951574E12, 234.0], [1.55951556E12, 232.0], [1.55951592E12, 242.0], [1.55951562E12, 238.0], [1.55951544E12, 237.0], [1.5595158E12, 235.0], [1.5595155E12, 239.0], [1.55951532E12, 225.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55951592E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 8.0, "minX": 143.0, "maxY": 262.0, "series": [{"data": [[143.0, 8.0], [191.0, 189.0], [328.0, 24.0], [356.0, 84.0], [359.0, 262.0], [368.0, 12.0], [376.0, 30.0], [380.0, 252.0], [383.0, 260.0], [395.0, 75.5], [397.0, 55.0], [391.0, 170.0], [415.0, 92.0], [408.0, 110.0], [410.0, 238.0], [400.0, 247.0], [412.0, 259.5], [409.0, 234.0], [430.0, 231.0], [429.0, 233.0], [425.0, 234.0], [427.0, 235.0], [431.0, 227.0], [420.0, 235.0], [416.0, 239.0], [418.0, 245.0], [421.0, 235.0], [444.0, 227.0], [440.0, 200.0], [442.0, 226.0], [446.0, 225.0], [445.0, 226.0], [438.0, 226.0], [439.0, 227.0], [437.0, 229.0], [436.0, 227.0], [443.0, 227.0], [435.0, 228.0], [434.0, 228.0], [433.0, 230.0], [441.0, 226.0], [451.0, 223.0], [459.0, 221.0], [458.0, 224.0], [457.0, 222.0], [462.0, 222.0], [455.0, 220.0], [448.0, 226.0], [461.0, 221.0], [460.0, 224.0], [463.0, 224.0], [456.0, 223.0], [449.0, 224.0], [450.0, 226.0], [452.0, 226.0], [453.0, 225.0], [454.0, 224.0], [478.0, 206.0], [467.0, 211.0], [469.0, 52.0], [468.0, 224.0], [476.0, 213.0], [477.0, 218.0], [470.0, 215.0], [479.0, 215.0], [464.0, 220.0], [471.0, 219.0], [465.0, 223.0], [466.0, 222.0], [473.0, 219.0], [475.0, 217.0], [474.0, 213.0], [472.0, 217.0], [488.0, 207.0], [485.0, 195.0], [487.0, 211.0], [486.0, 211.0], [480.0, 197.0], [490.0, 207.0], [491.0, 206.5], [483.0, 219.0], [481.0, 213.0], [482.0, 215.0], [484.0, 219.0], [489.0, 212.0], [495.0, 201.0], [494.0, 203.0], [493.0, 203.0], [492.0, 205.0], [496.0, 200.0], [510.0, 190.0], [500.0, 202.0], [501.0, 197.0], [502.0, 204.0], [503.0, 195.0], [511.0, 193.0], [505.0, 194.0], [504.0, 197.0], [506.0, 195.0], [507.0, 201.5], [509.0, 190.5], [498.0, 202.0], [508.0, 196.0], [499.0, 212.0], [497.0, 201.0], [518.0, 191.0], [513.0, 192.0], [528.0, 168.0], [524.0, 188.0], [525.0, 192.0], [527.0, 193.0], [512.0, 189.0], [526.0, 197.0], [515.0, 188.0], [517.0, 195.0], [516.0, 189.0], [514.0, 201.0], [531.0, 184.0], [530.0, 186.0], [532.0, 183.0], [535.0, 174.0], [533.0, 179.0], [534.0, 172.5], [522.0, 189.0], [521.0, 195.0], [520.0, 187.0], [537.0, 180.0], [519.0, 187.0], [536.0, 167.0], [539.0, 176.0], [542.0, 184.0], [540.0, 178.0], [538.0, 184.0], [523.0, 181.0], [551.0, 178.0], [546.0, 176.0], [548.0, 174.0], [547.0, 171.0], [544.0, 169.0], [559.0, 169.0], [545.0, 169.0], [573.0, 165.0], [562.0, 174.0], [574.0, 171.0], [575.0, 172.0], [561.0, 181.0], [565.0, 173.0], [566.0, 170.5], [550.0, 177.0], [549.0, 177.0], [572.0, 169.0], [569.0, 170.0], [558.0, 171.0], [552.0, 170.5], [555.0, 183.0], [556.0, 177.0], [554.0, 164.0], [592.0, 167.0], [596.0, 167.0], [598.0, 165.0], [583.0, 171.0], [581.0, 166.0], [576.0, 168.0], [580.0, 172.5], [595.0, 168.0], [593.0, 169.0], [591.0, 169.0], [607.0, 166.0], [602.0, 163.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 607.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 8.0, "minX": 143.0, "maxY": 262.0, "series": [{"data": [[143.0, 8.0], [191.0, 189.0], [328.0, 23.0], [356.0, 84.0], [359.0, 262.0], [368.0, 12.0], [376.0, 30.0], [380.0, 252.0], [383.0, 260.0], [395.0, 75.5], [397.0, 54.0], [391.0, 169.5], [415.0, 92.0], [408.0, 110.0], [410.0, 238.0], [400.0, 247.0], [412.0, 259.5], [409.0, 234.0], [430.0, 231.0], [429.0, 232.0], [425.0, 234.0], [427.0, 235.0], [431.0, 227.0], [420.0, 235.0], [416.0, 238.0], [418.0, 245.0], [421.0, 235.0], [444.0, 227.0], [440.0, 199.5], [442.0, 226.0], [446.0, 225.0], [445.0, 226.0], [438.0, 225.0], [439.0, 227.0], [437.0, 229.0], [436.0, 226.0], [443.0, 227.0], [435.0, 228.0], [434.0, 227.5], [433.0, 230.0], [441.0, 226.0], [451.0, 223.0], [459.0, 220.0], [458.0, 224.0], [457.0, 222.0], [462.0, 221.0], [455.0, 219.0], [448.0, 226.0], [461.0, 221.0], [460.0, 224.0], [463.0, 224.0], [456.0, 223.0], [449.0, 224.0], [450.0, 226.0], [452.0, 226.0], [453.0, 225.0], [454.0, 224.0], [478.0, 205.0], [467.0, 211.0], [469.0, 51.0], [468.0, 224.0], [476.0, 213.0], [477.0, 218.0], [470.0, 215.0], [479.0, 215.0], [464.0, 219.5], [471.0, 219.0], [465.0, 223.0], [466.0, 222.0], [473.0, 219.0], [475.0, 217.0], [474.0, 213.0], [472.0, 217.0], [488.0, 207.0], [485.0, 195.0], [487.0, 211.0], [486.0, 211.0], [480.0, 196.0], [490.0, 207.0], [491.0, 206.0], [483.0, 219.0], [481.0, 213.0], [482.0, 215.0], [484.0, 219.0], [489.0, 212.0], [495.0, 200.0], [494.0, 203.0], [493.0, 203.0], [492.0, 205.0], [496.0, 200.0], [510.0, 190.0], [500.0, 202.0], [501.0, 197.0], [502.0, 204.0], [503.0, 195.0], [511.0, 193.0], [505.0, 194.0], [504.0, 197.0], [506.0, 195.0], [507.0, 201.5], [509.0, 190.0], [498.0, 202.0], [508.0, 196.0], [499.0, 212.0], [497.0, 201.0], [518.0, 191.0], [513.0, 192.0], [528.0, 168.0], [524.0, 188.0], [525.0, 192.0], [527.0, 193.0], [512.0, 189.0], [526.0, 197.0], [515.0, 188.0], [517.0, 195.0], [516.0, 189.0], [514.0, 201.0], [531.0, 184.0], [530.0, 185.5], [532.0, 182.5], [535.0, 174.0], [533.0, 179.0], [534.0, 172.5], [522.0, 189.0], [521.0, 195.0], [520.0, 187.0], [537.0, 180.0], [519.0, 187.0], [536.0, 167.0], [539.0, 176.0], [542.0, 184.0], [540.0, 178.0], [538.0, 184.0], [523.0, 181.0], [551.0, 177.5], [546.0, 176.0], [548.0, 174.0], [547.0, 171.0], [544.0, 169.0], [559.0, 169.0], [545.0, 169.0], [573.0, 165.0], [562.0, 174.0], [574.0, 171.0], [575.0, 172.0], [561.0, 181.0], [565.0, 173.0], [566.0, 170.5], [550.0, 177.0], [549.0, 177.0], [572.0, 169.0], [569.0, 170.0], [558.0, 171.0], [552.0, 170.0], [555.0, 183.0], [556.0, 177.0], [554.0, 164.0], [592.0, 167.0], [596.0, 167.0], [598.0, 165.0], [583.0, 171.0], [581.0, 166.0], [576.0, 168.0], [580.0, 172.0], [595.0, 168.0], [593.0, 169.0], [591.0, 169.0], [607.0, 166.0], [602.0, 163.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 607.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 192.21666666666667, "minX": 1.55951532E12, "maxY": 511.21666666666664, "series": [{"data": [[1.55951568E12, 492.15], [1.55951538E12, 475.53333333333336], [1.55951586E12, 482.18333333333334], [1.55951574E12, 498.0833333333333], [1.55951556E12, 511.21666666666664], [1.55951592E12, 192.21666666666667], [1.55951562E12, 500.4], [1.55951544E12, 481.6333333333333], [1.5595158E12, 485.6333333333333], [1.5595155E12, 481.76666666666665], [1.55951532E12, 256.7]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55951592E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 193.86666666666667, "minX": 1.55951532E12, "maxY": 511.2, "series": [{"data": [[1.55951568E12, 492.15], [1.55951538E12, 475.51666666666665], [1.55951586E12, 482.2], [1.55951574E12, 498.0833333333333], [1.55951556E12, 511.2], [1.55951592E12, 193.86666666666667], [1.55951562E12, 500.4], [1.55951544E12, 481.6333333333333], [1.5595158E12, 485.6333333333333], [1.5595155E12, 481.78333333333336], [1.55951532E12, 255.05]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55951592E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 193.86666666666667, "minX": 1.55951532E12, "maxY": 511.2, "series": [{"data": [[1.55951568E12, 492.15], [1.55951538E12, 475.51666666666665], [1.55951586E12, 482.2], [1.55951574E12, 498.0833333333333], [1.55951556E12, 511.2], [1.55951592E12, 193.86666666666667], [1.55951562E12, 500.4], [1.55951544E12, 481.6333333333333], [1.5595158E12, 485.6333333333333], [1.5595155E12, 481.78333333333336], [1.55951532E12, 255.05]], "isOverall": false, "label": "Requisi\u00E7\u00E3o HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55951592E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 193.86666666666667, "minX": 1.55951532E12, "maxY": 511.2, "series": [{"data": [[1.55951568E12, 492.15], [1.55951538E12, 475.51666666666665], [1.55951586E12, 482.2], [1.55951574E12, 498.0833333333333], [1.55951556E12, 511.2], [1.55951592E12, 193.86666666666667], [1.55951562E12, 500.4], [1.55951544E12, 481.6333333333333], [1.5595158E12, 485.6333333333333], [1.5595155E12, 481.78333333333336], [1.55951532E12, 255.05]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55951592E12, "title": "Total Transactions Per Second"}},
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

