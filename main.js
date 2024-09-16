const btn = document.getElementById("clickzo");
const box1 = document.getElementById("imgBox");
const box2 = document.getElementById("imgBox2");
let cnt = 0;
btn.addEventListener("click", () => {
  if (!box1.classList.contains("active") && cnt === 0) {
    box1.classList.add("active");
    btn.innerText = "Bấm nữa đi";
    cnt++;
  } else if (cnt === 1) {
    box1.classList.remove("active");
    box2.classList.add("active");
    btn.innerText = "Hết gòi thế thui";
  } else return;
});
