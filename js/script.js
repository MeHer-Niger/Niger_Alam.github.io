


/*===== TYPING TEXT =====*/

    var typed = new Typed(".profession_text", {
        strings: ["Web Developer", "Web Designer"],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true,
    })



    

/*===== BACK TOP BUTTON =====*/

      const back_btn_top = document.querySelector(".btn-top");

      window.addEventListener("scroll", () => {
        if(window.scrollY >= 50){
           back_btn_top.classList.add("active")
        }else{
            back_btn_top.classList.remove("active")
        }
      })



/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 250,
//     reset: true
});

sr.reveal('.home_content, .about_banner,  .copyright',{}); 
sr.reveal('.about_content, .contact_container, .skills_wrapper',{delay: 500}); 
sr.reveal('.social_list,.title_wrapper, .work_list',{ interval: 250}); 
sr.reveal(' .work_item, .input_field',{interval: 250}); 