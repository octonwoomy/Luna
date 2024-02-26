<script>
  import Nav from "../components/nav.svelte";
</script>

<Nav />
<main>
  <div class="container">
    <figure>
      <a href="#/clock"><img src="../videos/image.png" alt="timer" /></a>
      <figcaption>Simple Timer in C</figcaption>
    </figure>

    <figure>
      <a href="#/chatbot"><img src="../videos/chat.png" alt="timer" /></a>
      <figcaption>JSON chatbot made in python</figcaption>
    </figure>

    <figure>
      <a href="#/restapi"><img src="../videos/aou.png" alt="timer" /></a>
      <figcaption>API demo made with gin and golang</figcaption>
    </figure>

    <figure>
      <a href="#/chatbot"><img src="../videos/image.png" alt="timer" /></a>
      <figcaption>Video compressor made with python</figcaption>
    </figure>
  </div>
</main>

<style>
  main {
    position: relative;
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    justify-content: center;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
  }
  figure {
    max-height: 300px;
    width: 450px;
    background-color: #2f2f2f;
    text-align: center;
    border: 10px solid #2f2f2f;
    font-size: 20px;
  }
  figure img {
    width: 450px;
    height: 250px;
  }
</style>
