document.addEventListener('scroll', function(){
    changeText();
});

function changeText(){
    document.getElementById("b1").innerHTML = window.scrollY;
    if(window.scrollY > window.innerHeight){
        document.getElementById('b1').style.color = 'black'
    }
    if(window.scrollY <= window.innerHeight){
        document.getElementById('b1').style.color = 'white'
    }
}