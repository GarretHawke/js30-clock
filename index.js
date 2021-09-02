const secondHand = document.getElementById('sec');
const minHand = document.getElementById('min');
const hourHand = document.getElementById('hour');


function setDate() {
  const now = new Date();

  let seconds = now.getSeconds();
  if (seconds === 0) {
    seconds = 60;
  }
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  let mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);