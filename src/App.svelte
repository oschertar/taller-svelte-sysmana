<script>
  import Discount from "./Discount.svelte";
  import Label from "./Label.svelte";

  const targetDiscount = document.querySelector("#priceBlock");
  const targetLabel = document.querySelector(".item .fancybox");

  new Discount({
    target: targetDiscount,
    anchor: targetDiscount.querySelector(":scope #precio-main"),
  });

  new Label({
    target: targetLabel,
  });

  console.log("this works!");
</script>

<div>This works!</div>

<style>
</style>
