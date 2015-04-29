function makeAdder(CAPTURED) {
  return function(free) {
    return free + CAPTURED;
  };
}

var add10 = makeAdder(10);

console.log(add10(32));
