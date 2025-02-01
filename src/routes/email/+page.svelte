<script> 

    let trust ="https://logowik.com/content/uploads/images/trustpilot-stars9095.jpg"

    let popisopen = false;

    function togglePopup(){
        popisopen = !popisopen; 
    }
    let stringLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@.";
    let email = "";
    let letters = [];
    randomizeLetters();

    function randomizeLetters() {
        letters = [];
        for (let letter of stringLetters) {
            let top = Math.random() * 80;
            let left = Math.random() * 80;
            letters.push({ letter: letter, top: top, left: left });
        }
    }

    function addLetter(index) {
        let letter = letters[index];
        email += letter.letter;
        letter.top = Math.random() * 90;
        letter.left = Math.random() * 90;
    }

    setInterval(randomizeLetters, 2000);
   



</script>

<main>

    
    
    <p class="pic"><img src={trust}></p>
<section>
            {#each letters as {letter, top, left}, i}
                <button class="lalal" on:click={() => addLetter(i)} style="top:{top}%; left:{left}%;">{letter}</button>
            {/each}
        </section>
        <p>Email: {email}</p>
    <form on:submit|preventDefault={togglePopup}>
      
        <input type="submit" value="Send" class="blbl">
    </form>
  
{#if popisopen}
     <div class="popup" >
        <h1>We have now sent you a mail containing your robux, just download the attached file.</h1>
    <p></p>
        <button on:click={togglePopup}>Close</button>
    </div>
    {/if}

   </main>

<style>

main{
    background-color: pink;
    width: 100vw;
    height: 100vh;
    justify-items: center;
    align-content: center;
}
.popup{
    justify-items: center;
        text-align: center;
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        position: fixed;
        width: 200px;
        color: black;
        top:50vh;
        left:43vw;


    }
.pic{

    width: 100px;   
    height: 80px;
}
section {
    position: relative;
    background-color: pink;
    width: 80vw;
    height: 50vh;
    margin: auto;
}

.lalal {
    position: absolute;
    background-color: rgb(0, 0, 0);
    padding: 1em;
    border: none;
    cursor: pointer;
}

button:active {
    transform: scale(1.4);
    transition: all 40ms;
}
</style>