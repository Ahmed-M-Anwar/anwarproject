
console.log('welcome');
/**************************************indecator* */
//get slider items | array.form [ES6 feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container .slide'));

//get number of slides
var slidesCount = sliderImages.length;

//set current slide
var currentSlide =1;

//Slide Number element
var slideNumberElement=document.getElementById('slide-number');

//previous and next buttons
var nextButton=document.getElementById('next');
var prevButton=document.getElementById('prev');

//handle click on previous and next buttons
prevButton.onclick=prevSlide;
nextButton.onclick=nextSlide;

//create ul item 
var paginationElement = document.createElement('ul');

//set id on create ul element
paginationElement.setAttribute('id' , 'pagination-ul');

//create list items based on slides count
for(var i=1;i<=slidesCount;i++){

    //create the li
    var paginationItem = document.createElement('li');

    //set custom attribute
    paginationItem.setAttribute('data-index',i);

    //set item content
    paginationItem.appendChild(document.createTextNode(i));

    //append items to the main ul list
    paginationElement.appendChild(paginationItem);

}

//add the create ul element to the page
document.getElementById('indicators').appendChild(paginationElement);

//get the new created ul
var paginationCreateUI = document.getElementById('pagination-ul');

//get slider pagnation bullets | array.form [ES6 feature]
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

for(var i=0 ; i<paginationBullets.length ;i++){
    paginationBullets[i].onclick=function(){
         currentSlide=parseInt(this.getAttribute('data-index'));
         theChecker();
    }
}

//trigger the checker function
theChecker();

//prev button function
function prevSlide(){

    if(prevButton.classList.contains('disabled')){
        //do nothing
        return false;
    }else{
        currentSlide--;
        theChecker();
    }
}

//next button function
function nextSlide(){
    console.log('welcome');
    if(nextButton.classList.contains('disabled')){
        //do nothing
        return false;
    }else{
        currentSlide++;
        theChecker();
    }
}

//create the checker function
function theChecker(){
    
    //remove all active classes
    removeAllActive();

    //set the slide number
    slideNumberElement.textContent='slide #'+ currentSlide +' of '+slidesCount;

    //set active class on current slide
    sliderImages[currentSlide - 1].classList.add('active');

    //set active class on current pagination item
    paginationCreateUI.children[currentSlide - 1].classList.add('active');

    //check if current slide is the first
    if(currentSlide == 1){

        //add disabled class on previous button
        prevButton.classList.add('disabled');
    }else{
        //remove disabled class from previous button
        prevButton.classList.remove('disabled');
    }

    //check if current slide is the last
    if(currentSlide == slidesCount){

        //add disabled class on next button
        nextButton.classList.add('disabled');
    }else{
        //remove disabled class from next button
       nextButton.classList.remove('disabled');
    }

}


//remove all active classes from images and pagination bullets
function removeAllActive(){

    //loop through images
    sliderImages.forEach(function(img){
        img.classList.remove('active');
    });

    //loop through bullets
    paginationBullets.forEach(function(bullet){
        bullet.classList.remove('active');
    });
}
/*******************indecator************** */