$(function() {
  var availableTags = ["Housing", "Lodging", "Bed", "Parking", "Laundry", "Meals", "Food", "Showers", "Pet Sitting", "Storage"];
  $("#tags").autocomplete({
    source: availableTags
  });
});