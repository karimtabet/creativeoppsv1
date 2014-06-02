function openModal(project) {
    var projectId = "#" + project;
    $(projectId).modal();
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        center:true,
        items:4,
        loop:true,
        margin:10,
        autoplay:true,
        autoWidth:true,
        lazyLoad:true
    });
    return false;
}

function closeModal() {
    $.modal.close();
}