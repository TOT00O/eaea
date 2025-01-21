
<script>
    import ElizaBot from 'elizabot';
    const eliza = new ElizaBot();
    let chat = [{ user: 'Eliza', message: eliza.getInitial() }];
    import { enhance } from "$app/forms";
	import { text } from '@sveltejs/kit';

       
    
    async function write(message) {
    //TODO: Add the new message to the chat
    text = [...text, {sender:"user"},message]

    // random delay for Eliza's response time
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));

    //TODO: Add Eliza's response to the chat

  }
                
</script>


<main>
<section>
    
    <article >
        <p>
          WHAODHOWHP
        </p>
    </article>
</section>
<form>
    
    <input type="text" id="text" placeholder="Type here" >
    <button type="submit">Send</button>
    
    
<form  method="post"
use:enhance={({ formElement, formData, action, cancel }) => {
  cancel(); //don't post anything to server
  const text = formData.get("text"); // what does "text" refer to?
  write(text);

  // TODO: reset the form using _____.reset() - what do we want to reset? the element or the data?

  }}>
            
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
</style>