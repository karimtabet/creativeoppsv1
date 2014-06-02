function openModal(project) {
    var projectId = "#" + project;
    $(projectId).modal();
    return false;
}

function closeModal() {
    $.modal.close();
}