<script>
  import Nav from "../components/nav.svelte";
</script>

<Nav />
<main>
  <div class="container">
    <figure>
      <a href="#/sitecreation"
        ><img src="../videos/svelte.png" alt="creation of site" />
      </a>
      <figcaption>Explore the process behind this sites creation!</figcaption>
    </figure>
    <figure>
      <a href="#/thinkpad">
        <img src="../videos/tpad.png" alt="thinkpad t420 review" />
      </a>
      <figcaption>Falling in love with an 13 year laptop</figcaption>
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
  }
  figure {
    max-height: 350px;
    width: 500px;
    background-color: #2f2f2f;
    text-align: center;
    border: 10px solid #2f2f2f;
    font-size: 20px;
  }
</style>
