document.getElementById("year").innerHTML = new Date().getFullYear();
// Function to toggle the expanded/collapsed state of the navbar
function toggleMenu() {
    var navbarItems = document.querySelector('.navbar');
    navbarItems.classList.toggle('shrunk');
    document.querySelector('.hamburger-container').classList.toggle('open');
}