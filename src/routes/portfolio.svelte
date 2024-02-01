<script>
  import Nav from "../components/nav.svelte";
</script>

<Nav />
<main>
  <div class="btns">
  <a href="#/clock"><button><h3>Stop Watch in C</h3>
      <img src="../videos/image.png" alt="stopwatch">
      <p>timer that starts at 0 and gradually increases</p>
    </button></a>
  <a href="#/restapi"><button><h3>Simple Rest API in GO</h3>
      <img src="../videos/aou.png" alt="api">
      <p>returns JSON data when hosted on a localhost</p>
    </button></a>
  <div class="bot">
  <a href="#/chatbot"><button><h3>JSON ChatBot in Python</h3>
      <img src="../videos/chat.png" alt="chatbot">
        <p>interacts with a json database to answer questions</p>
    </button></a>
 </div> 
  <a href="#/compressor"><button><h3>Video Compressor in Python</h3>
      <p>takes a file path as an input and returns it with a smaller file size</p>
    </button></a>
  </div>
</main>

<style>
  main {
    font-family: "Poppins";
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .btns {
    display: flex;
    gap: 25px;
  }
  .btns button{
    height: 480px;
  }
  button{
    border: none;
    font-size: 30px;
    background-color: rgba(90,90,90, 0.5);
    backdrop-filter: blur(10px);
    max-width: 400px;
    max-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  a{
    text-decoration: none;
  }
  button h3{
    margin-top: 20px;
    text-decoration: none;
    text-align: center;
    font-family: "Poppins";
  }
  p, h3{
    color: white;
    font-family: "Poppins";
  }
</style>

