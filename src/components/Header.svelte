<script>
  import Spacer from "./helper/Spacer.svelte";
  import { location, link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
</script>

<header class="mb-auto">
  <div class="d-flex justify-content-between align-items-center">
    <div class="d-flex">
      <Spacer />
      <h2 class="float-md-start mb-0">The Key Seekers</h2>
    </div>
    <div class="d-none d-sm-block">
      <nav class="nav nav-head justify-conent-center float-md-end ">
        <a use:link={{ href: "/" }} use:active class="nav-link">Home</a>
        <a use:link={{ href: "/projects" }} use:active class="nav-link"
          >Projekte</a
        >
        <a use:link={{ href: "/about" }} use:active class="nav-link">Über Uns</a
        >
        <Spacer />
      </nav>
    </div>
  </div>
</header>

<style>
  .nav-head .nav-link {
    padding: 0.5rem 0;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.5);
    background-color: transparent;
    border-bottom: 0.25rem solid transparent;
    transition: transform 0.3s;
    text-decoration: none;
  }

  .nav-head .nav-link:focus {
    border-bottom-color: rgba(255, 255, 255, 0.25);
    color: rgba(255, 255, 255, 0.5);
  }
  .nav-head .nav-link:hover {
    border-bottom-color: rgba(255, 255, 255, 0.25);
    color: rgba(255, 255, 255, 0.5);
    transform: translateY(5px);
  }
  .nav-head .nav-link + .nav-link {
    margin-left: 1rem;
  }

  :global(a.active) {
    color: #fff !important;
    border-bottom-color: #fff !important;
  }
</style>
