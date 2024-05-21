function infinetAnimation(){
    var element = document.getElementById("myElement");

    var position = 0;
    var speed = 1;

    var animation = setInterval(Frame, 10);

    function Frame(){
        if (position >= 100){
            clearInterval(animation);
            } else{
                position += speed;
                element.style.left = position + 'px';
            }
    }

}

setInterval(infinetAnimation, 1000);