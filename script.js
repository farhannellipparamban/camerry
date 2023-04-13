function changeBg(){
    var navbar = document.getElementById ('navbar-main');
    var scrollValue = window.scrollY;
    if (scrollValue > 150){
        navbar.classList.add('bgColor');
    }else{
        navbar.classList.remove('bgColor');
    }
}

window.addEventListener('scroll',changeBg)
