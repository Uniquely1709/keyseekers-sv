<script>
  // const request = require("request");
  import { onMount } from "svelte";
  const RSS_URL = "https://ig-assistant.d3nda.de/u/thekeyseekers01/rss.xml";

  const domParser = new window.DOMParser();

  /** @type {{ postUrl: string, captionText: string, imageUrl: string, imageSize: {width: number, height: number }, titleText: string }[]} */
  let itemData = [];

  const parseXMLData = (items) =>
    [...items].map((item) => {
      let captionText = item.querySelector("description").textContent;
      let postUrl = new URL(item.querySelector("link").textContent);
      postUrl = `https://instagram.com/${postUrl.pathname}`;
      const imageTag = captionText.match(/<img.*\/>/).at(0);
      captionText = captionText
        .replace(imageTag, "")
        .replace(/<br\s?\/>/gm, "\n");

      const imageElem = domParser
        .parseFromString(imageTag, "text/html")
        .querySelector("img");
      const imageUrl = imageElem.src;
      const imageSize = { width: imageElem.width, height: imageElem.height };
      const titleText = item.querySelector("title").textContent;

      return { postUrl, captionText, imageUrl, imageSize, titleText };
    });

  onMount(async () => {
    const xmlString = await fetch(RSS_URL).then((response) => response.text());
    const xmlData = domParser.parseFromString(xmlString, "text/xml");
    const items = xmlData.querySelectorAll("item");
    itemData = parseXMLData(items);
  });
</script>

<div class="mt-4 main-grid w-100 py-5">
  {#each itemData as item}
    <a href={item.postUrl} target="blank" rel="noopener">
      <figure class="post m-0">
        <img class="post-image" src={item.imageUrl} alt={item.titleText} />
        <figcaption><span>{item.captionText}</span></figcaption>
      </figure>
    </a>
  {/each}
</div>

<style>
  .main-grid {
    --grid-min-size: 300px;
    --grid-max-size: 400px;
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(var(--grid-min-size), var(--grid-max-size))
    );
    grid-auto-flow: row dense;
    gap: 1rem;
    justify-content: center;
  }

  .post {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    place-items: end;
  }

  .post-image {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: center top;
    grid-area: 1 / 1;
    transition-property: transform;
    transition-duration: 0.25s;
  }

  .post-image:hover {
    transition-property: transform;
    transition-duration: 0.25s;
    transform: scale(1.05);
  }

  .post-image ~ figcaption {
    padding: 1.25rem 0.5rem 0.5rem;
    grid-area: 1 / 1;
    background-image: linear-gradient(0deg, black 0%, transparent 100%);
  }

  .post-image ~ figcaption span {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  a {
    text-decoration: none;
  }
</style>
