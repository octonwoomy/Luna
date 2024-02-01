<script>
  import Nav from "../components/nav.svelte";
</script>

<Nav />
<main>
  <div class="btns">
    <a href="#/clock">clock</a>
  </div>
</main>

<style>
  main {
    background-image: url("videos/background.jpg");
    height: 100vh;
  }
  .btns {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
</style>
