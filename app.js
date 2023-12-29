function showContent1(){
    alert("Beautiful");
}
function showContent2(){
    alert("Smart");
}
function showContent3(){
    //window.location.href = ("https://i.ibb.co/ZX0Xt4n/IMG-0968.jpg");
    window.open('https://i.ibb.co/ZX0Xt4n/IMG-0968.jpg', '_blank');
}
function showContent4(){
    window.open('https://miro.medium.com/v2/resize:fit:1200/1*d8DyNLUIa8xo5rGrO-2FSg.jpeg', '_blank');
}
function showContent5(){
    window.open('https://www.water-pollutionsolutions.com/image-files/trash-boom-400x400.webp', '_blank');
}
function showContent6(){
    window.open('https://apilgriminnarnia.files.wordpress.com/2015/12/griswold-christmas-tree-car.jpg', '_blank');
}

// Tabs start

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })

})

// Tabs end