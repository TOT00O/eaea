<script>

    let color = 'black';
    function handleSubmit(){
        alert("Welcome")
    }
    let colors =[{name:"Blue", value: "CornflowerBlue"},{name:"Pink", value: "Pink"},{name:"Yellow", value: "LemonChiffon"},{name:"Green", value: "DarkSeaGreen"},{name:"Purple", value: "Lavender"},{name:"Gray", value: "LightGray"}]
    import { base } from '$app/paths';

</script>






<main>

<form action="" on:submit|preventDefault={handleSubmit}>
<div class="accont">    
<div style="width: 100px; height: 100px; border-radius: 50%; overflow:hidden; background-color:{color};"  ></div>
    <!-- accont info-->
    <label for="name">Username:</label>
    <input type="text" id="name" >
    <br>
    <label for="email">Email:</label>
    <input type="email" id="email"> 
    <br>
    <label for="password">Enter password:</label>
    <input type="password" id="password" >
    <br>
    <!-- colour button-->
    <label for="favcolour">Select a colour:  
        <select id="favcolour" bind:value ={color}>
        
        {#each colors as c}
        <option value={c.value}>{c.name}</option>
        {/each}
    
    </select>
    </label>
    <!--register button-->
    <br>
    <div class= "button">
    <input type="submit" value="regestsos">
    </div>
    
    <h1>Do you aready have an account?</h1>
    <div class=" wraper">
    <a href="{base}/login">Login here</a>
    </div>
</div>   
</form>

</main>

<style>
 main{
        background-image: url(https://i.pinimg.com/736x/c4/b0/e9/c4b0e90dff4dc55a1f9b4370343bdf7d.jpg) ;
        background-size: cover;
        width: 100vw;
        height: 100vh;
        padding: 5%;
    }
    label{
        background-color: rgba(255, 255, 255, 0.3);
    }
.accont{
    color: black;
    border: white dotted 5px;
    border-radius: 22px;
    width: 450px;
    height: 600px;
    margin: auto;
    background-color: rgb(0 0 0/0.4);
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;

}

.button{
 background-color:rgb(255, 185, 226);
 border-radius: 5px;
}

.wraper :hover{text-decoration: underline;}
.button :hover{text-decoration: underline;}

</style>
