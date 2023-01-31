<script>
  import Card from "./Card.svelte";

  const cardNodes = [...document.querySelectorAll(".card")];

  const DATA_TEACHERS = [];

  cardNodes.forEach((cardData) => {
    const social = [...cardData.querySelectorAll(".card-social a")];
    const socialNetworks = [];
    social.forEach((networkSoc) => {
      socialNetworks.push(networkSoc);
    });
    DATA_TEACHERS.push({
      name: cardData.querySelector(".title").innerText,
      img: cardData.querySelector(".mdl-card__title").style.backgroundImage,
      socialNetWorks: socialNetworks,
    });
  });
</script>

<div>
  {#each DATA_TEACHERS as data}
    <Card {data} />
  {/each}
</div>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(4, 200px);
    gap: 45px;
  }

  :global(#secondary article) {
    display: none;
  }
</style>
