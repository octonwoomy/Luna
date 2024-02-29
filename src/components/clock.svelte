<script>
  import Nav from "./nav.svelte";
  import Prism from "prismjs";
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
  <h1 id="clock">Time: 00:00:00</h1>
  <button on:click={timer}>Start Timer</button>
  <div class="container">
    <code>
      {@html Prism.highlight(code, Prism.languages["clike"])}
    </code>
  </div>
</main>

<style>
  main > h1,
  button {
    text-align: center;
  }
  button {
    margin: auto;
    margin-top: -20px;
    width: 160px;
    height: 40px;
    font-size: 18px;
    background-color: rgba(90, 90, 90);
    color: white;
    border-radius: 6px;
  }
  main {
    padding-top: 40px;
    height: 100vh;
    width: 100%;
    display: grid;
    padding-bottom: 30px;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  code {
    height: 450px;
    width: 420px;
    padding-left: 20px;
    padding-bottom: 20px;
    white-space: pre-wrap;
    background-color: rgba(0, 0, 0);
  }
</style>
