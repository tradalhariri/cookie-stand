'use strict';
const hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
let stores = [];
function Store (name,minCustomerPerHour,maxCustomerPerHour,avgCookiesCustomer){
  this.name = name;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesCustomer = avgCookiesCustomer;
}

Store.prototype.randomCustomers = function(){

  return Math.floor(Math.random() * (Math.floor(this.maxCustomerPerHour) - Math.ceil(this.minCustomerPerHour) + 1) + Math.ceil(this.minCustomerPerHour) );
};

Store.prototype.amountCookiesPerHour = function(){
  let amountCookies = [];
  let obj={};
  for (let i = 0; i < hours.length; i++) {

    amountCookies.push( Math.floor(this.randomCustomers() * this.avgCookiesCustomer));
  }
  obj.cookies=amountCookies;
  obj.total= amountCookies.reduce((acc,item)=>{
    return acc+item;
  },0);
  return obj;
};

function createTableBody(table){
  let list = [];
  for(let i =0;i<stores.length;i++){
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    th.textContent = stores[i].name;
    tr.appendChild(th);

    let amountCookiesPerHour = stores[i].amountCookiesPerHour();
    list.push(amountCookiesPerHour.cookies);
    console.log(amountCookiesPerHour);
    for(let j = 0;j<amountCookiesPerHour.cookies.length;j++){
      let td = document.createElement('td');
      td.textContent = amountCookiesPerHour.cookies[j];
      tr.appendChild(td);
    }
    let tdTotal = document.createElement('td');
    tdTotal.textContent= amountCookiesPerHour.total;
    tr.appendChild(tdTotal);
    table.appendChild(tr);
  }

  const sums = list[0].map((x, idx) => list.reduce((sum, curr) => sum + curr[idx], 0));
  let trColumn = document.createElement('tr');
  let thColumn = document.createElement('th');
  thColumn.textContent = 'Totals';
  trColumn.appendChild(thColumn);
  for (let k = 0;k<sums.length;k++)
  {
    let tdColumn = document.createElement('td');
    tdColumn.textContent = sums[k];
    trColumn.appendChild(tdColumn);
  }
  table.appendChild(trColumn);
}


function createTableHeader(table){

  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent='    ';
  tr.appendChild(th);
  for(let i=0;i<hours.length;i++){
    let th = document.createElement('th');
    th.textContent = hours[i];
    tr.appendChild(th);
  }
  let thend = document.createElement('th');
  thend.textContent = 'Daily Location Total';
  tr.appendChild(thend);
  table.appendChild(tr);

}
let salesDiv = document.getElementById('sales');
let table = document.createElement('table');
salesDiv.appendChild(table);

let seatle = new Store('Seatle',23,65,6.3);
let tokyo = new Store('Tokyo',3,24,1.2);
let dubai = new Store('Dubai',11,38,3.7);
let paris = new Store('Paris',20,38,2.3);
let lima = new Store('Lima',2,16,4.6);

stores.push(seatle);
stores.push(tokyo);
stores.push(dubai);
stores.push(paris);
stores.push(lima);
createTableHeader(table);
createTableBody(table);
