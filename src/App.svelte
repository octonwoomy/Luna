<script>
  import Router from 'svelte-spa-router'
  import Home from './routes/home.svelte'
  import Portfolio from './routes/portfolio.svelte';
  import Clock from "./components/clock.svelte";
  import Chat from "./components/chatbot.svelte";
  import Compressor from "./components/compressor.svelte";
  import Rest from "./components/rest.svelte";

  const routes = {
    '/': Home,
    '/portfolio': Portfolio,
    '/clock': Clock,
    '/chatbot': Chat,
    '/compressor': Compressor,
    '/restapi': Rest,
  }  
</script>
<svelte:head>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism.min.css" rel="stylesheet" />
</svelte:head>

<body>
    <Router {routes}/>
</body>
