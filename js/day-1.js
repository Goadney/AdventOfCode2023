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
    if (is_numeric(line[i])) {
      lastDigit = line[i];
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
    answer += parseInt(sumCalibrationPartTwo(line));
  });
  output.textContent = answer.toString();
});
