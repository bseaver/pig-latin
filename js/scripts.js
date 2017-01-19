$(document).ready(function() {
  // Back end section

  var toPigLatin = function(phrase) {
    var result;
    var vowels = ["a","e","i","o","u"];
    var firstLetter = phrase.charAt(0);
    var firstLetterIsVowel = vowels.indexOf(firstLetter) >= 0;

    if (phrase.length === 1 && firstLetterIsVowel) {
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
