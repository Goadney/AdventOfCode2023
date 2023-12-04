let c = console.log.bind(document);

let puzzle = document.querySelector("#puzzle");
let output = document.querySelector("#answer");
let answer = 0;
let submitPartOne = document.querySelector("#submit-part-one");
let submitPartTwo = document.querySelector("#submit-part-two");
submitPartOne.addEventListener("click", (e) => {
  e.preventDefault();
  answer = 0;
  output.textContent = "";
  let tab = puzzle.value.split(" ");
  tab.forEach((line) => {
    answer += parseInt(sumCalibration(line));
  });
  output.textContent = answer.toString();
});

let firstDigit = 0;
let lastDigit = 0;
function sumCalibration(line) {
  //trouver le premier chiffre
  findFirstDigit(line);

  //trouver le dernier chiffre
  findLastDigit(line);
  c(line + " " + firstDigit + " " + lastDigit);
  return firstDigit + lastDigit;
}

function findFirstDigit(line) {
  for (let i = 0; i < line.length; i++) {
    if (is_numeric(line[i])) {
      firstDigit = line[i];
      break;
    }
  }

  return firstDigit;
}

function findLastDigit(line) {
  for (let i = line.length - 1; i >= 0; i--) {
    c(line[i]);
    c(is_numeric(line[i]));
    if (is_numeric(line[i])) {
      lastDigit = line[i];
      c(lastDigit);
      break;
    }
  }

  return lastDigit;
}
function is_numeric(str) {
  return /^\d+$/.test(str);
}

/**
 *
 *
 *
 *  PARTIE  2
 *
 *
 *
 *
 */
submitPartTwo.addEventListener("click", (e) => {
  e.preventDefault();
  answer = 0;
  output.textContent = "";
  let tab = puzzle.value.split(" ");
  tab.forEach((line) => {
    c(line + " avant");
    let newLine = "";
    newLine = replaceWordsWithDigits(line);
    answer += parseInt(sumCalibration(newLine));
  });
  output.textContent = answer.toString();
});
function replaceWordsWithDigits(line) {
  c(line);
  let word = line;
  return word
    .replace(/zero/g, "z0ero")
    .replace(/one/g, "o1ne")
    .replace(/two/g, "t2wo")
    .replace(/three/g, "th3ree")
    .replace(/four/g, "f4our")
    .replace(/five/g, "f5ive")
    .replace(/six/g, "s6ix")
    .replace(/seven/g, "s7even")
    .replace(/eight/g, "e8ight")
    .replace(/nine/g, "n9ine");
}
