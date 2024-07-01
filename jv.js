let quesBox = document.querySelectorAll(".quesBox");

quesBox.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.querySelector(".subText").classList.toggle("hide");
    })
})