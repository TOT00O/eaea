<script>
	import { goto } from '$app/navigation';
    let png = "https://i.pinimg.com/736x/43/20/3f/43203f05e45f4182417c7303da2e1964.jpg"

    let png1 = "https://tr.rbxcdn.com/180DAY-c76194bbfb4c7e2ebe4fd315ebb14a4a/768/432/Image/Webp/noFilter"

    let isPopupOpen = false;

    let pop_pos = []
    let limit = 0
    import { base } from '$app/paths';
function togglePopup() {
    limit++
    isPopupOpen = !isPopupOpen; 
    let left = Math.random()*90
    let top = Math.random()*90



    pop_pos.push({left:left,top:top})

    pop_pos=pop_pos

    if (limit == 10){
        goto(base+'/email')
    }
}




</script>


<main>

    

    <p><img src={png1}></p>

    <button on:click={togglePopup}>Click here for free robux!</button>
    {#each pop_pos as {left,top} }
        <div class="popup"  style="left:{left}%; top:{top}%;" >
            <h1>Are you sure you want to proceed?</h1>
        <p><img src={png}></p>
            <button on:click={togglePopup}>Yes</button>
        </div>
     {/each}


     
</main>

<style>
   main {
        width: 100vw;
        height: 100vh;
        background-color: aqua;
        display: grid;
        justify-items: center;
        align-content: center;
    }

    .popup {
        justify-items: center;
        text-align: center;
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        position: fixed;
        width: 200px;
        color: black;

    }
    button {
        background-color: blueviolet;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;

    }
    


</style>