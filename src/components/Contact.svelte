<script>
  import Email from "./contacts/Email.svelte";
  import Insta from "./contacts/Insta.svelte";
</script>

<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 d-flex flex-warp align-items-center ">
      <img
        class="rounded-lg w-100 round "
        src="./ressources/us.jpg"
        alt="of Me"
      />
    </div>
    <div class="col-12 col-md-6 py-5 text-center">
      <h3>Hi!</h3>
      <div>Wenn du willst kannst du uns über folgende Kanäle kontaktieren.</div>
      <div class="mb-4">Wir freuen uns über jede Nachricht 😊</div>

      <Email />
      <Insta />
      <div class="mb-4" />
      <form
        action="mailto:mail@example.com"
        method="get"
        target="_newtab"
        enctype="application/x-url-form-encoded"
        class="d-flex flex-grow flex-column justify-content-center align-items-center"
      >
        <div class="form-group text-start">
          <label for="inputSubject">Betreff</label>
          <input
            type="text"
            class="form-control w"
            id="inputSubject"
            placeholder="Betreff"
            name="subject"
          />
        </div>
        <div class="form-group text-start mt-2">
          <label for="inputMessage">Nachricht</label>
          <textarea
            class="form-control w"
            rows="3"
            id="inputMessage"
            placeholder="Deine Nachricht an uns..."
            name="body"
          />
        </div>
        <button type="submit" name="submit" class="btn btn-primary mt-4"
          >Absenden</button
        >
      </form>
    </div>
  </div>
</div>

<style>
  .w {
    min-width: 300px;
  }
  .round {
    border-radius: 2rem;
  }
  img {
    transition-property: transform;
    transition-duration: 0.5s;
    box-shadow: -1px 3px 5px rgb(0, 0, 0);
  }
  img:hover {
    transform: scale(1.05);
    transition-property: transform;
    transition-duration: 0.5s;
  }
</style>
