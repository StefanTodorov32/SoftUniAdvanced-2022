function attachEventsListeners() {
    const buttons = Array.from(
      document.querySelectorAll("div input:nth-child(3)")
    );
    buttons.forEach((button) => button.addEventListener("click", converter));
    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
  
    function converter(e) {
      let currentButton = e.target.previousElementSibling;
  
      if (days == currentButton) {
        hours.value = days.value * 24;
        minutes.value = days.value * 1440;
        seconds.value = days.value * 86400;
      } else if (hours == currentButton) {
        days.value = hours.value / 24;
        minutes.value = hours.value * 60;
        seconds.value = hours.value * 3600;
      } else if (minutes == currentButton) {
        days.value = minutes.value / 1440;
        hours.value = minutes.value / 60;
        seconds.value = minutes.value * 60;
      } else if (seconds == currentButton) {
        days.value = seconds.value / 86400;
        hours.value = seconds.value / 3600;
        minutes.value = seconds.value / 60;
      }
    }
  }