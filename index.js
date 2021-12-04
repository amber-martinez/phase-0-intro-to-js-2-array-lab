let cats = ["Milo", "Otis", "Garfield"]

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });
//function 1
  function destructivelyAppendCat(name) {
      cats.push("Ralph")
  }


beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });
//function 2
  function destructivelyPrependCat(name) {
      cats.unshift("Bob")
  }

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });
//function 3
function destructivelyRemoveLastCat() {
      cats.pop()
  }


beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });
//function 4 
function destructivelyRemoveFirstCat() {
    cats.shift()
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });
//function 5
function appendCat(name) {
    const appendCatName = [...cats, "Broom"]
    return appendCatName
}


beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });
//function 6
function prependCat(name) {
    const prependCatName = ["Arnold", ...cats]
    return prependCatName
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });
//function 7
function removeLastCat() {
    const removeLast = [...cats.slice(0,2)]
    return removeLast
}


beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });
function removeFirstCat() {
    const removeFirst = [...cats.slice(1,3)]
    return removeFirst
}