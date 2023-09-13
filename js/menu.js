function show(){
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
}

windowsr = ScrollReveal({reset: true });

sr.reveal('.box-sobre img , .cursos-formacao, .habilidades, .box', {duration: 1500});