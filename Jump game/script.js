score= 0; 
cross= true;
document.onkeydown = function(e){
    console.log("Key code is: ", e.key)
    if(e.key=="ArrowUp"){
        dino= document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(()=>{
            dino.classList.remove('animateDino')
        },1000);
    }
    if(e.key=="ArrowRight"){
        dino= document.querySelector('.dino');
        dinoX= parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left= dinoX+ 112+ "px";
    }
    if(e.key=="ArrowLeft"){
        dino= document.querySelector('.dino');
        dinoX= parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left= (dinoX- 112)+ "px";
    }
}

setInterval(()=>{
    dino= document.querySelector('.dino');
    gameOver= document.querySelector('.gameOver');
    obstacle= document.querySelector('.obstacle');

    dx= parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy= parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox= parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy= parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX= Math.abs(dx-ox);
    offsetY= Math.abs(dy-oy);
    if(offsetX<83 && offsetY<52){
        gameOver.style.visibility= 'visible';
        obstacle.classList.remove('obstacleAni')
    }
    else if(offsetX<145 && cross){
        score+= 1;
        updateScore(score);
        cross= false;
        setTimeout(()=>{
            cross= true;
        }, 1000);
        setTimeout(() => {
            aniDur= parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur= aniDur-0.1;
            obstacle.style.animationDuration= newDur+ 's';
        }, 600);   
    }

}, 10);

function updateScore(score){
    scoreCount.innerHTML= "Your Score: " + score;
}