<script>

    let items = [];
    let item = "";

    function itemSubmit(){
        if(item == ""){
            return;
        }
        let new_item = {namn: item, bought: false};
        items.push(new_item)
        item = "";
        items = items
    }

    function itembought(item){
        item.bought = true
        items = items
    }
    function item_not_bought(){
        item.bought = false
        items = items
    }
    function item_delete(index){
        items.splice(index,1)
        items = items
    }
</script>


<div class = bg>
<main class = "container">
 <h1>Shoppinglist</h1>
 <div class = "categories_container"> 
    <section>
        <h2>Wishlist</h2>
        <ul>
            {#each items as item, index}
            {#if item.bought == false}
            <li>
                <form on:submit|preventDefault={()=>itembought(item)}>
                  {item.namn} <input type = "submit" value = "köpt" class="button">
                </form>
            </li>
            {/if}
            {/each}

        </ul>
    </section>
    <section>
        <h2>Brought items</h2>
        <ul>
            {#each items as item, index}
            {#if item.bought == true}
            <li>
                <form on:submit|preventDefault={() => item_not_bought(item)}>
                  {item.namn} <button type="button" on:click={()=>item_delete(index)}>Remove</button>
                </form>
            </li>
            {/if}
            {/each}
        </ul>
    </section>
</div>
<form on:submit|preventDefault={itemSubmit}>
   
    <input type="text" id= "item" bind:value={item} placeholder="add items here" style="color:black;">
    <input type="submit" value="Lägg till" class="button">
</form>
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
    background-color: rgb(80, 80, 80);
    border: solid rgb(81, 81, 81) 5px;
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
button{
    color: white;
    background-color: black;
}
.button{
    color: white;
    background-color: black;
}
li{
    background-color: rgba(0, 0, 0, 0.1);
    
}
</style>