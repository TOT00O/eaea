
<script>
    let photo1 = "https://i.pinimg.com/736x/fd/00/33/fd003363a54d6080ad97c762f3b2a705.jpg"
    let photo2 ="https://i.pinimg.com/736x/5f/b8/7d/5fb87dfc662aa448e749d35bfa98a8a2.jpg"
    let photo3 ="https://i.pinimg.com/736x/0b/91/60/0b91607c3f705d7bfdc10f73f60fa9b9.jpg"
</script>



<section>

<main>

    <h1>cats moew!</h1>

<div class ="wa">
    <div class= "photos">
        <div class ="image-wrapper">
        <img src={photo1} alt="flex">
    </div>
    <div class ="image-wrapper">
        <img src={photo2} alt="flex">
    </div>
    <div class ="image-wrapper">
        <img src={photo3} alt="flex">
    </div>
</div>
</div>
</main>
</section>
<style>
    section{
    background:url(https://i.pinimg.com/564x/e3/fa/55/e3fa5585c9df83aa38b926c9a01d8866.jpg) center center no-repeat fixed;
    background-size: cover;
    width: 100vw;
height: 100vh;
margin: 0em;
    }
    h1{
    text-align: center;
    font-size: 50px;
    margin: 20px;
    color: white;
    padding-top: 20px;
}
    main{
        width: 85vw;
        height: 100vh;
        margin: auto;
        background-color: rgb(0 0 0/0.4);
        border: white dotted 5px;
        border-radius: 22px;
  
    }
    .photos{
        display: flex;
        max-width: 80vw;
        max-height: 80vh;
        overflow:hidden;
        margin: auto;
        margin-top: 150px;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        
    }
    .image-wrapper img{
        width: 95%;
        height: 95%;
        border-radius: 5px;
        box-shadow: 4px 8px 0px rgba(0,0,0,0.2);
    }
    .image-wrapper{
        flex-grow:1;
        height: 350px;
        flex-basis: 300px;

    }
    .image-wrapper:hover { flex-grow: 2;}
    .image-wrapper:active { transform: scale(0.9); }
    

</style>