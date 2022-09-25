const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".slider", { y: "-100%", duration: 1.5, delay: 18 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1.5");

function fadeOut(){
    const intro = document.getElementById('intro1');
    intro.style.opacity='0';
}

function hideDiv (){

    const intro = document.getElementById('intro1').style.visibility="hidden";
}
    setTimeout("hideDiv()",18000);


