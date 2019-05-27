var scores,roundScore,activePlayer;
scores=[0,0];
roundScore=0;
activePlayer=0;
document.getElementById("score-0").textContent= '0';
document.getElementById("score-1").textContent= '0';
document.getElementById("current-0").textContent= '0';
document.getElementById("current-0").textContent= '0';
document.querySelector(".dice").style.display= "none";
document.querySelector(".btn-roll").addEventListener("click",function(){
    var dice= Math.floor(Math.random()*6 + 1);
    document.querySelector(".dice").style.display= "block";
    document.querySelector(".dice").src= "dice-" + dice + ".png";
    document.querySelector("#current-" + activePlayer).textContent=dice;
    if(dice!==1){
        roundScore+=dice;
        document.querySelector("#current-" + activePlayer).textContent= roundScore;
    }
    else{
        roundScore=0;
        document.querySelector("#current-" + activePlayer).textContent= roundScore;
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        if(activePlayer===0)
        activePlayer=1;
        else
        activePlayer=0;
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("active");
    }
})

document.querySelector(".btn-hold").addEventListener("click", function(){
    scores[activePlayer]+= roundScore;
    roundScore=0;
    document.querySelector("#score-" + activePlayer).textContent= scores[activePlayer];
    document.querySelector("#current-" + activePlayer).textContent= "0";

    document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    if(scores[activePlayer]>=20)
    {
        document.querySelector("#name-" + activePlayer).textContent="Winner!!";
        alert("Player " + (activePlayer+1) + " has won!");
        document.querySelector(".btn-roll").style.display="none";
        document.querySelector(".btn-hold").style.display="none";
    }
    else{
        if(activePlayer===0)
            activePlayer=1;
        else
            activePlayer=0;

        document.querySelector(".player-" + activePlayer + "-panel").classList.add("active");
    }
})

document.querySelector(".btn-new").addEventListener("click",function(){
    activePlayer=0;
    document.querySelector(".btn-roll").style.display="block";
    document.querySelector(".btn-hold").style.display="block";
    document.getElementById("score-0").textContent= '0';
    document.getElementById("score-1").textContent= '0';
    document.getElementById("current-0").textContent= '0';
    document.getElementById("current-0").textContent= '0';
    document.querySelector(".dice").style.display="none";
})

