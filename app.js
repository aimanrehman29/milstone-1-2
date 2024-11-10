var ToggleButton = document.getElementById("toggle-projects");
var Projects = document.getElementById("Projects");
ToggleButton.addEventListener('click', function () {
    if (Projects.style.display === 'none') {
        Projects.style.display = 'block';
    }
    else {
        Projects.style.display = 'none';
    }
});
