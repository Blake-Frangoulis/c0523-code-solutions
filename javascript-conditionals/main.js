/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  switch (name) {
    case (name = 'yakko'):
    case (name = 'wakko'):
      console.log("We're the warner brothers!");
      break;
    case (name = 'dot'):
      console.log("I'm cute~");
      break;
    default:
      return 'Goodnight Everybody!';
  }
}

function recommendMovie(genre) {
  switch (genre) {
    case (genre = 'action'):
      console.log('Top Gun');
      break;
    case (genre = 'comedy'):
      console.log('Step Brothers');
      break;
    case (genre = 'horror'):
      console.log('Friday the 13th');
      break;
    case (genre = 'drama'):
      console.log('Titanic');
      break;
    case (genre = 'musical'):
      console.log('Grease');
      break;
    case (genre = 'sci-fi'):
      console.log('Star Wars');
      break;
    default:
      return 'Genre not recognized.';
  }
}
