
<script>
    /** @type {import('./$types').PageData} */
    export let data;
  </script>
  
  {#await data}
    <p>.. waiting</p>
  {:then pokemon} 
  <article>
    {#each Object.entries(pokemon.response.sprites) as sprites}
      {#if typeof sprites[1] == "string"}
      <img src={sprites[1]} />
      {/if}
    {/each}
  </article>
  <h1>{pokemon.response.name}</h1>
  <section>
    <p><strong>Type:</strong> {pokemon.response.types.map(t => t.type.name).join(', ')}</p>
    <p><strong>Base Experience:</strong> {pokemon.response.base_experience}</p>
    <p><strong>Abilities:</strong> {pokemon.response.abilities.map(a => a.ability.name).join(', ')}</p>
  
  </section>
  
  <style>
    
  </style>


  {/await}  
  
  
    