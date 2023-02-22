let button = document.getElementById('load_more')
let show_content1 = document.getElementById('card2')
let show_content2= document.getElementById('card3')
let go_top = document.getElementById('top_nav')
button.addEventListener('click',function() {
    show_content1.style.display = 'block' //card 2 show
    show_content2.style.display = 'block' //card 3 show
    button.style.display='none' //Buttonya hilang atau none
})
go_top.addEventListener('click',function () {
    window.scrollTo(0, 0); //apabila di trigger maka scroll sumbu x dan y view ke 0,0 atau atas
})