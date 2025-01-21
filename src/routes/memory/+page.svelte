<script>
    let img1 = "https://i.pinimg.com/736x/f6/89/5d/f6895dca3a67a4bafa4cda86b03f674e.jpg"
    let img2 = "https://i.pinimg.com/736x/af/6e/2c/af6e2c7c1ad6043c8969fcfa15281cfa.jpg"
    let img3 = "https://i.pinimg.com/736x/f3/6e/87/f36e870294c61ebb84e02309292a359e.jpg"
    let img4 = "https://i.pinimg.com/736x/ca/e0/05/cae005cf64fbfb7124d8becbb186d5f4.jpg"
    let img5 = "https://i.pinimg.com/736x/57/36/78/57367845ff3b4e055905edfc3a1741d6.jpg"
    let img6 = "https://i.pinimg.com/736x/14/42/e5/1442e5f5cd7b70aaea17651b2c252530.jpg"
    let images = [img1, img2, img3,img4,img5, img6]
    let cards = [] 
    for (let i = 0; i < 12; i++){
        cards.push({flipped:false,matched:false,image:images[i%6]})
    }

    let blueTurn = false

    let flipcount = 0

    let redpoint = 0
    
    let bluepoint = 0
  
    cards.sort(()=> Math.random()- 0.5)

    function flipcard(card){
      card.flipped= !card.flipped;
      cards = [...cards];
      flipcount++
      if (flipcount == 2){
        let flippedCards = cards.filter((card)=>card.flipped && !card.matched)

       if (flippedCards[0].image == flippedCards[1].image && blueTurn == false){
        flippedCards[0].matched=true
        flippedCards[1].matched=true
        redpoint++

       }

       else if (flippedCards[0].image == flippedCards[1].image && blueTurn == true){
        flippedCards[0].matched=true
        flippedCards[1].matched=true
        bluepoint++

       }


       else if (flippedCards[0].image != flippedCards[1].image && blueTurn == false){
        blueTurn = true
       }

       else if (flippedCards[0].image != flippedCards[1].image && blueTurn == true){
        blueTurn = false
       }



        setTimeout(() => {
          cards.forEach((card) => {
              card.flipped = card.matched;
          });
          flipcount = 0;
          cards = cards;
        }, 1000);
                    
      }
    }

    function reset(){
      location.reload();
    }

    
    </script>




<section>
    <div class="BLA">
      <br>
    <h1>Memory</h1>
    <br>
    <main>
        {#each cards as card}
            <div class = "card" on:click={() => flipcard(card)}  class:flipped={ card.flipped }>
                <img src ={card.image} alt= "" class ="front">
                <img src = "https://i.pinimg.com/736x/8e/53/4c/8e534c68a7c91b3cb6a2ca5c312bbf40.jpg" alt ="" class = "back">
            </div>
        {/each}

    </main>
            <div class= "button">
          <button on:click={reset}>Reset game</button>
          </div>
    </div>
    <aside>
        <p id ="redpoint">{redpoint}</p>
    </aside>
    <aside class = "blue">
        <p id ="bluepoint">{bluepoint}</p>
    </aside>
    <aside class = "turn" class:blue={blueTurn}>
      
    </aside>
    
</section>




<style>
        section{
        background-image: url(https://i.pinimg.com/736x/c4/b0/e9/c4b0e90dff4dc55a1f9b4370343bdf7d.jpg) ;
        background-size: cover;
        width: 100vw;
        height: 100vh;
        padding: 5%;
      
    }
    h1{
        text-align: center;
        font-size: 30px;
        
    }
    main{
        display:grid;
        grid-template-columns:repeat(4,200px);;
        grid-template-rows: repeat(3,200px);;
        grid-gap:10px;
        justify-content: center;
        
    }
    img{
        width: 100%;
        height: 100%;
    }
    .card{
        border: black solid 1px;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.5s;
    }


    .card img{
        position: absolute;
        backface-visibility: hidden; 


    }
    .card.flipped{
      transform: rotateY(180deg);
    }
  aside{
    width: 100px;
    height: 100px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;

  }

  p{
    font-size: 30px;
  }

  .blue {
    background-color: blue;
    left:10px;
  }

  .turn{
    box-shadow: 0 0 10px 10px yellowgreen;
    z-index: 1;
  }
  .turn.blue {
  left: 10px;
}

.turn.red {
  right: 10px;
}
  .back{
    transform: rotateY(0deg);
  }
  .front{
    transform: rotateY(180deg);
  }

  .button{
    justify-self: center;
    background-color: black; 
    width: 100px;
    height: 30px;
    text-align: center;
    margin-top: 10px;

  }

  .BLA{
    width: 85vw;
        height: 90vh;
        margin: auto;
        background-color: rgb(0 0 0/0.4);
        border: white dotted 5px;
        border-radius: 22px;
  }

</style>