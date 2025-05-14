document.getElementById("startBtn").addEventListener("click",function(){
    const music=document.getElementById("bg-music");
    music.play();
    if(navigator.vibrate){
        navigator.vibrate([100,50,100]);
    }
    setTimeout(() => {
        window.location.href="letter.html";
    }, 400000);
});