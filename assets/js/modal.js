$(document).ready(function() {
    $('.personal-content-img').on('click', function() {
        console.log('clicked');
        const caption = $(this).attr('data-alt');
        const src = $(this).attr('data-src');

        const img = $(`<img class="zoomed-image" src=${src} alt=${caption}>`); 

        $('#modal').append(img);
        // $('#modal-content').append(img);
        $('#modal').addClass('active');

        $('.close').on('click', function() {
            const img = $('.zoomed-image');
            img.remove();
            $('#modal').removeClass('active');
        });
    });
});