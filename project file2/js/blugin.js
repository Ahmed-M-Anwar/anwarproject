$(document).ready(function(){
   $('.carousel').carousel({
       interval:4000
   }); 
  
});
var x=document.getElementById("main"),
    y=x.getElementsByClassName("menu_item");
    
    
    y[0].classList.add('active');
var  active =y[0];
console.log(document.getElementById('item1'));
   document.getElementById('item1').classList.remove('activ');
var activ=document.getElementById('item1');

function md(k){
    activ.classList.add('activ');
    var ref=k.getAttribute("href"),
    d=document.getElementById(ref);
    d.classList.remove('activ');
    activ=d;
}

for(i in y){
    y[i].onclick=function(e){
        'use strict';
       
        active.classList.remove("active");
        this.classList.add("active");
        active=e.target;
        md(this);
    };
};
 /************************************* switch between menu,info***************************/   
var make1=document.querySelector('div.show_menu'),
    make2=document.querySelector('div.show_info'),
    menu_rest=document.querySelector('.menu_of_rest'),
    info_rest=document.querySelector('.info_obout_rest');
info_rest.style.display='none';
make1.onclick=function(){
    info_rest.style.display='none';
    if(make2.classList.contains('make'))
        {
            
            make2.classList.remove('make');
            
        }
    
    
    menu_rest.removeAttribute('style');
    
    make1.classList.add('make')
    
    
}
make2.onclick=function(){
    menu_rest.style.display='none';
    if(make1.classList.contains('make'))
        {
            
            make1.classList.remove('make');
            
        }
    
    make2.classList.add('make')
    info_rest.removeAttribute('style');
    
    
    
    
}
/*************************************end switch between menu,info***************************/
/**************************************add to card**********************/
var item=document.getElementsByClassName('item_det'),
    c=item.length;
//console.log(item[0],c);
for (var m=0;m<c;m++){ 
    var total=0;
    var alltotal=0;
    //var show_total=document.createElement('P');
    
        item[m].onclick=function(){
        
        var item_type=this.getAttribute('content'),
            item_price=this.getAttribute('value'),
            empty_card=document.querySelector('.card_nocontent'),
            new_card=document.querySelector('.card_content'),
            addTotal=document.querySelector('.total'),
            addAllTotal=document.querySelector('.all_total'),
            vat=document.querySelector('.vat').innerHTML,
            price=parseInt(item_price,10),
            vatPrice=parseInt(vat,10);
            
            total=total+price;
            alltotal=total*vatPrice/100+total;
            addTotal.innerHTML=total;
            addAllTotal.innerHTML=alltotal;
            
        //var content_show_element=document.createTextNode('Total Price is '+total);
        console.log(item_price,total);
        
        if(empty_card.hasAttribute('style')==false && new_card.hasAttribute('style')==true){
           empty_card.style.display='none';
           new_card.removeAttribute('style');
            addItem(item_type,item_price);
            
        }else if(empty_card.hasAttribute('style')==true && new_card.hasAttribute('style')==false){
            addItem(item_type,item_price);
        }
    }
}

function addItem(type, price){
    var empty_card=document.querySelector('.card_nocontent'),
            new_card=document.querySelector('.card_content'),
            new_item=document.createElement('p'),
            new_plus=document.createElement('span'),
            new_minus=document.createElement('span'),
            delet=document.createElement('span');
    var content_items=document.querySelector('.select_item'),
        items=content_items.getElementsByTagName('p'),
        l=items.length;
    
    console.log(items);
    console.log(l);
    var notvoid =false;
    if(l>0){
        
       for(var k=0;k<l;k++){
           
         var oldtype=items[k].getAttribute('content');
            var numOfitem=items[k].getAttribute('value');
           //console.log(items[k]);
        if(type == oldtype){
            //console.log(type,oldtype);
            
                var oldnum=parseInt(numOfitem,10)+1;
              
             items[k].setAttribute('value',oldnum);    
            items[k].innerHTML=oldnum+' '+type+'    '+price*oldnum;
            notvoid=false;
            break;
            
        }else if(type != oldtype){
            notvoid =true;
           //show_total.appendChild(content_show_element); 
    
            
            //new_card.appendChild(show_total);
            }
           
    }
    if(notvoid){
            var num=1;
            new_item_content=document.createTextNode(num+' '+type+'    '+price*num);
            new_item.appendChild(new_item_content);
            new_item.setAttribute('content',type);
           new_item.setAttribute('value',num);
           content_items.appendChild(new_item);
            }
        
    }else if(l<=0){
           var num=1;
           var new_item_content=document.createTextNode(num+' '+type+'    '+price*num);
           new_item.appendChild(new_item_content);
           new_item.setAttribute('content',type);
           new_item.setAttribute('value',num);
           content_items.appendChild(new_item);
           
    }
    
}
/************************************end addto card*********************/