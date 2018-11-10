function header(){

    const header = document.querySelector(".page-header");

    if (window.scrollY > 150){
        header.classList.add('page-header-sticky');
    } else {
        header.classList.remove('page-header-sticky');
    }

    window.addEventListener("scroll", function(){
        if (window.scrollY > 150){
            header.classList.add('page-header-sticky');
        } else {
            header.classList.remove('page-header-sticky');
        }
    })
}

export { header }