try {
  const body = document.querySelector("body");
  const hum = document.querySelector(".hum");
  const a = document.querySelectorAll(" header a");
  const header = document.querySelector("header");
  if (window.innerWidth <= 830) {
    hum.addEventListener("click", function () {
      body.classList.toggle("show");
    });
  } else {
    body.classList.remove("show");
  }

  a.forEach((x) => {
    x.addEventListener("click", () => {
      body.classList.remove("show");
    });
  });
} catch (error) {
  console.log("Error is " + error);
}
