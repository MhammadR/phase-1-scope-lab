var customerName = "bob";
const leastFavoriteCustomer = "tia";

function upperCaseCustomerName() {
  return customerName.toUpperCase();
}

function setBestCustomer() {
  var bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "bob";
}

upperCaseCustomerName();
setBestCustomer();
overwriteBestCustomer();
changeLeastFavoriteCustomer();
