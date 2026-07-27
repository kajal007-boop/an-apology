function openPart(id) {
    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    const nextScreen = document.getElementById(id);

    if (nextScreen) {
        nextScreen.classList.add("active");
    }
}


function showChoices() {
    const choices = document.getElementById("choices");

    choices.classList.add("show");
}


function answer(type) {

    const reply = document.getElementById("reply");
    const next = document.getElementById("last");
    const choices = document.getElementById("choices");

    choices.classList.remove("show");

    if (type === "candour") {
        reply.textContent =
            "A rather formidable choice. Perhaps honesty is precisely what this correspondence requires.";
    }

    if (type === "forgive") {
        reply.textContent =
            "An unexpectedly generous proposition. I shall endeavour to be worthy of it.";
    }

    if (type === "conversation") {
        reply.textContent =
            "Perhaps the simplest answer is occasionally the most consequential one.";
    }

    next.classList.remove("hidden");
}


function revealDog() {
    const dog = document.getElementById("dog");

    dog.classList.remove("hidden");
}