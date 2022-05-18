<script>
  import Router, { location, link } from "svelte-spa-router";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Home from "./components/Home.svelte";
  import Projects from "./components/Projects.svelte";
  import About from "./components/About.svelte";
  import NotFound from "./components/NotFound.svelte";
  import Contact from "./components/Contact.svelte";

  const Background = "/ressources/bg.jpg";

  const background = {
    backgroundImage: `/ressources/bg.jpg`,
    backgroundSize: "cover",
  };
</script>

<div class="bg-image img-fluid w-100 img">
  <div
    class="cover-container d-flex w-100 min-vh-100 px-2 py-4 mx-auto flex-column justify-content-center"
  >
    <Header />
    <Router
      routes={{
        "/": Home,
        "/about": About,
        "/projects": Projects,
        "/contact": Contact,
        "*": NotFound,
      }}
    />
    <Footer />
  </div>
</div>

<style>
  :global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #fff;
    font-family: "Poppins", sans-serif;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  :global(*::-webkit-scrollbar) {
    display: none;
  }
  .img {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("https://images.unsplash.com/photo-1614292264554-7dca1d6466d6?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974");
    background-repeat: repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }
  .cover-container {
    max-width: 80rem;
  }
</style>
