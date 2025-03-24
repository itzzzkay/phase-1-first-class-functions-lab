// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(2, 4);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function (fare) {
    return multiplier * fare;
  };
}

const fareDoubler = function (fare) {
  return fare * 2;
};

const fareTripler = function (fare) {
  return fare * 3;
};
const selectDifferentDrivers = function (drivers, func) {
  return func(drivers);
};
