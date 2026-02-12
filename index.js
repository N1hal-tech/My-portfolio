
rolldice();
function rolldice(){
    var randomnumber = Math.floor(Math.random()*6) + 1;
    var image1 = "./dice" + randomnumber + ".png";
    document.querySelector(".img1").setAttribute("src", image1);
    
    var randomnumber2 = Math.floor(Math.random()*6) + 1;     
    var image2 = "./dice" + randomnumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", image2);
    if (randomnumber > randomnumber2){
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    }
    else if (randomnumber2 > randomnumber){
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!";
    }
}
document.querySelector("#btn").addEventListener("click", rolldice);
