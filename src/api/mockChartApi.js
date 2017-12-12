import delay from './delay';
/* eslint-disable no-console */

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const chartData = [
  {
    key: 0,
    value: 12    
  },
  {
    key: 1,
    value: 13    
  },
  {
    key: 2,
    value: 23    
  },
  {
    key: 3,
    value: 33    
  },
  {
    key: 4,
    value: 43    
  },
  {
    key: 5,
    value: 53    
  },
  {
    key: 6,
    value: 63    
  },
  {
    key: 7,
    value: 73    
  },
  {
    key: 8,
    value: 83    
  }
];

class chartApi {
  static getChartData() {    
    return new Promise((resolve, reject) => {
      setTimeout(() => {          
        resolve(Object.assign([], chartData));
      }, delay);
    });
  }
}

export default chartApi;
