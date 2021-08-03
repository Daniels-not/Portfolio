let image = document.querySelector('#avatar');

image.onmouseover = function(){
    image.src = "/img/avatar-hover.svg";
}

image.onmouseout = function(){
    image.src = "/img/avatar.svg";
}