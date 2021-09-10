$('.slider--news .slider__content').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1350,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true
            }
        },
        {
            breakpoint: 983,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
            }
        }
    ]
});