function show(){
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
}

window.sr = ScrollReveal({reset: true });

sr.reveal('.box-sobre img , .cursos-formacao, .habilidades, .box', {duration: 1500});