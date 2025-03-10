
<script>
    let list=[0,1,2,3,4,5,6]
    
</script>
<input type="number" max="7" min="0" style="width: 50px; height:30px; color:black; ">
<main>

{#each list as a}
    <div class="lala" >
        <li>{a}</li>
    </div>
{/each}

</main>
<style>
main{
    height: 100vh;
    width: 100vw;
    align-content: center;
    justify-content: center;
    grid-template-columns: repeat(3,300px);
    grid-template-rows: 100px 200px 100px;
    grid-gap: 10px;
    display: grid;
    
}

.lala{
    background-color: red;
}
.lala:active{
    border: dotted 5px black;
    
}
.lala:nth-child(1){
    grid-column: 1 / 4;
}
</style>