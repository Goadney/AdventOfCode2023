let c = console.log.bind(document);

let puzzle = document.querySelector("#puzzle");
let output = document.querySelector("#answer");
let answer = 0;
let submitPartOne = document.querySelector("#day2-submit-part-one");
let submitPartTwo = document.querySelector("#day2-submit-part-two");

submitPartOne.addEventListener("click", (e) => {
  e.preventDefault();
  answer = 0;
  output.textContent = "";
  let tab = puzzle.value;
  tab = tab.split("Game ");
  tab = tab.slice(1);
  for (let line of tab) {
    let ok = true;
    let id_ = line.split(":")[0];
    let events = line.split(":")[1];
    for (let event of events.split(";")) {
      for (let balls of event.split(",")) {
        let [n, color] = balls.trim().split(" ");
        if (parseInt(n, 10) > { red: 12, green: 13, blue: 14 }[color]) {
          ok = false;
          c(n, color);
          break;
        }
      }
    }
    if (ok) {
      answer += parseInt(id_, 10);
    }
  }

  console.log(answer);
  output.textContent = answer.toString();
});

submitPartTwo.addEventListener("click", (e) => {
  e.preventDefault();
  answer = 0;
  output.textContent = "";
  let tab = puzzle.value;
  tab = tab.split("Game ");
  tab = tab.slice(1);
  for (let line of tab) {
    let minBalls = {};
    let ok = true;
    let id_ = line.split(":")[0];
    let events = line.split(":")[1];
    for (let event of events.split(";")) {
      for (let balls of event.split(",")) {
        let [n, color] = balls.trim().split(" ");
        if (!minBalls[color] || minBalls[color] < parseInt(n, 10)) {
          minBalls[color] = parseInt(n, 10);
          c(minBalls);
        }
      }
    }
    answer +=
      parseInt(minBalls["red"], 10) *
      parseInt(minBalls["green"], 10) *
      parseInt(minBalls["blue"], 10);
  }

  c(answer);
  output.textContent = answer.toString();
});
