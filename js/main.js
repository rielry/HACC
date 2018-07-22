var shipment;
var origin;
var destination;
var carOption;
var smallText = false;
var table;
var currTab = 0;
var tabs = ['#main', '#conversion'];

var shipmentOptions = ['TEST1', 'TEST2', 'TEST3', 'TEST4', 'TEST5'];
var locationOptions = ['LOCATION1', 'LOCATION2', 'LOCATION3'];
var carOptions = ['CAR1', 'CAR2'];

var dummyData = [
    ['30121', 'AR-Little Rock UPG', 'IL-Chicago UPG', 'Gondola', '$4982.00', 'UP', 8, 92],
    ['111312', 'AR-Northwest UPG', 'TX-Dallas/Ft Worth UPG', 'BHF < 60', '$4005.00', 'UP', 7, 100],
    ['30121', 'CA-El Centro UPG', 'IL-St Louis UPG', 'Gondola', '$9139.00', 'UP', 10, 82],
    ['9230', 'MN-Minneapolis UPG', 'AZ-Phoenix UPG', 'Gondola', '$4982.00', 'BNSF', 9, 92]
]


$(document).ready(function() {
    $('#sortingButtons').hide();

    shipment = $('#shipmentType');
    origin = $('#origin');
    destination = $('#destination');
    carOption = $('#carOption')

    shipmentOptions.forEach(function(shipment) {
        var el = document.createElement("option");
        el.value = shipment;
        $('#shipmentOptions').append(el);
    });
    
    locationOptions.forEach(function(location) {
        var el = document.createElement("option");
        el.value = location;
        $('#locationOptions').append(el);
    });

    carOptions.forEach(function(car) {
        var el = document.createElement("option");
        el.value = car;
        $('#carOptions').append(el);
    });

    $('.customInput').change(function(event){
        if(shipment.val() && origin.val() && destination.val() && carOption.val()) {
            loadOptions();
        }
    })

    $('input[type="radio"]').click(function() {
        if($(this).is(':checked')) {
            var index = 4;
            switch($(this).val()) {
                case 'SCAC':
                    index = 5;
                    break;
                case 'Consistency':
                    index = 7;
                    break;
                case 'Time':
                    index = 6;
            }

            dummyData.sort(function(a, b) {
                if(a[index] == b[index]) {
                    return 0;
                } else {
                    return (a[index] < b[index]) ? -1 : 1;
                }
            });

            table.data = dummyData;
            table.render();
        }
    })
});

function loadOptions() {
    if(!smallText) {
        smallText = true;

        var x = $('#shipmentWrapper').offset().top;
        var y = $('#shipmentWrapper').offset().left;
    
        $('.input').css('transform', 'scale(0.5)');
    
        var now = $('#shipmentWrapper').offset();
        $('#shipmentWrapper').animate({'top': x - now.top}, 500);
        $('#shipmentWrapper').animate({'left': y - now.left}, 500);
    
        now = $('#originWrapper').offset();
        $('#originWrapper').animate({'top': x - now.top}, 500);
        $('#originWrapper').animate({'left': 150}, 500);
    
        now = $('#destinationWrapper').offset();
        $('#destinationWrapper').animate({'top': x - now.top}, 500);
        $('#destinationWrapper').animate({'left': 50}, 500);
    
        now = $('#carWrapper').offset();
        $('#carWrapper').animate({'top': x - now.top}, 500);
        $('#carWrapper').animate({'left': 475}, 500);

        setTimeout(function(){
            var container = document.getElementById('dataTable');
            table = new Handsontable(container, {
                data: dummyData,
                rowHeaders: false,
                colHeaders: ['Commodity', 'Origin', 'Destination', 'Car Type', 'Rate Amount', 'SCAC', 'Transit Time', 'Consistency'],
            })

            $('#sortingButtons').fadeIn();
        }, 1000);
    }
}

function switchTab(tabIndex) {
    if(tabIndex != currTab) {
        if(tabIndex == 0) {
            $('#textCard').css('background-color', '#b4e1c5');
            $('#mainTab').show();
        } else if(tabIndex == 1) {
            $('#textCard').css('background-color', '#e6aaaa');
            $('#mainTab').hide();
        }
    }
    currTab = tabIndex;
}