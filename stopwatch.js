const startbtn=document.getElementById("startbtn");
const stopbtn=document.getElementById("stopbtn");
const resetbtn=document.getElementById("resetbtn");
const timedisplay=document.getElementById("timedisplay");
let elapsedtime=0;
let hours;
let Mins;
let sec;
let intervalid;
startbtn.addEventListener("click",starttime);
function starttime(){
  let startpoint= Date.now()-elapsedtime;
   intervalid= setInterval(() => {
    let newdate=Date.now ();
    elapsedtime=newdate-startpoint;
    hours=Math.floor((elapsedtime/3600000)%60);
 Mins =Math.floor((elapsedtime/60000)%60);
 sec= Math.floor((elapsedtime / 1000)%60);
 if (Mins<10){
  Mins= "0"+Mins;
  
 }
 else{
    Mins= Mins;
 }
 if (hours<10){
  hours= "0"+hours;
  
 }
 else{
    hours= hours;
 }
 if (sec<10){
  sec= "0"+sec;
  
 }
 else{
    sec= sec;
 }
 
timedisplay.textContent=hours+ ":"+Mins+":"+sec;
}
  , 
  1000);
  

    }
    stopbtn.addEventListener("click",stoptime);
    function stoptime(){
      clearInterval(intervalid)
    }
    resetbtn.addEventListener("click",resettime);
    function resettime(){
      clearInterval(intervalid)
      hours=0;
      Mins=0;
      sec=0;
      timedisplay.innerHTML= "0"+hours+ ":"+ "0"+Mins+":"+ "0"+sec;
     
    }
    

