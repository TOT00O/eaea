<script>
let left = 50
let top = 350
let health = 5
let element_pos = [{left:0,top:0},{left:50,top:0}]

const boxSize = 50;
const containerSize = 500;

setInterval(()=>{


  element_pos.forEach(el =>{
    el.top +=1

  if (el.top > 360){
    el.top = 0
    health --
  }
  })
  element_pos = element_pos


},10)


function collison(){

}



function onKeyDown(e) {
		 switch(e.keyCode) {
            

            case 37: // Left
                if (left > 0) left -= boxSize;
                break;
            case 39: // Right
                if (left < containerSize - boxSize) left += boxSize;
                break;
		 }
	}
</script>
<main>
  <p id="bealf">{health}</p>

  {#each element_pos as la}
    <div class="element" style="left: {la.left}px; top: {la.top}px"></div>
  {/each}
	
	
	
    <div style="left: {left}px; top: {top}px" class="chiikawa"></div>
</main>


<style>
    	main {
		width: 500px;
		height: 500px;
		border: solid blue 1px;
		margin: 10px auto;
		position: relative;
        background:url(https://i.pinimg.com/736x/53/c5/9f/53c59f0bd1f9d0cc5856ae5b4a4a2d21.jpg);
        background-size: contain;
	}
	.chiikawa {
		width: 50px;
		height: 50px;
		background:url(https://i.pinimg.com/736x/f7/92/e2/f792e2cfd3b2061b941a323d7399661a.jpg);
        background-size: contain;
		position: absolute;
	}
.element{
  position:absolute;
  top:-300px;
  border: solid 1px;
  width:30px;
  padding:1em;
  background-color:purple;
}
</style>
<svelte:window on:keydown|preventDefault={onKeyDown} />