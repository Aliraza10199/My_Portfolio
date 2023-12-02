var typed3 = new Typed('.typed', {
    strings: ['Full Stack Developer', 
               'IT Engineer'],
               typeSpeed: 100,
               backSpeed: 50,
               backDelay: 2000,
    smartBackspace: true, // this is a default
    loop: true
  });


// -------------Scroll smoothing-------
$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        80, 
        'linear'
      );
  
    });
  
  });




  // -----vanilla effects-------------
//   VanillaTilt.init(document.querySelectorAll('.tilt'),{
//     max:25
// });

// VanillaTilt.init(document.querySelector(".your-element"), {
//   max: 25,
//   speed: 400
// });

// //It also supports NodeList
// VanillaTilt.init(document.querySelectorAll(".your-element"));

// --------------------------vanilla end--------

    let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}



// -------------------end vanilaa


$('.portfolio-item').isotope({
    // options
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });

    $('.portfolio-menu ul li').click(function(){
        $('.portfolio-menu ul li').removeClass('active');
        $(this).addClass('active');

        var selector=$(this).attr('data-filter');
        $('.portfolio-item').isotope({
            filter:selector
        });

    });

    // ----------------countup-------
    $('.counts').counterUp({
        delay: 10,
        time: 2000
    });
    

    // NNNNNNNNNNNNNNNNNNNNdownload CV btnNNNNNNNN

    let button =document.querySelector(".home a");
         button.addEventListener("click",()=>{
           
        const span = document.querySelector(".home  .download span");
        //    button.style.paddingRight="10px"; 
        span.style.visibility ="visible";
        setTimeout(()=>{
          
            span.style.visibility="hidden";
            button.style.transition=".3s ease-in-out";
            // button.style.paddingRight="0px"; 
        },3000);
    })