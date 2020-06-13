$(document).ready(function() {
$('.personal-content-img').on('click', function() {
    // console.log('clicked');
    // const modalId = $(this).attr('data-id');
    const caption = $(this).attr('data-alt');
    const src = $(this).attr('data-src');

    const img = $(`<img class="zoomed-image" src=${src} alt=${caption}>`); 

    $('#modal-content').append(img);
    $('#modal').show();

    $('.close').on('click', function() {
        const img = $('.zoomed-image');
        img.remove();
        $('#modal').hide();
    });
});

});