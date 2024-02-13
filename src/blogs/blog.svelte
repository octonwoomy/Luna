<script>
  import Nav from "../components/nav.svelte";
</script>

<Nav />
<main>
  <figure>
    <a href="#/sitecreation"
      ><img src="../videos/aou.png" alt="creation of site" />
    </a>
    <figcaption>Explore the process behind this sites creation!</figcaption>
  </figure>
</main>

<style>
  main {
    height: 100vh;
    width: 100%;
  }
  figure {
    background-color: white;
    width: 510px;
    text-align: center;
    border: 10px solid white;
  }
  figure img {
    object-fit: cover;
  }
</style>
