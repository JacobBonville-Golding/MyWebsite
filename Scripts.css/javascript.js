const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function() {
  // This moves the page back to the very top
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});