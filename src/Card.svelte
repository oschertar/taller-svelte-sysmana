<script>
  export let data;
</script>

<div
  class="card"
  style="background: {data.img}; background-size: cover; background-position: center;"
>
  <div class="overlay" />
  <h2>{data.name}</h2>
  <div class="icons">
    {#each data.socialNetWorks as social}
      <a href={social.href}>{@html social.innerHTML}</a>
    {/each}
  </div>
</div>

<style>
  .card {
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    object-fit: cover;
    transform-origin: center;
    transform: perspective(800px) rotateY(25deg);
    transition: 0.5s all;
    cursor: pointer;
  }
  .overlay {
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: none;
  }

  h2 {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #fff;
    display: none;
    font-size: 18px;
    z-index: 12;
    margin: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    max-width: 100%;
    right: 0;
    line-height: 30px;
    padding: 16px;
    text-transform: uppercase;
  }

  .card:hover {
    transform: perspective(800px) rotateY(0deg);
    background-color: rgba(0, 0, 0, 0.5);
  }

  .card:hover .overlay {
    display: block;
  }

  .card:hover h2 {
    opacity: 1;
    display: block;
  }

  .icons {
    position: absolute;
    color: #fff;
    top: 16px;
    right: 16px;
    display: none;
    gap: 7px;
  }

  .card:hover .icons {
    display: flex;
  }

  .icons a {
    font-size: 22px;
  }

  :global(.icons a i) {
    color: #fff;
  }
</style>
