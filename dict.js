window.onload = function () {
 
 document.getElementById("button").onclick = findWord();
 
 function findWord(str){
  if (str.length == 0){
   
  }
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function(){
   if (this.readyState == 4 && this.readyState == 200){
    document.getElementById('button').innerHTML = this.responseText;
   }
  }
  httpRequest.open("GET", "request.php?="+ str,"true");
  httpRequest.send();
 }
}


