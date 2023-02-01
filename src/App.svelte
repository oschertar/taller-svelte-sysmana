<script>
  export let dataProduct;
  import Card from "./Card.svelte";

  console.log("this works!");
</script>

<Card data={dataProduct} />

<style>
  :global(
      #ciclp-app
        > div
        > div:nth-child(5)
        .grid-row
        .grid-col
        .slider
        li.slide
        > *:not(.custom-card)
    ) {
    display: none;
  }
</style>
