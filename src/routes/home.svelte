<script>
  import Nav from "../components/nav.svelte";
  import Videos from "../components/videos.svelte";
  let newBlog = "#/sitecreation";
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
    <div class="blog">
      <h2>Latest Blog Post</h2>
      <a href={newBlog}>
        <img src="../videos/svelte.png" alt="new blog post" />
      </a>
    </div>
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
    height: 550px;
    margin: 35px auto;
    padding: 10px;
    border-radius: 20px;
  }
  main > h1 {
    font-size: 50px;
  }
  .blog img {
    height: 300px;
    width: 500px;
  }
  .blog {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  h2 {
    font-size: 45px;
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
    font-size: 20px;
    cursor: pointer;
    color: white;
    background-color: black;
    border: none;
    border-radius: 5px;
  }
</style>
