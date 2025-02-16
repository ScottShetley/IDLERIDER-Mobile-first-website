$(document).ready(function(){
    console.log('Document is ready'); // Debugging: Log when the document is ready
    const carouselElement = $('.carousel');
    console.log('Carousel element:', carouselElement); // Debugging: Log the carousel element

    if (carouselElement.length) {
        console.log('Initializing Slick Carousel'); // Debugging: Log before initializing Slick Carousel
        carouselElement.slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        console.log('Slick Carousel initialized'); // Debugging: Log after initializing Slick Carousel
    } else {
        console.error('Carousel element not found'); // Debugging: Log an error if the carousel element is not found
    }
});