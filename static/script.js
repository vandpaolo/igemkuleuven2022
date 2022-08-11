window.addEventListener('scroll', function(){
    var nav = document.querySelector('nav');
    if (window.pageYOffset>630){
        nav.classList.add("sticky")
    }else{
        nav.classList.remove("sticky") 
    }
});   



