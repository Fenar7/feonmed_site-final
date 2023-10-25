const openNav = document.querySelector('.open-nav')
const closeBtn = document.querySelector('.close')
const hamBg = document.querySelector('.hamburger')

const search = document.querySelector('.search-icon');
const searchBox = document.querySelector('.search-box-container');

hamBg.addEventListener('click', () =>{
    openNav.classList.add('display-allow')
})

closeBtn.addEventListener('click', () =>{
    openNav.classList.remove('display-allow')
})



search.addEventListener('click', () =>{
    if(searchBox.classList.contains('active')){
        searchBox.classList.remove('active')
    }
    else{
        searchBox.classList.add('active')
    }
})



