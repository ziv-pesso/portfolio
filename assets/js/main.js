$(document).ready(function () {

    /********************************************
     FOOTER YEAR
    ********************************************/
    const year = new Date().getFullYear();

    document.getElementById('year').innerHTML = year;
    
    /********************************************
     TESTIMONIALS
    ********************************************/
    // state
    let prevIndex = 0;
    let currentIndex = 1;
    let nextIndex = 2;
    const lastIndex = $('#testimonial-carousel').find('.quote').length - 1;

    // click events
    $('#testimonial-carousel').on('click', '.previous', showQuote);
    $('#testimonial-carousel').on('click', '.next', showQuote);
    $('#carousel-pips').on('click', '.pip', showFromPip);

    // generate pips
    generatePips();
    setLeftClass();
    showNextQuote();

    // carousel logic
    function showNextQuote() {
        if (currentIndex === lastIndex) {
            currentIndex = 0;
        } else {
            currentIndex++;
        };
        updateState(currentIndex);
    };
    function showQuote(event) {
        // get index of clicked quote and show it
        if ($(event.target).hasClass('quote')) {
            var target = $(event.target);
        } else {
            var target = $(event.target).parent();
        };
        const index = $('.quote').index(target);
        updateState(index);
    };
    function updateState(index) {
        prevIndex = index === 0 ? lastIndex : index - 1;
        currentIndex = index;
        nextIndex = index === lastIndex ? 0 : index + 1;

        updateCarouselPosition();
        setLeftClass();
        updatePips();
    };
    function updateCarouselPosition() {
        $('#testimonial-carousel').find('.previous').removeClass('previous');
        $('#testimonial-carousel').find('.current').removeClass('current');
        $('#testimonial-carousel').find('.next').removeClass('next');

        const allQuotes = $('#testimonial-carousel').find('.quote');
        $(allQuotes[prevIndex]).addClass('previous');
        $(allQuotes[currentIndex]).addClass('current');
        $(allQuotes[nextIndex]).addClass('next');
    };
    function generatePips() {
        const listContainer = $('#carousel-pips').find('ul');
        for (let i = lastIndex; i >= 0; i--) {
            const newPip = $('<li class="pip"></li>');
            $(listContainer).append(newPip);
        };
        updatePips();
    };
    function updatePips() {
        $('#carousel-pips').find('.previous').removeClass('previous');
        $('#carousel-pips').find('.current').removeClass('current');
        $('#carousel-pips').find('.next').removeClass('next');

        const allPips = $('#carousel-pips').find('.pip');
        $(allPips[prevIndex]).addClass('previous');
        $(allPips[currentIndex]).addClass('current');
        $(allPips[nextIndex]).addClass('next');
    };
    function showFromPip(event) {
        let index = -1;
        while((event.target = event.target.previousSibling) != null ) {
            index++;
        };
        updateState(index);
    };
    function setLeftClass() {
        const allQuotes = $('#testimonial-carousel').find('.quote');
        $('.quote.left').removeClass('left');
        if (prevIndex > 0) {
            const index = prevIndex - 1;
            $(allQuotes[index]).addClass('left');
        } else {
            $(allQuotes[allQuotes.length - 1]).addClass('left');
        }
    };


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
            breakpoint: 600,
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

    /********************************************
     NAVBAR ACTIVE UNDERLINE
    ********************************************/
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('#main-nav a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#main-nav ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }
});