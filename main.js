let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classlist.toggle('active');
     navbar.classlist.remove('active');
    }

    let navbar = documents.querySelector('navbar');

    document.querySelector('#menu-icon').onclick = () => {
     search.classlist.toggle('active');
     navbar.classlist.toggle('active');
    }
 let header = documents.querySelector('header');

    window.addEventListener('scroll' , () => {
        header.classlist.toggle('shadow',window.scrolly > 0);
        })
