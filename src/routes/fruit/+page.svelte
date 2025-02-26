<script>

    let img = "https://i.pinimg.com/736x/48/18/e6/4818e6c6ca6d5f691a314cc43b97a1d6.jpg"
    let img1 = "https://i.pinimg.com/736x/45/fd/d3/45fdd38b20a18b1fe3308158b9e8ea70.jpg"
    let img2 = "https://i.pinimg.com/736x/3f/2b/3a/3f2b3ab75b1417b3e9814c289c994ab8.jpg"
    let img3 = "https://i.pinimg.com/736x/03/f9/49/03f949db1f434011076442f25b77c266.jpg"
    let img4 = "https://i.pinimg.com/736x/22/fc/4b/22fc4b225b24e4879ca4e005ea8f8c4b.jpg"
    let img5 = "https://i.pinimg.com/736x/b3/d7/d2/b3d7d2e3be6e71e3b4f421683cc1d9e3.jpg"
    let img6 = "https://i.pinimg.com/736x/6f/04/b8/6f04b8b1f692bb7788a53a8512a5e141.jpg"
    let img7 = "https://i.pinimg.com/736x/8a/bc/bb/8abcbb2d9a3cfdb9e6e1215b24882b20.jpg"
    let img8 = "https://i.pinimg.com/736x/8e/67/34/8e6734d8c86f6b306165e34a283dcaf7.jpg"
    let img9 = "https://i.pinimg.com/736x/c4/41/60/c44160336851753abc03b27896af17b4.jpg"
    let img10 = "https://i.pinimg.com/736x/2b/6b/3d/2b6b3d87b8c448e46cca0d2a9fa1a7ae.jpg"
    let img11 = "https://i.pinimg.com/736x/0f/a8/7b/0fa87b826fabcb7382bcd432ced14a92.jpg"
    let images = [{img:img, price:20, name:"Banana",amount:0}, {img:img1, price:30, name:"Apple",amount:0},{img:img2, price:60, name:"Cherry",amount:0},{img:img3, price:10, name:"Kiwi",amount:0},{img:img4, price:10000, name:"Kokosnöt",amount:0},{img:img5, price:25, name:"Peach?",amount:0},{img:img6, price:90, name:"Pomegranate",amount:0},{img:img7, price:30, name:"Watermelon",amount:0},{img:img8,price:1 ,name:"Ananas",amount:0},{img:img9,price:45,name:"Mango",amount:0},{img:img10,price:20,name:"Grapes",amount:0},{img:img11,price:10,name:"Orange",amount:0}]
    
    let broughitems =[]
    let total = 0

    function buyfruit(i) {
        const item = images[i];
        const existingItem = broughitems.find(bi => bi.name === item.name);
        if (existingItem) {
            existingItem.amount += 1;
        } else {
            broughitems = [...broughitems, { ...item, amount: 1 }];
        }
        total += item.price;
    }

    function increaseAmount(item) {
        item.amount += 1;
        total += item.price;
        broughitems = broughitems; 
    }

    function decreaseAmount(item) {
        if (item.amount > 0) {
            item.amount -= 1;
            total -= item.price;
            if (item.amount === 0) {
                broughitems = broughitems.filter(bi => bi.name !== item.name);
            }
            broughitems = broughitems;
        }
    }
</script>
<main>
    <div class="fruitpage">
        <br>
        <h2>Frukt shopen</h2>
        <br>
        <div class="list">
        {#each images as vara,i}
        <div class="fruit">
            
            <img src={vara.img} alt=" fruitimg" style="height: 190px; width:190px; border-radius: 15px;">
            {vara.name} {vara.price} kr/st
            <button on:click={()=>buyfruit(i)}> Buy</button> 
        
        </div>
        {/each}
   
</div>
    </div>
    <div class="shoping">
        <br>
        <h1>Varukorg</h1>
        <br>
            {#each broughitems as item}
            <li>
                {item.name} - {item.amount} st
                <button on:click={() => increaseAmount(item)}>↑</button>
                <button on:click={() => decreaseAmount(item)}>↓</button>
            </li>    
            {/each}
        Total cost: {total}
        <button style="width: 50 px height:20px;background-color:hotpink;">Pay</button>
    </div>
</main>

<style>
main{
 display: flex;
 align-items: row;   
 background: url("https://i.pinimg.com/originals/f1/48/19/f14819463a131d57a919440466c54b2e.gif") no-repeat;
 background-size: cover;
 overflow-y: scroll;
}

.shoping{
    background-color: rgba(0, 255, 255, 0.8);
    width: 30vw;
    height: 100vh;
    border: 10px double white;
    font-weight: bold;

}
.fruitpage{
    font-weight: bold;

    width: 70vw;
    height: 100vh;
    
}
h2{
    text-align: center;
    font-size: 40px;
}
h1{
    text-align: center;
    font-size: 30px;
}
.list{
    display:grid;

    grid-gap:30px;
    justify-content: center;;
}
.fruit{
    width: 88%;
    height:96%;
    transition: 300ms transform;
    background-color: rgb(255, 0, 144);
    border-radius: 15px;
    
}
button{
    background-color: rgb(255, 204, 0);
    width: 30px;
    margin-top: 5px;
    border-radius: 5px;
}
.fruit:hover{ transform: scale(1.3);}

@media (min-width: 1024px) {
        .list {
            grid-template-columns: repeat(3, 250px);
            grid-template-rows: repeat(auto-fit, 250px)
        }


}

@media (max-width: 1024px) {
        .list {
            grid-template-columns: repeat(2, 150px);
            grid-template-rows: repeat(auto-fit, 150px)
        }

        .shoping {
            width: 40vw;
        }

        .fruitpage {
            width: 60vw;
        }
    }


</style>