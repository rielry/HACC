var screenDisabled;
var disable;
var shipment;
var locations;
var carType;

var shipmentOptions = ['TEST1', 'TEST2', 'TEST3', 'TEST4', 'TEST5'];

$(document).ready(function() {
    shipmentOptions.forEach(function(shipment) {
        var el = document.createElement("option");
        el.value = shipment;
        $('#shipmentOptions').append(el);
    })
});