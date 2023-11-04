$(document).ready(function() {
    let amenityIDs = {};

    $('input[type="checkbox"]').change(function() {
        const amenityID = $(this).data('amenity_id');

        if (this.checked) {
            amenityIDs[amenityID] = true;
        } else {
            delete amenityIDs[amenityID];
        }

        let amenitiesList = Object.keys(amenityIDs).join(', ');
        $('.amenities h4').text(amenitiesList);
    })
})
