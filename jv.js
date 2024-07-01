/* let quesBoxes = document.querySelectorAll(".quesBox");

quesBoxes.forEach(quesBox => {
  const btn = quesBox.querySelector(".quesbtn"); // Find the button within each quesBox

  btn.addEventListener("click", function() {
    const subText = quesBox.querySelector(".subText"); // Find the subText within the same quesBox

    // Toggle the "hide" class on the subText element (assuming "hide" class hides the content)
    subText.classList.toggle('hide');

    // Optional: Log a message to the console for debugging purposes
    console.log("Button clicked! SubText visibility:", subText.classList.contains('hide') ? "Hidden" : "Visible");
  });
});
 */

let quesBox = document.querySelectorAll(".quesBox");

quesBox.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.querySelector(".subText").classList.toggle("hide");
    })
})