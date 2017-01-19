$(document).ready(function() {
  // Back end section

  var toPigLatin = function(phrase) {
    var result;
    var stop = false;
    var vowels = ["a","e","i","o","u"];

    if (phrase.length >= 1 && /* first character is not a letter */) {
      result = phrase;
      stop = true;
    }

    if (!stop && phrase.length === 1 && /*first character is a letter*/ ) {
      result = phrase + "ay";
      stop = true;
    }

    if (!stop) {
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
