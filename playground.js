document.addEventListener('DOMContentLoaded', function(){
    let circle1 = document.querySelector('.circle1');
    let circle2 = document.querySelector('.circle2');
    let circle3 = document.querySelector('.circle3');
    let circle4 = document.querySelector('.circle4');
    let circle5 = document.querySelector('.circle5');
    
    let orange = document.querySelector('.orangeButton');
    orange.addEventListener('click', function(){
        circle1.style.backgroundColor = 'orange';
        circle2.style.backgroundColor = 'orange';
        circle3.style.backgroundColor = 'orange';
        circle4.style.backgroundColor = 'orange';
        circle5.style.backgroundColor = 'orange';
    });

    let blue = document.querySelector('.blueButton');
    blue.addEventListener('click', function(){
        circle1.style.backgroundColor = 'blue';
        circle2.style.backgroundColor = 'blue';
        circle3.style.backgroundColor = 'blue';
        circle4.style.backgroundColor = 'blue';
        circle5.style.backgroundColor = 'blue';
    });

    let purple = document.querySelector('.purpleButton');
    purple.addEventListener('click', function(){
        circle1.style.backgroundColor = 'purple';
        circle2.style.backgroundColor = 'purple';
        circle3.style.backgroundColor = 'purple';
        circle4.style.backgroundColor = 'purple';
        circle5.style.backgroundColor = 'purple';
    });
});