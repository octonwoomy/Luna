<script>
  import Nav from "./nav.svelte";
  let code = `
#include <stdio.h>
#include <stdlib.h>

int main() {
  int hour, minute, second;
  hour = minute = second = 0;
  while (1) {
    system("cls");
    printf("%02d : %02d : %02d", hour, minute, second);
    fflush(stdout);
    second++;
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
    }
    if (hour == 24) {
      hour = 0;
    }
    _sleep(1);
  }
  return 0;
}
`;
  function timer() {
    let hour = 0;
    let minute = 0;
    let second = 0;

    setInterval(() => {
      const formatTimePart = (timePart) =>
        timePart < 10 ? `0${timePart}` : timePart;
      document.getElementById("clock").textContent = `Time: ${formatTimePart(
        hour,
      )}:${formatTimePart(minute)}:${formatTimePart(second)}`;
      second++;
      if (second === 60) {
        minute++;
        second = 0;
        if (minute === 60) {
          hour++;
          minute = 0;
          if (hour === 24) {
            hour = 0;
          }
        }
      }
    }, 1000);
  }
</script>

<Nav />
<main>
  <div class="container">
    <textarea readonly>
      {code}
    </textarea>
    <h1 id="clock">Time:</h1>
    <button on:click={timer}>Start Timer</button>
  </div>
</main>

<style>
  main {
    height: 100vh;
    width: 100%;
    display: grid;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container textarea {
    resize: none;
    height: 75%;
    width: 30%;
    overflow: hidden;
  }
</style>
