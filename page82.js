function whatWasTheLocal() {
  var CAPTURED = "Oh hai";

  return function() {
    return "The local was: " + CAPTURED;
  }
}

var reportLocal = whatWasTheLocal();

console.log(reportLocal());
