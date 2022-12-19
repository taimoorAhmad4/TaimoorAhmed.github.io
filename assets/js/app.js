let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".links a");

window.addEventListener("mousemove", cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
       mouseCursor.classList.remove('.outer');
       link.classList.remove('.hovered-text');
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('.outer'); 
        link.classList.add('.hovered-text');
    });
});
  