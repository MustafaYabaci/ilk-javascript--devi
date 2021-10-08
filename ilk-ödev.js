//bu kısımda promt ile ismi yazdırdım
if(Server=prompt()){
document.getElementById("user").innerHTML =`Merhaba, ${Server}!  hos geldiniz`
}else if(Server!= prompt()){
    document.getElementById("user").innerHTML =`Merhaba, ${Server}!  hos geldiniz`
    }

//bu kısım da zamanı çagırdım.
    function callDateTime(){
     
      var d=(new Date())
      var currentTime=(new Date()).toLocaleTimeString(); 
    
      var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      document.getElementById("watch").innerHTML =`${currentTime}-${days[d.getDay()]}` 

    }
  setInterval(function(){  callDateTime() }, 1000);

   

