window.addEventListener("scroll", (e) => {
  console.log(e);
  console.log("body", document.body.scrollTop);
  console.log("de", document.documentElement.scrollTop);
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
    document.querySelector("header").classList.add("opaque");
  else document.querySelector("header").classList.remove("opaque");
});
