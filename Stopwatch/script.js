let hr = min = sec = ms = 0,
  startTimer;
let lapCount = 1;

const startBtn = document.querySelector(".start"),
  stopBtn = document.querySelector(".stop"),
  resetBtn = document.querySelector(".reset"),
  lapBtn = document.querySelector(".lap");

const lapList = document.querySelector(".lap-list");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", lap);

function start() {
  startBtn.classList.add("active");
  stopBtn.classList.remove("stopActive");

  startTimer = setInterval(() => {
    ms++;
    if (ms == 100) {
      sec++;
      ms = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hr++;
      min = 0;
    }

    putValue();
  }, 10);
}

function stop() {
  startBtn.classList.remove("active");
  stopBtn.classList.add("stopActive");
  clearInterval(startTimer);
}

function reset() {
  startBtn.classList.remove("active");
  stopBtn.classList.remove("stopActive");
  clearInterval(startTimer);
  hr = min = sec = ms = 0;
  putValue();
  lapList.innerHTML = "";
  lapCount = 1;
}

function lap() {
  const lapTime = `${lapCount}. ${formatTime(hr)}:${formatTime(min)}:${formatTime(sec)}.${formatTime(ms)}`;
  const lapItem = document.createElement("li");
  lapItem.textContent = lapTime;
  lapList.appendChild(lapItem);
  lapCount++;
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function putValue() {
  document.querySelector(".millisecond").innerText = formatTime(ms);
  document.querySelector(".second").innerText = formatTime(sec);
  document.querySelector(".minute").innerText = formatTime(min);
  document.querySelector(".hour").innerText = formatTime(hr);
}