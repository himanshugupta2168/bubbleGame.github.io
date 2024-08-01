var timer =60;
var TotalScore=0;
var hitVal;
function createBubble(){
    var iter= Math.floor(Math.random()*1000)
    var balls="";
    for(var i =1; i<=iter; i++){
        var rand = Math.floor(Math.random()*10);
        balls+=`<div class="content">${rand}</div>`;
        }
    document.querySelector("#content-bottom").innerHTML=balls;

}
function runTimer(){
    var timerint = setInterval(function(){
        if (timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#content-bottom").innerHTML=`<h1 id="TotalScore">Your Score is ${TotalScore}<br>
            Better luck next time ...</h1>`;
        }
    }, 1000)
}
function MakeHit(){
    hitVal= Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent= hitVal;
}
function increaseScore(){
    TotalScore+=10;
    document.querySelector("#Score").textContent=TotalScore;
}
document.querySelector("#content-bottom").addEventListener("click",function(dets){
    var clickednum= Number(dets.target.textContent);
    if (clickednum===hitVal){
        increaseScore();
        MakeHit();
        createBubble();
    }
    else{
        timer=0;
    }

} )
createBubble();
runTimer();
MakeHit();
