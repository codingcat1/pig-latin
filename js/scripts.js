var pigLatinTranslator = function(firstWord) {

  firstWord = firstWord.toLowerCase();

  var consonantArray = firstWord.split('');


  if (firstWord.charAt(0) !== "a" && firstWord.charAt(0) !== "e" && firstWord.charAt(0) !== "i" && firstWord.charAt(0) !== "o" && firstWord.charAt(0) !== "u") {
    var consonantsVar;
    for (var i = 0; i < firstWord.length; i++) {
    var chr = firstWord.charAt(i);

      if ((chr === 'q') && (firstWord.charAt(i + 1) === 'u')) {
       consonantsVar = (firstWord.slice(i + 2) + firstWord.slice(0, i) + "quay");
       break;

      } else if (chr === 'a' || chr === 'e' || chr === 'i' || chr === 'o' || chr === 'u') {
        consonantsVar = (firstWord.slice(i) + firstWord.slice(0, i) + "ay");
        break;
      }
    }
    return consonantsVar;
  }
    else {
    return (firstWord + "ay");
  }
    alert(firstWord);
};

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    var firstWord = ($("input#first-word").val());
    var result = pigLatinTranslator(firstWord);

    $("#result").show();
    $('.real-result').text(result);

    event.preventDefault();
  });
});
