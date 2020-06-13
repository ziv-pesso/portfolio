$(document).ready(function() {
// MODALS
// const monkeyModal = document.getElementById("monkeyModal");
// const harpyModal = document.getElementById("harpyModal");
// const pieModal = document.getElementById("pieModal");
// const reindeerModal = document.getElementById("reindeerModal");
// const variousPortraitsModal = document.getElementById("variousPortraitsModal");
// const portraitManModal = document.getElementById("portraitManModal");
// const monkeymanModal = document.getElementById("monkeymanModal");
// const portraitWomanModal = document.getElementById("portrait-womanModal");
// const adastraModal = document.getElementById("adastraModal");
// const legionOfHonorModal = document.getElementById("legionofhonorModal");
// const hummingbirdModal = document.getElementById("hummingbirdModal");
// const vikinggirlModal = document.getElementById("vikinggirlModal");
// const evilkingdomModal = document.getElementById("evilkingdomModal");
// const waterfallModalModal = document.getElementById("waterfallModal");
// $('#monkey').on('click', openModal());


// IMAGES

const modal = $('#modal');


$('.personal-content-img').on('click', function() {
    // console.log('clicked');
    // const modalId = $(this).attr('data-id');
    const caption = $(this).attr('data-alt');
    const src = $(this).attr('data-src');

    const openModal = $('#modal-content');

    const img = $(`<img class="zommed-image" src=${src} alt=${caption}>`); 

    openModal.append(img);
    $('#modal').show();
});

$('.close').on('click', function() {
    $('#modal').hide();
});

});