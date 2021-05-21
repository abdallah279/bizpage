// fixed header
var header = document.querySelector('header');

window.addEventListener('scroll', function(){
    header.classList.toggle('fixed', window.scrollY > 0);
})

// scroll-btn
var scrollBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', function(){
    scrollBtn.classList.toggle('scroll-display', window.scrollY > 0);
})
scrollBtn.onclick = function(){
    window.scrollTo(0,0);
}


// navbar media
var span = document.getElementById("span");
var ul = document.getElementById("ul");

span.onclick = function(){
    ul.classList.toggle("show");
}


// set slide
var slideImage = Array.from(document.querySelectorAll('.home-content'));

// slidecurrent
var currentSlide =1;

// get slidelength
var slideLength = slideImage.length;

// set nextButton
var nextButton = document.querySelector('.right');

// set prevButton
var prevButton = document.querySelector('.left');

var paginationElement = document.querySelector(".home-footer");

// create the Bullets
for(var i =1; i<= slideLength; i++){
    var paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index' , i);

    // paginationItem.appendChild(document.createTextNode(i));

    paginationElement.appendChild(paginationItem);
}

var bullets = Array.from(document.querySelectorAll('.home-footer li'));

for(var i =0; i<bullets.length; i++){
    bullets[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute("data-index"));
        theChecker();
        restTimer();
    }
}

// setInterval function
let timer = setInterval(nextSlide,6000);

theChecker();

// nextButton , prevButton
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// nextButton
function nextSlide(){
    if(currentSlide >= slideLength){
        currentSlide = 1;
    }else{
        currentSlide++;
    }
    theChecker();
    restTimer();
}

// prevButton
function prevSlide(){
    if(currentSlide == 1){
        currentSlide = slideLength;
    }else{
        currentSlide--;
    }
    theChecker();
    restTimer();
}

// set checker function to add and remove class active

function theChecker(){

    // remove class active from slideImage and Bullets
    removeAllActive();

    // add class active to slideImage
    slideImage[currentSlide - 1].classList.add('home-active');

    // add class active to Bullets
    paginationElement.children[currentSlide - 1].classList.add('act');
}

// remove class active from slideImage and Bullets
function removeAllActive(){

    // remove class active from slideImage
    slideImage.forEach(function(img){
        img.classList.remove('home-active');
    });

    // remove class active from Bullets
    bullets.forEach(function(dot){
        dot.classList.remove('act');
    });
}


// restTimer when onclick
function restTimer(){
    clearInterval(timer);
    timer = setInterval(nextSlide,6000);
}



// portfolio section
let portUl = Array.from(document.querySelectorAll('.port-ul li'));
let portItem = document.querySelector('.elment').children;

for(var i =0; i< portUl.length; i++){
    portUl[i].addEventListener('click', function(){
        portUl.forEach(function(card){
            card.classList.remove('active-card');
        });
        this.classList.add('active-card');

        let Filter = this.getAttribute('data-filter');

        for(var z =0; z< portItem.length; z++){
            portItem[z].style.display = 'none';
            // portItem[z].style.transform = 'scale(0)';

            if(Filter == portItem[z].getAttribute('data-item') || Filter == "all"){
                portItem[z].style.display = 'block';
                // portItem[z].style.transform = 'scale(1)';
            }
        }
    });
}


// section test

// set the testSlide
var slideTest = Array.from(document.querySelectorAll('.test-content .test-cont'));

// set currentTest
var currentTest = 1;

// get testLength
var testLength = slideTest.length;

// set test ul
var testPaginationElement = document.querySelector('.test-ul');

// create the testPagination
for(var i = 1; i <= testLength; i++){
    var testPaginationItem = document.createElement("li");
    testPaginationItem.setAttribute("data-test-index" ,i);

    // append the pagination in ul
    testPaginationElement.appendChild(testPaginationItem);
}

// set the testBullets
var testBullets = Array.from(document.querySelectorAll('.test-ul li'));

// onclick bullets
for(var i = 0; i< testBullets.length; i++){
    testBullets[i].onclick = function(){
        currentTest = parseInt(this.getAttribute('data-test-index'));
        theCheckerTest();
        clearTestTime();
    }
}

// timerTest
var timerTest = setInterval(nextSliderTest,8000);
function nextSliderTest(){
    if(currentTest >= testLength){
        currentTest = 1;
    }else{
        currentTest++;
    }
    theCheckerTest();
    clearTestTime();
}

theCheckerTest();

// check the active class
function theCheckerTest(){

    // remove classActiveAll
    removeAllActiveTest();

    slideTest[currentTest - 1].classList.add('test-cont-active');

    testPaginationElement.children[currentTest -1].classList.add('test-active');

}

function removeAllActiveTest(){

    // remove active from item
    slideTest.forEach(function(item){
        item.classList.remove('test-cont-active');
    });

    // remove active from li
    testBullets.forEach(function(dots){
        dots.classList.remove('test-active');
    });
}

// clear Timer
function clearTestTime(){
    clearInterval(timerTest);
    timerTest = setInterval(nextSliderTest,8000);
}


// clients section
var clientPagination = document.querySelector('.client-ul');
var clientSlides = document.querySelector('.client-content');
var clientPaginationItems = Array.from(document.querySelectorAll('.client-ul li'));

clientPaginationItems[1].onclick = translate;
clientPaginationItems[0].onclick = reTranslate;

function translate(){
    clientSlides.style.transform =  "translateX(-385px)";
    removeAllActiveClient();
    this.classList.add('client-active');
}

function reTranslate(){
    clientSlides.style.transform = "translateX(0px)";
    removeAllActiveClient();
    this.classList.add('client-active');
}

// remove active class from bullets
function removeAllActiveClient(){
    clientPaginationItems.forEach(function(dot){
        dot.classList.remove('client-active');
    });
}














