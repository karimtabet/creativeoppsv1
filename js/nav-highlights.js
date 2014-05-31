function changeHighlighted(btnId) {
    document.getElementById("homeBtn").className = "";
    document.getElementById("projectsBtn").className = "";
    document.getElementById("contactBtn").className = "";
    document.getElementById(btnId).className = "pure-menu-selected";
}