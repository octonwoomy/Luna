<script>
  import Nav from "../components/nav.svelte";
  import Videos from "../components/videos.svelte";
</script>

<main>
  <Nav />
  <br />
  <h1>Luna Ramirez</h1>
  <div class="main">
    <a href="https://github.com/octonwoomy"
      ><button class="btns">GITHUB</button></a
    >
    <a href="https://www.youtube.com/channel/UCwQt_BYHz-RYfm69z0tIgpg"
      ><button class="btns">YOUTUBE</button></a
    >
    <a href="https://discord.gg/6BqTwN2y9K">
      <button class="btns">DISCORD</button></a
    >
    <h3>Currently Working On:</h3>
    <img src="../videos/vim.png" alt="vim logo" />
  </div>
  <div class="video"><Videos /></div>
</main>

<style>
  main {
    text-align: center;
  }
  .main {
    display: flex;
    justify-content: center;
    background-color: rgba(90, 90, 90, 0.5);
    backdrop-filter: blur(10px);
    max-width: 1000px;
    height: 700px;
    margin: 35px auto;
    padding: 10px;
    border-radius: 20px;
  }
  h1 {
    font-size: 50px;
  }
  .video {
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 50px;
  }
  a {
    text-decoration: none;
    overflow: hidden;
    height: 55px;
  }
  .btns {
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    color: white;
    background-color: black;
    border: none;
    border-radius: 5px;
  }
  img {
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: 600px) {
    .main {
      width: 100%;
      margin: 5px auto;
    }
  }
</style>
