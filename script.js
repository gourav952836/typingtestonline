let startTime, endTime;
let timerRunning = false;

function startTest() {
  const text = document.getElementById("text-display").innerText;
  const input = document.getElementById("text-input");

  input.value = "";
  input.disabled = false;
  input.focus();

  startTime = new Date();
  timerRunning = true;
}

function endTest() {
  if (!timerRunning) return;

  endTime = new Date();
  timerRunning = false;

  const text = document.getElementById("text-display").innerText;
  const inputText = document.getElementById("text-input").value;

  let timeTaken = (endTime - startTime) / 1000;
  let words = inputText.trim().split(" ").length;
  let wpm = Math.round((words / timeTaken) * 60);

  let correctChars = 0;
  for (let i = 0; i < text.length; i++) {
    if (inputText[i] === text[i]) {
      correctChars++;
    }
  }

  let accuracy = Math.round((correctChars / text.length) * 100);

  document.getElementById("result").innerHTML =
    "WPM: " + wpm + " | Accuracy: " + accuracy + "%";
}