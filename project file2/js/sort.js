

var elem = document.querySelector('.dummy');

var ele=document.querySelectorAll('.insert_sort');
//el[0].style.display='None';
var arr=[];

for(var i=0;i<ele.length;i++){
    
    arr[i]=ele[i].querySelector('.fast_order').textContent;
    arr[i]=parseInt(arr[i],10);
}


function min_order_sort(){
    var elem = document.querySelector('.dummy');

        var el=document.querySelectorAll('.insert_sort');
        //el[0].style.display='None';
        var arr=[];
        var arr2=[],
        arr3=[];
        //console.log(elem.childNodes[2].a);
        for(var i=0;i<el.length;i++){
            arr3[i]=i;
            arr[i]=el[i].querySelector('.min_order').textContent;
            arr[i]=parseInt(arr[i],10);
            arr2[i]=i;
            elem.removeChild(el[i]);
            //el[i].style.display='None';
        }

        for(var marker=1 ; marker<=arr.length;marker++){
            if (arr[marker] < arr[marker-1]){
                var temp=arr[marker];
                var temp2=arr2[marker];
                var mark2=marker-1;
                while(mark2>=0 && arr[mark2]>temp){
                    arr[mark2+1]=arr[mark2];
                    arr2[mark2+1]=arr2[mark2];
                    mark2=mark2-1;
                }
                arr[mark2+1] = temp;
                arr2[mark2+1] = temp2;
            }
        }
        
        for(var i=0;i<arr.length;i++){
            console.log(el[arr2[i]]);
            console.log(arr2[i]);
            console.log(elem);
            elem.appendChild( el[arr2[i]]);
            el[arr2[i]].style.display='block';
        }
}



function fast_order_sort(){
    var elem = document.querySelector('.dummy');

        var el=document.querySelectorAll('.insert_sort');
        //el[0].style.display='None';
        var arr=[];
        var arr2=[],
        arr3=[];
        //console.log(elem.childNodes[2].a);
        for(var i=0;i<el.length;i++){
            arr3[i]=i;
            arr[i]=el[i].querySelector('.fast_order').textContent;
            arr[i]=parseInt(arr[i],10);
            arr2[i]=i;
            elem.removeChild(el[i]);
            //el[i].style.display='None';
        }
        console.log(arr2);
        console.log(arr);
        for(var marker=1 ; marker<=arr.length;marker++){
            if (arr[marker] < arr[marker-1]){
                var temp=arr[marker];
                var temp2=arr2[marker];
                var mark2=marker-1;
                while(mark2>=0 && arr[mark2]>temp){
                    arr[mark2+1]=arr[mark2];
                    arr2[mark2+1]=arr2[mark2];
                    mark2=mark2-1;
                }
                arr[mark2+1] = temp;
                arr2[mark2+1] = temp2;
            }
        }
        
        for(var i=0;i<arr.length;i++){
            
            //console.log(arr2[i]);
            elem.appendChild( el[arr2[i]]);
            //el[arr2[i]].style.display='block';
        }
}

function recommended(){
    
      
    for(var i=0;i<ele.length;i++){
            
        elem.appendChild( ele[i]);
        //el[arr2[i]].style.display='block';
    }
}


function sorting(){
    var x=document.querySelector('.order1'),
        y=document.querySelector('.order2'),
        z=document.querySelector('.order3');
console.log(x,y,z);
    x.onclick=function(){
        x.classList.remove('sort');
        z.classList.remove('sort');
        y.classList.remove('sort');
        if(x.classList.contains('sort')==false){
            x.classList.add('sort');
        }
        
        min_order_sort();
    }
    y.onclick=function(){
        x.classList.remove('sort');
        z.classList.remove('sort');
        y.classList.remove('sort');
        
        if(x.classList.contains('sort')==false){
            y.classList.add('sort');
        }
        
        fast_order_sort();
    }
    z.onclick=function(){
        x.classList.remove('sort');
        y.classList.remove('sort');
        z.classList.remove('sort');
       
        if(x.classList.contains('sort')==false){
            z.classList.add('sort');
        } 
        recommended();
        
    }
}
sorting();