const starCont = document.querySelector('.star-container');
const allStars = document.querySelectorAll('.star');
const count = document.getElementById('count');
let idx = 0;
let clickFlag = false;
starCont.addEventListener('mouseover', function(e){
    allStars.forEach(function(str){
        str.classList.remove('star-filled');
    });
    idx = 0;
    if(e.target.classList[0] === 'star'){
        idx = e.target.getAttribute('data-index');
        allStars.forEach(function(str){
          if(str.getAttribute('data-index') <= idx){
            str.classList.add('star-filled');
          }  
        });
    }
});

starCont.addEventListener('mouseout', function(e){
    if(!clickFlag){
        allStars.forEach(function(str){
            str.classList.remove('star-filled');
        });
        idx = 0;
    }    
});

starCont.addEventListener('click', function(e){
    clickFlag = true;
    if(e.target.classList[0] === 'star'){
        idx = e.target.getAttribute('data-index');
        allStars.forEach(function(str){
          if(str.getAttribute('data-index') <= idx){
            str.classList.add('star-filled');
          }  
        });
        count.innerText = idx;
    }
})