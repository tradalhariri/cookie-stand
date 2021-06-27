'use strict';
alert('knkjl');
const hours = ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];
const LOCATIONS = [{
  Seatle: {
    minCustomerPerHour: 23,
    maxCustomerPerHour: 65,
    avgCookiesCustomer: 6.3,
    randomCustomers: function (min, max) {
      let minimumCustomers = Math.ceil(min);
      let maximumCustomers = Math.floor(max);
      return Math.floor(Math.random() * (maximumCustomers - minimumCustomers + 1) + minimumCustomers);
    },
    amountCookiesPerHour: function () {
      let amountCookies = [];
      for (let i = 0; i < hours.length; i++) {
        let obj = {};
        let key = hours[i];
        obj[key]= Math.floor(this.randomCustomers(this.minCustomerPerHour, this.maxCustomerPerHour) * this.avgCookiesCustomer);
        amountCookies.push(obj);
      }
      return amountCookies;
    },

  }
},


{
  Tokyo: {
    minCustomerPerHour: 3,
    maxCustomerPerHour: 24,
    avgCookiesCustomer: 1.2,

    randomCustomers: function (min, max) {
      let minimumCustomers = Math.ceil(min);
      let maximumCustomers = Math.floor(max);
      return Math.floor(Math.random() * (maximumCustomers - minimumCustomers + 1) + minimumCustomers);
    },
    amountCookiesPerHour: function () {
      let amountCookies = [];
      for (let i = 0; i < hours.length; i++) {
        let obj = {};
        let key = hours[i];
        obj[key]= Math.floor(this.randomCustomers(this.minCustomerPerHour, this.maxCustomerPerHour) * this.avgCookiesCustomer);
        amountCookies.push(obj);
      }
      return amountCookies;
    }
  }



},

{

  Dubai: {
    minCustomerPerHour: 11,
    maxCustomerPerHour: 38,
    avgCookiesCustomer: 3.7,


    randomCustomers: function (min, max) {
      let minimumCustomers = Math.ceil(min);
      let maximumCustomers = Math.floor(max);
      return Math.floor(Math.random() * (maximumCustomers - minimumCustomers + 1) + minimumCustomers);
    },
    amountCookiesPerHour: function () {
      let amountCookies = [];
      for (let i = 0; i < hours.length; i++) {
        let obj = {};
        let key = hours[i];
        obj[key]= Math.floor(this.randomCustomers(this.minCustomerPerHour, this.maxCustomerPerHour) * this.avgCookiesCustomer);
        amountCookies.push(obj);
      }
      return amountCookies;
    }
  }
},

{

  Paris: {
    minCustomerPerHour: 20,
    maxCustomerPerHour: 38,
    avgCookiesCustomer: 2.3,
    randomCustomers: function (min, max) {
      let minimumCustomers = Math.ceil(min);
      let maximumCustomers = Math.floor(max);
      return Math.floor(Math.random() * (maximumCustomers - minimumCustomers + 1) + minimumCustomers);
    },
    amountCookiesPerHour: function () {
      let amountCookies = [];
      for (let i = 0; i < hours.length; i++) {
        let obj = {};
        let key = hours[i];
        obj[key]= Math.floor(this.randomCustomers(this.minCustomerPerHour, this.maxCustomerPerHour) * this.avgCookiesCustomer);
        amountCookies.push(obj);
      }
      return amountCookies;
    }
  }
},

{

  Lima: {
    minCustomerPerHour: 2,
    maxCustomerPerHour: 16,
    avgCookiesCustomer: 4.6,
    randomCustomers: function (min, max) {
      let minimumCustomers = Math.ceil(min);
      let maximumCustomers = Math.floor(max);
      return Math.floor(Math.random() * (maximumCustomers - minimumCustomers + 1) + minimumCustomers);
    },
    amountCookiesPerHour: function () {
      let amountCookies = [];
      for (let i = 0; i < hours.length; i++) {
        let obj = {};
        let key = hours[i];
        obj[key]= Math.floor(this.randomCustomers(this.minCustomerPerHour, this.maxCustomerPerHour) * this.avgCookiesCustomer);
        amountCookies.push(obj);
      }
      return amountCookies;
    }
  }

}

];




// LOCATIONS[0].Seatle.amountCookiesPerHour().values();
// let summation = LOCATIONS[0].Seatle.amountCookiesPerHour().reduce((acc,item)=>{
//     return acc+item;
// },0);

// console.log(LOCATIONS[0].Seatle.amountCookiesPerHour().values());
// console.log(summation);

let salesDiv = document.getElementById('sales');
let keys = Object.keys(Object.assign({}, ...LOCATIONS));


// let sum = LOCATIONS[0][keys[0]].amountCookiesPerHour().reduce((acc,item)=>{
//   return acc+item;
// },0);

// console.log('sum '+sum);

for(let i=0;i<LOCATIONS.length;i++){
  let locationDiv = document.createElement('div');
  let locationUl = document.createElement('ul');
  let locationH2 = document.createElement('h2');
  let locationHr = document.createElement('hr');
  locationH2.textContent = keys[i];
  let total = 0;
  let locationTotal = document.createElement('li');
  //   console.log('arr is '+LOCATIONS[i][keys[i]].amountCookiesPerHour());

  for(let j =0;j<LOCATIONS[i][keys[i]].amountCookiesPerHour().length;j++){
    let locationLi = document.createElement('li');
    // console.log(LOCATIONS[i][keys[i]].amountCookiesPerHour()[j][`${j+6}`]);
    total+= LOCATIONS[i][keys[i]].amountCookiesPerHour()[j][hours[j]];
    // console.log('num is '+LOCATIONS[i][keys[i]].amountCookiesPerHour()[j][hours[j]]);
    // console.log('total is '+total);
    locationLi.textContent = hours[j]+' : ' +LOCATIONS[i][keys[i]].amountCookiesPerHour()[j][hours[j]]+' Cookies';
    locationUl.appendChild(locationLi);
  }
  locationDiv.appendChild(locationH2);
  locationTotal.textContent= 'Total : '+total+' Cookies';
  locationUl.appendChild(locationTotal);


  locationDiv.appendChild(locationUl);
  locationDiv.appendChild(locationHr);
  salesDiv.appendChild(locationDiv);

}
