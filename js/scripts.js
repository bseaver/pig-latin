$(document).ready(function() {
  // Back end section

  var toPigLatin = function(phrase) {
    var result;
    // var vowels = ["a","e","i","o","u"];

    if (phrase.length === 1) {
      result = phrase + "ay";
    } else {
      result = phrase;
    }
    return result;
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
