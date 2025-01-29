<script>
    let isPopupOpen = false;

    let pop_pos = []

function togglePopup() {
    isPopupOpen = !isPopupOpen; 
    let left = Math.random()*90
    let top = Math.random()*90


    pop_pos.push({left:left,top:top})

    pop_pos=pop_pos


}

    let png = "https://i.pinimg.com/736x/43/20/3f/43203f05e45f4182417c7303da2e1964.jpg"

    let png1 = "https://tr.rbxcdn.com/180DAY-c76194bbfb4c7e2ebe4fd315ebb14a4a/768/432/Image/Webp/noFilter"

</script>


<main>
    <p><img src={png1N}></p>
    <button on:click={togglePopup}>Click here for free robux</button>


    {#each pop_pos as {left,top} }
        <div class="popup"  style="left:{left}%; top:{top}%;" >
            <h1>This ain't ever gone close</h1>
        <p><img src={png}></p>
            <button on:click={togglePopup}>Close</button>
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
    .test1 {
        background-color: black;
        padding: 5px;
        position: fixed;
       


        align-items: center;
        justify-content: center;
        display: flex;
        transition: opacity 0.3s ease, z-index 0.3s ease;
    }
    .test1.open {
        opacity: 1;
        z-index: 999;
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