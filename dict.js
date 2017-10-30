window.onload = function () {
 
 document.getElementById("button").onclick = findWord();
 
 function findWord(str){
  if (str.length == 0){
   document.getElementById('word').innerHTML = '';
   return;
  }else{
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function(){
   if (this.readyState == 4 && this.status == 200){
    document.getElementById('word').innerHTML = alert('This is working');
   }
  }
  httpRequest.open("GET", "request.php?q="+ str,"true");
  httpRequest.send();
 }
 }
}


