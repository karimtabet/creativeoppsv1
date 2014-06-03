function openModal(project) {
    var projectId = "#" + project;
    $(projectId).modal({
        onOpen: function (dialog) {
            dialog.overlay.fadeIn('fast');
            dialog.data.fadeIn();
            dialog.container.slideDown();
        },
        autoResize:true,
        overlayClose:true
    });
    var owlPhoto = $('.modal_photo_carousel');
    owlPhoto.owlCarousel({
        center:true,
        items:4,
        loop:true,
        margin:10,
        autoplay:true,
        autoWidth:true,
        lazyLoad:true,
        dots:false
    });
    return false;
}

function closeModal() {
    $.modal.close();
}