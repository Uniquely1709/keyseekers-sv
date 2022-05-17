<script>
  import Router, { location, link } from "svelte-spa-router";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Home from "./components/Home.svelte";
  import Projects from "./components/Projects.svelte";
  import About from "./components/About.svelte";
  import NotFound from "./components/NotFound.svelte";

  const Background = "/ressources/bg.jpg";

  const background = {
    backgroundImage: `/ressources/bg.jpg`,
    backgroundSize: "cover",
  };
</script>

<div class="bg-image img-fluid w-100 h-100 img">
  <div class="cover-container d-flex w-100 h-100 px-2 py-4 mx-auto flex-column">
    <Header />
    <main>
      <Router
        routes={{
          "/": Home,
          "/about": About,
          "/projects": Projects,
          "*": NotFound,
        }}
      />
    </main>
    <p>The current page is: {$location}</p>
    <Footer />
  </div>
</div>

<style>
  :global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #fff;
  }
  .img {
    background-image: url("/ressources/bg.jpg");
    background-size: cover;
  }
  .cover-container {
    max-width: 68em;
  }
</style>
