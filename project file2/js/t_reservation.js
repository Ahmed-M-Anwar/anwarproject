/*********************************/

var area=document.getElementById('area');

function ref(){
   var select=document.getElementById('country').value;
   if(select != "Select your Current Country"){
    
    area.removeAttribute("disabled");
       select=document.getElementById('country').value;
    var groub=document.getElementsByTagName('optgroup');
       
    for(var i=0;i<groub.length;i++){
        
        if(groub[i].getAttribute("label")!=select){
            groub[i].style.display='none';
           
        }else{
            groub[i].removeAttribute("style");
        }
        
    }
    
     
}
};



$(function () {
  $('[data-toggle="popover"]').popover()
})
