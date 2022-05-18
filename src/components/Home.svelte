<script>
  import { fade } from "svelte/transition";

  const carouselPhotos = [
    "/ressources/folder/1ae0907b9daf1a3d95d73f20e12f7538ef1c-image-preview-1920.jpg",
    "/ressources/folder/9de2bce2db23a44c081a3ebdc84501f52b9d-image-preview-1920.jpg",
    "/ressources/folder/dc172895b89fc3ae8ed0c379b2aa69b66af2-image-preview-1920.jpg",
    "/ressources/folder/f520f8b7122b58e2da5e297083902e06eb2d-image-preview-1920.jpg",
  ];

  let index = 0;

  const next = () => {
    index = (index + 1) % carouselPhotos.length;
  };
</script>

<div>
  <div class="home-wrapper py-5">
    <h1>Hallo und herzlich willkommen auf unserer Website!</h1>
    {#each [carouselPhotos[index]] as src (index)}
      <img transition:fade {src} alt="" />
    {/each}
    <button on:click={next}>Next!</button>
    <p>
      Wir sind TheKeySeekers, eine kleine Band die einfach Spaß am gemeinsamen
      Musik machen hat.
    </p>
    <p>Welches Genre? Von Rock bis Musical ist alles dabei.</p>
    <p>
      Ihr habt ein Event auf dem ihr noch nach musikalischer Begleitung sucht?
      Ihr habt Bock auf junge Leute die gute Laune machen, euch zum weinen
      bringen oder tanzen lassen?
    </p>
    <p>Kontaktiert uns</p>
  </div>
</div>

<style>
  /* img,
    button {
      position: absolute;
    } */
</style>
