var i=0;
var familypics = ["Me.jpg","mommy.png","Daddy.jpg","Babybro.jpg"];
   var members = ["Me","Mom","Dad","Little Brother"];
function change(){
   i++;
   if(i>3){
      i = 0;
   }
 
      document.getElementById("pie").innerHTML=members[i];

      console.log("image change into "+i);

      document.getElementById("pp+").src=familypics[i];

      console.log("name change into "+i);

 
};