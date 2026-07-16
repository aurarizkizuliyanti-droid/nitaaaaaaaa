const button = document.getElementById("wishBtn");
const flame = document.querySelector(".flame");

const letter = document.getElementById("letter");
const message = document.getElementById("message");
const signature = document.querySelector(".signature");

const text = `Happy Birthday to Me Auraaa.

Today isn't about becoming perfect.

It's about celebrating how far you've come.

May seventeen bring you peace,
beautiful memories,
and courage to keep chasing your dreams. 🤍`;

button.addEventListener("click", () => {

    flame.classList.add("out");

    setTimeout(() => {
        flame.style.display = "none";
    }, 400);

    button.style.display = "none";

    letter.classList.add("show");

    let index = 0;

    function typeWriter() {

        if (index < text.length) {

            message.textContent += text.charAt(index);

            index++;

            setTimeout(typeWriter, 75);

        } else {

    signature.classList.add("show");

    confetti({
        particleCount:150,
        spread:90,
        origin:{y:0.6},
        colors:[
            "#D4AF37",
            "#C69C72",
            "#8B6A4E",
            "#FFF8F0",
            "#E8DCC8"
        ]
    });

}

    }

    typeWriter();

});