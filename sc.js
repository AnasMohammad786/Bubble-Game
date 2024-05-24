
var timer=60;
var score=0;
var Hitrn;
function hitVal()
{
    Hitrn=Math.floor(Math.random()*10);
     document.querySelector("#hit").textContent=Hitrn;
}
function getScore(){
    score =score +10;
    document.querySelector("#scoring").textContent=score;
}
function runTimer(){

    var timeint=setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#settime").textContent=timer;
        }
        else{
            document.querySelector("#pbottom").innerHTML=`<div id="gamekhatam"><h1 >Game Over</h1></div>`;
            clearInterval(timeint);
        }
    },1000);


}

function getBubbles()
{
    var clutter = "";

for(var i=1;i<=168;i++)
{
    var rand=Math.floor(Math.random()*10);
    clutter += `<div class="button1">${rand}</div>`;
}

    document.querySelector("#pbottom").innerHTML = clutter;
}
document.querySelector("#pbottom")
.addEventListener("click",function(dets)
{
    var clickednumber=Number(dets.target.textContent);
    if(Hitrn===clickednumber)
{
    getScore();
    hitVal();
    getBubbles();
}
})

getBubbles();
runTimer();
hitVal();
