let inputCheck = document.getElementById('inputCheck');
console.log(inputCheck);
let billingAdress = document.getElementById('form-billing-address');
console.log(billingAdress);
billingAdress.style.display = 'none';

inputCheck.addEventListener('change', () => {
    if (inputCheck.checked) {
        billingAdress.style.display = 'none';
    } else {
        billingAdress.style.display = 'block';
    }
})

// "use strict";

// function initMap() {
//     const componentForm = [
//         'location',
//         'locality',
//         'country',
//         'postal_code',
//     ];
//     const autocompleteInput = document.getElementById('location');
//     const autocomplete = new google.maps.places.Autocomplete(autocompleteInput);
//     autocomplete.setComponentRestrictions({
//         country: ["fr", "be", "ch", "lu"],
//     })
//     autocomplete.addListener('place_changed', function () {
//         const place = autocomplete.getPlace();
//         if (!place.geometry) {
//             // User entered the name of a Place that was not suggested and
//             // pressed the Enter key, or the Place Details request failed.
//             window.alert('No details available for input: \'' + place.name + '\'');
//             return;
//         }
//         fillInAddress(place);
//     });

//     function fillInAddress(place) {  // optional parameter
//         const addressNameFormat = {
//             'street_number': 'short_name',
//             'route': 'long_name',
//             'locality': 'long_name',
//             'country': 'long_name',
//             'postal_code': 'short_name',
//         };
//         const getAddressComp = function (type) {
//             for (const component of place.address_components) {
//                 if (component.types[0] === type) {
//                     return component[addressNameFormat[type]];
//                 }
//             }
//             return '';
//         };
//         document.getElementById('location').value = getAddressComp('street_number') + ' '
//             + getAddressComp('route');
//         for (const component of componentForm) {
//             // Location field is handled separately above as it has different logic.
//             if (component !== 'location') {
//                 console.log(document.getElementById(component))
//                 document.getElementById(component).value = getAddressComp(component);
//                 console.log(document.getElementById(component))
//             }
//         }
//     }
// }