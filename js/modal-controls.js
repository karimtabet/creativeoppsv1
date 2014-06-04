function openModal(project) {
    var projectId = "#" + project;
    $(projectId).modal({
        onOpen: function (dialog) {
            dialog.overlay.fadeIn('medium');
            dialog.data.fadeIn('medium');
            dialog.container.slideDown('medium');
        },
        onClose: function(dialog) {
            dialog.data.fadeOut('medium');
            dialog.container.slideUp('medium');
            dialog.overlay.fadeOut('medium', function () {
                $.modal.close(); // must call this!
            });
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