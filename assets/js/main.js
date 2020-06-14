$(document).ready(function () {

    /********************************************
     FOOTER YEAR
    ********************************************/
    const year = new Date().getFullYear();

    document.getElementById('year').innerHTML = year;

    /********************************************
     PORTFOLIO
    ********************************************/
    $('#professional').on('click', showProfessional);
    $('#personal').on('click', showPersonal);

    function showProfessional() {
        console.log('Professional Section shows.');
        $('#professional').addClass('active');
        $('#personal').removeClass('active');
        $('#personal-preview').addClass('hide');
        $('#professional-preview').removeClass('hide');
    };

    function showPersonal() {
        console.log('Personal Section shows.');
        $('#professional').removeClass('active');
        $('#personal').addClass('active');
        $('#professional-preview').addClass('hide');
        $('#personal-preview').removeClass('hide');
    };
    
    /********************************************
     TESTIMONIALS
    ********************************************/
    $('.responsive-carousel').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
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
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }]
    });
});