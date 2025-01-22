
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


isWriting=true

await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
isWriting=false



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
</style>