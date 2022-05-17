<script>
  import Spacer from "./helper/Spacer.svelte";
  import { location, link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
</script>

<header class="mb-auto">
  <div class="d-flex justify-content-between align-items-center">
    <div class="d-flex">
      <Spacer />
      <h2 class="float-md-start mb-0 ">The Key Seekers</h2>
    </div>
    <div class="d-none d-sm-block d-flex">
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
    <div class="d-block d-sm-none">
      <div class="bs justify-content-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
          ><path
            d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
          /></svg
        >
      </div>
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
  :global(path) {
    fill: white;
  }
  :global(.bs) {
    width: 1.5rem;
    height: 1.5rem;
  }
</style>
