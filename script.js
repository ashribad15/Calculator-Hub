function calculateAgeAndTime( )
 {
  const birthdate = new Date(document.getElementById("birthdate").value);
  const birthtime = document.getElementById("birthtime").value;
  const birthtimeArray = birthtime.split(":");
  
  const birthDateTime = new Date(
    birthdate.getFullYear(),
    birthdate.getMonth(),
    birthdate.getDate(),
    parseInt(birthtimeArray[0]),
    parseInt(birthtimeArray[1])
  );
  
  const today = new Date();

  let years = today.getFullYear() - birthdate.getFullYear();
  let months = today.getMonth() - birthdate.getMonth();
  let days = today.getDate() - birthdate.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
    if (days < 0) {
      const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
      days += lastMonth.getDate();
    }
  }

  const ageInSeconds = Math.floor((today - birthDateTime) / 1000);
  const hours = Math.floor(ageInSeconds / 3600);
  const minutes = Math.floor((ageInSeconds % 3600) / 60);
  const seconds = ageInSeconds % 60;

  const ageDaysString = `Your Age:
  ${years} years,
  ${months} months,
  ${days} days.`;

const ageTimeString = `Time survived:
  ${hours} hours,
  ${minutes} minutes,
  ${seconds} seconds.`;

  document.getElementById("result").innerHTML = `${ageDaysString}<br>${ageTimeString}`;

}

  