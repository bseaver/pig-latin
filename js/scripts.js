$(document).ready(function() {
  // Back end section

  var toPigLatin = function(phrase) {
    return phrase;
  }

  // Front end section
  $("form").submit(function(event) {
    event.preventDefault();

    // Get Input
    var johnny = $("#inputPhrase").val();

    // Get output from translator
    var peter = toPigLatin(johnny);

    // Put output into result span
    $("#translation").text(peter);

  });

}); // End Document Ready
