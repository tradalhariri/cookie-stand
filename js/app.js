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
      let obj={};
      for (let i = 0; i < hours.length; i++) {
        amountCookies.push( Math.floor(this.randomCustomers(this.minCustomerPerHour, this.maxCustomerPerHour) * this.avgCookiesCustomer));
      }
      obj.cookies=amountCookies;
      obj.total= amountCookies.reduce((acc,item)=>{
        return acc+item;
      },0);
      return obj;
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
      let obj={};
      for (let i = 0; i < hours.length; i++) {
        amountCookies.push( Math.floor(this.randomCustomers(this.minCustomerPerHour, this.maxCustomerPerHour) * this.avgCookiesCustomer));
      }
      obj.cookies=amountCookies;
      obj.total= amountCookies.reduce((acc,item)=>{
        return acc+item;
      },0);
      return obj;
    },

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
      let obj={};
      for (let i = 0; i < hours.length; i++) {
        amountCookies.push( Math.floor(this.randomCustomers(this.minCustomerPerHour, this.maxCustomerPerHour) * this.avgCookiesCustomer));
      }
      obj.cookies=amountCookies;
      obj.total= amountCookies.reduce((acc,item)=>{
        return acc+item;
      },0);
      return obj;
    },

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
      let obj={};
      for (let i = 0; i < hours.length; i++) {

        amountCookies.push( Math.floor(this.randomCustomers(this.minCustomerPerHour, this.maxCustomerPerHour) * this.avgCookiesCustomer));
      }
      obj.cookies=amountCookies;
      obj.total= amountCookies.reduce((acc,item)=>{
        return acc+item;
      },0);
      return obj;
    },

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
      let obj={};
      for (let i = 0; i < hours.length; i++) {
        amountCookies.push( Math.floor(this.randomCustomers(this.minCustomerPerHour, this.maxCustomerPerHour) * this.avgCookiesCustomer));
      }
      obj.cookies=amountCookies;
      obj.total= amountCookies.reduce((acc,item)=>{
        return acc+item;
      },0);
      return obj;
    },

  }

}

];



let salesDiv = document.getElementById('sales');
let keys = Object.keys(Object.assign({}, ...LOCATIONS));

for(let i=0;i<LOCATIONS.length;i++){
  let locationDiv = document.createElement('div');
  let locationUl = document.createElement('ul');
  let locationH2 = document.createElement('h2');
  let locationHr = document.createElement('hr');
  locationH2.textContent = keys[i];
  let locationTotal = document.createElement('li');
  locationDiv.appendChild(locationH2);
  let cookiesAndTotal = LOCATIONS[i][keys[i]].amountCookiesPerHour();
  for(let j =0;j<hours.length;j++){
    let locationLi = document.createElement('li');
    locationLi.textContent = hours[j]+' : ' +cookiesAndTotal.cookies[j]+' Cookies';
    locationUl.appendChild(locationLi);
  }
  locationTotal.textContent= 'Total : '+cookiesAndTotal.total+' Cookies';
  locationUl.appendChild(locationTotal);


  locationDiv.appendChild(locationUl);
  locationDiv.appendChild(locationHr);
  salesDiv.appendChild(locationDiv);

}
