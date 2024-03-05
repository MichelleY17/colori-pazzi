document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.container div');

    elements.forEach(function(element) {
        element.style.backgroundColor = getRandomColor();
    });
});

//  document.addEventListener('click', fucntion(){
//      const alclick=doucment.
//  });

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}