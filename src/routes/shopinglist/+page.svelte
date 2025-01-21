<script>

let items = [{name:"milk" },{name:"butter"},{name:"kokosnöt"},{name:"tomato"},{name:"breadstick"},{name:"poop"}]
</script>



<div class="bg">
<main class=container>
    <h1>ShoppingList</h1>
    <div class="categories_container">
        <section>
            <h2>Items to buy</h2>
            <ol>
                {#each items as item}
                <li>
                    {item.name}
                </li>
            {/each}
            <li><input type="text" id="item" ></li>
            </ol>

        </section>
        <section>
            <h2>Items brought</h2>
            <ul>

            </ul>
        </section>
    </div>
</main>
</div>

<style>


ol,ul{
    list-style-position: inside;
    list-style-type:circle;
}
li{
    background-color: white;
    margin-top: 1em;;
    color: black;
}

    .bg{
    background-image: url(https://i.pinimg.com/736x/c4/b0/e9/c4b0e90dff4dc55a1f9b4370343bdf7d.jpg) ;
    background-size: cover;
    width: 100vw;
    height: 100%;
    padding: 5%;
    justify-items: center;
}

    
.container{
    background-color: rgb(0, 0, 0);
    border: solid black 5px;
    width: 60vw;
    height: 70vh;
    border-radius: 20px;
    justify-items: center;
    display: grid;
    grid-template-rows: 1fr 9fr 1fr;

}
h1{
    text-decoration: underline;
    font-size: larger;
    color: rgb(255, 255, 255);
    text-align: center;
    align-self: center;
}
.categories_container{
    height: 100%;
    width: 100%;
    background-color: rgb(227, 105, 146);
    justify-items: center;
    grid-template-columns: repeat(2,1fr);
    grid-gap:10px;
    display: grid;
    border-radius: 12px;
}

section{
    width: 100%;
    height: 100%;
}


.categories_container section:nth-child(odd){  /* vilket barn vill vi styla? */
    background-color: rgba(0, 0, 0, 0.1) /* svart bakgrund med 10% opacitet */
  }
 
  .categories_container section:nth-child(even){  /* vilket barn vill vi styla? */
    background-color: rgba(0, 0, 0, 0.3) /* svart bakgrund med 30% opacitet */
  }

h2{
    text-align: center;
    text-decoration: underline;
    padding:10px;
    border-radius: 12px;
}
</style>