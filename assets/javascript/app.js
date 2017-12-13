



var n = 30;
setTimeout(countDown,1000);

//quiz timmer
function countDown(){
   n--;
   if(n > 0){
      setTimeout(countDown,1000);
   }
   document.getElementById("timer").innerHTML = n + " seconds left!";
}
