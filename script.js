// function gridview(){
//    alert("grid-view");
// }

function addpart(){
   document.getElementsByClassName('add-part')[0].style.display="block";
}
function listview(){
   document.getElementsByClassName('list-items')[0].style.display="block";
   document.getElementsByClassName('cart-items')[0].style.display="none";
   document.getElementById('end-list').style.display="none";
}
function gridview(){
   document.getElementsByClassName('list-items')[0].style.display="none";
   document.getElementsByClassName('cart-items')[0].style.display="flex";
   document.getElementById('end-list').style.display="flex";
}
