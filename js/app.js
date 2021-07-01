'use strict';
const hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
let stores = [];
function Store (name,minCustomerPerHour,maxCustomerPerHour,avgCookiesCustomer){
  this.name = name;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesCustomer = avgCookiesCustomer;
  this.avgCookiesNeede = [];
  this.totalCookies = 0;
}

Store.prototype.randomCustomers = function(){

  return Math.floor(Math.random() * (Math.floor(this.maxCustomerPerHour) - Math.ceil(this.minCustomerPerHour) + 1) + Math.ceil(this.minCustomerPerHour) );
};

Store.prototype.amountCookiesPerHour = function(){
  let totalCookies = 0 ;
  for (let i = 0; i < hours.length; i++) {
    let randomAvgCookies = Math.floor(this.randomCustomers() * this.avgCookiesCustomer);

    this.avgCookiesNeede.push(randomAvgCookies );
    totalCookies+= randomAvgCookies;
  }
  this.totalCookies = totalCookies;
};

Store.prototype.render = function () {
  let trStore = document.createElement('tr');
  let tdStoreName = document.createElement('td');
  tdStoreName.textContent = this.name;
  trStore.appendChild(tdStoreName);

  for (let i = 0; i < hours.length; i++) {
    let tdStoreCookie = document.createElement('td');
    tdStoreCookie.textContent = this.avgCookiesNeede[i];
    trStore.appendChild(tdStoreCookie);
  }
  let tdTotalStore = document.createElement('td');
  tdTotalStore.textContent = this.totalCookies;
  trStore.appendChild(tdTotalStore);
  table.appendChild(trStore);

};


function createTableFooter(){
  let trFooter = document.createElement('tfoot');
  let thFooterHeading = document.createElement('td');
  thFooterHeading.textContent = 'Total';
  trFooter.appendChild(thFooterHeading);
  for (let h = 0; h < hours.length; h++) {
    let tdTotalStoresPerHour = 0;
    let tdFooterTotal = document.createElement('td');
    for (let s = 0; s < stores.length; s++) {
      tdTotalStoresPerHour+=stores[s].avgCookiesNeede[h];
    }
    tdFooterTotal.textContent = tdTotalStoresPerHour;
    trFooter.appendChild(tdFooterTotal);
  }
  let totalOfDailyTotal = 0;
  for (let s = 0; s < stores.length; s++) {
    totalOfDailyTotal+=stores[s].totalCookies;
  }
  let tdTotalOfTotal = document.createElement('td');
  tdTotalOfTotal.textContent = totalOfDailyTotal;
  trFooter.appendChild(tdTotalOfTotal);
  table.appendChild(trFooter);

}

function createTableHeader(){

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

table.style.width='100%';
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

createTableHeader();

for (let i = 0; i < stores.length; i++) {
  stores[i].amountCookiesPerHour();
  stores[i].render();
}


createTableFooter();


let formInfo = document.getElementById('formInfo');
formInfo.addEventListener('submit',addNewLocation);
function addNewLocation(event) {
  event.preventDefault();
  let locationName = event.target.locationName.value;
  let locationmin = Number(event.target.locationMinimumCustomers.value);
  let locationmax = Number(event.target.locationMaximumCustomers.value);
  let locationAvgCustomers = Number(event.target.locationAvgCustomers.value);

  let newLocation = new Store(locationName,locationmin,locationmax,locationAvgCustomers);

  newLocation.amountCookiesPerHour();
  stores.push(newLocation);
  newLocation.render();
  table.deleteTFoot();
  createTableFooter();
}






// let images = [ '../assets/chinook.jpg','../assets/cutter.jpg','../assets/family.jpg','../assets/fish.jpg','../images/salmon.png'];
// let imageHead = document.getElementById('head');
// let i = 0;
// setInterval(function() {
//   imageHead.style.backgroundImage = 'url(' + images[i] + ')';
//   imageHead.style.backgroundPosition='center';
//   imageHead.style.backgroundSize='contain';
//   imageHead.style.backgroundRepeat='no-repeat';
//   i = i + 1;
//   if (i === images.length) {
//     i = 0;
//   }
// }, 1000);
