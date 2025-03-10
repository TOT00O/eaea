

<script>
    let png = "https://i.pinimg.com/736x/e8/03/46/e8034699b30fc20ac04dddbaa01a16ec.jpg"
</script>

<main>
    <div class="photo">

    </div>
    <slot>
        
    </slot>

</main>

<div class= "backdrop">

</div>

<style>

    .photo{
        border-radius: 5px;
    }
    main{
        height: 90vh;
        width: 80vw;
        background-color: rgba(255, 255, 255, 0.764);
        border-radius: 22px;
        margin: 5vh auto;
        border: black solid 5px;
        display: flexbox;
        justify-items: center;
        align-items: center;
        color: black;
        
    }
    .backdrop{
        background-image: url(https://i.pinimg.com/736x/c4/b0/e9/c4b0e90dff4dc55a1f9b4370343bdf7d.jpg) ;
        background-size: cover;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        filter: blur(1px);
    }
</style>