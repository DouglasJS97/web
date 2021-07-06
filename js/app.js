function padrao(){
    let ul = document.querySelector('ul');
    let nav = document.querySelector('nav');
    if(window.innerWidth <= 375){
        ul.style.visibility = 'hidden';
        nav.style.height = '0';
    }else{
        ul.style.visibility = 'visible';
    }
}

function menu(){
    let ul = document.querySelector('ul');
    let nav = document.querySelector('nav');
    
    if(window.innerWidth <= 375){
        if(ul.style.visibility == 'hidden'){
            ul.style.visibility = 'visible';
            nav.style.height = '130px';
        }else{
            ul.style.visibility = 'hidden';
            nav.style.height = '0';
        }
    }else{
        ul.style.visibility = 'visible';
    }
}
