let countDownDate = new Date("Nov 30, 2023 00:00:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  days = days < 10 ? "0" + days : days;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("seconds1").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".countdown-blocks").innerHTML = "EXPIRED";
  }
}, 1000);

function startCountdown(targetDate, daysId, hoursId, minutesId, secondsId) {
  let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = targetDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById(daysId).innerHTML = days + " : ";
    document.getElementById(hoursId).innerHTML = hours + " : ";
    document.getElementById(minutesId).innerHTML = minutes + " : ";
    document.getElementById(secondsId).innerHTML = seconds;

    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);
}

let targetDate1 = new Date("Nov 19, 2023 10:20:10").getTime();
startCountdown(targetDate1, "days1", "hours1", "minutes1", "seconds1");

let targetDate2 = new Date("Dec 31, 2023 07:10:20").getTime();
startCountdown(targetDate2, "days2", "hours2", "minutes2", "seconds2");

let targetDate3 = new Date("Dec 11, 2023 11:00:15").getTime();
startCountdown(targetDate3, "days3", "hours3", "minutes3", "seconds3");

let targetDate4 = new Date("Nov 29, 2023 05:11:27").getTime();
startCountdown(targetDate4, "days4", "hours4", "minutes4", "seconds4");
