$(document).ready(function() {
    $('.menu-toggle').on('click', function() {
        $('.nav').toggleClass('showing');
        $('.nav ul').toggleClass('show');  
    });

    $('.post-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });

      let likebtn = document.querySelector('#likebtn');
      let dislikebtn = document.querySelector('#dislikebtn');
      let input1 = document.querySelector('#input1');
      let input2 = document.querySelector('#input2');

      likebtn.addEventListener('click',()=> {
        input1.value = parseInt(input1.value) + 1;
        input1.style.color = "green";
      })

      dislikebtn.addEventListener('click',()=> {
        input2.value = parseInt(input2.value) + 1;
        input2.style.color = "red";
      })
})

