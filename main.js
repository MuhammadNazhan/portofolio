window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const scrolled = (scrollTop / scrollHeight) * 100;

  if (scrolled > 80) {
    document.querySelector(".back-to-top").style.display = "block";
  } else {
    document.querySelector(".back-to-top").style.display = "none";
  }

  document.getElementById("progress").style.width = scrolled + "%";
  document.getElementById("text").innerText = Math.round(scrolled) + "%";
  document.getElementById("text").style.opacity = (scrolled + 20) / 100;
});
