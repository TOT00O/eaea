
<script>
    import ElizaBot from 'elizabot';
    const eliza = new ElizaBot();
    let chat = [{ user: 'Eliza', message: eliza.getInitial() }];
    import { enhance } from "$app/forms";
	import { text } from '@sveltejs/kit';
    let isWriting = false
    let botName = "Eliza"
    let userName = "user"
    
    async function write(message) {



if (isWriting) {return}
chat.push({user : "user", message :message})

chat = chat
//Hämta HTML-elementet med id:et visible
var element = document.getElementById("visible");
//Ändrar elementets CSS-egenskap display till default
element.style.display = "flex"; // Visa elementet

isWriting=true

await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
isWriting=false

element.style.display = "none";

let response = eliza.transform(message)
chat.push({user : botName, message :response})

chat=chat


            
}
  
                
</script>


<main>
    
<section>
    
    {#each chat as message}
    <article class={message.user}>
        <p>
            {message.message}
            
        </p>
    </article>
    {/each}
    <article id="visible">
        <span class="circle"></span>
        <span class="circle" ></span>
        <span class="circle"></span>
    </article>
</section>
<form>
    
    
    
    
<form  method="post"
use:enhance={({ formElement, formData, action, cancel }) => {
  cancel(); //don't post anything to server
  const text = formData.get("text"); // what does "text" refer to?
  write(text);
    formElement.reset()
  // TODO: reset the form using _____.reset() - what do we want to reset? the element or the data?
  }}>
  
  <input type="text" name="text" class="TextBox" minlength="1" placeholder="Type here" >
    <button type="submit">Send</button>
            
</form>
</main>

<style>
    main{
        height: 70vh;
        width: 60vw;
        padding:10px;
        background-color: hotpink;
        color: black;
    }
    section{
        height: 90%;
        overflow-y:scroll;
    }
    button{
        border: black solid 2px;
        
    }

    .circle{
        animation: typing 1s linear;
        height: 10px; width:10px; border-radius:50%; background-color:aqua;
        animation-iteration-count: infinite;
    }
    
            /* CSS-stilar för .circle med index 1 (den första cirkeln) */
            .circle:nth-child(1) {
                animation-delay: 0ms; /* Ingen fördröjning */
            }
            /* CSS-stilar för .circle med index 2 (den andra cirkeln) */
            .circle:nth-child(2) {
                animation-delay: 333ms; /* Starta animationen efter 333 millisekunder (ms) */
            }
            /* CSS-stilar för .circle med index 3 (den tredje cirkeln) */
            .circle:nth-child(3) {
                animation-delay: 666ms; /* Starta animationen efter 666 ms */
            }
            
#visible{
    width: 100px;
    height: 60px;
    justify-content: center;
    align-items: center;
    display: none;
}

@keyframes typing{
    0% { transform: scale(1);}
    25% { transform: scale(1); }
    50% { transform: scale(1.4); }
    100% {transform: scale(1); }
}
               
</style>