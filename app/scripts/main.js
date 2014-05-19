(function (window) {
  'use strict';

  var CharSheet = {
    init: function() {
      if (localStorage['name']) {
        $('#name').val(localStorage["name"]);
      }
      if (localStorage['player']) {
        $('#player').val(localStorage["player"]);
      }
    }() // execute this on page load!
  };

  window.CharSheet = CharSheet;
}(this));

$('.form-control').keyup(function () {
  localStorage[$(this).attr('name')] = $(this).val();
});

$('#localStorageTest').submit(function() {
  localStorage.clear();
});
