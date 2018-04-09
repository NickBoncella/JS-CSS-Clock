// Init vars for clock hands
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// SET DATE function
function setDate() {
  // create Date object to get current time
  const time = new Date();

  // get current seconds
  const seconds = time.getSeconds();
  // convert current seconds to degrees
  const secondsDegrees = ((seconds / 60) * 360) + 90;  // offset 90 deg b/c hands are offset 90 deg in order to start at 12
  // rotate seconds hand
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // get current minutes
  const minutes = time.getMinutes();
  // convert minutes to degrees
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  // rotate minutes hand
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // get current hours
  const hours = time.getHours();
  // convert hours to degrees
  const hoursDegrees = ((hours / 12) * 360) + 90;
  // rotate hours hand
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
