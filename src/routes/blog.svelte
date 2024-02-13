<script>
  import Nav from "../components/nav.svelte";
</script>

<Nav />
<main>
  <div class="container">
    <figure>
      <a href="#/sitecreation"
        ><img src="../videos/aou.png" alt="creation of site" />
      </a>
      <figcaption>Explore the process behind this sites creation!</figcaption>
    </figure>
    <figure>
      <a href="#/">
        <img src="" alt="" />
      </a>
      <figcaption></figcaption>
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
    width: 550px;
    background-color: #2f2f2f;
    text-align: center;
    border: 10px solid #2f2f2f;
    font-size: 20px;
  }
</style>
