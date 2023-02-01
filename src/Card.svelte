<script>
  export let data;
  console.log(data);
</script>

<div class="custom-card" on:click={() => (window.location.href = data.link)}>
  <div class="image">
    <img src={data.img} />
  </div>
  <div class="details">
    <span />
    <div class="center">
      <h1>{data.title}</h1>
      <p>
        {data.price}
      </p>
    </div>
  </div>
</div>

<style>
  .custom-card {
    position: relative;
    width: 581px;
    height: 581px;
    background: #000;
  }
  .custom-card .image {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .custom-card .image img {
    width: 100%;
    transition: 0.3s;
  }
  .custom-card:hover .image img {
    opacity: 0.5;
    transform: translateX(30%); /*100%*/
  }
  .custom-card .details {
    position: absolute;
    top: 0;
    left: 0;
    width: 70%; /*100%*/
    height: 100%;
    background: #dadada;
    transition: 0.3s;
    opacity: 0;
  }
  .custom-card:hover .details {
    opacity: 1;
  }
  .custom-card .details .center {
    padding: 20px;
    text-align: center;
    background: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 0 10px 10px 0;
    padding: 24px;
  }
  .custom-card .details .center h1 {
    margin: 0;
    padding: 0;
    color: #333;
    line-height: 20px;
    font-size: 28px;
    text-transform: uppercase;
    font-family: "Nike Futura", "Helvetica Neue", Helvetica, Arial, sans-s;
  }

  .custom-card .details .center p {
    margin: 10px 0;
    padding: 0;
    color: #262626;
    font-size: 22px;
    font-weight: bold;
    font-family: "Nike Futura", "Helvetica Neue", Helvetica, Arial, sans-s;
  }
</style>
