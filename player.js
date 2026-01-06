const radio=document.getElementById("radio");
const btn=document.getElementById("playBtn");

btn.onclick=()=>{
if(radio.paused){
radio.play();
btn.textContent="⏸️ Pause";
}else{
radio.pause();
btn.textContent="▶️ Écouter en direct";
}
}
