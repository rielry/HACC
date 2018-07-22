var screenDisabled;
var disable;
var shipment;
var locations;
var carType;

var shipmentOptions = ['TEST1', 'TEST2', 'TEST3', 'TEST4', 'TEST5'];
var locationOptions = ['LOCATION1', 'LOCATION2', 'LOCATION3'];
var carOptions = ['CAR1', 'CAR2'];

$(document).ready(function() {
    shipmentOptions.forEach(function(shipment) {
        var el = document.createElement("option");
        el.value = shipment;
        $('#shipmentOptions').append(el);
    })

    locationOptions.forEach(function(location) {
        var el = document.createElement("option");
        el.value = location;
        $('#locationOptions').append(el);
    })

    carOptions.forEach(function(car) {
        var el = document.createElement("option");
        el.value = car;
        $('#carOptions').append(el);
    })
});